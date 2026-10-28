# Mask properties

Freeze Area Mask

Sets which region of the image has its distortion governed by mask opacity and feather settings. Anything outside the mask gets distorted; anything inside follows the Mask Opacity and Mask Feather settings.

Mask Opacity

Governs how the distortion reaches the region inside the mask. At a Mask Opacity of 100%, the distortion leaves the masked region alone; at 50%, that region is affected. When you push Mask Opacity to 100%, feather the mask too so its edges don't turn jagged.

Mask Feather

How wide the feather runs when blending pixels across the masked and nonmasked regions.
