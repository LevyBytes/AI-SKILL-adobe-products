# ProjectItem.getColorSpace()

app.project.rootItem.children[index].getColorSpace()

### Description

Reads colorspace properties for the project item.

### Parameters

None.

### Returns

Returns an item colorspace-properties object containing:

- name
- transferCharacteristic
- primaries
- matrixEquation

### Example

This example writes those details to the Events panel.

```javascript
var colorSpace = app.project.rootItem.children[0].getColorSpace()
app.setSDKEventMessage("Color Space " + " = " + colorSpace.name, 'info');
app.setSDKEventMessage("Transfer Characteristic " + " = " + colorSpace.transferCharacteristic, 'info');
app.setSDKEventMessage("Color Primaries " + " = " + colorSpace.primaries, 'info');
app.setSDKEventMessage("Matrix Equation " + " = " + colorSpace.matrixEquation, 'info');
```
