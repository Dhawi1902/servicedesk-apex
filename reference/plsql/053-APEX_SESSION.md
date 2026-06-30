<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 53 APEX_SESSION

The APEX_SESSION package enables you to configure Oracle APEX sessions.

- [ATTACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ATTACH-Procedure.html#GUID-27465355-B6EB-412A-BFAC-F63FCDB396E0)
- [CREATE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SESSION-Procedure.html#GUID-348C879F-3B45-4F4E-8641-518C711CE76F)
- [DETACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DETACH-Procedure.html#GUID-95C1F12F-7B2A-4E86-B244-A9801B95BB72)
- [DELETE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SESSION-Procedure.html#GUID-E37F7000-633D-466C-BA8F-0051EDB7A0CC)
- [SET_DEBUG Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_DEBUG-Procedure.html#GUID-9E5FC479-1B37-4B77-B992-E82720CB95FE)
- [SET_TENANT_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TENANT_ID.html#GUID-8FBB2B94-11A0-4A11-80DA-BA0FCA504503)
- [SET_TRACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TRACE-Procedure.html#GUID-5C2CADBE-A9A4-4B67-9863-D655CEA0E962)

------------------------------------------------------------------------

## 53.1 ATTACH Procedure

This procedure sets the environment and runs the Initialization PL/SQL Code based on the given application and current session.

Syntax

```
APEX_SESSION.ATTACH (
    p_app_id        IN  NUMBER,
    p_page_id       IN  NUMBER,
    p_session_id    IN  NUMBER );
```

Parameters

| Parameters     | Description           |
|:---------------|:----------------------|
| `p_app_id`     | The application ID.   |
| `p_page_id`    | The application page. |
| `p_session_id` | The session ID.       |

Raises

- `WWV_FLOW.APP_NOT_FOUND_ERR`: Application does not exist or caller has no access to the workspace.
- `APEX.SESSION.EXPIRED`: Your session has ended.
- `SECURITY_GROUP_ID_INVALID`: Security Group ID (your workspace identity) is invalid.

Example

Attach to session `12345678` for application `100` page `1`, then print the app ID and session ID.

```
begin
    apex_session.attach (
        p_app_id     => 100,
        p_page_id    => 1,
        p_session_id => 12345678 );
    sys.dbms_output.put_line (
        'App is '||v('APP_ID')||', session is '||v('APP_SESSION'));
end;
```

See Also:

- [CREATE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SESSION-Procedure.html#GUID-348C879F-3B45-4F4E-8641-518C711CE76F)
- [DELETE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SESSION-Procedure.html#GUID-E37F7000-633D-466C-BA8F-0051EDB7A0CC)
- [DETACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DETACH-Procedure.html#GUID-95C1F12F-7B2A-4E86-B244-A9801B95BB72)

**Parent topic:** [APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)

------------------------------------------------------------------------

## 53.2 CREATE_SESSION Procedure

This procedure creates a new session for the given application, sets the environment, and runs the application's Initialization PL/SQL Code.

Syntax

```
APEX_SESSION.CREATE_SESSION (
   p_app_id                   IN NUMBER,
   p_page_id                  IN NUMBER,
   p_username                 IN VARCHAR2,
   p_call_post_authentication IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_app_id` | The application id. |
| `p_page_id` | The application page. |
| `p_username` | The session user. |
| `p_call_post_authentication` | If true, call post-authentication procedure. The default is false. |

Raises

`WWV_FLOW.APP_NOT_FOUND_ERR`: The application does not exist or the caller has no access to the workspace.

Example

Note:

The `CREATE_SESSION` procedure is not supported in the SQL Commands and SQL Scripts tools within SQL Workshop.

This example creates a session for EXAMPLE_USER in application 100 page 1, then prints the app id and session id.

```
begin
    apex_session.create_session (
    p_app_id   => 100,
    p_page_id  => 1,
    p_username => 'EXAMPLE_USER' );
    sys.dbms_output.put_line (
   'App is '||v('APP_ID')||', session is '||v('APP_SESSION'));
 end;
```

See Also:

- [DELETE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SESSION-Procedure.html#GUID-E37F7000-633D-466C-BA8F-0051EDB7A0CC)
- [ATTACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ATTACH-Procedure.html#GUID-27465355-B6EB-412A-BFAC-F63FCDB396E0)
- [DETACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DETACH-Procedure.html#GUID-95C1F12F-7B2A-4E86-B244-A9801B95BB72)

**Parent topic:** [APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)

------------------------------------------------------------------------

## 53.3 DETACH Procedure

This procedure detaches from the current session, resets the environment and runs the application's Cleanup PL/SQL Code. This procedure does nothing if no session is attached.

Syntax

```
APEX_SESSION.DETACH;
```

Example

Detach from the current session.

```
BEGIN
    apex_session.detach;
END;
```

See Also:

- [CREATE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SESSION-Procedure.html#GUID-348C879F-3B45-4F4E-8641-518C711CE76F)
- [DELETE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_SESSION-Procedure.html#GUID-E37F7000-633D-466C-BA8F-0051EDB7A0CC)
- [ATTACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ATTACH-Procedure.html#GUID-27465355-B6EB-412A-BFAC-F63FCDB396E0)

**Parent topic:** [APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)

------------------------------------------------------------------------

## 53.4 DELETE_SESSION Procedure

This procedure deletes the session with the given ID. If the session is currently attached, call the application's Cleanup PL/SQL Code and reset the environment.

Syntax

```
APEX_SESSION.DELETE_SESSION (
    p_session_id    IN  NUMBER  DEFAULT apex_application.g_instance );
```

Parameters

| Parameters     | Description     |
|:---------------|:----------------|
| `p_session_id` | The session ID. |

Raises

- `APEX.SESSION.EXPIRED`: Your session has ended.
- `SECURITY_GROUP_ID_INVALID`: Security Group ID (your workspace identity) is invalid.

Example

The following example deletes session `12345678`.

```
BEGIN
    apex_session.delete_session (
    p_session_id => 12345678 );
END;
```

See Also:

- [CREATE_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_SESSION-Procedure.html#GUID-348C879F-3B45-4F4E-8641-518C711CE76F)
- [ATTACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ATTACH-Procedure.html#GUID-27465355-B6EB-412A-BFAC-F63FCDB396E0)
- [DETACH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DETACH-Procedure.html#GUID-95C1F12F-7B2A-4E86-B244-A9801B95BB72)

**Parent topic:** [APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)

------------------------------------------------------------------------

## 53.5 SET_DEBUG Procedure

This procedure sets debug level for all future requests in a session.

Syntax

```
APEX_SESSION.SET_DEBUG (
    p_session_id    IN NUMBER DEFAULT apex_application.g_instance,
    p_level         IN apex_debug.t_log_level );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d255419e71" style="text-align: left;" data-valign="bottom">Parameters</th>
<th id="d255419e73" style="text-align: left;" data-valign="bottom">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d255419e77" style="text-align: left;" data-valign="top" headers="d255419e71 "><code class="codeph">p_session_id</code></td>
<td style="text-align: left;" data-valign="top" headers="d255419e77 d255419e73 "><p>The session ID.</p>
<p>Note: The session must belong to the current workspace or the caller must be able to set the session's workspace.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d255419e88" style="text-align: left;" data-valign="top" headers="d255419e71 "><code class="codeph">p_level</code></td>
<td style="text-align: left;" data-valign="top" headers="d255419e88 d255419e73 ">The debug level. NULL disables debug, 1-9 sets a debug level.</td>
</tr>
</tbody>
</table>

Example 1

This example shows how to set debug for session 1234 to INFO level.

```
apex_session.set_debug (
    p_session_id => 1234,
         p_level => apex_debug.c_log_level_info );
commit;
```

Example 2

This example shows how to disable debug in session 1234.

```
apex_session.set_debug (
    p_session_id => 1234,
         p_level => null );
commit;
```

See Also:

- [ENABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DEBUG-ENABLE-Procedure.html#GUID-EFBF6BEB-2BE4-4AC2-9C89-B4CD4867394A)
- [DISABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE-Procedure.html#GUID-761FDBC4-3140-430B-AA83-C24D219E769B)

**Parent topic:** [APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)

------------------------------------------------------------------------

## 53.6 SET_TENANT_ID Procedure

This procedure is used to associate a session with a tenant ID which can be used for building multitenant Oracle APEX applications. Once set, the value of the current tenant can be retrieved using the built-in `APP_TENANT_ID`.

Syntax

```
APEX_SESSION.SET_TENANT_ID (
    p_tenant_id IN VARCHAR2 );
```

Parameters

| Parameter     | Description                               |
|:--------------|:------------------------------------------|
| `p_tenant_id` | The tenant ID to associate with a session |

Raises

`PE.DISPLAY_GROUP.SESSION_NOT_VALID`: The session doesn't exist.

`WWV_FLOW_SESSION_API.TENANT_ID_EXISTS`: The tenant ID has already been set.

Example

```
begin
    apex_session.set_tenant_id (
        p_tenant_id => 'ABC');

end;
```

**Parent topic:** [APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)

------------------------------------------------------------------------

## 53.7 SET_TRACE Procedure

This procedure sets trace mode in all future requests of a session.

Syntax

```
APEX_SESSION.SET_TRACE (
    p_session_id    IN NUMBER  DEFAULT apex_application.g_instance,
    p_mode          IN VARCHAR2 );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d255788e71" style="text-align: left;" data-valign="bottom">Parameters</th>
<th id="d255788e73" style="text-align: left;" data-valign="bottom">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d255788e77" style="text-align: left;" data-valign="top" headers="d255788e71 "><code class="codeph">p_session_id</code></td>
<td style="text-align: left;" data-valign="top" headers="d255788e77 d255788e73 "><p>The session ID.</p>
<p>The session must belong to the current workspace or the caller must be able to set the session's workspace.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d255788e86" style="text-align: left;" data-valign="top" headers="d255788e71 "><code class="codeph">p_level</code></td>
<td style="text-align: left;" data-valign="top" headers="d255788e86 d255788e73 ">The trace mode. NULL disables trace, SQL enables SQL trace.</td>
</tr>
</tbody>
</table>

Example 1

This example shows how to enable trace in requests for session 1234.

```
apex_session.set_trace (
    p_session_id => 1234,
          p_mode => 'SQL' );
commit;
```

Example 2

This example shows how to disable trace in requests for session 1234.

```
apex_session.set_trace (
    p_session_id => 1234,
          p_mode => null );
commit;
```

**Parent topic:** [APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)
