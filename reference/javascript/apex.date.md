<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html -->
<!-- Namespaces: apex.date -->

# Namespace: date

## QuickNav

### [Properties](#members-section)

- [UNIT](#.UNIT)

### [Functions](#methods-section)

- [ISOWeek](#.ISOWeek)
- [add](#.add)
- [clone](#.clone)
- [dayOfWeek](#.dayOfWeek)
- [daysInMonth](#.daysInMonth)
- [endOfDay](#.endOfDay)
- [firstOfMonth](#.firstOfMonth)
- [format](#.format)
- [getDayOfYear](#.getDayOfYear)
- [isAfter](#.isAfter)
- [isBefore](#.isBefore)
- [isBetween](#.isBetween)
- [isLeapYear](#.isLeapYear)
- [isSame](#.isSame)
- [isSameOrAfter](#.isSameOrAfter)
- [isSameOrBefore](#.isSameOrBefore)
- [isValid](#.isValid)
- [isValidString](#.isValidString)
- [lastOfMonth](#.lastOfMonth)
- [max](#.max)
- [min](#.min)
- [monthsBetween](#.monthsBetween)
- [parse](#.parse)
- [secondsPastMidnight](#.secondsPastMidnight)
- [setDayOfYear](#.setDayOfYear)
- [since](#.since)
- [startOfDay](#.startOfDay)
- [subtract](#.subtract)
- [toISOString](#.toISOString)
- [weekOfMonth](#.weekOfMonth)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).date

The apex.date namespace contains Oracle APEX functions related to date operations.

Since:
- 21.2

### Properties

#### (static) UNIT :object

Constants for the different date/time units used by apex.date functions.

##### Type:

- object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `MILLISECOND` | string | Constant to use for milliseconds |
| `SECOND` | string | Constant to use for seconds |
| `MINUTE` | string | Constant to use for minutes |
| `HOUR` | string | Constant to use for hours |
| `DAY` | string | Constant to use for days |
| `WEEK` | string | Constant to use for weeks |
| `MONTH` | string | Constant to use for months |
| `YEAR` | string | Constant to use for years |

##### Examples

apex.date.UNIT constant

```
apex.date.UNIT = {
    MILLISECOND: "millisecond",
    SECOND: "second",
    MINUTE: "minute",
    HOUR: "hour",
    DAY: "day",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year"
};
```

Example usage

```
apex.date.add( myDate, 2, apex.date.UNIT.DAY );
apex.date.add( myDate, 1, apex.date.UNIT.YEAR );
apex.date.subtract( myDate, 30, apex.date.UNIT.MINUTE );
apex.date.subtract( myDate, 6, apex.date.UNIT.HOUR );
```

### Functions

#### (static) ISOWeek(pDateopt) → {number}

Return the ISO-8601 week number of the year of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for ISOWeek">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The week number

Type
number

##### Example

Returns the ISO-8601 week number.

```
var weekNumber = apex.date.ISOWeek( myDate );
```

#### (static) add(pDateopt, pAmount, pUnitopt) → {Date}

Add a certain amount of time to an existing date. This function returns the modified date object as well as altering the original object. If the given date object should not be manipulated use [apex.date.clone](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html#.clone) before calling this function. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for add">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAmount</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">The amount to add</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

The modified date object

Type
Date

##### Example

Returns the modified date object.

```
var myDate = new Date( "2021-06-20" );
myDate = apex.date.add( myDate, 2, apex.date.UNIT.DAY );
// myDate is now "2021-06-21"
```

#### (static) clone(pDate) → {Date}

Return the cloned instance of a given date object. This is useful when you want to do actions on a date object without altering the original object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

| Name    | Type                                 | Description   |
|---------|--------------------------------------|---------------|
| `pDate` | Date | A date object |

##### Returns:

The cloned date object

Type
Date

##### Example

Returns the clone of a given date object.

```
var myDate = new Date();
var clonedDate = apex.date.clone( myDate );
```

#### (static) dayOfWeek(pDateopt) → {number}

Return the day number of week of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for dayOfWeek">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The day number

Type
number

##### Example

Returns the day number of given week.

```
var weekDay = apex.date.dayOfWeek( myDate );
```

#### (static) daysInMonth(pDateopt) → {number}

Return the day count of a month of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for daysInMonth">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The days count

Type
number

##### Example

Returns the day count of given month.

```
var dayCount = apex.date.daysInMonth( myDate );
```

#### (static) endOfDay(pDateopt) → {Date}

Return the end date of a day of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for endOfDay">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The end date of a day

Type
Date

##### Example

Returns the end date of a given day.

```
var dayEndDate = apex.date.endOfDay( myDate );
// output: "2021-JUN-29 23:59:59" (as date object)
```

#### (static) firstOfMonth(pDateopt) → {Date}

Return a new date object for the first day a month of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for firstOfMonth">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The first day as date

Type
Date

##### Example

Returns the first day of a given month as date object.

```
var firstDayDate = apex.date.firstOfMonth( myDate );
// output: "2021-JUN-01" (as date object)
```

#### (static) format(pDateopt, pFormatopt, pLocaleopt) → {string}

Return the formatted string of a date with a given (Oracle compatible) format mask. If *pDate* is not provided it uses the current date & time. It uses the default date format mask & locale defined in the application globalization settings.

Currently not supported Oracle specific formats are: SYEAR,SYYYY,IYYY,YEAR,IYY,SCC,TZD,TZH,TZM,TZR,AD,BC,CC,EE,FF,FX,IY,RM,TS,E,I,J,Q,X

##### Parameters:

<table class="params" aria-label="Parameters for format">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFormat</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.locale.getDateFormat()</td>
<td class="description last">The format mask</td>
</tr>
<tr>
<th class="name" scope="row"><code>pLocale</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.locale.getLanguage()</td>
<td class="description last">The locale</td>
</tr>
</tbody>
</table>

##### Returns:

The formatted date string

Type
string

##### Example

Returns the formatted date string.

```
var dateString = apex.date.format( myDate, "YYYY-MM-DD HH24:MI" );
// output: "2021-06-29 15:30"

var dateString = apex.date.format( myDate, "Day, DD Month YYYY" );
// output: "Wednesday, 29 June 2021"

var dateString = apex.date.format( myDate, "Day, DD Month YYYY", "de" );
// output: "Mittwoch, 29 Juni 2021"
```

#### (static) getDayOfYear(pDateopt) → {number}

Return the day number of a year of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for getDayOfYear">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The day number

Type
number

##### Example

Returns the day number of given year.

```
var dayNumber = apex.date.getDayOfYear( myDate );
```

#### (static) isAfter(pDate1, pDate2, pUnitopt) → {boolean}

Return true if the first date object is after the second date. *pUnit* controls the precision of the comparison.

##### Parameters:

<table class="params" aria-label="Parameters for isAfter">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate1</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDate2</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

is the date after

Type
boolean

##### Example

Returns if a date object is before another.

```
var isDateAfter = apex.date.isAfter( myDate1, myDate2, apex.date.UNIT.SECOND );
```

#### (static) isBefore(pDate1, pDate2, pUnitopt) → {boolean}

Return true if the first date object is before the second date. *pUnit* controls the precision of the comparison.

##### Parameters:

<table class="params" aria-label="Parameters for isBefore">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate1</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDate2</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

is the date before

Type
boolean

##### Example

Returns if a date object is before another.

```
var isDateBefore = apex.date.isBefore( myDate1, myDate2, apex.date.UNIT.SECOND );
```

#### (static) isBetween(pDate1, pDate2, pDate3, pUnitopt) → {boolean}

Return true if the first date object is between the second date and the third date. *pUnit* controls the precision of the comparison.

##### Parameters:

<table class="params" aria-label="Parameters for isBetween">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate1</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDate2</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDate3</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

is the date between

Type
boolean

##### Example

Returns if a date object is between 2 another.

```
var isDateBetween = apex.date.isBetween( myDate1, myDate2, myDate3, apex.date.UNIT.SECOND );
```

#### (static) isLeapYear(pDateopt) → {boolean}

Return true if a given date object is within a leap year. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for isLeapYear">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

is a leap year

Type
boolean

##### Example

Returns if it's a leap year for a given date.

```
var isLeapYear = apex.date.isLeapYear( myDate );
```

#### (static) isSame(pDate1, pDate2, pUnitopt) → {boolean}

Return true if the first date object is the same as the second date. *pUnit* controls the precision of the comparison.

##### Parameters:

<table class="params" aria-label="Parameters for isSame">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate1</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDate2</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

is the date same

Type
boolean

##### Example

Returns if a date object is the same as another.

```
var isDateSame = apex.date.isSame( myDate1, myDate2, apex.date.UNIT.SECOND );
```

#### (static) isSameOrAfter(pDate1, pDate2, pUnitopt) → {boolean}

Return true if the first date object is the same or after the second date. *pUnit* controls the precision of the comparison.

##### Parameters:

<table class="params" aria-label="Parameters for isSameOrAfter">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate1</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDate2</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

is the date same/after

Type
boolean

##### Example

Returns if a date object is the same or after another.

```
var isDateSameAfter = apex.date.isSameOrAfter( myDate1, myDate2, apex.date.UNIT.SECOND );
```

#### (static) isSameOrBefore(pDate1, pDate2, pUnitopt) → {boolean}

Return true if the first date object is the same or before the second date. *pUnit* controls the precision of the comparison.

##### Parameters:

<table class="params" aria-label="Parameters for isSameOrBefore">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate1</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDate2</code></th>
<td class="type">Date</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

is the date same/before

Type
boolean

##### Example

Returns if a date object is the same or before another.

```
var isDateSameBefore = apex.date.isSameOrBefore( myDate1, myDate2, apex.date.UNIT.SECOND );
```

#### (static) isValid(pDate) → {boolean}

Return true if a given object is a valid date object.

##### Parameters:

| Name    | Type                                 | Description   |
|---------|--------------------------------------|---------------|
| `pDate` | Date | A date object |

##### Returns:

is it a valid date

Type
boolean

##### Example

Returns if a date object is valid.

```
var isDateValid = apex.date.isValid( myDate );
```

#### (static) isValidString(pDateString) → {boolean}

Return true if a given string can parse into a date object. *Note: This could be browser specific dependent on the implementation of Date.parse.*

Most browsers expect a string in ISO format (ISO 8601) and shorter versions of it, like "2021-06-15T14:30:00" or "2021-06-15T14:30" or "2021-06-15"

##### Parameters:

| Name          | Type                                   | Description   |
|---------------|----------------------------------------|---------------|
| `pDateString` | string | A date string |

##### Returns:

is it a valid date

Type
boolean

##### Example

Returns if a date string is valid.

```
var isDateValid = apex.date.isValidString( "2021-06-29 15:30" );
```

#### (static) lastOfMonth(pDateopt) → {Date}

Return a new date object for the last day of a month of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for lastOfMonth">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The last day as date

Type
Date

##### Example

Returns the last day of a given month as date.

```
var lastDayDate = apex.date.lastOfMonth( myDate );
// output: "2021-JUN-30" (as date object)
```

#### (static) max(…pDatesopt) → {Date}

Return the maximum date of given date object arguments. If *pDates* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for max">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDates</code></th>
<td class="type">date</td>
<td class="attributes">&lt;optional&gt;<br />
&lt;repeatable&gt;<br />
</td>
<td class="default">[new Date()]</td>
<td class="description last">Multiple date objects as arguments</td>
</tr>
</tbody>
</table>

##### Returns:

The max date object

Type
Date

##### Example

Returns the maximum (most distant future) of the given date.

```
var maxDate = apex.date.max( myDate1, myDate2, myDate3 );
```

#### (static) min(…pDatesopt) → {Date}

Return the minimum date of given date object arguments. If *pDates* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for min">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDates</code></th>
<td class="type">date</td>
<td class="attributes">&lt;optional&gt;<br />
&lt;repeatable&gt;<br />
</td>
<td class="default">[new Date()]</td>
<td class="description last">Multiple date objects as arguments</td>
</tr>
</tbody>
</table>

##### Returns:

The min date object

Type
Date

##### Example

Returns the minimum (most distant future) of the given date.

```
var minDate = apex.date.min( myDate1, myDate2, myDate3 );
```

#### (static) monthsBetween(pDate1, pDate2) → {number}

Return the count of months between 2 date objects.

##### Parameters:

| Name     | Type                                 | Description   |
|----------|--------------------------------------|---------------|
| `pDate1` | Date | A date object |
| `pDate2` | Date | A date object |

##### Returns:

The month count

Type
number

##### Example

Returns the count of months between 2 dates.

```
var months = apex.date.monthsBetween( myDate1, myDate2 );
```

#### (static) parse(pDateString, pFormatopt) → {Date}

Return the parsed date object of a given date string and a (Oracle compatible) format mask. It uses the default date format mask defined in the application globalization settings.

Currently not supported Oracle specific formats are: SSSSS,SYEAR,SYYYY,IYYY,YEAR,IYY,SCC,TZD,TZH,TZM,TZR,AD,BC,CC,EE,FF,FX,IW,IY,RM,TS,WW,E,I,J,Q,W,X

##### Parameters:

<table class="params" aria-label="Parameters for parse">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDateString</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">A formatted date string</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFormat</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.locale.getDateFormat()</td>
<td class="description last">The format mask</td>
</tr>
</tbody>
</table>

##### Returns:

The date object

Type
Date

##### Example

Returns the parsed date object.

```
var date = apex.date.parse( "2021-06-29 15:30", "YYYY-MM-DD HH24:MI" );
var date = apex.date.parse( "2021-JUN-29 08:30 am", "YYYY-MON-DD HH12:MI AM" );
```

#### (static) secondsPastMidnight(pDateopt) → {number}

Return the seconds past midnight of day of a given date object.

##### Parameters:

<table class="params" aria-label="Parameters for secondsPastMidnight">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

seconds past midnight

Type
number

##### Example

Returns the seconds past midnight.

```
var seconds = apex.date.secondsPastMidnight( myDate );
```

#### (static) setDayOfYear(pDateopt, pDay) → {Date}

Set the day number of a year of a given date object. If the given date object should not be manipulated use [apex.date.clone](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html#.clone) before calling this function. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for setDayOfYear">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pDay</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">The day number</td>
</tr>
</tbody>
</table>

##### Returns:

The date object

Type
Date

##### Example

Returns the date object.

```
var myDate = new Date();
apex.date.setDayOfYear( myDate, 126 );
```

#### (static) since(pDateopt, pShortopt) → {string}

Return the relative date in words of a given date object This is the client side counterpart of the PL/SQL function *APEX_UTIL.GET_SINCE*. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for since">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pShort</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">false</td>
<td class="description last">Whether to return a short version of relative date</td>
</tr>
</tbody>
</table>

##### Returns:

The formatted date string

Type
string

##### Example

Returns the relative date in words.

```
var sinceString = apex.date.since( myDate );
// output: "2 days from now" or "30 minutes ago"

var sinceString = apex.date.since( myDate, true );
// output: "In 1.1y" or "30m"
```

#### (static) startOfDay(pDateopt) → {Date}

Return the start date of a day of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for startOfDay">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The start date of a day

Type
Date

##### Example

Returns the start date of a given day.

```
var dayStartDate = apex.date.startOfDay( myDate );
// output: "2021-JUN-29 24:00:00" (as date object)
```

#### (static) subtract(pDateopt, pAmount, pUnitopt) → {Date}

Subtract a certain amount of time of an existing date. This function returns the modified date object as well as altering the original object. If the given date object should not be manipulated use [apex.date.clone](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.date.html#.clone) before calling this function. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for subtract">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
<tr>
<th class="name" scope="row"><code>pAmount</code></th>
<td class="type">number</td>
<td class="attributes"></td>
<td class="default"></td>
<td class="description last">The amount to subtract</td>
</tr>
<tr>
<th class="name" scope="row"><code>pUnit</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">apex.date.UNIT.MILLISECOND</td>
<td class="description last">The unit to use - apex.date.UNIT constant</td>
</tr>
</tbody>
</table>

##### Returns:

The modified date object

Type
Date

##### Example

Returns the modified date object.

```
var myDate = new Date( "2021-06-20" )
myDate = apex.date.subtract( myDate, 2, apex.date.UNIT.DAY );
// myDate is now "2021-06-19"
```

#### (static) toISOString(pDateopt) → {string}

Return the ISO format string (ISO 8601) without timezone information of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for toISOString">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The formatted date string

Type
string

##### Example

Returns date as ISO format string.

```
var isoFormat = apex.date.toISOString( myDate );
// output: "2021-06-15T14:30:00"
```

#### (static) weekOfMonth(pDateopt) → {number}

Return the week number of a month of a given date object. If *pDate* is not provided it uses the current date & time.

##### Parameters:

<table class="params" aria-label="Parameters for weekOfMonth">
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th scope="col">Name</th>
<th scope="col">Type</th>
<th scope="col">Attributes</th>
<th scope="col">Default</th>
<th class="last" scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<th class="name" scope="row"><code>pDate</code></th>
<td class="type">Date</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="default">new Date()</td>
<td class="description last">A date object</td>
</tr>
</tbody>
</table>

##### Returns:

The week number

Type
number

##### Example

Returns the week number of given month.

```
var weekNumber = apex.date.weekOfMonth( myDate );
```
