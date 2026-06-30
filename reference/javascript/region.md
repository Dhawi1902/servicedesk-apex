<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html -->
<!-- Interfaces: region -->

# Interface: region

## QuickNav

### [Properties](#members-section)

- [element](#element)
- [filterRegionId](#filterRegionId)
- [parentRegionId](#parentRegionId)
- [type](#type)
- [widgetName](#widgetName)

### [Methods](#methods-section)

- [alternateLoadingIndicator](#alternateLoadingIndicator)
- [call](#call)
- [focus](#focus)
- [off](#off)
- [on](#on)
- [refresh](#refresh)
- [widget](#widget)

## region

The region interface is used to access region related methods and properties. You get access to the region interface for a region with the [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.fn:region) function.

Plug-in developers can define the behavior of their region by calling [apex.region.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html#.create).

Since:
- 5.1

### Properties

#### element :jQuery

The jQuery object for the region element.

##### Type:

- jQuery

##### Example

Get option element after initialization.

```
var value = apex.region( "myRegionId" ).element;
```

#### filterRegionId :string

For region plug-ins which support Faceted Search / Smart Filters it is possible to pass in the DOM ID of the [facetsRegion](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html) region in order for APEX to bind the two together. If provided, the region will be automatically refreshed as the filters change. Further, if the region's refresh callback returns a Promise, APEX will also automatically perform the appropriate locking and unlocking of the [facetsRegion](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html) region during refresh.

##### Type:

- string

#### parentRegionId :string

Identifies the parent (master) region ID, if the region is the detail region of a master detail relationship.

##### Type:

- string

##### Example

Get option parentRegionId after initialization.

```
var value = apex.region( "myRegionId" ).parentRegionId;
```

#### type :string

Identifies the type of the region. Regions that don't implement a custom region interface have type "generic".

##### Type:

- string

##### Example

Get option type after initialization.

```
var value = apex.region( "myRegionId" ).type;
```

#### widgetName :string

For regions that are implemented with a jQuery UI style widget, this is the name of the widget. For other widget implementations it is null. It is used internally by the [region#call](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#call), [region#on](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#on) and [region#off](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#off) methods.

##### Type:

- string

##### Example

Get option widgetName after initialization.

```
var value = apex.region( "myRegionId" ).widgetName;
```

### Methods

#### alternateLoadingIndicator(pElement, pLoadingIndicator\$) → {jQuery}

Return an alternative loading indicator for the given element. Not all regions have this method so check if it exists before calling. For regions that support column items and when the column items may not be visible on the screen at all times this allows the region to place the loading indicator in an appropriate location. This can return the loading indicator passed in or return a completely new loading indicator.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pElement` | Element | DOM element that may represent a column item. |
| `pLoadingIndicator$` | jQuery | A loading indicator that can be inserted in to the DOM where desired and returned or ignored. |

##### Returns:

loadingIndicator jQuery object or null if the region has no alternative for given element.

Type
jQuery

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

#### focus()

Cause the region to take focus. Not all native or plug-in regions support taking focus. It is up to the specific region to determine where focus will go. Some regions manage focus such that there is a single tab stop (or limited number of tab stops) and they may put focus to where the user last had focus within the region.

The default implementation sets focus to the first element in the region that is capable of being tabbed to.

##### Example

The following example will focus the region with HTML DOM id "myRegion".

```
var region = apex.region( "myRegion" );
region.focus();
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

##### Example

This example handles the selectionChange event of an Interactive Grid region by logging a message to the console. Note that the short event name "selectionChange" can be used rather than the full name "interactivegridselectionchange". See also [interactiveGrid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#event:selectionchange)

```
apex.region( interactiveGridRegionId ).on( "selectionChange", function(event, data) {
    console.log("Selection changed; # records selected is", data.selectedRecords.length );
} );
```

#### refresh(pKeepPagination) → {Promise}

Cause the region to get new data from the server or otherwise refresh itself. Not all regions support refresh. Exactly what happens depends on the type of region.

This function should be used in place of the legacy way of refreshing a region, which was to trigger the apexrefresh event on the region element.

The default implementation triggers the legacy apexrefresh event on the region element for backward compatibility with old regions that don't implement this interface.

The refresh callback can and should return a Promise, in order for the caller to have more knowledge of its progress. Whether it does return one depends on the region or plug-in.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pKeepPagination` | boolean | controls the pagination and scroll behavior after refresh. The exact behavior depends on the region. Not all regions support this parameter. For example Interactive Report will maintain the page and scroll offset. |

##### Returns:

Type
Promise

##### Examples

The following will refresh the region with HTML DOM id "myRegion":

```
var region = apex.region( "myRegion" );
region.refresh();
```

The following example will refresh an Interactive Report region while maintaining the same page.

```
var region = apex.region( "myRegion" );
region.refresh( true );
```

#### widget() → {jQuery\|null}

Returns the widget associated with the region or null if the region isn't implemented with a widget. Some advanced region types such as Calendar, Interactive Grid, or Tree are implemented using a widget. This function provides access to the widget typically by returning a jQuery object for the widget element. You can then call widget methods on the jQuery object. See also the [region#call](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#call) method.

##### Returns:

jQuery object or null if there is no widget associated with the region.

Type
jQuery \| null

##### Example

The following adds a row to an Interactive Grid by using the region widget method to access the interactiveGrid widget [interactiveGrid#getActions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#getActions) method and then invoking the `selection-add-row` action.

```
apex.region( "myGridRegion" ).widget().interactiveGrid( "getActions" ).invoke( "selection-add-row" );
```
