# Property.setValue()

app.project.item(index).layer(index).propertySpec.setValue(newValue)

### Description

Assigns the static value on a property that carries no keyframes. Should the property already hold keyframes, the method throws an exception and shows an error. For a keyframed property, reach instead for Property.setValueAtTime() or Property.setValueAtKey().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newValue | Value | A value appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.
