# Pathfinder Panel Overview, Combine Objects Using Pathfinder Effects, Create Compound Shapes With Pathfinder, Create Compound Paths ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Pathfinder panel overview; Edit areas of overlapping objects with Pathfinder; Create compound shapes with Pathfinder; Create compound paths; Transform objects; Transform panel overview; Scale objects; Scale multiple objects; Distort object; Distort objects with envelopes; Edit the contents of envelopes; Envelope panel options.

## Pathfinder panel overview

Review the Pathfinder panel controls that combine, subtract, or split objects according to their overlaps.

### Pathfinder panel

Open the Pathfinder panel with Window > Pathfinder, then review its available controls. Some results are grouped into paths, and others remain ungrouped.

### Pathfinder panel menu

Use the Pathfinder panel menu when you need its additional commands.

## Edit areas of overlapping objects with Pathfinder

Use Pathfinder options and effects when overlapping objects need to be joined, subtracted, or divided by the areas where they cross.

Pathfinder options and effects provide several ways to merge overlapping objects.

Pathfinder options and effects can also combine overlapping objects through different operations.

### Set Pathfinder options

Pathfinder panel options work on objects, groups, and layers. Applying one of these options edits the original objects permanently. Other options can build compound shapes, which preserve the source objects for later editing. Pathfinder options do not appear as removable, editable, or hideable entries in the Appearance panel.

Select the items that should receive the Pathfinder option:

- With the Selection tool, select the objects or the group.
- Choose one or more layers in the Layers panel.

Open Window > Pathfinder.

Open the panel menu and choose Pathfinder Options. Adjust any needed settings: Precision, Remove Redundant Points, and Divide and Outline Will Remove Unpainted Artwork.

In the Pathfinder panel, choose an option from either Shape Modes or Pathfinders. When the result includes more than one object, Illustrator groups those objects automatically.

To reuse the most recent Pathfinder option on another selection, choose Repeat <Pathfinder option> from the panel menu.

### Apply Pathfinder effects

Pathfinder effects from the Effect menu can be used only with groups, text objects, or layers that contain groups or text objects. The original objects remain editable after the effect is applied. You can use the Appearance panel to hide, change, or remove a Pathfinder effect.

Select the items that should receive the Pathfinder effect:

- With the Selection tool, select the group or text objects.
- Choose the layer in the Layers panel that holds the group or text objects.

Open Effect > Pathfinder, then choose an effect.

To reuse the most recent Pathfinder effect on another selection, choose Effect > Apply <Pathfinder effect>.

## Create compound shapes with Pathfinder

Create editable compound shapes by applying Pathfinder options that unite, subtract, intersect, or exclude overlapping objects.

A compound shape keeps its original objects available for editing, and other compound shapes can be nested inside it. Releasing the compound shape separates those objects again.

### Create a compound shape

With the Selection tool, select the objects that will become the compound shape.

Note

A compound shape can include selected paths, compound paths, groups, other compound shapes, blends, text, envelopes, and warps. Illustrator closes any selected open paths automatically.

Open Window > Pathfinder.

In the Pathfinder panel, Option-select (macOS) or Alt-select (Windows) a Shape Modes option to build the compound shape. Each object in that compound shape inherits the selected shape mode.

Use compound shapes when you want Pathfinder options applied non-destructively.

Note

Make Compound Shape in the Pathfinder panel menu is another way to create a compound shape. Make Compound Shape always applies the Unite option.

### Change the shape mode of objects within a compound shape

After a compound shape exists, additional compound shapes can be nested within it. For best performance, limit any nesting level to 10 objects.

With the Direct Selection tool, select some of the objects inside the compound shape.

Note

The backmost object's mode does not need to be changed, because that setting has no effect on the compound shape.

In the Pathfinder panel, choose a different mode from Shape Modes.

### Release the compound shape

With the Selection tool, select the compound shape.

In the Pathfinder panel menu, choose Release Compound Shape.

### Expand the compound shape

Expand keeps the compound object's shape but separates the original objects' paths. The result resembles choosing a Pathfinder panel option directly without Option (macOS) or Alt (Windows).

With the Selection tool, select the compound shape.

Select Expand in the Pathfinder panel. Depending on the shape mode, the Layers panel changes the compound shape to or <Compound Path>.

## Create compound paths

Build filled and transparent regions from overlapping paths by combining them into compound paths that follow fill rules.

With a compound path, overlapping object paths can share controlled filled areas and holes according to a fill rule. Even one path with overlaps or intersections can become a compound path that contains both fills and holes. Creating the compound path gives it the fill, stroke, and style attributes from the backmost object in the set.

Although a compound path acts like a grouped object, the Layers panel shows it as one item and does not provide separate management for its component objects. You can reshape individual components, but their appearance attributes, graphic styles, and effects cannot be adjusted separately.

### Cut holes in an object using other objects

One or more cutter objects can make holes in a base object when the objects are combined as a compound path:

With the Selection tool, select the base object, right-click it, then choose Arrange > Send to Back. Put the cutter objects in the needed order, and position them above the base object.

Use the Selection tool to select both the base object and the cutter objects.

Select Object > Compound Path > Make. By default, Illustrator creates a compound path with fills and holes from the non-zero winding fill rule.

Make a compound path to cut holes through an object.

### Change the fill rule for a compound path

A fill rule identifies which points from the component objects count as inside the compound path and therefore receive fill. Points outside that calculation become holes. The available choices are the non-zero winding fill rule and the even-odd fill rule:

Select the compound path with the Selection tool.

Open Window > Attributes.

In the Attributes panel, choose one of the two fill rules:

- Use Non‑Zero Winding Fill Rule : Sends a ray from a point toward infinity in any direction, then tracks a net crossing count for path segments. Beginning at zero, the count increases by one when a segment crosses left to right and decreases by one when a segment crosses right to left. A zero result places the point outside the compound path; any other result places it inside.
- Use Even‑Odd Fill Rule : Sends a ray from a point toward infinity in any direction, then counts path-segment crossings in a simple total. An odd total places the point inside the compound path; an even total places it outside.

Note

Adobe Photoshop and some other apps use the even-odd rule by default, so compound paths brought in from those apps use the even-odd rule.

### Change the areas containing fills and holes

For a compound path that uses the non-zero winding fill rule, reversing path direction in the Attributes panel changes which areas contain fills and holes. This does not always directly exchange filled regions with holes; it recalculates the result.

Open Window > Attributes.

In the Attributes panel, select Use Non‑Zero Winding Fill Rule.

With the Direct Selection tool, select only the portion of the compound path targeted for reversal.

Select Reverse Path Direction Off or Reverse Path Direction On.

### Release the compound path

With the Selection tool, select the compound path.

Select Object > Compound Path > Release.

## Transform objects

Adjust object position, dimensions, rotation, and pattern fills.

In Illustrator, the Transform panel displays and edits position, size, and rotation values for one or more selected objects. Depending on the transformation settings, entering new values can change the object, its pattern fill, or both.

### Specify transform patterns

Select Window > Transform.

Select the object that contains a pattern fill.

In the Transform panel menu, choose one of these options and change the object:

- Transform Object Only: changes the object while keeping its pattern fill as it was.
- Transform Pattern Only: changes just the pattern fill, leaving the object unchanged.
- Transform Both: changes both the object and its pattern fill.

Note

To repeat the previous transformation, select Object > Transform > Transform Again. You can continue using it until another transform operation is performed.

### Prevent patterns from transforming when using transform tools

Select Edit > Preferences > General (Windows) or Illustrator > Settings > General (macOS).

Clear Transform Pattern Tiles, then select OK.

### Transform using the bounding box

Choose the object that needs moving, rotation, duplication, or scaling.

Place the pointer over the bounding box, then use the relevant action:

- Move: click within the bounding box, then drag the object to the desired location.
- Scale: drag a side handle outward to enlarge or inward to reduce; hold Shift during the drag for proportional scaling.
- Rotate: move the pointer near a corner until the rotate icon appears, then drag.
- Duplicate: drag from inside the bounding box while holding Alt (Windows) or option (macOS).

Tip

Use View > Show Bounding Box or Hide Bounding Box to display or conceal the bounding box. After rotation, restore its orientation with Object > Transform > Reset Bounding Box.

### Transform using the Puppet Warp tool

Choose the artwork that you intend to reshape.

In the tool panel, choose the Puppet Warp tool.

Place at least three pins on the areas targeted for transformation.

Drag a selected pin to reshape the artwork.

For a twisting motion, choose a pin, move the pointer nearby until the dotted circle is shown, then drag to rotate the mesh visually.

## Transform panel overview

Use the Transform panel when you need numeric control over object size, position, rotation, scaling, and pattern behavior.

In Illustrator, custom numeric entries in the Transform panel let you move, scale, rotate, and shear objects. The same panel also handles object dimensions, placement, angle, pattern-fill adjustments, reference-point changes, and proportion locks.

Adjust object size, position, rotation, and corner scaling using the Transform panel.

A. X Value B. W Value C. Panel menu D. Constrain Width and Height Proportions E. Shear F. Scaling settings G. Rotate H. Y Value I. Reference Point

Adjust object size, position, rotation, and corner scaling using the Transform panel.

### Transform panel features

Note

Resize or reposition objects by editing the X, Y, W, and H values directly.

### Transform panel menu features

During transformations, the Transform panel menu provides controls for scaling behavior and for how objects, patterns, strokes, and symbols are handled.

Option

Function

Show Options or Hide Options

Shows the scaling settings when hidden, or hides them when shown.

Show on Shape Creations

Displays the Transform panel automatically while new shapes are being drawn.

Flip Horizontally

Mirrors the object across the vertical axis, using the reference point.

Flip Vertically

Mirrors the object across the horizontal axis, using the reference point.

Scale Strokes & Effects

When resizing, also changes stroke widths and applied effects in proportion to the object. The same control appears in the Transform panel scaling settings.

Transform Object Only

Transforms the object while leaving its pattern fill as it was.

Transform Pattern Only

Transforms only the pattern fill, without changing the object itself.

Transform Both

Transforms the object and its pattern fill together.

Use Registration Point for Symbol

For symbol instances, transformations reference the defined Registration point rather than the default Reference Point.

| --- | --- |

## Scale objects

Scale objects to organize a design while varying object sizes.

Scaling changes an object's horizontal size along the x-axis, vertical size along the y-axis, or both dimensions at once. The operation uses a reference point, and that point changes with the scaling method. For most methods, you can choose another default reference point and keep object proportions locked.

### Scale objects with the Scale tool

With the Selection tool, choose one or more objects.

Choose the Scale tool.

Use any of these actions:

- Scale from the object's center point by dragging anywhere in the document window until the size looks right.
- For another reference point, click in the document window to place it first, move the pointer away, then drag until the object reaches the desired size.
- Keep proportions while scaling by holding Shift as you drag diagonally. With the Scale tool and Shift, start the drag at a 45° angle from the horizontal or vertical.
- Scale along one axis only by holding Shift while dragging vertically or horizontally.

Begin the drag farther from the reference point when you need finer scaling control.

### Scale objects with the bounding box

With the Selection tool, choose one or more objects.

Choose the Free Transform tool.

The Selection tool can also scale objects through the bounding box.

Drag a bounding box handle until the object reaches the desired size; scaling uses the opposite bounding box handle as its reference.

Use these modifiers to control how scaling behaves:

- Keep proportions by holding Shift while dragging.
- Scale from the object's center point by holding Alt (Windows) or option (macOS) while dragging.

### Scale objects to a specific width and height

With the Selection tool, choose one or more objects.

Choose Window > Transform.

In the Transform panel, put replacement measurements into W, H, or both dimensions.

Set the width and height for scaling in the Transform panel.

Set the width and height for scaling in the Transform panel.

Before typing a value, use any of these controls to adjust scaling behavior:

- Keep proportions by selecting lock proportions .
- Change the scaling reference point by selecting a white square on the reference point locator .
- Scale stroked paths and size-related effects with the object by choosing Scale Strokes & Effects from the panel menu .

Another way to keep proportions is to enter a value in the W or H field, then hold Ctrl (Windows) or command (macOS) while pressing Enter.

### Scale objects by a specific percentage

With the Selection tool, choose one or more objects.

Use one of these methods:

- For center-based scaling, choose Object > Transform > Scale or double-click the Scale tool.
- For scaling around another reference point, choose the Scale tool, then Alt-click (Windows) or option-click (macOS) at the desired reference point in the document window.

Within the Scale dialog box, select one of these options:

- Uniform: keep object proportions while scaling; enter the percentage in the Scale field.
- Non-Uniform: scale width and height separately by entering percentages in the Horizontal and Vertical fields.

The reference point is the basis for scale factors, which may be positive or negative.

Set the scale percentage in Uniform or Non-Uniform proportions in the Scale dialog box.

Set the scale percentage in Uniform or Non-Uniform proportions in the Scale dialog box.

Select Scale Strokes & Effects when stroked paths and any size-related effects should scale with the object.

Tip

To scale a pattern fill inside the selected objects, select Transform Patterns. If only the pattern should change, deselect Transform Objects.

Choose OK, or choose Copy to create a scaled copy of the objects.

## Scale multiple objects

Scale several objects at once when you need consistent sizing and faster layout work.

Select the objects with the Selection tool.

Choose Object > Transform > Transform Each.

Note

Specific width values are not available when scaling multiple objects. Adobe Illustrator supports percentage-based scaling for this operation.

Set percentages for Horizontal and Vertical scale under the Scale category of the dialog box.

Switch between Relative and Absolute to control whether transforms scale proportionally or use exact values.

Switch between Relative and Absolute to control whether transforms scale proportionally or use exact values.

Select Relative or Absolute scaling.

Choose a white square on the reference point locator to set a different reference point.

Choose OK, or choose Copy to scale a copy of each object.

## Distort object

Use Adobe Illustrator distortion tools to reshape or design objects while leaving the paths unaffected.

### Distort objects with the Free Transform tool

With the Selection tool, choose one or more objects.

Choose the Free Transform tool.

Begin dragging a corner handle of the bounding box rather than a side handle, then use one of these modifier choices:

- Hold Ctrl (Windows) or Command (mac OS) until the selected artwork reaches the desired distortion.
- Use Shift + Alt + Ctrl (Windows) or Shift + Option + Command (mac OS) to apply perspective distortion.

### Distort objects using a liquify tool

The liquify tool set includes Warp , Twirl , Pucker , Bloat , Scallop, Crystallize, and Wrinkle.

Note

Linked files and objects containing text, graphs, or symbols cannot be edited with liquify tools.

With the Selection tool, choose one or more objects.

Choose a liquify tool, then click or drag across the objects you want to distort.

Select the objects first when the distortion should affect only those objects.

To adjust cursor size and other settings, double-click the liquify tool, then set any of these options:

- Width: sets the warp brush diameter.
- Height: sets the brush area's vertical span.
- Angle: sets the brush shape angle for direction-sensitive warping.
- Intensity: controls how forcefully the brush changes artwork; higher numbers distort more with each drag.
- Use Pressure Pen: uses graphics-tablet pressure to vary brush intensity.
- Complexity: raises the count of jagged or spiked distortions produced by each brush stroke. (Scallop, Crystallize, and Wrinkle tools only)
- Detail: controls how fine or granular the distortion pattern appears.
- Simplify: sets how much smoothing or simplification is applied to distorted paths; higher values use fewer anchor points. (Warp, Twirl, Pucker, and Bloat tools only)
- Twirl Rate: controls twirl speed and direction; positive values turn clockwise, and negative values turn counter-clockwise. (Twirl tool only)
- Horizontal: controls the horizontal amount of warping or crinkling. (Wrinkle tool only)
- Vertical: controls the vertical amount of warping or crinkling. (Wrinkle tool only)
- Brush Affects Anchor Points: sets direct brush movement for anchor points. (Scallop, Crystallize, and Wrinkle tools only)
- Brush Affects In Tangent Handles: lets the brush change the starting direction handles that shape the path. (Scallop, Crystallize, and Wrinkle tools only)
- Brush Affects Out Tangent Handles: lets the brush change the ending direction handles that guide curve flow. (Scallop, Crystallize, and Wrinkle tools only)

Specify the tool design options in the Liquify tool dialog box.

Specify the tool design options in the Liquify tool dialog box.

## Distort objects with envelopes

Use envelopes in Adobe Illustrator when artwork needs fast, creative distortion and reshaping.

With the Selection tool, choose one or more objects.

Build the envelope with one of these methods:

- Preset warp: choose Object > Envelope Distort > Make with Warp. In the Warp Options dialog box, pick the style and settings you want.

To define a wrap shape for your envelope, adjust the options from the Wrap Options dialog box.

To define a wrap shape for your envelope, adjust the options from the Wrap Options dialog box.

- Mesh grid: choose Object > Envelope Distort > Make with Mesh. In the Envelope Mesh dialog box, enter the row and column counts.
- Top object: to use an object as the envelope shape, first make sure that object sits above the other objects. If needed, move it upward with the Layers panel or an Arrange command, then reselect everything and choose Object > Envelope Distort > Make with Top Object.

Reshape the envelope using any of these actions:

- Use the Direct Selection tool or Mesh tool to drag an envelope anchor point. Reveal the Mesh tool by holding down the Gradient tool.
- Remove mesh-grid anchor points by selecting one with the Direct Selection or Mesh tool, then pressing Delete.
- Add mesh-grid anchor points by selecting the grid with the Mesh tool.

Tip

Use the Appearance panel when you want to apply a stroke or fill to an envelope.

## Edit the contents of envelopes

Edit envelope contents, reset an envelope, or remove one.

Select the envelope, then choose Edit Contents in the Control panel.

To work on the envelope's contents while keeping the distortion, choose Edit Contents in the Control panel.

To modify the envelope's contents without removing the distortion, choose Edit Contents in the Control panel.

Tip

Object > Envelope Distort > Edit Contents is another route for editing the contents.

If the envelope is made from grouped paths, expand the triangle beside the <Envelope> entry in the Layers panel so you can view and target the path to edit.

Make the desired edits to the original object inside the envelope.

Return to the enveloped view by choosing Edit Envelope in the Control panel.

### Reset an envelope

Select the envelope.

Use one of these approaches:

- For a preset warp reset or replacement, choose a new warp style and set its Control panel options. When additional settings are needed, choose Envelope Options to open the dialog box.
- For a mesh grid envelope reset or replacement, choose Object > Envelope Distort > Reset with Mesh. Enter the mesh grid row and column counts. Choose Maintain Envelope Shape to preserve the existing warp shape.

### Remove an envelope

Envelopes can be removed either by releasing them or by expanding them. Release separates the enveloped object into the original state and the envelope shape. Expand removes the envelope while preserving the object's distorted shape.

Select the envelope.

Use one of these commands to remove the envelope:

- Choose Object > Envelope Distort > Release to release an envelope.
- Choose Object > Envelope Distort > Expand to expand an envelope.

## Envelope panel options

Control how artwork distorts in Adobe Illustrator by setting envelope options.

Envelope options control the way art is reshaped to fit an envelope. To set them, select the envelope object, then choose Envelope Options in the Control panel, or choose Object > Envelope Distort > Envelope Options.

Note

When an envelope is expanded while a Distort option is selected, that property expands separately.
