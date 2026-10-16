# Adjust automation with keyframes

Envelope-line keyframes drive clip and track parameter changes over time. Adobe Audition fills in, or interpolates, the values that fall between keyframes by using either transition method:

Hold transitions: values jump abruptly when each new keyframe is reached.

Linear transitions: values move in a steady, gradual way from one keyframe to the next.

Spline curves can also be applied to a full envelope. That choice overrides the per-keyframe transition setting above and produces natural-sounding movement whose speed changes around each keyframe. (See About spline curves for graphs.)

Transitions between keyframes

A. Hold B. Linear (the default) C. Spline curves

Transitions between keyframes

Add a keyframe

Do either of the following:

Move the pointer over an envelope line; click when a plus sign appears.

After setting the playhead at the parameter change time, use the track controls' Add Keyframe icon.

Navigate between track keyframes

At the bottom of the track controls in the Editor panel, use Select to pick the parameter.

Use the Previous Keyframe icon or the Next Keyframe icon.

Select several keyframes for one parameter

On any keyframe, open the context menu and choose Select All Keyframes.

Hold Ctrl (Windows) or Command (Mac OS) while clicking individual keyframes.

Hold Shift and click to select a range of keyframes.

Reposition keyframes or the envelope line

Drag selected keyframes to move them. (Hold Shift while dragging to constrain either the time position or the parameter value.)

For an envelope-segment move that does not create a keyframe, drag while holding Ctrl (Windows) or Command (Mac OS).

Change the transition between two keyframes

- On the first keyframe, open the context menu. Enable Hold Keyframe for an abrupt value change, or clear it for a gradual move between the two values.

Apply spline curves to an entire envelope

- Open an envelope line's context menu, then choose Spline Curves.

Delete keyframes

- Open an envelope line's context menu, then choose Delete Selected Keyframes. Another option is to drag a single keyframe away from the clip or track.

Disable clip keyframe editing

To avoid accidentally adding or moving keyframes, turn off keyframe editing.

- From the Multitrack menu, clear Enable Clip Keyframe Editing.
