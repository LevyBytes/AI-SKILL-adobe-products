# getSound

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Returns the sound object that carries the name you give. See also sounds, importSound, deleteSound, and the Sound object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which object to fetch, by name. |

Returns

The Sound object corresponding to the specified name.

Example: Play a sound.

```javascript
var s = this.getSound("Moo");
console.println("Playing the " + s.name + " sound.");
s.play();
```
