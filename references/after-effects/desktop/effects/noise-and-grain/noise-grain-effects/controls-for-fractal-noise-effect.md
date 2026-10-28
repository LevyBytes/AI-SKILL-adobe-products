# Controls for Fractal Noise effect

- Fractal Type: To build the fractal noise, a grid of random numbers is generated for every noise layer. How many noise layers exist is set by the Complexity setting, while the qualities of this grid are governed by the Fractal Type setting.
- Noise Type: Picks which interpolation method bridges the random values across the noise grid.
- Invert: Flips the noise, so black regions turn white and white regions turn black.
- Contrast: Defaults to 100. Raising it produces bigger, crisper black-and-white zones in the noise and tends to surface less fine detail; lowering it yields more gray, which mutes or softens the noise.

  - Clip: Rescales values so anything past 1.0 reads as solid white and anything beneath 0 reads as solid black. How much of the picture lands beyond this window depends on the Contrast value, and higher settings push toward a largely black-and-white image with little gray, so they expose less fine detail. As a luma matte, the layer gains crisper, more clearly bounded transparent regions.
  - Soft Clamp: Bends values along an endless curve to keep every one of them inside the range. Contrast drops and the noise turns gray with hardly any pure black or pure white. As a luma matte, the layer carries gentle gradations of transparency.
  - Wrap Back: Folds values triangularly so anything over 1.0 or under 0 rebounds into range. With Contrast pushed past 100, this surfaces fine detail. As a luma matte, the layer brings out richer, textured transparent regions.
  - Allow HDR Results: Skips remapping entirely; values beyond the 0-1.0 window are kept intact.

- Transform: Holds settings for rotating, scaling, and placing the noise layers. Selecting Perspective Offset makes the layers read as though set at varying depths.

- Complexity: How many noise layers get merged (per the Sub Settings) into the fractal noise. Bumping this up deepens the apparent dimension and packs in more detail.

Note

Pushing Complexity higher lengthens render times. Where it works, shrinking the Size instead of raising Complexity reaches comparable looks while sparing you the longer renders. One way to fake added complexity without the render penalty is to dial in a negative or very high Contrast or Brightness setting and pick Wrap Back for Overflow.

- Sub Influence: Sets how much weight each following layer adds to the merged noise. At 100%, every iteration counts equally; at 50%, each one carries half the weight of the one before; at 0%, the effect looks exactly as though Complexity were 1.
- Sub Scaling, Sub Rotation, and Sub Offset: Give the scale percentage, angle, and placement of one noise layer measured against the layer before it.
- Center Subscale: Derives each noise layer from the same origin as the prior layer, which can make the noise layers look duplicated and stacked one atop another.

- Evolution: Relies on progressive revolutions that keep altering the picture with every revolution added. That sets it apart from ordinary revolutions tied to a dial control, where every multiple of 360° looks identical. Under Evolution, the look at 0° differs from the look at 1 revolution, which differs again at 2 revolutions, and so forth. Bringing the Evolution setting back to where it started — say, to make a seamless loop — is the job of the Cycle Evolution option. Keyframing Evolution lets you dictate how much the noise evolves over a stretch of time; more revolutions packed into a span make the noise shift faster. Big swings in the Evolution value across a brief span can cause flashing. For a seamless loop, turn on Cycle Evolution and place Evolution keyframes at whole revolutions with no extra degrees, since half-finished revolutions can break the loop.

- Cycle Evolution: Builds an Evolution cycle that repeats across the time span you set. It pushes the Evolution state back to where it began, giving you a smooth progressive cycle, a nonrepeating cycle, or a loop segment. So the cycle lands on whole revolutions, pick a Cycle value that equals — or divides evenly into — the revolution count you set for Evolution.
  - Cycle (in Revolutions): Sets how many revolutions the noise runs through before repeating. How fast these Evolution cycles play is governed by the gap between Evolution keyframes. Only the noise evolution is affected here, not the Transform or other controls; for instance, two otherwise identical noise states with different Size or Offset settings won't look alike. This option is offered only while Cycle Evolution is turned on.
  - Random Seed: Fixes a random value that the noise is generated from. Keyframing the Random Seed property makes the noise flash from one pattern to another inside that fractal type, which is rarely the look you're after. For noise that animates smoothly, keyframe the Evolution property instead.

Note

- Fresh fractal noise animations are easy to spin up: reuse Evolution cycles you built earlier and swap in only a new Random Seed value. A new Random Seed shifts the noise pattern while leaving the Evolution animation untouched.
- Rather than keyframing Evolution across the whole composition, conserve render time by prerendering a single brief Evolution cycle and looping it for the span you need.

  - None: Renders only the fractal noise and skips compositing it onto the original layer.
  - Hue: Renders the fractal noise as hue values in place of grayscale, holding the original layer's Saturation and Lightness. A grayscale original layer produces no change.
  - Saturation: Renders the fractal noise as saturation values in place of grayscale, holding the original layer's Hue and Lightness. A grayscale original layer produces no change.
