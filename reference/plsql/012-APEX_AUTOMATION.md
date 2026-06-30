<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 12 APEX_AUTOMATION

The `APEX_AUTOMATION` package provides automated functionality to your environment. Automations are a sequential set of actions which are triggered by query results. Use automations to monitor data and then perform the appropriate action, such as auto-approving specific requests and sending email alerts.

- [ABORT Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_ABORT-Procedure.html#GUID-8C2D23EB-8245-4159-B265-59DC11466856)
- [DISABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_DISABLE-Procedure.html#GUID-902B0AB6-54A1-4845-A31F-58E86CBE3616)
- [ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_ENABLE-Procedure.html#GUID-F26ABF18-0B0A-428F-A595-794ECD52C407)
- [EXECUTE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-Procedure-Signature-1.html#GUID-EFAA0508-792C-462D-92C2-A351D4EE9191)
- [EXECUTE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-Procedure-Signature-2.html#GUID-C4C147B8-F507-4BE4-B68D-8160908CA47F)
- [EXECUTE for Query Context Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXECUTE-for-Query-Context.html#GUID-E6592669-10F6-4816-9999-E2EB8A83A337)
- [EXIT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_EXIT-Procedure.html#GUID-7CB51015-E945-48EC-A97C-618D8DD1CEDF)
- [GET_LAST_RUN Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_LAST_RETURN-Function.html#GUID-9A8BB4FF-D522-4AAB-9102-81010E085686)
- [GET_LAST_RUN_TIMESTAMP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_LAST_RUN_TIMESTAMP-Procedure.html#GUID-7F5AA067-AF9E-4C4E-BFEF-D451CC8A74D4)
- [GET_SCHEDULER_JOB_NAME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_GET_SCHEDULER_JOB_NAME-Function.html#GUID-71C5DBF1-5E89-43D8-AF34-7FEEE3CE2B13)
- [IS_RUNNING Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_IS_RUNNING-Function.html#GUID-C8E7EB86-2E80-4B4A-817B-EC7F44BDC7A9)
- [LOG_ERROR Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_LOG_ERROR-Procedure.html#GUID-A6218EAE-BFEA-4244-853C-11C3A6AB4D1D)
- [LOG_INFO Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_LONG_INFO-Procedure.html#GUID-569DBB08-BD4A-41F9-800A-07F64E4D0531)
- [LOG_WARN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_LOG_WARN-Procedure.html#GUID-77E12F46-A9F6-48FD-9697-5705382C6647)
- [RESCHEDULE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_RESCHEDULE-Procedure.html#GUID-AEA1FD5A-135C-4B8E-84D4-FDD8076BFD3D)
- [SKIP_CURRENT_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_SKIP_CURRENT_ROW-Procedure.html#GUID-5C32EC9E-B0EC-4C4C-B5AE-59D90CB89250)
- [TERMINATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_TERMINATE-Procedure.html#GUID-1E2C0DA9-64A1-452A-B5E4-F9BA0132206C)

------------------------------------------------------------------------

## 12.1 ABORT Procedure (Deprecated)

Important:

This API is deprecated and will be removed in a future release.

Use `APEX_AUTOMATION.TERMINATE` instead.

This procedure terminates a currently executing automation.

Syntax

```
APEX_AUTOMATION.ABORT (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to terminate.            |

Example

The following example aborts the currently executing automation `my_emp_table_automation` in application `152`. If the automation is not running, nothing happens.

```
BEGIN
    apex_automation.abort(
        p_application_id => 152,
        p_static_id      => 'my_emp_table_automation' );
END;
```

See Also:

- [TERMINATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION_TERMINATE-Procedure.html#GUID-1E2C0DA9-64A1-452A-B5E4-F9BA0132206C)

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.2 DISABLE Procedure

This procedure stops the automation from executing automatically.

Syntax

```
APEX_AUTOMATION.DISABLE (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to disable.              |

Examples

This example disables the automation `my_emp_table_automation` in application 152.

```
BEGIN
    apex_automation.disable(
        p_application_id  => 152,
        p_static_id       => 'my_emp_table_automation' );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.3 ENABLE Procedure

This procedure enables the automation for normal execution.

Syntax

```
APEX_AUTOMATION.ENABLE (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to enable.               |

Examples

This example enables the automation `my_emp_table_automation` in application 152.

```
BEGIN
    apex_automation.enable(
        p_application_id  => 152,
        p_static_id       => 'my_emp_table_automation' );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.4 EXECUTE Procedure Signature 1

This procedure executes an automation.

Syntax

```
APEX_AUTOMATION.EXECUTE (
    p_application_id    IN NUMBER                   DEFAULT {current application id},
    p_static_id         IN VARCHAR2,
    p_filters           IN apex_exec.t_filters      DEFAULT apex_exec.c_empty_filters,
    p_order_bys         IN apex_exec.t_order_bys    DEFAULT apex_exec.c_empty_order_bys )
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to execute.              |
| `p_filters`        | Additional filters to apply to the automation query. |
| `p_order_bys`      | `ORDER BY` clauses to apply to the automation query. |

Example

This example executes the automation `my_emp_table_automation` and applies a filter to the automation query on the `DEPTNO` column (DEPTNO = 10).

```
DECLARE
    l_filters apex_exec.t_filters;
BEGIN
    apex_session.create_session( 100, 1, 'ADMIN' );

    apex_exec.add_filter(
        p_filters        => l_filters,
        p_column_name    => 'DEPTNO',
        p_filter_type    => apex_exec.c_filter_eq,
        p_value          => 10 );

    apex_automation.execute(
        p_static_id       => 'my_emp_table_automation',
        p_filters         => l_filters );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.5 EXECUTE Procedure Signature 2

This procedure executes an automation.

Syntax

```
APEX_AUTOMATION.EXECUTE (
    p_application_id    IN NUMBER DEFAULT {current application id},
    p_static_id         IN VARCHAR2,
    p_run_in_background IN BOOLEAN )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id` | Static ID of the automation to execute. |
| `p_run_in_background` | If `TRUE`, synchronization runs in the background as a one-time DBMS_SCHEDULER job. |

Example

This example executes the automation `my_emp_table_automation` in the background.

```
BEGIN
    apex_session.create_session( 100, 1, 'ADMIN' );

    apex_automation.execute(
        p_static_id         => 'my_emp_table_automation',
        p_run_in_background => true );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.6 EXECUTE for Query Context Procedure

This procedure executes automation actions for a given query context. The columns returned by the query context match those defined in the automation query, especially when columns are referenced as bind variables in the actions code.

Syntax

```
APEX_AUTOMATION.EXECUTE (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2,
    p_query_context     IN apex_exec.t_context )
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to execute.              |
| `p_query_context`  | The context to run the actions for the query.        |

Examples

This example executes the actions defined in the automation `my_emp_table_automation`, but uses a different query context.

```
DECLARE
    l_context apex_exec.t_context:
BEGIN
    apex_session.create_session( 100, 1, 'ADMIN' );

    l_context := apex_exec.open_query_context(
                     p_location         => apex_exec.c_location_local_db,
                     p_sql_query        => 'select * from emp_copy_table' );

    apex_automation.execute(
        p_static_id       => 'my_emp_table_automation',
        p_query_context   => l_context );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.7 EXIT Procedure

This procedure exits automation processing, including for remaining rows. Use this procedure in automation action code.

Syntax

```
APEX_AUTOMATION.EXIT (
    p_log_message   IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter       | Description                             |
|:----------------|:----------------------------------------|
| `p_log_message` | Message to write to the automation log. |

Examples

This example cancels the automation if a salary higher than 10,000 is found. The automation uses `select * from emp` as the automation query.

```
BEGIN
    IF :SQL > 10000 THEN
        apex_automation.exit( p_log_message => 'Dubious SAL value found. Exit automation.' );
    ELSE
        my_logic_package.process_emp(
            p_empno  => :EMPNO,
            p_sal    => :SAL,
            p_depto  => :DEPTNO );
    END IF;
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.8 GET_LAST_RUN Function

This function returns the last run of the automation as a `TIMESTAMP WITH TIME ZONE` type. Use this function within automation action code or the automation query.

Syntax

```
APEX_AUTOMATION.GET_LAST_RUN
    RETURN timestamp with time zone;
```

Returns

| Return | Description                               |
|:-------|:------------------------------------------|
| `*`    | Timestamp of the previous automation run. |

Examples

This example automation only selects rows from a table which have the CREATED_AT column after the last run of the automation.

```
select *
  from {table}
 where created_at > apex_automation.get_last_run;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.9 GET_LAST_RUN_TIMESTAMP Function

This function retrieves information about the latest automation run.

Syntax

```
APEX_AUTOMATION.GET_LAST_RUN_TIMESTAMP (
    p_application_id         IN NUMBER   DEFAULT {current application id},
    p_static_id              IN VARCHAR2 )
    RETURN timestamp with time zone;
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to execute.              |

Returns

| Return | Description                                      |
|:-------|:-------------------------------------------------|
| `*`    | Timestamp of the last successful automation run. |

Examples

This example retrieves the timestamp of the last successful run of the `my_emp_table_automation`.

```
DECLARE
    l_last_run_ts timestamp with time zone;
BEGIN
    apex_session.create_session( 100, 1, 'ADMIN' );
    l_last_run := apex_automation.get_last_run_timestamp(
                       p_static_id    => 'my_emp_table_automation' );

    dbms_output.put_line( 'The automation''s last run was as of: ' || l_last_run );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.10 GET_SCHEDULER_JOB_NAME Function

This procedure returns the name which is used for the scheduler job when the automation executes.

Syntax

```
APEX_AUTOMATION.GET_SCHEDULER_JOB_NAME (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation.                         |

Returns

The name of the the scheduler job which is generated to execute this automation.

Example

The following example returns the name of the scheduler job which executes the automation with the static ID `my_emp_table_automation`.

```
BEGIN
    dbms_output.put_line(
    apex_automation.get_scheduler_job_name(
         p_application_id => 152,
         p_static_id      => 'my_emp_table_automation' ) );

         -- ==> APEX$AUTOMATION_2167837869128719
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.11 IS_RUNNING Function

This function determines whether a given automation is currently running.

Syntax

```
APEX_AUTOMATION.IS_RUNNING (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
    RETURN BOOLEAN;
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation.                         |

Returns

If `TRUE`, the automation is currently running.

Example

The following example prints out whether the automation is currently running.

```
BEGIN
    IF apex_automation.is_running(p_application_id => 152, p_static_id => 'my_emp_table_automation' ) THEN
        dbms_output.put_line( 'The Automation is currently running.' );
    ELSE
        dbms_output.put_line( 'The Automation is currently not running.' );
    END IF;
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.12 LOG_ERROR Procedure

This procedure writes a log entry with severity `ERROR` and is to be used within automation code.

Syntax

```
APEX_AUTOMATION.LOG_ERROR (
    p_message   IN VARCHAR2 )
```

Parameters

| Parameter   | Description                             |
|:------------|:----------------------------------------|
| `p_message` | Message to write to the automation log. |

Example

This example writes some log information.The automation uses `select * from emp` as the automation query.

```
BEGIN
    IF :SAL > 10000 THEN
         apex_automation.log_error(
             p_message => 'High Salary found for empno: ' || :EMPNO );
    ELSE
        my_logic_package.process_emp(
            p_empno => :EMPNO,
            p_sal => :SAL,
            p_depto => :DEPTNO );
    END IF;
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.13 LOG_INFO Procedure

This procedure writes a log entry with severity of `INFO` which can be used within automation code.

Syntax

```
APEX_AUTOMATION.LOG_INFO (
    p_message   IN VARCHAR2 )
```

Parameters

| Parameter   | Description                             |
|:------------|:----------------------------------------|
| `p_message` | Message to write to the automation log. |

Example

This example writes some log information. The automation uses `select * from emp` as the automation query.

```
BEGIN
    IF :SAL > 10000 THEN
        apex_automation.log_info( p_message => 'High Salary found for empno: ' || :EMPNO );
    END IF;
    my_logic_package.process_emp(
        p_empno  => :EMPNO,
        p_sal    => :SAL,
        p_depto  => :DEPTNO );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.14 LOG_WARN Procedure

This procedure writes a log entry with severity `WARN` and is to be usedwithin automation code.

Syntax

```
APEX_AUTOMATION.LOG_WARN (
    p_message   IN VARCHAR2 )
```

Parameters

| Parameter   | Description                             |
|:------------|:----------------------------------------|
| `p_message` | Message to write to the automation log. |

Examples

This example writes some log information. The automation uses `select * from emp` as the automation query.

```
BEGIN
    IF :SAL > 10000 THEN
        apex_automation.log_warn(
            p_message => 'High Salary found for empno: ' || :EMPNO );
    END IF;
    my_logic_package.process_emp(
        p_empno => :EMPNO,
        p_sal   => :SAL,
        p_depto => :DEPTNO );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.15 RESCHEDULE Procedure

This procedure sets the next scheduled execution date of a "polling" automation to now so that the main automation execution job executes the automation as soon as possible. If the automation is currently running, it will not restart.

Syntax

```
APEX_AUTOMATION.RESCHEDULE (
  p_application_id  IN NUMBER                     DEFAULT {current application id},
  p_static_id       IN VARCHAR2,
  p_next_run_at     IN timestamp with time zone   DEFAULT systimestamp )
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to execute.              |
| `p_next_run_at`    | Timestamp of the next automation run.                |

Examples

This example sets the automation `my_emp_table_automation` to execute in the background right now.

```
BEGIN
  apex_session.create_session( 100, 1, 'ADMIN' );

  apex_automation.reschedule(
    p_static_id  => 'my_emp_table_automation' );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.16 SKIP_CURRENT_ROW Procedure

This procedure skips processing of the current row and continues with the next one. Use this procedure in automation action code.

Syntax

```
APEX_AUTOMATION.SKIP_CURRENT_ROW (
    p_log_message   IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter       | Description                             |
|:----------------|:----------------------------------------|
| `p_log_message` | Message to write to the automation log. |

Examples

This example skips the rest of processing for the current row (PRESIDENT row). The automation uses `select * from emp` as the automation query.

```
BEGIN
    IF :ENAME = 'PRESIDENT' THEN
        apex_automation.skip_current_row( p_log_message => 'PRESIDENT skipped' );
    ELSE
        my_logic_package.process_emp(
            p_empno  => :EMPNO,
            p_sal    => :SAL,
            p_depto  => :DEPTNO );
    END IF;
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)

------------------------------------------------------------------------

## 12.17 TERMINATE Procedure

This procedure terminates a currently executing automation.

Syntax

```
APEX_AUTOMATION.TERMINATE (
    p_application_id    IN NUMBER   DEFAULT {current application id},
    p_static_id         IN VARCHAR2 )
```

Parameters

| Parameter          | Description                                          |
|:-------------------|:-----------------------------------------------------|
| `p_application_id` | ID of the application which contains the automation. |
| `p_static_id`      | Static ID of the automation to terminate.            |

Example

The following example terminates the currently executing automation `my_emp_table_automation` in application `152`. If the automation is not running, nothing happens.

```
BEGIN
    apex_automation.terminate(
        p_application_id => 152,
        p_static_id      => 'my_emp_table_automation' );
END;
```

**Parent topic:** [APEX_AUTOMATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTOMATION.html#GUID-4E2C8FAA-1A65-49A4-9712-12730775ABE7)
