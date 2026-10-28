# ProjectItem.getEmbeddedLUTID()

app.project.rootItem.children[index].getEmbeddedLUTID()

### Description

Reads the project item's LUTID.

### Parameters

None.

### Returns

Returns the item's LUTID.

### Example

Writes LUTID to the Events panel.

```javascript
var lutID = app.project.rootItem.children[0].getEmbeddedLUTID()
app.setSDKEventMessage("LutID " + " = " + lutID, 'info');
```
