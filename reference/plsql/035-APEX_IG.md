<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 35 APEX_IG

The `APEX_IG` package provides utilities you can use when programming in the Oracle APEX environment related to interactive grids. You can use the `APEX_IG` package to add filters, reset or clear report settings, delete saved reports and change report owners.

- [ADD_FILTER Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-1.html#GUID-D5FAE02F-085E-43AD-893B-C94B37D0AD2C)
- [ADD_FILTER Procedure Signature 2 (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-2.html#GUID-87616437-2B08-40BC-BBF9-FC8C40D49B2A)
- [ADD_FILTER Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-3.html#GUID-96535F0F-F84E-470C-83C3-C8619C973EBC)
- [CHANGE_REPORT_OWNER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CHANGE_REPORT_OWNER-Procedure.html#GUID-C387B0CC-60A2-4321-83FD-28FCAA3F5E80)
- [CLEAR_REPORT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-1.html#GUID-38888BFE-A309-4C9D-94E8-A35310537BB2)
- [CLEAR_REPORT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-2.html#GUID-2C5E4EFF-290B-4559-8D29-AF7CF0D9F14C)
- [CLEAR_REPORT Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-3.html#GUID-3579D939-7BD7-47AF-A741-35B1910CFC3A)
- [DELETE_REPORT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-DELETE_REPORT-Procedure.html#GUID-0A936C75-222B-4D24-8675-1B9C742084AD)
- [GET_LAST_VIEWED_REPORT_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-GET_LAST_VIEWED_REPORT_ID-Function-Signature-1.html#GUID-5A054177-027B-493D-9597-075C4945924F)
- [RESET_REPORT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-RESET_REPORT-Procedure-Signature-1.html#GUID-584E0A60-501A-4A56-98A6-BC63F0815E82)
- [RESET_REPORT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-RESET_REPORT-Procedure-Signature-2.html#GUID-548B0C16-3B00-4E66-A32B-A5167ADECD3B)
- [RESET_REPORT Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-RESET_REPORT-Procedure-Signature-3.html#GUID-D3C8B5EE-9BCC-4D0B-BE88-FCE31053C781)

------------------------------------------------------------------------

## 35.1 ADD_FILTER Procedure Signature 1

This procedure creates a filter on an interactive grid using a report ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive grid reloads the page with download format in the `REQUEST` value. Any interactive grid settings changes (such as add filter or reset report) are done in an Ajax request. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IG.ADD_FILTER (
    p_page_id           IN NUMBER,
    p_region_id         IN NUMBER,
    p_filter_value      IN VARCHAR2,
    p_column_name       IN VARCHAR2 DEFAULT NULL,
    p_operator_abbr     IN VARCHAR2 DEFAULT NULL,
    p_is_case_sensitive IN BOOLEAN  DEFAULT FALSE,
    p_report_id         IN NUMBER   DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d172149e80" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d172149e82" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d172149e86" style="text-align: left;" data-valign="top" width="31%" headers="d172149e80 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172149e86 d172149e82 ">Page of the current Oracle APEX application that contains an interactive grid.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172149e95" style="text-align: left;" data-valign="top" width="31%" headers="d172149e80 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172149e95 d172149e82 ">The interactive grid region (ID).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172149e101" style="text-align: left;" data-valign="top" width="31%" headers="d172149e80 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172149e101 d172149e82 ">The filter value. This value is not used for operator <code class="codeph">N</code> and <code class="codeph">NN</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172149e113" style="text-align: left;" data-valign="top" width="31%" headers="d172149e80 "><code class="codeph">p_column_name</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172149e113 d172149e82 ">Name of the report SQL column, or column alias, to be filtered.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172149e119" style="text-align: left;" data-valign="top" width="31%" headers="d172149e80 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172149e119 d172149e82 "><p>Filter type. Valid values are as follows:</p>
<p><code class="codeph">EQ</code> = Equals</p>
<p><code class="codeph">NEQ</code> = Not Equals</p>
<p><code class="codeph">LT</code> = Less than</p>
<p><code class="codeph">LTE</code> = Less than or equal to</p>
<p><code class="codeph">GT</code> = Greater Than</p>
<p><code class="codeph">GTE</code> = Greater than or equal to</p>
<p><code class="codeph">N</code> = Null</p>
<p><code class="codeph">NN</code> = Not Null</p>
<p><code class="codeph">C</code> = Contains</p>
<p><code class="codeph">NC</code> = Not Contains</p>
<p><code class="codeph">IN</code> = SQL In Operator</p>
<p><code class="codeph">NIN</code> = SQL Not In Operator</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172149e175" style="text-align: left;" data-valign="top" width="31%" headers="d172149e80 "><code class="codeph">p_is_case_sensitive</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172149e175 d172149e82 "><p>Case sensitivity of the row search filter. This value is not used for a column filter, where <code class="codeph">p_report_column</code> is set. Valid values are as follows:</p>
<ul>
<li><code class="codeph">TRUE</code></li>
<li><code class="codeph">FALSE</code> (This is the default value.)</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172149e193" style="text-align: left;" data-valign="top" width="31%" headers="d172149e80 "><code class="codeph">p_report_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172149e193 d172149e82 ">The saved report ID within the current application page. If <code class="codeph">p_report_id</code> is NULL, it adds the filter to the last viewed report settings.</td>
</tr>
</tbody>
</table>

Example 1

The following example shows how to use the `ADD_FILTER` procedure to filter the interactive grid with report ID of `901029800374639010` in page 1, region `3335704029884222` of the current application with `DEPTNO` equals `30`

```
BEGIN
    APEX_IG.ADD_FILTER(
        p_page_id           => 1,
        p_region_id         => 3335704029884222,
        p_filter_value      => '30',
        p_column_name       => 'DEPTNO',
        p_operator_abbr     => 'EQ',
        p_report_id         => 901029800374639010);
END;
```

Example 2

The following example shows how to use the `ADD_FILTER` procedure to filter the interactive grid with report ID of `901029800374639010` in page 1, region `3335704029884222` of the current application with rows containing the case-sensitive word `Salary`.

```
BEGIN
    APEX_IG.ADD_FILTER(
        p_page_id           => 1,
        p_region_id         => 3335704029884222,
        p_filter_value      => 'Salary',
        p_is_case_sensitive => true,
        p_report_id         => 901029800374639010);
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.2 ADD_FILTER Procedure Signature 2 (Deprecated)

This procedure creates a filter on an interactive grid using a report name.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive grid reloads the page with download format in the `REQUEST` value. Any interactive grid settings changes (such as add filter or reset report) are done in an Ajax request. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Note:

This API is deprecated and will be removed in a future release.

Use [ADD_FILTER Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-ADD_FILTER-Procedure-Signature-3.html#GUID-96535F0F-F84E-470C-83C3-C8619C973EBC) instead.

Syntax

```
APEX_IG.ADD_FILTER (
    p_page_id           IN NUMBER,
    p_region_id         IN NUMBER,
    p_filter_value      IN VARCHAR2,
    p_column_name       IN VARCHAR2 DEFAULT NULL,
    p_operator_abbr     IN VARCHAR2 DEFAULT NULL,
    p_is_case_sensitive IN BOOLEAN  DEFAULT FALSE,
    p_report_name       IN VARCHAR2 DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d172667e86" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d172667e88" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d172667e92" style="text-align: left;" data-valign="top" width="31%" headers="d172667e86 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172667e92 d172667e88 ">Page of the current Oracle APEX application that contains an interactive grid.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172667e101" style="text-align: left;" data-valign="top" width="31%" headers="d172667e86 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172667e101 d172667e88 ">The interactive grid region (ID).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172667e107" style="text-align: left;" data-valign="top" width="31%" headers="d172667e86 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172667e107 d172667e88 ">This is the filter value. This value is not used for <code class="codeph">N</code> and <code class="codeph">NN</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172667e119" style="text-align: left;" data-valign="top" width="31%" headers="d172667e86 "><code class="codeph">p_column_name</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172667e119 d172667e88 ">Name of the report SQL column, or column alias, to be filtered.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172667e125" style="text-align: left;" data-valign="top" width="31%" headers="d172667e86 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172667e125 d172667e88 "><p>Filter type. Valid values are as follows:</p>
<p><code class="codeph">EQ</code> = Equals</p>
<p><code class="codeph">NEQ</code> = Not Equals</p>
<p><code class="codeph">LT</code> = Less than</p>
<p><code class="codeph">LTE</code> = Less than or equal to</p>
<p><code class="codeph">GT</code> = Greater Than</p>
<p><code class="codeph">GTE</code> = Greater than or equal to</p>
<p><code class="codeph">N</code> = Null</p>
<p><code class="codeph">NN</code> = Not Null</p>
<p><code class="codeph">C</code> = Contains</p>
<p><code class="codeph">NC</code> = Not Contains</p>
<p><code class="codeph">IN</code> = SQL In Operator</p>
<p><code class="codeph">NIN</code> = SQL Not In Operator</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172667e181" style="text-align: left;" data-valign="top" width="31%" headers="d172667e86 "><code class="codeph">p_is_case_sensitive</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172667e181 d172667e88 "><div class="p">
Case sensitivity of the row search filter. This value is not used for a column filter, where <code class="codeph">p_report_column </code>is set. Valid values are as follows:
<ul>
<li><code class="codeph">TRUE</code></li>
<li><code class="codeph">FALSE</code> (This is the default value.)</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172667e199" style="text-align: left;" data-valign="top" width="31%" headers="d172667e86 ">p_report_name</td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d172667e199 d172667e88 ">The saved report name within the current application page. If <code class="codeph">p_report_name</code> is NULL, it adds the filter to the last viewed report settings.</td>
</tr>
</tbody>
</table>

Example 1

The following example shows how to use the `ADD_FILTER` procedure to filter the interactive grid with report name of `Statistics` in page 1, region `3335704029884222` of the current application with `DEPTNO` equals `30`.

```
BEGIN
    APEX_IG.ADD_FILTER(
        p_page_id           => 1,
        p_region_id         => 3335704029884222,
        p_filter_value      => '30',
        p_column_name       => 'DEPTNO',
        p_operator_abbr     => 'EQ',
        p_report_name       => 'Statistics');
END;
```

Example 2

The following example shows how to use the `ADD_FILTER` procedure to filter the interactive grid with report name of `Statistics` in page 1, region `3335704029884222` of the current application with rows containing the case-sensitive word `Salary`.

```
BEGIN
    APEX_IG.ADD_FILTER(
        p_page_id           => 1,
        p_region_id         => 3335704029884222,
        p_filter_value      => 'Salary',
        p_is_case_sensitive => true,
        p_report_name       => 'Statistics');
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.3 ADD_FILTER Procedure Signature 3

This procedure creates a filter on an interactive grid using a report Static ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive grid reloads the page with download format in the `REQUEST` value. Any interactive grid settings changes (such as add filter or reset report) are done in an Ajax request. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IG.ADD_FILTER (
    p_page_id                IN   NUMBER,
    p_region_static_id       IN   VARCHAR2,
    p_filter_value           IN   VARCHAR2,
    p_column_name            IN   VARCHAR2     DEFAULT NULL,
    p_operator_abbr          IN   VARCHAR2     DEFAULT NULL,
    p_is_case_sensitive      IN   BOOLEAN      DEFAULT FALSE,
    p_report_static_id       IN   VARCHAR2     DEFAULT NULL,
    p_multi_value_separator  IN   VARCHAR2     DEFAULT NULL );

```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d173196e79" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d173196e81" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d173196e85" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e85 d173196e81 ">Page of the current Oracle APEX application that contains an interactive grid.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173196e94" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_region_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e94 d173196e81 ">The interactive grid region Static ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173196e100" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e100 d173196e81 ">This is the filter value. This value is not used for <code class="codeph">N</code> and <code class="codeph">NN</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173196e112" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_column_name</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e112 d173196e81 ">Name of the report SQL column, or column alias, to be filtered. When not set, a row filter is defined.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173196e118" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e118 d173196e81 ">The filter type to use for the column filter. Valid values are:
<ul>
<li><code class="codeph">EQ</code> = Equals</li>
<li><code class="codeph">NEQ</code> = Not Equals</li>
<li><code class="codeph">GT</code> = Greater Than</li>
<li><code class="codeph">GTE</code> = Greater than or equal to</li>
<li><code class="codeph">LT</code> = Less than</li>
<li><code class="codeph">LTE</code> = Less than or equal to</li>
<li><code class="codeph">N</code> = Null</li>
<li><code class="codeph">NN</code> = Not Null</li>
<li><code class="codeph">C</code> = Contains</li>
<li><code class="codeph">NC</code> = Not Contains</li>
<li><code class="codeph">IN</code> = SQL In Operator</li>
<li><code class="codeph">NIN</code> = SQL Not In Operator</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173196e174" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_is_case_sensitive</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e174 d173196e81 ">Case sensitivity of the row search filter. This value is not used for a column filter, where <code class="codeph">p_report_column</code> is set. Valid values are as follows:
<ul>
<li><code class="codeph">TRUE</code></li>
<li><code class="codeph">FALSE</code> (This is the default value.)</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173196e191" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_report_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e191 d173196e81 ">The saved static ID within the current application page. If <code class="codeph">p_report_static_id</code> is NULL, it adds the filter to the last viewed report settings.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173196e200" style="text-align: left;" data-valign="top" width="31%" headers="d173196e79 "><code class="codeph">p_multi_value_separator</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173196e200 d173196e81 ">Separator for multi-value filters (<code class="codeph">IN</code>/<code class="codeph">NIN</code> operators).</td>
</tr>
</tbody>
</table>

Example 1

The following example shows how to use the `ADD_FILTER` procedure to filter the interactive grid with report Static ID `statistics` in page 1, region Static ID `analysis` of the current application with `DEPTNO` equals `30`.

```
BEGIN
    APEX_IG.ADD_FILTER(
        p_page_id           => 1,
        p_region_static_id  => 'analysis',
        p_filter_value      => '30',
        p_column_name       => 'DEPTNO',
        p_operator_abbr     => 'EQ',
        p_report_static_id  => 'statistics' );
END;
```

Example 2

The following example shows how to use the `ADD_FILTER` procedure to filter the interactive grid with report Static ID of `statistics` in page 1, region Static ID `analysis` of the current application with rows containing the case-sensitive word `Salary`.

```
BEGIN
    APEX_IG.ADD_FILTER(
        p_page_id           => 1,
        p_region_static_id  => 'analysis',
        p_filter_value      => 'Salary',
        p_is_case_sensitive => true,
        p_report_static_id  => 'statistics' );
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.4 CHANGE_REPORT_OWNER Procedure

This procedure changes the owner of a saved interactive grid report using a report ID. This procedure cannot change the owner of default interactive grid report.

Syntax

```
APEX_IG.CHANGE_REPORT_OWNER (
    p_application_id IN NUMBER DEFAULT apex_application.g_flow_id,
    p_report_id      IN NUMBER,
    p_old_owner      IN VARCHAR2,
    p_new_owner      IN VARCHAR2 )
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_application_id` | The application ID containing the interactive grid. If `p_application_id` is NULL, it defaults to the application ID in `apex_application.g_flow_id`. |
| `p_report_id` | The saved report ID within the current application page. |
| `p_old_owner` | The previous owner name to change from (case-sensitive). The owner needs to be a valid login user accessing the report. |
| `p_new_owner` | The new owner name to change to (case-sensitive). The owner must be a valid login user accessing the report. |

Example

This example shows how to use `CHANGE_REPORT_OWNER` procedure to change the old owner name of JOHN to the new owner name of JOHN.DOE for a saved report. The saved report has a report ID of `1235704029884282` and resides in the application with ID `100`.

```
BEGIN
    APEX_IG.CHANGE_REPORT_OWNER (
        P_application_id => 100,
        p_report_id      => 1235704029884282,
        p_old_owner      => 'JOHN',
        p_new_owner      => 'JOHN.DOE');
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.5 CLEAR_REPORT Procedure Signature 1

This procedure clears report filter settings to the developer defined default settings using the report ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive grid reloads the page with download format in the REQUEST value. Any interactive grid settings changes (such as add filter or reset report) are done in an Ajax request. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IG.CLEAR_REPORT (
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER,
    p_report_id IN NUMBER DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_id` | The interactive grid region ID. |
| `p_report_id` | The saved report ID within the current application page. If `p_report_id` is NULL, it clears the last viewed report settings. |

Example

The following example shows how to use the `CLEAR_REPORT` procedure signature 1 to reset interactive grid filter settings with report ID of `901029800374639010` in page 1, region `3335704029884222` of the current application.

```
BEGIN
    APEX_IG.CLEAR_REPORT(
        p_page_id      => 1,
        p_region_id    => 3335704029884222,
        p_report_id    => 901029800374639010);
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.6 CLEAR_REPORT Procedure Signature 2

This procedure clears filter report settings to the developer defined default settings using the report name.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive grid reloads the page with download format in the REQUEST value. Any interactive grid settings changes (such as add filter or reset report) are done in an Ajax request. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IG.CLEAR_REPORT (
    p_page_id     IN NUMBER,
    p_region_id   IN NUMBER,
    p_report_name IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_id` | The interactive grid region (ID). |
| `p_report_name` | The saved report name within the current application page. If `p_report_name` is NULL, it clears the last viewed report settings. |

Example

The following example shows how to use the `CLEAR_REPORT` procedure signature 2 to reset interactive grid filter settings with report name of `Statistics` in page 1, region `3335704029884222` of the current application.

```
BEGIN
    APEX_IG.CLEAR_REPORT(
        p_page_id      => 1,
        p_region_id    => 3335704029884222,
        p_report_name  => 'Statistics');
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.7 CLEAR_REPORT Procedure Signature 3

This procedure clears filter report settings to the developer defined default settings using the report static ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive grid reloads the page with download format in the REQUEST value. Any interactive grid settings changes (such as add filter or reset report) are done in an Ajax request. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IG.CLEAR_REPORT (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | The page of the current Oracle APEX application that contains the interactive grid. |
| `p_region_static_id` | The interactive grid region static ID. |
| `p_report_static_id` | The saved report static ID within the current application page. If `p_report_static_id` is NULL, it clears the last viewed report settings. |

Example

The following example shows how to use the `CLEAR_REPORT` procedure to reset interactive grid filter settings with report static ID of `statistics` in page 1 and region static ID `analysis` of the current application.

```
BEGIN
    APEX_IG.CLEAR_REPORT(
        p_page_id             => 1,
        p_region_static_id    => 'analysis',
        p_report_static_id    => 'statistics');
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.8 DELETE_REPORT Procedure

This procedure deletes a saved interactive grid report. It deletes a specific saved report in the current logged in workspace and application.

Syntax

```
APEX_IG.DELETE_REPORT (
    p_application_id IN NUMBER DEFAULT apex_application.g_flow_id,
    p_report_id      IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID containing the interactive grid. If `p_application_id` is NULL, it defaults to the application ID in `apex_application.g_flow_id`. |
| `p_report_id` | Report ID to delete within the current Oracle APEX application. |

Example

The following example shows how to use the `DELETE_REPORT` procedure to delete the saved interactive grid report with ID of `901029800374639010` in application ID `100`.

```
BEGIN
    APEX_IG.DELETE_REPORT (
        P_application_id => 100,
        p_report_id      => 901029800374639010);
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.9 GET_LAST_VIEWED_REPORT_ID Function

This function returns the last viewed base report ID of the specified page and region.

Syntax

```
APEX_IG.GET_LAST_VIEWED_REPORT_ID (
    p_page_id   IN NUMBER,
    p_region_id IN VARCHAR2 )
    RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_id` | The interactive grid region static ID or region ID. |

Example

The following example shows how to use the `GET_LAST_VIEWED_REPORT_ID` function to retrieve the last viewed report ID in page 1, region Static ID `analysis` of the current application.

```
DECLARE
    l_report_id number;
BEGIN
    l_report_id := APEX_IG.GET_LAST_VIEWED_REPORT_ID (
        p_page_id          => 1,
        p_region_id => 'analysis' );
    sys.htp.p('Last Viewed Report ID = ' || l_report_id);
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.10 RESET_REPORT Procedure Signature 1

This procedure resets report settings to the developer defined default settings using the report ID.

Syntax

```
APEX_IG.RESET_REPORT (
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER,
    p_report_id IN NUMBER DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_id` | The interactive grid region ID. |
| `p_report_name` | The saved report name within the current application page. If `p_report_id` is NULL, it resets the last viewed report settings. |

Example

The following example shows how to use the `RESET_REPORT` procedure signature 1 to reset interactive grid settings with report ID of `901029800374639010` in page 1, region `3335704029884222` of the current application.

```
BEGIN
    APEX_IG.RESET_REPORT(
        p_page_id      => 1,
        p_region_id    => 3335704029884222,
        p_report_id    => 901029800374639010);
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.11 RESET_REPORT Procedure Signature 2

This procedure resets report settings to the developer defined default settings using the report name.

Syntax

```
APEX_IG.RESET_REPORT (
    p_page_id     IN NUMBER,
    p_region_id   IN NUMBER,
    p_report_name IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_id` | The interactive grid region ID. |
| `p_report_name` | The saved report name within the current application page. If `p_report_name` is NULL, it resets the last viewed report settings. |

Example

The following example shows how to use the `RESET_REPORT` procedure signature 2 to reset interactive grid settings with report name of `Statistics` in page 1, region `3335704029884222` of the current application.

```
BEGIN
    APEX_IG.RESET_REPORT(
        p_page_id      => 1,
        p_region_id    => 3335704029884222,
        p_report_name  => 'Statistics' );
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)

------------------------------------------------------------------------

## 35.12 RESET_REPORT Procedure Signature 3

This procedure resets report settings to the developer defined default settings using the report Static ID.

Syntax

```
APEX_IG.RESET_REPORT (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_static_id` | The interactive grid region Static ID. |
| `p_report_static_id` | The saved interactive grid report Static ID within the current application page. If `p_report_static_id` is NULL, it resets the last viewed report's settings. |

Example

The following example shows how to use the `RESET_REPORT` procedure to reset interactive grid settings with report Static ID of `statistics` in page 1 and region Static ID `analysis` of the current application.

```
BEGIN
    APEX_IG.RESET_REPORT(
        p_page_id          =>1,
        p_region_static_id =>'analysis',
        p_report_static_id =>'statistics');
END;
```

**Parent topic:** [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)
