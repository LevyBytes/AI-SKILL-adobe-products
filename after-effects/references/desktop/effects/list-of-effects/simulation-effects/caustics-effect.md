# Caustics effect

Note

For the properties that several Simulation effects have in common, consult Common Lighting and Material controls.

Picture the bright ripples of light dancing across the floor of a pool: that is what this effect imitates. Such patterns arise when light bends as it passes through a water surface and lands below. Caustics produces those patterns, and paired with Wave World and Radio Waves it yields convincing water surfaces.

Note

Any masks or alpha channels on the layer Caustics is applied to are disregarded by the effect. Two routes get around this, and which you pick depends on the outcome you're after: precompose the layer carrying the effect and put the mask on the precomposition layer, or precompose the layer carrying the mask and put the effect on the precomposition layer. Further detail lives in the material on precomposing, nesting, and pre-rendering in After Effects.

This effect works with 8-bpc color.

Original (upper-left), and with Bottom set to the text layer (lower-left) and Water Surface set to the whirl layer with Surface Opacity set to 0% (lower-right)

Original (upper-left), and with Bottom set to the text layer (lower-left) and Water Surface set to the whirl layer with Surface Opacity set to 0% (lower-right) Note

The most lifelike Caustics come from a two-pass workflow. First, render the Bottom layer on its own with Render Caustics enabled and Surface Opacity at 0. Next, precompose that result and feed it as the Bottom layer into a second Caustics effect, this time with Render Caustics off. Working this way lets you shift, resize, or otherwise adjust the Bottom layer inside the precomposed composition, which fakes lighting arriving from an angle rather than directly above.
