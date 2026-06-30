<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 3 APEX_AI

APEX_AI contains the APIs for Oracle APEX Generative AI. This package requires a valid APEX session.

- [Constants and Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.Data-Types.html#GUID-8671F505-F1FF-4AFD-B45A-4C5D94A1DB67)
- [CHAT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-1.html#GUID-F9B1F1EE-A8C4-4FE1-9F20-8532C77B36D9)
- [CHAT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-2.html#GUID-5E10D51A-50DB-4BD2-9809-C97043E1DB06)
- [CHAT Function Signature 3 (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-3.html#GUID-E41FAEA1-68C6-49DF-8DF4-7D3D92679F69)
- [GENERATE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-1.html#GUID-AE40FBA1-4822-45B8-865D-43C29FE9901E)
- [GENERATE Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-2.html#GUID-E865EB64-C620-41B4-AF63-185E7563E69E)
- [GENERATE Function Signature 3 (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-3.html#GUID-481DDE73-56D6-44EB-BB17-59D187115F33)
- [GET_AVAILABLE_TOKENS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_AVAILABLE_TOKENS-Function.html#GUID-42699745-3F2D-4C1B-80D6-43B6FA798DEE)
- [GET_VECTOR_EMBEDDINGS Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-1.html#GUID-7DFD1C02-7117-4CF3-A172-162112886683)
- [GET_VECTOR_EMBEDDINGS Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-2.html#GUID-6B601167-BF6C-4351-8EEC-51CDF0F7ADD6)
- [GET_VECTOR_EMBEDDINGS Function Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GET_VECTOR_EMBEDDINGS-Function-Signature-3.html#GUID-77490197-94DB-4C69-B180-9A693FCFE7EC)
- [IS_ENABLED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.IS_ENABLED-Function.html#GUID-FE8A7174-FFBC-45E6-9382-ADBD3B6CE2FC)
- [IS_USER_CONSENT_NEEDED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.IS_USER_CONSENT_NEEDED-Function.html#GUID-14EF1D8B-48DC-4769-A9E7-17A9FBF825B5)
- [REVOKE_USER_CONSENT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.REVOKE_USER_CONSENT-Procedure.html#GUID-8B84569F-81CB-4A49-BEC9-1E0B80B1EE36)
- [REVOKE_USER_CONSENT_FOR_ALL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.REVOKE_USER_CONSENT_FOR_ALL-Procedure.html#GUID-2001B178-D757-40A0-A345-426C07B33E75)
- [SET_TOOL_RESULT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-1.html#GUID-2C356F88-1A7A-4971-AF59-04CC0C1346A6)
- [SET_TOOL_RESULT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_TOOL_RESULT-Procedure-Signature-2.html#GUID-4EC94ADF-3C18-4946-8F5C-9B4E32704263)
- [SET_USER_CONSENT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.SET_USER_CONSENT-Procedure.html#GUID-C26E45F9-E0E5-4667-8983-0CAFB6DF47BA)

------------------------------------------------------------------------

## 3.1 Constants and Data Types

The section describes constants and data types used by the `APEX_AI` package.

t_attachment

`t_attachment` describes an attachment record.

```
type t_attachment is record(
    mime_type                      varchar2(255),
    content_blob                   blob,
    content_clob                   clob,
    file_name                      varchar2(255),
    detail_level                   t_detail_level
);
```

| Name | Value | Description |
|:---|:---|:---|
| `mime_type` | `varchar2(255)` | The mime type of the file. Required. |
| `content_blob` | `blob` | The file content as a `BLOB`. Use this for images, audio, PDFs, etc. |
| `content_clob` | `clob` | The file content as a `CLOB`. Use this for text-based files. |
| `file_name` | `varchar2(255)` | The file name. It might be required depending on the AI provider and file type. |
| `detail_level` | `t_detail_level` | The detail level for processing. Optional. |

t_attachments

`t_attachments` describes a collection of attachments.

```
type t_attachments is table of t_attachment;
```

t_chat_message

Note:

`C_ROLE_SYSTEM`, `C_ROLE_ASSISTANT` and `C_ROLE_USER` use `CHAT_ROLE` and `MESSAGE`.

`C_ROLE_ASSISTANT` can also use `TOOL_CALLS`.

`C_ROLE_TOOL` uses `TOOL`.

```
type t_chat_message is record(
    chat_role                      t_chat_role,
    message                        clob,
    tool_calls                     t_chat_message_tool_calls,
    tool                           t_chat_message_tool,
    attachments                    t_attachments
);
```

t_chat_message_tool

`t_chat_message_tool` describes a tool response entry added to chat history.

```
type t_chat_message_tool is record(
    id                             varchar2(255),
    content                        clob
);
```

t_chat_message_tool_call

`t_chat_message_tool_call` describes a tool call emitted by the AI service.

```
type t_chat_message_tool_call is record(
    id                             varchar2(255),
    name                           varchar2(255),
    args                           clob,
    args_json                      sys.json_object_t
);
```

t_chat_message_tool_calls

`t_chat_message_tool_calls` describes a collection of tool calls.

```
type t_chat_message_tool_calls is table of t_chat_message_tool_call;
```

t_chat_messages

`t_chat_messages` describes a collection of chat history entries.

```
type t_chat_messages is table of t_chat_message index by pls_integer;
```

t_chat_request

`t_chat_request` describes a normalized chat request passed into response handlers.

```
type t_chat_request is record(
    service_id                     number,
    system_prompt                  clob,
    messages                       t_chat_messages,
    tools                          t_tools,
    temperature                    number,
    response_json_schema           clob
);
```

t_chat_response

`t_chat_response` describes a normalized chat response returned from AI providers.

```
type t_chat_response is record(
    type                           t_response_type,
    error                          t_response_error,
    refusal                        varchar2(32767),
    message                        t_chat_message,
    input_tokens                   number,
    output_tokens                  number,
    total_tokens                   number
);
```

t_chat_response_handler_param

`t_chat_response_handler_param` describes the read-only input passed into a response handler procedure.

```
type t_chat_response_handler_param is record(
    invocation                     pls_integer,
    request                        t_chat_request,
    pending_tool_calls             t_chat_message_tool_calls
);
```

t_chat_response_handler_result

`t_chat_response_handler_result` describes the read-write output passed into a response handler procedure.

```
type t_chat_response_handler_result is record(
    response                       t_chat_response,
    messages                       t_chat_messages,
    early_exit                     boolean
);
```

t_chat_role

`t_chat_role` describes chat role values used in `t_chat_message`.

```
subtype t_chat_role is varchar2(10);
```

| Name               | Value         | Description                             |
|:-------------------|:--------------|:----------------------------------------|
| `c_role_assistant` | `'assistant'` | Role constant for assistant messages.   |
| `c_role_system`    | `'system'`    | Role constant for system messages.      |
| `c_role_tool`      | `'tool'`      | Role constant for tool result messages. |
| `c_role_user`      | `'user'`      | Role constant for end user messages.    |

t_detail_level

`t_detail_level` describes attachment detail levels understood by support AI providers.

```
subtype t_detail_level is varchar2(15);
```

| Name | Value | Description |
|:---|:---|:---|
| `c_detail_level_auto` | `'auto'` | Automatic provider-controlled detail level for attachment processing |
| `c_detail_level_high` | `'high'` | High detail level for attachment processing |
| `c_detail_level_low` | `'low'` | Low detail level for attachment processing |

t_notification

`t_notification` describes a notification returned from a tool execution.

```
type t_notification is record(
    type                           t_notification_type,
    content                        varchar2(32767)
);
```

t_notification_type

`t_notification_type` describes notification types returned from the tool execution.

```
subtype t_notification_type is varchar2(10);
```

| Name | Value | Description |
|:---|:---|:---|
| `c_notification_type_error` | `'error'` | Error notification type |
| `c_notification_type_generic` | `null` | Notification type indicating no explicit severity |
| `c_notification_type_info` | `'info'` | Informational notification type |
| `c_notification_type_success` | `'success'` | Success notification type |
| `c_notification_type_warning` | `'warning'` | Warning notification type |

t_notifications

`t_notifications` describes a collection of notifications.

```
type t_notifications is table of t_notification;
```

t_response_error

`t_response_error` describes recoverable AI response error types.

```
subtype t_response_error is varchar2(20);
```

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Constants for t_response_error" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d16692e479" style="text-align: left;" data-valign="bottom" width="0%">Name</th>
<th id="d16692e481" style="text-align: left;" data-valign="bottom" width="0%">Value</th>
<th id="d16692e483" style="text-align: left;" data-valign="bottom" width="0%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d16692e487" style="text-align: left;" data-valign="top" width="0%" headers="d16692e479 "><code class="codeph">c_resp_err_content_filter</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e487 d16692e481 "><code class="codeph">'content_filter'</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e487 d16692e483 "><p>Recoverable response error indicating provider-side content filtering.</p>
<p>Maps to <code class="codeph">e_content_filter</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d16692e502" style="text-align: left;" data-valign="top" width="0%" headers="d16692e479 "><code class="codeph">c_resp_err_generic</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e502 d16692e481 "><code class="codeph">'generic'</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e502 d16692e483 "><p>Generic response error raised when no more specific error type applies.</p>
<p>Maps to <code class="codeph">e_service_error</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d16692e517" style="text-align: left;" data-valign="top" width="0%" headers="d16692e479 "><code class="codeph">c_resp_err_invalid_response</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e517 d16692e481 "><code class="codeph">'invalid_response'</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e517 d16692e483 "><p>Recoverable response error indicating invalid JSON content.</p>
<p>Maps to <code class="codeph">e_invalid_json_response</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d16692e532" style="text-align: left;" data-valign="top" width="0%" headers="d16692e479 "><code class="codeph">c_resp_err_invalid_tool_call</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e532 d16692e481 "><code class="codeph">'invalid_tool_call'</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e532 d16692e483 "><p>Recoverable response error indicating an invalid tool call payload.</p>
<p>Maps to <code class="codeph">e_invalid_json_tool_call</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d16692e547" style="text-align: left;" data-valign="top" width="0%" headers="d16692e479 "><code class="codeph">c_resp_err_max_length</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e547 d16692e481 "><code class="codeph">'max_length'</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e547 d16692e483 "><p>Recoverable response error indicating the model hit a maximum length limit.</p>
<p>Maps to <code class="codeph">e_max_length</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d16692e562" style="text-align: left;" data-valign="top" width="0%" headers="d16692e479 "><code class="codeph">c_resp_err_refusal</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e562 d16692e481 "><code class="codeph">'refusal'</code></td>
<td style="text-align: left;" data-valign="top" width="0%" headers="d16692e562 d16692e483 "><p>Recoverable response error indicating the model refused the request.</p>
<p>Maps to <code class="codeph">e_refusal_filter</code>.</p></td>
</tr>
</tbody>
</table>

t_response_type

`t_response_type` describes high-level chat response types.

```
subtype t_response_type is varchar2(10);
```

| Name | Value | Description |
|:---|:---|:---|
| `c_response_type_complete` | `'complete'` | Response type indicating completion without additional tool calls. |
| `c_response_type_error` | `'error'` | Response type indicating an error. |
| `c_response_type_tool_calls` | `'tool_calls'` | Response type indicating pending tool calls. |

t_tool

`t_tool` describes a tool definition passed to `CHAT` or `GENERATE`.

```
type t_tool is record(
    name                           varchar2(64),
    description                    varchar2(32767),
    parameters                     t_tool_parameters,
    parameters_json_schema         clob,
    callback_procedure             varchar2(255)
);
```

t_tool_exec_param

`t_tool_exec_param` describes tool execution input passed to a callback procedure.

```
type t_tool_exec_param is record(
    tool                           t_tool,
    args                           clob,
    args_json                      sys.json_object_t
);
```

t_tool_exec_result

`t_tool_exec_result` describes tool execution output returned from a callback procedure.

```
type t_tool_exec_result is record(
    result                         clob,
    early_exit                     boolean
);
```

t_tool_parameter

`t_tool_parameter` describes the tool parameter definition used in `t_tool`.

```
type t_tool_parameter is record(
    name                           varchar2(64),
    description                    varchar2(32767),
    data_type                      t_tool_parameter_data_type,
    is_required                    boolean,
    allowed_values                 apex_t_varchar2
);
```

t_tool_parameter_data_type

`t_tool_parameter_data_type` describes the tool parameter data types supported by `t_tool_parameter`.

```
subtype t_tool_parameter_data_type is varchar2(8);
```

| Name | Value | Description |
|:---|:---|:---|
| `c_tool_param_type_boolean` | `'BOOLEAN'` | Tool parameter data type for `BOOLEAN` values. |
| `c_tool_param_type_clob` | `'CLOB'` | Tool parameter data type for `CLOB` values. |
| `c_tool_param_type_number` | `'NUMBER'` | Tool parameter data type for `NUMBER` values. |
| `c_tool_param_type_varchar2` | `'VARCHAR2'` | Tool parameter data type for `VARCHAR2` values. |

t_tool_parameters

`t_tool_parameters` describes a collection of tool parameter definitions.

```
type t_tool_parameters is table of t_tool_parameter;
```

t_tools

`t_tools` describes a collection of tool definitions.

```
type t_tools is table of t_tool;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.2 CHAT Function Signature 1

This function chats with a Generative AI service given a prompt and potential earlier responses.

Syntax

```
APEX_AI.CHAT (
    p_agent_static_id   IN              VARCHAR2,
    p_prompt            IN              CLOB,
    p_messages          IN OUT NOCOPY   t_chat_messages )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_agent_static_id` | The static ID of the AI Agent defined under the application's Shared Components. |
| `p_prompt` | The user prompt. |
| `p_messages` | The responses from an earlier conversation. Responses are automatically added to `p_messages` for an easy conversational experience. |

Returns

The response for the given prompt.

Example

The following example chats with the assistant configured as `my-oracle-assistant`. In the first interaction, a system prompt is given. In later interactions, the context is passed to the generative AI service in the form of parameter `p_messages`.

```
DECLARE
  l_messages  apex_ai.t_chat_messages := apex_ai.c_chat_messages;
  l_response1 clob;
  l_response2 clob;
BEGIN
  l_response1 := apex_ai.chat(
    p_agent_static_id   => 'my-oracle-assistant',
    p_prompt            => 'What is Oracle APEX',
    p_messages          => l_messages );
  l_response2 := apex_ai.chat(
    p_agent_static_id   => 'my-oracle-assistant',
    p_prompt            => 'What is new in the latest release',
    p_messages          => l_messages );
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.3 CHAT Function Signature 2

This function chats with a generative AI service given a prompt and potential earlier responses.

Syntax

```
APEX_AI.CHAT (
    p_prompt                     IN              CLOB,
    p_system_prompt              IN              CLOB                DEFAULT NULL,
    p_service_static_id          IN              VARCHAR2            DEFAULT NULL,
    p_temperature                IN              NUMBER              DEFAULT NULL,
    p_messages                   IN OUT NOCOPY   t_chat_messages,
    p_tools                      IN              t_tools             DEFAULT NULL,
    p_response_handler_procedure IN              VARCHAR2            DEFAULT NULL,
    p_max_tool_roundtrips        IN              PLS_INTEGER         DEFAULT NULL )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_prompt` | The user prompt. |
| `p_system_prompt` | (Optional) The instructions defining the AI's role, rules, and behavior. |
| `p_service_static_id` | The Generative AI Service static ID. If not provided, uses the app's default AI service. |
| `p_temperature` | The temperature to use. How the temperature is interpreted depends on the generative AI service implementation. Higher temperatures result in more "creative" responses. See the documentation of the generative AI provider for details and allowed values. |
| `p_messages` | The responses from an earlier conversation. Responses are automatically added to `p_messages`. |
| `p_tools` | Optional collection of tool definitions the AI provider may call while generating a response. Tools enable function calling to retrieve additional data or trigger actions. |
| `p_response_handler_procedure` | Optional PL/SQL procedure invoked to post-process provider responses. Use to customize how tool calls or partial responses are handled before returning the final result. |
| `p_max_tool_roundtrips` | (Optional) Limit the number of network roundtrips that can be made when responding to tool calls. |

Returns

The response for the given prompt.

Example

The following example chats with the configured Generative AI Service `MY_AI_SERVICE`. In the first interaction, a system prompt is given. In further interactions, the context is passed to the Generative AI service in the form of parameter `p_messages`.

```
DECLARE
  l_messages  apex_ai.t_chat_messages := apex_ai.c_chat_messages;
  l_response1 clob;
  l_response2 clob;
BEGIN
  l_response1 := apex_ai.chat(
    p_prompt            => 'What is Oracle APEX',
    p_system_prompt     => 'I am an expert in low-code Application Platforms',
    p_service_static_id => 'MY_AI_SERVICE',
    p_messages          => l_messages );
  l_response2 := apex_ai.chat(
    p_prompt            => 'What is new in the latest release',
    p_service_static_id => 'MY_AI_SERVICE',
    p_messages          => l_messages );
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.4 CHAT Function Signature 3 (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

Use [CHAT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-1.html#GUID-F9B1F1EE-A8C4-4FE1-9F20-8532C77B36D9) instead.

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
| `p_config_static_id` | The static ID of the AI Agent. |
| `p_prompt` | The user prompt. |
| `p_messages` | The chat history that is updated with the provider response. |

Returns

The response for the given prompt.

Example

For an example, see [CHAT Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.CHAT-Function-Signature-1.html#GUID-F9B1F1EE-A8C4-4FE1-9F20-8532C77B36D9).

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.5 GENERATE Function Signature 1

This function generates a response for a given prompt based on an AI Agent.

If the Agent has Response Format set to "JSON Object", this function returns a stringified JSON object. Starting with Oracle AI Database 26ai, the incoming JSON object is automatically validated against the agent's JSON Schema. For earlier database versions, Oracle recommends validating the JSON object programmatically before further processing.

Syntax

```
FUNCTION apex_ai.generate (
    p_agent_static_id   IN               VARCHAR2,
    p_prompt            IN               CLOB,
    p_attachments       IN               t_attachments   DEFAULT NULL )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_agent_static_id` | The static ID of the AI Agent defined under the application's Shared Components. |
| `p_prompt` | The user prompt. |
| `p_attachments` | An optional collection of file attachments. Whether a specific file type is supported depends on the AI provider and model. |

Returns

The response for the given prompt.

Example

The following example generates a response using the AI service configured via AI Agent with static ID `low_code_expert`.

```
DECLARE
    l_response clob;
BEGIN
    l_response :=
        apex_ai.generate (
            p_prompt            =>'What is Oracle APEX',
            p_agent_static_id   =>'low_code_expert' );
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.6 GENERATE Function Signature 2

This function generates a response for a given prompt.

When in JSON mode, this function returns a stringified JSON object.

Syntax

```
FUNCTION apex_ai.generate (
    p_prompt                         IN   CLOB,
    p_system_prompt                  IN   CLOB             DEFAULT NULL,
    p_service_static_id              IN   VARCHAR2         DEFAULT NULL,
    p_temperature                    IN   NUMBER           DEFAULT NULL,
    p_attachments                    IN   t_attachments    DEFAULT NULL,
    p_response_json_schema           IN   CLOB             DEFAULT NULL,
    p_tools                          IN   t_tools          DEFAULT NULL,
    p_response_handler_procedure     IN   VARCHAR2         DEFAULT NULL,
    p_max_tool_roundtrips            IN   PLS_INTEGER      DEFAULT NULL )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_prompt` | The user prompt. |
| `p_system_prompt` | (Optional) The instructions defining the AI's role, rules, and behavior. |
| `p_service_static_id` | The Generative AI Service static ID If not provided, the app's default AI Service is used. |
| `p_temperature` | The temperature to use. How the temperature is interpreted depends on the Generative AI service implementation. Higher temperatures result in more 'creative' responses. See the documentation of the Generative AI provider for details and allowed values. |
| `p_attachments` | An optional collection of file attachments. Whether a specific file type is supported depends on the AI provider and model. |
| `p_response_json_schema` | Optionally provide a JSON Schema which the AI provider follows when generating the response. |
| `p_tools` | Optional collection of tool definitions the AI provider may call while generating a response. Tools enable function calling to retrieve additional data or trigger actions. |
| `p_response_handler_procedure` | Advanced. Optional PL/SQL procedure invoked to post-process provider responses. Use to customize how tool calls or partial responses are handled before returning the final result. |
| `p_max_tool_roundtrips` | (Optional) Limit the number of network roundtrips that can be made when responding to tool calls. |

Returns

The response for the given prompt.

Example 1

The following example generates a response with the configured Generative AI Service `MY_AI_SERVICE` for the given prompt.

```
declare
    l_response clob;
begin
    l_response :=
        apex_ai.generate (
            p_prompt            => 'What is Oracle APEX?',
            p_system_prompt     => 'You are an expert in Low Code Application Platforms',
            p_service_static_id => 'MY_AI_SERVICE' );
end;
```

Example 2

The following example generates a JSON object with the configured Generative AI Service `MY_AI_SERVICE` for the given prompt.

```
 declare
     l_response clob;
 begin
     l_response :=
         apex_ai.generate (
             p_prompt                => 'What is Oracle APEX?',
             p_system_prompt         => 'You are an expert in Low Code Application Platforms',
             p_service_static_id     => 'MY_AI_SERVICE',
             p_response_json_schema  => q'~{
                 "type": "object",
                 "properties": {
                     "description": {
                         "type": "string"
                     },
                     "releaseYear": {
                         "type": "integer"
                     },
                     "tags": {
                         "type": "array",
                         "items": {
                             "type": "string"
                         }
                     }
                 },
                 "required": [
                     "description",
                     "releaseYear",
                     "tags"
                 ],
                 "additionalProperties": false
             }~' );
 end;
```

Example 3

The following example shows how to provide a tool to the LLM to execute as needed when coming up with a response. Each tool must specify a `callback_procedure` parameter, specifying the name of the stored procedure responsible for handling the tool call.

```
 set serveroutput on;

 create or replace procedure convert_currency (
     p_param  in            apex_ai.t_tool_exec_param,
     p_result in out nocopy apex_ai.t_tool_exec_result )
 as
 begin
     p_result.result := to_char (
         my_pkg.convert_currency (
             p_amount    => p_param.args_json.get_number( 'amount' ),
             p_from      => p_param.args_json.get_string( 'from_currency' ),
             p_to        => p_param.args_json.get_string( 'to_currency' ),
             p_date      => nvl( to_date( p_param.args_json.get_string( 'as_of_date' ), 'YYYY-MM-DD' ), sysdate ) ) );
 end convert_currency;
 /
 show errors;

 declare
     l_response clob;
 begin
     apex_session.create_session (
         p_app_id    => 100,
         p_page_id   => 1,
         p_username  => 'USER' );

     l_response :=
         apex_ai.generate (
             p_service_static_id => 'MY_AI_SERVICE',
             p_prompt            => 'How much is 100 USD in Euros?',
             p_tools             =>
                 apex_ai.t_tools (
                     apex_ai.t_tool (
                         name        => 'convert_currency',
                         description => 'Converts money between currencies using an exchange rate for a given date (or latest available)',
                         parameters  =>
                             apex_ai.t_tool_parameters (
                                 apex_ai.t_tool_parameter (
                                     name        => 'amount',
                                     data_type   => apex_ai.c_tool_param_type_number ),
                                 apex_ai.t_tool_parameter (
                                     name        => 'from_currency',
                                     description => 'ISO 4217 currency code to convert from (e.g., "USD").' ),
                                 apex_ai.t_tool_parameter (
                                     name        => 'to_currency',
                                     description => 'ISO 4217 currency code to convert to (e.g., "EUR").'  ),
                                 apex_ai.t_tool_parameter (
                                     name        => 'as_of_date',
                                     description => 'Optional date for the rate in YYYY-MM-DD format. If omitted, the latest rate will be returned.',
                                     is_required => false ) ),
                         callback_procedure  => 'convert_currency' ) ) );

     sys.dbms_output.put_line( l_response );

     apex_session.delete_session;
 exception
     when others then
         apex_session.delete_session;
         raise;
 end;
 /
```

Example 4

Alternatively, a `response_handler_procedure` can be provided, responsible for handling all incoming tool calls.

```
 set serveroutput on;

 create or replace procedure response_handler_proc (
     p_param     in              apex_ai.t_chat_response_handler_param,
     p_result    in out nocopy   apex_ai.t_chat_response_handler_result )
 as
     l_result clob;
 begin
     if p_result.response.type = apex_ai.c_response_type_tool_calls then
         for i in 1 .. p_param.pending_tool_calls.count loop
             if p_param.pending_tool_calls( i ).name = 'convert_currency' then
                 l_result := to_char (
                     my_pkg.convert_currency (
                         p_amount    => p_param.pending_tool_calls( i ).args_json.get_number( 'amount' ),
                         p_from      => p_param.pending_tool_calls( i ).args_json.get_string( 'from_currency' ),
                         p_to        => p_param.pending_tool_calls( i ).args_json.get_string( 'to_currency' ),
                         p_date      => nvl( to_date( p_param.pending_tool_calls( i ).args_json.get_string( 'as_of_date' ), 'YYYY-MM-DD' ), sysdate ) ) );
             end if;

             apex_ai.set_tool_result (
                 p_response_handler_param    => p_param,
                 p_response_handler_result   => p_result,
                 p_tool_call                 => p_param.pending_tool_calls( i ),
                 p_result                    => l_result );
         end loop;
     end if;
 end response_handler_proc;
 /
 show errors;

 declare
     l_response clob;
 begin
     apex_session.create_session (
         p_app_id    => 100,
         p_page_id   => 1,
         p_username  => 'USER' );

     l_response :=
         apex_ai.generate (
             p_service_static_id => 'MY_AI_SERVICE',
             p_prompt            => 'How much is 100 USD in Euros?',
             p_tools             =>
                 apex_ai.t_tools (
                     apex_ai.t_tool (
                         name        => 'convert_currency',
                         description => 'Converts money between currencies using an exchange rate for a given date (or latest available)',
                         parameters  =>
                             apex_ai.t_tool_parameters (
                                 apex_ai.t_tool_parameter (
                                     name        => 'amount',
                                     data_type   => apex_ai.c_tool_param_type_number ),
                                 apex_ai.t_tool_parameter (
                                     name        => 'from_currency',
                                     description => 'ISO 4217 currency code to convert from (e.g., "USD").' ),
                                 apex_ai.t_tool_parameter (
                                     name        => 'to_currency',
                                     description => 'ISO 4217 currency code to convert to (e.g., "EUR").'  ),
                                 apex_ai.t_tool_parameter (
                                     name        => 'as_of_date',
                                     description => 'Optional date for the rate in YYYY-MM-DD format. If omitted, the latest rate will be returned.',
                                     is_required => false ) ) ) ),
             p_response_handler_procedure => 'response_handler_proc' );

     sys.dbms_output.put_line( l_response );

     apex_session.delete_session;
 exception
     when others then
         apex_session.delete_session;
         raise;
 end;
 /
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.7 GENERATE Function Signature 3 (Deprecated)

This function generates a response for a given prompt based on an AI Agent.

Note:

This API is deprecated and will be removed in a future release.

Instead, use [GENERATE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-1.html#GUID-AE40FBA1-4822-45B8-865D-43C29FE9901E).

Syntax

```
APEX_AI.GENERATE (
    p_config_static_id  IN              VARCHAR2,
    p_prompt            IN              CLOB )
    RETURN CLOB;
```

Parameters

| Parameter            | Description                    |
|:---------------------|:-------------------------------|
| `p_config_static_id` | The static ID of the AI Agent. |
| `p_prompt`           | The user prompt.               |

Returns

The response for the given prompt.

Example

For an example, see [GENERATE Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.GENERATE-Function-Signature-1.html#GUID-AE40FBA1-4822-45B8-865D-43C29FE9901E).

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.8 GET_AVAILABLE_TOKENS Function

Returns the available tokens for the given AI service. If no AI service is provided, returns available tokens for the default AI service of the current application. Otherwise, returns available tokens for the current workspace.

Syntax

```
APEX_AI.GET_AVAILABLE_TOKENS (
    p_service_static_id     IN VARCHAR2    DEFAULT NULL )
RETURN NUMBER;
```

Parameters

| Parameter             | Description                          |
|:----------------------|:-------------------------------------|
| `p_service_static_id` | The Generative AI service static ID. |

Returns

Available token count which can be consumed before the configured limit is reached. NULL if no limits have been configured.

Example 1

The following example returns the amount of tokens available for a given AI service.

```
DECLARE
    l_available_tokens number;
BEGIN
    l_available_tokens := apex_ai.get_available_tokens(
        p_service_static_id => 'my_ai_service' );
sys.dbms_output.put_line( l_available_tokens || ' are available.' );
END;
```

Example 2

The following example returns the amount of tokens available for all AI services.

```
DECLARE
    l_available_tokens number;
BEGIN
    l_available_tokens := apex_ai.get_available_tokens;

sys.dbms_output.put_line( l_available_tokens
|| ' are available for the current app's default AI service.' );
END;
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.9 GET_VECTOR_EMBEDDINGS Function Signature 1

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.10 GET_VECTOR_EMBEDDINGS Function Signature 2

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.11 GET_VECTOR_EMBEDDINGS Function Signature 3

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.12 IS_ENABLED Function

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.13 IS_USER_CONSENT_NEEDED Function

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.14 REVOKE_USER_CONSENT Procedure

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.15 REVOKE_USER_CONSENT_FOR_ALL Procedure

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.16 SET_TOOL_RESULT Procedure Signature 1

This procedure dynamically changes the result of the "Execute Server-side Code" and "Retrieve Data" Generative AI Tools.

Both tool types can show a declarative notification message upon completion. To override this notification message or its type, pass `p_notification_message` or `p_notification_type`.

The "Execute Server-side Code" tool does not typically return a value, with "success" being passed under the hood. To override this message, pass a custom `p_result`.

Syntax

```
PROCEDURE apex_ai.set_tool_result (
    p_result                 IN   CLOB                 DEFAULT NULL,
    p_notification_message   IN   VARCHAR2             DEFAULT NULL,
    p_notification_type      IN   t_notification_type  DEFAULT NULL,
    p_early_exit             IN   BOOLEAN              DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_result` | A dynamic tool call result. Only relevant in the "Execute Server-side Code" tool which does not usually return a result. |
| `p_notification_message` | An optional notification message, overriding the declarative notification message |
| `p_notification_type` | An optional notification type, overriding the declarative notification type |
| `p_early_exit` | Whether to short circuit the communication and not return to the AI Service upon tool call completion. Defaults to `false`. |

Example

If the tool action cannot be completed, provides both a visual notification and a tool response message to maintain integrity of the chat history, which is important for subsequent requests. Also passing `p_early_exit`, as to not return to the AI Service, therefore sparing one network request, and lowering the response time.

```
apex_ai.set_tool_result (
     p_result                => 'Email could not be sent',
     p_notification_message  => 'Email could not be sent',
     p_notification_type     => apex_ai.c_notification_type_error,
     p_early_exit            => true );
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.17 SET_TOOL_RESULT Procedure Signature 2

Use this procedure within Response Handler procedures to set a tool call result.

Syntax

```
PROCEDURE apex_ai.set_tool_result (
    p_response_handler_param     IN               t_chat_response_handler_param,
    p_response_handler_result    IN OUT NOCOPY    t_chat_response_handler_result,
    p_tool_call                  IN               t_chat_message_tool_call,
    p_result                     IN               CLOB );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_response_handler_param` | The response handler parameter. |
| `p_response_handler_result` | The response handler result. |
| `p_tool_call` | The specific tool call for which to provide a result. |
| `p_result` | The tool result. |

Example

```
 set serveroutput on;

 create or replace procedure response_handler_proc (
     p_param     in              apex_ai.t_chat_response_handler_param,
     p_result    in out nocopy   apex_ai.t_chat_response_handler_result )
 as
 begin
     if p_result.response.type = apex_ai.c_response_type_tool_calls then
         for i in 1 .. p_param.pending_tool_calls.count loop
             if p_param.pending_tool_calls( i ).name = 'get_secret_number' then
                 apex_ai.set_tool_result (
                     p_response_handler_param    => p_param,
                     p_response_handler_result   => p_result,
                     p_tool_call                 => p_param.pending_tool_calls( i ),
                     p_result                    => '42' );
             end if;
         end loop;
     end if;
 end response_handler_proc;
 /
 show errors;

 declare
     l_response clob;
 begin
     apex_session.create_session (
         p_app_id    => 100,
         p_page_id   => 1,
         p_username  => 'USER' );

     l_response :=
         apex_ai.generate (
             p_service_static_id => 'my_ai_service',
             p_prompt            => 'What''s the secret number?',
             p_tools             =>
                 apex_ai.t_tools (
                     apex_ai.t_tool (
                         name    => 'get_secret_number' ) ),
             p_response_handler_procedure => 'response_handler_proc' );

     sys.dbms_output.put_line( l_response );

     apex_session.delete_session;
 exception
     when others then
         apex_session.delete_session;
         raise;
 end;
 /
```

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)

------------------------------------------------------------------------

## 3.18 SET_USER_CONSENT Procedure

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

**Parent topic:** [APEX_AI](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_AI.html#GUID-9451C383-56B9-411D-8BAF-37F437B95FB1)
