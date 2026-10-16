# RenderQueue.render()

app.project.renderQueue.render()

### Description

Kicks off the rendering run — the equivalent of clicking Render in the Render Queue panel. Control does not come back from the method until rendering has finished. Should you want to pause or halt it along the way, call RenderQueue.pauseRendering() or RenderQueue.stopRendering() from an onError or onstatus callback.

- For reacting to errors as rendering proceeds, set up a callback function in app.onError.
- For reacting when a specific item's status shifts during the render, set up a callback function in RenderQueueItem.onStatusChanged on the matching RenderQueueItem object.

### Parameters

None.

### Returns

Nothing.
