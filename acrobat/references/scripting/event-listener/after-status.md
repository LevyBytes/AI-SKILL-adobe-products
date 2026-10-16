# afterStatus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Each time a MediaPlayer reports one of its assorted status changes, the Status event fires. The companion onStatus is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Status event's event object carries the following as well:

| Property | Description |
| --- | --- |
| media.code | Status code value, defined in app.media.status. |
| media.text | Status message text. |

Only a subset of media players set the values below, and only while media.code == app.media.status.buffering. At all other times they read zero.

| media.progress | Progress value from 0 to media.total. |
| --- | --- |
| media.total | Maximum progress value. |

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |

Example: Track the player's status, run from a Rendition event tied to a screen annotation.

```javascript
var events = new app.media.Events
events.add({
    afterStatus: function ( e ) {
        console.println( "Status code " + e.media.code +
            ", description: " + e.media.text);
    }
});
app.media.openPlayer({ events: events });
```
