# recordAction

25.0

_Promise_`<void>`

Adds this plugin's action to the active Action recording.
Usage and manifest requirements are covered in [Action Recording](../recording-an-action-step-provided-by-a-uxp-plugin/reference-index.md).

```javascript
await action.recordAction({ name: "My Command", methodName: "actionHandler" }, { prop: value });
```

When the recorded action runs, Photoshop calls this top-level JavaScript function:

```javascript
async function actionHandler(executionContext, info) {
  let propValue = info["prop"];
}
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | RecordActionOptions |  |
| `info` | ActionDescriptor | Object with action specific information. See [Action Recording](../recording-an-action-step-provided-by-a-uxp-plugin/reference-index.md). |
