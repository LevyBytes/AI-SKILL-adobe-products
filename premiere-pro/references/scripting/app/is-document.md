# app.isDocument()

app.isDocument(path)

### Description

Checks whether the file at path is openable as a Premiere Pro project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | A file path. |

### Returns

True means the file can open as a Premiere Pro project.

### Example

Valid-project test examples

```javascript
app.isDocument('~/Desktop/myProject.prproj'); // true
app.isDocument('~/Desktop/textFile.txt');     // false
app.isDocument('~/Desktop/footageFile.mov');  // false
app.isDocument('~/Desktop/imageFile.mov');    // false
```
