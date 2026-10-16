# Set Mouse Cursor

See http://jsfiddle.net/BfLAh/1390/

```javascript
$(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});
```
