# AVLayer.canAddToMotionGraphicsTemplate()

app.project.item(index).layer(index).canAddToMotionGraphicsTemplate(comp)

Note

This functionality was added in After Effects 18.0 (2021)

### Description

Checks whether the layer is eligible to go on the Essential Graphics Panel for the composition you specify.

Yields true when the layer is eligible, and false otherwise.

A layer is ineligible for one of two reasons: it is not a type whose media can be swapped (known as Media Replacement Layers), or it is already present on that composition's EGP.

Media Replacement layers are identified as AVLayers whose AVLayer.source points at a FootageItem object (of certain source types) or at a CompItem object.

For the AVLayer to count as a Media Replacement layer, it has to satisfy the conditions below:
