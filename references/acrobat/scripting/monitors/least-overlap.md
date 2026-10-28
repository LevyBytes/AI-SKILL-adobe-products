# leastOverlap

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays cover the least of the rectangle given by the rect parameter.

Parameters

| Parameter | Description |
| --- | --- |
| rect | Four numbers expressed in screen coordinates, forming a rectangle. |
| maxOverlapArea | (optional) When you set maxOverlapArea, the resulting Monitors array keeps only displays covering at least that much of the rectangle, returning an empty Monitors array if none reach that coverage. |

Returns

A Monitors object
