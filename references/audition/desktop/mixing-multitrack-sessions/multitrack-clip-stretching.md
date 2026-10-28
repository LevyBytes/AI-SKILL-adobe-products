# Multitrack clip stretching

Learn how Multitrack Editor clip stretching adjusts timing, matches durations, and lines audio up smoothly.

With clip stretching in the Multitrack Editor, timing and duration can be changed without altering pitch, which helps match a clip to a required length or align it to a picture edit.

Select Clip > Stretch > Enable Global Clip Stretching.

Use the white triangles on a clip's upper-left or upper-right corner in the Editor panel, dragging them to stretch the clip.

Note

Select more than one clip when they should stretch proportionally.

For selected clips, change these Stretch controls in the Properties panel:

Mode

Choose from the following:

- Off disables stretching and returns the clip to its original length.
- Realtime plays the stretch result while clips are being dragged. This mode works well while editing.
- Rendered (High Quality) takes more processing time but may prevent audible artifacts. Use it when Realtime mode causes slow playback or performance problems.

Type

Choose from the following:

- Monophonic works best for dialogue or a solo musical instrument.
- Polyphonic fits music with several instruments or complex ambient audio.
- Varispeed changes pitch along with duration, like speeding up or slowing down analog tape machines.

Note

To set the same mode quickly for every clip, choose Clip > Stretch > Realtime All Stretched Clips or Render All Stretched Clips.

Duration, Stretch, and Pitch

Use numeric fields when you need adjustments more exact than dragging clips in the Editor panel.

Advanced settings

Set these controls:

- Transient Sensitivity (available in Polyphonic mode) sets how responsive stretching is to transients, such as drum hits and note starts, that serve as anchor points. Raise the value if transients sound unnatural.
- Window Size sets each processed audio chunk's size in milliseconds. Change it only when echo or flanging artifacts appear.
- Precision settings (available in Rendered mode) choose between higher quality and faster processing.
- Preserve Formants (available when Rendered and Monophonic are selected) keeps instrument and voice timbre realistic when pitch changes are made.

Note

For making high voices low, or the reverse, enable Preserve Formants and use a large pitch change.
