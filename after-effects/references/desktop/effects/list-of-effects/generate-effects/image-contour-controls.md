# Image Contour controls

Choosing Image Contours for Wave Type lets you build the wave shape from an image's contours instead.

Source Layer

Which layer feeds the image-contour creation. Pick an animated layer to throw off moving shapes. Good sources include a crisp outline, a high-contrast grayscale layer, or an alpha channel. Edges are detected by the Radio Waves effect, which turns the sources into outlines.

Source Center

Sets where the shape's center sits relative to the source layer. Isolate a shape sitting in the frame's left half, for instance, and by default it radiates leftward — but the source center can be repositioned anywhere on the layer.

Value Channel

Which color attributes of the source layer establish the image contours.

Invert Input

Flips whichever value channel option you picked.

Value Threshold

Sets the threshold applied to the chosen value channel. It fixes the percentage value below or above which everything maps to either white or black. The wave's shape can shift dramatically depending on this control.

Pre-Blur

Smooths the value channel before the value threshold gets sampled. Working with a high-contrast image such as white on black, and wanting the wave to hug the edges tightly, drop this option to 0.

Tolerance

Sets how closely the wave hugs the layer. Sharp corners come from a high setting; a low value leaves the wave shape more vulnerable to noise.

Contour

Picks which shape in the source layer becomes the emitted wave. Contour numbers the shapes by their position in the frame, going top to bottom and left to right. Number 1 is the shape in the upper-left corner.
