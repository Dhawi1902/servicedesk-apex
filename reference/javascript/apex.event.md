<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.event.html -->
<!-- Namespaces: apex.event -->

# Namespace: event

## QuickNav

### [Functions](#methods-section)

- [trigger](#.trigger)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).event

This namespace is used to store all event related functions of Oracle APEX.

### Functions

#### (static) trigger(pSelector, pEvent, pDataopt) → {boolean}

Function used to trigger events, return value defines if the event should be cancelled.

##### Parameters:

<table class="params" aria-label="Parameters for trigger">
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
<th class="name" scope="row"><code>pSelector</code></th>
<td class="type">jQuery</td>
<td class="attributes"></td>
<td class="description last">Selector for the element upon which the event will be triggered</td>
</tr>
<tr>
<th class="name" scope="row"><code>pEvent</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the event</td>
</tr>
<tr>
<th class="name" scope="row"><code>pData</code></th>
<td class="type">string | Array | Object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional additional parameters to pass along to the event handler</td>
</tr>
</tbody>
</table>

##### Returns:

true if the event is cancelled.

Type
boolean

##### Example

Example shows triggering an event called 'click', on an element using the jQuery selector '#myLink' (matches an element with id='myLink'), passing an array of data.

```
lCancelEvent = apex.event.trigger('#myLink', 'click', ['apples','pears']);
```
