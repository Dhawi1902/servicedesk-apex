<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 58 APEX_STRING_UTIL

The `APEX_STRING_UTIL` package provides additional string related utilities.

- [DIFF Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL-DIFF-Function.html#GUID-BEEA5073-812E-4294-AFAD-BD1293378C44)
- [FIND_EMAIL_ADDRESSES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_ADDRESSES-Function.html#GUID-856D11D9-579B-4D19-80F2-6AA86F64D25A)
- [FIND_EMAIL_FROM Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_FROM-Function.html#GUID-0BC6B56D-1059-4AE6-9651-24456AB3D674)
- [FIND_EMAIL_SUBJECT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_EMAIL_SUBJECT-Function.html#GUID-A250E5FE-1E9F-4BE8-8D58-796F304A7921)
- [FIND_IDENTIFIERS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_IDENTIFIERS-Function.html#GUID-88A402CC-2058-47A6-8EFC-F04E80C7198D)
- [FIND_LINKS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_LINKS-Function.html#GUID-4188E883-C1D9-4CE5-A2CD-19EEF68690DC)
- [FIND_PHRASES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_PHRASES-Function.html#GUID-746EE6DE-F48D-4ED4-BE17-9720E6723C3C)
- [FIND_TAGS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/FIND_TAGS-Function.html#GUID-C9F693B2-D6CE-46C4-A1EB-7E82059743EB)
- [GET_DOMAIN Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_DOMAIN-Function.html#GUID-DD21DF34-E88D-49E3-88DC-2BFD58220A17)
- [GET_FILE_EXTENSION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_FILE_EXTENSION-Function.html#GUID-0C9CF50A-9BD5-4A9C-81BE-B9ACB030D0A3)
- [GET_SLUG Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_SLUG-Function.html#GUID-244FE07F-C993-4E1C-8CF9-E66CA9F3075C)
- [PHRASE_EXISTS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PHRASE_EXISTS-Function.html#GUID-E5A76E4E-1AC7-4574-A828-0F5097851FBF)
- [REPLACE_WHITESPACE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REPLACE_WHITESPACE-Function.html#GUID-1839349F-2767-4351-9DF6-9A82121789C2)
- [TO_DISPLAY_FILESIZE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TO_DISPLAY_FILESIZE-Function.html#GUID-6C8865DB-C739-4B87-9465-118F74070B82)

------------------------------------------------------------------------

## 58.1 DIFF Function

This function computes the difference between tables of lines. The implementation uses the default version of the longest common subexpression algorithm, without any optimizations. The DIFF function is not intended for very large inputs. The output is similar to the unified `diff` format.

Syntax

```
APEX_STRING_UTIL.FUNCTION DIFF (
    p_left    IN apex_t_varchar2,
    p_right   IN apex_t_varchar2,
    p_context IN PLS_INTEGER DEFAULT 3 )
    RETURN apex_t_varchar2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_left` | The lines in the "left" table. |
| `p_right` | The lines in the "right" table. |
| `p_context` | The number of same lines after each diff to also return (default 3). |

Returns

A table of varchar2, where the first character denotes the type of diff:

- `@` - Line numbers on left and right hand side.
- "` `" (space) - Context, left and right hand side are equal.
- `-` - Line is in left hand side, but not in right hand side.
- `+` - Line is in right hand side, but not in left hand side.

Example

This example computes the diff between the given tables.

```
select apex_string_util.diff (
           p_left  => apex_t_varchar2('how','now','brown','cow'),
           p_right => apex_t_varchar2('what','now','brown','cow',1,2,3) )
  from sys.dual;

-> apex_t_varchar2 (
       '@@ 1,0 @@',
       '-how',
       '@@ 1,1 @@',
       '+what',
       ' now',
       ' brown',
       ' cow',
       '@@ 4,5 @@',
       '+1',
       '+2',
       '+3' )
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.2 FIND_EMAIL_ADDRESSES Function

This function finds all email addresses in the given input string.

Syntax

```
APEX_STRING_UTIL.FIND_EMAIL_ADDRESSES (
    p_string IN VARCHAR2 )
    RETURN apex_t_varchar2;
```

Parameters

| Parameter  | Description       |
|:-----------|:------------------|
| `p_string` | The input string. |

Returns

This function returns an array of email addresses without duplicates.

Example

```
declare
    l_string  varchar2(32767) := 'b@c.it hello this hello.world@example.com is text b@c.it includes the '||
                                 'michael.h@example.com email address and x.y.z@m.io';
    l_results apex_t_varchar2;
begin
    l_results := apex_string_util.find_email_addresses(l_string);
end;
/
-> apex_t_varchar2 (
       'b@c.it',
       'hello.world@example.com',
       'michael.h@example.com',
       'x.y.z@m.io' )
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.3 FIND_EMAIL_FROM Function

Finds first occurrence of "From:" and the first email after the "From:".

Syntax

```
APEX_STRING_UTIL.FIND_EMAIL_FROM (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter  | Description       |
|:-----------|:------------------|
| `p_string` | The input string. |

Returns

This function returns the from address.

Example

```
declare
    l_string varchar2(32767) := 'From: Marc Sample <marc.sample@example.com>'||chr(10)||
                                'Subject: Status Meeting'||chr(10)||
                                'Date';
    l_result varchar2(4000);
begin
    l_result := apex_string_util.find_email_from(l_string);
    dbms_output.put_line('from = "'||l_result||'"');
end;
/
declare
    l_string varchar2(32767) := 'Elmar J. Fud <elmar.fud@example.com> wrote:';
    l_result varchar2(4000);
begin
    l_result := apex_string_util.find_email_from(l_string);
    dbms_output.put_line('from = "'||l_result||'"');
end;
/
-> from = "marc.sample@example.com"
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.4 FIND_EMAIL_SUBJECT Function

This function finds the subject text in a given email string.

Syntax

```
APEX_STRING_UTIL.FIND_EMAIL_SUBJECT (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter  | Description       |
|:-----------|:------------------|
| `p_string` | The input string. |

Returns

This function returns the subject line.

Example

```
declare
    l_string varchar2(32767) := 'From: Marc Sample <marc.sample@example.com>'||chr(10)||
                                'Subject: Status Meeting'||chr(10)||
                                'Date';
    l_result varchar2(4000);
begin
    l_result := apex_string_util.find_email_subject(l_string);
    dbms_output.put_line('Subject = "'||l_result||'"');
end;
/
-> Subject = "Status meeting"
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.5 FIND_IDENTIFIERS Function

Given an identifier's prefix, this function finds the identifiers including consecutive numbers following. The search is case insensitive and also ignores white space and special characters.

Syntax

```
FUNCTION FIND_IDENTIFIERS (
    p_string IN VARCHAR2,
    p_prefix IN VARCHAR2 )
    RETURN apex_t_varchar2;
```

Parameters

| Parameter  | Description            |
|:-----------|:-----------------------|
| `p_string` | The input string.      |
| `p_prefix` | The identifier prefix. |

Returns

Returns an array of identifiers present in a string.

Example

```
DECLARE
    l_string  varchar2(32767) :=
    'ORA-02291: integrity constraint (A.B.C) violated - parent key not found '||
    'SR # 3-17627996921 bug: 23423 feature 100022 and feature: 1000001 rptno=28487031 sr# 1111111,  '||
    ' i have filed bug 27911887.';
    l_results apex_t_varchar2;
BEGIN
    l_results := apex_string_util.find_identifiers(l_string,'ORA-');
    l_results := apex_string_util.find_identifiers(l_string,'sr ');
    l_results := apex_string_util.find_identifiers(l_string,'feature ');
    l_results := apex_string_util.find_identifiers(l_string,'bug ');
    l_results := apex_string_util.find_identifiers(l_string,'rptno=');
END;
/
-> apex_t_varchar2('ORA-02291')
-> apex_t_varchar2('SR 3-17627996921','SR 1111111')
-> apex_t_varchar2('FEATURE 100022','FEATURE 1000001')
-> apex_t_varchar2('BUG 23423','BUG 27911887')
-> apex_t_varchar2('RPTNO=28487031')
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.6 FIND_LINKS Function

This function finds `https` and `http` hypertext links within text. The URL is preserved and the protocol is returned in lower case.

Syntax

```
APEX_STRING_UTIL.FIND_LINKS (
    p_string     IN VARCHAR2,
    p_https_only IN BOOLEAN  DEFAULT FALSE )
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
<th id="d269102e77" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d269102e79" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d269102e83" style="text-align: left;" data-valign="top" width="31%" headers="d269102e77 "><code class="codeph">p_string</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d269102e83 d269102e79 ">The input string.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d269102e89" style="text-align: left;" data-valign="top" width="31%" headers="d269102e77 "><code class="codeph">p_https_only</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d269102e89 d269102e79 "><p>Default <code class="codeph">FALSE</code>.</p>
<p>If <code class="codeph">TRUE</code>, only returns <code class="codeph">https://</code> links.</p></td>
</tr>
</tbody>
</table>

Returns

This function returns an array of links.

Example

```
DECLARE
    l_string  varchar2(32767) := 'http://example.com i website.com like https://carbuzz.com '||
                                 'and <a href="https://dpreview.com"> and http://google.com';
    l_results apex_t_varchar2;
BEGIN
    l_results := apex_string_util.find_links(l_string,false);
END;
/
-> apex_t_string (
       'https://carbuzz.com',
       'https://dpreview.com',
       'http://google.com' )
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.7 FIND_PHRASES Function

This function finds the occurrences of `p_string` in `p_phrase` return in an array. The search is case insensitive and also ignores white space and special characters.

Syntax

```
APEX_STRING_UTIL.FIND_PHRASES (
    p_phrases IN apex_t_varchar2,
    p_string  IN VARCHAR2 )
    RETURN apex_t_varchar2;
```

Parameters

| Parameter   | Description         |
|:------------|:--------------------|
| `p_phrases` | A table of phrases. |
| `p_string`  | The input string.   |

Returns

This function returns an array of phrases that were found, without duplicates.

Example

```
DECLARE
    l_phrases apex_t_varchar2 := apex_t_varchar2();
    l_arr     apex_t_varchar2 := apex_t_varchar2();
    l_string  varchar2(4000) := 'how now brown cow';
BEGIN
    apex_string.push(l_phrases,'brown');
    apex_string.push(l_phrases,'cow');
    apex_string.push(l_phrases,'brown cow');
    l_arr := apex_string_util.find_phrases(l_phrases,l_string);
END;
    /
    apex_t_varchar2('brown','cow','brown cow')
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.8 FIND_TAGS Function

This function finds all strings identified by a tag prefix. The search is case insensitive and also ignores white space and special characters.

This function searches for a tag prefix (such as `#`) at the start of a string or within the text after a space. This function also recognizes repeated tag prefixes (such as `##`).

The return excludes the prefix identifier (`tag` instead of `#tag`).

Syntax

```
APEX_STRING_UTIL.FIND_TAGS (
    p_string            IN  VARCHAR2,
    p_prefix            IN  VARCHAR2 DEFAULT '#',
    p_exclude_numeric   IN  BOOLEAN DEFAULT TRUE )
RETURN apex_t_varchar2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_string` | The input string. |
| `p_prefix` | The tag prefix (default `#`). |
| `p_exclude_numeric` | If `TRUE` (default), excludes values that only contain the tag prefix and digits. |

Returns

This function returns the found tags in upper case.

Example

```
DECLARE
    l_tags   apex_t_varchar2;
    l_string varchar2(4000) := 'how now #orclapex @mike brown #cow';
BEGIN
    l_tags := apex_string_util.find_tags(l_string,'#');
    l_tags := apex_string_util.find_tags(l_string,'@');
END;
/
-> apex_t_varchar2('#ORCLAPEX','#COW')
-> apex_t_varchar2('@MIKE')
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.9 GET_DOMAIN Function

This function extracts a domain from a link or email.

Syntax

```
APEX_STRING_UTIL.GET_DOMAIN (
    p_string IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter  | Description       |
|:-----------|:------------------|
| `p_string` | The input string. |

Returns

This function returns a domain from a url or email.

Example

```
select apex_string_util.get_domain('https://apex.oracle.com/en/platform/low-code/') from dual
-> apex.oracle.com
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.10 GET_FILE_EXTENSION Function

This function returns a file name's extension.

Syntax

```
FUNCTION GET_FILE_EXTENSION (
    p_filename      IN VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter    | Description   |
|:-------------|:--------------|
| `p_filename` | The filename. |

Returns

This function returns the file name's extension in lower case.

Example

The following example shows how to use the `GET_FILE_EXTENSION` function.

```
select apex_string_util.get_file_extension('foo.pPtx') from dual
-> pptx
select apex_string_util.get_file_extension('PLEASE.READ.ME.TXT') from dual
-> txt
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.11 GET_SLUG Function

Use this function to convert the input string to a "-" separated string, with special characters removed. The returned string contains a maximum of 255 characters in total, including hash (if requested).

Syntax

```
APEX_STRING_UTIL.GET_SLUG (
    p_string               IN VARCHAR2,
    p_hash_length          IN PLS_INTEGER DEFAULT 0 )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_string` | The input string. |
| `p_hash_length` | If \> 0 (default is `0`), append random digits to make the result unique. The longest hash that may be returned is 38 digits. |

Example

```
select apex_string_util.get_slug('hey now, brown cow! 1') from dual;
-> hey-now-brown-cow-1
--
select apex_string_util.get_slug('hey now, brown cow! 1',4) from dual;
-> hey-now-brown-cow-1-3486
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.12 PHRASE_EXISTS Function

This function returns whether the given phrase is in `p_string`. The search is case insensitive and also ignores white space and special characters.

Syntax

```
APEX_STRING_UTIL.PHRASE_EXISTS (
    p_phrase   IN VARCHAR2,
    p_string   IN VARCHAR2 )
RETURN BOOLEAN;
```

Parameters

| Parameter  | Description       |
|:-----------|:------------------|
| `p_phrase` | The given phrase. |
| `p_string` | The input string. |

Returns

This function returns `TRUE` if the phrase was found. Otherwise, this function returns `FALSE`.

Example

The following example shows how to use the `PHRASE_EXISTS` function.

```
DECLARE
    l_phrase varchar2(4000) := 'sqldeveloper';
    l_string varchar2(4000) := 'how now brown cow sqldeveloper? sql developer.';
BEGIN
    IF apex_string_util.phrase_exists(l_phrase,l_string) then
        dbms_output.put_line('found');
    ELSE
        dbms_output.put_line('NOT found');
    END IF;
END;
/
-> found
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.13 REPLACE_WHITESPACE Function

This function can be used to tokenize the input. It replaces white space and special characters with the given whitespace character. It also lower-cases the input. If `p_original_find` contains '`.`' or '`#`', these characters are also replaced by white space.

Syntax

```
APEX_STRING_UTIL.REPLACE_WHITESPACE (
    p_string               IN VARCHAR,
    p_original_find        IN VARCHAR2 DEFAULT NULL,
    p_whitespace_character IN VARCHAR2 DEFAULT '|')
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_string` | The input string. |
| `p_original_find` | A set of characters that were already found in a preceding search operation. |
| `p_whitespace_character` | The separator character. |

Returns

This function returns the input string in lower case with all special characters replaced.

Example

```
select apex_string_util.replace_whitespace('foo: Bar...Baz') from dual
-> |foo|bar|baz|
select apex_string_util.replace_whitespace('foo: Bar...Baz',null,'*') from dual
-> *foo*bar*baz*
select apex_string_util.replace_whitespace('foo: Bar...Baz','.','*') from dual
-> *foo*bar...baz*
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)

------------------------------------------------------------------------

## 58.14 TO_DISPLAY_FILESIZE Function

This function returns a friendly file size, given a size in bytes (for example, 5.1MB or 6GB).

Syntax

```
APEX_STRING_UTIL.TO_DISPLAY_FILESIZE (
    p_size_in_bytes     IN  NUMBER )
    RETURN VARCHAR2;
```

Parameters

| Parameter         | Description              |
|:------------------|:-------------------------|
| `p_size_in_bytes` | The input size in bytes. |

Returns

Returns the file size with a unit.

Example

```
select apex_string_util.to_display_filesize(1312312312) from dual;
-> 1.2GB
```

**Parent topic:** [APEX_STRING_UTIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_STRING_UTIL.html#GUID-E939DB34-40A0-4CBE-B9F4-A3F5E878C113)
