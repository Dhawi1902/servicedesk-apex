<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 60  APEX_UI_DEFAULT_UPDATE

The `APEX_UI_DEFAULT_UPDATE` package provides procedures to access user interface defaults from within SQL Developer or SQLcl.

You can use this package to set the user interface defaults associated with a table within a schema. The package must be called from within the schema that owns the table you are updating.

User interface defaults enable you to assign default user interface properties to a table, column, or view within a specified schema. When you create a form or report using a wizard, the wizard uses this information to create default values for region and item properties. Utilizing user interface defaults can save valuable development time and has the added benefit of providing consistency across multiple pages in an application.

- [ADD_AD_COLUMN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_AD_COLUMN-Procedure.html#GUID-70CFF2C0-C894-4162-A380-5A41FAE64E8B)
- [ADD_AD_SYNONYM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_AD_SYNONYM-Procedure.html#GUID-8D72422E-B10B-42E3-9E1A-E91C622FDA5F)
- [DEL_AD_COLUMN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_AD_COLUMN-Procedure.html#GUID-68A53CCB-54CB-47F8-AF57-DF3F9CE716B9)
- [DEL_AD_SYNONYM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_AD_SYNONYM-Procedure.html#GUID-344D8F38-0A88-48E4-B109-11BBB369B296)
- [DEL_COLUMN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_COLUMN-Procedure.html#GUID-5BD7FEE4-FAA9-4FEE-9453-80C4C2EFF2FA)
- [DEL_GROUP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_GROUP-Procedure.html#GUID-138DF419-EF73-4CDB-AA08-6A20BFA8591B)
- [DEL_TABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DEL_TABLE-Procedure.html#GUID-EF58F5C0-4032-48AF-AA42-9143467A0868)
- [SYNCH_TABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SYNCH_TABLE-Procedure.html#GUID-58BCB991-C2C2-4687-85B0-66AEF14E15D9)
- [UPD_AD_COLUMN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_AD_COLUMN-Procedure.html#GUID-22061513-3666-4432-80AC-05561A320CA4)
- [UPD_AD_SYNONYM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_AD_SYNONYM-Procedure.html#GUID-C1CA704E-4171-4B28-B7D3-1363BEDB0356)
- [UPD_COLUMN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_COLUMN-Procedure.html#GUID-6C4D2A6B-816F-4EBC-A1BB-80670808BD5A)
- [UPD_DISPLAY_IN_FORM Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_DISPLAY_IN_FORM-Procedure.html#GUID-9EAC94C8-FB59-4315-BE0A-C292E704DEEF)
- [UPD_DISPLAY_IN_REPORT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_DISPLAY_IN_REPORT-Procedure.html#GUID-1C719A2F-8E3A-4AE3-8D01-E91466AD36FE)
- [UPD_FORM_REGION_TITLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_FORM_REGION_TITLE-Procedure.html#GUID-FD1F596F-0333-4B87-9827-B9C32C9D3E78)
- [UPD_GROUP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_GROUP-Procedure.html#GUID-F052864B-0F62-4CB2-B525-DA3F2B76CB60)
- [UPD_ITEM_DISPLAY_HEIGHT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_DISPLAY_HEIGHT-Procedure.html#GUID-0912CF69-D9F3-4620-B5BC-25B7384535DD)
- [UPD_ITEM_DISPLAY_WIDTH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_DISPLAY_WIDTH-Procedure.html#GUID-F4FBE46F-0FFB-4CF8-874A-E103AF60984D)
- [UPD_ITEM_FORMAT_MASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_FORMAT_MASK-Procedure.html#GUID-B5D14D6C-0BFA-4EEA-9A2B-3163C2F88359)
- [UPD_ITEM_HELP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_ITEM_HELP-Procedure.html#GUID-E0873D2A-8ED9-41C6-8994-86D67EA31561)
- [UPD_LABEL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_LABEL-Procedure.html#GUID-8698DA92-16C0-4CE5-904E-9691CE05AAA8)
- [UPD_REPORT_ALIGNMENT Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_REPORT_ALIGNMENT-Procedure.html#GUID-C76124C3-54E2-4290-9633-6D2F23822D7A)
- [UPD_REPORT_FORMAT_MASK Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_REPORT_FORMAT_MASK-Procedure.html#GUID-ABDF4CE8-A0D2-452E-AEBD-77781BCB283F)
- [UPD_REPORT_REGION_TITLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_REPORT_REGION_TITLE-Procedure.html#GUID-4B49C853-754A-49CA-BE5D-5D7B4BB26C19)
- [UPD_TABLE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPD_TABLE-Procedure.html#GUID-F4F1DAC7-1D8A-4C7E-8265-D402167A6564)

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=AEUTL-GUID-320D73C0-F50E-4167-AA2E-89D2809AC416" target="_blank">Managing User Interface Defaults</a> in Oracle APEX SQL Workshop Guide

------------------------------------------------------------------------

## 60.1 ADD_AD_COLUMN Procedure

Adds a User Interface Default Attribute Dictionary entry with the provided definition. Up to three synonyms can be provided during the creation. Additional synonyms can be added post-creation using apex_ui_default_update.add_ad_synonym. Synonyms share the column definition of their base column.

Syntax

```
APEX_UI_DEFAULT_UPDATE.ADD_AD_COLUMN (
    p_column_name           IN  VARCHAR2,
    p_label                 IN  VARCHAR2  DEFAULT NULL,
    p_help_text             IN  VARCHAR2  DEFAULT NULL,
    p_format_mask           IN  VARCHAR2  DEFAULT NULL,
    p_default_value         IN  VARCHAR2  DEFAULT NULL,
    p_form_format_mask      IN  VARCHAR2  DEFAULT NULL,
    p_form_display_width    IN  VARCHAR2  DEFAULT NULL,
    p_form_display_height   IN  VARCHAR2  DEFAULT NULL,
    p_form_data_type        IN  VARCHAR2  DEFAULT NULL,
    p_report_format_mask    IN  VARCHAR2  DEFAULT NULL,
    p_report_col_alignment  IN  VARCHAR2  DEFAULT NULL,
    p_syn_name1             IN  VARCHAR2  DEFAULT NULL,
    p_syn_name2             IN  VARCHAR2  DEFAULT NULL,
    p_syn_name3             IN  VARCHAR2  DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_column_name` | Name of column to be created. |
| `p_label` | Used for item label and report column heading. |
| `p_help_text` | Used for help text for items and interactive report columns |
| `p_format_mask` | Used as the format mask for items and report columns. Can be overwritten by report for form specific format masks. |
| `p_default_value` | Used as the default value for items. |
| `p_form_format_mask` | If provided, used as the format mask for items, overriding any value for the general format mask. |
| `p_form_display_width` | Used as the width of any items using this Attribute Definition. |
| `p_form_display_height` | Used as the height of any items using this Attribute Definition (only used by item types such as text areas and shuttles). |
| `p_form_data_type` | Used as the data type for items (results in an automatic validation). Valid values are VARCHAR, NUMBER and DATE. |
| `p_report_format_mask` | If provided, used as the format mask for report columns, overriding any value for the general format mask. |
| `p_report_col_alignment` | Used as the alignment for report column data (for example, number are usually right justified). Valid values are `LEFT`, `CENTER`, and `RIGHT`. |
| `p_syn_name1` | Name of synonym to be created along with this column. For more than 3, use APEX_UI_DEFAULT_UPDATE.ADD_AD_SYNONYM. |
| `p_syn_name2` | Name of second synonym to be created along with this column. For more than 3, use APEX_UI_DEFAULT_UPDATE.ADD_AD_SYNONYM. |
| `p_syn_name3` | Name of third synonym to be created along with this column. For more than 3, use APEX_UI_DEFAULT_UPDATE.ADD_AD_SYNONYM. |

Example

The following example creates a new attribute to the UI Defaults Attribute Dictionary within the workspace associated with the current schema. It also creates a synonym for that attribute.

```
BEGIN
    apex_ui_default_update.add_ad_column (
       p_column_name          => 'CREATED_BY',
       p_label                => 'Created By',
       p_help_text            => 'User that created the record.',
       p_form_display_width   => 30,
       p_form_data_type       => 'VARCHAR',
       p_report_col_alignment => 'LEFT',
       p_syn_name1            => 'CREATED_BY_USER' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.2 ADD_AD_SYNONYM Procedure

If the column name is found within the User Interface Default Attribute Dictionary, the synonym provided is created and associated with that column. Synonyms share the column definition of their base column.

Syntax

```
APEX_UI_DEFAULT_UPDATE.ADD_AD_SYNONYM (
    p_column_name           IN VARCHAR2,
    p_syn_name              IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_column_name` | Name of column with the Attribute Dictionary that the synonym is being created for. |
| `p_syn_name` | Name of synonym to be created. |

Example

The following example add the synonym CREATED_BY_USER to the CREATED_BY attribute of the UI Defaults Attribute Dictionary within the workspace associated with the current schema.

```
BEGIN
    apex_ui_default_update.add_ad_synonym (
       p_column_name => 'CREATED_BY',
       p_syn_name    => 'CREATED_BY_USER' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.3 DEL_AD_COLUMN Procedure

If the column name is found within the User Interface Default Attribute Dictionary, the column, along with any associated synonyms, is deleted.

Syntax

```
APEX_UI_DEFAULT_UPDATE.DEL_AD_COLUMN (
    p_column_name           IN VARCHAR2 );
```

Parameters

| Parameter       | Description                  |
|:----------------|:-----------------------------|
| `p_column_name` | Name of column to be deleted |

Example

The following example deletes the attribute CREATED_BY from the UI Defaults Attribute Dictionary within the workspace associated with the current schema.

```
BEGIN
    apex_ui_default_update.del_ad_column (
       p_column_name => 'CREATED_BY' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.4 DEL_AD_SYNONYM Procedure

If the synonym name is found within the User Interface Default Attribute Dictionary, the synonym name is deleted.

Syntax

```
APEX_UI_DEFAULT_UPDATE.DEL_AD_SYNONYM (
    p_syn_name           IN VARCHAR2 );
```

Parameters

| Parameter    | Description                   |
|:-------------|:------------------------------|
| `p_syn_name` | Name of synonym to be deleted |

Example

The following example deletes the synonym CREATED_BY_USER from the UI Defaults Attribute Dictionary within the workspace associated with the current schema.

```
BEGIN
    apex_ui_default_update.del_ad_synonym (
       p_syn_name    => 'CREATED_BY_USER' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.5 DEL_COLUMN Procedure

If the provided table and column exists within the user's schema's table based User Interface Defaults, the UI Defaults for it are deleted.

Syntax

```
APEX_UI_DEFAULT_UPDATE.DEL_COLUMN (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Name of table whose column's UI Defaults are to be deleted. |
| `p_column_name` | Name of column whose UI Defaults are to be deleted. |

Example

The following example deletes the column `CREATED_BY` from the `EMP` table definition within the UI Defaults Table Dictionary within the current schema.

```
BEGIN
    apex_ui_default_update.del_column (
       p_table_name  => 'EMP',
       p_column_name => 'CREATED_BY' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.6 DEL_GROUP Procedure

If the provided table and group exists within the user's schema's table based User Interface Defaults, the UI Defaults for it are deleted and any column within the table that references that group has the group_id set to null.

Syntax

```
APEX_UI_DEFAULT_UPDATE.DEL_GROUP (
    p_table_name            IN VARCHAR2,
    p_group_name            IN VARCHAR2 );
```

Parameters

| Parameter      | Description                                              |
|:---------------|:---------------------------------------------------------|
| `p_table_name` | Name of table whose group UI Defaults are to be deleted. |
| `p_group_name` | Name of group whose UI Defaults are to be deleted.       |

Example

The following example deletes the group `AUDIT_INFO` from the `EMP` table definition within the UI Defaults Table Dictionary within the current schema.

```
BEGIN
    apex_ui_default_update.del_group (
       p_table_name => 'EMP',
       p_group_name => 'AUDIT_INFO' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.7 DEL_TABLE Procedure

If the provided table exists within the user's schema's table based User Interface Defaults, the UI Defaults for it is deleted. This includes the deletion of any groups defined for the table and all the columns associated with the table.

Syntax

```
APEX_UI_DEFAULT_UPDATE.DEL_TABLE (
    p_table_name            IN VARCHAR2 );
```

Parameters

| Parameter      | Description |
|:---------------|:------------|
| `p_table_name` | Table name. |

Example

The following example removes the UI Defaults for the EMP table that are associated with the current schema.

```
begin
    apex_ui_default_update.del_table (
        p_table_name => 'EMP' );
end;
/
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.8 SYNCH_TABLE Procedure

If the Table Based User Interface Defaults for the table do not already exist within the user's schema, they are defaulted. If they do exist, they are synchronized, meaning, the columns in the table is matched against the column in the UI Defaults Table Definitions. Additions and deletions are used to make them match.

Syntax

```
APEX_UI_DEFAULT_UPDATE.SYNCH_TABLE (
    p_table_name            IN VARCHAR2 );
```

Parameters

| Parameter      | Description |
|:---------------|:------------|
| `p_table_name` | Table name. |

Example

The following example synchronizes the UI Defaults for the `EMP` table that are associated with the current schema.

```
BEGIN
    apex_ui_default_update.synch_table (
       p_table_name => 'EMP' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.9 UPD_AD_COLUMN Procedure

If the column name is found within the User Interface Default Attribute Dictionary, the column entry is updated using the provided parameters. If 'null%' is passed in, the value of the associated parameter is set to null.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_AD_COLUMN (
    p_column_name           IN  VARCHAR2,
    p_new_column_name       IN  VARCHAR2  DEFAULT NULL,
    p_label                 IN  VARCHAR2  DEFAULT NULL,
    p_help_text             IN  VARCHAR2  DEFAULT NULL,
    p_format_mask           IN  VARCHAR2  DEFAULT NULL,
    p_default_value         IN  VARCHAR2  DEFAULT NULL,
    p_form_format_mask      IN  VARCHAR2  DEFAULT NULL,
    p_form_display_width    IN  VARCHAR2  DEFAULT NULL,
    p_form_display_height   IN  VARCHAR2  DEFAULT NULL,
    p_form_data_type        IN  VARCHAR2  DEFAULT NULL,
    p_report_format_mask    IN  VARCHAR2  DEFAULT NULL,
    p_report_col_alignment  IN  VARCHAR2  DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_column_name` | Name of column to be updated |
| `p_new_column_name` | New name for column, if column is being renamed |
| `p_label` | Used for item label and report column heading |
| `p_help_text` | Used for help text for items and interactive report columns |
| `p_format_mask` | Used as the format mask for items and report columns. Can be overwritten by report for form specific format masks. |
| `p_default_value` | Used as the default value for items. |
| `p_form_format_mask` | If provided, used as the format mask for items, overriding any value for the general format mask. |
| `p_form_display_width` | Used as the width of any items using this Attribute Definition. |
| `p_form_display_height` | Used as the height of any items using this Attribute Definition (only used by item types such as text areas and shuttles). |
| `p_form_data_type` | Used as the data type for items (results in an automatic validation). Valid values are `VARCHAR`, `NUMBER` and `DATE`. |
| `p_report_format_mask` | If provided, used as the format mask for report columns, overriding any value for the general format mask. |
| `p_report_col_alignment` | Used as the alignment for report column data (for example, number are usually right justified). Valid values are LEFT, CENTER, and RIGHT. |

Note:

If `p_label` through `p_report_col_alignment` are set to 'null%', the value is nullified. If no value is passed in, that column is not updated.

Example

The following example updates the `CREATED_BY` column in the UI Defaults Attribute Dictionary within the workspace associated with the current schema, setting the form_format_mask to null.

```
BEGIN
    apex_ui_default_update.upd_ad_column (
       p_column_name      => 'CREATED_BY',
       p_form_format_mask => 'null%');
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.10 UPD_AD_SYNONYM Procedure

If the synonym name is found within the User Interface Default Attribute Dictionary, the synonym name is updated.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_AD_SYNONYM (
    p_syn_name           IN VARCHAR2,
    p_new_syn_name       IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter        | Description                    |
|:-----------------|:-------------------------------|
| `p_syn_name`     | Name of synonym to be updated. |
| `p_new_syn_name` | New name for synonym.          |

Example

The following example updates the `CREATED_BY_USER` synonym in the UI Defaults Attribute Dictionary within the workspace associated with the current schema.

```
BEGIN
    apex_ui_default_update.upd_ad_synonym (
       p_syn_name     => 'CREATED_BY_USER',
       p_new_syn_name => 'USER_CREATED_BY');
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.11 UPD_COLUMN Procedure

If the provided table and column exists within the user's schema's table based User Interface Defaults, the provided parameters are updated. If 'null%' is passed in, the value of the associated parameter is set to null.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_COLUMN (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_group_id              IN VARCHAR2  DEFAULT NULL,
    p_label                 IN VARCHAR2  DEFAULT NULL,
    p_help_text             IN VARCHAR2  DEFAULT NULL,
    p_display_in_form       IN VARCHAR2  DEFAULT NULL,
    p_display_seq_form      IN VARCHAR2  DEFAULT NULL,
    p_mask_form             IN VARCHAR2  DEFAULT NULL,
    p_default_value         IN VARCHAR2  DEFAULT NULL,
    p_required              IN VARCHAR2  DEFAULT NULL,
    p_display_width         IN VARCHAR2  DEFAULT NULL,
    p_max_width             IN VARCHAR2  DEFAULT NULL,
    p_height                IN VARCHAR2  DEFAULT NULL,
    p_display_in_report     IN VARCHAR2  DEFAULT NULL,
    p_display_seq_report    IN VARCHAR2  DEFAULT NULL,
    p_mask_report           IN VARCHAR2  DEFAULT NULL,
    p_alignment             IN VARCHAR2  DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Name of table whose column's UI Defaults are being updated. |
| `p_column_name` | Name of column whose UI Defaults are being updated. |
| `p_group_id` | ID of group to be associated with the column. |
| `p_label` | When creating a form against this table or view, this is used as the label for the item if this column is included. When creating a report or tabular form, this is used as the column heading if this column is included. |
| `p_help_text` | When creating a form against this table or view, this becomes the help text for the resulting item. |
| `p_display_in_form` | When creating a form against this table or view, this determines whether this column is displayed in the resulting form page. Valid values are Y and N. |
| `p_display_seq_form` | When creating a form against this table or view, this determines the sequence in which the columns are displayed in the resulting form page. |
| `p_mask_form` | When creating a form against this table or view, this specifies the mask that is applied to the item, such as 999-99-9999. This is not used for character based items. |
| `p_default_value` | When creating a form against this table or view, this specifies the default value for the item resulting from this column. |
| `p_required` | When creating a form against this table or view, this specifies to generate a validation in which the resulting item must be NOT NULL. Valid values are Y and N. |
| `p_display_width` | When creating a form against this table or view, this specifies the display width of the item resulting from this column. |
| `p_max_width` | When creating a form against this table or view, this specifies the maximum string length that a user is allowed to enter in the item resulting from this column. |
| `p_height` | When creating a form against this table or view, this specifies the display height of the item resulting from this column. |
| `p_display_in_report` | When creating a report against this table or view, this determines whether this column is displayed in the resulting report. Valid values are Y and N. |
| `p_display_seq_report` | When creating a report against this table or view, this determines the sequence in which the columns are displayed in the resulting report. |
| `p_mask_report` | When creating a report against this table or view, this specifies the mask that is applied against the data, such as 999-99-9999. This is not used for character based items. |
| `p_alignment` | When creating a report against this table or view, this determines the alignment for the resulting report column. Valid values are L for Left, C for Center, and R for Right. |

Note:

If `p_group_id` through `p_alignment` are set to 'null%', the value is nullified. If no value is passed in, that column is not updated.

Example

The following example updates the column `DEPT_NO` within the `EMP` table definition within the UI Defaults Table Dictionary within the current schema, setting the `group_id` to null.

```
BEGIN
    apex_ui_default_update.upd_column (
       p_table_name    => 'EMP',
       p_column_name   => 'DEPT_NO',
       p_group_id      => 'null%' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.12 UPD_DISPLAY_IN_FORM Procedure

The `UPD_DISPLAY_IN_FORM` procedure sets the display in form user interface defaults. This user interface default is used by wizards when you select to create a form based upon the table. It controls whether the column is included by default or not.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_DISPLAY_IN_FORM (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_display_in_form       IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_display_in_form` | Determines whether to display in the form by default, valid values are `Y` and `N`. |

Example

In the following example, when creating a Form against the DEPT table, the display option on the DEPTNO column defaults to 'No'.

```
APEX_UI_DEFAULT_UPDATE.UPD_DISPLAY_IN_FORM(
    p_table_name => 'DEPT',
    p_column_name => 'DEPTNO',
    p_display_in_form => 'N');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.13 UPD_DISPLAY_IN_REPORT Procedure

The `UPD_DISPLAY_IN_REPORT` procedure sets the display in report user interface default. This user interface default is used by wizards when you select to create a report based upon the table and controls whether the column is included by default or not.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_DISPLAY_IN_REPORT (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_display_in_report     IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_display_in_report` | Determines whether to display in the report by default, valid values are `Y` and `N`. |

Example

In the following example, when creating a Report against the DEPT table, the display option on the DEPTNO column defaults to 'No'.

```
APEX_UI_DEFAULT_UPDATE.UPD_DISPLAY_IN_REPORT(
    p_table_name => 'DEPT',
    p_column_name => 'DEPTNO',
    p_display_in_report => 'N');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.14 UPD_FORM_REGION_TITLE Procedure

The `UPD_FORM_REGION_TITLE` procedure updates the Form Region Title user interface default. User interface defaults are used in wizards when you create a form based upon the specified table.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_FORM_REGION_TITLE (
    p_table_name            IN VARCHAR2,
    p_form_region_title     IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter             | Description                |
|:----------------------|:---------------------------|
| `p_table_name`        | Table name.                |
| `p_form_region_title` | Desired form region title. |

Example

This example demonstrates how to set the Forms Region Title user interface default on the DEPT table.

```
APEX_UI_DEFAULT_UPDATE.UPD_FORM_REGION_TITLE (
    p_table_name         => 'DEPT',
    p_form_region_title  => 'Department Details');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.15 UPD_GROUP Procedure

If the provided table and group exist within the user's schema's table based User Interface Defaults, the group name, description and display sequence of the group are updated. If 'null%' is passed in for p_description or p_display_sequence, the value is set to null.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_GROUP (
    p_table_name            IN VARCHAR2,
    p_group_name            IN VARCHAR2,
    p_new_group_name        IN VARCHAR2 DEFAULT NULL,
    p_description           IN VARCHAR2 DEFAULT NULL,
    p_display_sequence      IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter            | Description                                    |
|:---------------------|:-----------------------------------------------|
| `p_table_name`       | Name of table whose group is being updated.    |
| `p_group_name`       | Group being updated.                           |
| `p_new_group_name`   | New name for group, if group is being renamed. |
| `p_description`      | Description of group.                          |
| `p_display_sequence` | Display sequence of group.                     |

Note:

If `p_description` or `p_display_sequence` are set to 'null%', the value is nullified. If no value is passed in, that column is not updated.

Example

The following example updates the description of the group `AUDIT_INFO` within the `EMP` table definition within the UI Defaults Table Dictionary within the current schema.

```
BEGIN
    apex_ui_default_update.upd_group (
       p_table_name  => 'EMP',
       p_group_name  => 'AUDIT_INFO',
       p_description => 'Audit columns' );
END;
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.16 UPD_ITEM_DISPLAY_HEIGHT Procedure

Sets the item display height user interface default. This user interface default is used by wizards when you select to create a form based upon the table and include the specified column. Display height controls if the item is a text box or a text area.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_DISPLAY_HEIGHT (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_display_height        IN NUMBER );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_display_height` | Display height of any items created based upon this column. |

Example

The following example sets a default item height of 3 when creating an item on the DNAME column against the DEPT table.

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_DISPLAY_HEIGHT(
   p_table_name => 'DEPT',
   p_column_name => 'DNAME',
   p_display_height => 3);
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.17 UPD_ITEM_DISPLAY_WIDTH Procedure

The `UPD_ITEM_DISPLAY_WIDTH` procedure sets the item display width user interface default. This user interface default is used by wizards when you select to create a form based upon the table and include the specified column.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_DISPLAY_WIDTH (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_display_width         IN NUMBER );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_display_width` | Display width of any items created based upon this column. |

Example

The following example sets a default item width of 5 when creating an item on the DEPTNO column against the DEPT table.

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_DISPLAY_WIDTH(
   p_table_name => 'DEPT',
   p_column_name => 'DEPTNO',
   p_display_width => 5);
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.18 UPD_ITEM_FORMAT_MASK Procedure

The `UPD_ITEM_FORMAT_MASK` procedure sets the item format mask user interface default. This user interface default is used by wizards when you select to create a form based upon the table and include the specified column. Item format mask is typically used to format numbers and dates.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_FORMAT_MASK (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_format_mask           IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter       | Description                                   |
|:----------------|:----------------------------------------------|
| `p_table_name`  | Table name.                                   |
| `p_column_name` | Column name.                                  |
| `p_format_mask` | Format mask to be associated with the column. |

Example

In the following example, when creating a Form against the EMP table, the default item format mask on the HIREDATE column is set to 'DD-MON-YYYY'.

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_FORMAT_MASK(
    p_table_name => 'EMP',
    p_column_name => 'HIREDATE',
    p_format_mask=> 'DD-MON-YYYY');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.19 UPD_ITEM_HELP Procedure

The `UPD_ITEM_HELP` procedure updates the help text for the specified table and column. This user interface default is used when you create a form based upon the table and select to include the specified column.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_HELP (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_help_text             IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter       | Description        |
|:----------------|:-------------------|
| `p_table_name`  | Table name.        |
| `p_column_name` | Column name.       |
| `p_help_text`   | Desired help text. |

Example

This example demonstrates how to set the User Interface Item Help Text default for the DEPTNO column in the DEPT table.

```
APEX_UI_DEFAULT_UPDATE.UPD_ITEM_HELP(
   p_table_name => 'DEPT',
   p_column_name => 'DEPTNO',
   p_help_text => 'The number assigned to the department.');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.20 UPD_LABEL Procedure

The `UPD_LABEL` procedure sets the label used for items. This user interface default is used when you create a form or report based on the specified table and include a specific column.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_LABEL (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_label                 IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter       | Description         |
|:----------------|:--------------------|
| `p_table_name`  | Table name.         |
| `p_column_name` | Column name.        |
| `p_label`       | Desired item label. |

Example

This example demonstrates how to set the User Interface Item Label default for the DEPTNO column in the DEPT table.

```
APEX_UI_DEFAULT_UPDATE.UPD_LABEL(
   p_table_name => 'DEPT',
   p_column_name => 'DEPTNO',
   p_label => 'Department Number');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.21 UPD_REPORT_ALIGNMENT Procedure

The UPD_REPORT_ALIGNMENT procedure sets the report alignment user interface default. This user interface default is used by wizards when you select to create a report based upon the table and include the specified column and determines if the report column should be left, center, or right justified.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_REPORT_ALIGNMENT (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_report_alignment      IN VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_report_alignment` | Defines the alignment of the column in a report. Valid values are L (left), C (center) and R (right). |

Example

In the following example, when creating a Report against the DEPT table, the default column alignment on the DEPTNO column is set to Right justified.

```
APEX_UI_DEFAULT_UPDATE.UPD_REPORT_ALIGNMENT(
    p_table_name => 'DEPT',
    p_column_name => 'DEPTNO',
    p_report_alignment => 'R');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.22 UPD_REPORT_FORMAT_MASK Procedure

The `UPD_REPORT_FORMAT_MASK` procedure sets the report format mask user interface default. This user interface default is used by wizards when you select to create a report based upon the table and include the specified column. Report format mask is typically used to format numbers and dates.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_REPORT_FORMAT_MASK (
    p_table_name            IN VARCHAR2,
    p_column_name           IN VARCHAR2,
    p_format_mask           IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_table_name` | Table name. |
| `p_column_name` | Column name. |
| `p_format_mask` | Format mask to be associated with the column whenever it is included in a report. |

Example

In the following example, when creating a Report against the EMP table, the default format mask on the HIREDATE column is set to 'DD-MON-YYYY'.

```
APEX_UI_DEFAULT_UPDATE.UPD_REPORT_FORMAT_MASK(
    p_table_name => 'EMP',
    p_column_name => 'HIREDATE',
    p_format_mask=> 'DD-MON-YYYY');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.23 UPD_REPORT_REGION_TITLE Procedure

The `UPD_REPORT_REGION_TITLE` procedure sets the Report Region Title. User interface defaults are used in wizards when a report is created on a table.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_REPORT_REGION_TITLE (
    p_table_name            IN VARCHAR2,
    p_report_region_title   IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter               | Description                  |
|:------------------------|:-----------------------------|
| `p_table_name`          | Table name.                  |
| `p_report_region_title` | Desired report region title. |

Example

This example demonstrates how to set the Reports Region Title user interface default on the DEPT table.

```
APEX_UI_DEFAULT_UPDATE.UPD_REPORT_REGION_TITLE (
    p_table_name            => 'DEPT',
    p_report_region_title   => 'Departments');
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)

------------------------------------------------------------------------

## 60.24 UPD_TABLE Procedure

If the provided table exists within the user's schema's table based User Interface Defaults, the form region title and report region title are updated to match those provided. If 'null%' is passed in for p_form_region_title or p_report_region_title, the value is set to null.

Syntax

```
APEX_UI_DEFAULT_UPDATE.UPD_TABLE (
    p_table_name            IN VARCHAR2,
    p_form_region_title     IN VARCHAR2 DEFAULT NULL,
    p_report_region_title   IN VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameter               | Description                                      |
|:------------------------|:-------------------------------------------------|
| `p_table_name`          | Name of table being updated.                     |
| `p_form_region_title`   | Region title used for forms.                     |
| `p_report_region_title` | Region title used for reports and tabular forms. |

Note:

If `null%` is passed in for `p_form_region_title` or `p_report_region_title`, the value is set to `null`. If no value is passed in, that column is not updated.

Example

The following example updates the EMP table definition within the UI Defaults Table Dictionary within the current schema.

```
begin
    apex_ui_default_update.upd_table (
       p_table_name          => 'EMP',
       p_form_region_title   => 'Employee Details',
       p_report_region_title => 'Employees' );
end;
/
```

**Parent topic:** [APEX_UI_DEFAULT_UPDATE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UI_DEFAULT_UPDATE.html#GUID-90E0D15A-4EBB-4C12-B66E-8FA76A4F31F5)
