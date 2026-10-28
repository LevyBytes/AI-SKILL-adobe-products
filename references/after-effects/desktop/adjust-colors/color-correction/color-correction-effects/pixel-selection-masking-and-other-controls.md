# Pixel Selection, Masking, and other controls

Which pixels the effect touches comes down to these controls. For the Pixel Selection Matching controls to do anything, Matching Mode has to be set to something other than Off.

Matching Color

The midpoint of the range of pixel colors the Colorama effect reworks. To grab a particular color from the image with the eyedropper, momentarily disable the Colorama effect via its Effect switch over in the Effect Controls panel.

Matching Tolerance

How far a color may sit from Matching Color and still come under the Colorama effect. Set Matching Tolerance to 0 and the Colorama effect touches only the exact color chosen for Matching Color. Set it to 1 and every color matches, which effectively switches Matching Mode off.

Matching Softness

How seamlessly the matched pixels merge into the rest of the image. Say you have an image of a person in a red shirt and blue pants and you want the pants changed from blue to red: nudge Matching Softness gently to push the matching out from the blue of the pants into the shadows of the pant folds. Push it too far and the matching bleeds into the blue of the sky; push it further still and it reaches the red shirt.

Matching Mode

Which color attributes get compared to decide a match. As a rule, RGB suits high-contrast graphics while Chroma fits photographic imagery.

Mask Layer

The layer pressed into service as a matte. Masking Mode sets which attribute of the Mask Layer defines that matte. The matte settles which pixels of the layer carrying the effect get affected.

Composite Over Layer

Shows the modified pixels composited over the original layer. Turn this off to show only the modified pixels.

Blend With Original

How transparent the effect is. The effect's output gets blended with the original image, the effect's result sitting on top. Raise this value and the effect grips the layer less. Set it to 100%, for instance, and the effect leaves no visible mark on the layer; set it to 0% and the original image stays hidden.
