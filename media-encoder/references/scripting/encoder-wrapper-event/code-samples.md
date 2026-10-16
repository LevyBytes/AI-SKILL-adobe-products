# Code Samples

Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var exporter = app.getExporter();
if (exporter) {
  var encoderWrapper = exporter.exportItem(source, destination, preset);
  if (encoderWrapper) {
    encoderWrapper.addEventListener(
      "onEncodeFinished",
      function (eventObj) {
        $.writeln("Encoding result: " + eventObj.result);
      },
      false
    );
    encoderWrapper.addEventListener(
      "onEncodeProgress",
      function (eventObj) {
        $.writeln("Encoding progress: " + eventObj.result);
      },
      false
    );

    // listen to the audio pre-encoding progress event (available since 24.0.)
    encoderWrapper.addEventListener(
      "onAudioPreEncodeProgress",
      function (eventObj) {
        $.writeln("Audio pre-encoding info: " + eventObj.audioInfo);
        $.writeln("Audio pre-encoding progress: " + eventObj.audioProgress);
      },
      false
    );
  }
}
```
