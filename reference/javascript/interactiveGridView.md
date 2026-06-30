<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html -->
<!-- Interfaces: interactiveGridView -->

# Interface: interactiveGridView

## QuickNav

### [Properties](#members-section)

- [cssClass](#cssClass)
- [icon](#icon)
- [internalIdentifier](#internalIdentifier)
- [model](#model)
- [modelName](#modelName)
- [singleRowMode](#singleRowMode)
- [singleRowView\$](#singleRowView$)
- [title](#title)
- [view\$](#view$)

### [Methods](#methods-section)

- [getContextRecord](#getContextRecord)
- [getSelectedRecords](#getSelectedRecords)
- [setSelectedRecords](#setSelectedRecords)

## interactiveGridView

Defines an Interactive Grid view. The [interactiveGrid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html) widget manages a number of different views of the report data. Each view is implemented by a interactiveGridView interface. The types of views are:

- grid: This is implemented by the [grid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) widget. It also supports single row view.
- chart: This is implementd by JET ojchart.
- detail: This is implemented by the [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) widget.
- icon: This is implemented by the [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) widget. The main difference between this and detail view is that this supports selection. The [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

Each view has a [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) to manage its data and a widget to implement the user interface. Most of the properties and methods of the view are for internal use by the [interactiveGrid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html) widget. A few of them are useful in advanced use cases to control or configure interactive grid.

### Properties

#### cssClass :string

CSS Classes to be applied to the outer most div element of the view.

##### Type:

- string

#### icon :string

The icon to use for the view. Used in the UI where a the view icon is displayed such as in the toolbar.

##### Type:

- string

#### internalIdentifier :string

Unique internal identifier for the view.

##### Type:

- string

#### model :[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

The model used by this view.

##### Type:

- [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

#### modelName :[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

The id of the model used by this view.

##### Type:

- [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

#### singleRowMode :boolean

True if the view is currently showing Single Row View and false otherwise. This only applies if the view supports Single Row View (it is undefined otherwise).

##### Type:

- boolean

#### singleRowView\$ :jQuery

The jQuery object for the alternate [recordView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html) widget that implements Single Row View. This only applies if the view supports single row view and the feature is configured.

##### Type:

- jQuery

#### title :string

The title of the view. Used in the UI where a friendly name for the view is needed.

##### Type:

- string

#### view\$ :jQuery

The jQuery object for the view.

##### Type:

- jQuery

### Methods

#### getContextRecord(pContext) → {Array}

Given an element (such as a button in a grid cell) that is within the visual DOM representation of a record returns an array containing the corresponding model record.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pContext` | Element | An element within visual DOM representation of a record. |

##### Returns:

Array of model records for the given context element. The array contains at most one item. If array is empty if the given context element does not correspond with a record or the view does not support this method.

Type
Array

#### getSelectedRecords() → {Array}

Returns the currently selected model records in the view. If there is no selection or the view does not support selection then an empty array is returned.

##### Returns:

Array of model records selected.

Type
Array

#### setSelectedRecords(pRecords, pFocusopt, pNoNotifyopt)

Sets the current selection in the view from the given array of model records. Only applies if the view supports selection.

##### Parameters:

<table class="params" aria-label="Parameters for setSelectedRecords">
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
<th class="name" scope="row"><code>pRecords</code></th>
<td class="type">Array</td>
<td class="attributes"></td>
<td class="description last">an array of model records or an array of model record ids as returned by model getRecordId. If this is an empty array then the selection is cleared.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">if true the first cell/field/item of the selection is given focus.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">if true the selection change event will be suppressed</td>
</tr>
</tbody>
</table>
