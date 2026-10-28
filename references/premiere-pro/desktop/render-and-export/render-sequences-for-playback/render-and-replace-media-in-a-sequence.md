# Render and replace media in a sequence

Use Render and Replace to flatten video clips and After Effects compositions so VFX-heavy sequences play with less processing demand.

Premiere tries to play sequences, clips, effects, transitions, titles, and other unrendered timeline elements in real time before any rendering is done.

Smooth playback sometimes requires media rendering, particularly in VFX-heavy sequences. Rendering unrendered timeline media lowers the amount of work demanded from available system resources.

Render and Replace in Premiere flattens video clips and After Effects compositions, which can make VFX-heavy sequences perform faster. The original clip can be brought back later with Restore Unrendered.

In the Timeline panel, open the sequence containing the media that needs rendering.

Activate the Timeline panel, select the media, and then choose Clip > Render and Replace.

In the Render and Replace dialog box, choose the format and other settings appropriate for the sequence being rendered.

Configure Render and Replace so clips render into a simpler pre-rendered format, lowering playback processing.

- Source: chooses whether the new render follows sequence settings, individual clip settings, or presets.
- Format: chooses a file format that balances playback quality, render time, and file size. Available choices are QuickTime format, MXF OP1a files, and MXF OP1a files in DNXHD format.
- Preset: applies the frame size, frame rate, field type, and pixel aspect ratio from the selected preset, rendering all clips to those values. Clips are not rendered when their sources cannot be matched.

Note

Alpha support is available only with the GoPro CineForm with Alpha preset. Every other preset flattens alpha channels.

- Location: defines where the rendered file is saved. Save it beside the original media, or use Choose Location to browse somewhere other than the default.
- Include Handles: sets how many extra frames remain before each rendered clip's In point and after its Out point. Values range from 0 to 100 frames. For example, 30 keeps 30 frames before the In point and 30 frames after the Out point. Handles provide extra frames for small edit changes in the new project.
- Include Video Effects: includes clip effects in the render. With this option enabled, Premiere processes all non-intrinsic video effects on the clip. Those rendered effects still appear in the Effect Controls panel, but their settings become locked.

Select OK.

Premiere creates the rendered file in the chosen destination.
