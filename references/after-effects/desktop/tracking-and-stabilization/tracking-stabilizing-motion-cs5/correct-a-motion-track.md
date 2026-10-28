# Correct a motion track

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
