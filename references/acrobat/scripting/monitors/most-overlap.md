# mostOverlap

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays cover the most of the rectangle given by the rect parameter.

When no display reaches that overlap, the call returns an empty Monitors array if minOverlapArea was supplied, or — if minOverlapArea was left out — a Monitors array carrying at least one display chosen arbitrarily from the original.

Parameters

| Parameter | Description |
| --- | --- |
| rect | An array of four screen-coordinate numbers that defines a rectangle. |
| minOverlapArea | (optional) A Boolean; consult the explanation above. |

Returns

A Monitors object
