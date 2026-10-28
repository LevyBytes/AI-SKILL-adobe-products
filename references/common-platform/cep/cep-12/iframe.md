# iframe

Many HTTPS sites cannot be embedded in an iframe when they send the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) header. To show HTTPS content another way, set `window.location.href`, for example:

**iFrame alternative for HTTPS content**

```html
<body onLoad="onLoaded()">

</body>

<script>
function onLoaded() {
  window.location.href = "https://www.trello.com";
}

</script>
```
