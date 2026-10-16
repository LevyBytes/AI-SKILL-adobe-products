function registerBatchProgressEvents(encoderHost) {
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
}
