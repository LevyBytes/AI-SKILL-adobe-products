# PropertyBase.moveTo()

app.project.item(index).layer(index).propertySpec.moveTo(newIndex)

### Description

Shifts this property to a different slot within its parent property group. Only children of indexed groups support this; if the property is not one, or the index you pass is invalid, the method raises an exception and shows an error. (Indexed groups carry the type PropertyType.`INDEXED_GROUP`; see PropertyBase.propertyType.)

Warning

Calling this voids any existing references you hold to the other children of that same indexed group. Say a layer carries three effects, each one stored in its own variable — relocate any single effect and every one of those variable references goes stale. Expect to reassign them.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newIndex | Integer | The new index position at which to place this property in its group. |

### Returns

Nothing.
