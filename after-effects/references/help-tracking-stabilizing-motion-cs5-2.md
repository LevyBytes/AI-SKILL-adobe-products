# Tracking Stabilizing Motion Cs5 (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Motion tracking options

A tracker — meaning the cluster of track points produced during a single tracking session — is what these settings govern. Reach them by clicking Options inside the Tracker panel.

Track Name

What the tracker is called. Renaming a tracker is also possible by selecting it in the Timeline panel and hitting Enter on the main keyboard (Windows) or Return (macOS).

Tracker Plug-in

Whichever plug-in carries out motion tracking for the tracker. The default reading here is Built-in, the sole tracking plug-in that ships with After Effects.

Channel

Which parts of the image data get compared while hunting for a feature-region match. Reach for RGB when the tracked feature has a distinct color. Reach for Luminance when the tracked feature differs in brightness from what surrounds it (for instance, a lit candle being carried through a room). Reach for Saturation when the tracked feature packs a heavy concentration of color and sits among variations of that same color (for instance, a vivid red scarf set against a brick wall).

Enhance Before Match

Briefly blurs or sharpens the image to aid tracking. Blur cuts noise out of the footage. A setting of 2 to 3 pixels is generally plenty to yield cleaner tracks in grainy or noisy footage. Enhance plays up or tightens an image's edges, which makes them simpler to follow.

Note

The blurring or enhancing that After Effects performs is for tracking purposes only. None of that blurring touches the motion source layer itself.

Track Fields

Briefly doubles the composition's frame rate and interpolates each field up to a full frame, letting you track motion across both fields of interlaced video.

Subpixel Positioning

With this on, keyframes get generated to a precision finer than a whole pixel. With it off, the tracker snaps generated-keyframe values to the closest pixel.

Adapt Feature On Every Frame

Makes After Effects re-fit the tracked feature on a per-frame basis. Rather than searching the search region for the image data captured in the feature region when analysis began, it searches for the image data that occupied the feature region one frame earlier.

If Confidence Is Below

Sets which action runs once the Confidence property value drops under the percentage you've entered.

Note

Figuring out a workable confidence threshold means tracking the motion first, then inspecting the Confidence values for the track point in the Timeline panel on the frames that gave trouble. Enter a confidence value a touch above the highest confidence value among those troublesome frames.

- Pick Continue Tracking to disregard the Confidence value. That's how it behaves out of the box.
- Pick Stop Tracking to bring the motion tracking to a halt.
- Pick Extrapolate Motion to approximate where the feature region is. No attach-point keyframes get made for the low-confidence frames, and any attach-point keyframes left over from earlier tracks on those low-confidence frames get removed.
- Pick Adapt Feature to stick with the originally tracked feature right up until confidence sinks past the threshold you set. From there, After Effects re-fits the tracked feature to whatever fills the feature region on the frame just ahead of the low-confidence one, then keeps tracking. You can't use this option when Adapt Feature On Every Frame is turned on in the Motion Tracker Options dialog box – switching on feature adaptiveness forces After Effects to re-fit the feature region on every frame no matter the confidence level.

Options

Brings up the Tracker Plug-in Options dialog box, home to options for the AE Original Built-in Tracker. You'll only see this command when you've opted to run the older After Effects tracker plug-in.

Note

Showing or hiding motion paths in the Layer panel comes down to checking or unchecking the Display Motion Paths option within the Tracker panel's panel menu. (That panel menu is the one you open from the icon at a panel's upper-right corner.) The same menu also lets you drop in a new track point, surface the current track in the Timeline panel, and switch feature-region magnification on or off.

## Motion tracking properties in the Timeline panel

Every time you click Track Motion or Stabilize Motion within the Tracker panel, a fresh tracker for that layer appears in the Timeline panel courtesy of After Effects. Inside each tracker sit track points — property groups that hold onto the tracking data once tracking has run. For each layer in the Timeline panel, After Effects collects these trackers under the Motion Trackers property group.

Note

Surfacing a tracker in the Timeline panel takes two steps: choose it from the Current Track menu in the Tracker panel, then press SS.

Just as you handle other layer properties and property groups, you can rename trackers and track points and edit or animate their property values right in the Timeline panel. Committing those property edits to the target requires clicking Apply in the Tracker panel.

Feature Center

Where the center of the feature region sits.

Feature Size

The feature region's width and height.

Search Offset

Where the search region's center sits in relation to the feature region's center.

Search Size

The search region's width and height.

Confidence

The property by which After Effects states how sure it is about the match it made on each frame. As a rule, Confidence isn't something you adjust.

Attach Point

The position handed to the target layer or effect control point.

Attach Point Offset

Where the attach point sits in relation to the feature region's center.

## Adjust the track point

Configuring motion tracking frequently calls for fine-tuning your track point by tweaking the feature region, search region, and attach point. Drag with the Selection tool to resize or relocate these items one at a time or as a set. So you can pin down the area you mean to track, the image inside the feature region gets blown up to 400% as you reposition the region.

Track point components and Selection tool pointer icons

A. Search region B. Feature region C. Keyframe marker D. Attach point E. Moves search region F. Moves both regions G. Moves entire track point H. Moves attach point I. Moves entire track point J. Resizes region

Track point components and Selection tool pointer icons

- Flip feature-region magnification on or off by choosing Magnify Feature When Dragging from the Tracker panel menu.
- Shift the feature region, search region, and attach point as a unit by dragging within the track point area (steering clear of the region edges and the attach point) or by tapping the Up, Down, Left, or Right Arrow key. Holding Shift as you press an arrow key moves things in increments 10 times larger.
- Shift just the feature and search regions as a pair by dragging the feature region's edge, or — using the Selection tool within either region — by Alt-dragging (Windows) or Option-dragging (macOS). Another route is to hold Alt (Windows) or Option (macOS) while tapping the Up, Down, Left, or Right Arrow key. Holding Alt+Shift (Windows) or Option+Shift (macOS) as you press an arrow key moves things in increments 10 times larger.
- Shift just the search region by dragging the search region's edge.

Note

Push the search region's center off from the feature region's center along whichever way the tracked feature is heading.

- Shift just the attach point by dragging the attach point.
- Resize the feature or search region by dragging a corner handle.
- Make every side of the region equal to its longest side, sizing it around the region's original center point, by Shift-dragging a corner handle.
- Make every side of the region equal to its longest side, sizing it around one specific corner handle, by Ctrl+Shift-dragging (Windows) or Command+Shift-dragging (macOS) the opposite corner handle.

Note

To pin the track point's movement to either the x (horizontal) or y (vertical) axis while tracking, shrink the search region's height or width down to match the feature region's height or width.

## Apply tracking data to a new target

With a motion source layer already tracked, the tracking data sitting on it can be handed off to as many other target layers and effect control points as you like. As an instance, you could route the track onto a light bulb's position and onto the Lens Flare effect's effect control point.

Within the Tracker panel, pull the tracked layer from the Motion Source menu.

From the Current Track menu, grab whichever track holds the tracking data you're after.

Click Edit Target, followed by the target itself.

Back in the Tracker panel, click the Apply button.

## Correct a motion track

While an image travels through a shot, shifts in lighting, in nearby objects, and in the object's angle can pile up until the formerly clear feature is no longer recognizable at the subpixel level. On top of that, a search region that's too small can let the tracked feature slip past its edges between one frame and the next.

Picking a trackable feature is a skill that develops over time. Drift of the feature region off the intended feature happens even after thorough planning and practice. Resetting the feature and search regions, altering the tracking settings, and giving it another go is all routine in automatic tracking. Nailing one clean track on the first attempt isn't required. Tracking the shot piece by piece may prove necessary, redrawing the feature region wherever the feature shifts and the region wanders. You might even pick a different feature to track — one whose motion lines up closely with the feature you actually want — and lean on the attach point offset to position the target.

Once motion is tracked, every track point carries a motion path in the Layer panel charting where the feature region's center lies. Refining that motion path's keyframes in the Layer panel works the same as it does for any motion path. Editing the motion path pays off most when you mean to hand-tweak the motion tracking data ahead of applying it to a target. Now and then, hand-editing the motion path the tracker produced turns out simpler than chasing a flawless track.

Motion source and its motion path

A. Moving the feature and search regions B. Keyframe marker

Motion source and its motion path

1. Drag the current-time indicator over to the most recent frame that tracked cleanly.
   Using Alt-drag (Windows) or Option-drag (macOS), reposition just the feature and search regions — leaving the attach point alone — onto the right spot.

For a single-frame correction, jump ahead to step 4. For a correction spanning several back-to-back frames, fine-tune the feature region and search region as needed, then click Analyze. Run the tracking back to confirm it's on the mark. Should it miss, click the button once more to halt tracking, reset the feature region, and start over.

Once the track satisfies you, click Apply to commit the keyframes to the target layer or effect control point.

## Correct drifting by modifying tracking settings

1. Drag the current-time indicator over to the most recent frame that tracked cleanly.
   Within the Tracker panel, click Options.

Adjust whatever's needed in the Motion Tracker dialog box.

Within the Tracker panel, click either the Analyze Forward or the Analyze Backward button.

Keep an eye on the tracking to confirm it's on the mark. Should it miss, click the button once more to halt tracking, tweak the settings, and start over.

Once the track satisfies you, select Apply to commit the keyframes to the target layer or effect control point.

## Stabilize motion with the Warp Stabilizer VFX effect

The Warp Stabilizer effect is one way to steady motion. By stripping out the jitter that camera movement introduces, it can turn shaky handheld footage into smooth, stable shots. For details on stabilizing motion with the point tracker, refer to Tracking and stabilizing motion.

As a step up from the Warp Stabilizer, the VFX version brings the option to pick which objects in a scene are stabilized.

## Stabilize with the Warp Stabilizer effect

Here's how to steady motion using the Warp Stabilizer effect:

Pick out the layer that needs stabilizing.

Take any one of these routes:

Inside After Effects, head to the Effects & Presets panel > Distort, then drop the Warp Stabilizer onto the layer.

The moment the effect lands on the layer, the footage starts being analyzed in the background. As that analysis kicks off, the Composition panel shows the first of two banners to signal that analysis is underway. Once it finishes, a second banner reports that stabilization is now running.

Throughout these stages you're welcome to keep working with the footage or anywhere else in the project.

## Warp Stabilizer / settings

Analyze

Clicking this button isn't required when you first drop Warp Stabilizer on — it gets clicked automatically for you. The Analyze button stays grayed out until something shifts. That could be an adjustment to a layer's In or Out points, or an upstream change to the layer source. Click the button to run the footage through analysis again.

Note

Any masks or effects applied straight onto that same layer are ignored during analysis. If you want them analyzed, pre-compose them and drop them into the upstream composition.

Cancel

Stops an analysis that's running. While analysis proceeds, status details show up beside the Cancel button.

Stabilization

The Stabilization settings let you fine-tune how stabilization is carried out.

Result

Sets the goal for the footage (Smooth or No Motion).

Smooth motion (default): Keeps the camera's original movement but evens it out. Choosing it enables Smoothness, which governs just how smooth that camera movement gets.

No Motion: Tries to strip every bit of camera motion out of the shot. Choosing it disables the Crop Less <-> Smooth More function over in the Advanced section. Save this setting for footage where at least some of the main subject stays inside the frame across the whole range being analyzed.

Smoothness

Sets how heavily the camera's original motion gets stabilized. Lower values hug the camera's original motion, whereas higher values come out smoother. Anything past 100 demands heavier cropping of the image. It's enabled once Result is set to Smooth Motion.

Method

Names the most involved operation Warp Stabilizer will run on the footage to stabilize it:

Position Tracking leans on position data alone and is the simplest route to stabilizing footage.

Position, Scale And Rotation Stabilization leans on position, scale, and rotation data. Should there be too few areas to track, Warp Stabilizer falls back to the prior type (Position).

Perspective Applies a stabilization in which the whole frame ends up effectively corner-pinned. Should there be too few areas to track, Warp Stabilizer falls back to the prior type (Position, Scale, Rotation).

Subspace Warp (default) Tries to warp different sections of the frame in different ways so the entire frame is stabilized. Should there be too few areas to track, Warp Stabilizer falls back to the prior type (Perspective).

Across one clip, the method at work on any given frame may shift depending on how accurate the tracking is.

Note: Subspace Warp can sometimes bring on unwanted warping, and Perspective can sometimes bring on unwanted keystoning. Heading off these anomalies is a matter of picking a simpler method.

Preserve Scale

Once enabled, it stops the Warp Stabilizer from attempting to offset forward and backward camera moves through scale changes.

Borders

The Borders settings control how the borders — that is, the moving edges — get handled on footage that's been stabilized.

Framing

Governs how the edges turn out in a stabilized result. Framing accepts any one of these:

- Stabilize Only: Shows the whole frame, the moving edges included. Stabilize Only reveals just how much effort goes into stabilizing the image. Going with Stabilize Only leaves you free to crop the footage by other means. Choosing it disables the Auto-scale section along with the Crop Less <-> Smooth More property.
- Stabilize, Crop: Trims the moving edges but doesn't scale. Stabilize, Crop matches what you'd get from Stabilize, Crop, Auto-scale with Maximum Scale set to 100%. Turning it on disables the Auto-scale section, though the Crop Less <-> Smooth More property stays enabled.
- Stabilize, Crop, Auto-scale (default): Trims the moving edges and scales the image back up to fill the frame again. Properties within the Auto-scale section drive that automatic scaling.
- Stabilize, Synthesize Edges: Plugs the empty space left by the moving edges with material drawn from earlier and later frames (governed by Synthesizes Input Range in the Advanced section). Picking it disables the Auto-scale section along with Crop Less <-> Smooth More.

Note

Artifacts can crop up wherever there's edge-of-frame movement that has nothing to do with camera movement.

Auto-scale

Shows the auto-scale amount in effect and lets you cap how much auto-scaling occurs. Switch Auto-scale on by setting framing to Stabilize, Crop, Auto-scale.

- Maximum Scale: Caps how far a clip can be scaled up for stabilization.
- Action-Safe Margin: A non-zero value carves out a border around the image's edge that you figure won't be seen, so auto-scale leaves it alone rather than filling it.

Additional Scale

Scales the clip up with the same outcome as scaling through the Scale property under Transform, yet sidesteps an extra resampling pass on the image.

Advanced

Detailed Analysis

Switched on, it pushes the next Analysis phase to put in extra effort locating elements to track. The data that comes out (held in the project as part of the effect) runs much larger and slower with this turned on.

Rolling Shutter Ripple

Rippling that comes with stabilized rolling shutter footage gets removed by the stabilizer on its own. Automatic Reduction is the default. Switch to Enhanced Reduction when the footage carries bigger ripples. Either method calls for setting the Method to Subspace Warp or Perspective.

Crop Less <-> Smooth More

During cropping, this balances smoothness against the scaling of the cropping rectangle as it travels over the stabilized image. Lower values stay smooth, yet more of the image shows. Set to 100%, the outcome matches the Stabilize Only option paired with manual cropping.

Synthesis Input Range (seconds)

Drawn on by Stabilize, Synthesize Edges framing, it governs how far back and ahead in time the synthesis reaches to plug any missing pixels.

Synthesis Edge Feather

Sets how much feather goes on the synthesized pieces. It's only enabled while you're using the Stabilize, Synthesize Edges framing. Lean on the feather control to ease over the edges where synthesized pixels meet the original frame.

Synthesis Edge Cropping

Pares the edges off each frame before that frame is blended with others under the Stabilize, Synthesize Edges framing option. Lean on the cropping controls to shave away bad edges that often show up in analog video capture or with low-quality optics. By default, every edge sits at zero pixels.

Objective

Sets what the effect is aiming for: steadying a shot, steadying it temporarily for visual effects work, or dropping a layer into a shaky scene. Pick an objective:

- Stabilize The default pick for ordinary stabilization
- Reversible Stabilization and Reverse Stabilization Reach for these to apply an effect to a region. Run two copies of the Warp Stabilizer VFX effect — one set to Reversible Stabilization to steady a shaky object, and a duplicate set to Reverse Stabilization to put the shake back, so any effects you add after Reversible Stabilization show up inside the original scene.
- Apply Motion to Target and Apply Motion to Target over Original Reach for these to drop a layer into a shaky scene by transferring the stabilized motion onto another layer.

Target Layer

Pick the layer that the stabilized motion is transferred to via the Apply Motion to Target or Apply Motion to Target over Original options.

Track Point Size

Sets how large the displayed track points appear

Auto-delete Points Across Time

Deleting track points in a composition panel also wipes the matching track points on that same object at other times on the layer. There's no need to clear the track points out frame by frame yourself.

Hide Warning Banner

Reach for this when you'd rather not reanalyze footage even though a warning banner says it has to be reanalyzed.

### Warp Stabilizer workflow tips

Apply Warp Stabilizer.

As the Warp Stabilizer effect analyzes your footage, feel free to tweak settings or turn to another part of your project.

Pick Stabilization > Result > No Motion to wipe out camera motion entirely. Pick Stabilization > Result > Smooth Motion to keep a measure of the original camera movement in the shot.

A good result means stabilization is finished. Otherwise, try one or more of these:

Should the footage come out too warped or distorted, change the Method to Position, Scale, Rotation.

Should occasional rippled distortions show up and the footage came from a rolling shutter camera, set Advanced > Rolling Shutter Ripple to Enhanced Reduction.

Give Advanced > Detailed Analysis a try.

Should the result come out too cropped, dial back either Smoothness or Crop Less <-> Smooth More. Crop Less <-> Smooth More reacts far quicker since it skips the need for a restabilize phase.

When you'd like a sense of how much work the stabilizer is really putting in, set the Framing to Stabilize Only.

With Framing set to one of the cropping options and the cropping growing extreme, a red banner shows up reading, "To avoid extreme cropping set Framing to Stabilize Only or adjust other parameters." When that happens, you can either switch Framing to Stabilize Only or to Stabilize, Synthesize Edges. You might instead lower the Crop Less <-> Smooth More value or lower Smoothness. Or, if the results suit you, turn on the Hide Warning Banner option.

### More like this

- Expression basics
- Camera-Shake Deblur effect
- Scale or flip a layer
- Motion paths
- Tracking 3D Camera Movement | CC, CS6
