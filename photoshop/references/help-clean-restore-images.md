# Enhance Image Quality With Generative Upscale, Define Planes To Adjust Perspective, Manipulate The Planes To Adjust Perspective, Edit Different Perspectives In The Same Image ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Enhance image quality with Generative Upscale; Define planes to adjust perspective; Manipulate the planes to adjust perspective; Edit different perspectives in the same image; Keyboard shortcuts to adjust perspective; Get started with Photomerge; Create panoramic images with Photomerge; Create 360-degree panoramas; Remove imperfections with the Spot Healing Brush; Retouch a large area with the Healing Brush tool; Repair an area with the Patch tool; Remove red eye in flash photos; Define an image as a preset pattern; Erase parts of an image with the Eraser tool; Auto Erase with the Pencil tool; Create smoother brush strokes using stroke smoothing; Change pixels to transparent with the Background Eraser tool; Remove similar pixels with the Magic Eraser tool.

## Enhance image quality with Generative Upscale

Improve image quality, crispness, and clarity inside Adobe Photoshop.

Use Generative Upscale to raise image resolution and bring out more detail.

Generative Upscale can also be used when the goal is higher resolution plus clearer detail.

Choose File > Open and load an image that has low resolution or limited detail.

Choose Image > Generative Upscale.

In the Generative Upscale dialog, choose the output scale you want, either 2x or 4x, and tune the available parameters as needed.

Choose the AI model that should handle the upscale operation. The models emphasize different enhancement results.

- Firefly Upscaler: repairs low-resolution images (up to 6144 px x 6144 px)
- Topaz Gigapixel: keeps existing detail intact (premium subscription required; up to 56 megapixels)
- Topaz Bloom: creates additional artistic detail (premium subscription required; up to 9 megapixels)

Choose Upscale so Photoshop creates the enlarged result as a new document with an updated name.

## Define planes to adjust perspective

Set perspective-correction planes for architecture and object photos in Adobe Photoshop.

Before perspective correction, Adobe Photoshop needs planes that describe the image geometry. This setup is useful when architecture is distorted or when objects shot from different angles need alignment.

Note

Perspective Warp on 16-bit and 32-bit documents requires at least 512 MB of video RAM (VRAM) in Photoshop. With only 256 MB of VRAM, Perspective Warp is available only for 8-bit documents. The NVIDIA GeForce GT 120 is not supported.

Choose the image that needs adjustment.

Choose Edit > Perspective Warp, read the onscreen tip, and close the tip so you can continue.

Place quads over the architectural planes or other flat surfaces in the image.

For best accuracy, align quad edges so they stay parallel with the straight architectural lines.

## Manipulate the planes to adjust perspective

Change image perspective by reshaping planes already defined with Perspective Warp in Adobe Photoshop.

Once Perspective Warp planes are defined in Photoshop, reshape those planes to fix distortion. You can move plane edges, make lines straight, or apply automatic corrections until the perspective feels natural.

After the planes are defined, switch to Warp mode to start changing the perspective.

Move the quad corners to reshape planes and alter the image perspective where needed.

Tip

For more precise control on the same building, create multiple plane sets. One set can broadly cover the structure, while another can align individual surfaces more closely.

Shift-click an edge when you need it straightened. The selected edge turns yellow and stays straight while you adjust the warp.

In Warp mode, use one of these icons when you want automatic correction:

- Level lines that are close to horizontal automatically.
- Straighten lines that are close to vertical automatically.
- Apply auto warp for horizontal and vertical alignment.

Choose the Commit Perspective Warp icon to apply the perspective edits.

Note

Shift-click the edge a second time to disable straightening for that edge.

## Edit different perspectives in the same image

Use Perspective Warp in Adobe Photoshop to change some perspectives in one image while keeping others intact.

Perspective Warp can handle several image planes independently. It is helpful in complicated scenes where one region needs correction and another region should not move.

### Preserve one perspective while editing others

Choose Edit > Perspective Warp.

Create a quad around the region whose perspective should stay unchanged.

Create connected quads around the remaining planes that need adjustment.

Choose the Warp mode in the Options bar.

Change the connected quads while the first unsnapped plane remains untouched.

Press Enter (Windows) or Return (macOS), or choose Commit Perspective Warp, to apply the edits.

### Edit multiple perspectives independently

Choose Edit > Perspective Warp.

Create separate, unconnected quads for areas that come from different perspectives.

Choose the Warp mode in the Options bar.

Tune each quad on its own to refine the separate perspectives.

Choose Commit Perspective Warp or press Enter to finish the edits.

## Keyboard shortcuts to adjust perspective

Use keyboard shortcuts when adjusting image perspective in Adobe Photoshop.

## Get started with Photomerge

Capture and prepare photos for building wide panoramic images in Adobe Photoshop.

Photomerge turns several overlapping photos into a single wide or vertical image. It lines up edges, blends detail, and adjusts perspective so multiple shots become one photo. Photomerge supports panoramas arranged side by side, top to bottom, or in both directions.

### Take better source photos for Photomerge

High-quality source photos improve the final merge. Use these practices when shooting images that need to combine cleanly:

- Overlap images by around 40% - too little or too much overlap can make alignment and blending harder
- Use the same zoom level - with a zoom lens, keep the focal length steady.
- Keep the camera level - maintain a consistent angle by using a tripod with a rotating head.
- Stay in the same position - between shots, move only the camera so the viewpoint stays consistent.
- Avoid distortion-heavy lenses - with a fisheye or wide-angle lens, use the Auto layout in Photomerge to correct distortion.
- Keep exposure settings consistent - do not change flash settings or let automatic exposure vary from shot to shot. Photomerge blending can smooth exposure changes, but large differences make alignment difficult.

## Create panoramic images with Photomerge

Build a single panoramic composition in Adobe Photoshop by stitching multiple images with Photomerge.

Choose File > Automate > Photomerge.

In the Photomerge dialog, choose Files or Folder from the Use menu.

Use Browse or Add Open Files to add source images, or use Remove to discard photos you do not want.

Choose a Layout option to control how Photoshop aligns and blends the images:

Auto: places images automatically for the strongest result.

Perspective: uses the center image as the reference and transforms the others around it.

Cylindrical: lowers distortion in wide panorama results.

Spherical: projects images as though they sit inside a sphere, which works best for 360-degree panoramas.

Collage: aligns images without stretching them or changing their shape.

Reposition: aligns by matching overlapping content only, without resizing or warping.

To further improve the output, enable any needed options:

Blend Images Together: makes transitions smoother.

Vignette Removal: corrects darkened image edges.

Geometric Distortion Correction: fixes lens distortion.

Content Aware Fill Transparent Areas: fills transparent gaps created by alignment.

Choose OK to create the panoramic composition.

Note

Photomerge builds a layered image with masks that support good blending. To clean up empty edges, merge all layers, then use Content-Aware Fill from the Edit menu.

## Create 360-degree panoramas

Use Photomerge and 3D features in Adobe Photoshop to stitch panoramic images and wrap them into a seamless 360-degree panorama.

Choose File > Automate > Photomerge.

In the dialog, choose Browse, then choose the images to stitch together.

Use photos captured in sequence with some overlap so Photoshop can align them accurately.

Choose Spherical from the Layout options.

This turns the panorama into a 360-degree view rather than a flat projection.

Enable optional settings when they are needed:

- Vignette Removal: removes edge darkening created by some lenses.
- Geometric Distortion Correction: fixes bending or warping in straight lines.
- Content Aware Fill Transparent Areas: fills gaps that remain after stitching.

Choose OK to create the panoramic image.

Photoshop stitches and aligns the photos into one continuous 360-degree view.

Note

For photos taken with a fisheye lens, choose the Auto layout and Geometric Distortion Correction to improve the result. If Adobe Photoshop does not recognize the lens, the free Adobe Lens Profile Creator is another option.

## Remove imperfections with the Spot Healing Brush

Fix blemishes, spots, and other small photo defects with the Spot Healing Brush for results that look natural.

Choose the Spot Healing Brush tool.

In the top Options bar, set Size, Hardness, and Spacing for the area being corrected. Larger sizes cover more area, higher Hardness creates sharper edges, lower Hardness softens edges, and lower Spacing produces smoother strokes.

In the Options bar, choose Content-Aware so Photoshop examines nearby pixels and fills the corrected area while preserving image detail.

Choose Content-Aware from the Options bar.

Choose Content-Aware from the Options bar.

Note

Choose Edit > Fill and set the fill mode to Content-Aware. This lets you apply Content-Aware Fill to a selection rather than paint by hand, which helps when covering large objects or uneven areas.

Use Sample All Layers from the Options bar when the correction should sample every visible layer, or turn it off to sample only the active layer.

Click or drag over imperfections so Photoshop blends nearby pixels into the repair.

## Retouch a large area with the Healing Brush tool

Use the Healing Brush tool in Adobe Photoshop to repair larger image areas by blending the sampled pixels with nearby texture, light, and tone.

Choose the Healing Brush tool.

From the brush options dropdown menu in the Options bar, set Size, Hardness, and Spacing.

Set up Healing Brush tool options in the Options bar:

Mode

Choose a blending mode for healing strokes:

- Normal: standard mode that blends with surrounding pixels.
- Replace: keeps noise and texture along brush edges.
- Multiply: darkens by combining the base color with the blend color through multiplication.
- Screen: lightens by placing the blend color over the base color.
- Darken: keeps only pixels that are darker in the blend.
- Lighten: keeps only pixels that are lighter in the blend.
- Color: combines hue and saturation while keeping luminosity from the base.
- Luminosity: combines brightness while keeping hue and saturation from the base.

Source

Choose where Photoshop should sample pixels:

- Sampled ICON: samples pixels from the current image.
- Pattern ICON: samples a selected pattern. Choose the pattern from the panel that opens.

Aligned ICON

Use the Aligned checkbox to set how Photoshop continues sampling:

- On: samples continuously as you paint.
- Off: returns to the first sample point whenever you begin painting again.

Sample

Choose which layers provide the source pixels:

- Current Layer: samples from the active layer only.
- Current & Below: samples from the active layer and visible layers below it.
- All Layers: samples from all visible layers.
- Ignore Adjustment Layers: choose the adjustment layer ICON to keep adjustment layers out of sampling.

Diffusion

Set how quickly the repaired pixels blend into the surrounding area:

- Lower values: suited to detailed textures and edges.
- Higher values: suited to smooth areas with gradient-like transitions.

Press Alt (Windows) or Option (macOS), then click the area to sample. That action defines the source pixels for the retouch.

Tip

For regions with strong edge contrast, make a selection slightly larger than the repair target. This helps stop outside colors from bleeding into the target area.

When sampling from one image and applying the sample to another image, both images need the same color mode unless one image is grayscale.

Drag across the area that needs repair. The sampled pixels blend into the surrounding image.

## Repair an area with the Patch tool

Repair selected areas or replace unwanted content in Adobe Photoshop with pixels or patterns sampled from another part of the image.

In the toolbar, hold down the Healing Brush tool, then choose Patch from the dropdown.

Drag on the image to create a selection around the area that needs repair.

In the Options bar, choose one of these settings:

- Source: treats the selection as the area being repaired.
- Destination: treats the selection as the pixel source.

Change patch settings as needed:

Normal patch type:

- Transparent: applies texture with transparency; use it on simple backgrounds.
- Use Pattern: replaces the area with a pattern.
- Diffusion: changes how smoothly the patch blends; lower values fit detail, and higher values fit smooth areas.

Content-Aware patch type:

- Structure: sets how strictly shapes are preserved.
- Color: sets the amount of color blending.
- Sample All Layers: patches with pixels from every visible layer.

Change settings in the Options bar.

Change settings in the Options bar.

Move the pointer into the selection, then drag:

- If Source is selected, drag to choose the sample area.
- If Destination is selected, drag the selected area to the patch location.

Release the pointer to apply the patch.

## Remove red eye in flash photos

Use the Red Eye tool in Adobe Photoshop.

Red eye comes from flash reflecting off the retina, often in low-light scenes. To reduce the problem while shooting, use the camera red eye reduction feature or place the flash away from the lens.

Choose the Red Eye tool.

In the Options bar, change these settings as needed:

- Pupil Size: sets the size of the corrected area.
- Darken Amount: sets how dark the corrected pupil becomes.

Click the red or white reflection inside the pupil to apply the correction.

## Define an image as a preset pattern

Turn a selected image area into a reusable pattern in Adobe Photoshop.

With the Rectangular Marquee tool, select an area and set Feather to zero pixels in the Options bar.

Choose Edit > Define Pattern to make a new pattern from the selected area.

Type a new pattern name in the Name text field and choose OK.

Note

When a pattern is defined in one image and used in another, Adobe Photoshop automatically converts the pattern color mode so it matches the destination image.

## Erase parts of an image with the Eraser tool

Remove image areas in Adobe Photoshop with Eraser tool modes and adjustable erase settings.

Choose the Eraser tool.

In the Options bar, choose one of these modes from the dropdown menu:

- Brush: removes pixels with adjustable softness and opacity settings.
- Pencil: removes pixels with hard edges.
- Block: removes pixels in a fixed-size square shape without opacity control.

For Brush and Pencil modes, set Size, Hardness, Opacity, and Flow in the Options bar.

Note

When you erase on the Background layer or on a locked transparent layer, Photoshop fills the erased area with the background color.

Drag over the region you want to erase.

To return part of the image to an earlier state, choose Erase to History in the Options bar, then drag over that region.

Tip

While dragging, hold Alt (Windows) or Option (macOS) to temporarily switch into Erase to History mode.

## Auto Erase with the Pencil tool

Use the Pencil tool Auto Erase feature in Adobe Photoshop to automatically swap between foreground and background colors.

Choose the foreground or background colors from the toolbar.

Choose the Pencil tool from the toolbar.

Enable the Auto Erase checkbox in the Options bar.

Drag across the image:

When the cursor begins over the foreground color, Adobe Photoshop paints with the background color.

When it begins over any other area, Photoshop paints with the foreground color.

## Create smoother brush strokes using stroke smoothing

Use stroke smoothing in Adobe Photoshop to control line quality and reduce shaky strokes.

Adobe Photoshop provides stroke smoothing for supported tools such as the Brush, Pencil, Mixer Brush, and Eraser. As you paint, Photoshop adjusts the stroke intelligently, reducing shakiness and creating a cleaner line.

The smoothing amount can be changed with a slider, and you can pick different smoothing modes to match your working style. This is useful for freehand drawing or when using a mouse instead of a stylus.

### Stroke smoothing settings

Smoothing amount: enter a value from 0 through 100 to control the applied smoothing strength. Lower values make only light corrections. Higher values create stronger smoothing and may add a slight delay to the stroke preview.

Smoothing modes: choose the gear icon to show additional stroke smoothing options:

Pulled String Mode - the stroke follows a trailing anchor, which helps with tight curves.

Stroke Catch-up - completes the stroke when you pause during drawing.

Catch-up on Stroke End - smooths the stroke at brush release.

Adjust for Zoom - keeps smoothing consistent at any zoom level.

Each mode can be enabled separately, giving flexibility for different work needs.

## Change pixels to transparent with the Background Eraser tool

Use Adobe Photoshop's Background Eraser tool to make background-colored pixels transparent while controlling brush behavior and sampling.

In the toolbar, select the Background Eraser tool.

Open the Brush Preset picker from the options bar, then set Size, Hardness, Spacing, Angle, and Roundness in the panel that opens.

Tip

When you work with a pressure-sensitive tablet, choose Pen Pressure for Size or Tolerance to make strokes easier to control.

In the Options bar, choose one of these sampling modes:

- Continuous: samples color repeatedly while you drag.
- Once: removes only areas that contain the color selected at the first click.
- Background Swatch: removes areas that contain the current background color.

Set Limits:

- Discontiguous: removes the sampled color anywhere it falls beneath the brush.
- Contiguous: removes neighboring pixels that match the sampled color.
- Find Edges: keeps harder edge detail while removing nearby sampled color.

For Tolerance, type a value or move the slider to control how much color variation is removed.

Enable Protect Foreground Color when areas matching the current foreground color should remain untouched.

Drag the brush over the region to remove. The brush center supplies the sampled color; matching pixels are erased while foreground edges are retained.

## Remove similar pixels with the Magic Eraser tool

Use the Magic Eraser tool in Adobe Photoshop to turn matching color areas transparent.

Long-press the Eraser tool in the toolbar, then choose the Magic Eraser tool.

In the Options bar, type a Tolerance value from 0 to 255:

- Lower values: remove colors close to the selected pixel.
- Higher values: remove a wider color range.

Turn on Anti-alias to soften the boundary of the erased area.

Turn on Contiguous to remove similarly colored pixels next to the selected pixel. Turn off Contiguous to remove every matching pixel on the layer.

Enable Sample All Layers to base erasing on colors from all visible layers, or leave it off to sample only the active layer.

Note

When the background layer is selected, Adobe Photoshop changes it into a regular layer before removing similar pixels.

Enter a value to set Opacity:

- 100% removes pixels fully.
- Lower values remove pixels partially and create transparency.

Drag across the image area so pixels matching the current settings are erased.

## Remove reflections

Use Reflection Removal in Adobe Photoshop on desktop to remove unwanted reflections from photos.

Reflection Removal removes unwanted reflections from photos. It is intended for large reflections that cover much of the image, such as reflections from shooting through glass or a window.

Use File > Open to pick an image and open it.

Choose the layer with the reflection.

Open the Edit menu and choose Reflection Removal.

In the Reflection Removal dialog box, choose the output and quality settings you prefer.

- Create separate reflection layer: leave this selected when you want the reflection placed on its own layer.
- Quality: choose Preview, Standard, or Best.

Note

With Create separate reflection layer selected, Photoshop adds two layers: one cleaned image layer and one reflection layer, while the original layer is left unchanged. When it is not selected, Photoshop creates one cleaned image layer and still keeps the original layer unchanged.

Select OK to apply the changes.

After Reflection Removal runs, inspect the resulting layers in the Layers panel.

Review the Layers panel to see the layers produced by Reflection Removal.
