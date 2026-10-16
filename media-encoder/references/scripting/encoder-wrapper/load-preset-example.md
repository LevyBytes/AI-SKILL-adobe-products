# loadPreset example

loadPreset Example (click to expand):

```javascript
var format = "";
var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HighQuality720HD.epr";

var differentPreset = "C:\\testdata\\High Quality 1080 HD.epr";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var differentPreset = "/Users/Shared/testdata/High Quality 1080 HD.epr";

var frontend = app.getFrontend();
if (frontend) {
  // Either format name or presetPath can be empty, output filepath is optional
  var encoderWrapper = frontend.addFileToBatch(source, format, preset);
  if (encoderWrapper) {
    encoderWrapper.loadPreset(differentPreset);
  } else {
    $.writeln("EncoderWrapper object is not valid");
  }
} else {
  $.writeln("Frontend object is not valid");
}
```
