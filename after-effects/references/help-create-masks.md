# Create Masks

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 8, 2026

### In Adobe After Effects, build masks and fine-tune them to mark off visible regions, single out elements, and reach exact compositing outcomes.

The Rectangle and Pen tool let you build both shapes and masks in After Effects. As you make a mask or a shape layer, hold these points in mind:

- Whenever a layer sits selected in the Timeline panel, what you're making is a mask.
- Whenever no layer sits selected in the Timeline panel, what you're making is a shape layer.

Note

Q is the shortcut for the Shape tool, and G is the one for the Pen tool.

Any of the following approaches lets you build one or more masks for each layer within a composition:

Draw a path with the Shape or Pen tool. Drawing a mask path works much like drawing a shape path.

Learn more about creating a shape or mask by dragging with shape tools and creating a Bezier shape or mask using the Pen tool.

State the mask path's dimensions as numbers inside the Mask Shape dialog box.

Learn how to create a rectangular or elliptical mask numerically.

Turn a shape path into a mask path by copying the shape's path over to the Mask Path property.

Turn a motion path into a mask path.

Learn more about creating a mask or shape from a motion path.

Trace color or alpha channel values to build a mask with the Auto-trace command.

Learn more about creating a mask from a channel with Auto-trace.

Paste in a path you copied from another layer or out of Adobe Illustrator or Photoshop.

Learn more about copying a path from Illustrator or Photoshop.

Turn a text layer into one or more editable masks on a solid-color layer through the Create Masks From Text command.

Learn more about creating shapes or masks from text characters.

Use captured shapes to create motion graphics.

Learn more about using captured shapes to create motion graphics.

## Points to keep in mind

- As you build masks on a layer, their names show up in the Timeline panel outline following the sequence in which you created them. Rename them to stay organized and keep tabs on each one.

- Renaming a mask means selecting it and pressing Enter (Windows) or Return (macOS), or right-clicking (Windows) or control+clicking (macOS) the mask name and choosing Rename.

- When you add further masks to a single layer over in the Layer panel, confirm that the Layer panel's Target menu reads None; leave it otherwise and you'll overwrite the targeted mask rather than make a new one. Locking a mask is another way to guard it against changes.

- While you build or edit masks, check the Info panel for details like the mask name and how many vertices the mask holds.

## Create a mask that moves independently of its primary layer it is masking

Build the mask on its own white solid layer, then assign that solid as a track matte feeding the primary layer.

With parenting, set the solid as a child of the primary layer; the mask then travels along with the primary layer exactly as though it had been drawn on it directly. And since the solid is a child, you remain free to animate it on its own apart from the parent.

Motion tracking lets the solid layer — and the mask riding on it — follow objects that move within the primary layer. Learn about converting a layer into a track matte and parent and child layers.

## Create a mask by dragging with shape tools

Five tools make up the shape set: the Rectangle , Rounded Rectangle , Ellipse , Polygon , and Star tools.

Tip

Pressing Q both turns on the shape tools and steps you through them in turn.

Drop the Inner Radius and Inner Roundness properties from a star and what remains is a polygon. For that reason a single shape name, polystar, covers whatever you build from either a polygon or a star.

Drag any shape tool across a selected layer inside the Composition or Layer panel and a mask is the result.

Note

Want a mask on a shape layer? Keep a shape tool active and click the Tool Creates Mask button over in the Tools panel.

Learn how to create shapes by dragging shape tools.

## Create a rectangular or elliptical mask numerically

Either pick a layer in the Composition panel or bring a layer up in the Layer panel.

Select Layer > Mask > New Mask. The fresh mask shows up in the Composition or Layer panel, its handles sitting against the outermost edges of the frame.

Select Layer > Mask > Mask Shape.

Hit Select Reset To, pull Rectangle or Ellipse from the Shape menu, and set both the size and the position of the mask's bounding box.

4. Through the Mask Shape dialog box you can build, refine, and tune Mask properties by entering exact figures.

## Create a mask from channel values with Auto-trace

With the Auto-trace command you can turn a layer's alpha, red, green, blue, or luminance channel into one mask or several. To outline whatever channel values you target, Auto-trace lays down however many Bezier masks the job calls for. While honoring the settings you pick, it also keeps each mask down to the fewest vertices it can. A mask born from Auto-trace edits just like any other, and through expressions you can tie its path to other path kinds — shape paths on a shape layer among them.

Layers touched by Auto-trace flip automatically to Best Quality, which keeps the results accurate.

Note

Want fewer masks out of Auto-trace? Run a keying effect on the layer to single out your subject first, then apply Auto-trace.

Over in the Timeline panel, take one of these routes:

- For mask keyframes on just one frame, slide the current-time indicator onto the frame you're after.

- For mask keyframes spanning several frames, lay down a work area that covers that stretch.

Select one or more layers and choose Layer > Auto-trace.

Current Frame

Lays down mask keyframes on the present frame and nowhere else.

Work Area

Lays down mask keyframes only on the frames falling inside the work area.

With that set, pick from whichever of these options apply:

Invert: flips the input layer around before edges are searched for.

Blur: softens the source image first, before the trace is produced. Reach for it to cut down small artifacts and even out jagged edges. Switch it off when you want a tight trace of detail in a high-contrast image.

Tolerance: the pixel distance by which the traced path may stray from the channel's contours.

Threshold: gives, as a percentage, the channel value a pixel needs before it counts as part of an edge. Any pixel above the threshold turns white and opaque; anything below turns black and transparent.

Minimum Area: sets the tiniest feature in the source image that still gets traced. A value of 4, for instance, drops anything under 2 pixels wide by 2 pixels high out of the trace.

Corner Roundness: controls how rounded the mask curve runs at its vertices. Push the value higher for smoother curves.

Apply To New Layer: drops the mask onto a fresh solid matching the selected layer's size. For layers running Collapse Transformations, it switches on by itself.

Preview: turn it on to see, ahead of time, both the masks and how each of the Auto-trace command's options plays out.

## Create a mask of the size of the layer

Pick where the new mask should go:

- For a plain mask, pick a layer over in the Timeline, Layer, or Composition panel. For one on a shape layer, keep a shape tool active and click Tool Creates Mask in the Tools panel.

- To swap out a mask path instead, pick the mask in the Timeline, Layer, or Composition panel.

Over in the Tools panel, give a double-click to the Rectangle , Rounded Rectangle , Ellipse , Polygon , or Star tool.

## Create masks from text characters

Using the Create Shapes From Text command, the outline of every character is pulled out, turned into shapes, and dropped onto a brand-new shape layer. From there those shapes behave like any others you might draw. It pulls the outline from each character, builds masks out of them, and sets those masks on a fresh solid-color layer. Those masks then work for you the same as any other masks would.

- Want masks for every character in a text layer? Pick that text layer over in the Timeline or Composition panel.

- For masks on particular characters only, pick those characters in the Composition panel.

- Select Layer > Create Masks From Text.

- Alternatively, on the layer or text, Right-click (Windows) or Control+click (macOS) and pick Create Masks From Text out of the context menu.

## Points to note

- The text layer has its Video switch switched off.
- At the top of the layer stacking order is where the new solid-color layer lands.
- Compound-path characters such as i and e spawn several masks, which then join together under the Subtract mask mode.

## Create a mask from a motion path

Position, anchor point, or an effect control point's position keyframes can be copied and then pasted onto a mask path or shape path you've selected. As you build mask paths or shape paths out of motion paths, be sure the keyframes you copy come from one Position property alone — leave every other property's keyframes out of it.

Tip

Sketch out a motion path using Motion Sketch — bring its panel up via Windows > Motion Sketch — and afterward drop that path into a mask path or shape path.

Note

Copying from a mask path over to a motion path comes with a catch: a mask path states its values in the layer's own coordinate system (layer space), while a motion path states them in the composition's coordinate system (composition space). Because of that mismatch the pasted path lands offset, so you'll have to nudge it back into place afterward. Learn more about coordinate systems – composition space and layer space.

## Create a mask path from a motion path

Over in the Timeline panel, click the name of whichever property — Position or Anchor Point — holds the motion path you're copying. Doing so grabs every keyframe; to take just some of a motion path's keyframes instead, Shift+click each one you want.

Select Edit > Copy.

For the mask, pick the layer it belongs on and then run Layer > Mask > New Mask.

Back in the Timeline panel, click the name of that mask's Mask Path property — the one you'll paste the motion-path keyframes into.

Select Edit > Paste.

## More like this

- Alpha channel interpretation
- Managing and animating shape paths and masks
- Split a layer
- Set Matte effect
- Track Matte and Traveling Matte
