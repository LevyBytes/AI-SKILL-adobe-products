# suppressResizeGripper

23.1

_Promise_`<void>`

This function can hide the "resize gripper", the small square in a panel's botton-right corner.
The square appears above the panel's own contents, including scrollbars.
Although many panels have historically reserved bottom space for that square,
this option hides the square.

```javascript
const { core } = require("photoshop");
async function hidePanelResizeGripper(panelId) {
    return core.suppressResizeGripper({ type: "panel", target: panelId, value: true });
}
module.exports = { hidePanelResizeGripper };
```

Use the panel entrypoint ID from the plugin manifest. Requires Photoshop 23.1 or later.

Above, `target` comes from the panel id assigned in the plugin manifest's `entrypoints` entry.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _any_ | Object containing type, target, and value. |
