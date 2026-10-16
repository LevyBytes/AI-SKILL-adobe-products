# zoom

Return type: Property.

Hands back a camera's zoom values in pixels.

Below is an expression for a layer's Scale property that holds the layer's apparent size in frame steady while you shift its z position (depth) or the camera's Zoom value:

cam = thisComp.activeCamera; distance = length(sub(position, cam.position)); scale \* distance / cam.zoom;
