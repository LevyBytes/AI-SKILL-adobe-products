# Property.canAddToMotionGraphicsTemplate()

app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)

Note

This functionality was added in After Effects 15.0 (CC 2018)

### Description

Reports whether the property is eligible to go into the Essential Graphics panel for the composition you name.

When the property can be added the result is true; otherwise it is false.

A property that cannot be added is either of an unsupported type or already present in the EGP for that composition. In that situation After Effects pops a warning dialog noting the property could not be added to the EGP.

Supported property types are:

- Checkbox
- Color
- Numerical Slider (i.e., a single-value numerical property, such as Transform > Opacity or the Slider Control expression control effect)
- Source Text

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem | The composition that you wish to add the property to. |

### Returns

Boolean.
