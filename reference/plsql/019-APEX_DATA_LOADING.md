<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 19 APEX_DATA_LOADING

The APEX_DATA_LOADING package provides the ability to load data by calling an application data loading definition. This can be used in place of native data loading.

- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING-Data-Types.html#GUID-CFFCEC5F-7AD2-4350-9002-225772C1ACF2)
- [GET_FILE_PROFILE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.GET_FILE_PROFILE-Function.html#GUID-936F90C7-1705-430B-B775-68D7144D6D9D)
- [LOAD_DATA Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_DATA-Function-Signature-1.html#GUID-54FF0F84-BD45-47F1-B218-F5ED8A2D7D05)
- [LOAD_DATA Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_DATA-Function-Signature-2.html#GUID-E254169A-FA3D-4169-B77A-A573DB3962F4)

------------------------------------------------------------------------

## 19.1 Data Types

The APEX_DATA_LOADING package uses the following data types.

```
type t_data_load_result is record(
    processed_rows    PLS_INTEGER,
    error_rows        PLS_INTEGER );
```

**Parent topic:** [APEX_DATA_LOADING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.html#GUID-D45764A0-5A56-422C-9D51-FC1FE26E52A7)

------------------------------------------------------------------------

## 19.2 GET_FILE_PROFILE Function

This function returns the file profile (determined by the data loading definition) in JSON format.

Syntax

```
APEX_DATA_LOADING.GET_FILE_PROFILE (
    p_application_id    IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_static_id         IN VARCHAR2 )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application which contains the data load definition. |
| `p_static_id` | Static ID of the data loading definition to execute. |

Example

This example parses and fetches the first 10 columns using a file uploaded from P1_FILE File Browse item and the file profile computed from the data load defintion.

```
select p.line_number,
       p.col001,
       p.col002,
       p.col003,
       p.col004,
       p.col005,
       p.col006,
       p.col007,
       p.col008,
       p.col009,
       p.col010
  from apex_application_temp_files           f,
       table( apex_data_parser.parse(
                  p_content       =>  f.blob_content,
                  p_file_name     =>  f.filename,
                  p_file_profile  =>  apex_data_loading.get_file_profile
                                      ( p_static_id => 'my-load-definition'),
                  p_max_rows      =>  100 ) ) p
 where f.name = :P1_FILE;
```

**Parent topic:** [APEX_DATA_LOADING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.html#GUID-D45764A0-5A56-422C-9D51-FC1FE26E52A7)

------------------------------------------------------------------------

## 19.3 LOAD_DATA Function Signature 1

This function loads file data and returns loading status information containing processed rows and error rows.

Syntax

```
APEX_DATA_LOADING.LOAD_DATA (
    p_application_id   IN NUMBER      DEFAULT apex_application.g_flow_id,
    p_static_id        IN VARCHAR2,
    p_data_to_load     IN BLOB,
    p_xlsx_sheet_name  IN VARCHAR2    DEFAULT NULL )
    RETURN t_data_load_result;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application which contains the data load definition. |
| `p_static_id` | Static ID of the data loading definition to execute. |
| `p_data_to_load` | BLOB file to be loaded. |
| `p_xlsx_sheet_name` | For XLSX files, the worksheet to extract. |

Example

This example fetches a file (uploaded with the `PX_FILEBROWSE_ITEM`) from the `APEX_APPLICATION_TEMP_FILES` table and executes the `my-load-definition` data loading definition.

```
DECLARE
    l_file blob;
    l_load_result apex_data_loading.t_data_load_result;
BEGIN
    apex_session.create_session( 100, 1, 'ADMIN' );
    SELECT blob_content
      INTO l_file
      FROM apex_application_temp_files
    WHERE name = :PX_FILEBROWSE_ITEM;
    l_load_result := apex_data_loading.load_data (
                       p_static_id    => 'my-load-definition',
                       p_data_to_load => l_file );
    dbms_output.put_line( 'Processed ' || l_load_result.processed_rows || ' rows.');
END;
```

**Parent topic:** [APEX_DATA_LOADING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.html#GUID-D45764A0-5A56-422C-9D51-FC1FE26E52A7)

------------------------------------------------------------------------

## 19.4 LOAD_DATA Function Signature 2

This function loads CLOB data and returns loading status information containing processed rows and error rows.

Syntax

```
APEX_DATA_LOADING.LOAD_DATA (
    p_application_id   IN NUMBER      DEFAULT apex_application.g_flow_id,
    p_static_id        IN VARCHAR2,
    p_data_to_load     IN CLOB,
    p_xlsx_sheet_name  IN VARCHAR2    DEFAULT NULL )
    RETURN t_data_load_result;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application which contains the data load definition. |
| `p_static_id` | Static ID of the data loading definition to execute. |
| `p_data_to_load` | CLOB data to be loaded. |
| `p_xlsx_sheet_name` | For XLSX files, the worksheet to extract. |

Example

This example gets data (copy and pasted into the `PX_DATA` textarea) and executes the `my-load-definition` data loading definition.

```
DECLARE
    l_load_result apex_data_loading.t_data_load_result;
BEGIN
    apex_session.create_session( 100, 1, 'ADMIN' );

    l_load_result := apex_data_loading.load_data (
                         p_static_id    => 'my-load-definition',
                         p_data_to_load => :PX_DATA );
    dbms_output.put_line( 'Processed ' || l_load_result.processed_rows || ' rows.');
END;
```

**Parent topic:** [APEX_DATA_LOADING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_LOADING.html#GUID-D45764A0-5A56-422C-9D51-FC1FE26E52A7)
