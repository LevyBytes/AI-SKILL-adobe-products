# Choose timecode display format

Choose a timecode display format in Adobe Premiere that fits the project's frame rate and editing workflow.

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
