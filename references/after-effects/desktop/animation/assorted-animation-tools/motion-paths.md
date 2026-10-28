# Motion paths

Spatial properties—Position, Anchor Point, and the control-point properties of effects among them—display their animation as a motion path once you set keyframes. That path renders as a trail of dots, with every dot fixing where the layer sat on a given frame; wherever a keyframe lives, the path draws a box instead.

Think of a motion path as a second way to look at the same spatial keyframes—a spatial, on-canvas counterpart to editing those properties over in the Timeline panel. Reshaping one is a matter of dragging an existing keyframe, dropping in a fresh keyframe, or swapping the spatial interpolation that governs how the curve bends through each keyframe.

How tightly the dots bunch up between two boxes tells you how fast the layer or effect control point is traveling. Closely packed dots mean slower motion; dots spread wide apart mean the element is covering ground quickly.

Note

To bring up a keyframe's context menu, right-click it on Windows or Command-click it on macOS.

Editing the keyframes of a spatial property with the Pen tool or Selection tool inside the Composition or Layer panel works the same way as reshaping a Bezier path for a mask or for a shape on a shape layer.

Fewer keyframes make a motion path simpler and quicker to adjust. When a path carries keyframes you don't need, the Smoother panel can strip them out.
