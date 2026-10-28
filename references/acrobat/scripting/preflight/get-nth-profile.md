# getNthProfile

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | Acrobat Pro only |

Pulls the Nth Preflight profile out of the roster of installed Preflight profiles.

Parameters

| Parameter | Description |
| --- | --- |
| nIndex | Zero-based position of the profile to fetch. |
| oThermometer | (optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears. |

Returns

A PreflightProfile object holding the profile that matches nIndex. Otherwise, undefined comes back.

Example: Enumerate through all of the profiles in Preflight.

```javascript
var num = Preflight.getNumProfiles(app.thermometer);
for( i= 0; i< num; ++i)
{
   var oProfile = Preflight.getNthProfile(i);
   console.println("-----------------------------------------");
   console.println("Name: " + oProfile.name);
   console.println("Comment: " + oProfile.description);
   console.println("HasFixups: " + oProfile.hasFixups);
   console.println("HasChecks: " + oProfile.hasChecks);
   console.println("-----------------------------------------");
}
```
