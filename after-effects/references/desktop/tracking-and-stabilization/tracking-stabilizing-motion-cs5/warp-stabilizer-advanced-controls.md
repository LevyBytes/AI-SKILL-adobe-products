# Warp Stabilizer advanced and motion-transfer controls

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

Related: [Warp Stabilizer analysis and stabilization](warp-stabilizer-settings.md).
