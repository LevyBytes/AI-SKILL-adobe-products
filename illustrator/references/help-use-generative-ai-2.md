# Expand Artwork With Generative Expand, Options To Expand The Expanded Artwork, Generate Print Bleed, Expand Images With Generative Expand ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generate vector graphics to expand artwork; Options to expand the expanded artwork; Generate print bleed; Generate content to expand images; View 2D objects from new angles; Remove background from images; When to use Turntable and 3D; Generate vector artwork from raster images; Manage generated variations; Scenarios with linked variations; Edit generated artwork using prompts.

## Generate vector graphics to expand artwork

Use Generative Expand to extend artwork with vector graphics that blend naturally into the existing design.

Powered by Adobe Firefly, Generative Expand creates vector graphics beyond the original artwork bounds. It can expand only the artwork for ideation, or it can expand the artboard together with finished artwork to create alternate layouts.

Generative Expand can also fill the print bleed area around an artboard.

Expand artwork by itself or together with the artboard.

### Expand artwork

Choose the action that matches what should be expanded:

- To expand only the artwork, use the Selection tool to select the artwork on the canvas. The artwork must include at least two separate objects or one grouped object.
- To expand the artboard together with the artwork, select the Artboard tool, then select the artboard.

In the Contextual Task Bar, choose Generative Expand. Illustrator shows a rectangular frame with handles and widgets on the canvas.

You can also open this feature from the right-click menu, the Generative Expand icon in the Control panel, the Quick Actions section of the Properties panel, and Object > Generative > Generative Expand > Make.

Drag the frame handles and widgets outward to enlarge the artwork or artboard area:

- Press Shift + Option (macOS) or Shift + Alt (Windows) to drag in every direction at once.
- Enter width and height values in the Properties panel when an exact area is needed.

Optionally add a text prompt. Leave it empty when Generative Expand should extend the artwork naturally from the existing content.

Note

- Frame handles and widgets can be dragged only outward. The frame cannot be rotated.
- When expanding only the artwork, the area must be enlarged. When expanding the artboard with the artwork, enlarging the area is optional if the artwork is centered on the artboard.

Choose Generate in the Contextual Task Bar. Generative Expand copies the original artwork and expands it:

- Three output variations appear in the Properties panel. The first one is placed automatically above the original copy as a Generative Object, with the bounding-box marker.
- The Layers panel receives a Generative Object group. Under it are Expanded Art and Original Art subgroups.

Note

Changing only the area does not expand the artwork. Generate must be selected.

Use the arrows in the Contextual Task Bar to preview variations. After choosing the variation that best fits your artwork, choose Done.

Choose Combine in the Contextual Task Bar to merge object parts across Expanded Art and Original Art. The result is a logical object grouping that is easier to edit later. After Combine, the artwork is no longer a Generative Object.

Combine is unavailable if the expanded artwork has been moved from its original position.

Manage generated variations in the Generated Variations panel or the Properties panel. Other options include copying the Generative Object with linked variations, running Generative Expand again, and choosing how it should be re-run.

### Scenarios with different objects

- Running Generative Expand on artwork that contains raster image, Symbol, Symbol Set, Graph, Live Paint, Image Trace output, Envelope Distort, Envelope Mesh, Envelope Warp, Mesh, Blend, Shaper Group, Brush path, Radial Repeat, Grid Repeat, Mirror Repeat, Radial Gradient, Freeform Gradient, color stop in gradient, non-native art, Perspective object, Intertwine object, Dimension object, and Mockup object makes the output imitate their visual look rather than create those object types. After you combine the expanded section with the original artwork, those objects remain separate instead of merging.
- Artwork with linear gradients can be expanded. Afterward, you can combine the original area with the expansion and continue editing them as linear gradients.
- Clip groups are eligible for expansion. The original and expanded sections can be combined afterward.
- Text objects are expandable only when the selection also contains other supported object types.
- Locked objects are not eligible for expansion.
- For stronger results, use filled artwork whose edges are cropped closely enough to make the scene fill the area.

## Options to expand the expanded artwork

Generative Expand can be applied again to artwork that has already been expanded in several ways.

When Expanded Art and Original Art have not been combined:

- Re-run Generative Expand without enlarging the area to replace the previous Generative Object with the new one and carry over its variations.
- Re-run Generative Expand after enlarging the area to create a new Generative Object that does not replace the earlier one and does not receive its variations.

After Expanded Art and Original Art are combined, the result is no longer a Generative Object. To expand it again, enter Generative Expand again.

## Generate print bleed

Use Generative Expand when you need Illustrator to fill the print bleed area surrounding an artboard.

The bleed area can be filled with vector graphics that continue the look of the artwork naturally.

The bleed area can be filled with vector graphics that continue the look of the artwork naturally.

Create an artboard bleed from File > Document Setup. Illustrator displays the bleed around the artboard with a red boundary.

At the upper-right of the bleed boundary, choose Print Bleed. The command duplicates the artwork and generates bleed content:

- The Properties panel shows three variations. The first variation is placed on the canvas automatically as a Generative Object above the original copy, indicated on its bounding box.
- In the Layers panel, Illustrator creates a Generative Object group containing two subgroups: Expanded Art and Original Art.

Note

- Another route is to select the Artboard tool, then open Print Bleed from the Contextual Task Bar, Object > Generative, or the Quick Actions section of the Properties panel.
- To hide the Print Bleed icon on the bleed boundary, disable Show 'Print Bleed' generative AI button on Bleed from Illustrator > Settings > General (macOS) or Edit > Preferences > General (Windows).

Preview variations with the arrows in the Contextual Task Bar. When a variation fits the artwork best, choose Done.

Use Combine in the Contextual Task Bar to join object parts across Expanded Art and Original Art. The result is a logical object grouping that is easier to edit later. Combining removes Generative Object status. Combine is unavailable if the expanded artwork has been moved away from its original position.

## Generate content to expand images

Generative Expand for images creates content that blends with image edges as you expand an image.

Within the Crop Image feature, Generative Expand for images can extend an image outside its starting bounds.

Use Generative Expand for images when an image needs a different aspect ratio without cutting anything off.

Use Generative Expand for images when an image needs a different aspect ratio without cutting anything off.

Select the image on the canvas with the Selection tool.

In the Contextual Task Bar, choose Crop Image. A rectangular crop frame with handles appears over the image.

Other entry points for Crop Image include the Object menu, the right-click menu, the Control panel, and the Quick Actions section of the Properties panel.

Pull the frame handles outward in any direction until the crop area is large enough. The added area is shown in purple.

- Hold Shift + Option (macOS) or Shift + Alt (Windows) while dragging to expand all directions together.
- For an exact size, type the width and height in the Properties panel.

Note

You can crop part of the image while expanding the remaining area in the same operation.

Choose Generate in the Contextual Task Bar. Generative Expand for images then copies the original image and extends it with generated content:

- The Properties panel lists three output variations. The first variation appears on the canvas automatically as a Generative Object, indicated on its bounding box, while the original image is removed from view on the canvas.
- Illustrator adds a Generative Object group in the Layers panel. The original image is also kept there as a hidden object; unhide it to show it behind the Generative Object on the canvas.

Use the Contextual Task Bar arrows to review the variations. After choosing the variation that works best for the design, select Done.

Manage generated variations in the Generation History panel or the Properties panel. Another option is to copy the Generative Object with its linked variations, or run Generative Expand for images again.

## View 2D objects from new angles

Turntable in Adobe Illustrator lets you inspect vector and raster objects from multiple angles.

Powered by Adobe Firefly, Turntable starts with a 2D object and creates several rotated views so you can see it from other sides. The generated output includes fluid transitions between those views, which lets you slide smoothly from one angle to the next and examine the object in a sweeping motion. Individual views can be extracted and developed further, or the set can be exported as GIF files.

Use Turntable when you want to study lateral and vertical views of a 2D object.

### Generate multiple views

With the Selection tool, select the object that you want to see from other angles.

Note

Turntable produces the strongest results with vector and raster objects that have no background and have clear real-world angles.

Choose Object > Generative > Turntable. Turntable creates several views:

- A Generative Object is added to the canvas, indicated by the boundary marker, and all generated views are linked to it. The Contextual Task Bar appears with the needed controls.
- The Layers panel receives a Generative Object group. Illustrator also preserves a copy of the original object as a group.

Additional Turntable entry points include the right-click menu, the Control panel, the Transform section of the Properties panel, the Transform panel (Window > Transform), and the Generative button in the toolbar.

The Contextual Task Bar provides controls for exploring, extracting, and exporting generated views.

A. Reset to original view B. Rotate view left or right slider C. Tilt the artwork up D. Tilt the artwork down E. Current Angle and Tilt F. Add next rotated view to left G. Add next rotated view to right H. Place all views on canvas I. Export as GIF J. More options

The Contextual Task Bar provides controls for exploring, extracting, and exporting generated views.

In the Contextual Task Bar, drag the Rotate view left or right slider to rotate the Generative Object sideways. The maximum turn is 180 degrees either way.

The Tilt the artwork up and Tilt the artwork down arrows move the Generative Object by 30 degrees upward or downward, creating a top-down or bottom-up view. Sideways rotation remains available while the object is tilted, expanding the range of angles you can inspect.

To return the Generative Object to its default view, choose Reset to original view.

Choose Add next rotated view to left or Add next rotated view to right when you want to extract a neighboring view as its own Generative Object on the canvas.

To place every view on the canvas as separate Generative Objects, choose Place all views on canvas, then click a canvas position or drag over an area.

Use Place all views on canvas when you need every view available together.

Use Place all views on canvas when you need every view available together.

For GIF output, choose Export as GIF, enter a file name in the Export dialog box, and select Export. In the GIF Options dialog box, set these options as needed:

- View: Use Front for only views without tilt, From Above for only top-down views, From Below for only bottom-up views, or combine those choices.
- Frames: Use All for every horizontal view, or Range for only the views within a specific horizontal span.
- Frame Rate: sets the frame rate used as the object rotates.
- Motion: Use Linear playback for rotation in one direction only, or Back and forth playback for rotation in both directions.
- Direction: chooses Counterclockwise or Clockwise for rotation.
- Background Color: chooses the object's background color.

To finish the export, select OK in the GIF Options dialog box.

Use the options in the GIF Options dialog box to adjust the export.

Use the options in the GIF Options dialog box to adjust the export.

To send feedback about a particular view, choose More options, then use these commands:

- Good result: Upvote the view when the result is useful, then add detailed comments in the form that opens.
- Poor result: Downvote the view when the result is not useful, then add detailed comments in the form that opens.
- Report variation: Flag an inappropriate view, then choose the reason in the form that opens.

### Access the views later

- To reopen the linked views, select the Generative Object, then choose Turntable in the Contextual Task Bar or the Properties panel.
- To manage every view from one place, choose Object > Generative > Generation History.

### Edit the views

Edits made directly to a view in isolation mode are discarded if you enter Turntable again and move the slider. If the edited view disappears, use Command + Z (macOS) or Ctrl + Z (Windows) to bring it back. Editing one view also leaves the other linked views unchanged.

Permanent edits require ungrouping the Generative Object first. Because ungrouping the Generative Object breaks every linked view, make a copy of the Generative Object before continuing:

Select the Generative Object, then choose Turntable in the Contextual Task Bar.

Use the slider or arrows in the Contextual Task Bar to display the view you plan to edit.

Choose Object > Ungroup to ungroup the Generative Object. The object becomes a regular object and no longer retains linked views.

Make the needed edits with any editing tools.

Compare Turntable with Illustrator's 3D features and review the limitations of Turntable before choosing a workflow.

## Remove background from images

Remove Background in Adobe Illustrator creates images with transparent backgrounds.

Remove Background detects subject outlines in an image and converts everything outside those subjects to transparency.

Remove the image background when the subject needs to be used in other work, including packaging and brand graphics.

Remove the image background when the subject needs to be used in other work, including packaging and brand graphics.

Select the image on the canvas with the Selection tool.

In the Contextual Task Bar, choose Remove Background. Illustrator outputs an image with the subjects retained and a transparent background, replacing the original.

You can also open Remove Background from the Object menu, the right-click menu, the Control panel, and the Quick Actions section of the Properties panel.

## When to use Turntable and 3D

Decide whether Turntable or 3D in Adobe Illustrator is the better tool for exploring object angles.

### When to use Turntable

Turntable is suited to generating rotated views of real-world objects. The best candidates are standalone objects with recognizable forms, such as illustrated characters.

Abstract objects, including geometric shapes and live text, are poor fits because meaningful rotated views are not generated reliably.

Use Turntable to create multiple-angle views of a character.

Use Turntable to create multiple-angle views of a character.

### When to use 3D

Use 3D in Illustrator for checking angles on simple abstract objects. Apply a 3D effect to add adjustable depth or volume to the object, then rotate it to inspect different viewpoints.

Adding 3D effects to real-world objects can reduce visual realism by changing the volume of the original form.

Use 3D to make stylistic text with depth and perspective.

Use 3D to make stylistic text with depth and perspective.

### Unsupported objects for Turntable

Turntable currently does not support these native Illustrator object types:

- Freeform, radial, and mesh gradients
- Opacity
- Blending constructs
- Vector and raster effects, such as Grain and Blur
- Live strokes
- Area text

## Generate vector artwork from raster images

In Adobe Illustrator, Concept to Vector turns photos, sketches, and other raster images into editable vector artwork, illustrations, and logos.

With Concept to Vector, simple prompts can turn raster images into vector artwork. A hand-drawn sketch can become cleaner vector outlines or fully colored artwork based on the prompt. Custom prompts let you add or remove elements from the source image in the generated result. Photographs can also be converted into stylized illustrations with a personalized look. Concept to Vector can additionally create refined raster output from the image.

Use Concept to Vector to make a polished vector or raster variation from an image.

Select the image you want to vectorize with the Selection tool.

In the Contextual Task Bar, choose Concept to Vector.

Other ways to open Concept to Vector include the right-click menu, Window > Concept to Vector, Object > Generative > Concept to Vector, the Control panel, and the Quick Actions section in the Properties panel. You can also choose Create artwork from an image after selecting the Generative icon in the toolbar.

In the prompt field, type your own prompt, pick a sample prompt, or keep the prompt field blank.

You can provide prompts in the Concept to Vector panel, the Properties panel, or the Contextual Task Bar.

Note

- Without a prompt, sketches generate cleaner refined sketch versions, while images generate stylized image versions.
- Selecting the Line Art sample prompt creates stroke-based output.

From the Partner models dropdown menu in the Contextual Task Bar, choose GPT Image, GPT Image 1.5, Gemini 2.5 (Nano Banana), Gemini 3 (Nano Banana Pro), Gemini 3.1 (Nano Banana 2) or FLUX 2 Pro.

Use Change settings options to tune the output:

- Match Reference Image: Adjusts how strongly the output follows the input image. More keeps additional detail from the original image; Less gives the model more room for stylized variations.
- Raster Output: Enable the checkbox when you want Raster output.

Select Generate. Illustrator places a variation as a Generative Object to the right of the original image.

Manage the generated variation through the Generation History panel or the Properties panel. You can also run Concept to Vector again on generated raster or vector outputs while keeping the original image as the reference.

## Manage generated variations

This section covers variation management for Generative Expand for images, Generative Expand, Generative Shape Fill, and Text to Vector Graphic.

Illustrator calls a canvas variation a Generative Object when it is produced by Turntable, Generative Expand for images, Generative Expand, Generative Shape Fill, or Text to Vector Graphic, and marks it with the boundary indicator. Select a Generative Object to show only its originating batch of linked variations in the Properties panel. The Generation History panel instead shows every variation these features have generated in the document.

From either the Properties panel or the Generation History panel, you can generate similar variations, send feedback, report a variation, or delete variations. Deleting variations behaves differently in the two panels.

Do one of the following:

- To manage linked variations in context from the Properties panel, select the Generative Object on the canvas.
- To manage all variations centrally, choose Object > Generative > Generation History to open the Generation History panel.

Note

For Turntable, linked variations do not show in the Properties panel; the Contextual Task Bar controls display them on the canvas.

Hover over a variation to view the Model and Prompt used for its generation.

Hover over a variation, choose More options, then select one of these commands:

- Generate Similar: Creates variations related to the selected one without requiring you to remember its prompt or settings. This command is currently available only when the variation was generated with Text to Vector Graphic by choosing a Firefly Vector model.
- Good result or Poor result: Opens feedback choices for the variation.
- Report variation: Flags a problem with the variation.
  - From the Properties panel: removes the variation from the linked variations while keeping it in the Generation History panel.
  - From the Generation History panel: removes the variation permanently, including every instance where it appears as a linked variation.

Note

Deleting a Generative Object from the canvas does not remove its variations from the Generation History panel.

## Scenarios with linked variations

Review linked-variation scenarios across Generative Expand for images, Generative Expand, Generative Shape Fill, and Text to Vector Graphic.

## Edit generated artwork using prompts

Prompt to Edit supports generated-artwork edits such as adding, removing, recoloring, and replacing elements.

Use Prompt to Edit to revise artwork made with Text to Vector Graphic or Turntable. You can explore additional variations while prompts refine elements, replace items, recolor areas, or add and remove content.

Note

Currently, Prompt to Edit works only on artwork generated using Turntable or Text to Vector Graphic.

Choose artwork that was generated with Turntable or Text to Vector Graphic.

In the Contextual Task Bar that appears, choose Prompt to Edit.

Other Prompt to Edit entry points include the right-click menu, the Prompt to Edit icon in the Control panel, the Quick Actions section of the Properties panel, and Edit > Edit Generated Objects.

In the prompt field, describe the edits you want to apply.

You can choose a prompt suggestion to try common edits or improve the prompt.

Short, specific prompts help generative AI produce more accurate text variations and results that fit layouts well.

Short, specific prompts help generative AI produce more accurate text variations and results that fit layouts well.

Choose a Partner model from the model dropdown.

Use Style Reference options as needed:

- Style Reference: To make the output follow a particular style, use document assets or uploaded images as references. Keep Auto enabled to match nearby artwork. For an image stored on your device or browser, use Choose asset; to sample from an object in the artwork, use the picker icon.
- Effects: Choose one or more preset effects. Remove them with Clear all.

To remove both the style reference and effects, use Clear all beside Styles.

Select Generate.

Review the generated variations in the Properties panel and choose the one you want to use.

To open more choices and send feedback on variations, choose More options:

- Good output: Upvote the variation when you like it, then add detailed feedback in the form that opens.
- Poor output: Downvote the variation when you do not like it, then add detailed feedback in the form that opens.
- Delete variation: Delete the variation when it is not needed.
- Report variation: Flag the view when it is inappropriate, then choose the reason in the form that opens.

Tip

Prompt to Edit strips Turntable behavior from a Turntable object. Preserve the original by copying it before edits, or by unhiding the original object in the Layers panel.
