# Color Correction Effects (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 27, 2025

To read up generally on color correction and color adjustment, complete with links to tutorials and further resources, head to Color correction, color grading, and color adjustment.

After Effects ships these third-party effects in this category:

CC Color Neutralizer effect

CC Color Offset effect

CC Kernel effect

CC Toner effect

See Third-party plug-ins included with After Effects.

## Auto Color and Auto Contrast effects

By studying an image's shadows, midtones, and highlights, the Auto Color effect then tunes both its contrast and its color. The Auto Contrast effect, meanwhile, tunes contrast overall along with the blend of colors. In each case, the brightest and darkest pixels get pinned to white and black, and everything in between is spread out again. The upshot: highlights read lighter while shadows read darker.

Since neither Auto Contrast nor Auto Color treats channels one at a time, they neither add nor strip color casts.

Many of the controls behind the Auto Levels effect carry over from the Auto Color and Auto Contrast effects.

Note

Applying the Auto Color effect is a fast route to eliminating — or at minimum easing — the flicker that comes from frame-to-frame swings in exposure and color. It helps, say, when you're calming the flicker of aged film or correcting a light source whose color keeps shifting.

Color depths of 8-bpc and 16-bpc are supported by these effects.

Temporal Smoothing

The span of neighboring frames, measured in seconds, examined to gauge how much correction each frame needs relative to those around it. With Temporal Smoothing set to 0, every frame is judged on its own, ignoring its neighbors. Turning on Temporal Smoothing can yield corrections that look smoother as time passes.

Scene Detect

When this is on, any frames past a scene change are left out as surrounding frames get analyzed for temporal smoothing.

Black Clip, White Clip

The degree to which shadows and highlights get clipped to the image's new extreme shadow and highlight colors. Push the clipping values too far and you sacrifice detail in the shadows or highlights. Staying within a 0.0% to 1% range is advised. Out of the box, shadow and highlight pixels are clipped by 0.1% — in other words, the leading 0.1% at either end is skipped when the darkest and lightest pixels of the image are pinned down. Whatever the lowest and highest values are inside the post-clipping range then map to output black and output white. Doing it this way keeps input black and input white tied to representative pixel values rather than freak extremes.

Snap Neutral Midtones (Auto Color only)

Locates an average, near-neutral color within the frame, then tweaks the gamma values so that color becomes neutral.

Blend With Original

How transparent the effect is. The effect's output gets blended with the original image, the effect's result sitting on top. Raise this value and the effect grips the layer less. Set it to 100%, for instance, and the effect leaves no visible mark on the layer; set it to 0% and the original image stays hidden.

## Auto Levels effect

Within each color channel, the Auto Levels effect pins the lightest and darkest values to white and black, then spreads the in-between values back out. The outcome is lighter highlights and darker shadows. Because each color channel gets adjusted on its own under Auto Levels, color casts can be removed or introduced.

Refer to Auto Color and Auto Contrast effects for descriptions of this effect's controls.

Note

Reaching for the Auto Levels effect is a quick way to wipe out — or at least cut down — the flicker produced by exposure swings from one frame to the next. It comes in handy, for example, when toning down old film's flicker.

Color depths of 8-bpc and 16-bpc are handled by this effect.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

## Black & White effect

Turning a color image into grayscale, the Black & White effect hands you control over the way each individual color is translated.

Support here covers 8-bpc and 16-bpc color.

Dial each color component's property value down or up to render that color channel as a darker or lighter gray.

Want a color tint on the image? Select Tint, then click the color swatch or eyedropper to pick a color.

Photoshop's Black & White adjustment layer type is the basis for the Black & White effect.

## Brightness & Contrast effect

Across an entire layer — not channel by channel — the Brightness & Contrast effect tunes both brightness and contrast. A default of 0.0 means nothing has been altered. For quick, simple tweaks to an image's tonal range, the Brightness & Contrast effect is the simplest route. Every pixel value in the image shifts together — highlights, shadows, and midtones alike.

Color depths of 8-bpc, 16-bpc, and 32-bpc are all supported here.

On his After Effects Portal website, Rich Young gathers tutorials and resources covering the Brightness & Contrast effect and alternatives to it.

GPU acceleration drives the Brightness & Contrast effect for quicker rendering.

## Broadcast Colors effect

Note

Bundled with After Effects, the Color Finesse plug-in carries first-rate tools for keeping colors inside the broadcast-safe range. For further detail, consult the Color Finesse documentation in the Color Finesse subfolder of the Plug-ins folder. (See Plug-ins.)

By reworking pixel color values, the Broadcast Colors effect holds signal amplitudes inside the range broadcast television permits.

Reach for the Key Out Unsafe and Key Out Safe settings under How To Make Color Safe to spot which regions of the image the Broadcast Colors effect touches at the current settings.

Note

For your particular output type, a more dependable approach to holding colors inside the broadcast-safe range relies on color management features, where you set a matching output color profile — SDTV (Rec. 601 NTSC), say. That route guarantees any color values spanning 0.0–1.0 in your working color space turn into broadcast-safe ones. (See Broadcast-safe colors.)

Support here covers 8-bpc color.

Broadcast Locale

Which broadcast standard your intended output targets. NTSC (National Television Standards Committee) serves as the North American standard and sees use in Japan too. Across South America and the bulk of Western Europe, PAL (Phase Alternating Line) is the one in use.

How To Make Color Safe

How to bring signal amplitude down:

Reduce Luminance

Dims a pixel by nudging it toward black. This is the default setting.

Reduce Saturation

Drags a pixel's color toward a gray of comparable brightness, draining its color. At a given IRE level, cutting saturation changes the image more visibly than cutting luminance does.

Maximum Signal Amplitude (IRE)

The signal's ceiling amplitude in IRE units. Any pixel exceeding this value gets altered. 110 is the default. Smaller values touch the image more visibly; larger ones carry more risk.

## Change Color effect

Across a span of colors, the Change Color effect tunes hue, lightness, and saturation.

It runs in 8-bpc and 16-bpc color.

View

The Corrected Layer choice displays what the Change Color effect produced. The Color Correction Mask choice displays a grayscale matte marking the layer regions slated to change. In that color correction mask, white regions shift the most while dark regions shift the least.

Hue Transform

By how many degrees the hue gets adjusted.

Lightness Transform

The matched pixels grow brighter at positive values and darker at negative ones.

Saturation Transform

At positive values the matched pixels gain saturation (heading toward pure color); at negative values they lose it (heading toward gray).

Color To Change

The hub color of the range that will change.

Matching Tolerance

The degree to which colors may stray from Color To Change yet still register as a match.

Matching Softness

How far the effect reaches into unmatched pixels, scaled by how close they are to Color To Change.

Match Colors

Sets which color space is used to gauge color similarity. RGB weighs colors in an RGB color space. Hue weighs only the hues, setting saturation and brightness aside — so bright red and light pink register as a match, for one. Chroma leans on the two chrominance components to judge similarity, setting luminance (lightness) aside.

Invert Color Correction Mask

Flips the mask that decides which colors are affected.

## Change To Color effect

Selecting one color in an image, the Change To Color effect (once called the Change Color HLS effect) swaps it for another by way of hue, lightness, and saturation (HLS) values, while the remaining colors stay put.

Compared with the Change Color effect, Change To Color brings flexibility and choices it lacks. Those include tolerance sliders covering hue, lightness, and saturation for precise color matching, plus the option to dial in the exact RGB values of the target color you're switching to.

Color depths of 8-bpc and 16-bpc are what this effect handles.

Original image (upper-left), with saturation removed in the planet (lower-left), and with light green changed to yellow in the planet (lower-right)

Original image (upper-left), with saturation removed in the planet (lower-left), and with light green changed to yellow in the planet (lower-right)

From

The midpoint of the color range you're changing.

To

The color that matched pixels become. Set keyframes or expressions on the To color to animate a color change.

Change

Which channels the effect touches.

Change By

The method for changing colors. Picking Setting To Color swaps affected pixels straight over to the target color. Picking Transforming To Color shifts affected pixel values toward the target color through HLS interpolation, with each pixel changing by an amount that hinges on how near its color sits to the From color.

Tolerance

The degree to which colors may stray from the From color yet still register as a match. Expand this control to expose individual sliders for Hue, Lightness, and Saturation values.

Note

Turn to the View Correction Matte option to get a clearer read on which pixels are matched and affected.

Softness

How much feathering the correction matte's edges receive. Larger values produce smoother handoffs between the regions the color change touches and those it doesn't.

View Correction Matte

Displays a grayscale matte marking how strongly the effect touches each pixel. White regions change the most, dark regions the least.

## Channel Mixer effect

Blending the existing color channels, the Channel Mixer effect reworks a single color channel. Lean on this effect for inventive color tweaks the other color adjustment tools don't handle easily: decide each color channel's percentage contribution to build top-notch grayscale images, produce high-grade sepia-tone or other tinted results, and duplicate or swap channels.

output channel]-[input channel

What percentage of the input channel's value gets added onto the output channel's value. Take a Red-Green setting of 10: it lifts each pixel's red channel value by 10% of that pixel's green channel value. Set Blue-Green to 100 alongside Blue-Blue at 0 and the blue channel values are overwritten with the green channel values.

output channel]-Const

A constant value, given as a percentage, added onto the output channel's value. A Red-Const setting of 100, for example, maxes out every pixel's red channel by piling on 100% red.

Monochrome

Feeds the red output channel's value into the red, green, and blue output channels alike, producing a grayscale image.

It runs in 8-bpc and 16-bpc color.

## Color Balance effect

Within an image's shadows, midtones, and highlights, the Color Balance effect shifts how much red, green, and blue is present.

Switching on Preserve Luminosity holds the image's average brightness steady while the color shifts. That control keeps the image's tonal balance intact.

Support here covers 8-bpc and 16-bpc color.

## Color Balance (HLS) effect

The Color Balance (HLS) effect reworks an image's hue, lightness, and saturation. Its only purpose is backward compatibility with projects built in older After Effects versions that relied on the Color Balance (HLS) effect. On fresh projects, turn to the Hue/Saturation effect, which behaves just like the Hue/Saturation command in Adobe Photoshop. Drop the Saturation to –100 and you convert a movie to grayscale.

Color depths of 8-bpc and 16-bpc are what it handles.

## Color Link effect

Using another layer's average pixel values, the Color Link effect tints one layer. It's handy when you need to quickly land on a color that pairs with a background layer's color.

It runs in 8-bpc color.

Source Layer

Which layer the colors are sampled from. Pick None and the layer carrying the effect doubles as the source layer, with any masks and other effects on that layer factored in. Pick a layer's name off the menu and the source layer is taken without its masks and effects.

Sample

Sets which values get sampled and which operation runs on them.

Clip

What percentage of pixels at the extreme channel values to disregard. This clipping helps tamp down the sway of noise or other unrepresentative pixels.

Stencil Original Alpha

The effect lays a stencil of the layer's original alpha channel over the new value.

Opacity

How opaque the effect is. The effect's output gets blended with the original image, the effect's result sitting on top. Lower this value and the effect grips the layer less. Set it to 0%, for example, and the effect leaves no visible mark on the layer; set it to 100% and the original image stays hidden.

Blending Mode

Which blending mode merges the effect's result with the original layer. These blending modes drop out when the layer's alpha channel values are being averaged.

## Color Stabilizer effect

At one, two, or three points on a single reference frame — the pivot frame — the Color Stabilizer effect samples the color values; it then tunes the colors of other frames so those points hold steady in color value across the layer's whole duration. The effect serves well for stripping flicker out of footage and evening out exposure when color shifts arise from changing lighting conditions.

Tip: Lean on this effect to clear the flicker that often plagues time-lapse photography and stop-frame animation.

The effect control points marking the sample areas can be animated to track objects whose colors you want held stable. The wider the gap in color values between the sample points, the better the effect performs.

Support here covers 8-bpc and 16-bpc color.

Set Frame

Designates the pivot frame. Show the frame holding the area of brightness or color you mean to match, then click Set Frame.

Stabilize

The thing to stabilize:

Brightness

Brightness is held steady through a single sample point (Black Point).

Levels

Color is held steady through two sample points (Black Point and White Point).

Curves

Color is held steady through all three sample points (Black Point, White Point, and Mid Point).

Black Point

Drop this point onto a dark area to stabilize.

Mid Point

Drop this point onto a midtone area to stabilize.

White Point

Drop this point onto a bright area to stabilize.

Sample Size

The radius, in pixels, of the sampled areas.

## Colorama effect

For converting and animating an image's colors, the Colorama effect is a flexible, potent tool. With it you can tint an image gently or overhaul its color palette outright.

The way Colorama operates, it first turns a chosen color attribute into grayscale and then remaps those grayscale values onto one or more cycles of the chosen output color palette. A single cycle of that output color palette shows up on the Output Cycle wheel. Black pixels land on the color sitting at the top of the wheel; progressively lighter grays land on the colors that follow clockwise around it. Take the default Hue Cycle palette: pixels that were black turn red, while pixels at 50% gray turn cyan.

Color depths of 8-bpc and 16-bpc are what it handles.

On his Video Copilot website, Andrew Kramer offers a video tutorial showing how the Colorama effect builds a procedural matte as the opening move in swapping out a sky.

## Input Phase controls

Get Phase From

Which color attribute serves as input. Pick Zero to pull a color attribute from a different layer.

Add Phase

The second layer fed in as input. To feed in this layer alone, set Get Phase From to Zero; otherwise both the Add Phase layer and the layer carrying the effect are used. You're free to pick the layer carrying the effect, adding a second input attribute drawn from that same layer.

Add Phase From

Which color attribute from the second layer serves as input.

Add Mode

The way input values get combined:

Wrap

Sums the two attributes' values for each pixel. Anything past 100% wraps back around the cycle. A sum of 125%, for instance, wraps around to 25%.

Clamp

Sums the two attributes' values for each pixel. Anything past 100% is clipped to 100%.

Average

Takes the mean of the two attributes' values for each pixel. Since the mean of two values each sitting between 0% and 100% never tops 100%, this operation never has to wrap or clamp. That makes Average the safest pick for predictable output.

Screen

Screens the second layer atop the original layer; the second layer's brighter regions lighten the first layer, while its darker regions are thrown away. Screen mode shines especially for compositing fire, lens flares, and other lighting effects.

Phase Shift

Where on the Output Cycle wheel the mapping of input colors kicks off. Push this positive and the starting point spins clockwise around that wheel.

Tip: Send colors cycling around the wheel by animating Phase Shift.

## Output Cycle controls

Use Preset Palette

Presets for the Output Cycle. The top palettes suit fast color correction and adjustment jobs. The lower choices supply an assortment of built-in color palettes for creative ends.

Output Cycle

Tailor the output color palette by reworking the colors and positions of the triangles on the Output Cycle wheel. Each triangle pins down where on the color wheel a given color sits. Color between triangles is interpolated smoothly, unless Interpolate Palette is turned off. Every Output Cycle holds anywhere from 1-64 triangles.

Drag a triangle to reposition it. Shift-drag to lock the triangle to 45-degree steps. Up at the top of the wheel, the triangle locks to either the start position or the end position depending on whether you drag from the left or the right.

Click in or beside the wheel to add a triangle, then pick a color from the color picker. Click just left of the top arrows for the end color, just right for the start color.

To copy a triangle, Ctrl-drag (Windows) or Command-drag (Mac OS) it.

To remove a triangle, drag it off the wheel.

To adjust the opacity, pick a triangle on the color wheel, then drag the attached triangle above the opacity slider. Confirm that Modify Alpha is on if you want the opacity data to carry into your output.

Note

As you animate the Output Cycle, a triangle's position and color are interpolated from keyframe to keyframe. For the best outcome, see that every keyframe carries the same count of Output Cycle triangles.

Cycle Repetitions

How many passes of the Output Cycle the input color range maps onto. At the default of 1, the input range maps to a single pass of the Output Cycle — beginning at input black up top on the Output Cycle wheel and sweeping clockwise back around to input white at that same top point. A value of 2 maps the input range across two passes of the Output Cycle. Use this to craft a simple palette and echo it repeatedly through a gradient.

Interpolate Palette

Colors between triangles are interpolated smoothly. Switch this off and the output colors become posterized.

## Modify controls

Which color attributes the Colorama effect reworks is set by the Modify controls. For a delicate touch-up of images, pick the same color attribute for both Input Phase and Modify. Choosing Hue from both menus, for instance, simply adjusts Hue.

Modify

Which color attribute to modify.

Modify Alpha

Reworks alpha channel values.

Note

Apply Colorama to a layer carrying an alpha channel while the Output Cycle holds no alpha data, and the layer's anti-aliased edges may turn pixelated. To smooth those edges, turn off Modify Alpha. When Modify Alpha is on and the Output Cycle does hold alpha data, the output shifts even if you've picked None from the Modify menu. Through this approach, you can tune just the alpha channel's levels without disturbing the RGB data.

Change Empty Pixels

The Colorama effect's reach spreads to transparent pixels. (This only works when Modify Alpha is on.)

## Pixel Selection, Masking, and other controls

Which pixels the effect touches comes down to these controls. For the Pixel Selection Matching controls to do anything, Matching Mode has to be set to something other than Off.

Matching Color

The midpoint of the range of pixel colors the Colorama effect reworks. To grab a particular color from the image with the eyedropper, momentarily disable the Colorama effect via its Effect switch over in the Effect Controls panel.

Matching Tolerance

How far a color may sit from Matching Color and still come under the Colorama effect. Set Matching Tolerance to 0 and the Colorama effect touches only the exact color chosen for Matching Color. Set it to 1 and every color matches, which effectively switches Matching Mode off.

Matching Softness

How seamlessly the matched pixels merge into the rest of the image. Say you have an image of a person in a red shirt and blue pants and you want the pants changed from blue to red: nudge Matching Softness gently to push the matching out from the blue of the pants into the shadows of the pant folds. Push it too far and the matching bleeds into the blue of the sky; push it further still and it reaches the red shirt.

Matching Mode

Which color attributes get compared to decide a match. As a rule, RGB suits high-contrast graphics while Chroma fits photographic imagery.

Mask Layer

The layer pressed into service as a matte. Masking Mode sets which attribute of the Mask Layer defines that matte. The matte settles which pixels of the layer carrying the effect get affected.

Composite Over Layer

Shows the modified pixels composited over the original layer. Turn this off to show only the modified pixels.

Blend With Original

How transparent the effect is. The effect's output gets blended with the original image, the effect's result sitting on top. Raise this value and the effect grips the layer less. Set it to 100%, for instance, and the effect leaves no visible mark on the layer; set it to 0% and the original image stays hidden.

## Curves effect

An image's tonal range and tone response curve are what the Curves effect adjusts. Tone response is something the Levels effect adjusts too, but the Curves effect grants finer control. The Levels effect leaves you only three controls for the job (highlights, shadows, and midtones). With the Curves effect, you're free to map input values onto output values however you like, along a curve set by 256 points.

Arbitrary maps and curves can be loaded and saved for use with the Curves effect.

Color depths of 8-bpc, 16-bpc, and 32-bpc are all supported here.

Apply the Curves effect and After Effects puts a graph in the Effect Controls panel that you use to lay out a curve.

The graph's horizontal axis stands for the pixels' original brightness values (input levels); its vertical axis stands for the new brightness values (output levels). Along the default diagonal line, every pixel shares matching input and output values. On the Curves graph, shadows (0) sit at the left, and the brightness values it spans run 0 to 255 (8 bit) or 32768 (16 bit).

Click the various resize buttons above the graph to resize it.
