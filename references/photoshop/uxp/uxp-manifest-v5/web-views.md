# WebViews

UXP 6.0 provides WebViews, and they must be configured by a plugin that uses manifest v5. Manifest snippet: 

```json
{
  "manifestVersion": 5,
  "requiredPermissions": {
    "webview": {
      "allow": "yes",
      "domains": [
        "https://*.adobe.com",
        "https://*.google.com"
      ]
    }
  }
}
```

 Plugin code: 

```html
<dialog>
    <webview id="webview" width="100%" height="360px" src="https://www.adobe.com"></webview>
</dialog>
```

 

```javascript
document.querySelector("dialog").showModal();
```

 [Figure: Webview](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/uxp-guide/uxp-misc/manifest-v5/webview-example.png)
