# redrawDocument

24.1

**async** : _Promise_&lt;number&gt;

Requests an immediate redraw/update for a Photoshop document.
Use this method when a document should refresh immediately
while the user manipulates a UI element such as a slider.
This can make the interaction feel more responsive.
Document updates can take time, and they often occur less frequently
than incoming UI events.
Plugins may therefore put a throttle between UI events and
redrawDocument calls.
One way to implement the throttle is with a timer, or by skipping redrawDocument
briefly after a previous request finishes.
redrawDocument returns how long Photoshop took to update the target document,
in seconds. Use that value to refine the throttle.
Only plugins using apiVersion 2 or higher can call redrawDocument.

```javascript
await core.redrawDocument({ documentID: 123 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.documentID` | _number_ |
