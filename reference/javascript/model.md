<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html -->
<!-- Interfaces: model -->

# Interface: model

## QuickNav

### [Notifications](#events-section)

- [addData](#event:addData)
- [clearChanges](#event:clearChanges)
- [copy](#event:copy)
- [delete](#event:delete)
- [destroy](#event:destroy)
- [insert](#event:insert)
- [instanceRename](#event:instanceRename)
- [metaChange](#event:metaChange)
- [move](#event:move)
- [refresh](#event:refresh)
- [refreshRecords](#event:refreshRecords)
- [revert](#event:revert)
- [set](#event:set)

### [Methods](#methods-section)

- [addChangesToSaveRequest](#addChangesToSaveRequest)
- [allowAdd](#allowAdd)
- [allowDelete](#allowDelete)
- [allowDrag](#allowDrag)
- [allowEdit](#allowEdit)
- [canRevertRecord](#canRevertRecord)
- [check](#check)
- [child](#child)
- [childCount](#childCount)
- [clearChanges](#clearChanges)
- [clearData](#clearData)
- [clearSelection](#clearSelection)
- [copyRecords](#copyRecords)
- [deleteRecords](#deleteRecords)
- [dragOperations](#dragOperations)
- [fetch](#fetch)
- [fetchAll](#fetchAll)
- [fetchChildNodes](#fetchChildNodes)
- [fetchRecords](#fetchRecords)
- [forEach](#forEach)
- [forEachInPage](#forEachInPage)
- [getChanges](#getChanges)
- [getControlBreakId](#getControlBreakId)
- [getDataOverflow](#getDataOverflow)
- [getErrors](#getErrors)
- [getFieldKey](#getFieldKey)
- [getFieldMetadata](#getFieldMetadata)
- [getOption](#getOption)
- [getRecord](#getRecord)
- [getRecordId](#getRecordId)
- [getRecordMetadata](#getRecordMetadata)
- [getRecordValue](#getRecordValue)
- [getSelectedCount](#getSelectedCount)
- [getSelectedRecords](#getSelectedRecords)
- [getSelectionState](#getSelectionState)
- [getServerTotalRecords](#getServerTotalRecords)
- [getTotalRecords](#getTotalRecords)
- [getValue](#getValue)
- [hasChildren](#hasChildren)
- [hasControlBreaks](#hasControlBreaks)
- [hasErrors](#hasErrors)
- [indexOf](#indexOf)
- [insertNewRecord](#insertNewRecord)
- [isChanged](#isChanged)
- [isDisabled](#isDisabled)
- [isIdentityField](#isIdentityField)
- [metadataChanged](#metadataChanged)
- [modelId](#modelId)
- [moveRecords](#moveRecords)
- [parent](#parent)
- [recordAt](#recordAt)
- [revertRecords](#revertRecords)
- [root](#root)
- [save](#save)
- [setData](#setData)
- [setDisabledState](#setDisabledState)
- [setHiddenState](#setHiddenState)
- [setOption](#setOption)
- [setRecordValue](#setRecordValue)
- [setSelectionState](#setSelectionState)
- [setValidity](#setValidity)
- [setValue](#setValue)
- [subscribe](#subscribe)
- [transform](#transform)
- [unSubscribe](#unSubscribe)
- [updateVisibility](#updateVisibility)
- [walkTree](#walkTree)

### [Type Definitions](#typedefs-section)

- [CheckCallback](#.CheckCallback)
- [FieldMeta](#.FieldMeta)
- [IteratorCallback](#.IteratorCallback)
- [ModelId](#.ModelId)
- [Node](#.Node)
- [Observer](#.Observer)
- [Record](#.Record)
- [RecordFieldMetadata](#.RecordFieldMetadata)
- [RecordMetadata](#.RecordMetadata)

## model

A model holds data in memory for use by the UI layer. It corresponds to the view-model in the Model-View-ViewModel (MVVM) pattern. The UI can both read and write the data. A model can notify interested parties (subscribers) when the data changes. The data comes (is fetched) from the server and updates can be written back (saved) to the server.

Models are created and managed with functions of the [apex.model](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html) namespace. A model is uniquely identified by a [model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId), which is a string name and optional string instance id.

A model can hold data of different shapes. They are:

- table: The data is an ordered collection of records. In database or UI terms the record might be called a row. See [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record).
- tree: The data is a single root record and each record including the root can have an ordered collection of any number of child records. When dealing with trees it is common to call the records nodes. See [model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node).
- record: The data is a single record. In some cases this is treated as a collection of one.

Each record can have any number of named fields. See [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record). All records in the collection must have the same set of fields although the value of some fields may be null. In database or UI terms the fields might be called columns. The actual storage of a record could be an object or an array. If records are objects then the fields of the record are the properties of the object. If the records are arrays the fields of the record are elements of the array and the [model.FieldMeta](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.FieldMeta) `index` property is used to map from the field name to the record array index.

The model has very few restrictions on the values of fields. However typically when the model data is backing APEX items or HTML form controls the values will all be strings. The model optionally uses the following fields for specific purposes:

- identity: A string value that uniquely identifies the record. There can be multiple identity fields. Required for editable models. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) option `identityField`.
- meta: An object with additional metadata about the record. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) option `metaField`.
- children: (tree shape only) An array of the child records (nodes). See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) option `childrenField`.
- parent identity: (tree shape only) A string value that identifies the parent record (node) of this record (node). Required for editable tree shaped models. See [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) option `parentIdentityField`.

Another special case is for field values that have a display value in addition to their intrinsic value. These composite values have the form: `{ d: "`*`display value`*`", v: `*`value`*` }` When comparing values during [model#setValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setValue) only the value is considered not the display value. Also, when the changes are saved to the server just the value is included without being wrapped in an object. Other special fields such as identity or parent etc. cannot have this structure.

### Control Breaks:

A table shape model can facilitate view layer presentation of control breaks by keeping track of the control break values and the boundary between the control breaks. The data must be pre-sorted by the control break field values according to [model.FieldMeta](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.FieldMeta) property `controlBreakIndex` and the last record in each control break must have the [model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata) property `endControlBreak` set to true.

### Aggregations:

A table shape model can contain aggregate information. Aggregations are just records that the server includes in order among all the other records marked with metadata property `agg: "`*`AggregateFunctionName`*`"`. Aggregate records can also be created by the model when fields have [model.FieldMeta](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.FieldMeta) property `aggregates` defined. The aggregate record has most fields empty except for the aggregate fields that contain the aggregate value. The results of each different aggregate function is in a separate record.

### Ajax Messages:

This section defines the JSON content of the Ajax requests the model sends to the server and the responses it expects back. This information is useful when creating a plug-in that uses the model.

All the requests and responses use the regions array structure shown in [apex.server.plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html#.plugin). The top level object contains a property called "regions" which is an array of region objects. Each region object, in both the request and response, contains the "id" (region id) and "ajaxIdentifier" associated with the region plug-in. The rest of the region object content depends on the type of request.

```
{
    "regions": [ {
       "id": region-id-or-static-id,
       "ajaxIdentifier": ajaxIdentifier,
       // model create option regionData is merged here
       // method specific properties go here
    }, ...]
}
```

#### Method [model#fetch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetch) request:

Model shape table:

```
"fetchData": {
    "firstRow": n, // one based
    "maxRows": n, // null if paginationType is "none"
    "version": version // model create option version
    // model create option fetchData is merged here
}
```

Model shape tree or record:

```
"fetchData": {
    "version": version // model create option version
    // model create option fetchData is merged here
}
```

#### Method [model#fetch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetch) response:

Model shape table:

```
"fetchedData": {
    "values": [record, ...],
    "firstRow": n, // one based
    "moreData": true|false, // true if there are more records on the server and false otherwise
    "dataOverflow": true|false, // optional, true if the server has more data than can be returned
        // even with pagination. When this is true the totalRows should reflect what the server is willing
        // to return not the total number of rows in the database.
    "totalRows": n // only required when option hasTotalRecords is true
}
```

Model shape tree:

```
"fetchedData": {
    "root": node
}
```

Model shape record:

```
"fetchedData": {
    "value": record
}
```

#### Method [model#fetchRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetchRecords) request:

```
"fetchData": {
    "primaryKeys": [key, ...] // a key is { "recordId": stringId, "pk": [identityValue, ...] }
    "version": version // model create option version
    // model create option fetchData is merged here
}
```

#### Method [model#fetchRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetchRecords) response:

```
"fetchedData": {
    "values": [record, ...]
}
```

#### Method [model#save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#save) request:

```
"saveData": {
    "models": [
        {
            "version": version // model create option version
            "instance": modelInstance, // model instance or null
            "values": [record, ...] // meta column contains "op": i|u|d for operation insert, update, delete
                // Note additional properties in the meta column are not yet formally defined
                // inserted records have identityField values set to "".
            // model create option saveData is merged here
        }, ... // when saving a master model there can be additional detail models
    ]
}
```

#### Method [model#save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#save) response:

```
"fetchedData": {
    models: [
        {
            "values": [record, ...], // records updated or inserted are returned
        }, ... // when saving a master model there can be additional detail models
    ]
}
```

#### Method [model#fetchChildNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetchChildNodes) request:

```
"fetchData": {
    "parentId": [identityValue, ...], // an array of identity field values or null
    "version": version // model create option version
    // model create option fetchData is merged here
}
```

#### Method [model#fetchChildNodes](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetchChildNodes) response:

When parentId in the request is null the response contains the whole tree:

```
"fetchedData": {
    "root": node
}
```

When parentId is given in the request the response contains an array of child nodes:

```
"fetchedData": {
    childrenField: [node, ...]
}
```

Since:
- 5.1

### Example

Models are typically used by advanced UI controls (views) to display, interact with, and edit data. The following is a high level sketch of how a UI control might use a table shape model.

```
// The widget can create the model during widget initialization
this.model = apex.model.create( modelName, options, initialData, ... );

// Or it can be configured with the name of a model that already exists and get a reference to it
this.model = apex.model.get( modelName );

// In either case subscribe to model notifications
this.modelViewId = this.model.subscribe( {
    onChange: modelNotificationFunction,
} );

// During create or when the widget is refreshed it should render data from the model
// this.pageOffset starts at 0. When the user changes pages or additional page data is needed, run this code again.
// The model fetches more data from the server as needed.
var count = 0;
this.model.forEachInPage( this.pageOffset, pageSize, function( record, index, id ) {
    if ( record ) {
        // render the row record
        count += 1;
    }
    if ( count === pageSize || !record ) {
        // done rendering this page of records
    }
} );

// When settings change that affect the data such as changing the sort order or applying a filter
// the new sort order or filter information can be communicated to the server in the model fetchData or
// regionData option or it can be sent in a separate Ajax request.
this.model.clearData();

// Clearing the data will result in a refresh notification. The modelNotificationFunction should
this.pageOffset = 0;
// call the above forEachInPage code to fetch and render the new data.

// When the widget is destroyed it needs to release the model
this.model.unSubscribe( this.modelViewId );
this.model.release( modelName );
```

### Notifications

#### addData

Sent when data has been added to the model from the server. Virtual scroll pagination or changing data on the server (for example other processes inserting or removing records) can result in reindexing some or all of the records in the model. If the view stores the `index` or `recSequence` for records then it must adjust them to account for the changed indexes. The optional firstIndex property indicates if reindexing was done.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"addData"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-1">Properties</h6>
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
<th class="name" scope="row"><code>parentNode</code></th>
<td class="type"><a href="model.html#.Node">model.Node</a></td>
<td class="attributes"></td>
<td class="description last">Only for tree shape models. This is the parent node the data was added to or null if root.</td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">Index into the client model data. 0 for tree or record shape models</td>
</tr>
<tr>
<th class="name" scope="row"><code>count</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">Number of records added to the model. For a tree shape model this is the number of nodes added to the parent or 1 if root. For table shape models the count could be less than the number of records returned by the server if some records were merged (replaced) existing record with same identity.</td>
</tr>
<tr>
<th class="name" scope="row"><code>replacedIds</code></th>
<td class="type">array</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for table shape models. Array of record ids that were replaced. This happens when a record returned by the server is already in the model. In this case the existing record is replaced and the record id is added to this list.</td>
</tr>
<tr>
<th class="name" scope="row"><code>firstIndex</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The zero based index of the first view item that may need to have the <code class="prettyprint">index</code> or <code class="prettyprint">recSequence</code> updated.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### clearChanges

Sent when the model has been saved (or [model#clearChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#clearChanges) called) after all metadata related to changes has been cleared. If the view stores the `index` or `recSequence` for records then it must adjust them to account for the deleted records if any.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"clearChanges"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-3">Properties</h6>
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
<th class="name" scope="row"><code>deletedIds</code></th>
<td class="type">array</td>
<td class="description last">Record ids for deleted records.</td>
</tr>
<tr>
<th class="name" scope="row"><code>changedIds</code></th>
<td class="type">array</td>
<td class="description last">Record ids for records that had been updated or inserted.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### copy

Sent when one or more records are copied. If the view stores the `index` or `recSequence` for records then it must adjust them to account for the copied records.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"copy"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-5">Properties</h6>
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
<th class="name" scope="row"><code>records</code></th>
<td class="type">array</td>
<td class="description last">The records that were copied.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordIds</code></th>
<td class="type">array</td>
<td class="description last">The ids of the records that were copied. The ith item in this array corresponds to the ith item in the records array.</td>
</tr>
<tr>
<th class="name" scope="row"><code>insertAfterId</code></th>
<td class="type">string</td>
<td class="description last">The id of the record that these new records were inserted after or null if inserted at the beginning.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### delete

Sent when one or more records are deleted. If the view stores the `index` or `recSequence` for records then it must adjust them to account for the deleted records.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"delete"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-7">Properties</h6>
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
<th class="name" scope="row"><code>records</code></th>
<td class="type">array</td>
<td class="description last">The records that were deleted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordIds</code></th>
<td class="type">array</td>
<td class="description last">The ids of the records that were deleted. The ith item in this array corresponds to the ith item in the records array.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### destroy

Sent when the model is destroyed.

##### Properties:

| Name | Type | Description |
|----|----|----|
| `changeType` | string | "destroy" |
| `change` | object | There is no additional information so this object is empty. |

#### insert

Sent when a record is inserted into the model. If the view stores the `index` or `recSequence` for records then it must adjust them to account for the inserted record.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"insert"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-10">Properties</h6>
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
<th class="name" scope="row"><code>record</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">The inserted record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordId</code></th>
<td class="type">string</td>
<td class="description last">The id of the inserted record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>insertAfterId</code></th>
<td class="type">string</td>
<td class="description last">The id of the record that this new record was inserted after or null if inserted at the beginning.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### instanceRename

Sent when the model instance changes. This happens when the id of the master record in the parent model that this model is associated with changes. A view that stores the model id should update the instance portion of the model id in response to this notification. This only applies to detail models.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"instanceRename"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-12">Properties</h6>
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
<th class="name" scope="row"><code>oldInstance</code></th>
<td class="type">string</td>
<td class="description last">The old instance.</td>
</tr>
<tr>
<th class="name" scope="row"><code>newInstance</code></th>
<td class="type">string</td>
<td class="description last">The new instance.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### metaChange

Sent when metadata has changed. The record field values have not changed but the record or field metadata has changed. Typically, this is the result of validation errors. If external code changes the metadata it must call [model#metadataChanged](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#metadataChanged) (which sends this notification) to let other views know about the change.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"metaChange"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-14">Properties</h6>
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
<th class="name" scope="row"><code>record</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">The record that changed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>field</code></th>
<td class="type">string</td>
<td class="description last">The name of the field that changed or null if field metadata didn't change.</td>
</tr>
<tr>
<th class="name" scope="row"><code>property</code></th>
<td class="type">string</td>
<td class="description last">The name of the metadata property that changed or null if not specified. If multiple properties changed this can be a comma separated list.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### move

Sent when one or more records are moved. If the view stores the `index` or `recSequence` for records then it must adjust them to account for the moved records.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"move"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-16">Properties</h6>
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
<th class="name" scope="row"><code>records</code></th>
<td class="type">array</td>
<td class="description last">The records that were moved.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordIds</code></th>
<td class="type">array</td>
<td class="description last">The ids of the records that were moved. The ith item in this array corresponds to the ith item in the records array.</td>
</tr>
<tr>
<th class="name" scope="row"><code>insertAfterId</code></th>
<td class="type">object</td>
<td class="description last">The id of the record that these new records were inserted after or null if inserted at the beginning.</td>
</tr>
<tr>
<th class="name" scope="row"><code>firstIndex</code></th>
<td class="type">number</td>
<td class="description last">The zero based index of the first view item that may need to have the <code class="prettyprint">index</code> or <code class="prettyprint">recSequence</code> updated.</td>
</tr>
<tr>
<th class="name" scope="row"><code>lastIndex</code></th>
<td class="type">number</td>
<td class="description last">The zero based index of the last view item that may need to have the <code class="prettyprint">index</code> or <code class="prettyprint">recSequence</code> updated.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### refresh

Sent when the model has been given new data or there is a change in data on the server that the model should now go get. In either case the previous data in the model is gone/changed, unless the `clearDataPending` property is true, so any views showing the model data should re-render their views. If the `clearDataPending` property is true the data is waiting to be cleared by the next fetch but is still in the model. See [model#clearData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#clearData).

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"refresh"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
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
<th class="name" scope="row"><code>clearDataPending</code></th>
<td class="type">boolean</td>
<td class="description last">When true the data is not cleared until after the next fetch request completes.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### refreshRecords

Sent when specific records in the model have changed. This happens when the model is saved if the server returns updated records or when [model#fetchRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetchRecords) is called. Both the record field values and metadata may have changed. The view layer should render the new record including taking into consideration any metadata and replace the existing view of the record.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"refreshRecords"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-20">Properties</h6>
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
<th class="name" scope="row"><code>records</code></th>
<td class="type">array</td>
<td class="description last">Records that have been updated. Note for inserted items this includes the new id</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordIds</code></th>
<td class="type">array</td>
<td class="description last">Record ids that have been changed. Note for inserted items the previous (old) id is given. The ith item in this array corresponds to the ith item in the records array.</td>
</tr>
<tr>
<th class="name" scope="row"><code>newIds</code></th>
<td class="type">object</td>
<td class="description last">For inserted records this is a map from the previous (old) id to the new id.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### revert

Sent when record changes are reverted.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"revert"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-22">Properties</h6>
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
<th class="name" scope="row"><code>records</code></th>
<td class="type">array</td>
<td class="description last">The records that were reverted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordIds</code></th>
<td class="type">array</td>
<td class="description last">The ids of the records that were reverted. The ith item in this array corresponds to the ith item in the records array.</td>
</tr>
<tr>
<th class="name" scope="row"><code>newIds</code></th>
<td class="type">object</td>
<td class="description last">For records where the identity was changed and is now reverted this is a map from the previous (old) id to the new (reverted) id.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

#### set

Sent when a field value of a record is changed.

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
<th class="name" scope="row"><code>changeType</code></th>
<td class="type">string</td>
<td class="description last">"set"</td>
</tr>
<tr>
<th class="name" scope="row"><code>change</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-24">Properties</h6>
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
<th class="name" scope="row"><code>oldValue</code></th>
<td class="type">*</td>
<td class="description last">The previous value of the field.</td>
</tr>
<tr>
<th class="name" scope="row"><code>oldIdentity</code></th>
<td class="type">string</td>
<td class="description last">If the identity changed this is the previous identity value.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recordId</code></th>
<td class="type">string</td>
<td class="description last">The id of the record that changed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>record</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">The record that changed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>field</code></th>
<td class="type">string</td>
<td class="description last">The name of the field that changed.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

### Methods

#### addChangesToSaveRequest(pRequestData)

Rarely needed. Only useful if making your own call to the server. See [model#save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#save), [apex.model.addChangesToSaveRequest](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.addChangesToSaveRequest), and [apex.model.save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.save).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRequestData` | object | An empty or partially filled in object to which changes for this model will be added. |

#### allowAdd(pParentRecordopt, pAddActionopt, pRecordsToAddopt) → {boolean}

Determine if any record or one or more specific records can be added to the table collection or, for trees, the parent record's children collection.

For any record or one or more specific records to be addable:

- the shape must not be record and
- if the shape is a tree the parent record is required and must have a children collection
- the model must have the `editable` option set to true and
- if the shape is tree the type of the parent record must allow "add" or
- if the shape is table or the parent record has no type or doesn't specify if it allows "add" the default type must allow "add"
- and if the model specifies an additional `check` callback function it must allow or deny the "add"
- then, for tree shape only, if adding is allowed and `pRecordsToAdd` is given then check if the type of each record to add is a valid child type for the parent using validChildren type property.

##### Parameters:

<table class="params" aria-label="Parameters for allowAdd">
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
<th class="name" scope="row"><code>pParentRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The parent record to add children to if the shape is tree, null if the shape is table.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAddAction</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Specifies how/why the records are to be added. Standard values are "new", "move", or "copy".</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecordsToAdd</code></th>
<td class="type">Array.&lt;<a href="model.html#.Record">model.Record</a>&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An array of the records to be added. Only used for tree shape models.</td>
</tr>
</tbody>
</table>

##### Returns:

true if add is allowed.

Type
boolean

##### Example

This example checks if adding is allowed before inserting a record.

```
if ( myModel.allowAdd() ) {
    myModel.insertNewRecord();
}
```

#### allowDelete(pRecord) → {boolean}

Determine if the given record can be deleted.

For a record to be deletable:

- the shape must not be record
- if the shape is a tree the record must not be the root record
- the model must have the `editable` option set to true
- if the shape is a tree all the descendant nodes must also be deletable according to the following
- the type of the record must allow "delete" or
- if the record has no type or doesn't specify if it can be deleted the default type must allow "delete"
- and if the model specifies an additional `check` callback function it must allow or deny the "delete"

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record to check if deleting is allowed. |

##### Returns:

true if the record can be deleted.

Type
boolean

##### Example

This example checks if deleting is allowed before deleting a record.

```
if ( myModel.allowDelete( record ) ) {
    myModel.deleteRecords( [record] );
}
```

#### allowDrag(pRecord) → {boolean}

Determine if a record can be dragged. Note this is just a check to see if the dragging can start. What is allowed on drop (move, copy etc.) is a separate check.

For a record to be draggable:

- the shape must not be record and
- the model must have the `editable` option set to true and
- the type of the record must allow drag or
- if the record has no type or doesn't specify if it can be dragged the default type must allow drag
- and if the model specifies an additional `check` callback function it must allow or deny the drag

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record to check if it can be dragged. |

##### Returns:

true if the record can be dragged.

Type
boolean

#### allowEdit(pRecord) → {boolean}

Determine if the given record can be edited.

For a record to be editable:

- the model must have the `editable` option set to true and
- the type of the record must allow edit or
- if the record has no type or doesn't specify if it can be edited the default type must allow edit
- and if the model specifies an additional `check` callback function it must allow or deny the edit

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record to check if editing is allowed. |

##### Returns:

true if the record can be edited.

Type
boolean

##### Example

This example checks if editing is allowed before setting a value.

```
if ( myModel.allowEdit( record ) ) {
    myModel.setValue( record, "NAME", newName );
}
```

#### canRevertRecord(pRecord) → {boolean}

Return true if the record exists in the model and has a change that can be reverted (is updated or is deleted). See also [model#revertRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#revertRecords).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record to check if it can be reverted. |

##### Returns:

true if the record has a change that can be reverted.

Type
boolean

##### Example

This example checks if a record can be reverted before reverting it.

```
if ( myModel.canRevertRecord( record ) ) {
    myModel.revertRecords( [record] );
}
```

#### check(pOperation, pRecordopt, pAddActionopt, pRecordsToAddopt) → {boolean}

Low level operation permission checking. Better to use [model#allowEdit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#allowEdit), [model#allowDelete](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#allowDelete), [model#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#allowAdd), [model#allowDrag](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#allowDrag). The purpose is to determine what kinds of edits are allowed.

If the model is not editable (editable option is false) then no operations are allowed. Also, no operations are allowed on deleted records or aggregate records. No operations are allowed when the [model#event:refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:refresh) notification `clearDataPending` property is true until the next fetch completes.

Operation checking is based on the type of the record (as determined by the type field) and the type information given to the model in the types option. Type names are strings. The special type name "default" is used to provide a default when records don't have a type or the type of the record doesn't specify a value for the operation. Note: The model types option is not currently documented and may change in the future.

Operations are strings. The standard operation permissions are "canAdd", "canDelete", "canEdit", "canDrag". You can define your own as well.

First the record itself is checked to see if it allows the operation by checking if the record metadata contains the specified permission. Next the type of the record is checked to see if it allows the operation. If the record has no type or the operations for that type didn't specify a value for the operation then the default type is checked to see if it allows the operation. The value of an operation is true or false or a function that returns true or false. The function is called in the context of this model with arguments `pRecord, pAddAction, pRecordsToAdd`. If the model options includes a `check` function then it is called with the result so far and all the same arguments as this check function. See [model.CheckCallback](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.CheckCallback).

##### Parameters:

<table class="params" aria-label="Parameters for check">
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
<th class="name" scope="row"><code>pOperation</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">One of the default checks ("canEdit", "canDelete", "canAdd", "canDrag") or a custom operation.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The record to check if action is allowed on it.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAddAction</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only used by allowAdd see <a href="model.html#allowAdd">model#allowAdd</a> for details.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecordsToAdd</code></th>
<td class="type">Array.&lt;<a href="model.html#.Record">model.Record</a>&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only used by allowAdd see <a href="model.html#allowAdd">model#allowAdd</a> for details.</td>
</tr>
</tbody>
</table>

##### Returns:

true if the operation is allowed.

Type
boolean

#### child(pNode, pIndex) → {[model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node)}

Return the child at pIndex of node pNode.

This method must only be used on tree shape models.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node) | The node who's ith child is to be returned. |
| `pIndex` | number | The index of the child node. |

##### Returns:

The ith child node.

Type
[model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node)

##### Example

This example loops over the children of a parent node.

```
var i, node;
for ( i = 0; i < model.childCount( parentNode ); i++ ) {
    node = model.child( parentNode, i );
    // do something with node
}
```

#### childCount(pNode) → {number\|null}

Returns the number of children that node `pNode` has, or null if the answer is not yet known. A node that has its children lazy loaded may not know how many children it has until they are loaded.

This method must only be used on tree shape models.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node) | The node whose children are to be counted. |

##### Returns:

Number of children, 0 if none, or null if not known.

Type
number \| null

##### Example

This example loops over the children of a parent node.

```
var i, node;
for ( i = 0; i < model.childCount( parentNode ); i++ ) {
    node = model.child( parentNode, i );
    // do something with node
}
```

#### clearChanges()

This marks the model as not having any changes. All change indications will be removed. If any record deletes are pending they will be removed by this method. This does not revert or undo the changes but rather removes all metadata that is tracking changes. This happens implicitly after the model is saved (See [model#save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#save)). Use this method if changes are persisted in some other way or the changes should be discarded before refreshing the model.

See also [model#revertRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#revertRecords) and option model#trackChanges.

##### Fires:

- [model#event:clearChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:clearChanges)

##### Example

This example clears all the changes of an interactive grid with HTML DOM id "emp" in response to a Cancel or Abort button being pressed by the user. Use in an Execute JavaScript Code dynamic action. If not for the call to `clearChanges` before `refresh` the interactive grid would prompt the user to save changes.

```
var ig$ = apex.region( "emp" ).widget(),
    view = ig$.interactiveGrid( "getCurrentView" );
if ( view.supports.edit ) {
    // leave edit mode so that the column items will be reinitialized
    ig$.interactiveGrid( "getActions" ).set( "edit", false );
    view.model.clearChanges();
}
apex.region("emp").refresh();
```

#### clearData(pNotifyopt) → {boolean}

Remove all data from the model. This is called by view layers to indicate that the model should be refreshed with new data from the server. The model sends a refresh notification and the views respond by requesting new data with [model#fetch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetch) or [model#forEachInPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#forEachInPage). The `delayClearData` option controls when the data is actually cleared.

When `delayClearData` is false the data is cleared right away, before the refresh notification is sent, and the view should remove the displayed data or block all interaction with it, because there is no data backing it in the model.

When `delayClearData` is true the data will be cleared when the next [model#fetch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetch) request completes. The view can continue to display the current data until fetch completes. The model will not allow editing while clear data is pending.

##### Parameters:

<table class="params" aria-label="Parameters for clearData">
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
<th class="name" scope="row"><code>pNotify</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If false don't send the refresh notification. The default is true to send the refresh notification.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:refresh)

##### Returns:

true for success and false if the model is not cleared because fetch or save requests are in progress.

Type
boolean

##### Examples

Clear the data for a model. This will typically cause any views to refresh, which results in requesting new data from the model.

```
myModel.clearData();
```

See example for [apex.model.multipleFetch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.multipleFetch).

#### clearSelection()

Unselect all the selected records. Should only be used with table shape models. See also [model#setSelectionState](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setSelectionState).

This method should only be used by view widgets to persist the view selection state in metadata property `sel`. Note there is no notification about this metadata change. Listen to the view for selection change events. Also use the view to change the selection.

#### copyRecords(pRecords, pParentRecordopt, pAfterRecordopt) → {Array.\<string\>}

Copies the given records and inserts the copies into the collection (table or parent node's children) or, for tree shape only, to a new parent node.

##### Parameters:

<table class="params" aria-label="Parameters for copyRecords">
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
<td class="description last">Array of records to copy.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pParentRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only used when the shape is tree. This is the parent node to insert the copies into. If null then insert to root.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAfterRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The copied records are added after this record or if null at the beginning.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:copy](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:copy)

##### Returns:

Array of temp primary keys of inserted records.

Type
Array.\<string\>

##### Example

This examples copies the selected records to just after the last selected record.

```
var keys = model.copyRecords( selectedRecords, null, selectedRecords[ selectedRecords.length - 1 ] );
```

#### deleteRecords(pRecords) → {number}

Delete one or more records from a table or tree.

If the `onlyMarkForDelete` option is true the records are just marked for delete. Records marked for delete will be included in data returned by [model#forEach](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#forEach), [model#forEachInPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#forEachInPage), [model#walkTree](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#walkTree), etc. and can be found by [model#getRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecord). They will be deleted once the [model#clearChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#clearChanges) method is called explicitly or implicitly after data has been saved successfully.

If the `onlyMarkForDelete` option is false the records are deleted right away and are no longer part of the model. In either case the deleted records are on the change list so the deletion can be persisted.

If `pRecords` contains records that cannot be found in the collection or finds records that can't be deleted they are ignored and a debug warning is given.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecords` | Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\> | An array of records to delete. |

##### Fires:

- [model#event:delete](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:delete)

##### Returns:

The number of records deleted or marked for delete.

Type
number

##### Example

This example checks if deleting is allowed before deleting a record.

```
if ( myModel.allowDelete( record ) ) {
    myModel.deleteRecords( [record] );
}
```

#### dragOperations(pRecords) → {object}

Determine what drag operations are allowed for a set of records. Not all views support dragging. Dragging is a view operation. The model provides this method simply to allow type based configuration of available drag operations. Note: The model types option is not currently documented and may change in the future.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecords` | Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\> | array of records to determine drag operations for or null when dragging an external record into this model. |

##### Returns:

object with allowed drag operations. The properties are: "normal", "ctrl", "alt", "shift", "meta". The standard values are "move", "copy" or "add". Other values are allowed. The normal property is required. The default is: `{ normal: "move", ctrl: "copy" }` or if `pRecords` is null `{ normal: "add" }`

Type
object

#### fetch(pOffsetopt, pCallbackopt, pNoProgressopt) → {promise}

Retrieve model data from the server. Data is requested starting at the given offset (or 0 if offset is not given). Data is fetched in model option `pageSize` chunks. Can use either the callback argument or the returned promise to determine when the request is complete.

##### Parameters:

<table class="params" aria-label="Parameters for fetch">
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
<th class="name" scope="row"><code>pOffset</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Zero based offset of the data to fetch. Only applies to table shape models. This is rarely needed because table data is automatically fetched as needed when requested via the <a href="model.html#forEachInPage">model#forEachInPage</a> method. Omit this parameter when not needed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A function to call when the request is complete. The callback is passed an Error argument only if there is an error.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoProgress</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Set to true to not show progress during the fetch.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:addData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:addData)

##### Returns:

A promise if the fetch is initiated, null if there is already a fetch in progress, and false if `pOffset` is beyond the end of the data or master record is inserted or deleted or if `pOffset` != 0 when `paginationType` is "none". If and only if a promise is returned, `pCallback` will be called. It receives no arguments when resolved and an `Error` argument when rejected.

Type
promise

#### fetchAll(pCallback, pNoProgressopt)

Fetch all the data from the server into the model. This repeatedly calls [model#fetch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetch) until the server reports there is no more data. This is only for table shape models. Data is fetched in chunks that may be larger than model option `pageSize`. Since all the data is to be loaded the intent is to do so in fewer ajax requests.

Use with caution. Loading too much data onto the client can take a long time and cause the browser to become unresponsive.

##### Parameters:

<table class="params" aria-label="Parameters for fetchAll">
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
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">Function that is called after each fetch completes. It receives an object with properties:
<ul>
<li>offset: the current offset in the model that was just added</li>
<li>total: total records in the model (see <a href="model.html#getTotalRecords">model#getTotalRecords</a>)</li>
<li>done: true if all the data is fetched false otherwise. When true this is the last time the callback is called.</li>
</ul></td>
</tr>
<tr>
<th class="name" scope="row"><code>pNoProgress</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">true</td>
<td class="description last">Set to false to show progress during fetch. Set to true to hide progress spinner during fetch. The default is true.</td>
</tr>
</tbody>
</table>

##### Example

This example fetches all the data before using [model#forEach](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#forEach) to loop over the records.

```
model.fetchAll( function( status ) {
    if ( status.done ) {
        model.forEach( function( record, index, id ) {
            // do something with each record
        } );
    }
} );
```

#### fetchChildNodes(pNodeopt, pCallbackopt) → {promise}

Fetch child nodes for node `pNode`. This method is only used for trees that lazy load data from the sever as needed. If `pNode` is not given or null the whole tree is loaded from the server.

This is an asynchronous operation. When it completes the `pCallback` function is called with a status argument. Where status is:

- \> 0 (or true) if 1 or more children were fetched.
- 0 if the node has 0 children.
- Error if there was an error fetching the children.

Can use either the callback argument or the returned promise to determine when the request is complete.

##### Parameters:

<table class="params" aria-label="Parameters for fetchChildNodes">
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
<th class="name" scope="row"><code>pNode</code></th>
<td class="type"><a href="model.html#.Node">model.Node</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The node record to fetch children for. If null or omitted fetch the root node.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">callback function that is called after nodes have been fetched or there is an error.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:addData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:addData)

##### Returns:

A promise that receives count of children fetched when resolved and an Error argument when rejected.

Type
promise

#### fetchRecords(pRecords, pCallbackopt) → {promise}

Fetches fresh data from the server for the given records. The existing records in the model are replaced with the new returned record from the server. The model must have a `identityField` option defined for this to work. Can use either the callback argument or the returned promise to determine when the request is complete.

##### Parameters:

<table class="params" aria-label="Parameters for fetchRecords">
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
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes"></td>
<td class="description last">Array of records to be fetched.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A function to call when the request is complete. The callback is passed an Error argument only if there is an error.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:refreshRecords](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:refreshRecords)

##### Returns:

A promise that receives no arguments when resolved and an Error argument when rejected. If there are no records to fetch then null is returned and `pCallback` is not called.

Type
promise

##### Example

This example fetches the selected records from interactive grid with HTML DOM id "emp". There is often no need know when the Ajax request completes because the view is updated from model notifications.

```
var model = apex.region( "emp" ).call( "getCurrentView" );
model.fetchRecords( apex.region( "emp" ).call( "getSelectedRecords" );
```

#### forEach(pCallback, pThisArgopt)

Iterate over the model collection. Calls `pCallback` for each record in the model. Similar to `Array.prototype.forEach`. The model shape must be table or tree. This will never fetch new data. This includes aggregate records if any. For shape tree see also [model#walkTree](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#walkTree).

The callback receives the record, the zero based index of the record, and the identity (recordId) of the record.

##### Parameters:

<table class="params" aria-label="Parameters for forEach">
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
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type"><a href="model.html#.IteratorCallback">model.IteratorCallback</a></td>
<td class="attributes"></td>
<td class="description last">Function called for each record in the model collection. The function is given the current record, index, and id.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pThisArg</code></th>
<td class="type">*</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Value to use as <code class="prettyprint">this</code> when calling <code class="prettyprint">pCallback</code>.</td>
</tr>
</tbody>
</table>

##### Example

This example calculates the total of field SALARY for all the records that are currently in the model. Deleted and aggregate records are skipped.

```
var total = 0;
model.forEach( function( record, index, id ) {
    var salary = parseFloat( model.getValue( record, "SALARY" ) ),
        meta = model.getRecordMetadata( id );

    if ( !isNaN( salary ) && !meta.deleted && !meta.agg ) {
        total += salary;
    }
} );
// do something with total
```

#### forEachInPage(pOffset, pCount, pCallback, pThisArgopt)

Iterate over a range (page) of the model collection. This is only valid for table shape models. Calls `pCallback` for `pCount` records in the collection starting at `pOffset`. If the model doesn't yet contain the requested records they will be fetched from the server by calling [model#fetch](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#fetch).

The callback receives the record, the zero based index of the record, and the identity (recordId) of the record. If the collection has fewer records than requested or if there is an error fetching data from the server then `pCallback` is called with a null record. If there is an ajax error it is passed to the callback in the error parameter. When more data needs to be fetched the last call before the fetch, has the error parameter set to false. This gives the view layer a way to respond to the pause in rendering due to the asynchronous ajax request.

##### Parameters:

<table class="params" aria-label="Parameters for forEachInPage">
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
<th class="name" scope="row"><code>pOffset</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">Zero based index to begin iterating.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCount</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The number of records to call <code class="prettyprint">pCallback</code> for.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type"><a href="model.html#.IteratorCallback">model.IteratorCallback</a></td>
<td class="attributes"></td>
<td class="description last">Function called for each record in the model collection. The function is given the current record, index, and id.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pThisArg</code></th>
<td class="type">*</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Value to use as <code class="prettyprint">this</code> when calling <code class="prettyprint">pCallback</code>.</td>
</tr>
</tbody>
</table>

##### Example

This example renders a `pageSize` page of records starting at offset `currentPageOffset`.

```
var count = 0,
    pageOffset = currentPageOffset;
model.forEachInPage( pageOffset, pageSize, function( record, index, id ) {
    if ( record ) {
        // render the record
        count += 1;
    }
    if ( count === pageSize || !record ) {
        // done rendering this page of records
    }
} );
```

#### getChanges() → {Array.\<[model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata)\>}

Return an array of record metadata for all changed records. Do not make any changes to the data structure returned. See also [model#isChanged](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#isChanged).

##### Returns:

Array of record metadata for changed records.

Type
Array.\<[model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata)\>

##### Example

This example logs a console message if the model has changed that includes the number of changes.

```
if ( model.isChanged() ) {
    console.log("Model has " + model.getChanges().length + " changes.");
}
```

#### getControlBreakId(pRecord) → (nullable) {string}

Return an opaque id that represents the control break that the record belongs to.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record to get the control break id from. |

##### Returns:

The control break id that the record belongs to or null if the model doesn't have any control break fields defined.

Type
string

##### Example

The following code checks if 2 records are in the same control break.

```
if ( model.getControlBreakId( rec1 ) === model.getControlBreakId( rec2 ) ) {
    console.log( "records are in the same control break." );
} else {
    console.log( "records are not in the same control break." );
}
```

#### getDataOverflow() → {boolean}

Return true if the number of records in the data set on the server exceeds some server configured maximum. A server may put a limit on how much data it is willing to return. If the amount of data requested exceeds this limit it will indicate that there is data overflow. This method allows a UI layer to alert the user that there is more data than they can see. Typically, the UI layer would allow filtering so that a reasonable amount of data is returned.

##### Returns:

Type
boolean

##### Example

This example determines if there is data overflow.

```
let tooMuchData = model.getDataOverflow();
// tooMuchData is true if the server has indicated that it has more data than it is willing or able
// to return to the client.
```

#### getErrors() → {Array.\<[model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata)\>}

Return an array of record metadata for all records with errors. Do not make any changes to the data structure returned.

##### Returns:

Array of record metadata for error records.

Type
Array.\<[model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata)\>

#### getFieldKey(pFieldName) → {string\|number\|undefined}

Return the index/key to use for the given field name when accessing that field of a record. Use the value returned from this method to access a record field without using [model#getValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getValue). This will work regardless of if the records are stored as objects or arrays.

##### Parameters:

| Name         | Type                                   | Description     |
|--------------|----------------------------------------|-----------------|
| `pFieldName` | string | The field name. |

##### Returns:

returns undefined if the field doesn't exist or is virtual

Type
string \| number \| undefined

##### Example

This example gets the field key for the model field named "COST" and uses it in a loop over array of records `selectedRecords`.

```
var i, cost,
    costKey = model.getFieldKey("COST");
for ( i = 0; i < selectedRecords.length; i++ ) {
    cost = selectedRecords[i][costKey];
    // do something with cost
}
```

#### getFieldMetadata(pFieldName) → {[model.FieldMeta](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.FieldMeta)}

Return metadata object for given field name. The field metadata is supplied when the model is created in option property `fields`.

##### Parameters:

| Name         | Type                                   | Description     |
|--------------|----------------------------------------|-----------------|
| `pFieldName` | string | The field name. |

##### Returns:

Metadata object or null if there is no such field.

Type
[model.FieldMeta](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.FieldMeta)

#### getOption(pName) → {\*}

Get the value of the given model option. The model options are provided in the call to [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create). See also [model#setOption](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setOption).

##### Parameters:

| Name    | Type                                   | Description            |
|---------|----------------------------------------|------------------------|
| `pName` | string | Name of option to get. |

##### Returns:

Option value.

Type
\*

##### Examples

This example gets the `onlyMarkForDelete` option.

```
var markForDelete = model.getOption( "onlyMarkForDelete" );
```

This example gets the `hasTotalRecords` option.

```
var hasTotalRecords = model.getOption( "hasTotalRecords" );
```

#### getRecord(pRecordIdopt) → {[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\|null}

Return the record for a given record id. This only considers records that are currently fetched into the model. The server may have a record with the given record id but if it hasn't yet been fetched into the model, it will not be found with this method.

For table or tree shape models that define an `identityField` option, call with the value of the record's identity field or if the records have multiple identity fields call with an array of ids or a string representation of the combined identity fields as returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId).

For table shape models that don't define an `identityField` option call with the index of the record. This is the same as [model#recordAt](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#recordAt).

For record shape models call with no record id to get the one and only model record.

For tree shape models that do not define an `identityField` this always returns null

##### Parameters:

<table class="params" aria-label="Parameters for getRecord">
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
<th class="name" scope="row"><code>pRecordId</code></th>
<td class="type">string | Array.&lt;string&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The record id.</td>
</tr>
</tbody>
</table>

##### Returns:

Record or null if no record corresponding to `pRecordId` is found.

Type
[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) \| null

##### Examples

This example returns the record with identity "001002".

```
record = model.getRecord( "001002" );
```

This example has a table shape model with two identity fields. It returns the record from a model with identity `["AXB9", "00003"]`.

```
record = model.getRecord( ["AXB9", "00003"] );
```

This example returns the record from a model with shape record.

```
record = model.getRecord();
```

#### getRecordId(pRecord) → {string}

Given a record return the unique identifier (id) for the record. The id is used in calls to [model#getRecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordMetadata) and [model#getRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecord). If the model has multiple identity fields this returns a string representation of the combined fields.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record to get the id from. |

##### Returns:

The record id or null if no identityField is defined.

Type
string

##### Example

This example gets the identity of record `someRecord` and uses it to get the record metadata.

```
var id = model.getRecordId( someRecord ),
    meta = model.getRecordMetadata( id );
// use meta for something
```

#### getRecordMetadata(pRecordIdopt) → {[model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata)}

Return the metadata object for the record given by the record id. This only applies to models that define an identity field with option `identityField`. From the record metadata you access field metadata via the `fields` property. Note that a fields property doesn't exist if it has no metadata, so you have to check that it exists before accessing or setting any of its properties, as shown in the second example.

Upper layers can store information related to the record here. The metadata should be related to the record itself and not the view of it.

If any metadata property values are changed, call [model#metadataChanged](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#metadataChanged) to notify any view layer of the change if needed.

##### Parameters:

<table class="params" aria-label="Parameters for getRecordMetadata">
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
<th class="name" scope="row"><code>pRecordId</code></th>
<td class="type">string | Array.&lt;string&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Value of the record's identity field or array of values of the record's identity fields or value returned by <a href="model.html#getRecordId">model#getRecordId</a>. This can be omitted when the model shape is "record".</td>
</tr>
</tbody>
</table>

##### Returns:

Metadata object or null if there is no record associated with `pRecordId`.

Type
[model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata)

##### Examples

This example checks if the record `someRecord` is updated.

```
var id = model.getRecordId( someRecord ),
    meta = model.getRecordMetadata( id );
if ( meta.updated ) {
    // do something related to the updated record
}
```

This example, using the EMP table, sets the `highlight` property of the record or the SAL field based on conditions of the SAL and COMM values. Note that the [grid](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/grid.html) widget as used by the Interactive Grid region also uses the `highlight` property which could conflict with code such as this. If used with Interactive Grid the code could check if there is already a highlight value or could turn off the Interactive Grid highlight feature. This function would be called from a model [model.Observer](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Observer) in response to a "set" notification or possibly in response to a [apex.event:apexendrecordedit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html#.event:apexendrecordedit) event. The page needs to have custom CSS rules for the "warn-comm" and "warn-sal" classes.

```
function updateRecordHighlights( model, record, id ) {
    var meta = model.getRecordMetadata( id ),
        // turn number strings into numbers
        sal = Number( model.getValue( record, "SAL" ) ) || 0,
        comm = Number( model.getValue( record, "COMM" ) ) || 0,
        // get SAL field metadata creating it if it doesn't already exist.
        salFieldMeta = apex.util.getNestedObject( meta, "fields.SAL" );

    if ( sal > 5000 ) {
        salFieldMeta.highlight = "warn-sal";
    } else {
        salFieldMeta.highlight = null;
    }
    if ( comm > sal / 5 ) {
        meta.highlight = "warn-comm";
    } else {
        meta.highlight = null;
    }
    model.metadataChanged( id );
}
```

#### getRecordValue(pRecordId, pFieldName) → {\*}

Get the value of a record field given the record id. This is only useful when the model shape is table or tree. If there are many field values to get or set use [model#getRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecord) followed by [model#getValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getValue) or [model#setValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setValue). See also [model#setRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setRecordValue).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecordId` | string \| Array.\<string\> | Value of the record's identity field or array of values of the record's identity fields or value returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId). |
| `pFieldName` | string | Name of record field to get. |

##### Returns:

Value of record field.

Type
\*

##### Example

This example gets the NAME field of the record with identity "00013".

```
var name = model.getRecordValue( "00013", "NAME" );
```

#### getSelectedCount() → {number}

Return the number of currently selected records. This only applies if a view is storing selection state in the model. The selection may be incomplete if the model hasn't fetched all the data yet. The [model#getSelectionState](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getSelectionState) method is used to tell if the selection is incomplete.

This is used by views that store view selection state in the model to return the selection count.

##### Returns:

The number of selected records.

Type
number

#### getSelectedRecords() → {Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>}

Return an array of the selected records. This only applies if a view is storing selection state in the model. The selection may be incomplete if the model hasn't fetched all the data yet. The [model#getSelectionState](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getSelectionState) method is used to tell if the selection is incomplete.

This is used by views that store view selection state in the model to return the selection. It is generally best to get the selected records from the view layer.

##### Returns:

The selected records.

Type
Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\>

#### getSelectionState() → {object}

Returns an object with information about the selection state stored in the model.

This method should only be used by view widgets that persist the view selection state in the model.

##### Returns:

The returned object has these properties:

- incomplete: true if the intended selection includes records that have not yet been loaded into the model.

Type
object

#### getServerTotalRecords() → {number}

Returns the total number of records from the server's perspective or -1 if unknown.

For table shape models the server provides the total but for editable grids the number of inserted records is added and the number of deleted records subtracted. This is so the number reflects what is likely to be on the server after changes are saved.

For tree shape models this is not supported; returns -1.

For record shape models the number is always 1.

Note: Aggregate records are never included.

##### Returns:

The number of records or -1 if unknown.

Type
number

#### getTotalRecords(pCurrentTotalopt) → {number}

Returns the total number of records in the model collection or -1 if unknown.

For table shape models the total number of records may not be known or it may be an estimate. If the pagination type is "none" then the total records is known and it is the same as what is in the collection. If the pagination type is "progressive" and the model has paged to the end (all pages have been received and the server has said there is no more) then the total records is known and it is the same as what is in the collection (which could be different from what is actually on the server). If the server has told the model how many records it has then that is returned. This is an estimate of what the client model may eventually hold. This value may change as new pages are fetched. If the server has not told the model how many records it has then the total is unknown.

For tree shape models the total number of nodes is only available when the model defines the `identityField` option. The total doesn't include nodes that have not yet been fetched and never returns -1 (unknown) even if there are nodes that haven't been fetched. If there is no `identityField` this returns 0.

For record shape the number is always 1 unless `pCurrentTotal` is true and there is no record in which case it returns 0.

Note: Includes records that are marked for delete in the count. Also includes aggregate records if any in the count.

##### Parameters:

<table class="params" aria-label="Parameters for getTotalRecords">
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
<th class="name" scope="row"><code>pCurrentTotal</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If true, for table shape models will return the current total records in the collection rather than -1 if the total records is unknown. If true, for record shape models will return 0 if the record is null.</td>
</tr>
</tbody>
</table>

##### Returns:

The number of records or -1 if unknown.

Type
number

#### getValue(pRecordopt, pFieldName) → {\*}

Get the value of a record field given the record itself or omit the record when the model shape is record. See also [model#setValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setValue).

##### Parameters:

<table class="params" aria-label="Parameters for getValue">
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
<th class="name" scope="row"><code>pRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The record to return the value of the given column. Omit if model shape is record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFieldName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Name of record field to get.</td>
</tr>
</tbody>
</table>

##### Returns:

Value of record field.

Type
\*

##### Examples

This example returns the NAME field of the given record.

```
var name = model.getValue( someRecord, "NAME" );
```

This example returns the NAME field from a record shape model.

```
var name = model.getValue( "NAME" );
```

#### hasChildren(pNode) → {boolean}

Returns true if the node `pNode` has children, false if it does not, and null if not yet known. A node that has its children lazy loaded may not know if it has any children until they are loaded.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node) | The node to check if it has any children. |

##### Returns:

true if the node has children, false if it does not, and null if not known.

Type
boolean

##### Example

This example logs a message to the console if the node is a leaf (has no children).

```
if ( model.hasChildren( node ) === true ) {
    console.log("node is a leaf");
}
```

#### hasControlBreaks() → {boolean}

Return true if any control break columns are configured. See `controlBreakIndex` property of [model.FieldMeta](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.FieldMeta).

##### Returns:

Type
boolean

#### hasErrors() → {Boolean}

Return true if the model has any errors.

##### Returns:

true if model has errors and false otherwise.

Type
Boolean

##### Example

This example logs a console message if the model has errors.

```
if ( model.hasErrors() ) {
    console.log("Model has errors.");
}
```

#### indexOf(pRecord) → {number}

Return the index of the record within the collection. The collection may include aggregate records. Useful because [model#forEachInPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#forEachInPage) method takes a starting index/offset.

Only applies to table and tree shape models. Throws an error if the model shape is record. For tree shape models an identity field must be defined and this returns the index of the node among its siblings.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecord` | [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) | The record to return the index of. |

##### Returns:

The record index or -1 if not in collection or the root node of a tree shape model.

Type
number

#### insertNewRecord(pParentRecordopt, pAfterRecordopt, pNewRecordopt) → {string}

Inserts a new record into the collection. Only applies to tree and table shape models. For tree shape models the record is inserted under the given parent node. The model must allow adding new records. See [model#allowAdd](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#allowAdd).

##### Parameters:

<table class="params" aria-label="Parameters for insertNewRecord">
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
<th class="name" scope="row"><code>pParentRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Parent tree node. Only for tree shape models, must be null otherwise.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAfterRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Record after which to insert the new record. If not given the new record is inserted at the beginning.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pNewRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The new record to insert. If not given a new record is created using defaults. The identity, meta, children, and parent fields if any will be initialized. Control break fields will get the control break values from the control break the record is being inserted into.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:insert](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:insert)

##### Returns:

The temporary primary key of inserted record.

Type
string

#### isChanged() → {boolean}

Determine if the model has been changed in any way. See also [model#getChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getChanges).

Note: Auto inserted records don't count as changes unless they are also updated, but they are returned by [model#getChanges](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getChanges).

##### Returns:

true if the model has changed and false otherwise.

Type
boolean

##### Example

This example logs a console message if the model has changed.

```
if ( model.isChanged() ) {
    console.log("Model has changes.");
}
```

#### isDisabled(pRecord, pRecordMetaopt) → {boolean}

Return true if the record is disabled and false otherwise. The record disabled state is determined by the record [model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata) `disabled` property. If the `disabled` property is not defined or is null return a default of false.

##### Parameters:

<table class="params" aria-label="Parameters for isDisabled">
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
<th class="name" scope="row"><code>pRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes"></td>
<td class="description last">The record to determine disabled state for.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecordMeta</code></th>
<td class="type"><a href="model.html#.RecordMetadata">model.RecordMetadata</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional record metadata for <code class="prettyprint">pRecord</code>. Pass this in if it is already available from a previous call to <a href="model.html#getRecordMetadata">model#getRecordMetadata</a> otherwise it will be retrieved from the given record.</td>
</tr>
</tbody>
</table>

##### Returns:

true if disabled and false otherwise.

Type
boolean

#### isIdentityField(pFieldName) → {boolean}

Return true if the given field name is an identity field and false otherwise.

##### Parameters:

| Name         | Type                                   | Description           |
|--------------|----------------------------------------|-----------------------|
| `pFieldName` | string | Name of record field. |

##### Returns:

Type
boolean

#### metadataChanged(pRecordId, pFieldNameopt, pPropertyNameopt)

Call this method if any properties of the metadata returned by [model#getRecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordMetadata) are changed external to this module. Most record or field metadata should not be changed externally. However, it may be useful and reasonable to externally change metadata that comes from the records initially such as canEdit or custom metadata properties. The result of calling this method is sending a [model#event:metaChange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:metaChange) notification.

##### Parameters:

<table class="params" aria-label="Parameters for metadataChanged">
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
<th class="name" scope="row"><code>pRecordId</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Value of the record's identity field or array of values of the record's identity fields or value returned by <a href="model.html#getRecordId">model#getRecordId</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFieldName</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Name of record field that has a metadata change if any.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pPropertyName</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Name of the metadata property that has changed. If multiple properties changed this can be a comma separated list.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:metaChange](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:metaChange)

#### modelId() → {[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)}

Return the model id for this model.

##### Returns:

Type
[model.ModelId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.ModelId)

#### moveRecords(pRecords, pParentRecordopt, pAfterRecordopt) → {Array.\<string\>}

Moves the given records to a new position in the collection (table or parentRecord's children) or, for tree shape only, to a new parent node.

For tree shape models if there is a `parentIdentityField` the moved records will have the parent identity field set to the identity of the new parent record.

##### Parameters:

<table class="params" aria-label="Parameters for moveRecords">
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
<td class="description last">Array of records to move.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pParentRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only used when the shape is tree. This is the parent node to insert the moved records into. If null then insert to root.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAfterRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The moved records are added after this record or if null at the beginning.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:move](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:move)

##### Returns:

Array of record identities of moved records.

Type
Array.\<string\>

#### parent(pNode) → {[model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node)}

Return the parent node of the given node. Only supported for tree shape models that have an `identityField` option defined.

This method must only be used on tree shape models.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNode` | [model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node) | The node to get the parent of. |

##### Returns:

Parent node or null for the root node and undefined otherwise

Type
[model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node)

#### recordAt(index) → {[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)}

Return the record at the given index within the model collection. Only applies to table shape models.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `index` | number | The index of the record to return. |

##### Returns:

The record or null if there is no record at the given index.

Type
[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)

##### Example

This example returns the fifth record in the collection assuming it exists.

```
var record = model.recordAt(5);
```

#### revertRecords(pRecords) → {number}

Revert one or more records to the way they were when first added to the model or last saved. This undoes any changes made to the records. See also [model#canRevertRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#canRevertRecord).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecords` | Array.\<[model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record)\> | The records to revert. |

##### Fires:

- [model#event:revert](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:revert)

##### Returns:

The number of records reverted. This can be less than the number of records in `pRecords` if some of the records had no changes to revert.

Type
number

##### Example

This example checks if a record can be reverted before reverting it.

```
if ( myModel.canRevertRecord( record ) ) {
    myModel.revertRecords( [record] );
}
```

#### root() → {[model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node)}

Return the root node of the tree. An error is thrown if the model shape is not tree.

##### Returns:

Root node or null if there is no root.

Type
[model.Node](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Node)

##### Example

This example gets the tree shape model root node.

```
var rootNode = model.root();
```

#### save(pCallbackopt) → {promise}

Save all changed model data to the server. The current changes are copied to the save request except that volatile fields are not included (they are omitted/deleted i.e. not null or undefined) and the metadata has the `op` property added with value "d" if the record was deleted, "i" if the record was inserted, and "u" if the record was updated. If the record has no metadata field defined then one is added. For array records it is the last element, for object records it is property `_meta`.

It is possible to continue making changes to the model while a save is in progress. Can use either the callback argument or the returned promise to determine when the request is complete.

See also [apex.model.save](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.save).

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
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A function to call when the save request is complete. callback( error, responseData ); The callback is passed an Error argument or array of server errors only if there is an error. Otherwise, error is null.</td>
</tr>
</tbody>
</table>

##### Returns:

A promise if the save is initiated and null otherwise (there is already a save in progress or there is nothing to save). If and only if a promise is returned, pCallback will be called. The promise receives no arguments when resolved and an Error argument when rejected.

Type
promise

#### setData(pData, pOffsetopt, pTotalopt, pMoreDataopt)

Give the model data. This is used in cases where the model doesn't get data from the server or at least not using the built-in mechanisms or when the model is created without any initial data.

##### Parameters:

<table class="params" aria-label="Parameters for setData">
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
<th class="name" scope="row"><code>pData</code></th>
<td class="type">array</td>
<td class="attributes"></td>
<td class="description last">Model data to set.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOffset</code></th>
<td class="type">number</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Offset at which to add the data. Defaults to 0. If adding the root of a tree shape model set this to null;</td>
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
<td class="description last">If true there is more data available on the server for this model. If false <code class="prettyprint">pData</code> contains all the data. If omitted or null determine if there is more data based on <code class="prettyprint">pData</code> and <code class="prettyprint">pTotal</code>. If <code class="prettyprint">pTotal</code> is not given assume there is more data on server. Only applies for table shape models and only if <code class="prettyprint">paginationType</code> is not "none".</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:refresh](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:refresh)
- [model#event:addData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:addData)

#### setDisabledState(pRecordId, pDisabled)

Set the `disabled` property of the [model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata) for the record given by pRecordId. This sets the `disabled` property, and calls the [model#metadataChanged](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#metadataChanged) method if the value changed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecordId` | string \| Array.\<string\> | The record id to set the disabled state on. |
| `pDisabled` | boolean \| null | The new disabled state to set. |

#### setHiddenState(pRecordId, pHidden)

Set the `hidden` property of the [model#getRecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordMetadata) for the record given by pRecordId. This is a convenience method that looks up the record metadata, sets the hidden property, and calls the [model#metadataChanged](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#metadataChanged) method if the value changed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecordId` | string \| Array.\<string\> | The record id to set the hidden state on. |
| `pHidden` | boolean \| null | The new hidden state to set. |

#### setOption(pName, pValue)

Set the value of the given model option. The model options are provided in the call to [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create). See also [model#getOption](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getOption).

The options that can be set are:

- genIdPrefix
- pageItemsToSubmit
- fetchData
- saveData
- regionData
- parentRecordId
- editable
- trackChanges
- onlyMarkForDelete
- pageSize
- requestOptions
- callServer
- visibilityFilter
- visibilityFilterContext
- delayClearData

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pName` | string | Name of option to set. Not all options can be set. |
| `pValue` | \* | Value to set the option to. |

#### setRecordValue(pRecordId, pFieldName, pValue)

Set the value of a record field given the record id. This is only useful when the model shape is table or tree. If there are many field values to get or set use [model#getRecord](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecord) followed by [model#getValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getValue) or [model#setValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setValue). See also [model#getRecordValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordValue).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pRecordId` | string \| Array.\<string\> | Value of the record's identity field or array of values of the record's identity fields or value returned by [model#getRecordId](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordId). |
| `pFieldName` | string | Name of record field to set. |
| `pValue` | \* | Value to set. |

##### Example

This example sets the NAME field of the record with identity "00013".

```
model.setRecordValue( "00013", "NAME", newName );
```

#### setSelectionState(pRecordId, pSelected, pActionopt)

Select or unselect the given record. Should only be used with table shape models.

This method should only be used by view widgets to persist the view selection state in metadata property `sel`. Note there is no notification about this metadata change. Listen to the view for selection change events. Also use the view to change the selection.

##### Parameters:

<table class="params" aria-label="Parameters for setSelectionState">
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
<th class="name" scope="row"><code>pRecordId</code></th>
<td class="type">string | Array.&lt;string&gt;</td>
<td class="attributes"></td>
<td class="description last">The record id to set the selection state metadata.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pSelected</code></th>
<td class="type">boolean</td>
<td class="attributes"></td>
<td class="description last">The desired record selection state; true to select and false to unselect.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAction</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Selection action. One of: "all", "set", "range", "anchor", or "toggle". Default is "set". For "all" and "anchor", pSelected is not used. For "all" pRecordId is not used.</td>
</tr>
</tbody>
</table>

#### setValidity(pValidity, pRecordId, pFieldNameopt, pMessageopt)

Sets the validity and associated validation message of a record or record field.

##### Parameters:

<table class="params" aria-label="Parameters for setValidity">
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
<th class="name" scope="row"><code>pValidity</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">one of "error", "warning", "valid".</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecordId</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Value of the record's identity field or array of values of the record's identity fields or value returned by <a href="model.html#getRecordId">model#getRecordId</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFieldName</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Name of field that the validity state applies to or null if it applies to the whole record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pMessage</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Error or warning message text or omit if valid</td>
</tr>
</tbody>
</table>

##### Example

This examples calls a function, `checkRecord`, that returns an error message if the record is not valid and null if it is valid. It then sets the validity of the record.

```
var invalidReasonMessage = checkRecord( recordId );
if ( invalidReasonMessage ) {
    model.setValidity( "error", recordId, null, invalidReasonMessage );
} else {
    this.model.setValidity( "valid", recordId );
}
```

#### setValue(pRecordopt, pFieldName, pValue) → {string\|null}

Set the value of a record field given the record itself or omit the record when the model shape is record. See also [model#getValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getValue).

An error is thrown if the record does not allow editing or the field does not allow being set.

##### Parameters:

<table class="params" aria-label="Parameters for setValue">
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
<th class="name" scope="row"><code>pRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The record that will have a field set to the given value. Omit if model shape is record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFieldName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Name of record field to set.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">*</td>
<td class="attributes"></td>
<td class="description last">The value to set. Note: Although the model is flexible in the data types it can store in a field the APEX server expects strings. In most cases you should convert the value to a string. See the <a href="model.html">model</a> interface description for details including the convention for storing display value pairs.</td>
</tr>
</tbody>
</table>

##### Fires:

- [model#event:set](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#event:set)

##### Returns:

One of:

- "SET": The value was set.
- "DUP": The value was not set because of duplicate identity. This can only happen when setting an identity field. Note: Even if the new value is unique on the client it may still result in an error when saving because the client in general does not have all the data that the server does.
- "NC": The value was not set because the new value is equal to the old value.
- null: The record is not in the model.

Type
string \| null

##### Examples

This example sets the NAME field of the given record.

```
model.setValue( someRecord, "NAME", newName );
```

This example sets the SALARY field of the given record. Note that the number `sal` is converted to a string.

```
model.setValue( someRecord, "SALARY", "" + sal );
```

This example sets the identity field PART_NO of the given record. Variable `newPartNo` is a string. It checks for a duplicate value and gives a message if the new part number is already taken.

```
var result = model.setValue( someRecord, "PART_NO", newPartNo );
if ( result === "DUP" ) {
    apex.message.alert( "The part number " + newPartNo + " is already taken." );
}
```

This example sets the NAME field of a record shape model.

```
model.setValue( "NAME", newName );
```

#### subscribe(pObserver) → {string}

Subscribe to model change notifications by adding an observer.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pObserver` | [model.Observer](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Observer) | An observer object that includes a callback function to receive notifications. |

##### Returns:

A viewId to use with [model#unSubscribe](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#unSubscribe). This is the same as the `viewId` property if there is one. One is generated if not given in `pObserver`

Type
string

##### Examples

This simple example subscribes to a model to handle notifications.

```
var viewId = model.subscribe( {
    onChange: function( changeType, change ) {
        // respond to model changes
    }
} );
```

This example is typical of what a widget that displays model data would do to subscribe.

```
var viewId = model.subscribe( {
    viewId: this.element[0].id
    onChange: function(changeType, change) {
        // respond to model changes
    },
    progressView: this.element
} );
```

#### transform(pOptions, pContextopt) → {Object}

Transform a copy of the table shape model data into another data structure according to the provided template rules. The transformed output data structure is returned.

##### Parameters:

<table class="params" aria-label="Parameters for transform">
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
<td class="type">Object</td>
<td class="attributes"></td>
<td class="description last">An object with properties that define how the model data is to be transformed. All properties are optional except for template.
<h6 id="properties-25">Properties</h6>
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
<th class="name" scope="row"><code>template</code></th>
<td class="type">Array.&lt;Object&gt;</td>
<td class="description last">An array of rule objects each one describing where and how to create an array in the output data. Each rule object can have these properties:
<h6 id="properties-26">Properties</h6>
<table class="params" aria-label="Parameters for template">
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
<th class="name" scope="row"><code>path</code></th>
<td class="type">string</td>
<td class="description last">A "/" separated list of property names or indexed fields. The path specifies where in the output object structure to create an (or use existing) array to add items to. For example a path of "a/b" will result in output:
<pre class="prettyprint"><code> {
     a: {
         b: [&lt;items go here&gt;]
     }
 }
 </code></pre>
<p>An indexed field is the name of a record field wrapped in square brackets. This creates an array for each unique value of the field. For example a path of "a/[ENABLED]/b" where the field ENABLED can have values of "yes" and "no" results in output:</p>
<pre class="prettyprint"><code> {
     a: [
         {
             b: [&lt;items for records with enabled = yes go here&gt;]
         },
         {
             b: [&lt;items for records with enabled = no go here&gt;]
         }
     ]
 }
 </code></pre></td>
</tr>
<tr>
<th class="name" scope="row"><code>filter</code></th>
<td class="type">function</td>
<td class="description last">Filter function( model, record, index, id) return true to include and return false to skip the given record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>uniqueIndexField</code></th>
<td class="type">string</td>
<td class="description last">The name of a record field. If given an item will be added to the array only for the first record with a unique value of this field.</td>
</tr>
<tr>
<th class="name" scope="row"><code>item</code></th>
<td class="type">Object | Array | string | function</td>
<td class="description last">An object, string, array or function that serves as a template for the elements/items of the output array the resulting value depends on the type:
<ul>
<li>string: A string is the name of a record field and the resulting value is the value of that field or if it begins and ends with a single quote then the value is the text inside the single quotes or if it begins with ( and ends with ) the string inside the parens is the name of a record field and the resulting value is the raw value of that field not the display value or <code class="prettyprint">showNullAs</code> value.</li>
<li>function: The resulting value is the return value of the function f(pContext, self, record, index, id)</li>
<li>object: the resulting value is a new object where the properties of the new object are the same as the properties of this template object and the value of the properties support the same options as item.</li>
<li>array: The resulting value is a new array where the value items in the new array come from the template items in this array. The template items support the same options as item.</li>
</ul></td>
</tr>
<tr>
<th class="name" scope="row"><code>sort</code></th>
<td class="type">string</td>
<td class="description last">A function suitable as the argument to <code class="prettyprint">Array.prototype.sort</code> that will sort the output array after all records are processed.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>filter</code></th>
<td class="type">function</td>
<td class="description last">Filter function( model, record, index, id) return true to include and return false to skip the given record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>showNullAs</code></th>
<td class="type">string</td>
<td class="description last">A string to substitute for null field values.</td>
</tr>
<tr>
<th class="name" scope="row"><code>includeAggregates</code></th>
<td class="type">boolean</td>
<td class="description last">If true aggregate records are included otherwise they are skipped this is done before the <code class="prettyprint">filter</code> function is called.</td>
</tr>
<tr>
<th class="name" scope="row"><code>offset</code></th>
<td class="type">number</td>
<td class="description last">Offset index of first record to process defaults to 0.</td>
</tr>
<tr>
<th class="name" scope="row"><code>count</code></th>
<td class="type">number</td>
<td class="description last">Count of records starting at <code class="prettyprint">offset</code> to process. Defaults to all the data currently in the model.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>pContext</code></th>
<td class="type">Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">This is the output object to return with data arrays filled in based on the template rules. If pContext is not given an empty object is used as a starting point. All functions are called in the context of this object. Note: if the template rule(s) don't have a path then pContext can be an array.</td>
</tr>
</tbody>
</table>

##### Returns:

The output data structure. Same object as `pContext` if it was given.

Type
Object

##### Example

The following example generates groups and series data for a jet Bar chart from a model created from:
select job, deptno, avg(sal) as avg_sal from emp group by job, deptno

```
var data = mymodel.transform( {
             template: [ {
                     path: "groups",
                     uniqueIndexField: "DEPTNO",
                     item: { name: "DEPTNO" }
                 }, {
                     path: "series",
                     uniqueIndexField: "JOB",
                     item: { name: "JOB" }
                 }, {
                     path: "series/[JOB]/items",
                     item: { label: "'AVG_SAL'",
                             value: "AVG_SAL",
                             name: "DEPTNO"
                         }
                 } ]
             });
```

#### unSubscribe(pViewId)

Unsubscribe to model change notifications.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pViewId` | string | The view id returned from [model#subscribe](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#subscribe). |

##### Example

This example unsubscribes from this model using the `viewId` returned when subscribing.

```
model.unSubscribe(viewId);
```

#### updateVisibility(pVisibilityContextopt)

Update the visibility of all records currently in the model by calling the `visibilityFilter` function and setting the record `hidden` metadata property for each record. Useful for client side filtering of views of table or tree shaped models. This method does nothing if the `visibilityFilter` or `visibilityFilterContext` options are not set.

Client side filtering works best for reasonable sized reports and when the model has all the data to filter on. Not all view layer components will make use of the hidden property. For those that do it may only work if the view has rendered all the data.

See also [model#setHiddenState](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#setHiddenState) and the `visibilityFilter` and `visibilityFilterContext` options of [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create).

##### Parameters:

<table class="params" aria-label="Parameters for updateVisibility">
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
<th class="name" scope="row"><code>pVisibilityContext</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If present, the <code class="prettyprint">visibilityFilterContext</code> option is set to this value. If omitted the current <code class="prettyprint">visibilityFilterContext</code> is used.</td>
</tr>
</tbody>
</table>

##### Example

The following example filters a Cards region with HTML DOM id "people" using Text Field item P1_FILTER as the user types with a 200ms delay.

```
var filterItem = apex.item("P1_FILTER"),
    lastFilterString = null,
    filterContext = {
        matchString: ""
    };

function myFilter( model, record, context ) {
    var match = false;
    // match record against context.matchString and return true if there is a match
    return match;
};

function checkFilter() {
    var value = filterItem.getValue();

    if ( value !== lastFilterString ) {
        // only filter if the value has changed and don't do it too often
        debounceFilterCards( value );
        lastFilterString = value;
    }
};

function filterCards( filterString ) {
    var model = apex.region( "people" ).call( "getModel" );
    filterContext.matchString = filterString.toUpperCase(); // toUpperCase typical for case independent compare
    model.updateVisibility( filterContext );
};
var debounceFilterCards = apex.util.debounce( filterCards, 200 );

// these options could instead be set in region Initialization JavaScript Function
var model = apex.region( "people" ).call( "getModel" );
    model.setOption( "visibilityFilter", myFilter );
    model.setOption( "visibilityFilterContext", filterContext );

filterItem.element.on( "input", function() {
    checkFilter();
} );
checkFilter();
```

#### walkTree(pNode, pVisitor, pParentNodeopt)

Traverse the tree shape model. This is a depth first search of the tree. Methods of the `pVisitor` object are called as follows:

- First the visitor `node` method is called for the `pNode` passed to `walkTree`. This allows pre-order search.
- If the node has children the next 3 steps are done.
- The visitor `beginChildren` method is called.
- For each child node `walkTree` is called performing these steps recursively. This node becomes `pParentNode` and the child node becomes `pNode`.
- The visitor `endChildren` method is called.
- Last the visitor `postNode` method is called for the `pNode` passed to `walkTree`. This allows post-order search.

##### Parameters:

<table class="params" aria-label="Parameters for walkTree">
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
<th class="name" scope="row"><code>pNode</code></th>
<td class="type"><a href="model.html#.Node">model.Node</a></td>
<td class="attributes"></td>
<td class="description last">The node to start with. This node is visited and then all of its children are.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pVisitor</code></th>
<td class="type">object</td>
<td class="attributes"></td>
<td class="description last"><h6 id="properties-27">Properties</h6>
<table class="params" aria-label="Parameters for pVisitor">
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
<th class="name" scope="row"><code>node</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Function with signature function(node, parent). If the function returns true the node's children will not be visited. This is a way to exclude or prune sub branches of the tree during the traversal.</td>
</tr>
<tr>
<th class="name" scope="row"><code>beginChildren</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Function with signature function(node).</td>
</tr>
<tr>
<th class="name" scope="row"><code>endChildren</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Function with signature function(node).</td>
</tr>
<tr>
<th class="name" scope="row"><code>postNode</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Function with signature function(node, parent).</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>pParentNode</code></th>
<td class="type"><a href="model.html#.Node">model.Node</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The parent node of <code class="prettyprint">pNode</code> or null if <code class="prettyprint">pNode</code> is the root. If this argument is omitted or undefined and the model has the <code class="prettyprint">identityField</code> option defined the parent node will be determined automatically. If this argument is omitted or undefined and the model does not have the <code class="prettyprint">identityField</code> option defined then the parent parameter in the first call to the visitor <code class="prettyprint">node</code> method is null.</td>
</tr>
</tbody>
</table>

##### Examples

This example walks the tree shape model starting at the root logging information about the tree as it goes. Indentation shows the structure of the tree. The nodes in this model have a NAME field.

```
var indent = "";
model.walkTree( model.root(), {
    node: function( node, parent ) {
        console.log( indent + "Node: " + model.getValue( node, "NAME" ) );
    },
    beginChildren: function( node ) {
        indent += "    ";
    },
    endChildren: function( node ) {
        indent = indent.substring(4);
    }
}, null );
```

This example walks the tree shape model starting at the root and processes the nodes in post-order. This means that the node's children are processed before the node. Depth or level information is not needed so the `beginChildren` and `endChildren` methods are omitted.

```
model.walkTree( model.root(), {
    postNode: function( node, parent ) {
        // do something to process the node
    },
}, null );
```

### Type Definitions

#### CheckCallback(pResult, pOperation, pRecord, pAddActionopt, pRecordsToAddopt) → {boolean}

A callback function to do additional access checking. See the `check` option property of [apex.model.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.model.html#.create) and the [model#check](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#check) method.

##### Parameters:

<table class="params" aria-label="Parameters for CheckCallback">
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
<th class="name" scope="row"><code>pResult</code></th>
<td class="type">boolean</td>
<td class="attributes"></td>
<td class="description last">The result of the access checking so far.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOperation</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">One of the default checks ("canEdit", "canDelete", "canAdd", "canDrag") or a custom operation.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes"></td>
<td class="description last">The record to check if action is allowed on it.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAddAction</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only used by allowAdd see <a href="model.html#allowAdd">model#allowAdd</a> for details.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pRecordsToAdd</code></th>
<td class="type">Array.&lt;<a href="model.html#.Record">model.Record</a>&gt;</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only used by allowAdd see <a href="model.html#allowAdd">model#allowAdd</a> for details.</td>
</tr>
</tbody>
</table>

##### Returns:

true if the operation is allowed.

Type
boolean

#### FieldMeta

The field metadata describes the field and affects how the model uses the field. It may contain additional properties especially if the metadata is shared with view layers.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `index` | string | Only used when records are arrays. This is the index into the array where the field value is stored. |
| `controlBreakIndex` | number | Indicates that the field is used as a control break and provides the order in which this field is sorted for that purpose. Starting at 1. The server is responsible for sorting the data. The view layer may provide additional configuration to control sorting. The end result is that the data is sorted so that all the records with the same control break column values ordered by `controlBreakIndex` are grouped together. The server must also set the record metadata property `endControlBreak`. See [model.RecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.RecordMetadata). This field property can change after the model is initialized but doesn't take effect until after the model data is cleared with [model#clearData](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#clearData). |
| `defaultValue` | \* | This value is used when a new record is added or an existing record is duplicated and `noCopy` is true. The defaultValue has no effect for the identity, meta, children, and parent fields if defined. If there is no defaultValue empty string is used. If defaultValue is a function it is called and the return value is used as the field's value. The function is passed the model. If the new record is a copy of an existing record the source record is also passed in. |
| `dataType` | string | The data type of the field value. |
| `calcValue` | function | This is a function used to calculate the value for the field. When any of the fields listed in the `dependsOn` property change this function is called. The function signature is `calcValue( argsArray, model, record ) return *`. The values of the fields listed in `dependsOn` are passed in the `argsArray`. This function is also called when a record is received from the server and the value of this field is null or undefined. |
| `dependsOn` | array | An array of field names from this model that this field depends on. When any of the fields named in this array change then this field is either marked stale or if there is a `calcValue` function the `calcValue` function is called to recalculate the value of this field. |
| `aggregates` | array | An array of aggregate function names. The built-in aggregate function names are: "COUNT", "COUNT_DISTINCT", "SUM", "AVG", "MIN", "MAX", "MEDIAN". |
| `parentField` | string | Only applies if the model has a parentModel. When a new record is added or an existing record is duplicated and noCopy is true the value of this field is taken from the parentField of the parentModel This is useful for foreign key fields but can be any field that gets a default from the parentModel. |
| `noCopy` | boolean | If true the field value is not copied when a record is copied/duplicated. |
| `readonly` | boolean | If true the field cannot be edited. |
| `volatile` | boolean | The field is generated by the server. It cannot be edited. It is not sent back to the server. This means that for records stored as arrays the volatile fields should be at the end or the server must account for the missing volatile fields when using other field's index. Volatile fields may depend on (are calculated from) other fields and the value may be considered stale if the record is edited. It is up to the view layers to make this determination. |
| `virtual` | boolean | A virtual field has no associated data. None of the other properties apply. The main purpose for including a virtual field is so that view layers and the model can share the same field metadata. This allows view layers to have fields that don't have corresponding data in the model. |

#### IteratorCallback(pRecord, pIndex, pId, pErroropt)

This callback is used by the [model#forEach](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#forEach) and [model#forEachInPage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#forEachInPage) methods.

##### Parameters:

<table class="params" aria-label="Parameters for IteratorCallback">
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
<th class="name" scope="row"><code>pRecord</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="attributes"></td>
<td class="description last">The current record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pIndex</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The zero based index within the model collection of the current record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pId</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The identity of the current record if the model <code class="prettyprint">identityField</code> option is given. If there is no identity then this is undefined for tree models and is the <code class="prettyprint">pIndex</code> as a string for table models.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pError</code></th>
<td class="type">Error</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">If and only if there is an error fetching data during a call to <a href="model.html#forEachInPage">model#forEachInPage</a> this is the error object otherwise this is false or undefined.</td>
</tr>
</tbody>
</table>

#### ModelId

A model is uniquely identified by a string name and optional string instance id. The instance id is used to support multiple detail models in a master detail arrangement. The instance id is the identity value of the record in the master model for which the detail model pertains. The form for a model id is "name" or a tuple array \["name","instance"\]

##### Type:

- string \| array

##### Examples

A model with no instance.

```
"MyModel"
```

A detail model with instance id "000109".

```
["MyDetailModel", "000109"]
```

#### Node

A model node is a synonym for [model.Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#.Record) that is more naturally used when the model has a tree shape.

##### Type:

- array \| object

#### Observer

Information about an observer for subscribing to this model. See [model#subscribe](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#subscribe) and [model#unSubscribe](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#unSubscribe).

##### Type:

- object

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
<th class="name" scope="row"><code>viewId</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A unique key that can be used to unsubscribe. A DOM element id makes a good unique key.</td>
</tr>
<tr>
<th class="name" scope="row"><code>onChange</code></th>
<td class="type">function</td>
<td class="attributes"></td>
<td class="description last">A function to receive change notifications. The signature is <code class="prettyprint">function(changeType, change)</code><br />
<code class="prettyprint">changeType</code> is a string describing the change such as "delete"<br />
<code class="prettyprint">change</code> is an object with details about the change.<br />
See each notification for details.</td>
</tr>
<tr>
<th class="name" scope="row"><code>progressView</code></th>
<td class="type">jQuery</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">jQuery object to center a progress spinner over while performing an asynchronous network operation such as <a href="model.html#fetch">model#fetch</a> or <a href="model.html#save">model#save</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>progressOptions</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Options object for <a href="apex.util.html#.showSpinner">apex.util.showSpinner</a>.</td>
</tr>
</tbody>
</table>

#### Record

A model record is either an array or an object depending on the model option `recordIsArray`.

##### Type:

- array \| object

#### RecordFieldMetadata

Metadata related to a specific record field. You access the field metadata from the record metadata. See [model#getRecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordMetadata)

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `changed` | boolean | true if the field has changed. |
| `stale` | boolean | true if the value of this field depends on other fields and those fields have changed and this field has not been recalculated. |
| `error` | boolean | true if the field has an error. |
| `warning` | boolean | true if the field has a warning. |
| `message` | string | Only present when `error` or `warning` are true. Describes the error or warning condition. |
| `disabled` | boolean | true if the field is disabled. Disabled fields are written to the server as empty string. |
| `highlight` | string | A string that view layers can use to provide extra styling for the field. |
| `ck` | string | A checksum. If present and not null indicates the record field is readonly. |
| `url` | string | Use for cells that are links. This is the link target. The cell value is the link label. |

#### RecordMetadata

Metadata properties that the model creates and uses. See [model#getRecordMetadata](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/model.html#getRecordMetadata).

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
<th class="name" scope="row"><code>index</code></th>
<td class="type">number</td>
<td class="description last">For table shaped models only. This is the zero based index of the record in the model collection. The index is updated as records are inserted, moved, or removed. The index is suitable for use with <a href="model.html#recordAt">model#recordAt</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>recSequence</code></th>
<td class="type">number</td>
<td class="description last">For table shaped models only. This is similar to index except that it does not include aggregate records.</td>
</tr>
<tr>
<th class="name" scope="row"><code>deleted</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record has been deleted otherwise false or undefined.</td>
</tr>
<tr>
<th class="name" scope="row"><code>inserted</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record is newly created and inserted/added to the collection otherwise false or undefined.</td>
</tr>
<tr>
<th class="name" scope="row"><code>autoInserted</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record was auto inserted (these records are not saved if not also updated)</td>
</tr>
<tr>
<th class="name" scope="row"><code>updated</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record has had any fields changed.</td>
</tr>
<tr>
<th class="name" scope="row"><code>original</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">When updated is true this is the original record before any changes.</td>
</tr>
<tr>
<th class="name" scope="row"><code>record</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">Reference to the record that this metadata is about.</td>
</tr>
<tr>
<th class="name" scope="row"><code>parent</code></th>
<td class="type"><a href="model.html#.Record">model.Record</a></td>
<td class="description last">The parent record of this record. Only applies to tree shape models.</td>
</tr>
<tr>
<th class="name" scope="row"><code>error</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record as a whole has an error.</td>
</tr>
<tr>
<th class="name" scope="row"><code>warning</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record as a whole has a warning.</td>
</tr>
<tr>
<th class="name" scope="row"><code>message</code></th>
<td class="type">string</td>
<td class="description last">Only present when <code class="prettyprint">error</code> or <code class="prettyprint">warning</code> are true. Describes the error or warning condition.</td>
</tr>
<tr>
<th class="name" scope="row"><code>sel</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record is selected and false otherwise. This property should not be changed except by view layers using the <a href="model.html#setSelectionState">model#setSelectionState</a> method.</td>
</tr>
<tr>
<th class="name" scope="row"><code>highlight</code></th>
<td class="type">string</td>
<td class="description last">A string that view layers can use to provide extra styling for the record.</td>
</tr>
<tr>
<th class="name" scope="row"><code>disabled</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record is disabled. The model makes the disabled state available to the view layer. If selection state is kept in the model with <a href="model.html#setSelectionState">model#setSelectionState</a> disabled records will not be selected. Not all view layers will make use of this property. Typically, a view layer will not let disabled records be selected and may show them with different styles. Disabled state doesn't affect editing. However, a disabled record may also have <code class="prettyprint">allowedOperations</code> set to not allow editing or deleting. See <a href="model.html#isDisabled">model#isDisabled</a> and <a href="model.html#setDisabledState">model#setDisabledState</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>hidden</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record should be hidden by view layers. The model makes the hidden state available to the view layer; it does not act on the hidden state at all. Not all view layers will make use of this property. Typically, a view layer will use CSS or some other means to make hidden records invisible. See <a href="model.html#setHiddenState">model#setHiddenState</a>.</td>
</tr>
<tr>
<th class="name" scope="row"><code>allowedOperations</code></th>
<td class="type">object</td>
<td class="description last"><h6 id="properties-32">Properties</h6>
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
<th class="name" scope="row"><code>delete</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record can be deleted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>update</code></th>
<td class="type">boolean</td>
<td class="description last">true if the record can be updated.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>canEdit</code></th>
<td class="type">boolean</td>
<td class="description last">Derived from <code class="prettyprint">allowedOperations.update</code></td>
</tr>
<tr>
<th class="name" scope="row"><code>canDelete</code></th>
<td class="type">boolean</td>
<td class="description last">Derived from <code class="prettyprint">allowedOperations.delete</code></td>
</tr>
<tr>
<th class="name" scope="row"><code>endControlBreak</code></th>
<td class="type">boolean</td>
<td class="description last">Used by views to implement control break UI. The server sets this to true in the last record of each group of control break records.</td>
</tr>
<tr>
<th class="name" scope="row"><code>agg</code></th>
<td class="type">*</td>
<td class="description last">For aggregate records this is the name of the aggregate function.</td>
</tr>
<tr>
<th class="name" scope="row"><code>grandTotal</code></th>
<td class="type">boolean</td>
<td class="description last">For aggregate records this is true for the overall value (grand total) records.</td>
</tr>
<tr>
<th class="name" scope="row"><code>fields</code></th>
<td class="type">Object.&lt;string, <a href="model.html#.RecordFieldMetadata">model.RecordFieldMetadata</a>&gt;</td>
<td class="description last">An object that maps from a field name to metadata about the field.</td>
</tr>
</tbody>
</table>
