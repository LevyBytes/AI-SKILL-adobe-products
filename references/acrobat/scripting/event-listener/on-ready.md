# onReady

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Once a freshly created MediaPlayer becomes usable, the Ready event fires. A MediaPlayer object will reject most of its method calls right up until the Ready event has fired. The companion afterReady is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |
