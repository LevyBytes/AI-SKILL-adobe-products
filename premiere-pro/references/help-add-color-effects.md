# About Color Correction Effects, Available Color Correction Effects, Correct Color Using Rgb Curves, Correct Color Using Hue And Saturation Curves ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Color Correction effects overview; Available color correction effects; Correct color using RGB curves; Correct color using Hue and Saturation curves; Add Look-up Tables; Save or export Look-up Tables; Use Auto Color; Correct color using color wheels; Match color between shots; Correct color using HSL Secondary Controls; Available Lumetri Scopes.

## Color Correction effects overview

### Color Correction effects and adjustment overview for Adobe Premiere

Adobe Premiere includes professional Color Correction tools for working on footage while it remains on the timeline. The color and luminance adjustment effects live in the Color Correction bin inside the Video Effects bin. After placing an effect on a clip, refine its properties from the Effect Controls panel.

Color correction adjustments support several common editing goals:

- Bring clips into alignment so they look as if they were recorded under matching conditions.
- Shift a clip's color treatment so the scene reads as night rather than day.
- Recover image detail from over-exposed highlights by changing exposure.
- Emphasize a color in a clip when adding graphic elements.
- Confine clip colors to a target range, including the broadcast-safe range.

Adjust exposure on the timeline when footage needs correction.

A. Overexposed image with the waveform in the upper limits of the IRE scale B. Corrected image with the waveform within 7.5 to 100 IRE

Correct exposure while editing footage on the timeline.

Apply Color Correction effects through the same workflow used for Standard effects. Other effects can also change color and luminance, but Color Correction effects are intended for precise color and luminance fixes.

Tip

Color Correction effects, like other color effects, operate at the clip level. To use them across multiple clips, nest sequences first. During color correction, Lumetri scopes help evaluate chroma and luminance for a clip. A scope can stay open in a separate Lumetri panel so video levels remain visible while adjustments are made.

## Available color correction effects

### Professional color correction tools in Adobe Premiere, and how they help improve footage

### Color Correction Effects

These color correction effects are available from the Color Correction bin within the Video Effects bin:

Built-in effects, including ASC CDL and Brightness & Contrast, can support a color grading workflow.

For color grading work, Premiere also provides built-in options such as ASC CDL and Brightness & Contrast.

### ASC CDL

The American Society of Cinematographers Color Decision List (ASC CDL) defines a common format for exchanging primary color information.

CDL parameters are Slope, Offset, and Power. Each function supplies one number for each red, green, and blue channel, producing nine values for a single-color decision. Saturation is the 10th number, and it affects the combined R, G, and B color channels.

### Brightness & Contrast effect

Brightness & Contrast changes brightness and contrast across the whole clip. A default value of 0.0 means the image is not changed. For basic tonal-range changes, Brightness & Contrast is the simplest control to use. It modifies every image pixel value together: highlights, shadows, and mid-tones.

### Lumetri Color

Lumetri Color gives editors professional color grading and color correction controls for grading footage directly on the editing timeline. These tools adjust color, contrast, and light in sequences through newer creative workflows.

The Lumetri color effect includes these options:

- Basic Correction: controls in this section fix video that is too dark or too light, and they also adjust hue (color or chroma) plus luminance (exposure and contrast) for the clip.
- Creative: this section of the Lumetri Color panel offers preset looks for fast color changes on clips.
- Curves: this feature provides quick, precise color adjustments for natural-looking results.
- Color Wheels & Match: color wheels target adjustments to only the darker or lighter portions of a shot.
- HSL Secondary: this section works with existing tools to provide finer shot control, and it is often used after primary color correction is finished.
- Vignette: vignettes gently guide the audience's attention toward a subject in the frame, such as a person or landscape.

### Tint effect

The Tint effect changes color information in an image. For every pixel, luminance determines the mix between two colors. Map Black To and Map White To set the colors assigned to dark and bright pixels. Pixels between those endpoints receive intermediate values. Amount To Tint sets how strong the effect appears.

### Video Limiter effect

Use the Video Limiter effect when RGB values need to fit HDTV digital broadcast specifications. It can be applied per shot, or added as an output effect so the complete sequence is limited during export. When Video Limiter is enabled on the timeline, it affects both editing and export. It does not provide the extra chrominance limiting that legacy Analog NTSC transmissions require.

The Video Limiter effect has the following options:

- 100 = IRE 0 to 100, RGB 0 to 255, Y 16 to 235. SMPTE limited range.
- 103 = IRE -3 to 103, RGB -8 to 263, Y 9 to 242
- 105 = IRE -5 to 105, RGB -13 to 268, Y 5 to 246. EBU R103 "Preferred".
- 109 = IRE -7 to 109, RGB -17 to 277, Y 1 to 254. SDI limits

- Compression before clipping: starts a knee at 3%, 5%, 10%, or 20% below the clipping level, pushing colors back into range before hard clipping occurs.
- Gamut Warning: when enabled, compressed colors are shaded and colors outside the range are highlighted. The Gamut Warning option is not available in Export Effects settings. If Gamut Warning is enabled on the timeline, it also remains active during export.
- Gamut Warning Color: sets the color used for the gamut warning.

## Correct color using RGB curves

### Using RGB Curves for fast, precise color changes that keep results natural

Curves support quick, accurate color work through two curve groups: RGB Curves and Hue Saturation Curves.

### RGB Curves

Curves can be edited in two ways:

- Work with the RGB Curves available in the Lumetri Color panel.
- Work with the RGB Curves effect available in the Effect Controls panel.

Use either the Lumetri Color panel or the Effect Controls panel when editing curves.

A. Curves settings that you can adjust in the Effect Controls panel B. Curves settings that you can adjust in the Lumetri Color panel

The Lumetri Color and Effect Controls panels both provide curve-editing controls.

### Adjust luma and tonal ranges using control points

RGB Curves adjust luma and tonal ranges across a clip by using curves. The master curve controls the Luma. At first, the master curve appears as a straight white diagonal line. Changing the master curve changes all three RGB channels at the same time.

Use control points in the Lumteri Color panel to tune luma and tonal ranges.

The Lumteri Color panel lets control points drive luma and tonal-range adjustments.

### Common control-point manipulation methods

Example showing white and red curve lines raising warm tones in the clip.

White and red curve-line adjustment used to make the clip feel warmer.

With RGB Curves, a video clip can receive warmer tones. In this example, warm tones increase through the white and red lines. The blue and green lines reduce blues and greens in the clip. The clip gains a reddish tint, which makes the image feel warmer.

### S-curve contrast for natural-looking results

Example contrast adjustment with an S curve in RGB Curves.

S-curve contrast change shown in RGB Curves.

RGB Curves can change image contrast. Here, an S curve raises contrast so the guy appears less pale, and the sky's blue color looks brighter.

## Correct color using Hue and Saturation curves

### Hue and Saturation curves for fast, precise color adjustments with natural-looking output

Curves support quick, accurate color changes through two curve types: RGB Curves and Hue Saturation Curves.

### Hue Saturation Curves

Premiere provides these color hue saturation curves for different curve-based color adjustments on a clip.

- Hue vs Sat - choose a hue range, then set its saturation level.
- Hue vs Hue - choose a hue range and move it to another hue.
- Hue vs Luma - choose a hue range, then change the luma.
- Luma vs Sat - choose a luma range and modify saturation.
- Sat vs Sat - choose a saturation range and raise or lower that saturation.

### Grade color using control points

Control points are used to adjust colors. When a control point is moved, a vertical band appears so the final result is easier to judge.

Control-point color grading example in the Lumetri Color panel.

Lumetri Color panel example showing color grading with control points.

### Common control-point manipulation methods

### Sample colors

Open one of the color curves tabs, then select the Eyedropper tool to sample a color in the Program Monitor. The curve receives three control points automatically.

- The center point matches the color that was selected.
- For Hue curves, the selected pixel's value is the Hue.
- For Luma and Sat curves, the selected pixel maps to the Luma and Sat values.

By default, the Eyedropper averages the selected color from a 5 x 5 pixel area. For a larger 10 x 10 pixel sample, hold command (macOS) or Ctrl (Windows) while using the Eyedropper.

### How Premiere handles Hue Saturation curve adjustments

Premiere samples color after processing effects that appear before the current Lumetri effect.

- When an earlier effect changes color, Premiere samples that changed color.
- Effects placed after the current Lumetri effect do not affect the sampled color.
- The Lumetri Color panel is processed from top to bottom. Basic, Creative, and RGB Curves process before their output feeds into the Hue Saturations Curves.
- Lumetri sections located after curves, including Color Wheels, HSL Secondaries, and Vignette, are ignored for color sampling.
- Hue Saturation Curves run in parallel. Every curve samples the color value as it enters the Hue Saturation Curves section.

### Example of this behavior

Change green into blue with the Hue vs Hue curve. Then sample that resulting blue with the Hue vs Luma curve. Premiere places the control points on the green part of the curve, which represents the original color, not blue.

To edit the Hue vs Luma curve without including the Hue vs Hue change, deselect the check box above the Hue vs Hue curve.

### Usage examples

### Hue vs Sat

Before/after view after changing hue saturation in an image.

Hue saturation edit shown as a before-and-after comparison.

Use this curve to target the saturation of any hue in an image. In this example, the curve raises overall image saturation so the girl looks less pale. The blue sky and the light also gain saturation, giving the full image a warmer look.

### Hue vs Hue

Before/after view after shifting one image hue to another hue.

Hue change comparison showing the image before and after the shift.

This curve changes one hue into another hue. In the example, the color curve changes the hue of the girl's dress.

The curve is also useful for fast color changes that are small but visually strong. For example, select yellowing foliage leaves and shift them to green so the foliage appears healthier.

### Hue vs Luma

Before/after view after changing the lightness of selected colors.

Selected-color lightness adjustment shown before and after.

This curve raises or lowers the lightness of selected colors. In the example, the pale blue sky and its reflection in the water below are darkened to make the image more dramatic.

Note

Adobe recommends using this curve with high-quality footage because poor source image quality can expose pixelation or artifacts.

### Luma vs Sat

Before/after view after adjusting saturation from image tonality instead of hue.

Tonality-based saturation adjustment shown before and after.

This curve changes image saturation according to image tonality rather than hue. In this example, it slightly lifts the blue component inside the luma range.

### Sat vs Sat

Before/after view after selectively changing image saturation.

Selective saturation adjustment shown before and after.

This curve targets image saturation selectively. In the example, it desaturates only the oversaturated blue wall while leaving the similar, less-saturated dolphin image in a similar blue color unaffected.

Another strong use for this curve is keeping saturation within broadcast-legal levels by desaturating everything above 75% saturation.

## Add Look-up Tables

### Adding a Look-Up Table (LUT) in Adobe Premiere to change saturation, contrast, or clip color

LUTs can change saturation and contrast, or they can completely alter a clip's color. Editors often use them to build and save color grades that give clips a distinctive style.

On the timeline, create a sequence, then choose Window > Lumetri Color.

In the Timeline panel, choose a clip.

Open Basic Correction from the Lumetri Color panel.

From Basic Correction, use the Input LUT dropdown menu to add existing LUTs from Premiere.

LUTs stored on your computer appear in the Input LUT drop-down.

The Input LUT drop-down shows LUTs saved on your computer.

To add a new LUT, select Browse and choose a LUT saved on your system.

## Save or export Look-up Tables

### Saving Look-up Tables (LUTs) for reuse in Adobe Premiere or another application

Select Window > Lumetri Color.

Open the menu in the Lumetri Color panel, then select Export .cube.

Exporting .cube LUT files lets you save them for reuse in other projects, which keeps color grading consistent across multiple videos.

You can keep color grading consistent across multiple videos by exporting .cube LUT files and reusing them in other projects.

Select Save.

## Use Auto Color

### Auto Color workflow acceleration for professional-grade color grading preparation

Auto Color uses Adobe Sensei ML technology to make intelligent color corrections on video clips. These corrections are basic adjustments, including exposure, white balance, and contrast, that improve footage appearance. Color correction normally happens before creative color grading.

### How to use Auto Color

Open a project and add a sequence.

Open the Lumetri Color panel by choosing Window > Lumetri Color.

Place the playhead within the clip to enhance. Select the Auto button in the Basic Corrections section.

The re-organized Basic Correction sliders show the resulting adjustments. Fine-tune the result by adjusting individual parameters. The Intensity slider at the top of the Basic Correction section controls the overall strength of these adjustments.

Note

Auto Color operates on source footage, including LOG footage and footage with LUTs applied.

For users new to color correction, Auto Color provides a practical way to learn the available adjustments for improving video color. Experienced editors can use Auto Color to speed up color correction. Any user can refine the result or try different ideas after applying Auto Color.

After basic color correction, use the HLS curve adjustments to fine-tune specific image areas, such as skin tones or skies. Creative looks can also produce a stylized result.

Learn more about working with color:

- Color workflows in Premiere
- Get creative with color using Lumetri looks
- Using HSL Secondary controls in the Lumetri Color panel

## Correct color using color wheels

### Use Color Wheels in the Lumetri Color panel for precise color correction work in Adobe Premiere.

In the Lumetri Color panel, the color wheels let you make restrained corrections to a shot. They also support fast color matching across shots so the finished video keeps a unified appearance.

Use the wheels when only the darker or brighter portions of a shot need color changes. That added separation helps correct small clip problems and gives finer control over the look you are building.

Overview of Color Wheels functions in the Lumetri Color panel.

A. Midtones color wheel B. Cursor or color puck C. Highlights color wheel D. Slider E. Shadows color wheel

Lumetri Color panel Color Wheels function overview.

Premiere provides three wheels for midtones, shadows, and highlights. Three-way color correction lets brightness, hue, and saturation be controlled separately for shadows, midtones, and highlights.

Shadow and highlight detail controls can brighten or darken selected areas while the rest of a well-lit clip stays balanced. Isolate the parts that need work, apply the adjustment, and use the Midtone color wheel for the clip's overall contrast.

The paired sliders can also perform these corrections instead of dragging within the wheels.

### Click the wheel to add color

An empty center in a wheel means no change has been applied yet. Click the wheel center and drag the cursor so the wheel fills in and the adjustment is set as needed.

### Drag the slider to adjust color

For slider-based control, move the slider upward to raise the value and downward to lower it. For instance, raising the Shadow slider lightens shadows, while lowering the Highlights shadow darkens highlights.

## Match color between shots

### Compare shots and match their colors in Adobe Premiere with the Lumetri Color panel or the Program Monitor.

Color matching helps compare the look of two shots across a sequence, keeping color and light consistent inside one scene or across several scenes.

Start the match by placing the playhead on the current clip.

Open Comparison View from the Comparison View button in the Program Monitor or the Lumetri Color panel. This mode shows a reference frame beside the target so shot color can be compared.

In the Lumetri Color panel, use Comparison View to compare shots and match color.

Comparison View helps compare shots and align their color from the Lumetri Color panel.

Set the reference frame with the slider bar, by entering timecode, or by using the arrow controls to jump between edit points.

Choose the target by moving the playhead to the clip location you want.

After the reference and target are both set, configure the comparison display that best fits the review.

Use either a side-by-side layout or a vertical/horizontal split. In split mode, drag the split position to inspect a chosen screen area.

Choose side-by-side or split view, then move the divider to inspect specific areas.

Use side-by-side or split view and drag the divider when a particular area needs comparison.

Pick the target clip by moving the timeline playhead onto the clip that should match the reference frame. Confirm that the clip is selected.

Note

Matching uses the current frame against the reference frame. If the clip changes over time, select a frame that represents the clip's overall brightness and color well.

If the shots contain faces, enable the Face Detection option and keep it active.

Face Detection is enabled by default. When Auto Color finds faces in either the reference frame or the current frame, it prioritizes colors in the facial area.

That weighting improves skin tone matches when distracting background colors are present. Turn it off when the full frame should receive equal evaluation.

Face detection slightly increases the time required to calculate a match. When the footage has no faces, disable face detection so color matching finishes faster.

Select Apply Match.

Premiere uses Lumetri settings, including the Color Wheels and Saturation control, to align the current frame colors with the reference frame colors.

The Color Wheels, and the Saturation slider when needed, change to show the adjustment produced by the automatic color matching algorithm.

When the result is not acceptable, select a different reference shot and run the match again. Premiere replaces the earlier changes and matches against the new reference.

Note

If the clip already has a Lumetri effect with modified parameters, some of those settings may be reset.

## Correct color using HSL Secondary Controls

### Isolate one color in Adobe Premiere and fine-tune it without altering the rest of the video.

For targeted shot control, the HSL section in the Lumetri panel works alongside the other color tools. It is commonly used after primary correction when one color needs adjustment without changing the rest of the image. Use it when hue or saturation curves are not enough, when a color should stand out, or when you need to key a luminance range.

### Set a key

Choose Window > Workspaces > Color workspace to display the Lumetri Color panel.

Open the HSL Secondary tab to access the HSL controls.

Choose File > New > Adjustment Layer to create an adjustment layer.

In the Key section, use these controls to limit retouching to one part of the clip:

- Use the Set color eyedropper to choose the target color.
- Use the plus or minus eyedroppers when pixels need to be added to or removed from the selection.
- Check the Hue, Saturation, and Lightness ranges produced by the color you chose.

Show the chosen color area with eyedroppers that set, add, or remove the target color.

Use the eyedropper tools to display and refine the target color selection.

To see only the selected range, enable the Color/Gray checkbox, then use the drop-down and choose either Color/Black or White/Black for the preview.

Selected color areas shown in gray mode.

Gray-mode view of the selected color areas.

Refine the selection with the H, S, and L sliders.

The upper triangle widens or narrows the range, and the lower triangle controls transition softness. Drag the slider center to shift the whole range together.

Use HSL sliders in the HSL Secondary panel to show isolated color regions for finer control.

HSL Secondary sliders can isolate color regions and support more precise color control.

Select Reset to restore the defaults.

### Refine a key

Keep changing the range until the mask includes the entire area you want. Then use the Refine section options to improve the selection.

- Denoise: smooths selected colors with the denoise slider and reduces selection noise. As the image is adjusted, the colors move together evenly.
- Blur: softens the mask edge with the blur slider so the selected area blends more naturally.

Use the Denoise and Blur sliders to show refined mask edges and smoother blending.

Refined mask edges are shown after Denoise and Blur slider adjustments improve blending.

### Verify your selection

After the key is well defined, apply the isolated color change with the grading tools in the Correction section. Clear the checkbox beside Color/Gray to inspect the result.

A mid-tone color wheel appears by default; select the icon above the wheel to switch to the traditional 3-way color wheel.

Deselect the Color/Gray checkbox to view the changes in the image. By default, a mid-tone color wheel is displayed.

Switch to a traditional 3-way color wheel by selecting the icon in the top-left corner of the wheel.

Use the Temperature, Tint, Contrast, Sharpen, and Saturation sliders to polish the correction.

### Best practices

Use HSL Secondary controls for these cases:

- Brightening an image
- Changing an object's color or a person's skin tone
- Correcting ambient light sources

## Available Lumetri Scopes

### Review the Lumetri Scopes in Adobe Premiere and how they show hue, saturation, brightness, and tonal range.
