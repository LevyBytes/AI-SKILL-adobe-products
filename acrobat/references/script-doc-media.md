# Doc Media, Preflight, Preflightaudittrail, Preflightprofile ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Doc.media; Preflight; PreflightAuditTrail; PreflightProfile; PreflightResult.

## Doc.media

### Doc and Doc.Media APIs — Doc.media

Within every document, the media property holds an object whose multimedia properties and methods operate on that document.

Note

Doc.media belongs to the Compatible Media JavaScript API introduced with Acrobat 6.0 (and Later). Multimedia assets built this way lean on the host operating system to find and start up a multimedia player already installed on the user's machine. Beginning with Acrobat 9.0 (and Later), Flash video (FLV) and Flash applications (SWF) gain native support and may be embedded within a PDF or streamed into one. Thanks to this native Flash support, playback works dependably regardless of platform. Nothing extra in the way of a media player or particular codec is required.

The Acrobat 9.0 (and Later) multimedia layer, which works through rich media annotations, replaces the older Acrobat 6.0 (and Later) Compatible Media. For that reason, anyone building PDFs that carry multimedia assets is urged in the strongest terms to adopt the rich media annotations from Acrobat 9 (and Later). For JavaScript coverage of rich media annotations, consult the AnnotRichMedia object.

### Doc.media properties

### canPlay

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

Reports whether a document is permitted to play multimedia. Whether playback can happen hinges on the user's Trust Manager preferences plus additional factors. Authoring mode, for instance, blocks playback.

What doc.media.canPlay hands back is an object carrying both a yes/no verdict and, where playback is blocked, the reason behind it.

When playback is permitted, the presence of canPlay.yes signals as much. (For now it is an empty object, though future versions may stuff data inside it.) Here is one easy way to probe for it:

```
if( doc.media.canPlay.yes )
{
    // We can play back multimedia for this document
}
```

When playback is blocked, what shows up instead is the canPlay.no object. Just as with canPlay.yes, you can either test simply whether canPlay.no is present or dig into it for the reason playback was denied. Inside canPlay.no you will find at least one of the following properties, and possibly others added down the road:

Property

Description

authoring

Cannot play when in authoring mode.

closing

Cannot play because the document is closing.

saving

Cannot play because the document is saving.

security

Cannot play because of security settings.

other

Cannot play for some other reason.

| --- | --- |

On top of that, canPlay.canShowUI tells you whether alert boxes or any other interface elements may be shown in reaction to this specific playback denial.

Example: Fetch the canPlay object and examine the situation where the document's media cannot be played.

```
var canPlay = doc.media.canPlay;
if( canPlay.no )
{
    // We can't play, why not?
    if( canPlay.no.security )
    {
        // The user's security settings prohibit playback,
        // are we allowed to put up alerts right now?
        if( canPlay.canShowUI )
            app.alert( "Security prohibits playback" );
        else
            console.println( "Security prohibits playback" );
    }
    else
    {
        // Can't play for some other reason, handle it here
    }
}
```

### Doc.media methods

### deleteRendition

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Removes the named Rendition from the document. Once gone, that Rendition can no longer be reached through JavaScript. Should the Rendition be absent, the call simply has no effect.

Parameters

cName

A string holding the Rendition's name.

| --- | --- |

Example: Remove one specific rendition and confirm afterward whether it worked.

```
this.media.deleteRendition("myMedia");
if ( this.media.getRendition("myMedia") == null)
    console.println( "Rendition successfully deleted" );
```

### getAnnot

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Searches the document for a ScreenAnnot object matched by page number together with either a name or a title, handing it back; if no screen annotation matches, null comes back instead. Supplying both name and title requires that both line up.

Parameters

Parameter

Description

args

The object whose properties get handed to this method. Those properties appear below.

| --- | --- |

Here are the properties carried by args.

nPage

The page number (base 0) where the annotation sits.

cAnnotName

(optional) The screen annotation's name. - PDFs that Acrobat produces never make use of cAnnotName.

cAnnotTitle

(optional) The screen annotation's title.

| --- | --- |

Note

This method's parameters have to arrive as an object literal rather than as an ordered parameter sequence.

Returns

ScreenAnnot object

Example: Because Acrobat's interface lets you set a screen annotation's title yet not its name, getAnnot is generally used like so:

```
var annot= myDoc.media.getAnnot

     ({ nPage: 0,cAnnotTitle: "My Annot Title" });
```

For one more example, look at the one that follows getRendition.

### getAnnots

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

What doc.media.getAnnots gives back is an array holding every ScreenAnnot object on the document page you name, or, when nPage is left off, every ScreenAnnot object across all the document's pages. Should no such ScreenAnnots exist, the array comes back empty.

Parameters

nPage

The page number (base 0) where the ScreenAnnots sit.

| --- | --- |

Returns

Array of ScreenAnnot objects

Example: Pull a list of the ScreenAnnots sitting on page 0, then play a media clip inside a screen annotation picked at random from that list.

```
var annots = this.media.getAnnots({ nPage: 0 });
var rendition = this.media.getRendition("myClip");
var settings = { windowType: app.media.windowType.docked }
var l = annots.length
var i = Math.floor( Math.random() * l ) % l
var args = { rendition:rendition, annot:annots[i], settings:settings };
app.media.openPlayer( args );
```

### getOpenPlayers

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Hands back an array of MediaPlayer objects, with one entry per media player open right now. Entries sit in the array in the same sequence the players were opened. With this array in hand, you can act on some or all open players — stopping or closing every player the document opened, say, without maintaining your own list of them.

Every call to getOpenPlayers produces a fresh copy of the array, capturing the players that were open at that instant. Players opened afterward will not appear in an array you already obtained. When a player from the array is closed, its object stays in the array while player.isOpen flips to false. To pull a fresh, current player array, call doc.media.getOpenPlayers once more.

Steer clear of writing a loop that walks doc.media.getOpenPlayers directly:

```
for( var i in doc.media.getOpenPlayers() ) // Wrong!
```

Rather, grab a copy of the player array first and loop across that:

```
var players = doc.media.getOpenPlayers();
for( var i in players ) {
....
}
```

Doing it this way keeps the loop behaving properly even should players open or close while it runs.

Returns

Array of MediaPlayer objects.

Example: The pair of functions below each accept a Doc as an argument and act on the running players tied to that Doc.

```
// Stop all running players.
function stopAllPlayers( doc ) {
    var players = doc.media.getOpenPlayers();
    for( var i in players ) players[i].stop();
}
// Close all running players. Closing a player does not remove it from
// the array.
function closeAllPlayers( doc ) {
    var players = doc.media.getOpenPlayers();
    for( var i in players )
        players[i].close( app.media.closeReason.general );
}
```

### getRendition

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Finds a Rendition in the document by its name and returns it, or returns null when no Rendition carries that name.

Parameters

cName

A string; it holds the Rendition's name.

| --- | --- |

Returns

Rendition object

Example: The script below fires from a form button's mouse-up action. It runs a docked media clip inside a screen annotation.

```
app.media.openPlayer({
    rendition: this.media.getRendition( "myClip" ),
    annot: this.media.getAnnot( {nPage:0,cAnnotTitle:"myScreen"} ),
    settings: { windowType: app.media.windowType.docked }
});
```

### newPlayer

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Builds a MediaPlayer object and returns it. Inside the args parameter a settings property is mandatory, while an events property is optional. Extra user-defined properties may ride along as well. Whatever properties args holds get copied across into the freshly made MediaPlayer object. The copy is shallow, so any copied property that is itself an object ends up shared between args and the new player.

A player produced by newPlayer is stripped down — it carries none of the standard EventListeners that ordinary Acrobat media player behavior depends on. Bring in app.media.addStockEvents to wire up the EventListeners that are needed.

Generally you are better off reaching for app.media.createPlayer rather than doc.media.newPlayer when making a media player. createPlayer wires up the standard EventListeners and the rest of the player properties for you on its own.

Parameters

args

A PlayerArgs object.

| --- | --- |

Returns

MediaPlayer object.

Example: See Events. dispatch for an example.

## Preflight

### Preflight APIs — Preflight

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

The Preflight tool is what this object stands for.

### Preflight methods

### createComplianceProfile

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Builds, for the document, a compliance profile tied to a particular PDF standard.

Parameters

Parameter

Description

cStandardKey

Which PDF Standard version to check against.

oThermometer

(optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears.

| --- | --- |

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

```
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

### getNthProfile

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Pulls the Nth Preflight profile out of the roster of installed Preflight profiles.

Parameters

Parameter

Description

nIndex

Zero-based position of the profile to fetch.

oThermometer

(optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears.

| --- | --- |

Returns

A PreflightProfile object holding the profile that matches nIndex. Otherwise, undefined comes back.

Example: Enumerate through all of the profiles in Preflight.

```
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

### getNumProfiles

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Returns how many Preflight profiles are installed.

Parameters

Parameter

Description

oThermometer

(optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears.

| --- | --- |

Returns

The number of installed Preflight profiles.

### getProfileByName

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Locates, by its name, one Preflight profile within the roster of installed Preflight profiles.

Parameters

Parameter

Description

cName

Which profile to fetch, given by name.

oThermometer

(optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears.

| --- | --- |

Returns

A PreflightProfile object when a profile carrying the given name exists. Otherwise, undefined comes back.

Example: Get a profile with the name “Magazine Ads”.

```
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

### getProfileByFingerPrint

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Locates the Preflight profile carrying a given audit-trail fingerprint. That fingerprint is available from the doc.getPreflightAuditTrail method.

Parameters

Parameter

Description

cFingerPrint

Which profile to fetch, given by its fingerprint.

oThermometer

(optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears.

| --- | --- |

Returns

A PreflightProfile object when a profile carrying the given fingerprint exists. Otherwise, undefined comes back.

Example: Get a profile from the audit trail.

```
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

## PreflightAuditTrail

### Preflight APIs — PreflightAuditTrail

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

What a PreflightAuditTrail captures is the record of a Preflight check already run against the PDF; it holds details on the Preflight profile that was applied together with how that check turned out.

### PreflightAuditTrail properties

### preflight_executed_date

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

When — date and time — the profile was run.

### preflight_results

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

How running the profile turned out, one of four possible values:

“Errors “

“Warnings “

“Info “

“Success “

### preflight_results_description

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

Wording that spells out the errors.

### profile_creator

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

Which software built the profile.

### profile_creator_version

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

Which version of the software was used to build the profile.

### profile_fingerprint

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

The fingerprint belonging to the profile that ran the Preflight check.

### profile_format_version

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

Which version of the storage format held the profile.

### profile_name

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

Which Preflight profile was applied, by name.

Example: Display the properties from the audit trail.

```
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

## PreflightProfile

### Preflight APIs — PreflightProfile

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

A single Preflight profile is what a PreflightProfile denotes — specifically one that sits installed inside the Preflight tool. You can come by the PreflightProfile object through Preflight.getNthProfile, Preflight.getProfileByName, Preflight.createComplianceProfile or Preflight.getProfileByFingerPrint.

### PreflightProfile properties

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

The Preflight profile's name.

### description

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

String

R

| --- | --- | --- | --- | --- | --- |

The Preflight profile's description.

### hasFixups

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

Boolean

R

| --- | --- | --- | --- | --- | --- |

Holds true when the Preflight profile carries fixups; if not, false.

### hasChecks

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

Boolean

R

| --- | --- | --- | --- | --- | --- |

Holds true when the Preflight profile carries checks; if not, false.

### PreflightProfile methods

### hasConversion

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Determines whether the preflight profile includes a conversion targeting a particular PDF standard.

Parameters

cVersion

A string naming the PDF standard.

| --- | --- |

Valid standard keys:

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

True when the profile has that conversion set up; otherwise false.

## PreflightResult

### Preflight APIs — PreflightResult

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

A PreflightResult denotes one Preflight outcome; it amounts to a data structure that the Preflight tool generates. You can come by the PreflightResult object through the doc.preflight method.

### PreflightResult properties

### numErrors

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

Integer

R

| --- | --- | --- | --- | --- | --- |

How many errors turned up in the PDF document.

### numWarnings

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

Integer

R

| --- | --- | --- | --- | --- | --- |

How many warnings turned up in the PDF document.

### numInfos

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

Integer

R

| --- | --- | --- | --- | --- | --- |

How many pieces of information turned up in the PDF document.

### numFixed

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

Integer

R

| --- | --- | --- | --- | --- | --- |

How many fixups were applied successfully.

### numNotFixed

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

Acrobat Pro only

Integer

R

| --- | --- | --- | --- | --- | --- |

How many fixups failed to apply.

### PreflightResult methods

### report

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

Acrobat Pro only

| --- | --- | --- | --- |

Produces a Preflight report in XML form.

Parameters

Parameter

Description

oThermometer

(optional) Brings up the status window plus the progress bar so the user can tell a long-running operation is underway. Obtain a Thermometer object through app.thermometer. Leave oThermometer out and no progress display appears.

| --- | --- |

Returns

A string carrying the XML report. Feed this string to the XMLData.parse method to build an XFA object standing for either a tree topped by one node or a tree begun from a list of nodes (a tree list).

Example: Create and parse a Preflight XML report.

```
var oProfile = Preflight.getProfileByName("Magazine Ads")
if( oProfile != undefined )
{
   var oThermometer = app.thermometer;
   var myPreflightResult = this.preflight( oProfile, false, oThermometer);
   if( myPreflightResult.numErrors > 0 ) {
   var cXMLData = myPreflightResult.report(oThermometer);
   var oXMLData = XMLData.parse(sXMLData, false);
   // .
  .. do something with XMLData object ...
}
```
