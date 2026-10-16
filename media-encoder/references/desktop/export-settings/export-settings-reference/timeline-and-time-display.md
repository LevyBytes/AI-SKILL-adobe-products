# Timeline and time display

Below the preview frame, the Source tab and Output views include a timeline and timecode display. The timeline contains a current-frame playhead, a duration bar, and trim-boundary controls.

Source panel controls in the Export Settings dialog box.

A. Video preview frame B. Mark In and Out C. Time duration D. Source Range E. Zoom Level F. Aspect Ratio Correction

Export Settings dialog box Source panel controls.

Preview other frames by clicking or dragging the playhead along the timeline. You can also move directly to a frame by typing a timecode value in the current time display.

The video preview displays the frame marked by the timeline playhead. Aspect Ratio Correction is on by default, so non-square pixel video appears without distortion on computer displays. Disable it with the Aspect Ratio Correction toggle button located to the right of the Zoom menu.

Choose a zoom level from the Select Zoom Level menu above the timeline to zoom the preview image in or out.

Note

Zoom out with these shortcuts:

- Windows: Ctrl + - (hyphen)
- macOS: Command + - (hyphen)

Zoom in with these shortcuts:

- Windows: Ctrl + = (equal sign)
- macOS: Command + = (equal sign)

These keyboard shortcuts use the main keyboard rather than the numeric keypad.

Trim exported video duration by marking the first frame as an In point and the last frame as an Out point in the timeline. Set In and Out points in these ways:

- With the playhead on the desired frame, click Set In Point or Set Out Point above the timeline.
- From either side of the timeline, drag the In point or Out point icon onto the target frame.
- Put the playhead on a timeline frame, then press the I key for an In point or the O key for an Out point.

The Source Range menu quickly sets exported video duration with these choices:

- Entire Sequence: Exports the complete duration of the source clip or sequence.
- Sequence/Clip/Session In/Out: Uses In and Out marks created in Premiere, Audition, and other Adobe app clips or sequences.
- Work Area: Uses a Premiere sequence work area or an After Effects composition work area.
- Custom: Uses the In and Out points defined in the Export Settings dialog box.

Note

Adobe Media Encoder retains timecode information from a source file. The Set Start Timecode control changes the start timecode value. For a source beginning at 00:00:05:00, Adobe Media Encoder starts that item's timeline at 00:00:05:00 instead of zero. The encoded output file includes this timecode information.
