<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.delayLinger.html -->
<!-- Namespaces: apex.util.delayLinger -->

# Namespace: delayLinger

## QuickNav

### [Functions](#methods-section)

- [finish](#.finish)
- [start](#.start)

## [apex](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.html)[.util](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html).delayLinger

The delayLinger namespace solves the problem of flashing progress indicators (such as spinners).

For processes such as an Ajax request (and subsequent user interface updates) that may take a while it is important to let the user know that something is happening. The problem is that if an async process is quick there is no need for a progress indicator. The user experiences the UI update as instantaneous. Showing and hiding a progress indicator around an async process that lasts a very short time causes a flash of content that the user may not have time to fully perceive. At best this can be a distraction and at worse the user wonders if something is wrong or if they missed something important. Simply delaying the progress indicator doesn't solve the problem because the process could finish a short time after the indicator is shown. The indicator must be shown for at least a short but perceivable amount of time even if the request is already finished.

You can use this namespace to help manage the duration of a progress indication such as [apex.util.showSpinner](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.showSpinner) or with any other progress implementation. Many of the Oracle APEX asynchronous functions such as the ones in the [apex.server](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.server.html) namespace already use delayLinger internally so you only need this API for your own custom long-running asynchronous processing.

### Example

This example shows using [apex.util.delayLinger.start](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.delayLinger.html#.start) and [apex.util.delayLinger.finish](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.delayLinger.html#.finish) along with [apex.util.showSpinner](https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/apex.util.html#.showSpinner) to show a progress spinner, only when needed and for long enough to be seen, around a long-running asynchronous process started in function doLongProcess.

```
var lSpinner$, lPromise;
lPromise = doLongProcess();
apex.util.delayLinger.start( "main", function() {
    lSpinner$ = apex.util.showSpinner( $( "#container_id" ) );
} );
lPromise.always( function() {
    apex.util.delayLinger.finish( "main", function() {
        lSpinner$.remove();
    } );
} );
```

### Functions

#### (static) finish(pScopeName, pAction)

Call this function when the potentially long-running async process finishes. For each call to start with a given `pScopeName`, a corresponding call to finish with the same `pScopeName` must be made. The `pAction` is called exactly once if and only if the corresponding start `pAction` was called. If there are multiple calls to finish the `pAction` from the last one is called.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pScopeName` | string | A unique name for each unique progress indicator. |
| `pAction` | function | A no argument function to call to hide and/or remove the progress indicator. This function is only called if the action passed to start was called. |

#### (static) start(pScopeName, pAction)

Call this function when a potentially long-running async process starts. For each call to start with a given `pScopeName`, a corresponding call to finish with the same `pScopeName` must be made. Calls with different `pScopeName` arguments will not interfere with each other.

Multiple calls to start for the same `pScopeName` before any calls to finish is allowed but only the `pAction` from the first call is called at most once.

##### Parameters:

| Name | Type | Description |
|----|----|----|
| `pScopeName` | string | A unique name for each unique progress indicator. |
| `pAction` | function | A no argument function to call to display the progress indicator. This function may or may not be called depending on how quickly finish is called. |
