# RenderQueueItem.onStatusChanged

app.project.renderQueue.item(index).onStatusChanged

### Description

The name of the callback function fired every time the RenderQueueItem.status attribute takes on a new value.

While rendering is running or paused you cannot alter render queue items or the application itself; this callback, though, gives you a hook to pause or halt the render. See RenderQueue.pauseRendering() and RenderQueue.stopRendering(). See also app.onError.

### Type

A function name string, or null if no function is assigned.

### Example

```javascript
function myStatusChanged() {
    alert(app.project.renderQueue.item(1).status);
}

app.project.renderQueue.item(1).onStatusChanged = myStatusChanged;
app.project.renderQueue.item(1).render = false; // changes status and shows dialog
```
