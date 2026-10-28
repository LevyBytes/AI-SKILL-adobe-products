# profile_name

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | Acrobat Pro only | String | R |

Which Preflight profile was applied, by name.

Example: Display the properties from the audit trail.

```javascript
var oAuditTrail = this.getPreflightAuditTrail();
if( oAuditTrail != undefined) {
   var oProfile = Preflight.getProfileByFingerPrint(oAuditTrail.profile_fingerprint);
   if( oProfile != undefined) {
       console.println("-----------------------------------------");
       console.println("Name: " + oAuditTrail.profile_name);
       console.println("Creator: " + oAuditTrail.profile_creator);
       console.println("Creator Version: " + oAuditTrail.profile_creator_version);
       console.println("Format Version: " + oAuditTrail.profile_format_version);
       console.println("Results: " + oAuditTrail.preflight_results);
       console.println("Description: " + oAuditTrail.preflight_results_description);
       console.println("Executed Date: " + oAuditTrail.preflight_executed_date);
       console.println("Fingerprint: " + oAuditTrail.profile_fingerprint);
       console.println("-----------------------------------------");
   } else {
       this.removePreflightAuditTrail();
   }
}
```
