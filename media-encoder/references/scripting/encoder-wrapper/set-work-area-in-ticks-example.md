# setWorkAreaInTicks example

setWorkAreaInTicks Example (click to expand):

```javascript
var format = "H.264";

var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HD 720p.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HD 720p.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

// The value of ticksPerSecond is predefined in premiere pro and ame.
// For more information please have a look into https://ppro-scripting.docsforadobe.dev/other/time.html
var ticksPerSecond = 254016000000;
var startTimeInTicks = 20 * ticksPerSecond;
var timeToAddInTicks = 30 * ticksPerSecond;

var startTimeinTicksStr = String(startTimeInTicks);
var endTimeInTicksStr = String(timeToAddInTicks);

var frontend = app.getFrontend();
if (frontend) {
  var encoderWrapper = frontend.addFileToBatch(
    source,
    format,
    preset,
    destination
  );
  if (encoderWrapper) {
    $.writeln("workarea start time: ", startTimeinTicksStr);
    $.writeln("workarea end time: ", endTimeInTicksStr);
    encoderWrapper.setWorkAreaInTicks(
      2,
      startTimeinTicksStr,
      endTimeInTicksStr
    );
  } else {
    $.writeln("encoderWrapper is not valid");
  }
  var encoderHost = app.getEncoderHost();
  if (encoderHost) {
    encoderHost.runBatch();
  } else {
    $.writeln("encoderHost is not valid");
  }
} else {
  $.writeln("frontend is not valid");
}
```
