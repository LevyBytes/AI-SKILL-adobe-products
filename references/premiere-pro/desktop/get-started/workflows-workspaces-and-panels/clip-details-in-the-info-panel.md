# Clip details in the Info panel

Use the Info panel to review details for clips selected in the timeline.

For a selected item, the Info panel shows multiple data fields, along with timecode details for clips beneath the current-time indicator in the timeline.

The top area reports information for the active selection. Its contents change with the media type, the active panel, and related context. For instance, the Info panel shows different information for an empty area in the Timeline panel than it does for a clip in the Project panel.

- Video: reports frame rate, frame size, and pixel aspect ratio, in that order.
- Audio: reports sample rate, bit depth, and channels, in that order.
- Tape: shows the tape name.
- In: shows the selected clip's In point timecode.
- Out: shows the selected clip's Out point timecode.
- Duration: shows how long the selected clip lasts.

Below the current-selection data, the panel lists timecode values for the active sequence and for clips on each video and audio track. The stacked order mirrors the timeline, making the values easier to match visually. Video track timecodes place the highest track number at the top, while audio track timecodes place the highest track number at the bottom. This area is empty only when no sequences are open.

Adding or removing a track in the current sequence makes the Info panel refresh so the displayed track count stays accurate. The panel does not impose a display limit on track count. When the user changes to another sequence, the Info panel likewise refreshes to show that sequence's track total.

The Info panel provides timecode for the active selection and every track item under the current-time indicator. If the playhead moves across an empty part of the timeline, that track shows no timecode value, although the track label remains visible and not dimmed. The vertical timecode stack mirrors the sequence's track arrangement.

A. Name of selected clip B. Data for selected clip C. Tape name D. Sequence timecode locations of clip Start and End points E. Name of active sequence F. Source timecode location in selected clip of current-time indicator G. Source timecode location in clips on video tracks of current-time indicator H. Source timecode location in clips on audio tracks of current-time indicator

Note

Some panel defaults can be adjusted in the Preferences dialog box.
