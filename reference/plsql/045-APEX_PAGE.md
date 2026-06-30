<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 45  APEX_PAGE

The `APEX_PAGE` package is the public API for handling pages.

- [Global Constants](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE-Global-Constants.html#GUID-2B37224A-FFA2-48F6-BB24-2A7C9F87638E)
- [GET_CACHE_DATE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.GET_CACHE_DATA-Function.html#GUID-36077A7A-B392-4A57-A4ED-62A03ED09ACD)
- [GET_PAGE_MODE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_PAGE_MODE-Function.html#GUID-9F604150-AD2F-40AC-A0CC-6E352D7E3D5A)
- [GET_UI_TYPE Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_UI_TYPE-Function.html#GUID-2686DAD6-3D80-4FEB-90D7-CEA6C82358DE)
- [GET_URL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_URL-Function.html#GUID-83A2A2A0-5B43-4A3E-BBD3-2FBD3B7B01CE)
- [IS_DESKTOP_UI Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IS_DESKTOP_UI-Function.html#GUID-FB62E0E5-4895-4F25-AD45-B54455E71195)
- [IS_READ_ONLY Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE-IS_READ_ONLY-Function.html#GUID-2875816C-988B-4BEB-8533-CC9B6D5D74B2)
- [PURGE_CACHE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_CACHE-Procedure.html#GUID-DA08D745-1D62-4DFE-A6CF-2F4E0D1B316E)

------------------------------------------------------------------------

## 45.1 Global Constants

The APEX_PAGE package uses the following constants.

```
c_ui_type_desktop   constant varchar2(10) := 'DESKTOP'; -- Deprecated
```

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)

------------------------------------------------------------------------

## 45.2 GET_CACHE_DATE Function

This function returns the date and time a specified application page was cached either for the user issuing the call, or for all users if the page was not set to be cached by user.

Syntax

```
FUNCTION GET_CACHE_DATE (
    p_application_id IN NUMBER,
    p_page_id        IN NUMBER )
RETURN DATE;
```

Parameters

| Parameter          | Description                                        |
|:-------------------|:---------------------------------------------------|
| `p_application_id` | The identification number (ID) of the application. |
| `p_page_id`        | The page number (ID).                              |

Example

The following example demonstrates how to use the `GET_CACHE_DATE` function to retrieve the cache date and time for page 9 of the currently executing application. If page 9 is cached, the cache date and time is output using the HTP package. The page could have been cached either by the user issuing the call, or for all users if the page was not to be cached by the user.

```
declare
    l_cache_date date default null;
begin
    l_cache_date := apex_page.get_cache_date(
                        p_application_id => :APP_ID,
                        p_page_id        => 9 );
    if l_cache_date is not null then
        sys.htp.p('Cached on ' || to_char(l_cache_date, 'DD-MON-YY HH24:MI:SS'));
    end if;
end;
```

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)

------------------------------------------------------------------------

## 45.3 GET_PAGE_MODE Function

This function returns the page mode for a given page.

Syntax

```
FUNCTION GET_PAGE_MODE (
    p_application_id IN NUMBER,
    p_page_id        IN NUMBER )
    RETURN VARCHAR2;
```

Parameters

| Parameter          | Description              |
|:-------------------|:-------------------------|
| `p_application_id` | `ID` of the application. |
| `p_page_id`        | `ID` of the page.        |

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)

------------------------------------------------------------------------

## 45.4 GET_UI_TYPE Function (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

This function returns the user interface (UI) type for which the current page has been designed.

Syntax

```
FUNCTION GET_UI_TYPE
RETURN VARCHAR2;
```

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)

------------------------------------------------------------------------

## 45.5 GET_URL Function

Returns an APEX `f?p= URL`. It is sometimes clearer to read a function call than a concatenated URL. See the example below for a comparison.

Note:

The URL excludes a checksum if the specific application is located in a different workspace.

Syntax

```
APEX_PAGE.GET_URL (
    p_application        IN VARCHAR2 DEFAULT NULL,
    p_page               IN VARCHAR2 DEFAULT NULL,
    p_session            IN NUMBER   DEFAULT apex_application.g_instance,
    p_request            IN VARCHAR2 DEFAULT NULL,
    p_debug              IN VARCHAR2 DEFAULT NULL,
    p_clear_cache        IN VARCHAR2 DEFAULT NULL,
    p_items              IN VARCHAR2 DEFAULT NULL,
    p_values             IN VARCHAR2 DEFAULT NULL,
    p_printer_friendly   IN VARCHAR2 DEFAULT NULL,
    p_trace              IN VARCHAR2 DEFAULT NULL,
    p_x01                IN VARCHAR2 DEFAULT NULL,
    p_hash               IN VARCHAR2 DEFAULT NULL,
    p_triggering_element IN VARCHAR2 DEFAULT 'this',
    p_plain_url          IN BOOLEAN  DEFAULT FALSE,
    p_absolute_url       IN BOOLEAN  DEFAULT FALSE )
    RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application` | The application ID or alias. Defaults to the current application. |
| `p_page` | Page ID or alias. Defaults to the current page. |
| `p_session` | Session ID. Defaults to the current session ID. |
| `p_request` | URL request parameter. |
| `p_debug` | URL debug parameter. Defaults to the current debug mode. |
| `p_clear_cache` | URL clear cache parameter. |
| `p_items` | Comma-delimited list of item names to set session state. |
| `p_values` | Comma-separated list of item values to set session state. |
| `p_printer_friendly` | URL printer-friendly parameter. Defaults to the current request's printer-friendly mode. |
| `p_trace` | SQL trace parameter. |
| `p_x01` | Adds the parameter `&x01=value` to the URL. |
| `p_hash` | Adds `#hash-value` at the end of the URL. |
| `p_triggering_element` | A jQuery selector to identify which element to use to trigger the dialog (for example, `#my_button`, where "my_button" is the static ID for a button element). Required for Modal Dialog support. |
| `p_plain_url` | If the page you are calling `APEX_PAGE.GET_URL` from is a modal dialog, specify `p_plain_url` to omit the unnecessary JavaScript code in the generated link. By default, if this function is called from a modal dialog, JavaScript code to close the modal dialog is included in the generated URL. |
| `p_absolute_url` | If `FALSE` (default), auto-determines if an absolute URL is needed. If `TRUE`, always generates an absolute URL. |

Example

This query uses `APEX_PAGE.GET_URL` and its alternative `APEX_UTIL.PREPARE_URL` to produce two identical URLs.

```
SELECT APEX_PAGE.GET_URL (
            p_page   => 1,
            p_items  => 'P1_X,P1_Y',
            p_values => 'somevalue,othervalue' ) f_url_1,
         APEX_UTIL.PREPARE_URL('f?p=&APP_ID.:1:&APP_SESSION.::::P1_X,P1_Y:somevalue,othervalue') f_url_2
     FROM DUAL;
```

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)

------------------------------------------------------------------------

## 45.6 IS_DESKTOP_UI Function (Deprecated)

Note:

This API is deprecated and will be removed in a future release.

This function returns `TRUE` if the current page has been designed for desktop browsers.

Syntax

```
FUNCTION IS_DESKTOP_UI
RETURN BOOLEAN;
```

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)

------------------------------------------------------------------------

## 45.7 IS_READ_ONLY Function

This function returns `TRUE` if the current page is rendered read-only and `FALSE` if it is not.

Syntax

```
FUNCTION IS_READ_ONLY
RETURN BOOLEAN;
```

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)

------------------------------------------------------------------------

## 45.8 PURGE_CACHE Procedure

This procedure purges the cache of the specified application, page, and region for the specified user. If the user is not specified, the procedure purges all cached versions of the page.

Syntax

```
APEX_PAGE.PURGE_CACHE (
    p_application_id       IN NUMBER DEFAULT apex.g_flow_id,
    p_page_id              IN NUMBER DEFAULT apex.g_flow_step_id,
    p_user_name            IN VARCHAR2 DEFAULT NULL,
    p_current_session_only IN BOOLEAN  DEFAULT FALSE );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | `ID` of the application. Defaults to the current application. |
| `p_page_id` | `ID` of the page. Defaults to the current page. If you pass NULL, Oracle APEX purges the cache on all pages of the application. |
| `p_user_name` | Specify a user name if you only want to purge entries that were saved for the given user. |
| `p_current_session_only` | Specify `TRUE` if you only want to purge entries that where saved for the current session. Defaults to `FALSE`. |

Example

This example purges session specific cache on the current page.

```
BEGIN
     APEX_PAGE.PURGE_CACHE (
         p_current_session_only => true );
END;
```

**Parent topic:** [APEX_PAGE](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PAGE.html#GUID-4E9A6524-DD04-4C34-BF9A-ABC6233E6C22)
