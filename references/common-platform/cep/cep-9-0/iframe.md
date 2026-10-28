# iframe

The `X-Frame-Options` header blocks iframe hosting for many HTTPS sites. Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options. As an alternative for showing HTTPS content, assign `window.location.href`, for example:

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
