# Eventlistener (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — EventListener

The EventListener receives this event object automatically as its argument.

| --- | --- |

onEscape

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Pressing Escape while a MediaPlayer is open and holds the keyboard focus fires the Escape event. It is possible for a MediaPlayer to get an Escape event ahead of its Ready event.

The companion afterEscape is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onEveryEvent

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Give an Events object an onEveryEvent or afterEveryEvent property and its EventListener methods run on every event rather than on one in particular.

Ahead of any listener functions tied to a named event, the EventListener methods sitting in an onEveryEvent or afterEveryEvent property run first. (EventListener spells out how the on- and after- forms differ.)

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

onFocus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Keyboard focus arriving at a screen annotation or a MediaPlayer is what fires the Focus event. The companion afterFocus is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onGetRect

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Any time the multimedia plug-in has to obtain the display rectangle for a docked MediaPlayer, the GetRect event fires.

Beyond the usual event properties, a GetRect event's event object carries this one as well:

Parameter

Description

media.rect

Player rectangle, an array of four numbers in device space

| --- | --- |

Before it returns, the onGetRect method is obliged to set this property on the oMediaEvent.

Note

Writing an afterGetRect listener is possible, yet it serves no real purpose. Any rect property it hands back is disregarded. Setting the rect property is strictly the job of the onGetRect listener.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

Example: A row of thumbnail-size ScreenAnnots sits on page 0, with page 1 left blank. Switch the viewer to continuous facing mode so the two pages appear together side by side. What follows is a representative Rendition action — or mouse-up button JavaScript action.

```
var rendition = this.media.getRendition("Clip1");
var settings = rendition.getPlaySettings();
var annot = this.media.getAnnot({ nPage:0,cAnnotTitle:"ScreenClip1" });
var player = app.media.openPlayer({
    rendition: rendition,
    annot: annot,
    settings: { windowType: app.media.windowType.docked },
    events:
    {
        onGetRect: function (e) {
            var width = e.media.rect[2] - e.media.rect[0];
            var height = e.media.rect[3] - e.media.rect[1];
            width *= 3; // Triple width and height
            height *= 3;
            e.media.rect[0] = 36; // Move left,upper to
            e.media.rect[1] = 36; // upper left-hand corner
            e.media.rect[2] = e.media.rect[0]+width;
            e.media.rect[3] = e.media.rect[1]+height;
            return e.media.rect; // Return this
        }
    }
});
player.page = 1; // show on page 1, this triggers an onGetRect event.
```

See MediaPlayer. page and MediaPlayer. triggerGetRect for a variation on this same example.

### onPause

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Whenever playback is suspended — be it a viewer action or a call to the play method — the Pause event fires. The companion afterPause is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onPlay

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

When playback begins or picks back up — whether a viewer triggers it or the pause method is invoked — the Play event fires. The companion afterPlay is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onReady

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Once a freshly created MediaPlayer becomes usable, the Ready event fires. A MediaPlayer object will reject most of its method calls right up until the Ready event has fired. The companion afterReady is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onScript

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hitting a script trigger embedded in the media as it plays is what fires the Script event. The companion afterScript is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Script event's event object carries the following as well:

media.command

Command name

media.param

Command parameter string

| --- | --- |

Whatever the media clip supplies can fill these two strings. Nothing guarantees they hold runnable JavaScript; reading and acting on them is left to the onScript or afterScript EventListener.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onSeek

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Once a seek call brings a MediaPlayer to rest at its requested playback offset, the Seek event fires. Seek events are not raised by every media player.

The companion afterSeek is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onStatus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Each time a MediaPlayer reports one of its assorted status changes, the Status event fires. The companion afterStatus is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Status event's event object carries the following as well:

media.code

Status code value, defined in app.media.status

media.text

Status message text

| --- | --- |

Only a subset of media players set the values below, and only while media.code == app.media.status.buffering. At all other times they read zero.

media.progress

Progress value from 0 to media.total

media.total

Maximum progress value

| --- | --- |

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onStop

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

When playback comes to a halt — whether the viewer ends it or the stop method runs — the Stop event fires.

The companion afterStop is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |
