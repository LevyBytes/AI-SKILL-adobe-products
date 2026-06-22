# Default Adjust Operation, Color Adjustment In Edit Mode

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Default Adjust Operation; Color adjustment in Edit mode.

## Default Adjust Operation

Learn how the default Adjust operation supports clip correction and refinement with Color Controls in Color mode.

The default Adjust operation gives each sequence clip a straightforward starting place for correction and refinement. It contains intuitive controls for common problems such as exposure, contrast, and color balance, and it helps shots stay consistent. Begin with global changes, then move into narrower refinements to improve the footage while retaining control over specific details.

### What is the default Adjust Operation for?

For users new to video color adjustment, the Color mode Adjust controls are built to make common fixes approachable and help each clip reach the intended look. Each clip in the sequence begins with one Clip Adjust Operation, used for broad correction of that specific clip instance. Corrections might address issues such as overexposure or a color temperature that is too warm or cool, or help a clip that stands out in a scene match the surrounding shots.

### Best practices using Adjust

For color work, the results matter most; if you like the image, there is rarely a single wrong path.

Still, some approaches reach natural-looking results faster than others.

Color adjustment in the Color Controls panel is designed around this flow:

Select the clip to grade, then choose the default Adjust 1 clip operation to reveal its controls. Adjust controls are intended for targeted corrective changes that improve an image and help it match other clips in the scene.

Tip

Begin with the Global Color & Contrast controls: Contrast, Exposure, Temperature, Balance, and Saturation. Because Global controls affect every pixel across the image tonal range, they create the foundation for the grade. Watch the image while working, use the Heads-Up Displays for guidance, and remember that many controls are 2D controls capable of changing more than one parameter at the same time for fast fine-tuning.

For more focused adjustments in bright or dark image areas, use the zones buttons to select an automatically analyzed zone. Then adjust Exposure, Temperature, Balance, and Saturation so only the zone content changes.

Refine selected tonal areas by adjusting Exposure, Temperature, Balance, and Saturation within the active zone.

Within a selected zone, adjust Exposure, Temperature, Balance, and Saturation to fine-tune specific tonal regions.

When a particular color needs correction, pick an automatically sampled color patch, then use Saturation, Hue, and Lum Shift controls to modify matching areas in the frame.

After image contrast and color are in place, Texture controls can sharpen or soften selected image areas.

### Before you start: The Heads-Up Displays (HUDs)

Selecting a color control displays a HUD with the video scope best suited to show how that control changes the image. The HUD also includes control-specific indicators that show the current action, identify the affected graph area, and list parameter changes when applicable. In practice, HUDs act as detailed views of the control being adjusted.

During adjustment, the image itself should remain your main reference, which is why every layout gives priority to a large Color monitor. Video scopes are excellent for analysis and for warning when values are pushed high or low enough to clip, but they do not replace learning to judge the image directly.

HUDs therefore appear only when requested by the adjustment workflow, letting you return attention to the picture between changes. They are compact and placed alongside the image so you can monitor the picture while checking the scope. Their design is simplified around creative decisions and highlights the specific graph or image area being changed.

If video scopes are new to you, HUDs automatically choose an appropriate scope for the active adjustment. Overlays and indicators help identify where to look on the graph and the size of the change. Experienced color users may still find HUDs useful because they provide information only when needed instead of occupying screen space with the full Video Scopes panel. The indicators are also helpful for quickly understanding adjustments, especially when two parameters change at once.

The Video Scopes panel remains available for dedicated Quality Control work, but try becoming comfortable with HUDs first. Their contextual behavior can be preferable in many workflows, particularly on smaller screens.

To customize the HUD, select the Wrench menu in the Color Controls panel and choose Heads-Up Display (HUD) Options.

Tip

If the HUD blocks an active adjustment, hold the H key while adjusting to hide it temporarily. Release the H key to show it again.

### Begin with the Global Color & Contrast Controls

For a general correction, start with the Color & Contrast controls. More specifically, use the global controls before working inside zones; zones are described later. Global controls are designed for quick, good-looking changes to the full image, and sometimes they are the only correction needed.

This order matters because if the global controls do not first bring the image to a strong baseline, later zone adjustments may not produce satisfying results. Zones are intended for targeted refinement of an image that is already mostly working, making this one of Color mode's firm rules for best results.

### Start with Contrast & Exposure

Global contrast adjustments, meaning the separation between the image's brightest and darkest pixels, form the base of a grade. Start here for the fastest workflow. For a slightly dark image, you may raise Contrast first and then adjust Exposure to reach the intended overall light level. Contrast changes raise highlights and lower shadows together, making it a quick way to set the desired contrast ratio.

After contrast is raised, Exposure can be adjusted if needed. Exposure stretches the overall image brightness upward from minimum black when increased, or squeezes it downward when decreased. This can compensate for top-end clipping or lift middle tones by adding light.

For an overexposed image, lowering Exposure first may be better, followed by raising Contrast to offset flatness. In either case, watch the HUD graph carefully so the signal does not clip past MIN or MAX, because clipping removes image detail unless that is the intended look.

Color mode 2D controls let you adjust contrast while also moving the pivot point. For example, raising the pivot can lift highlights more than shadows are lowered, avoiding crushed shadows while still reaching bright highlights. Moving the pivot the other way gives a different balance. This can eliminate the need for Exposure changes and is central to getting stronger results with fewer moves.

### Tweak Black (in Exposure)

One easy-to-miss Exposure feature is the horizontal drag for Black. Dragging vertically changes exposure, while dragging side to side sets the minimum black level, letting shadows be "opened up" or "crushed." Raising black can create a flare-like look and reveal more shadow detail; lowering black can reduce shadow detail for a flatter, more graphic result.

The Black level sets the minimum signal allowed by any Color & Contrast control in the current operation. That makes it simple to define a creative treatment for the darkest shadows and keep it consistent. If the choice changes, editing Black automatically expands the available adjustment range for the other controls.

Black point and Exposure can also be changed at the same time. Learning that combined gesture makes it easy to preview many looks quickly while setting the overall Exposure, since the Black point shapes how the Exposure adjustment appears.

### Next, adjust Temperature or Balance

When contrast and exposure feel right, move on to the overall color controls if the clip has a color cast, if the color temperature feels wrong, or if the shot needs to resemble another location or time of day with warmer, more orange light or cooler, more blue light. There are two available routes for this correction, and either one is acceptable; using both is not required.

For images that already look basically correct but need a warmer or cooler feel, move the global Temperature control vertically to simulate lighting that is warmer or cooler. When the issue is more specific, such as inexpensive or specialized fixtures producing too much green or magenta, move the Temperature control horizontally with Tint to pull out green or magenta and neutralize the lighting. The two-dimensional Temperature control is meant to make these common corrections direct and manageable.

If the needed change is harder to describe, or if it does not fall cleanly on the orange/blue or green/magenta axes, use Balance to freely mix the image's red, green, and blue channels and push the overall color in any direction. This helps with unusual tints by moving the control away from the unwanted cast and toward its complementary color, and it can also introduce a chosen lighting color by pushing toward that hue on the wheel. Temperature and Balance use the same chromatic-adaptation processing model, changing reflected colors to imitate the result of changing the color of the lights.

### Adjust Saturation

After the clip's overall color balance is in place, decide whether global Saturation needs a change. Increase it when the frame feels insufficiently colorful, since that strengthens every color in the image together. Reduce it when the clip feels too intense and should sit at a more appropriate level.

If a broad Saturation change still does not solve the problem, two more targeted approaches are available:

- The Saturation Shift control changes saturation for selected hue ranges throughout the picture. For instance, overwhelming reds can be reduced without muting everything else, and other hues that are being overpowered can be lifted; that often produces a better grade.
- The zones in the Color & Contrast controls can change saturation only within a chosen lightness range. If highlights are too colorful, or not colorful enough, a highlight zone can target saturation just in that tonal region.

TIP: Unlike some color tools, contrast-expanding adjustments happen in a color space designed to avoid unwanted Saturation shifts. As a result, adding or reducing saturation remains an intentional creative choice instead of an automatic side effect of another correction. This also makes HDR grading far easier, because pushing highlights into nit levels above SDR does not create huge, uncontrollable saturation jumps.

### After Global adjustments, use Zones

If the image already looks finished, you can continue without more corrections. When the clip is broadly improved but smaller problems become visible, the next option is to make zone-based changes with the same controls.

Zones divide the image by brightness or tonality. Each zone is based on a threshold, and everything above that threshold for highlight zones, or below it for shadow zones, receives the adjustment.

The starting setup provides two overlapping zones: one for highlights and one for shadows. They blend gradually through the midtones so the result stays natural. Premiere Pro creates those initial zones by analyzing the first frame of the clip at the playhead, either from the clip selected in the Clip Grid or from dragging in the time ruler of the Color viewer. Hover over a zone button to preview, through a monitor overlay, which parts of the image belong to that zone.

Choosing a zone applies the Color & Contrast controls to the image areas inside that zone, with the exception of Contrast and Black. Those two controls remain unavailable in zones because their math depends on the overall image. Exposure, Temperature, Balance, and Saturation can be adjusted inside individual zones.

Zones provide more precise color control in several ways:

- Different shadow and highlight ranges can be raised or lowered, similar to working with an exposure curve in another tool. A highlight zone, for example, can pull back detail that clipped after a global Contrast adjustment that otherwise works well.
- Temperature and Balance can warm a highlight zone or cool a shadow zone, which can suggest a different time of day or weather condition, much like using the Luma key of a secondary operation elsewhere.
- Saturation can target changes comparable to a Lum vs. Sat curve. If highlights or shadows look somewhat artificial after a global saturation increase, those zones can be reduced slightly.

In practice, zones let one set of controls handle many targeted corrections without switching among several unrelated toolsets and their extra steps.

The default Shadows and Highlights zones will likely handle most tone-specific corrections. For narrower shadow or highlight ranges, add zones until there are as many as three highlight zones and three shadow zones, giving six useful adjustment regions. Additional zones can be created from automatic analysis or with highlight- and shadow-specific eyedroppers that sample the tonal threshold you want to work on.

After making zone edits, select the Global button when you want to return to the overall controls.

Tip

Use zones sparingly. There is no need to adjust every zone, and if the image already looks right you may not need zones at all. Unless the intent is a highly stylized result, excessive zone work can make the grade look artificial or strange.

The value of multiple zones is in choosing the appropriate one. All highlight zones overlap each other, and all shadow zones overlap each other, so the reason to pick one over another is greater specificity or a particular color push or pull.

Zones are also not a substitute for the global Contrast control. You can lift the Highlight zone's Exposure and reduce the Shadow zone's Exposure to create a kind of contrast change, but it is usually less satisfying than using Global Contrast with its pivot option. Zone-specific Exposure changes are useful for extending a global Contrast adjustment you already like, not for replacing it.

### Use Saturation/Hue/Lum Shift controls

After the main Color & Contrast corrections are in place, the next image controls, when needed, are the Shift controls for targeted hue changes. They are useful for quick, accurate fixes to distracting background colors, product colors that are off, hue ranges that need more richness, or an interview subject who looks too red.

Premiere Pro analyzes hues in a manner similar to zone analysis. It builds color patches for the most important hues found in the first frame of the clip at the playhead, either from selecting the clip in the Clip Grid or from dragging in the Color viewer time ruler. Hovering over a color swatch or Shift control shows a monitor overlay that previews the parts of the image matching that hue.

When the hue you need is missing from the swatches, sample it in the monitor with the eyedropper. A distinct sampled color creates a new swatch. If it is not distinct enough, an unused neighboring swatch updates to that hue and becomes selected, or an existing overlapping swatch is selected when that color was already represented.

To change a color, choose its color swatch and then use the three two-dimensional controls to adjust Saturation, Hue, or Luminance for every matching part of the clip. Vertical dragging sets the strength of the change: more or less saturation, one direction or the other in hue, or a lighter or darker color. Horizontal dragging sets the hue range, from narrow and specific to broader and more inclusive of nearby hues. Once the gesture is familiar, a single smooth drag can set both the hue change and the falloff range.

The Shift controls work best with restraint. Do not adjust every hue swatch simply because it is available; concentrate on colors that actually need correction and leave the rest alone. Too many narrow color edits can over-segment the image and make it look artificial unless that stylization is intended.

Tip

These controls cover the same general territory as Hue vs. Sat, Hue vs. Hue, and Hue vs. Lum curves in other applications, but require fewer steps.

### Tweak Texture and Sharpness

Finally, Texture and Sharpness adjust how strongly textures of different sizes appear in the image.

- Texture is a vertical-only slider for softening or sharpening medium-sized image detail; Texture has no horizontal adjustment.
- Sharpness is a two-dimensional control for increasing or reducing the impression of sharpness. Drag vertically to change sharpening amount, and drag horizontally to set the detail threshold so smaller details can be excluded while stronger edges receive the effect.

Texture and Sharpness provide controls for increasing or reducing detail at both fine and coarse scales.

The Texture and Sharpness controls can raise or lower the appearance of fine and coarse detail in an image.

Used together, the two controls can create many results. For example, lowering Texture can reduce unwanted blemishes on a subject, while raising Sharpness and dragging right to increase the threshold can restore some crispness to key subject details without making the whole image too soft.

The default behavior of these controls is a strong starting point and can often do enough on its own. For more exact work, both controls can expand into multi-parameter versions.

- Selecting the Sliders button below Texture changes the control into five vertical sliders, each tied to an independent texture band from fine to coarse. With these sliders, some texture bands can be softened while others are sharpened for highly specific results.
- Selecting the Sliders button underneath Sharpness changes that control into three vertical sliders for independent Amount, Radius, and Threshold adjustment of the unsharp mask effect.

Expanded controls provide very deep command over image texture. Their main purpose is not to force you to use every parameter, but to give access to the specific band of behavior needed for the image. Also remember that using more bands in the Texture control increases the processing load.

### Using Style Operations to Create a Look

After a clip has been matched to the rest of a scene, or after its overall image quality has been improved, you may want to add a stylized look. Adjust controls are broad enough for many tasks, but the specialized modules in Style operations make a wider range of creative image changes easier to build. You can also browse ready-made Style Presets, try different looks, and then customize any preset to fit the mood of the scene or project.

## Color adjustment in Edit mode

Use Edit mode for quick color corrections in the Properties panel, then take those clips into Color mode when they need more detailed refinement.

In Edit mode, the Color section of the Properties panel contains a shortened set of global color controls that correspond to the first Clip Adjust operation in Color mode. They match the Adjust controls, but the two-dimensional controls from Color mode are separated into individual sliders and only the global adjustments are shown.

These controls let editors make fast fixes in Edit mode for common problems or inconsistencies that would otherwise distract viewers, without opening Color mode. Because the controls correspond to Color mode adjustments, work done in Edit mode becomes a starting point for more detailed Color mode grading, so the two areas support one another.

The Properties panel color controls include these sliders:

The Properties panel in Edit mode supports fast global color corrections.

Edit mode uses the Properties panel for quick global color adjustment.

Chroma

- Temperature: shifts the image's color temperature between warm (orange) and cool (blue) for natural-looking lighting correction.
- White Balance Eyedropper: samples pixels that should be neutral white or gray, then automatically corrects the color cast or color temperature imbalance that is tinting the image.
- Tint: moves the image's chromatic balance between green and magenta, helping correct artificial light sources with unnatural chromaticity.
- Saturation: changes overall color intensity; at zero, the image becomes monochrome.

Luminance

- Contrast: widens or narrows luminance contrast by changing the gap between the brightest and darkest pixels.
- Pivot: sets the tonal center around which contrast expands. Pixels lighter than the pivot are brightened and pixels darker than the pivot are darkened, so changing Pivot on an existing contrast adjustment can bias the image toward highlights or shadows.
- Exposure: lightens or darkens by moving the highlights up or down while the shadows stay anchored; midtones scale linearly.
- Black: changes the appearance of pixels near black by stretching or compressing near-dark values toward darker or lighter results.

Detail

- Texture: raises detail contrast for a crisper texture appearance, or lowers that contrast to soften texture.
- Sharpness: creates the perception of sharpness by emphasizing edge detail.
