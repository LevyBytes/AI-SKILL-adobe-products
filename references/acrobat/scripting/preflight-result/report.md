# report

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | Acrobat Pro only |

Produces a Preflight report in XML form.

Parameters

| Parameter | Description |
| --- | --- |
| oThermometer | (optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears. |

Returns

A string carrying the XML report. Feed this string to the XMLData.parse method to build an XFA object standing for either a tree topped by one node or a tree begun from a list of nodes (a tree list).

Example: Create and parse a Preflight XML report.

```javascript
var oProfile = Preflight.getProfileByName("Magazine Ads");
if (oProfile !== undefined) {
    var oThermometer = app.thermometer;
    var myPreflightResult = this.preflight(oProfile, false, oThermometer);
    if (myPreflightResult.numErrors > 0) {
        var cXMLData = myPreflightResult.report(oThermometer);
        var oXMLData = XMLData.parse(cXMLData, false);
        console.println(oXMLData.saveXML("pretty"));
    }
}
```
