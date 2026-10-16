# Add randomness to a property with the Wiggler

Reach for the Wiggler whenever you want a property's variation over time to gain some randomness.

Note

The wiggle expression method does the same job, and as a rule it's the easier route compared with the Wiggler.

Based on the property and the settings you choose, the Wiggler injects a set number of deviations into a property—it drops in keyframes and randomizes the interpolation flowing into and out of the keyframes already there. Two keyframes is the minimum the Wiggler needs.

The Wiggler helps you mimic natural movement more believably inside boundaries you define. You might toss randomness onto an animated butterfly so it flutters, or recreate an aging projector's flicker by applying it to brightness or opacity.

1. Highlight a span of the property's keyframes.
   Choose Window > Wiggler.

2. Tune your composition's blur by working through the controls in the Motion Blur panel.
   Under Apply To, pick which curve you'd like the Wiggler to alter. With keyframes chosen on a spatially varying property, Spatial Path adds deviations to the motion while Temporal Graph adds them to the velocity. With keyframes on a property that doesn't vary spatially, Temporal Graph is your only choice.

Pick a Noise Type to set the flavor of deviation that comes from randomly scattered pixel values (noise):

Smooth Noise

Yields deviations that build up gradually, free of abrupt jumps.

Jagged Noise

Yields abrupt jumps.

X, Y, or Z

Confines deviations to a single dimension of the chosen property. Pick that dimension from the menu.

All Independently

Hands each dimension its own separate batch of deviations.

All The Same

Applies one identical batch of deviations across every dimension.

Use Frequency to dictate how many deviations (keyframes) per second After Effects drops onto the selected keyframes. Keep it low and deviations come only now and then; crank it high for jumpier output. Below 1, keyframes land less than once per second—0.5, for instance, places one keyframe every 2 seconds.

Use Magnitude to cap how large the deviations can get. After Effects ties the magnitude you set to the chosen property's units, so a figure that works on one property can behave differently on another.

Click Apply and look over the outcome.

Should you need to, choose Edit > Undo Wiggler to restore the keyframes, change the Frequency and Magnitude values, and run the Wiggler again.
