# HonorsArgs

Whatever settings, methods, and events get fed into the honors method of the PlayerInfo object — or into the playerHonors function — are enumerated by the HonorsArgs object. Throughout this section, PlayerInfo.honors is shorthand covering both routes.

You may reuse any PlayersArgs object (the kind passed to app.media.openPlayer) as an HonorsArgs object, or you may build a fresh HonorsArgs object specifically for a PlayerInfo.honors call.

Watch out when one and the same object feeds both app.media.openPlayer and PlayerInfo.honors, because each function treats unrecognized args in its own way. Whereas app.media.openPlayer simply skips over settings or events it has never heard of, PlayerInfo.honors will hand back false the moment it encounters any unfamiliar setting, method, or event.

To illustrate, { settings: { upsideDown: true } } passes muster inside an app.media.openPlayer call. Because no “upsideDown” setting exists, that entry is simply discarded. Feed the same unknown setting to PlayerInfo.honors, however, and the result comes back false.

What follows is the full roster of properties the HonorsArgs object accepts. The layout below roughly imitates a JavaScript object literal, except each property carries its type or a description in place of a genuine value:

Argument-shape notation for the documented media wrapper. Words such as `string`, `MediaOffset` and `anything` describe expected values; this is not an executable object literal.

```text
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

Provide the two callback functions and assign this object to the media arguments’ `events` property.

```javascript
var events = {
    afterReady: doAfterReady,
    onClose: doOnClose
};
```

Alternatively, when you author an HonorsArgs from scratch, the notation can be condensed like so:

This is the event-selection object for the documented media wrapper; assign it to that wrapper’s `events` property.

```javascript
var events = { Ready: true, Close: true };
```
