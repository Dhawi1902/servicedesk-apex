<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/templateReportRegion.html -->
<!-- Interfaces: templateReportRegion -->

# Interface: templateReportRegion

## QuickNav

### [Properties](#members-section)

- [element](#element)
- [filterRegionId](#filterRegionId)
- [type](#type)

### [Methods](#methods-section)

- [firstPage](#firstPage)
- [focus](#focus)
- [getCurrentRow](#getCurrentRow)
- [getCurrentRowValue](#getCurrentRowValue)
- [getSelectedValues](#getSelectedValues)
- [getSelection](#getSelection)
- [lastPage](#lastPage)
- [nextPage](#nextPage)
- [previousPage](#previousPage)
- [refresh](#refresh)
- [selectAll](#selectAll)
- [setCurrentRow](#setCurrentRow)
- [setCurrentRowValue](#setCurrentRowValue)
- [setSelectedValues](#setSelectedValues)
- [setSelection](#setSelection)

## templateReportRegion

The templateReportRegion interface is used to access the properties and methods of any Template Component Report region. You get access to the templateReportRegion interface with the [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html) function when passed the regionId (HTML DOM id) of a Template Component Report region.

Template Component Reports are server rendered regions and have only a few client side API methods. The contents of the report are called rows even if the template component UI may look different such as with cards where multiple cards/rows are on the same visual row.

Since:
- 24.1

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

#### filterRegionId :string

For region plug-ins which support Faceted Search / Smart Filters it is possible to pass in the DOM ID of the [facetsRegion](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html) region in order for APEX to bind the two together. If provided, the region will be automatically refreshed as the filters change. Further, if the region's refresh callback returns a Promise, APEX will also automatically perform the appropriate locking and unlocking of the [facetsRegion](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html) region during refresh.

##### Type:

- string

Inherited From:
- [region#filterRegionId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#filterRegionId)

#### type :string

The templateReportRegion type is "TemplateComponent".

##### Type:

- string

Overrides:
- [region#type](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#type)

### Methods

#### firstPage() → {boolean}

Display the first page of rows. If pagination type is scroll then this simply scrolls to the top of the viewport and a new page of rows is added if needed. If pagination type is not scroll and not already on the first page the view is refreshed and shows the first page.

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the first page.

```
apex.region( "regionDomId" ).firstPage();
```

#### focus()

Set focus to the templateReport if possible. If the view supports selection or focus then the last focused (current) row will be focused. Otherwise, the first focusable element within the report, if any, will be focused.

Overrides:
- [region#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#focus)

##### Example

This example puts focus in the report.

```
apex.region( "regionDomId" ).focus();
```

#### getCurrentRow() → {jQuery}

Returns the current row as a jQuery object. The current row is the row that has or last had focus.

This is only applicable if the report supports selection or focus navigation.

##### Returns:

The current row or null if not supported.

Type
jQuery

##### Example

This example get the current row in the report.

```
var current$ = apex.region( "regionDomId" ).getCurrentRow();
console.log( "make use of current row", current$ );
```

#### getCurrentRowValue() → {string}

Returns the value of the current row. The current row is the row that has or last had focus. The value of a row is its primary key in the `data-id` attribute.

This is only applicable if the report supports selection or focus navigation.

##### Returns:

The current row value or null if not supported.

Type
string

#### getSelectedValues() → (nullable) {Array.\<string\>}

Returns the value for each selected row. The value of a row is its primary key in the `data-id` attribute. This attribute is typically added with the \#APEX\$ROW_IDENTIFICATION# placeholder.

This is only applicable if the report supports selection.

##### Returns:

Array of selected record values. Returns null if selection is not supported.

Type
Array.\<string\>

#### getSelection() → (nullable) {jQuery}

Return the currently selected rows as a jQuery collection.

This is only applicable if the report supports selection.

Because this returns a jQuery collection it can only return selected rows that are currently in the DOM. When using virtual scroll pagination with show total count on, it is better to use [templateReportRegion#getSelectedValues](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/templateReportRegion.html#getSelectedValues)

See also [templateReportRegion#setSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/templateReportRegion.html#setSelection).

##### Returns:

The selected row elements as a jQuery collection. Returns null if selection isn't supported or the report is not initialized.

Type
jQuery

##### Example

This example get the current selection.

```
var selection$ = apex.region( "regionDomId" ).getSelection();
console.log( "make use of selected rows", selection$ );
```

#### lastPage() → {boolean}

Display the last page of rows. If pagination type is scroll this simply scrolls to the bottom of the viewport and a new page of rows is added if needed. pagination type is not scroll and not already on the last page the view is refreshed and shows the last page. This method only works correctly if the report knows the total number of rows.

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the last page.

```
apex.region( "regionDomId" ).lastPage();
```

#### nextPage() → {boolean}

Display the next page of rows. If pagination type is scroll the viewport scrolls down one page and rows are added if needed. If pagination type is not scroll and not on the last page refresh the view to show the next page.

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the next page.

```
apex.region( "regionDomId" ).nextPage();
```

#### previousPage() → {boolean}

Display the previous page of rows. If pagination type is scroll the viewport scrolls up one page and rows are added if needed. If pagination type is not scroll and not on the first page refresh the view to show the previous page.

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the previous page.

```
apex.region( "regionDomId" ).previousPage();
```

#### refresh() → {Promise}

Refreshes the report with new data from the server.

Overrides:
- [region#refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#refresh)

##### Returns:

A promise that is resolved with no arguments when the refresh is complete.

Type
Promise

#### selectAll(pFocusopt, nullable, pNoNotifyopt)

Select all the rows in the report that can be selected. Triggers the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the report supports multiple selection and if the report has a select all control.

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
<td class="description last">If true the first selected row is given focus. If false the first selected row is made focusable. If null or not given the current row and focus is not changed.</td>
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

This is only applicable if the report supports selection or focus navigation.

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

This example finds a particular row using jQuery and then makes it the current row and sets focus to it. In this example report rows have class "my-item".

```
var current$ = $( "#regionDomId .my-item" ).first();
apex.region( "regionDomId" ).setCurrentRow( current$, true );
```

#### setCurrentRowValue(pRowValue, pFocusopt)

Sets the last focused row to the one with the given pRowValue. If no row has the given value the current row is not changed. The row must be rendered in order to be made the current row. The value of a row is its primary key in the `data-id` attribute. This attribute is typically added with the \#APEX\$ROW_IDENTIFICATION# placeholder.

This is only applicable if the report supports selection or focus navigation.

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

Selects the report rows that correspond to the given values. The value of a row is the primary key in the `data-id` attribute. This attribute is typically added with the \#APEX\$ROW_IDENTIFICATION# placeholder. Triggers the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

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

Count of the rows actually selected or -1 if called before the report is initialized or selection is not supported.

Type
number

#### setSelection(pElements\$, pFocusopt, pNoNotifyopt)

Set the selected rows. Triggers the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the report supports selection.

See also [templateReportRegion#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/templateReportRegion.html#getSelection).

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

This example finds a particular row using jQuery and then selects it and sets focus to it. In this example report rows have class "my-item".

```
var toSelect$ = $( "#regionDomId .my-item" ).first();
apex.region( "regionDomId" ).setSelection( toSelect$, true );
```
