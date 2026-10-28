# Add and match lens distortion with Optics Compensation

Matching FOV values requires that the layers share identical dimensions. That said, selecting Resize lets you run Optics Compensation a second time and undo the distortion with the same value (reversed), so another effect can be slotted in between the paired Optics Compensation instances.

Should you resize a layer through Optics Compensation and afterward precompose it inside a larger composition, undoing the distortion at that same value won't work until the precomposed layer has been enlarged to fit the expanded layer.

Pick the layer carrying the distortion, then choose Effect > Distort > Optics Compensation.

Within the Effect Controls panel, tweak the FOV until some warped edge or line reads as straight, and make a note of that FOV value.

Choose the computer graphic layer that needs distorting, and apply Optics Compensation to it with the FOV value you recorded in step 2.

Select Reverse Lens Distortion.

Take Optics Compensation off the footage layer.
