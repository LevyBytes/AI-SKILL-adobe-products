# What transfers between applications

Most Premiere clip properties map to matching After Effects layer properties. Motion and Opacity data become Transform properties, and interpolation choices stay intact for Bezier, Auto Bezier, Continuous Bezier, or Hold keyframes. Speed property values become Time Stretch values; because the two work inversely, 50% speed in Premiere becomes 200% stretch in After Effects.

When an effect exists in both applications, its full settings and keyframes transfer. Unsupported effects are ignored by After Effects and do not appear in the Effect Controls panel. Audio tracks become audio layers, but 5.1 surround and tracks above 16-bit are unsupported. Mono tracks import as one layer, and stereo tracks import as two layers.

Nested sequences turn into nested compositions, while color mattes become solid-color layers. Sequence markers transfer only when the whole sequence is copied or the complete Premiere project is imported as a composition; otherwise, those markers are placed on a new solid-color layer. Video and audio transitions become opacity keyframes for cross dissolves only, or they become solid-color layers. Frame Hold is converted to the Time Remap property, and Time Remapping moves directly between the applications.

Items without conversion include bars and tone, titles, universal counting leaders, and some audio filters. Volume and Channel Volume are exceptions because they map to the Stereo Mixer effect. Blending modes and clip markers transfer successfully to their After Effects equivalents.
