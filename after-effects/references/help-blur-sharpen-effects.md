# Blur Sharpen Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Broadly, a blur effect samples the region surrounding a pixel and hands that pixel a fresh value — the average of everything it sampled. Make the sample bigger, whether you measure it as a radius or a length, and the blur intensifies.

A Repeat Edge Pixels option ships with some blur effects. Switch it on and the blur algorithm behaves as though the pixel values past the layer's edge match the edge pixels themselves. This keeps edges crisp and stops them going dark and more transparent — which is what happens when they're averaged against a lot of zeroes. Switch it off and the algorithm treats the pixel values beyond the layer's edge as zero.

Note

Blurring an image strips out its film grain and noise. For a more believable result, you might add noise back so the picture doesn't read as retouched. Learn more about Noise & Grain effects.

After Effects bundles these third-party effects in this category:

CC Cross Blur effect

CC Radial Blur effect

CC Radial Fast Blur effect

CC Vector Blur effect

Explore all the third-party plug-ins included with After Effects.

## Blur and Sharpen effects — Applying an effect or preset

To apply an effect or an effect preset, drag it from the Effects & Presets panel onto your composition. The Effects & Presets panel opens from Window > Effects & Presets.

Applying an effect or preset to your composition

Applying an effect or preset to your composition

## Blur and Sharpen effects — Bilateral Blur effect

Edges and fine detail survive when you run the Bilateral Blur effect, because the blurring is applied selectively. Where contrast runs high—pixel values that sit far apart from one another—the softening is applied more gently than across the flatter, low-contrast regions.

What sets Bilateral Blur apart from the Smart Blur effect is that even edges and details still pick up a touch of softening here. That yields a gentler, more dreamlike appearance compared to Smart Blur driven by matching settings.

Output from Bilateral Blur lands very close to what the Surface Blur filter in Adobe Photoshop produces.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Threshold

Wherever an edge or other standout detail sits, the blur radius is scaled down on its own. Threshold is the dial that tells the Bilateral Blur effect which regions hold features worth keeping versus which ones get the full blur treatment. Push Threshold lower and more of the fine detail stays intact; raise it and you end up with a plainer outcome that keeps fewer details.

Radius

Bumping up the Radius value widens the blur, because a wider radius pulls more pixels into the average that decides each pixel's final value.

Colorize

Leave Colorize unchecked and the Bilateral Blur effect runs on a single number per pixel—the luminance, a weighted blend of that pixel's R, G, and B channel values. You get a monochrome image as a result.

Switch Colorize on and the effect processes every color channel on its own, which yields a full-color image.

## Blur and Sharpen effects — Box Blur effect

What distinguishes Box Blur from Fast Blur and Gaussian Blur is its Iterations property, a handle that lets you dial in the quality of the blur; otherwise the three are alike.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Iterations

How many times the blur gets run across the image, one pass after another. Set it near 3 and the blur quality lands close to Fast Blur. Crank the iteration count higher and color transitions smooth out while the blur deepens, though render time climbs along with it. Boxy output is what you get at the default value.

## Blur and Sharpen effects — Camera Lens Blur effect

Think of this as the successor to the Lens Blur effect. It carries a wider blur radius (500) and runs far quicker than Lens Blur did. Unlike its predecessor, the Camera Lens Blur effect leaves Render Multiple Frames Simultaneously multiprocessing switched on.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Note

The same descriptions given here for the Camera Lens Blur effect's properties carry over to the camera layer's Camera Options properties group, where the names match or come close.

Iris Properties

Under Iris properties you'll find Shape, Roundness, Aspect Ratio, Rotation, and Diffraction Fringe.

Diffraction Fringe

Wraps a halo around an iris edge to mimic light bending and pooling along the rim of the iris blades. At a setting of 100, you see a natural, ordinary halo scaled to the region the blur shape covers. Push it to 500 and every bit of the blur's energy gets driven out from the interior toward the ring or halo. The net effect essentially imitates a catadioptric lens.

Blur Map

You can press a control layer into service as a blur map that drives Camera Lens Blur effect properties.

Layer

The layer you assign as the blur map.

Channel

Which channel—luminance, color, or alpha—feeds the blur map.

Blur Focal Distance

A control-layer value here maps to no blurring at all. How blurry a given region on the effect's layer turns out depends on the gap between the Blur Focal Distance value and the value coming from the control layer.

Highlight

Adjusts color values for any pixel sitting above the threshold. Lean on higher highlight values to land a strong blooming blur or glow.

Gain

How much energy gets pumped into pixels above the threshold. The brighter a pixel already is past that threshold, the more its value is lifted by this proportional amount.

Threshold

The brightness ceiling that decides what Gain lifts. Pixels far brighter than the threshold get pushed harder than ones only a little above it. Drop the threshold to 0 and any pixel brighter than 0 gets boosted; raise it to 1 and highlights are all but wiped out, unless the image carries overbrights.

Saturation

How much color the boosted pixel hangs onto. At 0, boosted colors are driven toward white—the behavior of the old Lens Blur effect. At 100, the effect works to hold as much color as it can. This highlight saturation really shows itself when colored lights are in play (think of a city skyline after dark), where the hues weave a many-colored tapestry of bokeh.

Edge Behavior

Read up on Blur & Sharpen effects to grasp how the Repeat Edge Pixels options behave within blur effects.

Use Linear Working Space

Delivers output much like a project configured for a linearized working color space. Turn this property on (or set it through the project settings) so your images show off realistic bokeh.

Note

Beyond ticking the Use Linear Working Space checkbox, make sure you're working in 32-bpc color. A lower color bit depth brings on quantization.

### Forward and backward compatibility

Add the Camera Lens Blur effect inside an After Effects CS5.5 and later project, then save it back as an After Effects CS5 project, and a warning pops up to say the effect is missing. Any project built in After Effects CS5 or earlier with the Lens Blur effect keeps that effect once opened in After Effects CS5.5 and later. You can't, however, apply the Lens Blur effect outright in After Effects CS5.5 or later. Read up on saving and backing up projects in After Effects CS5.5 and later.

## Blur and Sharpen effects — Camera-Shake Deblur effect

When camera shake leaves footage blurry, the Camera-Shake Deblur effect helps you claw the detail back. The Warp Stabilizer VFX effect can steady jittery footage, yet leftover artifacts such as motion blur often linger. By trimming those unwanted artifacts, Camera-Shake Deblur effect lands a cleaner outcome. It hunts down blurry frames and works to rebuild them from the sharp frames flanking each one. To merge those sharp frames into the blurry ones, Camera-Shake Deblur effect leans on optical flow technology.

Before and after applying Camera-Shake Deblur effect

Before and after applying Camera-Shake Deblur effect

## Blur and Sharpen effects — Applying Camera-Shake Deblur effect

Tip

You can also reach it through the Effect menu: select Effects > Blur & Sharpen > Camera-Shake Deblur.

Click the search box in the Effects & Presets panel and type Camera-Shake Deblur.

You'll find the effect listed in the Blur & Sharpen effect category.

Drag it onto the timeline to apply it to the composition.

A set of properties comes with Camera-Shake Deblur effect so you can steer how it performs.

Within the Effect Controls panel, twirl open Camera-Shake Deblur effect.

Adjust the properties shown beneath the effect.

- Blur Duration: Sets how many frames around the blurry one get compared to find a frame free of motion blur. This property governs the span of frames over which motion blur persists. Pick a smaller value when the shake is brief and a larger one when it runs longer.
- Deblur Method: Picks the optical flow method, which governs the way pixels move from the motion-blur-free frames onto the blurry frame. Your choices are High Quality (slower) and Standard quality. High Quality (slower) returns sharper accuracy at the cost of longer processing. Standard runs quickly and turns out standard production-quality results.
- Strength: Governs the amount of correction poured into the blurry frame. Depending on how blurry the frame is, you can dial the strength anywhere from 100% (default) up to 200%. Artifacts can creep in at higher values when the motion-blur-free frames inside the blur duration don't line up properly with the blurry ones.
- Shake Sensitivity: Sets the bar for deciding whether a frame counts as blurry enough to warrant deblurring. A lower Shake Sensitivity value treats only the very blurriest frames and might miss other motion blurs. A higher Shake Sensitivity value reacts to motion blur of every kind and attempts to deblur whatever it flags.

- You'll get the best out of the Camera-Shake Deblur effect by applying it once the footage is already stabilized. As an example, run the Warp Stabilizer VFX effect first and bring in the Camera-Shake Deblur effect afterward.
- When a shot resists deblurring, stacking several copies of the Camera-Shake Deblur effect each at a low Strength value can land a better outcome.

## Blur and Sharpen effects — Camera-Shake Deblur effect in After Effects

Watch this video for a walkthrough of cutting motion blur using the Camera-Shake Deblur effect.

## Blur and Sharpen effects — Channel Blur effect

Each of a layer's channels—red, green, blue, or alpha—gets blurred on its own under the Channel Blur effect.

Note

When noise or artifacts cluster mainly in a single color channel—say MPEG compression artifacts sitting in the blue channel of DV footage—reach for Channel Blur to scrub that one channel clean while the rest stay crisp. This effect works with 8-bpc, 16-bpc, and 32-bpc color.

## Blur and Sharpen effects — Compound Blur effect

The Compound Blur effect softens pixels in the effect layer according to the luminance of a control layer, which also goes by the name blur layer or blurring map. Out of the box, brighter spots in the blur layer drive heavier blurring of the effect layer and darker spots drive lighter blurring—tick Invert Blur to flip that so light values mean less blurring.

It comes in handy for faking smudges and fingerprints, or shifts in visibility from atmospheric conditions like smoke or heat, and it shines with animated blur layers such as the ones the Turbulent Noise effect produces.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Maximum Blur

The ceiling, measured in pixels, on how much any region of the affected layer may be blurred.

Stretch Map To Fit

Scales the control layer out to match the dimensions of the layer it's applied to—leave it off and the control layer just sits centered on the effect layer instead.

## Blur and Sharpen effects — Directional Blur effect

A layer takes on the illusion of motion under the Directional Blur effect.

This effect works with 8-bpc, 16-bpc, and 32-bpc color. The effect uses GPU acceleration for faster rendering.

Direction

Which way the blur runs. Because the blur spreads evenly to both sides of a pixel's center, a 180° setting and a 0° setting come out identical.

## Blur and Sharpen effects — Fast Box Blur effect

You get the same rendering outcome as Fast Blur (Legacy), only quicker, from this effect. Apply it by choosing Effect > Blur & Sharpen > Fast Box Blur. Your computer's GPU handles rendering for the Fast Box Blur effect.

Note

When you're scripting or writing expressions, the Fast Box Blur effect goes by the match name ADBE Box Blur2. The earlier match name ADBE Box Blur will still apply the effect, though it brings along the older effect name Box Blur.

## Blur and Sharpen effects — Gaussian Blur effect

Noise drops away and the image grows softer and smoother once the Gaussian Blur effect runs. A layer's quality setting has no bearing on Gaussian Blur.

This effect leans on the Repeat Edge Pixels option and works with 8-bpc, 16-bpc, and 32-bpc colors. It uses GPU acceleration for faster rendering.

Standing in for the Gaussian Blur (Legacy) effect, the Gaussian Blur effect turns out a rendering result that differs slightly from its predecessor.

## Blur and Sharpen effects — Radial Blur effect

Blurs that wrap around a point, mimicking what a zooming or spinning camera would capture, are what the Radial Blur effect builds.

You decide how much anti-aliasing kicks in at Best quality—none is applied at Draft quality. Expect a grainy blur at Draft quality. Those draft results may suit special effects, but the grain can flicker on interlaced displays.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Type

Spin sweeps the blur through arcs around the Center point as though the camera were rotating—Amount sets the degrees of rotation. Zoom drives the blur outward from the center point in a radial pattern—Amount sets how long the blur runs.

## Blur and Sharpen effects — Sharpen effect

Wherever color shifts occur, the Sharpen effect builds up the contrast. A layer's quality setting has no bearing on Sharpen.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

The Sharpen effect uses GPU acceleration for faster rendering.

## Blur and Sharpen effects — Smart Blur effect

Lines and edges hold their definition while the rest of the image softens under the Smart Blur effect. You might use it, for instance, to gently soften shaded regions while the crisp outlines of text and vector graphics stay sharp.

This effect works with 8-bpc and 16-bpc color.

Radius

The reach over which the filter looks for unlike pixels to blur.

Threshold

The amount by which pixel values must differ before they get knocked out.

Mode

Which regions of the image take on the blur? Normal puts the blur across the whole selection, while Edge Only and Overlay Edge confine it to the edges where colors transition. Wherever strong contrast turns up, Edge Only lays down black-and-white edges and Overlay Edge lays down white.

## Blur and Sharpen effects — Unsharp Mask effect

Contrast along the colors that mark an edge gets stronger under the Unsharp Mask effect.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Radius

How far out from the edge pixels get their contrast tuned. Keep the value low and only the pixels hugging the edge are touched.

Threshold

The largest gap between neighboring pixels that still leaves contrast untouched. Lower the value for a stronger effect. Set it too low and contrast across the whole image shifts, which can breed noise or throw off unexpected results.

### More like this

- Effects and animation presets overview
- Importing and interpreting video and audio
- Tracking and stabilizing motion
- Importing and interpreting footage items
