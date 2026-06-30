<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html -->
<!-- Namespaces: apex.debug -->

# Namespace: debug

## QuickNav

### [Properties](#members-section)

- [LOG_LEVEL](#.LOG_LEVEL)

### [Functions](#methods-section)

- [error](#.error)
- [getLevel](#.getLevel)
- [info](#.info)
- [log](#.log)
- [message](#.message)
- [setLevel](#.setLevel)
- [trace](#.trace)
- [warn](#.warn)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).debug

This namespace stores all debug functions of Oracle APEX.

### Properties

#### (static) LOG_LEVEL :object

Log level constants

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `OFF` | number | Logging is off. Value is 0. |
| `ERROR` | number | Error logging level. Value is 1. |
| `WARN` | number | Warning logging level. Value is 2. |
| `INFO` | number | Information logging level. Value is 4. |
| `APP_TRACE` | number | Application tracing logging level. Value is 6. |
| `ENGINE_TRACE` | number | Engine tracing logging level. Value is 9. |

### Functions

#### (static) error(…arguments)

Log an error message. The error function always writes the error, regardless of the log level from the server or set with [apex.debug.setLevel](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html#.setLevel). Messages are written using the browsers built-in console logging, if available. If supported, console.trace is called. Older browsers may not support the console object or all of its features.

##### Parameters:

<table class="params" aria-label="Parameters for error">
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
<th class="name" scope="row"><code>arguments</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Any number of parameters which will be logged to the console.</td>
</tr>
</tbody>
</table>

##### Examples

This example writes the message "Update Failed" to the console.

```
apex.debug.error( "Update Failed" );
```

This example writes an exception message (from variable `ex`) to the console.

```
apex.debug.error( "Exception: ", ex );
```

#### (static) getLevel() → {number}

Method that returns the debug log level. The debug log level is synchronized with hidden input element `#pdebug`. In a developer session, the default log level is WARN.

##### Returns:

Logging level as an integer 1 to 9, or 0 to indicate debug logging is turned off.

Type
number

##### Example

This example retrieves the logging level, prepends "Level=" and logs to the console.

```
apex.debug.log( "Level=", apex.debug.getLevel() );
```

#### (static) info(…arguments)

Log an informational message. Similar to [apex.debug.message](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html#.message) with the level set to INFO.

##### Parameters:

<table class="params" aria-label="Parameters for info">
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
<th class="name" scope="row"><code>arguments</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Any number of parameters which will be logged to the console.</td>
</tr>
</tbody>
</table>

##### Example

This example prints an informational message to the console if the log level is INFO or greater.

```
apex.debug.info( "Command successful" );
```

#### (static) log(…arguments)

Log a message. Similar to [apex.debug.message](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html#.message) with the level set to the highest level.

##### Parameters:

<table class="params" aria-label="Parameters for log">
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
<th class="name" scope="row"><code>arguments</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Any number of parameters which will be logged to the console.</td>
</tr>
</tbody>
</table>

##### Example

This example gets the logging level and writes it to the console, regardless of the current logging level.

```
apex.debug.log( "Level=", apex.debug.getLevel() );
```

#### (static) message(pLevel, …arguments)

Log a message at the given debug log level. The log level set from the server or with [apex.debug.setLevel](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html#.setLevel) controls if the message is actually written. If the set log level is \>= pLevel then the message is written. Messages are written using the browsers built-in console logging, if available. Older browsers may not support the console object or all of its features.

##### Parameters:

<table class="params" aria-label="Parameters for message">
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
<th class="name" scope="row"><code>pLevel</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">A number from 1 to 9, where level 1 is most important, and level 9 is least important. Can be one of the <a href="apex.debug.html#.LOG_LEVEL">apex.debug.LOG_LEVEL</a> constants. Any other value such as 0 will turn off debug logging.</td>
</tr>
<tr>
<th class="name" scope="row"><code>arguments</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Any number of parameters which will be logged to the console.</td>
</tr>
</tbody>
</table>

##### Example

This example writes the message "Testing" to the console if the logging level is greater than or equal to 7.

```
apex.debug.message( 7, "Testing" );
```

#### (static) setLevel(pLevel)

Method that sets the debug log level. Log messages at or below the specified level are written to the console log. It is rarely necessary to call this function because the debug log level is synchronized with the hidden input element `#pdebug` that comes from the server.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pLevel` | number | A number from 1 to 9, where level 1 is most important, and level 9 is least important. Can be one of the LOG_LEVEL constants. Any other value such as 0 will turn off debug logging. |

##### Example

This example sets the logging level to application tracing.

```
apex.debug.setLevel( apex.debug.LOG_LEVEL.APP_TRACE );
```

#### (static) trace(…arguments)

Log a trace message. Similar to [apex.debug.message](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html#.message) with the level set to APP_TRACE.

##### Parameters:

<table class="params" aria-label="Parameters for trace">
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
<th class="name" scope="row"><code>arguments</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Any number of parameters which will be logged to the console.</td>
</tr>
</tbody>
</table>

##### Example

This example writes a log message to the console if the debug log level is APP_TRACE or greater.

```
apex.debug.trace( "Got click event: ", event );
```

#### (static) warn(…arguments)

Log a warning message. Similar to [apex.debug.message](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.debug.html#.message) with the level set to WARN.

##### Parameters:

<table class="params" aria-label="Parameters for warn">
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
<th class="name" scope="row"><code>arguments</code></th>
<td class="type">*</td>
<td class="attributes">&lt;repeatable&gt;<br />
</td>
<td class="description last">Any number of parameters which will be logged to the console.</td>
</tr>
</tbody>
</table>

##### Example

This example writes a warning message to the console if the debug log level is WARN or greater.

```
apex.debug.warn( "Empty string ignored" );
```
