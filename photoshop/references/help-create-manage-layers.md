# Get Started Layers, Transform Manipulate Layers

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create and manage layers; Layers overview; Organize layers with layer groups; Work with the Layers panel; Video Layers overview; Convert background and regular layers; Duplicate layers; Create document from layer or group; Change transparency preferences; Sample from all visible layers; Select layers; Group and ungroup layers; Link and unlink layers; Display layer edges and handles; Clean up image layers.

## Create and manage layers

### Get started with layers

Layers overview

Organize layers with layer groups

Work with the Layers panel

Video Layers overview

Convert background and regular layers

Duplicate layers

Create document from layer or group

Change transparency preferences

Sample from all visible layers

### Transform and manipulate layers

Select layers

Group and ungroup layers

Link and unlink layers

Display layer edges and handles

Clean up image layers

### Color adjustment and fill layers

Adjustment and fill layers overview

Work with adjustment layers

Use layer masks to target adjustment or fill layers

Create adjustment layers

Merging adjustment or fill layers

Adjustment presets overview

Create custom presets

Correct color balance with Color and vibrance

Create fill layers

Adjustment layer options

Change adjustment and fill layer options

Adjust contrast with Clarity and Dehaze

Adjust texture with Grain

### Apply layer effects

Add layer styles

Work with preset styles

Layer style effects and options overview

Manage preset styles

Display or hide layer styles

Copy and paste layer styles

Import preset style libraries

Manage contours

Set a global lighting angle for all layers

Scale layer effects

Remove layer effects

Work with layer styles

Convert layer styles to image layers

### Smart objects

Smart Objects - overview and benefits

Create embedded Smart Objects

Create linked Smart Objects

Update Linked Smart Objects

View Linked Smart Object properties

Embed Linked Smart Objects

Package and locate linked Smart Objects

Convert embedded Smart Objects to linked

Filter the Layers panel by Smart Objects

Duplicate an embedded Smart Object

Edit the contents of a Smart Object

Replace the contents of a Smart Object

Convert Smart Objects to layers

Rasterize Smart Objects

Export the contents of an embedded Smart Object

Reset Smart Object transforms

### Create layer compositions

Align layers

Auto-align image layers

Distribute layers

### Layout and design tools

Get started with artboards

Artboard properties and behaviors

Create artboard documents

Add artboards to the current document

Draw frames

Convert shapes or text to frames

Place an image into a frame

Select a frame and its content

Add a stroke to a frame

## Layers overview

Layers divide an image into separate components, which makes complex compositions easier to edit, arrange, and design.

### What are layers in Adobe Photoshop?

Think of layers as clear sheets placed in a stack, where each sheet contains a separate piece of the image. Together they form the final picture, while any one sheet can be edited without changing the rest.

That separation lets you try ideas, revise the work, and refine the image while preserving the original.

### Types of layers

Photoshop includes several layer types, and each type is used for a different purpose:

## Organize layers with layer groups

Group related layers so an Adobe Photoshop document stays organized and easier to manage.

Layer groups can also carry masks or adjustments across multiple layers at once, which supports non-destructive changes for more than one element.

In the Layers panel, select the layers that belong in the group.

Use Layer > New > Group from Layers.

When the dialog box appears, enter a group name and select OK.

In the Layers panel, select the arrow beside the group folder to expand or collapse the group.

For additional layers, drag each one onto the group folder in the Layers panel.

Select the group folder, then choose Layer > Ungroup Layers to ungroup layers.

## Work with the Layers panel

Use the Layers panel in Adobe Photoshop to access, organize, and manage layers for efficient editing and document organization.

The Layers panel shows every layer in the document visually, so you can select, hide, reorder, and modify layers while leaving other elements unchanged.

Open the panel with Window > Layers.

Use the eye icon beside a layer thumbnail to show or hide that layer.

Move a layer by dragging it higher or lower in the Layers panel.

For renaming, double-click the layer name, enter a new name, and finish with Enter (Windows) or Return (macOS).

Create a new layer by selecting the Create a new layer icon in the Layers panel.

## Video Layers overview

Video Layers bring video playback, editing, and animation into Adobe Photoshop, combining motion content with still-image workflows.

Use Video Layers to handle moving imagery in much the same way as still images. You can apply adjustment layers, masks, filters, or paint on single frames. They support adding motion content to designs and building frame-by-frame animations.

### How video layers work

- Video Layers are listed in the Layers panel in the same place as ordinary layers.
- You can work on separate frames within a video layer, which gives frame-level control over motion timing and effects.
- Adjustment Layer changes apply across the full video sequence while leaving the original video intact.
- Use Masks and Filters on video layers when you need animated or changing visual treatments.
- Combine video with still images, graphics, and text to build layered motion compositions.

### Types of video layers

Video Layer: runs video content and lets you move through frames, paint frame by frame, and add an Adjustment Layer or a Filter.

Adjustment Layer: adds color or tonal edits to every frame without destructively changing the video.

Blank Video Layer: starts with an empty timeline for hand-drawn or frame-by-frame animation, so each frame can be controlled directly.

## Convert background and regular layers

In Adobe Photoshop, convert a background into a regular layer or change a regular layer back into the background.

### Convert the background to a regular layer

In the Layers panel, choose the Background layer.

From the menu, choose Layer > New > Layer From Background.

When the dialog box appears, optionally give the layer a name, then choose OK to finish converting it.

### Convert the regular layer to the background

In the Layers panel, choose the layer that should become the background.

Choose Layer > New > Background From Layer.

## Duplicate layers

Create extra copies of an Adobe Photoshop layer when you want to reuse or adapt existing content instead of rebuilding it.

In the Layers panel, choose the layer or layer group you plan to copy.

From the context menu, choose Layer > Duplicate Layer.

In the dialog box, type a duplicate-layer name, choose a destination document when necessary, and choose OK.

## Create document from layer or group

Turn an Adobe Photoshop layer or group into its own document when you need isolated editing or reusable material.

In the Layers panel, choose the layer or group that should become a separate document.

For a single layer, choose Layer > Duplicate Layer; for a group, choose Layer > Duplicate Group.

In the dialog box, open the Document dropdown menu and choose New.

Choose OK to generate the new document.

Note

If you need only the current selection copied to a new layer before duplicating, choose Layer > New > Layer Via Copy.

## Change transparency preferences

Adjust how transparent areas appear in Adobe Photoshop by changing the checkerboard display preferences.

On macOS, choose Photoshop > Preferences > Transparency & Gamut. On Windows, choose Edit > Preferences > Transparency & Gamut. The Preferences dialog lands on the Transparency Settings section.

Use Grid Size and Grid Colors to change the checkerboard pattern that represents transparent areas.

Tip

Different grid colors can make transparent regions easier to tell apart from nearby image content with similar tones.

Choose OK to save the preference changes.

## Sample from all visible layers

Sampling all visible layers can expand what tools such as Clone Stamp and Healing Brush can use while you edit.

### What is multi-layer sampling?

With multi-layer sampling, Photoshop reads pixel information from every visible layer together instead of limiting the sample to one layer. That makes retouching or color correction more flexible in layered, complex files. It also lets edits draw from the full image while the individual layers stay editable and non-destructive.

Use this option for:

- Matching color across several adjustment and image layers with the Eyedropper tool.
- Blending repairs into the whole composition while using the Healing Brush tool or Clone Stamp tool.

Note

In supported tools, choose All Layers from the Sample dropdown when you want more control over the colors and textures used as the source, which can help corrections blend more naturally.

## Select layers

Select Photoshop layers when you need to edit, move, or transform them.

Photoshop supports both single-layer and multi-layer selections, depending on what the edit requires. Operations such as painting or tonal correction affect only the active layer, but movement, alignment, and transformation can apply to several layers together. Layers can be chosen in the Layers panel or by clicking content in the document window. Linked layers behave differently from selected layers because the link remains in place after the current selection changes.

### Select layers in the Layers panel

Open the Layers panel.

Use one of these methods:

- To select a single layer: Choose the layer in the Layers panel.
- To select multiple contiguous layers: Choose the first layer, then Shift+select the final layer in the range.
- For multiple non-contiguous layers: In the panel, Ctrl+select (Windows) or Command+select (macOS) each desired layer.
- To select all layers: Choose Select > All Layers.
- To select similar layers (for example, all type layers): Choose an example layer, then choose Select > Similar Layers.
- To deselect a layer: Use Ctrl+select (Windows) or Command+select (macOS) on that layer.
- To deselect all layers: Choose Select > Deselect Layers, or click below the lowest layer in the panel.

Note

During selection, use Ctrl+select (Windows) or Command+select (macOS) outside the layer thumbnail. Clicking the thumbnail itself selects that layer's non-transparent pixels.

### Select layers in the document window

Choose the Move tool.

Use one of these methods:

- In the Options bar, enable Auto Select > Layer, then click the content in the document. Photoshop selects the uppermost layer that has pixels beneath the cursor.
- In the Options bar, enable Auto Select > Group, then click the content in the document. Photoshop selects the uppermost group that has pixels beneath the cursor. Clicking an ungrouped layer selects that layer.
- In the image, Right-click (Windows) or Control+click (macOS), then choose a layer from the context menu.

### Select a layer in a group

In the Layers panel, choose the group.

Choose the drop-down triangle to open the group.

Choose the tiny triangle to open the group.

Choose the tiny triangle to open the group.

Choose the layer inside the group.

## Group and ungroup layers

Use groups in Photoshop to organize layers and keep the Layers panel easier to manage.

Select multiple layers in the Layers panel.

Use one of these methods:

- Choose Layer > Group Layers.
- Alt-drag (Windows) or Option-drag (macOS) the layers onto the folder icon at the bottom of the Layers panel.

To separate grouped layers again, choose the group and then choose Layer > Ungroup Layers.

### Add layers to a group

Use one of these methods:

- Choose the group in the Layers panel, then choose the Create a New Layer button.
- Drag a layer onto the group folder.
- Move a group folder onto another group folder. The nested group travels with every layer it contains.
- Drag an existing group onto the New Group button.

## Link and unlink layers

Link or unlink layers in Photoshop when you need the Layers panel to stay organized.

Two or more layers or groups can be linked. Linked layers keep their connection until you unlink them, unlike layers that are merely selected together. Movement and transformations can be applied to linked layers.

In the Layers panel, choose the layers or groups.

Choose Link layers in the Layers panel.

To remove or change layer links, use one of these methods:

- Choose a linked layer, then choose Link layers.
- To temporarily turn off the linked layer, Shift-click the Link layers icon for that linked layer. A red X appears. Shift-click the link icon when you want to enable the link again.
- Choose the linked layers, then choose Link layers. To choose every linked layer, choose one layer and then choose Layer > Select Linked Layers.

## Display layer edges and handles

Display layer edges and transform handles in Photoshop when you need to align, resize, or rotate layer content more easily.

Showing layer-content edges or boundaries can help with alignment, while transform handles provide the controls for resizing or rotating layers.

### Show layer edges

Choose View > Show > Layer Edges.

### Show transform handles

Activate the Move tool.

On the Options bar, enable Show Transform Controls.

Note

After that, use the transform handles to rotate the layer content or change its size.

## Clean up image layers

Layer Cleanup in Adobe Photoshop on desktop can remove empty image layers automatically and rename layers from their contents.

Use File > Open to choose and load an image.

In the Layers panel, choose the Layer Cleanup icon.

When the Layer Cleanup dialog box appears, choose one of these options:

- Delete empty layers: Photoshop deletes blank pixel layers and blank text layers in the document.
- Rename layers: Photoshop creates descriptive layer names by reading what each layer contains.

Choose how broadly the cleanup should run:

- Entire document: Photoshop processes every layer.
- Selected layers: Photoshop processes just the layers currently selected.

Choose Apply.

Layer Cleanup in Photoshop can automatically delete empty layers and rename layers.

Layer Cleanup in Photoshop can automatically delete empty layers and rename layers.

### Delete

Use File > Open to choose and load an image.

In the Layers panel, choose the Layer Cleanup icon.

Inside the Layer Cleanup dialog box, choose Delete empty layers.

Choose the scope, then choose Apply.

Note

When no layers get deleted, the document might not include any empty layers.

### Rename

Use File > Open to choose and load an image.

In the Layers panel, choose the Layer Cleanup icon.

Inside the Layer Cleanup dialog box, choose Rename layers.

Choose the scope, then choose Apply.
