<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html -->
<!-- Namespaces: apex.message -->

# Namespace: message

## QuickNav

### [Properties](#members-section)

- [TYPE](#.TYPE)

### [Functions](#methods-section)

- [addVisibilityCheck](#.addVisibilityCheck)
- [alert](#.alert)
- [ariaAlertMessage](#.ariaAlertMessage)
- [ariaMessage](#.ariaMessage)
- [clearErrors](#.clearErrors)
- [confirm](#.confirm)
- [hidePageSuccess](#.hidePageSuccess)
- [setDismissPreferences](#.setDismissPreferences)
- [setThemeHooks](#.setThemeHooks)
- [showErrors](#.showErrors)
- [showPageSuccess](#.showPageSuccess)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).message

The apex.message namespace is used to handle client-side display and management of messages in Oracle APEX.

### Properties

#### (static) TYPE :object

Message type constants

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `SUCCESS` | string | Success message Value "success". |
| `ERROR` | string | Error message Value "error". |

### Functions

#### (static) addVisibilityCheck(pFunction)

In order to navigate to items (page items or column items) that have an error (or anything else that can be in an error state), the error item must be visible before it is focused. Any region type that can possibly hide its contents should add a visibility check function using this method. Each function added is called for any region or item that needs to be made visible. This function is for APEX region plug-in developers.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pFunction` | function | A function that is called with an element ID. The function should ensure that the element is visible if the element is managed or controlled by the region type that added the function. |

##### Example

```
// For example let's assume we have a Region plug-in type called 'Expander', that can show or hide its contents
// and can contain page items. For purposes of example, this plug-in adds an 't-Expander' class to its region
// element and also has an 'expand' method available, to expand its contents. This region should register a
// visibility check function as follows:
apex.message.addVisibilityCheck( function( id ) {
    var lExpander$ = $( "#" + id ).closest( ".t-Expander" );

    // Check if parent element of the element passed is an 'expander' region
    if ( lExpander$.hasClass( "t-Expander" ) ) {

        // If so, expander region must show its contents
        lExpander$.expander( "expand" );
    }
});
```

#### (static) alert(pMessage, pCallback, pOptionsopt)

Displays an alert dialog with the given message and OK button. The callback function passed as the pCallback parameter is called when the dialog is closed. The dialog displays using the jQuery UI 'Dialog' widget.

There are some differences between this function and a browser's built-in alert function:

- The dialog style will be consistent with the rest of the app.
- The dialog can be moved.
- The call to apex.message.alert does not block. Any code defined following the call to apex.message.alert will run before the user presses OK. Therefore code to run after the user closes the dialog must be done from within the callback, as shown in the example.

##### Parameters:

<table class="params" aria-label="Parameters for alert">
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
<th class="name" scope="row"><code>pMessage</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The message to display in the alert dialog</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes"></td>
<td class="description last">Callback function called when dialog is closed</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Extra dialog options
<h6 id="properties-2">Properties</h6>
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
<th class="name" scope="row"><code>title</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The dialog title. By default, no title will be shown.</td>
</tr>
<tr>
<th class="name" scope="row"><code>style</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The dialog style. Options include: "information", "warning", "danger", or "success". The style will set a dialog icon and visual styling. By default, no special styling is applied.</td>
</tr>
<tr>
<th class="name" scope="row"><code>dialogClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">CSS classes to be applied to the dialog container</td>
</tr>
<tr>
<th class="name" scope="row"><code>iconClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">CSS classes which control the dialog icon. This icon will override the default icon set by <code class="prettyprint">pOptions.style</code></td>
</tr>
<tr>
<th class="name" scope="row"><code>okLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Label of the OK button. By default, the value of the <code class="prettyprint">APEX.DIALOG.OK</code> text message is used</td>
</tr>
<tr>
<th class="name" scope="row"><code>okLabelKey</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The message key to look up the localized message to display for okLabel</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

```
// Displays an alert 'Load complete.', then after the dialog closes executes the 'afterLoad()' function.
apex.message.alert( "Load complete.", function(){
    afterLoad();
});
```

```
// Displays an alert 'Load complete.' with extra options
apex.message.alert( "Load complete.", function() {
    afterLoad();
}, {
    title: "Update",
    style: "information",
    iconClasses: "fa fa-info fa-2x",
    okLabel: "Okay"
} );
```

#### (static) ariaAlertMessage(pMessage)

Emits ARIA live assertive alert message for screen reader users. No visual changes rendered.

Use this function when meaningful dynamic changes to the UI are made that may not be perceivable to users of assistive technologies. It is best to keep the messages short and relevant. See also [apex.message.ariaMessage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html#.ariaMessage).

When this function is called, assistive technologies will immediately notify the user, and could potentially clear the speech queue of previous updates emitted by `apex.message.ariaMessage` and `apex.message.ariaAlertMessage`.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMessage` | string | The alert message for assistive technologies to emit. |

##### Example

The following example emits an alert message 'Load complete' for screen reader users.

```
apex.message.ariaAlertMessage( "Load complete" );
```

#### (static) ariaMessage(pMessage)

Emits ARIA live polite message for screen reader users. No visual changes rendered.

Use this function when meaningful dynamic changes to the UI are made that may not be perceivable to users of assistive technologies. It is best to keep the messages short and relevant. See also [apex.message.ariaAlertMessage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html#.ariaAlertMessage).

When this function is called, assistive technologies will notify users of updates but generally do not interrupt the current task (such as speech), and updates take low priority.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMessage` | string | The message for assistive technologies to emit. |

##### Example

The following example emits the message 'Loading' for screen reader users.

```
apex.message.ariaMessage( "Loading" );
```

#### (static) clearErrors()

This function clears all the errors currently displayed on the page.

##### Example

The following example demonstrates clearing all the errors currently displayed on the page.

```
apex.message.clearErrors();
```

#### (static) confirm(pMessage, pCallback, pOptionsopt)

Displays a confirmation dialog with the given message and OK and Cancel buttons. The callback function passed as the pCallback parameter is called when the dialog is closed, and passes true if OK was pressed and false otherwise. The dialog displays using the jQuery UI 'Dialog' widget.

There are some differences between this function and a browser's built-in confirm function:

- The dialog style will be consistent with the rest of the app.
- The dialog can be moved.
- The call to apex.message.confirm does not block, and does not return true or false. Any code defined following the call to apex.message.confirm will run before the user presses OK or Cancel. Therefore, acting on the user's choice must be done from within the callback, as shown in the example.

##### Parameters:

<table class="params" aria-label="Parameters for confirm">
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
<th class="name" scope="row"><code>pMessage</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The message to display in the confirmation dialog</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes"></td>
<td class="description last">Callback function called when dialog is closed. Function passes the following parameter: - okPressed: True if OK was pressed, False otherwise (if Cancel pressed, or the dialog was closed by some other means).</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Extra dialog options
<h6 id="properties-3">Properties</h6>
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
<th class="name" scope="row"><code>title</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The dialog title. By default, no title will be shown.</td>
</tr>
<tr>
<th class="name" scope="row"><code>style</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The dialog style. Options include: "information", "warning", "danger", or "success". The style will set a dialog icon and visual styling. By default, no special styling is applied.</td>
</tr>
<tr>
<th class="name" scope="row"><code>dialogClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">CSS classes to be applied to the dialog container</td>
</tr>
<tr>
<th class="name" scope="row"><code>iconClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">CSS classes which control the dialog icon. This icon will override the default icon set by <code class="prettyprint">pOptions.style</code></td>
</tr>
<tr>
<th class="name" scope="row"><code>cancelLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Label of the cancel button. By default, the value of the <code class="prettyprint">APEX.DIALOG.CANCEL</code> text message is used</td>
</tr>
<tr>
<th class="name" scope="row"><code>cancelLabelKey</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The message key to lookup the localized message to display for cancelLabel</td>
</tr>
<tr>
<th class="name" scope="row"><code>confirmLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Label of the confirm button. By default, the value of the <code class="prettyprint">APEX.DIALOG.OK</code> text message is used</td>
</tr>
<tr>
<th class="name" scope="row"><code>confirmLabelKey</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The message key to lookup the localized message to display for confirmLabel</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

```
// Displays a confirmation message 'Are you sure?'
// If OK is pressed executes the 'deleteIt()' function
apex.message.confirm( "Are you sure?", function( okPressed ) {
    if( okPressed ) {
        deleteIt();
    }
} );
```

```
// Displays a confirmation dialog with extra options
apex.message.confirm( "Are you sure you wish to delete this record?", function( okPressed ) {
    if( okPressed ) {
        deleteIt();
    }
}, {
    title: "Warning!",
    style: "danger",
    iconClasses: "fa fa-trash fa-2x",
    cancelLabel: "No",
    confirmLabel: "I'm sure"
} );
```

#### (static) hidePageSuccess()

Hides the page-level success message. Tip: As a theme developer, you can influence or override what happens when hiding a page-level success message. For more information, please refer to the apex.message.setThemeHooks function (specifically the beforeHide callback function, where you would need to check for 'pMsgType === apex.message.TYPE.SUCCESS' to isolate when hiding a page-level success message).

##### Example

```
// Hides the page-level success message.
apex.message.hidePageSuccess();
```

#### (static) setDismissPreferences(pOptions)

Allows the theme or app to influence the auto-dismiss behavior of application success messages. Call this function from page initialization code in the Function and Global Variable Declaration property or in a JavaScript file in the application. If no dismiss preferences have been set using `setDismissPreferences` but the application auto-dismiss setting is turned on, success messages will follow the default application setting.

Note that it is important to take into consideration the accessibility impact auto-dismiss could have on users who may use special technology to view their screen or need longer than the default 5 seconds to perceive the message. Those users may not see or read a success message before it is dismissed from the page, and therefore could potentially miss the information in the message. Consider providing users with preference settings that use the `dismissPageSuccess` and `dismissPageSuccessDuration` properties of `setDismissPreferences`, to be able to opt out of the auto-dismiss functionality, and/or have control over dismiss duration.

##### Parameters:

<table class="params" aria-label="Parameters for setDismissPreferences">
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
<td class="description last">An object that contains the following properties:
<h6 id="properties-4">Properties</h6>
<table class="params" aria-label="Parameters for pOptions">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>dismissPageSuccess</code></th>
<td class="type">boolean</td>
<td class="description last">Use this boolean to allow app users to opt in or out of the auto-dismiss behavior. If set to false, success messages will not be dismissed automatically. If set to true, success messages will be dismissed automatically.</td>
</tr>
<tr>
<th class="name" scope="row"><code>dismissPageSuccessDuration</code></th>
<td class="type">number</td>
<td class="description last">Set the amount of time to delay before dismissing the success message. The default duration is 5000 milliseconds. Duration is ignored if dismissPageSuccess is false.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

The following example shows the `dismissPageSuccess` and `dismissPageSuccessDuration` properties defined, which determines the auto-dismiss behavior.

```
apex.message.setDismissPreferences( {
    dismissPageSuccess: true,
    dismissPageSuccessDuration: 10000  // 10 second duration
} );
```

#### (static) setThemeHooks(pOptions)

Allows a theme to influence some behavior offered by the apex.message API. Call this function from theme page initialization code.

##### Parameters:

<table class="params" aria-label="Parameters for setThemeHooks">
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
<td class="description last">An object that contains the following properties:
<h6 id="properties-5">Properties</h6>
<table class="params" aria-label="Parameters for pOptions">
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
<th class="name" scope="row"><code>beforeShow</code></th>
<td class="type">function</td>
<td class="description last">Callback function that will be called prior to the default show page notification functionality. Optionally return false from the callback to completely override default show functionality. Callback passes the following parameters:
<ul>
<li>pMsgType: Identifies the message type. Use <a href="apex.message.html#.TYPE">apex.message.TYPE</a> to identify whether showing an error or success message.</li>
<li>pElement$: jQuery object containing the element being shown.</li>
</ul></td>
</tr>
<tr>
<th class="name" scope="row"><code>beforeHide</code></th>
<td class="type">function</td>
<td class="description last">Callback function that will be called prior to the default hide page notification functionality. Optionally return false from the callback to completely override default hide functionality. Callback passes the following parameters:
<ul>
<li>pMsgType: Identifies the message type. Use <a href="apex.message.html#.TYPE">apex.message.TYPE</a> to identify whether showing an error or success message.</li>
<li>pElement$: jQuery object containing the element being hidden.</li>
</ul></td>
</tr>
<tr>
<th class="name" scope="row"><code>closeNotificationSelector</code></th>
<td class="type">string</td>
<td class="description last">jQuery selector to identify the close buttons in notifications, defaults to that used by Universal Theme ("button.t-Button-closeAlert"). May be required by custom themes if you still want to have APEX handle the hide logic, and where messaging contains a close notification button with a different class.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pageErrorsContainerSelector</code></th>
<td class="type">string</td>
<td class="description last">jQuery selector to identify the HTML element used to display the errors, defaults to that used by Universal Theme ("#t_Alert_Notification"). May be required by custom themes if you still want to have APEX to focus the error region after the page level errors are displayed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>successMessageContainerSelector</code></th>
<td class="type">string</td>
<td class="description last">jQuery selector to identify the HTML element used to display the success messages on the page, defaults to that used by Universal Theme ("#t_Alert_Success"). May be required by custom themes if you still want APEX to handle dismissing success messages automatically.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

The following example shows beforeShow and beforeHide callbacks defined, that add and remove an additional class 'animate-msg' on the notification element, before the default show and hide logic. This will only happen for success messages because of the check on pMsgType.
Note: The callbacks do not return anything, therefore the default show / hide behavior will happen after the callback.

```
apex.message.setThemeHooks({
    beforeShow: function( pMsgType, pElement$ ){
        if ( pMsgType === apex.message.TYPE.SUCCESS ) {
            pElement$.addClass( "animate-msg" );
        }
    },
    beforeHide: function( pMsgType, pElement$ ){
        if ( pMsgType === apex.message.TYPE.SUCCESS ) {
            pElement$.removeClass( "animate-msg" );
        }
    }
});
```

#### (static) showErrors(pErrors)

This function displays all errors on the apex.message error stack. If you do not want to add to the stack, you must first call clearErrors(). Errors will display using the current app's theme's templates. For page level messages (where location = "page"), error messages use markup from the page template's 'Subtemplate \> Notification' attribute. For item level messages (where location = "inline"), error messages use markup from the item's label template's 'Error Display \> Error Template' attribute. A side effect of calling this function is that if there are page level errors, APEX will focus the errors container, please refer to [apex.message.setThemeHooks](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html#.setThemeHooks) (specifically property pageErrorsContainerSelector), and if only displaying inline errors it will try to focus the first inline error on the page following the display order.

Note Theme Developers should bear in mind the following:

- To display errors for a theme correctly, it must define both of the template attributes described above. In addition, for inline errors the label template must reference the \#ERROR_TEMPLATE# substitution string in either the 'Before Item' or 'After Item' attributes of your label templates.
- As a theme developer, you can influence or override what happens when showing page level errors. For more information, please refer to [apex.message.setThemeHooks](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html#.setThemeHooks), (specifically the beforeShow callback function, where you would need to check for 'pMsgType === apex.message.TYPE.ERROR' to isolate when showing page level errors).

##### Parameters:

<table class="params" aria-label="Parameters for showErrors">
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
<th class="name" scope="row"><code>pErrors</code></th>
<td class="type">Object | Array.&lt;Object&gt;</td>
<td class="description last">An object, or array of objects with the following properties:
<h6 id="properties-6">Properties</h6>
<table class="params" aria-label="Parameters for pErrors">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>type</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">Must pass "error". Other notification types are reserved for future use.</td>
</tr>
<tr>
<th class="name" scope="row"><code>location</code></th>
<td class="type">string | Array.&lt;string&gt;</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">Possible values are: "inline", "page" or [ "inline", "page" ].</td>
</tr>
<tr>
<th class="name" scope="row"><code>pageItem</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">Item reference where an 'inline' error should display. Required when location = "inline".</td>
</tr>
<tr>
<th class="name" scope="row"><code>message</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">The error message.</td>
</tr>
<tr>
<th class="name" scope="row"><code>unsafe</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">true</td>
<td class="description last">Pass true so that the message will be escaped by showErrors. Pass false if the message is already escaped and does not need to be escaped by showErrors.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

In this example, we have 2 new errors to display. We do not want to add to any existing errors that may be displayed, so we first clear any errors. Because we are displaying 2 errors, we pass an array containing 2 error objects. The first error states 'Name is required!', and will display at both 'page' level, and 'inline' with the item 'P1_ENAME'. The message text is considered safe and therefore will not be escaped. The second error states 'Page error has occurred!', and will just display at page level, and the message text is considered safe and therefore will not be escaped.

```
// First clear the errors
apex.message.clearErrors();

// Now show new errors
apex.message.showErrors( [
    {
        type:       "error",
        location:   [ "page", "inline" ],
        pageItem:   "P1_ENAME",
        message:    "Name is required!",
        unsafe:     false
    },
    {
        type:       "error",
        location:   "page",
        message:    "Page error has occurred!",
        unsafe:     false
    }
] );
```

#### (static) showPageSuccess(pMessage)

Displays a page-level success message. This will clear any previous success messages displayed, and also assumes there are no errors, so will clear any errors previously displayed. Success messages will display using the current app's theme's template. Specifically for page success messages, the markup from the page template's 'Subtemplate \> Success Message' attribute will be used.

Tip: As a theme developer, you can influence or override what happens when showing a page-level success message. For more information, please refer to the [apex.message.setThemeHooks](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html#.setThemeHooks) function (specifically the `beforeShow` callback function, where you would need to check for `pMsgType === apex.message.TYPE.SUCCESS` to isolate when showing a page-level success message).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMessage` | String | The success message to display. |

##### Example

```
// Displays a page-level success message 'Changes saved!'.
apex.message.showPageSuccess( "Changes saved!" );
```
