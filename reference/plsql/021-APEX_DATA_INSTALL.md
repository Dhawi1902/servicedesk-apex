<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_INSTALL.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 21 APEX_DATA_INSTALL

This package contains the API for data migration in Oracle APEX.

- [LOAD_SUPPORTING_OBJECT_DATA Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/LOAD_SUPPORTING_OBJECT_DATA-Procedure.html#GUID-1837E7E4-3631-410F-8718-F84E1A1AF2EF)

------------------------------------------------------------------------

## 21.1 LOAD_SUPPORTING_OBJECT_DATA Procedure

This procedure loads the supporting object data and installs the data in the specified application.

Syntax

```
APEX_DATA_INSTALL.LOAD_SUPPORTING_OBJECT_DATA (
    p_table_name            IN  VARCHAR2,
    p_delete_after_install  IN  BOOLEAN,
    p_app_id                IN  NUMBER  DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d84963e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d84963e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d84963e78" style="text-align: left;" data-valign="top" width="42%" headers="d84963e72 "><code class="codeph">p_table_name</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d84963e78 d84963e74 ">Name of the table where the data will be deposited.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d84963e84" style="text-align: left;" data-valign="top" width="42%" headers="d84963e72 "><code class="codeph">p_delete_after_install</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d84963e84 d84963e74 "><p>Indicates if files are removed after installing supporting objects.</p>
<p>Default <code class="codeph">TRUE</code>.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d84963e96" style="text-align: left;" data-valign="top" width="42%" headers="d84963e72 "><code class="codeph">p_app_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d84963e96 d84963e74 "><p>APEX application ID of the application that contains the static files associated with a data migration export.</p>
<p>This can be used from SQL workshop outside the context of installing supporting objects, enabling a developer to reinstall migrated data without reinstalling all supporting objects.</p></td>
</tr>
</tbody>
</table>

Example

```
DECLARE
    l_table_name    varchar2(400);
BEGIN
    apex_data_install.load_supporting_object_data(
        p_table_name            => l_table_name,
        p_delete_after_install  => true);
END;
```

**Parent topic:** [APEX_DATA_INSTALL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_DATA_INSTALL.html#GUID-863E024E-AB46-4081-BF91-8FC5F1613CFB)
