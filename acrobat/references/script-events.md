# Events, Fdf

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Events; FDF.

## Events

### JavaScript APIs — Events

What a multimedia Events object gathers together is a set of EventListener objects. On a MediaPlayer object or a ScreenAnnot object, the events property is one of these Events objects.

app.media.Events serves as the constructor that builds an Events object.

Example: The snippet below runs as a rendition action.

```
console.println("Ready to play "" + event.action.rendition.uiName
    +"" from screen annot "" + event.targetName + "".");
// Create a simple app.media.Events object
var events = new app.media.Events({
    // The Event object is passed as a parameter to all event

     // listeners, this is a the parameter "e" below/
    // Called immediately during a Play event:
    onPlay: function( e ) { console.println( "onPlay: media.id = "
        + e.media.id  ); },
    // Called during idle time after the Play event:
    afterPlay: function() { console.println( "afterPlay" ); },
});
var player = app.media.openPlayer({ events: events });
```

### Events methods

### add

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Registers any quantity of EventListener objects into this Events object's dispatch table. Listeners already in place are kept, and once an event fires, every listener method that matches it runs.

First, the standard event dispatcher invokes any onEveryEvent methods in their order of registration; next it invokes the on handlers for the precise event being dispatched, again in registration order. It then arms a one-millisecond timer to run any after handlers. Once that timer fires, the after handlers run in the same order laid out for the on handlers.

Refer to the opening paragraphs of the EventListener object for the account of on and after events.

Note

Add the very same EventListener a second time and that second attempt does nothing. Add an EventListener from within an event method, and the freshly added listener's methods take part in dispatching for the event already underway.

Parameters

Any number of parameters, each one an EventListener object.

Example: Register an EventListener for the onPlay event. Here player is a MediaPlayer object.

```
player.events.add
({
    onPlay: function() { console.println( "onPlay" ); }
});
```

See also remove.

### dispatch

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Each time a MediaPlayer raises an event, the Multimedia plug-in builds an event object and invokes MediaPlayer.events.dispatch(event); a ScreenAnnot does the same through ScreenAnnot.events.dispatch(event).

Within the whole event-dispatching machinery, dispatch is the sole piece the Acrobat Multimedia plug-in invokes on its own. Supply your own MediaPlayer.events object carrying its own dispatch method and you can swap in a completely different event-dispatching scheme of your own.

What dispatch has to do is invoke each EventListener bound to the event, which it recognizes from oMediaEvent.name. Typically a PDF file supplies no dispatch method of its own and relies on the standard event-dispatching scheme instead.

Parameters

oMediaEvent

An event object.

| --- | --- |

Should you supply your own dispatch method, bear in mind that oMediaEvent.name can include spaces. To let the name slot directly into a JavaScript event method name, the standard dispatch method copies oMediaEvent.name into oMediaEvent.media.id with the spaces stripped out.

Bear in mind too that a dispatch method you write runs synchronously as each event arrives, so whatever it does falls under the same restrictions described for on event methods (see EventListener object). Above all, the method must not invoke anything on a MediaPlayer object, nor take any action that might indirectly trigger a MediaPlayer method.

Calling the dispatch method straight from JavaScript code is unusual, though it is allowed.

Example: Build a new media player wired to a custom event dispatcher. Rarely seen in everyday PDF JavaScript, this counts as an advanced technique.

```
var player = doc.media.newPlayer(
{
    events:
    {
        dispatch: function( e )
        {
            console.println( 'events.dispatch' + e.toSource() );
        }
    }
});
// Synthesize and dispatch a Script event, as if one had been

 // encountered while the media was playing. With the standard event

// dispatcher, this will call any and all event listeners that have been
// added for this event. With the custom dispatcher above, it will log a
// message to the console.
var event = new Event;
event.name = "Script";
event.media = { command: "test", param: "value" };
player.events.dispatch( event );
```

### remove

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |

One or more EventListeners that an earlier Events.add call put in place are taken back out by this method. Pass an object literal straight into Events.add and you lose any way to remove that listener through Media.remove, since no reference to the identical object can be handed over. So that the same reference reaches remove, hand your EventListener to add through a variable rather than as a bare object literal, then pass that very variable to remove, as the example below shows.

You can call remove from within an event method to strip out any EventListener at all — even the one the running event method belongs to. That event method keeps running to completion, but none of the other event methods in the same EventListener object will fire.

Parameters

Any number of EventListener objects.

Example: Take player to be a MediaPlayer object.

```
var listener = { afterStop: function() { app.alert("Stopped!"); } }
player.events.add( listener );      // Add listener
.....
player.events.remove( listener );   // Later, remove it
```

## FDF

### JavaScript APIs — FDF

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

All

| --- | --- | --- | --- |

A PDF-encoded data exchange file is what this object stands for. More often than not, an FDF file holds forms data exported out of a PDF. That said, FDF files can equally serve as all-purpose data files, and supporting exactly that role is the reason the FDF object is provided.

Every security method and property can be reached only within batch, console, and application initialization events. See Privileged context.

### FDF properties

### deleteOption

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

Yes

Not available in Reader

Integer

R/W

| --- | --- | --- | --- | --- | --- |

Says whether the FDF file ought to be erased on its own once processing finishes. Whether this value gets honored varies with what the FDF file holds and how it is handled. From Acrobat 6.0 onward it applies to embedded files. The permitted values are

0: (default) once processing wraps up, the FDF file is discarded automatically by Acrobat.

1: Acrobat leaves the FDF file in place after handling it (though a web or mail browser might still clear it away).

2: after processing, Acrobat asks the user whether the FDF file should go (though a web or mail browser might still clear it away).

### isSigned

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All but Reader

Boolean

R

| --- | --- | --- | --- | --- | --- |

Gives back true when the FDF data file carries a signature.

Example: Check whether the fdf carries a signature.

```
var fdf = app.openFDF("/C/temp/myDoc.fdf");
console.println( "It is "+ fdf.isSigned + " that this FDF is signed");
fdf.close();
```

See a more complete example following signatureSign.

### numEmbeddedFiles

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All but Reader

Integer

R

| --- | --- | --- | --- | --- | --- |

How many files sit embedded inside the FDF file. Provided the FDF object points at a valid FDF file, nothing will be thrown.

The addEmbeddedFile method is how a file gets embedded within an FDF file. Example: Spin up a fresh FDF object, embed a PDF doc, save the FDF, reopen it, then tally the embedded files.

```
var fdf = app.newFDF();
fdf.addEmbeddedFile("/C/myPDFs/myDoc.pdf");
fdf.save("/c/temp/myDocWrapper.fdf");
fdf = app.openFDF("/c/temp/myDocWrapper.fdf");
console.println("The number of embedded files = "
    + fdf.numEmbeddedFiles);
fdf.close();
```

### FDF methods

### addContact

Version (Key)

Save-Prefs

Security

Product

6.0

D

Yes

Not allowed in Reader: Only available in Acrobat products

| --- | --- | --- | --- |

Puts a contact into the FDF file.

Parameters

Parameter

Description

oUserEntity

A UserEntity object that identifies which contact gets appended to the FDF file.

| --- | --- |

Returns

Throws an exception on failure.

Example:

```
var oEntity={firstName:"Fred", lastName:"Smith", fullName:"Fred Smith"};
var f = app.newFDF();
f.addContact( oEntity );
f.save( "/c/temp/FredCert.fdf" );
```

### addEmbeddedFile

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Appends the named file onto the tail of the FDF file's array of embedded files. According to nSaveOption, whoever opens the FDF file is directed to save the embedded file or files. A PDF embedded file is opened and shown; an FDF embedded file is opened for processing.

Support for FDF files that carry embedded files dates back to Acrobat 4.05. Picture PDF files hosted on an HTTP server where you would rather the user click to download and keep the file than view it inside the browser — that is one use for embedding them. These embedded files bear no connection to whatever files accompany a forms-data set stored in an FDF file.

Parameters

Parameter

Description

cDIPath

(optional) A path that is absolute and device-independent, pointing at a file on the user's local disk. Leave it out and the user gets asked to find a file.

nSaveOption

(optional) Sets out, for whoever opens this FDF file, how the embedded file is offered to them, the location it is written to, and whether it is removed once saved. The values are:

0: the Acrobat document folder receives the file. Under Acrobat 8, a confirmation dialog pops up first, and the user has to accept it before anything is written to disk.

1: (the default) a filename is requested from the user, and the embedded file is stored there.

2: leave this one unused.

3: the file is written automatically as a temporary one, then cleared away during cleanup (the moment Acrobat shuts down).

For Acrobat releases 4.05 through 5.05, a value of 0 or 3 makes Acrobat ask where the save folder lives, unless that preference is already on record. No matter which nSaveOption applies, once a PDF or FDF file has been saved Acrobat goes ahead and opens it.

| --- | --- |

Returns

Raises an exception when the operation cannot be carried out; otherwise it gives back the count of embedded files the FDF file now holds.

Example: Spin up a new FDF, embed a PDF doc, then save.

```
var fdf = app.newFDF();
fdf.addEmbeddedFile("/C/myPDFs/myDoc.pdf");
fdf.save("/c/temp/myDocs.fdf");
```

### addRequest

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Puts a request into the FDF file. An FDF file admits just one request; if it already carries one, this new request takes its place.

Parameters

Parameter

Description

cType

Names the thing being asked for. As it stands, "CMS" is the lone accepted string, standing for a contact-information request.

cReturnAddress

Carries the request's return-address string. It has to open with mailto:, http: or https: and take a shape such as "http://www.example.com/cgi.pl" or "mailto:jdoe@example.com".

cName

(optional) Identifies the person or organization behind the request.

| --- | --- |

Returns

Throws an exception if there is an error.

Example:

```
var f = app.newFDF();
f.addRequest( "CMS", "http://www.example.com/cgi.pl", "Acme Corp" );
f.save( "/c/tmp/request.fdf" );
```

### close

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Closes the FDF file at once.

Returns

Throws an exception if there is an error.

See the FDF object save method, which also closes an FDF file.

Example: See example following the addEmbeddedFile method.

### mail

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Writes the FDF object out as a temporary FDF file and sends that file as an attachment to all of the recipients, with the user interface shown or skipped. Once it is no longer needed, the temporary file is removed.

See also a pp. mailGetAddrs, app. mailMsg, the Doc methods mailDoc and mailForm, and the Report object method mail.

Note

Under Windows, this method works only where the client machine's default mail application has been set up as MAPI enabled.

Parameters

Parameter

Description

bUI

(optional) Governs whether a user interface appears. Pass true (this is the default) and the remaining parameters seed a compose-new-message window that gets shown to the user. Pass false and the cTo parameter becomes mandatory while everything else stays optional. - (Acrobat 7.0) Run this method outside a privileged context and the bUI parameter is disregarded, reverting to true. See Privileged context.

cTo

(optional) A semicolon-separated list of recipients for the message.

cCc

(optional) A semicolon-separated list of CC recipients for the message.

cBcc

(optional) A semicolon-separated list of BCC recipients for the message.

cSubject

(optional) The subject of the message. The length limit is 64 KB.

cMsg

(optional) The content of the message. The length limit is 64 KB.

| --- | --- |

Returns

Throws an exception if there is an error.

Example:

```
var fdf = app.openFDF( "/c/temp/myDoc.fdf" );
/* This opens the compose new message window */
fdf.mail();

/* This will send out the mail with the attached FDF file to fun1@example.com

 and fun2@example.com */
fdf.mail( false, "fun1@example.com", "fun2@example.com", "",
    "This is the subject", "This is the body.");
```

### save

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Writes the FDF object out to a file; a save is performed every time. Once saved, the file is closed and the FDF object stops holding a valid object reference.

The close method, covered elsewhere, will also close an FDF file.

Parameters

Parameter

Description

cDIPath

The device-independent path of the file to be saved. - cDIPath must be a safe path (see Safe path) and must have an extension of .fdf.

| --- | --- |

Returns

Throws an exception if there is an error.

Example: Create a new FDF, embed a PDF doc, then save.

```
var fdf = app.newFDF()
fdf.addEmbeddedFile("/C/myPDFs/myDoc.pdf");
fdf.save("/c/temp/myDocs.fdf");
```

### signatureClear

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

When the FDF object carries a signature, this wipes it and reports true on success. On an unsigned FDF object it has no effect. The file itself is left unsaved.

Returns

true on success.

### signatureSign

Version (Key)

Save-Prefs

Security

Product

6.0

No

Yes

Not available in Reader

| --- | --- | --- | --- |

Applies a signature to the FDF object using the security object you name. An FDF object accepts only a single signature. The signing happens in memory, and the object is not written to disk on its own — invoke save afterward to persist the signed FDF object, and invoke signatureClear to wipe FDF signatures.

Parameters

Parameter

Description

oSig

The SecurityHandler object enlisted to do the signing. As a rule a security object has to be initialized before it can sign anything. Whether your security handler can sign FDF files at all is something to confirm in its documentation; the SecurityHandler object's signFDF property reports whether a given security object is up to signing FDF files.

oInfo

(optional) A SignatureInfo object containing the writable properties of the signature.

nUI

(optional) Which kind of dialog box surfaces during signing. The values are:

0: Show no dialog box.

1: Show a simplified dialog box with no editable fields (fields can be provided in oInfo).

2: Show a more elaborate dialog box that includes editable fields for reason, location, and contact information. The default is 0.

cUISignTitle

(optional) The title to use for the sign dialog box. It is used only if nUI is non-zero.

cUISelectMsg

(optional) A message to display when a user must select a resource for signing, such as selecting a credential. It is used only when nUI is non-zero.

| --- | --- |

Returns

true when the signature went on successfully; otherwise false.

Example: Open an existing FDF data file and sign.

```
var eng = security.getHandler( "Adobe.PPKLite" );
eng.login("myPassword","/c/test/Acme.pfx");
var myFDF = app.openFDF( "/c/temp/myData.fdf" );
if( !myFDF.isSigned ) {
    myFDF.signatureSign({
        oSig: eng,
        nUI: 1,
        cUISignTitle: "Sign Embedded File FDF",
        cUISelectMsg: "Please select a Digital ID to use to "
            + "sign your embedded file FDF."
    });
    myFDF.save( "/c/temp/myData.fdf" );
};
```

### signatureValidate

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All but Reader

| --- | --- | --- | --- |

Checks an FDF object's signature and hands back a SignatureInfo object that reports the signature's properties.

Parameters

Parameter

Description

oSig

(optional) The security handler enlisted to validate the signature. This may be a SecurityHandler object or else a generic object carrying the properties below:

oSecHdlr: The SecurityHandler object to use to validate this signature.

bAltSecHdlr: A Boolean. Set it true and a substitute security handler — picked according to the user's preference settings — is allowed to validate the signature. It defaults to false, which means validation falls to the security handler named by the signature's handlerName property. Supply oSecHdlr and this parameter is ignored. Leave oSig out entirely and validation again falls to the handler named by the signature's handlerName property.

bUI

(optional) Set true to permit the UI to appear, where needed, during validation of the data file. That UI can serve to pick a validation handler when none has been named.

| --- | --- |

Returns

A SignatureInfo object. The signature status is described in status property.

Example: Open an FDF file, if signed, validate it the signature and return information to the console.

```
fdf = app.openFDF("/c/temp/myDoc.fdf");
eng = security.getHandler( "Adobe.PPKLite" );
if (fdf.isSigned)
{
    var oSigInfo = fdf.signatureValidate({
        oSig: eng,
        bUI: true
    });
    console.println("Signature Status: " + oSigInfo.status);
    console.println("Description: " + oSigInfo.statusText);
} else {
    console.println("FDF not signed");
}
```
