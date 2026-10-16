# AVLayer.compPointToSource()

app.project.item(index).layer(index).compPointToSource()

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

Translates coordinates given in composition space, like sourcePointToComp, into the layer's own coordinate space.

Warning

For a text layer, only that layer's opening character — at the present time — is taken into account by this value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourcePointToComp | Array of floating-point values, [x, y] | Position array of composition coordinates |

### Returns

Array of ([X,Y]) position coordinates; read-only.
