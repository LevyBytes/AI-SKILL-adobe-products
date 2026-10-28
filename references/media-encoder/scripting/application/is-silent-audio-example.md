# isSilentAudio example

isSilentAudio Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia.mp4";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia.mp4"

var silent = app.isSilentAudio(source);
if (silent) {
  $.writeln("The input file has no audio");
}
```
