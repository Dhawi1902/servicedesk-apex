<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MARKDOWN.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 44 APEX_MARKDOWN

This package offers a way to convert Markdown to HTML directly in the database.

This parser is compliant with the <a href="https://spec.commonmark.org/0.29/" target="_blank">CommonMark Spec version 0.29</a>.

- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MARKDOWN-Constants.html#GUID-247A2C6C-C70E-4F26-8524-9A40C6A024C3)
- [TO_HTML Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_HTML-Function.html#GUID-725F009A-53AA-4168-896E-EE6038BDE102)

------------------------------------------------------------------------

## 44.1 Constants

The following constants are used by this package.

```
c_embedded_html_escape   constant t_embedded_html_mode := 'ESCAPE';
-- escapes HTML
c_embedded_html_preserve constant t_embedded_html_mode := 'PRESERVE';
-- leaves HTML content as-is
```

**Parent topic:** [APEX_MARKDOWN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MARKDOWN.html#GUID-5BB40765-1F66-43E4-A86C-287C64D1D7F0)

------------------------------------------------------------------------

## 44.2 TO_HTML Function

This function converts a Markdown string into HTML.

Syntax

```
APEX_MARKDOWN.TO_HTML (
    p_markdown              IN CLOB,
    p_embedded_html_mode    IN t_embedded_html_mode DEFAULT c_embedded_html_escape,
    p_softbreak             IN VARCHAR2             DEFAULT '<br />',
    p_extra_link_attributes IN apex_t_varchar2      DEFAULT apex_t_varchar2() )
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
<th id="d222895e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d222895e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d222895e78" style="text-align: left;" data-valign="top" width="42%" headers="d222895e72 "><code class="codeph">p_markdown</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d222895e78 d222895e74 ">The Markdown text content to be converted to HTML.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222895e84" style="text-align: left;" data-valign="top" width="42%" headers="d222895e72 "><code class="codeph">p_embedded_html_mode</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d222895e84 d222895e74 "><p>Specify what should happen with embedded HTML. By default it is escaped.</p>
<p>Set this option to <code class="codeph">C_EMBEDDED_HTML_PRESERVE</code> for it to be preserved. Note that this option has security implications and should only ever be used on trusted input.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222895e96" style="text-align: left;" data-valign="top" width="42%" headers="d222895e72 "><code class="codeph">p_softbreak</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d222895e96 d222895e74 ">Specify a raw string to be used for a softbreak, such as <code class="codeph">apex_application.LF</code>. If none is specified, uses <code class="codeph">&lt;br /&gt;</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222895e108" style="text-align: left;" data-valign="top" width="42%" headers="d222895e72 "><code class="codeph">p_extra_link_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d222895e108 d222895e74 ">A plist of additional HTML attributes for anchor elements. For example, to open all links in new tabs, set this parameter to <code class="codeph">apex_t_varchar2('target', '_blank')</code></td>
</tr>
</tbody>
</table>

Example

```
DECLARE
  l_markdown varchar2(100) := '## APEX_MARKDOWN' || chr(10) || '- Includes the `to_html` **function**';
BEGIN
  dbms_output.put_line(apex_markdown.to_html(l_markdown));
END;
```

**Parent topic:** [APEX_MARKDOWN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MARKDOWN.html#GUID-5BB40765-1F66-43E4-A86C-287C64D1D7F0)
