# Create interlaced or non-interlaced clips

Create both interlaced and non-interlaced (progressive) clips in Premiere so delivery can fit different platforms and playback devices.

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
