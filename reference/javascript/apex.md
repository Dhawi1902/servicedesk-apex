<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html -->
<!-- Namespaces: apex -->

# Namespace: apex

## QuickNav

### [Properties](#members-section)

- [env](#.env)
- [gPageContext\$](#.gPageContext$)
- [items](#.items)
- [jQuery](#.jQuery)
- [regions](#.regions)

### [Events](#events-section)

- [apexafterclosecanceldialog](#.event:apexafterclosecanceldialog)
- [apexafterclosedialog](#.event:apexafterclosedialog)
- [apexafterrefresh](#.event:apexafterrefresh)
- [apexbeforepagesubmit](#.event:apexbeforepagesubmit)
- [apexbeforerefresh](#.event:apexbeforerefresh)
- [apexbeginrecordedit](#.event:apexbeginrecordedit)
- [apexcurrentrowchange](#.event:apexcurrentrowchange)
- [apexendrecordedit](#.event:apexendrecordedit)
- [apexpagesubmit](#.event:apexpagesubmit)
- [apexreadyend](#.event:apexreadyend)
- [apexselectionchange](#.event:apexselectionchange)
- [apexwindowresized](#.event:apexwindowresized)

### [Functions](#methods-section)

- [confirm](#.confirm)
- [item](#.fn:item)
- [region](#.fn:region)
- [submit](#.submit)
- [userHasTouched](#.userHasTouched)

## apex

The apex namespace is the top level Oracle APEX namespace and contains a number of sub namespaces, and a few common functions and properties.

The apex namespace also contains information on APEX specific events.

### Namespaces

[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html)

[da](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.da.html)

[date](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html)

[debug](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html)

[event](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.event.html)

[item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html)

[lang](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html)

[locale](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html)

[message](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html)

[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html)

[navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html)

[page](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html)

[pwa](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.pwa.html)

[region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html)

[server](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html)

[storage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html)

[theme](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.theme.html)

[util](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html)

[widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.widget.html)

### Properties

#### (static) env :object

This object holds various environment values related to the APEX instance, current application and page.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `APP_USER` | string | The current username |
| `APP_ID` | string | The application ID |
| `APP_PAGE_ID` | string | The page ID |
| `APP_SESSION` | string | The session ID |
| `APP_FILES` | string | The relative path of the application static files |
| `WORKSPACE_FILES` | string | The relative path of the workspace static files |
| `APEX_FILES` | string | The relative path of the files distributed with Oracle APEX |
| `APEX_VERSION` | string | The full version of the Oracle APEX instance |
| `APEX_BASE_VERSION` | string | The base version of the Oracle APEX instance |

Since:
- 21.2

##### Example

Redirect to page 2 in the current application.

```
apex.navigation.redirect( "f?p=" + apex.env.APP_ID + ":2:" + apex.env.APP_SESSION );
```

#### (static) gPageContext\$ :jQuery

This namespace property stores the current page context. The current page context is set to the HTML document (same as apex.jQuery(document)).

##### Type:

- jQuery

##### Example

This selects all elements with a CSS class of my_class, in the context of the current page.

```
apex.jQuery( ".my_class", apex.gPageContext$ );
```

#### (static) items

This namespace property holds all the [item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) interfaces that have been created on this page. See [apex.item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.fn:item) for details.

Since:
- 21.2

#### (static) jQuery :function

This namespace property holds the jQuery function that APEX uses. Ideally there is just one copy of jQuery on a page but it is possible to have multiple copies and even different versions of jQuery on a page. This is sometimes necessary when using third party plugins that only work with an older version of jQuery. Use this property in place of global variables \$ or jQuery to ensure you are using the same jQuery library that APEX is using.

##### Type:

- function

##### Example

The following function creates a local variable \$ as a convenient way to reference jQuery while ensuring that it is using the same jQuery that APEX uses.

```
function myFunction() {
    var $ = apex.jQuery;
    // use $ to access jQuery functionality
}
```

#### (static) regions

This namespace property holds all the [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) interfaces that have been created on this page. See [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.fn:region) for details.

Since:
- 21.2

### Events

#### apexafterclosecanceldialog

This event is triggered when an APEX modal dialog page is closed or cancelled by either the Dynamic Action Close Dialog action, the Dynamic Action Cancel Dialog action, the Close Dialog process, the Close (X) button of an dialog or by pressing the escape (ESC) key inside a dialog. This is equivalent to the Dialog Closed Dynamic Action event. This event is triggered on the element that opened the dialog.

For buttons it is the button element. For links to dialog pages in lists it is the list region element. For lists used in global top or side navigation or in any other case where the triggering element cannot be determined the event is triggered on the document apex.gPageContext\$.

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
<th class="name" scope="row"><code>Event</code></th>
<td class="type">Event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">object</td>
<td class="description last">The event handler receives an object argument with these properties.
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
<th class="name" scope="row"><code>dialogPageId</code></th>
<td class="type">string</td>
<td class="description last">The page number of the dialog page that closed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>closeAction</code></th>
<td class="type">string</td>
<td class="description last">The action which triggered closing the dialog. Either "close" or "cancel".</td>
</tr>
<tr>
<th class="name" scope="row"><code>*</code></th>
<td class="type">string</td>
<td class="description last">For each page item listed in the Close Dialog process or dynamic action setting Items to Return there is a property with the same name as the item. The value is the value of the item.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

This example refreshes the region with HTML DOM id emp when any modal dialog page closes.

```
apex.gPageContext$.on( "apexafterclosecanceldialog", function( event, data ) {
   apex.region( "emp" ).refresh();
});
```

#### apexafterclosedialog

This event is triggered when an APEX modal dialog page is closed by either the Dynamic Action Close Dialog action or the Close Dialog process. This is equivalent to the Dialog Closed Dynamic Action event. This event is triggered on the element that opened the dialog.

For buttons it is the button element. For links to dialog pages in lists it is the list region element. For lists used in global top or side navigation or in any other case where the triggering element cannot be determined the event is triggered on the document apex.gPageContext\$.

Note: This event is triggered in the parent or calling page not in the modal dialog page. If you want to know when the dialog is closed regardless of how it is closed use the `apexafterclosecanceldialog` event.

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
<th class="name" scope="row"><code>Event</code></th>
<td class="type">Event</td>
<td class="description last"><code class="prettyprint">jQuery</code> event object</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">object</td>
<td class="description last">The event handler receives an object argument with these properties.
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
<th class="name" scope="row"><code>dialogPageId</code></th>
<td class="type">string</td>
<td class="description last">The page number of the dialog page that closed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>closeAction</code></th>
<td class="type">string</td>
<td class="description last">The action which triggered closing the dialog. In this case it is "close".</td>
</tr>
<tr>
<th class="name" scope="row"><code>*</code></th>
<td class="type">string</td>
<td class="description last">For each page item listed in the Close Dialog process or dynamic action setting Items to Return there is a property with the same name as the item. The value is the value of the item.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

This example refreshes the region with HTML DOM id emp when any modal dialog page closes.

```
apex.gPageContext$.on( "apexafterclosedialog", function( event, data ) {
   apex.region( "emp" ).refresh();
});
```

#### apexafterrefresh

This event is triggered by a number of page or column items just after they are refreshed with new content or data from the server. It is equivalent to the Dynamic Action event After Refresh. Specifically any item that supports the Cascading LOV Parent Item(s) attribute should trigger this event. This event can also be triggered by the [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) and [apex.server.process](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.process) APIs if the `refreshObject` option is provided. The event is triggered on the item element or the element given by the `refreshObject`. The event handler receives the data given in `refreshObjectData` if any.

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
<th class="name" scope="row"><code>event</code></th>
<td class="type">Event</td>
<td class="attributes"></td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The <code class="prettyprint">refreshObjectData</code> if any.</td>
</tr>
</tbody>
</table>

##### Example

This example disables the button with HTML DOM id B1 while any refresh is in progress.

```
apex.jQuery( "body" ).on( "apexbeforerefresh", function() {
    apex.jQuery( "#B1" ).prop( "disabled", true);
} ).on( "apexafterrefresh", function() {
    apex.jQuery( "#B1" ).prop( "disabled", false);
} );
```

#### apexbeforepagesubmit

This event is triggered when the page is submitted with [apex.page.submit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.submit) or [apex.page.confirm](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.confirm). This includes buttons with action Submit Page and Dynamic Action Submit Page action. It is equivalent to the Dynamic Action event Before Page Submit. It is triggered before the page is validated. It is triggered on [apex.gPageContext\$](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.gPageContext$), which is the document. This event can be canceled by a Dynamic Action Confirm or Cancel Event action so you cannot rely on the page actually being submitted. If you need code to run just before the page is actually submitted see the [apex.event:apexpagesubmit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexpagesubmit) event.

The event handler should not do any long running or asynchronous processing. Specifically it should not make a synchronous or asynchronous Ajax request. The event handler receives a string argument that is the request value.

##### Properties:

| Name      | Type                                   | Description            |
|-----------|----------------------------------------|------------------------|
| `event`   | Event  | `jQuery` event object. |
| `request` | string | The request string.    |

##### Example

This example performs an extra validation on page item P1_CHECK_ME. For this to work the Submit button Execute Validations attribute must be Yes and the application compatibility mode must be greater than or equal to 5.1 or the validate option to apex.submit or apex.confirm must be true.

```
apex.jQuery( apex.gPageContext$ ).on( "apexbeforepagesubmit", function() {
    var item = apex.item("P1_CHECK_ME" ),
    value = item.getValue();
    if ( value !== "valid" ) { // replace with desired constraint check
        item.node.setCustomValidity( "Text field needs to be valid" );
    } else {
        item.node.setCustomValidity( "" );
    }
} );
```

#### apexbeforerefresh

This event is triggered by a number of page or column items just before they are refreshed with new content or data from the server. It is equivalent to the Dynamic Action event Before Refresh. Specifically any item that supports the Cascading LOV Parent Item(s) attribute should trigger this event. This event can also be triggered by the [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) and [apex.server.process](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.process) APIs if the `refreshObject` option is provided. The event is triggered on the item element or the element given by the `refreshObject`. The event handler receives the data given in `refreshObjectData` if any.

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
<th class="name" scope="row"><code>event</code></th>
<td class="type">Event</td>
<td class="attributes"></td>
<td class="description last"><code class="prettyprint">jQuery</code> event object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>data</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The <code class="prettyprint">refreshObjectData</code> if any.</td>
</tr>
</tbody>
</table>

##### Example

This example disables the button with HTML DOM id B1 while any refresh is in progress.

```
apex.jQuery( "body" ).on( "apexbeforerefresh", function() {
    apex.jQuery( "#B1" ).prop( "disabled", true);
} ).on( "apexafterrefresh", function() {
    apex.jQuery( "#B1" ).prop( "disabled", false);
} );
```

#### apexbeginrecordedit

This event is triggered when a [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) row/record is about to be edited (when a new row/record is selected or enters edit mode).

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
<td class="type">object</td>
<td class="description last">Additional event data.
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
<th class="name" scope="row"><code>model</code></th>
<td class="type"><a href="model.html">model</a></td>
<td class="description last">The <a href="model.html">model</a> that is being edited.</td>
</tr>
<tr>
<th class="name" scope="row"><code>record</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">The record that is beginning to be edited.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordId</code></th>
<td class="type">string</td>
<td class="description last">The record id that is beginning to be edited.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### apexcurrentrowchange

This event is triggered when the current item/row/record changes in a region that supports keyboard navigation and focus management. This event happens a few milliseconds after the last focused item/row/record changes.

Note that some widgets have their own more specific focus management event. See for example [grid#event:currentcellchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html#event:currentcellchange).

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
<td class="type">object</td>
<td class="description last">Additional event data.
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
<th class="name" scope="row"><code>currentValue</code></th>
<td class="type">Array.&lt;string&gt;</td>
<td class="description last">The value for the current item/row/record in the report or null if there is none. The value is typically configured to be the primary key of the record.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

A current item change event handler for a report region with HTML DOM id "myReport".

```
apex.region( "myReport" ).element.on( "apexcurrentrowchange", function( event, data ) {
    console.log( "do something with current value", data.currentValue );
} );
```

#### apexendrecordedit

This event is triggered when a [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) row/record is done being edited (when a new row/record is selected or exits edit mode).

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
<td class="type">object</td>
<td class="description last">Additional event data.
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
<th class="name" scope="row"><code>model</code></th>
<td class="type"><a href="model.html">model</a></td>
<td class="description last">The <a href="model.html">model</a> that is being edited.</td>
</tr>
<tr>
<th class="name" scope="row"><code>record</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">The record that is done being edited.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordId</code></th>
<td class="type">string</td>
<td class="description last">The record id that is done being edited.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### apexpagesubmit

This event is triggered when the page is submitted with [apex.page.submit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.submit) or [apex.page.confirm](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.confirm). This includes buttons with action Submit Page and Dynamic Action Submit Page action. It is triggered after the page is validated. It is triggered on [apex.gPageContext\$](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.gPageContext$), which is the document. This event is the last chance to set or modify page items before the page is submitted.

The event handler should not do any long running or asynchronous processing. Specifically it should not make a synchronous or asynchronous Ajax request. The event handler receives a string argument that is the request value.

##### Properties:

| Name      | Type                                   | Description            |
|-----------|----------------------------------------|------------------------|
| `event`   | Event  | `jQuery` event object. |
| `request` | string | The request string.    |

##### Example

This example makes the page item P1_VALUE upper case before the page is submitted.

```
apex.jQuery( apex.gPageContext$ ).on( "apexpagesubmit", function() {
    var item = apex.item("P1_VALUE");
    item.setValue( item.getValue().toUpperCase());
} );
```

#### apexreadyend

This event is triggered at the end of all APEX page load functionality. This events differs from the standard page load event in that it will not only wait for the DOM to be ready, but also for any *delayLoading* components to be ready.

Please see the *delayLoading* property of the [apex.item.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.create) API for further information about items that can delay loading.

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Example

This example shows how to define an event handler for this event.

```
apex.jQuery( apex.gPageContext$ ).on( "apexreadyend", function( e ) {
    // code here
} );
```

#### apexselectionchange

This event is triggered when the selection changes in a region that supports selection. This event is debounced, which means that it is not triggered until up to a few hundred milliseconds after the last change in selection state. This avoids rapid event triggering while the user moves quickly through the report with the keyboard.

Note that some regions and widgets have their own more specific selection change event. See for example [interactiveGrid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#event:selectionchange).

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
<td class="type">object</td>
<td class="description last">Additional event data.
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
<th class="name" scope="row"><code>selectedValues</code></th>
<td class="type">Array.&lt;string&gt;</td>
<td class="description last">An array of the values for the currently selected items/rows/records in the report. If nothing is selected the array is empty. The values are typically configured to be the primary key of the records.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

A selection change event handler for a report region with HTML DOM id "myReport".

```
apex.region( "myReport" ).element.on( "apexselectionchange", function( event, data ) {
    console.log( "do something with selected values", data.selectedValues );
} );
```

#### apexwindowresized

This event is triggered on the window a couple hundred milliseconds after the window stops resizing. Listen for this event to adjust or resize page content after the window is done resizing. In some cases this is a better alternative to the window resize event, which is triggered many times as the window is being resized, because it is triggered just once after the window stops resizing.

##### Properties:

| Name    | Type                                  | Description           |
|---------|---------------------------------------|-----------------------|
| `Event` | Event | `jQuery` event object |

##### Example

This example responds to the apexwindowresized event and updates page content based on the new height and width.

```
apex.jQuery( window ).on( "apexwindowresized", function( event ) {
    var window$ = apex.jQuery( this ),
        height = window$.height(),
        width = window$.width();
    // update page content based on new window height and width
});
```

### Functions

#### (static) confirm()

This function is an alias for [apex.page.confirm](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.confirm).

#### (static) item(pItemId) → {[item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html)}

Return an [item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) interface that is used to access item related methods and properties.

Item plug-in developers can override much of the item behavior, by calling [apex.item.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.create) with their overrides.

For items that are created with `apex.item.create` (which should be most items), the item interface can also be accessed from the [apex.items](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.items) collection by `pItemId`. So for an item with name "P1_NAME" the following are equivalent:

    let myItem = apex.items.P1_NAME;
    let myItem = apex.item( "P1_NAME" );

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pItemId` | Element \| string | The item name. This is also the id of the main DOM element associated with the item. For backward compatibility this can also be the main item DOM Element. Passing in an element is deprecated and the id/name should be used instead. |

##### Returns:

The item interface for the given item name. If there is no such item on the page the returned item interface `node` property will be false.

Type
[item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html)

##### Example

This function is not used by itself. See the examples for methods of the [item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) interface.

#### (static) region(pRegionId) → {[region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html)\|null}

Return a [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) interface for the given region id. The returned region interface object can then be used to access region related functions and properties.

Region plug-in developers can define the behavior of their region by calling [apex.region.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html#.create).

For regions that are created with `apex.region.create` (which is most native or plug-in regions that have significant dynamic behavior), the region interface can also be accessed from the [apex.regions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.regions) collection by `pRegionId`. So for a region with id "myRegion" the following are equivalent:

    let myRegion = apex.regions.myRegion;
    let myRegion = apex.region( "myRegion" );

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRegionId` | string | Region id or region DOM id. It is a best practice to give a region an HTML DOM id if it is going to be used from JavaScript otherwise an internally generated id is used. The region DOM id is substituted in the region template using the \#DOM_ID# string. The region id can be found by viewing the page source in the browser. |

##### Returns:

The region interface or null if there is no element with the given `pRegionId`.

Type
[region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) \| null

##### Example

This function is not used by itself. See the examples for methods of the [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) interface.

#### (static) submit()

This function is an alias for [apex.page.submit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.submit).

#### (static) userHasTouched() → {boolean}

Determine if the user is or has been interacting with this web app using touch since the browser session began. Note: it is possible for the user to touch for the first time after this function is called.

It is rare to need know this information since the app should be designed to work for both touch and non-touch environments.

##### Returns:

true if the user has been using touch to interact with the web app and false otherwise.

Type
boolean
