# RenderQueue.pauseRendering()

app.project.renderQueue.pauseRendering(pause)

### Description

Either halts the rendering run for the moment or picks a paused run back up — the same thing as hitting Pause in the Render Queue panel mid-render. This call is available from inside an RenderQueueItem.onStatusChanged or app.onError callback.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pause | Boolean | true to pause a current render process, false to continue a paused render. |

### Returns

Nothing.
