<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 42  APEX_LDAP

You can use `APEX_LDAP` to perform various operations related to Lightweight Directory Access Protocol (LDAP) authentication.

- [AUTHENTICATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/AUTHENTICATE-Function.html#GUID-6E036FCC-DF11-4696-91E0-879E87BE876B)
- [GET_ALL_USER_ATTRIBUTES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_ALL_USER_ATTRIBUTES-Procedure.html#GUID-6DA4B634-14E7-4132-98C5-AAE93BC6EA3A)
- [GET_USER_ATTRIBUTES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_USER_ATTRIBUTES-Procedure.html#GUID-DE8E045A-3BE9-4072-A9A5-F107D6BCC218)
- [IS_MEMBER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_MEMBER-Function.html#GUID-5F12A2CD-805F-4DC6-8382-9BF9F3E9AE32)
- [MEMBER_OF Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MEMBER_OF-Function.html#GUID-A00AFE37-BEFD-46BC-9E9A-108496530624)
- [MEMBER_OF2 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MEMBER_OF2-Function.html#GUID-3B8B2963-0F88-41F9-9D83-33E3ADB5A631)
- [SEARCH Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.SEARCH-Function.html#GUID-A4A143A2-DFD9-4AF1-B871-16123339905B)

------------------------------------------------------------------------

## 42.1 AUTHENTICATE Function

This function returns a boolean `TRUE` if the user name and password can be used to perform a `SIMPLE_BIND_S` call using the provided search base, host, and port.

Syntax

```
APEX_LDAP.AUTHENTICATE (
    p_username     IN VARCHAR2 DEFAULT NULL,
    p_password     IN VARCHAR2 DEFAULT NULL,
    p_search_base  IN VARCHAR2,
    p_host         IN VARCHAR2,
    p_port         IN VARCHAR2 DEFAULT 389,
    p_use_ssl      IN VARCHAR2 DEFAULT 'N' )
RETURN BOOLEAN;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d215645e77" style="text-align: left;" data-valign="bottom" width="23%">Parameter</th>
<th id="d215645e79" style="text-align: left;" data-valign="bottom" width="77%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d215645e83" style="text-align: left;" data-valign="top" width="23%" headers="d215645e77 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d215645e83 d215645e79 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d215645e89" style="text-align: left;" data-valign="top" width="23%" headers="d215645e77 "><code class="codeph">p_password</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d215645e89 d215645e79 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d215645e98" style="text-align: left;" data-valign="top" width="23%" headers="d215645e77 "><code class="codeph">p_search_base</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d215645e98 d215645e79 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d215645e107" style="text-align: left;" data-valign="top" width="23%" headers="d215645e77 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d215645e107 d215645e79 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d215645e113" style="text-align: left;" data-valign="top" width="23%" headers="d215645e77 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d215645e113 d215645e79 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d215645e119" style="text-align: left;" data-valign="top" width="23%" headers="d215645e77 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d215645e119 d215645e79 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
</tbody>
</table>

Example

The following example demostrates how to use the `APEX_LDAP.AUTHENTICATE` function to verify user credentials against an LDAP Server.

```
IF APEX_LDAP.AUTHENTICATE(
    p_username => 'firstname.lastname',
    p_password => 'abcdef',
    p_search_base => 'cn=user,l=amer,dc=example,dc=com',
    p_host => 'our_ldap_sever.example.com',
    p_port => '636',
    p_use_ssl => 'A') THEN

    dbms_output.put_line('authenticated');
ELSE
    dbms_output.put_line('authentication failed');
END IF;
```

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 42.2 GET_ALL_USER_ATTRIBUTES Procedure

This procedure returns two OUT arrays of `user_attribute` names and values for the user name designated by `p_username` (with password if required) using the provided auth base, host, and port.

Syntax

```
APEX_LDAP.GET_ALL_USER_ATTRIBUTES (
    p_username              IN VARCHAR2 DEFAULT NULL,
    p_pass                  IN VARCHAR2 DEFAULT NULL,
    p_auth_base             IN VARCHAR2 DEFAULT NULL,
    p_host                  IN VARCHAR2,
    p_port                  IN VARCHAR2 DEFAULT 636,
    p_use_ssl               IN VARCHAR2 DEFAULT 'N',
    p_attributes            OUT apex_application_global.vc_arr2,
    p_attribute_values      OUT apex_application_global.vc_arr2,
    p_credential_static_id  IN VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d216002e77" style="text-align: left;" data-valign="bottom" width="27%">Parameter</th>
<th id="d216002e79" style="text-align: left;" data-valign="bottom" width="73%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d216002e83" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e83 d216002e79 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e89" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e89 d216002e79 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e98" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e98 d216002e79 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e107" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e107 d216002e79 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e113" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e113 d216002e79 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e119" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e119 d216002e79 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e139" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e139 d216002e79 ">An array of attribute names returned.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e145" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_attribute_values</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e145 d216002e79 ">An array of values returned for each corresponding attribute name returned in <code class="codeph">p_attributes</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216002e154" style="text-align: left;" data-valign="top" width="27%" headers="d216002e77 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d216002e154 d216002e79 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
<p>If it is not NULL and the credential could not be found, then raises the error <code class="codeph">no_data_found</code>.</p></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `APEX_LDAP.GET_ALL_USER_ATTRIBUTES` procedure to retrieve all attribute value's associated to a user.

```
DECLARE
    L_ATTRIBUTES apex_application_global.vc_arr2;
    L_ATTRIBUTE_VALUES apex_application_global.vc_arr2;
BEGIN
    APEX_LDAP.GET_ALL_USER_ATTRIBUTES(
        p_username => 'firstname.lastname',
        p_pass => 'abcdef',
        p_auth_base => 'cn=user,l=amer,dc=example,dc=com',
        p_host => 'our_ldap_sever.example.com',
        p_port => '636',
        p_user_ssl => 'A',
        p_attributes => L_ATTRIBUTES,
        p_attribute_values => L_ATTRIBUTE_VALUES);

     FOR i IN L_ATTRIBUTES.FIRST..L_ATTRIBUTES.LAST LOOP
         htp.p('attribute name: '||L_ATTRIBUTES(i));
         htp.p('attribute value: '||L_ATTRIBUTE_VALUES(i));
     END LOOP;
END;
```

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 42.3 GET_USER_ATTRIBUTES Procedure

This procedure returns an `OUT` array of `user_attribute` values for the user name designated by `p_username` (with password if required) corresponding to the attribute names passed in `p_attributes` using the provided auth base, host, and port.

Syntax

```
APEX_LDAP.GET_USER_ATTRIBUTES (
    p_username              IN   VARCHAR2 DEFAULT NULL,
    p_pass                  IN   VARCHAR2 DEFAULT NULL,
    p_auth_base             IN   VARCHAR2,
    p_host                  IN   VARCHAR2,
    p_port                  IN   VARCHAR2 DEFAULT 389,
    p_use_ssl               IN   VARCHAR2 DEFAULT 'N',
    p_attributes            IN   apex_application_global.vc_arr2,
    p_attribute_values      OUT  apex_application_global.vc_arr2,
    p_credential_static_id  IN   VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d216485e83" style="text-align: left;" data-valign="bottom" width="28%">Parameter</th>
<th id="d216485e85" style="text-align: left;" data-valign="bottom" width="72%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d216485e89" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e89 d216485e85 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e95" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e95 d216485e85 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e104" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e104 d216485e85 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e113" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e113 d216485e85 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e119" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e119 d216485e85 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e125" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e125 d216485e85 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e145" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e145 d216485e85 ">An array of attribute names for which values are to be returned.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e151" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_attribute_values</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e151 d216485e85 ">An array of values returned for each corresponding attribute name in <code class="codeph">p_attributes</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216485e160" style="text-align: left;" data-valign="top" width="28%" headers="d216485e83 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d216485e160 d216485e85 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
<p>If it is not NULL and the credential could not be found, then raises the error <code class="codeph">no_data_found</code>.</p></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `APEX_LDAP.GET_USER_ATTRIBUTES` procedure to retrieve a specific attribute value associated to a user.

```
DECLARE
    L_ATTRIBUTES apex_application_global.vc_arr2;
    L_ATTRIBUTE_VALUES apex_application_global.vc_arr2;
BEGIN
    L_ATTRIBUTES(1) := 'xxxxxxxxxx'; /* name of the employee number attribute */
    APEX_LDAP.GET_USER_ATTRIBUTES(
        p_username => 'firstname.lastname',
        p_pass => NULL,
        p_auth_base => 'cn=user,l=amer,dc=example,dc=com',
        p_host => 'our_ldap_sever.example.com',
        p_port => '636',
        p_use_ssl => 'A',
        p_attributes => L_ATTRIBUTES,
        p_attribute_values => L_ATTRIBUTE_VALUES);
END;
```

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 42.4 IS_MEMBER Function

This function returns a boolean TRUE if the user named by `p_username` (with password if required) is a member of the group specified by the `p_group` and `p_group_base` parameters using the provided auth base, host, and port.

Syntax

```
APEX_LDAP.IS_MEMBER (
    p_username              IN VARCHAR2,
    p_pass                  IN VARCHAR2 DEFAULT NULL,
    p_auth_base             IN VARCHAR2,
    p_host                  IN VARCHAR2,
    p_port                  IN VARCHAR2 DEFAULT 389,
    p_use_ssl               IN VARCHAR2 DEFAULT 'N',
    p_group                 IN VARCHAR2,
    p_group_base            IN VARCHAR2,
    p_credential_static_id  IN VARCHAR2 DEFAULT NULL );
RETURN BOOLEAN;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d216974e80" style="text-align: left;" data-valign="bottom" width="19%">Parameter</th>
<th id="d216974e82" style="text-align: left;" data-valign="bottom" width="81%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d216974e86" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e86 d216974e82 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e92" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e92 d216974e82 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e101" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e101 d216974e82 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e110" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e110 d216974e82 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e116" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e116 d216974e82 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e122" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e122 d216974e82 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e142" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_group</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e142 d216974e82 ">Name of the group to be search for membership.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e148" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_group_base</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e148 d216974e82 ">The base from which the search should be started.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d216974e154" style="text-align: left;" data-valign="top" width="19%" headers="d216974e80 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d216974e154 d216974e82 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
<p>If it is not NULL and the credential could not be found, then raises the error <code class="codeph">no_data_found</code>.</p></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `APEX_LDAP.IS_MEMBER` function to verify whether a user is a member of a group against an LDAP server.

```
DECLARE
    L_VAL boolean;
BEGIN
    L_VAL := APEX_LDAP.IS_MEMBER(
        p_username =>'firstname.lastname',
        p_pass =>'abcdef',
        p_auth_base => 'cn=user,l=amer,dc=example,dc=com',
        p_host => 'our_ldap_sever.example.com',
        p_port => '636',
        p_use_ssl => 'A',
        p_group => 'group_name',
        p_group_base => 'group_base');
    IF L_VAL THEN
        htp.p('Is a member.');
    ELSE
        htp.p('Not a member.');
    END IF;
END;
```

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 42.5 MEMBER_OF Function

This function returns an array of groups the user name designated by `p_username` (with password if required) belongs to, using the provided auth base, host, and port.

Syntax

```
APEX_LDAP.MEMBER_OF (
    p_username              IN VARCHAR2 DEFAULT NULL,
    p_pass                  IN VARCHAR2 DEFAULT NULL,
    p_auth_base             IN VARCHAR2,
    p_host                  IN VARCHAR2,
    p_port                  IN VARCHAR2 DEFAULT 389,
    p_use_ssl               IN VARCHAR2 DEFAULT 'N',
    p_credential_static_id  IN VARCHAR2 DEFAULT NULL );
RETURN apex_application_global.vc_arr2;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d217457e74" style="text-align: left;" data-valign="bottom" width="25%">Parameter</th>
<th id="d217457e76" style="text-align: left;" data-valign="bottom" width="75%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d217457e80" style="text-align: left;" data-valign="top" width="25%" headers="d217457e74 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d217457e80 d217457e76 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217457e86" style="text-align: left;" data-valign="top" width="25%" headers="d217457e74 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d217457e86 d217457e76 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217457e95" style="text-align: left;" data-valign="top" width="25%" headers="d217457e74 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d217457e95 d217457e76 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217457e104" style="text-align: left;" data-valign="top" width="25%" headers="d217457e74 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d217457e104 d217457e76 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217457e110" style="text-align: left;" data-valign="top" width="25%" headers="d217457e74 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d217457e110 d217457e76 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217457e116" style="text-align: left;" data-valign="top" width="25%" headers="d217457e74 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d217457e116 d217457e76 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217457e136" style="text-align: left;" data-valign="top" width="25%" headers="d217457e74 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d217457e136 d217457e76 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
<p>If it is not NULL and the credential could not be found, then raises the error <code class="codeph">no_data_found</code>.</p></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `APEX_LDAP.MEMBER_OF` function to retrieve all the groups designated by the specified username.

```
DECLARE
    L_MEMBERSHIP apex_application_global.vc_arr2;
BEGIN
    L_MEMBERSHIP := APEX_LDAP.MEMBER_OF(
        p_username => 'firstname.lastname',
        p_pass => 'abcdef',
        p_auth_base => 'cn=user,l=amer,dc=example,dc=com',
        p_host => 'our_ldap_sever.example.com',
        p_port => '636'
        p_use_ssl => 'A');

    FOR i IN L_MEMBERSHIP.FIRST..L_MEMBERSHIP.LAST LOOP
        htp.p('Member of: '||L_MEMBERSHIP(i));
    END LOOP;
END;
```

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 42.6 MEMBER_OF2 Function

This function returns a `VARCHAR2` colon delimited list of groups the user name designated by `p_username` (with password if required) belongs to, using the provided auth base, host, and port.

Syntax

```
APEX_LDAP.MEMBER_OF2 (
    p_username     IN VARCHAR2 DEFAULT NULL,
    p_pass         IN VARCHAR2 DEFAULT NULL,
    p_auth_base    IN VARCHAR2,
    p_host         IN VARCHAR2,
    p_port         IN VARCHAR2 DEFAULT 389,
    p_use_ssl      IN VARCHAR2 DEFAULT 'N',
    p_credential_static_id  IN VARCHAR2 DEFAULT NULL );
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
<th id="d217858e77" style="text-align: left;" data-valign="bottom" width="19%">Parameter</th>
<th id="d217858e79" style="text-align: left;" data-valign="bottom" width="81%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d217858e83" style="text-align: left;" data-valign="top" width="19%" headers="d217858e77 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d217858e83 d217858e79 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217858e89" style="text-align: left;" data-valign="top" width="19%" headers="d217858e77 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d217858e89 d217858e79 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217858e98" style="text-align: left;" data-valign="top" width="19%" headers="d217858e77 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d217858e98 d217858e79 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217858e107" style="text-align: left;" data-valign="top" width="19%" headers="d217858e77 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d217858e107 d217858e79 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217858e113" style="text-align: left;" data-valign="top" width="19%" headers="d217858e77 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d217858e113 d217858e79 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217858e119" style="text-align: left;" data-valign="top" width="19%" headers="d217858e77 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d217858e119 d217858e79 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d217858e139" style="text-align: left;" data-valign="top" width="19%" headers="d217858e77 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d217858e139 d217858e79 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
<p>If it is not NULL and the credential could not be found, then raises the error <code class="codeph">no_data_found</code>.</p></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `APEX_LDAP.MEMBER_OF2` function to retreive all the groups designated by the specified username.

```
DECLARE
    L_VAL varchar2(4000);
BEGIN
    L_VAL := APEX_LDAP.MEMBER_OF2(
        p_username => 'firstname.lastname',
        p_pass => 'abcdef',
        p_auth_base => 'cn=user,l=amer,dc=example,dc=com',
        p_host => 'our_ldap_sever.example.com',
        p_port => '636',
        p_use_ssl => 'A');

    htp.p('Is Member of:'||L_VAL);
END;
```

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 42.7 SEARCH Function

The `SEARCH` function searches the LDAP repository and returns an object table of (dn, name, val) that can be used in table queries.

Syntax

```
APEX_LDAP.SEARCH (
    p_username             IN VARCHAR2 DEFAULT NULL,
    p_pass                 IN VARCHAR2 DEFAULT NULL,
    p_auth_base            IN VARCHAR2 DEFAULT NULL,
    p_host                 IN VARCHAR2,
    p_port                 IN NUMBER   DEFAULT 389,
    p_use_ssl              IN VARCHAR2 DEFAULT 'N',
    p_search_base          IN VARCHAR2,
    p_search_filter        IN VARCHAR2,
    p_scope                IN binary_integer DEFAULT
                                   sys.dbms_ldap.scope_subtree,
    p_timeout_sec          IN binary_integer DEFAULT 3,
    p_attribute_names      IN VARCHAR2,
    p_credential_static_id IN VARCHAR2 DEFAULT NULL )
    RETURN apex_t_ldap_attributes pipelined;
```

Parameters

| Parameter | Descriptions |
|:---|:---|
| `p_username` | Username to connect as (can be `null` for anonymous binds). |
| `p_pass` | Password of `p_username` (can be `null` for anonymous binds). |
| `p_auth_base` | Authentication base dn for `p_username` (can be `null` for anonymous binds). |
| `p_host` | LDAP server hostname. |
| `p_port` | LDAP server port (default `389`). |
| `p_use_ssl` | `Y` if a SSL connection is required (default `N`). |
| `p_search_base` | dn base for the search. |
| `p_search_filter` | LDAP search filter expression. |
| `p_scope` | Search scope (default descends into sub-trees). |
| `p_timeout_sec` | Timeout for the search (default `3` seconds). |
| `p_attribute_names` | Comma-separated list of return attribute names. |
| `p_credential_static_id` | The credential static ID (can be `null` for anonymous or username/pass binds). If it is not null and the credential could not be found, then raises the error `no_data_found`. |

Example 1

```
SELECT val group_dns
  FROM table(apex_ldap.search (
           p_host            => 'ldap.example.com',
           p_port            => '636',
           p_use_ssl         => 'A',
           p_search_base     => 'dc=example,dc=com',
           p_search_filter   => 'uid='||apex_escape.ldap_search_filter(:APP_USER),
           p_attribute_names => 'memberof' ));
```

Example 2

```
SELECT dn, mail, dispname, phone
  FROM ( select dn, name, val
           from table(apex_ldap.search (
                          p_host            => 'ldap.example.com',
                          p_port            => '636',
                          p_use_ssl         => 'A',
                          p_search_base     => 'dc=example,dc=com',
                          p_search_filter   => '&(objectClass=person)(ou=Test)',
                          p_attribute_names => 'mail,displayname,telephonenumber' )))
  pivot (min(val) for name in ( 'mail'            mail,
                                'displayname'     dispname,
                                'telephonenumber' phone ))
```

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)
