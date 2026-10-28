# Use frame-level adjustments

Frame-level edits let you move or reshape a mask on selected frames, with keyframes created for you. This is useful for manual mask work or for polishing motion that is difficult to track.

Example: Tracking by hand

Draw a mask around the object.

Confirm that Frame mode is active. Move the play head ahead by a few frames.

Reposition the mask so it stays with the object.

Continue the process until the entire clip has been covered.

Each adjustment adds keyframes in the Effect Controls panel.

While you adjust the mask, those keyframes appear in the Transform section of the Effect Controls panel. This keeps tracker data separate from Transform changes. The tracker and transform values are combined to produce the mask's final position.

Note

Earlier Premiere releases changed Position, Scale, and Rotation keyframes directly when tracking. That approach made post-tracking mask edits hard to manage. The newer method gives you much more room to refine the result.
