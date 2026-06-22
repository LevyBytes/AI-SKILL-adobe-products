# Artistic Stylize Filters, Neural Filters

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Reshape and distort images with Transform Warp; Warp a Layer with Cylindrical Transform; Get precise distortions with Split Warp; Distort specific image areas with Puppet Warp; Overview of Liquify filter; Overview of distortion tools; Use Liquify to distort an image; Freeze or thaw areas; Work with meshes; Work with backdrops; Reconstruct distortions; Replace the sky in images; Select and manage sky presets; Enhance images with generative AI filters; Overview of Neural Filters; Use Neural Filters to enhance images; Neural Filter categories and output options.

## Reshape and distort images with Transform Warp

Adobe Photoshop can reshape and refine images with flexible mesh grids, control points, and adjustable warp options for precise transformation work.

Transform Warp gives you visual control for reshaping and fine-tuning image layers. You can change the mesh grid, split or move control points, and use preset or custom settings for smooth, detailed distortions.

Open Window > Layers, then choose the layer or selected area to warp in the Layers panel.

Choose Edit > Transform > Warp.

In the Options bar, choose the gear icon to open extra visual Guide settings:

- Set warp guide visibility to Auto Show Guides, Always Show Guides (default), or Never Show Guides.
- Adjust the Color and Opacity used for the visual guides.
- Use Density to define the number of lines shown between each Split Warp line. The default value is 2.

From the Warp dropdown menu in the Options bar, choose a style to use a preset.

To build a custom warp mesh, pick a grid size from the Grid dropdown in the Options bar:

- Choose a grid size - Default, 3x3, 4x4, or 5x5.
- Choose Custom and type the column and row counts in the Custom Grid Size dialog box.

Split the warp to insert grid lines:

- In the Options bar, choose a Split icon for predefined splits: Split Warp Horizontally, Split Warp Vertically, or Split Warp Crosswise.
- Choose the mesh where a grid line should be added.

Fine-tune the warp.

Use the mesh grid to adjust particular image areas and create smoother transformations.

For smoother transformation results, refine individual image regions by adjusting the mesh grid.

When the edit is complete, press Enter (Windows) or Return (macOS).

### Edit and adjust the warp

Change the mesh:

- To reshape, drag control points, a bounding-box or mesh segment, or an area inside the mesh.
- Modify curves with control point handles, similar to handles used in vector graphics.
- Choose a grid line to make its control points active, or choose an anchor point where grid lines cross to edit the nearby points.
- Move points to warp the image.

Select or clear point selections:

- Select multiple points by Shift-clicking anchor points, or hold Shift while dragging across them. Selected points are enclosed by a rectangle.
- To clear selected points, Shift-click the active anchor points or hold Shift while dragging across the active points.

Remove grid lines or points:

- When a grid line's control points are visible, press the Delete key to remove that grid line.
- After choosing an anchor point, press the Delete key to remove both the horizontal and vertical lines that pass through it.

Change warp settings:

- Use the Change Warp Orientation icon in the Options bar to switch the orientation of a warp style.
- Use the Reference Point Locator icon in the Options bar and click a square to set the reference point.
- In the Options bar, type numeric entries into Bend, H, and V. This is unavailable when the Warp dropdown is set to None or Custom.

### Customize warp guide display options

While Transform Warp is active, use the gear icon in the Options bar to open the visual guide controls.

Choose the guide visibility behavior: Auto Show Guides, Always Show Guides, or Never Show Guides.

Set the visual guides' Color and Opacity as required.

Use Density to determine how many lines are placed between each Split Warp line; the default is 2.

To show or hide the warp mesh and control points during editing, choose View > Extras.

### Work with warp control points

Choose a grid line when you need its control points active for editing that warp section.

Choose an anchor point at a grid-line intersection to edit the control points around that anchor.

With a selected grid line and visible control points, press Delete to remove the line.

To remove both horizontal and vertical grid lines that cross an anchor point, choose the anchor point and press Delete.

## Warp a Layer with Cylindrical Transform

### In Adobe Photoshop, flat artwork can be curved onto round objects by using resizing, curvature, and perspective controls.

Cylindrical Transform Warp helps with packaging design and product mock-ups because it previews how labels and artwork wrap around bottles, cans, and other cylindrical products. It also works on text layers for more stylized layouts. For realistic packaging previews, use the Cylinder warp style so artwork follows the curve of a bottle.

Choose the layer or image region that you want to warp.

Choose Edit > Transform > Warp.

In the Options bar, choose the Switch between free transform and warp modes icon.

Open the Warp dropdown menu and choose Cylinder.

Resize the full selection with the corner controls at the bottom-left and top-right. Hold Shift-key while dragging corner controls to constrain proportions.

Use the center controls to change curvature. The top-center control changes the upper and lower boundary arcs together, while the bottom-center control changes only the lower boundary arc.

Move the center control point left or right to control perspective.

Press Enter (Windows) or return (macOS) to apply the warp.

## Get precise distortions with Split Warp

Learn Split Warp refinement methods in Adobe Photoshop, including mesh splitting, Bezier handle adjustment, and anchor point behavior controls.

For Split Warp in Photoshop, use the available keyboard shortcuts and techniques to make complex distortions with precise control.

### Gestures and modifiers for Split Warp

### Warp handle conversion modes and toggles

### Anchor point defaults with multi-select

## Distort specific image areas with Puppet Warp

Use Adobe Photoshop and precision pins to reshape selected parts of an image while leaving surrounding areas unchanged.

Puppet Warp adds an adjustable mesh for anything from small edits, such as shaping hair, to larger changes, such as moving arms or legs. It supports image layers, layer masks, and vector masks. For non-destructive distortion, apply Puppet Warp to Smart Objects.

Open Window > Layers, then in the Layers panel choose the layer or mask to transform.

Choose Edit > Puppet Warp.

Configure mesh controls in the Options bar:

- Mode: sets mesh elasticity. Choose Distort for flexible warping of wide-angle images or texture maps.
- Density: controls spacing between mesh points. Additional points improve precision but can reduce performance.
- Expansion: expands or contracts the edge of the mesh.
- Show Mesh: disable it to see only pins for a cleaner preview. Press H to hide adjustment pins temporarily for a clearer view.

Place pins in the image window to transform the needed areas and hold other areas in position.

Drag pins to distort the mesh. To show mesh regions that overlap, use the Pin Depth icons in the Options bar.

Remove a pin by selecting it and pressing the Delete key, or choose Remove All Pins from the context menu to clear every pin.

For rotation around a pin:

- To rotate by fixed degrees, press Alt (Windows) or option (macOS), put the cursor near the pin, and drag once the circle appears.

- For automatic rotation according to the selected Mode, choose Auto from the Rotate dropdown in the Options bar.

Press Enter to finish the operation.

## Overview of Liquify filter

The Liquify filter in Adobe Photoshop reshapes images for retouching work and creative effects.

### What is the Liquify filter?

Liquify opens an interactive workspace for moving pixels by pushing, pulling, rotating, puckering, or bloating them; common uses include:

- Changing portrait features.
- Producing artistic distortions.
- Creating exaggerated design effects.

### Key features

- Push or warp pixels directly on the canvas with brush-based tools.
- For tighter control, set brush Size, Pressure, and Density in the Liquify panel.
- Apply the filter to a Smart Object when the edit should stay non-destructive.
- Use the Preview checkbox to switch between the original and edited appearance.

### Availability

- Supports RGB, CMYK, and Grayscale images.
- Applies to layers and Smart Objects.
- Runs faster when GPU acceleration is available.

## Overview of distortion tools

Adobe Photoshop distortion tools can reshape, stretch, and reposition image regions for creative changes or corrective edits.

Photoshop provides both correction-oriented and creative transformation tools. They can repair lens-related problems such as barrel distortion or vignetting, and they can also warp or reshape content for artistic results.

### Types of distortion tools in Photoshop

Photoshop distortion tools fall into two broad categories:

### Correction-focused distortion tools

- Lens Correction: corrects barrel distortion, pincushion distortion, chromatic aberration, and vignetting.
- Perspective Warp: changes perspective in photos of buildings, architecture, or objects.
- Adaptive Wide Angle: repairs distortion in panoramic or wide-angle photos.

### Creative distortion tools

- Liquify: reshapes chosen image areas with brush-based tools. Use push, pull, twirl, bloat, or pucker actions on parts of your image for creative effects. Face-Aware Liquify makes facial-feature adjustments easier with intuitive sliders.
- Warp: bends and stretches your image through a flexible grid. Move control points to build custom distortions and transformations.
- Puppet Warp: moves chosen image parts while other areas stay fixed. Add a mesh over the image and reposition points to produce natural-looking deformations.
- Distort and Skew: changes chosen image areas precisely. Stretch or slant parts of your content when adjusting perspective or making custom visual effects.

### Lens distortion types

- Barrel Distortion: corrects lines that bow outward from the center. Use it for the fish-eye effect often present in wide-angle shots.
- Pincushion Distortion: corrects lines that bend inward toward the image center. Use it to fix the pinched appearance found in telephoto images.
- Chromatic Aberration: removes unwanted color fringes along high-contrast edges. Accurate color-channel alignment improves image clarity.
- Vignetting: evens out brightness across the full image. Lighten dark corners for more consistent exposure throughout the photo.

## Use Liquify to distort an image

Use the Liquify filter in Adobe Photoshop to reshape imagery for either stylized distortion work or careful retouching adjustments.

### Apply distortions with the Liquify filter

Open the image, then choose the layer that should receive the distortion.

Choose Filter > Liquify from the menu bar so the Liquify dialog box opens.

Use the Brush Tool Options panel to set brush controls such as Size and Pressure.

Apply distortion by dragging across the image:

- Forward Warp: moves pixels along the path of your drag.
- Pucker: pulls pixels inward toward the brush center.
- Bloat: pushes pixels away from the brush center.
- Twirl: spins pixels clockwise or counterclockwise.

Choose OK to commit the edits to the image.

Tip

For reversible Liquify work, first change the layer into a Smart Object.

Enable the graphics processor for the best performance.

## Freeze or thaw areas

In Adobe Photoshop, the Liquify filter can shield selected image regions from distortion or make those regions editable again.

In the Layers panel, choose the layer you plan to reshape.

Choose Filter > Liquify to bring up the Liquify dialog box.

From the toolbar, choose the Freeze Mask icon.

Set brush size with the Size slider in the Brush Tool Options area.

Brush across the regions that should stay unchanged. Photoshop marks frozen regions with a red overlay.

To make frozen regions editable, choose the Thaw Mask icon from the toolbar, then brush over the overlay to remove it.

Choose OK to commit the edits and close the Liquify dialog box.

## Work with meshes

In Adobe Photoshop, meshes give distortion tools a flexible grid for accurately reshaping chosen image regions while preserving other areas.

### What are meshes in Photoshop?

Tools including Liquify, Warp, and Puppet Warp can show meshes as grid overlays on top of the image. The grid provides a visual guide for judging how pixels shift, stretch, and compress during edits.

### Benefits of using meshes

- Distortion edits are easier to judge with meshes because they provide these benefits:
- Visual feedback: monitor the way changes alter the image structure.
- Precision: keep alignment and proportions under tighter control.
- Consistency: reuse a matching distortion pattern across more than one edit.
- Progress tracking: review which regions changed and how strongly they were affected.

### Mesh options in Liquify

- In the Liquify dialog box, these mesh controls are available:
- Show Mesh: turns the mesh display on or off.
- Mesh Size: changes the grid to a finer or coarser spacing.
- Mesh Color: changes grid color so it contrasts better with the image.
- Saved meshes can be loaded later, and current meshes can be saved for repeatable results.

## Work with backdrops

In Adobe Photoshop, backdrops in the Liquify filter let distortions be compared against the original image or against other layers.

### What are backdrops?

In the Liquify filter, a backdrop places a reference image behind the layer being edited. Use that reference while working to align distortions, make accurate changes, and compare the before and after appearance.

### Backdrop options in Liquify

Open the Backdrop section in the Liquify dialog box:

- Use: chooses the source layer used as the backdrop.
- Mode: sets the blending relationship between the backdrop and current layer, such as Behind or In Front.
- Opacity: changes transparency so the reference image and current edits can be balanced visually.

### Tips for working with backdrops

- For portrait retouching, an opacity near 50% can help preserve natural proportions.
- Switch the backdrop off and on while reviewing progress.
- In multi-layer files, backdrops can help line up edits with greater accuracy.

Note

Backdrops and Show Mesh serve different purposes. Meshes show a grid for tracking distortion behavior, while backdrops supply a reference image for comparison.

## Reconstruct distortions

Use the Reconstruct tool in the Liquify filter in Adobe Photoshop to return selected distorted regions to their original look.

After applying Liquify distortions, choose the Reconstruct Tool when only certain areas should be restored or the full image should be reset. It is useful for refining face edits or reducing excessive effects without restarting.

Choose Filter > Liquify.

In the Liquify dialog, choose the Reconstruct tool from the toolbar.

In the Brush Reconstruct Options section, use one of these actions:

- Reconstruct: gradually restores the brushed regions.
- Restore All: removes every distortion from the image.

Change the brush size to define how large an area gets restored.

Choose OK to commit the edits.

## Replace the sky in images

Use Sky Replacement in Adobe Photoshop to swap skies and refine their appearance.

### Replace a sky in your image

Choose Edit > Sky Replacement.

In the Sky Replacement dialog, choose one of the preset skies or add a custom sky.

Use the sliders to fine-tune the sky and merge the foreground with the background.

- Shift edge: sets the starting boundary between the original image and the sky.
- Fade edge: controls edge feathering from the sky image into the original photo.
- Brightness: changes how bright the sky appears.
- Temperature: makes the sky temperature warmer or cooler.
- Scale: changes the size of the sky image.
- Flip: mirrors the sky image horizontally.
- Lighting mode: sets the blending mode for lighting changes.
- Foreground lighting: changes foreground contrast.
- Edge lighting: changes lighting on object edges; zero applies no adjustment.
- Color adjustment: controls how much the foreground is matched to sky colors.
- Output: chooses whether Photoshop creates new layers or a duplicate flattened layer for the result.

Additional sky adjustment tools are also available:

- Sky Move : repositions the sky inside the frame to improve composition.
- Sky Brush : brushes over regions to refine where the replacement sky appears.
- Hand : moves the view around when working at higher magnification.
- Zoom<insert icon here>: changes zoom level for more precise detail work.

Choose OK.

### Improve edge quaity in sky replacement

The improved sky replacement workflow keeps foreground-background contrast around thin objects better protected. Halo artifacts are also reduced when swapping bright skies for darker skies, or when making the opposite replacement. A new Edge Lighting Group is added to the layer stack as well; it contains adjustment layers and a refined mask that raise the overall quality of the result.

To adjust edge behavior:

Open the Sky Replacement dialog box.

Set contrast along object edges with the Edge Lighting slider. Higher settings increase contrast and help reduce halos.

## Select and manage sky presets

Manage, import, and download skies in Adobe Photoshop.

Choose Edit > Sky Replacement > Sky Preset.

Choose the Setting icon, then use the Sky Preset menu to configure these options:

- Import Images: builds one or more sky presets from your own sky images. Multiple images can be imported together as new presets.
- Import Presets: uses one or more .sky files to add saved sky presets.
- Download Free Skies: opens Adobe Discover for browsing and downloading more free sky images or sky presets.

- Create New Sky Group: makes a new preset group for sky use cases you work with often.
- Rename Sky: changes the selected sky name in the list.
- Delete Sky: removes one or more skies from the list.
- Show Recents: shows recently used skies in the list.
- Append Default Skies: restores the default skies to the sky preset list.
- Export Selected Skies: writes selected sky presets to a .sky file on your machine.

### Import downloaded skies

Once a .sky file has been downloaded, bring it into Sky Replacement using any of these methods:

- Import manually from the sky preset menu (Mac/Win).
- Drop .sky files onto the Photoshop canvas while Sky Replacement is closed (Mac/Win).
- Drop .sky files onto the blank title bar area (Mac only).

## Enhance images with generative AI filters

Use Adobe Photoshop with Topaz Labs generative AI filters to sharpen images and reduce noise with precise control.

### AI Sharpen

AI Sharpen can bring back detail and sharpness while cutting down blur and shake.

AI Sharpen requires premium access and runs on a Topaz Labs partner AI model. Credits are charged according to the final megapixel count:

- Up to 25 MP = 10 credits
- 25-56 MP = 20 credits

Review how many generative credits are included in your plan.

Choose File > Open to browse for and choose a file (up to 56 MP; larger files are not supported).

Choose Filter > AI Sharpen.

In the AI Sharpen dialog, choose Sharpen to apply the effect.

Note

Photoshop updates the current/selected layer, and it does not create a new layer.

To reverse the change, use the History panel or choose Command + Z (macOS) and Ctrl + Z (Windows).

### AI Denoise

AI Denoise can reduce noise in low-light photos while restoring detail.

AI Denoise requires premium access and runs on a Topaz Labs partner AI model. Credits are charged according to the final megapixel count:

- Up to 25 MP = 10 credits
- 25-56 MP = 20 credits

Review how many generative credits are included in your plan.

Choose File > Open to browse for and choose a file (up to 56 MP; larger files are not supported).

Choose Filter > AI Denoise.

In the AI Denoise dialog, choose Denoise to apply the effect.

Note

Photoshop updates the current/selected layer, and it does not create a new layer.

To reverse the change, use the History panel or choose Command + Z (macOS) and Ctrl + Z (Windows).

## Overview of Neural Filters

See how Neural Filters in Adobe Photoshop use Adobe Sensei AI for image colorization, portrait edits, depth adjustments, and other creative image effects.

### What are Neural Filters?

Inside Photoshop, Neural Filters use machine learning as AI-powered tools for both creative and corrective image effects. Their own workspace presents a filter library for retouching, enhancing, and transforming images with only a few actions.

Use them to test looks, repair photos, or preview developing technology while leaving the source image unchanged.

### Neural Filter categories

Photoshop groups Neural Filters by three development states:

- Featured: filters that have shipped and are suitable for routine work.
- Beta: filters still being built; try them and send feedback.
- Wait list: preview entries intended for a later release.

### Why use Neural Filters

- Retouch portraits by changing expression, age, or gaze.
- Make artistic or stylistic edits, including colorization or style transfer.
- Improve depth or atmosphere using blur and lighting controls.
- Try experimental filters and preview upcoming technology.

## Use Neural Filters to enhance images

Open, download, apply, and tune Neural Filters in Adobe Photoshop, then choose how Photoshop outputs the edits.

Photoshop uses Adobe Sensei's machine learning technology in Neural Filters to reduce the effort required for complex edits. These non-destructive, generative filters can enhance portraits quickly, colorize black and white photos, remove JPEG artifacts, and add artistic styles.

From the menu bar, select Filter > Neural Filters.

In the Neural Filters panel, review the available filters in the All filters tab.

Note

- Beta filters are experimental, so output can differ from one image to another.
- Some filters need an internet connection to process the result.

Enable the filter with its toggle.

Use the available sliders and settings to tailor the effect.

Use Output <author note: to interlink article on output options> to choose the option you want:

- New layer
- New layer masked
- Smart filter
- New document

Select OK to run the processing and apply the filter.

## Neural Filter categories and output options

Review the Neural Filter types in Adobe Photoshop and see how each output choice changes where edits land.

### Output options

Output

What it does

Current layer

Writes the Neural Filter onto the active layer itself, replacing pixels there.

New layer

Builds a duplicate layer and applies the filter separately from the original.

New layer masked

Copies the layer and adds a mask that isolates the filter result for simpler masking and blending.

Smart filter

Turns the layer into a Smart Object, then attaches the filter non-destructively as a Smart Filter.

New document

Creates a separate Photoshop document that contains only the filtered result.

| --- | --- |

### When to use each option

- Current layer: use this when preserving original pixels or a non-destructive workflow is unnecessary.
- Smart filter: choose it for non-destructive work where settings should remain adjustable.
- New layer masked: use it when you need manual blending control or detailed masking.
- New document: choose it when the filtered result should become the starting point for another file.
- New layer: use it for straightforward edits while leaving the original layer in place.
