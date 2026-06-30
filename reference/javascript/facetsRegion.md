<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html -->
<!-- Interfaces: facetsRegion -->

# Interface: facetsRegion

## QuickNav

### [Properties](#members-section)

- [batch](#batch)
- [chartTopNValues](#chartTopNValues)
- [clearOnHide](#clearOnHide)
- [collapsibleSearchBar](#collapsibleSearchBar)
- [controls](#controls)
- [currentFacets](#currentFacets)
- [element](#element)
- [externalApply](#externalApply)
- [feedback](#feedback)
- [filterRegionId](#filterRegionId)
- [maxChips](#maxChips)
- [moreFiltersChip](#moreFiltersChip)
- [multipleSearches](#multipleSearches)
- [numberFormat](#numberFormat)
- [numberFormatOptions](#numberFormatOptions)
- [numberFormatThreshold](#numberFormatThreshold)
- [persistState](#persistState)
- [searchButton](#searchButton)
- [searchField](#searchField)
- [searchItem](#searchItem)
- [showCharts](#showCharts)
- [showTotalCount](#showTotalCount)
- [text](#text)
- [type](#type)
- [uiMode](#uiMode)

### [Events](#events-section)

- [afterRemoveChart](#event:afterRemoveChart)
- [beforeAddChart](#event:beforeAddChart)
- [change](#event:change)

### [Methods](#methods-section)

- [addChart](#addChart)
- [apply](#apply)
- [clear](#clear)
- [clearFacets](#clearFacets)
- [fetchCounts](#fetchCounts)
- [focus](#focus)
- [getFacetCount](#getFacetCount)
- [getFacetValueCounts](#getFacetValueCounts)
- [getTotalResourceCount](#getTotalResourceCount)
- [hideFacet](#hideFacet)
- [lock](#lock)
- [off](#off)
- [on](#on)
- [refresh](#refresh)
- [refreshView](#refreshView)
- [removeChart](#removeChart)
- [reset](#reset)
- [showFacet](#showFacet)
- [unlock](#unlock)

### [Type Definitions](#typedefs-section)

- [checkboxControl](#.checkboxControl)
- [control](#.control)
- [inputControl](#.inputControl)
- [listControl](#.listControl)
- [rangeControl](#.rangeControl)
- [selectListControl](#.selectListControl)

## facetsRegion

The facetsRegion interface is used to access the properties and methods of the facets API which is used by both the Faceted Search and Smart Filters regions. You get access to the facetsRegion interface with the [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html) function when passed the regionId (HTML DOM id) of either a Faceted Search Region or Smart Filters Region. The terms *facet* and *filter* (when used as a noun) are often used interchangeably.

The facetsRegion provides the user interface used to search and filter an associated report. The Faceted Search and Smart Filters regions have a great deal of overlap in their functionality; both allow searching and filtering a report. The biggest difference is in the UI and this is controlled by the [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) property. A number of properties are only supported in one mode or the other as noted in the description of each property.

Report region plug-in developers use the facetsRegion API to support the client side of faceted search for their plug-in. The plug-in server-side render code must pass the HTML DOM id of the Faceted Search or Smart Filter region to the client as part of its configuration. The plug-in region must listen for the [facetsRegion#event:change](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#event:change) event and refresh the report in response. Before sending the ajax request to refresh the report it must call [facetsRegion#lock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#lock) and after the response completes it must call [facetsRegion#unlock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#unlock).

### Facet Items

Users filter the report by choosing or entering value(s) for as many facets as needed. The facet value is used to match a specific column. Users can also enter a search term that matches any of the searchable columns of the report. Each facet value and the search term(s) is stored in a hidden page item and has a corresponding session state value. The item name is the filter or facet name.

For example, if there is a facet or filter with name P1_PROJECT_STATUS that has LOV return values: 'OPEN', 'IN_PROGRESS', 'CLOSED', and 'REOPENED'. Setting the page item will cause the facets region and the report region to be updated to reflect the new facet value(s). After executing the following code the report will show any records that have project status of OPEN or REOPENED.

```
apex.item( "P1_PROJECT_STATUS" ).setValue( "OPEN:REOPENED" );
```

Note that multiple values are separated by a colon ":" and facet values that represent a range use vertical bar "\|" to separate the min and max range values.

#### **Flexible Operators**

When using facets of type "Input Field" and "User can Choose Operator" is activated then the operator can be set by changing the facet value.

For example, if there is a facet or filter with name P1_POPULATION, then report region can be filtered for all countries where population is equal to a specific value. After executing the following code the report will show any records that have equals to 1000.

```
apex.item( "P1_POPULATION" ).setValue( "EQ:1000" );
```

The following operators are available:

- General
  - EQ: Equals
  - NEQ: Not equals
- NUMBER
  - LT: Less than
  - LTE: Less than or equal to
  - GT: Greater than
  - GTE: Greater than or equal to
- VARCHAR2
  - STARTS": Starts with
  - NSTARTS: Does not start with
  - C: Contains
  - NC: Does not contain

Since:
- 21.2

### Extends

- [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html)

### Properties

#### batch :boolean

Batch facet control changes or not. Batching changes allows the user to make a number of selections before the report refreshes. In some cases this can make searching more efficient.

When true, the [facetsRegion#event:change](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#event:change) event is delayed until an "apply" button is pressed. When [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F" (faceted search mode) there will be an apply button shown (unless [facetsRegion#externalApply](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#externalApply) is true). When [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) changes are applied when the the facet popup is closed.

When false, the [facetsRegion#event:change](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#event:change) event is fired as soon as any facet control value changes.

##### Type:

- boolean

Default Value:
- true

##### Example

Get or set option batch after initialization.

```
// get
var value = apex.region( "myRegionId" ).batch;
// set
apex.region( "myRegionId" ).batch = false;
```

#### chartTopNValues :number

The default maximum number of values to show in a facet chart.

##### Type:

- number

Default Value:
- 10

##### Example

Get or set option chartTopNValues after initialization.

```
// get
var value = apex.region( "myRegionId" ).chartTopNValues;
// set
apex.region( "myRegionId" ).chartTopNValues = 20;
```

#### clearOnHide :boolean

Controls if facet values are cleared when hidden by the facet configuration popup (More Filters). This option is not applicable when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode)

##### Type:

- boolean

Default Value:
- true

##### Example

Get or set option clearOnHide after initialization.

```
// get
var value = apex.region( "myRegionId" ).clearOnHide;
// set
apex.region( "myRegionId" ).clearOnHide = false;
```

#### collapsibleSearchBar :boolean\|null

This determines if the search bar is collapsible. If null (the default) the search bar is collapsible on mobile sized screens but not on desktop (larger) screens. If true the searchbar is always collapsible. If false the searchbar is not collapsible. When collapsible and there are no filters the search input field is not shown and the suggestions, if any, are on one line. This only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) and [facetsRegion#maxChips](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#maxChips) is not 0.

##### Type:

- boolean \| null

Default Value:
- null

##### Example

Get or set option collapsibleSearchBar after initialization.

```
// get
var value = apex.region( "myRegionId" ).collapsibleSearchBar;
// set
apex.region( "myRegionId" ).collapsibleSearchBar = true;
```

#### controls :Array.\<[facetsRegion.control](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.control)\>

An array of facet control objects. Required. The controls are set according to the region facet or filter configuration.

##### Type:

- Array.\<[facetsRegion.control](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.control)\>

#### currentFacets :string\|boolean

Controls if and where the list of current (applied) facet choices are shown. This is known as the current facets area. If a string, it is the selector of an element to render the list of current facet values in. If true the list of current facets is added at the top of the facets region. If false or not present there is no list of current facets.

This option can only be set during initialization. When [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) this option is forced to be false because applied facets are always shown in the search bar.

##### Type:

- string \| boolean

Default Value:
- true

##### Example

Get option currentFacets after initialization.

```
var value = apex.region( "myRegionId" ).currentFacets;
```

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

#### externalApply :boolean

Only applies if [facetsRegion#batch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#batch) is true and [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F" (faceted search mode). If true no apply button is shown. Used when facets are in a dialog or popup or otherwise have some other external way to apply the changes. See the [facetsRegion#apply](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#apply) method.

##### Type:

- boolean

Default Value:
- false

##### Example

Get or set option externalApply after initialization.

```
// get
var value = apex.region( "myRegionId" ).externalApply;
// set
apex.region( "myRegionId" ).externalApply = true;
```

#### feedback :boolean

If true the facet control values give feedback (counts) about how many resources match the facet value. If false there is no feedback. Feedback can also be configured on a per facet basis with the `hasFeedback` property of a control. See [facetsRegion.control](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.control).

This option can only be set during initialization.

##### Type:

- boolean

Default Value:
- true

##### Example

Get option feedback after initialization.

```
var value = apex.region( "myRegionId" ).feedback;
```

#### filterRegionId :string

For region plug-ins which support Faceted Search / Smart Filters it is possible to pass in the DOM ID of the [facetsRegion](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html) region in order for APEX to bind the two together. If provided, the region will be automatically refreshed as the filters change. Further, if the region's refresh callback returns a Promise, APEX will also automatically perform the appropriate locking and unlocking of the [facetsRegion](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html) region during refresh.

##### Type:

- string

Inherited From:
- [region#filterRegionId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#filterRegionId)

#### maxChips :number

The maximum number of suggestion filter chips to show at a time. If 0 the suggestion filter chips area is not shown. If -1 then all available facet suggestions are shown. The [facetsRegion#moreFiltersChip](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#moreFiltersChip) option is only useful when this value is positive.

This only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) and is ignored otherwise.

##### Type:

- number

Default Value:
- 5

##### Example

Get or set option maxChips after initialization.

```
// get
var value = apex.region( "myRegionId" ).maxChips;
// set
apex.region( "myRegionId" ).maxChips = 6;
```

#### moreFiltersChip :boolean

Determine if a special "more filters" chip is shown in the suggestion filter chips area. When clicked this chip shows a list of available filers to choose and filer the report on.

This only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) and is ignored otherwise. See also [facetsRegion#maxChips](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#maxChips).

##### Type:

- boolean

Default Value:
- true

##### Example

Get or set option moreFiltersChip after initialization.

```
// get
var value = apex.region( "myRegionId" ).moreFiltersChip;
// set
apex.region( "myRegionId" ).moreFiltersChip = false;
```

#### multipleSearches :boolean

Specify if multiple searches are allowed. If true the report can be filtered by multiple search terms. Each search term must match some part of a record for it to be included in the report. (This means that search term conditions are combined with AND.) If false only a single search term is allowed. When [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) this option is forced to be true and cannot be changed.

##### Type:

- boolean

Default Value:
- false

##### Example

Get or set option multipleSearches after initialization.

```
// get
var value = apex.region( "myRegionId" ).multipleSearches;
// set
apex.region( "myRegionId" ).multipleSearches = true;
```

#### numberFormat :string\|boolean

Controls if and how numbers for facet value counts and total count are formatted. If false the numbers are not formatted. If true the numbers are formatted using compact format (with no fractional digits) for numbers greater than or equal to the [facetsRegion#numberFormatThreshold](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#numberFormatThreshold) and a default format model with group separators otherwise. The [facetsRegion#numberFormatOptions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#numberFormatOptions) are not used. If a string: it is a database number format model or the keyword "compact".

##### Type:

- string \| boolean

Default Value:
- true

##### Example

Get or set option numberFormat after initialization.

```
// get
var value = apex.region( "myRegionId" ).numberFormat;
// set
apex.region( "myRegionId" ).numberFormat = "999G999G999G999";
```

#### numberFormatOptions :object

Options to pass to the number formatting function. The available option properties depend on the value of [facetsRegion#numberFormat](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#numberFormat). See [apex.locale.formatNumber](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html#.formatNumber) and [apex.locale.formatCompactNumber](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html#.formatCompactNumber).

##### Type:

- object

Default Value:
- null

##### Example

Get or set option numberFormatOptions after initialization.

```
// get
var value = apex.region( "myRegionId" ).numberFormatOptions;
// set
apex.region( "myRegionId" ).numberFormatOptions = {
    maximumFractionDigits: 1
};
```

#### numberFormatThreshold :number

See [facetsRegion#numberFormat](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#numberFormat). Only applies if [facetsRegion#numberFormat](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#numberFormat) is true. If null and `numberFormat` is true then the default format model with group separators is used.

##### Type:

- number

Default Value:
- null

##### Example

Get or set option numberFormatThreshold after initialization.

```
// get
var value = apex.region( "myRegionId" ).numberFormatThreshold;
// set
apex.region( "myRegionId" ).numberFormatThreshold = 1000;
```

#### persistState :boolean

Persist facet control collapsed state and chart state in browser session storage or not.

##### Type:

- boolean

Default Value:
- true

##### Example

Get or set option persistState after initialization.

```
// get
var value = apex.region( "myRegionId" ).persistState;
// set
apex.region( "myRegionId" ).persistState = false;
```

#### searchButton :string

The id of a button that initiates the search. Only applies if [facetsRegion#searchField](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#searchField) is a string page item id. If this value is changed call [facetsRegion#refreshView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#refreshView).

##### Type:

- string

Default Value:
- null

##### Example

Get or set option searchButton after initialization.

```
// get
var value = apex.region( "myRegionId" ).searchButton;
// set
apex.region( "myRegionId" ).searchButton = "P1_SEARCH_BUTTON";
```

#### searchField :string\|boolean

This controls the search field. If true a search field is included in the facets area. If false there is no search field. If a string it is the ID of a page item input field to use as the search field When [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) this option is forced to be true and cannot be changed.

##### Type:

- string \| boolean

Default Value:
- false

##### Example

Get or set option searchField after initialization.

```
// get
var value = apex.region( "myRegionId" ).searchField;
// set
apex.region( "myRegionId" ).searchField = "P1_SEARCH";
```

#### searchItem :string

Name of the search item. Required if [facetsRegion#searchField](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#searchField) is not false.

##### Type:

- string

Default Value:
- null

##### Example

Get option searchItem after initialization.

```
var value = apex.region( "myRegionId" ).searchItem;
```

#### showCharts :string\|boolean

Determines if facets can have a button to show a chart of facet counts. If true a chart for a single facet can be shown in a dialog (or popup). If false no charts can be shown. If a string it is the selector of an element to render the charts in.

Charts can also be shown with the [facetsRegion#addChart](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#addChart) method unless this option is false. When [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filter mode) there is no built-in UI for the user to show charts. The require and JET chart libraries and JET CSS must be available. This is done automatically by the Faceted Search region but not the Smart Filters region.

##### Type:

- string \| boolean

Default Value:
- false

##### Example

Get or set option showCharts after initialization.

```
// get
var value = apex.region( "myRegionId" ).showCharts;
// set
apex.region( "myRegionId" ).showCharts = true;
```

#### showTotalCount :string\|boolean

Controls if and where the total count is shown. If a string, it is a selector of an element to display the current total resources count in. If true show the total count in the current facets area or if there is no current facets area show it where the current facets area would be if it were true. If false don't show the total count. This is forced to false if feedback is false.

##### Type:

- string \| boolean

Default Value:
- true

##### Example

Get option showTotalCount after initialization.

```
var value = apex.region( "myRegionId" ).showTotalCount;
```

#### text :object

Object containing translatable strings. All required.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `searchLabel` | string | Accessible label for the search input field or search button. Only used when [facetsRegion#searchField](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#searchField) is true. |
| `searchPlaceholder` | string | Placeholder text for the search input field. Only used when [facetsRegion#searchField](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#searchField) is true. |
| `totalCountLabel` | string | Label to show before the total results count. Only used when [facetsRegion#showTotalCount](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#showTotalCount) is true. |

##### Example

Get option text after initialization.

```
var value = apex.region( "myRegionId" ).text;
```

#### type :string

The facetsRegion type is "Facets".

##### Type:

- string

Overrides:
- [region#type](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#type)

#### uiMode :string

Controls the UI mode of the region. It is one of the following values:

- "F" This is traditional faceted search mode. This is the value set by the Faceted Search region.
- "S" This is smart filter search mode. This is the value set by the Smart Filters region.

This option property cannot be changed after initialization. A number of other options and methods are affected by this property setting.

##### Type:

- string

Default Value:
- "F"

##### Example

Get option uiMode after initialization.

```
var value = apex.region( "myRegionId" ).uiMode;
```

### Events

#### afterRemoveChart

Triggered just after a chart is removed from the charts dashboard area. This is the same as the Dynamic Action event: After Remove Chart \[Faceted Search\].

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
<th class="name" scope="row"><code>count</code></th>
<td class="type">number</td>
<td class="description last">Number of active charts now that this one is removed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>chartName</code></th>
<td class="type">string</td>
<td class="description last">The name of the chart. It is the same as the facet item.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

In this example charts are shown in a collapsible dashboard region. When the last chart is removed the collapsible region needs to be collapsed.

```
apex.region( "myRegionId" ).on( "facetsafterremovechart", function( event, data ) {
    if ( data.count === 0 ) {
        apex.theme.closeRegion( "myDashboardRegionId" );
    }
} );
```

#### beforeAddChart

Triggered just before a new chart is added to the charts dashboard area. This is the same as the Dynamic Action event: Before Add Chart \[Faceted Search\].

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
<th class="name" scope="row"><code>count</code></th>
<td class="type">number</td>
<td class="description last">Number of active charts after this one is added.</td>
</tr>
<tr>
<th class="name" scope="row"><code>chartName</code></th>
<td class="type">string</td>
<td class="description last">The name of the chart. It is the same as the facet item.</td>
</tr>
<tr>
<th class="name" scope="row"><code>chart</code></th>
<td class="type">Element</td>
<td class="description last">The chart Element added. This is the wrapping element that contains the title, buttons, and chart.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

In this example charts are shown in a collapsible dashboard region. When the first chart is added the collapsible region needs to be expanded.

```
apex.region( "myRegionId" ).on( "facetsbeforeaddchart", function( event, data ) {
    if ( data.count === 1 ) {
        apex.theme.openRegion( "myDashboardRegionId" );
    }
} );
```

#### change

Triggered when one or more facet control values have changed. It has no additional data. This is the same as the Dynamic Action events: Facets Change \[Faceted Search\] and Filters Change \[Smart Filters\].

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Example

The report region associated with the Smart Filter or Faceted Search region will automatically refresh when facet values change but if you have other regions on the page that also need to refresh listen for this event. The following will refresh region "extraReport" when facet values change.

```
apex.region( "myRegionId" ).on( "facetschange", function( event ) {
    apex.region( "extraReport" ).refresh();
} );
```

### Methods

#### addChart(pFacetName, pAppendTo\$opt, pConfigopt)

Add/show a chart for the given facet.

This API only works for facets that are displayed inline (facetsRegion#displayAs is "INLINE").

See also [facetsRegion#removeChart](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#removeChart).

##### Parameters:

<table class="params" aria-label="Parameters for addChart">
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
<th class="name" scope="row"><code>pFacetName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The facet to add a chart for.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAppendTo$</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The element to append the chart to. If not specified then the chart is shown according to the <a href="facetsRegion.html#showCharts">facetsRegion#showCharts</a> property. The <a href="facetsRegion.html#showCharts">facetsRegion#showCharts</a> option must not be false if <code class="prettyprint">appendTo$</code> is not specified.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pConfig</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional chart configuration.
<h6 id="properties-7">Properties</h6>
<table class="params" aria-label="Parameters for pConfig">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>type</code></th>
<td class="type">string</td>
<td class="description last">The chart type. One of "bar", "pie".</td>
</tr>
<tr>
<th class="name" scope="row"><code>topN</code></th>
<td class="type">number</td>
<td class="description last">Maximum number of values to show in the chart</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

This example shows a chart for the P1_SAL facet in a non-modal dialog.

```
apex.region( "myRegionId" ).addChart( "P1_SAL" );
```

This example adds a pie chart for the P1_JOB facet in dashboard area div with id "#chartDashboard".

```
apex.region( "myRegionId" ).addChart( "P1_JOB", $( "#chartDashboard" ), {type: "pie"});
```

#### apply()

Apply any outstanding changes to facet values. This method is intended for when both [facetsRegion#batch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#batch) and [facetsRegion#externalApply](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#externalApply) are true.

##### Example

In this example the `batch` and `externalApply` properties are true and the page has a button with id "myApplyButton". The user clicks this button to apply facet choices.

```
$( "#myApplyButton" ).on( "click", function() {
    apex.region( "myRegionId" ).apply();
}
```

#### clear()

Clear all the current (applied) facet values and any search terms.

See also [facetsRegion#clearFacets](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#clearFacets).

##### Example

This example clears all the facet and search term values when the button with id *CLEAR_BUTTON* is pressed.

```
$("#CLEAR_BUTTON").on( "click", function() {
    apex.region( "regionId" ).clear();
} );
```

#### clearFacets()

Clear all the current (applied) facet values. Search terms if any are not cleared.

See also [facetsRegion#clear](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#clear).

##### Example

This example defines an action that will clear all the facet values when the keyboard shortcut Ctrl+/,X is pressed. The action could also be associated with a menu item and/or button. See also [actions#add](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#add).

```
apex.actions.add( [ {
    name: "clear-search",
    label: "Clear Filters",
    shortcut: "Ctrl+/,X",
    action: function() {
        apex.region( "regionId" ).clearFacets();
    }
} ] );
```

#### fetchCounts()

Refreshes the counts for all the facets. This is useful if the report is also filtered by controls, such as page items, that are external to the facets region and those external control values have changed.

See also [facetsRegion#refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#refresh).

##### Example

In this example there is an input element with id *P1_EXTERNAL_FILTER* and when it changes the report is refreshed so the facet counts must also be refreshed.

```
$("#P1_EXTERNAL_FILTER").on( "change", function() {
    apex.region( "regionId" ).fetchCounts();
} );
```

#### focus()

Focus the first tabbable element. In faceted search mode ([facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F") the search input field is focused if [facetsRegion#searchField](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#searchField) is true or the first facet control body otherwise. In smart filter mode ([facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S") the search bar search input field or search button is focused.

Overrides:
- [region#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#focus)

##### Example

This example puts focus in the Faceted Search or Smart Filters region.

```
apex.region( "myRegionId" ).focus();
```

#### getFacetCount(pIncludeSearchTerms) → {number}

Returns the number of facets that have a non-empty value. This is useful when the facet UI is not always visible (for example it is in a collapsible or dialog region) and you wish to display how many filters are applied.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pIncludeSearchTerms` | boolean | If true the search terms are included in the count. |

##### Returns:

Type
number

#### getFacetValueCounts() → {object}

Returns an object structure with all the counts displayed by the facets UI.

##### Returns:

Facet value counts. The object properties are the facet control names. The value of each property is an object with the facet value as the property and the count as the property value.

Type
object

#### getTotalResourceCount() → {number}

Returns the total number of resources (records) in the report. This is the same value displayed by the [facetsRegion#showTotalCount](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#showTotalCount) property, except it is not formatted. Returns null if [facetsRegion#feedback](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#feedback) property is false.

##### Returns:

Type
number

##### Example

This example logs the number of records in the report to the console.

```
console.log("Total records is ", apex.region( "regionId" ).getTotalResourceCount() );
```

#### hideFacet(pFacetName)

Hides the specified facet. Note that hiding a facet does not clear any value(s) that may currently be filtering the report.

In faceted search mode ([facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F") the facet header and all choices or other selection UI are hidden.

This API only works for facets that are displayed inline (facetsRegion#displayAs is "INLINE").

In smart filter mode ([facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S") the hidden facet will not show in the suggestion chip area or in the suggestion drop down.

See also [facetsRegion#showFacet](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#showFacet).

##### Parameters:

| Name         | Type                                   | Description |
|--------------|----------------------------------------|-------------|
| `pFacetName` | string |             |

##### Examples

This example hides the facet named "P1_COMM".

```
apex.region( "myRegionId" ).hideFacet( "P1_COMM" );
```

This example hides the facet named "P1_COMM" and also clears any values it may have.

```
apex.item( "P1_COMM" ).setValue( "" );
apex.region( "myRegionId" ).hideFacet( "P1_COMM" );
```

#### lock()

Disables the facets region so that facet values cannot be changed through the UI or API. This is done by the report region associated with this facets region so that multiple requests are not sent to the server at the same time. For every call to [facetsRegion#lock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#lock) there must be a corresponding call to [facetsRegion#unlock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#unlock).

See [facetsRegion#unlock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#unlock).

##### Examples

This example shows how a report region plug-in would listen for facet value changes and call lock and unlock.

```
// ajaxIdentifier and facetsDomId are passed into the report plug-in
if ( facetsDomId ) {
    let facetsRegion = apex.region( facetsDomId );
    facetsRegion.widget().on( "facetschange", function() {
        facetsRegion.lock();
        let p = apex.server.plugin( ajaxIdentifier, ... );
        ...
        p.always( function() {
            facetsRegion.unlock();
        } );
    } );
}
```

This example shows how to set multiple facet item values but only cause the report and facet counts to be updated once. The region HTML DOM id is "empFacets" and P2_JOB and P2_MGR are 2 of the facet names.

```
let facets = apex.region( "empFacets" );
facets.lock();
$s("P2_JOB", "CLERK");
$s("P2_MGR", "7698");
facets.unlock(); // only after this will the report and counts be updated
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

#### refresh()

This is a convenience method that simply calls the [facetsRegion#fetchCounts](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#fetchCounts) method.

Overrides:
- [region#refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#refresh)

#### refreshView()

Renders and initializes the facets UI.

##### Example

This example refreshes the view.

```
apex.region( "regionId" ).refreshView();
```

#### removeChart(pFacetName)

Remove the chart for the given facet.

See also [facetsRegion#addChart](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#addChart).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pFacetName` | string | The facet name of the chart to remove. |

##### Example

This example removes the chart for the P1_SAL facet.

```
apex.region( "myRegionId" ).removeChart( "P1_SAL" );
```

#### reset()

Clears all filters and search terms and resets any persistent settings to their original configured values.

##### Example

This example resets the region.

```
apex.region( "regionId" ).refreshView();
```

#### showFacet(pFacetName)

Shows the specified facet.

This API only works for facets that are displayed inline (facetsRegion#displayAs is "INLINE").

See also [facetsRegion#hideFacet](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#hideFacet).

##### Parameters:

| Name         | Type                                   | Description |
|--------------|----------------------------------------|-------------|
| `pFacetName` | string |             |

##### Example

This example shows the facet named "P1_COMM".

```
apex.region( "myRegionId" ).showFacet( "P1_COMM" );
```

#### unlock()

Enables the facets region after it was previously disabled with [facetsRegion#lock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#lock) so that facet values can be changed again. For every call to [facetsRegion#lock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#lock) there must be a corresponding call to [facetsRegion#unlock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#unlock).

See [facetsRegion#lock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#lock).

##### Example

See [facetsRegion#lock](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#lock) for examples.

### Type Definitions

#### checkboxControl

Checkbox specific options Note the checkbox type can only be in a group. This means it must follow a group control or be in the facets array of a group item. It is different from other facet controls in that it does not form its own group. The label is the label of the checkbox. So some of the common control properties such as collapsible and maxHeight don't apply and are simply ignored. Some properties take their value from the group the checkbox is in.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `value` | string | Control return value when checked |
| `icon` | string | Icon CSS class |
| `escape` | boolean | If false allows markup in the label. Otherwise markup is escaped. |
| `altLabel` | string | {string} label to use in currentFacets and charts. Useful when the label contains markup. |

#### control

Facet control option properties that configure the look and behavior of a facet.

A note about facet visibility: There are 3 options that can affect if a facet is shown: displayed, visibleCondition, and lovDependsOn. There is little coordination between these options. In general, the last one evaluated wins (gets to say if the facet is visible or not).

See also listControl, facetsRegion#rangeControl.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `name` | string | The item/session state name |
| `type` | string | One of "list", "range", "rangeList", "selectList", "group", "checkbox", "input" |
| `label` | string | The UI label to show for the facet control. |
| `includeLabel` | boolean | Determines if the facet label is also displayed when a facet value is shown standalone such as in the current facets area in faceted search mode or as a suggestion facet chip in smart filters mode. When facet is displayed in filter dialog the label is always shown. |
| `icon` | string | Icon CSS classes to show before the facet label in faceted search mode and in the suggestions drop down in smart filters mode. |
| `cssClasses` | string | Additional classes to set on the facet control. In faceted search mode the class is added to the facet control element with class 'a-FS-control'. In smart filters mode the class is added to the suggestion chip element with class 'a-Chip' and to the popup element with class 'a-FS-body'. |
| `collapsible` | boolean | Determines if the the facet control can be collapsed. Only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F" (faceted search mode). |
| `initialCollapsed` | boolean | When `collapsible` is true this determines if the facet control is initially collapsed. Only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F" (faceted search mode). |
| `maxHeight` | integer | The maximum height of the facet control values area. If the facet has more values than will fit in this height then they will scroll. Only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F" (faceted search mode). |
| `clearBtn` | boolean | If true the control will have a clear button shown when it has a value. Default true. When [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart filters mode) this does not apply and is set to false. |
| `hasFeedback` | boolean | If true then this control expects to get feedback about how many matching resources are available. The default comes from option [facetsRegion#feedback](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#feedback). |
| `displayAs` | string | Controls whether the facet control is shown as inline or in a filter dialog (INLINE, FILTER_DIALOG). Only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "F" (faceted search mode). |
| `visibleCondition` | object | A condition object as described by apex.util.checkCondition. This controls the visibility of the facet. When the condition is true the facet if visible. When not visible the facet will have no value. |
| `showChart` | boolean | Default true. Only applicable for LOV related controls and if showCharts, hasFeedback and showCounts is true. |
| `initialChart` | boolean | Default false. Only applies if showChart is applicable and true and showCharts is a string. |
| `suggestedValues` | boolean \| array | Determines if a facet suggestion chip is displayed in the suggestion filter chips area and if so what value to suggest. If true the value with the largest count or first value of a LOV facet is used as the suggestion value. If false this facet is not included in the suggestion filter chip area. If an array it is an array of facet values. The first value that has a non-zero count is used. Only applies when [facetsRegion#uiMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#uiMode) is "S" (smart search mode). |
| `*` | [facetsRegion.listControl](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.listControl) \| [facetsRegion.rangeControl](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.rangeControl) \| [facetsRegion.selectListControl](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.selectListControl) \| [facetsRegion.checkboxControl](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.checkboxControl) \| [facetsRegion.inputControl](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/facetsRegion.html#.inputControl) | Additional type specific properties. |

#### inputControl

Input specific options

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `dataType` | string | The datatype of the value to enter and the facet value to compare with. The comparison operator is controlled by the server. One of "NUMBER", "VARCHAR2", "DATE", "TIMESTAMP", "TIMESTAMP WITH TIME ZONE", "TIMESTAMP WITH LOCAL TIME ZONE" |
| `formatMask` | string | Format Mask of the input when facet is based on dataType "DATE", "TIMESTAMP", "TIMESTAMP WITH TIME ZONE", "TIMESTAMP WITH LOCAL TIME ZONE" |
| `inputLabel` | string | Label to show before the input. |
| `suffixText` | string | {string} Text to show after the input. |
| `currentLabel` | string | {string} Label used for the current facets area. Example: "Within %0 miles" When dataType is "NUMBER": |
| `min` | number | Minimum value user is allowed to enter |
| `max` | number | Maximum value user is allowed to enter |
| `step` | number | Number input step increment |

#### listControl

These are additional options for controls that have a list of values (LOV). These options apply to the facet control types 'list' and 'rangeList'

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
<th class="name" scope="row"><code>escape</code></th>
<td class="type">boolean</td>
<td class="description last">If false allows markup in the values display values. Otherwise markup is escaped.</td>
</tr>
<tr>
<th class="name" scope="row"><code>multiple</code></th>
<td class="type">boolean</td>
<td class="description last">If true the user can select multiple values from the list. (checkboxes)</td>
</tr>
<tr>
<th class="name" scope="row"><code>showCounts</code></th>
<td class="type">boolean</td>
<td class="description last">Default true. Only applicable if hasFeedback is true.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hideEmpty</code></th>
<td class="type">boolean</td>
<td class="description last">If true values with 0 count are hidden if false values with 0 count are visually "disabled"</td>
</tr>
<tr>
<th class="name" scope="row"><code>lovDependsOn</code></th>
<td class="type">string</td>
<td class="description last">Parent cascading LOV parent facet name. When the parent changes, new values are requested from the server.</td>
</tr>
<tr>
<th class="name" scope="row"><code>lovDependsOnRequired</code></th>
<td class="type">boolean</td>
<td class="description last">If true the lovDependsOn parent must have a value for this facet to have any values. This only applies when lovDependsOn is specified.</td>
</tr>
<tr>
<th class="name" scope="row"><code>values</code></th>
<td class="type">Array.&lt;object&gt;</td>
<td class="description last">LOV array of objects with these properties
<h6 id="properties-12">Properties</h6>
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
<th class="name" scope="row"><code>r</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Return value</td>
</tr>
<tr>
<th class="name" scope="row"><code>d</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Display value</td>
</tr>
<tr>
<th class="name" scope="row"><code>l</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional display value without markup. Only needed when display value includes markup if no l property and escape is false fall back to stripHTML on display value (d).</td>
</tr>
<tr>
<th class="name" scope="row"><code>i</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Icon CSS Classes for value</td>
</tr>
<tr>
<th class="name" scope="row"><code>g</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Indicates that this list item represents a group not a value.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>filterValues</code></th>
<td class="type">boolean</td>
<td class="description last">If true the user can filter the list of values to make it easy to find a particular value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>listClasses</code></th>
<td class="type">string</td>
<td class="description last">extra classes to add to the list grouping element</td>
</tr>
<tr>
<th class="name" scope="row"><code>showAllCount</code></th>
<td class="type">number</td>
<td class="description last">If the list contains more than this number of items a "Show all" control is shown. Only applies when <a href="facetsRegion.html#uiMode">facetsRegion#uiMode</a> is "F" (faceted search mode).</td>
</tr>
<tr>
<th class="name" scope="row"><code>showAllGrace</code></th>
<td class="type">number</td>
<td class="description last">Default 1. If the number of items is withing this amount of the showAllCount don't bother with showMore behavior. Only applies if showAllCount is given. This solves the problem of clicking show more/all only to find for example 1 more item.</td>
</tr>
<tr>
<th class="name" scope="row"><code>orderByCount</code></th>
<td class="type">boolean</td>
<td class="description last">If true the items are ordered by the count descending (after checked items if checkedFirst is true).</td>
</tr>
<tr>
<th class="name" scope="row"><code>checkedFirst</code></th>
<td class="type">boolean</td>
<td class="description last">If true any selected items are shown first. Not supported if values are grouped.</td>
</tr>
<tr>
<th class="name" scope="row"><code>disabledLast</code></th>
<td class="type">boolean</td>
<td class="description last">If true any disabled items are shown last. Only applies if hasFeedback is true. Not applicable if hideEmpty is true. Not supported if values are grouped.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hideRadioButton</code></th>
<td class="type">boolean</td>
<td class="description last">Only applies when multiple is false. Uses bold label rather than radio button to indicate selected item</td>
</tr>
<tr>
<th class="name" scope="row"><code>noManualEntry</code></th>
<td class="type">boolean</td>
<td class="description last">Only applies to rangeList. If true the manual range entry controls are not added.</td>
</tr>
<tr>
<th class="name" scope="row"><code>allowExclude</code></th>
<td class="type">boolean</td>
<td class="description last">If true a user can toggle the facet between include and exclude mode, the switch is displayed at control value level. When enabled the internal value of each control includes a preffix to indicate which mode is active, "E" for exclude and "I" for include. Read-only</td>
</tr>
<tr>
<th class="name" scope="row"><code>actionsFilter</code></th>
<td class="type">boolean</td>
<td class="description last">If true adds the action Filter to the facet context menu. The default is false. Only applies when <a href="facetsRegion.html#uiMode">facetsRegion#uiMode</a> is "F" (faceted search mode).</td>
</tr>
</tbody>
</table>

#### rangeControl

These are additional options for controls that allow a range defined by a start and end value. These options apply to the facet control types 'range' and 'rangeList' (unless noManualEntry is true).

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `allowOpen` | boolean | If true manual entry open ended ranges are allowed. Default false. |
| `prefixText` | string | Text to display before the range input fields. Example: "\$". |
| `suffixText` | string | Text to display after the range input fields. Example: "mph". |
| `rangeText` | string | Text displayed between the 2 range input fields. Example: " - ". |
| `currentLabel` | string | Label used for the current facets area. Example: "\$%0 to \$%1" |
| `currentLabelOpenHi` | string | Label used for the current facets area. Example: "Over \$%0" |
| `currentLabelOpenLow` | string | Label used for the current facets area. Example: "Under \$%0" |
| `min` | number | Minimum value user is allowed to enter. When dataType is number: |
| `max` | number | Maximum value user is allowed to enter. When dataType is number: |
| `step` | number | Number input step increment. When dataType is number: |
| `dataType` | string | The datatype of the value to enter and the facet value to compare with. The comparison operator is controlled by the server. One of "NUMBER", "VARCHAR2", "DATE", "TIMESTAMP", "TIMESTAMP_TZ", "TIMESTAMP_LTZ" |
| `formatMask` | string | Format Mask of the input when facet is based on dataType "DATE", "TIMESTAMP", "TIMESTAMP_TZ", "TIMESTAMP_LTZ" |

#### selectListControl

These are additional options for select list controls. These options apply to the facet control types 'selectList'.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `showCounts` | boolean | Default true. Only applicable if hasFeedback is true. |
| `hideEmpty` | boolean | If true values with 0 count are hidden if false values with 0 count are visually "disabled" |
| `lovDependsOn` | string | Parent cascading LOV parent facet name. When the parent changes, new values are requested from the server. |
| `lovDependsOnRequired` | boolean | If true the lovDependsOn parent must have a value for this facet to have any values. This only applies when lovDependsOn is specified. |
| `values` | Array.\<object\> | Same as for list type. |
| `nullLabel` | string | This is the label for the first option, which used to unselect all others. It represents no facet value selected. This is not the same as the List of Values: Include Null Option. Required. |
