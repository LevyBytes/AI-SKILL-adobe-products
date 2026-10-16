# context3D

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | All | global object or undefined | R |

When activated holds true and subtype equals "3D", reading this gives back the annotation’s global scripting context — a global object that wraps the 3D scene (the JS 3D API Reference goes deeper). Otherwise, whenever activated is false or subtype is anything but "3D", you get undefined.
