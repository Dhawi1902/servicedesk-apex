<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 2 APEX_ACL

The `APEX_ACL` package provides utilities that you can use when programming in the Oracle APEX environment related to the Shared Components for application access control. You can use the `APEX_ACL` package to add, remove, or replace user roles. You can also use the `INSTEAD OF` trigger on the `APEX_APPL_ACL_USERS` view to edit user roles with DML statements (INSERT, UPDATE, and DELETE).

If you use the package outside of an APEX environment, set the `security_group_id` with `APEX_UTIL.SET_WORKSPACE` or `APEX_UTIL.SET_SECURITY_GROUP_ID` before you make the call.

Use the related APEX views `APEX_APPL_ACL_ROLES`, `APEX_APPL_ACL_USERS`, and `APEX_APPL_ACL_USER_ROLES` to get more information on application users and roles.

- [ADD_USER_ROLE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_USER_ROLE-Procedure-Signature1.html#GUID-9371025F-7E1B-4C52-A8A2-EA5581BC7FC3)
- [ADD_USER_ROLE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_USER_ROLE-Procedure-Signature2.html#GUID-0323BCE8-6D8B-45E6-91B6-377025844BDF)
- [HAS_USER_ANY_ROLES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_USER_ANY_ROLES-Function.html#GUID-97D53D94-AAF9-4ACE-86C9-CD856B21116A)
- [HAS_USER_ROLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_USER_ROLE-Function.html#GUID-39D0A194-58ED-4411-B9C1-F1DB8015DA54)
- [IS_ROLE_REMOVED_FROM_USER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_ROLE_REMOVED_FROM_USER-Function.html#GUID-1B650723-4E97-4179-91BB-4AE626379AA9)
- [REMOVE_USER_ROLE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER_ROLE-Procedure-Signature1.html#GUID-D846C00D-AD16-4463-8839-103CB3873D7A)
- [REMOVE_USER_ROLE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_USER_ROLE-Procedure-Signature2.html#GUID-F54C8EC5-DFC3-455A-B84D-F524BFFBD47E)
- [REPLACE_USER_ROLES Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_USER_ROLES-Procedure-Signature1.html#GUID-24C89315-91F7-4F9A-85EC-3748C082111E)
- [REPLACE_USER_ROLES Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_USER_ROLES-Procedure-Signature2.html#GUID-01CED8FC-CAEF-482B-AF8D-5D5A85A5D02B)
- [REMOVE_ALL_USER_ROLES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_ALL_USER_ROLES-Procedure.html#GUID-B69043B9-9CE2-46F0-A900-C71F2912638A)

------------------------------------------------------------------------

## 2.1 ADD_USER_ROLE Procedure Signature 1

This procedure assigns a role to a user.

Syntax

```
APEX_ACL.ADD_USER_ROLE (
    p_application_id  IN NUMBER DEFAULT apex_application.g_flow_id,
    p_user_name       IN VARCHAR2,
    p_role_id         IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to assign a role to a user. Defaults to the current application. |
| `p_user_name` | The case-insensitive name of the application user to assign the role to. |
| `p_role_id ` | The ID of the role. |

Example

The following example uses the `ADD_USER_ROLE` procedure to assign the role ID of `2505704029884282` to the user name called `SCOTT` in the application `255`.

```
BEGIN
    APEX_ACL.ADD_USER_ROLE (
        p_application_id => 255,
        p_user_name      => 'SCOTT',
        p_role_id        => 2505704029884282 );
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.2 ADD_USER_ROLE Procedure Signature 2

This procedure assigns a role to a user.

Syntax

```
APEX_ACL.ADD_USER_ROLE (
    p_application_id IN NUMBER  DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2,
    p_role_static_id IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to assign a role to a user. Defaults to the current application. |
| `p_user_name` | The case-insensitive name of the application user to assign the role to. |
| `p_role_static_id` | The case-insensitive name of the role static ID. |

Example

The following example uses the `ADD_USER_ROLE` procedure to assign the role static ID `'ADMINISTRATOR'` to the user name called `SCOTT` in application `255`.

```
BEGIN
    APEX_ACL.ADD_USER_ROLE (
        p_application_id => 255,
        p_user_name      => 'SCOTT',
        p_role_static_id => 'ADMINISTRATOR' );
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.3 HAS_USER_ANY_ROLES Function

This function returns `TRUE` when the specified user is assigned to any application role. This function can be used to check if a user is permitted to access an application.

Syntax

```
APEX_ACL.HAS_USER_ANY_ROLES (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2 DEFAULT apex_application.g_user )
    RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to check if a user is assigned to any application role. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to check. Defaults to the current logged-in user. |

Example

The following example uses the `HAS_USER_ANY_ROLES` function to check if the user name `SCOTT` is assigned to any application role in application `255`.

```
DECLARE
    l_has_user_any_roles boolean := false;
BEGIN
    l_has_user_any_roles := APEX_ACL.HAS_USER_ANY_ROLES (
                              p_application_id  => 255,
                              p_user_name       => 'SCOTT' );

    IF NOT l_has_user_any_roles THEN
        raise_application_error(-20001, 'Scott is not assigned to any application role' );
    END IF;
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.4 HAS_USER_ROLE Function

This function returns `TRUE` if the user is assigned to the specified role.

Syntax

```
APEX_ACL.HAS_USER_ROLE (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2 DEFAULT apex_application.g_user,
    p_role_static_id IN VARCHAR2 )
    RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to check if a user is assigned to the specific role. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to check. It defaults to the current logged in user. |
| `p_role_static_id` | The case insensitive name of the role static ID. |

Example

The following example uses the `HAS_USER_ROLE` function to check if the user name `'SCOTT'` is assigned to any role static IDs of `'ADMINISTRATOR'` in application `255`.

```
DECLARE
    l_is_admin boolean := false;
BEGIN
    l_is_admin := APEX_ACL.HAS_USER_ROLE (
                    p_application_id  => 255,
                    p_user_name       => 'SCOTT',
                    p_role_static_id  => 'ADMINISTRATOR' );

    IF not l_is_admin THEN
        raise_application_error(-20001, 'Scott is NOT an administrator' );
    END IF;
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.5 IS_ROLE_REMOVED_FROM_USER Function

This function checks if a role is removed from a user. This function returns `TRUE` if a specific role is removed from the list of new role IDs for the user.

This function is used to ensure that a user cannot remove a role identified by `p_role_static_id` from him/herself.

Syntax

```
APEX_ACL.IS_ROLE_REMOVED_FROM_USER (
    p_application_id    IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name         IN VARCHAR2,
    p_role_static_id    IN VARCHAR2,
    p_role_ids          IN apex_t_number )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to check if a specific role removed from the list of roles was from a user. It defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to check. |
| `p_role_static_id` | The case insensitive name of the role static ID to check if it is removed. |
| `p_role_ids` | The array of NUMBER type new role IDs the user is assigned to. |

Returns

Returns `TRUE` when `p_user_name` currently has the role identified by `p_role_static_id` but the roles identified by `p_role_ids` do not include the role identified by `p_role_static_id`.

Return `FALSE` in all other cases.

Example

The following example uses the IS_ROLE_REMOVED_FROM_USER function to ensure the current user of the app who has the `ADMINISTRATOR` role does not remove him/herself from the role when updating or deleting the access to the app.

```
BEGIN
    IF :P1_USER_NAME = :APP_USER
       and apex_acl.is_role_removed_from_user (
                p_application_id => :APP_ID,
                p_user_name      => :APP_USER,
                p_role_static_id => 'ADMINISTRATOR',
                p_role_ids       => apex_string.split_numbers(
                                        p_str => case when :REQUEST = 'DELETE' THEN
                                                     null
                                                 ELSE
                                                     :P1_ROLE_IDS
                                                 END,
                                        p_sep => ':') ) THEN

        raise_application_error(-20001, 'You cannot remove administrator role from yourself.' );
    END IF;
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.6 REMOVE_USER_ROLE Procedure Signature 1

This procedure removes an assigned role from a user.

Syntax

```
APEX_ACL.REMOVE_USER_ROLE (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2,
    p_role_id        IN NUMBER );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID from which you want to remove an assigned role from a user. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to remove the role from. |
| `p_role_id ` | The ID of the role. |

Example

The following example uses the `REMOVE_USER_ROLE` procedure to remove the role ID of `2505704029884282` from the user name `'SCOTT'` in application `255`.

```
BEGIN
    APEX_ACL.REMOVE_USER_ROLE (
        p_application_id => 255,
        p_user_name      => 'SCOTT',
        p_role_id        => 2505704029884282 );
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.7 REMOVE_USER_ROLE Procedure Signature 2

This procedure removes an assigned role from a user.

Syntax

```
APEX_ACL.REMOVE_USER_ROLE (
        p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
        p_user_name      IN VARCHAR2,
        p_role_static_id IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID from which you want to remove an assigned role from a user. It defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to remove the role from. |
| `p_role_static_id` | The case insensitive name of the role static ID. |

Example

The following example uses the `REMOVE_USER_ROLE` procedure to remove the role static ID `'ADMINISTRATOR'` from the user name `'SCOTT'` in application `255`.

```
BEGIN
    APEX_ACL.REMOVE_USER_ROLE (
        p_application_id => 255,
        p_user_name      => 'SCOTT',
        p_role_static_id => 'ADMINISTRATOR' );
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.8 REPLACE_USER_ROLES Procedure Signature 1

This procedure replaces any existing assigned user roles to a new array of roles.

Syntax

```
APEX_ACL.REPLACE_USER_ROLES (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2,
    p_role_ids       IN apex_t_number );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to replace the user roles. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to replace the role. |
| `p_role_ids ` | The array of `NUMBER` type role IDs. |

Example

The following example uses the `REPLACE_USER_ROLES` procedure to replace existing roles with new role IDs of `2505704029884282` and `345029884282` for the user name `'SCOTT'` in application `255`.

```
BEGIN
    APEX_ACL.REPLACE_USER_ROLES (
        p_application_id => 255,
        p_user_name      => 'SCOTT',
        p_role_ids       => apex_t_number( 2505704029884282, 345029884282 ) );
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.9 REPLACE_USER_ROLES Procedure Signature 2

This procedure replaces any existing assigned user roles to a new array of roles.

Syntax

```
APEX_ACL.REPLACE_USER_ROLES (
    p_application_id  IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name       IN VARCHAR2,
    p_role_static_ids IN apex_t_varchar2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to replace the user roles. Defaults to the current application. |
| `p_user_name` | The case insensitive name of the application user to replace the role. |
| `p_role_static_ids` | The array of case-insensitive `VARCHAR2`-type role static IDs. |

Example

The following example uses the `REPLACE_USER_ROLES` procedure to replace existing roles with new role static IDs of `'ADMINISTRATOR'` and `'CONTRIBUTOR'` for the user name `'SCOTT'` in application `255`.

```
BEGIN
    APEX_ACL.REPLACE_USER_ROLES (
        p_application_id  => 255,
        p_user_name       => 'SCOTT',
        p_role_static_ids => apex_t_varchar2( 'ADMINISTRATOR', 'CONTRIBUTOR' ) );
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)

------------------------------------------------------------------------

## 2.10 REMOVE_ALL_USER_ROLES Procedure

This procedure removes all assigned roles from a user.

Syntax

```
APEX_ACL.REMOVE_ALL_USER_ROLES (
    p_application_id IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_user_name      IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID for which you want to remove all assigned roles from a user. Defaults to the current application. |
| `p_user_name` | The case-insensitive name of the application user to remove all assigned roles from. |

Example

The following example uses the `REMOVE_ALL_USER_ROLES` procedure to remove all assigned roles from the user name `'SCOTT'` in application `255`.

```
BEGIN
    APEX_ACL.REMOVE_ALL_USER_ROLES (
        p_application_id  => 255,
        p_user_name       => 'SCOTT' );
END;
```

**Parent topic:** [APEX_ACL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ACL.html#GUID-C59214CB-8138-4CB4-89CC-4CC357A67288)
