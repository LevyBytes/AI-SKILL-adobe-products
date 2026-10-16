# Match noise or grain between images

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
