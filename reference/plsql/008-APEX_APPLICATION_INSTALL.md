<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 8  APEX_APPLICATION_INSTALL

The `APEX_APPLICATION_INSTALL` package provides many methods to modify application attributes during the Oracle APEX application installation process.

- [About the APEX_APPLICATION_INSTALL API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview.html#GUID-8B11F547-15A7-467F-AAFD-BE240F75E927)
- [Attributes Manipulated by APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Attributes-Manipulated-by-APEX_APPLICATION_INSTALL.html#GUID-1062D225-B557-48B2-8739-0A38C7F55956)
- [Import Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL-Data-Types.html#GUID-2347958B-A9CC-437C-9FEA-D2B9A58ADB4C)
- [Import Script Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html#GUID-3FA670B9-823F-4630-9E0E-29F3A61666F2)
- [ADD_DATA_REPORTER_REMAP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL-ADD_DATA_REPORTER_REMAP-Procedure.html#GUID-7D7D5EE9-FB0F-4612-8770-F1DFB6060059)
- [CLEAR_ALL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_ALL-Procedure.html#GUID-78369470-ED8E-4379-B89B-F3C54308248D)
- [CLEAR_DATASET_IMPORT_MODES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.CLEAR_DATASET_IMPORT_MODES-Procedure.html#GUID-707C5D77-3A48-4BE5-8539-0BDD4B7678E7)
- [CLEAR_DATA_REPORTER_REMAP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.CLEAR_DATA_REPORTER_REMAP-Procedure.html#GUID-52AD48FE-69D6-4280-ACEE-29AAAA91420E)
- [GENERATE_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_APPLICATION_ID-Procedure.html#GUID-928F4CEC-42D8-4CE7-9754-433EA4C4D899)
- [GENERATE_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_OFFSET-Procedure.html#GUID-3489119C-C57D-406A-AC42-9AC089BE1668)
- [GET_APPLICATION_ALIAS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS-Function.html#GUID-28FDA0C6-44BC-4B66-A2E1-856913DAEB26)
- [GET_APPLICATION_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_ID-Function.html#GUID-FFAD05A9-F1C6-44DF-89F6-8D127EE7B4A2)
- [GET_APPLICATION_NAME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_NAME-Function.html#GUID-2AF12D9D-0250-44D2-8E7C-BD28C0AEF62C)
- [GET_AUTHENTICATION_SCHEME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_AUTHENTICATION_SCHEME-Function.html#GUID-465BBDAA-E1F9-4250-86B2-369D4C731F51)
- [GET_AUTO_INSTALL_SUP_OBJ Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AUTO_INSTALL_SUP_OBJ-Function.html#GUID-16ADECB8-FE73-4B83-A408-0C661821C063)
- [GET_BUILD_STATUS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_BUILD_STATUS-Function.html#GUID-B82A06BF-7294-4FAA-8BD3-541FF2C7BA6B)
- [GET_DATA_REPORTER_REMAP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_DATA_REPORTER_REMAP-Function.html#GUID-157DA98C-1176-41A1-9495-B03CAF22804A)
- [GET_DATASET_IMPORT_MODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_DATASET_IMPORT_MODE-Function.html#GUID-1C659B8D-417F-466A-B675-74440FBF72F4)
- [GET_IMAGE_PREFIX Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_IMAGE_PREFIX-Function.html#GUID-457F5A77-6CC3-44A7-B3C5-792D05ED0669)
- [GET_INFO Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INFO-Function.html#GUID-A9851A90-DBD1-45A0-9076-06A921C8EF70)
- [GET_KEEP_BACKGROUND_EXECS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_KEEP_BACKGROUND_EXECS-Function.html#GUID-E2B22CA2-A9D8-4DFE-906D-10357C4CF9EC)
- [GET_KEEP_SESSIONS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_KEEP_SESSIONS-Function.html#GUID-3309F3E6-BB2E-4ED4-8D88-3E0CAB672E03)
- [GET_MAX_SCHEDULER_JOBS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_MAX_SCHEDULER_JOBS-Function.html#GUID-0D413F89-15D0-414A-BACA-6DC886CB74AC)
- [GET_NO_PROXY_DOMAINS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_NO_PROXY_DOMAINS-Function.html#GUID-1F15E62C-AA10-4A11-BCEE-902356FE9DA6)
- [GET_OFFSET Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_OFFSET-Function.html#GUID-3D2426BE-3842-4025-80AE-EA09084FE40D)
- [GET_PASS_ECID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_PASS_ECID-Function.html#GUID-CEE56C2E-4E5D-4F63-8155-4B84ECC5AED1)
- [GET_PROXY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PROXY-Function.html#GUID-B2E67A54-16E2-480C-9460-222A88B0ACC1)
- [GET_REMOTE_SERVER_AI_ATTRS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_ATTRS-Function.html#GUID-66BB1F3C-E9C2-4387-B8CD-A97D8FBFFF01)
- [GET_REMOTE_SERVER_AI_HEADERS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_HEADERS-Function.html#GUID-C56EA07C-C404-48DB-AA2A-EF5DFED25744)
- [GET_REMOTE_SERVER_AI_MAXTOKENS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS-Function.html#GUID-C8F40771-67E4-454F-8B90-6B909880051C)
- [GET_REMOTE_SERVER_AI_MODEL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_MODEL-Function.html#GUID-7636CBBD-31A6-4715-8654-DDE9E0E33083)
- [GET_REMOTE_SERVER_BASE_URL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_BASE_URL-Function.html#GUID-67EA8C5D-2B06-4F6A-8719-64D5BCA9D171)
- [GET_REMOTE_SERVER_DEFAULT_DB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_DEFAULT_DB-Function.html#GUID-C6EF728F-47F1-4C0C-AF92-E743750A8FF4)
- [GET_REMOTE_SERVER_HTTPS_HOST Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_HTTPS_HOST-Function.html#GUID-3AC608E6-898F-440A-B6CA-7F12A49CC468)
- [GET_REMOTE_SERVER_SQL_MODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_SQL_MODE-Function.html#GUID-74B0A7F6-F6E8-4248-A417-04EB970F3536)
- [GET_REST_SOURCE_CATALOG_GROUP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REST_SOURCE_CATALOG_GROUP-Function.html#GUID-0E01B631-6A79-4B09-8EA7-69CB3026899B)
- [GET_SCHEMA Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SCHEMA-Function.html#GUID-51696980-0A45-4D75-B294-BC33AD6A5BE7)
- [GET_SUBSCRIPTION_MAPPING Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MAPPING-Function.html#GUID-A6F66402-8C0B-44A5-9B7C-D26902CBE001)
- [GET_SUBSCRIPTION_MODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MODE-Function.html#GUID-AEE61250-8DEE-4643-AAD8-290C0A095252)
- [GET_THEME_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_THEME_ID-Function.html#GUID-8D4F4284-A324-4932-8047-4A3DDA04A305)
- [GET_WORKSPACE_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_ID-Function.html#GUID-F79B0F60-3CB7-4CCF-B8DD-A7262F2386FA)
- [INSTALL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INSTALL-Procedure.html#GUID-D44BDEE9-C249-4984-987E-55F1DABD6B03)
- [REMOVE_APPLICATION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.REMOVE_APPLICATION-Procedure.html#GUID-7EB6E461-5403-4D67-BD0C-F22366657C1E)
- [SET_APPLICATION_ALIAS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS-Procedure.html#GUID-4201E565-179F-4743-95AC-3FEBE084C30E)
- [SET_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_ID-Procedure.html#GUID-D938108A-6F87-4D29-971E-3B0BD9EE3B77)
- [SET_APPLICATION_NAME Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_NAME-Procedure.html#GUID-C7D67472-6027-446D-9FD4-EE50949906C4)
- [SET_AUTHENTICATION_SCHEME Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_AUTHENTICATION_SCHEME-Procedure.html#GUID-F3F7D641-C5F8-4BF7-8A66-D3590A9735AA)
- [SET_AUTO_INSTALL_SUP_OBJ Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_AUTO_INSTALL_SUP_OBJ-Procedure.html#GUID-8B412FF8-3A51-45C2-B2B9-40532F65EFD1)
- [SET_BUILD_STATUS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_BUILD_STATUS-Function.html#GUID-D75D7CED-7447-4458-A655-0DEDE8458527)
- [SET_DATASET_IMPORT_MODE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_DATASET_IMPORT_MODE-Function.html#GUID-F4D53593-B292-43C4-813D-273B300C7F23)
- [SET_IMAGE_PREFIX Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX-Procedure.html#GUID-8F39E8E2-41A4-4B47-A116-9F3E95DABE15)
- [SET_KEEP_BACKGROUND_EXECS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_BACKGROUND_EXECS-Procedure.html#GUID-7256F0F4-F017-4687-BC23-830D57EC1BDF)
- [SET_KEEP_SESSIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_SESSIONS-Procedure.html#GUID-3FF4CA7A-413D-4901-8291-11EEA8141EBE)
- [SET_MAX_SCHEDULER_JOBS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS-Procedure.html#GUID-8DAED95A-D0C7-4EF8-81CC-E5CE7287A45B)
- [SET_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_OFFSET-Procedure.html#GUID-22E45DC6-DACC-4B1B-AAB1-BCCAC8499D12)
- [SET_PASS_ECID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_PASS_ECID-Procedure.html#GUID-23CB31CB-7281-4DED-AA80-F8BA34E38DD3)
- [SET_PROXY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PROXY-Procedure.html#GUID-E880E9BC-1068-4382-9153-7951EC7AB018)
- [SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)
- [SET_REST_SOURCE_CATALOG_GROUP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REST_SOURCE_CATALOG_GROUP-Procedure.html#GUID-3A7D636D-67DF-4635-9BFC-DA0277458F56)
- [SET_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SCHEMA-Procedure.html#GUID-91E19233-28AA-4668-94EB-55A67BA4D564)
- [SET_SUBSCRIPTION_MAPPING Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MAPPING-Procedure.html#GUID-93AE8771-378E-4832-B215-9C111DC1F52E)
- [SET_SUBSCRIPTION_MODE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MODE-Procedure.html#GUID-2FBC9790-8F45-4FE3-B5BA-0DD055050E2C)
- [SET_THEME_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_THEME_ID-Procedure.html#GUID-D2801033-602C-40C0-9EE4-E7B1A4BBF1B4)
- [SET_WORKSPACE_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_ID-Procedure.html#GUID-3A865D87-BD45-4492-9076-BFB88FF22B8C)
- [SET_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_WORKSPACE_Procedure.html#GUID-71BA5D9B-3139-45C5-8612-CD827FA631DD)
- [SUSPEND_BACKGROUND_EXECS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUSPEND_BACKGROUND_EXECS-Procedure.html#GUID-F856D8DF-D5FD-460F-9DF6-91E447983D97)

------------------------------------------------------------------------

## 8.1 About the APEX_APPLICATION_INSTALL API

Oracle APEX provides two ways to import an application into an APEX instance:

1.  Uploading an application export file by using the web interface of APEX.
2.  Execution of the application export file as a SQL script, typically in the command-line utility SQLcl.

Using the file upload capability of the web interface of APEX, developers can import an application with a different application ID, different workspace ID and different parsing schema. But when importing an application by using a command-line tool like SQLcl, none of these attributes (application ID, workspace ID, parsing schema) can be changed without directly modifying the application export file.

To view the install log, enter the following from the command-line tool, so the server outputs are displayed:

```
set serveroutput on unlimited
```

As more and more APEX customers create applications which are meant to be deployed by using command-line utilities or by using a non-web-based installer, they are faced with this challenge of how to import their application into an arbitrary workspace on any APEX instance.

Another common scenario is in a training class when installing an application into 50 different workspaces that all use the same application export file. Today, customers work around this by adding their own global variables to an application export file and then varying the values of these globals at installation time. However, this manual modification of the application export file (usually done with a post-export sed or awk script) should not be necessary.

Application Express 4.0 and higher includes the APEX_APPLICATION_INSTALL API. This PL/SQL API provides many methods to set application attributes during the APEX application installation process. All export files in Application Express 4.0 and higher contain references to the values set by the APEX_APPLICATION_INSTALL API. However, the methods in this API are only used to override the default application installation behavior.

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.2 Attributes Manipulated by APEX_APPLICATION_INSTALL

The table below lists the attributes that can be set by functions in this API.

| Attribute | Description |
|:---|:---|
| `Workspace ID` | Workspace ID of the application to be imported. See [GET_WORKSPACE_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_ID-Function.html#GUID-F79B0F60-3CB7-4CCF-B8DD-A7262F2386FA), [SET_WORKSPACE_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_ID-Procedure.html#GUID-3A865D87-BD45-4492-9076-BFB88FF22B8C). |
| `Application ID` | Application ID of the application to be imported. See [GENERATE_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_APPLICATION_ID-Procedure.html#GUID-928F4CEC-42D8-4CE7-9754-433EA4C4D899), [GET_APPLICATION_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_ID-Function.html#GUID-FFAD05A9-F1C6-44DF-89F6-8D127EE7B4A2), [SET_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_ID-Procedure.html#GUID-D938108A-6F87-4D29-971E-3B0BD9EE3B77). |
| `Offset` | Offset value used during application import. See [GENERATE_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_OFFSET-Procedure.html#GUID-3489119C-C57D-406A-AC42-9AC089BE1668), [GET_OFFSET Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_OFFSET-Function.html#GUID-3D2426BE-3842-4025-80AE-EA09084FE40D), [SET_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_OFFSET-Procedure.html#GUID-22E45DC6-DACC-4B1B-AAB1-BCCAC8499D12). |
| `Schema` | The parsing schema ("`owner`") of the application to be imported. See [GET_SCHEMA Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SCHEMA-Function.html#GUID-51696980-0A45-4D75-B294-BC33AD6A5BE7), [SET_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SCHEMA-Procedure.html#GUID-91E19233-28AA-4668-94EB-55A67BA4D564). |
| `Name` | Application name of the application to be imported. See [GET_APPLICATION_NAME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_NAME-Function.html#GUID-2AF12D9D-0250-44D2-8E7C-BD28C0AEF62C), [SET_APPLICATION_NAME Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_NAME-Procedure.html#GUID-C7D67472-6027-446D-9FD4-EE50949906C4). |
| `Alias` | Application alias of the application to be imported. See [GET_APPLICATION_ALIAS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS-Function.html#GUID-28FDA0C6-44BC-4B66-A2E1-856913DAEB26), [SET_APPLICATION_ALIAS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS-Procedure.html#GUID-4201E565-179F-4743-95AC-3FEBE084C30E). |
| `Image Prefix` | The image prefix of the application to be imported. See [GET_IMAGE_PREFIX Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_IMAGE_PREFIX-Function.html#GUID-457F5A77-6CC3-44A7-B3C5-792D05ED0669), [SET_IMAGE_PREFIX Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX-Procedure.html#GUID-8F39E8E2-41A4-4B47-A116-9F3E95DABE15). |
| `Proxy` | The proxy server attributes of the application to be imported. See [GET_PROXY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PROXY-Function.html#GUID-B2E67A54-16E2-480C-9460-222A88B0ACC1), [SET_PROXY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PROXY-Procedure.html#GUID-E880E9BC-1068-4382-9153-7951EC7AB018). |

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.3 Import Data Types

The section describes import data types used by the `APEX_APPLICATION_INSTALL` package.

t_file_type

`t_file_type` data types define the kinds of install files.

```
subtype t_file_type is pls_integer range 1 .. 6;
c_file_type_workspace           constant t_file_type := 1;
c_file_type_app                 constant t_file_type := 2;
c_file_type_websheet            constant t_file_type := 3;
c_file_type_plugin              constant t_file_type := 4;
c_file_type_css                 constant t_file_type := 5;
c_file_type_apexlang_app        constant t_file_type := 6;
```

Note:

The constant `c_file_type_websheet` is no longer used in APEX.

t_app_usage

`t_app_usage` data types define the kinds of application usage.

```
subtype t_app_usage is pls_integer range 1..3;
c_app_usage_not_used            constant t_app_usage := 1;
c_app_usage_current_workspace   constant t_app_usage := 2;
c_app_usage_other_workspace     constant t_app_usage := 3;
```

t_dataset_import_mode

`t_dataset_import_mode` data types define how Data Reporter datasets should be handled during application installation.

```
subtype t_dataset_import_mode is pls_integer range 1..2;
c_dataset_keep            constant t_app_usage := 1;
c_dataset_overwrite       constant t_app_usage := 2;
```

t_file_info

`t_file_info` data types specify information in a source file that can be used to configure the installation.

```
type t_file_info is record (
     file_type                   t_file_type,
     workspace_id                number,
     workspace_name              varchar2(4000),
     version                     varchar2(10),
     app_id                      number,
     app_name                    varchar2(4000),
     app_alias                   varchar2(4000),
     app_owner                   varchar2(4000),
     build_status                varchar2(4000),
     has_install_script          boolean,
     app_id_usage                t_app_usage,
     app_alias_usage             t_app_usage,
     master_app_ids              t_number );
```

t_subscription_mode

`t_subscription_mode` data types specify how subscriptions are handled during the application installation.

```
subtype t_subscription_mode is pls_integer range 1..4;
```

| Name | Value | Description |
|:---|:---|:---|
| `c_subscription_strict` | 1 | Use this option to include the subscriptions during the installation. If installation process can't resolve a component based on component static id, it raises an error. This is the default installation option. |
| `c_subscription_ignore_errors` | 2 | Use this option to include the subscriptions during the installation. If installation process can't resolve a component based on component static id, it is ignored. |
| `c_subscription_remove` | 3 | Use this option to remove the subscriptions during the installation. |
| `c_subscription_legacy` | 4 | Use this option to install the application in legacy mode. With this subscription mode, installation process uses Subscription ID from the import file as it is. It does not try to resolve a component based on App ID and Component Static ID, |

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.4 Import Script Examples

Using the workspace `FRED_DEV` on the development instance, you generate an application export of application 645 and save it as file `f645.sql`. All examples in this section assume you are connected to SQLcl.

Import Application without Modification

To import this application back into the FRED_DEV workspace on the same development instance using the same application ID:

`@f645.sql`

Import Application with Specified Application ID

To import this application back into the FRED_DEV workspace on the same development instance, but using application ID 702:

```
BEGIN
  apex_application_install.set_application_id( 702);
  apex_application_install.generate_offset;
  apex_application_install.set_application_alias( 'F' || apex_application_install.get_application_id );
END;
/

@645.sql
```

Import Application with Generated Application ID

To import this application back into the FRED_DEV workspace on the same development instance, but using an available application ID generated by Oracle APEX:

```
BEGIN
  apex_application_install.generate_application_id;
  apex_application_install.generate_offset;
  apex_application_install.set_application_alias( 'F' || apex_application_install.get_application_id );
END;
/

@f645.sql
```

Import Application into Different Workspace using Different Schema

To import this application into the FRED_PROD workspace on the production instance, using schema FREDDY, and the workspace ID of FRED_DEV and FRED_PROD are different:

```
BEGIN
    apex_application_install.set_workspace('FRED_PROD');
    apex_application_install.generate_offset;
    apex_application_install.set_schema( 'FREDDY' );
    apex_application_install.set_application_alias( 'FREDPROD_APP' );
END;
/

@f645.sql
```

Import into Training Instance for Three Different Workspaces

To import this application into the Training instance for 3 different workspaces:

```
BEGIN
    apex_application_install.set_workspace('TRAINING1');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.set_schema( 'STUDENT1' );
    apex_application_install.set_application_alias( 'F' || apex_application_install.get_application_id );
END;
/

@f645.sql

BEGIN
    apex_application_install.set_workspace('TRAINING2');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.set_schema( 'STUDENT2' );
    apex_application_install.set_application_alias( 'F' || apex_application_install.get_application_id );
END;
/

@f645.sql

BEGIN
    apex_application_install.set_workspace('TRAINING3');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.set_schema( 'STUDENT3' );
    apex_application_install.set_application_alias( 'F' || apex_application_install.get_application_id );
    END;
/

@f645.sql
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.5 ADD_DATA_REPORTER_REMAP Procedure

This procedure remaps a data reporter object owner when importing a dataset or reporting app.

Syntax

```
PROCEDURE apex_application_install.add_data_reporter_remap (
    p_schema_from    IN   VARCHAR2,
    p_schema_to      IN   VARCHAR2 );
```

Parameters

| Parameter       | Description                          |
|:----------------|:-------------------------------------|
| `p_schema_from` | The source schema to map from.       |
| `p_schema_to`   | The target schema we are mapping to. |

Example

The following example demonstrates how to remap data reporter objects owned by HR to the DEMO scheme and objects owned by SALES to the PROJECTS schema.

```
begin
    apex_application_install.set_workspace('EXAMPLE');
    apex_application_install.add_data_reporter_remap ( 'HR', 'DEMO' );
    apex_application_install.add_data_reporter_remap ( 'SALES', 'PROJECTS' );
end;
@dr_dataset_example.sql
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.6 CLEAR_ALL Procedure

This procedure clears all values currently maintained in the `APEX_APPLICATION_INSTALL` package.

Syntax

```
APEX_APPLICATION_INSTALL.CLEAR_ALL;
```

Parameters

None.

Example

The following example clears all values currently set by the `APEX_APPLICATION_INSTALL` package.

```
begin
    apex_application_install.clear_all;
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.7 CLEAR_DATASET_IMPORT_MODES Procedure

This procedure clears all dataset import mode settings configured using the APEX_APPLICATION_INSTALL package.

Syntax

```
PROCEDURE apex_application_install.clear_dataset_import_modes;
```

Parameters

This procedure has no parameters.

Example

The following example clears all dataset import mode settings currently set in the APEX_APPLICATION_INSTALL package.

```
begin
    apex_application_install.clear_dataset_import_modes;
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.8 CLEAR_DATA_REPORTER_REMAP Procedure

This procedure clears all values for remapped data reporter schemas in the APEX_APPLICATION_INSTALL package.

Syntax

```
PROCEDURE apex_application_install.clear_data_reporter_remap;
```

Parameters

This procedure has no parameters.

Example

The following example clears all data reporter remap schema values currently set in the APEX_APPLICATION_INSTALL package.

```
begin
    apex_application_install.clear_data_reporter_remap;
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.9 GENERATE_APPLICATION_ID Procedure

This procedure generates an available application ID on the instance and sets the application ID in APEX_APPLICATION_INSTALL.

Syntax

```
APEX_APPLICATION_INSTALL.GENERATE_APPLICATION_ID;
```

Parameters

None.

See Also:

- [GET_APPLICATION_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_ID-Function.html#GUID-FFAD05A9-F1C6-44DF-89F6-8D127EE7B4A2)
- [Import Script Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html#GUID-3FA670B9-823F-4630-9E0E-29F3A61666F2)
- [SET_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_ID-Procedure.html#GUID-D938108A-6F87-4D29-971E-3B0BD9EE3B77)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.10 GENERATE_OFFSET Procedure

This procedure generates the offset value used during application import. Use the offset value to ensure that the metadata for the Oracle APEX application definition does not collide with other metadata on the instance. For a new application installation, it is usually sufficient to call this procedure to have APEX generate this offset value for you.

Syntax

```
APEX_APPLICATION_INSTALL.GENERATE_OFFSET;
```

Parameters

None.

See Also:

- [GET_OFFSET Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_OFFSET-Function.html#GUID-3D2426BE-3842-4025-80AE-EA09084FE40D)
- [Import Script Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html#GUID-3FA670B9-823F-4630-9E0E-29F3A61666F2)
- [SET_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_OFFSET-Procedure.html#GUID-22E45DC6-DACC-4B1B-AAB1-BCCAC8499D12)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.11 GET_APPLICATION_ALIAS Function

This function gets the application alias for the application to be imported. This is only used if the application to be imported has an alias specified. An application alias must be unique within a workspace and it is recommended to be unique within an instance.

Syntax

```
APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS
RETURN VARCHAR2;
```

Parameters

None.

Example

The following example returns the value of the application alias value in the `APEX_APPLICATION_INSTALL` package. The application alias must be 255 characters or less.

```
DECLARE
    l_alias varchar2(255);
BEGIN
    l_alias := apex_application_install.get_application_alias;
END;
```

See Also:

[SET_APPLICATION_ALIAS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS-Procedure.html#GUID-4201E565-179F-4743-95AC-3FEBE084C30E)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.12 GET_APPLICATION_ID Function

Use this function to get the application ID of the application to be imported. The application ID should either not exist in the instance or, if it does exist, must be in the workspace where the application is being imported to.

Syntax

```
APEX_APPLICATION_INSTALL.GET_APPLICATION_ID
RETURN NUMBER;
```

Parameters

None.

Example

The following example returns the value of the application ID value in the `APEX_APPLICATION_INSTALL` package.

```
DECLARE
    l_id number;
BEGIN
    l_id := apex_application_install.get_application_id;
END;
```

See Also:

- [SET_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_ID-Procedure.html#GUID-D938108A-6F87-4D29-971E-3B0BD9EE3B77)
- [GENERATE_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_APPLICATION_ID-Procedure.html#GUID-928F4CEC-42D8-4CE7-9754-433EA4C4D899)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.13 GET_APPLICATION_NAME Function

This function gets the application name of the import application.

Syntax

```
APEX_APPLICATION_INSTALL.GET_APPLICATION_NAME
RETURN VARCHAR2;
```

Parameters

None.

Example

The following example returns the value of the application name value in the `APEX_APPLICATION_INSTALL` package.

```
DECLARE
    l_application_name varchar2(255);
BEGIN
    l_application_name := apex_application_install.get_application_name;
END;
```

See Also:

[SET_APPLICATION_NAME Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_APPLICATION_NAME-Procedure.html#GUID-C7D67472-6027-446D-9FD4-EE50949906C4)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.14 GET_AUTHENTICATION_SCHEME Function

Use this function to retrieve the authentication scheme name that should override the default.

Syntax

```
APEX_APPLICATION_INSTALL.GET_AUTHENTICATION_SCHEME
    RETURN VARCHAR2
```

Example

Print the authentication scheme override.

```
select apex_application_install.get_authentication_scheme
    from sys.dual;
```

See Also:

[SET_AUTHENTICATION_SCHEME Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_AUTHENTICATION_SCHEME-Procedure.html#GUID-F3F7D641-C5F8-4BF7-8A66-D3590A9735AA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.15 GET_AUTO_INSTALL_SUP_OBJ Function

This function retrieves the automatic install of supporting objects settings used during the import of an application. This setting is valid only for command line installs. If the setting is set to `TRUE` and the application export contains supporting objects, it automatically installs or upgrades the supporting objects when an application is imported from the command line.

Syntax

```
APEX_APPLICATION_INSTALL.GET_AUTO_INSTALL_SUP_OBJ
RETURN BOOLEAN;
```

Parameters

None.

Example

The following example returns the value of automatic install of supporting objects setting in the `APEX_APPLICATION_INSTALL` package.

```
DECLARE
    l_auto_install_sup_obj boolean;
BEGIN
    l_auto_install_sup_obj := apex_application_install.get_auto_install_sup_obj;
END;
```

See Also:

[SET_AUTO_INSTALL_SUP_OBJ Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_AUTO_INSTALL_SUP_OBJ-Procedure.html#GUID-8B412FF8-3A51-45C2-B2B9-40532F65EFD1)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.16 GET_BUILD_STATUS Function

This function retrieves the build status that overrides the default.

Syntax

```
APEX_APPLICATION_INSTALL.GET_BUILD_STATUS
    RETURN VARCHAR2;
```

Parameters

None.

Example

The following example prints the build status override.

```
select apex_application_install.get_build_status
    from sys.dual;
```

See Also:

[SET_BUILD_STATUS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_BUILD_STATUS-Function.html#GUID-D75D7CED-7447-4458-A655-0DEDE8458527)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.17 GET_DATA_REPORTER_REMAP Function

This function gets the remapped schema (`owner`) for the supplied schema.

Syntax

```
FUNCTION apex_application_install.get_data_reporter_remap (
    p_schema_from    IN   VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter       | Description                    |
|:----------------|:-------------------------------|
| `p_schema_from` | The source schema to map from. |

Example

The following example returns the remapped schema for the supplied schema name from the APEX_APPLICATION_INSTALL package, set via a call to `apex_application_install.add_data_reporter_remap`. If no mapping exists then the supplied schema is returned.

```
declare
    l_schema varchar2(30);
begin
    l_schema := apex_application_install.get_data_reporter_remap( 'HR' );
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.18 GET_DATASET_IMPORT_MODE Function

This function returns the dataset import mode for the supplied dataset. If no import mode has been set, this function returns null.

Syntax

```
FUNCTION apex_application_install.get_dataset_import_mode (
    p_static_id  IN   VARCHAR2 )
    RETURN t_dataset_import_mode;
```

Parameters

| Parameter     | Description                              |
|:--------------|:-----------------------------------------|
| `p_static_id` | Static ID used to reference the dataset. |

Example

The following example returns the dataset import mode setting for the supplied dataset.

```
declare
    l_import_mode t_dataset_import_mode;
begin
    l_import_mode := apex_application_install.get_dataset_import_mode('HR');
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.19 GET_IMAGE_PREFIX Function

This function gets the image prefix of the import application. Most Oracle APEX instances use the default image prefix of /i/.

Syntax

```
APEX_APPLICATION_INSTALL.GET_IMAGE_PREFIX
RETURN VARCHAR2;
```

Parameters

None.

Example

The following example returns the value of the application image prefix in the `APEX_APPLICATION_INSTALL` package. The application image prefix cannot be more than 255 characters.

```
DECLARE
    l_image_prefix varchar2(255);
BEGIN
    l_image_prefix := apex_application_install.get_image_prefix;
END;
```

See Also:

[SET_IMAGE_PREFIX Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX-Procedure.html#GUID-8F39E8E2-41A4-4B47-A116-9F3E95DABE15)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.20 GET_INFO Function

Use this function to retrieve install information from a source file.

Syntax

```
FUNCTION GET_INFO (
    p_source    IN  apex_t_export_files )
    RETURN t_file_info;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d35595e75" style="text-align: left;" data-valign="bottom" width="29%">Parameter</th>
<th id="d35595e77" style="text-align: left;" data-valign="bottom" width="71%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d35595e81" style="text-align: left;" data-valign="top" width="29%" headers="d35595e75 "><code class="codeph">p_source</code></td>
<td style="text-align: left;" data-valign="top" width="71%" headers="d35595e81 d35595e77 "><p>The source code, a table of (name, contents) with a single record for normal APEX applications or multiple records for applications that were split when exporting.</p>
<p>Note that passing multiple applications is not supported.</p></td>
</tr>
</tbody>
</table>

Returns

This function returns information about the application that can be used to configure the installation.

Raises

This function may raise the folllowing: `WWV_FLOW_IMP_PARSER.RUN_STMT_ERROR: The source contains invalid statements`.

Example

The following example fetches an application from a remote URL and prints its install information.

```
DECLARE
    l_source apex_t_export_files;
    l_info   apex_application_install.t_file_info;
BEGIN
    l_source := apex_t_export_files (
                    apex_t_export_file (
                        name     => 'f100.sql',
                        contents => apex_web_service.make_rest_request (
                                        p_url         => 'https://www.example.com/apps/f100.sql',
                                        p_http_method => 'GET' )));
    l_info   := apex_application_install.get_info (
                    p_source      => l_source );
    sys.dbms_output.put_line (apex_string.format (
         p_message => q'!Type ................. %0
                      !Workspace ............ %1
                      !Version .............. %2
                      !App ID ............... %3
                      !App Name ............. %4
                      !Alias ................ %5
                      !Owner ................ %6
                      !Build Status ......... %7
                      !Has Install Script ... %8
                      !App ID Usage ......... %9
                      !App Alias Usage ...... %10!',
       p0        => l_info.file_type,
       p1        => l_info.workspace_id,
       p2        => l_info.version,
       p3        => l_info.app_id,
       p4        => l_info.app_name,
       p5        => l_info.app_alias,
       p6        => l_info.app_owner,
       p7        => l_info.build_status,
       p8        => apex_debug.tochar(l_info.has_install_script),
       p9        => l_info.app_id_usage,
       p10       => l_info.app_alias_usage,
       p_prefix  => '!' ));
END;
```

See Also:

- [INSTALL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INSTALL-Procedure.html#GUID-D44BDEE9-C249-4984-987E-55F1DABD6B03)
- [GET_APPLICATION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_APPLICATION_Function.html#GUID-A8E626D6-D7DE-4E59-8F90-3666A7A41A87)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.21 GET_KEEP_BACKGROUND_EXECS Function

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

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.22 GET_KEEP_SESSIONS Function

This function finds out if sessions and session state will be preserved or deleted on upgrades.

Syntax

```
function GET_KEEP_SESSIONS
    RETURN BOOLEAN
```

Example

The following example shows whether print sessions will be kept or deleted.

```
dbms_output.put_line (
    case when apex_application_install.get_keep_sessions then 'sessions will be kept'
    else 'sessions will be deleted'
    end );
```

See Also:

[SET_KEEP_SESSIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_KEEP_SESSIONS-Procedure.html#GUID-3FF4CA7A-413D-4901-8291-11EEA8141EBE)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.23 GET_MAX_SCHEDULER_JOBS Function

This function fetches the maximum background processing jobs attribute during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_MAX_SCHEDULER_JOBS
    RETURN NUMBER;
```

Parameters

None.

Example

```
DECLARE
    l_max_scheduler_jobs number;
BEGIN
    l_max_scheduler_jobs := apex_application_install.get_max_scheduler_jobs;
END;
```

See Also:

- [SET_MAX_SCHEDULER_JOBS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS-Procedure.html#GUID-8DAED95A-D0C7-4EF8-81CC-E5CE7287A45B)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.24 GET_NO_PROXY_DOMAINS Function

Use this function to get the No Proxy Domains attribute of an application to be imported.

Syntax

```
APEX_APPLICATION_INSTALL.GET_PROXY
RETURN VARCHAR2;
```

Parameters

None.

Example

```
DECLARE
    l_no_proxy_domains varchar2(255);
BEGIN
    l_no_proxy_domains := apex_application_install.get_no_proxy_domains;
END;
```

See Also:

[SET_PROXY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PROXY-Procedure.html#GUID-E880E9BC-1068-4382-9153-7951EC7AB018)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.25 GET_OFFSET Function

Use function to get the offset value used during the import of an application.

Syntax

```
APEX_APPLICATION_INSTALL.GET_OFFSET
RETURN NUMBER;
```

Parameters

None.

Example

The following example returns the value of the application offset value in the `APEX_APPLICATION_INSTALL` package.

```
DECLARE
    l_offset number;
BEGIN
    l_offset := apex_application_install.get_offset;
END;
```

See Also:

- [SET_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_OFFSET-Procedure.html#GUID-22E45DC6-DACC-4B1B-AAB1-BCCAC8499D12)
- [GENERATE_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_OFFSET-Procedure.html#GUID-3489119C-C57D-406A-AC42-9AC089BE1668)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.26 GET_PASS_ECID Function

This function retrieves the pass ECID attribute value that overrides the default.

Syntax

```
APEX_APPLICATION_INSTALL.GET_PASS_ECID
    RETURN BOOLEAN;
```

Parameters

None.

See Also:

[SET_PASS_ECID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.SET_PASS_ECID-Procedure.html#GUID-23CB31CB-7281-4DED-AA80-F8BA34E38DD3)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.27 GET_PROXY Function

Use this function to get the proxy server attribute of an application to be imported.

Syntax

```
APEX_APPLICATION_INSTALL.GET_PROXY
RETURN VARCHAR2;
```

Parameters

None.

Example

The following example returns the value of the proxy server attribute in the `APEX_APPLICATION_INSTALL` package. The proxy server attribute must be 255 characters or less.

```
DECLARE
    l_proxy varchar2(255);
BEGIN
    l_proxy := apex_application_install.get_proxy;
END;
```

See Also:

[SET_PROXY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PROXY-Procedure.html#GUID-E880E9BC-1068-4382-9153-7951EC7AB018)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.28 GET_REMOTE_SERVER_AI_ATTRS Function

This function gets the AI attributes property to be used for a given remote server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_ATTRS (
    p_static_id IN VARCHAR2 )
    RETURN CLOB;
```

Parameters

| Parameter     | Description                                      |
|:--------------|:-------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object. |

Example

```
DECLARE
    l_ai_attributes clob;
BEGIN
    l_ai_attributes := apex_application_install.get_remote_server_ai_attrs( 'MY_REMOTE_SERVER' );
END
```

See Also:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.29 GET_REMOTE_SERVER_AI_HEADERS Function

This function gets the AI HTTP Headers property to be used for a given remote server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_HEADERS (
    p_static_id IN VARCHAR2 )
    RETURN CLOB;
```

Parameters

| Parameter     | Description                                      |
|:--------------|:-------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object. |

Example

```
DECLARE
    l_ai_http_headers clob;
BEGIN
    l_ai_http_headers := apex_application_install.get_remote_server_ai_headers( 'MY_REMOTE_SERVER' );
END;
```

See Also:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.30 GET_REMOTE_SERVER_AI_MAXTOKENS Function

Use this function to get the Maximum number of tokens property to be used for a given Generative AI or Vector Provider server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS (
    p_static_id IN VARCHAR2 )
    RETURN NUMBER;
```

Parameters

| Parameter     | Description                                      |
|:--------------|:-------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object. |

Example

```
DECLARE
    l_ai_max_tokens number;
BEGIN
    l_ai_max_tokens := apex_application_install.get_remote_server_ai_maxtokens( 'MY_REMOTE_SERVER' );
END;
```

See Also:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.31 GET_REMOTE_SERVER_AI_MODEL Function

This function gets the AI model name property to be used for a given remote server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MODEL (
    p_static_id IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter     | Description                                      |
|:--------------|:-------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object. |

Example

```
DECLARE
    l_ai_model varchar2(255);
BEGIN
    l_ai_model := apex_application_install.get_remote_server_ai_model( 'MY_REMOTE_SERVER' );
END;
```

See Also:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.32 GET_REMOTE_SERVER_BASE_URL Function

Use this function to get the Base URL property to be used for a given remote server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_BASE_URL (
    p_static_id IN VARCHAR2 )
RETURN VARCHAR2;
```

Parameters

| Parameter     | Description                                      |
|:--------------|:-------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object. |

Example

```
DECLARE
    l_base_url varchar2(255);
BEGIN
    l_base_url := apex_application_install.get_remote_server_base_url( 'MY_REMOTE_SERVER' );
END;
```

See Also:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.33 GET_REMOTE_SERVER_DEFAULT_DB Function

This function gets the default database to be used for a given remote server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_DEFAULT_DB (
    p_static_id IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter     | Description                                      |
|:--------------|:-------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object. |

Example

```
DECLARE
    l_default_database varchar2(255);
BEGIN
    l_default_database := apex_application_install.get_remote_server_default_db( 'MY_REMOTE_SERVER' );
END;
```

Note:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.34 GET_REMOTE_SERVER_HTTPS_HOST Function

Use this function to get the HTTPS Host property to be used for a given remote server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_HTTPS_HOST(
    p_static_id IN VARCHAR2)
RETURN VARCHAR2;
```

Parameters

| Parameter     | Description                                      |
|:--------------|:-------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object. |

Example

```
DECLARE
    l_https_host varchar2(255);
BEGIN
    l_https_host := apex_application_install.get_remote_server_https_host( 'MY_REMOTE_SERVER' );
END;
```

See Also:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.35 GET_REMOTE_SERVER_SQL_MODE Function

This function gets the SQL mode to be used for a given remote MySQL server during application import.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_SQL_MODE (
    p_static_id IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter     | Description                                       |
|:--------------|:--------------------------------------------------|
| `p_static_id` | Static ID to reference the remote server object.. |

Example

```
DECLARE
    l_default_database varchar2(255);
BEGIN
    l_default_database := apex_application_install.get_remote_server_sql_mode( 'MY_REMOTE_SERVER' );
END;
```

Note:

[SET_REMOTE_SERVER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REMOTE_SERVER-Procedure.html#GUID-B71B95DF-2362-4E79-9E95-F4CE68D95ACA)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.36 GET_REST_SOURCE_CATALOG_GROUP Function

This function retrieves the name of REST Source Catalog Group which new catalogs are imported into.

Syntax

```
APEX_APPLICATION_INSTALL.GET_REST_SOURCE_CATALOG_GROUP
    RETURN VARCHAR2;
```

Parameters

None.

Example

The following example prints the REST Source Catalog Group override.

```
select apex_application_install.get_rest_source_catalog_group
  from sys.dual;
```

Note:

[SET_REST_SOURCE_CATALOG_GROUP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REST_SOURCE_CATALOG_GROUP-Procedure.html#GUID-3A7D636D-67DF-4635-9BFC-DA0277458F56)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.37 GET_SCHEMA Function

Use this function to get the parsing schema (owner) of the APEX application.

Syntax

```
APEX_APPLICATION_INSTALL.GET_SCHEMA
RETURN VARCHAR2;
```

Parameters

None.

Example

The following example returns the value of the application schema in the `APEX_APPLICATION_INSTALL` package.

```
DECLARE
    l_schema varchar2(30);
BEGIN
    l_schema := apex_application_install.get_schema;
END;
```

See Also:

[SET_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SCHEMA-Procedure.html#GUID-91E19233-28AA-4668-94EB-55A67BA4D564)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.38 GET_SUBSCRIPTION_MAPPING Function

Use this function to get the Application ID of the new subscription source. If there is no mapping found, the function returns the input Application ID.

Syntax

```
APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MAPPING (
    p_from_application_id    IN              NUMBER)
    RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_from_application_id` | The Application ID of the current subscription source. |

Example

```
declare
    l_app_id number;
begin
    l_app_id := apex_application_install.get_subscription_mapping(100);
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.39 GET_SUBSCRIPTION_MODE Function

Use this function to get Subscription Mode setting value.

Syntax

```
APEX_APPLICATION_INSTALL.GET_SUBSCRIPTION_MODE
    RETURN t_subscription_mode;
```

Example

```
declare
    l_subscription_mode apex_application_install.t_subscription_mode;
begin
    l_subscription_mode := apex_application_install.get_subscription_mode;
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.40 GET_THEME_ID Function

This function retrieves the Theme ID value that overrides the default.

Syntax

```
APEX_APPLICATION_INSTALL.GET_THEME_ID
    RETURN NUMBER
```

Parameters

None.

Returns

This function returns the Theme ID value.

Example

The following example prints the theme ID override.

```
select apex_application_install.get_theme_id from sys.dual
```

See Also:

[SET_THEME_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_THEME_ID-Procedure.html#GUID-D2801033-602C-40C0-9EE4-E7B1A4BBF1B4)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.41 GET_WORKSPACE_ID Function

Use this function to get the workspace ID for the application to be imported.

Syntax

```
APEX_APPLICATION_INSTALL.GET_WORKSPACE_ID
RETURN NUMBER;
```

Parameters

None.

Example

The following example returns the value of the workspace ID value in the `APEX_APPLICATION_INSTALL` package.

```
DECLARE
    l_workspace_id number;
BEGIN
    l_workspace_id := apex_application_install.get_workspace_id;
END;
```

See Also:

[SET_WORKSPACE_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_ID-Procedure.html#GUID-3A865D87-BD45-4492-9076-BFB88FF22B8C)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.42 INSTALL Procedure

This procedure installs an application. Use the `APEX_APPLICATION_INSTALL.SET%` procedures to configure installation parameters.

Syntax

```
PROCEDURE INSTALL (
    p_source             IN apex_t_export_files    DEFAULT NULL,
    p_overwrite_existing IN BOOLEAN                DEFAULT FALSE );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d38022e75" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d38022e77" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d38022e81" style="text-align: left;" data-valign="top" width="42%" headers="d38022e75 "><code class="codeph">p_source</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d38022e81 d38022e77 "><p>The source code, a table of (name, contents) with a single record for normal Oracle APEX applications or multiple records for applications that were split when exporting.</p>
<p>Passing multiple applications is not supported.</p>
<p>If null (default), imports the source that was previously passed to <code class="codeph">GET_INFO</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d38022e98" style="text-align: left;" data-valign="top" width="42%" headers="d38022e75 "><code class="codeph">p_overwrite_existing</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d38022e98 d38022e77 ">If <code class="codeph">FALSE</code> (default), raises an error instead of overwriting an existing application.</td>
</tr>
</tbody>
</table>

Raises

- `WWV_FLOW_IMP_PARSER.RUN_STMT_ERROR`: The source contains invalid statements.
- `SECURITY_GROUP_ID_INVALID`: The current workspace conflicts with the install workspace.
- `WWV_FLOW_API.FLOW_ID_RESERVED_FOR_OTHER_WORKSPACE`: The application ID is used in another workspace.
- `WWV_FLOW_API.FLOW_ID_RANGE_RESERVED`: The application ID is reserved for internal use.
- `WWV_FLOW_API.FLOW_ID_OUT_OF_RANGE`: The application ID used for installing is not in a valid range.
- `APPLICATION_ID_RESERVED`: The application ID is in use in the current workspace and `p_overwrite_existing` was set to false.

Example

Fetch an application from a remote URL, then install it with a new ID and new component ID offsets in workspace EXAMPLE.

```
DECLARE
    l_source apex_t_export_files;
    l_info   apex_application_install.t_file_info;
BEGIN
    l_source := apex_t_export_files (
                    apex_t_export_file (
                         name     => 'f100.sql',
                         contents => apex_web_service.make_rest_request (
                                          p_url         => 'https://www.example.com/apps/f100.sql',
                                          p_http_method => 'GET' )));

    apex_util.set_workspace('EXAMPLE');
    apex_application_install.generate_application_id;
    apex_application_install.generate_offset;
    apex_application_install.install (
         p_source => l_source );
END;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.43 REMOVE_APPLICATION Procedure

This procedure removes an application from a workspace. Use the `APEX_APPLICATION_INSTALL.SET_%` procedures to configure parameters.

Syntax

```
APEX_APPLICATION_INSTALL.REMOVE_APPLICATION (
    p_application_id IN NUMBER )
```

Parameters

| Parameter           | Description                |
|:--------------------|:---------------------------|
| ` p_application_id` | The ID of the application. |

Raises

This procedure may raise the following:

- `WWV_FLOW_API.DELETE_APP_IN_DIFFERENT_WORKSPACE`: The application is not in this workspace.
- `WWV_FLOW_API.FLOW_NOT_DELETED`: The application was not deleted.
- `WWV_FLOW.APP_NOT_FOUND_ERR`: The application ID was not found.

Example

The following example demonstrates how to use the `REMOVE_APPLICATION` procedure to remove an application with an ID of 100 from a workspace.

```
BEGIN
    apex_application_install.set_workspace('EXAMPLE');
    apex_application_install.set_keep_sessions(false);
    apex_application_install.remove_application(100);
END;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.44 SET_APPLICATION_ALIAS Procedure

This procedure sets the application alias for the application to be imported. This is only used if the application to be imported has an alias specified. An application alias must be unique within a workspace and it is recommended to be unique within an instance.

Syntax

```
APEX_APPLICATION_INSTALL.SET_APPLICATION_ALIAS (
    p_application_alias IN VARCHAR2 )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d38427e70" style="text-align: left;" data-valign="bottom" width="33%">Parameter</th>
<th id="d38427e72" style="text-align: left;" data-valign="bottom" width="67%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d38427e76" style="text-align: left;" data-valign="top" width="33%" headers="d38427e70 "><code class="codeph">p_application_alias</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d38427e76 d38427e72 "><p>The application alias. The application alias is an alphanumeric identifier.</p>
<p>Must be fewer than 255 characters and unique within a workspace.</p>
<p>(Optional) Oracle recommends that the alias be unique within an entire instance.</p></td>
</tr>
</tbody>
</table>

See Also:

- [GET_APPLICATION_ALIAS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_ALIAS-Function.html#GUID-28FDA0C6-44BC-4B66-A2E1-856913DAEB26)
- [Import Script Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html#GUID-3FA670B9-823F-4630-9E0E-29F3A61666F2)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.45 SET_APPLICATION_ID Procedure

Use this procedure to set the application ID of the application to be imported. The application ID should either not exist in the instance or, if it does exist, must be in the workspace where the application is being imported to. This number must be a positive integer and must not be from the reserved range of Oracle APEX application IDs.

Syntax

```
APEX_APPLICATION_INSTALL.SET_APPLICATION_ID (
    p_application_id IN NUMBER);
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | This is the application ID. The application ID must be a positive integer, and cannot be in the reserved range of application IDs (3000 - 8999). It must be less than 3000 or greater than or equal to 9000. |

See Also:

- [SET_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_APPLICATION_ID-Procedure.html#GUID-D938108A-6F87-4D29-971E-3B0BD9EE3B77)
- [Import Script Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html#GUID-3FA670B9-823F-4630-9E0E-29F3A61666F2)
- [GENERATE_APPLICATION_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_APPLICATION_ID-Procedure.html#GUID-928F4CEC-42D8-4CE7-9754-433EA4C4D899)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.46 SET_APPLICATION_NAME Procedure

This procedure sets the application name of the application to be imported.

Syntax

```
APEX_APPLICATION_INSTALL.SET_APPLICATION_NAME (
    p_application_name  IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_name` | This is the application name. The application name cannot be null and must be 255 characters or less. |

Example

The following example sets the application name for app 100 to "Executive Dashboard".

```
BEGIN
  apex_application_install.set_application_name( p_application_name => 'Executive Dashboard' );
END;
/
@f100.sql
```

See Also:

[GET_APPLICATION_NAME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_APPLICATION_NAME-Function.html#GUID-2AF12D9D-0250-44D2-8E7C-BD28C0AEF62C)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.47 SET_AUTHENTICATION_SCHEME Procedure

Use this procedure to override the active authentication scheme for the applications that are about to be installed.

Syntax

```
APEX_APPLICATION_INSTALL.SET_AUTHENTICATION_SCHEME (
      p_name IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The name of the authentication scheme to be activated. This new authentication scheme must exist in the application. If NULL, the active authentication scheme will remain unchanged. |

Example

The following example activates authentication scheme "SSO-Production" and installs application `f100.sql`, then resets the override for `f101.sql` to keep its active scheme.

```
BEGIN
  apex_application_install.set_authentication_scheme (
      p_name => 'SSO-Production' );
END;
/
@f100.sql
BEGIN
  apex_application_install.set_authentication_scheme (
      p_name => null );
END;
/
@f101.sql
```

See Also:

[GET_AUTHENTICATION_SCHEME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_AUTHENTICATION_SCHEME-Function.html#GUID-465BBDAA-E1F9-4250-86B2-369D4C731F51)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.48 SET_AUTO_INSTALL_SUP_OBJ Procedure

This procedure sets the automatic install of supporting objects value used during application import. This setting is valid only for command line installs. If the value is set to `TRUE` and the application export contains supporting objects, it automatically installs or upgrades the supporting objects when an application is imported from the command line.

Syntax

```
APEX_APPLICATION_INSTALL.SET_AUTO_INSTALL_SUP_OBJ (
    p_auto_install_sup_obj IN BOOLEAN )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_auto_install_sup_obj` | Boolean value for the automatic install of supporting objects. |

Example

The following example enables the automatic installation of supporting objects for app 100.

```
BEGIN
  apex_application_install.set_auto_install_sup_obj( p_auto_install_sup_obj => true );
END;
/
@f100.sql
```

See Also:

[GET_AUTO_INSTALL_SUP_OBJ Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_AUTO_INSTALL_SUP_OBJ-Function.html#GUID-16ADECB8-FE73-4B83-A408-0C661821C063)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.49 SET_BUILD_STATUS Function

Use this function to override the build status for applications that are about to be installed.

Syntax

```
APEX_APPLICATION_INSTALL.SET_BUILD_STATUS (
    p_build_status  IN  wwv_flow_application_admin_api.t_build_status )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d39196e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d39196e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d39196e78" style="text-align: left;" data-valign="top" width="42%" headers="d39196e72 "><code class="codeph">p_build_status</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d39196e78 d39196e74 "><p>New build status to set the application to. Values include:</p>
<ul>
<li><code class="codeph">apex_application_admin.c_build_status_run_and_build</code> - Developers and users can both run and develop the application.</li>
<li><code class="codeph">apex_application_admin.c_build_status_run_only</code> - Only users can run the application. Developers cannot edit the application.</li>
</ul></td>
</tr>
</tbody>
</table>

Example

The following example sets build status for app 100 to `RUN_ONLY`.

```
BEGIN
    apex_application_install.set_build_status (
        p_build_status => 'RUN_ONLY' );
END;
/
@f100.sql
```

See Also:

[GET_BUILD_STATUS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_BUILD_STATUS-Function.html#GUID-B82A06BF-7294-4FAA-8BD3-541FF2C7BA6B)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.50 SET_DATASET_IMPORT_MODE Procedure

This procedure sets the dataset import mode for a supplied dataset that is used to determine whether the dataset is kept or overwritten during import. By default a dataset is retained on import unless explicitly set to be overwritten.

Syntax

```
PROCEDURE apex_application_install.set_dataset_import_mode (
    p_static_id  IN   VARCHAR2,
    p_mode       IN   t_dataset_import_mode );
```

Parameters

| Parameter     | Description                                                |
|:--------------|:-----------------------------------------------------------|
| `p_static_id` | Static ID used to reference the dataset.                   |
| `p_mode`      | Dataset import mode, see `t_dataset_import_mode` constants |

Example

The following example sets the import mode for the supplied dataset in the APEX_APPLICATION_INSTALL package.

```
begin
   apex_application_install.set_dataset_import_mode(
       p_static_id => 'HR',
       p_mode      => apex_application_install.c_dataset_keep );

   apex_application_install.set_dataset_import_mode(
       p_static_id => 'SALES',
       p_mode      => apex_application_install.c_dataset_overwrite );
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.51 SET_IMAGE_PREFIX Procedure

This procedure sets the image prefix of the import application. Most Oracle APEX instances use the default image prefix of /i/.

Syntax

```
APEX_APPLICATION_INSTALL.SET_IMAGE_PREFIX(
    p_image_prefix  IN VARCHAR2);
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_image_prefix` | The image prefix. It can be a fully qualified domain, like a CDN or another web server, or just a path. |

Example

The following example sets the value of the image prefix attribute for app 100 to `/i/`

```
begin
  apex_application_install.set_image_prefix( p_image_prefix => '/i/' );
end;
/
@f100.sql
```

See Also:

[GET_IMAGE_PREFIX Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_IMAGE_PREFIX-Function.html#GUID-457F5A77-6CC3-44A7-B3C5-792D05ED0669)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.52 SET_KEEP_BACKGROUND_EXECS Procedure

This procedure preserves background executions associated with the application during upgrades.

Syntax

```
APEX_APPLICATION_INSTALL.SET_KEEP_BACKGROUND_EXECS (
    p_keep_background_execs IN BOOLEAN )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_keep_background_execs` | `TRUE` to preserve background executions. `FALSE` to delete them. |

Example

The following example installs application `100` in workspace `FRED_PROD` and preserves background executions.

```
BEGIN
   apex_application_install.set_workspace(p_workspace => 'FRED_PROD');
   apex_application_install.set_keep_background_execs(p_keep_background_execs => true);
END;
/
@f100.sql
```

See Also:

- [GET_KEEP_BACKGROUND_EXECS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PLUGIN.html#GUID-E2B22CA2-A9D8-4DFE-906D-10357C4CF9EC)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.53 SET_KEEP_SESSIONS Procedure

This procedure preserves sessions associated with the application on upgrades.

Syntax

```
procedure SET_KEEP_SESSIONS (
    p_keep_sessions IN BOOLEAN );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d39862e70" style="text-align: left;" data-valign="bottom" width="20%">Parameter</th>
<th id="d39862e72" style="text-align: left;" data-valign="bottom" width="20%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d39862e76" style="text-align: left;" data-valign="top" width="20%" headers="d39862e70 "><code class="codeph">p_keep_sessions</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d39862e76 d39862e72 "><p>Default <code class="codeph">FALSE</code>. If <code class="codeph">FALSE</code>, sessions are deleted.</p>
<p>If <code class="codeph">TRUE</code>, sessions are preserved.</p>
<p><code class="codeph">KEEP_SESSIONS_ON_UPGRADE</code> controls the default behavior. If <code class="codeph">N</code> (default), sessions are deleted. <code class="codeph">KEEP_SESSIONS_ON_UPGRADE</code> is an instance parameter.</p></td>
</tr>
</tbody>
</table>

Example

The following example installs application 100 in workspace `FRED_PROD` and keeps session state.

```
BEGIN
  apex_application_install.set_workspace(p_workspace => 'FRED_PROD');
  apex_application_install.set_keep_sessions(p_keep_sessions => true);
END;
/
@f100.sql
```

See Also:

[GET_KEEP_SESSIONS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_KEEP_SESSIONS-Function.html#GUID-3309F3E6-BB2E-4ED4-8D88-3E0CAB672E03)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.54 SET_MAX_SCHEDULER_JOBS Procedure

This procedure sets the maximum background processing jobs attribute of the application to be imported.

Syntax

```
APEX_APPLICATION_INSTALL.SET_MAX_SCHEDULER_JOBS (
    p_max_scheduler_jobs IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_max_scheduler_jobs` | Maximum number of background processing jobs for the application to be imported. |

Example

The following example sets the maximum number of background processing jobs for app 100 to `5`.

```
BEGIN
  apex_application_install.set_max_scheduler_jobs(
    p_max_scheduler_jobs => 5 );
END;
/
@f100.sql
```

See Also:

- [GET_MAX_SCHEDULER_JOBS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_MAX_SCHEDULER_JOBS-Function.html#GUID-0D413F89-15D0-414A-BACA-6DC886CB74AC)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.55 SET_OFFSET Procedure

This procedure sets the offset value used during application import. Use the offset value to ensure that the metadata for the Oracle APEX application definition does not collide with other metadata on the instance.

For a new application installation, it is usually sufficient to call the `generate_offset` procedure to use APEX to automatically generate this offset value for you.

Syntax

```
APEX_APPLICATION_INSTALL.SET_OFFSET (
    p_offset IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_offset` | The offset value. The offset must be a positive integer. In most cases you do not need to specify the offset; instead, call `APEX_APPLICATION_INSTALL.GENERATE_OFFSET` to generate a large random value and then set it in the `APEX_APPLICATION_INSTALL` package. |

Example

The following example generates a random number from the database and uses this as the offset value for app 100.

```
DECLARE
  l_offset number;
BEGIN
  l_offset := dbms_random.value(100000000000, 999999999999);
  apex_application_install.set_offset( p_offset => l_offset );
END;
/
@f100.sql
```

See Also:

- [GET_OFFSET Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_OFFSET-Function.html#GUID-3D2426BE-3842-4025-80AE-EA09084FE40D)
- [GENERATE_OFFSET Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_OFFSET-Procedure.html#GUID-3489119C-C57D-406A-AC42-9AC089BE1668)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.56 SET_PASS_ECID Procedure

This procedure overrides the pass Execution Context ID (ECID) attribute for applications that are being installed.

Syntax

```
APEX_APPLICATION_INSTALL.SET_PASS_ECID (
    p_pass_ecid IN BOOLEAN )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d40365e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d40365e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d40365e78" style="text-align: left;" data-valign="top" width="42%" headers="d40365e72 "><code class="codeph">p_pass_ecid</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d40365e78 d40365e74 "><p>New pass ECID value to set application to. Values include:</p>
<ul>
<li><code class="codeph">TRUE</code>: Pass the ECID to the external web services for end-to-end tracing.</li>
<li><code class="codeph">FALSE</code>: Deny the ECID.</li>
</ul></td>
</tr>
</tbody>
</table>

Example

The following example sets Pass ECID to true.

```
BEGIN
   apex_application_install.set_pass_ecid (
       p_pass_ecid => true );
END;
/
@f100.sql
```

See Also:

[GET_PASS_ECID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_PASS_ECID-Function.html#GUID-CEE56C2E-4E5D-4F63-8155-4B84ECC5AED1)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.57 SET_PROXY Procedure

This procedure sets the proxy server attributes of an imported application.

Syntax

```
APEX_APPLICATION_INSTALL.SET_PROXY (
    p_proxy            IN VARCHAR2,
    p_no_proxy_domains IN VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d40530e70" style="text-align: left;" data-valign="bottom" width="33%">Parameter</th>
<th id="d40530e72" style="text-align: left;" data-valign="bottom" width="67%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d40530e76" style="text-align: left;" data-valign="top" width="33%" headers="d40530e70 "><code class="codeph">p_proxy</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d40530e76 d40530e72 "><p>The proxy server. There is no default value. The proxy server must be fewer than 255 characters and must exclude any protocol prefix (such as <code class="codeph">http://</code>).</p>
<p>The following is a valid example: <code class="codeph">www-proxy.example.com</code></p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d40530e90" style="text-align: left;" data-valign="top" width="33%" headers="d40530e70 "><code class="codeph">p_no_proxy_domains</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d40530e90 d40530e72 ">Default null. The list of domains for which the proxy server can not be used.</td>
</tr>
</tbody>
</table>

Example

The following example sets the value of the proxy attribute for app 100 to `www-proxy.example.com`.

```
BEGIN
  apex_application_install.set_proxy( p_proxy => 'www-proxy.example.com' );
END;
/
@f100.sql
```

See Also:

[GET_PROXY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PROXY-Function.html#GUID-B2E67A54-16E2-480C-9460-222A88B0ACC1)

[GET_NO_PROXY_DOMAINS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_NO_PROXY_DOMAINS-Function.html#GUID-1F15E62C-AA10-4A11-BCEE-902356FE9DA6)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.58 SET_REMOTE_SERVER Procedure

This procedure sets the Base URL and the HTTPS Host attributes for remote servers of the imported application. Remote Servers are identified by their Static ID.

Syntax

```
APEX_APPLICATION_INSTALL.SET_REMOTE_SERVER (
    p_static_id         IN VARCHAR2,
    p_base_url          IN VARCHAR2,
    p_https_host        IN VARCHAR2 DEFAULT NULL,
    --
    p_default_database  IN VARCHAR2 DEFAULT NULL,
    p_mysql_sql_modes   IN VARCHAR2 DEFAULT NULL,
    --
    p_ords_timezone     IN VARCHAR2 DEFAULT NULL,
    --
    p_ai_model_name     IN VARCHAR2 DEFAULT NULL,
    p_ai_http_headers   IN CLOB     DEFAULT NULL,
    p_ai_attributes     IN CLOB     DEFAULT NULL,
    p_ai_max_tokens     IN NUMBER   DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | Static ID to reference the remote server object. |
| `p_base_url` | New Base URL to use for this remote server object. |
| `p_https_host` | New HTTPS Host Property to use for this remote server object. Only relevant when the base URL is `https://` and the Oracle AI Database version is 12.2 or greater. |
| `p_default_database` | Default database to use when connecting. Currently only supported for MySQL databases. |
| `p_mysql_sql_modes` | SQL modes to use when connecting to a MySQL database. |
| `p_ords_timezone` | Time zone in which the ORDS server of a REST-enabled SQL reference used by the application runs. |
| `p_ai_model_name` | The AI model to use when requesting a response from a Generative AI Service. |
| `p_ai_http_headers` | HTTP headers to use when making a request to a Generative AI Service. |
| `p_ai_attributes` | Attributes in JSON format to use when making a request to a Generative AI Service. |
| `p_ai_max_tokens` | Maximum number of tokens in a rolling 24-hour window APEX is allowed to make to this Generative AI Service. |

Example

The following example sets the Base URL attribute of the remote server `MY_REMOTE_SERVER` for app 100.

```
BEGIN
    apex_application_install.set_remote_server(
        p_static_id => 'MY_REMOTE_SERVER',
        p_base_url => 'http://production.example.com' );
END;
```

See Also:

- [GET_REMOTE_SERVER_BASE_URL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_BASE_URL-Function.html#GUID-67EA8C5D-2B06-4F6A-8719-64D5BCA9D171)
- [GET_REMOTE_SERVER_HTTPS_HOST Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_HTTPS_HOST-Function.html#GUID-3AC608E6-898F-440A-B6CA-7F12A49CC468)
- [GET_REMOTE_SERVER_DEFAULT_DB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_DEFAULT_DB-Function.html#GUID-C6EF728F-47F1-4C0C-AF92-E743750A8FF4)
- [GET_REMOTE_SERVER_SQL_MODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_SQL_MODE-Function.html#GUID-74B0A7F6-F6E8-4248-A417-04EB970F3536)
- [GET_REMOTE_SERVER_AI_MODEL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_MODEL-Function.html#GUID-7636CBBD-31A6-4715-8654-DDE9E0E33083)
- [GET_REMOTE_SERVER_AI_HEADERS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_HEADERS-Function.html#GUID-C56EA07C-C404-48DB-AA2A-EF5DFED25744)
- [GET_REMOTE_SERVER_AI_ATTRS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REMOTE_SERVER_AI_ATTRS-Function.html#GUID-66BB1F3C-E9C2-4387-B8CD-A97D8FBFFF01)
- [GET_REMOTE_SERVER_AI_MAXTOKENS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.GET_REMOTE_SERVER_AI_MAXTOKENS-Function.html#GUID-C8F40771-67E4-454F-8B90-6B909880051C)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.59 SET_REST_SOURCE_CATALOG_GROUP Procedure

This procedure sets the REST Source Catalog group to import a new REST Source Catalog.

Syntax

```
APEX_APPLICATION_INSTALL.SET_REST_SOURCE_CATALOG_GROUP (
    p_name  IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The name of the REST Source Catalog Group. That Group must exist in the workspace. |

Example

The following example sets the catalog group to `Financial Services Catalogs`. REST Source Catalogs are imported into this group.

```
BEGIN
    apex_application_install.set_rest_source_catalog_group (
        p_name => 'Financial Services Catalogs' );
END;
/
@rest-service-catalog-financial.sql
```

Note:

[GET_REST_SOURCE_CATALOG_GROUP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REST_SOURCE_CATALOG_GROUP-Function.html#GUID-0E01B631-6A79-4B09-8EA7-69CB3026899B)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.60 SET_SCHEMA Procedure

Use this function to set the parsing schema (owner) of the Oracle APEX application. The database user of this schema must already exist, and this schema name must already be mapped to the workspace used to import the application.

Syntax

```
APEX_APPLICATION_INSTALL.SET_SCHEMA (
    p_schema  IN VARCHAR2 )
```

Parameters

| Parameter  | Description      |
|:-----------|:-----------------|
| `p_schema` | The schema name. |

See Also:

- [GET_SCHEMA Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SCHEMA-Function.html#GUID-51696980-0A45-4D75-B294-BC33AD6A5BE7)
- [Import Script Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html#GUID-3FA670B9-823F-4630-9E0E-29F3A61666F2)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.61 SET_SUBSCRIPTION_MAPPING Procedure

Use this procedure to update subscriptions from one application to another during the application installation process. You can invoke the procedure multiple times, accommodating scenarios where components are subscribed from various Component Library Apps or Theme Apps.

Note:

You cannot use this API to switch a theme subscription from the built-in Universal Theme to other local themes or vice versa.

Syntax

```
APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MAPPING (
    p_from_application_id    IN              NUMBER,
    p_to_application_id      IN              NUMBER);
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_from_application_id` | The Application ID of the current subscription source. |
| `p_to_application_id` | The Application ID of the new target application to which the subscription is remapped. This application must exist within the target workspace. |

Example

The following example demonstrates installing an application and changing subscription source from `100` to `200` and from `110` to `210`.

```
begin
    apex_application_install.clear_all;
    apex_application_install.set_workspace('TARGET_WORKSPACE');

    apex_application_install.set_subscription_mapping(
        p_from_application_id => 100,
        p_to_application_id   => 200 );

    apex_application_install.set_subscription_mapping(
        p_from_application_id => 110,
        p_to_application_id   => 210 );
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.62 SET_SUBSCRIPTION_MODE Procedure

Use this procedure to instruct how subscriptions should be handled during the application installation process. By default, Oracle APEX uses `apex_application_install.c_subscription_strict` as subscription mode. This default value can be overwritten using instance level parameter `IMP_DEFAULT_SUBSCRIPTION_MODE`.

Syntax

```
APEX_APPLICATION_INSTALL.SET_SUBSCRIPTION_MODE (
    p_mode                   IN              t_subscription_mode);
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_mode` | Subscription installation mode, see `t_subscription_mode` constants. |

Example

The following example demonstrates installing an application and changing subscription mode to ignore subscriptions

```
begin
    apex_application_install.clear_all;
    apex_application_install.set_workspace('TARGET_WORKSPACE');

    apex_application_install.set_subscription_mode(
        p_mode => apex_application_install.c_subscription_remove );
end;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.63 SET_THEME_ID Procedure

This procedure overrides the Theme ID attribute for Template Components that are about to be installed.

Syntax

```
APEX_APPLICATION_INSTALL.SET_THEME_ID (
    p_theme_id  IN NUMBER )
```

Parameters

| Parameter    | Description                                           |
|:-------------|:------------------------------------------------------|
| `p_theme_id` | New Theme ID value to install the Template Component. |

Example

The following example sets "Theme ID" to 42.

```
BEGIN
    apex_application_install.set_theme_id (
    p_theme_id => 42 );
END;
/
@plugin.sql
```

See Also:

[GET_THEME_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_THEME_ID-Function.html#GUID-8D4F4284-A324-4932-8047-4A3DDA04A305)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.64 SET_WORKSPACE_ID Procedure

Use this function to set the workspace ID for the application to be imported.

Syntax

```
APEX_APPLICATION_INSTALL.SET_WORKSPACE_ID (
    p_workspace_id  IN NUMBER )
```

Parameters

| Parameter        | Description       |
|:-----------------|:------------------|
| `p_workspace_id` | The workspace ID. |

See Also:

- [SET_WORKSPACE_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_ID-Procedure.html#GUID-3A865D87-BD45-4492-9076-BFB88FF22B8C)
- [Import Script Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Import-Script-Examples.html#GUID-3FA670B9-823F-4630-9E0E-29F3A61666F2)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.65 SET_WORKSPACE Procedure

This procedure sets the workspace ID for an application to be imported.

Syntax

```
APEX_APPLICATION_INSTALL.SET_WORKSPACE (
   p_workspace IN VARCHAR2 );
```

Parameters

| Parameters    | Description         |
|:--------------|:--------------------|
| `p_workspace` | The workspace name. |

Example

The following example sets the workspace ID for app 100 to workspace "FRED_PROD".

```
BEGIN
  apex_application_install.set_workspace (
      p_workspace => 'FRED_PROD' );
END;
/
@f100.sql
```

See Also:

- [GET_WORKSPACE_ID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_WORKSPACE_ID-Function.html#GUID-F79B0F60-3CB7-4CCF-B8DD-A7262F2386FA)
- [SET_WORKSPACE_ID Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_WORKSPACE_ID-Procedure.html#GUID-3A865D87-BD45-4492-9076-BFB88FF22B8C)

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)

------------------------------------------------------------------------

## 8.66 SUSPEND_BACKGROUND_EXECS Procedure

This procedure suspends background page processing for an application. This procedure is intended for use before upgrades.

This procedure enables orderly application upgrades by waiting for all `SCHEDULED` or `EXECUTING` background executions to complete then locking out subsequent processes until after the upgrade. During the time when background executions are suspended for an application, new executions can be enqueued, but are not executed, until the lock releases.

The lock releases when the transaction ends with a `COMMIT` or `ROLLBACK` operation.

Syntax

```
APEX_APPLICATION_INSTALL.SUSPEND_BACKGROUND_EXECS (
    p_application_id     IN NUMBER )
```

Parameters

| Parameter          | Description         |
|:-------------------|:--------------------|
| `p_application_id` | The application ID. |

Example

```
BEGIN
    apex_application_install.suspend_background_execs(
       p_application_id => 100 );
END;
```

**Parent topic:** [APEX_APPLICATION_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPLICATION_INSTALL.html#GUID-64D43160-E4F9-44CF-96A4-42D3190102BE)
