# Results of pasting into After Effects

| Adobe Premiere asset | Converted to in After Effects | Notes |
| --- | --- | --- |
| Audio track | Audio layers | Audio in 5.1 surround, or audio above 16-bit, is unsupported. Mono becomes one layer; stereo becomes two layers. |
| Bars and tone | Not converted |  |
| Blending modes | Converted |  |
| Clip marker | Layer marker |  |
| Color mattes | Solid-color layers |  |
| Crop filter | Mask layer |  |
| Frame Hold | Time Remap property |  |
| Motion or Opacity values and keyframes | Transform property values and keyframes | The Bezier, Auto Bezier, Continuous Bezier, or Hold keyframe type is preserved. |
| Sequence marker | Markers on a new solid-color layer | Sequence markers move only when the sequence itself is copied or the full Premiere project is imported as a composition. |
| Speed property | Time Stretch property | Speed and time stretch move in opposite directions; for example, Premiere 50% speed maps to After Effects 200% stretch. |
| Time Remapping effect | Time Remap property |  |
| Titles | Not converted |  |
| Universal counting leaders | Not converted |  |
| Video and audio transitions | Opacity keyframes (Cross dissolve only) or solid-color layers |  |
| Video effect properties and keyframes | Effect properties and keyframes, if the effect also exists in After Effects | After Effects omits unsupported effects from Effect Controls. |
| Volume and Channel Volume audio filters | Stereo mixer effect | No conversion is applied to other audio filters. |
| Source settings for R3D source files | Source settings for R3D source files |  |

Note

Importing a Premiere project into After Effects uses the same conversion behavior as copying from Premiere to After Effects.
