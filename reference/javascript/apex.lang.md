<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html -->
<!-- Namespaces: apex.lang -->

# Namespace: lang

## QuickNav

### [Functions](#methods-section)

- [addMessages](#.addMessages)
- [clearMessages](#.clearMessages)
- [format](#.format)
- [formatMessage](#.formatMessage)
- [formatMessageNoEscape](#.formatMessageNoEscape)
- [formatNoEscape](#.formatNoEscape)
- [getMessage](#.getMessage)
- [hasMessage](#.hasMessage)
- [loadMessages](#.loadMessages)
- [loadMessagesIfNeeded](#.loadMessagesIfNeeded)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).lang

This namespace is used for text and message localization related functions of Oracle APEX.

### Functions

#### (static) addMessages(pMessages)

Add messages for use by [apex.lang.getMessage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.getMessage) and the format functions. Can be called multiple times. Additional messages are merged. It is generally not necessary to call this function, because it is automatically called with all the application text messages that have attribute *Used in JavaScript* set to on.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMessages` | Object | An object whose properties are message keys (names), and the values are localized message text. |

##### Example

This example adds a message with key "APPLY_BUTTON_LABEL" and message text "Apply".

```
apex.lang.addMessages( {
    APPLY_BUTTON_LABEL: "Apply"
} );
```

#### (static) clearMessages()

Remove all messages. This method is rarely needed. Many Oracle APEX components rely on client-side messages, so if you clear the messages you need to add any needed messages again.

##### Example

This example removes all messages.

```
apex.lang.clearMessages();
```

#### (static) format(pPattern, …pValues) → {string}

Formats a message. Same as [apex.lang.formatMessage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.formatMessage) except the message pattern is given directly. It is already localized or isn't supposed to be. It is not a key. The replacement arguments are HTML escaped.

##### Parameters:

<table class="params" aria-label="Parameters for format">
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
<th class="name" scope="row"><code>pPattern</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The message pattern.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValues</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings.</td>
</tr>
</tbody>
</table>

##### Returns:

The formatted message text.

Type
string

##### Examples

This example using positional parameters returns "Total cost: \$34.00" assuming the orderTotal variable equals "34.00".

```
apex.lang.format( "Total cost: $%0", orderTotal );
```

This example using named parameters returns "Total cost: \$34.00" assuming the orderTotal variable equals "34.00".

```
apex.lang.format( "Total cost: $%cost", {cost: orderTotal} );
```

#### (static) formatMessage(pKey, …pValues) → {string}

Format a message. Parameters in the message are replaced with the corresponding function argument. Parameters can be named parameters (for example %process %complete) or positional parameters %0 to %9

##### Parameters:

<table class="params" aria-label="Parameters for formatMessage">
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
<th class="name" scope="row"><code>pKey</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The message key. The key is used to lookup the localized message text as if with getMessage.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValues</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings.</td>
</tr>
</tbody>
</table>

##### Returns:

The localized and formatted message text. If the key is not found then the key is returned.

Type
string

##### Examples

This example using positional parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %0% complete" and the progress variable value is 60.

```
  apex.lang.formatMessage( "PROCESS_STATUS", progress );
```

This example using named parameters returns "Process 60% complete" when the PROCESS_STATUS message text is "Process %processComplete% complete" and the progress variable value is 60.

```
  apex.lang.formatMessage( "PROCESS_STATUS", { processComplete: progress } );
```

#### (static) formatMessageNoEscape(pKey, …pValues) → {string}

Same as [apex.lang.formatMessage](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.formatMessage) except the replacement arguments are not HTML escaped. They must be known to be safe or will be used in a context that is safe.

##### Parameters:

<table class="params" aria-label="Parameters for formatMessageNoEscape">
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
<th class="name" scope="row"><code>pKey</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The message key. The key is used to lookup the localized message text as if with getMessage.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValues</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">If using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings.</td>
</tr>
</tbody>
</table>

##### Returns:

The localized and formatted message text. If the key is not found then the key is returned.

Type
string

##### Examples

This example using positional parameters returns "You entered \<ok\>" when the CONFIRM message text is "You entered %0" and the inputValue variable value is "\<ok\>". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

```
apex.lang.formatMessageNoEscape( "CONFIRM", inputValue );
```

This example using named parameters returns "You entered \<ok\>" when the CONFIRM message text is "You entered %confirmMsg" and the inputValue variable value is "\<ok\>". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

```
apex.lang.formatMessageNoEscape( "CONFIRM", {confirmMsg: inputValue} );
```

#### (static) formatNoEscape(pPattern, …pValues) → {string}

Same as [apex.lang.format](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.format), except the replacement arguments are not HTML escaped. They must be known to be safe or are used in a context that is safe.

##### Parameters:

<table class="params" aria-label="Parameters for formatNoEscape">
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
<th class="name" scope="row"><code>pPattern</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The message pattern.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValues</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">if using positional parameters, any number of replacement values, one for each message parameter %0 to %9. If using named parameters, a single object with name value pairs. Non string arguments are converted to strings.</td>
</tr>
</tbody>
</table>

##### Returns:

The formatted message text.

Type
string

##### Examples

This example using positional parameters returns "You entered \<ok\>" when the inputValue variable value is "\<ok\>". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

```
apex.lang.formatNoEscape( "You entered %0", inputValue );
```

This example using named parameters returns "You entered \<ok\>" when the inputValue variable value is "\<ok\>". Note this string must be used in a context where HTML escaping is done to avoid XSS vulnerabilities.

```
apex.lang.formatNoEscape( "You entered %confirmMsg", { confirmMsg: inputValue } );
```

#### (static) getMessage(pKey) → {string}

Return the message associated with the given key. The key is looked up in the messages added with the [apex.lang.addMessages](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.addMessages), [apex.lang.loadMessages](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.loadMessages), or [apex.lang.loadMessagesIfNeeded](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.loadMessagesIfNeeded) functions.

##### Parameters:

| Name   | Type                                   | Description      |
|--------|----------------------------------------|------------------|
| `pKey` | string | The message key. |

##### Returns:

The localized message text. If the key is not found then the key is returned.

Type
string

##### Example

This example returns "OK" when the localized text for key OK_BTN_LABEL is "OK".

```
apex.lang.getMessage( "OK_BTN_LABEL" );
```

#### (static) hasMessage(pKey) → {boolean}

Return true if pKey exists in the messages added with the [apex.lang.addMessages](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.addMessages), [apex.lang.loadMessages](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.loadMessages), or [apex.lang.loadMessagesIfNeeded](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html#.loadMessagesIfNeeded) functions.

##### Parameters:

| Name   | Type                                   | Description      |
|--------|----------------------------------------|------------------|
| `pKey` | string | The message key. |

##### Returns:

true if the given message exists and false otherwise.

Type
boolean

##### Example

This example checks for the existence of a message, "EXTRA_MESSAGE", before using it.

```
if ( apex.lang.hasMessage( "EXTRA_MESSAGE" ) ) {
    text += apex.lang.getMessage( "EXTRA_MESSAGE" );
}
```

#### (static) loadMessages(pMessageKeys) → {Promise}

Load additional messages from the server.

When an APEX page loads it automatically loads any text messages that have attribute *Used in JavaScript* set to on. This function is useful when there are strings that are not always needed on the client but can be loaded on demand.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMessageKeys` | Array.\<string\> | An array of message keys (names) to load. The message keys can end in "%" to load all the messages with keys that start with the given text. |

##### Returns:

promise resolved (with no data) when messages are available, rejected (with no data) if the ajax request fails.

Type
Promise

##### Examples

This example loads two additional text messages with names "MY_MESSAGE1" and "MY_MESSAGE2". Once they have been loaded it uses `getMessage` to get the message text.

```
var promise = apex.lang.loadMessages( ["MY_MESSAGE1", "MY_MESSAGE2"] );
promise.done(function() {
    var text = apex.lang.getMessage("MY_MESSAGE1");
    // use text somehow
}.fail(function() {
    apex.debug.error( "Could not get messages." );
};
```

This example loads all the messages for a component. The component has named all its message keys with a common prefix "MY_COMPONENT\_". So the following would load messages such as "MY_COMPONENT_MESSAGE1", "MY_COMPONENT_MESSAGE2" and so on.

```
var promise = apex.lang.loadMessages( ["MY_COMPONENT_%"] );
...
```

#### (static) loadMessagesIfNeeded(pMessageKeys, pCallback)

Load additional messages from the server only if they are not already loaded.

When an APEX page loads it automatically loads any text messages that have attribute *Used in JavaScript* set to on. This function is useful when there are strings that are not always needed on the client but can be loaded on demand.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pMessageKeys` | Array.\<string\> | An array of message keys (names) that are needed by pCallback. These messages will be loaded if needed. |
| `pCallback` |  | A no argument function that is called when all the keys have been loaded. If all the messages have already been loaded then this function is called right away. |

##### Example

This example code could be put in a Dynamic Action Execute JavaScript Code action that runs when a "More Details" button is pressed. It loads the "DETAILED_HELP_INFO" message and displays it in an alert.

```
apex.lang.loadMessage( ["DETAILED_HELP_INFO"], function() {
    apex.message.alert( apex.lang.getMessage( "DETAILED_HELP_INFO" );
} );
```
