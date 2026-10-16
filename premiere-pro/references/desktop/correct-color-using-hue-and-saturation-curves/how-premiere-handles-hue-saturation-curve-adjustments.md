# How Premiere handles Hue Saturation curve adjustments

Premiere samples color after processing effects that appear before the current Lumetri effect.

- When an earlier effect changes color, Premiere samples that changed color.
- Effects placed after the current Lumetri effect do not affect the sampled color.
- The Lumetri Color panel is processed from top to bottom. Basic, Creative, and RGB Curves process before their output feeds into the Hue Saturations Curves.
- Lumetri sections located after curves, including Color Wheels, HSL Secondaries, and Vignette, are ignored for color sampling.
- Hue Saturation Curves run in parallel. Every curve samples the color value as it enters the Hue Saturation Curves section.
