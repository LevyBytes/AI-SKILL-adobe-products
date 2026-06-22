# Frontendscriptobject, Sourcemediainfo, Watchfolderscriptevent, Watchfolderscriptobject

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FrontendScriptObject; SourceMediaInfo; WatchFolderScriptEvent; WatchFolderScriptObject.

## FrontendScriptObject

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — FrontendScriptObject

Frontend-facing scripting methods.

### Methods

addCompToBatch(compPath: string, presetPath: string = "", outputPath: string = ""): bool : Places the first comp from an After Effects project, or the first sequence from a Premiere Pro project, into the batch.

compPath: Path such as an After Effects project or Premiere Pro project. The first comp or sequence is selected.

presetPath: Optional. With presetPath left empty, the default preset is used.

outputPath: Optional; a blank outputPath makes AME build the output file name using compPath.

addDLToBatch(projectPath: string, format: string, presetPath: string, guid: string, outputPath: string = ""): scripting object : Places an item such as an After Effects comp or Premiere Pro sequence into the batch and yields an EncoderWrapper object.

projectPath: Example input is a Premiere Pro or After Effects project path.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

guid: Unique id for an item such as a Premiere Pro sequence or After Effects composition.

outputPath: Optional; a blank outputPath makes AME build the output file name using projectPath.

addFileSequenceToBatch(containingFolder: string, imagePath: string, presetPath: string, outputPath: string = ""): bool : Inserts an image sequence into the batch. Image ordering is alphabetical.

containingFolder: Folder where the image files are stored.

imagePath: Adds all images in the containing folder that share the same extension to the output file.

outputPath: Optional; a blank outputPath makes AME build the output file name using containingFolder.

addFileToBatch(filePath: string, format: string, presetPath: string, outputPath: string = ""): scripting object : Inserts a file into the batch and yields an EncoderWrapper object.

filePath: Media source file path.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

outputPath: Optional; a blank outputPath makes AME build the output file name using filePath.

addItemToBatch(sourcePath: string): bool : Inserts a media source into the batch.

sourcePath: Media source path.

addTeamProjectsItemToBatch(projectsURL: string, format: string, presetPath: string, outputPath: string): scripting object : Inserts a team project item into the batch and yields an EncoderWrapper object.

projectsURL: Team Projects URL or Team Projects Snap. In PPro, saveProjectSnapshot from the scripting API can create a tp2snap file for a ProjectItem.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

addXMLToBatch(xmlPath: string, presetPath: string, outputFolderPath: string = ""): bool : Inserts Final Cut Pro xml into the batch.

xmlPath: Path for a Final Cut Pro xml file.

outputFolderPath: Optional; a blank outputFolderPath makes AME build the output file name using xmlPath.

getDLItemsAtRoot(projectPath: string): array of strings : Provides the GUID list for top-level/root objects, including sequences and comps.

projectPath: Example input can point to a Premiere Pro or After Effects project.

stitchFiles(mediaPaths: string, format: string, presetPath: string, outputPath: string): scripting object : Creates a batch item for the specified media and yields an EncoderWrapper object.

mediaPaths: Media paths separated by semicolons.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

stopBatch(): bool : Halts current processing.

### Code Samples

addCompToBatch Example (click to expand):

```
var projectPath = "C:\\testdata\\aeCompTest.aep";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/aeCompTest.aep"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("frontend.onItemAddedToBatch: success");
  });

  var batchItemSuccess = frontend.addCompToBatch(
    projectPath,
    preset,
    destination
  );
  if (batchItemSuccess) {
    $.writeln(
      "Frontend script engine added the source file ",
      projectPath,
      " successfully "
    );

// get encoderHost to be able to listen for the item complete event
    encoderHost = app.getEncoderHost();
    if (encoderHost) {
      encoderHost.addEventListener("onItemEncodeComplete", function (eventObj) {
        $.writeln("Result: " + eventObj.result);
        $.writeln("Source File Path: " + eventObj.sourceFilePath);
        $.writeln("Output File Path: " + eventObj.outputFilePath);
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

addDLToBatch Example (click to expand):

```
// The projectPath can be a path to an AfterEffects, Premiere Pro or Character Animator project
var format = "H.264";
var projectPath = "C:\\testdata\\aeCompTest.aep";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var projectPath = "/Users/Shared/testdata/aeCompTest.aep"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var frontend = app.getFrontend();
if (frontend) {
  // first we need the guid of the e.g. ae comps or ppro sequences
  var result = frontend.getDLItemsAtRoot(projectPath);
  $.writeln(result.length + " comps / sequences found.");

  // import e.g. the first comp / sequence
  if (result.length > 0) {
    // listen for batch item added / creation failed event
    frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
      $.writeln("frontend.onItemAddedToBatch: success");
    });

    frontend.addEventListener("onBatchItemCreationFailed", function (eventObj) {
      $.writeln("frontend.onBatchItemCreationFailed: failed");
      $.writeln("srcFilePath: " + eventObj.srcFilePath);
      $.writeln("error: " + eventObj.error);
    });

    var encoderWrapper = frontend.addDLToBatch(
      projectPath,
      format,
      preset,
      result[0],
      destination
    );

    if (encoderWrapper) {
      $.writeln(
        "Batch item added successfully for comp / sequence guid: ",
        result[0]
      );

      // listen for encode progress and encode finish events
      encoderWrapper.addEventListener("onEncodeProgress", function (eventObj) {
        $.writeln("Encoding progress for batch item: " + eventObj.result);
      });

      encoderWrapper.addEventListener("onEncodeFinished", function (eventObj) {
        $.writeln("Encoding result for batch item: " + eventObj.result);
      });

      // get encoder host to run batch
      var encoderHost = app.getEncoderHost();
      if (encoderHost) {
        encoderHost.runBatch();
      } else {
        $.writeln("encoderHost not valid");
      }
    } else {
      $.writeln("encoderWrapper not valid");
    }
  } else {
    $.writeln("the project doesn't have any comps / sequences");
  }
} else {
  $.writeln("frontend not valid");
}
```

addFileSequenceToBatch Example (click to expand):

```
var firstFile = "C:\\testdata\\Images\\AB-1.jpg";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputFolder";
var inContainingFolder = "C:\\testdata\\Images";

// //sources for mac
// var firstFile = "/Users/Shared/testdata/Images/AB-1.jpg"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";
// var inContainingFolder = "/Users/Shared/testdata/Images";

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("onAddItemToBatch success");
  });

  var batchItemSuccess = frontend.addFileSequenceToBatch(
    inContainingFolder,
    firstFile,
    preset,
    destination
  );

  if (batchItemSuccess) {
    $.writeln("Batch item added successfully");

    // get encoderHost to be able to listen for the item complete event
    var encoderHost = app.getEncoderHost();
    if (encoderHost) {
      encoderHost.addEventListener("onItemEncodeComplete", function (eventObj) {
        $.writeln("Result: " + eventObj.result);
        $.writeln("Source File Path: " + eventObj.sourceFilePath);
        $.writeln("Output File Path: " + eventObj.outputFilePath);
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

addFileToBatch Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added / creation failed event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("frontend.onItemAddedToBatch: success");
  });

  frontend.addEventListener("onBatchItemCreationFailed", function (eventObj) {
    $.writeln("frontend.onBatchItemCreationFailed: failed");
    $.writeln("srcFilePath: " + eventObj.srcFilePath);
    $.writeln("error: " + eventObj.error);
  });

  var encoderWrapper = frontend.addFileToBatch(
    source,
    "H.264",
    preset,
    destination
  );
  if (encoderWrapper) {
    $.writeln("Batch item added successfully for source file  ", source);

    // listen for encode progress and encode finish event
    encoderWrapper.addEventListener("onEncodeProgress", function (eventObj) {
      $.writeln("Encoding progress for batch item: " + eventObj.result);
    });

    encoderWrapper.addEventListener("onEncodeFinished", function (eventObj) {
      $.writeln("encoderWrapper.onEncodeFinished Success: " + eventObj.result);
    });

    // get encoder host to run batch
    var encoderHost = app.getEncoderHost();
    if (encoderHost) {
      encoderHost.runBatch();
    } else {
      $.writeln("encoderHost not valid");
    }
  } else {
    $.writeln(
      "encoderWrapper not valid - batch item wasn't added successfully"
    );
  }
} else {
  $.writeln("frontend not valid");
}
```

addItemToBatch Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("frontend.onItemAddedToBatch: success");
  });

  var batchItemSuccess = frontend.addItemToBatch(source);
  if (batchItemSuccess) {
    $.writeln("Batch item added successfully for the source file ", source);

// get encoderHost to be able to listen for the item complete event
    encoderHost = app.getEncoderHost();
    if (encoderHost) {
      encoderHost.addEventListener("onItemEncodeComplete", function (eventObj) {
        $.writeln("Result: " + eventObj.result);
        $.writeln("Source File Path: " + eventObj.sourceFilePath);
        $.writeln("Output File Path: " + eventObj.outputFilePath);
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

addTeamProjectsItemToBatch Example (click to expand):

```
// use for the source (projectsURL) a valid Team Projects URL or a Team Projects Snap
// you can create a tp2snap file in PPro for a ProjectItem via the scripting API saveProjectSnapshot
// e.g. projectItem.saveProjectSnapshot("C:\\testdata\\test.tp2snap");
var format = "H.264";
var teamsProjectPath = "C:\\testdata\\test.tp2snap";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var teamsProjectPath = "/Users/Shared/testdata/test.tp2snap"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added / creation failed event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("frontend.onItemAddedToBatch: success");
  });

  frontend.addEventListener("onBatchItemCreationFailed", function (eventObj) {
    $.writeln("frontend.onBatchItemCreationFailed: failed");
    $.writeln("srcFilePath: " + eventObj.srcFilePath);
    $.writeln("error: " + eventObj.error);
  });

  var encoderWrapper = frontend.addTeamProjectsItemToBatch(
    teamsProjectPath,
    format,
    preset,
    destination
  );

  if (encoderWrapper) {
    $.writeln(
      "Batch item added successfully for Team Projects url: ",
      teamsProjectPath
    );

    // listen for encode progress and encode finish events
    encoderWrapper.addEventListener("onEncodeProgress", function (eventObj) {
      $.writeln("Encoding progress for batch item: " + eventObj.result);
    });

    encoderWrapper.addEventListener("onEncodeFinished", function (eventObj) {
      $.writeln("Encoding result for batch item: " + eventObj.result);
    });

    // get encoder host to run batch
    var encoderHost = app.getEncoderHost();

    if (encoderHost) {
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

addXMLToBatch Example (click to expand):

```
var source = "C:\\testdata\\FCP-3.xml"; // Final Cut Pro xml file
var preset = "C:\\testdata\\HighQuality720HD.epr";

// //sources for mac
// var source = "/Users/Shared/testdata/FCP-3.xml"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("onAddItemToBatch success");
  });

  var batchItemsuccess = frontend.addXMLToBatch(source, preset);

  if (batchItemsuccess) {
    $.writeln("Added xml file to batch successfully.");

    // get encoder host to listen for onItemEncodeComplete event and run batch
    encoderHost = app.getEncoderHost();
    if (encoderHost) {
      encoderHost.addEventListener("onItemEncodeComplete", function (eventObj) {
        $.writeln("Result: " + eventObj.result);
        $.writeln("Source File Path: " + eventObj.sourceFilePath);
        $.writeln("Output File Path: " + eventObj.outputFilePath);
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

getDLItemsAtRoot Example (click to expand):

```
var projectPath = "C:\\testdata\\aeCompTest.aep"; // project path

// //sources for mac
// var projectPath = "/Users/Shared/testdata/aeCompTest.aep"

var frontend = app.getFrontend();
if (frontend) {
  var result = frontend.getDLItemsAtRoot(projectPath);

  $.writeln(result.length + " ae comps found.");
  for (var idx = 0; idx < result.length; ++idx) {
    $.writeln("GUID for item " + idx + " is " + result[idx] + ".");

    // These guids will be needed for e.g. the API frontend.addDLToBatch
  }
} else {
  $.writeln("frontend not valid");
}
```

stitchFiles Example (click to expand):

```
var format = "H.264";
var media_1 = "C:\\testdata\\testmedia.mp4";
var media_2 = "C:\\testdata\\testmedia2.mp4.";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var media_1 = "/Users/Shared/testdata/testmedia.mp4"
// var media_2 = "/Users/Shared/testdata/testmedia2.avi"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var mediaPaths = media_1 + ";" + media_2;

var frontend = app.getFrontend();
if (frontend) {
  // listen for batch item added / creation failed event
  frontend.addEventListener("onItemAddedToBatch", function (eventObj) {
    $.writeln("onAddItemToBatch success");
  });

  frontend.addEventListener("onBatchItemCreationFailed", function (eventObj) {
    $.writeln("onBatchItemCreationFailed");
  });

  var encoderWrapper = frontend.stitchFiles(
    mediaPaths,
    format,
    preset,
    destination
  );

  if (encoderWrapper) {
    $.writeln("Batch item added successfully");

    // listen for encode progress and encode finish events
    encoderWrapper.addEventListener("onEncodeProgress", function (eventObj) {
      $.writeln("Encoding progress for batch item: " + eventObj.result);
    });

    encoderWrapper.addEventListener("onEncodeFinished", function (eventObj) {
      $.writeln("Encoding result for batch item: " + eventObj.result);
    });

    // get encoder host to run batch
    var encoderHost = app.getEncoderHost();

    if (encoderHost) {
      encoderHost.runBatch();
    } else {
      $.writeln("encoderHost not valid");
    }
  } else {
    $.writeln("encoderWrapper not valid");
  }
} else {
  $.writeln("frontend not valid");
}
```

## SourceMediaInfo

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — SourceMediaInfo

Reports width, height, PAR, duration, and related details for the imported source.

### Properties

audioDuration: string : Provides the source audio duration

description: string : Provides the source's embedded description

dropFrameTimeCode: bool : Provides true when the source uses drop-frame timecode

duration: string : Provides the source duration

durationInTicks: None : Provides source duration measured in ticks (available since 23.3)

fieldType: string : Provides the source field type

frameRate: string : Provides the source frame rate

height: string : Provides the source height

importer: string : Provides the importer used for source decoding

numChannels: string : Provides the source audio channel count

parX: string : Provides the source X PAR

parY: string : Provides the source Y PAR

sampleRate: string : Provides the source sample rate

width: string : Provides the source width

xmp: string : Provides the source xmp xml

### Code Samples

Example (click to expand):

```
var source = "C:\\testdata\\testmedia3.mxf";

// //sources for mac
// var source = "/Users/Shared/testdata/testmedia3.mxf"

var exporter = app.getExporter();
if (exporter) {
  var sourceMediaInfo = exporter.getSourceMediaInfo(source);
  if (sourceMediaInfo) {
    var audioDuration = sourceMediaInfo.audioDuration;
    $.writeln("audio duration of the source: " + audioDuration);

    var description = sourceMediaInfo.description;
    $.writeln("description of the source: " + description);

    var isDropFrame = sourceMediaInfo.dropFrameTimeCode;
    $.writeln("is drop frame: " + dropFrameTimeCode);

    var duration = sourceMediaInfo.duration;
    $.writeln("duration of the source: " + duration);

    var fieldType = sourceMediaInfo.fieldType;
    $.writeln("field type of the source: " + fieldType);

    var frameRate = sourceMediaInfo.frameRate;
    $.writeln("frame rate of the source: " + frameRate);

    var height = sourceMediaInfo.height;
    $.writeln("height of the source: " + height);

    var importer = sourceMediaInfo.importer;
    $.writeln("importer of the source: " + importer);

    var numChannels = sourceMediaInfo.numChannels;
    $.writeln("num channels of the source: " + numChannels);

    var parX = sourceMediaInfo.parX;
    $.writeln("par X of the source: " + parX);

    var parY = sourceMediaInfo.parY;
    $.writeln("par Y of the source: " + parY);

    var sampleRate = sourceMediaInfo.sampleRate;
    $.writeln("sample rate of the source: " + sampleRate);

    var width = sourceMediaInfo.width;
    $.writeln("width of the source: " + width);

    var xmp = sourceMediaInfo.xmp;
    $.writeln("xmp of the source: " + xmp);
  }
}
```

## WatchFolderScriptEvent

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — WatchFolderScriptEvent

Event emitted when a batch item import finishes.

### Properties

elapsedTime: float : Provides elapsed encoding time in milliseconds.

onEncodeComplete: constant string : Notification used when the watchfolder job item completes

onEncodeError: constant string : Notification used when the watchfolder job encode fails

## WatchFolderScriptObject

### Adobe Media Encoder (AME) Scripting API Reference (A-Z) — WatchFolderScriptObject

Watch folder scripting methods.

### Methods

createWatchFolder(folderPath: string, outputPath: string, presetPath: string): bool : Creates a watch folder at the destination for the preset and adds the source.

folderPath: Folder path to register as a watch folder.

removeAllWatchFolders(): bool : Clears every watch folder.

### Code Samples

createWatchFolder Example (click to expand):

```
var folder = "C:\\testdata\\watchFolder";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputFolder";

// //sources for mac
// var folder = "/Users/Shared/testdata/watchFolder"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputFolder";

var watchFolder = app.getWatchFolder();
if (watchFolder) {
  var watchFolderSuccess = watchFolder.createWatchFolder(
    folder,
    destination,
    preset
  );

  if (watchFolderSuccess) {
    $.writeln(folder, " added as a watch folder");
    encoderHostWrapper = app.getEncoderHost();
    if (encoderHostWrapper) {
      watchFolder.addEventListener("onEncodeComplete", function (eventObj) {
        $.writeln("Elapsed Time: " + eventObj.elapsedTime);
        $.writeln("watchFolder.onEncodeComplete");
      });

      watchFolder.addEventListener("onEncodeError", function (eventObj) {
        $.writeln("watchFolder.onEncodeError");
      });

      encoderHostWrapper.runBatch();
    } else {
      $.writeln("EncoderHostWrapper object is not valid");
    }
  } else {
    $.writeln("Watch folder was not created");
  }
}
```

removeAllWatchFolders Example (click to expand):

```
var folder = "C:\\testdata\\watchFolder";
var preset = "C:\\testdata\\HighQuality720HD.epr";
var destination = "C:\\testdata\\outputWatchfolder1";
var folder2 = "C:\\testdata\\watchFolder2";
var destination2 = "C:\\testdata\\outputWatchfolder2";

// //sources for mac
// var folder = "/Users/Shared/testdata/watchFolder"
// var preset = "/Users/Shared/testdata/HighQuality720HD.epr";
// var destination = "/Users/Shared/testdata/outputWatchfolder1";
// var folder2 = "/Users/Shared/testdata/watchFolder2"
// var destination2 = "/Users/Shared/testdata/outputWatchfolder2";

var watchFolderObj = app.getWatchFolder();
if (watchFolderObj) {
  watchFolder.createWatchFolder(folder, destination, preset);
  watchFolder.createWatchFolder(folder2, destination2, preset);
  watchFolderObj.removeAllWatchFolders();
} else {
  $.writeln("Watch folder object is not valid");
}
```
