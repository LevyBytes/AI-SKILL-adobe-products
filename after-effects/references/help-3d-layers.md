# 3D Layers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Turn a layer into a 3D layer and the layer stays flat itself, yet it picks up extra properties — Position (z), Anchor Point (z), Scale (z), Orientation, X Rotation, Y Rotation, Z Rotation, Geometry Options, and Material Options.

- How a layer responds to light and shadows is set through its Material Options properties. Shadows, lights, and cameras only register with 3D layers.
- Geometry Options properties let you bevel the edge of a shape or text, adding depth so the object reads as more three-dimensional.

Here a 2D layer has been turned into a 3D layer with some of its added 3D properties adjusted.

Within a text layer, single characters can be made 3D sublayers, each carrying its own 3D properties. Switch on Enable Per-character 3D for a text layer (Animate > Enable Per-character 3D) and it acts just like a precomposition made of one 3D layer per character. Every camera and light layer comes with 3D properties.

Layers start out at a depth — z-axis position — of 0. After Effects places the coordinate system's origin at the upper-left corner: x (width) grows from left to right, y (height) grows from top to bottom, and z (depth) grows from near to far. A number of video and 3D applications run a coordinate system spun 180 degrees about the x axis; there, y grows from bottom to top and z grows from far to near.

Picking an axis mode lets you transform a 3D layer against the composition's coordinate space, the layer's own coordinate space, or a custom one.

You can drop effects and masks onto 3D layers, mix 3D layers with 2D ones, and build and animate camera and light layers to view or light 3D layers from whatever angle you choose. At final-output render time, 3D layers render through the active camera's perspective.

Every effect is 2D, even the ones that fake 3D distortions. Look at a layer carrying the Bulge effect from the side, for example, and no protrusion shows.

Like every mask, a mask on a 3D layer has its coordinates in the layer's 2D coordinate space.

## 3D layers — Convert 3D layers

Convert a layer to 3D and a depth (z) value joins its Position, Anchor Point, and Scale properties, while the layer takes on Orientation, Y Rotation, X Rotation, Geometry Options, and Material Options properties. What was the lone Rotation property becomes Z Rotation. Convert that 3D layer back to 2D and these properties drop away — values, keyframes, and expressions and all — with no way to bring them back by reconverting to 3D. The Anchor Point, Position, and Scale properties stick around together with their keyframes and expressions, though their z values are hidden and disregarded.

## 3D layers — Convert a layer to a 3D layer

For the layer in the Timeline panel, click the 3D Layer switch, or select the layer and choose Layer > 3D Layer.

1. Flip a layer's 3D Layer switch to turn it into a 3D object that can be manipulated in three-dimensional space.

## 3D layers — Convert a text layer to a 3D layer with per-character 3D properties enabled

Choose Animation > Animate Text > Enable Per-Character 3D, or for the layer in the Timeline panel pick Enable Per-Character 3D from the Animate menu.

1. Turn on Enable Per-character 3D to break each character of a text layer into its own 3D object.

## 3D layers — Convert a 3D layer to a 2D layer

For the layer in the Timeline panel, clear the 3D Layer switch, or select the layer and the Layer > 3D Layer.

## 3D layers — Show or hide 3D axes and layer controls

Color marks the 3D axes as arrows: x is red, y is green, and z is blue.

- Showing or hiding the 3D axes, the camera and light wireframe icons, the layer handles, and the point of interest is done by choosing View > Show Layer Controls.

Turn on the Show Layer Controls option to bring up the on-screen controls for a selected layer in the Composition panel.

The Show Layer Controls option brings the visual controls for a selected layer into view in the Composition panel. Note

Should the axis you mean to work with be hard to make out, try switching the Select view layout menu at the Composition panel's lower-right corner to a different setting.

- Showing or hiding a fixed set of 3D reference axes is done by clicking the Grid And Guides Options button at the foot of the Composition panel and choosing 3D Reference Axes.

Switch on 3D Reference Axes to draw the X, Y, and Z axes as colored lines, giving you a reference for how layers are oriented and placed in 3D space.

Turn on 3D Reference Axes and the X, Y, and Z axes appear as colored lines, a reference for the orientation and positioning of layers in 3D space.

## 3D layers — Move a 3D layer

1. Pick the 3D layer you intend to reposition.

- Within the Composition panel, grab the Selection tool and drag the arrowhead on the 3D axis layer control that belongs to the axis you want to shift the layer along. Holding Shift while you drag speeds the motion up.

- Over in the Timeline panel, edit the Position property values directly.

Pressing P on the keyboard reveals the layer's Position property.

- When you want selected layers repositioned so their anchor points land at the middle of the current view, choose Layer > Transform > Center In View, or press Ctrl+Up Arrow (Windows) or Command+Up Arrow (macOS).

## 3D layers — Rotate or orient a 3D layer

A 3D layer can be turned by editing either its Orientation or its Rotation values; whichever you pick, the layer pivots about its anchor point. Where the two properties part ways is in how the layer behaves once you animate them.

Animate a 3D layer's Orientation property and the layer swings by the shortest route it can toward the orientation you asked for. Animate any of the X, Y, or Z Rotation properties instead and the layer spins about each separate axis to follow the individual values. Put another way, Orientation values name an angular endpoint while Rotation values trace an angular path. Reach for Rotation properties whenever you need a layer to spin round more than once.

For motion that reads as natural and smooth, the Orientation property is usually the stronger choice; the Rotation properties, by contrast, hand you tighter control.

## 3D layers — Rotate or orient a 3D layer in the Composition panel

1. Pick the 3D layer you mean to turn.
   Grab the Rotation tool, then set the Set menu to either Orientation or Rotation depending on which properties you want the tool to drive.

2. Decide between Orientation and Rotation to control how an object, layer, or camera is placed or spun inside a composition.
   Within the Composition panel, take one of these actions:

- Drag the arrowhead on the 3D axis layer control belonging to the axis you want to rotate the layer around.

- Drag one of the layer handles. A corner handle spins the layer about the z axis; a left or right center handle spins it about the y axis; a top or bottom handle spins it about the x axis.

- Drag the layer itself.

Hold Shift as you drag to lock your moves to 15-degree steps.

## 3D layers — Rotate or orient a 3D layer in the Timeline panel

1. Pick the 3D layer you mean to turn.
   Within the Timeline panel, edit the Rotation or Orientation property values.

Tap the R shortcut to surface the Rotation and Orientation properties.

## 3D layers — Axis modes

Which set of axes a 3D layer transforms along is governed by axis modes. Pick one from the Tools panel.

Switching among the Axis modes lets you handle and inspect a layer's 3D axes against different frames of reference.

Switching among the Axis modes lets you handle and inspect a layer's 3D axes against different frames of reference.

Local Axis mode

Lines the axes up with the surface of a 3D layer.

World Axis mode

Lines the axes up with the composition's absolute coordinates. However you rotate a layer, these axes keep standing for 3D space as measured against the 3D world.

View Axis mode

Lines the axes up with whichever view you've chosen. Say a layer has been rotated and you've switched to a custom view: from then on, any transformation you apply to that layer in View Axis mode runs along the axes that match the direction you're viewing it from.

The axis modes only diverge from one another once a composition contains a 3D camera.

Note

- Because the Camera tools always work along the view's own local axes, the axis modes have no bearing on what the Camera tools do.
- Whichever 3D axis mode you used last is what the Tools panel restores after you quit and relaunch After Effects.

## 3D layers — 3D layer interactions, render order, and collapsed transformations

When certain layer types sit at particular spots in the layer stacking order within the Timeline panel, they stop groups of 3D layers from being evaluated as one unit for intersections and shadows.

If a 3D layer casts a shadow, that shadow reaches neither a 2D layer nor anything sitting past the 2D layer in the stacking order. By the same token, a 3D layer won't intersect a 2D layer or anything beyond that 2D layer in the stacking order. Lights, however, carry no such limitation.

An example shows how slipping a 2D layer in between keeps three 3D layers from intersecting.

Beyond 2D layers, several other layer types likewise block the 3D layers flanking them from intersecting or casting shadows on each other:

An adjustment layer

A 3D layer that has a layer style applied

A 3D precomposition layer carrying an effect, a closed mask (with a mask mode other than None), or a track matte

A 3D precomposition layer that lacks collapsed transformations

Turn on Collapse Transformations for a precomposition and it stops getting in the way of how the 3D layers on either side interact — provided every layer inside that precomposition is itself a 3D layer. Collapsing transformations brings out the 3D properties of the layers making up the precomposition. In effect, it lets each of those 3D layers composite separately into the main composition, rather than baking the precomposition into one 2D composite and dropping that into the main composition. The cost is that you lose the option to set certain layer settings on the precomposition as a single unit — things like blending mode, quality, and motion blur.

When a 3D layer is continuously rasterized (text layers included), effects you apply to that layer leave its cast shadow untouched. Should you want the shadow to reflect the effect, precompose the layer together with its effect.

Note

To keep the shadow sitting where you expect on a 3D layer that has a track matte, precompose the 3D layer and the track matte layer as a pair (leaving transformations uncollapsed), then apply the shadow to that precomposition.

Effects on continuously rasterized vector layers that carry 3D properties render in 2D first and then get projected onto the 3D layer. That projection step is skipped for compositions whose transformations are collapsed.

### More like this

- Per-character 3D text properties
- Importing and using 3D files from other applications
- 3D layers (keyboard shortcuts)
- Precompose layers
