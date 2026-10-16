# MarkerValue.setParameters()

app.project.item(index).layer(index).property("Marker").keyValue(index).setParameters(keyValuePairs)

### Description

Attaches a group of key-value pairs as Flash Video cue-point parameters to the cue point tied to this marker value. While the interface caps you at three parameters per cue point, a cue point itself has no such limit — reach for this method whenever you need more than three.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyValuePairs | Key-value pair object | Object containing the key-value pairs as attributes and values. The object's toString() method is called to assign the string value of each attribute to the named key. |

### Returns

Nothing.

### Example

```javascript
var mv = new MarkerValue("MyMarker");
var parms = {};
parms.timeToBlink = 1;
parms.assignMe = "A string"
mv.setParameters(parms);
myLayer.property("Marker").setValueAtTime(2, mv);
```
