# Smooth motion and velocity by removing extra keyframes

The Smoother irons bumpiness or surplus keyframes out of motion paths, value curves, and velocity curves, adding keyframes or clearing away ones that aren't needed.

Note

There's also the smooth expression method, which serves the same end without deleting any keyframes. See Property attributes and methods (expression reference) for details.

Any property's curve can be smoothed, but the Smoother earns its keep most on curves that Motion Sketch spat out automatically, where stray keyframes pile up. Turn it loose on keyframes you placed by hand and the curve may shift in ways you didn't intend.

Note

You can sidestep ever needing the Smoother on a Motion Sketch path by setting the Smoothing option in the Motion Sketch panel before you sketch the motion path.

Aim the Smoother at a spatially changing property such as Position and only the spatial curve—the one the motion traces—can be smoothed. Aim it at a property that changes purely over time such as Opacity and you're limited to smoothing the value and velocity curves—the ones traced by the value or the velocity.

Beyond adding or clearing keyframes, the Smoother also lays Bezier interpolation onto every keyframe when it smooths the temporal curve.

Within the Timeline panel, select all of a property's keyframes to smooth the whole curve, or grab at least three keyframes to smooth just a stretch of it.

Choose Window > Smoother. Within the Apply To menu, the Smoother lands on Spatial Path or Temporal Graph automatically, going by which kind of property you picked keyframes for back in step 1.

Set a value for Tolerance.

Tolerance carries the same units as whatever property you're smoothing. Fresh keyframe values stray no further than that figure from the original curve. Bigger values give smoother curves, yet pushing too high may fail to hold the curve's original shape.

Click Apply and look over the outcome.

Should you need to, choose Edit > Undo Smoother to restore the keyframes, change the Tolerance value, and run the Smoother again.
