# iframe

Several HTTPS sites block iframe hosting through the [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) header. A practical alternative displays HTTPS content by assigning `window.location.href`, e.g.

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
