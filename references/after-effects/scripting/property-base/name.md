# PropertyBase.name

app.project.item(index).layer(index).name

app.project.item(index).layer(index).propertySpec.name

### Description

On a layer, this holds the layer's name. That defaults to matching the Source name unless Layer.isNameSet comes back false.

For an effect or any property, it is the property's display name instead. (Contrast PropertyBase.matchName.) Trying to set the name throws an error unless the property is a child of an indexed group — that is, a property group of type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.

### Type

String; read/write for a child of an indexed group; otherwise read-only.
