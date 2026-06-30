<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/mapRegion.html -->
<!-- Interfaces: mapRegion -->

# Interface: mapRegion

## QuickNav

### [Properties](#members-section)

- [bboxCustom](#bboxCustom)
- [copyrightNotice](#copyrightNotice)
- [customStyles](#customStyles)
- [element](#element)
- [itemsToSubmit](#itemsToSubmit)
- [layerMessages](#layerMessages)
- [layers](#layers)
- [lazyLoading](#lazyLoading)
- [legend](#legend)
- [mapData](#mapData)
- [mapFeatures](#mapFeatures)
- [mapStatusItem](#mapStatusItem)
- [mapUnitSystem](#mapUnitSystem)
- [navigationBar](#navigationBar)
- [resetMapPosition](#resetMapPosition)
- [tileLayer](#tileLayer)
- [type](#type)
- [useVectorTileLayers](#useVectorTileLayers)

### [Events](#events-section)

- [changed](#event:changed)
- [click](#event:click)
- [initialized](#event:initialized)
- [objectclick](#event:objectclick)

### [Methods](#methods-section)

- [addFeature](#addFeature)
- [clearCircle](#clearCircle)
- [closeAllInfoWindows](#closeAllInfoWindows)
- [closeInfoWindow](#closeInfoWindow)
- [closeTooltip](#closeTooltip)
- [displayPopup](#displayPopup)
- [focus](#focus)
- [getCircle](#getCircle)
- [getFeature](#getFeature)
- [getLayerIdByName](#getLayerIdByName)
- [getLayers](#getLayers)
- [getMapBboxAndZoomLevel](#getMapBboxAndZoomLevel)
- [getMapCenterAndZoomLevel](#getMapCenterAndZoomLevel)
- [getMapObject](#getMapObject)
- [getMapPitchAndBearing](#getMapPitchAndBearing)
- [getMapStatus](#getMapStatus)
- [hideLayer](#hideLayer)
- [moveLayer](#moveLayer)
- [off](#off)
- [on](#on)
- [refresh](#refresh)
- [removeFeature](#removeFeature)
- [reset](#reset)
- [setCenter](#setCenter)
- [setZoomLevel](#setZoomLevel)
- [showLayer](#showLayer)
- [updateFeature](#updateFeature)

## mapRegion

The mapRegion interface is used to access the properties and methods of the spatialMap API. You get access to the mapRegion interface with the [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html) function when passed the regionId (HTML DOM id) of a Map Region. This region uses the 3rd party [MapLibre GL JS](https://maplibre.org/) library and exposes it via the [mapRegion#getMapObject](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/mapRegion.html#getMapObject) method. Developer code that uses the MapLibre API may not be forward compatible should the MapLibre API change.

Since:
- 21.2

### Extends

- [region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html)

### Properties

#### bboxCustom :Array.\<Object\>

Bounding box described as a rectangle having only two coordinates, the lower-left and the upper-right

##### Type:

- Array.\<Object\>

Since:
- 26.1

##### Example

Get option bboxCustom after initialization.

```
var value = apex.region( "myRegionId" ).bboxCustom;
```

#### copyrightNotice :string

Copyright notice html expression.

##### Type:

- string

Default Value:
- null

##### Example

Get option copyrightNotice after initialization.

```
var value = apex.region( "myRegionId" ).copyrightNotice;
```

#### customStyles :Array.\<Object\>

These styles can be used as the SVG Shape attribute within a Point layer. An array of objects that provide definitions for custom SVG shapes to be used as point markers.

##### Type:

- Array.\<Object\>

##### Properties:

| Name | Type | Description |
|----|----|----|
| `type` | string | Svg element type |
| `name` | string | Svg shape name that can be used to specify the SVG shape to display point objects. |
| `width` | number | Svg shape width |
| `height` | number | Svg shape height |
| `viewBox` | string | Defines the position and dimension of an SVG viewport. |
| `elements` | Array.\<Object\> | Array of objects that represent the necessary svg child elements to create the svg shape. Each object must contain all the necessary element attrs. |

##### Example

Get or set option customStyles after initialization.

```
// get
var value = apex.region( "myRegionId" ).customStyles;
// set
apex.region( "myRegionId" ).customStyles = [
   {
       "name": "MyCamera",
       "width": 20,
       "height": 20,
       "paint-order": "stroke",
       "viewBox": "0 0 20 20",
       "elements": [
           {
               "type": "path",
               "d": "M15 4h-1.2l-.9-1.2c-.4-.5-1-.8-1.6-.8H8.8c-.7 0-1.3.3-1.6.8L6.2 4H5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2.2l2.4 4.7c.1.2.4.3.7.2.1 0 .2-.1.2-.2l2.4-4.7H15c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 7c-1.4 0-2.5-1.1-2.5-2.5S8.6 6 10 6s2.5 1.1 2.5 2.5S11.4 11 10 11z"
           }
       ]
    }
];
```

#### element :jQuery

The jQuery object for the region element.

##### Type:

- jQuery

Inherited From:
- [region#element](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#element)

##### Example

Get option element after initialization.

```
var value = apex.region( "myRegionId" ).element;
```

#### itemsToSubmit :string

Comma separated list of page items on the current page to be set into session state when an AJAX request is made.

##### Type:

- string

Default Value:
- null

##### Example

Get option itemsToSubmit after initialization.

```
var value = apex.region( "myRegionId" ).itemsToSubmit;
```

#### layerMessages :Object

Position of "No Data Found" and "More Data Found" messages container.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `position` | string | One of "top" or "bottom". |
| `selector` | string | Selector for the DIV container to display the messages in. |

Default Value:
- null

##### Example

Get or set option layerMessages after initialization.

```
// get
var value = apex.region( "myRegionId" ).layerMessages;
// set
apex.region( "myRegionId" ).layerMessages = { position: "top" };
```

#### layers :Array.\<Object\>

An array of objects with basic information about layers. Required.

##### Type:

- Array.\<Object\>

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
<th class="name" scope="row"><code>id</code></th>
<td class="type">number</td>
<td class="description last">Layer id.</td>
</tr>
<tr>
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="description last">Layer name.</td>
</tr>
<tr>
<th class="name" scope="row"><code>useSpatialIndex</code></th>
<td class="type">boolean</td>
<td class="description last">If true the widget will only fetch rows for the current map window from the database. This provides a performance benefit when the data source contains a large amount of rows.</td>
</tr>
<tr>
<th class="name" scope="row"><code>minZoom</code></th>
<td class="type">number</td>
<td class="description last">Specify the minimum zoom level for the layer to become visible.</td>
</tr>
<tr>
<th class="name" scope="row"><code>maxZoom</code></th>
<td class="type">number</td>
<td class="description last">Specify the maximum zoom level for this layer to remain visible.</td>
</tr>
<tr>
<th class="name" scope="row"><code>tooltip</code></th>
<td class="type">Object</td>
<td class="description last">Layers features tooltip information.
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
<th class="name" scope="row"><code>template</code></th>
<td class="type">string</td>
<td class="description last">If Advanced formatting has been chosen for the tooltip then user needs to provide an HTML expressions to be shown as tooltip when hovering over a layer feature on the map.</td>
</tr>
<tr>
<th class="name" scope="row"><code>cssClasses</code></th>
<td class="type">string</td>
<td class="description last">Additional css classes to be added in tooltip container.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>infoWindow</code></th>
<td class="type">Object</td>
<td class="description last">Layers features info window information.
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
<th class="name" scope="row"><code>template</code></th>
<td class="type">string</td>
<td class="description last">If Advanced formatting has been chosen for the info window then user needs to provide an HTML expressions to be shown as info window when clicking on a layer feature on the map.</td>
</tr>
<tr>
<th class="name" scope="row"><code>cssClasses</code></th>
<td class="type">string</td>
<td class="description last">Additional css classes to be added in info window container.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

Get option layers after initialization.

```
var value = apex.region( "myRegionId" ).layers;
```

#### lazyLoading :boolean

Whether load map data making an ajax request or not. Required.

##### Type:

- boolean

Default Value:
- false

##### Example

Get option lazyLoading after initialization.

```
var value = apex.region( "myRegionId" ).lazyLoading;
```

#### legend :Object

Legend area position and styles.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `position` | string | One of "start", "end" or "selector" |
| `selector` | string | JQuery selector to display the legend in. |
| `title` | string | Legend title text. |
| `cssClasses` | string | Additional css classes to be added in lagend container. |

Default Value:
- null

##### Example

Get or set option legend after initialization.

```
// get
var value = apex.region( "myRegionId" ).legend;
// set
apex.region( "myRegionId" ).legend = { positon: "start", title: "My layers" };
```

#### mapData :Object

Object returned by the AJAX request.

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
<th class="name" scope="row"><code>map</code></th>
<td class="type">Object</td>
<td class="description last">Object with map bbox coordinates and series information.
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
<th class="name" scope="row"><code>bbox</code></th>
<td class="type">Array.&lt;Object&gt;</td>
<td class="description last">Boundary box. Array of coordinates that describes the map window where all the layers features will be displayed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>series</code></th>
<td class="type">Array.&lt;Object&gt;</td>
<td class="description last">Array of series that represent the layers. Series will contain all the feature points and information about the layers that will be created by MapLibre.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

Default Value:
- null

##### Example

Get option mapData after initialization.

```
var value = apex.region( "myRegionId" ).mapData;
```

#### mapFeatures :Object

Map tools to be used in the map.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `mousewheelZoom` | boolean | If true scroll zoom will be enabled. |
| `scaleBar` | boolean | If true scale control will be enabled. |
| `circleTool` | boolean | If true circle tool will be enabled. |
| `browserLocation` | boolean | If true geolocate control will be enabled. |
| `rectangleZoom` | boolean | If true rectangle zoom tool will be enabled. |
| `distanceTool` | boolean | If true distance tool will be enabled. |
| `overviewMap` | boolean | If true overview map will be displayed on map. |
| `infiniteMap` | boolean | If true MapLibre will render multiple world copies. |

##### Example

Get or set option mapFeatures after initialization.

```
// get
var value = apex.region( "myRegionId" ).mapFeatures;
// set
apex.region( "myRegionId" ).mapFeatures = {
    mousewheelZoom: true,
    scaleBar: true,
    circleTool: true,
    browserLocation: true,
    rectangleZoom: true,
    distanceTool: true,
    overviewMap: true,
    infiniteMap: true
};
```

#### mapStatusItem :string

This item will be populated with the current map bbox. So whenever the map is zoomed or dragged, store the current bbox in this item.

##### Type:

- string

Default Value:
- null

##### Example

Get or set option mapStatusItem after initialization.

```
// get
var value = apex.region( "myRegionId" ).mapStatusItem;
// set
apex.region( "myRegionId" ).mapStatusItem = "P1_STATUS_ITEM";
```

#### mapUnitSystem :string

Unit system that will be used for scale control and distance tool. One of "metric" or "imperial".

##### Type:

- string

Default Value:
- "metric"

##### Example

Get or set option mapUnitSystem after initialization.

```
// get
var value = apex.region( "myRegionId" ).mapUnitSystem;
// set
apex.region( "myRegionId" ).mapUnitSystem = "metric";
```

#### navigationBar :Object

Navigation Controls Bar Object. Add zoom and rotation (compass) controls to the map. Required.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `type` | string | One of "none", "no-compass" or "full". |
| `position` | string | One of "top-left","top-right" or "bottom-left". |

##### Example

Get or set option navigationBar after initialization.

```
// get
var value = apex.region( "myRegionId" ).navigationBar;
// set
apex.region( "myRegionId" ).navigationBar = { type: "full", position: "top-right" };
```

#### resetMapPosition :boolean

If true map position will be initialized using the specified initial map position (basedOnFeatures, getFromBrowser or static values for longitude, latitude and zoom level). If false widget will initialize map position using session state.

##### Type:

- boolean

Default Value:
- false

##### Example

Get option resetMapPosition after initialization.

```
var value = apex.region( "myRegionId" ).resetMapPosition;
```

#### tileLayer :Object

Tyle layer information object. Required.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `type` | string | One of "oracle-default", default layer from Oracle map server; "oracle-custom", all available layers from Oracle map server; and "shared-component", all custom backgrounds created by user. |
| `name` | string | Tile layer name for light mode. One of "osm-bright", "osm-positron", "bi-world-map", "osm-dark-matter" or "world-map". |
| `darkmodeName` | string | Tile layer name for dark mode. One of "osm-bright", "osm-positron", "bi-world-map", "osm-dark-matter" or "world-map". |
| `api_key` | string | API Key value that can be set in the custom background URL, if required by the provider. Standard mode. |
| `api_key_dark` | string | API Key value that can be set in the custom background URL, if required by the provider. Dark mode. |
| `attribution` | string | Attribution text to display on the custom map. Standard mode. |
| `attribution_dark` | string | Attribution text to display on the custom map. Dark mode. |
| `http_headers` | Object | Custom background HTTP headers required by the provider. Standard mode. |
| `http_headers_dark` | Object | Custom background HTTP headers required by the provider. Dark mode. |
| `layer_type` | string | Type of the map tile layer retrieved from custom background URL. One of "RASTER", "VECTOR" or "OGCWMS". Standard mode. |
| `layer_type_dark` | string | Type of the map tile layer retrieved from custom background URL. One of "RASTER", "VECTOR" or "OGCWMS". Dark mode. |
| `url` | string | URL used to fetch a custom map tile layer. Standard mode. |
| `url_dark` | string | URL used to fetch a custom map tile layer. Dark mode. |
| `zoom_min` | number | The minimum zoom level of the map (0-24) with 0 being the lowest zoom level (fully zoomed out) and 24 being the highest (fully zoomed in). Standard mode. |
| `zoom_max` | number | The maximum zoom level of the map (0-24) with 0 being the lowest zoom level (fully zoomed out) and 24 being the highest (fully zoomed in). Standard mode. |
| `zoom_min_dark` | number | The minimum zoom level of the map (0-24) with 0 being the lowest zoom level (fully zoomed out) and 24 being the highest (fully zoomed in). Dark mode. |
| `zoom_max_dark` | number | The maximum zoom level of the map (0-24) with 0 being the lowest zoom level (fully zoomed out) and 24 being the highest (fully zoomed in). Dark mode. |

##### Example

Get or set option tileLayer after initialization.

```
// get
var value = apex.region( "myRegionId" ).tileLayer;
// set
apex.region( "myRegionId" ).tileLayer = { name: "osm-bright", darkmodeName: "osm-dark-matter" };
```

#### type :string

The mapRegion type is "SpatialMap".

##### Type:

- string

Overrides:
- [region#type](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#type)

#### useVectorTileLayers :boolean

Determines if raster or vector tile layer is used. If false map will use raster tile layers. If true map will use vector tile layers. Vector tiles are better quality. Available vector tile layers are: OpenStreetMap Positron, OpenStreetMap Dark and OpenStreetMap Bright.

##### Type:

- boolean

Default Value:
- false

##### Example

Get option useVectorTileLayers after initialization.

```
var value = apex.region( "myRegionId" ).useVectorTileLayers;
```

### Events

#### changed

Triggered when the map area or zoom level has changed.

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
<td class="description last"><h6 id="properties-13">Properties</h6>
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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">One of "map-drag","map-zoom","toggle-layer","map-rotate","circle-drawn","circle-removed","feature-added","feature-removed","feature-updated"</td>
</tr>
<tr>
<th class="name" scope="row"><code>layers</code></th>
<td class="type">Array.&lt;Object&gt;</td>
<td class="description last">An array of objects with basic information about the visible layers on map.</td>
</tr>
<tr>
<th class="name" scope="row"><code>bbox</code></th>
<td class="type">Array.&lt;Object&gt;</td>
<td class="description last">Boundary box. Array of coordinates that describes the current map window.</td>
</tr>
<tr>
<th class="name" scope="row"><code>zoom</code></th>
<td class="type">number</td>
<td class="description last">Current map zoom level.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pitch</code></th>
<td class="type">number</td>
<td class="description last">Map current direction user is facing measured clockwise as an angle.</td>
</tr>
<tr>
<th class="name" scope="row"><code>bearing</code></th>
<td class="type">number</td>
<td class="description last">Map current tilt in degrees.</td>
</tr>
<tr>
<th class="name" scope="row"><code>circle</code></th>
<td class="type">object</td>
<td class="description last">GeoJSON object with the circle coordinates. Sent only when a circle is drawn.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

Bind an event listener to the `spatialmapchanged` event:

```
$( ".selector" ).on( "spatialmapchanged", function( event, data ) {
    // do something with data.changeType, data.layers, data.bbox, data.zoom, data.pitch, data.bearing and data.circle
} );
```

#### click

Triggered when the map (not a layer feature) has been clicked.

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
<td class="description last"><h6 id="properties-15">Properties</h6>
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
<th class="name" scope="row"><code>lat</code></th>
<td class="type">number</td>
<td class="description last">Latitude where the map was clicked.</td>
</tr>
<tr>
<th class="name" scope="row"><code>lng</code></th>
<td class="type">number</td>
<td class="description last">Longitude where the map was clicked.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

Bind an event listener to the `spatialmapclick` event:

```
$( ".selector" ).on( "spatialmapclick", function( event, data ) {
    // do something with data.lat and data.lng
} );
```

#### initialized

Triggered when map is completely initialized (all JS loaded, map is drawn).

##### Properties:

| Name    | Type                                  | Description            |
|---------|---------------------------------------|------------------------|
| `event` | Event | `jQuery` event object. |

##### Example

Bind an event listener to the `spatialmapinitialized` event:

```
$( ".selector" ).on( "spatialmapinitialized", function() {
    // do something when map region is initialized
} );
```

#### objectclick

Triggered when one of the spatial features has been clicked.

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
<td class="description last"><h6 id="properties-18">Properties</h6>
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
<th class="name" scope="row"><code>id</code></th>
<td class="type">number</td>
<td class="description last">Id of feature. Sent only if feature layer is not a cluster and primary Key column was specified.</td>
</tr>
<tr>
<th class="name" scope="row"><code>lat</code></th>
<td class="type">number</td>
<td class="description last">Latitude of feature point. In case layer feature is not a point, latitude will belong to cursor position at the moment of clicking the layer feature.</td>
</tr>
<tr>
<th class="name" scope="row"><code>lng</code></th>
<td class="type">number</td>
<td class="description last">Longitude of feature point. In case layer feature is not a point, longitude will belong to cursor position at the moment of clicking the layer feature.</td>
</tr>
<tr>
<th class="name" scope="row"><code>tooltip</code></th>
<td class="type">string</td>
<td class="description last">JSON that contains the tooltip data of the layer feature. Sent only if feature layer is not a cluster.</td>
</tr>
<tr>
<th class="name" scope="row"><code>infoWindow</code></th>
<td class="type">string</td>
<td class="description last">JSON that contains the info window data of the layer feature. Sent only if feature layer is not a cluster.</td>
</tr>
<tr>
<th class="name" scope="row"><code>cluster_id</code></th>
<td class="type">number</td>
<td class="description last">Id of cluster feature. Sent only if feature point is a cluster.</td>
</tr>
<tr>
<th class="name" scope="row"><code>point_count</code></th>
<td class="type">number</td>
<td class="description last">Number of points into the cluster. Sent only if festure point is a cluster.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Example

Bind an event listener to the `spatialmapobjectclick` event:

```
$( ".selector" ).on( "spatialmapobjectclick", function( event, data ) {
    // do something with data.id, data.lat, data.lng, data.tooltip, data.infoWindow, data.cluster_id and data.point_count
} );
```

### Methods

#### addFeature(pLayerId, pFeature)

Add a new feature to series and to layer. If no layer id is given feature won't be added.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pLayerId` | number | Id of GeoJSON layer. |
| `pFeature` | Object | Feature object to be added. |

##### Example

This example add a new feature to the map.

```
apex.region( "regionId" ).addFeature(
  apex.region( "regionId" ).getLayerIdByName( "earthquakes" ),
  {
    id: "6tgy767836",
    geometry: {
      type: "Point",
      coordinates: [ -108.852, 15.8821667 ]
    },
    infoWindow: {
      title: "Title text",
      body: "Body text"
    },
    tooltip: "Tooltip text"
  }
);
```

#### clearCircle()

Removes (clears) the drawn circle from the map. Does nothing if no circle has been drawn.

##### Example

This example removes the circle drawn with the circle tool.

```
apex.region( "regionId" ).clearCircle();
```

#### closeAllInfoWindows(pLayerIdopt)

Remove all info window pop-ups from layer. If no layer id is given all info windows will be closed.

##### Parameters:

<table class="params" aria-label="Parameters for closeAllInfoWindows">
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
<th class="name" scope="row"><code>pLayerId</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only required to close info windows from a specific layer.</td>
</tr>
</tbody>
</table>

##### Examples

This example close all opened info window pop-ups.

```
apex.region( "regionId" ).closeAllInfoWindows();
```

This example close all opened info window pop-ups, but only from the specified layer

```
apex.region( "regionId" ).closeAllInfoWindows( apex.region( "regionId" ).getLayerIdByName( "earthquakes" ) );
```

#### closeInfoWindow(pLayerId, pFeatureId)

Remove feature info window pop-up. If layer id or feature id are invalid info window won't be closed.

##### Parameters:

| Name         | Type                                   | Description  |
|--------------|----------------------------------------|--------------|
| `pLayerId`   | number | Id of layer. |
| `pFeatureId` | string | Feature Id.  |

##### Example

This example close the specified info window pop-up.

```
apex.region( "regionId" ).closeInfoWindow( apex.region( "regionId" ).getLayerIdByName( "earthquakes" ), "6tgy767836" );
```

#### closeTooltip()

Remove tooltip pop-up.

##### Example

This example close the tooltip pop-up.

```
apex.region( "regionId" ).closeTooltip();
```

#### displayPopup(pType, pLayerId, pFeatureId, pFocusAfterOpen, pLngLatopt)

Display feature popup. If map initialization has not been completed or pop-up type, layer id or feature id are invalid pop-up won't be displayed.

##### Parameters:

<table class="params" aria-label="Parameters for displayPopup">
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
<th class="name" scope="row"><code>pType</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Pop-up type. One of "tooltip" or "infoWindow".</td>
</tr>
<tr>
<th class="name" scope="row"><code>pLayerId</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">Id of layer.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFeatureId</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Feature Id.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocusAfterOpen</code></th>
<td class="type">boolean</td>
<td class="attributes"></td>
<td class="description last">Whether popup should get focus or not.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pLngLat</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Tooltip coordinates. Only required if feature geometry type is other than "Point".
<h6 id="properties-19">Properties</h6>
<table class="params" aria-label="Parameters for pLngLat">
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
<th class="name" scope="row"><code>lng</code></th>
<td class="type"></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Tooltip longitude.</td>
</tr>
<tr>
<th class="name" scope="row"><code>lat</code></th>
<td class="type"></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Tooltip latitude.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Examples

This example display the tooltip pop-up.

```
apex.region( "regionId" ).displayPopup( "tooltip", apex.region( "regionId" ).getLayerIdByName( "earthquakes" ), "6tgy767836" );
```

This example display the info window pop-up. This pop-up will not be focused after open.

```
apex.region( "regionId" ).displayPopup( "infoWindow", apex.region( "regionId" ).getLayerIdByName( "earthquakes" ), "6tgy767836", false );
```

This example display the info window pop-up on a polygon at the specified position.

```
apex.region( "regionId" ).displayPopup( "infoWindow", apex.region( "regionId" ).getLayerIdByName( "earthquakes" ), "8jd4760465", false, { lng: 0, lat: 0 } );
```

#### focus()

Focus the map

Overrides:
- [region#focus](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#focus)

##### Example

This example focus the map.

```
apex.region( "regionId" ).focus();
```

#### getCircle() → {Object}

Returns the current circle, which has been drawn with the circle tool.

##### Returns:

The drawn circle coordinates as a GeoJSON polygon, null if no circle has been drawn.

Type
Object

##### Example

This example gets the current circle drawn with circle tool.

```
apex.region( "regionId" ).getCircle();
```

#### getFeature(pLayerId, pFeatureId) → {Object}

Returns feature object from layer. If no layer id or feature id are given return empty object.

##### Parameters:

| Name         | Type                                   | Description    |
|--------------|----------------------------------------|----------------|
| `pLayerId`   | number | Id of layer.   |
| `pFeatureId` | string | Id of feature. |

##### Returns:

An object containing feature properties.

Type
Object

##### Example

This example gets the specified feature object.

```
apex.region( "regionId" ).getFeature( apex.region( "regionId" ).getLayerIdByName( "earthquakes" ), "0i97th6465" );
```

#### getLayerIdByName(pName) → {number}

Returns layer id. If no layer name is given return null.

##### Parameters:

| Name    | Type                                   | Description |
|---------|----------------------------------------|-------------|
| `pName` | string | Layer name. |

##### Returns:

Layer ID.

Type
number

##### Example

This example gets the id of the specified layer.

```
apex.region( "regionId" ).getLayerIdByName( "earthquakes" );
```

#### getLayers() → {Array.\<Object\>}

Returns layers objects array.

##### Returns:

An array of objects containing layers information.

Type
Array.\<Object\>

##### Example

This example gets all the layers objects.

```
apex.region( "regionId" ).getLayers();
```

#### getMapBboxAndZoomLevel() → {Object}

Return the current map window bbox and the zoom level in one object. If map initialization has not been completed return an empty object.

##### Returns:

An object containing the bbox and zoom properties.

Type
Object

##### Example

This example gets the current map window BBOX and the zoom level in one object.

```
apex.region( "regionId" ).getMapBboxAndZoomLevel();
```

#### getMapCenterAndZoomLevel() → {Object}

Return the current map center and the zoom level in one object. If map initialization has not been completed return an empty object.

##### Returns:

An object containing the center and zoom properties.

Type
Object

##### Example

This example gets the current map center and the zoom level in one object.

```
apex.region( "regionId" ).getMapCenterAndZoomLevel();
```

#### getMapObject() → {Object}

Returns the [MapLibre GL JS Map](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/) object. If map initialization has not been completed return null.

Developer code that uses the MapLibre API may not be forward compatible should the MapLibre API change.

##### Returns:

The MapLibre object to call MapLibre API functions on.

Type
Object

##### Example

This example gets the MapLibre map object.

```
apex.region( "regionId" ).getMapObject();
```

#### getMapPitchAndBearing() → {Object}

Return the current map pitch and the bearing values in one object. If map initialization has not been completed return an empty object.

##### Returns:

An object containing the pitch and bearing properties.

Type
Object

##### Example

This example gets the map pitch and bearing properties in one object.

```
apex.region( "regionId" ).getMapPitchAndBearing();
```

#### getMapStatus() → {Object}

Return the current map bbox, zoom level, pitch and bearing values in one object. If map initialization has not been completed return an empty object.

##### Returns:

An object containing the bbox, zoom, pitch and bearing properties.

Type
Object

##### Example

This example gets the current map bbox, zoom level, pitch and bearing values in one object.

```
apex.region( "regionId" ).getMapStatus();
```

#### hideLayer(pNameOrId)

Hides layer identified by ID or name.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNameOrId` | string \| number | Layer name or ID. |

Since:
- 26.1

##### Example

This example toggles the specified layer to become invisible.

```
apex.region( "regionId" ).hideLayer( "earthquakes" );
```

#### moveLayer(pLayerId, pBeforeLayerIdopt)

Moves a layer to a different z-position. The layer will be inserted before the layer with ID pBeforeLayerId, or appended if pBeforeLayerId is omitted

##### Parameters:

<table class="params" aria-label="Parameters for moveLayer">
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
<th class="name" scope="row"><code>pLayerId</code></th>
<td class="type">string | number</td>
<td class="attributes"></td>
<td class="description last">ID of the layer to move.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pBeforeLayerId</code></th>
<td class="type">string | number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">ID of an existing layer to insert the new layer before.</td>
</tr>
</tbody>
</table>

Since:
- 26.1

##### Example

This example moves the first layer before the second layer.

```
let layerId = apex.region( "regionId" ).getLayerIdByName( "First Layer Name" ),
    beforeLayerId = apex.region( "regionId" ).getLayerIdByName( "Second Layer Name" );
apex.region( "regionId" ).moveLayer( layerId, beforeLayerId );
```

#### off(events, …args)

Removes an event handler from the widget element associated with this region. This method only applies to regions that are implemented with a jQuery UI style widget. This means that [region#widgetName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widgetName) property must be defined and the [region#widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widget) method returns a value.

This is a shortcut for calling `apex.region(id).widget().off(...)`. Unlike the jQuery object `off` method this does not return the jQuery object and therefore is not chainable. See the jQuery documentation for details.

See also [region#on](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#on).

##### Parameters:

<table class="params" aria-label="Parameters for off">
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
<th class="name" scope="row"><code>events</code></th>
<td class="type"></td>
<td class="attributes"></td>
<td class="description last">One or more space-separated event types and optional namespaces as defined by the jQuery <code class="prettyprint">off</code> method. For events defined by this region widget the event name prefix can be omitted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>args</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Other arguments to be passed to the widget's jQuery object <code class="prettyprint">off</code> method such as selector, data, and handler.</td>
</tr>
</tbody>
</table>

Inherited From:
- [region#off](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#off)

##### Example

This example removes all event handlers for the selectionChange event of an Interactive Grid region. Note that the short event name "selectionChange" can be used rather than the full name "interactivegridselectionchange". See also [interactiveGrid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#event:selectionchange).

```
apex.region( interactiveGridRegionId ).off( "selectionChange" );
```

#### on(events, …args)

Attaches an event handler to the widget element associated with this region. This method only applies to regions that are implemented with a jQuery UI style widget. This means that [region#widgetName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widgetName) property must be defined and the [region#widget](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#widget) method returns a value.

This is a shortcut for calling `apex.region(id).widget().on(...)`. Unlike the jQuery object `on` method this does not return the jQuery object and therefore is not chainable. See the jQuery documentation for details.

See also [region#off](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#off).

##### Parameters:

<table class="params" aria-label="Parameters for on">
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
<th class="name" scope="row"><code>events</code></th>
<td class="type"></td>
<td class="attributes"></td>
<td class="description last">One or more space-separated event types and optional namespaces as defined by the jQuery <code class="prettyprint">on</code> method. For events defined by this region widget the event name prefix can be omitted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>args</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Other arguments to be passed to the widget's jQuery object <code class="prettyprint">on</code> method such as selector, data, and handler.</td>
</tr>
</tbody>
</table>

Inherited From:
- [region#on](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#on)

##### Example

This example handles the selectionChange event of an Interactive Grid region by logging a message to the console. Note that the short event name "selectionChange" can be used rather than the full name "interactivegridselectionchange". See also [interactiveGrid#event:selectionchange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/interactiveGrid.html#event:selectionchange)

```
apex.region( interactiveGridRegionId ).on( "selectionChange", function(event, data) {
    console.log("Selection changed; # records selected is", data.selectedRecords.length );
} );
```

#### refresh()

Update map layers data. If map initialization has not been completed region can't be refreshed.

Overrides:
- [region#refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/region.html#refresh)

##### Example

This example make an ajax request to server to update layers data.

```
apex.region( "regionId" ).refresh();
```

#### removeFeature(pLayerId, pFeatureId)

Removes feature from map. If no layer id or feature id are given feature won't be removed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pLayerId` | number | Id of GeoJSON layer. |
| `pFeatureId` | string | Id of feature to remove. |

##### Example

This example removes the specified feature from the map.

```
apex.region( "regionId" ).removeFeature( apex.region( "regionId" ).getLayerIdByName( "earthquakes" ), "8jd4760465" );
```

#### reset()

Resets the map instance.

##### Example

This example resets the map instance.

```
apex.region( "regionId" ).reset();
```

#### setCenter(pCenter)

Recenters the map to the specified position. If map initialization has not been completed map center can't be set.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pCenter` | Array.\<Object\> | Longitude, latitude array. |

##### Example

This example centers the map to Washington, D.C.

```
var lng = -77.050636,
    lat = 38.889248;
apex.region( "regionId" ).setCenter( [ lng, lat ] );
```

#### setZoomLevel(pZoomLevel)

Zooms the map to the specified level. If map initialization has not been completed zoom level can't be set.

##### Parameters:

| Name         | Type                                   | Description         |
|--------------|----------------------------------------|---------------------|
| `pZoomLevel` | number | The new zoom level. |

##### Example

This example sets the zoom level to 3.

```
apex.region( "regionId" ).setZoomLevel( 3 );
```

#### showLayer(pNameOrId)

Show layer identified by ID or name.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNameOrId` | string \| number | Layer name or ID. |

Since:
- 26.1

##### Example

This example toggles the specified layer to become visible.

```
apex.region( "regionId" ).showLayer( "earthquakes" );
```

#### updateFeature(pLayerId, pFeature)

Update feature from series and layer source. If no layer id or feature object are given feature won't be updated.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pLayerId` | number | Id of GeoJSON layer. |
| `pFeature` | Object | Feature object to update. |

##### Example

This example update the specified feature from series in the map.

```
apex.region( "regionId" ).updateFeature(
  apex.region( "regionId" ).getLayerIdByName( "earthquakes" ),
  {
    id: "6tgy767836",
    geometry: {
      type: "Point",
      coordinates: [ -128.852, 55.8821667 ]
    },
    infoWindow: {
      title: "My info window title",
      body: "My info window body"
    },
    tooltip: "My tooltip content"
  }
);
```
