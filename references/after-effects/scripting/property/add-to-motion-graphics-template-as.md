# Property.addToMotionGraphicsTemplateAs()

app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplateAs(comp, name)

Note

This functionality was added in After Effects 16.1 (CC 2019)

### Description

Like the plain add, this puts the property into the Essential Graphics panel for the named composition, but it additionally lets you hand the EGP property a name of your choosing.

A successful add returns true; otherwise the result is false.

A failed add happens either because the property's type isn't among the supported ones or because that property is already in the EGP for the composition. In that situation After Effects pops a warning dialog noting the property could not be added to the EGP.

Before adding, you can call Property.canAddToMotionGraphicsTemplate() to confirm the property is eligible for a Motion Graphics template.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem | The composition that you wish to add the property to. |
| name | String | The new name. |

### Returns

Boolean.
