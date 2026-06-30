<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html -->
<!-- Widgets: recordView -->

# Widget: recordView

## QuickNav

### [Options](#members-section)

- [actionsContext](#actionsContext)
- [alwaysEdit](#alwaysEdit)
- [applyTemplateOptions](#applyTemplateOptions)
- [autoAddRecord](#autoAddRecord)
- [editable](#editable)
- [fieldGroups](#fieldGroups)
- [fields](#fields)
- [formCssClasses](#formCssClasses)
- [hasSize](#hasSize)
- [idPrefix](#idPrefix)
- [labelAlignment](#labelAlignment)
- [modelName](#modelName)
- [noDataIcon](#noDataIcon)
- [noDataMessage](#noDataMessage)
- [progressOptions](#progressOptions)
- [recordOffset](#recordOffset)
- [showExcludeHiddenFields](#showExcludeHiddenFields)
- [showExcludeNullValues](#showExcludeNullValues)
- [showNullAs](#showNullAs)
- [skipDeletedRecords](#skipDeletedRecords)
- [toolbar](#toolbar)

### [Events](#events-section)

- [modechange](#event:modechange)
- [recordchange](#event:recordchange)

### [Methods](#methods-section)

- [fieldElement](#fieldElement)
- [finishEditing](#finishEditing)
- [focus](#focus)
- [getActions](#getActions)
- [getActiveRecord](#getActiveRecord)
- [getActiveRecordId](#getActiveRecordId)
- [getFields](#getFields)
- [getModel](#getModel)
- [getRecord](#getRecord)
- [getToolbar](#getToolbar)
- [gotoField](#gotoField)
- [inEditMode](#inEditMode)
- [lockActive](#lockActive)
- [refresh](#refresh)
- [refreshFields](#refreshFields)
- [resize](#resize)
- [setActiveRecordValue](#setActiveRecordValue)
- [setEditMode](#setEditMode)
- [unlockActive](#unlockActive)

## recordView

RecordView is a dynamically generated form for displaying or editing a record from an APEX data [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html). It uses standard APEX column items to display and edit record fields.

The markup expected by this widget is simply an empty `<div>`. The record view displays and optionally edits data stored in an APEX data [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html). If the recordView is editable then the `<div>` must be proceeded by a `<div>` with class `u-vh` (to visually hide the contents) that contains each of the rendered column items. Each column item needs to be wrapped in a `<div>` with class `a-GV-columnItem`. See [grid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) for an example of the markup.

RecordView is designed to share the same column/field configuration and column items with a [grid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) widget, but it can also be used standalone. What the grid widget calls column configuration recordView calls field configuration.

### Editing

The record view can be editable or not editable. This is controlled by the [recordView#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#editable) option. If not editable then no UI is provided to do any editing, however it will still respond to any changes to the model data. The editable property can be changed after the record view is created provided the necessary column items are available on the page. See the [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) documentation for how it can be used to provide fine-grained control over what kinds of edits are allowed. The field definition can specify fields that are read-only. For a field to be editable the recordView must be editable, the row must be editable (as determined by the model), the field configuration must include property `elementId` and property `readonly` must not be true and the model field metadata must not have a checksum (`ck`) property.

Column Edit Items:
When the record view is editable and a field can be edited, it is a column item that does the editing. Column items are essentially the same as page items except they edit a column/field value rather than a page item. A grid and recordView on the same page can share the same column items as long as the two widgets are not visible or actively in edit mode at the same time.

### Actions

The recordView uses [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) to implement some functionality. This section lists each action along with a brief description. The actions are exposed through toolbar controls and menus.

Use the [recordView#getActions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#getActions) method to access the [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) context for the recordView.

| Name | Type | Description |
|----|----|----|
| delete-record | Action | Deletes the current record. |
| duplicate-record | Action | Duplicates the current record. The new duplicated record becomes current. |
| insert-record | Action | Inserts a new record after the current one. The new inserted record becomes current. |
| refresh-record | Action | Refreshes the current record with data from the server. |
| revert-record | Action | Reverts any changes made to the current record. |
| next-record | Action | Makes the next record the current record. |
| previous-record | Action | Makes the previous record the current record. |
| exclude-null-values | Toggle | Determines if the form shows fields with a null value. |
| exclude-hidden | Toggle | Determines if the form shows fields that have been hidden by some other view that shares the same field definitions. |

Pre-defined actions used by the recordView widget

### Initializer

#### \$(".selector").recordView(options)

Creates a recordView widget.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `options` | Object | A map of option-value pairs to set on the widget. |

Since:
- 5.1

##### Example

This example creates a very simple non-editable recordView with just two fields; Id and Name. Only the required options are given; all others will have their default value. The element with id myRecordForm is an empty div.

```
var fieldDefinitions = {
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
var data = [
    ["1022", "Betty"],
    ["1023", "James"],
    ...
];
apex.model.create( "myModel", {
    recordIsArray: true,
    fields: fieldDefinitions
}, data );
$( "#myRecordForm" ).recordView( {
    modelName: "myModel",
    fields: [  fieldDefinitions ]
} );
```

### Extends

- [tableModelViewBase](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html)

### Options

#### actionsContext :[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

Actions context to use. If null or not provided a new context is created. Specifying a context allows this widget to be contained within another one and share the same context. See [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) for information on what an actions context is and [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext) for how to create one.

##### Type:

- [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

Default Value:
- null

##### Examples

Initialize the recordView with the actionsContext option specified.

```
$( ".selector" ).recordView( {

    actionsContext: myContext

} );
```

Get or set option actionsContext after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "actionsContext" );

// set

$( ".selector" ).recordView( "option", "actionsContext", myContext );
```

#### alwaysEdit :boolean

Only applies if [recordView#editable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#editable) is true. If true, the recordView will start out in edit mode and double click, Enter, and Escape will not change the mode. Calling method [recordView#setEditMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#setEditMode) can still change the edit mode.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the recordView with the alwaysEdit option specified.

```
$( ".selector" ).recordView( {

    alwaysEdit: true

} );
```

Get or set option alwaysEdit after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "alwaysEdit" );

// set

$( ".selector" ).recordView( "option", "alwaysEdit", true );
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

Initialize the recordView with the applyTemplateOptions option specified.

```
$( ".selector" ).recordView( {

    applyTemplateOptions: {
        // This example would enable you to use the placeholder #TODAY# in any templates.
        placeholders: { TODAY: (new Date()).toISOString() }
    }

} );
```

Get or set option applyTemplateOptions after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "applyTemplateOptions" );

// set

$( ".selector" ).recordView( "option", "applyTemplateOptions", {
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

Initialize the recordView with the autoAddRecord option specified.

```
$( ".selector" ).recordView( {

    autoAddRecord: true

} );
```

Get or set option autoAddRecord after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "autoAddRecord" );

// set

$( ".selector" ).recordView( "option", "autoAddRecord", true );
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

Initialize the recordView with the editable option specified.

```
$( ".selector" ).recordView( {

    editable: true

} );
```

Get or set option editable after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "editable" );

// set

$( ".selector" ).recordView( "option", "editable", true );
```

#### fieldGroups :Object

Defines headings that fields are grouped together under. Fields specify which group they belong under with the [recordView#fields](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#fields) `groupName` property. A recordView can have one level of headings.

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
<td class="description last">The property name is the field group name. This name is referenced from a <a href="recordView.html#fields">recordView#fields</a> <code class="prettyprint">groupName</code> property. The property values are field group definitions.
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
<th class="name" scope="row"><code>heading</code></th>
<td class="type">string</td>
<td class="description last">The text of the field group header. The heading is only used if <code class="prettyprint">label</code> is not given. Markup is escaped.</td>
</tr>
<tr>
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="description last">Same as <code class="prettyprint">heading</code> but markup not allowed. The label is used in preference to the heading.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

This example shows initializing the recordView with "First" name and "Last" name fields that are grouped under heading "Name".

```
$( ".selector" ).recordView( {
    fields[{
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
    }],
    fieldGroups: {
        NAME: {
            label: "Name"
        },
        ...
    }
} );
```

#### fields :Array.\<object\>

Defines the fields in the recordView form. These fields are also fields in the model. The value is an array of exactly one object that maps the field name to a field definition object. The properties are the field names. The property value is a field definition. Wrapping the object in an array simply keeps the widget from making a copy of the fields so that the same definition can be shared.

The same structure can be shared with the view [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) and a [grid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) widget. This option is required.

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
<td class="description last">The property is the field name. By convention it is the uppercase database column name. The value is an object that defines the field. All properties are optional unless specified otherwise.
<h6 id="properties-3">Properties</h6>
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
<td class="description last">Column item name (id of DOM element) used to edit this field or null if not editable.</td>
</tr>
<tr>
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="description last">The label text of the field. Does not allow markup. At least one of label or <code class="prettyprint">heading</code> should be specified.</td>
</tr>
<tr>
<th class="name" scope="row"><code>heading</code></th>
<td class="type">string</td>
<td class="description last">The text of the field header. This is used if the <code class="prettyprint">label</code> is not given but markup is escaped.</td>
</tr>
<tr>
<th class="name" scope="row"><code>fieldCssClasses</code></th>
<td class="type">string</td>
<td class="description last">Extra CSS classes to apply to the field</td>
</tr>
<tr>
<th class="name" scope="row"><code>fieldColSpan</code></th>
<td class="type">integer</td>
<td class="description last">Integer between 1 and 12 specifying how many layout grid columns the field will span. This can be used to put two (or more) fields side by side.</td>
</tr>
<tr>
<th class="name" scope="row"><code>cellTemplate</code></th>
<td class="type">string</td>
<td class="description last">An HTML template that defines the field content. See <a href="apex.util.html#.applyTemplate">apex.util.applyTemplate</a> for template syntax. The substitutions are field names from this field configuration or fields from any parent models and they are replaced with data values from the current record of the model.</td>
</tr>
<tr>
<th class="name" scope="row"><code>escape</code></th>
<td class="type">boolean</td>
<td class="description last">If false the column value may contain trusted markup otherwise the column value is escaped.</td>
</tr>
<tr>
<th class="name" scope="row"><code>seq</code></th>
<td class="type">number</td>
<td class="description last">Determines the order of the field among all the others. Lower numbers come first.</td>
</tr>
<tr>
<th class="name" scope="row"><code>groupName</code></th>
<td class="type">string</td>
<td class="description last">Name of field group. See <a href="recordView.html#fieldGroups">recordView#fieldGroups</a> and <code class="prettyprint">useGroupFor</code>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>useGroupFor</code></th>
<td class="type">string</td>
<td class="description last">If not present or if the string contains "srv" then the group given in <code class="prettyprint">groupName</code> will be used. This allows the same field definition to be shared with multiple kinds of views so that the <code class="prettyprint">groupName</code> is used by other views but not this recordView.</td>
</tr>
<tr>
<th class="name" scope="row"><code>canHide</code></th>
<td class="type">boolean</td>
<td class="description last">Determines if the user is allowed to show or hide the field. If true the user can choose to hide or show the field. If false the user cannot change the hidden state.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hidden</code></th>
<td class="type">boolean</td>
<td class="description last">If true the field is hidden otherwise it is shown.</td>
</tr>
<tr>
<th class="name" scope="row"><code>readonly</code></th>
<td class="type">boolean</td>
<td class="description last">If true the field cannot be edited. Note: The <a href="model.html">model</a> has additional criteria for when a field value can be edited.</td>
</tr>
<tr>
<th class="name" scope="row"><code>linkText</code></th>
<td class="type">string</td>
<td class="description last">Only for fields that contain a link. This is the anchor content. Allows markup. Allows substitutions just like the <code class="prettyprint">cellTemplate</code> property. If not given the rendered display value of this field is used as the content. If the display value of the field is empty then the link URL is used. To display a link, at least one of <code class="prettyprint">linkTargetColumn</code> or the field metadata <code class="prettyprint">url</code> property must be given. Note: if the field is editable it is always the data value of the field that is edited. So if you want to edit the link text it is best to omit linkText and use <code class="prettyprint">linkTargetColumn</code>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>linkTargetColumn</code></th>
<td class="type">string</td>
<td class="description last">The name of the field that contains the anchor <code class="prettyprint">href</code>. If not given the <code class="prettyprint">href</code> comes from the field metadata <code class="prettyprint">url</code> property. If there is no <code class="prettyprint">url</code> property then this field is not a link.</td>
</tr>
<tr>
<th class="name" scope="row"><code>linkAttributes</code></th>
<td class="type">string</td>
<td class="description last">Only for fields that contain a link. Additional anchor attributes. Allows substitutions just like the <code class="prettyprint">cellTemplate</code> property.</td>
</tr>
<tr>
<th class="name" scope="row"><code>isRequired</code></th>
<td class="type">boolean</td>
<td class="description last">If true this field is required when editing. This should correspond with the required setting of the underlying editable column item.</td>
</tr>
<tr>
<th class="name" scope="row"><code>helpid</code></th>
<td class="type">string</td>
<td class="description last">Help id for the field. If present there will be a help icon button and keyboard shortcut (Alt+F1) to access help text for the field.</td>
</tr>
<tr>
<th class="name" scope="row"><code>virtual</code></th>
<td class="type">boolean</td>
<td class="description last">If true the field is completely ignored by the recordView widget.</td>
</tr>
<tr>
<th class="name" scope="row"><code>property</code></th>
<td class="type">string</td>
<td class="description last">Do not specify this property. It is added automatically and the value is the field name.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

Initialize the recordView with the fields option specified.

```
$( ".selector" ).recordView( {

    fields: [ {
     NAME: {
         label: "Name",
         seq: 1,
         hidden: false,
         isRequired: true,
         escape: true
     },
     ....
 } ]

} );
```

#### formCssClasses :string

CSS classes to add to the form wrapper divs.

##### Type:

- string

Default Value:
- true

##### Examples

Initialize the recordView with the formCssClasses option specified.

```
$( ".selector" ).recordView( {

    formCssClasses: "u-Form--labelsAbove u-Form--stretchInputs"

} );
```

Get or set option formCssClasses after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "formCssClasses" );

// set

$( ".selector" ).recordView( "option", "formCssClasses", "u-Form--labelsAbove u-Form--stretchInputs" );
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

Initialize the recordView with the hasSize option specified.

```
$( ".selector" ).recordView( {

    hasSize: true

} );
```

#### idPrefix :string

The prefix to use when generating ids. To avoid duplicate element ids either give the widget element an `id` attribute or specify this property.

##### Type:

- string

Default Value:
- element id or "rv"

##### Examples

Initialize the recordView with the idPrefix option specified.

```
$( ".selector" ).recordView( {

    idPrefix: "r1"

} );
```

Get or set option idPrefix after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "idPrefix" );

// set

$( ".selector" ).recordView( "option", "idPrefix", "r1" );
```

#### labelAlignment :string

Controls how form field labels are aligned. One of "start", "end", "center", "left", "right".

##### Type:

- string

Default Value:
- "end"

##### Examples

Initialize the recordView with the labelAlignment option specified.

```
$( ".selector" ).recordView( {

    labelAlignment: "start"

} );
```

Get or set option labelAlignment after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "labelAlignment" );

// set

$( ".selector" ).recordView( "option", "labelAlignment", "start" );
```

#### modelName :[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

Identifier of model that this view widget will display data from. Can include an instance as well. The model must already exist. This option is required. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) `modelId` argument.

##### Type:

- [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

Inherited From:
- [tableModelViewBase#modelName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#modelName)

##### Examples

Initialize the recordView with the modelName option specified.

```
$( ".selector" ).recordView( {

    modelName: [ "myModel", "1011" ]

} );
```

Get or set option modelName after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "modelName" );

// set

$( ".selector" ).recordView( "option", "modelName", "myModel" );
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

Initialize the recordView with the noDataIcon option specified.

```
$( ".selector" ).recordView( {

    noDataIcon: "fa fa-warning"

} );
```

Get or set option noDataIcon after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "noDataIcon" );

// set

$( ".selector" ).recordView( "option", "noDataIcon", "fa fa-warning" );
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

Initialize the recordView with the noDataMessage option specified.

```
$( ".selector" ).recordView( {

    noDataMessage: "No employees found."

} );
```

Get or set option noDataMessage after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "noDataMessage" );

// set

$( ".selector" ).recordView( "option", "noDataMessage", "No records found." );
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

Initialize the recordView with the progressOptions option specified.

```
$( ".selector" ).recordView( {

    progressOptions: null

} );
```

Get or set option progressOptions after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "progressOptions" );

// set

$( ".selector" ).recordView( "option", "progressOptions", null );
```

#### recordOffset :number

Zero based index of record in model to display/edit in this recordView.

##### Type:

- number

Default Value:
- 0

##### Examples

Initialize the recordView with the recordOffset option specified.

```
$( ".selector" ).recordView( {

    recordOffset: 22

} );
```

Get or set option recordOffset after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "recordOffset" );

// set

$( ".selector" ).recordView( "option", "recordOffset", 22 );
```

#### showExcludeHiddenFields :boolean

If true the user will have the option to exclude fields that are hidden.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the recordView with the showExcludeHiddenFields option specified.

```
$( ".selector" ).recordView( {

    showExcludeHiddenFields: false

} );
```

Get or set option showExcludeHiddenFields after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "showExcludeHiddenFields" );

// set

$( ".selector" ).recordView( "option", "showExcludeHiddenFields", false );
```

#### showExcludeNullValues :boolean

If true the user will have the option to exclude fields that have a null value.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the recordView with the showExcludeNullValues option specified.

```
$( ".selector" ).recordView( {

    showExcludeNullValues: false

} );
```

Get or set option showExcludeNullValues after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "showExcludeNullValues" );

// set

$( ".selector" ).recordView( "option", "showExcludeNullValues", false );
```

#### showNullAs :string

Text to display when the value is null or empty string.

##### Type:

- string

Overrides:
- [tableModelViewBase#showNullAs](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#showNullAs)

Default Value:
- "-"

##### Examples

Initialize the recordView with the showNullAs option specified.

```
$( ".selector" ).recordView( {

    showNullAs: "- unknown -"

} );
```

Get or set option showNullAs after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "showNullAs" );

// set

$( ".selector" ).recordView( "option", "showNullAs", "- unknown -" );
```

#### skipDeletedRecords :boolean

If true (and the recordView is editable) deleted records/rows will be skipped over; the next non-deleted record is shown. Otherwise, they are visible but have a visual indication that they are deleted. This has no effect if the model deletes records right away.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the recordView with the skipDeletedRecords option specified.

```
$( ".selector" ).recordView( {

    skipDeletedRecords: true

} );
```

Get or set option skipDeletedRecords after initialization.

```
// get

let value = $( ".selector" ).recordView( "option", "skipDeletedRecords" );

// set

$( ".selector" ).recordView( "option", "skipDeletedRecords", true );
```

#### toolbar :object

Toolbar options. A default toolbar is provided. If null then there will be no toolbar.

##### Type:

- object

### Events

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
<h6 id="properties-5">Properties</h6>
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

Initialize the recordView with the `modeChange` callback specified:

```
$( ".selector" ).recordView({
    modeChange: function( event, data ) {}
});
```

Bind an event listener to the `recordviewmodechange` event:

```
$( ".selector" ).on( "recordviewmodechange", function( event, data ) {} );
```

#### recordchange

Triggered when the current record changes.

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
<h6 id="properties-7">Properties</h6>
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
<th class="name" scope="row"><code>recordOffset</code></th>
<td class="type">number</td>
<td class="description last">The zero based model offset of the record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordId</code></th>
<td class="type">number</td>
<td class="description last">The id of the record.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Initialize the recordView with the `recordChange` callback specified:

```
$( ".selector" ).recordView({
    recordChange: function( event, data ) {}
});
```

Bind an event listener to the `recordviewrecordchange` event:

```
$( ".selector" ).on( "recordviewrecordchange", function( event, data ) {} );
```

### Methods

#### fieldElement(pFieldName) → {\*}

Given a pFieldName (field/column name) return the jQuery object for the element that wraps the label and the field.

##### Parameters:

| Name         | Type | Description       |
|--------------|------|-------------------|
| `pFieldName` |      | field/column name |

##### Returns:

jQuery object

Type
\*

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

#### focus()

Give focus to the recordView. Focus is given to the first field.

##### Example

Focus the recordView.

```
$( ".selector" ).recordView( "focus" );
```

#### getActions() → {[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)}

Returns the actions context for this recordView instance. See [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) for details on how to use the actions context.

##### Returns:

The actions context for this instance.

Type
[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

##### Examples

This example gets the action context and invokes the "next-record" action.

```
var actions = $( ".selector" ).recordView( "getActions" );
actions.invoke( "next-record" );
```

To get a list of all actions from the browser JavaScript console.

```
console.log( JSON.stringify( $( ".selector" ).recordView( "getActions" ).list(), null, 4 ) );
```

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

#### getFields() → {Array}

Get the field definitions in order.

##### Returns:

Array of field definition objects.

Type
Array

#### getModel() → {[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)}

Return the model currently being used by this view. The model can change over time so the returned model should not be saved and used later. If you need to store a reference to the model use [apex.model.get](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.get) and release it with [apex.model.release](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.release).

Inherited From:
- [tableModelViewBase#getModel](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#getModel)

##### Returns:

The current [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html).

Type
[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

#### getRecord() → {[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)}

Returns the current model record that this view is viewing/editing.

##### Returns:

The current record from the model that the recordView is viewing/editing

Type
[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)

#### getToolbar() → {jQuery}

Returns the toolbar widget element.

##### Returns:

jQuery object of the recordView toolbar or null if there is no toolbar.

Type
jQuery

#### gotoField(pRecordId, pFieldopt)

Put focus in the field given by `pRecordId` and `pField`. This is used to focus records and fields that have errors. This will change the current record as needed to focus the field. The record must be in the model. If `pField` is null then the first field is focused.

##### Parameters:

<table class="params" aria-label="Parameters for gotoField">
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
<td class="type">String</td>
<td class="attributes"></td>
<td class="description last">The record id of the record to go to.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pField</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Name of the field to go to.</td>
</tr>
</tbody>
</table>

##### Example

Focus the NAME field of the record with id "0100091".

```
$( ".selector" ).recordView( "gotoField", "0100091", "NAME" );
```

#### inEditMode() → {boolean}

Determine if recordView is in edit mode. See also [recordView#setEditMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#setEditMode)

##### Returns:

true if in edit mode and false otherwise.

Type
boolean

##### Example

This example logs a message if the recordView is in edit mode.

```
if ( $( ".selector" ).recordView( "inEditMode" ) ) {
    console.log("In edit mode");
}
```

#### lockActive()

Call to lock the active row while async processing is in progress.

The view edits one row/record at a time. This is known as the active row. In edit mode as the user changes the focused cell with the mouse, tab or enter keys if the new cell is on a different row the previous row is deactivated and the new row is activated. Any dynamic actions or other code that manipulates Column items are acting on the active row. If any actions are asynchronous such as using Ajax to set a column item value then the row must not be deactivated while the async action is in progress otherwise the result would be applied to the wrong row!

So this method must be called before starting an async operation. It can be called multiple times if there are multiple async operations. For each call to `lockActive` there must be exactly one call to `unlockActive`. See also See [tableModelViewBase#unlockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#unlockActive)

If the view is part of an APEX region plugin, that region should implement the `beforeAsync` and `afterAsync` functions on the object returned from region#getSessionState by calling `lockActive` and `unlockActive` respectively. Then if an appropriate target option is passed to [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) then the locking will be done automatically. Dynamic Actions that act on column items pass the correct target option. The bottom line is that for Dynamic Actions on columns of an Interactive Grid these lock/unlock methods are called automatically.

Inherited From:
- [tableModelViewBase#lockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#lockActive)

##### Example

See [grid#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setActiveRecordValue) for an example.

#### refresh(pFocusopt)

Refreshes the recordView with data from the model. This method is rarely needed because it is called automatically when the model changes, widget options change, or when the record changes.

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
<td class="description last">If true put focus in the recordView.</td>
</tr>
</tbody>
</table>

#### refreshFields()

Let the recordView know that field metadata has changed so that the next time it is refreshed all the fields will be rendered. Call this method after any [recordView#fields](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#fields) metadata has changed external to this widget. Refresh must be called after this but typically this happens due to the [model#event:refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:refresh) notification.

#### resize()

Call this method anytime the container that the recordView is in changes its size.

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

#### setEditMode(pEditMode)

Set the current edit mode. Should only be used if the recordView model is editable. Triggers [recordView#event:modechange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html#event:modechange) event.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pEditMode` | boolean | If true enter edit mode if false enter display-only mode. |

##### Example

This example enters edit mode.

```
$( ".selector" ).recordView( "setEditMode", true );
```

#### unlockActive()

Call to unlock the active row after async processing is complete.

Call after the async operation completes. See [tableModelViewBase#lockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#lockActive) for more information.

Inherited From:
- [tableModelViewBase#unlockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#unlockActive)

##### Example

See [grid#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setActiveRecordValue) for an example.
