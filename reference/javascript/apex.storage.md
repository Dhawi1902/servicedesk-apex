<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html -->
<!-- Namespaces: apex.storage -->

# Namespace: storage

## QuickNav

### [Functions](#methods-section)

- [getCookie](#.getCookie)
- [getScopedLocalStorage](#.getScopedLocalStorage)
- [getScopedSessionStorage](#.getScopedSessionStorage)
- [hasLocalStorageSupport](#.hasLocalStorageSupport)
- [hasSessionStorageSupport](#.hasSessionStorageSupport)
- [setCookie](#.setCookie)

### [Type Definitions](#typedefs-section)

- [storageWrapper](#.storageWrapper)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).storage

The [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).storage namespace contains all functions related browser storage features such as cookies and session storage.

### About local and session storage

Local storage and session storage, collectively known as web storage, are a browser feature that securely stores key value pairs associated with an origin (website). The keys and values are strings. The amount of storage space for web storage is greater than that of cookies but it is not unlimited. Another advantage over cookies is that the key value pars are not transmitted with each request.

Both local storage and session storage use the same API to set, get, and remove name value pairs. The difference is that session storage goes away when the browser session ends and local storage is available even when the browser restarts. Keep in mind that the browser is free to limit or delete data stored in local storage at the user's request. Unlike data stored on the server local storage is not shared between browsers on different machines or even different browsers on the same machine.

Because APEX supports multiple applications, multiple workspaces and even instances of the same application running in multiple workspaces there can arise conflicts with using web storage because all the apps from a single APEX instance (which is a single origin or website) share the same web storage space. The [apex.storage.getScopedLocalStorage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html#.getScopedLocalStorage) and [apex.storage.getScopedSessionStorage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html#.getScopedSessionStorage) solve this problem by partitioning the storage into a scope based on application id an optionally additional information such as page id and region id. The scope is crated by using a prefix on all the storage keys. This avoids conflicts when different apps or different instances of the same app use the same keys but it is not a secure partition. Consider this carefully before storing sensitive information in web storage.

### Functions

#### (static) getCookie(pName) → {string}

Returns the value of the specified cookie.

##### Parameters:

| Name    | Type                                   | Description             |
|---------|----------------------------------------|-------------------------|
| `pName` | string | The name of the cookie. |

##### Returns:

The string value of the cookie.

Type
string

##### Example

Returns the value of the cookie TEST

```
var value = apex.storage.getCookie( "TEST" );
```

#### (static) getScopedLocalStorage(options) → {localStorage}

Returns a thin wrapper around the `localStorage` object that scopes all keys to a prefix defined by the `options` parameter. If localStorage is not supported, the returned object can be used but has no effect, so it is not necessary to test for support using [apex.storage.hasLocalStorageSupport](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html#.hasLocalStorageSupport) before calling this function.

##### Parameters:

<table class="params" aria-label="Parameters for getScopedLocalStorage">
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
<th class="name" scope="row"><code>options</code></th>
<td class="type">Object</td>
<td class="description last">An object used to define the scope of the local storage. This defines the storage key prefix used by the <code class="prettyprint">localStorage</code> wrapper object.
<h6 id="properties">Properties</h6>
<table class="params" aria-label="Parameters for options">
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
<th class="name" scope="row"><code>prefix</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A static prefix string to add to all keys. The default is an empty string.</td>
</tr>
<tr>
<th class="name" scope="row"><code>useAppId</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Whether the application id will be included in the key. The default is true.</td>
</tr>
<tr>
<th class="name" scope="row"><code>usePageId</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Whether the application page id will be included in the key. The default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>regionId</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An additional string to identify a region or other part of a page. The default is an empty string.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Returns:

A [localStorage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html#.storageWrapper) wrapper object.

Type
localStorage

##### Example

Creates a local storage object that scopes all the keys using a prefix `"Acme"` and the application id. It then sets and gets an item called `"setting1"`.

```
var myStorage,
    setting1;
if ( apex.storage.hasLocalStorageSupport() ) {
  myStorage = apex.storage.getScopedLocalStorage({ prefix: "Acme" });
  myStorage.setItem( "setting1", "on" );
  setting1 = myStorage.getItem( "setting1" );
}
```

#### (static) getScopedSessionStorage(options) → {sessionStorage}

Returns a thin wrapper around the `sessionStorage` object that scopes all keys to a prefix defined by the `options` parameter. If sessionStorage is not supported, the returned object can be used but has no effect, so it is not necessary to test for support using [apex.storage.hasSessionStorageSupport](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html#.hasSessionStorageSupport) before calling this function.

##### Parameters:

<table class="params" aria-label="Parameters for getScopedSessionStorage">
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
<th class="name" scope="row"><code>options</code></th>
<td class="type">Object</td>
<td class="description last">An object used to define the scope of the session storage. This defines the storage key prefix used by the <code class="prettyprint">sessionStorage</code> wrapper object.
<h6 id="properties-1">Properties</h6>
<table class="params" aria-label="Parameters for options">
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
<th class="name" scope="row"><code>prefix</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A static prefix string to add to all keys. The default is an empty string.</td>
</tr>
<tr>
<th class="name" scope="row"><code>useAppId</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Whether the application id will be included in the key. The default is true.</td>
</tr>
<tr>
<th class="name" scope="row"><code>usePageId</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Whether the application page id will be included in the key. The default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>regionId</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An additional string to identify a region or other part of a page. The default is an empty string.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Returns:

A [sessionStorage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.storage.html#.storageWrapper) wrapper object.

Type
sessionStorage

##### Example

Creates a session storage object that scopes all the keys using a prefix `"Acme"` and the application id. It then sets and gets an item called `"setting1"`.

```
var myStorage,
    setting1;
if ( apex.storage.hasSessionStorageSupport() ) {
  myStorage = apex.storage.getScopedSessionStorage({ prefix: "Acme" });
  myStorage.setItem( "setting1", "on" );
  setting1 = myStorage.getItem( "setting1" );
}
```

#### (static) hasLocalStorageSupport() → {boolean}

Returns `true` if the browser supports the local storage API and `false` otherwise. Most modern browsers support this feature but some allow the user to turn it off.

##### Returns:

`true` if the browser supports the local storage API and `false` otherwise.

Type
boolean

##### Example

Sets the local storage `"setting1"` to on if local storage is supported by the browser.

```
var myStorage;
if ( apex.storage.hasLocalStorageSupport() ) {
  myStorage = apex.storage.getScopedLocalStorage({ prefix: "Acme" });
  myStorage.setItem( "setting1", "on" );
}
```

#### (static) hasSessionStorageSupport() → {boolean}

Returns `true` if the browser supports the session storage API and `false` otherwise. Most modern browsers support this feature but some allow the user to turn it off.

##### Returns:

`true` if the browser supports the session storage API and `false` otherwise.

Type
boolean

##### Example

Sets the session storage `"setting1"` to on if session storage is supported by the browser.

```
var myStorage;
if ( apex.storage.hasSessionStorageSupport() ) {
  myStorage = apex.storage.getScopedSessionStorage({ prefix: "Acme" });
  myStorage.setItem( "setting1", "on" );
}
```

#### (static) setCookie(pName, pValue)

Sets a cookie to the specified value.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pName` | string | The name of the cookie. |
| `pValue` | String | The value to set the cookie to. |

##### Example

Sets the value APEX for the cookie TEST

```
apex.storage.setCookie( "TEST", "APEX" );
```

### Type Definitions

#### storageWrapper

A storage wrapper object. This object has the same properties and functions as the native browser Storage interface.

##### Properties:

| Name | Type | Description |
|----|----|----|
| `prefix` | string | APEX specific property. The prefix for this scoped storage object. |
| `length` | number | The number of items in the scoped storage object. |
| `key` | function | The `key( n )` function returns the nth key in the scoped storage object. |
| `getItem` | function | The `getItem( key )` function returns the value for the given key. |
| `setItem` | function | The `setItem( key, data )` function sets the value of the given key to data. |
| `removeItem` | function | The `removeItem( key )` function removes the given key. |
| `clear` | function | The `clear` function removes all keys from the scoped storage object. |
| `sync` | function | The APEX specific `sync` function. Use to ensure the length property is correct if keys may have been added or removed by means external to this object. |
