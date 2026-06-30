<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 43  APEX_MAIL

You can use the `APEX_MAIL` package to send an email from an Oracle APEX application. This package is built on top of the Oracle-supplied `UTL_SMTP` package. Because of this dependence, the `UTL_SMTP` package must be installed and functioning to use `APEX_MAIL`.

`APEX_MAIL` contains three notable procedures:

- Use `APEX_MAIL.SEND` to send an outbound email message from your application.
- Use `APEX_MAIL.PUSH_QUEUE` to deliver mail messages stored in `APEX_MAIL_QUEUE`.
- Use `APEX_MAIL.ADD_ATTACHMENT` to send an outbound email message from your application as an attachment.

APEX installs the database job `ORACLE_APEX_MAIL_QUEUE`, which periodically sends all mail messages stored in the active mail queue.

Note:

The `APEX_MAIL` package may be used from outside the context of an APEX application (such as from SQLcl or from a Database Scheduler job) as long as the database user making the call is mapped to an APEX workspace. If the database user is mapped to multiple workspaces, you must first call `APEX_UTIL.SET_WORKSPACE` or `APEX_UTIL.SET_SECURITY_GROUP_ID` as in the following examples. The `APEX_MAIL` package cannot be used by database users that are not mapped to any workspace unless they have been granted the role `APEX_ADMINISTRATOR_ROLE`.

```
-- Example 1
apex_util.set_workspace(p_workspace => 'MY_WORKSPACE');

-- Example 2
FOR c1 in (
   select workspace_id
     from apex_applications
    where application_id = 100 )
LOOP
   apex_util.set_security_group_id(p_security_group_id => c1.workspace_id);
END LOOP;
```

- [Configuring Oracle APEX to Send Email](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/Configuring-Oracle-Application-Express-to-Send-Email.html#GUID-596E11FE-9289-4238-A3CA-D33F508E40F7)
- [ADD_ATTACHMENT Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTACHMENT-Procedure-Signature-1.html#GUID-5B514926-2C0A-40E3-82BB-7E357CB0C927)
- [ADD_ATTACHMENT Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_ATTACHMENT-Procedure-Signature-2.html#GUID-0C43024A-D0B5-4358-A43E-8BF8FAD30E08)
- [GET_IMAGES_URL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_IMAGES_URL-Function.html#GUID-5FBF4725-3B92-4B4F-8FF6-E135838FD687)
- [GET_INSTANCE_URL Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/GET_INSTANCE_URL-Function.html#GUID-6CB52F5D-4FE8-4ECD-855E-306CAA160CEF)
- [PREPARE_TEMPLATE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PREPARE_TEMPLATE_Procedure.html#GUID-639A0777-5A94-461A-8DD7-F71C950E7B69)
- [PUSH_QUEUE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PUSH_QUEUE-Procedure.html#GUID-A17CEA4E-B667-4657-AC0E-F2C0833010EC)
- [SEND Function Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Function-Signature-1.html#GUID-760A11B9-3CB9-435C-9289-C2F2791BB80C)
- [SEND Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Function-Signature-2.html#GUID-9E630ED9-C896-4163-BEA1-9F52A110986B)
- [SEND Procedure Signature 1](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Procedure-Signature-1.html#GUID-B1CD726B-EABE-4A9D-A7A4-3A973E84262D)
- [SEND Procedure Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/SEND-Procedure-Signature-2.html#GUID-579D3770-3164-42C9-8EDD-69A61CB3207C)

See Also:

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-5579DEA8-699C-41F0-B08F-9AB565F76D77" target="_blank">Sending Email from an Application</a> in Oracle APEX App Builder User’s Guide
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=ARPLS-GUID-F0065C52-D618-4F8A-A361-7B742D44C520" target="_blank">Oracle AI Database PL/SQL Packages and Types Reference</a> for more information about the UTL_SMTP package

------------------------------------------------------------------------

## 43.1 Configuring Oracle APEX to Send Email

Before you can send email from an App Builder application, you must:

1.  Log in to APEX Administration Services and configure the email settings on the Instance Settings page. See <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=AEADM-GUID-FEC98D5E-3C89-423E-9603-4CD2E553BA34" target="_blank">Configuring Email</a> in Oracle APEX Administration Guide.
2.  Enable network services that are disabled by default in Oracle Database 11g release 2 (11.2) and newer. See Enabling Network Service in Oracle Database 11g in <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-8D125731-989A-4A51-AFFE-00181729F87F" target="_blank">Enabling Network Services in Oracle Database 11g or Later</a> in Oracle APEX App Builder User’s Guide.

    Tip:

    You can configure APEX to automatically email users their login credentials when a new workspace request has been approved. To learn more, see <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=AEADM-GUID-529BB1CB-E6A6-46B2-BCCB-E28062DE1039" target="_blank">Selecting a Provisioning Mode</a> in Oracle APEX Administration Guide.

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.2 ADD_ATTACHMENT Procedure Signature 1

This procedure adds an attachment of type BLOB to an outbound email message. To add multiple attachments to a single email, `APEX_MAIL.ADD_ATTACHMENT` can be called repeatedly for a single email message.

Syntax

```
APEX_MAIL.ADD_ATTACHMENT (
    p_mail_id           IN NUMBER,
    p_attachment        IN BLOB,
    p_filename          IN VARCHAR2,
    p_mime_type         IN VARCHAR2
    p_content_id        IN VARCHAR2    DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="ParameterS for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d219206e88" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d219206e90" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d219206e94" style="text-align: left;" data-valign="top" width="42%" headers="d219206e88 "><code class="codeph">p_mail_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d219206e94 d219206e90 ">The numeric ID associated with the email. This is the numeric identifier returned from the call to <code class="codeph">APEX_MAIL.SEND</code> to compose the email body.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d219206e103" style="text-align: left;" data-valign="top" width="42%" headers="d219206e88 "><code class="codeph">p_attachment</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d219206e103 d219206e90 ">A <code class="codeph">BLOB</code> variable containing the binary content to be attached to the email message.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d219206e112" style="text-align: left;" data-valign="top" width="42%" headers="d219206e88 "><code class="codeph">p_filename</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d219206e112 d219206e90 ">The filename associated with the email attachment.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d219206e118" style="text-align: left;" data-valign="top" width="42%" headers="d219206e88 "><code class="codeph">p_mime_type</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d219206e118 d219206e90 ">A valid MIME type (or Internet media type) to associate with the email attachment.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d219206e124" style="text-align: left;" data-valign="top" width="42%" headers="d219206e88 "><code class="codeph">p_content_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d219206e124 d219206e90 "><p>An optional identifier for the attachment. If non-null, then the file attaches inline. That attachment may then be referenced in the HTML of the email body by using the <code class="codeph">cid</code>.</p>
<p>Note: Be aware that automatic displaying of inlined images may not be supported by all e-mail clients.</p></td>
</tr>
</tbody>
</table>

Example 1

The following example demonstrates how to access files stored in `APEX_APPLICATION_FILES` and add them to an outbound email message.

```
DECLARE
    l_id NUMBER;
BEGIN
    l_id := APEX_MAIL.SEND(
        p_to        => 'fred@flintstone.com',
        p_from      => 'barney@rubble.com',
        p_subj      => 'APEX_MAIL with attachment',
        p_body      => 'Please review the attachment.',
        p_body_html => '<b>Please</b> review the attachment');
    FOR c1 IN (SELECT filename, blob_content, mime_type
        FROM APEX_APPLICATION_FILES
        WHERE ID IN (123,456)) LOOP

        APEX_MAIL.ADD_ATTACHMENT(
            p_mail_id    => l_id,
            p_attachment => c1.blob_content,
            p_filename   => c1.filename,
            p_mime_type  => c1.mime_type);
        END LOOP;
    COMMIT;
END;
/
```

Example 2

This example shows how to attach a file inline, by using a content identifier, and how to refer to that attachment in the HTML of the email.

```
DECLARE
  l_id number;
  l_body clob;
  l_body_html clob;
  l_content_id varchar2(100) := 'my-inline-image';
  l_filename varchar2(100);
  l_mime_type varchar2(100);
  l_image blob;
BEGIN
  l_body := 'To view the content of this message, please use an HTML enabled mail client.' || utl_tcp.crlf;

  l_body_html := '<html><body>' || utl_tcp.crlf ||
                 '<p>Here is the image you requested.</p>' || utl_tcp.crlf ||
                 '<p><img src="cid:' || l_content_id || '" alt="Requested Image"></p>' || utl_tcp.crlf ||
                 '<p>Thanks,<br />' || utl_tcp.crlf ||
                 'The EveryCorp Dev Team<br />' || utl_tcp.crlf ||
                 '</body></html>';
  l_id := apex_mail.send (
    p_to => 'some_user@example.com', -- change to your email address
    p_from => 'some_sender@example.com', -- change to a real senders email address
    p_body => l_body,
    p_body_html => l_body_html,
    p_subj => 'Requested Image' );

  select filename, mime_type, blob_content
    into l_filename, l_mime_type, l_image
    from apex_application_files
   where id = 123;

  apex_mail.add_attachment(
    p_mail_id => l_id,
    p_attachment => l_image,
    p_filename => l_filename,
    p_mime_type => l_mime_type,
    p_content_id => l_content_id );

  COMMIT;
END;
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.3 ADD_ATTACHMENT Procedure Signature 2

This procedure adds an attachment of type CLOB to an outbound email message. To add multiple attachments to a single email, `APEX_MAIL.ADD_ATTACHMENT` can be called repeatedly for a single email message.

Syntax

```
APEX_MAIL.ADD_ATTACHMENT (
    p_mail_id                   IN    NUMBER,
    p_attachment                IN    CLOB,
    p_filename                  IN    VARCHAR2,
    p_mime_type                 IN    VARCHAR2 );
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_mail_id` | The numeric ID associated with the email. This is the numeric identifier returned from the call to `APEX_MAIL.SEND` to compose the email body. |
| `p_attachment` | A `CLOB` variable containing the text content to be attached to the email message. |
| `p_filename` | The filename associated with the email attachment. |
| `p_mime_type` | A valid MIME type (or Internet media type) to associate with the email attachment. |

Examples

The following example demonstrates how to attached a CLOB-based attachment to an outbound email message.

```
DECLARE
    l_id NUMBER;
    l_clob CLOB := 'Value1,Value2,Value3,42';
BEGIN
    l_id := APEX_MAIL.SEND(
        p_to => 'fred@flintstone.com',
        p_from => 'barney@rubble.com',
        p_subj => 'APEX_MAIL with a text attachment',
        p_body => 'Please review the attachment.',
        p_body_html => '<b>Please</b> review the attachment');

    APEX_MAIL.ADD_ATTACHMENT(
        p_mail_id => l_id,
        p_attachment => l_clob,
        p_filename => 'data.csv',
        p_mime_type => 'text/csv');

    COMMIT;
END;
/
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.4 GET_IMAGES_URL Function

This function gets the image prefixed URL if the email includes Oracle APEX instance images.

Syntax

```
APEX_MAIL.GET_IMAGES_URL return VARCHAR2;
```

Parameters

None.

Example

The following example sends an Order Confirmation email which includes the Oracle Logo image.

```
DECLARE
    l_body      clob;
    l_body_html clob;
BEGIN
    l_body := 'To view the content of this message, please use an HTML enabled mail client.' || utl_tcp.crlf;

    l_body_html := '<html><body>' || utl_tcp.crlf ||
                   '<p>Please confirm your order on the <a href="' ||
                   apex_mail.get_instance_url || 'f?p=100:10">Order Confirmation</a> page.</p>' || utl_tcp.crlf ||
                   '<p>Sincerely,<br />' || utl_tcp.crlf ||
                   'The EveryCorp Dev Team<br />' || utl_tcp.crlf ||
                   '<img src="' || apex_mail.get_images_url || 'oracle.gif" alt="Oracle Logo"></p>' || utl_tcp.crlf ||
                   '</body></html>';
    apex_mail.send (
        p_to        => 'some_user@example.com',   -- change to your email address
        p_from      => 'some_sender@example.com', -- change to a real senders email address
        p_body      => l_body,
        p_body_html => l_body_html,
        p_subj      => 'Order Confirmation' );
END;
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.5 GET_INSTANCE_URL Function

This function gets the instance URL if an email includes a link to an Oracle APEX instance.

Note:

This function requires that the APEX Instance URL parameter is set on the Manage Instance, Instance Settings page in the Email section in Administration Services.

Syntax

```
APEX_MAIL.GET_INSTANCE_URL return VARCHAR2;
```

Parameters

None.

Example

The following example sends an Order Confirmation email which includes an absolute URL to page 10 of application 100.

```
DECLARE
    l_body      clob;
    l_body_html clob;
BEGIN
    l_body := 'To view the content of this message, please use an HTML enabled mail client.' || utl_tcp.crlf;

    l_body_html := '<html><body>' || utl_tcp.crlf ||
                   '<p>Please confirm your order on the <a href="' ||
                   apex_mail.get_instance_url || 'f?p=100:10">Order Confirmation</a> page.</p>' || utl_tcp.crlf ||
                   '</body></html>';
    apex_mail.send (
        p_to        => 'some_user@example.com',   -- change to your email address
        p_from      => 'some_sender@example.com', -- change to a real senders email address
        p_body      => l_body,
        p_body_html => l_body_html,
        p_subj      => 'Order Confirmation' );
END;
```

See Also:

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=AEADM-GUID-FEC98D5E-3C89-423E-9603-4CD2E553BA34" target="_blank">Configuring Email</a> in Oracle APEX Administration Guide

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.6 PREPARE_TEMPLATE Procedure

Procedure to return a formatted mail based on an e-mail template where the placeholders specified as JSON string are substituted.

Syntax

```
APEX_MAIL.PREPARE_TEMPLATE (
    p_static_id         IN  VARCHAR2,
    p_placeholders      IN  CLOB,
    p_application_id    IN  NUMBER   DEFAULT apex_application.g_flow_id,
    p_subject           OUT VARCHAR2,
    p_html              OUT CLOB,
    p_text              OUT CLOB,
    p_language_override IN  VARCHAR2 DEFAULT NULL );
```

Parameters

| Parameters | Description |
|:---|:---|
| `p_static_id` | The identifier which was specified when the template was created in the Oracle APEX Builder. |
| `p_placeholders` | A JSON formatted string containing name/value pairs specifying values for the placeholders to be replaced in the email template. |
| `p_application_id` | Application ID where the email template is defined. Defaults to the current application (if called from within an application). |
| `p_subject` | The subject line generated from the template, after any placeholders and substitutions have been made. |
| `p_html` | The HTML code for the email, after placeholders have been replaced. |
| `p_text` | The plain text of the email, with substitutions made. |
| `p_language_override` | Language of a translated template to use. Use a language code like "en", "fr" or "de-at" here. An application translation for this language must exist, otherwise the argument is ignored. |

Example

```
declare
  l_subject varchar2( 4000 );
  l_html    clob;
  l_text    clob;
begin
  apex_mail.prepare_template (
  p_static_id    => 'ORDER',
  p_placeholders => '{ "ORDER_NUMBER": 5321, "ORDER_DATE": "01-Feb-2018", "ORDER_TOTAL": "$12,000" }',
  p_subject      => l_subject,
  p_html         => l_html,
  p_text         => l_text );
end;
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.7 PUSH_QUEUE Procedure

This procedure manually delivers queued mail messages stored in the `APEX_MAIL_QUEUE` dictionary view to the SMTP gateway.

Oracle APEX logs successfully submitted messages in the `APEX_MAIL_LOG` dictionary view with the timestamp reflecting your server's local time.

Syntax

```
APEX_MAIL.PUSH_QUEUE (
    p_smtp_hostname     IN VARCHAR2 DEFAULT NULL,
    p_smtp_portno       IN NUMBER   DEFAULT NULL );
```

Parameters

| Parameters        | Description              |
|:------------------|:-------------------------|
| `p_smtp_hostname` | SMTP gateway host name   |
| `p_smtp_portno`   | SMTP gateway port number |

Note:

Note These parameter values are provided for backward compatibility, but their respective values are ignored. The SMTP gateway hostname and SMTP gateway port number are exclusively derived from values entered on the Instance Settings page in Administration Services or set using `APEX_INSTANCE_ADMIN` API.

Example

The following example demonstrates the use of the `APEX_MAIL.PUSH_QUEUE` procedure using a shell script. This example only applies to UNIX/LINUX installations.

```
sql / <<EOF
APEX_MAIL.PUSH_QUEUE;
DISCONNECT
EXIT
EOF
```

See Also:

- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=AEADM-GUID-FEC98D5E-3C89-423E-9603-4CD2E553BA34" target="_blank">Configuring Email</a> in Oracle APEX Administration Guide
- <a href="/pls/topic/lookup?ctx=en/database/oracle/apex/26.1/aeapi&amp;id=HTMDB-GUID-5579DEA8-699C-41F0-B08F-9AB565F76D77" target="_blank">Sending an Email from an Application</a> in Oracle APEX App Builder User’s Guide

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.8 SEND Function Signature 1

This function sends an outbound email message from an application. Although you can use this function to pass in either a `VARCHAR2` or a `CLOB` to `p_body` and `p_body_html`, the data types must be the same. In other words, you cannot pass a `CLOB` to `P_BODY` and a `VARCHAR2` to `p_body_html`.

This function returns a `NUMBER`. The `NUMBER` returned is the unique numeric identifier associated with the mail message.

Usage Notes

When using `APEX_MAIL.SEND`, remember the following:

- No single line may exceed 1000 characters. The SMTP/MIME specification dictates that no single line shall exceed 1000 characters. To comply with this restriction, you must add a carriage return or line feed characters to break up your `p_body` or `p_body_html` parameters into chunks of 1000 characters or less. Failing to do so results in erroneous email messages, including partial messages or messages with extraneous exclamation points.

- Plain text and HTML email content. Passing a value to `p_body,` but not `p_body_html` results in a plain text message. Passing a value to `p_body` and `p_body_html` yields a multi-part message that includes both plain text and HTML content. The settings and capabilities of the recipient's email client determine what displays. Although most modern email clients can read an HTML formatted email, remember that some users disable this functionality to address security issues.

- Avoid images. When referencing images in `p_body_html` using the `<img />` tag, remember that the images must be accessible to the recipient's email client in order for them to see the image.

  For example, suppose you reference an image on your network called `hello.gif` as follows:

  ``` pre
  <img src="http://example.com/hello.gif" alt="Hello" />
  ```

  In this example, the image is not attached to the email, but is referenced by the email. For the recipient to see it, they must be able to access the image using a web browser. If the image is inside a firewall and the recipient is outside of the firewall, the image is not displayed.

  Alternatively, you may specify the `p_content_id` parameter when calling `APEX_MAIL.ADD_ATTACHMENT` which creates an inline attachment that can be referenced as follows:

  ``` pre
  <img src="cid:hello_content_id" alt="Hello" />
  ```

  Note that this may greatly increase the size of the resultant emails and that clients may not always automatically display inline images.

  For these reasons, avoid using images. If you must include images, be sure to include the `ALT` attribute to provide a textual description in the event the image is not accessible nor displayed.

Syntax

```
APEX_MAIL.SEND (
    p_to                IN    VARCHAR2,
    p_from              IN    VARCHAR2,
    p_body              IN  [ VARCHAR2 | CLOB ],
    p_body_html         IN  [ VARCHAR2 | CLOB ] DEFAULT NULL,
    p_subj              IN    VARCHAR2 DEFAULT NULL,
    p_cc                IN    VARCHAR2 DEFAULT NULL,
    p_bcc               IN    VARCHAR2 DEFAULT NULL,
    p_replyto           IN    VARCHAR2 DEFAULT NULL )
RETURN NUMBER;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d220567e180" style="text-align: left;" data-valign="bottom" width="43%">Parameter</th>
<th id="d220567e182" style="text-align: left;" data-valign="bottom" width="57%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d220567e186" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_to</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e186 d220567e182 ">Valid email address to which the email is sent (required). For multiple email addresses, use a comma-separated list</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d220567e192" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_from</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e192 d220567e182 "><p>Email address from which the email is sent (required). This email address must be a valid address. Otherwise, the message is not sent.</p>
<p>If an instance administrator has already defined a "Default Email From Address" on the instance level, this address is always used as the "from" address.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d220567e210" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_body</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e210 d220567e182 ">Body of the email in plain text, not HTML (required). If a value is passed to <code class="codeph">p_body_html</code>, then this is the only text the recipient sees. If a value is not passed to <code class="codeph">p_body_html</code>, then this text only displays for email clients that do not support HTML or have HTML disabled. A carriage return or line feed (CRLF) must be included every 1000 characters.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d220567e222" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_body_html</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e222 d220567e182 ">Body of the email in HTML format. This must be a full HTML document including the <code class="codeph">&lt;html&gt;</code> and <code class="codeph">&lt;body&gt;</code> tags. A single line cannot exceed 1000 characters without a carriage return or line feed (CRLF)</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d220567e234" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_subj</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e234 d220567e182 ">Subject of the email</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d220567e240" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_cc</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e240 d220567e182 ">Valid email addresses to which the email is copied. For multiple email addresses, use a comma-separated list</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d220567e246" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_bcc</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e246 d220567e182 ">Valid email addresses to which the email is blind copied. For multiple email addresses, use a comma-separated list</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d220567e252" style="text-align: left;" data-valign="top" width="43%" headers="d220567e180 "><code class="codeph">p_replyto</code></td>
<td style="text-align: left;" data-valign="top" width="57%" headers="d220567e252 d220567e182 ">Specify a valid email address to instruct recipient's email client to send human-generated replies to this address rather than the address specified in <code class="codeph">p_from</code>.</td>
</tr>
</tbody>
</table>

Examples

The following example demonstrates how to use `APEX_MAIL.SEND` to send a plain text email message from an application and return the unique message ID.

```
-- Example One: Plain Text only message
DECLARE
    l_body      CLOB;
    l_id NUMBER;
BEGIN
    l_body := 'Thank you for your interest in the APEX_MAIL
package.'||utl_tcp.crlf||utl_tcp.crlf;
    l_body := l_body ||'  Sincerely,'||utl_tcp.crlf;
    l_body := l_body ||'  The EveryCorp Dev Team'||utl_tcp.crlf;
    l_id   := apex_mail.send(
        p_to       => 'some_user@example.com',   -- change to your email address
        p_from     => 'some_sender@example.com', -- change to a real senders email address
        p_body     => l_body,
        p_subj     => 'APEX_MAIL Package - Plain Text message');
END;
/
```

The following example demonstrates how to use `APEX_MAIL.SEND` to send an HTML email message from an application. Remember, you must include a carriage return or line feed (CRLF) every 1000 characters. The example that follows uses `utl_tcp.crlf`.

```
-- Example Two: Plain Text / HTML message
DECLARE
    l_body      CLOB;
    l_body_html CLOB;
    l_id NUMBER;
BEGIN
    l_body := 'To view the content of this message, please use an HTML enabled mail client.'||utl_tcp.crlf;

    l_body_html := '<html>
        <head>
            <style type="text/css">
                body{font-family: Arial, Helvetica, sans-serif;
                    font-size:10pt;
                    margin:30px;
                    background-color:#ffffff;}

                span.sig{font-style:italic;
                    font-weight:bold;
                    color:#811919;}
             </style>
         </head>
         <body>'||utl_tcp.crlf;
    l_body_html := l_body_html ||'<p>Thank you for your interest in the <strong>APEX_MAIL</strong> package.</p>'||utl_tcp.crlf;
    l_body_html := l_body_html ||'  Sincerely,<br />'||utl_tcp.crlf;
    l_body_html := l_body_html ||'  The EveryCorp Dev Team<br />'||utl_tcp.crlf;
    l_body_html := l_body_html ||'</body></html>';
    l_id        := apex_mail.send(
        p_to        => 'some_user@example.com',   -- change to your email address
        p_from      => 'some_sender@example.com', -- change to a real senders email address
        p_body      => l_body,
        p_body_html => l_body_html,
        p_subj      => 'APEX_MAIL Package - HTML formatted message');
END;
/
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.9 SEND Function Signature 2

This function returns a mail ID after adding the mail to the mail queue of APEX. The mail ID can be used in a call to `add_attachment` to add attachments to an existing mail.

The mail is based on an email template where the placeholder values specified as JSON string are substituted.

Syntax

```
APEX_MAIL.SEND (
    p_template_static_id    IN VARCHAR2,
    p_placeholders          IN CLOB,
    p_to                    IN VARCHAR2,
    p_cc                    IN VARCHAR2 DEFAULT NULL,
    p_bcc                   IN VARCHAR2 DEFAULT NULL,
    p_from                  IN VARCHAR2 DEFAULT NULL,
    p_replyto               IN VARCHAR2 DEFAULT NULL,
    p_application_id        IN NUMBER   DEFAULT apex_application.g_flow_id,
    p_language_override     IN VARCHAR2 DEFAULT NULL );
    RETURN NUMBER;
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for function." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d221139e79" style="text-align: left;" data-valign="bottom" width="48%">Parameter</th>
<th id="d221139e81" style="text-align: left;" data-valign="bottom" width="52%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d221139e85" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_template_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e85 d221139e81 ">Static identifier string, used to identify the shared component email template.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e91" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_placeholders</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e91 d221139e81 ">JSON string representing the placeholder names along with the values, to be substituted.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e97" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_to</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e97 d221139e81 ">Valid email address to which the email is sent (required). For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e103" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_cc</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e103 d221139e81 ">Valid email addresses to which the email is copied. For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e109" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_bcc</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e109 d221139e81 ">Valid email addresses to which the email is blind copied. For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e115" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_from</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e115 d221139e81 "><p>This must be a valid email address from which the email is sent.</p>
<p>If <code class="codeph">p_from</code> is not provided:</p>
<ul>
<li>the "Application Email From Address" is used (if provided under Application Definition)</li>
<li>otherwise, <code class="codeph">p_replyto</code> is used (if provided)</li>
<li>else, <code class="codeph">p_to</code> is used</li>
</ul>
<p>If <code class="codeph">p_to</code> or <code class="codeph">p_replyto</code> contain multiple email addresses, <code class="codeph">p_from</code> is required.</p>
<p>If an instance administrator has already defined a "Default Email From Address" on the instance level, this address is always used as the "from" address, regardless of whether "p_from" is provided.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e171" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_replyto</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e171 d221139e81 "><p>Specify a valid email address to instruct recipient's email client to send human-generated replies to this address rather than the address specified in <code class="codeph">p_from</code>. You can use this parameter as follows:</p>
<ul>
<li>If you omit the <code class="codeph">p_replyto</code> parameter, the Reply-To mail header is set to the value specified in the <code class="codeph">p_from</code> parameter.</li>
<li>If you include the <code class="codeph">p_replyto</code> parameter, but provide a NULL value, the Reply-To mail header is set to NULL. This results in the suppression of automatic email replies.</li>
<li>If you include <code class="codeph">p_replyto</code> parameter, but provide a non-null value (for example, a valid email address), you send these messages, but the automatic replies go to the value specified (for example, the email address).</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e200" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e200 d221139e81 ">Application ID where the email template is defined. Defaults to the current application (if called from within an application).</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221139e206" style="text-align: left;" data-valign="top" width="48%" headers="d221139e79 "><code class="codeph">p_language_override</code></td>
<td style="text-align: left;" data-valign="top" width="52%" headers="d221139e206 d221139e81 ">Language of a translated template to use. Use a language code like "en", "fr" or "de-at" here. An application translation for this language must exist, otherwise the argument is ignored.</td>
</tr>
</tbody>
</table>

Note:

When calling the `SEND` function from outside the context of an APEX application (such as from a Database Scheduler job), you must specify the `p_application_id` parameter.

Examples

```
DECLARE
    l_mail_id number;
BEGIN
    l_mail_id := apex_mail.send (
        p_template_static_id => 'ORDER',
        p_placeholders       => '{ "ORDER_NUMBER": 5321, "ORDER_DATE": "01-Feb-2018", "ORDER_TOTAL": "$12,000" }',
        p_to                 => 'some_user@example.com' );

    apex_mail.add_attachment (
        p_mail_id    => l_mail_id,
        p_attachment => ... );
END;
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.10 SEND Procedure Signature 1

This procedure sends an outbound email message from an application. Although you can use this procedure to pass in either a `VARCHAR2` or a `CLOB` to `p_body` and `p_body_html`, the data types must be the same. In other words, you cannot pass a `CLOB` to `P_BODY` and a `VARCHAR2` to `p_body_html`.

Usage Notes

When using `APEX_MAIL.SEND`, remember the following:

- No single line may exceed 1000 characters. The SMTP/MIME specification dictates that no single line shall exceed 1000 characters. To comply with this restriction, you must add a carriage return or line feed characters to break up your `p_body` or `p_body_html` parameters into chunks of 1000 characters or less. Failing to do so results in erroneous email messages, including partial messages or messages with extraneous exclamation points.

- Plain text and HTML email content. Passing a value to `p_body,` but not `p_body_html` results in a plain text message. Passing a value to `p_body` and `p_body_html` yields a multi-part message that includes both plain text and HTML content. The settings and capabilities of the recipient's email client determine what displays. Although most modern email clients can read an HTML formatted email, remember that some users disable this functionality to address security issues.

- Avoid images. When referencing images in `p_body_html` using the `<img />` tag, remember that the images must be accessible to the recipient's email client in order for them to see the image.

  For example, suppose you reference an image on your network called `hello.gif` as follows:

  ``` pre
  <img src="http://example.com/hello.gif" alt="Hello" />
  ```

  In this example, the image is not attached to the email, but is referenced by the email. For the recipient to see it, they must be able to access the image using a web browser. If the image is inside a firewall and the recipient is outside of the firewall, the image is not displayed.

  Alternatively, you may specify the `p_content_id` parameter when calling `APEX_MAIL.ADD_ATTACHMENT` which creates an inline attachment that can be referenced as follows:

  ``` pre
  <img src="cid:hello_content_id" alt="Hello" />
  ```

  Note that this may greatly increase the size of the resultant emails and that clients may not always automatically display inline images.

  For these reasons, avoid using images. If you must include images, be sure to include the `ALT` attribute to provide a textual description in the event the image is not accessible nor displayed.

Syntax

```
APEX_MAIL.SEND (
    p_to                IN    VARCHAR2,
    p_from              IN    VARCHAR2,
    p_body              IN  [ VARCHAR2 | CLOB ],
    p_body_html         IN  [ VARCHAR2 | CLOB ] DEFAULT NULL,
    p_subj              IN    VARCHAR2 DEFAULT NULL,
    p_cc                IN    VARCHAR2 DEFAULT NULL,
    p_bcc               IN    VARCHAR2 DEFAULT NULL,
    p_replyto           IN    VARCHAR2 DEFAULT NULL );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d221714e184" style="text-align: left;" data-valign="bottom" width="41%">Parameter</th>
<th id="d221714e186" style="text-align: left;" data-valign="bottom" width="59%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d221714e190" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_to</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e190 d221714e186 ">Valid email address to which the email is sent (required). For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221714e196" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_from</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e196 d221714e186 "><p>Email address from which the email is sent (required). This email address must be a valid address. Otherwise, the message is not sent.</p>
<p>If an instance administrator has already defined a "Default Email From Address" on the instance level, this address is always used as the "from" address.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221714e214" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_body</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e214 d221714e186 ">Body of the email in plain text, not HTML (required). If a value is passed to <code class="codeph">p_body_html</code>, then this is the only text the recipient sees. If a value is not passed to <code class="codeph">p_body_html</code>, then this text only displays for email clients that do not support HTML or have HTML disabled. A carriage return or line feed (CRLF) must be included every 1000 characters.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221714e226" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_body_html</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e226 d221714e186 ">Body of the email in HTML format. This must be a full HTML document including the <code class="codeph">&lt;html&gt;</code> and <code class="codeph">&lt;body&gt;</code> tags. A single line cannot exceed 1000 characters without a carriage return or line feed (CRLF)</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221714e238" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_subj</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e238 d221714e186 ">Subject of the email.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221714e244" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_cc</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e244 d221714e186 ">Valid email addresses to which the email is copied. For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221714e250" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_bcc</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e250 d221714e186 ">Valid email addresses to which the email is blind copied. For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d221714e256" style="text-align: left;" data-valign="top" width="41%" headers="d221714e184 "><code class="codeph">p_replyto</code></td>
<td style="text-align: left;" data-valign="top" width="59%" headers="d221714e256 d221714e186 ">Specify a valid email address to instruct recipient's email client to send human-generated replies to this address rather than the address specified in <code class="codeph">p_from</code>.</td>
</tr>
</tbody>
</table>

Examples

The following example demonstrates how to use `APEX_MAIL.SEND` to send a plain text email message from an application.

```
-- Example One: Plain Text only message
DECLARE
    l_body      CLOB;
BEGIN
    l_body := 'Thank you for your interest in the APEX_MAIL
package.'||utl_tcp.crlf||utl_tcp.crlf;
    l_body := l_body ||'  Sincerely,'||utl_tcp.crlf;
    l_body := l_body ||'  The EveryCorp Dev Team'||utl_tcp.crlf;
    apex_mail.send(
        p_to       => 'some_user@example.com',   -- change to your email address
        p_from     => 'some_sender@example.com', -- change to a real senders email address
        p_body     => l_body,
        p_subj     => 'APEX_MAIL Package - Plain Text message');
END;
/
```

The following example demonstrates how to use `APEX_MAIL.SEND` to send an HTML email message from an application. Remember, you must include a carriage return or line feed (CRLF) every 1000 characters. The example that follows uses `utl_tcp.crlf`.

```
-- Example Two: Plain Text / HTML message
DECLARE
    l_body      CLOB;
    l_body_html CLOB;
BEGIN
    l_body := 'To view the content of this message, please use an HTML enabled mail client.'||utl_tcp.crlf;

    l_body_html := '<html>
        <head>
            <style type="text/css">
                body{font-family: Arial, Helvetica, sans-serif;
                    font-size:10pt;
                    margin:30px;
                    background-color:#ffffff;}

                span.sig{font-style:italic;
                    font-weight:bold;
                    color:#811919;}
             </style>
         </head>
         <body>'||utl_tcp.crlf;
    l_body_html := l_body_html ||'<p>Thank you for your interest in the <strong>APEX_MAIL</strong> package.</p>'||utl_tcp.crlf;
    l_body_html := l_body_html ||'  Sincerely,<br />'||utl_tcp.crlf;
    l_body_html := l_body_html ||'  The EveryCorp Dev Team<br />'||utl_tcp.crlf;
    l_body_html := l_body_html ||'</body></html>';
    apex_mail.send(
    p_to   => 'some_user@example.com',   -- change to your email address
    p_from => 'some_sender@example.com', -- change to a real senders email address
    p_body      => l_body,
    p_body_html => l_body_html,
    p_subj      => 'APEX_MAIL Package - HTML formatted message');
END;
/
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)

------------------------------------------------------------------------

## 43.11 SEND Procedure Signature 2

This procedure adds a mail to the mail queue of Oracle APEX. The mail is based on an email template where the placeholder values specified as JSON string are substituted.

Syntax

```
APEX_MAIL.SEND (
    p_template_static_id IN VARCHAR2,
    p_placeholders       IN CLOB,
    p_to                 IN VARCHAR2,
    p_cc                 IN VARCHAR2 DEFAULT NULL,
    p_bcc                IN VARCHAR2 DEFAULT NULL,
    p_from               IN VARCHAR2 DEFAULT NULL,
    p_replyto            IN VARCHAR2 DEFAULT NULL,
    p_application_id     IN NUMBER   DEFAULT apex_application.g_flow_id );
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d222283e74" style="text-align: left;" data-valign="bottom" width="31%">Parameter</th>
<th id="d222283e76" style="text-align: left;" data-valign="bottom" width="69%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d222283e80" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_template_static_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e80 d222283e76 ">Static identifier string, used to identify the shared component email template.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222283e86" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_placeholders</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e86 d222283e76 ">JSON string representing the placeholder names along with the values, to be substituted.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222283e92" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_to</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e92 d222283e76 ">(Required) Valid email address to which the email is sent. For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222283e98" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_cc</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e98 d222283e76 ">Valid email addresses to which the email is copied. For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222283e104" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_bcc</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e104 d222283e76 ">Valid email addresses to which the email is blind copied. For multiple email addresses, use a comma-separated list.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222283e110" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_from</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e110 d222283e76 "><p>This must be a valid email address from which the email is sent.</p>
<p>If <code class="codeph">p_from</code> is not provided:</p>
<ul>
<li>the "Application Email From Address" is used (if provided under Application Definition)</li>
<li>otherwise, <code class="codeph">p_replyto</code> is used (if provided)</li>
<li>else, <code class="codeph">p_to</code> is used</li>
</ul>
<p>If <code class="codeph">p_to</code> or <code class="codeph">p_replyto</code> contain multiple email addresses, <code class="codeph">p_from</code> is required.</p>
<p>If an instance administrator has already defined a "Default Email From Address" on the instance level, this address is always used as the "from" address, regardless of whether <code class="codeph">p_from</code> is provided.</p></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222283e166" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_replyto</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e166 d222283e76 "><p>Specify a valid email address to instruct recipient's email client to send human-generated replies to this address rather than the address specified in <code class="codeph">p_from</code>. You can use this parameter as follows:</p>
<ul>
<li>If you omit the <code class="codeph">p_replyto</code> parameter, the Reply-To mail header is set to the value specified in the <code class="codeph">p_from</code> parameter</li>
<li>If you include the <code class="codeph">p_replyto</code> parameter, but provide a NULL value, the Reply-To mail header is set to NULL. This disables automatic email replies.</li>
<li>If you include p_replyto parameter, but provide a non-null value (for example, a valid email address), you send these messages, but the automatic replies go to the value specified (for example, the email address)</li>
</ul></td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d222283e192" style="text-align: left;" data-valign="top" width="31%" headers="d222283e74 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="69%" headers="d222283e192 d222283e76 ">Application ID where the email template is defined. Defaults to the current application (if called from within an application).</td>
</tr>
</tbody>
</table>

Note:

When calling the `SEND` procedure from outside the context of an APEX application (such as from a Database Scheduler job), you must specify the `p_application_id` parameter.

Examples

```
begin
    apex_mail.send (
        p_template_static_id => 'ORDER',
        p_placeholders       => '{ "ORDER_NUMBER": 5321, "ORDER_DATE": "01-Feb-2018", "ORDER_TOTAL": "$12,000" }',
        p_to                 => 'some_user@example.com' );
end;
```

**Parent topic:** [APEX_MAIL](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_MAIL.html#GUID-14F51C6D-CB82-4B38-AB6E-61C46E75596F)
