# Noise Grain Effects (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Apr 15, 2026

## Work with Grain effects

### In After Effects, learn how noise and grain effects are added, removed, and controlled.

Nearly every digital image taken from the real world carries grain or visual noise, introduced by the recording, encoding, scanning, or reproduction steps and by the gear used to make the picture. Think of the soft static in analog video, compression artifacts out of digital cameras, halftone patterns left by scanned prints, CCD noise from digital sensors, and the telltale speckle of chemical photography that we call film grain.

Grain isn't automatically a problem — it's frequently introduced on purpose to set a mood or bind elements together, for instance laying film grain over a computer-generated object so it sits convincingly inside a photographed scene. That said, noise can be undesirable for aesthetic reasons too. Archival clips or high-speed photography can look distractingly grainy; compression artifacts or halftone patterns from digital sources can spoil a picture; and noise can get in the way of technical work such as bluescreen compositing.

There are technical motivations for cutting noise as well. Compression routines, for one, tend to produce smaller files when fed cleaner material, which makes noise reduction a worthwhile preprocessing step ahead of jobs like DVD authoring and video streaming.

With the Add Grain, Match Grain, and Remove Grain effects you can work on grain that is spread fairly uniformly across a whole image. What grain effects can't repair are defects confined to a handful of pixels — dust, salt-and-pepper noise, or analog video dropouts, for example.

- The Add Grain effect builds fresh grain from scratch rather than sampling what's already there; it leans on parameters and presets tied to assorted film stocks to synthesize separate grain types.
- The Remove Grain and Match Grain effects take two passes to work grain without touching an image's edges, sharpness, or highlights. The grain is sampled first, either by hand or automatically; then it's analyzed and captured as a mathematical model that the effect draws on to add, strip away, or match the grain.

Remove Grain effect

Cuts down unwanted noise and grain in a clip so the footage reads cleaner and smoother.

Add Grain effect

Lays synthetic film grain over footage to build texture or hit a particular look.

Match Grain effect

Reads the grain off one clip and transfers it onto another so the two clips line up visually.

## Apply a grain effect

Every grain effect starts out at its default settings shown in Preview mode, where a preview region — boxed by a white border and centered on the picture — appears. For the sake of speed and easy comparison, that region shows how the grain effect looks across just a slice of your image. The grain effects run almost entirely on their own, yet they still hand you plenty of controls for dialing in exact results. Using the generous Blend with Original features bundled with each one, you can also apply the grain effects to only chosen parts of your image.

Pick the layer, then go to Effect > Noise & Grain > [Grain effect].

Within the Effect Controls panel, pick a viewing method from the Viewing Mode dropdown menu:

Preview

Shows how the applied effect currently looks inside a 200x200 pixel area.

Blending Matte

Displays whichever is in play — the current color matte, the mask, or both together — as produced by the present settings of the Blend with Original controls group.

Final Output

Renders the entire active frame using the effect's current settings.

Tune the controls for whichever grain effect you applied over in the Effect Controls panel.

Whatever changes you make show up in the preview region in the Composition panel.

When every control matches what you're after, choose Final Output from the Viewing Mode dropdown.

## Apply a grain effect to a selected area

Through masking and matting a chosen region, the Blend with Original controls group lets you target a grain effect precisely at one part of an image. Two selection methods are open to you, and you can mix them:

- Color Matching: leaves out any image region whose color matches one you pick. Flip the matte and you can instead single such a region out for processing.
- Masking Layer: pulls in any layer from the current composition to act as a mask, so you can process or omit a region of the active layer or track.

The moment any grain effect goes on, the Amount value within the Blend with Original controls group sits at 0%. That figure sets how much the original image and the processed version are blended. With it at 0% nothing blends and the chosen effect hits the whole image at full strength; at 100% the white regions of the blending matte stay exactly as they were in the original.

Whatever mask or matte you use behaves the same way: its white pixels keep that region of the original out of the grain effect's reach, while its black pixels go through processing as usual. Set Amount to 100% and the white regions blend completely with the original, so they drop out of processing entirely. That holds true even after the match is inverted. The black regions of a matte or mask always get processed no matter what Amount reads. All the Amount slider touches is the territory beneath the white pixels of the matte or mask — purely how each grain effect handles those white areas.

Put a grain effect on the image.

Then, in the Effect Controls panel, take one of these routes:

- When you want a matte drawn around the region the grain effect should hit or skip, work with the Color Matching controls inside the Blend with Original controls group.
- When you'd rather mask the current layer using another layer or track, work with the Masking Layer controls.

Raise or lower the Blur Matte value to soften the matte, smoothing the handoff between the parts of the image that are affected and those that aren't.

Should you be running a color matte and a layer mask together, pick one of these from the Combine Match and Mask Using dropdown menu:

- Screen: turns the matte white anywhere that either the mask or the color match is white.
- Multiply: turns the matte white only where both inputs are white.

Pull the Amount value down to let more of the underlying image read through the grain.

Choose Final Output from the Viewing Mode dropdown menu.

## Generate a color-matching matte

The first time a grain effect is applied, a neutral gray seeds a default color-matching matte, so most images show a matte you can see. Color matching is how the Color Matching group of controls pins down a matte exactly. That matte singles out the parts of the image where the layer running the grain effect blends with the input.

Put a grain effect on the image.

To pick a color the effect should either skip or be confined to, do one of the following next to the Matching Color control inside the Blend with Original and Color Matching controls groups:

- Click the color swatch, then pick a color in the Color Picker dialog box.
- Click the eyedropper and then a color anywhere on the screen.

- So the grain effect leaves the chosen color alone, confirm the Invert Match control is turned off.
- To pen the grain effect in to just the chosen color and spare everything else, turn on Invert Match.

When you'd like colors near the matching color excluded as well, push up the Matching Tolerance value, which fixes the threshold for color matching. The higher it climbs, the more the matte takes in pixels whose colors stray further from the matching color.

Pick an option under the Match Color Using control whenever you want to swap out the default test (RGB) for judging whether a color resembles the matching color.

Work the Matching Softness controls to fix how wide the transition band runs between fully matched and fully unmatched pixels — in other words, how gently the affected regions blend into the original image.

Turn on Invert Match when you want the matte flipped so white turns to black and black turns to white. (Within the matte the matching color reads as black and gets processed by the grain effect no matter the Amount setting. Inverting leaves every other setting untouched.)

Should you be running a color matte and a layer mask together, pick one of these from the Combine Match and Mask Using menu:

- Screen: turns the matte white anywhere that either the mask or the color match is white.
- Multiply: turns the matte white where both inputs are white.

Choose Final Output from the Viewing Mode dropdown menu.

## Generate a layer matte

Now and then you'll want a separate layer or track serving as the mask for the layer that runs a grain effect. A mask of this kind gives you boundless say over precisely which regions of an image change, and to what degree.

1. Apply a grain effect to the image.
   Within the Effect Controls panel, head to the Mask Layer control — it lives inside both the Blend with Original and the Masking Layer controls groups — and pick the layer you mean to use as a mask.

2. From the standard track matte mode options, settle on a masking mode.
   When the masking layer's size doesn't match the current layer, pick one of these from the If Mask Size Differs dropdown menu inside the Masking Layer controls:

- Center: sets the masking layer centered over the current layer.
- Stretch To Fit: rescales the masking layer so it matches the current layer's dimensions.

Should you be running a color matte and a layer mask together, pick one of these from the Combine Match and Mask Using menu:

- Screen: turns the matte white anywhere that either the mask or the color match is white.
- Multiply: turns the matte white where both inputs are white.

Choose Final Output from the Viewing Mode dropdown menu.

To shift where the preview region for a grain effect sits or how big it is, turn to the Preview Region controls group.

Since adding or pulling out grain can shift how sharp the detail looks, it's worth previewing a patch of fine detail — a human face or some text, say. When you're stripping grain with the Remove Grain effect, the sound move is to preview a spot where the grain shows up most plainly or bothers you most, like a broad stretch of solid color.

The surest path to good results is to experiment: nudge several controls in the Effect Controls panel by small amounts and check what happens in the Composition panel after each tweak.

Once a grain effect is on, click the Center button inside the Preview Region group of controls in the Effect Controls panel.

The Composition panel shows a crosshair at its center.

On the image, click where you want the preview region centered.

The preview region redraws itself, now centered at the new spot.

To resize the preview region, set the Width and Height values in the Effect Controls panel to whatever size you want, measured in pixels. (Bigger preview regions can drag rendering down.)

Turn on Show Box when you want the preview region outlined in color. To recolor that outline, next to Box Color do one of the following:

- Click the color swatch, then pick a color in the Color Picker dialog box.
- Click the eyedropper button, and click a color anywhere on the screen.

To check the results, do any of the following:

- When you want the noise structure's fine detail up close, zoom into the preview region.
- To study the noise channel by channel on its own, click the matching color channel icon in the Composition panel.
- To speed up interaction and stretch the preview duration, shrink the processed area with the Region of Interest icon in the Composition panel.
- To hold onto an image of the current frame as it stands, click the Take Snapshot icon in the Composition panel. After that you can click the Show Snapshot icon to view that latest snapshot in place of the live composition and to flip between the preview region's current and earlier states. The trick is enormously handy for judging subtle tweaks.
- To weigh the preview region with the grain effect against it without, click the effect switch beside the grain effect's name in the Effect Controls panel to switch the effect off for a moment. Click Take Snapshot in the Composition panel, flip the effect back on to re-enable it, then click and hold Show Snapshot to bring up the snapshot of the image minus the effect.

## Work with noise samples in Grain effects

Sampling the noise comes first and counts for the most, whether you're clearing noise out of an image or matching one image's noise to another's. As a rule the whole thing runs automatically. When you need finer say, flip over to Manual mode and tune the samples through the Sampling controls group in the Effect Controls panel.

What makes a good noise sample is a solid patch of even color that plainly shows off the noise pattern living in the image. You're after samples of pure noise, free of any image features the algorithm might mistake for grain. Pull samples from a stretch of sky, a background wall, or a region of fleshtone, for instance. Draw every sample from the film, DV, or video stock's normal range. Steer clear of under- or overexposed regions starved of information, above all spots where pixel values have been clipped to flat black or white. Inside that normal exposure band, lean toward samples spanning a mix of RGB values and colors — one off a bright patch, say, one off a dark patch, and one off a region of midtones.

Automatic mode keeps the sample count high so the algorithm has plenty of solid noise data even when a given image makes good samples hard to come by. On top of that, automatic mode can overrule the sample count you've set if the effect comes up short on good samples. Sample size is yours to vary in either automatic or manual mode; bumping it up, though, is no promise of better output, especially once the resulting samples take in wider swings of RGB values. Trim the sample size whenever a particular image lacks big enough patches of constant color. Going the other way, a larger sample size can deliver better output when the image holds large featureless stretches.

## Manually reposition noise samples

For the Match Grain or Remove Grain effect, letting the software pick grain or samples on its own usually does the job, but each sample can be hand-placed, resized, or have its number changed. You might reposition samples, for example, when automatic sampling latched onto an even region that's under- or overexposed and tells you nothing about grain structure.

For the Match Grain and Remove Grain effects, noise samples always come off the source layer no matter what effects or masks are already on that layer, and that approach yields more accurate sampling. Should you want the existing effects folded into the samples, precompose or pre-render the source layer along with the effects, then put the grain effect on the source layer that results.

Stay away from sample areas that show any of these traits: sharp edges, color gradients, highlights, textures like grass or water ripples, fine detail like hair or tree leaves, and over- or underexposed regions starved of information.

Within the Effect Controls panel, pick Noise Samples from the Viewing Mode dropdown menu.

The samples turn up as little white squares (24x24 pixels) laid over the source image.

Pick Manual from the Sample Selection dropdown menu inside the Sampling controls group.

To clear the least useful samples off the image, try dropping how high the Number of Samples value sits.

Inside the Noise Sample Points controls group, click a given noise sample's point parameter . A crosshair shows up in the composition, centered on that sample. Click the spot you want in the Composition panel to set the sample.

With the Selection tool, drag the sample point across the Composition panel to wherever you want it.

Type the horizontal and vertical coordinates you want into the Effect Controls panel.

However many sample points are switched on matches the present Number of Samples value.

5. Repeat for each sample point you want to move.

## Change the sampling source frame

Out of the box the Remove Grain and Match Grain effects pull noise samples from the layer's first frame, but you're free to sample the noise from a different frame instead. Switching frames can help when big lighting or exposure swings show up between frames inside the layer.

Settle on the frame you want to sample, and confirm the project's Display Style is set to Frames, counting from zero. The current frame's number then shows in blue at the top-left corner of the Timeline panel. Punch that frame number in as the Source Frame value inside the Sampling controls group.

Pick Noise Samples from the Viewing Mode dropdown menu.

The chosen frame turns up in the Composition panel, its automatic samples laid over the image.

## Change the noise sample box color

Setting the viewing mode to Noise Samples for the Remove Grain or Match Grain effect lets you see which areas the effect sampled. A white outline frames those sampled areas on its own. Prefer a different look? You can recolor these noise sample boxes.

Beside the Sample Box Color control inside the Sampling controls group, do one of the following:

- Click the color swatch, then pick a color in the Color Picker dialog box.
- Click the eyedropper button, and click a color anywhere on the screen.

## Working with added or matched grain

The Add Grain effect mints fresh grain or noise in an image, either building it from scratch or pinning the grain's properties to presets. The Match Grain effect likewise mints fresh grain, but it does so by matching the grain found in another image. In the Effect Controls panel the two effects hold several controls in common, letting you steer the grain's color, tonal range, blending mode, and animation properties.

## Adjusting tones of added or matched grain

The exact grain pattern on any film frame doesn't hold steady across the whole frame; instead it can ride on the tonal values of the content at each pixel. Take chemical film grain, where the silver halide crystals shift in size with the exposure level.

Through the Shadows, Midtones, Highlights, and Midpoint controls in the Application controls group, the Add Grain and Match Grain effects let you recreate these fine shifts in grain pattern across an image's regions. Those controls set how much grain lands in each tonal region and in each channel of the image as well. You might, for instance, pile extra grain onto the overexposed parts of the blue channel to make a sky shot look grainier.

The Application controls group for the Add Grain or Match Grain effect lets you do the following:

- Dial in how much grain reaches each tonal region of an image by adjusting the Shadows, Midtones, and Highlights values.
- Fix where the image's tonal range centers for grain-application purposes by moving the Midpoint slider. By default it rests at 0.5, the middle of the pixel-value range; that works out to 127 for 8-bpc images and 16384 for 16-bpc images.
- When still tighter control is called for, the Channel Balance controls let you tune the grain across the shadow, midtone, and highlight regions one channel at a time.

## Animating added or matched grain

Out of the box, the grain or noise the Add Grain and Match Grain effects throw off travels at the same pace as the source material, faithfully mimicking real noise. Easing the noise down can pay off for an aesthetic touch or to stop the added noise from buzzing and calling attention to itself. An internal randomizer inside these effects shuffles the noise pixels' positions from frame to frame. Yet you can also shift how the noise looks between layers on one frame while holding every other parameter steady.

The Animation controls group for the Add Grain or Match Grain effect lets you do the following:

- Set the added grain's frame rate — given as a multiple of the destination frame rate — through the Animation Speed value, which lives in the Animation controls group within the Effect Controls panel. The higher the Animation Speed, the shorter the grains live. Held at the default of 1, the grain moves in step with the frames. Drop it lower and the grain shifts more gradually, which can lend the feel of film grain. At zero the grain stays put over time.
- Smooth the transitions between generated noise frames through interpolation by turning on Animate Smoothly. This control only counts when Animation Speed is below 1.
- Shift how the noise looks between layers on one frame by changing the Random Seed value. Each Random Seed value stands for one of 100 possible looks; changing it doesn't push the results toward more or less randomness.

## Blending and adjusting color of added or matched grain

The color, saturation, and blending behavior of the grain that the Add Grain or Match Grain effect produces are all yours to adjust.

A handful of factors can sway the apparent color of the grain these effects generate, among them:

- The color value carried by the underlying pixel in the source image.
- The noise's Saturation value.
- The Tint Color and Tint Amount values, if you've shifted them off their defaults.
- The Blending Mode value over in the Application controls group.
- However much noise, if any, you've applied to each channel one at a time through the Channel Intensities controls group.

Over in the Effect Controls panel, the Color controls group opens up any of these for adjustment:

- Monochromatic: hands the added noise a single tint. The tones default to black and white, though you can shift the Tint Color to turn it into a gradient of any color. (When Monochromatic is on, the Saturation and Channel Intensities controls go unavailable.)
- Tint Amount: governs how deep and intense the color shift runs.
- Tint Color: governs the color the added noise leans toward.
- Saturation: governs how much color there is and how vivid it reads.

How the color value of the generated noise merges with the color value of the underlying source layer at each pixel is decided by the Blending Mode in the Application controls:

- Film: makes the generated grain look baked into the image. Darker colors take more of a hit than lighter ones, mirroring how grain shows up in a film negative.
- Multiply: multiplies the color values of the noise and the source. The outcome can land either lighter or darker than the original, though, since the noise may carry a positive or a negative value.
- Add: merges the source color values of the pixel with the noise. Even so, the result isn't always lighter than the original, because the noise grain effects make can hold a positive or a negative value.
- Screen: takes the noise and the source, inverts their brightness, and multiplies those. It plays out like printing from a multiple exposure on a negative. The result always comes out brighter than the original.
- Overlay: marries the behavior of Film and Multiply. Shadows and highlights both pick up less grain, while midtones take a full dose.

## See also

- [Application](script-application.md)
