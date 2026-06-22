# Rectangle Ellipse And Pen Masks, Object Masking, Create Masks Using Shapes, Refining And Combining Masks ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Redesigned Rectangle, Ellipse, and Pen tools; Object masking in Premiere; Create masks using shapes; Refining and combining masks; Apply effects to existing unassigned masks in Premiere; Copy, paste or move masks; Adjust mask properties; Mask tracking tools in Premiere; Adjust masks at the clip or frame level in Premiere; Track masks; Masking tool actions and modifiers.

## Redesigned Rectangle, Ellipse, and Pen tools

Understand how the revised Rectangle, Ellipse, and Pen tools improve mask creation workflows in Adobe Premiere.

Premiere masking tools now support more precise and efficient editing workflows. The redesigned Rectangle, Ellipse, and Pen mask tools change how masks are created and manipulated in Premiere. They provide stronger control over shape parameters, drawing behavior that is easier to predict, and closer integration with the Effect Controls panel. Whether you are isolating subjects for color correction, making selective blur effects, or constructing complex animated reveals, these updates make mask creation more predictable and precise.

Note

All masking tools are now available from the toolbar. Long-press the tool group to see the other options.

Use object masking tools in the Tools panel when you need precise isolation and editing of specific video areas.

The Tools panel object masking tools help isolate and edit targeted parts of video with precision.

### Ellipse Mask Tool

Use the Ellipse Mask Tool for ovals and circles. Hold Shift while dragging when you need a perfect circle. The Ellipse Mask Tool defaults to a bounding box, which lets you scale, stretch, squash, and rotate the mask. Because ellipses are most often used for color grading faces, this default is the better ellipse behavior. Double-click the Ellipse Mask Tool to leave bounding box mode and work with the individual control points.

### Rectangle Mask Tool

Drag to draw a rectangle without constraints. Hold the Shift key while dragging to make a perfect square. Rectangles do not start in bounding box mode by default, so the individual points are immediately editable. Because perspective often makes rectangular objects in video something other than perfect squares, direct access to the control point is usually preferable. Double-click to turn on bounding box mode.

### Pen Mask Tool

The Pen Mask Tool is for irregular shapes and can include as many control points as needed. Click to place a control point. Click and drag to draw a Bezier curve. Click the starting control point again to close the shape. A finished mask requires at least three control points. On masks made with other vector mask tools, the Pen Mask Tool can add, remove, or convert linear and Bezier control points.

Note

The Pen Tool for graphics can also edit mask control points.

### Bounding Box Mode

The bounding box gives you a straightforward way to scale or rotate any vector mask. Double-click inside the mask to enter or leave bounding box mode. Drag the sides or the corners. Hold the Shift key to keep proportions constrained. To rotate a mask, move the cursor just outside a control point. When the cursor changes to a curved double-sided arrow, drag to the required angle. Hold the Shift key to limit rotation to 45º angles.

### Horizontal and vertical constrain

When you drag a mask or selected control points, hold the Shift key to limit the motion to horizontal or vertical movement.

## Object masking in Premiere

### Use Object Mask in Premiere to isolate and track people or objects with AI-assisted masking, then apply effects, color work, or selective blur without sending the shot to After Effects.

### Object Mask

Object Mask analyzes footage with AI so Premiere can find people and objects automatically. After one click selects the subject, the mask can isolate it and follow it through the shot. Typical uses include:

- Blurring faces when privacy must be protected
- Restricting color correction to selected objects
- Building selective effects that stay attached to moving subjects

Use the Object Mask Tool when you want Premiere to detect and select people or objects in the Program Monitor.

Use the Object Mask Tool when you want Premiere to detect and select people or objects in the Program Monitor. Note

Premiere downloads the needed Object Masking models the first time this feature is used. During that download, Object Masking is unavailable, and the Program Monitor shows a loading indicator. The Progress panel reports download status. After the models finish downloading, Object Masking becomes ready for normal use.

### Object Mask quality modes

Object Mask offers two quality choices, Sharp and Smooth modes, so the mask behavior can match the subject and the editing workflow.

### Sharp mode

Sharp mode creates binary masks with clean, crisp borders. This matches the earlier Object Mask behavior, now identified with the Sharp label.

Sharp mode works well for:

- Objects that have clear, distinct boundaries.
- Standard masking work where accurate edges are important.

Sharp mode separates the subject with firm, exact borders for precise masking.

Sharp mode separates the subject with firm, exact borders for precise masking.

### Smooth mode

Smooth mode generates masks with gentler edges, which helps when the subject contains fine detail. Smooth mode is useful with:

- Hair, fur, or fabric texture work.
- Subjects whose borders are intricate or delicate.
- Semi-transparent or translucent material.
- Cases where the mask edge should blend naturally.

Smooth mode handles detailed textures and blends the mask edge in a more natural way.

Smooth mode handles detailed textures and blends the mask edge in a more natural way. Note

The mask expansion parameter is unavailable in the Effects Control panel when Smooth mode is used.

### Selecting an object or a person

To begin selecting, choose the Object Mask Tool from the toolbar and move over the Program Monitor. Premiere highlights prominent selectable objects, and clicking one of those highlighted areas selects it.

When the desired object is not highlighted automatically, rough it in with the Rectangle or Lasso tool. Premiere then detects the object inside that drawn region and selects it.

Object Mask selection supports three approaches for choosing an object or a person:

- Hover, then click
- Draw with the Rectangle tool
- Draw with a Lasso tool

Use the Rectangle or Lasso tool for manual object selection, and hover in the Program Monitor to reveal or hide the preview.

Use the Rectangle or Lasso tool for manual object selection, and hover in the Program Monitor to reveal or hide the preview. Tip

For best mask quality, start from a frame where the object is clearly and prominently visible.

Use the dropdown at the bottom of the Program Monitor to switch between Lasso and Rectangle.

### Mask refinement

The + and - buttons let you add objects, remove objects, or correct parts of the Object Mask. The Option or Alt modifier key can temporarily switch the + and - modifiers. The same selection methods used for the initial selection also apply during refinement.

- To add or remove full highlighted objects, click the object.
- To add or remove portions of an object or person, draw a rectangle or lasso around the target area. Premiere detects that section and applies the requested change.

### Mask data storage

Object Mask data can become large, so Premiere avoids storing it directly inside the project file where it could slow performance and increase project size. Instead, the mask data is stored externally in a folder beside the project file. That folder uses the name <Project Name> Masks so it can be identified and managed easily.

The matching mask folder must remain available for the project to access those masks. When you move or share the project, move the mask folder with the project file.

If Premiere cannot find the project's mask folder, Object Masks are marked offline and cannot be used. Only Object Masks are affected; other mask types are not impacted.

### Locating an offline mask

Opening a project that contains an offline mask presents controls for locating the missing mask data. Select Locate to browse to the mask folder when you have access. That action reconnects the mask and makes it usable. Select Not Now if you want the project to open anyway while the missing masks remain marked offline.

When a project opens with an offline mask, Premiere shows these choices:

- Select Locate to browse to the mask folder if you can access it. Premiere reconnects the mask and restores availability.
- Select Not now to open the project while keeping offline masks marked as offline.

### Working with offline masks in the Effects Control panel

The Effects Control panel marks offline masks as offline. You can reconnect them from that panel by selecting Locate.

The Effect Controls panel reports when object mask data is unavailable.

The Effect Controls panel reports when object mask data is unavailable. Note

If several offline masks use data from the same folder, locating that folder restores all of those masks together.

### Mask quality feedback

Object Mask quality feedback can be sent from the Effect Controls panel. Select the Provide Feedback icon beside an Object Mask entry, choose whether the quality was satisfactory, and add optional details if needed.

## Create masks using shapes

### Create and apply shape masks to clips in Adobe Premiere.

Shape masks in Adobe Premiere let you isolate chosen parts of a video frame and manipulate those areas for polished effects or transitions.

Shape masks restrict where an effect affects a clip. The Mask tools create the masks, which can then be assigned to blur, color correction, opacity, or other effects.

Choose the clip on the Timeline.

In the Toolbar, hold Object Mask Tool and select Ellipse Mask Tool, Rectangle, or Pen Mask Tool.

Build the mask inside the Program Monitor.

With the clip selected, open the Effect Controls panel.

Use the Effect Controls panel to display the effect settings and modify their properties.

Use the Effect Controls panel to display the effect settings and modify their properties.

From Unassigned Masks, drag the mask to the effect that should receive it.

Adjust the mask controls under the effect to refine the result.

## Refining and combining masks

Refine and combine object masks and vector masks in Adobe Premiere with feather, opacity, expansion, inversion, and blend modes.

Object masks and vector masks share the same refinement controls.

Use the Effect Controls panel to adjust edges, transparency, and blending so masks combine into cleaner results.

Use the Effect Controls panel to adjust edges, transparency, and blending so masks combine into cleaner results.

Feather

This setting softens the mask edge. Change it in the Effect Controls panel, or for vector masks, use the Program Monitor UI. Drag the handle away from the feathering guide to increase feathering, or move it toward the guide to reduce feathering.

Opacity

This setting controls mask transparency and helps tune mask strength. The slider changes mask opacity; a setting of 100 makes the mask opaque, hiding underlying layer areas. Lower opacity values reveal more of the area beneath the mask.

Expansion

This setting grows or shrinks the mask and is especially helpful for cleaning Object Mask edges. A small shrink can remove an unwanted fringe. Positive values push the borders outward, and negative values pull them inward.

Inverted

To protect areas that should remain unchanged, mask those areas and select the Inverted checkbox so the effect applies to the unmasked regions instead.

Blend Mode

This setting defines how masks combine. Complex masks can include any count of Object Masks and Vector Masks. A mask's Blend Mode is calculated against the full result of every mask above it in the stack.

Use Blend Mode to determine how the current mask interacts with masks positioned above it in the stack.

Use Blend Mode to determine how the current mask interacts with masks positioned above it in the stack.

### Mask overlay

The mask overlay fills the interior of the mask with a semitransparent shaded region. It is a visual aid for judging the mask area. Six overlay colors are available (red, green, blue, cyan, magenta, yellow), along with black and white for viewing alpha. If the footage has a dominant color that matches the overlay and makes the mask difficult to read, choose a different overlay color. Set the Overlay to None when the overlay blocks a clear view of the effect being adjusted.

Choose a mask overlay color, or turn the overlay off, when you need a clearer editing view.

Choose a mask overlay color, or turn the overlay off, when you need a clearer editing view.

### Direct manipulation toggle

Use this control to switch direct manipulation mode on or off. It shows or hides on-screen controls for items that can be adjusted directly in the Program Monitor, and the behavior is not limited to masking. Select the chevron icon to open the list of items that provide direct manipulation controls. The list depends on the currently selected clip.

Enable direct manipulation when transform, crop, or mask settings need direct on-screen adjustment.

Enable direct manipulation when transform, crop, or mask settings need direct on-screen adjustment. Tip

Select the Toggle direct manipulation icon to hide all on-screen controls. This helps when those controls make it harder to evaluate the effect being applied.

## Apply effects to existing unassigned masks in Premiere

### Use unassigned masks in Adobe Premiere and apply them to effects for flexible, non-destructive masking.

Premiere lets you draw masks on a clip before any effect has been applied. These unused or unassigned masks do not affect the clip yet; they only exist on it. This approach is useful when you want to draw and refine masks without an effect changing what you see.

Several unassigned masks can be created, tracked separately, and combined with blend modes before they are attached to an effect. When an effect is applied later, every unassigned mask on that clip moves to the effect automatically and constrains the effect.

Tip

When the Effect Controls panel has no selected effect, a newly created mask is placed in Unassigned Masks.

### Apply masks directly to an effect

You can also attach a mask to an effect after creating it. When an effect is selected in the Effect Controls panel, any new mask is applied directly to that effect.

To attach the mask directly to the effect, use this sequence:

Add the effect to the clip.

Set the effect strength, or keep it null.

Confirm that the effect is selected, then create one or more masks.

## Copy, paste or move masks

### Copy, paste, or move masks between clips and effects in Adobe Premiere to speed up work and keep mask treatment consistent across a video project.

### Cut, copy, clear, or paste masks

Masks can be handled from the Contextual menu, the Edit menu, or standard keyboard shortcuts:

To use the contextual menu, right-click a mask in the Effect Controls panel or the Program Monitor, then choose Cut, Copy, Paste, or Clear.

Note

These commands affect every mask that is currently selected.

As another method, select a mask and use the Edit menu to choose Cut, Copy, Paste, or Clear.

Standard Cut, Copy, and Paste keyboard shortcuts also work while masks are selected.

### Paste masks

Before pasting a mask, select the effect that should receive it.

Copy or cut the mask or masks.

In the Effect Controls panel, choose the target effect.

Apply Paste through the contextual menu, the Edit menu, or a keyboard shortcut to add the mask to that effect.

### Move masks between effects

Masks can be moved through the contextual menu or the Edit menu, subject to these limits:

- Unassigned Masks: move only to Opacity.
- Masks on effects (including Opacity): move only back to Unassigned Masks.

### Drag and drop masks

The Effect Controls panel also supports moving masks by drag and drop:

- Move selected masks out of Unassigned Masks by dragging them onto the desired effect.
- Move masks applied to an effect (including Opacity) by dragging them back to Unassigned Masks.

Tip

Use Edit Properties from a Program Monitor right-click to open the Effect Controls panel.

Edit Properties in the Program Monitor quickly opens Effect Controls for the selected clip.

Edit Properties in the Program Monitor quickly opens Effect Controls for the selected clip.

## Adjust mask properties

### Refine and control a shape mask's settings after it has been applied to a clip in Adobe Premiere.

After a mask is created and an effect is assigned to the clip, its feathering, expansion, opacity, inversion, and related properties can be adjusted in the Effect Controls panel to control the result in the video.

Available mask properties vary based on the effect type. This example uses the Gaussian Blur effect.

Create the mask, then apply an effect to it.

Choose the Timeline clip that contains the mask and open the Effect Controls panel.

Selecting a mask in the Program Monitor makes the Effect Controls panel show that effect's editable properties.

Selecting a mask in the Program Monitor makes the Effect Controls panel show that effect's editable properties.

Under the mask name, adjust the following settings:

- Feather: softens the mask edge. A dashed feathering guide appears around the mask; drag away from that guide for more feathering, or toward it for less.
- Expansion: resizes the masked area. Use positive values to move borders outward and negative values to move them inward.
- Opacity: sets the transparency of the mask's effect. A setting of 100 makes the mask opaque and hides underlying layer areas. Lowering opacity reveals more of the area below the mask.
- Invert: swaps the masked and unmasked regions.

The Program Monitor shows the video changes as these properties are edited.

## Mask tracking tools in Premiere

### Track masks in Adobe Premiere with built-in tracking controls and advanced vector mask tracking options.

Mask tracking can be run from the Effect Controls panel. Each mask has tracking controls that can follow motion automatically or let you refine movement one frame at a time.

Several mask tracking choices are available.

- Track bi-directionally: tracks the mask over the whole clip with a single click. Tracking starts at the current frame, proceeds forward first, and then moves backward.
- Track Forward: follows the mask forward from the current frame through the clip's end.
- Track Backward: follows the mask backward from the current frame to the clip's start.
- Track one frame backward/forward: follows the mask by one frame in either direction.

Effect Controls panel tracking buttons can move masks one frame at a time or across the full clip.

A. Track selected mask backward 1 frame B. Track selected mask forward and backward C. Track selected mask forward 1 frame D. Track selected mask backward E. Track selected mask forward

Effect Controls panel tracking buttons can move masks one frame at a time or across the full clip.

### Vector mask tracking

Vector mask tracking has been rebuilt from scratch with advanced computer vision methods. This is not an AI solution.

### Tracker options

Tracking can use the moving object's Position, Scale, Rotation, Perspective, or any selected combination of those parameters. Selecting Perspective overrides Position, Scale, and Rotation and turns those choices off. Perspective tracking includes Position, Scale, and Rotation as part of its own process.

- Position: follows basic X, Y movement.
- Scale: considers changes in object size.
- Rotation: considers object rotation.
- Perspective: considers 3D perspective shift, for example on a sign or TV screen.

Note

These choices, Position, Scale, Rotation, and Perspective, are available only for vector masks.

Select tracking parameters to define how the mask follows a moving object.

Select tracking parameters to define how the mask follows a moving object.

### Adjust masks at the clip or frame level

After a mask has been tracked, its shape or position can still be refined over the whole clip or on individual frames.

Clip-level adjustments change the mask across the complete clip.

Frame-level adjustments change only the current frame and automatically add keyframes.

## Adjust masks at the clip or frame level in Premiere

### Control whether Adobe Premiere mask adjustments affect a full clip or only the current frame.

While adjusting a mask, choose clip-level or frame-level behavior. Clip adjustments alter the mask's position or size across the full clip. Frame adjustments affect only the current frame and automatically create keyframes. This flexibility helps when polishing a tracked mask or animating a mask by hand.

Switch between Clip and Frame to choose whether mask edits affect the entire clip or just the current frame.

Switch between Clip and Frame to choose whether mask edits affect the entire clip or just the current frame.

### Use clip-level adjustments

Clip-level edits change the mask for the entire clip at once. Choose this approach for broad, uniform refinements when you do not want to alter individual keyframes.

Example: Adjusting a tracked mask during color grading

Create a mask, for example an ellipse, around a face.

Track the mask so it follows the person's movement.

After the track finishes, you see that the ellipse is not large enough.

Confirm that Clip mode is active, then enlarge the ellipse.

The ellipse becomes larger for the full clip, while it continues to follow the person's motion from the original tracking data.

### Use frame-level adjustments

Frame-level edits let you move or reshape a mask on selected frames, with keyframes created for you. This is useful for manual mask work or for polishing motion that is difficult to track.

Example: Tracking by hand

Draw a mask around the object.

Confirm that Frame mode is active. Move the play head ahead by a few frames.

Reposition the mask so it stays with the object.

Continue the process until the entire clip has been covered.

Each adjustment adds keyframes in the Effect Controls panel.

While you adjust the mask, those keyframes appear in the Transform section of the Effect Controls panel. This keeps tracker data separate from Transform changes. The tracker and transform values are combined to produce the mask's final position.

Note

Earlier Premiere releases changed Position, Scale, and Rotation keyframes directly when tracking. That approach made post-tracking mask edits hard to manage. The newer method gives you much more room to refine the result.

## Track masks

### Automatically track mask movement over time in Adobe Premiere.

Once a mask has been created and assigned to an effect on a clip, Premiere's tracking controls can follow a subject that moves. By tracking, the mask travels through the clip with the motion, which reduces hand-built keyframes and keeps effects matched to moving objects.

Mask tracking is useful for blurring faces, attaching text or graphics to moving objects, isolating chosen elements, or limiting color corrections to a tracked area. For the strongest track, include a clearly defined subject with strong contrast inside the mask.

Create a mask, open the Effect Controls panel, and choose the mask so its settings expand.

Find the tracking buttons below the mask controls.

Select Track selected mask forward and backward to start tracking. You can also use these tracking choices:

- Track selected mask backward 1 frame: shifts the mask back by one frame.
- Track selected mask backward: tracks from the current frame back to the start of the clip.
- Track selected mask forward and backward: runs tracking both backward and forward from the current frame.
- Track selected mask forward: tracks ahead from the current frame through the end of the clip.
- Track selected mask forward 1 frame: shifts the mask ahead by one frame.

The controls below the mask in Effect Controls make the mask follow the subject as its position changes through the clip.

Those Effect Controls tracking buttons keep the mask aligned with the subject's motion in the clip.

Premiere analyzes the footage and follows the mask from frame to frame.

Check the result in the Program Monitor, then refine the mask or its keyframes if necessary.

Tip

Premiere relies on its internal tracking technology for mask tracking. For more demanding tracking work, send the sequence to After Effects through Dynamic Link.

## Masking tool actions and modifiers

Review the modifiers and conditions used to perform masking actions in Adobe Premiere.

### Object mask

Objective

Tool(s)

Modifier

Action

Conditions

Create Object Mask

Object Mask Tool

Command + Option + O

Click

hover and click

Clip must be selected

Change Object Mask Tool (Rectangle or Lasso)

Command + Option + L

Dropdown to change

Object Mask tool must be selected, or an object mask must be selected

Change Object Mask Mode (Add to/Subtract from mask)

Option/Alt

Click on "+" or "-" to toggle

Object Mask tool must be selected, or an object mask must be selected

Turn off Object Mask hover

Dropdown to select

Object Mask tool must be selected, or an object mask must be selected

| --- | --- | --- | --- | --- |
