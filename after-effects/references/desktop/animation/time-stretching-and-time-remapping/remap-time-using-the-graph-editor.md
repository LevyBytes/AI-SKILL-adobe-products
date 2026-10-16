# Remap time using the Graph Editor

Note

Toggling back and forth between layer bar mode and Graph Editor mode is done with Shift+F3.

Off a Composition or Timeline panel, pick the layer slated for remapping.

Select Layer > Time > Enable Time Remapping.

Over in the Timeline panel, click the Time Remap property's name to select it.

Move the current-time indicator to the instant where a keyframe belongs, then click the keyframe button within the keyframe navigator to add one.

Inside the Graph Editor, drag the keyframe marker upward or downward while you watch the Time Remap value. Hold Shift while dragging to snap onto other keyframes.

Slowing the layer down means dragging the keyframe downward. (Should the layer be running in reverse, drag it up instead.)

Speeding the layer up means dragging the keyframe upward. (Should the layer be running in reverse, drag it down instead.)

Playing frames backward calls for dragging the keyframe down beneath the previous keyframe's value.

Playing frames forward calls for dragging the keyframe up past the previous keyframe's value.

To hold the previous keyframe, drag the current keyframe marker until it equals the previous keyframe value so the graph line goes flat. Alternatively, select the keyframe, choose Animation > Toggle Hold Keyframe, and then drop another keyframe wherever the motion should pick back up.

Note

It's wise to select every later time-remap keyframe in the layer before you shift a time-remap keyframe. That selection preserves the timing throughout the rest of the layer as you handle the remap for this particular keyframe.
