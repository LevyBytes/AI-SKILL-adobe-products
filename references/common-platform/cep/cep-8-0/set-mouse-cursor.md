# Set Mouse Cursor

See http://jsfiddle.net/BfLAh/1390/

```js
$(document).mousemove(function (e) {
  $("#image").css({ left: e.pageX, top: e.pageY });
});
```
