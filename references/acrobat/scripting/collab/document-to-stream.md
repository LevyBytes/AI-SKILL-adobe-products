# documentToStream

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0.5 | No | Yes | All |

Writes out a duplicate of a Doc and hands back its contents in the form of a stream object.

This call leaves the document's dirty property as it was and makes no change to the original document.

Parameters

| Parameter | Description |
| --- | --- |
| oDocument | The Doc. |

Returns

A ReadStream object.
