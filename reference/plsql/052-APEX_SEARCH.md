<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 52 APEX_SEARCH

The `APEX_SEARCH` package provides search functionality for your applications.

- [QUERY_EXPERT_SEARCH Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/QUERY_EXPERT_SEARCH-Function.html#GUID-8406E422-85A3-4E5E-BC22-E5493CDBE5D0)
- [QUERY_SEARCH_ENGINE Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/QUERY_SEARCH_ENGINE-Function.html#GUID-1FD52515-7613-450C-BB24-4774E86EE05A)
- [SEARCH Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.SEARCH-Function.html#GUID-B593640D-93BF-435D-AC7A-CAB49991DF67)

------------------------------------------------------------------------

## 52.1 QUERY_EXPERT_SEARCH Function

This function converts an end-user search query into the corresponding Oracle Text syntax, enabling advanced and precise searching capabilities.

It processes the search expression and generates a custom search query that can be used with Oracle Text for efficient and accurate text-based searches.

About Search Expression Syntax

The search expression provided as the parameter follows a specific syntax and can include the following elements:

- Operators - The search expression can contain specific operators that modify the search behavior:
  - AND - The `AND` operator is used for combining multiple search terms. For example, "red AND blue" retrieves documents containing both `red` and `blue`.
  - OR - The `OR` operator is mapped to the `ACCUM` operator of Oracle Text and is used for combining search terms and retrieving documents containing any of the terms. For example, "red OR blue" retrieves documents containing either `red` or `blue` with a higher score for the document matching both terms.
  - NOT - The `NOT` operator is used to exclude specific terms from the search results. For example, "red NOT blue" retrieves documents containing `red` but not `blue`.
  - AROUND(d) - The `AROUND` operator is an abstraction of the `NEAR` operator in Oracle Text. It is used to find terms within a certain distance (d) of each other. The distance parameter (d) represents the maximum number of words permitted between the two query terms. For example, "red AROUND(3) blue" retrieves documents where `red` and `blue` appear within three words or less of each other with a higher score if both terms are closer together.
- Parentheses - Parentheses can be used to group search terms and specify the order of evaluation. For example, "(red OR blue) AND green" retrieves documents containing either `red` or `blue` and `green`.
- Quoted Phrases - Quoting a phrase (such as "red apple") ensures that the exact phrase is searched for as a whole. For example, "red apple" retrieves documents containing the exact phrase `red apple`.
- Fuzzy Prefix - The syntax enables fuzzy matching using the FUZZY keyword followed by an optional plus (+) or minus (-) sign to increase or decrease the fuzziness. For example, "fuzzy+: red apple" performs a fuzzy match with increased fuzziness for `red` and `apple`.
- Weighted Query Terms - The search expression supports weighting search terms using the caret symbol (^) followed by a numeric value to indicate the importance or weight of a term. For example, "red^3 apple" assigns a higher weight to the term `red` compared to `apple`.

Syntax

```
APEX_SEARCH.QUERY_EXPERT_SEARCH (
    p_search_expression IN VARCHAR2 )
RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_search_expression` | End-user search query to convert to Oracle Text syntax. It can include various search operators and keywords. |

Returns

This function returns the generated Oracle Text query based on the provided search expression.

Example 1

```
select query_expert_search('(red or white) "summer shorts"') from dual;

TEXT_QUERY
----------------------------------------
({red} ACCUM {white}) AND {summer shorts}
```

Example 2

```
select query_expert_search('fuzzy-: catz dogz') from dual;

TEXT_QUERY
----------------------------------------
FUZZY({catz},80,100,W) AND FUZZY({dogz},80,100,W)
```

Example 3

```
select query_expert_search('oracle^3 apex') from dual;

TEXT_QUERY
----------------------------------------
{oracle}*3 AND {apex}
```

**Parent topic:** [APEX_SEARCH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.html#GUID-952CEB05-C585-4CBF-97DA-06F5EB0E6165)

------------------------------------------------------------------------

## 52.2 QUERY_SEARCH_ENGINE Function

This function converts a simple end-user search query into the corresponding Oracle Text syntax for a smart search that incorporates query relaxation.

It executes the most restrictive version of a query first (such as exact match search), then progressively relaxes the query using less restrictive queries (such as stem search and fuzzy matching).

While maximizing the number of results, this function ensures that the most exact and relevant matches have a higher score.

Syntax

```
APEX_SEARCH.QUERY_SEARCH_ENGINE (
    p_search_expression IN VARCHAR2 )
    RETURN CLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_search_expression` | End-user search query to convert to Oracle Text syntax. |

Returns

This function returns the generated Oracle Text query based on the provided search expression.

Example

```
select query_search_engine('red shorts') from dual;

TEXT_QUERY
----------------------------------------
<query>
   <textquery>
   <progression>
   <seq>{red} {shorts}</seq>
   <seq>${red} ${shorts}</seq>
   <seq>FUZZY({red},40,1000,W) FUZZY({shorts},40,1000,W)</seq>
   <seq>{red} AND {shorts}</seq>
   <seq>${red} AND ${shorts}</seq>
   <seq>FUZZY({red},40,1000,W) AND FUZZY({shorts},40,1000,W)</seq>
   <seq>{red} ACCUM {shorts}</seq>
   <seq>${red} ACCUM ${shorts}</seq>
   <seq>FUZZY({red},40,1000,W) ACCUM FUZZY({shorts},40,1000,W)</seq>
   </progression>
   </textquery>
</query>
```

**Parent topic:** [APEX_SEARCH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.html#GUID-952CEB05-C585-4CBF-97DA-06F5EB0E6165)

------------------------------------------------------------------------

## 52.3 SEARCH Function

This function performs application search.

Syntax

```
APEX_SEARCH.SEARCH (
    p_search_static_ids      IN apex_t_varchar2,
    p_search_expression      IN VARCHAR2,
    p_apply_order_bys        IN VARCHAR2           DEFAULT 'Y',
    --
    p_return_total_row_count IN VARCHAR2           DEFAULT 'N' )
    RETURN apex_search_result_table pipelined;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_search_static_ids` | List of Search Configuration Static IDs to search within. |
| `p_search_expression` | Terms to use in the search. |
| `p_apply_order_bys` | Whether to apply the sort settings defined in the search configuration. Pass `N` in when the query applies its own `ORDER BY` clause. |
| `p_return_total_row_count` | Whether to return the total row count. |

Returns

This function returns a table of search results as defined by the `apex_search_result_table` object type. The following columns are available:

```
CONFIG_LABEL:         Label of the search configuration this result comes from.
CONFIG_ID:            Internal ID of the search configuration this result comes from.
CONFIG_STATIC_ID:     Static ID of the search configuration this result comes from.
RESULT_SEQ:           Sequence of this result within the search configuration.
TOTAL_ROW_COUNT:      Total result count, if configured.
```

The following column contents are based on the mapping within the Search Configuration:

```
PRIMARY_KEY_1:        Primary Key Column 1
PRIMARY_KEY_2:        Primary Key Column 2
TITLE:                Title
SUBTITLE:             Subtitle
DESCRIPTION:          Description
BADGE:                Value to be shown as result "badge"
LAST_MODIFIED:        Timestamp when the result was last modified.
CUSTOM_01:            Custom attribute 1
CUSTOM_02:            Custom attribute 2
CUSTOM_03:            Custom attribute 3
SCORE:                Score or Rank value. If Oracle TEXT is used, the TEXT Score is returned.
LINK:                 Link
RESULT_CSS_CLASSES:   Result CSS Classes

FORMATTED_ROW:        Row HTML, if a row template is specified in the search configuration

ICON_TYPE:            Type of the Icon: CLASS, URL, BLOB or INITIALS
ICON_VALUE:           Icon Value, depending on the ICON TYPE
ICON_BLOB:            BLOB containing the icon
ICON_MIMETYPE:        Mimetype of the icon BLOB, if configured
```

Example

The following example searches for "oracle APEX" within the `CUSTOMERS` and `PRODUCTS` search configuration.

```
select config_label, title, subtitle, badge
    from table( apex_search.search(
                   p_search_static_ids => apex_t_varchar2( 'PRODUCTS', 'CUSTOMERS' ),
                   p_search_expression => 'oracle APEX',
                   p_apply_order_bys   => 'N' ) );

CONFIG_LABEL   TITLE              SUBTITLE                BADGE
-------------- ------------------ ----------------------- -------
Products       APEX vacation app  Subscription Based App
Products       APEX time entry    On-Premises License

:

Customers      John Doe Corp      Software Development    5000
Customers      Development Corp   Software Development    1000

:
```

**Parent topic:** [APEX_SEARCH](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_SEARCH.html#GUID-952CEB05-C585-4CBF-97DA-06F5EB0E6165)
