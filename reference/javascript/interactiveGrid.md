<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html -->
<!-- Widgets: interactiveGrid -->

# Widget: interactiveGrid

## QuickNav

### [Options](#members-section)

- [defaultDetailViewOptions](#defaultDetailViewOptions)
- [defaultGridViewOptions](#defaultGridViewOptions)
- [defaultIconViewOptions](#defaultIconViewOptions)
- [defaultModelOptions](#defaultModelOptions)
- [defaultSingleRowOptions](#defaultSingleRowOptions)
- [editable](#editable)
- [features](#features)
- [initActions](#initActions)
- [initialSelection](#initialSelection)
- [reportSettingsArea](#reportSettingsArea)
- [saveLoadingIndicator](#saveLoadingIndicator)
- [saveLoadingIndicatorPosition](#saveLoadingIndicatorPosition)
- [text](#text)
- [toolbar](#toolbar)
- [toolbarData](#toolbarData)
- [trackParentSelection](#trackParentSelection)

### [Events](#events-section)

- [modechange](#event:modechange)
- [reportchange](#event:reportchange)
- [reportsettingschange](#event:reportsettingschange)
- [save](#event:save)
- [selectionchange](#event:selectionchange)
- [viewchange](#event:viewchange)
- [viewmodelcreate](#event:viewmodelcreate)

### [Methods](#methods-section)

- [focus](#focus)
- [getActions](#getActions)
- [getCurrentView](#getCurrentView)
- [getCurrentViewId](#getCurrentViewId)
- [getSelectedRecords](#getSelectedRecords)
- [getToolbar](#getToolbar)
- [getViews](#getViews)
- [gotoCell](#gotoCell)
- [refresh](#refresh)
- [resize](#resize)
- [setMasterRecord](#setMasterRecord)
- [setSelectedRecords](#setSelectedRecords)
- [copyDefaultToolbar](#.copyDefaultToolbar)

### [Type Definitions](#typedefs-section)

- [toolbarData](#.toolbarData)

## interactiveGrid

### Overview

A jQuery UI widget for the Interactive Grid component of APEX. It is a modern component combining powerful reporting features, with easy multi-row editing. It is exposed as a native region type in APEX, and has a number of declarative features available for customization in Page Designer. In addition to what is declaratively available, there is tremendous scope for performing further JavaScript customizations, to achieve more specific functionality.

This widget is used as the main interface with APEX, and is comprised of a number of other widgets and making use of a number of other JavaScript modules including its own data model layer, which are important to understand when performing customizations. The Interactive Grid widget uses the following:

- [grid widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html)
- [recordView widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html)
- [tableModelView widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html)
- [tableModelViewBase widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelViewBase.html)
- toolbar widget (see widget.toolbar.js file for further information)
- [menu widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html)
- [iconList widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/iconList.html)
- [apex.actions module](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html)
- [apex.model module](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html)
- [apex.item module](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html)

See each for further details, although the interactiveGrid widget documentation will make numerous mention of them to demonstrate certain concepts.

The intention is not to enable developers to create their own Interactive Grid instances, as this would create great burden in developing supporting functionality, for example the model layer. Rather, that developers can easily customize the Interactive Grid beyond what is declaratively possible, in a documented and supported way, using the standard APEX Interactive Grid region type and the options, methods and events documented here, and in related documentation.

### Actions

[Actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html) are used extensively both by the Interactive Grid widget, and by the other widgets it orchestrates. Below we list all the actions pre-defined by the Interactive Grid widget, along with the type of action, and a description of the functionality the action handles.

Note: To find out more about a specific action, you can lookup the action as follows:

`apex.region( `*`region HTML DOM id`*` ).call( "getActions" ).lookup( `*`action name`*` );`

Note: The Interactive Grid may hide or disable various actions depending on what is allowed at a given time or in a particular context. Hidden or disabled actions do nothing when invoked. The declarative option to not include a Save button simply hides the save action (see [interactiveGrid#toolbar](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#toolbar) `save` property). If you don't want a Save button but need to invoke the save action then you have to leave the declarative option on and remove the Save button from the toolbar. See [interactiveGrid#toolbarData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#toolbarData).

| Name | Type | Description |
|----|----|----|
| search | Action | Handles the main search functionality available from the search field in the toolbar. |
| search-case-sensitive | Toggle | Toggle whether the search is case-sensitive. |
| filter-column | Radio | Constrain search to a specific column. |
| change-report | Radio | Switch to a different saved report. |
| change-view | Action | Switch to a different view (eg grid, icon, detail, etc.). |
| chart-view | Action | Switch to the chart view. Note: This is handled differently to other views because this is user-defined and may not be configured. |
| show-columns-dialog | Action | Show the columns dialog. |
| show-filter-dialog | Action | Show the filter dialog. |
| show-sort-dialog | Action | Show the sort dialog. |
| show-aggregate-dialog | Action | Show the aggregate dialog. |
| show-flashback-dialog | Action | Show the flashback dialog. |
| show-highlight-dialog | Action | Show the highlight dialog. |
| show-control-break-dialog | Action | Show the control break dialog. |
| show-download-dialog | Action | Show the download dialog. |
| show-help-dialog | Action | Show the help dialog. |
| stretch-columns | Toggle | Toggle if columns are set to stretch to their available width (for views that support it). |
| change-rows-per-page | Radio | Set the number of grid rows displayed for the current page. |
| save-report | Action | Save the current report settings. |
| show-save-report-as-dialog | Action | Show the 'Save Report As' dialog. |
| show-edit-report-dialog | Action | Show the 'Edit Report' dialog. |
| delete-report | Action | Delete the current saved report. |
| reset-report | Action | Reset the current report settings. |
| row-add-row | Action | Insert a row straight after the current row. |
| row-duplicate | Action | Duplicate the current row. |
| row-delete | Action | Delete the current row. |
| row-refresh | Action | Refresh the current row. |
| row-revert | Action | Revert the current row to its original state when the Interactive Grid region was refreshed. |
| selection-mode | Toggle | Toggle the current selection mode (true for row selection, false for cell selection). |
| selection-duplicate | Action | Duplicate the current selected rows. Note: Interactive Grid must be editable. |
| selection-delete | Action | Delete the current selected rows. Note: Interactive Grid must be editable. |
| selection-refresh | Action | Refresh the current selected rows from the server. Note: Interactive Grid must be editable. |
| selection-revert | Action | Revert the current selected rows to their original state when the Interactive Grid region was refreshed. Note: Interactive Grid must be editable. |
| selection-copy | Action | Copy the current selection to the clipboard. Note: Interactive Grid must be editable. |
| selection-add-row | Action | Insert a row straight after any selected rows. If no rows are selected, or if cell selection mode is enabled, the new row will be added at the beginning. |
| selection-copy-down | Action | Copy cell values from columns in the first selected row to all the other selected rows within the same columns. Note: Interactive Grid must be editable, and only supported in 'Grid' view. |
| selection-clear | Action | Clear all cells in the current selection. Note: Interactive Grid must be editable, and only supported in 'Grid' view. |
| selection-fill | Action | Fill all cells in the current selection with the value provided. Note: Interactive Grid must be editable, and only supported in 'Grid' view. |
| refresh | Action | Refresh the Interactive Grid region. |
| edit | Toggle | Toggle the current edit mode. |
| save | Action | Save the current data changes. Note: Interactive Grid must be editable. |
| single-row-view | Action | Change to single row view. Note: The current view must support single row view. |
| close-single-row-view | Action | Change from single row view. Note: The current view must support single row view. |

Pre-defined actions used by the Interactive Grid widget

### Additional Information about options

Please bear the following in mind when dealing with interactiveGrid widget options:

- The options documented here can only be set on initialization and not after initialization (unless otherwise stated in the specific option documentation). Setting them after initialization will have no effect.

- The format of the option examples listed for this widget differ from examples you may have seen in other widget documentation. Here, they are documented for intended use in the 'Advanced JavaScript Code' attribute of the Interactive Grid region in APEX, thus the format documented matches what is required for that attribute.

- One important note when looking at the option examples, is that for options that use nested object structures (for example 'options.toolbar.searchField'), your code should never assume that any of the parent objects already exist. APEX, by design will only send what it needs to from the server (so default option values will not be sent for example), to keep the size of the information transmitted to a minimum. Some options therefore will not be present in the option's object structure passed into the 'Advanced JavaScript Code' attribute. You must therefore code defensively when working with these nested option structures, to avoid the risk of JavaScript errors.

  For example, for the 'options.toolbar.searchField' option, you could do the following:

      function( options ) {

          // As options.toolbar may not exist, let's first check and if it doesn't exist, create it
          if ( !options.toolbar ) {
              options.toolbar = {};
          }

          // Then we can safely set the 'searchField' property of the options.toolbar object
          options.toolbar.searchField = false;

          return options;
      }

  A simpler way to accomplish the same is to use the [apex.util.getNestedObject](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.getNestedObject) which creates any needed objects automatically. The following example is equvelent to the previous one:

      function( options ) {

          apex.util.getNestedObject( options, "toolbar" ).searchField = false;

          return options;
      }

  Note: For brevity, the examples listed for this widget's documentation do not include such checks, but where any nested structures are used, these checks should be added.

Since:
- 5.1

### Options

#### defaultDetailViewOptions :Object

This option allows passing options to the underlying tableModelView widget for detail view. See [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

##### Type:

- Object

##### Example

Initialize the interactiveGrid with the defaultDetailViewOptions option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultDetailViewOptions = {
        footer: false
    };

    return options;

}
```

#### defaultGridViewOptions :Object

This option allows passing options to the underlying grid widget for grid view. See [grid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

##### Type:

- Object

##### Example

Initialize the interactiveGrid with the defaultGridViewOptions option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultGridViewOptions = {
        multiple: true,
        allowInsert: false
    };

    return options;

}
```

#### defaultIconViewOptions :Object

This option allows passing options to the underlying tableModelView widget for icon view. See [tableModelView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/tableModelView.html) for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

##### Type:

- Object

##### Example

Initialize the interactiveGrid with the defaultIconViewOptions option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultIconViewOptions = {
        footer: false
    };

    return options;

}
```

#### defaultModelOptions :Object

This option allows passing options not explicitly set by Interactive Grid to the underlying view models. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) for the supported model options. Some settings may interfere with the proper functioning of Interactive Grid.

##### Type:

- Object

##### Example

Initialize the interactiveGrid with the defaultModelOptions option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultModelOptions = {
        pageSize: 200
    };

    return options;

}
```

#### defaultSingleRowOptions :Object

This option allows passing options to the underlying recordView widget for the single row view of grid view. See [recordView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/recordView.html) for the options it supports. Interactive Grid may override some of these settings. Some settings may interfere with the proper functioning of Interactive Grid.

##### Type:

- Object

##### Example

Initialize the interactiveGrid with the defaultSingleRowOptions option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.defaultSingleRowOptions = {
        alwaysEdit: true
    };

    return options;

}
```

#### editable :boolean

Controls if the Interactive Grid is editable.

##### Type:

- boolean

Default Value:
- false

##### Example

Initialize the interactiveGrid with the editable option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.editable = true;

    return options;

}
```

#### features :Object

Controls which general features of the Interactive Grid are enabled.

Note: This only deals with general features for the Interactive Grid, not features only specific to certain views. For specific view feature configuration, see the 'views' option object.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `filter` | boolean | Controls if filtering is available for the Interactive Grid |
| `flashback` | boolean | Controls if flashback is available for the Interactive Grid |

Default Value:
- {
          filter: true,
          flashback: true
      }

##### Example

Initialize the interactiveGrid with the features option specified in the Interactive Grid region Initialization JavaScript Function attribute.

```
function( options ) {
    var features = apex.util.getNestedObject( options, "features" );
    features.filter = false;
    features.flashback = false;
    return options;
}
```

#### initActions :function

Allows you to add or modify *actions*. `function( actions )` Function has one argument 'actions', which is the Interactive Grid's action's interface object. Note: Within the function, the actions.context property can be used to access the main interactiveGrid widget element (the context for the actions).

Please see [Actions](#actions-section) for a listing of all the predefined actions used by the Interactive Grid widget, and [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) for further general information about actions.

##### Type:

- function

Default Value:
- null

##### Example

Initialize the interactiveGrid with the initActions option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.initActions = function( actions ) {

        // Hide all elements associated with the show help dialog action
        actions.hide( "show-help-dialog" );

        // Add a keyboard shortcut to the show filter dialog action
        actions.lookup( "show-filter-dialog" ).shortcut = "Ctrl+Alt+F";
        actions.update( "show-filter-dialog" );

        // Add new actions, either singularly passing in an actions object as shown here, or in
        // multiple by passing an array of action objects
        actions.add( {
            name: "my-action",
            label: "Hello",
            action: function( event, focusElement ) {
                alert( "Hello World!" );
            }
        } );
    };

    return options;

}
```

#### initialSelection :boolean

Controls if the Interactive Grid has an initial selection.

Note: This is only applicable where the current view supports selection, views that do not support selection will ignore this setting.

##### Type:

- boolean

Default Value:
- true

##### Example

Initialize the interactiveGrid with the initialSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.initialSelection = false;

    return options;

}
```

#### reportSettingsArea :boolean

Controls if the report settings area displays for the Interactive Grid. The report settings area shows information such as filters, control breaks and highlights applied to the current report. Pass *false* to hide the report settings area, however you should not rely on this being set to *true* to display report settings, it just needs to evaluate to truthy.

Note: For the case where report settings are displayed, this could change in the future to be an object, defining greater configurability (such as whether the controls are enabled, or if this should be collapsed by default), so please bear this in mind if using this option.

##### Type:

- boolean

Default Value:
- true

##### Example

Initialize the interactiveGrid with the reportSettingsArea option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.reportSettingsArea = false;

    return options;

}
```

#### saveLoadingIndicator :string\|jQuery\|Element\|function

A loading indicator suitable for the [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) `loadingIndicator` option to be used during the save action.

This overrides the default model loading indicator that shows a progress spinner for any related visible models that have changes.

This is most useful for master Interactive Grid regions where detail models may not be visible and therefore won't show progress.

##### Type:

- string \| jQuery \| Element \| function

Default Value:
- undefined

#### saveLoadingIndicatorPosition :string

A loading indicator position suitable for the [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) `loadingIndicatorPosition` option to be used during the save action.

This overrides the default model loading indicator that shows a progress spinner for any related visible models that have changes.

This is most useful for master Interactive Grid regions where detail models may not be visible and therefore won't show progress.

##### Type:

- string

Default Value:
- undefined

##### Example

Initialize the interactiveGrid with the saveLoadingIndicatorPosition option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.saveLoadingIndicatorPosition = "page";

    return options;

}
```

#### text :object

Defines various text messages. Most messages come from declarative attributes. If there is no value given for a declarative attribute the default may come from an APEX runtime message.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `addRowButton` | string | The label for the toolbar add row button. The default comes from text message APEX.IG.ADD_ROW. |
| `noDataFound` | string | The message to display when there are no results. The default comes from text message APEX.IG.NO_DATA_FOUND. |
| `noParentSelected` | string | The message to display when the parent region, in a master-detail configuration, does not have exactly one row selected. The default comes from text message APEX.IG.SELECT_1_ROW_IN_MASTER. |
| `help` | string | The first help text to display as part of help dialog. There is no default. |

Default Value:
- The default is listed for each property.

##### Example

Initialize the interactiveGrid with custom text option specified in the Interactive Grid region Initialization JavaScript Function attribute. This customizes the noParentSelected message.

```
function( options ) {
    var text = apex.util.getNestedObject( options, "text" );
    text.noParentSelected = "Select a project to see the open tasks.";
    return options;
}
```

#### toolbar :Object

Controls which functionality of the default Interactive Grid toolbar is displayed. If false or null, there will be no toolbar.

Note: To make further customizations to the toolbar including adding new buttons, please see [interactiveGrid#toolbarData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#toolbarData).

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
<th class="name" scope="row"><code>actionMenu</code></th>
<td class="type">boolean</td>
<td class="description last">Hide or show the actions menu.</td>
</tr>
<tr>
<th class="name" scope="row"><code>columnSelection</code></th>
<td class="type">boolean</td>
<td class="description last"><p>Hide or show the column selection menu, to allow column-specific searches.</p>
<p>Note: Ignored if toolbar.searchField is <em>false</em>.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>editing</code></th>
<td class="type">boolean</td>
<td class="description last"><p>Hide or show the edit button.</p>
<p>Note: This does not prevent the Interactive Grid from being edited, merely hides the button from the toolbar. If you wish to control whether the Interactive Grid can be edited at all, please see the <a href="interactiveGrid.html#editable">interactiveGrid#editable</a> option.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>reset</code></th>
<td class="type">boolean</td>
<td class="description last">Hide or show the reset button.</td>
</tr>
<tr>
<th class="name" scope="row"><code>save</code></th>
<td class="type">boolean</td>
<td class="description last">Hide or show the save button.</td>
</tr>
<tr>
<th class="name" scope="row"><code>savedReports</code></th>
<td class="type">boolean</td>
<td class="description last">Hide or show the select list showing any saved reports.</td>
</tr>
<tr>
<th class="name" scope="row"><code>searchField</code></th>
<td class="type">boolean</td>
<td class="description last"><p>Hide or show the search controls (affects the column selection menu, search input field and go button).</p></td>
</tr>
</tbody>
</table>

Default Value:
- {
          actionMenu: true,
          columnSelection: true,
          editing: true,
          reset: true,
          save: true,
          savedReports: true,
          searchField: true
      }

##### Example

Initialize the interactiveGrid with the toolbar option specified in the Interactive Grid region Initialization JavaScript Function attribute.

```
function( options ) {
    var toolbar = apex.util.getNestedObject( options, "toolbar" );
    toolbar.actionMenu = false;
    toolbar.columnSelection = false;
    return options;
}
```

#### toolbarData :Array

Contains the metadata for the toolbar displayed at the top of the Interactive Grid. If no value is provided, the toolbar defaults to the standard toolbar required in APEX.

To customize the default toolbar used by the Interactive Grid in APEX, typically you would start with a copy of the default toolbar metadata. Please see [interactiveGrid.copyDefaultToolbar](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#.copyDefaultToolbar) for details on how to do this.

##### Type:

- Array

Default Value:
- Return value from [interactiveGrid.copyDefaultToolbar](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#.copyDefaultToolbar)

##### Example

Initialize the interactiveGrid with the toolbarData option specified in the Interactive Grid region Initialization JavaScript Function attribute.

```
function( options ) {
    var $ = apex.jQuery,
        toolbarData = $.apex.interactiveGrid.copyDefaultToolbar(),               // Make a copy of the default toolbar
        reportsGroupControls = toolbarData.toolbarFind( "reports" ).controls;    // Locate the reports group

    // Add new buttons after the default report controls. Note the toolbar is action driven, so
    // we just need to define the correct action name with the button.
    reportsGroupControls.push({
        type: "BUTTON",
        action: "save-report",
        iconOnly: true
    });
    reportsGroupControls.push({
        type: "BUTTON",
        action: "show-save-report-as-dialog",
        iconOnly: true
    });
    reportsGroupControls.push({
        type: "BUTTON",
        action: "show-edit-report-dialog",
        iconOnly: true
    });
    reportsGroupControls.push({
        type: "BUTTON",
        action: "delete-report",
        iconOnly: true
    });

    // Assign new toolbar data back to toolbarData configuration property
    options.toolbarData = toolbarData;

    // Return the options
    return options;
}
```

#### trackParentSelection :boolean

Determines if a detail Interactive Grid will change the detail instance automatically when the selection in the master region changes. When true, the default, this detail Interactive Grid creates a selection change event handler for the master region and updates the data shown in this region to correspond to the selected row of the master region. Set to false to manually control the detail instance shown in this region using the [interactiveGrid#setMasterRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#setMasterRecord) method.

This option only applies if this Interactive Grid has a master region defined.

##### Type:

- boolean

Default Value:
- true

##### Example

Initialize the interactiveGrid with the trackParentSelection option specified in the Interactive Grid region JavaScript Initialization Code attribute.

```
function( options ) {

    options.trackParentSelection = false;

    return options;

}
```

### Events

#### modechange

Triggered when edit mode is changed (works for both grid view and single row view).

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
<td class="type">event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">Object</td>
<td class="description last">Additional data for the event.
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
<th class="name" scope="row"><code>editMode</code></th>
<td class="type">boolean</td>
<td class="description last">The new edit mode.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### reportchange

Triggered when the current report is changed.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | event | `jQuery` event object. |

#### reportsettingschange

Triggered when the current report settings are changed.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | event | `jQuery` event object. |

#### save

Triggered after the Interactive Grid data has been saved.

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
<td class="type">event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-8">Properties</h6>
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
<th class="name" scope="row"><code>status</code></th>
<td class="type">String</td>
<td class="description last">If the save was successful then the status property equals "success".</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### selectionchange

Triggered when the selection state changes and will work for all views that support selection (grid, icon, etc.).

Note: This event is also exposed declaratively through Dynamic Actions, see the 'Selection Change' event for Interactive Grid regions. If all you want to do is respond to this event and no other code, you may be able to use Dynamic Actions instead.

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
<td class="type">event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-10">Properties</h6>
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
<th class="name" scope="row"><code>selectedRecords</code></th>
<td class="type">Array</td>
<td class="description last">An array containing the underlying data model records corresponding to the current selection in the current view. See <a href="interactiveGrid.html#getSelectedRecords">interactiveGrid#getSelectedRecords</a> for further information on how to deal with these records.</td>
</tr>
<tr>
<th class="name" scope="row"><code>model</code></th>
<td class="type">Object</td>
<td class="description last">The underlying data model for the current view. See <a href="apex.model.html">apex.model</a> for further information.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

Bind an event listener to the `interactivegridselectionchange` event.

```
// Define in the 'Execute when Page Loads' page attribute
$( ".selector" ).on( "interactivegridselectionchange", function( event, data ) {
    // add code to fire on selection change
} );
```

#### viewchange

Triggered when the view changes.

Note: This event is also exposed declaratively through Dynamic Actions, see the 'View Change' event for Interactive Grid regions. If all you want to do is respond to this event and no other code, you may be able to use Dynamic Actions instead.

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
<td class="type">event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-12">Properties</h6>
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
<th class="name" scope="row"><code>view</code></th>
<td class="type">String</td>
<td class="description last">Identifier for the current view.</td>
</tr>
<tr>
<th class="name" scope="row"><code>created</code></th>
<td class="type">boolean</td>
<td class="description last">If true this indicates the view has just been created (or viewed for the first time).</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

Bind an event listener to the `interactivegridviewchange` event.

```
// Define in the 'Function and Global Variable Declaration' page attribute (not 'Execute when Page Loads'),
// in order to be active by the time the Interactive Grid is initialized.
$( ".selector" ).on( "interactivegridviewchange", function( event, data ) {
    // add code to fire on view change
} );
```

#### viewmodelcreate

Triggered when the model for the given view is created. Handle this event to subscribe to model notifications.

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
<td class="type">event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">Object</td>
<td class="description last">Additional data for the event.
<h6 id="properties-14">Properties</h6>
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
<th class="name" scope="row"><code>viewId</code></th>
<td class="type">Object</td>
<td class="description last">The id of the view for which the model is created.</td>
</tr>
<tr>
<th class="name" scope="row"><code>model</code></th>
<td class="type">Object</td>
<td class="description last">The underlying data model for the current view. See <a href="apex.model.html">apex.model</a> for further information.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

### Methods

#### focus()

Sets focus to the search field if present, and if not delegates to the current view's focus handling.

#### getActions() → {[apex.actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html)}

Returns the actions context for this Interactive Grid instance

##### Returns:

the actions context

Type
[apex.actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html)

##### Example

```
apex.region("emp").widget().interactiveGrid("getActions").invoke("save");
```

#### getCurrentView() → {[interactiveGridView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html)}

Return the current Interactive Grid view interface.

##### Returns:

View interface.

Type
[interactiveGridView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html)

#### getCurrentViewId() → {string}

Return the view id of the current view.

##### Returns:

view id.

Type
string

#### getSelectedRecords() → {Array}

Return the underlying data model records corresponding to the current selection in the current view. Use the apex.model API to manipulate these records. Make sure you are using the model for the current view for example:

` apex.region(`*`region HTML DOM id`*`).widget().interactiveGrid("getCurrentView").model `

Note: Depending on the view and the submitSelectedRows option the selected records returned could span multiple pages. To get just the records that are selected in the current page requires using view widget specific methods.

##### Returns:

array of records from the model corresponding to the selected rows/records Returns empty array if there is no selection. Returns null if the current view doesn't support selection.

Type
Array

#### getToolbar() → {jQuery}

Returns the toolbar widget element.

##### Returns:

jQuery object of the interactive grid toolbar or null if there is no toolbar

Type
jQuery

#### getViews(pViewIdopt) → {[interactiveGridView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html)}

Return the Interactive Grid view interface for the given view id or if no view id is given return a map of all the view interfaces.

##### Parameters:

<table class="params" aria-label="Parameters for getViews">
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
<th class="name" scope="row"><code>pViewId</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Id of the view to get. For example "grid" or "chart".</td>
</tr>
</tbody>
</table>

##### Returns:

View interface.

Type
[interactiveGridView](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGridView.html)

#### gotoCell(pModelInstanceIdopt, pRecordId, pColumnopt)

Put focus in the cell (or field etc.) given by pRecordId and pColumn. This is used to focus rows or cells that have errors. This will switch to the "editable" view. This delegates to the view. Not all views will support going to a cell.

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
<th class="name" scope="row"><code>pModelInstanceId</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">model instance id. only needed if using multiple models such as in master detail and the model has not already been set correctly by the master.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecordId</code></th>
<td class="type">String</td>
<td class="attributes"></td>
<td class="description last">the record id of the row to go to.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pColumn</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">column in the record row to go to.</td>
</tr>
</tbody>
</table>

#### refresh()

Cause the Interactive Grid to get fresh data from the server. A warning is given if the model has any outstanding changes and the user can choose to allow the refresh or not.

#### resize()

Call this method when the size of the widget element changes. This can happen if the browser window changes for example. This will resize the current view. Note: Most of the time it is not necessary to call this method as Interactive Grid detects when its size changes.

#### setMasterRecord(pMasterModel, pMasterRecord)

Set the instance of this Interactive Grid to correspond to the specified master record. Normally this is done automatically when the master region selection changes. However, it can also be done manually when the [interactiveGrid#trackParentSelection](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#trackParentSelection) option is false.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMasterModel` | [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) | The model of the master region. |
| `pMasterRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record of the master region that determines which records this detail region will show. |

#### setSelectedRecords(pRecords, pFocusopt, pNoNotifyopt)

Set the current selection to the records specified. Only applies for views that support selection. Note that the records or record ids given may not yet exist in the model or may not be visible in the view. Note if you set pNoNotify to true then any detail regions will not get updated to reflect the current selection.

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
<td class="description last">if true the first cell of the selection is given focus</td>
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

#### (static) copyDefaultToolbar() → {[interactiveGrid.toolbarData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#.toolbarData)}

Returns a copy of the default Interactive Grid toolbar data structure. This is a copy of the array that will be used as the data option when the Interactive Grid's toolbar is created. This is typically used from the Advanced JavaScript code function to customize the return value of this function and then assign to the [interactiveGrid#toolbarData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#toolbarData) config property.

Note the array returned has additional methods to make it easier to find and manipulate the toolbar structure. See [interactiveGrid.toolbarData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#.toolbarData) for details.

##### Returns:

Returns an array containing a copy of the default Interactive Grid toolbar metadata.

Type
[interactiveGrid.toolbarData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#.toolbarData)

##### Examples

The following example shows how to make the download dialog more easily accessible, by adding a button to the toolbar to open it.

```
function( options ) {
   var $ = apex.jQuery,
       toolbarData = $.apex.interactiveGrid.copyDefaultToolbar(), // Make a copy of the default toolbar
       actionsMenuGroup = toolbarData.toolbarFind( "actions1" );  // Locate the actions menu group

   // Array position denotes displayed position in the toolbar, so let's add the new download button directly
   // after the actions menu group in the array, such that it displays directly after the actions menu in the
   // toolbar.
   // Note: The toolbar is action-driven, so integrates easily with the Interactive Grid. To show the dialog, we
   // just define the appropriate action for showing the download dialog (show-download-dialog).
   actionsMenuGroup.controls.push( {
       type: "BUTTON",
       action: "show-download-dialog",
       iconBeforeLabel: true
   } );

   // Assign new toolbar data back to toolbarData configuration property
   options.toolbarData = toolbarData;

   // Return the options
   return options;
}
```

This example is similar to the previous one except that the Download menu item is removed from the Actions menu and inserted as a toolbar button after the Actions menu button.

```
function( options) {
    var download,
        toolbarData = $.apex.interactiveGrid.copyDefaultToolbar();

    // Move download menu item to its own button on the toolbar
    download = toolbarData.toolbarRemove( "show-download-dialog" );
    // download is a menu item; change it to a toolbar button component
    download.type = "BUTTON";
    download.iconBeforeLabel = true;
    // inset it after the Actions menu button
    toolbarData.toolbarInsertAfter( "actions_button", download );

   // Assign new toolbar data back to toolbarData configuration property
   options.toolbarData = toolbarData;

   // Return the options
   return options;
}
```

### Type Definitions

#### toolbarData

Toolbar widget metadata returned by [interactiveGrid.copyDefaultToolbar](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#.copyDefaultToolbar).

The toolbar data structure is an array of control groups for different parts of the toolbar. These control groups all have unique IDs, which can be used in conjunction with the the functions defined below to assist in customizing the toolbar. See option [interactiveGrid#toolbarData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#toolbarData) and method [interactiveGrid.copyDefaultToolbar](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#.copyDefaultToolbar) for examples of customizing the toolbar.

Control group IDs defined in the default toolbar data structure

Control Group ID

Contents

search

All search controls (column search menu, search field and go button)

reports

Saved report select list

views

View selection pill buttons

actions1

Actions menu button

actions2

Edit and Save buttons

actions3

Add Row button

actions4

Reset report button

##### Type:

- Array

##### Properties:

| Name | Type | Description |
|----|----|----|
| `toolbarFind` | function | `toolbarFind(id)` Returns a control group, control or menu item found by id. The id is the id of a control group, control, or menu item or an action name. Unlike the find method of the toolbar widget this toolbarFind method works before the widget is created. |
| `toolbarInsertAfter` | function | `toolbarInsertAfter(id, item)` Inserts the given item after the id if found. The id argument can be the id of a control group, control, or menu item or an action name. If the id is not found then nothing is inserted. The item to insert is an object that is appropriate for the kind of id. If the id is for an action name or a menu item id then the item should be a menu item or toolbar control. If the id is for a control group the item should be a control group object. If the id is for a control then the item should be a control. |
| `toolbarRemove` | function | `toolbarRemove(id)` Removes a control group, control or menu item found by id. The id is the id of a control group, control, or menu item or an action name. The item removed is returned. Note: removing a button or menu item does not remove the corresponding functionality. For example removing the menu item for "show-filter-dialog" does not prevent showing the filter dialog by invoking the "show-filter-dialog" action some other way such as from the report settings area. |
