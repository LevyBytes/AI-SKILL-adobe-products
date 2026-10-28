# Issue 1 (CEP 11) : evalScript callback is not triggered in cross-site iFrames

Beginning with CEP-11, JavaScript cannot access a cross-origin `<iframe>`. The browser same-origin policy blocks scripts from reaching frames that use a different origin.

An origin counts as Cross-Site when any of these address components differs:
`protocol://hostname:port/...`
To access a frame, your domain must match protocol, hostname, and port.

**Workaround**
Although the same-origin policy prevents direct script access to content from another origin, pages that you control on both sides can exchange messages with window.postMessage and the related message event:

In the Cross-Site `<iframe>` child, call:

`mainFrameWindow.postMessage(/*any variable or object or evalscript*/, 'http://your-main-site.com');`

The second argument to postMessage() may be '\*' when no destination-origin preference is specified. Prefer an explicit target origin whenever possible, so the data you send is not exposed to an unintended site.

In your main page:

Use only for a frame whose scripts you explicitly trust to run in the Adobe host. Pass its exact origin, the iframe element and result callback; call the returned function to remove the listener.

```javascript
function receiveTrustedFrameScripts(frame, expectedOrigin, onResult) {
    var cs = new CSInterface();
    var origin = new URL(expectedOrigin).origin;
    if (origin === "null") throw new Error("An explicit web origin is required");
    function receive(event) {
        if (event.origin !== origin || event.source !== frame.contentWindow) return;
        if (typeof event.data !== "string") return;
        cs.evalScript(event.data, onResult);
    }
    window.addEventListener("message", receive);
    return function stop() { window.removeEventListener("message", receive); };
}
```

The same messaging pattern works in both directions by adding a listener in the cross-site child frame and returning responses from the Mainframe. It can also be used to run CEP EvalScript from cross-site child frames: send the EvalScript as an event from the Cross-Site child frame to the Main Page, then invoke EvalScript from the Main Page/Frame.
