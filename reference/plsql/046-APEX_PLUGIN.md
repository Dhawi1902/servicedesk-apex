<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 46  APEX_PLUGIN

The `APEX_PLUGIN` package provides the interface declarations and some utility functions to work with plug-ins.

- [About Configuring Flexible Remote Servers in APEX](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-Configuring-Flexible-Remote-Servers.html#GUID-FAF1E808-56B5-43E8-8B38-34A1B9AC272B)
  Flexible remote servers use a configuration procedure to change the URL endpoint of the server.
- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Constants.html#GUID-F66C398F-B1D5-4E57-BE7C-481A15669578)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)
- [GET_AJAX_IDENTIFIER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AJAX_IDENTIFIER-Function.html#GUID-4E48F89D-40A1-4EB3-92D7-ACC401B89F47)
- [GET_KEEP_BACKGROUND_EXECS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E2B22CA2-A9D8-4DFE-906D-10357C4CF9EC)
- [GET_INPUT_NAME_FOR_ITEM Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN_UTIL.GET_INPUT_NAME_FOR_ITEM-Function.html#GUID-0E550FCD-A82B-4AFB-A4C5-E1334E50086D)
- [GET_INPUT_NAME_FOR_PAGE_ITEM Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INPUT_NAME_FOR_PAGE_ITEM-Function.html#GUID-6E53D97A-0710-4203-9F20-8F4B2153A2E1)

### 46.1 GET_KEEP_BACKGROUND_EXECS Function

This function checks if background executions are preserved or deleted during upgrades. Defaults to `FALSE`, so all background executions are aborted and deleted on application upgrade.

Syntax

```
APEX_APPLICATION_INSTALL.GET_KEEP_BACKGROUND_EXECS
    RETURN BOOLEAN;
```

Parameters

None.

Example

The following example shows whether background executions are preserved or deleted.

```
BEGIN
    dbms_output.put_line (
        CASE WHEN apex_application_install.get_keep_background_execs
             THEN 'background executions will be kept'
        ELSE 'background executions will be deleted'
        END );
END;
```

See Also:

- [SET_KEEP_BACKGROUND_EXECS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_BACKGROUND_EXECS-Procedure.html#GUID-7256F0F4-F017-4687-BC23-830D57EC1BDF)

**Parent topic:** [APEX_PLUGIN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E4CF534E-D795-44B6-8C3D-C464A8EF115C)

------------------------------------------------------------------------

## 46.1 About Configuring Flexible Remote Servers in APEX

Flexible remote servers use a configuration procedure to change the URL endpoint of the server.

The procedure is defined by the end user either as a package procedure in the database or as the attribute `PL/SQL Code` of the Remote Server.

The name of this procedure is specified by the end user while editing the remote server. This procedure needs to have a specific signature using `t_remote_server_info` and `t_remote_server_config`.

A resulting procedure resembles the following code example:

```
procedure my_server_config(
    p_info   in  apex_plugin.t_remote_server_info,
    p_config out apex_plugin.t_remote_server_config )
is
begin
    if p_info.application_id = 100
    then
      p_config.base_url := 'https://#cust#.example.com';
      p_config.substitutions := apex_t_varchar2();
      apex_string.plist_put( p_config.substitutions, 'cust', v('P3_CUSTOMER') );
    else
      p_config.base_url := 'https://test.example.com';
    end if;
end;
```

**Parent topic:** [APEX_PLUGIN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E4CF534E-D795-44B6-8C3D-C464A8EF115C)

------------------------------------------------------------------------

## 46.2 Constants

Data Format Constants

The following data format constants are used with REST Data Sources in APEX_PLUGIN:

```
subtype t_data_format           is pls_integer range 1..2;

c_format_xml                constant t_data_format := 1;
c_format_json               constant t_data_format := 2;
```

Database Operation Constants

The following constants are used with REST Data Sources in APEX_PLUGIN:

```
subtype t_db_operation          is pls_integer range 1..6;

c_db_operation_fetch_rows   constant t_db_operation          := 1;
c_db_operation_insert       constant t_db_operation          := 2;
c_db_operation_update       constant t_db_operation          := 3;
c_db_operation_delete       constant t_db_operation          := 4;
c_db_operation_fetch_row    constant t_db_operation          := 5;
c_db_operation_execute      constant t_db_operation          := 6;
```

REST Data Source Parameter Constants

The following constants are used with REST Data Sources in APEX_PLUGIN:

```
subtype t_web_source_param_type is pls_integer range 1..5;

c_web_src_param_header      constant t_web_source_param_type := 1;
c_web_src_param_query       constant t_web_source_param_type := 2;
c_web_src_param_url_pattern constant t_web_source_param_type := 3;
c_web_src_param_body        constant t_web_source_param_type := 4;
c_web_src_param_cookie      constant t_web_source_param_type := 5;

subtype t_web_source_param_dir is pls_integer range 1..3;

c_direction_in              constant t_web_source_param_dir  := 1;
c_direction_out             constant t_web_source_param_dir  := 2;
c_direction_in_out          constant t_web_source_param_dir  := 3;
```

REST Data Source DML Row Status Constants

The following constants are used with REST Data Sources in APEX_PLUGIN:

```
subtype t_web_source_row_check_result is pls_integer range 1..5;

c_row_ok                    constant t_web_source_row_check_result := 1;
c_row_version_changed       constant t_web_source_row_check_result := 2;
c_row_data_not_changed      constant t_web_source_row_check_result := 3;
c_row_refetch_error         constant t_web_source_row_check_result := 4;
c_row_dml_not_allowed       constant t_web_source_row_check_result := 5;
```

**Parent topic:** [APEX_PLUGIN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E4CF534E-D795-44B6-8C3D-C464A8EF115C)

------------------------------------------------------------------------

## 46.3 Data Types

This section describes the data types used by the `APEX_PLUGIN` package.

- [c_inline_in_notification](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-B04840BB-4929-4E3D-83DB-553E8A019B91)
- [c_inline_with_field](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-FC3E1897-A4FF-4B0C-8DAB-4C5E98A99E86)
- [c_inline_with_field_and_notif](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-1F256A45-FB02-4C13-B8EF-B9A211F280AE)
- [c_on_error_page](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-11E0CBC6-F81F-436C-A22D-577FB532CEB1)
- [t_authentication](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-9658BFF3-06F9-4F21-B338-D3BFE84552FA)
- [t_authentication_ajax_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-1A515007-2707-4770-AC34-82FEB109476F)
- [t_authentication_auth_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-FD45C787-BAFB-4FD9-A34E-C614AD532904)
- [t_authentication_inval_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-A33C2444-8425-4998-BF46-5E4CF8EC7BE7)
- [t_authentication_logout_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-540315CE-C74D-45E9-8D96-DE6744EB913C)
- [t_authentication_sentry_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-28843ECA-40BC-4E03-9761-BAE18573898A)
- [t_authorization](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-AD63B083-79BF-4414-9436-629BD1AE1EB0)
- [t_authorization_exec_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-7472A92B-6A3E-468C-BDC7-CE7E55119416)
- [t_dynamic_action](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-028E595E-CCC1-4F22-8D6E-7CE38469D404)
- [t_dynamic_action_ajax_param](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-0F256E88-B3C3-4B98-AE46-6F325272295A)
- [t_dynamic_action_ajax_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-229E987F-467E-4526-A2B7-CD4534B4B9DF)
- [t_dynamic_action_render_param](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-D4250C79-59C8-4036-A8D3-F46BF69FC8B7)
- [t_dynamic_action_render_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-515CCE82-E815-4B04-B193-6195A722FA91)
- [t_escape_mode](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-DD95862D-371B-43DD-ACE7-052844566393)
- [t_item](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-09D00B71-D918-4DBF-B27B-75E624269E8E)
- [t_item_ajax_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-C956CFF2-264F-492E-893D-8E432552F676)
- [t_item_meta_data_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-04050A20-9492-4658-AB4C-BD0C5439F4AB)
- [t_item_render_param](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-2CB9388F-E7EB-464C-8A5F-8BF90B727733)
- [t_item_render_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-8CBBCAC4-1A0F-4DA9-98C3-569351E9FD9B)
- [t_item_validation_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-DCB8EB1D-73DC-48D1-B6BE-B6B5963FCC85)
- [t_plugin](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-576E0B4E-C0BC-444B-87FE-E471141DD66A)
- [t_plugin_attributes](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-DF746913-B439-478E-ADA5-7BA920D03B06)
- [t_process](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-E5FE9460-F724-4F7F-90A2-952266DA21EA)
- [t_process_exec_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-83C7E3F3-7D12-421E-AFC9-69BF40DBE9CB)
- [t_region](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-306D4448-450F-40DB-9417-1A7FB6A288CD)
- [t_region_ajax_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-7D86EF6D-CD14-4AEF-B1E2-208B4A5F4D68)
- [t_region_column](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-EA9875B7-CF0F-4BD9-B07F-C123B1BCDAE9)
- [t_region_columns](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-58B60D33-6C85-4AC9-925F-5754C43D98C7)
- [t_region_render_param](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-B70B113C-E1A4-4599-AD9F-3923EC4FA90A)
- [t_region_render_result](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-173E95E0-6B67-4D52-8244-178D611AE7A0)
- [t_remote_server_config](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-60CFFB2D-3913-4548-B3F4-711296C41DE7)
- [t_remote_server_info](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-EF7659F6-A811-42E0-B013-C88CA95EB542)

**Parent topic:** [APEX_PLUGIN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E4CF534E-D795-44B6-8C3D-C464A8EF115C)

### 46.3.1  c_inline_in_notification

Use the following constant for `display_location` in the page item validation function result type `t_page_item_validation_result`.

```
c_inline_in_notification        constant varchar2(40) := 'INLINE_IN_NOTIFICATION';
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.2 c_inline_with_field

Use the constant `c_inline_with_field` for `display_location` in the page item validation function result type `t_page_item_validation_result`.

```
c_inline_with_field         constant varchar2(40) := 'INLINE_WITH_FIELD';
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.3 c_inline_with_field_and_notif

Use the constant `c_inline_with_field_and_notif` for `display_location` in the page item validation function result type `t_page_item_validation_result`.

```
c_inline_with_field_and_notif   constant varchar2(40) := 'INLINE_WITH_FIELD_AND_NOTIFICATION';
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.4 c_on_error_page

Use the constant `c_on_error_page` for `display_location` in the page item validation function result type `t_page_item_validation_result`.

```
c_on_error_page                 constant varchar2(40) := 'ON_ERROR_PAGE';
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.5 t_authentication

```
type t_authentication is record (
    id                   number,
    name                 varchar2(255),
    invalid_session_url  varchar2(4000),
    logout_url           varchar2(4000),
    plsql_code           clob,
    attributes           apex.t_plugin_attributes,
    attribute_01         varchar2(32767)          /* Deprecated */,
    attribute_02         varchar2(32767)          /* Deprecated */,
    attribute_03         varchar2(32767)          /* Deprecated */,
    attribute_04         varchar2(32767)          /* Deprecated */,
    attribute_05         varchar2(32767)          /* Deprecated */,
    attribute_06         varchar2(32767)          /* Deprecated */,
    attribute_07         varchar2(32767)          /* Deprecated */,
    attribute_08         varchar2(32767)          /* Deprecated */,
    attribute_09         varchar2(32767)          /* Deprecated */,
    attribute_10         varchar2(32767)          /* Deprecated */,
    attribute_11         varchar2(32767)          /* Deprecated */,
    attribute_12         varchar2(32767)          /* Deprecated */,
    attribute_13         varchar2(32767)          /* Deprecated */,
    attribute_14         varchar2(32767)          /* Deprecated */,
    attribute_15         varchar2(32767)          /* Deprecated */,
    session_id           number,
    original_session_id  number,
    username             varchar2(255) );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.6 t_authentication_ajax_result

```
type t_authentication_ajax_result is record (
    dummy                boolean );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.7 t_authentication_auth_result

```
type t_authentication_auth_result is record (
    is_authenticated     boolean,
    redirect_url         varchar2(4000),
    log_code             number,
    log_text             varchar2(4000),
    display_text         varchar2(4000) );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.8 t_authentication_inval_result

```
type t_authentication_inval_result is record (
    redirect_url         varchar2(4000) );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.9 t_authentication_logout_result

```
type t_authentication_logout_result is record (
    redirect_url         varchar2(4000) );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.10 t_authentication_sentry_result

```
type t_authentication_sentry_result is record (
    is_valid             boolean );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.11 t_authorization

The following type is passed to all authorization plug-in functions and contains information about the current authorization.

```
type t_authorization is record (
    id                   number,
    name                 varchar2(255),
    username             varchar2(255),
    caching              varchar2(20),
    component            apex.t_component,
    attributes           apex.t_plugin_attributes,
    attribute_01         varchar2(32767)          /* Deprecated */,
    attribute_02         varchar2(32767)          /* Deprecated */,
    attribute_03         varchar2(32767)          /* Deprecated */,
    attribute_04         varchar2(32767)          /* Deprecated */,
    attribute_05         varchar2(32767)          /* Deprecated */,
    attribute_06         varchar2(32767)          /* Deprecated */,
    attribute_07         varchar2(32767)          /* Deprecated */,
    attribute_08         varchar2(32767)          /* Deprecated */,
    attribute_09         varchar2(32767)          /* Deprecated */,
    attribute_10         varchar2(32767)          /* Deprecated */,
    attribute_11         varchar2(32767)          /* Deprecated */,
    attribute_12         varchar2(32767)          /* Deprecated */,
    attribute_13         varchar2(32767)          /* Deprecated */,
    attribute_14         varchar2(32767)          /* Deprecated */,
    attribute_15         varchar2(32767)          /* Deprecated */,
);
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.12 t_authorization_exec_result

The `t_authorization_exec_result` data type has been added to the `APEX_PLUGIN` package.

```
type t_authorization_exec_result is record (
    is_authorized        boolean
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.13 t_dynamic_action

The `t_dynamic_action` type is passed into all dynamic action plug-in functions and contains information about the current dynamic action.

```
type t_dynamic_action is record (
    id                     number,
    name                   varchar2(255),
    static_id              varchar2(50),
    action                 varchar2(50),
    attributes             t_plugin_attributes,
    attribute_01           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_02           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_03           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_04           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_05           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_06           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_07           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_08           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_09           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_10           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_11           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_12           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_13           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_14           varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_15           varchar2(32767)        /* Deprecated in 26.1 */,
    init_javascript_code   varchar2(32767),
    triggering_region_id   number,
    affected_elements_type varchar2(30),
    affected_region_id     number,
    affected_button_id     number,
    affected_elements      varchar2(4000) );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.14 t_dynamic_action_ajax_param

The `t_dynamic_action_ajax_param` type is used as the parameter type for the Ajax function of a dynamic action type plug-in.

```
type t_dynamic_action_ajax_param is record (
    dummy boolean /* not used yet */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.15 t_dynamic_action_ajax_result

The `t_dynamic_action_ajax_result` type is used as the result type for the Ajax function of a dynamic action type plug-in.

```
type t_dynamic_action_ajax_result is record (
    dummy boolean /* not used yet */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.16 t_dynamic_action_render_param

The `t_dynamic_action_render_param` type is used as the parameter type for the rendering function of a dynamic action plug-in.

```
type t_dynamic_action_render_param is record (
    dummy boolean /* not used yet */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.17 t_dynamic_action_render_result

The `t_dynamic_action_render_result` type is used as the result type for the rendering function of a dynamic action plug-in.

```
type t_dynamic_action_render_result is record (
    ajax_identifier     varchar2(255),
    function_name       varchar2(255),
    function_param      t_javascript_object    default t_javascript_object(),
    attribute_01        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_02        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_03        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_04        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_05        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_06        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_07        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_08        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_09        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_10        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_11        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_12        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_13        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_14        varchar2(32767)        /* Deprecated in 26.1 */,
    attribute_15        varchar2(32767)        /* Deprecated in 26.1 */,
    javascript_function varchar2(32767)        /* Deprecated in 26.1 */, );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.18 t_escape_mode

Modes for escaping substitution variables.

```
subtype t_escape_mode is pls_integer range 1..6;

c_escape_mode_raw               constant t_escape_mode := 1;
c_escape_mode_html              constant t_escape_mode := 2;
c_escape_mode_html_attribute    constant t_escape_mode := 3;
c_escape_mode_javascript        constant t_escape_mode := 4;
c_escape_mode_striphtml         constant t_escape_mode := 5;
c_escape_mode_json              constant t_escape_mode := 6;
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.19 t_item

The `t_item` type is passed into all item type plug-in functions and contains information about the current page item.

```
type t_item is record (
    id                              NUMBER,
    name                            VARCHAR2(4000),
    session_state_name              VARCHAR2(4000),
    component_type_id               NUMBER,
    region_id                       NUMBER,
    form_region_id                  NUMBER,
    data_type                       VARCHAR2(32767),
    source_data_type                apex_exec_api.t_data_type,
    session_state_data_type         apex_session_state_api.t_data_type,
    multi_value_type                apex_exec_api.t_multi_value_type,
    multi_value_separator           VARCHAR2(10),
    label                           VARCHAR2(4000),
    plain_label                     VARCHAR2(4000),
    label_id                        VARCHAR2(4000),
    placeholder                     VARCHAR2(4000),
    format_mask                     VARCHAR2(4000),
    is_required                     BOOLEAN,
    lov_type                        VARCHAR2(4000),
    lov_definition                  VARCHAR2(4000),
    lov_language                    apex_code_exec.t_language,
    shared_lov_id                   NUMBER,
    lov_display_extra               BOOLEAN,
    lov_display_null                BOOLEAN,
    lov_null_text                   VARCHAR2(4000),
    lov_null_value                  VARCHAR2(4000),
    lov_cascade_parent_items        VARCHAR2(4000),
    lov_return_column               VARCHAR2(128),
    lov_display_column              VARCHAR2(128),
    lov_icon_column                 VARCHAR2(128),
    lov_group_column                VARCHAR2(128),
    lov_group_sort_direction        VARCHAR2(16),
    lov_default_sort_column         VARCHAR2(128),
    lov_default_sort_direction      VARCHAR2(16),
    lov_oracle_text_column          VARCHAR2(128),
    lov_columns                     t_lov_columns,
    lov_is_legacy                   BOOLEAN,
    ajax_items_to_submit            VARCHAR2(4000),
    ajax_optimize_refresh           BOOLEAN,
    element_width                   NUMBER,
    element_max_length              NUMBER,
    element_height                  NUMBER,
    element_css_classes             VARCHAR2(4000),
    element_attributes              VARCHAR2(4000),
    element_option_attributes       VARCHAR2(4000),
    icon_css_classes                VARCHAR2(4000),
    escape_output                   BOOLEAN,
    ignore_change                   BOOLEAN DEFAULT TRUE,
    --
    attributes                      apex_t_plugin_attributes,
    --
    attribute_01                    VARCHAR2(32767),
    attribute_02                    VARCHAR2(32767),
    attribute_03                    VARCHAR2(32767),
    attribute_04                    VARCHAR2(32767),
    attribute_05                    VARCHAR2(32767),
    attribute_06                    VARCHAR2(32767),
    attribute_07                    VARCHAR2(32767),
    attribute_08                    VARCHAR2(32767),
    attribute_09                    VARCHAR2(32767),
    attribute_10                    VARCHAR2(32767),
    attribute_11                    VARCHAR2(32767),
    attribute_12                    VARCHAR2(32767),
    attribute_13                    VARCHAR2(32767),
    attribute_14                    VARCHAR2(32767),
    attribute_15                    VARCHAR2(32767),
    attribute_16                    VARCHAR2(32767),
    attribute_17                    VARCHAR2(32767),
    attribute_18                    VARCHAR2(32767),
    attribute_19                    VARCHAR2(32767),
    attribute_20                    VARCHAR2(32767),
    attribute_21                    VARCHAR2(32767),
    attribute_22                    VARCHAR2(32767),
    attribute_23                    VARCHAR2(32767),
    attribute_24                    VARCHAR2(32767),
    attribute_25                    VARCHAR2(32767),
    init_javascript_code            VARCHAR2(32767),
    inline_help_text                VARCHAR2(4000),
    inline_help_id                  VARCHAR2(270),
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.20 t_item_ajax_result

The `t_item_ajax_result` type is used as the result type for the Ajax function of an item type plug-in.

```
type t_item_ajax_result is record (
    dummy boolean /* not used yet */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.21 t_item_meta_data_result

The `t_item_meta_data_result` type is used as the result type for the meta data function of an item type plug-in.

Syntax

```
TYPE T_ITEM_META_DATA_RESULT IS RECORD (
    is_multi_value          BOOLEAN DEFAULT FALSE,  /* (Deprecated) Declare if multiple values can be selected
                                                    in an LOV-based item plug-in */
    display_lov_definition  VARCHAR2(32767),        /* Provides the lov definition (SQL-statement) to the
                                                    interactive grid */
    return_display_value    BOOLEAN DEFAULT TRUE,   /* Declare if item plug-in has a display and return
                                                    value or just a return value */
    escape_output           BOOLEAN DEFAULT TRUE,   /* Declare if output should be escaped or not e.g. in
                                                    Interactive Grid. Used for HTML Markup based items
                                                    like an image item plug-in */
    container_css_classes   VARCHAR2(32767)         /* Add CSS classes on container level for an item plug-in */
);
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.22 t_item_render_param

The t_item_render_param type is passed into render procedure of the item type plug-in and contains information about the current page item value.

```
type t_item_render_param is record (
    value_set_by_controller BOOLEAN DEFAULT FALSE,
    value                   VARCHAR2(32767),
    clob_value              CLOB,
    is_readonly             BOOLEAN DEFAULT FALSE,
    is_printer_friendly     BOOLEAN DEFAULT FALSE
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.23 t_item_render_result

The `t_item_render_result` type is used as the result type for the rendering function of an item type plug-in.

```
type t_item_render_result is record (
    is_navigable           boolean default false,
    navigable_dom_id       varchar2(255),         /* should only be set if navigable element is not equal to item name */
    item_rendered          boolean default true   /* should be set to false if the render procedure didn't render anything,
                                                     this could be the case for a read only item in IG */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.24 t_item_validation_result

The `t_item_validation_result` type is used as the result type for the validation function of an item type plug-in.

```
type t_item_validation_result is record (
    message          varchar2(32767),
    display_location varchar2(40),    /* if not set the application default is used */
    page_item_name   varchar2(255) ); /* if not set the validated page item name is used */
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.25 t_plugin

The `t_plugin` type is passed into all plug-in functions and contains information about the current plug-in.

```
type t_plugin is record (
    static_id    varchar2(45),
    file_prefix  varchar2(4000),
    attributes   t_plugin_attributes,
    attribute_01 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_02 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_03 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_04 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_05 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_06 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_07 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_08 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_09 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_10 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_11 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_12 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_13 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_14 varchar2(32767)               /* Deprecated: 26.1 */,
    attribute_15 varchar2(32767)               /* Deprecated: 26.1 */,
    name         varchar2(45)                  /* Deprecated: 26.1 */
);
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.26 t_plugin_attributes

```
type t_plugin_attributes is object (
    function get_varchar2 (
        p_static_id     IN VARCHAR2
        --
        p_default_value               IN VARCHAR2    DEFAULT NULL,
        p_do_substitutions            IN BOOLEAN     DEFAULT FALSE,
        p_do_serveronly_substitutions IN BOOLEAN     DEFAULT FALSE,
        p_substitutions_escape_mode   IN apex_session_state.t_escape_mode
                                 DEFAULT apex_session_state.c_escape_mode_html )
        RETURN VARCHAR2
        -–
    function get_number (
        p_static_id     IN VARCHAR2,
        --
        p_default_value IN NUMBER DEFAULT NULL )
        RETURN NUMBER

        –-Y returns TRUE / N returns FALSE
    function get_boolean (
        p_static_id     IN VARCHAR2,
        --
        p_default_value IN BOOLEAN DEFAULT NULL )
        RETURN BOOLEAN
    procedure put        (
        p_key           IN VARCHAR2,
        p_value         IN VARCHAR2 )
);
```

Note:

The parameters `p_do_substitutions` and `p_do_serveronly_substitutions` cannot be used in the same function call.

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.27 t_process

The `t_process` type is passed into all process type plug-in functions and contains information about the current process.

```
type t_process is record (
    id                   number,
    name                 varchar2(255),
    region_id            number,
    row_num              number,
    correlation_context  varchar2(4000),
    component_type       varchar2(30),
    success_message      varchar2(32767),
    --
    attributes           apex_t_plugin_attributes );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.28 t_process_exec_result

The `t_process_exec_result` type is used as the result type for the execution function of a process type plug-in.

```
type t_process_exec_result is record (
    success_message varchar2(32767)
    execution_skipped boolean default false /* set to TRUE if process execution has been skipped by plug-in because of additional condition checks */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.29 t_region

The `t_region` type is passed into all region type plug-in functions and contains information about the current region.

```
type t_region is record (
    id                              NUMBER,
    static_id                       VARCHAR2(255), /* deprecated */
    dom_id                          VARCHAR2(255), /* The HTML DOM id for the current region. */
    name                            VARCHAR2(4000),
    title                           VARCHAR2(4000),
    type                            VARCHAR2(255),
    source                          VARCHAR2(32767),
    lazy_loading                    BOOLEAN,
    ajax_items_to_submit            VARCHAR2(32767),
    ajax_items_to_submit_singlerow  VARCHAR2 (32767),
    fetched_rows                    PLS_INTEGER,
    escape_output                   BOOLEAN,
    error_message                   VARCHAR2(32767), /* obsolete */
    no_data_found_message           VARCHAR2(32767),
    attributes                      t_plugin_attributes, /* only used by region plug-ins */
    attribute_01                    VARCHAR2(32767),
    attribute_02                    VARCHAR2(32767),
    attribute_03                    VARCHAR2(32767),
    attribute_04                    VARCHAR2(32767),
    attribute_05                    VARCHAR2(32767),
    attribute_06                    VARCHAR2(32767),
    attribute_07                    VARCHAR2(32767),
    attribute_08                    VARCHAR2(32767),
    attribute_09                    VARCHAR2(32767),
    attribute_10                    VARCHAR2(32767),
    attribute_11                    VARCHAR2(32767),
    attribute_12                    VARCHAR2(32767),
    attribute_13                    VARCHAR2(32767),
    attribute_14                    VARCHAR2(32767),
    attribute_15                    VARCHAR2(32767),
    attribute_16                    VARCHAR2(32767),
    attribute_17                    VARCHAR2(32767),
    attribute_18                    VARCHAR2(32767),
    attribute_19                    VARCHAR2(32767),
    attribute_20                    VARCHAR2(32767),
    attribute_21                    VARCHAR2(32767),
    attribute_22                    VARCHAR2(32767),
    attribute_23                    VARCHAR2(32767),
    attribute_24                    VARCHAR2(32767),
    attribute_25                    VARCHAR2(32767),
    filter_region_id                NUMBER,
    filter_region_static_id         VARCHAR2(255), /* deprecated, use filter_region_dom_id */
    filter_region_dom_id            VARCHAR2(255),
    region_columns                  t_region_columns,
    init_javascript_code            VARCHAR2(32767) );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.30 t_region_ajax_result

The `t_region_ajax_result` type is used as result type for the Ajax function of a region type plug-in.

```
type t_region_ajax_result is record (
    dummy boolean /* not used yet */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.31 t_region_column

The `t_region_column` type is passed into all region type plug-in functions and contains information about the current region.

```
type  t_region_column is record (
    id                   number,
    name                 t_region_column_name,
    is_displayed         boolean,
    heading              apex_region_columns.heading%type,
    heading_alignment    apex_region_columns.heading_alignment%type,
    value_alignment      apex_region_columns.value_alignment%type,
    value_css_classes    apex_region_columns.value_css_classes%type,
    value_attributes     apex_region_columns.value_attributes%type,
    format_mask          apex_region_columns.format_mask%type,
    escape_output        boolean,
    attributes           t_plugin_attributes,
    attribute_01         varchar2(32767),
    attribute_02         varchar2(32767),
    attribute_03         varchar2(32767),
    attribute_04         varchar2(32767),
    attribute_05         varchar2(32767),
    attribute_06         varchar2(32767),
    attribute_07         varchar2(32767),
    attribute_08         varchar2(32767),
    attribute_09         varchar2(32767),
    attribute_10         varchar2(32767),
    attribute_11         varchar2(32767),
    attribute_12         varchar2(32767),
    attribute_13         varchar2(32767),
    attribute_14         varchar2(32767),
    attribute_15         varchar2(32767),
    attribute_16         varchar2(32767),
    attribute_17         varchar2(32767),
    attribute_18         varchar2(32767),
    attribute_19         varchar2(32767),
    attribute_20         varchar2(32767),
    attribute_21         varchar2(32767),
    attribute_22         varchar2(32767),
    attribute_23         varchar2(32767),
    attribute_24         varchar2(32767),
    attribute_25         varchar2(32767);
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.32 t_region_columns

```
type t_region_columns is table of t_region_column index by
        pls_integer;
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.33 t_region_render_param

```
type t_region_render_param is record (
    is_printer_friendly boolean
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.34 t_region_render_result

The `t_region_render_result` type is used as the result type for the rendering function of a region type plug-in.

```
type t_region_render_result is record (
    navigable_dom_id varchar2(255) /* can be used to put focus to an input field (that is, search field) the region renders as part of the plug-in output */
    );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.35 t_remote_server_config

Used in the configuration procedure of flexible servers.

```
type t_remote_server_config is record(
    base_url        varchar2(4000),
    substitutions   wwv_flow_t_varchar2 );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

### 46.3.36 t_remote_server_info

Used in the configuration procedure of flexible servers.

```
type t_remote_server_info is record(
    application_id          number,
    remote_server_static_id varchar2(255) );
```

**Parent topic:** [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN-Data-Types.html#GUID-93D46E76-0813-470A-8177-51E9F67128D7)

------------------------------------------------------------------------

## 46.4 GET_AJAX_IDENTIFIER Function

This function returns the Ajax identifier used to call the Ajax callback function defined for the plug-in.

Note:

This function only works in the context of a plug-in rendering function call and only if the plug-in has defined an Ajax function callback in the plug-in definition.

Syntax

```
APEX_PLUGIN.GET_AJAX_IDENTIFIER
RETURN VARCHAR2;
```

Parameters

None.

Example

This is an example of a dynamic action plug-in rendering function that supports an Ajax callback.

```
FUNCTION RENDER_SET_VALUE (
    p_dynamic_action in apex_plugin.t_dynamic_action )
    return apex_plugin.t_dynamic_action_render_result
IS
    l_result                apex_plugin.t_dynamic_action_render_result;
BEGIN
    l_result.javascript_function := 'com_oracle_apex_set_value';
    l_result.ajax_identifier     := apex_plugin.get_ajax_identifier;
    return l_result;
END;
```

**Parent topic:** [APEX_PLUGIN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E4CF534E-D795-44B6-8C3D-C464A8EF115C)

------------------------------------------------------------------------

## 46.6 GET_INPUT_NAME_FOR_ITEM Function

Returns the name attribute that must be used for an HTML input element if you want that value stored in session state when the page is submitted.

Syntax

```
APEX_PLUGIN.GET_INPUT_NAME_FOR_ITEM
    RETURN t_input_name;
```

Example

The following example outputs the necessary HTML code to render a text field where the value gets stored in session state when the page is submitted.

```
sys.htp.prn (
    '<input type="text" id="'||p_item.name||'" '||
    'name="'||apex_plugin.get_input_name_for_item(false)||'" '||
    'value="'||sys.htf.escape_sc(p_value)||'" '||
    'size="'||p_item.element_width||'" '||
    'maxlength="'||p_item.element_max_length||'" '||
    coalesce(p_item.element_attributes, 'class="text_field"')||' />' );
```

**Parent topic:** [APEX_PLUGIN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E4CF534E-D795-44B6-8C3D-C464A8EF115C)

------------------------------------------------------------------------

## 46.7 GET_INPUT_NAME_FOR_PAGE_ITEM Function (Deprecated)

Caution:

This API is deprecated and will be removed in a future release.

Use [GET_INPUT_NAME_FOR_ITEM Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN_UTIL.GET_INPUT_NAME_FOR_ITEM-Function.html#GUID-0E550FCD-A82B-4AFB-A4C5-E1334E50086D) instead.

Use this function when you want to render an HTML input element in the rendering function of an item type plug-in. For the HTML input element, for example, `<input type="text" id="P1_TEST" name="xxx">`, you have to provide a value for the `name` attribute so that Oracle APEX can map the submitted value to the actual page item in session state. This function returns the mapping `name` for your page item.

Note:

This function is only useful when called in the rendering function of an item type plug-in.

Syntax

```
APEX_PLUGIN.GET_INPUT_NAME_FOR_PAGE_ITEM (
    p_is_multi_value    IN BOOLEAN )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_is_multi_value` | If the HTML input element has multiple values, such as a select list with `multiple=``"multiple"`, then set `p_is_multi_value` to `TRUE`. |

Example

The following example outputs the necessary HTML code to render a text field where the value gets stored in session state when the page is submitted.

```
sys.htp.prn (
    '<input type="text" id="'||p_item.name||'" '||
    'name="'||apex_plugin.get_input_name_for_page_item(false)||'" '||
    'value="'||sys.htf.escape_sc(p_value)||'" '||
    'size="'||p_item.element_width||'" '||
    'maxlength="'||p_item.element_max_length||'" '||
    coalesce(p_item.element_attributes, 'class="text_field"')||' />' );
```

**Parent topic:** [APEX_PLUGIN](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E4CF534E-D795-44B6-8C3D-C464A8EF115C)
