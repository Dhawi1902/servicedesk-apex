<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.widget.html -->
<!-- Namespaces: apex.widget -->

# Namespace: widget

## QuickNav

### [Functions](#methods-section)

- [initPageItem](#.initPageItem)
- [waitPopup](#.waitPopup)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html).widget

The apex.widget namespace stores all the general purpose widget related functions of Oracle APEX.

### Functions

#### (static) initPageItem()

This function is a wrapper around [apex.item.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.create). It is for backward compatibility. See [apex.item.create](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.item.html#.create) for details.

Deprecated:
- Yes

#### (static) waitPopup(pContentopt) → {Object}

Shows a wait popup. A wait popup consists of an overlay div that keeps the user from clicking on any part of the page along with a visual "spinner" animation of some kind. It does not keep the user from interacting with the page using the keyboard.

This is intended to be used just prior to submitting the page such that the page (and hence this popup) will soon be replaced with a new page. If you do need to close the popup, use the "remove" function of the returned object. See [apex.util.showSpinner](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.showSpinner) and [apex.util.delayLinger](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.delayLinger.html) for a low level solution more suitable for ajax requests or other long-running processes.

This function is rarely needed because it is automatically called in [apex.page.submit](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.page.html#.submit) based on the showWait option. Also typically ajax operations don't require an overlay to disable clicking.

##### Parameters:

<table class="params" aria-label="Parameters for waitPopup">
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
<th class="name" scope="row"><code>pContent</code></th>
<td class="type">String</td>
<td class="attributes">&lt;optional&gt;<br />
</td>
<td class="description last">HTML code for a wait indicator. If it is not provided, the default CSS animation wait indicator will be displayed.</td>
</tr>
</tbody>
</table>

##### Returns:

Object with a no argument function "remove" that closes the popup.

Type
Object

##### Example

The following example shows a wait spinner and disables clicking on the page while some long-running ajax action takes place and then removes the spinner when it is done.

```
var popup = apex.widget.waitPopup();
var promise = apex.server.process(...);
promise.always(function() {
    popup.remove();
});
```
