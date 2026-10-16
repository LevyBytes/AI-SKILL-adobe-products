# innerDocWindowRect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of Numbers | R |

Hands back a rectangle, given as screen coordinates in an array, that marks the bounds of the Acrobat inner document window. Elements belonging to the outer document rectangle, such as the title bar and the resizing border, are left out of this one.

How the document and application rectangles relate varies by platform. Take Windows, where the document window always nests within the application window; on Mac OS the two coincide.

See also innerAppWindowRect, outerAppWindowRect, outerDocWindowRect, and pageWindowRect.
