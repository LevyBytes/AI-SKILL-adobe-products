# Noise Grain Effects (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Add Grain effect

The Add Grain effect spins up fresh noise from scratch and never samples noise that's already present. In its place, parameters and presets keyed to assorted film types serve to synthesize a wide range of noise or grain. Almost every trait of this noise is yours to change — steer its color, lay it onto the image in various ways, even animate it or paint it onto just a slice of your image.

Color depths of 8-bpc and 16-bpc are supported by this effect.

Original

Add Grain effect applied

How the added noise spreads across the color channels does sway the resulting image's overall color. Over a dark background, visually the noise leans toward adding to the image, so either a red tint or heavier noise on the red channel lends a reddish cast. Over a bright background, visually it leans toward subtracting from the image, so that same red tint or heavier red-channel noise turns the result cyan. The outcome also hinges on the Blending Mode control in the Application controls group.

Note

Your image's real grain may differ from the film presets, owing to factors such as exposure and scanning resolution.

The controls for the Add Grain effect let you do the following:

- Recreate a specific film or photographic stock's grain: in the Effect Controls panel, open the Add Grain effect's Preset menu and choose that film type.
- Tune how intense and how large the applied grain is, and fold in a blur, by working the Add Grain effect's Tweaking controls group over in the Effect Controls panel.
- Reshape the color of the added noise by adjusting the Color controls.
- Set how the color value of the generated noise merges with the color value of the underlying destination layer at each pixel by picking a Blending Mode in the Application controls group.
- Set how much grain lands in each tonal region of your image, plus the midpoint, by adjusting the Shadows, Midtones, Highlights, and Midpoint values in the Application controls group.
- Animate the added grain by adjusting the properties in the Animation controls group.
- Apply the effect across the whole image by choosing Final Output from the Viewing Mode menu.

## Tweaking controls for Grain effects

A shared group of Tweaking controls is common to both the Match Grain and Add Grain effects. These controls let you reshape the noise's intensity and size and work in blur, any of which you can apply across all three channels at once or to each channel on its own. The applied grain's aspect ratio is yours to change as well.

Note

The Tweaking controls' values are measured relative to the noise sampled in the source layer: at 1.0 that property of the source noise stays put, while higher and lower values shift the applied noise.

Adjust any of the controls below in the Tweaking controls group:

- Intensity: governs how much the brightness and color strength vary between pixels in the generated noise, which sets how visible the noise is. Raising it leaves each grain's position and size alone but makes the grain seem to pop more; lower values read as more subtle and muted.
- Size: sets the generated grain's size in pixels.
- Softness: sets how much softness the grain carries.
- Aspect Ratio: governs the generated grain's width relative to a fixed height of 1; it comes in handy for faking anamorphic lenses or for aesthetic effects. Above 1 the grain stretches horizontally; below 1 it squashes horizontally.
- Channel Intensities: governs the contrast between pixels in the generated noise on a per-channel basis. You might, for example, want extra grain on the blue channel to mimic film.
- Channel Size: sets the generated grain's size in pixels separately for each channel.

## Curl Noise effect

Use new beta features

You can put the Curl Noise effect through its paces and send feedback right now — find it in After Effects (beta).

Get started

When you're chasing a noise effect with the feel of smoke, flowing water, or swirling ink, the Curl Noise effect is the one to reach for. What it makes is smooth, animated 2D noise with a fluid, organic character — a natural fit for backgrounds, texture overlays, abstract motion, and anywhere you'd rather have movement that flows than flickers.

What sets it apart from other noise effects is that the noise field gets curled: the vectors defining the noise are rotated to flow tangentially at all times, which is what hands the result its signature fluid character.

Loop Evoluation

Input Noise from another layer with CC Particle World

With Internal Noise Speed and Direction

Smoke and Fire

- Internal: draws on noise the effect makes itself. It's the most self-contained choice and the only one that switches on Speed and Direction. Speed (0–100) sets how fast the noise field drifts over time. At 0 it's dead still. Direction fixes the angle the field travels in.
- This Layer: takes its noise input from the luminance of whatever layer the effect sits on. Wherever your layer is brighter becomes a peak in the noise field, and the curl follows from the gradients across that image. Because the layer's own content is what drives the field here, Speed and Direction are switched off.

  - Source Mapping: Fill or Center governs the way the source layer maps onto the curl layer whenever their sizes don't agree. With Fill the source is stretched to fill the layer; with Center a 1:1 pixel mapping centers it instead. A source smaller than the curl layer leaves its surroundings reading as neutral (mid-gray, which throws no gradient and hence no curl along the edges); a source that's bigger gets cropped around its center.

  - Off eases the edges down to neutral, so the curl tapers off naturally as it nears the source's edge.
  - On mirrors the source along its edges, building a seamless tile that carries the field on endlessly every direction with no edge artifacts.

- Softness: 0–100, available solely when the source is layer-based, puts a blur on the input noise field. Hold it at 0 and the source rides through untouched. Push it up and the source's fine detail smooths away, yielding gentler, more gradual shifts in curl direction. When your source carries sharp edges or fast brightness changes, raising Softness is usually the cure.

  - Transform : Scale, Offset, Rotation, and other options place and size the noise field in space. This section behaves much like the Transform group in the Fractal Noise effects.

  - Evolution: a rotation angle laid globally over every swirl calculation. Animate it over time and the whole pattern cycles through different states — ideal for loops or for nudging the overall look without disturbing the underlying structure. For a looping Evolution pattern, be sure Turbulence Speed and Input Noise Speed are both set to 0.
  - Turbulence Speed: 0–200 sets how fast the noise field shifts over time. At 0 the turbulence is frozen. Crank it up and it boils and seethes faster. It runs independent of Input Noise Speed, gauging the pace at which the internal perturbation evolves rather than any motion of the Input Noise.
  - Swirl: -360 to 360 is the chief control for animating the noise pattern over time. Higher values spin up tighter, more dramatic swirling and coiling. Lower values run gentler and more flowing. Negative values flip the swirl's direction.
  - Density: -100 to 100 sets how tightly the noise's variation packs together. Go positive and complexity gathers near the center; go negative and it spreads outward. Held at 0, the distribution stays even.
  - Smoothness: 0–100 sets how crisp or soft the curl structure reads. Keep it at 0 for fine, detailed curl; raise it and the curl softens and smooths out.
  - Blend X/Y: 0–100 tips the flow's leading direction one way or the other along the horizontal-to-vertical axis. Near 0 the flow stays largely horizontal; up at 100 it turns largely vertical.

- Sample Count: 3–24 sets how smooth and continuous the flow lines look. Adding samples yields longer, more cohesive lines; fewer leave a rougher, more broken-up result.

  - Sample Radius: 0–200, where 0 leaves the soft underlying noise with no flow lines and 200 yields fully defined, elongated line structures. Larger values lean toward broader, more sweeping structures; smaller values catch finer detail.
  - Flow Softness : 0–100 sets the gap between the bright flow lines and the darker regions around them. Low values give a softer, more diffuse look where everything blends together by degrees. Crank it higher and those bright lines read more sharply set off from a darkened backdrop.
  - Edge Definition: 0–100, where lower values yield soft, feathered edges that bleed into one another. Higher values lean toward sharper, brighter, more distinct strands.
  - Flow Falloff: 0–100, where 0 keeps the flow lines even from edge to edge of the frame. Push it up and the result reads more organic and irregular, with some patches brightening as others drop away.

  - Input Noise: displays the raw noise before anything is done to it.
  - Curl Generation: displays the stage where that noise becomes flowing motion.
  - Final Render: displays the completed look, flow lines and all, smoothed out.

- Contrast: tune the gap between light and dark regions in the noise to raise or lower visual intensity.
- Brightness: set an offset to the noise's overall luminance, making the result lighter or darker while leaving its structure intact.
- Clip HDR Results: cap values to the displayable 0–1 range so bright HDR values don't run past standard color bounds.
- Channel: pick the target for the Curl Noise output among the color channel(s) — RGB, individual channels, or Alpha.

## Dust & Scratches effect

Defects and noise are toned down by the Dust & Scratches effect, which nudges any pixels that stand out within a given radius toward the values of the pixels around them. Finding the sweet spot between keeping the picture crisp and concealing flaws is a matter of experimenting with different pairings of the Radius and Threshold settings.

Supported color depths are 8-bpc and 16-bpc.

Original image with scratches

Enlarged view of scratches

Scratches removed with loss of clarity

## Controls for Dust & Scratches effect

- Radius: Sets the distance across which the effect hunts for pixel differences. Picking a high value softens the picture, so stick with the lowest setting that still clears the flaws.
- Threshold: Governs how far a pixel may stray from its neighbors before the effect touches it. Reach for the largest value that still erases the defects.

## Fractal Noise effect

Grayscale noise built from Perlin noise is what the Fractal Noise effect produces, and it lends itself to natural-looking backdrops, displacement maps, and textures, or to faking clouds, fire, lava, steam, running water, or vapor.

Supported color depths are 8-bpc, 16-bpc, and 32-bpc.

Small shifts in how the fractal noise is shaped come from the Evolution controls. Keyframing them yields gradual transformations of the noise across time, producing looks reminiscent of, say, drifting clouds or moving water.

Turbulent systems are modeled faithfully by the Turbulent Noise effect, where fine noise detail travels faster than coarse detail. What makes Fractal Noise worth choosing over Turbulent Noise is building looping animations, because Turbulent Noise lacks Cycle controls.

Note

The control sets for the two effects line up so closely that most guides and tutorials written for the Fractal Noise effect carry over directly to working with the Turbulent Noise effect.

## Controls for Fractal Noise effect

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

## Create a seamless loop using Fractal Noise

Pick a layer in the Timeline panel, then choose Effect > Noise & Grain > Fractal Noise.

Lay down two keyframes for Evolution.

Tweak the spacing between keyframes and the count of Evolution revolutions until the noise animation looks right to you.

Turn on Cycle Evolution and assign a value to Cycle.

Across the span fixed by the distance between Evolution keyframes, the evolution runs through however many revolutions you set for Cycle. Set the Cycle value by weighing how much of this cycle you'll need to render before it loops back, and pick the shortest length that suits your project so you save render time.

At first the closing frame of a cycle matches the opening frame exactly. To get a seamless loop, drop that last frame by placing the layer's Out point one frame ahead of the cycle's final frame.

Slide the current time indicator to the moment the cycle finishes. If Cycle is set to 2, for example, find the frame where the Evolution value reaches 2.

Should you have keyframed other Fractal Noise controls, send them back to their starting values at the point where the cycle loops in the timeline; otherwise those controls won't loop.

Step the current time indicator back by one frame.

Trim the layer's Out point to land on this frame.

8. Pre-render the layer, then bring that rendered movie back into your project.
   With the brought-in footage item selected in the Project panel, choose File > Interpret Footage. Then set Loop to however many loops the layer's duration in the project calls for.

## Match Grain effect

Noise between a pair of images is reconciled by the Match Grain effect, which shines in compositing and in bluescreen/greenscreen jobs. Because the Match Grain effect can only put noise in and never take it out, an exact match isn't reachable when the destination already carries more noise than the source. The workaround is to clean the destination first with the Remove Grain effect, then run the Match Grain effect on that result for a flawless match.

The starting point for the Match Grain effect is noise sampling. In essence, whole frames of fresh noise get synthesized to line up with the noise samples. Before the effect lands on the new image, you can reshape that noise in plenty of ways — for example, lifting the noise off one image yet making it bigger and redder before laying it onto a different image.

Some of the Match Grain effect's controls overlap with those of the Add Grain effect. Supported color depths are 8-bpc and 16-bpc.

Note

The Match Grain effect takes its noise sample from whichever frame in the source layer aligns with the first frame in the destination layer. When the source layer is absent at that frame, or when the noise samples include transparent regions, nothing is sampled and nothing is applied.

Original image

Reference image with grains

Match Grain effect applied

## Match noise or grain between images

1. Confirm that the source and destination layers share the same composition.
2. Pick the destination layer you mean to add grain to.
   Choose Effect > Noise & Grain > Match Grain.

In the Effect Controls panel, name the source layer to sample grain from by picking a layer from the Noise Source Layer control. (Only layers sitting in the Timeline panel show up in the Noise Source Layer control.)

Grain gets sampled and dropped onto the preview region of the destination layer on its own. If an automatic match is all you need, the rest of the steps can be skipped.

When the destination layer already carries notable noise before a noise source layer is chosen, and that produces a grain mismatch, tune the Compensate for Existing Noise slider to head off grain build-up.

- Reach for the Tweaking controls to set the strength and size of the added grain and to work in a blur.
- Use the Color controls to shift the color of the noise being added.
- Pick a Blending Mode in the Application controls group to set how the generated noise's color value mixes with the underlying destination layer's color value at each pixel.
- In the Application controls group, set the Shadows, Midtones, Highlights, and Midpoint values to govern how much grain lands in each tonal region of your image and where the midpoint sits.

To switch how the effect is displayed, pick any of these from the Viewing Mode menu in the Effect Controls panel:

- Noise Samples: Reveals the regions sampled to pull the current noise model. Picking the source layer brings it into the Composition panel along with its noise sample squares.
- Compensation Samples: Reveals the noise samples pulled automatically from the destination image.
- Preview: Shows the effect's current settings inside a 200x200 pixel region.
- Blending Matte: Reveals the present color matte or mask, or both together, that the current settings of the Blend with Original controls group produce.
- Final Output: Renders the whole active frame using the effect's current settings.

8. Animate the added grain, if desired.
   Pick Final Output from the Viewing Mode control.

## Compensate for existing noise when matching noise

Suppose you're matching grain across images with the Match Grain effect and your destination layer already shows grain of its own — a grain mismatch or grain build-up can crop up. The Compensate for Existing Noise control heads this off by pulling a noise model from both the source and the destination, then reshaping the source noise to account for whatever noise is already in the destination before it's applied there.

For this control to run on its own, push the Compensate for Existing Noise slider to 100%. You can then inspect the destination layer's noise samples by picking Compensation Samples from the Viewing Mode menu. Switching Sampling Mode to Manual also lets you reposition the samples in the destination image, since that frees the Compensation Sample Points for hand placement.

Run the Match Grain effect on the destination layer.

In the Effect Controls panel, dial the Compensate for Existing Noise value beneath the Match Grain effect to taste. The source layer's noise and the destination layer's noise are both sampled and their difference worked out, so the destination receives only as much noise as it takes to match it to the source.

To rework the noise samples, pick Noise Samples from the Viewing Mode menu, flip the Sampling > Sample Selection control to Manual, then open up the Compensation Sample Points. How many points you get depends on the current value of Number of Samples.

- Drag each sample point to a fresh spot in the Composition panel.
- Under the Effect Controls panel's Compensation Sample Points controls, key in fresh x and y coordinates next to the sample point.
- In the Effect Controls panel, hit the point parameter tied to the Compensation Sample Point, then click wherever in the Composition panel you'd like the point placed.

Pick Final Output from the Viewing Mode control.

## Median effect

Each pixel is swapped out by the Median effect for one carrying the median color value of the neighbors inside the chosen Radius. Kept at low Radius values, this effect helps tamp down certain kinds of noise; pushed to higher Radius values, it lends an image a painted look.

Supported color depths are 8-bpc and 16-bpc.

Original image

Image with Median effect applied

## See also

- [Application](script-application.md)
