<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 36  APEX_IR

The `APEX_IR` package provides utilities you can use when programming in the Oracle APEX environment related to interactive reports. You can use the `APEX_IR` package to get an interactive report runtime query based on local and remote data source, add filters, reset or clear report settings, delete saved reports and manage subscriptions.

- [Constants and Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.Constants-Data-Types.html#GUID-F15F9992-0524-483E-818C-D56E71AFF096)
- [ADD_FILTER Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILTER-Procedure-Signature-1.html#GUID-3BEF6280-0BEE-47B2-9067-B607E0D822A0)
- [ADD_FILTER Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILTER-Procedure-Signature-2.html#GUID-6C8D1168-6735-4FDE-AC01-907C8F528062)
- [ADD_FILTER Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILTER-Procedure-Signature-3.html#GUID-8E1C4271-E1D7-4819-BD6A-21D6ECAB2F9E)
- [CHANGE_REPORT_OWNER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_REPORT_OWNER-Procedure.html#GUID-B1CF8F7A-3E1B-4DCB-9480-0704A4478ABF)
- [CHANGE_SUBSCRIPTION_EMAIL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_SUBSCRIPTION_EMAIL-Procedure.html#GUID-65C114DF-EBCF-416E-BBD7-45A4ECFF70E2)
- [CHANGE_SUBSCRIPTION_LANG Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_SUBSCRIPTION_LANG-Procedure.html#GUID-5133EC62-EB99-434B-81ED-E70055B7198B)
- [CLEAR_REPORT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REPORT-Procedure-Signature-1.html#GUID-4185B596-36FE-4F63-BFDA-7A066A253698)
- [CLEAR_REPORT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REPORT-Procedure-Signature-2.html#GUID-A8D7FCA4-C4EE-4473-AF90-71E7C137D04E)
- [CLEAR_REPORT Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REPORT-Procedure-Signature-3.html#GUID-18ED8C9D-1AEF-42CB-A897-5F43DEDDF46F)
- [CLONE_REPORT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLONE_REPORT-Function.html#GUID-FE2CA1AF-0798-41D4-9CD6-0EC62950A1CF)
- [DELETE_REPORT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_REPORT-Procedure.html#GUID-6383F027-BB39-450C-91FC-9B89175E3481)
- [DELETE_SUBSCRIPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SUBSCRIPTION-Procedure.html#GUID-D0C11FBE-7A85-44B2-A759-80313F6AD534)
- [EXPORT_SAVED_REPORTS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/EXPORT_SAVED_REPORTS-Function.html#GUID-9388CE03-9EB2-4991-BF04-3B41DAAC3C9C)
- [GET_LAST_VIEWED_REPORT_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_VIEWED_REPORT_ID-Function-Signature-1.html#GUID-656AE33C-719D-4943-8B9D-33CBDDF2B740)
- [GET_REPORT Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REPORT-Function.html#GUID-7F8F7BC9-3A97-46C8-BF8D-4984DDBD7325)
- [IMPORT_SAVED_REPORTS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IMPORT_SAVED_REPORTS-Procedure.html#GUID-A1085F96-1C34-4F35-AA99-5B047139804C)
- [RESET_REPORT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-1.html#GUID-DB90E012-0DDC-4DC6-A330-295285C0F44D)
- [RESET_REPORT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-2.html#GUID-0AD09A7C-AB05-4B7F-8BE0-D845D4E613F4)
- [RESET_REPORT Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_REPORT-Procedure-Signature-3.html#GUID-86F5A943-BEF2-4E46-8478-C04FCAF5C704)

------------------------------------------------------------------------

## 36.1 Constants and Data Types

Constants

The APEX_IR package uses the following constants.

```
c_view_report       constant VARCHAR2(20) := 'REPORT';
c_view_groupby      constant varchar2(20) := 'GROUP_BY';
c_view_pivot        constant varchar2(20) := 'PIVOT';
```

Data Types

The APEX_IR package uses the following data types.

```
type t_report is record(
    sql_query   varchar2(32767),
    binds       apex_plugin_util.t_bind_list)
);
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.2 ADD_FILTER Procedure Signature 1

This procedure creates a filter on an interactive report using a report ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.ADD_FILTER (
    p_page_id       IN NUMBER,
    p_region_id     IN NUMBER,
    p_report_column IN VARCHAR2,
    p_filter_value  IN VARCHAR2,
    p_operator_abbr IN VARCHAR2 DEFAULT NULL,
    p_report_id     IN NUMBER   DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d175989e76" style="text-align: left;" data-valign="bottom" width="22%">Parameter</th>
<th id="d175989e78" style="text-align: left;" data-valign="bottom" width="78%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d175989e82" style="text-align: left;" data-valign="top" width="22%" headers="d175989e76 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d175989e82 d175989e78 ">Page of the current Oracle APEX application that contains an interactive report.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d175989e91" style="text-align: left;" data-valign="top" width="22%" headers="d175989e76 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d175989e91 d175989e78 ">The interactive report region (ID).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d175989e97" style="text-align: left;" data-valign="top" width="22%" headers="d175989e76 "><code class="codeph">p_report_column</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d175989e97 d175989e78 ">Name of the report SQL column, or column alias, to be filtered.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d175989e103" style="text-align: left;" data-valign="top" width="22%" headers="d175989e76 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d175989e103 d175989e78 "><p>The filter value. This value is not used for <code class="codeph">N</code> and <code class="codeph">NN</code>.</p>
<p>Enter multiple valuables in a comma-separated list. Enclose multiple filter values separated by commas in backslash characters (<code class="codeph">\</code>). For example, if the <code class="codeph">p_operator_abbr</code> is type <code class="codeph">IN</code> or <code class="codeph">NIN</code>, and you wish to filter for the values <code class="codeph">CLOSED</code> and <code class="codeph">OPEN</code>, then set <code class="codeph">p_filter_value</code> to <code class="codeph">\CLOSED,OPEN\</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d175989e143" style="text-align: left;" data-valign="top" width="22%" headers="d175989e76 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d175989e143 d175989e78 "><p>Filter type. Valid values are as follows:</p>
<p><code class="codeph">EQ</code> = Equals</p>
<p><code class="codeph">NEQ</code> = Not Equals</p>
<p><code class="codeph">LT</code> = Less than</p>
<p><code class="codeph">LTE</code> = Less then or equal to</p>
<p><code class="codeph">GT</code> = Greater Than</p>
<p><code class="codeph">GTE</code> = Greater than or equal to</p>
<p><code class="codeph">LIKE</code> = SQL Like operator</p>
<p><code class="codeph">NLIKE</code> = Not Like</p>
<p><code class="codeph">N</code> = Null</p>
<p><code class="codeph">NN</code> = Not Null</p>
<p><code class="codeph">C</code> = Contains</p>
<p><code class="codeph">NC</code> = Not Contains</p>
<p><code class="codeph">IN</code> = SQL In Operator</p>
<p><code class="codeph">NIN</code> = SQL Not In Operator</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d175989e207" style="text-align: left;" data-valign="top" width="22%" headers="d175989e76 "><code class="codeph">p_report_id</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d175989e207 d175989e78 ">The saved report ID within the current application page. If <code class="codeph">p_report_id</code> is NULL, it adds the filter to the last viewed report settings.</td>
</tr>
</tbody>
</table>

Example

The following example shows how to use the `ADD_FILTER` procedure to filter the interactive report with report ID of `880629800374638220` in page 1, region `2505704029884282` of the current application with `DEPTNO` equals `30`.

```
BEGIN
    APEX_IR.ADD_FILTER(
        p_page_id       => 1,
        p_region_id     => 2505704029884282,
        p_report_column => 'DEPTNO',
        p_filter_value  => '30',
        p_operator_abbr => 'EQ',
        p_report_id     => 880629800374638220);
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.3 ADD_FILTER Procedure Signature 2

This procedure creates a filter on an interactive report using a report alias.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.ADD_FILTER (
    p_page_id       IN NUMBER,
    p_region_id     IN NUMBER,
    p_report_column IN VARCHAR2,
    p_filter_value  IN VARCHAR2,
    p_operator_abbr IN VARCHAR2 DEFAULT NULL,
    p_report_alias  IN VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d176466e76" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d176466e78" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d176466e82" style="text-align: left;" data-valign="top" width="31%" headers="d176466e76 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176466e82 d176466e78 ">Page of the current Oracle APEX application that contains an interactive report.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176466e91" style="text-align: left;" data-valign="top" width="31%" headers="d176466e76 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176466e91 d176466e78 ">The interactive report region (ID).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176466e97" style="text-align: left;" data-valign="top" width="31%" headers="d176466e76 "><code class="codeph">p_report_column</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176466e97 d176466e78 ">Name of the report SQL column, or column alias, to be filtered.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176466e103" style="text-align: left;" data-valign="top" width="31%" headers="d176466e76 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176466e103 d176466e78 ">This is the filter value. This value is not used for <code class="codeph">N</code> and <code class="codeph">NN</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176466e115" style="text-align: left;" data-valign="top" width="31%" headers="d176466e76 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176466e115 d176466e78 "><p>Filter type. Valid values are as follows:</p>
<p><code class="codeph">EQ</code> = Equals</p>
<p><code class="codeph">NEQ</code> = Not Equals</p>
<p><code class="codeph">LT</code> = Less than</p>
<p><code class="codeph">LTE</code> = Less then or equal to</p>
<p><code class="codeph">GT</code> = Greater Than</p>
<p><code class="codeph">GTE</code> = Greater than or equal to</p>
<p><code class="codeph">LIKE</code> = SQL Like operator</p>
<p><code class="codeph">NLIKE</code> = Not Like</p>
<p><code class="codeph">N</code> = Null</p>
<p><code class="codeph">NN</code> = Not Null</p>
<p><code class="codeph">C</code> = Contains</p>
<p><code class="codeph">NC</code> = Not Contains</p>
<p><code class="codeph">IN</code> = SQL In Operator</p>
<p><code class="codeph">NIN</code> = SQL Not In Operator</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176466e180" style="text-align: left;" data-valign="top" width="31%" headers="d176466e76 "><code class="codeph">p_report_alias</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176466e180 d176466e78 ">The saved report alias within the current application page. If <code class="codeph">p_report_alias</code> is NULL, it adds filter to the last viewed report settings.</td>
</tr>
</tbody>
</table>

Example

The following example shows how to use the `ADD_FILTER` procedure to filter an interactive report with a report alias of `CATEGORY_REPORT` in page 1, region `2505704029884282` of the current application with `DEPTNO` equals `30`.

```
BEGIN
    APEX_IR.ADD_FILTER(
        p_page_id       => 1,
        p_region_id     => 2505704029884282,
        p_report_column => 'DEPTNO',
        p_filter_value  => '30',
        p_operator_abbr => 'EQ',
        p_report_alias  => 'CATEGORY_REPORT');
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.4 ADD_FILTER Procedure Signature 3

This procedure creates a filter on an interactive report using a report Static ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.ADD_FILTER (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_column      IN   VARCHAR2,
    p_filter_value       IN   VARCHAR2,
    p_operator_abbr      IN   VARCHAR2     DEFAULT NULL,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d176913e76" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d176913e78" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d176913e82" style="text-align: left;" data-valign="top" width="31%" headers="d176913e76 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176913e82 d176913e78 ">Page of the current Oracle APEX application that contains an interactive report.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176913e91" style="text-align: left;" data-valign="top" width="31%" headers="d176913e76 "><code class="codeph">p_region_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176913e91 d176913e78 ">The interactive report region Static ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176913e97" style="text-align: left;" data-valign="top" width="31%" headers="d176913e76 "><code class="codeph">p_report_column</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176913e97 d176913e78 ">Name of the report SQL column, or column alias, to be filtered.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176913e103" style="text-align: left;" data-valign="top" width="31%" headers="d176913e76 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176913e103 d176913e78 ">This is the filter value. This value is not used for <code class="codeph">N</code> and <code class="codeph">NN</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176913e115" style="text-align: left;" data-valign="top" width="31%" headers="d176913e76 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176913e115 d176913e78 ">Filter type. Valid values are as follows:
<ul>
<li><code class="codeph">EQ</code> = Equals</li>
<li><code class="codeph">NEQ</code> = Not Equals</li>
<li><code class="codeph">LT</code> = Less than</li>
<li><code class="codeph">LTE</code> = Less then or equal to</li>
<li><code class="codeph">GT</code> = Greater Than</li>
<li><code class="codeph">GTE</code> = Greater than or equal to</li>
<li><code class="codeph">LIKE</code> = SQL Like operator</li>
<li><code class="codeph">NLIKE</code> = Not Like</li>
<li><code class="codeph">N</code> = Null</li>
<li><code class="codeph">NN</code> = Not Null</li>
<li><code class="codeph">C</code> = Contains</li>
<li><code class="codeph">NC</code> = Not Contains</li>
<li><code class="codeph">IN</code> = SQL In Operator</li>
<li><code class="codeph">NIN</code> = SQL Not In Operator</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d176913e180" style="text-align: left;" data-valign="top" width="31%" headers="d176913e76 "><code class="codeph">p_report_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d176913e180 d176913e78 ">The saved report alias within the current application page. If <code class="codeph">p_report_static_id</code> is NULL, it adds the filter to the last viewed report.</td>
</tr>
</tbody>
</table>

Example

The following example shows how to use the `ADD_FILTER` procedure to filter an interactive report with a report Static ID of `category-report` in page 1 and region Static ID `group-region` of the current application with `DEPTNO` equals `30`.

```
BEGIN
    APEX_IR.ADD_FILTER(
        p_page_id          => 1,
        p_region_static_id => 'group-region',
        p_report_column    => 'DEPTNO',
        p_filter_value     => '30',
        p_operator_abbr    => 'EQ',
        p_report_static_id => 'category-report' );
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.5 CHANGE_REPORT_OWNER Procedure

This procedure changes the owner of a saved interactive report using a report ID. This procedure cannot change the owner of default interactive reports.

Syntax

```
APEX_IR.CHANGE_REPORT_OWNER (
    p_report_id    IN NUMBER,
    p_old_owner    IN VARCHAR2,
    p_new_owner    IN VARCHAR2 )
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_report_id` | The saved report ID within the current application page. |
| `p_old_owner` | The previous owner name to change from (case sensitive). The owner needs to a valid login user accessing the report. |
| `p_new_owner` | The new owner name to change to (case sensitive). The owner must be a valid login user accessing the report. |

Example

This example shows how to use `CHANGE_REPORT_OWNER` procedure to change the old owner name of JOHN to the new owner name of JOHN.DOE for a saved report. The saved report has a report ID of 1235704029884282.

```
BEGIN
    APEX_IR.CHANGE_REPORT_OWNER (
        p_report_id    => 1235704029884282,
        p_old_owner    => 'JOHN',
        p_new_owner    => 'JOHN.DOE');
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.6 CHANGE_SUBSCRIPTION_EMAIL Procedure

This procedure changes the interactive report subscription's email address. When an email is sent out, the subscription sends a message to the defined email address.

Syntax

```
APEX_IR.CHANGE_SUBSCRIPTION_EMAIL (
    p_subscription_id   IN NUMBER,
    p_email_address     IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_subscription_id` | Subscription ID to change the email address within the current workspace. |
| `p_email_address` | The new email address to change to. The email address needs to be a valid email syntax and cannot be set to null. |

Example

The following example shows how to use the `CHANGE_SUBSCRIPTION_EMAIL` procedure to change the email address to `some.user@example.com` for the interactive report subscription 956136850459718525.

```
BEGIN
    APEX_IR.CHANGE_SUBSCRIPTION_EMAIL (
        p_subscription_id => 956136850459718525,
        p_email_address   => 'some.user@example.com');
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.7 CHANGE_SUBSCRIPTION_LANG Procedure

This procedure changes the interactive report subscription language.

Syntax

```
APEX_IR.CHANGE_SUBSCRIPTION_LANG (
    p_subscription_id IN NUMBER,
    p_language        IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_subscription_id` | Subscription ID to change the language within the current workspace. |
| `p_language` | This is an IANA language code. Some examples include: `en`, `de`, `de`-`at`, `zh`-`cn`, and `pt`-`br`. |

Example

The following example shows how to use the `CHANGE_SUBSCRIPTION_LANG` procedure to change the subscription with the ID of 567890123 to German in the current workspace.

```
BEGIN
    APEX_IR.CHANGE_SUBSCRIPTION_LANG(
        p_subscription_id => 567890123,
        p_language        => 'de');
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.8 CLEAR_REPORT Procedure Signature 1

This procedure clears report settings using the report ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.CLEAR_REPORT (
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER,
    p_report_id IN NUMBER DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report region (ID). |
| `p_report_id` | The saved report ID within the current application page. If `p_report_id` is NULL, it clears the last viewed report settings. |

Example

The following example shows how to use the `CLEAR_REPORT` procedure to clear interactive report settings with a report ID of `880629800374638220` in page 1, region `2505704029884282` of the current application.

```
BEGIN
    APEX_IR.CLEAR_REPORT(
        p_page_id      => 1,
        p_region_id    => 2505704029884282,
        p_report_id    => 880629800374638220);
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.9 CLEAR_REPORT Procedure Signature 2

This procedure clears report settings using report alias.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.CLEAR_REPORT (
    p_page_id      IN NUMBER,
    p_region_id    IN NUMBER,
    p_report_alias IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report region (ID). |
| `p_report_alias` | The saved report alias within the current application page. If `p_report_alias` is NULL, it clears the last viewed report settings. |

Example

The following example shows how to use the `CLEAR_REPORT` procedure to clear interactive report settings with report alias of `CATEGORY_REPORT` in page 1, region `2505704029884282` of the current application.

```
BEGIN
    APEX_IR.CLEAR_REPORT(
        p_page_id      => 1,
        p_region_id    => 2505704029884282,
        p_report_alias => 'CATEGORY_REPORT');
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.10 CLEAR_REPORT Procedure Signature 3

This procedure clears report settings using the report Static ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in a partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.CLEAR_REPORT (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_static_id` | The interactive report region Static ID. |
| `p_report_static_id` | The saved report Static ID within the current application page. If `p_report_static_id` is NULL, it clears the last viewed report settings. |

Example

The following example shows how to use the `CLEAR_REPORT` procedure to clear the interactive report with report alias of `category-report` in page 1, region Static ID `group-region` of the current application.

```
BEGIN
    APEX_IR.CLEAR_REPORT(
        p_page_id          => 1,
        p_region_static_id => 'group-region',
        p_report_static_id => 'category-report' );
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.11 CLONE_REPORT Function

This function clones a user-saved report and returns a new report ID.

You can clone user-saved reports into a Private or Public report, but you cannot clone into a default report. Private reports can be cloned if the new owner matches the original owner.

Syntax

```
APEX_IR.CLONE_REPORT (
    p_report_id       IN NUMBER,
    p_new_name        IN VARCHAR2,
    p_new_description IN VARCHAR2 DEFAULT NULL,
    p_new_owner       IN VARCHAR2 DEFAULT apex_application.g_user,
    p_new_is_public   IN BOOLEAN  DEFAULT FALSE,
    p_replace_report  IN BOOLEAN  DEFAULT TRUE )
    RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_report_id` | The source report ID to clone. |
| `p_new_name` | The new report name. |
| `p_new_description` | The new report description. |
| `p_new_owner` | The case-sensitive new owner of the report. If not passed, current user is the owner. |
| `p_new_is_public` | If new report is Public. If not passed, clones as Private report. |
| `p_replace_report` | If `TRUE` (default), report will be replaced if exists. If `FALSE`, an error raises if a report with the same name and owner already exists. |

Example

The following example clones a report ID selected from a page item value. The report name and owner are overwritten by the parameter values, and the report is cloned as public report.

```
DECLARE
    l_new_report_id number;
BEGIN
    l_new_report_id := apex_ir.clone_report (
                           p_report_id        => :P1_REPORT_ID,
                           p_new_name         => 'New Cloned Report',
                           p_new_owner        => :APP_USER,
                           p_new_is_public    => true );
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.12 DELETE_REPORT Procedure

This procedure deletes saved interactive reports. The deleted saved report is removed from the current logged-in workspace and application.

Syntax

```
APEX_IR.DELETE_REPORT (
    p_report_id IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_report_id` | Report ID to delete within the current Oracle APEX application. |

Example

The following example shows how to use the `DELETE_REPORT` procedure to delete the saved interactive report with ID of `880629800374638220` in the current application.

```
BEGIN
    APEX_IR.DELETE_REPORT (
        p_report_id => 880629800374638220);
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.13 DELETE_SUBSCRIPTION Procedure

This procedure deletes interactive report subscriptions.

Syntax

```
APEX_IR.DELETE_SUBSCRIPTION (
    p_subscription_id IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_subscription_id` | Subscription ID to delete within the current workspace. |

Example

The following example shows how to use the `DELETE_SUBSCRIPTION` procedure to delete the subscription with ID of 567890123 in the current workspace.

```
BEGIN
    APEX_IR.DELETE_SUBSCRIPTION(
        p_subscription_id => 567890123);
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.14 EXPORT_SAVED_REPORTS Function

This function exports multiple saved reports from the current app and workspace. Exports default or user-saved reports.

If calling outside of Oracle APEX, use `apex_util.set_workspace` to set the current workspace.

Syntax

```
APEX_IR.EXPORT_SAVED_REPORTS (
    p_report_ids           IN apex_t_number,
    p_credential_static_id IN VARCHAR2 )
    RETURN CLOB;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d179280e80" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d179280e82" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d179280e86" style="text-align: left;" data-valign="top" width="42%" headers="d179280e80 "><code class="codeph">p_report_ids</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d179280e86 d179280e82 ">The array of report IDs to export.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d179280e92" style="text-align: left;" data-valign="top" width="42%" headers="d179280e80 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d179280e92 d179280e82 "><p>The Key Pair authentication credential static ID. This credential is used to create a signature for the export.</p>
<p>Create compatible public and private keys using OpenSSH, and use those to create a Key Pair workspace web credential.</p></td>
</tr>
</tbody>
</table>

Returns

The signed and base64-encoded report export JSON object in CLOB.

Example

The following example exports report IDs ( 111111, 222222 ) from the current workspace using `my_API_key_pair` credential.

```
DECLARE
    l_export_clob clob;
BEGIN
    l_export_clob := apex_ir.export_saved_reports (
                         p_report_ids           => apex_t_number(
                                                       111111, 222222 ),
                         p_credential_static_id => 'my_API_key_pair' );
END;
```

See Also:

[SET_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.SET_WORKSPACE_Procedure-2.html#GUID-20B79E1B-6F00-4E07-9278-9E5A45586D1F)

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.15 GET_LAST_VIEWED_REPORT_ID Function

This function returns the last viewed base report ID of the specified page and region.

Syntax

```
APEX_IR.GET_LAST_VIEWED_REPORT_ID (
    p_page_id   IN NUMBER,
    p_region_id IN VARCHAR2 )
    RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report static ID or region ID. |

Example

The following example shows how to use the `GET_LAST_VIEWED_REPORT_ID` function to retrieve the last viewed report ID in page 1, region `group-region` of the current application.

```
DECLARE
    l_report_id number;
BEGIN
    l_report_id := APEX_IR.GET_LAST_VIEWED_REPORT_ID (
        p_page_id          => 1,
        p_region_id => 'group-region' );
    sys.htp.p('Last Viewed Report ID = ' || l_report_id);
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.16 GET_REPORT Function (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

To execute the query of an Interactive Report within PL/SQL code, use [OPEN_QUERY_CONTEXT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function-Signature-1.html#GUID-BDB9F4B7-D1A7-4C9A-B4C7-45A57AD76427) in APEX_REGION instead.

This function returns an interactive report runtime query.

Syntax

```
APEX_IR.GET_REPORT(
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER,
    p_report_id IN NUMBER   DEFAULT NULL,
    p_view      IN VARCHAR2 DEFAULT c_view_report )
    RETURN t_report;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d179670e85" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d179670e87" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d179670e91" style="text-align: left;" data-valign="top" width="31%" headers="d179670e85 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d179670e91 d179670e87 ">Page of the current Oracle APEX application that contains an interactive report.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d179670e100" style="text-align: left;" data-valign="top" width="31%" headers="d179670e85 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d179670e100 d179670e87 ">The interactive report region ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d179670e106" style="text-align: left;" data-valign="top" width="31%" headers="d179670e85 "><code class="codeph">p_report_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d179670e106 d179670e87 ">The saved report ID within the current application page. If <code class="codeph">p_report_id</code> is NULL, retrieves last viewed report query.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d179670e115" style="text-align: left;" data-valign="top" width="31%" headers="d179670e85 "><code class="codeph">p_view</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d179670e115 d179670e87 "><p>The view type available for the report. The values can be <code class="codeph">APEX_IR.C_VIEW_REPORT</code>, <code class="codeph">APEX_IR.C_VIEW_GROUPBY</code>, or <code class="codeph">APEX_IR.C_VIEW_PIVOT</code>.</p>
<p>If <code class="codeph">p_view</code> is NULL, retrieves the view currently used by the report. If the <code class="codeph">p_view</code> passed does not exist for the current report, an error raises.</p></td>
</tr>
</tbody>
</table>

See Also:

[OPEN_QUERY_CONTEXT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function-Signature-1.html#GUID-BDB9F4B7-D1A7-4C9A-B4C7-45A57AD76427)

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.17 IMPORT_SAVED_REPORTS Procedure

This procedure imports saved reports into an app in the current workspace. Supports importing default or user-saved reports.

If calling outside of Oracle APEX, use `apex_util.set_workspace` to set the current workspace.

Syntax

```
APEX_IR.IMPORT_SAVED_REPORTS (
    p_export_content       IN CLOB,
    p_credential_static_id IN VARCHAR2,
    p_replace_report       IN BOOLEAN  DEFAULT TRUE,
    p_new_owner            IN VARCHAR2 DEFAULT apex_application.g_user,
    p_new_application_id   IN NUMBER   DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_export_content` | The signed and base64-encoded report export JSON. |
| `p_credential_static_id` | The Key Pair authentication credential static ID. The same credential used to sign the export content is used to verify. |
| `p_replace_report` | If `TRUE` (default), report is replaced if exists. |
| `p_new_owner` | The case-sensitive new owner of the reports. Only non-default reports can be overwritten with `p_new_owner`. |
| `p_new_application_id` | The new application ID of the reports. The reports are imported to the application containing valid interactive report regions. |

Example

The following example imports reports using the uploaded export file and `my_API_key_pair` credential. The owner and application ID of the reports are overwritten by the entered page item values during the import.

```
DECLARE
    l_blob blob;
BEGIN
    SELECT blob_content
        INTO l_blob
        FROM apex_application_temp_files
    WHERE name = :P1_FILE;

    apex_ir.import_saved_reports (
        p_export_content       => apex_util.blob_to_clob( l_blob ),
        p_credential_static_id => 'my_API_key_pair',
        p_new_owner            => :P1_NEW_OWNER,
        p_new_application_id   => :P1_NEW_APP_ID );
END;
```

See Also:

[SET_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.SET_WORKSPACE_Procedure-2.html#GUID-20B79E1B-6F00-4E07-9278-9E5A45586D1F)

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.18 RESET_REPORT Procedure Signature 1

This procedure resets report settings to the developer defined default settings using the report ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.RESET_REPORT (
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER,
    p_report_id IN NUMBER DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report region ID. |
| `p_report_id` | The saved report ID within the current application page. If `p_report_id` is NULL, it resets the last viewed report settings. |

Example

The following example shows how to use the `RESET_REPORT` procedure signature 1 to reset interactive report settings with report ID of `880629800374638220` in page 1, region `2505704029884282` of the current application.

```
BEGIN
    APEX_IR.RESET_REPORT(
        p_page_id      => 1,
        p_region_id    => 2505704029884282,
        p_report_id    => 880629800374638220);
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.19 RESET_REPORT Procedure Signature 2

This procedure resets report settings using the report alias.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.RESET_REPORT (
    p_page_id      IN NUMBER,
    p_region_id    IN NUMBER,
    p_report_alias IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report region ID. |
| `p_report_alias` | The saved report alias within the current application page. If `p_report_alias` is NULL, it resets the last viewed report settings. |

Example

The following example shows how to use the `RESET_REPORT` procedure to reset interactive report settings with a report alias of `CATEGORY_REPORT` in page `1`, region `2505704029884282` of the current application.

```
BEGIN
    APEX_IR.RESET_REPORT(
        p_page_id      => 1,
        p_region_id    => 2505704029884282,
        p_report_alias => 'CATEGORY_REPORT');
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 36.20 RESET_REPORT Procedure Signature 3

This procedure resets report settings to the developer-defined default settings using the report Static ID.

Note:

The use of this procedure in a page rendering process causes report download issues (CSV, HTML, Email, and so on). When a user downloads the report, the interactive report reloads the page with download format in the REQUEST value. Any interactive report settings changes (such as add filter or reset report) are done in partial page refresh. Thus, the download data may not match the report data user is seeing. For this reason, Oracle recommends only using this procedure in a page submit process.

Syntax

```
APEX_IR.RESET_REPORT (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_static_id` | The interactive report region Static ID. |
| `p_report_static_id` | The saved report Static ID within the current application page. If `p_report_static_id` is NULL, it resets the last viewed report settings. |

Example

The following example shows how to use the `RESET_REPORT` procedure to reset interactive report settings with a report Static ID of `category-report` in page 1, region `group-region` of the current application.

```
BEGIN
    APEX_IR.RESET_REPORT(
        p_page_id             => 1,
        p_region_static_id    => 'group-region',
        p_report_static_id    => 'category-report' );
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)
