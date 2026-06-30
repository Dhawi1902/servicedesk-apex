<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 10  APEX_AUTHENTICATION

The `APEX_AUTHENTICATION` package provides a public API for authentication plug-in.

- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION-Constants.html#GUID-0D2C76D2-2A42-42AD-A86F-F92508B64A8D)
- [CALLBACK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK-Procedure.html#GUID-69402EA6-F362-4D25-BBB4-B2C67C789E6E)
- [CALLBACK2 Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK2-Procedure.html#GUID-F67D5A66-2ECB-40A3-8FEE-7D2689C1E103)
- [GET_CALLBACK_URL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CALLBACK_URL-Function.html#GUID-313219AF-BA04-4367-9EA0-AB2946AD2689)
- [GET_LOGIN_USERNAME_COOKIE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LOGIN_USERNAME_COOKIE-Function.html#GUID-BD5AC718-4D89-4BD9-940E-FC88BF937945)
- [IS_AUTHENTICATED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_AUTHENTICATED-Function.html#GUID-A240AEBD-E694-43F1-A2E0-1F86DB484365)
- [IS_PUBLIC_USER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_PUBLIC_USER-Function.html#GUID-EF06EDD9-8483-4297-915F-59AA5853D342)
- [LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure.html#GUID-BAC65D9D-2964-4A9D-B3A7-9194FC917C97)
- [LOGOUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGOUT-Procedure.html#GUID-99FDBE2B-0369-4EAE-987E-4D7C44FA92AF)
- [PERSISTENT_AUTH_ENABLED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PERSISTENT_AUTH_ENABLED-Function.html#GUID-3EC703D9-7AA1-45E6-961F-290CBBC6E38C)
- [PERSISTENT_COOKIES_ENABLED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PERSISTENT_COOKIES_ENABLED-Function.html#GUID-D44AD38F-D649-4E1E-AA78-A09F8BB0E3C7)
- [POST_LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POST_LOGIN-Procedure.html#GUID-72781393-33B9-4992-816A-2DA44B30F3FC)
- [REMOVE_CURRENT_PERSISTENT_AUTH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_CURRENT_PERSISTENT_AUTH-Procedure.html#GUID-657B316B-DEEB-477E-9474-EB2635AAB3FF)
- [REMOVE_PERSISTENT_AUTH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_PERSISTENT_AUTH-Procedure.html#GUID-4E1EC64B-FCCB-40EA-9690-F653D10093E0)
- [SAML_CALLBACK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAML_CALLBACK-Procedure.html#GUID-8FF3F8FD-7029-469E-A8A4-3CFF30DDECBD)
- [SAML_METADATA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SAML_METADATA-Procedure.html#GUID-E13F39D2-CDB0-46B4-A842-4291A98F4247)
- [SEND_LOGIN_USERNAME_COOKIE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND_LOGIN_USERNAME_COOKIE-Procedure.html#GUID-CF193954-1F7C-4045-9148-EA9D42C6FC28)

------------------------------------------------------------------------

## 10.1 Constants

The APEX_AUTHENTICATION package uses the following constants.

```
c_default_username_cookie constant varchar2(30) := 'LOGIN_USERNAME_COOKIE';
```

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.2 CALLBACK Procedure

This procedure is the landing resource for external login pages. Call this procedure directly from the browser.

Tip:

The parameters which are marked with "OAuth2" should not be used for custom callback URLs. They are only used if this procedure is used for Social Sign-In. These parameters are defined by the OAuth2 spec.

Syntax

```
APEX_AUTHENTICATION.CALLBACK (
    --
    -- Custom callback parameters
    --
    p_session_id        IN NUMBER   DEFAULT NULL,
    p_app_id            IN NUMBER   DEFAULT NULL,
    p_ajax_identifier   IN VARCHAR2 DEFAULT NULL,
    p_page_id           IN NUMBER   DEFAULT NULL,
    p_x01               IN VARCHAR2 DEFAULT NULL,
    p_x02               IN VARCHAR2 DEFAULT NULL,
    p_x03               IN VARCHAR2 DEFAULT NULL,
    p_x04               IN VARCHAR2 DEFAULT NULL,
    p_x05               IN VARCHAR2 DEFAULT NULL,
    p_x06               IN VARCHAR2 DEFAULT NULL,
    p_x07               IN VARCHAR2 DEFAULT NULL,
    p_x08               IN VARCHAR2 DEFAULT NULL,
    p_x09               IN VARCHAR2 DEFAULT NULL,
    p_x10               IN VARCHAR2 DEFAULT NULL,
    --
    -- OAuth2-related parameters
    --
    state               IN VARCHAR2 DEFAULT NULL,
    code                IN VARCHAR2 DEFAULT NULL,
    error               IN VARCHAR2 DEFAULT NULL,
    error_description   IN VARCHAR2 DEFAULT NULL,
    error_uri           IN VARCHAR2 DEFAULT NULL,
    error_reason        IN VARCHAR2 DEFAULT NULL,
    error_code          IN VARCHAR2 DEFAULT NULL,
    error_message       IN VARCHAR2 DEFAULT NULL,
    authuser            IN VARCHAR2 DEFAULT NULL,
    session_state       IN VARCHAR2 DEFAULT NULL,
    prompt              IN VARCHAR2 DEFAULT NULL,
    hd                  IN VARCHAR2 DEFAULT NULL,
    scope               IN VARCHAR2 DEFAULT NULL,
    realmID             IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_session_id` | The Oracle APEX session identifier. |
| `p_app_id` | The database application identifier. |
| `p_page_id` | Optional page identifier. |
| `p_ajax_identifier` | The system generated Ajax identifier. See [GET_AJAX_IDENTIFIER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AJAX_IDENTIFIER-Function.html#GUID-4E48F89D-40A1-4EB3-92D7-ACC401B89F47). |
| `p_x01` through `p_x10` | Optional parameters that the external login passes to the authentication plugin. |
| `state` | OAuth2. |
| `code` | OAuth2. |
| `error` | OAuth2. |
| `error_description` | OAuth2. |
| `error_uri` | OAuth2. |
| `error_reason` | OAuth2. |
| `error_code` | OAuth2. |
| `error_message` | OAuth2. |
| `authuser` | OAuth2. |
| `session_state` | OAuth2. |
| `prompt` | OAuth2. |
| `hd` | OAuth2. |
| `scope` | OAuth2. |
| `realmID` | OAuth2. |

Example 1

In this example, a redirect is performed to an external login page and the callback is passed into APEX, which the external login redirects to after successful authentication.

```
DECLARE
    l_callback varchar2(4000) := apex_application.get_callback_url;
BEGIN
    sys.owa_util.redirect_url(
        'https://single-signon.example.com/my_custom_sso.login?p_on_success='||
        sys.utl_url.escape (
            url => l_callback,
            escape_reserved_chars => true );
    apex_application.stop_apex_engine;
END;
```

Example 2

In this example, an external login page saves user data in a shared table and performs a call back with a handle to the data. In APEX, the callback activates the authentication plugin's ajax code. It can take the value of `x01` and fetch the actual user data from the shared table.

```
---- create or replace package body my_custom_sso as
PROCEDURE LOGIN (
    p_on_success in varchar2 )
    IS
    l_login_id varchar2(32);
BEGIN
    l_login_id := rawtohex(sys.dbms_crypto.random(32));
    insert into login_data(id, username) values (l_login_id, 'JOE USER');
    sys.owa_util.redirect_url (
    p_on_success||'&p_x01='||l_login_id );
END;
---- end my_custom_sso;
```

See Also:

- [GET_CALLBACK_URL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CALLBACK_URL-Function.html#GUID-313219AF-BA04-4367-9EA0-AB2946AD2689)
- [CALLBACK2 Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK2-Procedure.html#GUID-F67D5A66-2ECB-40A3-8FEE-7D2689C1E103)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.3 CALLBACK2 Procedure

This procedure is an alternative to [CALLBACK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK-Procedure.html#GUID-69402EA6-F362-4D25-BBB4-B2C67C789E6E).

Syntax

```
APEX_AUTHENTICATION.CALLBACK2 (
    --
    -- Custom callback parameters
    --
    p_session_id        IN NUMBER   DEFAULT NULL,
    p_app_id            IN NUMBER   DEFAULT NULL,
    p_ajax_identifier   IN VARCHAR2 DEFAULT NULL,
    p_page_id           IN NUMBER   DEFAULT NULL,
    p_x01               IN VARCHAR2 DEFAULT NULL,
    p_x02               IN VARCHAR2 DEFAULT NULL,
    p_x03               IN VARCHAR2 DEFAULT NULL,
    p_x04               IN VARCHAR2 DEFAULT NULL,
    p_x05               IN VARCHAR2 DEFAULT NULL,
    p_x06               IN VARCHAR2 DEFAULT NULL,
    p_x07               IN VARCHAR2 DEFAULT NULL,
    p_x08               IN VARCHAR2 DEFAULT NULL,
    p_x09               IN VARCHAR2 DEFAULT NULL,
    p_x10               IN VARCHAR2 DEFAULT NULL,
    --
    -- OAuth2-related parameters
    --
    state               IN VARCHAR2 DEFAULT NULL,
    code                IN VARCHAR2 DEFAULT NULL,
    error               IN VARCHAR2 DEFAULT NULL,
    error_description   IN VARCHAR2 DEFAULT NULL,
    error_uri           IN VARCHAR2 DEFAULT NULL,
    error_reason        IN VARCHAR2 DEFAULT NULL,
    error_code          IN VARCHAR2 DEFAULT NULL,
    error_message       IN VARCHAR2 DEFAULT NULL,
    authuser            IN VARCHAR2 DEFAULT NULL,
    session_state       IN VARCHAR2 DEFAULT NULL,
    prompt              IN VARCHAR2 DEFAULT NULL,
    hd                  IN VARCHAR2 DEFAULT NULL,
    scope               IN VARCHAR2 DEFAULT NULL,
    realmID             IN VARCHAR2 DEFAULT NULL )
```

See Also:

[CALLBACK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK-Procedure.html#GUID-69402EA6-F362-4D25-BBB4-B2C67C789E6E)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.4 GET_CALLBACK_URL Function

This function is a plug-in helper function to return a URL that is used as a landing request for external login pages. When the browser sends the request, it triggers the authentication plug-in Ajax callback, which can be used to log the user in.

Syntax

```
APEX_AUTHENTICATION.GET_CALLBACK_URL (
    p_x01           IN VARCHAR2 DEFAULT NULL,
    p_x02           IN VARCHAR2 DEFAULT NULL,
    p_x03           IN VARCHAR2 DEFAULT NULL,
    p_x04           IN VARCHAR2 DEFAULT NULL,
    p_x05           IN VARCHAR2 DEFAULT NULL,
    p_x06           IN VARCHAR2 DEFAULT NULL,
    p_x07           IN VARCHAR2 DEFAULT NULL,
    p_x08           IN VARCHAR2 DEFAULT NULL,
    p_x09           IN VARCHAR2 DEFAULT NULL,
    p_x10           IN VARCHAR2 DEFAULT NULL,
    p_callback_name IN VARCHAR2 DEFAULT NULL )
    RETURN VARCHAR2;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_x01` through `p_x10` | Optional parameters that the external login passes to the authentication plugin. |
| `p_callback_name` | Optional public name of the callback, defaults to `apex_authentication.callback`. |

See Also:

[CALLBACK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CALLBACK-Procedure.html#GUID-69402EA6-F362-4D25-BBB4-B2C67C789E6E)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.5 GET_LOGIN_USERNAME_COOKIE Function

This function reads the cookie with the username from the default login page.

Syntax

```
GET_LOGIN_USERNAME_COOKIE (
    p_cookie_name IN VARCHAR2 DEFAULT C_DEFAULT_USERNAME_COOKIE )
    RETURN VARCHAR2;
```

Parameters

| Parameters      | Description                                               |
|:----------------|:----------------------------------------------------------|
| `p_cookie_name` | The cookie name which stores the username in the browser. |

Example

This example is a part of a "Before Header" process. It populates a text item `P101_USERNAME` with the cookie value and a switch `P101_REMEMBER_USERNAME` based on whether the cookie already has a value.

```
:P101_USERNAME          := apex_authentication.get_login_username_cookie;
:P101_REMEMBER_USERNAME := case when :P101_USERNAME is not null
                           then 'Y'
                           else 'N'
                           END;
```

See Also:

[SEND_LOGIN_USERNAME_COOKIE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND_LOGIN_USERNAME_COOKIE-Procedure.html#GUID-CF193954-1F7C-4045-9148-EA9D42C6FC28)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.6 IS_AUTHENTICATED Function

This function checks whether the user is authenticated in the current session and returns `TRUE` if the user is already logged in or `FALSE` if the user is not authenticated.

Syntax

```
APEX_AUTHENTICATION.IS_AUTHENTICATED
    RETURN BOOLEAN;
```

Parameters

None.

Example

This example uses `IS_AUTHENTICATED` to emit either the username if the user has already logged in or a notification if the user has not.

```
IF apex_authentication.is_authenticated THEN
    sys.htp.p(apex_escape.html(:APP_USER)||', you are known to the system');
ELSE
    sys.htp.p('Please sign in');
END IF;
```

See Also:

[IS_PUBLIC_USER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_PUBLIC_USER-Function.html#GUID-EF06EDD9-8483-4297-915F-59AA5853D342)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.7 IS_PUBLIC_USER Function

This function checks if the user is not authenticated in the session. Returns `FALSE` if the user is already logged in or `TRUE` if the user is not authenticated.

Syntax

```
APEX_AUTHENTICATION.IS_PUBLIC_USER
    RETURN BOOLEAN;
```

Parameters

None.

Example

This example uses `IS_PUBLIC_USER` to display either a notification if the user has not already logged in or the username if the user has not.

```
IF apex_authentication.is_public_user THEN
    sys.htp.p('Please sign in');
ELSE
    sys.htp.p(apex_escape.html(:APP_USER)||', you are known to the system');
END IF;
```

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.8 LOGIN Procedure

This procedure authenticates the user in the current session.

Login processing has the following steps:

1.  Run authentication scheme's pre-authentication procedure.
2.  Run authentication scheme's authentication function to check the user credentials (`p_username`, `p_password`), returning `TRUE` on success.
    - If result=true: run post-authentication procedure.
    - If result=true: save username in session table.
    - If result=true: set redirect URL to deep link.
    - If result=false: set redirect URL to current page, with an error message in the `notification_msg` parameter.
3.  Log authentication result.
4.  Redirect.

Syntax

```
APEX_AUTHENTICATION.LOGIN (
    p_username              IN VARCHAR2,
    p_password              IN VARCHAR2,
    p_uppercase_username    IN BOOLEAN  DEFAULT TRUE
    p_set_persistent_auth   IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_username` | The user's name. |
| `p_password` | The user's password. |
| `p_uppercase_username` | If `TRUE` then `p_username` is converted to uppercase. |
| `p_set_persistent_auth` | If `TRUE` then persistent authentication cookie is set. Persistent authentication needs to be enabled on instance level. |

Example

This example passes user credentials, username and password, to the authentication scheme.

```
BEGIN
    apex_authentication.login (
        p_username => 'JOE USER',
        p_password => 'mysecret' );
END;
```

See Also:

[POST_LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/POST_LOGIN-Procedure.html#GUID-72781393-33B9-4992-816A-2DA44B30F3FC)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.9 LOGOUT Procedure

This procedure closes the session and redirects to the application's home page. Call this procedure directly from the browser.

Syntax

```
APEX_AUTHENTICATION.LOGOUT (
    p_session_id    IN NUMBER,
    p_app_id        IN NUMBER );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_session_id` | The Oracle APEX session identifier of the session to close. |
| `p_app_id` | The database application identifier. |

Example

This example logs the session out.

```
BEGIN
    apex_authentication.logout (
        p_session_id => :APP_SESSION,
            p_app_id => :APP_ID );
END;
```

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.10 PERSISTENT_AUTH_ENABLED Function

This function returns whether persistent authentication is enabled on instance level.

Syntax

```
APEX_AUTHENTICATION.PERSISTENT_AUTH_ENABLED
    return BOOLEAN;
```

Parameters

None.

Example

The following example uses PERSISTENT_AUTH_ENABLED to show a notification.

```
begin
     if apex_authentication.persistent_auth_enabled then
         sys.htp.p('Persistent Authentication enabled');
     else
         sys.htp.p('Persistent Authentication disabled');
     end if;
end;
```

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.11 PERSISTENT_COOKIES_ENABLED Function

This function returns whether persistent cookies are enabled on the instance. Instance administrators can control this value with the parameter `WORKSPACE_NAME_USER_COOKIE`.

Syntax

```
FUNCTION PERSISTENT_COOKIES_ENABLED
    RETURN BOOLEAN;
```

Returns

- `TRUE`: `WORKSPACE_NAME_USER_COOKIE` is set to `Y` or not set.
- `FALSE`: `WORKSPACE_NAME_USER_COOKIE` is set to `N`.

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.12 POST_LOGIN Procedure

This procedure authenticates the user in the current session. It runs a subset of `APEX_AUTHENTICATION.LOGIN`, without steps 1 and 2. For steps, see [LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure.html#GUID-BAC65D9D-2964-4A9D-B3A7-9194FC917C97). This procedure is useful in authentication schemes where user credentials checking is performed externally to Oracle APEX.

Syntax

```
APEX_AUTHENTICATION.POST_LOGIN (
    p_username              IN VARCHAR2,
    p_password              IN VARCHAR2,
    p_uppercase_username    IN BOOLEAN  DEFAULT TRUE )
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_username` | The user's name. |
| `p_password` | The user's password. |
| `p_uppercase_username` | If `TRUE` then `p_username` is converted to uppercase. |

Example

This procedure call passes user credentials, username and password, to the authentication scheme to finalize the user's authentication.

```
apex_authentication.post_login('JOE USER', 'mysecret');
```

See Also:

[LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure.html#GUID-BAC65D9D-2964-4A9D-B3A7-9194FC917C97)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.13 REMOVE_CURRENT_PERSISTENT_AUTH Procedure

This procedure removes all Persistent Authentication entries for for the user's current browser.

Syntax

```
APEX_AUTHENTICATION.REMOVE_CURRENT_PERSISTENT_AUTH;
```

Parameters

None.

Example

This example invalidates the user’s persistent authentication cookies for the current browser and application.

```
apex_authentication.remove_current_persistent_auth;
```

See Also:

[LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure.html#GUID-BAC65D9D-2964-4A9D-B3A7-9194FC917C97)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.14 REMOVE_PERSISTENT_AUTH Procedure

This procedure removes all Persistent Authentication entries for a user and ends all related sessions in the current workspace.

Syntax

```
APEX_AUTHENTICATION.REMOVE_PERSISTENT_AUTH (
    p_username      IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_username` | The user's name. If enabled, this procedure only invalidates persistent authentication cookies of this user. If set to `NULL`, then invalidates all persistent authentication cookies of all users for this workspace. |

Example

This example deletes all Persistant Authentication entries for the current user and ends all sessions of this user in the current workspace.

```
apex_authentication.remove_persistent_auth(
           p_username         => :APP_USER );
```

See Also:

[LOGIN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOGIN-Procedure.html#GUID-BAC65D9D-2964-4A9D-B3A7-9194FC917C97)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.15 SAML_CALLBACK Procedure

Landing resource for SAML authentication. To be called directly from the browser by the SAML identity provider.

Syntax

```
APEX_AUTHENTICATION.SAML_CALLBACK (
    SAMLResponse      IN VARCHAR2 DEFAULT NULL,
    SAMLRequest       IN VARCHAR2 DEFAULT NULL,
    RelayState        IN VARCHAR2 DEFAULT NULL,
    SigAlg            IN VARCHAR2 DEFAULT NULL,
    Signature         IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `SAMLResponse` | The base64-encoded SAML response. For GET requests, Oracle APEX assumes that the data is also deflated. |
| `SAMLRequest` | Request from the IP to APEX (such as logout). Same format as SAMLRESPONSE. |
| `RelayState` | APEX session specific data. |
| `SigAlg` | Signature algorithm. |
| `Signature` | Signature value. |

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.16 SAML_METADATA Procedure

This procedure emits the SAML metadata for the given application or for the Oracle APEX instance.

Syntax

```
APEX_AUTHENTICATION.SAML_METADATA (
    p_app_id    IN NUMBER   DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_app_id` | The ID of the application for which service provider metadata should be generated. If NULL or if the application's SAML authentication is configured to use instance mode, generate metadata using the SAML instance attributes. |

Example

The following example downloads SAML metadata for app 101.

```
$ curl https://www.example.com/apex/apex_authentication.saml_metadata?p_app_id=101
```

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)

------------------------------------------------------------------------

## 10.17 SEND_LOGIN_USERNAME_COOKIE Procedure

This procedure sends a cookie with the username.

Syntax

```
APEX_AUTHENTICATION.SEND_LOGIN_USERNAME_COOKIE (
    p_username      IN VARCHAR2,
    p_cookie_name   IN VARCHAR2 DEFAULT c_default_username_cookie,
    p_consent       IN BOOLEAN  DEFAULT FALSE )
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_username` | The user's name. |
| `p_cookie_name` | The cookie name which stores `p_username` in the browser. |
| `p_consent` | Control if the cookie should actually be sent. If `true`, assume the user gave consent to send the cookie. If `false`, do not send the cookie. If there is no consent and the cookie already exists, the procedure overwrites the existing cookie value with null. This parameter is ignored and no cookie gets sent if `PERSISTENT_COOKIES_ENABLED` returns `false`. |

Example

The example code below could be from a page submit process on a login page, which saves the username in a cookie when consent is given. `P101_REMEMBER_USERNAME` could be a switch. On rendering, it could be set to `Y` when the cookie has a value.

```
apex_authentication.send_login_username_cookie (
     p_username => :P101_USERNAME,
     p_consent  => :P101_REMEMBER_USERNAME = 'Y' );
```

See Also:

- [GET_LOGIN_USERNAME_COOKIE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LOGIN_USERNAME_COOKIE-Function.html#GUID-BD5AC718-4D89-4BD9-940E-FC88BF937945)
- [PERSISTENT_COOKIES_ENABLED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PERSISTENT_COOKIES_ENABLED-Function.html#GUID-D44AD38F-D649-4E1E-AA78-A09F8BB0E3C7)

**Parent topic:** [APEX_AUTHENTICATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHENTICATION.html#GUID-2BA36F55-4881-455B-AC19-123DD9365E92)
