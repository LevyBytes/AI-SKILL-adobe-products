# getURLSettings

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Accepts a PlayerArgs object carrying a settings property and returns a MediaSettings object geared for URL playback. That settings property has to include a URL property and may include a mimeType property. It can also hold further settings, which get copied across into the resulting settings object.

Parameters

| Parameter | Description |
| --- | --- |
| args | A PlayerArgs object. |

Returns

MediaSettings object

Example 1: The same example as above. getURLSettings invokes getURLData and drops the returned MediaData object into the data property of the setting, then returns it.

```javascript
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

Reference data, output or notation; not an executable JavaScript program.

```text
http://www.example.com/streaming/radio.asx,video/x-ms-asx
```

The script underneath breaks the export value into a two-element array: element one is the URL and element two is the mimeType. Video plays in the screen annotation "myScreen"; failing that, the user only hears audio.

```javascript
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
