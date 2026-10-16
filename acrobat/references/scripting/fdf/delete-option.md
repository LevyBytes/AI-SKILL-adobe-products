# deleteOption

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | Yes | Not available in Reader | Integer | R/W |

Says whether the FDF file ought to be erased on its own once processing finishes. Whether this value gets honored varies with what the FDF file holds and how it is handled. From Acrobat 6.0 onward it applies to embedded files. The permitted values are

0: (default) once processing wraps up, the FDF file is discarded automatically by Acrobat.

1: Acrobat leaves the FDF file in place after handling it (though a web or mail browser might still clear it away).

2: after processing, Acrobat asks the user whether the FDF file should go (though a web or mail browser might still clear it away).
