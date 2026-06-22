# Generative Ai Faq Illustrator, Partner Models Overview, Generate Scenes Subjects And Icons, Use Auto Select ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Use generative AI; Common questions about generative AI features in Adobe Illustrator; Partner models in Adobe Illustrator; Generate scenes, subjects, and icons; Use Auto Select; Generate similar variations without text prompts; Generate patterns; Manage pattern variations; Edit generated patterns; Generate shape fills; Scenarios with repeat shape fill generation; Recolor artwork with text prompts.

## Use generative AI

Common questions about generative AI features in Adobe Illustrator

Partner models in Adobe Illustrator

Generate scenes, subjects, and icons

Use Auto Select

Generate similar variations without text prompts

Generate patterns

Manage pattern variations

Edit generated patterns

Generate shape fills

Scenarios with repeat shape fill generation

Recolor artwork with text prompts

Generate vector graphics to expand artwork

Options to expand the expanded artwork

Generate print bleed

Generate content to expand images

Remove background from images

View 2D objects from new angles

When to use Turntable and 3D

Generate vector artwork from raster images

Manage generated variations

Scenarios with linked variations

Edit generated artwork using prompts

Generate, rewrite, proofread, and translate text

## Common questions about generative AI features in Adobe Illustrator

This section answers frequent questions about Illustrator generative AI features.

- Text to Vector Graphic: Uses text prompts to build editable vector graphics, including scenes, subjects, and icons.
- Text to Pattern: Produces editable vector patterns from text prompts.
- Concept to Vector: Converts raster images into editable vector artwork through text prompts.
- Generative Shape Fill: Places editable vector graphics inside shapes based on text prompts.
- Generative Expand: Extends artwork and can fill the print bleed area with vector graphics.
- Generative Expand for images: Extends images by adding generated content.
- Remove Background: Returns images with transparent backgrounds.
- Turntable: Creates rotated object views so you can explore different angles.
- Generative Recolor: Changes artwork colors from text prompts.
- Prompt to Edit: Modifies generated artwork by adding, removing, recoloring, or replacing elements through text prompts.
- Rewrite: Generates, rephrases, proofreads, translates, or resizes text.

All generative AI features are available from the Generative button in the toolbar or Object > Generative. The objects selected on the canvas determine which features are active and which are grayed out.

Related generative AI features can also show in the right-click menu, Control panel, Properties panel, and Contextual Tak Bar.

To switch the menu on or off, choose Window > Show Generative Menu or Hide Generative Menu. You can also turn it off from the Generative button by choosing Hide menu under More options.

Illustrator generative AI features are offered wherever Adobe provides services, except in mainland China, and they support over 100 languages. They are designed for commercial use.

The technical requirements for Illustrator generative AI features match the requirements for the app.

Yes, an Internet connection is required.

Illustrator licenses include access to the app's generative AI features and provide generative credits for priority processing of generated content.

At present, partner models are supported only by Text to Vector Graphic, Prompt to Edit, Rewrite, and Generative Shape Fill.

Generative credits are consumed when Illustrator generative AI features are used. Learn what those credits are and how many are applied.

Content Credentials are tamper-evident metadata added to generative AI assets exported as JPG, PNG, or SVG files. They help make the origin and history of those assets more transparent.

With Illustrator versions 29.4 and later:

- When an old or new file has no generative AI content, Illustrator does not add Content Credentials to any new generative AI content you create.
  - Illustrator does not add Content Credentials when that new generative AI content is exported as a separate asset.
  - Illustrator preserves Content Credentials when the new generative AI content is exported together with imported artwork.

With Illustrator versions 29.3 and earlier: Illustrator follows the earlier behavior by adding Content Credentials to all new generative AI content and preserving Content Credentials already present in imported artwork.

## Partner models in Adobe Illustrator

See which partner generative AI models are available for Illustrator vector graphic generation.

Partner model support in Illustrator currently includes Text to Vector Graphic, Generative Shape Fill, Rewrite and Prompt to Edit.

Auto Select is a smart model recommendation that reviews your prompt and inputs, including content type and style, while you use Text to Vector Graphic, then recommends suitable models from Adobe or other partner models.

Auto Select can create up to 4 variations, according to the chosen output count, so you can compare results from the recommended models.

Partner models first create raster images, and Illustrator then converts those images into vector graphics automatically.

No plugins are required. Update Illustrator to the latest version to receive every supported partner model.

For Text to Vector Graphic and Generative Shape Fill, partner model generation currently omits Style Reference. Other settings remain available, as they are with Firefly Vector models.

No, partner models in Illustrator do not currently support conversational or instructional editing. You can still edit the output with standard editing tools, as with other vector graphics.

No, output from partner models cannot currently use Generate Similar.

Style Reference works with Gemini 3 (Nano Banana Pro), Gemini 2.5 (Nano Banana), GPT Image 1.5, and GPT Image. Imagen 4 does not support this feature.

At present, Text to Vector Graphic or Generative Shape Fill produces one output variation when run with a partner model.

Your Creative Cloud plan determines whether these premium partner models are available.

Commercial safety information is available for partner models.

Credit-consumption information is available for Imagen 4, Gemini 3 (Nano Banana Pro), Gemini 2.5 (Nano Banana), GPT Image 1.5, and GPT Image 4o.

## Generate scenes, subjects, and icons

Use Text to Vector Graphic when you want to generate scenes, subjects, and icons.

Text to Vector Graphic creates realistic vector graphics, including scenes, subjects, and icons, in your own style.

With Text to Vector Graphic, generate a scene, subject, or icon either in context or on an empty canvas.

Select the Rectangle tool in the toolbar and draw a rectangle on the artboard. Next, select it with the Selection tool.

When the Contextual Task Bar appears, choose Generate Vectors.

You can also open Generate Vectors from the right-click menu, the Generate Vectors icon in the Control panel, the Quick Actions section of the Properties panel, and Object > Generative.

In the prompt field, describe the result you want. To turn off prompt suggestions, choose View all settings, then switch off Suggestions.

Tip

For help shaping a useful prompt or finding ideas, choose Prompt Inspiration.

In the model dropdown of the Contextual Task Bar, do one of the following:

- To let Illustrator select a model, choose Auto Select.
- To choose yourself, pick one of the Adobe models or Partner models.

Use Content type and detail as needed:

- Scene: Builds a complete vector scene.
- Subject: Builds a detailed vector element without a background.
- Icon: Builds a low-detail vector element without a background for icon sets and logos.

- Detail: Move the slider to set how much detail appears in the output.

Configure Style Reference when needed:

- Style Reference: Match generated output to the intended style by referencing document assets or uploaded images. Leave Auto turned on when nearby artwork should drive the style. Choose Choose asset to upload an image from your device or browser, or use the style picker to sample an object in your artwork.
- Effects: Choose one or more preset effects. Choose Clear all to remove the effects.

Choose Clear all next to Styles to discard both effects and any style reference.

Note

For partner models, Style Reference currently works for every one except Imagen 4.

To adjust colors, choose View all settings. In the Generate Vectors dialog box, choose Color and Tone:

- Color Presets: Choose a color preset.
- No. of colors: Leave Auto selected or enter the number of colors wanted in the output.
- Specify Colors: Set up to 12 colors. To change or remove a color, select it and adjust the menu that appears. Choose Clear all next to Specify Colors to remove every color.

To discard color settings, choose Clear all at the top of Color and Tone; to discard every setting, choose Clear all in the Generate Vectors dialog box.

In the Generate Vectors dialog box, proceed according to the model choice:

- For Auto Select, choose Continue, then choose Generate in the Suggested Model dialog box.
- For a manually selected model, choose Generate.

Output variations appear in the Properties panel. The first variation is placed on the canvas automatically as a Generative Object, marked on its bounding box, replacing the selected rectangle. Auto Select can return up to four variations; a partner model returns one. The Layers panel also gets a Generative Object layer.

When generated output includes text, you can edit that text directly without converting it to outlines or regenerating assets; this is currently available for Latin languages only.

Use the arrows in the Contextual Task Bar to preview the Variations, then choose the option that best fits your requirement.

Manage generated variations in the Generated Variations panel or the Properties panel. Other options include copying the Generative Object with linked variations, running Text to Vector Graphic again, or generating similar variations without text prompts.

## Use Auto Select

Use Auto Select in generative AI when you want Illustrator to choose the best model for a prompt.

Auto Select is a smart model recommendation that evaluates your prompt and inputs, such as content type and style, while you use Text to Vector Graphic, then recommends suitable Adobe or partner models. It reduces trial and error and helps conserve credits by selecting up to 4 output models that fit your creative intent.

### Auto Select capabilities

- Reviews the prompt and chosen content type.
- Scores available Adobe models and other partner models.
- Lets you switch models before generation when needed.
- Produces up to 4 output variations from one prompt.
- Lets you compare results from different models.

### Availability

At present, Auto Select is limited to Text to Vector Graphic workflows.

### Credit usage

Credits are deducted only after you choose Generate. Looking at or switching model recommendations does not spend credits.

## Generate similar variations without text prompts

Create new scenes, subjects, and icons that resemble earlier Text to Vector Graphic results without writing another prompt.

You can create similar variations from Text to Vector Graphic output without needing to remember the original prompt or settings.

Note

- Generate Similar is available only for Text to Vector Graphic variations created with Firefly Vector models and is not currently available for partner models.
- Generate Similar is not available for variations made with Text to Pattern, Generative Shape Fill, Generative Expand, or Generative Recolor.

On the canvas, select the Generative Object that should be used as the basis for similar variations. As another route, open the Generated Variations panel with Object > Generative > Generation History.

Hover over the relevant variation in either the Generated Variations panel or Properties panel, then choose More options.

Choose Generate Similar.

## Generate patterns

### Use Text to Pattern to brainstorm and create detailed patterns.

Powered by Adobe Firefly, Text to Pattern makes it easy to create distinctive vector patterns for artwork.

Create scalable, editable patterns with Text to Pattern.

Use the Selection tool to choose the object on the canvas that should receive the pattern. Then choose Fill or Stroke from Fill and Stroke in the toolbar.

Use Object > Pattern > Generate Patterns for the Generate Patterns panel.

You can also reach it from the Properties panel or Control panel through Text to Pattern in the Fill and Stroke menus, or by choosing Object > Generative > Generate Patterns.

In the Prompt field, describe the pattern to generate. If you need help writing a prompt or want ideas, choose Prompt Inspiration.

Use Add colors or choose from color presets as needed:

- Color presets: Applies a color preset.
- No. of colors: Sets the desired number of colors in the output.
- Specify Colors: Sets up to 12 colors. To change or remove one, select it and adjust the menu that appears. Choose Clear all next to Specify Colors to remove every color.

Choose Clear all next to Color & Tone to remove all color settings.

Choose Add effects to your creation, then apply one or more preset Effects as needed.

Choose View all settings, then move the Density slider to control pattern density.

Choose Generate. Pattern variations appear in the Generate Patterns panel, and the first variation is applied to the object automatically.

Note

Linked variations are not available for Text to Pattern, unlike Text to Vector Graphic, Generative Shape Fill, and Generative Expand.

Select other variations in the panel to preview them on the canvas, then choose the one that best fits your requirement.

Illustrator automatically stores each previewed variation for later use as a pattern swatch in the Generated Patterns folder of the Swatches panel (Window > Swatches). These swatches can be used like any other pattern swatch.

## Manage pattern variations

### Manage pattern variations created with Text to Pattern.

All pattern variations generated in the document can be viewed and managed in the Generate Patterns panel. They do not appear in the Generated Variations panel.

Open the Generate Patterns panel with Object > Pattern > Generate Patterns.

Point to a variation, choose More options, then choose one of these options:

- Add to swatches: Saves the variation as a pattern swatch in the Swatches panel.
- Edit Pattern: Opens controls for editing the pattern swatch.
- Good Result or Poor Result: Opens feedback choices for the variation.
- Delete variation: Removes the variation.

Note

- When a pattern variation has been added as a swatch, either one can be deleted without affecting the other.
- Swatch deletion can be undone, but variation deletion cannot be undone. In both cases, the applied pattern on the canvas stays unchanged.
- Deleting an applied pattern on the canvas does not affect the variation or the swatch.

Unlike objects generated with Text to Vector Graphic, Generative Shape Fill, and Generative Expand, a pattern applied to an object on the canvas has no linked variations. Generate Similar is also unavailable for variations created with Text to Pattern.

## Edit generated patterns

Customize patterns that were created with Text to Pattern.

Open the Generate Patterns panel with Object > Pattern > Generate Patterns.

Point to a variation, choose More options, then choose Edit Pattern. Editing a generated pattern from the Generate Patterns panel updates the matching swatch in the Swatches panel (Window > Swatches). The original variation in the Generate Patterns panel is not changed.

In the Pattern Options dialog box, configure these options as needed:

- Name: Enter a swatch name.
- Width and Height: Enter the dimensions needed for the pattern tile.
- Size Tile to Art: Fits the tile size to the artwork boundary.
- Move Tile with Art: Moves the tile boundary together with the artwork.
- Overlap: Selects whether adjacent-tile artwork appears in front of or behind artwork in the current tile.
- Copies: Sets how many tile copies appear in the preview.
- Dim Copies to: Changes the transparency of repeated tiles in the preview.
- Show Tile Edge: Displays the tile boundary while editing.
- Show Swatch Bounds: Displays the pattern swatch boundary while editing.

Note

Tile Type and Brick Offset cannot be modified for a generated pattern.

Choose Done in the pattern editing bar at the top of the canvas.

## Generate shape fills

Use Generative Shape Fill to add detailed vector graphics inside shapes.

Powered by Adobe Firefly, Generative Shape Fill fills shapes with detail and color in your own style.

Create unique fills that follow shape outlines and optional text prompts.

Use the Selection tool to choose the shape you want to fill with vector graphics.

Supported selections include open and closed paths, basic shapes, grouped objects, and compound paths. Multiple shapes can also be selected.

When the Contextual Task Bar appears, choose Generative Shape Fill.

You can also open Generative Shape Fill from the right-click menu, the Generative Shape Fill icon in the Control panel, the Quick Actions section of the Properties panel, and Object > Generative.

In the prompt field, describe the fill to generate. The prompt is optional; without one, the fill is created entirely from the shape outline.

If prompt suggestions are unwanted, choose View all settings, then switch off Suggestions.

In the Contextual Task Bar, open the model dropdown menu, then choose Firefly Vector 3 or one of the Partner models.

Use Shape strength and detail as needed:

- Shape Strength: Move the slider to control how tightly the fill follows the shape outline. High makes the fill conform to the outline; Low allows contours that feel closer to real objects and may not fully follow the outline.
- Detail: Move the slider to set the amount of detail required in the fill.

Set Shape Strength according to the result you need.

Set Shape Strength according to the result you need.

Use Style Reference as needed:

- Style reference: Leave Auto enabled when the fill should match the style of surrounding vector or image objects. To sample a particular artwork object, choose Choose asset or Replace asset, then identify it by selecting the object or drawing a lasso around it.
- Effects: Apply one or more preset effects. Choose Clear all to remove the effects.

Choose Clear all next to Styles to discard both effects and any style reference.

Note

Partner models currently do not provide Style Reference.

To adjust colors, choose View all settings. In the Generative Shape Fill dialog box, choose Color and Tone:

- Color Presets: Applies a color preset.
- No. of colors: Leave Auto selected or enter the number of colors wanted in the fill.
- Specify Colors: Set up to 12 colors. To change or remove a color, select it and adjust the menu that appears. Choose Clear all next to Specify Colors to remove every color.

To discard color settings, choose Clear all at the top of Color and Tone; to discard every setting, choose Clear all in the Generative Shape Fill dialog.

Choose Generate in the Generative Shape Fill dialog box:

Fill variations appear in the Properties panel. The first variation is placed on the canvas automatically as a Generative Object, marked on its bounding box, filling the shape. If a partner model was selected, only one output variation is generated. The original shape stays on the canvas independently of the fill. The Layers panel also gets a Generative Object layer.

Use the arrows in the Contextual Task Bar to preview variations, then choose the one that best fits your artwork.

Manage generated variations in the Generated Variations panel or the Properties panel. Other options include copying the Generative Object with linked variations, running Generative Shape Fill again, and choosing how it should be re-run.

## Scenarios with repeat shape fill generation

Understand how a new fill uses either the original shape or the first fill, depending on the way Generative Shape Fill is run again.

Example: first create fill-1 on a shape while Shape Strength is Low. Then:

- Without ungrouping fill-1: If fill-2 is generated on fill-1 while Shape Strength is High, fill-2 follows the original shape outline instead of fill-1.
- After ungrouping fill-1: If fill-2 is generated on fill-1 while Shape Strength is High, fill-2 follows fill-1 instead of the original shape outline.

## Recolor artwork with text prompts

Use Generative Recolor to quickly change an artwork color scheme.

Try different color schemes with Generative Recolor.

Select the artwork to recolor with the Selection tool.

Note

Generative Recolor requires colored vector artwork to be selected.

Choose Edit > Edit Colors > Generative Recolor to open the Generative Recolor panel.

Object > Generative also provides access to Generative Recolor.

Use the Prompt field to describe the color palette or theme to generate.

Tip

When recoloring without your own prompt, use the examples in the Sample Prompts section of the Generative Recolor panel.

To guide the output toward particular colors, choose Add colors to guide the prompt and add up to five colors.

Choose Generate. Multiple output variations appear in the Variations section of the Generative Recolor panel.

Select variations to preview them on the canvas, then choose the one that best fits your artwork.

### Refine the output

To fine-tune colors in an output variation, choose Edit > Edit Colors > Recolor Artwork.

### Provide feedback on the output

Point to a variation, choose See more options, then choose Good Result or Bad Result.
