# Pixel Aspect Ratio - Don't Assume Pixels Are Square, Or 1-To-1

To begin with, pixel aspect ratio together with a non-uniform downsample factor mean this coordinate system may not be square at all. Horizontally, the finished render can end up stretched or compressed compared with the pixels your effect actually touches. The result: circles turn into ellipses and squares into rectangles. How far apart two points sit depends on the angle between them in such a system, and anything you rotate there comes out skewed once rendered.

Beyond that, a square coordinate system still won't necessarily match the final output's dimensions. So any slider expressing a size in pixels runs into trouble when the frame renders at reduced resolution; downsample factor also shifts how wide your anti-aliasing filters end up.

There are cases where none of this bites. If an effect tints each pixel purely as a linear function of its x and y position, it can ignore pixel aspect ratio and downsample factor entirely. Remaining in the input coordinate space is one route, provided you handle pixel aspect ratio and downsample factor somewhere else.

Picture building a particle system that flings textured sprites out from a source point set by an effect control. Tracking those particle positions in pixel coordinates works well enough — at least while the particles never orbit a point — but the moment you render the particle textures themselves, you must scale them by pixel aspect ratio and downsample factor.

When an effect's pipeline already includes coordinate-transformation gear, a frequently tidier route opens up. A good many algorithms call for some kind of coordinate transformation anyway — matrices used to assemble a transformation, for instance. Yet plenty of other algorithms adapt just as readily, such as a texture-generation effect deriving every pixel's value strictly from where it sits. There, the code has to take each raw pixel position and factor in pixel aspect ratio along with downsample factor.
