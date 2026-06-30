<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 6  APEX_APPLICATION

The `APEX_APPLICATION` package is a PL/SQL package that implements the Oracle APEX rendering engine. You can use this package to take advantage of many global variables.

- [Working with G_Fnn Arrays (Legacy)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/working-with-g_fnn-arrays.html#GUID-9418A964-B125-4C9A-9CB3-DBBA0CB6E20A)
- [Global Variables](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION-Global-Variables.html#GUID-5164592B-6864-4E2B-8DE3-64B463687A41)
- [HELP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HELP-Procedure.html#GUID-C82E7C47-AED1-4374-AA88-8189990D4E55)
- [STOP_APEX_ENGINE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STOP_APEX_ENGINE-Procedure.html#GUID-88F4A028-4759-433D-94F9-B7F38BFD4203)

------------------------------------------------------------------------

## 6.1 Working with G_Fnn Arrays (Legacy)

Important:

Support for G_Fnn arrays is legacy and will be removed in a future release. Oracle recommends using interactive grids instead.

The `APEX_APPLICATION.G_Fnn` arrays (where nn ranges from `01` to `50`) are used with `APEX_ITEM` functions to enable the dynamic generation of HTML form elements to an APEX page (such as `APEX_ITEM.TEXT` and `APEX_ITEM.SELECT_LIST`). On Page Submit, the item values are sent to the server and provided as the `APEX_APPLICATION.G_Fnn` arrays.

Only use `APEX_APPLICATION.G_Fnn` in an `APEX_ITEM` context. For other contexts (such as plain array processing for PL/SQL code) use the `APEX_T_VARCHAR2` type and the procedures and functions within the `APEX_STRING` package.

Note:

When working with `APEX_APPLICATION.G_Fnn`, the `TABLE_TO_STRING` and `STRING_TO_TABLE` functions in `APEX_UTIL` are deprecated. Use `APEX_STRING.TABLE_TO_STRING` and `APEX_STRING.STRING_TO_TABLE` instead.

Referencing G_Fnn Arrays

The following example uses `APEX_ITEM` to manually create a tabular form on the `EMP` table. Note that the `ename`, `sal`, and `comm` columns use the `APEX_ITEM.TEXT` function to generate an HTML text field for each row. Note also that each item in the query is passed a unique `p_idx` parameter to ensure that each column is stored in its own array.

1.  On a new page, add a classic report with a SQL Query such as the following example:

    ``` pre
    SELECT
      empno,
      APEX_ITEM.HIDDEN(1,empno)||
      APEX_ITEM.TEXT(2,ename) ename,
      APEX_ITEM.TEXT(3,job) job,
      mgr,
      APEX_ITEM.DATE_POPUP(4,rownum,hiredate,'dd-mon-yyyy') hiredate,
      APEX_ITEM.TEXT(5,sal) sal,
      APEX_ITEM.TEXT(6,comm) comm,
      deptno
    FROM emp
    ORDER BY 1
    ```

2.  Disable "Escape Special Characters" for all report columns (under the Security property in Page Designer).

3.  Add a Submit button to the page.

4.  Run the application.

Referencing Values Within an On Submit Process

You can reference the values posted by the tabular form using the PL/SQL variable `APEX_APPLICATION.G_F01` to `APEX_APPLICATION.G_F50`. Because this element is an array, you can reference values directly. For example, the following code block collects all employee names as a text block and stores it as the value of the `P3_G_F01_CONTENTS` item:

```
:P3_G_F01_CONTENTS := '';
for i IN 1..APEX_APPLICATION.G_F01.COUNT LOOP
    :P3_G_F01_CONTENTS := :P3_G_F01_CONTENTS
                       || 'element '||I||' has a value of '||APEX_APPLICATION.G_F02(i) || chr(10);
END LOOP;
```

Note that check boxes displayed using `APEX_ITEM.CHECKBOX` only contain values in the `APEX_APPLICATION` arrays for those rows which are checked. Unlike other items (`TEXT`, `TEXTAREA`, and `DATE_POPUP`) which can contain an entry in the corresponding `APEX_APPLICATION` array for every row submitted, a check box only has an entry in the `APEX_APPLICATION` array if it is selected.

See Also:

- [APEX_IG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG.html#GUID-9A4189AF-FEAE-4CC0-A602-A10A5E4868C2)
- [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)
- [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)
- [STRING_TO_TABLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRING_TO_TABLE-1-Function.html#GUID-8EE18F03-968D-4141-B5B9-149B12F4F6CF)
- [TABLE_TO_STRING Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_STRING-1-Function.html#GUID-93B4AD2A-704C-4D9C-B48C-5E8F21CB6616)

**Parent topic:** [APEX_APPLICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION.html#GUID-46D9B879-3180-480D-B5D6-54AABDD146F6)

------------------------------------------------------------------------

## 6.2 Global Variables

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Global variables in APEX_APPLICATION." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d24471e74" style="text-align: left;" data-valign="bottom" width="25%">Global Variable</th>
<th id="d24471e76" style="text-align: left;" data-valign="bottom" width="75%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d24471e80" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_USER</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e80 d24471e76 ">Specifies the currently logged in user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e86" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_FLOW_ID</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e86 d24471e76 ">Specifies the ID of the currently running application.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e92" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_FLOW_STEP_ID</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e92 d24471e76 ">Specifies the ID of the currently running page.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e98" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_FLOW_OWNER</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e98 d24471e76 "><p>Defaults to the application's parsing schema. Use <code class="codeph">#OWNER#</code> to reference this value in SQL queries and PL/SQL.</p>
<p>Note:</p>
<p>Changing <code class="codeph">G_FLOW_OWNER</code> at runtime does not change the parsing schema.</p>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e114" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_REQUEST</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e114 d24471e76 ">Specifies the value of the request variable most recently passed to or set within the show or accept modules.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e120" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_BROWSER_LANGUAGE</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e120 d24471e76 ">Refers to the web browser's current language preference.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e126" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_DEBUG</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e126 d24471e76 ">Refers to whether debugging is switched on or off. Valid values for the DEBUG flag are <code class="codeph">Yes</code> or <code class="codeph">No</code>. Enabling debug shows details about application processing.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e138" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_HOME_LINK</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e138 d24471e76 ">Refers to the home page of an application. If no page is given and if no alternative page is dictated by the authentication scheme's logic, the Oracle APEX engine redirects to this location.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e147" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_LOGIN_URL</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e147 d24471e76 ">Used to display a link to a login page for users that are not currently logged in.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e153" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_IMAGE_PREFIX</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e153 d24471e76 ">Refers to the virtual path the web server uses to point to the images directory distributed with APEX.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e162" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_FLOW_SCHEMA_OWNER</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e162 d24471e76 ">Refers to the owner of the APEX schema.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e172" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_PRINTER_FRIENDLY</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e172 d24471e76 ">Refers to whether the APEX engine is running in print view mode. This setting can be referenced in conditions to eliminate elements not desired in a printed document from a page.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e181" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_PROXY_SERVER</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e181 d24471e76 ">Refers to the application attribute Proxy Server.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e187" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_SYSDATE</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e187 d24471e76 ">Refers to the current date on the database server. <code class="codeph">G_SYSDATE</code> uses the DATE datatype.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e196" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_PUBLIC_USER</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e196 d24471e76 ">Refers to the Oracle schema used to connect to the database through the database access descriptor (DAD).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e205" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_GLOBAL_NOTIFICATION</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e205 d24471e76 ">Specifies the application's global notification attribute.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d24471e211" style="text-align: left;" data-valign="top" width="25%" headers="d24471e74 "><code class="codeph">G_X01, ... G_X10</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d24471e211 d24471e76 ">Specifies the values of the <code class="codeph">X01, ... X10</code> variables most recently passed to or set within the show or accept modules. You typically use these variables in On-Demand AJAX processes.</td>
</tr>
</tbody>
</table>

**Parent topic:** [APEX_APPLICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION.html#GUID-46D9B879-3180-480D-B5D6-54AABDD146F6)

------------------------------------------------------------------------

## 6.3 HELP Procedure

This procedure outputs page and item level help text as formatted HTML. You can also use it to customize how help information is displayed in your application.

Syntax

```
APEX_APPLICATION.HELP (
    p_request             IN VARCHAR2 DEFAULT NULL,
    p_flow_id             IN VARCHAR2 DEFAULT NULL,
    p_flow_step_id        IN VARCHAR2 DEFAULT NULL,
    p_show_item_help      IN VARCHAR2 DEFAULT 'YES',
    p_show_regions        IN VARCHAR2 DEFAULT 'YES',
    p_before_page_html    IN VARCHAR2 DEFAULT '<p>',
    p_after_page_html     IN VARCHAR2 DEFAULT NULL,
    p_before_region_html  IN VARCHAR2 DEFAULT NULL,
    p_after_region_html   IN VARCHAR2 DEFAULT '</td></tr></table></p>',
    p_before_prompt_html  IN VARCHAR2 DEFAULT '<p><b>',
    p_after_prompt_html   IN VARCHAR2 DEFAULT '</b></p>:&nbsp;',
    p_before_item_html    IN VARCHAR2 DEFAULT NULL,
    p_after_item_html     IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_request` | Not used. |
| `p_flow_id` | The application ID that contains the page or item level help you want to output. |
| `p_flow_step_id` | The page ID that contains the page or item level help you want to display. |
| `p_show_item_help` | Flag to determine if item-level help is output. If this parameter is supplied, the value must be either `YES` (default) or `NO`. |
| `p_show_regions` | Flag to determine if region headers are output (for regions containing page items). If this parameter is supplied, the value must be either `YES` (default) or `NO`. |
| `p_before_page_html` | Use this parameter to include HTML between the page-level help text and item-level help text. |
| `p_after_page_html` | Use this parameter to include HTML at the bottom of the output, after all other help. |
| `p_before_region_html` | Use this parameter to include HTML before every region section. This parameter is ignored if `p_show_regions` is set to `NO`. |
| `p_after_region_html` | Use this parameter to include HTML after every region section. This parameter is ignored if `p_show_regions` is set to `NO`. |
| `p_before_prompt_html` | Use this parameter to include HTML before every item label for item-level help. This parameter is ignored if `p_show_item_help` is set to `NO`. |
| `p_after_prompt_html` | Use this parameter to include HTML after every item label for item-level help. This parameter is ignored if `p_show_item_help` is set to `NO`. |
| `p_before_item_html` | Use this parameter to include HTML before every item help text for item-level help. This parameter is ignored if `p_show_item_help` is set to `NO`. |
| `p_after_item_html` | Use this parameter to include HTML after every item help text for item-level help. This parameter is ignored if `p_show_item_help` is set to `NO`. |

Example

The following example uses the `APEX_APPLICATION.HELP` procedure to customize how help information is displayed.

In this example, the `p_flow_step_id` parameter is set to `:REQUEST`, which means that a page ID specified in the REQUEST section of the URL controls which page's help information to display (see note after example for full details on how this can be achieved).

Also, the help display has been customized so that the region sub-header now has a different color (through the `p_before_region_html` parameter) and also the ":" has been removed that appeared by default after every item prompt (through the `p_after_prompt_html` parameter).

```
APEX_APPLICATION.HELP(
    p_flow_id => :APP_ID,
    p_flow_step_id => :REQUEST,
    p_before_region_html => '<p><br/><table class="u-info" width="100%"><tr><td><b>',
    p_after_prompt_html  => '</b></p>&nbsp;&nbsp;');
```

To implement this type of call in your application, you can do the following:

1.  Create a page that will be your application help page.
2.  Create a region of type "PL/SQL Dynamic Content" and add the `APEX_APPLICATION.HELP` call as PL/SQL Source.
3.  Add a "Navigation Bar" link to this page, ensuring that the REQUEST value set in the link is `&APP_PAGE_ID`.

**Parent topic:** [APEX_APPLICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION.html#GUID-46D9B879-3180-480D-B5D6-54AABDD146F6)

------------------------------------------------------------------------

## 6.4 STOP_APEX_ENGINE Procedure

This procedure signals the Oracle APEX engine to stop further processing and immediately exit to avoid adding additional HTML code to the HTTP buffer.

Note:

This procedure raises the exception `APEX_APPLICATION.E_STOP_APEX_ENGINE` internally. You must raise that exception again if you use a WHEN OTHERS exception handler.

Syntax

```
APEX_APPLICATION.STOP_APEX_ENGINE
```

Parameters

None.

Example 1

This example tells the browser to redirect to `http://apex.oracle.com/` and immediately stops further processing.

```
owa_util.redirect_url('http://apex.oracle.com');
apex_application.stop_apex_engine;
```

Example 2

This example tells the browser to redirect to `http://apex.oracle.com/` and immediately stops further processing. The code also contains a WHEN OTHERS exception handler which deals with the `APEX_APPLICATION.E_STOP_APEX_ENGINE` used by `APEX_APPLICATION.STOP_APEX_ENGINE`.

```
BEGIN
    ... code which can raise an exception ...
    owa_util.redirect_url('http://apex.oracle.com');
    apex_application.stop_apex_engine;
EXCEPTION
    WHEN apex_application.e_stop_apex_engine THEN
        RAISE; -- raise again the stop APEX engine exception
    WHEN others THEN
        ...; -- code to handle the exception
END;
```

**Parent topic:** [APEX_APPLICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION.html#GUID-46D9B879-3180-480D-B5D6-54AABDD146F6)
