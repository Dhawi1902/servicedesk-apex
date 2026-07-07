<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 34  APEX_IR

The `APEX_IR` package provides utilities you can use when programming in the Oracle APEX environment related to interactive reports. You can use the `APEX_IR` package to get an interactive report runtime query based on local and remote data source, add filters, reset or clear report settings, delete saved reports and manage subscriptions.

- [Constants and Data Types](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.Constants-Data-Types.html#GUID-F15F9992-0524-483E-818C-D56E71AFF096)
- [ADD_FILTER Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_FILTER-Procedure-Signature-1.html#GUID-3BEF6280-0BEE-47B2-9067-B607E0D822A0)
- [ADD_FILTER Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_FILTER-Procedure-Signature-2.html#GUID-6C8D1168-6735-4FDE-AC01-907C8F528062)
- [CHANGE_REPORT_OWNER Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CHANGE_REPORT_OWNER-Procedure.html#GUID-B1CF8F7A-3E1B-4DCB-9480-0704A4478ABF)
- [CHANGE_SUBSCRIPTION_EMAIL Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CHANGE_SUBSCRIPTION_EMAIL-Procedure.html#GUID-65C114DF-EBCF-416E-BBD7-45A4ECFF70E2)
- [CHANGE_SUBSCRIPTION_LANG Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CHANGE_SUBSCRIPTION_LANG-Procedure.html#GUID-5133EC62-EB99-434B-81ED-E70055B7198B)
- [CLEAR_REPORT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CLEAR_REPORT-Procedure-Signature-1.html#GUID-4185B596-36FE-4F63-BFDA-7A066A253698)
- [CLEAR_REPORT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CLEAR_REPORT-Procedure-Signature-2.html#GUID-A8D7FCA4-C4EE-4473-AF90-71E7C137D04E)
- [CLONE_REPORT Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CLONE_REPORT-Function.html#GUID-FE2CA1AF-0798-41D4-9CD6-0EC62950A1CF)
- [DELETE_REPORT Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DELETE_REPORT-Procedure.html#GUID-6383F027-BB39-450C-91FC-9B89175E3481)
- [DELETE_SUBSCRIPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DELETE_SUBSCRIPTION-Procedure.html#GUID-D0C11FBE-7A85-44B2-A759-80313F6AD534)
- [EXPORT_SAVED_REPORTS Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/EXPORT_SAVED_REPORTS-Function.html#GUID-9388CE03-9EB2-4991-BF04-3B41DAAC3C9C)
- [GET_LAST_VIEWED_REPORT_ID Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GET_LAST_VIEWED_REPORT_ID-Function.html#GUID-656AE33C-719D-4943-8B9D-33CBDDF2B740)
- [GET_REPORT Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GET_REPORT-Function.html#GUID-7F8F7BC9-3A97-46C8-BF8D-4984DDBD7325)
- [IMPORT_SAVED_REPORTS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/IMPORT_SAVED_REPORTS-Procedure.html#GUID-A1085F96-1C34-4F35-AA99-5B047139804C)
- [RESET_REPORT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESET_REPORT-Procedure-Signature-1.html#GUID-DB90E012-0DDC-4DC6-A330-295285C0F44D)
- [RESET_REPORT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESET_REPORT-Procedure-Signature-2.html#GUID-0AD09A7C-AB05-4B7F-8BE0-D845D4E613F4)

------------------------------------------------------------------------

## 34.1 Constants and Data Types

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.2 ADD_FILTER Procedure Signature 1

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
<th id="d158919e74" style="text-align: left;" data-valign="bottom" width="22%">Parameter</th>
<th id="d158919e76" style="text-align: left;" data-valign="bottom" width="78%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d158919e80" style="text-align: left;" data-valign="top" width="22%" headers="d158919e74 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d158919e80 d158919e76 ">Page of the current Oracle APEX application that contains an interactive report.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d158919e89" style="text-align: left;" data-valign="top" width="22%" headers="d158919e74 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d158919e89 d158919e76 ">The interactive report region (ID).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d158919e95" style="text-align: left;" data-valign="top" width="22%" headers="d158919e74 "><code class="codeph">p_report_column</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d158919e95 d158919e76 ">Name of the report SQL column, or column alias, to be filtered.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d158919e101" style="text-align: left;" data-valign="top" width="22%" headers="d158919e74 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d158919e101 d158919e76 "><p>The filter value. This value is not used for <code class="codeph">N</code> and <code class="codeph">NN</code>.</p>
<p>Enter multiple valuables in a comma-separated list. Enclose multiple filter values separated by commas in backslash characters (<code class="codeph">\</code>). For example, if the <code class="codeph">p_operator_abbr</code> is type <code class="codeph">IN</code> or <code class="codeph">NIN</code>, and you wish to filter for the values <code class="codeph">CLOSED</code> and <code class="codeph">OPEN</code>, then set <code class="codeph">p_filter_value</code> to <code class="codeph">\CLOSED,OPEN\</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d158919e141" style="text-align: left;" data-valign="top" width="22%" headers="d158919e74 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d158919e141 d158919e76 "><p>Filter type. Valid values are as follows:</p>
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
<td id="d158919e205" style="text-align: left;" data-valign="top" width="22%" headers="d158919e74 "><code class="codeph">p_report_id</code></td>
<td style="text-align: left;" data-valign="top" width="78%" headers="d158919e205 d158919e76 ">The saved report ID within the current application page. If <code class="codeph">p_report_id</code> is NULL, it adds the filter to the last viewed report settings.</td>
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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.3 ADD_FILTER Procedure Signature 2

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
<th id="d159396e74" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d159396e76" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d159396e80" style="text-align: left;" data-valign="top" width="31%" headers="d159396e74 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d159396e80 d159396e76 ">Page of the current Oracle APEX application that contains an interactive report.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d159396e89" style="text-align: left;" data-valign="top" width="31%" headers="d159396e74 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d159396e89 d159396e76 ">The interactive report region (ID).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d159396e95" style="text-align: left;" data-valign="top" width="31%" headers="d159396e74 "><code class="codeph">p_report_column</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d159396e95 d159396e76 ">Name of the report SQL column, or column alias, to be filtered.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d159396e101" style="text-align: left;" data-valign="top" width="31%" headers="d159396e74 "><code class="codeph">p_filter_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d159396e101 d159396e76 ">This is the filter value. This value is not used for <code class="codeph">N</code> and <code class="codeph">NN</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d159396e113" style="text-align: left;" data-valign="top" width="31%" headers="d159396e74 "><code class="codeph">p_operator_abbr</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d159396e113 d159396e76 "><p>Filter type. Valid values are as follows:</p>
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
<td id="d159396e178" style="text-align: left;" data-valign="top" width="31%" headers="d159396e74 "><code class="codeph">p_report_alias</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d159396e178 d159396e76 ">The saved report alias within the current application page. If <code class="codeph">p_report_alias</code> is NULL, it adds filter to the last viewed report settings.</td>
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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.4 CHANGE_REPORT_OWNER Procedure

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.5 CHANGE_SUBSCRIPTION_EMAIL Procedure

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.6 CHANGE_SUBSCRIPTION_LANG Procedure

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.7 CLEAR_REPORT Procedure Signature 1

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.8 CLEAR_REPORT Procedure Signature 2

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.9 CLONE_REPORT Function

This function clones a user-saved report and returns a new report ID.

You can clone into a Private or Public report, but you cannot clone into a default report.

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.10 DELETE_REPORT Procedure

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.11 DELETE_SUBSCRIPTION Procedure

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.12 EXPORT_SAVED_REPORTS Function

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
<th id="d161526e78" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d161526e80" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d161526e84" style="text-align: left;" data-valign="top" width="42%" headers="d161526e78 "><code class="codeph">p_report_ids</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d161526e84 d161526e80 ">The array of report IDs to export.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d161526e90" style="text-align: left;" data-valign="top" width="42%" headers="d161526e78 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d161526e90 d161526e80 "><p>The Key Pair authentication credential static ID. This credential is used to create a signature for the export.</p>
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

[SET_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_UTIL.SET_WORKSPACE_Procedure-2.html#GUID-20B79E1B-6F00-4E07-9278-9E5A45586D1F)

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.13 GET_LAST_VIEWED_REPORT_ID Function

This function returns the last viewed base report ID of the specified page and region.

Syntax

```
APEX_IR.GET_LAST_VIEWED_REPORT_ID (
    p_page_id   IN NUMBER,
    p_region_id IN NUMBER )
    RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_region_id` | The interactive report region ID. |

Example

The following example shows how to use the `GET_LAST_VIEWED_REPORT_ID` function to retrieve the last viewed report ID in page 1, region `2505704029884282` of the current application.

``` oac_no_warn
DECLARE
    l_report_id number;
BEGIN
    l_report_id := APEX_IR.GET_LAST_VIEWED_REPORT_ID (
        p_page_id   => 1,
        p_region_id => 2505704029884282);
END;
```

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.14 GET_REPORT Function (Deprecated)

Note:

This function is deprecated and will be removed in a future release.

Use [OPEN_QUERY_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function.html#GUID-BDB9F4B7-D1A7-4C9A-B4C7-45A57AD76427) in APEX_REGION instead.

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
<th id="d161916e82" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d161916e84" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d161916e88" style="text-align: left;" data-valign="top" width="31%" headers="d161916e82 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d161916e88 d161916e84 ">Page of the current Oracle APEX application that contains an interactive report.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d161916e97" style="text-align: left;" data-valign="top" width="31%" headers="d161916e82 "><code class="codeph">p_region_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d161916e97 d161916e84 ">The interactive report region ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d161916e103" style="text-align: left;" data-valign="top" width="31%" headers="d161916e82 "><code class="codeph">p_report_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d161916e103 d161916e84 ">The saved report ID within the current application page. If <code class="codeph">p_report_id</code> is NULL, retrieves last viewed report query.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d161916e112" style="text-align: left;" data-valign="top" width="31%" headers="d161916e82 "><code class="codeph">p_view</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d161916e112 d161916e84 "><p>The view type available for the report. The values can be <code class="codeph">APEX_IR.C_VIEW_REPORT</code>, <code class="codeph">APEX_IR.C_VIEW_GROUPBY</code>, or <code class="codeph">APEX_IR.C_VIEW_PIVOT</code>.</p>
<p>If <code class="codeph">p_view</code> is NULL, retrieves the view currently used by the report. If the <code class="codeph">p_view</code> passed does not exist for the current report, an error raises.</p></td>
</tr>
</tbody>
</table>

Example 1

The following example shows how to use the `GET_REPORT` function to retrieve the runtime report query with bind variable information with report ID of 880629800374638220 in page 1, region 2505704029884282 of the current application.

```
DECLARE
   l_report apex_ir.t_report;
   l_query varchar2(32767);
BEGIN
    l_report := APEX_IR.GET_REPORT (
                    p_page_id => 1,
                    p_region_id => 2505704029884282,
                    p_report_id => 880629800374638220);
    l_query := l_report.sql_query;
    sys.htp.p('Statement = '||l_report.sql_query);
    for i in 1..l_report.binds.count
    loop
        sys.htp.p(i||'. '||l_report.binds(i).name||' = '||l_report.binds(i).value);
    end loop;
END;
```

Example 2

The following example shows how to use the `GET_REPORT` function to retrieve Group By view query defined in the current report page with region 2505704029884282.

```
DECLARE
   l_report APEX_IR.T_REPORT;
BEGIN
   l_report := APEX_IR.GET_REPORT (
                   p_page_id        => :APP_PAGE_ID,
                   p_region_id      => 2505704029884282,
                   p_view           => APEX_IR.C_VIEW_GROUPBY );
   sys.htp.p( 'Statement = '||l_report.sql_query );
END;
```

See Also:

[OPEN_QUERY_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_REGION-OPEN_QUERY_CONTEXT-Function.html#GUID-BDB9F4B7-D1A7-4C9A-B4C7-45A57AD76427)

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.15 IMPORT_SAVED_REPORTS Procedure

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

[SET_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_UTIL.SET_WORKSPACE_Procedure-2.html#GUID-20B79E1B-6F00-4E07-9278-9E5A45586D1F)

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.16 RESET_REPORT Procedure Signature 1

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)

------------------------------------------------------------------------

## 34.17 RESET_REPORT Procedure Signature 2

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

**Parent topic:** [APEX_IR](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_IR.html#GUID-04DB43B3-B600-4D4C-8C97-9B103D15C9F5)
