<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/index.html -->
<!-- Oracle APEX 26.1 API Reference -->

## Oracle® APEX

API Reference

Release 26.1

G26651-01

May 2026

------------------------------------------------------------------------

<a href="#copyright-information" id="copyright-information-btn" class="collapsed" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="copyright-information">Title and Copyright Information</a>

Oracle APEX API Reference, Release 26.1

G26651-01

<a href="/pls/topic/lookup?ctx=en/legal&amp;id=cpyr" target="_blank">Copyright ©</a>2003,2026,

Oracle and/or its affiliates.

Primary Author: CM Dietrich

Contributors: John Godfrey, Terri Jennings, Christina Cho, Hilary Farrell, Sharon Kennedy, Christian Neumueller, Anthony Rayner, Marc Sewtz, John Snyders, Jason Straub, Vladislav Uvarov, Patrick Wolf, Stefan Dobre, Ottmar Gobrecht, Ananya Chatterjee

------------------------------------------------------------------------

## Preface

Oracle APEX API Reference describes the available Application Programming Interfaces (APIs) when programming in the Oracle APEX environment. To utilize these APIs, such as APEX_JSON, when not developing with APEX, you must install APEX into the database.

- [Audience](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/preface.html#GUID-4F93A71D-1156-425F-9E64-CFB97348F06B)
- [Related Documents](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/preface.html#GUID-BC05F12E-8127-4167-BEC8-3F6A12E73CC2)
- [Conventions](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/preface.html#GUID-F439E81C-2724-4FB9-A6FB-2EAC730A13D2)

### Audience

Oracle APEX API Reference is intended for application developers who are building database-centric web applications using Oracle APEX. The guide describes the APIs available when programming in the APEX environment.

To use this guide, you need to have a general understanding of relational database concepts and an understanding of the operating system environment under which you are running APEX.

See Also:

<a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-3D645140-7A61-4853-B975-218F3B99F687" target="_blank">Oracle APEX App Builder User’s Guide</a>

**Parent topic:** [Preface](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/preface.html#GUID-5AE2CC45-D209-4292-AED5-3B7D86D35634)

### Related Documents

For more information, see these Oracle resources:

- <a href="https://docs.oracle.com/en/database/oracle/apex/26.1/books.html" target="_blank">Oracle APEX Documentation Library</a>

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=CNCPT-GUID-A42A6EF0-20F8-4F4B-AFF7-09C100AE581E" target="_blank">Oracle AI Database Concepts</a>

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=SQCUG-GUID-1343FA2B-BDB4-4645-B4D4-CD7C3E200AC9" target="_blank">Working with SQLcl</a> in Oracle SQLcl User’s Guide

**Parent topic:** [Preface](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/preface.html#GUID-5AE2CC45-D209-4292-AED5-3B7D86D35634)

### Conventions

For a description of PL/SQL subprogram conventions, refer to the <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=LNPLS-GUID-2FBCFBBE-6B42-4DB8-83F3-55B63B75B1EB" target="_blank">Oracle AI Database PL/SQL Language Reference</a>. This document contains the following information:

- Specifying subprogram parameter modes
- Specifying default values for subprogram parameters
- Overloading PL/SQL subprogram Names

The following text conventions are used in this document:

| Convention | Meaning |
|:---|:---|
| boldface | Boldface type indicates graphical user interface elements associated with an action, or terms defined in text or the glossary. |
| italic | Italic type indicates book titles, emphasis, or placeholder variables for which you supply particular values. |
| `monospace` | Monospace type indicates commands within a paragraph, URLs, code in examples, text that appears on the screen, or text that you enter. |

**Parent topic:** [Preface](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/preface.html#GUID-5AE2CC45-D209-4292-AED5-3B7D86D35634)
