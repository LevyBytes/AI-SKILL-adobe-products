# Tips & Tricks - Some Thoughts On Time From A Long-Time Developer

Stoney Ballard wrote up the following rundown of how time behaves for effects, which you might find useful.

A filter sees time described through five in_data parameters:

- current_time
- time_step
- local_time_step
- total_time
- time_scale

What drives their values:

- The frame being rendered
- The duration of the layer and composition The frame rate of the comp
- Any Time Stretch Any Time Remapping
- The time behavior of an outer composition (one enclosing the composition with the layer being filtered)
- The setting of the "Preserve frame rate when nested or in render queue" (PFR) switch

current_time tracks the frame under render and is given in the local (layer) time system. With the PFR switch off, current_time can take any value that isn't negative; flip it on and the value is held to a multiple of time_step and local_time_step. Only total_time responds to layer duration. Comp duration enters the picture solely when Time Remapping (TR) is active, at which point total_time becomes whichever is greater between layer duration and composition duration. Only time_scale reflects the composition frame rate. Time Stretch touches nothing but time_step and local_time_step, and a negative stretch flips both of those negative. total_time stays put even when the layer's duration as it appears in the comp shifts. The behavior mirrors having Time Stretch sit above a filter yet below an outer comp. PFR leaves Time Stretch's effect intact. What sets Time Stretch apart from an outer comp is that it hits both step params the same way, whereas an outer comp touches only time_step.

Because Time Remapping operates beneath the filter, the only time param it disturbs is total_time. Turn TR on and the layer is stretched to match the comp's length (though never trimmed shorter), no matter how long it genuinely runs or where it falls within the comp. That can push total_time higher. None of this depends on the actual time map — purely on whether the feature is switched on.

Nesting inside an outer comp produces the widest swings, except when PFR is on. With PFR on, an outer comp's time variations can't reach the filter at all. Naturally, current_time won't necessarily advance in time_step increments then. Frames may be skipped or run in reverse.

With PFR off, local_time_step, total_time, and time_scale stay fixed at their inner-comp values, while time_step holds the gap to the next frame of the outer comp, stated in the local time system. That can be anything, zero included. Read it as an instantaneous time rate rather than a span. A value of 0 can persist across however many rendered frames, yet current_time on the local layer holds still.

Flipping the perspective around:

Except when rendering an outer comp that has PFR off for the inner comp, current_time snaps to time_step intervals. This is the time within the layer, not within any comp.

Nothing but Time Stretch moves local_time_step. It can go negative but never reaches zero.

Apart from when an outer comp is being rendered with PFR off, time_step and local_time_step always carry the same value. time_step additionally answers to the time behavior of an outer comp (with PFR off). Positive, negative, or zero — it can be any of those, and it can differ frame to frame (in the outer comp). With PFR off, time_step doubles as a way to read off the current frame's duration.

total_time gives the layer's duration, except where Time Remapping is on, in which case it takes the larger of the layer duration and the comp duration.

time_scale is the factor for which total_time / time_scale yields the layer's duration in seconds within its comp. The comp frame rate is the only thing that moves it, though in principle every time value could be scaled in proportion for whatever reason.

You won't find a layer's intrinsic frame rate (when it has one) exposed anywhere, even though it generally matches the comp frame rate. Should a filter need to reach a clip's real frames, it can

do so only while living in a comp at the same frame rate, with neither Time Stretch nor Time Remapping on its layer. local_time_step is what it should use to locate the frames.
