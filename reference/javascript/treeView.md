<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html -->
<!-- Widgets: treeView -->

# Widget: treeView

## QuickNav

### [Options](#members-section)

- [actionsContext](#actionsContext)
- [adapterTypesMap](#adapterTypesMap)
- [allowCopy](#allowCopy)
- [autoCollapse](#autoCollapse)
- [clickToRename](#clickToRename)
- [collapsibleRoot](#collapsibleRoot)
- [contextMenu](#contextMenu)
- [contextMenuAction](#contextMenuAction)
- [contextMenuId](#contextMenuId)
- [doubleClick](#doubleClick)
- [dragAndDrop](#dragAndDrop)
- [dragAppendTo](#dragAppendTo)
- [dragContainment](#dragContainment)
- [dragCursor](#dragCursor)
- [dragCursorAt](#dragCursorAt)
- [dragExpandDelay](#dragExpandDelay)
- [dragHelper](#dragHelper)
- [dragMultiple](#dragMultiple)
- [dragOpacity](#dragOpacity)
- [dragReorder](#dragReorder)
- [dragScroll](#dragScroll)
- [dragScrollSensitivity](#dragScrollSensitivity)
- [dragScrollSpeed](#dragScrollSpeed)
- [dragZIndex](#dragZIndex)
- [expandRoot](#expandRoot)
- [getNodeAdapter](#getNodeAdapter1)
- [iconType](#iconType)
- [idPrefix](#idPrefix)
- [keyboardAdd](#keyboardAdd)
- [keyboardDelete](#keyboardDelete)
- [keyboardRename](#keyboardRename)
- [labelClass](#labelClass)
- [multiple](#multiple)
- [navigation](#navigation)
- [nodeSelector](#nodeSelector)
- [scope](#scope)
- [showRoot](#showRoot)
- [tooltip](#tooltip)
- [useLinks](#useLinks)

### [Events](#events-section)

- [activate](#event:activate)
- [activateNode](#event:activateNode)
- [beforeStop](#event:beforeStop)
- [beginEdit](#event:beginEdit)
- [deactivate](#event:deactivate)
- [drag](#event:drag)
- [endEdit](#event:endEdit)
- [expansionStateChange](#event:expansionStateChange)
- [out](#event:out)
- [over](#event:over)
- [selectionChange](#event:selectionChange)
- [start](#event:start)
- [stop](#event:stop)

### [Methods](#methods-section)

- [addNode](#addNode)
- [addNodeInPlace](#addNodeInPlace)
- [collapse](#collapse)
- [collapseAll](#collapseAll)
- [copyNodes](#copyNodes)
- [deleteNodes](#deleteNodes)
- [deleteTreeNodes](#deleteTreeNodes)
- [expand](#expand)
- [expandAll](#expandAll)
- [find](#find)
- [focus](#focus)
- [getExpandedNodeIds](#getExpandedNodeIds)
- [getExpandedState](#getExpandedState)
- [getNodeAdapter](#getNodeAdapter2)
- [getNodes](#getNodes)
- [getSelectedNodes](#getSelectedNodes)
- [getSelection](#getSelection)
- [getTreeNode](#getTreeNode)
- [moveNodes](#moveNodes)
- [refresh](#refresh)
- [renameNodeInPlace](#renameNodeInPlace)
- [setSelectedNodes](#setSelectedNodes)
- [setSelection](#setSelection)
- [update](#update)
- [makeDefaultNodeAdapter](#.makeDefaultNodeAdapter)

## treeView

A jQuery UI widget that implements a tree view used to display and interact with hierarchical data. Implements tree view functionality according to WAI-ARIA authoring practices design patterns and the DHTML Style Guide with minor differences in keyboard handling.

The treeView works with any data model via the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) interface supplied when the treeView is created. The tree data model must be singly rooted. If the data doesn't have a single root then the adapter must generate one dynamically where the multiple roots are its children. The tree need not display the root. For a multi-rooted tree set the [treeView#showRoot](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#showRoot) option to false. With `showRoot` false the adapter will never be asked for the label or icon etc. of the root node. The tree can also be created from [markup](#from-markup-section)

### Selection

A treeView supports single or multiple selection. See option [treeView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#multiple). Tree nodes that are disabled cannot be selected but can be focused. Selection is accomplished with mouse and/or keyboard. Node selection is independent of hierarchy. In other words selecting a parent node does not select all of its descendants.

It is also possible to include as part of each tree node a checkbox for multiple selection or radio button for single selection using the [treeView#nodeSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#nodeSelector) option.

On a touch enabled device where the user has interacted with touch a multi select treeView will automatically enable checkbox selection.

### Context Menus

The treeView has easy integration with the [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget to provide context menu support. The [treeView#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenu) option is used to provide a [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget options object. When the `contextMenu` option is used the [menu#event:beforeOpen](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html#event:beforeOpen) event/callback ui argument has these additional properties:

- menuElement: The menu jQuery object.
- treeView: This tree jQuery object.
- treeNodeAdapter: The [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) for this tree.
- selection: A jQuery object with the selected tree nodes at the time the menu was opened.
- selectedNodes: An array of the selected model nodes at the time the menu was opened.

Also the [menu#event:afterClose](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html#event:afterClose) event/callback will automatically focus the tree if the menu action didn't take the focus and the ui argument has these additional properties:

- menuElement: The menu jQuery object.
- treeView: This tree jQuery object.

If using the `contextMenu` option the [treeView#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuId) option can be used to give the menu element an ID. This is useful if other code must refer to the menu element or widget.

You can reference an already existing [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget by specifying the [treeView#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuId) in place of the [treeView#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenu) option.

If for any reason you don't want to use the [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget, the [treeView#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuAction) option allows you to respond to mouse or keyboard interactions that typically result in a context menu. Specifically Right Mouse click (via `contextmenu` event), Shift-F10 key (via `keydown` event) and the Windows context menu key (via `contextmenu` event). The original event is passed to the [treeView#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuAction) function. The event object can be used to position the menu. If you implement your own menu it is best if you put focus back on the treeView using the [treeView#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#focus) method when the menu closes (unless the menu action directs focus elsewhere).

Only one of [treeView#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuAction) and [treeView#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenu) or [treeView#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuId) can be specified. The [treeView#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenu) and [treeView#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuId) options can only be set when the treeView is initialized and it can't be changed. The [treeView#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuAction) cannot be set if the [treeView#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenu) or [treeView#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#contextMenuId) options were given when the tree was created.

### Drag and Drop

To enable drag and drop set the [treeView#dragAndDrop](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#dragAndDrop) option to true. The treeView can be a drag source for either a jQuery UI droppable or the same treeView instance and it can be a drop target for either a jQuery UI draggable or the same treeView instance.

To work with a droppable make sure the scope options of the droppable and treeView match and that the droppable accept option allows the treeView node (an element with class `a-TreeView-content`). On droppable drop you would typically call the [treeView#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getSelection) or [treeView#getSelectedNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getSelectedNodes) of the treeView instance.

To work with a draggable set the draggable `connectToTreeView` option to a selector for the treeView instance you want to be a drop target. Note a treeView plugin extends the draggable to add the `connectToTreeView` option.

The treeView supports dragging single or multiple nodes. In order to drag multiple nodes both the [treeView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#multiple) and [treeView#dragMultiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#dragMultiple) options must be true. Note it is possible for a treeView instance to support multiple selection but single drag. The reverse (single selection and multiple drag) is not possible.

Regardless of the drag source there are two modes of behavior for identifying drop targets. The mode is determined by the [treeView#dragReorder](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#dragReorder) option. If false (the default) nodes which can have children of the type(s) being dragged are targets and dropping on the target node results in the dragged node(s) being added as children. This mode is suitable when the children have an implicit order such as files in a file system folder. If `dragReorder` is true then a placeholder node, which dynamically moves between nodes whose parent can have children of the type(s) being dragged, is the target. Dropping on the placeholder target adds the nodes where the placeholder is. This mode is suitable for when nodes can be explicitly ordered by the user such as with sections in a document outline.

A drag and drop can perform various operations. There is builtin support for move, copy and add operations. Add only works when the drag is from a draggable, move and copy work when the tree is the drag source and target. The nodeAdapter decides what operations are supported with the treeView#dragOperations method based on the types of nodes being dragged, or any other context available to the adapter. Different operations are selected with keyboard modifiers: Shift, Ctrl, Alt, and Meta (only one modifier is allowed). Operations besides move, copy, and add are handled with custom logic in the beforeStop event handler. See [treeNodeAdapter#moveNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#moveNodes), and [treeNodeAdapter#copyNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#copyNodes) for how the `treeNodeAdapter` is used for drag and drop move and copy operations.

### Tree From Markup

A tree data model can be created from HTML markup inside the treeView element. A tree from markup has much less functionality. The markup is nested lists using `<ul>`, `<li>`, and `<a>` or `` for the node labels. This is typically used for navigation such as with a site map. The markup is converted to data and a default adapter with no editing capability is created to interface to it. The markup is removed as it is converted to data and is not restored even if the treeView widget is destroyed. The `<li>` element can include these attributes:

- class - Value returned by [treeNodeAdapter#getClasses](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getClasses).
- data-id - Value used by [treeNodeAdapter#setViewId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#setViewId).
- data-icon - Value returned by [treeNodeAdapter#getIcon](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getIcon).
- data-type - Used by default adapter, only useful if supplying treeNode#adapterTypesMap.
- data-current - A true value will select that node.
- data-disabled - Value returned by [treeNodeAdapter#isDisabled](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#isDisabled).

The span or anchor content is the label. The anchor `href` attribute is the link (returned by [treeNodeAdapter#getLink](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getLink)) used for navigation and the `target` attribute is the linkTarget (returned by [treeNodeAdapter#getLinkTarget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getLinkTarget)). Unless the top level list has a single item [treeView#showRoot](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#showRoot) should be false. Typically [treeView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#multiple) is false and [treeView#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#navigation) is true. An example below shows the basic expected markup.

### Keyboard End User Information

<table>
<caption>List of keyboard shortcuts</caption>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th scope="col">Key</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">Up Arrow, Down Arrow</th>
<td>Moves focus to the previous or next visible node and selects it.</td>
</tr>
<tr>
<th scope="row">Shift+Up Arrow,<br />
Shift+Down Arrow</th>
<td>Extends the selection to the previous or next visible node. Only if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">Ctrl+Up Arrow,<br />
Ctrl+Down Arrow</th>
<td>Moves focus to the previous or next visible node without changing the selection. Only if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">Ctrl+Up Arrow,<br />
Ctrl+Down Arrow</th>
<td>Moves focus to the previous or next visible node without changing the selection. Only if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">Space</th>
<td>Selects the focused node. Only if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">Ctrl+Space</th>
<td>Toggles selection of the focused node. Only if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">Right Arrow</th>
<td>On a collapsed node, expands the node.<br />
On an expanded node, moves to the first child of the node.<br />
On a leaf node, does nothing.</td>
</tr>
<tr>
<th scope="row">Left Arrow</th>
<td>On an expanded node, collapses the node.<br />
On a collapsed or leaf node, moves focus to the node's parent.</td>
</tr>
<tr>
<th scope="row">Home</th>
<td>Moves focus to the first visible node and selects it. Shift and Ctrl modifiers can be used if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">End</th>
<td>Moves focus to the last visible node and selects it. Shift and Ctrl modifiers can be used if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">Page Up,<br />
Page Down</th>
<td>Moves up or down a page of nodes. Shift modifier can be used if multiple selection is enabled.</td>
</tr>
<tr>
<th scope="row">printable character(s)</th>
<td>Sets focus to and selects the next node with a label that starts with the character(s).</td>
</tr>
<tr>
<th scope="row">Enter</th>
<td>Activates the focused node. The behavior of a node when it is activated is application defined. If the node has a link then navigate to that link.<br />
During in-place editing completes the editing.</td>
</tr>
<tr>
<th scope="row">Context Menu,<br />
Shift+F10</th>
<td>Invoke Context Menu if defined on current node.</td>
</tr>
<tr>
<th scope="row">F2</th>
<td>Rename the node. Only if the tree and node allow renaming and keyboard rename is enabled.</td>
</tr>
<tr>
<th scope="row">Insert</th>
<td>Insert a new node. Only if the tree and node allow inserting and keyboard insert is enabled.</td>
</tr>
<tr>
<th scope="row">Delete</th>
<td>Delete the node. Only if the tree and node allow deleting and keyboard delete is enabled.</td>
</tr>
<tr>
<th scope="row">Escape</th>
<td>Cancels in-place node label editing.</td>
</tr>
</tbody>
</table>

When the direction is right to left (RTL) the behavior of the left and right arrow keys is reversed.

### Initializer

#### \$(".selector").treeView(options)

Creates a treeView widget.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `options` | Object | A map of option-value pairs to set on the widget. |

Since:
- 5.0

##### Examples

Create a simple treeView with 4 nodes using the default node adapter. The page contains an empty div element with id `simpleTree`.

```
var treeData = {
    label: "Root",
    children: [
        {
            label: "Child 1",
            children: [
                {
                    label: "Grandchild"
                }
            ]
        },
        {
            label: "Child 2",
            children: []
        }
    ]
};
var myAdapter = $.apex.treeView.makeDefaultNodeAdapter( treeData );

$( "#simpleTree" ).treeView( {
    getNodeAdapter: function() { return myAdapter; },
    expandRoot: false
} );
```

Create a simple treeView from markup. The `display:none` style is used to keep the markup from being seen before it is turned into a treeView widget.

```
Markup:
  <ul style="display:none;">
    <li><a href="#toc">Table of Contents</a>
      <ul>
        <li><a href="#chapter1">Chapter 1</a>
        <li><a href="#chapter2">Chapter 2</a>
      </ul>
    </li>
  </ul>

JavaScript:
$( "#markupTree" ).treeView( {
    navigation: true
} );
```

### Options

#### actionsContext :[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

The [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) context that this treeView is associated with. This option is only applicable when [treeView#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#navigation) option is true and one or more node link URLs have an action binding.

##### Type:

- [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

Default Value:
- apex.actions (the global actions context)

##### Examples

Initialize the treeView with the actionsContext option specified.

```
$( ".selector" ).treeView( {

    actionsContext: myContext

} );
```

Get or set option actionsContext after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "actionsContext" );

// set

$( ".selector" ).treeView( "option", "actionsContext", myContext );
```

#### adapterTypesMap :Object

Only used when treeView#getNodeAdapter is null (when initializing the treeView from markup) The value is passed to [treeView.makeDefaultNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#.makeDefaultNodeAdapter) as `pTypes` parameter.

##### Type:

- Object

#### allowCopy :boolean

If true the selection can be copied to the clipboard using the browsers copy event. Can only be set at initialization time.

##### Type:

- boolean

Default Value:
- true

##### Example

Initialize the treeView with the allowCopy option specified.

```
$( ".selector" ).treeView( {

    allowCopy: false

} );
```

#### autoCollapse :boolean

If true only one sibling node can be expanded at a time.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the autoCollapse option specified.

```
$( ".selector" ).treeView( {

    autoCollapse: true

} );
```

Get or set option autoCollapse after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "autoCollapse" );

// set

$( ".selector" ).treeView( "option", "autoCollapse", true );
```

#### clickToRename :boolean

If true allow nodes to be renamed in-place by clicking on a selected node subject to data model approval via [treeNodeAdapter#allowRename](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowRename).

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the clickToRename option specified.

```
$( ".selector" ).treeView( {

    clickToRename: true

} );
```

Get or set option clickToRename after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "clickToRename" );

// set

$( ".selector" ).treeView( "option", "clickToRename", true );
```

#### collapsibleRoot :boolean

If false the root node cannot be collapsed (has no toggle area) otherwise the root can be collapsed. Can only be set at initialization time.

##### Type:

- boolean

Default Value:
- true

##### Example

Initialize the treeView with the collapsibleRoot option specified.

```
$( ".selector" ).treeView( {

    collapsibleRoot: false

} );
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

Initialize the treeView with the contextMenu option specified.

```
$( ".selector" ).treeView( {

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

Initialize the treeView with the contextMenuAction option specified.

```
$( ".selector" ).treeView( {

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

Initialize the treeView with the contextMenuId option specified.

```
$( ".selector" ).treeView( {

    contextMenuId: "myContextMenu"

} );
```

#### doubleClick :false\|string

Determines the behavior of double clicking on a node. One of:

- false: does nothing.
- "activate": the node is activated.
- "toggle": the node is collapsed if expanded and expanded if collapsed.

##### Type:

- false \| string

Default Value:
- false

##### Examples

Initialize the treeView with the doubleClick option specified.

```
$( ".selector" ).treeView( {

    doubleClick: "toggle"

} );
```

Get or set option doubleClick after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "doubleClick" );

// set

$( ".selector" ).treeView( "option", "doubleClick", "toggle" );
```

#### dragAndDrop :boolean

If true drag and drop is supported. The [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) must also support drag and drop.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the dragAndDrop option specified.

```
$( ".selector" ).treeView( {

    dragAndDrop: true

} );
```

Get or set option dragAndDrop after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragAndDrop" );

// set

$( ".selector" ).treeView( "option", "dragAndDrop", true );
```

#### dragAppendTo :string

Which element the draggable helper should be appended to while dragging. See jQuery UI draggable `appendTo` option for details.

##### Type:

- string

Default Value:
- "parent"

#### dragContainment :boolean

Constrains dragging to within the bounds of the specified element or region. See jQuery UI draggable `containment` option for details.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the dragContainment option specified.

```
$( ".selector" ).treeView( {

    dragContainment: true

} );
```

Get or set option dragContainment after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragContainment" );

// set

$( ".selector" ).treeView( "option", "dragContainment", true );
```

#### dragCursor :string

The CSS cursor during the drag operation. See jQuery UI draggable `cursor` option for details.

##### Type:

- string

Default Value:
- "auto"

#### dragCursorAt :false\|Object

Sets the offset of the dragging helper relative to the mouse cursor. See jQuery UI draggable `cursorAt` option for details.

##### Type:

- false \| Object

Default Value:
- false

#### dragExpandDelay :number

When dragging and hover over a collapsed node how long (in milliseconds) to wait until it expands -1 means don't expand.

##### Type:

- number

Default Value:
- 1200

##### Examples

Initialize the treeView with the dragExpandDelay option specified.

```
$( ".selector" ).treeView( {

    dragExpandDelay: 1000

} );
```

Get or set option dragExpandDelay after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragExpandDelay" );

// set

$( ".selector" ).treeView( "option", "dragExpandDelay", 1000 );
```

#### dragHelper :string\|function

Allows for a helper element to be used for dragging display. See jQuery UI draggable `helper` option for details.

##### Type:

- string \| function

Default Value:
- true

#### dragMultiple :boolean

This only applies if [treeView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#multiple) and [treeView#dragAndDrop](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#dragAndDrop) options are true.

If this option is true then multiple nodes can be dragged.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the dragMultiple option specified.

```
$( ".selector" ).treeView( {

    dragMultiple: true

} );
```

Get or set option dragMultiple after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragMultiple" );

// set

$( ".selector" ).treeView( "option", "dragMultiple", true );
```

#### dragOpacity :false\|number

Opacity for the helper while being dragged. See jQuery UI draggable `opacity` option for details.

##### Type:

- false \| number

Default Value:
- false

##### Examples

Initialize the treeView with the dragOpacity option specified.

```
$( ".selector" ).treeView( {

    dragOpacity: 0.4

} );
```

Get or set option dragOpacity after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragOpacity" );

// set

$( ".selector" ).treeView( "option", "dragOpacity", 0.4 );
```

#### dragReorder :boolean

If true the nodes can be reordered using drag and drop. If false drag and drop just moves (or copies) nodes from one parent node to another.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the dragReorder option specified.

```
$( ".selector" ).treeView( {

    dragReorder: true

} );
```

Get or set option dragReorder after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragReorder" );

// set

$( ".selector" ).treeView( "option", "dragReorder", true );
```

#### dragScroll :boolean

If set to true, container auto-scrolls while dragging. See jQuery UI draggable `scroll` option for details.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the treeView with the dragScroll option specified.

```
$( ".selector" ).treeView( {

    dragScroll: false

} );
```

Get or set option dragScroll after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragScroll" );

// set

$( ".selector" ).treeView( "option", "dragScroll", false );
```

#### dragScrollSensitivity :number

Distance in pixels from the edge of the viewport after which the viewport should scroll. Distance is relative to pointer, not the draggable. See jQuery UI draggable `scrollSensitivity` option for details.

##### Type:

- number

Default Value:
- 20

##### Examples

Initialize the treeView with the dragScrollSensitivity option specified.

```
$( ".selector" ).treeView( {

    dragScrollSensitivity: 30

} );
```

Get or set option dragScrollSensitivity after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragScrollSensitivity" );

// set

$( ".selector" ).treeView( "option", "dragScrollSensitivity", 30 );
```

#### dragScrollSpeed :number

The speed at which the viewport should scroll. See jQuery UI draggable `scrollSpeed` option for details.

##### Type:

- number

Default Value:
- 10

##### Examples

Initialize the treeView with the dragScrollSpeed option specified.

```
$( ".selector" ).treeView( {

    dragScrollSpeed: 8

} );
```

Get or set option dragScrollSpeed after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragScrollSpeed" );

// set

$( ".selector" ).treeView( "option", "dragScrollSpeed", 8 );
```

#### dragZIndex :number

Z-index for the helper while being dragged. See jQuery UI draggable `zIndex` option for details.

##### Type:

- number

Default Value:
- 1000

##### Examples

Initialize the treeView with the dragZIndex option specified.

```
$( ".selector" ).treeView( {

    dragZIndex: 1001

} );
```

Get or set option dragZIndex after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "dragZIndex" );

// set

$( ".selector" ).treeView( "option", "dragZIndex", 1001 );
```

#### expandRoot :boolean

If true the root node is initially expanded otherwise it is collapsed. Option expandRoot cannot be false when [treeView#collapsibleRoot](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#collapsibleRoot) is false

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the treeView with the expandRoot option specified.

```
$( ".selector" ).treeView( {

    expandRoot: false

} );
```

Get or set option expandRoot after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "expandRoot" );

// set

$( ".selector" ).treeView( "option", "expandRoot", false );
```

#### getNodeAdapter :function

A no argument function returning an object that implements the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) interface. The node adapter provides access to the data behind the treeView. This option is required unless the tree data is supplied by markup.

##### Type:

- function

Default Value:
- null

##### Example

Initialize the treeView with the getNodeAdapter option specified.

```
$( ".selector" ).treeView( {

    getNodeAdapter: function() { return myAdapter; }

} );
```

#### iconType :string

Icon type CSS class name. The iconType along with the value returned by [treeNodeAdapter#getIcon](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getIcon) make up the classes used for the tree node icon.

##### Type:

- string

Default Value:
- "a-Icon"

##### Examples

Initialize the treeView with the iconType option specified.

```
$( ".selector" ).treeView( {

    iconType: "fa"

} );
```

Get or set option iconType after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "iconType" );

// set

$( ".selector" ).treeView( "option", "iconType", "fa" );
```

#### idPrefix :string

Optional id prefix used to generate unique DOM ids. If not given the prefix is based on the `id` attribute of the treeView widget root element or if there is no id the prefix is "tree".

##### Type:

- string

Default Value:
- treeView element id or "tree" if id is null

##### Example

Initialize the treeView with the idPrefix option specified.

```
$( ".selector" ).treeView( {

    idPrefix: "tree7"

} );
```

#### keyboardAdd :boolean

If true allow a new child node to be added in-place with Insert key subject to model approval via [treeNodeAdapter#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowAdd).

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the keyboardAdd option specified.

```
$( ".selector" ).treeView( {

    keyboardAdd: true

} );
```

Get or set option keyboardAdd after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "keyboardAdd" );

// set

$( ".selector" ).treeView( "option", "keyboardAdd", true );
```

#### keyboardDelete :boolean

If true allow nodes to be deleted with the Delete key subject to model approval via [treeNodeAdapter#allowDelete](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowDelete).

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the keyboardDelete option specified.

```
$( ".selector" ).treeView( {

    keyboardDelete: true

} );
```

Get or set option keyboardDelete after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "keyboardDelete" );

// set

$( ".selector" ).treeView( "option", "keyboardDelete", true );
```

#### keyboardRename :boolean

If true allow nodes to be renamed in-place by pressing the F2 key subject to data model approval via [treeNodeAdapter#allowRename](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowRename).

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the keyboardRename option specified.

```
$( ".selector" ).treeView( {

    keyboardRename: true

} );
```

Get or set option keyboardRename after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "keyboardRename" );

// set

$( ".selector" ).treeView( "option", "keyboardRename", true );
```

#### labelClass :string

The CSS class name to use on the focusable node content element. This should only be changed if the node adapter implements [treeNodeAdapter#renderNodeContent](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#renderNodeContent).

##### Type:

- string

Default Value:
- "a-TreeView-label"

#### multiple :boolean

If true multiple nodes can be selected otherwise only single selection is supported.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the multiple option specified.

```
$( ".selector" ).treeView( {

    multiple: true

} );
```

Get or set option multiple after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "multiple" );

// set

$( ".selector" ).treeView( "option", "multiple", true );
```

#### navigation :boolean

If true then single click causes activation (unless [treeView#doubleClick](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#doubleClick) value is "activate") and if the node adapter supports [treeNodeAdapter#getLink](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getLink) and `getLink` returns a value the default behavior is to navigate to that link.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the navigation option specified.

```
$( ".selector" ).treeView( {

    navigation: true

} );
```

Get or set option navigation after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "navigation" );

// set

$( ".selector" ).treeView( "option", "navigation", true );
```

#### nodeSelector :boolean

If true a selector control is added before the node icon and label. The selector is a checkbox if multiple is true and a radio button if multiple is false.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the treeView with the nodeSelector option specified.

```
$( ".selector" ).treeView( {

    nodeSelector: true

} );
```

Get or set option nodeSelector after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "nodeSelector" );

// set

$( ".selector" ).treeView( "option", "nodeSelector", true );
```

#### scope :string

Only used with jQuery UI droppable for drag and drop. Used to group sets of draggable and droppable items. See jQuery UI droppable `scope` option for details.

##### Type:

- string

Default Value:
- "default"

##### Examples

Initialize the treeView with the scope option specified.

```
$( ".selector" ).treeView( {

    scope: "parts"

} );
```

Get or set option scope after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "scope" );

// set

$( ".selector" ).treeView( "option", "scope", "parts" );
```

#### showRoot :boolean

Determines if the tree is shown with a single root or with multiple "roots" which are really the first level nodes in the data model. If false the tree appears like a forest (multi-rooted). If true there is a single root node.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the treeView with the showRoot option specified.

```
$( ".selector" ).treeView( {

    showRoot: false

} );
```

Get or set option showRoot after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "showRoot" );

// set

$( ".selector" ).treeView( "option", "showRoot", false );
```

#### tooltip :Object

A tooltip options object suitable for the jQuery UI tooltip widget except that the items property is not needed (it is supplied by the treeView) and the content callback function receives a second argument that is the [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) the tooltip applies to. If not given there is no tooltip.

See the jQuery UI documentation for details on the tooltip widget.

##### Type:

- Object

Default Value:
- null

##### Example

Initialize the treeView with the tooltip option specified.

```
$( ".selector" ).treeView( {

    tooltip: {
        show: { delay: 1000, effect: "show", duration: 500 },
        content: function ( callback, node ) {
            if ( !node ) {
                return null;
            }
            return node.tooltip;
        }
    }

} );
```

#### useLinks :boolean

If true nodes with links are rendered as anchor elements. Nodes that have a link can be navigated to on activation regardless of this option value. By using an anchor element the built in browser behavior for opening links in new windows or tabs is available. Beware if combined with context menu options.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the treeView with the useLinks option specified.

```
$( ".selector" ).treeView( {

    useLinks: false

} );
```

Get or set option useLinks after initialization.

```
// get

let value = $( ".selector" ).treeView( "option", "useLinks" );

// set

$( ".selector" ).treeView( "option", "useLinks", false );
```

### Events

#### activate

Triggered when an accepted draggable starts dragging. Only applies when a connected draggable is being dragged. See jQuery UI droppable and sortable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-1">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>item</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### activateNode

Triggered when when nodes are activated with the Enter key or double click if [treeView#doubleClick](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#doubleClick) option set to "activate" or single click if [treeView#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#navigation) option is true and [treeView#doubleClick](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#doubleClick) is not "activate". Handler can call the event's preventDefault method to stop navigation.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-3">Properties</h6>
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
<th class="name" scope="row"><code>nodes</code></th>
<td class="type">Array.&lt;<a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a>&gt;</td>
<td class="description last">The currently selected nodes.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the treeView with the `activateNode` callback specified:

```
$( ".selector" ).treeView({
    activateNode: function( event, ui ) {}
});
```

Bind an event listener to the `treeviewactivatenode` event:

```
$( ".selector" ).on( "treeviewactivatenode", function( event, ui ) {} );
```

#### beforeStop

Triggered when dragging stops, but when the placeholder/helper is still available. See jQuery UI sortable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-5">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>items</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>operation</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>placeholder</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>sender</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### beginEdit

Triggered when when in-place add or rename begins.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-7">Properties</h6>
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
<th class="name" scope="row"><code>action</code></th>
<td class="type">string</td>
<td class="description last">One of "add" or "rename".</td>
</tr>
<tr>
<th class="name" scope="row"><code>node</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="description last">The node being renamed or added.</td>
</tr>
<tr>
<th class="name" scope="row"><code>input</code></th>
<td class="type">Element</td>
<td class="description last">The input element to enter the new or renamed node label.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the treeView with the `beginEdit` callback specified:

```
$( ".selector" ).treeView({
    beginEdit: function( event, ui ) {}
});
```

Bind an event listener to the `treeviewbeginedit` event:

```
$( ".selector" ).on( "treeviewbeginedit", function( event, ui ) {} );
```

#### deactivate

Triggered when an accepted draggable stops dragging. Only applies when a connected draggable is being dragged. See jQuery UI droppable and sortable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-9">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>items</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>operation</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>placeholder</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>sender</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### drag

Triggered while the mouse is moved during the dragging, immediately before the current move happens. See jQuery UI draggable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-11">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>items</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>operation</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>placeholder</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>sender</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### endEdit

Triggered when when in-place add or rename ends.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-13">Properties</h6>
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
<th class="name" scope="row"><code>action</code></th>
<td class="type">string</td>
<td class="description last">One of "add" or "rename".</td>
</tr>
<tr>
<th class="name" scope="row"><code>status</code></th>
<td class="type">string</td>
<td class="description last">One of "cancel" or "complete".</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the treeView with the `endEdit` callback specified:

```
$( ".selector" ).treeView({
    endEdit: function( event, ui ) {}
});
```

Bind an event listener to the `treeviewendedit` event:

```
$( ".selector" ).on( "treeviewendedit", function( event, ui ) {} );
```

#### expansionStateChange

Triggered when nodes are expanded or collapsed.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-15">Properties</h6>
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
<th class="name" scope="row"><code>node</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="description last">The node that is expanded or collapsed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>nodeContent$</code></th>
<td class="type">jQuery</td>
<td class="description last">The node content jQuery object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>expanded</code></th>
<td class="type">boolean</td>
<td class="description last">true if the node is now expanded and false otherwise.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the treeView with the `expansionStateChange` callback specified:

```
$( ".selector" ).treeView({
    expansionStateChange: function( event, ui ) {}
});
```

Bind an event listener to the `treeviewexpansionstatechange` event:

```
$( ".selector" ).on( "treeviewexpansionstatechange", function( event, ui ) {} );
```

#### out

Triggered when an accepted draggable is dragged out of the droppable. Only applies when a connected draggable is being dragged. See jQuery UI droppable and sortable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-17">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>items</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>operation</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>placeholder</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>sender</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### over

Triggered when an accepted draggable is dragged over the droppable. Only applies when a connected draggable is being dragged. See jQuery UI droppable and sortable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-19">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>items</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>operation</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>placeholder</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>sender</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### selectionChange

Triggered when the selection state changes. It has no additional data. When the selection changes the handler will generally want to get the current selection using the [treeView#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getSelection) or [treeView#getSelectedNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getSelectedNodes) methods.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Examples

Initialize the treeView with the `selectionChange` callback specified:

```
$( ".selector" ).treeView({
    selectionChange: function( event ) {}
});
```

Bind an event listener to the `treeviewselectionchange` event:

```
$( ".selector" ).on( "treeviewselectionchange", function( event ) {} );
```

#### start

Triggered when dragging a node starts. See jQuery UI draggable and sortable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-22">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>items</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>operation</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>placeholder</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>sender</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### stop

Triggered when dragging a node stops. See jQuery UI draggable and sortable for details.

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
<th class="name" scope="row"><code>ui</code></th>
<td class="type">Object</td>
<td class="description last"><h6 id="properties-24">Properties</h6>
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
<th class="name" scope="row"><code>helper</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>items</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>operation</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>originalPosition</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>placeholder</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>position</code></th>
<td class="type">object</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>sender</code></th>
<td class="type">jQuery</td>
<td class="description last"></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

### Methods

#### addNode(pToParentNodeContent\$, pIndex, pNodeopt)

Adds the given node to the adapter's data model and the treeView under the given parent tree node and at the given index. If `pNode` is null or omitted then the adapter should create and add a new default node. The treeNodeAdapter must implement the `addNode` and `allowAdd` methods and [treeNodeAdapter#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowAdd) must return true for the given node and parent.

##### Parameters:

<table class="params" aria-label="Parameters for addNode">
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
<th class="name" scope="row"><code>pToParentNodeContent$</code></th>
<td class="type">jQuery | null</td>
<td class="attributes"></td>
<td class="description last">The parent tree node to add a child to. If null or an empty jQuery object then the node is added to the root (this can only happen when the root node is not shown in the treeView).</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIndex</code></th>
<td class="type">integer</td>
<td class="attributes"></td>
<td class="description last">The index in the array of children to add the new node.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNode</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">(optional) New node to add.</td>
</tr>
</tbody>
</table>

##### Throws:

An exception if the node adapter doesn't implement [treeNodeAdapter#addNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#addNode), or [treeNodeAdapter#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowAdd) or if no parent node is given and option [treeView#showRoot](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#showRoot) is true.

#### addNodeInPlace(pParentNodeContent\$, pInitialLabel, pContextopt)

Adds a new tree node in the treeView and also adds it to the adapter's data model via the [treeNodeAdapter#addNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#addNode) method. First checks if the model allows add for the parent node by calling [treeNodeAdapter#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowAdd). The label of the new node is entered by the user in-place. The tree node label is replaced by a text input field. Pressing the Escape key will cancel the add, blur or Enter key will complete the add. The order of the new node among its siblings is determined by the adapter after the node is added.

##### Parameters:

<table class="params" aria-label="Parameters for addNodeInPlace">
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
<th class="name" scope="row"><code>pParentNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">The parent tree node to add the new node under. Must be a jQuery object representing exactly one tree node element.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pInitialLabel</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The initial label for the new node which is then edited.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pContext</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional arbitrary object to pass into the adapter allowAdd and addNode methods. This is an object containing information needed by the <a href="treeNodeAdapter.html#addNode">treeNodeAdapter#addNode</a> method to create the new node. In the typical simple case it is exactly the model node.</td>
</tr>
</tbody>
</table>

##### Throws:

An exception if the nodeAdapter doesn't implement [treeNodeAdapter#addNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#addNode) or [treeNodeAdapter#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowAdd).

#### collapse(pNodeContent\$opt)

Collapse the given tree node(s) or if no node is given collapse the root node(s). Collapsing a node makes all of its children hidden. See also [treeView#collapseAll](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#collapseAll) and [treeView#expand](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#expand).

##### Parameters:

<table class="params" aria-label="Parameters for collapse">
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
<th class="name" scope="row"><code>pNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">One or more tree nodes to collapse or null or omit to collapse the root(s).</td>
</tr>
</tbody>
</table>

##### Example

This example will collapse the currently selected node(s) if expanded.

```
var tree$ = $( ".selector" );
tree$.treeView( "collapse", tree$.treeView( "getSelection" ) );
```

#### collapseAll(pNodeContent\$opt)

Collapse the given tree node(s) or if no node is given the root node(s) and recursively collapse all its children. See also [treeView#expandAll](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#expandAll).

##### Parameters:

<table class="params" aria-label="Parameters for collapseAll">
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
<th class="name" scope="row"><code>pNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">One or more tree nodes to collapseALl from or null or omit to collapseAll from the root(s).</td>
</tr>
</tbody>
</table>

##### Example

This example will collapse all tree nodes.

```
$( ".selector" ).treeView( "collapseAll" );
```

#### copyNodes(pToParentNodeContent\$, pIndex, pNodeContent\$)

Copies the given tree nodes to be children of the given parent tree node starting at the given index. The adapter must allow each of the nodes to be added to the new parent.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pToParentNodeContent$` | jQuery | parent tree node to copy nodes to. If null or an empty jQuery object then the node is copied to the root (this can only happen when the root node is not shown in the treeView). |
| `pIndex` | integer | The index in the array of children to copy the nodes to. |
| `pNodeContent$` | jQuery | The tree nodes to be copied. |

##### Throws:

An exception if the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) doesn't implement [treeNodeAdapter#copyNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#copyNodes), or [treeNodeAdapter#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowAdd).

#### deleteNodes(pNodeContent\$)

Deletes nodes from the adapter's data model and treeView. First checks that the model allows delete with [treeNodeAdapter#allowDelete](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowDelete) then deletes the node using [treeNodeAdapter#deleteNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#deleteNode) (a potentially async operation). If the deletes are allowed and successful then the tree nodes are removed from the treeView DOM.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNodeContent$` | jQuery | One or more tree nodes to delete. |

##### Throws:

An exception if the node adapter doesn't implement [treeNodeAdapter#deleteNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#deleteNode) or [treeNodeAdapter#allowDelete](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowDelete).

#### deleteTreeNodes(pNodeContent\$)

Deletes tree nodes that have already been deleted from the adapter's data model.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNodeContent$` | jQuery | One or more tree nodes to delete. |

#### expand(pNodeContent\$opt)

Expand the given tree node(s) or if no node is given expand the root node(s). Expanding a node makes all of its children visible. See also [treeView#expandAll](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#expandAll) and [treeView#collapse](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#collapse).

##### Parameters:

<table class="params" aria-label="Parameters for expand">
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
<th class="name" scope="row"><code>pNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">One or more tree nodes to expand or null or omit to expand the root(s).</td>
</tr>
</tbody>
</table>

##### Example

This example will expand the currently selected node(s) if collapsed and has children.

```
var tree$ = $( ".selector" );
tree$.treeView( "expand", tree$.treeView( "getSelection" ) );
```

#### expandAll(pNodeContent\$opt)

Expand the given tree node(s) or if no node is given the root node(s) and recursively expand all its children. See also [treeView#collapseAll](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#collapseAll).

##### Parameters:

<table class="params" aria-label="Parameters for expandAll">
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
<th class="name" scope="row"><code>pNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">One or more tree nodes to expand all from or null or omit to expand all from the root(s).</td>
</tr>
</tbody>
</table>

##### Example

This example will expand all tree nodes.

```
$( ".selector" ).treeView( "expandAll" );
```

#### find(pOptions) → {jQuery}

Search through the tree starting at the root or the given parent tree node for one or more matching nodes (the parent tree node is not included in the search). The set of matched tree nodes is returned as a `jQuery` object. The match criteria is determined by the `match` function that is called for each node. The search can be limited to a specified depth (from the starting node). Find can return either all the nodes matched or just the first one.

This is a synchronous API so it can only search tree nodes that have been loaded. If the data model is loaded asynchronously only those tree nodes that have already been loaded into the model can be searched. The tree nodes don't need to be expanded to be searched, but searching will cause them to be rendered to the DOM if they aren't already.

##### Parameters:

<table class="params" aria-label="Parameters for find">
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
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">Object</td>
<td class="description last">The properties control how the search is done.
<h6 id="properties-25">Properties</h6>
<table class="params" aria-label="Parameters for pOptions">
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
<th class="name" scope="row"><code>match</code></th>
<td class="type">function</td>
<td class="attributes"></td>
<td class="description last">A function that takes a node as its only argument and returns true if the node is to be included in the find results.</td>
</tr>
<tr>
<th class="name" scope="row"><code>parentNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The parent of the nodes to start search from. The default is to start at the root(s).</td>
</tr>
<tr>
<th class="name" scope="row"><code>depth</code></th>
<td class="type">integer</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">How deep to search from the starting tree node. A value of -1 means no depth limit. The default is 1.</td>
</tr>
<tr>
<th class="name" scope="row"><code>findAll</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true find all matches up to the given depth. If false return the first found. Default false.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Returns:

A jQuery object with the set of tree nodes found. It may be empty if no nodes were found.

Type
jQuery

##### Example

This example searches the whole tree for any nodes that contains the string "ton" in the `label` property. It then adds the class "findMatch" to each node's label. The default tree node adapter uses the `label` property as the node label to display.

```
$( ".selector" ).treeView( "find", {
    depth: -1,
    findAll: true,
    match: function(n) {
        return n.label.indexOf( "ton" ) >= 0;
    }
} ).find( ".a-TreeView-label" ).addClass( "findMatch" );
```

#### focus()

Set focus to the tree node that last had focus.

##### Example

Focus the treeView.

```
$( ".selector" ).treeView( "focus" );
```

#### getExpandedNodeIds()

Get the ids of expanded nodes. The [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) must implement view state methods.

##### Throws:

An exception if the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) doesn't implement [treeNodeAdapter#getExpandedNodeIds](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getExpandedNodeIds).

##### Returns:

\[\*\] Array of data model node ids one for each expanded node

##### Examples

This example gets the expanded node ids for an APEX Tree region with HTML DOM id "myTree" and saves them in a page item. This could be done when the page is submitted (See event [apex.event:apexpagesubmit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexpagesubmit)) or every time the expansion state changes (see event [treeView#event:expansionStateChange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#event:expansionStateChange)).

```
var expandedIds = apex.region( "myTree" ).call( "getExpandedNodeIds" );
$s( "P1_EXPANDED_IDS", expandedIds.join( ":" ) );
```

This example builds on the previous one to restore the node expansion state when the page loads; when the tree node adapter is created. This code goes in the Tree region JavaScript Initialization Code attribute for region with HTML DOM id "myTree". Note the `makeNodeAdapter` option is specific to the APEX Tree region not the treeView widget.

```
function( options ) {
    options.makeNodeAdapter = function( data, types, hasIdentity ) {
        var adapter;
        adapter = $.apex.treeView.makeDefaultNodeAdapter( data, types, hasIdentity, $v("P1_EXPANDED_IDS").split(":") );
        return adapter;
    }
    return options;
}
```

#### getExpandedState() → {Object}

Get a map from node id to Boolean where true = expanded and false = collapsed

Note It is not guaranteed that the map contain all nodes! It may only contain nodes that have been explicitly expanded or collapsed by the user. This is up to the tree node adapter. The [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) must implement view state methods.

##### Throws:

An exception if the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) doesn't implement [treeNodeAdapter#getExpandedState](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getExpandedState).

##### Returns:

An object where the properties are node ids and the values are true if expanded and false otherwise.

Type
Object

#### getNodeAdapter() → {[treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html)}

Returns the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) that the treeView is using.

##### Returns:

Type
[treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html)

##### Example

This example logs to the console the node label of each child of the first selected node.

```
var i, count,
    selectedNode = $( ".selector" ).treeView( "getSelectedNodes" )[0],
    adapter = $( ".selector" ).treeView( "getNodeAdapter" );
if ( selectedNode ) {
    count = adapter.childCount( selectedNode );
    for ( i = 0; i < count; i++ ) {
        console.log( "Label: " + adapter.child( selectedNode, i ).label );
    }
}
```

#### getNodes(pNodeContent\$) → {Array.\<[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)\>}

Given a jQuery object with a set of treeView nodes return an array of adapter data model nodes that corresponds to each treeView node in the set. The tree nodes passed in must be the ones this treeView instance rendered with class `a-TreeView-content`.

This is for mapping from DOM elements to model node objects.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNodeContent$` | jQuery | jQuery Object holding a set of tree nodes. |

##### Returns:

array of data model nodes.

Type
Array.\<[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)\>

##### Example

This example replaces the labels of all the selected nodes with a lowercase label.

```
var tree$ = $( ".selector" ),
    selection$ = tree$.treeView( "getSelection" ),
    nodes = tree$.treeView( "getNodes", selection$ );
nodes.forEach( function( n, i ) {
    n.label = n.label.toLowerCase();
    tree$.treeView( "update", selection$.eq(i) )
} );
```

#### getSelectedNodes() → {Array.\<[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)\>}

Returns the adapter's data model nodes corresponding to the currently selected treeView nodes. See also [treeView#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getSelection) and [treeView#getNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getNodes).

##### Returns:

Array of data model nodes selected.

Type
Array.\<[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)\>

##### Example

This example gets the nodes for the current selection.

```
var selectedNodes = $( ".selector" ).treeView( "getSelectedNodes" );
```

#### getSelection() → {jQuery}

Returns the set of treeView nodes currently selected. If there is no selection the empty set is returned. The elements returned have the class `a-TreeView-content`.

##### Returns:

jQuery object with the set of selected tree nodes.

Type
jQuery

##### Example

This example gets current selected treeView node elements as a jQuery set.

```
var selection$ = $( ".selector" ).treeView( "getSelection" );
```

#### getTreeNode(pNode) → {jQuery}

Given a [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) node return a jQuery object with the treeView element corresponding to that node. The element returned has the class `a-TreeView-content`. The [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) must implement view state methods.

This is for mapping from a data model node object to a DOM element.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The model node to get the corresponding treeView node DOM element for. |

##### Throws:

An exception if the node adapter doesn't implement [treeNodeAdapter#getViewId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getViewId).

##### Returns:

jQuery object with the treeView nodes for the given data model node.

Type
jQuery

#### moveNodes(pToParentNodeContent\$, pIndex, pNodeContent\$)

Moves the given tree nodes to be children of the given parent tree node starting at the given index. The adapter must allow each of the nodes to be added to the new parent and must allow all the nodes to be deleted.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pToParentNodeContent$` | jQuery | The parent tree node to move node to. If null or an empty jQuery object then the node is moved to the root (this can only happen when the root node is not shown in the treeView) |
| `pIndex` | integer | The index in the array of children to move the nodes to. |
| `pNodeContent$` | jQuery | The tree nodes to be moved. |

##### Throws:

An exception if the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) doesn't implement [treeNodeAdapter#moveNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#moveNodes), or [treeNodeAdapter#allowDelete](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowDelete) or [treeNodeAdapter#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowAdd).

#### refresh(pNodeContent\$opt)

Call to render the whole tree or sub trees whenever the adapter's data model changes.

##### Parameters:

<table class="params" aria-label="Parameters for refresh">
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
<th class="name" scope="row"><code>pNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The treeView node(s) to refresh from. If not given or null start from the root of the tree.</td>
</tr>
</tbody>
</table>

##### Example

This example refreshes (renders) the whole tree.

```
$( ".selector" ).treeView( "refresh" );
```

#### renameNodeInPlace(nodeContent\$)

Renames a tree node in the treeView and updates the model via the node adapter [treeNodeAdapter#renameNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#renameNode) method. First checks it the model allows the node to be renamed. The rename is done by the user in-place. The tree node label is replaced by a text input field. Escape will cancel, Enter key or loosing focus will complete the rename. The order of the renamed node among its siblings is determined by the model after the node is renamed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `nodeContent$` |  | the tree node to rename. Must be a jQuery object representing exactly one tree node element. |

##### Throws:

An exception if the nodeAdapter doesn't implement [treeNodeAdapter#renameNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#renameNode) or [treeNodeAdapter#allowRename](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowRename).

#### setSelectedNodes(pNodes, pFocusopt, pNoNotifyopt)

Sets the current tree selection. Given an array of nodes from the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) data model, find the corresponding treeView node elements and set the selection to those nodes. The [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) must implement view state methods. Depending on the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) implementation it may be possible to supply an array of objects with just the node's identity property filled in. See also [treeView#getSelectedNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getSelectedNodes).

##### Parameters:

<table class="params" aria-label="Parameters for setSelectedNodes">
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
<th class="name" scope="row"><code>pNodes</code></th>
<td class="type">Array.&lt;<a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a>&gt;</td>
<td class="attributes"></td>
<td class="description last">An array of model nodes.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the tree node corresponding to the first node in <code class="prettyprint">pNodes</code> will be focused.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the <a href="treeView.html#event:selectionChange">treeView#event:selectionChange</a> event will be suppressed.</td>
</tr>
</tbody>
</table>

##### Throws:

An exception if the node adapter doesn't implement [treeNodeAdapter#getViewId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getViewId).

##### Example

This example sets the section to the node in variable `theNode` and focuses that node. Data model nodes can be found directly from the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) or from [treeView#getNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getNodes) or [treeView#getSelectedNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getSelectedNodes).

```
$( ".selector" ).treeView( "setSelectedNodes", [theNode], true);
```

#### setSelection(pNodeContent\$, pFocusopt, pNoNotifyopt)

Sets the current tree selection. The treeView nodes passed in must be the ones this treeView instance rendered with class `a-TreeView-content`.

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
<th class="name" scope="row"><code>pNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">A jQuery object with the treeView nodes to select. An empty jQuery set will clear the selection.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first tree node in <code class="prettyprint">pNodeContent$</code> will be focused.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the <a href="treeView.html#event:selectionChange">treeView#event:selectionChange</a> event will be suppressed.</td>
</tr>
</tbody>
</table>

##### Examples

This example selects all the nodes 3 levels deep in the treeView. It uses knowledge of how the treeView renders node content by default, which could change in future release. Specifically it looks for the `aria-level` attribute. Note the `"[aria-level='3']"` selector will only find nodes that have been rendered, so will not find descendant nodes under nodes that have never been expanded.

```
$( ".selector" ).treeView( "setSelection", $( "[aria-level='3']" ).parent() );
```

This example selects all the nodes under the currently selected nodes. It expands the selected nodes first to make sure all descendant nodes are rendered. It suppresses the [treeView#event:selectionChange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#event:selectionChange) event.

```
var tree$ = $( ".selector" ),
    selection$ = tree$.treeView( "getSelection" );
tree$.treeView( "expandAll", selection$ )
    .treeView( "setSelection", selection$.parent().find( ".a-TreeView-content" ), false, true );
```

This example clears the selection.

```
$( ".selector" ).treeView( "setSelection", $() );
```

#### update(pNodeContent\$, pRenderopt)

Call this method if the model node changes in a way that would affect its display in the tree. For example if the label or icon changes. If a node's children have changed then call [treeView#refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#refresh) instead. If a nodes position has changed then call refresh on the nodes parent node.

##### Parameters:

<table class="params" aria-label="Parameters for update">
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
<th class="name" scope="row"><code>pNodeContent$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">The treeView node for which the underlying data model node has changed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRender</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The default is true. Set this to false to avoid rendering the tree node content if only the hidden state or css classes have changed.</td>
</tr>
</tbody>
</table>

##### Example

See [treeView#getNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getNodes) for an example.

#### (static) makeDefaultNodeAdapter(pData, pTypesopt, pHasIdentityopt, pInitialExpandedNodeIdsopt) → {[treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html)}

Returns a default node adapter. See [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) for details.

This returns an adapter for the default data model. See [treeNodeAdapter.defaultNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.defaultNode) for details on the node object properties. Use it if you don't already have a prescribed data model. This supports all the treeView features except for asynchronous (lazy) loading of child nodes and custom node rendering. Although it supports editing there is no built-in support for persisting the edits. Editing through the default tree node adapter should be considered an experimental feature subject to change.

You can augment the adapter returned from this function to change its behavior. For example by adding a [treeNodeAdapter#fetchChildNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#fetchChildNodes) method to lazy load child nodes or a custom node rendering function as shown in the examples below.

##### Parameters:

<table class="params" aria-label="Parameters for makeDefaultNodeAdapter">
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
<th class="name" scope="row"><code>pData</code></th>
<td class="type"><a href="treeNodeAdapter.html#.defaultNode">treeNodeAdapter.defaultNode</a></td>
<td class="attributes"></td>
<td class="description last">This object is the root node of the tree.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pTypes</code></th>
<td class="type">treeNodeTypes</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A <a href="treeNodeAdapter.html#.typeInfo">treeNodeAdapter.typeInfo</a> structure with metadata about the node types.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pHasIdentity</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Set to true if the tree model nodes have identity (<code class="prettyprint">id</code> property). Set to false if nodes do not have identity. The default is true. This argument can be omitted if the <code class="prettyprint">pInitialExpandedNodeIds</code> argument is given.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pInitialExpandedNodeIds</code></th>
<td class="type">Array</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An array of node ids for all the nodes that should be initially expanded.</td>
</tr>
</tbody>
</table>

##### Returns:

The default node adapter for the given data.

Type
[treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html)

##### Examples

This example creates an adapter for nodes that don't have any identity (they have no `id` property). Also there is no type information.

```
var treeData = {
    label: "Root",
    children: [
        {
            label: "Child 1",
            children: [
                {
                    label: "Grandchild"
                }
            ]
        },
        {
            label: "Child 2",
            children: []
        }
    ]
};
var adapter = $.apex.treeView.makeDefaultNodeAdapter( treeData, null, false );
```

This example creates an adapter for nodes that do have identity. See also the example for [treeView#getExpandedNodeIds](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getExpandedNodeIds).

```
var treeData = {
    id: "0001",
    label: "Root",
    children: [
        {
            id: "0009",
            label: "Child 1",
            children: [
                ...
            ]
        },
        ...
    ]
};
var adapter = $.apex.treeView.makeDefaultNodeAdapter( treeData );
// the following has the same effect
// var adapter = $.apex.treeView.makeDefaultNodeAdapter( treeData, null, true );
```

This example augments the returned adapter to support lazy loading node children.

```
var treeData = {
    id: "0001",
    label: "Root",
    children: [
        {
            id: "0009",
            label: "Child 1",
            children: null // this means lazy load the children
        },
        ...
    ]
};
var adapter = $.apex.treeView.makeDefaultNodeAdapter( treeData );
// Replace these functions to be aware of nodes that need lazy loading
//   no children property or children = [] means there are no children
//   children = null means the server has or may have more children
adapter.childCount = function( n ) {
    if ( n.children === null ) {
        return null;
    } // else
    return n.children ? n.children.length : 0;
};
adapter.hasChildren = function( n ) {
    if ( n.children === null ) {
        return null;
    } // else
    return n.children ? n.children.length > 0 : false;
};
// add this method to fetch children when node is first expanded
adapter.fetchChildNodes = function( n, callback ) {
    // Simulate adding lazy loaded nodes
    // This would normally be an ajax call such as apex.server.process
    // Typically send something like n.id to the server so it knows which children to return
    setTimeout(function() {
        // when the ajax call returns add the children to the parent (n).
        var c = n.children = [];
        // this example just adds dummy data
        c.push( {
            id: n.id + "_l1",
            label: "Lazy Child 1",
            children: [] // no children we're sure
        });
        c.push( {
            id: n.id + "_l2",
            label: "Lazy Child 2",
            children: null // there could be more lazy loaded children
        });
        // when the model data is updated let the treeView know
        callback( true );
    }, 800 );
};
```

This example adds a custom node rendering function to the adapter that puts the first letter of the label in bold tag.

```
...
var adapter = $.apex.treeView.makeDefaultNodeAdapter( treeData );
adapter.renderNodeContent = function( node, out, options, state ) {
    var label;
    if ( options.nodeSelector > 0 ) {
        // simulate a checkbox or radio button depending on single/multiple selection
        cls = "u-selector";
        if ( options.nodeSelector === 1 ) {
            cls += " u-selector--single";
        }
        out.markup('');
    }
    if ( adapter.getIcon ) {
        icon = adapter.getIcon( node );
        if ( icon !== null ) {
            out.markup( "" );
        }
    }
    // format label
    label = apex.util.escapeHTML( adapter.getLabel( node ) );
    label = "<b>" + label.substring(0,1) + "</b>" + label.substring(1);
    // assume the node is not a link
    out.markup( "<span tabIndex='-1' role='treeitem'" )
        .attr( "class", options.labelClass )
        .attr( "aria-level", state.level )
        .attr( "aria-selected", state.selected ? "true" : "false" )
        .optionalAttr( "area-disabled", state.disabled ? "true" : null )
        .optionalAttr( "aria-expanded", state.hasChildren === false ? null : state.expanded ? "true" : "false" )
        .markup( ">" )
        .markup( label )
        .markup( "" );
}
```
