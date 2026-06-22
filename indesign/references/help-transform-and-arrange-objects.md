# Transform Objects, Transform Multiple Objects, Object Transformation Settings Options, About Anchored Objects ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Move, scale, rotate, shear, and flip objects; Transform multiple objects and repeat transformations; Object transformation settings and options; About anchored objects; Transform anchored objects; Create and position anchored objects; Manage and update anchored objects; Group and lock objects; Create hidden and nonprinting objects; Align or distribute objects.

## Move, scale, rotate, shear, and flip objects

Use Adobe InDesign selection and transformation tools to place objects accurately and rotate them with control.

Layout refinement often involves moving page items or changing their angle. InDesign offers several ways to reposition objects or make precise adjustments. Before you transform an object, confirm that it is unlocked, because locked items cannot be changed. Move items with the Selection tools, use the arrow keys for measured nudges, or type exact coordinates in the Control or Transform panels.

### Move objects by dragging

Choose the Selection tool.

Choose the object, or hold Shift while choosing additional objects.

Move the pointer over the selection until it becomes a four-headed arrow.

Drag the object to the location you want.

Hold Shift as you drag to limit movement to 45° angles (horizontal, vertical, or diagonal).

To make a copy, hold Alt (Windows) or Option (macOS) during the drag.

### Move objects with the arrow keys

Choose the object with the Selection tool.

Use the keyboard arrow keys to move the object by 1-point increments.

Hold Shift while you press the arrow keys when you need larger movement increments.

### Move objects to precise coordinates

Choose the object with the Selection tool.

Choose Window > Object & Layout > Transform.

Type updated coordinates in the X field (horizontal position) or Y field (vertical position) to place the object at a precise location.

Press Enter.

### Rotate objects interactively

Choose the Rotate tool from the toolbar.

Set the reference point where the center of rotation should be.

Place the cursor away from the reference point, then drag around it to turn the object.

Hold Shift during the drag to restrict the rotation to 45° increments.

### Rotate objects to precise angles

Choose the object with the Selection tool.

Choose Window > Object & Layout > Transform.

Find the Rotation Angle icon, then type the rotation angle you want. Positive values rotate counterclockwise, negative values rotate clockwise.

Press Enter.

### Rotate objects around a specific point

Use the Selection tool to pick the object.

Choose Object > Transform > Rotate.

Type the rotation value in the Angle field.

In the diagram, choose a reference point to define the point the object rotates around.

Choose Preview to inspect the result before applying it, then choose OK.

## Transform multiple objects and repeat transformations

Use Adobe InDesign to resize, rotate, and duplicate several objects in one operation.

Applying transformations to multiple selected objects helps keep a layout consistent without grouping the items first. You can resize, rotate, or scale the selection as a set while keeping each object's relative placement intact. With more than one object selected, InDesign displays a transformation bounding box around the selection so the group can be adjusted as one unit.

### Transform multiple objects simultaneously

Select the objects with the Selection tool.

Drag across items to select more than one, or hold Shift while selecting extra objects.

Place the pointer over a corner handle on the transformation bounding box.

Drag the handle to resize the selected objects.

Hold Ctrl (Windows) or Command (macOS) during the drag to scale objects.

Hold Alt (Windows) or Option (macOS) during the transformation to apply the change from the center point.

### Duplicate objects while transforming

Select the objects with the Selection tool.

Use any of these tools to drag: Selection tool, Rotate tool, Scale tool, or Shear tool.

Hold Alt (Windows) or Option (macOS) while dragging to produce a duplicate.

Keep transforming until the duplicate is in position, then release the mouse button.

Hold Shift during the transformation to constrain it.

### Repeat transformations on other objects

Select and transform the first object or set of objects with any transformation method.

Select the other objects that should receive the same transformation.

Choose Object > Transform Again > Transform Again.

## Object transformation settings and options

Use the Transform panel to decide which anchor point controls object rotation, scaling, and other transformations.

Transformations are calculated from a reference point located on or near the object. The center point is used by default, but any of the nine positions in the object's bounding box can be chosen instead. The chosen reference point controls how objects rotate, scale, or shear when you use transformation tools or the Transform and Control panels.

### Change the reference point using the Transform panel

Select one or more objects with the Selection tool.

Choose Window > Object & Layout > Transform.

In the Reference Point locator, choose the point that should serve as the transformation origin. That reference point remains the default origin for later transformations until you change it again.

### Reposition the reference point to a custom location

Select the object with the Selection tool.

Choose the Rotate tool, Scale tool, or Shear tool.

Move the pointer over the reference point shown on the selected object.

Drag the reference point to any position on or near the object.

Place the pointer anywhere on the object or pasteboard to relocate the reference point there.

### Control how transformation values display for nested objects

Choose Window > Object & Layout > Transform.

Open the panel menu icon, then select or deselect Transformations Are Totals.

Transformations Are Totals is selected by default. When the option is enabled, nested object rotation, scale, and shear values are shown relative to the pasteboard. When the option is disabled, those values are shown relative to the container object.

### Include or exclude stroke weight in measurements

Choose Window > Object & Layout > Transform.

Open the panel menu icon, then select or deselect Dimensions Include Stroke Weight.

## About anchored objects

Understand how anchored objects in Adobe InDesign attach objects to text so their placement is preserved when text reflows.

Anchored objects connect page items, including images, text frames, and shapes, to a particular text location so they travel with the content during reflow. This behavior keeps related material together when document text is edited, resized, or moved.

### How anchored objects work

InDesign attaches anchored objects to text with an anchor marker, which is a small symbol placed at the precise insertion point where the object is connected. The marker functions as the reference point. If the text shifts to a different page or column, the anchored object shifts with it and keeps its connection to the content.

The anchor marker occupies no visible text space. The anchored object can sit inline with the text, above the line, or in a custom placement tied to the text frame, page, or margins.

Anchored objects may also take on properties such as rotation and skew from their parent text frame, which helps preserve a consistent appearance even when they sit outside the frame.

### Position types

InDesign offers three anchored-object positioning choices, based on the behavior needed in the layout:

Inline: Puts the object inside the text flow and aligns it to the baseline like a character. It travels with the text and works well for small graphics such as icons or symbols.

Above Line: Puts the object above the line that contains the anchor marker, giving it separate space. Alignment can be controlled relative to the text or page, which suits items such as pull quotes or small visuals.

Custom: Provides exact placement relative to the text frame, column, page, or margins. Use this option for sidebars, callouts, or larger elements that need more flexible positioning.

### Common uses for anchored objects

Anchored objects help when material must remain associated with particular text:

- Sidebars and callouts placed near the related paragraphs
- Figure numbers and captions kept with their images
- Icons or symbols associated with specific words or concepts
- Pull quotes connected to nearby content
- Margin notes carrying supplementary information
- Product images positioned with descriptions

They are particularly useful in documents that are edited often, where objects must automatically travel with the text.

### Behavior with text frame properties

Changes made to the parent text frame also affect anchored objects. If that frame is rotated or skewed, the same transformation carries over to its anchored objects, including ones placed beyond the frame edge. Rotation or skew can still be changed on a single anchored object while keeping the anchor relationship intact.

Resizing the text frame causes inline and above-line objects to update where they sit in the layout. Custom-positioned objects stay tied to their configured reference points; as those references move, the object may land in a different page position while continuing to align with its anchor.

### Working with type on a path

Inline and above-line anchored objects work with type on a path, so graphics can follow curved or custom text paths. Custom-positioned objects are unavailable in this context because non-rectangular paths do not provide defined positioning relationships.

### Relationship to traditional links

Anchored objects appear in the Links panel with placed assets, yet they remain part of the document itself. They differ from traditional links because they do not point to external files, so update or replace actions are not available for them. Use the Links panel to monitor where they are and their status.

Knowing how anchored objects behave makes it easier to build flexible layouts where related content remains aligned as page composition changes.

## Transform anchored objects

Rotate, scale, and reposition anchored objects in Adobe InDesign.

Although parent text frames pass rotation and skew to their anchored objects, each object can also be transformed on its own while the text anchor stays in place. Use transformations to change an anchored object's look or placement, including rotation, scaling, and repositioning, without breaking its tie to the text flow. InDesign applies rotation and scaling around the selected reference point, so that point controls the transformation.

With the Selection tool, choose the anchored object. A blue square indicator shows near the frame's upper-right corner.

Choose the Rotate tool, then drag away from the reference point to turn the object. To limit the angle to 45° increments, hold Shift as you drag.

Choose the Scale tool, then drag outward from the reference point to resize the object. To keep the object's aspect ratio unchanged, hold Shift while dragging.

To place the object somewhere else, drag it with the Selection tool.

For custom-positioned anchored objects, change X Offset and Y Offset in Object > Anchored Object > Options.

Open Window > Object & Layout > Transform, then type rotation angles or scale values when you need exact transformations.

When rotation pushes the anchored object past the text frame boundaries, open Object > Anchored Object > Options and set Position type to Custom so you can refine its placement.

## Create and position anchored objects

Attach graphics or text frames to text in Adobe InDesign so they travel with the story as content reflows.

In InDesign, anchored objects are image, graphic, or text frames bound to specified text positions; as the text reflows, those frames move with it. This keeps sidebars, callouts, icons, figures, and similar elements connected to the related passage without repeated manual adjustment. InDesign offers Inline, Above Line, and Custom positioning options for different layout requirements.

### Create an inline or above-line anchored object

With the Type tool, click the text position where the object should be anchored.

Choose Object > Anchored Object > Insert.

Under Content, choose Graphic, Text, or Unassigned according to what the frame will hold.

Enter the Height and Width for the placeholder frame.

In the Position menu, choose Inline or Above Line.

For Inline objects, set Y Offset to move the object above or below the baseline. For Above Line objects, set alignment to Left, Center, Right, Towards Spine, or Away From Spine.

Choose OK.

After the anchored frame exists, use File > Place to bring in content.

### Position a custom anchored object

Choose Object > Anchored Object > Options.

In the Position drop-down menu, choose Custom.

Enable Relative to Spine when the object should keep its location relative to the document spine while text shifts between pages.

In the Anchored Object Reference Point proxy, choose the point on the object that should serve as the alignment reference.

For X Relative To, pick the horizontal reference, such as Text Frame, Page Margin, or Page Edge.

For the Y Relative To menu, pick the vertical reference, such as Line (Baseline), Text Frame, or Page Edge.

In the Anchored Position Reference Point proxy, choose the point that marks where the object aligns against the selected references.

Change X Offset and Y Offset to fine-tune the object's placement from the alignment point.

Enable Keep within Top/Bottom Column Boundaries to stop the object from moving outside the text column as text reflows.

Select OK.

### Anchor an existing object to text using drag-and-drop

With the Selection tool, choose the object that you want to anchor.

Find the small blue square at the upper-right corner of the object's bounding box.

Drag that blue square to the text position for the anchor, then release the mouse to create it.

### Adjust or release anchored objects

Choose Type > Show Hidden Characters.

After selecting the anchored object, choose View > Extras > Show Text Threads to show the connection between the anchor marker and the object. InDesign displays that relationship as a dashed line.

With the Selection tool, select the anchored object and drag it to a different position. Inline and Above Line objects shift vertically, while Custom objects can be moved in any direction.

For resizing, choose the anchored object and drag a corner or edge handle. Its position settings update automatically so the relationship to the anchor point is preserved.

To detach the anchor while keeping the object, select the object and choose Object > Anchored Object > Release. The object changes to a regular frame and stays at its current page position.

## Manage and update anchored objects

View, reposition, resize, or release anchored objects in Adobe InDesign while keeping their connection to the text flow.

Once anchored objects are in an InDesign document, you may need to revise their size, position, or placement in relation to the surrounding text. InDesign includes several controls for managing anchored objects without disconnecting them from the text flow. These objects also take rotation and skew from their parent text frames, including when they sit outside those frames.

### View anchor markers and relationships

To show anchor markers in text, choose Type > Show Hidden Characters.

To display a dashed line from an anchor marker to its related custom-positioned object, select the anchored object with the Selection tool, then choose View > Extras > Show Text Threads. The dashed line runs from the anchor marker to the object's current reference point.

For anchor symbols on anchored objects, choose View > Extras > Show Frame Edges. Showing those symbols makes it easier to tell which objects are anchored.

### Reposition an anchored object manually

Move anchored objects on the page without breaking the connection to the anchor marker. The position type determines which method to use.

### Reposition inline objects

Choose the anchored object with the Selection tool or Direct Selection tool.

Drag vertically to change the object's offset from the baseline. In horizontal text frames, inline objects are limited to vertical movement; in vertical text frames, they are limited to horizontal movement.

With the Type tool, put the insertion point before or after the object.

Choose Window > Type & Tables > Character.

Use the Kerning (in thousandths of an em) field to change spacing between the object and the nearby text.

To place the object beyond the text frame, choose Object > Anchored Object > Options, then change Position to Custom.

### Reposition custom-positioned objects

Choose the anchored object with the Selection tool or Direct Selection tool.

Drag horizontally or vertically to move it. The object still keeps the position relationship to the anchor marker defined in Anchored Object Options.

If you move the text frame, the anchored object moves too unless its position is based on page margins or page edges.

### Resize an anchored object

Choose Object > Anchored Object > Options, then make sure Prevent Manual Positioning is deselected.

Choose the anchored object with the Selection tool or Direct Selection tool.

Drag a side handle for resizing in one direction, or drag a corner handle for two-direction resizing.

Hold Shift while dragging a corner handle to maintain proportions.

Note

Note: When an inline or above line object is taller than the text frame, it can become overset and disappear from view. Custom-positioned objects can also shift as they preserve alignment from their reference point.

### Release an anchored object

Choose the anchored object with the Selection tool or Direct Selection tool.

Choose Object > Anchored Object > Release. The object stays at its current page position, but it no longer follows the text flow.

For inline or above line objects, use the Type tool to select the anchor marker, then cut and paste the object outside the text frame.

## Group and lock objects

Group and lock objects in Adobe InDesign so multiple layout elements can be handled as one unit and protected from accidental changes.

Grouping combines selected objects for moving, transforming, or editing as a single unit while each object retains its own properties. Locking blocks unintended moves or edits, which helps safeguard finished layout elements during continued work. Objects may also be grouped across layers; when you group or ungroup them, InDesign manages their layer placement and restoration.

### Group objects

With the Selection tool, choose the objects to group.

Choose Object > Group.

### Ungroup objects

With the Selection tool, choose the grouped objects.

Choose Object > Ungroup.

### Lock objects

With the Selection tool, choose the objects to lock.

Choose Object > Lock.

### Unlock objects

When hovering over a locked object, use the Selection tool to click its lock icon.

Choose Object > Unlock All on Spread.

## Create hidden and nonprinting objects

Use the Attributes panel in Adobe InDesign to keep selected objects out of printed or exported output.

Through the Attributes panel, objects can be hidden or flagged as nonprinting, allowing them to stay in the document while being omitted from print and export results. Hidden objects disappear from the view and cannot be selected. Nonprinting objects stay visible on screen as references, including notes, guides, or layout markers. Either setting can be undone later without changing the document structure.

### Hide and reveal objects

Choose the object that should be hidden.

Choose Object > Hide.

Use Object > Show All on Spread when hidden items on the current spread need to be visible and selectable again.

Note

Items hidden on different spreads do not change. To expose hidden objects across the document, go to each spread and run Show All on Spread there.

### Create nonprinting objects

Choose the object or text frame that should be left out of print output.

Open Window > Output > Attributes.

Enable Nonprinting.

To return the item to standard print output, select the same object or text frame and turn off Nonprinting in the Attributes panel.

## Align or distribute objects

Use Adobe InDesign alignment references and spacing controls to line up or distribute objects with precise layout placement.

Balanced spacing and consistent object positions make layouts easier to control visually. InDesign includes tools for alignment and distribution that position objects against a selection, page margins, or the full spread. These controls help when several objects must share an edge or be spaced uniformly, while locked objects and text alignment remain unchanged.

### Align and distribute objects using the Align panel

Choose the objects that need alignment or distribution.

Open Window > Object & Layout > Align.

Pick the needed reference from the Align To drop-down menu.

In Align Objects, choose the option that lines up object edges or centers along the horizontal or vertical axis.

In Distribute Objects, choose a distribution control to space selected objects evenly by their edges or centers.

Turn on Use Spacing in Distribute Objects when you need a custom interval.

Type the spacing value that should separate the objects.

In Distribute Spacing, choose a distribute control to make the edge spacing equal.

Under Distribute Spacing, enable Use Spacing and enter a value for equal edge-to-edge spacing.

Hold Spacebar while dragging a selection handle to distribute the spacing proportionally.

### Adjust spacing using the Gap tool

Place the pointer in the gap between the objects whose spacing should change.

Choose the Gap tool.

Move the pointer into the space between two objects.

Drag to shift the gap while resizing the adjacent objects proportionally.

Use Shift-drag when only the nearest objects should have their spacing adjusted.

Use Ctrl (Windows) or Command (macOS) + drag when the gap itself should resize.

Use Alt (Windows) or Option (macOS) + drag to move both the gap and the objects together.

## See also

- [Characters](uxp-characters.md)
