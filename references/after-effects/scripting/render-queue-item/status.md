# RenderQueueItem.status

app.project.renderQueue.item(index).status

### Description

Where this item currently stands in the render process.

### Type

An RQItemStatus enumerated value; read-only. One of:

- RQItemStatus.`WILL_CONTINUE`: Rendering process has been paused.
- RQItemStatus.`NEEDS_OUTPUT`: Item lacks a valid output path.
- RQItemStatus.UNQUEUED: Item is listed in the Render Queue panel but composition is not ready to render.
- RQItemStatus.QUEUED: Composition is ready to render.
- RQItemStatus.RENDERING: Composition is rendering
- RQItemStatus.`USER_STOPPED`: Rendering process was stopped by user or script.
- RQItemStatus.`ERR_STOPPED`: Rendering process was stopped due to an error.
- RQItemStatus.DONE: Rendering process for the item is complete.
