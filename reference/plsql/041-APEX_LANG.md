<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 41  APEX_LANG

You can use `APEX_LANG` API to translate messages.

- [APPLY_XLIFF_DOCUMENT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPLY_XLIFF_DOCUMENT-Procedure.html#GUID-7006EC05-AEBF-44D0-AB3F-9CB38A73781F)
- [CREATE_LANGUAGE_MAPPING Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_LANGUAGE_MAPPING-Procedure.html#GUID-A983CA72-673A-4EFE-9B1C-915E7FE7F35A)
- [CREATE_MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.CREATE_MESSAGE-Procedure.html#GUID-1AAABD8A-AF94-4B69-846D-1430B7684578)
- [DELETE_LANGUAGE_MAPPING Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_LANGUAGE_MAPPING-Procedure.html#GUID-9BFEA551-139B-4784-89CD-CE9ECC5504EE)
- [DELETE_MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MESSAGE-Procedure.html#GUID-A0CFF75D-C7A7-4DED-BA2F-9E384A3C6395)
- [EMIT_LANGUAGE_SELECTOR_LIST Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EMIT_LANGUAGE_SELECTOR_LIST-Procedure.html#GUID-99ACD9EA-9250-4DEF-B6B4-0B95E3F97D9B)
- [EXPORT_TEXT_MESSAGES Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.EXPORT_TEXT_MESSAGES-Function-Signature-1.html#GUID-F8D1C305-EFF6-475F-994D-8771316AFD9B)
- [EXPORT_TEXT_MESSAGES Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.EXPORT_TEXT_MESSAGES-Function-Signature-2.html#GUID-60B6F915-FF9E-4570-B038-18D7BB6A1284)
- [GET_LANGUAGE_SELECTOR_LIST Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LANGUAGE_SELECTOR_LIST-Function.html#GUID-40CFCC0F-78EF-44FB-BCDF-FE635E56BC68)
- [GET_MESSAGE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.GET_MESSAGE-Function.html#GUID-0E4ED6B6-64E7-4043-9DC9-9C746E595357)
- [GET_XLIFF_DOCUMENT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_XLIFF_DOCUMENT-Function.html#GUID-BFCC4CCF-1DFD-4565-B63C-A5A5AA46EF44)
- [IMPORT_TEXT_MESSAGES Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.IMPORT_TEXT_MESSAGES-Procedure-Signature-1.html#GUID-AB822B9E-6402-44A0-8BC8-63102E4A4826)
- [IMPORT_TEXT_MESSAGES Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.IMPORT_TEXT_MESSAGES-Procedure-Signature-2.html#GUID-022C48FA-779C-4968-B2B3-6BAFEBD55E52)
- [LANG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LANG_Function.html#GUID-B189F9B8-3E40-4C77-9A5A-0AE4A612B75F)
- [MESSAGE Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Function.html#GUID-0D2B9901-CEBB-4B99-A6EA-7D7B3CCA8F1A)
- [PUBLISH_APPLICATION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUBLISH_APPLICATION-Procedure.html#GUID-0C32F288-AC1A-488F-BF8D-59F0A9125D3A)
- [SEED_TRANSLATIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEED_TRANSLATIONS-Procedure.html#GUID-0CB1D45D-3C21-4859-8B41-381F31D1A204)
- [UPDATE_LANGUAGE_MAPPING Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_LANGUAGE_MAPPING-Procedure.html#GUID-9864C51A-3404-4BDE-BF89-A89462C844DC)
- [UPDATE_MESSAGE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.UPDATE_MESSAGE-Procedure-Signature-1.html#GUID-47C6C7BC-165A-4445-A787-D062CE94D2A0)
- [UPDATE_MESSAGE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.UPDATE_MESSAGE-Procedure-Signature-2.html#GUID-0C57D486-634B-4350-888E-CCA537E246BB)
- [UPDATE_TRANSLATED_STRING Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_TRANSLATED_STRING-Procedure.html#GUID-9ED57702-E859-442E-BBC0-A3C076B1F03A)

------------------------------------------------------------------------

## 41.1 APPLY_XLIFF_DOCUMENT Procedure

This procedure applies the specified XLIFF document for the specified language to the translation repository.

Syntax

```
APEX_LANG.APPLY_XLIFF_DOCUMENT (
    p_application_id    IN NUMBER,
    p_language          IN VARCHAR2,
    p_document          IN CLOB )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Application ID of the primary application. |
| `p_language` | The IANA language code for the existing translation mapping (such as `en-us`, `fr-ca`, `ja`, `he`). |
| `p_document` | The XLIFF document containing the translation. |

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.2 CREATE_LANGUAGE_MAPPING Procedure

Use this procedure to create the language mapping for the translation of an application. Translated applications are published as new applications, but are not directly editable in the App Builder.

Note:

This procedure is available in Oracle APEX release 4.2.3 and later.

Syntax

```
APEX_LANG.CREATE_LANGUAGE_MAPPING (
    p_application_id                IN NUMBER,
    p_language                      IN VARCHAR2,
    p_translation_application_id    IN NUMBER,
    p_direction_right_to_left       IN BOOLEAN  DEFAULT FALSE,
    p_image_directory               IN VARCHAR2 DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d210785e79" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d210785e81" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d210785e85" style="text-align: left;" data-valign="top" width="42%" headers="d210785e79 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d210785e85 d210785e81 ">The ID of the application for which you want to create the language mapping. This is the ID of the primary language application.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d210785e91" style="text-align: left;" data-valign="top" width="42%" headers="d210785e79 "><code class="codeph">p_language</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d210785e91 d210785e81 ">The IANA language code for the mapping. Examples include <code class="codeph">en-us</code>, <code class="codeph">fr-ca</code>, <code class="codeph">ja</code>, <code class="codeph">he</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d210785e109" style="text-align: left;" data-valign="top" width="42%" headers="d210785e79 "><code class="codeph">p_translation_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d210785e109 d210785e81 ">Unique integer value for the ID of the underlying translated application. This number cannot end in 0.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d210785e115" style="text-align: left;" data-valign="top" width="42%" headers="d210785e79 "><code class="codeph">p_direction_right_to_left</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d210785e115 d210785e81 "><p>Specify document direction:</p>
<ul>
<li><code class="codeph">TRUE</code> - right-to-left</li>
<li><code class="codeph">FALSE</code> - left-to-right</li>
<li><code class="codeph">NULL</code> - default direction of the language</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d210785e135" style="text-align: left;" data-valign="top" width="42%" headers="d210785e79 "><code class="codeph">p_image_directory</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d210785e135 d210785e81 ">Specify the directory where images are stored.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates the creation of the language mapping for an existing APEX application.

```
BEGIN
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_security_group_id is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    FOR c1 IN (select workspace_id
                 from apex_workspaces) loop
        apex_util.set_security_group_id( c1.workspace_id );
        EXIT;
    END LOOP;

    -- Now, actually create the language mapping
    apex_lang.create_language_mapping(
        p_application_id => 63969,
        p_language => 'ja',
        p_translation_application_id => 778899 );
    COMMIT;
    --
    -- Print what we just created to confirm
    --
    FOR c1 IN (select *
                 from apex_application_trans_map
                where primary_application_id = 63969) loop
        dbms_output.put_line( 'translated_application_id: ' || c1.translated_application_id );
        dbms_output.put_line( 'translated_app_language: ' || c1.translated_app_language );
    END LOOP;
END;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.3 CREATE_MESSAGE Procedure

Use this procedure to create a translatable text message for the specified application.

Syntax

```
APEX_LANG.CREATE_MESSAGE (
    p_application_id      IN NUMBER,
    p_name                IN VARCHAR2,
    p_language            IN VARCHAR2,
    p_message_text        IN VARCHAR2,
    p_used_in_javascript  IN BOOLEAN  DEFAULT FALSE,
    p_comment             IN VARCHAR2 DEFAULT NULL,
    p_metadata            IN CLOB     DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The ID of the application for which you wish to create the translatable text message. This is the ID of the primary language application. |
| `p_name` | The name of the translatable text message. |
| `p_language` | The IANA language code for the mapping. Examples include `en-us`, `fr-ca`, `ja`, or `he`. |
| `p_message_text` | The text of the translatable text message. |
| `p_used_in_javascript` | Specify if the message needs to be used directly by JavaScript code (use the `apex.lang` JavaScript API). |
| `p_comment` | Developer comments or notes only visible in the App Builder. |
| `p_metadata` | Additional data stored alongside the message. Note: This data is not used by Oracle APEX. |

Example

The following example demonstrates the creation of a translatable text message.

```
BEGIN
    --
    -- If running from SQLcl, we need to set the environment
    -- for the APEX workspace associated with this schema.
    -- The call to apex_util.set_security_group_id is not necessary if
    -- you're running within the context of the App Builder or an APEX
    -- application.
    --
    for c1 in (select workspace_id
                from apex_workspaces
                where workspace = 'HR_DEV') loop
            apex_util.set_security_group_id( c1.workspace_id );
            exit;
        end loop;
    apex_lang.create_message(
        p_application_id => 63969,
        p_name => 'TOTAL_COST',
        p_language => 'en',
        p_message_text => 'The total cost is: %0',
        p_used_in_javascript => true );
    commit;
END;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.4 DELETE_LANGUAGE_MAPPING Procedure

Use this procedure to delete the language mapping for the translation of an application. This procedure deletes all translated strings in the translation repository for the specified language and mapping. Translated applications are published as new applications, but are not directly editable in the App Builder.

Note:

This procedure is available in Oracle APEX release 4.2.3 and later.

Syntax

```
APEX_LANG.DELETE_LANGUAGE_MAPPING (
    p_application_id    IN NUMBER,
    p_language          IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The ID of the application for which you want to delete the language mapping. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the existing mapping. Examples include `en-us`, `fr-ca`, `ja`, `he`. |

Example

The following example demonstrates the deletion of the language mapping for an existing APEX application and existing translation mapping.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_security_group_id is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    for c1 in (select workspace_id
                 from apex_workspaces) loop
        apex_util.set_security_group_id( c1.workspace_id );
        exit;
     end loop;
    -- Now, delete the language mapping
    apex_lang.delete_language_mapping(
        p_application_id => 63969,
        p_language => 'ja' );
    commit;
    --
    -- Print what we just updated to confirm
    --
    for c1 in (select count(*) thecount
                 from apex_application_trans_map
                where primary_application_id = 63969) loop
        dbms_output.put_line( 'Translation mappings found: ' || c1.thecount );
    end loop;
end;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.5 DELETE_MESSAGE Procedure

Use this procedure to delete a translatable text message in the specified application.

Syntax

```
APEX_LANG.DELETE_MESSAGE (
    p_id    IN NUMBER )
```

Parameters

| Parameter | Description                 |
|:----------|:----------------------------|
| `p_id`    | The ID of the text message. |

Example

The following example demonstrates the deletion of an existing translatable text message.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_security_group_id is not necessary if
    -- you're running within the context of the App Builder or an APEX
    -- application.
    --
    for c1 in (select workspace_id
                from apex_workspaces
              where workspace = 'HR_DEV') loop
        apex_util.set_security_group_id( c1.workspace_id );
        exit;
    end loop;

    -- Locate the ID of the specific message and delete it
    for c1 in (select translation_entry_id
                from apex_application_translations
               where application_id = 63969
                and translatable_message = 'TOTAL_COST'
                and language_code = 'ja') loop
        apex_lang.delete_message(
            p_id => c1.translation_entry_id );
        commit;
        exit;
    end loop;
end;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.6 EMIT_LANGUAGE_SELECTOR_LIST Procedure

This procedure determines which languages the current application is translated into and prints the language selector. You can use this procedure from a PL/SQL region to include a language selector.

Syntax

```
APEX_LANG.EMIT_LANGUAGE_SELECTOR_LIST;
```

Parameters

None.

Example

The following example displays a language selector.

```
BEGIN
    apex_lang.emit_language_selector_list;
END;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.7 EXPORT_TEXT_MESSAGES Function Signature 1

Returns a file containing text messages for translation for the language code supplied.

Syntax

```
APEX_LANG.EXPORT_TEXT_MESSAGES (
    p_application_id     IN   NUMBER,
    p_lang_code          IN   VARCHAR2,
    p_format             in   t_export_format  DEFAULT c_export_format_xliff )
    RETURN clob;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Application ID of the primary application. |
| `p_lang_code` | The IANA language code for the existing translation mapping (such as `en-us`, `fr-ca`, `ja`, `he`). |
| `p_format` | Format for the file (`c_export_format_xliff` or `c_export_format_csv`). |

Returns

A clob containing file in the format supplied.

Example

The following example demonstrates exporting text messages for a language mapping for an existing APEX application.

```
declare
      l_file clob;
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_workspace is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    apex_util.set_workspace( 'MY_WORKSPACE' );

    -- Now, export text messsage in the language and format required
    l_file := apex_lang.export_text_messages(
        p_application_id             => 100,
        p_lang_code                  => 'fr',
        p_format                     => apex_lang.c_export_format_csv );
end;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.8 EXPORT_TEXT_MESSAGES Function Signature 2

This function returns a ZIP file containing translation files for each translation mapping in the format supplied.

Syntax

```
APEX_LANG.EXPORT_TEXT_MESSAGES  (
    p_application_id     IN   NUMBER,
    p_format             IN   t_export_format  DEFAULT c_export_format_xliff )
    RETURN blob;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Application ID of the primary application. |
| `p_format` | Format for internal zipped files (`c_export_format_xliff` or `c_export_format_csv`). |

Returns

Blob containing a ZIP file.

Example

The following example exports text messages for all language mappings for an existing Oracle APEX application.

```
declare
      l_zip blob;
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_workspace is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    apex_util.set_workspace( 'MY_WORKSPACE' );

    -- Now, export text messsage as a zip file for all language mappings in the format required
    l_zip := apex_lang.export_text_messages(
        p_application_id             => 100,
        p_format                     => apex_lang.c_export_format_xliff );
end;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.9 GET_LANGUAGE_SELECTOR_LIST Function

This function determines which languages the current application is translated into and returns the language selector as an HTML snippet. You can use this function in a Dynamic Content region to include the language selector.

Syntax

```
APEX_LANG.GET_LANGUAGE_SELECTOR_LIST
    RETURN VARCHAR2;
```

Parameters

None.

Returns

This function returns the language selector as an HTML snippet.

Example

The following example demonstrates how to return the language selector as an HTML snippet.

```
DECLARE
    l_content varchar2(32767);
BEGIN
    l_content := apex_lang.get_language_selector_list;
    RETURN l_content;
END;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.10 GET_MESSAGE Function

Translates text strings (or messages) generated from PL/SQL-stored procedures, functions, triggers, packaged procedures, and functions.

Syntax

```
APEX_LANG.GET_MESSAGE (
    p_name              IN VARCHAR2,
    p_params            IN apex_t_varchar2  DEFAULT apex_t_varchar2(),
    p_lang              IN VARCHAR2         DEFAULT NULL,
    p_application_id    IN NUMBER           DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | Name of the message as defined in Text Messages under Shared Components of your application in Oracle APEX. |
| `p_params` | List of parameter name value pairs to correspond to `%my_name %my_age` placeholders in the text message. They are replaced by the value of the named parameter processed left to right. |
| `p_lang` | Language code for the message to be retrieved. If not specified, APEX uses the current language for the user as defined in the "Application Language Derived From" attribute. |
| `p_application_id` | Specifies the application ID within the current workspace that owns the translated message you wish to return. Useful when coding packages that could be called outside of the scope of APEX such as packages called from a database job. |

Example

The following example assumes you have defined a message called GREETING_MSG in your application in English as `Good morning %name you are %age` and in German as `Guten Morgen %name, du bist %age`.

The following example demonstrates how to invoke this message from PL/SQL:

```
DECLARE
    l_greetings varchar2( 32767 );
BEGIN
    l_greetings := apex_lang.get_message (
                       'GREETING_MSG',
                       apex_t_varchar2 (
                           'name', :P1_NAME,
                           'age',  :P1_AGE )
                       );
END;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.11 GET_XLIFF_DOCUMENT Function

This function returns the XLIFF document for the specified language.

Syntax

```
APEX_LANG.GET_XLIFF_DOCUMENT (
  p_application_id          IN NUMBER,
  p_page_id                 IN NUMBER  DEFAULT NULL,
  p_language                IN VARCHAR2,
  p_only_modified_elements  IN BOOLEAN DEFAULT FALSE )
  RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Application ID of the primary application. |
| `p_page_id` | (Optional) Page ID if the XLIFF document must only contain the specified page. |
| `p_language` | The IANA language code for the existing translation mapping (such as `en-us`, `fr-ca`, `ja`, `he`). |
| `p_only_modified_elements` | Choose whether to export all translatable elements of the application or only those elements which are new or have been updated. |

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.12 IMPORT_TEXT_MESSAGES Procedure Signature 1

This function imports text messages for an application for the language and format supplied.

Syntax

```
APEX_LANG.IMPORT_TEXT_MESSAGES (
    p_application_id     IN   NUMBER,
    p_file               IN   CLOB,
    p_format             IN   t_export_format  DEFAULT c_export_format_xliff );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | Application ID of the primary application. |
| `p_file` | The clob data to import. |
| `p_format` | Format of the clob data (`c_export_format_xliff` or `c_export_format_csv`). |

Example

The following example imports some translation files from a table and applying them to an existing Oracle APEX application.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the APEX workspace associated with this schema.
    -- The call to apex_util.set_workspace is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    apex_util.set_workspace( 'MY_WORKSPACE' );

    -- Now, import text messsage files
    for c1 in ( select application_id,
                       translation_file,
                       translation_format
                from   my translation_table
                where  translation_app_id = 100 )
     loop
         apex_lang.import_text_messages(
             p_application_id         => c1.application_id
             p_file                   => c1.translation_file
             p_format                 => c1.translation_format);
     end loop;
     commit;
end;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.13 IMPORT_TEXT_MESSAGES Procedure Signature 2

Imports text messages for an application for all files contained in the ZIP supplied.

Syntax

```
APEX_LANG.IMPORT_TEXT_MESSAGES (
    p_application_id     IN   NUMBER,
    p_zip_file           IN   BLOB )
```

Parameters

| Parameter          | Description                                |
|:-------------------|:-------------------------------------------|
| `p_application_id` | Application ID of the primary application. |
| `p_zip_file`       | The zipped blob data to import.            |

Example

The following example imports a ZIP file from a table and applies it to an existing Oracle APEX application.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the APEX workspace associated with this schema.
    -- The call to apex_util.set_workspace is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    apex_util.set_workspace( 'MY_WORKSPACE' );

    -- Now, import text messsage as a zip file
    for c1 in ( select application_id,
                       translation_zip_file
                from   my translation_table
                where  translation_app_id = 100 )
     loop
         apex_lang.import_text_messages(
             p_application_id             => c1.application_id
             p_zip_file                   => c1.translation_zip_file );
     end loop;
     commit;
end;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.14  LANG Function

Use this function to return a translated text string for translations defined in dynamic translations.

Syntax

```
APEX_LANG.LANG (
    p_primary_text_string IN VARCHAR2 DEFAULT NULL,
    p0 IN VARCHAR2 DEFAULT NULL,
    p1 IN VARCHAR2 DEFAULT NULL,
    p2 IN VARCHAR2 DEFAULT NULL,
    ...
    p9 IN VARCHAR2 DEFAULT NULL,
    p_primary_language IN VARCHAR2 DEFAULT NULL )
RETURN VARCHAR2;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d213374e71" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d213374e73" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d213374e77" style="text-align: left;" data-valign="top" width="31%" headers="d213374e71 "><code class="codeph">p_primary_text_string</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d213374e77 d213374e73 ">Text string of the primary language. This is the value of the Translate From Text in the dynamic translation.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d213374e83" style="text-align: left;" data-valign="top" width="31%" headers="d213374e71 "><code class="codeph">p0</code> through <code class="codeph">p9</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d213374e83 d213374e73 ">Dynamic substitution value: p0 corresponds to %0 in the translation string; p1 corresponds to %1 in the translation string; p2 corresponds to %2 in the translation string, and so on.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d213374e92" style="text-align: left;" data-valign="top" width="31%" headers="d213374e71 "><code class="codeph">p_primary_language</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d213374e92 d213374e73 "><p>Language code for the message to be retrieved. If not specified, Oracle APEX uses the current language for the user as defined in the Application Language Derived From attribute.</p>
<p>See also <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-342FD509-66F7-4EED-99CA-26DD6C05FE2A" target="_blank">Specifying the Primary Language for an Application</a> in Oracle APEX App Builder User’s Guide.</p></td>
</tr>
</tbody>
</table>

Example

In a table that defines all primary colors, you can define a dynamic message for each color and then apply the LANG function to the defined values in a query. For example:

```
SELECT APEX_LANG.LANG(color)
FROM my_colors
```

In an application in German where `RED` (English) is a value for the color column in the `my_colors` table, and you defined the German word for red, the previous example returns `ROT`.

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.15 MESSAGE Function (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

Use [GET_MESSAGE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.GET_MESSAGE-Function.html#GUID-0E4ED6B6-64E7-4043-9DC9-9C746E595357) instead.

Use this function to translate text strings (or messages) generated from PL/SQL stored procedures, functions, triggers, packaged procedures, and functions.

Syntax

```
APEX_LANG.MESSAGE (
    p_name            IN VARCHAR2 DEFAULT NULL,
    p0                IN VARCHAR2 DEFAULT NULL,
    p1                IN VARCHAR2 DEFAULT NULL,
    p2                IN VARCHAR2 DEFAULT NULL,
    ...
    p9                IN VARCHAR2 DEFAULT NULL,
    p_lang            IN VARCHAR2 DEFAULT NULL,
    p_application_id  IN NUMBER   DEFAULT NULL )
RETURN VARCHAR2;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d213618e79" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d213618e81" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d213618e85" style="text-align: left;" data-valign="top" width="31%" headers="d213618e79 "><code class="codeph">p_name</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d213618e85 d213618e81 ">Name of the message as defined in Text Messages under Shared Components of your application in Oracle APEX.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d213618e94" style="text-align: left;" data-valign="top" width="31%" headers="d213618e79 "><code class="codeph">p0</code> through <code class="codeph">p9</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d213618e94 d213618e81 ">Dynamic substitution value: <code class="codeph">p0</code> corresponds to <code class="codeph">%0</code> in the translation string; <code class="codeph">p1</code> corresponds to <code class="codeph">%1</code> in the translation string; <code class="codeph">p2</code> corresponds to <code class="codeph">%2</code> in the translation string, and so on.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d213618e122" style="text-align: left;" data-valign="top" width="31%" headers="d213618e79 "><code class="codeph">p_lang</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d213618e122 d213618e81 "><p>Language code for the message to be retrieved. If not specified, APEX uses the current language for the user as defined in the <code class="codeph">Application Language Derived From</code> attribute.</p>
<p>See also <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-342FD509-66F7-4EED-99CA-26DD6C05FE2A" target="_blank">Specifying the Primary Language for an Application</a> in Oracle APEX App Builder User’s Guide.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d213618e145" style="text-align: left;" data-valign="top" width="31%" headers="d213618e79 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d213618e145 d213618e81 ">Used to specify the application ID within the current workspace that owns the translated message you wish to return. Useful when coding packages that might be called outside of the scope of APEX such as packages called from a database job.</td>
</tr>
</tbody>
</table>

Example

The following example assumes you have defined a message called `GREETING_MSG` in your application in English as `Good morning %0` and in German as `Guten Tag %1`. The following example demonstrates how to invoke this message from PL/SQL:

```
BEGIN
--
-- Print the greeting
--
HTP.P(APEX_LANG.MESSAGE('GREETING_MSG', V('APP_USER')));
END;
```

How the `p_lang` attribute is defined depends on how the APEX engine derives the Application Primary Language. For example, if you are running the application in German and the previous call is made to the `APEX_LANG.MESSAGE` API, the APEX engine first looks for a message called `GREETING_MSG` with a `LANG_CODE` of `de`. If it does not find anything, then it is reverted to the `Application Primary Language` attribute. If it still does not find anything, the APEX engine looks for a message by this name with a language code of `en`.

See Also:

- [GET_MESSAGE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.GET_MESSAGE-Function.html#GUID-0E4ED6B6-64E7-4043-9DC9-9C746E595357)
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-342FD509-66F7-4EED-99CA-26DD6C05FE2A" target="_blank">Specifying the Primary Language for an Application</a> in Oracle APEX App Builder User’s Guide

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.16 PUBLISH_APPLICATION Procedure

Use this procedure to publish the translated version of an application. This procedure creates an underlying, hidden replica of the primary application and merges the strings from the translation repository in this new application. Perform a seed and publish process each time you want to update the translated version of your application and synchronize it with the primary application.

This application is not visible in the App Builder. It can be published and exported, but not directly edited.

Syntax

```
APEX_LANG.PUBLISH_APPLICATION (
    p_application_id           IN NUMBER,
    p_language                 IN VARCHAR2,
    p_new_trans_application_id IN NUMBER DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The ID of the application for which you want to publish and create the translated version. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the existing translation mapping. Examples include `en-us`, `fr-ca`, `ja`, `he`. |
| `p_new_trans_application_id` | (Optional) Specifies a new application ID for the language being published. When provided, it updates the existing language-mapping with the new application ID. |

Example

The following example demonstrates the publish process for an APEX application and language.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_security_group_id is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    for c1 in (select workspace_id
                 from apex_workspaces) loop
        apex_util.set_security_group_id( c1.workspace_id );
        exit;
    end loop;
    -- Now, publish the translated version of the application
    apex_lang.publish_application(
        p_application_id => 63969,
        p_language => 'ja' );
    commit;
end;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.17 SEED_TRANSLATIONS Procedure

This procedure seeds the translation repository for the specified application and language. This procedure populates the translation repository with all of the new, updated, and removed translatable strings from your application. Perform a seed and publish process each time you want to update the translated version of your application and synchronize it with the primary application.

Syntax

```
APEX_LANG.SEED_TRANSLATIONS (
    p_application_id    IN NUMBER,
    p_language          IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The ID of the application for which you want to update the translation repository. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the existing translation mapping. Examples include `en-us`, `fr-ca`, `ja`, `he`. |

Example

The following example demonstrates the seeding process of the translation repository for an Oracle APEX application and language.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema. The
    -- call to apex_util.set_security_group_id is not necessary if
    -- you're running within the context of the App Builder
    -- or an APEX application.
    --
    for c1 in (select workspace_id
                 from apex_workspaces) loop
        apex_util.set_security_group_id( c1.workspace_id );
        exit;
    end loop;
    -- Now, seed the translation repository
    apex_lang.seed_translations(
        p_application_id => 63969,
        p_language => 'ja' );
    commit;
    -- Print out the total number of potentially translatable strings
    --
    for c1 in (select count(*) thecount
                 from apex_application_trans_repos
                where application_id = 63969) loop
        dbms_output.put_line( 'Potentially translatable strings found: ' || c1.thecount );
    end loop;
end;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.18 UPDATE_LANGUAGE_MAPPING Procedure

Use this procedure to update the language mapping for the translation of an application. Translated applications are published as new applications, but are not directly editable in the App Builder.

Note:

This procedure is available in Oracle APEX release 4.2.3 and later.

Syntax

```
APEX_LANG.UPDATE_LANGUAGE_MAPPING (
    p_application_id            IN NUMBER,
    p_language                  IN VARCHAR2,
    p_new_trans_application_id  IN NUMBER )
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_application_id` | The ID of the application for which you want to update the language mapping. This is the ID of the primary language application. |
| `p_language` | The IANA language code for the existing mapping. Examples include `en-us`, `fr-ca`, `ja`, `he`. The language of the mapping cannot be updated with this procedure, only the new translation application ID. |
| `p_new_trans_application_id` | New unique integer value for the ID of the underlying translated application. This number cannot end in 0. |

Example

The following example demonstrates the update of the language mapping for an existing APEX application and existing translation mapping.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_security_group_id is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    for c1 in (select workspace_id
                 from apex_workspaces) loop
        apex_util.set_security_group_id( c1.workspace_id );
        exit;
    end loop;
    -- Now, update the language mapping
    apex_lang.update_language_mapping(
        p_application_id => 63969,
        p_language => 'ja',
        p_new_trans_application_id => 881188 );
    commit;
    --
    -- Print what we just updated to confirm
    --
    for c1 in (select *
                 from apex_application_trans_map
                where primary_application_id = 63969) loop
        dbms_output.put_line( 'translated_application_id: ' || c1.translated_application_id );
        dbms_output.put_line( 'translated_app_language: ' || c1.translated_app_language );
    end loop;
end;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.19 UPDATE_MESSAGE Procedure Signature 1

This procedure updates a translatable text message for the specified application.

An error raises if the message being updated is subscribed.

Note:

When a text message is subscribed, it becomes read-only. In such cases, all changes are driven from the master text message.

Use App Builder to refresh the text message or publish the master text message to get the latest changes from master text message into the text message.

To update the text message using this API, first unsubscribe from the text message in App Builder (there is no API for unsubscribing).

Syntax

```
APEX_LANG.UPDATE_MESSAGE (
  p_id             IN NUMBER,
  p_message_text   IN VARCHAR2 )
```

Parameters

| Parameter        | Description                                     |
|:-----------------|:------------------------------------------------|
| `p_id`           | The ID of the text message.                     |
| `p_message_text` | The new text for the translatable text message. |

Example

The following example demonstrates an update of an existing translatable text message.

```
BEGIN
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_security_group_id is not necessary
    -- if you're running within the context of the App Builder
    -- or an APEX application.
    --
    FOR c1 in (select workspace_id
                 from apex_workspaces) LOOP
        apex_util.set_security_group_id( c1.workspace_id );
        EXIT;
    END LOOP;
    -- Locate the ID of the specific message and update it with the new text
    FOR c1 in (SELECT translation_entry_id
                 FROM apex_application_translations
                WHERE application_id = 63969
                  AND translatable_message = 'TOTAL_COST'
                  AND language_code = 'en') LOOP
        apex_lang.update_message(
            p_id => c1.translation_entry_id,
            p_message_text => 'The total cost is: %0');
        COMMIT;
        EXIT;
    END LOOP;
END;
/
```

See Also:

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-88A65065-7FD8-4C35-ABD8-DCE6A32A92EB" target="_blank">Unsubscribing to a Shared Component</a> in the Oracle APEX App Builder User’s Guide
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-32D65A73-A98E-475B-995E-F5B1E850F30D" target="_blank">Refreshing a Subscribed Shared Component</a> in the Oracle APEX App Builder User’s Guide

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.20 UPDATE_MESSAGE Procedure Signature 2

This procedure updates a translatable text message and its attributes for the specified application.

Syntax

```
APEX_LANG.UPDATE_MESSAGE (
    p_id                 IN NUMBER,
    p_name               IN VARCHAR2,
    p_language           IN VARCHAR2,
    p_message_text       IN VARCHAR2,
    p_used_in_javascript IN BOOLEAN,
    p_comment            IN VARCHAR2,
    p_metadata           IN CLOB )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_id` | The ID of the text message to be updated. |
| `p_name` | The name of the translatable text message. |
| `p_language` | The IANA language code for the mapping. Examples include `en-us`, `fr-ca`, `ja`, or `he`. |
| `p_message_text` | The text of the translatable text message. |
| `p_used_in_javascript` | Specify if the message needs to be used directly by JavaScript code (use the `apex.lang` JavaScript API). |
| `p_comment` | Developer comments or notes only visible in the App Builder. |
| `p_metadata` | Additional data stored alongside with the message. Note: This data is not used by Oracle APEX. |

Example

The following example updates a translatable text message.

```
BEGIN
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema.
    -- The call to apex_util.set_workspace is not necessary if
    -- you're running within the context of the App Builder or an APEX
    -- application.
    --
    apex_util.set_workspace( 'SALES_DEV' );

    FOR l_message IN ( select translation_entry_id
                         FROM apex_application_translations
                        WHERE application_id       = 100
                          AND translatable_message = 'TOTAL_COST'
                          AND language_code        = 'en-us' )
    LOOP
        apex_lang.update_message(
            p_id                 => l_message.translation_entry_id,
            p_name               => 'SALES_TOTAL_COST',
            p_language           => 'en',
            p_message_text       => 'Total sales cost is: %0',
            p_used_in_javascript => true,
            p_comment            => 'What is the total cost of sales',
            p_metadata           => q'[{"Tag": "sales", "Approved": true}]' );
                                    -- Any additional data to store
    END LOOP;
END;
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)

------------------------------------------------------------------------

## 41.21 UPDATE_TRANSLATED_STRING Procedure

Use this procedure to update a translated string in the seeded translation repository.

Note:

This procedure is available in Oracle APEX release 4.2.3 and later.

Syntax

```
APEX_LANG.UPDATE_TRANSLATED_STRING (
    p_id        IN NUMBER,
    p_language  IN VARCHAR2
    p_string    IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_id` | The ID of the string in the translation repository. |
| `p_language` | The IANA language code for the existing translation mapping. Examples include `en-us`, `fr-ca`, `ja`, `he`. The language of the mapping cannot be updated with this procedure, only the new translation application ID. |
| `p_string` | The new value for the string in the translation repository. |

Example

The following example demonstrates an update of an existing string in the translation repository.

```
begin
    --
    -- If running from SQLcl, we need to set the environment
    -- for the Oracle APEX workspace associated with this schema. The
    -- call to apex_util.set_security_group_id is not necessary if
    -- you're running within the context of the App Builder
    -- or an APEX application.
    --
    for c1 in (select workspace_id
                 from apex_workspaces) loop
        apex_util.set_security_group_id( c1.workspace_id );
        exit;
    end loop;
    -- Locate all strings in the repository for the specified application
    -- which are 'Search' and change to 'Find'
    for c1 in (select id
                 from apex_application_trans_repos
                where application_id = 63969
                  and dbms_lob.compare(from_string, to_nclob('Search')) = 0
                  and language_code = 'en') loop
        apex_lang.update_translated_string(
            p_id => c1.id,
            p_language => 'en',
            p_string => 'Find');
        commit;
        exit;
    end loop;
end;
/
```

**Parent topic:** [APEX_LANG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LANG.html#GUID-68DF9D22-3C3A-418A-B27A-868A569BD990)
