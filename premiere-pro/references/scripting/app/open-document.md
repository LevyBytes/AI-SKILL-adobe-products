# app.openDocument()

app.openDocument(path, [suppressConversionDialog], [bypassLocateFileDialog], [bypassWarningDialog], [doNotAddToMRUList])

### Description

Opens a Premiere Pro Project object from the file at the specified path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Full path to the document being opened. |
| suppressConversionDialog | Boolean | Optional. Suppresses the project conversion dialog. |
| bypassLocateFileDialog | Boolean | Optional. Skips the locate file dialog. |
| bypassWarningDialog | Boolean | Optional. Skips the warning dialog. |
| doNotAddToMRUList | Boolean | Optional. Does not add this file to the Most Recently Used List. |

### Returns

Returns true after the file opens successfully.
