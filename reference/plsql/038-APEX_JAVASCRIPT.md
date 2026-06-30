<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 38  APEX_JAVASCRIPT

The `APEX_JAVASCRIPT` package provides utility functions for adding dynamic JavaScript code to HTTP output. This package is usually used for plug-in development.

- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.Data-Types.html#GUID-77C05E7D-8667-4771-BFDE-BAEF87E8D505)
- [ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_3RD_PARTY_LIBRARY_FILE-Procedure-2.html#GUID-8A31D19C-A21C-417D-B1E2-9333818BD913)
- [ADD_ATTRIBUTE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-1.html#GUID-1543D51A-1689-4B2E-9E86-94ED95BE7612)
- [ADD_ATTRIBUTE Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-2.html#GUID-A0D1EBF9-FCA2-4924-8BE6-596D25EDD34F)
- [ADD_ATTRIBUTE Function Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-3.html#GUID-BAF99F53-F78A-4FAF-A402-D2E36F0091FE)
- [ADD_ATTRIBUTE Function Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-4.html#GUID-6BF8C80A-7942-4C6E-BCDA-AFD9D3DA28BC)
- [ADD_INLINE_CODE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_INLINE_CODE-Procedure.html#GUID-03CEB45D-3C48-4524-9454-6C15046A9510)
- [ADD_JET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_JET-Procedure.html#GUID-9377B50E-C15C-4812-B37F-D4FDAD29C2A3)
- [ADD_LIBRARY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_LIBRARY-Procedure.html#GUID-702E89BC-5E65-4758-B0F8-52BD0C45AC06)
- [ADD_REQUIREJS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_REQUIREJS-Procedure.html#GUID-788F79DF-48CA-4F96-8D3E-A3666BAEA138)
- [ADD_REQUIREJS_DEFINE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_REQUIREJS_DEFINE-Procedure.html#GUID-6E0A0962-4AB1-4576-BB31-FE35866F5A98)
- [ADD_ONLOAD_CODE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ONLOAD_CODE-Procedure.html#GUID-6F564113-CE53-4B32-9129-D04CC24398B3)
- [ADD_VALUE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-1.html#GUID-D344AF0E-CD03-47B5-86A8-F3BAC92E9FEE)
- [ADD_VALUE Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-2.html#GUID-602DEF5A-A8C2-4013-A45F-E6EC7D330723)
- [ADD_VALUE Function Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-3.html#GUID-3CF1D2BD-A6F5-45E3-BEB5-64F0921F0640)
- [ADD_VALUE Function Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-4.html#GUID-18293772-D6DF-4990-BEB2-3650A8BBBFF6)
- [Escape Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Escape-Function.html#GUID-150431EA-998E-4559-851B-416846527E9F)

------------------------------------------------------------------------

## 38.1 Data Types

The APEX_JAVASCRIPT package uses the following data types.

Function Type

```
subtype t_function_type is pls_integer range 1..3;
c_type_function      constant t_function_type := 1; -- Returns the input code without modification.
c_type_function_body constant t_function_type := 2; -- Wraps the input code in a function body.
c_type_expression    constant t_function_type := 3; -- Wraps the input code in a function with a return statement.
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.2 ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated)

Caution:

This API is deprecated and will be removed in a future release.

This procedure adds the script tag to load a third-party JavaScript library file and also takes into account the specified CDN (content delivery network) for the application.

Supported libraries include:

- jQuery
- jQueryUI

Syntax

```
APEX_JAVASCRIPT.ADD_3RD_PARTY_LIBRARY_FILE (
    p_library    IN VARCHAR2,
    p_file_name  IN VARCHAR2 DEFAULT NULL,
    p_directory  IN VARCHAR2 DEFAULT NULL,
    p_version    IN VARCHAR2 DEFAULT NULL,
    p_attributes IN VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d191747e87" style="text-align: left;" data-valign="bottom" width="48%">Parameters</th>
<th id="d191747e89" style="text-align: left;" data-valign="bottom" width="52%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d191747e93" style="text-align: left;" data-valign="top" width="48%" headers="d191747e87 "><code class="codeph">p_library</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d191747e93 d191747e89 ">Use one of the <code class="codeph">c_library_*</code> constants.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d191747e102" style="text-align: left;" data-valign="top" width="48%" headers="d191747e87 "><code class="codeph">p_file_name</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d191747e102 d191747e89 ">Specifies the file name excluding version, <code class="codeph">.min</code>, and <code class="codeph">.js</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d191747e114" style="text-align: left;" data-valign="top" width="48%" headers="d191747e87 "><code class="codeph">p_directory</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d191747e114 d191747e89 ">(Optional) Directory where the file <code class="codeph">p_file_name</code> is located.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d191747e123" style="text-align: left;" data-valign="top" width="48%" headers="d191747e87 "><code class="codeph">p_version</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d191747e123 d191747e89 ">(Optional) If no value is provided, then uses the same version shipped with APEX.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d191747e132" style="text-align: left;" data-valign="top" width="48%" headers="d191747e87 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d191747e132 d191747e89 "><p>Extra attributes to add to the script tag.</p>
<p>Note:</p>
Callers are responsible for escaping this parameter.
</div></td>
</tr>
</tbody>
</table>

Example

This example loads the JavaScript file of the Draggable feature of jQuery UI.

```
apex_javascript.add_3rd_party_library_file (
     p_library   => apex_javascript.c_library_jquery_ui,
     p_file_name => 'jquery.ui.draggable' )
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.3 ADD_ATTRIBUTE Function Signature 1

This function returns the attribute and the attribute's escaped text surrounded by double quotation marks.

Note:

This function does not escape HTML tags. It only prevents HTML tags from breaking the JavaScript object attribute assignment. To prevent XSS (cross site scripting) attacks, you must also call `SYS.HTF.ESCAPE_SC` to prevent embedded JavaScript code from being executed when you inject the string into the HTML page.

Syntax

```
APEX_JAVASCRIPT.ADD_ATTRIBUTE (
    p_name       IN VARCHAR2,
    p_value      IN VARCHAR2,
    p_omit_null  IN BOOLEAN:=TRUE,
    p_add_comma  IN BOOLEAN:=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | Name of the JavaScript object attribute. |
| `p_value` | Text to be assigned to the JavaScript object attribute. |
| `p_omit_null` | If `p_omit_null` is TRUE and `p_value` is NULL, the function returns nothing. If `p_omit_null` is FALSE and `p_value` is NULL, the value null is returned (for example, test:null). |
| `p_add_comma` | If set to TRUE, a trailing comma is added when a value is returned. |

Example

Adds a call to the `addEmployee` JavaScript function and passes in a JavaScript object with different attribute values. The output of this call looks like:

```
addEmployee(
  {"FirstName":"John",
   "LastName":"Doe",
   "Salary":2531.29,
   "Birthday":new Date(1970,1,15,0,0,0),
   "isSalesman":true
  });
```

As the last attribute you should use the parameter combination FALSE (`p_omit_null`), FALSE (`p_add_comma`) so that the last attribute is always generated. This avoids that you have to check for the other parameters if a trailing comma should be added or not.

```
apex_javascript.add_onload_code (
    'addEmployee('||
        '{'||
        apex_javascript.add_attribute('FirstName',  sys.htf.escape_sc(l_first_name))||
        apex_javascript.add_attribute('LastName',   sys.htf.escape_sc(l_last_name))||
        apex_javascript.add_attribute('Salary',     l_salary)||
        apex_javascript.add_attribute('Birthday',   l_birthday)||
        apex_javascript.add_attribute('isSalesman', l_is_salesman, false, false)||
        '});' );
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.4 ADD_ATTRIBUTE Function Signature 2

This function returns the attribute and the attribute's number.

Syntax

```
APEX_JAVASCRIPT.ADD_ATTRIBUTE (
    p_name       IN VARCHAR2,
    p_value      IN NUMBER,
    p_omit_null  IN BOOLEAN:=TRUE,
    p_add_comma  IN BOOLEAN:=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | Name of the JavaScript object attribute. |
| `p_value` | Number which should be assigned to the JavaScript object attribute. |
| `p_omit_null` | If `p_omit_null` is TRUE and `p_value` is NULL, the function returns nothing. If `p_omit_null` is FALSE and `p_value` is NULL, the value null is returned (for example, test:null). |
| `p_add_comma` | If set to TRUE, a trailing comma is added when a value is returned. |

Example

See example for [ADD_ATTRIBUTE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-1.html#GUID-1543D51A-1689-4B2E-9E86-94ED95BE7612).

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.5 ADD_ATTRIBUTE Function Signature 3

This function returns the attribute and a JavaScript boolean of TRUE, FALSE, or NULL.

Syntax

```
APEX_JAVASCRIPT.ADD_ATTRIBUTE (
    p_name       IN VARCHAR2,
    p_value      IN BOOLEAN,
    p_omit_null  IN BOOLEAN:=TRUE,
    p_add_comma  IN BOOLEAN:=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | Name of the JavaScript object attribute. |
| `p_value` | Boolean assigned to the JavaScript object attribute. |
| `p_omit_null` | If `p_omit_null` is TRUE and `p_value` is NULL, the function returns nothing. If `p_omit_null` is FALSE and `p_value` is NULL, the value null is returned (for example, test:null). |
| `p_add_comma` | If set to TRUE a trailing comma is added when a value is returned. |

Example

See example for [ADD_ATTRIBUTE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-1.html#GUID-1543D51A-1689-4B2E-9E86-94ED95BE7612).

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.6 ADD_ATTRIBUTE Function Signature 4

This function returns the attribute and the attribute's date.

Syntax

```
APEX_JAVASCRIPT.ADD_ATTRIBUTE (
    p_name       IN VARCHAR2,
    p_value      IN DATE,
    p_omit_null  IN BOOLEAN:=TRUE,
    p_add_comma  IN BOOLEAN:=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | Name of the JavaScript object attribute. |
| `p_value` | Date assigned to the JavaScript object attribute. |
| `p_omit_null` | If `p_omit_null` is TRUE and `p_value` is NULL the function returns nothing. If `p_omit_null` is FALSE and `p_value` is NULL, the value null is returned (for example, test:null). |
| `p_add_comma` | If set to TRUE a trailing comma is added when a value is returned. |

Example

See example for [ADD_ATTRIBUTE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTRIBUTE-Function-Signature-1.html#GUID-1543D51A-1689-4B2E-9E86-94ED95BE7612).

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.7 ADD_INLINE_CODE Procedure

This procedure adds a code snippet that is included inline into the HTML output. For example, you can use this procedure to add new functions or global variable declarations.

Note:

If you want to execute code you should use [ADD_ONLOAD_CODE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ONLOAD_CODE-Procedure.html#GUID-6F564113-CE53-4B32-9129-D04CC24398B3).

Syntax

```
APEX_JAVASCRIPT.ADD_INLINE_CODE (
    p_code       IN VARCHAR2,
    p_key        IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_code` | JavaScript code snippet. For example: ` $s('P1_TEST',123);` |
| `p_key` | Identifier for the code snippet. If specified and a code snippet with the same name has already been added, the new code snippet is ignored. If `p_key` is NULL the snippet is always added. |

Example

The following example includes the JavaScript function `initMySuperWidget` in the HTML output. If the plug-in is used multiple times on the page and the `add_inline_code` is called multiple times, it is added once to the HTML output because all calls have the same value for `p_key`.

```
apex_javascript.add_inline_code (
    p_code => 'function initMySuperWidget(){'||chr(10)||
              '  // do something'||chr(10)||
              '};',
    p_key  => 'my_super_widget_function' );
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.8 ADD_JET Procedure

This procedure adds the script tag to load the Oracle JET library.

Syntax

```
APEX_JAVASCRIPT.ADD_JET;
```

Example

The following example demonstrates how to only load the Oracle JET library if the widget isn't rendered as a native browser input field.

```
if l_display_as <> 'NATIVE' then
    apex_javascript.add_jet;
end if;
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.9 ADD_LIBRARY Procedure

This procedure adds the script tag to load a JavaScript library. If a library has been added, it is not added a second time.

Syntax

```
APEX_JAVASCRIPT.ADD_LIBRARY (
    p_name                    IN VARCHAR2,
    p_directory               IN VARCHAR2,
    p_version                 IN VARCHAR2 DEFAULT NULL,
    p_check_to_add_minified   IN BOOLEAN  DEFAULT FALSE,
    p_skip_extension          IN BOOLEAN  DEFAULT FALSE,
    p_ie_condition            IN VARCHAR2 DEFAULT NULL,
    p_requirejs_module        IN VARCHAR2 DEFAULT NULL,
    p_requirejs_js_expression IN VARCHAR2 DEFAULT NULL,
    p_requirejs_required      IN BOOLEAN  DEFAULT FALSE,
    p_is_module               IN BOOLEAN  DEFAULT FALSE,
    p_is_async                IN BOOLEAN  DEFAULT FALSE,
    p_is_defer                IN BOOLEAN  DEFAULT FALSE,
    p_attributes              IN VARCHAR2 DEFAILT NULL,
    p_key                     IN VARCHAR2 DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d193414e77" style="text-align: left;" data-valign="bottom" width="28%">Parameter</th>
<th id="d193414e79" style="text-align: left;" data-valign="bottom" width="72%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d193414e83" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_name</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e83 d193414e79 ">Name of the JavaScript file. Must not use <code class="codeph">.js</code> when specifying.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e93" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_directory</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e93 d193414e79 ">Directory where JavaScript library is loaded. Must have a trailing slash.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e100" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_version</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e100 d193414e79 ">Version identifier.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e106" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_check_to_add_minified</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e106 d193414e79 ">If TRUE, the procedure tests if it is appropriate to add <code class="codeph">.min</code> extension and add it if appropriate. This is added if an application is not running in DEBUG mode, and omitted when in DEBUG mode.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e115" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_skip_extension</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e115 d193414e79 ">If TRUE, the extension <code class="codeph">.js</code> is NOT added.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e124" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_ie_condition</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e124 d193414e79 ">Condition which is used as Internet Explorer condition.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e130" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_requirejs_module</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e130 d193414e79 ">Module name which is used to expose the library to RequireJS.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e136" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_requirejs_js_expression</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e136 d193414e79 ">JavaScript expression which is used to expose the library to the RequireJS module.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e142" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_requirejs_required</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e142 d193414e79 ">This has to be true if the library uses RequireJS in its code to loading other JavaScript files.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e148" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_key</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e148 d193414e79 ">If not specified, defaults to <code class="codeph">p_directory||p_name||p_version</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e157" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_is_module</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e157 d193414e79 ">If true, adds <code class="codeph">type="module"</code> to the script tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e167" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_is_async</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e167 d193414e79 ">If true, adds attribute <code class="codeph">async</code> to the script tag.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e176" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_is_defer</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e176 d193414e79 "><p>If true adds attribute <code class="codeph">defer</code> to the script tag.</p>
<p><code class="codeph">defer</code> cannot be used in combination with <code class="codeph">async</code>.</p>
<p><code class="codeph">defer</code> should not be used in combination with <code class="codeph">type="module"</code> as module scripts defer by default.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d193414e200" style="text-align: left;" data-valign="top" width="28%" headers="d193414e77 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d193414e200 d193414e79 "><p>Extra attributes to add to the script tag.</p>
<p>Note:</p>
Callers are responsible for escaping this parameter.
</div></td>
</tr>
</tbody>
</table>

Example

The following example includes the JavaScript library file named `hammer-2.0.4.min.js` (if the application has not been started from the Builder), or `hammer-2.0.4.js` (if the application has been started from the Builder or is running in DEBUG mode), from the directory specified by `p_plugin.file_prefix`. Since `p_skip_extension` is not specified, this defaults to `.js`. Also, since `p_key` is not specified, the key defaults to `p_plugin.file_prefix||hammer-2.0.4`. Hammer is a JavaScript library which exposes itself to `RequireJS` using `hammerjs` as module name.

```
apex_javascript.add_library (
    p_name                    => 'hammer-2.0.4#MIN#',
    p_directory               => p_plugin.file_prefix,
    p_requirejs_module        => 'hammerjs',
    p_requirejs_js_expression => 'Hammer' );
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.10 ADD_REQUIREJS Procedure

This procedure adds the script tag to load the RequireJS library.

Syntax

```
APEX_JAVASCRIPT.ADD_REQUIREJS;
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.11 ADD_REQUIREJS_DEFINE Procedure

This procedure adds a RequireJS define after RequireJS has been loaded to let it know about the existence of a library.

Syntax

```
APEX_JAVASCRIPT.ADD_REQUIREJS_DEFINE (
    p_module        IN VARCHAR2,
    p_js_expression IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module` | The module name under which the library is registered in `RequireJS`. |
| `p_js_expression` | The JavaScript expression whose value is exposed as the export of `p_module`. |

Example

```
apex_javascript.add_requirejs_define (
    p_module        => 'hammerjs',
    p_js_expression => 'Hammer' );
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.12 ADD_ONLOAD_CODE Procedure

This procedure adds a JavaScript code snippet to the HTML output which the onload event executes. If an entry with the same key exists, it is ignored. If `p_key` is NULL the snippet is always added.

Syntax

```
APEX_JAVASCRIPT.ADD_ONLOAD_CODE (
    p_code           IN VARCHAR2,
    p_key            IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_code` | JavaScript code snippet to execute during the onload event. |
| `p_key` | Any name to identify the specified code snippet. If specified, the code snippet is added if there has been no other call with the same `p_key`. If `p_key` is NULL the code snippet is always added. |

Example

Adds the JavaScript call `initMySuperWidget(` to the onload buffer. If the plug-in is used multiple times on the page and the `add_onload_code` is called multiple times, it is added once to the HTML output because all calls have the same value for `p_key`.

```
apex_javascript.add_onload_code (
    p_code => 'initMySuperWidget();',
    p_key  => 'my_super_widget' );
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.13 ADD_VALUE Function Signature 1

This function returns the escaped text surrounded by double quotation marks. For example, this string could be returned `"That\'s a test"`.

Note:

This function does not escape HTML tags. It only prevents HTML tags from breaking the JavaScript object attribute assignment. To prevent XSS (cross site scripting) attacks, you must also call `SYS.HTF.ESCAPE_SC` to prevent embedded JavaScript code from being executed when you inject the string into the HTML page.

Syntax

```
APEX_JAVASCRIPT.ADD_VALUE (
    p_value          IN VARCHAR2,
    p_add_comma      IN BOOLEAN :=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter     | Description                                               |
|:--------------|:----------------------------------------------------------|
| `p_value`     | Text to be escaped and wrapped by double quotation marks. |
| `p_add_comma` | If `p_add_comma` is TRUE a trailing comma is added.       |

Example

This example adds some JavaScript code to the onload buffer. The value of `p_item.attribute_01` is first escaped with `htf.escape_sc` to prevent XSS attacks and then assigned to the JavaScript variable `lTest` by calling `apex_javascript.add_value`. `Add_value` takes care of properly escaping the value and wrapping it with double quotation marks. Because commas are not wanted, `p_add_comma` is set to FALSE.

```
apex_javascript.add_onload_code (
    'var lTest = '||apex_javascript.add_value(sys.htf.escape_sc(p_item.attribute_01), FALSE)||';'||chr(10)||
    'showMessage(lTest);' );
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.14 ADD_VALUE Function Signature 2

This function returns `p_value` as JavaScript number, if `p_value` is NULL the value null is returned.

Syntax

```
APEX_JAVASCRIPT.ADD_VALUE (
    p_value          IN NUMBER,
    p_add_comma      IN BOOLEAN :=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | Number which should be returned as JavaScript number. |
| `p_add_comma` | If `p_add_comma` is TRUE a trailing comma is added. Default is TRUE. |

Example

See example for [ADD_VALUE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-1.html#GUID-D344AF0E-CD03-47B5-86A8-F3BAC92E9FEE).

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.15 ADD_VALUE Function Signature 3

This function returns `p_value` as JavaScript boolean. If `p_value` is NULL the value null is returned.

Syntax

```
APEX_JAVASCRIPT.ADD_VALUE (
    p_value          IN BOOLEAN,
    p_add_comma      IN BOOLEAN :=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | Boolean which should be returned as JavaScript boolean. |
| `p_add_comma` | If `p_add_comma` is TRUE a trailing comma is added. Default is TRUE. |

Example

See example for [ADD_VALUE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-1.html#GUID-D344AF0E-CD03-47B5-86A8-F3BAC92E9FEE).

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.16 ADD_VALUE Function Signature 4

This function returns `p_value` as JavaScript date object, if `p_value` is NULL the value null is returned.

Syntax

```
APEX_JAVASCRIPT.ADD_VALUE (
    p_value          IN DATE,
    p_add_comma      IN BOOLEAN :=TRUE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | Date which should be returned as JavaScript date object. |
| `p_add_comma` | If `p_add_comma` is TRUE a trailing comma is added. Default is TRUE. |

Example

See example for [ADD_VALUE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_VALUE-Function-Signature-1.html#GUID-D344AF0E-CD03-47B5-86A8-F3BAC92E9FEE).

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)

------------------------------------------------------------------------

## 38.17 Escape Function

This function escapes text to be used in JavaScript. This function uses `APEX_ESCAPE.JS_LITERAL` to escape characters and provide a reference to that other API.

Note:

This function prevents HTML tags from breaking the JavaScript object attribute assignment and also escapes the HTML tags '\<' and '\>'. It does not escape other HTML tags, therefore to be sure to prevent XSS (cross site scripting) attacks, you must also call `SYS.HTF.ESCAPE_SC` to prevent embedded JavaScript code from being executed when you inject the string into the HTML page.

Syntax

```
APEX_JAVASCRIPT.ESCAPE (
    p_text  IN VARCHAR2 )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description         |
|:----------|:--------------------|
| `p_text`  | Text to be escaped. |

Example

Adds some JavaScript code to the onload buffer. The value of `p_item.attribute_01` is first escaped with `htf.escape_sc` to prevent XSS attacks and then escaped with `apex_javascript.escape` to prevent special characters like a quotation mark from breaking the JavaScript code.

```
apex_javascript.add_onload_code (
    'var lTest = "'||apex_javascript.escape(sys.htf.escape_sc(p_item.attribute_01))||'";'||chr(10)||
    'showMessage(lTest);' );
```

**Parent topic:** [APEX_JAVASCRIPT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JAVASCRIPT.html#GUID-D43D6DA7-9A22-4B53-8138-AC97C00C7622)
