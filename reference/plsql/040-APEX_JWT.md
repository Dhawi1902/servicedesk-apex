<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JWT.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 40  APEX_JWT

This package provides APIs to work with JSON Web Tokens (JWT). JWTs can be used to pass a number of signed claims between client and server. Token values are URL-safe strings that consist of 3 parts, separated by `'.'`. The header part identifies the algorithm used for the signature part. The payload part contains the claims to make.

For more details on JWT, see RFC 7519.

Note:

APEX_JWT APIs only support HS256 symmetric encryption algorithm for claim signatures. Asymmetric encryption algorithms such as RS256 are not supported.

- [t_token Record](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/T_TOKEN.html#GUID-1271B571-1959-4421-A9F0-ABA44905E175)
- [ENCODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ENCODE.html#GUID-3ACCE379-F193-485D-BA5F-2F4BBD03257B)
- [DECODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DECODE.html#GUID-6AF6E193-B39E-4F1C-9502-70B9760C884E)
- [VALIDATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/VALIDATE.html#GUID-2EB85906-34C3-432A-90FD-EE9201857CFE)

------------------------------------------------------------------------

## 40.1 t_token Record

A `t_token` record contains the decoded parts of a JSON Web Token.

Syntax

```
type t_token is record (
    header      VARCHAR2(32767),
    payload     VARCHAR2(32767),
    signature   VARCHAR2(32767) );
```

Parameters

| Parameter | Description |
|:---|:---|
| `header` | The Javascript Object Signing and Encryption (JOSE) header contains cryptographic parameters. |
| `payload` | The claims which the token asserts. |
| `signature` | The signature of header and payload. |

**Parent topic:** [APEX_JWT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JWT.html#GUID-D44A3F15-75BE-41DC-A557-17FA70D466B9)

------------------------------------------------------------------------

## 40.2 ENCODE Function

This function encodes and optionally encrypts payload.

Syntax

```
FUNCTION ENCODE (
     p_iss           IN VARCHAR2                 DEFAULT NULL,
     p_sub           IN VARCHAR2                 DEFAULT NULL,
     p_aud           IN VARCHAR2                 DEFAULT NULL,
     p_nbf_ts        IN timestamp with time zone DEFAULT NULL,
     p_iat_ts        IN timestamp with time zone DEFAULT SYSTIMESTAMP,
     p_exp_sec       IN PLS_INTEGER              DEFAULT NULL,
     p_jti           IN VARCHAR2                 DEFAULT NULL,
     p_other_claims  IN VARCHAR2                 DEFAULT NULL,
     p_signature_key IN RAW                      DEFAULT NULL )
     RETURN VARCHAR2
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_iss` | Optional `"iss"` (Issuer) claim. |
| `p_sub` | Optional `"sub" `(Subject) claim. |
| `p_aud` | Optional `"aud"` (Audience) claim. |
| `p_nbf_ts` | Optional `"nbf" `(Not Before) claim. |
| `p_iat_ts` | Optional `"iat"` (Issued At) claim (default systimestamp). |
| `p_exp_sec` | Optional `"exp"` (Expiration Time) claim, in seconds. The start time is taken from `"nbf"`, `"iat"` or current time. |
| `p_jti` | Optional `"jti"` (JWT ID) Claim. |
| `p_other_claims` | Optional raw JSON with additional claims. |
| `p_signature_key` | Optional MAC key for the signature. If not null, a `'HS256'` signature is added. This requires Oracle Database 12c or higher. Other signature algorithms are not supported. |

Returns

A VARCHAR2, the encoded token value.

Example

This example creates and prints a JWT value for Example User, intended to be used by Example JWT Recipient. The token is valid for 5 minutes.

```
DECLARE
    l_jwt_value varchar2(32767);
BEGIN
    l_jwt_value := apex_jwt.encode (
                       p_iss => 'Example Issuer',
                       p_sub => 'Example User',
                       p_aud => 'Example JWT Recipient',
                       p_exp_sec => 60*5,
                       p_other_claims => '"name1": '||apex_json.stringify('value1')||
                                         ',"name2": '||apex_json.stringify('value2'),
                       p_signature_key => ... encryption key ... );
    sys.dbms_output.put_line(l_jwt_value);
END;
```

**Parent topic:** [APEX_JWT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JWT.html#GUID-D44A3F15-75BE-41DC-A557-17FA70D466B9)

------------------------------------------------------------------------

## 40.3 DECODE Function

This function decodes a raw token value.

Syntax

```
APEX_JWT.DECODE (
    p_value         IN VARCHAR2,
    p_signature_key IN RAW      DEFAULT NULL )
RETURN t_token;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | A raw token value contains 3 base64-encoded parts, which are separated by` '.'`. The parts are header, payload and signature. |
| `p_signature_key` | If not null, validate` p_value`'s signature using this key and the algorithm specified in header. The algorithms `'HS256'` and 'none' are supported, but `'HS256' `requires 12c or higher. |

Returns

A `t_token`.

Errors Raised

`VALUE_ERROR`: The input value is invalid.

`WWV_FLOW_CRYPTO.UNSUPPORTED_FUNCTION`: The token is signed using an unsupported function.

Example

This example decodes an encoded token and print it's contents.

```
declare
    l_token apex_jwt.t_token;
    l_keys apex_t_varchar2;
begin
    l_token := apex_jwt.decode (
                   p_value => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI' );
    sys.dbms_output.put_line('--- Header ---');
    apex_json.parse(l_token.header);
    l_keys := apex_json.get_members('.');
    for i in 1 .. l_keys.count loop
        sys.dbms_output.put_line(l_keys(i)||'='||apex_json.get_varchar2(l_keys(i)));
    end loop;
    sys.dbms_output.put_line('--- Payload ---');
    apex_json.parse(l_token.payload);
    l_keys := apex_json.get_members('.');
    for i in 1 .. l_keys.count loop
        sys.dbms_output.put_line(l_keys(i)||'='||apex_json.get_varchar2(l_keys(i)));
    end loop;
end;
```

Output:

```
--- Header ---
alg=HS256
typ=JWT
--- Payload ---
loggedInAs=admin
iat=1422779638
```

**Parent topic:** [APEX_JWT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JWT.html#GUID-D44A3F15-75BE-41DC-A557-17FA70D466B9)

------------------------------------------------------------------------

## 40.4 VALIDATE Procedure

This procedure validates the given token.

Syntax

```
APEX_JWT.VALIDATE (
     p_token          IN t_token,
     p_iss            IN VARCHAR2    DEFAULT NULL,
     p_aud            IN VARCHAR2    DEFAULT NULL,
     p_leeway_seconds IN PLS_INTEGER DEFAULT 0 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_token` | The JWT. |
| `p_iss` | If not null, verify that the `"iss"` claim equals` p_iss`. |
| `p_aud` | If not null, verify that the single `"aud"` value equals` p_aud`. If `"aud"` is an array, verify that the `"azp"` (Authorized Party) claim equals `p_aud`. This is an OpenID extension. |
| `p_leeway_seconds` | Fudge factor (in seconds) for comparing `"exp"` (Expiration Time), ` "nbf"` (Not Before), and `"iat"` (Issued At) claims. |

Raises

`VALUE_ERROR`: Validation failed, check debug log for details.

Example

Verify that `l_value` is a valid `OpenID` ID token.

```
DECLARE
     l_value varchar2(4000) := 'eyJ0 ... NiJ9.eyJ1c ... I6IjIifX0.DeWt4Qu ... ZXso';
     l_oauth2_client_id varchar2(30) := '...';
     l_token apex_jwt.t_token;
BEGIN
     l_token := apex_jwt.decode (
                    p_value => l_value );
     apex_jwt.validate (
         p_token => l_token,
         p_aud => l_oauth2_client_id );
END;
```

**Parent topic:** [APEX_JWT](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_JWT.html#GUID-D44A3F15-75BE-41DC-A557-17FA70D466B9)
