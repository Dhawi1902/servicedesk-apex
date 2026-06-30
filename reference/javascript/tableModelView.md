<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html -->
<!-- Widgets: tableModelView -->

# Widget: tableModelView

## QuickNav

### [Options](#members-section)

- [accLabelColumn](#accLabelColumn)
- [afterTemplate](#afterTemplate)
- [aggregateTemplate](#aggregateTemplate)
- [allowCopy](#allowCopy)
- [applyTemplateOptions](#applyTemplateOptions)
- [autoAddRecord](#autoAddRecord)
- [beforeTemplate](#beforeTemplate)
- [clipboardValue](#clipboardValue)
- [collectionClasses](#collectionClasses)
- [constrainNavigation](#constrainNavigation)
- [controlBreakAfterTemplate](#controlBreakAfterTemplate)
- [controlBreakBeforeTemplate](#controlBreakBeforeTemplate)
- [controlBreakSelector](#controlBreakSelector)
- [controlBreakTemplate](#controlBreakTemplate)
- [editable](#editable)
- [entityTitlePlural](#entityTitlePlural)
- [entityTitleSingular](#entityTitleSingular)
- [fixedRowHeight](#fixedRowHeight)
- [footer](#footer)
- [hasSize](#hasSize)
- [headerTemplate](#headerTemplate)
- [hideDeletedRows](#hideDeletedRows)
- [hideEmptyFooter](#hideEmptyFooter)
- [highlights](#highlights)
- [iconClassColumn](#iconClassColumn)
- [iconListOptions](#iconListOptions)
- [imageAttributes](#imageAttributes)
- [imageURLColumn](#imageURLColumn)
- [itemNavigationMode](#itemNavigationMode)
- [itemSelector](#itemSelector)
- [labelColumn](#labelColumn)
- [linkAttributes](#linkAttributes)
- [linkTarget](#linkTarget)
- [linkTargetColumn](#linkTargetColumn)
- [loadIncompleteSelection](#loadIncompleteSelection)
- [modelName](#modelName)
- [multiple](#multiple)
- [noDataIcon](#noDataIcon)
- [noDataMessage](#noDataMessage)
- [pagination](#pagination)
- [persistSelection](#persistSelection)
- [progressOptions](#progressOptions)
- [recordTemplate](#recordTemplate)
- [rowsPerPage](#rowsPerPage)
- [selectAll](#selectAll1)
- [selectAllId](#selectAllId)
- [selectionStateItem](#selectionStateItem)
- [selectionStatusMessageKey](#selectionStatusMessageKey)
- [showNullAs](#showNullAs)
- [stickyFooter](#stickyFooter)
- [stickyTop](#stickyTop)
- [syncHeaderHScroll](#syncHeaderHScroll)
- [updateStatus](#updateStatus)
- [useIconList](#useIconList)

### [Events](#events-section)

- [currentitemchange](#event:currentitemchange)
- [pagechange](#event:pagechange)
- [selectionchange](#event:selectionchange)

### [Methods](#methods-section)

- [fetchAllData](#fetchAllData)
- [finishEditing](#finishEditing)
- [firstPage](#firstPage)
- [focus](#focus)
- [getActiveRecord](#getActiveRecord)
- [getActiveRecordId](#getActiveRecordId)
- [getCurrentItem](#getCurrentItem)
- [getCurrentItemValue](#getCurrentItemValue)
- [getIconList](#getIconList)
- [getModel](#getModel)
- [getPageInfo](#getPageInfo)
- [getRecords](#getRecords)
- [getSelectedRecords](#getSelectedRecords)
- [getSelectedValues](#getSelectedValues)
- [getSelection](#getSelection)
- [gotoPage](#gotoPage)
- [lastPage](#lastPage)
- [loadMore](#loadMore)
- [lockActive](#lockActive)
- [nextPage](#nextPage)
- [previousPage](#previousPage)
- [refresh](#refresh)
- [resize](#resize)
- [selectAll](#selectAll2)
- [setActiveRecordValue](#setActiveRecordValue)
- [setCurrentItem](#setCurrentItem)
- [setCurrentItemValue](#setCurrentItemValue)
- [setSelectedRecords](#setSelectedRecords)
- [setSelectedValues](#setSelectedValues)
- [setSelection](#setSelection)
- [unlockActive](#unlockActive)

## tableModelView

A template driven UI widget report view for table shape data in an APEX [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) that supports pagination, selection, and control breaks. Derived from [tableModelViewBase](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html). It does not directly support editing but does respond to model changes. The contents of the report are called items (not to be confused with APEX Page Items or Column Items). The items represent the records from the model. This kind of report is also known as a "list view" or "cards view" depending on what the items look like.

Note: Not all the options and methods from the base widget apply to this widget. For example options and methods related to editing do not apply.

The expected markup is an empty element; typically a `<div>`.

There are two ways to define the item markup for the view. Configure with options [tableModelView#beforeTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#beforeTemplate), [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate), and [tableModelView#afterTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#afterTemplate) for complete control over the markup. Or configure with options [tableModelView#iconClassColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#iconClassColumn), [tableModelView#imageURLColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#imageURLColumn), [tableModelView#imageAttributes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#imageAttributes), [tableModelView#labelColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#labelColumn), [tableModelView#linkTarget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#linkTarget), [tableModelView#linkTargetColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#linkTargetColumn), and [tableModelView#linkAttributes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#linkAttributes) for default list markup.

### Selection, keyboard navigation, and focus management

The view supports optional focus management and single or multiple selection. This is controlled by the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) and [tableModelView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#multiple) options. When focus or selection is enabled the report manages the focus so that only a single item is a tab stop and arrow keys are used to move the focus to other items. If an item contains elements such as links or buttons that also take focus then just those elements in the currently focused item can be tabbed to. For multiple selection standard keyboard modifiers Shift and Ctrl are combined with arrow keys or mouse clicks to select multiple items. See the [Keyboard End User Information](#keyboard-section) section for details.

The selection state can be accessed with methods such as [tableModelView#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getSelectedRecords) and changed with methods such as [tableModelView#setSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#setSelectedRecords). The [tableModelView#selectionStateItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectionStateItem) option specifies an APEX page item that will have its value updated to reflect the current selection.

### Template markup

Templates are processed with [apex.util.applyTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.applyTemplate) and can contain data substitutions, placeholders, and template directives. See [apex.util.applyTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.applyTemplate) for details. See each of the template options ([tableModelView#headerTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#headerTemplate), [tableModelView#beforeTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#beforeTemplate), [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate), [tableModelView#aggregateTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#aggregateTemplate), [tableModelView#controlBreakTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakTemplate), [tableModelView#controlBreakBeforeTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakBeforeTemplate), [tableModelView#controlBreakAfterTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakAfterTemplate), and [tableModelView#afterTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#afterTemplate)) for details on any special substitutions or placeholders. See [tableModelView#applyTemplateOptions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#applyTemplateOptions) for how to pass additional options to `applyTemplate`.

There are a few requirements for the template markup so that the report view functions correctly and is accessible. The following markup patterns are supported:

- **Layout grid** This is a collection element with role="grid" containing elements with role="row" and each row element contains exactly one item element with role="gridcell". This is the most accessible pattern especially when using selection. The "grid" role element requires an accessible label. The "gridcell" element requires an `aria-label` attribute that identifies the item. Typically, you would use a data substitution of the same column that is given in the [tableModelView#accLabelColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#accLabelColumn) option. Example:

  ``` prettyprint
  <ul role="grid" aria-label="My Report">   <!-- beforeTemplate -->
    <li role="row">                         <!-- recordTemplate -->
        ...
    </li>
  </ul>                                     <!-- afterTemplate -->
  ```

- **Simple list** This is a collection element with items as the children elements. Typically this is a `<ul>` containing `<li>`s, but it could also be a `<div>` with `<p>` children, for example. Example:

  ``` prettyprint
  <ul class="my-list-view">      <!-- beforeTemplate -->
    <li class="my-item">         <!-- recordTemplate -->
        ...
    </li>
  </ul>                          <!-- afterTemplate -->
  ```

- **Simple table** This is table markup where the `<tbody>` element is the collection element and the items are the `<tr>` elements. Example:

  ``` prettyprint
  <table><tbody>           <!-- beforeTemplate -->
    <tr class="my-item">   <!-- recordTemplate -->
        ...
    </tr>
  </tbody></table>         <!-- afterTemplate -->
  ```

In the above examples the item element has class "my-item", so ".my-item" is the value to set for option [tableModelView#itemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemSelector). Any class or other selector can be used. It is the item element that is returned by or passed to the various selection methods. The item element must have attributes `data-id` and `data-rownum` with values from substitution symbols `&APEX$ROW_ID.` and `&APEX$ROW_INDEX.` respectively. Or more simply by using the `#APEX$ROW_IDENTIFICATION#` placeholder as shown in the example below.

If the report will support selection and a selector control is desired add the `#APEX$SELECTOR#` placeholder somewhere within the item element in the recordTemplate. This placeholder will be replaced with the appropriate markup for either a radio button or checkbox depending on if single or multiple selection is configured.

Control breaks (also known as groups) allow visually grouping related items together. The model data must be configured to have control breaks. Note that the model does not actually contain records that represent the control break. The breaks are synthesized in the view layer when the model data has a change in value of control break columns. There are two cases:

1.  An item in the collection can serve as a heading providing visual context to the items after it. This is known as flat grouping. This case uses the [tableModelView#controlBreakTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakTemplate) option.

2.  Two level nested markup can be used such as a list of lists or a layout grid of layout grids. The first level represents the groups and the second level is the items in each group. The group element contains the item elements as descendents. This is known as nested grouping. This case uses the [tableModelView#controlBreakBeforeTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakBeforeTemplate) and [tableModelView#controlBreakAfterTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakAfterTemplate) options.

    Note: Nested groups do not work with virtual scroll pagination or with aggregate records.

For flat grouping the only change to the minimal markup is having a way to identify that an item is also a group. In the above examples the item element would change as follows:

```
    <li role="row">    <!-- controlBreakTemplate -->
          ...
    </li>
```

or

```
    <li class="my-item my-group">    <!-- controlBreakTemplate -->
      ...
    </li>
```

or

```
    <tr class="my-item my-group">    <!-- controlBreakTemplate -->
      ...
    </tr>
```

In the above examples the "my-group" class indicates that the element is a group so ".my-group" is the value to set for option [tableModelView#controlBreakSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakSelector). The group item typically contains a group heading or label for the group and is visually distinguished from items.

For nested grouping the group element contains an element that acts as a heading for the group and a container element that contains the items. The heading element must be the first child of the group element. The group heading need not be an HTML heading element. An \<h4\> is just used as an example below.

The following example is for a simple list of lists:

```
<ul>    <!-- beforeTemplate -->
    <li class="my-group">    <!-- controlBreakBeforeTemplate -->
        <h4>This is the header for the &GROUP_COLUMN.</h4>
        <ul> <!-- container for the items in the group -->
            <li class="my-item">    <!-- recordTemplate -->
              ...
            </li>
        </ul>    <!-- controlBreakAfterTemplate -->
        <!-- any text or markup here is not included in navigation or selection, so may not be accessible -->
    </li>
</ul>    <!-- afterTemplate -->
```

The following example is for a layout grid of layout grids:

```
<ul role="grid" aria-label="Example List">    <!-- beforeTemplate -->
    <li role="row">    <!-- controlBreakBeforeTemplate -->
            <h4>This is the header for the &GROUP_COLUMN.</h4>
            <ul role="grid" aria-label="Group &GROUP_COLUMN!ATTR."> <!-- container for the items in the group -->
                <li role="row">    <!-- recordTemplate -->
                      ...
                </li>
            </ul> <!-- controlBreakAfterTemplate -->
        <!-- any markup here is not included in navigation or selection -->
    </li>
</ul>    <!-- afterTemplate -->
```

In both cases the group element must have attributes `data-group-id` and `data-rownum` with values from substitution symbols `&APEX$GROUP_ID.` and `&APEX$ROW_INDEX.` respectively. Or more simply by using the `#APEX$GROUP_IDENTIFICATION#` placeholder.

Group items can never be selected but they can be focused. A selector control is not supported in group items. Group items can have arbitrary markup including links and buttons. Keyboard navigation is treated the same as for items.

### Keyboard End User Information

| Key         | Action                                         |
|-------------|------------------------------------------------|
| Up Arrow    | Moves focus or selection to the previous item. |
| Down Arrow  | Moves focus or selection to the next item.     |
| Left Arrow  | Moves focus or selection to the previous item. |
| Right Arrow | Moves focus or selection to the next item.     |
| Home        | Moves focus or selection to the first item.    |
| End         | Moves focus or selection to the last item.     |
| Space       | Selects the focused item                       |
| Ctrl+A      | Selects all items if allowed.                  |

List of keyboard shortcuts

These keys are only supported when focus or selection is enabled ([tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) is not "none"). Space and Ctrl+A only apply for multiple selection. For multiple selection the Ctrl and Shift keys modify how the arrow, Home, and End keys and Space key affect the selection. The Shift key extends the selection to include the new item. The Ctrl key moves focus without changing the selection. The Space key selects the currently focused item. Ctrl+Space will toggle selection for the current item.

### CSS Classes

Most of the classes are provided by the template configuration, however there are a few classes added by this widget that you can use in your CSS rules.

| Class | Purpose |
|----|----|
| a-TMV | The root widget element. |
| a-TMV-item | Item element class only if [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate) is null. |
| is-selected | A state class on selected item elements. |
| is-focused | A state class on the focused (current) item element. |

List of CSS Classes used by tableModelView widget

### Initializer

#### \$(".selector").tableModelView(options)

Creates a tableModelView widget.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `options` | Object | A map of option-value pairs to set on the widget. |

Since:
- 5.1

##### Example

Create a tableModelView for name value pairs displayed in a simple table.

```
  var fields = {
          PARTNO: {
              index: 0
          },
          PART_DESC: {
              index: 1
          }
      },
      data = [
          ["B-10091", "Spark plug"],
          ["A-12872", "Radiator hose"],
          ...
      ];
  apex.model.create("parts", {
          shape: "table",
          recordIsArray: true,
          fields: fields,
          paginationType: "progressive"
      }, data, data.length );
  $("#partsView").tableModelView( {
      modelName: "parts",
      beforeTemplate: '<table class="u-Report"><thead><tr><th>Part No</th><th>Description</th></tr></thead><tbody>',
      afterTemplate: '</tbody></table>',
      recordTemplate: '<tr #APEX$ROW_IDENTIFICATION#><td>&PARTNO.</td><td>&PART_DESC.</td></tr>',
      pagination: {
          scroll: true
      }
  } );
```

### Extends

- [tableModelViewBase](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html)

### Options

#### (nullable) accLabelColumn :string

Name of the column that contains the value that identifies the item for use in accessible labels.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the accLabelColumn option specified.

```
$( ".selector" ).tableModelView( {

    accLabelColumn: "EMP_NAME"

} );
```

Get or set option accLabelColumn after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "accLabelColumn" );

// set

$( ".selector" ).tableModelView( "option", "accLabelColumn", "EMP_NAME" );
```

#### afterTemplate :string

Markup to render after the report items. The markup must include elements that close the opening elements from the [tableModelView#beforeTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#beforeTemplate) option. For example `</ul>`.

##### Type:

- string

Default Value:
- "\</ul\>"

##### Examples

Initialize the tableModelView with the afterTemplate option specified.

```
$( ".selector" ).tableModelView( {

    afterTemplate: "</ol>"

} );
```

Get or set option afterTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "afterTemplate" );

// set

$( ".selector" ).tableModelView( "option", "afterTemplate", "</ol>" );
```

#### aggregateTemplate :string

Markup to render for an aggregate record. This should only be set if the model data contains aggregate records. In addition, you use the following special substitution symbols:

- APEX\$ROW_ID - The record id from the model as if from model#recordId.
- APEX\$ROW_INDEX - The record index
- APEX\$AGG - The name of the aggregate function. One of: "COUNT", "COUNT_DISTINCT", "SUM", "AVG", "MIN" ,"MAX", "MEDIAN"
- APEX\$AGG_TOTAL - This is true ("Y") when the aggregate record is a grand total and false ("") otherwise.

These are the available placeholders:

- APEX\$ROW_IDENTIFICATION - Markup for data-id and data-rownum attributes. Easier than providing your own markup using APEX\$ROW_ID and APEX\$ROW_INDEX.

See also [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate).

##### Type:

- string

Default Value:
- ""

##### Examples

Initialize the tableModelView with the aggregateTemplate option specified.

```
$( ".selector" ).tableModelView( {

    aggregateTemplate: "<li #APEX$ROW_IDENTIFICATION#>{case APEX$AGG/}{when SUM/}Total:</b> &SALARY.{endcase/}</li>"

} );
```

Get or set option aggregateTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "aggregateTemplate" );

// set

$( ".selector" ).tableModelView( "option", "aggregateTemplate", "<li #APEX$ROW_IDENTIFICATION#>{case APEX$AGG/}{when SUM/}Total:</b> &SALARY.{endcase/}</li>" );
```

#### allowCopy :boolean

If true the selection can be copied to the clipboard using the browsers copy event. This can only be set at initialization time.

This option only applies when [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) is "select".

##### Type:

- boolean

Default Value:
- true

##### Example

Initialize the tableModelView with the allowCopy option specified.

```
$( ".selector" ).tableModelView( {

    allowCopy: false

} );
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

Initialize the tableModelView with the applyTemplateOptions option specified.

```
$( ".selector" ).tableModelView( {

    applyTemplateOptions: {
        // This example would enable you to use the placeholder #TODAY# in any templates.
        placeholders: { TODAY: (new Date()).toISOString() }
    }

} );
```

Get or set option applyTemplateOptions after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "applyTemplateOptions" );

// set

$( ".selector" ).tableModelView( "option", "applyTemplateOptions", {
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

Initialize the tableModelView with the autoAddRecord option specified.

```
$( ".selector" ).tableModelView( {

    autoAddRecord: true

} );
```

Get or set option autoAddRecord after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "autoAddRecord" );

// set

$( ".selector" ).tableModelView( "option", "autoAddRecord", true );
```

#### beforeTemplate :string

Markup to render before the report items. The markup must include an opening element that will contain all the records/items. For example `<ul>`.

These are the available placeholders:

- APEX\$HAS_SELECTOR - "Y" if the report supports selection.

See also [tableModelView#afterTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#afterTemplate) and [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate).

##### Type:

- string

Default Value:
- "\<ul\>"

##### Examples

Initialize the tableModelView with the beforeTemplate option specified.

```
$( ".selector" ).tableModelView( {

    beforeTemplate: "<ol>"

} );
```

Get or set option beforeTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "beforeTemplate" );

// set

$( ".selector" ).tableModelView( "option", "beforeTemplate", "<ol>" );
```

#### clipboardValue :function

A function that allows control over how an item is copied to the clipboard. The function signature is `clipboardValue( index, item$, model, record, recordId ) -> jQuery`

Only applies when [tableModelView#allowCopy](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#allowCopy) is true.

When copying items to the clipboard the item's inner text is coped for the "text/plain" format and the item's inner HTML is copied for the "text/html" format. This callback function allows changing what gets put on the clipboard by returning a substitute item as a jQuery object. Either the item\$ passed in can be cloned and then modified or a new jQuery object can be created using data from the model record passed in. The inputs must not be modified.

##### Type:

- function

Default Value:
- null

##### Examples

The following function returns a new element wrapped in a jQuery object with data from the record to copy to the clipboard. The model has columns NAME and PHONE.

```
$( ".selector" ).tableModelView( "option", "clipboardValue", function( index, item$, model, record, recordId ) {
    return $( `<li>${model.getValue(record, "NAME")}
        ${model.getValue(record, "PHONE")}
        </li>` );
} );
```

The following function returns a clone of the input item\$ with buttons removed because it is not useful to copy the text or markup of buttons to the clipboard.

```
$( ".selector" ).tableModelView( "option", "clipboardValue", function( index, item$, model, record, recordId ) {
    let temp$ = item$.clone();

    temp$.find( "button" ).remove();
    return temp$;
} );
```

#### (nullable) collectionClasses :string

Extra CSS classes to add to the element that is the parent of the collection of records.

##### Type:

- string

Default Value:
- "a-TMV-defaultIconView" if [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate) is null and null otherwise.

##### Examples

Initialize the tableModelView with the collectionClasses option specified.

```
$( ".selector" ).tableModelView( {

    collectionClasses: "EmployeeList"

} );
```

Get or set option collectionClasses after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "collectionClasses" );

// set

$( ".selector" ).tableModelView( "option", "collectionClasses", "EmployeeList" );
```

#### constrainNavigation :boolean

Normally keydown handling will call preventDefault so that arrow key navigation has no effect outside this control. This prevents text selection and keeps parent elements from scrolling. By setting this to false it allows a nested container to respond to arrow navigation keys.

This option only applies when [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) is not "none".

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the tableModelView with the constrainNavigation option specified.

```
$( ".selector" ).tableModelView( {

    constrainNavigation: false

} );
```

Get or set option constrainNavigation after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "constrainNavigation" );

// set

$( ".selector" ).tableModelView( "option", "constrainNavigation", false );
```

#### controlBreakAfterTemplate :string

Markup to render after a group of items/rows defined by a control break. This template should include any markup needed to close nesting introduced in [tableModelView#controlBreakBeforeTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakBeforeTemplate). This should only be set if the model data has control breaks.

##### Type:

- string

Default Value:
- ""

##### Examples

Initialize the tableModelView with the controlBreakAfterTemplate option specified.

```
$( ".selector" ).tableModelView( {

    controlBreakAfterTemplate: "</ul></li>"

} );
```

Get or set option controlBreakAfterTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "controlBreakAfterTemplate" );

// set

$( ".selector" ).tableModelView( "option", "controlBreakAfterTemplate", "</ul></li>" );
```

#### controlBreakBeforeTemplate :string

Markup to render before a group of items/rows defined by a control break. This should only be set if the model data has control breaks. This option requires the [tableModelView#controlBreakSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakSelector) and [tableModelView#itemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemSelector) options be set.

The `controlBreakBeforeTemplate` and `controlBreakAfterTemplate` templates are used together to create one level of nested list report markup. They can't be combined with [tableModelView#controlBreakTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakTemplate). Nested control break markup cannot currently be combined with aggregates so the [tableModelView#aggregateTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#aggregateTemplate) option must not be used in combination.

This template should typically include the control break heading and the start of any nesting markup. The template should only reference control break columns. This template supports the following special substitution symbols:

- APEX\$GROUP_ID - The control break id. See [model#getControlBreakId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getControlBreakId).
- APEX\$ROW_INDEX - The control break index, which is the same as the first record in the control break.

These are the available placeholders:

- APEX\$GROUP_IDENTIFICATION - Markup for data-group-id and data-rownum attributes. Easier than providing your own markup using APEX\$GROUP_ID and APEX\$ROW_INDEX.

See also [tableModelView#controlBreakAfterTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakAfterTemplate), [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate).

##### Type:

- string

Default Value:
- ""

##### Examples

Initialize the tableModelView with the controlBreakBeforeTemplate option specified.

```
$( ".selector" ).tableModelView( {

    controlBreakBeforeTemplate: "<li #APEX$GROUP_IDENTIFICATION#><h4>&CATEGORY%heading. &CATEGORY.</h4><ul>"

} );
```

Get or set option controlBreakBeforeTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "controlBreakBeforeTemplate" );

// set

$( ".selector" ).tableModelView( "option", "controlBreakBeforeTemplate", "<li #APEX$GROUP_IDENTIFICATION#><h4>&CATEGORY%heading. &CATEGORY.</h4><ul>" );
```

#### (nullable) controlBreakSelector :string

A CSS selector that selects the outermost control break item element in the view collection. This is required if the report has control breaks. See also [Template markup](#markup-section).

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the controlBreakSelector option specified.

```
$( ".selector" ).tableModelView( {

    controlBreakSelector: ".my-card-group"

} );
```

Get or set option controlBreakSelector after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "controlBreakSelector" );

// set

$( ".selector" ).tableModelView( "option", "controlBreakSelector", ".my-card-group" );
```

#### controlBreakTemplate :string

Markup to render for a control break. This should only be set if the model data has control breaks. This option requires the [tableModelView#controlBreakSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#controlBreakSelector) option be set. The template should only reference control break columns. In addition, you can use the following special substitution symbols:

- APEX\$GROUP_ID - The control break id. See [model#getControlBreakId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getControlBreakId).
- APEX\$ROW_INDEX - The control break index, which is the same as the first record in the control break.

These are the available placeholders:

- APEX\$GROUP_IDENTIFICATION - Markup for data-group-id and data-rownum attributes. Easier than providing your own markup using APEX\$GROUP_ID and APEX\$ROW_INDEX.

See also [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate).

##### Type:

- string

Default Value:
- ""

##### Examples

Initialize the tableModelView with the controlBreakTemplate option specified.

```
$( ".selector" ).tableModelView( {

    controlBreakTemplate: "<li #APEX$GROUP_IDENTIFICATION#><h4>&CATEGORY%heading. &CATEGORY.</h4></li>"

} );
```

Get or set option controlBreakTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "controlBreakTemplate" );

// set

$( ".selector" ).tableModelView( "option", "controlBreakTemplate", "<li #APEX$GROUP_IDENTIFICATION#><h4>&CATEGORY%heading. &CATEGORY.</h4></li>" );
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

Initialize the tableModelView with the editable option specified.

```
$( ".selector" ).tableModelView( {

    editable: true

} );
```

Get or set option editable after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "editable" );

// set

$( ".selector" ).tableModelView( "option", "editable", true );
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

Initialize the tableModelView with the entityTitlePlural option specified.

```
$( ".selector" ).tableModelView( {

    entityTitlePlural: "Customers"

} );
```

Get or set option entityTitlePlural after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "entityTitlePlural" );

// set

$( ".selector" ).tableModelView( "option", "entityTitlePlural", "Employees" );
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

Initialize the tableModelView with the entityTitleSingular option specified.

```
$( ".selector" ).tableModelView( {

    entityTitleSingular: "Customer"

} );
```

Get or set option entityTitleSingular after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "entityTitleSingular" );

// set

$( ".selector" ).tableModelView( "option", "entityTitleSingular", "Employee" );
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

Initialize the tableModelView with the fixedRowHeight option specified.

```
$( ".selector" ).tableModelView( {

    fixedRowHeight: false

} );
```

Get or set option fixedRowHeight after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "fixedRowHeight" );

// set

$( ".selector" ).tableModelView( "option", "fixedRowHeight", false );
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

Initialize the tableModelView with the footer option specified.

```
$( ".selector" ).tableModelView( {

    footer: false

} );
```

Get or set option footer after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "footer" );

// set

$( ".selector" ).tableModelView( "option", "footer", false );
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

Initialize the tableModelView with the hasSize option specified.

```
$( ".selector" ).tableModelView( {

    hasSize: true

} );
```

#### headerTemplate :string

Optional markup for a header to render before the report. The header does not scroll with the report and depending on `stickyTop` option may stick to the top of the page. See also option [tableModelView#syncHeaderHScroll](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#syncHeaderHScroll).

These are the available placeholders:

- APEX\$HAS_SELECTOR - "Y" if the report supports selection.
- APEX\$HAS_SELECT_ALL - "Y" if the report supports select all.

##### Type:

- string

Default Value:
- ""

##### Examples

Initialize the tableModelView with the headerTemplate option specified.

```
$( ".selector" ).tableModelView( {

    headerTemplate: "<h4>My Report</h4>"

} );
```

Get or set option headerTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "headerTemplate" );

// set

$( ".selector" ).tableModelView( "option", "headerTemplate", "<h4>My Report</h4>" );
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

Initialize the tableModelView with the hideDeletedRows option specified.

```
$( ".selector" ).tableModelView( {

    hideDeletedRows: true

} );
```

Get or set option hideDeletedRows after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "hideDeletedRows" );

// set

$( ".selector" ).tableModelView( "option", "hideDeletedRows", true );
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

Initialize the tableModelView with the hideEmptyFooter option specified.

```
$( ".selector" ).tableModelView( {

    hideEmptyFooter: true

} );
```

Get or set option hideEmptyFooter after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "hideEmptyFooter" );

// set

$( ".selector" ).tableModelView( "option", "hideEmptyFooter", true );
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

Inherited From:
- [tableModelViewBase#highlights](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#highlights)

##### Examples

Initialize the tableModelView with the highlights option specified.

```
$( ".selector" ).tableModelView( {

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

let value = $( ".selector" ).tableModelView( "option", "highlights" );

// set

$( ".selector" ).tableModelView( "option", "highlights", {...} );
```

#### (nullable) iconClassColumn :string

The CSS class column to use for the icon. At most one of `iconClassColumn` and `imageURLColumn` should be given.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the iconClassColumn option specified.

```
$( ".selector" ).tableModelView( {

    iconClassColumn: "PERSON_AVATAR"

} );
```

Get or set option iconClassColumn after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "iconClassColumn" );

// set

$( ".selector" ).tableModelView( "option", "iconClassColumn", "PERSON_AVATAR" );
```

#### iconListOptions :object

Additional options to pass to the [iconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html) widget. See [iconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html) for information about the options it supports. Only applies if [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

##### Type:

- object

Deprecated:
- Yes

Default Value:
- {}

#### (nullable) imageAttributes :string

Attributes for the `<img>` element. Only used if [tableModelView#imageURLColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#imageURLColumn) is specified.

##### Type:

- string

Default Value:
- null

#### (nullable) imageURLColumn :string

The URL column of image to use for the icon. At most one of `iconClassColumn` and `imageURLColumn` should be given.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the imageURLColumn option specified.

```
$( ".selector" ).tableModelView( {

    imageURLColumn: "PROD_IMAGE_URL"

} );
```

Get or set option imageURLColumn after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "imageURLColumn" );

// set

$( ".selector" ).tableModelView( "option", "imageURLColumn", "PROD_IMAGE_URL" );
```

#### itemNavigationMode :string

Controls how the focus and selection state is handled for items in the report. It can be one of these values:

- **none** - The report does not support focus or selection.
- **focus** - The report supports focus state. Focus can be moved among the items of the report using keyboard or mouse.
- **select** - The report supports focus and selection state. A selection control such as a checkbox is not required but if one is desired it must be included in the template markup. Use the \#APEX\$SELECTOR# placeholder in the [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate) option.

Except when this value is "none", only one item in the report at a time is in the keyboard tab order. and the arrow keys are used to move among the items.

When set to "focus" or "select" the [tableModelView#itemSelector](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemSelector) option is required. When [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) is true this is forced to "none" because the icon list handles selection.

See also [tableModelView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#multiple) and [Template markup](#markup-section).

##### Type:

- string

Default Value:
- "none"

##### Examples

Initialize the tableModelView with the itemNavigationMode option specified.

```
$( ".selector" ).tableModelView( {

    itemNavigationMode: "select"

} );
```

Get or set option itemNavigationMode after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "itemNavigationMode" );

// set

$( ".selector" ).tableModelView( "option", "itemNavigationMode", "select" );
```

#### (nullable) itemSelector :string

A CSS selector that selects the outermost item element in the view collection. This is required if [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) is not "none". See also [Template markup](#markup-section).

##### Type:

- string

Default Value:
- "a-TMV-item" if [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate) is null and null otherwise.

##### Examples

Initialize the tableModelView with the itemSelector option specified.

```
$( ".selector" ).tableModelView( {

    itemSelector: ".my-card-item"

} );
```

Get or set option itemSelector after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "itemSelector" );

// set

$( ".selector" ).tableModelView( "option", "itemSelector", ".my-card-item" );
```

#### (nullable) labelColumn :string

Name of the column that contains the label text.

At a minimum one of [tableModelView#labelColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#labelColumn) or [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate) is required.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the labelColumn option specified.

```
$( ".selector" ).tableModelView( {

    labelColumn: "EMP_NAME"

} );
```

Get or set option labelColumn after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "labelColumn" );

// set

$( ".selector" ).tableModelView( "option", "labelColumn", "EMP_NAME" );
```

#### (nullable) linkAttributes :string

Additional anchor attributes. Ignored unless a link is present.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the linkAttributes option specified.

```
$( ".selector" ).tableModelView( {

    linkAttributes: "target='_blank'"

} );
```

Get or set option linkAttributes after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "linkAttributes" );

// set

$( ".selector" ).tableModelView( "option", "linkAttributes", "target='_blank'" );
```

#### linkTarget :boolean

If true the record metadata should contain a `url` property that contains the link target.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the tableModelView with the linkTarget option specified.

```
$( ".selector" ).tableModelView( {

    linkTarget: true

} );
```

Get or set option linkTarget after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "linkTarget" );

// set

$( ".selector" ).tableModelView( "option", "linkTarget", true );
```

#### (nullable) linkTargetColumn :string

The name of the column that contains the anchor `href`. If not given the `href` comes from the record field metadata `url` property. If there is no `url` property then this item has no link.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the linkTargetColumn option specified.

```
$( ".selector" ).tableModelView( {

    linkTargetColumn: "PROD_TARGET"

} );
```

Get or set option linkTargetColumn after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "linkTargetColumn" );

// set

$( ".selector" ).tableModelView( "option", "linkTargetColumn", "PROD_TARGET" );
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

Initialize the tableModelView with the loadIncompleteSelection option specified.

```
$( ".selector" ).tableModelView( {

    loadIncompleteSelection: "always"

} );
```

Initialize the tableModelView with the loadIncompleteSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        loadIncompleteSelection: "always"
    };

    return options;

}
```

Initialize the tableModelView with the loadIncompleteSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

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

let value = $( ".selector" ).tableModelView( "option", "loadIncompleteSelection" );

// set

$( ".selector" ).tableModelView( "option", "loadIncompleteSelection", "always" );
```

#### modelName :[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

Identifier of model that this view widget will display data from. Can include an instance as well. The model must already exist. This option is required. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) `modelId` argument.

##### Type:

- [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

Inherited From:
- [tableModelViewBase#modelName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#modelName)

##### Examples

Initialize the tableModelView with the modelName option specified.

```
$( ".selector" ).tableModelView( {

    modelName: [ "myModel", "1011" ]

} );
```

Get or set option modelName after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "modelName" );

// set

$( ".selector" ).tableModelView( "option", "modelName", "myModel" );
```

#### multiple :boolean

If true multiple items can be selected otherwise only a single item can be selected.

This option only applies when [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) is "select". See also [tableModelView#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAll1).

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the tableModelView with the multiple option specified.

```
$( ".selector" ).tableModelView( {

    multiple: true

} );
```

Get or set option multiple after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "multiple" );

// set

$( ".selector" ).tableModelView( "option", "multiple", true );
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

Initialize the tableModelView with the noDataIcon option specified.

```
$( ".selector" ).tableModelView( {

    noDataIcon: "fa fa-warning"

} );
```

Get or set option noDataIcon after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "noDataIcon" );

// set

$( ".selector" ).tableModelView( "option", "noDataIcon", "fa fa-warning" );
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

Initialize the tableModelView with the noDataMessage option specified.

```
$( ".selector" ).tableModelView( {

    noDataMessage: "No employees found."

} );
```

Get or set option noDataMessage after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "noDataMessage" );

// set

$( ".selector" ).tableModelView( "option", "noDataMessage", "No records found." );
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

Initialize the tableModelView with the pagination option specified.

```
$( ".selector" ).tableModelView( {

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

let value = $( ".selector" ).tableModelView( "option", "pagination" );

// set

$( ".selector" ).tableModelView( "option", "pagination", {...} );
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

Initialize the tableModelView with the persistSelection option specified.

```
$( ".selector" ).tableModelView( {

    persistSelection: true

} );
```

Initialize the tableModelView with the persistSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        persistSelection: true
    };

    return options;

}
```

Initialize the tableModelView with the persistSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

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

let value = $( ".selector" ).tableModelView( "option", "persistSelection" );

// set

$( ".selector" ).tableModelView( "option", "persistSelection", true );
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

Initialize the tableModelView with the progressOptions option specified.

```
$( ".selector" ).tableModelView( {

    progressOptions: null

} );
```

Get or set option progressOptions after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "progressOptions" );

// set

$( ".selector" ).tableModelView( "option", "progressOptions", null );
```

#### recordTemplate :string

Markup to render for each record. Can use substitution tokens from the model using column names. In addition, you can use the following special substitution symbols:

- APEX\$ROW_ID - The record id
- APEX\$ROW_INDEX - The record index
- APEX\$ROW_URL - The record url if any
- APEX\$ROW_STATE_CLASSES - Various record states such as "is-inserted" or "is-deleted"
- APEX\$VALIDATION_MESSAGE - If the record is in a validation error or warning state this is the associated message

These are the available placeholders:

- APEX\$SELECTOR - Markup for a selector control when using single or multiple selection.
- APEX\$ROW_IDENTIFICATION - Markup for data-id and data-rownum attributes. Easier than providing your own markup using APEX\$ROW_ID and APEX\$ROW_INDEX.

See also the widget description for more information about markup requirements.

At a minimum one of [tableModelView#labelColumn](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#labelColumn) or [tableModelView#recordTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#recordTemplate) is required.

See also [tableModelView#beforeTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#beforeTemplate) and [tableModelView#afterTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#afterTemplate).

##### Type:

- string

Default Value:
- Markup depends on several other options.

##### Examples

Initialize the tableModelView with the recordTemplate option specified.

```
$( ".selector" ).tableModelView( {

    recordTemplate: "<li #APEX$ROW_IDENTIFICATION#>&NAME. - &SALARY.</li>"

} );
```

Get or set option recordTemplate after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "recordTemplate" );

// set

$( ".selector" ).tableModelView( "option", "recordTemplate", "<li #APEX$ROW_IDENTIFICATION#>&NAME. - &SALARY.</li>" );
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

Initialize the tableModelView with the rowsPerPage option specified.

```
$( ".selector" ).tableModelView( {

    rowsPerPage: 50

} );
```

Get or set option rowsPerPage after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "rowsPerPage" );

// set

$( ".selector" ).tableModelView( "option", "rowsPerPage", 50 );
```

#### selectAll :boolean

If true then all the items in the current page or all rendered items or all items in the model, depending on pagination settings, can be selected with Ctrl+A or a select all checkbox (if one is provided with [tableModelView#selectAllId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAllId)) or using the [tableModelView#selectAll(2)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAll2) method.

Only applies when [tableModelView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#multiple) is true.

When [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) is false only items that are rendered to the DOM can be selected with Select All. For traditional paging this means that all the items in the current page can be selected. For any kind of scroll pagination, only the items that have already been and are currently rendered to the DOM can be selected.

When [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) is true the selection state is kept in the model and only records currently loaded in the model can be selected. The [tableModelView#loadIncompleteSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#loadIncompleteSelection) option controls if and how additional records are loaded in the model so that the selection becomes complete.

##### Type:

- boolean

Default Value:
- true

##### Examples

Initialize the tableModelView with the selectAll option specified.

```
$( ".selector" ).tableModelView( {

    selectAll: false

} );
```

Get or set option selectAll after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "selectAll" );

// set

$( ".selector" ).tableModelView( "option", "selectAll", false );
```

#### (nullable) selectAllId :string

This is the id of an element used to select all items. It has checkbox semantics. When all items are selected the checkbox is checked, otherwise it is unchecked. If it is unchecked, clicking it will select all items. If it is checked, clicking it will unselect all items.

This only applies if [tableModelView#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAll1) is true.

The expected markup is an input of type=checkbox or a span with checkbox role.

### Example of input markup:

```
<input id="extSelAll" type="checkbox"><label for="extSelAll">Select All</label>
```

### Example of span with checkbox role markup:

```
Select All
```

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the selectAllId option specified.

```
$( ".selector" ).tableModelView( {

    selectAllId: "extSelAll"

} );
```

Get or set option selectAllId after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "selectAllId" );

// set

$( ".selector" ).tableModelView( "option", "selectAllId", "extSelAll" );
```

#### (nullable) selectionStateItem :string

Name of an APEX page item that will receive the selection state each time the selection changes. Typically, this is the name of a hidden page item and is used to process the selection on the server with a PL/SQL code process.

The format of the selection state value is a ":" separated string of the selected report items' record identity.

##### Type:

- string

Default Value:
- null

##### Examples

Initialize the tableModelView with the selectionStateItem option specified.

```
$( ".selector" ).tableModelView( {

    selectionStateItem: "P1_REPORT_SELECTION"

} );
```

Get or set option selectionStateItem after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "selectionStateItem" );

// set

$( ".selector" ).tableModelView( "option", "selectionStateItem", "P1_REPORT_SELECTION" );
```

#### selectionStatusMessageKey :string

The text message key to use for showing the number of selected items/records in the footer. The message key must have exactly one parameter %0 which is replaced with the number of items/records selected. It is often better to use [tableModelViewBase#entityTitleSingular](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#entityTitleSingular) and [tableModelViewBase#entityTitlePlural](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#entityTitlePlural) rather than this option.

##### Type:

- string

Inherited From:
- [tableModelViewBase#selectionStatusMessageKey](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#selectionStatusMessageKey)

Default Value:
- "APEX.TMV.SELECTION_COUNT"

##### Examples

Initialize the tableModelView with the selectionStatusMessageKey option specified.

```
$( ".selector" ).tableModelView( {

    selectionStatusMessageKey: "MY_SELECTION_MESSAGE"

} );
```

Get or set option selectionStatusMessageKey after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "selectionStatusMessageKey" );

// set

$( ".selector" ).tableModelView( "option", "selectionStatusMessageKey", "MY_SELECTION_MESSAGE" );
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

Initialize the tableModelView with the showNullAs option specified.

```
$( ".selector" ).tableModelView( {

    showNullAs: "- null -"

} );
```

Get or set option showNullAs after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "showNullAs" );

// set

$( ".selector" ).tableModelView( "option", "showNullAs", "- null -" );
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

Initialize the tableModelView with the stickyFooter option specified.

```
$( ".selector" ).tableModelView( {

    stickyFooter: true

} );
```

Get or set option stickyFooter after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "stickyFooter" );

// set

$( ".selector" ).tableModelView( "option", "stickyFooter", true );
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

Initialize the tableModelView with the stickyTop option specified.

```
$( ".selector" ).tableModelView( {

    stickyTop: true

} );
```

Get or set option stickyTop after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "stickyTop" );

// set

$( ".selector" ).tableModelView( "option", "stickyTop", true );
```

#### syncHeaderHScroll :boolean

If there is a [tableModelView#headerTemplate](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#headerTemplate) and this is true the horizontal scroll offset will be synchronized between the header and the view body. This is useful in cases such as a table where the header columns need to align with the body columns.

##### Type:

- boolean

Default Value:
- false

##### Examples

Initialize the tableModelView with the syncHeaderHScroll option specified.

```
$( ".selector" ).tableModelView( {

    syncHeaderHScroll: true

} );
```

Get or set option syncHeaderHScroll after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "syncHeaderHScroll" );

// set

$( ".selector" ).tableModelView( "option", "syncHeaderHScroll", true );
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

Initialize the tableModelView with the updateStatus option specified.

```
$( ".selector" ).tableModelView( {

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

#### useIconList :boolean

If true use the [iconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html) widget to display the records. The iconList widget supports selection but does not support the [tableModelView#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAll1), [tableModelView#selectionStateItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectionStateItem), or [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) options or the [tableModelView#getCurrentItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getCurrentItem) method.

##### Type:

- boolean

Deprecated:
- Yes

Default Value:
- false

##### Examples

Initialize the tableModelView with the useIconList option specified.

```
$( ".selector" ).tableModelView( {

    useIconList: true

} );
```

Get or set option useIconList after initialization.

```
// get

let value = $( ".selector" ).tableModelView( "option", "useIconList" );

// set

$( ".selector" ).tableModelView( "option", "useIconList", true );
```

### Events

#### currentitemchange

Triggered when the current item changes. It has no additional data. Only tableModelViews with [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) = "select" or "focus" will trigger this event.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Examples

Initialize the tableModelView with the `currentItemChange` callback specified:

```
$( ".selector" ).tableModelView({
    currentItemChange: function( event ) {}
});
```

Bind an event listener to the `tablemodelviewcurrentitemchange` event:

```
$( ".selector" ).on( "tablemodelviewcurrentitemchange", function( event ) {} );
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

Initialize the tableModelView with the `pageChange` callback specified:

```
$( ".selector" ).tableModelView({
    pageChange: function( event, data ) {}
});
```

Bind an event listener to the `tablemodelviewpagechange` event:

```
$( ".selector" ).on( "tablemodelviewpagechange", function( event, data ) {} );
```

#### selectionchange

Triggered when the selection state changes. It has no additional data. Only tableModelViews with [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) = "select" or [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) true support selection.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Examples

Initialize the tableModelView with the `selectionChange` callback specified:

```
$( ".selector" ).tableModelView({
    selectionChange: function( event ) {}
});
```

Bind an event listener to the `tablemodelviewselectionchange` event:

```
$( ".selector" ).on( "tablemodelviewselectionchange", function( event ) {} );
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

Inherited From:
- [tableModelViewBase#fetchAllData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#fetchAllData)

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

Set focus to the tableModelView if possible. If the view supports selection or focus then the last focused item will be focused otherwise, the first focusable element, if any, will be focused.

##### Example

This example focuses the view.

```
$( ".selector" ).tableModelView( "focus" );
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

#### getCurrentItem() → {jQuery}

Returns the current item as a jQuery object. The current item is the item that has or last had focus. This includes control break group headings.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or "focus". See also [tableModelView#setCurrentItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#setCurrentItem).

##### Returns:

The current item or null if not supported.

Type
jQuery

#### getCurrentItemValue() → {string}

Returns the value of the current item. The current item is the item that has or last had focus. The value of an item is its unique identifier as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId).

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "focus" or "select". See also [tableModelView#setCurrentItemValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#setCurrentItemValue).

If a control break group heading currently has focus then this returns the value of the `data-group-id` attribute, which should be the same as the value returned from [model#getControlBreakId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getControlBreakId).

##### Returns:

The current item value or null if not supported.

Type
string

#### getIconList() → (nullable) {object}

Return the iconList instance if option [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) is true, and null otherwise.

Note: This returns the instance and not the jQuery object.

Deprecated:
- Yes

##### Returns:

iconList The [iconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html) widget instance.

Type
object

##### Example

This example gets the iconList and calls the getColumns method.

```
$(".selector").tableModelView("getIconList").getColumns();
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

#### getRecords(pElements\$) → {Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>}

Given a jQuery object with one or more item elements return the corresponding model records. For this to work the elements must have a `data-id` attribute with the value of the record id.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pElements$` | jQuery | A jQuery object of item elements such as returned by [tableModelView#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getSelection). |

##### Returns:

Array of records from the model corresponding to the item elements.

Type
Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>

#### getSelectedRecords() → (nullable) {Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>}

Return the underlying data model records corresponding to the current selection.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or the [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

When using virtual scroll pagination and [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) is true it is possible for the user to select a range of records or all records when the model does not yet contain all the selected records. In this case the selection is incomplete and only the records currently in the model will be returned. See option [tableModelView#loadIncompleteSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#loadIncompleteSelection) for how an incomplete selection is handled.

See also [tableModelView#setSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#setSelectedRecords).

##### Returns:

Array of records from the model corresponding to the selected items. Returns null if selection is not supported.

Type
Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>

#### getSelectedValues() → (nullable) {Array.\<string\>}

Returns the value for each record returned by [tableModelView#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getSelectedRecords). The value of a record is its unique identifier as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId).

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or the [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

##### Returns:

Array of selected record values. Returns null if selection is not supported.

Type
Array.\<string\>

#### getSelection() → (nullable) {jQuery}

Return the currently selected items as a jQuery collection.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or the [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

Because this returns a jQuery collection it can only return selected items that are currently in the DOM. When using virtual scroll pagination and [tableModelView#persistSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#persistSelection) is true it is better to use [tableModelView#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getSelectedRecords)

See also [tableModelView#setSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#setSelection).

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

Inherited From:
- [tableModelViewBase#gotoPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#gotoPage)

##### Returns:

true for success, false if a page is currently being rendered.

Type
boolean

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

Refresh the view. Typically no need to call this method because it is called automatically when the model data is refreshed.

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
<td class="description last">if true put focus in the view, if false don't. If undefined/omitted maintain focus if the view already has focus.</td>
</tr>
</tbody>
</table>

#### resize()

This method must be called if the size of the container changes so that pagination state, footer position, and nested [iconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html) if any can be updated to reflect the new size.

#### selectAll(pFocusopt, nullable, pNoNotifyopt)

Select all the items in the report that can be selected. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" and [tableModelView#multiple](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#multiple) and [tableModelView#selectAll(1)](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#selectAll1) options are both true. This is not supported when the [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

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

#### setCurrentItem(pItem\$, pFocusopt)

Sets the last focused item to the given pItem\$. If pItem\$ is not an item or not in the report container the current item is not changed. This also works for control break group headings.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or "focus". See also [tableModelView#getCurrentItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getCurrentItem).

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

#### setCurrentItemValue(pItemValue, pFocusopt)

Sets the last focused item to the one with the given pItemValue. If no item has the given value the current item is not changed. The item must be rendered in order to be made the current item. The value of an item is its unique identifier as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId).

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or "focus". See also [tableModelView#getCurrentItemValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getCurrentItemValue).

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
<td class="description last">The value of an item. If the report has control breaks this can also be the value returned for a control break group heading.</td>
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

Selects the report items that correspond to the given data model records. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or the [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

See also [tableModelView#getSelectedRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getSelectedRecords).

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

Selects the report items that correspond to the given values. The value of an item is the unique identifier of the corresponding model record as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId) and also the value of the item's `data-id` attribute. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or the [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

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

Count of the items actually selected or -1 if called before the report is initialized or there is no data or selection is not supported.

Type
number

#### setSelection(pElements\$, pFocusopt, pNoNotifyopt)

Set the selected items. Triggers the [tableModelView#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#event:selectionchange) event if the selection changes unless `pNoNotify` is true.

This is only applicable if the [tableModelView#itemNavigationMode](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#itemNavigationMode) option is "select" or if the [tableModelView#useIconList](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#useIconList) option is true.

See also [tableModelView#getSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html#getSelection).

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
<td class="description last">A jQuery object with item elements such as the return value of <a href="tableModelView.html#getSelection">tableModelView#getSelection</a>.</td>
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

#### unlockActive()

Call to unlock the active row after async processing is complete.

Call after the async operation completes. See [tableModelViewBase#lockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#lockActive) for more information.

Inherited From:
- [tableModelViewBase#unlockActive](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html#unlockActive)

##### Example

See [grid#setActiveRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#setActiveRecordValue) for an example.
