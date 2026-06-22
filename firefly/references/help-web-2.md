# Edit Images, Generate Vectors

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Edit images; Edit images using text prompts; Use Generative Fill; Use Generative Remove; Expand images; Upscale images; Edit images with AI Markup; Edit images with Precision Flow (beta); Generate vectors; Generate vectors using text prompts; Generate vectors using partner models.

## Edit images

### Edit an image

Edit images using text prompts

Use Generative Fill

Use Generative Remove

Expand images

Upscale images

Edit images with AI Markup

Edit images with Precision Flow (beta)

## Edit images using text prompts

### Use Firefly image editor to add, remove, or reshape image content and backgrounds from text prompts.

With Edit an image, plain-language prompts can drive quick changes to an existing picture. Describe the object, background, or visual adjustment you need, and Firefly applies the change while keeping the result visually coherent.

From the Firefly homepage, choose Create in the left panel, then open Edit an image.

Begin by uploading an image from Your device, dropping one into the editor, or selecting an asset stored in Adobe cloud storage.

Open the model dropdown menu and choose Adobe or a partner model.

Pick a Firefly or partner model from the list before editing the image with text prompts.

The Firefly and partner model list determines which model handles the prompt-based edit.

Use the aspect ratio dropdown menu to set the image ratio you prefer. The model you select can change which aspect ratio options are available.

In the resolution dropdown menu, choose the output resolution you want. Firefly and Gemini 3 (w/ Nano Banana pro) currently offer 1K and 2K output, and Gemini 3.1 (w/ Nano Banana 2) also offers 4K.

Tip

For Gemini 3 (w/ Nana Banana Pro), turn on Use Google Search when you want generation informed by current Google results. The same option is available with Gemini 3.1 (w/ Nano Banana 2). With that option active, the model can use recent information for time-sensitive prompts; a prompt such as "clothing appropriate for NYC today" can be answered with image ideas based on present weather, for example warm winter clothing.

In the prompt field, write what should change in the image. Everyday wording is enough: describe what to alter, add, or improve, and the selected model applies those instructions directly to the picture.

Depending on the chosen models, you can include Reference or Subject images to hold a subject steady or guide the overall look of the generated result.

This example shows GPT Image 1.5 generation with two reference images and this prompt: "A yellow vase holding a tulip on a table with a valley behind it."

Select Generate.

Note

If the message 'You don't have access to this feature' appears, review your subscription plan. Learn more about premium generative features in Firefly.

When the edited generation is ready, choose Download to store it on your device.

Use the History panel along the bottom of the page to review previous generations and open one back in the editor.

## Use Generative Fill

### Use Generative fill in the Edit tab to insert or replace objects in an image.

Generative fill lets you add new elements or swap out existing ones in selected parts of a picture. It pairs generative AI with manual selection tools so targeted edits can blend with the rest of the image.

Generate an image and open the Edit tab, or upload an image and choose Generative fill from the left toolbar.

Paint over the object or region to edit with the brush tool, then describe the fill you want in a text prompt.

Brush across the image area that should receive new generated content.

Use the brush on the portion of the image you want Firefly to fill.

Choose Select less, then brush across painted strokes to subtract them from the selection. Or choose Select more to keep painting over the area you want to change.

Use Select Less, then paint across the selected area to remove it from the mask.

With Select Less active, brush over an area when you need to erase that part of the selection.

Select the icon to display brush settings. Use the Brush size slider to enlarge or reduce the brush for the area being edited. The Brush hardness slider changes whether brush edges look softer for blended selections or harder for more defined ones.

Adjust Brush size and Brush hardness to set both the coverage width and the edge softness.

Use the brush controls to change the painted area size and how soft the brush boundary appears.

Under References, select the icon to attach a reference image. The added image steers the visual style of the generated output.

Type the content you want placed into the selected area in the prompt field.

Write a text description for the content that should appear inside the painted region.

Describe in text what Firefly should generate for the painted region.

Tip

For background removal, choose Remove background from the left toolbar.

To clear selections and begin again, choose the reset option .

Select Fill to create the edited image.

Note

Different models spend credits differently. Hover over the credit consumption indicator beside Fill to check the generative credits needed for that generation.

## Use Generative Remove

### In the Edit tab, select image regions and remove unwanted content non-destructively.

Generative remove uses generative AI to take out objects, people, or areas while rebuilding the surrounding scene naturally. Brush-based controls define exactly what should disappear; after you paint the unwanted content, Firefly creates replacement pixels that fit the rest of the image.

Generate an image and open the Edit tab, or upload an image and choose Generative remove from the left toolbar.

Paint over the object or area to remove with the brush tool.

The image generation model is chosen automatically and is not editable.

This workflow uses a default image generation model that cannot be switched.

Select the icon to display brush settings. Use Brush size to make the brush larger or smaller for the region being edited. Use Brush hardness to control whether the brush edge is softer for blending or sharper for a cleaner selection edge.

Tip

For background removal, choose Remove background from the left toolbar.

Choose Select less, then brush across painted strokes to subtract portions of the current selection.

Or change to Select more and paint another region to add a new selection.

Switching to Select more lets you brush a different area into the selection.

To clear selections and begin again, choose the reset option .

Select Remove to create the edited image.

Note

Model choice affects credit use. Hover over the credit consumption indicator beside Remove to see the generative credits required for the generation.

## Expand images

### Resize an image in the Edit tab with Generative expand.

Generative expand extends an image beyond its starting frame. Firefly uses generative AI to fill the added canvas while keeping the composition's visual style and overall feel consistent.

Generate an image and open the Edit tab, or upload an image and choose Generative expand from the left toolbar.

Choose the new dimension from these options:

- Freeform
- (1:1)
- (4:3)
- (16:9)
- (3:4)

Open the More menu to see extra aspect ratios that can be used when expanding the image.

Use More to reveal additional aspect ratio choices for the expansion.

Tip

Freeform lets you pull the handles to extend the image boundary manually. Preset options constrain the expansion to a selected aspect ratio.

In the prompt field, describe what should fill the added area. You can also leave the field empty so Firefly evaluates the image and expands it with fitting content.

Select the Reset icon whenever you want to remove all expanded boundaries and begin again.

After the frame size is set, choose Expand to generate the extra image area.

Note

Credit use depends on the model. Hover over the credit consumption indicator next to Expand to view the generative credits for that generation.

## Upscale images

### Improve images in the Edit tab with the Generative upscale tool.

In the Edit tab, Adobe and partner models can upscale generated or uploaded images. The upscaling option raises resolution and quality so creative work can be delivered with a more polished result.

Generate an image and open the Edit tab, or upload an image and choose Generative upscale from the left toolbar.

Choose a model from the model dropdown:

- Firefly Upscaler
- Topaz Bloom
- Topaz Gigapixel

Match the image upscaling model to the result you need.

Choose the upscaling model that best fits the image and intended output.

From the Scale menu, choose 2x or 4x to set how much the image should grow.

Review the expected width and height before you start upscaling.

Check the projected image dimensions before running the upscale.

Tip

- With the Topaz Bloom model, the Creativity slider controls how much the upscaled image can change. Move it left to remain closer to the original style, or right to add detail and stronger creative enhancement.
- With the Topaz Gigapixel model, Face recovery can help retain facial detail and expression in blurry or low-resolution faces.

To clear the configured upscale settings and begin again, choose the reset option .

Select Upscale to generate the larger image.

Note

Credit use changes by model. Hover over the credit consumption indicator beside Upscale to view how many generative credits the generation will use.

## Edit images with AI Markup

### Use AI Markup to make targeted image edits by drawing, selecting regions, and entering text prompts.

AI Markup combines freehand marks, region selection, and text prompts for edits to chosen parts of an image. Mark or select the area where the change should happen, then describe the edit; Firefly uses the marks, selections, and prompt together to produce a result aligned with your intent.

Note

When using AI Markup, you can work with Text, Brush, and Region separately, or combine the three edit features as needed.

### Markup and generate edited images

Generate an image and open the Edit tab, or upload an image and choose Markup from the left toolbar.

Choose Text, then place the box on the part of the image you want to edit. Use that box to state the change you want applied.

When a text prompt needs an object color, enter a color name such as 'green' or 'blue', then pick a hue from the available choices.

To define color in a prompt, type a color name such as 'green' or 'blue' and select one of the offered hues.

Choose the Brush tool when you want to draw directly on the image.

- The add icon adds brush strokes or marks an area; the remove icon subtracts them.
- Use the slider to increase or decrease the brush size.

Brush tool marks drawn on the image can guide edits such as inserting items or moving elements inside the composition.

Drawing with the Brush tool gives Firefly visual guidance for changes like adding or repositioning composition elements.

Use the Region tool to mark a particular area, then explain the desired change in the prompt box that appears.

When a prompt alone is too broad, Region selection can direct the edit to a precise area.

Region-based targeting helps confine edits to selected parts of the image when text alone does not give enough direction.

Tip

Select the reset option to remove all markups and start marking up the image again.

In the prompt field, describe how the marked areas should look or what should change there.

Choose the image generation model you want from the model dropdown menu.

Select Generate to create an edited image from the markups and prompt.

Credit use depends on the model. Hover over the credit consumption indicator next to Generate to see the generative credits required.

## Edit images with Precision Flow (beta)

### Refine image edits with Precision Flow (beta), an intuitive slider for creating several variations at once.

Precision flow (beta) lets you test a spectrum of image variations inside one workflow. A slider can shift the overall mood or feel, for example weather or tone, across a gradual range (e.g., warm to cool). You can preview options, fine-tune the result, and choose the specific look you want without rewriting prompts or making separate generations.

### Generate images with precision

Generate an image and open the Edit tab, or upload an image and choose Precision flow (beta) from the left toolbar.

In the tools above the prompt bar, choose one of these options to set which areas the edit should affect:

- Entire image: applies changes across the full image.
- Select: targets a specific image area or layer; hover over the image to reveal numbered selectable areas.
- Brush: lets you paint a specific area and apply changes there.

Use Select or Brush to place visual overlays that show where generative edits should be applied.

Visual overlays from Select or Brush help define the parts of the image affected by the generated edit.

Tip

With Brush selected, use the remove icon to subtract brush strokes, then the add icon to continue adding strokes. To begin again, select the reset option to clear all selections.

In the prompt field, briefly describe how you want the image's look and feel changed.

Open the Edit strength dropdown menu to raise or lower how strongly the edits are applied. Any strength indicator from 0.1 to 1 can be selected.

Select Generate to create image variations.

Choose among the generated results to apply either restrained or stronger effects without rebuilding the full edit.

The generation set lets you pick subtle or dramatic effects while keeping the rest of the edit intact.

Note

Credit use varies by model. Hover over the credit consumption indicator next to Generate to check the generative credits for that generation.

After image generation succeeds, a filmstrip appears. Select a preview image or move the slider to choose the preferred result along the range, from subtle to dramatic, then select Apply.

## Generate vectors

### Text to vector

Generate vectors using text prompts

Generate vectors using partner models

## Generate vectors using text prompts

### Create editable vector artwork from text descriptions with Text to vector.

Text to vector in Adobe Firefly can produce detailed vector subjects and scenes from prompts. Generated variations can be downloaded as .svg files for later editing.

From the Firefly homepage, choose Generate in the left panel. In the Image tab, open Text to vector.

Under General settings on the Text to vector page, open the Model dropdown menu to see available generation models.

A vector image can be generated with either a Firefly model or a non-Adobe model.

Choose Firefly or a non-Adobe model depending on which model should create the vector image.

Note

The available generation settings change based on whether the chosen model is Adobe or non-Adobe. This procedure covers the Firefly model; for partner models, use the vector generation procedure here.

Under Content type, choose Subject or Scene.

Text prompt used: "A toucan perched in dense tropical leaves."

Use the extra controls in the left panel to refine the generated variations.

- Styles: add a reference image so the generated variations follow its style.

- Effects: select the effects to apply, then set Color and tone.

In the Prompt field, write a detailed description of the vector image to generate.

Tip

For effective text prompts, use simple direct wording and include at least three words.

Select Generate.

Hover over the generated vector to show these options:

- Open in Illustrator desktop: if Adobe Illustrator is installed, open the .svg file there directly.
- Download: saves the generated variation as an .svg file.
- Rate the result: use the rating option to score the generated vector image and provide feedback.
- Share: copies the vector so it can be pasted for editing, such as in Adobe Illustrator.

After variations appear, the available controls support saving, downloading, editing, and sharing.

A. Open in Illustrator to edit the file B. Download and save it in .svg file format C. Rate the generated vector image D. Copy the .svg file

When the variations are ready, the available options let you share, edit, download, or save them.

Generation history shows the vector generations completed during the current browser session. To turn it on, select the History icon next to Generate.

## Generate vectors using partner models

### Use partner models with Text to vector to generate vector files.

For Text to vector generation, either a partner model or a Firefly model can be selected. After the model is chosen, the matching generation controls and settings become available. At this time, Text to vector includes GPT Image and Ideogram 3.0 as partner models for vector image generation.

Choosing a partner model for vectors triggers a confirmation explaining that the model was not developed by Adobe and showing related information. Review those details, then choose Continue to begin generation.

Example confirmation shown when a partner model is selected for vector generation.

Confirmation example displayed after selecting a partner model to generate vectors.

### Generate a vector file using GPT Image

From the Firefly homepage, choose Generate in the left panel. In the Image tab, open Text to vector.

Under General settings on the Text to vector page, open the Model dropdown menu to see available generation models.

Select Add next to GPT Image.

A vector image can be generated with either a Firefly model or a partner model.

Choose Firefly or a partner model depending on which model should produce the vector image.

Under Content type, choose Subject for a subject-only result, or Scene for a full scene.

Use Subject or Scene to align the vector output with the visual result you need.

The Subject and Scene options determine whether the generated vector focuses on one subject or a complete scene.

Use Vector to upload your own vector file, commonly in SVG format. You can revise the file and make changes, such as adding an element to the uploaded image.

In the example below, an image of a cake is added with Vector. Along with the text prompt, the generated vector image adds two yellow candles to it.

Upload an image and use a prompt to edit it, for example by adding new elements or applying other changes.

Use an uploaded image with a text prompt when you want edits such as added elements or other adjustments.

Note

Each generation updates the vector automatically. Hover over the vector and use the close option if you need to delete it.

In the Prompt field, write a detailed description of the vector image to generate.

Select Generate.

Hover over the generated vector image to see these options:

Hover over the generated image to show editing, download, and rating controls.

A. Open in Illustrator desktop B. Download C. Copy SVG D. Rate the image

Place the pointer over the generated image to access edit, download, and rating actions.

- Open in Illustrator desktop: if Adobe Illustrator is installed, open the .svg file there directly.
- Download: saves the generated variation in .svg file format.
- Copy SVG: copies the vector for pasting into an editor such as Adobe Illustrator.
- Rate the result: record a rating for the generated vector image and include feedback.

### Generate a vector file using Ideogram 3.0

From Adobe Firefly, open Vector and select Text to vector.

In General settings on that page, open the Model dropdown menu to see available generation models.

Select Add next to Ideogram 3.0.

A vector image can be generated with either a Firefly model or a partner model.

Choose Firefly or a partner model depending on which model should produce the vector image.

Under Content type, choose from these options:

- Subject: creates only the subject.
- Scene: creates a complete scene.

Use Subject or Scene to align the vector output with the visual result you need.

The Subject and Scene options determine whether the generated vector focuses on one subject or a complete scene.

In the Prompt field, write a detailed description of the vector image to generate.

Select Generate.

Hover over the generated vector image to see these options:

Hover over the generated image to show editing, download, and rating controls.

A. Open in Illustrator desktop B. Download C. Copy SVG D. Rate the image

Place the pointer over the generated image to access edit, download, and rating actions.

- Open in Illustrator desktop: if Adobe Illustrator is installed, open the .svg file there directly.
- Download: saves the generated variation in .svg file format.
- Copy SVG: copies the vector for pasting into an editor such as Adobe Illustrator.
- Rate the result: record a rating for the generated vector image and include feedback.
