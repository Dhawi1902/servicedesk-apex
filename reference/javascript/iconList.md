<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html -->
<!-- Widgets: iconList -->

# Widget: iconList

## QuickNav

### [Options](#members-section)

- [addItemSelector](#addItemSelector)
- [allowCopy](#allowCopy)
- [contextMenu](#contextMenu)
- [contextMenuAction](#contextMenuAction)
- [contextMenuId](#contextMenuId)
- [itemSelector](#itemSelector)
- [label](#label)
- [multiple](#multiple)
- [navigation](#navigation)
- [noNavKeyContent](#noNavKeyContent)
- [tabbableContent](#tabbableContent)

### [Events](#events-section)

- [activate](#event:activate)
- [selectionchange](#event:selectionchange)

### [Methods](#methods-section)

- [focus](#focus)
- [getColumns](#getColumns)
- [getRows](#getRows)
- [getSelection](#getSelection)
- [getSelectionValues](#getSelectionValues)
- [refresh](#refresh)
- [resize](#resize)
- [setSelection](#setSelection)

## iconList

IconList is a ListBox where the items (options) in the list are arranged in a grid; across then down. All the items in the list must be the same size; height and width set with CSS. Arrow key movement is naturally extended to two dimensions. The number of columns depends on the width of the iconList element and the items within it. The iconList does not handle scrolling the item contents but it can be put inside a container that does scroll. It can be used from [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) to support pagination including scroll paging over a model.

The primary purpose of an itemList is to allow the user to select one or more items. It also supports type to select, copy to clipboard, context menus, and item activation. Items are activated with double click (single click in navigation mode) or the Enter key. When activated the activate callback is called. This can be used to perform an action such as opening a dialog or navigating.

The expected markup (for best accessibility) is a `<ul>` (or `<ol>`) containing `<li>` elements, however it only depends on a single parent element where all the children are the items. The initially selected item(s) can be indicated by giving the item(s) a class of `is-selected`. The contents of the item is mostly of no concern to this widget but typically include an icon and a label. The contents must not overflow (spill outside of) the item. The item content typically does not have interactive elements such as inputs or buttons. To include interactive elements use the [iconList#tabbableContent](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#tabbableContent) and [iconList#noNavKeyContent](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#noNavKeyContent) options.

### Navigation Mode

As an alternative to selection an iconList has a navigation mode where the list items are essentially links. A single click on the item will activate it. This is controlled with the [iconList#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#navigation) option. If the item is or contains an anchor the default behavior for activation is to navigate to the `href` value. (only one anchor per item is allowed.) When used for navigation the widget should be wrapped in an element with role navigation.

### Selection

An iconList can support single or multiple selection. See option [iconList#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#multiple).

It is also possible to include a checkbox for multiple selection using the [iconList#itemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#itemSelector) option. The item markup can include `` if checkbox selection is desired. Must also set option `itemSelector` to true. If the markup doesn't contain this u-selector span then it can be added for you if option [iconList#addItemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#addItemSelector) is true.

On a touch enabled device where the user has interacted with touch a multi select iconList will automatically enable checkbox selection.

Like options in a select element the option items can have a value using the data-value attribute.

### Context Menus

The iconList has easy integration with the [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget to provide context menu support. The [iconList#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenu) option is used to provide a [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget options object. When the `contextMenu` option is used the [menu#event:beforeOpen](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html#event:beforeOpen) event/callback ui argument has these additional properties:

- menuElement: The menu jQuery object.
- iconList: This iconList jQuery object.
- selection: A jQuery object with the selected items at the time the menu was opened.

Also the [menu#event:afterClose](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html#event:afterClose) event/callback will automatically focus the iconList if the menu action didn't take the focus and the ui argument has these additional properties:

- menuElement: The menu jQuery object.
- iconList: This iconList jQuery object.

If using the `contextMenu` option the [iconList#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuId) option can be used to give the menu element an ID. This is useful if other code must refer to the menu element or widget.

You can reference an already existing [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget by specifying the [iconList#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuId) in place of the [iconList#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenu) option.

If for any reason you don't want to use the [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget, the [iconList#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuAction) option allows you to respond to mouse or keyboard interactions that typically result in a context menu. Specifically Right Mouse click (via `contextmenu` event), Shift-F10 key (via `keydown` event) and the Windows context menu key (via `contextmenu` event). The original event is passed to the [iconList#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuAction) function. The event object can be used to position the menu. If you implement your own menu it is best if you put focus back on the iconList using the [iconList#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#focus) method when the menu closes (unless the menu action directs focus elsewhere).

Only one of [iconList#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuAction) and [iconList#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenu) or [iconList#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuId) can be specified. The [iconList#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenu) and [iconList#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuId) options can only be set when the iconList is initialized and it can't be changed. The [iconList#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuAction) cannot be set if the [iconList#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenu) or [iconList#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#contextMenuId) options were given when the iconList was created.

### Accessibility

For accessibility the iconList should be labeled by using the `aria-labelledby` attribute to point to an element that contains the label. The widget will append text for screen readers only that indicates the number of rows and columns. For best accessibility when used for navigation the markup should be a `<div>` with anchor (`<a>`) children as shown in second example in the initializer section.

For accessibility make sure that any images or icons used in the items have a text alternative if appropriate.

### Keyboard End User Information

| Key | Action |
|----|----|
| Up Arrow | Move focus to the item in the current column of the previous row. |
| Down Arrow | Move focus to the item in the current column of the next row. |
| Right Arrow | Move focus to the next item in the current row wrapping to the next row at the end. |
| Left Arrow | Move focus to the previous item in the current row wrapping to the previous row at the start. |
| Home | Move focus to the first item. |
| End | Move focus to the last item. |
| Space | Selects the focused item. |
| Enter | Activates the selected items. |
| printable characters | Sets focus to the next item with a label that starts with the typed character(s). |

List of keyboard shortcuts

Typically when an item receives focus it is also selected. For a multiple selection iconList the Shift and Ctrl modifier keys can be used in combination with the home, end, and arrow keys to affect the selection. The Shift key extends the selection to include the items between the anchor item (the first single item selected) and the current focused item. The Ctrl key moves the focus without affecting the selection. The Space key can then be used to select the focused item or Ctrl+Space to toggle the item selection.

### Initializer

#### \$(".selector").iconList(options)

Creates an iconList widget.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `options` | Object | A map of option-value pairs to set on the widget. |

Since:
- 5.0

##### Examples

Create a simple iconList for selecting multiple items.

```
HTML:
<h3 id="iconsLabel">My Icons</h3>
<ul id="icons1" aria-labelledby="iconsLabel">
    <li data-value="b">Bus</li>
    <li class="is-selected" data-value="c">Car</li>
    <li data-value="t">Taxi</li>
    ...
</ul>
JavaScript:
$("#icons1").iconList({
    multiple: true
});
```

This example creates an iconList for navigation. In this example \#navList is the element that becomes the iconList widget.

```
HTML:
<h2 id="mainNav">Main Site Navigation</h2>
      <a href="...">...</a>
      ...
JavaScript:
$("#navList").iconList({
    navigation: true
});
```

### Options

#### addItemSelector :boolean

If [iconList#itemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#itemSelector) option is true and the initial iconList markup does not include the markup needed to show the selector then this option should be set to true so that the markup is automatically added.

This is ignored if [iconList#itemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#itemSelector) is false.

The markup to show the checkbox selector is:
``
The markup to show the radio button selector (used when multiple is false) is:
``

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the iconList with the addItemSelector option specified.

```
$( ".selector" ).iconList( {

    addItemSelector: false

} );
```

Get or set option addItemSelector after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "addItemSelector" );

// set

$( ".selector" ).iconList( "option", "addItemSelector", false );
```

#### allowCopy :boolean

If true the selection can be copied to the clipboard using the browsers copy event.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the iconList with the allowCopy option specified.

```
$( ".selector" ).iconList( {

    allowCopy: false

} );
```

Get or set option allowCopy after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "allowCopy" );

// set

$( ".selector" ).iconList( "option", "allowCopy", false );
```

#### contextMenu :object

A [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget options object use to create the context menu.

Only specify one of `contextMenu` or `contextMenuId` and `contextMenuAction`. If none of `contextMenu`, `contextMenuId` or `contextMenuAction` are specified there is no context menu.

This option cannot be set or changed after the widget is initialized.

##### Type:

- object

Default Value:
- null

##### Example

Initialize the iconList with the contextMenu option specified.

```
$( ".selector" ).iconList( {

    contextMenu: {
    items:[
        { type:"action", label: "Action 1", action: function() { alert("Action 1"); } },
        { type:"action", label: "Action 2", action: function() { alert("Action 2"); } }
    ]
}

} );
```

#### contextMenuAction :function

A callback function that is called when it is time to display a context menu. `function( event )` The function is responsible for showing the context menu. It is given the event that caused this callback to be called.

In most cases it is simpler and more consistent to use the `contextMenu` option. Only specify one of `contextMenu` or `contextMenuId` and `contextMenuAction`. If none of `contextMenu`, `contextMenuId` or `contextMenuAction` are specified there is no context menu.

##### Type:

- function

Default Value:
- null

##### Example

Initialize the iconList with the contextMenuAction option specified.

```
$( ".selector" ).iconList( {

    contextMenuAction: function( event ) {
    // do something to display a context menu
 }

} );
```

#### (nullable) contextMenuId :string

If option `contextMenu` is given then this is the element id to give the context [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) created. This allows other code to interact with the created context [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget.

If option `contextMenu` is not given then this is the element id of an existing [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget.

This option cannot be set or changed after the widget is initialized.

##### Type:

- string

Default Value:
- null

##### Example

Initialize the iconList with the contextMenuId option specified.

```
$( ".selector" ).iconList( {

    contextMenuId: "myContextMenu"

} );
```

#### itemSelector :boolean

If true a selector control is added before the item icon and label. The selector is a checkbox if multiple is true and a radio button if multiple is false. The iconList markup must include the necessary markup for the checkbox selector if [iconList#addItemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#addItemSelector) is false. See [iconList#addItemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#addItemSelector) for the needed markup.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the iconList with the itemSelector option specified.

```
$( ".selector" ).iconList( {

    itemSelector: true

} );
```

Get or set option itemSelector after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "itemSelector" );

// set

$( ".selector" ).iconList( "option", "itemSelector", true );
```

#### label :boolean\|string

This option only applies to the type to select feature. It is a jQuery selector for finding the label text of an item or true to use the text of the item or false to disable type to search.

##### Type:

- boolean \| string

Default Value:
- true

##### Examples

Initialize the iconList with the label option specified.

```
$( ".selector" ).iconList( {

    label: "myIconLabel"

} );
```

Get or set option label after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "label" );

// set

$( ".selector" ).iconList( "option", "label", false );
```

#### multiple :boolean

If true multiple items can be selected. If false at most one item can be selected.

Must be false when navigation option is true.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the iconList with the multiple option specified.

```
$( ".selector" ).iconList( {

    multiple: true

} );
```

Get or set option multiple after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "multiple" );

// set

$( ".selector" ).iconList( "option", "multiple", true );
```

#### navigation :boolean

When true changes the mode of widget to navigation otherwise the mode is selection. This option can't be changed after create.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the iconList with the navigation option specified.

```
$( ".selector" ).iconList( {

    navigation: true

} );
```

Get or set option navigation after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "navigation" );

// set

$( ".selector" ).iconList( "option", "navigation", true );
```

#### noNavKeyContent :string

A jQuery selector that identifies item content that uses navigation keys or contains elements that use navigation keys. Navigation keys are used to change the focus or selection state, they include the arrow keys, Home, End, Space and Enter as well as keys used in the type to select feature. When the iconList contains tabbable content ([iconList#tabbableContent](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#tabbableContent) is a valid selector) that can also take keyboard input, such as an `<input>` element this option is used to allow the specified elements to use the navigation keys usually used by the iconList. This is ignored when [iconList#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#navigation) is true.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the iconList with the noNavKeyContent option specified.

```
$( ".selector" ).iconList( {

    noNavKeyContent: "input"

} );
```

Get or set option noNavKeyContent after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "noNavKeyContent" );

// set

$( ".selector" ).iconList( "option", "noNavKeyContent", "input" );
```

#### tabbableContent :string

A jQuery selector that identifies item content that can be a tab stop when an item has focus. This is ignored when [iconList#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html#navigation) is true.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the iconList with the tabbableContent option specified.

```
$( ".selector" ).iconList( {

    tabbableContent: "a,button"

} );
```

Get or set option tabbableContent after initialization.

```
// get

let value = $( ".selector" ).iconList( "option", "tabbableContent" );

// set

$( ".selector" ).iconList( "option", "tabbableContent", "a,button" );
```

### Events

#### activate

Triggered when item(s) are activated with Enter key or double click (single click in navigation mode).

##### Properties:

<table class="props" aria-label="Properties">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>event</code></th>
<td class="type">Event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-1">Properties</h6>
<table class="props" aria-label="Properties">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>values</code></th>
<td class="type">Array.&lt;string&gt;</td>
<td class="description last">An array of selected values. See <a href="iconList.html#getSelectionValues">iconList#getSelectionValues</a></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the iconList with the `activate` callback specified:

```
$( ".selector" ).iconList({
    activate: function( event, data ) {}
});
```

Bind an event listener to the `iconlistactivate` event:

```
$( ".selector" ).on( "iconlistactivate", function( event, data ) {} );
```

#### selectionchange

Triggered when the selection state changes. It has no additional data.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Examples

Initialize the iconList with the `selectionChange` callback specified:

```
$( ".selector" ).iconList({
    selectionChange: function( event ) {}
});
```

Bind an event listener to the `iconlistselectionchange` event:

```
$( ".selector" ).on( "iconlistselectionchange", function( event ) {} );
```

### Methods

#### focus()

Set focus to the iconList. The item that last had focus is focused or if no item had focus the first item is focused.

##### Example

Focus the iconList.

```
$( ".selector" ).iconList( "focus" );
```

#### getColumns() → {number}

Returns the number of columns in the iconList.

##### Returns:

The number of columns.

Type
number

##### Example

Get the number of columns currently displayed by the iconList.

```
var columns = $( ".selector" ).iconList( "getColumns" );
```

#### getRows() → {number}

Returns the number of rows in the iconList.

##### Returns:

The number of rows.

Type
number

##### Example

Get the number of rows currently displayed by the iconList.

```
var rows = $( ".selector" ).iconList( "getRows" );
```

#### getSelection() → {jQuery}

Returns the set of selected items. If there is no selection the empty set is returned.

##### Returns:

jQuery object with the set of selected items.

Type
jQuery

##### Example

Get the currently selected items.

```
var selection$ = $( ".selector" ).iconList( "getSelection" );
```

#### getSelectionValues() → {Array.\<string\>}

Returns the values, from the data-value attributes, of all the selected items. If there is no selection an empty array is returned.

##### Returns:

Array of selected values.

Type
Array.\<string\>

##### Example

Get the currently selected values and convert them to a ":" separated string.

```
var values = $( ".selector" ).iconList( "getSelectionValues" ),
    result = values.join( ":" );
```

#### refresh()

Call refresh if the contents of the list changes or if the size of the container changes.

##### Example

Call the refresh method.

```
$( ".selector" ).iconList( "refresh" );
```

#### resize()

This method must be called if the size of the container changes so that the rows and columns can be recalculated.

##### Example

Call the resize method.

```
$( ".selector" ).iconList( "resize" );
```

#### setSelection(pItems\$, pFocusopt, pNoNotifyopt)

Sets the iconList selection.

##### Parameters:

<table class="params" aria-label="Parameters for setSelection">
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
<th class="name" scope="row"><code>pItems$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">A jQuery object with the items to select. An empty jQuery set will clear the selection.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first item in <code class="prettyprint">pItems$</code> will be focused.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the selection change event will be suppressed.</td>
</tr>
</tbody>
</table>

##### Example

This example selects the items with values "a", "b", and "c".

```
$( ".selector" ).iconList( "setSelection", $( "a:b:c".split( ":" ).map( function(v) {
    return "[data-value='" + v + "']";
} ).join( "," ) ) );
```
