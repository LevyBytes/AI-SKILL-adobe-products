# Subpixel positioning

Property values in After Effects — Position and Anchor Point among them — aren't held to whole numbers; fractional values work too. That's what makes animation smooth, since a value is interpolated across keyframes. Take a Position value running from [0,0,0] at a keyframe at time 0 to [0,0,80] at the 1-second mark in a 25-frames-per-second composition: at frame 1 the value lands at [0,0,3.2].

Every spatial value After Effects computes — Position and effect control points included — is figured to a precision of 1/65,536 of a pixel. That's known as subpixel precision.

When a layer's pixels don't land squarely on the composition's pixel boundaries, a slight blur creeps in — a lot like anti-aliasing. For a moving object that blur is no trouble, since motion brings its own motion blur, but on a static image it can soften fine detail. Likewise, an image creeping along slowly or at just the wrong pace can look as though it's wavering between crisp and blurry.

Since a layer's default anchor point sits at an object's center, odd-sized objects end up with non-integer anchor points and look soft once placed at integer values. Hold to these guidelines to cut down on blurriness and that in-and-out-of-focus look:

Build graphics with odd or even dimensions to match the composition's dimensions. If the composition runs 640x480 pixels, for instance, make graphics with even dimensions (100x100 pixels, say); if it runs 99x99 pixels, make graphics with odd dimensions (such as 75x53 pixels).

Pin the position data for graphics — hold-position and final-position keyframes included — to integers rather than fractional numbers.
