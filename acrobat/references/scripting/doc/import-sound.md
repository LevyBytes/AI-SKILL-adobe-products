# importSound

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | All |

Brings a sound into the document and ties the name you give to that sound.

Note

When cDIPath is supplied, a batch or console event is the only place this method can run. See Privileged context. A discussion of JavaScript events sits in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | What name to tie to the sound object. |
| cDIPath | (optional) A device-independent path leading to a sound file on the user's hard drive. That path can be absolute or relative to the current document. Skip it and the user gets prompted to find a sound file. |

Example: Pull in a pair of sounds, then play each back.

```javascript
this.importSound("Moo");
this.getSound("Moo").play();
this.importSound("Moof", "./moof.wav");
this.getSound("Moof").play();
```

Worth consulting as well: sounds, getSound, deleteSound, and the Sound object.
