<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 5 APEX_APP_SETTING

The `APEX_APP_SETTING` package provides utilities you can use when programming in the Oracle APEX environment related to application setting shared components. You can use the `APEX_APP_SETTING` package to get and set the value of application settings.

- [GET_VALUE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.GET_VALUE-Function.html#GUID-5CA958F9-E071-424F-9AE5-BB662494ADE2)
- [SET_VALUE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.SET_VALUE-Procedure.html#GUID-55FC3585-DE0F-494C-8F57-A8F7F51EA29D)

------------------------------------------------------------------------

## 5.1 GET_VALUE Function

This function retrieves the application setting value in the current application.

Syntax

```
APEX_APP_SETTING.GET_VALUE (
    p_name          IN VARCHAR2
    p_raise_error   IN BOOLEAN DEFAULT FALSE )
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
<th id="d23685e72" style="text-align: left;" data-valign="bottom" width="23%">Parameters</th>
<th id="d23685e74" style="text-align: left;" data-valign="bottom" width="77%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d23685e78" style="text-align: left;" data-valign="top" width="23%" headers="d23685e72 "><code class="codeph">p_name</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d23685e78 d23685e74 "><div class="p">
The case insensitive name of the application setting. An error raises if:
<ul>
<li>the application setting name does not exist</li>
<li>the build option associated with the application setting is disabled</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d23685e90" style="text-align: left;" data-valign="top" width="23%" headers="d23685e72 "><code class="codeph">p_raise_error</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d23685e90 d23685e74 ">If <code class="codeph">TRUE</code>, the procedure raises an error if an application setting with a passed name does not exist.</td>
</tr>
</tbody>
</table>

Example

The following example uses the `GET_VALUE` function to retrieve the value of application setting `ACCESS_CONTROL_ENABLED`.

```
DECLARE
    l_value varchar2(4000);
BEGIN
    l_value := APEX_APP_SETTING.GET_VALUE( p_name => 'ACCESS_CONTROL_ENABLED');
END;
```

**Parent topic:** [APEX_APP_SETTING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.html#GUID-22D1A770-2748-42CB-A679-F89CD33B1335)

------------------------------------------------------------------------

## 5.2 SET_VALUE Procedure

This procedure changes the application setting value in the current application. If the setting is subscribed from another app, this API will not update the setting value. If the setting is subscribed and `p_raise_error` is set to `TRUE`, this API raises an error.

Syntax

```
APEX_APP_SETTING.SET_VALUE (
    p_name          IN VARCHAR2,
    p_value         IN VARCHAR2,
    p_raise_error   IN BOOLEAN DEFAULT FALSE )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d23881e77" style="text-align: left;" data-valign="bottom" width="23%">Parameters</th>
<th id="d23881e79" style="text-align: left;" data-valign="bottom" width="77%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d23881e83" style="text-align: left;" data-valign="top" width="23%" headers="d23881e77 "><code class="codeph">p_name</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d23881e83 d23881e79 "><p>The case-insensitive name of the application setting. An error raises if:</p>
<ul>
<li>the application setting name does not exist</li>
<li>the build option associated with the application setting is disabled</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d23881e95" style="text-align: left;" data-valign="top" width="23%" headers="d23881e77 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d23881e95 d23881e79 "><p>The value of the application setting. An error raises if:</p>
<ul>
<li>the value is set to required, but a null value passes</li>
<li>the valid values are defined, but the value is not in one of the valid values</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d23881e107" style="text-align: left;" data-valign="top" width="23%" headers="d23881e77 "><code class="codeph">p_raise_error</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d23881e107 d23881e79 "><p>If set to <code class="codeph">TRUE</code> and an error occurs, then this procedure raises an error message.</p>
<p>If set to <code class="codeph">FALSE</code>, all error messages are suppressed.</p>
<p>In either case, this API never updates application setting values when an error occurs.</p></td>
</tr>
</tbody>
</table>

Example

The following example uses the `SET_VALUE` procedure to set the value of the application setting "ACCESS_CONTROL_ENABLED."

```
BEGIN
    APEX_APP_SETTING.SET_VALUE (
        p_name  => 'ACCESS_CONTROL_ENABLED',
        p_value => 'Y' );
END;
```

**Parent topic:** [APEX_APP_SETTING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_SETTING.html#GUID-22D1A770-2748-42CB-A679-F89CD33B1335)
