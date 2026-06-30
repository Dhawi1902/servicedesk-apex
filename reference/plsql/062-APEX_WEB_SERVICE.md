<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 62  APEX_WEB_SERVICE

The APEX_WEB_SERVICE API enables you to integrate other systems with APEX by enabling you to interact with Web Services anywhere you can use PL/SQL in your application.

The API contains procedures and functions to call both SOAP and RESTful style Web Services. Functions parse the responses from Web Services and encode/decode into SOAP-friendly base64 encoding.

This API also contains package globals for managing cookies and HTTP headers when calling Web Services whether from the API or by using standard processes of type Web Service. Cookies and HTTP headers can be set before invoking a call to a Web Service by populating the globals and the cookies and HTTP headers returned from the Web Service response can be read from other globals.

- [About the APEX_WEB_SERVICE API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_WEB_SERVICE-API.html#GUID-ECC9CC44-D10B-4502-B832-A171B370F3B4)
- [About Web Credentials and APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/about-web-credentials-APEX_WEB_SERVICE.html#GUID-4146FDBA-7256-4CA4-9316-2ED536BC1267)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Data-Types.html#GUID-A9857D6B-4C82-4BE6-89C6-0495BDD196E4)
- [Global Variables](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Global-Variables.html#GUID-3A4D9CE9-0418-4EB5-AA2B-5EC5B9AF0617)
- [APPEND_TO_MULTIPART Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.APPEND_TO_MULTIPART-Procedure-1.html#GUID-85A07746-3C39-4918-99D3-8CCB7FF68B4C)
- [APPEND_TO_MULTIPART Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.APPEND_TO_MULTIPART-Procedure-2.html#GUID-06AB95BE-E63A-426B-B85B-3EAAF7AA1D22)
- [BLOB2CLOBBASE64 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/BLOB2CLOBBASE64-Function.html#GUID-A572E80C-02CC-467B-8A3D-DEE8A8FD0452)
- [CLEAR_REQUEST_COOKIES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REQUEST_COOKIES-Procedure.html#GUID-81763977-7873-4584-9F8F-1510EC11C056)
- [CLEAR_REQUEST_HEADERS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLEAR_REQUEST_HEADERS-Procedure.html#GUID-521DB393-685F-4254-B625-A581EF0006ED)
- [CLOBBASE642BLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLOBBASE642BLOB-Function.html#GUID-14B11175-7D0A-4FB2-904D-84B176593161)
- [GENERATE_REQUEST_BODY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GENERATE_REQUEST_BODY-Function.html#GUID-8AF5EB88-07BA-4723-ADBD-0EDB49B108CB)
- [GET_REQUEST_HEADER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_REQUEST_HEADER-Function.html#GUID-44E0A105-078A-4C73-BA18-1A67E3EB35A2)
- [MAKE_REQUEST Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Function.html#GUID-2973A635-6A7D-426B-8ED0-F458D96FD520)
- [MAKE_REQUEST Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Function-Signature-2.html#GUID-7B2C84A3-900B-4CC0-90BA-CC7D8B4855B0)
- [MAKE_REQUEST Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Procedure.html#GUID-74F2C990-5D85-47BE-BC90-CC3F07D9788B)
- [MAKE_REQUEST Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REQUEST-Procedure-Signature-2.html#GUID-AAD7DC72-911C-4728-B513-6F514DADCF03)
- [MAKE_REST_REQUEST Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST-Function.html#GUID-C77BB45A-8968-470C-8243-BADB63743DE9)
- [MAKE_REST_REQUEST_B Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MAKE_REST_REQUEST_B-Function.html#GUID-1FCD717A-A515-4394-832C-980D2990564F)
- [OAUTH_AUTHENTICATE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_AUTHENTICATE-Procedure-Signature-1.html#GUID-F6BADD65-416C-4B2F-8B19-BE98C64D5D83)
- [OAUTH_AUTHENTICATE Procedure Signature 2 (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_AUTHENTICATE-Procedure-Signature-2.html#GUID-E9E81AE6-15F3-451D-9B3D-6B34000AA087)
- [OAUTH_AUTHENTICATE_CREDENTIAL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_AUTHENTICATE_CREDENTIAL.html#GUID-267B5978-4154-425B-81FB-87427BC7BAA8)
- [OAUTH_GET_LAST_TOKEN Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_GET_LAST_TOKEN-Function.html#GUID-114DBB66-F36D-4897-92D2-6A54873CD714)
- [OAUTH_SET_TOKEN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/OAUTH_SET_TOKEN-Procedure.html#GUID-C6CB535D-F3D3-4333-A097-F07B8EBC366E)
- [PARSE_RESPONSE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_RESPONSE-Function.html#GUID-1D07AFB6-3D34-448B-AB28-7127273BD11B)
- [PARSE_RESPONSE_CLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_RESPONSE_CLOB-Function.html#GUID-2901DFC9-509E-4180-94C6-81AF28CD6093)
- [PARSE_XML Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_XML-Function.html#GUID-BDE092C8-77BD-425A-B522-0FE3656628B4)
- [PARSE_XML_CLOB Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PARSE_XML_CLOB-Function.html#GUID-4CE9C1AE-8404-46B5-80B0-1A5C99F6D9DC)
- [REMOVE_REQUEST_HEADER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_REQUEST_HEADER-Procedure.html#GUID-F7BB37FE-A739-4609-98A9-61421F09B94E)
- [SET_REQUEST_ECID_CONTEXT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REQUEST_ECID_CONTEXT-Procedure.html#GUID-6C58EA0D-CA44-4671-AD50-618C67269F56)
- [SET_REQUEST_HEADERS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_REQUEST_HEADERS-Procedure.html#GUID-506EE2D1-B1EF-490F-ABA4-B40832EACC35)

------------------------------------------------------------------------

## 62.1 About the APEX_WEB_SERVICE API

Use the `APEX_WEB_SERVICE API` to invoke a Web service and examine the response anywhere you can use PL/SQL in Oracle APEX.

The following are examples of when you might use the `APEX_WEB_SERVICE API`:

- When you want to invoke a Web service by using an On Demand Process using Ajax.
- When you want to invoke a Web service as part of an Authentication Scheme.
- When you want to invoke a Web service as part of a validation.
- When you need to pass a large binary parameter to a Web service that is base64 encoded.

Enable network services that are disabled by default in Oracle Database 11g release 2 (11.2) and newer. See <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMIG-GUID-8D125731-989A-4A51-AFFE-00181729F87F" target="_blank">Enabling Network Services in Oracle Database</a> in Oracle APEX Installation Guide.

- [Invoking a SOAP-style Web Service](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Invoking-a-SOAP-Style-Web-Service.html#GUID-172535D9-552E-4403-BE79-2EE92DB4AFCE)
- [Invoking a RESTful-style Web Service](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Invoking-a-RESTful-Style-Web-Service.html#GUID-E1CF6424-53BF-411A-8C54-67DCF754C737)
- [Setting Cookies and HTTP Headers](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Setting-Cookies-and-HTTP-Headers.html#GUID-7F49060A-3359-47ED-B18B-AD34A1885E92)
- [Retrieving Cookies and HTTP Headers](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Retrieving-Cookies-and-HTTP-Headers.html#GUID-39ADA850-DDD1-4A71-834A-1F7BC4FB2269)

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.1.1 Invoking a SOAP-style Web Service

There is a procedure and a function to invoke a SOAP-style Web service.

The procedure stores the response in the collection specified by the parameter `p_collection_name`.

The function returns the results as an `XMLTYPE`.

To retrieve a specific value from the response, you use either the `PARSE_RESPONSE` function if the result is stored in a collection or the `PARSE_XML` function if the response is returned as an `XMLTYPE`.

To pass a binary parameter to the Web service as `base64` encoded character data, use the function `BLOB2CLOBBASE64`. Conversely, to transform a response that contains a binary parameter that is `base64` encoded use the function `CLOBBASE642BLOB`.

Example

The following is an example of using the `BLOB2CLOBBASE64` function to encode a parameter, the `MAKE_REQUEST` procedure to call a Web service, and the `PARSE_RESPONSE` function to extract a specific value from the response.

```
DECLARE
 l_filename varchar2(255);
 l_BLOB BLOB;
 l_CLOB CLOB;
 l_envelope CLOB;
 l_response_msg varchar2(32767);
BEGIN
  IF :P1_FILE IS NOT NULL THEN
     SELECT filename, BLOB_CONTENT
       INTO l_filename, l_BLOB
       FROM APEX_APPLICATION_FILES
       WHERE name = :P1_FILE;

    l_CLOB := apex_web_service.blob2clobbase64(l_BLOB);

    l_envelope := q'!<?xml version='1.0' encoding='UTF-8'?>!';
    l_envelope := l_envelope|| '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:chec="http://www.stellent.com/CheckIn/">
  <soapenv:Header/>
  <soapenv:Body>
    <chec:CheckInUniversal>
        <chec:dDocName>'||l_filename||'</chec:dDocName>
        <chec:dDocTitle>'||l_filename||'</chec:dDocTitle>
        <chec:dDocType>Document</chec:dDocType>
        <chec:dDocAuthor>GM</chec:dDocAuthor>
        <chec:dSecurityGroup>Public</chec:dSecurityGroup>
        <chec:dDocAccount></chec:dDocAccount>
        <chec:CustomDocMetaData>
            <chec:property>
              <chec:name></chec:name>
              <chec:value></chec:value>
            </chec:property>
        </chec:CustomDocMetaData>
        <chec:primaryFile>
           <chec:fileName>'||l_filename'||</chec:fileName>
           <chec:fileContent>'||l_CLOB||'</chec:fileContent>
        </chec:primaryFile>
        <chec:alternateFile>
           <chec:fileName></chec:fileName>
           <chec:fileContent></chec:fileContent>
        </chec:alternateFile>
        <chec:extraProps>
           <chec:property>
              <chec:name></chec:name>
              <chec:value></chec:value>
           </chec:property>
        </chec:extraProps>
     </chec:CheckInUniversal>
  </soapenv:Body>
</soapenv:Envelope>';

apex_web_service.make_request(
   p_url               => 'http://192.0.2.1/idc/idcplg',
   p_action            => 'http://192.0.2.1/CheckIn/',
   p_collection_name   => 'STELLENT_CHECKIN',
   p_envelope          => l_envelope,
   p_username          => 'sysadmin',
   p_password          => 'password' );

 l_response_msg := apex_web_service.parse_response(
    p_collection_name=>'STELLENT_CHECKIN',
p_xpath=>'//idc:CheckInUniversalResponse/idc:CheckInUniversalResult/idc:StatusInfo/idc:statusMessage/text()',
    p_ns=>'xmlns:idc="http://www.stellent.com/CheckIn/"');

  :P1_RES_MSG := l_response_msg;

  END IF;
END;
```

**Parent topic:** [About the APEX_WEB_SERVICE API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_WEB_SERVICE-API.html#GUID-ECC9CC44-D10B-4502-B832-A171B370F3B4)

------------------------------------------------------------------------

## 62.1.2 Invoking a RESTful-style Web Service

RESTful-style Web services use a simpler architecture than SOAP. Often the input to a RESTful-style Web service is a collection of name/value pairs. The response can be an XML document or simply text such as a comma-separated response or JSON.

Example

The following is an example of MAKE_REST_REQUEST in an application process that is callable by Ajax.

```
DECLARE
  l_clob clob;
  l_buffer         varchar2(32767);
  l_amount         number;
  l_offset         number;
BEGIN

  l_clob := apex_web_service.make_rest_request(
              p_url => 'http://us.music.yahooapis.com/ video/v1/list/published/popular',
              p_http_method => 'GET',
              p_parm_name => apex_util.string_to_table('appid:format'),
              p_parm_value => apex_util.string_to_table(apex_application.g_x01||':'||apex_application.g_x02));

    l_amount := 32000;
    l_offset := 1;
    BEGIN
        LOOP
            dbms_lob.read( l_clob, l_amount, l_offset, l_buffer );
            htp.p(l_buffer);
            l_offset := l_offset + l_amount;
            l_amount := 32000;
        END LOOP;
    EXCEPTION
        WHEN no_data_found THEN
            NULL;
    END;

END;
```

**Parent topic:** [About the APEX_WEB_SERVICE API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_WEB_SERVICE-API.html#GUID-ECC9CC44-D10B-4502-B832-A171B370F3B4)

------------------------------------------------------------------------

## 62.1.3 Setting Cookies and HTTP Headers

Set cookies and HTTP headers that should be sent along with a Web Service request by populating the globals `g_request_cookies` and `g_request_headers` before the process that invokes the Web Service.

The following example populates the globals to send cookies and HTTP headers with a request.

```
FOR c1 IN (select seq_id, c001, c002, c003, c004, c005, c006, c007
            FROM apex_collections
            WHERE collection_name = 'P31_RESP_COOKIES' ) LOOP
  apex_web_service.g_request_cookies(c1.seq_id).name := c1.c001;
  apex_web_service.g_request_cookies(c1.seq_id).value := c1.c002;
  apex_web_service.g_request_cookies(c1.seq_id).domain := c1.c003;
  apex_web_service.g_request_cookies(c1.seq_id).expire := c1.c004;
  apex_web_service.g_request_cookies(c1.seq_id).path := c1.c005;
  IF c1.c006 = 'Y' THEN
    apex_web_service.g_request_cookies(c1.seq_id).secure := TRUE;
  ELSE
    apex_web_service.g_request_cookies(c1.seq_id).secure := FALSE;
  END IF;
  apex_web_service.g_request_cookies(c1.seq_id).version := c1.c007;
END LOOP;

FOR c1 IN (select seq_id, c001, c002
            FROM apex_collections
            WHERE collection_name = 'P31_RESP_HEADERS' ) LOOP
  apex_web_service.g_request_headers(c1.seq_id).name := c1.c001;
  apex_web_service.g_request_headers(c1.seq_id).value := c1.c002;
END LOOP;
```

See Also:

- [Global Variables](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Global-Variables.html#GUID-3A4D9CE9-0418-4EB5-AA2B-5EC5B9AF0617)
- [Retrieving Cookies and HTTP Headers](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Retrieving-Cookies-and-HTTP-Headers.html#GUID-39ADA850-DDD1-4A71-834A-1F7BC4FB2269)

**Parent topic:** [About the APEX_WEB_SERVICE API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_WEB_SERVICE-API.html#GUID-ECC9CC44-D10B-4502-B832-A171B370F3B4)

------------------------------------------------------------------------

## 62.1.4 Retrieving Cookies and HTTP Headers

When you invoke a Web service using any of the supported methods in Oracle APEX, the `g_response_cookies` and `g_headers` globals are populated if the Web service response included any cookies or HTTP headers. You can interrogate these globals and store the information in collections.

When you invoke a Web service using any of the supported methods in APEX, the `g_status_code` global is populated with the numeric HTTP status code of the response (for example, 200 or 404). The `g_response_cookies` and `g_headers` globals are populated if the Web service response included any cookies or HTTP headers.

The following are examples of interrogating the `APEX_WEB_SERVICE` globals to store cookie and HTTP header responses in collections.

```
DECLARE
  i number;
  secure varchar2(1);
BEGIN
  apex_collection.create_or_truncate_collection('P31_RESP_COOKIES');
  FOR i in 1.. apex_web_service.g_response_cookies.count LOOP
    IF (apex_web_service.g_response_cookies(i).secure) THEN
      secure := 'Y';
    ELSE
      secure := 'N';
    END IF;
    apex_collection.add_member(p_collection_name => 'P31_RESP_COOKIES',
      p_c001 => apex_web_service.g_response_cookies(i).name,
      p_c002 => apex_web_service.g_response_cookies(i).value,
      p_c003 => apex_web_service.g_response_cookies(i).domain,
      p_c004 => apex_web_service.g_response_cookies(i).expire,
      p_c005 => apex_web_service.g_response_cookies(i).path,
      p_c006 => secure,
      p_c007 => apex_web_service.g_response_cookies(i).version );
  END LOOP;
END;

DECLARE
  i number;
BEGIN
apex_collection.create_or_truncate_collection('P31_RESP_HEADERS');

FOR i in 1.. apex_web_service.g_headers.count LOOP
  apex_collection.add_member(p_collection_name => 'P31_RESP_HEADERS',
    p_c001 => apex_web_service.g_headers(i).name,
    p_c002 => apex_web_service.g_headers(i).value,
    p_c003 => apex_web_service.g_status_code);
END LOOP;
END;
```

See Also:

- [Global Variables](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.Global-Variables.html#GUID-3A4D9CE9-0418-4EB5-AA2B-5EC5B9AF0617)
- [Setting Cookies and HTTP Headers](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Setting-Cookies-and-HTTP-Headers.html#GUID-7F49060A-3359-47ED-B18B-AD34A1885E92)

**Parent topic:** [About the APEX_WEB_SERVICE API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_WEB_SERVICE-API.html#GUID-ECC9CC44-D10B-4502-B832-A171B370F3B4)

------------------------------------------------------------------------

## 62.2 About Web Credentials and APEX_WEB_SERVICE

You can use the `MAKE_REQUEST` and `MAKE_REST_REQUEST` procedures to enable Web Credentials in order to authenticate against the remote Web Service.

Web Credentials can be used with the `APEX_WEB_SERVICE` package from outside the context of an Oracle APEX application (such as from SQLcl or from a Database Scheduler job) as long as the database user making the call is mapped to an APEX workspace.

If the database user is mapped to multiple workspaces, you must first call `APEX_UTIL.SET_WORKSPACE` or `APEX_UTIL.SET_SECURITY_GROUP_ID` as in the following examples.

If the database user is mapped to multiple workspaces, you must first call `APEX_UTIL.SET_WORKSPACE` or `APEX_UTIL.SET_SECURITY_GROUP_ID` as in the following examples. The `APEX_WEB_SERVICE` package cannot be used by database users that are not mapped to any workspace unless they have been granted the role `APEX_ADMINISTRATOR_ROLE`.

Examples

Example 1

```
apex_util.set_workspace(p_workspace => 'MY_WORKSPACE');
```

Example 2

```
FOR c1 in (
   select workspace_id
     from apex_applications
    where application_id = 100 )
LOOP
   apex_util.set_security_group_id(p_security_group_id => c1.workspace_id);
END LOOP;
```

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-5409A100-3FEE-424A-AF45-07211F69A0BA" target="_blank">Managing Web Credentials</a> in Oracle APEX App Builder User’s Guide.

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.3 Data Types

The APEX_WEB_SERVICE package uses the following data types.

```
type header is record (
    name varchar2(256),
    value varchar2(32767) );

type header_table is table of header index by binary_integer;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.4 Global Variables

| Global Variable | Data Type | Description |
|:---|:---|:---|
| `g_headers` | `header_table` | Global holding HTTP headers to send with a HTTP request. |
| `g_reason_phrase` | `varchar2(32767)` | Reason phrase corresponding with the status code received with the HTTP response. |
| `g_request_cookies` | `sys.utl_http.cookie_table` | Global holding cookies to send with a HTTP request. |
| `g_request_headers` | `header_table` | Global holding HTTP headers received with the HTTP response. |
| `g_response_cookies` | `sys.utl_http.cookie_table` | Global holding cookies received with the HTTP response. |
| `g_status_code` | `pls_integer` | Status code received from the HTTP request. |

The `g_status_code` and `g_reason_phrase` globals are set after each HTTP request so that you can get its outcome (for example, 200=OK. 400=Bad Request).

See Also:

- [Setting Cookies and HTTP Headers](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Setting-Cookies-and-HTTP-Headers.html#GUID-7F49060A-3359-47ED-B18B-AD34A1885E92)
- [Retrieving Cookies and HTTP Headers](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Retrieving-Cookies-and-HTTP-Headers.html#GUID-39ADA850-DDD1-4A71-834A-1F7BC4FB2269)

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.5 APPEND_TO_MULTIPART Procedure Signature 1

This procedure adds a BLOB to a multipart/form request body.

Syntax

```
APEX_WEB_SERVICE.APPEND_TO_MULTIPART (
    p_multipart     IN OUT NOCOPY t_multipart_parts,
    p_name          IN            VARCHAR2,
    p_filename      IN            VARCHAR2 DEFAULT NULL,
    p_content_type  IN            VARCHAR2 DEFAULT 'application/octet-stream',
    p_body_blob     IN            BLOB );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_multipart` | The table type for the multipart/request body, t_multipart_parts. |
| `p_name` | The name of the multipart data. |
| `p_filename` | The filename of the multipart data if it exists. |
| `p_content_type` | The content type of the multipart data. |
| `p_body_blob` | The content to add in BLOB. |

Example

```
DECLARE
    l_multipart    apex_web_service.t_multipart_parts;
BEGIN
    apex_web_service.append_to_multipart (
        p_multipart    => l_multipart,
        p_name         => 'param1',
        p_content_type => 'application/octet-stream',
        p_body_blob    => (select blob from table where id = 1) );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.6 APPEND_TO_MULTIPART Procedure Signature 2

This procedure adds a CLOB to a multipart/form request body.

Syntax

```
APEX_WEB_SERVICE.APPEND_TO_MULTIPART (
    p_multipart     IN OUT NOCOPY t_multipart_parts,
    p_name          IN            VARCHAR2,
    p_filename      IN            VARCHAR2 DEFAULT NULL,
    p_content_type  IN            VARCHAR2 DEFAULT 'application/octet-stream',
    p_body          IN            CLOB );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_multipart` | The table type for the multipart/request body, t_multipart_parts. |
| `p_name` | The name of the multipart data. |
| `p_filename` | The filename of the multipart data if it exists. |
| `p_content_type` | The content type of the multipart data. |
| `p_body` | The content to add in CLOB. |

Example

```
DECLARE
    l_multipart apex_web_service.t_multipart_parts;
BEGIN
    apex_web_service.append_to_multipart (
        p_multipart    => l_multipart,
        p_name         => 'param1',
        p_content_type => 'application/json',
        p_body         => to_clob( '{"hello":"world"}' ) );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.7 BLOB2CLOBBASE64 Function

This function converts a `BLOB` data type into a `CLOB` that is `base64`-encoded. This is often used when sending a binary as an input to a web service.

Syntax

```
APEX_WEB_SERVICE.BLOB2CLOBBASE64 (
    p_blob      IN BLOB,
    p_newlines  IN VARCHAR2 DEFAULT 'Y',
    p_padding   IN VARCHAR2 DEFAULT 'N' )
RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_blob` | The BLOB to convert into base64-encoded CLOB. |
| `p_newlines` | Whether the generated base64 content contains line breaks. |
| `p_padding` | Whether to pad the generated base64 content with "=" so that the length becomes a multiple of 4. |

Example

The following example gets a file that was uploaded from the `apex_application_files` view and converts the `BLOB` into a `CLOB` that is `base64`-encoded.

```
DECLARE
    l_clob    CLOB;
    l_blob    BLOB;
BEGIN
    SELECT BLOB_CONTENT
      INTO l_BLOB
      FROM APEX_APPLICATION_FILES
      WHERE name = :P1_FILE;

    l_CLOB := apex_web_service.blob2clobbase64(l_BLOB);
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.8 CLEAR_REQUEST_COOKIES Procedure

This procedure clears all cookies, so that the next MAKE_REST_REQUEST call executes without sending any cookies. This procedure clears the cookie globals in APEX_WEB_SERVICE and in UTL_HTTP.

Syntax

```
APEX_WEB_SERVICE.CLEAR_REQUEST_COOKIES;
```

Parameters

None.

Example

```
begin
  apex_web_service.clear_request_cookies;
end;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.9 CLEAR_REQUEST_HEADERS Procedure

This procedure clears the current request headers.

Syntax

```
APEX_WEB_SERVICE.CLEAR_REQUEST_HEADERS;
```

Parameters

None.

Example

```
begin
  apex_web_service.clear_request_headers;
end;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.10 CLOBBASE642BLOB Function

This function converts a `CLOB` datatype that is `base64`-encoded into a `BLOB`. This is often used when receiving output from a Web service that contains a binary parameter.

Syntax

```
APEX_WEB_SERVICE.CLOBBASE642BLOB (
    p_clob IN CLOB)
RETURN BLOB;
```

Parameters

| Parameter | Description                                           |
|:----------|:------------------------------------------------------|
| `p_clob`  | The `base64`-encoded `CLOB` to convert into a `BLOB`. |

Example

The following example retrieves a `base64`-encoded node from an XML document as a `CLOB` and converts it into a `BLOB`.

```
DECLARE
    l_base64 CLOB;
    l_blob   BLOB;
    l_xml    XMLTYPE;
BEGIN
    l_base64 := apex_web_service.parse_xml_clob(l_xml, ' //runReportReturn/reportBytes/text()');
        l_blob := apex_web_service.clobbase642blob(l_base64);
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.11 GENERATE_REQUEST_BODY Function

This function generates the multipart/form-data request body from the data in the `t_multiparts` array.

Syntax

```
APEX_WEB_SERVICE.GENERATE_REQUEST_BODY(
    p_multipart      IN t_multipart_parts,
    p_to_charset     IN VARCHAR2 DEFAULT wwv_flow_lang.get_db_charset )
    RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_multipart` | The table type for the multipart/request body, t_multipart_parts. |
| `p_to_charset` | The target character set for the parts that are CLOBs. This parameter defaults to the current character set of the database. |

Examples

This example stores the multipart/form request in a local BLOB variable.

```
DECLARE
    l_multipart    apex_web_service.t_multipart_parts;
    l_request_blob blob;
BEGIN
     l_request_blob := apex_web_service.generate_request_body (
                           p_multipart    => l_multipart );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.12 GET_REQUEST_HEADER Function

This function gets a specific request header value out of the request headers array.

Syntax

```
APEX_WEB_SERVICE.GET_REQUEST_HEADER (
    p_header_name   VARCHAR2 )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_header_name` | The parameter name (case is normalized for the search in the header array). |

Example

```
select apex_web_service.get_request_header('ECID-Context') from dual;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.13 MAKE_REQUEST Function Signature 1

This function invokes a SOAP-style web service with the supplied SOAP envelope returning the results in an `XMLTYPE`.

Syntax

```
APEX_WEB_SERVICE.MAKE_REQUEST (
    p_url                  IN VARCHAR2,
    p_action               IN VARCHAR2 DEFAULT NULL,
    p_version              IN VARCHAR2 DEFAULT '1.1',
    p_envelope             IN CLOB,
    p_username             IN VARCHAR2 DEFAULT NULL,
    p_password             IN VARCHAR2 DEFAULT NULL,
    p_scheme               IN VARCHAR2 DEFAULT 'Basic',
    p_proxy_override       IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout     IN NUMBER   DEFAULT 180,
    p_wallet_path          IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd           IN VARCHAR2 DEFAULT NULL,
    p_https_host           IN VARCHAR2 DEFAULT NULL )
RETURN sys.xmltype;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d318107e80" style="text-align: left;" data-valign="bottom" width="30%">Parameter</th>
<th id="d318107e82" style="text-align: left;" data-valign="bottom" width="70%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d318107e86" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_url</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e86 d318107e82 ">The URL endpoint of the Web service.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e92" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_action</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e92 d318107e82 ">The SOAP Action corresponding to the operation to be invoked.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e98" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_version</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e98 d318107e82 ">The SOAP version (1.1 or 1.2). The default is 1.1.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e104" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_envelope</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e104 d318107e82 ">The SOAP envelope to post to the service.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e110" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e110 d318107e82 ">The username if basic authentication is required for this service.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e116" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_password</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e116 d318107e82 ">The password if basic authentication is required for this service.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e122" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_scheme</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e122 d318107e82 ">The authentication scheme. Basic (default), AWS, Digest, or <code class="codeph">OAUTH_CLIENT_CRED</code> if supported by your database release.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e131" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_proxy_override</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e131 d318107e82 ">The proxy to use for the request. The proxy supplied overrides the proxy defined in the application attributes.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e137" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_transfer_timeout</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e137 d318107e82 ">The amount of time in seconds to wait for a response.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e143" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_wallet_path</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e143 d318107e82 "><p>The file system path to a wallet if the URL endpoint is HTTPS. For example, <code class="codeph">file:/usr/home/oracle/WALLETS</code></p>
<p>The wallet path provided overrides the wallet defined in the instance settings.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e154" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_wallet_pwd</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e154 d318107e82 ">The password to access the wallet.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d318107e161" style="text-align: left;" data-valign="top" width="30%" headers="d318107e80 "><code class="codeph">p_https_host</code></td>
<td style="text-align: left;" data-valign="top" width="70%" headers="d318107e161 d318107e82 ">The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request.</td>
</tr>
</tbody>
</table>

Returns

The SOAP service response in an `XMLTYPE`.

Example 1

The following example invokes a SOAP-style Web service that returns movie listings. The result is stored in an `XMLTYPE`.

```
DECLARE
    l_envelope  CLOB;
    l_xml       XMLTYPE;
BEGIN
    l_envelope := ' <?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:tns="http://www.ignyte.com/whatsshowing"
xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <tns:GetTheatersAndMovies>
            <tns:zipCode>43221</tns:zipCode>
            <tns:radius>5</tns:radius>
        </tns:GetTheatersAndMovies>
    </soap:Body>
</soap:Envelope>';

l_xml := apex_web_service.make_request(
    p_url => ' http://www.ignyte.com/webservices/ignyte.whatsshowing.webservice/moviefunctions.asmx',
    p_action => ' http://www.ignyte.com/whatsshowing/GetTheatersAndMovies',
    p_envelope => l_envelope
);
END;
```

Example 2

This example invokes a SOAP service returning an `XMLTYPE`.

```
DECLARE
    l_xml sys.xmltype;
BEGIN
    l_xml := apex_web_service.make_request(
        p_url            => 'http://{host}:{port}/path/to/soap/service/',
        p_action         => 'doSoapRequest',
        p_envelope       => '{SOAP envelope in XML format}' );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.14 MAKE_REQUEST Function Signature 2

This function invokes a Web service with the supplied SOAP envelope and returns the response as an XMLTYPE.

Syntax

```
APEX_WEB_SERVICE.MAKE_REQUEST (
    p_url                  IN VARCHAR2,
    p_action               IN VARCHAR2 DEFAULT NULL,
    p_version              IN VARCHAR2 DEFAULT '1.1',
    p_envelope             IN CLOB,
    --
    p_credential_static_id IN VARCHAR2,
    p_token_url            IN VARCHAR2 DEFAULT NULL,
    --
    p_proxy_override       IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout     IN NUMBER   DEFAULT 180,
    p_wallet_path          IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd           IN VARCHAR2 DEFAULT NULL,
    p_https_host           IN VARCHAR2 DEFAULT NULL,
    p_oauth_scope          IN VARCHAR2 DEFAULT NULL )
    RETURN sys.xmltype;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_url` | The URL endpoint of the Web service. |
| `p_action` | The SOAP Action corresponding to the operation invoked. |
| `p_version` | The SOAP version (1.1 or 1.2). The default is 1.1. |
| `p_envelope` | The SOAP envelope to post to the service. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_token_url` | The URL to retrieve the token from for token-based authentication flows (such as OAuth2). |
| `p_proxy_override` | The proxy to use for the request. The proxy supplied overrides the proxy defined in the application attributes. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The filesystem path to a wallet if request is HTTPS. For example, `file:/usr/home/oracle/WALLETS` |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_oath_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

Returns

The SOAP service response as an XMLTYPE.

Example

The following example invokes a SOAP service returning an XMLTYPE.

```
DECLARE
    l_xml sys.xmltype;
BEGIN
    l_xml := apex_web_service.make_request(
        p_url                  => 'http://{host}:{port}/path/to/soap/service/',
        p_action               => 'doSoapRequest',
        p_envelope             => '{SOAP envelope in XML format}',
        p_credential_static_id => 'My_Credentials',
        p_token_url            => 'http://{host}:{port}/ords/scott/oauth/token' );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.15 MAKE_REQUEST Procedure Signature 1

This procedure invokes a SOAP-style Web service with the supplied SOAP envelope and stores the results in a collection.

Syntax

```
APEX_WEB_SERVICE.MAKE_REQUEST (
    p_url               IN VARCHAR2,
    p_action            IN VARCHAR2 DEFAULT NULL,
    p_version           IN VARCHAR2 DEFAULT '1.1',
    p_collection_name   IN VARCHAR2 DEFAULT NULL,
    p_envelope          IN CLOB,
    p_username          IN VARCHAR2 DEFAULT NULL,
    p_password          IN VARCHAR2 DEFAULT NULL,
    p_scheme            IN VARCHAR2 DEFAULT 'Basic',
    p_proxy_override    IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout  IN NUMBER   DEFAULT 180,
    p_wallet_path       IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd        IN VARCHAR2 DEFAULT NULL,
    p_https_host        IN VARCHAR2 DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d319262e77" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d319262e79" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d319262e83" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_url</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e83 d319262e79 ">The URL endpoint of the Web service.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e89" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_action</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e89 d319262e79 ">The SOAP Action corresponding to the operation to be invoked.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e95" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_version</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e95 d319262e79 ">The SOAP version (1.1 or 1.2). The default is 1.1.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e101" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_collection_name</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e101 d319262e79 ">The name of the collection to store the response.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e107" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_envelope</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e107 d319262e79 ">The SOAP envelope to post to the service.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e113" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_username</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e113 d319262e79 ">The username if basic authentication is required for this service.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e119" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_password</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e119 d319262e79 ">The password if basic authentication is required for this service</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e125" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_scheme</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e125 d319262e79 ">The authentication scheme. Basic (default), AWS, or Digest if supported by your database release.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e131" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_proxy_override</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e131 d319262e79 ">The proxy to use for the request. The proxy supplied overrides the proxy defined in the application attributes.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e137" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_transfer_timeout</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e137 d319262e79 ">The amount of time in seconds to wait for a response.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e143" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_wallet_path</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e143 d319262e79 "><p>The file system path to a wallet if the URL endpoint is HTTPS. For example, <code class="codeph">file:/usr/home/oracle/WALLETS</code></p>
<p>The wallet path provided overrides the wallet defined in the instance settings.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e155" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_wallet_pwd</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e155 d319262e79 ">The password to access the wallet.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d319262e161" style="text-align: left;" data-valign="top" width="31%" headers="d319262e77 "><code class="codeph">p_https_host </code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d319262e161 d319262e79 ">The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request.</td>
</tr>
</tbody>
</table>

Example 1

The following example retrieves a list of movies from a SOAP-style Web service. The response is stored in an Oracle APEX collection named `MOVIE_LISTINGS`.

```
DECLARE
        l_envelope CLOB;
BEGIN
     l_envelope := '<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:tns="http://www.ignyte.com/whatsshowing"
xmlns:xs="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <tns:GetTheatersAndMovies>
         <tns:zipCode>43221</tns:zipCode>
         <tns:radius>5</tns:radius>
      </tns:GetTheatersAndMovies>
   </soap:Body>
</soap:Envelope>';

apex_web_service.make_request(
   p_url               => ' http://www.ignyte.com/webservices/ignyte.whatsshowing.webservice/moviefunctions.asmx',
   p_action            => ' http://www.ignyte.com/whatsshowing/GetTheatersAndMovies',
   p_collection_name   => 'MOVIE_LISTINGS',
   p_envelope          => l_envelope
);

END;
```

Example 2

This example invokes a SOAP service and stores the response in a collection.

```
BEGIN
    apex_web_service.make_request(
        p_url             => 'http://{host}:{port}/path/to/soap/service/',
        p_collection_name => 'MY_RESPONSE_COLLECTION',
        p_action          => 'doSoapRequest',
        p_envelope        => '{SOAP envelope in XML format}' );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.16 MAKE_REQUEST Procedure Signature 2

This procedure invokes a Web service with the supplied SOAP envelope and stores the response in a collection.

Syntax

```
APEX_WEB_SERVICE.MAKE_REQUEST (
    p_url                  IN VARCHAR2,
    p_action               IN VARCHAR2 DEFAULT NULL,
    p_version              IN VARCHAR2 DEFAULT '1.1',
    p_collection_name      IN VARCHAR2 DEFAULT NULL,
    p_envelope             IN CLOB,
    --
    p_credential_static_id IN VARCHAR2,
    p_token_url            IN VARCHAR2 DEFAULT NULL,
    --
    p_proxy_override       IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout     IN NUMBER   DEFAULT 180,
    p_wallet_path          IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd           IN VARCHAR2 DEFAULT NULL,
    p_https_host           IN VARCHAR2 DEFAULT NULL,
    p_oauth_scope          IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_url` | The URL endpoint of the Web service. |
| `p_action` | The SOAP Action corresponding to the operation invoked. |
| `p_version` | The SOAP version (1.1 or 1.2). The default is 1.1. |
| `p_collection_name` | The name of the collection to store the response. |
| `p_envelope` | The SOAP envelope to post to the service. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_token_url` | For token-based authentication flows, the URL where to get the token from. |
| `p_proxy_override` | The proxy to use for the request. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The filesystem path to a wallet if request is HTTPS. For example, `file:/usr/home/oracle/WALLETS` |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_oath_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

Example

The following example invokes a SOAP service and stores the response in a collection.

```
BEGIN
    apex_web_service.make_request(
        p_url                  => 'http://{host}:{port}/path/to/soap/service/',
        p_collection_name      => 'MY_RESPONSE_COLLECTION',
        p_action               => 'doSoapRequest',
        p_envelope             => '{SOAP envelope in XML format}',
        p_credential_static_id => 'My_Credentials',
        p_token_url            => 'http://{host}:{port}/ords/scott/oauth/token' );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.17 MAKE_REST_REQUEST Function

Use this function to invoke a RESTful style Web service supplying either name value pairs, a character based payload or a binary payload and returning the response in a CLOB.

Syntax

```
APEX_WEB_SERVICE.MAKE_REST_REQUEST (
    p_url                   IN  VARCHAR2,
    p_http_method           IN  VARCHAR2,
    p_username              IN  VARCHAR2 DEFAULT NULL,
    p_password              IN  VARCHAR2 DEFAULT NULL,
    p_scheme                IN  VARCHAR2 DEFAULT 'Basic',
    p_proxy_override        IN  VARCHAR2 DEFAULT NULL,
    p_transfer_timeout      IN  NUMBER   DEFAULT 180,
    p_body                  IN  CLOB     DEFAULT EMPTY_CLOB(),
    p_body_blob             IN  BLOB     DEFAULT EMPTY_BLOB(),
    p_parm_name             IN  apex_application_global.vc_arr2
                                    DEFAULT empty_vc_arr,
    p_parm_value            IN  apex_application_global.vc_arr2
                                    DEFAULT empty_vc_arr,
    p_wallet_path           IN  VARCHAR2 DEFAULT NULL,
    p_wallet_pwd            IN  VARCHAR2 DEFAULT NULL,
    p_https_host            IN  VARCHAR2 DEFAULT NULL,
    p_credential_static_id  IN  VARCHAR2 DEFAULT NULL,
    p_token_url             IN  VARCHAR2 DEFAULT NULL,
    p_oauth_scope           IN  VARCHAR2 DEFAULT NULL )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_url` | The URL endpoint of the Web service. |
| `p_http_method` | The HTTP method to use (PUT, POST, GET, HEAD, or DELETE). |
| `p_username` | The username if basic authentication is required for this service. |
| `p_password` | The password if basic authentication is required for this service |
| `p_scheme` | The authentication scheme, Basic (default) or AWS or Digest or `OAUTH_CLIENT_CRED` if supported by your database release. |
| `p_proxy_override` | The proxy to use for the request. The proxy supplied overrides the proxy defined in the application attributes. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_body` | The HTTP payload to be sent as CLOB. |
| `p_body_blob` | The HTTP payload to be sent as binary BLOB. For example, posting a file. |
| `p_parm_name` | The name of the parameters to be used in name/value pairs. |
| `p_parm_value` | The value of the parameters to be used in name/value pairs. |
| `p_wallet_path` | The file system path to a wallet if the URL endpoint is https. For example, file:/usr/home/oracle/WALLETS. The wallet path provided overrides the wallet defined in the instance settings. |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_token_url` | For token-based authentication flows (like OAuth2): The URL where to get the token from. |
| `p_oauth_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

Example

The following example calls a RESTful-style web service using the `make_rest_request` function passing the parameters to the service as name/value pairs. The response from the service is stored in a locally declared CLOB.

```
DECLARE
    l_clob  CLOB;
BEGIN

    l_clob := apex_web_service.make_rest_request(
        p_url => 'http://us.music.yahewapis.com/video/v1/list/published/popular',
        p_http_method => 'GET',
        p_parm_name => apex_string.string_to_table('appid:format'),
        p_parm_value => apex_string.string_to_table('xyz:xml'));

END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.18 MAKE_REST_REQUEST_B Function

This function invokes a RESTful style Web service supplying either name value pairs, a character based payload, or a binary payload, and returns the response in a BLOB.

Syntax

```
APEX_WEB_SERVICE.MAKE_REST_REQUEST_B (
    p_url                   IN  VARCHAR2,
    p_http_method           IN  VARCHAR2,
    p_username              IN  VARCHAR2 DEFAULT NULL,
    p_password              IN  VARCHAR2 DEFAULT NULL,
    p_scheme                IN  VARCHAR2 DEFAULT 'Basic',
    p_proxy_override        IN  VARCHAR2 DEFAULT NULL,
    p_transfer_timeout      IN  NUMBER   DEFAULT 180,
    p_body                  IN  CLOB     DEFAULT EMPTY_CLOB(),
    p_body_blob             IN  BLOB     DEFAULT EMPTY_BLOB(),
    p_parm_name             IN  apex_application_global.vc_arr2
                                         DEFAULT empty_vc_arr,
    p_parm_value            IN  apex_application_global.vc_arr2
                                         DEFAULT empty_vc_arr,
    p_wallet_path           IN  VARCHAR2 DEFAULT NULL,
    p_wallet_pwd            IN  VARCHAR2 DEFAULT NULL,
    p_https_host            IN  VARCHAR2 DEFAULT NULL,
    p_credential_static_id  IN  VARCHAR2 DEFAULT NULL,
    p_token_url             IN  VARCHAR2 DEFAULT NULL,
    p_oauth_scope           IN  VARCHAR2 DEFAULT NULL )
RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_url` | The URL endpoint of the Web service. |
| `p_http_method` | The HTTP method to use, PUT, POST, GET, HEAD, or DELETE. |
| `p_username` | The username if basic authentication is required for this service. |
| `p_password` | The password if basic authentication is required for this service |
| `p_scheme` | The authentication scheme, Basic (default) or AWS or Digest or `OAUTH_CLIENT_CRED` if supported by your database release. |
| `p_proxy_override` | The proxy to use for the request. The proxy supplied overrides the proxy defined in the application attributes. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_body` | The HTTP payload to be sent as CLOB. |
| `p_body_blob` | The HTTP payload to be sent as binary BLOB. For example, posting a file. |
| `p_parm_name` | The name of the parameters to be used in name/value pairs. |
| `p_parm_value` | The value of the parameters to be used in name/value pairs. |
| `p_wallet_path` | The file system path to a wallet if the URL endpoint is https. For example, file:/usr/home/oracle/WALLETS. The wallet path provided overrides the wallet defined in the instance settings. |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_token_url` | For token-based authentication flows (like OAuth2): The URL where to get the token from. |
| `p_oauth_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

Example

The following example calls a RESTful style Web service using the `make_rest_request` function passing the parameters to the service as name/value pairs. The response from the service is stored in a locally declared BLOB.

```
DECLARE
    l_blob  BLOB;
BEGIN

    l_blob := apex_web_service.make_rest_request_b(
        p_url => 'http://us.music.yahooapis.com/ video/v1/list/published/popular',
        p_http_method => 'GET',
        p_parm_name => apex_string.string_to_table('appid:format'),
        p_parm_value => apex_string.string_to_table('xyz:xml'));

END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.19 OAUTH_AUTHENTICATE Procedure Signature 1

This procedure performs OAuth authentication and requests an OAuth access token. The token and its expiry date are stored in a package global.

Note:

Currently only the Client Credentials flow is supported.

Syntax

```
APEX_WEB_SERVICE.OAUTH_AUTHENTICATE (
    p_token_url         IN VARCHAR2,
    p_client_id         IN VARCHAR2,
    p_client_secret     IN VARCHAR2,
    p_flow_type         IN VARCHAR2 DEFAULT oauth_client_cred,
    p_proxy_override    IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout  IN NUMBER   DEFAULT 180,
    p_wallet_path       IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd        IN VARCHAR2 DEFAULT NULL,
    p_https_host        IN VARCHAR2 DEFAULT NULL,
    p_scope             IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_token_url` | The URL endpoint of the OAuth token service. |
| `p_client_id` | OAuth Client ID to use for authentication. |
| `p_client_secret` | OAuth Client Secret to use for authentication. |
| `p_flow_type` | OAuth flow type. Only `OAUTH_CLIENT_CRED` is supported at this time. |
| `p_proxy_override` | The proxy to use for the request. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The filesystem path to a wallet if request is HTTPS. For example, `file:/usr/home/oracle/WALLETS` |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_scope` | The OAuth scope to identify groups of attributes that will be requested from the OAuth provider. For example, `profile,email` |

Example

```
BEGIN
    apex_web_service.oauth_authenticate(
        p_token_url     => 'https://api.example.com/ords/scott/oauth/token',
        p_client_id     => '[client-id]',
        p_client_secret => '[client-secret]');
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.20 OAUTH_AUTHENTICATE Procedure Signature 2 (Deprecated)

Note:

`OAUTH_AUTHENTICATE Procedure Signature 2` has been deprecated because `p_wallet_path` and `p_wallet_pwd` do not have a default value. Oracle recommends using `OAUTH_AUTHENTICATE_CREDENTIAL` instead.

This procedure performs OAUTH authentication and requests an OAuth access token. The obtained access token and its expiry date are stored in a package global.

Syntax

```
APEX_WEB_SERVICE.OAUTH_AUTHENTICATE(
    p_token_url              IN VARCHAR2,
    p_credential_static_id   IN VARCHAR2,
    p_proxy_override         IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout       IN NUMBER   DEFAULT 180,
    p_wallet_path            IN VARCHAR2
    p_wallet_pwd             IN VARCHAR2
    p_https_host             IN VARCHAR2 DEFAULT NULL,
    p_scope                  IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_token_url` | The url endpoint of the OAuth token service. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_proxy_override` | The proxy to use for the request. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The filesystem path to a wallet if request is https. For example: `file:/usr/home/oracle/WALLETS` |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

Example

```
BEGIN
    apex_web_service.oauth_authenticate(
        p_token_url              => 'https://api.example.com/ords/scott/oauth/token',
        p_credential_static_id   => 'My_credentials',
        p_wallet_path            => null,
        p_wallet_pwd             => null );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.21 OAUTH_AUTHENTICATE_CREDENTIAL Procedure

This procedure performs OAuth authentication using a credential store. The obtained access token and its expiry date are stored in a package global.

Syntax

```
APEX_WEB_SERVICE.OAUTH_AUTHENTICATE_CREDENTIAL (
    p_token_url              IN VARCHAR2,
    p_credential_static_id   IN VARCHAR2,
    p_proxy_override         IN VARCHAR2 DEFAULT NULL,
    p_transfer_timeout       IN NUMBER   DEFAULT 180,
    p_wallet_path            IN VARCHAR2 DEFAULT NULL,
    p_wallet_pwd             IN VARCHAR2 DEFAULT NULL,
    p_https_host             IN VARCHAR2 DEFAULT NULL,
    p_scope                  IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_token_url` | The url endpoint of the OAuth token service. |
| `p_credential_static_id` | The name of the Web Credentials to be used. Web Credentials are configured in Workspace Utilities. |
| `p_proxy_override` | The proxy to use for the request. |
| `p_transfer_timeout` | The amount of time in seconds to wait for a response. |
| `p_wallet_path` | The filesystem path to a wallet if request is HTTPS. For example, `file:/usr/home/oracle/WALLETS` |
| `p_wallet_pwd` | The password to access the wallet. |
| `p_https_host` | The host name to be matched against the common name (CN) of the remote server's certificate for an HTTPS request. |
| `p_scope` | The OAuth scope to be used for this request. APEX uses or requests an access token with the specified scope. Separate multiple scopes with blanks. |

Example

```
BEGIN
    apex_web_service.oauth_authenticate_credential(
        p_token_url => 'https://api.example.com/ords/scott/oauth/token',
        p_credential_static_id => '[web-credential]');
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.22 OAUTH_GET_LAST_TOKEN Function

This function returns the OAuth access token received in the last `OAUTH_AUTHENTICATE` call. Returns NULL when the token is already expired or `OAUTH_AUTHENTICATE` has not been called.

Returns

The OAuth access token from the last `OAUTH_AUTHENTICATE` call; NULL when the token is expired.

Syntax

```
FUNCTION OAUTH_GET_LAST_TOKEN RETURN VARCHAR2;
```

Example

```
select apex_web_service.oauth_get_last_token from dual;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.23 OAUTH_SET_TOKEN Procedure

This procedure sets the OAuth access token to be used in subsequent `MAKE_REST_REQUEST` calls. This procedure can be used to set a token which was obtained by different means than with `OAUTH_AUTHENTICATE` (such as custom code).

Syntax

```
APEX_WEB_SERVICE.OAUTH_SET_TOKEN (
    p_token   IN VARCHAR2,
    p_expires IN DATE DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_token` | The OAuth access token to be used by `MAKE_REST_REQUEST` calls. |
| `p_expires` | (Optional) The token expiry date. If NULL, no expiration date is set. |

Example

```
BEGIN
    apex_web_service.oauth_set_token(
        p_token =>   '{oauth access token}'
    );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.24 PARSE_RESPONSE Function

This function parses the response from a Web service that is stored in a collection and returns the result as a VARCHAR2 type.

Syntax

```
APEX_WEB_SERVICE.PARSE_RESPONSE (
    p_collection_name   IN VARCHAR2,
    p_xpath             IN VARCHAR2,
    p_ns                IN VARCHAR2 DEFAULT NULL )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection where the Web service response is stored. |
| `p_xpath` | The XPath expression to the desired node. |
| `p_ns` | The namespace to the desired node. |

Example

The following example parses a response stored in a collection called `STELLENT_CHECKIN` and stores the value in a locally declared `VARCHAR2` variable.

```
declare
    l_response_msg  VARCHAR2(4000);
BEGIN
    l_response_msg := apex_web_service.parse_response(
        p_collection_name=>'STELLENT_CHECKIN',
        p_xpath =>
'//idc:CheckInUniversalResponse/idc:CheckInUniversalResult/idc:StatusInfo/idc:statusMessage/text()',
        p_ns=>'xmlns:idc="http://www.stellent.com/CheckIn/"');
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.25 PARSE_RESPONSE_CLOB Function

This function parses the response from a Web service that is stored in a collection and returns the result as a CLOB type.

Syntax

```
APEX_WEB_SERVICE.PARSE_RESPONSE_CLOB (
    p_collection_name   IN VARCHAR2,
    p_xpath             IN VARCHAR2,
    p_ns                IN VARCHAR2 DEFAULT NULL )
RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection where the Web service response is stored. |
| `p_xpath` | The XPath expression to the desired node. |
| `p_ns` | The namespace to the desired node. |

Example

The following example parses a response stored in a collection called `STELLENT_CHECKIN` and stores the value in a locally declared CLOB variable.

```
DECLARE
    l_response_msg  CLOB;
BEGIN
    l_response_msg := apex_web_service.parse_response_clob(
        p_collection_name=>'STELLENT_CHECKIN',
        p_xpath=>
'//idc:CheckInUniversalResponse/idc:CheckInUniversalResult/idc:StatusInfo/idc:statusMessage/text()',
        p_ns=>'xmlns:idc="http://www.stellent.com/CheckIn/"');
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.26 PARSE_XML Function

This function parses the response from a Web service returned as an XMLTYPE and returns the value requested as a VARCHAR2.

Syntax

```
APEX_WEB_SERVICE.PARSE_XML (
    p_xml               IN XMLTYPE,
    p_xpath             IN VARCHAR2,
    p_ns                IN VARCHAR2 DEFAULT NULL )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description                               |
|:----------|:------------------------------------------|
| `p_xml`   | The XML document as an XMLTYPE to parse.  |
| `p_xpath` | The XPath expression to the desired node. |
| `p_ns`    | The namespace to the desired node.        |

Example

The following example uses the `make_request` function to call a Web service and store the results in a local XMLTYPE variable. The `parse_xml` function is then used to pull out a specific node of the XML document stored in the `XMLTYPE` and stores it in a locally declared VARCHAR2 variable.

```
DECLARE
    l_envelope CLOB;
    l_xml XMLTYPE;
    l_movie VARCHAR2(4000);
BEGIN
    l_envelope := ' <?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:tns="http://www.ignyte.com/whatsshowing"
xmlns:xs="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <tns:GetTheatersAndMovies>
         <tns:zipCode>43221</tns:zipCode>
         <tns:radius>5</tns:radius>
      </tns:GetTheatersAndMovies>
   </soap:Body>
</soap:Envelope>';

   l_xml := apex_web_service.make_request(
     p_url => ' http://www.ignyte.com/webservices/ignyte.whatsshowing.webservice/moviefunctions.asmx',
     p_action => ' http://www.ignyte.com/whatsshowing/GetTheatersAndMovies',
     p_envelope => l_envelope );

   l_movie := apex_web_service.parse_xml(
     p_xml => l_xml,
     p_xpath => ' //GetTheatersAndMoviesResponse/GetTheatersAndMoviesResult/Theater/Movies/Movie/Name[1]',
     p_ns => ' xmlns="http://www.ignyte.com/whatsshowing"' );

END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.27 PARSE_XML_CLOB Function

This function parses the response from a Web service returned as an XMLTYPE and returns the value requested as a CLOB.

Syntax

```
APEX_WEB_SERVICE.PARSE_XML_CLOB (
    p_xml               IN XMLTYPE,
    p_xpath             IN VARCHAR2,
    p_ns                IN VARCHAR2 DEFAULT NULL )
RETURN CLOB;
```

Parameters

| Parameter | Description                               |
|:----------|:------------------------------------------|
| `p_xml`   | The XML document as an XMLTYPE to parse.  |
| `p_xpath` | The XPath expression to the desired node. |
| `p_ns`    | The namespace to the desired node.        |

Example

The following example uses the `make_request` function to call a Web service and stores the results in a local `XMLTYPE` variable. The `parse_xml_clob` function then fetches a specific node of the XML document that is stored in the `XMLTYPE` and stores it in a locally-declared `CLOB` variable.

```
DECLARE
    l_envelope CLOB;
    l_xml XMLTYPE;
    l_movie CLOB;
BEGIN
    l_envelope := ' <?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:tns="http://www.ignyte.com/whatsshowing"
xmlns:xs="http://www.w3.org/2001/XMLSchema">
   <soap:Body>
      <tns:GetTheatersAndMovies>
         <tns:zipCode>43221</tns:zipCode>
         <tns:radius>5</tns:radius>
      </tns:GetTheatersAndMovies>
   </soap:Body>
</soap:Envelope>';

   l_xml := apex_web_service.make_request(
     p_url => ' http://www.ignyte.com/webservices/ignyte.whatsshowing.webservice/moviefunctions.asmx',
     p_action => ' http://www.ignyte.com/whatsshowing/GetTheatersAndMovies',
     p_envelope => l_envelope );

   l_movie := apex_web_service.parse_xml_clob(
     p_xml => l_xml,
     p_xpath => ' //GetTheatersAndMoviesResponse/GetTheatersAndMoviesResult/Theater/Movies/Movie/Name[1]',
     p_ns => ' xmlns="http://www.ignyte.com/whatsshowing"' );

END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.28 REMOVE_REQUEST_HEADER Procedure

This procedure removes an HTTP request header (`g_request_headers`). If the header parameter name does not exist, no error is raised.

Caution:

This procedure may reorder the header entries in `g_request_headers`.

Syntax

```
APEX_WEB_SERVICE.REMOVE_REQUEST_HEADER (
    p_name  IN VARCHAR2 )
```

Parameters

| Parameter | Description                       |
|:----------|:----------------------------------|
| `p_name`  | The name of the header to remove. |

Example

The following example removes the "Metadata-Context" header.

```
BEGIN
    apex_web_service.remove_request_header(
        p_name => 'Metadata-Context');
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.29 SET_REQUEST_ECID_CONTEXT Procedure

This procedure adds an Execution Context ID (ECID) HTTP request header to `g_request_headers`. This overrides the application level security setting "Pass ECID."

Syntax

```
APEX_WEB_SERVICE.SET_REQUEST_ECID_CONTEXT (
    p_ecid  IN VARCHAR2 DEFAULT AUTO_ECID )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d324568e77" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d324568e79" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d324568e83" style="text-align: left;" data-valign="top" width="42%" headers="d324568e77 "><code class="codeph">p_ecid</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d324568e83 d324568e79 "><p>The identifier for the execution context. Options include:</p>
<ul>
<li>AUTO_ECID - (Default) An automatically determined ECID header is added.</li>
<li>NULL - No ECID header is added.</li>
<li>If neither, <code class="codeph">substrb(p_ecid, 1, 64)</code> is used as the ECID header.</li>
</ul></td>
</tr>
</tbody>
</table>

Example 1

On application level, the sending of an ECID header is switched off. By calling `set_request_ecid_context` without any parameter, the following call to `make_rest_request` has an "ECID-Context" request header with an automatically determined ECID.

```
BEGIN
    apex_web_service.set_request_ecid_context;
END;
```

Example 2

On application level, the sending of an ECID header is switched off. By providing an ECID value, the following call to `make_rest_request` has an "ECID-Context" request header.

```
BEGIN
    apex_web_service.set_request_ecid_context(
        p_ecid => 'my-123456' );
END;
```

Example 3

On application level, the sending of an ECID header is switched on. By providing an ECID value of `NULL`, the following call to `make_rest_request` has no "ECID-Context" request header.

```
BEGIN
    apex_web_service.set_request_ecid_context(
        p_ecid => null );
END;
```

Example 4

On application level, the sending of an ECID header is switched on. By providing an ECID value, the following call to `make_rest_request` uses this value instead of an automatically determined ECID.

```
BEGIN
    apex_web_service.set_request_ecid_context(
        p_ecid => 'my-123456' );
END;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)

------------------------------------------------------------------------

## 62.30 SET_REQUEST_HEADERS Procedure

This procedure sets HTTP request headers (`g_request_headers`) for subsequent `MAKE_REQUEST` or `MAKE_REST_REQUEST` calls.

Syntax

```
APEX_WEB_SERVICE.SET_REQUEST_HEADERS (
    p_name_01            IN VARCHAR2,
    p_value_01           IN VARCHAR2,
    p_name_02            IN VARCHAR2 DEFAULT NULL,
    p_value_02           IN VARCHAR2 DEFAULT NULL,
    p_name_03            IN VARCHAR2 DEFAULT NULL,
    p_value_03           IN VARCHAR2 DEFAULT NULL,
    p_name_04            IN VARCHAR2 DEFAULT NULL,
    p_value_04           IN VARCHAR2 DEFAULT NULL,
    p_name_05            IN VARCHAR2 DEFAULT NULL,
    p_value_05           IN VARCHAR2 DEFAULT NULL,
    p_reset              IN BOOLEAN  DEFAULT TRUE,
    p_skip_if_exists     IN BOOLEAN  DEFAULT FALSE );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d324791e81" style="text-align: left;" data-valign="bottom" width="28%">Parameter</th>
<th id="d324791e83" style="text-align: left;" data-valign="bottom" width="72%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d324791e87" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_name_01</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e87 d324791e83 ">Name of the 1st parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e93" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_value_01</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e93 d324791e83 ">Value of the 1st parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e99" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_name_02</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e99 d324791e83 ">Name of the 2nd parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e105" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_value_02</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e105 d324791e83 ">Value of the 2nd parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e111" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_name_03</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e111 d324791e83 ">Name of the 3rd parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e117" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_value_03</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e117 d324791e83 ">Value of the 3rd parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e123" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_name_04</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e123 d324791e83 ">Name of the 4th parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e129" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_value_04</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e129 d324791e83 ">Value of the 4th parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e135" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_name_05</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e135 d324791e83 ">Name of the 5th parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e141" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_value_05</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e141 d324791e83 ">Value of the 5th parameter to set.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e147" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_reset</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e147 d324791e83 ">Whether to clear the request header array before.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d324791e154" style="text-align: left;" data-valign="top" width="28%" headers="d324791e81 "><code class="codeph">p_skip_if_exists</code></td>
<td style="text-align: left;" data-valign="top" width="72%" headers="d324791e154 d324791e83 "><p>If TRUE, any existing headers with the same name remain unchanged.</p>
<p>For example, if you pass in "Content-Type" as <code class="codeph">p_name_NN</code> and that header is already present in the <code class="codeph">apex_web_services.g_request_headers</code> array, then the value that you pass in does not override the existing header value for that name.</p></td>
</tr>
</tbody>
</table>

Example 1

The following example appends "Content-Type" and "User-Agent" HTTP request headers to the already existing headers, but only if they do not exist yet.

```
begin
    apex_web_service.set_request_headers(
        p_name_01        => 'Content-Type',
        p_value_01       => 'application/json',
        p_name_02        => 'User-Agent',
        p_value_02       => 'APEX',
        p_reset          => false,
        p_skip_if_exists => true );
end;
```

Example 2

The following example clears existing request headers and sets "Content-Type" and "User-Agent."

```
begin
    apex_web_service.set_request_headers(
        p_name_01        => 'Content-Type',
        p_value_01       => 'application/json',
        p_name_02        => 'User-Agent',
        p_value_02       => 'APEX' );
end;
```

**Parent topic:** [APEX_WEB_SERVICE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_WEB_SERVICE.html#GUID-B95EA4B6-950D-419D-A2B0-CDB254E1E9F0)
