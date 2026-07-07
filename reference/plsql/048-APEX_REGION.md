<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 48  APEX_REGION

The `APEX_REGION` package is the public API for handling regions.

- [CLEAR Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CLEAR-Procedure.html#GUID-C28DF0E2-57EE-4656-931E-18D6BE089A4E)
- [EXPORT_DATA Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION-EXPORT_DATA-Function.html#GUID-BB045B2B-AFB9-4060-9E21-5AA6365C3C94)
- [GET_ID Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.GET_ID-Function-Signature-1.html#GUID-AFF48793-6093-4AEB-BA71-7E132D14C8C4)
- [GET_ID Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.GET_ID-Function-Signature-2.html#GUID-96A4DFCF-D448-4515-9F3B-C33C73A0ADD2)
- [IS_READ_ONLY Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION-IS_READ_ONLY-Function.html#GUID-737D7A14-AA73-4B26-B7FD-B4D6935CA372)
- [OPEN_QUERY_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function.html#GUID-BDB9F4B7-D1A7-4C9A-B4C7-45A57AD76427)
- [PURGE_CACHE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/PURGE_CACHE-Procedure-2.html#GUID-9FC1EBE9-C11B-4CB7-9477-F667F9E1021A)
- [RESET Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESET-Procedure.html#GUID-344939F4-6CD7-4599-BB8B-3D673997F2FE)

------------------------------------------------------------------------

## 48.1 CLEAR Procedure

This procedure clears region settings (CR and IR pagination, IR report settings).

For interactive report regions, this procedure clears the following settings: control break, aggregate, flashback, chart, number of rows to display, filter, highlight, computation, and group by. However, it does not clear the following: display column list, sorting, report preference (such as view mode, display nulls in detail view, expand/collapse of report settings).

Syntax

```
APEX_REGION.CLEAR (
    p_application_id  IN  NUMBER DEFAULT apex_application.g_flow_id,
    p_page_id         IN  NUMBER,
    p_region_id       IN  NUMBER,
    p_component_id    IN  NUMBER DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | `ID` of the application where the region is on. |
| `p_page_id` | `ID` of the page where the region is on. |
| `p_region_id` | `ID` of a specific region. |
| `p_component_id` | Region component `ID` to use. For interactive reports, this is the saved report `ID` within the current application page. |

Example

This example clears the given saved report on application `100`, page `1`.

```
BEGIN
     APEX_REGION.CLEAR (
         p_application_id => 100,
         p_page_id        => 1,
         p_region_id      => 2505704029884282,
         p_component_id   => 880629800374638220);
END;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)

------------------------------------------------------------------------

## 48.2 EXPORT_DATA Function

This function exports current region data.

Note:

The `APEX_REGION.EXPORT_DATA` function only supports native regions at this time.

Syntax

```
APEX_REGION.EXPORT_DATA (
    p_format                    IN apex_data_export.t_format,
    --
    p_page_id                   IN NUMBER,
    p_region_id                 IN NUMBER,
    p_component_id              IN NUMBER                           DEFAULT NULL,
    p_view_mode                 IN VARCHAR2                         DEFAULT NULL,
    --
    p_additional_filters        IN apex_exec.t_filters              DEFAULT apex_exec.c_empty_filters,
    --
    p_max_rows                  IN NUMBER                           DEFAULT NULL,
    p_parent_column_values      IN apex_exec.t_parameters           DEFAULT apex_exec.c_empty_parameters,
    --
    p_as_clob                   IN BOOLEAN                          DEFAULT FALSE,
    --
    p_file_name                 IN VARCHAR2                         DEFAULT NULL,
    p_page_size                 IN apex_data_export.t_size          DEFAULT apex_data_export.c_size_letter,
    p_orientation               IN apex_data_export.t_orientation   DEFAULT apex_data_export.c_orientation_portrait,
    p_data_only                 IN BOOLEAN                          DEFAULT FALSE,
    --
    p_pdf_accessible            IN BOOLEAN                          DEFAULT FALSE,
    --
    p_xml_include_declaration   IN BOOLEAN                          DEFAULT TRUE )
    RETURN apex_data_export.t_export;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d227441e74" style="text-align: left;" data-valign="bottom">Parameter</th>
<th id="d227441e76" style="text-align: left;" data-valign="bottom">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d227441e80" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_format</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e80 d227441e76 ">Export format. Use constants <code class="codeph">apex_data_export.c_format_*</code></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e88" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e88 d227441e76 ">ID of the page where the region is on.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e94" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e94 d227441e76 ">Open the query context for this specific region ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e100" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_component_id</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e100 d227441e76 "><p>Region component ID to use.</p>
<p>For Interactive Reports and Interactive Grids, this is the saved report ID within the current application page. For JET charts, use the chart series ID.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e109" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_view_mode</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e109 d227441e76 "><p>The view type available for the report. The values can be:</p>
<ul>
<li><code class="codeph">APEX_IR.C_VIEW_REPORT</code></li>
<li><code class="codeph">APEX_IR.C_VIEW_GROUPBY</code></li>
<li><code class="codeph">APEX_IR.C_VIEW_PIVOT</code></li>
</ul>
<p>If p_view is <code class="codeph">null</code>, it gets the view currently used by the report. If p_view passed which doesn't exist for the current report, an error raises.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e131" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_additional_filters</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e131 d227441e76 ">Additional filters to apply to the context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e137" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_max_rows</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e137 d227441e76 ">Maximum amount of rows to get. Default unlimited.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e143" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_parent_column_values</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e143 d227441e76 ">For the detail grid in an Interactive Grid Master-Detail relationship. Use this parameter to pass in values for the master-detail parent column(s).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e149" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_as_clob</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e149 d227441e76 ">Returns the export contents as a CLOB. Does not work with binary export formats such as PDF and XLSX. Default to <code class="codeph">false</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e158" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_file_name</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e158 d227441e76 ">Defines the filename of the export.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e164" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_page_size</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e164 d227441e76 ">Page size of the report. Use constants <code class="codeph">apex_data_export.c_size_*</code></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e173" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_orientation</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e173 d227441e76 ">Orientation of the report page. Use constants <code class="codeph">apex_data_export.c_orientation_*</code></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e181" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_data_only</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e181 d227441e76 ">Whether to include column groups, control breaks, aggregates, and highlights.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e187" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_pdf_accessible</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e187 d227441e76 ">Whether to include accessibility tags in the PDF. Defaults to <code class="codeph">false</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d227441e196" style="text-align: left;" data-valign="top" headers="d227441e74 "><code class="codeph">p_xml_include_declaration</code></td>
<td style="text-align: left;" data-valign="top" headers="d227441e196 d227441e76 ">Whether to include the XML declaration. Defaults to <code class="codeph">true</code>.</td>
</tr>
</tbody>
</table>

Returns

The export file contents, mime_type, and optionally the report layout.

Examples

Get the export result for a given saved interactive report on page 3 and download as HTML.

```
DECLARE
    l_export       apex_data_export.t_export;
    l_region_id    number;
BEGIN

   SELECT region_id into l_region_id
     FROM apex_application_page_regions
    WHERE application_id = 100
      and page_id = 3
      and static_id = 'classic_report';

    l_export := apex_region.export_data (
         p_format       => apex_data_export.c_format_html,
         p_page_id      => 3,
         p_region_id    => l_region_id );

    apex_data_export.download( l_export );
END;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)

------------------------------------------------------------------------

## 48.3 GET_ID Function Signature 1

This function gets the region ID based on the dom static ID.

Syntax

```
APEX_REGION.GET_ID (
    p_application_id IN NUMBER  DEFAULT apex.g_flow_id,
    p_page_id        IN NUMBER,
    p_dom_static_id  IN VARCHAR2 )
    RETURN NUMBER;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d228176e70" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d228176e72" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d228176e76" style="text-align: left;" data-valign="top" width="42%" headers="d228176e70 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d228176e76 d228176e72 ">ID of the application which contains the region.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228176e82" style="text-align: left;" data-valign="top" width="42%" headers="d228176e70 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d228176e82 d228176e72 ">ID of the page which contains the region.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228176e88" style="text-align: left;" data-valign="top" width="42%" headers="d228176e70 "><code class="codeph">p_dom_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d228176e88 d228176e72 "><p>Static ID of the desired region.</p>
<p>Note:</p>
The <code class="codeph">p_dom_static_id</code> is not unique and raises a <code class="codeph">too_many_rows</code> error if multiple regions exist with the same static ID.
</div></td>
</tr>
</tbody>
</table>

Example

The following example gets the ID of the region whose static ID is "my_apex_region" in app `100` on page `1`.

```
DECLARE
    l_region_id apex_application_page_regions.region_id%type;
BEGIN
    ...
    l_region_id := apex_region.get_id(
                       p_application_id => 100,
                       p_page_id        => 1,
                       p_dom_static_id  => 'my_apex_region' );
    ...
END;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)

------------------------------------------------------------------------

## 48.4 GET_ID Function Signature 2

This function gets the region ID based on the region name.

Syntax

```
APEX_REGION.GET_ID (
    p_application_id IN NUMBER  DEFAULT apex.g_flow_id,
    p_page_id        IN NUMBER,
    p_name           IN VARCHAR2 )
    RETURN NUMBER;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d228412e70" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d228412e72" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d228412e76" style="text-align: left;" data-valign="top" width="42%" headers="d228412e70 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d228412e76 d228412e72 ">ID of the application which contains the region.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228412e82" style="text-align: left;" data-valign="top" width="42%" headers="d228412e70 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d228412e82 d228412e72 ">ID of the page which contains the region.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228412e88" style="text-align: left;" data-valign="top" width="42%" headers="d228412e70 "><code class="codeph">p_name</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d228412e88 d228412e72 "><p>Name of the desired region.</p>
<p>Note:</p>
The <code class="codeph">p_name</code> is not unique and raises a <code class="codeph">too_many_rows</code> error if multiple regions exist with the same region name.
</div></td>
</tr>
</tbody>
</table>

Example

The following example gets the ID of the region whose name is "Test" in app `100` on page `1`.

```
DECLARE
    l_region_id apex_application_page_regions.region_id%type;
BEGIN
    ...
    l_region_id := apex_region.get_id(
                       p_application_id => 100,
                       p_page_id        => 1,
                       p_name           => 'Test' );
    ...
END;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)

------------------------------------------------------------------------

## 48.5 IS_READ_ONLY Function

This function returns `TRUE` if the current region is rendered read-only and `FALSE` if not. If the function is called from a context where no region is currently processed, it returns `NULL`. For example, you can use this function in conditions of a region or its underlying items and buttons.

Syntax

```
FUNCTION IS_READ_ONLY
RETURN BOOLEAN;
```

Parameters

None.

Example

This example returns `TRUE` if the current region is rendered read-only and `FALSE` if the region is not rendered read-only.

```
RETURN APEX_REGION.IS_READ_ONLY;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)

------------------------------------------------------------------------

## 48.6 OPEN_QUERY_CONTEXT Function

This function returns an APEX_EXEC query context returning current region data.

This function runs within an autonomous transaction.

Only native regions are supported at this time.

Syntax

```
APEX_REGION.OPEN_QUERY_CONTEXT (
  p_page_id                IN NUMBER,
  p_region_id              IN NUMBER,
  p_component_id           IN NUMBER    DEFAULT NULL,
  p_view_mode              IN VARCHAR2  DEFAULT NULL,
  --
  p_additional_filters     IN apex_exec.t_filters DEFAULT apex_exec.c_empty_filters,
  p_outer_sql              IN VARCHAR2  DEFAULT NULL,
  --
  p_first_row              IN NUMBER    DEFAULT NULL,
  p_max_rows               IN NUMBER    DEFAULT NULL,
  p_total_row_count        IN BOOLEAN   DEFAULT FALSE,
  p_total_row_count_limit  IN NUMBER    DEFAULT NULL,
  --
  p_parent_column_values IN apex_exec.t_parameters DEFAULT apex_exec.c_empty_parameters )
  RETURN apex_exec.t_context;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d228731e75" style="text-align: left;" data-valign="bottom" width="33%">Parameter</th>
<th id="d228731e77" style="text-align: left;" data-valign="bottom" width="67%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d228731e81" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e81 d228731e77 ">ID of the page where the region is on.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e87" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e87 d228731e77 ">ID of a specific region to open the query context for.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e93" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_component_id</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e93 d228731e77 ">Region component ID to use. For interactive reports and interactive grids this is the saved report ID within the current application page. For JET charts, use the chart series ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e99" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_view_mode</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e99 d228731e77 "><p>The view type available for the report. The values can be <code class="codeph">APEX_IR.C_VIEW_REPORT</code>, <code class="codeph">APEX_IR.C_VIEW_GROUPBY</code>, or <code class="codeph">APEX_IR.C_VIEW_PIVOT</code>.</p>
<p>If <code class="codeph">p_view</code> is null, it gets the view currently used by the report. If the <code class="codeph">p_view</code> passed does not exist for the current report, an error is raised.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e123" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_additional_filters</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e123 d228731e77 ">Additional filters to apply to the context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e129" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_outer_sql</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e129 d228731e77 "><p>Outer SQL query to wrap around the region SQL query. Use <code class="codeph">#APEX$SOURCE_DATA#</code> to reference the region source (<code class="codeph">apex_exec.c_data_source_table_name</code> constant).</p>
<p>If this parameter is specified, then the <code class="codeph">p_columns</code> parameter has no effect. This parameter overrides CHART, GROUP BY or PIVOT views for interactive reports.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e147" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_first_row</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e147 d228731e77 ">Row index to start fetching at. Defaults to 1.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e153" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_max_rows</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e153 d228731e77 ">Maximum amount of rows to get. Default unlimited.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e159" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_total_row_count</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e159 d228731e77 ">Determines whether to retrieve the total row count. Default <code class="codeph">FALSE</code>. If used together with the <code class="codeph">p_outer_sql</code> parameter, you must add the <code class="codeph">APEX$TOTAL_ROW_COUNT</code> column to the select list of the <code class="codeph">p_outer_sql</code> query.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e177" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_total_row_count_limit</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e177 d228731e77 ">Upper limit of rows to process the query on. This applies to interactive report aggregations or ordering. Default is no limit.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d228731e183" style="text-align: left;" data-valign="top" width="33%" headers="d228731e75 "><code class="codeph">p_parent_column_values</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d228731e183 d228731e77 ">For the detail grid in an Interactive Grid Master-Detail relationship. Use this parameter to pass in values for the master-detail parent column(s).</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to get the query context for a given saved interactive report on page 1 and print the data out as JSON.

```
DECLARE
       l_context apex_exec.t_context;
BEGIN
       l_context := apex_region.open_query_context (
              p_page_id => 1,
              p_region_id => 2505704029884282,
              p_component_id => 880629800374638220 );

       apex_json.open_object;
       apex_json.write_context( 'data', l_context );
       apex_json.close_object;
END;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)

------------------------------------------------------------------------

## 48.7 PURGE_CACHE Procedure

This procedure purges the region cache of the specified application, page, and region.

Syntax

```
APEX_REGION.PURGE_CACHE (
    p_application_id       IN NUMBER DEFAULT apex.g_flow_id,
    p_page_id              IN NUMBER DEFAULT NULL,
    p_region_id            IN NUMBER DEFAULT NULL,
    p_current_session_only IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | `ID` of the application where the region caches should be purged. Defaults to the current application. |
| `p_page_id` | `ID` of the page where the region caches should be purged. If no value is specified (default), all regions of the application are purged. |
| `p_region_id` | ID of a specific region on a page. If no value is specified, all regions of the specified page are purged. |
| `p_current_session_only` | Specify true if you only want to purge entries that where saved for the current session. Defaults to `FALSE`. |

Example

This example purges session specific region cache for the whole application.

```
BEGIN
     APEX_REGION.PURGE_CACHE (
         p_current_session_only => true );
END;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)

------------------------------------------------------------------------

## 48.8 RESET Procedure

This procedure resets region settings (such as classic report and interactive report pagination, classic report sort, interactive report and interactive grid report settings, and Region Display Selector tab selection). Only report and Region Display Selector regions are supported at this time.

Syntax

```
APEX_REGION.RESET (
    p_application_id  IN  NUMBER  DEFAULT apex_application.g_flow_id,
    p_page_id         IN  NUMBER,
    p_region_id       IN  NUMBER,
    p_component_id    IN  NUMBER  DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | `ID` of the application where the region is on. |
| `p_page_id` | `ID` of the page where the region is on. |
| `p_region_id` | `ID` of a specific region. |
| `p_component_id` | Region component `ID` to use. For interactive reports and interactive grids, this is the saved report `ID` within the current application page. |

Example

This example resets the given saved report on application 100, page 1.

```
BEGIN
     APEX_REGION.RESET (
         p_application_id => 100,
         p_page_id        => 1,
         p_region_id      => 2505704029884282,
         p_component_id   => 880629800374638220);
END;
```

**Parent topic:** [APEX_REGION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION.html#GUID-63EFEB48-D5B9-42F6-9313-85C3984D42B8)
