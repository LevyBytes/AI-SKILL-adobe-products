# Manage Frames And Objects, Object Libraries And Snippets

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Convert frames and paths; Fit an object to its frame; Move a frame or its content; Select objects; Select nested or overlapping objects; Arrange objects in a stack; Crop objects; Add a border or background to a graphic frame; Apply object export options; Find and replace objects; Create and add snippets; Create object libraries; Open, close, or delete object libraries; Add and use objects in libraries; Manage library objects; Migrate object library assets to CC Libraries.

## Convert frames and paths

Use Adobe InDesign conversion tools to turn paths, text frames, and graphics frames into the object type your layout needs.

InDesign layouts rely on frames and paths to shape and organize page content. A path serves as a graphic shape, while a frame is a container for text or images. Converting among paths, text frames, and graphics frames lets you reuse existing geometry and revise the layout without rebuilding objects.

### Identify frame and path types

Use the Selection tool to choose the object.

Read the visual cues to determine what kind of object it is:

- Text frame: has ports at the upper-left and lower-right corners.
- Graphics frame: when no content is present, an X-shaped crossbar appears.
- Path: shown as a basic shape with stroke or fill attributes.

To verify, open Object > Content and note the currently selected content type.

### Convert between paths, text frames, and graphics frames

Use the Selection tool to choose the path.

Open Object > Content and choose the content type you need:

- Graphic: changes the object into a graphics frame ready for placed images.
- Text: changes the object into a text frame for typed or placed text.
- Unassigned: changes the object back to a path used as a graphic shape with no content.

Note

Before changing a frame's type, delete any text or graphics it contains. The conversion keeps the object's stroke, fill, and effects.

## Fit an object to its frame

Use Object Fitting commands in Adobe InDesign to control how placed content sits inside frames.

When a placed graphic and its frame do not share the same proportions, Object Fitting commands determine the adjustment. The commands can resize either the frame or the content, maintain proportions, fill available space, or center the image so the layout stays consistent.

### Apply fitting commands to frames

Use the Selection tool to select the frame.

Open Object > Fitting, then pick one of these commands:

- Fill Frame Proportionally: enlarges or reduces the content until the whole frame is filled, while keeping proportions intact.
- Fit Content Proportionally: scales the content so the full image remains visible inside the frame, with no cropping.
- Content-Aware Fit: evaluates important visual areas and adjusts the image to fit the frame.
- Fit Frame to Content: makes the frame dimensions match the content.
- Fit Content to Frame: forces the content to the frame size, which may stretch or compress it.
- Center Content: places the content at the frame center without changing its size.
- Clear Frame Fitting Options: clears frame fitting settings that were applied earlier.

### Set automatic frame fitting

Select the frame, then open Object > Fitting > Frame Fitting Options.

In the Fitting drop-down menu, choose the behavior for content when the frame is resized.

Under Align From, pick the reference point that anchors the chosen area of the content during frame fitting.

Enable Auto-Fit so the frame fitting updates during resizing.

Select OK.

### Independent frame and content adjustment

Use the Direct Selection tool to select either the image or the frame.

Move the image by dragging it inside the frame.

Move only the frame by dragging a frame edge, leaving the content in place.

Resize the content by dragging a corner handle.

Hold Shift while dragging to keep proportions.

To scale the frame and content as one unit, select the frame with the Selection tool, then hold Ctrl (Windows) or Cmd (macOS) and drag a corner handle.

## Move a frame or its content

Use selection tools and modifier keys in Adobe InDesign to move a frame, reposition the graphic inside it, or move both at once.

In InDesign, frame movement and content movement can be handled separately or together. That control lets you fine-tune cropping and image placement without resizing the frame or importing the graphic again.

### Move content only

Choose the Direct Selection tool.

Click the graphic when you want to move the content while the frame stays fixed.

Drag the graphic to a new position inside the frame boundary.

### Move frame only

Choose the frame with the Selection tool.

With the Direct Selection tool, click an edge of the frame border rather than the content.

Drag that border to move the frame while keeping its content where it is.

### Move the frame and the content together

Choose the Selection tool.

Click the graphic away from the content grabber (the round icon at the graphic's center).

Drag the frame to move it.

## Select objects

Use Selection tools in Adobe InDesign when you need to select objects, frames, and paths.

Selection tools are how you locate and edit frames, paths, and content. For broad layout work such as object positioning and resizing, use the Selection tool; for anchor points and path segments, use the Direct Selection tool for finer edits.

### Select a single object

Choose the object with the Selection tool.

For an unfilled path, click the path edge. For an image, click either its frame or the content grabber icon to select the image.

### Select multiple objects

With the Selection tool, select the first object.

Hold Shift while clicking additional objects to include them in the selection.

### Select objects using a marquee

With the Selection tool active, place the pointer outside the objects you want to select.

Drag on a diagonal to draw a selection rectangle that either touches or encloses those objects.

When the marquee touches or contains every desired object, release the mouse button.

### Select anchor points or path segments

Choose the Direct Selection tool.

Click the path so its anchor points appear.

Click an anchor point to select it; to add more anchor points, hold Shift and click each one.

To select every anchor point on a path, click the object's center point.

### Select content inside a frame

Use the Direct Selection tool to select the content.

For images, use the Selection tool and click the content grabber.

Another option is to select the frame, then choose Object > Select > Content.

### Select and deselect all objects on the spread

Activate the Selection tool.

For every object on the spread, use Edit > Select All.

To clear the current object selection, use Edit > Deselect All.

## Select nested or overlapping objects

In Adobe InDesign, Selection tools and menu commands let you reach items that sit inside groups or layered stacks.

Choosing one exact item can take extra care when frames contain other objects or several objects occupy the same area. InDesign gives you several ways to aim at the needed object. Nested objects can be paths held by frames, frames placed inside other frames, or groups contained within groups. Overlapping objects share a layer and sit in a front-to-back stack. Knowing how each selection method works makes complex page layouts easier to edit.

### Select objects in stacks using keyboard shortcuts

Activate the Selection tool.

Hold Ctrl (Windows) or Command (macOS), then keep selecting that same spot until the object you need becomes active.

After the selection reaches the lowest item in the stack, it wraps back to the top. To move upward starting from the bottom item, hold Ctrl + Alt (Windows) or Command + Option (macOS) while selecting.

### Select nested objects using menu commands

With the Direct Selection tool, choose the grouped or nested object.

Open Object > Select, then pick the needed submenu command.

- First Object Above: chooses the uppermost item in the stack
- Next Object Above: moves selection to the item directly over the current one
- Next Object Below: moves selection to the item directly under the current one
- Last Object Below: chooses the lowest item in the stack
- Container: chooses the frame that holds the current selection
- Content: chooses the material inside the selected frame
- Previous Object: moves to the prior item in the selection sequence
- Next Object: moves to the following item in the selection sequence

### Select nested objects using context menus

Move the pointer over the area where the object sits.

Use Right-click (Windows) or Control-click (macOS) to open the context menu.

Choose Select, then pick the option you need.

### Select multiple nested objects

With the Direct Selection tool, choose the first nested object.

Hold Shift while choosing each other nested object that should join the selection.

### Select all objects in a group

With the Selection tool, choose the group.

Select Select Content on the Control panel.

Use Edit > Select All.

## Arrange objects in a stack

In Adobe InDesign, arranging a stack changes which overlapping objects appear in front of or behind others.

When objects overlap, their order generally follows creation or import timing, so newer items normally sit in front. Arrange commands move an object within its current layer. For order changes between layers, work in the Layers panel because anything on a higher layer displays ahead of objects on lower layers.

### Change an object's position in the stack

Using the Selection tool, choose the object whose stack position you want to change.

Open Object > Arrange, then choose the command that gives the desired stack placement: Bring to Front, Send to Back, Bring Forward, or Send Backward.

### Reorder objects within a layer using the Layers panel

Use Window > Layers.

To show a layer's contents, select the right arrowicon beside the layer name.

Move an object's name higher or lower in the list to adjust where it sits in the stacking order.

## Crop objects

In Adobe InDesign, frames can change an image's visible area and composition while leaving the placed graphic unchanged.

Cropping with a frame hides selected image areas and can produce custom-shaped graphics without removing any original content. The crop works as a mask inside the frame, so hidden parts stay available for later repositioning, adjustment, or restoration.

### Crop by resizing the frame

With the Selection tool, choose the frame that contains the image to crop.

Pull any handle on the frame's bounding box inward to conceal part of the content.

While dragging a corner handle, hold Shift to keep the frame's original proportions.

Use Ctrl + 0 (Windows) or Cmd + 0 (macOS) so the page fits into the window.

### Reposition content within the frame

Activate the Direct Selection tool.

Choose the image inside the frame by selecting the graphic content itself.

Drag the image to place it differently inside the frame and expose another area of the content.

Hold Shift during the drag to limit movement to horizontal or vertical directions.

### Create shaped crops with custom frames

Build the shape with a frame tool. Examples include the Ellipse Frame tool or Polygon Frame tool, which you can reach by selecting and holding the Rectangle Frame tool.

Use File > Place.

Choose your image file, then select Open.

Choose the custom frame, then place the image so it fits automatically into that frame shape.

Use the Direct Selection tool to move the image within the shaped frame.

For more complex outlines, first draw a path with the Pen tool, then put an image into that path for organic or custom-shaped crops.

### Reset frame-content relationship

With the Selection tool, choose the frame.

Use Object > Fitting, then choose the fitting option that best suits the layout.

## Add a border or background to a graphic frame

In Adobe InDesign, graphic frames can be enhanced with borders and background settings.

InDesign uses graphics frames as containers for placed images, and those frames can have their own stroke and fill styling. Applying these settings to the frame adds borders or background colours without changing the graphic inside it. The frame styling stays in place when you replace the image, and it applies to placed graphics as well as empty placeholder frames.

Choose the graphics frame with the Selection tool.

Use Window > Color > Swatches.

Choose a color swatch to set the frame background fill color.

To set a stroke color, choose the Stroke icon, then pick a color swatch.

Use Window > Stroke, then modify Weight and Align Stroke.

## Apply object export options

In Adobe InDesign, export settings determine how frames and groups are represented in PDFs, EPUB, and HTML.

Object Export Options in InDesign control the export behavior of selected frames and groups for PDF, EPUB, and HTML output. These settings can carry accessibility details, preserve structure from the document, and improve how content appears in different formats. Settings assigned to a specific object take precedence over document-level preferences and can be configured separately for the needs of each export.

Choose the frame or group with the Selection tool.

Use Object > Object Export Options.

On the Alt Text tab, choose from the Alt Text Source drop-down menu to supply descriptions for screen readers.

On the Tagged PDF tab, choose from the Apply Tag drop-down menu to set the object's tag in exported PDFs.

On the EPUB and HTML tab, configure the Format, Size, and Custom Layout settings for digital publications.

Select OK.

## Find and replace objects

In Adobe InDesign, object formatting and effects can be updated across a document through search and replacement.

Find/Change can search for objects by formatting attributes and then apply unified formatting to graphics and frames in an InDesign document. The Object tab lets you find items with shared visual properties, including fills, strokes, effects, or transparency, and replace those attributes consistently. This helps keep a layout uniform without editing every object by hand.

Use Edit > Find/Change.

Choose the Object tab.

In the Find Object Format section, choose the Specify Attributes to Find icon.

When the Find Object Format Options dialog box opens, choose a formatting category on the left, set the attributes to search for, and select OK.

In the Change Object Format section, choose the Specify Attributes to Change icon.

When the Change Object Format Options dialog box opens, choose a formatting category, set the attributes to change, and select OK.

Use Find Next to reach the first matching object, then use Change for one replacement, Change All for every instance at once, or Change/Find to replace and continue to the next match.

Use Find Next to reach the first matching object, then choose Change to update that one, Change All to update every matching instance at once, or Change/Find to apply the change and proceed to the next match.

## Create and add snippets

In Adobe InDesign, reusable page elements can be saved as snippet files while retaining layout placement.

Snippets let you preserve and reuse page objects in InDesign while keeping their relative positions. They are saved as IDMS files (INDS in earlier versions) and can be placed at their original position or at a location you choose. Snippets retain layout structure, layer associations, and object relationships for consistent reuse in other documents. They can live in Object Libraries, Adobe Bridge, or the local system, and they use existing document resource definitions when those are available.

### Create a snippet file

Choose one or more objects with the Selection tool.

Use File > Export.

From Save As Type (Windows) or Format (macOS), choose InDesign Snippet.

Enter a file name, then select Save.

### Place snippets in a document

Choose File > Place.

Pick one or more snippet files (IDMS or INDS), and then choose Open.

Click where the snippet's upper-left corner should land.

Place more snippets the same way when needed.

### Choose how to place snippets

Open Edit > Preferences > File Handling (Windows) or InDesign > Preferences > File Handling (macOS).

In the Snippet Import section, set the Position at drop-down menu to Original Location or Cursor Location.

Choose OK.

While placing a snippet, hold Alt (Windows) or Option (macOS) to use the alternate placement behavior just for that placement.

## Create object libraries

Adobe InDesign can keep reusable graphics, text, and layout pieces in object libraries.

InDesign object libraries store reusable graphics, text, and page elements in a separate INDL file. The library keeps formatting, styles, effects, and link details with those items so they can be reused consistently. Use this workflow to keep project-specific assets together and reduce repeated layout work.

Choose File > New > Library.

Pick the destination for the library file. You can keep working with InDesign object libraries, or you can use Creative Cloud Libraries when assets need to be organized, browsed, and reached from multiple applications.

Type the library name in the File name field.

Choose Save.

## Open, close, or delete object libraries

Adobe InDesign lets you reopen library files, close their panels, or remove stored library files permanently.

Use InDesign object library controls to reopen existing INDL files, dismiss library panels, or delete library files from the computer. When a library is opened, it appears as a panel for reusing assets; closing affects only that panel in the workspace. Deleting the library file permanently removes it from local storage.

### Open an existing library

If the library is already available in the current session, choose its file from the Window menu.

When it is not already open, choose File > Open, and then pick one or more library files. InDesign updates libraries made in older versions to the current format and asks you to save the converted library under a new name.

### Close a library

When the current session already has the library open, choose the library file name from the Window menu.

Switch to the tab for the library that should be closed.

Open the panel menu icon, and then choose Close Library. Closing an object library only removes it from this session; the library file remains in place.

### Delete a library permanently

In Explorer (Windows) or Finder (macOS), find the library file (INDL).

Move the file into the Recycle Bin (Windows) or Trash (macOS).

## Add and use objects in libraries

Adobe InDesign libraries can hold reusable document objects for use in more than one project.

InDesign libraries store reusable assets such as logos, text, and grouped elements. The stored items retain object formatting, styles, and link information so reuse stays consistent. This approach keeps shared assets available across multiple documents and projects.

### Add an object or page to a library

Choose File > New > Library.

Move one or more objects from a document window into an active Object Library panel by dragging them there.

Other add methods are available after objects are selected: use the New Library Item icon in the Object Library panel; open the Object Library panel menu icon and choose Add Item; or use the panel menu icon and choose Add Items on Page [number] as Separate Objects to store the page contents either as separate entries or as one library item.

During any of those actions, hold Alt (Windows) or Option (macOS) to show the Item Information dialog box while the item is being added to the library.

### Add an object from a library to a document

Choose File > New > Library.

Drag an object out of the Object Library panel and into a document window. You can instead select the object in the panel and choose Place Item(s) to position it at its original X,Y coordinates.

For structured content, use the Structure panel (View > Structure > Show Structure): drag an XML element to a parent element there, or drag it directly onto the page.

## Manage library objects

Adobe InDesign object libraries support routine maintenance, organization, searching, and migration work.

Manage InDesign library objects by replacing assets that are no longer current, moving entries between libraries, changing how items are displayed, finding stored objects, and updating item information. These actions keep reusable assets organized, current, and easier to find across projects.

### Update a library object

In the document window, select the updated item.

Open the Library panel (File > Open), and then select the object that should be replaced.

Use the panel menu icon, and then choose Update Library Item.

### Copy or move objects between libraries

Detach one library panel by dragging its tab away from the Object Library panel group.

Drag an item from one library panel into another library panel when you want to copy it.

To move the item instead, hold Alt (Windows) or Option (macOS) while dragging.

### Remove objects from a library

In the Object Library panel, select one or more objects.

Remove the selection with any available control: right-click and choose Delete Library Item, drag the item onto the Delete Library Item icon, or open the panel menu icon and choose Delete Items.

### Change view and sort

Open the Object Library panel menu icon.

Set the display to Thumbnail View, Large Thumbnail View, or List View.

Open Sort options, and then choose the sort method.

### Search library objects

Open the Object Library panel menu icon.

For the subset command, choose either Show Subset or Show Library Subset.

Set the search scope to Search Entire Library or Search Currently Shown Items.

From the first menu in the Parameters section, pick a category.

Use the second menu to decide whether that category is included or excluded.

Type the search text.

Choose More Choices or Fewer Choices if extra criteria need to be shown or hidden.

Choose Match All or Match Any One.

Choose OK.

### Edit item details

Double-click an object in the Object Library panel. Another route is to open the panel menu icon and choose Library Item Information.

Change Item Name, Object Type, or Description.

Choose OK.

## Migrate object library assets to CC Libraries

Adobe InDesign can move assets from local object libraries into Creative Cloud (CC) Libraries.

Use migration to move InDesign object library assets from local INDL files into CC Libraries, where they can be accessed through cloud-based workflows across devices and Adobe applications. This shifts reusable design components into a shared collaborative library. Migration can include every asset in a library, or only selected items.

### Migrate all assets from an object library

Open the object library through File > Open, choose the library file, and open it.

Select the object library file, open the panel menu icon, and then choose Migrate item(s) to CC Libraries.

In the Migrate Asset dialog box, choose a new or existing Creative Cloud Library, and then choose OK.

### Migrate selected assets from an object library

Open the object library through File > Open, choose the library file, and open it.

In the panel, select one or more assets.

Right-click the selected assets, and then choose Migrate Selected Assets.

In the Migrate Asset dialog box, choose a new or existing Creative Cloud Library.

Choose OK.
