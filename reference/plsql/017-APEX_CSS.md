<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_CSS.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 17 APEX_CSS

The `APEX_CSS` package provides utility functions for adding CSS styles to HTTP output. This package is usually used for plug-in development.

- [ADD Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD-Procedure.html#GUID-BED2BC8B-91F5-4A9E-9487-2F4D834AFDD7)
- [ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_3RD_PARTY_LIBRARY_FILE-Procedure.html#GUID-249CAA12-7293-4CE0-832E-2BED0C0E891B)
- [ADD_FILE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_FILE-Procedure.html#GUID-4CDF4F1D-3CD9-4BBE-B205-CEBF53E81F3F)

------------------------------------------------------------------------

## 17.1 ADD Procedure

This procedure adds a CSS style snippet that is included inline in the HTML output. Use this procedure to add new CSS style declarations.

Syntax

```
APEX_CSS.ADD (
    p_css   IN  VARCHAR2,
    p_key   IN  VARCHAR2  DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_css` | The CSS style snippet. For example, `#test {color:#fff}` |
| `p_key` | Identifier for the style snippet. If specified and a style snippet with the same name has already been added the new style snippet will be ignored. |

Example

Adds an inline CSS definition for the class autocomplete into the HTML page. The key `autocomplete_widget` prevents the definition from being included another time if the `apex_css.add` is called another time.

```
apex_css.add (
    p_css => '.autocomplete { color:#ffffff }',
    p_key => 'autocomplete_widget' );
```

**Parent topic:** [APEX_CSS](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_CSS.html#GUID-37060CB4-6354-445E-8CE8-67CF252D278F)

------------------------------------------------------------------------

## 17.2 ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated)

This procedure adds the link tag to load a third-party CSS file and also takes into account the specified CDN (content delivery network) for the application.

Supported libraries include:

- jQuery
- jQueryUI

If a library has already been added, it is not added a second time.

Syntax

```
APEX_CSS.ADD_3RD_PARTY_LIBRARY_FILE (
    p_library       IN    VARCHAR2,
    p_file_name     IN    VARCHAR2 DEFAULT NULL,
    p_directory     IN    VARCHAR2 DEFAULT NULL,
    p_version       IN    VARCHAR2 DEFAULT NULL,
    p_media_query   IN    VARCHAR2 DEFAULT NULL,
    p_attributes    IN    VARCHAR2 DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d69160e83" style="text-align: left;" data-valign="bottom" width="34%">Parameters</th>
<th id="d69160e85" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d69160e89" style="text-align: left;" data-valign="top" width="34%" headers="d69160e83 "><code class="codeph">p_library</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d69160e89 d69160e85 ">Use one of the <code class="codeph">c_library_*</code> constants.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69160e98" style="text-align: left;" data-valign="top" width="34%" headers="d69160e83 "><code class="codeph">p_file_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d69160e98 d69160e85 ">Specifies the file name excluding version, <code class="codeph">.min</code>, and <code class="codeph">.css</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69160e110" style="text-align: left;" data-valign="top" width="34%" headers="d69160e83 "><code class="codeph">p_directory</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d69160e110 d69160e85 ">(Optional) Directory where the file <code class="codeph">p_file_name</code> is located.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69160e119" style="text-align: left;" data-valign="top" width="34%" headers="d69160e83 "><code class="codeph">p_version</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d69160e119 d69160e85 ">(Optional) If no value is provided, then uses the same version shipped with APEX.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69160e128" style="text-align: left;" data-valign="top" width="34%" headers="d69160e83 "><code class="codeph">p_media_query</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d69160e128 d69160e85 ">(Optional) Value that is set as media query.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69160e134" style="text-align: left;" data-valign="top" width="34%" headers="d69160e83 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d69160e134 d69160e85 "><p>Extra attributes to add to the link tag.</p>
<p>Note:</p>
Callers are responsible for escaping this parameter.
</div></td>
</tr>
</tbody>
</table>

Example

The following example loads the Cascading Style Sheet file of the Accordion component of the jQuery UI.

```
apex_css.add_3rd_party_library_file (
    p_library   => apex_css.c_library_jquery_ui,
    p_file_name => 'jquery.ui.accordion' )
```

**Parent topic:** [APEX_CSS](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_CSS.html#GUID-37060CB4-6354-445E-8CE8-67CF252D278F)

------------------------------------------------------------------------

## 17.3 ADD_FILE Procedure

This procedure adds the link tag to load a CSS library. If a library has already been added, it will not be added a second time.

Syntax

```
APEX_CSS.ADD_FILE (
    p_name           IN    VARCHAR2,
    p_directory      IN    VARCHAR2 DEFAULT apex_application.g_image_prefix||'css/',
    p_version        IN    VARCHAR2 DEFAULT NULL,
    p_skip_extension IN    BOOLEAN  DEFAULT FALSE,
    p_media_query    IN    VARCHAR2 DEFAULT NULL,
    -- p_ie_condition is desupported and has no effect
    p_ie_condition   IN    VARCHAR2 DEFAULT NULL,
    p_attributes     IN    VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d69523e74" style="text-align: left;" data-valign="bottom" width="24%">Parameter</th>
<th id="d69523e76" style="text-align: left;" data-valign="bottom" width="76%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d69523e80" style="text-align: left;" data-valign="top" width="24%" headers="d69523e74 "><code class="codeph">p_name</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d69523e80 d69523e76 ">Name of the CSS file.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69523e87" style="text-align: left;" data-valign="top" width="24%" headers="d69523e74 "><code class="codeph">p_directory</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d69523e87 d69523e76 ">Begin of the URL where the CSS file should be read from. If you use this function for a plug-in, set this parameter to <code class="codeph">p_plugin.file_prefix</code></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69523e96" style="text-align: left;" data-valign="top" width="24%" headers="d69523e74 "><code class="codeph">p_version</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d69523e96 d69523e76 ">Identifier of the version of the CSS file. The version will be added to the CSS filename. In most cases you should use the default of <code class="codeph">NULL</code> as the value.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69523e106" style="text-align: left;" data-valign="top" width="24%" headers="d69523e74 "><code class="codeph">p_skip_extension</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d69523e106 d69523e76 ">The function automatically adds <code class="codeph">.css</code> to the CSS filename. If set to <code class="codeph">TRUE</code>, the function ignores this addition.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69523e119" style="text-align: left;" data-valign="top" width="24%" headers="d69523e74 "><code class="codeph">p_media_query</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d69523e119 d69523e76 ">Value set as media query.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69523e125" style="text-align: left;" data-valign="top" width="24%" headers="d69523e74 "><code class="codeph">p_ie_condition</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d69523e125 d69523e76 ">(Desupported) Condition used as Internet Explorer condition.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d69523e131" style="text-align: left;" data-valign="top" width="24%" headers="d69523e74 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d69523e131 d69523e76 "><p>Extra attributes to add to the link tag.</p>
<p>Note:</p>
Callers are responsible for escaping this parameter.
</div></td>
</tr>
</tbody>
</table>

Example

Adds the CSS file`jquery.autocomplete.css` in the directory specified by `p_plugin.file_prefix` to the HTML output of the page and makes sure that it will only be included once if `apex_css.add_file` is called multiple times with that name.

```
apex_css.add_file (
        p_name => 'jquery.autocomplete',
   p_directory => p_plugin.file_prefix );
```

**Parent topic:** [APEX_CSS](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_CSS.html#GUID-37060CB4-6354-445E-8CE8-67CF252D278F)
