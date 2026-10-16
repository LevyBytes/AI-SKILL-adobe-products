# getAnnots3D

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

For a single page, this method delivers an array of Annot3D objects.

Caution

Steer clear of this method when you are layering Flash content onto a 3D annotation that already exists. Reach for getAnnotsRichMedia in those situations instead.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | A 0-based number marking the page that holds the Annot3D objects. |

Returns

An array of Annot3D objects, or undefined if none is found.
