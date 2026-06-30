<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html -->
<!-- Namespaces: apex.model -->

# Namespace: model

## QuickNav

### [Functions](#methods-section)

- [addChangesToSaveRequest](#.addChangesToSaveRequest)
- [anyChanges](#.anyChanges)
- [anyErrors](#.anyErrors)
- [create](#.create)
- [destroy](#.destroy)
- [get](#.get)
- [getMaxCachedModels](#.getMaxCachedModels)
- [list](#.list)
- [multipleFetch](#.multipleFetch)
- [release](#.release)
- [save](#.save)
- [setMaxCachedModels](#.setMaxCachedModels)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).model

The apex.model namespace contains methods used to manage client side Oracle APEX data models. These models store data for display by UI components. They correspond to the view-model in the Model-View-ViewModel (MVVM) pattern. See [model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html) for details.

This namespace contains functions to manage the lifecycle of a model:

- Use [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) to create a model.
- Use [apex.model.list](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.list) to list all the existing models.
- Use [apex.model.get](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.get) to return an existing model.
- Use [apex.model.release](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.release) to release a model once you are done with it.

Models are reference counted so for every call to `get` or `create` you must call `release`. Failure to do so can result in unused models taking up memory. Typically, the APEX region associated with the model will manage its life cycle.

Models typically act as an intermediary between data persisted on the server and one or more views on the client. The `regionId` option associates the model with an APEX region for the purpose of fetching and saving data. Models can be created without a `regionId`. These are known as local models and they cannot fetch data from or save data to the server.

There are also methods such as [apex.model.save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.save), [apex.model.anyChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.anyChanges), and [apex.model.anyErrors](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.anyErrors) that operate on multiple models.

### Master Detail

Models can be arranged in a master detail configuration. This is done by providing the `parentModel` and `parentRecordId` options when creating the detail models. A single master model can have multiple kinds of detail models. For example projects can have tasks and members as details. Each kind of detail model has one or more model instances; each related to a record in the master model. Detail instance models share the same name and field configuration but each has a distinct instance id and different data. A model is uniquely identified by a [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId), which in the case of a detail model contains the detail name and instance id. Detail models are cached so that data doesn't have to be fetched from the server unnecessarily. The view layer typically shows a view of the detail instance model that is associated with the current record of the master view. As the current record of the master changes the view layer changes the detail model instance the detail view is showing. The view layer will get a cached instance model if there is one and if not will create the instance model. The maximum number of detail instances to cache is controlled with the [apex.model.getMaxCachedModels](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.getMaxCachedModels) and [apex.model.setMaxCachedModels](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.setMaxCachedModels) functions. It is the least recently used model that is kicked out of the cache. Models that have changes are not destroyed unless [apex.model.destroy](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.destroy) is called.

A detail model can be a master to its own set of sub-detail models. This relationship can be nested to any depth.

Since:
- 5.1

### Functions

#### (static) addChangesToSaveRequest(pRequestData, pModelIdopt, pIncludeRelatedopt) → {function}

Low level function to add changes for any of the specified models to a request. Changes are added to the provided request data. This doesn't actually send the request to the server. In most cases [apex.model.save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.save) should be used rather than this function.

##### Parameters:

<table class="params" aria-label="Parameters for addChangesToSaveRequest">
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
<th class="name" scope="row"><code>pRequestData</code></th>
<td class="type">object</td>
<td class="attributes"></td>
<td class="description last">An initial request object that will have all changes for the specified models added to it.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pModelId</code></th>
<td class="type"><a href="model.html#.ModelId">model.ModelId</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Model identifier as given in call to <a href="apex.model.html#.create">apex.model.create</a> or just a model name. See <a href="apex.model.html#.list">apex.model.list</a> for how this parameter is used to select which models to operate on.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIncludeRelated</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true then any dependents of any selected models are included if they have changes.</td>
</tr>
</tbody>
</table>

##### Returns:

A function that must be called with the promise returned from the save request.

Type
function

#### (static) anyChanges(pIncludeLocalopt, pModelIdopt, pIncludeRelatedopt) → {boolean}

Returns true if any of the specified models have changes.

##### Parameters:

<table class="params" aria-label="Parameters for anyChanges">
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
<th class="name" scope="row"><code>pIncludeLocal</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true models that don't have a <code class="prettyprint">regionId</code> will be included in the check for changes.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pModelId</code></th>
<td class="type"><a href="model.html#.ModelId">model.ModelId</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Model identifier as given in call to <a href="apex.model.html#.create">apex.model.create</a> or just a model name. See <a href="apex.model.html#.list">apex.model.list</a> for how this parameter is used to select which models to operate on.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIncludeRelated</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true then any dependents of any selected models are included in check</td>
</tr>
</tbody>
</table>

##### Returns:

true if any of the specified models have changed.

Type
boolean

##### Example

This example displays an alert message if any (non-local) models on the page have unsaved changes.

```
if ( apex.model.anyChanges() ) {
    apex.message.alert("Save Changes");
}
```

#### (static) anyErrors(pIncludeLocalopt, pModelIdopt, pIncludeRelatedopt) → {boolean}

Returns true if any of the specified models have errors.

##### Parameters:

<table class="params" aria-label="Parameters for anyErrors">
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
<th class="name" scope="row"><code>pIncludeLocal</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true models that don't have a <code class="prettyprint">regionId</code> will be included in check for errors.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pModelId</code></th>
<td class="type"><a href="model.html#.ModelId">model.ModelId</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Model identifier as given in call to <a href="apex.model.html#.create">apex.model.create</a> or just a model name. See <a href="apex.model.html#.list">apex.model.list</a> for how this parameter is used to select which models to operate on.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIncludeRelated</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true then any dependents of any selected models are included in check.</td>
</tr>
</tbody>
</table>

##### Returns:

true if any of the specified models have errors.

Type
boolean

##### Example

This example displays an alert message if any (non-local) models on the page have errors.

```
if ( apex.model.anyErrors() ) {
    apex.message.alert("Fix Errors");
}
```

#### (static) create(pModelId, pOptions, pDataopt, pTotalopt, pMoreDataopt, pDataOverflowopt) → {[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)}

Create a model with the given identity, options and optionally initial data. When you are done with the model you must call [apex.model.release](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.release). Or if you are sure no one else is using it you can call [apex.model.destroy](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.destroy).

##### Parameters:

<table class="params" aria-label="Parameters for create">
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
<th class="name" scope="row"><code>pModelId</code></th>
<td class="type"><a href="model.html#.ModelId">model.ModelId</a></td>
<td class="attributes"></td>
<td class="description last">Model identifier. Must be unique for the page. Creating a model with an identifier that already exists will overwrite the existing model.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">object</td>
<td class="attributes"></td>
<td class="description last">Model options. All properties are optional unless specified otherwise.
<h6 id="properties">Properties</h6>
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
<th class="name" scope="row"><code>shape</code></th>
<td class="type">string</td>
<td class="description last">The shape of data the model holds. One of "table", "tree", or "record". The default is "table".</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordIsArray</code></th>
<td class="type">boolean</td>
<td class="description last">If true record fields are stored in an array otherwise the record is an object. If recordIsArray is true then the field metadata must include the <code class="prettyprint">index</code> property. The default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hasTotalRecords</code></th>
<td class="type">boolean</td>
<td class="description last">Only applies if <code class="prettyprint">shape</code> is "table". If true the sever will always provide the total number of records. The default is false unless paginationType is "none".</td>
</tr>
<tr>
<th class="name" scope="row"><code>genIdPrefix</code></th>
<td class="type">string</td>
<td class="description last">A string prefix to use when generating ids for inserted records. The default is "t".</td>
</tr>
<tr>
<th class="name" scope="row"><code>fields</code></th>
<td class="type">Object.&lt;string, <a href="model.html#.FieldMeta">model.FieldMeta</a>&gt;</td>
<td class="description last">This required option defines the fields of each record. Each property is the name of a field. The value is a <a href="model.html#.FieldMeta">model.FieldMeta</a> object with metadata about the field that the model uses.</td>
</tr>
<tr>
<th class="name" scope="row"><code>regionId</code></th>
<td class="type">string</td>
<td class="description last">Primary region ID that this model is associated with for the purpose of exchanging data with the APEX server. If there is no regionId then the model cannot use standard requests to fetch or save data and therefore is just a local model. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>ajaxIdentifier</code></th>
<td class="type">string</td>
<td class="description last">The Ajax Identifier used to identify the Ajax call to fetch or save data. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pageItemsToSubmit</code></th>
<td class="type">Array.&lt;string&gt;</td>
<td class="description last">An array of page item names to submit when fetching and saving data. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>regionData</code></th>
<td class="type">object</td>
<td class="description last">Additional data to send at the region level for all requests. The default is an empty object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>fetchData</code></th>
<td class="type">object</td>
<td class="description last">Additional data to send in fetch requests. The default is an empty object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>saveData</code></th>
<td class="type">object</td>
<td class="description last">Additional data to send in save requests. The default is an empty object.</td>
</tr>
<tr>
<th class="name" scope="row"><code>requestOptions</code></th>
<td class="type">object</td>
<td class="description last">The properties of this object are included in the options object of <a href="apex.server.html#.plugin">apex.server.plugin</a> for any ajax requests made by the model. Setting the <code class="prettyprint">loadingIndicator</code> property will be ignored. See the <code class="prettyprint">makeLoadingIndicator</code> property for how to control the loading indicator.</td>
</tr>
<tr>
<th class="name" scope="row"><code>version</code></th>
<td class="type">number | string</td>
<td class="description last">This is the version (could be a hash) of the model definition. The value is opaque to the model. It is sent in all requests; fetch, save etc. If the server detects that the version is different than it expects then it returns an error. This is to ensure that the client and server agree on the general model and field definitions. The default is 1. This option currently has no effect and is reserved for future use.</td>
</tr>
<tr>
<th class="name" scope="row"><code>parentModel</code></th>
<td class="type"><a href="model.html#.ModelId">model.ModelId</a></td>
<td class="description last">Model identifier of parent (master) model or null if there is no parent. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>parentRecordId</code></th>
<td class="type">string</td>
<td class="description last">Only applies if parentModel is given. The record id of the record in the parent model that this model is associated with. Typically, this model's ModelId instance and the parentRecordId are the same. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>editable</code></th>
<td class="type">boolean</td>
<td class="description last">If true the model is editable and false otherwise. The default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>trackChanges</code></th>
<td class="type">boolean</td>
<td class="description last">If true changes to the model are tracked and can be saved. If false changes are not tracked and cannot be saved. Setting to false is useful for making optimistic UI updates. This is when changes are persisted in some other way and the model is updated to reflect the changes that were already saved. This only applies if editable is true. The default is true.</td>
</tr>
<tr>
<th class="name" scope="row"><code>onlyMarkForDelete</code></th>
<td class="type">boolean</td>
<td class="description last">If false deleted records are removed from the collection. If true then deleted records are marked as deleted but remain in the collection. The default is true however if trackChanges is false then onlyMarkForDelete is also false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>identityField</code></th>
<td class="type">string | Array.&lt;string&gt;</td>
<td class="description last">Name of identity field or an array of identity field names if the records have a multivalued primary key. Required if editable is true and shape is not "record". It is a best practice to specify the identityField even if the model is not editable as it can be useful for pagination, selection, and fetching additional data. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>childrenField</code></th>
<td class="type">string</td>
<td class="description last">This only applies for tree shape models. The name of the field that contains an array of node children. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>parentIdentityField</code></th>
<td class="type">string</td>
<td class="description last">This only applies for tree shape models. The name of parent node identity field. The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>metaField</code></th>
<td class="type">string</td>
<td class="description last">The name of meta field. The meta field stores metadata about the record and possibly record fields The default is null.</td>
</tr>
<tr>
<th class="name" scope="row"><code>check</code></th>
<td class="type"><a href="model.html#.CheckCallback">model.CheckCallback</a></td>
<td class="description last">A function that is called to do additional permission checking.</td>
</tr>
<tr>
<th class="name" scope="row"><code>delayClearData</code></th>
<td class="type">boolean</td>
<td class="description last">If false, data is cleared right way. If true, data is cleared after the next fetch completes. The default is false. Currently only applies to table shape models. See <a href="model.html#clearData">model#clearData</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>paginationType</code></th>
<td class="type">string</td>
<td class="description last">One of "none", "one", "progressive".
<ul>
<li>none: No paging. The server has given all the data it has (it may be capped, but you can't get more)</li>
<li>one: The model contains just one page at a time. When it asks the server for a new page it replaces the previous one.</li>
<li>progressive: The model will keep adding to its collection as it gets additional pages from the server</li>
</ul>
<p>This only applies to table shape models. The default is "none".</p></td>
</tr>
<tr>
<th class="name" scope="row"><code>pageSize</code></th>
<td class="type">number</td>
<td class="description last">This is the number of table rows (records) to fetch from the server. This only applies to table shape models. The default is 100.</td>
</tr>
<tr>
<th class="name" scope="row"><code>makeLoadingIndicator</code></th>
<td class="type">function</td>
<td class="description last"><code class="prettyprint">function(jQuery[] progressViews, Object[] progressOptions)</code>. This is a function that receives an array of progress views and a corresponding array of progress options and returns a function suitable for the <a href="apex.server.html#.plugin">apex.server.plugin</a> <code class="prettyprint">loadingIndicator</code> option. It can also return null to disable showing any loading indicator. If not specified the default is to show the standard APEX progress spinner centered over any visible view(s) of the model. A view informs the model about its existence by subscribing to the model and passing in the <code class="prettyprint">progressView</code> and optional <code class="prettyprint">progressOptions</code> options. See also the <a href="model.html#subscribe">model#subscribe</a> method and <a href="model.html#.Observer">model.Observer</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>callServer</code></th>
<td class="type">function</td>
<td class="description last"><code class="prettyprint">function(object requestData, object requestOptions) -&gt; promise</code>. A function that is called in place of <a href="apex.server.html#.plugin">apex.server.plugin</a> for all Ajax requests the model makes. This has the same signature as <a href="apex.server.html#.plugin">apex.server.plugin</a> with the optional <code class="prettyprint">pAjaxIdentifier</code> parameter omitted. The jQuery promise returned must be resolved with the response data. This option allows hooking into the ajax requests to access the request and response data. In this case your <code class="prettyprint">callServer</code> function simply calls <a href="apex.server.html#.plugin">apex.server.plugin</a>. This option can also be used to exchange data with something other than the APEX server for example by making a REST service ajax request. In this case the function must adapt the request and response data formats between what the model expects and what the REST service expects. See the <a href="model.html">model</a> Ajax Messages section for details.</td>
</tr>
<tr>
<th class="name" scope="row"><code>visibilityFilter</code></th>
<td class="type">function</td>
<td class="description last"><code class="prettyprint">function(model model, record record, object visibilityFilterContext) -&gt; boolean</code> A function called by model.updateVisibility to determine which records are visible. This is also called when adding new records to the model. The function takes this model, the record, and the <code class="prettyprint">visibilityFilterContext</code> as arguments and returns true if the record is visible and false otherwise. See <a href="model.html#updateVisibility">model#updateVisibility</a> for an example.</td>
</tr>
<tr>
<th class="name" scope="row"><code>visibilityFilterContext</code></th>
<td class="type">object</td>
<td class="description last">An object value to pass to the <code class="prettyprint">visibilityFilter</code>.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>pData</code></th>
<td class="type">array | object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Initial data to add to the model. For table shape data it is an array of <a href="model.html#.Record">model.Record</a>. For tree shape models it is a <a href="model.html#.Node">model.Node</a> for the root. For record shape data it is a single <a href="model.html#.Record">model.Record</a>. If null or not given there is no initial data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pTotal</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Total number of records in the server's collection. Only applies for table shape models.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pMoreData</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true there is more data available on the server for this model. If false <code class="prettyprint">pData</code> contains all the data. If omitted or null determine if there is more data based on <code class="prettyprint">pData</code> and <code class="prettyprint">pTotal</code>. If <code class="prettyprint">pTotal</code> is not given assume there is more data on server. Only applies for table shape models and only if <code class="prettyprint">paginationType</code> is not "none". For record shape models can be false when <code class="prettyprint">pData</code> is null to indicate that there is no data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDataOverflow</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true there is more than the sever configured maximum allowed records for this model. In other words the database has more records in the result set than it is willing to return. Putting a limit on the amount of data that can be returned is typically done so that both client and server resources are not overwhelmed. Only applies for table shape models.</td>
</tr>
</tbody>
</table>

##### Returns:

Type
[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

##### Examples

This example creates a very simple local table shape model called "people" that stores name and age. The records are arrays and the model is given some initial data. The model is editable and the ID field is the record identity.

```
var fields = {
        ID: {
            index: 0
        },
        NAME: {
            index: 1
        },
        AGE: {
            index: 2
        }
    },
    data = [
        ["00010", "Mark", "32"],
        ["00091", "Mary", "27"],
        ...
    ];
apex.model.create("people", {
    shape: "table",
    recordIsArray: true,
    fields: fields,
    identityField: "ID",
    editable: true,
    paginationType: "none"
}, data, data.length );
```

This example creates a table shape model that gets data from a REST service called from the browser by using the `callServer` option. The records are objects. The example code only handles the fetch request.

```
function myRESTCallServer( requestData, options ) {
    var deferred = apex.jQuery.Deferred(),
        region = requestData.regions[0], // assume there is just one region in the request
        offset = region.fetchData.firstRow - 1, // convert to zero-based if needed
        count = region.fetchData.maxRows;

    // make an ajax request using XMLHttpRequest or fetch API. Use offset and count to specify the page of
    // data to fetch as part of the REST URL.
    fetch( "some/REST/URL" ).then( function( response ) {
        var responseData = response.json();
        // suppose the REST service response is an array of records and the records do not have any nested
        // structure that needs to be adjusted and the array is in a variable called responseData.
        var response = {
            regions: [ {
                id: region.id,
                ajaxIdentifier: region.ajaxIdentifier,
                fetchedData: {
                    values: responseData,
                    firstRow: offset,
                    moreData: true
                }
            } ]
        };
        deferred.resolve( response )
    } );
    return deferred.promise();
}
var fields = ...;// define model fields according to what the REST service returns.
apex.model.create( "people", {
    shape: "table",
    recordIsArray: false,
    fields: fields,
    identityField: "ID", // this assumes the REST service returns a field with name "ID" that is the primary key
    callServer: myRESTCallServer,
    paginationType: "progressive"
}, null );
```

#### (static) destroy(pModelId)

Destroy and remove a model by its identifier. This bypasses reference counting and caching. This method should not be used unless you are sure that no one else is using the model.

If `pModelId` is a string model name and there are one or more instances they will all be destroyed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pModelId` | [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId) | Model identifier as given in call to [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) or just a model name. |

##### Example

Destroy the model with model id MyModel.

```
apex.model.destroy("MyModel");
```

#### (static) get(pModelId) → {[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)}

Get a model by its model identifier.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pModelId` | [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId) | Model identifier as given in call to [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create). |

##### Returns:

The model identified by pModelId.

Type
[model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html)

##### Example

Get access to a model with model id MyModel and release it when done.

```
var myModel = apex.model.get("MyModel");
// ... do something with myModel
apex.model.release("MyModel");  // release it when done
```

#### (static) getMaxCachedModels() → {number}

Get the max number of cached detail instance models.

##### Returns:

Max cached detail instance models.

Type
number

#### (static) list(pIncludeLocalopt, pModelIdopt, pIncludeRelatedopt) → {Array.\<[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)\>}

Returns an array of all the currently defined model identifiers in no particular order. If `pModelId` is null or not provided all models are listed. If `pModelId` contains just a model name then just that model if any and all instances with the same model name if any are returned. If `pModelId` contains a model and an instance then just that model instance is included. Specifying `pModelId` is most useful when `pIncludeRelated` is true.

##### Parameters:

<table class="params" aria-label="Parameters for list">
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
<th class="name" scope="row"><code>pIncludeLocal</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true models that don't have a regionId will be included.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pModelId</code></th>
<td class="type"><a href="model.html#.ModelId">model.ModelId</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Model identifier as given in call to <a href="apex.model.html#.create">apex.model.create</a> or just a model name.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIncludeRelated</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true then any dependents of any listed models are included.</td>
</tr>
</tbody>
</table>

##### Returns:

Array of model identifiers

Type
Array.\<[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)\>

#### (static) multipleFetch(pRequestDataopt, pOptionsopt, pModelIds, pCallServeropt) → {null\|promise}

Fetches data for multiple models in a single Ajax request. In most cases there is no need to process the data of the promise because the models have already done so.

##### Parameters:

<table class="params" aria-label="Parameters for multipleFetch">
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
<th class="name" scope="row"><code>pRequestData</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An initial request object that will have fetch requests for the specified models added to it.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Options to pass on to <a href="apex.server.html#.plugin">apex.server.plugin</a> API.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pModelIds</code></th>
<td class="type">array</td>
<td class="attributes"></td>
<td class="description last">An array of model ids to fetch data for.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallServer</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An optional function to call in place of <a href="apex.server.html#.plugin">apex.server.plugin</a>. See the callServer option of <a href="apex.model.html#.create">apex.model.create</a> for more information.</td>
</tr>
</tbody>
</table>

##### Returns:

Returns the promise from [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin), if there is at least one model to fetch data for. The promise is resolved with the ajax response data. Returns null if there are no valid model ids given or if all models are already busy fetching data.

Type
null \| promise

##### Example

The following example will refresh two interactive grid regions, r1 and r2, with a single ajax request.

```
// an array of the IG region views
let igViews = [
    apex.region( "r1" ).call( "getCurrentView" ),
    apex.region( "r2" ).call( "getCurrentView" )
];
// an array of the IG region view model ids to fetch
let modelIds = igViews.map( v => v.model.modelId() );

// for each of the views, clear the data without notifying the view
igViews.forEach( v => { v.model.clearData( false ) } );

apex.model.multipleFetch( null, {
    loadingIndicatorPosition: "page"
}, modelIds ).done( () => {
    // this assumes the IG regions only have grid views
    igViews.forEach( v => { v.view$.grid( "refresh" ) } );
} );
// Compare with: apex.region( "r1" ).refresh(); apex.region( "r2" ).refresh();
// which results in 2 ajax requests. Simpler code but more network traffic.
```

#### (static) release(pModelId)

Release a model if it is not being used but may be used again in the future. This allows the model to be destroyed if needed to conserve memory.

Models are reference counted. For every call to [apex.model.get](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.get) or [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) a call to [apex.model.release](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.release) with the same model id is required. When the reference count is zero the model is destroyed unless it is changed or if it has a parent model, in which case it is cached.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pModelId` | [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId) | Model identifier as given in call to [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create). |

##### Example

Get access to a model with model id MyModel and release it when done.

```
var myModel = apex.model.get("MyModel");
// ... do something with myModel
apex.model.release("MyModel");  // release it when done
```

#### (static) save(pRequestDataopt, pOptionsopt, pModelIdopt, pIncludeRelatedopt, pCallServeropt) → {null\|promise}

Save any of the specified models that have changes. This consolidates all the model data to save into a single request.

##### Parameters:

<table class="params" aria-label="Parameters for save">
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
<th class="name" scope="row"><code>pRequestData</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An initial request object that will have all changes for the specified models added to it.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Options to pass on to <a href="apex.server.html#.plugin">apex.server.plugin</a> API.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pModelId</code></th>
<td class="type"><a href="model.html#.ModelId">model.ModelId</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Model identifier as given in call to <a href="apex.model.html#.create">apex.model.create</a> or just a model name.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIncludeRelated</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true then any dependents of any selected models are included in check.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallServer</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An optional function to call in place of <a href="apex.server.html#.plugin">apex.server.plugin</a>. See the callServer option of <a href="apex.model.html#.create">apex.model.create</a> for more information.</td>
</tr>
</tbody>
</table>

##### Returns:

The promise from [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin) if a save request is sent or null if there are no changed models to save.

Type
null \| promise

##### Example

This example saves all the models on the page that have changes.

```
apex.model.save();
```

#### (static) setMaxCachedModels(n)

Set the max number of cached unreferenced, unchanged detail instance models that will be kept.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `n` | number | Number of unreferenced, unchanged detail instance models that will be kept. |
