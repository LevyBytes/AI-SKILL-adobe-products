# openPlayer

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Invokes app.media.createPlayer to make a MediaPlayer object, then invokes MediaPlayer.open to open it.

A handful of events fire from this method, among them Ready (see onReady and afterReady), Play (see onPlay and afterPlay), and Focus (see onFocus and afterFocus). The EventListener object carries a broad description of these events.

On failure the method alerts the user and returns null; it raises no exceptions.

Parameters

| Parameter | Description |
| --- | --- |
| args | (optional) A PlayerArgs object. |

Returns

A MediaPlayer object, or null on failure

Example 1: This bare-bones example is custom JavaScript taken from the Actions tab in a screen annotation's Multimedia Properties panel. Passing the args parameter lets you override the parameters that the screen annotation's UI laid down.

```javascript
app.media.openPlayer();
```

Override settings.repeat : where repeat sits at 1, switch it to 2; otherwise switch it to 1.

```javascript
var nRepeat =
    ( event.action.rendition.getPlaySettings().repeat == 1 ) ? 2 : 1;
var args = { settings: { repeat: nRepeat } };
app.media.openPlayer(args);
```

For what event.action.rendition means, see the event object. That same example also leans on Rendition.getPlaySettings to reach the settings tied to the rendition due to play — the one bound to the screen annotation.

Example 2: The script below runs off a form button's mouse-up action. It plays a docked media clip within a screen annotation.

```javascript
app.media.openPlayer({
    rendition: this.media.getRendition( "myClip" ),
    annot: this.media.getAnnot( {nPage:0,cAnnotTitle:"myScreen"} ),
    settings: { windowType: app.media.windowType.docked }
});
```

Example 3: This one is custom JavaScript from the Actions tab in a screen annotation's Multimedia Properties. The user clicks the annotation, and a movie clip chosen at random plays.

```javascript
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
