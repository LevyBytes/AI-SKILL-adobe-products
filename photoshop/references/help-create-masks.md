# Layer Masks, Blend Images

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create masks; Add layer masks; Create layer masks for all detected objects in a layer; Unlink layers and masks; Disable or enable layer masks; Apply or delete layer masks; Auto-Blend Layers command overview; Create a composite with extended depth of field.

## Create masks

### Layer masks

Add layer masks

Create layer masks for all detected objects in a layer

Unlink layers and masks

Disable or enable layer masks

Apply or delete layer masks

### Blend images

Auto-Blend Layers command overview

Create a composite with extended depth of field

## Add layer masks

Add and revise layer masks in Adobe Photoshop to hide or reveal areas of a layer with selections, transparency, or painting.

### Add a mask that shows or hides the entire layer

Clear the current selection, if one is active.

In the Layers panel, choose the layer or group.

Decide how the mask should treat the layer:

- To keep the whole layer visible, select the Layer masks icon in the Layers panel.
- To conceal the whole layer, Alt-click (Windows) or Option-click (macOS) the Layer masks icon.

### Add a layer mask that hides part of a layer

Choose the target layer or group in the Layers panel.

Select the image area.

Pick the mask behavior for the selected area:

- To make the selection visible in the mask, choose either the Layer masks icon in the Layers panel or Layer > Layer Mask > Reveal Selection.
- To hide the selection with the mask, use Alt-click (Windows) or Option-click (macOS) on the Layer masks icon, or choose Layer > Layer Mask > Hide Selection.

For layer transparency edits without an intermediate selection, choose the layer from the Layers panel, then use Layer > Layer Mask > From Transparency.

### Apply a layer mask from another layer

In the Layers panel, choose the mask thumbnail that will be copied or moved.

Choose how the mask should be placed on a different layer:

- To relocate the mask, drag its thumbnail onto the other layer.
- To duplicate the mask, place a copy on another layer with Alt-drag (Windows) or Option-drag (macOS) from the mask thumbnail.

## Create layer masks for all detected objects in a layer

With Mask All Objects in Adobe Photoshop, generate separate masks for each object detected in a layer so edits can target those objects automatically.

### Create layer masks for all detected objects

Choose one layer only in the Layers panel.

Select Layer > Mask All Objects.

### Add an adjustment or filter to a masked object

Find the object's layer mask group in the Layers panel.

Select that layer mask group.

Apply the adjustment or filter you need. For example, select Layer > New Adjustment Layer > Hue/Saturation, then move the color slider to alter the object's color.

### View the mask on the canvas

Cmd-click (macOS) or Ctrl-click (Windows) the layer mask thumbnail to show the selection as marching ants.

To view the masked object, select the Move tool, enable Show Transform Controls in the Options bar, and then select the layer mask.

To highlight the mask on the canvas, enable Smart Guides through View > Show > Smart Guides, select a layer, and hold Cmd (macOS) or Ctrl (Windows).

### Remove empty layers

After the masking edits are done, select File > Scripts > Delete All Empty Layers.

## Unlink layers and masks

Unlink a layer from its layer mask or vector mask when each item needs to move separately.

Photoshop links a layer or group to its layer mask or vector mask by default, with the link icon displayed between their thumbnails in the Layers panel. While that link is present, the Move tool moves the layer and mask together. Removing the link lets either one move on its own; restoring it links their movement again.

In the Layers panel, use the link (icon) between the layer thumbnail and the mask thumbnail to break the connection.

To relink them, select the blank area between the layer thumbnail and the mask thumbnail so the link icon appears again.

## Disable or enable layer masks

Temporarily turn a layer mask off in Adobe Photoshop, then enable it again when you need the masking effect restored.

In the Layers panel, choose the layer that contains the mask to switch on or off.

Use any of these methods to disable or enable the mask:

- In the Properties panel, select Disable/Enable Mask.
- In the Layers panel, Shift-click the layer mask thumbnail.
- Choose Layer > Layer Mask > Disable or Enable.

## Apply or delete layer masks

In Adobe Photoshop, applying a layer mask commits its hidden areas for removal, while deleting the mask leaves it unapplied.

In the Layers panel, choose the layer that has the mask you plan to apply or remove.

Pick the method for applying or deleting the mask:

- To apply a layer mask, use the Layer masks icon at the bottom of the Layers panel.

Note

For layer masks that contain discontinuous areas, applying the mask hides pixels instead of deleting them.

- To remove the layer mask without applying it, use the Delete icon at the bottom of the Layers panel.

Tip

Smart Object layers do not allow a layer mask to be permanently applied while the layer mask is being deleted.

## Auto-Blend Layers command overview

Use Adobe Photoshop Auto-Blend Layers when separate layers need smooth seams for stitched or combined imagery.

Auto-Blend Layers stitches or combines images by creating smooth transitions in the finished composite. Photoshop adds layer masks to the individual layers so overexposed, underexposed, or mismatched content areas are hidden where needed.

Note

Auto-Blend Layers works only with RGB or Grayscale images. It is unavailable for Smart Objects, Video Layers, 3D Layers, and Background Layers.

Multiple images of the same scene with different focus regions can be blended with Auto-Blend Layers to make a composite with extended depth of field.

The same command can also merge shots of the same scene captured under different lighting. Besides scene composites, it can stitch images together into a panorama.

Tip

For panoramas, Photomerge usually produces better results from multiple images.

## Create a composite with extended depth of field

Use Auto-Blend Layers in Adobe Photoshop to combine images that have different focus points.

In Adobe Bridge, select the images to combine.

Select Tools > Photoshop > Load Files into Photoshop Layers

In Photoshop's Layers panel, select the layers for blending.

Select Edit > Auto-Align Layers.

While those layers remain selected, choose Edit > Auto-Blend Layers.

In the Auto-Blend Layers dialog box, choose Stack Images for Blend Method.

Note

Use the Panorama blend method when overlapping layers should become a panorama image.

Use the Stack Images blend method for multiple images of one scene shot with different focus areas or different illuminations, so the composite keeps the best result from all of them.

Select OK.
