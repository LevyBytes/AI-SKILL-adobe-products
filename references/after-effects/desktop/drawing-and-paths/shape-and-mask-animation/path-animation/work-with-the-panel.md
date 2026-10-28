# Work with the panel

Open the panel through Windows > Create Nulls From Paths.jsx.

For a shape mask, go to Layer > New > Shape Layer, then add a shape mask to that layer.

Because the panel operates on Bezier shapes, you'll need to turn every parametric shape — rectangle, ellipse, star, and the like — into a Bezier shape first. To do that, twirl open the shape layer, right-click the shape path (Rectangle 1, for instance), and pick Convert To Bezier Path.

Run through step 2 again to bring in more shapes.

A path belongs to every Bezier shape and mask. Twirl the layers open in the Timeline panel to see the paths. To have nulls track path points, highlight a path in the Timeline panel and choose Nulls Follow Points in the Create Nulls from Paths panel.

One null per point on the path is what the script produces. Any nulls you don't want can be deleted.

Converting a parametric shape to a Bezier shape prompts After Effects to tweak the shape's Position property, which throws off the calculation of where the nulls go. Heading that off is simple: zero out the value of the shape's Transform property — Transform: Ellipse 1, for example — before you create any nulls.

To make the path points track nulls instead, highlight a path in the Timeline panel, then choose Points Follow Nulls in the Create Nulls From Paths panel.

With nulls made for all the path points, you can hook them to one another to build animations. The nulls produced by the Points Follow Nulls button and those produced by Nulls Follow Points carry different colors. Hooking them up works like this: select a null, hold Shift, and use the pickwhip to grab a parent layer so the null's coordinates snap to that parent.

Once all the nulls are linked together, run a preview of your animation to watch it play out.

### More like this

- Face Tracking
- Mask Tracking
- Keyboard shortcuts
- Keyframe interpolation
