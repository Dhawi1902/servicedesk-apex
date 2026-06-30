<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 11  APEX_AUTHORIZATION

The `APEX_AUTHORIZATION` package contains public utility functions used for controlling and querying access rights to the application.

- [ENABLE_DYNAMIC_GROUPS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENABLE_DYNAMIC_GROUPS-Procedure.html#GUID-14F31749-CF8F-4DED-9D6A-EA5C5ED4A650)
- [HAS_ACCESS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.HAS_ACCESS-Function.html#GUID-77D715DD-7EBC-463E-AD72-49EF4E6E8A6C)
- [IS_AUTHORIZED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_AUTHORIZED-Function.html#GUID-508AD235-84C1-4CDF-B877-D344B0A42E58)
- [RESET_CACHE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_CACHE-Procedure.html#GUID-0FAD752E-C5B3-4876-9528-5C909BA20056)

------------------------------------------------------------------------

## 11.1 ENABLE_DYNAMIC_GROUPS Procedure

This procedure enables groups in the current session. These groups do not have to be created in the Oracle APEX workspace repository, but can be loaded from an LDAP repository or retrieved from a trusted HTTP header. Enabling a group that exists in the workspace repository and has other groups granted to it, also enables the granted groups.

If Real Application Security, available with Oracle AI Database Release 12g, is enabled for the authentication scheme, all dynamic groups are enabled as RAS dynamic or external groups (depending whether the group exists in `dba_xs_dynamic_roles`).

This procedure must be called during or immediately after authentication, for example, in a post-authentication procedure.

Syntax

```
APEX_AUTHORIZATION.ENABLE_DYNAMIC_GROUPS (
    p_group_names   IN apex_t_varchar2 )
```

Parameters

| Parameter       | Description           |
|:----------------|:----------------------|
| `p_group_names` | Table of group names. |

Example

This example enables the dynamic groups `SALES` and `HR` from within a post authentication procedure.

```
BEGIN
   apex_authorization.enable_dynamic_groups (
       p_group_names => apex_t_varchar2('SALES', 'HR') );
END;
```

See Also:

View `APEX_WORKSPACE_SESSION_GROUPS` and View `APEX_WORKSPACE_GROUP_GROUPS`

**Parent topic:** [APEX_AUTHORIZATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.html#GUID-4C7EE89E-9C67-4713-B62F-25873C819574)

------------------------------------------------------------------------

## 11.2 HAS_ACCESS Function

This function determines if the current user passes the authorization Static ID. For performance reasons, authorization results are cached. Because of this, the function may not always evaluate the authorization when called, but take the result out of the cache.

Syntax

```
APEX_AUTHORIZATION.HAS_ACCESS (
    p_static_id  IN   VARCHAR2 )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | The Static ID of an authorization scheme in the application. |

Returns

| Parameter | Description                             |
|:----------|:----------------------------------------|
| `TRUE`    | If the authorization is successful.     |
| `FALSE`   | If the authorization is not successful. |

Example

This example prints the result of the authorization Static ID "user-admin"

```
begin
    sys.htp.p('User Is Admin: '||
        case apex_authorization.has_access (
            p_static_id =>'user-admin')
        when true then 'YES'
        when false then 'NO'
        else 'null'
        end);
end;
```

**Parent topic:** [APEX_AUTHORIZATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.html#GUID-4C7EE89E-9C67-4713-B62F-25873C819574)

------------------------------------------------------------------------

## 11.3 IS_AUTHORIZED Function

This function determines if the current user passes the authorization with name `p_authorization_name`. For performance reasons, authorization results are cached. Because of this, the function may not always evaluate the authorization when called, but take the result out of the cache.

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-228BAA47-4A4C-43CC-B8FE-936A94B33CC4" target="_blank">Changing the Evaluation Point Attribute</a> in Oracle APEX App Builder User’s Guide

Syntax

```
APEX_AUTHORIZATION.IS_AUTHORIZED (
    p_authorization_name IN VARCHAR2 )
    RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_authorization_name` | The name of an authorization scheme in the application. |

Returns

| Parameter | Description                             |
|:----------|:----------------------------------------|
| `TRUE`    | If the authorization is successful.     |
| `FALSE`   | If the authorization is not successful. |

Example

This example prints the result of the authorization "User Is Admin."

```
BEGIN
    sys.htp.p('User Is Admin: '||
              case apex_authorization.is_authorized (
                       p_authorization_name => 'User Is Admin' )
              WHEN true THEN 'YES'
              WHEN false THEN 'NO'
              ELSE 'null'
              END);
END;
```

**Parent topic:** [APEX_AUTHORIZATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.html#GUID-4C7EE89E-9C67-4713-B62F-25873C819574)

------------------------------------------------------------------------

## 11.4 RESET_CACHE Procedure

This procedure resets the authorization caches for the session and forces a re-evaluation when an authorization is checked next.

Syntax

```
APEX_AUTHORIZATION.RESET_CACHE;
```

Parameters

None.

Example

This examples resets the authorization cache.

```
apex_authorization.reset_cache;
```

**Parent topic:** [APEX_AUTHORIZATION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AUTHORIZATION.html#GUID-4C7EE89E-9C67-4713-B62F-25873C819574)
