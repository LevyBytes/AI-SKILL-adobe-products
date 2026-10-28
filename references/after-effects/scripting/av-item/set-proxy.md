# AVItem.setProxy()

app.project.item(index).setProxy(file)

### Description

Assigns a given file to serve as this AVItem's proxy.

The named file is read into a freshly created FileSource object; that object becomes the proxySource attribute, and useProxy is flipped to true.

Interpretation parameters are not carried over here — the user preferences are applied instead. When the file carries an unlabeled alpha channel and the relevant preference is configured to query the user, no prompt appears: the method just estimates how the alpha should be read.

The behavior is unlike assigning a FootageItem's mainSource, yet both operations mirror what happens through the user interface.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The file to be used as a proxy. |

### Returns

None.
