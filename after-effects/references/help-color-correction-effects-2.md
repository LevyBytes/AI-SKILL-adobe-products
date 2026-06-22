# Color Correction Effects (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Use the Curves effect

1. Choose Effect > Color Correction > Curves.
   When a clip carries several color channels, pick the one to work on from the Channel menu. Leaving it on RGB drives every channel through a shared curve.

If you prefer, the curve for each color channel can be grabbed and reshaped on its own, with no trip through the Channel menu.

For a hands-off pass at the curve, hit the Auto button sitting below the curves over in the Effect Controls panel.

What Auto does is lean on a stored library of curve tweaks that color and photography specialists built across a wide spread of sample images. For your footage it blends together the tweaks tied to those reference samples whose color spread most resembles yours.

3. Reshape or sketch a curve with the Bezier tool and the Pencil tool. (Switch a tool on by clicking the Bezier button or the Pencil button .)

Note

Want the curve smoothed? Press the Smooth button. To snap it back to a plain line, press the Reset button.

Whichever tool last touched the curve decides its type. Freehand maps drawn with the Pencil tool can be stored as .amp (Photoshop lookup) files, while Bezier-drawn curves export to .acv (Photoshop spline) files.

## Equalize effect

Equalize reshuffles a clip's pixel values toward a flatter spread of brightness or of a color component. Its behavior parallels the Equalize command over in Adobe Photoshop. Anything sitting at 0 alpha (fully transparent) is skipped, which means a masked layer gets equalized only within its mask region.

This effect works with 8-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Equalize

Three modes are offered here. RGB drives the leveling off the red, green, and blue components. Brightness keys it to how bright each pixel reads. Photoshop Style reshuffles each pixel's brightness so the whole image samples the full sweep of brightness levels more uniformly.

Amount To Equalize

This dial sets the degree of brightness redistribution. Push it to 100% and the pixel values fan out as uniformly as they can; dial it lower and fewer of them get shifted.

## Exposure effect

Reach for the Exposure effect when footage needs tonal work, whether on a single channel or across the lot at once. It mimics what happens when you change a camera's exposure setting (measured in f-stops) at the moment of capture. Rather than running its math in the project's active color space, the effect computes in a linear one. Its sweet spot is tonal work on high–dynamic range (HDR) imagery at 32-bpc color, though 8-bpc and 16-bpc material is fair game too.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Master

Drive every channel together.

Individual Channels

Drive each channel on its own.

Exposure

Mirrors a camera's exposure dial during capture, scaling every light-intensity value by a fixed factor. Exposure is graduated in f-stops.

Offset

Pulls shadows and midtones up or down while barely touching the highlights.

Gamma Correction

Sets how strong an extra power-curve bend gets layered onto the image. Crank it up and the image brightens; ease it down and the image darkens. A negative entry is mirrored about zero — it stays negative yet is applied as though positive. Its default sits at 1.0, meaning no extra bend at all.

Bypass Linear Light Conversion

Tick this to run Exposure against the raw pixel values instead. It comes in handy when you're handling color by hand through the Color Profile Converter effect.

## Gamma/Pedestal/Gain effect

Gamma/Pedestal/Gain tunes the response curve one channel at a time. With pedestal and gain, 0.0 means fully off and 1.0 means fully on.

Black Stretch reassigns the low pixel values across every channel; the larger you make it, the brighter the dark regions get. Gamma hands you an exponent that dictates the bend of the middle stretch of the curve. Pedestal and Gain pin down, respectively, the floor and ceiling output a channel can reach.

This effect works with 8-bpc color.

## Hue/Saturation effect

Hue/Saturation tunes the hue, saturation, and lightness of the separate color components within an image. Think of it as working off the color wheel: shifting hue (color) walks you around the wheel, while shifting saturation (the color's purity) travels along the wheel's radius. The Colorize control lets you tint a grayscale picture that's been moved into RGB, or wash color over an RGB picture.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Channel Control

Picks which color channel gets the adjustment. Set it to Master to work every color together.

Channel Range

Spells out the channel you chose in the Channel Control menu. A pair of color bars lays out the colors in their color-wheel order: the top bar is the color before you touch it, and the bottom bar previews how your edit lands across every hue at full saturation. The adjustment slider lets you pick whatever band of hues you want to edit.

Master Hue

Governs the channel's overall hue for whatever you picked under Channel Control. Spin the dial — it stands in for the color wheel — to swing that overall hue. The underlined figure shown above the dial counts the degrees of rotation around the wheel away from a pixel's starting color. Clockwise reads positive, counterclockwise reads negative, and the span runs from –180 to +180.

Master Saturation, Master Lightness

Set the channel's overall saturation and lightness for the Channel Control selection. The span runs from –100 to +100.

Colorize

Washes color over a grayscale image moved into RGB, or over an RGB image — handy for faking a duotone look by collapsing the color values down to a single hue.

Colorize Hue, Colorize Saturation, Colorize Lightness

Set the hue, saturation, and lightness for the color band picked under Channel Control. After Effects surfaces only the sliders that suit your Channel Control choice.

Faster rendering of the Hue/Saturation effect comes from GPU acceleration.

## Adjust colors with the Hue/Saturation effect

1. Choose Effect > Color Correction > Hue/Saturation.
   Pick Master to work every color together.

Settle on a preset color band for the color you mean to tweak, then work the sliders belonging to that band.

3. For Hue, key in a value or spin the dial.
4. For Saturation, key in a value or slide the control. Relative to the starting color values of the pixels you picked, the color drifts toward or away from the color wheel's center.
5. For Lightness, key in a value or slide the control.

## Colorize an image or create a monotone result

1. Choose Effect > Color Correction > Hue/Saturation.
2. Select Colorize. The picture takes on the hue of whatever is set as the foreground color, and each pixel keeps its existing lightness.
3. If you'd like a different color, drag the Colorize Hue dial.
4. Drag the Colorize Saturation and Colorize Lightness sliders.

## Modify the range of Hue/Saturation effect adjustments

1. From the Channel Control menu, choose an individual color. (Out of the box, picking a color component grabs a band 30° wide and tacks on 30° of fall-off to each side. Pull the fall-off down too far and the image can start to dither.)
   Slide either or both of the white triangles to dial the feather up or down while the range itself holds steady.

Slide either or both of the upright white bars to resize the range. Widen the range and the fall-off narrows; the reverse holds as well.

## Leave Color effect

Leave Color strips the color out of every part of a layer apart from hues that resemble whatever you set in Color To Leave. Picture footage of a basketball game drained of color save for the ball's own orange.

Amount To Decolor

Governs how much color comes out. At 100%, regions whose color strays from your chosen one drop to gray tones.

Tolerance

How forgiving the color match is. At 0% every pixel loses its color except those matching Color To Leave exactly; at 100% nothing changes.

Edge Softness

How gentle the color edges are. Crank it high and the handoff from color to gray turns smooth.

Match Colors

Decides whether the comparison runs on RGB values or HSB values. Using RGB tightens the match and tends to strip color from more of the picture. Say you want to spare dark blue, light blue, and medium blue: switch to Using HSB and set any shade of blue as Color To Leave.

## Levels effect

Levels takes the span of incoming color or alpha-channel levels and stretches it across a fresh span of output levels, with the gamma value steering how those values spread out. Its behavior closely tracks the Levels adjustment over in Photoshop, and GPU-accelration keeps its rendering quick.

The Levels effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Pick Alpha from the Channel menu and Levels turns into a matte tool: fully opaque or fully transparent stretches of a matte can be pushed to semitransparent, and semitransparent stretches can be driven to fully opaque or fully transparent. Since transparency rides on the single-channel alpha, this effect labels total transparency as black and total opacity as white.

Pair an Output Black Level of 0 with an Input Black Level above 0 to push a band of semitransparent areas all the way to transparent.

Pair an Output White Level of 1.0 with an Input White Level under 1.0 to push a band of semitransparent areas all the way to opaque.

Set an Output Black Level above 0 to lift a band of fully transparent areas up to semitransparent.

Set an Output White Level under 1.0 to ease a band of fully opaque areas down to semitransparent.

Note

The Levels (Individual Controls) effect behaves like Levels but opens up per-channel color editing, so you can hang expressions off single properties or animate one apart from the rest. (See Levels (Individual Controls) effect.)

Channel

Which channels get modified.

Histogram

Plots how many pixels carry each luminance value across the image. (See Color correction, color grading, and color adjustment.)

Tip: Clicking the histogram toggles between colorized histograms covering every color channel and a histogram for just the channel or channels you picked in the Channel menu.

Input Black and Output Black

Any input pixel whose luminance matches the Input Black value is reassigned the Output Black value as its new luminance. The upper left triangle beneath the histogram marks Input Black; the lower left triangle beneath it marks Output Black.

Input White and Output White

Any input pixel whose luminance matches the Input White value is reassigned the Output White value as its new luminance. The upper right triangle beneath the histogram marks Input White; the lower right triangle beneath it marks Output White.

Gamma

The power-curve exponent that sets how luminance values spread through the output. The middle triangle beneath the histogram marks Gamma.

Clip To Output Black and Clip To Output White

These settle what becomes of pixels whose luminance falls under the Input Black value or over the Input White value. With clipping on, anything below Input Black snaps to Output Black and anything above Input White snaps to Output White. With clipping off, the resulting values may dip beneath Output Black or climb past Output White, and Gamma still bears on them.

## Levels (Individual Controls) effect

The Levels (Individual Controls) effect behaves like Levels but opens up per-channel editing of color values. That means you can hang expressions off single properties or animate one independently of the others. Expand any control on its own by clicking the arrow beside the channel's color. GPU-acceleration is what keeps its renders quick.

To read up on what each control does, see Levels effect.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

## Lumetri Color effect

After Effects hands you Lumetri Color, a professional-grade set of grading and correction tools that let you grade footage right on the timeline. The effect lives in the Color Correction group of both the Effects menu and the Effects & Presets panel, and GPU acceleration keeps it snappy. With them you can shape color, contrast, and light across your sequences in fresh, inventive ways. Because editing and grading run side by side, you can hop between the two without exporting anything or firing up a standalone grading app.

The Color workspace isn't aimed only at seasoned colorists — editors just getting started with grading are welcome too. Lean on the intuitive sliders and controls for quick fixes or for elaborate Lumetri Looks. You can also tidy up cuts or polish grades with heavier-duty correction tools such as curves and color wheels.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

## Selective color adjustment with the color correction curves

Working as an editor or colorist, you get pinpoint, deliberate command over fixing particular color ranges through the selective color adjustment curves. They sit inside the Lumetri Color effect panel. The Hue vs Luma and Hue vs Hue curves, for instance, let you rapidly and exactly steer the brightness and the specific hue (color) of any precise color in your footage.

Suppose you've got a pack of crayons — red, green, and light blue — and you'd like a deeper blue to fit your palette. Grab the light blue and run the Hue versus Luma curve to drive it toward dark blue, and the other colors in the frame stay untouched.

### RGB curves

RGB Curves hand you curve-based control over luma and the tonal ranges across a clip.

RGB Color Curve

RGB Color Curve

- Luma is what the master curve governs. It starts life as a straight white diagonal, with highlights toward the upper right and shadows toward the lower left.
- Move the master curve and all three RGB channels shift in step, though you're free to single out just the Red, Green, or Blue channel for tonal work. Drop control points straight onto the curve to reach different tonal zones.
- Click right on the curve line, then drag the control point to work a tonal zone. Dragging it up or down brightens or darkens that zone, while dragging it left or right pushes contrast up or down.
- Removing a control point takes a press of Ctrl (Windows) or Cmd (Mac OS) together with a click on the point.

### Hue saturation curves

These five hue and saturation curves give you full command over color-correcting your videos and images. Pick a color in the footage and reshape its hue, saturation, and brightness; saturation can likewise be tuned for a stretch of brightness values, or for a stretch of saturation values, anywhere in the clip.

- Hue versus Hue - Select a color (hue) in the image and change it to another hue.
- Hue versus Saturation - Change the saturation of a color in the image.
- Hue versus Luma - Adjust the brightness of a color in the image.
- Saturation versus Saturation - Select and adjust the saturation range within the original saturation of an image.
- Luma versus Saturation - Select a luma range and adjust its saturation.

## Set up Hue Saturation curves

Over in the Timeline panel, highlight the clip you mean to correct. Then go to Effects > Color Correction > Lumetri Color — the same option also turns up under Color Correction inside the Effects & Presets panel.

Over in the Effect Controls panel, beneath the Lumetri Color effect, twirl the Curves option open. After Effects then surfaces two choices:

- RGB Curve
- Hue Saturation Curves

Twirl the Hue Saturation curves open and every color curve appears beneath it. Grade or correct your footage with the full set of color curves, or lean on just one of them.

## Selectively color grade your footage

Run through the steps laid out in the Set up Hue Saturation curves section.

Click the eyedropper belonging to whichever curve you intend to use.

Back in the Composition panel, click the color in your clip you'd like to tweak. Picking a color with the eyedropper drops three points onto the curve — one stands for the color you grabbed, and the flanking two pen the selection in to a tight band.

Reshape any of the color curves by dragging those control points.

- Each time you eyedrop another color, three more points join the graph.
- Clicking the curve is another way to lay down control points. To drop one, Cmnd-click (Mac) and alt-click (Win).
- A double-click on any point wipes every point off the graph.
- Hold Shift as you click a point on the graph to pin a control point at its present hue.
- Push the center control point up or down to raise or lower the chosen range's output value. With the Hue versus Sat curve, say you single out a band of green: dragging up boosts the saturation of those greens in your video, and dragging down tones it back.
- As you slide a control point, a vertical band shows up to help you size up the end result. It earns its keep on the Hue versus Hue curve, where reading the resulting hue can get tricky. Suppose you're dialing in an orange that's reading as a pale yellow: on the Hue versus Hue curve you select a band of orange, and with the center control point active the vertical marker reveals that dragging down nudges the pale yellow over toward orange.

## Examples to illustrate the hue saturation curves

Curve adjustment tools live in the Curves group of the Lumetri Color effect to keep selective grading easy. Their two-axis graphs let you tune the following:

- Hue versus Saturation - Within a chosen hue band, shifts how saturated those pixels read; good for pumping up or draining particular colors. In the sample image, for instance, this curve was pushed to lift the overall saturation so the girl reads less pale; the blue sky and the light were boosted alongside it to warm the frame up.

Hue versus Saturation curve adjustment

Hue versus Saturation curve adjustment

- Hue versus Hue - Within a chosen hue band, shifts what hue those pixels take on; good for color fixes — here, for example, it swings the hue of the girl's dress. Lean on it for jobs like turning red into orange or rescuing pale skin.

Hue versus Hue curve adjustment

Hue versus Hue curve adjustment

- Hue versus Luma - Within a chosen hue band, shifts how bright those pixels read; good for playing up or playing down a stray color, like deepening blue skies or lifting a purple flower. In this sample the pale blue sky, plus its mirror image on the water beneath, was darkened to lend the frame more drama.

Hue versus Luma curve adjustment

Hue versus Luma curve adjustment

- Luma versus Saturation - Within a chosen brightness band, shifts how saturated those pixels read; good for pumping up or draining highlights or shadows. Here the curve nudges the blue tones up a touch within the luma.

Luma versus Saturation curve adjustment

Luma versus Saturation curve adjustment

- Saturation versus Saturation - Within a chosen saturation band, shifts how saturated those pixels read; good for pulling colors into legal range, like reining in highlights or shadows.

This curve also lets you hold to broadcast-legal saturation by knocking down anything past 75% saturation.

Saturation versus Saturation curve adjustment

Saturation versus Saturation curve adjustment

## OCIO Color Space Transform

Reach for the OCIO Color Space Transform effect when a layer needs any color space transform applied — it's especially handy if the effect or CDL/LUT you're after was built in a different color space.

## OCIO File Transform

Reach for the OCIO File Transform effect to drop a LUT or CDL onto a layer. Where that LUT/CDL calls for it, first switch the color space with the OCIO Color Space Transform, then run a second transform to land back in whatever working space you're in.

## OCIO Display Transform

At its core the OCIO Display Transform effect is a color space converter built on the OpenColorIO engine.

## OCIO Look Transform

Sitting under the Color Correction category, the OCIO Look Transform effect lets you lay a Look transform — or its inverse — onto a layer or composition.

## OCIO CDL Transform

With the OCIO CDL Transform effect you can run a CDL transform — or the inverse of one — across a layer or an entire composition.

These controls are available:

Input Color Space

Pick which input color space the transform should start from.

Display Device

Choose among the display devices on offer. What appears here is generated on the fly from whichever OCIO Configuration is active.

View Transform

Choose a view transform tied to the chosen display. The entries that show up vary with both the active OCIO Configuration file and the display device you picked.

Inverse Transform

Lets you reverse the transform — handy, for instance, during an import workflow.

Information

Details like which OCIO configuration is in use are surfaced in the Information section, along with any error reporting. As an example, swapping the OCIO Configuration over in Project Settings can leave the current effect invalid.

## Photo Filter effect

By imitating the practice of mounting a tinted filter over the camera lens, the Photo Filter effect shifts the color balance and color temperature of the light that reaches the film through that lens. Either pick a preset color to push a hue shift onto the image, or dial in your own color with the color picker or the eyedropper.

The Photo Filter effect controls let you handle these tasks:

For a preset filter color, pick an entry from the Filter pop-up menu.

For a custom filter color, click the color swatch on the Color control and pick a color in the color picker, or grab the eyedropper and click any color shown on your screen.

Adjust Density to control how strongly the color lands on the image.

Turn on Preserve Luminosity so the effect won't darken the image.

Note

When you want Photo Filter adjustment layers built in Photoshop to carry over, bring the Photoshop file into the After Effects project as a composition instead of as footage. After Effects might not reproduce the Photo Filter color precisely if your Photoshop color settings were changed from their defaults.

This effect works with 8-bpc and 16-bpc color. In After Effects CS6 or later, this effect works in 32-bit color.

Warming Filter (85) and Cooling Filter (80)

These are color conversion filters that adjust an image's white balance. When a shot was lit by a cooler, more yellowish light, the Cooling Filter (80) pushes the colors bluer to offset that lower color temperature of the surrounding light. The reverse holds too: where the light ran a higher, bluish color temperature, the Warming Filter (85) warms the colors up to balance out that higher color temperature.

Warming Filter (81) and Cooling Filter (82)

These light balancing filters handle small tweaks to an image's color quality. A warmer, more yellow result comes from the Warming Filter (81), while the Cooling Filter (82) shifts things cooler and bluer.

Individual Colors

Depending on which preset color you pick, a hue shift gets applied to the image. Which color suits you comes down to how the Photo Filter command fits your workflow. Where a shot carries a color cast, picking a complementary color cancels it out. You can also reach for colors that create deliberate effects or enhancements — the Underwater color, for one, mimics the greenish-blue cast you often see in underwater shots.
