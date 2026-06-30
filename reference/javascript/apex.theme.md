<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.theme.html -->
<!-- Namespaces: apex.theme -->

# Namespace: theme

## QuickNav

### [Functions](#methods-section)

- [closeRegion](#.closeRegion)
- [mq](#.mq)
- [openRegion](#.openRegion)
- [popupFieldHelp](#.popupFieldHelp)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).theme

The apex.theme namespace contains functions useful for theme developers or that work closely with theme related functionality. The functionality in this namespace may not be fully supported by all themes particularly legacy, custom, or third party themes.

### Functions

#### (static) closeRegion(pRegion) → {jQuery}

Close a region that supports being opened such as an inline dialog, inline popup, or collapsible region. For a region to support this function, it must be implemented with a jQuery UI widget that supports either open and close methods or expand and collapse methods.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRegion` | string \| jQuery | The region to close. Either the region HTML DOM id string or a jQuery object. |

Since:
- 18.2

##### Returns:

The jQuery object of the region.

Type
jQuery

##### Example

The following example closes an inline dialog region with HTML DOM id `myDialog`.

```
apex.theme.closeRegion( "myDialog" );
```

#### (static) mq(pMediaQuery) → {boolean}

Test a media query. Return true if the document matches the given media query string and false otherwise. This is a wrapper around `window.matchMedia`.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMediaQuery` | string | The media query to test. For example: `(min-width: 400px)` |

Since:
- 20.1

##### Returns:

true if the media query matches.

Type
boolean

##### Example

After each time the window is resized check and log a message if the viewport is at least 640 pixels wide.

```
apex.jQuery( window ).on( "apexwindowresized", function() {
    if ( apex.theme.mq( "(min-width: 640px)" ) ) {
        console.log( "Window resized, and viewport is at least 640px wide" );
    }
} );
```

#### (static) openRegion(pRegion) → {jQuery}

Open a region that supports being opened such as an inline dialog, inline popup, or collapsible region. For a region to support this function, it must be implemented with a jQuery UI widget that supports either open and close methods or expand and collapse methods.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRegion` | string \| jQuery | The region to open. Either the region HTML DOM id string or a jQuery object. |

Since:
- 18.2

##### Returns:

The jQuery object of the region.

Type
jQuery

##### Example

The following example opens an inline dialog region with HTML DOM id `myDialog`.

```
apex.theme.openRegion( "myDialog" );
```

#### (static) popupFieldHelp(pItemId, pSessionIdopt, pUrlopt)

Display a standard item help dialog. This function may be useful for theme developers. Theme requirements for the label Help Template:

- A click handler or javascript `href` can invoke this function directly. For example:

              <button ... onclick="apex.theme.popupFieldHelp('#CURRENT_ITEM_ID#','&SESSION.');" ...>Help</button>

- The preferred way is to use the built-in delegated click event handler. For this give the clickable help element a class of `js-itemHelp` and add a `data-itemhelp` attribute with the current item id. For example:

          <button class="... js-itemHelp" data-itemhelp="#CURRENT_ITEM_ID#" ...>Help</button>

The second method is preferred because you get Alt-F1 keyboard accessibility. For Alt+F1 to work the label template Before Label and Item template attribute must include:

            id="#CURRENT_ITEM_CONTAINER_ID#"

With the first method you could add your own inline keydown handler.

##### Parameters:

<table class="params" aria-label="Parameters for popupFieldHelp">
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
<th class="name" scope="row"><code>pItemId</code></th>
<td class="type">string | Object</td>
<td class="attributes"></td>
<td class="description last">item id to display help for or an object with properties <code class="prettyprint">helpText</code>, and <code class="prettyprint">title</code>. When an object is given the other parameters are ignored.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pSessionId</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Current session id</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUrl</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Override to specify the URL to use to fetch the help content. It should not include the <code class="prettyprint">p_output_format</code> param. This is an advanced parameter that is normally not needed.</td>
</tr>
</tbody>
</table>

##### Example

The following example shows how a custom help message that looks like standard page item help can be displayed.

```
apex.theme.popupFieldHelp( {title: "Custom Help", helpText: "Some helpful text"} );
```
