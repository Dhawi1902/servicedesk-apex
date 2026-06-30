<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.popup.html -->
<!-- Namespaces: apex.navigation.popup -->

# Namespace: popup

## QuickNav

### [Functions](#methods-section)

- [close](#.close)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html)[.navigation](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html).popup

This namespace contains functions related to a popup window opened with [apex.navigation.popup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html#.fn:popup).

### Functions

#### (static) close(pItem, pValue)

Sets the value of the item in the parent window (pItem) with (pValue), and then closes the popup window. This function should only be called from an Oracle APEX page that has been opened as a popup window, via a call to [apex.navigation.popup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html#.fn:popup), where the call to [apex.navigation.popup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.navigation.html#.fn:popup) is originating from another Oracle APEX page.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pItem` | Element \| string | The DOM Element or string id (item name) of the page item to be set with the value of `pValue`. |
| `pValue` | string | The value to be save to the page item referenced in `pItem`. |

##### Example

This example demonstrates a call to close a popup window, setting the page item P3_STATUS to the string "Action Processed".

```
apex.navigation.popup.close ( "P3_STATUS", "Action Processed." );
```
