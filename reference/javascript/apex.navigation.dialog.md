<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.dialog.html -->
<!-- Namespaces: apex.navigation.dialog -->

# Namespace: dialog

## QuickNav

### [Functions](#methods-section)

- [cancel](#.cancel)
- [close](#.close)
- [registerCloseHandler](#.registerCloseHandler)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html)[.navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html).dialog

This namespace contains functions related to a dialog opened with [apex.navigation.dialog](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html#.fn:dialog). All of the functions in the [apex.navigation.dialog](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html#.fn:dialog) namespace need to be run in the context of the specified dialog page.

### Functions

#### (static) cancel(pIsModal)

Closes the dialog window.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pIsModal` | boolean | If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal. |

##### Example

This example demonstrates closing a modal dialog page

```
apex.navigation.dialog.cancel( true );
```

#### (static) close(pIsModal, pActionopt)

Executes an action and then closes the dialog window.

##### Parameters:

<table class="params" aria-label="Parameters for close">
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
<th class="name" scope="row"><code>pIsModal</code></th>
<td class="type">boolean</td>
<td class="attributes"></td>
<td class="description last">If true, then the dialog is identified as being modal. If false, then the dialog is identified as being non-modal.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAction</code></th>
<td class="type">string | function | Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The action can be one of the following:
<ul>
<li>a URL which will trigger a redirect in the parent page</li>
<li>a function to redirect to a different dialog page</li>
<li>false to cancel the dialog</li>
<li>an object of page items and values which will be exposed in the apexafterclosedialog or apexafterclosecanceldialog event</li>
<li>an array of page item names, the values will be gathered from the page items to create an object of page item values to be exposed in the apexafterclosedialog or apexafterclosecanceldialog event</li>
</ul></td>
</tr>
</tbody>
</table>

##### Examples

This example demonstrates chaining from one modal dialog page to another, where the `pAction` parameter is a function that redirects to a different modal dialog page, specified in the URL:

```
apex.navigation.dialog.close( true, function( pDialog ) {
    apex.navigation.dialog(
        url,
        {
            title: "About",
            height: "480",
            width: "800",
            maxWidth: "1200",
            modal: true,
            dialog: pDialog,
            resizable: false
        },
        "t-Dialog-page--standard",
        $( "#mybutton" ) );
} );
```

This example demonstrates closing a modal dialog page, and returning an array of page items, `P3_EMPNO` and `P3_ENAME`. The values from the page items can then be used by the page that launched the modal dialog, via a `Dialog Closed` Dynamic Action event.

```
apex.navigation.dialog.close( true, ["P3_EMPNO","P3_ENAME"] );
```

This example demonstrates closing a modal dialog page, and returning an object of page item, `dialogPageId` and its value of `3`. The returned value can be used by the page that launched the modal dialog, via a `Dialog Closed` Dynamic Action event, to identify the page ID of the modal dialog that triggered the event.

```
apex.navigation.dialog.close( true, { dialogPageId: 3 } );
```

#### (static) registerCloseHandler(pOptions)

Registers the internal "close" event of a dialog. The event will be triggered by fireCloseEvent and depending on the passed in `pAction` will:

- Re-use the existing dialog and navigate to a different dialog page
- Navigate to a different page in the caller
- Cancel the dialog
- Close the dialog and trigger the "apexafterclosedialog" or "apexafterclosecanceldialog" event

##### Parameters:

<table class="params" aria-label="Parameters for registerCloseHandler">
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
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">Object</td>
<td class="description last">Has to contain the following attributes:
<h6 id="properties">Properties</h6>
<table class="params" aria-label="Parameters for pOptions">
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
<th class="name" scope="row"><code>handler$</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">jQuery object where the event will be registered for.</td>
</tr>
<tr>
<th class="name" scope="row"><code>dialog</code></th>
<td class="type">Element | Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">DOM Element/jQuery/... object of the current dialog instance which will be passed into the open dialog call if the existing dialog should be re-used.</td>
</tr>
<tr>
<th class="name" scope="row"><code>closeFunction</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Function which is used to close the dialog.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Deprecated:
- since version 18.2

##### Example

This example demonstrates a call to open the url in a named popup window, "Information". The new window can be accessed from variable `myPopupWindow`. Some additional parameters are also set in the call, to control scrolling, resizing and the visibility of a toolbar. The variable `myTriggeringElement` is used to define the triggering element of the popup, a button named `myButton`. Using a call to [apex.navigation.dialog.registerCloseHandler](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.dialog.html#.registerCloseHandler), a new handler can be defined, to associate the close action of the dialog with the button.

```
var myTriggeringElement,
    myPopupWindow;

myTriggeringElement = apex.jQuery( '#myButton' );

myPopupWindow = apex.navigation.popup ( {
    url:       "f?p=102:2:&APP_SESSION.:::2::",
    name:      "Information",
    scroll:    "no",
    resizable: "no",
    toolbar:   "yes"
} );

apex.navigation.dialog.registerCloseHandler( {
    handler$:           myTriggeringElement,
    dialog:             myPopupWindow,
    triggeringElement$: myTriggeringElement,
    closeFunction:      function() {
        myPopupWindow.close();
    }
});
```
