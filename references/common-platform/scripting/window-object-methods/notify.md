# notify()

windowObj.notify([event])

### Description

Sends a notification message that imitates the specified user-interaction event.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| event | String | Optional. Name of the window event handler to invoke. One of: - onClose - onMove - onMoving - onResize - onResizing - onShow |

### Returns

Nothing

### Example

Example notification for dialog movement:

```javascript
myDlg.notify("onMove")
```
