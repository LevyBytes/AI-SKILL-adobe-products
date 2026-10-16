# iframe

Many HTTPS sites cannot be hosted in an iframe when the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) header blocks framing. A practical alternative for HTTPS content is navigation through `window.location.href`, for example:

**iFrame alternative for HTTPS content**

```html
// html
<body onLoad="onLoaded()"></body>

// javascript function onLoaded() { window.location.href = "https://www.trello.com"; }
```
