<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/index.html -->
<!-- Oracle APEX 24.2 API Reference -->

## Oracle® APEX

API Reference

Release 24.2

G12909-04

August 2025

------------------------------------------------------------------------

<a href="#copyright-information" id="copyright-information-btn" class="collapsed" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="copyright-information">Title and Copyright Information</a>

Oracle APEX API Reference, Release 24.2

G12909-04

<a href="/pls/topic/lookup?ctx=en/legal&amp;id=cpyr" target="_blank">Copyright ©</a>2003,2025,

Oracle and/or its affiliates.

Primary Author: John Godfrey

Contributors: Terri Jennings, Christina Cho, Hilary Farrell, Sharon Kennedy, Christian Neumueller, Anthony Rayner, Marc Sewtz, John Snyders, Jason Straub, Vladislav Uvarov, Patrick Wolf, Stefan Dobre, Ottmar Gobrecht, Ananya Chatterjee

------------------------------------------------------------------------

## Preface

Oracle APEX API Reference describes the available Application Programming Interfaces (APIs) when programming in the Oracle APEX environment. To utilize these APIs, such as APEX_JSON, when not developing with APEX, you must install APEX into the database.

- [Audience](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/preface.html#GUID-4F93A71D-1156-425F-9E64-CFB97348F06B)
- [Related Documents](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/preface.html#GUID-BC05F12E-8127-4167-BEC8-3F6A12E73CC2)
- [Conventions](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/preface.html#GUID-F439E81C-2724-4FB9-A6FB-2EAC730A13D2)

### Audience

Oracle APEX API Reference is intended for application developers who are building database-centric web applications using Oracle APEX. The guide describes the APIs available when programming in the APEX environment.

To use this guide, you need to have a general understanding of relational database concepts and an understanding of the operating system environment under which you are running APEX.

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=HTMDB-GUID-3D645140-7A61-4853-B975-218F3B99F687" target="_blank">Oracle APEX App Builder User’s Guide</a>

**Parent topic:** [Preface](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/preface.html#GUID-5AE2CC45-D209-4292-AED5-3B7D86D35634)

### Related Documents

For more information, see these Oracle resources:

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=HTMRN-GUID-540B73CB-08A7-4422-B6BF-CC785EC47694" target="_blank">Oracle APEX Release Notes</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=HTMIG-GUID-DB8E4B2B-1AEB-4B76-BBA3-31C5876C3F14" target="_blank">Oracle APEX Installation Guide</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=HTMDB-GUID-3D645140-7A61-4853-B975-218F3B99F687" target="_blank">Oracle APEX App Builder User’s Guide</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEADM-GUID-853F40E1-F360-4CE9-8DC1-FC111A825D14" target="_blank">Oracle APEX Administration Guide</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEUTL-GUID-75135310-3884-4F6F-A434-B02DDDA09B70" target="_blank">Oracle APEX SQL Workshop Guide</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=AEEUG-GUID-E4980DC3-71B4-4627-A7D5-F2F6F5341091" target="_blank">Oracle APEX End User’s Guide</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=CNCPT-GUID-A42A6EF0-20F8-4F4B-AFF7-09C100AE581E" target="_blank">Oracle Database Concepts</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=ADMIN-GUID-1DF51F9B-86E9-4E40-A30E-00714E7C0003" target="_blank">Oracle Database Administrator’s Guide</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=SQLRF-GUID-049B7AE8-11E1-4110-B3E4-D117907D77AC" target="_blank">Oracle Database SQL Language Reference</a>
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=LNPLS-GUID-2FBCFBBE-6B42-4DB8-83F3-55B63B75B1EB" target="_blank">Oracle Database PL/SQL Language Reference</a>

**Parent topic:** [Preface](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/preface.html#GUID-5AE2CC45-D209-4292-AED5-3B7D86D35634)

### Conventions

For a description of PL/SQL subprogram conventions, refer to the <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/24.2/aeapi&amp;id=LNPLS-GUID-2FBCFBBE-6B42-4DB8-83F3-55B63B75B1EB" target="_blank">Oracle Database PL/SQL Language Reference</a>. This document contains the following information:

- Specifying subprogram parameter modes
- Specifying default values for subprogram parameters
- Overloading PL/SQL subprogram Names

The following text conventions are used in this document:

| Convention | Meaning |
|:---|:---|
| boldface | Boldface type indicates graphical user interface elements associated with an action, or terms defined in text or the glossary. |
| italic | Italic type indicates book titles, emphasis, or placeholder variables for which you supply particular values. |
| `monospace` | Monospace type indicates commands within a paragraph, URLs, code in examples, text that appears on the screen, or text that you enter. |

**Parent topic:** [Preface](https://docs.oracle.com/en/database/oracle/apex/24.2/aeapi/preface.html#GUID-5AE2CC45-D209-4292-AED5-3B7D86D35634)
