# Document.close()

app.activeDocument.close([saveOptions])

### Description

Closes a document according to the supplied save options.

After closing a document, set that document reference to null so the script does not accidentally access a closed document.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| saveOptions | SaveOptions | Save options to close with |

### Returns

Nothing.
