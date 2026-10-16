# sounds

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array | R |

An array gathering every named Sound object the document contains.

See also getSound, importSound, deleteSound, and the Sound object.

Example:

```javascript
var s = this.sounds;
for (i = 0; i < s.length; i++)
    console.println("Sound[" + i + "]=" + s[i].name);
```
