<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 22  APEX_DATA_PARSER

This package contains the implementation for the file parser in Oracle APEX. `APEX_DATA_PARSER` supports XML, JSON, CSV and XLSX files. The most important function in this package is the PARSE function, which is implemented as a table function returning rows of the `APEX_T_PARSER_ROW` type. The parser supports up to 300 columns.

- [Global Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.Global-Constants.html#GUID-AE3C3092-4156-41BA-9254-DDEDF630CDA7)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.Data-Types.html#GUID-55057C52-3A39-4F89-BF6A-6E66C920558C)
- [ASSERT_FILE_TYPE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.ASSERT_FILE_TYPE-Function.html#GUID-DA4A9A5C-5575-43BB-A38F-E595E1643322)
- [DISCOVER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.DISCOVER-Function.html#GUID-D0DC85D9-A731-4EC0-A1F1-E662B30C6894)
- [GET_COLUMNS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_COLUMNS-Function.html#GUID-3685DE82-C298-481C-916F-00A578C1D5C3)
- [GET_FILE_PROFILE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_FILE_PROFILE-Function.html#GUID-8036CFB0-5F82-437E-8D0E-D9304E538CB9)
- [GET_FILE_TYPE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_FILE_TYPE-Function.html#GUID-C5E80645-7877-48D0-9B7E-9D19EED2879F)
- [GET_XLSX_WORKSHEETS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.GET_XLSX_WORKSHEETS-Function.html#GUID-41FC640A-A683-440E-A8F4-026BDD582C34)
- [JSON_TO_PROFILE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.JSON_TO_PROFILE-Function.html#GUID-67B9351A-FFE8-47EE-AEED-A5A0478072DA)
- [PARSE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.PARSE-Function.html#GUID-B815CF74-C469-4F78-9433-643D1339E930)
- [SET_PARSER_FLAGS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.SET_PARSER_FLAGS-Procedure.html#GUID-CDCF2A86-AEEA-4483-A574-014967F0CC90)

------------------------------------------------------------------------

## 22.1 Global Constants

The APEX_DATA_PARSER package uses the following constants.

```
subtype t_file_type is pls_integer range 1..5;
c_file_type_xlsx              constant t_file_type := 1; -- File Type Constant
c_file_type_csv               constant t_file_type := 2; -- File Type Constant
c_file_type_xml               constant t_file_type := 3; -- File Type Constant
c_file_type_json              constant t_file_type := 4; -- File Type Constant
c_file_type_ics               constant t_file_type := 5; -- File Type Constant
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.2 Data Types

The APEX_DATA_PARSER package uses the following data types.

Generic

```
type t_file_profile is record(
    file_type               t_file_type,
    file_charset            VARCHAR2(128),
    row_selector            VARCHAR2(32767),
    is_single_row           BOOLEAN,
    first_row_headings      BOOLEAN,
    xlsx_worksheet          VARCHAR2(128),
    xml_namespaces          VARCHAR2(4000),
    csv_delimiter           VARCHAR2(4),
    csv_enclosed            VARCHAR2(4),
    null_if                 VARCHAR2(20),
    force_trim_whitespace   BOOLEAN,
    skip_rows               PLS_INTEGER,
    file_columns            t_file_columns
);

type t_file_columns is table of t_file_column index by pls_integer;

type t_file_column is record(
    col_seq         PLS_INTEGER,
    name            VARCHAR2(128),
    data_type       apex_exec_api.t_data_type,
    data_type_len   PLS_INTEGER,
    is_json         BOOLEAN,
    selector        VARCHAR2(32767),
    decimal_char    VARCHAR2(4),
    group_char      VARCHAR2(4),
    format_mask     VARCHAR2(128),
    clob_column     PLS_INTEGER
);
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.3 ASSERT_FILE_TYPE Function

This function checks whether the extension of the file name matches the specified file type.

Syntax

```
APEX_DATA_PARSER.ASSERT_FILE_TYPE (
    p_file_name IN VARCHAR2,
    p_file_type IN t_file_type )
RETURN BOOLEAN;
```

Parameters

| Parameter     | Description                     |
|:--------------|:--------------------------------|
| `p_file_name` | File name to get the file type. |
| `p_file_type` | File type as `t_file_type`.     |

Returns

`TRUE`, if the file name matches the specified extension. `FALSE` otherwise.

Example

The following example checks if the passed-in file name is the CSV file type.

```
DECLARE
    is_valid_file_type boolean;
BEGIN
    is_valid_file_type := apex_data_parser.assert_file_type(
        p_file_name => 'test.csv',
        p_file_type => apex_data_parser.c_file_type_csv );
END;
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.4 DISCOVER Function

This is a function to discover the column profile of a file. This function calls `parse()` and then returns the generated file profile. This function is a shortcut which can be used instead of first calling `parse()` and then `get_file_profile()`.

Syntax

```
APEX_DATA_PARSER.DISCOVER (
    p_content                   IN BLOB,
    p_file_name                 IN VARCHAR2,
    --
    p_decimal_char              IN VARCHAR2     DEFAULT NULL,
    --
    p_xlsx_sheet_name           IN VARCHAR2     DEFAULT NULL,
    --
    p_row_selector              IN VARCHAR2     DEFAULT NULL,
    --
    p_csv_row_delimiter         IN VARCHAR2     DEFAULT LF,
    p_csv_col_delimiter         IN VARCHAR2     DEFAULT NULL,
    p_csv_enclosed              IN VARCHAR2     DEFAULT '"',
    --
    p_skip_rows                 IN PLS_INTEGER  DEFAULT NULL,
    --
    p_nullif                    IN VARCHAR2     DEFAULT NULL,
    p_force_trim_whitespace     IN VARCHAR2     DEFAULT 'Y',
    --
    p_file_charset              IN VARCHAR2     DEFAULT 'AL32UTF8',
    p_max_rows                  IN NUMBER       DEFAULT 200,
    --
    p_xml_namespaces            IN VARCHAR2     DEFAULT NULL )
    RETURN CLOB;
```

Parameter

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d85588e80" style="text-align: left;" data-valign="bottom" width="36%">Parameter</th>
<th id="d85588e82" style="text-align: left;" data-valign="bottom" width="64%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d85588e86" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_content</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e86 d85588e82 ">The file content to be parsed as a BLOB.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e92" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_file_name</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e92 d85588e82 ">The name of the file used to derive the file type.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e98" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_decimal_char</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e98 d85588e82 ">Use this decimal character when trying to detect <code class="codeph">NUMBER</code> data types. If not specified, the procedure will auto-detect the decimal character.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e107" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_xlsx_sheet_name</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e107 d85588e82 ">For XLSX workbooks. The name of the worksheet to parse. If omitted, the function uses the first worksheet found.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e113" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_row_selector</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e113 d85588e82 "><p>Row selector to use for XML or JSON files. Pointer to the array/list of rows within the JSON or XML file.</p>
<p>If omitted, the function will:</p>
<ul>
<li>For XML files: Use <code class="codeph">/*/*</code> (first tag under the root tag) as the row selector.</li>
<li>For JSON files: Look for a JSON array and use the first array found.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e130" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_csv_row_delimiter </code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e130 d85588e82 ">Override the default row delimiter for CSV parsing.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e136" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_csv_col_delimiter</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e136 d85588e82 ">Use a specific CSV column delimiter. If omitted, the function detects the column delimiter based on the first row contents.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e142" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_csv_enclosed </code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e142 d85588e82 ">Override the default enclosure character for CSV parsing.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e148" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_skip_rows</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e148 d85588e82 ">The amount of rows to skip before parsing. For XML and JSON parsing to get the same behavior as for CSV and XLSX parsing.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e154" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_nullif</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e154 d85588e82 ">Similar to SQL <code class="codeph">NULLIF</code> function: If the column has this value, return NULL.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e163" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_force_trim_whitespace</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e163 d85588e82 ">Whether to force trim enquoted whitespace from parsed values.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e170" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_file_charset </code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e170 d85588e82 ">File encoding, if not <code class="codeph">UTF-8 (AL32UTF8)</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e179" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_max_rows</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e179 d85588e82 ">Stop discovery after <code class="codeph">P_MAX_ROWS</code> rows have been processed.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d85588e188" style="text-align: left;" data-valign="top" width="36%" headers="d85588e80 "><code class="codeph">p_xml_namespaces</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d85588e188 d85588e82 ">XML namespaces to use when parsing XML files.</td>
</tr>
</tbody>
</table>

Returns

CLOB containing the file profile in JSON format.

Example

```
select apex_data_parser.discover(
           p_content => {BLOB containing XLSX file},
           p_file_name=>'large.xlsx' ) as profile_json
from dual;

PROFILE_JSON
-----------------------------------------------------------
{
    "file-encoding" : "AL32UTF8",
    "single-row" : false,
    "file-type" : 1,
    "parsed-rows" : 2189,
    "columns" : [
       {
          "name" : "C0",
          "format-mask" : "",
          "selector" : "",
          "data-type" : 2
       },
       {
          "selector" : "",
          "format-mask" : "",
          "data-type" : 1,
          "name" : "FIRST_NAME"
       },
       {
          "name" : "LAST_NAME",
          "format-mask" : "",
          "selector" : "",
          "data-type" : 1
       },

       :

       {
          "name" : "DATE_",
          "format-mask" : "DD\"/\"MM\"/\"YYYY",
          "data-type" : 3,
          "selector" : ""
       },
       {
          "format-mask" : "",
          "selector" : "",
          "data-type" : 2,
          "name" : "ID"
       }
    ],
    "row-selector" : "",
    "headings-in-first-row" : true,
    "xslx-worksheet" : "sheet1.xml",
    "csv-delimiter" : ""
 }
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.5 GET_COLUMNS Function

This function returns the columns of a parser profile as a table in order to be consumed by Oracle APEX components.

Syntax

```
APEX_DATA_PARSER.GET_COLUMNS (
    p_profile             IN CLOB )
    RETURN apex_t_parser_columns PIPELINED;
```

Parameter

| Parameter | Description |
|:---|:---|
| `p_profile` | File profile to be used for parsing. The file profile might have been computed in a previous `parse()` or `discover()` invocation. |

Returns

Returns profile column information as rows of `apex_t_parser_columns`.

Example

The following example uses `discover()` to compute a file profile and then `get_columns()` to return the list of columns.

```
select *
      from table(
                  apex_data_parser.get_columns(
                      apex_data_parser.discover(
                          p_content => {BLOB containing XLSX file},
                          p_file_name=>'large.xlsx' )));

     COLUMN_POSITION COLUMN_NAME   DATA_TYPE   FORMAT_MASK
     --------------- ------------- ----------- ------------------
                   1 C0            NUMBER
                   2 FIRST_NAME    VARCHAR2
                   3 LAST_NAME     VARCHAR2
                   4 GENDER        VARCHAR2
                   5 COUNTRY       VARCHAR2
                   6 AGE           NUMBER
                   7 DATE_         DATE        DD"/"MM"/"YYYY
                   8 ID            NUMBER
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.6 GET_FILE_PROFILE Function

This function returns the current file profile in JSON format. A file profile is generated when the `parse()` table function runs and no file profile is passed in. The file profile contains metadata about the parsed files such as the CSV delimiter, the XLSX worksheet name, and the columns found during parsing and their data types.

The typical call sequence is as follows:

1.  Invoke `PARSE` - Use this table function to parse the files and get rows and columns in order to display a data preview. While the function runs, it computes the file parser profile which can be used in subsequent calls in order to further process the data.
2.  Invoke `GET_FILE_PROFILE` - Retrieve file profile information in JSON format. The `GET_COLUMNS` function can be used to display file profile information in a structured way.
3.  Process the data.

Syntax

```
APEX_DATA_PARSER.GET_FILE_PROFILE RETURN CLOB;
```

Parameter

None.

Returns

Returns file profile of the last `PARSE()` invocation in JSON format.

Example

```
select line_number, col001,col002,col003,col004,col005,col006,col007,col008
   from table(
              apex_data_parser.parse(
                  p_content         => {BLOB containing XLSX file},
                  p_file_name       => 'test.xlsx',
                  p_xlsx_sheet_name => 'sheet1.xml') ) ;

LINE_NUMBER COL001   COL002       COL003       COL004   COL005          COL006   COL007       COL008
----------- -------- ------------ ------------ -------- --------------- -------- ------------ ---------
          1 0        First Name   Last Name    Gender   Country         Age      Date         Id
          2 1        Dulce        Abril        Female   United States   32       15/10/2017   1562
          3 2        Mara         Hashimoto    Female   Great Britain   25       16/08/2016   1582
          4 3        Philip       Gent         Male     France          36       21/05/2015   2587
          5 4        Kathleen     Hanner       Female   United States   25       15/10/2017   3549
          6 5        Nereida      Magwood      Female   United States   58       16/08/2016   2468
          7 6        Gaston       Brumm        Male     United States   24       21/05/2015   2554
          8 7        Etta         Hurn         Female   Great Britain   56       15/10/2017   3598
          9 8        Earlean      Melgar       Female   United States   27       16/08/2016   2456
         10 9        Vincenza     Weiland      Female   United States   40       21/05/2015   6548
          : :        :            :            :        :               :        :            :

select apex_data_parser.get_file_profile from dual;

{
    "file-type" : 1,
    "csv-delimiter" : "",
    "xlsx-worksheet" : "sheet1.xml",
    "headings-in-first-row" : true,
    "file-encoding" : "AL32UTF8",
    "single-row" : false,
    "parsed-rows" : 2378,
    "columns" : [
       {
          "format-mask" : "",
          "name" : "C0",
          "data-type" : 2,
          "selector" : ""
       },
       {
          "name" : "FIRST_NAME",
          "data-type" : 1,
          "selector" : "",
          "format-mask" : ""
       },
       {
          "selector" : "",
          "data-type" : 1,
          "name" : "LAST_NAME",
          "format-mask" : ""
       },
       {
          "format-mask" : "",
          "data-type" : 1,
          "name" : "GENDER",
          "selector" : ""
       },
       {
          "name" : "COUNTRY",
          "data-type" : 1,
          "selector" : "",
          "format-mask" : ""
       },
       {
          "data-type" : 2,
          "name" : "AGE",
          "selector" : "",
          "format-mask" : ""
       },
       {
          "format-mask" : "DD\"/\"MM\"/\"YYYY",
          "selector" : "",
          "data-type" : 3,
          "name" : "DATE_"
       },
       {
          "name" : "ID",
          "data-type" : 2,
          "selector" : "",
          "format-mask" : ""
       }
    ],
    "row-selector" : ""
}
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.7 GET_FILE_TYPE Function

This function returns a file type, based on a file name extension.

Syntax

```
APEX_DATA_PARSER.GET_FILE_TYPE (
    p_file_name IN VARCHAR2 )
RETURN t_file_type;
```

Parameter

| Parameter     | Description                     |
|:--------------|:--------------------------------|
| `p_file_name` | File name to get the file type. |

Returns

Returns the file type as `t_file_type`.

Example

```
DECLARE
   l_file_type apex_data_parser.t_file_type;
BEGIN
    l_file_type := apex_data_parser.get_file_type( 'test.xlsx' );
END;
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.8 GET_XLSX_WORKSHEETS Function

This function returns information on worksheets within an XLSX workbook as a list of `apex_t_parser_worksheet` instances.

Syntax

```
APEX_DATA_PARSER.GET_XLSX_WORKSHEETS (
    p_content   IN BLOB )
RETURN apex_t_parser_worksheets;
```

Parameter

| Parameter   | Description               |
|:------------|:--------------------------|
| `p_content` | XLSX worksheet as a BLOB. |

Returns

Returns table with worksheet information.

Example

```
select * from table(
    apex_data_parser.get_xlsx_worksheets(
        p_content =>{BLOB containing XLSX file}
```

```
SHEET_SEQUENCE SHEET_DISPLAY_NAME   SHEET_FILE_NAME   SHEET_PATH
1              Sheet1               sheet1.xml        worksheets/sheet1.xml
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.9 JSON_TO_PROFILE Function

This function converts a file profile in JSON format to an instance of the `t_file_profile` record type.

Syntax

```
APEX_DATA_PARSER.JSON_TO_PROFILE (
    p_json  IN CLOB )
    RETURN t_file_profile;
```

Parameter

| Parameter | Description                      |
|:----------|:---------------------------------|
| `p_json`  | The data profile in JSON format. |

Returns

Returns the file profile as an instance of the t_file_profile record type.

Example

```
DECLARE
    l_profile t_file_profile;
BEGIN
    l_profile := apex_data_parser.json_to_profile('{"file-type": 2, "csv-delimiter": ","}');
END;
```

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.10 PARSE Function

This function enables you to parse XML, XLSX, CSV, or JSON files and returns a generic table of the following structure:

```
LINE_NUMBER COL001 COL002 COL003 COL004 ... COL300
```

Values are generally returned in `VARCHAR2` format. A returned table row can have a maximum of 300 columns. The maximum length for a VARCHAR2 table column is 4000 bytes; there is no line length maximum. 20 out of the 300 supported columns can be handled as a CLOB.

File parsing happens on-the-fly as this function is invoked. Data does not write to a collection nor to a temporary table.

About Parsing File Profiles

If the `p_file_profile` parameter is not passed, the function computes a file profile with column information during parsing.

If `p_detect_data_types` is passed as `Y` (default), the function also detects column data types during parsing. Retrieve the computed file profile using `GET_FILE_PROFILE` after the function finishes:

1.  Invoke `PARSE` - Use this table function to parse the files and get rows and columns in order to display a data preview.
2.  Invoke `GET_FILE_PROFILE` - Retrieve file profile information in JSON format.
3.  Process the data - Generate a SQL query based on the data profile to perform custom processing.

Note:

XLSX parsing occurs in phases:

1.  First, `APEX_ZIP` extracts individual XML files from the XLSX archive.
2.  Then, the `XMLTABLE SQL` function parses the actual XLSX.

About CLOB Support

Starting with APEX release 19.2, this package supports string values larger than 4,000 bytes. 20 out of the 300 supported columns can be handled as a `CLOB`. The level of `CLOB` support depends upon the file type being parsed.

CSV and XLSX

- `CLOB` values are supported up to 32K.
- `CLOB` columns can be detected during discovery.
- When the data profile is discovered, values below 4000 bytes are normally returned as `COLNNN`. `CLOB` values are returned in the `CLOBNN` column and the first 1000 characters are returned as `COLNNN`. If a data profile is passed in and that has `CLOB` column defined, all values are returned in the `CLOBNN` column only.

XML

- `CLOB` values with more than 32K are supported.
- `CLOB` columns can be detected during discovery.
- When the data profile is discovered, values below 4000 bytes are normally returned as `COLNNN`. `CLOB` values are returned in the `CLOBNN` column and the first 1000 characters are returned as `COLNNN`. If a data profile is passed in and that has `CLOB` column defined, all values are returned in the `CLOBNN` column only.

JSON

- `CLOB` values with more than 32K are supported.
- `CLOB` columns are not detected during discovery; `CLOB` support is only active if a file profile containing `CLOB` column is passed in as the `p_file_profile` parameter.
- Since `JSON_TABLE` does not support CLOBs on 12c databases, the parser uses XMLTYPE-based processing if a file profile with CLOB columns is passed in. Processing will be significantly slower.

About Large CSV Files

If the BLOB passed to `APEX_DATA_PARSER.PARSE` is less than 50 MB, Oracle APEX copies the BLOB to an internal, cached temporary LOB. Thus all CSV parsing is done in memory. For larger BLOBs, APEX does CSV parsing on the original BLOB locator. If it is selected from a table, CSV parsing can happen on disk but might be significantly slower. Note that a performance degradation may occur when parsed CSV files grow beyond 50 MB.

However, developers can also use the `DBMS_LOB.CREATETEMPORARY` (passing `CACHE => TRUE` ) and `DBMS_LOB.COPY` procedures in order to explicitly create a cached temporary LOB, even for a larger file. Instead of the original BLOB, the cached temporary LOB can be passed to `APEX_DATA_PARSER.PARSE`. This approach also enables in-memory parsing for files larger than 50 MB.

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=ARPLS-GUID-5F805F47-FC30-4E5E-B3C5-EDCB9AF62899" target="_blank">CREATETEMPORARY Procedures</a> and <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=ARPLS-GUID-092C14BA-5738-4471-BCD8-10CD4CBCD499" target="_blank">COPY Procedures</a> in Oracle AI Database PL/SQL Packages and Types Reference.

Syntax

```
APEX_DATA_PARSER.PARSE (
    p_content                      IN BLOB,
    p_file_name                    IN VARCHAR2     DEFAULT NULL,
    p_file_type                    in t_file_type  DEFAULT NULL,
    p_file_profile                 IN CLOB         DEFAULT NULL,
    --
    p_detect_data_types            IN VARCHAR2     DEFAULT 'Y',
    p_decimal_char                 IN VARCHAR2     DEFAULT NULL,
    --
    p_xlsx_sheet_name              IN VARCHAR2     DEFAULT NULL,
    --
    p_row_selector                 IN VARCHAR2     DEFAULT NULL,
    --
    p_csv_row_delimiter            IN VARCHAR2     DEFAULT LF,
    p_csv_col_delimiter            IN VARCHAR2     DEFAULT NULL,
    p_csv_enclosed                 IN VARCHAR2     DEFAULT '"',
    --
    p_skip_rows                    IN PLS_INTEGER  DEFAULT NULL,
    p_add_headers_row              IN VARCHAR2     DEFAULT 'N',
    --
    p_nullif                       IN VARCHAR2     DEFAULT NULL,
    p_force_trim_whitespace        IN VARCHAR2     DEFAULT 'N',
    --
    p_file_charset                 IN VARCHAR2     DEFAULT 'AL32UTF8',
    p_max_rows                     IN NUMBER       DEFAULT NULL,
    p_return_rows                  IN NUMBER       DEFAULT NULL,
    --
    p_store_profile_to_collection  IN VARCHAR2     DEFAULT NULL,
    p_xml_namespaces               IN VARCHAR2     DEFAULT NULL,
    --
    p_fix_excel_precision          IN VARCHAR2     DEFAULT 'N' )
    RETURN apex_t_parser_table pipelined;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d86940e280" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d86940e282" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d86940e286" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_content</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e286 d86940e282 ">The file content to be parsed as a BLOB.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e292" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_file_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e292 d86940e282 ">The name of the file; only used to derive the file type. Either <code class="codeph">p_file_name</code>, <code class="codeph">p_file_type</code> or <code class="codeph">p_file_profile</code> must be passed in.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e307" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_file_type</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e307 d86940e282 ">The type of the file to be parsed. Use this to explicitly pass the file type in. Either <code class="codeph">p_file_name</code>, <code class="codeph">p_file_type</code> or <code class="codeph">p_file_profile</code> must be passed in.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e322" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_file_profile</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e322 d86940e282 ">File profile to be used for parsing. The file profile might have been computed in a previous <code class="codeph">parse()</code> or <code class="codeph">discover()</code> invocation. If passed in again, the function skips some profile detection logic and use the passed in profile in order to improve performance.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e334" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_detect_data_types</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e334 d86940e282 "><p>Whether to detect data types (<code class="codeph">NUMBER, DATE, TIMESTAMP</code>) during parsing.</p>
<p>If <code class="codeph">Y</code> (default), the function computes the file profile and also add data type information to it.</p>
<p>If <code class="codeph">N</code>, all columns are <code class="codeph">VARCHAR2</code>.</p>
<p>When no data types are detected, all columns are reported as <code class="codeph">VARCHAR2(4000)</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e362" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_decimal_char</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e362 d86940e282 ">Use this decimal character when trying to detect <code class="codeph">NUMBER</code> data types. If not specified,the procedure will auto-detect the decimal character.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e371" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_xlsx_sheet_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e371 d86940e282 ">For XLSX workbooks. The name of the worksheet to parse. If omitted, the function uses the first worksheet found.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e377" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_row_selector</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e377 d86940e282 "><p>For JSON and XML files. Pointer to the array / list of rows within the JSON or XML file. If omitted, the function will:</p>
<ul>
<li>For XML files: Use <code class="codeph">/*/*</code> (first tag under the root tag) as the row selector.</li>
<li>For JSON files: Look for a JSON array and use the first array found.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e392" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_csv_row_delimiter</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e392 d86940e282 ">Override the default row delimiter for CSV parsing. Limited to one character and defaults to Linefeed (LF). Note that the Linefeed row delimiter also handles "Carriage Return/Linefeed" (CRLF).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e401" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_csv_col_delimiter</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e401 d86940e282 ">Use a specific CSV column delimiter. If omitted, the function will detect the column delimiter based on the first row contents.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e407" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_csv_enclosed</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e407 d86940e282 ">Override the default enclosure character for CSV parsing.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e414" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_skip_rows</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e414 d86940e282 ">Skip the first N rows when parsing.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e420" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_add_headers_row</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e420 d86940e282 ">For XML, JSON: Emit the column headers (tag, attr names) as the first row.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e426" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_nullif</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e426 d86940e282 ">Similar to SQL <code class="codeph">NULLIF</code> function. If the column has this value, return <code class="codeph">NULL</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e438" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_force_trim_whitespace</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e438 d86940e282 ">Whether to force trim enquoted whitespace from parsed values.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e444" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_file_charset</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e444 d86940e282 ">Encoding of the file to parse. Defaults to <code class="codeph">AL32UTF8</code> if omitted or <code class="codeph">NULL</code> is explicitly passed in.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e456" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_max_rows</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e456 d86940e282 ">Stop parsing after <code class="codeph">p_max_rows</code> have been returned.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e465" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_return_rows</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e465 d86940e282 ">Amount of rows to return. This is useful when the parser parses more rows (for data type detection) than it is supposed to return. When the specified amount of rows have been emitted, the function will continue parsing (and refining the detected data types) until <code class="codeph">p_max_rows</code> has been reached, or until the <code class="codeph">rownum</code> &lt; x clause of the SQL query kicks in and stops execution.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e477" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_store_profile_to_collection</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e477 d86940e282 ">Store the File profile which has been computed during parse into a collection. The collection will be cleared, if it exists. Only be used for computed profiles.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e483" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_xml_namespaces</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e483 d86940e282 ">XML namespaces to use when parsing XML files.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d86940e489" style="text-align: left;" data-valign="top" width="34%" headers="d86940e280 "><code class="codeph">p_fix_excel_precision</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d86940e489 d86940e282 "><p>Whether to round numbers in XLSX files to 15 significant digits. This is useful for XLSX files generated by Microsoft Excel. Excel stores numeric values as floating point numbers with a maximum of 15 significant digits. For calculation results, this can lead to rounding issues, which are fixed using this parameter.</p>
<p>See also: <a href="https://learn.microsoft.com/en-us/office/troubleshoot/excel/floating-point-arithmetic-inaccurate-result" target="_blank">Floating-point arithmetic may give inaccurate results in Excel</a> at Microsoft 365.</p></td>
</tr>
</tbody>
</table>

Returns

Returns rows of the `apex_t_parser_row` type.

```
LINE_NUMBER COL001 COL002 COL003 COL004 ... COL300
```

Example

```
select line_number, col001,col002,col003,col004,col005,col006,col007,col008
   from table(
              apex_data_parser.parse(
                  p_content         => {BLOB containing XLSX spreadsheet},
                  p_file_name       => 'test.xlsx',
                  p_xlsx_sheet_name => 'sheet1.xml') ) ;

LINE_NUMBER COL001   COL002       COL003       COL004   COL005          COL006   COL007       COL008
----------- -------- ------------ ------------ -------- --------------- -------- ------------ --------
          1 0        First Name   Last Name    Gender   Country         Age      Date         Id
          2 1        Dulce        Abril        Female   United States   32       15/10/2017   1562
          3 2        Mara         Hashimoto    Female   Great Britain   25       16/08/2016   1582
          4 3        Philip       Gent         Male     France          36       21/05/2015   2587
          5 4        Kathleen     Hanner       Female   United States   25       15/10/2017   3549
          6 5        Nereida      Magwood      Female   United States   58       16/08/2016   2468
          7 6        Gaston       Brumm        Male     United States   24       21/05/2015   2554
          8 7        Etta         Hurn         Female   Great Britain   56       15/10/2017   3598
          9 8        Earlean      Melgar       Female   United States   27       16/08/2016   2456
         10 9        Vincenza     Weiland      Female   United States   40       21/05/2015   6548
          : :        :            :            :        :               :        :            :

select line_number, col001,col002,col003,col004,col005,col006,col007,col008
   from table(
              apex_data_parser.parse(
                  p_content         => {BLOB containing JSON file},
                  p_file_name       => 'test.json') ) ;

LINE_NUMBER COL001    COL002   COL003                                COL004          COL005
----------- --------- ---------------------------------------------- --------------- --------------
          1 Feature   1.5      41km E of Cape Yakataga, Alaska       1536513727239   1536514117117
          2 Feature   0.21     11km ENE of Aguanga, CA               1536513299520   1536513521231
          3 Feature   1.84     5km SSW of Pahala, Hawaii             1536513262940   1536513459610
          4 Feature   2.55     9km W of Volcano, Hawaii              1536513100890   1536513446680
          5 Feature   1.3      62km ESE of Cape Yakataga, Alaska     1536512917361   1536513322236
          6 Feature   1.79     7km SW of Tiptonville, Tennessee      1536512379690   1536512668010
          7 Feature   1.9      126km NNW of Arctic Village, Alaska   1536512346186   1536512846567
          8 Feature   1.4      105km NW of Arctic Village, Alaska    1536512140162   1536512846334
```

See Also:

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=ARPLS-GUID-5F805F47-FC30-4E5E-B3C5-EDCB9AF62899" target="_blank">CREATETEMPORARY Procedures</a> in Oracle AI Database PL/SQL Packages and Types Reference
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=ARPLS-GUID-092C14BA-5738-4471-BCD8-10CD4CBCD499" target="_blank">COPY Procedures</a> in Oracle AI Database PL/SQL Packages and Types Reference
- <a href="https://learn.microsoft.com/en-us/office/troubleshoot/excel/floating-point-arithmetic-inaccurate-result" target="_blank">Floating-point arithmetic may give inaccurate results in Excel</a> at Microsoft 365

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)

------------------------------------------------------------------------

## 22.11 SET_PARSER_FLAGS Procedure

This procedure sets flags to control parser behavior. Existing flags include:

- `CSV_BACKSLASH_ESCAPING` - If `Y`, the parser treats the backslash character as an additional escape for the the enclosed character. Defaults to `Y` for backwards compatibility.

Syntax

```
APEX_DATA_PARSER.SET_PARSER_FLAGS (
    p_name  IN VARCHAR2,
    p_value IN VARCHAR2 )
```

Parameters

| Parameter | Description              |
|:----------|:-------------------------|
| `p_name`  | Name of the flag to set. |
| `p_value` | Value to set.            |

**Parent topic:** [APEX_DATA_PARSER](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_PARSER.html#GUID-07E9397C-DF26-40F7-AC73-F46961E1088A)
