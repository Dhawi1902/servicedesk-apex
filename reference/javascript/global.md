<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/global.html -->
<!-- Non-namespace APIs: global -->

# Non-namespace APIs

## QuickNav

### [Functions](#methods-section)

- [\$d_ClearAndHide](#$d_ClearAndHide)
- [\$dom_AddInput](#$dom_AddInput)
- [\$dom_AddTag](#$dom_AddTag)
- [\$dom_MakeParent](#$dom_MakeParent)
- [\$f_CheckAll](#$f_CheckAll)
- [\$f_CheckFirstColumn](#$f_CheckFirstColumn)
- [\$f_DisableOnValue](#$f_DisableOnValue)
- [\$f_Hide_On_Value_Item](#$f_Hide_On_Value_Item)
- [\$f_Hide_On_Value_Item_Row](#$f_Hide_On_Value_Item_Row)
- [\$f_ReturnChecked](#$f_ReturnChecked)
- [\$f_SelectValue](#$f_SelectValue)
- [\$f_SelectedOptions](#$f_SelectedOptions)
- [\$f_SetValueSequence](#$f_SetValueSequence)
- [\$f_Show_On_Value_Item](#$f_Show_On_Value_Item)
- [\$f_Show_On_Value_Item_Row](#$f_Show_On_Value_Item_Row)
- [\$f_Swap](#$f_Swap)
- [\$f_ValuesToArray](#$f_ValuesToArray)
- [\$f_get_emptys](#$f_get_emptys)
- [\$nvl](#$nvl)
- [\$s](#$s)
- [\$tr_AddTD](#$tr_AddTD)
- [\$tr_AddTH](#$tr_AddTH)
- [\$u_Carray](#$u_Carray)
- [\$u_Narray](#$u_Narray)
- [\$v](#$v)
- [\$v2](#$v2)
- [\$v_Array](#$v_Array)
- [\$v_CheckValueAgainst](#$v_CheckValueAgainst)
- [\$v_Upper](#$v_Upper)
- [\$x](#$x)
- [\$x_ByClass](#$x_ByClass)
- [\$x_CheckImageSrc](#$x_CheckImageSrc)
- [\$x_Class](#$x_Class)
- [\$x_ClassByClass](#$x_ClassByClass)
- [\$x_FormItems](#$x_FormItems)
- [\$x_Hide](#$x_Hide)
- [\$x_HideAllExcept](#$x_HideAllExcept)
- [\$x_HideChildren](#$x_HideChildren)
- [\$x_HideItemRow](#$x_HideItemRow)
- [\$x_HideSiblings](#$x_HideSiblings)
- [\$x_ItemRow](#$x_ItemRow)
- [\$x_Remove](#$x_Remove)
- [\$x_RowHighlight](#$x_RowHighlight)
- [\$x_RowHighlightOff](#$x_RowHighlightOff)
- [\$x_SetSiblingsClass](#$x_SetSiblingsClass)
- [\$x_Show](#$x_Show)
- [\$x_ShowAllByClass](#$x_ShowAllByClass)
- [\$x_ShowChildren](#$x_ShowChildren)
- [\$x_ShowItemRow](#$x_ShowItemRow)
- [\$x_ShowSiblings](#$x_ShowSiblings)
- [\$x_Style](#$x_Style)
- [\$x_SwitchImageSrc](#$x_SwitchImageSrc)
- [\$x_Toggle](#$x_Toggle)
- [\$x_ToggleItemRow](#$x_ToggleItemRow)
- [\$x_ToggleWithImage](#$x_ToggleWithImage)
- [\$x_UpTill](#$x_UpTill)
- [\$x_Value](#$x_Value)
- [\$x_disableItem](#$x_disableItem)
- [html_RemoveAllChildren](#html_RemoveAllChildren)
- [html_SetSelectValue](#html_SetSelectValue)

This section contains all the miscellaneous, non-namespace APIs of Oracle APEX, including shortcuts to highly used functions.

### Functions

#### \$d_ClearAndHide(pNd)

Clears the content of a DOM node or array of DOM nodes and hides them.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> | The node(s) to clear and hide. |

#### \$dom_AddInput(pThis, pTypeopt, pIdopt, pNameopt, pValueopt) → {Element}

Inserts the html form input element (pType) as a child node of a DOM node (pThis) with an id (pId) and name (pName) value set to (pValue).

##### Parameters:

<table class="params" aria-label="Parameters for $dom_AddInput">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pThis</code></th>
<td class="type">Element | string</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pType</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The input type. The default is "text".</td>
</tr>
<tr>
<th class="name" scope="row"><code>pId</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The input element id.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pName</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The input element name.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The input element value.</td>
</tr>
</tbody>
</table>

##### Returns:

The element inserted.

Type
Element

#### \$dom_AddTag(pThis, pTagopt, pTextopt) → {Element}

Inserts the html element (pTag) as a child node of a DOM node (pThis) with the innerHTML set to (pText).

##### Parameters:

<table class="params" aria-label="Parameters for $dom_AddTag">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pThis</code></th>
<td class="type">Element | string</td>
<td class="attributes"></td>
<td class="description last">The DOM node to append the new element to.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pTag</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The new element tag.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pText</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The new element content.</td>
</tr>
</tbody>
</table>

##### Returns:

The DOM node inserted.

Type
Element

#### \$dom_MakeParent(pThis, pParent) → {Element}

Takes a DOM node (p_Node) and makes it a child of DOM node (p_Parent) and then returns the DOM node (pNode).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string | DOM node or string ID |
| `pParent` | Element \| string | DOM node or string ID |

##### Returns:

Type
Element

#### \$f_CheckAll(pThis, pCheck, pArray)

Check or uncheck (pCheck) all check boxes contained within a DOM node (pThis). If an array of checkboxes DOM nodes (pArray) is provided, use that array for affected check boxes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string | The DOM node or string id of the DOM node that contains the checkboxes. |
| `pCheck` | boolean | true to check and false to uncheck. |
| `pArray` | Array.\<Element\> | Checkbox elements. |

#### \$f_CheckFirstColumn(pNd) → {Array.\<Element\>}

This function sets all checkboxes located in the first column of a table based on the checked state of the calling checkbox (pNd), useful for tabular forms.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| String |  |

##### Returns:

Type
Array.\<Element\>

#### \$f_DisableOnValue(pThis, pValue, pThat) → {boolean}

Checks the value (pValue) of an item (pThis). If it matches, this function disables the item or array of items (pThat). If it does not match, then the item is enabled.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pValue` | String |  |
| `pThat` | Element \| string \| Array.\<Element\> |  |

##### Returns:

Type
boolean

#### \$f_Hide_On_Value_Item(pThis, pThat, pValue) → {boolean}

Checks page item's (pThis) value against a value (pValue). If it matches, a DOM node (pThat) is set to hidden. If it does not match, then the DOM node (pThat) is set to visible.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pThat` | Element \| string \| Array.\<Element\> |  |
| `pValue` | Number \| String \| Array |  |

##### Returns:

Type
boolean

#### \$f_Hide_On_Value_Item_Row(pThis, pThat, pValue) → {boolean}

Checks the value (pValue) of an item (pThis). If it matches, this function hides the table row that holds (pThat). If it does not match, then the table row is shown.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pThat` | Element \| string \| Array.\<Element\> |  |
| `pValue` | Number \| String \| Array |  |

##### Returns:

Type
boolean

#### \$f_ReturnChecked(pNd) → {Array}

Returns an item value as an array. Useful for radio items and checkboxes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

##### Returns:

Type
Array

#### \$f_SelectValue(pNd) → {Array\|String}

Returns the values of the selected options of a select item (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

##### Returns:

Type
Array \| String

#### \$f_SelectedOptions(pNd) → {Array.\<Element\>\|Element\|false}

Returns the DOM nodes of the selected options of a select item (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

##### Returns:

The selected option elements or false if none selected.

Type
Array.\<Element\> \| Element \| false

#### \$f_SetValueSequence(pArray, pMultiple)

Sets array of form items (pArray) values to sequential number in multiples of (pMultiple).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pArray` | Array.\<Element\> |  |
| `pMultiple` | String \| Number |  |

#### \$f_Show_On_Value_Item(pThis, pThat, pValue) → {boolean}

Checks an page item's (pThis) value against a value (pValue). If it matches, a DOM node (pThat) is set to visible. If it does not match, then the DOM node (pThat) is set to hidden.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pThat` | Element \| string \| Array.\<Element\> |  |
| `pValue` | Number \| String \| Array |  |

##### Returns:

Type
boolean

#### \$f_Show_On_Value_Item_Row(pThis, pThat, pValue) → {boolean}

Checks the value (pValue) of an item (pThis). If it matches, the function shows the table row that holds pThat. If it does not match then the table row is hidden.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pThat` | Element \| string \| Array.\<Element\> |  |
| `pValue` | Number \| String \| Array |  |

##### Returns:

Type
boolean

#### \$f_Swap(pThis, pThat)

Swaps the form values of two form elements (pThis,pThat).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| String | Element or string id for first form element. |
| `pThat` | Element \| String | Element or string id for second form element. |

#### \$f_ValuesToArray(pThis, pClass, pTag) → {Array.\<String\>}

Collects the values of form items contained within DOM node (pThis) of class attribute (pClass) and nodeName (pTag) and returns an array.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pClass` | String |  |
| `pTag` | String |  |

##### Returns:

The collected values.

Type
Array.\<String\>

#### \$f_get_emptys(pNd, pClassFailopt, pClassopt) → {false\|Array}

Checks an item or an array of items to see if any are empty, set the class of all items that are empty to pClassFail, set the the class of all items that are not empty to pClass.

##### Parameters:

<table class="params" aria-label="Parameters for $f_get_emptys">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pNd</code></th>
<td class="type">Element | string | Array.&lt;Element&gt;</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pClassFail</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pClass</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>

##### Returns:

Array of all items that are empty

Type
false \| Array

#### \$nvl(pTest, pDefault) → {\*}

If pTest is empty or false return pDefault otherwise return pTest.

##### Parameters:

| Name       | Type                               | Description |
|------------|------------------------------------|-------------|
| `pTest`    | \* |             |
| `pDefault` | \* |             |

##### Returns:

Type
\*

#### \$s(pNd, pValue, pDisplayValueopt, pSuppressChangeEventopt)

Given a DOM node or string ID (pNd), this function sets the APEX item value taking into account the item type. This is a shortcut for [item#setValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html#setValue). See setValue documentation for details.

##### Parameters:

<table class="params" aria-label="Parameters for $s">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pNd</code></th>
<td class="type">Element | string</td>
<td class="attributes"></td>
<td class="description last">The DOM node or string id of the item to set the value on.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">string | Array.&lt;string&gt;</td>
<td class="attributes"></td>
<td class="description last">The value to set. For items that support multiple values (for example a 'Shuttle'), an array of string values can be passed to set multiple values at once.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDisplayValue</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The display value only if different from pValue and can't be determined by the item itself. For example for the item type Popup LOV, with the attribute Input Field = 'Not Enterable, Show Display Value and Store Return Value', this value sets the Input Field display value. The value of pValue is used to set the item's hidden return field.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pSuppressChangeEvent</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Pass true to prevent the change event from being triggered for the item being set. The default is false.</td>
</tr>
</tbody>
</table>

#### \$tr_AddTD(pThis, pText) → {Element}

Appends a table cell \<td\> to a table row (pThis). And sets the content to (pText).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pText` | String |  |

##### Returns:

Type
Element

#### \$tr_AddTH(pThis, pText) → {Element}

Appends a table header cell \<th\> to a table row (pThis). And sets the content to (pText).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pText` | String |  |

##### Returns:

Type
Element

#### \$u_Carray(pNd) → {Array}

Given a DOM node or string ID or an array (pNd), this function returns an array. Used for creating DOM based functionality that can accept a single or multiple DOM nodes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array |  |

##### Returns:

Type
Array

#### \$u_Narray(pNd) → {Array}

Given a DOM node or string ID or an array (pNd), this function returns a single value, if an pNd is an array but only has one element the value of that element is returned otherwise the array is returned. Used for creating DOM based functionality that can accept a single or multiple DOM nodes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array |  |

##### Returns:

Array or first value

Type
Array

#### \$v(pNd)

Given a DOM node or string ID (pNd), this function returns the value of an APEX item as a string. This will either be a single value, or if the item supports multiple values, it will be a ':' colon separated list of values. Note this does not make use of the configurable separator or storage type for multivalued items. See [item#getValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html#getValue) for more details.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

#### \$v2(pNd)

Given a DOM node or string ID (pNd), this function returns the value of an APEX item as a string or an array if the item type can contain multiple values. For example checkbox or multi select list. See [item#getValue](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/item.html#getValue) for more details.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

#### \$v_Array(pNd) → {Array}

Returns an item value as an array. Useful for multiselects and checkboxs.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

##### Returns:

Type
Array

#### \$v_CheckValueAgainst(pThis, pValue) → {boolean}

Checks an page item's (pThis) value against a set of values (pValue). This function returns true if any value matches.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pValue` | Number \| String \| Array |  |

##### Returns:

Type
boolean

#### \$v_Upper(pNd)

Sets the value of a form element (pNd) to uppercase. Note this does not go through the item setValue method so this will not work with all item types or trigger a change event.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| String |  |

#### \$x(pNd) → {Element\|false}

Given a DOM node or string ID (pNd), this function returns a DOM node if the element is on the page, or returns false if it is not.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

##### Returns:

Type
Element \| false

#### \$x_ByClass(pClass, pNdopt, pTagopt) → {Array}

Returns an array of DOM nodes by a given class name (pClass). If the pNd parameter is provided, then the returned elements will be all be children of that DOM node. Including the pTag parameter further narrows the list to just return nodes of that tag type.

##### Parameters:

<table class="params" aria-label="Parameters for $x_ByClass">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pClass</code></th>
<td class="type">String</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pNd</code></th>
<td class="type">Element | string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pTag</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>

##### Returns:

Type
Array

#### \$x_CheckImageSrc(pNd, pSearch) → {boolean}

Checks an image (pNd) source attribute for a substring (pSearch). The function returns true if a substring (pSearch) is found. It returns false if a substring (pSearch) is not found.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |
| `pSearch` | String |  |

##### Returns:

Type
boolean

#### \$x_Class(pNd, pClass) → {Element\|Array.\<Element\>}

Sets the className of a DOM node or array of DOM nodes to class (pClass).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |
| `pClass` | String | The class name to set. Any other class names will be overwritten. |

##### Returns:

Type
Element \| Array.\<Element\>

#### \$x_ClassByClass(pNd, pClass, pTagopt, pClass2opt) → {Element\|Array.\<Element\>}

Sets the className of an array of nodes that are selected by (pNd), (pClass) and (pTag) to class (pClass2). See [\$x_ByClass](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/global.html#$x_ByClass) and [\$x_Class](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/global.html#$x_Class).

##### Parameters:

<table class="params" aria-label="Parameters for $x_ClassByClass">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pNd</code></th>
<td class="type">Element | string</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pClass</code></th>
<td class="type">String</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pTag</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pClass2</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>

##### Returns:

Type
Element \| Array.\<Element\>

#### \$x_FormItems(pNd, pType) → {Array.\<Element\>}

Returns all form input items contained in a DOM node (pNd) of the given type (pType).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |
| `pType` | String |  |

##### Returns:

Type
Array.\<Element\>

#### \$x_Hide(pNd) → {Element\|Array}

Hides a DOM node or array of DOM nodes (pNd). This also takes into consideration which type of APEX item is being hidden.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |

##### Returns:

Type
Element \| Array

#### \$x_HideAllExcept(pNd, pNdArray) → {Element\|Array.\<Element\>}

Hides all DOM nodes referenced in pNdArray and then shows the DOM node referenced by pNd. This is most useful when pNd is also a node in pNdArray.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |
| `pNdArray` | Element \| String \| Array |  |

##### Returns:

Type
Element \| Array.\<Element\>

#### \$x_HideChildren(pNd)

Hide all all DOM node children of a DOM node (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

#### \$x_HideItemRow(pNd)

Given a page item name, this function hides the entire row that holds the item. In most cases, this is the item and its label. This function only works in table layouts since it explicitly looks for a containing tr element.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |

#### \$x_HideSiblings(pNd) → {Array.\<Element\>}

Hides all sibling nodes of given DOM node (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

##### Returns:

Type
Array.\<Element\>

#### \$x_ItemRow(pNd, pFunc)

Given DOM node or array of DOM nodes, this function (shows, hides, or toggles) the entire row that contains the DOM node or array of DOM nodes. This is most useful when using Page Items. This function only works in table layouts since it explicitly looks for a containing tr element.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |
| `pFunc` | String | One of 'TOGGLE', 'SHOW', 'HIDE' |

#### \$x_Remove(pNd) → {Element\|Array}

Removes a DOM node or array of DOM nodes.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |

##### Returns:

Type
Element \| Array

#### \$x_RowHighlight(pThis, pColor)

Give an table row DOM node (pThis), this function sets the background of all table cells to a color (pColor). A global variable gCurrentRow is set to the current table row (pThis).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| String |  |
| `pColor` | String |  |

#### \$x_RowHighlightOff(pThis)

Give an table row DOM node (pThis), this function clears the background of all table cells.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| String |  |

#### \$x_SetSiblingsClass(pNd, pClass, pNdClassopt) → {Array.\<Element\>}

Sets the class (pClass) of all DOM node siblings of a node (pNd). If pNdClass is not null the class of pNd is set to pNdClass.

##### Parameters:

<table class="params" aria-label="Parameters for $x_SetSiblingsClass">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pNd</code></th>
<td class="type">Element | string</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pClass</code></th>
<td class="type">String</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pNdClass</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>

##### Returns:

Type
Array.\<Element\>

#### \$x_Show(pNd) → {Element\|Array}

Shows a DOM node or array of DOM nodes (pNd). This also takes into consideration which type of APEX item is being shown.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |

##### Returns:

Type
Element \| Array

#### \$x_ShowAllByClass(pNd, pClass, pTagopt)

Show all the DOM node children of a DOM node (pNd) that have a specific class (pClass) and tag (pTag).

##### Parameters:

<table class="params" aria-label="Parameters for $x_ShowAllByClass">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pNd</code></th>
<td class="type">Element | string</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pClass</code></th>
<td class="type">String</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pTag</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>

#### \$x_ShowChildren(pNd)

Show all all DOM node children of a DOM node (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

#### \$x_ShowItemRow(pNd)

Given a page item name, this function shows the entire row that holds the item. In most cases, this is the item and its label. This function only works in table layouts since it explicitly looks for a containing tr element.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |

#### \$x_ShowSiblings(pNd) → {Array.\<Element\>}

Shows all sibling DOM nodes of given DOM nodes (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

##### Returns:

Type
Array.\<Element\>

#### \$x_Style(pNd, pStyle, pString) → {Element\|Array.\<Element\>}

Sets a specific style property (pStyle) to given value (pString) of a DOM node or DOM node Array (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |
| `pStyle` | String |  |
| `pString` | String |  |

##### Returns:

Type
Element \| Array.\<Element\>

#### \$x_SwitchImageSrc(pNd, pSearch, pReplace) → {Element\|false}

Checks an image (pId) src attribute for a substring (pSearch). If a substring is found, this function replaces the image entire src attribute with (pReplace).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |
| `pSearch` | String |  |
| `pReplace` | String |  |

##### Returns:

Type
Element \| false

#### \$x_Toggle(pNd) → {Element\|Array}

Toggles (shows or hides) a DOM node or array of DOM nodes (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |

##### Returns:

Type
Element \| Array

#### \$x_ToggleItemRow(pNd)

Given a page item name (pNd), this function toggles (shows or hides) the entire row that holds the item. In most cases, this is the item and its label. This function only works in table layouts since it explicitly looks for a containing tr element.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |

#### \$x_ToggleWithImage(pThis, pNd) → {Element}

Given an image element (pThis) and a DOM node (pNd), this function toggles the display of the DOM node (pNd). The src attribute of the image element (pThis) is rewritten. The image src has any plus substrings replaced with minus substrings or minus substrings are replaced with plus substrings.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pThis` | Element \| string |  |
| `pNd` | Element \| string \| Array.\<Element\> |  |

##### Returns:

Type
Element

#### \$x_UpTill(pNd, pToTag, pToClassopt) → {Element\|false}

Starting from a DOM node (pNd), this function cascades up the DOM tree until the tag of node name (pToTag) is found. If the optional pToClass is present, the ancestor node must have a node name that equals pToTag and the class must equal pToClass.

##### Parameters:

<table class="params" aria-label="Parameters for $x_UpTill">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pNd</code></th>
<td class="type">Element | string</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pToTag</code></th>
<td class="type">String</td>
<td class="attributes"></td>
<td class="description last"></td>
</tr>
<tr>
<th class="name" scope="row"><code>pToClass</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>

##### Returns:

The matching DOM node found and false otherwise.

Type
Element \| false

#### \$x_Value(pNd, pValue)

Sets the value (pValue) of a DOM node or array of DOM nodes (pNd).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |
| `pValue` | String |  |

#### \$x_disableItem(pNd, pTest)

Disables or enables an item or array of items based on (pTest).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string \| Array.\<Element\> |  |
| `pTest` | boolean |  |

#### html_RemoveAllChildren(pNd)

Use DOM methods to remove all DOM children of DOM node (pND).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pNd` | Element \| string |  |

#### html_SetSelectValue(pId, pValue)

Sets the value (pValue) of a select item (pId). If the value is not found, this functions selects the first option (usually the NULL selection).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pId` | Element \| String |  |
| `pValue` | String |  |
