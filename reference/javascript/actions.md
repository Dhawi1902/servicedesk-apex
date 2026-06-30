<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html -->
<!-- Interfaces: actions -->

# Interface: actions

## QuickNav

### [Properties](#members-section)

- [context](#context)
- [typeName](#typeName)

### [Methods](#methods-section)

- [add](#add)
- [addFromMarkup](#addFromMarkup)
- [addShortcut](#addShortcut)
- [ariaKeyshortcut](#ariaKeyshortcut)
- [clear](#clear)
- [disable](#disable)
- [disableShortcuts](#disableShortcuts)
- [enable](#enable)
- [enableShortcuts](#enableShortcuts)
- [get](#get)
- [hide](#hide)
- [invoke](#invoke)
- [list](#list)
- [listShortcuts](#listShortcuts)
- [lookup](#lookup)
- [observe](#observe)
- [remove](#remove)
- [removeShortcut](#removeShortcut)
- [set](#set)
- [shortcutDisplay](#shortcutDisplay)
- [show](#show)
- [toggle](#toggle)
- [unobserve](#unobserve)
- [update](#update)
- [updateChoices](#updateChoices)

### [Type Definitions](#typedefs-section)

- [action](#.action)
- [shortcutListItem](#.shortcutListItem)
- [shortcutName](#.shortcutName)

## actions

The actions interface manages a collection of [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) objects. An action encapsulates the identity, state and behavior of a named operation or procedure that the user initiates via a user interface element. Actions are most useful when an operation can be initiated in multiple ways such as with a button or toolbar button, menu, or keyboard shortcut. The operation should be labeled consistently and if it can be enabled and disabled that state must be kept consistent. By using an action and then associating a button and/or menu item with that action all aspects of the action are centralized and kept in sync. This avoids duplicating labels, icons etc.

### Actions Contexts

The apex.actions singleton (which is also the [apex.actions](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html) namespace) manages all the global (page level) actions. For components that can have multiple instances on a page the global actions will not work because it is not clear which instance of the component the action applies to. To support components the [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext) function is used to create an actions interface that is scoped to a specific component instance (the context). Typically the component (e.g. widget) would call [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext) when it is created and [apex.actions.removeContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.removeContext) when it is destroyed.

For global actions and any other created actions contexts the methods on the actions object are used to add, remove, lookup, and invoke actions. There are also methods to manage keyboard shortcuts. Additional state can be stored in the action if desired. If any of the action properties change then [actions#update](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#update) must be called.

Actions are associated with UI controls that invoke the action. It is also possible to invoke the action explicitly with the [actions#invoke](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#invoke) method. To toggle actions the [actions#toggle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#toggle) method is used and for radio group actions the [actions#set](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#set) method is used to change the value. The following sections describes how to associate actions with various controls.

Binding a UI element to an action uses the custom attribute `data-action` or for links (\<a\> elements) the `href` attribute. The value of this attribute specifies the binding. In the simple case it is just the name of an action. The full syntax of the binding value is:

```
[context-id]action-name?arguments
```

- *context-id* is the HTML DOM id of a region that has defined an actions context or the element id of the element specified in a call to [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext). To explicitly reference the global context use `[global]`. This part of the binding including the square brackets is optional. The square brackets must be included in the syntax when there is a context-id.
- *action-name* is the name of an action in the global context or if *context-id* is given, in that context.
- *arguments* is a list of *arg-name*=*arg-value* pairs separated by &. This part of the binding including the leading ? is optional.

#### Handling Multiple Instances

A single action can handle multiple instances by passing an argument to the action that identifies the specific instance. Consider a tabular report (or a list report) containing tasks. Each row could have a "Complete" button that when pressed marks the task as complete. The action binding might look like this: `complete-task?taskId=&TASK_ID!ATTR.` The argument `taskId` lets the action know which task it is operating on. In this example the argument value comes from an APEX symbol substitution. When an action handles multiple instances the functionality that keeps the action state in sync with UI elements is more complicated. The label, icon, and enabled states, for example, could be different for the button in each row. The [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) property `idArg` lets you specify the argument that uniquely identifies the instance. This argument can be passed to the [actions#enable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#enable), [actions#disable](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#disable), [actions#show](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#show), [actions#hide](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#hide), and [actions#update](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#update) methods to update a specific UI element. Note that when this is done the action state is no longer in sync with all UI elements bound to the action. Only the hidden and disabled states can be updated for a specific instance when the action has the `idArg` property defined. In order for keyboard shortcuts to apply to the correct instance the [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) property `instanceSelector` must be set and the button (or other UI control) bound to the action must be within an element identified by the selector.

### Buttons

To associate a button element with an action give it a `data-action` attribute with the name of the action as its value. The button icon, label text, title, aria-label, hide/show, and disabled state are all updated automatically.

For this automatic updating to work buttons should use the following classes:

- t-Button-label if a button has a text label this class should be on an element that wraps the text. This is useful when the button also has an icon or other non-text label content. This class does not go on the button element. If this class is not used then the content of the button element will be the label text.
- t-Button--icon if a button has an icon this class should be on the button element. If the action has an icon and the button has this class then any elements with the icon type class will be updated with the icon. Any classes on the icon element that are not the icon, the icon type or start with "t-" will get removed.
- t-Button--noLabel if a button has no visible label this class should be on the button element. A button with no visible label text will have the button's aria-label attribute set to the button label. Also if there is no title the label will be used as the title.

If the action label or title are null they will be initialized with the text and title attribute value respectively from the first button (in document order) associated with the action. This is useful if the server has already rendered a localized button for the action. The title comes from the button title attribute. The label comes from the first found of; aria-label attribute, title attribute if button has class t-Button--noLabel, content of the descendant element with class t-Button-label, and finally the button element content. If disabled is null it will be taken from the button disabled property. If you don't want the label, title, or icon to be updated add attribute data-no-update="true".

Example:

```
    <button class="..." type="button" data-action="undo">Undo</button>
```

### Checkboxes

A checkbox can be associated with a toggle action by giving the input element (or a wrapping parent element) a class of `js-actionCheckbox` and a `data-action` attribute with the name of the action as its value. The checkbox should have a label element. The icon, label text, title, hide/show, disabled state, and checked state are all updated automatically. For hide to work correctly use a wrapping element.

If the label has the class t-Button then it should be marked up like a button and the same classes described for a button are used to update the label and icon (except a visually hidden child element is used for the label in place of aria-label). Otherwise the label element content will be updated with the label and the icon is not used. If the action label or title are null they will be initialized from the markup. If the checkbox label is marked up like a button then the label comes from the text of a child element with class t-Button-label or if the label has class t-Button--noLabel then from a child element with class u-VisuallyHidden. If you don't want the label, title, or icon to be updated add attribute data-no-update="true".

Example:

```
    <input id="abc" type="checkbox" class="js-actionCheckbox" data-action="option-a">
        <label for="abc">Option A</label>
   or
        <input id="abc" type="checkbox"><label for="abc">Option A</label>
```

### Radio Groups

A radio group is a set of input elements of type radio and sharing the same name value. A radio group can be associated with a radio group action by giving the element that wraps the radio group a class of `js-actionRadioGroup` and a `data-action` attribute with the name of the action as its value. The wrapper element aria label is kept in sync with the action label. The radio group as a whole does not have a disabled state, icon or title. When the radio action value changes (or when update is called) the checked state (and disabled state) of each radio input is updated.

The element with class js-actionRadioGroup can also have attributes: data-item-start, data-item, data-item-end, data-item-wrap to override action properties labelStartClasses, labelClasses, labelEndClasses, and itemWrapClasses respectively.

If the action label is null it will be initialized from the wrapper element aria-label. If the wrapping element has no children when the action is added or when updateChoices is called (after the choices have been changed) then the choices are rendered as radio input, label pair elements. The action labelStartClasses, labelClasses, labelEndClasses values are used for the classes of the label elements. If there is an icon it will be used as the label. The label will be included as a hidden but accessible label. The label element will have a title if there is a title property or if the choice has an icon. The title comes from the label property if the title property isn't given.

Example:

```
      <input id="lc1" type="radio" name="RG1" value="s"><label for="lc1">Small</label>
      <input id="lc2" type="radio" name="RG1" value="m"><label for="lc2">Medium</label>
      <input id="lc3" type="radio" name="RG1" value="l"><label for="lc3">Large</label>
```

### Select List

To associate a select element with a radio group action give it a `data-action` attribute with the name of the action as its value. Select lists used with actions are assumed to not have an associated label element. The select element aria label, title, value, and disabled state are kept in sync with the action. When the radio action value changes (or when update is called) the select element value is updated and also the disabled state of each option element.

If the action label or title are null they will be initialized from the select element aria-label and title attributes. If the select element has no children when the action is added or when updateChoices is called (after the choices have been changed) then the choices are rendered as option elements. The choice group property is used to put options in optgroup elements. The group property value is used as the optgroup label. The choices need to be sorted first by group value.

Example:

```
    <select class="..." data-action="item-size">...</select>
```

### Links (anchor elements)

To associate an anchor (\<a\>) element with an action the href must be a fragment with prefix "action\$" and then the action name. Unlike buttons, links do not synchronize the label, title, or icon action state with the anchor element. The action hide property will hide or show the link. The action disabled property will disable or enable the link by adding (or removing) the `is-disabled` and `apex_disabled` classes.

If the action label is null it will be initialized from the link label from the first link (in document order) associated with the action.

Example:

```
    <a class="..." href="#action$my-action">...</a>
```

### Menu Items

For [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget menu items of type action, toggle, or radioGroup simply specify the action name as the value of the action property. Values for label, icon, iconType, disabled, hide, and accelerator are taken from the action (accelerator is taken from the action shortcut property). It is possible to override action values such as label and icon by specifying them in the menu item.

Examples:

```
    { type: "action", action: "undo" },
    { type: "toggle", action: "my-toggle-action" },
    { type: "radioGroup", action: "my-radio-action" }
```

### Shortcuts

Shortcuts are not an actual widget or a DOM Element. The keyboard event handler for invoking actions in response to shortcut keys is in this module and is registered on the context element (body for the global context).

### Associating actions with custom UI controls

To integrate actions with other UI controls:

- Devise a way to specify the action name. For example using a class such as js-actionRadioGroup and an attribute such as `data-action` attribute (recommended) on an appropriate element. For widgets the action name could be passed as an option to the initialization function.
- Register an observer call back using [actions#observe](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#observe) to get notified when the action is added, removed, or updated. Use this callback to update the state of the UI control such as enabling or disabling it or changing the label or icon.
- Call the [actions#invoke](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#invoke) method when it is time to invoke the action.

Since:
- 5.0

### Properties

#### context :Element

This is the Element context that actions are scoped within as given in the [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext) call.

##### Type:

- Element

#### typeName :string

This is type name of the actions context as given in the [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext) call. The typeName of the global context apex.actions is "global".

##### Type:

- string

### Methods

#### add(pActions) → {boolean}

Add an [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) object or an array of [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) objects to this actions context. The action name must be unique within the context and the shortcut if any must be unique within the context and valid. Debug warnings are logged if any of these conditions are not met. See also [actions#remove](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#remove).

Note: The global actions context (apex.actions) does not exist until after the DOM is ready. Actions should be added after the DOM is ready. For code in JavaScript files or in APEX page attribute "Function and Global Variable Declaration" you can wrap the call to `add` in the jQuery ready handler if needed. For example:

```
$( function() {
    apex.actions.add(...);
} );
```

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pActions` | [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) \| Array.\<[actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action)\> | The action or an array of actions to add. |

##### Returns:

true if all the actions and shortcuts are added without errors or warnings, false otherwise.

Type
boolean

##### Examples

This example adds one action to the global actions context.

```
apex.actions.add({
    name: "send-email",
    label: "Send Email",
    action: function(event, focusElement) {...}
});
```

This example adds an array of actions to the context `log1` returned by [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext).

```
log1.add([{
        name: "clear-log",
        label: "Clear",
        action: function(event, focusElement) {...}
    },
    {
        name: "verbose",
        label: "Verbose",
        get: function() {...},
        set: function(value) {...}
    },
    ...
]);
```

#### addFromMarkup(pList\$)

Add one or more [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) objects from simple list markup. This is useful in cases where it is easier to render list markup than an array of action objects. This does not support adding actions with functions but action functions can be added either before or after.

The markup expected by this method overlaps with what the [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html) widget expects.

Expected markup:
An element with a `<ul>` child. The `<ul>` has one or more `<li>` elements each one representing an action. The `<li>` element can contain either an `<a>` or `` element.

| Action property | Comes from |
|----|----|
| name | li\[data-id\] |
| label | a or span content |
| title | a\[title\] or span\[title\] |
| href | a\[href\] |
| target | a\[target\] |
| disabled | true if li\[data-disabled=true\] false otherwise |
| hide | true if li\[data-hide=true\] false otherwise |
| shortcut | li\[data-shortcut\] |
| icon | li\[data-icon\] If the value has a space the icon is the word after the space otherwise it is the whole value |
| iconType | li\[data-icon\] If the value has a space the type is the word before the space |

Action property markup source, for actions based on list markup

If there is no name or label or the value of `<href>` equals "separator" then no action is created for that `<li>`. If the `<li>` has a `<ul>` child the `<ul>` is processed recursively.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pList$` | jQuery | The jQuery object representing the parent of the actions list markup. |

##### Examples

This example shows markup for two actions.

```
    <ul>
        <li data-id="goto-page-1">
            <a href="...">Page One</a>
        </li>
        <li data-id="goto-page-2">
            <a href="...">Page Two</a>
        </li>
    </ul>
```

This example shows how to turn the above markup into actions in the global context.

```
apex.actions.addFromMarkup($("#myActionList"));
```

#### addShortcut(pShortcutName, pActionName, pChoiceValueopt) → {boolean}

Add a keyboard shortcut synonym for an action. Debug warnings are logged if there are problems. See also [actions#removeShortcut](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#removeShortcut).

This allows an action to have more than one shortcut key to invoke it. The `shortcut` property of the action is not affected.

##### Parameters:

<table class="params" aria-label="Parameters for addShortcut">
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
<th class="name" scope="row"><code>pShortcutName</code></th>
<td class="type"><a href="actions.html#.shortcutName">actions.shortcutName</a></td>
<td class="attributes"></td>
<td class="description last">The keyboard shortcut synonym to add.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action to add a shortcut for.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pChoiceValue</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Choice value only if the action is a radio group. The shortcut will select the given choice.</td>
</tr>
</tbody>
</table>

##### Returns:

true if successful and false if there is no such action or there is a duplicate shortcut.

Type
boolean

##### Example

This example adds a shortcut synonym for action "send-email".

```
apex.actions.addShortcut("Ctrl+Shift+E", "send-email");
```

#### ariaKeyshortcut(pShortcutName) → {string\|null}

Return the keyboard shortcut name formatted for the aria-keyshortcuts attribute.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pShortcutName` | [actions.shortcutName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.shortcutName) | Keyboard shortcut to get the ARIA label for. |

##### Returns:

A string formatted for the aria-keyshortcuts attribute or null if the input pShortcutName parameter is not a valid shortcut.

Type
string \| null

#### clear()

Remove all actions from this actions context.

Note: If clear is called on the global context it will remove built-in APEX actions, which may result in a loss of functionality on your page.

##### Example

This example removes all the actions from the global context.

```
apex.actions.clear();
```

#### disable(pActionName, pArgsopt)

Disable UI elements associated with the action by setting `disabled` property to true. This is a convenience method to disable without having to call [actions#lookup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#lookup) and [actions#update](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#update).

##### Parameters:

<table class="params" aria-label="Parameters for disable">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action to disable.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the action. If the action is bound to many row or item instances in a report the <code class="prettyprint">pArgs</code> property with the same name as the <a href="actions.html#.action">actions.action</a> <code class="prettyprint">idArg</code> property value is used to determine which UI element to disable.</td>
</tr>
</tbody>
</table>

##### Example

This example disables the "send-email" action.

```
apex.actions.disable( "send-email" );
```

#### disableShortcuts()

This is used to disable all shortcuts temporarily. Call at the start of a user interaction that should have shortcuts disabled for example a custom popup. Call [actions#enableShortcuts](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#enableShortcuts) when finished. It is called automatically when APEX modal dialogs or menus open. Calls can be nested. For each call to disableShortcuts there should be a corresponding call to [actions#enableShortcuts](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#enableShortcuts).

#### enable(pActionName, pArgsopt)

Enable UI elements associated with the action by setting `disabled` property to false. This is a convenience method to enable without having to call [actions#lookup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#lookup) and [actions#update](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#update).

##### Parameters:

<table class="params" aria-label="Parameters for enable">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action to enable.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the action. If the action is bound to many row or item instances in a report the <code class="prettyprint">pArgs</code> property with the same name as the <a href="actions.html#.action">actions.action</a> <code class="prettyprint">idArg</code> property value is used to determine which UI element to enable.</td>
</tr>
</tbody>
</table>

##### Example

This example enables the "send-email" action.

```
apex.actions.enable( "send-email" );
```

#### enableShortcuts()

This is used to enable all shortcuts after they were disabled with [actions#disableShortcuts](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#disableShortcuts). It is called automatically when APEX modal dialogs or menus close. Calls can be nested. For each call to [actions#disableShortcuts](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#disableShortcuts) there should be a corresponding call to enableShortcuts.

#### get(pActionName, pArgsopt) → (nullable) {string}

Return the current value of a radio group or toggle action.

##### Parameters:

<table class="params" aria-label="Parameters for get">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the get function. The object properties are the argument names and the property values are the argument values. This is passed to the action's get function.</td>
</tr>
</tbody>
</table>

##### Returns:

The current value or null if the action doesn't exist.

Type
string

##### Example

This example returns the current choice of radio group action "change-view" of the interactive grid region with HTML DOM id "emp". The Interactive Grid method getActions returns the actions context for the region.

```
apex.region( "emp" ).call( "getActions" ).get( "change-view" );
```

#### hide(pActionName, pArgsopt)

Hide UI elements associated with the action by setting the `hide` property to true. This is a convenience method to hide without having to call [actions#lookup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#lookup) and [actions#update](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#update).

##### Parameters:

<table class="params" aria-label="Parameters for hide">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action to hide.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the action. If the action is bound to many row or item instances in a report the <code class="prettyprint">pArgs</code> property with the same name as the <a href="actions.html#.action">actions.action</a> <code class="prettyprint">idArg</code> property value is used to determine which UI element to hide.</td>
</tr>
</tbody>
</table>

##### Example

This example hides the "send-email" action.

```
apex.actions.hide( "send-email" );
```

#### invoke(pActionName, pEventopt, pFocusElementopt, pArgsopt) → {boolean\|undefined}

Invoke the named action. Even though pEvent and pFocusElement are optional it is recommended to always include them.

This has no effect if the action is hidden or disabled.

##### Parameters:

<table class="params" aria-label="Parameters for invoke">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Name of the action to invoke.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pEvent</code></th>
<td class="type">Event</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Browser event that caused the action to be invoked.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pFocusElement</code></th>
<td class="type">Element</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The element that will receive focus when the action is complete unless the action returns true. This is likely also the element that had focus when the action was invoked.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the action. The object properties are the argument names and the property values are the argument values. This is passed to the action function as the third argument. This is not used if the action has only an href.</td>
</tr>
</tbody>
</table>

##### Returns:

false if there is no such action or action has no action method, true if action set the focus, all other cases should return undefined.

Type
boolean \| undefined

##### Example

This example invokes the "send-email" action when something is clicked.

```
$( "#something" ).on( "click", function( event ) {
    apex.actions.invoke( "send-email", event, event.target );
} );
```

#### list() → {Array}

Return an array of actionName, label pairs for all actions in the context. For actions with choices there is an array item for each choice.

##### Returns:

An array of objects with name, label and optional choice properties.

Type
Array

##### Example

This example writes to the console a list of all the actions in the global context.

```
apex.actions.list().forEach(function(a) {
    console.log( "Action Label: " + a.label +
        ", Name: " + a.name +
        (a.choice !== undefined ? ", Choice: " + a.choice : "" ) );
});
```

#### listShortcuts(pWithMarkup) → {Array.\<[actions.shortcutListItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.shortcutListItem)\>}

Return a list of all shortcuts in the context.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pWithMarkup` | boolean | Optional default is false. If true wrap the display name in HTML markup. |

##### Returns:

An array of objects with information about the shortcut.

Type
Array.\<[actions.shortcutListItem](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.shortcutListItem)\>

##### Example

This example writes to the console all the shortcuts in the global context.

```
var i,
    shortcuts = apex.actions.listShortcuts();
for ( i = 0; i < shortcuts.length; i++ ) { // for each shortcut
     console.log("Press shortcut " + shortcuts[i].shortcutDisplay + " to " + shortcuts[i].actionLabel );
}
```

#### lookup(pActionName) → {[actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action)}

Lookup and return an action by name. If you modify the properties of the action you may need to call [actions#update](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#update) to update any associated UI elements or shortcuts. If you modify the choices of the action then call [actions#updateChoices](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#updateChoices).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pActionName` | string | The name of the action to return. |

##### Returns:

action or undefined if action doesn't exist.

Type
[actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action)

##### Example

This example updates the label and title of an action.

```
var action = apex.actions.lookup( "my-action" );
action.title = "New Title";
action.label = "New Label";
apex.actions.update( "my-action" );
```

#### observe(pCallback)

Register a callback function to be notified when an action changes. This is used to update UI elements associated with an action when that action state changes. The most common elements including buttons, checkbox and radio group inputs, select lists, and menus are already handled.

##### Parameters:

<table class="params" aria-label="Parameters for observe">
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
<th class="name" scope="row"><code>pCallback</code></th>
<td class="type">function</td>
<td class="description last">function notifyObservers( action, operation, args )
<ul>
<li><em>action</em> is the <a href="actions.html#.action">actions.action</a> object that has had a change in state or value.</li>
<li><em>operation</em> is one of "add", "remove", "update", or "updateChoices".</li>
<li><em>args</em> is an optional object containing any arguments that were passed to the function that updated the action. See the <code class="prettyprint">pArgs</code> parameter to the <a href="actions.html#invoke">actions#invoke</a>, <a href="actions.html#update">actions#update</a> functions and others for more information about this parameter.</li>
</ul></td>
</tr>
</tbody>
</table>

#### remove(pActions)

Remove one or more [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) objects from this actions context. See also [actions#add](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#add).

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pActions` | [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) \| string \| Array.\<[actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action)\> \| Array.\<string\> | The action or action name or an array of actions or an array of action names to remove. |

##### Examples

This example removes one action from the global action context.

```
apex.actions.remove( "send-email" );
```

This example removes an array of actions from the context `log1` returned by [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext).

```
log1.remove( ["clear-log", "verbose"] );
```

#### removeShortcut(pShortcutName) → {boolean}

Remove a keyboard shortcut synonym for an action. See also [actions#addShortcut](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#addShortcut)

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pShortcutName` | [actions.shortcutName](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.shortcutName) | The keyboard shortcut synonym to remove. |

##### Returns:

true if successful, false if the shortcut is the primary shortcut for an action.

Type
boolean

##### Example

This example removes a shortcut synonym.

```
apex.actions.removeShortcut( "Ctrl+Shift+E" );
```

#### set(pActionName, pValue, pArgsopt)

Set the value of a radio group action or toggle action.

This has no effect if the action is hidden or disabled.

##### Parameters:

<table class="params" aria-label="Parameters for set">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pValue</code></th>
<td class="type">string | boolean</td>
<td class="attributes"></td>
<td class="description last">The value to set.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the set function. The object properties are the argument names and the property values are the argument values. This is passed as the last argument to the action's set function.</td>
</tr>
</tbody>
</table>

##### Example

This example sets the current choice of radio group action "change-view" of the interactive grid region with HTML DOM id "emp" to "detail". The Interactive Grid method getActions returns the actions context for the region.

```
apex.region( "emp" ).call( "getActions" ).set( "change-view", "detail" );
```

#### shortcutDisplay(pShortcutName, pWithMarkupopt) → {string}

Return the friendly display string for a keyboard shortcut name.

##### Parameters:

<table class="params" aria-label="Parameters for shortcutDisplay">
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
<th class="name" scope="row"><code>pShortcutName</code></th>
<td class="type"><a href="actions.html#.shortcutName">actions.shortcutName</a></td>
<td class="attributes"></td>
<td class="description last">Keyboard shortcut to get the display string for.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pWithMarkup</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Optional, default is false. If true wrap the display name in HTML markup.</td>
</tr>
</tbody>
</table>

##### Returns:

A friendly version of the shortcut. The display string is sensitive to the operating system. See [apex.actions.setKeyCaps](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.setKeyCaps).

Type
string

#### show(pActionName, pArgsopt)

Show UI elements associated with the action by setting the `hide` property to false. This is a convenience method to show without having to call [actions#lookup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#lookup) and [actions#update](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#update).

##### Parameters:

<table class="params" aria-label="Parameters for show">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action to show.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the action. If the action is bound to many row or item instances in a report the <code class="prettyprint">pArgs</code> property with the same name as the <a href="actions.html#.action">actions.action</a> <code class="prettyprint">idArg</code> property value is used to determine which UI element to show.</td>
</tr>
</tbody>
</table>

##### Example

This example shows the "send-email" action.

```
apex.actions.show( "send-email" );
```

#### toggle(pActionName, pArgsopt) → {boolean\|undefined}

Toggle the named action. This should only be used for toggle actions. Toggle actions have get and set methods and don't have a choices property.

This has no effect if the action is hidden or disabled.

##### Parameters:

<table class="params" aria-label="Parameters for toggle">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Name of the action to toggle.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the toggle action. The object properties are the argument names and the property values are the argument values. This is passed to the action's get and set functions as the last argument.</td>
</tr>
</tbody>
</table>

##### Returns:

false if there is no such action or action doesn't have get/set methods all other cases should return undefined

Type
boolean \| undefined

##### Example

This example toggles the "verbose" action of the context `log1` returned by [apex.actions.createContext](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.createContext).

```
log1.toggle( "verbose" );
```

#### unobserve(pCallback)

Remove callback.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pCallback` | function | The function that was added with [actions#observe](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#observe). |

#### update(pActionName, pArgsopt) → {boolean}

Update any UI elements associated with the action after it changes. Calling update will notify any observers that the action has changed. Debug warnings will be logged and the return value is false if the action has a problem with the shortcut.

##### Parameters:

<table class="params" aria-label="Parameters for update">
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
<th class="name" scope="row"><code>pActionName</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">The name of the action to update.</td>
</tr>
<tr>
<th class="name" scope="row"><code>pArgs</code></th>
<td class="type">object</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">An object containing arguments for the action. If the action is bound to many row or item instances in a report the <code class="prettyprint">pArgs</code> property with the same name as the <a href="actions.html#.action">actions.action</a> <code class="prettyprint">idArg</code> property value is used to determine which UI element to update.</td>
</tr>
</tbody>
</table>

##### Returns:

false if the shortcut is invalid or a duplicate and true otherwise.

Type
boolean

##### Example

See example for [actions#lookup](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#lookup)

#### updateChoices(pActionName) → {boolean}

Call this only if the set of choices for an action has changed. This will notify any observers that the set of action choices has changed.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pActionName` | string | The name of the action that has had its choices updated. |

##### Returns:

false if the action has no choices and true otherwise

Type
boolean

##### Example

This example adds a new choice to the action "choose-fruit".

```
var action = apex.actions.lookup( "choose-fruit" );
action.choices.push( {
    label: "Apple",
    value: "APPLE"
} );
apex.actions.updateChoices( "choose-fruit" );
```

### Type Definitions

#### action

This is an object that defines the state and behavior of an action. There are 3 kinds of actions:

- action: This is typically associated with a button, link, or action menu item. The action must have an action function or an href URL.
- toggle: This is typically associated with a checkbox input, button, or toggle menu item. The action must have get and set functions and not have a choices property. Toggle actions update an external Boolean state variable by means of the get and set functions. It is also possible to keep the state in the action by using 'this' in the get and set functions.
- radio group: This is typically associated with radio inputs, select list, or a radioGroup menu item. The action must have get and set functions and a choices property. Radio group actions update an external state variable with the currently selected value of the group by means of the get and set functions. It is also possible to keep the state in the action by using 'this' in the get and set functions.

Note: When an action is hidden or disabled the [actions#invoke](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#invoke), [actions#toggle](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#toggle), and [actions#set](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#set) methods have no effect.

Note: The disabled and hide properties cannot be functions. Menu widget can use actions and non-action based menu items allow hide and disabled to be functions. But when a menu uses an action that action still must not use functions for disabled and hide.

As an alternative to label (or onLabel, offLabel) you can specify labelKey (or onLabelKey, offLabelKey) and the apex.lang.getMessage function will be used to lookup the label text. The localized label text is then stored in the normal label/onLabel/offLabel property. This happens when the action is added. The same applies to titleKey groupKey, and labelKey of each object in the choices array.

##### Type:

- object

##### Properties:

<table class="props" aria-label="Properties">
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
<th class="name" scope="row"><code>name</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">A unique name for the action. By convention the style of names uses a dash to separate words as in "clear-log". Name must not contain spaces, "&gt;", ":", quote, or double quote, or non-printing characters.</td>
</tr>
<tr>
<th class="name" scope="row"><code>idArg</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only applies when an action handles multiple instances such as when an action is used in a report row or list item. This is the name of the argument that uniquely identifies the bound UI element (button or input element for example) in the row or item.</td>
</tr>
<tr>
<th class="name" scope="row"><code>instanceSelector</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only applies when an action handles multiple instances. This is the selector of an ancestor element of the UI element bound to this action. This allows keyboard shortcuts to find the correct instance of the action.</td>
</tr>
<tr>
<th class="name" scope="row"><code>label</code></th>
<td class="type">string</td>
<td class="attributes"></td>
<td class="description last">Translatable label for action used in buttons, menus etc. Note: if this is a radio group action (action has choices property) the label is optional. It is used in results of the list and listShortcuts methods. Depending on what kind of UI control the action is bound to it may be used as a label for the whole group. For example using aria-label.</td>
</tr>
<tr>
<th class="name" scope="row"><code>onLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for dynamic antonyms toggle actions. This is the label when the value is true.</td>
</tr>
<tr>
<th class="name" scope="row"><code>offLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for dynamic antonyms toggle actions. This is the label when the value is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>contextLabel</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">A more descriptive label used in place of label for use in listing actions and shortcuts.</td>
</tr>
<tr>
<th class="name" scope="row"><code>icon</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The icon CSS class(es) for action may be used in buttons and menus</td>
</tr>
<tr>
<th class="name" scope="row"><code>onIcon</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for dynamic antonyms toggle actions. This is the icon CSS class(es) to use when the value is true.</td>
</tr>
<tr>
<th class="name" scope="row"><code>offIcon</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for dynamic antonyms toggle actions. This is the icon CSS class(es) to use when the value is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>iconType</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The icon type CSS class. Defaults to a-Icon. Updates to the iconType may not be supported by all control types that can be associated with actions.</td>
</tr>
<tr>
<th class="name" scope="row"><code>disabled</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Disabled state of action; true if the action is disabled and false if it is enabled. The default is enabled</td>
</tr>
<tr>
<th class="name" scope="row"><code>hide</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Hidden state of action; true if UI controls connected to this action should be hidden and false otherwise. The default is false (show).</td>
</tr>
<tr>
<th class="name" scope="row"><code>title</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The title to use as the title attribute when appropriate.</td>
</tr>
<tr>
<th class="name" scope="row"><code>shortcut</code></th>
<td class="type"><a href="actions.html#.shortcutName">actions.shortcutName</a></td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">The keyboard shortcut to invoke action (not allowed for radio group actions).</td>
</tr>
<tr>
<th class="name" scope="row"><code>href</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">For actions that navigate set href to the URL to navigate to and don't set an action function. An action of type action must have an href or action property set.</td>
</tr>
<tr>
<th class="name" scope="row"><code>target</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">For actions that navigate this is the window to open the href URL in. Only applies when href is specified. Typical value is "_blank" to open in a new tab or window. Omit to open in the current window.</td>
</tr>
<tr>
<th class="name" scope="row"><code>action</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"><em>function(event, focusElement, args):boolean</em> The function that is called when the action is invoked with <a href="actions.html#invoke">actions#invoke</a>. The action must return true if it sets focus. An action of type action must have an href or action property set. The args parameter is an optional object argument that can pass in additional data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>convertBindingArguments</code></th>
<td class="type">boolean</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Determines if arguments passed to the <code class="prettyprint">action</code> function are converted. Only applies if this action is expected to take arguments. If true then an attempt is made to convert the value of all arguments to a JavaScript value when the action is invoked by a UI control. Every attempt is made to convert the argument's string value to a JavaScript value (this includes booleans, numbers, objects, arrays, and null). A string is only converted to a number if doing so doesn't change its representation (for example, the string "100" is converted to the number 100, but "1E02" and "100.000" are left as strings because their numeric value of 100 serializes to "100"). When a string starts with '{' or '[', then <code class="prettyprint">JSON.parse</code> is used to parse it; it must follow valid JSON syntax including quoted property names. A string not parseable as a JavaScript value is not converted. If false then no conversion is done. The default is false.</td>
</tr>
<tr>
<th class="name" scope="row"><code>get</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"><em>function(args):*</em> For toggle actions this function should return true or false. For radio group actions this should return the current value. The args parameter is an optional object argument that can pass in additional data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>set</code></th>
<td class="type">function</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last"><em>function(value, args)</em> For toggle actions this receives a boolean value. For radio group actions this function receives the new value. The args parameter is an optional object argument that can pass in additional data.</td>
</tr>
<tr>
<th class="name" scope="row"><code>choices</code></th>
<td class="type">Array</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">This is only for radio group actions. Array of objects. Each object has properties: label, value, icon, iconType, shortcut, disabled, group (for select lists only)</td>
</tr>
<tr>
<th class="name" scope="row"><code>labelClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">This is only for radio group actions. Classes to add to all radio labels. This and the next two label properties are only used when rendering radio group choices.</td>
</tr>
<tr>
<th class="name" scope="row"><code>labelStartClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for radio group actions. Classes to add to last radio label</td>
</tr>
<tr>
<th class="name" scope="row"><code>labelEndClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for radio group actions. Classes to add to last radio label</td>
</tr>
<tr>
<th class="name" scope="row"><code>itemWrapClasses</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for radio group actions. Classes to add to a span wrapper element. Or to change the span use one of these prefixes: p:, li:, div:, span:<br />
For example "li:myRadio"</td>
</tr>
<tr>
<th class="name" scope="row"><code>purpose</code></th>
<td class="type">string</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">Only for link actions. The purpose determines the value for the aria-roledescription attribute to add to the link element. One of "action" or "dialog". The default is "action". Changing this property after creation has no effect.</td>
</tr>
</tbody>
</table>

#### shortcutListItem

Information about a shortcut.

##### Type:

- Object

##### Properties:

| Name | Type | Description |
|----|----|----|
| `shortcut` | string | The shortcut name. |
| `shortcutDisplay` | string | The shortcut display string. |
| `actionName` | string | The name of the action that the shortcut invokes. |
| `actionLabel` | string | The label of the action. For choice actions this includes the choice label. |

#### shortcutName

This is the string name of a keyboard shortcut. It represents the key(s) to be typed by the user and can be a single key combination or a sequence of keys. The shortcut name must be given in the following format:

```
    [Ctrl+][Alt+][Meta+][Shift+]key
```

Where strings in square brackets (\[\]) are optional and represent a modifier key. The string `key` is the name of the key and may be one of: "0"-"9", "A"-"Z" or "Help", "Backspace", "Enter", "Escape", "Space", "Page Up", "Page Down", "End", "Home", "Left", "Up", "Right", "Down", "Insert", "Delete", "Keypad 0"-"Keypad 9", "Keypad \*", "Keypad +", "Keypad -", "Keypad .", "Keypad /", "Keypad =", "Keypad Clear", "F1"-"F15", "Comma", "Period", "Semicolon", "Minus", "Quote", "Backtick", "=", "/", "\[", "\\, "\]".

Order and case is important. Key names and modifiers are not localized. The key names are based on the standard US keyboard layout and may not correspond with what is actually printed on the key caps or what character is printed (in the case of a printing key). Actions does not distinguish between left and right modifier keys.

Modifier keys have different names depending on the Operating System. Ctrl is labeled as Control on macOS and Ctrl on Windows. Alt is labeled as Option on macOS and Alt on Windows. Meta is labeled as Command on macOS and Windows icon key on Windows. See [apex.actions.setKeyCaps](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.setKeyCaps) for how the shortcut key display can be customized.

There is an Operating System sensitive special key, "CtrlOrMeta", that is replaced with Meta (Command) on macOS operating systems and Ctrl on other operating systems (such as Windows and Linux). This must be the first key listed and cannot be combined with Ctrl or Meta.

The shortcut name can be a sequence of key combinations separated by commas. The user types the shortcut by typing the first key combination followed by the second and so on. It is possible to have a sequence of length one, which allows defining shortcuts as single letters without any modifier key. Letters can be in upper or lower case.

The primary shortcut for an action is specified in the `shortcut` property of the [actions.action](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#.action) object. This is so that it can be shown in associated menu items. Additional shortcuts can be added with [actions#addShortcut](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/actions.html#addShortcut).

One limitation of shortcuts in the browser environment is that it is difficult to find keyboard combinations that are not already used for something else and are consistent across all browsers, operating systems and with all keyboard layouts. Key combinations used by the operating system or browser may not be passed on to the actions keydown handler or even if they are, the browser or operating system function has also already happened. Many keyboard layouts use the Right side Alt key (known as AltGr) to enter additional characters. The AltGr key can be simulated by pressing Ctrl+Alt. This makes some Ctrl+Alt combinations unavailable. On macOS the Option/Alt key plus a letter or number is used to produce additional characters.

See [apex.actions.shortcutSupport](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.actions.html#.shortcutSupport) for information about what kinds of shortcuts if any the user can type. If shortcut support is "off" then no shortcuts are recognized. Shortcut sequences are only recognized if shortcut support is "sequence". Shortcuts can always be defined.

When focus is in a control that allows character input then shortcuts that would produce printable characters or are used for editing are ignored by actions. This includes controls such as text fields and text areas but also controls such as select lists that support type to select.

##### Type:

- string

##### Examples

Example key combinations. Press the modifier keys in combination with the specified key: W, F7, Page Down.

```
  Ctrl+W
  Ctrl+Shift+F7
  Alt+Page Down
```

OS sensitive example key combinations. On Windows, you would press Ctrl+Y. On macOS, you would press Command+Y

```
  CtrlOrMeta+Y
```

Example key sequence. Press the first key combination Ctrl+F2 and release then press the G key and then the H key. For the second example press the C key then the S key. In the third example press C then 6 (not Shift+6). In the last example simply press W. Although the letters must be in upper case in the shortcut name they can be typed with our without the Shift modifier. All but the first example will be ignored when focus is in a control that takes character input.

```
  Ctrl+F2,G,H
  C,S
  C,6
  W
```
