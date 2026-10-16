# Smear effect

The Smear effect lets you mark off a region inside an image and then shift that region somewhere new, dragging and stretching the image around it along the way. Lean on masks to mark off the region you want to distort.

This effect works with 8-bpc and 16-bpc color.

Working with Smear starts by building or importing two masks: the source mask and the boundary mask. You can draw the masks on the layer right in After Effects, or bring in masks made in Adobe Illustrator. To reuse an Illustrator mask, copy it and paste it onto a layer in After Effects. Smear only handles closed masks; if a mask is an open trace, After Effects seals it shut when you select it. Both masks need to live on the same layer as the footage where the Smear effect is applied, though copying masks from another layer is fine.

As you shift the source mask across the image, Smear stretches whatever part of the image lies inside the boundary mask so it trails the edges of the source mask. The boundary mask works to shield the image beyond it from getting stretched. The Composition panel shows both the source mask's starting position (set in the Layer panel) and its offset position: a light red outline flags the first position of the source mask, while a dark outline flags the new one.

The source mask's position, size, and rotation can all be animated as it travels to its offset position, and you can likewise animate the source mask's original position over in the Layer panel.

Certain settings can stretch processing out to several minutes. The closer the source mask creeps toward the boundary mask, the longer computation takes. Selecting a control halts processing.

Source Mask

Names a mask to serve as the source mask. By default, the second mask you draw or import for the layer is the one After Effects picks as the source mask.

Note

To produce a distortion, name both a boundary mask and a source mask.

Boundary Mask

Names a mask to serve as the boundary mask. By default, the first mask you draw or import is the one After Effects picks as the boundary mask.

Mask Offset

Names a destination position for the source mask. Expressed through x and y coordinates that show up to the right of the Offset button, the offset is a position you set by selecting the Offset button and then clicking the image at the spot you want. To pin the offset down numerically, type a fresh value per axis. When the precision of Mask Offset isn't needed, you can just drag the source mask offset around the Composition panel.

Note

Stray undulations can show up when the source mask sits close to the boundary mask while animating.

Mask Rotation

Spins the source mask about its center point, anywhere from 0° to 360°.

Mask Scale

Sizes the source mask (at its offset position) up or down, relative to its starting position.

Percent

Sets what share of the smear gets carried out. With Percent at 50%, for instance, Smear completes half the smear you've called for by moving, scaling, and rotating the source mask. This value leaves the source mask's original and offset positions untouched; it touches only the share of the effect that runs.

Elasticity

Sets how tightly the image tracks the shape the curve lays out. Stiff distorts the least, whereas Super Fluid distorts the most. As a rule, go with the stiffest setting that still avoids polygonal images.

Interpolation Method

Sets a method for the interpolation Smear runs between keyframes. Linear needs two or more keyframes and runs a straight-line interpolation across them. Discrete yields animations where the distortions shift at keyframes. Smooth needs three or more keyframes and approximates the distortion with cubic curves, yielding distortions that move gracefully. Should you need extra precision in the between-keyframe animation, add more keyframes. A distortion standing for a 90-degree rotation across two keyframes, for example, shows up as a fold in the image; to smooth that distortion out, drop in a keyframe every 10°.
