# The Ray-traced 3D renderer

You can also call on the Ray-traced renderer as a composition renderer. It stands apart from the Advanced 3D renderer (these days called Classic 3D), which served as the default across earlier versions. Compared with the existing scanline renderer, the Ray-traced 3D renderer marks a sharp break. On top of the material options already there, it copes with reflections, transparency, index of refraction, and environment maps.

Capabilities already in place carry over: soft shadows, motion blur, depth-of-field blur, intra-character shadowing, casting an image onto a surface using any light type, and layer intersection are all supported. 2D layer backdrops sitting at the foot of the stacking order show through, and translucent objects can be seen through as well.
