# ProjectItem.getInputLUTID()

app.project.rootItem.children[index].getInputLUTID()

### Description

Reads the project item's Input LUTID.

### Parameters

None.

### Returns

Returns the item's Input LUTID.

### Example

Writes Input LUTID to the Events panel.

```javascript
var lutID = app.project.rootItem.children[0].getInputLUTID()
app.setSDKEventMessage("Input LutID " + " = " + inputLutID, 'info');
```
