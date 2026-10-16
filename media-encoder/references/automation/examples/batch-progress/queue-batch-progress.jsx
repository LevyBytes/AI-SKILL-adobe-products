#include "batch-progress-listeners.jsx"
// Please use this event when you have multiple batch items in the queue (added manually or via a script as below)
// to ensure you receive all event types
var source_1 = "C:\\testdata\\testmedia1.mxf";
var source_2 = "C:\\testdata\\testmedia2.mxf";
var source_3 = "C:\\testdata\\testmedia3.mxf";

// //sources for mac
// var source_1 = "/Users/Shared/testdata/testmedia1.mxf"
// var source_2 = "/Users/Shared/testdata/testmedia2.mxf";
// var source_3 = "/Users/Shared/testdata/testmedia3.mxf";

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("frontend.onItemAddedToBatch: success");
  });

  var batchItemSuccess_1 = frontend.addItemToBatch(source_1);
  var batchItemSuccess_2 = frontend.addItemToBatch(source_2);
  var batchItemSuccess_3 = frontend.addItemToBatch(source_3);
  if (batchItemSuccess_1 && batchItemSuccess_2 && batchItemSuccess_3) {
    $.writeln(
      "Batch item added successfully for the source files ",
      source_1 + " , " + source_2 + " , " + source_3
    );

    var encoderHost = app.getEncoderHost();
    if (encoderHost) {
      registerBatchProgressEvents(encoderHost);
      encoderHost.runBatch();
    } else {
      $.writeln("encoderHost not valid");
    }
  } else {
    $.writeln("batch item wasn't added successfully");
  }
} else {
  $.writeln("frontend not valid");
}
