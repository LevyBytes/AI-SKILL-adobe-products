# status example

status Example (click to expand):

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
    "onBatchItemStatusChanged",
    function (eventObj) {
      //Possible status values:
      // 0 : Waiting
      // 1 : Done
      // 2 : Failed
      // 3 : Skipped
      // 4 : Encoding
      // 5 : Paused
      // 6 : Stopped
      // 7 : Any
      // 8 : AutoStart
      // 9 : Done Warning
      // 10 : Watch Folder Waiting.
      $.writeln("Batch item status: " + eventObj.status);
    },
    false
  );

  // Alternatively you can access the correct name of that event via the following const property:
  var batchItemStatusChangedEvent = AMEExportEvent.onBatchItemStatusChanged;
  exporter.addEventListener(
    batchItemStatusChangedEvent,
    function (eventObj) {
      //Possible status values:
      // 0 : Waiting
      // 1 : Done
      // 2 : Failed
      // 3 : Skipped
      // 4 : Encoding
      // 5 : Paused
      // 6 : Stopped
      // 7 : Any
      // 8 : AutoStart
      // 9 : Done Warning
      // 10 : Watch Folder Waiting.
      $.writeln("Batch item status (alt): " + eventObj.status);
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```
