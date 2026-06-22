# Copy And Paste For Grade Management, Isolated Adjustments Using Masks

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Copy and paste for Grade Management; Isolated adjustments using masks.

## Copy and paste for Grade Management

Copy and paste workflows in Color mode let you reuse and manage color adjustments across clips, operations, and groups.

These workflows are designed so adjustments can be reused at any level of a grade, whether the copied material is a complete look, a single operation, or one control. Since grades are structured as levels, operations, and control groups, you can decide exactly how much adjustment data to reuse. That flexibility supports faster work, consistent results, and precise placement of changes.

### Copy and paste workflows explained

An operation created for one clip can often help with another similar clip in the sequence, avoiding the need to build the operation again. For that reason, Color mode uses several copy-and-paste methods as a main way to manage grades for both clip-specific and grouped operations.

### Grade hierarchy uses levels and groups

A grade contains the full set of Color mode operations influencing a clip. Those operations are arranged in a level hierarchy, and each level targets a different set of clips. Clip-level operations affect only that instance of the clip in the sequence. Group-level operations affect all clips that belong to the group. Sequence-level operations affect every clip in the sequence except clips on excluded video tracks. Entire grades can be copied and pasted.

### Operations are organized by levels or groups

Each Clip or Group level can contain one or more operations. You can edit, enable, and manage those operations separately, giving the color work as much or as little organization as needed. Operations can be copied and pasted one at a time or in groups. When copying a grouped operation, you can decide whether the paste expands the original group, creates a separate new group, or places the pasted operations at the Clip level.

Note

Copying every control inside control groups or Modules is not currently supported.

### Operations are divided into Control Groups or Modules

Each operation is made from groups of color controls. For example, Adjust includes the Color & Contrast, Color Shift, and Texture groups. Style operations contain modules, with each module functioning as a control group specific to that module. Whole groups of color controls can be enabled, disabled, or reset together.

### Control Groups or Modules are divided into Color Controls

Color control groups and modules contain individual controls, and each control has one or two parameters, as with 2D controls, for adjusting the image in different ways.

A color-control setting can be transferred to a matching control in another operation on another clip, which quickly moves the control work from one place to another. For 2D color controls, the paste can also overwrite only one of the two copied parameter values.

### Color Controls are organized into Segments, Zones or Swatches

Some color controls can also be arranged into multiple segments. Segmentation lets one control set make separate changes to tonal zones, such as shadows versus highlights, or to different hues, such as red versus green versus cyan. Zones and color swatches can also be copied and pasted.

Together, the grade hierarchy is:

Grade > Clip/Groups > Operations > Color Control Groups/Modules > Zones/Swatches/Segments > Controls

Copy and paste in Color mode is built around that structure. It can copy a full grade from one clip to other clips, expand a grouped operation from one clip to other clips, copy one or more particular operations, or transfer a single color-control value between clips. The workflow can therefore be broad or highly specific, depending on what you need, and is intended to speed up reuse when an adjustment from one part of the sequence fits somewhere else.

### Copying and pasting operations with Keyframes

Keyframed operations can be copied and pasted at the Clip level while keeping their keyframes. When pasted, every keyframe is offset from the start of the destination clip by the same frame count used on the source clip.

Operations at Group and Sequence levels cannot be keyframed, so pasting a keyframed Clip operation into either of those levels removes the keyframes. Instead, the resulting operation receives the color values from the playhead position at the moment you copied/pasted or dragged/dropped.

### Paste and replace vs. Paste and append

Beyond deciding which part of a grade to copy and paste, you also choose how the paste should interact with operations already on the clip. The choices include:

- Paste so the incoming operations replace all existing operations at every level, effectively swapping the old grade for the new one.
- Append the incoming operations onto the existing operations, producing a final grade that combines the previous operations with the incoming operations at each grade level.

### Paste and replace vs. Preserving Group relationships

You also choose whether copied group operations paste back into the original group or become a separate group that is independent and customizable.

- Paste and Replace, when used after copying grouped operations, creates one or more new groups that are detached from the original group. Use this when operations from one group should become the starting point for a new group that you will adjust differently.
- Paste to Preserve Group Relationships expands the copied-from group so it also contains the clip(s) you are pasting to. Use this when copy and paste should add more clips to an existing group.

### Paste as Clip Operations

Paste as Clip Operations forces every pasted operation into the Clip level of the clip, flattening the copied set into one level of operations that affects only that clip. It also replaces any earlier clip operations with the incoming clip operations.

### Copy and paste whole Grades

In Color mode, a grade includes every operation at every level that applies to a clip, including clip operations, grouped operations, and any other intersecting operations. Copying the grade copies each operation that changes the image.

To copy and paste grades in the Clip Grid, use these steps:

When copying a grade, use one of these methods:

- Select a clip in the Clip Grid, then press Command + C.
- Open a Clip Grid clip's context menu and select Copy.

To apply the copied grade, choose one paste method:

- Use Command + V on the chosen Clip Grid clip or clips for Paste and Replace.
- With one or more Clip Grid clips selected, open a selected clip's context menu and choose an option from the Paste Grade to Selection submenu.
- For a single Clip Grid clip, open its context menu and choose an option from the Paste Grade to Clip submenu.

Available options in the Paste Grade to Clip submenu are:

- Paste and Replace: substitutes the pasted grade for the clip’s current grade. Incoming operations replace all existing operations, and grouped clip relationships are broken. Use it for quick grade copying without grouped operations, or when copied grouped operations should become the basis for new groups.
- Paste and Append: adds the pasted operations after the operations already on the clip. Use it when one or more individual operations should be added to an existing grade. Grouped operations paste as new groups unless the destination clip already contains the same group being copied.
- Paste as Clip Operations: places every incoming operation at the Clip level of that clip’s grade, so the operations affect only that clip.
- Paste to Preserve Group Relationships: substitutes the pasted grade for the clip’s current grade while keeping grouped clip relationships. Incoming operations replace all existing operations. Use it when the copied groups should expand to include the clips receiving the paste.

Choose whether copied grades replace existing grades, append to them, or keep group relationships intact.

Decide how copied grades should be applied: replacing, appending, or preserving group relationships.

### Copy or paste one or more operations

At the top of the Color Controls panel, you can copy and paste particular operations between clips.

To copy one or more selected operations:

Select one operation, use Command-click for multiple separate operations, or use Shift-click for a contiguous range.

Copy the selection with either method:

- Press Command + C for the selected operation(s).
- Open the context menu on one selected operation and choose Copy.

To copy every operation at the clip level or inside a group:

At the top of the Color Controls panel, open the context menu for the clip level or group's icon and/or name, then choose Copy.

To apply those operations on another clip, choose one of these paths:

Use Command + V on the chosen Clip Grid clip or clips for Paste and Replace.

With one or more Clip Grid clips selected, open a selected clip's context menu and choose an option from the Paste Grade to Selection submenu.

Right-click a specific clip in the clip grid and choose an option from the Paste Grade to Clip submenu.

At the top of the Color Controls panel, open the context menu for the clip level or group's icon and/or name, then choose one of the following:

- Paste and Replace Operations in Group: use this when the copied operations should completely overwrite and replace the current contents of that group or clip level.
- Paste and Append Operations to Group: use this when the copied operation or operations should be added to the current contents of a group or clip level.

To copy and paste by dragging:

Select one operation, use Command-click for multiple separate operations, or use Shift-click for a contiguous range.

Drag the selected operations onto another clip in the clip grid to apply them there.

Dragged operations are appended to the same grade level, Clip or Custom Group, that they came from. Dragging every operation from one custom group onto another clip quickly adds the new clip to that same group.

### Copy or paste individual controls and parameters

A color-control setup from one operation can be reused in another operation when the destination is the same kind of control. This helps when two areas need matching color treatment with the same adjustment values.

Copy and paste color-control operations this way:

Choose the clip and operation, then use the control's context menu to choose Copy.

Next choose the destination clip and/or operation, open the matching control's context menu, and choose one of the following:

- Paste: applies the copied parameter set together when one or both parameters were copied.
- Paste [individual parameter]: separate commands appear for either parameter that was available after copying a 2D color control.

### Copy and paste zones, swatches, or segments

Segmented color controls can transfer the complete adjustment contained inside a zone or hue segment. Zones in Color & Contrast and color swatches in Color Shift can be copied and reused this way.

Copy and paste color-control operations this way:

Choose the clip and operation, then open the context menu for a Zone or Color Swatch and choose Copy.

Next choose the destination clip and/or operation, open the context menu for the target Zone or Color Swatch, and choose Paste.

Tip

When the paste command is absent, that control type does not accept the copied content.

## Isolated adjustments using masks

In Adobe Premiere (beta), isolated adjustments use masks to limit color correction to chosen parts of a clip for more exact grading work.

Masks make it possible for isolated adjustments to change only selected image regions rather than the whole frame. A face, background area, object, or other subject can be targeted and refined separately, which helps emphasize attention, fix local problems, or build detailed grades inside one clip with tighter control.

### What is an isolated adjustment?

An isolated adjustment, also called a secondary correction in some grading tools, works by applying a mask to an operation so only the masked area, or everything outside it, receives the adjustment. For example, you might raise contrast on a person's face so the person is more prominent, alter a car's color, or darken background regions so they fall into shadow.

In the example below, the director needs to stand apart from the background, so the director is isolated before contrast is increased. The Object Mask tool used with a Clip operation is a good fit for that target.

### Creating isolated operations

To build an isolation, attach a mask to a Clip operation. Group or Sequence operations cannot be masked because tracking and keyframing do not operate across multiple clips at the same time.

Premiere (beta) includes several mask tools for different masking tasks: Object Mask, Ellipse, Rectangle, and Pen. Any of these tools can create isolated adjustments by masking an operation.

To isolate a subject by adding a mask to an operation:

Select the Clip operation you want to isolate. Keep the first Clip operation unmasked when possible so it can act as the primary operation for whole-frame adjustment, then create another clip-level operation for the mask.

Choose a mask tool from the toolbar; available choices include Object Mask, Ellipse, Rectangle, and Pen. This example uses Object Mask.

With Object Mask selected, move the pointer over the subject in the frame to preview the mask that will be created, then select the subject to apply it. Other mask tools may require dragging or clicking to draw the needed mask.

After the mask exists, select it in the Monitor to edit, resize, or track it.

With a mask selected, right-click the mask in the Monitor, or right-click the mask icon to the right of the operation where it is applied, to use these functions:

- Invert: reverses the image region isolated by the mask. When a face is masked, inverting affects everything outside the face.
- Track: follows the masked object when the subject moves.
- Change to Unassigned Mask: detaches a mask that was created for the wrong operation so it can be assigned to the correct operation or effect.
- Edit Properties: opens the Effects Control panel for additional mask properties.

Mask options let you refine, track, or invert isolated adjustments.

Mask options let you refine, track, or invert isolated adjustments.

For a moving subject, select the mask, right-click it, and choose Track. Premiere plays through the clip and fits the mask to the subject's motion as closely as it can.

If the track needs manual cleanup, or the mask must follow a specific animated path, enable Frame mode so keyframed mask transforms can be created over time. Return the mode to Clip when you need overall size changes that apply through the clip's duration.

When the mask is correctly following the subject, select the operation connected to that mask and make the required color adjustments.

### Other mask parameters in the Effects Control panel

In the operations area of the Color Controls panel, right-clicking a mask and choosing Edit Properties opens the Effects Control panel, where more mask controls are available.

Additional controls for masks include:

- Tracking controls and keyframes: start tracking bidirectionally, forward, backward, or one frame at a time in either direction for careful adjustments.
- Path keyframes (vector masks only): provides a keyframe track for Clip or Frame-based keyframes, letting mask animation improve tracking accuracy or follow a chosen motion path.
- Transform controls: separate Position, Scale, Rotation, and Anchor parameters for the Path keyframes.
- Feather: controls softening at the mask edge.
- Opacity: changes how translucent the solid portion of the mask is.
- Expansion: expands or contracts the whole mask.
- Inverted: flips which part of the mask receives the color controls.
- Blend Mode: Boolean choices that define how one mask combines with the preceding mask; options include Add, Subtract, and Intersect.

### Managing masks in the Color Controls panel

After masks are created, they can be controlled from either the Effects Control panel or the Color Controls panel.

### Unassigned masks

In the Color Controls panel, unassigned masks sit at the far right of the operations area. New Clip operations you create automatically receive unassigned masks. You can also copy and paste those masks onto multiple operations when the same mask should be reused.

Note

If you first apply a mask to the Adjust 1 operation on a clip that has no operations yet, the mask is made as an unattached mask. Creating a new operation assigns that mask. As a general practice, keep the first Clip Adjust operation available for an overall image adjustment.

### Multiple masks

An operation can contain any number of masks. When a different operation is selected, several masks on one operation are shown as a stack icon.

Selecting the stack icon opens the stack into separate mask icons that can each be selected and managed. Right-click an individual mask to control it on its own, including its Boolean relationship with earlier masks, or to invert, track, or delete it.

### Rearranging masks

To change mask order, cut a mask to the left with Command + X, then paste it back into the same operation with Command + V so it moves to the far right.

### Moving masks

Move masks between operations by cutting them with Command + X and pasting them with Command + V.

### Deleting masks

To delete masks, select one or more mask icons, right-click the selected icons, and choose Delete.

### Copy and paste masks

In either the Color Controls panel or the Effects Control panel, masks can be cut with Command + X, copied with Command + C, and pasted with Command + V.

Tip

The same mask can be copied to two separate clip operations so one operation affects the inside of the mask and another affects the outside. Remember that pasted mask instances are independent; editing one pasted copy does not update the other.
