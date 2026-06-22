# Generate Effects (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 26, 2025

Within this category, After Effects ships these third-party effects:

CC Glue Gun effect

CC Light Burst 2.5 effect

CC Light Rays effect

CC Light Sweep effect

CC Threads effect

See Third-party plug-ins included with After Effects.

## 4-Color Gradient effect

Blending of four colors is what the 4-Color Gradient effect generates. Four effect points drive the gradient, and you can animate where each sits and what color it carries through the Positions & Colors controls. Picture four solid-color circles, one centered on each effect point, merged into a single blend.

Color depths of 8-bpc and 16-bpc are supported by this effect.

Blend

Raise this and the shifts from one color to the next grow softer.

Jitter

Governs how much jitter (noise) appears in the gradient. Because jitter cuts down on banding, it acts only on the regions where banding would otherwise show up.

Opacity

Sets the gradient's opacity, expressed as a fraction of the layer's own Opacity value.

Blending Mode

Picks the blending mode that merges the gradient into the layer.

## Advanced Lightning effect

Electrical-discharge simulations come from the Advanced Lightning effect. It differs from the Lightning effect in that it won't animate on its own; to put the lightning in motion, keyframe the Conductivity State or any other property. The effect carries an Alpha Obstacle feature that lets you route the lightning around objects you designate.

On his website, Chris Zwar walks through in detail how he turned the Advanced Lightning effect into simulated blood-vessel capillaries.

Color depth of 8-bpc is supported by this effect.

Lightning Type

Sets what kind of lightning you get.

note: Whichever type you pick reshapes how the Direction/Outer Radius contextual control behaves. With the Breaking type, widening the gap between Origin and Direction pulls the branches toward the Direction point.

Origin

Sets where the lightning begins.

Direction, Outer Radius

What this control does shifts with the Lightning Type:

Not In Use

When Lightning Type is set to Vertical, neither the Direction nor the Outer Radius control can be used.

Outer Radius

Sets how far the lightning reaches from its origin. Choosing Omni or Anywhere as the lightning type turns this control on; use it to cut the lightning off at a fixed distance from the origin.

Direction

Sets which way the lightning runs. This control turns on for any of these lightning types: Direction, Strike, Breaking, Bouncy, and Two-Way Strike.

Conductivity State

Reroutes the path the lightning follows.

Core Settings

This group of controls tunes the various traits of the lightning's core.

Glow Settings

This group of controls tunes the lightning's glow.

note: You can switch the glow off by setting Glow Opacity to 0, which can shave a great deal off render time.

Alpha Obstacle

Sets how strongly the original layer's alpha channel steers the lightning's path. With Alpha Obstacle above zero, the lightning treats opaque regions as obstacles and tries to bend around them; below zero, it favors staying within the opaque regions and shies away from the transparent ones. Crossings between opaque and transparent regions are still possible, but the farther Alpha Obstacle sits from zero, the less often they happen.

note: When Alpha Obstacles is set to anything but 0, a preview below full resolution can't always be trusted to show the right result, since full resolution may surface obstacles you didn't see. Confirm the outcome at full resolution before you commit to a final render.

Turbulence

Sets how much turbulence runs through the lightning path. Crank it up for a busier strike with extra branches and forks; dial it down for a plainer strike carrying fewer branches.

Forking

Sets the share of a branch that forks. Both the Turbulence and Alpha Obstacle settings feed into forking.

Decay

Sets how steadily the lightning's strength decays or dissipates, and shapes where the forks start losing opacity.

Decay Main Core

Lets the main core decay together with its forks.

Composite On Original

Blends the lightning onto the original layer through the Add blending mode. Turn it off and you'll see the lightning by itself.

Complexity

Sets how intricate the turbulence within the lightning becomes.

Min. Forkdistance

Sets the smallest pixel gap allowed between fresh forks. Smaller values pack more forks into the lightning; larger values thin them out.

Termination Threshold

Sets the point at which a path ends, judged by atmospheric resistance and any alpha collision. Lower settings let the path quit sooner when it meets resistance or alpha obstacles; higher settings make it work harder to skirt alpha obstacles.

note: Pushing up Turbulence or Complexity raises resistance in certain regions, and those regions move as conductivity shifts. Pushing up the Alpha Obstacle value raises resistance along alpha edges.

Main Core Collision Only

Limits collision calculations to the main core, leaving the forks untouched. This control matters only when Alpha Obstacle is selected.

Fractal Type

Sets which kind of fractal turbulence builds the lightning.

Core Drain

Sets the percentage drained from the core's strength whenever a new fork is born. Raise it and the core grows less opaque wherever new forks appear. Since forks feed off the main core, lowering it also thins the forks' opacity.

Fork Strength

Sets how opaque each new fork is, gauged as a percentage of the Core Drain value.

Fork Variation

Sets how much the fork opacity varies, governing how far it strays from the figure given in Fork Strength.

## Audio Spectrum effect

Put the Audio Spectrum effect on a video layer to show the audio spectrum of a layer carrying audio (and, if you like, video). What it draws is the strength of audio levels across the frequency span you mark out with Start Frequency and End Frequency. There are several display styles available, one of which follows a mask path.

Note

Audio Spectrum reads the audio source footage raw, ignoring time-remapping, effects, stretch, and levels. If you need the spectrum to reflect those, precompose the audio layer first, then apply the Audio Spectrum effect.

Note

So that other masks on the layer don't clip what the Audio Spectrum effect outputs, switch their mask modes to None. (See Mask modes.)

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported by this effect.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

Audio Layer

Which audio layer to feed in as the source.

Start Point, End Point

Sets where the spectrum begins or ends when Path is set to None.

Path

Which mask path the audio spectrum traces.

Use Polar Path

Makes the path radiate from one point as a radial graph.

Start Frequency, End Frequency

The bottom and top frequencies, given in hertz, to show.

Frequency Bands

How many frequency bands the shown frequencies are split into.

Maximum Height

The tallest a shown frequency can reach, in pixels.

Audio Duration

How much audio, in milliseconds, feeds the spectrum calculation.

Audio Offset

The time offset, in milliseconds, applied when pulling the audio.

Thickness

How thick the bands are.

Softness

How feathered or blurry the bands look.

Inside Color, Outside Color

The bands' inner and outer colors.

Blend Overlapping Colors

Tells overlapping spectrums to blend together.

Hue Interpolation

When this sits above 0, the shown frequencies cycle around the hue color space.

Dynamic Hue Phase

With this on and Hue Interpolation above 0, the Start color migrates to the top frequency within the shown range. That lets the hue track the spectrum's fundamental frequency as it moves.

Color Symmetry

With this on and Hue Interpolation above 0, the start and end colors match. That keeps color continuous on closed paths.

Display Options

Chooses whether frequency shows as Digital, Analog Lines, or Analog Dots.

Side Options

Chooses whether the spectrum sits above the path (Side A), below it (Side B), or on both (Side A & B).

Duration Averaging

Averages the audio frequencies to cut down randomness.

Composite On Original

With this on, the original layer shows alongside the effect.

## Audio Waveform effect

Put the Audio Waveform effect on a video layer to show the audio waveform of a layer carrying audio (and, if you like, video). It offers several display styles, including following an open or closed mask path.

note: Audio Waveform reads the audio source footage raw, ignoring time-remapping, effects, stretch, and levels. If you need the spectrum to reflect those, precompose the audio layer first, then apply the Audio Waveform effect.

Note

So that masks on the layer don't clip what the Audio Waveform effect outputs, switch their mask modes to None. (See Mask modes.)

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported by this effect.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

Audio Layer

Which audio layer you want rendered as a waveform.

Start Point, End Point

Where the waveform begins and ends when Path is set to None.

Path

Set this to None and the audio waveform runs along the layer's path.

Displayed Samples

How many samples appear in the waveform.

Maximum Height

The tallest a shown frequency can reach, in pixels.

Audio Duration

How much audio, in milliseconds, feeds the waveform calculation.

Audio Offset

The time offset, in milliseconds, applied when pulling the audio.

Thickness

How thick the waveform is.

Softness

How feathered or blurry the waveform looks.

Inside Color, Outside Color

The waveform's inner and outer colors.

Waveform Options

Mono folds the audio layer's left and right channels together. Audio layers that aren't stereo play back as Mono.

Display Options

Digital draws each sample as one vertical line spanning the lowest and highest source sample, mimicking the readout on digital gear. Analog Lines draws each sample as a line joining the previous and next sample taken from either the lowest or highest audio source sample, mimicking the retrace seen on an analog oscilloscope. Analog Dots draws each sample as a dot standing for either the lowest or highest audio source sample.

Composite On Original

Blends the audio waveform onto the original layer through the Add blending mode. Turn it off and you'll see the audio waveform by itself.

## Beam effect

A travelling beam, such as a laser, is what the Beam effect mimics. You can fire the beam off, or anchor one end to build a wandlike beam with a fixed start or end point. For the best look, switch motion blur on and set the shutter angle to 360.

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported by this effect.

Original (left), and with a simulated beam (right)

Original (left), and with a simulated beam (right)

Length sets how long the beam is as a percentage of the Time you've set. At 100%, for instance, the visible beam reaches its full length when the Time control hits 50%. Time gives the beam's journey from start to finish as a percentage. When Time is animated, the 3D Perspective control applies 3D perspective derived from the start and end thickness.

## Cell Pattern effect

Cellular patterns built on cellular noise are what the Cell Pattern effect produces. Reach for it when you need still or animated background textures and patterns. Those patterns can then serve as textured mattes, transition maps, or the source for displacement maps.

Color depth of 8-bpc is supported by this effect.

Original image (left); the Cell Pattern effect creates a displacement map (center), which is used as a displacement map for the Displacement Map effect (right).

Original image (left); the Cell Pattern effect creates a displacement map (center), which is used as a displacement map for the Displacement Map effect (right).

Cell Pattern

Which cell pattern to apply. The HQ tag marks high-quality patterns, which render sharper than the versions without the tag. Mixed Crystals comes only as a high-quality choice.

note: In appearance, the Static Plates option matches the Plates option. The difference shows during evolution: static plates hold a steady lightness value, whereas plates let the lightness of the cell pattern drift.

Invert

Flips the cell pattern, so black regions turn white and white regions turn black.

Contrast/Sharpness

Sets contrast for the cell pattern when you've chosen Bubbles, Crystals, Pillow, Mixed Crystals, or Tubular. For any of the Plate or Crystallize options, it sets sharpness instead.

note: Whatever you pick from the Overflow menu has a bearing on the contrast.

Overflow

How the effect handles values landing outside the 0-255 grayscale range. Overflow can't be used once a sharpness-based cell pattern is in play.

Clip

Anything above 255 maps to 255, and anything below 0 maps to 0. The Contrast amount drives how much of the image spills past the 0-255 range; crank contrast up and the image trends toward mostly black or white with little gray, so subtle cellular detail thins out at higher contrast settings.

Soft Clamp

Pulls grayscale values back inside the 0–255 range. Contrast looks softened, leaving cells mostly gray with only scattered patches of pure black or white.

Wrap Back

Values past 255 or under 0 fold back into the 0-255 range. A value of 258 (255+3), for example, folds to 252 (255-3), and a value of ‑3 folds to 3. Under this setting, Contrast values over 100 add complexity and detail.

Disperse

How randomly the pattern gets drawn. Smaller values yield more uniform, gridlike cell patterns.

note: Should you push the Disperse value past 1.0, switch the layer to Best quality so artifacts don't creep in.

Size

How big the cells are. Default size is 60.

Offset

Picks which slice of the fractal shape goes into building the pattern.

Tiling Options

Pick Enable Tiling to assemble the pattern from repeating tiles. Cells Horizontal and Cells Vertical set how many cells wide and how many cells tall each tile runs.

Evolution

Keyframe this setting and the pattern shifts over time.

note: Evolution is measured in units called revolutions, but keep in mind those revolutions move forward only. The Evolution state keeps advancing without end at every fresh value. Turn on Cycle Evolution to snap the Evolution setting back to where it started on each revolution.

Evolution Options

Evolution Options give you controls that render the effect across one brief cycle and then loop that for as long as your clip runs. Use them to pre-render cell pattern elements into loops, which trims render time.

Cycle Evolution

Builds a loop that drives the Evolution state back to its starting point.

Cycle

How many revolutions of the Evolution setting the cell pattern runs through before repeating. The spacing between Evolution keyframes sets the pace of the Evolution cycles.

note: The Cycle control touches only the cell pattern's state, leaving geometrics and other controls alone, so varying the Size or Offset settings yields different results.

Random Seed

Sets a value that seeds the cell pattern. Keyframing this property produces flashing between cell patterns (within the same cell pattern type), which usually isn't what you're after. For a smooth cell-pattern transition, keyframe the Evolution property instead.

note: Spin up fresh cell pattern animations by recycling Evolution cycles you built earlier and editing only the Random Seed value. A new Random Seed value reshapes the cell pattern while leaving the Evolution animation intact.

## Checkerboard effect

A checkerboard of rectangles, half of them transparent, is what the Checkerboard effect lays down.

Color depth of 8-bpc is supported by this effect.

Anchor

Where the checkerboard pattern originates. Shift this point and the pattern offsets.

Size From

How each rectangle's dimensions get worked out:

Corner Point

Each rectangle takes the dimensions of the rectangle whose opposite corners are fixed by the Anchor and Corner points.

Width Slider

A rectangle's height and width both equal the Width value, so the rectangles come out square.

Width & Height Sliders

A rectangle's height equals the Height value, and its width equals the Width value.

Feather

How thick the edge feather runs inside the checkerboard pattern.

Color

The color of the rectangles that aren't transparent.

Opacity

How opaque the colored rectangles are.

Blending Mode

Which blending mode composites the checkerboard pattern over the original layer. These behave just like the ones in the Timeline panel, apart from the default None mode, which renders only the checkerboard pattern.

## Circle effect

A customizable solid disk or ring is what the Circle effect makes.

Color depth of 8-bpc is supported by this effect.

Edge

None yields a solid disk. Every other option yields rings instead, and each one ties to a different group of properties governing the ring's shape and edge treatment:

Edge Radius

The ring's thickness equals the gap between the Edge Radius property and the Radius property.

Thickness

The ring's thickness is set by the Thickness property.

Thickness \* Radius

The ring's thickness equals the Thickness property multiplied by the Radius property.

Thickness & Feather \* Radius

The ring's thickness equals the Thickness property multiplied by the Radius property. Its feather equals the Feather property multiplied by the Radius property.

Feather

How thick the feather is.

Invert Circle

Flips the matte.

Blending Mode

Which blending mode merges the shape with the original layer. These act like the blending modes in the Timeline panel, except for None, which shows the shape alone, leaving out the original layer.

## Ellipse effect

An ellipse is what the Ellipse effect draws.

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported by this effect.

## Eyedropper Fill effect

A sampled color gets laid onto the source layer by the Eyedropper Fill effect (which used to be called the Color Picker effect). It comes in handy for grabbing a solid color fast from a sample point on the original layer, or for lifting a color value off one layer and using blending modes to push that color onto a second layer.

Color depth of 8-bpc is supported by this effect.

Sample Point

The middle of the area being sampled.

Sample Radius

The radius of the area being sampled.

Average Pixel Color

Which color values get sampled:

Skip Empty

Averages the RGB color values while leaving out the color values of transparent pixels.

All

Averages every RGB color value, transparent pixels' values included.

All Premultiplied

Averages every RGB color value, premultiplied against the alpha channel.

Including Alpha

Averages every RGB color and alpha channel value. With this on, the sampled color also carries the average transparency of the pixels sampled.

Maintain Original Alpha

Holds onto the original layer's alpha channel. Pick Including Alpha from the Average Pixel Color menu and the sampled color gets the original alpha stenciled across it.

Blend With Original

How transparent the effect is. The effect's result is blended over the original image, sitting on top. Raise this value and the effect bites less into the layer: at 100% the effect leaves no visible mark on the layer, while at 0% none of the original image comes through.

## Fill effect

Specified masks get filled with a specified color by the Fill effect. When you want both a stroke and a fill on a closed path, the sequence you apply them in sets the stroke's visible width: apply the fill first and the full stroke brush size shows; apply the stroke first and the fill lands over it, hiding the half of the stroke that sits inside the path.

This effect works in 32-bit color.

## Fractal effect

The Mandelbrot or Julia set gets rendered by the Fractal effect, yielding colorful textures. Apply it and what greets you first is the classic Mandelbrot sample; the set itself is the region colored black. Every pixel beyond the set picks up color according to how near it lies to the set.

Color depths of 8-bpc and 16-bpc are supported by this effect.

Spaceship layer (upper-left) composited over layer with Mandelbrot fractal with Lightness Gradient palette (lower-left) and Julia fractal (lower-right)

Spaceship layer (upper-left) composited over layer with Mandelbrot fractal with Lightness Gradient palette (lower-left) and Julia fractal (lower-right)

Set Choice

Picks which set is used. Mandelbrot is the standard Mandelbrot set. Mandelbrot Inverse is that set turned inside out mathematically. Julia keeps shifting with the center point taken from the Mandelbrot set and can yield the whole family of possible Julia sets. Julia Inverse is the Julia set inverted. To view a Julia set, you may need to push the magnification negative, since these sets tend to spill past the usual boundary across the complex plane. Mandelbrot Over Julia matches Mandelbrot, save that it shifts as the Julia center point shifts. Mandelbrot Inverse over Julia matches Mandelbrot Inverse, save that it shifts as the Julia center point shifts.

Mandelbrot, Julia

Set the parameters for the chosen set. X (Real) and Y (Imaginary) mark the pixels at the image's center for either the Mandelbrot or Julia set. Magnification sets how far the effect is magnified. Escape Limit fixes how many passes the calculation makes searching for a pixel's color before defaulting it to black; it likewise caps the count of line segments the Selection tool may use while tracing a point's path. Larger numbers cost more render time.

Color

Sets the effect's color:

Overlay

Shows a ghosted copy of the opposite set. While viewing the Julia set, for example, this control brings up a ghosted Mandelbrot set. Switch Overlay on and a white cross hair backed by a black drop shadow marks the precise center point of the opposite set. It earns its keep because the Julia set hinges on the Mandelbrot set's center point.

Transparency

Decides whether black pixels go transparent. If you've chosen Solid Color in the Palette menu, this instead decides whether everything inside or outside the set goes transparent.

Palette

Picks the palette used to draw the set. Lightness Gradient builds a gradient running black to white by way of the hue set in the Hue control, then lays that same gradient down eight more times, each shifted to the hue 45° around the color wheel. Cycle Steps sets how many colors fill the gradient. Hue Wheel draws on every color of the Hue color wheel at full brightness and saturation. Black And White alternates bands of black and white. Solid Color drops everything to transparent except the inside of the set, which takes the color from the Hue control; pick Transparent for the reverse outcome.

Hue

Sets the hue for solid colors and the opening hue for color gradients. It's well suited to producing smooth color shifts or cycling the palette. Cycle Steps sets how many bands of differing color show before the cycle restarts. Cycle Offset sets where a cycle begins other than at the start.

Edge Highlight

Brings out the edges between color bands. This control calls for low-quality mode. For high-quality edge highlighting, turn to the Find Edges effect instead.

High Quality Settings

Set the oversampling parameters for the effect:

Oversample Method

Sets which approach oversamples the effect. Edge Detect-Fast-May Miss Pixels runs a quick edge detection and oversamples only those pixels; it's the quickest, above all across large flat-color regions such as black, and it usually turns out results you can't tell apart from Brute Force. Brute Force-Slow-Every Pixel oversamples every single pixel in the image, slow but exact.

Oversample Factor

Sets how much oversampling runs. A value of 4, for instance, means each pixel is sampled 16 times (4x4=16) and the average color stands in. Larger values sharpen output quality at the cost of longer render times.
