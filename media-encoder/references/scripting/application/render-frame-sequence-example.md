# renderFrameSequence example

renderFrameSequence Example (click to expand):

```javascript
var source = "C:\\testdata\\testmedia4.mp4";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var destination = "/Users/Shared/testdata/outputFolder/output.mp4;

var renderall = true;
var startTime = 0;
var success = app.renderFrameSequence(
  source,
  destination,
  renderall,
  startTime
);
if (success) {
  $.writeln("renderFrameSequence() successfully done");
}
```
