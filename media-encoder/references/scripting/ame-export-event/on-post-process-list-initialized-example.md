# onPostProcessListInitialized example

onPostProcessListInitialized Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var postProcessListInitializedEvent =
  AMEExportEvent.onPostProcessListInitialized;
$.writeln(
  "Event name is identical with the const property API name ('onPostProcessListInitialized'): " +
    postProcessListInitializedEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    postProcessListInitializedEvent,
    function (eventObj) {
      $.writeln("Post process list has been initialized.");
    },
    false
  );

  // Alternatively you can listen to "onPostProcessListInitialized"
  exporter.addEventListener(
    "onPostProcessListInitialized",
    function (eventObj) {
      $.writeln("Post process list has been initialized (alt).");
    },
    false
  );

var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```
