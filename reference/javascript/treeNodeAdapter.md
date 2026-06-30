<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html -->
<!-- Interfaces: treeNodeAdapter -->

# Interface: treeNodeAdapter

## QuickNav

### [Methods](#methods-section)

- [addNode](#addNode)
- [allowAdd](#allowAdd)
- [allowDelete](#allowDelete)
- [allowDrag](#allowDrag)
- [allowRename](#allowRename)
- [child](#child)
- [childCount](#childCount)
- [clearViewId](#clearViewId)
- [copyNodes](#copyNodes)
- [deleteNode](#deleteNode)
- [dragOperations](#dragOperations)
- [fetchChildNodes](#fetchChildNodes)
- [getAccDescription](#getAccDescription)
- [getClasses](#getClasses)
- [getExpandedNodeIds](#getExpandedNodeIds)
- [getExpandedState](#getExpandedState)
- [getIcon](#getIcon)
- [getLabel](#getLabel)
- [getLink](#getLink)
- [getLinkTarget](#getLinkTarget)
- [getViewId](#getViewId)
- [hasChildren](#hasChildren)
- [isDisabled](#isDisabled)
- [isExpanded](#isExpanded)
- [isHidden](#isHidden)
- [moveNodes](#moveNodes)
- [renameNode](#renameNode)
- [renderNodeContent](#renderNodeContent)
- [root](#root)
- [setExpanded](#setExpanded)
- [setViewId](#setViewId)

### [Type Definitions](#typedefs-section)

- [defaultNode](#.defaultNode)
- [node](#.node)
- [typeInfo](#.typeInfo)

## treeNodeAdapter

A treeNodeAdapter is an interface used by the [treeView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html) widget for all access to the underlying tree data structure. The `treeView` has no direct access to the nodes of the tree or any properties of nodes such as label or icon. It is possible to create a `treeNodeAdapter` interface for any hierarchical data structure. The tree data structure must be singly rooted. If the data doesn't have a single root then the adapter must generate a virtual one where the multiple roots are its children.

The adapter provides the following areas of functionality:

- Access to the hierarchical structure through methods such as [treeNodeAdapter#root](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#root) and [treeNodeAdapter#child](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#child). The adapter supports lazy loading with the [treeNodeAdapter#fetchChildNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#fetchChildNodes) method.
- Access to node properties such as label, link, and icon that the [treeView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html) uses for display purposes. For example [treeNodeAdapter#getLabel](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getLabel). This includes an optional advanced presentation layer function [treeNodeAdapter#renderNodeContent](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#renderNodeContent) that gives full control over how the node content is rendered.
- Tree modification methods such as [treeNodeAdapter#deleteNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#deleteNode) and [treeNodeAdapter#addNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#addNode). These methods are only required when the tree is editable.
- Modification access control methods to determine what modifications are allowed. For example [treeNodeAdapter#allowDelete](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#allowDelete). These methods are only required when the tree is editable.
- Optional methods to persist, in the adapter's data model, view state such as which nodes are expanded. For example [treeNodeAdapter#setExpanded](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#setExpanded)

A default treeNodeAdapter implementation is provided by calling [treeView.makeDefaultNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#.makeDefaultNodeAdapter).

The adapter interface is provided to the treeView with the [treeView#getNodeAdapter(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getNodeAdapter1) option.

This interface is used by the [treeView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html). Rarely does a developer need to call these methods. This interface is documented to allow developers to create a custom `treeNodeAdapter` implementation for their own data.

### Methods

#### addNode(pParent, pIndex, pLabelopt, pContextopt, pCallback)

Adds a new node as a child of the given parent node with the given label (optional) and at the given index.

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
<th class="name" scope="row"><code>pParent</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="attributes"></td>
<td class="description last">The parent node to add the new node to.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIndex</code></th>
<td class="type">integer</td>
<td class="attributes"></td>
<td class="description last">The index among the existing children at which to add the new node.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The label for the new node. If not given the label may have been given a default by the adapter.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pContext</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Arbitrary additional information that can be used in creating the new node. It is up to the adapter how to use this parameter. It could be the new node itself.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes"></td>
<td class="description last">A function to call when the new node has been added. The function takes two parameters. The first is the new child node that was added. If the child node is false the treeView may try again to add a node. If the child node is null then the add failed and the treeView will remove the node. The second parameter is the index the node was actually inserted at which could differ from <code class="prettyprint">pIndex</code>.</td>
</tr>
</tbody>
</table>

#### allowAdd(pNode, pOperation, pChildrenopt) → {boolean}

Check if the node allows adding children to it. Returns true if the node allows children to be added to it. If the children parameter is passed in return true if each of those children (or ones just like them) can be added. Children is an array of nodes. Operation is "add" when adding a new node ([treeNodeAdapter#addNode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#addNode) will be called), "move" when the node comes from elsewhere in the tree and is being moved ([treeNodeAdapter#moveNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#moveNodes) will be called), and "copy" when the node is a copy of a node from elsewhere in the tree ([treeNodeAdapter#copyNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#copyNodes) will be called). Additional operation values are possible if the adapter supports custom drag operations.

##### Parameters:

<table class="params" aria-label="Parameters for allowAdd">
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
<th class="name" scope="row"><code>pNode</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="attributes"></td>
<td class="description last">The node to check if adding children is allowed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOperation</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Specifies how the node would be added. One of "add", "move", "copy" or a custom value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pChildren</code></th>
<td class="type">Array.&lt;<a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a>&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The children to be added.</td>
</tr>
</tbody>
</table>

##### Returns:

true if children can be added and false otherwise.

Type
boolean

#### allowDelete(pNode) → {boolean}

Return true if the given node can be deleted.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to check if deleting is allowed. |

##### Returns:

true if the node can be deleted and false otherwise.

Type
boolean

#### allowDrag(pNode) → {boolean}

Return true if the given node can be dragged.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to check if dragging is allowed. |

##### Returns:

true if the node can be dragged and false otherwise.

Type
boolean

#### allowRename(pNode) → {boolean}

Return true if the given node can be renamed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to check if renaming is allowed. |

##### Returns:

true if the node can be renamed and false otherwise.

Type
boolean

#### child(pNode, pIndex) → {[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)}

Return the i<sup>th</sup> child of the given node.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the child node. |
| `pIndex` | integer | The index of the child to return. |

##### Returns:

The child node. If the node has no children or no child at index i then undefined is returned.

Type
[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)

#### childCount(pNode) → (nullable) {number}

Returns the number of children that the given node has or null if the answer is not yet known, which can happen for lazy loaded nodes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the number of children. |

##### Returns:

The number of children or null if unknown.

Type
number

#### clearViewId(pTreeId, pNodeopt)

Remove the view id mapping for node `pNode`. If the node is null then all previous view id mappings should be removed. See also [treeNodeAdapter#setViewId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#setViewId).

##### Parameters:

<table class="params" aria-label="Parameters for clearViewId">
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
<th class="name" scope="row"><code>pTreeId</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">This is a unique opaque identifier supplied by the treeView.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNode</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The node to clear the view id for.</td>
</tr>
</tbody>
</table>

#### copyNodes(pParent, pIndex, pNodes, pCallback)

Copies one or more nodes from elsewhere in the tree to be children of the given parent starting at the given index among the existing children of the parent. A copy of each node and all its descendants is made. The copies are the same except for identity and parentage. When the nodes have been copied the callback function is called.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pParent` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The parent node to copy nodes to. The copied nodes (`pNodes`) become children of this node. |
| `pIndex` | integer | The index at which to insert the copied nodes. |
| `pNodes` | Array.\<[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)\> | An array of nodes from this tree to copy. |
| `pCallback` | function | This function must be called when the nodes have been copied. The function takes one parameter which is a places array of indexes where the children nodes ended up. If the tree nodes are sorted then even though they were copied starting at the given index they could end up at any position. If the tree nodes are not sorted then places will consist of integers index ... index + n - 1 where n is the number of nodes copied. If the copy fails call with the places parameter equal to false. If some of the nodes can't be copied return -1 for its index in the places array. |

#### deleteNode(pNode, pCallback, pMore)

Deletes the given node. When the node has been deleted the callback is called.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to delete. |
| `pCallback` | function | The callback function must be called when the node is deleted. It takes one parameter, status, that is true if the delete was successful and false otherwise. |
| `pMore` | boolean | If this is true another `deleteNode` call will be made right away. This parameter can be ignored or can be used to batch up deletes. In either case each call to `pCallback` must be made. |

#### dragOperations(pNodes) → {Object}

Determine which operations are allowed while dragging the given array of nodes. Return an object with allowed drag operations. The properties are: "normal", "ctrl", "alt", "shift", "meta". The standard values are "move", "copy" or "add". Other values are allowed. The normal property is required. The default should be:
`{ normal: "move", ctrl: "copy" }`
or if nodes is null:
`{ normal: "add" }`

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNodes` | Array.\<[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)\> | An array of nodes being dragged or null when dragging from an external source. |

##### Returns:

Allowed drag operations as described above.

Type
Object

#### fetchChildNodes(pNode, pCallback)

Fetch child nodes for the given node from a server (or by any other asynchronous means). This method is optional. This is used for asynchronous/lazy tree construction. The root and first level of nodes should not be lazy loaded. May be called after [treeNodeAdapter#childCount](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#childCount) returns null.

##### Parameters:

<table class="params" aria-label="Parameters for fetchChildNodes">
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
<th class="name" scope="row"><code>pNode</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="description last">The node for which to fetch children.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="description last"><em>function(status)</em> This function must be called when the asynchronous operation has completed and nodes have been added to <code class="prettyprint">pNode</code>. The status value is:
<ul>
<li>&gt; 0 (or true) if 1 or more children were fetched.</li>
<li>0 if the node has 0 children.</li>
<li>false if there was an error fetching the children.</li>
</ul></td>
</tr>
</tbody>
</table>

#### getAccDescription(pNode) → {string}

Returns the accessible description of the given node. This is an optional method. The description is used to provide additional information about the node to assistive technology.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the accessible description. |

##### Returns:

The node's accessible description.

Type
string

#### getClasses(pNode) → {string}

Returns one or more CSS classes to add to the node content container or null if none. Multiple classes are separated by a space. This is an optional method.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the CSS classes. |

##### Returns:

The node's CSS Classes.

Type
string

#### getExpandedNodeIds(pTreeId) → {Array}

Returns an array of each of the expanded node's id. Can be used to persist the expansion state. See [treeView#getExpandedNodeIds](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getExpandedNodeIds).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTreeId` | string | This is a unique opaque identifier supplied by the treeView. |

##### Returns:

Type
Array

#### getExpandedState(pTreeId)

Returns map of node id to expansion state. See [treeView#getExpandedState](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#getExpandedState).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTreeId` | string | This is a unique opaque identifier supplied by the treeView. |

#### getIcon(pNode) → {string}

Returns the icon of the node or null if none. The icon is a CSS class name. The icon is used by node content rendering. This is an optional method.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the icon. |

##### Returns:

The node's icon.

Type
string

#### getLabel(pNode) → {string}

Returns the label of the given node. The label is used for node content rendering and for editing during rename.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the label. |

##### Returns:

The node's label.

Type
string

#### getLink(pNode) → {string}

Returns the URL to navigate to when the node is activated. This is an optional method. It is only needed for navigation trees. If defined it is called during activation if [treeView#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#navigation) option is true.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the link URL. |

##### Returns:

The node's link URL.

Type
string

#### getLinkTarget(pNode) → {string}

Returns the window target to open the link in when the node is activated. This is an optional method. It is only needed for navigation trees and is only used when there is a link. If defined it is called during activation if [treeView#navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#navigation) option is true.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the link target. |

Since:
- 20.1

##### Returns:

The node's link target.

Type
string

#### getViewId(pTreeId, pNode) → {string}

Return the view id for the given `pTreeId` and `pNode`. This is used by the treeView to map from nodes to DOM elements. See also [treeNodeAdapter#setViewId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#setViewId).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTreeId` | string | This is a unique opaque identifier supplied by the treeView. |
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to get the view id for. |

##### Returns:

The view id for this node that was assigned with [treeNodeAdapter#setViewId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#setViewId).

Type
string

#### hasChildren(pNode) → (nullable) {boolean}

Returns true if the node has children, false if it does not and null if not yet known, which can happen for lazy loaded nodes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node for which to determine if it has children. |

##### Returns:

true if the node has children, false if it does not and null if not yet known.

Type
boolean

#### isDisabled(pNode) → {boolean}

Returns the disabled state of a node. A disabled node cannot be selected or activated but it can be focused. This is an optional method. If not defined no nodes are ever disabled.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the disabled state. |

##### Returns:

true if the node is disabled and false otherwise.

Type
boolean

#### isExpanded(pTreeId, pNode) → {boolean}

Return true if the given node is or should be expanded and false otherwise.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTreeId` | string | This is a unique opaque identifier supplied by the treeView. |
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to check if it is expanded. |

##### Returns:

Type
boolean

#### isHidden(pNode) → {boolean}

Returns the hidden state of a node. Returns true if the node should be hidden. This is an optional method. If not defined no nodes are ever hidden. The default adapter does not implement this method.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node from which to get the hidden state. |

##### Returns:

true if the node is hidden and false otherwise.

Type
boolean

#### moveNodes(pParent, pIndex, pNodes, pCallback)

Moves one or more nodes from elsewhere in the tree to be children of the given parent starting at the given index among the existing children of parent. The move includes all the descendants of the moved nodes. Only the parents and/or positions of the moved nodes should change. When the nodes have been moved the callback function is called.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pParent` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The parent node to move nodes to. The moved nodes (`pNodes`) become children of this node. |
| `pIndex` | integer | The index at which to insert the moved nodes. |
| `pNodes` | Array.\<[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)\> | An array of nodes from this tree to move. |
| `pCallback` | function | This function must be called when the nodes have been moved. The function takes one parameter which is a places array of indexes where the children nodes ended up. If the tree nodes are sorted then even though they were moved starting at the given index they could end up at any position. If the tree nodes are not sorted then places will consist of integers index ... index + n - 1 where n is the number of nodes moved. If the move fails call with the places parameter equal to false. If some of the nodes can't be moved return -1 for its index in the places array. |

#### renameNode(pNode, pNewLabel, pCallback)

Rename the given node.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to rename. |
| `pNewLabel` | string | The new label to rename the node to. |
| `pCallback` | function | This function must be called once the node is renamed. It takes two parameters. The first is node which is likely the same as `pNode` or false if the rename can be tried again or null if the rename failed. The second parameter is the index of the node after the rename. If the nodes are sorted then renaming the node can change its position. |

#### renderNodeContent(pNode, pOut, pOptions, pState)

This is an optional function used to render the node content. It is used for advanced cases where more control over the node markup is needed.

If [treeNodeAdapter#renderNodeContent](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#renderNodeContent) is not implemented, the default node rendering will use adapter methods [treeNodeAdapter#getLabel](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getLabel), [treeNodeAdapter#getClasses](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getClasses), [treeNodeAdapter#getLink](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getLink), [treeNodeAdapter#getLinkTarget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getLinkTarget), [treeNodeAdapter#getAccDescription](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getAccDescription), and [treeNodeAdapter#getIcon](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#getIcon) to render the node's label, CSS classes, anchor link, accessible description, and icon respectively. If custom node rendering is implemented, the rendering of these elements (label, classes, link, accessible description, icon, etc.) must be handled to ensure proper appearance and accessibility.

The content must include an element with tabindex='-1' and that element must have a class that matches the [treeView#labelClass](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#labelClass) option and role="treeitem". The custom rendering is responsible for setting the aria-level, aria-disabled, aria-selected, and aria-expanded attributes for proper accessibility.

Ensuring these attributes are properly set is crucial for creating an accessible tree component, for full compliance with modern accessibility standards.

The options and state arguments provide additional information to determine how to render the node.

##### Parameters:

<table class="params" aria-label="Parameters for renderNodeContent">
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
<th class="name" scope="row"><code>pNode</code></th>
<td class="type"><a href="treeNodeAdapter.html#.node">treeNodeAdapter.node</a></td>
<td class="description last">The node from which to get the disabled state.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOut</code></th>
<td class="type"><a href="apex.util.html#.htmlBuilder">apex.util.htmlBuilder</a></td>
<td class="description last">Call methods on this interface to render the node content.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">Object</td>
<td class="description last">View options.
<h6 id="properties">Properties</h6>
<table class="params" aria-label="Parameters for pOptions">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>iconType</code></th>
<td class="type">string</td>
<td class="description last">CSS class used in creating an icon. The <a href="treeView.html#iconType">treeView#iconType</a> option value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>labelClass</code></th>
<td class="type">string</td>
<td class="description last">CSS classes to use for the content label. The <a href="treeView.html#labelClass">treeView#labelClass</a> option.</td>
</tr>
<tr>
<th class="name" scope="row"><code>useLinks</code></th>
<td class="type">boolean</td>
<td class="description last">Used to determine how to render nodes that have a link. The <a href="treeView.html#useLinks">treeView#useLinks</a> option value.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>pState</code></th>
<td class="type">Object</td>
<td class="description last">Node state information.
<h6 id="properties-1">Properties</h6>
<table class="params" aria-label="Parameters for pState">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>selected</code></th>
<td class="type">boolean</td>
<td class="description last">If true the node is selected.</td>
</tr>
<tr>
<th class="name" scope="row"><code>level</code></th>
<td class="type">integer</td>
<td class="description last">This is the level of the node. Used for the <code class="prettyprint">aria-level</code> attribute.</td>
</tr>
<tr>
<th class="name" scope="row"><code>disabled</code></th>
<td class="type">boolean</td>
<td class="description last">This is true if the node is disabled.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hasChildren</code></th>
<td class="type">boolean</td>
<td class="description last">This is true if the node has children.</td>
</tr>
<tr>
<th class="name" scope="row"><code>expanded</code></th>
<td class="type">boolean</td>
<td class="description last">This is true if the node is expanded.</td>
</tr>
<tr>
<th class="name" scope="row"><code>accDescriptionId</code></th>
<td class="type">string</td>
<td class="description last">A unique id that can be used for rendering an accessible node description if there is one. For example by associating a visually hidden element containing the description with the node using attribute <code class="prettyprint">aria-describedby</code>.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Deprecated:
- Yes

##### Example

See [treeView.makeDefaultNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#.makeDefaultNodeAdapter) for an example.

#### root() → {[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)}

Returns the root node of the tree. All trees must have a single root node even if it is not shown/used.

##### Returns:

The root node.

Type
[treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)

#### setExpanded(pTreeId, pNode, pExpanded)

Called when the expansion state of the tree node changes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTreeId` | string | This is a unique opaque identifier supplied by the treeView. |
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node that has been expanded or collapsed. |
| `pExpanded` | boolean | true if the node is expanded and false if it is collapsed. |

#### setViewId(pTreeId, pNode, pViewId)

Set the view id for the given `pTreeId` and `pNode`. This is used by the treeView to map from nodes to DOM elements.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTreeId` | string | This is a unique opaque identifier supplied by the treeView. |
| `pNode` | [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node) | The node to set the view id for. |
| `pViewId` | string | The view id to associate with the given node. |

### Type Definitions

#### defaultNode

This is the specific object structure for nodes used by the default [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) returned by [treeView.makeDefaultNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#.makeDefaultNodeAdapter). It is possible for nodes to have additional properties. For example the APEX Tree region adds a `tooltip` property

##### Type:

- [treeNodeAdapter.node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html#.node)

##### Properties:

<table class="props" aria-label="Properties">
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
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The node label returned by <a href="treeNodeAdapter.html#getLabel">treeNodeAdapter#getLabel</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>id</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The unique node identity. This property is required if the <code class="prettyprint">hasIdentity</code> argument to <a href="treeView.html#.makeDefaultNodeAdapter">treeView.makeDefaultNodeAdapter</a> is true.</td>
</tr>
<tr>
<th class="name" scope="row"><code>type</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The type name of the node. The node type can determine some default aspects of the node such as CSS classes or icon. For editable treeViews it can determine what edit operations are allowed. See treeView.typeInfo for details.</td>
</tr>
<tr>
<th class="name" scope="row"><code>link</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The URL returned by <a href="treeNodeAdapter.html#getLink">treeNodeAdapter#getLink</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>linkTarget</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The target window used to open a link returned by <a href="treeNodeAdapter.html#getLinkTarget">treeNodeAdapter#getLinkTarget</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>children</code></th>
<td class="type">Array.&lt;<a href="treeNodeAdapter.html#.defaultNode">treeNodeAdapter.defaultNode</a>&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The nodes children. Empty array means that it could have children but doesn't. Omit for leaf nodes. The <a href="treeNodeAdapter.html#child">treeNodeAdapter#child</a> method is used to access the node's children.</td>
</tr>
<tr>
<th class="name" scope="row"><code>icon</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The icon CSS class returned by <a href="treeNodeAdapter.html#getIcon">treeNodeAdapter#getIcon</a>. This overrides any icon based on the node type.</td>
</tr>
<tr>
<th class="name" scope="row"><code>accDescription</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Accessible description for the node, returned by <a href="treeNodeAdapter.html#getAccDescription">treeNodeAdapter#getAccDescription</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>classes</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The classes returned by <a href="treeNodeAdapter.html#getClasses">treeNodeAdapter#getClasses</a>. These are added to any classes based on node type.</td>
</tr>
<tr>
<th class="name" scope="row"><code>isDisabled</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The disabled state returned by <a href="treeNodeAdapter.html#isDisabled">treeNodeAdapter#isDisabled</a>. This overrides any disabled state based on node type.</td>
</tr>
<tr>
<th class="name" scope="row"><code>operations</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Overrides any operations defined for the node type. See treeView.typeInfo for details.</td>
</tr>
<tr>
<th class="name" scope="row"><code>_parent</code></th>
<td class="type"><a href="treeNodeAdapter.html#.defaultNode">treeNodeAdapter.defaultNode</a></td>
<td class="attributes"></td>
<td class="description last">This is a reference to the parent node. This is added automatically when the default adapter is created and should not be present in the initial data.</td>
</tr>
</tbody>
</table>

#### node

An object that represents a node in a tree data structure. There are no requirements for and no assumptions are made about the specific properties of the object as all access to the node is through the [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) interface.

##### Type:

- Object

#### typeInfo

The default [treeNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeNodeAdapter.html) returned by [treeView.makeDefaultNodeAdapter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/treeView.html#.makeDefaultNodeAdapter) uses this type information to provide default settings and control over allowed edit operations for nodes based on their type.

##### Type:

- Object

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
<th class="name" scope="row"><code>*</code></th>
<td class="type">Object</td>
<td class="description last">The property names are the type names and the value is information about the type. There is one reserved type name call "default" that provides default settings for any nodes that don't have a type or if there is specific information for that type.
<h6 id="properties-4">Properties</h6>
<table class="props" aria-label="Properties">
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
<th class="name" scope="row"><code>icon</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The icon to use for nodes of this type.</td>
</tr>
<tr>
<th class="name" scope="row"><code>classes</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Classes to add for nodes of this type.</td>
</tr>
<tr>
<th class="name" scope="row"><code>isDisabled</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true nodes of this type are disabled by default.</td>
</tr>
<tr>
<th class="name" scope="row"><code>defaultLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The default label for new nodes.</td>
</tr>
<tr>
<th class="name" scope="row"><code>validChildren</code></th>
<td class="type">true | Array.&lt;string&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An array of valid children types for this type. If true then children of any type can be added to nodes of this type.</td>
</tr>
<tr>
<th class="name" scope="row"><code>operations</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Specifies what edit operations can be done on nodes of this type.
<h6 id="properties-5">Properties</h6>
<table class="props" aria-label="Properties">
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
<th class="name" scope="row"><code>canAdd</code></th>
<td class="type">boolean | function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true nodes of this type allow adding.</td>
</tr>
<tr>
<th class="name" scope="row"><code>canDelete</code></th>
<td class="type">boolean | function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true nodes of this type allow being deleted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>canRename</code></th>
<td class="type">boolean | function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true nodes of this type allow being renamed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>canDrag</code></th>
<td class="type">boolean | function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true nodes of this type allow being dragged.</td>
</tr>
<tr>
<th class="name" scope="row"><code>drag</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object that defines the operation to perform during a drop based on the modifier key pressed. The properties are the modifier keys and can contain any one of: "normal", "ctrl", "alt", "shift" and the values are the operation to perform and can be one of "move", "copy", or "add". The value can also be a custom operation that is handled in the beforeStop event.</td>
</tr>
<tr>
<th class="name" scope="row"><code>externalDrag</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object that defines the operation to perform during a drop from an external draggable based on the modifier key pressed. The properties and values are the same as for the operations drag property. This property can only be used on the "default" type.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>
