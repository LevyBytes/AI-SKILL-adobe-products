# Keyframes

You rely on keyframes to lock in settings for motion, effects, audio, and a host of other properties, and those settings usually shift as time goes on. Each keyframe pins down the moment in time at which you assign a value to some layer property — spatial position, opacity, or audio volume, for instance. Whatever falls between two keyframes gets interpolated. Building a change over time normally calls for a minimum of two keyframes: one capturing the starting state and another capturing the new state once the change finishes.

While a given property's stopwatch is active, every time you adjust that property's value After Effects records or revises a keyframe for it at the present moment. A property whose stopwatch sits inactive carries no keyframes at all. Adjust a layer property's value while its stopwatch is inactive and that single value simply holds steady for the full length of the layer.

Note

With Auto-keyframe mode turned on, editing a property flips its stopwatch on by itself.

Turn the stopwatch off and you wipe out every keyframe belonging to that layer property, and whatever value the property held at the present moment becomes its constant value. Avoid switching the stopwatch off unless you genuinely intend to erase all of that property's keyframes for good.

Tip

Swap the keyframe icons in layer bar mode for numbers by selecting Use Keyframe Indices from the Timeline panel menu.

How a layer travels and reshapes across time is governed by the run of animation keyframes laid out in the Timeline panel.

How a layer travels and reshapes across time is governed by the run of animation keyframes laid out in the Timeline panel. Within the Timeline panel, these animation keyframes rely on keyframe indices to pinpoint the precise moments at which property values change.

Within the Timeline panel, animation keyframes rely on keyframe indices to pinpoint the precise moments at which property values change. Note

Collapse a layer property that holds keyframes and you'll see gray dots — summary keyframe indicators — appear on the property group to flag that keyframes live inside it.

Certain tools — Motion Sketch and the Puppet tools among them — lay down keyframes for you automatically so they trace the motion you sketch.
