# close

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Shuts the media player when it is open. When it is already closed, the call does nothing and raises no error.

Feed eReason one of the values from the app.media.closeReason enumeration. From there the value carries through into event.media.closeReason, read by the Close event (see onClose and afterClose) that closing sets off.

When the player holds keyboard focus, a Blur event (onBlur or afterBlur) arrives before the Close event. The specific media player may also raise others — Status (onStatus or afterStatus), Stop (onStop or afterStop), and the like.

Parameters

| Parameter | Description |
| --- | --- |
| eReason | A value taken from the app.media.closeReason enumeration. |
