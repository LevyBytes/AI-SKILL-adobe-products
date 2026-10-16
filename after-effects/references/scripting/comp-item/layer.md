# CompItem.layer()

app.project.item(index).layer(index)

app.project.item(index).layer(otherLayer, relIndex)

app.project.item(index).layer(name)

### Description

Hands back a Layer object, identified either by its name, by an index position in this layer, or by an index taken relative to some other layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer, in the range [1..numLayers], where numLayers is the number of layers in the composition | The index number of the desired layer in this composition. |

or:

| Parameter | Type | Description |
| --- | --- | --- |
| otherLayer | Layer object in this composition. | The relIndex value is added to the index value of this layer to find the position of the desired layer. |
| relIndex | Integer, in the range [1 - otherLayer.index .. numLayers - otherLayer.index], where numLayers is the number of layers in the composition. | The position of the desired layer, relative to otherLayer. This value is added to the otherLayer value to derive the absolute index of the layer to return. |

or:

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the desired layer. |

### Returns

Layer object.
