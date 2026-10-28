# PropertyBase.remove()

app.project.item(index).layer(index).propertySpec.remove()

### Description

Detaches this property from its parent group. Should this be a property group itself, its child properties go with it. The call is only legal for children of indexed groups; otherwise — or when the index value is invalid — it raises an exception and shows an error. (Indexed groups carry the type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.) You may also invoke it on a text animation property, meaning any animator that has been attached to a text layer.

### Parameters

None.

### Returns

Nothing.
