# WebViewPermission

Allows plugin UI to include webviews for web content or complex interfaces.

**Example**

```json
{
  "allow": "yes",
  "domains": ["https://example.com"],
  "enableMessageBridge": "localAndRemote"
}
```

Plugin code can then include a webview like this:

```html
<webview src="https://example.com" />
```

Use the message API for communication between the webview and the plugin:

```javascript
// In the plugin:
const webview = document.querySelector("webview");
webview.addEventListener("message", (event) => {
    console.log("Received message from webview:", event.data);
    webview.postMessage("Hello from the plugin!");
});

// In the webview:
window.addEventListener("message", (event) => {
    console.log("Received message from plugin:", event.data);
    window.uxpHost.postMessage("Hello from the webview!");
});
```

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `allow` \* | `"yes"` | required | Set this to `"yes"` to turn webviews on. |
| `domains` \* | `string[] \| "all"` | required | Domains available to the plugin, either as a domain list or as `"all"` for unrestricted domain access. |
| `enableMessageBridge` | `"no" \| "localAndRemote"` | optional | Controls whether message API communication between the plugin and webview is available. **Default value** `"no"` |

For details, consult the [WebView API reference](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/cba672dce97bcb5805baaa7558d83abbabd825f6/src/pages/reference/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md), or start from the webview-starter template plugin in UDT.
