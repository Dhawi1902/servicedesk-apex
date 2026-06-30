<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html -->
<!-- Namespaces: apex.region -->

# Namespace: region

## QuickNav

### [Functions](#methods-section)

- [create](#.create)
- [destroy](#.destroy)
- [findClosest](#.findClosest)
- [isRegion](#.isRegion)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).region

The apex.region namespace contains global functions related to Oracle APEX regions. The [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.fn:region) function provides access to a [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) interface for a specific region.

Since:
- 5.1

### Functions

#### (static) create(pRegionId, pRegionImpl)

This function is only used by region plug-in developers. It provides a plug-in specific implementation for the region.

Use this function to give a region plug-in a set of behaviors defined by `pRegionImpl`. The `pRegionImpl` parameter can provide its own implementation for standard methods (such as refresh or focus) or omit them to get the default implementation. It can add its own methods or properties as well. It should include a `type` string property that specifies the type of region.

If the region is implemented with a jQuery UI style widget (using widget factory) then it should provide an implementation for the [region#widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widget) method and define the [region#widgetName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widgetName) property so that the [region#call](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#call) method works. Note: jQuery UI is deprecated but the `call` method and `widgetName` property remain for backward compatibility.

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
<th class="name" scope="row"><code>pRegionId</code></th>
<td class="type">string</td>
<td class="description last">Region id or region HTML DOM id. This comes from the PL/SQL plug-in parameter <code class="prettyprint">p_region.dom_id</code>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRegionImpl</code></th>
<td class="type">object | function</td>
<td class="description last">An object that provides the methods and properties for the region interface. All the properties of this object are copied to the region interface. It should provide a string <code class="prettyprint">type</code> property. It can provide any additional methods that would be useful to developers. A default implementation is provided for any standard methods or properties omitted. See <a href="region.html">region</a> for the properties and methods supported by the interface.
<p>This parameter can also be a function that is called during creation with a single object argument that is the base region interface. The function should add any needed functions or properties to the region interface.</p></td>
</tr>
</tbody>
</table>

##### Examples

The following is region initialization code for a hypothetical region plug-in. It provides implementations for the standard focus and refresh methods and adds a custom method to filter the list.

```
function initFancyList( pRegionId, ... ) {
    ...
    apex.region.create( pRegionId, {
        type: "FancyList",
        focus: function() {
            // code to focus region
        },
        refresh: function() {
            // code to refresh region, e.g:
            // const result = apex.server.plugin( ... );
            // result
            //   .done( ... )
            //   .fail( ... )
            //   .always( ... );
            // return result;
        },
        filter: function() {
            // code to filter the list
        }
    } );
}

// later the custom function can be used as follows
apex.region( regionId ).filter( ... );
```

The following example shows the same hypothetical region plug-in but using the function callback for pRegionImpl.

```
function initFancyList( pRegionId, ... ) {
    ...
    apex.region.create( pRegionId, function( baseRegion ) {
        baseRegion.type = "FancyList";
        baseRegion.focus = function() {
            // code to focus region
        };
        baseRegion.refresh = function() {
            // code to refresh region
        };
        baseRegion.filter = function() {
            // code to filter the list
        };
    } );
}

// later the custom function can be used as follows
apex.region( regionId ).filter( ... );
```

#### (static) destroy(pRegionId)

This function is only for region plug-in developers. It will destroy and remove the behaviors associated with a region element. It does not remove the region element from the DOM. It is not necessary to call this function if the region will exist for the lifetime of the page. If the region is implemented by a widget that has a destroy method then this function can be called when the widget is destroyed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRegionId` | string | Region id or region DOM id. It is a best practice to give a region an HTML DOM id if it is going to be used from JavaScript otherwise an internally generated id is used. The region DOM id is substituted in the region template using the \#DOM_ID# string. The region id can be found by viewing the page source in the browser. |

##### Example

The following destroys the region interface but the region element remains on the page.

```
apex.region.destroy( someRegionId );
```

#### (static) findClosest(pTarget) → {[region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html)\|null}

Returns the region that contains the `pTarget` element. Returns null if there is no `pTarget` element or if it is not in a region that has been initialized with a call to [apex.region.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html#.create).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTarget` | Element \| string | A DOM element or CSS selector suitable as the first argument to the jQuery function. |

##### Returns:

A region interface or null if the element corresponding to `pTarget` is not inside a region.

Type
[region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) \| null

##### Example

The following will refresh the region that contains a button with class `refresh-button` when it is clicked.

```
apex.jQuery( ".refresh-button" ).on( "click", function( event ) {
    var region = apex.region.findClosest( event.target );
    if ( region ) {
        region.refresh();
    }
});
```

#### (static) isRegion(pRegionId) → {boolean}

This function returns true if and only if there is a DOM element with id equal to pRegionId that has had a [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html) interface created for it with [apex.region.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html#.create).

To support older regions that don't implement a region interface (by calling apex.region.create) the default implementation of apex.region will attempt to treat any DOM element with an id as if it were an APEX region. This function allows you to distinguish true APEX regions from arbitrary DOM elements.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRegionId` | string | Region id or region DOM id. It is a best practice to give a region a HTML DOM id if it is going to be used from JavaScript otherwise an internally generated id is used. The region DOM id is substituted in the region template using the \#DOM_ID# string. The region id can be found by viewing the page source in the browser. |

##### Returns:

true if there is an element with the given id that supports the region interface.

Type
boolean

##### Example

The following will only focus the region if it is an APEX region.

```
if ( apex.region.isRegion( someId ) ) {
    apex.region( someId ).focus();
}
```
