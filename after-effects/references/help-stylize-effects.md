# Stylize Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 26, 2025

Third-party effects bundled in this category with After Effects:

CC Block Load effect (CS6 or later)

CC Burn Film effect

CC Glass effect

CC Kaleida effect

CC Mr. Smoothie effect

CC Plastic effect (CS6 or later)

CC RepeTile effect

CC Threshold effect

CC Threshold RGB effect

See Third-party plug-ins included with After Effects.

## Brush Strokes effect

A coarse, hand-painted appearance is what the Brush Strokes effect lays over an image. You can also chase a pointillist look by dropping brush-stroke length to 0 and pushing stroke density up. Even though you set the strokes' direction, a small random scatter keeps the result looking more natural. This effect reworks the alpha channel alongside the color channels; if you've masked off part of the image, the brush strokes paint right over the mask's edges.

This effect works with 8-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Stroke Angle

The heading the strokes follow. The image effectively slides that way, which can clip things at the layer's edges. Run the Grow Bounds effect ahead of Brush Strokes to push the layer's edges outward and head off that clipping.

Brush Size

The brush's size, measured in pixels.

Stroke Length

Each stroke's longest possible reach, in pixels.

Stroke Density

The higher the density, the more the brush strokes overlap.

Stroke Randomness

Yields strokes that aren't uniform. The more randomness you add, the further the strokes stray from the brush and stroke settings you set.

Paint Surface

Sets where the brush strokes land:

Paint On Original Image

Lays the strokes over the untouched layer. This is the default.

Paint On Transparent

Leaves only the strokes visible, with the layer transparent in the gaps between them.

Paint On White/Paint On Black

Lays the strokes over a white or black backdrop.

Blend With Original

How transparent the effect is. The effect's output blends with the original image, composited on top of it. Push this value higher and the effect touches the layer less. Set it to 100%, for example, and the effect leaves no visible mark on the layer; set it to 0% and none of the original image peeks through.

## Cartoon effect

What the Cartoon effect does is simplify and smooth an image's shading and colors while drawing strokes along the borders between features. Overall it cuts contrast where contrast runs low and lifts it where contrast runs high. The outcome may resemble a sketch or cartoon, or it may stay fairly understated. Put the Cartoon effect to work simplifying or abstracting an image for style, drawing the eye to detailed regions, or masking weak source footage.

One edge the Cartoon effect holds over certain other effects and techniques that reach a comparable look is its stronger temporal coherence. In practice, that means the Cartoon effect's output shifts little between one frame and the next when those two frames are much alike.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Three stages make up how the Cartoon effect operates:

A blurring pass akin to the Bilateral Blur effect smooths the image and strips out small variations. The Detail Radius and Detail Threshold properties steer this phase.

It locates the image's edges and lays a stroke along them, much like the Find Edges effect. The properties in the Edge and Advanced groups control how edges get found and how the strokes are drawn.

It trims the image's luminance and color variation, simplifying the shading and color. The Fill group's properties steer this quantization (posterization).

Note

Start with Render at Fill Only and nail down the image colors you're after first. Then pick either Edges or Fill & Edges and settle the basic edge appearance. The Advanced group's properties let you refine the look once the other controls have set the basic appearance.

Like any other properties, the Cartoon effect's properties can be animated. Settings that suit one stretch of a scene may fall short for another. You might, say, want fewer colors and heavier edge strokes for a face close-up than for an action shot crowded with subjects and detail.

Note

Ahead of applying the Cartoon effect, think about either lowering the composition's frame rate or running the Posterize Time effect on the layer when you want a movie to read as a cartoon. Keep in mind that the frame rates of cartoons sit far beneath those of live-action footage.

Original layer based on video footage item

Original layer based on video footage item Cartoon effect applied with Render set to Fill

Cartoon effect applied with Render set to Fill Cartoon effect applied with Render set to Edges

Cartoon effect applied with Render set to Edges Cartoon effect applied with Render set to Fill Edges

Cartoon effect applied with Render set to Fill Edges

Cartoon effect properties

Render

Fill, Edges, or Fill & Edges. Sets which operations run and which results show.

Detail Radius

The radius of the blurring pass that smooths the image and clears detail before edges get found. A bigger blur radius averages more pixels together for each pixel value, so a larger Detail Radius means more blur.

Detail Threshold

The Cartoon effect's blur pass resembles the one in the Bilateral Blur effect. (See Bilateral Blur effect.) Wherever an edge or other prominent detail sits, the blur radius drops automatically. The Detail Threshold value sets how the Cartoon effect tells which regions hold features worth keeping from which should take the full blur. A lower Detail Threshold keeps more fine detail; a higher one drives a more simplistic, cartoon-like result with less detail retained.

Fill

The image's luminance values get quantized (posterized) per the Shading Steps and Shading Smoothness property settings. At a Shading Smoothness of 0, the result lands close to plain posterization, transitions between values snapping sharply. Raise Shading Smoothness and the colors blend more naturally, transitions between posterized values easing in gradually and gradients surviving.

How much detail the original image holds factors into the smoothing phase, so regions that are smooth already (a sky gradient, say) escape quantization unless the Shading Smoothness value runs low.

Edge

These properties set the fundamentals of what counts as an edge and how the stroke laid on an edge looks.

Threshold

Sets how far apart two pixels must be for the Cartoon effect to read them as straddling an edge. Raise the Threshold to flag more regions as edges.

Width

How thick the stroke added to the edge is.

Softness

Raise this value to ease the transition between an edge's stroke and the colors around it.

Opacity

How opaque the stroke laid on the edge is.

Advanced

Advanced settings tied to edges and performance.

Edge Enhancement

Positive values sharpen the edges; negative ones spread them. The enhancement warps the whole image by pulling pixels toward or away from the edges, which sharpens or spreads them.

Edge Black Level

At 0, only the pixels flagged as part of an edge get a stroke; with Render at Edges, the image stays white apart from regions carrying a pure black stroke. Nudge Edge Black Level up a little to bring shades of gray into the Edges render phase. Raise it more to head toward a look resembling white strokes over a black backdrop.

Edge Contrast

The contrast within the grayscale rendering of the edges.

Performance

Should your machine hold a display card whose GPU supports OpenGL, processing can be accelerated as the Cartoon effect taps that GPU.

## Color Emboss effect

The Color Emboss effect operates like the Emboss effect, only it leaves the image's original colors intact.

This effect works with 8-bpc and 16-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

## Emboss effect

What the Emboss effect does is sharpen the edges of objects in an image while suppressing colors. It also picks out those edges from an angle you set. A layer's quality setting feeds the Emboss effect by steering the Relief setting: In Best quality Relief is figured at the subpixel level, whereas Draft quality rounds it off to whole pixels.

This effect works with 8-bpc and 16-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Direction

The angle the highlight source shines from.

Relief

How tall the embossing appears, in pixels. What the Relief setting really governs is the greatest width the highlighted edges can reach.

Contrast

Sets how sharp the image is.

Blend With Original

How transparent the effect is. The effect's output blends with the original image, composited on top of it. Push this value higher and the effect touches the clip less. Set it to 100%, for example, and the effect leaves no visible mark on the clip; set it to 0% and none of the original image peeks through.

## Find Edges effect

Find Edges locates the regions of a picture where tones shift sharply and pulls those boundaries forward. Depending on the setting, those boundaries show up either as dark strokes over a pale field or as tinted strokes over a black field. Footage treated with this effect frequently resembles a pencil study of the source.

Invert

Flips the picture once the boundaries have been traced. Leave Invert off and the edges read as dark strokes against a light field; turn it on and they read as luminous strokes against a black field.

Color support: 8-bpc.

For quicker rendering, Find Edges taps GPU acceleration.

## Glow effect

Glow picks out the lighter regions of a picture and then raises the brightness of those pixels along with the ones nearby, yielding a soft, radiant halo. The same effect can mimic the way brightly lit subjects blow out. The halo can draw either on the picture's native colors or on its alpha channel. When it draws on the alpha channel, the soft brightness shows up only along the picture's borders, where opaque meets transparent. Glow will also build a graded halo running between a pair of colors (the A and B colors) and, through looping, produce results with several colors.

Watch out: rendering Glow at Best quality may shift how the layer reads, particularly when you've colored the halos with Adobe Photoshop arbitrary maps. Always check a Best-quality preview ahead of the final render.

Note

Because a 32-bpc project's wide dynamic range keeps the halo's color values from being clipped, glows come out brighter and more lifelike there. That alone is reason enough to work in 32-bpc color, even when your footage items carry no high–dynamic range color values.

Color support: 8-bpc, 16-bpc, and 32-bpc.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Glow Based On

Selects whether the halo keys off color values or off transparency values.

Glow Threshold

Establishes, as a brightness percentage, the level the halo skips. Drop the percentage and the halo spreads across more of the picture; raise it and the halo covers less.

Glow Radius

How far out, measured in pixels, the halo reaches from the picture's bright regions. Bigger numbers give soft, spread-out halos; smaller numbers give halos with crisp borders.

Glow Intensity

How bright the halo is.

Composite Original

Governs the way the effect output combines with the layer. On Top lays the halo over the picture using whatever blending Glow Operation is set to. Behind tucks the halo under the picture for a backlit look. None pulls the halo away from the picture entirely.

Note

Want only the halo left on the layer? Set both Composite Original and Glow Operation to None. To make text knock out (block) everything beneath it while still glowing, set Glow Operation to Silhouette Alpha. A feathered edge on the picture makes any of these glows stand out more.

Glow Colors

Which colors the halo uses. Pick A & B Colors and the halo becomes a gradient built from the Color A and Color B controls.

Color Looping

When A & B Colors is the choice for Glow Colors, this sets the shape of the gradient curve to follow.

Color Loops

Choose two or more loops and the halo picks up multicolor ringing. A lone loop runs once through whatever gradient (or arbitrary map) Glow Colors specifies.

Note

To make an arbitrary map (.amp) file, apply the Curves effect, choose the pencil icon, and then click the save (floppy disk) icon. To bring that arbitrary map file into Glow, click the Options link and pick the .amp file.

Color Phase

The point in the color cycle at which the color loops kick off. Out of the box, color loops start at the origin of the first loop.

A & B Midpoint

This midpoint sets how the gradient's two colors balance against each other. Smaller percentages lean away from the A color; larger percentages lean away from the B color.

Color A, Color B

The halo's color when you've picked A & B Colors for Glow Colors.

Glow Dimensions

Sets the halo to run horizontally, vertically, or in both directions.

For quicker rendering, Glow taps GPU acceleration.

## Mosaic effect

Mosaic packs a layer with flat-colored rectangles, turning the source picture blocky. Reach for it when you want to fake a low-resolution screen or hide a face, and it animates nicely as a transition too. Run it at Best quality and the rectangle borders get anti-aliased.

Color support: 8-bpc and 16-bpc.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Horizontal/Vertical Blocks

How many blocks sit in each row and each column.

Sharp Colors

Hands each tile the color found at the center of its matching patch in the source picture. Leave it off and each tile instead takes the average color across that matching patch.

For quicker rendering, Mosaic taps GPU acceleration.

## Motion Tile effect

Motion Tile copies the source picture again and again over the output picture. Shift where the tiles sit and, with motion blur turned on, it leans on motion blur to play up that movement.

Color support: 8-bpc.

Tile Center

Where the main tile is centered.

Tile Width, Tile Height

Tile size, expressed as a percentage of the input layer's size.

Output Width, Output Height

Output picture size, expressed as a percentage of the input layer's size.

Mirror Edges

Turns adjacent tiles into mirror images of one another. With Phase at 0, turning this on mirrors the layer's edges against the tiles around them.

Phase

By how much the tiles are offset, horizontally or vertically.

Horizontal Phase Shift

Shifts tiles sideways rather than up and down.

## Posterize effect

Posterize cuts down the count of colors, swapping smooth color blends for sharp jumps between colors. For each channel in a picture you set how many tonal levels (brightness values) to keep, and Posterize then snaps every pixel to whichever level sits closest. Pick two tonal levels in an RGB picture, say, and you end up with two reds, two greens, and two blues. The setting accepts values from 2 to 255.

Level

How many tonal levels each channel keeps.

Color support: 8-bpc, 16-bpc, and 32-bpc.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

## Roughen Edges effect

Roughen Edges chews up an alpha channel and can wash in color to fake rust and similar corrosion. The result lends rasterized text or artwork a believably ragged appearance, reminiscent of worn typewriter type.

Color support: 8-bpc.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Edge Type

Which style of roughening gets used.

Edge Color

Which color goes on the edge for Rusty Color or Roughen Color, or onto the fill for Photocopy Color.

Border

The reach, in pixels, that the effect pushes inward from the alpha channel's edge.

Edge Sharpness

Smaller numbers yield softer edges; larger numbers yield sharper ones.

Fractal Influence

How much roughening is applied.

Scale

The scale of the fractal that drives the roughness calculation.

Stretch Width or Height

The width or the height of that fractal used in calculating the roughness.

Offset (Turbulence)

Picks which part of the fractal shape feeds the roughness.

Complexity

Sets how much detail shows up in the roughness.

Note

More complexity means longer renders. To land on comparable results, dial the Scale value down instead of pushing Complexity up.

Evolution

Keyframe this setting and the roughness shifts as time passes.

Note

The Evolution value is counted in units called revolutions, but keep in mind that those revolutions move forward only. Each fresh value carries the Evolution state onward without limit. Reach for the Cycle Evolution option whenever you need the Evolution setting to snap back to where it started at every revolution.

Evolution Options

These options give you controls that render the effect across one brief cycle and then repeat it for as long as your layer runs. Lean on them to pre-render your roughen elements into loops and shave render time. The controls below build a seamless, forward-moving loop that never visibly repeats:

Cycle Evolution

Builds a loop that drives the Evolution state back to where it began.

Cycle

How many revolutions of the Evolution setting the fractal runs through before repeating. The spacing of your Evolution keyframes sets the pace of the Evolution cycles.

Note

Since the Cycle control touches only the fractal's state and not geometrics or the other controls, varying the Size or Offset settings hands you different outcomes.

Random Seed

Sets the value the roughness texture is generated from. Keyframe this property and you get flashing between one batch of fractal shapes and another inside the same fractal type. For roughness that transitions smoothly, lean on the Evolution control instead.

Note

Spin up fresh roughness animations by recycling Evolution cycles you've already built and tweaking nothing but the Random Seed value. A new Random Seed value reshapes the noise pattern while leaving the Evolution animation alone.

## Scatter effect

Scatter shuffles the pixels within a layer, leaving things looking blurred or smudged. It leaves each pixel's own color untouched and instead redistributes the pixels at random, though they stay roughly where they started.

Color support: 8-bpc and 16-bpc.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Grain

Which way the pixels scatter—across or up and down. Pick None and the pixels scatter every which way.

Scatter Randomness

Sets whether the scattering shifts frame to frame. Turn on the Randomize Every Frame option to animate scattering without leaning on keyframes or expressions.

## Strobe Light effect

Strobe Light effect applied

Strobe Light effect applied

At regular or random intervals, Strobe Light either runs an arithmetic operation on a layer or drops the layer to transparent. You might, for instance, have the layer vanish completely for one-tenth of a second every 5 seconds, or have a layer's colors flip at random moments.

Color support: 8-bpc.

Strobe Color

The color the strobe light takes.

Blend With Original

How transparent the effect is. The effect's output gets mixed with the source picture, with that output sitting on top. Push this value up and the effect bites into the layer less. Set it to 100%, for example, and the effect leaves no visible mark on the layer; set it to 0% and none of the original picture comes through.

Strobe Duration (secs)

The length, in seconds, of each individual strobe.

Strobe Period (secs)

The span, in seconds, from the start of one strobe to the start of the next.

Random Strobe Probability

The odds that the strobe operation hits any particular frame.

Strobe

Pick Makes Layer Transparent for each strobe to drop the layer to transparent. Pick Operates On Color Only to run whatever Strobe Operator specifies.

Strobe Operator

Which operation each strobe runs.

## Texturize effect

Texturize makes one layer look as though it carries the texture of a second layer. You might, for example, render a tree picture as if it were built from bricks, dialing in how deep the texture sits and where the light seems to fall. Run it at Best quality and the texture layer is placed and scaled with subpixel precision.

On his website, Chris Zwar shares a sample project where four effects work together—Displacement Map, Turbulent Displace, Texturize, plus a blend of Blur and Color Correction—to build a transition in which a picture turns into a watercolor washed across a sheet of rough paper.

Color support: 8-bpc.

Original layers (left), and with whirl layer applied as the texture (lower-right)

Original layers (left), and with whirl layer applied as the texture (lower-right)

Texture Layer

Where the texture comes from.

Light Direction

The angle from which light strikes the texture.

Texture Contrast

How strong the result is.

Texture Placement

The way the texture layer maps onto the effect layer:

Tile Texture

Lays the texture down over and over.

Center Texture

Sets the texture in the middle.

Stretch Texture To Fit

Pulls the texture out to match the effect layer's dimensions.

## Threshold effect

Threshold turns grayscale or color pictures into stark black-and-white ones. You name a level to act as the threshold; every pixel brighter than it flips to white, and every pixel darker flips to black.

Color support: 8-bpc and 16-bpc.

Effect applied with threshold settings of 44 (left), 70 (center), and 200 (right)

Effect applied with threshold settings of 44 (left), 70 (center), and 200 (right)
