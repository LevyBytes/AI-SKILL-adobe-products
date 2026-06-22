# Encoderhostscriptobject, Encoderhostwrapperevent, Encoderwrapper, Encoderwrapperevent

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EncoderHostScriptObject; EncoderHostWrapperEvent; EncoderWrapper; EncoderWrapperEvent.

## EncoderHostScriptObject

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — EncoderHostScriptObject

This object exposes utility methods, including commands that run, pause, or stop the batch.

### Methods

createEncoderForFormat(inFormatName: string): scripting object : Provides an 'EncoderWrapper' script object for the requested format.

getBatchEncoderStatus(): string : Provides the current batch encoder status. Status values: invalid, paused, running, stopped, stopping (available since 23.3).

getCurrentBatchPreview(inOutputPath: string): bool : Writes the current batch preview image, in tiff format, to the supplied path.

inOutputPath: path where the 'tiff' file should be stored.

getFormatList(): array of strings : Provides a list of every available format.

getSourceInfo(sourcePath: string): scripting object : Provides a 'SourceMediaInfo' script object with detailed information for the supplied source.

sourcePath: media path.

getSupportedImportFileTypes(): array of strings : Provides the list of every available format.

isBatchRunning(): bool : Reports true while a batch job is running.

pauseBatch(): bool : Pauses the batch; the return value is true in all cases.

runBatch(): bool : Runs the batch; the return value is true in all cases.

stopBatch(): bool : Stops the batch; the return value is true in all cases.

### Code Samples

Example (click to expand):

```
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

## EncoderHostWrapperEvent

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — EncoderHostWrapperEvent

For batch-queue items, this event supports onItemEncodingStarted, onAudioPreEncodeProgress, onEncodingItemProgressUpdate, and onItemEncodeComplete. When the queue contains multiple batch items, use this event so every item can receive those event types. For the full batch queue, the event type is onBatchEncoderStatusChanged.

### Properties

audioInfo: string : Supplies audio pre-encoding information for onAudioPreEncodeProgress (available since 24.0).

audioProgress: float : Supplies audio pre-encoding progress for onAudioPreEncodeProgress (available since 24.0).

batchEncoderStatus: string : Gives the batch encoder status captured when the event fired; use it with onBatchEncoderStatusChanged, otherwise the value is invalid. Status values: invalid, paused, running, stopped, stopping (available since 23.3).

onAudioPreEncodeProgress: constant string : Signals audio pre-encode progress changes (available since 24.0).

onBatchEncoderStatusChanged: constant string : Signals that batch encoder status changed; read batchEncoderStatus for the new value (available since 23.3).

onEncodingItemProgressUpdate: constant string : Signals batch item encoding progress (available since 23.1).

onItemEncodeCompleted: constant string : Signals that the batch item has been encoded.

onItemEncodingStarted: constant string : Signals the start of batch item encoding (available since 23.1).

outputFilePath: string : Provides the output file path for onItemEncodingStarted and onItemEncodeComplete.

progress: float : Provides encoding progress from 0 to 1 for onEncodingItemProgressUpdate.

result: string : Provides the encoding result 'True' or 'False' for onItemEncodeComplete.

sourceFilePath: string : Provides the source file path for onItemEncodingStarted and onItemEncodeComplete.

### Code Samples

Example (click to expand):

```
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

    encoderHost = app.getEncoderHost();
    if (encoderHost) {
      // listen to the item encoding started event (available since 23.1.)
      encoderHost.addEventListener(
        "onItemEncodingStarted",
        function (eventObj) {
          $.writeln(
            "onItemEncodingStarted: Source File Path: " +
              eventObj.sourceFilePath
          );
          $.writeln(
            "onItemEncodingStarted: Output File Path: " +
              eventObj.outputFilePath
          );
        }
      );

      /* for earlier versions (23.0. or older) there's an additional step necessary to listen to the onItemEncodingStarted event
        var exporter = app.getExporter();
        if (exporter) {
            exporter.addEventListener(
                "onItemEncodingStarted",
                function (eventObj) {
                $.writeln("onItemEncodingStarted");
                }
            );
        }
      */

      // listen to the item encoding progress event (available since 23.1.)
      encoderHost.addEventListener(
        "onEncodingItemProgressUpdate",
        function (eventObj) {
          $.writeln(
            "onEncodingItemProgessUpdate: Encoding Progress: " +
              eventObj.progress
          );
        }
      );

      // listen to the audio pre-encoding progress event (available since 24.0.)
      encoderHost.addEventListener(
        "onAudioPreEncodeProgress",
        function (eventObj) {
          $.writeln("Audio pre-encoding info: " + eventObj.audioInfo);
          $.writeln("Audio pre-encoding progress: " + eventObj.audioProgress);
        },
        false
      );

      /* for earlier versions (23.0. or older) there's an additional step necessary to listen to the onEncodingItemProgressUpdated event
        var exporter = app.getExporter();
        if (exporter) {
            exporter.addEventListener(
                "onEncodingItemProgressUpdated",
                function (eventObj) {
                $.writeln("onEncodingItemProgessUpdated: Encoding Progress: " + eventObj.progress);
                }
            );
        }
      */

      // listen to the item encoding complete event
      encoderHost.addEventListener("onItemEncodeComplete", function (eventObj) {
        $.writeln("onItemEncodeComplete: Result: " + eventObj.result);
        $.writeln(
          "onItemEncodeComplete: Source File Path: " + eventObj.sourceFilePath
        );
        $.writeln(
          "onItemEncodeComplete: Output File Path: " + eventObj.outputFilePath
        );
      });

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
```

## EncoderWrapper

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — EncoderWrapper

Queue item object used to configure encode properties.

### Properties

outputFiles: array of strings : Retrieves the files generated by the encode.

outputHeight: float : Retrieves the encoded output file height.

outputWidth: float : Retrieves the encoded output file width.

### Methods

SetIncludeSourceXMP(includeSourceXMP: bool): bool : Switches source XMP inclusion; requires a boolean input value.

getEncodeProgress(): int : Provides encode progress as a percentage.

getEncodeTime(): float : Provides encode time in milliseconds.

getLogOutput(): string : Provides log output; warnings/errors may appear (available since 23.2.).

getMissingAssets(includeSource: bool, includeOutput: bool): array of strings : Provides a list of missing assets.

includeSource: when requested, gets the missing-asset list from the source group.

getPresetList(): array of strings : Provides presets available for the assigned format.

loadFormat(format: string): bool : Changes the batch item format.

format: for example, 'H.264'; loads every preset available for the assigned format.

loadPreset(presetPath: string): bool : Applies presetPath to this item.

setCropOffsets(left: unsigned int, top: unsigned int, right: unsigned int, bottom: unsigned int): bool : Applies the crop offsets.

setCropState(cropState: bool): bool : Sets crop state; requires a boolean input value.

setCropType(cropType: unsigned int): bool : Selects the scale type.

cropType: values are 0 ScaleToFit, 1 ScaleToFitBeforeCrop, 2 SetAsOutputSize, 3 ScaleToFill, 4 ScaleToFillBeforeCrop, 5 StretchToFill, 6 StretchToFillBeforeCrop.

setCuePointData(inCuePointsFilePath: string): bool : Sets cue point data.

setFrameRate(framerate: string): bool : Sets the batch item frame rate.

framerate: pass a string value such as '24'.

setIncludeSourceCuePoints(includeSourceCuePoints: bool): bool : Switches cue point inclusion; requires a boolean input value.

setOutputFrameSize(width: unsigned int, height: unsigned int): bool : Sets output frame size.

setRotation(rotationValue: float): bool : Sets rotation in a 360 degree system.

rotationValue: use a value from 0.0 - 360.0.

setScaleType(scaleType: unsigned int): bool : Chooses the scale type.

scaleType: values are 0 ScaleToFit, 1 ScaleToFitBeforeCrop, 2 SetAsOutputSize, 3 ScaleToFill, 4 ScaleToFillBeforeCrop, 5 StretchToFill, 6 StretchToFillBeforeCrop.

setTimeInterpolationType(interpolationType: unsigned int): bool : Sets time interpolation type.

interpolationType: values are 0 FrameSampling, 1 FrameBlending, 2 OpticalFlow.

setUseFrameBlending(useFrameBlending: bool): bool : Switches frame blending; requires a boolean input value.

setUseMaximumRenderQuality(useMaximumRenderQuality: bool): bool : Switches maximum render quality; requires a boolean input value.

setUsePreviewFiles(usePreviewFiles: bool): bool : Switches preview file usage; requires a boolean input value.

setWorkArea(workAreaType: unsigned int, startTime: float, endTime: float): bool : Sets the batch item work area type plus start and end times.

workAreaType: values are 0 Entire, 1 InToOut, 2 WorkArea, 3 Custom, 4 UseDefault.

setWorkAreaInTicks(workAreaType: unsigned int, startTime: string, endTime: string): bool : Sets the batch item work area type plus start and end times in ticks (available since 23.3).

workAreaType: values are 0 Entire, 1 InToOut, 2 WorkArea, 3 Custom, 4 UseDefault.

setXMPData(templateXMPFilePath: string): bool : Applies templateXMPFilePath as XMP data.

### Code Samples

Example (click to expand):

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

getLogOutput Example (click to expand):

```
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
   * getLogOutPut() returns a string in JSON format containing the possible errors and warnings as well as the summary of the batch item
   * that is added to the queue.
   *
   * The getLogOutput() method is implemented in the EncoderWrapperScriptObject.
   * You can use getLogOutput() method when you have used one of these following methods:
   *
   * FrontEndScriptObject:
   * - addFileToBatch()
   * - addDLToBatch()
   * - addTeamProjectsToBatch()
   * - stitchFiles()
   * In Addition it is possible to get the batch item status with
   * encoderWrapper.addListener("onStatusChanged"){...} Here you will get "Done!", "Failed!", "Stopped!"
   *
   * ExportScriptObject:
   * - export()
   * - getSourceMediaInfo()
   * In Addition it is possible to get the batch item status with
   * exporter.addListener("OnBatchItemStatusChanged"){...} Here you will get integer values see ExportScriptObject for the details
   *
   * EncoderHostWrapper:
   * - createEncoderFormat()
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

getPresetList Example (click to expand):

```
var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HighQuality720HD.epr";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";

var format = "";
var frontend = app.getFrontend();
if (frontend) {
  var encoderWrapper = frontend.addFileToBatch(source, format, preset);

  if (encoderWrapper) {
    $.writeln(source, " has been added successfully");

    /**if you set the format parameter but no presetfilepath then you will
     * get all related presets to this specific format.
     *
     * If you set the presetfilepath but no format, then the
     * format will be set automatically that matches the current preset */

    var presetList = encoderWrapper.getPresetList();
    for (var index = 0; index < presetList.length; index++) {
      $.writeln(presetList[index]);
    }
  } else {
    $.writeln("encoderWrapper object is not valid");
  }
} else {
  $.writeln("Frontend object is not valid");
}
```

loadFormat Example (click to expand):

```
var format = "";
var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HighQuality720HD.epr";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";

var frontend = app.getFrontend();
if (frontend) {
  var encoderWrapper = frontend.addFileToBatch(source, format, preset);
  if (encoderWrapper) {
    encoderWrapper.loadFormat("MP3");
  } else {
    $.writeln("EncoderWrapper object is not valid");
  }
} else {
  $.writeln("Frontend object is not valid");
}
```

loadPreset Example (click to expand):

```
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

setWorkAreaInTicks Example (click to expand):

```
var format = "H.264";

var source = "C:\\testdata\\testmedia4.mp4";
var preset = "C:\\testdata\\HD 720p.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia4.mp4"
// var preset = "/Users/Shared/testdata/HD 720p.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

// The value of ticksPerSecond is predefined in premiere pro and ame.
// For more information please have a look into https://ppro-scripting.docsforadobe.dev/other/time.html
var ticksPerSecond = 254016000000;
var startTimeInTicks = 20 * ticksPerSecond;
var timeToAddInTicks = 30 * ticksPerSecond;

var startTimeinTicksStr = String(startTimeInTicks);
var endTimeInTicksStr = String(timeToAddInTicks);

var frontend = app.getFrontend();
if (frontend) {
  var encoderWrapper = frontend.addFileToBatch(
    source,
    format,
    preset,
    destination
  );
  if (encoderWrapper) {
    $.writeln("workarea start time: ", startTimeinTicksStr);
    $.writeln("workarea end time: ", endTimeInTicksStr);
    encoderWrapper.setWorkAreaInTicks(
      2,
      startTimeinTicksStr,
      endTimeInTicksStr
    );
  } else {
    $.writeln("encoderWrapper is not valid");
  }
  var encoderHost = app.getEncoderHost();
  if (encoderHost) {
    encoderHost.runBatch();
  } else {
    $.writeln("encoderHost is not valid");
  }
} else {
  $.writeln("frontend is not valid");
}
```

## EncoderWrapperEvent

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — EncoderWrapperEvent

Event object used for encode progress and completion notifications.

### Properties

audioInfo: string : Supplies audio pre-encoding information for onAudioPreEncodeProgress (available since 24.0).

audioProgress: string : Supplies audio pre-encoding progress for onAudioPreEncodeProgress (available since 24.0).

onAudioPreEncodeProgress: constant string : Signals audio pre-encode progress changes (available since 24.0).

onEncodeFinished: constant string : Signals that the batch item has been encoded.

onEncodeProgress: constant string : Signals changes in batch item encode progress.

result: string : For onEncodeFinished, contains 'Done!', 'Failed!' or 'Stopped!'; onEncodeProgress carries a 0 to 100 progress value.

### Code Samples

Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\XDCAMHD 50 PAL 50i.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var exporter = app.getExporter();
if (exporter) {
  var encoderWrapper = exporter.exportItem(source, destination, preset);
  if (encoderWrapper) {
    encoderWrapper.addEventListener(
      "onEncodeFinished",
      function (eventObj) {
        $.writeln("Encoding result: " + eventObj.result);
      },
      false
    );
    encoderWrapper.addEventListener(
      "onEncodeProgress",
      function (eventObj) {
        $.writeln("Encoding progress: " + eventObj.result);
      },
      false
    );

    // listen to the audio pre-encoding progress event (available since 24.0.)
    encoderWrapper.addEventListener(
      "onAudioPreEncodeProgress",
      function (eventObj) {
        $.writeln("Audio pre-encoding info: " + eventObj.audioInfo);
        $.writeln("Audio pre-encoding progress: " + eventObj.audioProgress);
      },
      false
    );
  }
}
```
