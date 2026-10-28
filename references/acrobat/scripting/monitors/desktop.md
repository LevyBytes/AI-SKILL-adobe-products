# desktop

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Builds a fresh Monitors object holding a single Monitor object that stands for the whole virtual desktop. Its rect property merges every rect from the source Monitors object, its workRect property merges every workRect from that source, and colorDepth takes the lowest colorDepth present across the source.

Returns

A Monitors object

Note

You normally invoke the desktop method straight on whatever app.monitors returns. Run any of the object's other filters first, though, and desktop performs the same unions and minimum described above, but only over that filtered subset.
