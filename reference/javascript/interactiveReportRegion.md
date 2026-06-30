<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveReportRegion.html -->
<!-- Interfaces: interactiveReportRegion -->

# Interface: interactiveReportRegion

## QuickNav

### [Properties](#members-section)

- [element](#element)
- [type](#type)

### [Methods](#methods-section)

- [focus](#focus)
- [getCurrentRow](#getCurrentRow)
- [getCurrentRowValue](#getCurrentRowValue)
- [getSelectedValues](#getSelectedValues)
- [getSelection](#getSelection)
- [getViewName](#getViewName)
- [refresh](#refresh)
- [selectAll](#selectAll)
- [setCurrentRow](#setCurrentRow)
- [setCurrentRowValue](#setCurrentRowValue)
- [setSelectedValues](#setSelectedValues)
- [setSelection](#setSelection)

## interactiveReportRegion

The interactiveReportRegion interface is used to access the properties and methods of any Interactive Report region. You get access to the interactiveReportRegion interface with the [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html) function when passed the regionId (HTML DOM ID) of a Interactive Report region.

Since:
- 26.1

### Extends

- [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html)

### Properties

#### element :jQuery

The jQuery object for the region element.

##### Type:

- jQuery

Inherited From:
- [region#element](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#element)

##### Example

Get option element after initialization.

```
var value = apex.region( "myRegionId" ).element;
```

#### type :string

The Interactive Report region type is "InteractiveReport".

##### Type:

- string

Overrides:
- [region#type](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#type)

### Methods

#### focus()

Set focus to the Interactive Report if possible. If the report supports selection then the last focused (current) row will be focused. Otherwise, the first focusable element within the region, if any, will be focused.

Overrides:
- [region#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#focus)

##### Example

This example puts focus in the report.

```
apex.region( "regionDomId" ).focus();
```

#### getCurrentRow() → {jQuery}

Returns the current row as a jQuery object. The current row is the row that has or last had focus.

This is only applicable if the report supports selection.

##### Returns:

The current row or null if not supported.

Type
jQuery

##### Example

This example gets the current row in the report.

```
var current$ = apex.region( "regionDomId" ).getCurrentRow();
console.log( "make use of current row", current$ );
```

#### getCurrentRowValue() → {string}

Returns the value of the current row. The current row is the row that has or last had focus. The value of a row is its primary key in the `data-id` attribute.

This is only applicable if the report supports selection.

##### Returns:

The current row value or null if not supported.

Type
string

#### getSelectedValues() → (nullable) {Array.\<string\>}

Returns the value for each selected row. The value of a row is its primary key in the `data-id` attribute

This is only applicable if the report supports selection.

##### Returns:

Array of selected record values. Returns null if selection is not supported.

Type
Array.\<string\>

#### getSelection() → (nullable) {jQuery}

Return the currently selected rows as a jQuery collection.

This is only applicable if the report supports selection.

Because this returns a jQuery collection it can only return selected rows that are currently in the DOM. To get a more complete selection result, not just the ones in the DOM, it is better to use [interactiveReportRegion#getSelectedValues](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveReportRegion.html#getSelectedValues)

See also [interactiveReportRegion#setSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveReportRegion.html#setSelection).

##### Returns:

The selected row elements as a jQuery collection. Returns null if selection isn't supported.

Type
jQuery

##### Example

This example get the current selection.

```
var selection$ = apex.region( "regionDomId" ).getSelection();
console.log( "make use of selected rows", selection$ );
```

#### getViewName() → {string}

Get the name of the current view. Interactive Report supports multiple views, such as:

- REPORT (Standard Report View)
- CHART (Chart View)
- DETAIL (Detail View)
- GROUP_BY (Group By View)
- ICON (Icon View)
- PIVOT (Pivot View)

##### Returns:

The current view mode.

Type
string

##### Example

The following example gets the current view name.

```
var view = apex.region( "regionDomId" ).getViewName();
```

#### refresh(pKeepPaginationopt)

Refreshes the report with new data from the server.

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
<th class="name" scope="row"><code>pKeepPagination</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Controls the pagination and scroll behavior after refresh.</td>
</tr>
</tbody>
</table>

Overrides:
- [region#refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#refresh)

##### Example

The following example will refresh an Interactive Report region while maintaining the same page.

```
apex.region( "regionDomId" ).refresh( true );
```

#### selectAll(pFocusopt, nullable, pNoNotifyopt)

Select all the rows in the report that can be selected. Typically this applies to all currently visible rows. Triggers the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the report supports multiple selection.

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
<td class="description last">If true the first selected row is given focus. If false the first selected row is made focusable. If null or not given the current item and focus is not changed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the selection change notification will be suppressed.</td>
</tr>
</tbody>
</table>

##### Example

This example selects all the rows in the report.

```
apex.region( "regionDomId" ).selectAll();
```

#### setCurrentRow(pRow\$, pFocusopt)

Sets the last focused row to the given pRow\$. If pRow\$ is not a row or not in the report container the current row is not changed.

This is only applicable if the report supports selection.

The [apex.event:apexcurrentrowchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexcurrentrowchange) event is triggered any time the current row changes.

##### Parameters:

<table class="params" aria-label="Parameters for setCurrentRow">
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
<th class="name" scope="row"><code>pRow$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">The row to make current.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true also focus the row.</td>
</tr>
</tbody>
</table>

##### Example

This example finds a particular row using jQuery and then makes it the current row and sets focus to it. In this example report rows have class "my-row".

```
var current$ = $( "#regionDomId .my-row" ).first().closest( "tr" );
apex.region( "regionDomId" ).setCurrentRow( current$, true );
```

#### setCurrentRowValue(pRowValue, pFocusopt)

Sets the last focused row to the one with the given pRowValue. If no row has the given value the current row is not changed. The row must be rendered in order to be made the current row. The value of a row is its primary key in the `data-id` attribute.

This is only applicable if the report supports selection.

The [apex.event:apexcurrentrowchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexcurrentrowchange) event is triggered any time the current row changes.

##### Parameters:

<table class="params" aria-label="Parameters for setCurrentRowValue">
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
<th class="name" scope="row"><code>pRowValue</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The value of a row.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true also focus the row.</td>
</tr>
</tbody>
</table>

#### setSelectedValues(pValues, pFocusopt, pNoNotifyopt) → {number}

Selects the report rows that correspond to the given values. The value of a row is the primary key in the `data-id` attribute. The row must be rendered in order to be made a selectable row. Triggers the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the report supports selection.

##### Parameters:

<table class="params" aria-label="Parameters for setSelectedValues">
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
<th class="name" scope="row"><code>pValues</code></th>
<td class="type">Array.&lt;string&gt;</td>
<td class="attributes"></td>
<td class="description last">Array of row values to select.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first row of the selection is given focus.</td>
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

Count of the rows actually selected or -1 if selection is not supported.

Type
number

#### setSelection(pElements\$, pFocusopt, pNoNotifyopt)

Set the selected rows. Triggers the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the report supports selection.

See also [interactiveReportRegion#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveReportRegion.html#getSelection).

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
<th class="name" scope="row"><code>pElements$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">A jQuery object with row elements such as the return value of getSelection.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first row element of the selection is given focus.</td>
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

This example finds a particular row using jQuery and then selects it and sets focus to it. In this example report rows have class "my-row".

```
var toSelect$ = $( "#regionDomId .my-row" ).first().closest( "tr" );
apex.region( "regionDomId" ).setSelection( toSelect$, true );
```
