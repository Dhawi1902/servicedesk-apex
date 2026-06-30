<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html -->
<!-- Namespaces: apex.item -->

# Namespace: item

## QuickNav

### [Functions](#methods-section)

- [addAttachHandler](#.addAttachHandler)
- [create](#.create)
- [isItem](#.isItem)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).item

The apex.item namespace contains global functions related to Oracle APEX items. The [apex.item.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.create) function defines the behavior for an item type. The [apex.item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.fn:item) function provides access to an [item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) interface for a specific item.

### Functions

#### (static) addAttachHandler(pHandler)

This function is only for item plug-in developers. It provides a way for item plug-ins to initialize without having to render a call to a JavaScript function. The handler function is called when the page initializes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pHandler` | function | *pHandler( pContext\$ )*. A function provided by the plug-in that will initialize all item instances of the plug-in type. The function receives a jQuery object that is the context in which the item(s) can be found. |

Since:
- 20.2

##### Example

In this example the plug-in render function produces an input element with class "mySuperInput". The following code goes in the plug-in's JavaScript file.

```
const mySuperInputPrototype = {
    type: "MY_SUPER_INPUT",
    // other item interface methods ...
};
function attachMySuperInput( pContext$ ) {
   $( "input.mySuperInput", pContext$ ).each( function() {
       var myItem$ = $(this);
       // Do what is needed to initialize the plug-in myItem$ element.
       apex.item.create( this.id, mySuperInputPrototype );
   } );
}
apex.item.addAttachHandler( attachMySuperInput );
```

#### (static) create(pItemId, pItemImpl) → {object}

This function is only for item plug-in developers. It provides a plug-in specific implementation for the item. This is necessary to seamlessly integrate a plug-in item type with the built-in item related client-side functionality of Oracle APEX. A plug-in should call this method even if it passes in an empty `pItemImpl` object. See also [apex.item.addAttachHandler](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.addAttachHandler).

##### Parameters:

<table class="params" aria-label="Parameters for create">
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
<th class="name" scope="row"><code>pItemId</code></th>
<td class="type">Element | string</td>
<td class="description last">The item name. This is also the id of the main DOM element associated with the item. For backward compatibility this can also be the main item DOM Element. Passing in an element is deprecated and the id/name should be used instead.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pItemImpl</code></th>
<td class="type">object | function</td>
<td class="description last">An object with properties that provide any functions needed to customize the Oracle APEX item instance behavior. All the properties of this object are copied to the item interface so it is possible to add additional methods or properties to it. The <a href="item.html">item</a> interface has default implementations for each of its methods that are appropriate for many page items particularly for items that use standard form elements. For each method of <a href="item.html">item</a> you should check if the default handling is appropriate for your item plug-in. If it isn't you can provide your own implementation of the corresponding function through this <code class="prettyprint">pItemImpl</code> object. The default behavior is used for any functions omitted.
<p>This parameter can also be a function that is called during creation with a single object argument that is the base item interface. The function should add any needed functions or properties to the item interface.</p>
<p>ItemImpl can contain any of the following properties:</p>
<h6 id="properties">Properties</h6>
<table class="params" aria-label="Parameters for pItemImpl">
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
<th class="name" scope="row"><code>addValue</code></th>
<td class="type">function</td>
<td class="description last"><em>function(value, displayValue)</em> Specify a function for adding a value to the item, where the item supports multiple values. This is called by the <a href="item.html#addValue">item#addValue</a> method which has no default behavior for adding a value. Currently there is no client-side functionality of Oracle APEX dependent on this.
<p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>afterModify</code></th>
<td class="type">function</td>
<td class="description last"><em>function()</em> Specify a function that is called after an item is modified. This is useful, for example as some frameworks need to be notified if widgets are modified, for example their value has been set, or they have been disabled in order to keep both the native and enhanced controls in sync. This callback provides the hook to do so.
<p>Note: This callback is deprecated.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>delayLoading</code></th>
<td class="type">boolean</td>
<td class="description last"><p>Specify if the item needs to delay APEX page loading. There are many places in the APEX framework where client-side logic is run after the page has finished loading, for example Dynamic Actions set to 'Fire on Initialization', or code defined in the page level attribute 'Execute when Page Loads'. If an item takes longer to initialize (for example if it uses a module loader like RequireJS to load additional modules, or if the underlying JavaScript widget itself takes longer to initialize), setting delayLoading to true allows you to tell APEX to wait for your item to finish initializing, before firing it's built in page load logic. This allows you as a developer to ensure that your item is compatible with these built-in APEX features like Dynamic Actions.</p>
<p>When this is set to true, <em>apex.item.create</em> will return a <code class="prettyprint">jQuery</code> deferred object, which will need to be resolved in order for page loading to complete.</p>
<p>Note: If using this option, you must ensure your item initializes as quickly as possible, and also that the returned deferred object is always resolved, to avoid disrupting the default APEX page load behavior.</p>
<p>Note: It is not necessary for the plug-in item to provide the <a href="item.html#isReady">item#isReady</a> or <a href="item.html#whenReady">item#whenReady</a> functions. They are added automatically.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>disable</code></th>
<td class="type">function</td>
<td class="description last"><em>function()</em> Specify a function for disabling the item, which overrides the default <a href="item.html#disable">item#disable</a> behavior. The default behavior sets the disabled property of the item node to true. Providing this override could be useful for example where the item consists of compound elements which also need disabling, or if the item is based on a widget that already has its own disable method that you want to reuse. Ensuring the item can disable correctly means certain item related client-side functionality of Oracle APEX still works, for example when using the Disable action of a Dynamic Action to disable the item.
<p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>displayValueFor</code></th>
<td class="type">function</td>
<td class="description last"><em>function(value, [state]):string</em> Specify a function that returns a string display value that corresponds to the given value. This overrides the default behavior of the <a href="item.html#displayValueFor">item#displayValueFor</a> method. The default behavior supports a standard select element and conceals the value of password inputs.</td>
</tr>
<tr>
<th class="name" scope="row"><code>enable</code></th>
<td class="type">function</td>
<td class="description last"><em>function()</em> Specify a function for enabling the item, which overrides the default <a href="item.html#enable">item#enable</a> behavior. The default behavior sets the disabled property of the item node to false. Providing this override could be useful for example where the item consists of compound elements which also need enabling, or if the item is based on a widget that already has its own enable method that you want to reuse. Ensuring the item can enable correctly means certain item related client-side functionality of Oracle APEX still works, for example when using the Enable action of a Dynamic Action to enable the item.
<p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>getValidationMessage</code></th>
<td class="type">function</td>
<td class="description last"><em>function():string</em> Specify a function to return the validation message, which overrides the default <a href="item.html#getValidationMessage">item#getValidationMessage</a> behavior. This function is not needed if the item implementation uses the native HTML validation API such as <code class="prettyprint">setCustomValidity</code>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>getValidity</code></th>
<td class="type">function</td>
<td class="description last"><em>function():ValidityState</em> Specify a function that returns a validity state object, which overrides the default <a href="item.html#getValidity">item#getValidity</a> behavior. The returned object must at a minimum have the Boolean valid property. It may include any of the properties defined for the HTML5 ValidityState object. The default implementation returns the validity object of the item element if there is one otherwise it returns { valid: true }.</td>
</tr>
<tr>
<th class="name" scope="row"><code>getValue</code></th>
<td class="type">function</td>
<td class="description last"><em>function():string</em> Specify a function for getting the item's value, which overrides the default <a href="item.html#getValue">item#getValue</a> behavior. The default behavior handles the standard HTML form elements. Ensuring the item returns its value correctly means certain item related client-side functionality of Oracle APEX still works, for example in Dynamic Actions to evaluate a When condition on the item, or when calling the JavaScript function <a href="global.html#$v">$v</a> to get the item's value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hide</code></th>
<td class="type">function</td>
<td class="description last"><em>function()</em> Specify a function for hiding the item, which overrides the default <a href="item.html#hide">item#hide</a> behavior. This could be useful for example where the item consists of compound elements which also need hiding, or if the item is based on a widget that already has its own hide method that you want to reuse. Ensuring the item can hide correctly means certain item related client-side functionality of Application Express still works, for example when using the Hide action of a Dynamic Action, to hide the item.
<p>Note: if the item is in an element with an id that matches the name of the item with a '_CONTAINER' suffix then the container element is hidden and this function is not called.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>isChanged</code></th>
<td class="type">function</td>
<td class="description last"><em>function():Boolean</em> Specify a function that returns true if the current value of the item has changed and false otherwise, which overrides the default <a href="item.html#isChanged">item#isChanged</a> behavior. This function allows the Warn on Unsaved Changes feature to work. The default implementation uses built-in functionality of HTML form elements to detect changes. If this function does not work correctly then changes to the plug-in item type value will not be detect and the user will not be warned when they leave the page.</td>
</tr>
<tr>
<th class="name" scope="row"><code>isDisabled</code></th>
<td class="type">function</td>
<td class="description last"><em>function():Boolean</em> Specify a function that returns true if the item is disabled and false otherwise, which overrides the default <a href="item.html#isDisabled">item#isDisabled</a> behavior. Ensuring the item returns its value correctly means certain item related client-side functionality of Oracle APEX still works, for example client-side validation and Interactive Grid.</td>
</tr>
<tr>
<th class="name" scope="row"><code>item_type</code></th>
<td class="type">string</td>
<td class="description last">A string that identifies the type of the item.</td>
</tr>
<tr>
<th class="name" scope="row"><code>getPopupSelector</code></th>
<td class="type">function</td>
<td class="description last"><em>function():string</em> Specify a function that returns a CSS selector that locates the popup used by the item. Any plug-in item type that uses a popup (a div added near the end of the document that is positioned near the input item and floating above it) needs to provide a CSS selector that locates the top level element of the popup. This allows the item type to be used in the Interactive Grid region or any other region that needs to coordinate focus with the popup. The default implementation returns null.
<p>In addition the top level popup element must be focusable (have attribute tabindex = -1).</p>
<p>For best behavior of a popup in the Interactive Grid. The popup should:</p>
<ul>
<li>have a way of taking focus</li>
<li>close on escape when it has focus</li>
<li>close when the element it is attached to loses focus</li>
<li>return focus to the element that opened the popup when it closes</li>
<li>manage its tab stops so they cycle in the popup or return to the element that opened the popup at the ends</li>
</ul></td>
</tr>
<tr>
<th class="name" scope="row"><code>loadingIndicator</code></th>
<td class="type">function</td>
<td class="description last"><em>function(loadingIndicator$):jQuery</em> Specify a function that normalizes how the item's loading indicator is displayed during a partial page refresh of the item. This function must pass the pLoadingIndicator$ parameter as the first parameter, which contains a jQuery object with a reference to the DOM element for the loading indicator. The function then adds this loading indicator to the appropriate DOM element on the page for the item, and also returns the jQuery object reference to the loading indicator, such that the framework has a reference to it, so it can remove it once the call is complete.
<p>This is used, for example, if the item is a Cascading LOV and the Cascading LOV Parent Item changes, or when setting the item's value by using one of the server-side Dynamic Actions such as Set Value - SQL Statement.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>nullValue</code></th>
<td class="type">string</td>
<td class="description last">Specify a value to be used to determine if the item is null. This is used when the item supports definition of a List of Values, where a developer can define a Null Return Value for the item and where the default item handling needs to know this in order to assert if the item is null or empty. This can be done by following these steps:
<p>From the Render function in the plug-in definition, emit the value stored in p_item.lov_null_value as part of the item initialization JavaScript code that fires when the page loads. For example:</p>
<pre class="class=&quot;prettyprint&quot;"><code>  # Assumes that you have some JavaScript function called &#39;com_your_company_your_item&#39;
  # that accepts 2 parameters, the first being the name of the item and the second being
  # an object storing properties (say pOptions) required by the item&#39;s client side code.
  apex_javascript.add_onload_code (
      p_code =&gt; &#39;com_your_company_your_item(&#39;||
          apex_javascript.add_value(
              apex_plugin_util.page_item_names_to_jquery(p_item.name)||&#39;, {&#39;||
          apex_javascript.add_attribute(
              &#39;lovNullValue&#39;, p_item.lov_null_value, false, false)||
     &#39;});&#39; );
  </code></pre>
<p>Then, in the implementation of com_your_company_your_item( pName, pOptions ) you have the value defined for the specific item's Null Return Value in the pOptions.lovNullValue property. This can then be used in your call to <a href="apex.item.html#.create">apex.item.create</a>, to set the nullValue property.</p>
<p>Ensuring the nullValue property is set means certain item related client-side functionality of Oracle APEX still works, for example, in Dynamic Actions to correctly evaluate an is null or is not null when condition on the item, or when calling the JavaScript function <a href="item.html#isEmpty">item#isEmpty</a> to determine if the item is null.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>refresh</code></th>
<td class="type">function</td>
<td class="description last"><em>function()</em> Specify a function to refresh the item. This is called by the <a href="item.html#refresh">item#refresh</a> method. The default behavior triggers event "apexrefresh" for legacy plug-in items.</td>
</tr>
<tr>
<th class="name" scope="row"><code>reinit</code></th>
<td class="type">function</td>
<td class="description last"><em>function(value, display):function</em> Specify a function to initialize an item's value when it is reused in a new context. This is only called for column items every time a new record is being edited. The default behaviour calls <a href="item.html#setValue">item#setValue</a> and suppresses the change event. Items that support cascading LOVs should implement this function to first set the item's value (which may also require adding the value as an option in the item), then return a function where the cascade will take place.</td>
</tr>
<tr>
<th class="name" scope="row"><code>removeValue</code></th>
<td class="type">function</td>
<td class="description last"><em>function(value)</em> Specify a function for removing a value from the item, where the item supports multiple values. This is called by the <a href="item.html#removeValue">item#removeValue</a> method which has no default behavior for removing a value. Currently there is no client-side functionality of Oracle APEX dependent on this.
<p>Note: Even if this function is defined, the default handling always calls the afterModify method.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>setFocusTo</code></th>
<td class="type">Element | string | function</td>
<td class="description last">Specify the element to receive focus when focus is set to the item using the <a href="item.html#setFocus">item#setFocus</a> method. This can be defined as either a jQuery selector, jQuery object or DOM Element which identifies the DOM element, or a no argument function that returns a jQuery object referencing the element. This can be useful when the item consists of compound elements, and you do not want focus to go to the element that has an ID matching the item name, which is the default behavior.
<p>Ensuring the item sets focus correctly means certain item related client-side functionality of Oracle APEX still works, for example when using the Set Focus action of a Dynamic Action to set focus to the item, when users follow the Go to Error link that displays in a validation error message to go straight to the associated item, or when the item is the first item on a page and the developer has the page level attribute Cursor Focus set to First item on page.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>setStyleTo</code></th>
<td class="type">Element | string | function</td>
<td class="description last">Specify the element to receive style, when style is set to the item using the <a href="item.html#setStyle">item#setStyle</a> method. This can be defined as either a jQuery selector, jQuery object or DOM Element which identifies the DOM element(s), or a no argument function that returns a jQuery object referencing the element(s). This is useful when the item consists of compound elements, and you do not want style to be set to the element or just the element, that has an ID matching the item name which is the default behavior.
<p>Ensuring the item sets style correctly means certain item related client-side functionality of Oracle APEX still works, for example when using the Set Style action of a Dynamic Action to add style to the item.</p>
<p>Note: Even if this property is defined, the default behavior of <a href="item.html#setStyle">item#setStyle</a> calls the afterModify method.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>setValue</code></th>
<td class="type">function</td>
<td class="description last"><em>function(value, displayValue, suppressChangeEvent)</em> Specify a function for setting the item's value, which overrides the default <a href="item.html#setValue">item#setValue</a> behavior. The default behavior handles the standard HTML form elements. Ensuring the item can set its value correctly means certain item related client-side functionality of Oracle APEX still works, for example when using the Set Value action of a Dynamic Action to set the item's value, or when calling the JavaScript function <a href="global.html#$s">$s</a> to set the item's value.
<p>Note: Even when this function is defined, the default handling always calls the afterModify function and triggers the change event according to the pSuppressChangeEvent parameter. The pSuppressChangeEvent parameter is provided to this function for informational purpose only. In most cases it can be ignored.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>show</code></th>
<td class="type">function</td>
<td class="description last"><em>function()</em> Specify a function for showing the item, which overrides the default <a href="item.html#show">item#show</a> behavior. This is useful for example where the item consists of compound elements which also need showing, or if the item is based on a widget that already has its own show method that you want to reuse. Ensuring the item can show correctly means certain item related client-side functionality of Oracle APEX still works, for example when using the Show action of a Dynamic Action, to show the item.
<p>Note: if the item is in an element with an id that matches the name of the item with a '_CONTAINER' suffix then the container element is shown and this function is not called.</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>storageType</code></th>
<td class="type">string</td>
<td class="description last">A string that identifies how multiple values are stored and sent to the server. Only applies to items that support multiple values. This does not change how values are returned by <a href="item.html#getValue">item#getValue</a>. Supported types are "separated" and "json-array". When <code class="prettyprint">storageType</code> is "separated" then <code class="prettyprint">separator</code> property is required.</td>
</tr>
<tr>
<th class="name" scope="row"><code>separator</code></th>
<td class="type">string</td>
<td class="description last">A string that is used to separate multiple values.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Since:
- 5.1

##### Returns:

Returns a `jQuery` Deferred object when delayLoading is set to true. The `jQuery` deferred object must be resolved in order for the APEX page load to complete. If delayLoading is set to false (the default), then nothing is returned.

Type
object

##### Examples

The following example shows a call to apex.item.create( pNd, pItemImpl ) with most available callbacks and properties passed to illustrate the syntax (although it is unlikely that any plug-in needs to supply all of these).

```
apex.item.create( "P100_COMPANY_NAME", {
    item_type: "FANCY_ITEM",
    displayValueFor: function( pValue ) {
        var lDisplayValue;
        // code to determine the display value for pValue
        return lDisplayValue;
    },
    getPopupSelector: function() {
        return "<some CSS selector>";
    },
    getValidity: function() {
        var lValidity = { valid: true };
        if ( <item is not valid expression> ) {
            lValidity.valid = false;
        }
        return lValidity;
    },
    getValidationMessage: function() {
        // return validation message if invalid or empty string otherwise
    },
    getValue: function() {
        var lValue;
        // code to determine lValue based on the item type.
        return lValue;
    },
    setValue: function( pValue, pDisplayValue ) {
        // code that sets pValue and pDisplayValue (if required), for the item type
    },
    reinit: function( pValue, pDisplayValue ) {
        // set the value possibly using code like
        // this.setValue( pValue, null, true );
        return function() {
           // make an ajax call that gets new option values for the item
        }
    },
    disable: function() {
        // code that disables the item type
    },
    enable: function() {
        // code that enables the item type
    },
    isDisabled: function() {
        // return true if item is disabled and false otherwise
    }
    show: function() {
        // code that shows the item type
    },
    hide: function() {
        // code that hides the item type
    },
    isChanged: function() {
        var lChanged;
        // code to determine if the value has changed
        return lChanged;
    },
    addValue: function( pValue ) {
        // code that adds pValue to the values already in the item type
    },
    nullValue: "<null return value for the item>",
    setFocusTo: $( "<some jQuery selector>" ),
    setStyleTo: $( "<some jQuery selector>" ),
    loadingIndicator: function( pLoadingIndicator$ ){
        // code to add the loading indicator in the best place for the item
        return pLoadingIndicator$;
    },
    storageType: "separated",
    separator: ":"
});
```

The following example shows a call to apex.item.create( pNd, pItemImpl ) with delayLoading option set to true. Doing so results in the create function returning a deferred object, which must be later resolved in order for page load to complete.

```
var lDeferred = apex.item.create( "P100_COMPANY_NAME", {
    // provide other callback functions as needed
    delayLoading: true
});

// At some point later in the code when the item has finished its initialization, resolve the deferred object
lDeferred.resolve();
```

The following example shows a call to apex.item.create where the pItemImpl argument is a function. This item plug-in provides its own custom logic for the setValue function. The plug-in supports multiple toolbar modes which can be set programmatically with the custom function setToolbarMode.

```
apex.item.create( itemName, function( baseItem ) {
    baseItem.setValue = function( pValue, pDisplayValue ) {
        // code that sets pValue and pDisplayValue (if required), for the item type
    };
    // provide other callback functions as needed
    baseItem.setToolbarMode = function( pMode ) {
        // implementation to set the toolbar mode
    };
    // other custom functions as needed
} );

// later the custom function can be used as follows
apex.item( itemName ).setToolbarMode( "EXPANDED" );
```

#### (static) isItem(pItemId) → {boolean}

This function returns true if and only if there is a DOM element with id equal to pItemId that has had an [item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) interface created for it with [apex.item.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.create).

For backward compatibility with items that don't call [apex.item.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.create) a default implementation of [item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) is used to treat any DOM element with an id as if it were an APEX item. There are some simple items with only default behavior that can be used as an item even though isItem returns false for it. This function allows you to distinguish items that explicitly create an [item](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html) interface from arbitrary DOM elements.

##### Parameters:

| Name      | Type                                   | Description |
|-----------|----------------------------------------|-------------|
| `pItemId` | string | Item id.    |

##### Returns:

true if there is an element with the given id that supports the item interface.

Type
boolean

##### Example

The following will only hide the item if it is an APEX item.

```
if ( apex.item.isItem( someId ) ) {
    apex.item( someId ).hide();
}
```
