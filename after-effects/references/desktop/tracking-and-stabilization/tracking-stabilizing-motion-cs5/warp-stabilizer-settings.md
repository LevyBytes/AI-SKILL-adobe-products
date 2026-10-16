# Warp Stabilizer analysis and stabilization

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

Related references:

- [Warp Stabilizer borders and framing](warp-stabilizer-framing.md)
- [Warp Stabilizer advanced and motion-transfer controls](warp-stabilizer-advanced-controls.md)
