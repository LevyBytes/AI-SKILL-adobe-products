# Ame Scripting Guide, How Do I Run Scripts In Ame, What Is A Good Starting Point To Understand The Scripting Objects, Where Can I Ask More Questions And Get Help ...

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AME Scripting Guide; How do I run scripts in AME?; What is a good starting point to understand the scripting objects?; Where can I ask more questions and get help?; Adobe Media Encoder (AME) Scripting API Reference (A-Z); AMEBatchItemCreationFailedEvent; AMEExportEvent; AMEFrontendEvent; Application.

## AME Scripting Guide

This community-run project covers Extendscript use with Adobe Media Encoder.

## How do I run scripts in AME?

### AME Scripting Guide — How do I run scripts in AME?

As in Premiere Pro, Visual Studio Code with the "ExtendScript Debugger" extension can send scripts from VS Code into AME and debug them inside the application. Open the script, choose the target, then run or debug it.

Scripts can also be started from a Mac or Windows command line with this form:

```
<fullPathToAMEbinary> --console es.processFile <fullPathToScript>
```

Mac example for running a test script:

```
"/Applications/Adobe Media Encoder (Beta)/Adobe Media Encoder (Beta).app/
 Contents/MacOS/Adobe Media Encoder (Beta)"
 --console es.processFile ~/Desktop/test.js
```

## What is a good starting point to understand the scripting objects?

### AME Scripting Guide — What is a good starting point to understand the scripting objects?

Start from this minimal script:

```
// make sure to replace "\\" by "/" on Mac with a valid path
var source = "D:\\full\\path\\to\\camera3.mxf";
var preset = "D:\\full\\path\\to\\AME\\MediaIO\\systempresets\\58444341_4d584658\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\full\\path\\to\\Output\\test";

var exporter = app.getExporter();

if (exporter) {
   var encoderWrapper  = exporter.exportItem(source, destination, preset);

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

}
```

Encoding a source file in AME requires paths for the source file, the destination folder, and the preset that should be applied.

After the encode completes successfully, the onEncodeComplete event listener runs.

## Where can I ask more questions and get help?

### AME Scripting Guide — Where can I ask more questions and get help?

For questions beyond this page, use the Adobe Media Encoder forum: https://community.adobe.com/t5/adobe-media-encoder/ct-p/ct-media-encoder

## Adobe Media Encoder (AME) Scripting API Reference (A-Z)

Revision date: 2023-09-04

## AMEBatchItemCreationFailedEvent

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — AMEBatchItemCreationFailedEvent

AME sends this event when batch item creation fails. It applies to these FrontendScriptObject APIs: 'addFileToBatch', 'addTeamProjectsItemToBatch' and 'addDLToBatch'.

### Properties

error: string : Retrieves the error text.

onBatchItemCreationFailed: constant string : Signals that batch item creation failed.

srcFilePath: string : Retrieves srcFilePath.

### Code Samples

onBatchItemCreationFailed Example (click to expand):

```
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

## AMEExportEvent

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — AMEExportEvent

Available event types are: onMediaInfoCreated, onBatchItemStatusChanged, onItemEncodingStarted, onAudioPreEncodeProgress, onEncodingItemProgressUpdated, onEncodeComplete, onError, onPostProcessListInitialized.

### Properties

audioInfo: string : Supplies audio pre-encoding information for onAudioPreEncodeProgress (available since 24.0).

audioProgress: float : Supplies audio pre-encoding progress for onAudioPreEncodeProgress (available since 24.0).

encodeCompleteStatus: bool : Reports true after a batch item finishes encoding; available on onEncodeComplete.

encodeCompleteTime: float : Provides the encoding duration in milliseconds for onEncodeComplete.

groupIndex: unsigned int : Provides the batch group index for onBatchItemStatusChanged.

itemIndex: unsigned int : Provides the batch item index for onBatchItemStatusChanged.

onAudioPreEncodeProgress: constant string : Signals audio pre-encode progress changes (available since 24.0).

onBatchItemStatusChanged: constant string : Signals a batch item status change; call groupIndex, itemIndex, and status for details.

onEncodeComplete: constant string : Signals that the batch item has been encoded; use encodeCompleteStatus and encodeCompleteTime for details.

onEncodingItemProgressUpdated: constant string : Signals encoding progress.

onError: constant string : Signals an encoding error for the batch item.

onItemEncodingStarted: constant string : Signals that encoding has started for a batch item.

onMediaInfoCreated: constant string : Signals that media info has been created.

onPostProcessListInitialized: constant string : Signals that the post process list has been initialized.

progress: float : Provides the batch item encoding progress from 0 to 1 for onEncodingItemProgressUpdated.

status: unsigned int : Provides the batch item status for onBatchItemStatusChanged. Values are: 0 : Waiting, 1 : Done, 2 : Failed, 3 : Skipped, 4 : Encoding, 5 : Paused, 6 : Stopped, 7 : Any, 8 : AutoStart, 9 : Done Warning, 10 : Watch Folder Waiting.

### Code Samples

encodeCompleteStatus Example (click to expand):

```
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
    "onEncodeComplete",
    function (eventObj) {
      $.writeln("Encode Complete Status: " + eventObj.encodeCompleteStatus);
    },
    false
  );

  // Alternatively you can access the correct name of that event via the following const property:
  var encodeCompleteEvent = AMEExportEvent.onEncodeComplete;
  exporter.addEventListener(
    encodeCompleteEvent,
    function (eventObj) {
      $.writeln(
        "Encode Complete Status (alt): " + eventObj.encodeCompleteStatus
      );
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

encodeCompleteTime Example (click to expand):

```
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
    "onEncodeComplete",
    function (eventObj) {
      $.writeln(
        "Encode Complete Time in milli seconds: " + eventObj.encodeCompleteTime
      );
    },
    false
  );

  // Alternatively you can access the correct name of that event via the following const property:
  var encodeCompleteEvent = AMEExportEvent.onEncodeComplete;
  exporter.addEventListener(
    encodeCompleteEvent,
    function (eventObj) {
      $.writeln(
        "Encode Complete Time in milli seconds: (alt): " +
          eventObj.encodeCompleteTime
      );
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

onBatchItemStatusChanged Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var batchItemStatusChangedEvent = AMEExportEvent.onBatchItemStatusChanged;
$.writeln(
  "Event name is identical with the const property API name ('onBatchItemStatusChanged'): " +
    batchItemStatusChangedEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    batchItemStatusChangedEvent,
    function (eventObj) {
      $.writeln("Batch group index: " + eventObj.groupIndex);
      $.writeln("Batch item index: " + eventObj.itemIndex);
      //Possible status values:
      //kBatchItemStatus_Waiting = 0,
      //kBatchItemStatus_Done,
      //kBatchItemStatus_Failed,
      //kBatchItemStatus_Skipped,
      //kBatchItemStatus_Encoding,
      //kBatchItemStatus_Paused,
      //kBatchItemStatus_Stopped,
      //kBatchItemStatus_Any,
      //kBatchItemStatus_AutoStart,
      //kBatchItemStatus_Done_Warning,
      //kBatchItemStatus_WatchFolderWaiting
      $.writeln("Batch item status: " + eventObj.status);
    },
    false
  );

  // Alternatively you can listen to "onBatchItemStatusChanged"
  exporter.addEventListener(
    "onBatchItemStatusChanged",
    function (eventObj) {
      $.writeln("Batch group index (alt): " + eventObj.groupIndex);
      $.writeln("Batch item index (alt): " + eventObj.itemIndex);
      //Possible status values:
      //kBatchItemStatus_Waiting = 0,
      //kBatchItemStatus_Done,
      //kBatchItemStatus_Failed,
      //kBatchItemStatus_Skipped,
      //kBatchItemStatus_Encoding,
      //kBatchItemStatus_Paused,
      //kBatchItemStatus_Stopped,
      //kBatchItemStatus_Any,
      //kBatchItemStatus_AutoStart,
      //kBatchItemStatus_Done_Warning,
      //kBatchItemStatus_WatchFolderWaiting
      $.writeln("Batch item status (alt): " + eventObj.status);
    },
    false
  );

var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

onEncodeComplete Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var encodeCompleteEvent = AMEExportEvent.onEncodeComplete;

$.writeln(
  "Event name is identical with the const property API name ('onEncodeComplete'): " +
    encodeCompleteEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    encodeCompleteEvent,
    function (eventObj) {
      $.writeln("Encode Complete Status: " + eventObj.encodeCompleteStatus);
      $.writeln(
        "Encode Complete Time (in milli seconds): " +
          eventObj.encodeCompleteTime
      );
    },
    false
  );

  // Alternatively you can listen to "onEncodeComplete"
  exporter.addEventListener(
    "onEncodeComplete",
    function (eventObj) {
      $.writeln(
        "Encode Complete Status (alt): " + eventObj.encodeCompleteStatus
      );
      $.writeln(
        "Encode Complete Time in milli seconds (alt): " +
          eventObj.encodeCompleteTime
      );
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

onEncodingItemProgressUpdated Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var encodingItemProgressUpdatedEvent =
  AMEExportEvent.onEncodingItemProgressUpdated;
$.writeln(
  "Event name is identical with the const property API name ('onEncodingItemProgressUpdated'): " +
    encodingItemProgressUpdatedEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    encodingItemProgressUpdatedEvent,
    function (eventObj) {
      $.writeln("Encoding progress for batch item: " + eventObj.progress);
    },
    false
  );

  // Alternatively you can listen to "onEncodingItemProgressUpdated"
  exporter.addEventListener(
    "onEncodingItemProgressUpdated",
    function (eventObj) {
      $.writeln("Encoding progress for batch item (alt): " + eventObj.progress);
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

onError Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var errorEvent = AMEExportEvent.onError;
$.writeln(
  "Event name is identical with the const property API name ('onError'): " +
    errorEvent
);

var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    errorEvent,
    function (eventObj) {
      $.writeln("Error while encoding");
    },
    false
  );

  // Alternatively you can listen to "onError"
  exporter.addEventListener(
    "onError",
    function (eventObj) {
      $.writeln("Error while encoding (alt)");
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

onItemEncodingStarted Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var itemEncodingStartedEvent = AMEExportEvent.onItemEncodingStarted;
$.writeln(
  "Event name is identical with the const property API name ('onItemEncodingStarted'): " +
    itemEncodingStartedEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    itemEncodingStartedEvent,
    function (eventObj) {
      $.writeln("Encoding started for batch item.");
    },
    false
  );

  // Alternatively you can listen to "onItemEncodingStarted"
  exporter.addEventListener(
    "onItemEncodingStarted",
    function (eventObj) {
      $.writeln("Encoding started for batch item (alt).");
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

onMediaInfoCreated Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var mediaInfoCreatedEvent = AMEExportEvent.onMediaInfoCreated;
$.writeln(
  "Event name is identical with the const property API name ('onMediaInfoCreated'): " +
    mediaInfoCreatedEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    mediaInfoCreatedEvent,
    function (eventObj) {
      $.writeln("Media info created");
    },
    false
  );

  // Alternatively you can listen to "onMediaInfoCreated"
  exporter.addEventListener(
    "onMediaInfoCreated",
    function (eventObj) {
      $.writeln("Media info created (alt)");
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

onPostProcessListInitialized Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/XDCAMHD 50 PAL 50i.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var postProcessListInitializedEvent =
  AMEExportEvent.onPostProcessListInitialized;
$.writeln(
  "Event name is identical with the const property API name ('onPostProcessListInitialized'): " +
    postProcessListInitializedEvent
);
var exporter = app.getExporter();

if (exporter) {
  exporter.addEventListener(
    postProcessListInitializedEvent,
    function (eventObj) {
      $.writeln("Post process list has been initialized.");
    },
    false
  );

  // Alternatively you can listen to "onPostProcessListInitialized"
  exporter.addEventListener(
    "onPostProcessListInitialized",
    function (eventObj) {
      $.writeln("Post process list has been initialized (alt).");
    },
    false
  );

var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

progress Example (click to expand):

```
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
    "onEncodingItemProgressUpdated",
    function (eventObj) {
      $.writeln("Encoding progress for batch item: " + eventObj.progress);
    },
    false
  );

  // Alternatively you can access the correct name of that event via the following const property:
  var encodingItemProgressUpdatedEvent =
    AMEExportEvent.onEncodingItemProgressUpdated;
  exporter.addEventListener(
    encodingItemProgressUpdatedEvent,
    function (eventObj) {
      $.writeln("Encoding progress for batch item (alt): " + eventObj.progress);
    },
    false
  );

  var encoderWrapper = exporter.exportItem(source, destination, preset);
}
```

status Example (click to expand):

```
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

## AMEFrontendEvent

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — AMEFrontendEvent

AME sends this event after successfully creating a batch item.

### Properties

onItemAddedToBatch: constant string : Signals successful batch item creation for FrontendScriptObject APIs that add items to the queue.

### Code Samples

onItemAddedToBatch Example (click to expand):

```
var source = "C:\\testdata\\testmedia.mp4";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia.mp4"

var frontend = app.getFrontend();
if (frontend) {
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("Item added to Batch");
  });

  var batchItemSuccess = frontend.addItemToBatch(source);
  if (batchItemSuccess) {
    $.writeln(source, " has been added successfully");
  }
}
```

## Application

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — Application

Top-level app object.

### Properties

buildNumber: string : Retrieves the application build number.

### Methods

assertToConsole(): bool : Sends assert output to stdout.

bringToFront(): bool : Moves the application to the foreground.

cancelTask(taskID: int): bool : Cancels the task matching taskID.

getEncoderHost(): scripting object : Retrieves the encoder host object. See EncoderHostScriptObject.

getExporter(): scripting object : Retrieves the exporter object. See ExporterScriptObject.

getFrontend(): scripting object : Retrieves the front end object. See FrontendScriptObject.

getWatchFolder(): scripting object : Retrieves the watch folder object. See WatchFolderScriptObject.

isBlackVideo(sourcePath: string): bool : Reports true when every frame is black.

isSilentAudio(sourcePath: string): bool : Reports true when the audio is silent.

quit(): bool : Exits AME.

renderFrameSequence(sourcePath: string, outputPath: string, renderAll: bool, startFrame: int): bool : Renders still frames from the provided source.

scheduleTask(scriptToExecute: string, delayInMilliseconds: int, repeat: bool): int : Schedules script execution after delay and returns task ID.

scriptToExecute: provide the script text, for example 'app.getEncoderHost().runBatch()'.

wait(milliseconds: unsigned int): bool : Waits for the specified milliseconds without blocking the UI.

write(text: string): bool : Sends text to stdout.

### Code Samples

getExporter Example (click to expand):

```
var exporter = app.getExporter();
// check ExporterScriptObject to see which methods/properties you can apply
```

isBlackVideo Example (click to expand):

```
var source = "C:\\testdata\\testmedia.mp4";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia.mp4"

var blackVideo = app.isBlackVideo(source);
if (blackVideo) {
  $.writeln("The input file has only black frames");
}
```

isSilentAudio Example (click to expand):

```
var source = "C:\\testdata\\testmedia.mp4";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia.mp4"

var silent = app.isSilentAudio(source);
if (silent) {
  $.writeln("The input file has no audio");
}
```

renderFrameSequence Example (click to expand):

```
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

scheduleTask Example (click to expand):

```
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
    var taskID = app.scheduleTask(
      "var e = app.getEncoderHost(); e.runBatch()",
      5000,
      false
    );
  } else {
    $.writeln("Encoder wrapper object is not valid.");
  }
} else {
  $.writeln("Frontend object is not valid.");
}
```
