# getProfileByName

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | Acrobat Pro only |

Locates, by its name, one Preflight profile within the roster of installed Preflight profiles.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which profile to fetch, given by name.<br><br>oThermometer<br><br>(optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears. |

Returns

A PreflightProfile object when a profile carrying the given name exists. Otherwise, undefined comes back.

Example: Get a profile with the name “Magazine Ads”.

```javascript
var oProfile = Preflight.getProfileByName("Magazine Ads");
if( oProfile != undefined) {
   console.println("-----------------------------------------");
   console.println("Name: " + oProfile.name);
   console.println("Comment: " + oProfile.description);
   console.println("HasFixups: " + oProfile.hasFixups);
   console.println("HasChecks: " + oProfile.hasChecks);
   console.println("-----------------------------------------");
}
```
