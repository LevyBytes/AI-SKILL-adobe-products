# Render at Maximum Depth

With Render at Maximum Depth enabled, Premiere renders effects at the greatest bit depth the selected format can support; in most cases that means 32-bit float processing.

Keeping extra color data from the original video helps limit banding in smooth gradients and preserves more visible detail in bright highlights as well as dark shadow regions.

For some exports, Render at Maximum Depth can make encoding take longer. When GPU acceleration is active, effects are already rendered at the highest available bit depth, so that behavior applies whether or not this setting is selected.
