# Apply single-sided transitions

Use single-sided transitions when a scene change should not affect the neighboring clip.

Most transitions are double-sided because they span both clips at the edit. A single-sided transition attaches to just one clip, which helps when clip handles are unavailable.

Use single-sided transitions to change scenes while leaving adjacent clips unaffected.

Single-sided transitions give you more direct control over the way one clip changes into another.

For example, one clip can leave with the `Venetian Blinds` transition while the following clip appears with `Cross Dissolve`.

In the Timeline panel or the Effect Controls panel, double-sided transitions show a dark diagonal line. Single-sided transitions are diagonally divided, with one half dark and the other half light.

Choose single-sided or double-sided behavior to control the timeline connection between clips.

A. Double-sided transition B. Single-sided transitions

Choose either a single-sided or double-sided transition depending on how the clips should connect on the timeline. To add a single-sided transition, use these steps:

In the Effects panel, locate the transition to apply. Expand the `Video Transitions` bin or `Audio Transitions` bin, then expand the bin that contains the desired transition.

Apply a video transition from the Effects panel when creating a single-sided transition.

For a single-sided transition, apply the video transition from the Effects panel.

To place a transition on one cut, Ctrl + drag on Windows or Command + drag on macOS from the Effects panel into the Timeline panel. Release the mouse when either the `End at Cut` icon or the `Start at Cut` icon appears.

- End at Cut icon: sets the transition so its end matches the end of the first clip.
- Start at Cut icon: sets the transition so its beginning matches the beginning of the second clip.

Preview the transition by playing the sequence or by moving the current-time indicator through that section.

Note

To put a transition at the end of a clip that has no adjacent clip, drag and drop the transition normally. Do not use Ctrl + drag on Windows or Command + drag on macOS. Premiere automatically treats that transition as single-sided.
