# preflight

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | D | No | Acrobat Pro only |

Runs a Preflight profile against the document. A failed Preflight run throws an exception.

Parameters

| Parameter | Description |
| --- | --- |
| oProfile | Which Preflight profile drives the Preflight run, given as a PreflightProfile object. |
| bOmitFixups | (optional) Skip every fixup the Preflight profile carries. Leave bOmitFixups unspecified and false stands in. |
| oThermometer | (optional) Bring up the status window and progress bar that signal a long operation underway. Grab a Thermometer object through app.thermometer. Leave oThermometer unspecified and no progress shows. |

Returns

A PreflightResult object.

Example: Run a Preflight profile and show the progress of the operation.

```javascript
var oProfile = Preflight.getProfileByName("Magazine Ads")
if( oProfile != undefined )
{
   var oThermometer = app.thermometer;
   var myPreflightResult = this.preflight( oProfile, false, oThermometer);
   if( myPreflightResult.numErrors > 0 ) {
   console.println( "Preflight found " + myPreflightResult.numErrors + " Errors.");
} else {
   console.println( "Preflight found no Errors.");
}
}
```
