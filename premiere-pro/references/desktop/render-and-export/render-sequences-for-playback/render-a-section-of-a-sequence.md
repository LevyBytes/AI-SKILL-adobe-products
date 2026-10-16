# Render a section of a sequence

Render a selected part of the timeline to improve playback, especially where edits are complex or effects are heavy.

Note

Hover on the work area bar to display a tool tip listing its start timecode, end timecode, and duration.

Identify unrendered sections:

Premiere shows rendering status with colored bars above the timeline:

- Red bar: an unrendered area that will probably not play smoothly.
- Yellow bar: an unrendered area that may still play in real time.
- Green bar: a rendered area that is ready for smooth playback.

Mark the range to render:

- Put the playhead at the desired render start and press I (In point).
- Put the playhead at the desired render finish and press O (Out point).

Open Sequence and choose one of these options:

- Render Effects In to Out: renders video-track sections between the In and Out points that contain a red render bar. Alternatively, use Enter.
- Render In to Out: renders video-track sections between the In and Out points that contain either a red render bar or a yellow render bar.
- Render Audio: creates a preview file for audio-track sections inside the work area.

The audio preference Render audio when rendering video lets Premiere render audio tracks each time video tracks are rendered.

For better motion quality in rendered preview files, enable Maximum Render Quality in Sequence Settings.
