# Preventing edge clipping with the Grow Bounds effect

Since effects operate on a layer, certain effects have their output confined to that layer's boundaries, and the effect can look like it stops short. The fix is the Grow Bounds effect: apply it to a layer to stretch that layer out temporarily while other effects do their math. Newer effects, which are usually 32-BPC effects, rarely need this step.
