# Before you begin

Begin by drawing a mask that surrounds whichever object you intend to follow. Tracking behaves best when that object holds a consistent shape from start to finish of the clip; its position, scale, and perspective, on the other hand, are free to vary.

Drawing the mask starts with selecting the layer over in the Timeline panel, after which you take one of these routes:

- Reach for shape tools when the outline is simple, or the Pen tool when the outline is irregular.
- When precise dimensions matter, head to Layer > Mask > New Mask and tune it under Mask Shape.

Note

Tracking-capable footage layers — video clips and precompositions among them — are the only places the Mask Tracker panel shows up. Pick a mask sitting on an Adjustment, Text, Solid, or Shape layer instead and that panel stays hidden, since none of those layer types hold footage that can be tracked.

Over in the Timeline panel, open up the layer and pick the mask you mean to track.

Open the Masks properties and work with these Mask Path analyze controls:

| Name | Function |
| --- | --- |
| Track selected masks backward 1 frame | Shifts the mask tracking exactly one frame earlier, handing you tight frame-by-frame command to verify or hand-correct the mask's placement as it steps backward. |
| Track selected masks backward | Runs an ongoing analysis that tracks the chosen mask(s) from where the current time indicator sits all the way back to the layer/comp start, laying down mask path keyframes in reverse along the way. |
| Track selected masks forward | Runs an ongoing analysis that tracks the chosen mask(s) from the current time indicator and continues to the layer/comp end, dropping mask path keyframes automatically as it goes. |
| Track selected masks forward 1 frame | Shifts the mask tracking exactly one frame later, so you can advance through the footage by hand and check or refine the mask's placement a single frame at a time. |

Selecting a mask also flips the Tracker panel over into mask tracking mode, where it surfaces these controls. Should the Tracker panel be hidden, pick a mask first and then head to Animation > Track Mask to bring it up.

Frame by frame as the analysis runs, After Effects writes keyframes onto the Mask Path property.

The tracking method gets chosen either from the Method dropdown menu inside the Tracker panel or by clicking the icon sitting beside the selected mask's Mask Path property over in the Timeline panel.

Stationary cameras pair well with Position, Rotation, and Scale. Reach for Perspective whenever the angle of the camera or object shifts. Detailed facial features past the mask outline are handled by Face Tracking.

- Position: Follows only where the mask sits on the X/Y axes. Best suited to a subject that travels across the frame without changing size, rotating, or warping — think of a plain sliding object.
- Position & Rotation: Picks up motion together with whatever rotation the subject undergoes. Works nicely for something like a spinning logo or a turning head that keeps roughly one size in frame.
- Position, Scale & Rotation: This is the default, and the one reached for most often. It copes with a subject that moves, rotates, and shifts in apparent size (say, as it travels nearer to or away from the lens).
- Position, Scale, Rotation & Skew: Layers skew tracking over everything above, covering a subject that shears or tilts in perspective (For example, a flat surface tilting relative to the camera). Handy for somewhat trickier motion when you don't need a full perspective solve.
- Perspective: A planar tracker that resolves complete corner-pin transformations. The pick of choice for tracking flat surfaces such as screens, signs, or walls.
- Face Tracking (Outline Only): Leans on facial detection to follow a face's broad shape — handy for laying a loose mask around someone's head with no fine detail. It runs quicker and demands less computation.
- Face Tracking (Detailed Features): Follows the separate facial landmarks (eyes, nose, mouth, jawline), yielding a far tighter mask that tracks facial expressions and movement. The right pick for fine face isolation or beauty work.

Among the methods, Position, Position & Rotation, Position, Scale & Rotation, and Position, Scale, Rotation & Skew lean on algorithms that run up to 5x faster while delivering better accuracy.

Drag the playhead across the clip in the Timeline panel to inspect how it turned out. Where the mask wanders off, park the playhead on the troublesome frame, fix the mask shape by hand, and rerun the tracker starting there.

What the mask tracker produces shows up as keyframes written onto the Mask Path property; depending on which method you picked, the mask shape conforms to the transformations that were tracked in the layer.
