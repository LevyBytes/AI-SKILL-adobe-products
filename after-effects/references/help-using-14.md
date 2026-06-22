# Faq For Variable Font Axes, Overview Shape Layers Paths Vector

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FAQ for Variable Font Axes; Overview of shape layers, paths, and vector graphics.

## FAQ for Variable Font Axes

Last updated on Jan 21, 2026

### Answers to the questions that come up most often around how Variable Font Axes work in After Effects.

### Best practices

A handful of pointers for getting good results from variable fonts in After Effects:

Start with common axes

- Of all the axes, Weight, Width, and Slant enjoy the broadest support
- Get comfortable with those before you branch out into custom axes

Respect axis ranges

- Unless you mean to, steer clear of cranking axes all the way to their limits
- For body copy, settling somewhere in the middle of a range tends to read best
- Save the far ends of the range for headlines and moments of emphasis

Consider readability

- Weights down at the light end (< 300) start getting tough on the eyes
- Squeeze the width too tight (< 75%) and the text grows harder to read
- Push the slant past about 15° and legibility takes a hit

Combine axes thoughtfully

- Pairing Weight with Width can pack a real punch
- Shift too many axes at once, though, and the result turns to chaos
- Try your combinations out across a range of sizes

Lean on these animation pointers to keep your variable font motion in After Effects smooth and effective:

Smooth keyframing

- Reach for Easy Ease when you want axis moves to feel natural
- Skip linear keyframes unless a mechanical, robotic look is what you're after
- For dialing axis animations in just so, turn to the Graph Editor

Timing is critical

- Snap an axis through its change too quickly (< 10 frames) and it reads as jarring
- Stretch the change out (> 60 frames) and you get the silkiest transition
- Sync your timing to the music or audio to land the impact

Layering effects

- Mix your axis animators in with transform properties
- Pair axis moves with Position, Scale, or Opacity and things come alive
- Axis animation alone shouldn't carry the whole piece

Performance optimization

- Keep the count of live axis animators down, switching off any you aren't using
- Where you can, pre-render the heavier axis animations ahead of time
- Drop the composition resolution while you're previewing

Put these tips to work to smooth out how you animate variable font axes in After Effects:

Test fonts early

- Variable fonts aren't all cut from the same cloth
- The quality of the interpolation varies quite a bit from one to the next
- Put a font's axis ranges through their paces before you lock it in

Name animators clearly

Give animators names that spell out what they do. For instance, Weight Pulse, Width Squeeze, and so on.

Makes timeline organization easier

Use Markers

- Drop composition markers to mark where axis animation should hit
- Tag your keyframe stretches so they're quick to jump to
- Write down the reasoning behind any tricky expression selector

Save presets

- Bundle your reusable axis animations into presets
- Assemble a stash of effects you keep coming back to
- Pass presets around between projects and across your team

### Troubleshooting

A greyed-out or absent Variable Font Axes button usually means one of two things: the active font isn't a variable font, or no text layer is currently selected.

To confirm whether a font is variable, open the Character panel and look for 'Variable' or 'VF' somewhere in the font name.

This crops up when the font in play simply doesn't carry the axis you're trying to animate. To work past it, try the following:

- Pull up the Variable Font Axes pop-up over in the Properties panel and confirm the font really does carry that axis
- Working with a mix of fonts? Make sure every one of them includes the axis
- Switching the font after the animator already exists can leave the animator pointing at an axis that's no longer there
- Set the right font first, then scrap the animator and build it fresh

Range Selector settings target different characters than intended.

- Look at the Based On choice: Characters, Characters Excluding Spaces, Words, or Lines.
- Double-check that your Start and End figures map to the span you meant.
- Mind the Units, since Percentage and Index behave differently.
- Offset, too, can nudge the range somewhere you didn't expect.

Two likely culprits here are a CTI that's parked at the wrong time, or stale cached frames. Work through these fixes to sort it out:

- Slide the CTI over so you're sitting on the keyframe you mean to be on
- Trigger a RAM Preview to refresh the cache (hit the spacebar or 0 on the numeric keypad)
- Look for stray keyframes that might be overriding what you set
- Shut the composition and open it again for a clean refresh

Every font sets its own floor and ceiling for each axis. To dig deeper, reach for these methods:

- Consult whatever spec or docs ship with the font
- Pop open the Variable Font Axes pop-up in the Properties panel to read off the legal range
- Certain fonts keep their ranges tight, for instance Weight 300-700 rather than the full 100-900
- If you need more room, reach for a different variable font that opens the range wider

Swap to a font after an axis is already applied, and if that same axis lives in the new font but with a different floor or ceiling, your original range sticks around until you reapply the axis (at which point it resets and refreshes).

The usual reason is that the destination font doesn't share the axes the source font had. To track down a fix, try this:

- Confirm the destination font carries the same axis tags, things like wght, wdth, and so on.
- Anything custom (INFM, BNCE, and the like) is tied to its own font and simply won't carry over
- For fonts whose axes differ, you'll have to rebuild the animators by hand
- Sticking to fonts from one family or designer gives you smoother compatibility

Run past the ceiling of 8 distinct axes per text layer for animation, and you'll need to thin out the active animators by removing the ones you aren't using.

### Helpful resources

Tracking down variable fonts in Adobe Fonts is as easy as searching the keyword "Variable." Beyond that, plenty of other paid and free font foundries are worth a look too.

Head over to the Microsoft OpenType website if you want the technical nitty-gritty on axis tags and how fonts are built.

## Overview of shape layers, paths, and vector graphics

Last updated on Mar 5, 2026

### About vector graphics and raster images

Mathematical objects known as vectors, made up of lines and curves, are what define vector graphics; they spell out an image through its geometry. Within After Effects, mask paths, the shapes living on shape layers, and text on text layers all count as vector graphics elements.

By contrast, raster images (you'll also hear them called bitmap images) lean on a rectangular grid of picture elements (pixels) to build the picture. Every pixel carries its own fixed position and color value. Plenty of what lands in After Effects arrives as raster imagery, including video footage and image sequences pulled off film, among many other image kinds.

Because they don't depend on resolution, vector graphics keep their edges sharp and surrender no detail no matter how you resize them. That resolution independence is exactly why vector graphics suit visual elements like logos that have to appear at all sorts of sizes.

Example of a vector graphic at different levels of magnification.

Example of a vector graphic at different levels of magnification. Example of a raster image at different levels of magnification.

Example of a raster image at different levels of magnification.

Since every raster image holds a set, unchanging count of pixels, it is bound to its resolution. Scale one up and it can shed detail and turn jagged (pixelated).

Certain images begin life as vector graphics in some other program, only to be turned into pixels (rasterized) on the way into After Effects. When a layer carries continuous rasterization, After Effects rebuilds the vectors back into pixels each time the layer is resized, which keeps the edges crisp. Files from SWF, PDF, EPS, and Illustrator can all be continuously rasterized.

### About paths

The notion of a path underpins a number of After Effects features—masks, shapes, paint strokes, and motion paths among them. While the tools and methods you reach for when building and editing these path types share a lot in common, every category of path also brings something distinct to the table.

Two building blocks make up any path: segments and vertices. The lines or curves running between vertices are the segments, and the vertices mark the start and finish of each segment. In some Adobe products you'll see a vertex referred to instead as an anchor point or a path point.

Reshaping a path happens through dragging—either the vertices themselves, the path segment, or the direction handles sitting at the ends of each vertex's direction lines (also called tangents).

The course a path takes as it leaves a vertex is governed by the angle and length of that vertex's outgoing direction line. Heading toward the following vertex, the path gradually loosens its tie to the previous vertex's outgoing direction line and instead answers more to the incoming direction line belonging to the next vertex.

Components of a path

A. Selected vertex B. Selected vertex C. Unselected vertex D. Curved path segment E. Direction line (tangent) F. Direction handle

Components of a path

Vertices come in two flavors—smooth points and corner points. Where a smooth point sits, the segments join as one continuous curve, because that point's incoming and outgoing direction lines fall along a single line. Where a corner point sits, the path snaps to a new heading, since its incoming and outgoing direction lines run along separate lines. Any mix of corner and smooth points is fair game when you draw, and a point of the wrong type is always changeable afterward.

Points on a path

A. Four corner points B. Four smooth points C. Combination of corner and smooth points

Points on a path

Drag a direction line belonging to a smooth point and the curves flanking that point both shift at once. A corner point behaves differently: dragging one of its direction lines reshapes only the curve on that same side of the point.

Adjusting the direction lines on a smooth point (left) and a corner point (right)

Adjusting the direction lines on a smooth point (left) and a corner point (right)

Paths fall into two kinds—open and closed. With an open path, the starting point and ending point differ; a straight line is one such case. A closed path loops around without any start or finish—a circle being the obvious example.

For standard geometric forms—polygons, ellipses, stars, and the like—the shape tools let you draw the path, whereas the Pen tool handles any freeform path you have in mind. A path you draw with the Pen tool comes out as either a manual Bezier path or a RotoBezier path. What sets RotoBezier apart from manual Bezier is automatic calculation of the direction lines, which speeds up drawing and makes it less fiddly.

Drawing a shape path onto a shape layer with the shape tools (Rectangle, Rounded Rectangle, Ellipse, Polygon, or Star) yields one of two path types—a parametric shape path or a Bezier shape path.

Expressions let you tie together mask paths, paint stroke paths, and Bezier shape paths. Copying and pasting also works across mask paths, paint stroke paths, Bezier shape paths, motion paths, and paths brought in from Adobe Illustrator and Photoshop.

To fuse several shape paths into a single path, reach for the Merge Paths path operation—it parallels the Pathfinder effects found in Adobe Illustrator.

Any time you need text or an effect to ride along a path, that path has to be a mask path.

On its own, a path renders as nothing visible—think of it as stored instructions for positioning or reshaping other visual elements. Giving a path a stroke is what makes it show up. For a mask path, that means applying the Stroke effect. For a path belonging to a shape layer object, a stroke property group (attribute) is created by default, sitting after the path property group in the Timeline panel.

When you put color or a gradient inside the region a path encloses, that's a fill.

Note

The Path Point and Handle Size value is where you set how large Bezier direction handles and vertices appear for masks and shapes; reach it through Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS).

### About shapes and shape layers

Inside shape layers live vector graphics objects known as shapes. Out of the box, a shape is built from a path, a stroke, and a fill.

To make shape layers, draw in the Composition panel using either the shape tools or the Pen tool.

There are two sorts of shape paths: parametric shape paths and Bezier shape paths. Numerically defined, parametric shape paths rely on properties you can adjust and animate in the Timeline panel once you've drawn them. Bezier shape paths instead consist of a set of vertices (path points) and segments that you reshape over in the Composition panel. Working with a Bezier shape path mirrors how you handle a mask path—and every mask path is itself a Bezier path.

Reshaping a shape path is done by applying path operations like Wiggle Paths and Pucker & Bloat. Paint operations are what you use to stroke a path or to flood the region a path defines with color.

Taken together, shape paths, paint operations, and path operations for shapes go by the name shape attributes. Adding them happens through the Add menu, found in the Tools panel or the Timeline panel. In the Timeline panel each shape attribute shows up as its own property group, whose properties you animate exactly as you would any layer property. Learn more about animation, keyframes, and expressions.

Whatever color bit depth the project uses—8, 16, or 32 bpc—a shape layer matches it.

Footage items are not the basis for shape layers. Layers built without a footage item are occasionally called synthetic layers. Text layers fall into that synthetic category too, and they're likewise made of vector graphics objects, which is why a great many of the conventions covering text layers carry over to shape layers as well. As one instance, a shape layer won't open in a Layer panel, the same way a text layer won't.

Tip

Animation presets are a handy way to keep your favorite shapes on hand.

### Groups and render order for shapes and shape attributes

Although a shape defaults to one path, one stroke, and one fill—stacked top to bottom in the Timeline panel—a lot of what makes shape layers so capable and adaptable comes down to letting you tack on and rearrange shape attributes and assemble more intricate compound shapes.

Shapes or shape attributes sharing the same grouping level inside a single shape layer can be grouped together.

Think of a group as a gathering of shape attributes: paths, fills, strokes, path operations, and further groups. Every group carries its own blending mode plus its own collection of transform properties. Pulling shapes into groups lets you operate on several shapes at once—scaling all of a group's shapes by an identical amount, say, or stroking each shape the same way. You can even drop a lone shape or a single shape attribute into its own group to wall off transformations. Grouping a path all by itself, for example, lets you scale that path while leaving its stroke untouched.

Use the Add menu in the Tools or Timeline panels to add a shape attribute, and it lands inside whichever group is currently selected. Reordering in the Timeline panel is just a matter of dragging groups and attributes around. How shapes and shape attributes render relative to one another follows from the way you reorder and group them.

### Render order for shapes within a shape layer

Rendering a shape layer obeys rules much like those for rendering a composition that holds nested compositions:

Within any group, rendering begins with the shape lowest in the Timeline panel stacking order.

Every path operation in a group runs ahead of the paint operations—so, for instance, a stroke picks up the warping the Wiggle Paths path operation introduces into the path. Inside a group, path operations execute top to bottom.

Inside a group, paint operations run from the bottom upward in the Timeline panel stacking order. The upshot: a stroke draws on top of (in front of) any stroke positioned below it in the Timeline panel. Want to break that default for one particular fill or stroke? Choose Above Previous In Same Group for that fill or stroke's Composite property in the Timeline panel.

Both path operations and paint operations act on every path sitting above them within the same group.

### Transform properties for shape groups and shape paths

A Transform property group belongs to each group individually. In the Timeline panel it appears as a property group labeled Transform: [group name], and in the Composition panel it shows up as a dashed box fitted with handles. Group a path by itself and you can transform that path alone by way of its newly added Transform property group.

Adding an extra Transform property group for one path pays off when you're after intricate motion—spinning around a single anchor point while simultaneously circling along an orbit, for example. Anything inside a group gets carried along by the group's transformations—exactly the way layer parenting behaves.

On top of that, every shape path holds intrinsic properties that steer where the path sits and what form it takes. With parametric shape paths, those properties—Position and Size among them—appear as parameters in the Timeline panel. With Bezier shape paths, the properties are set per vertex yet kept inside the Path property. Reshaping a Bezier path via the free-transform bounding box edits these intrinsic properties for the vertices that make up that path.

### Group shapes or shape attributes

- Select Layer > Mask and Shape Path > Group Shapes.

  - Use Ctrl+G (Windows) or Command+G (macOS).

Grouping shapes drops the group's anchor point at the middle of the group's bounding box.

### Ungroup shapes or shape attributes

- Select Layer > Mask and Shape Path > Ungroup Shapes.

  - Use Ctrl+Shift+G (Windows) or Command+Shift+G (macOS).

### Create an empty shape group

From the Add menu in either the Tools panel or the Timeline panel, pick Group (Empty).

### More like this

- About text layers
- About masks
- Creating shapes and masks
- Add, edit, and remove expressions
