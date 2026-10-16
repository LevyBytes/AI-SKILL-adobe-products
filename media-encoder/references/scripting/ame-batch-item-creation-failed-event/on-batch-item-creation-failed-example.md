# onBatchItemCreationFailed example

onBatchItemCreationFailed Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia.mp4";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia.mp4"

var frontend = app.getFrontend();
if (frontend) {
  frontend.addEventListener("onBatchItemCreationFailed", function (eventObj) {
    $.writeln("Sourcefile", eventObj.srcFilePath);
    $.writeln("onBatchItemCreationFailed: error", eventObj.error);
  });

  var batchItemSuccess = frontend.addItemToBatch(source);
  if (batchItemSuccess) {
    $.writeln(source, " has been added successfully");
  }
}
```
