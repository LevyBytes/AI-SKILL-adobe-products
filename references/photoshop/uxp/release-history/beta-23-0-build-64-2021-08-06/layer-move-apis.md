# [Layer Move APIs](../../layer/move.md)

- Use `layer.move(targetLayer, Constants.ElementPlacement)` to arrange layers. `Constants.ElementPlacement` was added for layer moves: `"placeAfter"` (place below a layer, below group if group layer), `"placeBefore"` (place above a layer, above group if group layer), and `"placeInside"` (inside group layers only).
- Use `layer.sendToBack()` and `layer.bringToFront()` to move a layer to the back or front. When `layer` is inside a group, those commands act within that group.
