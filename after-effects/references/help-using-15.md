# Shape Attributes Paint Operations Path, Use Offset Paths

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Shape attributes, paint operations, and path operations for shape layers; Use Offset Paths shape effect to alter shapes.

## Shape attributes, paint operations, and path operations for shape layers

Search Last updated on Jul 3, 2024

### Adding attributes to shape layers

Once a shape layer exists, the Add menu—reachable from either the Tools panel or the Timeline panel—lets you attach further attributes: paths, paint operations, and path operations.

Where each new attribute lands inside the selected shape group (or groups) follows these defaults:

A fresh path drops in beneath whatever paths and groups are already there.

A fresh path operation—Zig Zag, Wiggle Paths, and the like—slots in under any path operations that already exist; lacking those, it sits below the existing paths instead.

A fresh paint operation—strokes and fills—settles beneath existing paths yet on top of existing strokes and fills.

Want to skip these defaults and drop the new attribute at the very bottom of the group, under everything else? Hold Alt (Windows) or Option (Mac OS) while clicking your choice in the Add menu.

One exception stands apart: the Repeater operation always lands at the bottom of the group.

### Strokes and fills for shapes

Counted among paint operations, strokes and fills lay colored pixels onto a path or onto whatever region that path encloses. Either one may be a single solid color or instead draw on a gradient. A stroke comes either as an unbroken line or as a repeating run of dashes separated by gaps. Every stroke and every fill carries its own blending mode, and that mode governs how the operation mixes with the other paint operations sharing its group.

Within a group, paint operations render by default from bottom up in the Timeline panel's stacking order. Put differently, a stroke draws in front of any stroke positioned later in the Timeline panel. Should you need to flip that default for one particular fill or stroke, set its Composite property to Above Previous In Same Group in the Timeline panel.

Note

Adding a stroke or fill through the Add menu in the Tools or Timeline panel drops that paint operation below existing paths but above existing strokes and fills. Pin a new stroke to the bottom of the group by holding Alt (Windows) or Option (Mac OS) as you pick an item from the Add menu.

When a new shape appears, it inherits the fill and stroke properties shown by the swatch buttons sitting beside the underlined Fill and Stroke text controls in the Tools panel. Those same controls let you change fill color, stroke color, fill type, and stroke type on selected shapes. Keep in mind the Fill and Stroke controls surface in the Tools panel only while a shape layer is selected or a drawing tool is in use.

Select several shapes whose fill or stroke properties differ, and the swatch button beside the Fill or Stroke control shows a question mark. Editing through these controls still works; doing so sets the matching property on every selected shape to one shared value.

Four types are available for fills and strokes:

None

Nothing gets painted.

Solid color

A single color fills the whole stroke or fill.

Linear gradient

Colors and opacity values come from a linear gradient that maps onto the composition along one axis running from the Start Point to the End Point.

Radial gradient

Colors and opacity values come from a linear gradient mapped onto the composition along a radius that runs outward—from the Start Point at the center to the End Point on the circumference of a circle. Shifting the Highlight Length and Highlight Angle values lets you offset that starting point.

Note

To animate and interpolate gradients, keyframe the Colors property and work the Color Picker in Gradient Editor mode to add, change, and delete color stops and opacity stops. Gradients can also be stored as animation presets. (See Save an animation preset.)

Shape-layer stroke and fill colors do not render as high-dynamic range colors. Any color value below 0.0 or above 1.0 gets clipped back into the 0.0-to-1.0 range.

### Choose stroke or fill type and blending options

- Picking a fill type or stroke type for new shapes—or setting blending mode or opacity for a new fill or stroke—starts by clicking the underlined Fill or Stroke text control in the Tools panel. For existing shapes, select them first, then cycle through the fill or stroke types with these controls.
- New shapes: cycle their stroke or fill type by Alt-clicking (Windows) or Option-clicking (Mac OS) the swatch button beside the underlined Fill or Stroke text control in the Tools panel. Existing shapes: select them first, then set a stroke or fill type with these controls.

### Choose a solid color or edit a gradient for a stroke or fill

- Setting a solid color or gradient on fills or strokes for new shapes begins by clicking the swatch button beside the underlined Fill or Stroke text control in the Tools panel. For existing shapes, select them first, then use the controls to choose the solid color or gradient.

### Modify the color mapping for a gradient

Think of a gradient as a spread of color and opacity values that you tailor inside the Gradient Editor dialog box. How those colors land on a stroke or fill is also yours to adjust—move the Start Point and End Point, which set the gradient's direction and scale. You might, for instance, shift these points to spread a gradient's colors across a wider area, or turn a linear gradient so its colors fade top to bottom rather than left to right. With a radial gradient, you set the gradient's center, its radius, and a highlight's offset.

Draw a shape path with the Pen tool and, by default, the gradient's control points sit at the layer's center. Once you stop drawing, you're free to reposition them.

The Start Point, End Point, Highlight Angle, and Highlight Length properties can all be edited in the Timeline panel—or, alternatively, straight inside the Composition panel.

Controls for mapping gradient colors in Composition panel

A. Highlight control point B. Start Point C. End Point

Controls for mapping gradient colors in Composition panel

1. Pick the group that holds the gradient.
   Hover the Selection tool over a gradient control and it becomes a gradient control pointer.

### Set stroke width

- To set stroke width for new shapes in pixels (px), either drag the underlined Stroke Width control—found just right of the Stroke controls in the Tools panel—or click it and type a value into the box. For existing shapes, select them first, then adjust the Stroke Width control.

### Create a dashed stroke

A dashed stroke comes from loading any number of dashes and gaps into the stroke's Dashes property group. That group's dashes and gaps repeat however many times it takes to span the whole path. Where along the path the stroke starts is governed by the Offset property.

Note

Keyframe the Offset property and the dashes become a moving trail—think of the running lights on a marquee.

1. In the Timeline panel, expand a stroke's property group.
2. Click the Add A Dash Or Gap button to drop one dash and gap into a single cycle of the dashed-line pattern. Each stroke pattern accepts up to three dashes.
3. Tune the Dash and Gap properties until the dashes and gaps reach the lengths you're after.

### Line Cap options for strokes

For a dashed stroke, the Line Cap property controls how the ends of the stroke segments (the dashes) look.

Butt Cap

The path's end is where the stroke stops.

Round Cap

Past the path's end, the stroke runs on for a pixel count matching the stroke width in pixels, finishing in a semicircle.

Projecting Cap

Past the path's end, the stroke runs on for a pixel count matching the stroke width in pixels, finishing in a squared-off edge.

### Line Join options for strokes

A stroke's Line Join property controls how the stroke looks wherever the path abruptly switches direction (rounds a corner).

Miter Join

A pointed connection. When a beveled join replaces a miter join is decided by the Miter Limit value. Set the miter limit to 4, and once the point's length hits four times the stroke weight, a bevel join takes over. Set it to 1 and you force a bevel join.

Round Join

Connects with a rounded corner.

Bevel Join

Connects with a flat, squared-off corner.

### Fill rules for shapes

A fill works by laying color across the region marked as inside a path. With something straightforward like a circle, deciding what counts as inside is trivial. Things get trickier once a path crosses itself, or once a compound path holds paths nested inside other paths.

For deciding what counts as inside a path when building fills, After Effects relies on one of two rules. Each rule tallies how many times a straight line drawn outward from a point crosses the path while leaving the region the path surrounds. Path direction matters to the nonzero winding fill rule; the even-odd fill rule ignores it.

By default, both After Effects and Illustrator apply the nonzero winding fill rule.

Self-intersecting path with Fill Rule set to Non‑Zero Winding Fill Rule (left) compared with Even‑Odd Fill Rule (right)

Self-intersecting path with Fill Rule set to Non‑Zero Winding Fill Rule (left) compared with Even‑Odd Fill Rule (right)

Even-odd fill rule

Should a line drawn from a point in any direction cross the path an odd number of times, that point lies inside; otherwise it lies outside.

Nonzero winding fill rule

A line's crossing count equals the total left-to-right crossings of the path minus the total right-to-left crossings. When a line drawn in any direction from the point yields a crossing count of zero, the point lies outside; any other count puts it inside.

Note

An easier mental model for the nonzero winding rule treats the path as a loop of string. A point counts as outside the path if, with your finger placed there, you can pull the string clear without it snagging or wrapping around your finger.

Since the nonzero winding fill rule respects path direction, pairing it with a reversal of one or more paths in a compound path comes in handy for punching holes into compound paths.

Note

Reverse a path's direction by clicking that path's Reverse Path Direction On button in the Timeline panel.

### Taper shape strokes

The start and end points of your shape strokes can also be tapered—along with the size of that tapering—to lend your animations a smooth, refined finish. See How to taper shape strokes for more details.

### Alter shapes with path operations

Much like effects, path operations work live and nondestructively on a shape's path, producing a reshaped path that downstream shape operations—fills and strokes among them—can then act on. The original path stays untouched. Their live nature means you can edit or delete them whenever you like. Each path operation affects every path above it within the same group; and just as with any shape attribute, you reorder path operations by dragging them or by cutting, copying, and pasting in the Timeline panel.

1. Working from either the Composition panel or the Timeline panel, pick the shape group that should receive the path operation.
   Merge Paths

Joins paths into one compound path. (See Merge Paths options.)

Offset Paths

Grows or shrinks a shape by pushing the path away from the original. On a closed path, a positive amount value grows the shape while a negative one shrinks it. Duplicating a shape or stroke and offsetting those copies in tandem is also possible.

To learn more, see Use Offset Paths shape effect to alter shapes.

Pucker & Bloat

Drags a path's vertices outward while bending the segments inward (Pucker), or drags the vertices inward while bending the segments outward (Bloat).

Repeater

Makes several duplicates of a shape, each receiving a chosen transformation. (See Using the Repeater to replicate shapes.)

Round Corners

Rounds the corners of paths. The larger the Radius value, the rounder they get.

Trim Paths

Keyframe the Start, End, and Offset properties to trim a path, yielding effects akin to those from the Write-on effect and the Write On setting for paint strokes. Place the Trim Paths path operation beneath several paths in a group and you can pick whether those paths trim all at once or get treated as a compound path and trimmed one by one.

Twist

Spins a path harder at its center than along its edges. A positive value twists it clockwise; a negative value twists it counterclockwise.

Wiggle Paths

Scrambles (wiggles) a path, turning it into a run of jagged peaks and valleys of assorted sizes. This distortion auto-animates—it shifts over time with no keyframes or expressions required.

Some of this path operation's properties act just like the identically named properties of the Wiggly selector used for text animation. (See Wiggly selector properties.) The Correlation property sets how closely one vertex's movement tracks its neighbors'; lower values give more jagged results, since a vertex's position then leans less on where its neighbors sit. It mirrors the Wiggly selector's Correlation, except this Wiggle Paths variant governs correlation between neighboring vertices rather than neighboring characters. Cap a segment path's maximum length with either an absolute or a relative size. Dial in the density of jagged edges (Detail) and pick soft edges (Smooth) or sharp edges (Corner).

Keyframe the Size property to fade the wiggling in or out. For a smooth ramp up or down in the wiggling, hold Wiggles/Second at a steady 0 and animate the Temporal Phase property instead.

Wiggle Transform

Scrambles (wiggles) any mix of a path's position, anchor point, scale, and rotation transformations. Dial in how strong each wiggle should be by entering a value in the Transform property group nested inside the Wiggle Transform property group. These wiggled transformations auto-animate—shifting over time without keyframes or expressions. Wiggle Transform shines right after a Repeater operation, since it lets you scramble each repeated shape's transformations on its own. (See Using the Repeater to replicate shapes.)

Some of this path operation's properties act just like the identically named properties of the Wiggly selector used for text animation. (See Wiggly selector properties.) Here the Correlation property sets how alike the wiggled transformations of one repeated shape are to its neighbor inside a batch of repeated shapes. Correlation matters only when a Repeater operation comes before the Wiggle Transform operation. At a Correlation of 100%, every repeated item transforms identically; at 0%, each repeated item transforms on its own.

Bear this in mind while scrambling repeated shapes: when the Wiggle Transform path operation sits before (above) the Repeater path operation, all the repeated shapes get wiggled (randomized) the same way. When the Repeater path operation sits before (above) the Wiggle Transform path operation, each repeated shape gets wiggled (randomized) on its own.

Over on the ProVideo Coalition website, Chris Meyer offers a video tutorial demonstrating the Wiggle Transform path operation. It lays out why wiggling several properties independently calls for multiple instances of the Wiggle Transform path operation.

Zig Zag

Turns a path into a run of jagged peaks and valleys all the same size. Fix the spacing between peaks and valleys with an absolute or relative size. Set how many ridges fall on each path segment, and pick wavy edges (Smooth) or jagged edges (Corner).

### Merge Paths options

Every path lying above it in the same group feeds the Merge Paths path operation as input. What comes out is one path that fuses those input paths. The input paths still show in the Timeline panel, yet they're effectively pulled from how the shape layer renders, so the Composition panel never displays them. Unless a fill and stroke are already present, one of each gets added after the Merge Paths property group in the Timeline panel—otherwise the output path would stay invisible.

Merge Paths options

A. Add for all shapes B. Subtract for squares C. Intersect for squares D. Exclude Intersections for squares

Merge Paths options

Each option of the Merge Paths path operation runs a different calculation to arrive at the output path:

Merge

Fuses every input path into one compound path. This is the default for shapes built from text characters that span multiple paths—the letter e, say—via the Create Shapes From Text command.

Add

Builds a path covering the union of the input paths' areas.

Subtract

Builds a path covering only the topmost path's area, with the area of the underlying paths taken away.

Intersect

Builds a path covering only the areas where all input paths overlap.

Exclude Intersections

Builds a path that unions all input paths' areas and then removes the areas where those paths intersect.

### Using the Repeater to replicate shapes

Virtual copies of every path, stroke, and fill above it in the same group are spun up by the Repeater path operation. No separate Timeline panel entries stand in for those virtual copies, yet the Composition panel renders them all the same. How each copy is transformed depends on its place within the set of copies together with the values in that Repeater instance's Transform property group.

Original shape (upper-left), one instance of the Repeater operation applied (upper-right), and two instances of the Repeater operation applied (lower-right)

Original shape (upper-left), one instance of the Repeater operation applied (upper-right), and two instances of the Repeater operation applied (lower-right)

Number the original shape 0, the next copy 1, and so on, and the Repeater's effect is to apply each Transform-property-group transformation n times to copy number n.

Take a Repeater applied to a shape with Copies set to 10 and the Repeater's Transform-group Position property set to (0.0, 8.0). The original shape holds its spot at (0.0, 0.0). The first copy lands at (0.0, 8.0), the second at (0.0, 16.0), the third at (0.0, 24.0), continuing on to the ninth copy at (0.0, 72.0)—ten shapes in all.

Several Repeater instances can run inside one group; in other words, the Repeater itself can be repeated. Stacking instances of the Repeater is a quick route to a grid of virtual copies of one shape: aim one instance's Position property at the horizontal values and another instance's at the vertical ones.

What the Offset property does is shift the transformations by a set number of copies. Say Copies is 10 and Offset is 3—then the original shape gets transformed by 3 times the amount in the Transform property group, and the final copy by 12 times that amount.

Note

Keyframing the Offset property is an easy path to interesting results.

Whether copies render above (in front of) or below (behind) the copies preceding them is set by the Composite option.

The Start Opacity value sets the original shape's opacity and the End Opacity value sets the last copy's; opacity for the copies in between is interpolated.

Drop the Repeater after a path but above a shape's fill and stroke property groups, and the whole set of virtual copies is filled or stroked as one compound path. Leave the Repeater under the fill and stroke, and each copy gets filled and stroked on its own. Gradient fills and strokes make the contrast clearest.

Note

Place a Wiggle Transform path operation after a Repeater operation to scramble (wiggle) the position, scale, anchor point, or rotation of the repeated copies inside a Repeater instance. When the Wiggle Transform path operation sits before (above) the Repeater path operation, every repeated shape gets wiggled (randomized) the same way. When the Repeater path operation sits before (above) the Wiggle Transform path operation, each repeated shape gets wiggled (randomized) on its own.

On his website, Chris Zwar shares an example project that pairs the Card Dance effect with a shape layer running the Repeater operation, simulating—for any video or still image—a halftone color separation.

### More like this

- About shapes and shape layers
- Groups and render order for shapes and shape attributes
- Select a color or edit a gradient

## Use Offset Paths shape effect to alter shapes

Search Last updated on May 5, 2026

### In After Effects, reach for Offset Paths to expand, contract, or animate shape outlines non‑destructively—a way to build dynamic shape animations that still leaves the original paths intact.

Much like effects, path operations work live and nondestructively on a shape's path, producing a reshaped path that downstream shape operations—fills and strokes among them—can then act on. The original path stays untouched. Offset Paths is one such operation: it grows or shrinks a shape by pushing the path away from the original. On a closed path, a positive amount value grows the shape while a negative one shrinks it.

### Controls

These properties are yours to pick from:

- Bevel Join: a squared-off connection.
- Round Join: a rounder connection.
- Miter Join: a pointed connection.

- Miter Limit: sets when a beveled join stands in for a miter join. With the miter limit at 4, a bevel join takes over once the point's length reaches four times the stroke weight. A miter limit of 1 forces a bevel join.
- Copies: duplicates a path or shape; its default is 1.
- Copies Offset: shifts the shapes outward or inward. That opens the door to eye-catching backgrounds—a retro feel, for one. Concentric copies let you build geometric textures, kaleidoscopic effects, and patterns; you can also craft mandala designs and motion posters or animate letters. Should the letter copies start bleeding into one another, try trimming the stroke width.

### What all can I do with it?

Create concentric duplicates of a single shape path

Cuts your time and opens up experimental animations.

Animate their position relative to one another

However you animate the copies, their position stays relative to one another. A shared anchor point keeps them animating at matching size and position.

Offset the copies to create nesting or expanding animations

The Copies Offset property lets you build a collapsing or expanding effect—picture a shape entering from beyond the frame and finishing by collapsing fully at the center.

Apply other Shape customization features

On top of that, other shape tweaks such as dashes and trim paths let you reach for different looks.

Follow these steps to build repeating shapes:

Start a new composition through Composition > New Composition.

OR

On the home screen, click the New Composition tile.

OR

In the Projects panel, hit the Comp icon.

Choose the Shape tool icon, then bring in the Star tool. Draw the shape over in the Comp panel.

The Timeline panel now shows a shape layer. Click its triangle to expose the components, then—on the right beneath it—click ADD and pick Offset Paths from the dropdown.

3. Select offset paths shape effect
   To expand the shape, give the amount a positive value; to contract it, give it a negative value; 0 leaves it as is.

To keep the shape's edge style, choose Miter Join from the dropdown in the Line Join property.

For motion, reach for keyframes. Click the stopwatch beside the Copies Offset property and tweak the values—start small and ramp up gradually. Each value change drops a keyframe at the current time indicator.

### Experiment with the shape repeaters with different line join options

Pick among the various line join options that govern how round the edges turn out. Making copies and offsetting them with bevel or round joins yields different designs from your shape, while Miter Join holds the original shape. Experimenting to find what suits you works best!

Miter Join keeps the connection pointed.

With Round Join, the edges turn rounder and softer.

Bevel Join leaves the edges squared or rectangular.

### Example - Create concentric shape repeaters of letters

Keen to create and experiment with this animation? Download the sample .aep project as a starting point. From there, experiment freely with the offset path shape effect and extend the animation however you like.

Download

Get file Concentric shape repeater

### Have a question or an idea?

With a grasp of how this feature behaves, head over to the community to swap real-world examples and show off what you've built. Drop by and let us see the creations you make with the offset path shape effect, we'd genuinely enjoy seeing them.
