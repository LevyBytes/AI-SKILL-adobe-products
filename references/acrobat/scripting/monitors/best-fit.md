# bestFit

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the Monitors object trimmed to the smallest display or displays that still meet or exceed the given nWidth and nHeight, both in pixels.

Parameters

| Parameter | Description |
| --- | --- |
| nWidth | The least width the best-fit display may have. |
| nHeight | The least height the best-fit display may have. |
| bRequire | (optional) Governs the outcome when no display reaches the requested width and height. Set it true and an empty Monitors array comes back; leave it false or unset and you instead get a Monitors array holding the largest display or displays. |

Returns

A Monitors object
