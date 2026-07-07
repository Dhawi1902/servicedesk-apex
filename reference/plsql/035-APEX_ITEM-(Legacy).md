<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 35  APEX_ITEM (Legacy)

This API is designated as legacy.

You can use the `APEX_ITEM` package to create form elements dynamically based on a SQL query instead of creating individual items page by page.

- [CHECKBOX2 Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CHECKBOX2-Function.html#GUID-27C89D70-D5A7-4418-B212-DAFDD44F44CC)
- [DATE_POPUP Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DATE_POPUP-Function.html#GUID-AF346914-3775-45E8-B93A-CDAC42B5AC04)
- [DATE_POPUP2 Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DATE_POPUP2-Function.html#GUID-A4FB5BCD-7536-48FD-AAC8-25B27BA7E45E)
- [DISPLAY_AND_SAVE Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DISPLAY_AND_SAVE-Function.html#GUID-C68D4602-1ED1-48FC-8C01-81818900F514)
- [HIDDEN Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/HIDDEN-Function.html#GUID-120D2827-88CA-4D60-A09E-CCAC85D56953)
- [MD5_CHECKSUM Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/MD5_CHECKSUM-Function.html#GUID-025DF33F-CC93-4702-BB6E-453397BD7195)
- [MD5_HIDDEN Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/MD5_HIDDEN-Function.html#GUID-485ACEB1-B491-4158-BE51-3C18E8AB0E7B)
- [POPUP_FROM_LOV Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/POPUP_FROM_LOV-Function.html#GUID-58F5BECA-8B2C-4A82-B880-EAC19B65FE64)
- [POPUP_FROM_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/POPUP_FROM_QUERY-Function.html#GUID-78E8D5D0-6E0F-4BD2-914A-CF811B261D6C)
- [POPUPKEY_FROM_LOV Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/POPUPKEY_FROM_LOV-Function.html#GUID-C97AFD39-6D0F-415D-90BD-5570C8496420)
- [POPUPKEY_FROM_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/POPUPKEY_FROM_QUERY-Function.html#GUID-6BF28C46-B6DA-4742-A487-1BEDE8E552F9)
- [RADIOGROUP Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RADIOGROUP-Function.html#GUID-E52D82B2-C7BD-4347-B5E8-35353B6C52CB)
- [SELECT_LIST Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SELECT_LIST-Function.html#GUID-7F55E7A5-29A8-4644-89A7-1F00A083ADAE)
- [SELECT_LIST_FROM_LOV Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SELECT_LIST_FROM_LOV-Function.html#GUID-B34786DE-675E-415F-97A1-BDD7C4A1CBAE)
- [SELECT_LIST_FROM_LOV_XL Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SELECT_LIST_FROM_LOV_XL-Function.html#GUID-5962BADC-3A43-4579-9A9A-942661029D5B)
- [SELECT_LIST_FROM_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SELECT_LIST_FROM_QUERY-Function.html#GUID-A4E36237-2B18-4CE5-A455-9771919A32F9)
- [SELECT_LIST_FROM_QUERY_XL Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SELECT_LIST_FROM_QUERY_XL-Function.html#GUID-8231047F-FB9E-4DDB-89A5-E4AD8BFB49BB)
- [SWITCH Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SWITCH-Function.html#GUID-5A3E1DAD-3038-4662-BA77-EA20E7B334B9)
- [TEXT Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/TEXT-Function.html#GUID-E63A7E4A-C015-4175-845C-A4501026F9D9)
- [TEXTAREA Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/TEXTAREA-Function.html#GUID-9C378304-647B-41AD-97C1-F368AA765D2E)
- [TEXT_FROM_LOV Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/TEXT_FROM_LOV-Function.html#GUID-69E77BBE-D7D4-4839-B4F2-7B5D69B97DB7)
- [TEXT_FROM_LOV_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/TEXT_FROM_LOV_QUERY-Function.html#GUID-32B3E0A9-DBE9-471E-AD62-7C665D0D0176)

------------------------------------------------------------------------

## 35.1 CHECKBOX2 Function

This function creates check boxes.

Syntax

```
APEX_ITEM.CHECKBOX2 (
    p_idx                       IN    NUMBER,
    p_value                     IN    VARCHAR2 DEFAULT NULL,
    p_attributes                IN    VARCHAR2 DEFAULT NULL,
    p_checked_values            IN    VARCHAR2 DEFAULT NULL,
    p_checked_values_delimiter  IN    VARCHAR2 DEFAULT ':',
    p_item_id                   IN    VARCHAR2 DEFAULT NULL,
    p_item_label                IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Number that determines which `APEX_APPLICATION` global variable is used. Valid range of values is 1 to 50. For example 1 creates `F01` and 2 creates `F02` |
| `p_value` | Value of a check box, hidden field, or input form item |
| `p_attributes` | Controls the size of the text field |
| `p_checked_values` | Values to be checked by default |
| `p_checked_values_delimiter` | Delimits the values in the previous parameter, `p_checked_values` |
| `p_item_id` | HTML attribute ID for the `<input>` tag |
| `p_item_label` | Invisible label created for the item |

Examples of Default Check Box Behavior

The following example demonstrates how to create a selected check box for each employee in the `emp` table.

```
SELECT APEX_ITEM.CHECKBOX2(1,empno,'CHECKED') "Select",
    ename, job
FROM   emp
ORDER BY 1
```

The following example demonstrates how to have all check boxes for employees display without being selected.

```
SELECT APEX_ITEM.CHECKBOX2(1,empno) "Select",
    ename, job
FROM   emp
ORDER BY 1
```

The following example demonstrates how to select the check boxes for employees who work in department 10.

```
SELECT APEX_ITEM.CHECKBOX2(1,empno,DECODE(deptno,10,'CHECKED',NULL)) "Select",
    ename, job
FROM   emp
ORDER BY 1
```

The next example demonstrates how to select the check boxes for employees who work in department 10 or department 20.

```
SELECT APEX_ITEM.CHECKBOX2(1,deptno,NULL,'10:20',':') "Select",
    ename, job
FROM   emp
ORDER BY 1
```

Creating an On-Submit Process

If you are using check boxes in your application, you might need to create an On Submit process to perform a specific type of action on the selected rows. For example, you could have a Delete button that uses the following logic:

```
SELECT APEX_ITEM.CHECKBOX2(1,empno) "Select",
    ename, job
FROM   emp
ORDER  by 1
```

Consider the following sample on-submit process:

```
FOR I in 1..APEX_APPLICATION.G_F01.COUNT LOOP
    DELETE FROM emp WHERE empno = to_number(APEX_APPLICATION.G_F01(i));
END LOOP;
```

The following example demonstrates how to create unselected checkboxes for each employee in the emp table, with a unique ID. This is useful for referencing records from within JavaScript code:

```
SELECT APEX_ITEM.CHECKBOX2(1,empno,NULL,NULL,NULL,'f01_#ROWNUM#') "Select",
    ename, job
FROM   emp
ORDER BY 1
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.2 DATE_POPUP Function

Use this function with forms that include date fields. The `DATE_POPUP` function dynamically generates a date field that has a popup calendar button.

Syntax

```
APEX_ITEM.DATE_POPUP (
    p_idx                       IN    NUMBER,
    p_row                       IN    NUMBER,
    p_value                     IN    VARCHAR2 DEFAULT NULL,
    p_date_format               IN    DATE DEFAULT 'DD-MON-YYYY',
    p_size                      IN    NUMBER DEFAULT 20,
    p_maxlength                 IN    NUMBER DEFAULT 2000,
    p_attributes                IN    VARCHAR2 DEFAULT NULL,
    p_item_id                   IN    VARCHAR2 DEFAULT NULL,
    p_item_label                IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Number that determines which APEX_APPLICATION global variable is used.Valid range of values is 1 to 50. For example, 1 creates `F01` and 2 creates `F02`. |
| `p_row` | This parameter is deprecated. Anything specified for this value is ignored. |
| `p_value` | Value of a field item. |
| `p_date_format` | Valid database date format. |
| `p_size` | Controls HTML tag attributes (such as disabled). |
| `p_maxlength` | Determines the maximum number of enterable characters. Becomes the maxlength attribute of the `<input>` HTML tag. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_item_id` | HTML attribute ID for the `<input>` tag. |
| `p_item_label` | Invisible label created for the item. |

Example

The following example demonstrates how to use `APEX_ITEM.DATE_POPUP` to create popup calendar buttons for the `hiredate` column.

```
SELECT
    empno,
    APEX_ITEM.HIDDEN(1,empno)||
    APEX_ITEM.TEXT(2,ename) ename,
    APEX_ITEM.TEXT(3,job) job,
    mgr,
    APEX_ITEM.DATE_POPUP(4,rownum,hiredate,'dd-mon-yyyy') hd,
    APEX_ITEM.TEXT(5,sal) sal,
    APEX_ITEM.TEXT(6,comm) comm,
    deptno
FROM emp
ORDER BY 1
```

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=SQLRF-GUID-049B7AE8-11E1-4110-B3E4-D117907D77AC" target="_blank">Oracle Database SQL Language Reference</a> for more information about the `TO_CHAR` or `TO_DATE` functions

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.3 DATE_POPUP2 Function

Use this function with forms that include date fields. The DATE_POPUP2 function dynamically generates a date field that has a jQuery based popup calendar with button.

Syntax

```
APEX_ITEM.DATE_POPUP2 (
    p_idx                   IN NUMBER,
    p_value                 IN DATE     DEFAULT NULL,
    p_date_format           IN VARCHAR2 DEFAULT NULL,
    p_size                  IN NUMBER   DEFAULT 20,
    p_maxLength             IN NUMBER   DEFAULT 2000,
    p_attributes            IN VARCHAR2 DEFAULT NULL,
    p_item_id               IN VARCHAR2 DEFAULT NULL,
    p_item_label            IN VARCHAR2 DEFAULT NULL,
    p_default_value         IN VARCHAR2 DEFAULT NULL,
    p_max_value             IN VARCHAR2 DEFAULT NULL,
    p_min_value             IN VARCHAR2 DEFAULT NULL,
    p_show_on               IN VARCHAR2 DEFAULT 'button',
    p_number_of_months      IN VARCHAR2 DEFAULT NULL,
    p_navigation_list_for   IN VARCHAR2 DEFAULT 'none',
    p_year_range            IN VARCHAR2 DEFAULT NULL,
    p_validation_date       IN VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Number that determines which APEX_APPLICATION global variable is used. Valid range of values is 1 to 50. For example, 1 creates F01 and 2 creates F02. |
| `p_value` | Value of a field item. |
| `p_date_format` | Valid database date format. |
| `p_size` | Controls HTML tag attributes (such as disabled). |
| `p_maxlength` | Determines the maximum number of enterable characters. Becomes the maxlength attribute of the `<input>` HTML tag. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_item_id` | HTML attribute ID for the `<input>` tag. |
| `p_item_label` | Invisible label created for the item. |
| `p_default_value` | The default date which should be selected in datepicker calendar popup. |
| `p_max_value` | The Maximum date that can be selected from the datepicker. |
| `p_min_value` | The Minimum date that can be selected from the datepicker. |
| `p_show_on` | Determines when the datepicker displays, on button click or on focus of the item or both. |
| `p_number_of_months` | Determines number of months displayed. Value should be in this array format: `[row,column]` |
| `p_navigation_list_for` | Determines if a select list is displayed for Changing Month, Year, or Both. Possible values include: `MONTH`, `YEAR`, `MONTH_AND_YEAR`. Default NULL. |
| `p_year_range` | The range of years displayed in the year selection list. |
| `p_validation_date` | Used to store the Date value for the which date validation failed. |

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=SQLRF-GUID-049B7AE8-11E1-4110-B3E4-D117907D77AC" target="_blank">Oracle Database SQL Language Reference</a> for information about the `TO_CHAR` or `TO_DATE` functions

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.4 DISPLAY_AND_SAVE Function

Use this function to display an item as text, but save its value to session state.

Syntax

```
APEX_ITEM.DISPLAY_AND_SAVE (
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Number that determines which `APEX_APPLICATION` global variable is used.Valid range of values is 1 to 50. For example, 1 creates `F01` and 2 creates `F02`. |
| `p_value` | Current value. |
| `p_item_id` | HTML attribute ID for the `` tag. |
| `p_item_label` | Invisible label created for the item. |

Example

The following example demonstrates how to use the `APEX_ITEM.DISPLAY_AND_SAVE` function.

```
SELECT APEX_ITEM.DISPLAY_AND_SAVE(10,empno) c FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.5 HIDDEN Function

This function dynamically generates hidden form items.

Syntax

```
APEX_ITEM.HIDDEN (
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT
    p_attributes  IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL )
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
<th id="d165102e74" style="text-align: left;" data-valign="bottom" width="41%">Parameter</th>
<th id="d165102e76" style="text-align: left;" data-valign="bottom" width="59%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d165102e80" style="text-align: left;" data-valign="top" width="41%" headers="d165102e74 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d165102e80 d165102e76 "><p>Number to identify the item you want to generate. The number determines which <code class="codeph">G_FXX</code> global is populated</p>
<p>See also <a href="APEX_APPLICATION.html#GUID-46D9B879-3180-480D-B5D6-54AABDD146F6">APEX_APPLICATION</a>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165102e95" style="text-align: left;" data-valign="top" width="41%" headers="d165102e74 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d165102e95 d165102e76 ">Value of the hidden input form item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165102e101" style="text-align: left;" data-valign="top" width="41%" headers="d165102e74 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d165102e101 d165102e76 ">Extra HTML parameters you want to add.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165102e107" style="text-align: left;" data-valign="top" width="41%" headers="d165102e74 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d165102e107 d165102e76 ">HTML attribute ID for the <code class="codeph">&lt;input&gt;</code> tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165102e116" style="text-align: left;" data-valign="top" width="41%" headers="d165102e74 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d165102e116 d165102e76 ">Invisible label created for the item.</td>
</tr>
</tbody>
</table>

Example

Typically, the primary key of a table is stored as a hidden column and used for subsequent update processing, for example:

```
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

The previous query could use the following page process to process the results:

```
BEGIN
    FOR i IN 1..APEX_APPLICATION.G_F01.COUNT LOOP
        UPDATE emp
            SET
                ename=APEX_APPLICATION.G_F02(i),
                job=APEX_APPLICATION.G_F03(i),
                    hiredate=to_date(APEX_APPLICATION.G_F04(i),'dd-mon-yyyy'),
                    sal=APEX_APPLICATION.G_F05(i),
                    comm=APEX_APPLICATION.G_F06(i)
        WHERE empno=to_number(APEX_APPLICATION.G_F01(i));
    END LOOP;
END;
```

Note that the `G_F01` column (which corresponds to the hidden `EMPNO`) is used as the key to update each row.

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.6 MD5_CHECKSUM Function

Use this function for lost update detection. Lost update detection ensures data integrity in applications where data can be accessed concurrently.

This function produces hidden form fields with a name attribute equal to `fcs` and as value a MD5 checksum based on up to 50 inputs. APEX_ITEM.MD5_CHECKSUM also produces an MD5 checksum using Oracle Database DBMS_CRYPTO:

```
DBMS_CRYPTO.HASH (
    SRC => UTL_RAW.CAST_TO_RAW('my_string'),
    TYP => DBMS_CRYPTO.HASH_MD5 );
```

An MD5 checksum provides data integrity through hashing and sequencing to ensure that data is not altered or stolen as it is transmitted over a network.

Syntax

```
APEX_ITEM.MD5_CHECKSUM (
    p_value01   IN    VARCHAR2 DEFAULT NULL,
    p_value02   IN    VARCHAR2 DEFAULT NULL,
    p_value03   IN    VARCHAR2 DEFAULT NULL,
    ...
    p_value50   IN    VARCHAR2 DEFAULT NULL,
    p_col_sep   IN    VARCHAR2 DEFAULT '|',
    p_item_id   IN    VARCHAR2 DEFAULT NULL )
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
<th id="d165420e83" style="text-align: left;" data-valign="bottom" width="36%">Parameter</th>
<th id="d165420e85" style="text-align: left;" data-valign="bottom" width="64%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d165420e89" style="text-align: left;" data-valign="top" width="36%" headers="d165420e83 "><p><code class="codeph">p_value01</code></p>
<p><code class="codeph">...</code></p>
<p><code class="codeph">p_value50</code></p></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d165420e89 d165420e85 ">Fifty available inputs. If no parameters are supplied, defaults to NULL.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165420e102" style="text-align: left;" data-valign="top" width="36%" headers="d165420e83 "><code class="codeph">p_col_sep</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d165420e102 d165420e85 ">String used to separate <code class="codeph">p_value</code> inputs. Defaults to | (pipe symbol).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165420e111" style="text-align: left;" data-valign="top" width="36%" headers="d165420e83 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="64%" headers="d165420e111 d165420e85 ">ID of the HTML form item.</td>
</tr>
</tbody>
</table>

Example

This function generates hidden form elements with the name `fcs`. The values can subsequently be accessed by using the `APEX_APPLICATION.G_FCS array`.

```
SELECT APEX_ITEM.MD5_CHECKSUM(ename,job,sal) md5_cks,
       ename, job, sal
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.7 MD5_HIDDEN Function

Use this function for lost update detection. Lost update detection ensures data integrity in applications where data can be accessed concurrently.

This function produces a hidden form field with a MD5 checksum as value which is based on up to 50 inputs. `APEX_ITEM`.`MD5_HIDDEN` also produces an MD5 checksum using Oracle database `DBMS_CRYPTO`:

```
UTL_RAW.CAST_TO_RAW(DBMS_CRYPTO.MD5())
```

An MD5 checksum provides data integrity through hashing and sequencing to ensure that data is not altered or stolen as it is transmitted over a network.

Syntax

```
APEX_ITEM.MD5_HIDDEN (
    p_idx       IN    NUMBER,
    p_value01   IN    VARCHAR2 DEFAULT NULL,
    p_value02   IN    VARCHAR2 DEFAULT NULL,
    p_value03   IN    VARCHAR2 DEFAULT NULL,
    ...
    p_value50   IN    VARCHAR2 DEFAULT NULL,
    p_col_sep   IN    VARCHAR2 DEFAULT '|',
    p_item_id   IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Indicates the form element to be generated. For example, 1 equals `F01` and 2 equals `F02`. Typically the `p_idx` parameter is constant for a given column. |
| `p_value01...50` | Fifty available inputs. Parameters not supplied default to NULL. |
| `p_col_sep` | String used to separate `p_value` inputs. Defaults to the pipe symbol ( \| ). |
| `p_item_id` | ID of the HTML form item. |

Example

The `p_idx` parameter specifies the FXX form element to be generated. In the following example, 7 generates `F07`. Also note that an HTML hidden form element is generated.

```
SELECT APEX_ITEM.MD5_HIDDEN(7,ename,job,sal)md5_h, ename, job, sal
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.8 POPUP_FROM_LOV Function

This function generates an HTML popup select list from an application shared list of values (LOV). Like other available functions in the `APEX_ITEM` package, `POPUP_FROM_LOV` function is designed to generate forms with `F01` to `F50` form array elements.

Syntax

```
APEX_ITEM.POPUP_FROM_LOV (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_lov_name         IN    VARCHAR2,
    p_width            IN    VARCHAR2 DEFAULT NULL,
    p_max_length       IN    VARCHAR2 DEFAULT NULL,
    p_form_index       IN    VARCHAR2 DEFAULT '0',
    p_escape_html      IN    VARCHAR2 DEFAULT NULL,
    p_max_elements     IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_ok_to_query      IN    VARCHAR2 DEFAULT 'YES',
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
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
<th id="d165950e86" style="text-align: left;" data-valign="bottom" width="30%">Parameter</th>
<th id="d165950e88" style="text-align: left;" data-valign="bottom" width="70%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d165950e92" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e92 d165950e88 ">Form element name. For example, <code class="codeph">1</code> equals <code class="codeph">F01</code> and <code class="codeph">2</code> equals <code class="codeph">F02</code>. Typically, <code class="codeph">p_idx</code> is a constant for a given column.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e113" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e113 d165950e88 ">Form element current value. This value should be one of the values in the <code class="codeph">p_lov_name</code> parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e122" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_lov_name</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e122 d165950e88 ">Named LOV used for this popup.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e128" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_width</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e128 d165950e88 ">Width of the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e134" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_max_length</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e134 d165950e88 ">Maximum number of characters that can be entered in the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e140" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_form_index</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e140 d165950e88 "><p>HTML form on the page in which an item is contained. Defaults to 0 (rarely used).</p>
<p>Only use this parameter when it is necessary to embed a custom form in your page template (such as a search field that posts to a different website). If this form comes before the <code class="codeph">#FORM_OPEN#</code> substitution string, then its index is zero and the form opened automatically by Oracle APEX must be referenced as form 1. This functionality supports the JavaScript used in the popup LOV that passes a value back to a form element.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e155" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_escape_html</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e155 d165950e88 "><p>Replacements for special characters that require an escaped equivalent:</p>
<ul>
<li><code class="codeph">&amp;lt;</code> for <code class="codeph">&lt;</code></li>
<li><code class="codeph">&amp;gt;</code> for <code class="codeph">&gt;</code></li>
<li><code class="codeph">&amp;amp;</code> for <code class="codeph">&amp;</code></li>
</ul>
<p>Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>. If <code class="codeph">YES</code>, special characters are escaped. This parameter is useful if you know your query returns invalid HTML.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e192" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_max_elements</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e192 d165950e88 ">Limit on the number of rows that can be returned by your query. Limits the performance impact of user searches. By entering a value in this parameter, you force the user to search for a narrower set of results.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e198" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e198 d165950e88 ">Additional HTML attributes to use for the form item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e204" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_ok_to_query</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e204 d165950e88 ">Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>. If <code class="codeph">YES</code>, a popup returns first set of rows for the LOV. If <code class="codeph">NO</code>, a search is initiated to return rows.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e222" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e222 d165950e88 ">ID attribute of the form element.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d165950e229" style="text-align: left;" data-valign="top" width="30%" headers="d165950e86 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d165950e229 d165950e88 ">Invisible label created for the item.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates a sample query the generates a popup from an LOV named `DEPT_LOV`.

```
SELECT APEX_ITEM.POPUP_FROM_LOV (1,deptno,'DEPT_LOV') dt
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.9 POPUP_FROM_QUERY Function

Generates an HTML popup select list from a query. This function is designed to generate forms with `F01` to `F50` form array elements.

Syntax

```
APEX_ITEM.POPUP_FROM_QUERY (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_lov_query        IN    VARCHAR2,
    p_width            IN    VARCHAR2 DEFAULT NULL,
    p_max_length       IN    VARCHAR2 DEFAULT NULL,
    p_form_index       IN    VARCHAR2 DEFAULT '0',
    p_escape_html      IN    VARCHAR2 DEFAULT NULL,
    p_max_elements     IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_ok_to_query      IN    VARCHAR2 DEFAULT 'YES',
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
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
<th id="d166604e80" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d166604e82" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d166604e86" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e86 d166604e82 ">Form element name. For example, <code class="codeph">1</code> equals <code class="codeph">F01</code> and <code class="codeph">2</code> equals <code class="codeph">F02</code>. Typically, <code class="codeph">p_idx</code> is a constant for a given column.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e107" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e107 d166604e82 ">Form element current value. This value should be one of the values in the <code class="codeph">p_lov_query</code> parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e116" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_lov_query</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e116 d166604e82 "><p>SQL query that is expected to select two columns (a display column and a return column). For example:</p>
<pre class="pre codeblock"><code>SELECT dname, deptno FROM dept</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e125" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_width</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e125 d166604e82 ">Width of the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e131" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_max_length</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e131 d166604e82 ">Maximum number of characters that can be entered in the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e137" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_form_index</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e137 d166604e82 "><p>HTML form on the page in which an item is contained. Defaults to 0 and rarely used.</p>
<p>Only use this parameter when it is necessary to embed a custom form in your page template (such as a search field that posts to a different website). If this form comes before the <code class="codeph">#FORM_OPEN#</code> substitution string, then its index is zero and the form opened automatically by Oracle APEX must be referenced as form 1. This functionality supports the JavaScript used in the popup LOV that passes a value back to a form element.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e152" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_escape_html</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e152 d166604e82 "><p>Replacements for special characters that require an escaped equivalent.</p>
<ul>
<li><code class="codeph">&amp;lt;</code> for <code class="codeph">&lt;</code></li>
<li><code class="codeph">&amp;gt;</code> for <code class="codeph">&gt;</code></li>
<li><code class="codeph">&amp;amp;</code> for <code class="codeph">&amp;</code></li>
</ul>
<p>Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>. If <code class="codeph">YES</code>, special characters are escaped. This parameter is useful if you know your query returns invalid HTML.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e189" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_max_elements</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e189 d166604e82 ">Limit on the number of rows that can be returned by your query. Limits the performance impact of user searches. By entering a value in this parameter, you force the user to search for a narrower set of results.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e195" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e195 d166604e82 ">Additional HTML attributes to use for the form item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e201" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_ok_to_query</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e201 d166604e82 ">Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>. If <code class="codeph">YES</code>, a popup returns the first set of rows for the LOV. If <code class="codeph">NO</code>, a search is initiated to return rows.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e219" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e219 d166604e82 ">ID attribute of the form element.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d166604e226" style="text-align: left;" data-valign="top" width="31%" headers="d166604e80 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d166604e226 d166604e82 ">Invisible label created for the item.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates a sample query the generates a popup select list from the `emp` table.

```
SELECT APEX_ITEM.POPUP_FROM_QUERY (1,deptno,'SELECT dname, deptno FROM dept') dt
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.10 POPUPKEY_FROM_LOV Function

This function generates a popup key select list from a shared list of values (LOV). Similar to other available functions in the `APEX_ITEM` package, the `POPUPKEY_FROM_LOV` function is designed to generate forms with `F01` to `F50` form array elements.

Syntax

```
APEX_ITEM.POPUPKEY_FROM_LOV (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_lov_name         IN    VARCHAR2,
    p_width            IN    VARCHAR2 DEFAULT NULL,
    p_max_length       IN    VARCHAR2 DEFAULT NULL,
    p_form_index       IN    VARCHAR2 DEFAULT '0',
    p_escape_html      IN    VARCHAR2 DEFAULT NULL,
    p_max_elements     IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_ok_to_query      IN    VARCHAR2 DEFAULT 'YES',
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Although the text field associated with the popup displays in the first column in the LOV query, the actual value is specified in the second column in the query.

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d167258e88" style="text-align: left;" data-valign="bottom" width="25%">Parameter</th>
<th id="d167258e90" style="text-align: left;" data-valign="bottom" width="75%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d167258e94" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e94 d167258e90 "><p>Identifies a form element name. For example, <code class="codeph">1</code> equals <code class="codeph">F01</code> and <code class="codeph">2</code> equals <code class="codeph">F02</code>. Typically, <code class="codeph">p_idx</code> is a constant for a given column</p>
<p>Because of the behavior of <code class="codeph">POPUPKEY_FROM_QUERY</code>, the next index value should be <code class="codeph">p_idx + 1</code>. For example:</p>
<pre class="pre codeblock"><code>SELECT APEX_ITEM.POPUPKEY_FROM_LOV (1,deptno,&#39;DEPT&#39;) dt,
    APEX_ITEM.HIDDEN(3,empno) eno
    FROM emp;</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e126" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e126 d167258e90 ">Indicates the current value. This value should be one of the values in the <code class="codeph">P_LOV_NAME</code> parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e135" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_lov_name</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e135 d167258e90 ">Identifies a named LOV used for this popup.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e141" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_width</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e141 d167258e90 ">Width of the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e147" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_max_length</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e147 d167258e90 ">Maximum number of characters that can be entered in the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e153" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_form_index</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e153 d167258e90 "><p>HTML form on the page in which an item is contained. Defaults to 0 and rarely used.</p>
<p>Only use this parameter when it is necessary to embed a custom form in your page template (such as a search field that posts to a different website). If this form comes before the <code class="codeph">#FORM_OPEN#</code> substitution string, then its index is zero and the form opened automatically by APEX must be referenced as form 1. This functionality supports the JavaScript used in the popup LOV that passes a value back to a form element.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e168" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_escape_html</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e168 d167258e90 "><p>Replacements for special characters that require an escaped equivalent.</p>
<ul>
<li><code class="codeph">&amp;lt;</code> for <code class="codeph">&lt;</code></li>
<li><code class="codeph">&amp;gt;</code> for <code class="codeph">&gt;</code></li>
<li><code class="codeph">&amp;amp;</code> for <code class="codeph">&amp;</code></li>
</ul>
<p>This parameter is useful if you know your query returns invalid HTML.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e196" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_max_elements</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e196 d167258e90 ">Limit on the number of rows that can be returned by your query. Limits the performance impact of user searches. By entering a value in this parameter, you force the user to search for a narrower set of results.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e202" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e202 d167258e90 ">Additional HTML attributes to use for the form item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e208" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_ok_to_query</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e208 d167258e90 ">Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>. If <code class="codeph">YES</code>, a popup returns the first set of rows for the LOV. If <code class="codeph">NO</code>, a search is initiated to return rows.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e226" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e226 d167258e90 ">HTML attribute ID for the &lt;input&gt; tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167258e233" style="text-align: left;" data-valign="top" width="25%" headers="d167258e88 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167258e233 d167258e90 ">Invisible label created for the item.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to generate a popup key select list from a shared list of values (LOV).

```
SELECT APEX_ITEM.POPUPKEY_FROM_LOV (1,deptno,'DEPT') dt
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.11 POPUPKEY_FROM_QUERY Function

This function generates a popup key select list from a SQL query. Similar to other available functions in the `APEX_ITEM` package, the `POPUPKEY_FROM_QUERY` function is designed to generate forms with `F01` to `F50` form array elements.

Syntax

```
APEX_ITEM.POPUPKEY_FROM_QUERY (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_lov_query        IN    VARCHAR2,
    p_width            IN    VARCHAR2 DEFAULT NULL,
    p_max_length       IN    VARCHAR2 DEFAULT NULL,
    p_form_index       IN    VARCHAR2 DEFAULT '0',
    p_escape_html      IN    VARCHAR2 DEFAULT NULL,
    p_max_elements     IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_ok_to_query      IN    VARCHAR2 DEFAULT 'YES',
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
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
<th id="d167918e86" style="text-align: left;" data-valign="bottom" width="25%">Parameter</th>
<th id="d167918e88" style="text-align: left;" data-valign="bottom" width="75%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d167918e92" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e92 d167918e88 "><p>Form element name. For example, <code class="codeph">1</code> equals <code class="codeph">F01</code> and <code class="codeph">2</code> equals <code class="codeph">F02</code>. Typically, <code class="codeph">p_idx</code> is a constant for a given column.</p>
<p>Because of the behavior of <code class="codeph">POPUPKEY_FROM_QUERY</code>, the next index value should be <code class="codeph">p_idx + 1</code>. For example:</p>
<pre class="pre codeblock"><code>SELECT APEX_ITEM.POPUPKEY_FROM_QUERY (1,deptno,&#39;SELECT dname, deptno FROM dept&#39;) dt,
APEX_ITEM.HIDDEN(3,empno) eno</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e124" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e124 d167918e88 ">Form element current value. This value should be one of the values in the <code class="codeph">P_LOV_QUERY</code> parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e133" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_lov_query</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e133 d167918e88 ">LOV query used for this popup.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e139" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_width</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e139 d167918e88 ">Width of the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e145" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_max_length</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e145 d167918e88 ">Maximum number of characters that can be entered in the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e151" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_form_index</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e151 d167918e88 "><p>HTML form on the page in which an item is contained. Defaults to 0 and rarely used.</p>
<p>Only use this parameter when it is necessary to embed a custom form in your page template (such as a search field that posts to a different website). If this form comes before the <code class="codeph">#FORM_OPEN#</code> substitution string, then its index is zero and the form opened automatically by Oracle APEX must be referenced as form 1. This functionality supports the JavaScript used in the popup LOV that passes a value back to a form element.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e166" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_escape_html</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e166 d167918e88 "><p>Replacements for special characters that require an escaped equivalent.</p>
<ul>
<li><code class="codeph">&amp;lt;</code> for <code class="codeph">&lt;</code></li>
<li><code class="codeph">&amp;gt;</code> for <code class="codeph">&gt;</code></li>
<li><code class="codeph">&amp;amp;</code> for <code class="codeph">&amp;</code></li>
</ul>
<p>This parameter is useful if you know your query returns illegal HTML.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e194" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_max_elements</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e194 d167918e88 ">Limit on the number of rows that can be returned by your query. Limits the performance impact of user searches. By entering a value in this parameter, you force the user to search for a narrower set of results.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e200" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e200 d167918e88 ">Additional HTML attributes to use for the form item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e206" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_ok_to_query</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e206 d167918e88 ">Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>. If <code class="codeph">YES</code>, a popup returns first set of rows for the LOV. If <code class="codeph">NO</code>, a search is initiated to return rows.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e224" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e224 d167918e88 ">ID attribute of the form element.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d167918e231" style="text-align: left;" data-valign="top" width="25%" headers="d167918e86 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d167918e231 d167918e88 ">Invisible label created for the item.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to generate a popup select list from a SQL query.

```
SELECT APEX_ITEM.POPUPKEY_FROM_QUERY (1,deptno,'SELECT dname, deptno FROM dept') dt
          apex_item.hidden(3,empno) eno
          FROM emp;
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.12 RADIOGROUP Function

This function generates a radio group from a SQL query.

Syntax

```
APEX_ITEM.RADIOGROUP (
    p_idx              IN    NUMBER,
    p_value            IN    VARCHAR2 DEFAULT NULL,
    p_selected_value   IN    VARCHAR2 DEFAULT NULL,
    p_display          IN    VARCHAR2 DEFAULT NULL,
    p_attributes       IN    VARCHAR2 DEFAULT NULL,
    p_onblur           IN    VARCHAR2 DEFAULT NULL,
    p_onchange         IN    VARCHAR2 DEFAULT NULL,
    p_onfocus          IN    VARCHAR2 DEFAULT NULL,
    p_item_id          IN    VARCHAR2 DEFAULT NULL,
    p_item_label       IN    VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Number that determines which `APEX_APPLICATION` global variable is used. Valid range of values is `1` to `50`.For example `1 `creates `F01` and `2` creates `F02`. |
| `p_value` | Value of the radio group. |
| `p_selected_value` | Value that should be selected. |
| `p_display` | Text to display next to the radio option. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_onblur` | JavaScript to execute in the `onBlur` event. |
| `p_onchange` | JavaScript to execute in the `onChange` event. |
| `p_onfocus` | JavaScript to execute in the `onFocus` event. |
| `p_item_id` | HTML attribute ID for the \<input\> tag. |
| `p_item_label` | Invisible label created for the item. |

Example

The following example demonstrates how to select department `20` from the `dept` table as a default in a radio group.

```
SELECT APEX_ITEM.RADIOGROUP (1,deptno,'20',dname) dt
FROM   dept
ORDER  BY 1
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.13 SELECT_LIST Function

This function dynamically generates a static select list. This function is designed to generate forms with `F01` to `F50` form array elements.

Syntax

```
APEX_ITEM.SELECT_LIST (
    p_idx           IN   NUMBER,
    p_value         IN   VARCHAR2 DEFAULT NULL,
    p_list_values   IN   VARCHAR2 DEFAULT NULL,
    p_attributes    IN   VARCHAR2 DEFAULT NULL,
    p_show_null     IN   VARCHAR2 DEFAULT 'NO',
    p_null_value    IN   VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN   VARCHAR2 DEFAULT '%',
    p_item_id       IN   VARCHAR2 DEFAULT NULL,
    p_item_label    IN   VARCHAR2 DEFAULT NULL,
    p_show_extra    IN   VARCHAR2 DEFAULT 'YES' )
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
<th id="d169087e80" style="text-align: left;" data-valign="bottom" width="21%">Parameter</th>
<th id="d169087e82" style="text-align: left;" data-valign="bottom" width="79%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d169087e86" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e86 d169087e82 ">Form element name. For example, <code class="codeph">1</code> equals <code class="codeph">F01</code> and <code class="codeph">2</code> equals <code class="codeph">F02</code>. Typically the <code class="codeph">P_IDX</code> parameter is constant for a given column.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e107" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e107 d169087e82 ">Current value. This value should be a value in the <code class="codeph">P_LIST_VALUES</code> parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e116" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_list_values</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e116 d169087e82 "><p>List of static values separated by commas. Displays values and returns values that are separated by semicolons.</p>
<p>Note that this is only available in the <code class="codeph">SELECT_LIST</code> function.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e128" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e128 d169087e82 ">Extra HTML parameters you want to add.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e134" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_show_null</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e134 d169087e82 ">Extra select option to enable the NULL selection. Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e146" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_null_value</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e146 d169087e82 ">Value to be returned when a user selects the NULL option. Only relevant when <code class="codeph">p_show_null</code> equals <code class="codeph">YES</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e158" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_null_text</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e158 d169087e82 ">Value to be displayed when a user selects the NULL option. Only relevant when <code class="codeph">p_show_null</code> equals <code class="codeph">YES</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e170" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e170 d169087e82 ">HTML attribute ID for the &lt;<code class="codeph">input</code>&gt; tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e179" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e179 d169087e82 ">Invisible label created for the item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d169087e185" style="text-align: left;" data-valign="top" width="21%" headers="d169087e80 "><code class="codeph">p_show_extra</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d169087e185 d169087e82 ">Shows the current value even if the value of p_value is not located in the select list.</td>
</tr>
</tbody>
</table>

Example 1

The following example demonstrates a static select list that displays `Yes`, returns `Y`, defaults to `Y`, and generates a `F01` form item.

```
SELECT APEX_ITEM.SELECT_LIST(1,'Y','Yes;Y,No;N')yn
FROM emp
```

Example 2

The following example generates a static select list where:

- A form array element `F03` is generated (`p_idx` parameter).
- The initial value for each element is equal to the value for `deptno` for the row from `emp` (`p_value` parameter).
- The select list contains 4 options (`p_list_values` parameter).
- The text within the select list displays in red (`p_attributes` parameter).
- A null option is displayed (`p_show_null`) and this option displays `-Select-` as the text (`p_null_text` parameter).
- An HTML ID attribute is generated for each row, where `#ROWNUM# `is substituted for the current row `rownum` (`p_item_id` parameter). (So an ID of '`f03_4`' is generated for row 4.)
- A HTML label element is generated for each row (`p_item_label` parameter).
- The current value for `deptno` is displayed, even if it is not contained with the list of values passed in the `p_list_values` parameter (`p_show_extra` parameter).

```
SELECT  empno "Employee #",
    ename "Name",
    APEX_ITEM.SELECT_LIST(
        p_idx           =>   3,
        p_value         =>   deptno,
        p_list_values   =>   'ACCOUNTING;10,RESEARCH;20,SALES;30,OPERATIONS;40',
        p_attributes    =>   'style="color:red;"',
        p_show_null     =>   'YES',
        p_null_value    =>   NULL,
        p_null_text     =>   '-Select-',
        p_item_id       =>   'f03_#ROWNUM#',
        p_item_label    =>   'Label for f03_#ROWNUM#',
        p_show_extra    =>   'YES') "Department"
    FROM  emp;
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.14 SELECT_LIST_FROM_LOV Function

This function dynamically generates select lists from a shared list of values (LOV). Similar to other functions available in the `APEX_ITEM` package, these select list functions are designed to generate forms with `F01` to `F50` form array elements.

This function is the same as `SELECT_LIST_FROM_LOV_XL`, but its return value is `VARCHAR2`. Returned values are limited to 32k.

Syntax

```
APEX_ITEM.SELECT_LIST_FROM_LOV (
    p_idx           IN   NUMBER,
    p_value         IN   VARCHAR2 DEFAULT NULL,
    p_lov           IN   VARCHAR2,
    p_attributes    IN   VARCHAR2 DEFAULT NULL,
    p_show_null     IN   VARCHAR2 DEFAULT 'YES',
    p_null_value    IN   VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN   VARCHAR2 DEFAULT '%',
    p_item_id       IN   VARCHAR2 DEFAULT NULL,
    p_item_label    IN   VARCHAR2 DEFAULT NULL,
    p_show_extra    IN   VARCHAR2 DEFAULT 'YES' )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Form element name. For example, `1` equals `F01` and `2` equals `F02`. Typically, the `p_idx` parameter is constant for a given column. |
| `p_value` | Current value. This value should be a value in the `p_lov` parameter. |
| `p_lov` | Text name of an application list of values. This list of values must be defined in your application. This parameter is used only by the `select_list_from_lov` function. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_show_null` | Extra select option to enable the NULL selection. Range of values is `YES` and `NO`. |
| `p_null_value` | Value to be returned when a user selects the NULL option. Only relevant when `p_show_null` equals `YES`. |
| `p_null_text` | Value to be displayed when a user selects the NULL option. Only relevant when `p_show_null` equals `YES`. |
| `p_item_id` | HTML attribute ID for the `<select>` tag. |
| `p_item_label` | Invisible label created for the item. |
| `p_show_extra` | Shows the current value even if the value of `p_value` is not located in the select list. |

Example

The following example demonstrates a select list based on an LOV defined in the application.

```
SELECT APEX_ITEM.SELECT_LIST_FROM_LOV(2,job,'JOB_FLOW_LOV')job
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.15 SELECT_LIST_FROM_LOV_XL Function

This function dynamically generates very large select lists (greater than 32K) from a shared list of values (LOV). Use this function in SQL queries where you need to handle a column value longer than 4000 characters.

Similar to other functions available in the `APEX_ITEM` package, these select list functions are designed to generate forms with `F01` to `F50` form array elements.

This function is the same as `SELECT_LIST_FROM_LOV`, but its return value is CLOB.

Syntax

```
APEX_ITEM.SELECT_LIST_FROM_LOV_XL (
    p_idx           IN   NUMBER,
    p_value         IN   VARCHAR2 DEFAULT NULL,
    p_lov           IN   VARCHAR2,
    p_attributes    IN   VARCHAR2 DEFAULT NULL,
    p_show_null     IN   VARCHAR2 DEFAULT 'YES',
    p_null_value    IN   VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN   VARCHAR2 DEFAULT '%',
    p_item_id       IN   VARCHAR2 DEFAULT NULL,
    p_item_label    IN   VARCHAR2 DEFAULT NULL,
    p_show_extra    IN   VARCHAR2 DEFAULT 'YES' )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Form element name. For example, `1` equals `F01` and `2` equals `F02`. Typically, the `p_idx` parameter is constant for a given column. |
| `p_value` | Current value. This value should be a value in the `p_lov` parameter. |
| `p_lov` | Text name of a list of values. This list of values must be defined in your application. This parameter is used only by the `select_list_from_lov` function. |
| `p_attributes` | Extra HTML parameters you want to add. |
| `p_show_null` | Extra select option to enable the NULL selection. Range of values is `YES` and `NO`. |
| `p_null_value` | Value to be returned when a user selects the NULL option. Only relevant when `p_show_null` equals `YES`. |
| `p_null_text` | Value to be displayed when a user selects the NULL option. Only relevant when `p_show_null` equals `YES`. |
| `p_item_id` | HTML attribute ID for the `<select>` tag. |
| `p_item_label` | Invisible label created for the item. |
| `p_show_extra` | Shows the current value even if the value of `p_value` is not located in the select list. |

Example

The following example demonstrates how to create a select list based on an LOV defined in the application.

```
SELECT APEX_ITEM.SELECT_LIST_FROM_LOV_XL(2,job,'JOB_FLOW_LOV')job
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.16 SELECT_LIST_FROM_QUERY Function

This function dynamically generates a select list from a query. Similar to other functions available in the `APEX_ITEM` package, these select list functions are designed to generate forms with `F01` to `F50` form array elements.

Syntax

```
APEX_ITEM.SELECT_LIST_FROM_QUERY (
    p_idx           IN    NUMBER,
    p_value         IN    VARCHAR2 DEFAULT NULL,
    p_query         IN    VARCHAR2,
    p_attributes    IN    VARCHAR2 DEFAULT NULL,
    p_show_null     IN    VARCHAR2 DEFAULT 'YES',
    p_null_value    IN    VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN    VARCHAR2 DEFAULT '%',
    p_item_id       IN    VARCHAR2 DEFAULT NULL,
    p_item_label    IN    VARCHAR2 DEFAULT NULL,
    p_show_extra    IN    VARCHAR2 DEFAULT 'YES' )
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
<th id="d170797e83" style="text-align: left;" data-valign="bottom" width="21%">Parameter</th>
<th id="d170797e85" style="text-align: left;" data-valign="bottom" width="79%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d170797e89" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e89 d170797e85 ">Form element name. For example, <code class="codeph">1</code> equals <code class="codeph">F01</code> and <code class="codeph">2</code> equals <code class="codeph">F02</code>. Typically, the <code class="codeph">p_idx</code> parameter is constant for a given column.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e110" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e110 d170797e85 ">Current value. This value should be a value in the <code class="codeph">p_query</code> parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e119" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_query</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e119 d170797e85 "><p>SQL query that is expected to select two columns, a display column, and a return column. For example:</p>
<pre class="oac_no_warn" dir="ltr"><code>SELECT dname, deptno FROM dept</code></pre>
<p>Note that this is used only by the <code class="codeph">SELECT_LIST_FROM_QUERY</code> function.</p>
<p>Also note, if only one column is specified in the select clause of this query, the value for this column is used for both display and return purposes.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e135" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e135 d170797e85 ">Extra HTML parameters you want to add.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e141" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_show_null</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e141 d170797e85 ">Extra select option to enable the NULL selection. Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e153" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_null_value</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e153 d170797e85 ">Value to be returned when a user selects the NULL option. Only relevant when <code class="codeph">p_show_null</code> equals <code class="codeph">YES</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e165" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_null_text</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e165 d170797e85 ">Value to be displayed when a user selects the NULL option. Only relevant when <code class="codeph">p_show_null</code> equals <code class="codeph">YES</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e177" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e177 d170797e85 ">HTML attribute ID for the <code class="codeph">&lt;select&gt;</code> tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e186" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e186 d170797e85 ">Invisible label created for the item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d170797e192" style="text-align: left;" data-valign="top" width="21%" headers="d170797e83 "><code class="codeph">p_show_extra</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d170797e192 d170797e85 ">Show the current value even if the value of <code class="codeph">p_value</code> is not located in the select list.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates a select list based on a SQL query.

```
SELECT APEX_ITEM.SELECT_LIST_FROM_QUERY(3,job,'SELECT DISTINCT job FROM emp')job
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.17 SELECT_LIST_FROM_QUERY_XL Function

This function is the same as `SELECT_LIST_FROM_QUERY`, but its return value is a CLOB. This allows its use in SQL queries where you need to handle a column value longer than 4000 characters. Returned values will be limited to 32K. Similar to other functions available in the `APEX_ITEM` package, these select list functions are designed to generate forms with `F01` to `F50` form array elements.

Syntax

```
APEX_ITEM.SELECT_LIST_FROM_QUERY_XL (
    p_idx           IN    NUMBER,
    p_value         IN    VARCHAR2 DEFAULT NULL,
    p_query         IN    VARCHAR2,
    p_attributes    IN    VARCHAR2 DEFAULT NULL,
    p_show_null     IN    VARCHAR2 DEFAULT 'YES',
    p_null_value    IN    VARCHAR2 DEFAULT '%NULL%',
    p_null_text     IN    VARCHAR2 DEFAULT '%',
    p_item_id       IN    VARCHAR2 DEFAULT NULL,
    p_item_label    IN    VARCHAR2 DEFAULT NULL,
    p_show_extra    IN    VARCHAR2 DEFAULT 'YES' )
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
<th id="d171339e86" style="text-align: left;" data-valign="bottom" width="21%">Parameter</th>
<th id="d171339e88" style="text-align: left;" data-valign="bottom" width="79%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d171339e92" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e92 d171339e88 ">Form element name. For example, <code class="codeph">1</code> equals <code class="codeph">F01</code> and <code class="codeph">2</code> equals <code class="codeph">F02</code>. Typically the <code class="codeph">p_idx</code> parameter is constant for a given column.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e113" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e113 d171339e88 ">Current value. This value should be a value in the <code class="codeph">p_query</code> parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e122" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_query</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e122 d171339e88 "><p>SQL query that is expected to select two columns, a display column, and a return column. For example:</p>
<pre class="pre codeblock"><code>SELECT dname, deptno FROM dept</code></pre>
<p>Note that this is used only by the <code class="codeph">SELECT_LIST_FROM_QUERY_XL</code> function.</p>
<p>Also note, if only one column is specified in the select clause of this query, the value for this column is used for both display and return purposes.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e138" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e138 d171339e88 ">Extra HTML parameters you want to add.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e144" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_show_null</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e144 d171339e88 ">Extra select option to enable the NULL selection. Range of values is <code class="codeph">YES</code> and <code class="codeph">NO</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e156" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_null_value</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e156 d171339e88 ">Value to be returned when a user selects the NULL option. Only relevant when <code class="codeph">p_show_null</code> equals <code class="codeph">YES</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e168" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_null_text</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e168 d171339e88 ">Value to be displayed when a user selects the NULL option. Only relevant when <code class="codeph">p_show_null</code> equals <code class="codeph">YES</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e180" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e180 d171339e88 ">HTML attribute ID for the <code class="codeph">&lt;select&gt;</code> tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e189" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e189 d171339e88 ">Invisible label created for the item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d171339e195" style="text-align: left;" data-valign="top" width="21%" headers="d171339e86 "><code class="codeph">p_show_extra</code></td>
<td style="text-align: left;" data-valign="top" width="79%" headers="d171339e195 d171339e88 ">Show the current value even if the value of <code class="codeph">p_value</code> is not located in the select list.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates a select list based on a SQL query.

```
SELECT APEX_ITEM.SELECT_LIST_FROM_QUERY_XL(3,job,'SELECT DISTINCT job FROM emp')job
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.18 SWITCH Function

This function dynamically generates flip toggle item. If On/Off value and label are not passed, it renders Yes/No toggle. This function is designed to generate forms with F01 to F50 form array elements.

Syntax

```
APEX_ITEM.SWITCH (
    p_idx           IN NUMBER,
    p_value         IN VARCHAR2,
    p_on_value      IN VARCHAR2 DEFAULT 'Y',
    p_on_label      IN VARCHAR2 DEFAULT 'Yes',
    p_off_value     IN VARCHAR2 DEFAULT 'N',
    p_off_label     IN VARCHAR2 DEFAULT 'No',
    p_item_id       IN VARCHAR2 DEFAULT NULL,
    p_item_label    IN VARCHAR2,
    p_attributes    IN VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_idx` | Form element name. For example, 1 equals F01 and 2 equals F02. Typically the `P_IDX` parameter is constant for a given column. |
| `p_value` | Form element current value. |
| `p_on_value` | The value of the item if the user picks On option. |
| `p_on_label` | The display text for the On option. |
| `p_off_value` | The value of the item if the user picks Off option. |
| `p_off_label` | The display text for the Off option. |
| `p_item_id` | HTML attribute ID for the \<input\> tag. Try concatenating some string with rownum to make it unique. |
| `p_item_label` | Invisible label created for the item. |
| `p_attributes` | Additional HTML attributes to use for the form item. |

Example

The following example demonstrates the use of `APEX_ITEM.SWITCH` to generate a Yes/No flip toggle item where:

- A form array element F01 will be generated (`p_idx` parameter).
- The initial value for each element will be equal to N `(p_value` parameter).
- A HTML ID attribute will be generated for each row with the current rownum to uniquely identify. (`p_item_id` parameter). An ID of `'IS_MANAGER_2'` is generated for row 2).
- A HTML label element will be generated for each row (`p_item_label` parameter).

```
SELECT
  ename "Name",
  APEX_ITEM.SWITCH (
       p_idx => 1,
       p_value => 'N',
   p_item_id => 'IS_MANAGER_'||rownum,
       p_item_label => apex_escape.html(ename)||': Is Manager' )
"Is Manager"
FROM emp;
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.19 TEXT Function

This function generates text fields (or text input form items) from a SQL query.

Syntax

```
APEX_ITEM.TEXT(
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_size        IN    NUMBER   DEFAULT NULL,
    p_maxlength   IN    NUMBER   DEFAULT NULL,
    p_attributes  IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL)
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
<th id="d172370e74" style="text-align: left;" data-valign="bottom" width="41%">Parameter</th>
<th id="d172370e76" style="text-align: left;" data-valign="bottom" width="59%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d172370e80" style="text-align: left;" data-valign="top" width="41%" headers="d172370e74 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172370e80 d172370e76 "><p>Number to identify the item you want to generate. The number determines which <code class="codeph">G_FXX</code> global is populated.</p>
<p>See also <a href="APEX_APPLICATION.html#GUID-46D9B879-3180-480D-B5D6-54AABDD146F6">APEX_APPLICATION</a>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172370e95" style="text-align: left;" data-valign="top" width="41%" headers="d172370e74 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172370e95 d172370e76 ">Value of a text field item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172370e101" style="text-align: left;" data-valign="top" width="41%" headers="d172370e74 "><code class="codeph">p_size</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172370e101 d172370e76 ">Controls HTML tag attributes (such as disabled).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172370e107" style="text-align: left;" data-valign="top" width="41%" headers="d172370e74 "><code class="codeph">p_maxlength</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172370e107 d172370e76 ">Maximum number of characters that can be entered in the text box.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172370e113" style="text-align: left;" data-valign="top" width="41%" headers="d172370e74 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172370e113 d172370e76 ">Extra HTML parameters you want to add.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172370e119" style="text-align: left;" data-valign="top" width="41%" headers="d172370e74 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172370e119 d172370e76 ">HTML attribute ID for the <code class="codeph">&lt;input&gt;</code> tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172370e128" style="text-align: left;" data-valign="top" width="41%" headers="d172370e74 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172370e128 d172370e76 ">Invisible label created for the item.</td>
</tr>
</tbody>
</table>

Example

The following sample query demonstrates how to generate one update field for each row. Note that the `ename`, `sal`, and `comm` columns use the `APEX_ITEM.TEXT` function to generate an HTML text field for each row. Note also that each item in the query is passed a unique `p_idx` parameter to ensure that each column is stored in its own array.

```
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

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.20 TEXTAREA Function

This function creates text areas.

Syntax

```
APEX_ITEM.TEXTAREA (
    p_idx         IN    NUMBER,
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_rows        IN    NUMBER   DEFAULT 40,
    p_cols        IN    NUMBER   DEFAULT 4,
    p_attributes  IN    VARCHAR2 DEFAULT NULL,
    p_item_id     IN    VARCHAR2 DEFAULT NULL,
    p_item_label  IN    VARCHAR2 DEFAULT NULL )
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
<th id="d172764e74" style="text-align: left;" data-valign="bottom" width="41%">Parameter</th>
<th id="d172764e76" style="text-align: left;" data-valign="bottom" width="59%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d172764e80" style="text-align: left;" data-valign="top" width="41%" headers="d172764e74 "><code class="codeph">p_idx</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172764e80 d172764e76 "><p>Number to identify the item you want to generate. The number determines which <code class="codeph">G_FXX</code> global is populated.</p>
<p>See also <a href="APEX_APPLICATION.html#GUID-46D9B879-3180-480D-B5D6-54AABDD146F6">APEX_APPLICATION</a>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172764e95" style="text-align: left;" data-valign="top" width="41%" headers="d172764e74 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172764e95 d172764e76 ">Value of the text area item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172764e101" style="text-align: left;" data-valign="top" width="41%" headers="d172764e74 "><code class="codeph">p_rows</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172764e101 d172764e76 ">Height of the text area (HTML rows attribute).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172764e107" style="text-align: left;" data-valign="top" width="41%" headers="d172764e74 "><code class="codeph">p_cols</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172764e107 d172764e76 ">Width of the text area (HTML column attribute).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172764e113" style="text-align: left;" data-valign="top" width="41%" headers="d172764e74 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172764e113 d172764e76 ">Extra HTML parameters you want to add.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172764e119" style="text-align: left;" data-valign="top" width="41%" headers="d172764e74 "><code class="codeph">p_item_id</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172764e119 d172764e76 ">HTML attribute ID for the <code class="codeph">&lt;textarea&gt;</code> tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d172764e128" style="text-align: left;" data-valign="top" width="41%" headers="d172764e74 "><code class="codeph">p_item_label</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d172764e128 d172764e76 ">Invisible label created for the item.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to create a text area based on a SQL query.

```
SELECT APEX_ITEM.TEXTAREA(3,ename,5,80) a
FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.21 TEXT_FROM_LOV Function

Displays an item as text, deriving the display value of the named LOV.

Syntax

```
APEX_ITEM.TEXT_FROM_LOV (
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_lov         IN    VARCHAR2,
    p_null_text   IN    VARCHAR2 DEFAULT '%' )
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
<th id="d173143e74" style="text-align: left;" data-valign="bottom" width="41%">Parameter</th>
<th id="d173143e76" style="text-align: left;" data-valign="bottom" width="59%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d173143e80" style="text-align: left;" data-valign="top" width="41%" headers="d173143e74 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d173143e80 d173143e76 "><p>Value of a field item.</p>
<p>Note that if <code class="codeph">p_value</code> is not located in the list of values, <code class="codeph">p_null_text</code> is displayed.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173143e95" style="text-align: left;" data-valign="top" width="41%" headers="d173143e74 "><code class="codeph">p_lov</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d173143e95 d173143e76 ">Text name of a shared list of values. This list of values must be defined in your application.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173143e101" style="text-align: left;" data-valign="top" width="41%" headers="d173143e74 "><code class="codeph">p_null_text</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d173143e101 d173143e76 ">Value displayed when the value of the field item is NULL.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to derive the display value from a named LOV (`EMPNO_ENAME_LOV`).

```
SELECT APEX_ITEM.TEXT_FROM_LOV(empno,'EMPNO_ENAME_LOV') c FROM emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)

------------------------------------------------------------------------

## 35.22 TEXT_FROM_LOV_QUERY Function

Display an item as text, deriving the display value from a list of values query.

Syntax

```
APEX_ITEM.TEXT_FROM_LOV_QUERY (
    p_value       IN    VARCHAR2 DEFAULT NULL,
    p_query       IN    VARCHAR2,
    p_null_text   IN    VARCHAR2 DEFAULT '%' )
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
<th id="d173368e74" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d173368e76" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d173368e80" style="text-align: left;" data-valign="top" width="31%" headers="d173368e74 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173368e80 d173368e76 ">Value of a field item.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173368e86" style="text-align: left;" data-valign="top" width="31%" headers="d173368e74 "><code class="codeph">p_query</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173368e86 d173368e76 "><p>SQL query that is expected to select two columns, a display column and a return column. For example:</p>
<pre class="pre codeblock"><code>SELECT dname, deptno FROM dept</code></pre>
<p>Note if only one column is specified in the select clause of this query, the value for this column is used for both display and return purposes.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d173368e97" style="text-align: left;" data-valign="top" width="31%" headers="d173368e74 "><code class="codeph">p_null_text</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d173368e97 d173368e76 ">Value to be displayed when the value of the field item is NULL or a corresponding entry is not located for the value <code class="codeph">p_value</code> in the list of values query.</td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to derive the display value from a query.

```
SELECT APEX_ITEM.TEXT_FROM_LOV_QUERY(empno,'SELECT ename, empno FROM emp') c from emp
```

**Parent topic:** [APEX_ITEM (Legacy)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_ITEM.html#GUID-A111B577-2503-4F4E-962E-192C7D5B5338)
