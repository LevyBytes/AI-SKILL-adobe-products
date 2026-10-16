# removeAllBatchItems example

removeAllBatchItems Example (click to expand):

```javascript
// Preparation: Be sure there are some batch items in the queue. Otherwise create them via scripting API's or directly in the UI
// since we need some batch item in the queue to verify the API removeAllBatchItems
var exporter = app.getExporter();
if (exporter) {
  var success = exporter.removeAllBatchItems();
  $.writeln("Remove all batch items was successful: " + success);
}
```
