# Layer.setParentWithJump()

app.project.item(index).layer(index).setParentWithJump([newParent])

### Description

Makes the named layer this layer's parent while leaving the child layer's transform values as they are.

Because this layer's transform values get folded together with those of its ancestors, the child layer may visibly jump in rotation, translation, or scale.

To keep the child layer from jumping, assign the parent attribute on its own instead. Going that route, an offset is computed and stored in the child layer's transform fields so that no jump happens.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newParent | Layer object | Optional. A layer in the same composition. If not specified, it sets the parent to None. |

### Returns

Nothing.
