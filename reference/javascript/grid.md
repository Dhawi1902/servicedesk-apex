<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html -->
<!-- Widgets: grid -->

# Widget: grid

## QuickNav

### [Options](#members-section)

- [aggregateLabels](#aggregateLabels)
- [aggregateTooltips](#aggregateTooltips)
- [allowCopy](#allowCopy)
- [allowCut](#allowCut)
- [allowDelete](#allowDelete)
- [allowEditMode](#allowEditMode)
- [allowInsert](#allowInsert)
- [allowPaste](#allowPaste)
- [allowSelectHidden](#allowSelectHidden)
- [applyTemplateOptions](#applyTemplateOptions)
- [autoAddRecord](#autoAddRecord)
- [collapsibleControlBreaks](#collapsibleControlBreaks)
- [columnGroups](#columnGroups)
- [columnSort](#columnSort)
- [columnSortMultiple](#columnSortMultiple)
- [columns](#columns)
- [constrainNavigation](#constrainNavigation)
- [contextMenu](#contextMenu)
- [contextMenuAction](#contextMenuAction)
- [contextMenuId](#contextMenuId)
- [editable](#editable)
- [entityTitlePlural](#entityTitlePlural)
- [entityTitleSingular](#entityTitleSingular)
- [fixedRowHeight](#fixedRowHeight)
- [footer](#footer)
- [hasSize](#hasSize)
- [hideDeletedRows](#hideDeletedRows)
- [hideEmptyFooter](#hideEmptyFooter)
- [highlights](#highlights)
- [loadIncompleteSelection](#loadIncompleteSelection)
- [modelName](#modelName)
- [multiple](#multiple)
- [multipleCells](#multipleCells)
- [multipleRanges](#multipleRanges)
- [noDataIcon](#noDataIcon)
- [noDataMessage](#noDataMessage)
- [pagination](#pagination)
- [persistSelection](#persistSelection)
- [progressOptions](#progressOptions)
- [reorderColumns](#reorderColumns)
- [resizeColumns](#resizeColumns)
- [rowHeader](#rowHeader)
- [rowHeaderCheckbox](#rowHeaderCheckbox)
- [rowHeaderLabelColumn](#rowHeaderLabelColumn)
- [rowHeaderWidth](#rowHeaderWidth)
- [rowsPerPage](#rowsPerPage)
- [selectAll](#selectAll1)
- [selectCells](#selectCells)
- [selectCellsColumn](#selectCellsColumn)
- [selectCellsRow](#selectCellsRow)
- [selectionStateItem](#selectionStateItem)
- [selectionStatusMessageKey](#selectionStatusMessageKey)
- [showNullAs](#showNullAs)
- [skipReadonlyCells](#skipReadonlyCells)
- [stickyFooter](#stickyFooter)
- [stickyTop](#stickyTop)
- [tabbableCellContent](#tabbableCellContent)
- [tooltip](#tooltip)
- [updateStatus](#updateStatus)

### [Events](#events-section)

- [activatecell](#event:activatecell)
- [activatecolumnheader](#event:activatecolumnheader)
- [cancelcolumnheader](#event:cancelcolumnheader)
- [columnreorder](#event:columnreorder)
- [columnresize](#event:columnresize)
- [currentcellchange](#event:currentcellchange)
- [modechange](#event:modechange)
- [pagechange](#event:pagechange)
- [selectionchange](#event:selectionchange)
- [sortchange](#event:sortchange)

### [Methods](#methods-section)

- [copyDownSelection](#copyDownSelection)
- [debugCellEdit](#debugCellEdit)
- [fetchAllData](#fetchAllData)
- [fillSelection](#fillSelection)
- [finishEditing](#finishEditing)
- [firstPage](#firstPage)
- [focus](#focus)
- [freezeColumn](#freezeColumn)
- [getActiveCellFromColumnItem](#getActiveCellFromColumnItem)
- [getActiveRecord](#getActiveRecord)
- [getActiveRecordId](#getActiveRecordId)
- [getColumnForCell](#getColumnForCell)
- [getColumns](#getColumns)
- [getCurrentCell](#getCurrentCell)
- [getModel](#getModel)
- [getPageInfo](#getPageInfo)
- [getRecords](#getRecords)
- [getSelectedRange](#getSelectedRange)
- [getSelectedRanges](#getSelectedRanges)
- [getSelectedRecords](#getSelectedRecords)
- [getSelection](#getSelection)
- [gotoCell](#gotoCell)
- [gotoPage](#gotoPage)
- [hideColumn](#hideColumn)
- [inEditMode](#inEditMode)
- [lastPage](#lastPage)
- [loadMore](#loadMore)
- [lockActive](#lockActive)
- [moveColumn](#moveColumn)
- [moveColumnGroup](#moveColumnGroup)
- [nextPage](#nextPage)
- [previousPage](#previousPage)
- [refresh](#refresh)
- [refreshColumns](#refreshColumns)
- [resize](#resize)
- [selectAll](#selectAll2)
- [setActiveRecordValue](#setActiveRecordValue)
- [setColumnWidth](#setColumnWidth)
- [setCurrentCell](#setCurrentCell)
- [setEditMode](#setEditMode)
- [setSelectedRanges](#setSelectedRanges)
- [setSelectedRecords](#setSelectedRecords)
- [setSelection](#setSelection)
- [showColumn](#showColumn)
- [unfreezeColumn](#unfreezeColumn)
- [unlockActive](#unlockActive)

### [Type Definitions](#typedefs-section)

- [Range](#.Range)

## grid

A UI widget that implements a navigable data grid that supports selection and editing. Derived from [tableModelViewBase](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html). It follows the DHTML Style Guide and WAI-ARIA design pattern for a data grid with these differences:

- In row selection mode the Shift and Ctrl modifiers work like a list control.
- In edit/actionable mode you can tab out of the grid at the beginning or end.

The markup expected by this widget is simply an empty `<div>`. The grid displays and optionally edits table shaped data stored in an APEX data [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html). If the grid is editable then the grid `<div>` must be proceeded or followed by a `<div>` with class `u-vh` (to visually hide the contents) that contains each of the rendered column items. Each column item needs to be wrapped in a `<div>` with class `a-GV-columnItem`. The markup looks like this:

```
       <div class="a-GV-columnItem">column item markup goes here</div>
       ...
```

Only a single cell at a time is edited. The grid moves the column item in and out of the cells as needed. Grid widget functional CSS takes care of hiding the column items off screen.

### Editing

The grid can be editable or not editable. This is controlled by the [grid#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#editable) option. If not editable then no UI is provided to do any editing, however it will still respond to any changes to the model data. When the grid is editable it has two modes; navigation mode and editing mode. The distinction is mainly for the purpose of keyboard behavior. In navigation mode keyboard keys move among the grid cells. In editing mode most keys are passed through to the edit controls. Edit mode pertains to cell editing only. Other kinds of edits such as deleting rows is possible as long as the grid is editable. The [grid#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#editable) option can be changed after the grid is created provided the necessary column items are available on the page. See the [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) documentation for how it can be used to provide fine grained control over what kinds of edits are allowed. The column definition can specify columns that are read-only. For a cell to be editable the grid must be editable, the row must be editable (as determined by the model), the column configuration must include property `elementId` and property `readonly` must not be true and the cell field metadata must not have a checksum (`ck`) property.

Column Edit Items:
When the grid is editable and a column can be edited, it is a column item that does the editing. Column items are essentially the same as page items except they edit a column value rather than a page item. See [grid#columns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#columns) option property `elementId`.

### Selection

The grid supports both row and cell range selection modes. The mode is determined by option [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells).

For row selection the grid supports either single or multiple selection. See option [grid#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multiple). Rows can be selected even for grids that are not editable. For multiple selection standard keyboard modifiers Shift and Ctrl are combined with arrow keys or mouse clicks to select multiple rows. See the [Keyboard End User Information](#keyboard-section) section for details. In addition the [grid#rowHeaderCheckbox](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#rowHeaderCheckbox) option allows for checkbox style selection behavior. If the user is interacting with touch the row header checkbox will be enabled automatically. Column heading, column group heading, aggregate, and control break rows are never included in the row selection.

The row selection state can be accessed with methods such as [grid#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRecords) and changed with methods such as [grid#setSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setSelectedRecords). The [grid#selectionStateItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectionStateItem) option specifies an APEX page item that will have its value updated to reflect the current selection. See also options [grid#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#persistSelection) and [grid#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectAll1).

For range selection the grid supports single cell, a single range of cells (see [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells)) or multiple ranges (see [grid#multipleRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleRanges)). Range selection is similar to that of spreadsheets. The Shift key is used with arrow keys or mouse clicks to extend a range. For multiple ranges the Ctrl key (Command key on macOS) with click or Shift+F8 key adds a new range. Aggregate cells can be selected but control breaks, row headers and column headers cannot be selected. See the [Keyboard End User Information](#keyboard-section) section for details.

The range selection state can be accessed with method [grid#getSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRanges) and set with method [grid#setSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setSelectedRanges). The range selection does not affect the `selectionStateItem`. See also options [grid#selectCellsColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCellsColumn), [grid#selectCellsRow](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCellsRow) and [grid#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectAll1).

### Clipboard

The grid supports clipboard operations copy, cut, and paste by default. See options [grid#allowCopy](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#allowCopy), [grid#allowCut](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#allowCut), and [grid#allowPaste](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#allowPaste) for how to disable. Cut and paste require that the grid is editable. The standard operating system specific keyboard shortcuts are supported. Paste to insert uses the Shift key modifier. All of these clipboard operations require that the grid is not in edit mode. When editing a cell, it is the column item that determines clipboard behavior.

The row or cell range selection can be copied to the clipboard. The selection row header and any empty virtual columns such as the row actions menu column are not included. The cell contents are put on the clipboard in text/html and text/plain formats. Text format uses tab separated cells with carriage return line feed separated rows. HTML format uses table markup. A custom JSON format is used to facilitate copying from one grid and pasting to another or the same grid by including the underlying model values such as LOVs. Not all browsers support custom formats when pasting except when using the operating system keyboard shortcut. A single cell does not use table markup. When a cell contains a single link defined with the column `linkTargetColumn` property or the model field metadata `url` property the clipboard value will be an anchor element. See [grid#columns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#columns) `copyValueToClipboard` property for how to control the value copied.

Non-selectable cells or rows can be copied to the clipboard when they are the current cell. This includes aggregates, control breaks, headers, and read-only cells in edit mode. To copy the whole header row or whole aggregate row focus the first cell in the row.

For row selection, cut will delete the rows after copying them to the clipboard as long as the rows allow being deleted. For cell range selection cut will clear the cell contents as if by method [grid#fillSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#fillSelection) with an empty string fill value as long as the cells are not readonly and allow editing.

The paste operation supports formats text/html and text/plain. The tabular data representation is the same as described above for clipboard copy. If the clipboard doesn't contain tabular data the text is considered the value for a single cell. The data is pasted starting at the current cell. The cell value is set as if the user typed in the value. This means that Dynamic Actions are run and client side validations are performed. The user is responsible for making sure that the pasted data is appropriate for the columns. Of particular concern are LOV columns (or any case where the display value doesn't match the model value). In the case of LOVs the paste data should contain the LOV item return values. Read only columns or any row or cell that can't be edited is skipped over. If there are more rows to paste than there are rows remaining in the report or the control break then the remaining rows are inserted. Use the Shift key to insert new rows rather than overwrite.

Drag and drop can also be used to paste into the grid. Drag from an application that supports tabular data in the acceptable clipboard format and drop on a grid cell. Hold the Shift key to insert rather than overwrite.

Limitations: Browsers may put implementation specific restrictions on use of the clipboard that are beyond the control of a web app. It may require the user opt in to clipboard access or provide an additional UI element to click. This is most common for paste but may also include cut.

### Context Menus

The grid has easy integration with the [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget to provide context menu support. The [grid#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenu) option is used to provide a [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget options object. When the `contextMenu` option is used the [menu#event:beforeOpen](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html#event:beforeOpen) event/callback ui argument has these additional properties:

- menuElement: The menu jQuery object.
- grid: This grid jQuery object.
- selection: A jQuery object with the selected rows at the time the menu was opened.
- selectedRecords: An array of the selected model records at the time the menu was opened. Only if [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is false.
- selectedRange: The range information returned by [grid#getSelectedRange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRange). Only if [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is true. This is deprecated.
- selectedRanges: The range information returned by [grid#getSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRanges). Only if [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is true.

Also the [menu#event:afterClose](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html#event:afterClose) event/callback will automatically focus the grid if the menu action didn't take the focus and the ui argument has these additional properties:

- menuElement: The menu jQuery object.
- grid: This grid jQuery object.

If using the `contextMenu` option the [grid#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuId) option can be used to give the menu element an ID. This is useful if other code must refer to the menu element or widget.

You can reference an already existing [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget by specifying the [grid#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuId) in place of the [grid#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenu) option.

If for any reason you don't want to use the [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget, the [grid#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuAction) option allows you to respond to mouse or keyboard interactions that typically result in a context menu. Specifically the `contextmenu` event triggered in response to a right Mouse click, the Windows context menu key or other keyboard equivalent such as Shift+F10. The original event is passed to the [grid#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuAction) function. The event object can be used to position the menu. If you implement your own menu it is best if you put focus back on the grid using the [grid#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#focus) method when the menu closes (unless the menu action directs focus elsewhere).

Only one of [grid#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuAction) and [grid#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenu) or [grid#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuId) can be specified. The [grid#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenu) and [grid#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuId) options can only be set when the grid is initialized and it can't be changed. The [grid#contextMenuAction](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuAction) cannot be set if the [grid#contextMenu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenu) or [grid#contextMenuId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#contextMenuId) options were given when the grid was created.

### Keyboard End User Information

| Key | Action |
|----|----|
| F2, Enter | In navigation mode and focus is on a cell, enters edit mode. |
| Escape | In edit mode, exits edit mode and returns to navigation mode. |
| Up Arrow | In navigation mode moves to the cell in the same column of the previous row. |
| Down Arrow | In navigation mode moves to the cell in the same column of the next row. |
| Left Arrow | In navigation mode or when focus is on a column header, moves to the previous cell in the row. |
| Right Arrow | In navigation mode or when focus is on a column header, moves to the next cell in the row. |
| Home (Windows), Command+Left Arrow (macOS) | In navigation mode or when focus is on a column header, moves to the first cell in the row. |
| End (Windwos), Command+Right Arrow (macOS) | In navigation mode or when focus is on a column header, moves to the last cell in the row. |
| Ctrl+Home (Windows), Option+Up Arrow (macOS) | In navigation mode moves to the first cell in the report. |
| Ctrl+End (Windows), Option+Down Arrow (macOS) | In navigation mode moves to the last cell in the report. |
| Page Up | In navigation mode moves focus up one visible page of rows staying in the same column. When in page pagination mode and at the end of a page, will go to the next page. |
| Page Down | In navigation mode moves focus down one visible page of rows staying in the same column. When in page pagination mode and at the start of a page, will go to the previous page. |
| Enter, Space | When focus is in a column header cell, activates the column header. |
| Shift+Enter | In edit mode moves to the cell in the same column of the previous row. |
| Enter | In edit mode moves to the cell in the same column of the next row. |
| Shift+Tab | In edit mode moves to the previous cell. If focus is in the first cell of the first row it will go to the previous tab stop before the grid. In navigation mode moves focus out of the grid to the previous tab stop before the grid. |
| Tab | In edit mode moves to the next cell. If focus is in the last cell of the last row it will go to the next tab stop after the grid or if option [grid#autoAddRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#autoAddRecord) is true it will insert a new row. In navigation mode moves focus out of the grid to the next tab stop after the grid. The next tab stop may be in the grid footer. |
| Insert | In navigation mode inserts a new record after the last selected row in row selection mode or after the current cell in cell selection mode. |
| Delete | In navigation mode deletes the currently selected rows. |
| Alt+F1 | In navigation mode display help on the current column if there is any. |
| Alt+Up Arrow | With focus in column header cell will sort ascending by that column. Adding the Shift key modifier will add the column to the existing sorted columns. |
| Alt+Down Arrow | With focus in column header cell will sort descending by that column. Adding the Shift key modifier will add the column to the existing sorted columns. |
| Ctrl+Left Arrow | With focus in column header cell will decrease the width of the column. |
| Ctrl+Right Arrow | With focus in column header cell will increase the width of the column. |
| Shift+Left Arrow | With focus in column header or group header cell will move the column or group to the left. |
| Shift+Right Arrow | With focus in column header or group header cell will move the column or group to the right. |
| Shift+F8 | When multiple cell range selection is enabled with option [grid#multipleRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleRanges) this key allows adding another range with the keyboard. |
| Ctrl+Space | When cell range selection is enabled with option [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells) this key will select all the cells in the current column. |
| Shift+Space | When cell range selection is enabled with option [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells) this key will select all the cells in the current row. |
| Ctrl+A (Windows), Command+A (macOS) | In navigation mode, selects all rows in row selection mode or all cells in cell selection mode. When using page pagination and persisting the selection in the model add the Shift key modifier to select just the rows on the current page. |
| Ctrl+C (Windows), Command+C (macOS) | Copy to clipboard. |
| Ctrl+X (Windows), Command+X (macOS) | Cut to clipboard. |
| Ctrl+V (Windows), Command+V (macOS) | Paste from clipboard, overwrite. |
| Ctrl+Shift+V (Windows), Command+Shift+V (macOS) | Paste from clipboard, insert. |

List of keyboard shortcuts

In navigation mode the Ctrl and Shift keys modify how the arrow keys and Space key affect the selection. In row selection mode with multiple selection the Shift key extends the selection to include the new row. The Ctrl key moves focus without changing the selection. The Space key adds the currently focused row to the selection. Ctrl+Space will toggle selection for the current row. In cell range selection mode the Shift key extends the selection to include the new cell.

### CSS Classes

| Class | Purpose |
|----|----|
| a-GV | The root widget element. |
| a-GV-row | A grid row for data, aggregates, or headers but not a control break row. |
| a-GV-cell | A grid cell for data or aggregates. |
| a-GV-header | A grid cell for headers. |
| is-selected | A state class on selected grid rows or grid cells. |
| is-focused | A state class on the focused grid cell. |
| is-active | A state class on the grid cell that is currently active for editing. |
| is-deleted | A state class on deleted grid rows. |
| is-changed | A state class on changed grid cells. |
| is-updated | A state class on edited grid rows. |
| is-inserted | A state class on inserted grid rows. |
| is-error | A state class on grid cells or grid rows with errors. |
| is-warning | A state class on grid cells or grid rows with warnings. |
| is-readonly | A state class on grid cells or grid rows that are readonly. |

List of CSS Classes used by grid widget

### Initializer

#### \$(".selector").grid(options)

Creates a grid widget.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `options` | Object | A map of option-value pairs to set on the widget. |

Since:
- 5.1

##### Example

This example creates a very simple non-editable grid with just two columns; Id and Name. Only the required options are given; all others will have their default value. The element with id myGrid is an empty div.

```
const fieldDefinitions = {
    id: {
        index: 0,
        heading: "Id",
        seq: "1"
    },
    name: {
        index: 1,
        heading: "Name",
        seq: "2"
    }
};
const data = [
    ["1022", "Betty"],
    ["1023", "James"],
    ...
];
apex.model.create( "myModel", {
    recordIsArray: true,
    fields: fieldDefinitions
}, data );
$( "#myGrid" ).grid( {
    modelName: "myModel",
    columns: [  fieldDefinitions ]
} );
```

### Extends

- [tableModelViewBase](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html)

### Options

#### aggregateLabels :Object

Map of aggregate name to object with aggregate label and overallLabel.

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
<td class="description last">The aggregate name. The model metadata <a href="model.html#.RecordMetadata">model.RecordMetadata</a> <code class="prettyprint">agg</code> property is the key to this aggregate map.
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
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="description last">The aggregate label.</td>
</tr>
<tr>
<th class="name" scope="row"><code>overallLabel</code></th>
<td class="type">string</td>
<td class="description last">The aggregate overall label.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Default Value:
- {}

##### Examples

Initialize the grid with the aggregateLabels option specified.

```
$( ".selector" ).grid( {

    aggregateLabels: {
        SUM: {
            label: "Sum",
            overallLabel: "Overall Sum" },
        ...
    }

} );
```

Get or set option aggregateLabels after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "aggregateLabels" );

// set

$( ".selector" ).grid( "option", "aggregateLabels", {...} );
```

#### aggregateTooltips :Object

Map of \<aggregate name\> + "\|" + \<aggregate column\> to tooltip text.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `*` | string | The property name is an aggregate name and column name separated with a "\|" character. The value is the tooltip text. |

Default Value:
- {}

##### Examples

Initialize the grid with the aggregateTooltips option specified.

```
$( ".selector" ).grid( {

    aggregateTooltips: {
        "AVG|SALARY": "Average Salary",
        ....
    }

} );
```

Get or set option aggregateTooltips after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "aggregateTooltips" );

// set

$( ".selector" ).grid( "option", "aggregateTooltips", {...} );
```

#### allowCopy :boolean

If true the selection can be copied to the clipboard using the browsers copy event. This can only be set at initialization time.

##### Type:

- boolean

Default Value:
- true

##### Example

Initialize the grid with the allowCopy option specified.

```
$( ".selector" ).grid( {

    allowCopy: false

} );
```

#### allowCut :boolean

If true the selection can be copied to the clipboard and deleted or cleared from the grid using the browsers cut event. Deleting or clearing data cells is subject to editing restrictions of the grid and model. This can only be set at initialization time.

##### Type:

- boolean

Since:
- 26.1

Default Value:
- true

##### Example

Initialize the grid with the allowCut option specified.

```
$( ".selector" ).grid( {

    allowCut: false

} );
```

#### allowDelete :boolean

Only applies if [grid#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#editable) is true. If false then can't use Delete key to delete a row. This only affects the keyboard behavior. The model determines if rows can be deleted or not.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the allowDelete option specified.

```
$( ".selector" ).grid( {

    allowDelete: false

} );
```

Get or set option allowDelete after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "allowDelete" );

// set

$( ".selector" ).grid( "option", "allowDelete", false );
```

#### allowEditMode :boolean

Only applies if [grid#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#editable) is true. If false then can't go in or out of edit mode using mouse or keyboard.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the allowEditMode option specified.

```
$( ".selector" ).grid( {

    allowEditMode: false

} );
```

Get or set option allowEditMode after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "allowEditMode" );

// set

$( ".selector" ).grid( "option", "allowEditMode", false );
```

#### allowInsert :boolean

Only applies if [grid#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#editable) is true. If false then can't use Insert key to add a row. This only affects the keyboard behavior. The model determines if rows can be added or not.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the allowInsert option specified.

```
$( ".selector" ).grid( {

    allowInsert: false

} );
```

Get or set option allowInsert after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "allowInsert" );

// set

$( ".selector" ).grid( "option", "allowInsert", false );
```

#### allowPaste :boolean

If true and the grid is editable, the clipboard data can be pasted to the grid using the browsers paste event as long as the clipboard data is in an acceptable format. This can only be set at initialization time.

##### Type:

- boolean

Since:
- 26.1

Default Value:
- true

##### Example

Initialize the grid with the allowPaste option specified.

```
$( ".selector" ).grid( {

    allowPaste: false

} );
```

#### allowSelectHidden :boolean

Normally hidden rows cannot be selected. This means that multiple selection across collapsed control breaks will not select any collapsed rows and if a control break is collapsed any selected rows within it are unselected. Setting this option to true will allow hidden rows to be selected.

Note this setting does not apply to cell range selection ([grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells)).

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the grid with the allowSelectHidden option specified.

```
$( ".selector" ).grid( {

    allowSelectHidden: true

} );
```

Get or set option allowSelectHidden after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "allowSelectHidden" );

// set

$( ".selector" ).grid( "option", "allowSelectHidden", true );
```

#### applyTemplateOptions :object

Options to pass to the [apex.util.applyTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.applyTemplate) function when processing any templates. See [apex.util.applyTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.applyTemplate) for details on the option properties.

##### Type:

- object

Inherited From:
- [tableModelViewBase#applyTemplateOptions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#applyTemplateOptions)

Default Value:
- {}

##### Examples

Initialize the grid with the applyTemplateOptions option specified.

```
$( ".selector" ).grid( {

    applyTemplateOptions: {
        // This example would enable you to use the placeholder #TODAY# in any templates.
        placeholders: { TODAY: (new Date()).toISOString() }
    }

} );
```

Get or set option applyTemplateOptions after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "applyTemplateOptions" );

// set

$( ".selector" ).grid( "option", "applyTemplateOptions", {
    // This example would enable you to use the placeholder #TODAY# in any templates.
    placeholders: { TODAY: (new Date()).toISOString() }
} );
```

#### autoAddRecord :boolean

Specifies if a new record should be automatically added when the model doesn't contain any data. If supported by the derived view a new record may be added when moving beyond the last record in the view while editing. Must only be true if the model and view are editable and the model allows adding records.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#autoAddRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#autoAddRecord)

Default Value:
- false

##### Examples

Initialize the grid with the autoAddRecord option specified.

```
$( ".selector" ).grid( {

    autoAddRecord: true

} );
```

Get or set option autoAddRecord after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "autoAddRecord" );

// set

$( ".selector" ).grid( "option", "autoAddRecord", true );
```

#### collapsibleControlBreaks :boolean

If true any control breaks can be collapsed or expanded.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the collapsibleControlBreaks option specified.

```
$( ".selector" ).grid( {

    collapsibleControlBreaks: false

} );
```

Get or set option collapsibleControlBreaks after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "collapsibleControlBreaks" );

// set

$( ".selector" ).grid( "option", "collapsibleControlBreaks", false );
```

#### columnGroups :object

Defines the grid column heading groups if any. A grid can have multiple levels of column heading groups. Group heading cells display above and span the contiguous columns or column groups that belong to the same group. The columns or column groups in a group need not be adjacent although they often are.

##### Type:

- object

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
<td class="type">object</td>
<td class="description last">The property name is the column group name. This name is referenced from a <a href="grid.html#columns">grid#columns</a> <code class="prettyprint">groupName</code> property or a column group definition <code class="prettyprint">parentGroupName</code> property. The property values are column group definitions.
<h6 id="properties-4">Properties</h6>
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
<th class="name" scope="row"><code>heading</code></th>
<td class="type">string</td>
<td class="description last">The text of the column header. Allows markup.</td>
</tr>
<tr>
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="description last">Same as heading but markup not allowed. Not currently used by grid.</td>
</tr>
<tr>
<th class="name" scope="row"><code>headingAlignment</code></th>
<td class="type">string</td>
<td class="description last">One of "start", "end", "center", "left", "right". Determines how the heading text is aligned. The default is "center".</td>
</tr>
<tr>
<th class="name" scope="row"><code>parentGroupName</code></th>
<td class="type">string</td>
<td class="description last">Optional name of the parent column group. This allows multiple levels of column groups.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

This example shows initializing the grid with "First" name and "Last" name columns that are grouped under a column heading group "Name".

```
$( ".selector" ).grid( {
    columns[{
        FIRST_NAME: {
            heading: "First",
            groupName: "NAME",
            ...
        },
        LAST_NAME: {
            heading: "Last",
            groupName: "NAME",
            ....
        },
        ...
    ],
    columnGroups: {
        NAME: {
            heading: "Name",
            headingAlignment: "start"
        },
        ...
    }
} );
```

#### columnSort :boolean

If true the mouse and keyboard can be used in column headings to adjust the sort order. The grid doesn't actually do any sorting. Something external to the grid must do the actual sorting by handling the [grid#event:sortchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:sortchange) event and updating the model.

Note the sort order can still be adjusted external to the grid even if this is false.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the columnSort option specified.

```
$( ".selector" ).grid( {

    columnSort: false

} );
```

Get or set option columnSort after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "columnSort" );

// set

$( ".selector" ).grid( "option", "columnSort", false );
```

#### columnSortMultiple :boolean

If true multiple columns can be sorted using Shift key modifier. This only applies if [grid#columnSort](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#columnSort) is true.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the columnSortMultiple option specified.

```
$( ".selector" ).grid( {

    columnSortMultiple: false

} );
```

Initialize the grid with the columnSortMultiple option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        columnSortMultiple: false
    };

    return options;

}
```

Get or set option columnSortMultiple after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "columnSortMultiple" );

// set

$( ".selector" ).grid( "option", "columnSortMultiple", false );
```

#### columns :Array.\<object\>

Defines the columns in the grid. These columns are also fields in the model. The value is an array of exactly one object that maps the column name to a column definition object. The properties are the column names. The property value is a column definition. Wrapping the object in an array simply keeps the widget from making a copy of the columns so that the same definition can be shared.

The same structure can be shared with the data [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) and a [recordView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html) widget. This option is required.

##### Type:

- Array.\<object\>

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
<td class="type">object</td>
<td class="description last">The property is the column name. By convention, it is the uppercase database column name. The value is an object that defines the column. All properties are optional unless specified otherwise.
<h6 id="properties-6">Properties</h6>
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
<th class="name" scope="row"><code>elementId</code></th>
<td class="type">string</td>
<td class="description last">Column item name (id of DOM element) used to edit this column. Can omit if column or grid is not editable.</td>
</tr>
<tr>
<th class="name" scope="row"><code>heading</code></th>
<td class="type">string</td>
<td class="description last">The text of the column header. Allows markup.</td>
</tr>
<tr>
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="description last">The label text of the column. Does not allow markup. Used by control break headers if given otherwise <code class="prettyprint">heading</code> is used. When the <code class="prettyprint">heading</code> option includes markup the label option should be specified.</td>
</tr>
<tr>
<th class="name" scope="row"><code>headingAlignment</code></th>
<td class="type">string</td>
<td class="description last">Determines how the heading text is aligned. One of "start", "end", "center", "left", "right". Default is "center".</td>
</tr>
<tr>
<th class="name" scope="row"><code>alignment</code></th>
<td class="type">string</td>
<td class="description last">Determines how the cell content is aligned. One of "start", "end", "center", "left", "right". Optional with no default.</td>
</tr>
<tr>
<th class="name" scope="row"><code>headingCssClasses</code></th>
<td class="type">string</td>
<td class="description last">CSS classes applied to the column heading cell.</td>
</tr>
<tr>
<th class="name" scope="row"><code>columnCssClasses</code></th>
<td class="type">string</td>
<td class="description last">CSS classes applied to each cell in this column.</td>
</tr>
<tr>
<th class="name" scope="row"><code>cellCssClassesColumn</code></th>
<td class="type">string</td>
<td class="description last">The name of a column that contains CSS classes to use for the cell.</td>
</tr>
<tr>
<th class="name" scope="row"><code>cellTemplate</code></th>
<td class="type">string</td>
<td class="description last">An HTML template that defines the cell content. See <a href="apex.util.html#.applyTemplate">apex.util.applyTemplate</a> for template syntax. The substitutions are column names from this column configuration or columns from any parent models and they are replaced with data values from the current record of the model.</td>
</tr>
<tr>
<th class="name" scope="row"><code>copyValueToClipboard</code></th>
<td class="type">function | boolean</td>
<td class="description last">Controls what is copied to the clipboard. When null or undefined, copying cells to the clipboard copies the text displayed in the cell. In some cases such as when the cell contains buttons you may want just the display value from the model. Set to true to copy the model display value. Set to false to copy the model LOV return value. This can also be a function that returns the cell content to copy to the clipboard (<code class="prettyprint">copyValueToClipboard(column, value, text) -&gt; string</code>). The function takes 3 arguments, The column definition, the model value, and the cell text and returns the string content to add to the clipboard for the cell.</td>
</tr>
<tr>
<th class="name" scope="row"><code>escape</code></th>
<td class="type">boolean</td>
<td class="description last">If false the column value may contain trusted markup otherwise the column value is escaped.</td>
</tr>
<tr>
<th class="name" scope="row"><code>seq</code></th>
<td class="type">number</td>
<td class="description last">Determines the order of the column among all the others. Lower numbers come first.</td>
</tr>
<tr>
<th class="name" scope="row"><code>width</code></th>
<td class="type">number</td>
<td class="description last">The minimum width of the column. By default the grid may stretch column widths to make use of available space. See <code class="prettyprint">noStretch</code> property.</td>
</tr>
<tr>
<th class="name" scope="row"><code>noStretch</code></th>
<td class="type">boolean</td>
<td class="description last">If false, the default, columns will stretch to fill available width. If true the column width will not stretch to fill available space as the grid resizes. In either case the user can still adjust the width. This stretching only applies if the total <code class="prettyprint">width</code> of all columns is less than the width of the grid.</td>
</tr>
<tr>
<th class="name" scope="row"><code>groupName</code></th>
<td class="type">string</td>
<td class="description last">Name of column group. See <a href="grid.html#columnGroups">grid#columnGroups</a> and <code class="prettyprint">useGroupFor</code>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>useGroupFor</code></th>
<td class="type">string</td>
<td class="description last">If not present or if the string contains "heading" then the group given in <code class="prettyprint">groupName</code> will be used. This allows the same column definition to be shared with multiple kinds of views so that the <code class="prettyprint">groupName</code> is used by other views but not the grid.</td>
</tr>
<tr>
<th class="name" scope="row"><code>canHide</code></th>
<td class="type">boolean</td>
<td class="description last">Determines if the user is allowed to show or hide the column. If true the user can choose to hide or show the column. If false the user cannot change the hidden state. The grid only uses this property to determine if it should show a hidden column when needed such as in grid#gotoError.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hidden</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column is hidden otherwise it is shown.</td>
</tr>
<tr>
<th class="name" scope="row"><code>readonly</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column cannot be edited. This is also used to give a visual representation for non-editable cells. Note: The <a href="model.html">model</a> has additional criteria for when a column cell can be edited.</td>
</tr>
<tr>
<th class="name" scope="row"><code>linkTargetColumn</code></th>
<td class="type">string</td>
<td class="description last">The name of the column that contains the anchor <code class="prettyprint">href</code>. If not given the <code class="prettyprint">href</code> comes from the model field metadata <code class="prettyprint">url</code> property. If there is no <code class="prettyprint">url</code> property then this column cell is not a link.</td>
</tr>
<tr>
<th class="name" scope="row"><code>linkText</code></th>
<td class="type">string</td>
<td class="description last">Only for columns that contain a link. This is the anchor content. Allows markup. Allows substitutions just like the <code class="prettyprint">cellTemplate</code> property. If not given the rendered display value of this column is used as the link content. If the display value of the cell is empty then the link URL is used. To display a link, at least one of <code class="prettyprint">linkTargetColumn</code> or the model field metadata <code class="prettyprint">url</code> property must be given. Note: If the cell is editable it is always the data value of the field that is edited. So if you want to edit the link text it is best to omit linkText and use <code class="prettyprint">linkTargetColumn</code>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>linkAttributes</code></th>
<td class="type">string</td>
<td class="description last">Only for columns that contain a link. This provides additional anchor attributes. Allows substitutions just like the <code class="prettyprint">cellTemplate</code> property.</td>
</tr>
<tr>
<th class="name" scope="row"><code>isRequired</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column is indicated as required by adding <code class="prettyprint">is-required</code> class to the column header. This should correspond with the required setting of the underlying editable column item.</td>
</tr>
<tr>
<th class="name" scope="row"><code>helpid</code></th>
<td class="type">string</td>
<td class="description last">Help id for the column. This is the first argument passed to <a href="apex.theme.html#.popupFieldHelp">apex.theme.popupFieldHelp</a>. If present pressing the help key Alt+F1 will display the help text for the field.</td>
</tr>
<tr>
<th class="name" scope="row"><code>virtual</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column is not included in copy down and fill operations.</td>
</tr>
<tr>
<th class="name" scope="row"><code>noCopy</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column is not included in copy down and fill operations.</td>
</tr>
<tr>
<th class="name" scope="row"><code>usedAsRowHeader</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column is an accessible row header. The value of the column is included in the description of the row for assistive technologies. Default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>noHeaderActivate</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column header does not support activation. Default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>sortDirection</code></th>
<td class="type">string</td>
<td class="description last">One of "asc" or "desc". Use "asc" if the data is sorted by this column ascending. Use "desc" if the data is sorted by this column descending. The value should be null, not present or undefined if the data is not sorted by this column.</td>
</tr>
<tr>
<th class="name" scope="row"><code>sortIndex</code></th>
<td class="type">number</td>
<td class="description last">Only applies if <code class="prettyprint">sortDirection</code> is given. The order in which this column is sorted 1 = first, 2 = second, and so on. The server is responsible for doing the sorting.</td>
</tr>
<tr>
<th class="name" scope="row"><code>canSort</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column can be sorted by the user. This controls if the header sort buttons are shown or if the keyboard sort keys work. The grid does not actually do the sorting. The <a href="grid.html#event:sortchange">grid#event:sortchange</a> event/callback is fired/called to let the controller or parent widget know to do sorting by refreshing the <a href="model.html">model</a> data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>controlBreakDirection</code></th>
<td class="type">string</td>
<td class="description last">One of "asc" or "desc". Use "asc" if the control break data is sorted by this column ascending. Use "desc" if the control break data is sorted by this column descending. The value should be null, not present or undefined if the column is not a control break.</td>
</tr>
<tr>
<th class="name" scope="row"><code>controlBreakIndex</code></th>
<td class="type">number</td>
<td class="description last">The order in which this column is sorted for the purpose of control breaks. Starting at 1. Only applies if <code class="prettyprint">controlBreakDirection</code> is given. The server is responsible for sorting the data by the control break columns according to <code class="prettyprint">controlBreakIndex</code> so that all the records with the same value are grouped together and must also set the record metadata property <code class="prettyprint">endControlBreak</code>. See <a href="model.html#.RecordMetadata">model.RecordMetadata</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>frozen</code></th>
<td class="type">boolean</td>
<td class="description last">If true the column is frozen (does not horizontal scroll). Only the start most columns can be frozen. At most 20 columns can be frozen.</td>
</tr>
<tr>
<th class="name" scope="row"><code>property</code></th>
<td class="type">string</td>
<td class="description last">Do not specify this property. It is added automatically and the value is the column/field name.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the grid with the columns option specified.

```
$( ".selector" ).grid( {

    columns: [ {
     NAME: {
         heading: "<em>Name</em>",
         label: "Name",
         alignment: "start",
         headingAlignment: "center",
         seq: 1,
         canHide: true,
         canSort: true,
         hidden: false,
         isRequired: true,
         escape: true,
         frozen: false,
         noStretch: false,
         noCopy: false,
         readonly: false,
         sortDirection: "asc",
         sortIndex: 1,
         width: 98
     },
     ....
 } ]

} );
```

Column options can be set on Interactive Grid region columns using the `defaultGridColumnOptions` property in the column Initialization JavaScript Function attribute. This example sets the headingCssClasses and columnCssClasses for a specific column of an Interactive Grid region by adding the following code to the column's Initialization JavaScript Function attribute.

```
function( options ) {
    options.defaultGridColumnOptions = {
        headingCssClasses: "special-heading",
        columnCssClasses: "special-cell"
    };
    return options;
}
```

#### constrainNavigation :boolean

Normally keydown handling will call preventDefault so that arrow key navigation has no effect outside the grid. This prevents text selection and keeps parent elements from scrolling. By setting this to false it allows a nested container to respond to arrow navigation keys.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the constrainNavigation option specified.

```
$( ".selector" ).grid( {

    constrainNavigation: false

} );
```

Get or set option constrainNavigation after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "constrainNavigation" );

// set

$( ".selector" ).grid( "option", "constrainNavigation", false );
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

Initialize the grid with the contextMenu option specified.

```
$( ".selector" ).grid( {

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

Initialize the grid with the contextMenuAction option specified.

```
$( ".selector" ).grid( {

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

Initialize the grid with the contextMenuId option specified.

```
$( ".selector" ).grid( {

    contextMenuId: "myContextMenu"

} );
```

#### editable :boolean

Determine if the view allows editing. If true the [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) must also allow editing but if false the model could still allow editing. If true the view data can be edited according to what the model allows. Only applies if the view supports editing.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#editable)

Default Value:
- false

##### Examples

Initialize the grid with the editable option specified.

```
$( ".selector" ).grid( {

    editable: true

} );
```

Get or set option editable after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "editable" );

// set

$( ".selector" ).grid( "option", "editable", true );
```

#### (nullable) entityTitlePlural :string

This is the name of the singular form of the entity that is the subject of the report. This text is displayed in the total count message and in the selection count message.

##### Type:

- string

Inherited From:
- [tableModelViewBase#entityTitlePlural](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#entityTitlePlural)

Default Value:
- null

##### Examples

Initialize the grid with the entityTitlePlural option specified.

```
$( ".selector" ).grid( {

    entityTitlePlural: "Customers"

} );
```

Get or set option entityTitlePlural after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "entityTitlePlural" );

// set

$( ".selector" ).grid( "option", "entityTitlePlural", "Employees" );
```

#### (nullable) entityTitleSingular :string

This is the singular form of the entity that is the subject of the report. This text is displayed in the total count message and in the selection count message.

##### Type:

- string

Inherited From:
- [tableModelViewBase#entityTitleSingular](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#entityTitleSingular)

Default Value:
- null

##### Examples

Initialize the grid with the entityTitleSingular option specified.

```
$( ".selector" ).grid( {

    entityTitleSingular: "Customer"

} );
```

Get or set option entityTitleSingular after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "entityTitleSingular" );

// set

$( ".selector" ).grid( "option", "entityTitleSingular", "Employee" );
```

#### fixedRowHeight :boolean

Specify if all the rows will have the same height or variable heights.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#fixedRowHeight](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#fixedRowHeight)

Default Value:
- true

##### Examples

Initialize the grid with the fixedRowHeight option specified.

```
$( ".selector" ).grid( {

    fixedRowHeight: false

} );
```

Get or set option fixedRowHeight after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "fixedRowHeight" );

// set

$( ".selector" ).grid( "option", "fixedRowHeight", false );
```

#### footer :boolean

Determine if the view will include a footer to show status and pagination controls and information. If true a footer is shown at the bottom of the view. If false no footer is shown.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#footer](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#footer)

Default Value:
- true

##### Examples

Initialize the grid with the footer option specified.

```
$( ".selector" ).grid( {

    footer: false

} );
```

Get or set option footer after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "footer" );

// set

$( ".selector" ).grid( "option", "footer", false );
```

#### hasSize :boolean

This affects scrolling and how any header (if the view has a header) or footer position is handled.

Set to true if the view is in a container that has a specific height defined. When hasSize is true the record content will scroll within the bounds of the region.

Set to false if the view does not have a defined height. The view height will be as large as needed to contain the view records as determined by pagination settings. The view may scroll within the browser window. Other options may control if the header (if the view has a header) or footer sticks to the window.

The container width must always be defined.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#hasSize](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#hasSize)

Default Value:
- false

##### Example

Initialize the grid with the hasSize option specified.

```
$( ".selector" ).grid( {

    hasSize: true

} );
```

#### hideDeletedRows :boolean

Determine if deleted rows (records) are removed from the view right away or shown with a visual effect to indicate they are going to be deleted. If true (and the view is editable) deleted records will not be visible, otherwise they are visible but have a visual indication that they are deleted. The actual records are not deleted on the server until the model is saved. The visual effect is determined by CSS rules and is typically strike through. See also [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) `onlyMarkForDelete` option.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#hideDeletedRows](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#hideDeletedRows)

Default Value:
- false

##### Examples

Initialize the grid with the hideDeletedRows option specified.

```
$( ".selector" ).grid( {

    hideDeletedRows: true

} );
```

Get or set option hideDeletedRows after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "hideDeletedRows" );

// set

$( ".selector" ).grid( "option", "hideDeletedRows", true );
```

#### hideEmptyFooter :boolean

Hide the footer if there is no data. This only applies if `footer` is true.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#hideEmptyFooter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#hideEmptyFooter)

Default Value:
- false

##### Examples

Initialize the grid with the hideEmptyFooter option specified.

```
$( ".selector" ).grid( {

    hideEmptyFooter: true

} );
```

Get or set option hideEmptyFooter after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "hideEmptyFooter" );

// set

$( ".selector" ).grid( "option", "hideEmptyFooter", true );
```

#### highlights :object

Defines highlight color information for the view. Only applies to views that support highlighting. Style rules are injected into the document based on the highlight object.

The object is a mapping of highlight id to color definition.

##### Type:

- object

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
<td class="type">object</td>
<td class="description last">A highlight ID. A unique ID for the highlight rule. The object can contain any number of highlight rules. The <a href="model.html">model</a> record or field <code class="prettyprint">highlight</code> metadata (see <a href="model.html#.RecordMetadata">model.RecordMetadata</a>) is used to associate the model data with the highlight rule. One of <code class="prettyprint">color</code> or <code class="prettyprint">background</code> must be given.
<h6 id="properties-8">Properties</h6>
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
<th class="name" scope="row"><code>seq</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">A number that defines the order of the CSS rule that is added.</td>
</tr>
<tr>
<th class="name" scope="row"><code>row</code></th>
<td class="type">boolean</td>
<td class="attributes"></td>
<td class="description last">If true the highlight applies to the record/row.</td>
</tr>
<tr>
<th class="name" scope="row"><code>color</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The foreground color. If given, must be a valid CSS color value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>background</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The background color. If given, must be a valid CSS color value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>cssClass</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The class name for the rule. This is the class used in the rule and given to the appropriate element in the view so that the desired highlight colors are applied. The cssClass defaults to the highlight id prefixed with "hlr_" if row is true and "hlc_" otherwise.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Inherited From:
- [tableModelViewBase#highlights](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#highlights)

##### Examples

Initialize the grid with the highlights option specified.

```
$( ".selector" ).grid( {

    highlights: {
        "hlid0001": {
            seq: 1,
            row: true,
            color: "#FF7755"
        },
        ...
    }

} );
```

Get or set option highlights after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "highlights" );

// set

$( ".selector" ).grid( "option", "highlights", {...} );
```

#### loadIncompleteSelection :string

Controls what happens when the selection is incomplete. When selection state is saved in the model, and because the model can fetch data on demand, it is possible to select records that are not yet loaded into the model resulting in an incomplete selection. This can happen when selecting all rows/items or when range selecting a large enough range.

Only applies if [tableModelViewBase#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#persistSelection) is true and with virtual pagination. The value is one of: "always", "never", or "on-demand". The default is "on-demand". When the selection is incomplete:

- "always": start fetching all the model data as soon as there is an incomplete selection
- "never": do nothing
- "on-demand": display a link for the user to click to cause all the model data to be fetched. The footer must be displayed for the user to access the link. If the footer is turned off and showing the selection count externally the developer is responsible for providing a button (or link) to load the model data on demand by calling [tableModelViewBase#fetchAllData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#fetchAllData). See also [tableModelViewBase#updateStatus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#updateStatus).

##### Type:

- string

Inherited From:
- [tableModelViewBase#loadIncompleteSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#loadIncompleteSelection)

Default Value:
- "on-demand"

##### Examples

Initialize the grid with the loadIncompleteSelection option specified.

```
$( ".selector" ).grid( {

    loadIncompleteSelection: "always"

} );
```

Initialize the grid with the loadIncompleteSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        loadIncompleteSelection: "always"
    };

    return options;

}
```

Initialize the grid with the loadIncompleteSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultDetailViewOptions = {
        loadIncompleteSelection: "always"
    };

    return options;

}
```

Get or set option loadIncompleteSelection after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "loadIncompleteSelection" );

// set

$( ".selector" ).grid( "option", "loadIncompleteSelection", "always" );
```

#### modelName :[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

Identifier of model that this view widget will display data from. Can include an instance as well. The model must already exist. This option is required. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) `modelId` argument.

##### Type:

- [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

Inherited From:
- [tableModelViewBase#modelName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#modelName)

##### Examples

Initialize the grid with the modelName option specified.

```
$( ".selector" ).grid( {

    modelName: [ "myModel", "1011" ]

} );
```

Get or set option modelName after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "modelName" );

// set

$( ".selector" ).grid( "option", "modelName", "myModel" );
```

#### multiple :boolean

If true multiple rows can be selected otherwise only a single row can be selected.

See also [grid#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectAll1) and [grid#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#persistSelection).

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the grid with the multiple option specified.

```
$( ".selector" ).grid( {

    multiple: true

} );
```

Get or set option multiple after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "multiple" );

// set

$( ".selector" ).grid( "option", "multiple", true );
```

#### multipleCells :boolean

Only applies while [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is true. If true then a range of cells can be selected otherwise only a single cell is selected. The default is to allow a range of cells to be selected.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the multipleCells option specified.

```
$( ".selector" ).grid( {

    multipleCells: false

} );
```

Get or set option multipleCells after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "multipleCells" );

// set

$( ".selector" ).grid( "option", "multipleCells", false );
```

#### multipleRanges :boolean

If true, then multiple ranges can be selected. Otherwise, at most one range can be selected. Only applies while [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) and [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells) are true.

##### Type:

- boolean

Since:
- 26.1

Default Value:
- false

##### Examples

Initialize the grid with the multipleRanges option specified.

```
$( ".selector" ).grid( {

    multipleRanges: true

} );
```

Get or set option multipleRanges after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "multipleRanges" );

// set

$( ".selector" ).grid( "option", "multipleRanges", true );
```

#### noDataIcon :string

Icon to display when there is no data. The icon is displayed above the `noDataMessage` text.

##### Type:

- string

Inherited From:
- [tableModelViewBase#noDataIcon](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#noDataIcon)

Default Value:
- "icon-irr-no-results"

##### Examples

Initialize the grid with the noDataIcon option specified.

```
$( ".selector" ).grid( {

    noDataIcon: "fa fa-warning"

} );
```

Get or set option noDataIcon after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "noDataIcon" );

// set

$( ".selector" ).grid( "option", "noDataIcon", "fa fa-warning" );
```

#### noDataMessage :string

Text to display when there is no data.

##### Type:

- string

Inherited From:
- [tableModelViewBase#noDataMessage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#noDataMessage)

Default Value:
- ""

##### Examples

Initialize the grid with the noDataMessage option specified.

```
$( ".selector" ).grid( {

    noDataMessage: "No employees found."

} );
```

Get or set option noDataMessage after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "noDataMessage" );

// set

$( ".selector" ).grid( "option", "noDataMessage", "No records found." );
```

#### pagination :object

Pagination settings.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `scroll` | boolean | If true the scroll bar is used to page through the results a.k.a. infinite scrolling or virtual paging. If false then next and previous buttons are shown. This is 'page at a time' or traditional pagination. Default is false. |
| `virtual` | boolean | Only applies if `scroll` is true. If false new records are rendered and added to the DOM as the user scrolls to the bottom of the view. Records are never removed from the DOM. This is 'add more' (aka high-water-mark) scroll pagination. If true records can be removed from the DOM as the user scrolls and the records are no longer visible. If true and in addition `loadMore` is false and the model knows the total number of records (model option `hasTotalRecords` is true) then the view looks as if it contains all the records but only the records that are currently visible are rendered. This allows virtual scroll paging in both directions. This is 'virtual' scroll pagination (aka true virtual scrolling). In this case, if the view supports selection the [tableModelViewBase#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#persistSelection) option should be true so that selection state isn't lost when records are removed from the DOM. Default is false. |
| `loadMore` | boolean | If true show a load more button rather than auto paging. Only applies if `scroll` is true. Default is false. |
| `showPageLinks` | boolean | If true show page links between buttons. Only applies if `scroll` is false The model must know the total number of rows for this to be true. Default is false. |
| `maxLinks` | number | The maximum number of links to show when `showPageLinks` is true. Default is 5. |
| `showPageSelector` | boolean | If true show a drop-down page selector between the buttons. Only applies if `scroll` is false. The model must know the total number of rows for this to be true. Default is false. |
| `showRange` | boolean | If true the range of rows/records is shown. It is shown between the buttons unless `showPageLinks` or `showPageSelector` is true. The range is shown as "X to Y" if the model doesn't know the total rows and "X to Y of Z" if the model does know the total number of rows. Default is true. |
| `firstAndLastButtons` | boolean | Only applies if `scroll` is false. If true first and last buttons are included. For this to be true the model must know the total number of rows. Default is false. |
| `hideSinglePage` | boolean | Hide the pagination controls when there is only one page of results. When true and there is just one page of results the pagination controls are hidden. When false the pagination controls are disabled when there is just one page. Pagination controls include the "first", "next", "previous", and "last" buttons when `scroll` is false and "load more" button when `scroll` and `loadMore` are true. In addition, when true, if the page range typically shows X - Y of Z it will just show the total records when there is just one page. The default is false. |

Inherited From:
- [tableModelViewBase#pagination](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#pagination)

##### Examples

Initialize the grid with the pagination option specified.

```
$( ".selector" ).grid( {

    pagination: {
        showRange: true,
        showPageLinks: true,
        maxLinks: 6,
        firstAndLastButtons: true
    }

} );
```

Get or set option pagination after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "pagination" );

// set

$( ".selector" ).grid( "option", "pagination", {...} );
```

#### persistSelection :boolean

If true and the view supports selection, the selection state for each row or item will be saved as record metadata in the model.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#persistSelection)

Default Value:
- false

##### Examples

Initialize the grid with the persistSelection option specified.

```
$( ".selector" ).grid( {

    persistSelection: true

} );
```

Initialize the grid with the persistSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        persistSelection: true
    };

    return options;

}
```

Initialize the grid with the persistSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultDetailViewOptions = {
        persistSelection: true
    };

    return options;

}
```

Get or set option persistSelection after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "persistSelection" );

// set

$( ".selector" ).grid( "option", "persistSelection", true );
```

#### progressOptions :object

Options object to pass to [apex.util.showSpinner](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.showSpinner). The default depends on the `hasSize` option.

##### Type:

- object

Inherited From:
- [tableModelViewBase#progressOptions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#progressOptions)

Default Value:
- { fixed: !options.hasSize }

##### Examples

Initialize the grid with the progressOptions option specified.

```
$( ".selector" ).grid( {

    progressOptions: null

} );
```

Get or set option progressOptions after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "progressOptions" );

// set

$( ".selector" ).grid( "option", "progressOptions", null );
```

#### reorderColumns :boolean

If true the mouse and keyboard can be used in column headings to reorder the columns or column groups.

Note the column order can still be changed external to the grid.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the reorderColumns option specified.

```
$( ".selector" ).grid( {

    reorderColumns: false

} );
```

Initialize the grid with the reorderColumns option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        reorderColumns: false
    };

    return options;

}
```

Get or set option reorderColumns after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "reorderColumns" );

// set

$( ".selector" ).grid( "option", "reorderColumns", false );
```

#### resizeColumns :boolean

If true the mouse and keyboard can be used in column headings to adjust the width of columns.

Note the column widths can still be changed external to the grid.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the resizeColumns option specified.

```
$( ".selector" ).grid( {

    resizeColumns: false

} );
```

Initialize the grid with the resizeColumns option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        resizeColumns: false
    };

    return options;

}
```

Get or set option resizeColumns after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "resizeColumns" );

// set

$( ".selector" ).grid( "option", "resizeColumns", false );
```

#### rowHeader :string

Determines the type of row selection header. One of: "none", "plain", "sequence", or "label". The row selection header is not a real column and is always frozen.

- none: There is no selection row header.
- plain: There is a selection row header that may contain a checkbox and state classes but nothing more.
- sequence: The selection row header contains a row sequence number. The width can be adjusted.
- label: The selection row header contains a label with content given by rowHeaderLabelColumn. The width can be adjusted.

When the grid is editable or when multiple selection is allowed it is a good idea to have a rowHeader but it is not enforced. A value other than "none" is required for editable grids in order to see visual indicators such as row level errors.

##### Type:

- string

Default Value:
- "none"

##### Examples

Initialize the grid with the rowHeader option specified.

```
$( ".selector" ).grid( {

    rowHeader: "plain"

} );
```

Get or set option rowHeader after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "rowHeader" );

// set

$( ".selector" ).grid( "option", "rowHeader", "plain" );
```

#### rowHeaderCheckbox :boolean

If true the row selection header will contain a selection control. A checkbox if multiple selection is enabled or a radio button otherwise. If false no selection control is shown. This option is ignored if `rowHeader` is "none"

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the grid with the rowHeaderCheckbox option specified.

```
$( ".selector" ).grid( {

    rowHeaderCheckbox: true

} );
```

Get or set option rowHeaderCheckbox after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "rowHeaderCheckbox" );

// set

$( ".selector" ).grid( "option", "rowHeaderCheckbox", true );
```

#### (nullable) rowHeaderLabelColumn :string

This is the name of a model column to take the row header label value from. The column value can include markup. This option only applies if `rowHeader` is "label".

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the grid with the rowHeaderLabelColumn option specified.

```
$( ".selector" ).grid( {

    rowHeaderLabelColumn: "PART_NAME"

} );
```

Get or set option rowHeaderLabelColumn after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "rowHeaderLabelColumn" );

// set

$( ".selector" ).grid( "option", "rowHeaderLabelColumn", "PART_NAME" );
```

#### (nullable) rowHeaderWidth :number

Width of row selection header in pixels. Only applies if `rowHeader` is not "none". If null, a default width is chosen based on the kind of `rowHeader`.

The default width values come from CSS variables that correspond to the rowHeader value:

- --js-gv-row-header-width-plain
- --js-gv-row-header-width-ctrl
- --js-gv-row-header-width-text
- --js-gv-row-header-width-ctrl-text

This allows themes to provide theme specific defaults. The variable values must be a number with a px suffix.

##### Type:

- number

Default Value:
- depends on rowHeader value

##### Examples

Initialize the grid with the rowHeaderWidth option specified.

```
$( ".selector" ).grid( {

    rowHeaderWidth: 58

} );
```

Get or set option rowHeaderWidth after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "rowHeaderWidth" );

// set

$( ".selector" ).grid( "option", "rowHeaderWidth", 58 );
```

#### (nullable) rowsPerPage :number

Determine how many records to show in one page. Only applies if `pagination.scroll` is false or `pagination.loadMore` and `pagination.scroll` are both true, otherwise this value is ignored.

Note the name of this option is a little confusing because some views put more than one record on the same visual row. This value is the number of records (or items) shown on a page. For example if `rowsPerPage` is 10 and the view shows two records per row then there will be a total of 5 rows showing 10 records.

For traditional pagination this is the number of records to show in a report page. For load more pagination this is the number of records to add to the report. If null, the number of records is determined by the viewport height and the average row/item height. This works best if all the rows/items have the same fixed height.

##### Type:

- number

Inherited From:
- [tableModelViewBase#rowsPerPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#rowsPerPage)

Default Value:
- null

##### Examples

Initialize the grid with the rowsPerPage option specified.

```
$( ".selector" ).grid( {

    rowsPerPage: 50

} );
```

Get or set option rowsPerPage after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "rowsPerPage" );

// set

$( ".selector" ).grid( "option", "rowsPerPage", 50 );
```

#### selectAll :boolean

If true, and when [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is false, then all the rows in the current page or all rendered rows or all rows in the model, depending on pagination settings, can be selected with the keyboard (Ctrl+A key, or on macOS the Command+A key) or the select all checkbox (if [grid#rowHeaderCheckbox](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#rowHeaderCheckbox) is true) or using the [grid#selectAll(2)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectAll2) method. When [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is true, then a single range of all cells will be selected. The same keyboard shortcuts are used or the selectAll method. In cell range selection mode there is no "select all" checkbox but the first column header serves the same purpose as long as [grid#rowHeader](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#rowHeader) is not "none".

Only applies when [grid#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multiple) or [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells) is true.

When [grid#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#persistSelection) is false only rows that are rendered to the DOM can be selected with Select All. For traditional paging this means that all the rows in the current page can be selected. For any kind of scroll pagination, only the rows that have already been and are currently rendered to the DOM can be selected.

When [grid#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#persistSelection) is true the selection state is kept in the model and only records currently loaded in the model can be selected.

When [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is true the persistSelection setting is ignored. The selected range information is kept in the grid but independent of the DOM. One or more ranges may be incomplete if they span records that are not yet loaded in the model.

The [grid#loadIncompleteSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#loadIncompleteSelection) option controls if and how additional records are loaded in the model so that the selection is complete. This setting applies for both row and cell range selection modes.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the grid with the selectAll option specified.

```
$( ".selector" ).grid( {

    selectAll: false

} );
```

Get or set option selectAll after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "selectAll" );

// set

$( ".selector" ).grid( "option", "selectAll", false );
```

#### selectCells :boolean

When true select cells otherwise select rows. The default is to select rows.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the grid with the selectCells option specified.

```
$( ".selector" ).grid( {

    selectCells: true

} );
```

Get or set option selectCells after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "selectCells" );

// set

$( ".selector" ).grid( "option", "selectCells", true );
```

#### selectCellsColumn :boolean

If true, when selecting cells, allows selecting all the cells in a column by clicking on a column header or pressing the space key with focus in a column header. Only applies while [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) and [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells) are true.

If true then the grid [grid#event:activatecolumnheader](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:activatecolumnheader) event will not be triggered and the `activateColumnHeader` call back option will not be called.

##### Type:

- boolean

Since:
- 26.1

Default Value:
- false

##### Examples

Initialize the grid with the selectCellsColumn option specified.

```
$( ".selector" ).grid( {

    selectCellsColumn: true

} );
```

Get or set option selectCellsColumn after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "selectCellsColumn" );

// set

$( ".selector" ).grid( "option", "selectCellsColumn", true );
```

#### selectCellsRow :boolean

If true, when selecting cells, allows selecting all the cells in a row by clicking on a row header or pressing the space key with focus in a row header. Only applies while [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) and [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells) are true.

##### Type:

- boolean

Since:
- 26.1

Default Value:
- false

##### Examples

Initialize the grid with the selectCellsRow option specified.

```
$( ".selector" ).grid( {

    selectCellsRow: true

} );
```

Get or set option selectCellsRow after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "selectCellsRow" );

// set

$( ".selector" ).grid( "option", "selectCellsRow", true );
```

#### (nullable) selectionStateItem :string

Name of an APEX page item that will receive the selection state each time the selection changes. Typically, this is the name of a hidden page item and is used to process the selection on the server with a PL/SQL code process.

The format of the selection state value is a ":" separated string of the selected rows record identity.

##### Type:

- string

Default Value:
- null

##### Example

Initialize the grid with the selectionStateItem option specified.

```
$( ".selector" ).grid( {

    selectionStateItem: "P1_REPORT_SELECTION"

} );
```

#### selectionStatusMessageKey :string

The text message key to use for showing the number of selected rows/records in the footer. The message key must have exactly one parameter %0 which is replaced with the number of rows/records selected. It is often better to use [grid#entityTitleSingular](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#entityTitleSingular) and [grid#entityTitlePlural](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#entityTitlePlural) rather than this option.

##### Type:

- string

Overrides:
- [tableModelViewBase#selectionStatusMessageKey](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#selectionStatusMessageKey)

Default Value:
- "APEX.GV.SELECTION_COUNT"

##### Examples

Initialize the grid with the selectionStatusMessageKey option specified.

```
$( ".selector" ).grid( {

    selectionStatusMessageKey: "MY_SELECTION_MESSAGE"

} );
```

Get or set option selectionStatusMessageKey after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "selectionStatusMessageKey" );

// set

$( ".selector" ).grid( "option", "selectionStatusMessageKey", "MY_SELECTION_MESSAGE" );
```

#### showNullAs :string

Text to display when a field/column value is null or empty string.

##### Type:

- string

Inherited From:
- [tableModelViewBase#showNullAs](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#showNullAs)

Default Value:
- "-"

##### Examples

Initialize the grid with the showNullAs option specified.

```
$( ".selector" ).grid( {

    showNullAs: "- null -"

} );
```

Get or set option showNullAs after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "showNullAs" );

// set

$( ".selector" ).grid( "option", "showNullAs", "- null -" );
```

#### skipReadonlyCells :boolean

Determines if the user can tab to read-only cells while in edit mode. When `false` the Tab key will move focus to read-only cells. When `true` the Tab key will skip over all read-only cells.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the grid with the skipReadonlyCells option specified.

```
$( ".selector" ).grid( {

    skipReadonlyCells: true

} );
```

Get or set option skipReadonlyCells after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "skipReadonlyCells" );

// set

$( ".selector" ).grid( "option", "skipReadonlyCells", true );
```

#### stickyFooter :boolean

Determine if the footer will stick to the bottom of the page. Only applies if `hasSize` is false and `footer` is true. If false the footer will not stick to the bottom of the page. If true the footer will stick to the bottom of the page.

##### Type:

- boolean

Inherited From:
- [tableModelViewBase#stickyFooter](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#stickyFooter)

Default Value:
- false

##### Examples

Initialize the grid with the stickyFooter option specified.

```
$( ".selector" ).grid( {

    stickyFooter: true

} );
```

Get or set option stickyFooter after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "stickyFooter" );

// set

$( ".selector" ).grid( "option", "stickyFooter", true );
```

#### stickyTop :boolean\|function

Determine if the header will stick to the top of the page as it scrolls.

Only applies if [tableModelViewBase#hasSize](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#hasSize) is false. If false the header will not stick to the page. If true or a function the header will stick to the top of the page using the undocumented `stickyWidget` widget. If the value is a function then it is passed to the `stickyWidget` as the top option.

##### Type:

- boolean \| function

Inherited From:
- [tableModelViewBase#stickyTop](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#stickyTop)

Default Value:
- false

##### Examples

Initialize the grid with the stickyTop option specified.

```
$( ".selector" ).grid( {

    stickyTop: true

} );
```

Get or set option stickyTop after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "stickyTop" );

// set

$( ".selector" ).grid( "option", "stickyTop", true );
```

#### tabbableCellContent :string

A jQuery selector that identifies cell content that can be a tab stop in navigation mode.

##### Type:

- string

Default Value:
- "a,button,input,span\[role='checkbox'\]"

#### tooltip :object

A tooltip object suitable for jQuery UI tooltip widget except that the `items` property is not needed. It is supplied by the grid and cannot be overridden. It matches `td,th`. Also the `open` event is not available as a property. Default values are provided for `tooltipClass`, and `show` but can be overridden. The `content` callback function receives extra arguments: model, recordMeta, colMeta, columnDef. Tooltips are used to show errors and warnings at the row and cell level. The content function is not called if there is an error or warning message to display. If tooltip is null the error or warning message is added as a title attribute.

##### Type:

- object

##### Examples

Initialize the grid with the tooltip option specified.

```
$( ".selector" ).grid( {

    tooltip: {
    content: function( callback, model, recordMeta, colMeta, columnDef ) {
        var text;
        // calculate the tooltip text
        return text;
    }
}

} );
```

Initialize the grid with the tooltip option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        tooltip: {
            content: function( callback, model, recordMeta, colMeta, columnDef ) {
                var text;
                // calculate the tooltip text
                return text;
            }
        }
    };

    return options;

}
```

Get or set option tooltip after initialization.

```
// get

let value = $( ".selector" ).grid( "option", "tooltip" );

// set

$( ".selector" ).grid( "option", "tooltip", {
    content: function( callback, model, recordMeta, colMeta, columnDef ) {
        var text;
        // calculate the tooltip text
        return text;
    }
} );
```

#### updateStatus :function

A callback function that will handle display of report status information such as the count of selected items/rows. The function receives an object with properties:

- deletedCount: The number of deleted records if option `hideDeletedRows` is true and null otherwise.
- selectedCount: The number of selected records
- total: The total number of records if model option `hasTotalRecords` is true and null otherwise.
- incomplete: True if the selection is incomplete and false otherwise. The selection is incomplete if the view has selected more records than the model currently has loaded. See option [tableModelViewBase#loadIncompleteSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#loadIncompleteSelection).
- altMessage: Message text to display until the next call to `updateStatus`. Currently used for paste operation messages.

Use this callback to display the selected record count in a custom location in the page. This is most useful when the report footer is not shown [tableModelViewBase#footer](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#footer) is false.

##### Type:

- function

Inherited From:
- [tableModelViewBase#updateStatus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#updateStatus)

Default Value:
- null

##### Example

Initialize the grid with the updateStatus option specified.

```
$( ".selector" ).grid( {

    updateStatus: function( status ) {
        let message = "",
            el$ = $( "#selectionCount" ) // the element to display the count in

        if ( status.selectedCount > 0 ) {
            message = `${status.selectedCount} things selected`;
        }
        el$.text( message );
    }

} );
```

### Events

#### activatecell

Triggered when a grid cell is activated (Enter key or double click). This event only applies to non-editable grids.

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
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-11">Properties</h6>
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
<th class="name" scope="row"><code>cell$</code></th>
<td class="type">jQuery</td>
<td class="description last">The grid cell element jQuery object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>row$</code></th>
<td class="type">jQuery</td>
<td class="description last">The grid row jQuery object.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Since:
- 18.2

##### Examples

Initialize the grid with the `activateCell` callback specified:

```
$( ".selector" ).grid( {
    activateCell: function( event, data ) {}
} );
```

Bind an event listener to the `gridactivatecell` event:

```
$( ".selector" ).on( "gridactivatecell", function( event, data ) {} );
```

#### activatecolumnheader

Triggered when a column header is activated (Enter/Space key or click).

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
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-13">Properties</h6>
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
<th class="name" scope="row"><code>header$</code></th>
<td class="type">jQuery</td>
<td class="description last">The column element jQuery object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>column</code></th>
<td class="type">object</td>
<td class="description last">The column definition object.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the grid with the `activateColumnHeader` callback specified:

```
$( ".selector" ).grid({
    activateColumnHeader: function( event, data ) {}
});
```

Bind an event listener to the `gridactivatecolumnheader` event:

```
$( ".selector" ).on( "gridactivatecolumnheader", function( event, data ) {} );
```

#### cancelcolumnheader

Triggered when whatever popup is opened in response to activateColumnHeader event should be closed/canceled. This happens because of another operation on the column such as dragging.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Examples

Initialize the grid with the `cancelColumnHeader` callback specified:

```
$( ".selector" ).grid( {
    cancelColumnHeader: function( event ) {}
} );
```

Bind an event listener to the `gridcancelcolumnheader` event:

```
$( ".selector" ).on( "gridcancelcolumnheader", function( event ) {} );
```

#### columnreorder

Triggered when the columns have been reordered.

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
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-16">Properties</h6>
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
<th class="name" scope="row"><code>header$</code></th>
<td class="type">jQuery</td>
<td class="description last">The column element jQuery object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>column</code></th>
<td class="type">object</td>
<td class="description last">The column definition object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>newPosition</code></th>
<td class="type">string</td>
<td class="description last">The index of the new position of the column.</td>
</tr>
<tr>
<th class="name" scope="row"><code>oldPosition</code></th>
<td class="type">string</td>
<td class="description last">The index of the old position of the column.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the grid with the `columnReorder` callback specified:

```
$( ".selector" ).grid({
    columnReorder: function( event, data ) {}
});
```

Bind an event listener to the `gridcolumnreorder` event:

```
$( ".selector" ).on( "gridcolumnreorder", function( event, data ) {} );
```

#### columnresize

Triggered when a column width has been changed.

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
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-18">Properties</h6>
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
<th class="name" scope="row"><code>header$</code></th>
<td class="type">jQuery</td>
<td class="description last">The column element jQuery object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>column</code></th>
<td class="type">object</td>
<td class="description last">The column definition object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>width</code></th>
<td class="type">string</td>
<td class="description last">The new width in pixels.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the grid with the `columnResize` callback specified:

```
$( ".selector" ).grid({
    columnResize: function( event, data ) {}
});
```

Bind an event listener to the `gridcolumnresize` event:

```
$( ".selector" ).on( "gridcolumnresize", function( event, data ) {} );
```

#### currentcellchange

Triggered when the current cell changes. It has no additional data. See also [grid#getCurrentCell](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getCurrentCell).

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Examples

Initialize the grid with the `currentCellChange` callback specified:

```
$( ".selector" ).grid({
    currentCellChange: function( event ) {}
});
```

Bind an event listener to the `gridcurrentcellchange` event:

```
$( ".selector" ).on( "gridcurrentcellchange", function( event ) {} );
```

See example for [grid#getCurrentCell](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getCurrentCell).

#### modechange

Triggered when the edit mode changes.

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
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-21">Properties</h6>
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
<th class="name" scope="row"><code>editMode</code></th>
<td class="type">boolean</td>
<td class="description last">The new edit mode.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the grid with the `modeChange` callback specified:

```
$( ".selector" ).grid({
    modeChange: function( event, data ) {}
});
```

Bind an event listener to the `gridmodechange` event:

```
$( ".selector" ).on( "gridmodechange", function( event, data ) {} );
```

#### pagechange

Triggered when there is a pagination event that results in new records being displayed.

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
<td class="type">Object</td>
<td class="description last">Additional data for the event. When there are no records to display <code class="prettyprint">offset</code> and <code class="prettyprint">count</code> are 0.
<h6 id="properties-23">Properties</h6>
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
<th class="name" scope="row"><code>offset</code></th>
<td class="type">number</td>
<td class="description last">the offset of the first record in the page.</td>
</tr>
<tr>
<th class="name" scope="row"><code>count</code></th>
<td class="type">number</td>
<td class="description last">the number of records in the page that were added to the view.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the grid with the `pageChange` callback specified:

```
$( ".selector" ).grid({
    pageChange: function( event, data ) {}
});
```

Bind an event listener to the `gridpagechange` event:

```
$( ".selector" ).on( "gridpagechange", function( event, data ) {} );
```

#### selectionchange

Triggered when the selection state changes. It has no additional data. See also [grid#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRecords).

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Examples

Initialize the grid with the `selectionChange` callback specified:

```
$( ".selector" ).grid({
    selectionChange: function( event ) {}
});
```

Bind an event listener to the `gridselectionchange` event:

```
$( ".selector" ).on( "gridselectionchange", function( event ) {} );
```

#### sortchange

Triggered when the sort direction changes. This does not actually sort the data or ask the model to sort or fetch new data. It is expected that a handler will call [grid#refreshColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#refreshColumns) and then take action that causes the data to be sorted.

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
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-26">Properties</h6>
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
<th class="name" scope="row"><code>header$</code></th>
<td class="type">jQuery</td>
<td class="description last">The column element jQuery object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>column</code></th>
<td class="type">object</td>
<td class="description last">The column definition object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>direction</code></th>
<td class="type">string</td>
<td class="description last">One of "asc" or "desc"</td>
</tr>
<tr>
<th class="name" scope="row"><code>action</code></th>
<td class="type">string</td>
<td class="description last">One of "add", "remove", or "change".</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the grid with the `sortChange` callback specified:

```
$( ".selector" ).grid( {
    sortChange: function( event, data ) {}
} );
```

Bind an event listener to the `gridsortchange` event:

```
$( ".selector" ).on( "gridsortchange", function( event, data ) {} );
```

This examples shows the recommended logic for updating the column properties `sortDirection` and `sortIndex` to handle [grid#columnSortMultiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#columnSortMultiple).

```
$( ".selector" ).on( "gridsortchange", function( event, data ) {
    const columns = grid$.grid("getColumns"),
        originalIndex = data.column.sortIndex;
    let index = 1;

    for ( let i = 0; i < columns.length; i++ ) {
        let column = columns[i];

        if ( column.sortIndex ) {
            if ( data.action === "change" ) {
                if ( column === data.column ) {
                    index = column.sortIndex;
                }
            } else if ( data.action === "add" ) {
                if ( column.sortIndex >= index ) {
                    index = column.sortIndex + 1;
                }
            } else if ( data.action === "remove" ) {
                if ( column === data.column ) {
                    delete column.sortIndex;
                    delete column.sortDirection;
                } else if ( column.sortIndex > originalIndex ) {
                    column.sortIndex -= 1;
                }
            } else if ( data.action === "clear" || data.action === "set" ) {
                delete column.sortIndex;
                delete column.sortDirection;
            }
        }
    }
    if ( data.action !== "clear" && data.action !== "remove" ) {
        data.column.sortIndex = index;
        data.column.sortDirection = data.direction;
    }
    // do something to get new data from the server via the model using the above new sort settings
} );
```

### Methods

#### copyDownSelection(pColumnsopt, pCallbackopt) → {boolean}

Copies cell values from columns in the first selected row to all the other selected rows within the same columns. If `pColumns` is given only cells in the specified columns are copied down. Only cells that can be written will be copied to. If the selection mode is row selection, only visible columns that don't have `noCopy` column property equal true are copied.

##### Parameters:

<table class="params" aria-label="Parameters for copyDownSelection">
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
<th class="name" scope="row"><code>pColumns</code></th>
<td class="type">array</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An optional array of column names to copy down. The columns must be in the selection, visible, and writable.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A no argument function that is called when the copy down operation is complete. The callback is called only if this method returns true.</td>
</tr>
</tbody>
</table>

##### Returns:

Returns true if the copy down operations starts and false otherwise. This can return false if for example the grid does not allow editing or if a copy down, fill, or clipboard paste operation is already in progress.

Type
boolean

#### debugCellEdit(pValue)

This method is for **developer debugging only**. When developing an item plug-in that is to be used in a grid cell it can be difficult to debug CSS styling because as soon as the cell looses focus the item is moved in the DOM to a hidden area. Calling this with a true argument to turn on cell edit debugging leaves the item in the cell after it looses focus so that the DOM and styles can be inspected with browser developer tools. This is not effective for end user use. Because the cell is not fully deactivated it can affect editing in general. Call it again with false to turn off cell edit debugging or refresh the page.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pValue` | boolean | Set to true to debug. Keeps cells from fully deactivating when they loose focus. Set to false when done. |

##### Example

This example shows how to debug a column item plug-in. From the browser JavaScript console:

```
let view$ = ... // this is the grid widget jQuery object.
view$.grid("debugCellEdit", true)
// do your debugging
view$.grid("debugCellEdit", false)
```

#### fetchAllData(pShowProgressopt)

Fetch all report data into the view's model. This is mostly a simple wrapper around the [model#fetchAll](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetchAll) method that doesn't provide access to the callback function and therefore there is no way to be notified when all the data is fetched. This method keeps the selection state up to date.

If you need notification use the model `fetchAll` method.

##### Parameters:

<table class="params" aria-label="Parameters for fetchAllData">
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
<th class="name" scope="row"><code>pShowProgress</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true show progress while fetching the data. The default is true.</td>
</tr>
</tbody>
</table>

Inherited From:
- [tableModelViewBase#fetchAllData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#fetchAllData)

#### fillSelection(pFillValue, pColumnsopt, pCallbackopt) → {boolean}

Fills all cells in the current selection with the value `pFillValue`. If `pColumns` is given only cells in the specified columns are filled. Only cells that can be written will be filled. If the selection mode is row selection, only visible columns that don't have `noCopy` column property equal true are filled.

##### Parameters:

<table class="params" aria-label="Parameters for fillSelection">
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
<th class="name" scope="row"><code>pFillValue</code></th>
<td class="type">string | object</td>
<td class="attributes"></td>
<td class="description last">The value to fill cells with. For columns with distinct value and display value this can be an object with a <code class="prettyprint">v</code> property for the value and a <code class="prettyprint">d</code> property for the display value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pColumns</code></th>
<td class="type">array</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An optional array of column names to fill. The columns must be in the selection, visible, and writable.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A no argument function that is called when the fill operation is complete. The callback is called only if this method returns true.</td>
</tr>
</tbody>
</table>

##### Returns:

Returns true if the fill operations starts and false otherwise. This can return false if for example the grid does not allow editing or if a copy down, fill, or clipboard paste operation is already in progress.

Type
boolean

#### finishEditing() → {Promise}

This method makes sure that the model is up to date with all current edits. While the active row is being edited it may at times be out of sync with the model.

Any code that wants to interact with the model should call this method to make sure the view and model are in sync and then interact with the model when the returned promise is resolved. You must still check for changes in the model. Just because the promise is resolved doesn't mean there were or are any changes.

Note: This does not affect any edit mode.

Inherited From:
- [tableModelViewBase#finishEditing](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#finishEditing)

##### Returns:

A promise that is resolved when the model has been synchronized with the view.

Type
Promise

##### Example

The following function saves the grid view model for the Interactive Grid region given by HTML DOM id `igRegion`. This shows how `finishEditing` is used but it is generally much better to use the built-in Interactive Grid "save" action.

```
function doSave( igRegion ) {
    let p, finished,
        grid = apex.region( igRegion ).call( "getViews" ).grid;

    finished = grid.view$.grid( "finishEditing" );
    finished.done( function() {
        // now the model has all the current changes from the view
        p = apex.model.save( null, null, grid.modelName, true );
        p.done( function( data ) {
            // do something after save completes
        } );
    } );
}
```

#### firstPage() → {boolean}

Display the first page of records. If option `pagination.scroll` is true simply scrolls to the top of the viewport and a new page of records is added if needed. If `pagination.scroll` is false and not already on the first page the view is refreshed and shows the first page.

Inherited From:
- [tableModelViewBase#firstPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#firstPage)

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the first page.

```
$( ".selector" ).grid( "firstPage" );
```

#### focus()

Give focus to the grid. Focus is given to the last element that had focus.

##### Example

This example focuses the grid.

```
$( ".selector" ).grid( "focus" );
```

#### freezeColumn(pColumn)

Freeze the given column. Also calls [grid#refreshColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#refreshColumns) and will render the whole grid. See also [grid#unfreezeColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#unfreezeColumn).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pColumn` | string \| Object | Column name or column definition object of the column to freeze. |

##### Examples

This example freezes column "NAME".

```
$( ".selector" ).grid( "freezeColumn", "NAME" );
```

This example freezes the third column. It passes in a column definition object.

```
let columns = $( ".selector" ).grid( "getColumns" );
$( ".selector" ).grid( "freezeColumn", columns[3] );
```

#### getActiveCellFromColumnItem(pItem) → {jQuery\|null}

Given a column item return the grid cell for that column item in the current active row. If `pItem` is not a column item or if there is no active row return null.

##### Parameters:

| Name    | Type                                    | Description      |
|---------|-----------------------------------------|------------------|
| `pItem` | Element | The column item. |

##### Returns:

Cell corresponding to `pItem` or null if there is no active row cell for `pItem`.

Type
jQuery \| null

#### getActiveRecord() → {[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)}

Returns the active record or null if there is no active record. The active record is the one currently being edited.

Inherited From:
- [tableModelViewBase#getActiveRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#getActiveRecord)

##### Returns:

Active record.

Type
[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)

#### getActiveRecordId() → {string}

Returns the identity of the active record or null if there is no active record. The active record is the one currently being edited.

Inherited From:
- [tableModelViewBase#getActiveRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#getActiveRecordId)

##### Returns:

Active record id.

Type
string

#### getColumnForCell(pCell\$) → (nullable) {object}

Returns the column definition for the given cell. The column definition properties are described in the [grid#columns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#columns) option.

##### Parameters:

| Name     | Type | Description                           |
|----------|------|---------------------------------------|
| `pCell$` |      | The cell to get column definition for |

##### Returns:

The column definition or null if `pCell$` is not a valid cell or not associated with a grid column.

Type
object

##### Example

See example for [grid#getCurrentCell](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getCurrentCell).

#### getColumns() → {Array}

Get the column definitions in order. The column definition properties are described in the [grid#columns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#columns) option.

##### Returns:

Array of column definition objects.

Type
Array

##### Example

See [grid#unfreezeColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#unfreezeColumn) and [grid#refreshColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#refreshColumns) for examples.

#### getCurrentCell() → {jQuery}

Returns the current cell as a jQuery object. The current cell is the one that has or last had focus.

See also [grid#setCurrentCell](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setCurrentCell) and [grid#getColumnForCell](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getColumnForCell).

##### Returns:

The current cell

Type
jQuery

##### Example

This example logs to the console the content and the heading of a cell each time the current cell changes.

```
$( "#gridDomId" ).on( "gridcurrentcellchange", function( event ) {
    let thisGrid$ = $(this),
        cell$ = thisGrid$.grid( "getCurrentCell" ),
        column = thisGrid$.grid( "getColumnForCell", cell$ ),
        heading = column ? column.heading : "none";
    console.log( `Current cell changed: Heading is ${heading}, Content is ${cell$.text()}` );
} );
```

#### getModel() → {[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)}

Return the model currently being used by this view. The model can change over time so the returned model should not be saved and used later. If you need to store a reference to the model use [apex.model.get](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.get) and release it with [apex.model.release](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.release).

Inherited From:
- [tableModelViewBase#getModel](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#getModel)

##### Returns:

The current [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html).

Type
[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

#### getPageInfo() → (nullable) {[tableModelViewBase.pageInfo](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#.pageInfo)}

Return information about the current pagination state of the view. Returns null if there is no data in the report.

Inherited From:
- [tableModelViewBase#getPageInfo](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#getPageInfo)

##### Returns:

Type
[tableModelViewBase.pageInfo](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#.pageInfo)

#### getRecords(pRows) → {Array}

Given an array of jQuery row objects return the underlying data model records. The return value from [grid#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelection) is an appropriate value for `pRows`.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRows` | Array.\<jQuery\> | Array of jQuery objects representing grid rows. |

##### Returns:

An array of records from the model corresponding to the grid rows

Type
Array

#### getSelectedRange() → {Object}

Returns the selected cell range or null if there are no cells selected. For this method to work the option [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) must be true. The object returned has these properties:

##### Properties:

| Name | Type | Description |
|----|----|----|
| `columns` | Array | An array of column names one for each selected column. The column name is null for the row header pseudo column. |
| `recordIds` | Array | An array of record ids one for each selected row. |
| `values` | Array.\<Array\> | An array of rows. Each row is an array of column values. |

Deprecated:
- Use [grid#getSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRanges)

##### Returns:

Information about the range of selected cells or null if no cells selected.

Type
Object

##### Example

This example logs the selected range to the console.

```
var i, j, text,
    range = $( ".selector" ).grid( "getSelectedRange" );
text = "id"
for ( j = 0; j < range.columns.length; j++ ) {
        text += ", " + range.columns[j];
}
console.log( text );
for ( i = 0; i < range.values.length; i++ ) {
    text = range.recordIds[i];
    for ( j = 0; j < range.values[i].length; j++ ) {
        text += ", " + range.values[i][j];
    }
    console.log( text );
}
```

#### getSelectedRanges() → (nullable) {Array.\<[grid.Range](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#.Range)\>}

Returns an array of selected ranges ([grid.Range](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#.Range)) when in range selection mode. If [grid#multipleRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleRanges) is false there will be at most one range. If there are no ranges an empty array is returned. Ranges can overlap. See also [grid#setSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setSelectedRanges).

Since:
- 26.1

##### Returns:

An array of ranges or null if [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is false.

Type
Array.\<[grid.Range](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#.Range)\>

##### Example

The following example shows how to process the selected ranges. It gets the column value from each selected cell. It assumes the model has all data loaded.

```
const grid$ = $( ".selector" ),
    ranges = grid$.grid( "getSelectedRanges" ),
    model = grid$.grid( "getModel" ),
    // the start/endColIndex properties index into the ordered visible columns
    visibleColumns = grid$.grid( "getColumns" ).filter( c => !c.hidden ).map( c => c.property );
for ( const range of ranges ) {
    let endRow = range.endRowIndex,
        endCol = range.endColIndex;

    // process range
    console.log( "Processing range", range );
    // handle unbounded ranges
    if ( endRow === -1 ) {
        endRow = model.getTotalRecords( true ) - 1;
    }
    if ( endCol === -1 ) {
        endCol = visibleColumns.length - 1;
    }
    for ( let i = range.startRowIndex; i <= endRow; i++ ) {
        let record = model.recordAt( i );

        console.log("  process record", model.getRecordId( record ) );
        for ( let j = range.startColIndex; j <= endCol; j++ ) {
            console.log("    process column", visibleColumns[j], model.getValue( record, visibleColumns[j] );
        }
    }
}
```

#### getSelectedRecords() → {Array}

Return the underlying data model records corresponding to the current selection. If option [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is true this returns an empty array.

Note: If option [grid#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#persistSelection) is true then the selected records could span multiple pages and getSelectedRecords returns a different selection from [grid#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelection) which can only return elements from the current page. To get just the records that correspond to `getSelection` when this option is true use:
`$( ".selector" ).grid( "getRecords", $( ".selector" ).grid("getSelection") );`

##### Returns:

Array of records from the model corresponding to the selected grid rows.

Type
Array

##### Example

This example gets the selected records.

```
let records = $( ".selector" ).grid( "getSelectedRecords" );
```

#### getSelection() → {Array}

Return the current selection. The return value depends on the [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) option.

If `selectCells` is true, return the current selected range as an array of rows. Each row is a jQuery object containing the selected column cells. If multiple ranges are selected each row could have a different number of cells in which case using [grid#getSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRanges) may be more appropriate.

If `selectCells` is false, return the currently selected rows as an array of jQuery objects each item in the array is a row.

Because this returns jQuery objects it can only return selected rows (or cells) that are currently in the DOM. When using virtual scroll pagination and [grid#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#persistSelection) is true it is better to use [grid#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRecords) or for cell range selection [grid#getSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRanges).

##### Returns:

Array of jQuery row objects.

Type
Array

##### Examples

The following example processes a row selection (if `selectCells` is false).

```
let rows = $( "#mygrid" ).grid( "getSelection" );
for ( let i = 0; i < rows.length; i++ ) {
    rows[i].addClass("foo"); // this adds a class to the TR element
    rows[i].children().each(function() {
        // do something with each column
    }
}
```

The following example processes a cell range selection (if `selectCells` is true).

```
let rows = $( "#mygrid" ).grid( "getSelection" );
for ( let i = 0; i < rows.length; i++ ) {
    // note rows[i].length is the number of columns in the range selection.
    rows[i].addClass("foo"); // this adds a class to all cells in the selected columns of this row
    rows[i].each(function() {
        // do something with each column cell
    }
}
```

#### gotoCell(pRecordId, pColumnopt)

Put focus in the cell given by `pRecordId` and `pColumn`. This is used to focus rows or cells that have errors. This will scroll or change pages as needed to focus the cell. The record must be in the model. The row containing the cell is selected. If `pColumn` is null then the first column is focused which may be the row selection header.

##### Parameters:

<table class="params" aria-label="Parameters for gotoCell">
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
<th class="name" scope="row"><code>pRecordId</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The record id of the row to go to.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pColumn</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The Column name in the record row to go to.</td>
</tr>
</tbody>
</table>

#### gotoPage(pPageNumber) → {boolean}

Go to the specified page number. This should only be used when `pagination.scroll` is false and the model knows the total number of records.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pPageNumber` | number | zero based page number |

Inherited From:
- [tableModelViewBase#gotoPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#gotoPage)

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

#### hideColumn(pColumn)

Hide the given column. Also calls [grid#refreshColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#refreshColumns) and will render the whole grid. See also [grid#showColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#showColumn).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pColumn` | string \| Object | Column name or column definition object to hide. |

##### Example

This example hides column "NAME".

```
$( ".selector" ).grid( "hideColumn", "NAME" );
```

#### inEditMode() → {boolean}

Determine if grid is in edit mode rather than navigation mode. See also [grid#setEditMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setEditMode).

##### Returns:

true if in edit mode and false otherwise.

Type
boolean

##### Example

This example logs a message if the grid is in edit mode.

```
if ( $( ".selector" ).grid( "inEditMode" ) ) {
    console.log("In edit mode");
}
```

#### lastPage() → {boolean}

Display the last page of records. If `pagination.scroll` is true simply scrolls to the bottom of the viewport and a new page of records is added if needed. If `pagination.scroll` is false and not already on the last page the view is refreshed and shows the last page. This method only works correctly if the model knows the total number of rows.

Inherited From:
- [tableModelViewBase#lastPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#lastPage)

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the last page.

```
$( ".selector" ).grid( "lastPage" );
```

#### loadMore() → {boolean}

Load more records into the view. If option `pagination.scroll` is true this adds a new page of records to the end. If `pagination.scroll` is false this is the same as `nextPage`. This is intended to be used when `pagination.loadMore` is true.

Inherited From:
- [tableModelViewBase#loadMore](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#loadMore)

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

#### lockActive()

Call to lock the active row while async processing is in progress.

The view edits one row/record at a time. This is known as the active row. In edit mode as the user changes the focused cell with the mouse, tab or enter keys if the new cell is on a different row the previous row is deactivated and the new row is activated. Any dynamic actions or other code that manipulates Column items are acting on the active row. If any actions are asynchronous such as using Ajax to set a column item value then the row must not be deactivated while the async action is in progress otherwise the result would be applied to the wrong row!

So this method must be called before starting an async operation. It can be called multiple times if there are multiple async operations. For each call to `lockActive` there must be exactly one call to `unlockActive`. See also See [tableModelViewBase#unlockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#unlockActive)

If the view is part of an APEX region plugin, that region should implement the `beforeAsync` and `afterAsync` functions on the object returned from region#getSessionState by calling `lockActive` and `unlockActive` respectively. Then if an appropriate target option is passed to [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) then the locking will be done automatically. Dynamic Actions that act on column items pass the correct target option. The bottom line is that for Dynamic Actions on columns of an Interactive Grid these lock/unlock methods are called automatically.

Inherited From:
- [tableModelViewBase#lockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#lockActive)

##### Example

See [grid#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setActiveRecordValue) for an example.

#### moveColumn(pColumn, pNewPosition)

Move the given column to the new position. Column positions are zero based. Also calls [grid#refreshColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#refreshColumns) and will render the whole grid. Triggers [grid#event:columnreorder](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:columnreorder) event.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pColumn` | string \| Object | The column name or column definition object to move. |
| `pNewPosition` | number | index into the array returned by [grid#getColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getColumns) where the column will be moved to. |

##### Example

This example moves the "NAME" column to be the third column.

```
$( ".selector" ).grid( "moveColumn", "NAME", 2 );
```

#### moveColumnGroup(pLevel, pOriginalPosition, pNewPosition)

Move a column group from one position to another. This moves all the columns associated with the group to the new position. Triggers [grid#event:columnreorder](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:columnreorder) event for each column moved.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pLevel` | number | The level (starting with zero as the top most level) of the group. |
| `pOriginalPosition` | number | Original position of the column group |
| `pNewPosition` | number | New position of the column group |

#### nextPage() → {boolean}

Display the next page of records. If `pagination.scroll` is true the viewport scrolls down one page and records are added if needed. If `pagination.scroll` is false and not on the last page refresh the view to show the next page.

Inherited From:
- [tableModelViewBase#nextPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#nextPage)

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the next page.

```
$( ".selector" ).grid( "nextPage" );
```

#### previousPage() → {boolean}

Display the previous page of records. If `pagination.scroll` is true the viewport scrolls up one page and records are added if needed. If `pagination.scroll` is false and not on the first page refresh the view to show the previous page.

Inherited From:
- [tableModelViewBase#previousPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#previousPage)

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the previous page.

```
$( ".selector" ).grid( "previousPage" );
```

#### refresh(pFocusopt)

Refreshes the grid with data from the model. This method is rarely needed because it is called automatically when the model changes, widget options change, or when pagination or column related methods are called.

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
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">if true put focus in the grid, if false don't. If undefined/omitted maintain focus if the grid already has focus.</td>
</tr>
</tbody>
</table>

#### refreshColumns()

Let the grid know that column metadata has changed so that the next time it is refreshed columns will be rendered. Call this method after any column metadata has changed external to this widget. Refresh must be called after this but typically this happens due to the model refresh notification.

##### Example

This example sets the minimum width of all columns to 100 and then refreshes the columns and refresh the grid.

```
$( ".selector" ).grid( "getColumns" ).forEach( function( c ) { c.width = 100; } );
$( ".selector" ).grid( "refreshColumns" )
    .grid( "refresh" );
```

#### resize()

Call this method anytime the container that the grid is in changes its size. For better performance it is best to call this after the size has changed not continuously while it is changing.

#### selectAll(pFocusopt, nullable, pNoNotifyopt)

Select all rows. This has no effect if the [grid#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectAll1) and [grid#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multiple) or [grid#multipleCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleCells) options are not true depending on setting of [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells).

This only applies to the current page or what has been rendered so far unless the selection state is persisted in the model. See [grid#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectAll1) for details about how pagination settings and [grid#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#persistSelection) and [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) affect the meaning of "all rows".

##### Parameters:

<table class="params" aria-label="Parameters for selectAll">
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
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
&lt;nullable&gt;<br />
</td>
<td class="description last">If true the first cell of the selection is given focus and becomes the current cell. If false the first cell of the selection becomes the current cell. If null or not given the current cell is not changed.</td>
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

#### setActiveRecordValue(pColumn)

Use after a column item value is set without triggering a change event to update the model and grid view. Has no effect if there is no active record.

When a dynamic action or other event handler on a change event updates the value of the same item that triggered the change event, the change event from setting the value should be suppressed to avoid an infinite loop. However, the model is only updated from a change event. This method offers a solution to the model not being updated if the value is set asynchronously. Call this method anytime a column item is updated and the change event is suppressed.

##### Parameters:

| Name      | Type                                   | Description             |
|-----------|----------------------------------------|-------------------------|
| `pColumn` | string | The name of the column. |

Inherited From:
- [tableModelViewBase#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#setActiveRecordValue)

##### Example

This example updates the "SALARY" column, which has HTML DOM id "C_SALARY", in interactive grid with HTML DOM id "MyGrid", to add 10 to whatever the user enters. `setTimeout` is used to simulate an async value update. The active row must be locked around the async update.

```
let salary = apex.item( "C_SALARY" );
$( salary.node ).on( "change", function( event ) {
    // assume the current view is grid and not single row view.
    const grid$ = apex.region( "MyGrid" ).call( "getCurrentView" ).view$;
    grid$.grid("lockActive");
    setTimeout( function() {
        // suppress this change otherwise this handler will be triggered again
        salary.setValue( parseFloat( salary.getValue() ) + 10, null, true );
        // suppressing the value means the grid model is not updated so call setActiveRecordValue
        grid$.grid( "setActiveRecordValue", "SALARY" )
            .grid( "unlockActive" );
    }, 10 ):
} );
```

#### setColumnWidth(pColumn, pWidth)

Sets the width of the given column. Triggers [grid#event:columnresize](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:columnresize) event.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pColumn` | string \| Object | The column name or column definition object to set the width on. |
| `pWidth` | number | The width in pixels to set the column too. |

#### setCurrentCell(pCell\$, pFocusopt)

Sets the last focused cell to the given cell. If `pCell$` is not a cell or not in the grid container the current cell is not changed.

See also [grid#getCurrentCell](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getCurrentCell).

##### Parameters:

<table class="params" aria-label="Parameters for setCurrentCell">
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
<th class="name" scope="row"><code>pCell$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">The cell to make current.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true also focus the cell.</td>
</tr>
</tbody>
</table>

##### Example

The following example sets the current cell to be the first one containing an element with class "my-special-cell". In this case the column uses the column `cellTemplate` property or declarative attribute HTML Expression to conditionally add a span with the "my-special-cell" class.

```
$( "#gridDomId" ).grid( "setCurrentCell",
    $( "#gridDomId" ).find( ".my-special-cell" ).first().closest( ".a-GV-cell" ) );
```

#### setEditMode(pEditMode, pSelectopt)

Set the current edit mode. Should only be used if the grid is editable. Triggers [grid#event:modechange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:modechange) event.

##### Parameters:

<table class="params" aria-label="Parameters for setEditMode">
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
<th class="name" scope="row"><code>pEditMode</code></th>
<td class="type">boolean</td>
<td class="attributes"></td>
<td class="description last">If true enter edit mode. If false enter navigation mode.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pSelect</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true and pEditMode is true the current cells value is initially selected. The default is false.</td>
</tr>
</tbody>
</table>

##### Example

This example enters edit mode.

```
$( ".selector" ).grid( "setEditMode", true );
```

#### setSelectedRanges(pRanges, pFocusopt, nullable, pNoNotifyopt)

Selects one or more ranges of cells. If [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) is false then nothing happens. If [grid#multipleRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#multipleRanges) is false at most one range can be selected and any additional ranges in `pRanges` are ignored. Triggers the [grid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:selectionchange) event if the selection changes unless `pNoNotify` is true. See also [grid#getSelectedRanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#getSelectedRanges).

##### Parameters:

<table class="params" aria-label="Parameters for setSelectedRanges">
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
<th class="name" scope="row"><code>pRanges</code></th>
<td class="type">Array.&lt;<a href="grid.html#.Range">grid.Range</a>&gt;</td>
<td class="attributes"></td>
<td class="description last">An array of <a href="grid.html#.Range">grid.Range</a> objects identifying a range of cells to select. If either the *key or *index properties are missing they are filled in based on the opposite property. Invalid ranges are skipped. However, the ranges are not fully validated so ensure that the *key properties correspond with the associated *index properties. The <code class="prettyprint">incomplete</code> property is ignored. An empty array will clear the range selection.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
&lt;nullable&gt;<br />
</td>
<td class="description last">If true the first cell of the first range is given focus. If false the first cell of the first range is made the current cell. If null the current cell is not changed and focus is not set. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the selection change event will be suppressed. The default is false.</td>
</tr>
</tbody>
</table>

Since:
- 26.1

##### Examples

The following example creates a 3x3 range starting in the first row and column and focuses the first cell.

```
let range = {
        startRowIndex: 0,
        startColIndex: 0,
        endRowIndex: 2,
        endColIndex: 2
    };
( ".selector" ).grid( "setSelectedRanges", [range], true );
```

The following example selects 2 ranges the first one is all the cells in column "NAME" and the second one is all the cells in column "PHONE".

```
let range1 = {
        startRowIndex: 0,
        startColKey: "NAME",
        endRowIndex: -1,
        endColKey: "NAME"
    },
    range2 = {
        startRowIndex: 0,
        startColKey: "PHONE",
        endRowIndex: -1,
        endColKey: "PHONE"
    };
( ".selector" ).grid( "setSelectedRanges", [range1, range2] );
```

#### setSelectedRecords(pRecords, pFocusopt, pNoNotifyopt) → {number}

Select the grid rows that correspond to the given data model records. Depending on pagination the records may not actually be in view or rendered at this time even if they exist in the underlying data model or on the server. Triggers the [grid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:selectionchange) event if the selection changes unless `pNoNotify` is true.

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
<td class="type">Array.&lt;<a href="model.html#.Record">model.Record</a>&gt;</td>
<td class="attributes"></td>
<td class="description last">An array of data model records to select.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first cell of the selection is given focus.</td>
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

##### Returns:

Count of the rows actually selected or -1 if called before the grid data is initialized or if [grid#selectCells](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#selectCells) option is true.

Type
number

#### setSelection(pRows, pFocusopt, pNoNotifyopt)

Set the selected rows of the grid. Triggers the [grid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:selectionchange) event if the selection changes unless `pNoNotify` is true.

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
<th class="name" scope="row"><code>pRows</code></th>
<td class="type">Array</td>
<td class="attributes"></td>
<td class="description last">An array of jQuery row objects such as the return value of <a href="grid.html#getSelection">grid#getSelection</a> or a jQuery object containing one or more rows (<code class="prettyprint">.a-GV-row</code> elements) or cells (<code class="prettyprint">.a-GV-cell</code> elements) from this grid. If <a href="grid.html#selectCells">grid#selectCells</a> is true then pRows should contain two grid cells that establish the opposite corners of a range. It is better to use the <a href="grid.html#setSelectedRanges">grid#setSelectedRanges</a> method for range selection.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first cell (in pRows) of the selection is given focus.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">if true the selection change event will be suppressed.</td>
</tr>
</tbody>
</table>

##### Example

This example selects the third row of the first grid widget on the page.

```
$( ".a-GV" ).first()
    .grid( "setSelection", [$( ".a-GV" ).first().find( ".a-GV-w-scroll .a-GV-row" ).eq( 3 )] );
```

#### showColumn(pColumn)

Show the given column. Also calls [grid#refreshColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#refreshColumns) and will render the whole grid. See also [grid#hideColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#hideColumn).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pColumn` | string \| Object | Column name or column definition object to show. |

##### Example

This example shows column "NAME".

```
$( ".selector" ).grid( "showColumn", "NAME" );
```

#### unfreezeColumn(pColumn)

Unfreeze the given column. Also calls [grid#refreshColumns](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#refreshColumns) and will render the whole grid. See also [grid#freezeColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#freezeColumn).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pColumn` | string \| Object | column name or column definition object of the column to unfreeze. |

##### Example

This example unfreezes column "NAME".

```
$( ".selector" ).grid( "unfreezeColumn", "NAME" );
```

#### unlockActive()

Call to unlock the active row after async processing is complete.

Call after the async operation completes. See [tableModelViewBase#lockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#lockActive) for more information.

Inherited From:
- [tableModelViewBase#unlockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#unlockActive)

##### Example

See [grid#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setActiveRecordValue) for an example.

### Type Definitions

#### Range

An object that defines a range of grid cells. The range is defined by the start corner and end corner coordinates. The start corner is the one closest to the grid origin, meaning the upper start (left for ltr direction and right for rtl direction) cell. The end corner is the one furthest from the origin, meaning the lower end (right for ltr direction and left for rtl direction) cell. The row and column coordinates are given by both a zero based index among all the rows or columns and by a key. For columns the key is the column name. For rows the key is the model record identity. If the model does not have an identity field the key is a string representation of the index.

A range that contains a single cell has the same start and end coordinates. A range never includes row or column headers or control break rows. When a range is unbounded or the end is unknown the end index will be -1 and the key will be null.

##### Type:

- object

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
<th class="name" scope="row"><code>startRowIndex</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">zero based index of the start or upper data row</td>
</tr>
<tr>
<th class="name" scope="row"><code>startColIndex</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">zero based index of the start or first data column</td>
</tr>
<tr>
<th class="name" scope="row"><code>startRowKey</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">model identity for the start or upper data row</td>
</tr>
<tr>
<th class="name" scope="row"><code>startColKey</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">column name of the start or first data column</td>
</tr>
<tr>
<th class="name" scope="row"><code>endRowIndex</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">zero based index of the end or lower data row</td>
</tr>
<tr>
<th class="name" scope="row"><code>endColIndex</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">zero based index of the end or last data column</td>
</tr>
<tr>
<th class="name" scope="row"><code>endRowKey</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">model identity for the end or lower data row</td>
</tr>
<tr>
<th class="name" scope="row"><code>endColKey</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">column name of the end or last data column</td>
</tr>
<tr>
<th class="name" scope="row"><code>incomplete</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">true if the model does not contain all data specified by this range</td>
</tr>
</tbody>
</table>
