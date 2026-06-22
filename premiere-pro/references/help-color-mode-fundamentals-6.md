# Managing Multiple Color Operations, Applying Clip Operations, Applying Operations To The Sequence, Using Custom Groups

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Managing multiple color operations; Applying clip operations; Applying operations to the Sequence; Using Custom Groups.

## Managing multiple color operations

Using multiple operations in Color mode helps build flexible, organized, layered color adjustments.

Multiple operations let a grade be assembled in layers, with different adjustments combined into the final look. Rather than placing every change in one operation, you can split corrections, creative treatments, and targeted edits apart, making variations easier to test, compare, and refine. This method provides more control and flexibility, especially for work across multiple clips or for more complex grades.

### Why use multiple operations?

All required clip corrections can be made inside one Adjust or Style operation, but a grade can also contain several operations that work together on the image. Reasons include:

- Using Adjust and Style together on the image.
- Keeping the Adjust changes you like while trying additional changes in a separate Adjust instance that can be disabled or deleted if they do not work.
- Organizing several image tweaks across multiple operations so they can be mixed and matched with copy and paste for each clip's needs.
- Maintaining two variations of the same image-adjustment set through two Adjust operations. Alternately toggling them on and off lets both versions remain available while deciding which one works better.
- Creating isolated operations, also called secondary corrections, by applying masks for targeted image changes. This requires applying the mask to an additional operation dedicated to that correction.
- Applying operations at different grade levels: some on specific clips and others on separate or overlapping clip groups. The final program look can then be built from multiple operations acting together at different levels.

### Methods of using multiple operations

No matter why multiple operations are needed, adding and managing them is straightforward. These procedures cover the available ways to create, use, and arrange multiple operations.

### Create another operation

At any level, use the Plus icon (+) next to the final operation and pick the operation type from the menu. The created operation becomes selected automatically, so the controls below are immediately ready to edit.

Use the plus icon when adding an operation anywhere in the grade.

The plus icon also adds an operation at any grade level in the same way.

### Change an operation name

Double-click an operation name, type the new identifier for that operation, and finish with Return.

As an alternative, right-click an operation, choose Rename from the contextual menu, type the replacement name, and finish with Return.

### Make copies of operations

Select a single operation or a set of operations, right-click the selection, and choose Duplicate from the contextual menu.

### Change operation order

Drag an operation to move it before or after other operations. An indicator shows the insertion point during the drag. Release the button to place the operation there.

Multiple operations can also be selected and dragged together to a position before or after other operations. If the selection contains non-continuous operations, all of them are reinserted at the destination.

### Switch operations off and on

Select a single operation or several operations, right-click the selection, and choose Toggle Operation(s) from the contextual menu.

With a single operation or several operations selected, click the Toggle Selected Operations control in the upper-right corner of the Color Controls panel.

Tip

Toggling an operation reverses its current state. If one operation is enabled and another is disabled, toggling both swaps which one is active. This is useful when two operations are alternate versions and you want a quick preview of either one.

### Reset operations

After selecting a single operation or several operations, use the Reset Selected Operations button in the upper-right corner of the Color Controls panel.

### Move operations to another level

To move a single operation or several operations to another level, such as from Clip to a Custom Group, use either method:

Drag the operation from its current level to the target level; for example, drag it from Clip to Group 1. An indicator line marks the destination before you drop it.

Right-click the selected operation or operations and choose the destination from the Move To submenu.

### Remove operations

Select the operation or operations and press the delete key.

Select the operations to remove, then either right-click the selection and choose Delete from the contextual menu, or use the Delete button on the right side of the Color Controls panel.

## Applying clip operations

Clip-specific operations are useful for focused adjustments, and they fit into editing workflows in Adobe Premiere (beta).

With clip-specific operations, adjustments are applied to a single clip in the sequence, which makes them well suited to individual shot refinement. They can help with scene matching, tracked corrections, and clip-level effects, giving precise control exactly where it is needed. Because they attach directly to each clip and can be accessed from both Edit and Color modes, they support both quick fixes and detailed refinements without leaving the normal workflow.

### Why add clip specific operations?

Operations applied at the Clip level affect only that particular instance of the clip in the sequence. They are most useful for clip-specific work such as:

- Matching one clip to the other clips in the scene.
- Creating isolated adjustments with masks tied to that clip, including masks that need tracking or keyframing to follow motion.
- Building clip-specific special effects, including effects with keyframes.

Note

Keyframing is available only for Clip operations, and masking plus tracking are also limited to Clip operations.

### Editing the first Adjust Operation in Edit mode

In Edit mode, the Color section of the Properties panel can adjust a subset of global controls from the first Clip Adjust operation at the Clip level of the grade. These controls appear as clip-specific operations in a slider-based interface, giving editors a way to handle common problems while they work. Because the controls match the ones in Color mode, the same changes appear on the Adjust 1 operation there, keeping everything within the same grade.

Deleting the Adjust 1 operation makes the Properties panel connect to the next available Clip Adjust operation. If no Clip Adjust operation exists, a new one is created.

## Applying operations to the Sequence

Across a full timeline, Sequence operations help apply adjustments and maintain a consistent overall look in Adobe Premiere (beta).

Sequence operations apply color changes to an entire sequence at once, making them appropriate for unified looks and final refinements. They are processed after clip-level and group-level adjustments, so they affect the fully composited image and produce a clean, cohesive result. This makes Sequence operations especially useful for global corrections or stylistic treatments that connect the whole project.

### How Sequence operations work

At the Sequence level in a grade, an operation can target the whole sequence in one pass. That gives you a quick place to use Adjust or Style operations for corrective changes or creative treatments that should cover every clip in the program.

Within the image-processing order, Sequence operations come after compositing has already been resolved for the affected tracks. The color work is therefore applied on top of the composite result, unlike Custom Group operations, which are attached to each clip that belongs to that group.

In a grade, Sequence operations sit at the end of the color stack. That placement matters when a Style operation makes strong image changes, such as compressed contrast, major desaturation, or squeezed highlights: upstream Clip operations, which come first, and Custom Group operations, which sit between Clip and Sequence, still process the image before those more destructive-looking changes are applied.

Apart from that final position, Sequence-level operations behave like other operations. Use the Plus dropdown to add Adjust or Style operations, or move an existing operation into the Sequence level by dragging it from its current location.

You can also treat Sequence operations as project-wide baseline adjustments. For example, they can add overall contrast and warmth, or a small film-emulation color-and-contrast treatment, while Custom Group operations handle scene-by-scene differences. People often call this kind of Sequence operation a “show look,” but the workflow is intentionally flexible and the choice of level depends on how you want to manage the grade.

Tip

When a Style operation was added to the sequence but should later affect only selected clips, select those clips and drag the Style operation onto the selection. That moves the Style out of the Sequence and into a Custom Group.

### Limitations of Sequence operations

Because Sequence operations span more than one clip, they do not support masks or keyframes.

### Using the default Sequence Style operation

New sequences start with an empty Style operation named “Sequence Style 1” inside the Sequence level of the Color Controls panel. It is provided as a convenient slot for a Style preset or custom modules when you want a “show look” to establish an initial treatment for the whole program. The operation is optional and contains nothing until you use it.

### Omitting video tracks from Sequence operations

You can exclude one or more upper video tracks from all Sequence operations. This is useful for titles or graphics that need to remain “clean,” because those elements can be placed on tracks outside the reach of Sequence operations. New sequences default to Always Top Track, so Sequence operations affect clips on every track unless you change that boundary.

To set the video-track range for Sequence operations:

Open the context menu for the Sequence heading at the top of the Color Controls panel, then use the Set Track Position submenu to choose the boundary track; clips above that track are not affected.

Once a track position is chosen, Edit mode shows an icon to the right of the track header to indicate the Sequence operation boundary. Select that icon to pick another track from the menu, or choose Always Top Track when Sequence operations should affect every clip all the time. The icon is hidden whenever Always Top Track is active.

Note

Sequence operations never affect subtitles.

## Using Custom Groups

Custom Groups in Adobe Premiere (beta) are for applying shared adjustments to multiple clips so related shots can be graded faster and more consistently.

With Custom Groups, clips can be collected around the same color adjustments, which speeds grading for related material. An operation added to the group updates every member clip, reducing repetitive changes and helping the grade stay consistent. Groups are especially helpful for scenes, camera angles, or clips with similar traits because one edit can propagate everywhere it is needed.

### How Custom Groups work

In Color mode, a group is built from clip membership: create the group, add clips to it, and any operation placed in that group is applied to each member clip. In the example, nine clips from the first-half behind-the-scenes segment are placed in the default group, Group 01, so they all share Adjust 2. The group icon shows a clip-count badge, and an outline container surrounds the operations assigned to that group. Every distinct collection of grouped clips has its own operation container and name.

Clip and group levels determine whether an adjustment applies to one clip or to several clips together.

The clip-level versus group-level distinction controls whether grading changes are single-clip changes or shared across multiple clips. Tip

Group names can be edited as quickly as operation names: double-click the name and type the replacement. Descriptive group names make the grade easier to keep organized.

Use the Plus (+) button to add as many operations to a group as the grade requires, although one operation is often enough. You can also combine operation types in the same group as needed.

When you hover over or select a grouped operation, the Clip Grid identifies the member clips with a group badge at the upper-right corner of each thumbnail. In the example, the top row represents the behind-the-scenes portion of the sequence, and those clips are grouped for Adjust 2.

Changing Adjust 2 updates every clip in Group 01 immediately. Here, the behind-the-scenes material is made brighter and cooler through Adjust 2 by using the Contrast, Exposure, and Balance controls, so one operation change revises the entire scene.

### Groups make an efficient choice

Groups are an efficient way to change a set of related clips in one action. After a clip belongs to a group, edits to the grouped operation update all member clips, which makes grade iteration faster than copying and pasting or using other manual ripple methods. Typical uses include:

- Reverse shots from the same camera angle in a scene can be adjusted together so they match the rest of the scene more closely.
- Clips from a specific camera can be isolated by Codec, Resolution, or Frame rate, then given a camera-specific Adjust operation.
- A whole scene can use a shared Style to make it visually distinct.
- Clips with the same source media, such as a run of talking-head interview shots, can share one Adjust or Style operation through a group.

In practice, groups help whenever several clips share similar color and contrast needs and can use the same operations. Rather than grade one clip and copy the adjustment to the rest, create a group and manage that single operation from then on.

### Using multiple overlapping groups

One strength of this system is that a clip may be a member of several groups at the same time, with each group changing particular properties across overlapping clip sets in the program. For example, a clip can have a grade that uses three groups:

- Group 1, named “Director Group,” uses Adjust 2 to lighten and shift the reds for all clips containing the Director.
- Group 2, named “BTS Group,” uses Adjust 3 on every clip in the behind-the-scenes section of the sequence to make him easier to see.
- Group 3, named “Sequence,” uses two operations: Adjust 4 to change the color temperature across the entire sequence, plus a Style operation that adds a cinematic look to the entire sequence.

The screenshot also shows that grouped clips can still have Clip operations, such as Adjust 1. Clip operations remain available for clip-specific color changes even when the clip belongs to groups. This lets you combine individual adjustments and shared group adjustments by choosing the appropriate operation at the correct grade level.

You can grade from the outside in by starting with operations that affect large clip collections, getting the largest amount of work done with the fewest adjustments, and then narrowing to smaller sets of clips that share issues until the sequence reaches the intended color result.

You can also grade from the inside out by making clip-level tweaks first, then moving toward broader shared operations as the work settles. Neither direction is inherently better; the right approach depends on the project, the time available, and the adjustments the material needs.

### Creating Custom Groups

To create a group for clips that should be adjusted together:

In the Clip Grid, use Command-click to select separate clips or Shift-click to select a range, then include every clip that should share the grouped adjustment.

In the operation area of the Color Controls panel, wait for Selection to appear; then select its Plus (+) icon and choose the option for the operation type you want to create.

A group is created by adding an adjustment or style to the selected clips.

Adding an adjustment or style to selected clips creates the group.

Selection changes into a Group that contains the chosen operation type, and the Group icon shows a badge with the number of clips in that group. From that point, editing the grouped operation, such as Adjust 2, affects every clip that belongs to the group.

(Optional) For clearer organization, double-click the group name and replace it with a description of what the group is intended to do.

### Using Filter and Sort in the Clip Grid to create Groups

Because creating a group begins by selecting clips in the Clip Grid, Filter and Sort controls can make the first step much faster. Use them to isolate clips that are good candidates for grouping, such as clips from the same Source media, clips recorded on the same Date, clips using the same Codec, or clips sharing the same Scene metadata, etcetera.

After filtering and/or sorting narrows the set, choosing the clips that should share an adjustment becomes much easier.

### Editing grouped operations

Before editing a group, select a clip that belongs to it. Color mode keeps the interface focused by showing only the operations and groups that apply to the current Clip Grid clip, identified by the white outline.

After a group exists with at least one operation, editing grouped operations has no special extra rule. Any change to the grouped operation updates every member clip at once. That makes it straightforward to grade a set of clips together, such as applying a Style to an entire scene, and also makes later revisions simpler if you or a client choose a different direction.

### Modifying clip membership to grouped operations

Sometimes an existing group needs more clips added or existing clips removed. You can manage membership with drag and drop or with copy and paste, and the methods range from simple to more detailed. The procedures below are meant as starting points for thinking through the available grouping and ungrouping workflows.

### Add an additional clip to a group by copying entire grade

In the Clip Grid, select the clip whose grade should be copied, then copy it with Command-C or the contextual menu's Copy command.

Do one of the following:

- On another clip in the Clip Grid, open the contextual menu and choose Paste Grade to This Clip > Paste to Preserve Group Relationships.
- With multiple paste-target clips selected, use the contextual menu command Paste Grade to Selection > Paste to Preserve Group Relationships. (This capability is not available yet)

Tip

This method is commonly most helpful when a finished grade needs to move from already graded clips onto clips that have not yet been graded.

### Add clips to grouped operations by dragging

Choose one or more grouped operations that should include additional clips. If the group contains multiple operations, you may expand membership for only some of them; doing so splits one group with shared membership into multiple groups with different memberships.

Drag the selected operation(s) onto the clip that should join the group.

### Add clips to grouped operations by copying and pasting

Select a clip plus one or more grouped operations to copy, then use Command-C or the contextual menu's Copy command.

Do one of the following:

- On another clip in the Clip Grid, open the contextual menu and choose Paste Grade to This Clip > Paste to Preserve Group Relationships.
- With multiple paste-target clips selected, use the contextual menu command Paste Grade to Selection > Paste to Preserve Group Relationships. (This capability is not available yet)

### Remove clips from an existing group

Select one or more operations in the group that should be disconnected from one or more clips. For groups that contain multiple operations, clips can be disconnected from some operations but not from others; the result is that one group is split into multiple groups.

Next, in the Clip Grid, select the grouped clip or clips that should be disconnected from the operation(s) selected in step 1.

Finally, open the context menu on any selected operation and choose Remove Selected Clip.

### Turn grouped clips into a new operation group

Select a clip in the Clip Grid that has one or more grouped operations you want to apply to a different clip set, including the currently selected clip.

With the current clip still selected, choose a different set of clips that should receive the grouped operations. The only requirement is that the currently selected clip must be included in the new group.

Once the top of the Clip Grid shows an unused Selection to the right of the other operation levels, select one or more grouped operations to move and drag them into that selection to create a new group.

### Copying a Group to create a new Group

You may want to reuse an existing grouped operation, such as a Style, as the basis for a separate group that targets different clips and then diverges from the earlier Style. The workflow is simple.

To copy operations into a completely new clip group:

Select a clip in the Clip Grid that contains one or more operations you want to use when creating a new group for a different set of clips.

Select the operations to copy, then use Command-C or the contextual menu's Copy command.

Select the other clips that should become a new group in the clip grid. At the top of the Color Controls panel, open the context menu for the unused selection's icon and/or name, then choose Paste and Append Operations to Group.

The pasted grouped operation collects the selected clips into a new group that is not linked to the previous group. You can then tailor it for the new clips.

### Moving operations among different grade levels

When a Clip operation would be better as a grouped operation, or a grouped operation really belongs to only one clip, you can move operations between grade levels.

To move an operation from one grade level to another, use one of these methods:

Drag the operation between levels; the indicator line previews where it will be placed when you drop it.

Right-click one or more selected operations, then use the Move To submenu to choose the destination.

Copy the operation at its current level and paste it into another level.

### Deleting Custom Groups

Deleting every operation inside a custom group removes the group as well.
