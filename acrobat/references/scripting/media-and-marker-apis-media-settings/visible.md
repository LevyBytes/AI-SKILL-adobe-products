# visible

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R/W |

A Boolean that governs whether the player is shown.

The default value is true.

Example: configure a docked clip for audio-only output; the script fires from a Rendition action.

```javascript
   var args = {
       settings: {
           visible: false,
           windowType: app.media.windowType.docked
       }
   };
app.media.openPlayer( args );
```

See also MediaPlayer. visible.
