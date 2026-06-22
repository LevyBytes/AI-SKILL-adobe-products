# Divide Or Split Objects, Cut Objects, Duplicate Objects, Offset Duplicate Objects ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Divide or split objects; Cut objects using the Knife and Scissors tools; Duplicate objects; Create duplicate objects using Offset Path; Edit similar objects; Edit groups with similar objects; About clipping masks; Create clipping masks; Edit clipping masks; Add, remove, or release objects from clipping masks; Hide parts of objects with clipping masks; Copy artwork using the clipboard.

## Divide or split objects

See how to cut objects apart or turn them into editable grid structures.

### Divide objects

The Divide Objects Below command behaves like a stencil or cutter: Illustrator uses the selected object to slice through objects underneath it, then removes that original cutter. Use these steps to divide objects:

Select the object to use as a cutter.

Move the cutter so it overlaps the objects you intend to divide.

Select Object > Path > Divide Objects Below.

### Split objects into grids

The Split Into Grid command turns one or more objects into rectangular objects arranged by rows and columns. It also lets you set the row and column Height, Width, and Gutter precisely, and can quickly add guides for artwork layout. Use these steps to split objects into grids:

Select the object. If more than one object is selected, the grid Illustrator creates takes its appearance attributes from the topmost object.

Select Object > Path > Split Into Grid.

Enter how many rows and columns to create.

Set any of these options:

- To define the dimensions for each row and column, enter Height and Width values.
- To define the spacing between rows and columns, enter a Gutter value.
- To resize the whole grid of objects, enter Total values.
- Select Add Guides when row-edge and column-edge guides should be created.

Adjust the number of rows, columns, and spacing to control how the selected object will be divided.

Adjust the number of rows, columns, and spacing to control how the selected object will be divided.

Select Preview to view the artwork preview.

Select OK.

## Cut objects using the Knife and Scissors tools

See how the Knife and Scissors tools cut objects in Adobe Illustrator.

Illustrator can slice artwork with either the Knife tool or the Scissors tool. Use the Knife tool for freeform cuts, such as breaking a shape into pieces or making custom editable shapes. Use the Scissors tool when you need to cut a path at exact points or segments, such as separating a path at anchor points or shortening a line.

Review how the Knife tool and Scissors tool work in Adobe Illustrator, along with the main differences between them.

### Cut objects using the Knife tool

Select the object to cut, then choose the Knife tool.

Drag over the object to divide it into separate shapes.

Release the pointer to split the object into separate shapes.

Use the Direct Selection tool to select and edit each shape on its own.

When smart guides are enabled, the Knife tool snaps automatically to anchor points and paths during the cut.

Tip

To make a straight cut, hold Alt (Windows) or Option (macOS) as you drag across objects.

### Cut paths with the Scissors tool

Select the path to cut, then choose the Scissors tool.

Click an anchor point or a path segment to cut it. Repeat the action for more cuts.

Use the Selection tool to move the cut segments or pull them apart.

## Duplicate objects

See how to duplicate objects in Adobe Illustrator with drag-and-drop or keyboard shortcuts.

Using a toolbar selection tool, select one or more objects: Selection, Direct Selection, or Group Selection.

Hold Alt (Windows) or Option (macOS), then drag the object while continuing to hold the key so Illustrator creates a copy. Hold Shift during the drag when you need to constrain the copy direction.

Note

The Layers panel can also duplicate objects when you need finer control over placement and organization.

## Create duplicate objects using Offset Path

See how to make duplicate objects with Offset Path or with the arrow keys.

Use Offset Path when a duplicate needs to sit a specific distance inward or outward from the original.

### Offset objects using the Offset Path

Select one or more objects with the Selection tool.

Select Object > Path > Offset Path.

In the Offset Path dialog box, set Offset, Joins, and Miter limit. Use the offset value in the Offset Path dialog box to place the duplicate object inside or outside the original.

Set the offset value to position the duplicate object inward or outward in the Offset Path dialog box.

### Offset objects using the keyboard

Select one or more objects with the Selection tool.

Hold Option (macOS) or Alt (Windows), then press an arrow key to copy the object and move that duplicate in the arrow direction.

Note

Movement uses the Keyboard Increment value configured in Preferences > General.

If duplication does not happen, confirm that the Keyboard Increment preference value is not zero.

To turn a mesh object into a path, use Offset Path with a zero value and remove the mesh shape.

## Edit similar objects

See how global editing in Adobe Illustrator applies one change across several similar objects at the same time.

When artwork contains repeated items such as logos or shapes, each instance does not have to be edited separately. Global editing in Illustrator lets you update matching objects quickly while keeping the design consistent.

Select one repeated object in the artwork with the Selection tool. Illustrator automatically highlights similar objects.

In the Quick Actions section of the Properties panel, select the Global Edit Options dropdown menu beside Start Global Edit. Global editing is limited to duplicated similar objects; it does not work with images, text, masks, links, plugins, or multiple selections.

Tip

The Control panel also includes the Global Edit Options dropdown menu.

Set the Global Edit Options to narrow the selection. The default selection includes all similar objects on every artboard.

Specify the Global Edit Options to refine the selection. By default, all similar objects across all artboards are selected.

In the Global Edit Options dropdown, use the Match section to locate objects with matching appearance or size:

- Select Appearance to locate objects that share the same fill and stroke. This option is on by default when plug-in or mesh art is selected.
- Select Size to locate objects that are the same size.

Use the On Artboards section to find similar objects on chosen artboards:

- In the Select dropdown menu, choose whether Illustrator should search all artboards or only specific artboards.
- In the Range field, enter which artboards to include in the similar-object search; examples include 1, 2, 3, or 4-7.
- Select Include Objects On Canvas to search similar objects both on the artboards and outside them; this is the default. Deselect it to restrict the search to objects inside artboards only.

The Result(s) section reports how many objects Illustrator selected for global editing.

Choose Start Global Edit from Properties panel > Quick Actions.

Use Start Global Edit to make consistent changes across similar objects.

Use Start Global Edit to make consistent changes across similar objects.

Make the changes you want. Similar groups update together. Global editing scales changes proportionally across every matched object. For example, changing a 100-point object height to 50 points also changes a 20-point object to 10 points.

End the session with Stop Global Edit from Properties panel > Quick Actions, or press Esc.

## Edit groups with similar objects

See how Adobe Illustrator can globally edit similar groups that contain matching objects.

Global editing works on similar groups with repeated elements such as logos or patterns. Start by using Global Edit Options to locate matching groups, then begin global editing. When you change one object inside a group, Illustrator applies that change to the corresponding objects in all similar groups, which keeps the design consistent and saves time.

From Properties panel > Quick Actions, open the Global Edit Options dropdown menu next to Start Global Edit to locate similar objects.

Tip

The Control panel also includes the Global Edit Options dropdown menu.

Choose Start Global Edit from Properties panel > Quick Actions.

Specify the Global Edit Options to quickly find and update similar objects across groups and keep your design consistent.

Specify the Global Edit Options to quickly find and update similar objects across groups and keep your design consistent.

Select the specific object within the group, then edit it as needed. For example, you can move, resize, restyle, or rotate objects inside the selected group. Edits made in one group are applied to corresponding objects in every similar group.

After applying edits, choose Stop Global Edit from Properties panel > Quick Actions, or press Esc.

Note

To leave an object out of global editing, Shift-click it to deselect it.

## About clipping masks

See how clipping masks use another shape to conceal portions of artwork, producing clean designs that stay inside defined boundaries.

A clipping mask is a vector object that controls which parts of artwork remain visible; anything outside that shape is hidden. It has two main parts:

- Clipping path: the shape that sets the visible area.
- Masked objects: artwork hidden outside the clipping path.

A clipping set combines a clipping path with masked objects. The set may contain multiple objects, groups, or complete layers.

### Guidelines for creating clipping masks

- Clipping masks can be created only from vector objects, although any artwork type can be masked.
- Masked objects are moved automatically into the clipping mask group in the Layers panel.
- Within a layer or group, the first object becomes the clipping mask for each sublayer or subgroup.
- Converting an object to a clipping mask automatically removes its fill and stroke.

## Create clipping masks

See how to build clipping masks that reveal only selected parts of artwork within a chosen shape while keeping the hidden content intact.

Before you begin

Make sure the Illustrator document contains at least two objects: one object for the mask and one or more objects to be masked. A clipping path must be a vector object.

Choose Window > Layers.

Create the objects you want to mask.

Put the objects behind the shape you plan to use as the mask. The mask shape, also called the clipping path, must sit above the other objects in the Layers panel. Drag layers up or down if the stacking order needs adjustment.

Select both the clipping path and the artwork that should be masked.

Right-click to open the context menu, then select Group.

In the Layers panel, select the layer or group's name, then select Make/Release Clipping Mask. Illustrator hides every part of the image outside the mask without deleting those areas.

Apply a clipping mask in the Layers panel to show only selected artwork within a shape.

Apply a clipping mask in the Layers panel to show only selected artwork within a shape.

## Edit clipping masks

See how changing clipping-mask shapes and contents controls which artwork areas remain visible inside defined shapes.

### Edit a clipping mask

Select Window > Layers.

In the Layers panel, select the group containing the clipping path and masked objects, then choose Object > Clipping Mask > Edit Mask.

Change the clipping path with one of these methods: Move: choose the Direct Selection tool, then drag the object's center reference point.

- Reshape: choose the Direction selection tool, then adjust its anchor points and handles.
- Apply a fill and stroke: add them to a clipping path when you need extra visual effects.

To select every clipping path in a document, deselect all artwork first. Then select Select > Object > Clipping Masks.

When editing is complete, click anywhere outside the clipping mask to leave edit mode.

### Edit paths within a clipping set

Place the Direct Selection tool on a visible segment of the path that sits inside the mask. Select the path when its outline is shown.

Change the path by moving anchor points and handles, or by assigning alternate fills and strokes.

For a clipped path, target the segment that is visible within the mask. Artwork outside the mask cannot be seen, but those hidden portions remain editable.

## Add, remove, or release objects from clipping masks

Use clipping masks to decide which portions of objects appear in the artwork.

In Adobe Illustrator, a clipping mask hides artwork outside a vector boundary, known as the clipping path, while leaving the area inside that boundary visible. Together, the clipping path and masked objects make a clipping set, and you can change that set by adding objects, taking objects out, or releasing them.

Select Window > Layers.

In the Layers panel, locate the group or layer where the clipping path resides.

Use the option that matches what you need to change:

- Add an object to the clipping mask: Move the object into the group or layer where the clipping path resides.
- Remove an object from the clipping mask: Move the object out of that clipping-path group or layer.
- Release objects from a clipping mask: Choose the group containing the clipping mask, then choose Object > Clipping Mask > Release.

Note

Once a clipping mask is released, the clipping path remains in the document. Because it has neither fill nor stroke, it is invisible until you select it and give it color or an outline.

## Hide parts of objects with clipping masks

Set up a clipping mask when you need only the content inside a shape to appear, leaving the original artwork intact while hiding the rest.

Note

Start with at least two objects: one object for the clipping path and one or more objects to be masked.

Use a vector shape for the clipping path. If several overlapping shapes make up that path, group them before continuing.

Create the vector shape that will act as the mask. This object becomes the clipping path.

Select Object > Arrange > Bring to Front so the clipping path sits above the artwork that will be masked.

Keep that clipping path placed over the objects you plan to mask.

With the Direct Selection tool, select both the clipping path and the objects that should be masked.

Select the objects to be masked before you apply the clipping path.

Select the objects to be masked before you apply the clipping path.

Select Object > Clipping Mask > Make to create the clipping mask. When the mask is correct, Illustrator shows only the area of the object inside the clipping path, while content outside it is hidden.

Check the artwork after the clipping mask is applied.

Check the artwork after the clipping mask is applied.

## Copy artwork using the clipboard

Move selected artwork from Illustrator into other Adobe apps, including Adobe Photoshop and Adobe InDesign, by using the clipboard.

When Illustrator copies artwork to the clipboard, it stores a PDF or AICB version. PDF keeps transparency, while AICB lets you choose whether the copied selection should retain its overall appearance or be transferred as paths. Those paths are placed on the clipboard as PostScript language descriptions so they can be imported.

On macOS, open Illustrator > Preferences > Clipboard Handling. On Windows, open Edit > Preferences > Clipboard Handling.

Select PDF, AICB, or both.

If AICB is selected, use one of these choices:

- To remove transparency from copied artwork, select Preserve Paths.
- To flatten transparency, select Preserve Appearance And Overprints; this also keeps the artwork's appearance and overprinted objects.

Note

- On Windows, Illustrator no longer turns on Include SVG Code by default. For pasting artwork into apps that need SVG formats, such as web-based editors, open Edit > Preferences > Clipboard Handling and select Include SVG Code.
- On macOS, Include SVG Code is selected by default.
