# getURLData

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a MediaData object (see MediaSettings. data) standing for data to be fetched from a URL plus an optional MIME type. That MediaData object lets you build a player that pulls data from the URL.

Parameters

| Parameter | Description |
| --- | --- |
| cURL | The URL the media data gets pulled from. |
| cMimeType | (optional) The data's MIME type. |

Returns

MediaData object

Example: Pull a media clip off the Internet and play it inside a floating window.

```javascript
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
