# afterReady

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |
|  |  |  |  |

Once a freshly created MediaPlayer becomes usable, the Ready event fires. The companion onReady is documented too; EventListener spells out how the on- and after- forms differ.

A MediaPlayer object will reject most of its method calls right up until the Ready event has fired.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |
|  |  |

See afterScript, below, Markers. get and the MediaOffset object.

Example: Several media clips are driven by this document-level script. Every screen annotation gets its own media player opened through OpenPlayer, and the afterReady script reports back to Multiplayer the moment that player is ready.

```javascript
// Parameters: doc, page, rendition/annot name, mulitPlayer instance
function OnePlayer( doc, page, name, multiPlayer )
{
    var player = app.media.openPlayer({
        annot: doc.media.getAnnot(
            { nPage: page, cAnnotTitle: name }),
        rendition: doc.media.getRendition( name ),
        settings: { autoPlay: false },
        events: {
            afterReady: function( e ) {
            multiPlayer.afterReady( player );
            },
        }
    });
    return player;
}
// Parameters: doc, page, list of rendition/annot names
function MultiPlayer( doc, page )
{
    var nPlayersCueing = 0;  // number of players cueing up
    var players = [];       // the SinglePlayers

    this.afterReady = function( player ) {
        if( ! player.didAfterReady ) {
            player.didAfterReady = true;
            nPlayersCueing--;
            if( nPlayersCueing == 0 ) this.play();
        }
    }
    this.play = function() {
        for( var i = 0;  i < players.length;  i++ ) players[i].play();
    }
    for( var i = 2;  i < arguments.length;  i++ ) {
        players[i-2] = new OnePlayer(doc,page,arguments[i],this );
        nPlayersCueing++;
    }
}
```

To play several media clips at once, run the code below — say, from a form button's mouse-up action.

```javascript
var myMultiPlayer = new MultiPlayer( this, 0, "Clip1", "Clip2" );
```

See afterScript for another example of afterReady.
