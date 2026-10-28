# Project.importFile()

app.project.importFile(importOptions)

### Description

Brings in the file named by the supplied ImportOptions object under the options it carries — the scripting equivalent of File > Import File.

Builds a fresh FootageItem object from that file, appends it to the project's items array, and hands it back.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| importOptions | ImportOptions | Options specifying the file to import and the options for the operation. |

### Returns

FootageItem object.

### Example

```javascript
app.project.importFile(new ImportOptions(new File("sample.psd")));
```
