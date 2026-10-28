# hidden

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | Not allowed in Reader: Only available in Acrobat products | Boolean | R/W |

Controls whether the template stays hidden. A hidden template remains invisible to the user right up until it is spawned or switched to visible. The moment an invisible template turns visible, it gets tacked onto the end of the document.

Within Adobe Reader, the property acts like this:

In Adobe Reader builds before 5.1, assigning this property throws an exception.

Under Adobe Reader 5.1 and 6.0, whether you can set this property hinges on Advanced Forms Feature document rights.

Under Adobe Reader 7.0, there is no situation in which this property may be set.
