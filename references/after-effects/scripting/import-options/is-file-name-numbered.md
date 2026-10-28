# ImportOptions.isFileNameNumbered()

importOptions.isFileNameNumbered(file)

Warning

This method/property is officially undocumented and was found via research. The information here may be inaccurate, and this whole method/property may disappear or stop working some point. Please contribute if you have more information on it!

### Description

Tells you whether the file object carries a number, i.e. whether a digit appears in its file name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The file to check |

### Returns

Object, containing 2 keys:

- isNumbered: Boolean; wether the file name contains any digit,
- num: Integer; a number found in file name. Returns 0 when isNumbered is false.

### Example

```javascript
var importOptions = new ImportOptions();
importOptions.isFileNameNumbered('image.png');     // "isNumbered": false, "num": 0
importOptions.isFileNameNumbered('003image.png');  // "isNumbered": true, "num": 3
importOptions.isFileNameNumbered('ima0102ge.png'); // "isNumbered": true, "num": 102
importOptions.isFileNameNumbered('image0120.png'); // "isNumbered": true, "num": 120
```
