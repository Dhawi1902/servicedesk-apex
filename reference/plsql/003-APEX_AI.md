<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 3 APEX_AI

APEX_AI contains the APIs for Oracle APEX Generative AI.

- [Constants](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.Constants.html#GUID-A257B4CE-F182-4717-831E-829668886E1F)
- [Data Types](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.Data-Types.html#GUID-8671F505-F1FF-4AFD-B45A-4C5D94A1DB67)
- [CHAT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.CHAT-Function-Signature-1.html#GUID-5E10D51A-50DB-4BD2-9809-C97043E1DB06)
- [CHAT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.CHAT-Function-Signature-2.html#GUID-F9B1F1EE-A8C4-4FE1-9F20-8532C77B36D9)
- [GENERATE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.GENERATE-Function-Signature-1.html#GUID-E865EB64-C620-41B4-AF63-185E7563E69E)
- [GENERATE Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.GENERATE-Function-Signature-2.html#GUID-AE40FBA1-4822-45B8-865D-43C29FE9901E)
- [GET_VECTOR_EMBEDDINGS Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-1.html#GUID-7DFD1C02-7117-4CF3-A172-162112886683)
- [GET_VECTOR_EMBEDDINGS Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-2.html#GUID-6B601167-BF6C-4351-8EEC-51CDF0F7ADD6)
- [GET_VECTOR_EMBEDDINGS Function Signature 3](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-3.html#GUID-77490197-94DB-4C69-B180-9A693FCFE7EC)
- [IS_ENABLED Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.IS_ENABLED-Function.html#GUID-FE8A7174-FFBC-45E6-9382-ADBD3B6CE2FC)
- [IS_USER_CONSENT_NEEDED Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.IS_USER_CONSENT_NEEDED-Function.html#GUID-14EF1D8B-48DC-4769-A9E7-17A9FBF825B5)
- [REVOKE_USER_CONSENT Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.REVOKE_USER_CONSENT-Procedure.html#GUID-8B84569F-81CB-4A49-BEC9-1E0B80B1EE36)
- [REVOKE_USER_CONSENT_FOR_ALL Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.REVOKE_USER_CONSENT_FOR_ALL-Procedure.html#GUID-2001B178-D757-40A0-A345-426C07B33E75)
- [SET_USER_CONSENT Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.SET_USER_CONSENT-Procedure.html#GUID-C26E45F9-E0E5-4667-8983-0CAFB6DF47BA)

------------------------------------------------------------------------

## 3.1 Constants

The APEX_AI package uses the following constants.

```
c_chat_messages     t_chat_messages;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.2 Data Types

The APEX_AI package uses the following data types.

```
subtype t_chat_role is varchar2(30);

type t_chat_message is record (
    chat_role   t_chat_role,
    message     clob );

type t_chat_messages is table of t_chat_message index by pls_integer;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.3 CHAT Function Signature 1

This function chats with a Generative AI service given a prompt and potential earlier responses.

Syntax

```
APEX_AI.CHAT (
    p_prompt            IN              CLOB,
    p_system_prompt     IN              VARCHAR2            DEFAULT NULL,
    p_service_static_id IN              VARCHAR2            DEFAULT NULL,
    p_temperature       IN              NUMBER              DEFAULT NULL,
    p_messages          IN OUT NOCOPY   t_chat_messages )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_prompt` | The user prompt. |
| `p_system_prompt` | (Optional) System prompt to pass. Some Generative AI services (such as OpenAI) support the use of passing a system prompt to set the context of a conversation. |
| `p_service_static_id` | The Generative AI Service static ID. If not provided, uses the app's default AI Service. |
| `p_temperature` | The temperature to use. How the temperature is interpreted depends on the Generative AI Service implementation. Higher temperatures result in more "creative" responses. See the documentation of the Generative AI provider for details and allowed values. |
| `p_messages` | (Optional) The responses from an earlier conversation. Responses of procedure chat and nl2sql are automatically added to `p_responses`. |

Returns

The response for the given prompt and type.

Example

The following example chats with the configured Generative AI Service `MY_AI_SERVICE`. In the first interaction, a system prompt is given and then in further interactions the context is passed to the Generative AI service in the form of parameter `p_messages`.

```
DECLARE
  l_messages  apex_ai.t_chat_messages;
  l_response1 clob;
  l_response2 clob;
BEGIN
  l_response1 := apex_ai.chat(
    p_prompt            => 'What is Oracle APEX',
    p_system_prompt     => 'I am an expert in Low Code Application Platforms',
    p_service_static_id => 'MY_AI_SERVICE',
    p_messages          => l_messages);
  l_response2 := apex_ai.chat(
    p_prompt            => 'What is new in 23.2',
    p_service_static_id => 'MY_AI_SERVICE',
    p_messages          => l_messages);
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.4 CHAT Function Signature 2

This function chats with a Generative AI service given a prompt and potential earlier responses.

Syntax

```
APEX_AI.CHAT (
    p_config_static_id  IN              VARCHAR2,
    p_prompt            IN              CLOB,
    p_messages          IN OUT NOCOPY   t_chat_messages )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_config_static_id` | The static ID of the AI configuration defined under the application's Shared Components. |
| `p_prompt` | The user prompt. |
| `p_messages` | (Optional) The responses from an earlier conversation. Responses are automatically added to `p_responses` for an easy conversational experience. |

Returns

The response for the given prompt and type.

Example

The following example chats with the assistant configured as `my-oracle-assistant` where in the first interaction a system prompt is given and then in further interactions the context is passed to the generative AI service in the form of parameter `p_messages`.

```
DECLARE
  l_messages  t_chat_messages := c_chat_messages;
  l_response1 clob;
  l_response2 clob;
BEGIN
  l_response1 := apex_ai.chat(
    p_config_static_id  => 'my-oracle-assistant',
    p_prompt            => 'What is Oracle APEX',
    p_messages          => l_messages);
  l_response2 := apex_ai.chat(
    p_config_static_id  => 'my-oracle-assistant',
    p_prompt            => 'What is new in 23.2',
    p_messages          => l_messages)
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.5 GENERATE Function Signature 1

This function generates a response for a given prompt.

Syntax

```
APEX_AI.GENERATE (
    p_prompt            IN  CLOB,
    p_system_prompt     IN  VARCHAR2    DEFAULT NULL,
    p_service_static_id IN  VARCHAR2    DEFAULT NULL,
    p_temperature       IN  NUMBER      DEFAULT NULL )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_prompt` | The user prompt. |
| `p_system_prompt` | (Optional) System prompt to pass. Some Generative AI services (such as OpenAI) support the use of passing a system prompt to set the context of a request. |
| `p_service_static_id` | The Generative AI Service static ID. If not provided, uses the app's default AI Service. |
| `p_temperature` | The temperature to use. How the temperature is interpreted depends on the Generative AI Service implementation. Higher temperatures result in more "creative" responses. See the documentation of the Generative AI provider for details and allowed values. |

Returns

The response for the given prompt and type.

Example

The following example generates a response with the configured Generative AI Service `MY_AI_SERVICE` for the given prompt.

```
DECLARE
  l_response clob;
BEGIN
  l_response := apex_ai.generate(
    p_prompt            => 'What is Oracle APEX',
    p_service_static_id => 'MY_AI_SERVICE');
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.6 GENERATE Function Signature 2

This function generates a response for a given prompt.

Syntax

```
APEX_AI.GENERATE (
    p_config_static_id  IN              VARCHAR2 )
    p_prompt            IN              VARCHAR2 )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_config_static_id` | The static ID of the AI configuration defined under the application's Shared Components. |
| `p_prompt` | The user prompt. |

Example

The following example generates a response using the AI service configured via AI configuration with static ID `low_code_expert`.

```
DECLARE
  l_response clob;
BEGIN
  l_response := apex_ai.generate(
    p_config_static_id => 'low_code_expert',
    p_prompt           => 'What is Oracle APEX' );
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.7 GET_VECTOR_EMBEDDINGS Function Signature 1

This function receives the embedding from a vector provider for a given term.

Syntax

```
APEX_AI.GET_VECTOR_EMBEDDINGS (
    p_value                 IN CLOB,
    p_service_static_id     IN VARCHAR2 )
    RETURN VECTOR;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | The textual value for which the embedding is to be determined. |
| `p_service_static_id` | The Vector Provider static ID. |

Returns

The embedding for the given value.

Example

The following example uses the Vector Provider "MY_ONNX_VECTOR_PROVIDER" to receive an embedding.

```
DECLARE
    l_vector vector;
BEGIN
    l_vector := apex_ai.get_vector_embeddings(
        p_value             => 'What is Oracle APEX',
        p_service_static_id => 'MY_ONNX_VECTOR_PROVIDER' );
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.8 GET_VECTOR_EMBEDDINGS Function Signature 2

This function receives the embedding from a vector provider for a given term.

Syntax

```
APEX_AI.GET_VECTOR_EMBEDDINGS (
    p_value                 IN CLOB,
    p_local_llm_owner       IN VARCHAR2,
    p_local_llm_name        IN VARCHAR2 )
    RETURN VECTOR;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | The textual value for which the embedding is to be determined. |
| `p_local_llm_owner` | The owner name of the local ONNX model to be used to receive the embeddings. |
| `p_local_llm_name` | The name of the local ONNX model to be used to receive the embeddings. |

Returns

The embedding for the given value.

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.9 GET_VECTOR_EMBEDDINGS Function Signature 3

This function receives the embedding from a vector provider for a given term.

Syntax

```
APEX_AI.GET_VECTOR_EMBEDDINGS (
    p_value                 IN CLOB,
    p_function_name         IN VARCHAR2 )
    RETURN VECTOR;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_value` | The textual value for which the embedding is to be determined. |
| `p_function_name` | The name of a custom PL/SQL function which converts an end user input to an embedding. The specified function needs to take the end user input (`p_value`) as VARCHAR2 and returns a VECTOR type as a result. |

Returns

The embedding for the given value.

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.10 IS_ENABLED Function

This function returns whether Generative AI features are enabled for the current Oracle APEX Workspace.

Syntax

```
APEX_AI.IS_ENABLED
RETURN BOOLEAN;
```

Parameters

None.

Returns

`TRUE` if Generative AI features are enabled for the current workspace. Otherwise, `FALSE`.

Example

```
DECLARE
  l_is_ai_enabled boolean;
BEGIN
  l_is_ai_enabled := apex_ai.is_enabled;
  dbms_output.put_line('AI is enabled: ' || case l_is_ai_enabled when true then 'Yes' else 'No' end);
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.11 IS_USER_CONSENT_NEEDED Function

This function returns whether a consent screen is shown to the user before interacting with the AI.

Syntax

```
APEX_AI.IS_USER_CONSENT_NEEDED (
    p_user_name         IN  VARCHAR2    DEFAULT {the current user},
    p_application_id    IN  NUMBER      DEFAULT {the current application} )
    RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_user_name` | The user name. Defaults to the current user. |
| `p_application_id` | The application ID. Defaults to the current application. |

Returns

`TRUE` if an AI consent message exists and if the user has not already consented. Otherwise, `FALSE`.

Example

The following example checks whether user consent is needed for the current user and application.

```
DECLARE
  l_user_consent_needed boolean;
BEGIN
  l_user_consent_needed := apex_ai.is_user_consent_needed;
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.12 REVOKE_USER_CONSENT Procedure

This procedure removes the AI user preference storing the usage consent.

Syntax

```
APEX_AI.REVOKE_USER_CONSENT (
    p_user_name         IN  VARCHAR2,
    p_application_id    IN  NUMBER )
```

Parameters

| Parameter          | Description         |
|:-------------------|:--------------------|
| `p_user_name`      | The username.       |
| `p_application_id` | The application ID. |

Example

```
BEGIN
  apex_ai.revoke_user_consent(
    p_user_name      => 'STIGER',
    p_application_id => 100);
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.13 REVOKE_USER_CONSENT_FOR_ALL Procedure

This procedure removes the AI user preference storing the usage consent for all users.

Syntax

```
APEX_AI.REVOKE_USER_CONSENT_FOR_ALL (
    p_application_id    IN  NUMBER )
```

Parameters

| Parameter          | Description         |
|:-------------------|:--------------------|
| `p_application_id` | The application ID. |

Example

```
BEGIN
  apex_ai.revoke_user_consent_for_all(
    p_application_id => 100);
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.14 SET_USER_CONSENT Procedure

This procedure marks the user as having consented to the use of AI.

If done once either by the user via the UI or via this API, the user is no longer prompted to consent when interacting with AI.

Syntax

```
APEX_AI.SET_USER_CONSENT (
    p_user_name         IN  VARCHAR2,
    p_application_id    IN  NUMBER )
```

Parameters

| Parameter          | Description         |
|:-------------------|:--------------------|
| `p_user_name`      | The user name.      |
| `p_application_id` | The application ID. |

Example

```
BEGIN
  apex_ai.set_user_consent(
    p_user_name      => 'STIGER',
    p_application_id => 100);
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)
