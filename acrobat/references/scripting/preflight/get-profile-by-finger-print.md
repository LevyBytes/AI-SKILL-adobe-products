# getProfileByFingerPrint

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | Acrobat Pro only |

Locates the Preflight profile carrying a given audit-trail fingerprint. That fingerprint is available from the doc.getPreflightAuditTrail method.

Parameters

| Parameter | Description |
| --- | --- |
| cFingerPrint | Which profile to fetch, given by its fingerprint. |
| oThermometer | (optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears. |

Returns

A PreflightProfile object when a profile carrying the given fingerprint exists. Otherwise, undefined comes back.

Example: Get a profile from the audit trail.

```javascript
var oAuditTrail = this.getPreflightAuditTrail();
var oProfile = Preflight.getProfileByFingerPrint(oAuditTrail.profile_fingerprint);
if( oProfile != undefined) {
   console.println("-----------------------------------------");
   console.println("Name: " + oProfile.name);
   console.println("Comment: " + oProfile.description);
   console.println("HasFixups: " + oProfile.hasFixups);
   console.println("HasChecks: " + oProfile.hasChecks);
   console.println("-----------------------------------------");
}
```
