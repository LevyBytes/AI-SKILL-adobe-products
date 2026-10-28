# isBlackVideo example

isBlackVideo Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia.mp4";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia.mp4"

var blackVideo = app.isBlackVideo(source);
if (blackVideo) {
  $.writeln("The input file has only black frames");
}
```
