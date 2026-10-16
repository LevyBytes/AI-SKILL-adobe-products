# Echo effect

Frames captured at different moments in a layer are merged by the Echo effect. Its uses range widely, from a plain visual echo through streaking and smearing effects.

Echo effect

Echo effect

You'll only see this effect's results when the layer carries change across time — motion in a layer driven by a video footage item, say. Motion you create by moving the layer itself inside the composition produces no echoes here. For echoes from that kind of motion, precompose the layer, move all its attributes across to the new composition, and then run the Echo effect on the precomposition layer.

This effect works with 8-bpc, 16-bpc, and 32-bpc colors.

Echo Time (seconds)

How much time, in seconds, falls between echoes. Negative values pull echoes from earlier frames; positive values pull them from later frames.

Number of Echoes

How many echoes there are. With a value of 2, for instance, three frames combine: the current time, the current time + Echo Time, and the current time + (2 \* Echo Time).

Starting Intensity

How opaque the first image in the echo sequence is.

Decay

How an echo's opacity compares to that of the echo before it in the sequence. With Decay at 0.5, for example, the first echo's opacity is half the Starting Intensity, and the second echo is half of that — one-quarter of the Starting Intensity.

Echo Operator

Which blending operation merges the echoes.

- Add: Merges the echoes by summing their pixel values. Set the starting intensity too high and this mode overloads fast, throwing off streaks of white.

- Maximum: Merges the echoes by keeping the largest pixel values across all of them.

- Minimum: Merges the echoes by keeping the smallest pixel values across all of them.

- Screen: Mimics merging the echoes by optically stacking them. It resembles Add, yet overloads less readily.

- Composite In Back: Places the current-time image at the rear, each echo stepping progressively farther toward the front of the composite.

- Composite In Front: Places the current-time image at the front, each echo stepping progressively farther toward the rear of the composite.

- Blend: Averages the echoes.
