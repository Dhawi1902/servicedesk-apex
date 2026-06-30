<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 4 APEX_APP_OBJECT_DEPENDENCY

This API enables building the Application Database Object Dependencies report on demand.

It scans the application (or a page in the application) for all database objects that it depends on (including but not limited to tables, views, procedures, functions, packages, and synonyms), whether these dependencies are in forms, reports, PL/SQL regions, conditions, plugins, or elsewhere. It can also be used to detect invalid SQL and PL/SQL in the application.

The result of the scan may be viewed by querying the following views:

- APEX_USED_DB_OBJECT_COMP_PROPS - all application SQL and PL/SQL found
- APEX_USED_DB_OBJECTS - all database objects referred to
- APEX_USED_DB_OBJ_DEPENDENCIES - all dependencies found

In the event that a fragment of SQL or PL/SQL is invalid (such as a required object is missing), some dependencies may not be detected. The compilation error message may be queried in the APEX_USED_DB_OBJECT_COMP_PROPS view.

- [Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.Constants.html#GUID-B2C2F938-BDC5-418A-B92C-71C47C9317D4)
- [CLEAR_CACHE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.CLEAR_CACHE-Procedure.html#GUID-C721C557-7168-4415-9CA3-4C4556EBBBEB)
- [SCAN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.SCAN-Procedure.html#GUID-1E2AE34E-EB71-4581-9B7E-3C26DCD2430C)

------------------------------------------------------------------------

## 4.1 Constants

The APEX_APP_OBJECT_DEPENDENCY package uses the following constants.

```
c_option_all          constant varchar2(30) := 'ALL';
c_option_dependencies constant varchar2(30) := 'DEPENDENCIES';
c_option_identifiers  constant varchar2(30) := 'IDENTIFIERS';
c_option_errors       constant varchar2(30) := 'ERRORS';
```

**Parent topic:** [APEX_APP_OBJECT_DEPENDENCY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.html#GUID-9E5E8896-492E-4CB0-B153-C0F7A81BA54F)

------------------------------------------------------------------------

## 4.2 CLEAR_CACHE Procedure

This procedure removes all cached dependency report data for a given application.

Syntax

```
APEX_APP_OBJECT_DEPENDENCY.CLEAR_CACHE (
    p_application_id     IN NUMBER )
```

Parameters

| Parameter          | Description                                       |
|:-------------------|:--------------------------------------------------|
| `p_application_id` | ID of the application for which cache is cleared. |

Example

```
BEGIN
    apex_app_object_dependency.clear_cache ( p_application_id => :app_id );
END;
```

**Parent topic:** [APEX_APP_OBJECT_DEPENDENCY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.html#GUID-9E5E8896-492E-4CB0-B153-C0F7A81BA54F)

------------------------------------------------------------------------

## 4.3 SCAN Procedure

This procedure generates the object dependency report.

It scans the application or a page in the application for all database objects that it depends on (including tables, views, procedures, functions, packages, and synonyms) whether these dependencies are in forms, reports, PL/SQL regions, conditions, plugins, or elsewhere.

The results are visible by querying the following views:

- `APEX_USED_DB_OBJECT_COMP_PROPS` - all application SQL and PL/SQL found
- `APEX_USED_DB_OBJECTS` - all database objects referred to
- `APEX_USED_DB_OBJ_DEPENDENCIES` - all dependencies found

In the event that a fragment of SQL or PL/SQL is invalid (for example, a required object is missing), the dependencies are not detected. The compilation error message may be queried in the `APEX_USED_DB_OBJECT_COMP_PROPS` view.

The results of the scan are saved until:

- a new scan initiates
- `apex_app_object_dependency.clear_cache` is called
- the Oracle APEX instance is upgraded

PL/Scope

The scanner only detects dependencies specific to functions and procedures within packages compiled with PL/Scope. Before starting the scan, you may choose to compile the schema(s) of interest with PL/Scope:

```
alter session set plscope_settings='identifiers:all';
exec sys.dbms_utility.compile_schema(user, true);
alter session set plscope_settings='identifiers:none';
```

This may take some time to run depending on the size of the codebase.

For packages not compiled with PL/Scope, the scanner only detects a dependency on the package; but the report does not list each method referenced within it.

Requirements

The application owner schema requires `CREATE PROCEDURE` privilege.

Known Limitations

- Does not detect dependencies within SQL generated dynamically (such as using execute immediate or dbms_sql).
- Does not detect dependencies arising from Function Returning SQL or Function Body Returning SQL (the functions are not executed so the code that they generate is not scanned for dependencies).
- Does not detect recursive dependencies (other database objects referred to by the objects detected in the scan). Tip: Recursive dependencies may be found by querying the `USER_DEPENDENCIES` database view.
- Does not detect dependencies in Supporting Object scripts, including those that may arise in Required Object Names, Install Scripts, Upgrade Scripts, or Deinstall Scripts.

Syntax

```
APEX_APP_OBJECT_DEPENDENCY.SCAN (
    p_application_id IN NUMBER,
    p_page_id        IN NUMBER   DEFAULT NULL,
    p_options        IN VARCHAR2 DEFAULT c_option_all )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d23287e142" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d23287e144" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d23287e148" style="text-align: left;" data-valign="top" width="42%" headers="d23287e142 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d23287e148 d23287e144 ">ID of the application to be analyzed.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d23287e154" style="text-align: left;" data-valign="top" width="42%" headers="d23287e142 "><code class="codeph">p_page_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d23287e154 d23287e144 ">Set this parameter to analyze a single page of an application.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d23287e160" style="text-align: left;" data-valign="top" width="42%" headers="d23287e142 "><code class="codeph">p_options</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d23287e160 d23287e144 "><p>Options include:</p>
<ul>
<li><code class="codeph">c_option_all</code> - (Default) Scan all sources.</li>
<li><code class="codeph">c_option_dependencies</code> - Only scan for top-level dependencies with <code class="codeph">dba_dependencies</code>.</li>
<li><code class="codeph">c_option_identifiers</code> - Scan for detailed dependencies with PL/Scope where available. This enables detection of dependencies on columns in tables and views, and also member functions and procedures within packages compiled with <code class="codeph">identifiers:all</code>.</li>
<li><code class="codeph">c_option_errors</code> - Scan neither (report compilation errors only).</li>
</ul></td>
</tr>
</tbody>
</table>

Example

```
BEGIN
    apex_app_object_dependency.scan ( p_application_id => :app_id );
END;
```

**Parent topic:** [APEX_APP_OBJECT_DEPENDENCY](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.html#GUID-9E5E8896-492E-4CB0-B153-C0F7A81BA54F)
