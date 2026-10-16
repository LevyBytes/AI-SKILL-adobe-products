# Create a motion path from a mask, shape, or paint path

Several kinds of paths can be turned into a motion path:

A mask path property

A shape path property living on a shape layer

A path property belonging to a paint stroke

A path you've copied out of Illustrator or Photoshop

Any of these can be pasted onto a layer's Position or Anchor Point property, or onto the Position property of an effect control point. Every pasted keyframe except the first and last is set to rove in time, which holds velocity steady along the path.

Out of the box, a pasted motion path runs 2 seconds. Stretch or shorten that by dragging its first or last keyframe within the Timeline panel.

In the Timeline panel, pick a Path property and choose Edit > Copy.

In Illustrator or Photoshop, pick a path and choose Edit > Copy.

Back in the Timeline panel, select the property you want to paste the path into.

3. Move the current-time indicator to whatever moment you want the motion path's opening keyframe to land on.
   Choose Edit > Paste.
