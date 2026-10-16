# deleteRendition

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Removes the named Rendition from the document. Once gone, that Rendition can no longer be reached through JavaScript. Should the Rendition be absent, the call simply has no effect.

Parameters

| Parameter | Description |
| --- | --- |
| cName | A string holding the Rendition's name. |

Example: Remove one specific rendition and confirm afterward whether it worked.

```javascript
this.media.deleteRendition("myMedia");
if ( this.media.getRendition("myMedia") == null)
    console.println( "Rendition successfully deleted" );
```
