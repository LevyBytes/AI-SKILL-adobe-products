# AME Scripting Guide — What is a good starting point to understand the scripting objects?

Start from this minimal script:

```javascript
// make sure to replace "\\" by "/" on Mac with a valid path
var source = "D:\\full\\path\\to\\camera3.mxf";
var preset = "D:\\full\\path\\to\\AME\\MediaIO\\systempresets\\58444341_4d584658\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\full\\path\\to\\Output\\test";

var exporter = app.getExporter();

if (exporter) {

   exporter.addEventListener("onEncodeComplete", function(eventObj) {
        // We can get the encoding status from the event or from the exporter
        $.writeln("Encode Complete Status: " + eventObj.encodeCompleteStatus);

        var encodeSuccess = exporter.encodeSuccess;
        $.writeln("Encode Complete Status alt: " + encodeSuccess);
    }, false)

    exporter.addEventListener("onError", function(eventObj) {
        // We can get the encoding status from the event or from the exporter
        $.writeln("Error while encoding");

        var encodeSuccess = exporter.encodeSuccess;
        $.writeln("Encode Complete Status: " + encodeSuccess);
    }, false)

    var encoderWrapper  = exporter.exportItem(source, destination, preset);
}
```

Encoding a source file in AME requires paths for the source file, the destination folder, and the preset that should be applied.

After the encode completes successfully, the onEncodeComplete event listener runs.
