# PropertyBase.propertyType

app.project.item(index).layer(index).propertySpec.propertyType

### Description

Which kind of property this is.

### Type

A PropertyType enumerated value; read/write. One of:

- PropertyType.PROPERTY: A single property such as position or zoom.
- PropertyType.`INDEXED_GROUP`: A property group whose members have an editable name and an index. Effects and masks are indexed groups. For example, the masks property of a layer refers to a variable number of individual masks by index number.
- PropertyType.`NAMED_GROUP`: A property group in which the member names are not editable. Layers are named groups.
