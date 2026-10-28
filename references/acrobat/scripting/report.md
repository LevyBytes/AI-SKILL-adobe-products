# Report

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | Not available in Reader |

A constructor. Builds a fresh Report object using the media and bounding boxes you give (measured in points, each 1/72 of an inch). Without arguments it falls back to an 8.5 x 11 inch media box and a bounding box set in 0.5 inches from the media box on every side.

Parameters

| Parameter | Description |
| --- | --- |
| aMedia | (optional) The media type. |
| aBBox | (optional) The bounding box size. |

Returns

A Report object.
