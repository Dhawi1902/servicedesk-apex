<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 54 APEX_SESSION_STATE

The APEX_SESSION_STATE package encapsulates utilities needed to read and assign session state values.

- [Global Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE-Global-Constants.html#GUID-BCE8E30C-76D5-4AEB-ABCF-5466DC531BDD)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE-Data-Types.html#GUID-9515A813-1243-4F44-8CA4-55F44B5AA276)
- [GET_BOOLEAN Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_BOOLEAN-Function.html#GUID-FCB7EFD7-FFBC-4AA0-AC45-5089FE1D9CB8)
- [GET_CLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_CLOB-Function.html#GUID-D4616FDE-C742-4AEA-A445-11919818B737)
- [GET_NUMBER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_NUMBER-Function.html#GUID-EC3142D9-2E62-4163-AACC-884ECE9FEDB5)
- [GET_TIMESTAMP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_TIMESTAMP-Function.html#GUID-4855DF77-686C-4203-A8C7-17E220BD1686)
- [GET_VALUE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_VALUE-Function.html#GUID-26FF2D8B-7560-47C8-9275-A1762CACE90A)
- [GET_VARCHAR2 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.GET_VARCHAR2-Function.html#GUID-122C5796-B264-4A3C-B8F4-563A61F4A4A5)
- [SET_VALUE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-1.html#GUID-0E356D89-C74B-4427-9C39-F5DEDC4D2FB3)
- [SET_VALUE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-2.html#GUID-A662720F-70B8-4A69-B49B-9E0412BB1518)
- [SET_VALUE Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-3.html#GUID-60B77E48-D1BD-4ECB-A91B-37ABE892A280)
- [SET_VALUE Procedure Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.SET_VALUE-Procedure-Signature-4.html#GUID-2ED41D4B-68E8-4027-86A0-1EF98E495F14)

------------------------------------------------------------------------

## 54.1 Global Constants

The the `t_value` record in the APEX_SESSION_STATE package uses the following data type constants.

```
subtype t_data_type is pls_integer range 1..16;

c_data_type_varchar2      constant t_data_type := apex_exec.c_data_type_varchar2;
c_data_type_clob          constant t_data_type := apex_exec.c_data_type_clob;
c_data_type_boolean       constant t_data_type := apex_exec.c_data_type_boolean;
```

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.2 Data Types

The APEX_SESSION_STATE package uses the following data types.

The `t_value` record type encapsulates a session state value. Only one value of a certain data type can be populated at a time.

```
type t_value is record (
    data_type       t_data_type,
    varchar2_value  varchar2(32767),
    clob_value      clob,
    boolean_value   boolean );
```

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.3 GET_BOOLEAN Function

This function returns the value of a BOOLEAN item identified by `p_item`.

Syntax

```
APEX_SESSION_STATE.GET_BOOLEAN (
    p_item IN VARCHAR2 )
RETURN BOOLEAN;
```

Returns

This function returns the value of the specified item as BOOLEAN.

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.4 GET_CLOB Function

This function returns the value of a CLOB item identified by `p_item`.

Syntax

```
APEX_SESSION_STATE.GET_CLOB (
    p_item IN VARCHAR2 )
RETURN CLOB;
```

Returns

This function returns the value of the specified item as CLOB.

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.5 GET_NUMBER Function

This function returns the value of a page item identified by `p_item` as NUMBER. This function uses the item's format mask to perform the conversion.

Syntax

```
APEX_SESSION_STATE.GET_NUMBER (
    p_item IN VARCHAR2 )
RETURN NUMBER;
```

Returns

This function returns the value of the specified item as NUMBER.

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.6 GET_TIMESTAMP Function

This function returns the value of a page item identified by `p_item` as TIMESTAMP. This function uses the item's format mask to perform the conversion.

Syntax

```
APEX_SESSION_STATE.GET_TIMESTAMP (
    p_item IN VARCHAR2 )
RETURN TIMESTAMP;
```

Returns

This function returns the value of the specified item as TIMESTAMP.

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.7 GET_VALUE Function

This function returns the value of a page item identified by `p_item` as a generic T_VALUE.

Syntax

```
APEX_SESSION_STATE.GET_VALUE (
    p_item IN VARCHAR2 )
RETURN T_VALUE;
```

Returns

This function returns the value of the specified item as T_VALUE.

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.8 GET_VARCHAR2 Function

This function returns the value of a VARCHAR2 item identified by `p_item`. This function is the equivalent of the V function. This function raises an exception for values of data type CLOB.

Syntax

```
APEX_SESSION_STATE.GET_VARCHAR2 (
    p_item IN VARCHAR2 )
RETURN VARCHAR2;
```

Returns

This function returns the value of the specified item as VARCHAR2.

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.9 SET_VALUE Procedure Signature 1

This procedure sets an item's session state value based on VARCHAR2.

Syntax

```
APEX_SESSION_STATE.SET_VALUE (
    p_item   IN VARCHAR2,
    p_value  IN VARCHAR2,
    p_commit IN BOOLEAN DEFAULT TRUE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_item` | The item name. |
| `p_value` | The item value. |
| `p_commit` | If `TRUE` (default), commit after modifying the session state. If `FALSE`, or if the existing value in session state equals `p_value`, no commit is issued. This parameter is ignored when the application's Session State Changes attribute is set to "End Of Request." |

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.10 SET_VALUE Procedure Signature 2

This procedure sets an item's session state value based on CLOB.

Syntax

```
APEX_SESSION_STATE.SET_VALUE (
    p_item   IN VARCHAR2,
    p_value  IN CLOB,
    p_commit IN BOOLEAN DEFAULT TRUE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_item` | The item name. |
| `p_value` | The item value. |
| `p_commit` | If `TRUE` (default), commit after modifying the session state. If `FALSE`, or if the existing value in session state equals `p_value`, no commit is issued. This parameter is ignored when the application's Session State Changes attribute is set to "End Of Request." |

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.11 SET_VALUE Procedure Signature 3

This procedure sets an item's session state value based on BOOLEAN.

Syntax

```
APEX_SESSION_STATE.SET_VALUE (
    p_item   IN VARCHAR2,
    p_value  IN BOOLEAN,
    p_commit IN BOOLEAN DEFAULT TRUE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_item` | The item name. |
| `p_value` | The item value. |
| `p_commit` | If `TRUE` (default), commit after modifying the session state. If `FALSE`, or if the existing value in session state equals `p_value`, no commit is issued. This parameter is ignored when the application's Session State Changes attribute is set to "End Of Request." |

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)

------------------------------------------------------------------------

## 54.12 SET_VALUE Procedure Signature 4

This procedure sets an item's session state value based on a generic `t_value`.

Syntax

```
APEX_SESSION_STATE.SET_VALUE (
    p_item   IN VARCHAR2,
    p_value  IN t_value,
    p_commit IN BOOLEAN DEFAULT TRUE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_item` | The item name. |
| `p_value` | The item value. |
| `p_commit` | If `TRUE` (default), commit after modifying the session state. If `FALSE`, or if the existing value in session state equals `p_value`, no commit is issued. This parameter is ignored when the application's Session State Changes attribute is set to "End Of Request." |

**Parent topic:** [APEX_SESSION_STATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SESSION_STATE.html#GUID-BF814518-6981-4F69-9F88-C36FED14323F)
