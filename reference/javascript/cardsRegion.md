<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html -->
<!-- Interfaces: cardsRegion -->

# Interface: cardsRegion

## QuickNav

### [Properties](#members-section)

- [element](#element)
- [filterRegionId](#filterRegionId)
- [type](#type)
- [widgetName](#widgetName)

### [Methods](#methods-section)

- [call](#call)
- [firstPage](#firstPage)
- [focus](#focus)
- [getCurrentItem](#getCurrentItem)
- [getCurrentItemValue](#getCurrentItemValue)
- [getModel](#getModel)
- [getPageInfo](#getPageInfo)
- [getRecords](#getRecords)
- [getSelectedRecords](#getSelectedRecords)
- [getSelectedValues](#getSelectedValues)
- [getSelection](#getSelection)
- [gotoPage](#gotoPage)
- [lastPage](#lastPage)
- [loadMore](#loadMore)
- [nextPage](#nextPage)
- [off](#off)
- [on](#on)
- [previousPage](#previousPage)
- [refresh](#refresh)
- [refreshView](#refreshView)
- [selectAll](#selectAll)
- [setCurrentItem](#setCurrentItem)
- [setCurrentItemValue](#setCurrentItemValue)
- [setSelectedRecords](#setSelectedRecords)
- [setSelectedValues](#setSelectedValues)
- [setSelection](#setSelection)
- [widget](#widget)

## cardsRegion

The cardsRegion interface is used to access the properties and methods of Cards regions. You get access to the cardsRegion interface with the [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html) function when passed the regionId (HTML DOM id) of a Cards region.

Cards is a client rendered region using [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) for the data layer and [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) widget for the view layer. This interface is a convenient wrapper for most of the methods of [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html). The cards in the report are called items (not to be confused with APEX Page Items or Column Items). See [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) for information about report markup requirements.

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

The cardsRegion type is "Cards".

##### Type:

- string

Overrides:
- [region#type](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#type)

#### widgetName :string

For regions that are implemented with a jQuery UI style widget, this is the name of the widget. For other widget implementations it is null. It is used internally by the [region#call](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#call), [region#on](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#on) and [region#off](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#off) methods.

##### Type:

- string

Inherited From:
- [region#widgetName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widgetName)

##### Example

Get option widgetName after initialization.

```
var value = apex.region( "myRegionId" ).widgetName;
```

### Methods

#### call(pMethod, …args) → {\*}

Calls a method on the widget associated with the region. This method only applies to regions that are implemented with a jQuery UI style widget.

##### Parameters:

<table class="params" aria-label="Parameters for call">
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
<th class="name" scope="row"><code>pMethod</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The string name of the widget method.</td>
</tr>
<tr>
<th class="name" scope="row"><code>args</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Any number of arguments to be passed to the widget method.</td>
</tr>
</tbody>
</table>

Inherited From:
- [region#call](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#call)

##### Returns:

The return value depends on the method called.

Type
\*

##### Example

The call method is a shorthand for calling methods on a widget. The following example shows an Interactive Grid region with HTML DOM id `emp` and two equivalent ways of invoking the `getSelectedRecords` method.

```
var records1 = apex.region( "emp" ).call( "getSelectedRecords" );
// same result as above but this is more verbose
var records2 = apex.region( "emp" ).widget().interactiveGrid( "getSelectedRecords" );
```

#### firstPage() → {boolean}

Display the first page of items. If option `pagination.scroll` is true simply scrolls to the top of the viewport and a new page of items is added if needed. If `pagination.scroll` is false and not already on the first page the view is refreshed and shows the first page.

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

Set focus to the cards region if possible. If the view supports selection or focus then the last focused (current) item will be focused. Otherwise, the first focusable element within the report, if any, will be focused.

Overrides:
- [region#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#focus)

##### Example

This example puts focus in the report.

```
apex.region( "regionDomId" ).focus();
```

#### getCurrentItem() → {jQuery}

Returns the current item as a jQuery object. The current item is the item that has or last had focus.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or "focus". See also [cardsRegion#setCurrentItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#setCurrentItem).

##### Returns:

The current item or null if not supported.

Type
jQuery

##### Example

This example get the current item in the report.

```
var currentItem$ = apex.region( "regionDomId" ).getCurrentItem();
console.log( "make use of current item", currentItem$ );
```

#### getCurrentItemValue() → {string}

Returns the value of the current item. The current item is the item that has or last had focus. The value of an item is its unique identifier as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId).

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "focus" or "select". See also [cardsRegion#setCurrentItemValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#setCurrentItemValue).

##### Returns:

The current item value or null if not supported.

Type
string

#### getModel() → {[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)}

Return the model currently being used by this view. The model can change over time so the returned model should not be saved and used later. If you need to store a reference to the model use [apex.model.get](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.get) and release it with [apex.model.release](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.release).

##### Returns:

The current [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html).

Type
[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

#### getPageInfo() → (nullable) {[tableModelViewBase.pageInfo](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#.pageInfo)}

Return information about the current pagination state of the view. Returns null if there is no data in the report.

##### Returns:

Type
[tableModelViewBase.pageInfo](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#.pageInfo)

##### Example

This example logs to the console the current page and total number of pages The Cards region pagination type must be Page and Show Total Count must be on.

```
var info = apex.region( "regionDomId" ).getPageInfo();
console.log("current and total pages", info.currentPage, info.totalPages );
```

#### getRecords(pElements\$) → {Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>}

Given a jQuery object with one or more item elements return the corresponding model records. For this to work the elements must have a `data-id` attribute with the value of the record id.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pElements$` | jQuery | A jQuery object of item elements such as returned by [cardsRegion#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#getSelection). |

##### Returns:

Array of records from the model corresponding to the item elements.

Type
Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>

#### getSelectedRecords() → (nullable) {Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>}

Return the underlying data model records corresponding to the current selection.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select".

When using virtual scroll pagination and [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) is true it is possible for the user to select a range of records or all records when the model does not yet contain all the selected records. In this case the selection is incomplete and only the records currently in the model will be returned. See option [tableModelView#loadIncompleteSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#loadIncompleteSelection) for how an incomplete selection is handled.

See also [cardsRegion#setSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#setSelectedRecords).

##### Returns:

Array of records from the model corresponding to the selected items. Returns null if selection is not supported.

Type
Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>

#### getSelectedValues() → (nullable) {Array.\<string\>}

Returns the value for each record returned by [cardsRegion#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#getSelectedRecords). The value of a record is its unique identifier as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId).

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select".

##### Returns:

Array of selected record values. Returns null if selection is not supported.

Type
Array.\<string\>

#### getSelection() → (nullable) {jQuery}

Return the currently selected items as a jQuery collection.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select".

Because this returns a jQuery collection it can only return selected items that are currently in the DOM. When using virtual scroll pagination and [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) is true it is better to use [cardsRegion#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#getSelectedRecords)

See also [cardsRegion#setSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#setSelection).

##### Returns:

The selected item elements as a jQuery collection. Returns null if selection isn't supported or the report is not initialized.

Type
jQuery

#### gotoPage(pPageNumber) → {boolean}

Go to the specified page number. This should only be used when `pagination.scroll` is false and the model knows the total number of records.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pPageNumber` | number | zero based page number |

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to 4th page. Note that the page numbers are zero based. If there are not that many pages then nothing happens.

```
apex.region( "regionDomId" ).gotoPage( 3 );
```

#### lastPage() → {boolean}

Display the last page of items. If `pagination.scroll` is true simply scrolls to the bottom of the viewport and a new page of items is added if needed. If `pagination.scroll` is false and not already on the last page the view is refreshed and shows the last page. This method only works correctly if the model knows the total number of rows.

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the last page.

```
apex.region( "regionDomId" ).lastPage();
```

#### loadMore() → {boolean}

Load more records into the view. If option `pagination.scroll` is true this adds a new page of items to the end. If `pagination.scroll` is false this is the same as `nextPage`. This is intended to be used when `pagination.loadMore` is true.

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

#### nextPage() → {boolean}

Display the next page of items. If `pagination.scroll` is true the viewport scrolls down one page and records are added if needed. If `pagination.scroll` is false and not on the last page refresh the view to show the next page.

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the next page.

```
apex.region( "regionDomId" ).nextPage();
```

#### off(events, …args)

Removes an event handler from the widget element associated with this region. This method only applies to regions that are implemented with a jQuery UI style widget. This means that [region#widgetName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widgetName) property must be defined and the [region#widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widget) method returns a value.

This is a shortcut for calling `apex.region(id).widget().off(...)`. Unlike the jQuery object `off` method this does not return the jQuery object and therefore is not chainable. See the jQuery documentation for details.

See also [region#on](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#on).

##### Parameters:

<table class="params" aria-label="Parameters for off">
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
<th class="name" scope="row"><code>events</code></th>
<td class="type"></td>
<td class="attributes"></td>
<td class="description last">One or more space-separated event types and optional namespaces as defined by the jQuery <code class="prettyprint">off</code> method. For events defined by this region widget the event name prefix can be omitted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>args</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Other arguments to be passed to the widget's jQuery object <code class="prettyprint">off</code> method such as selector, data, and handler.</td>
</tr>
</tbody>
</table>

Inherited From:
- [region#off](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#off)

##### Example

This example removes all event handlers for the selectionChange event of an Interactive Grid region. Note that the short event name "selectionChange" can be used rather than the full name "interactivegridselectionchange". See also [interactiveGrid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#event:selectionchange).

```
apex.region( interactiveGridRegionId ).off( "selectionChange" );
```

#### on(events, …args)

Attaches an event handler to the widget element associated with this region. This method only applies to regions that are implemented with a jQuery UI style widget. This means that [region#widgetName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widgetName) property must be defined and the [region#widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widget) method returns a value.

This is a shortcut for calling `apex.region(id).widget().on(...)`. Unlike the jQuery object `on` method this does not return the jQuery object and therefore is not chainable. See the jQuery documentation for details.

See also [region#off](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#off).

##### Parameters:

<table class="params" aria-label="Parameters for on">
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
<th class="name" scope="row"><code>events</code></th>
<td class="type"></td>
<td class="attributes"></td>
<td class="description last">One or more space-separated event types and optional namespaces as defined by the jQuery <code class="prettyprint">on</code> method. For events defined by this region widget the event name prefix can be omitted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>args</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Other arguments to be passed to the widget's jQuery object <code class="prettyprint">on</code> method such as selector, data, and handler.</td>
</tr>
</tbody>
</table>

Inherited From:
- [region#on](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#on)

##### Example

This example handles the selectionChange event of an Interactive Grid region by logging a message to the console. Note that the short event name "selectionChange" can be used rather than the full name "interactivegridselectionchange". See also [interactiveGrid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#event:selectionchange)

```
apex.region( interactiveGridRegionId ).on( "selectionChange", function(event, data) {
    console.log("Selection changed; # records selected is", data.selectedRecords.length );
} );
```

#### previousPage() → {boolean}

Display the previous page of items. If `pagination.scroll` is true the viewport scrolls up one page and records are added if needed. If `pagination.scroll` is false and not on the first page refresh the view to show the previous page.

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

#### refreshView()

Refreshes the view (re-renders the DOM) without fetching new data from the server.

#### selectAll(pFocusopt, nullable, pNoNotifyopt)

Select all the items in the report that can be selected. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event and the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" and [tableModelView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#multiple) and [tableModelView#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAll1) options are both true.

This only applies to the current page or what has been rendered so far unless the selection state is persisted in the model. See [tableModelView#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAll1) for details about how pagination settings and [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) affect the meaning of "all items".

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
<td class="description last">If true the first selected item is given focus. If false the first selected item is made focusable. If null or not given the current item and focus is not changed.</td>
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

This example selects all the items in the report.

```
apex.region( "regionDomId" ).selectAll();
```

#### setCurrentItem(pItem\$, pFocusopt)

Sets the last focused item to the given pItem\$. If pItem\$ is not an item or not in the report container the current item is not changed.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or "focus". See also [cardsRegion#getCurrentItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#getCurrentItem).

The [tableModelView#event:currentitemchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:currentitemchange) event and the [apex.event:apexcurrentrowchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexcurrentrowchange) event are triggered any time the current item changes.

##### Parameters:

<table class="params" aria-label="Parameters for setCurrentItem">
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
<th class="name" scope="row"><code>pItem$</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">The item to make current.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true also focus the item.</td>
</tr>
</tbody>
</table>

##### Example

This example finds a particular item using jQuery and then makes it the current item and sets focus to it. In this example report items have class "my-item".

```
var currentItem$ = $( "#regionDomId .my-item" ).first();
apex.region( "regionDomId" ).setCurrentItem( currentItem$, true );
```

#### setCurrentItemValue(pItemValue, pFocusopt)

Sets the last focused item to the one with the given pItemValue. If no item has the given value the current item is not changed. The item must be rendered in order to be made the current item.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or "focus". See also [cardsRegion#getCurrentItemValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#getCurrentItemValue).

The [tableModelView#event:currentitemchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:currentitemchange) event and the [apex.event:apexcurrentrowchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexcurrentrowchange) event are triggered any time the current item changes.

##### Parameters:

<table class="params" aria-label="Parameters for setCurrentItemValue">
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
<th class="name" scope="row"><code>pItemValue</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The value of an item.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true also focus the item.</td>
</tr>
</tbody>
</table>

#### setSelectedRecords(pRecords, pFocusopt, pNoNotifyopt) → {number}

Selects the report items that correspond to the given data model records. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event and the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select".

See also [cardsRegion#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#getSelectedRecords).

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
<td class="description last">Array of data model records to select.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first record of the selection is given focus.</td>
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

Count of the items actually selected or -1 if called before the report is initialized or there is no data or selection is not supported.

Type
number

#### setSelectedValues(pValues, pFocusopt, pNoNotifyopt) → {number}

Selects the report items that correspond to the given values. The value of an item is the unique identifier of the corresponding model record as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId) and also the value of the item's `data-id` attribute. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event and the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select".

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
<td class="description last">Array of item/record values to select.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first record of the selection is given focus.</td>
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

Count of the items actually selected or -1 if called before the report is initialized or selection is not supported.

Type
number

#### setSelection(pElements\$, pFocusopt, pNoNotifyopt)

Set the selected items. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event and the [apex.event:apexselectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexselectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select".

See also [cardsRegion#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/cardsRegion.html#getSelection).

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
<td class="description last">A jQuery object with item elements such as the return value of <a href="cardsRegion.html#getSelection">cardsRegion#getSelection</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocus</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true the first item element of the selection is given focus.</td>
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

This example finds a particular item using jQuery and then selects it and sets focus to it. In this example report items have class "my-item".

```
var item$ = $( "#regionDomId .my-item" ).first();
apex.region( "regionDomId" ).setSelection( item$, true );
```

#### widget() → {jQuery\|null}

Returns the widget associated with the region or null if the region isn't implemented with a widget. Some advanced region types such as Calendar, Interactive Grid, or Tree are implemented using a widget. This function provides access to the widget typically by returning a jQuery object for the widget element. You can then call widget methods on the jQuery object. See also the [region#call](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#call) method.

Inherited From:
- [region#widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widget)

##### Returns:

jQuery object or null if there is no widget associated with the region.

Type
jQuery \| null

##### Example

The following adds a row to an Interactive Grid by using the region widget method to access the interactiveGrid widget [interactiveGrid#getActions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#getActions) method and then invoking the `selection-add-row` action.

```
apex.region( "myGridRegion" ).widget().interactiveGrid( "getActions" ).invoke( "selection-add-row" );
```
