<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/changes-in-this-release.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 1 Changes in Release 24.2 for Oracle APEX API Reference

All content in Oracle APEX API Reference has been updated to reflect release 24.2 functionality.

New Features and Updates

The following topics have been added or updated for this release:

- APEX_AI (Updates)
  - CHAT Function Signature 1 (Updated) - Parameter `p_prompt` is now CLOB to accept larger texts.
  - CHAT Function Signature 2 (New) - Chats with a generative AI service given a prompt and potential earlier responses.
  - GENERATE Function Signature 1 (Updated) - New parameter `p_system_prompt`. Parameter `p_prompt` is now CLOB to accept larger texts.
  - GENERATE Function Signature 2 (New) - Generates a response for a given prompt.
  - GET_VECTOR_EMBEDDINGS Function Signatures 1, 2, and 3 (New) - Receives the embedding from a vector provider for a given term for Vector Search.

<!-- -->

- APEX_APPLICATION_ADMIN (Updates)
  - SET_REMOTE_SERVER Procedure (New) - Sets the base URL, HTTPS host, and other attributes for remote servers.

<!-- -->

- APEX_CREDENTIAL (Updates)
  - SET_SCOPE Procedure (New) - Changes the "scope" attribute of a Web Credential.

<!-- -->

- APEX_EXEC (Updates)
  - Global Constants (Updated) - New DML Location constants `REGION_SOURCE`, `DUALITY_VIEW`, and `JSON_COLLECTION`. New Column and Filter constants for Vector Search: `c_filter_vector_type`, `c_data_type_array`, and `c_data_type_vector`, and new category of Vector Search subtypes.
  - ADD_FILTER Procedure (Updated) - New signature and parameters for Vector Search.
  - DESCRIBE_QUERY Function Signature 2 (Updated) - New parameters `p_duality_view_static_id` and `p_json_source_static_id`.
  - OPEN_DUALITY_VIEW_DML_CONTEXT Function (New) - Opens a DML context based on a Duality View source.
  - OPEN_JSON_SOURCE_DML_CONTEXT Function (New) - Opens a DML context based on a JSON source.
  - OPEN_QUERY_CONTEXT Function Signature 1 (Updated) - New parameters `p_duality_view_static_id` and `p_json_source_static_id`.
  - OPEN_QUERY_CONTEXT Function Signature 2 (Updated) - New parameter `p_control_break`.
  - OPEN_REST_SOURCE_QUERY Function (Updated) - New parameter `p_control_break`.
  - PURGE_JSON_SOURCE_CACHE Procedure (New) - Purge the local cache for a Duality View of JSON Sources based on REST Enabled SQL.
  - PURGE_DUALITY_VIEW_CACHE Procedure (New) - Purge the local cache for a Duality View of JSON Sources based on REST Enabled SQL.

<!-- -->

- APEX_EXPORT (Updates)
  - GET_APPLICATION Function (Updated) - New parameter `p_with_runtime_instances`.

<!-- -->

- APEX_HUMAN_TASK (Updates)
  - GET_LOV_TYPE Function (New) - Gets the list of value data for the task attribute type.
  - SET_INITIATOR_CAN_COMPLETE Procedure (New) - Updates the `initiator_can_Complete` attribute of a task.

<!-- -->

- APEX_INSTANCE_ADMIN (Updates)
  - Available Parameters (Updated) - Parameter `ALLOW_HOSTING_EXTENSIONS` can now be configured to host extensions and publish links to other workspaces. New parameters `OPENTELEMETRY_CLS_URL` and `OPENTELEMETRY_TOKEN_RELAY_URL`.
  - ADD_WORKSPACE Procedure (Updated) - New parameter `p_host_prefix`.
  - SET_PARAMETER Procedure (Updated) - New parameter `p_force`.

<!-- -->

- APEX_IR (Updates)
  - Constants and Data Types (New) - List of constants and data types used by the APEX_IR package.

<!-- -->

- APEX_LANG (Updates)
  - CREATE_MESSAGE Procedure (Updated) - New parameters `p_comment` and `p_metadata`.
  - GET_MESSAGE Function (New) - Translates text strings (or messages) generated from PL/SQL-stored procedures, functions, triggers, packaged procedures, and functions.
  - PUBLISH_APPLICATION Procedure (Updated) - New parameter `p_new_trans_application_id`.
  - UPDATE_MESSAGE Procedure Signature 2 (New) - Updates a translatable text message and its attributes for the specified application.

<!-- -->

- APEX_PAGE (Updates)
  - GET_URL Function (Updated) - New parameter `p_absolute_url`.

<!-- -->

- APEX_PLUGIN (Updates)
  - About Configuring Flexible Remote Servers in APEX (New) - Flexible remote servers use a configuration procedure to change the URL endpoint of the server.
  - Global Constants (Updated) - New subtype `t_escape_mode`.
  - Data Types (Updated) - New types `t_remote_server_info` and `t_remote_server_config`.
  - t_plugin_attributes (Updated) - New `get_varchar2` parameters `p_default_value`, `p_do_substitutions`, `p_do_serveronly_substitutions`, and `p_substitutions_escape_mode`. New functions `get_number` and `get_boolean`.
  - t_item (Updated) - New member `attributes`.

<!-- -->

- APEX_REGION (Updates)
  - GET_ID Function Signature 1 (New) - Gets the region ID based on the dom static ID.
  - GET_ID Function Signature 2 (New) - Gets the region ID based on the region name.

<!-- -->

- APEX_SHARED_COMPONENT (New) - APIs to work with shared components. Only available in full APEX installations.
  - Global Constants (New)
  - REFRESH Procedure (New)
  - PUBLISH Procedure (New)

<!-- -->

- APEX_STRING (Updates)
  - PLIST_EXISTS Function (New) - Returns whether a key exists in the property list.
  - PLIST_GET_KEY Function (New) - Gets the first property list key that maps to a given value.

<!-- -->

- APEX_UTIL (Updates)
  - DELETE_FEEDBACK Procedure (New) - Deletes feedback with the specified ID.
  - DELETE_FEEDBACK_ATTACHMENT Procedure (New) - Deletes the attachment of a feedback with the specified ID.
  - GET_APEX_OWNER Function (New) - Returns the name of the schema containing the APEX engine.
  - REPLY_TO_FEEDBACK Procedure (New) - Submits a reply to a feedback.

<!-- -->

- APEX_WORKFLOW (Updates)
  - GET_VARIABLE_CLOB_VALUE Function (New) - Gets the CLOB value of a workflow variable.
  - RESUME Procedure (Updated) - New parameter `p_activity_static_id`.

Deprecated and Desupported Features

The following APIs are deprecated as of this release:

- APEX_LANG
  - MESSAGE Function (Deprecated) - Use GET_MESSAGE instead.
- APEX_PLUGIN_UTIL
  - EXECUTE_PLSQL_CODE Procedure (Deprecated) - Use APEX_EXEC.EXECUTE_PLSQL Signature 1 or 2 instead.
- APEX_UTIL
  - CUSTOM_CALENDAR Procedure (Deprecated)
  - INCREMENT_CALENDAR Procedure (Deprecated)

See <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=HTMRN-GUID-657FF369-756E-4F31-96F9-B2D92C3DE084" target="_blank">Deprecated Features</a> and <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=HTMRN-GUID-4966D4CC-E23D-4B1D-AA8C-438233A2793A" target="_blank">Desupported Features</a> in Oracle APEX Release Notes.
