<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html -->
<!-- Namespaces: apex.actions -->

# Namespace: actions

## QuickNav

### [Functions](#methods-section)

- [createContext](#.createContext)
- [findContext](#.findContext)
- [findContextById](#.findContextById)
- [getContextTypes](#.getContextTypes)
- [getContextsForType](#.getContextsForType)
- [getKeyCaps](#.getKeyCaps)
- [removeContext](#.removeContext)
- [setKeyCaps](#.setKeyCaps)
- [shortcutSupport](#.shortcutSupport)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).actions

The apex.actions namespace contains global functions related to the Oracle APEX actions facility. The methods and properties of the global actions context are also available in the apex.actions namespace but are documented with the [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) interface.

Since:
- 5.1

### Functions

#### (static) createContext(pTypeName, pContext) → {[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)}

Create a new [actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html) interface object that is scoped to the given DOM element context. Any action buttons or other UI elements must be within the given pContext. Focus must be within pContext for keyboard shortcuts defined in this context to be recognized. A global context at `document.body` is created automatically and is accessed from apex.actions. The global context type name is "global".

Plug-ins that define actions should use [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext) and add actions to the created context after calling [apex.region.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html#.create).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTypeName` | string | Type name of the actions context. |
| `pContext` | Element | DOM element context that actions are scoped within. |

##### Returns:

The actions interface object that was created.

Type
[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

##### Example

This example creates a context within the element with id `myLogger` with type name "logger". Actions can then be added to the actions interface `log1`.

```
var log1 = apex.actions.createContext( "logger", $("#myLogger")[0] );
```

#### (static) findContext(pTypeNameopt, pContext) → {[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)}

Return the actions interface for a given context. The pTypeName is optional but if given must match the type name used when the context was created. This is not often needed because the actions object returned from createContext should be saved by any widget/component that created the context.

##### Parameters:

<table class="params" aria-label="Parameters for findContext">
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
<th class="name" scope="row"><code>pTypeName</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The type name of the actions context.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pContext</code></th>
<td class="type">Element</td>
<td class="attributes"></td>
<td class="description last">DOM element context that actions are scoped within.</td>
</tr>
</tbody>
</table>

##### Returns:

The actions interface or undefined if there is no actions defined for pContext.

Type
[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

##### Examples

This example returns the context for the element with id `myLogger` and with type name "logger".

```
var log1 = apex.actions.findContext( "logger", $("#myLogger")[0] );
```

This example is the same as the previous one except it does not provide the type name.

```
var log1 = apex.actions.findContext( $("#myLogger")[0] );
```

#### (static) findContextById(pContextId) → {[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)}

Return the actions interface for a context given by the element id of the context or the [apex.region](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.region.html) that contains the context.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pContextId` | string | Element id of the context element or the id of the APEX region that contains the context element as its widget element. If this parameter is "global" the global context is returned. |

##### Returns:

The actions interface or undefined if there is no actions defined for pContextId.

Type
[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)

##### Example

This example returns the context for an Interactive Grid region with HTML DOM id `contactsIG`.

```
var igActions = apex.actions.findContextById( "contactsIG" );
igActions === apex.region( "contactsIG" ).call( "getActions" ) // true;
```

#### (static) getContextTypes() → {Array.\<string\>}

Return an array of all the actions context type names.

##### Returns:

An array of context type names.

Type
Array.\<string\>

##### Example

This example will log to the console the number of actions in each of the action contexts of all types on the page.

```
var i, j, types, type, contexts;
types = apex.actions.getContextTypes();
for ( i = 0; i < types.length; i++ ) { // for each context type
    type = types[i];
    contexts = apex.actions.getContextsForType( type );
    for ( j = 0; j < contexts.length; j++ ) { // for each context instance
        console.log("Action context type: " + type + " [" + j + "]. Actions: " + contexts[j].list().length );
    }
}
```

#### (static) getContextsForType(pTypeName) → {Array.\<[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)\>}

Return an array of all the actions context instances for a given type.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTypeName` | string | The type name of the actions contexts to return. |

##### Returns:

An array of action instances.

Type
Array.\<[actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html)\>

##### Example

This example returns the contexts for type name "logger".

```
var loggers = apex.actions.getContextsForType( "logger" );
```

#### (static) getKeyCaps() → {Object}

Returns the current key caps. See [apex.actions.setKeyCaps](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.setKeyCaps).

##### Returns:

Type
Object

#### (static) removeContext(pTypeName, pContext)

Remove an actions context that was created with [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pTypeName` | string | Type name of the actions context to remove. |
| `pContext` | Element | DOM element context that actions are scoped within. |

##### Example

This example removes the context for the element with id `myLogger` with type name "logger".

```
apex.actions.removeContext( "logger", $("#myLogger")[0] );
```

#### (static) setKeyCaps(pKeyCaps)

Different types of keyboards for different types of operating systems or different languages can have different symbols printed on the keys. The shortcuts must be defined according to [actions.shortcutName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.shortcutName). This static method lets you set keyboard layout specific names or symbols to display for key names.

Note: This affects how shortcuts are displayed not how they are defined.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pKeyCaps` | Object \| null | An object that maps the shortcutName key name such as "Ctrl" or "A" to the desired word or character. Pass in null to clear all the key cap mappings. |

##### Example

Set some key caps for a Spanish keyboard.

```
apex.actions.setKeyCaps( {
   "/": "Minus",
   "Quote": "{",
   "Minus": "?"
} );
```

#### (static) shortcutSupport(pShortcutTypeopt) → {string\|undefined}

Get or set the type of shortcut key support. The default is "sequence".

Note: The shortcut key support setting does not affect what shortcuts can be defined for actions but only how what the user types is recognized.

##### Parameters:

<table class="params" aria-label="Parameters for shortcutSupport">
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
<th class="name" scope="row"><code>pShortcutType</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">One of "off", "single", "sequence". If not specified the current value is returned.</td>
</tr>
</tbody>
</table>

##### Returns:

When no arguments are given returns the current setting otherwise returns nothing.

Type
string \| undefined

##### Examples

Get the current setting.

```
apex.actions.shortcutSupport();
```

Turn off the ability to use shortcuts on the page for all action contexts.

```
apex.actions.shortcutSupport( "off" );
```

Disable shortcut sequences such as C,B.

```
apex.actions.shortcutSupport( "single" );
```
