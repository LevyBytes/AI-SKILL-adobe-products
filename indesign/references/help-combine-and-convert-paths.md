# Create Paths From Text Outlines, Create Compound Paths, Fill Empty Spaces In Compound Paths, Break Out Compound Paths ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create paths from text outlines; Create compound paths; Fill empty spaces in compound paths; Break out compound paths; Create compound shapes; Apply clipping paths to graphics.

## Create paths from text outlines

Use Create Outlines in Adobe InDesign when text characters need to become compound paths for custom design work.

InDesign can convert text to outlines so characters become editable shapes for logos, headlines, and custom designs. The Create Outlines command preserves the visual appearance while removing reliance on the font file and making full shape editing possible. Once converted, the content is no longer editable as text and typography settings cannot be adjusted, so keep a copy first. Some external fonts may block outlining.

Open the document that contains the text to convert.

Select the text frame with the Selection tool, or use the Type tool to select particular characters.

Hold Alt (Windows) or Option (macOS) while choosing Type > Create Outlines.

With the Selection tool, drag the outlined duplicate away from the original text.

After conversion, letterforms can be edited and reused:

- Adjust individual anchor points with the Direct Selection tool.
- Use Edit > Paste Into to place images inside letters.
- Set stroke options independently for each character.
- Paste text into the outlines to turn them into text frames.
- Use the Pathfinder panel (Window > Object & Layout) to combine letter shapes with other objects.

Note

Converting type to outlines removes font hinting, which is information used to render text cleanly at small sizes or low resolutions. Because of that loss, outlined text can look less crisp when displayed small or printed on devices with low resolution.

## Create compound paths

In Adobe InDesign, multiple paths can be combined into one object that has shared attributes and transparent holes.

A compound path can be built from two or more paths, whether they are open or closed. During creation, each selected path becomes a subpath inside the new object. The stroke and fill on the resulting compound path come from the object farthest back in the stacking order.

Multiple paths can be joined into a single compound path. Use a compound path for tasks such as:

- Creating transparent holes inside a path.
- Keeping transparent areas inside text characters such as o and e after the Create Outlines command converts text to editable letterforms. Create Outlines always produces compound paths.
- Applying a gradient or placing content over several paths. The Gradient Swatch tool can lay a gradient across multiple objects. A compound path simplifies later edits because selecting any subpath lets you adjust the whole gradient. With the Gradient Swatch tool alone, all original paths must be selected again before editing.

Note

When selected objects include text or imported images, the compound path takes the attributes and contents from the object at the deepest position in the stacking order. Objects behind it that have no content do not influence the compound path.

### Create a compound path

Open the document containing the paths.

With the Selection tool, select every path to include.

Choose Object > Paths > Make Compound Path. Overlapping selected paths create a hole.

### Modify a subpath in a compound path

Open the document containing the compound path.

Select the compound path.

With the Direct Selection tool, choose a point on the subpath that needs editing.

Choose Object > Paths > Reverse Path. Reverse Path is also available in the Pathfinder panel (Window > Object & Layout).

## Fill empty spaces in compound paths

In Adobe InDesign, changing subpath direction can swap filled and transparent areas inside compound paths.

Use this workflow when a hole in a compound path is filled, or when a hole that should be filled is transparent. InDesign decides fill versus transparency from each subpath's direction. Reversing that direction switches the result between holes and filled regions.

Open the document containing the compound path.

Select the compound path.

With the Direct Selection tool, select an anchor point on the particular subpath to change, rather than selecting the whole compound path.

Choose Object > Paths > Reverse Path. Reverse Path is also available in the Pathfinder panel (Window > Object & Layout).

## Break out compound paths

In Adobe InDesign, releasing a compound path breaks it apart so each subpath becomes an independent path.

Release a compound path when its pieces need to become editable shapes. The separated shapes keep the current fill and stroke settings.

Open the document containing the compound path.

Select the compound path with the Selection tool.

Choose Object > Paths > Release Compound Path.

Note

Release Compound Path cannot be used when the chosen compound path sits inside a frame or contains text.

## Create compound shapes

Use Pathfinder operations in Adobe InDesign to merge objects into editable compound shapes.

A compound shape can be handled as one object, or its component paths can be released for separate editing. For instance, one area of the compound shape can receive a gradient fill while other areas remain unfilled.

Open the document containing the objects.

Using the Selectiontool, select every object to combine.

Open the Pathfinder panel (Window > Object & Layout > Pathfinder).

In the Pathfinder panel, pick the option that matches the result you need:

- Add: merges the selected shapes into a single shape
- Subtract: cuts the front shapes out of the back shape
- Intersect: leaves only the area where the shapes overlap
- Exclude Overlap: leaves the regions that do not overlap
- Minus Back: cuts back shapes out of the front shape, producing holes

Usually, the new shape takes the frontmost object's fill, stroke, transparency, and layer settings. Subtract behaves differently: the front objects are discarded, so the remaining shape uses the backmost object's attributes.

When a text frame is part of a compound shape, only the frame outline changes; the text itself is not altered. To change the text, convert it to outlines first, then make the compound path. Release the compound path to break apart a compound shape.

## Apply clipping paths to graphics

Adobe InDesign can hide parts of placed images by using embedded paths, alpha channels, edge detection, or manually drawn paths.

Clipping paths are useful for isolating subjects and removing unwanted backgrounds from placed graphics without going back to the original image-editing application.

Imported artwork can be cropped with clipping paths so only chosen portions appear in the layout. The clipping path remains independent of the graphics frame, so the Direct Selection tool can reshape the path without changing the frame's size or placement. This method works with EPS, TIFF, and Photoshop files that include saved paths or alpha channels.

Three approaches can create clipping paths: use paths or alpha channels already saved in the graphic file, run automatic edge detection on images with solid backgrounds, or draw a path manually with the Pen tool.

### Use an embedded path or alpha channel

When graphics come from Photoshop or another image editor, Adobe InDesign can detect paths or alpha channels stored in the file and use them. Alpha channels identify transparent regions in an image; layer masks and background cleanup features commonly produce them.

Using the Selection tool, choose the imported graphic.

Open Object > Clipping Path > Clipping Path.

Open the Type menu, then choose Photoshop Path or Alpha Channel.

In the Path or Alpha menu, choose the exact path or channel to use.

Change the Inset Frame value if the clipping path boundary should contract or expand.

Turn on Invert to swap which areas are shown and hidden.

Click OK.

Note

If the Alpha menu is dimmed, no saved alpha channels are available in the graphic. Add alpha channels in Photoshop, then place the file in InDesign.

### Generate a clipping path automatically

Detect Edges evaluates tonal values so the lightest or darkest image areas can be hidden, especially on graphics with solid white or solid black backgrounds.

Using the Selection tool, choose the imported graphic.

Open Object > Clipping Path > Clipping Path. Turn on Preview in the Clipping Path dialog box to inspect results live while changing settings.

Open the Type menu, then choose Detect Edges.

Set Threshold to determine which pixel lightness values become transparent, beginning with white at 0.

Change Tolerance to smooth the clipping path by controlling how much variation from Threshold is accepted.

Use Inset Frame to move the boundary inward with positive values or outward with negative values.

Turn on Include Inside Edges when interior image regions should also become transparent.

Click OK.

Raising Threshold makes more pixels transparent because a wider span of lightness values is hidden. Lowering Tolerance produces tighter and more detailed paths with more anchor points, which can affect printing performance.

### Create a clipping path manually

For intricate outlines or situations that need tighter placement control, draw your own closed path first and place the graphic inside it.

Choose the Pen tool, then draw a closed path that matches the shape you need.

Choose File > Place, then select the graphic file.

With the Selection tool, select the path.

Choose Edit > Paste Into.

When the clipping shape needs cleanup, use the Direct Selection tool to move anchor points and refine the path.

Only the area inside the path you made shows the graphic. To shift the image within that boundary, select the graphic with the Direct Selection tool and drag.

### Remove or modify a clipping path

To discard a clipping path that has already been applied, select the graphic, then choose Object > Clipping Path > Clipping Path. From the Type menu, choose None, and then select OK. The graphics frame shows the complete uncropped image again.

For changes to a clipping path that already exists, either select and move separate anchor points with the Direct Selection tool or return to the Clipping Path dialog box and revise the detection options.

### Convert a clipping path to a graphics frame

To make the graphics frame permanently take on the clipping path outline, first select the graphic, then use Object > Clipping Path > Convert Clipping Path To Frame. InDesign swaps the rectangular frame for the path outline, so that clipping path becomes the frame edge.
