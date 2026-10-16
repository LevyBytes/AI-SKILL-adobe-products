# RenderQueue.queueInAME()

app.project.renderQueue.queueInAME(render_immediately_in_AME)

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

Triggers the Queue In AME command. You must hand it a boolean that tells AME whether to merely line up the render items (false) or to additionally begin working through its queue (true).

Note

This requires Adobe Media Encoder CC 2017 (11.0) or later.

Tip

Once AME has the queued items, it falls back on whichever encoding preset was used most recently. Set render_immediately_in_AME to true and you forfeit any chance to adjust the encoding settings beforehand.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| render_immediately_in_AME | Boolean | Telling AME whether to only queue the render items (false) or if AME should also start processing its queue (true). |

### Returns

Nothing.

### Example

The sample below tests whether the render queue has any queued items and, when it does, hands them off to AME without launching the render right away:

```javascript
// Scripting support for Queue in AME.
// Requires Adobe Media Encoder 11.0.
if (app.project.renderQueue.canQueueInAME === true) {
    // Send queued items to AME, but do not start rendering.
    app.project.renderQueue.queueInAME(false);
} else {
    alert("There are no queued item in the Render Queue.");
}
```
