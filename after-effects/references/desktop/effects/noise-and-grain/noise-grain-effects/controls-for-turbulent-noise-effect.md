# Controls for Turbulent Noise effect

- Fractal Type: To build the fractal noise, a grid of random numbers is generated for every noise layer. How many noise layers exist is set by the Complexity setting, while the qualities of this grid are governed by the Fractal Type setting.
- Noise Type: Picks which interpolation method bridges the random values across the noise grid.
- Invert: Flips the noise, so black regions turn white and white regions turn black.
- Contrast: Defaults to 100. Raising it produces bigger, crisper black-and-white zones in the noise and tends to surface less fine detail; lowering it yields more gray, which mutes or softens the noise.

  - Clip: Rescales values so anything past 1.0 reads as solid white and anything beneath 0 reads as solid black. How much of the picture lands beyond this window depends on the Contrast value, and higher settings push toward a largely black-and-white image with little gray, so they expose less fine detail. As a luma matte, the layer gains crisper, more clearly bounded transparent regions.
  - Soft Clamp: Bends values along an endless curve to keep every one of them inside the range. Contrast drops and the noise turns gray with hardly any pure black or pure white. As a luma matte, the layer carries gentle gradations of transparency.
  - Wrap Back: Folds values triangularly so anything over 1.0 or under 0 rebounds into range. With Contrast pushed past 100, this surfaces fine detail. As a luma matte, the layer brings out richer, textured transparent regions.
  - Allow HDR Results: Skips remapping entirely; values beyond the 0-1.0 window are kept intact.

- Transform: Holds settings for rotating, scaling, and placing the noise layers. Selecting Perspective Offset makes the layers read as though set at varying depths.
- Complexity: How many noise layers get merged (per the Sub Settings) into the noise. Bumping this up deepens the apparent dimension and packs in more detail.

Note

Pushing Complexity higher lengthens render times. Where it works, shrinking the Size instead of raising Complexity reaches comparable looks while sparing you the longer renders. One way to fake added complexity without the render penalty is to dial in a negative or very high Contrast or Brightness setting and pick Wrap Back for Overflow.

- Sub Influence: Sets how much weight each following layer adds to the merged noise. At 100%, every iteration counts equally; at 50%, each one carries half the weight of the one before; at 0%, the effect looks exactly as though Complexity were 1.
- Sub Scaling: The scale percentage of one noise layer measured against the layer before it.

- Evolution: Relies on progressive revolutions that keep altering the picture with every revolution added. That sets it apart from ordinary revolutions tied to a dial control, where every multiple of 360° looks identical. Under Evolution, the look at 0° differs from the look at 1 revolution, which differs again at 2 revolutions, and so forth. Keyframing Evolution lets you dictate how much the noise evolves over a stretch of time; more revolutions packed into a span make the noise shift faster. Big swings in the Evolution value across a brief span can cause flashing.

- Turbulence Factor: Governs how far the velocity of the small noise features diverges from that of the large ones. Set it to 0 and the noise drifts just like output from the Fractal Noise effect, where fine and coarse features all travel at one shared speed. Push the value higher and the stacked noise layers churn the way fluid does when it grows genuinely turbulent.

  - Random Seed: Picks the seed number the noise is generated from. Because keyframing Random Seed jumps the look between unrelated noise sets inside the same fractal type, it rarely gives you what you're after. Animate Evolution instead when you want the noise to shift smoothly.

- Opacity: The opacity of the noise.
  - None: Outputs only the fractal noise and skips compositing it back over the original layer.
  - Hue: Maps the fractal noise onto hue rather than grayscale, leaving the original layer's Saturation and Lightness untouched. A grayscale source produces no visible change.
  - Saturation: Maps the fractal noise onto saturation rather than grayscale, leaving the original layer's Hue and Lightness untouched. A grayscale source produces no visible change.
