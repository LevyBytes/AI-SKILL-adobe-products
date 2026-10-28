# Vegas effect and image contours

Running lights and other path-based pulse animations circle an object courtesy of the Vegas effect. Outline nearly anything, ring it with lights or longer pulses, then animate it so the lights appear to chase around the object.

This effect works with 8-bpc color.

Stroke

What the stroke draws from: Image Contours or Mask/Path.

Image Contours

Pick Image Contours from the Stroke menu and you then name the layer that supplies the image contours plus how the input layer is read.

Input Layer

The layer that supplies the image contours. High-contrast, grayscale layers, and alpha channels are easy to work with and perform well.

Invert Input

Flips the input layer before the stroke is built.

If Layer Sizes Differ

Sets how the layers are reconciled when the input layer's size differs from that of the layer Vegas is applied to. Center drops the input layer into the composition at its native size, centered. Stretch To Fit scales the input layer up to the layer Vegas is applied to.

Channel

Which color attribute of the input layer establishes the contours.

Threshold

The percentage value below or above which everything maps to either white or black. Where the edges that the effect strokes end up is largely decided by this property.

Pre-Blur

Smooths the input layer before the threshold is sampled. Drop this option to 0 when you have a high-contrast image and want the stroke to track the edges very tightly.

Tolerance

Sets how closely the stroke hugs the input layer. Sharp corners result from a high value, whereas low values can leave the stroking vulnerable to noise.

Render

Sets whether the effect hits one selected contour or every contour in the layer.

Selected Contour

Names the contour to use once Selected Contour is picked from the Render menu. Contours run from upper-left to lower-right in their numbering; the one with the highest point is number 1, the next highest is number 2, and so on.

Shorter Contours Have

Sets whether shorter contours get fewer segments. The effect splits each contour into the same segment count by default. Apply it to the letter R, for instance, and the outside contour may look fine at 32 segments while the inside contour comes out nearly solid. Select Fewer Segments to fix that.

Related references:

- [Vegas path segments and stroke appearance](vegas-segments-and-stroke.md)
