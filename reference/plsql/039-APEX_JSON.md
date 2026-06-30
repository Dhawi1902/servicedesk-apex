<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 39  APEX_JSON

This package includes utilities that parse and generate JSON.

- [APEX_JSON Overview and Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview-and-Examples.html#GUID-59567A48-7F81-4748-8998-CF3081286EC8)
- [Constants and Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON-Constants-and-Data-Types.html#GUID-83BF8800-E60D-4A7D-A32E-9FDC63ED4923)
- [CLOSE_ALL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_ALL-Procedure.html#GUID-42A69AF0-9853-4E4E-BFC4-38C2D20980C0)
- [CLOSE_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_ARRAY-Procedure.html#GUID-308E76AB-627A-4F2E-B7AC-E6DD32A18E94)
- [CLOSE_OBJECT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOSE_OBJECT-Procedure.html#GUID-98070930-044F-4230-B4DC-F0D43C014901)
- [DOES_EXIST Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DOES_EXIST-Function.html#GUID-E19F683A-FF3F-41B3-AFD2-87FEAD5A843D)
- [FIND_PATHS_LIKE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_PATHS_LIKE-Function.html#GUID-9EAF9B91-DD2D-4DC2-ACBC-F039D54A4DFB)
- [FLUSH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FLUSH-Procedure.html#GUID-A6DBBBFB-A6E9-4B7D-96E6-44DDBA7AD18E)
- [FREE_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FREE_OUTPUT-Procedure.html#GUID-716748F9-A7CC-4BB4-898A-61215609525F)
- [GET_BOOLEAN Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_BOOLEAN-Function.html#GUID-16DDCCF8-CA67-4DE4-B3BC-8D52AE3DD0A3)
- [GET_CLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_CLOB-Function.html#GUID-360982E5-800D-452A-A100-2FDB86075046)
- [GET_CLOB_OUTPUT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_CLOB_OUTPUT-Function.html#GUID-DBF0A813-D22B-4C21-A455-3AF2E10EEE68)
- [GET_COUNT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_COUNT-Function.html#GUID-00808027-C1E0-4FFF-8983-BCDFE44B7BD2)
- [GET_DATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DATE-Function.html#GUID-8635BAEB-97C9-4FC2-A199-15BE6605FAA8)
- [GET_MEMBERS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBERS-Function.html#GUID-461C42D7-CE76-4A8A-9C71-1E5706084F51)
- [GET_NUMBER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_NUMBER-Function.html#GUID-272C06D5-17F8-474D-B1A3-6ED0675F89E2)
- [GET_SDO_GEOMETRY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SDO_GEOMETRY-Function.html#GUID-A4C62208-37BA-444F-ADE0-CBEC5584E0D1)
- [GET_T_NUMBER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_T_NUMBER-Function.html#GUID-4E16284C-7C85-42EE-8DD3-FD8B556200EE)
- [GET_T_VARCHAR2 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_T_VARCHAR2-Function.html#GUID-D4EA7B1A-5F27-41D3-895F-D4C2F567A509)
- [GET_VALUE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_VALUE-Function.html#GUID-AA42ED2A-B8E1-48A3-A24C-904528B56BB9)
- [GET_VALUE_KIND Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_VALUE_KIND-Function.html#GUID-A75D065B-9817-4822-B158-DA26CC83CB94)
- [GET_VARCHAR2 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.GET_VARCHAR2-Function.html#GUID-BC908E35-57DC-46B3-BFB2-EFF092855D25)
- [INITIALIZE_CLOB_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INITIALIZE_CLOB_OUTPUT-Procedure.html#GUID-F0269C54-A421-4185-AF06-AF71780EE7A4)
- [INITIALIZE_OUTPUT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INITIALIZE_OUTPUT-Procedure.html#GUID-F79A155E-7C62-432A-A0F9-C8B528ED476D)
- [OPEN_ARRAY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OPEN_ARRAY-Procedure.html#GUID-2B346A28-2FB5-4CEC-9B86-33B8B3FFD94B)
- [OPEN_OBJECT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OPEN_OBJECT-Procedure.html#GUID-652FE97B-B33C-4EC2-A8AB-9056E8B49477)
- [PARSE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE-Procedure-Signature-1.html#GUID-2083D6CF-9B16-4770-BF3B-D1BF63B6AC2D)
- [PARSE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE-Procedure-Signature-2.html#GUID-4CDBACA2-B124-4097-B06A-EC62FEFB7F81)
- [STRINGIFY Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-1.html#GUID-5F5197FC-EE7A-4555-A130-9115927872AD)
- [STRINGIFY Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-2.html#GUID-0920AFBD-60E5-40F7-BDFB-422F03712E54)
- [STRINGIFY Function Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-3.html#GUID-EC91F85E-2C12-471C-83BE-92CA0CE7C05E)
- [STRINGIFY Function Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-4.html#GUID-4BAB8902-824E-4BE7-BC8C-A9AFCF576DB6)
- [STRINGIFY Function Signature 5](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRINGIFY-Function-Signature-5.html#GUID-969B08BA-2901-48DE-A413-14AF77A62880)
- [TO_MEMBER_NAME Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/To_MEMBER_NAME-Function.html#GUID-98EDFE64-EAB0-4D5D-BA73-AE7E3A649550)
- [TO_XMLTYPE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_XMLTYPE-Function.html#GUID-33E317C6-6FD5-42A5-9336-8D334CDBD256)
- [TO_XMLTYPE_SQL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_XMLTYPE_SQL-Function.html#GUID-383DC894-A99A-41EB-9699-53330B5E0B9C)
- [WRITE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-1.html#GUID-58D8250D-F197-4A3F-8B07-BC2BFB8669C8)
- [WRITE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-2.html#GUID-065C91C6-B7E5-44FE-8B90-493BB715A6F5)
- [WRITE Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-3.html#GUID-58B2916A-8900-4101-B6F7-DBABD86D3710)
- [WRITE Procedure Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-4.html#GUID-28FBF1A3-BF92-4246-86FF-3C2174DDB0A8)
- [WRITE Procedure Signature 5](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-5.html#GUID-C7313A58-03A4-4E68-84D3-4018367D924E)
- [WRITE Procedure Signature 6](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-6.html#GUID-BFA54B24-4B57-4837-9B1B-80EF67458164)
- [WRITE Procedure Signature 7](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-7.html#GUID-24AE7B10-8A77-41E8-A7DC-505E6556DD22)
- [WRITE Procedure Signature 8](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-8.html#GUID-EFEFA40A-64E5-4AD2-BCF5-55566BE4784A)
- [WRITE Procedure Signature 9](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-9.html#GUID-E1BE2CD7-8300-4E1F-9B4E-2501A9D8F68A)
- [WRITE Procedure Signature 10](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-10.html#GUID-BA89B9AF-F60D-43CB-8F03-71F993FC1861)
- [WRITE Procedure Signature 11](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-11.html#GUID-32EA8889-C3B3-4003-AF22-2432258FC35F)
- [WRITE Procedure Signature 12](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-12.html#GUID-80EFE40C-F9E4-43C5-8D39-0694248C0248)
- [WRITE Procedure Signature 13](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-13.html#GUID-F1B594DF-1B2E-4BDA-804C-B16334135B96)
- [WRITE Procedure Signature 14](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-14.html#GUID-B066CE5A-225D-4A79-ABD3-B1A341FB789D)
- [WRITE Procedure Signature 15](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-15.html#GUID-78E9663F-1EFA-4793-A9ED-EB0F728D2B77)
- [WRITE Procedure Signature 16](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-16.html#GUID-00D45BF0-17D5-4310-B822-6E9D9AC3AFF4)
- [WRITE Procedure Signature 17](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-17.html#GUID-FA6E300C-0346-4D03-9DC5-2A83F8AA4D69)
- [WRITE Procedure Signature 18](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-18.html#GUID-780CD430-5A8A-49B8-AD20-259B60E9798E)
- [WRITE Procedure Signature 19](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-19.html#GUID-B01064B0-5072-4061-8B23-5680619F75BE)
- [WRITE Procedure Signature 20](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-20.html#GUID-ED758CF5-C942-4B8B-8BA5-CF1A63B69EB2)
- [WRITE Procedure Signature 21](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-21.html#GUID-F4F0CE27-674A-401D-936B-E78C245F77B5)
- [WRITE_CONTEXT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE_CONTEXT-Procedure.html#GUID-8C3BA2F1-36E0-45B1-B095-5B4492650838)

------------------------------------------------------------------------

## 39.1 APEX_JSON Overview and Examples

To read from a string that contains JSON data, first use `parse()` to convert the string to an internal format. Then use the `get_%` routines (for example, `get_varchar2()`, `get_number()`, ...) to access the data and `find_paths_like() `to search.

Alternatively, use `to_xmltype()` to convert a JSON string to an xmltype.

This package also contains procedures to generate JSON-formatted output. Use the overloaded `open_%()`, `close_%()` and `write()` procedures for writing to the SYS.HTP buffer. To write to a temporary CLOB instead, use `initialize_clob_output()`, `get_clob_output()`, and `free_output()` for managing the output buffer.

Example 1

This example parses a JSON string and prints the value of member variable `"a"`.

```
DECLARE
    s varchar2(32767) := '{ "a": 1, "b": ["hello", "world"]}';
BEGIN
    apex_json.parse(s);
    sys.dbms_output.put_line('a is '||apex_json.get_varchar2(p_path => 'a'));
END;
```

Example 2

This example converts a JSON string to XML and uses `XMLTABLE` to query member values.

```
select col1, col2
from xmltable (
        '/json/row'
        passing apex_json.to_xmltype('[{"col1": 1, "col2": "hello"},'||
                '{"col1": 2, "col2": "world"}]')
        columns
           col1 number path '/row/col1',
           col2 varchar2(5) path '/row/col2' );
```

Example 3

This example writes a nested JSON object to the HTP buffer.

```
BEGIN
    apex_json.open_object;        -- {
    apex_json.write('a', 1);    --   "a":1
    apex_json.open_array('b');  --  ,"b":[
    apex_json.open_object;    --    {
    apex_json.write('c',2); --      "c":2
    apex_json.close_object;   --    }
    apex_json.write('hello'); --   ,"hello"
    apex_json.write('world'); --   ,"world"
    apex_json.close_all;          --  ]
                          -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.2 Constants and Data Types

Parser Interface

The following constants are used for the parser interface:

```
subtype t_kind is binary_integer range 1 .. 8;
c_null     constant t_kind := 1;
c_true     constant t_kind := 2;
c_false    constant t_kind := 3;
c_number   constant t_kind := 4;
c_varchar2 constant t_kind := 5;
c_object   constant t_kind := 6;
c_array    constant t_kind := 7;
c_clob     constant t_kind := 8;
```

Storage for JSON Data

JSON data is stored in an index by varchar2 table. The JSON values are stored as records. The discriminator "kind" determines whether the value is null, true, false, a number, a varchar2, a clob, an object or an array. It depends on "kind" which record fields are used and how. If not explicitly mentioned below, the other record fields' values are undefined:

\* c_null: -

\* c_true: -

\* c_false: -

\* c_number: number_value contains the number value

\* c_varchar2: varchar2_value contains the varchar2 value

\* c_clob: clob_value contains the clob

\* c_object: object_members contains the names of the object's members

\* c_array: number_value contains the array length

```
type t_value is record (
   kind           t_kind,
   number_value   number,
   varchar2_value varchar2(32767),
   clob_value clob,
   object_members apex_t_varchar2 );
type t_values is table of t_value index by varchar2(32767);
```

Default Format for Dates

```
c_date_iso8601 constant varchar2(30) := 'yyyy-mm-dd"T"hh24:mi:ss"Z"';
```

Default JSON Values Table

```
g_values t_values;
```

Errors Thrown for PARSE()

```
e_parse_error     exception;
pragma exception_init(e_parse_error, -20987);
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.3 CLOSE_ALL Procedure

This procedure closes all objects and arrays up to the outermost nesting level.

Syntax

```
APEX_JSON.CLOSE_ALL;
```

Parameters

None.

Example

See [APEX_JSON Overview and Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview-and-Examples.html#GUID-59567A48-7F81-4748-8998-CF3081286EC8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.4 CLOSE_ARRAY Procedure

This procedure writes a close bracket symbol as follows:

```
]
```

Syntax

```
APEX_JSON.CLOSE_ARRAY ();
```

Parameters

None.

Example

See [APEX_JSON Overview and Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview-and-Examples.html#GUID-59567A48-7F81-4748-8998-CF3081286EC8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.5 CLOSE_OBJECT Procedure

This procedure writes a close curly bracket symbol as follows:

```
}
```

Syntax

```
APEX_JSON.CLOSE_OBJECT ();
```

Parameters

None.

Example

See [APEX_JSON Overview and Examples](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Package-Overview-and-Examples.html#GUID-59567A48-7F81-4748-8998-CF3081286EC8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.6 DOES_EXIST Function

This function determines whether the given path points to an existing value.

Syntax

```
APEX_JSON.DOES_EXIST (
   p_path             IN VARCHAR2,
   p0                 IN VARCHAR2 DEFAULT NULL,
   p1                 IN VARCHAR2 DEFAULT NULL,
   p2                 IN VARCHAR2 DEFAULT NULL,
   p3                 IN VARCHAR2 DEFAULT NULL,
   p4                 IN VARCHAR2 DEFAULT NULL,
   p_values           IN t_values DEFAULT g_values )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each %N in `p_path` is replaced by `pN` and every i-th %s or %d is replaced by the `p[i-1]`. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns

| Return  | Description                                    |
|:--------|:-----------------------------------------------|
| `TRUE`  | Given path points to an existing value.        |
| `FALSE` | Given path does not point to an existing value |

Example

This example parses a JSON string and prints whether it contains values under a path.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "items": [ 1, 2, { "foo": true } ] }');
    IF apex_json.does_exist(p_path => 'items[%d].foo', p0 => 3, p_values => j)
    THEN
        dbms_output.put_line('found items[3].foo');
    END IF;
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.7 FIND_PATHS_LIKE Function

This function returns paths into `p_values` that match a given pattern.

Syntax

```
APEX_JSON.FIND_PATHS_LIKE (
    p_return_path      IN VARCHAR2,
    p_subpath          IN VARCHAR2 DEFAULT NULL,
    p_value            IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN apex_t_varchar2;
```

Parameters

| Parameter       | Description                                      |
|:----------------|:-------------------------------------------------|
| `p_return_path` | Search pattern for the return path..             |
| `p_subpath`     | (Optional) Search pattern under `p_return_path`. |
| `p_value`       | (Optional) Search pattern for value.             |
| `p_values`      | Parsed JSON members. Default is `g_values`.      |

Returns/Raised Errors

| Return/Error | Description |
|:---|:---|
| `apex_t_varchar2` | Table of paths that match the pattern. |
| `VALUE_ERROR` | Raises this error if `p_values(p_path` is not an array or object. |

Example

This example parses a JSON string, finds paths that match a pattern, and prints the values under the paths.

```
DECLARE
    j       apex_json.t_values;
    l_paths apex_t_varchar2;
BEGIN
    apex_json.parse(j, '{ "items": [ { "name": "Amulet of Yendor", "magical": true }, '||
                                     { "name": "Slippers",  "magical": "rather not" } ]}');
    l_paths := apex_json.find_paths_like (
        p_values      => j,
        p_return_path => 'items[%]',
        p_subpath     => '.magical',
        p_value       => 'true' );
    dbms_output.put_line('Magical items:');
    FOR i in 1 .. l_paths.count LOOP
        dbms_output.put_line(apex_json.get_varchar2(p_values => j, p_path => l_paths(i)||'.name'));
    END LOOP;
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.8 FLUSH Procedure

This procedure flushes pending changes. Note that close procedures automatically flush.

Syntax

```
APEX_JSON.FLUSH
```

Parameters

None.

Example

This example writes incomplete JSON.

```
BEGIN
  apex_json.open_object;
  apex_json.write('attr', 'value');
  apex_json.flush;
  sys.htp.p('the "}" is missing');
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.9 FREE_OUTPUT Procedure

Frees output resources. Call this procedure after process if you are using `INITIALIZE_CLOB_OUTPUT` to write to a temporary `CLOB`.

Syntax

```
APEX_JSON.FREE_OUTPUT;
```

Example

This example configures `APEX_JSON` for `CLOB` output, generate `JSON`, print the `CLOB` with `DBMS_OUTPUT`, and finally free the `CLOB`.

```
BEGIN
    apex_json.initialize_clob_output;

    apex_json.open_object;
    apex_json.write('hello', 'world');
    apex_json.close_object;

    dbms_output.put_line(apex_json.get_clob_output);

    apex_json.free_output;
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.10 GET_BOOLEAN Function

This function returns a boolean member value.

Syntax

```
APEX_JSON.GET_BOOLEAN (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_default          IN BOOLEAN  DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each %N in `p_path` is replaced by `pN` and every i-th %s or %d is replaced by the `p[i-1]`. |
| `p_default` | The default value if the member does not exist. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns

| Return        | Description                                             |
|:--------------|:--------------------------------------------------------|
| `TRUE`        | Value at the given path position.                       |
| `FALSE`       | Value at the given path position.                       |
| `NULL`        | Value at the given path position.                       |
| `VALUE_ERROR` | Raises this error if `p_values(p_path)` is not boolean. |

Example

This example parses a JSON string and prints the boolean value at a position.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "items": [ 1, 2, { "foo": true } ] }');
    IF apex_json.get_boolean(p_path=>'items[%d].foo', p0=>3,p_values=>j) THEN
        dbms_output.put_line('items[3].foo is true');
    END IF;
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.11 GET_CLOB Function

This function returns clob member value. This function auto-converts `varchar2`, boolean, and number values.

Syntax

```
GET_CLOB (
    p_path    IN VARCHAR2,
    p0        IN VARCHAR2 DEFAULT NULL,
    p1        IN VARCHAR2 DEFAULT NULL,
    p2        IN VARCHAR2 DEFAULT NULL,
    p3        IN VARCHAR2 DEFAULT NULL,
    p4        IN VARCHAR2 DEFAULT NULL,
    p_default IN CLOB     DEFAULT NULL,
    p_values  in t_values DEFAULT g_values )
RETURN CLOB
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_values` | Parsed JSON members. defaults to `g_values`. |
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` is replaced with `pN` and every `i-th %s` or `%d` is replaced with `p[i-1]`. |
| `p_default` | Default value if the member does not exist. |

Returns/Raised Errors

| Return/Error  | Description                                     |
|:--------------|:------------------------------------------------|
| `a clob`      | Value at the given path position.               |
| `VALUE_ERROR` | If `p_values(p_path)` is an array or an object. |

Example

Parse a JSON string and print the value at a position.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "items": [ 1, 2, { "foo": 42 } ] }');
    dbms_output.put_line(apex_json.get_clob (
    p_values => j,
    p_path => 'items[%d].foo',
    p0 => 3));
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.12 GET_CLOB_OUTPUT Function

Returns the temporary `CLOB` that you created with `INITIALIZE_CLOB_OUTPUT`.

Syntax

```
APEX_JSON.GET_CLOB_OUTPUT (
    p_free  IN BOOLEAN  DEFAULT FALSE )
    RETURN CLOB;
```

Parameters

| Parameter | Description                                           |
|:----------|:------------------------------------------------------|
| `p_free`  | If `true`, frees output resources. Defaults to false. |

Example 1

This example configures `APEX_JSON` for `CLOB` output, generates `JSON`, prints the `CLOB` with `DBMS_OUTPUT`, and finally frees the `CLOB`.

```
BEGIN
  apex_json.initialize_clob_output;

  apex_json.open_object;
  apex_json.write('hello', 'world');
  apex_json.close_object;

  dbms_output.put_line(apex_json.get_clob_output);

 apex_json.free_output;
END;
```

Example 2

This example configures `APEX_JSON` for CLOB output, generates JSON, and prints and frees the CLOB with `DBMS_OUTPUT` and `GET_CLOB_OUTPUT`.

```
BEGIN
  apex_json.initialize_clob_output;

  apex_json.open_object;
  apex_json.write('hello', 'world');
  apex_json.close_object;

  dbms_output.put_line(apex_json.get_clob_output( p_free => true ) );
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.13 GET_COUNT Function

This function returns the number of array elements or object members.

Syntax

```
APEX_JSON.GET_COUNT (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each %N in `p_path` is replaced by `pN` and every i-th %s or %d is replaced by the `p[i-1]`. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns/Raised Errors

| Return/Error | Description |
|:---|:---|
| `NUMBER` | The number of array elements or object members or null if the array or object could not be found |
| `VALUE_ERROR` | Raises this error if `p_values(p_path)` is not an array or object. |

Example

This example parses a JSON string and prints the number of members at positions.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "foo": 3, "bar": [1, 2, 3, 4] }');
    dbms_output.put_line(apex_json.get_count(p_path=>'.',p_values=>j)); -- 2 (foo and bar)
    dbms_output.put_line(apex_json.get_count(p_path=>'bar',p_values=>j)); -- 4
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.14 GET_DATE Function

This function returns a date member value.

Syntax

```
APEX_JSON.GET_DATE (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_default          IN DATE     DEFAULT NULL,
    p_format           IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN DATE;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each %N in `p_path` is replaced by `pN` and every i-th %s or %d is replaced by the `p[i-1]`. |
| `p_default` | The default value if the member does not exist. |
| `p_format` | The date format mask. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns/Raised Errors

| Return        | Description                                            |
|:--------------|:-------------------------------------------------------|
| `DATE`        | Returns the date.                                      |
| `VALUE_ERROR` | Raises this error if `p_values(p_path)` is not a date. |

Example

This example parses a JSON string and prints the value at a position.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "items": [ 1, 2, { "foo": "2014-04-29T10:08:00Z" }] }');

dbms_output.put_line(to_char(apex_json.get_date(p_path=>'items[%d].foo',p0=>3, p_values=>j), 'DD-Mon-YYYY'));
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.15 GET_MEMBERS Function

This function returns the table of `OBJECT_MEMBERS` names for an object.

Syntax

```
APEX_JSON.GET_MEMBERS (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN APEX_T_VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` is replaced by `pN` and every `i-th%` or `%d` is replaced by the `p[i-1]`. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns/Raised Errors

| Return/Error | Description |
|:---|:---|
| `OBJECT_MEMBERS` | The `OBJECT_MEMBERS` of the object or null if the object could not be found. |
| `VALUE_ERROR` | Raises this error if `p_values(p_path)` is not an array or object. |

Example

This example parses a JSON string and prints members at positions.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "foo": 3, "bar": [1, 2, 3, 4] }');
    dbms_output.put_line(apex_json.get_members(p_path=>'.',p_values=>j)(1)); -- foo
    dbms_output.put_line(apex_json.get_members(p_path=>'.',p_values=>j)(2)); -- bar
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.16 GET_NUMBER Function

This function returns a numeric member value.

Syntax

```
APEX_JSON.GET_NUMBER (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_default          IN BOOLEAN  DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` is replaced by `pN` and every `i-th%` or `%d` is replaced by the `p[i-1]`. |
| `p_default` | The default value if the member does not exist. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns and Raised Errors

| Return        | Description                                              |
|:--------------|:---------------------------------------------------------|
| `NUMBER`      | The value at the given path position.                    |
| `VALUE_ERROR` | Raises this error if `p_values(p_path)` is not a number. |

Example

This example parses a JSON string and prints the value at a position.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "items": [ 1, 2, { "foo": 42 } ] }');
    dbms_output.put_line(apex_json.get_number(p_path=>'items[%d].foo',p0=> 3,p_values=>j));
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.17 GET_SDO_GEOMETRY Function

This function returns SDO_GEOMETRY member value from a GeoJSON member. This function supports only two-dimensional geometry objects.

Note:

This function is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

Syntax

```
APEX_JSON.GET_SDO_GEOMETRY FUNCTION (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2  DEFAULT NULL,
    p1                 IN VARCHAR2  DEFAULT NULL,
    p2                 IN VARCHAR2  DEFAULT NULL,
    p3                 IN VARCHAR2  DEFAULT NULL,
    p4                 IN VARCHAR2  DEFAULT NULL,
    p_srid             IN NUMBER    DEFAULT 4326,
    p_values           IN t_values  DEFAULT g_values )
    RETURN mdsys.sdo_geometry;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_values` | Parsed JSON members. Defaults to `g_values`. |
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` is replaced by `pN` and every `i-th %s` or `%d` is replaced by the `p[i-1]`. |
| `p_srid` | Coordinate system (SRID) to return the SDO_GEOMETRY in. |

Returns

| Return     | Description                       |
|:-----------|:----------------------------------|
| a geometry | Value at the given path position. |

Errors Raised

| Raise         | Description                                    |
|:--------------|:-----------------------------------------------|
| `VALUE_ERROR` | If `p_values(p_path)` is not a GeoJSON object. |

Example

The following example parses a JSON string and prints the value at a position.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "items": [ 1, 2, { "geom": {"type":"Point","coordinates":[-122.7783356,38.8198318,1.85 ] } } ] }');
    dbms_output.put_line(to_char(apex_json.get_sdo_geometry (
                                     p_values => j,
                                     p_path   => 'items[%d].geom',
                                     p0       => 3) ) );
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.18 GET_T_NUMBER Function

This function returns the numeric attributes of an array.

Syntax

```
APEX_JSON.GET_T_NUMBER (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
    RETURN apex_t_number;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` is replaced by `pN` and every `i-th%` or `%d` is replaced by the `p[i-1]`. |
| `p_values` | Parsed JSON members. Default `p_values`. |

Returns

Array member values if the referenced `t_value` is an array. An array with just the referenced value if its type can be converted to a number.

| Return        | Description           |
|:--------------|:----------------------|
| `VALUE_ERROR` | On conversion errors. |

Example

This example parses a JSON string and prints the value at position 1.

```
    declare
         j          apex_json.t_values;
         l_elements apex_t_number;
     begin
         apex_json.parse(j, '{ "foo": [111, 222], "bar": 333 }');
         l_elements := apex_json.get_t_number (
                           p_values => j,
                           p_path   => 'foo' );
         for i in 1 .. l_elements.count loop
             sys.dbms_output.put_line(i||':'||l_elements(i));
         end loop;
         l_elements := apex_json.get_t_number (
                           p_values => j,
                           p_path   => 'bar' );
         for i in 1 .. l_elements.count loop
             sys.dbms_output.put_line(i||':'||l_elements(i));
         end loop;
     end;

   Output:
     1:111
     2:222
     1:333
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.19 GET_T_VARCHAR2 Function

This function returns the varchar2 attributes of an array.

Syntax

```
APEX_JSON.GET_T_VARCHAR2 (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
    RETURN apex_t_varchar2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each %N in `p_path` is replaced by `pN` and every `i-th%` or `%d` is replaced by the `p[i-1]`. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns

Array member values if the referenced `t_value` is an array. An array with just the referenced value if its type can be converted to a varchar2.

Raises

| Return        | Description           |
|:--------------|:----------------------|
| `VALUE_ERROR` | On conversion errors. |

Example

This example parses a JSON and prints the value at position 1.

```
declare
    j          apex_json.t_values;
    l_elements apex_t_varchar2;
begin
    apex_json.parse(j, '{ "foo": ["one", "two"], "bar": "three" }');
    l_elements := apex_json.get_t_varchar2 (
                      p_values => j,
                      p_path   => 'foo' );
    for i in 1 .. l_elements.count loop
        sys.dbms_output.put_line(i||':'||l_elements(i));
    end loop;
    l_elements := apex_json.get_t_varchar2 (
                      p_values => j,
                      p_path   => 'bar' );
    for i in 1 .. l_elements.count loop
        sys.dbms_output.put_line(i||':'||l_elements(i));
    end loop;
end;

Output:
  1:one
  2:two
  1:three
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.20 GET_VALUE Function

This function returns the t_value.

Syntax

```
APEX_JSON.GET_VALUE (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN t_value;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` is replaced by `pN` and every `i-th%` or `%d` is replaced by the `p[i-1]`. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns/Raised Errors

| Return | Description |
|:---|:---|
| `t_value` | The `t_value` at the given path position. The record attributes are null if no data is found. |
| `VALUE_ERROR` | Raises this error if `p_values(p_path)` is not an array or object. |

Example

This example parses a JSON string and prints attributes of values at positions.

```
DECLARE
    j apex_json.t_values;
    v apex_json.t_value;
BEGIN
    apex_json.parse(j, '{ "foo": 3, "bar": [1, 2, 3, 4] }');
    v := apex_json.get_value(p_path=>'bar[%d]',p0=> 2,p_values=>j); -- returns the t_value for bar[2]
    dbms_output.put_line(v.number_value); -- 2
    v := apex_json.get_value(p_path=>'does.not.exist',p_values=>j);
    dbms_output.put_line(case when v.kind is null then 'not found!' end);
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.21 GET_VALUE_KIND Function

This function returns the kind of the value at a path position.

Syntax

```
APEX_JSON.GET_VALUE_KIND (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
    RETURN t_kind;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_values` | Parsed JSON members. Defaults to `g_values`. |
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` is replaced by `pN` and every `i-th %s` or `%d` is replaced by the `p[i-1]`. |

Table 39-1 Returns

| Return | Description |
|:---|:---|
| `t_kind` | The `t_kind` of the value at the given path position. Returns NULL if no data is found. |

Example

This example parses a JSON string and prints the kind of an attribute.

```
DECLARE
    j apex_json.t_values;
    k apex_json.t_kind;

    PROCEDURE print_kind( p_kind in apex_json.t_kind ) IS
    BEGIN
        dbms_output.put_line(
            CASE p_kind
                WHEN apex_json.c_null      THEN 'NULL'
                WHEN apex_json.c_true      THEN 'true'
                WHEN apex_json.c_false     THEN 'false'
                WHEN apex_json.c_number    THEN 'NUMBER'
                WHEN apex_json.c_varchar2  THEN 'VARCHAR2'
                WHEN apex_json.c_object    THEN 'OBJECT'
                WHEN apex_json.c_array     THEN 'ARRAY'
                WHEN apex_json.c_clob      THEN 'CLOB' end );
    END print_kind;
BEGIN
    apex_json.parse(j, '{ "foo": 3, "bar": [1, 2, 3, 4] }');
    k := apex_json.get_value_kind (
             p_values => j,
             p_path   => 'bar[%d]',
             p0       => 2); -- returns the t_value for bar[2]
    print_kind(k);      -- 'NUMBER'
    k := apex_json.get_value_kind (
             p_values => j,
             p_path   => 'bar');
    print_kind(k);      -- 'ARRAY'
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.22 GET_VARCHAR2 Function

This function returns a varchar2 member value. This function converts boolean and number values to varchar2 values.

Syntax

```
APEX_JSON.GET_VARCHAR2 (
    p_path             IN VARCHAR2,
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_default          IN BOOLEAN  DEFAULT NULL,
    p_values           IN t_values DEFAULT g_values )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_path` | Index into `p_values`. |
| `p[0-4]` | Each %N in `p_path` is replaced by `pN` and every i-th %s or %d is replaced by the `p[i-1]`. |
| `p_default` | The default value if the member does not exist. |
| `p_values` | Parsed JSON members. The default is `g_values`. |

Returns and Raised Errors

| Return/Error | Description |
|:---|:---|
| `VARCHAR2` | This is the value at the given path position. |
| `VALUE_ERROR` | Raises this error if `p_values(p_path)` is not an array or object. |

Example

This example parses a JSON string and prints the value at a position.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "items": [ 1, 2, { "foo": 42 } ] }');
    dbms_output.put_line(apex_json.get_varchar2(p_path=>'items[%d].foo',p0=> 3,p_values=>j));
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.23 INITIALIZE_CLOB_OUTPUT Procedure

This procedure initializes the output interface to write to a temporary CLOB. The default is to write to `SYS.HTP`. If using CLOB output, call `FREE_OUTPUT()` at the end to free the `CLOB`.

Syntax

```
APEX_JSON.INITIALIZE_CLOB_OUTPUT (
    p_dur         IN PLS_INTEGER DEFAULT sys.dbms_lob.call,
    p_cache       IN BOOLEAN     DEFAULT TRUE,
    p_indent      IN PLS_INTEGER DEFAULT NULL,
    p_preserve    IN BOOLEAN     DEFAULT FALSE )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d201735e80" style="text-align: left;" data-valign="bottom" width="23%">Parameter</th>
<th id="d201735e82" style="text-align: left;" data-valign="bottom" width="77%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d201735e86" style="text-align: left;" data-valign="top" width="23%" headers="d201735e80 "><code class="codeph">p_dur</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d201735e86 d201735e82 ">Duration of the temporary <code class="codeph">CLOB</code>. this can be <code class="codeph">DBMS_LOB.SESSION</code> or <code class="codeph">DBMS_LOB.CALL</code> (the default).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d201735e101" style="text-align: left;" data-valign="top" width="23%" headers="d201735e80 "><code class="codeph">p_cache</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d201735e101 d201735e82 ">Specifies if the lob should be read into buffer cache or not.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d201735e107" style="text-align: left;" data-valign="top" width="23%" headers="d201735e80 "><code class="codeph">p_indent</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d201735e107 d201735e82 ">Indent level. Defaults to 2 if debug is turned on, 0 otherwise.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d201735e113" style="text-align: left;" data-valign="top" width="23%" headers="d201735e80 "><code class="codeph">p_preserve</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d201735e113 d201735e82 "><p>Whether to preserve the currently active output object.</p>
<p>After calling <code class="codeph">FREE_OUTPUT</code>, subsequent write calls will be executed on the preserved output. Defaults to <code class="codeph">FALSE</code>.</p>
<p>If HTP output has already been initialized and a CLOB needs to be created, use <code class="codeph">p_preserve =&gt; true</code>. After <code class="codeph">FREE_OUTPUT</code>, subsequent output will be directed to the original HTP output again.</p>
<p>If <code class="codeph">p_preserve</code> is <code class="codeph">true</code>, you must call <code class="codeph">FREE_OUTPUT</code> after JSON processing.</p></td>
</tr>
</tbody>
</table>

Example

This example configures `APEX_JSON` for `CLOB` output, generates `JSON`, prints the `CLOB` with `DBMS_OUTPUT`, and finally frees the `CLOB`.

```
BEGIN
  apex_json.initialize_clob_output( p_preserve => true );

  apex_json.open_object;
  apex_json.write('hello', 'world');
  apex_json.close_object;

  dbms_output.put_line(apex_json.get_clob_output);

  apex_json.free_output;
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.24 INITIALIZE_OUTPUT Procedure

This procedure initializes the output interface. You only have to call this procedure if you want to modify the parameters below. Initially, output is already configured with the defaults mentioned in the parameter table.

Syntax

```
APEX_JSON.INITIALIZE_OUTPUT (
    p_http_header     IN BOOLEAN     DEFAULT TRUE,
    p_http_cache      IN BOOLEAN     DEFAULT FALSE,
    p_http_cache_etag IN VARCHAR2    DEFAULT NULL,
    p_indent          IN PLS_INTEGER DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_http_header` | If TRUE (default), writes an application/JSON mime type header. |
| `p_http_cache` | This parameter is only relevant if `p_http_header` is TRUE. If TRUE, writes Cache-Control: max-age=315360000. If FALSE (the default), writes Cache-Control: no-cache. Otherwise, does not write Cache-Control. |
| `http_cache_etag` | If not null, writes an `etag` header. This parameter is only used if `P_HTTP_CACHE` is true. |
| `p_indent` | Indent level. Defaults to 2, if debug is turned on, otherwise defaults to 0. |

Example

This example configures `APEX_JSON` to not emit default headers, because they are written directly.

```
BEGIN
  apex_json.initialize_output (
      p_http_header => false );

  sys.owa_util.mime_header('application/json', false);
  sys.owa_util.status_line(429, 'Too Many Requests');
  sys.owa_util.http_header_close;
  --
  apex_json.open_object;
  apex_json.write('maxRequestsPerSecond', 10);
  apex_json.close_object;
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.25 OPEN_ARRAY Procedure

This procedure writes an open bracket symbol as follows:

``` oac_no_warn
[
```

Syntax

```
APEX_JSON.OPEN_ARRAY (
    p_name     IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | If not null, write an object attribute name and colon before the opening bracket. |

Example

This example performs a `write { "array":[ 1 ,[ ] ] }`.

```
BEGIN
  apex_json.open_object; -- {
  apex_json.open_array('array'); -- "array": [
  apex_json.write(1); -- 1
  apex_json.open_array; -- , [
  apex_json.close_array; -- ]
  apex_json.close_array; -- ]
  apex_json.close_object; -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.26 OPEN_OBJECT Procedure

This procedure writes an open curly bracket symbol as follows:

```
{
```

Syntax

```
APEX_JSON.OPEN_OBJECT (
    p_name     IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | If not null, write an object attribute name and colon before the opening brace. |

Example

This example performs a `write { "obj": { "obj-attr": "value" }}`.

```
BEGIN
  apex_json.open_object; -- {
  apex_json.open_object('obj'); -- "obj": {
  apex_json.write('obj-attr', 'value'); -- "obj-attr": "value"
  apex_json.close_all; -- }}
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.27 PARSE Procedure Signature 1

This procedure parses a JSON-formatted `VARCHAR2` or `CLOB` and puts the members into `p_values`.

Syntax

```
APEX_JSON.PARSE (
    p_values   IN OUT NOCOPY   t_values,
    p_source   IN VARCHAR2,
    p_strict   IN BOOLEAN      DEFAULT TRUE );

APEX_JSON.PARSE (
    p_values   IN OUT NOCOPY   t_values,
    p_source   IN CLOB,
    p_strict   IN BOOLEAN      DEFAULT TRUE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_values` | An index by `VARCHAR2` result array which contains the JSON members and values. The default is `g_values`. |
| `p_source` | The JSON source (`VARCHAR2` or `CLOB`) |
| `p_strict` | If `TRUE` (default), enforce strict JSON rules |

Example

This example parses JSON and prints member values.

```
DECLARE
    l_values apex_json.t_values;
BEGIN
    apex_json.parse (
        p_values => l_values,
        p_source => '{ "type": "circle", "coord": [10, 20] }' );
    sys.htp.p('Point at '||
        apex_json.get_number (
            p_values => l_values,
            p_path   => 'coord[1]')||
        ','||
        apex_json.get_number (
            p_values => l_values,
            p_path   => 'coord[2]'));
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.28 PARSE Procedure Signature 2

This procedure parses a JSON-formatted `varchar2` or `clob` and puts the members into the package global `g_values`. This simplified API works similar to the `parse()` procedure for signature 1, but saves the developer from declaring a local variable for parsed JSON data and passing it to each JSON API call.

Syntax

```
APEX_JSON.PARSE (
    p_source    IN VARCHAR2,
    p_strict    IN BOOLEAN  DEFAULT TRUE );

APEX_JSON.PARSE (
    p_source    IN CLOB,
    p_strict    IN BOOLEAN  DEFAULT TRUE );
```

Parameters

| Parameter  | Description                                     |
|:-----------|:------------------------------------------------|
| `p_source` | The JSON source (`VARCHAR2` or `CLOB`).         |
| `p_strict` | If `TRUE` (default), enforce strict JSON rules. |

Example

This example parses JSON and prints member values.

```
apex_json.parse('{ "type": "circle", "coord": [10, 20] }');
sys.htp.p('Point at '||
    apex_json.get_number(p_path=>'coord[1]')||
    ','||
    apex_json.get_number(p_path=>'coord[2]'));
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.29 STRINGIFY Function Signature 1

This function converts a string to an escaped JSON value.

Syntax

```
APEX_JSON.STRINGIFY (
    p_value  IN VARCHAR2 )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description                 |
|:----------|:----------------------------|
| `p_value` | The string to be converted. |

Returns

| Return     | Description                           |
|:-----------|:--------------------------------------|
| `VARCHAR2` | The converted and escaped JSON value. |

Example

This example is a query that returns a JSON `varchar2` value.

```
select apex_json.stringify('line 1'||chr(10)||'line 2') from dual;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.30 STRINGIFY Function Signature 2

This function converts a number to an escaped JSON value.

Syntax

```
APEX_JSON.STRINGIFY (
    p_value  IN NUMBER )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description                 |
|:----------|:----------------------------|
| `p_value` | The number to be converted. |

Returns

| Return     | Description                           |
|:-----------|:--------------------------------------|
| `VARCHAR2` | The converted and escaped JSON value. |

Example

This example is a query that returns a JSON number value.

```
select apex_json.stringify(-1/10) from dual
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.31 STRINGIFY Function Signature 3

This function converts a date to an escaped JSON value.

Syntax

```
APEX_JSON.STRINGIFY (
    p_value  IN DATE,
    p_format IN VARCHAR2 DEFAULT c_date_iso8601 )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description                     |
|:----------|:--------------------------------|
| `p_value` | The date value to be converted. |

Returns

| Return     | Description                           |
|:-----------|:--------------------------------------|
| `VARCHAR2` | The converted and escaped JSON value. |

Example

This example is a query that returns a JSON `varchar2` value that is suitable to be converted to dates.

```
select apex_json.stringify(sysdate) from dual
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.32 STRINGIFY Function Signature 4

This function converts a boolean value to an escaped JSON value.

Syntax

```
APEX_JSON.STRINGIFY (
    p_value  IN BOOLEAN )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description                        |
|:----------|:-----------------------------------|
| `p_value` | The boolean value to be converted. |

Returns

| Return     | Description                           |
|:-----------|:--------------------------------------|
| `VARCHAR2` | The converted and escaped JSON value. |

Example

This example demonstrates printing JSON boolean values.

```
BEGIN
  sys.htp.p(apex_json.stringify(true));
  sys.htp.p(apex_json.stringify(false));
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.33 STRINGIFY Function Signature 5

This function converts `p_value` to a GeoJSON value.

Note:

This signature is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

Syntax

```
APEX_JSON.STRINGIFY (
    p_value IN mdsys.sdo_geometry )
    RETURN CLOB;
```

Parameters

| Parameter | Description                             |
|:----------|:----------------------------------------|
| `p_value` | The sdo_geometry value to be converted. |

Returns

| Return | Description        |
|:-------|:-------------------|
| `CLOB` | The GeoJSON value. |

Example

The following example prints GeoJSON values.

```
BEGIN
  sys.htp.p(apex_json.stringify(
                mdsys.sdo_geometry( 2001, 4326, sdo_point_type( 10, 50, null ), null, null ) ) );
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.34 TO_MEMBER_NAME Function

This function converts the given string to a JSON member name, usable for accessing values via the `get_%` functions. Unless member names are simple identifiers (`A-Z,0-9, "_"`), they need to be quoted.

Syntax

```
FUNCTION TO_MEMBER_NAME (
   p_string IN VARCHAR2 )
   RETURN VARCHAR2;
```

Parameters

| Parameter  | Description          |
|:-----------|:---------------------|
| `p_string` | The raw member name. |

Returns

A valid member name for `get_%` functions.

Example

Print various converted strings.

```
BEGIN
    sys.dbms_output.put_line('Unquoted: '||apex_json.to_member_name('member_name'));
    sys.dbms_output.put_line('Quoted:   '||apex_json.to_member_name('Hello"World'));
END;

Output:

    Unquoted: member_name
    Quoted:   "Hello\"World"
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.35 TO_XMLTYPE Function

This procedure parses a JSON-formatted `varchar2` or `CLOB` and converts it to an xmltype.

Syntax

```
APEX_JSON.TO_XMLTYPE (
    p_source   IN VARCHAR2,
    p_strict   IN BOOLEAN DEFAULT TRUE )
RETURN sys.xmltype;

APEX_JSON.TO_XMLTYPE (
    p_source   IN CLOB,
    p_strict   IN BOOLEAN DEFAULT TRUE )
RETURN sys.xmltype;
```

Parameters

| Parameter  | Description                                  |
|:-----------|:---------------------------------------------|
| `p_source` | The JSON source (`VARCHAR2` or `CLOB`)       |
| `p_strict` | If TRUE (default), enforce strict JSON rules |

Returns

| Return        | Description                                   |
|:--------------|:----------------------------------------------|
| `sys.xmltype` | An `xmltype` representation of the JSON data. |

Example

This example parses JSON and prints the XML representation.

```
DECLARE
    l_xml xmltype;
BEGIN
    l_xml := apex_json.to_xmltype('{ "items": [ 1, 2, { "foo": true } ] }');
    dbms_output.put_line(l_xml.getstringval);
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.36 TO_XMLTYPE_SQL Function

This function parses a JSON-formatted `varchar2` or `CLOB` and converts it to an xmltype. This function overload has the `p_strict` parameter as `VARCHAR2` in order to allow invoking from within a SQL query and having JSON parsing in LAX mode.

Syntax

```
APEX_JSON.TO_XMLTYPE_SQL (
    p_source   IN VARCHAR2,
    p_strict   IN VARCHAR2 DEFAULT 'Y' )
RETURN sys.xmltype;

APEX_JSON.TO_XMLTYPE_SQL (
    p_source   IN CLOB,
    p_strict   IN VARCHAR2 DEFAULT 'Y' )
RETURN sys.xmltype;
```

Parameters

| Parameter  | Description                               |
|:-----------|:------------------------------------------|
| `p_source` | The JSON source (`VARCHAR2` or `CLOB`)    |
| `p_strict` | If Y (default), enforce strict JSON rules |

Returns

An xmltype representation of the json data

Example

This example SQL query converts JSON to `XMLTYPE` and uses the `XMLTABLE SQL` function to extract data. The `p_strict` argument is set to `N` , so the JSON can successfully be parsed in lax mode, although the items attribute is not enquoted.

```
select
    attr_1
from
    xmltable(
    '/json/items/row'
    passing apex_json.to_xmltype_sql( '{ items: [ 1, 2, { "foo": true } ] }', p_strict => 'N' )
    columns
    attr_1 varchar2(20) path 'foo/text()'
 );
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.37 WRITE Procedure Signature 1

This procedure writes an array attribute of type `VARCHAR2`.

Syntax

```
APEX_JSON.WRITE (
    p_value    IN VARCHAR2 );
```

Parameters

| Parameter | Description              |
|:----------|:-------------------------|
| `p_value` | The value to be written. |

Example

This example writes an array containing 1, "two", "long text", false, the current date and a JSON representation of an XML document.

```
DECLARE
  l_clob clob := 'long text';
  l_xml sys.xmltype := sys.xmltype('<obj><foo>1</foo><bar>2</bar></obj>');
BEGIN
-- if not executed within an APEX session context, JSON output needs to be initialized first
  apex_json.initialize_clob_output;
  apex_json.open_object;
  apex_json.open_array; -- [
  apex_json.write(1); -- 1
  apex_json.write('two'); -- , "two"
  apex_json.write(l_clob); -- , "long text"
  apex_json.write(false); -- , false
  apex_json.write(sysdate); -- , "2014-05-05T05:36:08Z"
  apex_json.write(localtimestamp); -- , "2014-05-05T05:36:08.5434Z"
  apex_json.write(current_timestamp); -- , "2014-05-05T05:36:08.5434+02:00"
  apex_json.write(l_xml); -- , { "foo": 1, "bar": 2 }
  apex_json.close_array; -- ]
  apex_json.close_object;
  dbms_output.put_line(apex_json.get_clob_output);
  apex_json.free_output;
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.38 WRITE Procedure Signature 2

This procedure writes an array attribute of type `clob`.

Syntax

```
APEX_JSON.WRITE (
    p_value    IN CLOB );
```

Parameters

| Parameter | Description              |
|:----------|:-------------------------|
| `p_value` | The value to be written. |

Example

See [WRITE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-1.html#GUID-58D8250D-F197-4A3F-8B07-BC2BFB8669C8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.39 WRITE Procedure Signature 3

This procedure writes an array attribute of type `NUMBER`.

Syntax

```
APEX_JSON.WRITE (
    p_value    IN NUMBER );
```

Parameters

| Parameter | Description              |
|:----------|:-------------------------|
| `p_value` | The value to be written. |

Example

See [WRITE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-1.html#GUID-58D8250D-F197-4A3F-8B07-BC2BFB8669C8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.40 WRITE Procedure Signature 4

This procedure writes an array attribute. of type date.

Syntax

```
APEX_JSON.WRITE (
    p_value    IN DATE,
    p_format   IN VARCHAR2 DEFAULT c_date_iso8601 );
```

Parameters

| Parameter  | Description                                      |
|:-----------|:-------------------------------------------------|
| `p_value`  | The value to be written.                         |
| `p_format` | The date format mask (default `c_date_iso8601`). |

Example

See [WRITE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-1.html#GUID-58D8250D-F197-4A3F-8B07-BC2BFB8669C8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.41 WRITE Procedure Signature 5

This procedure writes an array attribute of type `boolean`.

Syntax

```
APEX_JSON.WRITE (
    p_value    IN BOOLEAN );
```

Parameters

| Parameter | Description              |
|:----------|:-------------------------|
| `p_value` | The value to be written. |

Example

See [WRITE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-1.html#GUID-58D8250D-F197-4A3F-8B07-BC2BFB8669C8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.42 WRITE Procedure Signature 6

This procedure writes an array attribute of type `sys.xmltype`. The procedure uses a XSL transformation to generate JSON. To determine the JSON type of values, it uses the following rules:

- If the value is empty, it generates a `NULL` value.
- If upper(value) is `TRUE`, it generates a boolean true value.
- If upper(value) is `FALSE`, it generates a boolean false value.
- If the `XPath` number function returns `TRUE`, it emits the value as is. Otherwise, it enquotes the value (that is, treats it as a JSON string).

Syntax

```
APEX_JSON.WRITE (
    p_value    IN sys.xmltype );
```

Parameters

| Parameter | Description              |
|:----------|:-------------------------|
| `p_value` | The value to be written. |

Example

See [WRITE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-1.html#GUID-58D8250D-F197-4A3F-8B07-BC2BFB8669C8).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.43 WRITE Procedure Signature 7

This procedure writes an array with all rows that the cursor returns. Each row is a separate object. If the query contains object type, collection, or cursor columns, the procedure uses `write(xmltype)` to generate JSON. Otherwise, it uses `DBMS_SQL` to fetch rows and the` write()` procedures for the appropriate column data types for output. If the column type is `varchar2` and the uppercase value is `'TRUE'` or `'FALSE'`, it generates boolean values.

Syntax

```
APEX_JSON.WRITE (
    p_cursor      IN OUT NOCOPY sys_refcursor );
```

Parameters

| Parameter  | Description |
|:-----------|:------------|
| `p_cursor` | The cursor. |

Example

This example writes an array containing JSON objects for departments 10 and 20.

```
DECLARE
    c sys_refcursor;
BEGIN
    open c for select deptno, dname, loc from dept where deptno in (10, 20);
    apex_json.write(c);
END;
```

This is the output:

```
[ { "DEPTNO":10 ,"DNAME":"ACCOUNTING" ,"LOC":"NEW YORK" }
, { "DEPTNO":20 ,"DNAME":"RESEARCH" ,"LOC":"DALLAS" } ]
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.44 WRITE Procedure Signature 8

This procedure writes array attribute of type SDO_GEOMETRY.

Note:

This signature is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

Syntax

```
APEX_JSON.WRITE (
    p_value       IN mdsys.sdo_geometry );
```

Parameters

| Parameter | Description              |
|:----------|:-------------------------|
| `p_value` | The value to be written. |

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.45 WRITE Procedure Signature 9

This procedure writes an object attribute of type `VARCHAR2`.

Syntax

```
APEX_JSON.WRITE (
    p_name        IN VARCHAR2,
    p_value       IN VARCHAR2,
    p_write_null  IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_value` | The attribute value to be written. |
| `p_write_null` | If `TRUE`, write `NULL` values. If `FALSE` (default), do not write NULLs. |

Example

This example writes an object with named member attributes of various types. The comments to the right of the statements show the output that they generate.

```
DECLARE
  l_clob clob := 'long text';
  l_xml sys.xmltype := sys.xmltype('<obj><foo>1</foo><bar>2</bar></obj>');
BEGIN
  apex_json.open_object; -- {
  apex_json.write('a1', 1); -- "a1": 1
  apex_json.write('a2', 'two'); -- ,"a2": "two"
  apex_json.write('a3', l_clob); -- ,"a3": "long text"
  apex_json.write('a4', false); -- ,"a4": false
  apex_json.write('a5', sysdate); -- ,"a5": "2014-05-05T05:36:08Z"
  apex_json.write('a6', l_xml); -- ,"a6": { "foo": 1, "bar": 2 }
  apex_json.close_object; -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.46 WRITE Procedure Signature 10

This procedure writes an object attribute of type `CLOB`.

Syntax

```
APEX_JSON.WRITE (
    p_name         IN VARCHAR2,
    p_value        IN CLOB,
    p_write_null   IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_value` | The attribute value to be written. |
| `p_write_null` | If `TRUE`, write `NULL` values. If `FALSE` (the default), do not write `NULL`s. |

Example

See example for [WRITE Procedure Signature 9](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-9.html#GUID-E1BE2CD7-8300-4E1F-9B4E-2501A9D8F68A).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.47 WRITE Procedure Signature 11

This procedure writes an object attribute of type `NUMBER`.

Syntax

```
APEX_JSON.WRITE (
    p_name         IN VARCHAR2,
    p_value        IN NUMBER,
    p_write_null   IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_value` | The attribute value to be written. |
| `p_write_null` | If TRUE, write `NULL` values. If false (the default), do not write `NULL`s. |

Example

See example for [WRITE Procedure Signature 9](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-9.html#GUID-E1BE2CD7-8300-4E1F-9B4E-2501A9D8F68A).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.48 WRITE Procedure Signature 12

This procedure writes an object attribute of type `date`.

Syntax

```
APEX_JSON.WRITE (
    p_name         IN VARCHAR2,
    p_value        IN DATE,
    p_format       IN VARCHAR2 DEFAULT c_date_iso8601,
    p_write_null   IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_value` | The attribute value to be written. |
| `p_format` | The date format mask (default `apex_json.c_date_iso8601`). |
| `p_write_null` | If TRUE, write `NULL` values. If FALSE (default), do not write `NULL`. |

Example

See example for [WRITE Procedure Signature 9](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-9.html#GUID-E1BE2CD7-8300-4E1F-9B4E-2501A9D8F68A).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.49 WRITE Procedure Signature 13

This procedure writes an object attribute of type `boolean`.

Syntax

```
APEX_JSON.WRITE (
    p_name         IN VARCHAR2,
    p_value        IN BOOLEAN,
    p_write_null   IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_value` | The attribute value to be written. |
| `p_write_null` | If TRUE, write `NULL` values. If FALSE (default), do not write `NULL`. |

Example

See example for [WRITE Procedure Signature 9](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-9.html#GUID-E1BE2CD7-8300-4E1F-9B4E-2501A9D8F68A).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.50 WRITE Procedure Signature 14

This procedure writes an attribute where the value is an array that contains all rows that the cursor returns. Each row is a separate object.

If the query contains object type, collection, or cursor columns, the procedure uses `write(p_name,<xmltype>)`. See [WRITE Procedure Signature 15](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-15.html#GUID-78E9663F-1EFA-4793-A9ED-EB0F728D2B77). Otherwise, it uses `DBMS_SQL` to fetch rows and the `write()` procedures for the appropriate column data types for output. If the column type is `varchar2` and the uppercase value is `'TRUE'` or `'FALSE'`, it generates boolean values.

Syntax

```
APEX_JSON.WRITE (
    p_name        IN VARCHAR2,
    p_cursor      IN OUT NOCOPY sys_refcursor );
```

Parameters

| Parameter  | Description         |
|:-----------|:--------------------|
| `p_name`   | The attribute name. |
| `p_cursor` | The cursor.         |

Example

This example writes an array containing JSON objects for departments 10 and 20, as an object member attribute.

```
DECLARE
  c sys_refcursor;
BEGIN
  open c for select deptno,
                    dname,
                    cursor(select empno,
                                  ename
                             from emp e
                            where e.deptno=d.deptno) emps
               from dept d;
  apex_json.open_object;
  apex_json. write('departments', c);
  apex_json.close_object;
END;

{ "departments":[
      {"DEPTNO":10,
       "DNAME":"ACCOUNTING",
       "EMPS":[{"EMPNO":7839,"ENAME":"KING"}]},
      ...
     ,{"DEPTNO":40,"DNAME":"OPERATIONS","EMPS":null}] }
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.51 WRITE Procedure Signature 15

This procedure writes an array attribute of type `sys.xmltype`. The procedure uses a XSL transformation to generate JSON. To determine the JSON type of values, it uses the following rules:

- If the value is empty, it generates a `NULL` value.
- If upper(value) is `TRUE`, it generates a boolean true value.
- If upper(value) is `FALSE`, it generates a boolean false value.
- If the `XPath` number function returns true, it emits the value as is. Otherwise, it enquotes the value (that is, treats it as a JSON string).

Syntax

```
APEX_JSON.WRITE (
    p_name         IN VARCHAR2,
    p_value        IN sys.xmltype,
    p_write_null   IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_value` | The value to be written. The XML is converted to JSON |
| `p_write_null` | If TRUE, write `NULL` values. If FALSE (default), do not write `NULL`s. |

Example

See example for [WRITE Procedure Signature 14](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/WRITE-Procedure-Signature-14.html#GUID-B066CE5A-225D-4A79-ABD3-B1A341FB789D).

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.52 WRITE Procedure Signature 16

This procedure writes parts of a parsed `APEX_JSON.t_values` table.

Syntax

```
APEX_JSON.WRITE (
    p_values           IN t_values,
    p_path             IN VARCHAR2 DEFAULT '.',
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_values` | The parsed JSON members. |
| `p_path` | The index into `p_values`. |
| `p[0-4]` | Each `%N` in `p_path` will be replaced by `pN` and every `i-th %s` or `%d` is replaced by `p[i-1]`. |

Example

This example parses a JSON string and writes parts of it.

```
DECLARE
    j apex_json.t_values;
BEGIN
    apex_json.parse(j, '{ "foo": 3, "bar": { "x": 1, "y": 2 }}');
    apex_json.write(j,'bar');
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.53 WRITE Procedure Signature 17

This procedure writes parts of a parsed `APEX_JSON.t_values` table as an object member attribute.

Syntax

```
APEX_JSON.WRITE (
    p_name             IN VARCHAR2,
    p_values           IN t_values,
    p_path             IN VARCHAR2 DEFAULT '.',
    p0                 IN VARCHAR2 DEFAULT NULL,
    p1                 IN VARCHAR2 DEFAULT NULL,
    p2                 IN VARCHAR2 DEFAULT NULL,
    p3                 IN VARCHAR2 DEFAULT NULL,
    p4                 IN VARCHAR2 DEFAULT NULL,
    p_write_null       IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_values` | The parsed JSON members. |
| `p_path` | The index into `p_values`. |
| `p[0-4]` | Each %N in `p_path` will be replaced by `pN` and every i-th %s or %d is replaced by p\[i-1\]. |
| `p_write_null` | If true, write `NULL` values. If false (the default), do not write `NULL`s. |

Example

This example parses a JSON string and writes parts of it as an object member.

```
DECLARE
  j apex_json.t_values;
BEGIN
  apex_json.parse(j, '{ "foo": 3, "bar": { "x": 1, "y": 2 }}');
  apex_json.open_object; -- {
  apex_json.write('parsed-bar',j,'bar');-- "parsed-bar":{ "x":1 ,"y":2 }
  apex_json.close_object; -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.54 WRITE Procedure Signature 18

This procedure writes an array attribute of type `VARCHAR2`.

Syntax

```
APEX_JSON.WRITE (
      p_name        IN VARCHAR2,
      p_values      IN apex_t_varchar2,
      p_write_null  IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_values` | The `VARCHAR2` array values to be written. |
| `p_write_null` | If true, write an empty array. If false (the default), do not write an empty array. |

Example

This example writes an array containing a, b, c.

```
DECLARE
 l_values apex_t_varchar2 := apex_t_varchar2( 'a', 'b', 'c' );
BEGIN
  apex_json.open_object;                -- {
  apex_json.write('array', l_values );  --   "array": [ "a", "b", "c" ]
  apex_json.close_object;               -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.55 WRITE Procedure Signature 19

This procedure writes an array attribute of type `NUMBER` .

Syntax

```
APEX_JSON.WRITE (
   p_name        IN VARCHAR2,
   p_values      IN apex_t_number,
   p_write_null  IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_values` | The `NUMBER` array values to be written. |
| `p_write_null` | If true, write an empty array. If false (the default), do not write an empty array. |

Example

This example writes an array containing 1, 2, 3.

```
DECLARE
  l_values apex_t_number := apex_t_number( 1, 2, 3 );
BEGIN
  apex_json.open_object;                -- {
  apex_json.write('array', l_values );  --   "array": [ 1, 2, 3 ]
  apex_json.close_object;               -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.56 WRITE Procedure Signature 20

This procedure writes a BLOB object attribute. The value will be Base64-encoded.

Syntax

```
APEX_JSON.WRITE (
   p_name        IN VARCHAR2
   p_value       IN BLOB,
   p_write_null  IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_values` | The attribute value to be written. |
| `p_write_null` | If `TRUE`, write an empty array. If `FALSE` (default), do not write an empty array. |

Example

This example writes a JSON object with the `a1`, `a2`, `a3`, and `a4` attributes. `a3` is a `BLOB`, encoded in Base64 format.

```
DECLARE
  l_blob blob := to_blob( hextoraw('000102030405060708090a');
BEGIN
  apex_json.open_object; -- {
  apex_json.write('a1', 1); -- "a1": 1
  apex_json.write('a2', 'two'); -- ,"a2": "two"
  apex_json.write('a3', l_blob); -- ,"a3": "AAECAwQFBgcICQo="
  apex_json.write('a4', false); -- ,"a4": false
  apex_json.close_object; -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.57 WRITE Procedure Signature 21

This procedure writes an object attribute.

Note:

This signature is only available if SDO_GEOMETRY (Oracle Locator) is installed in the database.

Syntax

```
APEX_JSON.WRITE (
    p_name        IN VARCHAR2,
    p_value       IN mdsys.sdo_geometry,
    p_write_null  IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_value` | The attribute value to be written. |
| `p_write_null` | If `TRUE`, write null values. If `FALSE` (the default), do not write nulls. |

Example

The following example writes a JSON object with the `a1`, `a2`, `a3`, and `a4` attributes. `a3` is an SDO_GEOMETRY, encoded as GeoJSON.

```
DECLARE
  l_sdo_geometry mdsys.sdo_geometry := sdo_geometry( 2001, 4326, sdo_point_type( 10, 50, null ), null, null );
BEGIN
  apex_json.open_object; -- {
  apex_json.write('a1', 1); -- "a1": 1
  apex_json.write('a2', 'two'); -- ,"a2": "two"
  apex_json.write('a3', l_sdo_geometry); -- ,"a3": { "type": "Point", "coordinates": [ 10, 50 ] }
  apex_json.write('a4', false); -- ,"a4": false
  apex_json.close_object; -- }
END;
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)

------------------------------------------------------------------------

## 39.58 WRITE_CONTEXT Procedure

This procedure writes an array with all rows that the context handle returns. Each row is a separate object.

If the query contains object type, collection or cursor columns, an error is raised. If the column is `VARCHAR2` and the uppercase value is 'TRUE' or 'FALSE', boolean values are generated.

Syntax

```
PROCEDURE WRITE_CONTEXT (
   p_name        IN VARCHAR2
   p_context     IN apex_exec.t_context,
   p_write_null  IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The attribute name. |
| `p_context` | The context handle from an `APEX_EXEC.OPEN_QUERY_CONTEXT` call. |
| `p_write_null` | Whether to write (TRUE) or omit (FALSE) NULL values. |

Example

This example opens an `APEX_EXEC` quey context selecting the `DEPT` table and passes it to `APEX_JSON`.

```
DECLARE
    l_context apex_exec.t_context;
begin
    l_context := apex_exec.open_query_context(
                     p_location   => apex_exec.c_location_local_db,
                     p_sql_query  => q'#select * from dept#' );

   apex_json.open_object;
   apex_json.write_context( p_name => 'departments', p_context => l_context);
   apex_json.close_object;
 end;

{ "departments":[
     { "DEPTNO":10 ,"DNAME":"ACCOUNTING" ,"LOC":"NEW YORK" }
    ,{ "DEPTNO":20 ,"DNAME":"RESEARCH" ,"LOC":"DALLAS" }
    ,{ "DEPTNO":30 ,"DNAME":"SALES" ,"LOC":"CHICAGO" }
    ,{ "DEPTNO":40 ,"DNAME":"OPERATIONS" ,"LOC":"BOSTON" } ] }
```

**Parent topic:** [APEX_JSON](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JSON.html#GUID-11919ED6-CE3D-4497-8733-F56CD27B6BFF)
