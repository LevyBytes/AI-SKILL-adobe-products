# Results of pasting into After Effects

Pasting an asset into an After Effects composition triggers the following conversions of the keyframes, effects, and other properties carried on the copied asset:

| Adobe Premiere asset | Converted to in After Effects | Notes |
| --- | --- | --- |
| Audio track | Audio layers | Audio tracks running 5.1 surround, or deeper than 16-bit, aren't supported. Mono and stereo audio tracks come in as one layer or two. |
| Bars and tone | Not converted |  |
| Blending modes | Converted |  |
| Clip marker | Layer marker |  |
| Color mattes | Solid-color layers |  |
| Crop filter | Mask layer |  |
| Frame Hold | Time Remap property |  |
| Motion or Opacity values and keyframes | Transform property values and keyframes | Keyframe type—Bezier, Auto Bezier, Continuous Bezier, or Hold—is retained. |
| Sequence marker | Markers on a new solid-color layer | Getting sequence markers across means copying the sequence itself, or else importing the whole Adobe Premiere project as a composition. |
| Speed property | Time Stretch property | Speed and time stretch run inversely to each other. To illustrate, 50% speed in Adobe Premiere becomes 200% stretch in After Effects. |
| Time Remapping effect | Time Remap property |  |
| Titles | Not converted |  |
| Universal counting leaders | Not converted |  |
| Video and audio transitions | Opacity keyframes (Cross dissolve only) or solid-color layers |  |
| Video effect properties and keyframes | Effect properties and keyframes, if the effect also exists in After Effects | In the Effect Controls panel, After Effects leaves out any effects it doesn't support. |
| Volume and Channel Volume audio filters | Stereo mixer effect | Other audio filters are not converted. |
| Source settings for R3D source files | Source settings for R3D source files |  |
| Mask | Converted | Copy a mask into an After Effects composition and every Premiere mask property—feather, opacity, expansion, and the rest—comes across with it. |

Note

The same conversion rules that apply when you copy from Premiere over to After Effects also govern what happens when a Premiere project is imported.

### More like this

- Collect files in one location
- Placeholders and proxies
- About precomposing and nesting
