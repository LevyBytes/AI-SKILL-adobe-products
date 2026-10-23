# AVItem.setProxyWithSequence()

app.project.item(index).setProxyWithSequence(file,forceAlphabetical)

### Description

Assigns a file sequence as this AVItem's proxy, optionally locking the order to alphabetical. The named sequence is read into a new FileSource object, which becomes the proxySource attribute, and useProxy is set to true.

Interpretation parameters are not retained: the user preferences govern instead. Should any file in the sequence have an unlabeled alpha channel while the preference is set to ask, the method skips the prompt and estimates the alpha interpretation on its own.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | Extendscript File object | The first file in the sequence. |
| forceAlphabetical | Boolean | When true, use the "Force alphabetical order" option. |

### Returns

Nothing.
