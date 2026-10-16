function registerExportProgressEvents(exporter) {
    exporter.addEventListener(
      "onEncodeComplete",
      function (eventObj) {
        $.writeln(
          "Encode Complete Status (always true): " + eventObj.encodeCompleteStatus
        ); // Complete status always true
        $.writeln(
          "Encode Complete Time (in milliseconds): " + eventObj.encodeCompleteTime
        );
      },
      false
    );

    exporter.addEventListener(
      "onError",
      function (eventObj) {
        $.writeln("Error while encoding");
      },
      false
    );

    exporter.addEventListener(
      "onBatchItemStatusChanged",
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

    exporter.addEventListener(
      "onEncodingItemProgressUpdated",
      function (eventObj) {
        $.writeln("Encoding progress for batch item: " + eventObj.progress);
      },
      false
    );

    // listen to the audio pre-encoding progress event (available since 24.0.)
    exporter.addEventListener(
      "onAudioPreEncodeProgress",
      function (eventObj) {
        $.writeln("Audio pre-encoding info: " + eventObj.audioInfo);
        $.writeln("Audio pre-encoding progress: " + eventObj.audioProgress);
      },
      false
    );

    exporter.addEventListener(
      "onItemEncodingStarted",
      function (eventObj) {
        $.writeln("Encoding started for batch item.");
      },
      false
    );

    exporter.addEventListener(
      "onMediaInfoCreated",
      function (eventObj) {
        $.writeln("Media info created");
      },
      false
    );

    exporter.addEventListener(
      "onPostProcessListInitialized",
      function (eventObj) {
        $.writeln("Post process list has been initialized.");
      },
      false
    );
}
