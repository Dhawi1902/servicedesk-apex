<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 18  APEX_CUSTOM_AUTH

You can use the `APEX_CUSTOM_AUTH` package to perform various operations related to authentication and session management.

- [APPLICATION_PAGE_ITEM_EXISTS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPLICATION_PAGE_ITEM_EXISTS-Function.html#GUID-7252D07F-C762-4894-B8C0-09284B62177F)
- [CURRENT_PAGE_IS_PUBLIC Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CURRENT_PAGE_IS_PUBLIC-Function.html#GUID-8101AA16-D385-47BF-8B52-8DF0A39D0ACA)
- [DEFINE_USER_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEFINE_USER_SESSION-Procedure.html#GUID-074370BA-C80B-4C2D-BEB8-12FE895D48CB)
- [GET_COOKIE_PROPS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_COOKIE_PROPS-Procedure.html#GUID-F21A8AC5-49DE-4E9D-BF33-0E1F3CACB7EA)
- [GET_LDAP_PROPS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LDAP_PROPS-Procedure.html#GUID-D9070BB8-009F-4BCE-914A-3D6C8FAECFCA)
- [GET_NEXT_SESSION_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_NEXT_SESSION_ID-Function.html#GUID-EFD81F68-2FA1-4EE3-974F-4B22C456FD16)
- [GET_SECURITY_GROUP_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SECURITY_GROUP_ID-Function.html#GUID-C0A955EC-D940-4898-8A8F-F3655C045540)
- [GET_SESSION_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_ID-Function.html#GUID-A5136D4E-FFE0-4498-BA8B-4CD008F5ABE5)
- [GET_SESSION_ID_FROM_COOKIE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SESSION_ID_FROM_COOKIE-Function.html#GUID-5465B60E-5CC5-43CE-94E9-1BC8E69E7704)
- [GET_USER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER-Function.html#GUID-8ED1A03E-5D85-4DD9-80CE-EC2370D1B318)
- [GET_USERNAME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USERNAME-Function.html#GUID-0D7A6D5A-F46F-49D4-98B1-43F98A031DBA)
- [IS_SESSION_VALID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_SESSION_VALID-Function.html#GUID-DC6EACB2-80B1-47ED-BBF1-2ABECC065880)
- [LDAP_DNPREP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LDAP_DNPREP-Function.html#GUID-B26FE8AE-D110-47D4-9453-77E15D03C652)
- [LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure-2.html#GUID-FCB0BBAE-9587-4052-87A5-5A6BA81FB1AD)
- [LOGOUT Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGOUT-Procedure-DEPRECATED.html#GUID-8EB16B9D-53F9-41A6-B0E2-AAB55D0D1425)
- [POST_LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POST_LOGIN-Procedure-2.html#GUID-4F23BA8C-909E-46C0-A015-032BBE256D5B)
- [SESSION_ID_EXISTS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SESSION_ID_EXISTS-Function.html#GUID-10D0470F-29A5-4920-924D-3BF231887413)
- [SET_SESSION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_ID-Procedure.html#GUID-3FE8E03F-EDE3-48A3-8192-FEB154E32CD7)
- [SET_SESSION_ID_TO_NEXT_VALUE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_ID_TO_NEXT_VALUE-Procedure.html#GUID-0B9D256F-84E1-46B6-B9C1-BA6D16E567E5)
- [SET_USER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER-Procedure.html#GUID-19B6B91C-9471-4DFB-993F-A767F70909F1)

------------------------------------------------------------------------

## 18.1 APPLICATION_PAGE_ITEM_EXISTS Function

This function checks for the existence of a page-level item within the current page of an application. This function requires the parameter `p_item_name`. This function returns a Boolean value (TRUE or FALSE).

Syntax

```
APEX_CUSTOM_AUTH.APPLICATION_PAGE_ITEM_EXISTS (
    p_item_name   IN    VARCHAR2 )
RETURN BOOLEAN;
```

Parameters

| Parameter     | Description                      |
|:--------------|:---------------------------------|
| `p_item_name` | The name of the page-level item. |

Example

The following example checks for the existence of a page-level item, `ITEM_NAME`, within the current page of the application.

```
DECLARE
    L_VAL BOOLEAN;
BEGIN
   L_VAL := APEX_CUSTOM_AUTH.APPLICATION_PAGE_ITEM_EXISTS(:ITEM_NAME);
    IF L_VAL THEN
        htp.p('Item Exists');
    ELSE
        htp.p('Does not Exist');
    END IF;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.2 CURRENT_PAGE_IS_PUBLIC Function

This function checks whether the current page's authentication attribute is set to Page Is Public and returns a Boolean value (TRUE or FALSE).

Syntax

```
APEX_CUSTOM_AUTH.CURRENT_PAGE_IS_PUBLIC
RETURN BOOLEAN;
```

Example

The following example checks whether the current page in an application is public.

```
DECLARE
    L_VAL BOOLEAN;
BEGIN
    L_VAL := APEX_CUSTOM_AUTH.CURRENT_PAGE_IS_PUBLIC;
    IF L_VAL THEN
        htp.p('Page is Public');
    ELSE
        htp.p('Page is not Public');
    END IF;
END;
```

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-5CF0B715-7A6B-4A49-B14B-471CCA2C775C" target="_blank">Editing Page Attributes</a> in Oracle APEX App Builder User’s Guide.

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.3 DEFINE_USER_SESSION Procedure

This procedure combines the `SET_USER` and `SET_SESSION_ID` procedures to create one call.

Syntax

```
APEX_CUSTOM_AUTH.DEFINE_USER_SESSION (
    p_user         IN    VARCHAR2,
    p_session_id   IN    NUMBER )
```

Parameters

| Parameter      | Description             |
|:---------------|:------------------------|
| `p_user`       | Login name of the user. |
| `p_session_id` | The session ID.         |

Example

In the following example, a new session ID is generated and registered along with the current application user.

```
APEX_CUSTOM_AUTH.DEFINE_USER_SESSION (
    :APP_USER,
    APEX_CUSTOM_AUTH.GET_NEXT_SESSION_ID);
```

See Also:

- [SET_USER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER-Procedure.html#GUID-19B6B91C-9471-4DFB-993F-A767F70909F1)
- [SET_SESSION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_ID-Procedure.html#GUID-3FE8E03F-EDE3-48A3-8192-FEB154E32CD7)

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.4 GET_COOKIE_PROPS Procedure

This procedure obtains the properties of the session cookie used in the current authentication scheme for the specified application. These properties can be viewed directly in the App Builder by viewing the authentication scheme cookie attributes.

Syntax

```
APEX_CUSTOM_AUTH.GET_COOKIE_PROPS (
    p_app_id                       IN  NUMBER,
    p_cookie_name                  OUT VARCHAR2,
    p_cookie_path                  OUT VARCHAR2,
    p_cookie_domain                OUT VARCHAR2
    p_secure                 OUT BOOLEAN )
```

Parameters

| Parameter         | Description                                 |
|:------------------|:--------------------------------------------|
| `p_app_id`        | An application ID in the current workspace. |
| `p_cookie_name`   | The cookie name.                            |
| `p_cookie_path`   | The cookie path.                            |
| `p_cookie_domain` | The cookie domain.                          |
| `p_secure`        | Flag to set secure property of cookie.      |

Example

The following example retrieves the session cookie values used by the authentication scheme of the current application.

```
DECLARE
    l_cookie_name   varchar2(256);
    l_cookie_path   varchar2(256);
    l_cookie_domain varchar2(256);
    l_secure        boolean;
BEGIN
    APEX_CUSTOM_AUTH.GET_COOKIE_PROPS(
        p_app_id => 2918,
        p_cookie_name => l_cookie_name,
        p_cookie_path => l_cookie_path,
        p_cookie_domain => l_cookie_domain,
        p_secure => l_secure);
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.5 GET_LDAP_PROPS Procedure

This procedure obtains the LDAP attributes of the current authentication scheme for the current application. These properties can be viewed directly in App Builder by viewing the authentication scheme attributes.

Syntax

```
APEX_CUSTOM_AUTH.GET_LDAP_PROPS (
    p_ldap_host                OUT VARCHAR2,
    p_ldap_port                OUT INTEGER,
    p_use_ssl                  OUT VARCHAR2,
    p_use_exact_dn             OUT VARCHAR2,
    p_ldap_dn                  OUT VARCHAR2,
    p_search_filter            OUT VARCHAR2,
    p_ldap_edit_function       OUT VARCHAR2 )
```

Parameters

| Parameter              | Description                                     |
|:-----------------------|:------------------------------------------------|
| `p_ldap_host`          | LDAP host name.                                 |
| `p_ldap_port`          | LDAP port number.                               |
| `p_use_ssl`            | Whether SSL is used.                            |
| `p_use_exact_dn`       | Whether exact distinguished names are used.     |
| `p_search_filter`      | The search filter used if exact DN is not used. |
| `p_ldap_dn`            | LDAP DN string.                                 |
| `p_ldap_edit_function` | LDAP edit function name.                        |

Example

The following example retrieves the LDAP attributes associated with the current application.

```
DECLARE
    l_ldap_host          VARCHAR2(256);
    l_ldap_port          INTEGER;
    l_use_ssl            VARCHAR2(1);
    l_use_exact_dn       VARCHAR2(1);
    l_search_filter      VARCHAR2(256);
    l_ldap_dn            VARCHAR2(256);
    l_ldap_edit_function VARCHAR2(256);
BEGIN
APEX_CUSTOM_AUTH.GET_LDAP_PROPS (
    p_ldap_host       => l_ldap_host,
    p_ldap_port       => l_ldap_port,
    p_use_ssl         => l_use_ssl,
    p_use_exact_dn    => l_use_exact_dn,
    p_search_filter   => l_search_filter,
    p_ldap_dn         => l_ldap_dn,
    p_ldap_edit_function => l_ldap_edit_function);
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.6 GET_NEXT_SESSION_ID Function

This function generates the next session ID from the Oracle APEX sequence generator. This function returns a number.

Syntax

```
APEX_CUSTOM_AUTH.GET_NEXT_SESSION_ID
RETURN NUMBER;
```

Example

The following example generates the next session ID and stores it into a variable.

```
DECLARE
    val number;
BEGIN
    val := apex_custom_auth.get_next_session_id;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.7 GET_SECURITY_GROUP_ID Function

This function returns a number with the value of the security group ID that identifies the workspace of the current user.

Syntax

```
APEX_CUSTOM_AUTH.GET_SECURITY_GROUP_ID
RETURN NUMBER;
```

Example

The following example retrieves the Security Group ID for the current user.

```
DECLARE
    VAL NUMBER;
BEGIN
    VAL := APEX_CUSTOM_AUTH.GET_SECURITY_GROUP_ID;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.8 GET_SESSION_ID Function

This function returns `APEX_APPLICATION.G_INSTANCE` global variable. `GET_SESSION_ID` returns a number.

Syntax

```
APEX_CUSTOM_AUTH.GET_SESSION_ID
RETURN NUMBER;
```

Example

The following example retrieves the session ID for the current user.

```
DECLARE
    VAL NUMBER;
BEGIN
    VAL := APEX_CUSTOM_AUTH.GET_SESSION_ID;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.9 GET_SESSION_ID_FROM_COOKIE Function

This function returns the Oracle APEX session ID located by the session cookie in a page request in the current browser session.

Syntax

```
APEX_CUSTOM_AUTH.GET_SESSION_ID_FROM_COOKIE
RETURN NUMBER;
```

Example

The following example retrieves the session ID from the current session cookie.

```
DECLARE
    val number;
BEGIN
    val := apex_custom_auth.get_session_id_from_cookie;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.10 GET_USER Function

This function returns the `APEX_APPLICATION.G_USER` global variable (`VARCHAR2`).

Syntax

```
APEX_CUSTOM_AUTH.GET_USER
RETURN VARCHAR2;
```

Example

The following example retrieves the username associated with the current session.

```
DECLARE
    VAL VARCHAR2(256);
BEGIN
    VAL := APEX_CUSTOM_AUTH.GET_USER;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.11 GET_USERNAME Function

This function returns user name registered with the current Oracle APEX session in the internal sessions table. This user name is usually the same as the authenticated user running the current page.

Syntax

```
APEX_CUSTOM_AUTH.GET_USERNAME
RETURN VARCHAR2;
```

Example

The following example retrieves the username registered with the current application session.

```
DECLARE
    val varchar2(256);
BEGIN
    val := apex_custom_auth.get_username;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.12 IS_SESSION_VALID Function

This function is a Boolean result obtained from executing the current application's authentication scheme to determine if a valid session exists. This function returns the Boolean result of the authentication scheme's page sentry.

Syntax

```
APEX_CUSTOM_AUTH.IS_SESSION_VALID
RETURN BOOLEAN;
```

Example

The following example verifies whether the current session is valid.

```
DECLARE
    L_VAL BOOLEAN;
BEGIN
    L_VAL := APEX_CUSTOM_AUTH.IS_SESSION_VALID;
    IF L_VAL THEN
        htp.p('Valid');
    ELSE
        htp.p('Invalid');
    END IF;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.13 LDAP_DNPREP Function

This function replaces any occurrences of a period character ( `.` ) with an underscore character ( `_` ) in the passed in `p_username` value and then returns that newly massaged username value.

Syntax

```
APEX_CUSTOM_AUTH.LDAP_DNPREP (
    p_username IN VARCHAR2 )
    RETURN VARCHAR2;
IS
BEGIN
    RETURN replace(p_username,'.','_');
END ldap_dnprep;
```

Parameters

| Parameter    | Description                    |
|:-------------|:-------------------------------|
| `p_username` | Username value of an end user. |

Example

The following example demonstrates how to return a username formatted for LDAP authentication.

```
return apex_custom_auth.ldap_dnprep(p_username =>
      :USERNAME);
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.14 LOGIN Procedure

Also referred to as the Login API, this procedure performs authentication and session registration.

Syntax

```
APEX_CUSTOM_AUTH.LOGIN (
    p_uname         IN  VARCHAR2  DEFAULT NULL,
    p_password      IN  VARCHAR2  DEFAULT NULL,
    p_session_id    IN  VARCHAR2  DEFAULT NULL,
    p_app_page      IN  VARCHAR2  DEFAULT NULL,
    p_entry_point   IN  VARCHAR2  DEFAULT NULL,
    p_preserve_case IN  BOOLEAN   DEFAULT FALSE )
```

Note:

Do not use bind variable notations for `p_session_id` argument.

Parameter

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d78749e82" style="text-align: left;" data-valign="bottom" width="29%">Parameter</th>
<th id="d78749e84" style="text-align: left;" data-valign="bottom" width="71%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d78749e88" style="text-align: left;" data-valign="top" width="29%" headers="d78749e82 "><code class="codeph">p_uname</code></td>
<td style="text-align: left;" data-valign="top" width="71%" headers="d78749e88 d78749e84 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d78749e94" style="text-align: left;" data-valign="top" width="29%" headers="d78749e82 "><code class="codeph">p_password</code></td>
<td style="text-align: left;" data-valign="top" width="71%" headers="d78749e94 d78749e84 ">Clear text user password.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d78749e100" style="text-align: left;" data-valign="top" width="29%" headers="d78749e82 "><code class="codeph">p_session_id</code></td>
<td style="text-align: left;" data-valign="top" width="71%" headers="d78749e100 d78749e84 "><p>Current Oracle APEX session ID.</p>
<p>Do not use bind variable notations for <code class="codeph">p_session_id</code> argument.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d78749e115" style="text-align: left;" data-valign="top" width="29%" headers="d78749e82 "><code class="codeph">p_app_page</code></td>
<td style="text-align: left;" data-valign="top" width="71%" headers="d78749e115 d78749e84 ">Current application ID. After login page separated by a colon (:).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d78749e121" style="text-align: left;" data-valign="top" width="29%" headers="d78749e82 "><code class="codeph">p_entry_point</code></td>
<td style="text-align: left;" data-valign="top" width="71%" headers="d78749e121 d78749e84 ">Internal use only.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d78749e127" style="text-align: left;" data-valign="top" width="29%" headers="d78749e82 "><code class="codeph">p_preserve_case</code></td>
<td style="text-align: left;" data-valign="top" width="71%" headers="d78749e127 d78749e84 ">If <code class="codeph">TRUE</code>, do not include <code class="codeph">p_uname</code> in uppercase during session registration.</td>
</tr>
</tbody>
</table>

Example

The following example performs the user authentication and session registration.

```
BEGIN
    APEX_CUSTOM_AUTH.LOGIN (
        p_uname       => 'FRANK',
        p_password    => 'secret99',
        p_session_id  => V('APP_SESSION'),
        p_app_page    => :APP_ID||':1');
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.15 LOGOUT Procedure (Deprecated)

Note:

This procedure is deprecated. Use `APEX_AUTHENTICATION.LOGOUT` instead.

This procedure causes a logout from the current session by unsetting the session cookie and redirecting to a new location.

Syntax

```
APEX_CUSTOM_AUTH.LOGOUT (
    p_this_app              IN VARCHAR2 DEFAULT NULL,
    p_next_app_page_sess    IN VARCHAR2 DEFAULT NULL,
    p_next_url              IN VARCHAR2 DEFAULT NULL )
```

Parameter

| Parameter | Description |
|:---|:---|
| `p_this_app` | Current application ID. |
| `p_next_app_page_sess` | Application and page number to redirect to. Separate multiple pages using a colon (:) and optionally followed by a colon (:) and the session ID (if control over the session ID is desired). |
| `p_next_url` | URL to redirect to (use this instead of `p_next_app_page_sess`). |

Example

The following example causes a logout from the current session and redirects to page `99` of application `1000`.

```
BEGIN
    APEX_CUSTOM_AUTH.LOGOUT (
        p_this_app            => '1000',
        p_next_app_page_sess  => '1000:99');
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.16 POST_LOGIN Procedure

This procedure performs session registration, assuming the authentication step has been completed. It can be called only from within an Oracle APEX application page context.

Syntax

```
APEX_CUSTOM_AUTH.POST_LOGIN (
    p_uname         IN VARCHAR2 DEFAULT NULL,
    p_session_id    IN VARCHAR2 DEFAULT NULL,
    p_app_page      IN VARCHAR2 DEFAULT NULL,
    p_preserve_case IN BOOLEAN  DEFAULT FALSE )
```

Parameter

| Parameter | Description |
|:---|:---|
| `p_uname` | Login name of user. |
| `p_session_id` | Current APEX session ID. |
| `p_app_page` | Current application ID and after login page separated by a colon (:). |
| `p_preserve_case` | If `TRUE`, do not include `p_uname` in uppercase during session registration. |

Example

The following example performs the session registration following a successful authentication.

```
BEGIN
    APEX_CUSTOM_AUTH.POST_LOGIN (
        p_uname       => 'FRANK',
        p_session_id  => V('APP_SESSION'),
        p_app_page    => :APP_ID||':1');
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.17 SESSION_ID_EXISTS Function

This function returns a Boolean result based on the global package variable containing the current Oracle APEX session ID.

Returns `TRUE` if the result is a positive number; returns `FALSE` if the result is a negative number.

Syntax

```
APEX_CUSTOM_AUTH.SESSION_ID_EXISTS
RETURN BOOLEAN;
```

Example

The following example checks whether the current session ID is valid and exists.

```
DECLARE
    l_val BOOLEAN;
BEGIN
    L_VAL := APEX_CUSTOM_AUTH.SESSION_ID_EXISTS;
    IF l_val THEN
        htp.p('Exists');
    ELSE
        htp.p('Does not exist');
    END IF;
END;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.18 SET_SESSION_ID Procedure

This procedure sets `APEX_APPLICATION.G_INSTANCE` global variable. This procedure requires the parameter `P_SESSION_ID` (`NUMBER`) which specifies a session ID.

Syntax

```
APEX_CUSTOM_AUTH.SET_SESSION_ID (
    p_session_id    IN    NUMBER )
```

Parameters

| Parameter      | Description                      |
|:---------------|:---------------------------------|
| `p_session_id` | The session ID to be registered. |

Example

In the following example, the session ID value registered is retrieved from the browser cookie.

```
APEX_CUSTOM_AUTH.SET_SESSION_ID(APEX_CUSTOM_AUTH.GET_SESSION_ID_FROM_COOKIE);
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.19 SET_SESSION_ID_TO_NEXT_VALUE Procedure

This procedure combines the operation of `GET_NEXT_SESSION_ID` and `SET_SESSION_ID` in one call.

Syntax

```
APEX_CUSTOM_AUTH.SET_SESSION_ID_TO_NEXT_VALUE;
```

Example

In the following example, if the current session is not valid, a new session ID is generated and registered.

```
IF NOT APEX_CUSTOM_AUTH.SESSION_ID_EXISTS THEN
    APEX_CUSTOM_AUTH.SET_SESSION_ID_TO_NEXT_VALUE;
END IF;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)

------------------------------------------------------------------------

## 18.20 SET_USER Procedure

This procedure sets the `APEX_APPLICATION.G_USER` global variable. `SET_USER` requires the parameter `P_USER` (`VARCHAR2`) which defines a user ID.

Syntax

```
APEX_CUSTOM_AUTH.SET_USER (
    p_user   IN    VARCHAR2 )
```

Parameters

| Parameter | Description                   |
|:----------|:------------------------------|
| `p_user`  | The user ID to be registered. |

Example

In the following example, if the current application user is NOBODY, then JOHN.DOE is registered as the application user.

```
IF V('APP_USER') = 'NOBODY' THEN
    APEX_CUSTOM_AUTH.SET_USER('JOHN.DOE');
END IF;
```

**Parent topic:** [APEX_CUSTOM_AUTH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CUSTOM_AUTH.html#GUID-44772E73-B910-400C-869C-8CA23D3C88E0)
