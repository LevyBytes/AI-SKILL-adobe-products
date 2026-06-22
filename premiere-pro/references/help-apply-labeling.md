# Overview Of Markers, Add A Marker To A Clip, Copy And Paste Sequence Markers, Find Move And Delete Markers ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview of markers; Add a marker to a clip; Copy and paste sequence markers; Find, move, and delete markers; Set default marker colors; Show or hide markers by color; View and edit marker properties; Share markers with After Effects; Overview of timecode; Enter timecode; View Sequence Timecode; Choose timecode display format; View source timecode in the Program Monitor; Change timecode display format; Timecode display options; Set clip timecode manually; Label colors in sequence tabs.

## Overview of markers

### Review the marker types that Premiere provides and how the Markers panel fits into marker work.

In Adobe Premiere, markers identify meaningful times and help structure the video-editing process.

### Types of markers

Premiere includes these marker types:

- Comment Marker: Place notes or comments on selected timeline sections.
- Chapter Marker: Set viewer navigation points in the completed video.
- Segmentation Marker: Mark video ranges for automated workflows, such as commercial-break detection.
- Web Link: Attach URLs that point to more information for the chosen clip section.
- Flash Cue Point: Marker type for embedding timed metadata into the video. ActionScript in Adobe Animate projects can read these markers.

### Navigate the Markers panel

The Markers panel (Window > Markers) shows and manages every marker in the currently open clip or sequence. Double-click a marker when you need to inspect its properties.

The Markers panel lists all markers for the project. Double-click any marker to view marker details or edit them.

The Markers panel lists all markers for the project. Double-click any marker to view marker details or edit them.

### Understand markers display in the Markers panel

When two or more timeline track items that contain markers are selected, the Markers panel lists those markers together. The same panel can remove several selected markers in one action.

When a selected track item has markers, the Markers panel uses sequence timecode. If a clip containing markers is opened in the Source Monitor, the panel switches to source timecode.

The Markers panel also includes newer visual indicators that show the placement of Source or Sequence In and Out points relative to the listed markers.

## Add a marker to a clip

### Add markers to clips in Adobe Premiere. Markers give you reference points in video for editing and review.

### Add a marker in the Source Monitor

Markers placed in the Source Monitor are useful when key positions in raw footage need to be marked before the clip is added to a sequence.

Drag a clip from the Project panel into the Source Monitor.

Set the playhead at the point where the marker should be created.

Select Markers > Add Marker, or press M on the keyboard.

The marker is created at the playhead. Source Monitor markers travel with the clip into the Timeline, so key footage moments remain visible after the clip is added.

### Add a marker in the Timeline

Markers placed in the Timeline are useful for points inside the edited sequence, including sync positions, edit decisions, or sections needing revision.

Place the clip on the Timeline by dragging it from either Project panel or Source Monitor.

Set the playhead at the point where the marker should be created.

Select Markers > Add Marker, or press M on the keyboard.

The marker is created at the playhead.

### Add a marker in the Effect Controls panel

In the Effect Controls panel, all markers made in the Timeline panel are visible; you can add markers for effect placement and create or adjust markers from there.

Within the Effect Controls panel, move the playhead to the location for the new marker.

Right-click (Windows) or Control-click (macOS) on the ruler area in the timeline.

Select Markers > Add Marker, or press M on the keyboard.

The marker is created at the playhead.

## Copy and paste sequence markers

### Copy and paste sequence markers while keeping every piece of marker information intact.

When items are copied and pasted from the timeline, sequence markers can be included so their marker data moves with the edit in one copy or paste operation. Marker details, including color, notes, duration, and marker type, remain intact during the operation.

Before you begin:

Use a sequence that already contains markers in the timeline.

Select Markers > Copy Paste Includes Sequence Markers.

In the Timeline panel, choose the clip that contains the markers to copy.

Paste the clip. The clip is pasted along with all of its markers.

## Find, move, and delete markers

### Find markers in Adobe Premiere, reposition them, or remove them entirely.

### Find markers through the Search panel

Search project markers to locate media moments quickly by using metadata such as marker name, comments, or color.

Select the magnifying glass icon at the upper-right of Premiere to open the Search panel.

From the Search panel drop-down menu, choose Marker.

Use the Search panel to find markers and narrow the results with marker metadata.

Use the Search panel to find markers and narrow the results with marker metadata.

Type a keyword in the search bar; valid searches include marker name, marker comments, or marker color.

Double-clicking a marker result sends the playhead to that marker in the Timeline or Source Monitor. For range markers, the playhead goes to the start of the marked range.

### Navigate among markers

In the timeline, select the marker icon.

To jump forward, select Marker > Go to Next Marker; to jump backward, select Marker > Go to Previous Marker.

### Move a marker

For a clip marker on a clip already placed in a sequence, first open that clip in the Source Monitor.

In the Source Monitor time ruler, drag the marker icon.

Note

When you drag a marker in the Source Monitor or Program Monitor time ruler, the matching marker icon moves in the Timeline panel.

For a sequence marker, drag the marker in either the Timeline panel or the Program Monitor time ruler.

### Delete a marker

Position the playhead on the marker.

Select Marker > Clear Selected Marker.

To remove every marker, select Marker > Clear Markers.

## Set default marker colors

### Configure marker colors in Adobe Premiere by assigning keyboard shortcuts.

Green is the default marker color. To use another default through shortcuts, assign one shortcut for every available color swatch.

Select Edit > Keyboard Shortcuts (Windows) or Premiere > Keyboard Shortcuts (macOS).

Under Command, create shortcuts for each marker color. To see available marker colors, type marker in the search field, then go to the bottom of the Markers section.

Assign shortcuts for different marker colors so editing can move faster.

Assign shortcuts for different marker colors so editing can move faster.

During editing, you can set markers in the colors you want by using the matching keyboard shortcuts.

## Show or hide markers by color

### Use the Markers panel in Adobe Premiere to filter marker visibility by color.

Before you begin:

Add markers to at least one clip or sequence.

Open Markers panel by selecting Window > Markers.

At the top of the Markers panel, find the color filter checkboxes.

Select each marker-color checkbox you want shown, and clear any color checkbox you want hidden.

The Markers panel shows markers according to the colors selected in that panel.

The Markers panel shows markers according to the colors selected in that panel. Note

If every color checkbox is cleared, Premiere displays all markers.

The Timeline, Markers panel, Effect Controls panel, Program Monitor, and Source Monitor update so only the selected marker colors are shown.

## View and edit marker properties

### In Adobe Premiere, inspect marker properties with either of two methods.

Before you begin:

Work in a project where markers already exist in Source Monitor or the timeline.

Double-click a timeline marker to open the Marker dialog box; from there you can view and edit marker properties.

Add marker information, revise existing marker information, or change the marker type.

Add marker information, revise existing marker information, or change the marker type.

You can also open the Markers panel with Window > Markers to view every marker and its comments.

## Share markers with After Effects

### Share markers between Adobe Premiere and Adobe After Effects.

Markers can move between Premiere and After Effects through any of these methods.

### Import a Premiere project into After Effects

Open After Effects.

Choose File > Import > File.

Pick your Premiere project (.prproj) file.

During import, After Effects changes Premiere sequence markers into composition markers.

### Use dynamic link

In Premiere, choose the sequence that needs to be shared.

In After Effects, use File > Adobe Dynamic Link > Import Premiere Sequence.

After import, those markers show up in After Effects as composition markers.

### Copy and paste clips with markers

In Premiere, highlight the clip or sequence that contains markers.

Use Ctrl+C (Windows) or Cmd+C (macOS) to copy it.

Switch to After Effects, then choose the target timeline or composition.

Use Ctrl+V (Windows) or Cmd+V (macOS) to paste.

Based on where the content is placed, the markers remain available as layer markers or composition markers.

## Overview of timecode

### Use continuous timecode in Adobe Premiere to make video production and editing more efficient.

Timecode labels and follows exact frames or points inside a video sequence. It uses hours, minutes, seconds, and frames, giving editors a precise reference for locating and synchronizing parts of a video project.

Review timecode and recommended practices for keeping it continuous during efficient video production and editing.

### Importance of timecode

Timecode matters in several ways:

- It lets you log and follow exact moments in media, which makes later searching, cataloging, and retrieval of scenes or clips easier.
- With multiple audio and video tracks, it gives you the reference needed to align, synchronize, and edit them accurately.
- When several people or teams share one project, timecode gives everyone the same reference point and timebase.

Note

For best results, keep timecode continuous from the first recorded frame through the last. It should not reset to zero partway through a recording.

### Tips to shoot with unbroken timecode

To keep timecode continuous:

- Work with professional cameras and audio recorders that include built-in timecode generators.
- Watch the timecode on the cameras and audio recorders, and confirm that it keeps running without breaks.
- Capture at least five seconds of extra video after the action ends in each shot.

## Enter timecode

### Enter timecode in Adobe Premiere so you can jump to exact frames for precise edits.

During video editing, timecode entries are used repeatedly. Each value uniquely identifies one video frame and contains four parts: hours, minutes, seconds, and frames. Common uses include setting clip In and Out points or moving to a Timeline panel position. Premiere supports several methods for entering timecode.

When Premiere calculates the span between In and Out points, the frames identified by those timecode values are included. If the same timecode is entered for both the In and Out points of a clip, the result is a one-frame duration. While typing timecode, periods can replace colons, and punctuation can be omitted. Premiere reads the typed digits as hours, minutes, seconds, and frames.

To enter an exact timecode, select the current timecode, type the replacement value, and press Enter (Windows) or Return (macOS).

Note

Do not type the punctuation characters. Premiere adds them automatically.

Use timecode entry for exact navigation, frame-accurate edits, and efficient alignment between video and audio.

Enter timecode when you need precise movement, frame-perfect trimming, or quick audio-video alignment.

To change the current timecode by dragging, drag horizontally on the timecode. Drag left when you want an earlier value.

To offset the current timecode with a relative value, type a plus sign or minus sign followed by the number of frames to add or remove. For example, to move five frames earlier, select the full timecode, type -5, and press Enter (Windows) or Return (macOS).

Shorthand entries can use a period while entering timecode. Premiere maps the digits you provide into the four timecode fields: hours, minutes, seconds, and frames.

Shorthand examples:

- 1. places the CTI at 00:00:01:00
- 2. places the CTI at 00:02:00:00
- .1 places the CTI at 00:00:00:01
- .24 places the CTI at 00:00:01:00 for a 23.976fps sequence
- .1234 places the CTI at 00:00:51:10 for a 23.976fps sequence

## View Sequence Timecode

### View and customize sequence timecode in Adobe Premiere.

Premiere shows timecode through the Timecode panel, which includes several controls for working with the display.

To open that panel, choose Window > Timecode.

Right-click the Timecode panel, choose Display > Sequence, then select the sequence timecode to display, such as Current Time, In/Out, or Absolute.

Display the sequence's current timecode at the playhead.

Show the playhead's current sequence timecode value.

## Choose timecode display format

### Choose a timecode display format in Adobe Premiere that fits the project's frame rate and editing workflow.

Premiere initially shows the timecode that a clip had when it was recorded to its source medium.

A clip keeps showing its source timecode even when it is placed in sequences with a different timebase. If the clip timebase and sequence timebase do not match, source timecode can still simplify logging. For example, a 24p clip may have a 30fps timebase and 30fps timecode. Premiere displays that clip's original 30fps timecode, even inside a 23.976 timebase sequence. You can instead set Premiere to show each clip's timecode beginning at 00:00:00:00.

Premiere also lets you decide how frame numbers appear when a panel uses a Frames or Feet + Frames display. Frame counts can begin at 0, begin at 1, or be derived from source timecode. If a 30-fps clip frame has source timecode 00:00:10:00, Timecode Conversion assigns that frame the number 300 because 10 seconds at 30 fps equals 300 frames.

Choose Edit > Preferences > Media (Windows) or Premiere > Preferences > Media (macOS).

From the Timecode menu, choose one of these options:

- Use Media Source: displays the timecode recorded in the source.
- Start at 00:00:00:00: makes every clip's displayed timecode begin at 00:00:00:00.

Choose Use Media Source for Timecode when the display should match the original media source timecode.

Select Use Media Source for Timecode to show timecode from the media's original source.

From the Frame Count menu, choose one of these options:

- Start at 0: numbers frames in sequence, with the first frame numbered 0.
- Start at 1: numbers frames in sequence, with the first frame numbered 1.
- Timecode Conversion: creates frame-number equivalents from source timecode values.

Set frame numbering to start with 0 when that matches the project's preferences.

Choose a frame-numbering start of 0 according to the preferences for your project.

Select OK.

## View source timecode in the Program Monitor

### View source timecode in the Program Monitor while tracking or adjusting clip timing during Adobe Premiere editing.

During editing, Premiere can show source timecode in the Program Monitor preview for sequence clips:

- When you trim a clip, Premiere shows that clip's source timecode.
- During a slide edit, Premiere displays the new source media In and Out points for the neighboring clips.
- During a slip edit, Premiere displays the clip's new source media In and Out points.

Choose Overlays from the Program Monitor menu.

Enable the timecode overlay so it can appear during editing.

Turn on the timecode overlay display for use while editing.

A check mark means the command is active and the Program Monitor is showing timecode.

## Change timecode display format

### Change Premiere timecode display formatting.

Any panel that shows timecode as hot text can use a different timecode display format.

For audio-unit timecode such as Audio Samples or Milliseconds, open the panel menu in the Timeline panel and choose Show Audio Time Units. Use Show Audio Time Units when the timecode readout should switch to audio units.

Choose Show Audio Time Units to use audio-unit timecode. Set timecode to Audio Samples or Milliseconds with File > Project Settings > General. Under Audio, choose Display Format options. Use the Display Format drop-down menu to define how timecode appears for audio tracks.

Use the Display Format drop-down menu to choose the timecode presentation for audio tracks.

To cycle formats from hot text, use Ctrl-click (Windows) or Command-click (macOS) on the timecode display.

The Program Monitor, its Trim Monitor instance, and the Timeline panels use matching timecode display formats. Changing the format in one of those panels updates the other as well.

- Drop-Frame
- Non-Drop-Frame
- Feet + Frames 16mm
- Feet + Frames 35mm
- Frames

## Timecode display options

### Review the available timecode display options in Premiere.

### Sequence display

This setting controls both the appearance and behavior of timecode in the Timeline panel and Program Monitor.

- Current Time: shows the main source timecode.
- Absolute: shows timecode that begins at zero and advances one frame at a time from the start.
- Duration: shows the complete length of the timeline.
- In/Out: shows the In and Out range.
- Remaining: shows the time from the Current Time Indicator (CTI) to the sequence end.
- Top Clip Name: shows the name of the top clip under the CTI.

### Source Tracks display

Source Tracks represent the video and audio tracks present on a timeline. Select a track to display its source timecodes.

### Format display

Use the Format options when you need to change the default timebase format or show timecode in frames or feet.

### Compact display

In Compact view, Premiere does not add a tag; only the label color changes.

### Full Size

When the timecode panel uses Full Size view, Premiere adds a tag after another format is chosen and changes the label color from white to orange.

### Other display options

- Add Line and Remove Line: adds or deletes one timecode line.
- Compact and Full Size: changes the Timecode panel UI between compact and full-sized views.
- Save Preset: stores timecode layouts and binds shortcuts to presets.
- Manage Presets: assigns alternate shortcuts to presets or removes presets.

To make the Timecode panel larger, drag the lower-right corner of the window outward.

## Set clip timecode manually

### Manually set Premiere timecode when clips or sequences need specific time references for alignment.

Premiere lets you replace the timecode recorded for a clip.

Select the clip in the Project panel.

Choose Clip > Modify > Timecode, set the needed options, and select OK. To manually change the timecode, choose the Timecode option.

To manually change the timecode, choose the Timecode option.

Note

If your workflow depends on changing source clips with Modify > Timecode, do not use proxies in Premiere. That combination can cause unexpected behavior.

## Label colors in sequence tabs

### Use label colors in sequence tabs so sequences are easier to categorize and identify visually.

Color assignments on sequence tabs make different sequence types or project stages easier to distinguish quickly.

Select the wrench tool in the Timeline panel.

Turn on Show Sequence Label Color, which is disabled by default.

A label color swatch appears to the left of the sequence name in the Timeline panel.

Display and customize label colors for sequence tabs so sequences are easier to organize and recognize quickly.

Customize sequence-tab label colors and display them to make organization and identification faster.
