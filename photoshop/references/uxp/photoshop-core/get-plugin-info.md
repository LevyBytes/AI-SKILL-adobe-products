# getPluginInfo

23.2

**async** : _Promise_&lt;ActionDescriptor&gt;

Returns execution information for the plugin.
This method is intended for plugin development.
Do not call it from shipping code.

The returned information contains these properties:

`numberOfPendingMainThreadTasks`: Count of pending promises.

`batchPlayCount`: Count of `batchPlay` calls since plugin load.

`mainThreadTimeOutCount`: Count of JavaScript calls that have timed out.
This usually happens when commands run while Photoshop is modal without
`executeAsModal`.

`v8HeapSize`: V8 heap allocated for the plugin. This value is accurate only
when UXP Developer Tool is what loaded the plugin.

```javascript
await core.getPluginInfo();
```
