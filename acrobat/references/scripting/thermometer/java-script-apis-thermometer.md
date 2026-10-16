# JavaScript APIs — Thermometer

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Pairing a status window with a progress bar, this object signals to the user that some drawn-out operation is underway. Grab a Thermometer object by way of app.thermometer.

Example: Here is how to exercise every property and method the Thermometer object offers.

Supply the document and the actual per-page operation as `processPage`. Cancellation stops before the next operation, and the thermometer closes on failure.

```javascript
function processPages(doc, processPage) {
    var t = app.thermometer;
    t.duration = doc.numPages;
    t.begin();
    try {
        for (var i = 0; i < doc.numPages; i++) {
            t.value = i;
            t.text = "Processing page " + (i + 1);
            if (t.cancelled) break;
            processPage(doc, i);
            t.value = i + 1;
        }
    } finally {
        t.end();
    }
}
```
