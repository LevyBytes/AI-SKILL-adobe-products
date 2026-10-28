# playerHonors

You get this function as JavaScript source ready to paste into a PDF as a document-level script. It runs the very checks that Acrobat 7.0's honors method runs, yet it also functions under Acrobat 6.0.

Under Acrobat 6.0, playerHonors falls back on fixed checks tailored to whatever media players ship with Acrobat 6.0.

On Acrobat 7.0 and newer, playerHonors simply delegates to honors.

Parameters

| Parameter | Description |
| --- | --- |
| doc | A Doc. |
| info | A PlayerInfo object. |
| args | Whichever HonorsArgs object you want checked. |

Returns

A Boolean that comes back true when the player plug-in is able to honor every item contained in the args object.

Example: The scenario here mirrors the one given for the PlayerInfo object's honors method, except it goes through the playerHonors JavaScript function instead. As long as the playerHonors source has been dropped into the target PDF, this runs under both Acrobat 6.0 and Acrobat 7.0.

Pass the document as `doc`, the media requirements as `args`, and install the documented `playerHonors` compatibility function first.

```javascript
function playWithRequirements( doc, args ) {
    var plugins = app.media.getPlayers( 'video/avi' )
    if( plugins ) {
        for (var index = 0; index < plugins.length; index++) {
            var plugin = plugins[index];
            if( playerHonors( doc, plugin, args ) ) {
                args.players = [plugin];
                return app.media.openPlayer( args );
            }
        }
    }
}
```
