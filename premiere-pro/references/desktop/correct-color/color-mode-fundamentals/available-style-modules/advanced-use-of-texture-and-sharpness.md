# Advanced use of Texture and Sharpness

Selecting the Sliders button below either Texture or Sharpness expands the control, enabling multi-band and multi-parameter adjustments for greater precision.

- Texture (slider mode): Five vertical sliders adjust separate image-texture bands, ordered from fine on the left to coarse on the right. With these sliders, one band of texture can be softened while another is sharpened, creating highly specific changes. Drag a slider upward from its default to sharpen that band, or downward from default to soften it.
  - Amount: Sets how much contrast is applied to increase perceived sharpness. Raising Amount beyond a threshold automatically lowers Radius, if Radius has been raised, to help produce more natural-looking adjustments.
  - Radius: Sets the number of pixels around adjusted pixels that are also affected. Raising Radius beyond a threshold automatically lowers Amount, making naturalistic adjustments easier to create.
  - Threshold: Excludes pixels from sharpening according to how different they are from their surroundings. In practice, this lets you progressively leave fine-to-medium detail out of the sharpening operation, avoiding amplified noise or unwanted detail while keeping the effect focused on edges and more prominent high-contrast detail.

For Texture in particular, the main value of the extra sliders is not that every slider must be used. The advantage is access to the band of control that matches the goal, which depends on subject size and the kind of detail present.

Note

Using more bands of the Texture control increases the processor load for this effect.
