<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html -->
<!-- Namespaces: apex.locale -->

# Namespace: locale

## QuickNav

### [Functions](#methods-section)

- [formatCompactNumber](#.formatCompactNumber)
- [formatNumber](#.formatNumber)
- [getAbbrevDayNames](#.getAbbrevDayNames)
- [getAbbrevMonthNames](#.getAbbrevMonthNames)
- [getCurrency](#.getCurrency)
- [getDLDateFormat](#.getDLDateFormat)
- [getDSDateFormat](#.getDSDateFormat)
- [getDateFormat](#.getDateFormat)
- [getDayNames](#.getDayNames)
- [getDecimalSeparator](#.getDecimalSeparator)
- [getDualCurrency](#.getDualCurrency)
- [getGroupSeparator](#.getGroupSeparator)
- [getISOCurrency](#.getISOCurrency)
- [getLanguage](#.getLanguage)
- [getMonthNames](#.getMonthNames)
- [resourcesLoaded](#.resourcesLoaded)
- [toNumber](#.toNumber)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).locale

The apex.locale namespace contains Oracle APEX functions related to formatting numbers and dates according to a specific locale. For localizing text messages see [apex.lang](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.lang.html).

Since:
- 20.1

### Functions

#### (static) formatCompactNumber(pValue, pOptionsopt) → {string}

Formats the given number in a compact, locale specific way. For example in the US English locale the number 123400 would be formatted as "123.4K" and 1234000 as "1.23M".

This function relies on additional resources that are loaded when the page first loads. Calling this function before the resources are loaded returns the number as an unformatted string. See [apex.locale.resourcesLoaded](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html#.resourcesLoaded).

##### Parameters:

<table class="params" aria-label="Parameters for formatCompactNumber">
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
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The number value to be formatted.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An options object that affect the way the number is formatted. All properties optional.
<h6 id="properties">Properties</h6>
<table class="params" aria-label="Parameters for pOptions">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>maximumFractionDigits</code></th>
<td class="type">number</td>
<td class="description last">The maximum number of digits to display after the decimal point. Default 2.</td>
</tr>
<tr>
<th class="name" scope="row"><code>minimumFractionDigits</code></th>
<td class="type">number</td>
<td class="description last">The minimum number of digits to display after the decimal point. Default 0.</td>
</tr>
<tr>
<th class="name" scope="row"><code>minimumIntegerDigits</code></th>
<td class="type">number</td>
<td class="description last">The minimum number of integer digits to display before the decimal point. Default 1.</td>
</tr>
<tr>
<th class="name" scope="row"><code>roundingMode</code></th>
<td class="type">string</td>
<td class="description last">One of 'DEFAULT', 'HALF_UP', 'HALF_DOWN', 'HALF_EVEN', 'UP', 'DOWN', 'CEILING', 'FLOOR'. The default is "DEFAULT".</td>
</tr>
<tr>
<th class="name" scope="row"><code>separators</code></th>
<td class="type">string</td>
<td class="description last">The characters to use for the decimal and group separator. The default is to use the appropriate locale specific characters.
<h6 id="properties-1">Properties</h6>
<table class="params" aria-label="Parameters for separators">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>decimal</code></th>
<td class="type">string</td>
<td class="description last">The decimal separator character.</td>
</tr>
<tr>
<th class="name" scope="row"><code>group</code></th>
<td class="type">string</td>
<td class="description last">The group separator character.</td>
</tr>
</tbody>
</table></td>
</tr>
<tr>
<th class="name" scope="row"><code>useGrouping</code></th>
<td class="type">boolean</td>
<td class="description last">If true use locale specific rules to separate digits into groups. The default is true.</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Returns:

The compact formatted number.

Type
string

##### Examples

Format the large number 123456789.12 in a compact format and display it in an alert message.

```
var largeNumber = 123456789.12;
var formattedNumber = apex.locale.formatCompactNumber( largeNumber );
// In the US English locale this will display: "The number is: 123.46M"
apex.message.alert( "The number is: " + formattedNumber, function() {
     // do something after message is shown if needed
} );
```

Format the same large number 123456789.12 in a compact format using an option to not include any fraction digits.

```
var largeNumber = 123456789.12;
var formattedNumber = apex.locale.formatCompactNumber( largeNumber, { maximumFractionDigits: 0 } );
// In the US English locale the formattedNumber is equal to 123M"
```

#### (static) formatNumber(pValue, pFormatopt, pOptionsopt) → {string}

Formats a number using a database format model similar to the SQL `TO_CHAR(`*`number`*`)` function.

See the Oracle SQL Language reference section on Format Models for more information on the pFormat parameter. The format elements RN, TM, and EEEE are not supported.

##### Parameters:

<table class="params" aria-label="Parameters for formatNumber">
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
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="description last">The number to format.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFormat</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The database format model. The format elements RN, TM, and EEEE are not supported. If the format is not given the number is returned as a string with only the decimal separator replaced with the locale specific decimal separator.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pOptions</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Options to override default locale settings. All properties optional.
<h6 id="properties-2">Properties</h6>
<table class="params" aria-label="Parameters for pOptions">
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>NLS_NUMERIC_CHARACTERS</code></th>
<td class="type">string</td>
<td class="description last">A string where the first letter is the decimal separator and the second letter is the group separator</td>
</tr>
<tr>
<th class="name" scope="row"><code>NLS_CURRENCY</code></th>
<td class="type">string</td>
<td class="description last">The local currency string.</td>
</tr>
<tr>
<th class="name" scope="row"><code>NLS_DUAL_CURRENCY</code></th>
<td class="type">string</td>
<td class="description last">The dual currency string.</td>
</tr>
<tr>
<th class="name" scope="row"><code>NLS_ISO_CURRENCY</code></th>
<td class="type">string</td>
<td class="description last">The ISO currency string. Note: This option differs from the corresponding database parameter. It is the ISO currency string such as "CAD" rather than the territory name such as "CANADA".</td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

##### Returns:

The formatted number.

Type
string

##### Example

Format the number 1234.569 with locale specific currency symbol and 2 decimal places.

```
var formattedNumber = apex.locale.formatNumber( 1234.569, "FML999G999G999G999G990D00" );
// In the US English locale this will display: "The cost is: $1,234.57"
apex.message.alert( "The cost is: " + formattedNumber, function() {
     // do something after message is shown if needed
} );
```

#### (static) getAbbrevDayNames() → {array}

Return the database abbreviated day names as an array. First element of the array is the first day of the week in the current locale.

##### Returns:

Array of abbreviated day names. For example \["Sun","Mon","Tue","Wed",...,"Sat"\]

Type
array

#### (static) getAbbrevMonthNames() → {array}

Return the database abbreviated month names as an array. First element of the array is the first month of the year in the current locale.

##### Returns:

Array of abbreviated month names. For example \["Jan","Feb","Mar", ..., "Dec"\]

Type
array

#### (static) getCurrency() → {string}

Return the database locale specific currency symbol.

##### Returns:

Type
string

#### (static) getDLDateFormat() → {string}

Return the database defined DL date format mask.

##### Returns:

DL Date format mask. For example "fmDay, Month fmdd, yyyy" or "fmDay, dd. Month yyyy"

Type
string

#### (static) getDSDateFormat() → {string}

Return the database defined DS date format mask.

##### Returns:

DS Date format mask. For example "fmMM/DD/RRRR" or "DD.MM.RRRR"

Type
string

#### (static) getDateFormat() → {string}

Return the database defined date format mask.

##### Returns:

Date format mask. For example "YYYY/MM/DD" or "DD.MM.YYYY"

Type
string

#### (static) getDayNames() → {array}

Return the database day names as an array. First element of the array is the first day of the week in the current locale.

##### Returns:

Array of day names. For example \["Sunday","Monday","Tuesday","Wednesday", ...,"Saturday"\]

Type
array

#### (static) getDecimalSeparator() → {string}

Return the database locale specific decimal separator for numeric values.

##### Returns:

The decimal separator. For example "." (US) or "," (Germany).

Type
string

#### (static) getDualCurrency() → {string}

Return the database locale specific dual currency symbol.

##### Returns:

Type
string

#### (static) getGroupSeparator() → {string}

Return the database locale specific group separator for numeric values.

##### Returns:

The group separator. For example "," (US) or "." (Germany).

Type
string

#### (static) getISOCurrency() → {string}

Return the database locale specific ISO currency string.

##### Returns:

Type
string

#### (static) getLanguage() → {string}

Return the current language locale.

##### Returns:

current language. For example "en", "de", "en-US", ...

Type
string

#### (static) getMonthNames() → {array}

Return the database month names as an array. First element of the array is the first month of the year in the current locale.

##### Returns:

Array of month names. For example \["January","February","March", ...,"December"\]

Type
array

#### (static) resourcesLoaded(pCallbackopt) → {Promise}

Used to determine if the resources needed by some of the [apex.locale](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.locale.html) functions have been loaded.

##### Parameters:

<table class="params" aria-label="Parameters for resourcesLoaded">
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
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A Function to call when the resources have been loaded. If the resources are already loaded the function is called right away.</td>
</tr>
</tbody>
</table>

##### Returns:

A promise object. The promise is resolved when the resources have been loaded.

Type
Promise

##### Examples

Wait until the resources are loaded before formatting a number.

```
apex.locale.resourcesLoaded( function() {
    var formattedNumber = apex.locale.formatCompactNumber( 123456789.12 );
    // In the US English locale this will log: "The number is: 123.46M"
    console.log( "The number is: " + formattedNumber );
} );
```

This is the same as the previous example except it uses the returned promise.

```
var p = apex.locale.resourcesLoaded();
p.done( function() {
    var formattedNumber = apex.locale.formatCompactNumber( 123456789.12 );
    // In the US English locale this will log: "The number is: 123.46M"
    console.log( "The number is: " + formattedNumber );
} );
```

This checks to see if the resources are loaded.

```
if ( apex.locale.resourcesLoaded().state() === "resolved" ) {
    // resources are loaded
} else {
    // resources are not yet loaded
}
```

#### (static) toNumber(pValue, pFormatopt) → {number}

Convert the given string value into a number. It does not strictly validate against the given format but will strip potential format characters from the number so it can be converted to a number. The intention is to allow natural human data entry of numbers. The locale decimal and group separators are considered. If the number exceeds the precision of a JavaScript number (IEEE 754) then NaN is returned unless the loss of precision is to the right of the decimal point and any decimal places specified in the format mask.

The octal (0o) and binary (0b) prefixes are never allowed. Only when the format model is hex, the hex (0x) prefix is allowed but not required. Although the scientific notation format model (EEEE) is not supported, strings in scientific notation will be converted using the locale specific decimal separator but group separators and currency symbols are not allowed.

##### Parameters:

<table class="params" aria-label="Parameters for toNumber">
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
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The potentially formatted or partially formatted number string to convert.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFormat</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The optional expected format of the value to convert. This is a database format model. The format elements V, RN, TM, and EEEE are not supported and will be ignored.</td>
</tr>
</tbody>
</table>

##### Returns:

the converted number or NaN if pValue cannot be converted to a number

Type
number

##### Examples

In a locale that uses comma as the group separator, period as the decimal separator and \$ as the locale currency symbol the following all result in the same number 1234.56.

```
var number = apex.locale.toNumber( "1,234.56" );
number = apex.locale.toNumber( "$1,234.56", "FML999G999G990D00" );
number = apex.locale.toNumber( "$1234.56", "FML999G999G990D00" );
// number is 1234.56
```

In a locale that uses period as the group separator, comma as the decimal separator and € as the locale currency symbol the following all result in the same number 1234.56.

```
var number = apex.locale.toNumber( "1.234,56" );
number = apex.locale.toNumber( "&#x20AC;1.234,56", "FML999G999G990D00" );
number = apex.locale.toNumber( "&#x20AC;1234,56", "FML999G999G990D00" );
// number is 1234.56
```
