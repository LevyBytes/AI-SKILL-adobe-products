# honors

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Polls a player plug-in on whether it can satisfy every setting, method, and event named in the args parameter. The reply is a best guess made without launching a media player, so it is not guaranteed accurate. Supply args.URL, for instance, and the scheme (such as "http://") gets checked, yet honors never actually tries to open the URL.

Note

Compatibility: only Acrobat 7.0 onward supports honors. To bridge both Acrobat 6.0 and Acrobat 7.0, the Acrobat SDK ships JavaScript source you can paste into a PDF; it falls back to hard-coded checks under Acrobat 6.0 and invokes honors on later Acrobat releases. The playerHonors Function covers the specifics.

Both honors and the HonorsArgs object echo the MH (“must honor”) entries in the PDF format; a number of those can be configured from the Playback Requirements panel of the Rendition Settings for a multimedia rendition. What honors offers is a way to pick a player meeting playback requirements dynamically in JavaScript, rather than statically inside the PDF file.

Parameters

| Parameter | Description |
| --- | --- |
| args | The HonorsArgs object under test. It mirrors the PlayerArgs Object that app.media.openPlayer accepts so closely that any PlayerArgs object can serve as a HonorsArgs; on top of that, HonorsArgs allows a few extra options reserved for honors alone. |

Returns

A Boolean: true when the player plug-in can satisfy every item carried in the args object.

Example: play a media clip through a player offering particular capabilities.

```javascript
function playWithRequirements( args )
{
    var plugins = app.media.getPlayers( args.mimeType )
    if( plugins )
    {
        for (var index = 0; index < plugins.length; index++)
        {
            var plugin = plugins[index];
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

Supply `playWithRequirements`, `doAfterReady` and `doOnClose` as the surrounding media example requires. Pass callback functions; do not invoke them while constructing the argument object.

```javascript
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
        seek: [ { marker: 'test', time: 1 } ],
    },
    events:
    {
        afterReady: doAfterReady,
        onClose: doOnClose,
    },
});
```
