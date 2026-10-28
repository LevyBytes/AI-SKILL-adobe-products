# nonDocument

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object trimmed to whichever display or displays show none of the document, or the least of it.

Parameters

| Parameter | Description |
| --- | --- |
| doc | The target document's Doc. |
| bRequire | (optional) A Boolean that picks the return value when every display still shows some of the document. Set it true and nonDocument comes back empty; leave it false or unset and nonDocument hands back a Monitors array carrying at least one display chosen arbitrarily from the original Monitors array. |

Returns

A Monitors object
