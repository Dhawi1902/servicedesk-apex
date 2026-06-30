<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html -->
<!-- Widgets: tableModelViewBase -->

# Widget: tableModelViewBase

## QuickNav

### [Options](#members-section)

- [applyTemplateOptions](#applyTemplateOptions)
- [autoAddRecord](#autoAddRecord)
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
- [noDataIcon](#noDataIcon)
- [noDataMessage](#noDataMessage)
- [pagination](#pagination)
- [persistSelection](#persistSelection)
- [progressOptions](#progressOptions)
- [rowsPerPage](#rowsPerPage)
- [selectionStatusMessageKey](#selectionStatusMessageKey)
- [showNullAs](#showNullAs)
- [stickyFooter](#stickyFooter)
- [stickyTop](#stickyTop)
- [updateStatus](#updateStatus)

### [Methods](#methods-section)

- [fetchAllData](#fetchAllData)
- [finishEditing](#finishEditing)
- [firstPage](#firstPage)
- [getActiveRecord](#getActiveRecord)
- [getActiveRecordId](#getActiveRecordId)
- [getModel](#getModel)
- [getPageInfo](#getPageInfo)
- [gotoPage](#gotoPage)
- [lastPage](#lastPage)
- [loadMore](#loadMore)
- [lockActive](#lockActive)
- [nextPage](#nextPage)
- [previousPage](#previousPage)
- [setActiveRecordValue](#setActiveRecordValue)
- [unlockActive](#unlockActive)

### [Type Definitions](#typedefs-section)

- [pageInfo](#.pageInfo)

## tableModelViewBase

This is a base widget that supports pagination over a [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) as well as base support for model editing. It is not intended to be used directly. The examples may use a specific derived widget such as grid or a generic "derived-view". See the [grid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) and [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) widgets.

Any widget that uses column items to edit a model can benefit from the editing support in this base widget. Even if this base widget isn't used similar logic should be implemented for initializing column items, setting model values from the column items, setting column item values from the model, rendering read only view of model field values, and triggering the [apex.event:apexbeginrecordedit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexbeginrecordedit) and [apex.event:apexendrecordedit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexendrecordedit) events.

Since:
- 5.1

### Options

#### applyTemplateOptions :object

Options to pass to the [apex.util.applyTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.applyTemplate) function when processing any templates. See [apex.util.applyTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.applyTemplate) for details on the option properties.

##### Type:

- object

Default Value:
- {}

##### Examples

Initialize the derived-view with the applyTemplateOptions option specified.

```
$( ".selector" ).derived-view( {

    applyTemplateOptions: {
        // This example would enable you to use the placeholder #TODAY# in any templates.
        placeholders: { TODAY: (new Date()).toISOString() }
    }

} );
```

Get or set option applyTemplateOptions after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "applyTemplateOptions" );

// set

$( ".selector" ).derived-view( "option", "applyTemplateOptions", {
    // This example would enable you to use the placeholder #TODAY# in any templates.
    placeholders: { TODAY: (new Date()).toISOString() }
} );
```

#### autoAddRecord :boolean

Specifies if a new record should be automatically added when the model doesn't contain any data. If supported by the derived view a new record may be added when moving beyond the last record in the view while editing. Must only be true if the model and view are editable and the model allows adding records.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the derived-view with the autoAddRecord option specified.

```
$( ".selector" ).derived-view( {

    autoAddRecord: true

} );
```

Get or set option autoAddRecord after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "autoAddRecord" );

// set

$( ".selector" ).derived-view( "option", "autoAddRecord", true );
```

#### editable :boolean

Determine if the view allows editing. If true the [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) must also allow editing but if false the model could still allow editing. If true the view data can be edited according to what the model allows. Only applies if the view supports editing.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the derived-view with the editable option specified.

```
$( ".selector" ).derived-view( {

    editable: true

} );
```

Get or set option editable after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "editable" );

// set

$( ".selector" ).derived-view( "option", "editable", true );
```

#### (nullable) entityTitlePlural :string

This is the name of the singular form of the entity that is the subject of the report. This text is displayed in the total count message and in the selection count message.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the derived-view with the entityTitlePlural option specified.

```
$( ".selector" ).derived-view( {

    entityTitlePlural: "Customers"

} );
```

Get or set option entityTitlePlural after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "entityTitlePlural" );

// set

$( ".selector" ).derived-view( "option", "entityTitlePlural", "Employees" );
```

#### (nullable) entityTitleSingular :string

This is the singular form of the entity that is the subject of the report. This text is displayed in the total count message and in the selection count message.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the derived-view with the entityTitleSingular option specified.

```
$( ".selector" ).derived-view( {

    entityTitleSingular: "Customer"

} );
```

Get or set option entityTitleSingular after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "entityTitleSingular" );

// set

$( ".selector" ).derived-view( "option", "entityTitleSingular", "Employee" );
```

#### fixedRowHeight :boolean

Specify if all the rows will have the same height or variable heights.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the derived-view with the fixedRowHeight option specified.

```
$( ".selector" ).derived-view( {

    fixedRowHeight: false

} );
```

Get or set option fixedRowHeight after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "fixedRowHeight" );

// set

$( ".selector" ).derived-view( "option", "fixedRowHeight", false );
```

#### footer :boolean

Determine if the view will include a footer to show status and pagination controls and information. If true a footer is shown at the bottom of the view. If false no footer is shown.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the derived-view with the footer option specified.

```
$( ".selector" ).derived-view( {

    footer: false

} );
```

Get or set option footer after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "footer" );

// set

$( ".selector" ).derived-view( "option", "footer", false );
```

#### hasSize :boolean

This affects scrolling and how any header (if the view has a header) or footer position is handled.

Set to true if the view is in a container that has a specific height defined. When hasSize is true the record content will scroll within the bounds of the region.

Set to false if the view does not have a defined height. The view height will be as large as needed to contain the view records as determined by pagination settings. The view may scroll within the browser window. Other options may control if the header (if the view has a header) or footer sticks to the window.

The container width must always be defined.

##### Type:

- boolean

Default Value:
- false

##### Example

Initialize the derived-view with the hasSize option specified.

```
$( ".selector" ).derived-view( {

    hasSize: true

} );
```

#### hideDeletedRows :boolean

Determine if deleted rows (records) are removed from the view right away or shown with a visual effect to indicate they are going to be deleted. If true (and the view is editable) deleted records will not be visible, otherwise they are visible but have a visual indication that they are deleted. The actual records are not deleted on the server until the model is saved. The visual effect is determined by CSS rules and is typically strike through. See also [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) `onlyMarkForDelete` option.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the derived-view with the hideDeletedRows option specified.

```
$( ".selector" ).derived-view( {

    hideDeletedRows: true

} );
```

Get or set option hideDeletedRows after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "hideDeletedRows" );

// set

$( ".selector" ).derived-view( "option", "hideDeletedRows", true );
```

#### hideEmptyFooter :boolean

Hide the footer if there is no data. This only applies if `footer` is true.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the derived-view with the hideEmptyFooter option specified.

```
$( ".selector" ).derived-view( {

    hideEmptyFooter: true

} );
```

Get or set option hideEmptyFooter after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "hideEmptyFooter" );

// set

$( ".selector" ).derived-view( "option", "hideEmptyFooter", true );
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
<h6 id="properties-1">Properties</h6>
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

##### Examples

Initialize the derived-view with the highlights option specified.

```
$( ".selector" ).derived-view( {

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

let value = $( ".selector" ).derived-view( "option", "highlights" );

// set

$( ".selector" ).derived-view( "option", "highlights", {...} );
```

#### loadIncompleteSelection :string

Controls what happens when the selection is incomplete. When selection state is saved in the model, and because the model can fetch data on demand, it is possible to select records that are not yet loaded into the model resulting in an incomplete selection. This can happen when selecting all rows/items or when range selecting a large enough range.

Only applies if [tableModelViewBase#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#persistSelection) is true and with virtual pagination. The value is one of: "always", "never", or "on-demand". The default is "on-demand". When the selection is incomplete:

- "always": start fetching all the model data as soon as there is an incomplete selection
- "never": do nothing
- "on-demand": display a link for the user to click to cause all the model data to be fetched. The footer must be displayed for the user to access the link. If the footer is turned off and showing the selection count externally the developer is responsible for providing a button (or link) to load the model data on demand by calling [tableModelViewBase#fetchAllData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#fetchAllData). See also [tableModelViewBase#updateStatus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#updateStatus).

##### Type:

- string

Default Value:
- "on-demand"

##### Examples

Initialize the derived-view with the loadIncompleteSelection option specified.

```
$( ".selector" ).derived-view( {

    loadIncompleteSelection: "always"

} );
```

Initialize the derived-view with the loadIncompleteSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        loadIncompleteSelection: "always"
    };

    return options;

}
```

Initialize the derived-view with the loadIncompleteSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

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

let value = $( ".selector" ).derived-view( "option", "loadIncompleteSelection" );

// set

$( ".selector" ).derived-view( "option", "loadIncompleteSelection", "always" );
```

#### modelName :[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

Identifier of model that this view widget will display data from. Can include an instance as well. The model must already exist. This option is required. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) `modelId` argument.

##### Type:

- [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

##### Examples

Initialize the derived-view with the modelName option specified.

```
$( ".selector" ).derived-view( {

    modelName: [ "myModel", "1011" ]

} );
```

Get or set option modelName after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "modelName" );

// set

$( ".selector" ).derived-view( "option", "modelName", "myModel" );
```

#### noDataIcon :string

Icon to display when there is no data. The icon is displayed above the `noDataMessage` text.

##### Type:

- string

Default Value:
- "icon-irr-no-results"

##### Examples

Initialize the derived-view with the noDataIcon option specified.

```
$( ".selector" ).derived-view( {

    noDataIcon: "fa fa-warning"

} );
```

Get or set option noDataIcon after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "noDataIcon" );

// set

$( ".selector" ).derived-view( "option", "noDataIcon", "fa fa-warning" );
```

#### noDataMessage :string

Text to display when there is no data.

##### Type:

- string

Default Value:
- ""

##### Examples

Initialize the derived-view with the noDataMessage option specified.

```
$( ".selector" ).derived-view( {

    noDataMessage: "No employees found."

} );
```

Get or set option noDataMessage after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "noDataMessage" );

// set

$( ".selector" ).derived-view( "option", "noDataMessage", "No records found." );
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

##### Examples

Initialize the derived-view with the pagination option specified.

```
$( ".selector" ).derived-view( {

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

let value = $( ".selector" ).derived-view( "option", "pagination" );

// set

$( ".selector" ).derived-view( "option", "pagination", {...} );
```

#### persistSelection :boolean

If true and the view supports selection, the selection state for each row or item will be saved as record metadata in the model.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the derived-view with the persistSelection option specified.

```
$( ".selector" ).derived-view( {

    persistSelection: true

} );
```

Initialize the derived-view with the persistSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        persistSelection: true
    };

    return options;

}
```

Initialize the derived-view with the persistSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

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

let value = $( ".selector" ).derived-view( "option", "persistSelection" );

// set

$( ".selector" ).derived-view( "option", "persistSelection", true );
```

#### progressOptions :object

Options object to pass to [apex.util.showSpinner](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.showSpinner). The default depends on the `hasSize` option.

##### Type:

- object

Default Value:
- { fixed: !options.hasSize }

##### Examples

Initialize the derived-view with the progressOptions option specified.

```
$( ".selector" ).derived-view( {

    progressOptions: null

} );
```

Get or set option progressOptions after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "progressOptions" );

// set

$( ".selector" ).derived-view( "option", "progressOptions", null );
```

#### (nullable) rowsPerPage :number

Determine how many records to show in one page. Only applies if `pagination.scroll` is false or `pagination.loadMore` and `pagination.scroll` are both true, otherwise this value is ignored.

Note the name of this option is a little confusing because some views put more than one record on the same visual row. This value is the number of records (or items) shown on a page. For example if `rowsPerPage` is 10 and the view shows two records per row then there will be a total of 5 rows showing 10 records.

For traditional pagination this is the number of records to show in a report page. For load more pagination this is the number of records to add to the report. If null, the number of records is determined by the viewport height and the average row/item height. This works best if all the rows/items have the same fixed height.

##### Type:

- number

Default Value:
- null

##### Examples

Initialize the derived-view with the rowsPerPage option specified.

```
$( ".selector" ).derived-view( {

    rowsPerPage: 50

} );
```

Get or set option rowsPerPage after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "rowsPerPage" );

// set

$( ".selector" ).derived-view( "option", "rowsPerPage", 50 );
```

#### selectionStatusMessageKey :string

The text message key to use for showing the number of selected items/records in the footer. The message key must have exactly one parameter %0 which is replaced with the number of items/records selected. It is often better to use [tableModelViewBase#entityTitleSingular](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#entityTitleSingular) and [tableModelViewBase#entityTitlePlural](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#entityTitlePlural) rather than this option.

##### Type:

- string

Default Value:
- "APEX.TMV.SELECTION_COUNT"

##### Examples

Initialize the derived-view with the selectionStatusMessageKey option specified.

```
$( ".selector" ).derived-view( {

    selectionStatusMessageKey: "MY_SELECTION_MESSAGE"

} );
```

Get or set option selectionStatusMessageKey after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "selectionStatusMessageKey" );

// set

$( ".selector" ).derived-view( "option", "selectionStatusMessageKey", "MY_SELECTION_MESSAGE" );
```

#### showNullAs :string

Text to display when a field/column value is null or empty string.

##### Type:

- string

Default Value:
- "-"

##### Examples

Initialize the derived-view with the showNullAs option specified.

```
$( ".selector" ).derived-view( {

    showNullAs: "- null -"

} );
```

Get or set option showNullAs after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "showNullAs" );

// set

$( ".selector" ).derived-view( "option", "showNullAs", "- null -" );
```

#### stickyFooter :boolean

Determine if the footer will stick to the bottom of the page. Only applies if `hasSize` is false and `footer` is true. If false the footer will not stick to the bottom of the page. If true the footer will stick to the bottom of the page.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the derived-view with the stickyFooter option specified.

```
$( ".selector" ).derived-view( {

    stickyFooter: true

} );
```

Get or set option stickyFooter after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "stickyFooter" );

// set

$( ".selector" ).derived-view( "option", "stickyFooter", true );
```

#### stickyTop :boolean\|function

Determine if the header will stick to the top of the page as it scrolls.

Only applies if [tableModelViewBase#hasSize](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#hasSize) is false. If false the header will not stick to the page. If true or a function the header will stick to the top of the page using the undocumented `stickyWidget` widget. If the value is a function then it is passed to the `stickyWidget` as the top option.

##### Type:

- boolean \| function

Default Value:
- false

##### Examples

Initialize the derived-view with the stickyTop option specified.

```
$( ".selector" ).derived-view( {

    stickyTop: true

} );
```

Get or set option stickyTop after initialization.

```
// get

let value = $( ".selector" ).derived-view( "option", "stickyTop" );

// set

$( ".selector" ).derived-view( "option", "stickyTop", true );
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

Default Value:
- null

##### Example

Initialize the derived-view with the updateStatus option specified.

```
$( ".selector" ).derived-view( {

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

### Methods

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

#### finishEditing() → {Promise}

This method makes sure that the model is up to date with all current edits. While the active row is being edited it may at times be out of sync with the model.

Any code that wants to interact with the model should call this method to make sure the view and model are in sync and then interact with the model when the returned promise is resolved. You must still check for changes in the model. Just because the promise is resolved doesn't mean there were or are any changes.

Note: This does not affect any edit mode.

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

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the first page.

```
$( ".selector" ).grid( "firstPage" );
```

#### getActiveRecord() → {[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)}

Returns the active record or null if there is no active record. The active record is the one currently being edited.

##### Returns:

Active record.

Type
[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)

#### getActiveRecordId() → {string}

Returns the identity of the active record or null if there is no active record. The active record is the one currently being edited.

##### Returns:

Active record id.

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

#### lastPage() → {boolean}

Display the last page of records. If `pagination.scroll` is true simply scrolls to the bottom of the viewport and a new page of records is added if needed. If `pagination.scroll` is false and not already on the last page the view is refreshed and shows the last page. This method only works correctly if the model knows the total number of rows.

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

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

#### lockActive()

Call to lock the active row while async processing is in progress.

The view edits one row/record at a time. This is known as the active row. In edit mode as the user changes the focused cell with the mouse, tab or enter keys if the new cell is on a different row the previous row is deactivated and the new row is activated. Any dynamic actions or other code that manipulates Column items are acting on the active row. If any actions are asynchronous such as using Ajax to set a column item value then the row must not be deactivated while the async action is in progress otherwise the result would be applied to the wrong row!

So this method must be called before starting an async operation. It can be called multiple times if there are multiple async operations. For each call to `lockActive` there must be exactly one call to `unlockActive`. See also See [tableModelViewBase#unlockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#unlockActive)

If the view is part of an APEX region plugin, that region should implement the `beforeAsync` and `afterAsync` functions on the object returned from region#getSessionState by calling `lockActive` and `unlockActive` respectively. Then if an appropriate target option is passed to [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) then the locking will be done automatically. Dynamic Actions that act on column items pass the correct target option. The bottom line is that for Dynamic Actions on columns of an Interactive Grid these lock/unlock methods are called automatically.

##### Example

See [grid#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setActiveRecordValue) for an example.

#### nextPage() → {boolean}

Display the next page of records. If `pagination.scroll` is true the viewport scrolls down one page and records are added if needed. If `pagination.scroll` is false and not on the last page refresh the view to show the next page.

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

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

##### Example

This example goes to the previous page.

```
$( ".selector" ).grid( "previousPage" );
```

#### setActiveRecordValue(pColumn)

Use after a column item value is set without triggering a change event to update the model and grid view. Has no effect if there is no active record.

When a dynamic action or other event handler on a change event updates the value of the same item that triggered the change event, the change event from setting the value should be suppressed to avoid an infinite loop. However, the model is only updated from a change event. This method offers a solution to the model not being updated if the value is set asynchronously. Call this method anytime a column item is updated and the change event is suppressed.

##### Parameters:

| Name      | Type                                   | Description             |
|-----------|----------------------------------------|-------------------------|
| `pColumn` | string | The name of the column. |

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

#### unlockActive()

Call to unlock the active row after async processing is complete.

Call after the async operation completes. See [tableModelViewBase#lockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#lockActive) for more information.

##### Example

See [grid#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setActiveRecordValue) for an example.

### Type Definitions

#### pageInfo

An object with properties that describe the current pagination state.

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
<th class="name" scope="row"><code>rowHeight</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The height of a view row. Some views show multiple records per view row. If records have variable heights (option <a href="tableModelViewBase.html#fixedRowHeight">tableModelViewBase#fixedRowHeight</a> is false) then this is a running approximate average based on the rows currently rendered to the DOM.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordsPerRow</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The number of records displayed in a view row.</td>
</tr>
<tr>
<th class="name" scope="row"><code>firstOffset</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The 1 based offset of the first record in the page for 'page at a time' pagination.</td>
</tr>
<tr>
<th class="name" scope="row"><code>lastOffset</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The 1 based offset of the last record in the page for 'page at a time' pagination.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pageSize</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The number of records requested from the model and rendered at a time. For 'page at a time' pagination this is the number of records shown in a full report page and depends on option <a href="tableModelViewBase.html#rowsPerPage">tableModelViewBase#rowsPerPage</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pageOffset</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The 0 based offset of the page most recently retrieved from the model. For 'page at a time' pagination this is the current page.</td>
</tr>
<tr>
<th class="name" scope="row"><code>total</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The number of records in the report. Only present if the model knows the total number of records (model option <code class="prettyprint">hasTotalRecords</code> is true). See <a href="model.html#getServerTotalRecords">model#getServerTotalRecords</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>scrollOffset</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">This is the viewport scroll offset in pixels. Only present for scroll pagination.</td>
</tr>
<tr>
<th class="name" scope="row"><code>viewOffset</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The 0 based offset of the first record in the viewport. Only present for scroll pagination.</td>
</tr>
<tr>
<th class="name" scope="row"><code>currentPage</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The 0 based current page number. Only present for 'page at a time' pagination.</td>
</tr>
<tr>
<th class="name" scope="row"><code>totalPages</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The total number of pages. Only present for 'page at a time' pagination and when the model knows the total number of records (model option <code class="prettyprint">hasTotalRecords</code> is true).</td>
</tr>
</tbody>
</table>
