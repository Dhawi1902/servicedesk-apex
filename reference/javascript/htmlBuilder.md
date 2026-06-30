<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html -->
<!-- Interfaces: htmlBuilder -->

# Interface: htmlBuilder

## QuickNav

### [Methods](#methods-section)

- [append](#append)
- [attr](#attr)
- [clear](#clear)
- [content](#content)
- [css](#css)
- [markup](#markup)
- [optionalAttr](#optionalAttr)
- [optionalBoolAttr](#optionalBoolAttr)
- [toJquery](#toJquery)
- [toString](#toString)

## htmlBuilder

The htmlBuilder interface is used create HTML markup. It makes it easy to generate markup that is well-formed and properly escaped. It is simpler and safer than using string concatenation and doesn't require the overhead of using a template library. For simple templates see [apex.util.applyTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.applyTemplate)

To be compliant with Content-Security-Policy without unsafe-inline, the markup produced using this interface should not include style tags, script tags, inline style attributes or inline event handler attributes.

### Example

This example creates an HTML string consisting of a label and text input and inserts it into the DOM. Data to be mixed into the markup is in an options object. The options values will be properly escaped to avoid cross site scripting security issues. With an options object `{ id: "nameInput", label: "Name", size: 10, maxChars: 15 }` the resulting markup will be:
`<label for='nameInput'>Name</label><input type='text' id='nameInput' class='specialInput' size='10' maxlength='15' value='' />`

```
var out = apex.util.htmlBuilder();
out.markup( "<label" )
    .attr( "for", options.id )
    .markup( ">" )
    .content( option.label )
    .markup( "</label><input type='text'" )
    .attr( "id", options.id )
    .attr( "class", "specialInput" )
    .optionalAttr( "title", options.title )
    .attr( "size", options.size )
    .attr( "maxlength",  options.maxChars )
    .attr( "value", "" )
    .markup( " />" );
$( "#myContainer", out.toString() );
```

### Methods

#### append(pHtmlBuilder) → {this}

Append the content of another htmlBuilder to this htmlBuilder.

This includes both the generated HTML markup and any CSS properties.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pHtmlBuilder` | [htmlBuilder](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html) | The htmlBuilder whose content is appended to this htmlBuilder. |

##### Returns:

This htmlBuilder instance for method chaining.

Type
this

#### attr(pNameopt, pValue) → {this}

Add an attribute.

##### Parameters:

<table class="params" aria-label="Parameters for attr">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pName</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Attribute name. A leading space and trailing = is added and the value is quoted. If not given just the value is added without being quoted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Attribute value. This will be escaped.</td>
</tr>
</tbody>
</table>

##### Returns:

This htmlBuilder instance for method chaining.

Type
this

#### clear()

Remove all markup and CSS properties from this builder interface instance. Use this when you want to reuse the builder instance for new markup.

#### content(pContent) → {this}

Add element content. The content is escaped.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pContent` | string | The content to add between an element open and closing tags. |

##### Returns:

This htmlBuilder instance for method chaining.

Type
this

#### css(pName, pValuenullable) → {this}

Add an optional CSS property as a data attribute to avoid inline styles.

This method helps avoid Content-Security-Policy (CSP) violations by storing the CSS property as a `data-css-` attribute rather than setting an inline style attribute.

Use of this method should generally be avoided in favor of CSS classes or applying styles after the element is rendered to the DOM.

See the [htmlBuilder#toJquery](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html#toJquery) method for how these data attributes can later be applied as real CSS styles.

##### Parameters:

<table class="params" aria-label="Parameters for css">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Name of the CSS property (e.g. "display", "color").</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">string</td>
<td class="attributes">&lt;nullable&gt;<br />
</td>
<td class="description last">The CSS property value. If null or empty, the property is not added.</td>
</tr>
</tbody>
</table>

##### Returns:

This htmlBuilder instance for method chaining.

Type
this

#### markup(pMarkup) → {this}

Add markup.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMarkup` | string | The markup to add. No escaping is done. |

##### Returns:

This htmlBuilder instance for method chaining.

Type
this

#### optionalAttr(pName, pValue) → {this}

Add an optional attribute. The attribute and its value is only added if the value is a non-empty string or a non-zero number or true.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pName` | string | Attribute name. A leading space and trailing = is added and the value is quoted. |
| `pValue` | string | Attribute value. This will be escaped. |

##### Returns:

This htmlBuilder instance for method chaining.

Type
this

#### optionalBoolAttr(pName, pValue) → {this}

Add an optional Boolean attribute. The attribute is added only if the value is true.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pName` | string | Attribute name. A leading space is added. |
| `pValue` | boolean | If true the attribute is added. If false the attribute is not added. |

##### Returns:

This htmlBuilder instance for method chaining.

Type
this

#### toJquery() → {jQuery}

Transforms the current markup in this htmlBuilder instance into a jQuery object and safely applies any CSS properties.

Use this method when [htmlBuilder#css](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html#css) has been used to add CSS properties. If no CSS properties were added, it is more efficient to use [htmlBuilder#toString](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/htmlBuilder.html#toString) instead.

##### Returns:

A jQuery object containing the elements produced from this htmlBuilder with styles applied.

Type
jQuery

#### toString() → {string}

Return the HTML markup.

##### Returns:

The markup that has been built so far.

Type
string
