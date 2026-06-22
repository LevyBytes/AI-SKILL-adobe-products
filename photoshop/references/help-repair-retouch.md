# Remove Objects Fill Space, Heal Clone, Adjust Light Tone

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Repair and retouch; Remove background in your images; Replace background with Generate Background; Retouch tools overview; Blend objects and people into any background with Harmonize; Remove objects and fill the area with Content-Aware Fill; Adjust Content-Aware Fill settings; Tools to fine-tune sampling and fill areas; Apply or cancel Content-Aware fill changes; View full-resolution preview in the Preview panel; Remove objects from within the Contextual Task Bar; Remove tool known issues and workarounds; Remove tool minimum and recommended hardware requirements; Remove objects; Remove wires, people, and general distractions; Review and refine general distractions; Clone Source panel; Retouch images with the Clone Stamp tool.

## Repair and retouch

### Remove objects and fill space

Remove background in your images

Replace background with Generate Background

Retouch tools overview

Blend objects and people into any background with Harmonize

Remove objects and fill the area with Content-Aware Fill

Adjust Content-Aware Fill settings

Tools to fine-tune sampling and fill areas

Apply or cancel Content-Aware fill changes

View full-resolution preview in the Preview panel

Remove objects from within the Contextual Task Bar

Remove tool known issues and workarounds

Remove tool minimum and recommended hardware requirements

Remove objects

Remove wires, people, and general distractions

Review and refine general distractions

### Heal and clone

Clone Source panel

Retouch images with the Clone Stamp tool

Set sample sources for cloning and healing

Adjust the sample source overlay options

Scale or rotate the sample source

### Adjust light and tone

Blending mode descriptions

Dodge or burn image areas

Darken the edges of your image to bring focus to the center

### Clean and restore images

Enhance image quality with Generative Upscale

Define planes to adjust perspective

Manipulate the planes to adjust perspective

Edit different perspectives in the same image

Keyboard shortcuts to adjust perspective

Get started with Photomerge

Create panoramic images with Photomerge

Create 360-degree panoramas

Remove imperfections with the Spot Healing Brush

Retouch a large area with the Healing Brush tool

Repair an area with the Patch tool

Remove red eye in flash photos

Define an image as a preset pattern

Erase parts of an image with the Eraser tool

Auto Erase with the Pencil tool

Create smoother brush strokes using stroke smoothing

Change pixels to transparent with the Background Eraser tool

Remove similar pixels with the Magic Eraser tool

Remove reflections

## Remove background in your images

Remove an image background quickly in Adobe Photoshop by using Quick Actions.

In the Layers panel, select the image layer.

Confirm that the subject layer is active and unlocked.

Open the Discover panel by selecting the workspace search icon or Help > Photoshop Help from the menu bar.

In the Discover panel, select Browse > Quick Actions, then select Remove Background.

Photoshop separates the subject and leaves either a transparent background or a masked layer for compositing or export.

To run the action on another layer, select that layer in the Layers panel, then select Refresh in the Discover panel.

If you need to undo the result, select Revert in the Discover panel.

Tip

High-contrast images generally produce cleaner results. When Remove Background is imperfect, refine the layer mask manually with the Brush tool.

## Replace background with Generate Background

Use text prompts in Adobe Photoshop to build custom backgrounds for images or designs.

Generate background replaces an image background with generated content matched to the subject's lighting, shadows, and perspective.

Another option is to import an image from your device as the new background, or use the color fill option for a color-based background.

The latest Adobe Firefly Image Model now powers Generate background. The update improves photorealistic quality, interprets complex prompts more effectively, and offers more variation so you can explore additional directions.

Open the image whose background you want to replace.

In the Contextual Task Bar (Window > Contextual Task Bar), choose Remove background.

Next, choose Generate background in the Contextual Task Bar; add a descriptive text prompt or leave the text prompt box empty.

To make a color-based replacement, choose the color fill icon.

Use Import background to bring in another image from your device and set it as the background.

Select Generate, then choose among the variations shown in the Properties panel.

To create more variations, revise the text prompt and select Generate in the Properties panel.

## Retouch tools overview

Review the navigation and measuring tools that Adobe Photoshop provides.

## Blend objects and people into any background with Harmonize

Use Harmonize in Adobe Photoshop on desktop to blend objects and people into any background.

Harmonize, powered by Adobe Firefly, matches a subject's color, lighting, shadows, and tone to the surrounding scene. To make composites look natural, Harmonize adjusts the subject automatically so manual color and lighting corrections are not required.

Before you begin:

Confirm that the subject is on a pixel layer, because Harmonize works with pixel layers only and not with Smart Objects, text, or adjustment layers.

Open the background image with File > Open.

Use File > Place Embedded to put the subject on a new layer above the background.

Tip

- Use Remove Background from the Contextual Task Bar to clear the subject's original background.
- Move and scale the object until it fits the background.

Choose Harmonize in the Contextual Task Bar, then pick the variation that blends most naturally with the background.

## Remove objects and fill the area with Content-Aware Fill

Remove objects in Adobe Photoshop and fill the empty area with nearby image pixels.

Create a selection around the object with a selection tool such as Object Selection tool, Quick Selection tool, or Magic Wand tool.

Inside the selection, right-click and choose Content-Aware Fill.

In the Content-Aware Fill workspace, change the sampling area to direct which pixels are used for the fill.

Select OK to replace the selected object with surrounding pixels.

## Adjust Content-Aware Fill settings

Review the Adobe Photoshop settings available in the Content-Aware Fill panel, including the sampling area overlay, fill options, and output controls.

Several controls in the Content-Aware Fill panel let Photoshop refine source-pixel sampling and fill application. You can set the sampling area, change how the fill behaves, and choose the output method for the result.

### Fill settings

Use the reset icon to return every fill setting to its default value.

## Tools to fine-tune sampling and fill areas

In Adobe Photoshop, refine sampling and selection areas in the Content-Aware Fill workspace with the Sampling Brush, Lasso, and navigation tools.

Within the Content-Aware Fill workspace, you can choose which image regions contribute to filling a selection. Use the Sampling Brush tool to add or remove sampled areas, use refinement tools to adjust the selection, and move through the view with the Hand and Zoom tools.

### Sampling Brush Tool

The Sampling Brush tool determines which image areas are included in, or left out of, the fill.

- Add to overlay area ICON mode from the Options bar adds brushed regions to the overlay used for sampling.
- Subtract from overlay area ICON mode from the Options bar takes brushed regions out of the overlay.
- Alt (Windows) or Option (macOS) switches temporarily between Add and Subtract while you brush.
- Brush Size is also available in the Options bar.

### Selection refinement tools

Use the Lasso tool and Polygonal Lasso tool to refine the original fill area.

- Press E to cycle through the selection modes, Add or Subtract.
- Expand and Contract in the Options bar change the selection by a specified pixel amount.
- Reset ICON in the Options bar brings back the original selection.

Note

Changing the selection resets the sampling area, while earlier brush strokes stay applied. After you commit the fill by selecting OK, the document selection updates as well.

### Navigation tools

Navigation tools control the document view and the Preview panel view.

- The Hand tool pans around the image. While another tool is active, hold the Spacebar to switch temporarily to the Hand tool.
- The Zoom tool increases or decreases the image view. You can also change magnification with the zoom slider in the Preview panel or by typing a percentage value.

## Apply or cancel Content-Aware fill changes

Apply, cancel, or reset image changes made with Content-Aware Fill in Adobe Photoshop.

Select the object you want removed. Selection choices include Object Selection tool, Quick Selection tool, and Magic Wand tool.

Right-click within the selection and choose Content-Aware Fill to open the Content-Aware Fill workspace.

In the Content-Aware Fill panel, select Apply to commit a fill while leaving the workspace open.

For another fill, select the Lasso tool or the Polygonal Lasso tool in the toolbar and create a new selection.

In the Content-Aware Fill panel, select OK to commit the fill and close the workspace.

Note

Enter (Windows) or Return (macOS) can also be pressed.

In the Content-Aware Fill panel, select Cancel to discard the fill and close the workspace.

Note

Esc can also be pressed.

At the bottom of the Content-Aware Fill panel, select Reset to restore all fill settings.

## View full-resolution preview in the Preview panel

Use zooming and panning in the Preview panel to inspect full-resolution previews in Adobe Photoshop.

Select the object you want removed. Selection choices include Object Selection tool, Quick Selection tool, and Magic Wand tool.

Right-click within the selection and choose Content-Aware Fill to open the Content-Aware Fill workspace.

In the Content-Aware Fill workspace, use the Preview panel zoom slider to change magnification.

Click the zoom value box in the Preview panel, then enter a value from 9% through 3200%. Higher percentages produce stronger magnification.

Choose the Zoom tool in the toolbar, then click an area on the image to change magnification directly on the image.

Choose the Hand tool, then click the image and drag in any direction to pan around the preview image.

Tip

While another tool is active, pressing H can temporarily switch to the Hand tool.

## Remove objects from within the Contextual Task Bar

Use the Remove button in the Contextual Task Bar in Adobe Photoshop to quickly clear unwanted objects from images.

Use File > Open to browse for an image and select it.

In the Tools panel, select Lasso tool and draw a selection around the area to remove.

Choose Remove from the Contextual Task Bar.

Use the Remove button from the Contextual Task Bar to remove selected objects from the image quickly.

Choose the Remove button from the Contextual Task Bar to quickly clear selected objects from the image.

## Remove tool known issues and workarounds

Review known issues for the Remove tool in Adobe Photoshop, along with recommended workarounds for stable use.

## Remove tool minimum and recommended hardware requirements

Check the hardware and OS requirements needed to use the Remove tool effectively in Adobe Photoshop.

## Remove objects

Use the Remove tool in Adobe Photoshop on desktop to quickly clear unwanted objects and distractions from images.

Use File > Open to browse for an image and select it.

In the Tools panel, select Remove tool.

In the Options bar, make the brush slightly larger than the area you plan to remove.

Draw a loop around the area you want removed.

### Choose how generative AI is used

Control how generative AI is applied by using the Mode option in the Options bar.

- Auto (May use generative AI): Photoshop chooses the processing method it determines is best.
- Generative AI is on: Applies generative AI to the edit. Cloud or on-device processing can be selected.
- Generative AI is off: Leaves generative AI unused for the edit.

### Use the generative AI on-device model in Photoshop

When generative AI is enabled, select where processing occurs.

- Cloud: Uses processing in the cloud.
- Device: Processes locally on your device.

Once downloaded, the Remove tool's on-device model performs its work locally on your device.

To use on-device processing, select Device from the Mode option in the Options bar. The first on-device run may take more time. If the requirements are not met by your system, Device will not be available. Make sure your hardware satisfies the requirements for the Remove tool.

## Remove wires, people, and general distractions

Use the Remove tool in Adobe Photoshop on desktop to clear unwanted wires, people, and other distractions from photos.

### Remove unwanted wires

Choose File > Open, then select an image to open.

From the Tools panel, select Remove tool, then choose Find distractions from the Options bar.

Select Wires and cables, then wait while Photoshop automatically removes the wires.

### Remove people

Choose File > Open, then pick the image you want to load.

Activate the Remove tool from the Tools panel, then use Find distractions in the Options bar.

Choose People and let Photoshop detect the people in the image.

Inspect the detected regions and refine them as needed.

Use the checkmark icon to apply the edit.

Note

Enable Sample All Layers when the sample should come from every visible layer; Photoshop still applies the edit only to the active layer.

### Remove general distractions

Choose File > Open, then pick the image you want to load.

Activate the Remove tool from the Tools panel, then use Find distractions in the Options bar.

Choose General distractions and wait for Photoshop to identify distractions.

Tip

Brush directly on the canvas to review and refine the detected areas.

Use the checkmark icon to apply the edit.

## Review and refine general distractions

Use the Remove tool in Adobe Photoshop on desktop to inspect and refine general distractions that Photoshop has detected.

Choose File > Open, then browse to and open an image.

Activate the Remove tool from the Tools panel.

From the Options bar, choose Find Distractions > General Distractions.

Select Find; Photoshop marks detected distractions with a color-coded overlay.

Note

- Brush on the canvas to add areas to the selection or remove them, and use the gear menu to raise the overlay opacity.
- Enable or disable individual general distraction categories, or switch all categories on or off, to control which object types Photoshop targets for removal.

Use the checkmark icon to remove the targeted distractions.

## Clone Source panel

The Clone Source panel supports precise cloning in Adobe Photoshop by letting you manage several sample sources while scaling, rotating, and aligning the sampled content.

### Overview of the Clone Source panel

When you use the Clone Stamp or Healing Brush tool, the Clone Source panel controls the behavior of the sampled pixels. Use it to scale, rotate, align, and preview the sample overlay so cloning can be placed accurately. Up to five sources can be stored and switched without taking a new sample each time.

Benefits of using the Clone Source panel

For retouching work, the panel adds finer control and faster source management. It is particularly useful for mirrored edits, repeated patterns, and layered compositions with more complicated structure.

### Key capabilities of the Clone Source panel

- Multiple sources: stores as many as five sample sources so you can switch among them as needed.
- Transform tools: resize, rotate, or flip the sample so it matches the destination area more closely.
- Overlay preview: displays a live overlay that helps position content before you apply it.
- Sampling behavior: controls whether sampling begins again or continues from the most recent point.
- Layer sampling control: lets the sample come from the current layer, all layers, or visible layers.

Tip

For video or animation-frame cloning, the Clone Source panel can sample from separate frames or even other documents.

## Retouch images with the Clone Stamp tool

Use the Clone Stamp tool in Adobe Photoshop to copy pixels from one part of an image onto another area.

Choose the Clone Stamp tool from the toolbar.

In the Options bar, configure:

Mode: sets how copied pixels combine with the target; for example, Normal replaces pixels completely, Multiply darkens, and Lighten replaces only darker pixels.

Opacity: controls how transparent the cloned pixels are. Smaller values make retouching less obvious.

Flow: sets how quickly paint accumulates, which supports smoother gradual blending.

Choose the alignment and sampling options:

- Select Aligned to continue painting from the latest sampling point.
- Deselect Aligned to return to the original point whenever you start again.
  - Current Layer: clones only from the active layer.
  - Current & Below: clones from the active layer and the layers beneath it.
  - All Layers: clones from all visible layers.

Alt-click (Windows) or Option-click (macOS) in the image to define the source point.

Note

Adjustment layers do not support the Clone Stamp tool.

Drag across the target area to paint in the cloned pixels.

## Set sample sources for cloning and healing

Set up and change between multiple sample sources for the Clone Stamp or Healing Brush tools in Adobe Photoshop.

Adobe Photoshop can clone or heal more precisely by sampling pixels from several sources. Those sources may be in the same document, another open document, or different video or animation frames. Until the document is closed, the Clone Source panel keeps up to five sources available.

Note

For video or animation material, choose the sample frame in the Timeline panel by positioning the current-time indicator there.

With the Clone Stamp tool or Healing Brush tool active, define the sample by Alt-clicking (Windows) or Option-clicking (macOS) the desired area in any open document.

If the panel is hidden, choose Window > Clone Source.

To add another sampling point, open the Clone Source panel, choose a different Clone Source icon, and repeat the sampling step.

Tip

After selecting a Clone Source button, sample again to update that button.

Paint across the target area to clone the pixels. To move between sampling sources, choose the matching button in the Clone Source panel.

## Adjust the sample source overlay options

Customize overlay behavior in Adobe Photoshop while cloning or healing with the Clone Stamp tool or Healing Brush tool.

Choose either the Clone Stamp tool or the Healing Brush tool.

Define the sample source by Alt-clicking (Windows) or Option-clicking (macOS) in the image.

Choose Window > Clone Source to open the panel.

Enable Show Overlay in the Clone Source panel so the sampled source appears over the image.

Configure the overlay options:

- Auto Hide - hides the overlay while you paint.
- Clipped - limits the overlay to the brush size.
- Opacity - accepts a percentage for the overlay transparency.
- Blending mode - choose Normal, Darken, Lighten, or Difference to change how the overlay combines with the image.
- Invert - reverses overlay colors so they stand apart from the image.

Tip

For simpler alignment, set Opacity to 50%, enable Invert, and turn off Clipped. Correctly aligned matching areas show as gray.

## Scale or rotate the sample source

In Adobe Photoshop, use these controls to resize or rotate a source for Clone Stamp tool or Healing Brush tool work.

Choose either the Clone Stamp tool or the Healing Brush tool.

Define the sample source by Alt-clicking (Windows) or Option-clicking (macOS) in the image.

Choose Window > Clone Source to open the panel.

In the Clone Source panel, select one of the five clone sources.

Select up to five clone sources

Select up to five clone sources

Set W (width) or H (height) by typing a value, or use the sliders. Deselect Maintain aspect ratio (ICON) to change width independently from height.

Type a value in the Angle box to rotate the sample.

Use the Reset transform icon to return to the original scale and angle.

## Blending mode descriptions

See how Adobe Photoshop blending modes change images when painting and editing tools are used.

Blending modes control how pixels are changed by painting tools, editing tools, or multiple layers. Knowing the modes makes it easier to create specific effects and address targeted editing problems.

### Normal group

This group replaces pixels or mixes them randomly, without relying on more involved calculations.

### Darken group

This group produces darker output by retaining shadows, midtones, or dark colors from the base color or blend color.

### Lighten group

This group produces lighter output by retaining highlights, midtones, or light colors from the base color or blend color.

### Contrast group

This group raises contrast by darkening regions below 50% gray and lightening regions above 50% gray.

### Comparative group

This group bases its results on color comparison or inversion between layers.

### HSL group

This group changes particular HSL (Hue, Saturation, Luminosity) components in colors.

### Blending modes availability

Some tools and color modes do not provide every blending mode:

- For 32-bit images, the available blending modes are Normal, Dissolve, Darken, Multiply, Lighten, Linear Dodge (Add), Difference, Hue, Saturation, Color, and Luminosity.
- Behind mode appears only for the Brush tool on layers where Lock Transparency is not enabled.
- Clear mode appears only for the shape tools with fill region selected, Paint Bucket tool, Brush tool, Pencil tool, Fill command, and Stroke command on layers where Lock Transparency is not enabled.

## Dodge or burn image areas

Use the Dodge and Burn tools in Adobe Photoshop to adjust exposure selectively in chosen image areas without changing the whole image.

Choose the Dodge tool or Burn tool from the toolbar.

In the Options bar, choose a Brush Preset and adjust Size, Hardness, and other brush settings.

In the Range menu, choose the area to modify:

- Midtones - changes mid-range grays.
- Shadows - changes darker areas.
- Highlights - changes lighter areas.

In the Exposure field, enter a percentage that sets the strength of the effect.

Choose Airbrush in the Options bar for a gradual effect.

Enable the Protect Tones checkbox so color is preserved and clipping is avoided in highlights and shadows.

Paint the image area to apply the Dodge or Burn effect.

## Darken the edges of your image to bring focus to the center

Use a quick action in Adobe Photoshop to add a vignette that draws attention toward the center of an image.

Photoshop can apply a vignette effect that gently darkens image edges and strengthens focus near the center. The built-in quick action gives a fast starting point, with additional controls available afterward for refinement.

In the upper-right corner of the Photoshop interface, select the Search icon.

Under Browse in the discover panel, select Quick Actions, then scroll to Add a vignette.

Select Apply. The vignette darkens the edges and adds soft focus to the center of the image.

Tip

To place the effect on another layer, select that layer, then select Refresh in the Discover panel.

Choose Filter > Camera Raw Filter to adjust Exposure, Contrast, Highlights, and other settings.

Select Revert to remove the applied vignette.
