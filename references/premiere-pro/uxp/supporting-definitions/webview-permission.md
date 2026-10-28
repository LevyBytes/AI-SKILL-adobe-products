# `WebviewPermission`

`WebviewPermission` enables webviews in plugin UI, whether for web content or complex interfaces.

```json
{
  "allow": "yes",
  "domains": ["https://example.com"],
  "enableMessageBridge": "localAndRemote"
}
```

Plugin code can place a webview like this:

```html
<webview src="https://example.com" />
```

Use the message API for communication between the plugin and the webview:

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

| Required Properties | Optional Properties |
| --- | --- |
| [`allow`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#allow) | [`enableMessageBridge`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#enablemessagebridge) |
| [`domains`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/manifest/index.md#domains) |  |
