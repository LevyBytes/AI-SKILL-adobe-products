# Mediasettings

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Media and Marker APIs — MediaSettings

A MediaSettings object gathers the settings needed to create and open a MediaPlayer, and it serves as the value held by the MediaPlayer object's settings property. Defaults cover many of these settings, though some turn out to be required, varying with the kind of player you open and with the other settings in play. The notes attached to each MediaSettings property spell out the specifics.

Acrobat and the assorted media players do try to honor these settings, yet none of them is guaranteed to stick. (Hardly any player, for one, honors the palindrome setting.)

### MediaSettings properties

### autoPlay

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

Controls whether the media clip launches into playback on its own once the player opens. Should you set autoPlay to false, call MediaPlayer.play to start playback. Its default value is true.

Example: the samples under afterReady and players cover this.

### baseURL

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

R/W

| --- | --- | --- | --- | --- | --- |

The base URL against which any relative URLs in the media clip get resolved — handy, say, when the media opens a web page. No default exists; leave baseURL unset and how a relative URL is read varies by media player, though in most cases it simply fails.

### bgColor

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

Color Array

R/W

| --- | --- | --- | --- | --- | --- |

The background color of the media player window. Its array may take any of the color array formats that JavaScript for Acrobat supports.

Leave bgColor unset and the default tracks the window type:

Docked: White

Floating: whatever window background color the operating system control panel sets

Full Screen: whatever full-screen background color the user's Acrobat preferences hold

Example:

```
// Red background
settings.bgColor = [ "RGB", 1, 0, 0 ];
```

### bgOpacity

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

The background opacity of the media player window. Values span 0.0 (fully transparent) through 1.0 (fully opaque). Its default value is 1.0.

### data

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

R/W

| --- | --- | --- | --- | --- | --- |

An object — the MediaData object, as it is often called — through which a media player reads its media clip data, be that an external file or content embedded in the PDF. Its contents cannot be used straight from JavaScript.

You obtain this object from app.media.getAltTextData, app.media.getURLData, or, by a more indirect route, Rendition.getPlaySettings. Because the data object can be tied to the rendition's document, closing that document may render it unavailable.

Example: the samples accompanying app.media. getURLData show this.

### duration

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

How many seconds playback runs for. Left unspecified, the default plays the whole media, or the stretch between the startAt and endAt points whenever either one is given.

Bear in mind the duration may run past the whole media length or past the gap between the startAt and endAt points. When it does, playback presses on to the end of media or to the endAt point, then pauses there until the duration runs out.

Example: drive a floating window whose duration never ends. Here the rendition's playback location is set, by way of the UI, to a floating window, and a form button triggers the code below. Because that floating window stays up once the media finishes, the player gets closed ahead of each reopen so windows do not pile up.

Were this script instead launched from a Rendition action, you could pick the rendition through the UI and skip closing the player altogether.

```
var rendition = this.media.getRendition("Clip");
if ( player && player.isOpen )
    try { player.close(app.media.closeReason.done); } catch(e) {};
var player = app.media.openPlayer({
    rendition: rendition,
    settings: { duration: Infinity }
});
```

### endAt

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

MediaOffset object

R/W

| --- | --- | --- | --- | --- | --- |

Where playback finishes, as a time or frame. This can be an absolute time or frame value, a marker name, or a marker combined with a time or frame, per the MediaOffset object topic. Playback stops at the named time or frame, or as near it as the media player can manage to halt. Leave endAt unset and the default is the end of media.

See also startAt.

Example: the script here runs an audio clip from the 3-second mark through the 8-second mark.

```
var player = app.media.openPlayer({
    rendition: this.media.getRendition( "myAudio" ),
    doc: this,
    settings: {
        startAt: 3,
        endAt: 8
    }
});
```

### floating

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

R/W

| --- | --- | --- | --- | --- | --- |

An object whose properties (set out below) fix the placement and styling of a floating window.

Unless MediaSettings.windowType carries the value app.media.windowType.floating, this object goes ignored.

Any floating settings left unspecified fall back to defaults.

Property

Type

Description

align

Number

Fixes where the floating window sits in relation to the window named by the over property. align takes one of the values of app.media.align.

over

Number

Names the window the floating window aligns to. over takes one of the values of app.media.over.

canResize

Number

Fixes whether the user may resize the floating window. canResize takes one of the values of app.media.canResize.

hasClose

Boolean

When true, the floating window ought to carry a close window control button.

hasTitle

Boolean

When true, a title ought to show in the title bar.

title

String

The title shown when hasTitle is true.

ifOffScreen

Number

Fixes what happens should the floating window land wholly or partly offscreen. ifOffScreen takes one of the values of app.media.ifOffScreen.

rect

Array of four Numbers

A screen-coordinate array fixing the floating window's placement and size. Required when width and height are absent.

width

Number

The floating window's width. Required when rect is absent.

height

Number

The floating window's height. Required when rect is absent.

| --- | --- | --- |

Example: run a media clip inside a floating window.

```
var rendition = this.media.getRendition( "myClip" );
var floating = {
    align: app.media.align.topCenter,
    over: app.media.over.appWindow,
    canResize: app.media.canResize.no,
    hasClose: true,
    hasTitle: true,
    title: rendition.altText,
    ifOffScreen: app.media.ifOffScreen.forceOnScreen,
    width: 400,
    height: 300
};
var player = app.media.openPlayer({
    rendition: rendition,
    settings: {
        windowType: app.media.windowType.floating,
        floating: floating
    }
});
```

### layout

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

Pick this from the app.media.layout enumeration; it controls whether — and in what manner — the content is rescaled to match the window. What it defaults to is not fixed and shifts depending on which media player is in use.

### monitor

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

Monitor or Monitors object

R/W

| --- | --- | --- | --- | --- | --- |

When a media player runs full screen, this property picks which display handles playback. You may hand it either a Monitor object or a Monitors object. Should an array be passed, playback relies on its first element, which is itself a Monitor object.

Note

Playback reads only the rect property — MediaSettings.monitor. rect when a Monitor object is supplied, or MediaSettings.monitor[0]. rect when it is a Monitors object.

How monitor and monitorType relate to one another is covered under monitorType (below).

Example — drive full-screen playback of a clip off a form button.

```
var player = app.media.openPlayer({
    rendition: this.media.getRendition("Clip"),
    settings: {
        monitor: app.monitors.primary(),
        windowType: app.media.windowType.fullScreen,
    }
});
```

Note

Full screen playback only proceeds when the user's trust manager settings permit it.

### monitorType

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

Holds an app.media.monitorType value naming which category of monitor to pick for playback in a floating or full screen window.

Keep in mind how monitor differs from monitorType:

monitor pins down one particular monitor on the running system by spelling out its rectangle.

monitorType points instead at a broad class of monitor, judged by traits like primary, secondary, or best color depth.

A monitor type can still be requested by a PDF that runs no JavaScript, even though such a file cannot name a specific monitor. Whenever monitorType reaches app.media.createPlayer or app.media.openPlayer, the JavaScript code pulls the system's roster of monitors and applies monitorType to pick one for playback. That monitor's rectangle is what gets used at the point MediaPlayer.open runs to settle on the monitor.

Example — send a clip full screen onto whichever monitor offers the deepest color.

```
var player = app.media.openPlayer({
    rendition: this.media.getRendition("Clip"),
    settings: {
        monitorType: app.media.monitorType.bestColor,
        windowType: app.media.windowType.fullScreen,
    }
});
```

### page

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

When the player is docked, this property names which page the player docks onto. Players of any other kind simply disregard it.

See also MediaPlayer. page.

### palindrome

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

Set this property to true and the clip runs through once forward, then rewinds back to its start by playing in reverse. Where repeat is also given, that forward-then-reverse pass cycles the stated number of times, with one whole forward-and-reverse trip tallying as a single repeat.

The default value is false.

Note

palindrome goes unsupported by most media players, which simply ignore the setting.

Example — view the clip through QuickTime, one of the players that honors palindrome.

```
var playerList = app.media.getPlayers().select({ id: /quicktime/i });
var settings = { players: playerList, palindrome: true };
var player = app.media.openPlayer({ settings: settings });
```

You should fire the code shown above from inside a Rendition action event that carries an associated rendition.

### players

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

Players or Array of String

R/W

| --- | --- | --- | --- | --- | --- |

Lists the media players capable of playing this rendition, held as an array of objects. Rather than reaching into this array on its own, JavaScript code typically forwards it straight from Rendition.select into the settings object handed to app.media.createPlayer.

Example — enumerate which players are on hand for this rendition. Run the script as a Rendition action carrying an associated rendition.

```
var player = app.media.openPlayer({ settings: {autoPlay: false} });
console.println("players: " + player.settings.players.toSource() );

// Sample output to the console:
players: [{id:"vnd.adobe.swname:ADBE_MCI", rank:0},

 {id:"vnd.adobe.swname:AAPL_QuickTime", rank:0},

 {id:"vnd.adobe.swname:RNWK_RealPlayer", rank:0},

 {id:"vnd.adobe.swname:MSFT_WindowsMediaPlayer", rank:0}]
```

### rate

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

Sets how fast playback runs as a number. At the default of 1, the clip runs at normal speed, and every other figure is gauged against that. So .5 runs at half speed, 2 runs at twice speed, and -1 runs normally but in reverse.

The rate values on offer are capped for many players and media types, which fall back to whichever supported playback rate sits nearest.

Example — run a clip at twice its normal speed; fire this from a Rendition action.

```
var player = app.media.createPlayer();
player.settings.rate = 2;
player.open();
```

### repeat

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

Counts how many times playback loops on its own. Its default of 1 leaves the clip playing a single time.

Whole-number repeat values are all that many players accept, though a few permit fractional ones like 1.5. Hand it Infinity and the clip loops without stopping.

The default value is 1.

Example — loop a clip endlessly straight out of a Rendition action.

```
var player = app.media.openPlayer({settings: { repeat: Infinity } });
```

### showUI

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

A Boolean that decides whether the media player shows its controls or hides them.

The default value is false.

Example — surface the player's controls; this code runs from a Rendition action.

```
var player = app.media.createPlayer();
player.settings.showUI = true;
player.open();
```

or

```
app.media.openPlayer( {settings: {showUI: true} });
```

### startAt

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

MediaOffset object

R/W

| --- | --- | --- | --- | --- | --- |

Marks where playback begins, by time or by frame. As laid out under MediaOffset, this can be an outright time or frame value, a marker name, or a marker combined with a time or frame. Playback opens at that time or frame, or at the closest spot the media player can actually halt on. Leave startAt unset and it defaults to the start of the media.

See also endAt.

Example — refer to the sample given just under endAt.

### visible

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

A Boolean that governs whether the player is shown.

The default value is true.

Example — configure a docked clip for audio-only output; the script fires from a Rendition action.

```
   var args = {
       settings: {
           visible: false,
           windowType: app.media.windowType.docked
       }
   };
app.media.openPlayer( args );
```

See also MediaPlayer. visible.

### volume

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

Controls how loud playback is. Setting it to 0 mutes the audio, 100 gives normal (full) loudness, and anything between lands at a middle level. Values past 100 for louder-than-normal output may arrive in future media players, but at present none accept them.

The default value is 100.

### windowType

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

Number

R/W

| --- | --- | --- | --- | --- | --- |

A value drawn from the app.media.windowType enumeration that settles which kind of window the MediaPlayer is built inside.

Reach for the low-level doc.media.newPlayer function and windowType defaults to app.media.windowType.docked.

Go through the higher-level createPlayer or openPlayer functions on the app.media object instead, and the default is worked out like this:

Where an annot is handed over (refer to the PlayerArgs object description), app.media.windowType.docked is the default.

Where a settings.floating object is handed over (refer to the PlayerArgs object description), app.media.windowType.floating is the default.

Failing either, the default comes out as undefined.

Example — build players that use varying window types. Because this runs as a Rendition action, no rendition needs to be specified or selected.

```
// Docked player that will be played in the associated ScreenAnnot
app.media.openPlayer({
    settings: { windowType: app.media.windowType.docked }
});
// Play in full screen mode, see also monitor and monitorType
app.media.openPlayer({
    settings: { windowType: app.media.windowType.fullScreen }
});
// Show the media clip in a floating window, also, see the floating property
var args = {
    settings: {
        windowType: app.media.windowType.floating,
        floating: {
            title: "A. C. Robat",
            width: 352,
            height: 240,
        }
    }
};
app.media.openPlayer( args );
```
