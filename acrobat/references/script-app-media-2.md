# App Media (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app.media

Hands back a PlayerInfoList object — an array of PlayerInfo objects standing for the media players on hand.

You can narrow the PlayerInfoList through its select method, and you can feed it into the settings.players property when building a media player by way of createPlayer.

For fuller detail, see PlayerInfoList object and PlayerInfo object.

Parameters

Parameter

Description

cMimeType

(optional) An optional MIME type, "audio/wav" for instance. Leave cMimeType off and every available player is listed; name it and the list narrows to players able to handle that MIME type.

| --- | --- |

Returns

PlayerInfoList object

Example 1: List MP3 players to the debug console.

```
var mp = app.media.getPlayers("audio/mp3")
for ( var i = 0; i < mp.length; i++) {
    console.println("nmp[" + i + "] Properties");
    for ( var p in mp[i] ) console.println(p + ": " + mp[i][p]);
}
```

Example 2: Pick whatever player can handle Flash media by matching on MIME type. The snippet presumes what follows runs as a Rendition action with an associated rendition, so createPlayer needs no arguments.

```
var player = app.media.createPlayer();
player.settings.players
    = app.media.getPlayers( "application/x-shockwave-flash" );
player.open();
```

### getPlayerTraceEvents

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

An Events object

### getRenditionSettings

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Runs Rendition.select to obtain a MediaSelection object, then MediaSelection.rendition.getPlaySettings to obtain a MediaSettings object for playback. Should either step fail, it turns to the getAltTextSettings method for a MediaSettings object covering alternate text playback. In the end it returns whatever MediaSettings object results, or null when getAltTextSettings returned null — meaning alternate text was either unspecified or disallowed.

Parameters

args

A PlayerArgs object.

| --- | --- |

Returns

MediaSettings object or null

Example: See example 3 following openPlayer.

### getURLData

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a MediaData object (see MediaSettings. data) standing for data to be fetched from a URL plus an optional MIME type. That MediaData object lets you build a player that pulls data from the URL.

Parameters

cURL

The URL the media data gets pulled from.

cMimeType

(optional) The data's MIME type.

| --- | --- |

Returns

MediaData object

Example: Pull a media clip off the Internet and play it inside a floating window.

```
var myURLClip = "http://www.example.com/myClip.mpg";
var args = {
    URL: myURLClip,
    mimeType: "video/x-mpg",
    doc: this,
    settings: {
        players: app.media.getPlayers("video/x-mpg"),
        windowType: app.media.windowType.floating,
        data: app.media.getURLData(myURLClip,"video/x-mpg"),
        floating: { height: 400, width: 600 }
    }
}
app.media.openPlayer(args);
```

### getURLSettings

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Accepts a PlayerArgs object carrying a settings property and returns a MediaSettings object geared for URL playback. That settings property has to include a URL property and may include a mimeType property. It can also hold further settings, which get copied across into the resulting settings object.

Parameters

args

A PlayerArgs object.

| --- | --- |

Returns

MediaSettings object

Example 1: The same example as above. getURLSettings invokes getURLData and drops the returned MediaData object into the data property of the setting, then returns it.

```
var myURLClip = "http://www.example.com/myClip.mpg";
args = {
    URL: myURLClip,
    mimeType: "video/x-mpg",
    doc: this,
    settings:
    {
        players: app.media.getPlayers("video/x-mpg"),
        windowType: app.media.windowType.floating,
        floating: { height: 400, width: 600 }
    }
};
settings = app.media.getURLSettings(args)
args.settings = settings;
app.media.openPlayer(args);
```

Example 2: What follows is a custom keystroke action on a combo box. That combo box serves as a basic playlist of streamed audio and video sites. Every list entry carries an export value shaped as "URL,mimeType" — for example

```
http://www.example.com/streaming/radio.asx,video/x-ms-asx
```

The script underneath breaks the export value into a two-element array: element one is the URL and element two is the mimeType. Video plays in the screen annotation "myScreen"; failing that, the user only hears audio.

```
if (!event.willCommit)
{
    var aURLMime = event.changeEx.split(",")
    console.println("aURLMime[0] = " + aURLMime[0]);
    console.println("aURLMime[1] = " + aURLMime[1]);
    var args = {
        annot:this.media.getAnnot({ nPage:0,cAnnotTitle: "myScreen" }),
        URL: aURLMime[0],
        mimeType: aURLMime[1],
        doc: this,
        settings: {
            players: app.media.getPlayers(aURLMime[1]),
            windowType: app.media.windowType.docked
        }
    };
    settings = app.media.getURLSettings(args);
    args.settings = settings;
    var player = app.media.openPlayer(args);
}
```

### getWindowBorderSize

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back a four-number array giving, in pixels, the left, top, right, and bottom border sizes a floating window would carry for the properties named in the parameters.

Both hasTitle and hasClose are Boolean parameters, while canResize accepts any value from app.media.canResize.

Since these parameters carry the same names as properties on a MediaSettings.floating object, you can hand in a floating object straight as one parameter:

```
var size = doc.media.getWindowBorderSize( settings.floating );
```

Parameters

hasTitle

(optional) The default is true.

hasClose

(optional) The default is true.

canResize

(optional) The default is app.media.canResize.no.

| --- | --- |

Returns

An array of 4 numbers.

### openPlayer

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Invokes app.media.createPlayer to make a MediaPlayer object, then invokes MediaPlayer.open to open it.

A handful of events fire from this method, among them Ready (see onReady and afterReady), Play (see onPlay and afterPlay), and Focus (see onFocus and afterFocus). The EventListener object carries a broad description of these events.

On failure the method alerts the user and returns null; it raises no exceptions.

Parameters

args

(optional) A PlayerArgs object.

| --- | --- |

Returns

A MediaPlayer object, or null on failure

Example 1: This bare-bones example is custom JavaScript taken from the Actions tab in a screen annotation's Multimedia Properties panel. Passing the args parameter lets you override the parameters that the screen annotation's UI laid down.

```
app.media.openPlayer();
```

Override settings.repeat : where repeat sits at 1, switch it to 2; otherwise switch it to 1.

```
var nRepeat =
    ( event.action.rendition.getPlaySettings().repeat == 1 ) ? 2 : 1;
var args = { settings: { repeat: nRepeat } };
app.media.openPlayer(args);
```

For what event.action.rendition means, see the event object. That same example also leans on Rendition.getPlaySettings to reach the settings tied to the rendition due to play — the one bound to the screen annotation.

Example 2: The script below runs off a form button's mouse-up action. It plays a docked media clip within a screen annotation.

```
app.media.openPlayer({
    rendition: this.media.getRendition( "myClip" ),
    annot: this.media.getAnnot( {nPage:0,cAnnotTitle:"myScreen"} ),
    settings: { windowType: app.media.windowType.docked }
});
```

Example 3: This one is custom JavaScript from the Actions tab in a screen annotation's Multimedia Properties. The user clicks the annotation, and a movie clip chosen at random plays.

```
   // These are placed at the top level of the document JavaScript
   var myRenditions = new Array();
   myRenditions[0] = "myClip1";
   myRenditions[1] = "myClip2";
   myRenditions[2] = "myClip3";

   // This code is a custom JavaScript of a ScreenAnnot. All renditions

    // are docked and are played in the ScreenAnnot.
   var l = myRenditions.length;
   randomIndex = Math.floor( Math.random() * l ) % l;

   var rendition = this.media.getRendition(myRenditions[randomIndex]);
   var settings = app.media.getRenditionSettings({ rendition: rendition });

   var args = { rendition: rendition, settings: settings }
app.media.openPlayer(args);
```

### startPlayer

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Looks at whether the PlayerArgs object names an annotation and whether that annotation already has an open player. If so, it runs player.play on that player to begin or pick up playback. If not, it turns to app.media.openPlayer to build and open a new MediaPlayer object. For the full story, see openPlayer.

Note

When you go through the Acrobat user interface to set up a multimedia annotation and rendition and add no custom JavaScript of your own, app.media.startPlayer is the mouse-up action that applies by default.

Parameters

args

(optional) A PlayerArgs object

| --- | --- |

Returns

A MediaPlayer object or null on failure

Example: Kick off a screen annotation by way of a form button.

```
var args = {
    rendition: this.media.getRendition( "myClip" ),
    annot: this.media.getAnnot({ nPage: 0, cAnnotTitle: "myScreen" }),
};
app.media.startPlayer(args);
```
