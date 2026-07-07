<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.html -->
<!-- Oracle APEX 24.2 API Reference -->

## 29 APEX_EXTENSION

The APEX_EXTENSION package contains utility functions used for invoking extension applications.

This API can be used in the following contexts:

- in an Oracle APEX session context of a workspace that has the Component Availability attribute `Allow Hosting Extensions` enabled (is an extension workspace)
- this extension workspace has created links in its Extension Menu with attribute `public` set to `Yes`
- another workspace is subscribed to the extension workspace's published extension menu and granted read acces to the extension workspace

The API can be called in Automations or in database sessions using `APEX_SESSION.CREATE_SESSION` to establish an APEX session context. Invoking the procedure from the extension workspace, with the subscribed workspace name or ID, from an automation of an application in that extension workspace or session in a database schema associated to it, changes the behavior of application-related public APEX views such that querying them returns the application metadata of that subscribed workspace, but not the metadata of the "own" workspace anymore.

- [ADD_MENU_ENTRY Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.ADD_MENU_ENTRY-Procedure.html#GUID-3F5696AC-5BCE-4915-9169-8F45D60ED28C)
- [GET_GRANTOR_WORKSPACE Function](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.GET_GRANTOR_WORKSPACE-Function.html#GUID-F946FDDC-91F6-40B5-AFF7-CE12A5E688C2)
- [REMOVE_MENU_ENTRY Procedure](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.REMOVE_MENU_ENTRY-Procedure.html#GUID-9DF637AD-1AA5-4774-9445-B2CB24C80A45)
- [SET_WORKSPACE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.SET_WORKSPACE-Procedure-Signature-1.html#GUID-7D953564-5E40-42F2-BA02-37023A985A4B)
- [SET_WORKSPACE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.SET_WORKSPACE-Procedure-Signature-2.html#GUID-ABC96254-68BE-4455-8A2A-A8065DEDDC23)

------------------------------------------------------------------------

## 29.1 ADD_MENU_ENTRY Procedure

This procedure adds a builder extension menu link. Requires the APEX_ADMINISTRATOR_ROLE.

Syntax

```
APEX_EXTENSION.ADD_MENU_ENTRY (
    p_label            IN VARCHAR2,
    p_url              IN VARCHAR2,
    p_display_sequence IN NUMBER    DEFAULT NULL,
    p_description      IN VARCHAR2  DEFAULT NULL,
    p_is_public        IN BOOLEAN   DEFAULT FALSE,
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
<th id="d132217e70" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d132217e72" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d132217e76" style="text-align: left;" data-valign="top" width="42%" headers="d132217e70 "><code class="codeph">p_label</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d132217e76 d132217e72 ">Menu entry label. Must be unique within a workspace.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132217e82" style="text-align: left;" data-valign="top" width="42%" headers="d132217e70 "><code class="codeph">p_url</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d132217e82 d132217e72 ">The menu entry's URL.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132217e88" style="text-align: left;" data-valign="top" width="42%" headers="d132217e70 "><code class="codeph">p_display_sequence</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d132217e88 d132217e72 "><p>(Optional) Display sequence for sorting menu entry.</p>
<p>Default NULL: the value is calculated and the entry is appended as last.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132217e97" style="text-align: left;" data-valign="top" width="42%" headers="d132217e70 "><code class="codeph">p_description</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d132217e97 d132217e72 ">(Optional) Description.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132217e103" style="text-align: left;" data-valign="top" width="42%" headers="d132217e70 "><code class="codeph">p_is_public</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d132217e103 d132217e72 "><p>Default <code class="codeph">FALSE</code>.</p>
<p>If <code class="codeph">TRUE</code>, the entry is available for subscribing workspaces. The value <code class="codeph">TRUE</code> can only be set for extension workspaces.</p>
<p>If the given workspace is not enabled for hosting extensions, the flag is set to <code class="codeph">FALSE</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d132217e126" style="text-align: left;" data-valign="top" width="42%" headers="d132217e70 "><code class="codeph">p_workspace</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d132217e126 d132217e72 ">Default NULL, which means the menu entry is created for the current workspace. Value can be set to any existing workspace name.</td>
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

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 29.2 GET_GRANTOR_WORKSPACE Function

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

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 29.3 REMOVE_MENU_ENTRY Procedure

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

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 29.4 SET_WORKSPACE Procedure Signature 1

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

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)

------------------------------------------------------------------------

## 29.5 SET_WORKSPACE Procedure Signature 2

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

**Parent topic:** [APEX_EXTENSION](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/APEX_EXTENSION.html#GUID-1DB896FA-5BC4-4BB6-A566-D865009EDA52)
