# Selecting Audio, Copying Cutting Pasting Deleting Audio, Visually Fading Changing Amplitude, Markers ...

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Selecting audio; Copy, cut, paste, and delete audio in Audition; Visually fading and changing amplitude; Working with markers; Inverting, reversing, and silencing audio.

## Selecting audio

### Learn how to select audio in Adobe Audition so you can edit, trim, and refine chosen parts of a sound precisely.

Audio selection is fundamental to editing because it lets you isolate sections before applying exact changes. With the appropriate selection methods, trimming, adjusting, and refining audio becomes faster and more accurate.

In the toolbar, choose the Time Selection tool.

Use any of these methods:

Drag through the Editor panel to select a range.

Dragging to select time ranges

Dragging to select time ranges

Adjust selection length by dragging either edge. You can also Shift-click beyond an edge to extend the selection quickly to a particular point, or right-click when you need to extend or reduce it. Enable this behavior by selecting Extend Selection in the General section of the Preferences dialog box.

### Select spectral ranges

In a spectral display, the Marquee, Lasso, and Paintbrush Selection tools can target audio data within chosen spectral ranges. Use the Marquee Selection tool for a rectangular area. Use the Lasso Selection or Paintbrush Selection tools for free-form selections. Each tool supports detailed editing and processing, giving audio restoration work flexible targeting. For example, when you locate artifacts, select only the affected frequencies and process that limited area for better results with less processing time.

The Paintbrush Selection tool builds selections whose opacity controls how strongly effects are applied. Change intensity by adding brush strokes in layers or by changing the Opacity setting in the toolbar. The whiter and more opaque the selected region is, the stronger the applied effect becomes.

Types of spectral selections

A. Marquee B. Lasso C. Paintbrush

Types of spectral selections

From the toolbar, choose Marquee, Lasso, or Paintbrush Selection.

In the Editor panel, drag across the spectral display to select the audio data you need.

Note

For stereo waveforms, Audition applies a selection to every channel by default. To target audio data in selected channels only, use Edit > Enable Channels.

To modify the selection, use any of these methods:

To move the selection, place the pointer inside it, and drag to the target location.

To resize the selection, place the pointer on a corner or edge, and drag until the selection reaches the target size. For paintbrush selections, the brush Size setting in the toolbar can also change the selection size.

To add to a lasso or paintbrush selection, Shift-drag. To remove from the selection, Alt-drag.

To set the strength of effects on paintbrush selections, change the Opacity setting in the toolbar.

Note

Audition normally plays only the selected audio spectrum. To play all audio in that same time span, right-click the Play button, and deselect Play Spectral Selection Only.

### Select artifacts and repair them automatically

For fast cleanup of small, isolated artifacts such as clicks or pops, use the Spot Healing Brush. After you make a selection with this tool, Audition applies Favorites > Auto Heal automatically.

Note

Auto-healing is designed for small audio artifacts, so selections are limited to four seconds or less.

Choose Spot Healing Brush from the toolbar.

Adjust the Size setting to change the pixel diameter, or use the square bracket keys.

In the Editor panel, click and hold or drag over an audio artifact in the spectral display.

Note

Clicking without holding the mouse button moves the Playhead for previewing audio, but Audition does not repair the artifact. In General preferences, enable Create a circular selection on mouse down for click-to-repair behavior.

Instantly removing an artifact with the Spot Healing Brush

A. Before B. After

Instantly removing an artifact with the Spot Healing Brush

### Select all of a waveform

Use either selection method:

Double-click in the Editor panel to select the waveform range currently visible.

Triple-click in the Editor panel to select the complete waveform.

### Specify which channels you want to edit

Audition normally applies selections and edits across every channel in a stereo or surround waveform. You can also target only the channels you want to change.

- Use the channel buttons in the amplitude ruler at the right edge of the Editor panel. In a stereo file, use the left channel or right channel button as needed. To target a single stereo channel by dragging along the very top or bottom of the Editor panel, enable Allow context-sensitive channel editing under Preferences > General.

Selecting specific channels of a 5.1 surround file

Selecting specific channels of a 5.1 surround file

### Adjust a selection to zero‑crossing points

For edits such as deleting or inserting audio, zero-crossings are often the preferred selection points because the amplitude is zero there. Starting and ending selections at zero-crossings lowers the risk that an edit will introduce audible pops or clicks.

To move a selection to the nearest zero-crossing points, open Edit > Zero Crossings, then choose an option such as Adjust Selection Inward, which shifts both edges inward to the next zero crossing.

Note

Audition also crossfades all edits to further reduce possible pops or clicks. Crossfade durations can be changed in the Data section of the Preferences dialog box.

### Snap to markers, rulers, frames, and zero crossings

With snapping enabled, selection boundaries and the current-time indicator move to targets such as markers, ruler ticks, zero-crossing points, and frames. Snapping can make selections more accurate, and you can turn it off for individual target types when needed.

At the top of the Editor panel, click the Toggle Snapping icon to turn snapping on for selected targets.

To choose the targets used for snapping, open Edit > Snapping, and select any of these options:

Snap To Markers

Moves to a marker point.

Snap To Ruler (Coarse)

Moves only to the major numbered divisions in the timeline, such as minutes and seconds. Only one Snap To Ruler command can be active at once.

Snap To Ruler (Fine)

Moves to timeline subdivisions such as milliseconds. Zoom in by right-clicking and dragging across the timeline so more precise subdivisions are visible and cursor placement is more exact.

Snap To Zero Crossings

Moves to the closest point where the audio crosses the center line, meaning the zero amplitude point.

Snap To Frames

Moves to a frame boundary when the current time format is measured in frames, such as Compact Disc or SMPTE.

Note

Snapping commands are also available by right-clicking the timeline.

## Copy, cut, paste, and delete audio in Audition

### Learn how to copy, cut, paste, and delete audio in Adobe Audition for faster sound editing and refinement.

### Copy or cut audio data

In the Waveform Editor, select the audio data to copy or cut. To copy or cut the full waveform instead, clear any audio selection first.

Choose one of the following:

- Edit > Copy copies audio data to the clipboard.

- Edit > Copy To New copies the audio data and pastes it into a newly created file.

- Edit > Cut removes audio data from the current waveform and places it on the clipboard.

### Paste audio data

Use either method:

- To paste into the current file, put the Playhead where insertion should start, or select existing audio to replace. Use Edit > Paste.

- For a new-file destination, choose Edit > Paste To New. Its sample type, including rate and bit depth, is inherited automatically from the original clipboard material.

### Mix audio data when pasting

Mix Paste combines clipboard audio data with the current waveform.

In the Editor panel, put the Playhead at the point where mixing should begin. You can instead select audio data that should be replaced.

Run Edit > Mix Paste.

Configure these options, and click OK.

Copied and Existing Audio

Changes the percentage volume for both copied audio and existing audio.

Invert Copied Audio

Flips the phase of the copied audio, which can increase or reduce phase cancellation when the existing audio contains similar material.

Crossfade

Adds a crossfade at the start and end of the pasted audio to make transitions smoother. Enter the fade length in milliseconds.

Paste Type | Audition CC

Choose the paste type from these options:

Insert

Adds audio at the current cursor position or selection. Audition places the audio at the cursor and pushes any existing data to the end of the inserted material.

Overlap (Mix)

Blends audio with the current waveform at the selected volume level. If the pasted audio exceeds the length of the current waveform, Audition lengthens the current waveform so the pasted audio fits.

Overwrite

Begins overdubbing at the cursor position, replacing subsequent existing material for as long as the incoming audio lasts. For example, when 5 seconds of material is pasted, the 5 seconds immediately after the cursor are replaced.

Modulate

Combines the audio with the current waveform as a modulation effect. This resembles overlapping, but sample by sample the two waveform values are multiplied together instead of added.

From Clipboard

Uses audio data from the active internal clipboard.

From File

Uses audio data from a file. Click Browse to locate the file.

Loop Paste

Repeats the pasted audio data for the specified number of times. When the audio is longer than the current selection, Audition automatically extends the current selection to fit it.

### Delete or crop audio

Choose one of the following:

- Select audio to remove, and choose Edit > Delete.

- Select audio to retain, and choose Edit > Crop. Audio not wanted at the beginning and end of the file is removed.

## Visually fading and changing amplitude

### Learn how to apply fades and adjust amplitude visually in Adobe Audition for smooth transitions and precise control of audio levels.

Effects can change amplitude or create fades, but visual fade and gain controls make those adjustments faster and easier to judge. While you drag the controls in the Editor panel, Audition previews the result so the level can be set accurately.

Visual controls in the Editor panel

A. Fade controls B. Gain control (heads-up display)

Visual controls in the Editor panel Note

For a quick fade on selected audio, choose Favorites > Fade In or Fade Out.

### Visually fade in or out

Audition provides three visual fade types:

Linear fades change volume at a steady rate, which works well on many kinds of material. If the result feels too sudden, use another fade shape.

Logarithmic fades move volume smoothly from slow to fast, or from fast to slow.

Cosine fades use an S-curve shape: volume changes slowly at the start, quickly through most of the fade, and slowly again at the end.

Note

In the Waveform Editor, fades permanently alter audio data. Use the Multitrack Editor when you need fades that can be readjusted later.

Fade types

A. Linear B. Logarithmic C. Cosine

Fade types

Drag the Fade In or Fade Out handle inward from the waveform's upper left or upper right, then use one of these methods:

For a linear fade, keep the drag perfectly horizontal.

For a logarithmic fade, drag upward or downward.

For a cosine (S-curve) fade, hold Ctrl (Windows) or Command (macOS).

Note

To make cosine fades the default and use the keys above for linear or logarithmic fades instead, change the Default Fade setting in the General preferences.

### Visually raise or lower amplitude

In the Editor panel, either select the target audio or leave everything unselected to change the full file.

In the gain control floating above the panel, drag the knob or the numeric value.

The numbers show the new amplitude relative to the current amplitude. After you release the mouse button, the value returns to 0 dB so later changes can start from neutral.

Changing the volume of selected area

Changing the volume of selected area

### Pin or hide the visual amplitude control

The visual amplitude control normally shows up as a heads-up display (HUD) floating above every waveform. If that overlay gets in the way, use one of these choices:

For a fixed HUD position, click the Pin button.

To make the HUD appear only on selected ranges, enable Show HUD for selection ranges only in the General preferences.

For no HUD display at all, turn off View > Show HUD.

## Working with markers

### Use markers in Adobe Audition to label important audio locations, keep them organized, and jump to them quickly.

Markers, which are also known as cues, are reference locations added to a waveform so you can navigate, edit, or play chosen parts of the audio.

Adobe Audition supports two marker forms:

- Point markers identify one time value (for example, 1:08.566).
- Range markers cover a span with both start and end times (for example, 1:08.566 to 3:07.379). Dragging either edge changes those limits.

The timeline at the top of the Editor panel displays markers. Every marker includes a handle you can select, drag to another position, or right-click for more commands.

Examples of markers

A. Marker point B. Marker range

Examples of markers Note

When saving a file and retaining marker data, choose Include markers and other metadata.

### Add, select, and rename markers

Markers can be added from the Editor panel, but defining and selecting them is handled in the Markers panel, opened from Windows > Markers.

### Add a marker

Use any of these methods:

Start playback.

Move the Playhead to the point where the marker should be placed.

Highlight the audio data that should become a marker range.

Press the M key, or use the Add Marker button in the Markers panel.

Note

- To control whether details like Duration and Type are visible, choose Markers Display from the panel menu.
- You can also create markers automatically at detected silence.

### Select markers

- Choose a marker in either the Editor or Markers panel. You can also double-click a marker to send the Playhead to that point and, for range markers, select the covered span.
- For adjacent selections, choose the first marker in the Markers panel, then Shift-click the final marker.
- In the Markers panel, use Ctrl-click (Windows) or Command-click (macOS) when selecting markers that are not adjacent.
- To jump the Playhead to the closest marker, choose Edit > Marker > Move Playhead to Next or Previous.

### Rename a marker

Choose the marker in the Markers panel.

Click the marker name, then type the replacement name.

### Adjust, merge, convert, or delete markers

Once markers exist, refine them so they fit the audio project's needs.

### Reposition markers

Within the Editor panel, move marker handles by dragging them to another location.

In the Markers panel, choose the marker. For point markers, enter updated Start values; for range markers, update Start, End, and Duration values.

### Merge individual markers

Choose the markers to combine in the Markers panel, then select the Merge button.

The resulting merged marker takes the name of the first selected marker. When point markers are merged, the result is a range marker.

### Convert a point marker to a range marker

Open the marker handle context menu and choose Convert to Range. The handle separates into two handles.

### Convert a range marker to a point marker

Open a marker handle context menu and choose Convert to Point.

The range marker's two handle sections are combined into one handle, and the range start time becomes the point marker time.

### Delete markers

- Choose one or more markers, then use the Delete button in the Markers panel.
- In the Editor panel, open the marker handle context menu and choose Delete Marker.

### Save audio between markers to new files

In Waveform Editor, open Window > Markers.

Choose one or more marker ranges.

In the Markers panel, select the Export audio of selected range markers to separate files button.

Configure these options:

- Use Marker Names In Filename: uses each marker name as the prefix for the filename.
- Prefix: sets the prefix text for the new filenames.
- Postfix Starting: sets the first number used when numbering the filename prefix. Adobe Audition appends numbers after the prefix, such as prefix02 and prefix03, so the saved files have distinct names.
- Location: sets the folder where saved files are written. Use Browse when you want to choose another folder.
- Format: sets the output file format. The Format Settings area below shows the compression method and storage mode; select Change to modify them.
- Sample Type: shows the sample rate and bit depth. Select Change to edit those settings.
- Include Markers and Other Metadata: adds audio markers and Metadata panel information to the processed files.

### Creating playlists

A Playlist is a set of marker ranges arranged for playback in any sequence, with looping available for a chosen number of repetitions. Use playlists to audition alternate arrangements before making edits permanent. Playlists are built in the Playlist panel, opened from Window > Playlist.

Note

To keep a playlist inside a file, save it in WAV format.

Create a playlist

In the Playlist panel, choose Open the Markers panel so markers can be added to the playlist.

In the Markers panel, choose the marker ranges to include. Then use the Insert selected range markers into playlist button, or drag those range markers into the Playlist panel.

### Change the order of items in a playlist

Move the item by dragging it upward or downward.

### Play items in a playlist

- To start playback for all or part of the list, choose the first item to play, then use the Play button at the top of the panel.
- For one specific item, use the Play button beside that item's name.

### Loop an item in a playlist

Choose an item, then type a value in the Loops column. Items may each use their own loop count.

### Delete items from a playlist

Choose the items, then use the Remove button.

## Inverting, reversing, and silencing audio

### In Adobe Audition, invert, reverse, or silence audio to transform sound or remove selected sections quickly.

Invert changes the audio phase by 180 degrees.

On a single waveform, inverting usually sounds unchanged, but the difference becomes audible when waveforms are combined. For instance, inverted pasted audio can align better with existing audio, and inverting one channel in a stereo file can repair an out-of-phase recording.

To apply inversion to only part of a waveform, choose the target range. To invert the full waveform instead, clear any audio selection.

Choose Effects > Invert.

### Reverse a waveform

Reverse flips a waveform from right to left, making it play backward. This is useful when creating special effects.

To reverse just part of the waveform, choose the target range. To reverse everything, clear any audio selection.

Choose Effects > Reverse.

### Create silence

Use silence when you need a pause in the program material or want to suppress noise that is not needed in the file. Audition offers two silence workflows:

For audio that is already present in the Waveform Editor, highlight the material to mute and use Effects > Silence. This keeps the selected time span in place; it does not close the gap the way a delete or cut operation would.

To insert a silent section in the Waveform or Multitrack Editor, place the Playhead or mark existing audio. Next, use Edit > Insert > Silence, then specify the duration in seconds. Material after the insertion point moves later in time, so the total duration grows. Multitrack clips are divided where needed.
