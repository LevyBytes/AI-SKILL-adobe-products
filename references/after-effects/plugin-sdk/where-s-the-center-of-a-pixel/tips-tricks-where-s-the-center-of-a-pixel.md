# Tips & Tricks - Where's The Center Of A Pixel?

Deeeeeep, man. With the anchor point (see User Documentation) sitting at (0,0), After Effects pivots around the top-left corner of the top-left pixel.

The catch is that the subpixel sample and area sample callbacks read (.0, .0) as landing dead center. Knock 0.5 off your x and y values before you call them to make up for that.

You won't hit this snag with the matrix functions (transform_world from `PF_WorldTransformSuite1`).

If you're shifting an image by a fractional pixel, give the output layer one extra pixel of width over its input and keep the origin parked at (0,0).
