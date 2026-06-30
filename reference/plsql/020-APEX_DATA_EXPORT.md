<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 20 APEX_DATA_EXPORT

The APEX_DATA_EXPORT package contains the implementation to export data from Oracle APEX. Supported filetypes include: PDF, XLSX, HTML, CSV, XML and JSON.

Use the `EXPORT` function to pass a query context from the `APEX_EXEC` package and return the `t_export` type, which includes the contents in a LOB.

- [Global Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-Global-Constants.html#GUID-3E08E8B0-85B4-4AF4-A0EE-8DF81149B472)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-Data-Types.html#GUID-89148B14-CBD1-48F9-9E83-898EEE765E39)
- [ADD_AGGREGATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_AGGREGATE-Procedure.html#GUID-9CC21557-27C8-45B4-BC70-8A9C18E2E683)
- [ADD_COLUMN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_COLUMN-Procedure.html#GUID-C06428D3-6777-4DA5-B1E4-CC20535E8DAF)
- [ADD_COLUMN_GROUP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_COLUMN_GROUP-Procedure.html#GUID-AB1B0D6C-F964-4729-9DF3-D0DA8457C060)
- [ADD_HIGHLIGHT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-ADD_HIGHLIGHT-Procedure.html#GUID-7C0EDF89-1FA2-4DAE-8F51-8344E8EE0165)
- [DOWNLOAD Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-DOWNLOAD-Procedure.html#GUID-A2095839-B801-40C0-98D6-0576766489EB)
- [EXPORT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-EXPORT-Function.html#GUID-6109A537-50C4-4FB2-8414-7A554B19EC8E)
- [GET_PRINT_CONFIG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT-GET_PRINT_CONFIG-Procedure.html#GUID-FEBD25E1-53E7-4C03-A30B-5859692188A7)

------------------------------------------------------------------------

## 20.1 Global Constants

The APEX_DATA_EXPORT package uses the following constants.

Export Format Constants

Constants used in the `EXPORT` function. The `c_format_pxml` and `c_format_pjson` formats are optimized for printing.

```
c_format_csv                    constant t_format               := 'CSV';
c_format_html                   constant t_format               := 'HTML';
c_format_pdf                    constant t_format               := 'PDF';
c_format_xlsx                   constant t_format               := 'XLSX';
c_format_xml                    constant t_format               := 'XML';
c_format_pxml                   constant t_format               := 'PXML';
c_format_json                   constant t_format               := 'JSON';
c_format_pjson                  constant t_format               := 'PJSON';
```

Alignment Constants

Constants used in the `ADD_COLUMN`, `ADD_COLUMN_GROUP`, and `GET_PRINT_CONFIG` methods.

```
c_align_start                   constant t_alignment            := 'LEFT';
c_align_center                  constant t_alignment            := 'CENTER';
c_align_end                     constant t_alignment            := 'RIGHT';
```

Content Disposition Constants

Constants used in the `DOWNLOAD` procedure.

```
c_attachment                    constant t_content_disposition  := 'attachment';
c_inline                        constant t_content_disposition  := 'inline';
```

Size Unit Constants

Constants used in the `GET_PRINT_CONFIG` function.

```
c_unit_inches                   constant t_unit                 := 'INCHES';
c_unit_millimeters              constant t_unit                 := 'MILLIMETERS';
c_unit_centimeters              constant t_unit                 := 'CENTIMETERS';
c_unit_points                   constant t_unit                 := 'POINTS';
```

Predefined Size Constants

Constants used in the `GET_PRINT_CONFIG` function.

```
c_size_letter                   constant t_size                 := 'LETTER';
c_size_legal                    constant t_size                 := 'LEGAL';
c_size_tabloid                  constant t_size                 := 'TABLOID';
c_size_A4                       constant t_size                 := 'A4';
c_size_A3                       constant t_size                 := 'A3';
c_size_custom                   constant t_size                 := 'CUSTOM';
```

Column Width Unit Constants

Constants used in the `GET_PRINT_CONFIG` function.

```
c_width_unit_percentage         constant t_width_unit           := 'PERCENTAGE';
c_width_unit_points             constant t_width_unit           := 'POINTS';
c_width_unit_pixels             constant t_width_unit           := 'PIXELS';
```

Page Orientation Constants

Constants used in the `GET_PRINT_CONFIG` function.

```
c_orientation_portrait          constant t_orientation          := 'VERTICAL';
c_orientation_landscape         constant t_orientation          := 'HORIZONTAL';
```

Font Family Constants

Constants used in the `GET_PRINT_CONFIG` function.

```
c_font_family_helvetica         constant t_font_family          := 'Helvetica';
c_font_family_times             constant t_font_family          := 'Times';
c_font_family_courier           constant t_font_family          := 'Courier';
```

Font Weight Constants

Constants used in the `GET_PRINT_CONFIG` function.

```
c_font_weight_normal            constant t_font_weight          := 'normal';
c_font_weight_bold              constant t_font_weight          := 'bold';
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.2 Data Types

The APEX_DATA_EXPORT package uses the following data types.

Generic

```
subtype t_alignment             is varchar2(255);
subtype t_label                 is varchar2(255);
subtype t_color                 is varchar2(4000);
subtype t_format                is varchar2(20);
subtype t_content_disposition   is varchar2(30);
subtype t_unit                  is varchar2(4000);
subtype t_size                  is varchar2(4000);
subtype t_width_unit            is varchar2(255);
subtype t_orientation           is varchar2(4000);
subtype t_font_family           is varchar2(4000);
subtype t_font_weight           is varchar2(4000);
```

Resulting Object of an Export

```
type t_export is record (
    file_name               varchar2(32767),
    format                  t_format,
    mime_type               varchar2(32767),
    as_clob                 boolean,
    content_blob            blob,
    content_clob            clob );
```

Column Groups

```
type t_column_group is record (
    name                    varchar2(255),
    alignment               t_alignment,
    parent_group_idx        pls_integer );

type t_column_groups        is table of t_column_group  index by pls_integer;
```

Columns

```
type t_column is record (
    name                    apex_exec.t_column_name,
    heading                 varchar2(255),
    format_mask             varchar2(4000),
    heading_alignment       t_alignment,
    value_alignment         t_alignment,
    width                   number,
    is_column_break         boolean,
    is_frozen               boolean,
    column_group_idx        pls_integer );

type t_columns              is table of t_column        index by pls_integer;
```

Highlights

```
type t_highlight is record (
    id                      number,
    name                    varchar2(4000),
    value_column            apex_exec.t_column_name,
    display_column          apex_exec.t_column_name,
    text_color              t_color,
    background_color        t_color );

type t_highlights           is table of t_highlight     index by pls_integer;
```

Aggregates

```
type t_aggregate is record (
    label                   t_label,
    format_mask             varchar2(4000),
    display_column          apex_exec.t_column_name,
    value_column            apex_exec.t_column_name,
    overall_label           t_label,
    overall_value_column    apex_exec.t_column_name );

type t_aggregates           is table of t_aggregate     index by pls_integer;
```

Print Config

```
type t_print_config is record (
    units                       t_unit,
    paper_size                  t_size,
    width_units                 t_width_unit,
    width                       number,
    height                      number,
    orientation                 t_orientation,
    page_header                 varchar2(4000),
    page_header_font_color      t_color,
    page_header_font_family     t_font_family,
    page_header_font_weight     t_font_weight,
    page_header_font_size       varchar2(4000),
    page_header_alignment       t_alignment,
    page_footer                 varchar2(4000),
    page_footer_font_color      t_color,
    page_footer_font_family     t_font_family,
    page_footer_font_weight     t_font_weight,
    page_footer_font_size       varchar2(4000),
    page_footer_alignment       t_alignment,
    header_bg_color             t_color,
    header_font_color           t_color,
    header_font_family          t_font_family,
    header_font_weight          t_font_weight,
    header_font_size            varchar2(4000),
    body_bg_color               t_color,
    body_font_color             t_color,
    body_font_family            t_font_family,
    body_font_weight            t_font_weight,
    body_font_size              varchar2(4000),
    border_width                number,
    border_color                t_color );
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.3 ADD_AGGREGATE Procedure

This procedure adds an aggregate to the aggregate collection. Aggregate collections can be passed to the `EXPORT` calls in order to add an aggregate row. This procedure can be used in combination with control breaks or standalone for overall aggregates.

If an empty aggregate collection (or no aggregate collection) is passed, no aggregate rows render in the export.

This procedure requires an aggregate column. Value is the current aggregate total (for control breaks) or the overall total.

Syntax

```
PROCEDURE ADD_AGGREGATE(
  p_aggregates            IN OUT NOCOPY t_aggregates,
  p_label                 IN            t_label,
  p_format_mask           IN            VARCHAR2                  DEFAULT NULL,
  p_display_column        IN            apex_exec.t_column_name,
  p_value_column          IN            apex_exec.t_column_name,
  p_overall_label         IN            t_label                   DEFAULT NULL,
  p_overall_value_column  IN            apex_exec.t_column_name   DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_aggregates` | Aggregate collection. |
| `p_label` | Aggregate label. |
| `p_format_mask` | Format mask to apply on the aggegate value. |
| `p_display_column` | Name of the column where to display the aggregate. |
| `p_value_column` | Name of the column which contains the value of the aggregate. |
| `p_overall_label` | Overall label. |
| `p_overall_value_column` | Name of the column which contains the value of the overall aggregate. |

Examples

```
DECLARE
  l_aggregates  apex_data_export.t_aggregates;
  l_columns     apex_data_export.t_columns;
  l_context     apex_exec.t_context;
  l_export      apex_data_export.t_export;
BEGIN
  apex_data_export.add_aggregate(
    p_aggregates              => l_aggregates,
    p_label                   => 'Sum',
    p_format_mask             => 'FML999G999G999G999G990D00',
    p_display_column          => 'SAL',
    p_value_column            => 'AGGREGATE1',
    p_overall_label           => 'Total sum',
    p_overall_value_column    => 'OVERALL1' );

  apex_data_export.add_column( p_columns => l_columns, p_name => 'DEPTNO', p_is_column_break => true );
  apex_data_export.add_column( p_columns => l_columns, p_name => 'EMPNO');
  apex_data_export.add_column( p_columns => l_columns, p_name => 'ENAME');
  apex_data_export.add_column( p_columns => l_columns, p_name => 'SAL');

  l_context := apex_exec.open_query_context(
    p_location    => apex_exec.c_location_local_db,
    p_sql_query   => 'select deptno,
                             empno,
                             ename,
                             sal,
                             sum( sal)  over ( partition by deptno ) as AGGREGATE1,
                             sum( sal)  over ( ) as OVERALL1
                        FROM emp
                        order by deptno' );

l_export := apex_data_export.export (
              p_context      => l_context,
              p_format       => apex_data_export.c_format_pdf,
              p_columns      => l_columns,
              p_aggregates   => l_aggregates );

  apex_exec.close( l_context );

  apex_data_export.download( p_export => l_export );

EXCEPTION
  WHEN others THEN
      apex_exec.close( l_context );
      raise;
END;
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.4 ADD_COLUMN Procedure

This procedure adds a column to the column collection. Column collections can be passed to the `EXPORT` calls in order to return only a subset of the columns in the export. If an empty column collection (or no column collection) passes, all columns defined in the Query Context are added to the export.

Syntax

```
PROCEDURE ADD_COLUMN (
  p_columns             IN OUT NOCOPY t_columns,
  p_name                IN            apex_exec.t_column_name,
  p_heading             IN            VARCHAR2                  DEFAULT NULL,
  p_format_mask         IN            VARCHAR2                  DEFAULT NULL,
  p_heading_alignment   IN            t_alignment               DEFAULT NULL,
  p_value_alignment     IN            t_alignment               DEFAULT NULL,
  p_width               IN            NUMBER                    DEFAULT NULL,
  p_is_column_break     IN            BOOLEAN                   DEFAULT FALSE,
  p_is_frozen           IN            BOOLEAN                   DEFAULT FALSE,
  p_column_group_idx    IN            PLS_INTEGER               DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_columns` | Column collection. |
| `p_name` | Column name. |
| `p_heading` | Column heading text. |
| `p_format_mask` | Format mask to apply. Useful for XLSX exports where native datatypes are used. |
| `p_heading_alignment` | Column heading alignment. Valid values are: `LEFT`, `CENTER`, `RIGHT`. |
| `p_value_alignment` | Column value alignment. Valid values are: `LEFT`, `CENTER`, `RIGHT`. |
| `p_width` | PDF only. The column width. By default the units are as percentage. The units can be modified by updating the width_units of the print config. |
| `p_is_column_break` | Whether to use this column for control breaks |
| `p_is_frozen` | XLSX only. Whether the column is frozen. |
| `p_column_group_idx` | The index of a column group. If used, this column will part of the column group. |

Examples

```
DECLARE
    l_context               apex_exec.t_context;

    l_export                apex_data_export.t_export;
    l_columns               apex_data_export.t_columns;

BEGIN
    l_context := apex_exec.open_query_context(
        p_location    => apex_exec.c_location_local_db,
        p_sql_query   => 'select * from emp' );

    apex_data_export.add_column(
        p_columns             => l_columns,
        p_name                => 'ENAME',
        p_heading             => 'Name' );

    apex_data_export.add_column(
        p_columns             => l_columns,
        p_name                => 'JOB',
        p_heading             => 'Job' );

    apex_data_export.add_column(
        p_columns             => l_columns,
        p_name                => 'SAL',
        p_heading             => 'Salary',
        p_format_mask         => 'FML999G999G999G999G990D00' );

    l_export := apex_data_export.export (
        p_context               => l_context,
        p_format                => apex_data_export.c_format_html,
        p_columns               => l_columns,
        p_file_name             => 'employees' );

    apex_exec.close( l_context );

    apex_data_export.download( p_export => l_export );

EXCEPTION
    WHEN others THEN
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.5 ADD_COLUMN_GROUP Procedure

This procedure adds a column group to the column group collection. Column group collections can be passed to the `EXPORT` calls in order to group columns using an extra header row. If an empty column group collection (or no column group collection) passes, no column groups are added to the export. You can create multiple column group levels.

Syntax

```
APEX_DATA_EXPORT.ADD_COLUMN_GROUP (
    p_column_groups     IN OUT NOCOPY   t_column_groups,
    p_idx               OUT             PLS_INTEGER,
    p_name              IN              VARCHAR2,
    p_alignment         IN              t_alignment         DEFAULT c_align_center,
    p_parent_group_idx  IN              PLS_INTEGER         DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_column_groups` | Column group collection. |
| `p_idx` | The generated index in the columns collection. |
| `p_name` | Column group name. |
| `p_alignment` | Column group alignment. Valid values are: `LEFT`, `CENTER` (default), `RIGHT`. |
| `p_parent_group_idx` | The index of a parent column group. |

Example

```
DECLARE
    l_context               apex_exec.t_context;

    l_export                apex_data_export.t_export;
    l_column_groups         apex_data_export.t_column_groups;
    l_columns               apex_data_export.t_columns;

    -- Column group indexes
    l_identity_idx          pls_integer;
    l_compensation_idx      pls_integer;
BEGIN

    l_context := apex_exec.open_query_context(
        p_location    => apex_exec.c_location_local_db,
        p_sql_query   => 'select * from emp' );

    -- Define column groups
    apex_data_export.add_column_group(
        p_column_groups   => l_column_groups,
        p_idx             => l_identity_idx,
        p_name            => 'Identity' );

    apex_data_export.add_column_group(
        p_column_groups   => l_column_groups,
        p_idx             => l_compensation_idx,
        p_name            => 'Compensation' );

    -- Define columns
    apex_data_export.add_column(
        p_columns             => l_columns,
        p_name                => 'ENAME',
        p_heading             => 'Name',
        p_column_group_idx    => l_identity_idx );

    apex_data_export.add_column(
        p_columns             => l_columns,
        p_name                => 'JOB',
        p_heading             => 'Job',
        p_column_group_idx    => l_identity_idx );

    apex_data_export.add_column(
        p_columns             => l_columns,
        p_name                => 'SAL',
        p_heading             => 'Salary',
        p_column_group_idx    => l_compensation_idx );

    apex_data_export.add_column(
        p_columns             => l_columns,
        p_name                => 'COMM',
        p_heading             => 'Commission',
        p_column_group_idx    => l_compensation_idx );

    l_export := apex_data_export.export (
        p_context               => l_context,
        p_format                => apex_data_export.c_format_html,
        p_columns               => l_columns,
        p_column_groups         => l_column_groups,
        p_file_name             => 'employees' );

    apex_exec.close( l_context );

    apex_data_export.download( p_export => l_export );

EXCEPTION
    when others THEN
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.6 ADD_HIGHLIGHT Procedure

This procedure adds a highlight to the highlight collection. Highlight collections can be passed to the `EXPORT` calls in order to highlight a row or a column in a row. If no highlight collection (or an empty highlight collection) is passed, no highlights render in the export.

This procedure requires a highlight column. The value is the ID when highlights should be applied, else `NULL`.

Syntax

```
PROCEDURE ADD_HIGHLIGHT (
  p_highlights        IN OUT NOCOPY t_highlights,
  p_id                IN            pls_integer,
  p_value_column      IN            apex_exec.t_column_name,
  p_display_column    IN            apex_exec.t_column_name DEFAULT NULL,
  p_text_color        IN            t_color                 DEFAULT NULL,
  p_background_color  IN            t_color                 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_highlights` | Highlight collection. |
| `p_id` | ID of the highlight. |
| `p_value_column` | Name of the column where to check for the highlight ID. |
| `p_display_column` | Name of the column where to display the highlight. Leave empty for row highlights. |
| `p_text_color` | Hex color code of the text (#FF0000). |
| `p_background_color` | Hex color code of the background (#FF0000). |

Examples

```
DECLARE
    l_highlights     apex_data_export.t_highlights;
    l_context        apex_exec.t_context;
    l_export         apex_data_export.t_export;
BEGIN
    apex_data_export.add_highlight(
        p_highlights          => l_highlights,
        p_id                  => 1,
        p_value_column        => 'HIGHLIGHT1',
        p_display_column      => 'SAL',
        p_text_color          => '#FF0000' );

    l_context := apex_exec.open_query_context(
        p_location    => apex_exec.c_location_local_db,
        p_sql_query   => 'select empno,
                                ename,
                                sal,
                                case when sal >= 3000 then 1 end as HIGHLIGHT1
                            from emp' );

    l_export := apex_data_export.export (
                        p_context      => l_context,
                        p_format       => apex_data_export.c_format_pdf,
                        p_highlights   => l_highlights );

    apex_exec.close( l_context );

    apex_data_export.download( p_export => l_export );

EXCEPTION
    when others THEN
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.7 DOWNLOAD Procedure

This procedure downloads the data export by calling `APEX_APPLICATION.STOP_APEX_ENGINE`.

Syntax

```
APEX_DATA_EXPORT.DOWNLOAD (
    p_export                IN OUT NOCOPY t_export,
    p_content_disposition   IN t_content_disposition    DEFAULT c_attachment,
    p_add_file_extension    IN BOOLEAN                  DEFAULT TRUE,
    p_stop_apex_engine      IN BOOLEAN                  DEFAULT TRUE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_export` | The result object of an export. |
| `p_content_disposition` | Specifies whether to download the print document or display inline ("attachment" or "inline"). |
| `p_add_file_extension` | Whether Oracle APEX adds the file extension to the filename based on the export format. |
| `p_stop_apex_engine` | Whether to call `APEX_APPLICATION.STOP_APEX_ENGINE`. |

Examples

```
DECLARE
    l_context apex_exec.t_context;
    l_export  apex_data_export.t_export;
BEGIN
    l_context := apex_exec.open_query_context(
        p_location    => apex_exec.c_location_local_db,
        p_sql_query   => 'select * from emp' );

    l_export := apex_data_export.export (
        p_context   => l_context,
        p_format    => apex_data_export.c_format_csv,
        p_file_name => 'employees' );

    apex_exec.close( l_context );

    apex_data_export.download( p_export => l_export );

EXCEPTION
    when others THEN
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.8 EXPORT Function

This function exports the query context in the specified format.

Syntax

```
FUNCTION EXPORT (
  p_context                 IN apex_exec.t_context,
  p_format                  IN t_format,
  p_as_clob                 IN BOOLEAN          DEFAULT false,
  p_columns                 IN t_columns        DEFAULT c_empty_columns,
  p_column_groups           IN t_column_groups  DEFAULT c_empty_column_groups,
  p_aggregates              IN t_aggregates     DEFAULT c_empty_aggregates,
  p_highlights              IN t_highlights     DEFAULT c_empty_highlights,
  --
  p_file_name               IN VARCHAR2         DEFAULT NULL,
  p_print_config            IN t_print_config   DEFAULT c_empty_print_config,
  p_page_header             IN VARCHAR2         DEFAULT NULL,
  p_page_footer             IN VARCHAR2         DEFAULT NULL,
  p_supplemental_text       IN VARCHAR2         DEFAULT NULL,
  --
  p_csv_enclosed_by         IN VARCHAR2         DEFAULT NULL,
  p_csv_separator           IN VARCHAR2         DEFAULT NULL,
  --
  p_pdf_accessible          IN BOOLEAN          DEFAULT NULL,
  --
  p_xml_include_declaration IN BOOLEAN          DEFAULT false )
  RETURN t_export
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object from the EXEC infrastructure. |
| `p_format` | Export format. Valid values are: XLSX, PDF, HTML, CSV, XML and JSON. |
| `p_as_clob` | Exports as a CLOB instead of BLOB (default FALSE). |
| `p_columns` | Collection of column attributes beginning with column breaks, then in the order of display. |
| `p_column_groups` | Collection of column group attributes in the order of levels and display. |
| `p_aggregates` | Collection of report aggregates. |
| `p_highlights` | Collection of report highlights. |
| `p_file_name` | Defines the filename of the export. |
| `p_print_config` | Used for EXCEL and PDF to set the print attributes. |
| `p_page_header` | Text to appear in the header section of the document. Overrides the page header from `p_print_config`. |
| `p_page_footer` | Text to appear in the footer section of the document. Overrides the page footer from `p_print_config`. |
| `p_supplemental_text` | Text at the top of all download formats. |
| `p_csv_enclosed_by` | Used for CSV to enclose the output. |
| `p_csv_separator` | Used for CSV to separate the column values. |
| `p_pdf_accessible` | Used for PDF to create an accessible PDF. |
| `p_xml_include_declaration` | Used for XML to generate the XML declaration as the first line. |

Returns

This function returns: the export file as object which includes the contents, MIME type, and file name.

Examples

```
DECLARE
    l_context apex_exec.t_context;
    l_export  apex_data_export.t_export;
BEGIN
    l_context := apex_exec.open_query_context(
        p_location    => apex_exec.c_location_local_db,
        p_sql_query   => 'select * from emp' );

    l_export := apex_data_export.export (
                        p_context   => l_context,
                        p_format    => apex_data_export.c_format_pdf );

    apex_exec.close( l_context );

    apex_data_export.download( p_export => l_export );

EXCEPTION
    when others THEN
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)

------------------------------------------------------------------------

## 20.9 GET_PRINT_CONFIG Function

This function prepares the print config to style the data export.

- The colors are specified using hexadecimal (hex) notation, RGB color codes, or HTML color names.
- The alignment options include: Left, Center, Right
- The font family options include: Helvetica, Times, Courier
- The font weight options include: Normal, Bold

Syntax

```
FUNCTION GET_PRINT_CONFIG(
    p_units                       IN t_unit         DEFAULT c_unit_inches,
    p_paper_size                  IN t_size         DEFAULT c_size_letter,
    p_width_units                 IN t_width_unit   DEFAULT c_width_unit_percentage,
    p_width                       IN NUMBER         DEFAULT 11,
    p_height                      IN NUMBER         DEFAULT 8.5,
    p_orientation                 IN t_orientation  DEFAULT c_orientation_landscape,
    --
    p_page_header                 IN VARCHAR2       DEFAULT NULL,
    p_page_header_font_color      IN t_color        DEFAULT '#000000',
    p_page_header_font_family     IN t_font_family  DEFAULT c_font_family_helvetica,
    p_page_header_font_weight     IN t_font_weight  DEFAULT c_font_weight_normal,
    p_page_header_font_size       IN NUMBER         DEFAULT 12,
    p_page_header_alignment       IN t_alignment    DEFAULT c_align_center,
    --
    p_page_footer                 IN VARCHAR2       DEFAULT NULL,
    p_page_footer_font_color      IN t_color        DEFAULT '#000000',
    p_page_footer_font_family     IN t_font_family  DEFAULT c_font_family_helvetica,
    p_page_footer_font_weight     IN t_font_weight  DEFAULT c_font_weight_normal,
    p_page_footer_font_size       IN NUMBER         DEFAULT 12,
    p_page_footer_alignment       IN t_alignment    DEFAULT c_align_center,
    --
    p_header_bg_color             IN t_color        DEFAULT '#EEEEEE',
    p_header_font_color           IN t_color        DEFAULT '#000000',
    p_header_font_family          IN t_font_family  DEFAULT c_font_family_helvetica,
    p_header_font_weight          IN t_font_weight  DEFAULT c_font_weight_bold,
    p_header_font_size            IN NUMBER         DEFAULT 10,
    --
    p_body_bg_color               IN t_color        DEFAULT '#FFFFFF',
    p_body_font_color             IN t_color        DEFAULT '#000000',
    p_body_font_family            IN t_font_family  DEFAULT c_font_family_helvetica,
    p_body_font_weight            IN t_font_weight  DEFAULT c_font_weight_normal,
    p_body_font_size              IN NUMBER         DEFAULT 10,
    --
    p_border_width                IN NUMBER         DEFAULT .5,
    p_border_color                IN t_color        DEFAULT '#666666' )
RETURN t_print_config;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d83641e80" style="text-align: left;" data-valign="bottom">Parameter</th>
<th id="d83641e82" style="text-align: left;" data-valign="bottom">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d83641e86" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_units</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e86 d83641e82 "><p>Select the units used to specify page width and height.</p>
<p>Valid values are: Inches, Millimeters, Centimeters, Points</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e95" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_paper_size</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e95 d83641e82 "><p>PDF only. Select the report page size. To type in your own page width and height, select Custom.</p>
<p>Available options include: Letter, Legal, Tabloid, A4, A3, Custom</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e104" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_width_units</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e104 d83641e82 "><p>PDF only. Select the units used to specify column widths.</p>
<p>Valid values are: Percentage, Points, Pixels</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e113" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_width</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e113 d83641e82 ">PDF only. The width of the page.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e119" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_height</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e119 d83641e82 ">PDF only. The height of the page.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e125" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_orientation</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e125 d83641e82 "><p>The orientation for the page. PDF only.</p>
<p>Available options include: Vertical (Portrait), Horizontal (Landscape)</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e134" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_header</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e134 d83641e82 ">Text to appear in the header section of the document.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e140" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_header_font_color</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e140 d83641e82 ">The page header font color.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e146" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_header_font_family</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e146 d83641e82 ">The page header font family.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e152" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_header_font_weight</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e152 d83641e82 ">The page header font weight.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e158" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_header_font_size</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e158 d83641e82 ">The page header font size.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e165" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_header_alignment</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e165 d83641e82 ">The page header text alignment.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e171" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_footer</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e171 d83641e82 ">Text to appear in the footer section of the document.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e177" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_footer_font_color</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e177 d83641e82 ">The page footer font color.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e183" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_footer_font_family</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e183 d83641e82 ">The page footer font family.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e189" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_footer_font_weight</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e189 d83641e82 ">The page footer font weight.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e195" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_footer_font_size</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e195 d83641e82 ">The page footer font size.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e201" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_page_footer_alignment</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e201 d83641e82 ">The page footer text aligment.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e207" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_header_bg_color</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e207 d83641e82 ">The table header background color.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e213" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_header_font_color</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e213 d83641e82 ">The table header font color.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e219" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_header_font_family</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e219 d83641e82 ">The table header font family.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e225" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_header_font_weight</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e225 d83641e82 ">The table header font weight.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e232" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_header_font_size</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e232 d83641e82 ">The table header font size.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e238" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_body_bg_color</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e238 d83641e82 ">The table body background color.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e244" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_body_font_color</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e244 d83641e82 ">The table body font color.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e250" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_body_font_family</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e250 d83641e82 ">The table body font family.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e256" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_body_font_weight</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e256 d83641e82 ">The table body font weight.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e262" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_body_font_size</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e262 d83641e82 ">The table body font size.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e268" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_border_width</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e268 d83641e82 ">The width of the borders.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d83641e274" style="text-align: left;" data-valign="top" headers="d83641e80 "><code class="codeph">p_border_color</code></td>
<td style="text-align: left;" data-valign="top" headers="d83641e274 d83641e82 ">The color of the borders.</td>
</tr>
</tbody>
</table>

Returns

The print config to style the data export.

Example

```
DECLARE
    l_context         apex_exec.t_context;
    l_print_config    apex_data_export.t_print_config;
    l_export          apex_data_export.t_export;
BEGIN
    l_context := apex_exec.open_query_context(
        p_location    => apex_exec.c_location_local_db,
        p_sql_query   => 'select * from emp' );

    l_print_config := apex_data_export.get_print_config(
        p_orientation     => apex_data_export.c_orientation_portrait,
        p_border_width    => 2 );

    l_export := apex_data_export.export (
        p_context         => l_context,
        p_print_config    => l_print_config,
        p_format          => apex_data_export.c_format_pdf );

    apex_exec.close( l_context );

    apex_data_export.download( p_export => l_export );

EXCEPTION
    when others THEN
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_DATA_EXPORT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_EXPORT.html#GUID-F195C61B-30DA-4462-93A3-465BCA6FCB78)
