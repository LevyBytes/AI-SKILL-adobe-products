# Tracking Stabilizing Motion Cs5 (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 24, 2026

### See how the motion tracking and stabilization tools in Adobe After Effects analyze movement, let you dial in precise adjustments, and smooth out composition workflows for steadier visuals and faster editing.

Motion tracking follows an object's movement and then hands that movement data to another object — a different layer or an effect control point, for example — so that images and effects ride along with the motion in your compositions. It also supports stabilization, where the same tracking data instead animates the tracked layer to counteract an object's movement within it. Expressions let you tie properties to tracking data, which unlocks a broad range of possibilities.

The way After Effects tracks motion is by matching image data from a chosen region of one frame against the image data in every frame that follows. That same tracking data can feed different layers or effects, and a single layer can have several objects tracked within it.

Note

- Tracking camera motion and dropping 3D objects into 2D footage is far simpler in After Effects thanks to the 3D camera tracker.
- The Warp Stabilizer makes smoothing out shaky footage much easier.

## Uses for motion tracking and stabilization

Motion tracking serves a wide range of purposes. A few illustrations:

Merging footage shot at different times — for instance, dropping video onto the flank of a city bus in motion, or placing a star at the tip of a wand as it sweeps through the air.

Driving a static image so it travels in step with live action, like a cartoon bumblebee perched on a flower that sways back and forth.

Making an effect ride along with something that moves, so that, say, a rolling ball carries a glow with it.

Tying a tracked object's position to additional properties — for example, sweeping a stereo audio signal from left to right while a car streaks across the frame.

Pinning a moving subject in place within the frame, which helps when you need to study how that subject evolves over time — a common need in scientific imaging.

Pinning footage so the jolts and camera shake of a handheld shot are taken out.

Note

The encoder you choose can let you shrink the size of the finished output by stabilizing footage that moves. Erratic movement — the kind a handheld camera produces — tends to defeat many compression algorithms when they try to compress your video.

## Motion tracking user interface and terminology overview

Setup, kickoff, and application of motion tracking all happen from the Tracker panel. Open it through Windows > Tracker.

Tracking properties behave like any other property: the Timeline panel is where you edit, animate, organize, and link them.

The regions you want followed are marked by placing track points in the Layer panel. A feature region, a search region, and an attach point make up each track point, and a group of track points together forms a tracker.

Layer panel with track point

A. Search region B. Feature region C. Attach point

Layer panel with track point

Feature region

What gets followed inside the layer is set by the feature region. Wrap it around a clearly recognizable visual element — ideally a single real-world object. Across the whole length of the track, After Effects has to keep recognizing that feature even as lighting, backdrop, and angle shift.

Search region

The patch that After Effects scans to find the tracked feature is the search region. Distinctiveness only has to hold within that region rather than across the full frame. Keeping the region small trims the search time and eases the process, though it carries the danger that the feature slips out of the region between one frame and the next.

Attach point

Where the target hooks on — the layer or effect control point that follows the moving feature in the tracked layer — is marked by the attach point.

Note

As soon as you start tracking, After Effects switches the motion source layer's quality to Best and its resolution to Full inside the Composition and Layer panels; this sharpens the tracked feature and turns on subpixel processing and positioning.

For position, After Effects relies on a single track point; scale and rotation call for two; and corner pinning uses four.

Tip

Mocha Essentials, a no-cost video training series from Boris FX, walks you through everything about Mocha AE and Planar Motion Tracking.

## Planar Tracking with Mocha AE

Bundled with After Effects is the Mocha AE plug-in from Boris FX — GPU-accelerated and built for Multi-Frame Rendering. Reach for it on demanding tracking shots, including those with motion blur or with objects that travel off-screen. By default it appears in the Essentials workspace and exposes only the core tools. The advanced features such as AdjustTrack become available once you pick Workspace > Classic after starting Mocha AE.

Pick a footage layer in your composition, then choose Effect > Boris FX Mocha > Mocha AE.

Click the Mocha logo in the Effect Controls panel to bring up the interface.

A second route: with a layer chosen in your composition, apply Mocha AE through Animation > Track in Boris FX Mocha.

A video covering more of what Mocha AE can do is available to watch.

Note

Mocha is also runnable in Premiere by way of the Mocha Pro plug-in. For details on Mocha Pro and capabilities like PowerMesh, Remove Module, and Lens Correction, consult Boris FX.

## Applying Mocha AE data in After Effects

There are several ways the Mocha AE data can serve you back inside After Effects:

- Swap screens with proper perspective by means of corner pin animation.
- Drive Position, Scale, and Rotation animation for general-purpose motion tracking.
- For rotoscoping, turn Mocha AE tracked splines into After Effects masks.

Once tracking wraps up in Mocha AE, return to After Effects.

Within the Effects Control panel, beneath Tracking Data, choose Create Track Data.

From the Export Option dropdown menu, pick either Corner Pin or Transform.

Apply Export to the layer you selected.

## Do more with Mocha AE

- Turning a Mocha AE layer into a native After Effects mask is done in the Effects Control panel under Matte by choosing Create AE Masks; this route disregards Mocha's Edge Feathering.
- Treating a Mocha spline as an alpha-driven matte happens after the Mocha AE effect is applied: in the Effects Control panel under Matte, choose Apply Matte, which does honor Mocha's Edge Feathering.

Note

- Spline shapes from Mocha AE can be converted by the Mocha AE plug-in into either rasterized mattes for After Effects layers or native After Effects masks. For more information, refer to Resources for Mocha AE Masking.
- To learn more about Mocha AE, refer to the Mocha Essentials video series and Mocha user guide.

## Motion tracking workflows

After Effects offers numerous approaches to motion tracking, and which method and workflow suit you best comes down to what your clip looks like and what it is you intend to track.

## Mask tracker

Reach for the mask tracker when you want to draw masks around an object so that only chosen objects in your scene get tracked.

## Face tracker

Basic mask tracking is a fast way to confine effects to a face alone — think selective color correction, blurring out someone's face, and similar tasks.

Face Tracking goes further by letting you follow individual parts of the face, including the pupils, mouth, and nose, so you can isolate those features and refine them with much finer control. As an example, recolor the eyes or amplify mouth movement without touching things frame by frame.

## 3D Camera tracker

Reach for the 3D camera tracker effect when you need to study video sequences and pull out camera motion together with 3D scene data. With that in hand, you can accurately layer 3D elements on top of your 2D footage.

## Point tracker

A clip lets you follow either a single reference feature or several at once:

One-point tracking: Follow one reference pattern — a tiny cluster of pixels — across a movie clip to capture position data.

Two-point tracking: Follow two reference patterns in a movie clip; the relationship between the pair yields position, scale, and rotation data.

Four-point tracking or Corner pin track: Follow four reference patterns in a movie clip to capture position, scale, and rotation data. Working from the relationship among four reference patterns — say, the corners of a picture frame or television monitor — the four trackers feed data to each corner of an image or clip, "pinning" it so the clip looks locked inside that picture frame or television monitor.

- Multiple-point tracking: Follow as many reference patterns in a clip as you want. Trackers can be added by hand inside the Analyze Motion and Stabilize behaviors. Applying a Track Points behavior from the Shape behaviors subcategory onto a shape or mask automatically attaches a tracker to each shape control point.

For detailed instructions on using the point tracker, see Tips for using the point tracker.

## Warp stabilizer VFX

The Warp Stabilizer effect is your route to stabilizing motion. By stripping out the jitter that camera movement introduces, it lets you turn shaky, handheld footage into steady, smooth shots.

## Set up the shot

Smooth motion tracking starts with having a solid feature to follow — ideally a distinctive object or region.

You'll get the best outcome by preparing the object or region you mean to track before the shoot even begins. Since After Effects builds an accurate track by comparing image data across consecutive frames, fastening high-contrast markers onto the object or region helps it trace the movement more readily from one frame to the next. Brightly colored, lightweight balls — ping-pong balls, for instance — set on the feature do the job nicely, partly because they look identical from every angle. How many markers you place matches how many points you intend to track. Say you're tracking four points with the Perspective Corner Pinning option: you'll track four features lined up with the four corners of the layer you're attaching. Loading your subject with more markers ahead of the shoot gives you more features to track — but also more items you might later need to take out of the image with the Clone Stamp tool. Where a distinctive object or region already sits in the right spot, there's no need to add a marker for that feature.

When the thing you're tracking is large — a sizable object or the entire set, as with match-moving — laying down a grid of evenly spaced, uniformly sized triangles as tracking markers can deliver good results.

## Add the appropriate number of track points

Pick a mode from the Track Type menu in the Tracker panel and After Effects drops the right number of track points into the Layer panel for that mode. Should you want one tracker to follow extra features, you can add further track points yourself.

## Select features to track, and place feature regions

Play through the shot from start to finish before tracking so you can spot which features track best. Something easy to pick out in the opening frame can later merge into the backdrop once the angle, lighting, or nearby elements shift. A tracked feature might slide off the frame's edge or get hidden behind another element somewhere in the scene. After Effects can extrapolate a feature's motion, yet stepping through the whole shot to pick the strongest candidates gives you the best odds of a clean track.

These traits mark a good tracked feature:

Stays visible across the entire shot

Color that stands apart from its surroundings inside the search region

A shape that reads as distinct within the search region

Shape and color that hold steady the whole shot through

## Set the attach point offset

Wherever the target layer or effect control point ends up is governed by the attach point. By default it sits at the center of the feature region. To shift the target away from the tracked feature's position, drag the attach point in the Layer panel before you track, which offsets it.

Suppose you want a cloud to float over someone's head: drop the feature region on the head and drag the attach point up above it. Leave the attach point at the center of the feature region instead, and the cloud would lock to that spot and cover the head.

Attach point centered in feature region

Attach point centered in feature region Attach point offset from feature region

Attach point offset from feature region

## Adjust the feature region, search region, and tracking options

Set each feature region control snugly around the feature it tracks — enclose the feature completely while taking in as little of the surrounding image as you can.

How big the search region is and where it goes hinge on how the feature you're tracking moves. The region has to allow for that movement, but only frame to frame, not across the whole shot. Each time After Effects pins down the tracked feature in a frame, both the feature region and the search region shift to the new spot. So when the feature drifts gradually between frames, the search region only needs to be a touch larger than the feature region. When the feature shifts position and heading fast, the search region has to be roomy enough to take in the biggest change of position and direction across any two adjacent frames.

You can additionally configure tracking options that govern which color channels get compared when matching the feature region.

## Analyze

The tracking itself runs when you click one of the Analyze buttons in the Tracker panel. With an awkward set of features, advancing a single frame at a time during the analysis can help.

## Repeat as necessary

An image in motion keeps changing, so automatic tracking almost never comes out flawless. As footage moves, a feature's shape shifts alongside the lighting and the objects around it. Even with thorough prep, a feature usually changes over a shot and eventually stops matching how it first looked. Let that change grow too large and After Effects may lose the ability to track it, leaving the track point to wander or drift.

Once the analysis starts breaking down, go back to the last frame where the track held up and run the adjust-and-analyze cycle again.

## Apply tracking data

With any Track Type setting besides Raw, you apply tracking data by clicking Apply once you've confirmed that the right target appears for Motion Target. For data from a Raw tracking operation, you instead copy keyframes from the trackers onto other properties, or wire properties together with expressions.

You're also free to tweak the Attach Point or Attach Point Offset property in the Timeline panel after tracking — handy when you're feeding the same tracking data to several targets that you want spread out around the tracked feature.

Note

- When the layer you're attaching has motion blur turned on, set the Shutter Phase value to -1/2 times the Shutter Angle value. That pairing centers the motion blur over the attach point; without it, the attached object can seem to run ahead of or trail behind whatever it's attached to.
- Another option is to apply the tracking data onto a null object layer, then parent the layer you want animated to that null object layer.

## Track or stabilize motion with the point tracker

Under the hood, tracking motion and stabilizing motion run the same process — what differs is the target and the outcome. Track Motion follows the motion and hands the result to a separate layer or effect control point. Stabilize Motion follows the motion and applies the result back onto the tracked layer to cancel that motion out (removing camera shake, for example).

Stabilizing a layer works like this: After Effects tracks a feature that ought to stay put in the frame, then uses that tracking data to lay down keyframes that drive the opposite motion. You can cancel out any mix of position, rotation, and scale changes while leaving the motion you want to keep intact. If the camera is panning, for instance, leave Position deselected but turn on Scale and Rotation as the properties to stabilize.

Choosing Rotation or Scale in the Tracker panel gives you two track points in the Layer panel. The attach points are joined by a line, with an arrow running from the first attach point (the base) to the second. Where you can, set the feature regions on opposite faces of one object, or at minimum on objects sitting the same distance from the camera. Greater separation between the regions sharpens the calculations and improves the outcome.

Rotation is worked out by After Effects from how much the angle of the line between the attach points changes. Applying that tracking data to the target makes After Effects build keyframes for the Rotation property.

Scale is worked out by After Effects by weighing the distance between attach points on each frame against their distance on the start frame. Applying that tracking data to the target makes After Effects build keyframes for the Scale property.

Track motion with either parallel or perspective corner-pinning and After Effects lays down keyframes for the Corner Pin effect on the layer, scaling and skewing the target layer however it must to fill the four-sided area marked out by the feature regions. Those feature regions ought to sit in one plane in the real world — on the side of a bus, on a single wall, or on the floor, say. The attach points should likewise share a single plane, though not necessarily the same plane the feature regions occupy.

Note

For parallel corner-pinning only – To switch which point sits inactive, Alt-click (Windows) or Option-click (macOS) on the feature region of whichever point you want made inactive. (Keeping the lines parallel requires one point to stay inactive.)

In the Timeline panel, highlight the layer you intend to track.

- Hit Track Motion in the Tracker panel (or choose Animation > Track Motion), then use Edit Target to pick the target that the tracking data will feed.

- Hit Stabilize Motion in the Tracker panel (or choose Animation > Stabilize Motion). Here the tracked (source) layer doubles as the target layer.

Tick Position, Rotation, and/or Scale to decide which kinds of keyframes the target receives.

4. Drag the current-time indicator onto whichever frame you want tracking to start from.
   With the Selection tool, fine-tune the feature region, search region, and attach point on each track point.

In the Tracker panel, click either Analyze Forward or Analyze Backward to start tracking.

Should the tracking drift out of accuracy, click the Stop button, fix the issue as laid out in Correct a motion track, and pick the analysis back up.

Once the feature region and attach point hold their positions across the whole track to your satisfaction, click Apply to push the motion onto the target you specified.

After Effects creates keyframes for the target layer.

When you track position and hand that position data to a target, you can opt to apply only the x (horizontal) component of motion or only the y (vertical) one. For instance, applying the tracking data to the x axis keeps a speech bubble (the motion target) pinned at the top of the frame even as the actor (the motion source) drops downward.

X And Y (default): movement is permitted on both axes.

X Only: the motion target is held to horizontal movement alone.

Y Only: the motion target is confined to vertical movement.

If you'd rather skip the Motion Tracker Apply Options dialog box and reuse whatever setting you applied last, keep Alt (Windows) or Option (macOS) pressed while clicking Apply.

Note

Steps 1-3 can be reordered: pick the destination property first (Scale, Position, or Rotation), then run Animation > Track This Property. At that point After Effects asks which layer should serve as the motion source.

Stabilizing a layer can backfire — the corrective motion sometimes pushes the layer so far one way that the composition's background peeks through or the action slips outside the action-safe zone. A modest scale tweak on the layer fixes that. Locate the worst frame, then raise or lower the layer's scale until the issue clears up. Doing it this way holds the scale steady for the whole layer; alternatively, animate the scale so it zooms in and out at separate moments to address the same problem.

## Motion tracking controls

Setup, launching, and applying of motion tracking all happen through the Tracker panel.

Motion Source

This is the layer holding the motion you intend to track.

Note

A layer shows up in the Motion Source menu when it either carries source footage items capable of holding motion or is itself a composition layer. Precomposing a layer is one way to get it to appear in the Motion Source menu.

Current Track

The tracker that's currently active. Pick any tracker from this menu whenever you want to change its settings.

Track Type

This is the tracking mode you'll work in. Each mode runs the identical tracking engine underneath; what sets them apart is the count of track points and the way tracking data lands on the target:

Stabilize follows position, rotation, and/or scale so it can counteract motion in the tracked (source) layer. Following position here yields one track point and writes Anchor Point keyframes onto the source layer. Following rotation here yields a pair of track points and writes Rotation keyframes onto the source layer. Following scale here yields a pair of track points and writes Scale keyframes onto the source layer.

Transform follows position, rotation, and/or scale in order to drive some other layer. Following position under this mode drops one track point on the tracked layer plus Position keyframes for the target. Following rotation under this mode drops a pair of track points on the tracked layer plus Rotation keyframes for the target. Following scale under this mode drops a pair of track points plus Scale keyframes for the target.

Parallel Corner Pin tracks skew and rotation while leaving perspective alone; lines that start parallel stay parallel, and the relative distances hold. It draws on three track points in the Layer panel—deriving the fourth on its own—and writes keyframes for four corner points within a Corner Pin effect property group that gets attached to the target. Where those four corner points sit is marked by the four attach points.

Perspective Corner Pin tracks skew, rotation, plus perspective shifts within the tracked layer. It draws on four track points in the Layer panel and writes keyframes for four corner points within a Corner Pin effect property group that gets attached to the target. Where those four corner points sit is marked by the four attach points. Reach for this option when pinning an image onto a door as it opens or onto the flank of a bus as it rounds a corner.

Raw tracks position by itself. Turn to Raw when you need tracking data that won't be committed with the Apply button. As an instance, you might copy the Attach Point property keyframes and paste them onto the Position property of a paint stroke, or wire the Stereo Mixer effect's properties to the Attach Point property's x coordinate by way of expressions. The tracked layer is where this tracking data lives. With this tracking option, neither the Edit Target button nor the Apply button can be used. To pile more track points onto a tracker, pick New Track Point off the Tracker panel menu.

Motion Target

Whichever layer or effect control point the tracking data gets applied to. To move or steady it, After Effects attaches properties and keyframes to the target. Switch which target is used by clicking Edit Target. When Track Type is set to Raw, a tracker has no target tied to it.

Analyze buttons

Kicks off the frame-by-frame analysis of the track point inside the source footage:

Analyze 1 frame backward : Looks at the current frame by stepping back to the prior frame.

Analyze backward : Works from the current-time indicator back toward the start of the trimmed layer duration.

Analyze forward : Works from the current-time indicator forward to the close of the trimmed layer duration.

Analyze 1 frame forward : Looks at the current frame by stepping ahead to the following frame.

Note

Once analysis starts, the Analyze backward and Analyze forward buttons turn into a Stop button so you can halt the analysis the moment the track drifts or breaks down.

Reset

Returns the feature region, search region, and attach point to where they sit by default and clears the tracking data off the track that's currently selected. Whatever tracker control settings and keyframes you've already committed to the target layer stay put.

Apply

Pushes the tracking data, expressed as keyframes, over to the target layer or effect control point.
