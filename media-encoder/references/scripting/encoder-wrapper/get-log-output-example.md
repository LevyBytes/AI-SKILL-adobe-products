# getLogOutput example

getLogOutput Example (click to expand):

```javascript
var format = "H.264";
var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HighQuality1080_HD.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HighQuality1080_HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var frontend = app.getFrontend();
if (frontend) {
  /**
   * getLogOutput() returns a string in JSON format containing the possible errors and warnings as well as the summary of the batch item
   * that is added to the queue.
   *
   * The getLogOutput() method is implemented in the EncoderWrapperScriptObject.
   * You can use getLogOutput() method when you have used one of these following methods:
   *
   * FrontEndScriptObject:
   * - addFileToBatch()
   * - addDLToBatch()
   * - addTeamProjectsItemToBatch()
   * - stitchFiles()
   * In Addition it is possible to get the batch item status with
   * encoderWrapper.addEventListener("onEncodeFinished", handler) Here you will get "Done!", "Failed!", "Stopped!"
   *
   * ExportScriptObject:
   * - exportItem()
   * - getSourceMediaInfo()
   * In Addition it is possible to get the batch item status with
   * exporter.addEventListener("onBatchItemStatusChanged", handler) Here you will get integer values see ExportScriptObject for the details
   *
   * EncoderHostWrapper:
   * - createEncoderForFormat()
   *
   * Output format is
   *    {
   *        "time": "2023-01-16T12:18:36.617946",
   *        "error": "",
   *        "summary": []
   *    }
   */

  var encoderWrapper = frontend.addFileToBatch(
    source,
    format,
    preset,
    destination
  );
  if (encoderWrapper) {
    $.writeln("Batch item is successfully added to the queue: ", source);

    encoderWrapper.addEventListener("onEncodeFinished", function (eventObj) {
      // return the log output in JSON Format
      $.writeln(encoderWrapper.getLogOutput());
    });

    // get encoder host to run batch
    var encoderHost = app.getEncoderHost();
    if (encoderHost) {
      encoderHost.runBatch();
    } else {
      $.writeln("EncoderHostScriptObject is not valid");
    }
  } else {
    $.writeln(
      "EncoderWrapperScriptObject is not valid - batch item wasn't added successfully"
    );
  }
} else {
  $.writeln("FrontendScriptObject is not valid");
}
```
