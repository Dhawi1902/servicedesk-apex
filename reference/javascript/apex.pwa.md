<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.pwa.html -->
<!-- Namespaces: apex.pwa -->

# Namespace: pwa

## QuickNav

### [Functions](#methods-section)

- [getDisplayMode](#.getDisplayMode)
- [getInstallText](#.getInstallText)
- [getPushSubscription](#.getPushSubscription)
- [hasPushSubscription](#.hasPushSubscription)
- [isInstallable](#.isInstallable)
- [openInstallDialog](#.openInstallDialog)
- [subscribePushNotifications](#.subscribePushNotifications)
- [unsubscribePushNotifications](#.unsubscribePushNotifications)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).pwa

The apex.pwa namespace contains Oracle APEX functions related to Progressive Web App features.

These functions are useful only when an APEX application has enabled Progressive Web App.

Since:
- 21.2

### Functions

#### (static) getDisplayMode() → {string}

Get the current display mode for the PWA.

Possible values are: fullscreen, standalone, minimal-ui, browser.

The display mode is set by the developer in the application definition.

This function is used to determine if the application is currently accessed through the PWA application (eg. in fullscreen) or through the browser normally.

##### Returns:

Current display mode for the PWA

Type
string

##### Example

Returns the PWA current display mode. Possible values are: fullscreen, standalone, minimal-ui, browser.

```
const displayMode = apex.pwa.getDisplayMode();
```

#### (static) getInstallText() → {Promise}

Deprecated:
- Yes

##### Returns:

A Promise that resolves the PWA dialog installation text

Type
Promise

#### (static) getPushSubscription() → {Promise}

This function returns the current user push subscription object.

##### Returns:

A Promise that resolves to a PushSubscription object containing details of an existing subscription

Type
Promise

##### Example

Returns a PushSubscription object containing details of an existing subscription.

```
const subscription = await apex.pwa.getPushSubscription();
```

#### (static) hasPushSubscription() → {Promise}

This function is used to verify if the current user is subscribed to push notifications.

##### Returns:

A Promise that resolves a boolean, based on the if the user is subscribed to push notifications.

Type
Promise

##### Example

Returns if the current user is subscribed to push notifications.

```
const hasPushSubscription = await apex.pwa.hasPushSubscription();
```

#### (static) isInstallable() → {Promise}

Determines if the current session is eligible for installation of the PWA.

This function will detect:

- the user's browser install prompt is available.
- the PWA is already installed on the user's device.
- the user session is currently in PWA mode.
- the user is on iOS/iPadOS on Safari.

Given the user's current device and browser, this function will determine if installing the PWA is possible.

##### Returns:

A Promise that resolves a boolean, based on installation eligibility

Type
Promise

##### Example

Returns if the APEX application is installable as a PWA.

```
const isInstallable = await apex.pwa.isInstallable();
```

#### (static) openInstallDialog()

For browsers with automatic PWA installation, this function triggers the installation process.

For browsers without automatic PWA installation, this function opens a dialog with the instruction text.

This function is automatically invoked when clicking on any DOM element with the following class: `.a-pwaInstall`.

This function is also invoked on `apex.actions` with action name `a-pwa-install`.

For example when creating a new APEX application with PWA enabled, a navigation bar entry is added with the `.a-pwaInstall` class and `href="#action$a-pwa-install"`. Developers can add custom buttons to their application and use the `.a-pwaInstall` class or `href="#action$a-pwa-install"` to trigger the PWA installation process.

Alternatively, developers can run this function to trigger the PWA installation process programatically for a custom experience.

##### Example

Opens the installation dialog for installing the PWA.

```
apex.pwa.openInstallDialog();
```

#### (static) subscribePushNotifications()

This function is used to subscribe the current user to push notifications.

##### Example

Subscribe the current user to push notifications.

```
await apex.pwa.subscribePushNotifications();
```

#### (static) unsubscribePushNotifications()

This function is used to unsubscribe the current user to push notifications.

##### Example

Unsubscribe the current user to push notifications.

```
await apex.pwa.unsubscribePushNotifications();
```
