# Output module settings

Note

For help with the controls in the color management area of the Output Module Settings dialog box, see Assign an output color profile.

Format

Sets the format that the output file — or sequence of files — comes out in.

Include Project Link

Sets whether the output file carries information linking back to the source After Effects project. Open that output file in another application — Adobe Premiere, say — and the Edit Original command lets you edit the source project back in After Effects.

Include Source XMP Metadata

Sets whether the output file picks up XMP metadata from the files that served as sources for the rendered composition. XMP metadata can ride the whole way through After Effects — from source files, into footage items, into compositions, and on into rendered and exported files. Across every default output module template, Include Source XMP Metadata starts out deselected.

Post-Render Action

Sets an action for After Effects to carry out once the composition has rendered. Learn more about post-render actions.

Format Options

Brings up a dialog box where you set format-specific options.

Channels

Which output channels the output movie holds. Choose RGB+Alpha and After Effects builds a movie with an alpha channel, which implies a depth of Millions of Colors+. Alpha channels aren't something every codec handles.

Note

Any file built at a color depth of Millions of Colors+, Trillions of Colors+, or Floating Point + carries labeled alpha channels — the description of the alpha channel lives inside the file. That spares you from having to set an alpha interpretation every time you import something made in After Effects.

Depth

Sets the output movie's color depth. Some formats put limits on depth and color settings.

Color

Sets how colors get built alongside the alpha channel. Pick either Premultiplied (Matted) or Straight (Unmatted).

Starting #

Sets which number the sequence's starting frame carries. Set it to 38, for instance, and After Effects labels the first frame [file_name]\_00038. The Use Comp Frame Number option folds the work area's starting frame number into the sequence's starting frame.

Resize

Sets your output movie's size. Turn on Lock Aspect Ratio To to hold the current frame aspect ratio while you resize the frame. Reach for Low Resize Quality on test renders and High Resize Quality for a final movie. Learn more about scaling a movie down and scaling a movie up.

Crop

Adds or removes rows or columns of pixels at the edges of the output movie. Spell out how many rows or columns of pixels to add or remove along the top, left, bottom, and right of the movie. Positive values crop; negative values tack on rows or columns of pixels. Turn on Region Of Interest to export nothing but the region of interest you marked in the Composition or Layer panel.

Note

Tack one row of pixels onto the top while trimming one row off the bottom of a movie and you flip the field order.

Audio Output

Three things you set here: playback format (Mono or Stereo), sample depth (8 Bits or 16 Bits), and sample rate. Match the sample rate to what the output format can handle. For playback on the computer, go with an 8-bit sample depth; a 16-bit depth is the one to reserve for CD playback, for digital audio, or for any hardware built around 16-bit playback.

Note

Some formats' specifications cap the audio parameters. When that happens, the audio options may be locked in the Output Module Settings dialog box. Audio options for certain formats also live in that format's export settings dialog box. To set audio output options for Windows Media, for instance, click Format Options in the Output Module Settings dialog box.
