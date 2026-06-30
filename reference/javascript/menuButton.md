<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menuButton.html -->
<!-- Widgets: menuButton -->

# Widget: menuButton

## menuButton

This is not an actual jQuery UI widget. It is just special markup that can be given to a normal button element so that it opens a [menu](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/menu.html). All the behaviors are implemented by the menu widget module.

The menu widget includes support for easily associating a menu with a button such that clicking the button toggles the specified menu. Toggling the menu means to open it if it is closed and close it if it is open. To turn a button into a menu button give it a data attribute, `data-menu`, with the menu id to open as the value. When the menu is open the button will have the `is-active` class added, and it will be removed when the menu closes. It will also manage the necessary accessibility related attributes.

The menu is normally positioned start aligned at the block end (bottom) edge of the button. If there isn't enough room for the menu below the button it is positioned above the button. To open the menu on the side of the button add data attribute `data-menu-position="inline"`. The menu is positioned top aligned at the inline end edge of the button. If there isn't enough room for the menu it will be positioned on the other side.

Note: If the button is dynamically added after the page loads you need to include button attributes `aria-haspopup="menu"` and `aria-expanded="false"` for proper accessibility.

A menu button serves only one purpose, which is to open a menu. There is a variation where the button performs some action but on mouse hover, after a short delay, it will open a menu. This is known as a hover menu button. (It serves the same purpose as the menu bar split menu item.) Unlike menu buttons, a hover menu can also apply to an anchor link. To create a hover menu button or link add a data attribute `data-hover-menu`, with the menu id to open as the value.

Do not use `data-hover-menu` on an element that does nothing other than open the menu since that is a case for a menu button.

The hover menu button or link must have `aria-expanded="false"` and it must not have an `aria-haspopup` attribute. The `data-menu-position="inline"` attribute can also be used. A difference with hover menus is that they close when the mouse is no longer over them.

### Keyboard End User Information

The normal button activation keys, Space and Enter, will open the menu. In addition, the Down Arrow key will also open the menu. If the menu opens on the side of the button, the Left Arrow or Right Arrow keys will open the menu. Note, if the arrow key is used for another purpose such as navigating in a list or grid then it may not work to open the menu.

For a hover menu the normal link activation Enter key will navigate to the link's location and the normal button activation keys, Space and Enter, will perform the button's action. To open a hover menu use the arrow keys. For menus that open above or below use the Up or Down arrow key. For menus that open before or after (inline) use the Left or Right arrow key.

Since:
- 5.0

##### Examples

This is the markup that associates a menu with id myMenu with the button.

```
    <button type="button" data-menu="myMenu" class="...">Menu</button>
```

This example shows the markup to use when a button is added dynamically to the page including the aria attributes.

```
    <button type="button" data-menu="myMenu" aria-haspopup="menu" aria-expanded="false" class="...">Menu</button>
```

This example will open the menu on the side of the button. This may be useful when multiple buttons are arranged vertically.

```
    <button type="button" data-menu="myMenu" data-menu-position="inline" class="...">Menu</button>
```

This example creates a hover menu link on a vertically arranged icon link.

```
    <a href="someurl" data-hover-menu="myMenu" data-menu-position="inline" aria-expanded="false" class="t-Button">

    </a>
```
