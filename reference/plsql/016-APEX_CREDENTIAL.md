<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 16  APEX_CREDENTIAL

You can use the `APEX_CREDENTIAL` package to change stored credentials either persistently or for the current APEX session only.

- [CLEAR_TOKENS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_TOKENS-Procedure.html#GUID-25B2697F-C9E8-42A8-AE0C-E52437B247DD)
- [CREATE_CREDENTIAL Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CREDENTIAL-Procedure-Signature-1.html#GUID-72E64FBF-C0B8-40EE-ABCB-67766F2304A7)
- [CREATE_CREDENTIAL Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_CREDENTIAL-Procedure-Signature-2.html#GUID-9A3B04C6-49B2-465B-91A9-AAA86324AEA9)
- [DROP_CREDENTIAL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DROP_CREDENTIAL-Procedure.html#GUID-4257D6FB-70AD-463C-8D87-2827219BEF73)
- [SET_ALLOWED_URLS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_ALLOWED_URLS-Procedure.html#GUID-7CCA4D3B-732A-4B11-9DDF-F82A2112CA1B)
- [SET_DATABASE_CREDENTIAL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_DATABASE_CREDENTIAL-Procedure.html#GUID-19DE0E3E-BBFB-4F42-AA53-FA59862D863D)
- [SET_PERSISTENT_CREDENTIALS Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_CREDENTIAL-Procedure-Signature-1.html#GUID-98E9B643-4BE7-46F0-AAFB-BF9B48C427E5)
- [SET_PERSISTENT_CREDENTIALS Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_CREDENTIAL-Procedure-Signature-2.html#GUID-24A756EC-BCE9-4875-A42F-46A84F0C4E10)
- [SET_PERSISTENT_CREDENTIALS Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS-Procedure-Signature-3.html#GUID-CEC2A6F5-961C-4DDE-80F5-51EE75C1C3E2)
- [SET_PERSISTENT_TOKEN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_PERSISTENT_TOKEN-Procedure.html#GUID-4BDCAD5D-8666-4BA8-972C-301894371FC2)
- [SET_SCOPE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.SET_SCOPE-Procedure.html#GUID-9EC004FD-88B8-4100-9CE9-DEA760CA2782)
- [SET_SESSION_CREDENTIALS Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-1.html#GUID-CE603CDC-2DA7-4358-BD7F-411690E50EDD)
- [SET_SESSION_CREDENTIALS Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-2.html#GUID-44DF7B44-B792-43B2-B033-384F675EC323)
- [SET_SESSION_CREDENTIALS Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_CREDENTIALS-Procedure-Signature-3.html#GUID-24062E55-2261-4AA4-8BE7-E643DA626602)
- [SET_SESSION_TOKEN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_SESSION_TOKEN-Procedure.html#GUID-7752251E-AB3A-4E84-8366-E7786AEDD7ED)

------------------------------------------------------------------------

## 16.1 CLEAR_TOKENS Procedure

This procedure clears all acquired tokens for the provided credential.

Only useful for OAuth-based flows.

Syntax

```
PROCEDURE CLEAR_TOKENS( p_credential_static_id IN VARCHAR2 );
```

Parameters

| Parameters               | Description               |
|:-------------------------|:--------------------------|
| `p_credential_static_id` | The credential static ID. |

Example

The following example clears all obtained tokens for the credential `OAuth Login`.

```
BEGIN
    apex_credential.clear_tokens(
    p_credential_static_id => 'OAuth Login' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.2 CREATE_CREDENTIAL Procedure Signature 1

This procedure creates a credential definition.

Syntax

```
PROCEDURE CREATE_CREDENTIAL (
    p_credential_name       IN VARCHAR2,
    p_credential_static_id  IN VARCHAR2,
    p_authentication_type   IN VARCHAR2,
    p_scope                 IN VARCHAR2         DEFAULT NULL,
    p_allowed_urls          IN apex_t_varchar2  DEFAULT NULL,
    p_prompt_on_install     IN BOOLEAN          DEFAULT FALSE,
    p_credential_comment    IN VARCHAR2         DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d71785e72" style="text-align: left;" data-valign="bottom" width="33%">Parameter</th>
<th id="d71785e74" style="text-align: left;" data-valign="bottom" width="67%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d71785e78" style="text-align: left;" data-valign="top" width="33%" headers="d71785e72 "><code class="codeph">p_credential_name</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d71785e78 d71785e74 ">The credential name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d71785e84" style="text-align: left;" data-valign="top" width="33%" headers="d71785e72 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d71785e84 d71785e74 ">The credential static ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d71785e90" style="text-align: left;" data-valign="top" width="33%" headers="d71785e72 "><code class="codeph">p_authentication_type</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d71785e90 d71785e74 "><p>The authentication type. Supported types:</p>
<ul>
<li>APEX_CREDENTIAL.C_TYPE_BASIC</li>
<li>APEX_CREDENTIAL.C_TYPE_OAUTH_CLIENT_CRED</li>
<li>APEX_CREDENTIAL.C_TYPE_JWT</li>
<li>APEX_CREDENTIAL.C_TYPE_OCI</li>
<li>APEX_CREDENTIAL.C_TYPE_HTTP_HEADER</li>
<li>APEX_CREDENTIAL.C_TYPE_HTTP_QUERY_STRING</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d71785e110" style="text-align: left;" data-valign="top" width="33%" headers="d71785e72 "><code class="codeph">p_scope</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d71785e110 d71785e74 ">(Optional) OAuth 2.0 scope.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d71785e116" style="text-align: left;" data-valign="top" width="33%" headers="d71785e72 "><code class="codeph">p_allowed_urls</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d71785e116 d71785e74 ">(Optional) List of URLs (as <code class="codeph">APEX_T_VARCHAR2</code>) that these credentials can access.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d71785e125" style="text-align: left;" data-valign="top" width="33%" headers="d71785e72 "><code class="codeph">p_prompt_on_install</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d71785e125 d71785e74 ">(Optional) Choose whether prompts for this credential should be displayed when the application is being imported on another Oracle APEX instance.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d71785e131" style="text-align: left;" data-valign="top" width="33%" headers="d71785e72 "><code class="codeph">p_credential_comment</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d71785e131 d71785e74 ">(Optional) Credential comment.</td>
</tr>
</tbody>
</table>

Example

The following example creates a credential definition "OAuth Login."

```
BEGIN
   -- first set the workspace
   apex_util.set_workspace(p_workspace => 'MY_WORKSPACE');

   apex_credential.create_credential (
       p_credential_name => 'OAuth Login',
       p_credential_static_id => 'OAUTH_LOGIN',
       p_authentication_type => apex_credential.C_TYPE_OAUTH_CLIENT_CRED,
       p_scope => 'email',
       p_allowed_urls => apex_t_varchar2( 'https://tokenserver.example.com/oauth2/token', 'https://www.oracle.com' ),
       p_prompt_on_install => false,
       p_credential_comment => 'Credential for OAuth Login' );

  -- should be followed by set_persistent_credentials
  apex_credential.set_persistent_credentials (
      p_credential_static_id => 'OAUTH_LOGIN',
      p_client_id => 'dnkjq237o8832ndj98098-..',
      p_client_secret => '1278672tjksaGSDA789312..' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.3 CREATE_CREDENTIAL Procedure Signature 2

This procedure creates a credential definition.

Syntax

```
PROCEDURE CREATE_CREDENTIAL (
    p_credential_name           IN VARCHAR2,
    p_credential_static_id      IN VARCHAR2,
    p_authentication_type       IN VARCHAR2,
    p_scope                     IN VARCHAR2         DEFAULT NULL,
    p_allowed_urls              IN apex_t_varchar2  DEFAULT NULL,
    p_prompt_on_install         IN BOOLEAN          DEFAULT FALSE,
    p_credential_comment        IN VARCHAR2         DEFAULT NULL,
    --
    p_db_credential_name        IN VARCHAR2         DEFAULT NULL,
    p_db_credential_is_instance IN BOOLEAN          DEFAULT NULL,
    p_named_scopes              IN VARCHAR2         DEFAULT NULL,
    p_referenced_static_id      IN VARCHAR2         DEFAULT NULL,
    p_oauth_token_request_type  IN VARCHAR2         DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d72179e72" style="text-align: left;" data-valign="bottom" width="33%">Parameter</th>
<th id="d72179e74" style="text-align: left;" data-valign="bottom" width="67%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d72179e78" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_credential_name</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e78 d72179e74 ">The credential name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e84" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e84 d72179e74 ">The credential static ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e90" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_authentication_type</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e90 d72179e74 "><p>The authentication type. Supported types:</p>
<ul>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_BASIC</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_OAUTH_CLIENT_CRED</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_JWT</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_OCI</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_HTTP_HEADER</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_HTTP_QUERY_STRING</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_OAUTH_PASSWORD</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_SIGNED_USER_ASSERTION</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_USER_ASSERT_CERTIFICATE</code></li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e125" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_scope</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e125 d72179e74 ">OAuth 2.0 scope to use when making token requests.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e131" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_allowed_urls</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e131 d72179e74 ">List of URLs (as <code class="codeph">APEX_T_VARCHAR2</code>) that these credentials can access.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e140" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_prompt_on_install</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e140 d72179e74 ">Choose whether prompts for this credential should be displayed when the application is being imported on another APEX instance.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e149" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_credential_comment</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e149 d72179e74 ">Credential comment.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e155" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_db_credential_name</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e155 d72179e74 ">Name of the database credential to be referenced.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e161" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_db_credential_is_instance</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e161 d72179e74 ">Whether the database credential was made available at the Oracle APEX instance level (all workspaces). This parameter can only be used when instance credentials are enabled for the APEX instance using the <code class="codeph">INSTANCE_DBMS_CREDENTIAL_ENABLED</code> instance parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e176" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_named_scopes</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e176 d72179e74 "> </td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e181" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_referenced_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e181 d72179e74 "><p>Reference to another credential. Only allowed for authentication type:</p>
<ul>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_OAUTH_PASSWORD</code> referencing an <code class="codeph">apex_credential.c_type_basic</code></li>
<li><code class="codeph">APEX_CREDENTIAL.C_TYPE_SIGNED_USER_ASSERTION</code> referencing an <code class="codeph">apex_credential.c_type_user_assert_certificate</code></li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d72179e205" style="text-align: left;" data-valign="top" width="33%" headers="d72179e72 "><code class="codeph">p_oauth_token_request_type</code></td>
<td style="text-align: left;" data-valign="top" width="67%" headers="d72179e205 d72179e74 "><p>Authenticating method used for making a request to an OAuth2 token URL.</p>
<p>Supported methods:</p>
<ul>
<li><code class="codeph">C_OAUTH_TOKEN_REQT_BODY</code></li>
<li><code class="codeph">C_OAUTH_TOKEN_REQT_BASIC</code></li>
<li><code class="codeph">C_OAUTH_TOKEN_REQT_CLIENT_ID</code></li>
<li><code class="codeph">C_OAUTH_TOKEN_REQT_BASIC_CLID</code></li>
</ul></td>
</tr>
</tbody>
</table>

Example

The following example creates a new web credential "OAuth Login."

```
BEGIN
    -- set the workspace
    apex_util.set_workspace(p_workspace => 'MY_WORKSPACE');

    apex_credential.create_credential (
        p_credential_name       => 'OAuth Login',
        p_credential_static_id  => 'OAUTH_LOGIN',
        p_authentication_type   => apex_credential.c_type_oauth_client_cred,
        p_scope                 => 'email',
        p_allowed_urls          => apex_t_varchar2( 'https://tokenserver.mycompany.com/oauth2/token', 'https://www.oracle.com' ),
        p_prompt_on_install     => false,
        p_credential_comment    => 'Credential for OAuth Login' );

     -- store client ID and client secret into the credential
    apex_credential.set_persistent_credentials (
        p_credential_static_id  => 'OAUTH_LOGIN',
        p_client_id             => 'dnkjq237o8832ndj98098-..',
        p_client_secret         => '1278672tjksaGSDA789312..' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.4 DROP_CREDENTIAL Procedure

This procedure drops a credential definition.

Syntax

```
APEX_CREDENTIAL.DROP_CREDENTIAL (
    p_credential_static_id  IN VARCHAR2 )
```

Parameters

| Parameter                | Description               |
|:-------------------------|:--------------------------|
| `p_credential_static_id` | The credential static ID. |

Example

The following example drops the credential definition "OAuth Login."

```
BEGIN
   -- first set the workspace
   apex_util.set_workspace(p_workspace => 'MY_WORKSPACE');

   apex_credential.drop_credential (
       p_credential_static_id => 'OAUTH_LOGIN' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.5 SET_ALLOWED_URLS Procedure

This procedure sets a list of URLs that can be used for this credential.

A credential can be used for a HTTP request if its target URL matches one of the URLS in this list. Matching is done on a starts-with basis.

For instance, if "https://www.oracle.com" and "https://apex.oracle.com/ords/" are set as the allowed URLs, then the credential can be used for the following HTTP request examples:

- `https://www.oracle.com/`
- `https://www.oracle.com/myrest/service`
- `https://apex.oracle.com/ords/secret/workspace`

The credential cannot be used for the following request examples:

- `https://web.oracle.com`
- `https://apex.oracle.com/apex/workspace`
- `http://www.oracle.com/`

For security, the credential secret (Client Secret, Password, Private Key) must be passed in too. If not passed, or passed as NULL, the secret is cleared.

Syntax

```
PROCEDURE SET_ALLOWED_URLS (
    p_credential_static_id  IN VARCHAR2,
    p_allowed_urls          IN apex_t_varchar2,
    p_client_secret         IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_credential_static_id` | The credential static ID. |
| `p_allowed_urls` | List of URLs (as `APEX_T_VARCHAR2`) that these credentials can access. |
| `p_client_secret` | Client Secret. If allowed URLs are changed, this must be provided again. |

Examples

This example sets allowed URLs for the credential `OAuth Login`.

```
BEGIN
  apex_credential.set_allowed_urls (
    p_credential_static_id => 'OAuth Login',
    p_allowed_urls         => apex_t_varchar2(
                              'https://tokenserver.example.com/oauth2/token',
                              'https://www.oracle.com' ),
    p_client_secret        => '1278672tjksaGSDA789312..' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.6 SET_DATABASE_CREDENTIAL Procedure

This procedure updates database credential properties for a web credential.

If a web credential references a database credential, then it does not store secrets itself - that is done by the database credential. See <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=ARPLS-GUID-FDB68626-E5B0-419F-B15E-D949868C7EF8" target="_blank">DBMS_CREDENTIAL</a> for more information.

Clears all existing client IDs, client secrets, all tokens, and the "Valid For URL" attribute. If database credentials for HTTP requests are not supported on the database, and the credential did not reference a database credential before, this procedure raises an error.

Syntax

```
APEX_CREDENTIAL.SET_DATABASE_CREDENTIAL (
    p_credential_static_id      IN VARCHAR2,
    p_db_credential_name        IN VARCHAR2,
    p_db_credential_is_instance IN BOOLEAN DEFAULT FALSE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_credential_static_id` | The credential static ID. |
| `p_db_credential_name` | Name of the database credential to be referenced. |
| `p_db_credential_is_instance` | Whether the database credential was made available at the Oracle APEX instance level (all workspaces). This parameter can only be used when instance credentials are enabled for the APEX instance using the `INSTANCE_DBMS_CREDENTIAL_ENABLED` instance parameter. |

Example

The following example changes the referenced database credential to `USE_THIS_DB_CREDENTIAL`.

```
BEGIN
    -- set the workspace
    apex_util.set_workspace(p_workspace => 'MY_WORKSPACE');

    -- change the referenced database credential
    apex_credential.set_database_credential (
        p_credential_static_id => 'OAUTH_LOGIN',
        p_db_credential_name   => 'USE_THIS_DB_CREDENTIAL' );
END;
```

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=ARPLS-GUID-FDB68626-E5B0-419F-B15E-D949868C7EF8" target="_blank">DBMS_CREDENTIAL</a> in Oracle AI Database PL/SQL Packages and Types Reference

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.7 SET_PERSISTENT_CREDENTIALS Procedure Signature 1

This procedure sets provided credential attributes persistently, beyond the current session. Already stored access, refresh or ID tokens for the provided credential are removed.

This procedure sets `Client ID` and `Client Secret` for a given credential. Typically used for the `OAuth2` Client Credentials flow. The new credentials are stored persistently and are valid for all current and future sessions. Stored access, refresh or ID tokens for that credential, will be deleted.

Syntax

```
PROCEDURE SET_PERSISTENT_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_client_id             IN VARCHAR2,
    p_client_secret         IN VARCHAR2,
    p_namespace             IN VARCHAR2 DEFAULT NULL,
    p_fingerprint           IN VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d73542e82" style="text-align: left;" data-valign="bottom" width="31%">Parameters</th>
<th id="d73542e84" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d73542e88" style="text-align: left;" data-valign="top" width="31%" headers="d73542e82 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d73542e88 d73542e84 ">Credential static ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d73542e94" style="text-align: left;" data-valign="top" width="31%" headers="d73542e82 "><code class="codeph">p_client_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d73542e94 d73542e84 "><p>Use Client ID for OAuth Credentials.</p>
<p>Use User OCID for OCI Credentials.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d73542e103" style="text-align: left;" data-valign="top" width="31%" headers="d73542e82 "><code class="codeph">p_client_secret</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d73542e103 d73542e84 "><p>Use Client Secret for OAuth Credentials.</p>
<p>Use Private Key for OCI Credentials.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d73542e112" style="text-align: left;" data-valign="top" width="31%" headers="d73542e82 "><code class="codeph">p_namespace</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d73542e112 d73542e84 ">Use the Tenancy OCID for OCI Credentials.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d73542e118" style="text-align: left;" data-valign="top" width="31%" headers="d73542e82 "><code class="codeph">p_fingerprint</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d73542e118 d73542e84 ">Use the Public Key Fingerprint for OCI Credentials.</td>
</tr>
</tbody>
</table>

Example 1

The following example sets credential attributes for `OAuth Login`.

```
BEGIN
    apex_credential.set_persistent_credentials (
    p_credential_static_id  => 'OAuth Login',
    p_client_id             => 'dnkjq237o8832ndj98098-..',
    p_client_secret         => '1278672tjksaGSDA789312..' );
END;
```

Example 2

The following example sets credential attributes for `OCI Login`.

```
BEGIN
    apex_credential.set_persistent_credentials (
    p_credential_static_id  => 'OCI Login',
    p_client_id             => 'ocid1.user.oc1...',
    p_client_secret         => 'MIIEowIBAAKCAQEAsjhTVL...',
    p_namespace             => 'ocid1.tenancy.oc1...',
    p_fingerprint           => 'ff:ff:ee:00:...' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.8 SET_PERSISTENT_CREDENTIALS Procedure Signature 2

This procedure sets user name and password for the provided credential persistently, beyond the current session. Typically used for `BASIC` authentication.

Syntax

```
PROCEDURE SET_PERSISTENT_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_username              IN VARCHAR2,
    p_password              IN VARCHAR2 );
```

Parameters

| Parameters               | Description           |
|:-------------------------|:----------------------|
| `p_credential_static_id` | Credential static ID. |
| `p_username`             | Credential user name. |
| `p_password`             | Credential password.  |

Example

The following example sets user name and password into credential `Login` persistently.

```
BEGIN
    apex_credential.set_persistent_credentials (
    p_credential_static_id => 'Login',
    p_username             => 'scott',
    p_password             => 'tiger );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.9 SET_PERSISTENT_CREDENTIALS Procedure Signature 3

This procedure sets provided credential attributes persistently beyond the current Oracle APEX session.

Syntax

```
APEX_CREDENTIAL.SET_PERSISTENT_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_key                   IN VARCHAR2,
    p_value                 IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_credential_static_id` | Credential static ID. |
| `p_key` | Credential key (for example, HTTP Header or Cookie name). |
| `p_value` | Credential value. |

Example

The following example sets attributes into credential `my_API_key` persistently.

```
BEGIN
    apex_credential.set_persistent_credentials (
    p_credential_static_id => 'my_API_key',
    p_key => 'api_key',
    p_value => 'lsjkgjw4908902ru9fj879q367891hdaw' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.10 SET_PERSISTENT_TOKEN Procedure

This procedure sets a token into the provided credential persistently, beyond the current Oracle APEX session. The token is encrypted for security. Client ID and Client Secret are not stored in the credential store by this procedure.

Syntax

```
APEX_CREDENTIAL.SET_PERSISTENT_TOKEN (
    p_credential_static_id  IN   VARCHAR2,
    p_token_type            IN   t_token_type,
    p_token_value           IN   VARCHAR2,
    p_token_expires         IN   DATE,
    p_token_scope           IN   VARCHAR2         DEFAULT NULL );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_credential_static_id` | The credential static ID. |
| `p_token_type` | One of the constants `C_TOKEN_ACCESS`, `C_TOKEN_REFRESH`, or `C_TOKEN_ID`. |
| `p_token_value` | The token value. |
| `p_token_expires` | The token expiry date. |
| `p_token_scope` | OAuth scope this token is valid for. Separate multiple scopes with blanks. If not provided, the Web Credential's default scope is assumed. |

Example

The following example stores the OAuth2 access token with value `sdakjjkhw7632178jh12hs876e38..` and expiry date of `2023-10-31` into the credential `OAuth Login`.

```
begin
    apex_credential.set_persistent_token (
        p_credential_static_id => 'OAuth Login',
        p_token_type           => apex_credential.c_token_access,
        p_token_value          => 'sdakjjkhw7632178jh12hs876e38..',
        p_token_expires        => to_date('2023-10-31', 'YYYY-MM-DD'),
        p_token_scope          => 'profile email' );
end;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.11 SET_SCOPE Procedure

This procedure changes the "scope" attribute of a Web Credential. All existing tokens for the given credential are cleared.

Syntax

```
APEX_CREDENTIAL.SET_SCOPE (
    p_credential_static_id      IN VARCHAR2,
    p_scope                     IN VARCHAR2,
    p_named_scopes              IN VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d74615e75" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d74615e77" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d74615e81" style="text-align: left;" data-valign="top" width="42%" headers="d74615e75 "><code class="codeph">p_credential_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d74615e81 d74615e77 ">Credential static ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d74615e87" style="text-align: left;" data-valign="top" width="42%" headers="d74615e75 "><code class="codeph">p_scope</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d74615e87 d74615e77 ">New scope value to store within the Web Credential.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d74615e93" style="text-align: left;" data-valign="top" width="42%" headers="d74615e75 "><code class="codeph">p_named_scopes</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d74615e93 d74615e77 "><p>JSON array with named scopes. If the invoker specifies a named scope, APEX uses the value from the property list. Specify NULL to leave the existing named scope list unchanged; an empty JSON array to clear the list, and a populated array to store the list. There is no merging functionality; the whole list is being replaced. For now, we use a VARCHAR2 parameter that restricts the JSON size to 32K.</p>
Format:
<pre class="pre codeblock"><code>[
    { &quot;name&quot;: &quot;sales&quot;, &quot;value&quot;:&quot;fusion-x-sls-scope&quot; },
    :
]</code></pre>
</div></td>
</tr>
</tbody>
</table>

Example 1

The following example sets scope for the credential "OAuth_Login."

```
BEGIN
    apex_credential.set_scope (
        p_credential_static_id => 'OAuth_Login',
        p_scope                => 'new-scope-value' );
END;
```

Example 2

The following example sets the scope for the credential "OAuth_Login."

```
declare
    l_named_scopes varchar2(32767) := '[ {"name":"sales", "value":"fusion-x-sls-scope"}'
                                   || ' ,{"name":"hr",    "value":"fusion-x-hr-scope" } ]';
begin
    apex_credential.set_scope (
        p_credential_static_id => 'OAuth_Login',
        p_scope                => 'hr',

        p_named_scopes         => l_named_scopes );
end;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.12 SET_SESSION_CREDENTIALS Procedure Signature 1

This procedure sets user name and password for the provided credential for the current Oracle APEX session. Typically used for `BASIC` authentication when the end user provides the credentials.

Syntax

```
APEX_CREDENTIAL.SET_SESSION_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_username              IN VARCHAR2,
    p_password              IN VARCHAR2 );
```

Parameters

| Parameters               | Description               |
|:-------------------------|:--------------------------|
| `p_credential_static_id` | The credential static ID. |
| `p_username`             | The credential user name. |
| `p_password`             | The credential password.  |

Example

The following example sets credential `Login`.

```
BEGIN
    apex_credential.set_session_credentials (
        p_credential_static_id => 'Login',
        p_username             => 'scott',
        p_password             => 'tiger );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.13 SET_SESSION_CREDENTIALS Procedure Signature 2

This procedure sets provided credential attributes for the current Oracle APEX session. Typically used for the `OAuth2` client credentials or OCI (Oracle Cloud Infrastructure) credential types.

Syntax

```
APEX_CREDENTIAL.SET_SESSION_CREDENTIALS (
    p_credential_static_id  IN VARCHAR2,
    p_client_id             IN VARCHAR2,
    p_client_secret         IN VARCHAR2,
    p_namespace             IN VARCHAR2 DEFAULT NULL,
    p_fingerprint           IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_credential_static_id` | Credential static ID. |
| `p_client_id` | Use Client ID for OAuth credentials (use User OCID for OCI credentials). |
| `p_client_secret` | Use Client Secret for OAuth credentials (use Private Key for OCI credentials). |
| `p_namespace` | Use the Tenancy OCID for OCI credentials. |
| `p_fingerprint` | Use the Public Key Fingerprint for OCI credentials. |

Example 1

The following example sets credential attributes for `OAuth Login`.

```
BEGIN
    apex_credential.set_session_credentials (
        p_credential_static_id => 'OAuth Login',
        p_client_id            => 'dnkjq237o8832ndj98098-..',
        p_client_secret        => '1278672tjksaGSDA789312..' );
END;
```

Example 2

The following example sets the credential attributes for `OCI Login`.

```
BEGIN
    apex_credential.set_session_credentials (
        p_credential_static_id => 'OCI Login',
        p_client_id            => 'ocid1.user.oc1...',
        p_client_secret        => 'MIIEowIBAAKCAQEAsjhTVL...',
        p_namespace            => 'ocid1.tenancy.oc1...',
        p_fingerprint          => 'ff:ff:ee:00:...' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.14 SET_SESSION_CREDENTIALS Procedure Signature 3

This procedure sets provided credential attributes for the current Oracle APEX session.

Syntax

```
APEX_CREDENTIAL.SET_SESSION_CREDENTIALS (
    p_credential_static_id IN VARCHAR2,
    p_key                  IN VARCHAR2,
    p_value                IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_credential_static_id` | The credential static ID. |
| `p_key` | Credential key (name of the HTTP Header or Query String Parameter). |
| `p_value` | Credential secret value. |

Example

The following example set attributes into credential `my_API_key` for the current APEX session persistently.

```
BEGIN
apex_credential.set_session_credentials (
    p_credential_static_id => 'my_API_key',
    p_key                  => 'api_key',
    p_value                => 'lsjkgjw4908902ru9fj879q367891hdaw' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)

------------------------------------------------------------------------

## 16.15 SET_SESSION_TOKEN Procedure

This procedure sets a token into the provided credential for the duration of the current Oracle APEX session. The token is encrypted and can only be used by the current APEX session. Client ID and Client Secret are not stored in the credential by this procedure.

Syntax

```
APEX_CREDENTIAL.SET_SESSION_TOKEN (
    p_credential_static_id  IN VARCHAR2,
    p_token_type            IN t_token_type,
    p_token_value           IN VARCHAR2,
    p_token_expires         IN DATE,
    p_token_scope           IN VARCHAR2         DEFAULT NULL );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_credential_static_id` | The credential static ID. |
| `p_token_type` | One of the constants `C_TOKEN_ACCESS`, `C_TOKEN_REFRESH`, or `C_TOKEN_ID`. |
| `p_token_value` | The token value. |
| `p_token_expires` | The token expiry date. |
| `p_token_scope` | OAuth scope this token is valid for. Separate multiple scopes with blanks. If not provided, the Web Credential's default scope is assumed. |

Example

The following example stores the OAuth access token with value `sdakjjkhw7632178jh12hs876e38..` and expiry date of `2023-10-31` into the credential `OAuth Login`.

```
BEGIN
    apex_credential.set_session_token (
        p_credential_static_id => 'OAuth Login',
        p_token_type           => apex_credential.C_TOKEN_ACCESS,
        p_token_value          => 'sdakjjkhw7632178jh12hs876e38..',
        p_token_expires        => to_date('2023-10-31', 'YYYY-MM-DD'),
        p_token_scope          => 'profile email' );
END;
```

**Parent topic:** [APEX_CREDENTIAL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CREDENTIAL.html#GUID-4680B4A9-6606-443B-AFE3-4E53A62F222B)
