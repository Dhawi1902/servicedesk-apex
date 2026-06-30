<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 51 APEX_REST_SOURCE_SYNC

The `APEX_REST_SOURCE_SYNC` package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.

- [DISABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-DISABLE-Procedure.html#GUID-64633AD9-9C38-4A00-BCCD-8733DDDD1342)
- [DYNAMIC_SYNCHRONIZE_DATA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DYNAMIC_SYNCHRONIZE_DATA-Procedure.html#GUID-77A7F3A3-A2AD-430F-BE5D-EBF80B1A5255)
- [ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-ENABLE-Procedure.html#GUID-F6893D88-76F0-4C6A-9CEC-E4CDEC9EDEC2)
- [GET_LAST_SYNC_TIMESTAMP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LAST_SYNC_TIMESTAMP-Function.html#GUID-9BA7CF70-871A-40F8-9C9E-3E5259373890)
- [GET_SYNC_TABLE_DEFINITION_SQL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SYNC_TABLE_DEFINITION_SQL-Function.html#GUID-4EEAF2AB-5615-4C27-B157-68B35051DEED)
- [IS_RUNNING Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-IS_RUNNING-Function.html#GUID-4CE59FBF-1DF5-49F2-B0B1-30C7C0ABDBE5)
- [RESCHEDULE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC-RESCHEDULE-Procedure.html#GUID-25F12A56-E56D-4318-88EF-94B6BFB41747)
- [SYNCHRONIZE_DATA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCHRONIZE_DATA-Procedure.html#GUID-660DE4D1-4BAF-405A-A871-6B8C201969C9)
- [SYNCHRONIZE_TABLE_DEFINITION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCHRONIZE_TABLE_DEFINITION-Procedure.html#GUID-62CE1A41-B1BA-493D-AA74-A65538B35E97)

------------------------------------------------------------------------

## 51.1 DISABLE Procedure

This procedure disables automatic synchronization.

Syntax

```
APEX_REST_SOURCE_SYNC.DISABLE (
  p_application_id    IN NUMBER   DEFAULT {current application id},
  p_module_static_id  IN VARCHAR2 )
```

Parameters

| Parameter            | Description                                 |
|:---------------------|:--------------------------------------------|
| `p_application_id`   | (Optional) The application ID.              |
| `p_module_static_id` | Static ID to identify the REST Data Source. |

Example

The following example disables synchronization for the `rest_movie` REST Data Source in application 152.

```
BEGIN
apex_rest_source_sync.disable(
    p_application_id => 152,
    p_module_static_id => 'rest_movie' );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.2 DYNAMIC_SYNCHRONIZE_DATA Procedure

This procedure executes a dynamic data synchronization to the local table based on the provided parameters. The predefined synchronization steps are not executed.

Syntax

```
APEX_REST_SOURCE_SYNC.DYNAMIC_SYNCHRONIZE_DATA (
    p_module_static_id          IN VARCHAR2,
    --
    p_sync_static_id            IN VARCHAR2,
    p_sync_external_filter_expr IN VARCHAR2               DEFAULT NULL,
    p_sync_parameters           IN apex_exec.t_parameters DEFAULT apex_exec.c_empty_parameters,
    --
    p_application_id            IN NUMBER                 DEFAULT apex_application.g_flow_id );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_sync_static_id` | Static ID for this dynamic synchronization. |
| `p_sync_external_filter_expr` | External filter expression to use for this synchronization. |
| `p_sync_parameters` | REST Data Source parameters to use for this synchronization. |
| `p_application_id` | ID of the application containing the REST Data Source. |

Example

The following example performs a dynamic data synchronization with `Oracle APEX` as the REST Data Source's `query` parameter.

```
DECLARE
    l_parameters apex_exec.t_parameters;
BEGIN
    apex_exec.add_parameter(
        p_parameters      => l_parameters,
        p_name            => 'query',
        p_value           => 'Oracle APEX' );

    apex_session.create_session(
        p_app_id          => 100,
        p_page_id         => 1,
        p_username        => '...' );

    apex_rest_source_sync.dynamic_synchronize_data(
        p_module_static_id      => 'rest_movie',
        p_sync_static_id        => 'Sync_Oracle_APEX',
        p_sync_parameters       => l_parameters );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.3 ENABLE Procedure

This procedure enables synchronization for the REST Data Source.

Syntax

```
APEX_REST_SOURCE_SYNC.ENABLE (
  p_application_id    IN NUMBER    DEFAULT {current application id},
  p_module_static_id  IN VARCHAR2 )
```

Parameters

| Parameter            | Description                                 |
|:---------------------|:--------------------------------------------|
| `p_application_id`   | (Optional) The application ID.              |
| `p_module_static_id` | Static ID to identify the REST Data Source. |

Example

The following example enables synchronization for the `rest_movie` REST Data Source in application 152.

```
BEGIN
    apex_rest_source_sync.enable(
    p_application_id => 152,
    p_module_static_id => 'rest_movie' );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.4 GET_LAST_SYNC_TIMESTAMP Function

This function returns the timestamp of the last successful sync operation.

Syntax

```
APEX_REST_SOURCE_SYNC.GET_LAST_SYNC_TIMESTAMP (
    p_module_static_id  IN VARCHAR2,
    p_application_id    IN NUMBER   DEFAULT {current application id} )
    RETURN timestamp with time zone;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_application_id` | ID of the application containing the REST Data Source. |

Returns

This function returns the timestamp of the last successful sync operation.

Example

The following example returns the last synchronization timestamp of the "rest_movie" REST Data Source.

```
DECLARE
    l_last_sync_time timestamp with time zone;
BEGIN
    apex_session.create_session(
        p_app_id          => 100,
        p_page_id         => 1,
        p_username        => '...' );

    l_last_sync_time := apex_rest_source_sync.get_last_sync_timestamp(
                            p_module_static_id      => 'rest_movie' );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.5 GET_SYNC_TABLE_DEFINITION_SQL Function

This function generates SQL to synchronize the local table definition with the data profile.

Syntax

```
APEX_REST_SOURCE_SYNC.GET_SYNC_TABLE_DEFINITION_SQL (
    p_module_static_id      IN VARCHAR2,
    p_application_id        IN NUMBER   DEFAULT {current application id},
    p_include_drop_columns  IN BOOLEAN  DEFAULT FALSE )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_application_id` | (Optional) The application ID. |
| `p_include_drop_columns` | If `TRUE`, generate `ALTER TABLE DROP COLUMN` statements for columns which do not exist in the data profile any more. |

Example

The following example generates the SQL statements (`ALTER TABLE`) to bring the table in sync with the data profile after the REST Data Source named "rest_movie" has changed.

```
DECLARE
    l_sql varchar2(32767);
BEGIN
    apex_session.create_session(
        p_app_id          => 100,
        p_page_id         => 1,
        p_username        => '...' );
    l_sql := apex_rest_source_sync.get_sync_table_definition_sql(
        p_module_static_id      => 'rest_movie',
        p_include_drop_columns  => true );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.6 IS_RUNNING Function

This function determines whether synchronization for the given REST data source is currently running.

Syntax

```
APEX_REST_SOURCE_SYNC.IS_RUNNING (
    p_application_id    IN  NUMBER DEFAULT apex_application.g_flow_id,
    p_module_static_id  IN  VARCHAR2 )
    RETURN BOOLEAN;
```

Parameters

| Parameter            | Description                                          |
|:---------------------|:-----------------------------------------------------|
| `p_application_id`   | ID of the application which contains the automation. |
| `p_module_static_id` | Static ID of the automation to disable.              |

Returns

`TRUE` if synchronization is currently running. `FALSE` otherwise.

Example

The following example prints out whether synchronization is currently running.

```
BEGIN
    IF apex_rest_source_sync.is_running(
        p_application_id => 152,
        p_module_static_id => 'rest_movie' )
        THEN
            dbms_output.put_line( 'Synchronization is currently running.' );
        ELSE
            dbms_output.put_line( 'Synchronization is currently not running.' );
    END IF;
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.7 RESCHEDULE Procedure

This procedure sets the next scheduled execution timestamp of the synchronization.

Syntax

```
APEX_REST_SOURCE_SYNC.RESCHEDULE (
    p_application_id    IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_module_static_id  IN VARCHAR2,
    p_next_run_at       IN timestamp with time zone DEFAULT systimestamp );
```

Parameters

| Parameter            | Description                                    |
|:---------------------|:-----------------------------------------------|
| `p_application_id`   | (Optional): The application ID.                |
| `p_module_static_id` | Static ID to identify the REST Data Source.    |
| `p_next_run_at`      | Timestamp to execute the next synchronization. |

Example

The following example synchronizes the REST Data Source named "rest_movie" immediately.

```
BEGIN
    apex_session.create_session(
          p_app_id          => 100,
          p_page_id         => 1,
          p_username        => '...' );

    apex_rest_source_sync.reschedule(
        p_static_id       => 'rest_movie' );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.8 SYNCHRONIZE_DATA Procedure

This procedure executes the configured data synchronization to the local table. The SYNCHRONIZE_DATA procedure requires an APEX session context.

Syntax

```
APEX_REST_SOURCE_SYNC.SYNCHRONIZE_DATA (
    p_module_static_id      IN VARCHAR2,
    p_run_in_background     IN BOOLEAN  DEFAULT FALSE,
    p_application_id        IN NUMBER   DEFAULT {current application id} );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_run_in_background` | If `TRUE`, synchronization runs in the background as a one-time DBMS_SCHEDULER job. |
| `p_application_id` | ID of the application containing the REST Data Source. |

Example

The following example performs data synchronization immediately, independent of the next scheduled time.

```
BEGIN
    apex_session.create_session(
        p_app_id          => 100,
        p_page_id         => 1,
        p_username        => '...' );

    apex_rest_source_sync.synchronize_data(
        p_module_static_id      => 'rest_movie',
        p_run_in_background     => true );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")

------------------------------------------------------------------------

## 51.9 SYNCHRONIZE_TABLE_DEFINITION Procedure

This procedure synchronizes the local table definition with the data profile.

If the table does not exist, a `CREATE TABLE` statement executes. Table columns are created for visible data profile columns.

If the table already exists, a series of `ALTER TABLE` statements execute in order to align the table with the data profile.

Syntax

```
APEX_REST_SOURCE_SYNC.SYNCHRONIZE_TABLE_DEFINITION (
    p_module_static_id      IN VARCHAR2,
    p_application_id        IN NUMBER   DEFAULT {current application id},
    p_drop_unused_columns   IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module_static_id` | Static ID to identify the REST Data Source. |
| `p_application_id` | (Optional) The application ID. |
| `p_drop_unused_columns` | If `TRUE`, the procedure also drops columns which do not exist in the data profile any more. |

Example

The following example demonstrates bringing the local synchronization table in sync with the data profile after the REST Data Source named "rest_movie" has changed.

```
BEGIN
    apex_session.create_session(
        p_app_id          => 100,
        p_page_id         => 1,
        p_username        => '...' );
    apex_rest_source_sync.synchronize_table_definition(
        p_module_static_id     => 'rest_movie',
        p_drop_unused_columns  => true );
END;
```

**Parent topic:** [APEX_REST_SOURCE_SYNC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_REST_SOURCE_SYNC.html#GUID-0F08A144-A6A6-4EEE-9D20-49CA7C257B36 "The APEX_REST_SOURCE_SYNC package enables you to synchronize data between tables by merging rows instantly or at scheduled intervals.")
