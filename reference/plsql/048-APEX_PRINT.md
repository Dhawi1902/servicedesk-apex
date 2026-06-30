<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 48 APEX_PRINT

The APEX_PRINT package provides APIs to invoke remote print servers and generate documents based on templates and data.

- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.Constants.html#GUID-A7361529-20ED-4C38-B78F-8EE0DB8D5850)
- [GENERATE_DOCUMENT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-1.html#GUID-A78EE63E-772B-43AC-92CC-A2C1DCA0C323)
- [GENERATE_DOCUMENT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-2.html#GUID-B63F5188-3F9C-407F-BEEB-93FA7626A3DB)
- [GENERATE_DOCUMENT Function Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-3.html#GUID-FE4A510D-1555-4556-939F-D81A37818116)
- [GENERATE_DOCUMENT Function Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-4.html#GUID-50926736-8221-44E5-A13F-8FE922EA94FC)
- [GENERATE_DOCUMENT Function Signature 5](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-5.html#GUID-BFA49493-38F0-4C80-B35D-378D2B04B033)
- [GENERATE_DOCUMENT Function Signature 6](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.GENERATE_DOCUMENT-Function-Signature-6.html#GUID-655E1FAC-1162-42A9-9280-AE0CF82478A4)
- [REMOVE_TEMPLATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.REMOVE_TEMPLATE-Procedure.html#GUID-4072B77C-E4B8-456F-AEBE-67E9363747EA)
- [UPLOAD_TEMPLATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html#GUID-40C64A74-7D17-4ACA-997F-7B943C0F8D8E)

------------------------------------------------------------------------

## 48.1 Constants

The APEX_PRINT package uses the following constants.

Template Type Constants

```
subtype t_template_type is pls_integer range 1..12;

c_template_docx     constant t_template_type := 1;
c_template_xlsx     constant t_template_type := 2;
c_template_pptx     constant t_template_type := 3;
c_template_html     constant t_template_type := 4;
c_template_markdown constant t_template_type := 5;
c_template_csv      constant t_template_type := 6;
c_template_txt      constant t_template_type := 7;
c_template_ods      constant t_template_type := 8;
c_template_odt      constant t_template_type := 9;
c_template_odp      constant t_template_type := 10;
c_template_rtf      constant t_template_type := 11;
c_template_xslfo    constant t_template_type := 12;
```

Output Type Constants

```
subtype t_output_type is pls_integer range 1..15;

c_output_pdf        constant t_output_type := 1;
c_output_docx       constant t_output_type := 2;
c_output_xlsx       constant t_output_type := 3;
c_output_pptx       constant t_output_type := 5;
c_output_html       constant t_output_type := 4;
c_output_markdown   constant t_output_type := 6;
c_output_csv        constant t_output_type := 7;
c_output_txt        constant t_output_type := 8;
c_output_odt        constant t_output_type := 9;
c_output_ods        constant t_output_type := 10;
c_output_odp        constant t_output_type := 11;
c_output_htm        constant t_output_type := 12;
c_output_rtf        constant t_output_type := 13;
c_output_xls        constant t_output_type := 14;
c_output_xml        constant t_output_type := 15;
```

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.2 GENERATE_DOCUMENT Function Signature 1

This function generates a document based on data and a template and returns the contents.

Can only be used when Oracle Document Generator Pre-built Function is configured as print server in the instance.

To be used when printing a single document using a custom template, which is not stored as report layout.

Syntax

```
APEX_PRINT.GENERATE_DOCUMENT (
    p_data               IN CLOB,
    p_template           IN BLOB,
    p_template_type      IN t_template_type  DEFAULT c_template_docx,
    p_output_type        IN t_output_type    DEFAULT c_output_pdf,
    p_output_password    IN VARCHAR2         DEFAULT NULL ) )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_data` | Data for the document. Currently JSON format only. |
| `p_template` | Contents of the template. |
| `p_template_type` | Type of the template. |
| `p_output_type` | The type of document. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

Returns

A BLOB containing the generated document.

Example

The following example generates a PDF document using an uploaded template and custom JSON data.

```
DECLARE
    l_template  blob;
    l_data      sys.json_object_t := sys.json_object_t();
    l_document  blob;
BEGIN

    SELECT blob_content
      INTO l_template
      FROM apex_application_temp_files
     WHERE name = :P1_TEMPLATE;

    l_data.put( 'name', 'Scott' );

    l_document := apex_print.generate_document(
                      p_data        => l_data.to_clob,
                      p_template    => l_template );

END;
```

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.3 GENERATE_DOCUMENT Function Signature 2

This function returns a document as BLOB using a pre-defined report query.

Syntax

```
APEX_PRINT.GENERATE_DOCUMENT (
    p_application_id            IN NUMBER,
    p_report_query_static_id    IN VARCHAR2,
    p_report_layout_static_id   IN VARCHAR2         DEFAULT NULL,
    p_output_type               IN t_output_type    DEFAULT c_output_pdf,
    p_output_password           IN VARCHAR2         DEFAULT NULL )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Defines the application ID of the report layout. |
| `p_report_query_static_id` | Static ID of the report query (stored under application's shared components). |
| `p_report_layout_static_id` | Static ID of the report layout (stored under application's shared components). |
| `p_output_type` | Defines the document format. See `t_output_type` for the available types in [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.Constants.html#GUID-A7361529-20ED-4C38-B78F-8EE0DB8D5850). |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

Returns

A BLOB containing the generated document.

Example

The following example generates a PDF document using a report query and a report layout defined in an application.

```
DECLARE
    l_document blob;
BEGIN

    l_document :=
        apex_print.generate_document (
            p_application_id             => 100,
            p_report_query_static_id     => 'MY_REPORT_QUERY',
            p_report_layout_static_id    => 'MY_REPORT_LAYOUT',
            p_output_type                => apex_print.c_output_pdf );

    apex_http.download(
        p_blob           => l_document,
        p_content_type   => 'application/pdf',
        p_filename       => 'my-report.pdf' );

END;
```

See Also:

[Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.Constants.html#GUID-A7361529-20ED-4C38-B78F-8EE0DB8D5850)

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.4 GENERATE_DOCUMENT Function Signature 3

This function returns a document as BLOB using a pre-defined report layout.

Syntax

```
APEX_PRINT.GENERATE_DOCUMENT (
    p_application_id            IN NUMBER,
    p_data                      IN CLOB,
    p_report_layout_static_id   IN VARCHAR2,
    p_output_type               IN t_output_type    DEFAULT c_output_pdf,
    p_output_password           IN VARCHAR2         DEFAULT NULL )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Defines the application ID of the report layout. |
| `p_data` | Report data. The format depends on the type of print server that is used. |
| `p_report_layout_static_id` | Static ID of the report layout (stored under application's shared components). |
| `p_output_type` | Defines the document format. See `t_output_type` for the available types in [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.Constants.html#GUID-A7361529-20ED-4C38-B78F-8EE0DB8D5850). |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

Returns

A BLOB containing the generated document.

Example

The following example generates a PDF document using custom JSON and a report layout defined in an application.

```
DECLARE
    l_document blob;
    l_json     sys.json_object_t := sys.json_object_t();
BEGIN

    l_json.put( 'title', 'Hello World' );

    l_document :=
        apex_print.generate_document (
            p_application_id             => 100,
            p_data                       => l_json.to_clob(),
            p_report_layout_static_id    => 'MY_REPORT_LAYOUT',
            p_output_type                => apex_print.c_output_pdf );

    apex_http.download(
        p_blob           => l_document,
        p_content_type   => 'application/pdf',
        p_filename       => 'hello-world.pdf' );

END;
```

See Also:

[Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.Constants.html#GUID-A7361529-20ED-4C38-B78F-8EE0DB8D5850)

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.5 GENERATE_DOCUMENT Function Signature 4

This function generates a document using an uploaded template and returns the contents.

Can only be used when Oracle Document Generator Pre-built Function is configured as print server in the instance.

To be used in combination with the [UPLOAD_TEMPLATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html#GUID-40C64A74-7D17-4ACA-997F-7B943C0F8D8E) and [REMOVE_TEMPLATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.REMOVE_TEMPLATE-Procedure.html#GUID-4072B77C-E4B8-456F-AEBE-67E9363747EA) APIs to generate documents using the same custom template, which is not stored as a report layout.

Syntax

```
APEX_PRINT.GENERATE_DOCUMENT (
    p_data            IN CLOB,
    p_template_id     IN NUMBER,
    p_output_type     IN t_output_type    DEFAULT c_output_pdf,
    p_output_password IN VARCHAR2         DEFAULT NULL )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_data` | Data for the document. Currently JSON format only. |
| `p_template_id` | ID of the template. |
| `p_output_type` | The type of document. Currently only c_output_pdf. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

Returns

A BLOB containing the generated document.

Example

See [UPLOAD_TEMPLATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html#GUID-40C64A74-7D17-4ACA-997F-7B943C0F8D8E).

See Also:

- [UPLOAD_TEMPLATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html#GUID-40C64A74-7D17-4ACA-997F-7B943C0F8D8E)
- [REMOVE_TEMPLATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.REMOVE_TEMPLATE-Procedure.html#GUID-4072B77C-E4B8-456F-AEBE-67E9363747EA)

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.6 GENERATE_DOCUMENT Function Signature 5

Generates a document using an custom template stored in an OCI Object Storage Bucket and return the contents.

Can only be used when Oracle Document Generator Pre-built Function is configured as print server in the instance.

Syntax

```
APEX_PRINT.GENERATE_DOCUMENT (
    p_data                   IN              CLOB,
    p_template_type          IN              t_template_type,
    p_template_bucket        IN              VARCHAR2,
    p_template_namespace     IN              VARCHAR2,
    p_template_object        IN              VARCHAR2,
    p_output_type            IN              t_output_type DEFAULT c_output_pdf,
    p_output_password        IN              VARCHAR2      DEFAULT NULL)
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_data` | Data for the document. Currently JSON format only. |
| `p_template_type` | Type of the template. |
| `p_template_bucket` | Name of the Object Storage bucket. |
| `p_template_namespace` | Object Storage namespace. |
| `p_template_object` | Name of the Template Object in Object Storage. |
| `p_output_type` | The type of document. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

Example

The following example gets a PDF using a custom JSON data and a custom template stored in an OCI Object Storage Bucket.

```
declare
    l_document blob;
    l_json     sys.json_object_t := sys.json_object_t();
begin

    l_json.put( 'title', 'Hello World' );

    l_document :=
        apex_print.generate_document (
            p_data                => l_json.to_clob(),
            p_template_type       => apex_print.c_template_docx,
            p_template_bucket     => 'mybucket',
            p_template_namespace  => 'mynamespace',
            p_template_object     => 'mytemplate.docx',
            p_output_type         => apex_print.c_output_pdf,
            p_output_password     => '...put your password here...' );

    apex_http.download(
        p_blob           => l_document,
        p_content_type   => 'application/pdf',
        p_filename       => 'hello-world.pdf' );

end;
```

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.7 GENERATE_DOCUMENT Function Signature 6

Generates a document using a custom template stored in an OCI Object Storage Bucket and return the contents.

Can only be used when Oracle Document Generator Pre-built Function is configured as print server in the instance.

Syntax

```
APEX_PRINT.GENERATE_DOCUMENT (
    p_application_id         IN              NUMBER,
    p_report_query_static_id IN              VARCHAR2,
    p_template_type          IN              t_template_type,
    p_template_bucket        IN              VARCHAR2,
    p_template_namespace     IN              VARCHAR2,
    p_template_object        IN              VARCHAR2,
    p_output_type            IN              t_output_type    DEFAULT c_output_pdf,
    p_output_password        IN              VARCHAR2         DEFAULT NULL)
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Defines the application ID of the report query. |
| `p_report_query_static_id` | Static ID of the report query (stored under application's Shared Components). |
| `p_template_type` | Type of the template. |
| `p_template_bucket` | Name of the Object Storage bucket. |
| `p_template_namespace` | Object Storage namespace. |
| `p_template_object` | Name of the Template Object in Object Storage. |
| `p_output_type` | The type of document. |
| `p_output_password` | The password to needed to open the generated document. PDF only. |

Example

The following example gets a PDF using a report query and a custom template stored in an OCI Object Storage Bucket.

```
declare
    l_document blob;
begin

    l_document :=
        apex_print.generate_document (
            p_application_id         => 100,
            p_report_query_static_id => 'MY_REPORT_QUERY',
            p_template_type          => apex_print.c_template_docx,
            p_template_bucket        => 'mybucket',
            p_template_namespace     => 'mynamespace',
            p_template_object        => 'mytemplate.docx',
            p_output_type            => apex_print.c_output_pdf,
            p_output_password        => '...put your password here...' );

    apex_http.download(
        p_blob           => l_document,
        p_content_type   => 'application/pdf',
        p_filename       => 'hello-world.pdf' );

end;
```

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.8 REMOVE_TEMPLATE Procedure

This procedure removes a template from OCI Object Storage.

Can only be used when Oracle Document Generator Pre-built Function is configured as print server in the instance.

To be used in combination with [UPLOAD_TEMPLATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html#GUID-40C64A74-7D17-4ACA-997F-7B943C0F8D8E) to generate documents using the same custom template, which is not stored as a report layout.

Syntax

```
APEX_PRINT.REMOVE_TEMPLATE (
    p_template_id IN NUMBER )
```

Parameters

| Parameter       | Description             |
|:----------------|:------------------------|
| `p_template_id` | ID of the the template. |

Example

See [UPLOAD_TEMPLATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html#GUID-40C64A74-7D17-4ACA-997F-7B943C0F8D8E).

See Also:

[UPLOAD_TEMPLATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.UPLOAD_TEMPLATE-Function.html#GUID-40C64A74-7D17-4ACA-997F-7B943C0F8D8E)

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)

------------------------------------------------------------------------

## 48.9 UPLOAD_TEMPLATE Function

This function uploads a template to OCI Object Storage and returns its corresponding ID.

Can only be used when Oracle Document Generator Pre-built Function is configured as print server in the instance.

To be used in combination with the `APEX_PRINT.GENERATE_DOCUMENT` and [REMOVE_TEMPLATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.REMOVE_TEMPLATE-Procedure.html#GUID-4072B77C-E4B8-456F-AEBE-67E9363747EA) APIs to generate documents using the same custom template, which is not stored as a report layout.

Syntax

```
APEX_PRINT.UPLOAD_TEMPLATE (
    p_template      IN BLOB,
    p_template_type IN t_template_type  DEFAULT c_template_docx )
    RETURN NUMBER;
```

Parameters

| Parameter         | Description              |
|:------------------|:-------------------------|
| `p_template`      | Content of the template. |
| `p_template_type` | Type of the template.    |

Returns

A number containing the unique ID to reference the template in future calls.

Example

The following example uploads the template to Object Storage that was uploaded in Oracle APEX by an end user, generates a PDF document, and removes the template afterwards.

```
DECLARE
    l_template       blob;
    l_template_id    number;
    l_data           sys.json_object_t := sys.json_object_t();
    l_document       blob;
BEGIN

    SELECT blob_content
      INTO l_template
      FROM apex_application_temp_files
     WHERE name = :P1_TEMPLATE;

    l_template_id := apex_print.upload_template( p_template => l_template );

    l_data.put( 'name', 'Scott' );

    l_document := apex_print.generate_document(
                      p_data         => l_data.to_clob,
                      p_template_id  => l_template_id );

    apex_print.remove_template( p_template_id => l_template_id );

EXCEPTION
    WHEN others THEN
        apex_print.remove_template( p_template_id => l_template_id );
END;
```

See Also:

- [REMOVE_TEMPLATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.REMOVE_TEMPLATE-Procedure.html#GUID-4072B77C-E4B8-456F-AEBE-67E9363747EA)

**Parent topic:** [APEX_PRINT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PRINT.html#GUID-D6C94354-7BF6-4A3B-88F5-0F169874BF49)
