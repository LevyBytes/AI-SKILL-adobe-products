# Modify Clip Properties, Set Up Multi Camera Sequences For Editing, Compare Edits To Source Clips

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Change the frame rate of a clip; Interlaced video overview; Change the field order of a clip; Create interlaced or non-interlaced clips; Modifying clip properties with Interpret Footage; Create a multi-camera source sequence; Create and edit a multi-camera target sequence; Mark clips for synchronization; Manage multi-camera thumbnails in the Project panel; Change the order of cameras in Source and Program Monitors; Compare edits to clips in the Program Monitor; Open or clear a clip in the Source Monitor; Navigate clips in the Source menu in the Source Monitor.

## Change the frame rate of a clip

Changing clip frame rate in Premiere changes how that media plays inside the sequence. Use it to match footage shot at different frame rates or to create slow-motion/fast-motion effects.

Frame-rate changes affect audio along with video. The original duration changes proportionally. For example, setting a 10-second, 24-fps clip to 48 fps shortens it to 5 seconds, half the original length.

### Change the frame rate of a clip in the Project panel

Before you begin:

To adjust the frame rate for a clip in a sequence, first import the media clip and add it to a sequence.

Use this Project panel method when a clip's interpreted frame rate should change everywhere in the project. For only one Timeline panel instance, change that individual clip's frame rate in the Speed/Duration dialog box.

In the Project panel, right-click the clip that needs the change.

Select Modify > Interpret Footage.

On the Modify Clip dialog box's Interpret Footage tab, choose Assume this frame rate, then enter the desired frame rate. Check the Duration field for the updated overall clip duration.

As the frame rate is modified, the clip's overall duration changes.

As the frame rate is modified, the clip's overall duration changes.

Select OK to apply the change.

## Interlaced video overview

### Interlaced video sends television pictures through channels with constrained bandwidth.

An interlaced format does not send every horizontal line in a video frame at once. Each frame is split into two fields:

- The upper field carries the odd-numbered lines and is painted from top to bottom first.
- The lower field carries the even-numbered lines and is painted from top to bottom after that.

Because the fields arrive quickly and the eye blends the result, viewers see a full-resolution frame even though each moment shows only one field's worth of lines.

### When and where interlaced video is used

Interlaced video appeared often in these places:

- Analog TV broadcast standards
- Selected digital TV standards
- Older camera systems and recording formats

Early broadcast pipelines used it to fit smoother perceived motion and usable detail into the bandwidth available at the time.

### Advantages of interlaced video

- Uses less bandwidth than progressive video.
- Makes motion appear more detailed at lower frame rates.
- Works with older broadcast chains and legacy display hardware.

### Challenges with interlaced video

- Thin horizontal detail can flicker visibly.
- Motion between the two fields may create combing artifacts.
- Freeze frames and slow-motion treatment are harder to make clean.
- Editing and post-production workflows need extra care.

### Interlaced vs. progressive video

Current digital video workflows usually rely on progressive scanning: every line in a frame is recorded and shown in sequence. That approach avoids field-related artifacts, although it consumes more bandwidth.

When Premiere users handle interlaced footage, they may need to:

- Assign clips the proper field order.
- Use deinterlacing effects when an edit requires them.
- Pick export settings suited to either interlaced delivery or progressive delivery.

Knowing how interlaced video behaves helps Premiere users protect quality when they handle, convert, or export older interlaced material.

## Change the field order of a clip

### Convert interlaced clips to non-interlaced clips, or set field order so footage matches the project.

Review these points before changing a clip's field order:

- If the right field order is unclear, check the camera documentation or inspect metadata from the source footage.
- Field-order changes can alter image quality, so preview the clip and confirm that the result improves the picture.

Import the source footage into Premiere.

In the Project panel, use right-click on Windows or Control-click on macOS for the selected clip or clips.

From the context menu, choose Modify > Interpret Footage.

In the Interpret Footage dialog box, go to the Field Order section. Use Field Order from File shows whether Premiere reads the clip as interlaced or non-interlaced.

With Upper Field First enabled, Premiere interprets the clip as upper-field-first instead of relying on metadata.

If Upper Field First is turned on, Premiere treats the media as upper-field-first and ignores the stored metadata for that decision.

To revise the field order, open the Conform to dropdown menu and choose one of these settings:

- No Fields (Progressive Scan): Select this to convert an interlaced clip into a non-interlaced clip.
- Upper Field First: Use this for odd-numbered lines.
- Lower Field First: Use this for even-numbered lines.

Select OK to save the change.

## Create interlaced or non-interlaced clips

### Create both interlaced and non-interlaced (progressive) clips in Premiere so delivery can fit different platforms and playback devices.

Interlacing was designed to move television signals through limited-bandwidth systems. In interlaced video, each frame is sent as half of its horizontal lines at a time. Premiere can create interlaced clips as well as non-interlaced (progressive) clips.

Right-click a clip in the Timeline panel, then choose Field Options.

Enable Reverse Field Dominance when the clip's field playback order needs to change.

Pick one processing option:

- None - Applies none of the Processing Options. Choosing None does not turn off Reverse Field Dominance when Reverse Field Dominance is selected.
- Always Deinterlace - Turns interlaced fields into non-interlaced, progressive-scan frames. Use this for clips intended for slow motion or freeze-frame work. Always Deinterlace drops one field and keeps whichever field is dominant according to the project's Fields setting under General in the New Sequence dialog box. It then builds the missing lines by interpolation from the dominant field's lines.

Note

When Fields is set to No Fields (Progressive Scan) in a sequence, Always Deinterlace keeps the upper field. In that same kind of sequence, selecting Reverse Field Dominance makes Always Deinterlace keep the lower field instead.

- Flicker Removal - Reduces flicker in thin horizontal image detail by softly blending the two fields. A one-scan-line object may flicker because it appears in alternating fields only. Flicker Removal blends neighboring lines at 50% without deinterlacing the clip. Graphics with thin horizontal lines benefit especially.

Select OK.

Tip

For video that looks rough when clip speed is not 100%, enable frame blending. Select Clip > Video Options > Frame Blend.

## Modifying clip properties with Interpret Footage

### Change a clip's properties in Adobe Premiere by choosing settings in the Interpret Footage dialog box.

In the Project panel, open the context menu for the clip whose property needs editing by right-clicking on Windows or Ctrl-clicking on macOS.

Select Modify > Interpret Footage.

Use the Interpret Footage tab in the Modify Clip dialog box to adjust clip properties.

- Frame-rate overrides: Change the frame rate of a clip
- Pixel-aspect controls: Change the Pixel Aspect Ratio
- Field-order controls: Change the field order of a clip
- Alpha and matte controls: Change Alpha channels and mattes

Select OK.

## Create a multi-camera source sequence

### Build a multi-camera source sequence from clips recorded by several camera sources.

Adobe Premiere can edit a multi-camera source sequence. The feature synchronizes footage from multiple cameras and lets editors switch among the angles. It is useful for concerts, interviews, and other shoots where several cameras record the same event.

Use Premiere multi-camera projects to sync angles and switch between them during editing.

Before you begin:

Create a project, then import clips that contain the different camera angles.

In the Project panel, select the clips and choose Clip > Create Multi-Camera Source Sequence.

Choose the method Premiere should use to synchronize the clips.

A multi-camera source sequence provides synchronization and editing for footage captured by multiple cameras.

The same multi-camera source sequence workflow lets multiple-camera footage be aligned and edited together.

- In Points, Out Points: Define exact in and out points on each clip so they line up manually. This option needs careful timing and fits smaller jobs or projects where audio-based sync is not essential. Learn more about marking clips for synchronization.
- Timecode: When the clips contain accurate timecode, use this option to align them from their timecode values.
- Select Create Single Multicam Source Sequence to put the clips into one multi-camera sequence. Use it when individual camera coverage contains gaps and the resulting sequence must keep those gaps. If this option is not selected, Premiere combines only overlapping clips, and clips without overlap are not used. Groups can be given a Camera Angle or Camera Label for reference during multicam creation. During metadata-based creation, groups with matching Camera Label or Camera Angle metadata fields go onto separate tracks. The same idea also applies to external audio or field audio.
- Select Ignore Hours when clips start at different timecode hours but otherwise overlap in timecode.

  - Linear Timecode: Choose this option to sync the clips from timecode stored in the clip's audio track.
  - Sound Timecode: Choose this option when synchronization should use a separate audio recorder.
  - Aux Timecode: Choose this option when embedded timecode exists as supplemental synchronization data rather than the primary timecode.

- Audio: Use this option to sync clips from a chosen audio track. It helps when every clip includes a shared audio source, such as a clapboard or voiceover.
- Clip Marker: Use markers placed at matching clip positions for synchronization. This helps align clips to specific events.

Choose sequence preset options.

- Sequence Preset: Choose a preset that fits the project requirements. The sequence preset Automatic is selected by default and comes from the video format of the Camera 1 clip. In most cases, Automatic is the right setting. For advanced workflows, such as editing a proxy-resolution sequence, choose a specific sequence preset. The final edit can then use higher-resolution clips or larger frame-size clips.
- Offset Audio by: When a separately recorded audio track does not line up with the video clip, enter a frame offset with Offset Audio by. For an audio-only clip, the sync offset can be entered in video frames from -100 to +100.
- Move Source Clips to Processed Clips bin: Select this option to place generated source clips in a Processed Clips bin. If the Processed Clips bin is missing, Premiere creates it before moving the clips. Clips that do not meet synchronization criteria remain outside the Processed Clips bin. This makes clips excluded from the resulting multicam source sequence easier to spot.

Choose audio sequence settings.

- Camera 1: Select Camera 1 when the editing sequence should use audio from Camera 1 only. Multicam editing is enabled only for the source sequence video. For A/V clips used to build the sequence, audio tracks tied to video 1 are unmuted, while other source-sequence audio is muted. When audio-only clips are used with video or A/V clips, the audio-only clips are placed on the highest tracks and left unmuted. Other linked-clip audio is muted and put on lower tracks. Channel assignments and panning for each track route every source channel to separate output channels, up to 32. The sequence's active output channels are determined by how many source-audio channels remain unmuted.

Note

Editing sequences created with this setting cannot use the audio follows video option, because multicam is not enabled for the audio portion.

- All Cameras: Select All Cameras to include all audio channels from the source clips. This resembles Camera 1: only the video part of the source sequence is multicam-enabled. Audio-follows-video is not available with this setting. All audio is unmuted, up to 32 channels. The count of unmuted source-audio channels sets the number of active output channels for the sequence.
- Switch Audio: Select this option when linked video should bring its audio along as the edit switches. This setting unmutes all audio and enables multicam editing for both audio and video in the source sequence when audio follows video is enabled in the Program Monitor. It also maps multi-mono source audio into one adaptive audio track. The audio-follows-video editing setting then switches that single track with the video. If the selected clips include audio-only clips, Premiere puts those audio-only clips below any linked clips and creates empty video tracks to match each audio-only track.

Choose audio channel presets.

- Automatic: Reads the first clip's audio type and applies that mapping.
- Mono: Uses one mono mapping for each output channel in the source sequence.
- Stereo: Uses stereo-track mapping based on the source sequence output-channel count.
- 5.1: Uses 5.1-track mapping based on the source sequence output-channel count.
- Adaptive: Uses Adaptive mapping derived from the source sequence output-channel count.

Choose the camera-name display method.

- Enumerate Cameras: Select this option to number camera angles automatically in the sequence name. It can help with identification and organization.
- Use Track Names: Show camera angles with track names.
- Use Clip Names: Show camera angles with clip names.

Select OK.

## Create and edit a multi-camera target sequence

### Create and edit a multi-camera target sequence so camera-angle switching stays simple and edits remain organized.

Before you begin:

Create a multi-camera source sequence and place it on the timeline so editing can begin like any other sequence.

In the Project panel, right-click the multi-camera source clips stored in the Processed clips folder, then select New Sequence from Clip to make the target sequence. The resulting sequence contains tracks for each camera angle.

In the Program Monitor, open the Button editor, select Toggle Multi-Camera View, and drag that button to the Program Monitor button bar.

Turn on Toggle Multi-Camera View to switch the Program Monitor into Multi-Camera mode.

This mode shows all camera feeds at the same time, letting editors choose which camera supplies footage for the final sequence.

(Optional) Add overlays. Overlays place a number on each clip inside the multicam clip, which lets hotkeys cut between camera angles. To add them, use the Program Monitor wrench icon and choose Overlays.

From either the Program Monitor or Timeline panel, start playback with the spacebar or with the Play and Stop toggle buttons. During playback, use a main-keyboard number key to cut to the matching camera.

Review playback after edits are made. The timeline shows the cut points where the active camera changes.

(Optional) To swap to another camera, select the timeline clip and then choose the camera in the Program Monitor. To retime a cut, choose the Rolling Edit Tool from the toolbar and reposition the cut.

## Mark clips for synchronization

### Mark clips for synchronization before beginning multi-cam sequence editing.

In Premiere multi-cam editing, synchronization marks matter for several reasons:

- Accurate Alignment: Marked clips help every camera angle and audio track line up precisely. That alignment is necessary for clean transitions among camera views while editing.
- Efficiency: Markers reduce manual alignment work. Rather than line up every clip by hand, editors can use markers to sync footage quickly and spend more time on creative edits.
- Consistency: Markers provide a dependable synchronization reference across the project, whether the workflow uses in points, out points, or clip markers.
- Flexibility: Synchronized clips make later adjustments easier because angle changes can be made without losing sync, keeping the edit workflow smooth.

Note

When clips are timecode-synchronized, or jam-synced, during production, marking clips for synchronization is unnecessary. The timecode still must match on every clip for synchronization to work correctly. To give all clips identical timecode, record the cameras with jam-synced timecode on location or edit each clip's timecode in Premiere.

Set an In point at a sync point near the clip's start. For example, place an In point where the clapperboard (slate) closes at the head of the clip.

Set an Out point at a sync point near the clip's end. For example, place an Out point where the clapperboard closes at the tail of the clip.

Place a clip marker at a sync point anywhere in the clip. For example, use an audio cue, cymbal crash, camera flash, or other action that can serve as the shared sync-point. Give every matching marker the same name for synchronization. In the Marker dialog box for each clip, type that shared clip marker name and select OK.

## Manage multi-camera thumbnails in the Project panel

### Customize Premiere shortcuts to speed multi-cam editing and control clip thumbnails in the Project panel.

The Project panel thumbnail can show a chosen camera angle. For a multi-cam thumbnail, the first camera angle is used by default. Keyboard shortcuts let you change that angle.

Before you begin:

Start with a project that contains imported clips from the different camera angles, plus a multi-camera source sequence.

Open Edit > Keyboard Shortcuts on Windows or Premiere > Keyboard Shortcuts on macOS, then search for Select Camera.

Assign shortcuts for Select Camera 1, Select Camera 2, and the remaining cameras. You can also assign shortcuts for Select Next Camera and Select Previous Camera. They change the multi-cam thumbnail only when the Project panel is active with one or more multi-cam clips selected.

Use the Keyboard Shortcuts panel to find Move Poster Frame 10 Frames Back. Also find Move Poster Frame 10 Frames Forward and Clear Poster Frame, then assign shortcuts to those commands. Select OK.

In the Project panel, choose Icon View or Freeform View to display clip thumbnails.

In the Project panel, choose one or more multi-cam clips.

Use the Select Camera # keyboard shortcuts, such as Select Camera 1 and Select Camera 2, to pick the camera angle that appears.

Poster frames, meaning thumbnail images, can also be set or adjusted. Select the clip in Icon View or Freeform View, then use keyboard shortcuts to shift the poster frame by 10 frames forward or backward.

Poster-frame behavior to keep in mind

- If a poster frame is already set on a clip, the command shifts that existing location ten frames forward or backward.
- When a clip includes a marked In point and this command is used, the poster frame moves ten frames from the start of the clip.
- Near the beginning or end of a clip, if fewer than ten frames are available, the poster frame is placed on the clip's first or last frame.
- For selections containing clips of different durations, some clips may no longer move their poster frames while other selected clips continue moving theirs.

To remove a poster frame, use the Clear Poster Frame keyboard shortcut; it works with one selected clip or multiple selected clips.

## Change the order of cameras in Source and Program Monitors

### Reorder cameras in the Source and Program Monitors to improve multicam editing.

Arrange cameras in the same order as the shot sequence you expect to use. Matching that order makes angle switching faster and more efficient while editing multi-camera sequences.

Before you begin:

After importing the files, create both the project and the multi-camera sequence.

From the Project panel, drag the sequence into the Source or Program Monitor.

Select the wrench icon, then choose Edit Cameras.

In the Edit Cameras dialog box, reorder cameras or turn individual cameras on and off with the On/Off buttons.

To change camera order, move cameras up or down, or use the On/Off switch to activate or deactivate them.

You can also move cameras upward or downward and toggle On/Off to control which cameras are active.

Select OK.

## Compare edits to clips in the Program Monitor

### Compare clip changes by enabling Comparison View in the Program Monitor.

At the bottom of the Program Monitor, select the Comparison View icon to enable comparison view.

Use the Comparison View icon in the Program Monitor when you need to compare clip changes.

The same Comparison View icon in the Program Monitor starts a comparison workflow for edited clips.

Comparison View in the Program Monitor supports these workflows:

- Shot Comparison: Shows different shots in side-by-side or split-view layouts, using a reference frame and a current frame. This workflow can also support color matching.
- Frame Comparison: Shows the same frame in side-by-side or split-view layouts so before-and-after effect results can be compared.

Use the Shot or Frame Comparison icon to switch between Shot Comparison and Frame Comparison. Display controls let you compare clip changes side-by-side, horizontally, or vertically.

Compare clip changes using side-by-side, vertical, or horizontal views.

Use side-by-side, vertical, or horizontal display options to compare changes in the clip.

By default, side-by-side display places the reference frame, or Before frame, on the left and the current frame, or After frame, on the right. Select the Swap Sides icon on the left side of the Program Monitor to exchange those positions.

In vertical or horizontal split modes, drag the blue splitter across the image to make an onion-skinning comparison between the shots.

Use the vertical comparison option for an onion-skinning comparison.

The vertical comparison option also supports onion-skinning review.

### Shot Comparison

Shot Comparison mode compares different shots.

- Current frame: The current frame comes from the playhead's parked position over a frame while the clip is selected.
- Reference frame: By default, the reference frame is the first frame of the full sequence. You can use the navigation icons in the reference frame to move to the previous or next edit point. The scrubbable timecode also lets you scrub to another reference frame. Premiere keeps the chosen frame for the editing session until another frame is selected.

Scrub the scrubbable timecode to choose a different reference frame.

Use the scrubbable timecode to select another reference frame.

## Open or clear a clip in the Source Monitor

### Open project clips in Source Monitor to preview and prepare footage before placing it on the timeline.

Open clips from the Project panel, or open individual clip instances from a sequence, in the Source Monitor when you need to inspect or edit source material. The Source menu on the Source Monitor tab shows the clips that are open.

### Open a clip

To open one clip, double-click it in the Project panel or Timeline panel, or drag it from the Project panel into the Source Monitor. Source Monitor displays the clip, and the Source menu receives its name.

You can also drag multiple clips, drag a complete bin from the Project panel into the Source Monitor, or select several clips in the Project panel and double-click them. Premiere adds clips to the Source menu in selection order, and the last selected clip appears in the Source Monitor.

Note

The Source menu shows master clips by name. When clips are opened from a sequence, the menu lists the sequence name, clip name, and sequence starting time for each clip.

### Clear a clip

In the Source Monitor, open the Source menu and select Close to clear one clip, or Close All to clear every clip.

Note

Another way to close all clips and the Source Monitor itself is to click the Close button in the Source Monitor tab.

## Navigate clips in the Source menu in the Source Monitor

### Navigate several clips in the Source Monitor with keyboard shortcuts.

Keyboard shortcuts can be assigned for moving among multiple clips loaded in Source Monitor. These shortcuts let users switch between clips, jump to the first or last clip, and close one or all clips through the pop-up menu in Source Monitor.

On Windows, open Edit > Keyboard Shortcuts. On macOS, open Premiere > Keyboard Shortcuts.

After the Keyboard Shortcuts dialog box appears, expand Commands and then Source Monitor Panel to show its shortcuts.

Choose any of these commands and assign keyboard shortcuts:

For example, Source Clip: Close and Source Clip: Close All are available there, along with other Source Monitor panel entries in the Commands list.

Keyboard shortcuts can be attached to Source Clip: Close, Source Clip: Close All, and the rest of the Source Monitor panel commands in the Commands list.

- Source clip: Close - closes the current source clip.
- Source clip: Close All - closes every loaded source clip.
- Source clip: First - jumps to the first source clip.
- Source clip: Last - jumps to the last source clip.
- Source clip: Next - advances to the next source clip.
- Source clip: Previous - returns to the previous source clip.

Select OK.
