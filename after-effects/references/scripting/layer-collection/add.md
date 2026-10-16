# LayerCollection.add()

app.project.item(index).layers.add(item[, duration])

### Description

Builds a fresh AVLayer wrapping the item you pass in and appends it to this collection. Whether the layer begins at the composition's start time depends on the "Create Layers at Composition Start Time" preference. Should the item be one that cannot legally become a layer of this CompItem, the call throws an exception.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| item | AVItem object | The item to be added. |
| duration | Floating-point value | Optional. Measured in seconds, this controls how long a still layer runs; it matters solely when the item holds still footage and is ignored for movies, sequences, and audio. Pass a value and the new layer's duration is set to it; leave it out and the duration falls back to whatever the user's preferences dictate. The default matches the duration of the CompItem that holds the layer. Should you want a different default, go to Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (Mac OS) and adjust the choices listed under Still Footage. |

### Returns

AVLayer object;
