<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html -->
<!-- Namespaces: apex.page -->

# Namespace: page

## QuickNav

### [Functions](#methods-section)

- [cancelWarnOnUnsavedChanges](#.cancelWarnOnUnsavedChanges)
- [confirm](#.confirm)
- [isChanged](#.isChanged)
- [submit](#.submit)
- [validate](#.validate)
- [warnOnUnsavedChanges](#.warnOnUnsavedChanges)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).page

This namespace is used for all client-side page related functions of Oracle APEX.

### Functions

#### (static) cancelWarnOnUnsavedChanges()

Call to remove the handler that checks for unsaved changes. This is useful to do before any kind of cancel operation where the user is intentionally choosing to lose the changes. It is not normally necessary to call this function because the declarative attribute Warn on Unsaved Changes with value Do Not Check will do it automatically. Adding the class `js-ignoreChange` to a link (anchor element) or button will cause this function to be called before the link or button action.

##### Example

The following sets up a handler on a custom cancel button, to leave the page without checking for changes.

```
apex.jQuery( "#custom-cancel-button" ).on( "click", function() {
    apex.page.cancelWarnOnUnsavedChanges();
    apex.navigation.redirect( someUrl );
} );
```

#### (static) confirm(pMessageopt, pOptionsopt)

Displays a confirmation dialog showing a message, pMessage, and depending on the user's choice, submits the page or cancels submitting. Depending on the value of the page's Reload on Submit attribute, the page is submitted using Ajax or with a normal form submission post request.

Once the user chooses to submit the page, the behavior is the same as for the [apex.page.submit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.submit) function. The shorter alias for this function [apex.confirm](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.confirm) with the same parameters can also be used.

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
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The confirmation message to display. The default is "Would you like to perform this delete action?". It is best to supply your own message because the default message is not localized.
<p>Note: The default message is deprecated. In the future this argument will be required.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">string | Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If this is a string, it will be used to set the REQUEST value. If this is null or omitted, the page will be submitted with no REQUEST value. If this is an object, you can define the following properties:
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
<th class="name" scope="row"><code>request</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The REQUEST value. For the confirm function the default is "Delete".</td>
</tr>
<tr>
<th class="name" scope="row"><code>set</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing name/value pairs of items to set on the page prior to submission. The object properties are page item names and the item value is set to the property value. The default is to not set any page items.</td>
</tr>
<tr>
<th class="name" scope="row"><code>showWait</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true, a 'Wait Indicator' spinner is displayed, which can be useful when running long page operations. The default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>submitIfEnter</code></th>
<td class="type">Event</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">This option is not useful for the confirm function.</td>
</tr>
<tr>
<th class="name" scope="row"><code>reloadOnSubmit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Override the reload on submit setting of the page. Set to one of the following: "A" (always) or "S" (success)</td>
</tr>
<tr>
<th class="name" scope="row"><code>ignoreChange</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true (the default) and the warnOnUnsavedChanges feature is enabled, no warning will be given if there are changes. If false and the warnOnUnsavedChanges feature is enabled and there are changes, a warning will be given. If warnOnUnsavedChanges feature is disabled, there is never a warning. Set this to false if the submit will not actually save the data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>validate</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true, check the validity of page items and models before submitting the page. If anything is not valid then show an alert dialog and don't submit the page. The default is false.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

Shows a confirmation dialog with the text 'Delete Department'. If the user chooses to proceed with the delete, the current page is submitted with a REQUEST value of 'DELETE'.

```
apex.page.confirm( "Delete Department", 'DELETE' );
```

This example is the same as the previous one but uses the shorter alias.

```
apex.confirm( "Delete Department", 'DELETE' );
```

This example shows a confirmation message with the 'Save Department?' text. If the user chooses to proceed with the save, the page is submitted with a REQUEST value of 'SAVE' and 2 page item values are set, P1_DEPTNO to 10 and P1_EMPNO to 5433.

```
apex.page.confirm( "Save Department?", {
    request: "SAVE",
    set: {
        "P1_DEPTNO": 10,
        "P1_EMPNO": 5433
    }
} );
```

This example is the same as the previous one but uses the shorter alias.

```
apex.confirm( "Save Department?", {
    request: "SAVE",
    set: {
        "P1_DEPTNO": 10,
        "P1_EMPNO": 5433
    }
} );
```

#### (static) isChanged() → {boolean}

Return true if any page items or APEX models on this page have changed since last being sent to the server. Items that are disabled or are configured to ignore changes are not included in the check. This will call the `pExtraIsChanged` function set in [apex.page.warnOnUnsavedChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.warnOnUnsavedChanges) if one was supplied and only if no other changes are found first.

Tip: Put the page in debug mode to see debug info messages in the browser console reporting any changed models or the first changed page item found.

See also [item#isChanged](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html#isChanged), [apex.model.anyChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.anyChanges).

##### Returns:

true if there are any changes, otherwise false.

Type
boolean

##### Example

The following example checks if the page is changed before performing some action.

```
if ( apex.page.isChanged() ) {
    // do something when the page has changed
}
```

#### (static) submit(pOptionsopt) → {boolean\|undefined}

This function submits the page. The shorter alias for this function [apex.submit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.submit) with the same parameters can also be used. Depending on the value of the page's Reload on Submit attribute, the page is submitted using Ajax or with a normal form submission post request.

This function triggers a [apex.event:apexbeforepagesubmit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexbeforepagesubmit) event on the [apex.gPageContext\$](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.gPageContext$) which can be canceled by an event handler. If canceled, the page is not submitted. Just before the page is submitted, this function triggers a [apex.event:apexpagesubmit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexpagesubmit) event on the [apex.gPageContext\$](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.gPageContext$), which cannot be canceled.

##### Parameters:

<table class="params" aria-label="Parameters for submit">
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
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">string | Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If this is a string, it will be used to set the REQUEST value. If this is null, the page will be submitted with no REQUEST value. If this is an object, you can define the following properties:
<h6 id="properties-1">Properties</h6>
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
<th class="name" scope="row"><code>request</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The REQUEST value. For a submit function the default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>set</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing name/value pairs of items to set on the page prior to submission. The object properties are page item names and the item value is set to the property value. The default is to not set any page items.</td>
</tr>
<tr>
<th class="name" scope="row"><code>showWait</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true, a 'Wait Indicator' spinner is displayed, which can be useful when running long page operations. The wait indicator is created using <a href="apex.widget.html#.waitPopup">apex.widget.waitPopup</a>. The default is false. Note: When the page is submitted with ajax (controlled with the page attribute Reload on Submit = Only for Success) a progress spinner may still be shown as part of the ajax request even if showWait is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>submitIfEnter</code></th>
<td class="type">Event</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If you only want to submit when the ENTER key has been pressed, call apex.page.submit in the keydown or keypress event handler and pass the event object in this parameter.</td>
</tr>
<tr>
<th class="name" scope="row"><code>reloadOnSubmit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Override the reload on submit setting of the page. Set to one of the following: "A" (always) or "S" (success)</td>
</tr>
<tr>
<th class="name" scope="row"><code>ignoreChange</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true (the default) and the warnOnUnsavedChanges feature is enabled, no warning will be given if there are changes. If false and the warnOnUnsavedChanges feature is enabled and there are changes there will be a warning. If warnOnUnsavedChanges feature is disabled there is never a warning. Set this to false if the submit will not actually save the data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>validate</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true, check the validity of page items and models before submitting the page. If anything is not valid then show an alert dialog and don't submit the page. The default is false.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Returns:

If the submitIfEnter option is specified, a Boolean value is returned. If the ENTER key is not pressed, true is returned and if the ENTER key is pressed, false is returned. If submitIfEnter is not specified, undefined is returned.

Type
boolean \| undefined

##### Examples

Submits the current page with a REQUEST value of 'DELETE'.

```
apex.page.submit( "DELETE" );
```

This example is the same as the previous one but uses the shorter alias.

```
apex.submit( "DELETE" );
```

This example submits the page with a REQUEST value of 'DELETE' and two page item values are set, P1_DEPTNO to 10 and P1_EMPNO to 5433 . During submit, a wait icon is displayed as a visual indicator for the user.

```
apex.page.submit( {
    request: "DELETE",
    set: {
       "P1_DEPTNO": 10,
       "P1_EMPNO": 5433
    },
    showWait: true,
} );
```

This example is the same as the previous one but uses the shorter alias.

```
apex.submit( {
    request: "DELETE",
    set: {
       "P1_DEPTNO": 10,
       "P1_EMPNO": 5433
    },
    showWait: true,
} );
```

This example shows how to submit the page when the ENTER key is pressed on a text input.

```
apex.jQuery("#P1_TEXT").on( "keydown", function( event ) {
  apex.page.submit({
      submitIfEnter: event
  });
});
```

#### (static) validate(pLocationopt) → {boolean}

Check if any page items or submittable APEX models on the page are invalid. Any errors are shown using the [apex.message.showErrors](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.message.html#.showErrors) function.

Note: This function does not actually perform any validation. Use HTML 5 validation attributes or API to validate items.

##### Parameters:

<table class="params" aria-label="Parameters for validate">
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
<th class="name" scope="row"><code>pLocation</code></th>
<td class="type">string | Array.&lt;string&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional location of where to display messages. See <a href="apex.message.html#.showErrors">apex.message.showErrors</a> <code class="prettyprint">location</code> option for details. Default is ["inline", "page"]</td>
</tr>
</tbody>
</table>

##### Returns:

true if page is valid, otherwise false.

Type
boolean

##### Example

The following example checks if the page is valid when a button with id checkButton is pressed.

```
apex.jQuery( "#checkButton" ).on( "click", function() {
    if ( !apex.page.validate() ) {
        alert("Please correct errors");
    }
} );
```

#### (static) warnOnUnsavedChanges(pMessageopt, pExtraIsChangedopt)

Initialize a handler that checks for unsaved changes anytime the page is about to unload. This is safe to call multiple times. The pMessage and pExtraIsChanged parameters override any previous values. This function is called automatically when the page attribute Warn on Unsaved Changes is set to yes. The main reason to call this manually is to customize the parameters.

The actual checking for changes is done by [apex.page.isChanged](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.isChanged).

##### Parameters:

<table class="params" aria-label="Parameters for warnOnUnsavedChanges">
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
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Message to display when there are unsaved changes. If the message is not given, a default message is used.
<p>Note: Most browsers do not show this message.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>pExtraIsChanged</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional additional function to be called, checking if there are any unsaved changes. It should return true if there are unsaved changes, and false otherwise. It is only called if there are no changes to any models or page items. This is useful if there are non-standard state-full inputs on the page that are not APEX items and do not keep their state in an APEX model. It allows writing a custom function to detect if those non-standard inputs have changed.</td>
</tr>
</tbody>
</table>

##### Example

The following example enables the 'Warn on unsaved changes' feature with a custom message.

```
apex.page.warnOnUnsavedChanges( "The employee record has been changed" );
```
