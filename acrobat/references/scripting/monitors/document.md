# document

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays show the most of the document named by the Doc parameter doc.

Should the document land on none of the displays in the starting Monitors object, the call returns an empty Monitors array when bRequire is true, or — when bRequire is false or left out — a Monitors array carrying at least one display picked arbitrarily from the original.

Parameters

| Parameter | Description |
| --- | --- |
| doc | The document's Doc. |
| bRequire | (optional) A Boolean; refer to the explanation given earlier. |

Returns

A Monitors object
