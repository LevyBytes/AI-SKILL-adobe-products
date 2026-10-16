# PropertyBase.duplicate()

app.project.item(index).layer(index).propertySpec.duplicate()

### Description

When this property belongs to an indexed group as a child, the method builds a fresh PropertyBase object carrying the same attribute values and hands it back. Call it on a property that is not such a child and it raises an exception and surfaces an error. Indexed groups carry the type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.

### Parameters

None.

### Returns

PropertyBase object.
