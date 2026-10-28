# app.setWorkspace()

app.setWorkspace(workspace)

### Description

Activates the specified workspace. Call app.getWorkspaces() to retrieve every workspace that is available.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| workspace | String | Workspace name to activate. |

### Returns

Boolean.

### Example

Activate "Editing" workspace.

```javascript
var workspace = 'Editing';
if (app.setWorkspace(workspace)) {
    alert('Workspace changed to "' + workspace + '"');
} else {
    alert('Could not set "' + workspace + '" workspace');
}
```
