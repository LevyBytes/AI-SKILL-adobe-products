# Noise Grain Effects (part 3)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Median (Legacy) effect

By blurring an image yet holding onto its edges, the Median (Legacy) effect cuts down noise or grain. It works especially well at clearing salt-and-pepper noise.

- Radius: Sets how strongly the median filter acts on the image. Bumping the radius up samples a wider area to work out the median pixel value, which delivers heavier smoothing and more noise reduction.
- Operate on Alpha Channel: Switch it on to act on the alpha (transparency) channel rather than — or alongside — the RGB color channels.

## Noise effect

Pixel values across the image are shuffled at random by the Noise effect.

Supported color depths are 8-bpc, 16-bpc, and 32-bpc.

Original image

Image with Noise effect applied

- Amount of Noise: Sets how much noise gets added.
- Noise Type: Picking Use Color Noise feeds separate random values into the red, green, and blue channels; leave it off and every channel for a given pixel gets the same random value.
- Clipping: Caps the color channel values. Turn this off and the noise reads as stronger. In a 32-bpc project this control has no effect.

## Noise Alpha effect

Noise lands on the alpha channel courtesy of the Noise Alpha effect.

Supported color depth is 8-bpc.

- Unique Random lays down matching amounts of black and white noise.
- Squared Random lays down high-contrast noise.
- Uniform Animation lays down animated noise.
- Squared Animation lays down animated high-contrast noise.

- Amount: Sets the strength of the noise.

  - Add: Drops the same amount of noise into both the transparent and the opaque parts of the clip.
  - Clamp: Drops noise only into the opaque parts.
  - Scale: Scales the noise to track opacity, leaving 100% transparent areas free of any noise.
  - Edges: Drops noise only into partly transparent parts, such as the rim of the alpha channel.

  - Clip: Anything over 255 maps to 255, and anything under 0 maps to 0.
  - Wrap Back: Values past 255 or beneath 0 bounce back into the 0-255 range. A value of 258 (255+3), for instance, reflects to 252 (255-3), and a value of ‑3 reflects to 3.
  - Wrap: Values past 255 or beneath 0 roll around into the 0-255 range. A value of 258, for example, wraps to 2, a value of 256 wraps to 0, and a value of ‑3 wraps to 253.

- Random Seed: Feeds a value into the noise's random number generator. This control is live only when you pick Uniform Random or Squared Random.

Note

For flashing noise, keyframe the Random Seed control. For noise that animates smoothly, keyframe the Noise Phase value.

- Cycle Noise: Lays down a cycle of noise that runs through once across the time span you set.
- Cycle (in Revolutions): Sets how many Noise Phase revolutions the noise runs through before repeating (offered only while Cycle Noise is on).

Note

To spare yourself the work of keyframing the Noise Phase value, lean on the Cycle Noise option to build a seamless noise loop. Then render the layer and bring it back in as a new source footage item.

## Noise HLS effect and Noise HLS Auto effect

The hue, lightness, and saturation parts of an image pick up noise from the Noise HLS and Noise HLS Auto effects. With Noise HLS Auto, the noise animates by itself and you set the animation speed; with Noise HLS, you animate via keyframes or expressions. The two effects share every control apart from the Noise Phase or Noise Animation Speed control that drives the noise animation.

Supported color depth is 8-bpc.

Original image

Image with Noise HLS effect applied

- Uniform yields uniform noise.
- Squared yields high-contrast noise.
- Grain yields grainlike noise akin to film grain.

- Hue: How much noise gets added to hue values.
- Lightness: How much noise gets added to lightness values.
- Saturation: How much noise gets added to saturation values.
- Grain Size: This control is live only under the Grain noise type.
- Noise Phase (Noise HLS only): Feeds a value into the noise's random number generator. Keyframing Noise Phase cycles the effect through the phases to build animated noise, and wider value gaps between keyframes speed the animation up.
- Noise Animation Speed (Noise HLS Auto only): Governs the pace of the noise animation. Keyframe this property to speed the animation up or slow it down.

## Remove Grain effect

Reach for the Remove Grain effect to strip out grain or visible noise. It leans on advanced signal processing and statistical estimation to rebuild the image as it would appear free of grain or noise. Plenty of other approaches — a gentle Gaussian Blur effect or the Median effect, say — knock down how visible the noise is, but you pay for it with an inevitable loss of sharpness and highlights. The Remove Grain effect goes the other way, telling fine image detail apart from grain and noise and holding onto that detail as fully as it can.

Several options come with the Remove Grain effect for striking a careful balance between cutting noise and keeping the image sharp. On top of that, the Remove Grain effect can study frame-to-frame differences to push noise reduction and sharpness further; because that work plays out across time, it goes by the name temporal filtering.

Note

Solid degraining rests on solid noise sampling. How the automatic sampling turns out hinges on the image content and the kind of noise. You're also free to change the count, size, and placement of the samples to land the best result for a given image.

A statistical algorithm drives the Remove Grain effect's Temporal Filtering controls, blending the current frame with the frames before and after it. These controls work especially well at clearing compression artifacts out of DV or video footage.

Judging this filter's results properly means viewing them in real time — either by reviewing them or by rendering a movie out to a file.

Tip

For a faster Remove Grain effect preview, work through the Remove Grain controls in order within the Effect Controls panel. The leanest workflow, specifically, is to nail down effective degraining settings first and save the final three controls for last.

Supported color depths are 8-bpc and 16-bpc.

Original image

Remove Grain effect applied

## Remove noise or grain from an image

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

## Add temporal filtering to a layer

Run the Remove Grain effect on your image.

Set the Remove Grain preview region over whichever part of the image shifts most subtly from frame to frame or holds the most moving image detail.

Turn on Enable within the Temporal Filtering controls.

Push the Amount value to 100%.

Render the composition and export it.

Should streaking or blurring show up around moving objects, ease the Motion Sensitivity value down, then preview or render once more.

- For a quick noise cut on a movie riddled with buzzing noise, drop the Noise Reduction value to zero, push the Temporal Filtering Amount to 100%, and render the movie.
- To make previews faster, hold off on applying temporal filtering to your layer until every setting for a single frame is dialed in.
- To keep effects on a layer while still applying temporal filtering to it, precompose the chosen layer (choose Layer > Precompose), then run the Remove Grain effect on that layer.

## Sharpen an image with Unsharp Mask controls

Bundled into the Remove Grain effect are Unsharp Mask controls, which lift the contrast of edges and fine details to bring back some of the sharpness the grain reduction may have cost you.

- Raise the Unsharp Mask controls Amount value far enough for satisfactory sharpening, but not so far that it spawns unwanted artifacts or drags grain back in.
- Raise the Threshold value to clear away any stray artifacts the sharpening kicked up.
- Set the Radius to change the span across which Unsharp Mask looks for details.
- Drop the Noise Reduction value until the image starts going soft, then nudge it back up a touch, and finally apply the Unsharp Mask controls to sharpen the image.

## Turbulent Noise effect

Grayscale noise built from Perlin noise is what the Turbulent Noise effect produces, and it lends itself to natural-looking backdrops, displacement maps, and textures, or to faking things like clouds, fire, lava, steam, running water, or vapor.

At heart, the Turbulent Noise effect is a modern, faster build of the Fractal Noise effect. It renders in less time and makes smooth animations simpler to put together. The Turbulent Noise effect also models turbulent systems more faithfully, with fine noise detail traveling faster than coarse detail. What makes Fractal Noise worth choosing over Turbulent Noise is building looping animations, because Turbulent Noise lacks Cycle controls.

Note

The control sets for the two effects line up so closely that most guides and tutorials written for the Fractal Noise effect carry over directly to working with the Turbulent Noise effect.

Small shifts in the noise's shape come from the Evolution controls. Keyframing them yields gradual transformations of the noise across time, producing looks reminiscent of, say, drifting clouds or moving water.

Supported color depths are 8-bpc, 16-bpc, and 32-bpc.

## Controls for Turbulent Noise effect

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
