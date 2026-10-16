# Roto Brush & Refine Matte effect properties

Inside the Propagation property group, the Roto Brush & Refine Edge effect properties shape the segmentation dividing foreground from background and govern how that segmentation data gets applied to neighboring frames in a span. The Roto Brush effect's remaining properties act on the matte built from that first segmentation. Every property the Roto Brush effect holds outside the Propagation property group also belongs to the Refine Edge Matte effect (Invert Foreground/Background aside).

Pick from the Roto Brush versions - 1.0 (Classic), 2.0, or 3.0.

Option to select and switch between different Roto Brush versions.

With version 2.0 chosen, set how much edge detail you want. Standard runs faster and carries somewhat less detail along the edges; Best gives you edges that are properly refined.

Option to select and switch between different Roto Brush Quality.

Every Roto Brush calculation answers to the properties in the Propagation property group (View Search Region excepted). Touch any of them and the segmentation data has to be recomputed and propagated afresh from a base frame. The base frame's own results, though, don't budge when these properties change — so it pays to adjust them while the current-time indicator sits a frame or two off a base frame, where you can actually watch the change take effect.

Enable Roto Brush Classic controls in the Timeline panel.

- Search Radius: How big an area After Effects scans, frame to frame, hunting for matching pixels. The Motion Threshold and Motion Damping properties let you tune how that radius adjusts to busier or calmer regions. Set the radius too small and some motion slips by; set it too large and stray motion gets picked up.

- View Search Radius: Switch this on and a green box wraps the subject, marking where the Roto Brush algorithm is scanning for it. Should the subject leave that frame, the Roto Brush & Refine Edge effect is lost. Push the percentage higher to span the whole area — slower, but it's more accurate and reaches farther.

  - Motion Threshold and Motion Damping: (on by default in Roto Brush 1, and available once you switch on classic controls in Next-Gen Roto Brush and 2). This pair governs how motion reins in the search region. Use Motion Threshold to fix the motion level under which there's deemed to be no motion, where the search region collapses to nothing. Motion Damping works on whatever's left that counts as moving. Crank Motion Damping up and the search region cinches in, slow-moving areas tightening more than fast-moving ones. Reining the search region in around faintly moving areas can cut edge chatter there. Rein it in too far, though, and the automatic boundary detection slides right off the object's edge.
  - Edge Detection: Decide whether to lean on the segmentation boundary figured for the current frame alone or the one figured from the previous frame when settling the edge between foreground and background. The Balanced option weighs the current frame and its neighbors the same. Foreground objects whose colors echo the background tend to come out better with Favor Predicted Edges.
  - Use Alternate Color Estimation: Nudges, ever so slightly, how the Roto Brush effect decides foreground from background. Ticking it sometimes sharpens the segmentation, and sometimes it does nothing.

Swaps which strokes count as foreground strokes and which count as background strokes during the segmentation phase of the Roto Brush & Refine Edge effect.

Reach for this to refine edges, cut chatter, shift edges, work the contrast, and feather the selection.

Feather

Sets how soft the segmentation boundary is.

Contrast

Raise the contrast (handy for cinching the boundary in further).

Shift Edges

Push the segmentation boundary outward (positive value) or pull it inward (negative value).

Reduce Chatter

You see chatter when your segmentation boundary's edges jitter around. Reduce Chatter quiets that visible noise along the segmentation boundary's edges and hands you cleaner ones.

Render Refine Edge lets you preview the refined edge of your Roto Brush results, working on base frames and propagated frames alike.

Base Refine Edge Radius stretches the area of the refined edges you've already laid down with the Refine Edge Roto Brush tool. Reach for it to widen that area whenever you've worked with too small a brush, helping After Effects figure out the refined edges from frame to frame.

Switch on Fine-tune Refine Edge Matte to unlock options for fine-tuning the edges you built with the Refine Edge Tool.

Smooth

Raising this softens the sharpness of the segmentation boundary's curves by smoothing along the edge. Keep the number low when you're isolating something with crisp features such as hair.

Feather

How soft the segmentation boundary is. It has no effect at all when Smooth is 0. Unlike Smooth, Feather works across the edge.

Contrast

Raise the contrast (handy for cinching the boundary in further).

Shift Edges

Push the segmentation boundary outward (positive value) or pull it inward (negative value).

Reduce Chatter

Turn this up to settle erratic frame-to-frame edge changes. The property sets how much weight the current frame carries in the weighted average taken across adjacent frames that keeps the matte edges from jittering frame to frame. A high Reduce Chatter value means strong chatter reduction and less stock placed in the current frame. A low value means weak chatter reduction and more stock placed in the current frame. At 0, only the current frame factors into the matte refinement.

Tip

If your foreground object holds still while the matte edges drift and shift, raise the Reduce Chatter value. If the foreground object moves while the matte edge stays put, lower the Reduce Chatter value.

Tick this option to render the matte carrying motion blur. The high-quality choice runs slower but turns out a cleaner edge. You also get a handle on the sample count and the shutter angle, which carry the same sense here as they do for motion blur in the composition settings.

Extend Where Smoothed

Live only when Reduce Chatter sits above 0 and Decontaminate Edge Colors is on. Edges nudged to cut chatter get cleaned.

Increase Radius

(Called Increase Decontamination Radius in Roto Brush 1): How many pixels to add to the radius used for cleaning edge colors, layered on top of whatever cleaning already spans feather, motion blur, and extended decontamination.

View Map

(Called View Decontamination Map in Roto Brush 1): Reveals which pixels edge-color decontamination will clean (the white pixels in the map).

Set the View menu in the Layer panel to Roto Brush and a Freeze button shows up in the Layer panel's lower-right corner. Hit it to cache and lock segmentation for every Roto Brush span on the layer inside the composition work area. That keeps the matte and stores it with the project, so the Roto Brush effect won't recompute the segmentation when you reopen the project or make edits.
