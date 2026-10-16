# createComplianceProfile

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | Acrobat Pro only |

Builds, for the document, a compliance profile tied to a particular PDF standard.

Parameters

| Parameter | Description |
| --- | --- |
| cStandardKey | Which PDF Standard version to check against. |
| oThermometer | (optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears. |

Valid standard version keys:

PDF/X-1a:2001

PDF/X-1a:2003

PDF/X-3:2002

PDF/X-3:2003

PDF/X-4:2008

PDF/X-4p:2008

PDF/X-5g:2008

PDF/X-5n:2008

PDF/X-5pg:2008

PDF/A-1a:2005

PDF/A-1b:2005

PDF/E-1:2008

Returns

A PreflightProfile object. Otherwise, undefined comes back.

Example: Check the current PDF document to PDF/A-1b:2005 compliance.

```javascript
var oProfile = Preflight.createComplianceProfile("PDF/A-1b:2005")
if( oProfile != undefined )
{
   var oThermometer = app.thermometer;
   var myPreflightResult = this.preflight( oProfile, true, oThermometer);
   if( myPreflightResult.numErrors > 0 ) {
       console.println( "PDF document is NOT PDF/A-1b:2005 compliant.");
   } else {
   console.println( "PDF document is PDF/A-1b:2005 compliant.");
   }
}
```
