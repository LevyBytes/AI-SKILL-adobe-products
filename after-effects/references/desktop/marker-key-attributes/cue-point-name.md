# cuePointName

Return type: String.

Contents of cue point Name field in marker dialog box.

### parameters

Return type: associative array of String values.

Contents of Parameter Name and Parameter Value fields in marker dialog box.

To illustrate, given a parameter called "background color", the value at the closest marker can be reached with this expression:

thisComp.marker.nearestKey(time).parameters["background color"]
