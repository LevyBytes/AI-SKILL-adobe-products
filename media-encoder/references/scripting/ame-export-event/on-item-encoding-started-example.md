# onItemEncodingStarted example

onItemEncodingStarted Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var itemEncodingStartedEvent = AMEExportEvent.onItemEncodingStarted;
$.writeln(
  "Event name is identical with the const property API name ('onItemEncodingStarted'): " +
    itemEncodingStartedEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    itemEncodingStartedEvent,
    function (eventObj) {
      $.writeln("Encoding started for batch item.");
    },
    false
  );

  // Alternatively you can listen to "onItemEncodingStarted"
  exporter.addEventListener(
    "onItemEncodingStarted",
    function (eventObj) {
      $.writeln("Encoding started for batch item (alt).");
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```
