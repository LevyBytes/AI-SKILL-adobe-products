# LayerCollection.precompose()

app.project.item(index).layers.precompose(layerIndicies, name[, moveAllAttributes])

### Description

Spins up a fresh CompItem object and relocates the layers you name into its layer collection. Those individual layers leave this collection, and the new CompItem is added to it in their place.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| layerIndices | Array of integers | The position indexes of the layers to be collected. |
| name | String | The name of the new CompItem object. |
| moveAllAttributes | Boolean | Optional. Leave it true (the default) to carry every attribute over into the new composition, which matches ticking "Move all attributes into the new composition" in the Pre-compose dialog box. Setting it false is permitted only when the layerIndices array holds a single index, and corresponds to ticking the "Leave all attributes in" choice in that same dialog box. |

### Returns

CompItem object.
