# timestampSign

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 10.0 | D | Yes | All |

Applies a timestamp that stays invisible to a document.

Parameters

| Parameter | Description |
| --- | --- |
| oSig | (optional) The signature engine object. Leave this out and the built-in default signature engine handles it. |
| cDIPath | (optional) Where on disk the signed file should be written. Omit it, and the file overwrites itself in place. |
| bUI | (optional) Pass TRUE to permit UI interaction. FALSE is acceptable as long as a path is provided. FALSE is the default. |

Returns

TRUE when the signing went through.

Example:

```javascript
var myEngine = security.getHandler( "Adobe.PPKLite" );
// Note that login is not required

this.timestampSign({
    oSig:myEngine,
    cDIPath:"/c/temp/TSsigSign.pdf",
    bUI:false
});
```
