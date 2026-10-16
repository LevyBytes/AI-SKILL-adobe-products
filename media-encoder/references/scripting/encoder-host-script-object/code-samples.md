# Code Samples

Example (click to expand):

```javascript
var format = "H.264"; // e.g. H.264
var source = "C:\\testdata\\testmedia1.mxf";
var outputFile = "C:\\testdata\\outputFolder\\output.tiff";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia1.mxf"
// var outputFile = "/Users/Shared/testdata/outputFolder/output.tiff";

var encoderHost = app.getEncoderHost();

if (encoderHost) {
  encoderHost.addEventListener(
    "onBatchEncoderStatusChanged",
    function (eventObj) {
      $.writeln(
        "onBatchEncoderStatusChanged to status: " + eventObj.batchEncoderStatus
      );
    }
  );

  // API "getSourceInfo"
  var sourceMediaInfo = encoderHost.getSourceInfo(source);
  if (sourceMediaInfo) {
    // For 'sourceMediaInfo' you can now call properties of the 'SourceMediaInfo' script object, e.g.:
    // (See detailed info in the documentation of 'SourceMediaInfo')
    $.writeln(
      "Embedded description of the source: " + sourceMediaInfo.description
    );
  }

  // API "getFormatList"
  var formatList = encoderHost.getFormatList();
  $.writeln("formatList: " + formatList);

  // API "createEncoderForFormat"
  var encoderWrapper = encoderHost.createEncoderForFormat(format);
  if (encoderWrapper) {
    // For 'encoder' you can now call properties/methods of the 'EncoderWrapper" script object, e.g.:
    // (See detailed info in the documentation of 'EncoderWrapper')
    var frameRate = "25";
    encoderWrapper.setFrameRate(frameRate);
  }

  // API "isBatchRunning"
  var isBatchRunning = encoderHost.isBatchRunning();
  // With the current script the return value should be 'false' since no batch (job) is running.
  // After adding batch items (see FrontendScriptObject) and calling encoderHost.runBatch() this method returns 'true' as long as a job is running.
  $.writeln("isBatchRunning: " + isBatchRunning);

  // API "getBatchEncoderStatus"
  var batchStatus = encoderHost.getBatchEncoderStatus();
  // expected value is "stopped", because the batch had not been started.
  // The values are: invalid, paused, running, stopped, stopping
  $.writeln("batch status is: " + batchStatus);

  // API "runBatch" (always returns true and therefore it's not necessary to store the result)
  encoderHost.runBatch();

  // API "pauseBatch" (always returns true and therefore it's not necessary to store the result)
  encoderHost.pauseBatch();

  // API "stopBatch" (always returns true and therefore it's not necessary to store the result)
  encoderHost.stopBatch();

  // API "getCurrentBatchPreview"
  var result = encoderHost.getCurrentBatchPreview(outputFile);
  $.writeln("result: " + result);

  // API "getSupportedImportFileTypes"
  var supportedFileTypes = encoderHost.getSupportedImportFileTypes();
  $.writeln("supportedFileTypes: " + supportedFileTypes);
} else {
  $.writeln("encoderHost script object not defined");
}
```
