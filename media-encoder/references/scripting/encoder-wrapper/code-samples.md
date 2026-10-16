# Code Samples

Example (click to expand):

```javascript
var format = "";
var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HighQuality720HD.epr";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";

var frontend = app.getFrontend();
if (frontend) {
  // Either format or preset can be empty, output is optional
  var encoderWrapper = frontend.addFileToBatch(source, format, preset);

  if (encoderWrapper) {
    $.writeln(
      "Frontend script engine added the source file using addFileToBatch-",
      source,
      " successfully"
    );

    $.writeln("width :", encoderWrapper.outputWidth);
    $.writeln("height:", encoderWrapper.outputHeight);
    $.writeln("outputFiles:", encoderWrapper.outputFiles);

    //input value is string please use e.g. "25"
    encoderWrapper.setFrameRate("25");

    //int, 0-Entire, 1-InToOut, 2-WorkArea, 3-Custom, 4:UseDefault
    encoderWrapper.setWorkArea(2, 0.0, 1.0);

    var usePreviewFiles = true;
    encoderWrapper.setUsePreviewFiles(usePreviewFiles);

    var useMaximumRenderQuality = true;
    encoderWrapper.setUseMaximumRenderQuality(useMaximumRenderQuality);

    var useFrameBlending = true;
    encoderWrapper.setUseFrameBlending(useFrameBlending);

    // int-0-FrameSampling, 1-FrameBlending, 2-OpticalFlow
    encoderWrapper.setTimeInterpolationType(1);

    // be aware that this method first letter is upper case
    var includeSourceXMP = true;
    encoderWrapper.SetIncludeSourceXMP(includeSourceXMP);

    var includeSourceCuePoints = false;
    encoderWrapper.setIncludeSourceCuePoints(includeSourceCuePoints);

    var cropState = true;
    encoderWrapper.setCropState(cropState);

    //int, 0-ScaleToFit, 1-ScaleToFitBeforeCrop, 2-SetAsOutputSize, 3-ScaleToFill, 4-ScaleToFillBeforeCrop, 5-StretchToFill, 6-StretchToFillBeforeCrop",
    encoderWrapper.setCropType(4);

    //int, 0-ScaleToFit, 1-ScaleToFitBeforeCrop, 2-SetAsOutputSize, 3-ScaleToFill, 4-ScaleToFillBeforeCrop, 5-StretchToFill, 6-StretchToFillBeforeCrop",
    encoderWrapper.setScaleType(4);

    // rotate clockwise, input values will be transformed into [0 - 360], so -90 is equal to 270
    encoderWrapper.setRotation(180);

    //left, top, right, bottom
    encoderWrapper.setCropOffsets(10, 20, 10, 20);

    //width and height
    encoderWrapper.setOutputFrameSize(1200, 800);

    // default is off - deprecated
    //encoderWrapper.setCuePointData();

    var encoderHostWrapper = app.getEncoderHost();
    if (encoderHostWrapper) {
      encoderHostWrapper.runBatch();
    }
  } else {
    $.writeln("encoderWrapper is not valid");
  }
} else {
  $.writeln("frontend obj is not valid");
}
```
