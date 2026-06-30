<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 9 APEX_APPROVAL (Deprecated)

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

The APEX_APPROVAL package provides APIs for the management of approvals and Human Tasks. This package includes functionality to create new Human Tasks for a user to approve as well as operations dealing with the lifecycle management and state handling of Human Tasks. This package is part of the Oracle APEX Workflow functionality.

- [Constants and Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.Constants-and-Data-Types.html#GUID-536A42B1-5099-467F-908F-A1C3C209D77B)
- [ADD_TASK_COMMENT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TASK_COMMENT-Procedure.html#GUID-A69F74B7-AC57-4615-B709-C77850BF7B7A)
- [ADD_TASK_POTENTIAL_OWNER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TASK_POTENTIAL_OWNER-Procedure.html#GUID-CCD5B305-BB5E-4C22-A414-5AB1A210DA49)
- [ADD_TO_HISTORY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_TO_HISTORY-Procedure.html#GUID-9B21340D-5897-468B-B8A6-2CC48721C7A9)
- [APPROVE_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APPROVE_TASK-Procedure.html#GUID-1EC3B9FF-B925-4BFB-BE54-4D208E6B0F71)
- [CANCEL_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CANCEL_TASK-Procedure.html#GUID-A470EEE9-CFA3-494C-928C-4C6517177FD9)
- [CLAIM_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CLAIM_TASK-Procedure.html#GUID-9FBB4450-E6A3-484B-BCA5-DF2F96009A3F)
- [COMPLETE_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COMPLETE_TASK-Procedure.html#GUID-E2879695-2496-44F9-AC0A-2B2E947A1D17)
- [CREATE_TASK Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_TASK-Function.html#GUID-12261F10-5D8D-42A6-ADD9-FD323DC44156)
- [DELEGATE_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELEGATE_TASK-Procedure.html#GUID-BE9387C9-5406-4C5F-A69D-4C183F094F5F)
- [GET_LOV_PRIORITY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LOV_PRIORITY-Function.html#GUID-4F10A434-D3B9-4DDE-A095-25C7E69434F1)
- [GET_LOV_STATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_LOV_STATE-Function.html#GUID-E681CE57-1CB1-48CB-872C-79A6229AAB09)
- [GET_NEXT_PURGE_TIMESTAMP Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.GET_NEXT_PURGE_TIMESTAMP-Function.html#GUID-3B2794D9-4735-476A-870A-08581C40333E)
- [GET_TASK_DELEGATES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_DELEGATES-Function.html#GUID-5711AEF9-45D6-4FCC-9A40-85C5AC726144)
- [GET_TASK_HISTORY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_HISTORY-Function.html#GUID-4D1838F7-3222-471F-ADF5-BD5EF919F125)
- [GET_TASK_PARAMETER_OLD_VALUE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PARAMETER_OLD_VALUE-Function.html#GUID-6391B97D-C26D-4A41-999D-02BDADE14D40)
- [GET_TASK_PARAMETER_VALUE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PARAMETER_VALUE-Function.html#GUID-ACCCB320-9E6E-4C5A-8E06-5BFF77B272CE)
- [GET_TASK_PRIORITIES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASK_PRIORITIES-Function.html#GUID-977C6E3B-8F10-42AA-A052-FAE9F92CC506)
- [GET_TASKS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_TASKS-Function.html#GUID-D20D814B-29CD-40B8-BD8A-2D0976ADC1A8)
- [HANDLE_TASK_DEADLINES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HANDLE_TASK_DEADLINES-Procedure.html#GUID-E0FD697C-977E-4C69-8004-FB0CF21E4A8F)
- [HAS_TASK_PARAM_CHANGED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/HAS_TASK_PARAM_CHANGED-Function.html#GUID-2A5B6EA2-0BDF-474F-BA92-1E6F70FF3C45)
- [IS_ALLOWED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_ALLOWED-Function.html#GUID-D1732D81-A3DD-4910-8753-465EDB058248)
- [IS_BUSINESS_ADMIN Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_BUSINESS_ADMIN-Function.html#GUID-B193C8C6-A5C1-4360-BDA3-87A90EF26742)
- [IS_OF_PARTICIPANT_TYPE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_OF_PARTICIPANT_TYPE-Function.html#GUID-9736830F-C3CB-4FD5-81AA-8C1D4DE5E4BB)
- [REJECT_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REJECT_TASK-Procedure.html#GUID-83D225BB-D838-4F09-AB6D-000B59238506)
- [RELEASE_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RELEASE_TASK-Procedure.html#GUID-1F5801D8-6284-4A03-B7ED-B703363ED46E)
- [REMOVE_POTENTIAL_OWNER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REMOVE_POTENTIAL_OWNER-Procedure.html#GUID-4A688074-5BEF-4A66-AE30-091FB069BAE5)
- [RENEW_TASK Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RENEW_TASK-Function.html#GUID-30276716-D04A-465F-99AC-36CDA949A7B5)
- [REQUEST_MORE_INFORMATION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REQUEST_MORE_INFORMATION-Procedure.html#GUID-3A0AE94D-5C0C-417E-B651-3A7E4497B84D)
- [SET_INITIATOR_CAN_COMPLETE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_INITIATOR_CAN_COMPLETE-Procedure.html#GUID-EAA186C8-D743-412F-844A-C4E908294E43)
- [SET_TASK_DUE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_DUE-Procedure.html#GUID-951A567E-CF0D-4B0B-9189-CE46EF4C1CF4)
- [SET_TASK_PARAMETER_VALUES Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_PARAMETER_VALUES-Procedure.html#GUID-7270BA5A-127A-4A7A-9E7D-0EF1BA0583D0)
- [SET_TASK_PRIORITY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SET_TASK_PRIORITY-Procedure.html#GUID-11B98BBF-0305-4896-AD45-A4E5ED621ED4)
- [SUBMIT_INFORMATION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUBMIT_INFORMATION-Procedure.html#GUID-30A21FB0-6C5E-447C-BF8E-16C8C2CCCC4E)

------------------------------------------------------------------------

## 9.1 Constants and Data Types

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

The APEX_APPROVAL package uses the following constants and data types.

Task Types

```
c_task_type_approval         constant t_task_type  := 'APPROVAL';
c_task_type_action           constant t_task_type  := 'ACTION';
```

Task List Context Types

```
c_context_my_tasks           constant t_task_list_context := 'MY_TASKS';
c_context_admin_tasks        constant t_task_list_context := 'ADMIN_TASKS';
c_context_initiated_by_me    constant t_task_list_context := 'INITIATED_BY_ME';
c_context_single_task        constant t_task_list_context := 'SINGLE_TASK';
```

Task Definition Participant Types

```
c_task_potential_owner       constant t_task_participant_type := 'POTENTIAL_OWNER';
c_task_business_admin        constant t_task_participant_type := 'BUSINESS_ADMIN';
```

Task Definition Participant Identity Types

```
c_task_identity_type_user    constant t_task_identity_type := 'USER';
```

Task (Instance) Priority Constants

```
c_task_priority_lowest       constant integer := 5;
c_task_priority_low          constant integer := 4;
c_task_priority_medium       constant integer := 3;
c_task_priority_high         constant integer := 2;
c_task_priority_urgent       constant integer := 1;
```

Task (Instance) States

```
c_task_state_unassigned      constant t_task_state := 'UNASSIGNED';
c_task_state_assigned        constant t_task_state := 'ASSIGNED';
c_task_state_completed       constant t_task_state := 'COMPLETED';
c_task_state_cancelled       constant t_task_state := 'CANCELLED';
c_task_state_failed          constant t_task_state := 'FAILED';
c_task_state_errored         constant t_task_state := 'ERRORED';
c_task_state_expired         constant t_task_state := 'EXPIRED';
c_task_state_info_requested  constant t_task_state := 'INFO_REQUESTED';
```

Task (Instance) Outcomes

```
c_task_outcome_approved      constant t_task_outcome := 'APPROVED';
c_task_outcome_rejected      constant t_task_outcome := 'REJECTED';
```

Task (Instance) Operations

```
c_task_op_approve            constant t_task_operation := 'APPROVE_TASK';
c_task_op_reject             constant t_task_operation := 'REJECT_TASK';
c_task_op_complete           constant t_task_operation := 'COMPLETE_TASK';
c_task_op_claim              constant t_task_operation := 'CLAIM_TASK';
c_task_op_delegate           constant t_task_operation := 'DELEGATE_TASK';
c_task_op_renew              constant t_task_operation := 'RENEW_TASK';
c_task_op_release            constant t_task_operation := 'RELEASE_TASK';
c_task_op_cancel             constant t_task_operation := 'CANCEL_TASK';
c_task_op_set_priority       constant t_task_operation := 'SET_TASK_PRIORITY';
c_task_op_add_comment        constant t_task_operation := 'ADD_TASK_COMMENT';
c_task_op_add_owner          constant t_task_operation := 'ADD_TASK_POTENTIAL_OWNER';
c_task_op_request_info       constant t_task_operation := 'REQUEST_INFO';
c_task_op_submit_info        constant t_task_operation := 'SUBMIT_INFO';
c_task_op_set_due_date       constant t_task_operation := 'SET_DUE_DATE';
c_task_op_remove_owner       constant t_task_operation := 'REMOVE_POTENTIAL_OWNER';
c_task_op_set_params         constant t_task_operation := 'SET_TASK_PARAMS';
```

Task (Instance) date formats

```
c_canonical_date_format      constant varchar2(16)     := 'YYYYMMDDHH24MISS';
```

Task Parameters Default

```
c_empty_task_parameters t_task_parameters;
```

Global Data Types

```
subtype t_task_participant_type is varchar2(15);
subtype t_task_identity_type    is varchar2(32);
subtype t_task_type             is varchar2(32);
subtype t_task_outcome          is varchar2(32);
subtype t_task_state            is varchar2(15);
subtype t_task_operation        is varchar2(30);
subtype t_task_list_context     is varchar2(15);
```

Data Types

Task Parameter (Value)

```
type t_task_parameter is record (
    static_id                varchar2(32767),
    string_value             varchar2(32767)
);
```

| Attribute | Description |
|:---|:---|
| `static_id` | The static ID of the parameter. This ID must match the static ID of the corresponding parameter in the task definition. |
| `string_value` | The value of the parameter as a string. |

Task Vacation Rules Input Record

```
type t_vacation_rule_input is record (
    task_def_static_id    varchar2(255),
    task_id               number,
    priority              number,
    --
    -- pass in one or more participants for whom the vacation rules are defined.
    original_participants t_task_participants,
    parameters            t_task_parameters default c_empty_task_parameters,
    due_date              timestamp with time zone,
    detail_pk             varchar2(4000) );

--
-- define a new array with "participant change" information.
type t_task_participant_change is record(
    old_participant         t_task_participant,
    new_participant         t_task_participant,
    change_reason           varchar2(4000) );
```

| Attribute | Description |
|:---|:---|
| `task_def_static_id` | The Static ID of the task definition. |
| `task_id` | The ID of the task instance. |
| `priority` | The task priority. |
| `original_participant` | The original participant(s) of the task for whom the vacation rule is defined. |
| `parameters` | The parameters of the task instance. |
| `due_date` | The due date of the task instance. |
| `detail_pk` | The Primary Key value of the system of records associated with this task instance. |

Task Vacation Rules Output Record

```
type t_vacation_rule_result is record (
    has_participant_changes  boolean    default false,
    participant_changes      t_task_participant_changes );
```

| Attribute | Description |
|:---|:---|
| `has_participant_changes` | `TRUE` if alternate participant(s) exist for at least one of the original task participants, `FALSE` otherwise. |
| `participant_changes` | An array of the task participant change information. |

Collection of Task Participant Change Information

```
type t_task_participant_changes is table of t_task_participant_change index by pls_integer;
```

Collection of Task Parameter Values

```
type t_task_parameters is table of t_task_parameter index by pls_integer;
```

Collection of Task Participant Types

```
type t_task_participant_types is table of t_task_participant_type
    index by pls_integer;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.2 ADD_TASK_COMMENT Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure adds a comment to a task. Any potential owner or business administrator of a Task can add comments to a Task. Comments are useful as additional information regarding a Task. For example, a manager may add her notes to a Task she is working on before delegating the Task.

Syntax

```
APEX_APPROVAL.ADD_TASK_COMMENT (
    p_task_id                IN NUMBER,
    p_text                   IN VARCHAR2 );
```

Parameters

| Parameter   | Description       |
|:------------|:------------------|
| `p_task_id` | The Task ID.      |
| `p_text`    | The comment text. |

Example

```
BEGIN
     add_task_comment(
         p_task_id => 1234,
         p_text    => 'Please review and approve');
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.3 ADD_TASK_POTENTIAL_OWNER Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure adds a new potential owner to a task. Only a Business Administrator for the task can invoke this procedure. The procedure throws an error if the task is in `Completed` or `Errored` state.

Syntax

```
APEX_APPROVAL.ADD_TASK_POTENTIAL_OWNER (
    p_task_id                IN NUMBER,
    p_potential_owner        IN VARCHAR2,
    p_identity_type          IN t_task_identity_type default c_task_identity_type_user );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d43678e86" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d43678e88" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d43678e92" style="text-align: left;" data-valign="top" width="42%" headers="d43678e86 "><code class="codeph">p_task_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d43678e92 d43678e88 ">The Task ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d43678e98" style="text-align: left;" data-valign="top" width="42%" headers="d43678e86 "><code class="codeph">p_potential_owner</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d43678e98 d43678e88 ">The potential owner.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d43678e104" style="text-align: left;" data-valign="top" width="42%" headers="d43678e86 "><code class="codeph">p_identity_type</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d43678e104 d43678e88 ">The identity type of the potential owner. Default is <code class="codeph">USER</code>.
<p>Note:</p>
As of this release, the only supported identity type is <code class="codeph">USER</code>. Additional options will be added in a future release.
</div></td>
</tr>
</tbody>
</table>

Example

The following example adds user `STIGER` as potential owner for Task ID `1234`.

```
BEGIN
     apex_approval.add_task_potential_owner(
         p_task_id         => 1234,
         p_potential_owner => 'STIGER'
     );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.4 ADD_TO_HISTORY Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure adds a log entry into the task history and is to be used within task action code.

Syntax

```
APEX_APPROVAL.ADD_TO_HISTORY (
    p_message IN VARCHAR2 )
```

Parameters

| Parameter   | Description                              |
|:------------|:-----------------------------------------|
| `p_message` | Message to add into to the task history. |

Example

The following example demonstrates how to write log information. The task action uses `select * from emp` as the action source query.

```
BEGIN
    apex_approval.add_to_history(
        p_message => 'Approved leave for employee with empno: ' || :EMPNO );
    my_logic_package.update_emp_leave_balance(
        p_empno        => :EMPNO,
        p_no_of_days   => :NO_OF_DAYS);
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.5 APPROVE_TASK Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure approves a Task. Only the potential owner or actual owner of the task can invoke this procedure. This procedure moves the state of the Task to `Completed` and sets the outcome of the Task to `Approved`.

This is a convenience procedure and equivalent to calling `complete_task` with outcome `apex_approval.c_task_outcome_approved`.

See Also:

[COMPLETE_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COMPLETE_TASK-Procedure.html#GUID-E2879695-2496-44F9-AC0A-2B2E947A1D17)

Syntax

```
APEX_APPROVAL.APPROVE_TASK (
    p_task_id                IN NUMBER,
    p_autoclaim              IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The Task ID. |
| `p_autoclaim` | If Task is in state `UNASSIGNED` then claim the task implicitly. |

State Handling

Pre-State: `ASSIGNED|UNASSIGNED` (`p_autoclaim=true`)

Post-State: `COMPLETED`

Example

```
BEGIN
    apex_approval.approve_task(
        p_task_id => 1234);
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.6 CANCEL_TASK Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure cancels the task by setting the task to state `CANCELED`. Only the initiator or the Business Administrator of the task can invoke this procedure. Only tasks which are not in `COMPLETED` or `ERRORED` state can be `CANCELED`.

Canceling a task is useful when an approval is no longer required. For example, consider a travel approval for a business trip, and the person requesting the approval suddenly cannot make the trip, and the Task may be canceled.

Syntax

```
APEX_APPROVAL.CANCEL_TASK (
    p_task_id                IN NUMBER );
```

Parameters

| Parameter   | Description  |
|:------------|:-------------|
| `p_task_id` | The Task ID. |

State Handling

Pre-State: Any

Post-State: `CANCELLED`

Example

```
BEGIN
    apex_approval.cancel_task(
        p_task_id => 1234
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.7 CLAIM_TASK Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure claims responsibility for a task. A task can be claimed by potential owners of the Task. A Task must be in Unassigned state to claim it. Once the task is claimed by a user, the Task transitions to Assigned state and the actual owner of the task is set to the user who claimed the task.

Syntax

```
APEX_APPROVAL.CLAIM_TASK (
    p_task_id                IN NUMBER );
```

Parameters

| Parameter   | Description  |
|:------------|:-------------|
| `p_task_id` | The Task ID. |

State Handling

Pre-State: `UNASSIGNED`. Post-State: `ASSIGNED`.

Example

```
BEGIN
    apex_approval.claim_task(
        p_task_id => 1234);
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.8 COMPLETE_TASK Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure completes a task. For Approval Tasks, an outcome must be supplied (`Approved` or `Rejected`). Action Tasks do not have an outcome. Only the actual owner or a potential owner of the task can invoke this procedure.

Tasks in `Assigned` state might be completed with an outcome. This operation transitions the Task from `Assigned` state to `Completed` state and sets the outcome of the task. Once a Task is in `Completed` state, it is subject for purging and archival.

Syntax

```
APEX_APPROVAL.COMPLETE_TASK (
    p_task_id                IN NUMBER,
    p_outcome                IN t_task_outcome DEFAULT NULL,
    p_autoclaim              IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The Task ID. |
| `p_outcome` | The outcome of the Task for Approval Tasks. |
| `p_autoclaim` | If Task is in state `UNASSIGNED` then claim the task implicitly. |

State Handling

Pre-State: `ASSIGNED|UNASSIGNED` (`p_autoclaim=true`)

Post-State: `COMPLETED`

Example

```
BEGIN
    apex_approval.complete_task(
        p_task_id => 1234,
        p_outcome => apex_approval.c_task_outcome_approved
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.9 CREATE_TASK Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function creates a new task. A new Task (Instance) is created. Depending on the task definition participant setting, the Task is set to state `Unassigned` or `Assigned`.

If the task definition has a single potential owner, the Task is set to `Assigned`.

If the task has multiple potential owners, the Task is set to `Unassigned` and can be claimed by any of the potential owners. This procedure throws an exception if no potential owners are found in the corresponding task definition.

Syntax

```
APEX_APPROVAL.CREATE_TASK (
    p_application_id         IN NUMBER                   DEFAULT apex_application.g_flow_id,
    p_task_def_static_id     IN VARCHAR2,
    p_subject                IN VARCHAR2                 DEFAULT NULL,
    p_parameters             IN t_task_parameters        DEFAULT c_empty_task_parameters,
    p_priority               IN INTEGER                  DEFAULT NULL,
    p_initiator              IN VARCHAR2                 DEFAULT NULL,
    p_initiator_can_complete IN BOOLEAN                  DEFAULT NULL,
    p_detail_pk              IN VARCHAR2                 DEFAULT NULL,
    p_due_date               IN TIMESTAMP WITH TIME ZONE DEFAULT NULL )
RETURN NUMBER;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | The application ID that creates the Task. |
| `p_task_def_static_id` | The Task Definition static ID. |
| `p_subject` | The subject (expression of the Task). |
| `p_parameters` | The task parameters. |
| `p_priority` | (Optional) A task priority, default is NULL. If no priority is provided, uses the priority set in the corresponding task definition. |
| `p_initiator` | (Optional) An initiator information for the task. |
| `p_initiator_can_complete` | (Optional) Enables the initiator of a task to complete the task (default NULL). If this parameter is not specified, the value of the corresponding task definition is used. |
| `p_detail_pk` | (Optional) A primary key value for the task details. |
| `p_due_date` | (Optional) Page Item representing the Due Date of the Task. When specified, this value overrides the Due Date provided in the Task Definition this Task is based on. |

Returns

Returns the ID of the newly created task.

Example

The following example creates a requisition item in the system of record in the database and then creates a new Human Task to get the requisition item approved by a user.

```
DECLARE
   l_req_id     number;
   l_req_item   varchar2(100) := 'Some requisition item requiring approval';
   l_req_amount number := 2499.42;
   l_task_id    number;
BEGIN
    insert into requisitions(created_by, creator_emailid, item, item_amount, item_category)
    values (:emp_uid, :emp_email, l_req_item, l_req_amount, 'Equipment')
    returning id into l_req_id;
    commit;

    l_task_id := apex_approval.create_task(
        p_application_id => 110,
        p_task_def_static_id => 'REQAPPROVALS',
        p_subject => 'Requisition ' || l_req_id || ': ' || l_req_item || ' for ' || l_req_amount,
        p_initiator => :emp_uid,
        p_initiator_can_complete => true,
        p_parameters => apex_approval.t_task_parameters(
            1 => apex_approval.t_task_parameter(static_id => 'REQ_DATE', string_value => sysdate),
            3 => apex_approval.t_task_parameter(static_id => 'REQ_AMOUNT', string_value => l_req_amount),
            4 => apex_approval.t_task_parameter(static_id => 'REQ_ITEM', string_value => l_req_item),
            5 => apex_approval.t_task_parameter(static_id => 'REQ_ID', string_value => l_req_id)
        ),
        p_detail_pk => l_req_id
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.10 DELEGATE_TASK Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure assigns the task to one potential owner and sets the task state to `Assigned`. Either the current owner of the task (the user to whom the task is currently assigned) or the Business Administrator of the task can perform this operation.

Syntax

```
APEX_APPROVAL.DELEGATE_TASK (
    p_task_id                IN NUMBER,
    p_to_user                IN VARCHAR2 );
```

Parameters

| Parameter   | Description           |
|:------------|:----------------------|
| `p_task_id` | The Task ID.          |
| `p_to_user` | A (user) participant. |

State Handling

Pre-State: `UNASSIGNED`, `ASSIGNED`

Post-State: `ASSIGNED`

Example

```
BEGIN
    apex_approval.delegate_task(
        p_task_id            => 1234,
        p_to_user            => 'STIGER'
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.11 GET_LOV_PRIORITY Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function retrieves the list of value data for the task priority.

Syntax

```
APEX_APPROVAL.GET_LOV_PRIORITY
RETURN apex_t_temp_lov_data pipelined;
```

Returns

A table of `apex_t_temp_lov_data`.

Example

```
select disp,val from table ( apex_approval.get_lov_priority )
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.12 GET_LOV_STATE Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function gets the list of value data for the task attribute state.

Syntax

```
APEX_APPROVAL.GET_LOV_STATE
RETURN apex_t_temp_lov_data pipelined;
```

Returns

A table of `apex_t_temp_lov_data`.

Example

```
select disp,val from table ( apex_approval.get_lov_state )
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.13 GET_NEXT_PURGE_TIMESTAMP Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function retrieves the timestamp of the next purge.

Syntax

```
APEX_APPROVAL.GET_NEXT_PURGE_TIMESTAMP
RETURN timestamp with time zone;
```

Parameters

None.

Returns

Returns the timestamp of the next purge.

Example

```
DECLARE
    l_next_purge_job_ts timestamp with time zone;
BEGIN
    l_next_purge_job_ts := apex_approval.get_next_purge_timestamp();
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.14 GET_TASK_DELEGATES Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function gets the potential new owners of a task. The actual owner is excluded from the list.

This function only returns data in the context of a valid Oracle APEX session. It returns no data in SQL Workshop.

Syntax

```
APEX_APPROVAL.GET_TASK_DELEGATES (
    p_task_id IN NUMBER )
RETURN apex_t_temp_lov_data pipelined;
```

Parameters

| Parameter   | Description  |
|:------------|:-------------|
| `p_task_id` | The task ID. |

Returns

A table of `apex_t_temp_lov_data`.

Example

```
select disp,val from table ( apex_approval.get_task_delegates ( p_task_id => 1234 ) )
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.15 GET_TASK_HISTORY Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function gets the approval log for a task.

This function only returns data in the context of a valid Oracle APEX session. It returns no data in SQL Workshop.

Syntax

```
APEX_APPROVAL.GET_TASK_HISTORY (
    p_task_id        IN NUMBER,
    p_include_all    IN VARCHAR2 DEFAULT 'N' )
RETURN apex_t_approval_log_table pipelined;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The task ID. |
| `p_include_all` | If set to `Y`, the history of all tasks linked to the task with the given task ID is shown. Since Oracle APEX release 22.2, this includes prior Tasks that have been expired. |

Returns

A table of approval log entries (type `apex_t_approval_log_table`) containing the following columns:

- display_msg varchar2(4000)
- event_creator varchar2(255)
- event_creator_lower varchar2(255)
- event_timestamp timestamp with time zone
- event_type varchar2(255)
- event_type_code varchar2(32)
- new_actual_owner varchar2(255)
- new_actual_owner_lower varchar2(255)
- new_priority number
- new_priority_level varchar2(255)
- new_state varchar2(255)
- new_state_code varchar2(32)
- old_actual_owner varchar2(255)
- old_actual_owner_lower varchar2(255)
- old_priority number
- old_priority_level varchar2(255)
- old_state varchar2(255)
- old_state_code varchar2(32)
- outcome varchar2(255)
- outcome_code varchar2(32)

Example

```
select *  from table ( apex_approval.get_task_history ( p_task_id => 1234,
                                                 p_include_all => 'Y' ) )
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.16 GET_TASK_PARAMETER_OLD_VALUE Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function retrieves the old value of a parameter of this task that was updated in the current session. Raises a "No Data Found" error if the parameter does not exist and `p_raise_error flag` is set to `TRUE`.

Syntax

```
APEX_APPROVAL.GET_TASK_PARAMETER_OLD_VALUE (
    p_task_id           IN NUMBER,
    p_param_static_id   IN VARCHAR2,
    p_raise_error       IN BOOLEAN DEFAULT TRUE )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The Task ID. |
| `p_param_static_id` | The static ID of the parameter. |
| `p_raise_error` | If `TRUE`, raises an error if the parameter is not found. |

Returns

VARCHAR2 - The old value of this parameter in VARCHAR2 format.

Example

```
BEGIN
    return apex_approval.get_task_parameter_old_value(
               p_task_id            => 1234,
               p_param_static_id    => 'REQ_AMOUNT',
               p_raise_error        => false);
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.17 GET_TASK_PARAMETER_VALUE Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function gets the value of a Task parameter. This function can be used in SQL or PL/SQL to get the value of a Task parameter for a given task.

Syntax

```
APEX_APPROVAL.GET_TASK_PARAMETER_VALUE (
    p_task_id                IN NUMBER,
    p_param_static_id        IN VARCHAR2,
    p_ignore_not_found       IN BOOLEAN DEFAULT FALSE )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The Task ID. |
| `p_param_static_id` | The static id of the parameter. |
| `p_ignore_not_found` | If set to false (default) and no data is found, a no_data_found exception will be raised. If set to true and no data is found, null will be returned. |

Returns

The task parameter value for the given static ID or null.

Exception

`no_data_found` - In the case where `p_ignore_not_found` is set to `false` and no data is found (for example, if the parameter of given name does not exist).

Example

```
DECLARE
    l_req_item varchar2(100);
BEGIN
    l_req_item := apex_approval.get_task_parameter_value(
        p_task_id         => 1234,
        p_param_static_id => 'REQ_ITEM'
    );
    dbms_output.put_line('Parameter REQ_ITEM of task 1234 has value ' || l_req_item);
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.18 GET_TASK_PRIORITIES Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function gets the potential new priorities of a task. The actual priority is excluded from the list.

This function only returns data in the context of a valid Oracle APEX session. It returns no data in SQL Workshop.

Syntax

```
APEX_APPROVAL.GET_TASK_PRIORITIES (
    p_task_id IN NUMBER )
RETURN apex_t_temp_lov_data pipelined;
```

Parameters

| Parameter   | Description  |
|:------------|:-------------|
| `p_task_id` | The task ID. |

Returns

A table of `apex_t_temp_lov_data`.

Example

```
select disp,val from table ( apex_approval.get_task_priorities ( p_task_id => 1234 ) )
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.19 GET_TASKS Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function gets the tasks of a user depending on the given context.

Context can be one of the following:

- `MY_TASKS` - Returns all tasks where the user calling the function is either the Owner or one of the Potential Owners of the task.
- `ADMIN_TASKS` - Returns all tasks for which the user calling the function is a Business Administrator.
- `INITIATED_BY_ME` - Returns all tasks where the user calling the function is the Initiator.
- `SINGLE_TASK` - Returns the task identified by the `P_TASK_ID` input parameter.

This function only returns data in the context of a valid Oracle APEX session. It returns no data in SQL Workshop.

Syntax

```
APEX_APPROVAL.GET_TASKS (
    p_context            IN VARCHAR2 DEFAULT apex_approval.c_context_my_tasks,
    p_user               IN VARCHAR2 DEFAULT apex_application.g_user,
    p_task_id            IN NUMBER   DEFAULT NULL,
    p_application_id     IN NUMBER   DEFAULT NULL,
    p_show_expired_tasks IN VARCHAR2 DEFAULT 'N' )
    RETURN apex_t_approval_tasks pipelined;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_context` | The list context. Default is `MY_TASKS`. |
| `p_user` | The user to check for. Default is logged-in user. Requires `p_context` set to `MY_TASKS`, `ADMIN_TASKS` or `INITIATED_BY_ME`. |
| `p_task_id` | Filter for a task ID instead of a user. Default is null. Requires `p_context` set to `SINGLE_TASK`. |
| `p_application_id` | Filter for an application. Default is null (all applications). |
| `p_show_expired_tasks` | If set to `Y` the tasks returned include tasks which are in `Expired` state. |

Returns

A table of tasks (type `apex_t_approval_tasks`) containing the following columns:

- actual_owner varchar2(255)
- actual_owner_lower varchar2(255)
- app_id number
- badge_css_classes varchar2(255)
- badge_text varchar2(255)
- created_ago varchar2(255)
- created_ago_hours number
- created_by varchar2(255)
- created_on timestamp with time zone
- detail_pk
- details_app_id number
- details_app_name varchar2(255)
- details_link_target varchar2(4000)
- due_code varchar2(32)
- due_in varchar2(255)
- due_in_hours number
- due_on timestamp with time zone
- initiator varchar2(255)
- initiator_can_complete varchar2(1)
- initiator_lower varchar2(255)
- is_completed varchar2(1)
- last_updated_by varchar2(255)
- last_updated_on timestamp with time zone
- outcome varchar2(255)
- outcome_code varchar2(32)
- priority number(1)
- priority_level varchar2(255)
- state varchar2(255)
- state_code varchar2(32)
- subject varchar2(1000)
- task_def_id number
- task_def_name varchar2(255)
- task_def_static_id varchar2(255)
- task_id number
- task_type varchar2(8)

Example

```
select * from table ( apex_approval.get_tasks ( p_context => 'MY_TASKS', p_show_expired_tasks => 'Y') )
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.20 HANDLE_TASK_DEADLINES Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure handles Task Deadlines for all Tasks in the current Workspace. A background Job performs this work every hour.

Use this API for testing of Task Expiration Policies and "Before Expire" and "Expire" Task Actions.

Syntax

```
APEX_APPROVAL.HANDLE_TASK_DEADLINES;
```

Parameters

| Parameter | Description |
|:----------|:------------|
| none      | none        |

Example

```
BEGIN
    apex_approval.handle_task_deadlines;
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.21 HAS_TASK_PARAM_CHANGED Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function checks if the value of this task paramter has been modified in the current session. Returns NULL when the parameter does not exist.

Syntax

```
APEX_APPROVAL.HAS_TASK_PARAM_CHANGED (
             p_task_id                IN NUMBER,
             p_param_static_id        IN VARCHAR2 )
RETURN BOOLEAN;
```

Parameters

| Parameter           | Description                     |
|:--------------------|:--------------------------------|
| `p_task_id`         | The Task ID.                    |
| `p_param_static_id` | The static ID of the parameter. |

Example

```
BEGIN
    return apex_approval.has_task_param_changed(
                             p_task_id         => 1234,
                             p_param_static_id => 'REQ_AMOUNT'
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.22 IS_ALLOWED Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function checks whether the given user is permitted to perform a certain operation on a Task.

Syntax

```
APEX_APPROVAL.IS_ALLOWED (
    p_task_id                IN NUMBER,
    p_operation              IN apex_approval.t_task_operation,
    p_user                   IN VARCHAR2 DEFAULT apex_application.g_user,
    p_new_participant        IN VARCHAR2 DEFAULT NULL )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The Task ID. |
| `p_operation` | The operation to check (see constants `c_task_op_``###`). |
| `p_user` | The user to check for. Default is logged in user. |
| `p_new_participant` | (Optional) The new assignee in case of Delegate operation. |

Returns

`TRUE` if the user given by `p_user` is permitted to perform the operation given by `p_operation`, `FALSE` otherwise.

Example

```
DECLARE
    l_is_allowed boolean;
BEGIN
    l_is_allowed := apex_approval.is_allowed(
        p_task_id         => 1234,
        p_operation       => apex_approval.c_task_op_delegate
        p_user            => 'STIGER',
        p_new_participant => 'SMOON'
    );
    IF l_is_allowed THEN
        dbms_output.put_line('STIGER is a allowed to delegate the task to SMOON for task 1234');
    END IF;
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.23 IS_BUSINESS_ADMIN Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function checks whether the given user is a business administrator for at least one task definition.

Syntax

```
APEX_APPROVAL.IS_BUSINESS_ADMIN (
    p_user              IN VARCHAR2 DEFAULT apex_application.g_user,
    p_application_id    IN NUMBER   DEFAULT NULL )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_user` | The user to check for. Default is logged-in user. |
| `p_application_id` | The application to check for. Default behavior checks against all applications in the workspace. |

Returns

`TRUE` if the user given by `p_user` is at least in one task definition configured as participant type `BUSINESS_ADMIN`, `FALSE` otherwise.

Example

```
DECLARE
    l_is_business_admin boolean;
BEGIN
    l_is_business_admin := apex_approval.is_business_admin(
        p_user => 'STIGER'
    );
    IF l_is_business_admin THEN
        dbms_output.put_line('STIGER is a Business Administrator');
    END IF;
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.24 IS_OF_PARTICIPANT_TYPE Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function checks whether the given user is of a certain participant type for a Task.

Syntax

```
APEX_APPROVAL.IS_OF_PARTICIPANT_TYPE (
    p_task_id                IN NUMBER,
    p_participant_type       IN t_task_participant_type
                                DEFAULT c_task_potential_owner,
    p_user                   IN VARCHAR2
                                DEFAULT wwv_flow_security.g_user)
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The Task ID. |
| `p_participant_type` | The participant type. Can be set to `POTENTIAL_OWNER` (default) or `BUSINESS_ADMIN`. |
| `p_user` | The user to check for. Default is logged-in user. |

Returns

`TRUE` if the user given by `p_user` is a participant of given participant type for a given task, `FALSE` otherwise.

Example

```
DECLARE
    l_is_potential_owner boolean;
BEGIN
    l_is_potential_owner := apex_approval.is_of_participant_type(
        p_task_id          => 1234,
        p_participant_type => apex_approval.c_task_potential_owner,
        p_user             => 'STIGER'
    );
    IF l_is_potential_owner THEN
        dbms_output.put_line('STIGER is a potential owner for task 1234');
    END IF;
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.25 REJECT_TASK Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure rejects the task. Only a potential owner or the actual owner of the task can invoke this procedure.

Moves the state of the Task to `Completed` and sets the outcome of the Task to `Rejected`. This is a convenience procedure and equivalent to calling `complete_task` with outcome `apex_approval.c_task_outcome_rejected`.

Syntax

```
APEX_APPROVAL.REJECT_TASK (
    p_task_id                IN NUMBER,
    p_autoclaim              IN BOOLEAN DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The Task ID. |
| `p_autoclaim` | If Task is in state `UNASSIGNED` then claim the task implicitly. |

State Handling

Pre-State: `ASSIGNED|UNASSIGNED` (`p_autoclaim=true`)

Post-State: `COMPLETED`

Example

```
BEGIN
    apex_approval.reject_task(
        p_task_id => 1234
    );
END;
```

See Also:

[COMPLETE_TASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COMPLETE_TASK-Procedure.html#GUID-E2879695-2496-44F9-AC0A-2B2E947A1D17)

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.26 RELEASE_TASK Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure releases an `Assigned` task from its current owner and sets the task to `Unassigned` state. Only the current owner of the task can invoke this procedure.

Syntax

```
APEX_APPROVAL.RELEASE_TASK (
    p_task_id                IN NUMBER );
```

Parameters

| Parameter   | Description  |
|:------------|:-------------|
| `p_task_id` | The Task ID. |

State Handling

Pre-State: `ASSIGNED`

Post-State: `UNASSIGNED`

Example

```
BEGIN
    apex_approval.release_task(
        p_task_id            => 1234
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.27 REMOVE_POTENTIAL_OWNER Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure removes a potential owner of a task. If the user to be removed is not  an existing potential owner, the API raises an exception.

Only a Business Administrator for the task can run this procedure.

Syntax

```
APEX_APPROVAL.REMOVE_POTENTIAL_OWNER (
    p_task_id                IN NUMBER,
    p_potential_owner        IN VARCHAR2 );
```

Parameters

| Parameter           | Description          |
|:--------------------|:---------------------|
| `p_task_id`         | The Task ID.         |
| `p_potential_owner` | The potential owner. |

Example

The following example removes user "STIGER" as potential owner for Task ID `1234`.

```
BEGIN
    apex_approval.remove_potential_owner(
        p_task_id         => 1234,
        p_potential_owner => 'STIGER'
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.28 RENEW_TASK Function

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This function reactivates Expired or Errored Tasks. Tasks that have been transitioned to state `EXPIRED` or `ERRORED` can be renewed by a Business Administrator.

When a Business Administrator renews a Task, a new Task is created with the given information from the given Task ID. The renewed task is associated with the Expired/Errored Task so that users can review the origin of the Task. This function returns the ID of the renewed task.

Syntax

```
APEX_APPROVAL.RENEW_TASK (
    p_task_id       IN NUMBER,
    p_priority      IN INTEGER  DEFAULT NULL,
    p_due_date      IN timestamp with time zone )
RETURN NUMBER;
```

Parameters

| Parameter    | Description                        |
|:-------------|:-----------------------------------|
| `p_task_id`  | The Task ID.                       |
| `p_priority` | The priority of the renewed Task.  |
| `p_due_date` | The due date for the renewed Task. |

Returns

This function returns the ID of the renewed task.

State Handling

State of original Task: `EXPIRED`, `ERRORED`

State of renewed Task: `ASSIGNED`, `UNASSIGNED`

Example

```
BEGIN
    apex_approval.renew_task(
        p_task_id            => 1234,
        p_priority           => apex_approval.c_task_priority_high,
        p_due_date           => sysdate + 10
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.29 REQUEST_MORE_INFORMATION Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure requests more information for a task. The owner of a task can request additional information regarding a Task from the initiator. The task then moves to the Information Requested state and can be acted on by the owner only after the initiator submits the requested information.

Syntax

```
APEX_APPROVAL.REQUEST_MORE_INFORMATION (
    p_task_id                IN NUMBER,
    p_text                   IN VARCHAR2 )
```

Parameters

| Parameter   | Description                                |
|:------------|:-------------------------------------------|
| `p_task_id` | The Task ID.                               |
| `p_text`    | Text describing the information requested. |

State Handling

Pre-State: `ASSIGNED`

Post-State: `INFO_REQUESTED`

Example

```
BEGIN
    apex_approval.request_more_information(
        p_task_id => 1234,
        p_text    => 'Please provide the flight PNR for your travel'
    );
END;
```

See Also:

[SUBMIT_INFORMATION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SUBMIT_INFORMATION-Procedure.html#GUID-30A21FB0-6C5E-447C-BF8E-16C8C2CCCC4E)

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.30 SET_INITIATOR_CAN_COMPLETE Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure updates the `initiator_can_Complete` attribute of a task. The task can not be COMPLETED or ERRORED. Only a user who is a business administrator for the task can invoke this procedure.

Syntax

```
APEX_APPROVAL.SET_INITIATOR_CAN_COMPLETE (
    p_task_id                   IN NUMBER,
    p_initiator_can_complete    IN BOOLEAN )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_task_id` | The task ID. |
| `p_initiator_can_complete` | `TRUE` if the initiator is permitted to also approve or reject the task. Otherwise, `FALSE`. |

Example

```
BEGIN
    apex_approval.set_initiator_can_complete(
        p_task_id                => 1234,
        p_initiator_can_complete => true
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.31 SET_TASK_DUE Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure sets the due date of a task and can be invoked by the Business Administrator to update the due date of the task.

This API cannot be invoked for a task that is Expired, Errored, Completed or Canceled.

The due date needs to be in the future, otherwise an exception is thrown when invoking this API.

Syntax

```
APEX_APPROVAL.SET_TASK_DUE (
    p_task_id                IN NUMBER,
    p_due_date               IN timestamp with time zone )
```

Parameters

| Parameter    | Description                   |
|:-------------|:------------------------------|
| `p_task_id`  | The Task ID.                  |
| `p_due_date` | The new due date of the Task. |

Example

```
BEGIN
    apex_approval.set_task_due(
        p_task_id  => 1234,
        p_due_date => sysdate+20
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.32 SET_TASK_PARAMETER_VALUES Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure updates the values of the parameter(s) of this task. This procedure only updates the parameters that are marked as "updatable" in the task definition.

Only a Business Administrator or the owner of the task can run this procedure.

Syntax

```
APEX_APPROVAL.SET_TASK_PARAMETER_VALUES (
    p_task_id                IN NUMBER,
    p_parameters             IN t_task_parameters,
    p_raise_error            IN BOOLEAN DEFAULT TRUE );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d49969e85" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d49969e87" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d49969e91" style="text-align: left;" data-valign="top" width="42%" headers="d49969e85 "><code class="codeph">p_task_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d49969e91 d49969e87 ">The Task ID.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d49969e97" style="text-align: left;" data-valign="top" width="42%" headers="d49969e85 "><code class="codeph">p_parameters</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d49969e97 d49969e87 ">The list of changed parameters.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d49969e103" style="text-align: left;" data-valign="top" width="42%" headers="d49969e85 "><code class="codeph">p_raise_error</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d49969e103 d49969e87 "><p>Default <code class="codeph">TRUE</code>.</p>
<p>When <code class="codeph">TRUE</code>, the API raises an exception and cancels updates to the parameters.</p>
<p>If <code class="codeph">FALSE</code>, the API ignores raised exceptions if the list contains one or more incorrect parameter static IDs or parameters that are not marked as updatable in the Task Definition. The API updates the rest of the parameters.</p></td>
</tr>
</tbody>
</table>

Example

```
BEGIN
    apex_approval.set_task_parameter_values(
        p_task_id            => 1234,
        p_parameters         => apex_approval.t_task_parameters(
            1 => apex_approval.t_task_parameter(static_id => 'REQ_DATE',
                                                    string_value => sysdate+10),
            3 => apex_approval.t_task_parameter(static_id => 'REQ_AMOUNT',
                                                 string_value => l_req_amount));
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.33 SET_TASK_PRIORITY Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure sets the priority of a task.

This procedure updates the priority of a task. The task can not be `COMPLETED` or `ERRORED`. Only a user who is either a Business Administrator for the task or is the initiator of the task can invoke this procedure.

Syntax

```
APEX_APPROVAL.SET_TASK_PRIORITY (
    p_task_id                IN NUMBER,
    p_priority               IN INTEGER );
```

Parameters

| Parameter    | Description                                               |
|:-------------|:----------------------------------------------------------|
| `p_task_id`  | The Task ID.                                              |
| `p_priority` | The task priority (between 1 and 5, 1 being the highest). |

Example

```
BEGIN
    apex_approval.set_task_priority(
        p_task_id  => 1234,
        p_priority => apex_approval.c_task_priority_highest
    );
END;
```

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)

------------------------------------------------------------------------

## 9.34 SUBMIT_INFORMATION Procedure

Caution:

This API is deprecated and will be removed in a future release.

Use [APEX_HUMAN_TASK](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_HUMAN_TASK.html#GUID-8F8F6295-F45E-4801-A8A4-D4C298A178B4) instead.

This procedure submits information for a task. The initiator of a task can submit additional information regarding a Task for which information has been requested. For example, a travel approver might need airline details from the initiator. The initiator can submit this information to the travel approver using this API.

Syntax

```
APEX_APPROVAL.SUBMIT_INFORMATION (
    p_task_id                IN NUMBER,
    p_text                   IN VARCHAR2 )
```

Parameters

| Parameter   | Description                                |
|:------------|:-------------------------------------------|
| `p_task_id` | The Task ID.                               |
| `p_text`    | Text containing the information submitted. |

Example

```
BEGIN
    apex_approval.submit_information(
        p_task_id => 1234,
        p_text    => 'The flight PNR is PN1234'
    );
END;
```

See Also:

[REQUEST_MORE_INFORMATION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/REQUEST_MORE_INFORMATION-Procedure.html#GUID-3A0AE94D-5C0C-417E-B651-3A7E4497B84D)

**Parent topic:** [APEX_APPROVAL (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APPROVAL.html#GUID-CC1036F7-0705-4750-9AEB-2E899E2AC7E4)
