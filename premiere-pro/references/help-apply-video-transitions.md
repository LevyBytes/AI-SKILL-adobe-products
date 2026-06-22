# Transitions Overview, Set And Apply Default Transitions, Apply Single Sided Transitions, Copy And Paste Transitions ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Transitions overview; Set and apply default transitions; Apply single-sided transitions; Copy and paste transitions; Align and reposition transitions; Reposition the center of a transition; Change transition settings; Replace transitions; Move cuts and transitions simultaneously; Change transition duration using the Effect Controls panel; Morph Cut overview; Apply morph cut to smoothen jump cuts; Morph Cut transition options; Clip handles settings; Video transitions using clip handles.

## Transitions overview

### Use video, audio, and VR transitions to connect edits in polished sequences.

A transition is an effect placed at the join between media items so the move from one shot to another is animated. Premiere includes transitions that can be applied to a sequence, ranging from a quiet crossfade to a more stylized treatment.

Transitions visually bridge adjacent media clips and animate the change between them.

Premiere provides these transition categories:

- Audio transitions
- Video transitions
- VR transitions

When clips are placed side by side in the Timeline panel with no transition, Premiere creates a cut: playback moves directly from the first clip's final frame to the following clip's first frame. Transitions usually sit on the cut line between shots, but they can also be placed only at a clip's start or end.

Trim clips before adding a transition. Extra trimmed frames provide the media used during the transition, so larger trims make more frames available.

Tip

For a centered 1:00 transition, trim at least 15 frames from each clip.

## Set and apply default transitions

### Set default transitions so repeated edits use consistent video and audio effects.

`Cross Dissolve` is the default video transition, and `Constant Power Crossfade` is the default audio transition. In the Effects panel, the default transition icon is identified with a blue outline.

If another transition is used more often, make that transition the default. The new default applies across projects after the setting changes, but transitions already placed in sequences remain unchanged.

### Set a default transition

Before you begin

Make a project, then place clips on the timeline.

Open `Window > Effects`, then expand either the `Video Transitions` bin or the `Audio Transitions` bin.

Choose the transition to use as the default.

Open the transition's command menu with the Effects panel Menu button, or by right-clicking that transition.

Select `Set Selected as Default Transition`.

### Set the duration of the default transition

Choose `Edit > Preferences > Timeline` on Windows, or `Premiere > Settings > Timeline` on macOS.

You can also open the Effects panel menu button and choose `Set Default Transition Duration`.

Update `Video Transition Default Duration` or `Audio Transition Default Duration`, then select `OK`.

### Apply default transitions between selected clips

The default video and audio transitions can be added to a selection containing two or more clips. Premiere applies those defaults at each edit point where selected clips meet. This behavior is independent of the current-time indicator and does not rely on whether tracks are targeted. No default transition is added where a selected clip touches an unselected clip or an empty space.

In the Timeline panel, select two or more clips. Use Shift-click, or drag a marquee across the clips, to make the selection.

Choose `Sequence > Apply Default Transitions to Selection`.

Tip

To add the default transition to most clips, or to every clip in a sequence, use the `Automate to Sequence` command. It inserts the default video and audio transition between all clips that it adds.

## Apply single-sided transitions

### Use single-sided transitions when a scene change should not affect the neighboring clip.

Most transitions are double-sided because they span both clips at the edit. A single-sided transition attaches to just one clip, which helps when clip handles are unavailable.

Use single-sided transitions to change scenes while leaving adjacent clips unaffected.

Single-sided transitions give you more direct control over the way one clip changes into another.

For example, one clip can leave with the `Venetian Blinds` transition while the following clip appears with `Cross Dissolve`.

In the Timeline panel or the Effect Controls panel, double-sided transitions show a dark diagonal line. Single-sided transitions are diagonally divided, with one half dark and the other half light.

Choose single-sided or double-sided behavior to control the timeline connection between clips.

A. Double-sided transition B. Single-sided transitions

Choose either a single-sided or double-sided transition depending on how the clips should connect on the timeline. To add a single-sided transition, use these steps:

In the Effects panel, locate the transition to apply. Expand the `Video Transitions` bin or `Audio Transitions` bin, then expand the bin that contains the desired transition.

Apply a video transition from the Effects panel when creating a single-sided transition.

For a single-sided transition, apply the video transition from the Effects panel.

To place a transition on one cut, Ctrl + drag on Windows or Command + drag on macOS from the Effects panel into the Timeline panel. Release the mouse when either the `End at Cut` icon or the `Start at Cut` icon appears.

- End at Cut icon: sets the transition so its end matches the end of the first clip.
- Start at Cut icon: sets the transition so its beginning matches the beginning of the second clip.

Preview the transition by playing the sequence or by moving the current-time indicator through that section.

Note

To put a transition at the end of a clip that has no adjacent clip, drag and drop the transition normally. Do not use Ctrl + drag on Windows or Command + drag on macOS. Premiere automatically treats that transition as single-sided.

## Copy and paste transitions

### Copy and paste transitions in Premiere to keep edits consistent and reduce repeated setup.

Any transition in a sequence can be copied, then pasted to another cut line on a compatible track type. Paste video transitions only on video tracks, and paste audio transitions only on audio tracks.

Before you begin

Make a project, then place clips on the timeline.

Select a transition in a sequence.

Choose `Edit > Copy`, or use `Ctrl + C` on Windows or `Command + C` on macOS.

Copy selected transitions with the `Copy` command in the Edit menu.

Use the Edit menu's `Copy` command to copy the selected transitions.

For a one-clip paste target, position the current-time indicator at the destination cut line.

To paste a transition onto multiple clips, select several edit points in the sequence by dragging a marquee around them or by using the `Shift` key with any trim tool.

Choose `Edit > Paste`, or use `Ctrl + V` on Windows or `Command + V` on macOS.

When no edit points are selected, pasted transitions go to edit points at or near the playhead, and track targeting is not overridden.

Tip

To swap transitions, drag the replacement video or audio transition out of the Effects panel and drop it on the transition already present in the sequence.

Replacing a transition keeps its alignment and duration. The prior transition's settings are discarded, and the new transition uses its default settings.

## Align and reposition transitions

### Align transitions in Premiere to refine timing and make clip changes flow more smoothly.

A transition can be offset rather than centered exactly on the cut. In the Timeline panel, drag it to the desired position over the edit. The Effect Controls panel can also change a transition's alignment.

### Align a transition in the Timeline panel

Select the clip, then drag the transition in the Timeline panel to change its position.

Select the clip and move the transition by dragging it within the Timeline panel.

Zoom in within the Timeline panel so the transition is easy to see.

Drag the transition across the cut until it is positioned where you want it.

### Align a transition using the Effect Controls panel

To display a transition in the Effect Controls panel, select that transition in the Timeline panel.

Choose an entry from the Alignment menu:

- Center at Cut or Custom Start: moves the transition's start and end points the same distance in opposite directions.
- Start at Cut: moves only the transition's end.
- End at Cut: moves only the transition's beginning.

In the Effect Controls time ruler, move the pointer over the transition's center until the `Slide Transition` icon appears. Drag the transition to the desired place. Magnify the time ruler when more precise control is needed.

Use the Alignment drop-down menu options to position a transition in the Effect Controls panel.

Use the Alignment drop-down menu to align the transition in the Effect Controls panel.

Note

The Alignment menu in the Effect Controls panel provides the same choices. `Custom Start` appears in the Alignment field only after the transition has been dragged to a custom position over the cut.

## Reposition the center of a transition

### Move a transition's center point to adjust the transition's direction and focus.

Some transitions do not expose an adjustable center. Others, including `Iris Round`, are built around a center point that can be moved to alter how the transition behaves.

Select the transition in the Timeline panel to open it in the Effect Controls panel.

In the A preview area of the Effect Controls panel, Premiere shows the transition's default center point or the center point after edits.

Open the transition in the Effect Controls panel to see its center.

View the transition center by opening the transition in the Effect Controls panel.

Drag the small circle to set a new transition center.

In the A preview area of the Effect Controls panel, drag and place the small circle to reposition the transition circle.

Move the transition circle by dragging and placing the small circle inside the A preview area of the Effect Controls panel.

## Change transition settings

### Tune Adobe Premiere transition settings for the look and timing of video effects.

Click the transition on the Timeline panel.

In the Effect Controls panel, change these settings as needed:

- Edge selectors: change the transition orientation or direction. Select an edge selector arrow on the transition thumbnail. For example, `Barn Doors` can be set vertically or horizontally. A transition has no edge selectors when it supports only one orientation or when orientation does not apply.
- Start and End sliders: set how much of the transition has completed at the beginning and end of the transition. Hold Shift when the start and end sliders should move together.
- Show Actual Sources: shows the first and last frames used by the clips.
- Border Width: changes the width of the optional transition border. The default border is 0.0. Some transitions do not include borders.
- Border Color: sets the transition border color. Double-click the color swatch, or use the eyedropper, to choose the color.
- Reverse: plays the transition in reverse. For example, `Clock Wipe` plays counterclockwise.
- Anti-Aliasing Quality: changes how smooth the transition edges appear.
- Custom: opens settings that are unique to that transition. Most transitions do not provide custom settings.

Fine-tune transition settings to decide how video effects appear and move.

Adjust transition settings carefully to control the look and flow of video effects.

## Replace transitions

### Replace transitions in Premiere when an effect should change but its timing should stay intact.

To replace a transition, take a different video or audio transition from the Effects panel and drop it on the transition already placed in the sequence.

Replacement keeps the transition's alignment and duration. The settings from the old transition are removed, and the new transition starts with its default settings.

## Move cuts and transitions simultaneously

### Move cuts and transitions together in Adobe Premiere for smoother edits.

The Effect Controls panel lets you change where the cut is located. Moving the cut line adjusts the clips' In and Out points without changing the video's overall length. The transition follows as the cut moves.

Select the transition in the Timeline panel to open it in the Effect Controls panel.

Select the clip, then drag the transition into the Timeline panel to reposition it.

Choose the clip and drag the transition into the Timeline panel when you need to reposition it.

In the Effect Controls time ruler, place the pointer over the transition on the thin vertical cut line. At that location, Premiere swaps the pointer from `Slide Transition` to `Ripple Edit`.

Note

The cut cannot be moved past a clip's end. If neither clip has trimmed frames beyond the cut, the cut cannot be repositioned.

## Change transition duration using the Effect Controls panel

### Change transition duration in the Effect Controls panel in Premiere to improve pacing and visual impact.

A transition's duration can be edited from either the Timeline panel or the Effect Controls panel. The initial default is 1 second.

Before you begin:

Set up a timeline sequence and place a transition between two clips. When extending the duration of a transition, confirm that one or both clips include enough trimmed frames for the longer transition.

### Change transition duration in the Timeline panel

In the Timeline panel, hover at a transition edge until the Trim-In icon or Trim-Out icon is shown, then drag the edge. To move the transition instead, select the clip and drag the transition in the Timeline panel.

For another repositioning pass, select the clip, then drag the transition in the Timeline panel.

A second route is to double-click the transition in the Timeline to open the Set Transition Duration dialog box.

Inside the Set Transition Duration dialog box, change the duration value to update the transition length from the Timeline panel.

The same duration edit can also be made in the Timeline panel through the Set Transition Duration dialog box's duration value.

Drag the Duration value, or select the value and enter a replacement, then select OK.

### Change transition duration in the Effect Controls panel

Select the transition in the Timeline panel to display it in the Effect Controls panel.

Use either method:

- In the Effect Controls time ruler, hover over the transition until the Trim-In icon or Trim-Out icon appears, then drag the transition boundary.
- Drag the Duration value, or select it and enter a different value. The selected alignment option determines where the added or removed frames come from.

Use the Alignment dropdown menu to choose how the transition lines up in the Effect Controls panel.

The Alignment dropdown menu in the Effect Controls panel controls the transition's alignment choice.

### Set the default duration for transitions

Changing a transition default affects transitions you add later; transitions already in the sequence keep their current lengths.

Open Edit > Preferences > Timeline (Windows) or Premiere > Settings > Timeline (macOS).

Update Video Transition Default Duration or Audio Transition Default Duration.

Select OK.

## Morph Cut overview

### Review Morph Cut in Premiere and practical ways to improve Morph Cut transitions.

When an edit contains "talking head" footage, the speaker may stutter, overuse "umms" or "uhs", or leave pauses you do not want. Those breaks make it harder to build a clean continuous sequence without jump cuts or cross dissolves.

To clean interview dialog, remove unwanted clip sections and place the Morph Cut video transition across the resulting edit so distracting jump cuts blend more smoothly. Morph Cut can also help you reorder interview clips while maintaining visual continuity and avoiding visible jumps.

Morph Cut builds the transition by combining face tracking with optical flow interpolation. With suitable footage and careful use, the result can feel as natural as if the unwanted pauses or words had never interrupted the original narrative flow.

### Aspects to consider when using Morph Cut

Note

Morph Cut requires substantial processing. Large-format media increases analysis time, particularly on GPUs with smaller memories (less than 2 GB VRAM).

Morph Cut performs most reliably with footage like this:

- A single-subject "talking head" interview shot
- A fixed shot, though minimal camera movement is usually acceptable
- A static background with little or no lighting change

Apply the Morph Cut effect from the Effect panel to create a smoother transition between clips.

The Effect panel provides the Morph Cut effect for smoothing the transition from one clip to the next.

Good results are still possible when not all three conditions are present. However, blotchy output can appear when the frame includes too much background, hand, or body movement. Face detection may also become uneven with a tight crop or a profile view of the subject. Even when the footage meets all three conditions, outcomes can differ. Face detection is influenced by factors such as:

- The subject's framing and lighting
- The amount of head movement or camera movement at the cut
- Whether the speech pause feels natural enough for lip-syncing

### Additional tips and tricks

- Choose short, logical gaps where head position is comparable on both sides of the cut. Use the waveform to find natural pauses that can anchor the edit.
- After the first application, tune the Morph Cut duration and symmetry as needed. Starting and ending near the peaks of the last and first words around the edit point is helpful. Duration changes can prevent difficult lip-syncing problems.
- Once analysis finishes, generate render preview files so playback reflects the correct performance and avoids dropped frames.
- A tighter subject frame can reduce the hand or upper body movement that Morph Cut must interpolate. If the crop removes important face or head detail, though, Morph Cut face detection may not recognize the subject.
- Consider using adjustment layers to apply effects over Morph Cut transitions and their related clips. Usually, effects should be applied directly to clips. When many additional adjustments are needed after Morph Cut has been applied, adjustment layers can help avoid display problems. This is useful for effects such as Lumetri Color effects.
- Analysis starts automatically when the transition is applied. It also starts again whenever you trim the transition in or out, whether the trim is symmetrical or asymmetrical.

## Apply morph cut to smoothen jump cuts

### Apply Morph Cut in Premiere to refine interviews by smoothing jump cuts between sound bites.

Before you begin

Import media and build a sequence. Ideally, the sequence contains one talking head and a static background.

On the Timeline, set In and Out points around the section of the clip you intend to remove.

Clip removal can be done several ways, including lift and extract, delete, and ripple-delete. Repeat this for every part of the clip that should be removed.

In the Effects panel, choose Video Transitions > Dissolve > Morph Cut, then drag the effect onto the edit point separating the Timeline clips.

Note

To reduce lip sync problems, place Morph Cut where the last or first words of speech reach their peaks. Audio waveforms can also help you find natural pauses and place cuts there.

After Morph Cut is applied, analysis starts right away in the background. When analysis begins, the Program Monitor displays an Analyzing in background banner to show progress.

After adding the Morph Cut transition, double-click the effect in the Timeline panel to set its transition duration.

Set the duration by applying the Morph Cut transition and double-clicking the effect in the Timeline panel.

You can keep editing the footage or work elsewhere in the project during analysis. When analysis is finished, Premiere creates a symmetrical transition centered on the edit point. The transition duration uses the 30 frames default set by Video Transition Default Duration. You can adjust that default duration in the Preferences dialog.

If lip movement and audio are not precisely aligned, or if the result does not look right, adjust the In and Out points or change the transition duration.

Note

- A typical effective transition duration is about 10-20 frames.
- Premiere starts a new analysis every time a selected Morph Cut changes, including after an undo. Previously analyzed data does not need to be deleted.

## Morph Cut transition options

### Learn how to refine Morph Cut transition options for duration and alignment control.

Applying Morph Cut creates a transition with default settings. You can refine that transition in either the Effect Controls panel or the Timeline.

### Modify transition using the Effect Controls panel

The Effect Controls panel includes controls for setting the transition duration and placing the transition accurately.

- Duration: A video transition starts from a 30 frames default. Before you apply a transition, set a different default in the Preferences dialog box; in the General section, provide the new Video Transition Default Duration. After a transition is already on the edit, type a replacement duration in the Duration field of the Effect Controls panel.
- Alignment: With Center at Cut selected, Premiere places the transition at the edit point between the two clips. For more exact placement, drag the transition left or right in the Effect Controls Timeline; this creates an asymmetrical transition offset from the edit point. See guidance on modifying and customizing transitions with the Effect Controls panel.

### Modify transition using the Timeline panel

- Duration: Double-click the transition in the Timeline panel, then enter the replacement duration in the Set Transition Duration dialog. You can also drag the transition edges to make the transition longer or shorter as needed. The same edge-drag gesture can lengthen or shorten the transition from the Timeline panel.

Note

Zoom into the Timeline panel until the transition is easy to see.

## Clip handles settings

### Learn what clip handles are and how they support transition adjustments.

Clip handles are unused footage before a clip's in-point and after its out-point, and transitions can use that extra material.

When the source media lacks enough frames, handles may be unavailable because there is no extra footage for the transition. If you add the transition anyway, Premiere warns that there is 'Insufficient Media' and that repeated frames will be used. Premiere then builds handles by repeating end frames, creating a freeze frame from the clip. In the Timeline panel, diagonal warning bars appear across the transition.

Adding a transition places a colored overlay over the clips in the timeline. The clip is not shortened; playback continues from the In or Out point.

If a transition lacks sufficient clip handles, the simplest fix is to re-edit the clip. Select the clip in the timeline, then use the Ripple Edit tool to trim it back. After that, add the transition again.

Note

When placing a transition between clips, confirm that the first clip has a handle at its end and the next clip has a handle at its beginning.

## Video transitions using clip handles

Learn how to build and modify video transitions on clips with visual handles in Adobe Premiere.

Premiere supports creating and adjusting video transitions directly on clips through transition handles in the Timeline. Video transition handles make transition work quicker and more visual. Because you do not need to move between panels as often, routine editing stays focused on the Timeline.

### Video transition handles

In the Timeline, video transition handles are shown at the beginning and end of video clips. Drag a handle to apply your default video transition to that clip edge. While you drag, the clip displays the changing transition duration.

This behavior helps you identify transition start and end points while staying in the Timeline. Use transition handles to make a cross-dissolve between two adjacent clips, or to build and revise transitions across multiple selected clips on separate tracks.

Drag a clip's transition handle to add a video transition and watch its duration update in the Timeline.

The Timeline shows duration changes directly when a transition handle is dragged on a clip to apply a video transition.

### More control with transitions

Fine-tune a transition by dragging its handle until the duration is right. The transition that gets applied follows your default video transition settings, so the transition type is controlled by those defaults.

This approach keeps both transition creation and transition adjustment inside the Timeline.
