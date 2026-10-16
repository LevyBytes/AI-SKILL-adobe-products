# Remove noise or grain from an image

Pick the layer, then choose Effect > Noise & Grain > Remove Grain.

Using the Noise Reduction Settings controls group, tune any of these:

- Dial the Noise Reduction value to set the overall amount of noise in the image.
- In the Channel Noise Reduction controls, dial the Red, Green, and Blue Noise Reduction values to set the noise on each channel one at a time.

Fresh fractal noise animations are easy to spin up: reuse Evolution cycles you built earlier and swap in only a new Random Seed value. A new Random Seed shifts the noise pattern while leaving the Evolution animation untouched.

Set the Passes value to govern the largest noise radius that can be picked up:

- When your grain runs large and chunky, push the Passes value up. More passes knock down larger noise.
- When a big file size drags your render time out longer than you'd like, drop the pass count to ease memory use and render time.

Past the ideal pass count, extra passes do nothing.

Pick one of these from the Mode dropdown menu:

- Multichannel: Degrains every channel of a color image at once, which usually gives the best result on color images. By exploiting correlations across channels, this mode sharpens the accuracy of the denoising.
- Single Channel: Degrains each channel on its own. Lean on this mode for a monochromatic image, or when Multichannel throws off objectionable color artifacts.

In the Fine Tuning controls group, tune any of these to sharpen the trade-off between noise reduction and retained sharpness:

Chroma Suppression

- Chroma Suppression: Pulls some of the chroma out of the noise to clean the image up. When the noise is colorful, raising this control can help clear it; set it too high and you may strip some chroma from the image itself. (Chroma Suppression does nothing to grayscale images and is unavailable when the Noise Reduction Settings Mode is Single Channel.)
- Texture: Governs how much low-level noise carries through to the output. This setting earns its keep when you need to cut objectionable artifacts or hold onto finely textured regions like wood grain or brick. Lower values give a smoother result that may look artificial, while higher values can leave the output looking just like the input.
- Noise Size Bias: Governs how the noise reduction reacts to noise that varies in size within one image. At the default of zero, every size is treated alike. Negative values keep larger residual noise while clearing smaller grains more aggressively; positive values keep smaller noise while clearing larger noise more aggressively.
- Clean Solid Areas: Governs how far the noise reduction smooths out neighboring pixels that vary little in value. It helps where broad areas of solid color need to be as clean as can be. Push the setting too high and nearly solid regions of the image can smear, taking on an artificial look.

Tune the Unsharp Mask controls to win back subtle edge detail the degraining stripped away.

Lean on the Temporal Filtering controls to run interframe noise reduction.

To switch how the effect is displayed, pick any of these from the Viewing Mode dropdown menu:

- Noise Samples: Reveals the regions sampled to pull the current noise model.
- Preview: Shows the effect's current settings inside a 200x200 pixel region.
- Blending Matte: Reveals the present color matte or mask, or both together, that the current settings of the Blend with Original controls group produce.

Pick Final Output from the Viewing Mode control.
