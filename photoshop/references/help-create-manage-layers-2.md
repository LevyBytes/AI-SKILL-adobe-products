# Color Adjustment Fill Layers, Apply Layer Effects

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adjustment and fill layers overview; Work with adjustment layers; Use layer masks to target adjustment or fill layers; Create adjustment layers; Merging adjustment or fill layers; Adjustment presets overview; Create custom presets; Correct color balance with Color and vibrance; Create fill layers; Adjustment layer options; Change adjustment and fill layer options; Adjust contrast with Clarity and Dehaze; Adjust texture with Grain; Add layer styles; Work with preset styles; Layer style effects and options overview; Manage preset styles; Display or hide layer styles.

## Adjustment and fill layers overview

Adjustment and fill layers in Adobe Photoshop let color and tonal edits remain separate from the original image pixels.

### What are adjustment and fill layers?

With adjustment and fill layers, Photoshop keeps edits editable because the original pixel data remains intact. Instead of changing image content directly, these layer types keep the edit instructions separate from the pixels they affect.

### Adjustment layers

Use an adjustment layer to apply color or tonal changes while leaving pixel values unchanged. For instance, instead of applying Levels or Curves directly onto the image, create a Levels or Curves adjustment layer. The adjustment layer stores the color and tone changes and affects every layer below it.

### Fill layers

Fill layers add solid colors, gradients, or patterns to a composition. They differ from adjustment layers because they do not change how lower layers appear.

### Types of adjustment layers

Photoshop includes several adjustment layer types for different editing needs:

- Levels and Curves - changes tonal range and color balance.
- Hue/Saturation - changes color intensity and the overall color.
- Black & White - turns color images into monochrome while controlling how colors map into grayscale.
- Brightness/Contrast - handles straightforward lighting changes.
- Color Balance - changes color mixtures across shadows, midtones, and highlights.
- Selective Color - refines chosen color ranges.

### Types of fill layers

Photoshop provides three fill layer kinds:

- Solid Color - fills the layer with one color chosen in the Color Picker.
- Gradient - builds a gradual blend among multiple colors in patterns such as linear or radial.
- Pattern - uses one of the Photoshop pattern libraries to repeat a pattern across the layer.

## Work with adjustment layers

Use adjustment and fill layers to make non-destructive edits, refine color precisely, and build creative effects.

### Create an adjustment layer

Adjustment layers apply color and tonal corrections, such as brightness, contrast, or vibrance, while pixel data stays unchanged.

Use File > Open to browse for and choose an image.

In the Layers panel, choose Create new fill or adjustment layer, then pick an option:

- Color & Vibrance: strengthens subdued colors.
- Brightness/Contrast: lightens or darkens while increasing contrast.
- Levels: changes shadows, midtones, and highlights.
- Curves: fine-tunes tonal range with curve control.
- Exposure: corrects exposure, offset, and gamma.
- Hue/Saturation: changes hues and saturation.
- Color Balance: changes the overall color cast.
- Black & White: converts to monochrome and changes tonal mapping.
- Photo Filter: adds warming or cooling lens effects.
- Channel Mixer: redistributes color channels.
- Color Lookup: adds cinematic or creative looks.
- Selective Color: changes targeted color ranges.
- Invert: reverses colors for a negative effect.
- Posterize: reduces the image into flat color levels.
- Threshold: converts the image to high-contrast black and white.
- Gradient Map: maps tones onto gradient colors.
- Solid Color: applies a single-color fill.
- Gradient: applies a smooth blended gradient.
- Pattern: applies a repeating design fill.

In the Properties panel, move the sliders to change colors, tones, or other settings.

Give the layer a name, configure layer options, and press Enter (or Return on macOS).

## Use layer masks to target adjustment or fill layers

In Adobe Photoshop, target color and tonal adjustments to chosen image areas by painting on an adjustment layer mask for precise, non-destructive editing.

Layer masks follow a direct rule: white reveals, black conceals. Gray mask regions produce partial transparency, which creates smooth movement between adjusted and unadjusted areas. Because of that behavior, masks are useful for subtle targeted edits that improve selected image areas while leaving the rest unchanged.

You can refine masks later at any time. Select the mask thumbnail, then paint with black, white, or gray. This non-destructive workflow lets you try different effects without permanently changing the original image.

### Create a mask from a selection

Select the area that should receive the adjustment or fill. Use any selection tool, such as the Marquee, Lasso, or Quick Selection tool.

Choose Layer > New Adjustment Layer, then choose the adjustment type.

Photoshop creates the adjustment layer from the current selection. White areas, meaning the selection, reveal the adjustment; black areas outside the selection hide it.

Set the adjustment in the Properties panel. If the mask needs refinement, paint on it with black or white.

### Use Color Range to create a precise mask

Select the layer that should receive an adjustment.

Choose Layer > New Fill Layer, then choose the adjustment type.

In the Masks section of the Properties panel, choose Color Range.

In the Color Range dialog, choose Sampled Colors.

Pick the image colors to target with the adjustment, then change the Fuzziness slider to set how many similar colors are included.

Choose OK to build a mask from the selected color range. If needed, fine-tune the mask by painting with black or white.

## Create adjustment layers

In Adobe Photoshop, create and manage adjustment layers for non-destructive edits, precise color refinement, and creative effects.

Use File > Open to browse for and choose an image.

In the Layers panel, choose Create new fill or adjustment layer and select an option.

In the Properties panel, use the sliders for colors, tones, and any other settings.

Enter a layer name, configure layer options, and press Enter (or Return on macOS).

## Merging adjustment or fill layers

When working in Photoshop, understand how merging adjustment or fill layers changes edits and the file structure.

Photoshop supports several ways to merge adjustment and fill layers. They can merge with the layer immediately below, all layers in a group, selected layers, or every visible layer. An adjustment or fill layer, however, cannot be the merge target layer.

Merging an adjustment or fill layer into the layer beneath rasterizes the adjustments and applies them permanently to that layer. A fill layer can also be rasterized without merging, which gives you more control over when an edit becomes permanent.

Also note that adjustment and fill layers with masks made only of white values usually do not add much file size. Merging only to reduce storage is not needed.

## Adjustment presets overview

Adjustment Presets in Photoshop let you quickly preview, apply, and refine image effects.

Presets provide a fast way to preview image appearances and change them with little effort.

Find Presets in the Adjustments panel. Hover over a preset thumbnail to see its effect on the image before applying it. After applying one, refine it further by editing its adjustments in the Properties panel.

Default presets in the Adjustments panel cover Portraits, Landscape, Photo Repair, Creative, Black & White, and Cinematic images. These presets give a fast starting point for polished results and can save time in complex editing workflows.

Hovering over a preset shows its name and preview on the canvas. Selecting a preset shows the effect group in the Layers panel so it can be managed easily.

You can change the display mode for presets:

- List View gives a detailed text-based display.
- Grid View shows thumbnail previews.

Use the icon in the Adjustments panel to switch between these two views.

## Create custom presets

Create custom presets. Build, organize, and share custom presets in Photoshop for consistent editing.

In Photoshop, custom presets let you organize favorite adjustments and reuse them quickly.

### Create a custom preset

Add the adjustment you want to use to the image.

In the Layers panel, choose the adjustment layer to save as a preset.

In the Adjustments panel, choose the Add icon in the Presets section, then choose Save.

Note

Choose the desired Preset group so the preset is saved in an organized place.

Saved presets appear in the Presets panel of Adjustments as thumbnails or in list view.

### Manage presets

Hover over a preset to preview the effect on the canvas.

Rename or delete a preset from either thumbnail view or list view.

### Export or import presets

To export, open the presets menu:

- In List view, choose More.
- In Icon view, right-click a preset thumbnail.

Export a single preset, one group, or every custom preset.

Store the exported file as a .psap file in Photoshop's default folder or in another location you choose.

To import, go back to the Presets menu and choose More > Import Presets.

## Correct color balance with Color and vibrance

In Adobe Photoshop, use Temperature, Tint, Vibrance, Saturation, and White Balance controls to bring image colors into a balanced, natural range.

Use File > Open, then browse to and choose an image.

In the Layers panel, use Create new fill or adjustment layer and choose Color and vibrance for color correction.

In the Properties panel, work with these sliders:

- Temperature: changes whether the colors read warmer or cooler.
- Tint: moves the color balance toward green or magenta.
- Vibrance: strengthens colors that are comparatively muted.
- Saturation: changes the overall color intensity.

Enter a layer name, choose the layer options, then press Enter (or Return on macOS).

Use Color and vibrance to balance Temperature and Tint for colors that look natural.

Use Color and vibrance to balance Temperature and Tint for colors that look natural.

## Create fill layers

In Adobe Photoshop, fill layers let solid colors, gradients, and patterns remain editable as non-destructive content.

Use File > Open, then browse to and choose an image.

Open Layer > New Fill Layer, then pick from these choices:

- Solid color: uses the current foreground color as the layer fill.
- Gradient: places a gradient into the layer.
- Pattern: applies a pattern as the layer contents.

Enter a layer name, choose the layer options, then press Enter (or Return on macOS).

## Adjustment layer options

Adjustment layer options let image color and tone changes stay non-destructive.

## Change adjustment and fill layer options

Photoshop includes improved Preset management for editing adjustments and fill layers.

### Edit adjustment and fill layers

With adjustment and fill layers, color, tone, and effects changes stay non-destructive. Their settings remain editable whenever needed, and their masks can be refined to decide which image areas receive the adjustment. By default, the adjustment or fill layer is fully unmasked, so its effect reaches the entire image.

### Updated Adjustment Presets layout

Photoshop now presents the Adjustments Presets panel in a redesigned layout that makes preset work quicker and easier to navigate.

Simplified tabbed navigation: Move between Presets and Single adjustments with less friction.

Enhanced Preset icons: Updated, clearer icons make each applied adjustment easier to identify.

Organized Presets: Build preset groups, arrange presets inside them, and customize the order with drag-and-drop. Both default presets and presets you create appear under the Presets tab.

Improved Preset access: Open saved presets more easily from the updated flyout menu.

These changes make adjustment management and application more streamlined while giving edits more flexibility.

## Adjust contrast with Clarity and Dehaze

In Adobe Photoshop, the Clarity and dehaze adjustment layer changes midtone contrast and reduces haze without destructive edits.

Use File > Open, then browse to and choose an image.

In the Layers panel, use Create new fill or adjustment layer, then choose Clarity and dehaze.

In the Properties panel, adjust these sliders to strengthen image structure and cut haze.

- Clarity: changes midtone contrast and brings out definition in images.
- Dehaze: changes haze reduction and contrast improvement.

Use the Clarity and dehaze adjustment panel sliders to bring out detail and soften image haze.

Use the Clarity and dehaze adjustment panel sliders to bring out detail and soften image haze.

Enter a layer name, choose the layer options, then press Enter (or Return on macOS).

## Adjust texture with Grain

In Adobe Photoshop, the Grain adjustment layer adds grain to an image while keeping the edit non-destructive.

Use File > Open, then browse to and choose an image.

In the Layers panel, use Create new fill or adjustment layer, then choose Grain.

In the Properties panel, change these sliders to control how the grain looks.

- Amount: sets the overall grain strength.
- Size: changes the dimensions of individual grain particles.
- Roughness: varies grain randomness for a smoother or rougher appearance.

Use the Grain adjustment layer in Photoshop to add texture and a film-like effect to images.

Use the Grain adjustment layer in Photoshop to add texture and a film-like effect to images.

Enter a layer name, choose the layer options, then press Enter (or Return on macOS).

## Add layer styles

Adobe Photoshop layer styles add non-destructive effects to a layer.

### Use the layer effects icon

Select Window > Layers.

In the Layers panel, choose the layer that should receive the effect.

Use the Add a layer style icon, then pick an effect from the pop-up menu.

Set the effect controls in the Layer Style dialog.

Select OK.

In the Layers panel, open the arrow beside the layer style icon to expand and inspect a layer's effects.

### Use the Layer menu

In the Layers panel, choose the layer that should receive the effect.

Select Layer > Layer Style.

Choose an effect.

Set the controls in the Layer Style dialog.

Select OK.

### Use the Styles panel

In the Layers panel, choose the layer that should receive the effect.

Select Window > Styles.

Select a style thumbnail to apply it immediately to the selected layer.

## Work with preset styles

Preset styles in Adobe Photoshop can be applied and managed to enhance layers quickly.

### Apply preset styles

In the Layers panel, choose the layer to style.

Select Window > Styles.

Choose a style to apply it to the selected layer.

Hover over a style to view its name and preview the effect.

### Apply a style from another layer

In the Layers panel, choose the source layer that contains the style to copy.

To copy the style, press Alt-drag (Windows) or Option-drag (macOS) while dragging the layer effect icon from the source layer onto the destination layer.

### Change how layer styles are displayed in the Styles panel

Open the menu icon in the Styles panel.

Choose a display option:

- Text Only: shows styles as a text list.
- Small Thumbnail or Large Thumbnail: shows styles as thumbnails.
- Small List or Large List: shows styles in a list that includes thumbnails.

Note

For style organization, use the folder icon in the Styles panel to make groups.

For renaming, double-click the style in the Styles panel, type the replacement name, and press Enter (Windows) or Return (macOS).

## Layer style effects and options overview

In Adobe Photoshop, use the Layer Style dialog to view and edit layer effects and styles.

Reach the Layer Style dialog either by selecting the layer style icon in the Layers panel or by double-clicking a layer away from its name and thumbnail.

Checking an effect name applies that effect using the active values.

Layer Style dialog showing Blending Options with Bevel & Emboss enabled.

Layer Style dialog showing Blending Options with Bevel & Emboss enabled.

- Styles: chooses among preset styles.
- Blending Options: changes the layer blending controls.

Combine these effects to build custom styles.

## Manage preset styles

Create, rename, delete, and save preset styles.

### Create a preset style

Choose a layer in the Layers panel.

Use the Add a layer style icon and pick the desired layer effect from the dropdown list.

Note

A default layer effect must be selected before you can create a new preset style.

In the Layer Style dialog box, change the layer effect settings until they match the look you want to save.

Select New Style.

In the New Style dialog, enter a name and select OK.

### Rename a preset style

Select Window > Styles.

Pick the preset style for renaming.

Double-click the preset style name and type the new name.

### Delete a preset style

Open Window > Styles.

Choose the preset style marked for deletion.

Use Delete style.

When the Delete style dialog appears, choose OK.

### Save a set of preset styles

Open Window > Styles.

Choose the preset style to store as a library.

From the More options menu, choose Export Selected Styles.

In the Save dialog, type a name for the style library and pick the desired location.

Choose Save.

## Display or hide layer styles

Use these controls in Adobe Photoshop when complex designs make layer-style visibility easier to manage in the workspace.

In the Layers panel, layer styles sit below the layer they belong to and can be expanded. Toggling them changes only whether those entries are shown in the Layers panel; the document artwork keeps the same appearance. This helps when busy documents contain many layers with effects.

In the Layers panel, choose a layer that already has styles. The Add a layer style icon identifies layers of this kind.

Use the small triangle next to the layer name to reveal or collapse the layer styles.

Open the panel menu icon > Panel Options, then choose the thumbnail size you prefer.

## Copy and paste layer styles

Move effects between layers in Adobe Photoshop by copying a style from one layer and applying it to others, using context menus for a consistent look.

In the Layers panel, right-click the layer whose style should be copied.

Choose Copy Layer Style.

Right-click the destination layer. To choose several destination layers, hold Ctrl (Windows) or Command (macOS).

Choose Paste Layer Style.

Tip

For layer styles reused across projects, store them as preset styles in the Styles panel so they are available quickly.

## Import preset style libraries

Use preset styles in Adobe Photoshop to apply layer effects quickly from reusable libraries.

Photoshop includes many preset layer-style libraries grouped by purpose. Loading the right library can speed up work when you need web buttons, text effects, or other creative styles.

Layer styles stay non-destructive and remain attached to layer content. If layer content is moved or edited, those effects continue to apply to the changed content.

Open the Styles panel with Window > Styles.

From the panel menu icon, choose Import Styles.

Browse to the style library location. Style libraries use the .asl file extension.

Choose the style library file, then choose Open.

## Manage contours

Use the Contour Editor in Adobe Photoshop to shape layer-style effects such as shadows, glows, and bevels.

Photoshop layer styles can add shadows, glows, and bevels to layers. Default settings often work, but contours let you build more distinctive effects by changing how those effects blend or fade.

Contours define transitions for effects, such as moving from opaque areas toward transparency or blending one color into another. Editing the contour can produce custom shadow falloff, bevel lighting with a particular character, or glow fading that does not follow the standard pattern.

### Access and modify contours

Double-click the layer area, excluding the layer name, to open the Layer Style dialog.

Choose a contour-capable effect, for example Drop Shadow, Inner Shadow, Outer Glow, Inner Glow, Bevel and Emboss, or Satin.

Open the Contour Editor by choosing the contour thumbnail.

Edit the curve, then choose OK.

Tip

To keep the custom contour for later, choose New and name it.

Choose OK.

### Understand contour applications

- Drop Shadow and Inner Shadow: the contour sets the shadow's opacity falloff.
- Outer Glow and Inner Glow: the contour defines how the glow fades away from its starting point.
- Bevel & Emboss: the contour changes the highlight-to-shadow transition across the surface.
- Satin: the contour changes how the effect follows the edges of the layer content.

## Set a global lighting angle for all layers

Set one lighting direction in Adobe Photoshop so compatible layer effects update from a shared light angle.

Designs that use several Photoshop layer effects look more coherent when the light source stays consistent. Global lighting makes shadows and highlights on different layers appear to originate from the same direction.

Directional effects such as Drop Shadow, Inner Shadow, and Bevel and Emboss can use global lighting. With that option enabled, changing the angle in one place updates the angle everywhere, which reduces repeated edits and keeps the design visually consistent.

### Set the global lighting angle

Choose Layer > Layer Style > Global Light.

Set the lighting direction by entering a value in the Angle field or by dragging the angle radius.

Control the height of the light source with the Altitude values.

Choose OK.

### Set global lighting from a layer effect

In the Layers panel, double-click a layer to open the Layer Style dialog.

Choose Drop Shadow, Inner Shadow, or Bevel & Emboss.

Turn on Use Global Light for this effect.

Change the Angle and Altitude values.

Choose OK.

## Scale layer effects

Use Photoshop scaling for layer effects such as shadows, glows, and bevels so effect size stays proportional and visually balanced.

After a layer with effects is resized, those effects can look out of scale relative to the new layer dimensions. Photoshop provides a way to scale the effects so the design keeps its balance.

Layer effects remain attached to layer content and update when the layer is edited. However, transforms and resizing do not scale the effects automatically. The Scale effect addresses that by changing every effect in the layer style by the same percentage.

In the Layers panel, choose a layer containing the effects you need to scale.

To open the Layer Style dialog, double-click the Add a layer style icon beside the layer name.

Adjust all effects together by dragging the Scale slider to the needed percentage.

Choose OK.

Tip

For text layers, consider converting the text to a Smart Object before scaling. That keeps text quality intact while letting the text and its effects scale together.

## Remove layer effects

Use Photoshop techniques to remove a single effect or clear all layer styles from selected layers while leaving the underlying content unchanged.

Layer effects stay connected to layer content and refresh when the layer changes. Because the approach is non-destructive, you can try style variations without damaging the original work. When the effects are no longer needed, remove them one at a time or clear them all together without changing the content underneath.

### Remove individual layer effects

In the Layers panel, choose the layer that contains the effects to remove.

Expand the applied effects by selecting the arrow next to the Indicates layer effects icon.

Right-click the effect to remove, then choose Clear Layer Style.

### Remove all layer effects at once

In the Layers panel, choose the layer whose effects should be removed.

From the main menu, choose Layer > Layer Style > Clear Layer Style.

### Temporarily hide layer effects

In the Layers panel, choose the layer whose effects should be hidden temporarily.

Use the visibility icon next to the Effects section for your layer.

### Remove effects from multiple layers

Hold Ctrl (Windows) or Command (macOS), then select the layers that have effects.

Right-click one selected layer and choose Clear Layer Style.

## Work with layer styles

Apply a custom layer style, then store custom settings through the Layer Style dialog.

### Apply or edit a custom layer style

Choose a layer in the Layers panel.

Double-click the layer, avoiding the layer name and thumbnail.

In the Layer Style dialog box, choose effect options.

Choose OK.

Tip

In the Layers panel, use the layer effect icon next to the layer name to show every effect applied to that layer.

### Save custom settings

Choose an effect, such as Bevel & Emboss, from the Layer Style dialog.

Change the sliders and values.

Choose Make Default.

Note

- The next time this dialog opens, your custom defaults are applied automatically.
- After making changes, choose Reset to Default to return to the custom defaults you saved.

Choose Make Default to store the current style settings as the new default, or choose Reset to Default to return to saved defaults.

Choose Make Default to store the current style settings as the new default, or choose Reset to Default to return to saved defaults.

## Convert layer styles to image layers

Use Adobe Photoshop to turn layer styles into normal image layers when effects need direct editing or custom treatment.

Converting layer styles gives each effect ordinary layer behavior, so you can fine-tune the result outside the Layer Style dialog. Use this when an effect needs more filters, direct painting, or edits that layer-style controls cannot provide.

In the Layers panel, choose the layer that contains the layer style you want to convert.

Choose Layer > Layer Style > Create Layers. Photoshop separates each effect onto its own layer and groups the new layers with the original layer. Edit those generated layers as you would any standard image layer.

Note

After layer styles become image layers, the effects no longer track the original layer content. Changes to the source layer will not refresh the effect layers the way live layer styles would.
