<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 40  APEX_LDAP

You can use `APEX_LDAP` to perform various operations related to Lightweight Directory Access Protocol (LDAP) authentication.

- [AUTHENTICATE Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/AUTHENTICATE-Function.html#GUID-6E036FCC-DF11-4696-91E0-879E87BE876B)
- [GET_ALL_USER_ATTRIBUTES Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GET_ALL_USER_ATTRIBUTES-Procedure.html#GUID-6DA4B634-14E7-4132-98C5-AAE93BC6EA3A)
- [GET_USER_ATTRIBUTES Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GET_USER_ATTRIBUTES-Procedure.html#GUID-DE8E045A-3BE9-4072-A9A5-F107D6BCC218)
- [IS_MEMBER Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/IS_MEMBER-Function.html#GUID-5F12A2CD-805F-4DC6-8382-9BF9F3E9AE32)
- [MEMBER_OF Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/MEMBER_OF-Function.html#GUID-A00AFE37-BEFD-46BC-9E9A-108496530624)
- [MEMBER_OF2 Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/MEMBER_OF2-Function.html#GUID-3B8B2963-0F88-41F9-9D83-33E3ADB5A631)
- [SEARCH Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.SEARCH-Function.html#GUID-A4A143A2-DFD9-4AF1-B871-16123339905B)

------------------------------------------------------------------------

## 40.1 AUTHENTICATE Function

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
<th id="d196780e75" style="text-align: left;" data-valign="bottom" width="23%">Parameter</th>
<th id="d196780e77" style="text-align: left;" data-valign="bottom" width="77%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d196780e81" style="text-align: left;" data-valign="top" width="23%" headers="d196780e75 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d196780e81 d196780e77 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d196780e87" style="text-align: left;" data-valign="top" width="23%" headers="d196780e75 "><code class="codeph">p_password</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d196780e87 d196780e77 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d196780e96" style="text-align: left;" data-valign="top" width="23%" headers="d196780e75 "><code class="codeph">p_search_base</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d196780e96 d196780e77 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d196780e105" style="text-align: left;" data-valign="top" width="23%" headers="d196780e75 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d196780e105 d196780e77 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d196780e111" style="text-align: left;" data-valign="top" width="23%" headers="d196780e75 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d196780e111 d196780e77 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d196780e117" style="text-align: left;" data-valign="top" width="23%" headers="d196780e75 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d196780e117 d196780e77 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
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

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 40.2 GET_ALL_USER_ATTRIBUTES Procedure

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
<th id="d197137e75" style="text-align: left;" data-valign="bottom" width="27%">Parameter</th>
<th id="d197137e77" style="text-align: left;" data-valign="bottom" width="73%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d197137e81" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e81 d197137e77 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e87" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e87 d197137e77 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e96" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e96 d197137e77 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e105" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e105 d197137e77 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e111" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e111 d197137e77 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e117" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e117 d197137e77 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e137" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e137 d197137e77 ">An array of attribute names returned.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e143" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_attribute_values</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e143 d197137e77 ">An array of values returned for each corresponding attribute name returned in <code class="codeph">p_attributes</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197137e152" style="text-align: left;" data-valign="top" width="27%" headers="d197137e75 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="73%" headers="d197137e152 d197137e77 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
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

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 40.3 GET_USER_ATTRIBUTES Procedure

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
<th id="d197620e81" style="text-align: left;" data-valign="bottom" width="28%">Parameter</th>
<th id="d197620e83" style="text-align: left;" data-valign="bottom" width="72%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d197620e87" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e87 d197620e83 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e93" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e93 d197620e83 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e102" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e102 d197620e83 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e111" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e111 d197620e83 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e117" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e117 d197620e83 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e123" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e123 d197620e83 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e143" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_attributes</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e143 d197620e83 ">An array of attribute names for which values are to be returned.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e149" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_attribute_values</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e149 d197620e83 ">An array of values returned for each corresponding attribute name in <code class="codeph">p_attributes</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d197620e158" style="text-align: left;" data-valign="top" width="28%" headers="d197620e81 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d197620e158 d197620e83 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
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

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 40.4 IS_MEMBER Function

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
<th id="d198109e78" style="text-align: left;" data-valign="bottom" width="19%">Parameter</th>
<th id="d198109e80" style="text-align: left;" data-valign="bottom" width="81%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d198109e84" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e84 d198109e80 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e90" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e90 d198109e80 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e99" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e99 d198109e80 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e108" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e108 d198109e80 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e114" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e114 d198109e80 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e120" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e120 d198109e80 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e140" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_group</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e140 d198109e80 ">Name of the group to be search for membership.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e146" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_group_base</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e146 d198109e80 ">The base from which the search should be started.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198109e152" style="text-align: left;" data-valign="top" width="19%" headers="d198109e78 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198109e152 d198109e80 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
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

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 40.5 MEMBER_OF Function

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
<th id="d198592e72" style="text-align: left;" data-valign="bottom" width="25%">Parameter</th>
<th id="d198592e74" style="text-align: left;" data-valign="bottom" width="75%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d198592e78" style="text-align: left;" data-valign="top" width="25%" headers="d198592e72 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d198592e78 d198592e74 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198592e84" style="text-align: left;" data-valign="top" width="25%" headers="d198592e72 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d198592e84 d198592e74 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198592e93" style="text-align: left;" data-valign="top" width="25%" headers="d198592e72 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d198592e93 d198592e74 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198592e102" style="text-align: left;" data-valign="top" width="25%" headers="d198592e72 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d198592e102 d198592e74 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198592e108" style="text-align: left;" data-valign="top" width="25%" headers="d198592e72 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d198592e108 d198592e74 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198592e114" style="text-align: left;" data-valign="top" width="25%" headers="d198592e72 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d198592e114 d198592e74 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198592e134" style="text-align: left;" data-valign="top" width="25%" headers="d198592e72 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="75%" headers="d198592e134 d198592e74 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
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

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 40.6 MEMBER_OF2 Function

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
<th id="d198993e75" style="text-align: left;" data-valign="bottom" width="19%">Parameter</th>
<th id="d198993e77" style="text-align: left;" data-valign="bottom" width="81%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d198993e81" style="text-align: left;" data-valign="top" width="19%" headers="d198993e75 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198993e81 d198993e77 ">Login name of the user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198993e87" style="text-align: left;" data-valign="top" width="19%" headers="d198993e75 "><code class="codeph">p_pass</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198993e87 d198993e77 ">Password for <code class="codeph">p_username</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198993e96" style="text-align: left;" data-valign="top" width="19%" headers="d198993e75 "><code class="codeph">p_auth_base</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198993e96 d198993e77 ">LDAP search base, for example, <code class="codeph">dc=users,dc=my,dc=org</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198993e105" style="text-align: left;" data-valign="top" width="19%" headers="d198993e75 "><code class="codeph">p_host</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198993e105 d198993e77 ">LDAP server host name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198993e111" style="text-align: left;" data-valign="top" width="19%" headers="d198993e75 "><code class="codeph">p_port</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198993e111 d198993e77 ">LDAP server port number.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198993e117" style="text-align: left;" data-valign="top" width="19%" headers="d198993e75 "><code class="codeph">p_use_ssl</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198993e117 d198993e77 "><p>(Default) Set to <code class="codeph">N</code> to not use SSL.</p>
<p>Set to <code class="codeph">Y</code> to use SSL in bind to LDAP server.</p>
<p>Set to <code class="codeph">A</code> to use SSL with one-way authentication (requires LDAP server certificate configured in an Oracle wallet).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d198993e137" style="text-align: left;" data-valign="top" width="19%" headers="d198993e75 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="81%" headers="d198993e137 d198993e77 "><p>The credential static ID (can be NULL for anonymous or username/pass binds).</p>
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

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)

------------------------------------------------------------------------

## 40.7 SEARCH Function

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

**Parent topic:** [APEX_LDAP](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_LDAP.html#GUID-0BE5C87B-BF08-4B80-BA42-5A08CE5923AC)
