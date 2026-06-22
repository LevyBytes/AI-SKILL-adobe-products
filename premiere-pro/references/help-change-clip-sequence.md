# Create A Sequence, Navigation Controls In The Timeline, Navigate Sequences In The Timeline, Change Sequence Settings ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create a sequence; Navigation controls in the timeline; Navigate sequences in the timeline; Change sequence settings; Sequence settings reference; Sequence presets and settings; Create a custom sequence preset; Copy and paste clips; Different ways to move clips; Rearrange clips on the timeline; Add tracks; Delete tracks; Rename tracks; Lift and paste frames; Edit track appearance; Sync Lock to prevent changes; Track Lock to prevent changes; Simplify a sequence.

## Create a sequence

### Build Adobe Premiere sequences and switch among them to keep editing work organized.

A Premiere project may include one sequence or several, and each sequence can use its own settings. Sequences can be built and rearranged in one or more Timeline panels, where clips, transitions, and effects appear visually. In a Timeline panel, a sequence may contain multiple video tracks and audio tracks that run in parallel.

Premiere lets you define settings for each sequence, trim clips, and assemble clips inside sequences.

Start from a project that already contains imported media.

For a new sequence, take a clip from the Project panel and drop it on the New Item icon in that same panel.

To place media into an existing sequence, drag a clip from the Project panel onto an existing sequence in the timeline.

## Navigation controls in the timeline

### Navigation controls help you move through the frames in a sequence.

Main navigation controls in the Timeline panel.

A. Time ruler B. Work area bar C. Playhead D. Playhead position E. Zoom scroll bar

Important navigation controls in the Timeline panel.

### A Timeline panel includes controls for moving through sequence frames.

### Time ruler

The Time ruler measures sequence time horizontally. Its numbers show sequence time across the ruler from left to right, and they update based on the detail level used to view the sequence. By default, those numbers follow the timecode display style set in the Display Format field of the Sequence Settings dialog box.

### Work Area Bar

The Work Area Bar identifies the section of a sequence used for preview rendering, or the region intended for export. It sits in the lower part of the time ruler. By default, the work area bar is not shown. To enable it, select the three stacked lines beside the sequence name, then choose Work Area Bar from the dropdown menu. You can set the sequence work area by dragging the Work Area Bar edges or by using keyboard shortcuts.

### Playhead

The Playhead marks the frame currently shown in the Program Monitor. On the ruler, the playhead appears as a blue triangle, with a vertical line running down to the bottom of the time ruler. Dragging the playhead changes the current time.

### Playhead position

Playhead position displays the timecode for the current frame in a Timeline panel. To jump elsewhere, select Playhead position, then type the destination time. Another option is to hover over the display and drag left or right. To swap between timecode and a simple frame count, use Ctrl + click (Windows) or command + click (macOS) on the current time in either the monitor or the Timeline panel.

### Zoom scroll bar

Use the zoom scroll bar at the bottom of the Timeline panel when you need to change how much of the time ruler is visible. Drag its edges to zoom the timeline in or out.

Note

- Widening the bar to its full width shows the complete duration of the time ruler. Narrowing the bar zooms in for a closer ruler view. The playhead remains the center point for this expansion and contraction.
- With the pointer over the bar, scroll the mouse wheel to widen or narrow the bar.
- Drag the middle of the bar to scroll the visible time-ruler area without changing scale. This action does not move the playhead. You can move the bar first, then select the time ruler to place the playhead in the same area.
- macOS gestures work with the zoom scroll bar.

## Navigate sequences in the timeline

### Navigate sequences efficiently in Adobe Premiere with the Timeline panel.

The Timeline panel can contain no sequences, one sequence, or several sequences. Each sequence is shown as a tab in that timeline. You can also open multiple timeline frames, and each frame can hold any number of sequences.

The Timeline panel menu lets you show or hide items by selecting or deselecting them, including time ruler numbers and the work area bar.

### Open a sequence in the Timeline panel

Double-click a sequence in the Project panel when you need it opened in the Timeline panel. Premiere places it in a new tab.

Projects with multiple sequences can display more than one timeline. Opening a sequence creates a new tab; drag that tab to another docking area to show the sequence in a separate timeline.

### Position playhead in the Timeline panel

Several methods can place the playhead where you need it.

Time ruler:

Select the playhead in the time ruler or drag it there directly. When snapping is needed, hold Shift while dragging in the Timeline panel so the playhead lands on clip edges or markers.

Playhead Position:

- Drag the timecode to scrub.
- Choose Playhead Position, type the timecode, and use Enter (Windows) or Return (macOS).

Program Monitor:

Move the playhead with the playback buttons.

For keyboard shortcuts:

- Move one frame with the Left or Right arrow keys.
- Move five frames at a time with Shift + Arrow keys.

### Use timecode for precise navigation

Select the Playhead Position timecode field.

Enter a new time, then press Enter (Windows) or Return (macOS). For faster entry, use the timecode shorthand substitutes.

### Zoom in and out of sequences

Choose among these methods when changing the zoom level for sequences.

For keyboard shortcuts:

- Press + to zoom in.
- Press – to zoom out.

Keep the Timeline panel active before applying these shortcuts.

At the bottom-centre of the Timeline panel, use the horizontal zoom scroll bar.

- Pull the edges inward to zoom in.
- Pull the edges outward to zoom out.

With the Timeline panel selected, use a trackpad pinch gesture to zoom.

### Scroll horizontally in a sequence

Long sequences can place some clips outside the visible area. To move sideways and reveal hidden sections of the sequence, use one of these methods.

Note

The Timeline panel can remain unselected, provided the mouse pointer is hovering there.

Keyboard shortcut options:

- Press Page Up to scroll left.
- Press Page Down to scroll right.

For sideways navigation, use the horizontal scroll bar at the bottom centre of the Timeline panel and drag left or right.

On a multi-touch trackpad, swipe left or right with two fingers to scroll through the sequence.

### Scroll vertically in a sequence

When video or audio clips stack up on timeline tracks, some clips can fall outside view. Use one of these methods to scroll vertically.

## Change sequence settings

### Adjust existing sequence settings in Adobe Premiere, including frame size, timebase, audio, and other options.

For an existing sequence, Premiere can change core values such as frame size and timebase, the pixel aspect ratio, audio format choices, preview codec selection, and color management. Make these changes deliberately because playback or quality can shift when fundamental parameters change.

To change sequence settings, use one of these choices:

- Use Sequence > Sequence Settings.
- From the Project panel, right-click a sequence, then select Sequence Settings.

In the Sequence Settings dialog box, set parameters including frame size, timebase, and preview codec.

In the Sequence Settings dialog box, configure parameters including frame size, timebase, and preview codec.

Change the sequence settings for project-specific requirements, then select OK.

## Sequence settings reference

### Set Adobe Premiere sequence settings so they match the project's specific requirements.

In the New Sequence dialog box, the settings tab defines the sequence's basic characteristics.

Base the settings on the specifications required by the intended project output. Random changes to these values often reduce quality.

### Editing Mode

The Editing Mode sets the video format Premiere uses for playback and preview files. Pick an Editing Mode option that aligns with the target format, preview display, or capture card specifications. Editing mode is separate from the final movie format. During export, choose the output settings. With Custom editing mode, the remaining sequence settings can be customized.

### Timebase

Timebase is the set of time divisions Premiere uses when computing each edit's time position. Common choices are 24 for motion-picture film editing, 25 for PAL (European standard) and SECAM video editing, and 29.97 for NTSC (North American standard) video editing.

### Video

Note

For NTSC video assets, choose 30-fps drop-frame timecode. That format matches the timecode base built into NTSC video footage and displays duration accurately.

### Video Previews

### Composite In linear color (requires GPU acceleration or max render quality)

For blended frames, Composite in linear color (linear light) can create a more photo-realistic result, such as composites involving natural images with alpha or feathered masks. In some cases, this option lowers halos around text or graphics. Linear fades appear smoother when this option is off.

### Save Preset

This opens the Save Settings dialog box, where sequence settings can be named, described, and saved.

## Sequence presets and settings

### Use sequence presets and settings in Adobe Premiere so resolution, frame rate, and codec are correct from the start.

Set sequence settings correctly at creation time. Values such as time base are locked after sequence creation, which avoids inconsistencies that could come from later sequence-setting changes.

While creating a sequence, choose one of the standard sequence presets, or define a set of settings and save it as a custom sequence setting preset. For nearly complete control of sequence parameters, create a new sequence and adjust its settings yourself.

Creating a sequence displays the New Sequence dialog box. The New Sequence dialog box has three tabs with settings: Sequence Presets, General, and Tracks.

### Sequence Presets options

Available Presets are collections of sequence settings. Premiere installs several sequence settings preset categories, including:

- AVC-Intra
- AVCHD
- Digital SLR
- DV-24p
- DV-NTSC (North American standard)
- DV-PAL (European standard)
- DVCPRO50
- DVCPROHD
- Mobile and devices
- XDCAM EX
- XDCAM HD422
- XDCAM HD

These presets provide appropriate settings for common sequence types. For media shot on Panasonic P2 video cameras in AVC-Intra or DVCPRO formats, choose the AVC-Intra, DVCPRO50, and DVCPROHD sequence setting presets. If the P2 source is DV25, select DV-NTSC or DV-PAL according to the footage's television standard.

Note

If settings you need cannot be changed, create a sequence using the desired settings. Then move the current sequence contents into it.

### Selecting a Sequence Presets

A sequence may include different asset types, formats, and parameters. Premiere performs best when sequence settings mirror the parameters shared by most assets in that sequence. Before creating a sequence, identify parameters for the primary assets you plan to edit, which improves performance and reduces rendering time. Once those parameters are known, create matching sequence settings. For tape-based capture, collect these details beforehand so the correct capture settings can be chosen. Asset parameters include the following:

- Recording format (for example, DV, or DVCPRO HD)
- File format (for example, AVI, MOV, or VOB
- Frame aspect ratio (for example, 16:9, or 4:3)
- Pixel aspect ratio (for example, 1.0, or 0.9091)
- Frame rate (for example, 29.97 fps, or 23.976 fps)
- Time base (for example, 29.97 fps, or 23.976 fps)
- Fields (for example, progressive or interlaced)
- Audio sample rate (for example, 32 Hz or 48 Hz)
- Video codec
- Audio codec

Use the Properties panel to review many of these asset parameters.

You may also inspect files with a third-party tool such as the freeware MediaInfo or GSpot Codec Information Appliance. In Apple QuickTime Player, choose Window > Show Movie Inspector to see the codecs used to create a file.

Some assets rely on codecs Premiere does not support natively. Installing the relevant codecs often makes editing possible, but untested codecs can introduce severe problems with your computer system.

### Using multiple sequences

A single project can hold multiple sequences with different settings. You choose settings for each sequence at creation time, and some settings can still be changed after the sequence exists.

- Switch sequences by choosing the desired sequence tab in the Program Monitor or Timeline panel. That sequence becomes the frontmost tab in both panels.
- For a separate Timeline panel view, drag the Sequence tab away from the panel into an empty area. Ctrl-drag (Windows) or command-drag (macOS) prevents the panel from docking.
- Open a sequence in the Source Monitor by holding Ctrl or Command and double-clicking it in the Project panel. For a nested sequence inside the Timeline panel, hold Ctrl or Command and double-click it.

## Create a custom sequence preset

### Build a custom sequence preset in Adobe Premiere for reuse of preferred settings in later projects.

Not every editing mode accepts every possible frame rate. For a custom preset at 23.976-fps frame rate, for example, set Editing mode to Custom. Then choose 23.976-fps from the Timebase menu.

Next, select File > New > Sequence.

In the New Sequence dialog box's Sequence Presets tab, choose the preset that matches your video footage or capture-card requirements.

Modify the Settings, Tracks, or VR Video tabs as needed.

Save by naming the preset, adding a description, and selecting OK.

## Copy and paste clips

### Copy and paste clips inside an Adobe Premiere sequence to streamline editing.

Within Adobe Premiere, copying and pasting clips in a sequence lets you reuse material quickly, test alternate edits, or reorganize the timeline.

When duplicating shots, reusing audio, or rearranging content, copy and paste operations help build and refine edits without rebuilding from the beginning.

Follow this sequence for copying and pasting clips:

Click a clip to select it. To select multiple clips, hold Shift while selecting.

After clips are selected, right-click one selected clip and select Copy from the context menu.

To paste copied clips at a particular timeline location, move the playhead to the desired position.

Right-click the location where clips should be pasted, then select Paste from the context menu.

## Different ways to move clips

### Move clips around the Timeline to arrange video and audio elements in Adobe Premiere.

Premiere provides several timeline clip-moving methods, and the best choice can depend on project complexity and the intended result. Apply these methods when moving clips for your edit.

The most direct method is selecting a clip and dragging it to another timeline location.

Drag and drop a selected clip to reposition it on the timeline.

Selected clips can also be nudged left or right in small increments with keyboard arrow keys. This helps with precise adjustments. Hold down Ctrl (Windows) or command (macOS) while pressing the arrow keys for larger nudge adjustments.

When other clips should adjust automatically to make room during a move, use the Ripple Edit tool.

Use the Ripple Edit tool to trim while shifting adjacent clips automatically, keeping the timeline gap-free.

Use comma (,) and period (.) keys for insert and overwrite edits, respectively. Comma (,) inserts a clip at the playhead position; period (.) overwrites a clip there.

## Rearrange clips on the timeline

### Set clip order in an Adobe Premiere video.

To rearrange clip order, select clips and move them to a new timeline position.

A rearranged clip can overlap other clips or leave gaps between clips. Premiere permits overlaps, and the higher-track clip is visible. Empty space between clips after rearranging can create gaps.

Select the clip on the timeline.

Hold Ctrl + Alt (Windows) or command + option (macOS), then drag and drop it to a new location.

While a rearrange edit is active, the Rearrange icon appears.

Release the clip to place it in the new location.

Only clips in the destination track shift; other tracks are not changed.

## Add tracks

### Add new audio or video tracks in Adobe Premiere.

New video tracks are placed above existing video tracks, while new audio tracks are placed below existing audio tracks. Removing a track deletes all clips on that track but leaves source clips in the Project panel unchanged. Projects can contain any number of tracks subject only to system resources. You may also create a track while adding a clip to the sequence.

Activate the Timeline panel, open the track context menu, and choose Add Track. That command appears in the drop-down list.

In the Add Tracks dialog box, use any of these actions:

- For the desired track count, type the needed count into the video, audio, and audio submix add fields.
- To define placement for new tracks, use Placement menu options for each added track type.
- For the audio or submix track type, choose an option from the Track Type menu.

Note

An audio track accepts only audio clips with matching channel type — mono, stereo, or 5.1. If unsure which audio type your clips use, select the clip in the Project panel and check its information in the preview area.

## Delete tracks

### Delete audio or video tracks in Adobe Premiere.

As the project changes, unused audio or video tracks may remain in the sequence. Deleting them keeps the timeline cleaner, more organized, and easier to navigate. Adobe Premiere can delete one empty track or multiple empty tracks quickly to simplify the workspace.

To begin, select Sequence > Delete Track.

In the Delete Tracks dialog box, mark every track type targeted for deletion.

Remove unused audio or video tracks from your sequence with the Delete Tracks dialog box.

The Delete Tracks dialog box can clear unused audio or video tracks from your sequence.

For each checked item, choose which tracks to delete in its menu and select OK.

## Rename tracks

### Rename audio and video tracks in Adobe Premiere so the timeline stays organized and complex projects are easier to manage.

Renaming clips in Adobe Premiere supports organization, especially in large projects or with camera file names that look similar. In the Project panel, clip names can be changed for easier identification while leaving the original media file on the drive untouched.

On the track's name, use Right-click (Windows) or Ctrl-click (macOS), then select Rename.

Type a new name for the track, then use Enter (Windows) or Return (macOS).

## Lift and paste frames

### Use lift editing to remove frames from a sequence, then insert those frames elsewhere on the timeline while the original position remains an empty gap.

Lift and paste fits edits where a clip segment should move to another timecode without shortening or lengthening the sequence.

In the Timeline panel, select the track headers for the tracks that contain the frames to lift.

In the Program Monitor, select the Lift icon.

Select the header for the destination track that will receive the lifted frames.

Move the playhead to the timeline point where the lifted frames should be inserted.

Select Edit > Paste.

Move part of a clip to another position with lift and paste while the sequence duration stays unchanged.

## Edit track appearance

### Review how Adobe Premiere handles track exclusion, track settings, expansion, and resizing.

### Exclude tracks in a sequence

Exclude video or audio clips on any track from preview playback and export. In the Program Monitor and exported files, excluded video tracks display as black video. Excluded audio tracks are omitted from the Audio Mixer, speakers, and exported files.

To hide a track, select the Eye icon (for video) or the Mute icon (for audio) on the track's left edge.

The icons work as toggles. Select the box again to show the icon and return the track to the included state.

Note

For all video tracks or all audio tracks at once, use Shift-click on the Eye icon for video tracks or the Mute icon for audio tracks. This excludes every track of that media type. The boxes still toggle; Shift-click the box again to restore all icons and include those tracks.

### Expand and resize a track

Expanding a track reveals its track controls. Increasing track height gives more room for icons and keyframes, and can show larger video track thumbnails or audio track waveforms.

For track resizing, place the pointer in the track header area between two tracks until the height adjustment icon appears.

Drag up or down to change the size of the track below (for video) or the track above (for audio).

### Resize the track header section

To adjust track header section width, place the pointer on the right edge of the track header until the resize icon appears.

Then drag that right edge. Icons at the top of the track header set the minimum width, and the maximum width is approximately two times that minimum.

### Set the display style of a track

Select the wrench tool in the Timeline panel, open Timeline Display Settings, and set the video track's display style.

## Sync Lock to prevent changes

### Use Sync Lock in Adobe Premiere to protect timing relationships while editing clips.

Turning on Sync Lock controls which tracks move during edits such as insert, ripple delete, or ripple trim. When the edited clip belongs to the operation, its own track moves no matter how sync lock is set. Other tracks move their clip content to the right only on tracks where Sync Lock is enabled.

For selected tracks, enable Sync Lock by selecting the Toggle Sync Lock icon at the start of each video or audio track you want locked.

To cover every video track or every audio track, use Shift-click on any track's Toggle Sync Lock icon for that type.

Select the Toggle Sync Lock icon to turn on Sync Lock for the chosen track.

Select the Toggle Sync Lock icon to turn on Sync Lock for the chosen track.

To turn off Sync Lock for one or more tracks, select the Toggle Sync Lock box again; use Shift-click to clear all tracks of a type so the box no longer shows the Sync Lock icon.

## Track Lock to prevent changes

### Use Track Lock in Adobe Premiere when you need to prevent changes to tracks.

Lock a full track when clips on that track must stay untouched while other sequence areas are edited. In the Timeline panel, locked tracks show a slash pattern. Although clips on a locked track cannot be changed, Premiere still includes them during preview and export.

To protect both a video track and its matching audio track, lock the two tracks separately. Once a target track is locked, it stops being the target. Source clips cannot go onto that track until you unlock it and target it again.

For selected tracks, turn on Track Lock by selecting each video or audio track's Toggle Track Lock icon in its track header.

In the Timeline, selected tracks can be locked. When track lock is enabled, a small lock appears locked and blue.

In the Timeline, selected tracks can be locked. When track lock is enabled, a small lock appears locked and blue.

To lock every video track or every audio track, use Shift-click on any Toggle Track Lock box for that track type.

When track lock applies to every selected Timeline track, the small lock shows blue and locked.

When track lock applies to every selected Timeline track, the small lock shows blue and locked.

## Simplify a sequence

### Create a simplified duplicate sequence in Adobe Premiere when unwanted items need to be removed.

Simplify Sequence makes the timeline easier to scan, letting you concentrate on the edit's story. It also helps prepare a cleaner sequence before handoff or export to another editor.

Choose the sequence, then select Sequence > Simplify Sequence. You can also right-click a sequence and select Simplify Sequence.

Premiere creates a duplicate sequence and opens the Simplify Sequence dialog box, where you decide which items should be left out of the copy.

Create a simplified sequence by using options that close gaps, flatten Multi-Camera clips, and remove unneeded elements.

Create a simplified sequence by using options that close gaps, flatten Multi-Camera clips, and remove unneeded elements.

Use these options to tune the new sequence:

- Close vertical gaps on video tracks: shifts clips lower until they meet a blocking clip or locked track.
- Flatten Multi-Camera clips: turns multi-camera clips back into their original source clips so they are no longer switchable.
- Remove from elements: lets you choose removal from video tracks, audio tracks, or both.
- Remove sequence markers: removes markers according to color.

After choosing the options you want, select Simplify to generate the simplified sequence.
