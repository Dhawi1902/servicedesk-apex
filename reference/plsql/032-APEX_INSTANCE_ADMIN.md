<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 32  APEX_INSTANCE_ADMIN

The `APEX_INSTANCE_ADMIN` package provides utilities for managing an Oracle APEX runtime environment.

Use the `APEX_INSTANCE_ADMIN` package to get and set email settings, Oracle Wallet settings, report printing settings, and to manage schema to workspace mappings.

`APEX_INSTANCE_ADMIN` can be executed by the `SYS` or `SYSTEM` database users and any database user granted the role `APEX_ADMINISTRATOR_ROLE`.

- [Available Parameter Values](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.Available-Parameter-Values.html#GUID-75DCF658-5A76-4E81-B12D-04E254A3D80A)
- [ADD_AUTO_PROV_RESTRICTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_AUTO_PROV_RESTRICTIONS-Procedure.html#GUID-38A4AF49-7970-45FB-99CB-B7A8F8FC382B)
- [ADD_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_SCHEMA-Procedure.html#GUID-236327B1-7D98-4804-BE96-8A9CBD6A8D0C)
- [ADD_WEB_ENTRY_POINT Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_WEB_ENTRY_POINT-procedure.html#GUID-F72BC668-2818-4037-9234-E4403D6FB981)
- [ADD_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/ADD_WORKSPACE-Procedure.html#GUID-A5901582-5A5D-4273-9795-7D203E616C1A)
- [CREATE_CLOUD_CREDENTIAL Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_CLOUD_CREDENTIAL-Procedure.html#GUID-D5E3419E-D305-4033-9225-C10EDCA08963)
- [CREATE_OR_UPDATE_ADMIN_USER Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_OR_UPDATE_ADMIN_USER-Procedure.html#GUID-089439C5-1D96-46A2-9922-E1C9E2453553)
- [CREATE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_SCHEMA_EXCEPTION-Procedure.html#GUID-35D91F30-6D42-4E0F-BCA7-9FB1E0BF2B21)
- [DB_SIGNATURE Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DB_SIGNATURE-Function.html#GUID-DABD4498-E220-4C52-8E93-8ADF93D370D5)
- [DROP_CLOUD_CREDENTIAL Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DROP_CLOUD_CREDENTIAL-Procedure.html#GUID-2A1B2011-2EC4-4006-A98E-76872DEA12B9)
- [FREE_WORKSPACE_APP_IDS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/FREE_WORKSPACE_APP_IDS-Procedure.html#GUID-19B5F47B-A6D7-4E9A-9540-72251194ED48)
- [GET_PARAMETER Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GET_PARAMETER-Function.html#GUID-6BA9A60E-9B0A-4AE5-98DB-68E229008CE0)
- [GET_SCHEMAS Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GET_SCHEMAS-Function.html#GUID-101190F8-54D9-4DD4-A14D-A4263EB02291)
- [GET_WORKSPACE_PARAMETER Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GET_WORKSPACE_PARAMETER.html#GUID-D918661E-CA5E-44E7-BF53-101E783C32E4)
- [GRANT_EXTENSION_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/GRANT_EXTENSION_WORKSPACE-Procedure.html#GUID-170786CB-23FF-43FB-BED6-F41E28029C1B)
- [IS_DB_SIGNATURE_VALID Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/IS_DB_SIGNATURE_VALID-Function.html#GUID-2F6EBECA-354C-4D41-9BEC-4CF9F7F69E85)
- [REMOVE_APPLICATION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_APPLICATION-Procedure.html#GUID-063B673C-0DFD-4BE1-9B41-BEB41D160A7D)
- [REMOVE_AUTO_PROV_RESTRICTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_AUTO_PROV_RESTRICTIONS-Procedure.html#GUID-8151ABF7-2EE0-4FC9-B6C4-799EC9885480)
- [REMOVE_SAVED_REPORT Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SAVED_REPORT-Procedure.html#GUID-E7F32AC1-C3EC-4DC6-B789-CA1EFDF9560B)
- [REMOVE_SAVED_REPORTS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SAVED_REPORTS-Procedure.html#GUID-D2097869-4C18-4A60-B8F6-B2E80F6D5064)
- [REMOVE_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA-Procedure.html#GUID-0B53EA6F-1A24-476E-ADF5-8DCF0DF11324)
- [REMOVE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTION-Procedure.html#GUID-F866ACE1-45F2-482E-AA42-F6B62C68F803)
- [REMOVE_SCHEMA_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html#GUID-5DA71997-98DC-4D07-ACDB-B342AF6EEE69)
- [REMOVE_SUBSCRIPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SUBSCRIPTION-Procedure.html#GUID-E7921204-2B41-4343-A11C-5CD6ED4E2BF2)
- [REMOVE_WEB_ENTRY_POINT Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WEB_ENTRY_POINT-Procedure.html#GUID-E2804C78-FC9D-428D-9132-A0F80824CC0F)
- [REMOVE_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WORKSPACE-Procedure.html#GUID-4A70CC87-4DE6-43DA-A5E5-06DBD22668C1)
- [REMOVE_WORKSPACE_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WORKSPACE_EXCEPTIONS-Procedure.html#GUID-A16B1798-C959-4900-B946-43842D4D6510)
- [RESERVE_WORKSPACE_APP_IDS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESERVE_WORKSPACE_APP_IDS-Procedure.html#GUID-3E66E35B-2787-4A6F-8712-F3DB8C141AC0)
- [RESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESTRICT_SCHEMA-Procedure.html#GUID-97A8DD03-5B6B-4C12-91E8-842CB156B6C6)
- [REVOKE_EXTENSION_WORKSPACE Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REVOKE_EXTENSION_WORKSPACE-Procedure.html#GUID-CC0B1C6C-3859-42AE-A752-5F6FC2B45D57)
- [SET_LOG_SWITCH_INTERVAL Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SET_LOG_SWITCH_INTERVAL-Procedure.html#GUID-2E79A8AC-79EB-445C-BFC3-77A73CD7166B)
- [SET_PARAMETER Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SET_PARAMETER-Procedure.html#GUID-A6D8CA93-798D-4582-97B9-C7D3ED709AC5)
- [SET_WORKSPACE_CONSUMER_GROUP Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SET_WORKSPACE_CONSUMER_GROUP-Procedure.html#GUID-C49A426F-D81E-41BE-BCCC-20C85226A731)
- [SET_WORKSPACE_PARAMETER Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/SET_WORKSPACE_PARAMETER.html#GUID-410868A9-01CC-409F-965E-5F76A00B585B)
- [TRUNCATE_LOG Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/TRUNCATE_LOG-Procedure.html#GUID-D3DA33E1-F5BC-4674-822D-90C8463D3733)
- [UNLOCK_USER Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/UNLOCK_USER-Procedure.html#GUID-3C5473E0-2D50-49E5-866A-6AB3174D22E7)
- [UNRESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/UNRESTRICT_SCHEMA-Procedure.html#GUID-2DD387A4-E20B-4A9C-8750-31D050F12908)
- [VALIDATE_EMAIL_CONFIG Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/VALIDATE_EMAIL_CONFIG-Procedure.html#GUID-6367C7AE-AF48-42A6-AA60-951B055B244D)

------------------------------------------------------------------------

## 32.1 Available Parameter Values

The following table lists all the available parameter values you can set within the `APEX_INSTANCE_ADMIN` package, including parameters for email, wallet, and reporting printing.

You can query the `APEX_INSTANCE_PARAMETERS` dictionary view to determine the current values of these parameters unless the parameter contains a password.

Instance Parameters

The following parameters can be configured only at the Instance level (using `APEX_INSTANCE_ADMIN.SET_PARAMETER`).

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Instance-level parameters for API." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d141413e80" style="text-align: left;" data-valign="bottom" width="38%">Parameter Name</th>
<th id="d141413e82" style="text-align: left;" data-valign="bottom" width="62%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d141413e86" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ADMIN_DIGEST_DEFAULT_REPORTING_PERIOD</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e86 d141413e82 ">Default reporting period in days for APEX Administrator Digest.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e92" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ADMIN_DIGEST_MAX_REPORTING_PERIOD</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e92 d141413e82 ">Maximum reporting period in days for APEX Administrator Digest. Older data is removed from the metrics tables.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e98" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">AI_BUILDER_PROXY</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e98 d141413e82 ">The proxy server for all outbound HTTP(s) traffic to Generative AI Services from APEX App Builder.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e110" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ALLOW_DB_MONITOR</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e110 d141413e82 ">If set to <code class="codeph">N</code> (default), database monitoring within SQL Workshop is disabled. If <code class="codeph">Y</code>, it is enabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e122" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ALLOW_HASH_FUNCTIONS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e122 d141413e82 ">Comma-separated list of supported hash algorithms (default is <code class="codeph">SH256,SH384,SH512</code>). SH1 is also supported by default in Oracle Database 11g.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e134" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ALLOW_PUBLIC_FILE_UPLOAD</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e134 d141413e82 ">If set to <code class="codeph">Y</code>, enables file uploads without user authentication. If set to <code class="codeph">N</code>, the default, they are disabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e146" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ALLOW_RAS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e146 d141413e82 "><p>This parameter is only supported if running Oracle Database 12c.</p>
<p>If <code class="codeph">Y</code>, enables Real Application Security support for applications. If set to <code class="codeph">N</code> (default), Real Application Security cannot be used.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e167" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">APEX_BUILDER_AUTHENTICATION</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e167 d141413e82 "><p>Controls the authentication scheme for Oracle APEX Administration Services and the development environment. Valid parameter values include:</p>
<ul>
<li><code class="codeph">APEX</code> - Oracle APEX workspace accounts authentication (default)</li>
<li><code class="codeph">DB</code> - Database accounts authentication</li>
<li><code class="codeph">HEADER</code> - HTTP header variable based authentication</li>
<li><code class="codeph">SSO</code> - Oracle Application Server Single Sign-On authentication (OracleAS PL/SQL SSO SDK)</li>
<li><p><code class="codeph">LDAP</code> - LDAP authentication</p></li>
<li><code class="codeph">SAML</code> - SAML Sign-In authentication</li>
<li><code class="codeph">SOCIAL</code> - Social Sign-In authentication</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e210" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">APEX_REST_PATH_PREFIX</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e210 d141413e82 ">Controls the URI path prefix used to access built-in RESTful Services exposed by APEX. For example, built-in RESTful Service for referencing static application files using <code class="codeph">#APP_IMAGES#</code> token. If the default prefix (r) conflicts with RESTful Services defined by users, adjust this preference to avoid the conflict.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e222" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">APPLICATION_ACTIVITY_LOGGING</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e222 d141413e82 ">Controls setting of application activity log for entire instance. Options are:
<ul>
<li><code class="codeph">A</code> (Always)</li>
<li><code class="codeph">N</code> (Never)</li>
<li><code class="codeph">U</code> (Use application settings)</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e241" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">APPLICATION_ID_MAX</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e241 d141413e82 ">The largest possible ID for a websheet or database application.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e248" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">APPLICATION_ID_MIN</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e248 d141413e82 ">The smallest possible ID for a websheet or database application.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e254" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">AUTHENTICATION_SUBSTITUTIONS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e254 d141413e82 "><p>Enables you to specify which substitutions are visible to all authentication schemes in the APEX instance. The parameter value is a JSON format with a flat structure. Substitutions can be used for all authentication scheme attributes with <code class="codeph">#SUBSTITUTION_NAME#</code>.</p>
<p>For example:</p>
<pre class="pre codeblock"><code>{
     &quot;SUBST_NAME&quot;:   &quot;SOME_VALUE&quot;,
     &quot;SUBST_NAME_2&quot;: &quot;VALUE_2&quot;
} </code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e271" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">AUTOEXTEND_TABLESPACES</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e271 d141413e82 ">If set to <code class="codeph">Y</code> (default), provisioned tablespaces are autoextended up to a maximum size. If set to <code class="codeph">N</code>, tablespaces are not autoextended.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e283" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">BIGFILE_TABLESPACES_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e283 d141413e82 ">If set to <code class="codeph">Y</code>, the tablespaces provisioned through APEX are created as bigfile tablespaces. If set to <code class="codeph">N</code>, the tablespaces are created as smallfile tablespaces.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e298" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">CHECK_FOR_UPDATES</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e298 d141413e82 ">If set to <code class="codeph">N</code>, the check for APEX and Oracle REST Data Services product updates is disabled for the entire instance, regardless of preferences specified by individual developers. The default is <code class="codeph">Y</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e313" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">CHECKSUM_HASH_FUNCTION</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e313 d141413e82 ">Defines the algorithm that is used to create one way hashes for URL checksums.Valid values are MD5 (deprecated), SH1 (SHA-1), SH256 (SHA-2, 256 bit), SH384 (SHA-2, 384 bit), SH512 (SHA-2, 512 bit) and n. The SHA-2 algorithms are only available on Oracle Database 12g and later. A null value evaluates to the most secure algorithm available and is the default.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e325" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">CLONE_SESSION_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e325 d141413e82 ">If set to <code class="codeph">Y</code>, the default, users can create multiple sessions in the browser.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e334" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DB_SIGNATURE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e334 d141413e82 ">Set to the database host/service name on install. If it differs, for example, on cloned databases, sending emails will fail. A value of null (the default) disables any checks.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e340" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DEBUG_MESSAGE_PAGE_VIEW_LIMIT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e340 d141413e82 ">Maximum number of debug messages for a single page view. Default is <code class="codeph">50000</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e349" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DELETE_UPLOADED_FILES_AFTER_DAYS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e349 d141413e82 ">Uploaded files like application export files, websheet export files, spreadsheet data load files are automatically deleted after this number of days. Default is <code class="codeph">14</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e358" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DISABLE_APPS_LOGIN</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e358 d141413e82 "><p>If set to <code class="codeph">N</code> (default), the login to customer-created apps is enabled.</p>
<p>If set to <code class="codeph">Y</code>, the login to all customer-created apps is disabled.</p>
<p>If set to a comma-separated list of application IDs, only the login to those applications is disabled.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e376" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DISABLE_ADMIN_LOGIN</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e376 d141413e82 ">If set to <code class="codeph">Y</code>, Oracle APEX administration services are disabled. If set to <code class="codeph">N</code> (default), they are not disabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e391" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DISABLE_WORKSPACE_LOGIN</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e391 d141413e82 ">If set to <code class="codeph">Y</code>, the workspace login is disabled. If set to <code class="codeph">N</code>, the default, the login is not disabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e403" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DISABLE_WS_PROV</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e403 d141413e82 ">If set to <code class="codeph">Y</code>, the workspace creation is disabled for requests sent out by using e-mail notification. If set to <code class="codeph">N</code>, the default, they are not disabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e415" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DOCGEN_CREDENTIAL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e415 d141413e82 ">The cloud credential name to use for Oracle Object Storage bucket management and use of the Oracle Document Generator Pre-built function.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e421" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DOCGEN_FUNCTION_OCID</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e421 d141413e82 ">Specifies the Oracle Cloud Identity (OCID) of the Oracle Document Generator Pre-Built function.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e427" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DOCGEN_INVOKE_ENDPOINT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e427 d141413e82 ">Specifies the base URL endpoint of the Oracle Document Generator Pre-Built function.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e433" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DOCGEN_OS_BUCKET_COMPARTMENT_OCID</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e433 d141413e82 ">Specifies the Oracle Cloud Identifier (OCID) of the compartment where the Oracle Document Generator Pre-built Function is located.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e439" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DOCGEN_OS_ENDPOINT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e439 d141413e82 ">Specifies the base URL endpoint for the Oracle Object Storage bucket.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e445" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">DOCGEN_OS_NAMESPACE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e445 d141413e82 ">The Object Storage namespace serves as the top-level container for all buckets and objects.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e451" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">EMAIL_ATTACHMENT_MAX_SIZE_MB</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e451 d141413e82 ">Specifies the maximum size in megabytes of a single email attachment sent using <code class="codeph">APEX_MAIL</code> or the Send E-Mail process.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e460" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">EMAIL_IMAGES_URL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e460 d141413e82 "><p>Specifies the full URL to the images directory of APEX instance, including the trailing slash after the images directory. For example: <code class="codeph">http://your_server/i/</code></p>
<p>This setting is used for APEX system-generated emails.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e478" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">EMAIL_INSTANCE_URL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e478 d141413e82 "><p>Specifies the URL to APEX instance, including the trailing slash after the Database Access Descriptor. For example: <code class="codeph">http://your_server/pls/apex/</code></p>
<p>This setting is used for APEX system-generated emails.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e495" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ENABLE_LEGACY_WEB_ENTRY_POINTS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e495 d141413e82 ">If set to <code class="codeph">Y</code> (default is <code class="codeph">N</code>), procedures used in older APEX versions can be called in the URL (such as <code class="codeph">HTMLDB_UTIL.%</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e513" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ENABLE_TRANSACTIONAL_SQL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e513 d141413e82 ">If set to <code class="codeph">Y</code>, transactional SQL commands are enabled on this instance. If set to <code class="codeph">N</code>, the default, they are not enabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e525" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ENCRYPTED_TABLESPACES_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e525 d141413e82 ">If set to <code class="codeph">Y</code>, the tablespaces provisioned through APEX are created as encrypted tablespaces. If set to <code class="codeph">N</code>, the tablespaces are not encyrpted.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e540" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">HEADER_AUTH_CALLBACK</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e540 d141413e82 ">Callback procedure name for HTTP header based authentication, defaults to <code class="codeph">apex_authentication.callback</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e549" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">HTTP_ERROR_STATUS_ON_ERROR_PAGE_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e549 d141413e82 "><p>Used in conjunction with the <code class="codeph">APEX_INSTANCE_ADMIN.SET_PARAMETER</code> procedure.</p>
<p>If set to <code class="codeph">N</code>, the default, APEX presents an error page to the end user for all unhanded errors. If set to <code class="codeph">Y</code>, returns an <code class="codeph">HTTP 400</code> status to the end user's client browser when the APEX engine encounters an unhandled error.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e577" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">HTTP_RESPONSE_HEADERS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e577 d141413e82 ">List of http response headers, separated by newline (chr(10)). APEX writes these headers on each request, before rendering the page. The substitution string <code class="codeph">#CDN# </code>within the headers is replaced with the content delivery networks that are known to APEX.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e592" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">HTTP_STS_MAX_AGE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e592 d141413e82 "><code class="codeph">REQUIRE_HTTPS</code> must be set to <code class="codeph">A</code> for this parameter to be relevant. APEX emits a Strict-Transport-Security header, with max-age=&lt;value&gt;, on HTTPS requests if <code class="codeph">HTTP_STS_MAX_AGE</code> has a value greater than 0. If the request protocol is HTTP, instead of processing the request, APEX redirects to a HTTPS URL.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e612" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">HTTP_TRUSTED_ORIGINS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e612 d141413e82 ">List of remote HTTP origins that can access resources, separated by newline. Set this parameter in combination with the ORDS parameter <code class="codeph">security.externalSessionTrustedOrigins</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e621" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">IGNORED_FRIENDLY_URL_PARAMETERS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e621 d141413e82 "><p>Comma-separated list of parameter names which are ignored when parsing friendly URLs. Default:</p>
<pre class="pre codeblock"><code>utm_campaign,utm_source,utm_medium,utm_term,utm_content</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e630" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">INBOUND_PROXIES</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e630 d141413e82 ">Comma-separated list of IP addresses for proxy servers through which requests come in.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e637" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">INSTANCE_DBMS_CREDENTIAL_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e637 d141413e82 ">If set to <code class="codeph">Y</code>, database credentials that are accessible to the APEX engine (<code class="codeph">APEX_NNNNNN</code> schema), can be used in all workspaces on this instance.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e652" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">INSTANCE_NO_PROXY_DOMAINS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e652 d141413e82 ">Comma-separated list of domain names for which the instance proxy is not to be used.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e658" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">INSTANCE_PROXY</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e658 d141413e82 ">The proxy server for all outbound HTTP(s) traffic. If <code class="codeph">INSTANCE_PROXY</code> is set, it overrides any application specific proxy server definition.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e667" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">INSTANCE_TABLESPACE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e667 d141413e82 ">If specified, the tablespace to use for the database user for all new workspaces.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e673" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">KEEP_SESSIONS_ON_UPGRADE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e673 d141413e82 ">This flag affects application upgrades. If set to <code class="codeph">N</code>, the default, delete sessions associated with the application. If set to <code class="codeph">Y</code>, leave sessions unaffected.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e685" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">LOGIN_MESSAGE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e685 d141413e82 ">The text to be displayed on the login page. This text can include HTML.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e691" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">LOGIN_THROTTLE_DELAY</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e691 d141413e82 ">The flag which determines the time increase in seconds after failed logins.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e697" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">LOGIN_THROTTLE_METHODS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e697 d141413e82 ">The methods to count failed logins. Colon-separated list of <code class="codeph">USERNAME_IP</code>, <code class="codeph">USERNAME, IP</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e709" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">MAX_APPLICATION_BACKUPS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e709 d141413e82 ">The maximum number of backups kept for each application. Default is 25. Maxium is 30. Zero (0) disables automated backups.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e715" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">MAX_DATA_EXPORT_IMAGES</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e715 d141413e82 ">The maximum number of unique images to be included in a data export / report download.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e721" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">MAX_MAIL_QUEUE_ROWS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e721 d141413e82 ">Defines the number of email messages that are processed from the queue per workspace during each invocation of the ORACLE_APEX_MAIL_QUEUE scheduler job.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e728" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_ALPHA_CHARACTERS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e728 d141413e82 "><p>The alphabetic characters used for password complexity rules. Default list of alphabetic characters include the following:</p>
<pre class="pre codeblock"><code>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e737" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_HASH_FUNCTION</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e737 d141413e82 ">Defines the algorithm that is used to create one way hashes for workspace user passwords. Valid values are MD5 (deprecated), SH1 (SHA-1), SH256 (SHA-2, 256 bit), SH384 (SHA-2, 384 bit), SH512 (SHA-2, 512 bit) and null. The SHA-2 algorithms are only available on Oracle Database Release 12g and later. A null value evaluates to the most secure algorithm available and is the default.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e746" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_HASH_ITERATIONS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e746 d141413e82 ">Defines the number of iterations for the <code class="codeph">PASSWORD_HASH_FUNCTION</code> (default 10000).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e755" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_HISTORY_DAYS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e755 d141413e82 ">Defines the number of days a previously used password cannot be used again as a new password by the same user.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e761" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_NOT_LIKE_USERNAME</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e761 d141413e82 ">If <code class="codeph">Y</code> (the default is <code class="codeph">N</code>), prevent workspace administrator, developer, and end user account passwords from containing the username.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e773" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_NOT_LIKE_WORDS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e773 d141413e82 ">Enter words, separated by colons, that workspace administrator, developer, and end user account passwords must not contain. These words may not appear in the password in any combination of upper- or lowercase.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e779" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_NOT_LIKE_WS_NAME</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e779 d141413e82 ">Set to <code class="codeph">Y</code> to prevent workspace administrator, developer, and end user account passwords from ontaining the workspace name.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e788" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_ONE_ALPHA</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e788 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one alphabetic character as specified in <code class="codeph">PASSWORD_ALPHA_CHARACTERS</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e800" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_ONE_LOWER_CASE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e800 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one lowercase alphabetic character.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e809" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_ONE_NUMERIC</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e809 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one Arabic numeric character (0-9).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e818" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_ONE_PUNCTUATION</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e818 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one punctuation character as specified in <code class="codeph">PASSWORD_PUNCTUATION_CHARACTERS</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e831" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_ONE_UPPER_CASE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e831 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one uppercase alphabetic character.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e840" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PASSWORD_PUNCTUATION_CHARACTERS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e840 d141413e82 ">The punctuation characters used for password complexity rules. Default list of punctuation characters include the following: !"#$%&amp;()``*+,-/:;&lt;=&gt;?_</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e846" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PLSQL_EDITING</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e846 d141413e82 ">If set to <code class="codeph">Y</code>, the default, the SQL Workshop Object Browser is enabled to permit users to edit and compile PL/SQL. If set to <code class="codeph">N</code>, users are not permitted.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e858" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PRINT_BIB_LICENSED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e858 d141413e82 "><p>Specify either standard support or advanced support. Advanced support requires an Oracle BI Publisher license. Valid values include:</p>
<ul>
<li><code class="codeph">STANDARD</code> - requires Apache FOP.</li>
<li><code class="codeph">DOCUMENT_GENERATOR</code> - requires Oracle Document Generator Pre-built Function.</li>
<li><code class="codeph">ADVANCED</code> - requires Oracle BI Publisher.</li>
<li><code class="codeph">AOP</code> - requires APEX Office Print.</li>
<li><code class="codeph">NONE</code> - native APEX printing.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e889" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PRINT_SVR_HOST</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e889 d141413e82 ">Specifies the host address of the print server converting engine, for example, <code class="codeph">localhost</code>. Enter the appropriate host address if the print server is installed at another location.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e898" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PRINT_SVR_PORT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e898 d141413e82 ">Defines the port of the print server engine, for example <code class="codeph">8888</code>. Value must be a positive integer.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e907" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PRINT_SVR_PROTOCOL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e907 d141413e82 "><p>Valid values include:</p>
<ul>
<li><p><code class="codeph">http</code></p></li>
<li><p><code class="codeph">https</code></p></li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e923" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">PRINT_SVR_SCRIPT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e923 d141413e82 ">Defines the script that is the print server engine, for example:
<pre class="pre codeblock"><code>/xmlpserver/convert</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e931" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">REJOIN_EXISTING_SESSIONS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e931 d141413e82 "><p>If <code class="codeph">P</code> (default), session rejoining is supported for non-authenticated users and public pages.</p>
<p>If <code class="codeph">Y</code>, session rejoining is also supported for authenticated users and protected pages.</p>
<p>If <code class="codeph">N</code>, session rejoining is disabled for the whole instance.</p>
<p>Session rejoining must be set to enabled at application or page level. A more restrictive setting at instance level with this instance parameter overrides application and page settings.</p>
<p>Unconditionally enabling session rejoining has serious security implications. Attackers could take over sessions via XSS or if they have development access to a workspace.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e955" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">REQ_NEW_SCHEMA</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e955 d141413e82 ">If set to <code class="codeph">Y</code>, the option for new schema for new workspace requests is enabled. If set to <code class="codeph">N</code>, the default, the option is disabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e967" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">REQUIRE_HTTPS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e967 d141413e82 "><p>If set to <code class="codeph">A</code>, enforces HTTPS for the entire APEX instance.</p>
<p>If <code class="codeph">I</code>, enforces HTTPS within the APEX development and administration applications.</p>
<p>If <code class="codeph">N</code>, permits all applications to be used when the protocol is either HTTP or HTTPS.</p>
<p>Note:</p>
Note developers can also enforce HTTPS at the application level, by setting the Secure attribute of an application scheme's cookie.
</div></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e996" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">RESTFUL_SERVICES_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e996 d141413e82 ">If set to <code class="codeph">Y</code>, the default, RESTful services development is enabled. If set to <code class="codeph">N</code>, RESTful services are not enabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1008" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">RESTRICT_DEV_HEADER</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1008 d141413e82 ">Controls access to the APEX development environment and Administration Services using an HTTP request header. Specify the name of the header, for example <code class="codeph">Public-Access</code>. If this header exists in the request, access is blocked. Normally an external load balancer or a web server adds this header. The value of the header is ignored.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1020" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">RESTRICT_APPS_HEADER</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1020 d141413e82 "><p>To restrict access to a specific list of applications, enter a HTTP request header name.</p>
<p>If the header exists, logging into the application is only allowed if the application ID is contained in the comma-delimited list of applications in the header.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1029" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">RESTRICT_IP_RANGE </code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1029 d141413e82 ">To restrict access to the APEX development environment and Administration Services to a specific range of IP addresses, enter a comma-delimited list of IP addresses. If necessary, you can use an asterisk (<code class="codeph">*</code>) as a wildcard, but do not include additional numeric values after wildcard characters. For example, <code class="codeph">138.*.41.2</code> is not a valid value.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1044" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">RESTRICT_RESPONSE_HEADERS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1044 d141413e82 ">If <code class="codeph">Y</code> or <code class="codeph">null</code> (default), show <code class="codeph">HTTP 500</code> when a page contains unsupported HTTP response headers. These include status codes 301, 308 and 410, and cache headers for POST requests.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1059" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAMESITE_COOKIE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1059 d141413e82 ">Default value of the cookie attribute "samesite."</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1067" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_APEX_CALLBACK_URLS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1067 d141413e82 ">SAML authentication: Supported URLs for <code class="codeph">apex_authentication.saml_callback</code>, separated by newlines. If set, APEX verifies that the domain in the browser is part of this list and sends its index (starting at 0) in authentication requests as <code class="codeph">AssertionConsumerServiceIndex</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1082" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_APEX_CERTIFICATE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1082 d141413e82 ">SAML authentication: The primary certificate of the APEX side.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1091" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_APEX_CERTIFICATE2</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1091 d141413e82 ">(Optional) SAML authentication: The alternative certificate of the APEX side.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1100" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_APEX_PRIVATE_KEY</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1100 d141413e82 ">SAML authentication: The private key of the APEX side.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1109" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_APEX_PRIVATE_KEY2</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1109 d141413e82 ">(Optional) SAML authentication: The alternative private key of the APEX side.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1119" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1119 d141413e82 ">SAML authentication: <code class="codeph">Y</code> if workspace applications should be able to use SAML authentication.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1128" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_IP_ISSUER</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1128 d141413e82 ">SAML authentication: Issuer attribute from the identity provider's metadata.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1134" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_IP_SIGNING_CERTIFICATE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1134 d141413e82 ">SAML authentication: The certificate from the identity provider's metadata.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1140" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_IP_SIGNING_CERTIFICATE2</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1140 d141413e82 ">(Optional) SAML authentication: An alternative certificate from the identity provider's metadata.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1146" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_NAMEID_FORMAT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1146 d141413e82 ">SAML authentication: The NameID format that APEX expects. Defaults to <code class="codeph">urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code> when null.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1158" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_SIGN_IN_URL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1158 d141413e82 ">SAML authentication: The identity provider's sign in URL.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1164" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_SIGN_OUT_URL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1164 d141413e82 ">(Optional) SAML authentication: The identity provider's sign out URL.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1170" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_SP_ISSUER</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1170 d141413e82 ">SAML authentication: The "issuer" attribute that APEX sends (defaults to the callback URL).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1182" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SAML_USERNAME_ATTRIBUTE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1182 d141413e82 ">SAML authentication: Responses can contain additional attributes about the user. If set, APEX uses that attribute's value as the username (defaults to the assertion subject's <code class="codeph">NameID</code> attribute).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1194" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_MIN_LENGTH</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1194 d141413e82 ">A positive integer or <code class="codeph">0</code> which specifies the minimum character length for passwords for instance administrators, workspace administrators, developers, and end user APEX accounts, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1209" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_NEW_DIFFERS_BY</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1209 d141413e82 ">A positive integer or <code class="codeph">0</code> which specifies the number of differences required between old and new passwords. The passwords are compared character by character, and each difference that occurs in any position counts toward the required minimum difference. This setting applies to accounts for instance administrators, workspace administrators, developers, and end user APEX accounts, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1225" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_ONE_ALPHA</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1225 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one alphabetic character as specified in <code class="codeph">PASSWORD_ALPHA_CHARACTERS</code>, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1240" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_ONE_NUMERIC</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1240 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one Arabic numeric character (<code class="codeph">0-9</code>), when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1255" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_ONE_PUNCTUATION</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1255 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one punctuation character as specified in <code class="codeph">PASSWORD_PUNCTUATION_CHARACTERS</code>, the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1271" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_ONE_LOWER_CASE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1271 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one lowercase alphabetic character, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1283" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_ONE_UPPER_CASE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1283 d141413e82 ">Set to <code class="codeph">Y</code> to require that workspace administrator, developer, and end user account passwords contain at least one uppercase alphabetic character, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1296" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_NOT_LIKE_USERNAME</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1296 d141413e82 ">If <code class="codeph">Y</code>, prevent workspace administrator, developer, and end user account passwords from containing the username, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1308" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_NOT_LIKE_WORDS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1308 d141413e82 ">Enter words, separated by colons, that workspace administrator, developer, and end user account passwords must not contain, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>). These words may not appear in the password in any combination of upper- or lowercase.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1317" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_ADMIN_PASSWORD_NOT_LIKE_WS_NAME</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1317 d141413e82 ">Set to <code class="codeph">Y</code> to prevent workspace administrator, developer, and end user account passwords from containing the workspace name, when the strong password rules are enabled (see <code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code>).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1329" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_REQUEST_FLOW</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1329 d141413e82 "><p>Determines default provisioning mode. Options are:</p>
<ul>
<li><code class="codeph">MANUAL</code> - (Default) An administrator must manually create each workspace.</li>
<li><code class="codeph">EMAIL</code> - Link displayed on login page. Requests require administrator approval.</li>
<li><code class="codeph">AUTO</code> - Link displayed on login page. Requests are automatically approved.</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1349" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SERVICE_REQUESTS_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1349 d141413e82 ">If set to <code class="codeph">Y</code>, the default, workspace service requests for schemas, storage, and termination is enabled. If set to <code class="codeph">N</code>, these requests are disabled.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1361" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SMTP_FROM</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1361 d141413e82 "><p>Defines the "From" address for administrative tasks that generate email, such as approving a provision request or resetting a password.</p>
<p>Enter a valid email address, for example:</p>
<pre class="pre codeblock"><code>admin@example.com</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1376" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SMTP_HOST_ADDRESS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1376 d141413e82 "><p>Defines the server address of the SMTP server. If you are using another server as an SMTP relay, change this parameter to that server's address.</p>
<p>Default setting: <code class="codeph">localhost</code></p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1387" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SMTP_HOST_PORT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1387 d141413e82 "><p>Defines the port the SMTP server listens to for mail requests.</p>
<p>Default setting: <code class="codeph">25</code></p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1398" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SMTP_PASSWORD</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1398 d141413e82 ">Defines the password APEX takes to authenticate itself against the SMTP server, with the parameter <code class="codeph">SMTP_USERNAME</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1410" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SMTP_TLS_MODE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1410 d141413e82 "><p>Defines whether APEX opens an encrypted connection to the SMTP server. Encryption is only supported on database versions 11.2.0.2 and later. On earlier database versions, the connection is not encrypted.</p>
<p>If set to <code class="codeph">N</code>, the connection is unencrypted (default).</p>
<p>If set to <code class="codeph">Y</code>, the connection is encrypted before data is sent.</p>
<p>If <code class="codeph">STARTTLS</code>, APEX sends the SMTP commands <code class="codeph">EHLO &lt;SMTP_HOST_ADDRESS&gt;</code> and <code class="codeph">STARTTLS</code> before encrypting the connection.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1444" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SMTP_USERNAME</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1444 d141413e82 ">Defines the username APEX takes to authenticate itself against the SMTP server (default is null). Starting with database version 11.2.0.2, APEX uses <code class="codeph">UTL_MAIL</code>'s <code class="codeph">AUTH</code> procedure for authentication. This procedure negotiates an authentication mode with the SMTP server. With earlier database versions, the authentication mode is always <code class="codeph">AUTH</code> <code class="codeph">LOGIN</code>. If <code class="codeph">SMTP_USERNAME</code> is null, no authentication is used.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1472" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SOCIAL_AUTH_CALLBACK</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1472 d141413e82 ">Callback procedure name for Social Sign-In, defaults to <code class="codeph">apex_authentication.callback</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1481" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SQL_SCRIPT_MAX_OUTPUT_SIZE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1481 d141413e82 ">Sets the maximum size for an individual script result. Default is <code class="codeph">200000</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1490" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SSO_LOGOUT_URL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1490 d141413e82 "><p>Defines the URL APEX redirects to in order to trigger a logout from the Single Sign-On server. APEX automatically appends <code class="codeph">?p_done_url=...login url...</code></p>
<p>Example: <code class="codeph">https://login.example.com/pls/orasso/orasso.wwsso_app_admin.ls_logout</code></p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1509" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">STRONG_SITE_ADMIN_PASSWORD</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1509 d141413e82 ">If set to <code class="codeph">Y</code>, the default, the <code class="codeph">apex_admin</code> password must conform to the default set of strong complexity rules. If set to <code class="codeph">N</code>, the password is not required to follow the strong complexity rules.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1524" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SYSTEM_DEBUG_LEVEL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1524 d141413e82 ">Defines a default debug level for all incoming requests (null, 1-9) The SQLcl script <code class="codeph">utilities/debug/d0.sql</code> can be used to switch between NULL (disabled) and level 9.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1536" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SYSTEM_HELP_URL</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1536 d141413e82 ">Location of the help and documentation accessed from the Help link within the development environment. Default is <code class="codeph">http://apex.oracle.com/doc41</code></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1545" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">SYSTEM_MESSAGE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1545 d141413e82 ">The text to be displayed on the development environment home page. This text can include HTML.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1551" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">TRACE_HEADER_NAME</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1551 d141413e82 ">This parameter contains a HTTP request header name and defaults to <code class="codeph">ECID-CONTEXT</code>. The name must be in upper case. APEX writes the HTTP header value to the activity log's ECID column.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1563" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">TRACING_ENABLED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1563 d141413e82 "><p>If set to <code class="codeph">Y</code> (the default), an application with Debug enabled can also generate server side db trace files using <code class="codeph">&amp;p_trace=YES</code> on the URL.</p>
<p>If set to <code class="codeph">N</code>, the request to create a trace file is ignored.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1581" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">UPGRADE_DATE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1581 d141413e82 "><p>This read-only parameter contains the date when the next scheduled APEX upgrade will automatically apply to your database or <code class="codeph">NULL</code> when no upgrade is scheduled. The date follows the ISO 8601 format in the UTC time zone.</p>
<p>This parameter only applies to APEX on Autonomous Database.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1602" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">UPGRADE_DEFERRED</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1602 d141413e82 "><p>When <code class="codeph">N</code> (default), future APEX upgrades are scheduled within the default upgrade window.When <code class="codeph">Y</code>, future APEX upgrades are scheduled within the extended upgrade window.</p>
<p>If the next APEX upgrade is already scheduled in this database, changing this parameter also reschedules this upgrade (for example, from the default upgrade window to the extended upgrade window).</p>
<p>This parameter only applies to APEX on Oracle Autonomous Database.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1637" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">UPGRADE_STATUS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1637 d141413e82 "><p>This parameter contains the status of the next scheduled APEX upgrade if available. The possible values are: <code class="codeph">UP-TO-DATE</code>, <code class="codeph">SCHEDULED</code>, <code class="codeph">RUNNING</code>. Set this parameter to <code class="codeph">RUN</code> to initiate the upgrade.</p>
<p>This parameter only applies to APEX on Autonomous Database.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1667" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">UPGRADE_VERSION</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1667 d141413e82 "><p>This read-only parameter contains the APEX version to be installed with the next scheduled upgrade or <code class="codeph">NULL</code> when no upgrade is scheduled.</p>
<p>This parameter only applies to APEX on Autonomous Database.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1688" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">USERNAME_VALIDATION</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1688 d141413e82 "><p>The case-sensitive regular expression used to validate a username when creating or modifying developer and workspace administrator accounts. Default is <code class="codeph">*</code> (asterisk) (validation is disabled).</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1698" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WALLET_PATH</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1698 d141413e82 "><p>The path to the wallet on the file system, for example:</p>
<pre class="pre codeblock"><code>file:/home/&lt;username&gt;/wallets</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1710" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WALLET_PWD</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1710 d141413e82 ">The password associated with the wallet. Use an empty/null value for auto-login wallets.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1716" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WORKSPACE_FREE_SPACE_LIMIT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1716 d141413e82 ">Sets percentage limit for free space in a workspace. If available space is lower that the value set here, a report lists them for the APEX Administrator Digest.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1723" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WORKSPACE_MAX_OUTPUT_SIZE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1723 d141413e82 ">The maximum space allocated for script results. Default is <code class="codeph">2000000</code></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1731" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WORKSPACE_NAME_USER_COOKIE</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1731 d141413e82 ">If set to <code class="codeph">Y</code> or null (the default), APEX sends persistent cookies for workspace name and username during login, as well as for language selection. If <code class="codeph">N</code>, the cookies are not sent.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1746" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WORKSPACE_PROVISION_DEMO_OBJECTS</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1746 d141413e82 ">If set to <code class="codeph">Y</code> (default), demonstration applications and database objects are created in new workspaces. If set to <code class="codeph">N</code>, they are not created in new workspaces.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1758" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WORKSPACE_TEAM_DEV_FILES_YN</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1758 d141413e82 ">If set to <code class="codeph">Y</code>, the default, new workspaces enable file uploads into Team Development. If set to <code class="codeph">N</code>, new workspaces disable file uploads into Team Development, disabling the ability to upload <code class="codeph">feature</code>, <code class="codeph">bug</code>, and <code class="codeph">feedback</code> attachments.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1779" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">WORKSPACE_TEAM_DEV_FS_LIMIT</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1779 d141413e82 ">The maximum per upload file size of a Team Development file (feature, bug, and feedback attachments). Default value is <code class="codeph">15728640</code> (15 MB). All possible options are listed below:
<pre class="pre codeblock"><code>5 MB - 5242880 | 10 MB - 10485760 | 15 MB - 15728640 | 20 MB - 20971520 | 25 MB - 26214400</code></pre></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1790" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ZIP_FILE_MAX_EXPANSION_FACTOR</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1790 d141413e82 ">The maximum factor by which a compressed file can expand after decompression. Default value is <code class="codeph">200</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d141413e1799" style="text-align: left;" data-valign="top" width="38%" headers="d141413e80 "><code class="codeph">ZIP_FILE_MAX_UNCOMPRESSED_SIZE_MB</code></td>
<td style="text-align: left;" data-valign="top" width="62%" headers="d141413e1799 d141413e82 ">The maximum size to unzip a file. Default value is <code class="codeph">4096</code> MB.</td>
</tr>
</tbody>
</table>

Instance and Workspace Parameters

The following parameters can be configured at both the Instance level (using `APEX_INSTANCE_ADMIN.SET_PARAMETER`) and the Workspace level (using `APEX_INSTANCE_ADMIN.SET_WORKSPACE_PARAMETER`).

| Parameter | Description |
|:---|:---|
| `ACCOUNT_LIFETIME_DAYS` | The maximum number of days an end-user account password may be used before the account is expired. |
| `AI_IS_ENABLED` | If set to \`Y\` (default), then AI Services can be enabled and configured for workspaces. If set to \`N\`, AI functionality is disabled for all workspaces. |
| `ALLOW_HOSTING_EXTENSIONS` | Default \`N\`. If \`Y\`, the workspace is enabled to publish Builder Extension apps through the Extension Menu. |
| `ALLOW_HOSTNAMES` | If set, users can only navigate to an application if the URL's hostname part contains this value. Instance administrators can configure more specific values at workspace level. |
| `CONTENT_CACHE_MAX_FILE_SIZE` | The individual file entry size limit for the content cache, per workspace. |
| `CONTENT_CACHE_SIZE_TARGET` | The target size for the content cache, per workspace. |
| `ENV_BANNER_COLOR` | Defines the color class name for the environment banner color. Use \`accent-1\`, \`accent-2\`, \`accent-3\` (and so on). Maximum of 16 color classes. |
| `ENV_BANNER_ENABLE` | If set to \`Y\` (default is \`N\`), the environment banner displays in the APEX development environment to visually flag the environment. |
| `ENV_BANNER_LABEL` | Defines the label for the environment banner. |
| `ENV_BANNER_POS` | Defines the display position for the environment banner. Options: \`LEFT\` or \`TOP\`. |
| `EXPIRE_FND_USER_ACCOUNTS` | If set to \`Y\`, expiration of APEX accounts is enabled. If set to \`N\`, they are not enabled. |
| `MAX_LOGIN_FAILURES` | The maximum number of consecutive unsuccessful authentication attempts allowed before a developer or administrator account is locked. |
| `MAX_SESSION_IDLE_SEC` | The number of seconds an internal application may be idle. |
| `MAX_SESSION_LENGTH_SEC` | The number of seconds an internal application session may exist. |
| `MAX_WEBSERVICE_REQUESTS` | The maximum number of outbound web service requests allowed for each workspace in a rolling 24-hour period. Default is 1000. |
| `QOS_MAX_SESSION_KILL_TIMEOUT` | Number of seconds that an active old session can live, when \`QOS_MAX_SESSION_REQUESTS\` has been reached. The oldest DB session with \`LAST_CALL_ET\` greater than \`QOS_MAX_SESSION_KILL_TIMEOUT\` will be killed. |
| `QOS_MAX_WORKSPACE_REQUESTS` | Number of allowed concurrent requests to sessions in this workspace. |
| `QOS_MAX_SESSION_REQUESTS` | Number of allowed concurrent requests to one session associated with this workspace. |
| `RM_CONSUMER_GROUP` | If set, this is the resource manager consumer group to be used for all page events. A more specific group can be configured at workspace level. |
| `SESSION_TIMEOUT_WARNING_SEC` | The number of seconds before session timeout that a warning is displayed, for internal applications. |
| `WEBSERVICE_LOGGING` | Controls instance wide setting of web service activity log: \[\`A\`\]lways, \[\`N\`\]ever, \[\`U\`\]se workspace settings. |
| `WORKSPACE_EMAIL_MAXIMUM` | Maximum number of emails allowed to be sent via \`APEX_MAIL\` per workspace in a 24 hour period. Default is 1000. |
| `WORKSPACE_MAX_FILE_BYTES` | The maximum number of bytes for uploaded files for a workspace. A setting at workspace level overrides the instance level setting. |

Workspace Parameters

The following parameters can be configured only at the Workspace level (using `APEX_INSTANCE_ADMIN.SET_WORKSPACE_PARAMETER`).

| Parameter | Description |
|:---|:---|
| `OPENTELEMETRY_CLS_URL` | The external Client Logging Service (CLS) URL that is obtained during telemetry provisioning. |
| `OPENTELEMETRY_TOKEN_RELAY_URL` | The REST service that obtains an access token for the currently logged in user. The token is used for authentication when calling the CLS. |
| `PATH_PREFIX` | The unique URI path prefix used to access RESTful Services in a workspace. The default path prefix value is the name of the workspace. Note that this is a workspace parameter, it can not be set at instance level. |

See Also:

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEADM-GUID-466A0174-DC1F-4092-AC49-99E818FD7899" target="_blank">Configuring Email in a Runtime Environment</a> in the Oracle APEX Administration Guide
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEADM-GUID-BBE43F61-DA0B-4517-AC5E-D06C4C69D526" target="_blank">Configuring Wallet Information</a> in the Oracle APEX Administration Guide
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEADM-GUID-966A876E-6534-4CE2-B44E-EB6527326DCC" target="_blank">Configuring Report Printing for an Instance</a> in the Oracle APEX Administration Guide
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEADM-GUID-853F40E1-F360-4CE9-8DC1-FC111A825D14" target="_blank">Workspace and Application Administration</a> in the Oracle APEX Administration Guide

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.2 ADD_AUTO_PROV_RESTRICTIONS Procedure

This procedure adds blocking email patterns when an instance has auto-provisioning or self-provisioning enabled for workspaces.

If auto/self-provisioning is disabled, this procedure has no runtime effect.

Syntax

```
APEX_INSTANCE_ADMIN.ADD_AUTO_PROV_RESTRICTIONS (
    p_block_email_patterns IN apex_t_varchar2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_block_email_patterns` | Add one or more email patterns to be removed from the `apex_auto_prov_email_patterns` table. |

Example

```
BEGIN
    apex_instance_admin.add_auto_prov_restrictions (
        p_block_email_patterns => apex_t_varchar2('%@gmail.com','%@example.com') );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.3 ADD_SCHEMA Procedure

This procedure adds a schema to a workspace to schema mapping.

Syntax

```
APEX_INSTANCE_ADMIN.ADD_SCHEMA (
    p_workspace             IN VARCHAR2,
    p_schema                IN VARCHAR2,
    p_grant_apex_privileges IN VARCHAR2 DEFAULT FALSE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_workspace` | The name of the workspace to which the schema mapping is added. |
| `p_schema` | The schema to add to the schema to workspace mapping. |
| `p_grant_apex_privileges` | Grant the privileges needed by Oracle APEX to this schema. Default `FALSE`. |

Example

The following example demonstrates how to use the `ADD_SCHEMA` procedure to map a schema mapped to a workspace.

```
BEGIN
    APEX_INSTANCE_ADMIN.ADD_SCHEMA('MY_WORKSPACE','FRANK',true );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.4 ADD_WEB_ENTRY_POINT Procedure

Purpose

Add a public procedure to the list of allowed objects that can be called via the URL.

The parsing schema (such as `APEX_PUBLIC_USER`) must have privileges to execute the procedure. You must enable `EXECUTE` to `PUBLIC` or the parsing schema.

Syntax

```
APEX_INSTANCE_ADMIN.ADD_WEB_ENTRY_POINT (
    p_name    IN VARCHAR2,
    p_methods IN VARCHAR2 DEFAULT 'GET' );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d149325e82" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d149325e84" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d149325e88" style="text-align: left;" data-valign="top" width="31%" headers="d149325e82 "><code class="codeph">p_name</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d149325e88 d149325e84 ">The procedure name, prefixed by package name and schema, unless a public synonym exists.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d149325e94" style="text-align: left;" data-valign="top" width="31%" headers="d149325e82 "><code class="codeph">p_methods</code> (deprecated)</td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d149325e94 d149325e84 "><div id="GUID-F72BC668-2818-4037-9234-E4403D6FB981__GUID-91DE2E93-C953-47D2-A50C-19202320AB32" class="infoboxnote">
<p>Note:</p>
This parameter is deprecated and will be removed in a future release.
<p>The comma-separated <code class="codeph">HTTP</code> request methods (such as <code class="codeph">GET</code> or <code class="codeph">POST</code>). Default <code class="codeph">GET</code>.</p></td>
</tr>
</tbody>
</table>

Examples

This example enables `myschema.mypkg.proc` to be called via `GET` and `POST` requests, such as `https://www.example.com/apex/myschema.mypkg.proc`

```
BEGIN
    apex_instance_admin.add_web_entry_point (
        p_name    => 'MYSCHEMA.MYPKG.PROC',
        p_methods => 'GET,POST' );
    COMMIT;
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.5 ADD_WORKSPACE Procedure

Adds a workspace to an Oracle APEX instance.

Syntax

```
APEX_INSTANCE_ADMIN.ADD_WORKSPACE (
    p_workspace_id        IN NUMBER DEFAULT NULL,
    p_workspace           IN VARCHAR2,
    p_source_identifier   IN VARCHAR2 DEFAULT NULL,
    p_primary_schema      IN VARCHAR2,
    p_additional_schemas  IN VARCHAR2,
    p_rm_consumer_group   IN VARCHAR2 DEFAULT NULL,
    p_host_prefix         IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_workspace_id` | The ID to uniquely identify the workspace in an APEX instance. This may be left null and a new unique ID is assigned. |
| `p_workspace` | The name of the workspace to be added. |
| `p_source_identifier` | A short identifier for the workspace used when synchronizing feedback between different instances. |
| `p_primary_schema` | The primary database schema to associate with the new workspace. |
| `p_additional_schemas` | A colon delimited list of additional schemas to associate with this workspace. |
| `p_rm_consumer_group` | Resource Manager consumer group which is used when executing applications of this workspace. |
| `p_host_prefix` | If set, users can only navigate to an application if the URL's hostname part contains this value. |

Example

The following example demonstrates how to use the `ADD_WORKSPACE` procedure to add a new workspace named `MY_WORKSPACE` using the primary schema, `SCOTT`, along with additional schema mappings for HR and OE.

```
BEGIN
    APEX_INSTANCE_ADMIN.ADD_WORKSPACE (
        p_workspace_id       => 8675309,
        p_workspace          => 'MY_WORKSPACE',
        p_primary_schema     => 'SCOTT',
        p_additional_schemas => 'HR:OE' );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.6 CREATE_CLOUD_CREDENTIAL Procedure

This procedure creates a new DBMS_CLOUD OCI API Key credential. This procedure creates a credential in DBMS_CLOUD using `DBMS_CLOUD.CREATE_CREDENTIAL`.

Syntax

```
APEX_INSTANCE_ADMIN.CREATE_CLOUD_CREDENTIAL (
    p_credential_name       IN VARCHAR2,
    p_user_ocid             IN VARCHAR2,
    p_tenancy_ocid          IN VARCHAR2,
    p_private_key           IN VARCHAR2,
    p_fingerprint           IN VARCHAR2 )
```

Parameters

| Parameter           | Description                                     |
|:--------------------|:------------------------------------------------|
| `p_credential_name` | Name for credential.                            |
| `p_user_ocid`       | Oracle Cloud identifier (OCID) for the user.    |
| `p_tenancy_ocid`    | Oracle Cloud identifier (OCID) for the tenancy. |
| `p_private_key`     | Private key.                                    |
| `p_fingerprint`     | Specifies a fingerprint.                        |

Example

The following example creates the `MY_CREDENTIAL` credential.

```
BEGIN
    APEX_INSTANCE_ADMIN.CREATE_CLOUD_CREDENTIAL (
    p_credential_name       => 'MY_CREDENTIAL',
    p_user_ocid             => 'ocid1.user.oc1...',
    p_tenancy_ocid          => 'ocid1.tenancy.oc1..',
    p_private_key           => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    p_fingerprint           => '12:34:56:78:90:ab:cd:ef:12:34:56:78:90:ab:cd:ef' );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.7 CREATE_OR_UPDATE_ADMIN_USER Procedure

This procedure creates an instance administration user account (that is, a user in the `INTERNAL` workspace). If the account already exists, this procedure also unlocks it and updates the account with a random password (not used when the builder authentication is Database Accounts).

This is the procedural equivalent of calling the `apxchpwd.sql` script.

Syntax

```
APEX_INSTANCE_ADMIN.CREATE_OR_UPDATE_ADMIN_USER (
    p_username  IN  VARCHAR2 )
```

Parameters

| Parameter    | Description   |
|:-------------|:--------------|
| `p_username` | The username. |

Example

The following example creates or updates the user `ADMIN`.

```
BEGIN
    apex_instance_admin.create_or_update_admin_user (
        p_username => 'ADMIN',
    COMMIT;
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.8 CREATE_SCHEMA_EXCEPTION Procedure

This procedure creates an exception which enables the assignment of a restricted schema to a specific workspace.

Syntax

```
APEX_INSTANCE_ADMIN.CREATE_SCHEMA_EXCEPTION (
    p_schema    IN VARCHAR2,
    p_workspace IN VARCHAR2 )
```

Parameter

| Parameter     | Description    |
|:--------------|:---------------|
| `p_schema`    | The schema.    |
| `p_workspace` | The workspace. |

Example

This example allows the assignment of restricted schema `HR` to workspace `HR_WORKSPACE`.

```
BEGIN
    apex_instance_admin.create_schema_exception (
        p_schema    => 'HR',
        p_workspace => 'HR_WORKSPACE' );
    COMMIT;
END;
```

See Also:

- [RESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESTRICT_SCHEMA-Procedure.html#GUID-97A8DD03-5B6B-4C12-91E8-842CB156B6C6)
- [UNRESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/UNRESTRICT_SCHEMA-Procedure.html#GUID-2DD387A4-E20B-4A9C-8750-31D050F12908)
- [REMOVE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTION-Procedure.html#GUID-F866ACE1-45F2-482E-AA42-F6B62C68F803)
- [REMOVE_SCHEMA_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html#GUID-5DA71997-98DC-4D07-ACDB-B342AF6EEE69)
- [REMOVE_WORKSPACE_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WORKSPACE_EXCEPTIONS-Procedure.html#GUID-A16B1798-C959-4900-B946-43842D4D6510)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.9 DB_SIGNATURE Function

This function computes the current database signature value.

Syntax

```
APEX_INSTANCE_ADMIN.DB_SIGNATURE
    RETURN VARCHAR2;
```

Example

The following example sets the `DB_SIGNATURE` instance parameter to the current database signature.

```
BEGIN
     apex_instance_admin.set_parameter (
         p_parameter => 'DB_SIGNATURE',
         p_value     => apex_instance_admin.db_signature );
END;
```

See Also:

- [IS_DB_SIGNATURE_VALID Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/IS_DB_SIGNATURE_VALID-Function.html#GUID-2F6EBECA-354C-4D41-9BEC-4CF9F7F69E85)
- [Available Parameter Values](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.Available-Parameter-Values.html#GUID-75DCF658-5A76-4E81-B12D-04E254A3D80A)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.10 DROP_CLOUD_CREDENTIAL Procedure

This procedure Drops an existing DBMS_CLOUD OCI API Key credential. The procedure drops a credential in the internal Oracle APEX schema using `DBMS_CLOUD.DROP_CREDENTIAL`.

Syntax

```
APEX_INSTANCE_ADMIN.DROP_CLOUD_CREDENTIAL (
    p_credential_name       IN VARCHAR2 )
```

Parameters

| Parameter           | Description          |
|:--------------------|:---------------------|
| `p_credential_name` | Name for credential. |

Example

The following example drops the `MY_CREDENTIAL` credential.

```
BEGIN
    APEX_INSTANCE_ADMIN.DROP_CLOUD_CREDENTIAL (
    p_credential_name       => 'MY_CREDENTIAL' );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.11 FREE_WORKSPACE_APP_IDS Procedure

This procedure removes the reservation of application IDs for a given workspace ID. Use this procedure to undo a reservation, when the reservation is not necessary anymore because it happened by mistake or the workspace no longer exists. To reserve application IDs for a given workspace, see [RESERVE_WORKSPACE_APP_IDS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESERVE_WORKSPACE_APP_IDS-Procedure.html#GUID-3E66E35B-2787-4A6F-8712-F3DB8C141AC0).

Syntax

```
APEX_INSTANCE_ADMIN.FREE_WORKSPACE_APP_IDS (
    p_workspace_id IN NUMBER )
```

Parameters

| Parameter        | Description                     |
|:-----------------|:--------------------------------|
| `p_workspace_id` | The unique ID of the workspace. |

Example

This example illustrates how to undo the reservation of application IDs that belong to a workspace with an ID of `1234567890`.

```
begin
    apex_instance_admin.free_workspace_app_ids(1234567890);
end;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.12 GET_PARAMETER Function

This function retrieves the value of a parameter used in administering a runtime environment.

Syntax

```
APEX_INSTANCE_ADMIN.GET_PARAMETER (
    p_parameter     IN VARCHAR2 )
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
<th id="d150957e69" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d150957e71" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d150957e75" style="text-align: left;" data-valign="top" width="31%" headers="d150957e69 "><code class="codeph">p_parameter</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d150957e75 d150957e71 "><p>The instance parameter to be retrieved.</p>
<p>See <a href="APEX_INSTANCE_ADMIN.Available-Parameter-Values.html#GUID-75DCF658-5A76-4E81-B12D-04E254A3D80A">Available Parameter Values</a>.</p></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `GET_PARAMETER` function to retrieve the `SMTP_HOST_ADDRESS` parameter currently defined for an APEX instance.

```
DECLARE
    L_VAL VARCHAR2(4000);
BEGIN
    L_VAL :=APEX_INSTANCE_ADMIN.GET_PARAMETER('SMTP_HOST_ADDRESS');
    DBMS_OUTPUT.PUT_LINE('The SMTP Host Setting Is: '||L_VAL);
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.13 GET_SCHEMAS Function

The `GET_SCHEMAS` function retrieves a comma-delimited list of schemas that are mapped to a given workspace.

Syntax

```
APEX_INSTANCE_ADMIN.GET_SCHEMAS (
    p_workspace     IN VARCHAR2 )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_workspace` | The name of the workspace from which to retrieve the schema list. |

Example

The following example demonstrates how to use the `GET_SCHEMA` function to retrieve the underlying schemas mapped to a workspace.

```
DECLARE
    L_VAL VARCHAR2(4000);
BEGIN
    L_VAL :=APEX_INSTANCE_ADMIN.GET_SCHEMAS('MY_WORKSPACE');
    DBMS_OUTPUT.PUT_LINE('The schemas for my workspace: '||L_VAL);
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.14 GET_WORKSPACE_PARAMETER Procedure

Gets the workspace parameter.

Syntax

```
APEX_INSTANCE_ADMIN.GET_WORKSPACE_PARAMETER (
    p_workspace     IN VARCHAR2,
    p_parameter     IN VARCHAR2 )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d151251e69" style="text-align: left;" data-valign="bottom" width="24%">Parameter</th>
<th id="d151251e71" style="text-align: left;" data-valign="bottom" width="76%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d151251e75" style="text-align: left;" data-valign="top" width="24%" headers="d151251e69 "><code class="codeph">p_workspace</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d151251e75 d151251e71 ">The name of the workspace from which you are getting the workspace parameter.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d151251e81" style="text-align: left;" data-valign="top" width="24%" headers="d151251e69 "><code class="codeph">p_parameter</code></td>
<td style="text-align: left;" data-valign="top" width="76%" headers="d151251e81 d151251e71 "><p>The name of the parameter to get. Parameter names include:</p>
<ul>
<li><code class="codeph">ACCOUNT_LIFETIME_DAYS</code></li>
<li><code class="codeph">ALLOW_HOSTNAMES</code></li>
<li><code class="codeph">ENV_BANNER_COLOR</code></li>
<li><code class="codeph">ENV_BANNER_LABEL</code></li>
<li><code class="codeph">ENV_BANNER_POS</code></li>
<li><code class="codeph">ENV_BANNER_YN</code></li>
<li><code class="codeph">EXPIRE_FND_USER_ACCOUNTS</code></li>
<li><code class="codeph">MAX_LOGIN_FAILURES</code></li>
<li><code class="codeph">MAX_SESSION_IDLE_SEC</code></li>
<li><code class="codeph">MAX_SESSION_LENGTH_SEC</code></li>
<li><code class="codeph">MAX_WEBSERVICE_REQUESTS</code></li>
<li><code class="codeph">QOS_MAX_SESSION_KILL_TIMEOUT</code></li>
<li><code class="codeph">QOS_MAX_SESSION_REQUESTS</code></li>
<li><code class="codeph">QOS_MAX_WORKSPACE_REQUESTS</code></li>
<li><code class="codeph">RM_CONSUMER_GROUP</code></li>
<li><code class="codeph">WEBSERVICE_LOGGING</code></li>
<li><code class="codeph">WORKSPACE_EMAIL_MAXIMUM</code></li>
<li><code class="codeph">WORKSPACE_MAX_FILE_BYTES</code></li>
</ul></td>
</tr>
</tbody>
</table>

Example

The following example prints the value of `ALLOW_HOSTNAMES` for the HR workspace.

```
BEGIN
    DBMS_OUTPUT.PUT_LINE (
APEX_INSTANCE_ADMIN.GET_WORKSPACE_PARAMETER (
            p_workspace => 'HR',
            p_parameter => 'ALLOW_HOSTNAMES' ));
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.15 GRANT_EXTENSION_WORKSPACE Procedure

This procedure grants read access for a workspace to an extension workspace. Builder extension menu links of the extension workspace appear in the grantor workspace's extension menu.

Syntax

```
APEX_INSTANCE_ADMIN.GRANT_EXTENSION_WORKSPACE (
    p_from_workspace    IN  VARCHAR2,
    p_to_workspace      IN  VARCHAR2,
    p_read_access       IN  BOOLEAN  DEFAULT FALSE,
    p_menu_label        IN  VARCHAR2 DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d151540e70" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d151540e72" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d151540e76" style="text-align: left;" data-valign="top" width="42%" headers="d151540e70 "><code class="codeph">p_from_workspace</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d151540e76 d151540e72 ">Name of workspace granting access.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d151540e82" style="text-align: left;" data-valign="top" width="42%" headers="d151540e70 "><code class="codeph">p_to_workspace</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d151540e82 d151540e72 ">Name of extension workspace.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d151540e88" style="text-align: left;" data-valign="top" width="42%" headers="d151540e70 "><code class="codeph">p_read_access</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d151540e88 d151540e72 "><p>Default <code class="codeph">FALSE</code>.</p>
<p>If <code class="codeph">TRUE</code>, the extension workspace has read access to the grantor's repository views.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d151540e103" style="text-align: left;" data-valign="top" width="42%" headers="d151540e70 "><code class="codeph">p_menu_label</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d151540e103 d151540e72 ">(Optional) Overwrite the extension menu parent label. Otherwise, shows the name of the extension workspace.</td>
</tr>
</tbody>
</table>

Example

The following example grants extension workspace `EXTENSIONS` read access to workspace `MY_WORKSPACE` and overwrites the extension menu parent label with "Tools."

```
BEGIN
    apex_instance_admin.grant_extension_workspace(
        p_from_workspace      => 'MY_WORKSPACE',
        p_to_workspace        => 'EXTENSIONS',
        p_read_access         => true,
        p_menu_label          => 'Tools' );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.16 IS_DB_SIGNATURE_VALID Function

The `IS_DB_SIGNATURE_VALID` function returns whether the instance parameter `DB_SIGNATURE` matches the value of the function `db_signature`. If the instance parameter is not set (the default), also return `true`.

Syntax

```
APEX_INSTANCE_ADMIN.IS_DB_SIGNATURE_VALID
    RETURN BOOLEAN;
```

Example

The following example prints the signature is valid.

```
begin
    sys.dbms_output.put_line (
        case when apex_instance_admin.is_db_signature_valid
        then 'signature is valid, features are enabled'
        else 'signature differs (cloned db), features are disabled'
        end );
end;
```

See Also:

- [DB_SIGNATURE Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/DB_SIGNATURE-Function.html#GUID-DABD4498-E220-4C52-8E93-8ADF93D370D5)
- [Available Parameter Values](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.Available-Parameter-Values.html#GUID-75DCF658-5A76-4E81-B12D-04E254A3D80A)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.17 REMOVE_APPLICATION Procedure

Removes the application specified from the Oracle APEX instance.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_APPLICATION (
    p_application_id IN NUMBER );
```

Parameters

| Parameter          | Description                |
|:-------------------|:---------------------------|
| `p_application_id` | The ID of the application. |

Example

The following example demonstrates how to use the `REMOVE_APPLICATION` procedure to remove an application with an ID of 100 from an APEX instance.

```
BEGIN
    APEX_INSTANCE_ADMIN.REMOVE_APPLICATION(100);
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.18 REMOVE_AUTO_PROV_RESTRICTIONS Procedure

This procedure removes blocking email patterns when an instance has auto-provisioning or self-provisioning enabled for workspaces.

If auto/self-provisioning is disabled, this procedure has no runtime effect.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_AUTO_PROV_RESTRICTIONS (
    p_block_email_patterns IN apex_t_varchar2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_block_email_patterns` | Add one or more email patterns to be added to the `apex_auto_prov_email_patterns` table. |

Example

```
BEGIN
    apex_instance_admin.remove_auto_prov_restrictions (
        p_block_email_patterns => apex_t_varchar2('%@gmail.com','%@example.com') );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.19 REMOVE_SAVED_REPORT Procedure

The `REMOVE_SAVED_REPORT` procedure removes a specific user's saved interactive report settings for a particular application.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_SAVED_REPORT (
    p_application_id     IN NUMBER,
    p_report_id          IN NUMBER );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The ID of the application for which to remove user saved interactive report information. |
| `p_report_id` | The ID of the saved user interactive report to be removed. |

Example

The following example removes the user-saved interactive report with the ID `123` for the application with an ID of `100`.

```
BEGIN
    APEX_INSTANCE_ADMIN.REMOVE_SAVED_REPORT(100,123);
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.20 REMOVE_SAVED_REPORTS Procedure

The `REMOVE_SAVED_REPORTS` procedure removes all user saved interactive report settings for a particular application or for the entire instance.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_SAVED_REPORTS (
    p_application_id     IN NUMBER DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The ID of the application for which to remove user-saved interactive report information. If NULL, all user-saved interactive reports for the entire instance are removed. |

Example

The following example demonstrates how to use the `REMOVE_SAVED_REPORTS` procedure to remove user saved interactive report information for the application with an ID of 100.

```
BEGIN
    APEX_INSTANCE_ADMIN.REMOVE_SAVED_REPORTS(100);
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.21 REMOVE_SCHEMA Procedure

Removes a workspace to schema mapping.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_SCHEMA (
    p_workspace     IN VARCHAR2,
    p_schema        IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_workspace` | The name of the workspace from which the schema mapping is removed. |
| `p_schema` | The schema to remove from the schema to workspace mapping. |

Example

The following example demonstrates how to use the `REMOVE_SCHEMA` procedure to remove the schema named `FRANK` from the `MY_WORKSPACE` workspace to schema mapping.

```
BEGIN
    APEX_INSTANCE_ADMIN.REMOVE_SCHEMA('MY_WORKSPACE','FRANK');
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.22 REMOVE_SCHEMA_EXCEPTION Procedure

This procedure removes an exception that allows the assignment of a restricted schema to a given workspace.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_SCHEMA_EXCEPTION (
    p_schema    IN VARCHAR2,
    p_workspace IN VARCHAR2 )
```

Parameter

| Parameter     | Description    |
|:--------------|:---------------|
| `p_schema`    | The schema.    |
| `p_workspace` | The workspace. |

Example

This example removes the exception that allows the assignment of schema `HR` to workspace `HR_WORKSPACE`.

```
BEGIN
    apex_instance_admin.remove_schema_exception (
        p_schema    => 'HR',
        p_workspace => 'HR_WORKSPACE' );
    commit;
END;
```

See Also:

- [CREATE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_SCHEMA_EXCEPTION-Procedure.html#GUID-35D91F30-6D42-4E0F-BCA7-9FB1E0BF2B21)
- [RESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESTRICT_SCHEMA-Procedure.html#GUID-97A8DD03-5B6B-4C12-91E8-842CB156B6C6)
- [UNRESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/UNRESTRICT_SCHEMA-Procedure.html#GUID-2DD387A4-E20B-4A9C-8750-31D050F12908)
- [REMOVE_SCHEMA_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html#GUID-5DA71997-98DC-4D07-ACDB-B342AF6EEE69)
- [REMOVE_WORKSPACE_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WORKSPACE_EXCEPTIONS-Procedure.html#GUID-A16B1798-C959-4900-B946-43842D4D6510)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.23 REMOVE_SCHEMA_EXCEPTIONS Procedure

This procedure removes all exceptions that enable the assignment of a restricted schema to a specific workspace.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_SCHEMA_EXCEPTIONS (
      p_schema IN VARCHAR2 )
```

Parameter

| Parameter  | Description |
|:-----------|:------------|
| `p_schema` | The schema. |

Example

This example removes all exceptions that allow the assignment of the `HR` schema to workspaces.

```
BEGIN
    apex_instance_admin.remove_schema_exceptions (
            p_schema => 'HR' );
    COMMIT;
END;
```

See Also:

- [CREATE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_SCHEMA_EXCEPTION-Procedure.html#GUID-35D91F30-6D42-4E0F-BCA7-9FB1E0BF2B21)
- [RESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESTRICT_SCHEMA-Procedure.html#GUID-97A8DD03-5B6B-4C12-91E8-842CB156B6C6)
- [UNRESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/UNRESTRICT_SCHEMA-Procedure.html#GUID-2DD387A4-E20B-4A9C-8750-31D050F12908)
- [REMOVE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTION-Procedure.html#GUID-F866ACE1-45F2-482E-AA42-F6B62C68F803)
- [REMOVE_WORKSPACE_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WORKSPACE_EXCEPTIONS-Procedure.html#GUID-A16B1798-C959-4900-B946-43842D4D6510)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.24 REMOVE_SUBSCRIPTION Procedure

Removes a specific interactive report subscription.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_SUBSCRIPTION (
    p_subscription_id     IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_subscription_id` | The ID of the interactive report subscription to be removed. |

Example

The following example removes the interactive report subscription with the ID `12345`. Use of `APEX_APPLICATION_PAGE_IR_SUB` view can help identifying the subscription ID to remove.

```
BEGIN
    APEX_INSTANCE_ADMIN.REMOVE_SUBSCRIPTION (
        p_subscription_id => 12345);
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.25 REMOVE_WEB_ENTRY_POINT Procedure

Removes a public procedure from the list of allowed objects that can be called via the URL.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_WEB_ENTRY_POINT (
    p_name   IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_name` | The procedure name, prefixed by package name and schema, unless a public synonym exists. |

Examples

Prevent `myschema.mypkg.proc` from being called via POST requests.

```
BEGIN
    APEX_INSTANCE_ADMIN.REMOVE_WEB_ENTRY_POINT (
        p_name   'MYSCHEMA.MYPKG.PROC' );
    COMMIT;
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.26 REMOVE_WORKSPACE Procedure

This procedure removes a workspace from an Oracle APEX instance.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_WORKSPACE (
    p_workspace         IN VARCHAR2,
    p_drop_users        IN VARCHAR2 DEFAULT 'N',
    p_drop_tablespaces  IN VARCHAR2 DEFAULT 'N' )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_workspace` | The name of the workspace to be removed. |
| `p_drop_users` | `Y` to drop the database user associated with the workspace. The default is `N`. |
| `p_drop_tablespaces` | `Y` to drop the tablespace associated with the database user associated with the workspace. The default is `N`. |

Example

The following example demonstrates how to use the `REMOVE_WORKSPACE` procedure to remove an existing workspace named `MY_WORKSPACE`, along with the associated database users and tablespace.

```
BEGIN
    APEX_INSTANCE_ADMIN.REMOVE_WORKSPACE('MY_WORKSPACE','Y','Y');
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.27 REMOVE_WORKSPACE_EXCEPTIONS Procedure

This procedure removes all exceptions that enable the assignment of restricted schemas to a given workspace.

Syntax

```
APEX_INSTANCE_ADMIN.REMOVE_WORKSPACE_EXCEPTIONS (
    p_workspace IN VARCHAR2 )
```

Parameter

| Parameter     | Description    |
|:--------------|:---------------|
| `p_workspace` | The workspace. |

Example

This example removes all exceptions that allow the assignment of restricted schemas to `HR_WORKSPACE`.

```
BEGIN
    apex_instance_admin.remove_schema_exceptions (
            p_workspace => 'HR_WORKSPACE' );
    COMMIT;
END;
```

See Also:

- [CREATE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_SCHEMA_EXCEPTION-Procedure.html#GUID-35D91F30-6D42-4E0F-BCA7-9FB1E0BF2B21)
- [RESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESTRICT_SCHEMA-Procedure.html#GUID-97A8DD03-5B6B-4C12-91E8-842CB156B6C6)
- [UNRESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/UNRESTRICT_SCHEMA-Procedure.html#GUID-2DD387A4-E20B-4A9C-8750-31D050F12908)
- [REMOVE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTION-Procedure.html#GUID-F866ACE1-45F2-482E-AA42-F6B62C68F803)
- [REMOVE_SCHEMA_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html#GUID-5DA71997-98DC-4D07-ACDB-B342AF6EEE69)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.28 RESERVE_WORKSPACE_APP_IDS Procedure

This procedure permanently reserves the IDs of websheet and database applications in a given workspace. Even if the workspace and its applications get removed, developers can not create other applications with one of these IDs.

Syntax

```
APEX_INSTANCE_ADMIN.RESERVE_WORKSPACE_APP_IDS (
    p_workspace_id IN NUMBER )
```

Parameters

| Parameter        | Description                     |
|:-----------------|:--------------------------------|
| `p_workspace_id` | The unique ID of the workspace. |

Example

This example demonstrates setting up two separate Oracle APEX instances where the application IDs are limited to within a specific range. At a later point, a workspace and all of its applications are moved from instance 1 to instance 2. For the workspace that is moved, the developer reserves all of its application IDs to ensure that no applications with the same IDs are created on instance 1.

1.  After setting up APEX instance 1, ensure that application IDs are between 100000 and 199999.

    ``` pre
    begin
        apex_instance_admin.set_parameter('APPLICATION_ID_MIN', 100000);
        apex_instance_admin.set_parameter('APPLICATION_ID_MAX', 199999);
    end;
    ```

2.  After setting up APEX instance 2, ensure that application IDs are between 200000 and 299999.

    ``` pre
    begin
        apex_instance_admin.set_parameter('APPLICATION_ID_MIN', 200000);
        apex_instance_admin.set_parameter('APPLICATION_ID_MAX', 299999);
    end;
    ```

3.  Later, the operations team decides that workspace `MY_WORKSPACE` with ID `1234567890` should be moved from instance 1 to instance 2. The required steps are:
    1.  Export the workspace, applications and data on instance 1 (not shown here).

    2.  Ensure that no other application on instance 1 can reuse application IDs of this workspace.

        ``` pre
        begin
            apex_instance_admin.reserve_workspace_app_ids(1234567890);
        end;
        ```

    3.  Drop workspace, accompanying data and users on instance 1.

        ``` pre
        begin
            apex_instance_admin.remove_workspace('MY_WORKSPACE');
        end;
        ```

    4.  Import the workspace, applications and data on instance 2 (not shown here).

See Also:

To undo a reservation, see [FREE_WORKSPACE_APP_IDS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/FREE_WORKSPACE_APP_IDS-Procedure.html#GUID-19B5F47B-A6D7-4E9A-9540-72251194ED48).

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.29 RESTRICT_SCHEMA Procedure

This procedure revokes the privilege to assign a schema to workspaces.

Syntax

```
APEX_INSTANCE_ADMIN.RESTRICT_SCHEMA (
    p_schema    IN VARCHAR2 )
```

Parameter

| Parameter  | Description |
|:-----------|:------------|
| `p_schema` | The schema. |

Example

This example revokes the privilege to assign schema HR to workspaces.

```
BEGIN
    apex_instance_admin.restrict_schema(p_schema => 'HR');
    COMMIT;
END;
```

See Also:

- [CREATE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_SCHEMA_EXCEPTION-Procedure.html#GUID-35D91F30-6D42-4E0F-BCA7-9FB1E0BF2B21)
- [UNRESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/UNRESTRICT_SCHEMA-Procedure.html#GUID-2DD387A4-E20B-4A9C-8750-31D050F12908)
- [REMOVE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTION-Procedure.html#GUID-F866ACE1-45F2-482E-AA42-F6B62C68F803)
- [REMOVE_SCHEMA_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html#GUID-5DA71997-98DC-4D07-ACDB-B342AF6EEE69)
- [REMOVE_WORKSPACE_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WORKSPACE_EXCEPTIONS-Procedure.html#GUID-A16B1798-C959-4900-B946-43842D4D6510)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.30 REVOKE_EXTENSION_WORKSPACE Procedure

This procedure revokes an existing grant from an extension workspace.

Syntax

```
APEX_INSTANCE_ADMIN.REVOKE_EXTENSION_WORKSPACE (
    p_from_workspace      IN VARCHAR2,
    p_to_workspace        IN VARCHAR2 )
```

Parameters

| Parameter          | Description                        |
|:-------------------|:-----------------------------------|
| `p_from_workspace` | Name of workspace granting access. |
| `p_to_workspace`   | Name of extension workspace.       |

Example

The following example revokes grant from extension workspace `EXTENSIONS` to workspace `MY_WORKSPACE`.

```
BEGIN
    apex_instance_admin.revoke_extension_workspace(
        p_from_workspace      => 'MY_WORKSPACE',
        p_to_workspace        => 'EXTENSIONS' );
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.31 SET_LOG_SWITCH_INTERVAL Procedure

Set the log switch interval for each of the logs maintained by Oracle APEX.

Syntax

```
APEX_INSTANCE_ADMIN.SET_LOG_SWITCH_INTERVAL(
    p_log_name              IN VARCHAR2,
    p_log_switch_after_days IN NUMBER );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_log_name` | Specifies the name of the log. Valid values include `ACCESS`, `ACTIVITY`, `AUTOMATION`, `CLICKTHRU`, `DEBUG`, `WEBSERVICE`, and `WEBSOURCESYNC`. |
| `p_log_switch_after_days` | This interval must be a positive integer between 1 and 180. |

Example

This example sets the log switch interval for the ACTIVITY log to 30 days.

```
BEGIN
    apex_instance_admin.set_log_switch_interval( p_log_name => 'ACTIVITY', p_log_switch_after_days => 30 );
    COMMIT;
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.32 SET_PARAMETER Procedure

This procedure sets a parameter used in administering a runtime environment. You must issue a commit for the parameter change to take affect.

Syntax

```
APEX_INSTANCE_ADMIN.SET_PARAMETER (
    p_parameter     IN VARCHAR2,
    p_value         IN VARCHAR2 DEFAULT 'N',
    p_force         IN BOOLEAN  DEFAULT FALSE );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d154552e74" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d154552e76" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d154552e80" style="text-align: left;" data-valign="top" width="31%" headers="d154552e74 "><code class="codeph">p_parameter</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d154552e80 d154552e76 ">The instance parameter to be set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d154552e86" style="text-align: left;" data-valign="top" width="31%" headers="d154552e74 "><code class="codeph">p_value</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d154552e86 d154552e76 "><p>The value of the parameter.</p>
<p>See <a href="APEX_INSTANCE_ADMIN.Available-Parameter-Values.html#GUID-75DCF658-5A76-4E81-B12D-04E254A3D80A">Available Parameter Values</a>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d154552e98" style="text-align: left;" data-valign="top" width="31%" headers="d154552e74 "><code class="codeph">p_force</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d154552e98 d154552e76 "><p>Default <code class="codeph">FALSE</code>.</p>
<p>If <code class="codeph">TRUE</code>, accepts the value even if it is missing some quality criteria. Basic data type validation occurs (such as numeric, Y/N) , but Oracle APEX accepts more values. For example, credentials can be <code class="codeph">SHA-1</code> and shorter than 2048 bit. <code class="codeph">ALLOW_HASH_FUNCTIONS</code> parameter must also support <code class="codeph">SHA-1</code>.</p>
<p>The parameter only applies for the parameters:</p>
<ul>
<li><code class="codeph">SAML_APEX_CERTIFICATE</code></li>
<li><code class="codeph">SAML_APEX_CERTIFICATE2</code></li>
<li><code class="codeph">SAML_IP_SIGNING_CERTIFICATE</code></li>
<li><code class="codeph">SAML_IP_SIGNING_CERTIFICATE2</code></li>
</ul>
<p>The parameter forces the storage of the certificate in case the quality check of the certificate raises an error.</p></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `SET_PARAMETER` procedure to set the `SMTP_HOST_ADDRESS` parameter for an Oracle APEX instance.

```
BEGIN
    APEX_INSTANCE_ADMIN.SET_PARAMETER('SMTP_HOST_ADDRESS', 'mail.example.com');
    COMMIT;
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.33 SET_WORKSPACE_CONSUMER_GROUP Procedure

Sets a Resource Manager Consumer Group to a workspace.

Syntax

```
SET_WORKSPACE_CONSUMER_GROUP (
    p_workspace IN VARCHAR2,
    p_rm_consumer_group IN VARCHAR2 )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d154839e74" style="text-align: left;" data-valign="bottom" width="31%">Parameters</th>
<th id="d154839e76" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d154839e80" style="text-align: left;" data-valign="top" width="31%" headers="d154839e74 "><code class="codeph">p_workspace</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d154839e80 d154839e76 ">This is the name of the workspace for which the resource consumer group is to be set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d154839e86" style="text-align: left;" data-valign="top" width="31%" headers="d154839e74 "><code class="codeph">p_rm_consumer_group</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d154839e86 d154839e76 "><p>The parameter <code class="codeph">P_RM_CONSUMER_GROUP</code> is the Oracle Database Resource Manager Consumer Group name. The consumer group does not have to exist at the time this procedure is invoked. But if the Resource Manager Consumer Group is set for a workspace and the consumer group does not exist, then an error will be raised when anyone attempts to login to this workspace or execute any application in the workspace.</p>
<p>If the value of <code class="codeph">P_RM_CONSUMER_GROUP</code> is null, then the Resource Manager consumer group associated with the specified workspace is cleared.</p></td>
</tr>
</tbody>
</table>

Example

The following example sets the workspace to the Resource Manager consumer group "CUSTOM_GROUP1":

```
BEGIN
        apex_instance_admin.set_workspace_consumer_group(
        p_workspace => 'MY_WORKSPACE',
        p_rm_consumer_group => 'CUSTOM_GROUP1' );
    COMMIT;
END;
/
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.34 SET_WORKSPACE_PARAMETER Procedure

This procedure sets the designated workspace parameter.

Syntax

```
APEX_INSTANCE_ADMIN.SET_WORKSPACE_PARAMETER (
    p_workspace     IN VARCHAR2,
    p_parameter     IN VARCHAR2,
    p_value         IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_workspace` | The name of the workspace to which you are setting the workspace parameter. |
| `p_parameter` | The parameter name which overrides the instance parameter value of the same name for this workspace. See "Instance and Workspace Parameters" and "Workspace Parameters" in [Available Parameter Values](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.Available-Parameter-Values.html#GUID-75DCF658-5A76-4E81-B12D-04E254A3D80A). |
| `p_value` | The parameter value. |

Example

The following example demonstrates how to use the `set_workspace_parameter` procedure to restrict URLs for accessing applications in the HR workspace that have hr.example.com in the hostname or domain name.

```
BEGIN
  apex_instance_admin.set_workspace_parameter (
    p_workspace => 'HR',
    p_parameter => 'ALLOW_HOSTNAMES',
    p_value     => 'hr.example.com' );
  COMMIT;
END;
```

See Also:

- [Available Parameter Values](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.Available-Parameter-Values.html#GUID-75DCF658-5A76-4E81-B12D-04E254A3D80A)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.35 TRUNCATE_LOG Procedure

Truncates the log entries specified by the input parameter.

Syntax

```
APEX_INSTANCE_ADMIN.TRUNCATE_LOG (
    p_log     IN VARCHAR2 )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d155273e74" style="text-align: left;" data-valign="bottom" width="23%">Parameter</th>
<th id="d155273e76" style="text-align: left;" data-valign="bottom" width="77%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d155273e80" style="text-align: left;" data-valign="top" width="23%" headers="d155273e74 "><code class="codeph">p_log</code></td>
<td style="text-align: left;" data-valign="top" width="77%" headers="d155273e80 d155273e76 "><p>This parameter can have one of the following values:</p>
<ul>
<li><code class="codeph">ACTIVITY</code> - removes all entries that record page access.</li>
<li><code class="codeph">AUTOMATION</code> - removes all entries from the automation logs.</li>
<li><code class="codeph">CLICKS</code> - removes all entries that record clicks tracked to external sites.</li>
<li><code class="codeph">DEBUG</code> - removes all entries captured during debug sessions.</li>
<li><code class="codeph">FILE</code> - removes all entries that record automatic file purge activity.</li>
<li><code class="codeph">LOCK_INSTALL_SCRIPT</code> - removes all entries that record developer locking of supporting objects script.</li>
<li><code class="codeph">LOCK_PAGE</code> - removes all entries that record developer locking of pages.</li>
<li><code class="codeph">MAIL</code> - removes all entries that record mail sent.</li>
<li><code class="codeph">PURGE</code> - removes all entries that record automatic workspace purge activity.</li>
<li><code class="codeph">REST_SYNCHRONIZATION</code> - removes all entries to record REST Source Synchronizations.</li>
<li><code class="codeph">SCRIPT</code> - removes all entries that record results of SQL scripts executed in SQL Workshop.</li>
<li><code class="codeph">SQL</code> - removes all entries that record the history of commands executed in SQL Workshop SQL Commands</li>
<li><code class="codeph">USER_ACCESS</code> - removes all entries that record user login.</li>
<li><code class="codeph">WEB_SERVICES</code> - removes all entries that record web service calls initiated from this APEX instance.</li>
<li><code class="codeph">WORKSPACE_HIST</code> - removes all entries that record daily workspace summary.</li>
</ul></td>
</tr>
</tbody>
</table>

Example

The following example demonstrates how to use the `TRUNCATE_LOG` procedure to remove all log entries that record access to APEX application pages.

```
BEGIN
  APEX_INSTANCE_ADMIN.TRUNCATE_LOG('ACTIVITY');
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.36 UNLOCK_USER Procedure

This procedure unlocks an Oracle APEX workspace user account and optionally also changes the user's password.

Syntax

```
APEX_INSTANCE_ADMIN.UNLOCK_USER (
    p_workspace    IN  VARCHAR2,
    p_username     IN  VARCHAR2,
    p_password     IN  VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter     | Description                                         |
|:--------------|:----------------------------------------------------|
| `p_workspace` | Workspace of the user.                              |
| `p_username`  | Name of the user.                                   |
| `p_password`  | New password. If not set, only unlocks the account. |

Example 1

The following example unlocks the user `ADMIN` in the instance administration workspace and changes the password.

```
BEGIN
    apex_instance_admin.unlock_user (
        p_workspace => 'INTERNAL',
        p_username  => 'ADMIN',
        p_password  => 'example password' );
    COMMIT;
END;
```

Example 2

The following example unlocks the user `EXAMPLE_USER` in `SOME_WORKSPACE` without updating the password.

```
BEGIN
    apex_instance_admin.unlock_user (
        p_workspace => 'SOME_WORKSPACE',
        p_username  => 'EXAMPLE_USER' );
    COMMIT;
END;
```

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.37 UNRESTRICT_SCHEMA Procedure

This procedure re-grants the privilege to assign a schema to workspaces, if it has been revoked before.

Syntax

```
APEX_INSTANCE_ADMIN.UNRESTRICT_SCHEMA (
    p_schema IN VARCHAR2 )
```

Parameter

| Parameter  | Description |
|:-----------|:------------|
| `p_schema` | The schema. |

Example

This example re-grants the privilege to assign schema HR to workspaces.

```
BEGIN
    apex_instance_admin.unrestrict_schema(p_schema => 'HR');
    COMMIT;
END;
```

See Also:

- [CREATE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/CREATE_SCHEMA_EXCEPTION-Procedure.html#GUID-35D91F30-6D42-4E0F-BCA7-9FB1E0BF2B21)
- [RESTRICT_SCHEMA Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/RESTRICT_SCHEMA-Procedure.html#GUID-97A8DD03-5B6B-4C12-91E8-842CB156B6C6)
- [REMOVE_SCHEMA_EXCEPTION Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTION-Procedure.html#GUID-F866ACE1-45F2-482E-AA42-F6B62C68F803)
- [REMOVE_SCHEMA_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_SCHEMA_EXCEPTIONS-Procedure.html#GUID-5DA71997-98DC-4D07-ACDB-B342AF6EEE69),
- [REMOVE_WORKSPACE_EXCEPTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/REMOVE_WORKSPACE_EXCEPTIONS-Procedure.html#GUID-A16B1798-C959-4900-B946-43842D4D6510)

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)

------------------------------------------------------------------------

## 32.38 VALIDATE_EMAIL_CONFIG Procedure

This procedure attempts to establish a connection with the email server configured in an Oracle APEX instance. An error is raised if the connection is unsuccessful. This can indicate incorrect SMTP instance parameters, missing Network ACL, missing SSL certificate in Oracle Wallet, or a problem on the email server side. Correct the instance configuration and re-execute this procedure to confirm.

This procedure exits if the connection successfully establishes.

Syntax

```
APEX_INSTANCE_ADMIN.VALIDATE_EMAIL_CONFIG
```

Parameters

None.

Example

```
BEGIN
    APEX_INSTANCE_ADMIN.VALIDATE_EMAIL_CONFIG;
END;
```

See Also:

- [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEADM-GUID-FEC98D5E-3C89-423E-9603-4CD2E553BA34" target="_blank">Configuring Email</a> in Oracle APEX Administration Guide

**Parent topic:** [APEX_INSTANCE_ADMIN](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_INSTANCE_ADMIN.html#GUID-1A894D25-A884-466B-9B88-B10888B2FFEA)
