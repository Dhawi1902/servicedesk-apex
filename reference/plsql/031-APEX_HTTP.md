<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 31 APEX_HTTP

The APEX_HTTP package provides APIs to download files.

- [DOWNLOAD Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.DOWNLOAD-Procedure-Signature-1.html#GUID-DFCAD11E-F2D9-42A9-A0C2-6DC81E5B505C)
- [DOWNLOAD Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.DOWNLOAD-Procedure-Signature-2.html#GUID-84063315-D3B9-45BC-BB2B-F3015B199695)

------------------------------------------------------------------------

## 31.1 DOWNLOAD Procedure Signature 1

This procedure downloads a BLOB to the client.

Note:

Clears any previous output to the HTP buffer. `APEX_APPLICATION.STOP_APEX_ENGINE` is called after downloading the file.

Syntax

```
APEX_HTTP.DOWNLOAD (
    p_blob              IN OUT NOCOPY   BLOB,
    p_content_type      IN              VARCHAR2,
    p_filename          IN              VARCHAR2     DEFAULT NULL,
    p_is_inline         IN              BOOLEAN      DEFAULT FALSE )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d144802e77" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d144802e79" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d144802e83" style="text-align: left;" data-valign="top" width="42%" headers="d144802e77 "><code class="codeph">p_blob</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d144802e83 d144802e79 ">The BLOB value to download.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d144802e89" style="text-align: left;" data-valign="top" width="42%" headers="d144802e77 "><code class="codeph">p_content_type</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d144802e89 d144802e79 ">The mime type of the file.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d144802e95" style="text-align: left;" data-valign="top" width="42%" headers="d144802e77 "><code class="codeph">p_filename</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d144802e95 d144802e79 ">Name of the file.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d144802e101" style="text-align: left;" data-valign="top" width="42%" headers="d144802e77 "><code class="codeph">p_is_inline</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d144802e101 d144802e79 "><p>If <code class="codeph">FALSE</code> (default), the browser displays a file download dialog to save the file.</p>
<p>If <code class="codeph">TRUE</code>, displays the file inline in the browser window.</p></td>
</tr>
</tbody>
</table>

Example

The following example downloads a file stored in a table.

```
DECLARE
    l_file           blob;
    l_content_type   varchar2( 4000 );
    l_filename       varchar2( 4000 );
BEGIN

    SELECT blob_content,
           mime_type,
           filename
      INTO l_file,
           l_content_type,
           l_filename
      FROM apex_application_temp_files
     WHERE name = :P1_FILE;

    apex_http.download(
        p_blob           => l_file,
        p_content_type   => l_content_type,
        p_filename       => l_filename );

END;
```

**Parent topic:** [APEX_HTTP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.html#GUID-33430D6F-EAE1-4FDB-9159-327F34F39FE0)

------------------------------------------------------------------------

## 31.2 DOWNLOAD Procedure Signature 2

This procedure downloads a CLOB to the client.

Note:

Clears any previous output to the HTP buffer. `APEX_APPLICATION.STOP_APEX_ENGINE` is called after downloading the file.

Syntax

```
APEX_HTTP.DOWNLOAD (
    p_clob              IN OUT NOCOPY   CLOB,
    p_content_type      IN              VARCHAR2,
    p_filename          IN              VARCHAR2     DEFAULT NULL,
    p_is_inline         IN              BOOLEAN      DEFAULT FALSE )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d145071e77" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d145071e79" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d145071e83" style="text-align: left;" data-valign="top" width="42%" headers="d145071e77 "><code class="codeph">p_clob</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d145071e83 d145071e79 ">The CLOB value to download.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d145071e89" style="text-align: left;" data-valign="top" width="42%" headers="d145071e77 "><code class="codeph">p_content_type</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d145071e89 d145071e79 ">The mime type of the file.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d145071e95" style="text-align: left;" data-valign="top" width="42%" headers="d145071e77 "><code class="codeph">p_filename</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d145071e95 d145071e79 ">Name of the file.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d145071e101" style="text-align: left;" data-valign="top" width="42%" headers="d145071e77 "><code class="codeph">p_is_inline</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d145071e101 d145071e79 "><p>If <code class="codeph">FALSE</code> (default), the browser displays a file download dialog to save the file.</p>
<p>If <code class="codeph">TRUE</code>, displays the file inline in the browser window.</p></td>
</tr>
</tbody>
</table>

Example

The following example downloads a text.

```
DECLARE
    l_text   clob;
BEGIN

    l_text := 'Hello World';

    apex_http.download(
        p_clob           => l_text,
        p_content_type   => 'text/plain',
        p_filename       => 'hello.txt' );

END;
```

**Parent topic:** [APEX_HTTP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HTTP.html#GUID-33430D6F-EAE1-4FDB-9159-327F34F39FE0)
