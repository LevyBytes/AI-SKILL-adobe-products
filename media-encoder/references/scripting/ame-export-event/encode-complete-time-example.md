# encodeCompleteTime example

encodeCompleteTime Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var exporter = app.getExporter();
if (exporter) {
  exporter.addEventListener(
    "onEncodeComplete",
    function (eventObj) {
      $.writeln(
        "Encode Complete Time in milli seconds: " + eventObj.encodeCompleteTime
      );
    },
    false
  );

  // Alternatively you can access the correct name of that event via the following const property:
  var encodeCompleteEvent = AMEExportEvent.onEncodeComplete;
  exporter.addEventListener(
    encodeCompleteEvent,
    function (eventObj) {
      $.writeln(
        "Encode Complete Time in milli seconds: (alt): " +
          eventObj.encodeCompleteTime
      );
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```
