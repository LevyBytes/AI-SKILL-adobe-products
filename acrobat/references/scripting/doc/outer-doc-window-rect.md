# outerDocWindowRect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of Numbers | R |

Hands back a rectangle, given as screen coordinates in an array, for the Acrobat outer document window. This one takes in elements like the title bar and the resizing border, which the inner document rectangle leaves out.

How the application and document rectangles relate can vary across platforms. On Windows, for instance, the document window always nests within the application window. The windows coincide under Mac OS.

See also innerAppWindowRect, outerDocWindowRect, outerAppWindowRect, and pageWindowRect.
