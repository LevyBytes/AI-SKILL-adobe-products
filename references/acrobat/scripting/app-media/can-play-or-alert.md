# canPlayOrAlert

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Checks whether media playback is permitted at all; a true result means it is. When playback is blocked, the user gets an alert and the result is false.

Parameters

| Parameter | Description |
| --- | --- |
| args | A PlayerArgs object (see app.media. createPlayer). |

Returns

true if media playback is allowed, otherwise false.

Note

Before it tries to build a player, createPlayer runs this function. Should you roll your own replacement for createPlayer, canPlayOrAlert is available to warn the user wherever playback is off-limits — multimedia authoring mode being one such case.

Within the args object, doc is the lone property that matters, so the snippet below works.

Supply the document and the documented media-player arguments, including the desired rendition or media URL.

```javascript
function openPlayableMedia(myDoc, args) {
    if (!app.media.canPlayOrAlert({doc: myDoc})) return null;
    args.doc = myDoc;
    return app.media.openPlayer(args);
}
```

What runs above will show "Cannot play media while in authoring mode", or whatever other alert fits.
