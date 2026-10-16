function registerLegacyExporterProgress(exporter) {
    exporter.addEventListener("onItemEncodingStarted", function (eventObj) {
        $.writeln("onItemEncodingStarted");
    });
    exporter.addEventListener("onEncodingItemProgressUpdated", function (eventObj) {
        $.writeln("onEncodingItemProgressUpdated: Encoding Progress: " + eventObj.progress);
    });
}
