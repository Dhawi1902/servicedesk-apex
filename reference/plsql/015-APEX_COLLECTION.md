<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 15  APEX_COLLECTION

Collections enable you to temporarily capture one or more nonscalar values. You can use collections to store rows and columns currently in session state so they can be accessed, manipulated, or processed during a user's specific session. You can think of a collection as a bucket in which you temporarily store and name rows of information.

- [About the APEX_COLLECTION API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_COLLECTION-API.html#GUID-56991245-9102-4301-AC86-7A43701649AD)
- [ADD_MEMBER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBER-Procedure.html#GUID-C4A6C36B-F241-423A-9E3F-F7D89CB1E616)
- [ADD_MEMBER Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBER-Function.html#GUID-60E9B7BF-EFD1-405E-9A9D-9CDFF967F789)
- [ADD_MEMBERS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_MEMBERS-Procedure.html#GUID-8579068A-4BB5-4611-9598-30AF06787D32)
- [COLLECTION_EXISTS Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_EXISTS-Function.html#GUID-92AE3589-C89F-4CE4-8166-79A2B8E1C938)
- [COLLECTION_HAS_CHANGED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_HAS_CHANGED-Function.html#GUID-1DC33627-7413-4D71-88DF-60731B6CE8A4)
- [COLLECTION_MEMBER_COUNT Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_MEMBER_COUNT-Function.html#GUID-30C0AF1E-C8FB-4D10-BF82-C964E8246D6F)
- [CREATE_COLLECTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION-Procedure.html#GUID-99D165B6-26C8-4142-9013-9948AFD67FF2)
- [CREATE_COLLECTION_FROM_QUERY Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY-Procedure.html#GUID-E2940996-DCB5-4056-B1C4-94C93BD6FB44)
- [CREATE_COLLECTION_FROM_QUERY2 Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY2-Procedure.html#GUID-7800CD9E-FD29-4E49-B637-A426D78A644C)
- [CREATE_COLLECTION_FROM_QUERY_B Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY_B-Procedure.html#GUID-1C319954-50DF-4C28-8B57-2AA52066B900)
- [CREATE_COLLECTION_FROM_QUERY_B Procedure (No bind version)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERY_B-Procedure-NBV.html#GUID-4F715772-4228-493E-8F3D-F58716078BC5)
- [CREATE_COLLECTION_FROM_QUERYB2 Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERYB2-Procedure.html#GUID-A429035B-82A7-452F-94DE-AAD32B7C0821)
- [CREATE_COLLECTION_FROM_QUERYB2 Procedure (No bind version)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_COLLECTION_FROM_QUERYB2-Procedure-NBV.html#GUID-A5F61B56-DFEA-48B1-BBE3-B4DF37551D8C)
- [CREATE_OR_TRUNCATE_COLLECTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_OR_TRUNCATE_COLLECTION-Procedure.html#GUID-94CD827F-9C10-4362-B2A1-30145D451098)
- [DELETE_ALL_COLLECTIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_ALL_COLLECTIONS-Procedure.html#GUID-5B981CC9-ABE7-4EDB-8EAC-14724BAE8F7D)
- [DELETE_ALL_COLLECTIONS_SESSION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_ALL_COLLECTIONS_SESSION-Procedure.html#GUID-E139DBBC-9026-485B-84E0-CC95601CCCA3)
- [DELETE_COLLECTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_COLLECTION-Procedure.html#GUID-53D9F8B7-79C6-4301-9D68-6B426216F470)
- [DELETE_MEMBER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MEMBER-Procedure.html#GUID-16D57A70-AAF9-43B8-A176-9AD7708193C4)
- [DELETE_MEMBERS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/DELETE_MEMBERS-Procedure.html#GUID-527C6A66-3658-4DF6-8439-21DA4A6796FB)
- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)
- [MERGE_MEMBERS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MERGE_MEMBERS-Procedure.html#GUID-B73EC254-C04A-496D-8389-E5BCC30E89A5)
- [MOVE_MEMBER_DOWN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MOVE_MEMBER_DOWN-Procedure.html#GUID-B421E0EA-027F-45AF-8578-33BBC9710CCD)
- [MOVE_MEMBER_UP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MOVE_MEMBER_UP-Procedure.html#GUID-4B5A4C05-EB36-44F4-BDBC-09CE3A6E3278)
- [RESEQUENCE_COLLECTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESEQUENCE_COLLECTION-Procedure.html#GUID-31A7CABB-A10C-4C4F-B7F4-B36006271662)
- [RESET_COLLECTION_CHANGED Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED-Procedure.html#GUID-B63E77BD-479A-4B79-84AA-05CC6BA2F698)
- [RESET_COLLECTION_CHANGED_ALL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED_ALL-Procedure.html#GUID-9660DD2F-FC08-489D-8205-AF9F22B16549)
- [SORT_MEMBERS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SORT_MEMBERS-Procedure.html#GUID-523A647A-58E6-419A-A817-C982D2402F25)
- [TRUNCATE_COLLECTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRUNCATE_COLLECTION-Procedure.html#GUID-F7066966-21B9-4AB1-817B-3C942E2FA24F)
- [UPDATE_MEMBER Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER-Procedure.html#GUID-FF926A72-D196-4D6F-BD41-EEA24E54D580)
- [UPDATE_MEMBERS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBERS-Procedure.html#GUID-DD03C9D6-884F-425C-91DC-72C407ABCA6C)
- [UPDATE_MEMBER_ATTRIBUTE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-1.html#GUID-DF709BF7-4B32-4713-88FA-E03F89609FEA)
- [UPDATE_MEMBER_ATTRIBUTE Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-2.html#GUID-202605C5-AEF1-4871-B0DB-62F3F01D43D8)
- [UPDATE_MEMBER_ATTRIBUTE Procedure Signature 3](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-3.html#GUID-F31010E3-C88B-4750-B5EB-D3B0DEE7851F)
- [UPDATE_MEMBER_ATTRIBUTE Procedure Signature 4](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-4.html#GUID-CC912D16-16EF-4945-A19F-846277791058)
- [UPDATE_MEMBER_ATTRIBUTE Procedure Signature 5](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-5.html#GUID-B39AD809-F1E1-4E12-9D80-DFEF9AC26E50)
- [UPDATE_MEMBER_ATTRIBUTE Procedure Signature 6](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-6.html#GUID-66674EE4-7CD0-4DC1-A49B-36DD30245AE0)

------------------------------------------------------------------------

## 15.1 About the APEX_COLLECTION API

Every collection contains a named list of data elements (or members) which can have up to 50 character attributes (`VARCHAR2(4000)`), five number attributes, five date attributes, one XML Type attribute, one large binary attribute (`BLOB`), and one large character attribute (`CLOB`). You insert, update, and delete collection information using the PL/SQL API `APEX_COLLECTION`.

The following are examples of when you might use collections:

- When you are creating a data-entry wizard in which multiple rows of information first need to be collected within a logical transaction. You can use collections to temporarily store the contents of the multiple rows of information, before performing the final step in the wizard when both the physical and logical transactions are completed.
- When your application includes an update page on which a user updates multiple detail rows on one page. The user can make many updates, apply these updates to a collection and then call a final process to apply the changes to the database.
- When you are building a wizard where you are collecting an arbitrary number of attributes. At the end of the wizard, the user then performs a task that takes the information temporarily stored in the collection and applies it to the database.

Beginning in Oracle AI Database 12c, database columns of data type `VARCHAR2` can be defined up to 32,767 bytes. This requires that the database initialization parameter `MAX_STRING_SIZE` has a value of `EXTENDED`. If Oracle APEX was installed in Oracle AI Database 12c and with `MAX_STRING_SIZE=EXTENDED`, then the tables for the APEX collections will be defined to support up 32,767 bytes for the character attributes of a collection. For the methods in the APEX_COLLECTION API, all references to character attributes (`c001` through `c050`) can support up to 32,767 bytes.

- [Accessing a Collection](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Accessing-a-Collection.html#GUID-19432196-C604-475D-80AC-283CDCF4FF86)
- [Determining Collection Status](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Determining-Collection-Status.html#GUID-1B9FBD91-D989-49D1-8005-CA2DF561B2F6)
- [Clearing Collection Session State](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Clearing-Collection-Session-State.html#GUID-888BA98D-CD54-4BC1-ADBF-2121A632DDBC)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.1.1 Accessing a Collection

You can access the members of a collection by querying the database view `APEX_COLLECTIONS`. Collection names are always converted to uppercase. When querying the `APEX_COLLECTIONS` view, always specify the collection name in all uppercase. The `APEX_COLLECTIONS` view has the following definition:

```
COLLECTION_NAME   NOT NULL VARCHAR2(255)
SEQ_ID            NOT NULL NUMBER
C001              VARCHAR2(4000)
C002              VARCHAR2(4000)
C003              VARCHAR2(4000)
C004              VARCHAR2(4000)
C005              VARCHAR2(4000)
...
C050              VARCHAR2(4000)
N001              NUMBER
N002              NUMBER
N003              NUMBER
N004              NUMBER
N005              NUMBER
D001              DATE
D002              DATE
D003              DATE
D004              DATE
D005              DATE
CLOB001           CLOB
BLOB001           BLOB
XMLTYPE001        XMLTYPE
MD5_ORIGINAL      VARCHAR2(4000)
```

Use the `APEX_COLLECTIONS` view in an application just as you would use any other table or view in an application, for example:

```
SELECT c001, c002, c003, n001, d001, clob001
   FROM APEX_collections
 WHERE collection_name = 'DEPARTMENTS'
```

**Parent topic:** [About the APEX_COLLECTION API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_COLLECTION-API.html#GUID-56991245-9102-4301-AC86-7A43701649AD)

------------------------------------------------------------------------

## 15.1.2 Determining Collection Status

The `p_generate_md5` parameter determines if the MD5 message digests are computed for each member of a collection. The collection status flag is set to `FALSE` immediately after you create a collection. If any operations are performed on the collection (such as add, update, truncate, and so on), this flag is set to `TRUE`.

You can reset this flag manually by calling `RESET_COLLECTION_CHANGED`.

Once this flag has been reset, you can determine if a collection has changed by calling `COLLECTION_HAS_CHANGED`.

When you add a new member to a collection, an MD5 message digest is computed against all 50 attributes and the CLOB attribute if the `p_generated_md5` parameter is set to `YES`. You can access this value from the `MD5_ORIGINAL` column of the view `APEX_COLLECTION`. You can access the MD5 message digest for the current value of a specified collection member by using the function `GET_MEMBER_MD5`.

See Also:

- "[RESET_COLLECTION_CHANGED Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED-Procedure.html#GUID-B63E77BD-479A-4B79-84AA-05CC6BA2F698)"

- "[COLLECTION_HAS_CHANGED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_HAS_CHANGED-Function.html#GUID-1DC33627-7413-4D71-88DF-60731B6CE8A4)"

- "[GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)"

**Parent topic:** [About the APEX_COLLECTION API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_COLLECTION-API.html#GUID-56991245-9102-4301-AC86-7A43701649AD)

------------------------------------------------------------------------

## 15.1.3 Clearing Collection Session State

Clearing the session state of a collection removes the collection members. A shopping cart is a good example of when you might need to clear collection session state. When a user requests to empty the shopping cart and start again, you must clear the session state for a collection. You can remove session state of a collection by calling the `TRUNCATE_COLLECTION` method or by using `f?p` syntax.

Calling the `TRUNCATE_COLLECTION` method deletes the existing collection and then recreates it, for example:

```
APEX_COLLECTION.TRUNCATE_COLLECTION(
    p_collection_name => collection name);
```

You can also use the sixth `f?p` syntax argument to clear session state, for example:

```
f?p=App:Page:Session::NO:collection name
```

See Also:

[TRUNCATE_COLLECTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/TRUNCATE_COLLECTION-Procedure.html#GUID-F7066966-21B9-4AB1-817B-3C942E2FA24F)

**Parent topic:** [About the APEX_COLLECTION API](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/About-the-APEX_COLLECTION-API.html#GUID-56991245-9102-4301-AC86-7A43701649AD)

------------------------------------------------------------------------

## 15.2 ADD_MEMBER Procedure

Adds a new member to an existing collection. An error occurs if the specified collection does not exist for the current user in the same session for the current application ID.

Gaps are not used when adding a new member, so an existing collection with members of sequence IDs (1,2,5,8) adds the new member with a sequence ID of 9.

Syntax

```
APEX_COLLECTION.ADD_MEMBER (
    p_collection_name   IN VARCHAR2,
    p_c001              IN VARCHAR2 DEFAULT NULL,
    ...
    p_c050              IN VARCHAR2 DEFAULT NULL,
    p_n001              IN NUMBER   DEFAULT NULL,
    p_n002              IN NUMBER   DEFAULT NULL,
    p_n003              IN NUMBER   DEFAULT NULL,
    p_n004              IN NUMBER   DEFAULT NULL,
    p_n005              IN NUMBER   DEFAULT NULL,
    p_d001              IN DATE     DEFAULT NULL,
    p_d002              IN DATE     DEFAULT NULL,
    p_d003              IN DATE     DEFAULT NULL,
    p_d004              IN DATE     DEFAULT NULL,
    p_d005              IN DATE     DEFAULT NULL,
    p_clob001           IN CLOB     DEFAULT empty_clob(),
    p_blob001           IN BLOB     DEFAULT empty_blob(),
    p_xmltype001        IN XMLTYPE  DEFAULT NULL,
    p_generate_md5      IN VARCHAR2 DEFAULT 'NO' )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of an existing collection. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. |
| `p_c001 through p_c050` | Attribute value of the member to be added. Maximum length is 4,000 bytes. Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. |
| `p_n001 through p_n005` | Attribute value of the numeric attributes to be added. |
| `p_d001` through `p_d005` | Attribute value of the date attribute. |
| `p_clob001` | Use for collection member attributes that exceed 4,000 characters. |
| `p_blob001` | Use for binary collection member attributes. |
| `p_xmltype001` | Use to store well-formed XML. |
| `p_generate_md5` | Valid values include `YES` and `NO`. `YES` to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |

Example

```
APEX_COLLECTION.ADD_MEMBER(
        p_collection_name => 'GROCERIES'
        p_c001            => 'Grapes',
        p_c002            => 'Imported',
        p_n001            => 125,
        p_d001            => sysdate );
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.3 ADD_MEMBER Function

Adds a new member to an existing collection. Calling this function returns the sequence ID of the newly added member. An error occurs if the specified collection does not exist for the current user in the same session for the current application ID.

Gaps are not used when adding a new member, so an existing collection with members of sequence IDs (1,2,5,8) adds the new member with a sequence ID of 9.

Syntax

```
APEX_COLLECTION.ADD_MEMBER (
    p_collection_name   IN VARCHAR2,
    p_c001              IN VARCHAR2 DEFAULT NULL,
    ...
    p_c050              IN VARCHAR2 DEFAULT NULL,
    p_n001              IN NUMBER   DEFAULT NULL,
    p_n002              IN NUMBER   DEFAULT NULL,
    p_n003              IN NUMBER   DEFAULT NULL,
    p_n004              IN NUMBER   DEFAULT NULL,
    p_n005              IN NUMBER   DEFAULT NULL,
    p_d001              IN DATE     DEFAULT NULL,
    p_d002              IN DATE     DEFAULT NULL,
    p_d003              IN DATE     DEFAULT NULL,
    p_d004              IN DATE     DEFAULT NULL,
    p_d005              IN DATE     DEFAULT NULL,
    p_clob001           IN CLOB     DEFAULT empty_clob(),
    p_blob001           IN BLOB     DEFAULT empty_blob(),
    p_xmltype001        IN XMLTYPE  DEFAULT NULL,
    p_generate_md5      IN VARCHAR2 DEFAULT 'NO' )
RETURN NUMBER;
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of an existing collection. Maximum length is 255 bytes. Collection names are not case sensitive and are converted to upper case. |
| `p_c001 through p_c050` | Attribute value of the member to be added. Maximum length is 4,000 bytes. Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. |
| `p_n001 through p_n005` | Attribute value of the numeric attributes to be added. |
| `p_d001` through `p_d005` | Attribute value of the date attribute to be added. |
| `p_clob001` | Use for collection member attributes that exceed 4,000 characters. |
| `p_blob001` | Use for binary collection member attributes. |
| `p_xmltype001` | Use to store well-formed XML. |
| `p_generate_md5` | Valid values include `YES` and `NO`. `YES` to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |

Example

```
DECLARE
    l_seq number;
BEGIN
    l_seq := APEX_COLLECTION.ADD_MEMBER(
                 p_collection_name => 'GROCERIES'
                 p_c001            => 'Grapes',
                 p_c002            => 'Imported',
                 p_n001            => 125,
                 p_d001            => sysdate );
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.4 ADD_MEMBERS Procedure

Adds an array of members to a collection. An error occurs if the specified collection does not exist for the current user in the same session for the current application ID.

Gaps are not used when adding a new member, so an existing collection with members of sequence IDs (1,2,5,8) adds the new member with a sequence ID of 9.

The count of elements in the `p_c001` PL/SQL table is used as the total number of items across all PL/SQL tables. For example, if `p_c001.count` is 2 and `p_c002.count` is 10, only 2 members are added. If `p_c001` is NULL, an application error occurs.

Syntax

```
APEX_COLLECTION.ADD_MEMBERS (
  p_collection_name IN VARCHAR2,
  p_c001            IN apex_application_global.vc_arr2,
  p_c002            IN apex_application_global.vc_arr2  DEFAULT empty_vc_arr,
  p_c003            IN apex_application_global.vc_arr2  DEFAULT empty_vc_arr,
  ...
  p_c050            IN apex_application_global.vc_arr2  DEFAULT empty_vc_arr,
  p_n001            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n002            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n003            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n004            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_n005            IN apex_application_global.n_arr    DEFAULT empty_n_arr,
  p_d001            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d002            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d003            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d004            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_d005            IN apex_application_global.d_arr    DEFAULT empty_d_arr,
  p_generate_md5    IN VARCHAR2                         DEFAULT 'NO' )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. The number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of an existing collection. Maximum length is 255 bytes. Collection names are not case sensitive and are converted to upper case. |
| `p_c001` through `p_c050` | Array of character attribute values to be added. |
| `p_n001` through `p_n005` | Array of numeric attribute values to be added. |
| `p_d001` through `p_d005` | Array of date attribute values to be added. |
| `p_generate_md5` | Valid values include `YES` and `NO`. `YES` to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |

Example

The following example adds two new members to the `EMPLOYEE` table.

```
BEGIN
    APEX_COLLECTION.ADD_MEMBERS(
        p_collection_name => 'EMPLOYEE',
        p_c001 => l_arr1,
        p_c002 => 1_arr2);
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.5 COLLECTION_EXISTS Function

Determines if a collection exists. Returns `TRUE` if the specified collection exists for the current user in the current session for the current application ID, otherwise `FALSE`.

Syntax

```
APEX_COLLECTION.COLLECTION_EXISTS (
    p_collection_name   IN VARCHAR2 )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. The collection name is not case-sensitive and is converted to upper case. |

Example

The following example determines if the collection named `EMPLOYEES` exists.

```
BEGIN
    l_exists := APEX_COLLECTION.COLLECTION_EXISTS (
        p_collection_name => 'EMPLOYEES');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.6 COLLECTION_HAS_CHANGED Function

Determines if a collection has changed since it was created or since the collection changed flag was reset.

Syntax

```
APEX_COLLECTION.COLLECTION_HAS_CHANGED (
    p_collection_name   IN VARCHAR2 )
RETURN BOOLEAN;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

Example

The following example determines if the `EMPLOYEES` collection has changed since it was created or last reset.

```
BEGIN
    l_exists := APEX_COLLECTION.COLLECTION_HAS_CHANGED (
       p_collection_name => 'EMPLOYEES');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.7 COLLECTION_MEMBER_COUNT Function

Retrieves the total number of members for the named collection. If gaps exist, the total member count returned is not equal to the highest sequence ID in the collection.

If the named collection does not exist for the current user in the current session, no error occurs.

Syntax

```
APEX_COLLECTION.COLLECTION_MEMBER_COUNT (
    p_collection_name   IN VARCHAR2 )
RETURN NUMBER;
```

Parameters

| Parameter           | Description                 |
|:--------------------|:----------------------------|
| `p_collection_name` | The name of the collection. |

Example

This example retrieves the total number of members in the `DEPARTMENTS` collection.

```
BEGIN
    l_count := APEX_COLLECTION.COLLECTION_MEMBER_COUNT( p_collection_name => 'DEPARTMENTS');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.8 CREATE_COLLECTION Procedure

Creates an empty collection that does not already exist. If a collection exists with the same name for the current user in the same session for the current application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.CREATE_COLLECTION (
    p_collection_name       IN VARCHAR2,
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_truncate_if_exists` | If `YES`, then members of the collection are first truncated if the collection exists and no error occurs. If `NO` (or not `YES`), and the collection exists, an error occurs. |

Example

This example creates an empty collection named `EMPLOYEES`.

```
BEGIN
    APEX_COLLECTION.CREATE_COLLECTION(
        p_collection_name => 'EMPLOYEES');
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.9 CREATE_COLLECTION_FROM_QUERY Procedure

Creates a collection from a supplied query. The query is parsed as the application owner.

This method can be used with a query with up to 50 columns in the `SELECT` clause. These columns in the `SELECT` clause populate the 50 character attributes of the collection (`C001` through `C050`).

If a collection exists with the same name for the current user in the same session for the current Application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY (
    p_collection_name       IN VARCHAR2,
    p_query                 IN VARCHAR2,
    p_generate_md5          IN VARCHAR2 DEFAULT 'NO',
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_generate_md5` | Valid values include `YES` and `NO`. `YES` to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |
| `p_truncate_if_exists` | If `YES`, then members of the collection are first truncated if the collection exists and no error occurs. If `NO` (or not `YES`), and the collection exists, an error occurs. |

Example

The following example creates a collection named `AUTO` and populates it with data from the `AUTOS` table. Because `p_generate_md5` is `YES`, the `MD5` checksum is computed to enable comparisons to determine change status.

```
BEGIN
    l_query := 'select make, model, year from AUTOS';
    APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY (
        p_collection_name => 'AUTO',
        p_query => l_query,
        p_generate_md5 => 'YES');
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.10 CREATE_COLLECTION_FROM_QUERY2 Procedure

Creates a collection from a supplied query.

This method is identical to `CREATE_COLLECTION_FROM_QUERY`, however, the first 5 columns of the `SELECT` clause must be numeric and the next 5 must be date. After the numeric and date columns, there can be up to 50 character columns in the `SELECT` clause. The query is parsed as the application owner.

If a collection exists with the same name for the current user in the same session for the current application ID, an application error is raised.

Syntax

```
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY2 (
    p_collection_name       IN VARCHAR2,
    p_query                 IN VARCHAR2,
    p_generate_md5          IN VARCHAR2 DEFAULT 'NO',
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_generate_md5` | Valid values include `YES` and `NO`. `YES` to specify if the message digest of the data of the collection member should be computed. Use this parameter to compare the MD5 of the collection member with another member or to see if that member has changed. |
| `p_truncate_if_exists` | If `YES`, then members of the collection will first be truncated if the collection exists and no error will be raised. If `NO` (or not `YES`), and the collection exists, an error will be raised. |

Example

The following example creates a collection named `EMPLOYEE` and populates it with data from the `EMP` table. The first five columns (mgr, sal, comm, deptno, and null) are all numeric. Because `p_generate_md5` is `NO`, the `MD5` checksum is not computed.

```
BEGIN
    APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY2 (
        p_collection_name => 'EMPLOYEE',
        p_query => 'select empno, sal, comm, deptno, null, hiredate, null, null, null, null, ename, job, mgr from emp',
        p_generate_md5 => 'NO');
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.11 CREATE_COLLECTION_FROM_QUERY_B Procedure

Creates a collection from a supplied query using bulk operations.

This method offers significantly faster performance than the `CREATE_COLLECTION_FROM_QUERY` method. The query is parsed as the application owner. If a collection exists with the same name for the current user in the same session for the current application ID, an application error occurs.

This procedure uses bulk dynamic SQL to perform the fetch and insert operations into the named collection. Two limitations are imposed by this procedure:

1.  The MD5 checksum for the member data is not computed.
2.  No column value in query `p_query` can exceed 2,000 bytes. If a row is encountered that has a column value of more than 2,000 bytes, an error is raised during execution. In Oracle AI Database 11g Release 2 (11.2.0.1) or later, this column limit is 4,000 bytes.

Syntax

```
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B (
    p_collection_name       IN VARCHAR2,
    p_query                 IN VARCHAR2,
    p_names                 IN apex_application_global.vc_arr2,
    p_values                IN apex_application_global.vc_arr2,
    p_max_row_count         IN NUMBER   DEFAULT NULL,
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_names` | Array of bind variable names used in the query statement. |
| `p_values` | Array of bind variable values used in the bind variables in the query statement. |
| `p_max_row_count` | Maximum number of rows returned from the query in `p_query` to add to the collection. |
| `p_truncate_if_exists` | If `YES`, then members of the collection are truncated first if the collection exists and no error occurs. If `NO` (or not `YES`), and the collection exists, an error occurs. |

Example

The following example creates a collection named `EMPLOYEES` and populates it with data from the `EMP` table.

```
DECLARE
    l_query varchar2(4000);
BEGIN
    l_query := 'select empno, ename, job, sal from emp where deptno = :b1';
    APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B (
        p_collection_name => 'EMPLOYEES',
                  p_query => l_query,
                  p_names => apex_util.string_to_table('b1'),
                 p_values => apex_util.string_to_table('10'));
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.12 CREATE_COLLECTION_FROM_QUERY_B Procedure (No bind version)

Creates a collection from a supplied query using bulk operations.

This method offers significantly faster performance than the `CREATE_COLLECTION_FROM_QUERY` method. The query is parsed as the application owner. If a collection exists with the same name for the current user in the same session for the current application ID, an application error occurs.

This procedure uses bulk dynamic SQL to perform the fetch and insert operations into the named collection. Two limitations are imposed by this procedure:

1.  The MD5 checksum for the member data is not computed.
2.  No column value in query `p_query` can exceed 2,000 bytes. If a row is encountered that has a column value of more than 2,000 bytes, an error occurs during execution. In Oracle AI Database 11g Release 2 (11.2.0.1) or later, this column limit is 4,000 bytes.

Syntax

```
 APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B (
    p_collection_name   IN VARCHAR2,
    p_query             IN VARCHAR2,
    p_max_row_count     IN NUMBER   DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_max_row_count` | Maximum number of rows returned from the query in `p_query` to be added to the collection. |

Example

The following example creates a collection named `EMPLOYEES` and populates it with data from the `EMP` table.

```
DECLARE
    l_query varchar2(4000);
BEGIN
    l_query := 'select empno, ename, job, sal from emp';
    APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERY_B (
        p_collection_name => 'EMPLOYEES',
                  p_query => l_query );
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.13 CREATE_COLLECTION_FROM_QUERYB2 Procedure

Creates a collection from a supplied query using bulk operations.

This method offers significantly faster performance than the `CREATE_COLLECTION_FROM_QUERY_2` method. The query is parsed as the application owner. If a collection exists with the same name for the current user in the same session for the current application ID, an application error occurs.

This procedure is identical to `CREATE_COLLECTION_FROM_QUERY_B` except the first five columns of the `SELECT` clause must be numeric and the next five columns must be a date. After the date columns, there can be up to 50 character columns in the `SELECT` clause.

This procedure uses bulk dynamic SQL to perform the fetch and insert operations into the named collection. Two limitations are imposed by this procedure:

1.  The MD5 checksum for the member data is not computed.
2.  No column value in query `p_query` can exceed 2,000 bytes. If a row is encountered that has a column value of more than 2,000 bytes, an error is raised during execution. In Oracle AI Database 11g Release 2 (11.2.0.1) or later, this column limit is 4,000 bytes.

Syntax

```
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERYB2 (
    p_collection_name       IN VARCHAR2,
    p_query                 IN VARCHAR2,
    p_names                 IN apex_application_global.vc_arr2,
    p_values                IN apex_application_global.vc_arr2,
    p_max_row_count         IN NUMBER   DEFAULT NULL,
    p_truncate_if_exists    IN VARCHAR2 DEFAULT 'NO' )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_names` | Array of bind variable names used in the query statement. |
| `p_values` | Array of bind variable values used in the bind variables in the query statement. |
| `p_max_row_count` | Maximum number of rows returned from the query in `p_query` to be added to the collection. |
| `p_truncate_if_exists` | If `YES`, then members of the collection are first truncated if the collection exists. If `NO` (or not `YES`), and the collection exists, an error occurs. |

Example

The following example shows how to use the `CREATE_COLLECTION_FROM_QUERYB2` procedure to create a collection named `EMPLOYEES` and populate it with data from the `EMP` table. The first five columns (mgr, sal, comm, deptno, and null) are all numeric and the next five are all date.

```
DECLARE
    l_query varchar2(4000);
BEGIN
    l_query := 'select empno, sal, comm, deptno, null, hiredate, null,
        null, null, null, ename, job, mgr from emp where deptno = :b1';
    APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERYB2 (
        p_collection_name => 'EMPLOYEES',
                  p_query => l_query,
                  p_names => apex_util.string_to_table('b1'),
                 p_values => apex_util.string_to_table('10'));
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.14 CREATE_COLLECTION_FROM_QUERYB2 Procedure (No bind version)

Creates a collection from a supplied query using bulk operations.

This method offers significantly faster performance than the `CREATE_COLLECTION_FROM_QUERY_2` method. The query is parsed as the application owner. If a collection exists with the same name for the current user in the same session for the current application ID, an application error occurs.

This procedure is identical to `CREATE_COLLECTION_FROM_QUERY_B` except the first five columns of the `SELECT` clause must be numeric and the next five columns must be a date. After the date columns, there can be up to 50 character columns in the `SELECT` clause.

This procedure uses bulk dynamic SQL to perform the fetch and insert operations into the named collection. Two limitations are imposed by this procedure:

1.  The MD5 checksum for the member data is not computed.
2.  No column value in query `p_query` can exceed 2,000 bytes. If a row is encountered that has a column value of more than 2,000 bytes, an error is raised during execution. In Oracle AI Database 11g Release 2 (11.2.0.1) or later, this column limit is 4,000 bytes.

Syntax

```
APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERYB2 (
    p_collection_name   IN VARCHAR2,
    p_query             IN VARCHAR2,
    p_max_row_count     IN NUMBER   DEFAULT )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. An error is returned if this collection exists with the specified name of the current user and in the same session. |
| `p_query` | Query to execute to populate the members of the collection. |
| `p_max_row_count` | Maximum number of rows returned from the query in `p_query` to be added to the collection. |

Example

The following example creates a collection named `EMPLOYEES` and populates it with data from the `EMP` table. The first five columns (mgr, sal, comm, deptno, and null) are all numeric and the next five are all dates. Because `p_generate_md5` is `NO`, the `MD5` checksum is not computed.

```
DECLARE
    l_query varchar2(4000);
BEGIN
    l_query := 'select empno, sal, comm, deptno, null, hiredate, null,
        null, null, null, ename, job, mgr from emp where deptno = 10';
    APEX_COLLECTION.CREATE_COLLECTION_FROM_QUERYB2 (
        p_collection_name => 'EMPLOYEES',
                  p_query => l_query);
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.15 CREATE_OR_TRUNCATE_COLLECTION Procedure

Creates a collection. If a collection exists with the same name for the current user in the same session for the current application ID, all members of the collection are removed (the named collection is truncated).

Syntax

```
APEX_COLLECTION.CREATE_OR_TRUNCATE_COLLECTION (
    p_collection_name   IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. The maximum length is 255 characters. All members of the named collection are removed if the named collection exists for the current user in the current session. |

Example

This example removes all members in an existing collection named `EMPLOYEES`.

```
BEGIN
    APEX_COLLECTION.CREATE_OR_TRUNCATE_COLLECTION(
        p_collection_name => 'EMPLOYEES');
END;
```

See Also:

- [GET_MEMBER_MD5 Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_MEMBER_MD5-Function.html#GUID-A456F18D-10D5-48F6-B75F-FD9534FD91FD)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.16 DELETE_ALL_COLLECTIONS Procedure

Use this procedure to delete all collections that belong to the current user in the current Oracle APEX session for the current Application ID.

Syntax

```
APEX_COLLECTION.DELETE_ALL_COLLECTIONS;
```

Parameters

None.

Example

This example shows how to use the `DELETE_ALL_COLLECTIONS` procedure to remove all collections that belong to the current user in the current session and Application ID.

```
BEGIN
    APEX_COLLECTION.DELETE_ALL_COLLECTIONS;
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.17 DELETE_ALL_COLLECTIONS_SESSION Procedure

Use this procedure to delete all collections that belong to the current user in the current Oracle APEX session regardless of the Application ID.

Syntax

```
APEX_COLLECTION.DELETE_ALL_COLLECTIONS_SESSION;
```

Parameters

None.

Example

This example shows how to use the `DELETE_ALL_COLLECTIONS_SESSION` procedure to remove all collections that belong to the current user in the current session regardless of Application ID.

```
BEGIN
    APEX_COLLECTION.DELETE_ALL_COLLECTIONS_SESSION;
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.18 DELETE_COLLECTION Procedure

Deletes a named collection. All members that belong to the collection are removed and the named collection is dropped.

If the named collection does not exist for the same user in the current session for the current application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.DELETE_COLLECTION (
    p_collection_name   IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to remove all members from and drop. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

Example

This example removes the `EMPLOYEE` collection.

```
BEGIN
    APEX_COLLECTION.DELETE_COLLECTION(
        p_collection_name => 'EMPLOYEE');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.19 DELETE_MEMBER Procedure

Deletes a specified member from a given named collection.

If the named collection does not exist for the same user in the current session for the current application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.DELETE_MEMBER (
    p_collection_name   IN VARCHAR2,
    p_seq               IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to delete the specified member from. The maximum length is 255 characters. Collection names are not case-sensitive and are converted to upper case. An error is returned if this collection does not exist for the current user in the same session. |
| `p_seq` | This is the sequence ID of the collection member to be deleted. |

Example

This example removes the member with a sequence ID of `2` from the `EMPLOYEES` collection.

```
BEGIN
    APEX_COLLECTION.DELETE_MEMBER(
        p_collection_name => 'EMPLOYEES',
        p_seq => '2');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.20 DELETE_MEMBERS Procedure

Deletes all members from a given named collection where the attribute specified by the attribute number equals the supplied value.

If the named collection does not exist for the same user in the current session for the current application ID, an application error occurs.

If the attribute number specified is invalid or outside the range of 1 to 50, an error occurs.

If the supplied attribute value is NULL, then all members of the named collection are deleted where the attribute, specified by `p_attr_number`, is NULL.

Syntax

```
APEX_COLLECTION.DELETE_MEMBERS (
    p_collection_name   IN VARCHAR2,
    p_attr_number       IN NUMBER,
    p_attr_value        IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to delete the specified members from. The maximum length is 255 characters. Collection names are not case-sensitive and are converted to upper case. An error is returned if this collection does not exist for the current user in the same session. |
| `p_attr_number` | Attribute number of the member attribute used to match for the specified attribute value for deletion. Valid values are 1 through 50 and NULL. |
| `p_attr_value` | Attribute value of the member attribute used to match for deletion. Maximum length can be 4,000 bytes. The attribute value is truncated to 4,000 bytes if greater than this amount. |

Example

The following example deletes all members of the `GROCERIES` collection where the 5th character attribute is `APPLE`.

```
BEGIN
    apex_collection.delete_members(
        p_collection_name => 'GROCERIES'
        p_attr_number     => 5,
        p_attr_value      => 'APPLE' );
    COMMIT;
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.21 GET_MEMBER_MD5 Function

Computes and returns the message digest of the attributes for the member specified by the sequence ID. This computation of message digest is equal to the computation performed natively by collections. The result of this function can be compared to the `MD5_ORIGINAL` column of the view `APEX_COLLECTIONS`.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

Syntax

```
APEX_COLLECTION.GET_MEMBER_MD5 (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER )
RETURN VARCHAR2;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to add this array of members to. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member. |

Example

The following example computes the MD5 for the 10th member of the `GROCERIES` collection.

```
DECLARE
    l_md5 varchar2(4000);
BEGIN
    l_md5 := apex_collection.get_member_md5(
        p_collection_name => 'GROCERIES'
        p_seq             => 10 );
END;
```

See Also:

- [COLLECTION_HAS_CHANGED Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/COLLECTION_HAS_CHANGED-Function.html#GUID-1DC33627-7413-4D71-88DF-60731B6CE8A4)
- [RESET_COLLECTION_CHANGED Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED-Procedure.html#GUID-B63E77BD-479A-4B79-84AA-05CC6BA2F698)
- [RESET_COLLECTION_CHANGED_ALL Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/RESET_COLLECTION_CHANGED_ALL-Procedure.html#GUID-9660DD2F-FC08-489D-8205-AF9F22B16549)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.22 MERGE_MEMBERS Procedure

Merges members of the given named collection with the values passed in the arrays.

If the named collection does not exist, one is created.

If a `p_init_query` is provided, the collection is created from the supplied SQL query.

If the named collection exists, the following occurs:

1.  Rows in the collection and not in the arrays are deleted.
2.  Rows in the collections and in the arrays are updated.
3.  Rows in the arrays and not in the collection are inserted.

The count of elements in the `p_c001` PL/SQL table is used as the total number of items across all PL/SQL tables. For example, if `p_c001.count` is `2` and `p_c002.count` is `10`, only two members are merged.

If `p_c001` is NULL, an application error occurs.

Syntax

```
APEX_COLLECTION.MERGE_MEMBERS (
    p_collection_name   IN VARCHAR2,
    p_seq               IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c001              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c002              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c003              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    ...
    p_c050              IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_null_index        IN NUMBER   DEFAULT 1,
    p_null_value        IN VARCHAR2 DEFAULT NULL,
    p_init_query        IN VARCHAR2 DEFAULT NULL )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. |
| `p_c001 through p_c050` | Array of attribute values to be merged. Maximum length is 4,000 bytes. Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. The count of the `p_c001` array is used across all arrays. If no values are provided, then no actions are performed. |
| `p_c0xx` | Attribute of `NN` attributes values to be merged. Maximum length can be 4,000 bytes. The attribute value is truncated to 4,000 bytes if greater than this amount. |
| `p_seq` | Identifies the sequence number of the collection member to be merged. |
| `p_null_index` | If the element identified by this value is NULL, then treat this row as a NULL row. For example, if `p_null_index` is `3`, then `p_c003` is treated as a NULL row. The merge function then ignores this row. This results in removing NULL rows from the collection. The NULL index works with the NULL value. If the value of the `p_cXXX` argument is equal to the `p_null_value`, then the row is treated as NULL. |
| `p_null_value` | Used with the `p_null_index` argument. Identifies the NULL value. If used, this value must not be NULL. A typical value for this argument is `0`. |
| `p_init_query` | If the collection does not exist, the collection is created using this query. |

Example

The following example creates a collection on the table of employees, and then merges the contents of the local arrays with the collection, updating the job of two employees.

```
DECLARE
    l_seq   APEX_APPLICATION_GLOBAL.VC_ARR2;
    l_c001  APEX_APPLICATION_GLOBAL.VC_ARR2;
    l_c002  APEX_APPLICATION_GLOBAL.VC_ARR2;
    l_c003  APEX_APPLICATION_GLOBAL.VC_ARR2;
BEGIN
    l_seq(1)  := 1;
    l_c001(1) := 7369;
    l_c002(1) := 'SMITH';
    l_c003(1) := 'MANAGER';
    l_seq(2)  := 2;
    l_c001(2) := 7499;
    l_c002(2) := 'ALLEN';
    l_c003(2) := 'CLERK';

    APEX_COLLECTION.MERGE_MEMBERS(
        p_collection_name => 'EMPLOYEES',
        p_seq => l_seq,
        p_c001 => l_c001,
        p_c002 => l_c002,
        p_c003 => l_c003,
        p_init_query => 'select empno, ename, job from emp order by empno');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.23 MOVE_MEMBER_DOWN Procedure

Adjusts the sequence ID of a specified member in the given named collection down by one (subtract one), swapping sequence ID with the one it is replacing. For example, 3 becomes 2 and 2 becomes 3.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error is raised.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the member specified by sequence ID `p_seq` is the lowest sequence in the collection, an application error is NOT returned.

Syntax

```
APEX_COLLECTION.MOVE_MEMBER_DOWN (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user in the same session. |
| `p_seq` | Identifies the sequence number of the collection member to be moved down by one. |

Example

This example shows how to move a member of the `EMPLOYEES` collection down one position. After executing this example, sequence ID `5` becomes sequence ID `4` and sequence ID `4` becomes sequence ID `5`.

```
BEGIN
    APEX_COLLECTION.MOVE_MEMBER_DOWN(
        p_collection_name => 'EMPLOYEES',
        p_seq => '5' );
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.24 MOVE_MEMBER_UP Procedure

Adjusts the sequence ID of specified member in the given named collection up by one (add one), swapping sequence ID with the one it is replacing. For example, 2 becomes 3 and 3 becomes 2.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the member specified by sequence ID `p_seq` is the highest sequence in the collection, an application error is not returned.

Syntax

```
APEX_COLLECTION.MOVE_MEMBER_UP (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. Collection names are not case sensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user in the same session. |
| `p_seq` | Identifies the sequence number of the collection member to be moved up by one. |

Example

This example moves a member of the `EMPLOYEES` collection up one position. After executing this example, sequence ID `5` becomes sequence ID `6` and sequence ID `6` becomes sequence ID `5`.

```
BEGIN
    APEX_COLLECTION.MOVE_MEMBER_UP(
        p_collection_name => 'EMPLOYEES',
        p_seq => '5' );
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.25 RESEQUENCE_COLLECTION Procedure

For a named collection, updates the `seq_id` value of each member so that no gaps exist in the sequencing. For example, a collection with the following set of sequence IDs (1,2,3,5,8,9) becomes (1,2,3,4,5,6).

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.RESEQUENCE_COLLECTION (
    p_collection_name   IN VARCHAR2);
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to resequence. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

Example

This example resequences the `DEPARTMENTS` collection to remove gaps in the sequence IDs.

```
BEGIN
    APEX_COLLECTION.RESEQUENCE_COLLECTION (
        p_collection_name => 'DEPARTMENTS');
END;
```

See Also:

- [MOVE_MEMBER_DOWN Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MOVE_MEMBER_DOWN-Procedure.html#GUID-B421E0EA-027F-45AF-8578-33BBC9710CCD)
- [MOVE_MEMBER_UP Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/MOVE_MEMBER_UP-Procedure.html#GUID-4B5A4C05-EB36-44F4-BDBC-09CE3A6E3278)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.26 RESET_COLLECTION_CHANGED Procedure

Resets the collection changed flag (mark as not changed) for a given collection.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.RESET_COLLECTION_CHANGED (
    p_collection_name   IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to reset the collection changed flag. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

Example

This example shows how to reset the changed flag for the `DEPARTMENTS` collection.

```
BEGIN
    APEX_COLLECTION.RESET_COLLECTION_CHANGED (
        p_collection_name => 'DEPARTMENTS');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.27 RESET_COLLECTION_CHANGED_ALL Procedure

Resets the collection changed flag (mark as not changed) for all collections in the user's current session.

Syntax

```
APEX_COLLECTION.RESET_COLLECTION_CHANGED_ALL;
```

Parameters

None.

Example

This example resets the changed flag for all collections in the user's current session.

```
BEGIN
    APEX_COLLECTION.RESET_COLLECTION_CHANGED_ALL;
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.28 SORT_MEMBERS Procedure

Reorders the members of a given collection by the column number specified by `p_sort_on_column_number`. This sorts the collection by a particular column or attribute in the collection and reassigns the sequence IDs of each number such that no gaps exist.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.SORT_MEMBERS (
    p_collection_name       IN VARCHAR2,
    p_sort_on_column_number IN NUMBER )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to sort. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_sort_on_column_number ` | The column number used to sort the collection. The domain of possible values is 1 to 50. |

Example

In this example, column `2` of the `DEPARTMENTS` collection is the department location. The collection is reordered according to the department location.

```
BEGIN
    APEX_COLLECTION.SORT_MEMBERS (
        p_collection_name => 'DEPARTMENTS',
        p_sort_on_column_number => '2';
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.29 TRUNCATE_COLLECTION Procedure

Removes all members from a named collection.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

Syntax

```
APEX_COLLECTION.TRUNCATE_COLLECTION (
    p_collection_name   IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to truncate. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |

Example

This example removes all members from the `DEPARTMENTS` collection.

```
BEGIN
    APEX_COLLECTION.TRUNCATE_COLLECTION(
        p_collection_name => 'DEPARTMENTS');
END;
```

See Also:

[CREATE_OR_TRUNCATE_COLLECTION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CREATE_OR_TRUNCATE_COLLECTION-Procedure.html#GUID-94CD827F-9C10-4362-B2A1-30145D451098)

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.30 UPDATE_MEMBER Procedure

Updates the specified member in the given named collection.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

Note:

Using this procedure sets the columns identified and nullifies any columns not identified. To update specific columns, without affecting the values of other columns, use [UPDATE_MEMBER_ATTRIBUTE Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/UPDATE_MEMBER_ATTRIBUTE-Procedure-Signature-1.html#GUID-DF709BF7-4B32-4713-88FA-E03F89609FEA).

Syntax

```
APEX_COLLECTION.UPDATE_MEMBER (
    p_collection_name   IN VARCHAR2,
    p_seq               IN VARCHAR2 DEFAULT NULL,
    p_c001              IN VARCHAR2 DEFAULT NULL,
    p_c002              IN VARCHAR2 DEFAULT NULL,
    p_c003              IN VARCHAR2 DEFAULT NULL,
    …
    p_c050              IN VARCHAR  DEFAULT NULL,
    p_n001              IN NUMBER   DEFAULT NULL,
    p_n002              IN NUMBER   DEFAULT NULL,
    p_n003              IN NUMBER   DEFAULT NULL,
    p_n004              IN NUMBER   DEFAULT NULL,
    p_n005              IN NUMBER   DEFAULT NULL,
    p_d001              IN DATE     DEFAULT NULL,
    p_d002              IN DATE     DEFAULT NULL,
    p_d003              IN DATE     DEFAULT NULL,
    p_d004              IN DATE     DEFAULT NULL,
    p_d005              IN DATE     DEFAULT NULL,
    p_clob001           IN CLOB     DEFAULT empty_clob(),
    p_blob001           IN BLOB     DEFAULT empty-blob(),
    p_xmltype001        IN XMLTYPE  DEFAULT NULL )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to update. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. |
| `p_seq` | Identifies the sequence number of the collection member to be updated. |
| `p_c001`through `p_c050` | Attribute value of the member to be added. Maximum length is 4,000 bytes. Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. |
| `p_n001 through p_n005` | Attribute value of the numeric attributes to be added or updated. |
| `p_d001` through `p_d005` | Attribute value of the date attributes to be added or updated. |
| `p_clob001` | Use `p_clob001` for collection member attributes that exceed 4,000 characters. |
| `p_blob001` | Use `p_blob001` for binary collection member attributes. |
| `p_xmltype001` | Use `p_xmltype001` to store well-formed XML. |

Example

This example updates the second member of the collection `Departments` so that the first member attribute becomes `Engineering` and the second member attribute becomes `Sales`.

```
BEGIN
    APEX_COLLECTION.UPDATE_MEMBER (
        p_collection_name => 'Departments',
        p_seq => '2',
        p_c001 => 'Engineering',
        p_c002 => 'Sales');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.31 UPDATE_MEMBERS Procedure

Updates the array of members for the given named collection.

If a collection does not exist with the specified name for the current user in the same session and for the current application ID, an application error occurs.

The count of elements in the `p_seq` PL/SQL table is used as the total number of items across all PL/SQL tables. If `p_seq.count = 2` and `p_c001.count = 10`, only two members are updated.

If `p_seq` is NULL, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

Syntax

```
APEX_COLLECTION.UPDATE_MEMBERS (
    p_collection_name IN VARCHAR2,
    p_seq             IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c001            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c002            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_c003            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    ...
    p_c050            IN apex_application_global.vc_arr2 DEFAULT empty_vc_arr,
    p_n001            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n002            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n003            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n004            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_n005            IN apex_application_global.n_arr   DEFAULT empty_n_arr,
    p_d001            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d002            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d003            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d004            IN apex_application_global.d_arr   DEFAULT empty_d_arr,
    p_d005            IN apex_application_global.d_arr   DEFAULT empty_d_arr )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection to update. Maximum length is 255 bytes. Collection names are not case-sensitive and are converted to upper case. |
| `p_seq` | Array of member sequence IDs to be updated. The count of the `p_seq` array is used across all arrays. |
| `p_c001 through p_c050` | Array of attribute values to be updated. |
| `p_n001 through p_n005` | Array of numeric attribute values to be updated. |
| `p_d001` through `p_d005` | Array of date attribute values to be updated. |

Example

```
DECLARE
    l_seq   apex_application_global.vc_arr2;
    l_carr  apex_application_global.vc_arr2;
    l_narr  apex_application_global.n_arr;
    l_darr  apex_application_global.d_arr;
BEGIN
    l_seq(1)  := 10;
    l_seq(2)  := 15;
    l_carr(1) := 'Apples';
    l_carr(2) := 'Grapes';
    l_narr(1) := 100;
    l_narr(2) := 150;
    l_darr(1) := sysdate;
    l_darr(2) := sysdate;

    APEX_COLLECTION.UPDATE_MEMBERS (
        p_collection_name => 'Groceries',
        p_seq  => l_seq,
        p_c001 => l_carr,
        p_n001 => l_narr,
        p_d001 => l_darr);
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.32 UPDATE_MEMBER_ATTRIBUTE Procedure Signature 1

Updates the specified member attribute in the given named collection.

If a collection does not exist with the specified name for the current user in the same session for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the attribute number specified is invalid or outside the range 1-50, an error occurs.

Any attribute value exceeding 4,000 bytes are truncated to 4,000 bytes.

Syntax

```
APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER,
    p_attr_number       IN NUMBER,
    p_attr_value        IN VARCHAR2 )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. Collection names are case-insensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member to be updated. |
| `p_attr_number` | Attribute number of the member attribute to be updated. Valid values are 1 through 50. Any number outside of this range is ignored. |
| `p_attr_value` | Attribute value of the member attribute to be updated. |

Example

This example updates the second member of the collection `Departments`, updating the first member attribute to `Engineering`.

```
BEGIN
    APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
        p_collection_name => 'Departments',
                    p_seq => 2,
            p_attr_number => 1,
             p_attr_value => 'Engineering');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.33 UPDATE_MEMBER_ATTRIBUTE Procedure Signature 2

Updates the specified CLOB member attribute in the given named collection.

If a collection does not exist with the specified name for the current user in the same session for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the attribute number specified is invalid or outside the valid range (currently only 1 for CLOB), an error occurs.

Syntax

```
APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER,
    p_clob_number       IN NUMBER,
    p_clob_value        IN CLOB )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length can be 255 bytes. Collection names are case-insensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member to be updated. |
| `p_clob_number` | Attribute number of the CLOB member attribute to be updated. Valid value is 1. Any number outside of this range is ignored. |
| `p_clob_value` | Attribute value of the CLOB member attribute to be updated. |

Example

The following example sets the first and only CLOB attribute of collection sequence number `2` in the collection named `Departments` to a value of `Engineering`.

```
BEGIN
    APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
        p_collection_name => 'Departments',
                    p_seq => 2,
            p_clob_number => 1,
             p_clob_value => 'Engineering');
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.34 UPDATE_MEMBER_ATTRIBUTE Procedure Signature 3

Updates the specified BLOB member attribute in the given named collection.

If a collection does not exist with the specified name for the current user in the same session for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the attribute number specified is invalid or outside the valid range (currently only 1 for BLOB), an error occurs.

Syntax

```
APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER,
    p_blob_number       IN NUMBER,
    p_blob_value        IN BLOB )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length is 255 bytes. Collection names are case-insensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member to be updated. |
| `p_blob_number` | Attribute number of the BLOB member attribute to be updated. Valid value is 1. Any number outside of this range is ignored. |
| `p_blob_value` | Attribute value of the BLOB member attribute to be updated. |

Example

The following example sets the first and only BLOB attribute of collection sequence number `2` in the collection `Departments` to a value of the BLOB variable `l_blob_content`.

```
BEGIN
    APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
        p_collection_name => 'Departments',
                    p_seq => 2,
            p_blob_number => 1,
             p_blob_value => l_blob_content);
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.35 UPDATE_MEMBER_ATTRIBUTE Procedure Signature 4

Updates the specified XMLTYPE member attribute in the given named collection.

If a collection does not exist with the specified name for the current user in the same session for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the attribute number specified is invalid or outside the valid range (currently only 1 for XMLTYPE), an error occurs.

Syntax

```
APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER,
    p_xmltype_number    IN NUMBER,
    p_xmltype_value     IN SYS.XMLTYPE )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length can be 255 bytes. Collection names are case-insensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member to be updated. |
| `p_xmltype_number` | Attribute number of the XMLTYPE member attribute to be updated. Valid value is 1. Any number outside of this range is ignored. |
| `p_xmltype_value` | Attribute value of the XMLTYPE member attribute to be updated. |

Example

The following example sets the first and only XML attribute of collection sequence number `2` in the collection named `Departments` to a value of the XMLType variable `l_xmltype_content`.

```
BEGIN
    APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
        p_collection_name => 'Departments',
                    p_seq => 2,
         p_xmltype_number => 1,
          p_xmltype_value => l_xmltype_content);
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.36 UPDATE_MEMBER_ATTRIBUTE Procedure Signature 5

Updates the specified `NUMBER` member attribute in the given named collection.

If a collection does not exist with the specified name for the current user in the same session for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the attribute number specified is invalid or outside the valid range (currently only 1 through 5 for `NUMBER`), an error occurs.

Syntax

```
APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
    p_collection_name IN VARCHAR2,
    p_seq             IN NUMBER,
    p_attr_number     IN NUMBER,
    p_number_value    IN NUMBER )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. The number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length can be 255 bytes. Collection names are case-insensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member to be updated. |
| `p_attr_number` | Attribute number of the `NUMBER` member attribute to be updated. Valid value is 1 through 5. Any number outside of this range is ignored. |
| `p_number_value` | Attribute value of the NUMBER member attribute to be updated. |

Example

The following example sets the first numeric attribute of collection sequence number `2` in the collection named `Departments` to a value of `3000`.

```
BEGIN
    APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
        p_collection_name => 'Departments',
                    p_seq => 2,
            p_attr_number => 1,
           p_number_value => 3000);
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)

------------------------------------------------------------------------

## 15.37 UPDATE_MEMBER_ATTRIBUTE Procedure Signature 6

Updates the specified `DATE` member attribute in the given named collection.

If a collection does not exist with the specified name for the current user in the same session for the current application ID, an application error occurs.

If the member specified by sequence ID `p_seq` does not exist, an application error occurs.

If the attribute number specified is invalid or outside the valid range (currently only 1 through 5 for `DATE`), an error occurs.

Syntax

```
APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
    p_collection_name   IN VARCHAR2,
    p_seq               IN NUMBER,
    p_attr_number       IN NUMBER,
    p_date_value        IN DATE )
```

Parameters

Note:

Any character attribute exceeding 4,000 characters is truncated to 4,000 characters. Also, the number of members added is based on the number of elements in the first array.

| Parameter | Description |
|:---|:---|
| `p_collection_name` | The name of the collection. Maximum length can be 255 bytes. Collection names are case-insensitive and are converted to upper case. An error is returned if this collection does not exist with the specified name of the current user and in the same session. |
| `p_seq` | Sequence ID of the collection member to be updated. |
| `p_attr_number` | Attribute number of the `DATE` member attribute to be updated. Valid value is 1 through 5. Any number outside of this range is ignored. |
| `p_date_value` | Attribute value of the `DATE` member attribute to be updated. |

Example

This example updates the first date attribute of the second collection member in collection named `Departments` and sets it to the value of `sysdate`.

```
BEGIN
    APEX_COLLECTION.UPDATE_MEMBER_ATTRIBUTE (
        p_collection_name => 'Departments',
                    p_seq => 2,
            p_attr_number => 1,
             p_date_value => sysdate );
END;
```

**Parent topic:** [APEX_COLLECTION](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_COLLECTION.html#GUID-859B488C-2628-44D7-969F-50872C685B76)
