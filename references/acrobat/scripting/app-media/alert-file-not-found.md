# alertFileNotFound

Version (Key): 6.0 | Save-Prefs: No | Security: No | Product: All


Pops up the usual "file not found" warning, which can carry a Don't Show Again check box if you want one.

Parameters

| Parameter | Description |
| --- | --- |
| oDoc | The Doc to which this alert belongs is oDoc |
| cFilename | The missing file's name is cFilename |
| bCanSkipAlert | (optional) When bCanSkipAlert is set true and the check box gets ticked by the user, the return value is true; without that it is false. Its default is false. |

Returns

When bCanSkipAlert is true, a checked box yields true and an unchecked one yields false.

Example:

```javascript
if ( !doNotNotify )
{
    var bRetn = app.media.alertFileNotFound(this, cFileClip, true );
    var doNotNotify = bRetn;
}
```
