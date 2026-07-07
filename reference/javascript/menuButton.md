<!-- Source: https://docs.oracle.com/en/database/oracle/apex/24.2/aexjs/menuButton.html -->
<!-- Widgets: menuButton -->

# Widget: menuButton

## menuButton

This is not an actual jQuery UI widget. It is just special markup that can be given to a normal button element so that it opens a [menu](https://docs.oracle.com/en/database/oracle/apex/24.2/aexjs/menu.html). All the behaviors are implemented by the menu widget module.

The menu widget includes support for easily associating a menu with a button such that clicking the button toggles the specified menu. Toggling the menu means to open it if it is closed and close it if it is open. To turn a button into a menu button give it a data attribute, `data-menu`, with the menu id to open as the value. When the menu is open the button will have the `is-active` class added and it will be removed when the menu closes.

Note: If the button is dynamically added after the page loads you need to include button attributes `aria-haspopup="menu"` for proper accessibility.

### Keyboard End User Information

The normal button activation keys Space and Enter will toggle the menu. In addition the Down Arrow key will also toggle the menu unless Down Arrow is used for another purpose such as navigating in a list or grid.

Since:
- 5.0

##### Example

This is the markup that associates a menu with id myMenu with the button.

```
    <button type="button" data-menu="myMenu" class="...">Menu</button>
```
