# Get Started With Filters, Smart Filters, Blur Sharpen Filters

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Effects and filters; Filters overview; Apply filters; Apply filters from the filter gallery; Filter Gallery overview; Blend and fade filter effects; Tips for creating special effects; Sharpening overview; Sharpen controls with smart sharpen; Sharpen images with the unsharp mask; Sharpen a selection; Sharpen image using edge mask; Overview of adding blur to images; Create depth of field with lens blur; Soften hard edges or reduce detail with the Blur tool; Enhance edge contrast with the Sharpen tool.

## Effects and filters

### Get started with filters

Filters overview

Apply filters

Apply filters from the filter gallery

Filter Gallery overview

Blend and fade filter effects

Tips for creating special effects

### Smart filters

Sharpening overview

Sharpen controls with smart sharpen

Sharpen images with the unsharp mask

Sharpen a selection

Sharpen image using edge mask

### Blur and sharpen filters

Overview of adding blur to images

Create depth of field with lens blur

Soften hard edges or reduce detail with the Blur tool

Enhance edge contrast with the Sharpen tool

### Artistic and stylize filters

Reshape and distort images with Transform Warp

Warp a Layer with Cylindrical Transform

Get precise distortions with Split Warp

Distort specific image areas with Puppet Warp

Overview of Liquify filter

Overview of distortion tools

Use Liquify to distort an image

Freeze or thaw areas

Work with meshes

Work with backdrops

Reconstruct distortions

Replace the sky in images

Select and manage sky presets

Enhance images with generative AI filters

### Neural filters

Overview of Neural Filters

Use Neural Filters to enhance images

Neural Filter categories and output options

## Filters overview

Learn how Adobe Photoshop filters modify content, affect layers and selections, and allow non-destructive editing through Smart Filters.

### What are filters?

Filters alter the appearance of pixels in an image. They can apply many visual effects, ranging from light corrections to creative looks.

All filters are available from the Filter menu. When some filters are applied to a Smart Object, they become Smart Filters, so you can edit or remove them later without making permanent image changes.

### How filters work

- A filter changes either the active layer or a selected area inside that layer.
- Use filters for creative treatments, including Oil Paint in the Stylize category, or for fixes such as Sharpen and Reduce Noise.
- For non-destructive work, put the layer in a Smart Object before applying the filter, so the original content remains intact.

### Things to know about filters

- The Filter menu groups filters into categories such as Blur, Distort, Noise, Stylize, and Render.
- Availability can depend on color mode; RGB Color is one example of a required mode.
- Some filters do not process documents larger than 30,000 x 30,000 pixels.
- When a filter is dimmed, inspect the document color mode, bit depth, and layer type.
- Third-party filters and plug-ins are also listed in the Filter menu.

### When to use filters

Use filters deliberately and sparingly for best results. Keep these practices in view:

- Let filters support your creative vision instead of taking its place.
- Use masks to restrict filters to selected areas rather than covering the entire image.
- For a subtler result, reduce the filter opacity.
- Layer several filters together when you want a distinctive look.
- Tune settings for the output you intend to deliver.

## Apply filters

Use Adobe Photoshop filters to add creative effects or corrections to a layer or selection.

Filters change image appearance; common uses include enhancements, corrections, and creative transformations. For non-destructive editing, make the layer a Smart Object before applying a filter.

Choose the target layer in the Layers panel.

Choose Filter, then choose a filter category.

Choose a specific filter from the submenu.

Note

Some filters run at once. Other filters display a dialog box; adjust the settings there, then choose OK to apply the effect.

## Apply filters from the filter gallery

Preview and apply several filters in one pass with the Filter Gallery in Adobe Photoshop.

Choose the target layer in the Layers panel.

Choose Filter > Filter Gallery.

Within the Filter Gallery dialog box, open a category folder, then choose a filter.

Use the right panel controls to customize the effect.

To stack filters, choose the New effect layer icon, then choose another filter.

Choose OK.

## Filter Gallery overview

Use the Filter Gallery in Adobe Photoshop to preview an image while applying multiple creative filters.

The Filter Gallery supports artistic, brush stroke, sketch, stylize, and texture effects in combinations. While working with Smart Objects, you can preview filters, edit their settings, change their order, and apply multiple effects non-destructively.

### Filter categories

Effects in the Filter Gallery are arranged in these categories:

## Blend and fade filter effects

Fade a filter or mix it with a layer through blending modes when you need finer control.

After applying a filter in Adobe Photoshop, you may want to soften its impact or combine it creatively with the original image. Available approaches include:

- Lower the Opacity slider to fade the filter effect.
- Use blending modes such as Multiply, Screen, or Overlay to blend the filter with the layer.

Apply a filter to a layer.

Choose Edit > Fade from the menu.

Note

The Fade command works only directly after a filter, paint stroke, or adjustment has been applied.

Set Opacity in the Fade dialog box to reduce the effect.

Choose a blending mode from the Mode dropdown to define how the filter interacts with the layer.

Choose OK.

## Tips for creating special effects

Explore Adobe Photoshop techniques and filter combinations that produce distinctive artistic visual effects.

By adjusting and combining Photoshop filters, you can build results ranging from textured treatments to dramatic lighting or motion effects. For stronger results, experiment broadly, use separate layers, and keep edits non-destructive so changes remain adjustable.

### Improve filter performance

For large files or complex effects, the following practices can keep Photoshop responsive:

Note

Filters, especially random-effect filters, can produce a different appearance on individual channels than on the full composite image.

### Tips for consistent results

- Use a duplicate layer so the original image stays preserved.
- Keep effects restrained when image realism matters.
- Save filter combinations that work well as Actions for easy reuse.

## Sharpening overview

Use Adobe Photoshop tools to improve clarity and define edges in photos and artwork.

### What sharpening does

Photoshop sharpening clarifies detail by raising contrast at boundaries where tones change. It helps offset minor softness from a camera, scanner, or resizing and gives photos and artwork a crisper appearance.

### Best practices for effective sharpening

Keep these guidelines in mind when sharpening:

- Sharpening cannot recreate absent detail or repair out-of-focus areas; apply it only where the image should look sharp.
- Build sharpening slowly to prevent halos, jagged edges, or noise.

### Sharpening methods

When you are ready to sharpen, Photoshop gives you several choices. Because each option uses a different approach, choose the one that fits the image and workflow:

- Sharpen: applies basic sharpening across the entire image.
- Sharpen Edges: limits sharpening mainly to edge detail and leaves flatter regions mostly alone.
- Sharpen More: increases overall sharpening beyond the basic Sharpen option.
- Smart Sharpen: offers precise control and noise reduction.
- Unsharp Mask: provides a fast, traditional sharpening method.

## Sharpen controls with smart sharpen

Use the Smart Sharpen filter in Adobe Photoshop to control sharpness on an image or pixel-based layer.

Before you begin

- Convert the layer to a Smart Object so sharpening can be edited or removed later. In the Layers panel, right-click the layer and choose Convert to Smart Object.
- Set zoom to 100% so the sharpening effect is judged accurately.

Choose the layer to sharpen in the Layers panel.

Choose Filter > Sharpen > Smart Sharpen to open the dialog box.

Set the sharpening controls:

- Amount: changes the overall sharpening strength. Higher values create more edge contrast.
- Radius: defines how many pixels around each edge are included. Small values sharpen fine detail; larger values sharpen wider areas.
- Reduce Noise: lessens grain or artifacts during sharpening.

Choose a blur type under Remove:

- Gaussian Blur: standard sharpening similar to Unsharp Mask.
- Lens Blur: uses edge and detail detection for finer sharpening with fewer halos.
- Motion Blur: addresses blur from camera shake or subject movement.

Choose OK.

## Sharpen images with the unsharp mask

Use the Unsharp Mask filter in Adobe Photoshop to improve clarity and bring out detail.

Before you begin

- Confirm the image uses RGB Color, CMYK Color, or Grayscale mode.
- Work on a duplicate layer when you need to preserve the original image.

Choose the layer to sharpen in the Layers panel.

Choose Filter > Sharpen > Unsharp Mask.

In the Unsharp Mask dialog box, set these options:

- Amount: controls the sharpening effect's intensity. Accepted values run from 1 to 500%.
- Radius: determines the edge-neighborhood width affected by sharpening. Enter a value between 0.1 and 250 pixels.
- Threshold: sets the contrast difference required before Photoshop sharpens neighboring pixels. Enter a value between 0 and 255.

Choose OK to apply the filter.

## Sharpen a selection

Sharpen only a selected region in Adobe Photoshop when you need more precise control.

Open the image, then define the area with the Lasso tool, Quick Selection tool, or another selection tool.

While the selection is active, select and hold the Blur tool, then choose the Sharpen tool.

In the options bar, configure these items:

- Use the Brush Setting dialog box to set suitable Size and Hardness.
- Strength: controls how strongly sharpening shows.
- Select Protect Detail to reduce pixelation and preserve image quality.
- Select Sample All Layers if sharpening should draw from all visible layers; leave it unchecked to affect only the active layer.

Dab or brush over the chosen area with the Sharpen tool.

Deselect with Ctrl + D (Windows) or Command + D (macOS).

## Sharpen image using edge mask

Use Adobe Photoshop with a High Pass-created edge mask to sharpen an image in a controlled, selective way.

Edge masks work well when sharpening should target object outlines while smooth areas, such as skies or skin, stay free of artifacts.

Duplicate the image layer with Ctrl + J (Windows) or Command + J (macOS).

Select the duplicate layer, then choose Filter > Other > High Pass.

In the High Pass dialog, use a radius between 1-3 pixels, then select OK.

Set the duplicated layer's blend mode to Overlay in the Layers panel to build the edge mask.

From the Layers panel, select the Layer masks icon.

With the layer mask active, choose Filter > Blur > Gaussian Blur; use a small radius of 0.5-1.0 pixels so edge transitions become softer.

On the layer mask, paint with a black brush over areas where sharpening should not appear.

Adjust layer Opacity to set the overall sharpening intensity.

## Overview of adding blur to images

Use Adobe Photoshop blur effects to soften edges, reduce detail, create depth, or direct artistic focus.

Blur changes the way image sharpness is perceived. Use it to smooth distracting detail, pull attention toward a subject, or create motion and shallow-depth-of-field effects.

### Types of blur effects

Photoshop can blur imagery through several routes, with the choice depending on whether the edit is creative, corrective, or localized:

- Blur Gallery: on-canvas, interactive controls such as Field Blur, Iris Blur, and Tilt-Shift for placing blur selectively and adjusting it visually.
- Lens Blur: recreates camera-style depth-of-field and bokeh so the blur feels lens-based and realistic.
- Traditional blur filters: available from Filter > Blur, with choices such as Gaussian Blur and Motion Blur.
- Blur Tool: a brush-driven tool for painting softened detail directly onto chosen parts of an image.

### Creative uses of blur

- Pull focus toward the main subject by softening areas that matter less while leaving the subject crisp.
- Build depth by assigning separate blur strengths to foreground, midground, and background content.
- Recreate photographic movement or miniature-style treatments with effects such as Motion Blur or Tilt-Shift.
- Introduce expressive looks, including dreamy, abstract, or textured styling.

### Best practices

- Blur lowers sharpness; it cannot bring back detail that was not captured.
- Too much blur can make an image feel artificial or remove useful context.
- For reversible work, place blur on a Smart Object or duplicate layer so the effect can be changed or discarded later.

## Create depth of field with lens blur

Use the Lens Blur filter in Adobe Photoshop when you want a depth-of-field result.

In the Layers panel, choose the layer that should receive the blur.

Choose Filter > Blur > Lens Blur.

Set the controls in the Lens Blur dialog box:

- Depth Map: choose None in the Source menu for uniform blur across the whole image, or choose Transparency or Layer Mask when a depth map has already been prepared.
- Blur Focal Distance: move the slider to define the image area that remains sharp; pixels close to that setting stay clear, and other pixels soften progressively.
- Iris: choose a form from the Shape menu, then use Radius for blur strength, Blade Curvature for edge smoothness, and Rotation for orientation.
- Specular Highlights: raise Brightness to make highlights more pronounced, and use Threshold to decide which bright regions qualify as highlights.
- Noise: use the Amount slider to introduce texture into the result.
- Distribution: choose Uniform or Gaussian, and enable Monochromatic to keep the noise grayscale.

For tailored focus effects, tune the depth map, iris shape, and blur controls in the Lens Blur dialog box.

The Lens Blur dialog box also lets you customize depth map behavior, iris form, and blur settings for specialized focus treatments.

Choose OK to apply the effect.

## Soften hard edges or reduce detail with the Blur tool

Use the Blur tool in Adobe Photoshop to soften edges or reduce visible detail in selected image areas.

Choose the Blur tool in the Tools panel.

Configure the tool from the Options bar:

- Choose Toggle Brush Settings panel > Brush Settings to change brush Size and Hardness.
- Move the Strength slider to set blur intensity; use 10-30% for light softening and 50% or higher when stronger blur is needed.
- Enable Sample All Layers if the blur should sample every visible layer, or keep it disabled to work only on the active layer.

Paint over the regions that need blur; repeated strokes increase the effect.

If the softening goes too far, press Ctrl+Z (Windows) or Command+Z (macOS) to reverse the most recent stroke.

Tip

For portrait work that still looks natural, start with a low Strength value, about 10-20%, and build the blur slowly so skin texture remains visible.

## Enhance edge contrast with the Sharpen tool

In Adobe Photoshop, the Sharpen tool increases edge contrast in targeted areas so they appear crisper.

Press and hold the Blur tool, then choose the Sharpen tool.

Set the tool behavior in the Options bar:

- Choose Toggle Brush Settings panel > Brush Settings to change brush Size and Hardness.
- Move the Strength slider to set how strongly sharpening is applied.
- Enable Protect Detail to help limit pixelation.
- Enable Sample All Layers to sharpen from all visible layers, or leave it off to affect only the active layer.

Brush across the areas that need sharpening; each pass strengthens the result.
