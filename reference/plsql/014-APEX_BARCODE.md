<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BARCODE.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 14 APEX_BARCODE

The `APEX_BARCODE` package contains the implementation to generate different types of barcodes. The supported output types are SVG value or PNG file BLOB.

- [GET_CODE128_PNG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CODE128_PNG-Function.html#GUID-ABE51C99-16F1-4590-84A7-9A7D4B33C2FE)
- [GET_CODE128_SVG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CODE128_SVG-Function.html#GUID-68B3E5C3-20F6-4463-BCE4-6BA78EAA7DFC)
- [GET_EAN8_PNG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EAN8_PNG-Function.html#GUID-0692F5E9-AE5D-406B-B073-E75A3CA7B493)
- [GET_EAN8_SVG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_EAN8_SVG-Function.html#GUID-D8E1D73B-6562-49FF-841C-D8EF3F4F5E4A)
- [GET_QRCODE_PNG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_QRCODE_PNG-Function.html#GUID-AB407002-93F7-4DA2-9004-F1E0E41B7313)
- [GET_QRCODE_SVG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_QRCODE_SVG-Function.html#GUID-6B4A6ED3-1A55-4960-9937-223D50CD5C27)

------------------------------------------------------------------------

## 14.1 GET_CODE128_PNG Function

This function generates a Code 128 barcode, configured according to the specified options, and returns a BLOB in PNG format.

Syntax

```
APEX_BARCODE.GET_CODE128_PNG (
    p_value             IN VARCHAR2,
    p_scale             IN NUMBER   DEFAULT c_default_scale,
    p_foreground_color  IN VARCHAR2 DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2 DEFAULT NULL )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | Value to be encoded into the Code 128 barcode. |
| `p_scale` | Makes the original PNG `p_scale` times larger (integer 1-10). Default `1`. The original size is determined by the input length. |
| `p_foreground_color` | Foreground color. Must be in hex code. Default `#000000`. |
| `p_background_color` | Background color. Must be in hex code. Default null (transparent). |

Returns

The Code 128 barcode PNG image file.

Example

The following example generates a PNG Code 128-type barcode file with specified scale, foreground color, and background color.

```
DECLARE
  l_output blob;
BEGIN
  l_output := apex_barcode.get_code128_png(
                  p_value            => 'apex.oracle.com',
                  p_scale            => 1,
                  p_foreground_color => '#4cd964',
                  p_background_color => '#c7c7cc' );

END;
```

**Parent topic:** [APEX_BARCODE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BARCODE.html#GUID-9909A709-4933-4076-8437-8E5CFBF9C367 "The APEX_BARCODE package contains the implementation to generate different types of barcodes. The supported output types are SVG value or PNG file BLOB.")

------------------------------------------------------------------------

## 14.2 GET_CODE128_SVG Function

This function generates a Code 128 barcode, configured according to the specified options, and returns a CLOB in SVG format.

Syntax

```
APEX_BARCODE.GET_CODE128_SVG (
    p_value             IN VARCHAR2,
    p_size              IN NUMBER   DEFAULT c_default_size,
    p_foreground_color  IN VARCHAR2 DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2 DEFAULT NULL )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | Value to be encoded into the Code 128 barcode. |
| `p_size` | Size of the Code 128 barcode (in pixels). Default 256px. |
| `p_foreground_color` | Foreground color. Must be in hex code. Default `#000000`. |
| `p_background_color` | Background color. Must be in hex code. Default null (transparent). |

Returns

The SVG value of the Code 128 barcode.

Example

The following example generates an SVG Code 128-type barcode with specified foreground color and background color.

```
DECLARE
  l_output clob;
BEGIN
  l_output := apex_barcode.get_code128_svg(
                  p_value            => 'apex.oracle.com',
                  p_foreground_color => '#4cd964',
                  p_background_color => '#c7c7cc' );

  sys.dbms_outout.put_line( l_output );

END;
```

**Parent topic:** [APEX_BARCODE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BARCODE.html#GUID-9909A709-4933-4076-8437-8E5CFBF9C367 "The APEX_BARCODE package contains the implementation to generate different types of barcodes. The supported output types are SVG value or PNG file BLOB.")

------------------------------------------------------------------------

## 14.3 GET_EAN8_PNG Function

This function generates an EAN 8 barcode that is configured according to the specified options, and returns a BLOB in PNG format.

Syntax

```
APEX_BARCODE.GET_EAN8_PNG (
    p_value             IN VARCHAR2,
    p_scale             IN NUMBER   DEFAULT c_default_scale,
    p_foreground_color  IN VARCHAR2 DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2 DEFAULT NULL )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | Value to be encoded into the EAN 8 barcode. Must be numeric with a maximum of 8 characters. |
| `p_scale` | Makes the orignial PNG `p_scale` times larger (integer 1-10). Default is `1`. The original size is determined by the input length. |
| `p_foreground_color` | Foreground color. Must be in hex code. Defaults is `#000000`. |
| `p_background_color` | Background color. Must be in hex code. Default is `null` (transparent). |

Returns

The EAN 8 barcode PNG image file.

Raises

`WWV_FLOW_BARCODE_API.NUMERIC_INPUT_ERROR`: when `p_value` exceeds 8 characters.

Example

The following example generates a PNG EAN 8 type of barcode file with desired scale, foreground color, and background color.

```
DECLARE
  l_output blob;
BEGIN
  l_output := apex_barcode.get_ean8_png(
                  p_value            => '12345678',
                  p_scale            => 1,
                  p_foreground_color => '#4cd964',
                  p_background_color => '#c7c7cc' );

END;
```

**Parent topic:** [APEX_BARCODE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BARCODE.html#GUID-9909A709-4933-4076-8437-8E5CFBF9C367 "The APEX_BARCODE package contains the implementation to generate different types of barcodes. The supported output types are SVG value or PNG file BLOB.")

------------------------------------------------------------------------

## 14.4 GET_EAN8_SVG Function

This function generates an EAN 8 barcode that is configured according to the specified options, and returns a CLOB in SVG format.

Syntax

```
APEX_BARCODE.GET_EAN8_SVG (
    p_value             IN VARCHAR2,
    p_size              IN NUMBER   DEFAULT c_default_size,
    p_foreground_color  IN VARCHAR2 DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2 DEFAULT NULL )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | Value to be encoded into the EAN 8 Barcode. Format is numeric with a maximum of 8 digits. |
| `p_size` | Size of the EAN 8 Barcode (in pixels). Default 256px. |
| `p_foreground_color` | Foreground color. Must be in hex code. Default `#000000`. |
| `p_background_color` | Background color. Must be in hex code. Default null (transparent). |

Returns

The SVG value of the EAN 8 barcode.

Raises

`WWV_FLOW_BARCODE_API.NUMERIC_INPUT_ERROR`: when `p_value` exceeds 8 digits.

Example

The following example generates an SVG EAN 8 type of barcode with specified foreground and background colors.

```
DECLARE
  l_output clob;
BEGIN
  l_output := apex_barcode.get_ean8_svg(
                  p_value            => '12345678',
                  p_foreground_color => '#4cd964',
                  p_background_color => '#c7c7cc');
  sys.dbms_outout.put_line( l_output );
END;
```

**Parent topic:** [APEX_BARCODE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BARCODE.html#GUID-9909A709-4933-4076-8437-8E5CFBF9C367 "The APEX_BARCODE package contains the implementation to generate different types of barcodes. The supported output types are SVG value or PNG file BLOB.")

------------------------------------------------------------------------

## 14.5 GET_QRCODE_PNG Function

This function generates a QR code that is configured according to the specified options and returns a BLOB in PNG format.

Syntax

```
APEX_BARCODE.GET_QRCODE_PNG (
    p_value             IN VARCHAR2,
    p_scale             IN NUMBER         DEFAULT c_default_scale,
    p_quiet             IN NUMBER         DEFAULT c_default_quiet,
    p_eclevel           IN t_eclevel_type DEFAULT c_default_eclevel,
    p_foreground_color  IN VARCHAR2       DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2       DEFAULT NULL )
    RETURN BLOB;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d61141e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d61141e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d61141e78" style="text-align: left;" data-valign="top" width="42%" headers="d61141e72 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61141e78 d61141e74 ">Value to be encoded into the QR Code.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61141e84" style="text-align: left;" data-valign="top" width="42%" headers="d61141e72 "><code class="codeph">p_scale</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61141e84 d61141e74 ">Makes the orignial PNG <code class="codeph">p_scale</code> times larger (integer 1-10). Default <code class="codeph">1</code>. The original size is determined by the input length.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61141e96" style="text-align: left;" data-valign="top" width="42%" headers="d61141e72 "><code class="codeph">p_quiet</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61141e96 d61141e74 ">Blank area (positive integer value) around the QR Code used to help the scanners clearly distinguish the QR Code from its surroundings for good scannability. Defaults <code class="codeph">1</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61141e105" style="text-align: left;" data-valign="top" width="42%" headers="d61141e72 "><code class="codeph">p_eclevel</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61141e105 d61141e74 "><p>The error-correction level. The level determines the percentage of the total QR code that can be dirty or damaged and still be valid.</p>
<p>Default <code class="codeph">c_eclevel_type_high</code>.</p>
<p>Possible values:</p>
<ul>
<li><code class="codeph">c_eclevel_type_low</code> - 7% of data bytes can be restored.</li>
<li><code class="codeph">c_eclevel_type_medium</code> - 15% of data bytes can be restored.</li>
<li><code class="codeph">c_eclevel_type_quartile</code> - 25% of data bytes can be restored.</li>
<li><code class="codeph">c_eclevel_type_high</code> - 30% of data bytes can be restored.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61141e136" style="text-align: left;" data-valign="top" width="42%" headers="d61141e72 "><code class="codeph">p_foreground_color</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61141e136 d61141e74 ">Foreground color. Must be in hex format. Default <code class="codeph">#000000</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61141e145" style="text-align: left;" data-valign="top" width="42%" headers="d61141e72 "><code class="codeph">p_background_color</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61141e145 d61141e74 ">Background color. Must be in hex format. Default null (transparent).</td>
</tr>
</tbody>
</table>

Returns

The QR code PNG image file.

Example

The following example generates a QR code PNG file with a determined foreground and background color. This function is usually used when a QR code image file is needed.

```
DECLARE
  l_output blob;
BEGIN
  l_output := apex_barcode.get_qrcode_png(
                  p_value            => 'apex.example.com',
                  p_scale            => 1,
                  p_quiet            => 5,
                  p_eclevel          => c_eclevel_type_high,
                  p_foreground_color => '#4cd964',
                  p_background_color => '#c7c7cc' );
END;
```

**Parent topic:** [APEX_BARCODE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BARCODE.html#GUID-9909A709-4933-4076-8437-8E5CFBF9C367 "The APEX_BARCODE package contains the implementation to generate different types of barcodes. The supported output types are SVG value or PNG file BLOB.")

------------------------------------------------------------------------

## 14.6 GET_QRCODE_SVG Function

This function generates a QR code that is configured according to the specified options and returns a CLOB in SVG format.

Syntax

```
APEX_BARCODE.GET_QRCODE_SVG (
    p_value             IN VARCHAR2,
    p_size              IN NUMBER         DEFAULT c_default_size,
    p_quiet             IN NUMBER         DEFAULT c_default_quiet,
    p_eclevel           IN t_eclevel_type DEFAULT c_default_eclevel,
    p_foreground_color  IN VARCHAR2       DEFAULT c_default_foreground_color,
    p_background_color  IN VARCHAR2       DEFAULT NULL )
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
<th id="d61522e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d61522e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d61522e78" style="text-align: left;" data-valign="top" width="42%" headers="d61522e72 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61522e78 d61522e74 ">Value to be encoded into the QR code.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61522e84" style="text-align: left;" data-valign="top" width="42%" headers="d61522e72 "><code class="codeph">p_size</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61522e84 d61522e74 ">Size of the QR code (in pixels). Defaults to 256px.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61522e90" style="text-align: left;" data-valign="top" width="42%" headers="d61522e72 "><code class="codeph">p_foreground_color</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61522e90 d61522e74 ">Foreground color. Must be in hex format. Default <code class="codeph">#000000</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61522e99" style="text-align: left;" data-valign="top" width="42%" headers="d61522e72 "><code class="codeph">p_background_color</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61522e99 d61522e74 ">Background color. Must be in hex format. Default null (transparent).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61522e105" style="text-align: left;" data-valign="top" width="42%" headers="d61522e72 "><code class="codeph">p_quiet</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61522e105 d61522e74 ">Blank area (positive integer value) around the QR Code used to help the scanners clearly distinguish the QR code from its surroundings for good scannability. Defaults to <code class="codeph">1</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d61522e114" style="text-align: left;" data-valign="top" width="42%" headers="d61522e72 "><code class="codeph">p_eclevel</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d61522e114 d61522e74 "><p>The error-correction level. The level determines the percentage of the total QR code that can be dirty or damaged and still be valid.</p>
<p>Default <code class="codeph">c_eclevel_type_high</code>.</p>
<p>Possible values:</p>
<ul>
<li><code class="codeph">c_eclevel_type_low</code> - 7% of data bytes can be restored.</li>
<li><code class="codeph">c_eclevel_type_medium</code> - 15% of data bytes can be restored.</li>
<li><code class="codeph">c_eclevel_type_quartile</code> - 25% of data bytes can be restored.</li>
<li><code class="codeph">c_eclevel_type_high</code> - 30% of data bytes can be restored.</li>
</ul></td>
</tr>
</tbody>
</table>

Returns

The SVG value of the QR code.

Example

Generates an SVG QR code with a determined foreground and background color. This function is usually used in rendering QR code page item.

```
DECLARE
  l_output clob;
BEGIN
  l_output := apex_barcode.get_qrcode_svg(
                  p_value            => 'apex.oracle.com',
                  p_foreground_color => '#4cd964',
                  p_background_color => '#c7c7cc' );
  sys.dbms_outout.put_line( l_output );
END;
```

**Parent topic:** [APEX_BARCODE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BARCODE.html#GUID-9909A709-4933-4076-8437-8E5CFBF9C367 "The APEX_BARCODE package contains the implementation to generate different types of barcodes. The supported output types are SVG value or PNG file BLOB.")
