# PropertyBase.selected

app.project.item(index).layer(index).propertySpec.selected

### Description

A true value marks this property as selected. Assign true to select it or false to clear the selection. Be aware that polling this attribute over and over across many properties can drag down system performance. When you want the complete set of selected properties for a composition or a layer, reach for CompItem.selectedProperties or Layer.selectedProperties instead.

### Type

Boolean; read/write.
