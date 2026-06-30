<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 28  APEX_EXEC

The `APEX_EXEC` package encapsulates data processing and querying capabilities and provides an abstraction from the data source to APEX components and plug-ins. `APEX_EXEC` contains procedures and functions to execute queries or procedural calls on local and remote data sources as well as REST Data Sources. It can be used for plug-in development and procedural PL/SQL processing in applications or within packages and procedures.

All `APEX_EXEC` procedures require an existing APEX session to function. In a pure SQL or PL/SQL context, use the `APEX_SESSION` package to initialize a new session.

Note:

Always add an exception handler to your procedure or function to ensure that `APEX_EXEC.CLOSE` is always called to release server resources such as database cursors and temporary lobs.

- [Call Sequences for APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html#GUID-DD8B248D-A6D9-48D5-8889-DE302644363A)
- [Global Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.Global-Constants.html#GUID-DC49AC73-4DEA-4937-B59F-14F0211D9804)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.Data-Types.html#GUID-8BE94A0F-E511-4CB5-831F-46B5E2FCC4A3)
- [ADD_COLUMN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_COLUMN-Procedure.html#GUID-2AD6B830-7815-4554-9076-C05709CC8D42)
- [ADD_DML_ARRAY_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html#GUID-37F4CB18-7657-4C79-B114-6D7C5A6CC803)
- [ADD_DML_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ROW-Procedure.html#GUID-774A49F8-C0AD-4917-A2A8-6E7A5B0F56B1)
- [ADD_FILTER Procedures](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_FILTER-Procedure.html#GUID-995DF2C9-4448-4613-A7C1-FA5F7F45B25F)
- [ADD_ORDER_BY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_ORDERBY-Procedure.html#GUID-3AA67C0E-3049-4846-B277-C6B123CE515A)
- [ADD_PARAMETER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_ORDER_BY-Procedure.html#GUID-F58D89B4-8AA0-4F77-B31A-C7BDF7055AD9)
- [CLEAR_DML_ROWS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLEAR_DML_ROWS-Procedure.html#GUID-36EEB170-F52C-4647-8BC7-29F3831E5DA5)
- [CLOSE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE-Procedure.html#GUID-0CC0037C-443B-4669-9282-D08DB7103281)
- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html#GUID-E933C2AC-C2F3-4F1F-B67A-F98023DDD8D6)
- [COLUMN_EXISTS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.COLUMN_EXISTS-Function.html#GUID-9ED0138E-BB3E-4486-A3AE-5C49D9186B80)
- [COPY_DATA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.COPY_DATA-Procedure.html#GUID-BEEFB3C1-00CD-4C0F-84FC-E4F7F62F3462)
- [DESCRIBE_QUERY Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.DESCRIBE_QUERY-Function-Signature-1.html#GUID-B910361D-9F34-48D4-A7E0-FD5B536FA084)
- [DESCRIBE_QUERY Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.DESCRIBE_QUERY-Function-Signature-2.html#GUID-ED00E70E-1AAC-416C-8B88-E4669B7CC42A)
- [ENQUOTE_LITERAL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ENQUOTE_LITERAL-Function.html#GUID-07962BBF-409A-49B6-9437-4DC2DD53A238)
- [ENQUOTE_NAME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ENQUOTE_NAME-Function.html#GUID-DA5CC9B0-4C83-4708-9557-80735EA782E8)
- [EXECUTE_DML Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_DML-Procedure.html#GUID-6445280E-BFD2-49B4-A114-AE1DFB88E313)
- [EXECUTE_PLSQL Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_PLSQL-Procedure-Signature-1.html#GUID-53BF190A-464A-4BFD-B2A8-A8936E8EAC06)
- [EXECUTE_PLSQL Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_PLSQL-Procedure-Signature-2.html#GUID-1E0EA6FE-224B-46C6-ABC8-3CA7DD68F55B)
- [EXECUTE_REMOTE_PLSQL Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REMOTE_PLSQL-Procedure.html#GUID-EE9E3F1F-F40D-4CCD-84CF-C1CF6DC2B45B)
- [EXECUTE_REMOTE_PLSQL Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REMOTE_PLSQL-Procedure-Signature-2.html#GUID-C7D4A19F-D8EF-44AB-A456-40B1DF918BAB)
- [EXECUTE_REST_SOURCE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REST_SOURCE-Procedure-Signature-1.html#GUID-2DB748DC-E5B7-4AF8-B64A-6716F8A5E447)
- [EXECUTE_REST_SOURCE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REST_SOURCE-Procedure-Signature-2.html#GUID-5A7A4F85-C05A-44B5-8948-DFC04B6B3AC4)
- [EXECUTE_WEB_SOURCE Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_WEB_SOURCE-Procedure.html#GUID-30272C98-EA7B-4220-A26B-63DFF9DFCD1F)
- [GET Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET-Functions.html#GUID-D59C7753-A9CF-41BC-AAB9-06DB32CA3361)
- [GET_ARRAY_ROW_DML_OPERATION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ARRAY_ROW_DML_OPERATION-Function.html#GUID-34934601-765E-403B-8AE8-EB665DCB085F)
- [GET_ARRAY_ROW_VERSION_CHECKSUM Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM-Function.html#GUID-09AE7CF0-C687-4629-85B2-4A1F007F25F1)
- [GET_COLUMN Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN-FUNCTION.html#GUID-45137DEB-F9F2-4F9F-BD3A-98FA5677096A)
- [GET_COLUMNS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMNS-Function.html#GUID-8A9BA532-F210-43DD-97A0-4B98698EA59E)
- [GET_COLUMN_COUNT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN_COUNT-FUNCTION.html#GUID-6B4EB17B-E6BA-4359-AA65-7627C71B38A1)
- [GET_COLUMN_POSITION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_COLUMN_POSITION-FUNCTION.html#GUID-972DC4E1-A732-45C3-A322-3CAC65306ED9)
- [GET_DATA_TYPE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DATA_TYPE-Function.html#GUID-D380E6A6-759D-4A68-8BF5-26A4B3AF7EB9)
- [GET_DML_STATUS_CODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DML_STATUS_CODE-Function.html#GUID-7FA74357-5178-4192-A74B-EF10F615D62C)
- [GET_DML_STATUS_MESSAGE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_DML_STATUS_MESSAGE-Function.html#GUID-C7B59752-4E8B-44D6-8EAB-1C4A55C65C07)
- [GET_PARAMETER Functions](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_PARAMETERS-Function.html#GUID-15420F6D-CECA-4BAB-86A5-AFDC032E4833)
- [GET_ROW_VERSION_CHECKSUM Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ROW_VERSION_CHECKSUM-Function.html#GUID-982B244F-C322-4421-AEB2-153B8410EB6D)
- [GET_TOTAL_ROW_COUNT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_TOTAL_ROW_COUNT-FUNCTION.html#GUID-A7DD0D6B-0842-4CA7-8F7F-FA1E01A9A949)
- [HAS_ERROR Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_ERROR-Function.html#GUID-BF3BC9CB-87FF-4379-8219-927834E7DAA2)
- [HAS_MORE_ARRAY_ROWS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_MORE_ARRAY_ROWS-Function.html#GUID-7198465B-A737-4244-9FA6-3C405B119497)
- [HAS_MORE_ROWS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_MORE_ROWS-Function.html#GUID-5E5B3C8C-40F6-4465-B525-1B504B119147)
- [IS_GROUP_END Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.IS_GROUP_END-Function.html#GUID-9655D742-0870-4113-A427-6CF84FD8DC37)
- [IS_REMOTE_SQL_AUTH_VALID Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.IS_REMOTE_SQL_AUTH_VALID-Function.html#GUID-F72C8319-BB56-4175-B9DC-F9C740566C75)
- [NEXT_ARRAY_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html#GUID-9918364A-5A5E-45A2-9F13-F463E44EDABD)
- [NEXT_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ROW-Function.html#GUID-A2FDA960-4826-4FCD-B39A-5C491651BD3D)
- [OPEN_ARRAY Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html#GUID-D1CB527B-C92B-4994-BFF4-E224979A4702)
- [OPEN_ARRAY Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-2.html#GUID-E3413CEA-9E20-45A7-A071-4F3661B11F25)
- [OPEN_DUALITY_VIEW_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT-Function.html#GUID-C249ADAD-ECA9-4BB0-B56E-97224A119F2D)
- [OPEN_JSON_SOURCE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_JSON_SOURCE_DML_CONTEXT-Function.html#GUID-AEEEAE28-E2F6-4FF8-A582-45B9D1B290F1)
- [OPEN_LOCAL_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_LOCAL_DML_CONTEXT-Function.html#GUID-D3CAB370-8CA4-4371-A5EE-72FDA4AFE30C)
- [OPEN_QUERY_CONTEXT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_QUERY_CONTEXT-Function-1.html#GUID-9C0BF735-0749-44F6-B7E2-731070D0E9DE)
- [OPEN_QUERY_CONTEXT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC-OPEN_QUERY_CONTEXT-Function-2.html#GUID-0EFB6FF7-15B1-4E25-A78E-9F482408F638)
- [OPEN_REMOTE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_DML_CONTEXT-Function.html#GUID-1D856CD4-906A-404A-A541-66534CF3E0A9)
- [OPEN_REMOTE_SQL_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_SQL_QUERY-Function.html#GUID-75BF9671-7289-40A9-9896-394DCD3FB482)
- [OPEN_REST_SOURCE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_DML_CONTEXT-Function.html#GUID-8C5E17C9-884D-43D0-8A12-2C071F05019C)
- [OPEN_REST_SOURCE_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_QUERY-Function.html#GUID-F09E0A46-8282-4917-8C3B-94910F9DD919)
- [OPEN_WEB_SOURCE_DML_CONTEXT Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_WEB_SOURCE_DML_CONTEXT-Function.html#GUID-A805DA13-F33D-4927-8D51-EB49F79A4A34)
- [OPEN_WEB_SOURCE_QUERY Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_WEB_SOURCE_QUERY-Function.html#GUID-B0B2F973-BB25-4F6E-9AC8-37864CC8FDA6)
- [PURGE_DUALITY_VIEW_CACHE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_DUALITY_VIEW_CACHE-Procedure.html#GUID-1A6625C2-6D12-4FF0-A2FB-298443C8163E)
- [PURGE_JSON_SOURCE_CACHE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_JSON_SOURCE_CACHE-Procedure.html#GUID-45369AFC-DA47-4C82-88B9-BDBF77A8763B)
- [PURGE_REST_SOURCE_CACHE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_REST_SOURCE_CACHE-procedure.html#GUID-FA580EA0-4825-4732-80C9-86E72DB9DBCC)
- [PURGE_WEB_SOURCE_CACHE Procedure (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_WEB_SOURCE_CACHE-Procedure.html#GUID-A2D048D6-68D7-4FA6-AB2C-78ECD796D377)
- [SET_ARRAY_CURRENT_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_CURRENT_ROW-Procedure.html#GUID-A4C59BF3-E31A-46E0-9156-93CC14214905)
- [SET_ARRAY_ROW_VERSION_CHECKSUM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM-Procedure.html#GUID-F36780BF-8857-4BAA-B9D7-FAED159B741A)
- [SET_CURRENT_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_CURRENT_ROW-Procedure.html#GUID-0D7239E7-D7A5-4205-84D1-DF7499BC7D4B)
- [SET_NULL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_NULL-Procedure.html#GUID-659FE8D4-B561-4DBA-9BA6-8F0BAC820593)
- [SET_ROW_VERSION_CHECKSUM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ROW_VERSION_CHECKSUM-Procedure.html#GUID-DE0D6BB4-1D37-4026-9A27-49EB072523E4)
- [SET_VALUE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_VALUE-Procedure.html#GUID-377EA347-647F-479B-B407-53B9C397EC20)
- [SET_VALUES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_VALUES-Procedure.html#GUID-E5152786-4376-4DFB-9856-A77562AF2C09)

------------------------------------------------------------------------

## 28.1 Call Sequences for APEX_EXEC

All `APEX_EXEC` procedures require an existing APEX session to function. In a pure SQL or PL/SQL context, use the `APEX_SESSION` package to initialize a new session.

- [Querying a Data Source with APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html#GUID-CAB0706C-E9CF-45CF-82D6-69C2998ED237)
- [Executing a DML on a Data Source with APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html#GUID-450A9C24-E63C-49E9-8CA9-66316887FC3A)
- [Executing a Remote Procedure or REST API with APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html#GUID-583B6B4C-0518-4EE4-961B-8DB85F35B385)

See Also:

[APEX_SESSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION.html#GUID-710E9F4F-157C-4EBA-BBA9-3E0B9EE4002A)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

### 28.1.1 Querying a Data Source with APEX_EXEC

1.  Prepare columns to be selected from the data source:
    1.  Create a variable of the `APEX_EXEC.T_COLUMNS` type.
    2.  Add columns with the `APEX_EXEC.ADD_COLUMN`.
2.  (Optional) Prepare bind variables:
    1.  Create a variable of `APEX_EXEC.T_PARAMETERS` type.
    2.  Add bind values with `APEX_EXEC.ADD_PARAMETER`.
3.  (Optional) Prepare filters:
    1.  Create a variable of the type `APEX_EXEC.T_FILTERS`.
    2.  Add bind values with `APEX_EXEC.ADD_FILTER`.
4.  Execute the data source query in one of the following ways:
    - For REST Data Sources, use `APEX_EXEC.OPEN_REST_SOURCE_QUERY`.
    - For REST Enabled SQL, use `APEX_EXEC.OPEN_REMOTE_SQL_QUERY`.
    - Alternatively, use `APEX_EXEC.OPEN_QUERY_CONTEXT` to pass in the location as a parameter.
5.  Get the result set meta data:
    1.  `APEX_EXEC.GET_COLUMN_COUNT` returns the number of result columns.
    2.  `APEX_EXEC.GET_COLUMN` returns information about a specific column.
6.  Process the result set:
    1.  `APEX_EXEC.NEXT_ROW` advances the result cursor by one row.
    2.  `APEX_EXEC.GET_NNNN` functions retrieve individual column values.
7.  Close all resources with `APEX_EXEC.CLOSE`.
8.  Add an exception handler and close those resources. For example:

    ``` pre
    EXCEPTION
        WHEN others THEN
             apex_debug.log_exception;
             apex_exec.close( l_context );
        RAISE;
    ```

See Also:

For code examples of a complete query to a Data Source, review the example sections in the following APIs:

- [OPEN_QUERY_CONTEXT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC-OPEN_QUERY_CONTEXT-Function-2.html#GUID-0EFB6FF7-15B1-4E25-A78E-9F482408F638)
- [OPEN_REMOTE_SQL_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_SQL_QUERY-Function.html#GUID-75BF9671-7289-40A9-9896-394DCD3FB482)
- [OPEN_REST_SOURCE_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_QUERY-Function.html#GUID-F09E0A46-8282-4917-8C3B-94910F9DD919)

**Parent topic:** [Call Sequences for APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html#GUID-DD8B248D-A6D9-48D5-8889-DE302644363A)

### 28.1.2 Executing a DML on a Data Source with APEX_EXEC

1.  Define the Data Manipulation Language (DML) columns:
    1.  Create a variable of the `APEX_EXEC.T_COLUMNS` type.
    2.  Add columns with `APEX_EXEC.ADD_COLUMN`.
2.  (Optional) Prepare bind variables:
    1.  Create a variable of the `APEX_EXEC.T_PARAMETERS` type.
    2.  Add bind values with `APEX_EXEC.ADD_PARAMETER`.
3.  Prepare the DML Context in one of the following ways:
    - For REST Data Sources, use `OPEN_REST_SOURCE_DML_CONTEXT`.
    - For REST Enabled SQL, use `OPEN_REMOTE_DML_CONTEXT`.
    - For local database, use `OPEN_LOCAL_DML_CONTEXT`.
4.  Add row values for the DML to perform:
    1.  Use `APEX_EXEC.ADD_DML_ROW` to add a new row.
    2.  Use `APEX_EXEC.SET_VALUE` to provide individual column values.
5.  Execute the DML with `APEX_EXEC.EXECUTE_DML`.
6.  Walk through RETURNING values and error messages for processed DML rows.

    - `APEX_EXEC.NEXT_ROW` advances the result cursor by one row.
    - `APEX_EXEC.HAS_ERROR` indicates whether DML processing for this row was successful or not.
    - `APEX_EXEC.GET_DML_STATUS_CODE` returns the status code (SQL Error Code) for each DML row. If DML for this row was successful, NULL is returned as the status code.
    - `APEX_EXEC.GET_NNN` functions retrieve individual column "DML RETURNING" values.

7.  Close all resources with `APEX_EXEC.CLOSE`.
8.  Add an exception handler and close those resources. For example:

    ``` pre
    EXCEPTION
        WHEN others THEN
            apex_exec.close( l_context );
            RAISE;
    ```

See Also:

For code examples of a complete DML query, review the example sections in the following APIs:

- [OPEN_LOCAL_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_LOCAL_DML_CONTEXT-Function.html#GUID-D3CAB370-8CA4-4371-A5EE-72FDA4AFE30C)
- [OPEN_REMOTE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_DML_CONTEXT-Function.html#GUID-1D856CD4-906A-404A-A541-66534CF3E0A9)
- [OPEN_REST_SOURCE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_DML_CONTEXT-Function.html#GUID-8C5E17C9-884D-43D0-8A12-2C071F05019C)

**Parent topic:** [Call Sequences for APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html#GUID-DD8B248D-A6D9-48D5-8889-DE302644363A)

### 28.1.3 Executing a Remote Procedure or REST API with APEX_EXEC

1.  (Optional) Prepare bind variables:
    1.  Create a variable of `APEX_EXEC.T_PARAMETERS` type.
    2.  Add bind values with `APEX_EXEC.ADD_PARAMETER`.
2.  Execute the local or remote procedure or REST API in one of the following ways:
    - For REST Data Sources, use `APEX_EXEC.EXECUTE_REST_SOURCE`.
    - For REST Enabled SQL, use `APEX_EXEC.EXECUTE_REMOTE_PLSQL`.
    - For local database, use `APEX_EXEC.EXECUTE_PLSQL`.

    The `P_PARAMETERS` array which is used to pass bind variables is an `IN OUT` parameter, so `OUT` parameters are passed back.

3.  (Optional) Retrieve the `OUT` parameters. Walk through the variable of the `APEX_EXEC.T_PARAMETERS` type and use `GET_PARAMETER_VALUE` to retrieve the `OUT` parameter value.

See Also:

For code examples of a complete remote procedure or REST API query, review the example sections in the following APIs:

- [EXECUTE_PLSQL Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_PLSQL-Procedure-Signature-1.html#GUID-53BF190A-464A-4BFD-B2A8-A8936E8EAC06)
- [EXECUTE_REMOTE_PLSQL Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REMOTE_PLSQL-Procedure.html#GUID-EE9E3F1F-F40D-4CCD-84CF-C1CF6DC2B45B)
- [EXECUTE_REST_SOURCE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.EXECUTE_REST_SOURCE-Procedure-Signature-1.html#GUID-2DB748DC-E5B7-4AF8-B64A-6716F8A5E447)

**Parent topic:** [Call Sequences for APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/call-sequences-for-APEX_EXEC.html#GUID-DD8B248D-A6D9-48D5-8889-DE302644363A)

------------------------------------------------------------------------

## 28.2 Global Constants

The APEX_EXEC package uses the following constants.

Query or DML Location Constants

```
subtype t_location is varchar2(12);

c_location_local_db       constant t_location  := 'LOCAL';
c_location_remote_db      constant t_location  := 'REMOTE';
c_location_rest_source    constant t_location  := 'REST_SOURCE';
c_location_region_source  constant t_location  := 'REGION_SOURCE';
c_location_duality_view   constant t_location  := 'DUALITY_VIEW';
c_location_json_source    constant t_location  := 'JSON_COLLECTION';
c_location_sample_data    constant t_location  := 'SAMPLE_DATA';

c_lov_shared              constant t_lov_type  := 1;
c_lov_sql_query           constant t_lov_type  := 2;
c_lov_static              constant t_lov_type  := 3;

subtype t_query_type is varchar2(23);

c_query_type_table           constant t_query_type := 'TABLE';
c_query_type_sql_query       constant t_query_type := 'SQL';
c_query_type_func_return_sql constant t_query_type := 'FUNC_BODY_RETURNING_SQL';

subtype t_dml_operation is pls_integer range 1..3;

c_dml_operation_insert constant t_dml_operation := 1;
c_dml_operation_update constant t_dml_operation := 2;
c_dml_operation_delete constant t_dml_operation := 3;

subtype t_target_type is varchar2(13);
c_target_type_region_source constant t_target_type := 'REGION_SOURCE';
c_target_type_table         constant t_target_type := 'TABLE';
c_target_type_sql_query     constant t_target_type := 'SQL';
c_target_type_plsql         constant t_target_type := 'PLSQL_CODE';

subtype t_post_processing is pls_integer range 1..3;
c_postprocess_where_orderby    constant t_post_processing := 1;
c_postprocess_sql              constant t_post_processing := 2;
c_postprocess_func_return_sql  constant t_post_processing := 3;
```

Column Data Type Constants

Data type constants to be used in the `ADD_FILTER` or `ADD_COLUMN` procedures.

```
subtype t_data_type is pls_integer range 1..18;

c_data_type_varchar2      constant t_data_type := 1;
c_data_type_number        constant t_data_type := 2;
c_data_type_date          constant t_data_type := 3;
c_data_type_timestamp     constant t_data_type := 4;
c_data_type_timestamp_tz  constant t_data_type := 5;
c_data_type_timestamp_ltz constant t_data_type := 6;
c_data_type_interval_y2m  constant t_data_type := 7;
c_data_type_interval_d2s  constant t_data_type := 8;
c_data_type_blob          constant t_data_type := 9;
c_data_type_bfile         constant t_data_type := 10;
c_data_type_clob          constant t_data_type := 11;
c_data_type_rowid         constant t_data_type := 12;
c_data_type_user_defined  constant t_data_type := 13;
c_data_type_binary_number constant t_data_type := 14;
c_data_type_sdo_geometry  constant t_data_type := 15;
c_data_type_boolean       constant t_data_type := 16;
c_data_type_array         constant t_data_type := 17;
c_data_type_vector        constant t_data_type := 18;
--
-- Use this data type for columns of the JSON data type (Database 21c or higher) ONLY.
-- Has currently the same functionality as CLOB columns, but may be extended in the
-- future.
c_data_type_json constant t_data_type := 11;
```

Filter Type Constants

Filter type constants to be used in the `ADD_FILTER` procedures.

```
c_filter_eq              constant t_filter_type := 1;
c_filter_not_eq          constant t_filter_type := 2;
c_filter_gt              constant t_filter_type := 3;
c_filter_gte             constant t_filter_type := 4;
c_filter_lt              constant t_filter_type := 5;
c_filter_lte             constant t_filter_type := 6;
c_filter_null            constant t_filter_type := 7;
c_filter_not_null        constant t_filter_type := 8;
c_filter_starts_with     constant t_filter_type := 9;
c_filter_not_starts_with constant t_filter_type := 10;
c_filter_ends_with       constant t_filter_type := 11;
c_filter_not_ends_with   constant t_filter_type := 12;
c_filter_contains        constant t_filter_type := 13;
c_filter_not_contains    constant t_filter_type := 14;
c_filter_in              constant t_filter_type := 15;
c_filter_not_in          constant t_filter_type := 16;
c_filter_between         constant t_filter_type := 17;
c_filter_not_between     constant t_filter_type := 18;
c_filter_regexp          constant t_filter_type := 19;
c_filter_last            constant t_filter_type := 20; -- date filter: days/months/...
c_filter_not_last        constant t_filter_type := 21; -- date filter: days/months/...
c_filter_next            constant t_filter_type := 22; -- date filter: days/months/...
c_filter_not_next        constant t_filter_type := 23; -- date filter: days/months/...
c_filter_like            constant t_filter_type := 24; -- Interactive report filter.
c_filter_not_like        constant t_filter_type := 25; -- Interactive report filter.
c_filter_search          constant t_filter_type := 26; -- Interactive report filter.
c_filter_sql_expression  constant t_filter_type := 27; -- Interactive report filter.
c_filter_oracletext      constant t_filter_type := 28; -- Oracle TEXT CONTAINS filter.
c_filter_between_lbe     constant t_filter_type := 29; -- Interactive report filter.
c_filter_between_ube     constant t_filter_type := 30; -- Interactive report filter.
c_filter_sdo_filter      constant t_filter_type := 31; -- Spatial filter.
c_filter_sdo_anyinteract constant t_filter_type := 32; -- Spatial filter.
c_filter_dbms_search     constant t_filter_type := 33; -- Oracle Ubiquitous Search CONTAINS Filter.
c_filter_vector_type     constant t_filter_type := 34;
c_filter_true            constant t_filter_type := 35;
c_filter_false           constant t_filter_type := 36;
c_filter_not_between_lbe constant t_filter_type := 37;
c_filter_not_between_ube constant t_filter_type := 38;
c_filter_sdo_releate     constant t_filter_type := 39; -- Spatial filter.
```

Order By Constants

Order by constants to be used in the `ADD_FILTER` procedures.

```
c_order_asc           constant t_order_direction := 1;
c_order_desc          constant t_order_direction := 2;

c_order_nulls_first   constant t_order_nulls := 1;
c_order_nulls_last    constant t_order_nulls := 2;
```

Order By Nulls Constants

Order By Nulls constants to use within REST Source Plug-Ins.

```
subtype t_supports_orderby_nulls_as is pls_integer range 1..5;

c_orderby_nulls_flexible        constant t_supports_orderby_nulls_as := 1;
c_orderby_nulls_are_lowest      constant t_supports_orderby_nulls_as := 2;
c_orderby_nulls_are_highest     constant t_supports_orderby_nulls_as := 3;
c_orderby_nulls_always_last     constant t_supports_orderby_nulls_as := 4;
c_orderby_nulls_always_first    constant t_supports_orderby_nulls_as := 5;
```

Empty Constants

Constants for empty filter, order by, columns or parameter arrays.

```
c_empty_columns         t_columns;
c_empty_filters         t_filters;
c_empty_order_bys       t_order_bys;
c_empty_parameters      t_parameters;
```

Database Vendor Constants

```
subtype t_database_type is pls_integer range 1..2;
c_database_oracle constant t_database_type := 1;
c_database_mysql  constant t_database_type := 2;
```

Aggregation Type Constants

```
subtype t_aggregation_type is pls_integer range 1..3;

c_aggregation_none constant     t_aggregation_type := 1;
c_aggregation_group_by constant t_aggregation_type := 2;
c_aggregation_distinct constant t_aggregation_type := 3;
```

Aggregation Column Role Constants

```
subtype t_column_role is pls_integer range 1..2;

c_column_role_aggregate constant t_column_role := 1;
c_column_role_group_by  constant t_column_role := 2;
```

Aggregation Function Constants

```
subtype t_aggregate_function is pls_integer range 1..11;

c_aggregate_sum              constant t_aggregate_function := 1;
c_aggregate_avg              constant t_aggregate_function := 2;
c_aggregate_median           constant t_aggregate_function := 3;
c_aggregate_cnt              constant t_aggregate_function := 4;
c_aggregate_distinct_cnt     constant t_aggregate_function := 5;
c_aggregate_approx_dist_cnt  constant t_aggregate_function := 6;
c_aggregate_min              constant t_aggregate_function := 7;
c_aggregate_max              constant t_aggregate_function := 8;
c_aggregate_ratio_report_sum constant t_aggregate_function := 9;
c_aggregate_ratio_report_cnt constant t_aggregate_function := 10;
c_aggregate_listagg          constant t_aggregate_function := 11;
```

Aggregation Columns

```
type t_aggregation_column is record(
    attributes         t_column,
    aggr_role          t_column_role,
    aggr_function      t_aggregate_function,
    total_column_name  t_column_name,
    total_function     t_aggregate_function );
```

Collection of Aggregation Columns

```
type t_aggregation_columns is table of t_aggregation_column index by pls_integer;
```

Aggregation

```
type t_aggregation is record(
    aggregation_type        t_aggregation_type,
    column_info             t_aggregation_columns,
    order_bys               t_order_bys,
    order_by_expr           varchar2(32767),
    row_count_column        t_column_name );

c_empty_aggregation t_aggregation;
```

Vector Search Subtypes

```
subtype t_vector_search_type is pls_integer range 1..3;

c_vector_search_exact  constant t_vector_search_type := 1;
c_vector_search_approx constant t_vector_search_type := 2;
c_vector_search_multi  constant t_vector_search_type := 3;

--
subtype t_vector_distance_type is pls_integer range 1..6;

c_vector_distance_cosine       constant t_vector_distance_type := 1;
c_vector_distance_dot          constant t_vector_distance_type := 2;
c_vector_distance_euclidean    constant t_vector_distance_type := 3;
c_vector_distance_eucl_squared constant t_vector_distance_type := 4;
c_vector_distance_hamming      constant t_vector_distance_type := 5;
c_vector_distance_manhattan    constant t_vector_distance_type := 6;
--
subtype t_vector_distance is varchar2(17);

c_vector_dist_str_cosine       constant t_vector_distance  := 'COSINE';
c_vector_dist_str_dot          constant t_vector_distance  := 'DOT';
c_vector_dist_str_euclidean    constant t_vector_distance  := 'EUCLIDEAN';
c_vector_dist_str_eucl_squared constant t_vector_distance  := 'EUCLIDEAN_SQUARED';
c_vector_dist_str_hamming      constant t_vector_distance  := 'HAMMING';
c_vector_dist_str_manhattan    constant t_vector_distance  := 'MANHATTAN';
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.3 Data Types

The APEX_EXEC package uses the following data types.

Generic

```
subtype t_column_name is varchar2(32767);

type t_value is record (
    varchar2_value      varchar2(32767),
    number_value        number,
    binary_number_value binary_double,
    date_value          date,
    boolean_value       boolean,
    timestamp_value     timestamp,
    timestamp_tz_value  timestamp with time zone,
    timestamp_ltz_value timestamp with local time zone,
    interval_y2m_value  yminterval_unconstrained,
    interval_d2s_value  dsinterval_unconstrained,
    blob_value          blob,
    bfile_value         bfile,
    clob_value          clob,
    sdo_geometry_value  mdsys.sdo_geometry,
    vector_value        vector,
    array_value         sys.json_array_t,
    anydata_value       sys.anydata );

type t_values is table of t_value index by pls_integer;
```

Note:

`sdo_geometry_value` is only available when SDO_GEOMETRY is installed in the database.

Bind variables

```
type t_parameter is record (
    name      t_column_name,
    data_type t_data_type,
    value     t_value );

type t_parameters is table of t_parameter index by pls_integer;
```

Filters

```
subtype t_filter_type is pls_integer range 1..39;
subtype t_filter_interval_type is varchar2(2);

type t_filter is record (
    column_name       t_column_name,
    data_type         t_data_type,
    filter_type       t_filter_type,
    filter_values     t_values,
    filter_buckets    t_filter_buckets,
    sql_expression    varchar2(32767),
    search_columns    t_columns,
    search_operator   t_search_operator,
    null_result       boolean default false,
    is_case_sensitive boolean default true );

type t_filters is table of t_filter index by pls_integer;
```

Order Bys

```
subtype t_order_direction is pls_integer range 1..2;
subtype t_order_nulls     is pls_integer range 1..2;

type t_order_by is record (
    column_name   t_column_name,
    direction     t_order_direction,
    order_nulls   t_order_nulls );

type t_order_bys is table of t_order_by index by pls_integer;
```

Columns

```
type t_column is record (
    name                           t_column_name,
    data_type                      t_data_type,
    data_type_length               pls_integer,
    sql_expression                 varchar2(32767),
    format_mask                    varchar2(4000),
    is_required                    boolean,
    is_primary_key                 boolean,
    is_query_only                  boolean,
    is_checksum                    boolean,
    is_returning                   boolean
);

type t_columns is table of t_column index by pls_integer;
```

Context Handle

```
subtype t_context is pls_integer;
```

Data Source Capabilities

Note:

The data source capabilities `filter_*` and `orderby_*` are deprecated and will be removed in a future release.

```
type t_source_capabilities is record (
    location               t_location,
    --
    pagination             boolean default false,
    page_size_is_stable    boolean default false,
    --
    allow_fetch_all_rows   boolean default false,
    --
    filtering              boolean default false,
    order_by               boolean default false,
    group_by               boolean default false,
    --
    orderby_nulls_as       t_supports_orderby_nulls_as,
    --
    -- the following filter_* attributes are deprecated, do not use.
    --
    filter_eq              boolean default false,
    filter_not_eq          boolean default false,
    filter_gt              boolean default false,
    filter_gte             boolean default false,
    filter_lt              boolean default false,
    filter_lte             boolean default false,
    filter_null            boolean default false,
    filter_not_null        boolean default false,
    filter_contains        boolean default false,
    filter_not_contains    boolean default false,
    filter_like            boolean default false,
    filter_not_like        boolean default false,
    filter_starts_with     boolean default false,
    filter_not_starts_with boolean default false,
    filter_between         boolean default false,
    filter_not_between     boolean default false,
    filter_in              boolean default false,
    filter_not_in          boolean default false,
    filter_regexp          boolean default false,
    filter_last            boolean default false,
    filter_not_last        boolean default false,
    filter_next            boolean default false,
    filter_not_next        boolean default false,
    --
    -- the following orderby_* attributes are deprecated, do not use.
    --
    orderby_asc            boolean default false,
    orderby_desc           boolean default false,
    orderby_nulls          boolean default false );
```

Column Meta Data

| Attribute | Description |
|:---|:---|
| `name` | Column Name or Alias. |
| `parent_column_position` | stores the reference to the parent column |
| `data_type` | Data Type: Use constants c_data_type\_\*. |
| `data_type_length` | Data Type Length for VARCHAR2 columns. |
| `sql_expression` | SQL Expression for derived columns. |
| `format_mask` | Format Mask for NUMBER, DATE or TIMESTAMP columns. |
| `is_required` | Whether the column is required (NOT NULL) |
| `is_primary_key` | Whether the column is part of the table primary key |
| `is_query_only` | Query Only columns are not part of DML operations. |
| `is_checksum` | Whether the column is designated as the Row Version column. |
| `is_returning` | Whether the new value is to be returned after a DML operation. |

```
type t_column is record (
    name                      t_column_name,
    --
    parent_column_position    pls_integer,
    --
    data_type                 t_data_type,
    data_type_length          pls_integer,
    --
    sql_expression            varchar2(32767),
    --
    format_mask               varchar2(4000),
    is_required               boolean default false,
    is_primary_key            boolean default false,
    is_query_only             boolean default false,
    is_checksum               boolean default false,
    is_returning              boolean default false );
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.4 ADD_COLUMN Procedure

This procedure adds a column to the columns collection.

Columns collections can be passed to the `OPEN_*_CONTEXT` calls in order to request only a subset of columns. This is particularly useful for REST Data Sources without a SQL statement. If no or an empty column array is passed, all columns defined in the web source are fetched.

Syntax

```
APEX_EXEC.ADD_COLUMN (
    p_columns               IN OUT NOCOPY   t_columns,
    p_column_name           IN              VARCHAR2,
    p_data_type             IN              t_data_type DEFAULT NULL,
    p_sql_expression        IN              VARCHAR2    DEFAULT NULL,
    p_format_mask           IN              VARCHAR2    DEFAULT NULL,
    p_is_primary_key        IN              BOOLEAN     DEFAULT FALSE,
    p_is_query_only         IN              BOOLEAN     DEFAULT FALSE,
    p_is_returning          IN              BOOLEAN     DEFAULT FALSE,
    p_is_checksum           IN              BOOLEAN     DEFAULT FALSE,
    p_parent_column_path    IN              VARCHAR2    DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_columns` | Columns array. |
| `p_column_name` | Column name. |
| `p_data_type ` | Column data type. |
| `p_sql_expression` | SQL expression used to derive a column from other columns. |
| `p_format_mask` | Format mask to use for this column. |
| `p_is_primary_key` | Whether this is a primary key column (default `FALSE`). |
| `p_is_query_only` | Query only columns are not written in a DML context (default `FALSE`). |
| `p_is_returning` | Whether to retrieve the `RETURNING` column after DML has been executed (default `FALSE`). |
| `p_is_checksum` | Whether this is a checksum (row version) column (default `FALSE`). |
| `p_parent_column_path` | Path to the parent column to look the index up within. |

Example

```
DECLARE
    l_columns     apex_exec.t_columns;
    l_context     apex_exec.t_context;
BEGIN
    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'ENAME' );

    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'SAL' );

    l_context := apex_exec.open_rest_source_query(
        p_module_static_id => '{REST Data Source static ID}',
        p_columns          => l_columns
        p_max_rows         => 1000 );

        while apex_exec.next_row( l_context ) LOOP
           -- process rows here ...
        END LOOP;

    apex_exec.close( l_context );
EXCEPTION
    when others then
         apex_exec.close( l_context );
         raise;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.5 ADD_DML_ARRAY_ROW Procedure

This procedure adds a child row for the current array or the array column provided as `p_column_name`. The cursor moves to the new row within the specified array column, and all subsequent calls to `SET_VALUE` target the attributes of this new array element. Only supported within DML contexts on REST Data Sources.

Hierarchical structures are currently only supported for DML on REST Data Sources, if the REST Source type or Plug-In can deal with such structures. DML on a local table or based on REST-Enabled SQL ignores array columns.

The provided array column must be a direct child of the current array column; path syntax and jumping to another position in the hierarchy is unsupported.

Syntax

```
APEX_EXEC.ADD_DML_ARRAY_ROW (
    p_context               IN t_context,
    p_column_name           IN VARCHAR2        DEFAULT NULL,
    p_column_position       IN PLS_INTEGER,
    p_operation             IN t_dml_operation DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_column_name` | Name of the array column (must exist within the current context) to add a new row for. |
| `p_column_position` | Position of the column to set the value for within the DML context. |
| `p_operation` | DML operation to be executed on this row. Use constants `c_dml_operation_*`. If omitted, the child row inherits the operation from its parent. |

Example

```
declare
    l_columns apex_exec.t_columns;
    l_context apex_exec.t_context;

begin

    --
    -- I. Define DML columns
    --
    -- 1. row-level columns
    --
    apex_exec.add_column(
        p_columns      => l_columns,
        p_column_name  => 'CUSTOMER_NAME',
        p_data_type    => apex_exec.c_data_type_varchar2 );

    apex_exec.add_column(
        p_columns      => l_columns,
        p_column_name  => 'ORDER_DATE',
        p_data_type    => apex_exec.c_data_type_date );

    apex_exec.add_column(
        p_columns      => l_columns,
        p_column_name  => 'ORDER_ITEMS',
        p_data_type    => apex_exec.c_data_type_array );

    --
    -- 2. child columns of the ORDER_ITEMS array column
    --
    apex_exec.add_column(
        p_columns            => l_columns,
        p_column_name        => 'PRODUCT_ID',
        p_data_type          => apex_exec.c_data_type_number,
        p_parent_column_path => 'ORDER_ITEMS' );

    apex_exec.add_column(
        p_columns            => l_columns,
        p_column_name        => 'PRODUCT_NAME',
        p_data_type          => apex_exec.c_data_type_varchar2,
        p_parent_column_path => 'ORDER_ITEMS' );

    apex_exec.add_column(
        p_columns            => l_columns,
        p_column_name        => 'UNIT_PRICE',
        p_data_type          => apex_exec.c_data_type_number,
        p_parent_column_path => 'ORDER_ITEMS' );

    apex_exec.add_column(
        p_columns            => l_columns,
        p_column_name        => 'AMOUNT_ORDERED',
        p_data_type          => apex_exec.c_data_type_number,
        p_parent_column_path => 'ORDER_ITEMS' );

    --
    -- II. Open the context object
    --
    l_context := apex_exec.open_rest_source_dml_context(
                     p_columns    => l_columns,
                     p_static_id  => '{module static id}' );

    --
    -- III: Provide DML data
    --
    -- 1. the first row
    --
    apex_exec.add_dml_row(
        p_context   => l_context,
        p_operation => apex_exec.c_dml_operation_insert );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'CUSTOMER_NAME',
        p_value        => 'John Doe' );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'ORDER_DATE',
        p_value        => date'2024-03-15' );

    --
    -- 1.1. the first line item of the first row
    --
    apex_exec.add_dml_array_row(
        p_context      => l_context,
        p_operation    => apex_exec.c_dml_operation_insert,
        p_column_name  => 'ORDER_ITEMS');

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'PRODUCT_ID',
        p_value        => 100 );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'PRODUCT_NAME',
        p_value        => 'Men''s Jeans size L' );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'UNIT_PRICE',
        p_value        => 30.99 );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'AMOUNT_ORDERED',
        p_value        => 10 );

    --
    -- 1.2. the second line item of the first row
    --
    apex_exec.add_dml_array_row(
        p_context      => l_context );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'PRODUCT_ID',
        p_value        => 101 );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'PRODUCT_NAME',
        p_value        => 'Ladies Jeans size S' );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'UNIT_PRICE',
        p_value        => 30.99 );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'AMOUNT_ORDERED',
        p_value        => 10 );

    --
    -- 2. the second row
    --
    apex_exec.add_dml_row(
        p_context   => l_context,
        p_operation => apex_exec.c_dml_operation_insert );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'CUSTOMER_NAME',
        p_value        => 'Jane Doe' );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'ORDER_DATE',
        p_value        => date'2024-03-16' );

    --
    -- 2.1. the first line item of the second row
    --
    apex_exec.add_dml_array_row(
        p_context      => l_context,
        p_operation    => apex_exec.c_dml_operation_insert,
        p_column_name  => 'ORDER_ITEMS');

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'PRODUCT_ID',
        p_value        => 100 );

    -- :

    apex_exec.add_dml_array_row(
        p_context      => l_context,
        p_operation    => apex_exec.c_dml_operation_insert );

    -- :

    -- IV: Set "cursor" back to the first child in order to change a value

    apex_exec.set_array_current_row(
        p_context         => l_context,
        p_current_row_idx => 1 );

    apex_exec.set_value(
        p_context      => l_context,
        p_column_name  => 'AMOUNT_ORDERED',
        p_value        => 20 );

    -- V: Execute the DML statement

    apex_exec.execute_dml(
        p_context           => l_context,
        p_continue_on_error => false);

    apex_exec.close( l_context );
exception
    when others then
        apex_exec.close( l_context );
        raise;
end;
```

See Also:

- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html#GUID-E933C2AC-C2F3-4F1F-B67A-F98023DDD8D6)
- [OPEN_ARRAY Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html#GUID-D1CB527B-C92B-4994-BFF4-E224979A4702)
- [NEXT_ARRAY_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html#GUID-9918364A-5A5E-45A2-9F13-F463E44EDABD)
- [SET_ARRAY_CURRENT_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_CURRENT_ROW-Procedure.html#GUID-A4C59BF3-E31A-46E0-9156-93CC14214905)
- [GET_ARRAY_ROW_DML_OPERATION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ARRAY_ROW_DML_OPERATION-Function.html#GUID-34934601-765E-403B-8AE8-EB665DCB085F)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.6 ADD_DML_ROW Procedure

This procedure adds one row to the DML context. This is called after the `open_dml_context` and before the `execute_dml` procedures. This procedure can be called multiple times to process multiple rows. All columns of the new row are initialized with `NULL`.

Use `set_value`, `set_null`, and `set_row_version_checksum` to populate the new row with values and the checksum for lost-update detection.

Syntax

```
APEX_EXEC.ADD_DML_ROW (
    p_context               IN t_context,
    p_operation             IN t_dml_operation );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d120672e91" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d120672e93" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d120672e97" style="text-align: left;" data-valign="top" width="34%" headers="d120672e91 "><code class="codeph">p_context </code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d120672e97 d120672e93 ">Context object obtained with one of the <code class="codeph">OPEN_</code> functions</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d120672e106" style="text-align: left;" data-valign="top" width="34%" headers="d120672e91 "><code class="codeph">p_operation</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d120672e106 d120672e93 "><div class="p">
DML operation to be executed on this row. Possible values:
<ul>
<li><code class="codeph">c_dml_operation_insert</code></li>
<li><code class="codeph">c_dml_operation_update</code></li>
<li><code class="codeph">c_dml_operation_delete</code></li>
</ul>
</div></td>
</tr>
</tbody>
</table>

See Also:

- [OPEN_REMOTE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_DML_CONTEXT-Function.html#GUID-1D856CD4-906A-404A-A541-66534CF3E0A9)
- [OPEN_WEB_SOURCE_DML_CONTEXT Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_WEB_SOURCE_DML_CONTEXT-Function.html#GUID-A805DA13-F33D-4927-8D51-EB49F79A4A34)
- [OPEN_LOCAL_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_LOCAL_DML_CONTEXT-Function.html#GUID-D3CAB370-8CA4-4371-A5EE-72FDA4AFE30C)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.7 ADD_FILTER Procedures

This procedure adds a filter to the filter collection.

Syntax

Signature 1

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name );
```

Signature 2

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_value             IN            apex_t_varchar2,
    p_null_result       IN            BOOLEAN  DEFAULT FALSE,
    p_is_case_sensitive IN            BOOLEAN  DEFAULT TRUE,
    p_data_type         IN            t_data_type DEFAULT c_data_type_varchar2 );
```

Signature 3

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_from_value        IN            VARCHAR2,
    p_to_value          IN            VARCHAR2,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 4

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_values            IN            apex_t_varchar2,
    p_null_result       IN            BOOLEAN          DEFAULT FALSE );
```

Signature 5

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_value             IN            number,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 6

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_from_value        IN            NUMBER,
    p_to_value          IN            NUMBER,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 7

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_values            IN            apex_t_number,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 8

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_value             IN            DATE,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 9

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_from_value        IN            DATE,
    p_to_value          IN            DATE,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 10

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_value             IN            TIMESTAMP,
    p_null_result       in            BOOLEAN DEFAULT FALSE );
```

Signature 11

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_from_value        IN            TIMESTAMP,
    p_to_value          IN            TIMESTAMP,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 12

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_value             IN            TIMESTAMP WITH TIME ZONE,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 13

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_from_value        IN            TIMESTAMP WITH TIME ZONE,
    p_to_value          IN            TIMESTAMP WITH TIME ZONE,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 14

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_value             IN            TIMESTAMP WITH LOCAL TIME ZONE,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 15

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_from_value        IN            TIMESTAMP WITH LOCAL TIME ZONE,
    p_to_value          IN            TIMESTAMP WITH LOCAL TIME ZONE,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Signature 16

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_interval          IN            PLS_INTEGER,
    p_interval_type     IN            t_filter_interval_type,
    p_null_result       IN            BOOLEAN     DEFAULT FALSE,
    p_data_type         IN            t_data_type DEFAULT c_data_type_date );
```

Signature 17

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_search_columns    IN            t_columns,
    p_is_case_sensitive IN            BOOLEAN           DEFAULT FALSE,
    p_value             IN            VARCHAR2,
    p_tokenize          IN            BOOLEAN           DEFAULT NULL );
```

Signature 18

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_sql_expression    IN            VARCHAR2 );
```

Signature 19

Note:

This signature is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            VARCHAR2,
    p_value             IN            mdsys.sdo_geometry
    p_param             IN            VARCHAR2                  DEFAULT NULL );
```

Signature 20

```
PROCEDURE ADD_FILTER (
    p_filters             IN OUT NOCOPY t_filters,
    p_search_index_owner  IN            VARCHAR2,
    p_search_index_table  IN            VARCHAR2,
    p_text_column_name    IN            VARCHAR2,
    p_text_query_function IN            VARCHAR2,
    p_value               IN            VARCHAR2 );
```

Signature 21

Note:

Use this signature for Oracle TEXT.

```
PROCEDURE ADD_FILTER (
    p_filters             IN OUT NOCOPY t_filters,
    p_text_column_name    IN            VARCHAR2,
    p_text_query_function IN            VARCHAR2,
    p_value               IN            VARCHAR2 );
```

Signature 22

Note:

Requires Database 23ai and specific `add_column` procedure:

```
apex_exec.add_vector_distance_column(
    p_columns         => l_columns );
```

```
PROCEDURE ADD_FILTER (
    p_filters             IN OUT NOCOPY t_filters,
    p_vector_column_name  IN            VARCHAR2,
    --
    p_vector_search_type  IN            t_vector_search_type    DEFAULT c_vector_search_exact,
    p_distance_metric     IN            t_vector_distance_type  DEFAULT c_vector_distance_euclidean,
    --
    -- only for p_vector_search_type = c_vector_search_approx
    p_target_accuracy     IN            NUMBER                  DEFAULT NULL,
    --
    p_max_results         IN            NUMBER,
    p_max_dist            IN            NUMBER                  DEFAULT NULL,
    p_search_vector       IN            VECTOR );
```

Signature 23

```
PROCEDURE ADD_FILTER (
    p_filters           IN OUT NOCOPY t_filters,
    p_filter_type       IN            t_filter_type,
    p_column_name       IN            t_column_name,
    p_value             IN            BOOLEAN,
    p_null_result       IN            BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_filters` | Filters array. |
| `p_filter_type` | Type of filter - use one of the `t_filter_type` constants. |
| `p_column_name` | Column to apply this filter on. |
| `p_value` | Value for filters requiring one value (for example, equals or greater than). |
| `p_values` | Value array for `IN` or `NOT IN` filters. |
| `p_from_value` | Lower value for filters requiring a range (for example, between). |
| `p_to_value` | Upper value for filters requiring a range (for example, between). |
| `p_interval ` | Interval for date filters (for example, last X months). |
| `p_interval_type` | Interval type for date filters (months, dates). |
| `p_sql_expression` | Generic SQL expression to use as filter. |
| `p_null_result ` | Result to return when the actual column value is `NULL`. |
| `p_is_case_sensitive` | Whether this filter should work case-sensitive or not. |
| `p_search_columns` | List of columns to apply the row search filter on. |
| `p_text_column_name` | Column name for the SQL contains expression when using Oracle TEXT or Ubiquitous Database Search. |
| `p_text_query_function` | Function to be used for the SQL contains expression when using Oracle TEXT or Ubiquitous Database Search. |
| `p_search_index_owner` | For Ubiquitous Database Search, to apply a filter for the Ubiquitous Search index source owner. |
| `p_search_index_table` | For Ubiquitous Database Search, to apply a filter for the Ubiquitous Search index source name. |
| `p_vector_column_name` | Vector column to apply this filter on. |
| `p_vector_search_type` | Search Type. Use one of the `t_vector_search_type` constants. |
| `p_distance_metric` | Distance Metric. Use one of the `t_vector_distance_type` constants. |
| `p_target_accuracy` | Target accuracy. Only used if `p_vector_search_type = c_vector_search_approx`. |
| `p_max_results` | Amount of rows to fetch. |
| `p_max_dist` | Maximum Vector Distance for the search results. |
| `p_search_vector` | Vector value for the Vector Search. |
| `p_data_type` | Data type of the column to apply this filter on. |
| `p_tokenize` | Whether to tokenize a row search term to individual words. |

Example

```
DECLARE
    l_filters     apex_exec.t_filters;
    l_context     apex_exec.t_context;
BEGIN
    apex_exec.add_filter(
        p_filters     => l_filters,
        p_filter_type => apex_exec.c_filter_eq,
        p_column_name => 'ENAME',
        p_value       => 'KING' );

   apex_exec.add_filter(
       p_filters     => l_filters,
       p_filter_type => apex_exec.c_filter_gt,
       p_column_name => 'SAL',
       p_value       => 2000 );

   l_context := apex_exec.open_rest_source_query(
       p_static_id        => '{REST source static ID}',
       p_filters          => l_filters
       p_max_rows         => 1000 );

       while apex_exec.next_row( l_context ) loop
           -- process rows here ...
       END loop;

  apex_exec.close( l_context );
EXCEPTION
     WHEN others THEN
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.8 ADD_ORDER_BY Procedure

This procedure adds an order by expression to the order bys collection.

Syntax

Signature 1

```
APEX_EXEC.ADD_ORDER_BY (
    p_order_bys         IN OUT NOCOPY t_order_bys,
    p_position          IN            PLS_INTEGER,
    p_direction         IN            t_order_direction DEFAULT c_order_asc,
    p_order_nulls       IN            t_order_nulls     DEFAULT NULL )
```

Signature 2

```
APEX_EXEC.ADD_ORDER_BY (
    p_order_bys         IN OUT NOCOPY t_order_bys,
    p_column_name       IN            t_column_name,
    p_direction         IN            t_order_direction DEFAULT c_order_asc,
    p_order_nulls       IN            t_order_nulls     DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_order_bys ` | Order by collection. |
| `p_position` | References a column of the provided data source by position. |
| `p_column_name` | References a column name or alias of the provided data source. |
| `p_direction` | Defines if the column is sorted ascending or descending. Valid values are `c_order_asc` and `c_order_desc`. |
| `p_order_nulls` | Defines if NULL data sorts to the bottom or top. Valid values are `NULL`, `c_order_nulls_first` and `c_order_nulls_last`. Use `NULL` for automatic handling based on the sort direction. |

Example

```
DECLARE
    l_order_bys   apex_exec.t_order_bys;
    l_context     apex_exec.t_context;
BEGIN
    apex_exec.add_order_by(
         p_order_bys     => l_order_bys,
         p_column_name   => 'ENAME',
         p_direction     => apex_exec.c_order_asc );

    l_context := apex_exec.open_web_source_query(
        p_module_static_id => '{web source module static ID}',
        p_order_bys        => l_order_bys,
        p_max_rows         => 1000 );

        WHILE apex_exec.next_row( l_context ) LOOP
            -- process rows here ...
        END LOOP;

    apex_exec.close( l_context );
    EXCEPTION
        WHEN others THEN
            apex_exec.close( l_context );
    RAISE;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.9 ADD_PARAMETER Procedure

This procedure adds a SQL parameter to the parameter collection. To use SQL parameters, prepare the array first, then use it in the execution call.

Syntax

Signature 1

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            VARCHAR2 )
```

Signature 2

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            NUMBER )
```

Signature 3

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            DATE )
```

Signature 4

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            TIMESTAMP )
```

Signature 5

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            TIMESTAMP WITH TIME ZONE )
```

Signature 6

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       in            t_column_name,
    p_value      IN            TIMESTAMP WITH LOCAL TIME ZONE )
```

Signature 7

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       in            t_column_name,
    p_value      in            INTERVAL YEAR TO MONTH )
```

Signature 8

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       in            t_column_name,
    p_value      in            INTERVAL DAY TO SECOND )
```

Signature 9

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            BLOB )
```

Signature 10

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            bfile )
```

Signature 11

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            CLOB )
```

Signature 12

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            sys.anydata )
```

Signature 13

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_data_type  IN            t_data_type,
    p_value      IN            t_value )
```

Signature 14

Note:

This signature is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            mdsys.sdo_geometry )
```

Signature 15

```
APEX_EXEC.ADD_PARAMETER (
    p_parameters IN OUT NOCOPY t_parameters,
    p_name       IN            t_column_name,
    p_value      IN            BOOLEAN )
```

Parameters

| Parameter      | Description          |
|:---------------|:---------------------|
| `p_parameters` | SQL parameter array. |
| `p_name`       | Parameter name.      |
| `p_value`      | Parameter value.     |

Example

```
DECLARE
    l_parameters     apex_exec.t_parameters;
BEGIN
    apex_exec.add_parameter( l_parameters, 'ENAME',    'SCOTT' );
    apex_exec.add_parameter( l_parameters, 'SAL',      2000 );
    apex_exec.add_parameter( l_parameters, 'HIREDATE', sysdate );

    apex_exec.execute_remote_plsql(
        p_server_static_id => '{static ID of the REST Enabled SQL Service}',
        p_auto_bind_items  => false,
        p_plsql_code       => q'#begin insert into emp values (:ENAME, :SAL, :HIREDATE ); end;#',
        p_sql_parameters   => l_parameters );
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.10 CLEAR_DML_ROWS Procedure

This procedure clears all DML rows which have been added with `add_dml_rows`.

Syntax

```
APEX_EXEC.CLEAR_DML_ROWS (
    p_context               IN t_context )
```

Parameters

| Parameter    | Description                                              |
|:-------------|:---------------------------------------------------------|
| `p_context ` | Context object obtained with one of the OPEN\_ functions |

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.11 CLOSE Procedure

This procedure closes the query context and releases resources.

Note:

Ensure to always call this procedure after work has finished or an exception occurs.

Syntax

```
APEX_EXEC.CLOSE (
    p_context IN t_context )
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.12 CLOSE_ARRAY Procedure

This procedure closes the current array and returns the cursor back to the parent element. Subsequent calls to `SET_VALUE` target the attributes of the parent element or root row.

Can only be called after calling `add_dml_array_row` or `open_array`.

An error is raised if called when the cursor is on the root level of the row.

Currently only supported for contexts on REST data sources.

Syntax

```
APEX_EXEC.CLOSE_ARRAY (
    p_context               IN t_context )
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

See Also:

- [OPEN_ARRAY Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html#GUID-D1CB527B-C92B-4994-BFF4-E224979A4702)
- [NEXT_ARRAY_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html#GUID-9918364A-5A5E-45A2-9F13-F463E44EDABD)
- [SET_ARRAY_CURRENT_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_CURRENT_ROW-Procedure.html#GUID-A4C59BF3-E31A-46E0-9156-93CC14214905)
- [ADD_DML_ARRAY_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html#GUID-37F4CB18-7657-4C79-B114-6D7C5A6CC803)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.13 COLUMN_EXISTS Function

This function checks whether a column already exists in the columns array.

Syntax

```
APEX_EXEC.COLUMN_EXISTS (
    p_columns            IN t_columns,
    p_column_name        IN VARCHAR2,
    p_parent_column_path IN VARCHAR2 DEFAULT NULL )
    RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_columns` | Columns array. |
| `p_column_name` | Column name. |
| `p_parent_column_path` | Path to the parent column to look the index up within. |

Returns

`TRUE` if the column exists, `FALSE` otherwise.

Example

The following example builds a column array and verifies that the SAL column exists in the array.

```
DECLARE
    l_columns     apex_exec.t_columns;
BEGIN
    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'ENAME' );
    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'SAL' );
    IF apex_exec.column_exists(
           p_columns     => l_columns,
           p_column_name => 'SAL' )
    THEN
        -- the column exists ...
    END IF;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.14 COPY_DATA Procedure

This procedure fetches all rows from the source context and writes to the target context. Useful for copying data between different data sources (such as local to remote, remote to web source).

Array columns are not supported by the COPY_DATA procedure at this time. In the future, these will be handled as CLOBs in JSON format.

Syntax

```
APEX_EXEC.COPY_DATA (
    p_from_context          IN OUT NOCOPY t_context,
    p_to_context            IN OUT NOCOPY t_context,
    p_operation_column_name IN            VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d123591e73" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d123591e75" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d123591e79" style="text-align: left;" data-valign="top" width="34%" headers="d123591e73 "><code class="codeph">p_from_context</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d123591e79 d123591e75 ">Query context to fetch rows from.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d123591e85" style="text-align: left;" data-valign="top" width="34%" headers="d123591e73 "><code class="codeph"> p_to_context</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d123591e85 d123591e75 ">DML context to write rows to.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d123591e91" style="text-align: left;" data-valign="top" width="34%" headers="d123591e73 "><code class="codeph">p_operation_column_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d123591e91 d123591e75 "><div class="p">
Column in the query context to indicate the DML operation to execute on the target context. Possible values are:
<ul>
<li><code class="codeph">"I"</code>: insert the row on the target (DML) context</li>
<li><code class="codeph">"U"</code>: update the row on the target (DML) context</li>
<li><code class="codeph">"D"</code>: delete the row on the target (DML) context</li>
</ul>
</div></td>
</tr>
</tbody>
</table>

Example

```
DECLARE
    l_columns        apex_exec.t_columns;
    l_dml_context    apex_exec.t_context;
    l_query_context  apex_exec.t_context;
BEGIN
    -- I. Define DML columns
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'EMPNO',
        p_data_type      => apex_exec.c_data_type_number,
        p_is_primary_key => true );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'ENAME',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'JOB',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'HIREDATE',
        p_data_type      => apex_exec.c_data_type_date );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'MGR',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'SAL',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'COMM',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'DEPTNO',
        p_data_type      => apex_exec.c_data_type_number );

    -- II. Open the Query Context object
    l_query_context := apex_exec.open_remote_sql_query(
        p_server_static_id  => 'DevOps_Remote_SQL',
        p_sql_query         => 'select * from emp',
        p_columns           => l_columns );

    -- III. Open the DML context object
    l_dml_context := apex_exec.open_remote_dml_context(
        p_server_static_id      => '{remote server static id}',
        p_columns               => l_columns,
        p_query_type            => apex_exec.c_query_type_sql_query,
        p_sql_query             => 'select * from emp' );

    -- IV. Copy rows
    apex_exec.copy_data(
        p_from_context => l_query_context,
        p_to_context   => l_dml_context );

    -- V. Close contexts and free resources
    apex_exec.close( l_dml_context );
    apex_exec.close( l_query_context );
EXCEPTION
    WHEN others THEN
         apex_exec.close( l_dml_context );
         apex_exec.close( l_query_context );
         RAISE;

END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.15 DESCRIBE_QUERY Function Signature 1

This procedure describes the query context based on the current region source.

Syntax

```
APEX_EXEC.DESCRIBE_QUERY (
    p_columns                IN t_columns          DEFAULT c_empty_columns )
    RETURN t_columns;
```

Parameters

| Parameter   | Description                                  |
|:------------|:---------------------------------------------|
| `p_columns` | Columns to be selected from the data source. |

Returns

The `t_columns` object describing the columns and data types.

Example

The following example describes a query and prints out result column names.

```
DECLARE
    l_columns apex_exec.t_columns;
BEGIN
    l_columns := apex_exec.describe_query;

    FOR i in 1 .. l_columns.count LOOP
        htp.p( 'Column #' || i || ': ' || apex_escape.html( l_columns( i ).name ));
    END LOOP;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.16 DESCRIBE_QUERY Function Signature 2

This procedure describes the query context based on the current region source.

Syntax

```
APEX_EXEC.DESCRIBE_QUERY (
    p_location               IN t_location,
    --
    p_table_owner            IN VARCHAR2           DEFAULT NULL,
    p_table_name             IN VARCHAR2           DEFAULT NULL,
    p_match_clause           IN VARCHAR2           DEFAULT NULL,
    p_columns_clause         IN VARCHAR2           DEFAULT NULL,
    p_test_for_rowid         IN BOOLEAN            DEFAULT FALSE,
    --
    p_sql_query              IN VARCHAR2           DEFAULT NULL,
    p_function_body          IN VARCHAR2           DEFAULT NULL,
    p_function_body_language IN t_language         DEFAULT c_lang_plsql,
    --
    p_optimizer_hint         IN VARCHAR2           DEFAULT NULL,
    --
    p_server_static_id       IN VARCHAR2           DEFAULT NULL,
    --
    p_module_static_id       IN VARCHAR2           DEFAULT NULL,
    p_post_process_type      IN t_post_processing  DEFAULT NULL,
    --
    p_columns                IN t_columns          DEFAULT c_empty_columns,
    --
    p_duality_view_static_id IN VARCHAR2           DEFAULT NULL,
    p_json_source_static_id  IN VARCHAR2           DEFAULT NULL )
    RETURN t_columns;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_location` | Location to open the query context for. Use constants `c_location_*`. |
| `p_table_owner` | Table owner when query type TABLE is used. |
| `p_table_name` | Table name when query type TABLE is used. |
| `p_match_clause` | Match clause to append when query type GRAPH is used. |
| `p_columns_clause` | Columns clause to append when query type GRAPH is used. |
| `p_test_for_rowid` | Whether to attempt including the ROWID column to the query being described. |
| `p_sql_query` | SQL Query to execute when query type SQL Query is used. |
| `p_function_body` | Function body returning SQL query. |
| `p_function_body_language` | Programming Language used for `p_function_body`. Use constants `c_lang_*` |
| `p_optimizer_hint` | Optimizer hint to be applied to the most outer SQL query generated by Oracle APEX. |
| `p_server_static_id` | Static ID of the Remote Server when REST-Enabled SQL is used. |
| `p_module_static_id` | Static ID of the REST data source. |
| `p_post_process_type` | Type of post processing to be applied to the REST data source result data. |
| `p_columns` | Columns to be selected from the data source. |
| `p_duality_view_static_id` | Static ID of the Duality View source. |
| `p_json_source_static_id` | Static ID of the JSON source. |

Returns

The `t_columns` object describing the columns and data types.

Example

The following example describes a query and prints out result column names.

```
DECLARE
    l_columns apex_exec.t_columns;
BEGIN
    l_columns := apex_exec.describe_query(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => 'select * from emp' );

    FOR i in 1 .. l_columns.count LOOP
        htp.p( 'Col #' || i || ': ' || apex_escape.html( l_columns( i ).name ));
    END LOOP;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.17 ENQUOTE_LITERAL Function

This function enquotes a string literal and escape contained quotes. This function works for all database types supported by Oracle APEX over REST-enabled SQL.

Syntax

```
APEX_EXEC.ENQUOTE_LITERAL (
    p_str               IN VARCHAR2,
    p_for_database      IN t_database_type DEFAULT NULL )
RETURN VARCHAR2;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d124693e75" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d124693e77" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d124693e81" style="text-align: left;" data-valign="top" width="42%" headers="d124693e75 "><code class="codeph">p_str</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d124693e81 d124693e77 ">String literal to enquote.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d124693e87" style="text-align: left;" data-valign="top" width="42%" headers="d124693e75 "><code class="codeph">p_for_database</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d124693e87 d124693e77 "><p>Target database to enquote for.</p>
<p>If omitted, the function enquotes for the target database of the currently executed region.</p></td>
</tr>
</tbody>
</table>

Returns

This function returns the enquoted string literal.

Example

```
DECLARE
    l_enquoted_literal varchar2(32767);
BEGIN
    l_enquoted_literal := apex_exec.enquote_literal(
                            p_str          => q'#O'Neil \n#',
                            p_for_database => c_database_oracle );

    -- returns: 'O''Neil \n'

    l_enquoted_literal := apex_exec.enquote_literal(
                            p_str          => q'#O'Neil \n#',
                            p_for_database => c_database_mysql );

    -- returns: 'O''Neil \\n'
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.18 ENQUOTE_NAME Function

This function enquotes a database object name and (if applicable) escape contained quotes. This function works for all database types supported by Oracle APEX over REST-enabled SQL.

Syntax

```
APEX_EXEC.ENQUOTE_NAME (
    p_str               IN VARCHAR2,
    p_for_database      IN t_database_type DEFAULT NULL )
RETURN VARCHAR2;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d124877e75" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d124877e77" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d124877e81" style="text-align: left;" data-valign="top" width="42%" headers="d124877e75 "><code class="codeph">p_str</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d124877e81 d124877e77 ">Object name to enquote.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d124877e87" style="text-align: left;" data-valign="top" width="42%" headers="d124877e75 "><code class="codeph">p_for_database</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d124877e87 d124877e77 "><p>Target database to enquote for.</p>
<p>If omitted, the function enquotes for the target database of the currently executed region.</p></td>
</tr>
</tbody>
</table>

Returns

This function returns the enquoted object name.

Example

```
DECLARE
    l_enquoted_literal varchar2(32767);
BEGIN
    l_enquoted_literal := apex_exec.enquote_name(
                            p_str          => q'emp',
                            p_for_database => c_database_oracle );

    -- returns: "emp"

    l_enquoted_literal := apex_exec.enquote_name(
                            p_str          => q'emp#',
                            p_for_database => c_database_mysql );

    -- returns: `emp`
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.19 EXECUTE_DML Procedure

This procedure executes the DML context. This procedure is called after:

- the context has been opened (`open_dml_context`)
- one or more DML rows have been added with `add_dml_row`
- column values have been set with `set_values`, `set_null` or `set_value`

Syntax

```
APEX_EXEC.EXECUTE_DML (
    p_context               IN t_context,
    p_continue_on_error     IN BOOLEAN DEFAULT FALSE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the OPEN\_ functions. |
| `p_continue_on_error` | Whether to continue executing DML for the remaining rows after an error occurred. Default `FALSE`. |

Example

An example of this procedure can be found in the examples for the following APIs:

- [SET_ROW_VERSION_CHECKSUM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ROW_VERSION_CHECKSUM-Procedure.html#GUID-DE0D6BB4-1D37-4026-9A27-49EB072523E4)
- [OPEN_WEB_SOURCE_DML_CONTEXT Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_WEB_SOURCE_DML_CONTEXT-Function.html#GUID-A805DA13-F33D-4927-8D51-EB49F79A4A34)
- [OPEN_LOCAL_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_LOCAL_DML_CONTEXT-Function.html#GUID-D3CAB370-8CA4-4371-A5EE-72FDA4AFE30C)
- [OPEN_REMOTE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REMOTE_DML_CONTEXT-Function.html#GUID-1D856CD4-906A-404A-A541-66534CF3E0A9)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.20 EXECUTE_PLSQL Procedure Signature 1

This procedure executes PL/SQL code based on the current process or plug-in location settings.

Syntax

```
APEX_EXEC.EXECUTE_PLSQL (
    p_plsql_code      IN     VARCHAR2,
    p_auto_bind_items IN     BOOLEAN      DEFAULT TRUE,
    p_sql_parameters  IN OUT t_parameters )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_plsql_code` | PL/SQL code to execute. Based on the settings of the current process or process-type plug-in, the code is executed locally or remote. |
| `p_auto_bind_items ` | Default `TRUE`. Whether to automatically bind page item values for IN and OUT direction. If the PL/SQL code references bind variables which are not page items, this must be set to `FALSE`. |
| `p_sql_parameters` | Additional bind variables, if needed. Note that `EXECUTE_PLSQL` binds all `p_sql_parameters` as VARCHAR2. Bind variables such as `NUMBER` and `DATE` are implicitly converted to VARCHAR2. |

Example

Executes a PL/SQL block with arbitrary bind variables, so any bind can be used to pass values and to get values back.

```
DECLARE
    l_sql_parameters apex_exec.t_parameters;
    l_out_value      varchar2(32767);
BEGIN
    apex_exec.add_parameter( l_sql_parameters, 'MY_BIND_IN_VAR',  '{some value}' );
    apex_exec.add_parameter( l_sql_parameters, 'MY_BIND_OUT_VAR', ''             );

    apex_exec.execute_plsql(
        p_plsql_code      => q'#begin :MY_BIND_OUT_VAR := some_plsql( p_parameter => :MY_BIND_IN_VAR ); end;#',
        p_auto_bind_items => false,
        p_sql_parameters  => l_sql_parameters );

    l_out_value := apex_exec.get_parameter_varchar2(
        p_parameters => l_sql_parameters,
        p_name       => 'MY_BIND_OUT_VAR');

    -- further processing of l_out_value
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.21 EXECUTE_PLSQL Procedure Signature 2

This procedure executes PL/SQL code based on the current process or plug-in location settings.

Syntax

```
APEX_EXEC.EXECUTE_PLSQL (
    p_plsql_code      IN     VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_plsql_code` | PL/SQL code to execute. Based on the settings of the current process or process-type plug-in, the code is executed locally or remote. |

Example

Executes a PL/SQL block.

```
BEGIN
    apex_exec.execute_plsql(
        p_plsql_code => q'#begin :P10_NEW_SAL := salary_pkg.raise_sal( p_empno => :P10_EMPNO ); end;#' );
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.22 EXECUTE_REMOTE_PLSQL Procedure Signature 1

This procedure executes PL/SQL code on a REST-enabled SQL instance.

Syntax

```
APEX_EXEC.EXECUTE_REMOTE_PLSQL (
    p_server_static_id     IN     VARCHAR2,
    p_plsql_code           IN     VARCHAR2,
    p_auto_bind_items      IN     BOOLEAN      DEFAULT TRUE,
    p_sql_parameters       IN OUT t_parameters )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_server_static_id` | Static ID of the ORDS REST-enabled SQL instance. |
| `p_plsql_code` | PL/SQL code to execute. |
| `p_auto_bind_items` | Default `TRUE`. Whether to automatically bind page item values for both IN and OUT direction. If the PL/SQL code references bind variables which are not page items, this must be set to `FALSE`. |
| `p_sql_parameters` | (Optional) Additional bind variables. |

Example

Executes a PL/SQL block on a remote database. Works with arbitrary bind variables, so any bind can be used to pass values to the REST-enabled SQL service and to get values back.

```
DECLARE
        l_sql_parameters apex_exec.t_parameters;
        l_out_value      varchar2(32767);
    BEGIN
        apex_exec.add_parameter( l_sql_parameters, 'MY_BIND_IN_VAR',  '{some value}' );
        apex_exec.add_parameter( l_sql_parameters, 'MY_BIND_OUT_VAR', ''             );

        apex_exec.execute_remote_plsql(
            p_server_static_id     => '{Static ID of the REST Enabled SQL Service}',
            p_plsql_code           => q'#begin :MY_BIND_OUT_VAR := some_remote_plsql( p_parameter => :MY_BIND_IN_VAR ); end;#',
            p_auto_bind_items => false,
            p_sql_parameters  => l_sql_parameters );

        l_out_value := apex_exec.get_parameter_varchar2(
            p_parameters  => l_sql_parameters,
            p_name        => 'MY_BIND_OUT_VAR');

        -- further processing of l_out_value
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.23 EXECUTE_REMOTE_PLSQL Procedure Signature 2

This procedure executes PL/SQL code on a REST-enabled SQL instance.

Syntax

```
APEX_EXEC.EXECUTE_REMOTE_PLSQL (
    p_server_static_id     IN     VARCHAR2,
    p_plsql_code           IN     VARCHAR2 )
```

Parameters

| Parameter            | Description                                      |
|:---------------------|:-------------------------------------------------|
| `p_server_static_id` | Static ID of the ORDS REST-enabled SQL instance. |
| `p_plsql_code`       | PL/SQL code to execute.                          |

Example

Executes a PL/SQL block on a remote database.

```
BEGIN
    apex_exec.execute_remote_plsql(
        p_server_static_id => '{Static ID of the REST Enabled SQL Service}',
        p_plsql_code  => q'#begin :P10_NEW_SAL := salary_pkg.raise_sal( p_empno => :P10_EMPNO ); end;#' );
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.24 EXECUTE_REST_SOURCE Procedure Signature 1

This procedure executes a REST Source operation based on module static ID, operation, and URL pattern (if required). Use the `t_parameters` array to pass in values for declared REST Data Source parameters. REST Source invocation is based on metadata defined in Shared Components.

Syntax

```
APEX_EXEC.EXECUTE_REST_SOURCE (
    p_static_id     IN      VARCHAR2,
    p_operation     IN      VARCHAR2,
    p_url_pattern   IN      VARCHAR2 DEFAULT NULL,
    p_parameters    IN OUT  t_parameters );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d126089e74" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d126089e76" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d126089e80" style="text-align: left;" data-valign="top" width="34%" headers="d126089e74 "><code class="codeph">p_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d126089e80 d126089e76 ">Static ID of the REST Data Source.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d126089e86" style="text-align: left;" data-valign="top" width="34%" headers="d126089e74 "><code class="codeph">p_operation</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d126089e86 d126089e76 ">Name of the operation (for example, POST, GET, DELETE).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d126089e92" style="text-align: left;" data-valign="top" width="34%" headers="d126089e74 "><code class="codeph">p_url_pattern</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d126089e92 d126089e76 ">If multiple operations with the same name exist, specify the URL pattern, as defined in Shared Components, to identify the REST Source operation.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d126089e98" style="text-align: left;" data-valign="top" width="34%" headers="d126089e74 "><code class="codeph">p_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d126089e98 d126089e76 "><p>Parameter values to pass to the external REST Data Source.</p>
<p>Note that HTTP Headers, URL Patterns and other parameters being passed to a REST Data Source are typically strings. Oracle recommends that you explicitly pass all values to <code class="codeph">VARCHAR2</code> before adding to the <code class="codeph">t_parameters</code> array.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d126089e116" style="text-align: left;" data-valign="top" width="34%" headers="d126089e74 "><code class="codeph">t_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d126089e116 d126089e76 ">Array with <code class="codeph">OUT</code> parameter values, received from the REST Data Source.</td>
</tr>
</tbody>
</table>

Returns

| Return | Description |
|:---|:---|
| `p_parameters` | Array with `OUT` parameter values, received from the REST Data Source. |

Example

This example assumes a REST service being created on the EMP table using ORDS and the "Auto-REST" feature (`ORDS.ENABLE_OBJECT`). Then a REST Data Source for this REST service is being created in Shared Components as "ORDS EMP."

The POST operation has the following "Request Body Template" defined:

```
{"empno": "#EMPNO#", "ename": "#ENAME#", "job": "#JOB#", "sal": #SAL#}
```

Parameters are defined as follows:

| Name           | Direction | Type         | Default Value    |
|:---------------|:----------|:-------------|:-----------------|
| `EMPNO`        | IN        | Request Body | n/a              |
| `ENAME`        | IN        | Request Body | n/a              |
| `SAL`          | IN        | Request Body | n/a              |
| `JOB`          | IN        | Request Body | n/a              |
| `RESPONSE`     | OUT       | Request Body | n/a              |
| `Content-Type` | IN        | HTTP Header  | application/json |

PL/SQL code to invoke that REST Source operation looks as follows:

```
DECLARE
    l_params apex_exec.t_parameters;
BEGIN
    apex_exec.add_parameter( l_params, 'ENAME', :P2_ENAME );
    apex_exec.add_parameter( l_params, 'EMPNO', :P2_EMPNO );
    apex_exec.add_parameter( l_params, 'SAL',   :P2_SAL   );
    apex_exec.add_parameter( l_params, 'JOB',   :P2_JOB   );

    apex_exec.execute_rest_source(
        p_static_id        => 'ORDS_EMP',
        p_operation        => 'POST',
        p_parameters       => l_params );

    :P2_RESPONSE := apex_exec.get_parameter_clob(l_params,'RESPONSE');
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.25 EXECUTE_REST_SOURCE Procedure Signature 2

This procedure executes a REST Source operation. The REST Source module and operation are identified by its static IDs. Use the `t_parameters` array to pass in values for declared REST Data Source parameters. REST Source invocation is based on metadata defined in Shared Components.

Syntax

```
APEX_EXEC.EXECUTE_REST_SOURCE (
    p_static_id             IN            VARCHAR2,
    p_operation_static_id   IN            VARCHAR2,
    p_parameters            IN OUT NOCOPY t_parameters );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d127020e74" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d127020e76" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d127020e80" style="text-align: left;" data-valign="top" width="34%" headers="d127020e74 "><code class="codeph">p_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d127020e80 d127020e76 ">Static ID of the REST Data Source.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d127020e86" style="text-align: left;" data-valign="top" width="34%" headers="d127020e74 "><code class="codeph">p_operation_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d127020e86 d127020e76 ">Static ID of the operation within the REST Data Source.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d127020e92" style="text-align: left;" data-valign="top" width="34%" headers="d127020e74 "><code class="codeph">p_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d127020e92 d127020e76 "><p>Parameter values to pass to the external REST Data Source.</p>
<p>Note that HTTP Headers, URL Patterns and other parameters being passed to a REST Data Source are typically strings. Oracle recommends that you explicitly pass all values to <code class="codeph">VARCHAR2</code> before adding to the <code class="codeph">t_parameters</code> array.</p></td>
</tr>
</tbody>
</table>

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.26 EXECUTE_WEB_SOURCE Procedure (Deprecated)

Note:

This procedure is deprecated and will be removed in a future release. Use `execute_rest_source` instead.

This procedure executes a web source operation based on module name, operation and URL pattern (if required). Use the `t_parameters` array to pass in values for declared web source parameters. Web Source invocation is done based on metadata defined in Shared Components.

Syntax

```
APEX_EXEC.EXECUTE_WEB_SOURCE (
    p_module_static_id IN VARCHAR2,
    p_operation        IN VARCHAR2,
    p_url_pattern      IN VARCHAR2         DEFAULT NULL,
    p_parameters       IN OUT t_parameters )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d127239e79" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d127239e81" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d127239e85" style="text-align: left;" data-valign="top" width="34%" headers="d127239e79 "><code class="codeph">p_module_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d127239e85 d127239e81 ">Static ID of the web source module.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d127239e91" style="text-align: left;" data-valign="top" width="34%" headers="d127239e79 "><code class="codeph">p_operation</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d127239e91 d127239e81 ">Name of the operation (for example, POST, GET, DELETE).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d127239e97" style="text-align: left;" data-valign="top" width="34%" headers="d127239e79 "><code class="codeph">p_url_pattern</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d127239e97 d127239e81 ">If multiple operations with the same name exist, specify the URL pattern, as defined in Shared Components, to identify the web source operation.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d127239e103" style="text-align: left;" data-valign="top" width="34%" headers="d127239e79 "><code class="codeph">p_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d127239e103 d127239e81 "><p>Parameter values to pass to the external web source.</p>
<p>Note that HTTP Headers, URL Patterns and other parameters being passed to a Web Source Module are typically strings. Oracle recommends to explicitly pass all values to <code class="codeph">VARCHAR2</code> before adding to the <code class="codeph">T_PARAMETERS</code> array.</p></td>
</tr>
</tbody>
</table>

Returns

| Return | Description |
|:---|:---|
| `p_parameters` | Array with `OUT` parameter values, received from the web source module. |

Example

This example assumes a REST service being created on the EMP table using ORDS and the "Auto-REST" feature (`ORDS.ENABLE_OBJECT`). Then a Web Source Module for this REST service is being created in Shared Components as "ORDS EMP".

The POST operation has the following "Request Body Template" defined:

```
{"empno": "#EMPNO#", "ename": "#ENAME#", "job": "#JOB#", "sal": #SAL#}
```

Parameters are defined as follows:

| Name           | Direction | Type         | Default Value    |
|:---------------|:----------|:-------------|:-----------------|
| `EMPNO`        | IN        | Request Body | n/a              |
| `ENAME`        | IN        | Request Body | n/a              |
| `SAL`          | IN        | Request Body | n/a              |
| `JOB`          | IN        | Request Body | n/a              |
| `RESPONSE`     | OUT       | Request Body | n/a              |
| `Content-Type` | IN        | HTTP Header  | application/json |

PL/SQL code to invoke that web source operation looks as follows:

```
DECLARE
    l_params apex_exec.t_parameters;
BEGIN
    apex_exec.add_parameter( l_params, 'ENAME', :P2_ENAME );
    apex_exec.add_parameter( l_params, 'EMPNO', :P2_EMPNO );
    apex_exec.add_parameter( l_params, 'SAL',   :P2_SAL   );
    apex_exec.add_parameter( l_params, 'JOB',   :P2_JOB   );

    apex_exec.execute_web_source(
        p_module_static_id => 'ORDS_EMP',
        p_operation        => 'POST',
        p_parameters       => l_params );

    :P2_RESPONSE := apex_exec.get_parameter_clob(l_params,'RESPONSE');
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.27 GET Function

This function retrieves column values for different data types.

Syntax

Signature 1

```
APEX_EXEC.GET_VARCHAR2 (
    p_context     IN t_context,
    p_column_idx  IN PLS_INTEGER ) RETURN VARCHAR2;

APEX_EXEC.GET_VARCHAR2 (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN VARCHAR2;
```

Signature 2

```
APEX_EXEC.GET_NUMBER (
    p_context     IN t_context,
    p_column_idx  IN PLS_INTEGER ) RETURN NUMBER;

APEX_EXEC.GET_NUMBER (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN NUMBER;
```

Signature 3

```
APEX_EXEC.GET_DATE (
    p_context     IN t_context,
    p_column_idx  IN PLS_INTEGER ) RETURN DATE;

APEX_EXEC.GET_DATE (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN DATE;
```

 Signature 4

```
APEX_EXEC.GET_TIMESTAMP (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN TIMESTAMP;

APEX_EXEC.GET_TIMESTAMP (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN TIMESTAMP;
```

Signature 5

```
APEX_EXEC.GET_TIMESTAMP_TZ (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN TIMESTAMP WITH TIME ZONE;

APEX_EXEC.GET_TIMESTAMP_TZ (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN TIMESTAMP WITH TIME ZONE;
```

Signature 6

```
APEX_EXEC.GET_TIMESTAMP_LTZ (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN TIMESTAMP WITH LOCAL TIME ZONE;

APEX_EXEC.GET_TIMESTAMP_LTZ (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN TIMESTAMP WITH LOCAL TIME ZONE;
```

Signature 7

```
APEX_EXEC.GET_CLOB (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN CLOB;

APEX_EXEC.GET_CLOB (
    p_context    IN t_context,
    p_column_name IN VARCHAR2 ) RETURN CLOB;
```

Signature 8

```
APEX_EXEC.GET_BLOB (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN BLOB;

APEX_EXEC.GET_BLOB (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN BLOB;
```

Signature 9

```
APEX_EXEC.GET_INTERVALD2S (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN DSINTERVAL_UNCONSTRAINED;

APEX_EXEC.GET_INTERVALD2S (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN DSINTERVAL_UNCONSTRAINED;
```

Signature 10

```
APEX_EXEC.GET_INTERVALY2M (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN YMINTERVAL_UNCONSTRAINED;

APEX_EXEC.GET_INTERVALY2M (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN YMINTERVAL_UNCONSTRAINED;
```

 Signature 11

```
APEX_EXEC.GET_ANYDATA (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN SYS.ANYDATA;

APEX_EXEC.GET_ANYDATA (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN SYS.ANYDATA;
```

Signature 12

```
APEX_EXEC.GET_SDO_GEOMETRY (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN MDSYS.SDO_GEOMETRY;
```

Note:

This signature is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

Signature 13

```
APEX_EXEC.GET_BOOLEAN (
    p_context    IN t_context,
    p_column_idx IN PLS_INTEGER ) RETURN BOOLEAN;

APEX_EXEC.GET_BOOLEAN (
    p_context     IN t_context,
    p_column_name IN VARCHAR2 ) RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_column_idx` | Column index. |
| `p_column_name` | Column name. |

Returns

The column value as specific data type.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.28 GET_ARRAY_ROW_DML_OPERATION Function

This function returns the DML operation type for the current array element. Can only be called when being inside an array column; otherwise an error message is called.

To be used within a REST Data Source Plug-In when plug-in actions are to be executed based on the DML type for an array element.

Syntax

```
APEX_EXEC.GET_ARRAY_ROW_DML_OPERATION (
    p_context               IN t_context )
    RETURN t_dml_operation;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

The DML type for the current array row as an instance of `t_dml_operation`.

See Also:

- [ADD_DML_ARRAY_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html#GUID-37F4CB18-7657-4C79-B114-6D7C5A6CC803)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.29 GET_ARRAY_ROW_VERSION_CHECKSUM Function

This function returns the row version checksum for the current nested array row. Can only be called when inside an array column; otherwise an error message is called.

To be used within a REST Data Source Plug-In when a checksum for an array element is needed to perform plug-in actions.

Syntax

```
APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM (
    p_context               IN t_context )
    RETURN VARCHAR2;
```

Parameters

| Parameter    | Description                                               |
|:-------------|:----------------------------------------------------------|
| `p_context ` | Context object obtained with one of the `OPEN_` functions |

Returns

Row version checksum for the nested current array row.

See Also:

- [SET_ARRAY_ROW_VERSION_CHECKSUM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM-Procedure.html#GUID-F36780BF-8857-4BAA-B9D7-FAED159B741A)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.30 GET_COLUMN Function

This function returns detailed information about a result set column.

Syntax

```
APEX_EXEC.GET_COLUMN (
    p_context       IN t_context,
    p_column_idx    IN PLS_INTEGER )
RETURN t_column;
```

Parameters

| Parameter       | Description                                               |
|:----------------|:----------------------------------------------------------|
| `p_context`     | Context object obtained with one of the `OPEN_`functions. |
| `p_column_idx ` | Index of the column to retrieve information for.          |

Returns

`t_column` object with column metadata.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.31 GET_COLUMNS Function

This function returns the list of columns containing detailed information about each column.

Syntax

```
APEX_EXEC.GET_COLUMNS (
    p_context    IN t_context )
    RETURN t_columns;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

`t_columns` object with column meta data.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.32 GET_COLUMN_COUNT Function

This function returns the result column count for the current execution context.

Syntax

```
APEX_EXEC.GET_COLUMN_COUNT (
    p_context   IN t_context )
RETURN PLS_INTEGER;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

Returns the result columns count.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.33 GET_COLUMN_POSITION Function

This function returns the array index for a given column alias. In order to do this lookup operation only once, Oracle recommends you to use `GET_COLUMN_POSITION` function before entering the `NEXT_ROW` loop. This saves on computing resources.

Syntax

```
APEX_EXEC.GET_COLUMN_POSITION (
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_attribute_label       IN VARCHAR2  DEFAULT NULL,
    p_is_required           IN BOOLEAN   DEFAULT FALSE,
    p_data_type             IN VARCHAR2  DEFAULT c_data_type_varchar2,
    p_parent_column_path    IN VARCHAR2  DEFAULT NULL )
    RETURN PLS_INTEGER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_attribute_label` | Attribute label to format error messages. |
| `p_column_name` | Column name. |
| `p_is_required ` | Indicates whether this is a required column. |
| `p_data_type` | Indicates the requested data type. |
| `p_parent_column_path` | Path to the parent column to look the index up within. |

Returns

The position of the column in the query result set. Throws an exception when `p_is_required` or `p_data_type` prerequisites are not met.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.34 GET_DATA_TYPE Function

This function converts the `t_data_type` constant into the `VARCHAR2` representation, or the data type `VARCHAR2` representation to the `t_data_type` constant.

Syntax

Signature 1

```
APEX_EXEC.GET_DATA_TYPE (
    p_datatype_num      IN apex_exec.t_data_type )
RETURN VARCHAR2;
```

Signature 2

```
APEX_EXEC.GET_DATA_TYPE (
    p_datatype      IN VARCHAR2 )
RETURN apex_exec.t_data_type;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_datatype_num` | Data type constant of `apex_exec.t_data_type`. |
| `p_datatype` | `VARCHAR2` representation of the data type, as used by SQL. |

Returns

Signature 1

`VARCHAR2` representation of the data type, as used by SQL

Signature 2

Data type constant of `apex_exec.t_data_type`.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.35 GET_DML_STATUS_CODE Function

This function returns the SQL status code of the last context execution, for the current row. For local or remote SQL contexts, the ORA error code will be returned in case of an error, `NULL` in case of success.

For REST Data Source contexts, the function returns the HTTP status code.

Syntax

```
APEX_EXEC.GET_DML_STATUS_CODE (
    p_context               IN t_context )
RETURN NUMBER;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

The DML status code of the current row.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.36 GET_DML_STATUS_MESSAGE Function

This function returns the SQL status message of the last context execution, for the current row. For local or remote SQL contexts, the ORA error message will be returned in case of an error; `NULL` in case of success.

For REST Data Source contexts, the function returns the HTTP reason phrase.

Syntax

```
APEX_EXEC.GET_DML_STATUS_MESSAGE (
    p_context       IN t_context )
RETURN VARCHAR2;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

The DML status message of the current row.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.37 GET_PARAMETER Functions

These functions returns a SQL parameter value. Typically used to retrieve values for `OUT` binds of an executed SQL or PL/SQL statement.

Syntax

```
APEX_EXEC.GET_PARAMETER_VARCHAR2 (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2,
    p_format_mask     IN VARCHAR2 DEFAULT NULL ) RETURN VARCHAR2;

APEX_EXEC.GET_PARAMETER_NUMBER (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN NUMBER;

APEX_EXEC.GET_PARAMETER_DATE (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN DATE;

APEX_EXEC.GET_PARAMETER_TIMESTAMP (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN TIMESTAMP;

APEX_EXEC.GET_PARAMETER_TIMESTAMP_TZ (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN TIMESTAMP WITH TIME ZONE;

APEX_EXEC.GET_PARAMETER_TIMESTAMP_LTZ (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN TIMESTAMP WITH LOCAL TIME ZONE;

APEX_EXEC.GET_PARAMETER_CLOB (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN CLOB;

APEX_EXEC.GET_PARAMETER_INTERVAL_D2S (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN INTERVAL DAY TO SECOND;

APEX_EXEC.GET_PARAMETER_INTERVAL_Y2M (
    p_parameters      IN t_parameters,
    p_name            IN VARCHAR2 ) RETURN INTERVAL YEAR TO MONTH;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_parameters` | SQL parameter array. |
| `p_name` | Parameter name. |
| `p_format_mask` | If the parameter is of a `DATE` or `TIMESTAMP` data type, the `p_format_mask` parameter denotes which format mask to use to get the VARCHAR2 representation. |

Returns

Parameter value.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.38 GET_ROW_VERSION_CHECKSUM Function

This function returns the row version checksum for the current row. This is either a specific column (when designated as "checksum column") or a calculated checksum from all column values.

Syntax

```
APEX_EXEC.GET_ROW_VERSION_CHECKSUM (
    p_context     IN t_context )
RETURN VARCHAR2;
```

Parameters

| Parameter   | Description                                               |
|:------------|:----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_`functions. |

Returns

The row version checksum.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.39 GET_TOTAL_ROW_COUNT Function

This function returns the total row count of the query result.

Syntax

```
APEX_EXEC.GET_TOTAL_ROW_COUNT (
    p_context       IN t_context )
RETURN PLS_INTEGER;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

The total row count; `NULL` if unknown.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.40 HAS_ERROR Function

This function returns TRUE when DML execution led to an error and FALSE when not.

Syntax

```
APEX_EXEC.HAS_ERROR (
    p_context               IN t_context )
RETURN BOOLEAN;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

`TRUE` if an error occurred, otherwise `FALSE`.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.41 HAS_MORE_ARRAY_ROWS Function

This function returns whether the current array has more children. Can only be called within an array column; otherwise an error is raised.

Syntax

```
APEX_EXEC.HAS_MORE_ARRAY_ROWS (
    p_context   IN t_context )
    RETURN BOOLEAN;
```

Parameters

| Parameter    | Description                                               |
|:-------------|:----------------------------------------------------------|
| `p_context ` | Context object obtained with one of the `OPEN_` functions |

Returns

`TRUE` if successful.

`FALSE` if the end of the result set has been reached.

See Also:

- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html#GUID-E933C2AC-C2F3-4F1F-B67A-F98023DDD8D6)
- [OPEN_ARRAY Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html#GUID-D1CB527B-C92B-4994-BFF4-E224979A4702)
- [NEXT_ARRAY_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html#GUID-9918364A-5A5E-45A2-9F13-F463E44EDABD)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.42 HAS_MORE_ROWS Function

This function returns whether the data source has more data after fetching p_max_rows. This function only returns a value after the NEXT_ROW loop has finished. Only then we can know that there is more data to fetch than we actually requested.

Syntax

```
APEX_EXEC.HAS_MORE_ROWS (
    p_context   IN t_context )
RETURN BOOLEAN;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

`TRUE`, if there is more data, `FALSE` otherwise. `NULL` if no `more data detection` was requested.

Examples

The following example executes a query, fetches a maximum of 10 rows, and prints the result set. If there are more rows, then a message "has more rows" displays. This example code can be used within an Execute PL/SQL region.

```
DECLARE
    l_context      apex_exec.t_context;

BEGIN
    l_context := apex_exec.open_query_context(
        p_location          => apex_exec.c_location_local_db,
        p_max_rows          => 10,
        p_sql_query         => 'select * from emp' );

    while apex_exec.next_row( l_context ) loop
        htp.p( 'EMPNO: ' || apex_exec.get_number  ( l_context, 'EMPNO' ) );
        htp.p( 'ENAME: ' || apex_exec.get_varchar2( l_context, 'ENAME' ) );
        htp.p( '<br>' );
    END loop;
    IF apex_exec.has_more_rows( l_context ) THEN
        htp.p( 'there are more rows ...' );
    END IF;

    apex_exec.close( l_context );
    return;
EXCEPTION
    when others then
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.43 IS_GROUP_END Function

Returns whether an end of group was found. Group columns must not be NULL.

Syntax

```
APEX_EXEC.IS_GROUP_END (
    p_context   IN t_context )
    RETURN BOOLEAN;
```

Parameters

| Parameter   | Description                                                   |
|:------------|:--------------------------------------------------------------|
| `p_context` | Context object obtained with one of the \`OPEN\_\` functions. |

Returns

`TRUE`, if successful; `FALSE` if no group change was found.

Examples

The following example executes a query and prints out the result set with control breaks.

```
DECLARE
    l_context               apex_exec.t_context;
    l_columns               apex_exec.t_columns;
    l_control_break         apex_exec.t_control_break;
    l_order_bys             apex_exec.t_order_bys;
BEGIN

    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'EMPNO' );

    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'ENAME' );
    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'JOB' );

    apex_exec.add_column(
        p_columns     => l_columns,
        p_column_name => 'DEPTNO' );

    apex_exec.add_order_by(
        p_order_bys     => l_order_bys,
        p_column_name   => 'JOB',
        p_direction     => apex_exec.c_order_asc );

    apex_exec.add_order_by(
        p_order_bys     => l_order_bys,
        p_column_name   => 'DEPTNO',
        p_direction     => apex_exec.c_order_asc );

    apex_exec.add_column(
        p_columns     => l_control_break.control_break_columns,
        p_column_name => 'JOB' );

    apex_exec.add_column(
        p_columns     => l_control_break.control_break_columns,
        p_column_name => 'DEPTNO' );

    l_context := apex_exec.open_query_context(
        p_location         => apex_exec.c_location_local_db,
        p_sql_query        => 'select * from emp',
        p_columns          => l_columns,
        p_order_bys        => l_order_bys,
        p_control_break    => l_control_break );

    WHILE apex_exec.next_row( l_context ) LOOP

        sys.dbms_output.put_line( 'EMPNO: ' || apex_exec.get_number  ( l_context, 'EMPNO' ) );
        sys.dbms_output.put_line( 'ENAME: ' || apex_exec.get_varchar2( l_context, 'ENAME' ) );
        IF apex_exec.is_group_end( p_context => l_context ) THEN
            sys.dbms_output.put_line( 'Is end of Control Break' );
        END IF;

    END LOOP;

    apex_exec.close( l_context );
    RETURN;
EXCEPTION
    WHEN others THEN
        apex_exec.close( l_context );
        RAISE;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.44 IS_REMOTE_SQL_AUTH_VALID Function

This function checks whether the current authentication credentials are correct for the given REST Enabled SQL instance.

Syntax

```
function IS_REMOTE_SQL_AUTH_VALID (
    p_server_static_id  IN    VARCHAR2 )
RETURN BOOLEAN;
```

Parameters

| Parameter            | Description                                 |
|:---------------------|:--------------------------------------------|
| `p_server_static_id` | Static ID of the REST enabled SQL instance. |

Returns

Returns `true`, when credentials are correct, `false` otherwise.

Example

The following example requires a REST enabled SQL instance created as `My Remote SQL`. It uses credentials stored as `SCOTT_Credentials`.

```
begin
    apex_credentials.set_session_credentials(
        p_application_id    => {application-id},
        p_credential_name   => 'SCOTT_Credentials',
        p_username          => 'SCOTT',
        p_password          => '****' );
    if apex_exec.check_rest_enabled_sql_auth(
        p_server_static_id  => 'My_Remote_SQL' )
    then
        sys.dbms_output.put_line( 'credentials are correct!');
    else
        sys.dbms_output.put_line( 'credentials are NOT correct!');
    end if;
end;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.45 NEXT_ARRAY_ROW Function

This function advances the array cursor by one row. Can only be called within an array column; otherwise an error is raised.

Syntax

```
APEX_EXEC.NEXT_ARRAY_ROW (
    p_context   IN t_context )
    RETURN BOOLEAN;
```

Parameters

| Parameter    | Description                                               |
|:-------------|:----------------------------------------------------------|
| `p_context ` | Context object obtained with one of the `OPEN_` functions |

Returns

`TRUE` if successful.

`FALSE` if the end of the result set has been reached.

See Also:

- [OPEN_ARRAY Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html#GUID-D1CB527B-C92B-4994-BFF4-E224979A4702)
- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html#GUID-E933C2AC-C2F3-4F1F-B67A-F98023DDD8D6)
- [HAS_MORE_ARRAY_ROWS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.HAS_MORE_ARRAY_ROWS-Function.html#GUID-7198465B-A737-4244-9FA6-3C405B119497)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.46 NEXT_ROW Function

This function advances the cursor of an open query or DML context, after execution, by one row.

Syntax

```
APEX_EXEC.NEXT_ROW (
    p_context   IN t_context )
RETURN BOOLEAN;
```

Parameters

| Parameter   | Description                                                |
|:------------|:-----------------------------------------------------------|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |

Returns

Returns `false` when the end of the response has been reached, `true` otherwise.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.47 OPEN_ARRAY Procedure Signature 1

Enters the array within the provided array column and moves the cursor to before the first row, so that calling `next_array_row()` points to the first array element.

Currently only supported for contexts on REST data sources.

Syntax

```
APEX_EXEC.OPEN_ARRAY (
    p_context               IN t_context,
    p_column_name           IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_column_name` | Name of the array column to add a row for. |

Example

```
DECLARE
    l_context apex_exec.t_context;

BEGIN
    l_context := apex_exec.open_rest_source_query(
        p_static_id        => '{REST Source static ID}',
        p_max_rows         => 1000 );

    <<rest_rows_loop>>
    WHILE apex_exec.next_row( l_context ) LOOP
        sys.dbms_output.put_line( 'ID:    ' || apex_exec.get_varchar2( l_context, 'TITLE'  ) );
        sys.dbms_output.put_line( 'MAG:   ' || apex_exec.get_varchar2( l_context, 'MAG'    ) );
        sys.dbms_output.put_line( 'PLACE: ' || apex_exec.get_varchar2( l_context, 'PLACE'  ) );
        sys.dbms_output.put_line( 'TITLE: ' || apex_exec.get_varchar2( l_context, 'TIME'   ) );
        sys.dbms_output.put_line( 'TIME:  ' || apex_exec.get_varchar2( l_context, 'ID'     ) );

        sys.dbms_output.put_line( 'SOURCES: ' );
        apex_exec.open_array(
            p_context      => l_context,
            p_column_name  => 'SOURCES' );

        <<rest_array_row_sources_loop>>
        WHILE apex_exec.next_array_row( l_context ) LOOP

            sys.dbms_output.put_line( '-- ID:   ' || apex_exec.get_varchar2( l_context, 'SOURCE_ID'   ) );
            sys.dbms_output.put_line( '-- NAME: ' || apex_exec.get_varchar2( l_context, 'SOURCE_NAME' ) );

        END LOOP rest_array_row_sources_loop;

        apex_exec.close_array( l_context );

        sys.dbms_output.put_line( 'REPORTERS: ' );

        apex_exec.open_array(
            p_context      => l_context,
            p_column_name  => 'REPORTERS' );

        <<rest_array_row_reporters_loop>>
        WHILE apex_exec.next_array_row( l_context ) LOOP

            sys.dbms_output.put_line( '-- NAME: ' || apex_exec.get_varchar2( l_context, 'REPORTER_NAME' ) );

        END LOOP rest_array_row_reporters_loop;

        apex_exec.close_array( l_context );

    END LOOP rest_rows_loop;

    apex_exec.close( l_context );
EXCEPTION
    WHEN others THEN
        apex_exec.close( l_context );
        RAISE;
END;
```

See Also:

- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html#GUID-E933C2AC-C2F3-4F1F-B67A-F98023DDD8D6)
- [NEXT_ARRAY_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html#GUID-9918364A-5A5E-45A2-9F13-F463E44EDABD)
- [SET_ARRAY_CURRENT_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_CURRENT_ROW-Procedure.html#GUID-A4C59BF3-E31A-46E0-9156-93CC14214905)
- [ADD_DML_ARRAY_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html#GUID-37F4CB18-7657-4C79-B114-6D7C5A6CC803)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.48 OPEN_ARRAY Procedure Signature 2

Enters the array within the provided array column and moves the cursor to before the first row, so that calling `next_array_row()` points to the first array element.

Currently only supported for contexts on REST data sources.

Syntax

```
APEX_EXEC.OPEN_ARRAY (
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_column_position` | Position of the column to set the value for within the DML context. |

See Also:

- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html#GUID-E933C2AC-C2F3-4F1F-B67A-F98023DDD8D6)
- [NEXT_ARRAY_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html#GUID-9918364A-5A5E-45A2-9F13-F463E44EDABD)
- [SET_ARRAY_CURRENT_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ARRAY_CURRENT_ROW-Procedure.html#GUID-A4C59BF3-E31A-46E0-9156-93CC14214905)
- [ADD_DML_ARRAY_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html#GUID-37F4CB18-7657-4C79-B114-6D7C5A6CC803)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.49 OPEN_DUALITY_VIEW_DML_CONTEXT Function

Opens a DML context based on a Duality View source.

Syntax

```
APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT (
    p_static_id             IN VARCHAR2,
    p_array_column_name     IN VARCHAR2                DEFAULT NULL,
    --
    p_columns               IN t_columns               DEFAULT c_empty_columns,
    p_lost_update_detection IN t_lost_update_detection DEFAULT NULL )
    RETURN t_context;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | Static ID of the Duality View source. |
| `p_array_column_name` | Name of an Array column within the REST Source data profile. |
| `p_columns` | DML columns to pass to the data source. |
| `p_lost_update_detection` | Lost-update detection type. Use constants `c_lost_update_*` |

Returns

The context object representing the DML handle.

Example

The following example "inserts one row" into the "EMP" Duality View source.

```
DECLARE
    l_columns        apex_exec.t_columns;
    l_context        apex_exec.t_context;
BEGIN
    -- I. Define DML columns
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'EMPNO',
        p_data_type      => apex_exec.c_data_type_number,
        p_is_primary_key => true );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'ENAME',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'JOB',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'HIREDATE',
        p_data_type      => apex_exec.c_data_type_date );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'MGR',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'SAL',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'COMM',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'DEPTNO',
        p_data_type      => apex_exec.c_data_type_number );
    -- II. Open the context object
    l_context := apex_exec.open_duality_view_dml_context(
        p_static_id             => '{duality view static id}',
        p_columns               => l_columns,
        p_lost_update_detection => apex_exec.c_lost_update_none );
    -- III. Provide DML data
    apex_exec.add_dml_row(
        p_context   => l_context,
        p_operation => apex_exec.c_dml_operation_insert );
    apex_exec.set_value(
        p_context         => l_context,
        p_column_position => 1,
        p_value           => 4711 );
    apex_exec.set_value(
        p_context         => l_context,
        p_column_position => 2,
        p_value           => 'DOE' );
    apex_exec.set_value(
        p_context         => l_context,
        p_column_position => 3,
        p_value           => 'DEVELOPR' );
    apex_exec.set_value(
        p_context         => l_context,
        p_column_position => 4,
        p_value           => sysdate );
    apex_exec.set_value(
        p_column_position => 6,
        p_value           => 1000 );
    apex_exec.set_value(
        p_context         => l_context,
        p_column_position => 8,
        p_value           => 10 );
    -- IV: Execute the DML statement
    apex_exec.execute_dml(
        p_context           => l_context,
        p_continue_on_error => false);
    apex_exec.close( l_context );
EXCEPTION
    WHEN others THEN
        apex_exec.close( l_context );
        RAISE;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.50 OPEN_JSON_SOURCE_DML_CONTEXT Function

Opens a DML context based on a JSON source.

Syntax

```
APEX_EXEC.OPEN_JSON_SOURCE_DML_CONTEXT (
    p_static_id             IN VARCHAR2,
    p_array_column_name     IN VARCHAR2                DEFAULT NULL,
    --
    p_columns               IN t_columns               DEFAULT c_empty_columns,
    p_lost_update_detection IN t_lost_update_detection DEFAULT NULL )
    RETURN t_context;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | Static ID of the JSON source. |
| `p_array_column_name` | Name of an Array column within the REST Source data profile. |
| `p_columns` | DML columns to pass to the data source. |
| `p_lost_update_detection` | Lost-update detection type. Use constants `c_lost_update_*` |

Returns

The context object representing the DML handle.

Example

See [OPEN_DUALITY_VIEW_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_DUALITY_VIEW_DML_CONTEXT-Function.html#GUID-C249ADAD-ECA9-4BB0-B56E-97224A119F2D).

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.51 OPEN_LOCAL_DML_CONTEXT Function

This function opens a DML-context-based local database.

Syntax

```
FUNCTION OPEN_LOCAL_DML_CONTEXT (
    p_columns                 IN t_columns               DEFAULT c_empty_columns,
    p_query_type              IN t_query_type,
    --
    p_table_owner             IN VARCHAR2                DEFAULT NULL,
    p_table_name              IN VARCHAR2                DEFAULT NULL,
    p_where_clause            IN VARCHAR2                DEFAULT NULL,
    --
    p_sql_query               IN VARCHAR2                DEFAULT NULL,
    p_function_body           IN VARCHAR2                DEFAULT NULL,
    p_function_body_language  IN t_language              DEFAULT c_lang_plsql,
    p_plsql_function_body     IN VARCHAR2                DEFAULT NULL,
    --
    p_with_check_option       IN BOOLEAN                 DEFAULT TRUE,
    p_optimizer_hint          IN VARCHAR2                DEFAULT NULL,
    --
    p_dml_table_owner         IN VARCHAR2                DEFAULT NULL,
    p_dml_table_name          IN VARCHAR2                DEFAULT NULL,
    p_dml_plsql_code          IN VARCHAR2                DEFAULT NULL,
    --
    p_lost_update_detection   IN t_lost_update_detection DEFAULT NULL,
    p_lock_rows               IN t_lock_rows             DEFAULT NULL,
    p_lock_plsql_code         IN VARCHAR2                DEFAULT NULL,
    --
    p_sql_parameters          IN t_parameters            DEFAULT c_empty_parameters )
    RETURN t_context;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d132605e71" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d132605e73" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d132605e77" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_columns</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e77 d132605e73 ">DML columns to pass to the data source.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e83" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_query_type</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e83 d132605e73 "><div class="p">
Indicates the type of the data source: possible values are:
<ul>
<li><code class="codeph">c_query_type_table</code>: Use a plain Table as the data source.</li>
<li><code class="codeph">c_query_type_sql_query</code>: Use a SQL query as the data source.</li>
<li><code class="codeph">c_query_type_func_return_sql</code>: Use the SQL query returned by the PL/SQL function.</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e103" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_table_owner</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e103 d132605e73 ">For query type TABLE: Table owner</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e109" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_table_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e109 d132605e73 ">For query type TABLE: Table name</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e115" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_where_clause</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e115 d132605e73 ">For query type TABLE: where clause</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e121" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_sql_query</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e121 d132605e73 ">For query type SQL QUERY: the query</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e127" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_function_body</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e127 d132605e73 ">Function body which returns the SQL query. Note that the SQL query must produce an updatable result for the DML to succeed.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e133" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_function_body_language</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e133 d132605e73 ">Programming language used for <code class="codeph">p_function_body</code>. Use <code class="codeph">c_lang_*</code> constants.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e145" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_plsql_function_body</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e145 d132605e73 ">For query type PLSQL: the PL/SQL function which returns the SQL query</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e151" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_with_check_option</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e151 d132605e73 ">Specify whether the "WITH CHECK" option should be added to the data source. If <code class="codeph">TRUE</code> (default), INSERTED or UPDATED rows cannot violate the where clause.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e163" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_optimizer_hint</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e163 d132605e73 ">Optimizer hints to be added to the DML clause</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e170" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_dml_table_owner</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e170 d132605e73 ">When set, DML statements will be executed against this table</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e176" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_dml_table_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e176 d132605e73 ">When set, DML statements will be executed against this table</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e182" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_dml_plsql_code</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e182 d132605e73 ">Custom PL/SQL code to be executed instead of DML statements</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e188" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_lost_update_detection</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e188 d132605e73 "><div class="p">
Lost-update detection type. Possible values are:
<ul>
<li><code class="codeph">c_lost_update_implicit</code>: APEX calculates a checksum from the row values</li>
<li><code class="codeph">c_lost_update_explicit</code>: One of the <code class="codeph">p_columns</code> has the "<code class="codeph">is_checksum</code>" attribute set</li>
<li><code class="codeph">c_lost_update_none</code>: No lost update detection</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e214" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_lock_rows</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e214 d132605e73 "><div class="p">
Specify whether to lock the rows for the (short) time frame between the lost update detection and the actual DML statement. Possible values are:
<ul>
<li><code class="codeph">c_lock_rows_automatic</code>: use a SELECT .. FOR UPDATE</li>
<li><code class="codeph">c_lock_rows_plsql</code>: use custom PL/SQL code to lock the rows</li>
<li><code class="codeph">c_lock_rows_none</code>: do not lock rows</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e234" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_dml_plsql_code</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e234 d132605e73 ">Custom PL/SQL code to be used to lock the rows.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132605e240" style="text-align: left;" data-valign="top" width="34%" headers="d132605e71 "><code class="codeph">p_sql_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d132605e240 d132605e73 ">Bind variables to be used.</td>
</tr>
</tbody>
</table>

Returns

The context object representing the DML handle.

Example

The following inserts one row into the EMP table on a REST Enabled SQL Service.

```
DECLARE
    l_columns        apex_exec.t_columns;
    l_context        apex_exec.t_context;
BEGIN
    -- I. Define DML columns
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'EMPNO',
       p_data_type      => apex_exec.c_data_type_number,
       p_is_primary_key => true );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'ENAME',
       p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'JOB',
       p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'HIREDATE',
       p_data_type      => apex_exec.c_data_type_date );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'MGR',
       p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'SAL',
       p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'COMM',
       p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'DEPTNO',
       p_data_type      => apex_exec.c_data_type_number );

    -- II. Open the context object
    l_context := apex_exec.open_local_dml_context(
       p_columns               => l_columns,
       p_query_type            => apex_exec.c_query_type_sql_query,
       p_sql_query             => 'select * from emp where deptno = 10',
       p_lost_update_detection => apex_exec.c_lost_update_none );

    -- III. Provide DML data

    apex_exec.add_dml_row(
       p_context   => l_context,
       p_operation => apex_exec.c_dml_operation_insert );

    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 1,
       p_value           => 4711 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 2,
       p_value           => 'DOE' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 3,
       p_value           => 'DEVELOPR' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 4,
       p_value           => sysdate );
    apex_exec.set_value(
       p_column_position => 6,
       p_value           => 1000 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 8,
       p_value           => 10 );

    -- IV: Execute the DML statement

    apex_exec.execute_dml(
       p_context           => l_context,
       p_continue_on_error => false);

     apex_exec.close( l_context );
EXCEPTION
    WHEN others THEN
        apex_exec.close( l_context );
        RAISE;

END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.52 OPEN_QUERY_CONTEXT Function Signature 1

Opens a query context for a local database, remote database, or Rest Data Source, and executes the provided SQL query.

Syntax

```
APEX_EXEC.OPEN_QUERY_CONTEXT (
    p_location               in apex_exec_api.t_location,
    --
    p_table_owner            IN VARCHAR2                       DEFAULT NULL,
    p_table_name             IN VARCHAR2                       DEFAULT NULL,
    p_where_clause           IN VARCHAR2                       DEFAULT NULL,
    p_match_clause           IN VARCHAR2                       DEFAULT NULL,
    p_columns_clause         IN VARCHAR2                       DEFAULT NULL,
    p_order_by_clause        IN VARCHAR2                       DEFAULT NULL,
    p_include_rowid_column   IN BOOLEAN                        DEFAULT FALSE,
    --
    p_sql_query              IN VARCHAR2                       DEFAULT NULL,
    p_function_body          IN VARCHAR2                       DEFAULT NULL,
    p_function_body_language IN t_language                     DEFAULT c_lang_plsql,
    p_plsql_function_body    IN VARCHAR2                       DEFAULT NULL, -- Deprecated:
    p_optimizer_hint         IN VARCHAR2                       DEFAULT NULL,
    --
    p_server_static_id       IN VARCHAR2                       DEFAULT NULL,
    --
    p_module_static_id       IN VARCHAR2                       DEFAULT NULL,
    p_web_src_parameters     IN t_parameters                   DEFAULT c_empty_parameters,
    p_external_filter_expr   IN VARCHAR2                       DEFAULT NULL,
    p_external_order_by_expr IN VARCHAR2                       DEFAULT NULL,
    --
    p_sql_parameters         IN t_parameters                   DEFAULT c_empty_parameters,
    p_auto_bind_items        IN BOOLEAN                        DEFAULT TRUE,
    --
    p_columns                IN t_columns                      DEFAULT c_empty_columns,
    --
    p_filters                IN t_filters                      DEFAULT c_empty_filters,
    p_order_bys              IN t_order_bys                    DEFAULT c_empty_order_bys,
    p_aggregation            IN t_aggregation                  DEFAULT c_empty_aggregation,
    p_control_break          IN t_control_break                DEFAULT c_empty_control_break,
    --
    p_post_process_type      IN t_post_processing              DEFAULT NULL,
    --
    p_first_row              IN NUMBER                         DEFAULT NULL,
    p_max_rows               IN NUMBER                         DEFAULT NULL,
    --
    p_total_row_count        IN BOOLEAN                        DEFAULT FALSE,
    p_total_row_count_limit  IN NUMBER                         DEFAULT NULL,
    --
    p_supports_binary_number IN BOOLEAN                        DEFAULT FALSE,
    --
    p_array_column_name      IN VARCHAR2                       DEFAULT NULL,
    --
    p_duality_view_static_id IN VARCHAR2                       DEFAULT NULL,
    p_json_source_static_id  IN VARCHAR2                       DEFAULT NULL )
    RETURN t_context;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_location` | Location to open the query context for. Can be local database, remote database, or Rest Data Source. Use `c_location_*` constants. |
| `p_table_owner` | Table owner when query type TABLE is used. |
| `p_table_name` | Table name when query type TABLE is used. |
| `p_where_clause` | Where clause to append when query types TABLE or GRAPH is used. |
| `p_match_clause` | Match clause to append when query type GRAPH is used. |
| `p_columns_clause` | Columns clause to append when query type GRAPH is used. |
| `p_order_by_clause` | Order by clause to append when query type TABLE is used. |
| `p_include_rowid_column` | Default `FALSE`. Add the `ROWID` column to the `SELECT` list when query type `TABLE` is used. |
| `p_sql_query` | SQL Query to execute when query type `SQL Query` is used. |
| `p_function_body` | Function body returning SQL query. |
| `p_function_body_language` | Programming language used for `p_function_body`. Use `c_lang_*` constants. |
| `p_plsql_function_body` | Deprecated. Use `p_function_body` instead. |
| `p_optimizer_hint` | Optimizer hint to be applied to the most outer SQL query generated by APEX. |
| `p_server_static_id` | Static ID of the Remote Server when REST-enabled SQL is used (such as when `p_location` uses `c_location_remote_db`. |
| `p_module_static_id` | Static ID of the REST Data Source (such as when `p_location` uses `c_location_rest_source`. |
| `p_web_src_parameters` | Parameters to be passed to a REST Data Source. |
| `p_external_filter_expr` | External filter expression to be passed to a REST Data Source. |
| `p_external_order_by_expr` | External order by expression to be passed to a REST Data Source. |
| `p_sql_parameters` | Additional bind variables to be used for the SQL query. |
| `p_auto_bind_items` | Whether to auto-bind APEX items (page and application items). |
| `p_columns` | Columns to be selected. |
| `p_filters` | Filters to be passed to the query context. |
| `p_order_bys` | Order by expressions to be passed to the query context. |
| `p_aggregation` | Aggregation (`GROUP BY`, `DISTINCT`) to apply on top of the query. |
| `p_control_break` | Whether to return control breaks when looping trough the context data. |
| `p_post_process_type` | Type of post processing to be applied to the REST Data Source result data. Use `c_postprocess_*`constants. |
| `p_first_row` | First row to be fetched from the result set. |
| `p_max_rows` | Maximum amount of rows to be fetched. |
| `p_total_row_count` | Whether to determine the total row count. |
| `p_total_row_count_limit` | Upper boundary for total row count computation. |
| `p_supports_binary_number` | Whether to return BINARY NUMBER columns as `c_data_type_binary_number` instead of `c_data_type_number`. |
| `p_array_column_name` | Name of an array column within the REST Source data profile. |
| `p_duality_view_static_id` | Static ID of the Duality View Source. |
| `p_json_source_static_id` | Static ID of the JSON Source. |

Returns

The context object representing a "cursor" for the source query.

Example

The following example executes a query and prints out the result set. This example code can be used within a `Execute PL/SQL` region.

```
DECLARE
    l_context apex_exec.t_context;

    l_idx_empno    pls_integer;
    l_idx_ename    pls_integer;
    l_idx_job      pls_integer;
    l_idx_hiredate pls_integer;
    l_idx_mgr      pls_integer;
    l_idx_sal      pls_integer;
    l_idx_comm     pls_integer;
    l_idx_deptno   pls_integer;

BEGIN
    l_context := apex_exec.open_query_context(
        p_location          => apex_exec.c_location_local_db,
        p_sql_query         => 'select * from emp' );

    l_idx_empno    := apex_exec.get_column_position( l_context, 'EMPNO');
    l_idx_ename    := apex_exec.get_column_position( l_context, 'ENAME');
    l_idx_job      := apex_exec.get_column_position( l_context, 'JOB');
    l_idx_hiredate := apex_exec.get_column_position( l_context, 'HIREDATE');
    l_idx_mgr      := apex_exec.get_column_position( l_context, 'MGR');
    l_idx_sal      := apex_exec.get_column_position( l_context, 'SAL');
    l_idx_comm     := apex_exec.get_column_position( l_context, 'COMM');
    l_idx_deptno   := apex_exec.get_column_position( l_context, 'DEPTNO');

    WHILE apex_exec.next_row( l_context ) LOOP
        sys.dbms_output.put_line( 'EMPNO: ' || apex_exec.get_number  ( l_context, l_idx_empno    ) );
        sys.dbms_output.put_line( 'ENAME: ' || apex_exec.get_varchar2( l_context, l_idx_ename    ) );
        sys.dbms_output.put_line( 'MGR:   ' || apex_exec.get_number  ( l_context, l_idx_mgr      ) );

    END LOOP;

    apex_exec.close( l_context );
    RETURN;
EXCEPTION
    WHEN others THEN
        apex_exec.close( l_context );
        RAISE;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.53 OPEN_QUERY_CONTEXT Function Signature 2

Enables plug-in developers to open a query context based on the current region source. All data source information that the query retrieves is from the plug-in region metadata.

Syntax

```
APEX_EXEC.OPEN_QUERY_CONTEXT (
    p_columns                     IN t_columns        DEFAULT c_empty_columns,
    --
    p_filters                     IN t_filters        DEFAULT c_empty_filters,
    p_order_bys                   IN t_order_bys      DEFAULT c_empty_order_bys,
    p_aggregation                 IN t_aggregation    DEFAULT c_empty_aggregation,
    p_control_break               IN t_control_break  DEFAULT c_empty_control_break,
    --
    p_first_row                   IN NUMBER           DEFAULT NULL,
    p_max_rows                    IN NUMBER           DEFAULT NULL,
    --
    p_total_row_count             IN BOOLEAN          DEFAULT FALSE,
    p_total_row_count_limit       IN NUMBER           DEFAULT NULL,
    --
    p_sql_parameters              IN t_parameters     DEFAULT c_empty_parameters )
    RETURN t_context;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_columns` | Columns to be selected from the data source. |
| `p_filters` | Filters to be passed to the query context. |
| `p_order_bys` | Order by expressions to be passed to the query context. |
| `p_aggregation` | Aggregation (`GROUP BY`, `DISTINCT`) to apply on top of the query. |
| `p_control_break` | Whether to return control breaks when looping through the context data. |
| `p_first_row` | First row to be fetched from the result set. |
| `p_max_rows` | Maximum amount of rows to be fetched. |
| `p_total_row_count` | Whether to determine the total row count. |
| `p_total_row_count_limit` | Upper boundary for the total row count computation. |
| `p_sql_parameters` | Bind variables to be used. |

Returns

The context object representing a "cursor" for the query.

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.54 OPEN_REMOTE_DML_CONTEXT Function

This function opens a DML-context-based remote database.

Syntax

```
APEX_EXEC.OPEN_REMOTE_DML_CONTEXT (
    p_server_static_id      IN VARCHAR2,
    --
    p_columns                 IN t_columns               DEFAULT c_empty_columns,
    p_query_type              IN t_query_type,
    --
    p_table_owner             IN VARCHAR2                DEFAULT NULL,
    p_table_name              IN VARCHAR2                DEFAULT NULL,
    p_where_clause            IN VARCHAR2                DEFAULT NULL,
    --
    p_sql_query               IN VARCHAR2                DEFAULT NULL,
    p_function_body           IN VARCHAR2                DEFAULT NULL,
    p_function_body_language  IN t_language              DEFAULT c_lang_plsql,
    p_plsql_function_body     IN VARCHAR2                DEFAULT NULL, -- Deprecated:
    --
    p_with_check_option       IN BOOLEAN                 DEFAULT TRUE,
    p_optimizer_hint          IN VARCHAR2                DEFAULT NULL,
    --
    p_dml_table_owner         IN VARCHAR2                DEFAULT NULL,
    p_dml_table_name          IN VARCHAR2                DEFAULT NULL,
    p_dml_plsql_code          IN VARCHAR2                DEFAULT NULL,
    --
    p_lost_update_detection   IN t_lost_update_detection DEFAULT NULL,
    p_lock_rows               IN t_lock_rows             DEFAULT NULL,
    p_lock_plsql_code         IN VARCHAR2                DEFAULT NULL,
    --
    p_sql_parameters          IN t_parameters            DEFAULT c_empty_parameters )
RETURN t_context;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d135429e71" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d135429e73" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d135429e77" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_server_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e77 d135429e73 ">Static ID of the ORDS REST Enabled SQL Instance.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e83" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_columns</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e83 d135429e73 ">DML columns to pass to the Data Source.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e89" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_query_type</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e89 d135429e73 "><p>Indicates the type of the Data Source.</p>
Possible values are:
<ul>
<li><code class="codeph">c_query_type_table</code>: Use a plain Table as the data source.</li>
<li><code class="codeph">c_query_type_sql_query</code>: Use a SQL query as the data source.</li>
<li><code class="codeph">c_query_type_func_return_sql</code>: Use the SQL query returned by the PL/SQL function.</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e111" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_table_owner</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e111 d135429e73 ">For query type TABLE: Table owner.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e117" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_table_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e117 d135429e73 ">For query type TABLE: Table name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e123" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_where_clause</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e123 d135429e73 ">For query type TABLE: where clause.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e129" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_sql_query</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e129 d135429e73 ">For query type SQL QUERY: the query.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e135" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_function_body</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e135 d135429e73 ">Function body which returns the SQL query. Note that the SQL query must produce an updatable result for the DML to succeed.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e141" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_function_body_language</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e141 d135429e73 ">Programming language used for <code class="codeph">p_function_body</code>. Use <code class="codeph">c_lang_*</code> constants.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e153" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_plsql_function_body</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e153 d135429e73 "><p>Deprecated. Use <code class="codeph">p_function_body</code> instead.</p>
<p>For query type PLSQL: the PL/SQL function which returns the SQL query.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e165" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_with_check_option</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e165 d135429e73 ">Specify whether the "WITH CHECK" option should be added to the data source. If set to "<code class="codeph">TRUE</code>" (default), INSERTED or UPDATED rows cannot violate the where clause.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e179" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_optimizer_hint</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e179 d135429e73 ">Optimizer hints to be added to the DML clause.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e185" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_dml_table_owner</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e185 d135429e73 ">When set, DML statements will be executed against this table.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e191" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_dml_table_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e191 d135429e73 ">When set, DML statements will be executed against this table.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e197" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_dml_plsql_code</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e197 d135429e73 ">Custom PL/SQL code to be executed instead of DML statements.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e203" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_lost_update_detection</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e203 d135429e73 "><div class="p">
Lost-update detection type. Possible values are:
<ul>
<li><code class="codeph">c_lost_update_implicit</code>: APEX calculates a checksum from the row values</li>
<li><code class="codeph">c_lost_update_explicit</code>: One of the <code class="codeph">p_columns</code> has the "<code class="codeph">is_checksum</code>" attribute set</li>
<li><code class="codeph">c_lost_update_none</code>: No lost update detection</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e230" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_lock_rows</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e230 d135429e73 "><p>Specify whether to lock the rows for the (short) time frame between the lost update detection and the actual DML statement.</p>
Possible values are:
<ul>
<li><code class="codeph">c_lock_rows_automatic</code>: use a SELECT .. FOR UPDATE</li>
<li><code class="codeph">c_lock_rows_plsql</code>: use custom PL/SQL code to lock the rows</li>
<li><code class="codeph">c_lock_rows_none</code>: do not lock rows</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e252" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_dml_plsql_code</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e252 d135429e73 ">Custom PL/SQL code to be used to lock the rows.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d135429e258" style="text-align: left;" data-valign="top" width="34%" headers="d135429e71 "><code class="codeph">p_sql_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d135429e258 d135429e73 ">Bind variables to be used.</td>
</tr>
</tbody>
</table>

Returns

The context object representing the DML handle.

Example

The following inserts one row into the EMP table on a REST Enabled SQL Service.

```
DECLARE
    l_columns        apex_exec.t_columns;
    l_context        apex_exec.t_context;
BEGIN
    -- I. Define DML columns
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'EMPNO',
       p_data_type      => apex_exec.c_data_type_number,
       p_is_primary_key => true );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'ENAME',
       p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'JOB',
       p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'HIREDATE',
       p_data_type      => apex_exec.c_data_type_date );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'MGR',
       p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'SAL',
       p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'COMM',
       p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
       p_columns        => l_columns,
       p_column_name    => 'DEPTNO',
       p_data_type      => apex_exec.c_data_type_number );

    -- II. Open the context object
    l_context := apex_exec.open_remote_dml_context(
       p_server_static_id      => '{remote server static id}',
       p_columns               => l_columns,
       p_query_type            => apex_exec.c_query_type_sql_query,
       p_sql_query             => 'select * from emp where deptno = 10',
       p_lost_update_detection => apex_exec.c_lost_update_none );

    -- III. Provide DML data

    apex_exec.add_dml_row(
       p_context   => l_context,
       p_operation => apex_exec.c_dml_operation_insert );

    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 1,
       p_value           => 4711 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 2,
       p_value           => 'DOE' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 3,
       p_value           => 'DEVELOPR' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 4,
       p_value           => sysdate );
    apex_exec.set_value(
       p_column_position => 6,
       p_value           => 1000 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 8,
       p_value           => 10 );

    -- IV: Execute the DML statement

    apex_exec.execute_dml(
       p_context           => l_context,
       p_continue_on_error => false);
       apex_exec.close( l_context );
EXCEPTION
    when others then
        apex_exec.close( l_context );
        raise;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.55 OPEN_REMOTE_SQL_QUERY Function

This function opens a query context and executes the provided SQL query on the ORDS REST Enabled SQL instance.

Syntax

```
APEX_EXEC.OPEN_REMOTE_SQL_QUERY (
    p_server_static_id      IN VARCHAR2,
    p_sql_query             IN VARCHAR2,
    p_sql_parameters        IN t_parameters DEFAULT c_empty_parameters,
    p_auto_bind_items       IN BOOLEAN      DEFAULT TRUE,
    --
    p_columns               IN t_columns    DEFAULT c_empty columns,
    --
    p_first_row             IN NUMBER       DEFAULT NULL,
    p_max_rows              IN NUMBER       DEFAULT NULL,
    --
    p_total_row_count       IN BOOLEAN      DEFAULT FALSE,
    p_total_row_count_limit IN NUMBER       DEFAULT NULL )
RETURN t_context;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_server_static_id` | Static ID of the ORDS REST Enabled SQL Instance. |
| `p_sql_query` | SQL Query to execute. |
| `p_sql_parameters` | Bind variables to pass to the remote server. |
| `p_auto_bind_items` | Whether to auto-bind all page items. |
| `p_columns` | Columns to return from the SQL query. |
| `p_first_row` | First row to be fetched from the result set. |
| `p_max_rows` | Maximum amount of rows to be fetched. |
| `p_total_row_count` | Whether to determine the total row count. |
| `p_total_row_count_limit ` | Upper boundary for total row count computation. |

Returns

The context object representing a cursor for the web source query.

Example

The following example assumes a REST enabled ORDS instance to be configured in Shared Components with the static ID `My_Remote_SQL_Instance`. Based on that, the example executes the query on the remote server and prints out the result set. This example code could be used within a plug-in or within an "Execute PL/SQL" region.

```
DECLARE
    l_context apex_exec.t_context;

    l_idx_empno    pls_integer;
    l_idx_ename    pls_integer;
    l_idx_job      pls_integer;
    l_idx_hiredate pls_integer;
    l_idx_mgr      pls_integer;
    l_idx_sal      pls_integer;
    l_idx_comm     pls_integer;
    l_idx_deptno   pls_integer;

BEGIN
    l_context := apex_exec.open_remote_sql_query(
         p_server_static_id   => 'My_Remote_SQL_Instance',
         p_sql_query          => 'select * from emp' );

    l_idx_empno    := apex_exec.get_column_position( l_context, 'EMPNO');
    l_idx_ename    := apex_exec.get_column_position( l_context, 'ENAME');
    l_idx_job      := apex_exec.get_column_position( l_context, 'JOB');
    l_idx_hiredate := apex_exec.get_column_position( l_context, 'HIREDATE');
    l_idx_mgr      := apex_exec.get_column_position( l_context, 'MGR');
    l_idx_sal      := apex_exec.get_column_position( l_context, 'SAL');
    l_idx_comm     := apex_exec.get_column_position( l_context, 'COMM');
    l_idx_deptno   := apex_exec.get_column_position( l_context, 'DEPTNO');

    WHILE apex_exec.next_row( l_context ) LOOP

          htp.p( 'EMPNO: ' || apex_exec.get_number  ( l_context, l_idx_empno    ) );
          htp.p( 'ENAME: ' || apex_exec.get_varchar2( l_context, l_idx_ename    ) );
          htp.p( 'MGR:   ' || apex_exec.get_number  ( l_context, l_idx_mgr      ) );

    END LOOP;

    apex_exec.close( l_context );
    RETURN;
EXCEPTION
    WHEN others THEN
         apex_debug.log_exception;
         apex_exec.close( l_context );
    RAISE;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.56 OPEN_REST_SOURCE_DML_CONTEXT Function

This function opens a DML-context-based REST Data Source.

Syntax

```
FUNCTION OPEN_REST_SOURCE_DML_CONTEXT (
    p_static_id             IN VARCHAR2,
    p_parameters            IN t_parameters            DEFAULT c_empty_parameters,
    --
    p_columns               IN t_columns               DEFAULT c_empty_columns,
    p_lost_update_detection IN t_lost_update_detection DEFAULT NULL )
    --
    p_fetch_rows_parameters IN t_parameters            DEFAULT c_empty_parameters,
    p_fetch_row_parameters  IN t_parameters            DEFAULT c_empty_parameters,
    p_insert_row_parameters IN t_parameters            DEFAULT c_empty_parameters,
    p_update_row_parameters IN t_parameters            DEFAULT c_empty_parameters,
    p_delete_row_parameters IN t_parameters            DEFAULT c_empty_parameters,
    --
    p_array_column_name     IN VARCHAR2                DEFAULT NULL )
    RETURN t_context;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d136822e71" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d136822e73" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d136822e77" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e77 d136822e73 ">Static ID of the REST Data Source to use. This REST Data Source must have operations for at least one of the Insert Rows, Update Rows or Delete rows database actions.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e83" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e83 d136822e73 ">REST Data Source parameter values to pass to the DML context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e89" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_columns</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e89 d136822e73 ">DML columns to pass to the data source.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e95" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_lost_update_detection</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e95 d136822e73 "><p>Lost-update detection type. Possible values are:</p>
<ul>
<li><code class="codeph">c_lost_update_implicit</code>: APEX calculates a checksum from the row values.</li>
<li><code class="codeph">c_lost_update_explicit</code>: One of the p_columns has the <code class="codeph">is_checksum</code> attribute set.</li>
<li><code class="codeph">c_lost_update_none</code>: No lost update detection.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e121" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_fetch_rows_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e121 d136822e73 ">REST Data Source parameter values to use only for the "Fetch Rows" operation within this DML context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e130" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_fetch_row_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e130 d136822e73 ">REST Data Source parameter values to use only for the "Fetch Single Row" operation within this DML context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e139" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_insert_row_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e139 d136822e73 ">REST Data Source parameter values to use only for the "Update" operation within this DML context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e148" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_update_row_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e148 d136822e73 ">REST Data Source parameter values to use only for the "Insert" operation within this DML context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e157" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_delete_row_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e157 d136822e73 ">REST Data Source parameter values to use only for the "Delete" operation within this DML context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d136822e166" style="text-align: left;" data-valign="top" width="34%" headers="d136822e71 "><code class="codeph">p_array_column_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d136822e166 d136822e73 ">Name of an array column within the REST Source data profile.</td>
</tr>
</tbody>
</table>

Returns

The context object representing the DML handle.

Example

The following inserts one row into the EMP REST Data Source.

```
DECLARE
    l_columns        apex_exec.t_columns;
    l_context        apex_exec.t_context;
BEGIN
    -- I. Define DML columns
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'EMPNO',
        p_data_type      => apex_exec.c_data_type_number,
        p_is_primary_key => true );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'ENAME',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'JOB',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'HIREDATE',
        p_data_type      => apex_exec.c_data_type_date );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'MGR',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'SAL',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'COMM',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'DEPTNO',
        p_data_type      => apex_exec.c_data_type_number );

    -- II. Open the context object
    l_context := apex_exec.open_web_source_dml_context(
        p_server_static_id      => '{module static id}',
        p_columns               => l_columns,
        p_lost_update_detection => apex_exec.c_lost_update_none );

    -- III. Provide DML data

    apex_exec.add_dml_row(
       p_context   => l_context,
       p_operation => apex_exec.c_dml_operation_insert );

    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 1,
       p_value           => 4711 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 2,
       p_value           => 'DOE' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 3,
       p_value           => 'DEVELOPR' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 4,
       p_value           => sysdate );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 6,
       p_value           => 1000 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 8,
       p_value           => 10 );

    -- IV: Execute the DML statement

    apex_exec.execute_dml(
       p_context           => l_context,
       p_continue_on_error => false);

    apex_exec.close( l_context );
EXCEPTION
    WHEN others THEN
         apex_exec.close( l_context );
         raise;

END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.57 OPEN_REST_SOURCE_QUERY Function

This function opens a REST Source query context. Based on the provided REST Source static ID, the operation matched to the `FETCH_COLLECTION` database operation will be selected.

Syntax

```
APEX_EXEC.OPEN_REST_SOURCE_QUERY (
    p_static_id              IN VARCHAR2,
    p_parameters             IN t_parameters     DEFAULT c_empty_parameters,
    --
    p_filters                IN t_filters        DEFAULT c_empty_filters,
    p_order_bys              IN t_order_bys      DEFAULT c_empty_order_bys,
    p_aggregation            IN t_aggregation    DEFAULT c_empty_aggregation,
    p_control_break          IN t_control_break  DEFAULT c_empty_control_break,
    p_columns                IN t_columns        DEFAULT c_empty_columns,
    --
    p_external_filter_expr   IN VARCHAR2         DEFAULT NULL,
    p_external_order_by_expr IN VARCHAR2         DEFAULT NULL,
    --
    p_first_row              IN PLS_INTEGER      DEFAULT NULL,
    p_max_rows               IN PLS_INTEGER      DEFAULT NULL,
    --
    p_total_row_count        IN BOOLEAN          DEFAULT FALSE,
    --
    p_array_column_name      IN VARCHAR2         DEFAULT NULL )
    RETURN t_context;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | Static ID of the REST Data Source to invoke. |
| `p_parameters` | Parameter values to be passed to the data source. |
| `p_filters` | Filters to be passed to the data source. |
| `p_order_bys` | Order by expressions to be passed to the data source. |
| `p_aggregation` | Aggregation (`GROUP BY`, `DISTINCT`) to apply on top of the query. |
| `p_control_break` | Whether to return control breaks when looping trough the context data. |
| `p_columns` | Columns to be selected from the data source. |
| `p_external_filter_expr` | Filter expression to be passed 1:1 to the external web service. Depends on the actual web service being used. |
| `p_external_order_by_expr` | Order by expression to be passed 1:1 to the external web service. Depends on the actual web service being used. |
| `p_first_row` | First row to be fetched from the data source. |
| `p_max_rows` | Maximum amount of rows to be fetched from the data source. |
| `p_total_row_count` | Whether to determine the total row count (only supported when the attribute `"allow fetch all rows"` equals `Yes`). |
| `p_array_column_name` | Name of an array column within the REST Source data profile. |

Returns

The context object representing a `cursor` for the REST Data Source query

Example

The following example assumes a REST Data Source with the static ID `USGS` to be created in Shared Components, based on the URL endpoint `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`. The example invokes the REST service and prints out the result set. This example code could be used within a plug-in or within a `Execute PL/SQL` region.

```
DECLARE
    l_context apex_exec.t_context;
    l_filters apex_exec.t_filters;
    l_columns apex_exec.t_columns;

    l_row     pls_integer := 1;

    l_magidx  pls_integer;
    l_titidx  pls_integer;
    l_plcidx  pls_integer;
    l_timidx  pls_integer;
    l_ididx   pls_integer;
BEGIN
    l_context := apex_exec.open_rest_source_query(
        p_static_id     => 'USGS',
        p_max_rows      => 1000 );

    l_titidx := apex_exec.get_column_position( l_context, 'TITLE' );
    l_magidx := apex_exec.get_column_position( l_context, 'MAG' );
    l_plcidx := apex_exec.get_column_position( l_context, 'PLACE' );
    l_timidx := apex_exec.get_column_position( l_context, 'TIME' );
    l_ididx  := apex_exec.get_column_position( l_context, 'ID' );

    while apex_exec.next_row( l_context ) LOOP

        htp.p( 'ID:    ' || apex_exec.get_varchar2( l_context, l_ididx  ) );
        htp.p( 'MAG:   ' || apex_exec.get_varchar2( l_context, l_magidx ) );
        htp.p( 'PLACE: ' || apex_exec.get_varchar2( l_context, l_plcidx ) );
        htp.p( 'TITLE: ' || apex_exec.get_varchar2( l_context, l_titidx ) );
        htp.p( 'TIME:  ' || apex_exec.get_varchar2( l_context, l_timidx ) );
     END LOOP;

     apex_exec.close( l_context );
EXCEPTION
     when others then
         apex_exec.close( l_context );
     RAISE;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.58 OPEN_WEB_SOURCE_DML_CONTEXT Function (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

Use [OPEN_REST_SOURCE_DML_CONTEXT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_DML_CONTEXT-Function.html#GUID-8C5E17C9-884D-43D0-8A12-2C071F05019C) instead.

This function opens a DML-context-based web source module.

Syntax

```
FUNCTION OPEN_WEB_SOURCE_DML_CONTEXT (
    p_module_static_id      IN VARCHAR2,
    p_parameters            IN t_parameters            DEFAULT c_empty_parameters,
    --
    p_columns               IN t_columns               DEFAULT c_empty_columns,
    p_lost_update_detection IN t_lost_update_detection DEFAULT NULL,
    --
    p_array_column_name     IN VARCHAR2                DEFAULT NULL )
    RETURN t_context;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d137982e79" style="text-align: left;" data-valign="bottom" width="34%">Parameter</th>
<th id="d137982e81" style="text-align: left;" data-valign="bottom" width="66%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d137982e85" style="text-align: left;" data-valign="top" width="34%" headers="d137982e79 "><code class="codeph">p_module_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d137982e85 d137982e81 "><p>Static ID of the web source module to use. This web source module must have operations for at least one of the Insert Rows, Update Rows or Delete rows database actions.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d137982e92" style="text-align: left;" data-valign="top" width="34%" headers="d137982e79 "><code class="codeph">p_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d137982e92 d137982e81 ">Web source parameter values to pass to the DML context.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d137982e98" style="text-align: left;" data-valign="top" width="34%" headers="d137982e79 "><code class="codeph">p_columns</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d137982e98 d137982e81 ">DML columns to pass to the data source</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d137982e104" style="text-align: left;" data-valign="top" width="34%" headers="d137982e79 "><code class="codeph">p_lost_update_detection</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d137982e104 d137982e81 "><div class="p">
Lost-update detection type. Possible values are:
<ul>
<li><code class="codeph">c_lost_update_implicit</code>: APEX calculates a checksum from the row values</li>
<li><code class="codeph">c_lost_update_explicit</code>: One of the p_columns has the <code class="codeph">"is_checksum"</code> attribute set</li>
<li><code class="codeph">c_lost_update_none</code>: No lost update detection</li>
</ul>
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d137982e130" style="text-align: left;" data-valign="top" width="34%" headers="d137982e79 "><code class="codeph">p_array_column_name</code></td>
<td style="text-align: left;" data-valign="top" width="66%" headers="d137982e130 d137982e81 ">Name of an array column within the REST Source data profile.</td>
</tr>
</tbody>
</table>

Returns

The context object representing the DML handle.

Example

The following inserts one row into the EMP web source module.

```
DECLARE
    l_columns        apex_exec.t_columns;
    l_context        apex_exec.t_context;
BEGIN
    -- I. Define DML columns
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'EMPNO',
        p_data_type      => apex_exec.c_data_type_number,
        p_is_primary_key => true );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'ENAME',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'JOB',
        p_data_type      => apex_exec.c_data_type_varchar2 );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'HIREDATE',
        p_data_type      => apex_exec.c_data_type_date );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'MGR',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'SAL',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'COMM',
        p_data_type      => apex_exec.c_data_type_number );
    apex_exec.add_column(
        p_columns        => l_columns,
        p_column_name    => 'DEPTNO',
        p_data_type      => apex_exec.c_data_type_number );

    -- II. Open the context object
    l_context := apex_exec.open_web_source_dml_context(
        p_server_static_id      => '{module static id}',
        p_columns               => l_columns,
        p_lost_update_detection => apex_exec.c_lost_update_none );

    -- III. Provide DML data

    apex_exec.add_dml_row(
       p_context   => l_context,
       p_operation => apex_exec.c_dml_operation_insert );

    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 1,
       p_value           => 4711 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 2,
       p_value           => 'DOE' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 3,
       p_value           => 'DEVELOPR' );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 4,
       p_value           => sysdate );
    apex_exec.set_value(
       p_column_position => 6,
       p_value           => 1000 );
    apex_exec.set_value(
       p_context         => l_context,
       p_column_position => 8,
       p_value           => 10 );

    -- IV: Execute the DML statement

    apex_exec.execute_dml(
       p_context           => l_context,
       p_continue_on_error => false);

    apex_exec.close( l_context );
EXCEPTION
    when others then
         apex_exec.close( l_context );
         raise;

END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.59 OPEN_WEB_SOURCE_QUERY Function (Deprecated)

Note:

This function is deprecated and will be removed in a future release. Use `OPEN_REST_SOURCE_QUERY` instead. See [OPEN_REST_SOURCE_QUERY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_REST_SOURCE_QUERY-Function.html#GUID-F09E0A46-8282-4917-8C3B-94910F9DD919).

This function opens a Web Source query context. Based on the provided web source static ID, the operation matched to the `FETCH_COLLECTION` database operation will be selected.

Syntax

```
FUNCTION OPEN_WEB_SOURCE_QUERY (
    p_module_static_id       IN VARCHAR2,
    p_parameters             IN t_parameters     DEFAULT c_empty_parameters,
    --
    p_filters                IN t_filters        DEFAULT c_empty_filters,
    p_order_bys              IN t_order_bys      DEFAULT c_empty_order_bys,
    p_aggregation            IN t_aggregation    DEFAULT c_empty_aggregation,
    p_control_break          IN t_control_break  DEFAULT c_empty_control_break,
    p_columns                IN t_columns        DEFAULT c_empty_columns,
    --
    p_first_row              IN PLS_INTEGER      DEFAULT NULL,
    p_max_rows               IN PLS_INTEGER      DEFAULT NULL,
    --
    p_external_filter_expr   IN VARCHAR2         DEFAULT NULL,
    p_external_order_by_expr IN VARCHAR2         DEFAULT NULL,
    --
    p_total_row_count        IN BOOLEAN          DEFAULT FALSE,
    --
    p_array_column_name      IN VARCHAR2         DEFAULT NULL )
    RETURN t_context;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module_static_id` | Static ID of the web source module to invoke. |
| `p_parameters` | Parameter values to be passed to the web source. |
| `p_filters` | Filters to be passed to the web source. |
| `p_order_bys` | Order by expressions to be passed to the web source. |
| `p_aggregation` | Aggregation (`GROUP BY`, `DISTINCT`) to apply on top of the query. |
| `p_control_break` | Whether to return control breaks when looping trough the context data. |
| `p_columns` | Columns to be selected from the web source. |
| `p_first_row` | First row to be fetched from the web source. |
| `p_max_rows` | Maximum amount of rows to be fetched from the web source. |
| `p_external_filter_expr` | Filter expression to be passed 1:1 to the external web service. Depends on the actual web service being used. |
| `p_external_order_by_expr` | Order by expression to be passed 1:1 to the external web service. Depends on the actual web service being used. |
| `p_total_row_count` | Whether to determine the total row count (only supported when the attribute `"allow fetch all rows"` equals `Yes`). |
| `p_array_column_name` | Name of an array column within the REST Source data profile. |

Returns

The context object representing a `"cursor"` for the web source query.

Example

The following example assumes a Web Source module with the static ID `"USGS"` to be created in Shared Components, based on the URL endpoint `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`. The example invokes the REST service and prints out the result set. This example code could be used within a plug-in or within a `"Execute PL/SQL"` region.

```
DECLARE
    l_context apex_exec.t_context;
    l_filters apex_exec.t_filters;
    l_columns apex_exec.t_columns;

    l_row     pls_integer := 1;

    l_magidx  pls_integer;
    l_titidx  pls_integer;
    l_plcidx  pls_integer;
    l_timidx  pls_integer;
    l_ididx   pls_integer;
BEGIN
    l_context := apex_exec.open_web_source_query(
        p_module_static_id => 'USGS',
        p_max_rows         => 1000 );

    l_titidx := apex_exec.get_column_position( l_context, 'TITLE' );
    l_magidx := apex_exec.get_column_position( l_context, 'MAG' );
    l_plcidx := apex_exec.get_column_position( l_context, 'PLACE' );
    l_timidx := apex_exec.get_column_position( l_context, 'TIME' );
    l_ididx  := apex_exec.get_column_position( l_context, 'ID' );

    while apex_exec.next_row( l_context ) LOOP

        htp.p( 'ID:    ' || apex_exec.get_varchar2( l_context, l_ididx  ) );
        htp.p( 'MAG:   ' || apex_exec.get_varchar2( l_context, l_magidx ) );
        htp.p( 'PLACE: ' || apex_exec.get_varchar2( l_context, l_plcidx ) );
        htp.p( 'TITLE: ' || apex_exec.get_varchar2( l_context, l_titidx ) );
        htp.p( 'TIME:  ' || apex_exec.get_varchar2( l_context, l_timidx ) );
     END LOOP;

     apex_exec.close( l_context );
EXCEPTION
     when others then
         apex_exec.close( l_context );
         raise;
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.60 PURGE_DUALITY_VIEW_CACHE Procedure

Purges the local cache for a Duality View of JSON sources based on REST-enabled SQL. The Duality View or JSON source must exist in the current application and must be identified by its static ID. If caching is disabled or no cache entries exist, nothing happens.

Syntax

```
APEX_EXEC.PURGE_DUALITY_VIEW_CACHE (
    p_static_id            IN VARCHAR2,
    p_current_session_only IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | Static ID of the JSON or Duality View source. |
| `p_current_session_only` | Default `FALSE`. Specify `TRUE` to only purge entries that were saved for the current session. |

Example

```
BEGIN
    apex_exec.purge_duality_view_cache(
        p_static_id => '{Duality View static ID}' );
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.61 PURGE_JSON_SOURCE_CACHE Procedure

Purges the local cache for a Duality View of JSON sources based on REST-enabled SQL. The Duality View or JSON source must exist in the current application and must be identified by its static ID. If caching is disabled or no cache entries exist, nothing happens.

Syntax

```
APEX_EXEC.PURGE_JSON_SOURCE_CACHE (
    p_static_id            IN VARCHAR2,
    p_current_session_only IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | Static ID of the JSON or Duality View source. |
| `p_current_session_only` | Default `FALSE`. Specify `TRUE` to only purge entries that were saved for the current session. |

Example

```
BEGIN
    apex_exec.purge_duality_view_cache(
        p_static_id => '{Duality View static ID}' );
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.62 PURGE_REST_SOURCE_CACHE Procedure

This procedure purges the local cache for a REST Data Source. The REST Data Source must exist in the current application and be identified by a static ID. If caching is disabled or no cache entries exist, nothing happens.

Syntax

```
APEX_EXEC.PURGE_REST_SOURCE_CACHE (
    p_static_id            IN VARCHAR2,
    p_current_session_only IN BOOLEAN DEFAULT FALSE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_static_id` | Static ID of the REST Data Source to invoke. |
| `p_current_session_only` | Specify `TRUE` to only purge entries that were saved for the current session. Default `FALSE`. |

Example

Purge cache for the REST Data Source with static ID `USGS`.

```
BEGIN
    apex_exec.purge_rest_source_cache(
        p_static_id => 'USGS' );
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.63 PURGE_WEB_SOURCE_CACHE Procedure (Deprecated)

Note:

This procedure is deprecated and will be removed in a future release. Use `purge_rest_source_cache` instead.

This procedure purges the local cache for a Web Source module. The web source module must exist in the current application and identified by its static ID. If caching is disabled or no cache entries exist, nothing happens.

Syntax

```
APEX_EXEC.PURGE_WEB_SOURCE_CACHE (
    p_module_static_id     IN VARCHAR2,
    p_current_session_only IN BOOLEAN DEFAULT FALSE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_module_static_id` | Static ID of the web source module to invoke. |
| `p_current_session_only` | Specify `TRUE` to only purge entries that were saved for the current session. Default `FALSE`. |

Example

Purge cache for the Web Source Module with static ID "USGS".

```
BEGIN
    apex_exec.purge_web_source_cache(
        p_module_static_id => 'USGS' );
END;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.64 SET_ARRAY_CURRENT_ROW Procedure

This procedure moves the cursor to the given row within the current array.

Currently only supported for contexts on REST Data Sources.

Syntax

```
APEX_EXEC.SET_ARRAY_CURRENT_ROW (
    p_context               IN t_context,
    p_current_row_idx       IN PLS_INTEGER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_current_row_idx` | Row within the child array to place the cursor on. |

See Also:

- [OPEN_ARRAY Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.OPEN_ARRAY-Procedure-Signature-1.html#GUID-D1CB527B-C92B-4994-BFF4-E224979A4702)
- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.CLOSE_ARRAY-Procedure.html#GUID-E933C2AC-C2F3-4F1F-B67A-F98023DDD8D6)
- [NEXT_ARRAY_ROW Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.NEXT_ARRAY_ROW-Function.html#GUID-9918364A-5A5E-45A2-9F13-F463E44EDABD)
- [ADD_DML_ARRAY_ROW Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.ADD_DML_ARRAY_ROW-Procedure.html#GUID-37F4CB18-7657-4C79-B114-6D7C5A6CC803)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.65 SET_ARRAY_ROW_VERSION_CHECKSUM Procedure

This procedure sets the row version checksum for the current nested array row. Can only be called when inside an array column; otherwise an error message is called.

The checksum is to be used by a REST Data Source Plug-In, when performing plug-in actions for an array element.

Syntax

```
APEX_EXEC.SET_ARRAY_ROW_VERSION_CHECKSUM (
    p_context               IN t_context,
    p_checksum              IN VARCHAR2 );
```

Parameters

| Parameter    | Description                                                  |
|:-------------|:-------------------------------------------------------------|
| `p_context`  | Context object obtained with one of the `OPEN_` functions.   |
| `p_checksum` | Checksum to use for lost-update detection of this array row. |

See Also:

- [GET_ARRAY_ROW_VERSION_CHECKSUM Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.GET_ARRAY_ROW_VERSION_CHECKSUM-Function.html#GUID-09AE7CF0-C687-4629-85B2-4A1F007F25F1)

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.66 SET_CURRENT_ROW Procedure

This procedure sets the current row pointer of a DML context to the given row number. Subsequent `SET_VALUE` invocations affect the row with this row number.

Syntax

```
APEX_EXEC.SET_CURRENT_ROW (
    p_context   IN t_context,
    p_row_idx   IN PLS_INTEGER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_row_idx` | Row number to set the "current row" pointer to. |

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.67 SET_NULL Procedure

This procedure sets procedures to set a DML column value to NULL. Useful when the row is initialized from a query context with `set_values` and the new value of one of the columns should be `NULL`.

Syntax

Signature 1

```
APEX_EXEC.SET_NULL (
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER )
```

Signature 2

```
APEX_EXEC.SET_NULL (
    p_context               IN t_context,
    p_column_name           IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_column_position` | Position of the column to set the value for within the DML context. |
| `p_column_name` | Name of the column to set the value. |

Example 1

```
apex_exec.set_null(
     p_context         => l_dml_context,
     p_column_position => 6 );
```

Example 2

```
apex_exec.set_null(
     p_context         => l_dml_context,
     p_column_name     => 'SAL' );
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.68 SET_ROW_VERSION_CHECKSUM Procedure

This procedure sets the row version checksum to use for lost update detection for the current DML row. This is called after `add_dml_row`.

Syntax

```
APEX_EXEC.SET_ROW_VERSION_CHECKSUM (
    p_context               IN t_context,
    p_checksum              IN VARCHAR2 )
```

Parameters

| Parameter    | Description                                                |
|:-------------|:-----------------------------------------------------------|
| `p_context`  | Context object obtained with one of the `OPEN_` functions. |
| `p_checksum` | Checksum to use for lost-update detection of this row.     |

Example

The following example opens a query context on the EMP table and retrieves all values and the row version checksum for the row with `EMPNO=7839`. Then a DML context is opened to update the `SAL` column while using the row version checksum for lost update detection.

```
declare
    l_columns        apex_exec.t_columns;
    l_dml_context    apex_exec.t_context;
    l_query_context  apex_exec.t_context;
begin
     -- I. Define DML columns
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'EMPNO',
         p_data_type      => apex_exec.c_data_type_number,
         p_is_primary_key => true );
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'ENAME',
         p_data_type      => apex_exec.c_data_type_varchar2 );
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'JOB',
         p_data_type      => apex_exec.c_data_type_varchar2 );
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'HIREDATE',
         p_data_type      => apex_exec.c_data_type_date );
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'MGR',
         p_data_type      => apex_exec.c_data_type_number );
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'SAL',
         p_data_type      => apex_exec.c_data_type_number );
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'COMM',
         p_data_type      => apex_exec.c_data_type_number );
     apex_exec.add_column(
         p_columns        => l_columns,
         p_column_name    => 'DEPTNO',
         p_data_type      => apex_exec.c_data_type_number );

    -- II. Open the Query Context object
    l_query_context := apex_exec.open_remote_sql_query(
        p_server_static_id  => 'DevOps_Remote_SQL',
        p_sql_query         => 'select * from emp where empno = 7839',
        p_columns           => l_columns );

     -- III. Open the DML context object
     l_dml_context := apex_exec.open_remote_dml_context(
         p_server_static_id      => '{remote server static id}',
         p_columns               => l_columns,
         p_query_type            => apex_exec.c_query_type_sql_query,
         p_sql_query             => 'select * from emp where deptno = 10',
         p_lost_update_detection => apex_exec.c_lost_update_implicit );

     if apex_exec.next_row( p_context => l_query_context ) then
         apex_exec.add_dml_row(
             p_context   => l_dml_context,
             p_operation => apex_exec.c_dml_operation_update);

      apex_exec.set_row_version_checksum(
         p_context   => l_dml_context,
         p_checksum  => apex_exec.get_row_version_checksum( p_context => l_query_context ) );

      apex_exec.set_values(
         p_context         => l_dml_context,
         p_source_context  => l_query_context );

      apex_exec.set_value(
         p_context     => 1_dml_context,
         p_column_name => 'SAL',
         p_value       => 8000 );
     else
         raise_application_error( -20000, 'EMPNO #4711 is not present!');
     end if;

     apex_exec.execute_dml(
         p_context           => l_dml_context,
         p_continue_on_error => false);

     apex_exec.close( l_dml_context );
     apex_exec.close( l_query_context );
exception
      when others then
           apex_exec.close( l_dml_context );
           apex_exec.close( l_query_context );
           raise;

end;
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.69 SET_VALUE Procedure

This procedure sets DML column values for different data types. To be called after `add_dml_row` for each column value to be set. Each procedure is called either with the column name or with the column position.

Syntax

Signature 1

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN VARCHAR2 );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN VARCHAR2 );
```

Signature 2

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN NUMBER );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN NUMBER );
```

Signature 3

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN DATE );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN DATE );
```

Signature 4

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN TIMESTAMP );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN TIMESTAMP );
```

Signature 5

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN TIMESTAMP WITH TIME ZONE);

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN TIMESTAMP WITH TIME ZONE);
```

Signature 6

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN TIMESTAMP WITH LOCAL TIME ZONE);

procedure set_value(
    p_context               in t_context,
    p_column_name           in varchar2,
    p_value                 in timestamp with local time zone);
```

Signature 7

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN DSINTERVAL_UNCONSTRAINED );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN DSINTERVAL_UNCONSTRAINED );
```

Signature 8

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN YMINTERVAL_UNCONSTRAINED );

PROCEDURE SET_VALUE(
    p_context               in t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN YMINTERVAL_UNCONSTRAINED );
```

Signature 9

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN CLOB );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN CLOB );
```

 Signature 10

```
PROCEDURE SET_VALUE(
   p_context               IN t_context,
   p_column_position       IN PLS_INTEGER,
   p_value                 IN BLOB );

PROCEDURE SET_VALUE(
   p_context               IN t_context,
   p_column_name           IN VARCHAR2,
   p_value                 IN BLOB );
```

Signature 11

```
PROCEDURE SET_VALUE(
   p_context               IN t_context,
   p_column_position       IN PLS_INTEGER,
   p_value                 IN SYS.ANYDATA );

PROCEDURE SET_VALUE(
   p_context               IN t_context,
   p_column_name           IN VARCHAR2,
   p_value                 IN SYS.ANYDATA );
```

Signature 12

Note:

This signature is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

```
PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_position       IN PLS_INTEGER,
    p_value                 IN mdsys.sdo_geometry );

PROCEDURE SET_VALUE(
    p_context               IN t_context,
    p_column_name           IN VARCHAR2,
    p_value                 IN mdsys.sdo_geometry );
```

Signature 13

```
PROCEDURE SET_VALUE(
   p_context               IN t_context,
   p_column_position       IN PLS_INTEGER,
   p_value                 IN BOOLEAN );

PROCEDURE SET_VALUE(
   p_context               IN t_context,
   p_column_name           IN VARCHAR2,
   p_value                 IN BOOLEAN );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the `OPEN_` functions. |
| `p_column_position` | Position of the column to set the value for within the DML context. |
| `p_column_name` | Name of the column to set the value for. |
| `p_value` | Value to set. |

Example

```
apex_exec.set_value(
    p_context         => l_dml_context,
    p_column_name     => 'SAL',
    p_value           => 9500 );

apex_exec.set_value(
    p_context         => l_dml_context,
    p_column_position => 6,
    p_value           => 9500 );

apex_exec.set_value(
    p_context         => l_dml_context,
    p_columns_name    => 'HIREDATE',
    p_value           => trunc( sysdate ) );
```

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)

------------------------------------------------------------------------

## 28.70 SET_VALUES Procedure

This procedure sets all column values in the DML context with corresponding column values from the source (query) context. Useful for querying a row, changing only single columns and writing the row back.

Syntax

```
APEX_EXEC.SET_VALUES (
    p_context               IN t_context,
    p_source_context        IN t_context )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | Context object obtained with one of the OPEN\_ functions. |
| `p_source_context` | Query context object to get column values from. |

Example

See [SET_ROW_VERSION_CHECKSUM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.SET_ROW_VERSION_CHECKSUM-Procedure.html#GUID-DE0D6BB4-1D37-4026-9A27-49EB072523E4).

**Parent topic:** [APEX_EXEC](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.html#GUID-3CF1D2DD-AEA4-4982-9857-548567AB7169)
