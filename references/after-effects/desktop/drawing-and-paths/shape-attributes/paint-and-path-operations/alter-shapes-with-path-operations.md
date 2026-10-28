# Alter shapes with path operations

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
