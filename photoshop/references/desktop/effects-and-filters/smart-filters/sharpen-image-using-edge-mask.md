# Sharpen image using edge mask

Use Adobe Photoshop with a High Pass-created edge mask to sharpen an image in a controlled, selective way.

Edge masks work well when sharpening should target object outlines while smooth areas, such as skies or skin, stay free of artifacts.

Duplicate the image layer with Ctrl + J (Windows) or Command + J (macOS).

Select the duplicate layer, then choose Filter > Other > High Pass.

In the High Pass dialog, use a radius between 1-3 pixels, then select OK.

Set the duplicated layer's blend mode to Overlay in the Layers panel to build the edge mask.

From the Layers panel, select the Layer masks icon.

With the layer mask active, choose Filter > Blur > Gaussian Blur; use a small radius of 0.5-1.0 pixels so edge transitions become softer.

On the layer mask, paint with a black brush over areas where sharpening should not appear.

Adjust layer Opacity to set the overall sharpening intensity.
