# Compensate for existing noise when matching noise

Suppose you're matching grain across images with the Match Grain effect and your destination layer already shows grain of its own — a grain mismatch or grain build-up can crop up. The Compensate for Existing Noise control heads this off by pulling a noise model from both the source and the destination, then reshaping the source noise to account for whatever noise is already in the destination before it's applied there.

For this control to run on its own, push the Compensate for Existing Noise slider to 100%. You can then inspect the destination layer's noise samples by picking Compensation Samples from the Viewing Mode menu. Switching Sampling Mode to Manual also lets you reposition the samples in the destination image, since that frees the Compensation Sample Points for hand placement.

Run the Match Grain effect on the destination layer.

In the Effect Controls panel, dial the Compensate for Existing Noise value beneath the Match Grain effect to taste. The source layer's noise and the destination layer's noise are both sampled and their difference worked out, so the destination receives only as much noise as it takes to match it to the source.

To rework the noise samples, pick Noise Samples from the Viewing Mode menu, flip the Sampling > Sample Selection control to Manual, then open up the Compensation Sample Points. How many points you get depends on the current value of Number of Samples.

- Drag each sample point to a fresh spot in the Composition panel.
- Under the Effect Controls panel's Compensation Sample Points controls, key in fresh x and y coordinates next to the sample point.
- In the Effect Controls panel, hit the point parameter tied to the Compensation Sample Point, then click wherever in the Composition panel you'd like the point placed.

Pick Final Output from the Viewing Mode control.
