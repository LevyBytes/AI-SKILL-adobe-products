# PropertyBase.enabled

app.project.item(index).layer(index).enabled

app.project.item(index).layer(index).propertySpec.enabled

### Description

On a layer, this maps to the video switch state shown in the Timeline panel. For an effect or any property, it maps instead to the eyeball icon's setting, where one exists.

A true value means the layer or property is turned on; false means it is not.

### Type

Boolean; read/write if canSetEnabled is true, read-only if canSetEnabled is false.
