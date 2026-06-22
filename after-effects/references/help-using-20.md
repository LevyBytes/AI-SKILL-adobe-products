# Facetracking, Rigid Mask Tracking, Mask Reference

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Face Tracking; Mask Tracking; Mask Reference.

## Face Tracking

Search Last updated on Nov 3, 2023

### Face Tracking Overview

With Face Tracking you can pinpoint and follow human faces with precision. Plain mask tracking is the fast route to confining effects to a face alone — selective color correction, say, or blurring someone's face, and so on.

Face Tracking, though, lets you follow particular regions of the face such as the pupils, mouth, and nose, so you can single out and refine those facial features in far greater detail. You might, for instance, recolor the eyes or play up mouth movements without going frame by frame.

After Effects can also gauge facial features for you. By tracking facial measurements, it reports specifics like how wide the mouth or an eye is. Having each data point on its own opens the door to refining content substantially. Beyond that, you can export thorough tracking data to Adobe Character Animator for performance-based character animation.

For the most part the face tracker runs on its own, though you'll get better results by launching the analysis on a frame that shows a front, upright view of the face. Good lighting on the face can sharpen the accuracy of face detection.

The Tracker panel offers two face-tracking options:

- Face Tracking (Outline Only): Go with this option when the face's outline is the only thing you need to track.
  Should you go with the Detailed Features option, the layer picks up a Face Track Points effect. That effect holds several 2D effect control points with keyframes, each one pinned to a detected facial feature (for instance, the corners of the eyes and mouth, where the pupils are, the tip of the nose).

### Tracking outline of a face

Inside After Effects, run File > Import > File. Navigate to wherever the footage lives, then bring it into the Project.

From the Project panel, drag that footage into a Composition so a layer is created.

Set the current time indicator (CTI) on a frame where the face you mean to track appears front-on and upright.

Face detection improves whenever the opening frame presents a face that faces forward and stands upright.

Sketch a closed mask loosely over the face so the eyes and mouth fall inside it. This mask stakes out the search region used to find facial features. Where several masks are selected, only the topmost one applies.

Keeping the Mask selected, run Window > Tracker so the Tracker panel opens. Dial the tracking Method to Face Tracking (Outline Only).

Within the Tracker panel, step forward or backward a single frame to verify tracking holds up, after which you click the button so every frame gets analyzed.

The instant analysis concludes, the composition gives you access to the face tracking data.

### Tracking detailed features and extracting facial measurements

From within After Effects, choose File > Import > File. Point it at the folder holding your footage and pull that footage into the Project.

Take the footage out of the Project panel and drop it onto a Composition, which adds a layer.

Park the Current Time Indicator on a frame where the face you intend to track is shown facing forward and standing upright.

You'll see stronger face detection if the first frame to track shows the face looking straight ahead in an upright pose.

Trace a closed mask loosely over the face, keeping the eyes and mouth within it. That mask establishes the search region for finding facial features. Should you have multiple masks selected, the uppermost one is the one used.

While the Mask stays selected, choose Window > Tracker to bring up the Tracker panel. Switch the tracking Method over to Face Tracking (Detailed Features).

Inside the Tracker panel, advance or back up one frame at a time to make sure tracking works, then press the button so analysis runs across all frames.

After analysis finishes, the tracking data shows up under a brand-new effect called Face Track Points. You can get at that face tracking data either via the composition or via the Effects (Window > Effect Controls) panel.

Shift the current-time indicator onto a frame where the face wears a neutral expression (the rest pose). Every other frame's face measurements are taken relative to that rest pose frame. Within the Tracker panel, press Set Rest Pose.

Within the Tracker Panel, press Extract & Copy Face Measurements. A Face Measurements effect attaches to the layer, with keyframes assembled from figures computed off the Face Track Points keyframe data. That Face Measurements keyframe data lands on the system clipboard, ready for Character Animator.

Building the Face Measurements keyframes relies on the Face Track Points keyframe data, taken relative to the Rest Pose (refer to Step 8).

### Face Track Points

For a handful of facial features, the Face Tracker effect builds effect control points that you can view in the Timeline panel.

### Face Measurements

Having gone with the Detailed Features option, you can pull out still more information shaped as parametric measurements of facial features, called Face Measurements. Every measurement displayed for the face you tracked is gauged against the Rest Pose frame.

Face Offset

Reports where the face sits, offsetting to 0% on the Rest Pose frame. These data points become available, reporting offset values along the x, y, and z axes:

- Offset X
- Offset Y
- Offset Z

Face Orientation

Reports the face's three-dimensional orientations. Orientation is gauged through these data points, standing for the x, y, and z axes:

- Orientation X
- Orientation Y
- Orientation Z

Left Eye

Reports assorted measurement points for the left eye, taking in these data points:

- Left Eyebrow Distance
- Left Eyelid Openness
- Left Eye Gaze X
- Left Eye Gaze Y

Right Eye

Reports assorted measurement points for the right eye, taking in these data points:

- Right Eyebrow Distance
- Right Eyelid Openness
- Right Eye Gaze X
- Right Eye Gaze Y

Mouth

Reports assorted measurement points for the mouth, taking in these data points:

- Mouth Offset X
- Mouth Offset Y
- Mouth Scale Width
- Mouth Scale Height

## Mask Tracking

Search Last updated on May 25, 2026

### Learn how to use rigid mask tracking to track and attach masks to moving objects in your footage.

With the mask tracker, a mask is made to ride along with whatever object is in motion inside a movie. Typical reasons to reach for masks include concealing portions of a clip, fencing off regions so an effect lands only there, or blending shots drawn from separate sequences.

### Before you begin

Begin by drawing a mask that surrounds whichever object you intend to follow. Tracking behaves best when that object holds a consistent shape from start to finish of the clip; its position, scale, and perspective, on the other hand, are free to vary.

Drawing the mask starts with selecting the layer over in the Timeline panel, after which you take one of these routes:

- Reach for shape tools when the outline is simple, or the Pen tool when the outline is irregular.
- When precise dimensions matter, head to Layer > Mask > New Mask and tune it under Mask Shape.

Note

Tracking-capable footage layers — video clips and precompositions among them — are the only places the Mask Tracker panel shows up. Pick a mask sitting on an Adjustment, Text, Solid, or Shape layer instead and that panel stays hidden, since none of those layer types hold footage that can be tracked.

Over in the Timeline panel, open up the layer and pick the mask you mean to track.

Open the Masks properties and work with these Mask Path analyze controls:

Name

Function

Track selected masks backward 1 frame

Shifts the mask tracking exactly one frame earlier, handing you tight frame-by-frame command to verify or hand-correct the mask's placement as it steps backward.

Track selected masks backward

Runs an ongoing analysis that tracks the chosen mask(s) from where the current time indicator sits all the way back to the layer/comp start, laying down mask path keyframes in reverse along the way.

Track selected masks forward

Runs an ongoing analysis that tracks the chosen mask(s) from the current time indicator and continues to the layer/comp end, dropping mask path keyframes automatically as it goes.

Track selected masks forward 1 frame

Shifts the mask tracking exactly one frame later, so you can advance through the footage by hand and check or refine the mask's placement a single frame at a time.

| --- | --- |

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

### Other considerations when using the mask tracker

- Tracking works well only when the tracked object holds one shape the whole way through the movie, even though its Position, Scale, and Perspective are free to vary.
- Before you kick off the tracking operation you may pick several masks at once, in which case keyframes get added to the Mask Path property for every one of those masks.
- Footage layers that support tracking — video footage and precompositions, for instance — are where the Mask Tracker is offered. It stays unavailable on Adjustment, Text, Solid, and Shape layers.

During analysis the mask tracking hunts for content sitting inside the mask. To grow or shrink the mask's covered area, turn to the Mask Expansion property.

Tip

These tutorials walk you through putting the Track Mask effect and mask tracker to work in After Effects.

## Mask Reference

Search Last updated on May 5, 2026

### Use masks in Adobe After Effects to define visible areas and shape layers for precise compositing.

Reach for the new Mask Reference option whenever you want to confine where an effect applied to a layer takes hold. You'll find the Mask Reference property sitting beneath the Compositing Options under each effect over in the Timeline panel.

### Create a Mask Reference

Mask Reference

Mask Reference

Hit the '+' sign beneath the Compositing Options in the Timeline panel, then pick a mask out of the Mask Reference menu.

As you build a mask reference, bear these points in mind :

- The only masks available to you are those on the very same layer as the effect.
- There's no cap on how many mask references you add.
- An existing mask is fair game to reference.
- Spinning up a brand-new mask straight from an After Effects effect isn't possible.

The moment a mask gets applied to a layer, a dynamic stream springs up beneath the Masks options, listing out the masks applied to that layer. Create another mask and the list refreshes on its own.

Wherever an effect references a mask, tweaking that mask shifts where the effect is composited. You might, say, feather the mask or apply per-vertex feathering to reshape the edge of the effect composite. Adjust the opacity and the effect's overall intensity shifts for each and every mask.

Mask modes are also fair play: combine several masks so an effect lands solely on the region where those masks intersect.

### Effect masks and layer masks

The alpha channel of a layer can't be altered by an effect mask, which is precisely why an effect mask won't serve as a layer mask.

### Learn tutorial

Watch this tutorial to pick up how a mask on the layer confines an effect to one specific region, and how properties get changed on a per-mask basis.
