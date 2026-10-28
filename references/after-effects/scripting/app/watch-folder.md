# app.watchFolder()

app.watchFolder(folder_object_to_watch)

### Description

Kicks off a Watch Folder (network rendering) process aimed at a folder you specify.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| folder_object_to_watch | Extendscript Folder | The folder to watch. |

### Returns

Nothing.

### Example

```javascript
var theFolder = new Folder("c:/tool");
app.watchFolder(theFolder);
```

### See Also

- app.endWatchFolder()
- app.parseSwatchFile()
- app.isWatchFolder
