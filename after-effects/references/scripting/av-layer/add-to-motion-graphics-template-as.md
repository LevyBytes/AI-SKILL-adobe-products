# AVLayer.addToMotionGraphicsTemplateAs()

app.project.item(index).layer(index).addToMotionGraphicsTemplateAs(comp, name)

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Places the layer onto the Essential Graphics Panel belonging to the composition you specify.

Comes back true when the layer goes in successfully, and false otherwise.

A failure to add the layer happens for one of two reasons: the layer is not a type whose media can be swapped (these are called Media Replacement Layers), or it has already been put on that composition's EGP. After Effects pops up a warning dialog whenever the layer cannot join the EGP.

To check beforehand whether a layer is eligible for a Motion Graphics template, call AVLayer.canAddToMotionGraphicsTemplate().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| comp | CompItem object | The composition where you wish to add the property to the EGP. |
| name | String | The new name. |

### Returns

Boolean.
