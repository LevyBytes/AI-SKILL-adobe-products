# onClose

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

No matter what brings it about, closing a MediaPlayer fires the Close event. The companion afterClose is documented too; EventListener spells out how the on- and after- forms differ.

Should you want the Close event to launch a second media player, check doc.media.canPlay beforehand to confirm playback is permitted — it may be barred, for instance, while the document itself is shutting down.

Beyond the usual event properties, a Close event's event object carries the following as well:

| media.closeReason | Why the player was closed, from app.media.closeReason |
| --- | --- |
| media.hadFocus | Did the player have the focus when it was closed? |

Should a player still hold the focus as it closes, a Blur event reaches it first and the Close event second. Within that Close event, media.hadFocus tells you whether the player held the focus just before it shut.

By the time the afterClose event method runs, the MediaPlayer is already gone and its JavaScript object is no longer alive.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |

Example: Fired from a Rendition action, this script finds out what caused the media clip to close. See app.media. closeReason.

```javascript
var playerEvents = new app.media.Events({
    onClose: function (e) {
        var eReason, r = app.media.closeReason;
        switch ( e.media.closeReason )
        {
            case r.general: eReason = "general"; break;
            case r.error: eReason = "error"; break;
            case r.done: eReason = "done"; break;
            case r.stop: eReason = "stop"; break;
            case r.play: eReason = "play"; break;
            case r.uiGeneral: eReason = "uiGeneral"; break;
            case r.uiScreen: eReason = "uiScreen"; break;
            case r.uiEdit: eReason = "uiEdit"; break;
            case r.docClose: eReason = "Close"; break;
            case r.docSave: eReason = "docSave"; break;
            case r.docChange: eReason = "docChange"; break;
        }
        console.println("Closing...The reason is  " + eReason );
    }
});
app.media.openPlayer({ events: playerEvents });
```
