# Set Overlay Settings, Set In And Out Points In The Source Monitor

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Set overlay settings; Set In and Out points in the Source Monitor.

## Set overlay settings

### Use Overlay Settings to choose which overlays Adobe Premiere shows in the Program Monitor and Source Monitor.

In either Program Monitor or Source Monitor, select the icon.

From the menu, choose Overlay Settings > Settings to display the Overlay Settings dialog box.

The available presets appear in that dialog as well.

Overlay Settings lays out metadata fields in positions that correspond to their monitor alignment, which makes placement on the monitor easier to judge visually.

Note

Monitor overlays appear in four regions: Left, Right, Top Middle, and Bottom Middle. Those regions resize with the monitor. Their absolute dimensions can change, but their position and proportional size stay fixed.

Selected metadata fields align with the overlay positions used on the monitor.

Selected metadata fields align with the overlay positions used on the monitor.

With the default layout preset, overlay placement visually follows the correct clip inside a sequence clip stack.

For instance, Source Timecodes overlays for sequence clips appear as a persistent vertical stack, matching the clips visible in the video and audio tracks in the timeline.

The Overlay Settings dialog box includes these settings:

- Source Timecode: shows the original source clip Timecode value without regard to the playhead position in the sequence. Video tracks use V1, V2, V3, and audio tracks use A1, A2, A3. This data matches the Info panel display. By default, it appears on the left side of the Source Monitor and Program Monitor.
- Sound Timecode: changes on every frame, following ordinary timecode behavior.
- Sound Roll: keeps a fixed sound-roll value rather than updating.
- Marker comments: after you add a marker to a clip or sequence, clip marker and sequence marker comments can be shown as overlays. The overlay combines the comments with the marker name.

Note

For clip marker overlays, the separate tracks in the clip are shown. A Sequence Marker overlay is presented as one marker overlay instead of showing every individual sequence track.

- To turn Safe Margins on or off, select the icon in Program Monitor, then select Safe Margins. Safe Margin settings can then be set in the Overlay Settings dialog box.
- Select Include 4:3 Safe Margin, or enter horizontal and vertical control values for the Safe Margin.

- If the playhead moves beyond the final media frame on the timeline and no later clip exists, a purple frame is shown along the right edge of the last clip or sequence frame.
- At the first or last frame of a sequence clip, Premiere shows a striped column at the first-frame left boundary or the final-frame right boundary. End Of Media indicators help when several clips appear in a Program Monitor sequence view.

- Edit Point Indicators: identify sequence edit points and are enabled by default. At a clip In or Out point, the playhead triggers a yellow angular bracket along the clip frame's lower edge. If a gap separates two sequence clips, Edit Point indicators appear at the left or right clip edge to show which side has the edit boundary.

A. End of sequence indicator B. End of media indicator C. Edit point indicator

- Enable overlays for Transmit: sends overlays to an external monitor for display.
- Enable overlays during playback: keeps overlays visible on the monitor while footage plays.
- Text Size: controls how large overlay type appears. Choosing a large text size can truncate text when the monitor does not have enough display space.
- Opacity: controls how strongly the overlay hides or reveals the monitor image. At 1% opacity, a layer is almost transparent; at 100% opacity, it is opaque.

## Set In and Out points in the Source Monitor

### Set In and Out points in the Source Monitor, then use those points to preview and choose clips or media segments before placing them on the timeline.

After importing a video or audio file, preview it in the Source Monitor and choose the sections to use in a sequence. The same monitor also supports markers, clip In and Out points, and settings such as playback speed, volume, and video and audio effects.

Open a clip in Source Monitor by double-clicking it in the Project or Timeline panel.

Source Monitor can hold multiple imported clips, but only one clip is visible at once. To see recently imported clips, select the three stacked lines next to the sequence name, then choose a clip from the drop-down list.

To create an In point, move the playhead to the desired frame. Then select the Mark In button or press the I key.

To create an Out point, move the playhead to the desired frame. Then select the Mark Out button, or press the O key.

After In and Out points are marked, adjust them before editing the clip into the sequence by dragging the points to new time-ruler positions. You can also move the playhead to another frame and use Mark In or Mark Out to define new In or Out points.

To move the In and Out point together, place the pointer over the In or Out Grip tool at the middle of the set In and Out range until the pointer changes to a hand.

### Cue In point and Out point

Use the Source Monitor to cue a clip frame; use the Program Monitor to cue the current sequence frame.

Choose one of these actions:

- Select Go To In Point when the current time should cue to an In point.
- Select Go To Out Point when the current time should move to an Out point.

### Cue to the previous or next edit

Press Down Arrow key to run Go To Next Edit Point, and press Up Arrow key to run Go To Previous Edit Point. The command crosses every track, whether or not the tracks are selected.

To move to the next edit on any targeted timeline track, select the Go To Next Edit Point button. To move to the previous edit on any targeted track, select the Go To Previous Edit Point button.

These two controls are hidden by default: Go To Next Edit Point and Go To Previous Edit Point. Use Button Editor in the lower-right area of the Source Monitor to find them.

### Remove In or Out point of a source clip

Open the clip in the Source Monitor by double-clicking it in the Project panel, then choose one of these three commands:

- Marker > Clear In.
- Marker > Clear Out.
- Marker > Clear In and Out.
