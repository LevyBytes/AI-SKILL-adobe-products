# getPageTransition

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Returns, for the page you name, its transition. See also setPageTransitions.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page. |

Returns

An array of three values: [ nDuration, cTransition, nTransDuration ].

nDuration sets the longest stretch the page stays on screen before the viewer flips ahead to the next page on its own. Set it to -1 and automatic page turning is off.

cTransition names the transition applied to the page. The app.fs. transitions property carries a list of the transitions you can use.

cTransDuration gives, in seconds, how long the transition effect runs.
