# updateUI

26.0

**async** : _Promise_`<void>`

Requests a refresh for these panels: Layers, Channels, and Paths.
This is mainly useful inside the handler function of a slider control.
Ordinarily, the panels wait to update until the handle has been released.
Note: outside a tracking context such as a slider handle, this function appears to do nothing.
To demonstrate why a refresh is needed inside a plain loop (encapsulated in `executeAsModal`),
insert a brief pause.

```javascript
// Inside slider handler function.
await app.activeDocument.createPixelLayer();
await app.updateUI();
```
