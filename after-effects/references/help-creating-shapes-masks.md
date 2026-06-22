# Creating Shapes Masks

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jan 21, 2026

Build and edit shapes with the Pen and Shape tools, and pull paths into After Effects directly from Illustrator and Photoshop.

A shape layer comes into being when you draw inside the Composition panel using either the Shape or Pen tool. From there, you can attach shape attributes to shapes already present or build fresh shapes inside that same layer. The default behavior: with a shape layer already selected, drawing in the Composition panel drops a new shape into that layer, positioned above whatever shapes or group of shapes you had selected. Should a different kind of layer — an image layer rather than a shape layer — be the one selected while you draw with the Shape or Pen tool, the result is a mask instead.

Note

Q is the shortcut for the Shape tool, while G activates the Pen.

Note

To get a shape layer going, hit F2 and clear the selection on every layer first, then start drawing in the Composition panel.

Most of the time a freshly drawn shape carries a fill and a stroke matching whatever the Fill and Stroke settings in the Tools panel held at the moment you drew it. Those very same Tools panel controls let you alter these attributes on a selected shape once it's already on screen. When shapes come from text, their fills and strokes mirror the fills and strokes that the source text carried.

## Convert vector art footage to shape

Starting from a vector art footage layer, you can generate a shape layer and edit it afterward. Because After Effects can bevel and extrude objects, the artwork itself becomes something you can extrude — think extruded logos.

The conversion happens through Layer > Create > Create Shapes from Vector Layer applied to a vector art footage layer. Once chosen, a corresponding shape layer lands above the footage layer, and that footage layer gets muted.

- PAR overrides set in the Interpret Footage dialog box are disregarded by the converted shapes.
- Where gradients or unsupported types appear, shapes may render as 50% gray.
- Import can run slowly and silently for files carrying thousands of paths.
- Only one selected layer at a time is processed by the menu command.
- Bringing in an Illustrator file as a composition (multiple layers) means those layers can't all be converted in a single pass. The workaround: import the file as footage instead, then run the command to turn that lone footage layer into shapes.

## Convert Illustrator layers to shape layers

Fidelity is higher now when After Effects turns Illustrator layers into shape layers, which cuts down on the manual cleanup and rework you'd otherwise face. Gradient fills, gradient strokes, and transparency all survive when Illustrator layers become native shape layers.

Pick an Illustrator file to bring in through File > Import > File, and set Import kind to Composition.

1. Bring your Illustrator file in as a ready-made composition so its layers stay intact.
   From the Project panel, drag the folder holding the Illustrator file and drop it onto the Timeline panel.

Find the layer you intend to make into a native shape layer over in the Timeline panel, right-click it, and pick Create > Create Shapes from Vector Layer.

That identical routine also handles converting layers carrying gradients into shape layers while holding onto gradient fills, gradient strokes, and transparency.

What you get is a brand-new shape layer. Its properties are available for animation exactly the way any other shape layer's would be.

When shapes have gradient fills and strokes, the Scale and Rotation properties become your tools for animating the gradient.

5. Reach for the Gradient Fill properties when you want to tweak the gradient or set it in motion.

- Freeform gradients along with blend modes coming from Illustrator don't carry over. You can, however, reapply blend modes once inside After Effects.

## Create a shape dragging with shape tools

Counted among the shape tools are the Rectangle , , Rounded Rectangle , Ellipse , Polygon , and Star tools.

Note

Pressing Q both activates the shape tools and steps through them.

Strip a star of its Inner Radius and Inner Roundness properties and what remains is a polygon. That's why a polygon and a star share one shape name: polystar.

Drag a shape tool across a selected layer in the Composition or Layer panel and you'll produce a mask. Drag that same tool over a selected shape layer in the Composition panel and you'll produce a shape. Drag a shape tool in the Composition panel while nothing is selected, and a shape appears on a freshly made shape layer.

Note

When you want a mask drawn on a shape layer, turn on the Tool Creates Mask button in the Tools panel while a shape tool is active.

Drawing a shape by dragging a shape tool in the Composition panel yields a parametric shape path. For a Bezier shape path instead, hold down Alt (Windows) or Option (macOS) before you start the drag; you're free to let go of the key before the drag finishes. Every mask path is a Bezier path. Learn more about working with shapes and shape layers.

The drag begins the instant you click in the Composition or Layer panel to start drawing and concludes once you let go of the mouse button. Holding modifier keys at various points within one continuous drag produces different outcomes:

- Hold the spacebar or the middle mouse button mid-drag to slide a shape or mask into a new position as you draw.
- To grow a circle, ellipse, square, rounded square, rectangle, or rounded rectangle outward from its center while drawing, press and hold Ctrl (Windows) or Command (macOS) once the drag is underway. Keep the key down until after the mouse button is released to finish drawing.
- Hit the Esc key to abandon the drawing operation.

Note

Whatever settings a shape tool last used stick with it for the next drawing operation. Say you draw a star and bump its point count up to 10 — the following star you draw inherits those 10 points too. Double-clicking the tool in the Tools panel resets it and produces a shape using the default settings.

## Draw rectangles, rounded rectangles, squares, and rounded squares

Grab the Rectangle tool or the Rounded Rectangle tool, then take one of these actions:

- Drag diagonally to lay down a rectangle or rounded rectangle.
- Shift-drag diagonally to lay down a square or rounded square.

(Optional) When you're drawing a rounded rectangle or rounded square, handle this before you let go of the mouse button:

- Nudge the corner roundness up or down with the Up arrow key or the Down arrow key, or by rolling the mouse wheel either way.
- Drive corner roundness to its minimum or maximum with the Left arrow key or the Right arrow key.

Release the mouse button to wrap up the drawing. For a square or rounded square, let go of the Shift key only after the mouse button is already released.

## Draw ellipses and circles

Grab the Ellipse tool , then take one of these actions:

- Drag diagonally to lay down an ellipse.
- Shift-drag diagonally to lay down a circle.

Let go of the mouse to wrap up the drawing. If it's a circle, release the Shift key after the mouse button comes up.

## Draw polygons and stars

Grab the Polygon tool or the Star tool , then take one of these actions:

- Drag to size and spin the polygon or star while you draw it.
- Shift-drag to size the polygon or star while you draw it, holding rotation at bay.

(Optional) Handle any of these before letting go of the mouse button:

- Add or drop points using the Up arrow or Down arrow key, or by rolling the mouse wheel either way.
- Raise or lower the outer roundness with the Left arrow or Right arrow key.
- Lock a star's inner radius in place while you drag the mouse to grow the outer radius by holding Ctrl (Windows) or Command (macOS).
- Raise or lower a star's inner roundness with the Page Up or Page Down key.

Let go of the mouse button to wrap up the drawing. When you've been Shift-dragging to hold rotation steady, release the Shift key after the mouse button is up.

## Create a Bezier shape or mask using the Pen tool

The Pen tool draws a Bezier mask when used on a selected layer in the Composition or Layer panel. The same Pen tool draws a shape carrying a Bezier path when used on a selected shape layer in the Composition panel. Draw with the Pen tool in the Composition panel while nothing is selected, and a shape lands on a freshly made shape layer.

Making a RotoBezier path runs much like making a manual Bezier path. The key distinction: the direction lines at vertices and the curvature along path segments get worked out for you automatically.

## Create a manual Bezier path using the Pen tool

Once the Pen tool is selected and the RotoBezier option is turned off in the Tools panel, click in the Composition panel at the spot where the first vertex should sit.

Click again at the location for the following vertex. Should you want that segment curved, drag the direction line handle until the curve takes the shape you're after.

Need to move a vertex after clicking to set it but before the mouse button has come up? Hold the spacebar and drag.

The most recent vertex you place shows up as a filled square, the sign that it's selected. Earlier vertices turn hollow and lose their selection as further vertices get added.

3. Keep repeating step 2 right up until you're set to finish the path.

- Closing the path means hovering the pointer over the first vertex; when a closed-circle icon shows up beside the pointer, click that vertex. Another route is double-clicking the final vertex or going to Layer > Mask And Shape Path > Closed.
- Leaving the path open means switching to a different tool or pressing F2 to drop the path's selection.

## Draw straight manual Bezier path segments with the Pen tool

A straight line is the most basic path the Pen tool produces — click twice with the Pen tool to set two vertices and you've got one. Keep clicking and you string together a path of straight-line segments joined at corner points.

Set the Pen tool at the spot where the straight segment should start, and click to drop a vertex. Be careful not to drag.

1. Clicking with the Pen tool produces straight segments.
   Click once more at the point where the segment should finish. (Shift-click to lock the corner-point angle between segments to a whole multiple of 15°.)

Keep on clicking to lay down vertices for more straight segments.

## Draw curved manual Bezier path segments with the Pen tool

Dragging direction lines is how you build a curved path segment. How long those direction lines are and which way they point dictate the curve's form.

Note

Hold Shift while dragging to lock the direction lines' angle to whole multiples of 15°. Hold Alt while dragging (Windows) or Option while dragging (macOS) to adjust only the outgoing direction line.

Set the Pen tool where the curve should start and keep the mouse button pressed. A vertex shows up, and the Pen tool pointer turns into an arrowhead.

Drag to set how long and in which direction both of a vertex's direction lines run, then let go of the mouse button.

A. Placing the Pen tool B. Starting to drag (mouse button pressed) C. Dragging to extend direction lines

2. Drawing the first vertex in a curved path
   Set the Pen tool where the curved segment should finish, then take one of these actions:

- For a C-shaped curve, drag opposite to the way you dragged the previous direction line, then let go of the mouse button.

A. Starting to drag B. Dragging away from previous direction line, creating a C curve C. Result after releasing mouse button

- For an S-shaped curve, drag the same way as the previous direction line, then let go of the mouse button.

A. Starting to drag B. Dragging in same direction as previous direction line, creating an S curve C. Result after releasing mouse button

3. Drawing an S curve
   Keep dragging the Pen tool from one spot to the next to build a run of smooth curves.

## Create a shape of the size of the layer

Choose where the new shape should go:

- For a shape on a shape layer that already exists, select that shape layer.

- For a shape on a fresh shape layer matching the composition's dimensions, press F2 to clear the selection on all layers.

- To swap out a shape path, select the shape path itself (not the group) in the Composition or Timeline panel.

Heading into the Tools panel, give a double-click to any of the Rectangle , , Rounded Rectangle , Ellipse , Polygon , and Star tools.

## Create shapes from text characters

Reach for Create Shapes From Text to pull the outlines out of every character, turn those outlines into shapes, and drop the shapes onto a fresh shape layer. From there those shapes behave like any others you'd work with.

Reach for Create Masks From Text to pull the outlines out of every character, turn those outlines into masks, and drop the masks onto a fresh solid-color layer. From there those masks behave like any others you'd work with.

Note

A handful of font families — Webdings is one — pack characters that are really graphical images instead of text. Converting text drawn from these families can be a handy starting point for simple graphical elements within shape layers.

- For shapes covering every character in a text layer, select that text layer in the Timeline or Composition panel.
- For shapes covering only certain characters, select those characters in the Composition panel.

- Choose Layer > Create Shapes From Text.
- On the layer or the text, Right-click (Windows) or Control-click (macOS), then pick Create Shapes From Text off the context menu.

- The Video switch belonging to the text layer gets switched off.
- A new shape layer appears at the very top of the layer stacking order. Inside it sits one shape group per selected character, along with fill and stroke properties matching the text's fills and strokes.
- Characters built from compound paths — i and e among them — produce several paths that get joined through the Merge Paths path operation.
- Effects, masks, layer styles, plus keyframes and expressions on properties within the text layer's Transform property group all copy over to the new shape layer or solid-color layer.

## Copy a path from Illustrator or Photoshop

A path lifted from Illustrator or Photoshop can be pasted into After Effects to serve as either a mask path or a shape path.

For the data you copy out of Illustrator to play nicely with After Effects, the AICB option has to be turned on within the Files & Clipboard section of the Adobe Illustrator Preferences dialog box.

A path brought over from Photoshop scales correctly only when the Photoshop document sits at 72 dpi. That 72 dpi figure is the resolution carried by documents that Photoshop creates from a Film & Video preset.

A copied Illustrator or Photoshop path can also double as an After Effects motion path. Learn more about creating a motion path from a mask, shape, or paint path.

Path drawn in Adobe Illustrator (left) and pasted into After Effects as a mask (right)

Path drawn in Adobe Illustrator (left) and pasted into After Effects as a mask (right)

Within Illustrator or Photoshop, select a whole path, then choose Edit > Copy.

- For a mask, select a layer.

- To swap out an existing mask path or shape path, select its Path property.

Pasting a path as a shape path requires that you first select the Path property of a shape already living in a shape layer. That choice is what tells After Effects where the paste should land; leave the target unspecified and After Effects takes the whole layer as the target, drawing a new mask as a result. When no Path property exists — say the shape layer has nothing in it — you can lay down a placeholder path with the Pen tool and paste the Illustrator path into that placeholder.

Choose Edit > Paste. Paste several paths into a shape path and the first one fills the shape path, while every remaining path lands in new mask paths.

## Create a shape from a motion path

Position keyframes, anchor point keyframes, or the position keyframes of an effect control point can all be copied and then pasted into a chosen mask path or shape path. As you build mask paths or shape paths out of motion paths, be sure the keyframes you copy come from one single Position property — steer clear of copying any other property's keyframes.

Note

Sketch out a motion path with Motion Sketch, then paste that path into a mask path or shape path.

The motion path of the spaceship copied to the background layer, and animated

The motion path of the spaceship copied to the background layer, and animated

Head to the Timeline panel and click the name belonging to whichever Position property or Anchor Point property holds the motion path you're after. Doing so grabs every keyframe. For just a subset of a motion path's keyframes, Shift-click the ones you want.

Choose Edit > Copy.

For a shape layer, press F2 to clear the selection on all layers, then click in the Composition panel with the Pen tool to make a single-point Bezier path.

Press SS to bring up the shape's Path property. Select the name of the Path property that the motion path's keyframes should paste into.

Choose Edit > Paste.

Tip

Learn more about creating a mask from a motion path.

## Duplicate a shape group while transforming

With a shape group selected in group selection mode, you can copy that group as you move, rotate, or scale it inside the Composition panel.

Keep Alt (Windows) or Option (macOS) held down while you drag to transform a group.

As you hold the key and bring the pointer close to the group transform box, the pointer switches to a duplication pointer.

### More like this

- About masks
- About shapes and shape layers
- Shape layers (keyboard shortcuts)
- Use captured shapes to create motion graphics

## See also

- [Create Masks](help-create-masks.md)
