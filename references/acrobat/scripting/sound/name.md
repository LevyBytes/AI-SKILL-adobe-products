# name

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| Deprecated | No | No | No | String | R/W |

The name that belongs to this Sound object.

Example: Dump to the console the name of every sound embedded in the document at hand.

```javascript
console.println("Dumping all sound objects in this document.");
var s = this.sounds;
for (var i = 0; i < this.sounds.length; i++)
    console.println("Sound[" + i + "]=" + s[i].name);
```
