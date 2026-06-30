<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 34 APEX_INSTANCE_DEBUG

Oracle APEX debug APIs for instance administrators.

- [DISABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.DISABLE-Procedure.html#GUID-60BEB1D5-B0C4-47F2-A050-FFB1BDAEC5E8)
- [ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.ENABLE-Procedure.html#GUID-71E02DF7-5007-486B-9FE3-90AD66B0BDDC)
- [IS_ENABLED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.IS_ENABLED-Function.html#GUID-57975F7B-2ACA-41A4-9E26-74B38EE7D959)
- [LIST_ACTIVITY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_ACTIVITY-Procedure.html#GUID-F755488F-C0D7-4950-AB56-832798C0968E)
- [LIST_MESSAGES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_MESSAGES-Procedure.html#GUID-E918EF29-8802-4A98-B504-B12777918720)
- [LIST_PAGE_VIEWS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.LIST_PAGE_VIEWS-Procedure.html#GUID-1302CE84-860E-4C3C-9ABA-3DEDD09BE539)

------------------------------------------------------------------------

## 34.1 DISABLE Procedure

This procedure disables instance debug level.

Syntax

```
APEX_INSTANCE_DEBUG.DISABLE;
```

Example

Disable instance debug mode.

```
SQL> set lines 190 serveroutput on size unlimited
SQL> exec apex_instance_debug.disable;
SQL> commit;
```

**Parent topic:** [APEX_INSTANCE_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html#GUID-40FB5D60-7A76-4E48-B097-84D5A0BF2FC9)

------------------------------------------------------------------------

## 34.2 ENABLE Procedure

This procedure enables instance debug level.

Syntax

```
APEX_INSTANCE_DEBUG.ENABLE;
```

Example

Enable instance debug mode.

```
SQL> set lines 190 serveroutput on size unlimited
SQL> exec apex_instance_debug.enable;
SQL> commit;
```

**Parent topic:** [APEX_INSTANCE_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html#GUID-40FB5D60-7A76-4E48-B097-84D5A0BF2FC9)

------------------------------------------------------------------------

## 34.3 IS_ENABLED Function

This procedure returns whether instance debug is enabled.

Syntax

```
APEX_INSTANCE_DEBUG.IS_ENABLED
    RETURN BOOLEAN;
```

Example

Disable instance debug if it is enabled.

```
begin
    if apex_instance_debug.is_enabled then
        apex_instance_debug.disable;
        commit;
    end if;
end;
```

**Parent topic:** [APEX_INSTANCE_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html#GUID-40FB5D60-7A76-4E48-B097-84D5A0BF2FC9)

------------------------------------------------------------------------

## 34.4 LIST_ACTIVITY Procedure

This script prints recent activity log entries.

Syntax

```
APEX_INSTANCE_DEBUG.LIST_ACTIVITY (
    p_from_date      IN DATE     DEFAULT sysdate-5,
    p_to_date        IN DATE     DEFAULT sysdate,
    p_app_id         IN NUMBER   DEFAULT NULL,
    p_page_id        IN NUMBER   DEFAULT NULL,
    p_workspace_name IN VARCHAR2 DEFAULT NULL,
    p_session_id     IN NUMBER   DEFAULT NULL,
    p_user           IN VARCHAR2 DEFAULT NULL,
    p_ip_address     IN VARCHAR2 DEFAULT NULL,
    p_not_ip_address IN VARCHAR2 DEFAULT NULL,
    p_error          IN VARCHAR2 DEFAULT NULL,
    p_debug          IN NUMBER   DEFAULT NULL );
```

Paramaters

| Parameter | Description |
|:---|:---|
| `p_from_date` | Start date/time of log entries (default sysdate - 5 min). |
| `p_to_date` | Start date/time of log entries (default `sysdate`). |
| `p_app_id` | Restrict to the given application ID (default null). |
| `p_page_id` | Restrict to the given application ID (default null). |
| `p_workspace_name` | Restrict to the given workspace name (default null). |
| `p_session_id` | Restrict to the given session ID (default null). |
| `p_user` | Restrict to the given user (default null). |
| `p_ip_address` | Restrict to log entries which match the given IP address using LIKE (default null). |
| `p_not_ip_address` | Restrict to log entries which do not match the given IP address using LIKE (default null). |
| `p_error` | Restrict to log entries which match the given p_error using LIKE (default null). |
| `p_debug` | Restrict to log entries with debug level `<= p_debug` (default null). |

Example

List activity log entries of the last two days which had errors.

```
exec apex_instance_debug.list_activity(p_from_date=>sysdate-2,p_error=>'%')
```

**Parent topic:** [APEX_INSTANCE_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html#GUID-40FB5D60-7A76-4E48-B097-84D5A0BF2FC9)

------------------------------------------------------------------------

## 34.5 LIST_MESSAGES Procedure

List all messages for a given page view ID. Each Oracle APEX request which had debug enabled gets an unique page view ID.

Syntax

```
APEX_INSTANCE_DEBUG.LIST_MESSAGES (
    p_page_view_id           IN              NUMBER);
```

Parameters

| Parameter        | Description       |
|:-----------------|:------------------|
| `p_page_view_id` | The page view ID. |

Example

Print individual messages for page view ID `1234`, spool the output to file `1234.lst`, and open the file in an editor.

```
SQL> set lines 190 serveroutput on size unlimited
SQL> spool 1234.lst
SQL> exec apex_instance_debug.list_messages(1234);
SQL> spool off
SQL> ed 1234.lst
```

**Parent topic:** [APEX_INSTANCE_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html#GUID-40FB5D60-7A76-4E48-B097-84D5A0BF2FC9)

------------------------------------------------------------------------

## 34.6 LIST_PAGE_VIEWS Procedure

This procedure emits a report of the most recent Oracle APEX requests which had debug enabled.

Syntax

```
APEX_INSTANCE_DEBUG.LIST_PAGE_VIEWS (
    p_session_id             IN              NUMBER DEFAULT NULL,
    p_max_rows               IN              NUMBER DEFAULT 30,
    p_show_d2                IN              BOOLEAN DEFAULT FALSE);
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_session_id` | Optionally restrict output to the given APEX session. |
| `p_max_rows` | Restrict output to the given number of rows (default 30). The value must be between 1 and 10,000. |
| `p_show_d2` | If `TRUE`, emit `@d2` prefix before page view IDs, to easily copy/paste in SQL. The `d1.sql` and `ds.sql` scripts set this parameter. |

Example

List 30 most recent page views.

```
SQL> set lines 190 serveroutput on size unlimited
SQL> exec apex_instance_debug.list_page_views;
```

**Parent topic:** [APEX_INSTANCE_DEBUG](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_INSTANCE_DEBUG.html#GUID-40FB5D60-7A76-4E48-B097-84D5A0BF2FC9)
