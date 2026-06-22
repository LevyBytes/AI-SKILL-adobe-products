# Ocg, Playerinfolist, Plugin

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: OCG; PlayerInfoList; PlugIn.

## OCG

### JavaScript APIs — OCG

Inside a PDF, an OCG object stands for an optional content group. Any piece of content can join one or more of these groups, and content tied to at least one OCG counts as optional content; whether it shows depends on the ON/OFF states of the OCGs it belongs to. The plainest setup pairs a piece of optional content with one OCG, so it appears while that OCG is on and disappears while it is off. Layer in several OCGs with varied visibility mappings and you can build far more elaborate visibility behavior.

Call the Doc getOCGs method to pull back an array of OCG objects for a PDF document.

On the Doc side, addWatermarkFromFile and addWatermarkFromText drop their watermarks into an OCG.

The PDF Reference spells out more about optional content groups.

### OCG properties

### constants

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Every OCG object picks up this inherited property, a wrapper that stores assorted constant values.

intents Object

Although an OCG's intent array may hold any strings at all, only the ones gathered in this object mean anything to Acrobat.

Property

Description

design

Marks an OCG object's intent as design.

view

Marks an OCG object's intent as view.

| --- | --- |

states Object

You use the states object to seed the OCG's starting state (see initState).

Property

Description

on

Stands for an OCG whose state is ON.

off

Stands for an OCG whose state is OFF.

| --- | --- |

### initState

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

D

No

All

Boolean

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

This property settles whether the OCG starts out on or off by default. The states Object lists the values it accepts.

Example: Set an initial state of an OCG to off.

```
var ocgs = this.getOCGs();
ocgs[0].initState.constants.states.off;
```

### locked

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

D

No

All

Boolean

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

This property records whether the OCG is locked. Once an OCG is locked, the UI can no longer flip its on/off state.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

D

No

All

String

R/W (Adobe Reader: R only)

| --- | --- | --- | --- | --- | --- |

The text the UI displays for this OCG. It serves to identify OCGs, though it need not be unique.

Note

Under Acrobat 6.0 this name can only be read; come Acrobat 7.0 it became readable and writable.

Example: a routine that flips every Watermark OCG.

```
function ToggleWatermark(doc)
{
    var ocgArray = doc.getOCGs();
    for (var i=0; i < ocgArray.length; i++) {
        if (ocgArray[i].name == "Watermark") {
            ocgArray[i].state = !ocgArray[i].state;
        }
    }
}
```

### state

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

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Holds the OCG's present on/off state.

Flipping an OCG's state leaves the document clean; the OCGs snap back to their initial state the next time the document loads.

Example: switch on every OCG belonging to the supplied document.

```
function TurnOnOCGsForDoc(doc)
{
    var ocgArray = doc.getOCGs();
    for (var i=0; i < ocgArray.length; i++)
        ocgArray[i].state = true;
}
```

### OCG methods

### getIntent

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Gives back this OCG's intent array.

Only when onstants.intents.view sits among its intents will an OCG bear on content visibility at all.

See also setIntent and the intents Object.

Returns

An array of strings. See constants.intents for possible values.

### setAction

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

Not available in Reader

| --- | --- | --- | --- |

Registers a JavaScript expression that runs after each state change on this OCG.

Because assigning an action to an OCG does not dirty the document, you have to set the action while the document first opens — as document-level script — or live through user interaction.

Note

Whatever action this OCG already had gets replaced by this call.

Parameters

cExpr

The expression evaluated once the OCG's state has changed.

| --- | --- |

Example: the function that follows wires a beep onto whichever OCG it receives. After the definition, the snippet attaches that beeping action to the first OCG in the array that getOCGs hands back.

```
/* Beep when the given ocg is changed */
function BeepOnChange(ocg)
{
    ocg.setAction("app.beep()");
}
var ocgs = this.getOCGs();
BeepOnChange(ocgs[0]);
```

### setIntent

Version (Key)

Save-Prefs

Security

Product

7.0

D

No

Not available in Reader

| --- | --- | --- | --- |

Assigns this OCG's intent array. For an OCG to touch content visibility, that array has to include constants.intents.view. The intents Object lists the values you can use.

See also getIntent and the intents Object.

Parameters

Parameter

Description

aIntentArray

A string array that will become this OCG's intent array.

| --- | --- |

Example: give every OCG in the document an intent of both View and Design.

```
var ocgs = this.getOCGs();
for (i=0; i < ocgs.length; i++) {
    ocgs[i].setIntent( [ocgs[i].constants.intents.view,
    ocgs[i].constants.intents.design]);
}
```

PlayerInfo

A PlayerInfo object describes one media player on hand for playback. Calling app.media.getPlayers yields a PlayerInfoList object — a gathering of PlayerInfo objects.

### PlayerInfo properties

### id

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

String

R

| --- | --- | --- | --- | --- | --- |

Identifies a media player plug-in together with its associated media player. The string is neither localized nor meant for the user to see. You can feed it into the MediaPlayer.settings.players array while creating a MediaPlayer, and it also turns up in the MediaPlayer.id property once a player is open.

Example: print the details of every media player capable of “video/mpeg”.

```
var playerInfoList = app.media.getPlayers("video/mpeg");

for ( var i=0; i < playerInfoList.length; i++) {
    console.println("id: " + playerInfoList[i].id)
    console.println("name: " + playerInfoList[i].name)
    console.println("version: " + playerInfoList[i].version)
}
```

### mimeTypes

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

Array of String

R

| --- | --- | --- | --- | --- | --- |

A string array naming the MIME types this media player handles.

Example:

```
var qtinfo = app.media.getPlayers().select({id: /quicktime/i })[0];
console.println( qtinfo.mimeTypes );
```

### name

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

String

R

| --- | --- | --- | --- | --- | --- |

The media player's name. Localized to the active language reported by app.language, it suits display in list boxes and the like, yet is a poor basis for comparing values directly within JavaScript.

### version

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

String

R

| --- | --- | --- | --- | --- | --- |

A string holding the media player's version number. With most players this matches the version of the underlying media player installed on the user's machine. The format is dotted decimal — 7.4.030.1170, for example.

### PlayerInfo methods

### canPlay

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Tests whether this media player is allowed for playback, weighing the user's security settings.

With bRejectPlayerPrompt set true, the call returns false whenever using this player would trip a security prompt. Left otherwise, it returns true if playback can proceed at all, prompt or no prompt. (The check itself never raises a security prompt, though a later attempt to spin up a media player might.)

Parameters

Parameter

Description

oDoc

A Doc

bRejectPlayerPrompt

A Boolean defaulting to false. Set it true and the call yields false whenever this player would trigger a security prompt; leave it false and the call yields true as long as playback is permitted at all, whether or not a prompt appears.

| --- | --- |

Returns

Boolean

### canUseData

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Reports whether the player can drive playback from the data handed in through its oData parameter. The answer is true when that data is usable for playback, false when it is not.

Parameters

Parameter

Description

oData

A MediaData object (MediaSettings.data documents what it contains). Several routes produce one: app.media.getAltTextData, app.media.getURLData, or — by a more roundabout path — Rendition.getPlaySettings.

| --- | --- |

Returns

Boolean

### honors

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Polls a player plug-in on whether it can satisfy every setting, method, and event named in the args parameter. The reply is a best guess made without launching a media player, so it is not guaranteed accurate. Supply args.URL, for instance, and the scheme (such as "http://") gets checked, yet honors never actually tries to open the URL.

Note

Compatibility: only Acrobat 7.0 onward supports honors. To bridge both Acrobat 6.0 and Acrobat 7.0, the Acrobat SDK ships JavaScript source you can paste into a PDF; it falls back to hard-coded checks under Acrobat 6.0 and invokes honors on later Acrobat releases. The playerHonors Function covers the specifics.

Both honors and the HonorsArgs object echo the MH (“must honor”) entries in the PDF format; a number of those can be configured from the Playback Requirements panel of the Rendition Settings for a multimedia rendition. What honors offers is a way to pick a player meeting playback requirements dynamically in JavaScript, rather than statically inside the PDF file.

Parameters

Parameter

Description

args

The HonorsArgs object under test. It mirrors the PlayerArgs Object that app.media.openPlayer accepts so closely that any PlayerArgs object can serve as a HonorsArgs; on top of that, HonorsArgs allows a few extra options reserved for honors alone.

| --- | --- |

Returns

A Boolean — true when the player plug-in can satisfy every item carried in the args object.

Example: play a media clip through a player offering particular capabilities.

```
function playWithRequirements( args )
{
    var plugins = app.media.getPlayers( args.mimeType )
    if( plugins )
    {
        for (var plugin in plugins)
        {
            if( plugin.honors(args) )
            {
                args.players = [plugin];
                return app.media.openPlayer( args );
            }
        }
    }
}
```

Request a player able to handle an AVI clip served over an http URL, where that player must be capable of disabling autoplay, must implement both pause and seek, must honor a startAt setting expressed as a marker-plus-time offset, and must raise the Ready and Close events.

```
playWithRequirements({
    mimeType: 'video/avi',
    URL: 'http://www.example.com/bar.avi',
    settings:
    {
        autoPlay: false,
        startAt: { marker: 'test', time: 1 },
    },
    methods:
    {
        pause:[],
        seek[ { marker: 'test', time: 1 } ],
    },
    events:
    {
        afterReady: doAfterReady( e ),
        onClose: doOnClose( e ),
    },
});
```

HonorsArgs object

Whatever settings, methods, and events get fed into the honors method of the PlayerInfo object — or into the playerHonors function — are enumerated by the HonorsArgs object. Throughout this section, PlayerInfo.honors is shorthand covering both routes.

You may reuse any PlayersArgs object (the kind passed to app.media.openPlayer) as an HonorsArgs object, or you may build a fresh HonorsArgs object specifically for a PlayerInfo.honors call.

Watch out when one and the same object feeds both app.media.openPlayer and PlayerInfo.honors, because each function treats unrecognized args in its own way. Whereas app.media.openPlayer simply skips over settings or events it has never heard of, PlayerInfo.honors will hand back false the moment it encounters any unfamiliar setting, method, or event.

To illustrate, { settings: { upsideDown: true } } passes muster inside an app.media.openPlayer call. Because no “upsideDown” setting exists, that entry is simply discarded. Feed the same unknown setting to PlayerInfo.honors, however, and the result comes back false.

What follows is the full roster of properties the HonorsArgs object accepts. The layout below roughly imitates a JavaScript object literal, except each property carries its type or a description in place of a genuine value:

```
args =
{
    mimeType: string,
    URL: string,
    settings:
    {
        autoPlay: boolean,
        baseURL: string,
        bgColor: Acrobat color array,
        duration: number,
        endAt: MediaOffset,
        layout: number,
        palindrome: boolean,
        rate: number,
        repeat: number,
        showUI: boolean,
        startAt: MediaOffset,
        visible: boolean,
        volume: number,
    },
    methods:
    {
        pause: [],
        play: [],
        seek: [ MediaOffset ],
        stop: [],
        where: [],
    },
    events:
    {
        Done: anything, onDone: anything, afterDone: anything,
        Error: anything, onError: anything, afterError: anything,
        Escape: anything, onEscape: anything, afterEscape: anything,
        Pause: anything, onPause: anything, afterPause: anything,
        Play: anything, onPlay: anything, afterPlay: anything,
        Ready: anything, onReady: anything, afterReady: anything,
        Script: anything, onScript: anything, afterScript: anything,
        Seek: anything, onSeek: anything, afterSeek: anything,
        Status: anything, onStatus: anything, afterStatus: anything,
        Stop: anything, onStop: anything, afterStop: anything,
    },
}
```

Some further remarks about the listing above.

PlayerArgs carries identical mimeType, URL, and settings properties to the ones shown here. You must supply mimeType — the honors method will not infer the MIME type from the file extension in the URL. The URL itself may be genuine or made up, so long as it conforms to proper URL syntax. The MediaSettings object documentation covers what these properties mean.

Through the methods property you declare which MediaPlayer methods the player is required to provide for the MIME type in question. Each entry's value is an array holding whatever arguments a call to that method would receive. Within Acrobat 7.0, seek is the lone player method that accepts any argument at all, and that argument is a single MediaOffset. Refer to the MediaPlayer object for what these properties do.

Should you serve one object as both a PlayerArgs and an HonorsArgs, that object is permitted to carry a methods property despite the fact that a PlayerArgs ordinarily lacks one. In every place a PlayerArgs is consumed, that extra property is simply skipped.

Through the events property you spell out which events the player has to support. Per the listing above, an event name may carry the on prefix, the after prefix, or no prefix whatsoever — all three are equivalent. Any player that supports a given on event invariably supports its matching after event, since after events fire identically across every player. Consult the EventListener object for what these properties do.

When the listing says anything, take it at face value: inside HonorsArgs those values serve only as stand-ins. Consequently, an events object lifted from a PlayerArgs functions just fine inside an HonorsArgs:

```
events:
{
    afterReady: doAfterReady( e ),
    onClose: doOnClose( e ),
},
```

Alternatively, when you author an HonorsArgs from scratch, the notation can be condensed like so:

```
events: { Ready: true, Close: true },
```

playerHonors Function

You get this function as JavaScript source ready to paste into a PDF as a document-level script. It runs the very checks that Acrobat 7.0's honors method runs, yet it also functions under Acrobat 6.0.

Under Acrobat 6.0, playerHonors falls back on fixed checks tailored to whatever media players ship with Acrobat 6.0.

On Acrobat 7.0 and newer, playerHonors simply delegates to honors.

Parameters

doc

A Doc.

info

A PlayerInfo object.

args

Whichever HonorsArgs object you want checked.

| --- | --- |

Returns

A Boolean that comes back true when the player plug-in is able to honor every item contained in the args object.

Example: The scenario here mirrors the one given for the PlayerInfo object's honors method, except it goes through the playerHonors JavaScript function instead. As long as the playerHonors source has been dropped into the target PDF, this runs under both Acrobat 6.0 and Acrobat 7.0.

```
function playWithRequirements( args ) {
    var plugins = app.media.getPlayers( 'video/avi' )
    if( plugins ) {
        for (var plugin in plugins) {
            if( playerHonors( doc, plugin, args ) ) {
                args.players = [plugin];
                return app.media.openPlayer( args );
            }
        }
    }
}
```

## PlayerInfoList

### JavaScript APIs — PlayerInfoList

Think of this object as standing in for an array of PlayerInfo objects. You reach the individual PlayerInfo elements with the ordinary array-index syntax, and you read how many there are from the length property.

The app.media.getPlayers method is what produces this object.

When you build a media player through app.media.createPlayer, the PlayerArgs object you hand the method can put a PlayerInfoList into its settings.players property. That confines the new player to whichever players the list names.

### PlayerInfoList methods

### select

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a duplicate of the PlayerInfoList narrowed down to just the players satisfying the selection criteria. When nothing matches, you get an empty array back.

Parameters

Parameter

Description

object

(optional) An object carrying any combination of the id, name, and version properties. You may give those properties as strings or as regular expressions. A property that is present has to match; a property left out matches every player.

| --- | --- |

Returns

PlayerInfoList object

Example 1: Play the media clip through QuickTime.

```
var playerList = app.media.getPlayers().select({ id: /quicktime/i });
// QuickTime supports palindrome, so let's try it.
var settings = { players: playerList, palindrome: true };
var player = app.media.openPlayer({ settings: settings });
```

Example 2: Pick out the Flash player by pattern-matching against its player ID.

```
var player = app.media.createPlayer();
player.settings.players = app.media.getPlayers().select({ id:/flash/i});
player.open();
```

## PlugIn

### JavaScript APIs — PlugIn

Version (Key)

Save-Prefs

Security

Product

5.0

No

No

All

| --- | --- | --- | --- |

Through this object you reach details about the plug-in it stands for. You acquire a PlugIn object via app.plugIns.

### PlugIn properties

### certified

A value of true marks the plug-in as carrying Adobe certification. Such certified plug-ins have been put through rigorous testing so that no lapses in application or document security arise. A user may set the viewer up to load nothing but certified plug-ins.

Type

Access

Boolean

R

| --- | --- |

Example: Count how many plug-ins lack certification.

```
var j=0; aPlugins = app.plugIns;
for (var i=0; i < aPlugins.length; i++)
    if (!aPlugins[i].certified) j++;
console.println("Report: There are "+j+" uncertified plug-ins loaded.");
```

### loaded

A value of true means the plug-in got loaded.

Type

Access

Boolean

R

| --- | --- |

### name

The name of the plug-in.

Type

Access

String

R

| --- | --- |

Example: Tally the plug-ins and print each one to the console.

```
// Get an array of PlugIn Objects
var aPlugins = app.plugIns;
// Get the number of plug-ins
var nPlugins = aPlugins.length;
// Enumerate the names of all plug-ins
for (var i = 0; i < nPlugins; i++)
    console.println("Plugin #" + i + " is " + aPlugins[i].name);
```

### path

The device-independent path to the plug-in.

Type

Access

String

R

| --- | --- |

### version

The plug-in's version number. Its whole-number portion gives the major version while the fractional portion encodes the minor and update versions. To take an example, a value of 5.11 would mean the plug-in is at major version 5, minor version 1, update version 1.

Type

Access

Number

R

| --- | --- |
