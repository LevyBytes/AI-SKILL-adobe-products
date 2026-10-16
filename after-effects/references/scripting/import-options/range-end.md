# ImportOptions.rangeEnd

importOptions.rangeEnd

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Defines where the clipping range of the sequence being imported stops.

- Produces 'missing frames' (video-bards) when rangeEnd runs past the length of the sequence being imported.
- Does nothing when sequence is false.
- Raises an exception when forceAlphabetical is true.
- Raises an exception when rangeEnd is below rangeStart, and snaps the range back to all the files.

### Type

Integer; read/write.
