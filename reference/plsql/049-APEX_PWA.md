<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 49 APEX_PWA

Utilities include: subscribing and unsubscribing users for push notifications; verifying subscription for push notifications; and sending push notifications to subscribed users.

This package is used to provide utilities to applications that have enabled Progressive Web App (PWA).

- [GENERATE_PUSH_CREDENTIALS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.GENERATE_PUSH_CREDENTIALS-Procedure.html#GUID-E35FF8C9-1736-4818-BC6A-3FE529BC4E4C)
- [HAS_PUSH_SUBSCRIPTION Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.HAS_PUSH_SUBSCRIPTION-Function.html#GUID-D0C2528F-D272-48A3-A728-430DE5465D0D)
- [PUSH_QUEUE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.PUSH_QUEUE-Procedure.html#GUID-5AFC6E30-5734-43E3-AABC-CCE271D3D218)
- [SEND_PUSH_NOTIFICATION Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.SEND_PUSH_NOTIFICATION-Procedure.html#GUID-5F2CBF6B-7D13-4A97-8E7D-EE955DECAF50)
- [SUBSCRIBE_PUSH_NOTIFICATIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.SUBSCRIBE_PUSH_NOTIFICATIONS-Procedure.html#GUID-9E2BF965-20D1-4D15-B375-66ACABCB8E2D)
- [UNSUBSCRIBE_PUSH_NOTIFICATIONS Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.UNSUBSCRIBE_PUSH_NOTIFICATIONS-Procedure.html#GUID-FDCAFEAA-E409-458B-85D5-ED821F348C92)

------------------------------------------------------------------------

## 49.1 GENERATE_PUSH_CREDENTIALS Procedure

This procedure regenerates push credential keys based on the provided application ID.

Syntax

```
APEX_PWA.GENERATE_PUSH_CREDENTIALS (
    p_application_id IN NUMBER DEFAULT [current application id] )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application. Defaults to current application. |

Example

The following example regenerates push credential keys for application 100.

```
BEGIN
    apex_pwa.generate_push_credentials (
        p_application_id => 100 );
END;
```

**Parent topic:** [APEX_PWA](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html#GUID-BCA64530-D95D-4FDD-9250-D655EF0BD261)

------------------------------------------------------------------------

## 49.2 HAS_PUSH_SUBSCRIPTION Function

This function returns whether a user has at least one device subscribed to push notifications.

Syntax

```
APEX_PWA.HAS_PUSH_SUBSCRIPTION (
    p_application_id IN NUMBER   DEFAULT [current application id],
    p_user_name      IN VARCHAR2 DEFAULT [current user] )
    RETURN BOOLEAN;
```

Parameters

| Parameter          | Description                                           |
|:-------------------|:------------------------------------------------------|
| `p_application_id` | ID of the application that has the push subscription. |
| `p_user_name`      | Username of the user that has the push subscription.  |

Returns

Function returns boolean containing whether a user is subscribed to an application.

Example

The following example verifies whether user "SMITH" has a push subscription for application 100.

```
BEGIN
    apex_pwa.has_push_subscription (
        p_application_id => 100,
        p_user_name      => 'SMITH' );
END;
```

**Parent topic:** [APEX_PWA](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html#GUID-BCA64530-D95D-4FDD-9250-D655EF0BD261)

------------------------------------------------------------------------

## 49.3 PUSH_QUEUE Procedure

This procedure triggers the database job to send all push notifications in the queue.

Syntax

```
APEX_PWA.PUSH_QUEUE;
```

Parameters

None.

Example

```
BEGIN
    apex_pwa.push_queue;
END;
```

**Parent topic:** [APEX_PWA](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html#GUID-BCA64530-D95D-4FDD-9250-D655EF0BD261)

------------------------------------------------------------------------

## 49.4 SEND_PUSH_NOTIFICATION Procedure

This procedure sends a push notification to a user. All devices that the user subscribes on receive the push notification.

Syntax

```
APEX_PWA.SEND_PUSH_NOTIFICATION (
    p_application_id IN NUMBER   DEFAULT [current application id],
    p_user_name      IN VARCHAR2,
    p_title          IN VARCHAR2,
    p_body           IN VARCHAR2 DEFAULT NULL,
    p_icon_url       IN VARCHAR2 DEFAULT NULL,
    p_target_url     IN VARCHAR2 DEFAULT NULL )
```

Parameters

<table class="Formal" data-cellpadding="4" data-cellspacing="0" title="" data-summary="Parameters for procedure." width="100%" data-frame="hsides" data-border="1" data-rules="rows">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr data-align="left" data-valign="top">
<th id="d246592e72" style="text-align: left;" data-valign="bottom" width="42%">Parameter</th>
<th id="d246592e74" style="text-align: left;" data-valign="bottom" width="58%">Description</th>
</tr>
</thead>
<tbody>
<tr data-align="left" data-valign="top">
<td id="d246592e78" style="text-align: left;" data-valign="top" width="42%" headers="d246592e72 "><code class="codeph">p_application_id</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d246592e78 d246592e74 ">ID of the application that contains the user to send the push notification to. Defaults to current application.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d246592e84" style="text-align: left;" data-valign="top" width="42%" headers="d246592e72 "><code class="codeph">p_user_name</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d246592e84 d246592e74 ">Username of the user receiving the push notification.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d246592e90" style="text-align: left;" data-valign="top" width="42%" headers="d246592e72 "><code class="codeph">p_title</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d246592e90 d246592e74 ">Title of the push notification.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d246592e96" style="text-align: left;" data-valign="top" width="42%" headers="d246592e72 "><code class="codeph">p_body</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d246592e96 d246592e74 ">Body of the push notification.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d246592e102" style="text-align: left;" data-valign="top" width="42%" headers="d246592e72 "><code class="codeph">p_icon_url</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d246592e102 d246592e74 ">URL of the icon that displays on the push notification. Defaults to the provided application icon.</td>
</tr>
<tr data-align="left" data-valign="top">
<td id="d246592e108" style="text-align: left;" data-valign="top" width="42%" headers="d246592e72 "><code class="codeph">p_target_url</code></td>
<td style="text-align: left;" data-valign="top" width="58%" headers="d246592e108 d246592e74 "><p>URL of the page that opens when the user clicks on the push notification. Defaults to the home page of the application.</p>
<p>Oracle recommends enabling deep linking or rejoin session on the application for best performance.</p></td>
</tr>
</tbody>
</table>

Example

The following example sends a push notification to user "SMITH" in application 100.

```
BEGIN
    apex_pwa.send_push_notification (
        p_application_id => 100,
        p_user_name      => 'SMITH',
        p_title          => 'Your order has been shipped',
        p_body           => 'Order #123456 will arrive within 3 days.' );
END;
```

**Parent topic:** [APEX_PWA](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html#GUID-BCA64530-D95D-4FDD-9250-D655EF0BD261)

------------------------------------------------------------------------

## 49.5 SUBSCRIBE_PUSH_NOTIFICATIONS Procedure

This procedure subscribes a user to an application to enable receiving push notifications from the application.

Syntax

```
APEX_PWA.SUBSCRIBE_PUSH_NOTIFICATIONS (
    p_application_id         IN NUMBER   DEFAULT [current application id],
    p_user_name              IN VARCHAR2 DEFAULT [current user],
    p_subscription_interface IN VARCHAR2 )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application that has the push subscription. |
| `p_user_name` | Username of the user that has the push subscription. |
| `p_subscription_interface` | Subscription object (JSON) generated from a browser. |

Example

The following example subscribes a user to push notifications. This is usually used in conjunction with APEX JavaScript API `apex.pwa.subscribePushNotifications` and `apex.pwa.getPushSubscription` that can generate the subscription object.

```
BEGIN
    apex_pwa.subscribe_push_notifications (
        p_subscription_interface => '{ "endpoint": "", "expirationTime": null,
                                    "keys": { "p256dh": "", "auth": "" } }' );
END;
```

**Parent topic:** [APEX_PWA](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html#GUID-BCA64530-D95D-4FDD-9250-D655EF0BD261)

------------------------------------------------------------------------

## 49.6 UNSUBSCRIBE_PUSH_NOTIFICATIONS Procedure

This procedure unsubscribes a user from the push notifications of an application.

Syntax

```
APEX_PWA.UNSUBSCRIBE_PUSH_NOTIFICATIONS (
    p_application_id         IN NUMBER   DEFAULT [current application id],
    p_user_name              IN VARCHAR2 DEFAULT [current user],
    p_subscription_interface IN VARCHAR2 DEFAULT NULL )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_application_id` | ID of the application that has the push subscription. |
| `p_user_name` | Username of the user that has the push subscription. |
| `p_subscription_interface` | Subscription object (JSON) generated from a browser. If provided, it will only unsubscribe this subscription. If not provided, it will unsubscribe all subscriptions. |

Example

The following example unsubscribes a user from push notifications. This is usually used in conjunction with APEX JavaScript API `apex.pwa.unsubscribePushNotifications` and `apex.pwa.getPushSubscription` that can generate the subscription object.

```
BEGIN
    apex_pwa.unsubscribe_push_notifications;
END;
```

**Parent topic:** [APEX_PWA](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_PWA.html#GUID-BCA64530-D95D-4FDD-9250-D655EF0BD261)
