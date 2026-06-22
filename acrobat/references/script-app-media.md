# App Media (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app.media

Properties and functions handy for multimedia JavaScript code are what this object lays out.

A number of the app.media properties are enumeration objects spelling out the values various properties accept. Later Acrobat releases might tack on more such values, so JavaScript code ought to be ready to meet values beyond the ones spelled out here. By the same token, JavaScript code might run on an Acrobat build older than the one it targeted, in which event it has to fall back on whatever values that build supports.

Note

app.media belongs to the Acrobat 6.0 (and Later) Compatible Media JavaScript API. Multimedia assets built this way depend on the host operating system to track down and start a multimedia player already on the user's machine. Flash video (FLV) along with Flash applications (SWF) draw native support in Acrobat 9.0, and either can be embedded inside a PDF document or streamed to one. With Flash backed natively, playback holds up reliably across platforms. Nothing extra — no separate media player, no particular codec — is required.

The multimedia in Acrobat 9.0, which works through rich media annotations, takes over from Acrobat 6.0 (and Later) Compatible Media. That is why anyone developing PDFs that carry multimedia assets is urged in the strongest terms to adopt the rich media annotations of Acrobat 9. For the JavaScript that supports rich media annotations, turn to the AnnotRichMedia object.

### app.media properties

### align

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the MediaSettings.floating.align property. Alignment is measured against the window named by the MediaSettings.floating.over property. (Refer to the values for app.media.over.)

The table below holds the valid values.

Value — Position of floating window

app.media.align.topLeft

At the top left corner

app.media.align.topCenter

At the top center

app.media.align.topRight

At the top right corner

app.media.align.centerLeft

At the center left

app.media.align.center

At the center

app.media.align.centerRight

At the center right

app.media.align.bottomLeft

At the bottom left corner

app.media.align.bottomCenter

At the bottom center

app.media.align.bottomRight

At the bottom right corner

### canResize

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the MediaSettings.floating.canResize property, the one governing whether the user is allowed to resize a floating window.

The table below holds these values.

Value — Description

app.media.canResize.no

Cannot be resized

app.media.canResize.keepRatio

Resizing is allowed only when the aspect ratio stays intact

app.media.canResize.yes

Resizing is allowed with no need to hold the aspect ratio

### closeReason

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the event.reason property on a Close event. Those values are:

app.media.closeReason.general

app.media.closeReason.error

app.media.closeReason.done

app.media.closeReason.stop

app.media.closeReason.play

app.media.closeReason.uiGeneral

app.media.closeReason.uiScreen

app.media.closeReason.uiEdit

app.media.closeReason.docClose

app.media.closeReason.docSave

app.media.closeReason.docChange

Refer to the afterClose and onClose methods on the EventListener object.

### defaultVisible

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Boolean | Access: R

Set to true, this property supplies the default that MediaSettings.visible takes.

### ifOffScreen

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values a MediaSettings.floating.ifOffScreen property accepts, the property dictating what happens when the floating window lands wholly or partly off the screen.

The table below pairs these values with their descriptions.

Value — Description

app.media.ifOffScreen.allow

Do nothing

app.media.ifOffScreen.forceOnScreen

Shift and/or resize the window until it sits on-screen

app.media.ifOffScreen.cancel

Call off playing the media clip

### layout

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values a MediaSettings.layout property accepts.

Values and their descriptions fill the table below.

Value — Description

app.media.layout.meet

Scale to fit all content, preserve aspect, no clipping, background fill

app.media.layout.slice

Scale to fill the window, preserve aspect, and clip X or Y as needed

app.media.layout.fill

Scale X and Y separately to fill the window

app.media.layout.scroll

Natural size with scrolling

app.media.layout.hidden

Natural size with clipping

app.media.layout.standard

Use the player's default settings

### monitorType

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values a MediaSettings.monitorType property accepts.

Values and their descriptions fill the table below:

Value — Description

app.media.monitorType.document

The monitor holding the largest share of the document window

app.media.monitorType.nonDocument

The monitor holding the smallest share of the document window

app.media.monitorType.primary

Primary monitor

app.media.monitorType.bestColor

Monitor carrying the deepest color

app.media.monitorType.largest

Monitor with the most area (measured in pixels squared)

app.media.monitorType.tallest

Monitor with the most height (measured in pixels)

app.media.monitorType.widest

Monitor with the most width (measured in pixels)

### openCode

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the code property carried by the return value of MediaPlayer.open. The values are:

app.media.openCode.success

app.media.openCode.failGeneral

app.media.openCode.failSecurityWindow

app.media.openCode.failPlayerMixed

app.media.openCode.failPlayerSecurityPrompt

app.media.openCode.failPlayerNotFound

app.media.openCode.failPlayerMimeType

app.media.openCode.failPlayerSecurity

app.media.openCode.failPlayerData

### over

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values a MediaSettings.floating.over property accepts; its value is what positions a floating window. See app.media.align.

Value — Description

app.media.over.pageWindow

Line up the floating window against the document (page) window

app.media.over.appWindow

Line up the floating window against the application window

app.media.over.desktop

Line up the floating window against the entire virtual desktop

app.media.over.monitor

Line up the floating window against the (selected) monitor display screen

### pageEventNames

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the event.name property for a page-level action. Event names tied to direct user actions are left out here. This enumeration exists so that page-level actions can be told apart from ones a user directly triggers. These are its values:

app.media.pageEventNames.Open

app.media.pageEventNames.Close

app.media.pageEventNames.InView

app.media.pageEventNames.OutView

Example: app.media.pageEventNames serves to separate a page-level action from a direct user action. What follows is folder-level or document-level JavaScript reachable from any point in a document.

```
function myMMfunction () {
    if ( app.media.pageEventNames[event.name] ) {
        console.println("Page Event: " + event.name);
        ...
    } else {
        console.println("User Generated Event: " + event.name);
        ...
    }
}
```

### raiseCode

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out values that can turn up in the error.raiseCode property once an exception gets thrown. This property is present solely when error.name holds "RaiseError". You may run into values on top of these.

```
app.media.raiseCode.fileNotFound
app.media.raiseCode.fileOpenFailed
```

### raiseSystem

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out values that can turn up in the error.raiseSystem property once an exception gets thrown. This property is present solely when error.name holds "RaiseError".

```
app.media.raiseSystem.fileError
```

The property above may gain further values.

### renditionType

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in Rendition.type. The values and what they describe appear below.

Value — Description

app.media.renditionType.unknown

A type this build of Acrobat does not recognize

app.media.renditionType.media

A media rendition

app.media.renditionType.selector

A rendition selector

### status

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values that can turn up in the event.media.code property on a Status event (see onStatus and afterStatus). Most of these values carry extra information, which lands in the event.text property. The values are:

Value — Description

app.media.status.clear

Empty string—this status event wipes out any message

app.media.status.message

General message

app.media.status.contacting

Hostname being contacted

app.media.status.buffering

Progress message or nothing

app.media.status.init

Name of the engine being initialized

app.media.status.seeking

Empty string

Side by side with the event.media.status code sits the event.media.text, a string mirroring the present status, as laid out above.

### trace

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Boolean | Access: R/W

Flip this property to true and trace messages print to the JavaScript console while players are created and events dispatched.

Note

app.media.trace exists for testing alone. Keep this property out of any PDF file you ship. It is set to change in later Acrobat releases.

### version

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Number | Access: R

The multimedia API's version number, which right now is 7.0.

### windowType

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All | Type: Object (enumeration) | Access: R

Lists out the values a MediaSettings.windowType property accepts. The table below holds these values.

Value — Description

app.media.windowType.docked

Docked to a PDF page

app.media.windowType.floating

Floating (pop-up) window

app.media.windowType.fullScreen

Full screen mode

### app.media methods

### alertFileNotFound

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All

| --- | --- | --- | --- |

Pops up the usual "file not found" warning, which can carry a Don't Show Again check box if you want one.

Parameters

Parameter

Description

oDoc

The Doc to which this alert belongs is oDoc

cFilename

The missing file's name is cFilename

bCanSkipAlert

(optional) When bCanSkipAlert is set true and the check box gets ticked by the user, the return value is true; without that it is false. Its default is false.

| --- | --- |

Returns

When bCanSkipAlert is true, a checked box yields true and an unchecked one yields false.

Example:

```
if ( !doNotNotify )
{
    var bRetn = app.media.alertFileNotFound(this, cFileClip, true );
    var doNotNotify = bRetn;
}
```

### alertSelectFailed

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Brings up the usual warning shown after a rendition.select call does not succeed.

Parameters

Parameter

Description

oDoc

This alert hangs off the Doc named in oDoc

oRejects

(optional) When supplied, this is an array of MediaReject objects of the kind PlayerInfoList.select hands back.

bCanSkipAlert

(optional) When set true and the box is ticked by the user, true comes back from the method; otherwise false does. The default is false.

bFromUser

(optional) A Boolean that shapes how the alert text reads. Set it true when the code fired from a direct user action, or false when something else — say, choosing a bookmark — set it off. The default is false.

| --- | --- |

Returns

With bCanSkipAlert set true, a ticked check box gives back true and an unticked one gives back false.

Note

Should rendition.select come up empty on a usable player while the select parameter bWantRejects is true, the MediaSelection object that comes back holds an array of MediaReject objects; feed that array in here as the oRejects parameter. From there, alertSelectFailed prompts the user to head to the web and grab a suitable player.

Example: Displays Cannot Play Media Clip, with check box.

```
var bRetn = app.media.alertSelectFailed({
    oDoc: this,
    bCanSkipAlert: true
});
```

### argsDWIM

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

A "do what I mean" helper that app.media.createPlayer, app.media.openPlayer, and app.media.startPlayer rely on. For any property left unset in the PlayerArgs object, it supplies a default pulled from the event object — which is what lets those functions run as rendition action event handlers without arguments, or run inside custom JavaScript where the arguments are spelled out.

Parameters

Parameter

Description

args

A PlayerArgs object (see app.media. createPlayer).

| --- | --- |

Returns

PlayerArgs object

Example: See createPlayer for an example of usage.

### canPlayOrAlert

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Checks whether media playback is permitted at all; a true result means it is. When playback is blocked, the user gets an alert and the result is false.

Parameters

Parameter

Description

args

A PlayerArgs object (see app.media. createPlayer).

| --- | --- |

Returns

true if media playback is allowed, otherwise false.

Note

Before it tries to build a player, createPlayer runs this function. Should you roll your own replacement for createPlayer, canPlayOrAlert is available to warn the user wherever playback is off-limits — multimedia authoring mode being one such case.

Within the args object, doc is the lone property that matters, so the snippet below works.

```
// There is a Doc in myDoc
if( app.media.canPlayOrAlert({ doc: myDoc })
/* OK to create player here */ ;
```

What runs above will show "Cannot play media while in authoring mode", or whatever other alert fits.

### computeFloatWinRect

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Works out and hands back, in screen coordinates, the rectangle that its parameters call for.

Parameters

Parameter

Description

doc

The document's Doc object.

floating

The floating parameters drawn from whatever MediaSettings.floating returns.

monitorType

A number that says which monitor applies. See the app.media. monitorType property.

uiSize

(optional) The UI size, supplied as a four-number array [w, x, y, z] standing for the size, such as MediaPlayer.uiSize returns.

| --- | --- |

Returns

The rectangle in screen coordinates.

Example: Work out a floating window's rectangle.

```
var floating =
{
    over: app.media.over.monitor,
    align: app.media.align.center,
    canResize: app.media.canResize.no,
    hasClose: false,
    hasTitle: true,
    width: 400,
    height: 400
}
var rect = app.media.computeFloatWinRect
    (this, floating, app.media.monitorType.primary);
```

### constrainRectToScreen

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a screen-coordinate rectangle, shifted and resized as needed so it lands wholly on one display monitor. When anchorPt is given and rect has to be made smaller to fit, the shrink happens proportionally toward anchorPt — an array of two numbers standing for a point as [x, y].

Parameters

Parameter

Description

rect

A four-number array giving the d rectangle's screen coordinates.

anchorPt

(optional) A two-point array [x, y] meant to act as an anchor point.

| --- | --- |

Returns

A rectangle in screen coordinates.

### createPlayer

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Builds a MediaPlayer object but leaves the player unopened.

Note

Opening the player is done through MediaPlayer.open. Both steps fold into one if you call app.media.openPlayer in place of createPlayer.

When createPlayer runs inside a rendition action — for instance, as custom JavaScript typed into the Actions tab of the Multimedia Properties panel — the defaults come from the action's event object. In that situation the args parameter can be skipped unless you mean to override what the rendition action supplies. To handle the event object and the args (see PlayerArgs object object) parameter, createPlayer hands them off to argsDWIM.

The MediaPlayer object comes fitted with stock EventListeners — the standard plumbing for interacting cleanly with Acrobat — unless the PlayerArgs object has noStockEvents turned on. You may also pass extra EventListeners in the PlayerArgs object, or tack them on later through MediaPlayer.events.add.

Where args.annot.player names an open MediaPlayer, createPlayer shuts that player down, and that shutdown fires events.

Parameters

Parameter

Description

args

A PlayerArgs object; the properties it takes, required and optional alike, are spelled out further down. When createPlayer runs within a Rendition action that has an associated rendition, this parameter is optional, and its properties get filled in from the defaults and from the choices made in the UI. Outside that case, the parameter is required.

| --- | --- |

PlayerArgs object

Property

Type

Description

doc

Object

The document's Doc object. Required whenever both annot and rendition are left out — URL playback being one example.

annot

Object

A ScreenAnnot object. Needed for docked playback unless the event object already holds it or MediaSettings.page is supplied. The fresh player ties to the annotation; whatever player had been bound to that annotation gets halted and shut.

rendition

Object

(optional) A Rendition object — either a MediaRendition or a RenditionList. Needed unless rendition turns up in the event object or URL is present.

URL

String

One of URL or rendition is required, and where both appear URL wins.

mimeType

String

(optional) Disregarded unless URL is present. With URL present, either mimeType or settings.players — the value app.media.getPlayers returns — is required.

settings

Object

(optional) A MediaSettings object. Takes precedence over the rendition settings.

events

Object

(optional) An EventListener object. Where stock events apply this is optional, slotted in once the stock events are set.

noStockEvents

Boolean

(optional) When true, skip the stock events. The default is false.

fromUser

Boolean

(optional) Set it true where a direct user action is what will fire this code, and false otherwise. Its default hinges on the event object.

showAltText

Boolean

(optional) When true, display alternate text (see Rendition. altText ) should the media fail to play. The default is true.

showEmptyAltText

Boolean

(optional) When true and the alternate text (see Rendition. altText ) is blank, render that alternate text as an empty box; when false, throw up an alert instead.

The default comes out true if fromUser is false, and false if fromUser is true.

| --- | --- | --- |

Returns

MediaPlayer object

Example 1: The code below spells out openPlayer, whose own definition leans on createPlayer.

```
app.media.openPlayer = function( args )
{
    var player = null;
    try
    {
        args = app.media.argsDWIM( args );

        player = app.media.createPlayer( args );
        if( player )
        {
            var result = player.open();
            if( result.code != app.media.openCode.success )
            {
                player = null;
                app.media.alert
                    ( "Open", args, { code: result.code } );
            }
            else if( player.visible )
            player.setFocus();  // triggers Focus event
        }
    }
    catch( e )
    {
        player = null;
        app.media.alert( 'Exception', args, { error: e } );
    }

    return player;
}
```

Example 2: For samples of PlayerArgs in use, see the examples closing out the openPlayer description.

### getAltTextData

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a MediaData object (see MediaSettings. data) holding alternate text data for the supplied text. With this object you can build a player that shows the alternate text.

Parameters

cAltText

A string to serve as the alternate text data.

| --- | --- |

Returns

MediaData object (see MediaSettings. data).

Example: See the embedded example following the getAltTextSettings method.

### getAltTextSettings

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Accepts a PlayerArgs object that carries at minimum the settings, showAltText, and showEmptyAltText properties, plus a selection object such as rendition.select returns, and locates the first available alternate text rendition where one exists. From that it builds and returns a fresh MediaSettings object geared for playing the alternate text; failing that, it returns null.

Parameters

args

A PlayerArgs object

selection

A MediaSelection object

| --- | --- |

Returns

MediaSettings object or null

Example: Here the rendition's alternate text gets played back. The snippet plays that alternate text inside a screen annotation, though you can adjust it to play in a floating window instead.

```
var rendition = this.media.getRendition("myClip");
var settings = rendition.getPlaySettings();
var args = {
    settings: settings,
    showAltText: true,
    showEmptyAltText: true
};
var selection = rendition.select();
settings = app.media.getAltTextSettings( args, selection );

// You can also play custom alternate text by uncommenting the next line
// settings.data = app.media.getAltTextData("A. C. Robat");

// Uncomment the code below to obtain a floating window to play back
// the alternate text
/*
settings.windowType = app.media.windowType.floating
settings.floating = {
    canResize: app.media.canResize.keepRatio,
    hasClose: true,
    width: 400,
    height: 100
} */

// Now define an args parameter for use with openPlayer, which will

 // play the alternate text.
args = {
    rendition: rendition,
    annot: this.media.getAnnot({nPage: 0, cAnnotTitle:"myScreen"}),
    settings: settings
};
app.media.openPlayer(args);
```

### getAnnotTraceEvents

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back an Events object whose EventListeners emit a debugging trace while events go out.

Returns

Events object

### getPlayers

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |
