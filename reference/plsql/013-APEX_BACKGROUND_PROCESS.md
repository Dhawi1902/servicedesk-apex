<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 13 APEX_BACKGROUND_PROCESS

This package enables background process reporting (status and progress) and the option to forcefully cancel a running process.

- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS-Constants.html#GUID-F8B2006B-AEF3-4F50-96A2-8DE5349C2A94)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS-Data-Types.html#GUID-FF0174C9-EFF7-4DC8-A2AB-06BCA95F3E30)
- [ABORT Procedure Signature 1 (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.ABORT-Procedure-Signature-1.html#GUID-454814A2-BDB0-4097-B036-979D71603565)
- [ABORT Procedure Signature 2 (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.ABORT-Procedure-Signature-2.html#GUID-FE0F2941-8BCE-4E92-85AC-14340B8DA945)
- [GET_CURRENT_EXECUTION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_CURRENT_EXECUTION-Function.html#GUID-276F85A9-0B16-4F06-BE7F-70A54DE5B2B0)
- [GET_EXECUTION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_EXECUTION-Function.html#GUID-E9D6735E-04F0-4B5F-8589-0FB845DA6E69)
- [SET_PROGRESS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.SET_PROGRESS-Procedure.html#GUID-505AA39D-2619-4DCA-A7C1-65939448E0B8)
- [SET_STATUS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.SET_STATUS-Procedure.html#GUID-C992D7EC-FE31-46BA-BA40-F5F47089F0BD)
- [TERMINATE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.TERMINATE-Procedure-Signature-1.html#GUID-ECEE1B03-FC3F-4D4E-A949-D2C5B879CDCF)
- [TERMINATE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.TERMINATE-Procedure-Signature-2.html#GUID-AFCFBAD4-5D1A-4479-8D26-F4009EA36DDA)

------------------------------------------------------------------------

## 13.1 Constants

The APEX_BACKGROUND_PROCESS package uses the following constants.

```
-- subtype t_execution_state is varchar2(9);
--
-- An execution was submitted, but the coordinator job has not picked it up
-- for execution yet.
--
c_status_enqueued    constant t_execution_state := 'ENQUEUED';
--
-- The coordinator job picked up the execution and started an executor job
-- using the database scheduler, but the scheduler did not start this job yet.
--
c_status_scheduled   constant t_execution_state := 'SCHEDULED';
--
-- The executor job for this background execution is currently executing.
--
c_status_executing   constant t_execution_state := 'EXECUTING';
--
-- The execution finished successfully.
--
c_status_success     constant t_execution_state := 'SUCCESS';
--
-- An unhandled error arose during execution.
--
c_status_failed      constant t_execution_state := 'FAILED';
--
-- The execution was terminated.
--
c_status_terminated  constant t_execution_state := 'ABORTED';
-- Deprecated:
c_status_aborted     constant t_execution_state := 'ABORTED';
```

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.2 Data Types

The APEX_BACKGROUND_PROCESS package uses the following data types.

Record describing an execution running in the background

```
type t_execution is record (
    id                        NUMBER,
    state                     t_execution_state,
    --
    current_exec_process_id   NUMBER,
    --
    last_status_message       VARCHAR2(32767),
    sofar                     NUMBER,
    totalwork                 NUMBER );
```

Attributes

| Attribute | Description |
|:---|:---|
| `execution_id` | ID of the execution. |
| `state` | State of the execution, see `t_execution_state` constants. |
| `current_exec_process_id` | ID of the currently executing child process. |
| `context_value` | Context value passed when the execution was submitted. |
| `last_status_message` | Last status message set by the developer. |
| `sofar` | Units of work already processed by the page process. |
| `totalwork` | Total units of work to process by the page process. |

See Also:

- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS-Constants.html#GUID-F8B2006B-AEF3-4F50-96A2-8DE5349C2A94)

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.3 ABORT Procedure Signature 1 (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

Use APEX_BACKGROUND_PROCESS.TERMINATE instead.

This procedure aborts all executions of an execution chain.

Syntax

```
APEX_BACKGROUND_PROCESS.ABORT (
    p_application_id    IN NUMBER DEFAULT apex_application.g_flow_id,
    p_process_id        IN NUMBER )
```

Parameters

| Parameter          | Description                                        |
|:-------------------|:---------------------------------------------------|
| `p_application_id` | ID of the application containing the process.      |
| `p_process_id`     | ID of the execution chain to abort executions for. |

Example

The following example aborts all executions for process `9023498034890234890`.

```
BEGIN
    apex_background_process.abort(
        p_application_id => 100,
        p_process_id     => 9023498034890234890 );
END;
```

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.4 ABORT Procedure Signature 2 (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

Use APEX_BACKGROUND_PROCESS.TERMINATE instead.

This procedure aborts a specific execution of an execution chain.

Syntax

```
APEX_BACKGROUND_PROCESS.ABORT (
    p_application_id    IN NUMBER DEFAULT apex_application.g_flow_id,
    p_execution_id      IN NUMBER )
```

Parameters

| Parameter          | Description                                   |
|:-------------------|:----------------------------------------------|
| `p_application_id` | ID of the application containing the process. |
| `p_execution_id`   | ID of the execution to abort.                 |

Example

The following example aborts background execution `4711`.

```
BEGIN
    apex_background_process.abort(
        p_application_id => 100,
        p_execution_id   => 4711 );
END;
```

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.5 GET_CURRENT_EXECUTION Function

This function returns the status of the current execution. This function is called from within the background process to get its own execution ID.

If the function is not called from a page process running in the background, an empty record is returned.

Syntax

```
APEX_BACKGROUND_PROCESS.GET_CURRENT_EXECUTION
    RETURN t_execution;
```

Parameters

None.

Returns

`T_EXECUTION` record with status information for the current execution.

Example

The following example retrieves Status information of the currently running background execution.

```
DECLARE
    l_execution apex_background_process.t_execution;
BEGIN
    l_execution := apex_background_process.get_current_execution;
    sys.dbms_output.put_line( 'Execution ID: ' || l_execution.id );
END;

=> Execution ID: 4711
```

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.6 GET_EXECUTION Function

This function returns the current status of a specific execution ID.

Syntax

```
APEX_BACKGROUND_PROCESS.GET_EXECUTION (
    p_application_id     IN NUMBER DEFAULT apex_application.g_flow_id,
    p_execution_id       IN NUMBER )
    RETURN t_execution;
```

Parameters

| Parameter          | Description                                   |
|:-------------------|:----------------------------------------------|
| `p_application_id` | ID of the application containing the process. |
| `p_execution_id`   | ID of the execution to get status for.        |

Returns

This function returns `t_execution` record with current status information for this execution.

Example

The following example retrieves Status information for execution ID 4711.

```
DECLARE
    l_execution apex_background_process.t_execution;
BEGIN
    l_execution := apex_background_process.get_execution(
                   p_application_id     => 100,
                   p_execution_id       => 4711 );

    sys.dbms_output.put_line( 'Execution State: ' || l_execution.state );
END;

=> Execution State: EXECUTING
```

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.7 SET_PROGRESS Procedure

This procedure sets progress of an execution. This procedure must be called from within PL/SQL code.

Use the `GET_EXECUTION` function to retrieve information.

Syntax

```
APEX_BACKGROUND_PROCESS.SET_PROGRESS (
    p_totalwork IN NUMBER DEFAULT NULL,
    p_sofar     IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_totalwork` | Total units of work to be processed by the background process. |
| `p_sofar` | Units of work being processed so far. |

Example 1

The following example demonstrates a PL/SQL page process running in the background with a known total amount of work to process. Progress is reported to the Oracle APEX engine as follows.

```
BEGIN
    for i in 1 .. 1000 loop
        do_something( p_param => i );
        apex_background_process.set_progress(
            p_totalwork   => 1000,
            p_sofar       => i );
    END loop;
END;
```

Example 2

The following example demonstrates a PL/SQL page process running in the background with an unknown total amount work to process. Progress is reported to the APEX engine as follows.

```
DECLARE
    l_rows_processed pls_integer := 1;
BEGIN
    for i ( select * from emp ) loop
        do_something( p_param => i.empno );
        apex_background_process.set_progress(
            p_sofar       => l_rows_processed );
        l_rows_processed := l_rows_processed + 1;
    END loop;
END;
```

See Also:

- [GET_EXECUTION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_EXECUTION-Function.html#GUID-E9D6735E-04F0-4B5F-8589-0FB845DA6E69)

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.8 SET_STATUS Procedure

This procedure sets status for an execution chain. This procedure must be called from within PL/SQL code.

Use the `GET_EXECUTION` function to retrieve status messages.

Syntax

```
APEX_BACKGROUND_PROCESS.SET_STATUS (
    p_message   IN VARCHAR2 );
```

Parameters

| Parameter   | Description                                |
|:------------|:-------------------------------------------|
| `p_message` | Current status message for the page chain. |

Example

The following example demonstrates a PL/SQL page process running in the background. After each unit of work, a status message is being reported to the APEX engine.

```
DECLARE
    l_result varchar2(255);
BEGIN
    apex_background_process.set_status( 'Part A: Process Orders' );
    for i in ( select *
             from orders
            where status = 'OPEN' )
    LOOP
        l_result := process_order( p_param => i.order_id );
    END LOOP;
    apex_background_process.set_status( 'Part B: Process Bills' );
    for i in ( select *
             from orders
            where status = 'DELIVERED' )
    LOOP
        l_result := emit_bill( p_param => i.order_id );
    END LOOP;
END;
```

See Also:

- [GET_EXECUTION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_BACKGROUND_PROCESS.GET_EXECUTION-Function.html#GUID-E9D6735E-04F0-4B5F-8589-0FB845DA6E69)

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.9 TERMINATE Procedure Signature 1

This procedure terminates all executions of an execution chain.

Syntax

```
APEX_BACKGROUND_PROCESS.TERMINATE (
    p_application_id    IN NUMBER DEFAULT apex_application.g_flow_id,
    p_process_id        IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application containing the process. |
| `p_process_id` | ID of the execution chain containing the executions to terminate. |

Example

The following example terminates all executions for process `9023498034890234890`.

```
BEGIN
    apex_background_process.terminate(
        p_application_id => 100,
        p_process_id     => 9023498034890234890 );
END;
```

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)

------------------------------------------------------------------------

## 13.10 TERMINATE Procedure Signature 2

This procedure terminates a specific execution of an execution chain.

Syntax

```
APEX_BACKGROUND_PROCESS.TERMINATE (
    p_application_id    IN NUMBER DEFAULT apex_application.g_flow_id,
    p_execution_id      IN NUMBER )
```

Parameters

| Parameter          | Description                                   |
|:-------------------|:----------------------------------------------|
| `p_application_id` | ID of the application containing the process. |
| `p_execution_id`   | ID of the execution to terminate.             |

Example

The following example aborts background execution `4711`.

```
BEGIN
    apex_background_process.terminate(
        p_application_id => 100,
        p_execution_id   => 4711 );
END;
```

**Parent topic:** [APEX_BACKGROUND_PROCESS](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/apex_background_process.html)
