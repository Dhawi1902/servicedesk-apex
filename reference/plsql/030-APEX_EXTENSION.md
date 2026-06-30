<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 30 APEX_EXTENSION

The APEX_EXTENSION package contains utility functions used for invoking extension applications.

This API can be used in the following contexts:

- in an Oracle APEX session context of a workspace that has the Component Availability attribute `Allow Hosting Extensions` enabled (is an extension workspace)
- this extension workspace has created links in its Extension Menu with attribute `public` set to `Yes`
- another workspace is subscribed to the extension workspace's published extension menu and granted read acces to the extension workspace

The API can be called in Automations or in database sessions using `APEX_SESSION.CREATE_SESSION` to establish an APEX session context. Invoking the procedure from the extension workspace, with the subscribed workspace name or ID, from an automation of an application in that extension workspace or session in a database schema associated to it, changes the behavior of application-related public APEX views such that querying them returns the application metadata of that subscribed workspace, but not the metadata of the "own" workspace anymore.

- [ADD_MENU_ENTRY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.ADD_MENU_ENTRY-Procedure.html#GUID-3F5696AC-5BCE-4915-9169-8F45D60ED28C)
- [GET_BUILDER_LINK Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.GET_BUILDER_LINK-Function.html#GUID-2612F2AA-8B0C-4636-AD61-C14342B55A47)
- [GET_GRANTOR_WORKSPACE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.GET_GRANTOR_WORKSPACE-Function.html#GUID-F946FDDC-91F6-40B5-AFF7-CE12A5E688C2)
- [REMOVE_MENU_ENTRY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.REMOVE_MENU_ENTRY-Procedure.html#GUID-9DF637AD-1AA5-4774-9445-B2CB24C80A45)
- [SET_WORKSPACE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.SET_WORKSPACE-Procedure-Signature-1.html#GUID-7D953564-5E40-42F2-BA02-37023A985A4B)
- [SET_WORKSPACE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.SET_WORKSPACE-Procedure-Signature-2.html#GUID-ABC96254-68BE-4455-8A2A-A8065DEDDC23)

------------------------------------------------------------------------

## 30.1 ADD_MENU_ENTRY Procedure

This procedure adds a builder extension menu link. Requires the APEX_ADMINISTRATOR_ROLE.

Syntax

```
APEX_EXTENSION.ADD_MENU_ENTRY (
    p_label            IN VARCHAR2,
    p_url              IN VARCHAR2,
    p_display_sequence IN NUMBER    DEFAULT NULL,
    p_description      IN VARCHAR2  DEFAULT NULL,
    p_is_public        IN BOOLEAN   DEFAULT FALSE,
    p_tab_identifier   IN VARCHAR2  DEFAULT NULL,
    p_workspace        IN VARCHAR2  DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d143505e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d143505e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d143505e78" style="text-align: left;" data-valign="top" width="42%" headers="d143505e72 "><code class="codeph">p_label</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143505e78 d143505e74 ">Menu entry label. Must be unique within a workspace.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143505e84" style="text-align: left;" data-valign="top" width="42%" headers="d143505e72 "><code class="codeph">p_url</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143505e84 d143505e74 ">The menu entry's URL.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143505e90" style="text-align: left;" data-valign="top" width="42%" headers="d143505e72 "><code class="codeph">p_display_sequence</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143505e90 d143505e74 "><p>(Optional) Display sequence for sorting menu entry.</p>
<p>Default NULL: the value is calculated and the entry is appended as last.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143505e99" style="text-align: left;" data-valign="top" width="42%" headers="d143505e72 "><code class="codeph">p_description</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143505e99 d143505e74 ">(Optional) Description.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143505e105" style="text-align: left;" data-valign="top" width="42%" headers="d143505e72 "><code class="codeph">p_is_public</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143505e105 d143505e74 "><p>Default <code class="codeph">FALSE</code>.</p>
<p>If <code class="codeph">TRUE</code>, the entry is available for subscribing workspaces. The value <code class="codeph">TRUE</code> can only be set for extension workspaces.</p>
<p>If the given workspace is not enabled for hosting extensions, the flag is set to <code class="codeph">FALSE</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143505e128" style="text-align: left;" data-valign="top" width="42%" headers="d143505e72 "><code class="codeph">p_tab_identifier</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143505e128 d143505e74 ">Used to name the target browser tab the link is opened in. If the tab doesn't exist yet, it is opened on clicking the link. If it does exist already, the tab is reused to open the link clicked. Multiple extension menu entries can have the same tab identifier, which lets all those links open in the same tab. If left empty, a unique tab name is generated to ensure the link opens in the same tab again.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143505e134" style="text-align: left;" data-valign="top" width="42%" headers="d143505e72 "><code class="codeph">p_workspace</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143505e134 d143505e74 ">Default NULL, which means the menu entry is created for the current workspace. Value can be set to any existing workspace name.</td>
</tr>
</tbody>
</table>

Example

The following example adds an extension menu link in workspace MY_WORKSPACE with label "Example."

```
BEGIN
    apex_extension.add_menu_entry(
        p_label       => 'Example',
        p_url         => 'https://example.com'
        p_description => 'This is an example'
        p_workspace   => ' MY_WORKSPACE' );
END;
```

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 30.2 GET_BUILDER_LINK Function

Generate an action fragment or action data attributes to open the APEX Builder window or tab, redirect, and focus on a specific component.

Syntax

```
APEX_EXTENSION.GET_BUILDER_LINK (
    p_app_id          IN NUMBER,
    p_page_id         IN NUMBER   DEFAULT NULL,
    p_view_name       IN VARCHAR2 DEFAULT NULL,
    p_component_id    IN NUMBER   DEFAULT NULL,
    p_as_data_action  IN VARCHAR2 DEFAULT 'N' )
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
<th id="d143899e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d143899e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d143899e78" style="text-align: left;" data-valign="top" width="42%" headers="d143899e72 "><code class="codeph">p_app_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143899e78 d143899e74 ">ID of application to open in the Builder</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143899e84" style="text-align: left;" data-valign="top" width="42%" headers="d143899e72 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143899e84 d143899e74 ">Optional ID of page in application to open. <code class="codeph">NULL</code> if <code class="codeph">p_component_id</code> references a shared component, but mandatory if referencing a component defined on a page, like page items, regions, or report columns.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143899e96" style="text-align: left;" data-valign="top" width="42%" headers="d143899e72 "><code class="codeph">p_view_name</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143899e96 d143899e74 ">APEX Dictionary view of component identified in <code class="codeph">p_component_id</code>.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143899e105" style="text-align: left;" data-valign="top" width="42%" headers="d143899e72 "><code class="codeph">p_component_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143899e105 d143899e74 ">ID of component to focus on in the Designer or redirect to the corresponding edit page in Builder.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d143899e111" style="text-align: left;" data-valign="top" width="42%" headers="d143899e72 "><code class="codeph">p_as_data_action</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d143899e111 d143899e74 ">Default is <code class="codeph">N</code>, which will generate an action fragment to be used in a href attribute of an anchor element. If set to <code class="codeph">Y</code>, this function returns the corresponding data attributes for a button action.
<p>Note:</p>
When set to <code class="codeph">Y</code> to generate the link as data attributes for a button and referencing the column value as a substitution string, the Escape Special Characters must be switched off for the column that uses the <code class="codeph">get_builder_link</code> function.
</div></td>
</tr>
</tbody>
</table>

Example

Generates a Builder Backlink url as action fragment for each List Entry of all Lists in the current workspace.

```
select workspace,
       application_name,
       list_name,
       display_sequence,
       entry_text,
       parent_entry_text,
       apex_extension.get_builder_link(p_app_id       => application_id,
                                       p_page_id      => null,
                                       p_view_name    => 'APEX_APPLICATION_LIST_ENTRIES',
                                       p_component_id => list_entry_id) as backlink
from apex_application_list_entries;
```

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 30.3 GET_GRANTOR_WORKSPACE Function

This function gets current grantor workspace name.

Syntax

```
APEX_EXTENSION.GET_GRANTOR_WORKSPACE
    RETURN VARCHAR2;
```

Parameters

None.

Returns

Workspace name of grantor workspace.

Example

The following example query returns the name of the invoking workspace in a builder extension context.

```
select apex_extension.get_grantor_workspace from sys.dual;
```

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 30.4 REMOVE_MENU_ENTRY Procedure

This procedure removes an existing builder extension menu link entry. Requires the APEX_ADMINISTRATOR_ROLE.

Syntax

```
APEX_EXTENSION.REMOVE_MENU_ENTRY (
    p_label       IN VARCHAR2,
    p_workspace   IN VARCHAR2  DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_label` | Menu entry label. |
| `p_workspace` | Default NULL, which means the menu entry is from the current workspace. Value can be set to any existing workspace name. |

Example

The following example deletes the builder extension menu entry with label "Example" in the current workspace.

```
BEGIN
    apex_extension.remove_menu_entry(p_label => 'Example');
END;
```

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 30.5 SET_WORKSPACE Procedure Signature 1

This procedure sets the current workspace to the workspace that is processed by the extension application or background automation by its ID.

After calling this API, all Oracle APEX dictionary views show the metadata of that workspace.

Syntax

```
APEX_EXTENSION.SET_WORKSPACE (
    p_id    IN NUMBER )
```

Parameters

| Parameter | Description                             |
|:----------|:----------------------------------------|
| `p_id`    | The ID of the workspace to be accessed. |

Example

The following example sets access for an extension application to workspace with `123456789`.

```
BEGIN
        apex_extension.set_workspace( p_id => 123456789);
END;
```

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 30.6 SET_WORKSPACE Procedure Signature 2

This procedure sets the current workspace to the workspace that is processed by the extension application or background automation by its name.

After calling this API, all Oracle APEX dictionary views show the metadata of that workspace.

Syntax

```
APEX_EXTENSION.SET_WORKSPACE (
    p_name  IN VARCHAR2 )
```

Parameters

| Parameter | Description                                         |
|:----------|:----------------------------------------------------|
| `p_name`  | The (display) name of the workspace to be accessed. |

Example

The following example sets access for an extension application to workspace `MYWORKSPACE`.

```
BEGIN
    apex_extension.set_workspace( p_name => 'MYWORKSPACE');
END;
```

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)
