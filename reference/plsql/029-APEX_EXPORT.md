<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 29  APEX_EXPORT

The APEX_EXPORT package provides APIs to export the definitions of applications, files, feedback, and workspaces to text files. `APEX_EXPORT` uses utility types `APEX_T_EXPORT_FILE` and `APEX_T_EXPORT_FILES`. The `APEX_T_EXPORT_FILE` is a tuple of (name, contents) where name is the file name and contents is a clob containing the export object's definition. `APEX_T_EXPORT_FILES` is a table of `APEX_T_EXPORT_FILE`.

- [Constants and Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.Constants_Data_Types.html#GUID-04D60288-682F-4CAC-9D05-227237B9416B)
- [GET_APPLICATION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_Function.html#GUID-A8E626D6-D7DE-4E59-8F90-3666A7A41A87)
- [GET_FEEDBACK Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FEEDBACK_Function.html#GUID-0A3A7571-D8E9-4E1F-9BC7-5D087F92CED8)
- [GET_WORKSPACE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_Function.html#GUID-493DB29D-8740-418E-9AF9-419EDE564CC5)
- [GET_WORKSPACE \_FILES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE.html#GUID-C8A37D81-3DA0-4942-B889-78CB671B7070)
- [UNZIP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UNZIP-Function.html#GUID-F0C453FF-E884-4F24-9399-0A349B8BA370)
- [ZIP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ZIP-Function.html#GUID-B7A390FC-ED71-4605-9C0A-8503E4DED82A)

------------------------------------------------------------------------

## 29.1 Constants and Data Types

The APEX_EXPORT package uses the following constants.

```
c_type_apexlang           constant t_export_type := 'APEXLANG';
c_type_sql                constant t_export_type := 'SQL';
c_type_embedded_code      constant t_export_type := 'EMBEDDED_CODE';
c_type_checksum_sh1       constant t_export_type := 'CHECKSUM-SH1';
c_type_checksum_sh256     constant t_export_type := 'CHECKSUM-SH256';
c_audit_dates_only        constant t_audit_type  := 'DATES_ONLY';
c_audit_names_dates       constant t_audit_type  := 'NAMES_AND_DATES';
```

The APEX_EXPORT package uses the following data types.

```
type t_export_file is object (
   name                    varchar2(1024),
   contents                clob,
   contents_blob           blob,
   component_display_name  varchar2(1024),
   component_type          varchar2(255),
   component_type_label    varchar2(1024),
   component_id            varchar2(255) );

type t_export_files is table of t_export_file;

subtype t_export_type     is varchar2( 255 );
subtype t_audit_type      is varchar2( 255 );
```

Note:

`contents_blob` is for binary file export and only is used when using `APEXLANG` application export. Either `contents` or `contents_blob` must always have a value, but never both at the same time. `contents_blob` only has a value if `contents` is null and vice versa. You need to conditionally check if consuming this type.

**Parent topic:** [APEX_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html#GUID-6A4628A6-9F86-4394-9938-87A7FFFC7BC8)

------------------------------------------------------------------------

## 29.2 GET_APPLICATION Function

This function exports the given application and optionally splits the application definition into multiple files. The optional `p_with_%` parameters can be used to include additional information in the export.

Syntax

```
APEX_EXPORT.GET_APPLICATION (
    p_application_id            IN NUMBER,
    p_type                      IN t_export_type    DEFAULT c_type_sql,
    p_split                     IN BOOLEAN          DEFAULT FALSE,
    p_with_date                 IN BOOLEAN          DEFAULT FALSE,
    p_with_ir_public_reports    IN BOOLEAN          DEFAULT FALSE,
    p_with_ir_private_reports   IN BOOLEAN          DEFAULT FALSE,
    p_with_ir_notifications     IN BOOLEAN          DEFAULT FALSE,
    p_with_translations         IN BOOLEAN          DEFAULT FALSE,
    p_with_original_ids         IN BOOLEAN          DEFAULT FALSE,
    p_with_no_subscriptions     IN BOOLEAN          DEFAULT FALSE,
    p_with_comments             IN BOOLEAN          DEFAULT FALSE,
    p_with_supporting_objects   IN VARCHAR2         DEFAULT NULL,
    p_with_acl_assignments      IN BOOLEAN          DEFAULT FALSE,
    p_components                IN apex_t_varchar2  DEFAULT NULL,
    p_with_audit_info           IN t_audit_type     DEFAULT NULL,
    p_with_runtime_instances    IN apex_t_varchar2  DEFAULT NULL )
    RETURN apex_t_export_files;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d141408e74" style="text-align: left;" data-valign="bottom" width="40%">Parameters</th>
<th id="d141408e76" style="text-align: left;" data-valign="bottom" width="60%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d141408e80" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e80 d141408e76 ">The application ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e86" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_type</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e86 d141408e76 ">Comma-delimited list of export types to perform:
<ul>
<li><code class="codeph">APEXLANG</code> - export the APEX application metadata in the readable, modifiable, and importable APEXlang format.
<p>Note:</p>
If <code class="codeph">READABLE_YAML</code> (deprecated) is passed in, <code class="codeph">APEXLANG</code> is generated.
</div></li>
<li><code class="codeph">SQL</code> - export the APEX application metadata in the importable SQL format.</li>
<li><code class="codeph">EMBEDDED_CODE</code> - export code such as SQL, PL/SQL and JavaScript. APEX ignores all other options when <code class="codeph">EMBEDDED_CODE</code> is selected.</li>
<li><code class="codeph">CHECKSUM-SH1</code> - export a SHA1 checksum that is independent of IDs and can be compared across instances and workspaces.</li>
<li><code class="codeph">CHECKSUM-SH256</code> - export a SHA-256 checksum that is independent of IDs and can be compared across instances and workspaces.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e136" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_split</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e136 d141408e76 ">If <code class="codeph">TRUE</code>, splits the definition into discrete elements that can be stored in separate files. If <code class="codeph">FALSE</code>, the result is a single file.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e148" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_date</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e148 d141408e76 ">If <code class="codeph">TRUE</code>, includes export date and time in the result.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e157" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_ir_public_reports</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e157 d141408e76 ">If <code class="codeph">TRUE</code>, includes public reports that a user saved.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e166" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_ir_private_reports</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e166 d141408e76 ">If <code class="codeph">TRUE</code>, includes private reports that a user saved.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e175" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_ir_notifications</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e175 d141408e76 ">If <code class="codeph">TRUE</code>, includes report notifications.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e184" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_translations</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e184 d141408e76 ">If <code class="codeph">TRUE</code>, includes application translation mappings and all text from the translation repository.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e193" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_original_ids</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e193 d141408e76 ">If <code class="codeph">TRUE</code>, exports with the IDs as they were when the application was imported.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e202" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_no_subscriptions</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e202 d141408e76 ">If <code class="codeph">FALSE</code>, components contain subscription references.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e211" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_comments</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e211 d141408e76 ">If <code class="codeph">TRUE</code>, includes all comments.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e221" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_supporting_objects</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e221 d141408e76 "><p>If <code class="codeph">Y</code>, exports supporting objects.</p>
<p>If <code class="codeph">I</code>, installs on import automatically.</p>
<p>If <code class="codeph">N</code>, does not export supporting objects.</p>
<p>If <code class="codeph">NULL</code>, uses the application's Include in Export deployment value.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e249" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_acl_assignments</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e249 d141408e76 ">If <code class="codeph">TRUE</code>, exports ACL user role assignments.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e258" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_components</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e258 d141408e76 ">If not <code class="codeph">NULL</code>, exports only the given components (array elements should be of form <code class="codeph">type</code><code class="codeph">:</code><code class="codeph">name</code>, for example, <code class="codeph">PAGE:42</code> or <code class="codeph">MESSAGE:12345</code>).
<p>Use <code class="codeph">%</code> to indicate that all components of the given type should be exported. For example: <code class="codeph">LOV:%</code> exports all Lists Of Values contained in the application.</p>
<p>See view <code class="codeph">APEX_APPL_EXPORT_COMPS</code> for components that can be exported.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e293" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_audit_info</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e293 d141408e76 ">Specifies the detail of audit information to include:
<ul>
<li><code class="codeph">NULL</code> - export excludes all audit information.</li>
<li><code class="codeph">NAMES_AND_DATES</code> - export includes Created On, Created By, Updated On, Updated By values if they exist.</li>
<li><code class="codeph">DATES_ONLY</code> - export includes Created On and Updated On values if they exist. User names are excluded.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141408e312" style="text-align: left;" data-valign="top" width="40%" headers="d141408e74 "><code class="codeph">p_with_runtime_instances</code></td>
<td style="text-align: left;" data-valign="top" width="60%" headers="d141408e312 d141408e76 ">An array with components for which to export runtime instance data. For example, specify <code class="codeph">WORKFLOW</code> to export all Workflow Instances together with the application.</td>
</tr>
</tbody>
</table>

Returns

A table of `apex_t_export_file`. Unless the caller passes `p_split=>true` to the function, the result is a single file.

Example 1

This SQLcl code fragment spools the definition of application `100` into file `f100.sql`.

```
variable name     varchar2(255)
variable contents clob
declare
    l_files apex_t_export_files;
begin
    l_files   := apex_export.get_application(p_application_id =>100);
    :name     := l_files(1).name;
    :contents := l_files(1).contents;
end;
/
set feed off echo off head off flush off termout off trimspool on
set long 100000000 longchunksize 32767
col name new_val name
select :name name from sys.dual;
spool &name.
print contents
spool off
```

**Parent topic:** [APEX_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html#GUID-6A4628A6-9F86-4394-9938-87A7FFFC7BC8)

------------------------------------------------------------------------

## 29.3 GET_FEEDBACK Function

This function exports user feedback to the development environment or developer feedback to the deployment environment.

Syntax

```
APEX_EXPORT.GET_FEEDBACK (
    p_workspace_id      IN NUMBER,
    p_with_date         IN BOOLEAN  DEFAULT FALSE,
    p_since             IN DATE     DEFAULT NULL,
    p_deployment_system IN VARCHAR2 DEFAULT NULL )
    RETURN apex_t_export_files;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_workspace_id` | The workspace id. |
| `p_with_date` | If `TRUE`, include export date and time in the result. |
| `p_since` | If set, only export feedback that has been gathered since the given date. |
| `p_deployment_system` | If NULL, export user feedback. If not NULL, export developer feedback for the given deployment system. |

Returns

A table of `apex_t_export_file`.

Example 1

Export feedback to development environment.

```
declare
     l_file apex_t_export_files;
begin
     l_file := apex_export.get_feedback(p_workspace_id => 12345678);
end;
```

Example 2

Export developer feedback in workspace 12345678 since 8-MAR-2010 to deployment environment EA2.

```
declare
    l_file apex_t_export_files;
begin
    l_file := apex_export.get_feedback (
                  p_workspace_id => 12345678,
                  p_since => date'2010-03-08',
                  p_deployment_system => 'EA2' );
end;
```

**Parent topic:** [APEX_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html#GUID-6A4628A6-9F86-4394-9938-87A7FFFC7BC8)

------------------------------------------------------------------------

## 29.4 GET_WORKSPACE Function

This function exports the given workspace's definition and users. The optional `p_with_%` parameters (which all default to `FALSE`) can be used to include additional information in the export.

Syntax

```
APEX_EXPORT.GET_WORKSPACE (
    p_workspace_id          IN NUMBER,
    p_with_date             IN BOOLEAN  DEFAULT FALSE,
    p_with_team_development IN BOOLEAN  DEFAULT FALSE,
    p_with_misc             IN BOOLEAN  DEFAULT FALSE )
    RETURN apex_t_export_files;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_workspace_id` | The workspace ID. |
| `p_with_date` | If `TRUE`, include export date and time in the result. |
| `p_with_team_development` | If `TRUE`, include team development data. |
| `p_with_misc` | If `TRUE`, include data from SQL Workshop, mail logs, and so on, in the export. |

Returns

A table of `apex_t_export_file`.

Examples

The following example exports the definition of workspace \#12345678.

```
DECLARE
    l_file apex_t_export_files;
BEGIN
    l_files := apex_export.get_workspace(p_workspace_id => 12345678);
END;
```

**Parent topic:** [APEX_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html#GUID-6A4628A6-9F86-4394-9938-87A7FFFC7BC8)

------------------------------------------------------------------------

## 29.5 GET_WORKSPACE \_FILES Function

This function exports the given workspace's static files.

Syntax

```
FUNCTION GET_WORKSPACE_FILES (
    p_workspace_id     IN NUMBER,
    p_with_date        IN BOOLEAN  DEFAULT FALSE )
    RETURN apex_t_export_files;
```

Parameters

| Parameters       | Description                                            |
|:-----------------|:-------------------------------------------------------|
| `p_workspace_id` | The workspace ID.                                      |
| `p_with_date`    | If `TRUE`, include export date and time in the result. |

Returns

A table of `apex_t_export_file`. The result is a single file, splitting into multiple files will be implemented in a future release.

Example

Export the workspace files of the workspace with id 12345678.

```
DECLARE
    l_file apex_t_export_files;
BEGIN
    l_file := apex_export.get_workspace_files(p_workspace_id => 12345678);
END;
```

**Parent topic:** [APEX_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html#GUID-6A4628A6-9F86-4394-9938-87A7FFFC7BC8)

------------------------------------------------------------------------

## 29.6 UNZIP Function

This function extracts and decompresses all the files from a zip archive.

This function is intended for use with the routines in the `APEX_APPLICATION_INSTALL` package and assumes that all of the files in the ZIP archive are in a text format, such as SQL scripts (which must have a `.sql` extension) or simple `README` files.

All text content in the ZIP file must be encoded as UTF-8.

Syntax

```
APEX_EXPORT.UNZIP (
    p_source_zip    IN BLOB )
    RETURN apex_t_export_files;
```

Parameters

| Parameter      | Description                        |
|:---------------|:-----------------------------------|
| `p_source_zip` | A BLOB containing the zip archive. |

Returns

This function returns a table of `apex_t_export_file` containing the name and contents (converted to text format) of each file from the ZIP archive.

Example

The following example fetches an application archive from a remote URL, extracts the files within it, and prints the type and name of the contained application.

```
DECLARE
   l_zip blob;
   l_info apex_application_install.t_file_info;
BEGIN
   l_zip := apex_web_service.make_rest_request_b (
                p_url => 'https://www.example.com/apps/f100.zip',
                p_http_method => 'GET' );
   l_info := apex_application_install.get_info (
                   p_source => apex_export.unzip (
                       p_source_zip => l_zip ) );

   sys.dbms_output.put_line (
       apex_string.format (
           p_message => q'~
                        !Type ................. %0
                        !App Name ............. %1
                        !~',
           p0 => l_info.file_type,
           p1 => l_info.app_name,
           p_prefix => '!' ));
END;
```

**Parent topic:** [APEX_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html#GUID-6A4628A6-9F86-4394-9938-87A7FFFC7BC8)

------------------------------------------------------------------------

## 29.7 ZIP Function

This function compresses a list of files (usually obtained from one of the `APEX_EXPORT` routines) into a single BLOB containing a `.zip` archive. All text content in the resultant `.zip` file is encoded as UTF-8.

All file names within the archive must be unique to prevent the accidental overwriting of files in the application export (an exception raises otherwise).

Additional files (`p_extra_files`) may also be added to the resultant archive, such as a simple `README.txt` file or licensing information.

Syntax

```
APEX_EXPORT.ZIP (
    p_source_files  apex_t_export_files,
    p_extra_files   apex_t_export_files DEFAULT apex_t_export_files() )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_source_files` | A table of files. For example, from `apex_export.get_application`. |
| `p_extra_files` | Optional additional files to add to the resultant `.zip` archive. |

Returns

This function returns a BLOB containing the compressed application files and any extra files, in ZIP format.

Example

```
DECLARE
  l_source_files apex_t_export_files;
  l_extra_files apex_t_export_files;
  l_zip blob;
BEGIN
  l_source_files := apex_export.get_application(
    p_application_id => 100,
    p_split => true );

  l_extra_files := apex_t_export_files(
    apex_t_export_file(
      name => 'README.md',
      contents => 'An example exported application.' ),
    apex_t_export_file(
      name => 'LICENSE.txt',
      contents => 'The Universal Permissive License (UPL), Version 1.0' ) );

  l_zip := apex_export.zip(
    p_source_files => l_source_files,
    p_extra_files => l_extra_files );

    sys.dbms_output.put_line(
      'Compressed application export to zip of size; '
      || sys.dbms_lob.getLength( l_zip ) );
END;
```

**Parent topic:** [APEX_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXPORT.html#GUID-6A4628A6-9F86-4394-9938-87A7FFFC7BC8)
