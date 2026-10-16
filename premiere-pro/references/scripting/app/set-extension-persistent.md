# app.setExtensionPersistent()

app.setExtensionPersistent(extensionID, persistent)

### Description

Controls whether the extension identified by extensionID remains persistent during this session.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| extensionID | String | Extension to modify. |
| persistent | Integer | Pass 1 to keep the extension in memory, or 0 to permit unloading. |

### Returns

True indicates success.

### Example

```javascript
var extensionID = 'com.adobe.PProPanel';
// 0 - while testing (to enable rapid reload);
// 1 - for "Never unload me, even when not visible."
var persistent = 0;

app.setExtensionPersistent(extensionID, persistent);
```
