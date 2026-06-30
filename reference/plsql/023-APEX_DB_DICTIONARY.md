<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 23 APEX_DB_DICTIONARY

The `APEX_DB_DICTIONARY` package provides LLM-friendly database metadata descriptions.

- [GET_METADATA Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_METADATA-Function.html#GUID-E78DF450-D52F-4D1B-981A-1CD0B4F935C1)
- [GET_PRIMARY_KEY_COLUMNS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_PRIMARY_KEY_COLUMNS-Function.html#GUID-62045F17-27F2-48FA-AF1E-C4B5BD9BEF5B)
- [GET_TABLE_INFO Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO-Function-Signature-1.html#GUID-C69A135D-C732-4C5C-A2DC-48E86F077043)
- [GET_TABLE_INFO Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO-Function-Signature-2.html#GUID-877B8059-5A02-4165-B548-1B152BC7561D)
- [GET_TABLE_INFO_REGEX Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLE_INFO_REGEX-Function.html#GUID-7110F7F7-21BE-4299-B439-A5CFDB173535)
- [GET_TABLES_ARRAY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_ARRAY-Function.html#GUID-B9755639-5C38-48B8-8AE0-99F489F98446)
- [GET_TABLES_JSON Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_JSON-Function.html#GUID-B029FBDB-8F8C-4E61-9C5F-675A8645763D)
- [GET_TABLES_SUMMARY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.GET_TABLES_SUMMARY-Function.html#GUID-F3C15F36-6255-45DB-AEE4-3338A4D32AC1)
- [FORMAT_METADATA Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.FORMAT_METADATA-Function-Signature-1.html#GUID-B1B9B281-12E0-4A10-8972-EC4CA71D2CD5)
- [FORMAT_METADATA Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.FORMAT_METADATA-Function-Signature-2.html#GUID-4E14B93D-1BA1-4327-8940-F0FC0B8BD612)
- [IS_SUPPORTED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.IS_SUPPORTED-Function.html#GUID-2A1766C7-5B83-44F5-B3B1-C96E76277FD8)

------------------------------------------------------------------------

## 23.1 GET_METADATA Function

This procedure wraps `DBMS_DEVELOPER.GET_METADATA` for calling from within an APEX application. Parameters are modeled to match `DBMS_DEVELOPER.GET_METADATA` and pass unmodified. The return value may be passed as is to `APEX_DB_DICTIONARY.FORMAT_METADATA`.

Syntax

```
FUNCTION apex_db_dictionary.get_metadata (
    p_name           IN   VARCHAR2,
    p_schema         IN   VARCHAR2     DEFAULT NULL,
    p_object_type    IN   VARCHAR2     DEFAULT NULL,
    p_level          IN   VARCHAR2     DEFAULT 'typical',
    p_etag           IN   RAW          DEFAULT NULL )
    RETURN JSON;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The object name. A synonym of the object name can also be provided. It is case sensitive and should be provided as it appears in the data dictionary. |
| `p_schema` | The schema name. The default is the current user. It is case sensitive and should be provided as it appears in the data dictionary. |
| `p_object_type` | The type of object that you want to be retrieved. This is optional as name resolution can also be done without specifying object_type. Supported values: `TABLE`, `INDEX`, and `VIEW`. |
| `p_level` | The level of detail. The default is `TYPICAL`. Available values are `BASIC` (columns only), `TYPICAL` (includes constraints and annotations), or `ALL` (includes storage info). |
| `p_etag` | A unique identifier for a specific version of the document. This etag value lets an application determine whether the content of a particular version of a document is the same as that of another version. |

Returns

The function returns metadata in JSON form as `JSON` on Oracle Database 21c and later and as `CLOB` on earlier supported releases.

Example 1

On Oracle Database 21c and later, this function returns JSON.

```
declare
    l_json json;
begin
    l_json := apex_db_dictionary.get_metadata(
        p_name => 'EMP',
        p_level => 'ALL' );
end;
```

Example 2

On earlier supported releases, this function returns CLOB.

```
declare
    l_json clob;
begin
    l_json := apex_db_dictionary.get_metadata(
        p_name => 'EMP',
        p_level => 'ALL' );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.2 GET_PRIMARY_KEY_COLUMNS Function

This procedure returns a comma-delimited list of column names in the primary key. Returns NULL if no PK constraint exists.

Syntax

```
FUNCTION apex_db_dictionary.get_primary_key_columns (
    p_table      IN   VARCHAR2,
    p_owner      IN   VARCHAR2     DEFAULT NULL,
    p_delimiter  IN   VARCHAR2     DEFAULT ',' )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table` | Name of the object (table or view). May include the owner, e.g. `HR.EMP`. |
| `p_owner` | (Optional) The owner of the object (default current user). |
| `p_delimiter` | Delimiter used between column names (default '`,`'). |

Returns

This function returns a comma-delimited list of primary key column names. Returns `NULL` if no primary key constraint exists.

Example

This example returns the column or columns that comprise the primary key of the EMP table. If the table has a composite key, the columns are delimited by a colon ("`:`").

```
declare
    l_pk_columns varchar2(32767);
begin
    l_pk_columns := apex_db_dictionary.get_primary_key_columns(
        p_table     => 'EMP',
        p_delimiter => ':' );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.3 GET_TABLE_INFO Function Signature 1

This function gets formatted metadata for one or more tables or views.

Syntax

```
FUNCTION apex_db_dictionary.get_table_info (
    p_table_names                IN   VARCHAR2,
    p_include_constraints        IN   BOOLEAN          DEFAULT TRUE,
    p_include_indexes            IN   BOOLEAN          DEFAULT FALSE,
    p_include_comments           IN   BOOLEAN          DEFAULT TRUE,
    p_include_annotations        IN   BOOLEAN          DEFAULT TRUE,
    p_include_domains            IN   BOOLEAN          DEFAULT TRUE,
    p_include_virtual_columns    IN   BOOLEAN          DEFAULT FALSE,
    p_format                     IN   t_format_type    DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_names` | Comma-separated list of table/view names (e.g., `'EMP, DEPT, EMP_VIEW'`). Include the owner (e.g. `'HR.EMP, HR.DEPT'`) if not owned by the current user. For case-sensitive quoted identifiers, include the quotes (e.g. '"Dept", "HR"."OrderLines"'). |
| `p_include_constraints` | Show constraints section (default `TRUE`). |
| `p_include_indexes` | Show indexes section (default `FALSE`). |
| `p_include_comments` | Show table/column comments (default `TRUE`). |
| `p_include_annotations` | Show table/column annotations (default `TRUE`). |
| `p_include_domains` | Show SQL Domain metadata section (default `TRUE`). |
| `p_include_virtual_columns` | Include virtual columns in output (default `FALSE`). |
| `p_format` | `c_markdown` (default) or `c_plain`. |

Returns

This function returns a CLOB containing formatted descriptions for all requested tables/views.

Example

This example returns a CLOB with formatted descriptions of the EMP and DEPT tables.

```
declare
    l_text clob;
begin
    l_text := apex_db_dictionary.get_table_info(
        p_table_names => 'EMP, DEPT' );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.4 GET_TABLE_INFO Function Signature 2

This function gets formatted metadata for one or more tables or views, specified with an array.

Syntax

```
FUNCTION apex_db_dictionary.get_table_info (
    p_table_array                IN   apex_t_varchar2,
    p_include_constraints        IN   BOOLEAN              DEFAULT TRUE,
    p_include_indexes            IN   BOOLEAN              DEFAULT FALSE,
    p_include_comments           IN   BOOLEAN              DEFAULT TRUE,
    p_include_annotations        IN   BOOLEAN              DEFAULT TRUE,
    p_include_domains            IN   BOOLEAN              DEFAULT TRUE,
    p_include_virtual_columns    IN   BOOLEAN              DEFAULT FALSE,
    p_format                     IN   t_format_type        DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_array` | Array of table/view names, e.g. `apex_t_varchar2('EMP','DEPT')` Optionally, include the owner, e.g. `apex_t_varchar2('HR.EMP, HR.DEPT')` if not owned by the current user. Enclose in double-quotes if the identifier is case-sensitive or includes special characters, e.g. `apex__t_varchar2(' "HR" . "Employees" ')` |
| `p_include_constraints` | Show constraints section (default `TRUE`) |
| `p_include_indexes` | Show indexes section (default `FALSE`) |
| `p_include_comments` | Show table/column comments (default `TRUE`) |
| `p_include_annotations` | Show table/column annotations (default `TRUE`) |
| `p_include_domains` | Show SQL Domain metadata section (default `TRUE`) |
| `p_include_virtual_columns` | Include virtual columns in output (default `FALSE`) |
| `p_format` | `c_markdown` (default) or `c_plain` |

Returns

This function returns a CLOB containing formatted descriptions for all requested tables/views.

Example

This example returns a CLOB containing a formatted description of the EMP and DEPT tables.

```
declare
    l_text clob;
begin
    l_text := apex_db_dictionary.get_table_info(
        p_table_array => apex_t_varchar2('EMP, DEPT') );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.5 GET_TABLE_INFO_REGEX Function

This function gets formatted metadata for one or more tables or views, specified with regex.

Syntax

```
FUNCTION apex_db_dictionary.get_table_info_regex (
    p_regex                      IN   VARCHAR2,
    p_owner                      IN   VARCHAR2         DEFAULT NULL,
    p_object_type                IN   VARCHAR2         DEFAULT NULL,
    p_include_constraints        IN   BOOLEAN          DEFAULT TRUE,
    p_include_indexes            IN   BOOLEAN          DEFAULT FALSE,
    p_include_comments           IN   BOOLEAN          DEFAULT TRUE,
    p_include_annotations        IN   BOOLEAN          DEFAULT TRUE,
    p_include_domains            IN   BOOLEAN          DEFAULT TRUE,
    p_include_virtual_columns    IN   BOOLEAN          DEFAULT FALSE,
    p_format                     IN   t_format_type    DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_regex` | Regular expression used to search the tables and views e.g. `'^EBA_'` to find tables whose names start with EBA\_. Use `'.'` to get all tables and views in the schema. |
| `p_owner` | Owner of the tables and views (default is current user) |
| `p_object_type` | Use `'TABLE'` to only search table names and `'VIEW'` to only search view names (default NULL for both tables and views). |
| `p_include_constraints` | Show constraints section (default `TRUE`). |
| `p_include_indexes` | Show indexes section (default `FALSE`). |
| `p_include_comments` | Show table/column comments (default `TRUE`). |
| `p_include_annotations` | Show table/column annotations (default `TRUE`). |
| `p_include_domains` | Show SQL Domain metadata section (default `TRUE`). |
| `p_include_virtual_columns` | Include virtual columns in output (default `FALSE`). |
| `p_format` | `c_markdown` (default) or `c_plain`. |

Returns

This function returns a CLOB containing formatted descriptions for all tables/views matching the regex.

Example

This example returns a CLOB containing formatted descriptions for all tables and views with names matching the regular expression '`BUDGET|FORECASTS`'.

```
declare
    l_text clob;
begin
    l_text := apex_db_dictionary.get_table_info_regex(
        p_regex => 'BUDGETS|FORECASTS' );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.6 GET_TABLES_ARRAY Function

This function gets a list of table/view names matching regex criteria. If `p_regex` is null after trim, an empty array is returned.

Syntax

```
FUNCTION apex_db_dictionary.get_tables_array (
    p_regex          IN   VARCHAR2     DEFAULT NULL,
    p_owner          IN   VARCHAR2     DEFAULT NULL,
    p_object_type    IN   VARCHAR2     DEFAULT NULL )
    RETURN WWV_FLOW_T_VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_regex` | Regular expression for object names. |
| `p_owner` | Owner of the tables/views (default current user). |
| `p_object_type` | `TABLE` or `VIEW`. The default `NULL` returns tables and views. |

Returns

This function returns an array of fully qualified names in the format `OWNER``.``OBJECT_NAME`.

Example 1

This example returns an array of names of tables and views matching the regular expression '`^EMP_`'.

```
declare
    l_tables apex_t_varchar2;
begin
    l_tables := apex_db_dictionary.get_tables_array(
        p_regex => '^EMP_' );
end;
```

Example 2

This example returns an array of names of tables matching the regular expression '`^DB_`'.

```
declare
    l_tables apex_t_varchar2;
begin
    l_tables := apex_db_dictionary.get_tables_array(
        p_regex       => '^DB_',
        p_object_type => 'TABLE' );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.7 GET_TABLES_JSON Function

This function gets a list of table/view names matching regex criteria as JSON. If `p_regex` is null after trim, an empty array is returned.

Syntax

```
FUNCTION apex_db_dictionary.get_tables_json (
    p_regex                  IN   VARCHAR2     DEFAULT NULL,
    p_owner                  IN   VARCHAR2     DEFAULT NULL,JSON
    p_object_type            IN   VARCHAR2     DEFAULT NULL,
    p_include_comments       IN   BOOLEAN      DEFAULT TRUE,
    p_include_annotations    IN   BOOLEAN      DEFAULT TRUE )
    RETURN JSON;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_regex` | Regular expression for object names. |
| `p_owner` | Owner of the tables/views (default current user). |
| `p_object_type` | `TABLE` or `VIEW`. The default `NULL` returns tables and views. |
| `p_include_comments` | Include table/view comments and comment-derived attributes (default `TRUE`). |
| `p_include_annotations` | Include table/view annotations (default `TRUE`). |

Returns

This function returns a JSON array of objects. Each object includes:

- owner: object owner
- name: object name
- type: TABLE or VIEW
- comment: base table/view comment text, excluding embedded common attributes (when present and requested)
- annotations: table/view annotations plus common attributes parsed from comments (when requested)

Example 1

On Oracle Database 21c and later, this function returns JSON.

```
declare
    l_json json;
begin
    l_json := apex_db_dictionary.get_tables_json(
        p_regex => '^EMP_' );
end;
```

Example 2

On Oracle Database 19c and earlier, this function returns CLOB.

```
declare
    l_json clob;
begin
    l_json := apex_db_dictionary.get_tables_json(
        p_regex            => '^DB_',
        p_include_comments => FALSE );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.8 GET_TABLES_SUMMARY Function

This function gets a list of table/view names formatted as markdown or plain text.

Syntax

```
FUNCTION apex_db_dictionary.get_tables_summary (
    p_regex                  IN   VARCHAR2         DEFAULT NULL,
    p_owner                  IN   VARCHAR2         DEFAULT NULL,
    p_object_type            IN   VARCHAR2         DEFAULT NULL,
    p_include_comments       IN   BOOLEAN          DEFAULT TRUE,
    p_include_annotations    IN   BOOLEAN          DEFAULT TRUE,
    p_format                 IN   t_format_type    DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_regex` | Regular expression for object names. |
| `p_owner` | Owner of the tables/views (default current user). |
| `p_object_type` | `TABLE` or `VIEW`. The default `NULL` returns tables and views. |
| `p_include_comments` | Include table/view comments and comment-derived attributes (default `TRUE`). |
| `p_include_annotations` | Include table/view annotations (default `TRUE`). |
| `p_format` | `c_markdown` (default) or `c_plain`. |

Returns

This function returns a CLOB summary for all matching tables/views, including requested annotations and/or comment-derived attributes.

Example 1

This example returns a CLOB containing a summary of all tables and views with names matching the regular expressing '`^EMP_`'.

```
declare
    l_summary clob;
begin
    l_summary := apex_db_dictionary.get_tables_summary(
        p_regex => '^EMP_' );
end;
```

Example 2

This example returns a CLOB containing a summary of all tables with names matching the regular expression '`^DB_`' in plain text format.

```
declare
    l_summary clob;
begin
    l_summary := apex_db_dictionary.get_tables_summary(
        p_regex => '^DB_',
        p_object_type => 'TABLE',
        p_format => apex_db_dictionary.c_plain );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.9 FORMAT_METADATA Function Signature 1

This procedure converts `DBMS_DEVELOPER.GET_METADATA` JSON output to readable text for human and LLM consumption.

Gather the JSON from `DBMS_DEVELOPER.GET_METADATA` at the "ALL" level for maximum information to be included in the output. If a lower level (e.g. "BASIC" or "TYPICAL") is used, some information may not be included.

Syntax

```
FUNCTION apex_db_dictionary.format_metadata (
    p_json                       IN   JSON,
    p_include_constraints        IN   BOOLEAN          DEFAULT TRUE,
    p_include_indexes            IN   BOOLEAN          DEFAULT FALSE,
    p_include_comments           IN   BOOLEAN          DEFAULT TRUE,
    p_include_annotations        IN   BOOLEAN          DEFAULT TRUE,
    p_include_domains            IN   BOOLEAN          DEFAULT TRUE,
    p_include_virtual_columns    IN   BOOLEAN          DEFAULT FALSE,
    p_format                     IN   t_format_type    DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_json` | JSON output from `DBMS_DEVELOPER.GET_METADATA`. |
| `p_include_constraints` | Show constraints section (default `TRUE`) |
| `p_include_indexes` | Show indexes section (default `FALSE`) |
| `p_include_comments` | Show table/column comments (default `TRUE`) |
| `p_include_annotations` | Show table/column annotations (default `TRUE`) |
| `p_include_domains` | Show SQL Domain metadata section (default `TRUE`) |
| `p_include_virtual_columns` | Include virtual columns in output (default `FALSE`) |
| `p_format` | `c_markdown` (default) or `c_plain` |

Returns

CLOB containing formatted table description.

Example

This example calls the `DBMS_DEVELOPER` API to get the JSON metadata for the EMP table at the maximum level of detail. Selected metadata is extracted and combined with additional metadata from the database (e.g. comments) and converted to markdown format by `APEX_DB_DICTIONARY.format_metadata`.

```
declare
    l_text clob;
begin
    l_text := apex_db_dictionary.format_metadata(
                  dbms_developer.get_metadata(
                      object_type => 'TABLE',
                      name        => 'EMP',
                      level       => 'ALL' ) );
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.10 FORMAT_METADATA Function Signature 2

This procedure converts `DBMS_DEVELOPER.GET_METADATA` JSON output to readable text for human and LLM consumption. This overload is provided for Oracle Database 19c backwards compatibility.

Syntax

```
FUNCTION apex_db_dictionary.format_metadata (
    p_json                       IN   CLOB,
    p_include_constraints        IN   BOOLEAN          DEFAULT TRUE,
    p_include_indexes            IN   BOOLEAN          DEFAULT FALSE,
    p_include_comments           IN   BOOLEAN          DEFAULT TRUE,
    p_include_annotations        IN   BOOLEAN          DEFAULT TRUE,
    p_include_domains            IN   BOOLEAN          DEFAULT TRUE,
    p_include_virtual_columns    IN   BOOLEAN          DEFAULT FALSE,
    p_format                     IN   t_format_type    DEFAULT C_MARKDOWN )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_json` | JSON output from `DBMS_DEVELOPER.GET_METADATA` as `CLOB` |
| `p_include_constraints` | Show constraints section (default `TRUE`) |
| `p_include_indexes` | Show indexes section (default `FALSE`) |
| `p_include_comments` | Show table/column comments (default `TRUE`) |
| `p_include_annotations` | Show table/column annotations (default `TRUE`) |
| `p_include_domains` | Show SQL Domain metadata section (default `TRUE`) |
| `p_include_virtual_columns` | Include virtual columns in output (default `FALSE`) |
| `p_format` | `C_MARKDOWN` (default) or `C_PLAIN` |

Returns

CLOB containing formatted table description.

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)

------------------------------------------------------------------------

## 23.11 IS_SUPPORTED Function

This function returns `TRUE` if `DBMS_DEVELOPER` is supported on this instance.

Syntax

```
FUNCTION apex_db_dictionary.is_supported
    RETURN BOOLEAN;
```

Returns

This function returns `TRUE` if `DBMS_DEVELOPER` is available on this instance; otherwise `FALSE`.

Example

This example calls `IS_SUPPORTED`. Use the results of this call to determine whether features that depend on `DBMS_DEVELOPER` should be enabled in subsequent code.

```
declare
    l_supported boolean;
begin
    l_supported := apex_db_dictionary.is_supported;
end;
```

**Parent topic:** [APEX_DB_DICTIONARY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DB_DICTIONARY.html#GUID-5CBE27A0-B1E6-4700-9FA4-6F32F0418E42)
