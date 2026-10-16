# Property.addToMotionGraphicsTemplate()

app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Places the property into the Essential Graphics panel for the composition you name.

A successful add returns true; otherwise the result is false.

A failed add happens either because the property's type isn't among the supported ones or because that property is already in the EGP for the composition. In that situation After Effects pops a warning dialog noting the property could not be added to the EGP.

Before adding, you can call Property.canAddToMotionGraphicsTemplate() to confirm the property is eligible for a Motion Graphics template.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem | The composition that you wish to add the property to. |

### Returns

Boolean.
