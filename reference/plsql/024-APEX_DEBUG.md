<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 24 APEX_DEBUG

The `APEX_DEBUG` package provides utility functions for managing the debug message log. Specifically, this package provides the necessary APIs to instrument and debug PL/SQL code contained within your Oracle APEX application as well as PL/SQL code in database stored procedures and functions. Instrumenting your PL/SQL code makes it much easier to track down bugs and isolate unexpected behavior more quickly.

The package also provides the means to enable and disable debugging at different debug levels and utility procedures to clean up the message log.

You can view the message log either as described in the Accessing Debugging Mode section of the Oracle APEX App Builder User’s Guide or by querying the `APEX_DEBUG_MESSAGES` view.

For further information, see the individual API descriptions.

Note:

In APEX release 4.2, the APEX_DEBUG_MESSAGE package was renamed to APEX_DEBUG. The APEX_DEBUG_MESSAGE package name is still supported to provide backward compatibility. As a best practice, however, use the new APEX_DEBUG package for new applications unless you plan to run them in an earlier version of APEX.

- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-Constants.html#GUID-412ED5E2-1739-4A9B-B214-38674B4A4BCD)
- [DISABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE-Procedure.html#GUID-761FDBC4-3140-430B-AA83-C24D219E769B)
- [DISABLE_DBMS_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_DBMS_OUTPUT-Procedure.html#GUID-72DEBC3D-FBE7-4762-9BCD-F33AA90671C7)
- [ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-ENABLE-Procedure.html#GUID-EFBF6BEB-2BE4-4AC2-9C89-B4CD4867394A)
- [ENTER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html#GUID-56D49575-92E8-4BD9-8469-30E3F66D7682)
- [ENABLE_DBMS_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_DBMS_OUTPUT-Procedure.html#GUID-C783CD13-4429-45D9-8A2E-4C0460C21E5C)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [GET_LAST_MESSAGE_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_MESSAGE_ID-Function.html#GUID-BFCF1EC8-6260-460B-8D78-9B714139CCF7)
- [GET_PAGE_VIEW_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PAGE_VIEW_ID-Function.html#GUID-1A21EA73-0444-4E8A-9B32-932475796F7F)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)
- [LOG_DBMS_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_DBMS_OUTPUT-Procedure.html#GUID-6C44E073-F2C0-44AA-A94B-BAA659A2AE10)
- [LOG_LONG_MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_LONG_MESSAGE-Procedure.html#GUID-92348F3F-9021-49B3-9203-7100EED6B904)
- [LOG_MESSAGE Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_MESSAGE-Procedure-Deprecated.html#GUID-2CFA0096-9CA5-496E-9D35-DD71896D8C14)
- [LOG_PAGE_SESSION_STATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOG_PAGE_SESSION_STATE-Procedure.html#GUID-67A62EEB-B7DE-464A-A922-38BEFDFE8353)
- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [REMOVE_DEBUG_BY_AGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_AGE-Procedure.html#GUID-EBD89F07-6D3B-4A97-8029-1F46FE8339B3)
- [REMOVE_DEBUG_BY_APP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_APP-Procedure.html#GUID-47124CAC-08A4-4B93-82EC-3E04DBBE47BD)
- [REMOVE_DEBUG_BY_VIEW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_DEBUG_BY_VIEW-Procedure.html#GUID-4E27243D-92A2-44E7-8446-3ADADF185A65)
- [REMOVE_SESSION_MESSAGES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_SESSION_MESSAGES-Procedure.html#GUID-4608E5F5-DC7D-4582-BE4C-A19FFDAB8C71)
- [TOCHAR Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TOCHAR-Function.html#GUID-58AD87A5-7C6F-4B80-9191-0ECC98CF109D)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-65F66F2B-ADCB-41B2-8EEE-3B7D7603F50C" target="_blank">Accessing Debugging Mode</a> in Oracle APEX App Builder User’s Guide

------------------------------------------------------------------------

## 24.1 Constants

The APEX_DEBUG package uses the following constants.

```
subtype t_log_level is pls_integer;
c_log_level_error constant t_log_level := 1;
    -- critical error
c_log_level_warn constant t_log_level := 2;
    -- less critical error
c_log_level_info constant t_log_level := 4;
    -- default level if debugging is enabled
    -- (for example, used by apex_application.debug)
c_log_level_app_enter constant t_log_level := 5;
    -- application: messages when procedures/functions are entered
c_log_level_app_trace constant t_log_level := 6;
    -- application: other messages within procedures/functions
c_log_level_engine_enter constant t_log_level := 8;
    -- APEX engine: messages when procedures/functions are entered
c_log_level_engine_trace constant t_log_level := 9;
    -- APEX engine: other messages within procedures/functions
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.2 DISABLE Procedure

This procedure turns off debug messaging.

Syntax

```
APEX_DEBUG.DISABLE;
```

Parameters

None.

Example

This example turns off debug messaging.

```
BEGIN
    APEX_DEBUG.DISABLE();
END;
```

See Also:

[ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-ENABLE-Procedure.html#GUID-EFBF6BEB-2BE4-4AC2-9C89-B4CD4867394A)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.3 DISABLE_DBMS_OUTPUT Procedure

This procedure stops writing all debug logs with `dbms_output`.

Syntax

```
DISABLE_DBMS_OUTPUT;
```

Parameters

None.

Example

See `ENABLE_DBMS_OUTPUT`.

See Also:

- [ENABLE_DBMS_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_DBMS_OUTPUT-Procedure.html#GUID-C783CD13-4429-45D9-8A2E-4C0460C21E5C)
- [ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-ENABLE-Procedure.html#GUID-EFBF6BEB-2BE4-4AC2-9C89-B4CD4867394A)
- [DISABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE-Procedure.html#GUID-761FDBC4-3140-430B-AA83-C24D219E769B)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.4 ENABLE Procedure

This procedure turns on debug messaging. You can specify the types of debug messages that are logged by level of importance.

Note:

You only need to call `ENABLE` procedure once per page view or page accept.

Syntax

```
APEX_DEBUG.ENABLE (
    p_level    IN  t_log_level DEFAULT c_log_level_info )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_level` | Level or levels of messages to log. Must be an integer from 1 to 9, where level 1 is the most important messages and level 4 (the default) is the least important. Setting to a specific level logs messages both at that level and below that level. For example, setting `p_level` to 2 logs any message at level 1 and 2. |

Example

This examples enables logging of messages for levels `1`, `2` and `4`. Messages at higher levels are not logged.

```
BEGIN
    APEX_DEBUG.ENABLE(
        apex_debug.c_log_level_info);
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.5 ENTER Procedure

This procedure logs messages at level `c_log_level_app_enter`. Use `APEX_DEBUG.ENTER()` to log the routine name and its arguments at the beginning of a procedure or function.

Syntax

```
APEX_DEBUG.ENTER (
    p_routine_name      IN VARCHAR2,
    p_name01            IN VARCHAR2     DEFAULT NULL,
    p_value01           IN VARCHAR2     DEFAULT NULL,
    p_name02            IN VARCHAR2     DEFAULT NULL,
    p_value02           IN VARCHAR2     DEFAULT NULL,
    p_name03            IN VARCHAR2     DEFAULT NULL,
    p_value03           IN VARCHAR2     DEFAULT NULL,
    p_name04            IN VARCHAR2     DEFAULT NULL,
    p_value04           IN VARCHAR2     DEFAULT NULL,
    p_name05            IN VARCHAR2     DEFAULT NULL,
    p_value05           IN VARCHAR2     DEFAULT NULL,
    p_name06            IN VARCHAR2     DEFAULT NULL,
    p_value06           IN VARCHAR2     DEFAULT NULL,
    p_name07            IN VARCHAR2     DEFAULT NULL,
    p_value07           IN VARCHAR2     DEFAULT NULL,
    p_name08            IN VARCHAR2     DEFAULT NULL,
    p_value08           IN VARCHAR2     DEFAULT NULL,
    p_name09            IN VARCHAR2     DEFAULT NULL,
    p_value09           IN VARCHAR2     DEFAULT NULL,
    p_name10            IN VARCHAR2     DEFAULT NULL,
    p_value10           IN VARCHAR2     DEFAULT NULL,
    p_value_max_length  IN PLS_INTEGER  DEFAULT 1000 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_routine_name` | The name of the procedure or function. |
| `p_namexx`/`p_valuexx` | The procedure or function parameter name and value. |
| `p_value_max_length` | The `p_valuexx` values is truncated to this length. The tilde (`~`) character is appended to indicate that the original value exceeded this length. |

Example

This example adds a debug message at the beginning of a procedure.

```
procedure foo (
    p_widget_id in number,
    p_additional_data in varchar2,
    p_emp_rec in emp%rowtype )
is
begin
    apex_debug.enter('foo',
        'p_widget_id' , p_widget_id,
        'p_additional_data', p_additional_data,
        'p_emp_rec.id' , p_emp_rec.id );
....do something....
end foo;
```

See Also:

- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.6 ENABLE_DBMS_OUTPUT Procedure

This procedure writes all debug logs via `dbms_output`. If debug is disabled, this call also enables it with log level `c_log_level_warn`. You have to set a debug level higher than `c_log_level_warn` for finer grained debug output. The output `95` starts with a configurable prefix, followed by the log level, `"|"` and the actual debug message.

Syntax

```
ENABLE_DBMS_OUTPUT (
    p_prefix    IN VARCHAR2    DEFAULT '# APEX|' )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_prefix` | Prefix for lines that go to `dbms_output`, default `'# APEX|'`. |

Example

This SQLcl code writes the debug messages for 4, 5, 7, and 8 via `dbms_output`.

```
set serveroutput on size unlimited
begin
 apex_debug.error('1');
 apex_debug.warn('2');
 apex_debug.enable_dbms_output(p_prefix=>'Debug-');
 apex_debug.error('4');
 apex_debug.warn('5');
 apex_debug.info('6');
 apex_debug.enable(p_level=>apex_debug.c_log_level_info);
 apex_debug.info('7');
 apex_debug.enable_dbms_output;
 apex_debug.info('8');
 apex_debug.disable_dbms_output;
 apex_debug.info('9');
end;
 /
Output:
  Debug-ERR|4
  Debug-WRN|5
  Debug-INF|7
  # APEX|INF|8
```

See Also:

- [DISABLE_DBMS_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_DBMS_OUTPUT-Procedure.html#GUID-72DEBC3D-FBE7-4762-9BCD-F33AA90671C7)
- [ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-ENABLE-Procedure.html#GUID-EFBF6BEB-2BE4-4AC2-9C89-B4CD4867394A)
- [DISABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE-Procedure.html#GUID-761FDBC4-3140-430B-AA83-C24D219E769B)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.7 ERROR Procedure

This procedure logs messages at level `c_log_level_error`. This procedure always logs, even if debug mode is turned off.

Syntax

```
APEX_DEBUG.ERROR (
    p_message       IN VARCHAR2,
    p0              IN VARCHAR2     DEFAULT NULL,
    p1              IN VARCHAR2     DEFAULT NULL,
    p2              IN VARCHAR2     DEFAULT NULL,
    p3              IN VARCHAR2     DEFAULT NULL,
    p4              IN VARCHAR2     DEFAULT NULL,
    p5              IN VARCHAR2     DEFAULT NULL,
    p6              IN VARCHAR2     DEFAULT NULL,
    p7              IN VARCHAR2     DEFAULT NULL,
    p8              IN VARCHAR2     DEFAULT NULL,
    p9              IN VARCHAR2     DEFAULT NULL,
    p_max_length    IN PLS_INTEGER  DEFAULT 1000 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_message` | The debug message. Occurrences of `%` are replaced by `p0` to `p19`, as in `utl_lms.format_message` and C's sprintf. Occurrences of `%%` represent the special character `%`. Occurrences of `%<n>` are replaced by `p<n>`. |
| `p0` through `p9` | Substitution strings for `%` placeholders. |
| `p_max_length` | The `p<n>` values are truncated to this length. |

Example

This example logs a critical error in the debug log.

```
apex_debug.error('Critical error %s', sqlerrm);
```

See Also:

- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.8 GET_LAST_MESSAGE_ID Function

This function returns the identifier for the last debug message that was generated in this session. The value is null until the first debug message has been generated.

Syntax

```
APEX_DEBUG.GET_LAST_MESSAGE_ID (
  RETURN NUMBER );
```

Example

The following example prints the message identifiers before and after emitting debug output.

```
BEGIN
    sys.dbms_output.put_line('Page View ID='||apex_debug.get_last_message_id);
    apex_debug.message('Hello', p_force => true);
    sys.dbms_output.put_line('Page View ID='||apex_debug.get_last_message_id);
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.9 GET_PAGE_VIEW_ID Function

This function returns the current page view identifier, which is a unique ID for each browser request or standalone database session. The value is null until the first debug message has been generated.

Syntax

```
APEX_DEBUG.GET_PAGE_VIEW_ID (
  RETURN NUMBER );
```

Example

The following example prints the page view identifiers before and after emitting debug output.

```
BEGIN
    sys.dbms_output.put_line('Page View ID='||apex_debug.get_page_view_id);
    apex_debug.message('Hello', p_force => true);
    sys.dbms_output.put_line('Page View ID='||apex_debug.get_page_view_id);
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.10 INFO Procedure

This procedure logs messages at level `c_log_level_info`.

Syntax

```
APEX_DEBUG.INFO (
    p_message       IN VARCHAR2,
    p0              IN VARCHAR2     DEFAULT NULL,
    p1              IN VARCHAR2     DEFAULT NULL,
    p2              IN VARCHAR2     DEFAULT NULL,
    p3              IN VARCHAR2     DEFAULT NULL,
    p4              IN VARCHAR2     DEFAULT NULL,
    p5              IN VARCHAR2     DEFAULT NULL,
    p6              IN VARCHAR2     DEFAULT NULL,
    p7              IN VARCHAR2     DEFAULT NULL,
    p8              IN VARCHAR2     DEFAULT NULL,
    p9              IN VARCHAR2     DEFAULT NULL,
    p_max_length    IN PLS_INTEGER  DEFAULT 1000 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_message` | The debug message. Occurrences of `%` are replaced by `p0` to `p19`, as in `utl_lms.format_message` and C's sprintf. Occurrences of `%%` represent the special character `%`. Occurrences of `%<n>` are replaced by `p<n>`. |
| `p0` through `p9` | Substitution strings for `%` placeholders. |
| `p_max_length` | The `p<n>` values are truncated to this length. The tilde (`~`) character is appended to indicate that the original value exceeded this length. |

Example

This example logs information in the debug log.

```
apex_debug.info('Important: %s', 'fnord');
```

See Also:

- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [ENTER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html#GUID-56D49575-92E8-4BD9-8469-30E3F66D7682)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.11 LOG_DBMS_OUTPUT Procedure

This procedure writes the contents of `dbms_output.get_lines` to the debug log. Messages of legacy applications which use `dbms_output` are copied into the debug log. In order to write to the debug log, `dbms_output.enable` must be performed

Syntax

```
APEX_DEBUG.LOG_DBMS_OUTPUT;
```

Parameters

None.

Example

This example logs the contents of the `DBMS_OUTPUT` buffer in the debug log.

```
sys.dbms_output.enable;
sys.dbms_output.put_line('some data');
sys.dbms_output.put_line('other data');
apex_debug.log_dbms_output;
```

See Also:

- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.12 LOG_LONG_MESSAGE Procedure

This procedure emits debug messages from PL/SQL components of Oracle APEX, or PL/SQL procedures and functions.

This procedure is the same as LOG_MESSAGE, except it allows logging of much longer messages, which are subsequently split into 4,000 character chunks in the debugging output (because a single debug message is constrained to 4,000 characters).

Note:

As a best practice, Oracle recommends using shorter message APIs when possible (ERROR, WARN, and so on), and reserving LOG_LONG_MESSAGE for scenarios that require longer messages.

Syntax

```
APEX_DEBUG.LOG_LONG_MESSAGE (
    p_message   IN VARCHAR2     DEFAULT NULL,
    p_enabled   IN BOOLEAN      DEFAULT FALSE,
    p_level     IN t_log_level  DEFAULT c_log_level_app_trace )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_message` | Log long message with maximum size of 32,767 bytes. |
| `p_enabled` | Set to `TRUE` to always log messages, irrespective of whether debugging is enabled. Set to `FALSE` to only log messages if debugging is enabled. |
| p_level | Identifies the level of the long log message. See [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-Constants.html#GUID-412ED5E2-1739-4A9B-B214-38674B4A4BCD). |

Example

This example enables debug message logging for level `1` and `2` messages and display a level `1` message that could contain anything up to 32,767 characters. Note the `p_enabled` parameter need not be specified, as debugging has been explicitly enabled and the default of `FALSE` for this parameter respects this enabling.

```
DECLARE
    l_msg VARCHAR2(32767) := 'Debug outputs anything up to varchar2 limit';
BEGIN
    APEX_DEBUG.ENABLE (p_level => 2);

    APEX_DEBUG.LOG_LONG_MESSAGE(
        p_message => l_msg,
        p_level => 1 );
END;
```

See Also:

- [ENTER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html#GUID-56D49575-92E8-4BD9-8469-30E3F66D7682)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)
- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.13 LOG_MESSAGE Procedure (Deprecated)

This procedure logs a debug message.

Note:

This API is deprecated and will be removed in a future release.

Instead of this procedure, use the following:

- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)
- [ENTER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html#GUID-56D49575-92E8-4BD9-8469-30E3F66D7682)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)

Syntax

```
APEX_DEBUG.LOG_MESSAGE (
    p_message   IN  VARCHAR2    DEFAULT NULL,
    p_enabled   IN  BOOLEAN     DEFAULT FALSE,
    p_level     IN  t_log_level DEFAULT c_log_level_app_trace )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_message` | The debug message with a maximum length of 1,000 bytes. |
| `p_enabled` | Messages are logged when logging is enabled. `TRUE` enables logging. |
| `p_level` | Identifies the level of the log message where `1` is most important and `9` is least important. This is an integer value. |

Example

This example enables debug message logging for level `1` and `2` messages and display a level `1` message showing a variable value. Note the `p_enabled` parameter need not be specified, as debugging has been explicitly enabled and the default of `FALSE` for this parameter respects this enabling.

```
DECLARE
    l_value varchar2(100) := 'test value';
BEGIN
    APEX_DEBUG.ENABLE (p_level => 2);

APEX_DEBUG.LOG_MESSAGE(
    p_message => 'l_value = ' || l_value,
    p_level => 1 );

END;
```

See Also:

- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.14 LOG_PAGE_SESSION_STATE Procedure

This procedure logs the session's item values.

Syntax

```
APEX_DEBUG.LOG_PAGE_SESSION_STATE (
    p_page_id   IN  NUMBER      DEFAULT NULL,
    p_enabled   IN  BOOLEAN     DEFAULT FALSE,
    p_level     IN  t_log_level DEFAULT c_log_level_app_trace )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_page_id` | Identifies a page within the current applicaton and workspace context. |
| `p_enabled` | Messages are logged when logging is enabled. `TRUE` enables logging. |
| `p_level` | Identifies the level of the log message where `1` is most important, `9` is least important. Must be an integer value. |

Example

This example enables debug message logging for `1` and `2` level messages and display a level `1` message containing all the session state for the application's current page. Note the `p_enabled` parameter need not be specified, as debugging has been explicitly enabled and the default of `FALSE` for this parameter respects this enabling. Also note the `p_page_id` has not been specified, as this example just shows session state information for the application's current page.

```
BEGIN
    APEX_DEBUG.ENABLE (p_level => 2);

    APEX_DEBUG.LOG_PAGE_SESSION_STATE (p_level => 1);

END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.15 MESSAGE Procedure

This procedure logs a formatted debug message, general version.

Syntax

```
APEX_DEBUG.MESSAGE (
    p_message       IN VARCHAR2,
    p0              IN VARCHAR2     DEFAULT NULL,
    p1              IN VARCHAR2     DEFAULT NULL,
    p2              IN VARCHAR2     DEFAULT NULL,
    p3              IN VARCHAR2     DEFAULT NULL,
    p4              IN VARCHAR2     DEFAULT NULL,
    p5              IN VARCHAR2     DEFAULT NULL,
    p6              IN VARCHAR2     DEFAULT NULL,
    p7              IN VARCHAR2     DEFAULT NULL,
    p8              IN VARCHAR2     DEFAULT NULL,
    p9              IN VARCHAR2     DEFAULT NULL,
    p10             IN VARCHAR2     DEFAULT NULL,
    p11             IN VARCHAR2     DEFAULT NULL,
    p12             IN VARCHAR2     DEFAULT NULL,
    p13             IN VARCHAR2     DEFAULT NULL,
    p14             IN VARCHAR2     DEFAULT NULL,
    p15             IN VARCHAR2     DEFAULT NULL,
    p16             IN VARCHAR2     DEFAULT NULL,
    p17             IN VARCHAR2     DEFAULT NULL,
    p18             IN VARCHAR2     DEFAULT NULL,
    p19             IN VARCHAR2     DEFAULT NULL,
    p_max_length    IN PLS_INTEGER  DEFAULT 1000,
    p_level         IN t_log_level  DEFAULT c_log_level_info,
    p_force         IN BOOLEAN      DEFAULT FALSE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_message` | The debug message. Occurrences of `%` are replaced by `p0` to `p19`, as in `utl_lms.format_message` and C's sprintf. Occurrences of `%%` represent the special character `%`. Occurrences of `%<n>` are replaced by `p<n>`. |
| `p0` through `p19` | Substitution strings for `%` placeholders. |
| `p_max_length` | The `p<n>` values is truncated to this length. The tilde (`~`) character is appended to indicate that the original value exceeded this length. |
| `p_level` | The log level for the message, default is `c_log_level_info`. See [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-Constants.html#GUID-412ED5E2-1739-4A9B-B214-38674B4A4BCD). |
| `p_force` | If `TRUE`, this generates a debug message even if the page is not rendered in debug mode or `p_level` is greater than the configured debug messaging (using the URL or using the enable procedure). |

Example

This example adds text to the debug log.

```
apex_debug.message('the value of %s + %s equals %s', 3, 5, 'eight');
```

See Also:

- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)
- [ENTER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html#GUID-56D49575-92E8-4BD9-8469-30E3F66D7682)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.16 REMOVE_DEBUG_BY_AGE Procedure

Deletes all data older than the specified number of days from the debug message log.

Syntax

```
APEX_DEBUG.REMOVE_DEBUG_BY_AGE (
    p_application_id    IN NUMBER,
    p_older_than_days   IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID of the application. |
| `p_older_than_days` | The number of days data can exist in the debug message log before it is deleted. |

Example

This example removes debug messages relating to the current application that are older than 3 days old.

```
BEGIN
    APEX_DEBUG.REMOVE_DEBUG_BY_AGE (
        p_application_id  => TO_NUMBER(:APP_ID),
        p_older_than_days => 3 );
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.17 REMOVE_DEBUG_BY_APP Procedure

Deletes all data belonging to a specified application from the debug message log.

Syntax

```
APEX_DEBUG.REMOVE_DEBUG_BY_APP (
    p_application_id    IN NUMBER )
```

Parameters

| Parameter          | Description                            |
|:-------------------|:---------------------------------------|
| `p_application_id` | The application ID of the application. |

Example

This example removes all debug messages logged for the current application.

```
BEGIN
    APEX_DEBUG.REMOVE_DEBUG_BY_APP(
        p_application_id => TO_NUMBER(:APP_ID) );
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.18 REMOVE_DEBUG_BY_VIEW Procedure

Deletes all data for a specified view from the message log.

Syntax

```
APEX_DEBUG.REMOVE_DEBUG_BY_VIEW (
    p_application_id    IN NUMBER,
    p_view_id           IN NUMBER )
```

Parameters

| Parameter          | Description                            |
|:-------------------|:---------------------------------------|
| `p_application_id` | The application ID of the application. |
| `p_view_id`        | The view ID of the view.               |

Example

This example removes debug messages within the "View Identifier" of `12345` belonging to the current application.

```
BEGIN
    APEX_DEBUG.REMOVE_DEBUG_BY_VIEW (
        p_application_id => TO_NUMBER(:APP_ID),
        p_view_id        => 12345 );
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.19 REMOVE_SESSION_MESSAGES Procedure

This procedure deletes from the debug message log all data for a given session in your workspace defaults to your current session.

Syntax

```
APEX_DEBUG.REMOVE_SESSION_MESSAGES (
    p_session    IN NUMBER  DEFAULT NULL )
```

Parameters

| Parameter   | Description                                       |
|:------------|:--------------------------------------------------|
| `p_session` | The session ID. Defaults to your current session. |

Example

This example removes all debug messages logged within the current session. Because no value is passed for the `p_session` parameter, the procedure defaults to the current session.

```
BEGIN
    APEX_DEBUG.REMOVE_SESSION_MESSAGES();
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.20 TOCHAR Function

This procedure converts a BOOLEAN to a VARCHAR2.

Syntax

```
APEX_DEBUG.TOCHAR (
    p_value IN BOOLEAN )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | A BOOLEAN `0` or `1` that is converted to `FALSE` or `TRUE` respectively. |

Example

This example shows how to use the `APEX_DEBUG.TOCHAR` function to convert `boolean` values to `varchar2`, so they can be passed to the other debug procedures.

```
DECLARE
    l_state boolean;
BEGIN
    ....
    apex_debug.info('Value of l_state is %s', apex_debug.tochar(l_state));
    ....
END;
```

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.21 TRACE Procedure

This procedure logs messages at level `c_log_level_app_trace`.

Syntax

```
APEX_DEBUG.TRACE (
    p_message       IN  VARCHAR2,
    p0              IN  VARCHAR2    DEFAULT NULL,
    p1              IN  VARCHAR2    DEFAULT NULL,
    p2              IN  VARCHAR2    DEFAULT NULL,
    p3              IN  VARCHAR2    DEFAULT NULL,
    p4              IN  VARCHAR2    DEFAULT NULL,
    p5              IN  VARCHAR2    DEFAULT NULL,
    p6              IN  VARCHAR2    DEFAULT NULL,
    p7              IN  VARCHAR2    DEFAULT NULL,
    p8              IN  VARCHAR2    DEFAULT NULL,
    p9              IN  VARCHAR2    DEFAULT NULL,
    p_max_length    IN  PLS_INTEGER DEFAULT 1000 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_message` | The debug message. Occurrences of `%` are replaced by `p0` to `p19`, as in `utl_lms.format_message` and C's sprintf. Occurrences of `%%` represent the special character `%`. Occurrences of `%<n>` are replaced by `p<n>`. |
| `p0` through `p9` | Substitution strings for `%` placeholders. |
| `p_max_length` | The `p<n>` values are truncated to this length. The tilde (`~`) character is appended to indicate that the original value exceeded this length. |

Example

This example logs low-level debug information in the debug log.

```
apex_debug.trace('Low-level information: %s+%s=%s', 1, 2, 3);
```

See Also:

- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WARN-Procedure.html#GUID-97BA4A04-A342-45DE-8524-893AF3AD49AA)
- [ENTER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html#GUID-56D49575-92E8-4BD9-8469-30E3F66D7682)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)

------------------------------------------------------------------------

## 24.22 WARN Procedure

This procedure logs messages at level `c_log_level_warn`.

Syntax

```
APEX_DEBUG.WARN (
    p_message       IN VARCHAR2,
    p0              IN VARCHAR2     DEFAULT NULL,
    p1              IN VARCHAR2     DEFAULT NULL,
    p2              IN VARCHAR2     DEFAULT NULL,
    p3              IN VARCHAR2     DEFAULT NULL,
    p4              IN VARCHAR2     DEFAULT NULL,
    p5              IN VARCHAR2     DEFAULT NULL,
    p6              IN VARCHAR2     DEFAULT NULL,
    p7              IN VARCHAR2     DEFAULT NULL,
    p8              IN VARCHAR2     DEFAULT NULL,
    p9              IN VARCHAR2     DEFAULT NULL,
    p_max_length    IN PLS_INTEGER  DEFAULT 1000 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_message` | The debug message. Occurrences of `%` are replaced by `p0` to `p19`, as in `utl_lms.format_message` and C's sprintf. Occurrences of `%%` represent the special character `%`. Occurrences of `%<n>` are replaced by `p<n>`. |
| `p0` through `p9` | Substitution strings for `%` placeholders. |
| `p_max_length` | The `p<n>` values are truncated to this length. The tilde (`~`) character is appended to indicate that the original value exceeded this length. |

Example

This example shows how to use `APEX_DEBUG.WARN` to log highly important data in the debug log.

```
apex_debug.warn('Soft constraint %s violated: %s', 4711, sqlerrm);
```

See Also:

- [MESSAGE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MESSAGE-Procedure.html#GUID-2503CA63-2C6F-429C-A767-611CFEE6FE73)
- [ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ERROR-Procedure.html#GUID-9CAFF9DD-A2FB-46DC-A4CB-EEB6D61CE0D5)
- [ENTER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENTER-Procedure.html#GUID-56D49575-92E8-4BD9-8469-30E3F66D7682)
- [TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRACE-Procedure.html#GUID-B2EC13C4-C3EF-4941-AD75-EBBB202190B5)
- [INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INFO-Procedure.html#GUID-C8E6E25E-8211-49F8-9110-33F074E68927)

**Parent topic:** [APEX_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG.html#GUID-8E80E46E-CCEF-4CCC-8D00-8EC3A5C36FDE)
