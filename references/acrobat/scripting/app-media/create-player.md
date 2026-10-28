# createPlayer

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Builds a MediaPlayer object but leaves the player unopened.

Note

Opening the player is done through MediaPlayer.open. Both steps fold into one if you call app.media.openPlayer in place of createPlayer.

When createPlayer runs inside a rendition action — for instance, as custom JavaScript typed into the Actions tab of the Multimedia Properties panel — the defaults come from the action's event object. In that situation the args parameter can be skipped unless you mean to override what the rendition action supplies. To handle the event object and the args (see PlayerArgs object object) parameter, createPlayer hands them off to argsDWIM.

The MediaPlayer object comes fitted with stock EventListeners — the standard plumbing for interacting cleanly with Acrobat — unless the PlayerArgs object has noStockEvents turned on. You may also pass extra EventListeners in the PlayerArgs object, or tack them on later through MediaPlayer.events.add.

Where args.annot.player names an open MediaPlayer, createPlayer shuts that player down, and that shutdown fires events.

Parameters

| Parameter | Description |
| --- | --- |
| args | A PlayerArgs object; the properties it takes, required and optional alike, are spelled out further down. When createPlayer runs within a Rendition action that has an associated rendition, this parameter is optional, and its properties get filled in from the defaults and from the choices made in the UI. Outside that case, the parameter is required. |

PlayerArgs object

| Property | Type | Description |
| --- | --- | --- |
| doc | Object | The document's Doc object. Required whenever both annot and rendition are left out — URL playback being one example. |
| annot | Object | A ScreenAnnot object. Needed for docked playback unless the event object already holds it or MediaSettings.page is supplied. The fresh player ties to the annotation; whatever player had been bound to that annotation gets halted and shut. |
| rendition | Object | (optional) A Rendition object — either a MediaRendition or a RenditionList. Needed unless rendition turns up in the event object or URL is present. |
| URL | String | One of URL or rendition is required, and where both appear URL wins. |
| mimeType | String | (optional) Disregarded unless URL is present. With URL present, either mimeType or settings.players — the value app.media.getPlayers returns — is required. |
| settings | Object | (optional) A MediaSettings object. Takes precedence over the rendition settings. |
| events | Object | (optional) An EventListener object. Where stock events apply this is optional, slotted in once the stock events are set. |
| noStockEvents | Boolean | (optional) When true, skip the stock events. The default is false. |
| fromUser | Boolean | (optional) Set it true where a direct user action is what will fire this code, and false otherwise. Its default hinges on the event object. |
| showAltText | Boolean | (optional) When true, display alternate text (see Rendition. altText ) should the media fail to play. The default is true. |
| showEmptyAltText | Boolean | (optional) When true and the alternate text (see Rendition. altText ) is blank, render that alternate text as an empty box; when false, throw up an alert instead.<br><br>The default comes out true if fromUser is false, and false if fromUser is true. |

Returns

MediaPlayer object

Example 1: The code below spells out openPlayer, whose own definition leans on createPlayer.

```javascript
app.media.openPlayer = function( args )
{
    var player = null;
    try
    {
        args = app.media.argsDWIM( args );

        player = app.media.createPlayer( args );
        if( player )
        {
            var result = player.open();
            if( result.code != app.media.openCode.success )
            {
                player = null;
                app.media.alert
                    ( "Open", args, { code: result.code } );
            }
            else if( player.visible )
            player.setFocus();  // triggers Focus event
        }
    }
    catch( e )
    {
        player = null;
        app.media.alert( 'Exception', args, { error: e } );
    }

    return player;
}
```

Example 2: For samples of PlayerArgs in use, see the examples closing out the openPlayer description.
