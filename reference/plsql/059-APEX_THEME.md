<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 59  APEX_THEME

The `APEX_THEME` package contains utility functions for working with themes and theme styles.

- [CLEAR_ALL_USERS_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html#GUID-E52E6FE7-E250-4BB3-BC13-48F3C6D2FE4D)
- [CLEAR_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html#GUID-E3D0A1A9-FC0E-414F-93E3-310920E53596)
- [DISABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html#GUID-385E5D9D-05DC-4327-AF7A-9E7E8A13064A)
- [ENABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html#GUID-F356976E-FFC2-4305-B1D9-5F2D30BF80B9)
- [GET_USER_STYLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html#GUID-69F4057C-66AD-486B-A8ED-8C74FD3EDC15)
- [SET_CURRENT_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CURRENT_STYLE-Procedure.html#GUID-1E8901B5-A0A1-40A0-9606-4AF738B68BA4)
- [SET_SESSION_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_STYLE-Procedure.html#GUID-0C3C364E-381C-4F4A-BFDE-37B792FB62A1)
- [SET_SESSION_STYLE_CSS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_STYLE_CSS-Procedure.html#GUID-A43A6973-FC15-4747-9635-56747434A778)
- [SET_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html#GUID-5A24E1AB-E19F-4EB4-A604-2AEEEA2CF85A)

------------------------------------------------------------------------

## 59.1 CLEAR_ALL_USERS_STYLE Procedure

This procedure clears all theme style user preferences for an application and theme.

Syntax

```
APEX_THEME.CLEAR_ALL_USERS_STYLE (
    p_application_id    IN NUMBER   DEFAULT {current application ID},
    p_theme_number      IN NUMBER   DEFAULT {current theme ID} );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number ` | The theme number to clear all theme style user preferences for. |

Example

The following example clears the all theme style user preferences for theme `42` in application `100`.

```
apex_theme.clear_all_users_style(
    p_application_id => 100,
    p_theme_number   => 42
);
```

See Also:

- [SET_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html#GUID-5A24E1AB-E19F-4EB4-A604-2AEEEA2CF85A)
- [GET_USER_STYLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html#GUID-69F4057C-66AD-486B-A8ED-8C74FD3EDC15)
- [CLEAR_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html#GUID-E3D0A1A9-FC0E-414F-93E3-310920E53596)
- [ENABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html#GUID-F356976E-FFC2-4305-B1D9-5F2D30BF80B9)
- [DISABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html#GUID-385E5D9D-05DC-4327-AF7A-9E7E8A13064A)

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.2 CLEAR_USER_STYLE Procedure

This procedure clears the theme style user preference for user and application.

Syntax

```
APEX_THEME.CLEAR_USER_STYLE (
    p_application_id IN NUMBER   DEFAULT {current application id},
    p_user           IN VARCHAR2 DEFAULT {current user},
    p_theme_number   IN NUMBER   DEFAULT {current theme number} );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_user` | Username to set the user style preference for. |
| `p_theme_number` | The theme number to clear the theme style user preference. |

Example

The following example clears the theme style user preference for the `ADMIN` user in application `100` and theme `42`.

```
apex_theme.clear_user_style(
    p_application_id => 100,
    p_user           => 'ADMIN',
    p_theme_number   => 42
);
```

See Also:

- [SET_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html#GUID-5A24E1AB-E19F-4EB4-A604-2AEEEA2CF85A)
- [GET_USER_STYLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html#GUID-69F4057C-66AD-486B-A8ED-8C74FD3EDC15)
- [CLEAR_ALL_USERS_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html#GUID-E52E6FE7-E250-4BB3-BC13-48F3C6D2FE4D)
- [ENABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html#GUID-F356976E-FFC2-4305-B1D9-5F2D30BF80B9)
- [DISABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html#GUID-385E5D9D-05DC-4327-AF7A-9E7E8A13064A)

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.3 DISABLE_USER_STYLE Procedure

This procedure disables theme style selection by end users. End users will not be able to customize the theme style on their own. Note that this only affects the Customization link for end users. `APEX_THEME` API calls are independent.

Syntax

```
APEX_THEME.DISABLE_USER_STYLE (
    p_application_id  IN NUMBER           DEFAULT {current application id},
    p_theme_number    IN NUMBER           DEFAULT {current theme number}
);
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | Number of user interface's Current Theme. |

The following query disables end user theme style selection for application `100`.

```
DECLARE
    l_theme_id apex_themes.theme_number%type;
BEGIN
    SELECT theme_number
      INTO l_theme_id
      FROM apex_applications
     WHERE application_id = 100;

    apex_theme.disable_user_style(
        p_application_id => 100,
        p_theme_number   => l_theme_id
    );
END;
```

See Also:

- [SET_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html#GUID-5A24E1AB-E19F-4EB4-A604-2AEEEA2CF85A)
- [GET_USER_STYLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html#GUID-69F4057C-66AD-486B-A8ED-8C74FD3EDC15)
- [CLEAR_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html#GUID-E3D0A1A9-FC0E-414F-93E3-310920E53596)
- [CLEAR_ALL_USERS_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html#GUID-E52E6FE7-E250-4BB3-BC13-48F3C6D2FE4D)
- [ENABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html#GUID-F356976E-FFC2-4305-B1D9-5F2D30BF80B9)

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.4 ENABLE_USER_STYLE Procedure

This procedure enables theme style selection by end users. When enabled and there is at least one theme style marked as `Public`, end users will see a Customize link which allows to choose the theme style. End user theme style selection is enabled or disabled at the User Interface level. When providing a theme number, the theme must be the Current Theme for a user interface. Note that this only affects the Customization link for end users. `APEX_THEME` API calls are independent.

Syntax

```
APEX_THEME.ENABLE_USER_STYLE (
    p_application_id  IN NUMBER DEFAULT {current application id},
    p_theme_number    IN NUMBER DEFAULT {current theme number} );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | Number of User Interface's Current Theme. |

The following example enables end user theme style selection for application `100`.

```
DECLARE
    l_theme_id apex_themes.theme_number%type;
BEGIN
    SELECT theme_number
      INTO l_theme_id
      FROM apex_applications
     WHERE application_id = 100;

    apex_theme.enable_user_style(
        p_application_id => 100,
        p_theme_number   => l_theme_id
    );
END;
```

See Also:

- [SET_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html#GUID-5A24E1AB-E19F-4EB4-A604-2AEEEA2CF85A)
- [GET_USER_STYLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html#GUID-69F4057C-66AD-486B-A8ED-8C74FD3EDC15)
- [CLEAR_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html#GUID-E3D0A1A9-FC0E-414F-93E3-310920E53596)
- [CLEAR_ALL_USERS_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html#GUID-E52E6FE7-E250-4BB3-BC13-48F3C6D2FE4D)
- [DISABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html#GUID-385E5D9D-05DC-4327-AF7A-9E7E8A13064A)

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.5 GET_USER_STYLE Function

This function returns the theme style user preference for the user and application. If no user preference is present, it returns NULL.

Syntax

```
APEX_THEME.GET_USER_STYLE (
  p_application_id  IN NUMBER   DEFAULT {current application id},
  p_user            IN VARCHAR2 DEFAULT {current user},
  p_theme_number    IN NUMBER   DEFAULT {current theme number} )
RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_user` | The user name to the user style preference. |
| `p_theme_number` | The theme number to set the session style. |

Returns

The theme style ID which is set as a user preference.

Example

The query returns the theme style user preference for the `ADMIN` user in application `100` and theme `42`.

```
select apex_theme.get_user_style( 100, 'ADMIN', 42 ) from dual;
```

See Also:

- [SET_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_USER_STYLE-Procedure.html#GUID-5A24E1AB-E19F-4EB4-A604-2AEEEA2CF85A)
- [CLEAR_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html#GUID-E3D0A1A9-FC0E-414F-93E3-310920E53596)
- [CLEAR_ALL_USERS_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html#GUID-E52E6FE7-E250-4BB3-BC13-48F3C6D2FE4D)
- [ENABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html#GUID-F356976E-FFC2-4305-B1D9-5F2D30BF80B9)
- [DISABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html#GUID-385E5D9D-05DC-4327-AF7A-9E7E8A13064A)

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.6 SET_CURRENT_STYLE Procedure

This procedure sets current theme style for the current application.

Note:

This is a persistent change. The "Modify this Application" setting has to be activated in Shared Components, Security, Runtime API usage.

Syntax

```
APEX_THEME.SET_CURRENT_STYLE (
    p_application_id IN NUMBER DEFAULT {current application ID},
    p_theme_number   IN NUMBER,
    p_id             IN VARCHAR2 );
```

Parameters

| Parameter          | Description                                            |
|:-------------------|:-------------------------------------------------------|
| `p_application_id` | The application ID. Default current application.       |
| `p_theme_number`   | The theme number for which to set the default style.   |
| `p_id`             | The ID of the theme style to set as a user preference. |

Examples

The following example gets available theme styles from APEX Dictionary View.

```
select s.theme_style_id,
       t.theme_number
  from apex_application_theme_styles s,
       apex_application_themes t
 where s.application_id = :APP_ID
   and s.is_current     = 'Yes'
   and t.application_id = s.application_id
   and t.theme_number   = s.theme_number
```

The following example sets the current theme style to one of values returned by the above query.

```
apex_theme.set_current_style (
     p_theme_number => {query.theme_number},
     p_id => {query.theme_style_id}
);
```

See Also:

[SET_CURRENT_THEME_STYLE Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_CURRENT_THEME_STYLE-Procedure.html#GUID-0480BC8D-0C88-4800-911F-162DD6E0ACB3)

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.7 SET_SESSION_STYLE Procedure

This procedure sets the theme style dynamically for the current session. This is typically called after successful authentication. Specify the theme style Static ID.

Note:

If APEX cannot find a matching theme style by Static ID, it checks for a matching theme style by name. This is done for backward compatibility.

Syntax

```
APEX_THEME.SET_SESSION_STYLE (
    p_application_id  IN apex_application.g_flow_id,
    p_theme_number    IN apex_themes.theme_id,
    p_name            IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | The theme number to set the session style for. Default is the current theme of the application. |
| `p_name` | The theme style Static ID to be used in the session. |

Example

The following example gets the current theme number from Oracle APEX Dictionary View and sets the session theme style for the current theme to `Vita`.

```
DECLARE
    l_theme_number number;
BEGIN
    SELECT theme_number
      INTO l_theme_number
      FROM apex_application_themes
    WHERE application_id = :APP_ID;
    apex_theme.set_session_style (
        p_theme_number => l_theme_number,
        p_name         => 'Vita' );
END;
```

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.8 SET_SESSION_STYLE_CSS Procedure

This procedure sets the theme style CSS URLs dynamically for the current session. Theme style CSS URLs directly pass in; a persistent style definition is optional. This is typically called after successful authentication.

Syntax

```
APEX_THEME.SET_SESSION_STYLE_CSS (
    p_application_id   IN NUMBER    DEFAULT {current application ID},
    p_theme_number     IN NUMBER    DEFAULT {current theme number},
    p_css_file_urls    IN VARCHAR2,
    p_page_css_classes IN VARCHAR2  DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_theme_number` | The theme number to set the session style. Default is the current theme of the application. |
| `p_css_file_urls` | The URLs to CSS files with style directives. |
| `p_page_css_classes` | Class names which are added to the `PAGE_CSS_CLASSES` placeholder. |

Example

The following example gets available theme styles from Oracle APEX Dictionary View and sets the session theme style for the current theme to `#APP_FILES#.my_style.css`.

```
DECLARE
    l_theme_number number;
BEGIN
    select theme_number
      into l_theme_number
      from apex_application_themes
     where t.application_id = :APP_ID;

    apex_theme.set_session_style_css (
        p_theme_number  => l_theme_number,
        p_css_file_urls => '#APP_FILES#my_style.css' );
END;
```

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)

------------------------------------------------------------------------

## 59.9 SET_USER_STYLE Procedure

This procedure sets a theme style user preference for the current user and application. Theme Style User Preferences are automatically picked up and precede any style set with `SET_SESSION_STYLE`.

Syntax

```
APEX_THEME.SET_USER_STYLE (
    p_application_id  IN NUMBER           DEFAULT {current application ID},
    p_user            IN VARCHAR2         DEFAULT {current user},
    p_theme_number    IN NUMBER           DEFAULT {current theme number},
    p_id              IN NUMBER );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID. Default is the current application. |
| `p_user` | The user name to the user style preference. |
| `p_theme_number` | The theme number to set the user style. Default is the current theme of the application. |
| `p_id` | The ID of the theme style to set as a user preference. |

Example

The following example gets available theme styles from Oracle APEX Dictionary View for the `DESKTOP` user interface.

```
select s.theme_style_id, t.theme_number
  from apex_application_theme_styles s,
apex_application_themes t
          where s.application_id = t.application_id
            and s.theme_number = t.theme_number
            and s.application_id = :app_id
            and t.ui_type_name = 'DESKTOP'
            and s.is_current = 'Yes'
```

The following example sets the current theme style IDs as user preference for `ADMIN` in application ID `100`.

```
apex_theme.set_user_style (
     p_application_id => 100,
     p_user           => 'ADMIN',
     p_theme_number   => {query.theme_number},
     p_id             => {query.theme_style_id}
);
```

See Also:

- [GET_USER_STYLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_STYLE-Function.html#GUID-69F4057C-66AD-486B-A8ED-8C74FD3EDC15)
- [CLEAR_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_USER_STYLE-Procedure.html#GUID-E3D0A1A9-FC0E-414F-93E3-310920E53596)
- [CLEAR_ALL_USERS_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL_USERS_STYLE-Procedure.html#GUID-E52E6FE7-E250-4BB3-BC13-48F3C6D2FE4D)
- [ENABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_USER_STYLE-Procedure.html#GUID-F356976E-FFC2-4305-B1D9-5F2D30BF80B9)
- [DISABLE_USER_STYLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DISABLE_USER_STYLE-Procedure.html#GUID-385E5D9D-05DC-4327-AF7A-9E7E8A13064A)

**Parent topic:** [APEX_THEME](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_THEME.html#GUID-D0E62CB5-22C1-42CE-A2C1-D1E22EE63555)
