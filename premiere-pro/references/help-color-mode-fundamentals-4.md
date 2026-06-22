# About The Clip Grid, Color Tools Panel Overview

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About the Clip Grid; Color Controls panel overview.

## About the Clip Grid

The Clip Grid helps you inspect, move through, and manage sequence clips while working in Color mode.

Use the Clip Grid as a visual map of the sequence, with each clip represented by a thumbnail in timeline order. It supports quick movement between clips, selection of the current clip, and more efficient color grading management. Because the thumbnails show clip relationships across the sequence, it becomes easier to travel through the timeline, compare shots, and apply corrections where they are needed.

### What is the Clip Grid for?

The Clip Grid is a non-editable sequence view. Each clip appears as a color-accurate thumbnail with all effects applied, using the sequence's aspect ratio so the thumbnail matches the clip as it appears in the Color monitor. The grid is meant for navigating the sequence being adjusted, choosing the clip to work on, applying color changes, and handling organizational tasks.

Unless a clip is disabled individually or sits on a disabled track, it appears by default from left to right in sequence timecode order, also known as record timecode. Clips from all video tracks are flattened into one row. When superimposed clips share the same sequence timecode for their first frame, the stack is represented from top to bottom as thumbnails running left to right.

### Using the Clip Grid vertically or horizontally

By default, the Clip Grid uses vertical column mode: one column of thumbnails runs from top to bottom along the right side of the screen. The arrangement may feel unfamiliar at first, but on many displays it uses space efficiently.

If preferred, drag the Clip Grid to the bottom of the display, or move it to the middle as a horizontal row.

### Navigating Sequence, choosing the Current Clip

Color-correcting every clip in a full sequence demands fast navigation. The Clip Grid is built to show as much of the sequence as possible through thumbnails sized by the user, making it easier to choose the current clip and begin work quickly.

The current clip is the clip that intersects the playhead. It is always marked with a white outline, and any color adjustment made in Color mode targets it. To change the current clip, use one of these methods:

- Choose a different thumbnail; Premiere Pro makes that clip current and jumps the playhead to the clip's opening frame.
- In Sequence mode, scrub the Color monitor time ruler; whichever clip intersects the playhead becomes current.
- Use Go to Previous Clip (Up arrow), or use Go to Next Clip (Down arrow).
- Within the Clip Grid, Up arrow and Down arrow step to Previous and Next clips.
- Left arrow and Right arrow step backward or forward one frame at a time.
- Use the J-K-L keys to shuttle through the sequence.

The Clip Grid marks the current clip and keeps that marking current as you move through the sequence.

As sequence navigation changes, the Clip Grid updates the highlight on the current clip. Tip

If a selected Clip Grid thumbnail does not appear in the Color monitor, it may be hidden below another clip. Enable Solo mode to turn off compositing and superimposed clips so only the selected clip is visible.

### Making selections

Targetable actions are based on the current clip's selection. At present, those actions are limited to making adjustments plus Copy and Paste.

### Copying and pasting grades

To copy every operation from one clip and paste those operations onto another clip:

Choose the clip you want to copy from by using one of these methods:

- In the Clip Grid, choose the thumbnail for that clip.
- While sequence mode is active, scrub the Color monitor time ruler to that clip.
- Press the Up or Down arrow keys to choose the previous or next clip.

For the current clip's operations, open its Clip Grid context menu and choose Copy, or press Command + C.

Choose the destination clip.

For the destination, open the current clip's Clip Grid context menu and choose Paste, or press Command + V.

### Customizing the Clip Grid

The Clip Grid can be customized in several ways: thumbnail content, thumbnail size, the number of thumbnails visible at once, and extra information for managing the workflow.

### Setting Clip Thumbnails

Use the hamburger menu in the Sequence tab at the top of the Clip Grid to choose Set Clip Thumbnails options: First Frame, Middle Frame, or Last Frame. This helps when the first frame of media in the sequence regularly does not represent the shot well.

### Resizing the Clip Grid

In the default Row mode, the Clip Grid can appear as a single horizontal row or a vertical column. Resize all thumbnails together by dragging the row's top boundary or the column's side boundary. Larger thumbnails help with viewing and comparing clips; smaller thumbnails show more of the sequence at once for quicker navigation.

### Seeing and hiding hidden clips

Disabled clips are omitted from Clip Grid thumbnails by default. The Show Hidden Clips button adds thumbnails for clips disabled individually or located on disabled tracks. When these clips are shown, a badge identifies them as hidden. This view is only for reference; hidden clips displayed in the Clip Grid still do not play in the monitor.

Tip

If there are clips you do not want to adjust, place them on a track that can be disabled so that track's contents are hidden in the Clip Grid.

### Grid vs. Row View

The Grid View button switches the Clip Grid to a multi-column or multi-row grid, allowing much more of the sequence to be visible at once. In Grid View, dragging the Clip Grid panel edge changes the number of rows or columns shown. A slider at the bottom of the Clip Grid changes individual thumbnail size. Grid density and thumbnail size are linked, so changing one changes the other to keep thumbnails fitting neatly together.

### Showing or hiding Clip Metadata

The Show Metadata button displays as many as two customizable metadata lines below each thumbnail. The amount actually visible depends on thumbnail size, and below a certain size the metadata disappears entirely.

Right-click or long-click the Show Metadata button to pick which metadata appears from a list. The number of enabled metadata fields determines whether one line or two lines are required.

The metadata options are:

- Label: shows the clip's label.
- Clip Name: shows the clip's name.
- Sequence Start Frame: shows the sequence timecode at the clip's in point.
- Codec: shows the clip's codec.
- Color Space: shows the color space assigned to the clip.
- Shot Number: shows the clip's number in the Clip Grid.
- Track Number: shows the track number where the clip appears.

The badge options are:

- Marker Badge: identifies clips that have markers.
- Visibility Badge: identifies clips that are visible.

Metadata presence and metadata count change how the Clip Grid looks, because the metadata area changes the aspect ratio of each displayed item in the Clip Grid.

### Filter and sort in the Clip Grid

After the basics feel comfortable, the Clip Grid can also help organize work, almost like a temporary to-do list, by using filtering and sorting to rearrange sequence clips in whatever way supports the task.

Filtering and sorting are non-destructive. They do not alter the sequence edit; they are temporary viewing modes that help you work more quickly.

### Filtering the Clip Grid

The Filter dropdown menu provides options that temporarily hide every clip except clips matching the chosen criteria. For example, choosing Source hides all clips except those that use the same source media as the current clip, making it quick to apply a correction and copy it to other clips that need the identical treatment.

When a filter is active and space allows, a tag appears beside the Filter and Sort controls. Clear the filter by clicking the tag's X button, or set the Filter menu back to All Clips (Default).

The available filtering options are:

- All Clips: default option that displays every clip in the sequence.
- Selected: after one or more clips are selected in the clip grid, this option hides everything except those selected clips. Use it to focus on a particular set of clips.
- Graded: displays only clips in the sequence that already have grades.
- Ungraded: displays only clips in the sequence that do not yet have grades.
- Source: displays clips that share source media with the current clip.
- Codec (lists codecs available for clips in this sequence): filters the view to clips with a chosen codec.
- Date Created (lists dates available for clips in this sequence): filters the view to clips from a chosen date.
- Frame Rate (lists frame rates available for clips in this sequence): filters the view to clips with a chosen frame rate.
- Label (lists labels available for clips in this sequence): filters the view to clips with a chosen label.
- Resolution (lists resolutions available for clips in this sequence): filters the view to clips with a chosen resolution.
- Scene (lists scene metadata available for clips in this sequence): filters the view to clips from a chosen scene.

### Sorting the Clip Grid

The default Clip Grid sort is Sequence Timecode, which displays clips in their edited timeline order. The Sort dropdown menu can temporarily reorder the Clip Grid by any available option. Choosing Clip Timecode, for example, groups clips recorded at the same time, which can make it easier to copy operations among related clips when speed matters.

When sorting is active, a tag appears beside the Filter and Sort controls if the layout has enough space. Remove the sort by selecting the tag's X button, or return to the Sort menu and choose Sequence Timecode (Default).

The available sort options are:

- Sequence Timecode: default mode that displays all clips in the clip grid by their order in the sequence, from left to right. For superimposed clips sharing the same In point, the topmost clip is listed first, followed by the remaining clips from top to bottom and left to right.
- Clip Timecode: a very useful alternate sort that orders clips by source timecode. Clips shot together then appear together, which helps when organizing clips for matching, for copy/paste, or for making groups.
- Graded: sorts the timeline according to whether clips are graded or ungraded.
- Scene: sorts clips using Scene metadata. This is especially useful when grading unedited stringouts.
- Date Created: sorts clips by each media file's Date Created intrinsic metadata.
- Name: orders clips by name.
- Label: orders clips by sequence label.
- Codec: orders clips by intrinsic codec metadata. This helps organize material from particular cameras or material encoded in a particular way.
- Resolution: orders clips by intrinsic resolution metadata. This is also helpful for organizing material from particular cameras or clips generated by a specific application or workflow.

Any selected sort criterion can use ascending or descending order.

## Color Controls panel overview

The Color Controls panel is where Color mode clips receive and manage their color adjustments.

### What is the Color Controls panel for?

Color mode centers on the Color Controls panel. Use it to arrange and operate the color tools that modify the selected clip in the Clip Grid.

All operations and controls for the currently selected clip appear in the Color Controls panel. Because it is a stand-alone panel, it can be moved to suit a custom layout. In the default layout, however, its position reduces travel between the clip grid and the adjustment controls, making it faster to choose clips and correct them one after another.

The panel width and compact adjustment-control design are intended to provide as much image adjustment power as possible in minimal space, preserving monitor size even on smaller displays. Evaluating the image is the priority, so the controls should stay out of the way.

### The operations area of the Color Controls panel

The Color Controls panel shows every operation applied to the clip currently selected in the Clip Grid. In the default layout, those operations sit in a row along the top of the Color Controls panel.

Vertical layouts show the operations as a column instead.

Each operation functions like a layer or node that contains color-tool changes.

### Levels of operations

Multiple operations can be applied to different sets of clips. The operations sit inside labeled boxes that indicate which clip set is affected at that level of the grade:

- Clip operations are for changes made to one specific clip in a sequence. They work best for individual tweaks, matching one clip more closely to the rest of a scene, or adding a color effect that should affect only that clip.
- Custom Group operations make changes to multiple clips at the same time, regardless of which clips are assigned to that group. They are useful when the same operation should apply to a range of clips, such as several talking-head interview shots of the same person from the same interview.
- Sequence operations affect every clip in the sequence (not available yet), except clips on excluded tracks. Use this level for a show look that should apply everywhere. Excluded tracks can be defined so material such as titles or graphics remains unaffected.

### Order of operations

Operations render in the image processing pipeline in the same left-to-right order in which they appear. Clip operations are always first, Sequence operations are always last, and Custom group operations render between them in their displayed order.

### Types of operations

Operations also come in multiple types, with each type providing tools and controls suited to particular work.

- Adjust: by default, a node labeled Adjust 1 appears at the Clip level. Adjust operations are meant for corrective clip changes, quality improvement, and precise modifications of many kinds. You can add as many Adjust operations as needed and use them for many effects.
- Style: these operations expose modules for a broad range of creative work. Modules can be mixed freely inside one Style operation to build almost any look, or you can start from Style Presets and customize a ready-made style.

Use Add Adjust for corrective work and Style for creative looks, depending on the task.

Choose Add Adjust for correction or Style for look creation, based on the workflow.

### Adding operations

Use the "+" menu to the right of the last operation to add operations.

### Simple operation management

Operations can be selected one at a time or in groups. After selection, the Toggle or Reset buttons in the upper-right corner of the Color Controls panel can Toggle or Reset every selected operation.

Right-click the title or icon of an operation level to open commands that manage all operations at that level together. From there, choose Copy, Paste, Toggle, or Select for every operation at that level.

Right-click one or more selected operations to open commands for only that selection. Those commands include Copy, Paste, Rename, Duplicate, Delete, and Move. Later sections describe this in more detail.

### Customizing the Color Controls panel

From the wrench menu in the upper-right corner of the Color Controls panel, you can change how that panel is presented in several ways.

- Show Labels: when this is off, the panel uses less room by replacing the labels and icons above each operation level with a tighter inline icon that still marks each level.
- Automatically Choose Layout: uses the Color Controls panel shape to choose the appropriate arrangement, Wrapping vs. Centered.
- Wrapping panel (For Vertical Layouts): uses a stacked vertical arrangement for editors who prefer a narrow, tall Color Controls panel in particular workspace layouts.
- Centered panel (For Wide Layouts): centers the panel content so wide layouts look better.
- Color Control Options: displays preferences that change the feel of the color controls in this panel; the next section covers those settings in detail.
- Color Heads-Up Display (HUD) Options: displays preferences for the HUD appearance; a later section explains those choices.
- Color Management: opens the Color Management panel, giving quick access to clip and sequence color management controls.

### Color Control options

Because these color controls are handled directly while grading, Premiere Pro offers several settings for how responsive they feel and how quickly they act.

- Sensitivity: sets the general pace at which controls change the picture. Move left for slower response, or move right for faster response.
- Link: keeps Vertical and Horizontal sensitivity tied together. Turn it off when Vertical adjustments, usually the main operation, and Horizontal operations, usually the customization, need different speeds.
- Horizontal sensitivity: after the link button is disabled, controls the general speed for picture changes made through horizontal controls.
- Lock to angle or axis: chooses the modifier used to confine 2D control movement to the vertical or horizontal axis. The default is Shift. Hold the modifier, move toward the desired adjustment direction, and that direction stays locked until the modifier key is released.
- Directional stability: during vertical or horizontal adjustment, a dead zone keeps small motion in the wrong direction from causing unintended changes. Moving the slider left shrinks the dead zone and allows looser movement in every direction. Moving it right expands the dead zone so accidental direction changes are less likely.
- Sensitivity modifier: defaults to Option. Holding this modifier changes the speed of Vertical and Horizontal adjustments.
- Sensitivity multiplier: defines whether holding the sensitivity multiplier makes control adjustments slower or faster.
- Nudge: controls the amount by which the arrow keys move a latched control parameter up, down, vertically, or horizontally.
- Shift Nudge: defines whether pressing shift makes control adjustments slower or faster.

### Color adjustment controls and Heads-Up Displays (HUDs)

Choosing an operation reveals the related color controls below it. With the default Adjust 1 operation selected, the panel shows Color & Contrast controls, Color Shift controls, and Texture controls. These tools are meant for narrow, surgical corrections that solve problems or create deliberate improvements.

Within each control group, the controls generally run from left to right in the order that tends to be most useful. When you do not know where to begin, start at the left with Contrast, then continue rightward until the image improves; for simple color and contrast tweaks, the Shift or Texture controls may not be needed.

Every operation provides quick, exact control over particular image qualities. Taken together, those operations modify the full image inside the frame.

To adjust a clip:

Choose any clip in the Clip Grid so the monitor displays it and the Color Controls panel shows its controls.

Use the controls in the Color Controls panel for the needed image adjustments.

- To latch into a control, use either method:
- Select once to latch the control on.
- Press the keyboard shortcut for the control you want to operate.

The monitor displays a HUD with additional image information to guide the adjustment.

After latching, move the pointer without continuing to hold the pointer button to change the value. While you move, watch both the monitor and the heads-up display (HUD), which shows how the adjustment is changing the image.

You can also press the Arrow keys to nudge that control's vertical or horizontal parameters. The nudge amount can be customized.

When the change looks right, accept it by clicking again or by pressing the same keyboard shortcut that opened the HUD. The HUD then closes so you can judge the image without the overlay.

Another option is to press and hold the left pointer button during the adjustment, then release it when finished.

### Heads-Up Display

Each control includes its own HUD. That overlay analyzes the clip for the specific control being used and includes indicators that show precisely how the adjustment changes the clip. HUDs appear only when needed while you move among adjustments. A later section gives more detail about HUD behavior.

### Two-Dimensional Controls

Color mode uses 2D controls throughout its tools. A 2D control usually pairs two related controls, making it practical to adjust both at the same time. This supports smoother, more expressive changes because you can test two settings together while viewing the result in the monitor.

Every 2D control includes a dead zone, similar to video game controls, so a deliberate vertical change does not accidentally add tiny horizontal changes, and the reverse is also true. These dead zones do not block combined horizontal and vertical movement; you can push through them easily. Their purpose is to keep hand instability from adding unwanted values while you are trying to make one specific adjustment.

If a control must be fully limited to vertical or horizontal movement:

- Hold Shift and move toward the direction you want to lock, which constrains the 2D control you are dragging to that movement angle. You can customize the shortcut for this function in the Color Control options found in the wrench menu of the Color Controls panel.

### Making Precision Adjustments

For any control, you can make the operation more exact or change it to run faster:

- Hold Option while dragging a control to change its operating rate, either slowing it down or speeding it up.
