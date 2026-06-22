# Color Corrections, Selective Color Adjustments, Color Effects Techniques

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Apply a Hue or Saturation adjustment; Colorize a grayscale image or create a monotone effect; Match color in different images; Match color between two images; Match color of two layers in the same image; Save and apply settings in Match Color; Replace Object Colors by Applying a Hue or Saturation Adjustment; Convert a color image to black and white; Apply a gradient fill; Edit a gradient.

## Apply a Hue or Saturation adjustment

In Adobe Photoshop, adjust hue, saturation, and lightness when you want to improve image color or completely change its appearance.

Open the image in Adobe Photoshop, then choose the layer that needs the adjustment.

Use Layer > New Adjustment Layer > Hue/Saturation to add an adjustment layer.

In the New Layer dialog, set this option:

- Name: enter the name for the new layer.

Enable the Use Previous Layer to Create Clipping Mask checkbox when the adjustment should affect only the layer below.

- Color: adds one tint consistently across the image.
- Mode: sets the blending behavior between the adjustment and the image colors.
- Opacity: changes how transparent the adjustment appears.

In the Properties panel, use the sliders for:

- Hue: shifts the color tones.
- Saturation: changes the color strength.
- Lightness: adjusts overall brightness.

Enable the Colorize checkbox to place one uniform color over the full image.

Fine-tune the settings as needed while watching live canvas updates.

Note

In the Properties panel, use Reset to adjustment defaults when you need to undo a Hue/Saturation adjustment.

### Adjust Colors capability and Improved Hue/Saturation Adjustment Panel

Use Adjust Colors in the Contextual Task Bar to find prominent image colors and change their Hue, Saturation, and Lightness.

### Adjust colors from the Contextual Task Bar

Choose Adjust Colors from the Contextual Task Bar.

Pick the desired color from the Adjust color pinwheel.

Choose another color from the Adjust color pinwheel as needed.

After you choose a color, Photoshop displays Hue, Saturation, and Lightness sliders directly on the canvas.

Move the sliders to modify the selected color and preview the image update immediately.

To work on a different color, choose the Eyedropper tool from the Contextual Task bar and sample that color in the image.

### Refine edits in the Hue/Saturation adjustment panel

From the Properties panel, open the Hue/Saturation adjustment panel.

Refine edits with the sliders and larger color swatches.

When a color changes, compare the before-and-after state on the swatch.

Use the Color Range tool when adjustments need to be narrowed to specific target areas.

Tip

The Adjustment panel combines sliders with a color wheel measured in degrees. Inner vertical sliders set the editable range, and outer triangular sliders control fall-off, producing a feathered transition instead of a sharp cutoff.

## Colorize a grayscale image or create a monotone effect

Use a Hue/Saturation adjustment in Adobe Photoshop to colorize grayscale artwork or build monotone effects.

If the image is grayscale or uses a non-RGB mode, choose Image > Mode > RGB Color.

Choose Layer > New Adjustment Layer > Hue/Saturation to add the Hue/Saturation adjustment layer.

In the Properties panel, choose Colorize to apply one hue across the full image, producing a monotone or colorized result.

Change Hue, Saturation, and Lightness to set the applied color, its intensity, and its brightness.

## Match color in different images

Use the Match Color command in Adobe Photoshop when colors need to line up across images, layers, or selections.

In Photoshop, Match Color modifies one or more images, layers, or selections so their colors align with another source. The command supports visual consistency across separate photos or composite elements and is available at Image > Adjustments > Match Color.

### Overview of Match Color

Match Color standardizes color relationships between different sources in Photoshop. It works only in RGB mode and can be used:

- Across two separate images.
- Across layers inside the same image.
- Across multiple selections in one image.

### Benefits of Match Color

Use Match Color when you need to:

- Build a consistent look across several photos in a series.
- Align particular tones, including skin colors, between different images.
- Blend layers or selections while preserving an even color balance.

### Functionality of Match Color

When the command is active, Photoshop temporarily changes the pointer to the Eyedropper tool for color sampling. The Info panel shows pixel values live so adjustment feedback is visible while you work.

The command includes controls for:

- Luminance adjustment that brightens or darkens the image.
- Color range adjustment that widens or narrows the tonal spectrum.
- Cast neutralization for removing unwanted color tints.

## Match color between two images

Use the Match Color command in Adobe Photoshop to make one image's colors align with another image.

Match Color is limited to RGB mode. While matching colors between images, it lets you adjust luminance, color intensity, and color cast. Apply it to a complete image, a particular layer, or a selection.

Activate the image you want to change. If only a certain layer should receive the adjustment, make that layer active.

Choose Image > Adjustments > Match Color.

In the Image Statistics area, use the Source menu to choose the source image whose colors will be applied to the target.

- None uses the target image itself for the color calculations.
- In the Layer menu, choose a specific layer from the source image, or choose Merged to use all layers.

After choosing the source, set how it contributes:

- Ignore Selection when Applying Adjustment: applies the adjustment across the full target image.
- Use Selection in Source to Calculate Colors: bases the color calculation only on the source selection.
- Use Selection in Target to Calculate Adjustment: builds the adjustment only from the target selection.

Select Neutralize when you want Photoshop to remove color cast from the target image automatically.

Change brightness by moving the Luminance slider or entering a value from 1-200, default 100.

For saturation, move the Color Intensity slider or enter a value from 1-200, default 100. A value of 1 turns the image grayscale.

Use the Fade slider to set adjustment strength; moving the slider right weakens the result.

Select OK to apply the changes.

## Match color of two layers in the same image

Use the Match Color command in Adobe Photoshop when one layer's colors should match another layer in the same image.

In Photoshop, Match Color can adjust a layer so its colors match a different layer in that document. This helps keep multiple layers visually consistent when they are blended into one composition.

If only a region should be adjusted, select an area in the layer you want to match, such as skin tones. Without a selection, Photoshop uses colors from the entire source layer.

Select the target layer, meaning the layer to adjust, and then choose Image > Adjustments > Match Color.

In the Match Color dialog, verify that the Source menu points to the same image as the target image.

Use the Layer menu to choose the source layer for the match. Choose Merged when the match should use the combined colors from all layers.

After selecting an option, define how Photoshop should use it:

- Ignore Selection when Applying Adjustment: applies the change to the whole target layer.
- Use Selection in Source to Calculate Colors: calculates from the selected region of the source layer.
- Use Selection in Target to Calculate Adjustment: limits adjustment calculation to the selected region of the target layer.

Select Neutralize to remove color cast from the target layer.

Adjust these settings as needed:

- Luminance: change brightness by moving the slider or typing 1-200, default 100.
- Color Intensity: change saturation by moving the slider or typing 1-200, default 100. Entering 1 makes the layer grayscale.
- Fade: move the slider to control adjustment strength. Sliding right reduces the effect.

Select OK to apply the changes.

## Save and apply settings in Match Color

Save and reuse color adjustment settings with Match Color in Adobe Photoshop to keep image corrections consistent.

### Save settings

Choose Image > Adjustments > Match Color.

In the Match Color dialog's Image Statistics section, choose Save Statistics.

Name the settings file, choose Tag from the drop-down list, and save the file in the location you want.

### Apply saved settings

Choose Image > Adjustments > Match Color.

From the Match Color dialog's Image Statistics area, choose Load Statistics.

Go to the saved settings file and load it so the adjustments are applied.

## Replace Object Colors by Applying a Hue or Saturation Adjustment

Use Hue/Saturation adjustment layers in Adobe Photoshop to replace colors on selected objects while keeping the edit flexible and non-destructive.

A Hue/Saturation adjustment layer can change the colors of specific objects without directly altering the original pixels.

Select the object with the Quick Selection tool.

In Adjustments panel > Single adjustments, select the Hue/Saturation <insert icon here> icon. That selection becomes the adjustment-layer mask.

Use the Properties panel sliders for Hue and Saturation to replace the object's color. If the original color affects the replacement color, select Colorize and adjust the settings again.

Keep contrast by leaving the Lightness slider at 0. To retain contrast and saturation together, set the adjustment layer to Hue blending mode.

Refine the affected area by painting on the mask with black or white.

## Convert a color image to black and white

In Adobe Photoshop, create a black and white look that removes color distraction from an image.

Color photography is important when vivid, distinct colors and shades reveal fine detail. Black and white photography instead draws attention to subject matter and texture, while adding drama to the image.

Choose Layer > New Adjustment Layer > Black & White.

Name the adjustment layer in the New Layer dialog box, then select OK.

Photoshop then applies a default grayscale conversion to the image.

Fine-tune the result in the Properties panel by selecting the Black & White icon:

- Preset: choose a predefined grayscale mix or a saved custom mix. Use the menu icon > Save Black & White Preset to store the preset.
- Auto: creates a grayscale mix from the image's color values.
- Tint: enable the checkbox, then select the color swatch to pick a subtle tone color in the Color Picker (Tint Color).
- Color sliders: drag sliders to change gray tones for individual colors. Select and drag the On-image adjustment icon over the image to edit tones. Select reset icon to restore defaults.

Save and share the result.

Post the result in the Adobe Photoshop community and on social media. Include Adobe Photoshop and tag the image with #blackandwhitephotoshop.

## Apply a gradient fill

In Adobe Photoshop on desktop, apply a gradient with the Gradient tool and shape its appearance through color, direction, and transition controls.

Choose File > Open, then select and open an image.

Select an area if the gradient should be limited to that region. With no active selection, Photoshop applies the gradient to the entire layer.

Choose the Gradient tool from the toolbar.

Open presets by selecting the gradient bar in the Options bar, then choose a preset.

Set the gradient type to Linear, Radial, Angle, Reflected, or Diamond.

Use Dither to smooth the gradient and reduce banding. Use Reverse to swap the gradient colors.

Drag across the canvas to apply the gradient; the drag direction and distance determine the appearance.

Note

After drawing a gradient, edit it from the Properties panel or Contextual Task Bar. Options bar settings affect newly created gradients only and do not change gradients that already exist.

Use a gradient fill in Photoshop to blend colors smoothly and add depth to artwork.

## Edit a gradient

In Adobe Photoshop on desktop, customize gradient color, transparency, and transitions with on-canvas controls and the Properties panel.

Choose File > Open, then select and open an image.

Choose the Gradient tool from the toolbar.

Open presets by selecting the gradient preview in the Options bar, then choose a preset.

Drag across the canvas to apply the gradient.

Use the on-canvas controls or the Properties panel to adjust the gradient:

- On the canvas, drag the gradient line to alter direction and length.
- Choose a color stop when its color should change.
- Move color stops to reshape transitions between colors.
- Select a point along the gradient line to add a new color stop.
- Remove a stop by dragging it away from the line.
- Reposition the midpoint between stops to set the blend balance.

In the Properties panel, use Save Preset to store the gradient.
