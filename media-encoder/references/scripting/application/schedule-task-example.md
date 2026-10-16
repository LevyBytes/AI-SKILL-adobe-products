# scheduleTask example

scheduleTask Example (click to expand):

```javascript
var format = "";
var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HighQuality720HD.epr";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";

var frontend = app.getFrontend();
if (frontend) {
  // Either format or preset can be empty, output is optional
  var encoderWrapper = frontend.addFileToBatch(source, format, preset);

  if (encoderWrapper) {
    var taskID = app.scheduleTask(
      "var e = app.getEncoderHost(); e.runBatch()",
      5000,
      false
    );
  } else {
    $.writeln("Encoder wrapper object is not valid.");
  }
} else {
  $.writeln("Frontend object is not valid.");
}
```
