# ImportOptions.rangeStart

importOptions.rangeStart

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Defines where the clipping range of the sequence being imported starts.

- Does nothing when sequence is false.
- Raises an exception when forceAlphabetical is true.
- Raises an exception when the rangeEnd value is 0.
- Raises an exception when rangeStart sits above rangeEnd, and snaps the range back to all the files.

### Type

Integer; read/write.

### Example

```javascript
/*
    Import 20 frames of the sequence, starting at frame 10 and ending at frame 30
 */
var mySequence = '~/Desktop/sequence/image_000.png';

var importOptions = new ImportOptions();
importOptions.file = new File(mySequence);
importOptions.sequence = true;
importOptions.forceAlphabetical = false;
importOptions.rangeStart = 10;
importOptions.rangeEnd = 30;

var item = app.project.importFile(importOptions);
```
