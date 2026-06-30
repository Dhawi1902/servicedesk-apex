<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 57  APEX_STRING

The APEX_STRING package provides utilities for the following data types:

- `apex_t_clob`
- `apex_t_number`
- `apex_t_varchar2`
- `clob`
- `varchar2`

Unless otherwise noted, the APIs expect arrays to be continuous (that is, without holes that `coll.delete(n)` operations generate).

- [FORMAT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FORMAT-Function.html#GUID-77E01643-C482-476C-9404-F3AEDDACCD22)
- [GET_INITIALS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INITIALS-Function.html#GUID-DF86D2AA-56B2-4DCA-A251-1B2E8019EB19)
- [GET_SEARCHABLE_PHRASES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SEARCHABLE_PHRASES-Function.html#GUID-1B090E64-8C1F-41E3-8BFD-51431CF8B81A)
- [GREP Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-1.html#GUID-35F517ED-6EA2-4466-AD77-B28F2B45DEEA)
- [GREP Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-2.html#GUID-D9E483F8-0168-4765-9C8A-04E584D653E7)
- [GREP Function Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GREP-Function-Signature-3.html#GUID-1B26C798-73B3-4D24-A993-06A5627CA1E7)
- [INDEX_OF Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INDEX_OF-Function-Signature-1.html#GUID-F187D646-5720-4E85-89E7-19BFB6789E9D)
- [INDEX_OF Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/INDEX_OF-Function-Signature-2.html#GUID-4ED0CCBA-E0FE-4F05-AB0B-6AFE32883E0B)
- [JOIN_CLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN_CLOB-Function.html#GUID-591EF535-0B50-4971-B419-A575145341C7)
- [JOIN_CLOBS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN_CLOBS-Function.html#GUID-875DAF96-A317-4D3A-A108-2DD8C9A4C558)
- [JOIN Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN-Function-Signature-1.html#GUID-C7904CB2-C420-441D-9B5F-C7C33D7804CC)
- [JOIN Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/JOIN-Function-Signature-2.html#GUID-02F2D5BD-36C2-47CE-9FFF-54DFAA2129C8)
- [NEXT_CHUNK Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/NEXT_CHUNK-Function.html#GUID-B1C78B6A-DC55-4C38-923D-A9AA5613FB5C)
- [PLIST_DELETE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_DELETE-Procedure.html#GUID-6E693596-60DE-4177-963B-E2C5DA16E921)
- [PLIST_EXISTS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.PLIST_EXISTS-Function.html#GUID-5B07C2C3-8ECB-4F61-887A-1F4D055DDB69)
- [PLIST_GET Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_GET-Function.html#GUID-90EA43D7-6BFF-4A4B-8AB6-44DE7B319F4B)
- [PLIST_GET_KEY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.PLIST_GET_KEY-Function.html#GUID-5AAFB6C5-2983-49F2-8365-2EDAF3B8ED6E)
- [PLIST_PUSH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_PUSH-Procedure.html#GUID-5B2015AF-4306-40E2-84F1-CB74DDDBB7AD)
- [PLIST_PUT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_PUT-Function.html#GUID-0CB6422C-7E8F-4128-819E-4654F7B8DF7B)
- [PLIST_TO_JSON_CLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PLIST_TO_JSON_CLOB-Function.html#GUID-63705980-D27D-4220-8C38-88AAD3599831)
- [PUSH Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-1.html#GUID-E1100503-907E-4F98-B6F6-EED5376BA9A8)
- [PUSH Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-2.html#GUID-A2B53F2F-034E-412F-8BA2-5B0E76F47436)
- [PUSH Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-3.html#GUID-4A0F18B7-8E62-4308-9276-FFC0F7FE69A9)
- [PUSH Procedure Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-4.html#GUID-F17963E5-B3C4-49C5-B272-31D2869A94E8)
- [PUSH Procedure Signature 5](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-5.html#GUID-BFB19B53-E5B2-46A7-B5FC-D050166EE6D3)
- [PUSH Procedure Signature 6](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-6.html#GUID-42FE8472-6298-4DCE-BD75-7E7F1A62ABD2)
- [PUSH Procedure Signature 7](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH-Procedure-Signature-7.html#GUID-03ED4AB6-49FB-421B-BF31-928C4E6891C1)
- [SHUFFLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHUFFLE-Function.html#GUID-0CECEC57-C5C7-4C38-8BCA-077B185ED858)
- [SHUFFLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SHUFFLE-Procedure.html#GUID-EF3BB8AD-33D6-41C5-A509-964C3ACCE23E)
- [SPLIT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT-Function-Signature-1.html#GUID-3BE7FF37-E54F-4503-91B8-94F374E243E6)
- [SPLIT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT-Function-Signature-2.html#GUID-A476D7F6-902E-450E-9287-CBA0D046AED8)
- [SPLIT_CLOBS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_CLOBS-Function.html#GUID-48A497C0-C044-430C-B7C8-35410F6645C4)
- [SPLIT_NUMBERS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SPLIT_NUMBERS-Function.html#GUID-729E046F-4E95-45DF-8B9F-5FBEA0C08DE5)
- [STRING_TO_TABLE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/STRING_TO_TABLE-1-Function.html#GUID-8EE18F03-968D-4141-B5B9-149B12F4F6CF)
- [TABLE_TO_CLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_CLOB-Function.html#GUID-76665E23-D9E8-4C18-A7BB-FBA5507BBAD9)
- [TABLE_TO_STRING Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TABLE_TO_STRING-1-Function.html#GUID-93B4AD2A-704C-4D9C-B48C-5E8F21CB6616)

------------------------------------------------------------------------

## 57.1 FORMAT Function

This function returns a formatted string with substitutions applied.

Returns `p_message` after replacing each `<n>`th occurrence of `%s` with `p<n>` and each occurrence of `%<n>` with `p<n>`. If `p_max_length` is not null, `substr(p<n>,1,p_arg_max_length)` is used instead of `p<n>`.

Use `%%` in `p_message` to emit a single % character. Use %n to emit a newline.

Syntax

```
APEX_STRING.FORMAT (
     p_message    IN VARCHAR2,
     p0           IN VARCHAR2     DEFAULT NULL,
     p1           IN VARCHAR2     DEFAULT NULL,
     p2           IN VARCHAR2     DEFAULT NULL,
     p3           IN VARCHAR2     DEFAULT NULL,
     p4           IN VARCHAR2     DEFAULT NULL,
     p5           IN VARCHAR2     DEFAULT NULL,
     p6           IN VARCHAR2     DEFAULT NULL,
     p7           IN VARCHAR2     DEFAULT NULL,
     p8           IN VARCHAR2     DEFAULT NULL,
     p9           IN VARCHAR2     DEFAULT NULL,
     p10          IN VARCHAR2     DEFAULT NULL,
     p11          IN VARCHAR2     DEFAULT NULL,
     p12          IN VARCHAR2     DEFAULT NULL,
     p13          IN VARCHAR2     DEFAULT NULL,
     p14          IN VARCHAR2     DEFAULT NULL,
     p15          IN VARCHAR2     DEFAULT NULL,
     p16          IN VARCHAR2     DEFAULT NULL,
     p17          IN VARCHAR2     DEFAULT NULL,
     p18          IN VARCHAR2     DEFAULT NULL,
     p19          IN VARCHAR2     DEFAULT NULL,
     p_max_length IN PLS_INTEGER  DEFAULT 1000,
     p_prefix     IN VARCHAR2     DEFAULT NULL )
     return VARCHAR2
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_message` | Message string with substitution placeholders. |
| `p0-p19` | Substitution parameters. |
| `p_max_length` | If not null (default is 1000), cap each `p<n>` at `p_max_length` characters. The tilde (`~`) character is appended to indicate that the original value exceeded this length. |
| `p_prefix` | If set, remove leading white space and the given prefix from each line. This parameter can be used to simplify the formatting of indented multi-line text. |

Example 1

```
APEX_STRING.FORMAT('%s+%s=%s', 1, 2, 'three')
-> 1+2=three

APEX_STRING.FORMAT('%1+%2=%0', 'three', 1, 2)
-> 1+2=three
```

Example 2

```
APEX_STRING.FORMAT (
    q'!BEGIN
      !    IF NOT VALID THEN
      !        apex_debug.info('validation failed');
      !    END IF;
      !END;!',
    p_prefix => '!' )
 -> BEGIN
        IF NOT VALID THEN
            apex_debug.info('validation failed');
        END IF;
    END;
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.2 GET_INITIALS Function

Returns the initials of the words in a string.

Words are separated by spaces or other special characters such as:

- commas (,)
- dashes (-)
- quotes (')

If the input only has one word, returns the first characters of that word.

Syntax

```
APEX_STRING.GET_INITIALS (
   p_str IN VARCHAR2,
   p_cnt IN PLS_INTEGER DEFAULT 2 )
   RETURN VARCHAR2
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_string` | The input string. |
| `p_cnt` | The number (`N`) of letter initials to get from the first number (`N`) of words. Default `2`. Allowed values are 1 to 255. |

Example

The following example gets initials from `"John Doe"`.

```
BEGIN
  sys.dbms_output.put_line(apex_string.get_initials('John Doe'));
END;

Output:
-> JD
```

Example 2

Gets the first three initials from `"Andres Homero Lozano Garza"`.

```
BEGIN
  sys.dbms_output.put_line(apex_string.get_initials(p_str => 'Andres Homero Lozano Garza', p_cnt => 3));
END;

Output
-> AHL
```

Example 3

Gets the first three initials from `"JBHiFi"`.

```
BEGIN
  sys.dbms_output.put_line(get_initials(p_str => 'JBHiFi', p_cnt => 3));
END;

Output:
-> JBH
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.3 GET_SEARCHABLE_PHRASES Function

This function returns distinct phrases of 1-3 consecutive lower case words in the input strings. Stopwords in the given language are ignored and split phrases.

Note:

This is a PL/SQL only implementation of a very small subset of what Oracle Text provides. Consider using Oracle Text instead, if the features and performance of this function are not sufficient.

Syntax

```
FUNCTION GET_SEARCHABLE_PHRASES (
    p_strings   IN   apex_t_varchar2,
    p_max_words IN   PLS_INTEGER     DEFAULT 3,
    p_language  IN   apex_t_varchar2 DEFAULT 'en' )
    RETURN apex_t_varchar2;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_string` | The input string. |
| `p_max_words` | The maximum number of words in a phrase. The default is 3. |
| `p_language` | The language identifier for stopwords, defaults to `"en"`. Supported values are `"cn","de","en","es","fr","it","ja","ko","pt-br"`. |

Example

Prints keywords in the given input string.

```
BEGIN
    sys.dbms_output.put_line (
        apex_string.join (
            apex_string.get_searchable_phrases (
                p_strings => apex_t_varchar2 (
                                  'Oracle APEX 19.1 is great.',
                                  'Low code as it should be!' )),
            ':' ));

END;
-> oracle:oracle apex:oracle apex 19.1:apex:apex 19.1:19.1:great:low:low code:code
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.4 GREP Function Signature 1

Returns the values of the input table that match a regular expression.

Syntax

```
GREP (
   p_table         IN apex_t_varchar2,
   p_pattern       IN VARCHAR2,
   p_modifier      IN VARCHAR2    DEFAULT NULL,
   p_subexpression IN VARCHAR2    DEFAULT '0',
   p_limit         IN PLS_INTEGER DEFAULT NULL )
   RETURN apex_t_varchar2;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_table` | The input table. |
| `p_pattern` | The regular expression. |
| `p_modifier` | The regular expression modifier. |
| `p_subexpression` | The subexpression which should be returned. If null, return the complete table value. If 0 (the default), return the matched expression. If \> 0, return the subexpression value. You can also pass a comma separated list of numbers, to get multiple subexpressions in the result. |
| `p_limit` | Limitation for the number of elements in the return table. If null (the default), there is no limit. |

Example

Collect and print basenames of sql files in input collection.

```
declare
    l_sqlfiles apex_t_varchar2;
begin
    l_sqlfiles := apex_string.grep (
                       p_table => apex_t_varchar2('a.html','b.sql', 'C.SQL'),
                       p_pattern => '(\w+)\.sql',
                       p_modifier => 'i',
                       p_subexpression => '1' );
    sys.dbms_output.put_line(apex_string.join(l_sqlfiles, ':'));
end;
-> b:C
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.5 GREP Function Signature 2

Returns the values of the input `varchar2` that match a regular expression.

Syntax

```
APEX_STRING.GREP (
   p_str           IN VARCHAR2,
   p_pattern       IN VARCHAR2,
   p_modifier      IN VARCHAR2    DEFAULT NULL,
   p_subexpression IN VARCHAR2    DEFAULT '0',
   p_limit         IN PLS_INTEGER DEFAULT NULL )
   RETURN apex_t_varchar2;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_str` | The input `varchar2`. |
| `p_pattern` | The regular expression. |
| `p_modifier` | The regular expression modifier. |
| `p_subexpression` | The subexpression which should be returned. If null, return the complete table value. If 0 (the default), return the matched expression. If \> 0, return the subexpression value. You can also pass a comma separated list of numbers, to get multiple subexpressions in the result. |
| `p_limit` | Limitation for the number of elements in the return table. If null (the default), there is no limit. |

Example

Collect and print `key=value` definitions.

```
declare
    l_plist apex_t_varchar2;
begin
    l_plist := apex_string.grep (
                   p_str => 'define k1=v1'||chr(10)||
                            'define k2 = v2',
                   p_pattern => 'define\s+(\w+)\s*=\s*([^'||chr(10)||']*)',
                   p_modifier => 'i',
                   p_subexpression => '1,2' );
    sys.dbms_output.put_line(apex_string.join(l_plist, ':'));
end;
-> k1:v1:k2:v2
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.6 GREP Function Signature 3

Returns the values of the input `clob` that match a regular expression.

Syntax

```
APEX_STRING.GREP (
   p_str           IN CLOB,
   p_pattern       IN VARCHAR2,
   p_modifier      IN VARCHAR2    DEFAULT NULL,
   p_subexpression IN VARCHAR2    DEFAULT '0',
   p_limit         IN PLS_INTEGER DEFAULT NULL )
   RETURN apex_t_varchar2;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_str` | The input `clob`. |
| `p_pattern` | The regular expression. |
| `p_modifier` | The regular expression modifier. |
| `p_subexpression` | The subexpression which should be returned. If null, return the complete table value. If 0 (the default), return the matched expression. If \> 0, return the subexpression value. You can also pass a comma separated list of numbers, to get multiple subexpressions in the result. |
| `p_limit` | Limitation for the number of elements in the return table. If null (the default), there is no limit. |

Example

Collect and print `key=value` definitions.

```
declare
    l_plist apex_t_varchar2;
begin
    l_plist := apex_string.grep (
                   p_str => to_clob('define k1=v1'||chr(10)||
                            'define k2 = v2',
                   p_pattern => 'define\s+(\w+)\s*=\s*([^'||chr(10)||']*)',
                   p_modifier => 'i',
                   p_subexpression => '1,2' );
    sys.dbms_output.put_line(apex_string.join(l_plist, ':'));
end;
-> k1:v1:k2:v2
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.7 INDEX_OF Function Signature 1

This function returns the first position in the list where `p_value` is stored. If not found, returns NULL.

Syntax

```
APEX_STRING.INDEX_OF (
    p_table IN apex_t_varchar2,
    p_value IN VARCHAR2 )
    RETURN NUMBER;
```

Parameters

| Parameter | Description                       |
|:----------|:----------------------------------|
| `p_table` | The table.                        |
| `p_value` | Value that is being searched for. |

Returns

Index of the searched value in the table.

Example

The following example prints the index of the given input string in the table.

```
BEGIN
    sys.dbms_output.put_line (
        apex_string.index_of (
            p_table => apex_t_varchar2 (
                           'Dog',
                           'Cat',
                           'Capybara' ),
            p_value => 'Capybara' ) );
END;
-> 3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.8 INDEX_OF Function Signature 2

This function returns the first position in the list where `p_value` is stored. If not found, returns NULL.

Syntax

```
APEX_STRING.INDEX_OF (
    p_table IN apex_application_global.vc_arr2,
    p_value IN VARCHAR2 )
    RETURN NUMBER;
```

Parameters

| Parameter | Description                       |
|:----------|:----------------------------------|
| `p_table` | The table.                        |
| `p_value` | Value that is being searched for. |

Returns

Index of the searched value in the table.

Example

The following example prints the index of the given input string in the table.

```
DECLARE
    l_list     apex_application_global.vc_arr2;
BEGIN
    l_list(1) := 'Dog';
    l_list(2) := 'Capybara';
    l_list(3) := 'Cat';
    sys.dbms_output.put_line (
        apex_string.index_of (
            p_table => l_list,
            p_value => 'Capybara' ) );
END;
-> 3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.9 JOIN_CLOB Function

Returns the values of the `apex_t_varchar2` input table `p_table` as a concatenated `clob`, separated by `p_sep`.

Syntax

```
APEX_STRING.JOIN_CLOB (
    p_table IN apex_t_varchar2,
    p_sep   IN VARCHAR2    DEFAULT apex_application.LF,
    p_dur   IN PLS_INTEGER DEFAULT sys.dbms_lob.call )
    RETURN CLOB
```

Parameters

| Parameters | Description                                             |
|:-----------|:--------------------------------------------------------|
| `p_table`  | The input table.                                        |
| `p_sep`    | The separator, default is line feed.                    |
| `p_dur`    | The duration of the `clob`, default `sys.dbms_lob.call` |

Example

Concatenate numbers, separated by ':'.

```
apex_string.join_clob(apex_t_varchar2('1','2','3'),':')
-> 1:2:3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.10 JOIN_CLOBS Function

This function returns the values of the `apex_t_clob` input table `p_table` as a concatenated clob, separated by `p_sep`.

Syntax

```
APEX_STRING.JOIN_CLOBS (
  p_table IN apex_t_clob,
  p_sep   IN VARCHAR2     DEFAULT apex_application.LF,
  p_dur   IN PLS_INTEGER  DEFAULT sys.dbms_lob.call )
RETURN CLOB;
```

Parameters

| Parameter | Description                                           |
|:----------|:------------------------------------------------------|
| `p_table` | The input table.                                      |
| `p_sep`   | The separator, default is line feed.                  |
| `p_dur`   | The duration of the clob, default `sys.dbms_lob.call` |

Example

The following example concatenates numbers, separated by `':'`.

```
apex_string.join_clobs(apex_t_clob('1','2','3'),':')
-> 1:2:3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.11 JOIN Function Signature 1

Returns the values of the `apex_t_varchar2` input table `p_table` as a concatenated `varchar2`, separated by `p_sep`.

Syntax

```
APEX_STRING.JOIN (
   p_table IN apex_t_varchar2,
   p_sep IN VARCHAR2 DEFAULT apex_application.LF )
   RETURN VARCHAR2
```

Parameters

| Parameters | Description                          |
|:-----------|:-------------------------------------|
| `p_table`  | The input table.                     |
| `p_sep`    | The separator, default is line feed. |

Example

Concatenate numbers, separated by ':'.

```
apex_string.join(apex_t_varchar2('a','b','c'),':')
-> a:b:c
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.12 JOIN Function Signature 2

Returns the values of the `apex_t_number` input table `p_table` as a concatenated `varchar2`, separated by `p_sep`.

Syntax

```
APEX_STRING.JOIN (
   p_table IN apex_t_number,
   p_sep IN VARCHAR2 DEFAULT apex_application.LF )
   RETURN VARCHAR2
```

Parameters

| Parameters | Description                          |
|:-----------|:-------------------------------------|
| `p_table`  | The input table.                     |
| `p_sep`    | The separator, default is line feed. |

Example

Concatenate numbers, separated by ':'.

```
apex_string.join(apex_t_number(1,2,3),':')
-> 1:2:3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.13 NEXT_CHUNK Function

This function reads a fixed-length string from a clob. This is just a small wrapper around `DBMS_LOB.READ`, however it prevents common errors when incrementing the offset and picking the maximum chunk size.

Syntax

```
APEX_STRING.NEXT_CHUNK (
    p_str    IN            CLOB,
    p_chunk  OUT    NOCOPY VARCHAR2,
    p_offset IN OUT NOCOPY INTEGER,
    p_amount IN            INTEGER DEFAULT 8191 )
    RETURN BOOLEAN;
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_str` | The input clob. |
| `p_chunk` | The chunk value (in/out). |
| `p_offset` | The position in `p_str`, where the next chunk should be read from (in/out). |
| `p_amount` | The amount of characters that should be read (default 8191). |

Returns

`True` if another chunk could be read. `False` if reading past the end of `p_str`.

Example

Print chunks of 25 bytes of the input clob.

```
declare
    l_input  clob := 'The quick brown fox jumps over the lazy dog';
    l_offset integer;
    l_chunk  varchar2(20);
begin
    while apex_string.next_chunk (
              p_str    => l_input,
              p_chunk  => l_chunk,
              p_offset => l_offset,
              p_amount => 20 )
    loop
       sys.dbms_output.put_line(l_chunk);
    end loop;
end;

Output:
  The quick brown fox
  jumps over the lazy
  dog
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.14 PLIST_DELETE Procedure

This procedure removes the property list key from the table.

Syntax

```
PLIST_DELETE (
    p_table IN OUT NOCOPY apex_t_varchar2,
    p_key   IN            VARCHAR2 );
```

Parameters

| Parameters | Description      |
|:-----------|:-----------------|
| `p_table`  | The input table. |
| `p_key`    | The input key.   |

Raised Errors

| Parameters      | Description                        |
|:----------------|:-----------------------------------|
| `NO_DATA_FOUND` | Given key does not exist in table. |

Example

Remove value of property `"key2"`.

```
declare
      l_plist apex_t_varchar2 := apex_t_varchar2('key1','foo','key2','bar');
 begin
      apex_string.plist_delete(l_plist,'key2');
      sys.dbms_output.put_line(apex_string.join(l_plist,':'));
 end;
 -> key1:foo
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.15 PLIST_EXISTS Function

Returns whether a key exists in the property list.

Syntax

```
APEX_STRING.PLIST_EXISTS (
    p_table IN apex_t_varchar2,
    p_key   IN VARCHAR2 )
    RETURN BOOLEAN;
```

Parameters

| Parameter | Description      |
|:----------|:-----------------|
| `p_table` | The input table. |
| `p_key`   | The input key.   |

Raises

`NO_DATA_FOUND`: Given key does not exist in table.

Example

The following example prints whether properties key1, key2 and key3 exist.

```
DECLARE
    l_plist apex_t_varchar2 := apex_t_varchar2('key1','foo','key2','bar');
BEGIN
    FOR i IN 1 .. 3 LOOP
        sys.dbms_output.put_line(
            'key'||i||': '||
            CASE apex_string.plist_exists(l_plist,'key'||i)
            WHEN true then 'TRUE'
            ELSE 'FALSE'
            END);
    END LOOP;
END;
-> key1:TRUE
   key2:TRUE
   key3:FALSE
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.16 PLIST_GET Function

This function gets the property list value for a key.

Syntax

```
APEX_STRING.PLIST_GET (
    p_table IN apex_t_varchar2,
    p_key IN VARCHAR2 )
    RETURN VARCHAR2
```

Parameters

| Parameters | Description      |
|:-----------|:-----------------|
| `p_table`  | The input table. |
| `p_key`    | The input key.   |

Raised Errors

| Parameters      | Description                        |
|:----------------|:-----------------------------------|
| `NO_DATA_FOUND` | Given key does not exist in table. |

Example

Get value of property `"key2"`.

```
declare
    l_plist apex_t_varchar2 := apex_t_varchar2('key1','foo','key2','bar');
begin
    sys.dbms_output.put_line(apex_string.plist_get(l_plist,'key2'));
end;
-> bar
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.17 PLIST_GET_KEY Function

Gets the first property list key that maps to a given value. Returns NULL if the value can not be found.

Syntax

```
APEX_STRING.PLIST_GET_KEY (
    p_table IN apex_t_varchar2,
    p_value IN VARCHAR2 )
    RETURN varchar2;
```

Parameters

| Parameter | Description      |
|:----------|:-----------------|
| `p_table` | The input table. |
| `p_value` | The input value. |

Example

The following example gets key of property "bar."

```
DECLARE
    l_plist apex_t_varchar2 := apex_t_varchar2('key1','foo','key2','bar');
BEGIN
    sys.dbms_output.put_line(apex_string.plist_get_key(l_plist,'bar'));
END;
-> key2
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.18 PLIST_PUSH Procedure

This procedure appends key/value to the property list, without looking for duplicates.

Syntax

```
APEX_STRING.PLIST_PUSH (
    p_table IN OUT NOCOPY apex_t_varchar2,
    p_key   IN VARCHAR2,
    p_value IN VARCHAR2 );
```

Parameters

| Parameters | Description      |
|:-----------|:-----------------|
| `p_table`  | The input table. |
| `p_key`    | The input key.   |
| `p_value`  | The input value. |

Example

The following example demonstrates how to append key2/bar.

```
declare
    l_plist apex_t_varchar2 := apex_t_varchar2('key1','foo');
begin
    apex_string.plist_push(l_plist,'key2','bar');
    sys.dbms_output.put_line(apex_string.plist_get(l_plist,'key2'));
end;
 -> bar
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.19 PLIST_PUT Function

This function inserts or updates property list value for a key.

Syntax

```
PLIST_PUT (
    p_table IN OUT NOCOPY apex_t_varchar2,
    p_key   IN            VARCHAR2,
    p_value IN            VARCHAR2 );
```

Parameters

| Parameters | Description      |
|:-----------|:-----------------|
| `p_table`  | The input table. |
| `p_key`    | The input key.   |
| `p_value`  | The input value. |

Example

Set property value to `"key2"`.

```
declare
    l_plist apex_t_varchar2 := apex_t_varchar2('key1','foo');
begin
    apex_string.plist_put(l_plist,'key2','bar');
    sys.dbms_output.put_line(apex_string.plist_get(l_plist,'key2'));
end;
-> bar
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.20 PLIST_TO_JSON_CLOB Function

This function converts a `apex_t_varchar2` record to a `sys.json_object_t` object type and stringifies it.

Elements with odd numbers are the attribute names.

Elements with even numbers are the attribute values.

Syntax

```
APEX_STRING.PLIST_TO_JSON_CLOB (
    p_plist IN apex_t_varchar2 )
RETURN CLOB;
```

Parameters

| Parameter | Description |
|:----------|:------------|
| `p_plist` | The table.  |

Returns

CLOB containing a JSON object with keys and values of the given `p_plist`.

Example

The following example creates the JSON object `{"key1":"foo","key2":"bar"}`

```
DECLARE
    l_attributes apex_application_page_regions.attributes%type;
BEGIN
    l_attributes := apex_string.plist_to_json_clob(apex_t_varchar2(
                        'key1', 'foo' ,
                        'key2', 'bar' ));
    dbms_output.put_line(l_attributes);
END;
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.21 PUSH Procedure Signature 1

This procedure appends value to `apex_t_varchar2` table.

Syntax

```
APEX_STRING.PUSH (
   p_table IN OUT NOCOPY apex_t_varchar2,
   p_value IN VARCHAR2 );
```

Parameters

| Parameter | Description                      |
|:----------|:---------------------------------|
| `p_table` | Defines the table.               |
| `p_value` | Specifies the value to be added. |

Example

The following example demonstrates how to append 2 values, then prints the table.

```
DECLARE
    l_table apex_t_varchar2;
BEGIN
    apex_string.push(l_table, 'a');
    apex_string.push(l_table, 'b');
    sys.dbms_output.put_line(apex_string.join(l_table, ':'));
END;
-> a:b
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.22 PUSH Procedure Signature 2

This procedure appends a value to `apex_t_clob` table.

Syntax

```
APEX_STRING.PUSH (
   p_table IN OUT NOCOPY apex_t_clob,
   p_value IN            apex_t_clob );
```

Parameters

| Parameter | Description                      |
|:----------|:---------------------------------|
| `p_table` | Defines the table.               |
| `p_value` | Specifies the value to be added. |

Example

The following example appends two values then prints the table.

```
DECLARE
    l_table apex_t_clob;
BEGIN
    apex_string.push(l_table, 'a');
    apex_string.push(l_table, 'b');
    sys.dbms_output.put_line(apex_string.join_clobs(l_table, ':'));
END;

Output:
-> a:b
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.23 PUSH Procedure Signature 3

This procedure appends a value to `apex_t_number` table.

Syntax

```
APEX_STRING.PUSH (
   p_table IN OUT NOCOPY apex_t_number,
   p_value IN            NUMBER );
```

Parameters

| Parameter | Description                      |
|:----------|:---------------------------------|
| `p_table` | Defines the table.               |
| `p_value` | Specifies the value to be added. |

Example

The following example demonstrates how to append two values, then prints the table.

```
DECLARE
   l_table apex_t_number;
BEGIN
   apex_string.push(l_table, 1);
   apex_string.push(l_table, 2);
   sys.dbms_output.put_line(apex_string.join(l_table, ':'));
END;
-> 1:2
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.24 PUSH Procedure Signature 4

This procedure appends collection values to `apex_t_varchar2` table.

Syntax

```
APEX_STRING. PUSH (
   p_table  IN OUT NOCOPY apex_t_varchar2,
   p_values IN            apex_t_varchar2 );
```

Parameters

| Parameter  | Description                                             |
|:-----------|:--------------------------------------------------------|
| `p_table`  | Defines the table.                                      |
| `p_values` | Specifies the values that should be added to `p_table`. |

Example

The following example demonstrates how to append a single value and multiple values, then prints the table.

```
DECLARE
   l_table apex_t_varchar2;
BEGIN
   apex_string.push(l_table, 'a');
   apex_string.push(l_table, apex_t_varchar2('1','2','3'));
   sys.dbms_output.put_line(apex_string.join(l_table, ':'));
END;
-> a:1:2:3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.25 PUSH Procedure Signature 5

This procedure appends collection values to the `apex_t_clob` table.

Syntax

```
APEX_STRING.PUSH (
  p_table  IN OUT NOCOPY apex_t_clob,
  p_values IN            apex_t_clob )
```

Parameters

| Parameter  | Description                      |
|:-----------|:---------------------------------|
| `p_table`  | The table.                       |
| `p_values` | Values to be added to `p_table`. |

Example

The following example appends single value and multiple values, then prints the table.

```
DECLARE
   l_table apex_t_clob;
BEGIN
   apex_string.push(l_table, 'a');
   apex_string.push(l_table, apex_t_clob('1','2','3'));
   sys.dbms_output.put_line(apex_string.join_clobs(l_table, ':'));
END;
-> a:1:2:3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.26 PUSH Procedure Signature 6

This procedure appends values of a PL/SQL table to the `apex_t_varchar2` table.

Syntax

```
APEX_STRING.PUSH (
  p_table  IN OUT NOCOPY apex_t_varchar2,
  p_values IN            apex_application_global.vc_arr2 )
```

Parameters

| Parameter  | Description                 |
|:-----------|:----------------------------|
| `p_table`  | The table.                  |
| `p_values` | Values to add to `p_table`. |

Example

The following example appends then prints the table.

```
DECLARE
   l_table  apex_t_varchar2;
   l_values apex_application_global.vc_arr2;
BEGIN
   l_values(1) := 'a';
   l_values(2) := 'b';
   apex_string.push(l_table, l_values);
   sys.dbms_output.put_line(apex_string.join(l_table, ':'));
END;
-> a:b
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.27 PUSH Procedure Signature 7

This procedure appends number collection values to the `apex_t_varchar2` table.

Syntax

```
APEX_STRING.PUSH (
    p_table         IN OUT NOCOPY apex_t_varchar2,
    p_values        IN            apex_t_number,
    p_format_mask   IN            VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter       | Description                                            |
|:----------------|:-------------------------------------------------------|
| `p_table`       | The table.                                             |
| `p_values`      | Values that should be added to `p_table`.              |
| `p_format_mask` | Format mask to use when converting numbers to strings. |

Example

The following example appends a single value and multiple values, then prints the table.

```
DECLARE
    l_table apex_t_varchar2;
BEGIN
    apex_string.push(l_table, 'a');
    apex_string.push(l_table, apex_t_number(1,2,3), 'FM990D00');
    sys.dbms_output.put_line(apex_string.join(l_table, ':'));
END;
-> a:1.00:2.00:3.00
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.28 SHUFFLE Function

Returns the input table values, re-ordered.

Syntax

```
APEX_STRING.SHUFFLE (
    p_table IN apex_t_varchar2 )
    RETURN apex_t_varchar2;
```

Parameters

| Parameters | Description      |
|:-----------|:-----------------|
| `p_table`  | The input table. |

Example

Shuffle and print `l_table`.

```
declare
    l_table apex_t_varchar2 := apex_string.split('1234567890',null);
begin
    sys.dbms_output.put_line(apex_string.join(apex_string.shuffle(l_table),':'));
end;
-> a permutation of 1:2:3:4:5:6:7:8:9:0
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.29 SHUFFLE Procedure

This procedure randomly re-orders the values of the input table.

Syntax

```
APEX_STRING.SHUFFLE (
    p_table IN OUT NOCOPY apex_t_varchar2 );
```

Parameters

| Parameters | Description                                               |
|:-----------|:----------------------------------------------------------|
| `p_table`  | The input table, which will be modified by the procedure. |

Example

Shuffle and print `l_table`.

```
declare
    l_table apex_t_varchar2 := apex_string.split('1234567890',null);
begin
    apex_string.shuffle(l_table);
    sys.dbms_output.put_line(apex_string.join(l_table,':'));
end;
-> a permutation of 1:2:3:4:5:6:7:8:9:0
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.30 SPLIT Function Signature 1

Use this function to split input string at separator.

Syntax

```
APEX_STRING.SPLIT (
    p_str   IN VARCHAR2,
    p_sep   IN VARCHAR2     DEFAULT apex_application.LF,
    p_limit IN PLS_INTEGER  DEFAULT NULL )
    RETURN apex_t_varchar2;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d266751e71" style="text-align: left;" data-valign="bottom" width="20%">Parameters</th>
<th id="d266751e73" style="text-align: left;" data-valign="bottom" width="20%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d266751e77" style="text-align: left;" data-valign="top" width="20%" headers="d266751e71 "><code class="codeph">p_str</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d266751e77 d266751e73 ">The input string.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d266751e83" style="text-align: left;" data-valign="top" width="20%" headers="d266751e71 "><code class="codeph">p_sep</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d266751e83 d266751e73 "><p>The separator. Splits at line feed by default.</p>
<p>If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d266751e92" style="text-align: left;" data-valign="top" width="20%" headers="d266751e71 "><code class="codeph">p_limit</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d266751e92 d266751e73 ">Maximum number of splits, ignored if null. If smaller than the total possible number of splits, the last table element contains the rest.</td>
</tr>
</tbody>
</table>

Examples

```
apex_string.split(1||chr(10)||2||chr(10)||3)
-> apex_t_varchar2('1','2','3')

apex_string.split('1:2:3',':')
-> apex_t_varchar2('1','2','3')

apex_string.split('123',null)
-> apex_t_varchar2('1','2','3')

apex_string.split('1:2:3:4',':',2)
-> apex_t_varchar2('1','2:3:4')

apex_string.split('key1=val1, key2=val2','\s*[=,]\s*')
-> apex_t_varchar2('key1','val1','key2','val2')
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.31 SPLIT Function Signature 2

Use this function to split input clob at separator.

Syntax

```
APEX_STRING.SPLIT (
    p_str IN CLOB,
    p_sep IN VARCHAR2 DEFAULT apex_application.LF )
    RETURN apex_t_varchar2;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d266964e71" style="text-align: left;" data-valign="bottom" width="20%">Parameters</th>
<th id="d266964e73" style="text-align: left;" data-valign="bottom" width="20%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d266964e77" style="text-align: left;" data-valign="top" width="20%" headers="d266964e71 "><code class="codeph">p_str</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d266964e77 d266964e73 ">The input clob.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d266964e83" style="text-align: left;" data-valign="top" width="20%" headers="d266964e71 "><code class="codeph">p_sep</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d266964e83 d266964e73 "><p>The separator. Splits at line feed by default.</p>
<p>If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters).</p></td>
</tr>
</tbody>
</table>

Example

```
apex_string.split('1:2:3',':')
-> apex_t_varchar2('1','2','3')
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.32 SPLIT_CLOBS Function

This function splits input clobs at the separator and returns a table of clobs.

Syntax

```
APEX_STRING.SPLIT_CLOBS (
  p_str   IN CLOB,
  p_sep   IN VARCHAR2    DEFAULT apex_application.LF,
  p_limit IN PLS_INTEGER DEFAULT NULL )
RETURN apex_t_clob;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d267139e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d267139e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d267139e78" style="text-align: left;" data-valign="top" width="42%" headers="d267139e72 "><code class="codeph">p_str</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d267139e78 d267139e74 ">The input clob.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d267139e84" style="text-align: left;" data-valign="top" width="42%" headers="d267139e72 "><code class="codeph">p_sep</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d267139e84 d267139e74 "><p>The separator. Splits at line feed by default.</p>
<p>If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d267139e93" style="text-align: left;" data-valign="top" width="42%" headers="d267139e72 "><code class="codeph">p_limit</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d267139e93 d267139e74 "><p>Maximum number of splits. Ignored if null.</p>
<p>If smaller than the total possible number of splits, the last table element contains the rest.</p></td>
</tr>
</tbody>
</table>

Example

```
apex_string.split_clobs('1:2:3',':')
-> apex_t_clob('1','2','3')
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.33 SPLIT_NUMBERS Function

Use this function to split input at separator, values must all be numbers.

Syntax

```
SPLIT_NUMBERS (
     p_str IN VARCHAR2,
     p_sep IN VARCHAR2 DEFAULT apex_application.LF )
     RETURN apex_t_number;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d267358e71" style="text-align: left;" data-valign="bottom" width="20%">Parameters</th>
<th id="d267358e73" style="text-align: left;" data-valign="bottom" width="20%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d267358e77" style="text-align: left;" data-valign="top" width="20%" headers="d267358e71 "><code class="codeph">p_str</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d267358e77 d267358e73 ">The input varchar2.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d267358e83" style="text-align: left;" data-valign="top" width="20%" headers="d267358e71 "><code class="codeph">p_sep</code></td>
<td style="text-align: left;" data-valign="top" width="20%" headers="d267358e83 d267358e73 "><p>The separator. Splits at line feed by default.</p>
<p>If null, split after each character. If a single character, split at this character. If more than 1 character, split at regular expression (max 512 characters).</p></td>
</tr>
</tbody>
</table>

Example

```
apex_string.split_numbers('1:2:3',':')
-> apex_t_number(1,2,3)
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.34 STRING_TO_TABLE Function

This function returns the split input at separator, returning a `vc_arr2`.

Syntax

```
APEX_STRING.STRING_TO_TABLE (
    p_str   IN VARCHAR2,
    p_sep   IN VARCHAR2 DEFAULT ':' )
    RETURN apex_application_global.vc_arr2;
```

Parameters

| Parameters | Description                                                   |
|:-----------|:--------------------------------------------------------------|
| `p_str`    | The input varchar2.                                           |
| `p_sep`    | The separator, no regexp or split at char. Defaults to `':'`. |

Example

```
DECLARE
    l_result apex_application_global.vc_arr2;
BEGIN
    l_result := apex_string.string_to_table('1:2:3',':');
    sys.dbms_output.put_line(apex_string.table_to_string(l_result,'-'));
END;
-> 1-2-3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.35 TABLE_TO_CLOB Function

This function returns the values of the `apex_application_global.vc_arr2` input table `p_table` as a concatenated clob, separated by `p_sep`.

Syntax

```
APEX_STRING.TABLE_TO_CLOB (
    p_table IN apex_application_global.vc_arr2,
    p_sep   IN VARCHAR2             DEFAULT apex_application.LF,
    p_dur   IN PLS_INTEGER          DEFAULT sys.dbms_lob.call )
    RETURN CLOB;
```

Parameters

| Parameter | Description                                            |
|:----------|:-------------------------------------------------------|
| `p_table` | The input table.                                       |
| `p_sep`   | The separator. Default is line feed.                   |
| `p_dur`   | The duration of the clob. Default `sys.dbms_lob.call`. |

Example

The following example concatenates numbers, separated by ':'

```
DECLARE
    l_table apex_application_global.vc_arr2;
BEGIN
    l_table(1) := '1';
    l_table(2) := '2';
    l_table(3) := '3';

    sys.dbms_output.put_line(apex_string.table_to_clob(l_table, ':'));
END;
-> 1:2:3
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)

------------------------------------------------------------------------

## 57.36 TABLE_TO_STRING Function

This function returns the values of the `apex_application_global.vc_arr2` input table `p_table` as a concatenated `varchar2`, separated by `p_sep`.

Syntax

```
APEX_STRING.TABLE_TO_STRING (
    p_table IN apex_application_global.vc_arr2,
    p_sep   IN VARCHAR2             DEFAULT ':' )
    RETURN VARCHAR2;
```

Parameters

| Parameters | Description                                              |
|:-----------|:---------------------------------------------------------|
| `p_table`  | The input table, assumes no holes and index starts at 1. |
| `p_sep`    | The separator, default is `':'`.                         |

Example

Concatenate numbers, separated by `':'`.

```
declare
    l_table apex_application_global.vc_arr2;
begin
    l_table(1) := 'a';
    l_table(2) := 'b';
    l_table(3) := 'c';
    sys.dbms_output.put_line(apex_string.table_to_string(l_table));
end;
-> a:b:c
```

**Parent topic:** [APEX_STRING](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING.html#GUID-CAFD987C-7382-4F0F-8CB9-1D3BD05F054A)
