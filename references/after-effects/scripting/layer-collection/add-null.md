# LayerCollection.addNull()

app.project.item(index).layers.addNull([duration])

### Description

Builds a null layer and appends the resulting AVLayer object to this collection. The effect mirrors picking Layer > New > Null Object from the menu.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| duration | Floating-point value | Optional. Expressed in seconds, this is how long a still layer lasts. Supply it and the new layer's duration takes that value; omit it and the duration defaults to the user's preference setting. By default that equals the duration of the CompItem containing the layer. For a different default, open Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (Mac OS) and set choices under Still Footage. |

### Returns

AVLayer object.
