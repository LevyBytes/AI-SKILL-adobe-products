# AVLayer.replaceSource()

app.project.item(index).layer(index).replaceSource(newSource, fixExpressions)

### Description

Swaps in a different source for this layer.

Warning

Run this method against a null layer and its isNull attribute stays true rather than flipping — the upshot being that the layer shows up neither in the comp viewer nor in renders.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newSource | AVItem object | The new source AVItem object. |
| fixExpressions | Boolean | true to adjust expressions for the new source, otherwise false.<br><br>Warning<br><br>Because this can demand heavy resources, save it for the very end of the operation when a large amount of footage is being replaced. See also Project.autoFixExpressions(). |

### Returns

Nothing.
