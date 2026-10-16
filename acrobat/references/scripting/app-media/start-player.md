# startPlayer

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Looks at whether the PlayerArgs object names an annotation and whether that annotation already has an open player. If so, it runs player.play on that player to begin or pick up playback. If not, it turns to app.media.openPlayer to build and open a new MediaPlayer object. For the full story, see openPlayer.

Note

When you go through the Acrobat user interface to set up a multimedia annotation and rendition and add no custom JavaScript of your own, app.media.startPlayer is the mouse-up action that applies by default.

Parameters

| Parameter | Description |
| --- | --- |
| args | (optional) A PlayerArgs object |

Returns

A MediaPlayer object or null on failure

Example: Kick off a screen annotation by way of a form button.

```javascript
var args = {
    rendition: this.media.getRendition( "myClip" ),
    annot: this.media.getAnnot({ nPage: 0, cAnnotTitle: "myScreen" }),
};
app.media.startPlayer(args);
```
