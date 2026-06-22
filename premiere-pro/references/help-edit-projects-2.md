# Trim Clips, Change Clip Speed

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Trim a clip; Cut clips; Perform ripple edits; Perform rolling edit; Perform slip edits; Perform slide edits; Perform J cuts and L cuts; About Trim mode; Edit in Trim mode; Asymmetrical trimming; Perform J-K-L dynamic trimming in Trim mode; Track trimming actions in the History panel; Different ways to change clip speed and duration; Change clip speed and duration using the Speed/Duration command; Change clip speed and duration using the Rate Stretch tool; Change clip speed and duration using Time Remapping; Apply Time Interpolation Methods to adjust clip speed; Remove Time Remapping from a clip.

## Trim a clip

### Trim clips to remove unnecessary or irrelevant material at the beginning or end.

Trim a clip so only the essential part remains for the edit.

Select the clip to trim in the Timeline panel.

Move the pointer over the clip edge until the trim icon appears.

After the Trim icon appears, drag it across the clip to the desired clipping position.

When the Trim icon is visible, drag it over the clip until it reaches the wanted clip position.

Select and drag the clip edge until the clip has the desired length.

## Cut clips

### Cut clips accurately in a timeline with the Razor tool.

When you cut a clip, Premiere Pro creates another independent instance from the source clip and gives that instance new In and Out points, so the same media is represented as a revised segment.

Move the clip that needs to be split into the Timeline.

Choose the Razor tool from the panel.

Click the point on the clip where the split should be made.

For linked clips where only audio or only video should be divided, hold Alt-click (Windows) or Option-click (macOS) while using the Razor tool.

## Perform ripple edits

### Use the Ripple Edit tool to trim clip edges, close gaps automatically, and watch ripple edits update while you work.

With Live Ripple Edit, trimming a clip gives an immediate preview of the ripple result: later clips move at once and the sequence length changes as the edit changes. How sequence markers respond is controlled by the Ripple Sequence Markers setting together with the edit type. If sequence markers are important in the cut, check this setting before trimming so the outcome lines up with the intended workflow.

Select the timeline clip you plan to modify.

Press B on the keyboard to switch to the Ripple Edit tool.

Drag the clip end left to make the clip shorter, or right to make it longer. During the drag, the timeline refreshes immediately:

- Clips later in the sequence move right away.
- The sequence duration changes dynamically.

See how the Ripple Edit tool removes the space between clips without leaving a gap.

### Control how sequence markers behave during ripple edits

Select Marker > Ripple Sequence Markers to enable or disable the command.

The Ripple Sequence Markers setting controls marker movement during ripple edits:

- Enabled: sequence markers travel with ripple edits.
- Disabled: sequence markers stay at their original time position during ripple trims.

Note

Extract operations delete sequence markers located inside the extracted span. This removal happens no matter how Ripple Sequence Markers is set.

## Perform rolling edit

### Change the edit timing between two clips while leaving total sequence duration unchanged.

The Rolling Edit Tool moves the cut between two adjacent clips while preserving their combined length. When you click an edit point with the Rolling Edit Tool, both sides of that edit point become selected.

Use Rolling Edit Tool when the cut point between two clips needs to move.

Select the timeline clip you want to adjust.

Press N on the keyboard to activate the Rolling Edit tool.

Drag the clip edge left or right until the timing is correct.

### Keyboard shortcuts

- Ctrl-click (Windows) or command-click (macOS) the edit point while using the Ripple Edit tool to display the Rolling Edit tool.
- For a linked clip where only one track should be trimmed, hold Alt (Windows) or Option (macOS) while making a split edit (L-cut or J-cut).

## Perform slip edits

### Fine-tune a clip with the Slip tool by changing its In and Out points while its timeline duration and position stay fixed.

The Slip tool changes a clip's In and Out points without moving that clip on the timeline. Use this edit when the timing inside the footage should shift but the clip length and surrounding timeline placement should not change.

A slip edit moves the clip's In and Out points earlier or later by an equal frame count in one operation. Dragging with the Slip tool changes the first and last source frames for the clip, while its duration and neighboring clips remain unaffected.

In this slip edit example, dragging the clip left shifts the source In and Out points later.

Here, the leftward slip keeps timeline placement fixed while the source In and Out points move later.

Select the timeline clip that needs the slip edit.

Press Y on the keyboard to activate the Slip tool.

Drag across the clip to the left or right to revise its in and out points. The clip's overall duration stays the same.

### Keyboard shortcuts

For keyboard-driven slip edits, put the playhead on the clip being slipped so the edit is visible as it happens. This approach can help line up a video action with an audio cue.

## Perform slide edits

### Move a clip to another timeline position while keeping its duration and the neighboring clip timing intact.

The Slide tool changes where a clip sits in the timeline without altering that clip's In and Out points.

During a slide edit, the selected clip moves in time and adjacent clips are trimmed to absorb the move. As you drag the clip left or right with the Slide tool, Premiere Pro trims the Out point of the clip before it and the In point of the clip after it by the number of frames the selected clip moves. The selected clip's In and Out points, and therefore its duration, do not change.

In this slide edit example, dragging the clip left makes it begin earlier, shortens the prior clip, and extends the following clip.

Here, a leftward slide repositions the selected clip earlier in the sequence while adjusting the neighboring clips.

Select the timeline clip that should slide.

Press U on the keyboard to activate the Slide tool.

Drag the clip left or right to place it at its new timeline position.

## Perform J cuts and L cuts

### Create J and L cuts so audio and video can carry smoothly from one scene to another.

Editors commonly use J and L cuts in dialogue to move between scenes or shots whose audio differs. They are split edits: the picture and sound change at different moments during the transition. The names J and L come from the shapes these edits form on the post-production timeline.

- J cut: The next scene's audio begins before the image switches. The early sound can build anticipation, which is useful when a new character or location should be introduced before the viewer sees it.
- L cut: Audio from the previous scene continues under the next scene's video. This overlap supports continuity and creates a smoother transition between scenes.

Use J and L cuts when editing dialogue scenes.

Turn off Linked Selection by clicking the icon in the Timeline panel, which lets you select audio or video independently.

Use the Ripple Edit tool to close the space between clips.

- For a J cut edit, drag the preceding clip to the point where the next clip's audio should overlap the footage.
- For an L cut edit, extend the next clip's video footage over the preceding clip's audio track.

## About Trim mode

### Inspect and refine edits frame by frame with Trim mode.

Trim mode shows outgoing and incoming frames live while you adjust edits. It is helpful for precise cut or transition refinements. In Trim mode, selected Program Monitor controls change so trimming remains the focus.

To open Trim mode, select the Program or Timeline panel and press Shift + T.

### Trim mode interface overview

Trim mode displays the selected clip's In and Out points as a split-screen view in the Program Monitor. The frame before the edit appears in the upper-left area, and the frame after it appears in the upper-right area. Use the J, K, and L keys on the keyboard to play, pause, or step through frames.

A. Outgoing edit point B. Trim type indicator C. Outshift counter D. Trim backward 5 frames E. Trim backward F. Add default transition G. Trim forward H. Trim forward 5 frames I. Inshift counter J. Incoming edit point

Split-screen Trim mode view with outgoing and incoming frames plus the main controls.

### Key terms and controls

- Outgoing edit point: frame in the outgoing clip where an edit or transition starts.
- Trim type indicator: visual marker showing whether the In point or Out point is being trimmed.
- Out shift counter: shows the number of frames adjusted on the clip's left side.
- Trim backward 5 frames: removes five frames from the outgoing clip.
- Trim backward: shifts the left edit point in one-frame steps and updates the timeline to match.
- Add default transition: places the standard transition effect at the edit point between clips.
- Trim forward: moves the right edit point forward in one-frame increments.
- Trim forward 5 frames: removes five frames from the right side of the clip.
- In shift counter: shows the number of frames adjusted on the clip's right side.
- Incoming edit point: frame in the incoming clip where an edit or transition starts.

### Playback and review trims

To review trims that are already applied while the edit point selection remains active in Trim Edit mode, select the Play button or press the Spacebar. Playback loops around the selected edit point, starting at the specified Pre-rolling time before the first edit point and ending at the specified Post-rolling time after the last edit point.

To halt playback, select the Play button or press the Spacebar again. The playhead moves to the selected edit point closest to the stop location.

### Behavior of trim tools in Trim mode

In Trim mode, any trim tool can be used to trim clips, including the Selection tool:

- Drag inside a clip to adjust the edit point in the normal way.
- Drag across two clips to apply a rolling trim that adjusts both clips together.
- For a normal one-sided trim of the outgoing or incoming clip, hold Ctrl (Windows) or Command (macOS) while dragging that side.
- Dragging to the left trims backward; dragging to the right trims forward.

Trim mode uses the same trim behavior as Timeline panel edits, so switching between the two modes is straightforward.

### Exit Trim mode

To leave Trim mode, click anywhere in the timeline or press Shift + T again.

## Edit in Trim mode

### Use Trim mode in Adobe Premiere to make precise trims or rolling edits.

Trim mode provides detailed edit control by showing both sides of a cut. It supports quick frame-accurate changes whether the task is fine-tuning a single clip or adjusting several clips together.

Before you begin:

Open Trim mode by choosing either the Program panel or the Timeline panel, then press Shift + T.

Slowly pass the cursor over the cut between two clips in the Program Monitor.

Moving left-to-right changes the icon through Trim Out (left side), Roll (center), and Trim In (right side).

Drag between the clips when you want a roll edit that changes both clips at the same time.

For trim in or trim out edits, position the cursor near the left or right clip edge; when the yellow trim icon appears, drag inward or outward.

Tip

Use modifier keys for more specific trim selections:

- Press Alt (Windows) or Option (macOS) to temporarily unlink audio and video, which helps when only one part of a clip should be trimmed.
- Press Shift to choose multiple edit points, so several tracks or clips can be trimmed together. When a trim "handle" is visible, changes apply to all selected clips. Use these keys together for advanced trimming selections.

## Asymmetrical trimming

### Make asymmetrical trims in Adobe Premiere so edits can change differently across tracks while sync is preserved.

Asymmetrical trimming occurs when different tracks contain a selected mix of Ripple In and Ripple Out edit points, with no more than one selected edit point on each track. This setup lets clips be trimmed in opposite directions while alignment is maintained. If a track has multiple selected edit points, every selected point on that track moves in the same direction.

Asymmetrical trimming is available in both the Timeline and Trim Edit modes.

For an asymmetrical trim, all tracks use the same trim duration, while each edit point may move left or right according to its type.

- The primary trim direction identifies the main edit point. You can set it with a tool, keyboard shortcut, or button, and it affects every track whose edit point matches that primary trim type.
- Edit points with a different trim type than the primary one move the other way.
- In the Timeline, the primary direction determines which edit point controls the asymmetrical trim.

During asymmetrical trimming, all clips shift consistently across tracks, keeping the edit synchronized. As Ripple In and Ripple Out edits change clips differently, trailing clips still move in the same direction on every track, which preserves alignment.

For example, with the Ripple Edit tool, dragging an edit point 10 frames right adds 10 frames to other edit points configured as Ripple Out. In the same operation, edit points configured as Ripple In lose 10 frames.

Note

- The edit points do not move; instead, more head material from the clip is revealed. Trailing clips on all tracks move right by 10 frames.
- Trim In and Trim Out pairings do not count as asymmetrical trimming. Even when the edit point sides are different, they travel in the same direction and trailing clips do not shift.

## Perform J-K-L dynamic trimming in Trim mode

### Trim clips one frame at a time in Adobe Premiere with J-K-L shortcuts.

Dynamic trimming in Trim mode plays clips forward or backward while letting you adjust edits frame by frame. Using the J, K, and L keys together lets you shuttle through footage quickly and set exact In and Out points while reviewing the edit.

Before you begin:

In Trim mode, dynamic trimming uses the J, K, and L keyboard shortcuts: play the clip, then trim from the frame where playback stops.

Select an edit point, press the K key to pause, then use J or L to shuttle through the clip in reverse or forward.

In Trim mode, use J, K, and L to shuttle through clips and make frame-by-frame trim changes.

J, K, and L provide shuttle control in Trim mode so clip trims can be adjusted one frame at a time.

While shuttling, repeated presses of J or L increase playback speed in that direction. Press K whenever playback should pause.

When the target frame is found, use J or L for small timing changes, then stop exactly where the cut belongs.

At the current frame, press I to set the In point. If playback needs to continue, press K.

When the edit is ready, press O to set the Out point at the current frame. Premiere Pro trims the clip between the In and Out points.

## Track trimming actions in the History panel

### See how Premiere records trimming work in the History panel for undo and redo.

Premiere's History panel records each trim adjustment, whether it came from J-K-L keyboard shortcuts, buttons, or editing tools. Those recorded actions let editors reverse or repeat trim changes during editing, while simply entering or leaving Trim mode does not alter the session.

Every trim adjustment appears in the History panel as its own entry. That includes actions performed with keyboard shortcuts, tools, or buttons.

Opening or closing Trim mode does not add History panel entries, so trim changes from any Trim mode session can be undone or redone individually without changing unrelated edits.

The History panel records every trim change, so undoing or redoing those edits is straightforward.

Each trim operation is logged in the History panel, allowing quick undo or redo of trim edits.

## Different ways to change clip speed and duration

### Learn the available methods for changing speed and duration on one or more clips in Adobe Premiere.

Clip speed is the playback rate relative to the rate at which the media was recorded. Clip duration is the time required to play from the In point to the Out point. You can assign a duration to audio or video clips so they slow down or speed up to fit that duration.

Premiere offers these ways to adjust clip speed or clip duration:

- Speed/Duration command
- Rate Stretch tool
- Time Remapping feature

Note

Optical Flow can be applied only from the timeline or the Export Settings dialog box, not from the Project panel. Timeline Search offers advanced search options for finding and managing clips in complex timelines.

## Change clip speed and duration using the Speed/Duration command

### Adjust video-clip playback speed in Adobe Premiere with the Speed/Duration command.

Before starting:

Bring your video clips into a Premiere project, then place the clips you plan to change on the timeline.

In the Timeline panel, choose one or more clips.

From the menu bar, choose Clip > Speed/Duration. You can also right-click the selected clip(s) and choose Speed/Duration.

Use the Clip speed/duration dialog box controls to raise or lower the speed and duration for the selected clip.

Those same Clip speed/duration dialog box controls let you reduce or increase the duration and playback rate for the selected clip.

In the Clip speed/duration dialog box:

- In the Speed field, enter a percentage for playback rate. (100% matches normal playback; smaller values slow the clip, and larger values make it faster)
- Select Reverse speed when the clip should play backward.
- Select Maintain audio pitch when the original pitch should stay intact.
- Select Ripple Edit (shift trailing clips) so later clips on the timeline move automatically.

If you need duration and speed to change independently, use the link toggle until it displays as a broken link.

Pick a setting under Time Interpolation:

- Frame Sampling: quickest processing
- Frame Blending
- Optical Flow: best quality for slow motion

Select OK.

Review the result in the Program Monitor to check the clip's updated speed and duration.

## Change clip speed and duration using the Rate Stretch tool

### Quickly change clip speed and duration in a Premiere timeline with the Rate Stretch tool.

The Rate Stretch Tool changes a clip's playback rate and timeline length in one action. Its audio portion is left as-is. For additional settings, work in the Clip speed/duration dialog box.

Before starting:

Import the media into a Premiere project, then add the clips to the timeline.

Use the Rate Stretch tool when you want timeline clip length and playback speed to change together.

Either press R on your keyboard or choose the Rate Stretch Tool from the Tools panel.

In the Timeline panel, move the pointer over either end of the clip you need to modify.

Select the clip edge and drag it:

- Drag outward when the clip should run slower and last longer.
- Drag inward when the clip should run faster and take less time.

While dragging, watch the tooltip for the percentage relative to the original speed.

Let go of the mouse button after the speed/duration reaches the setting you want.

Premiere updates the clip's playback speed, and the duration grows or shrinks to occupy the adjusted timeline span.

## Change clip speed and duration using Time Remapping

### Use Time Remapping to create variable playback speed, slow motion, or fast motion inside one video clip.

Before starting:

Import the video clips into a Premiere project and put them on the timeline. Leave enough room in the sequence for any duration changes that may result.

For a speed adjustment, move the band up to make playback faster or down to make playback slower.

In the Timeline panel, right-click the clip you want to change.

Choose Show Clip Keyframes > Time Remapping > Speed.

Premiere shows a horizontal white band and a rubber band through the middle of the clip.

Move the band upward or downward to raise or lower the clip speed. A tooltip reports the speed change as a percentage of the original speed.

### Vary speed within different sections of the clip using Time Remapping

To add a speed keyframe, use Ctrl-click (Windows) or Command-click (macOS) on the rubber band.

Place additional keyframes across the clip to set separate speed regions.

For a specific part of the clip, drag the rubber band between keyframes to change that portion's speed.

For gradual speed changes:

- Select a keyframe by clicking it.
- Use the Bezier handles that appear to shape how quickly the speed changes.

To reposition a keyframe, click it and drag left or right along the speed-control track.

To remove a keyframe, select it and use Delete.

Tip

Clips with Time Remapping can need extra processing, especially when the speed change is large. For smoother editing playback, use proxies or lower resolution previews.

## Apply Time Interpolation Methods to adjust clip speed

### Use Frame Sampling, Frame Blending, and Optical Flow time interpolation methods to change clip speed and improve motion smoothness in Adobe Premiere.

Adobe Premiere can change clip speed with several time interpolation techniques: Frame Sampling, Frame Blending, and Optical Flow. These methods can make motion appear smoother after a speed change.

### Understand Time interpolation methods

### Frame Sampling

- This basic method reaches the target speed by repeating existing frames or removing them.
- It suits small speed changes, or cases where a slightly uneven look is acceptable.
- Choose it for footage with little movement, or when keeping original frames matters most.

### Frame Blending

- This method creates intermediate frames by blending adjacent frames.
- It is useful for smoother slow-motion results, particularly when the footage has limited fast movement.

### Optical Flow

- This method analyzes motion between frames with advanced algorithms, then generates new frames.
- It gives the smoothest motion, especially when speed changes are substantial.
- It works best on footage with clear motion and well-defined edges.

Before starting:

Import the video clips into a Premiere project. Put the clips you intend to adjust on the timeline.

Select the timeline clip you want to adjust.

Right-click the clip and choose Speed/Duration.

In the Speed/Duration dialog box, choose one of these options in the Time Interpolation section:

The Time Interpolation options in the Speed/Duration dialog box control how Premiere changes video speed.

Use the Time Interpolation choices in the Speed/Duration dialog box when changing video speed.

- Frame Sampling: reaches the requested speed by repeating frames or dropping frames.
- Frame Blending: repeats frames and blends adjacent frames for smoother motion.
- Optical Flow: analyzes the footage to synthesize intermediate frames.

If needed, change clip speed with the Speed (%) field.

Select OK to apply the edits.

Play the clip to inspect the result. Repeat the process if you need to refine the effect.

## Remove Time Remapping from a clip

### Remove Time Remapping from a clip so it returns to its normal playback speed and behavior.

Open the project in Premiere.

In the Timeline panel, select the clip where Time Remapping is enabled.

Choose Window > Effect Controls to show the Effect Controls panel.

Disable the Toggle Animation button for the Time Remapping property when removing Time Remapping from a clip.

For the selected clip, Time Remapping is removed by turning off the Toggle Animation button on the Time Remapping property.

Expand Time Remapping by selecting the icon beside that section.

Next to the Speed option, select the Toggle Animation button to switch off Time Remapping.

This removes the speed keyframes that already exist and turns off Time Remapping for the clip. The clip duration returns to its original length.

## Freeze a video frame for the duration of a clip

### Use Frame Hold settings in Adobe Premiere to show one frame for an entire clip duration.

Frame Hold turns a full video clip into a still frame, much like using an imported still image. The displayed frozen frame can come from the clip's In point, Out point, or a marker that you choose. If only part of the clip should freeze while the rest keeps playing, use Time Remapping instead.

With Frame Hold, the Timeline keeps the clip's original duration while showing a single still frame. Any frame in the clip can become the hold frame, which makes the feature useful for pauses, extended moments, or footage where only one frame is needed.

### Apply Frame Hold to a clip

Select a clip in the Timeline panel.

When the frozen frame is somewhere other than the In or Out point, load the clip in the Source Monitor, go to that frame, and press M to place Marker 0.

Use the menu path Clip > Video Options > Frame Hold Options.

After the dialog opens, select Hold On. Then set the held frame to In Point, Out Point, Marker 0, or a specific timecode.

Use frame hold options when the clip needs to freeze on a particular source timecode.

Set frame hold options when a specific source timecode should become the frozen frame.

Select OK.

The clip shows the chosen frame across its full duration. When the held frame comes from an In or Out point, later edits to that point do not change the frozen frame. When Marker 0 is used, moving the marker changes the frame that appears.

Tip

To freeze only part of a clip, use Time Remapping with speed keyframes rather than Frame Hold.
