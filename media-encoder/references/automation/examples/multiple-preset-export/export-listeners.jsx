function registerExportGroupEvents(exporter) {
    exporter.addEventListener(
      "onEncodeComplete",
      function (eventObj) {
        // We should arrive here two times (for every preset we have one batch item)
        $.writeln(
          "Encode Complete Status (always true): " + eventObj.encodeCompleteStatus
        );
        // We encode both batch items in parallel and so we don't really get the exact time for each batch item
        // When we arrive here the second time we get the total encoding time for both batch items (the first
        // could be ignored)
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
        /*
          Possible status values:
          kBatchItemStatus_Waiting = 0,
          kBatchItemStatus_Done,
          kBatchItemStatus_Failed,
          kBatchItemStatus_Skipped,
          kBatchItemStatus_Encoding,
          kBatchItemStatus_Paused,
          kBatchItemStatus_Stopped,
          kBatchItemStatus_Any,
          kBatchItemStatus_AutoStart,
          kBatchItemStatus_Done_Warning,
          kBatchItemStatus_WatchFolderWaiting
          */
        $.writeln("Batch item status: " + eventObj.status);
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
