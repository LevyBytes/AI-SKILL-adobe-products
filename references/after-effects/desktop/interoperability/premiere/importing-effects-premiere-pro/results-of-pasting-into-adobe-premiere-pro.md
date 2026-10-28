# Results of pasting into Adobe Premiere Pro

Pasting a layer into an Adobe Premiere sequence triggers the following conversions of the keyframes, effects, and other properties carried on the copied layer:

| After Effects item | Converted to in Adobe Premiere | Notes |
| --- | --- | --- |
| Audio volume property | Channel Volume filter |  |
| Blending modes | Blending modes supported by Adobe Premiere Pro are converted |  |
| Effect properties and keyframes | Effect properties and keyframes, if the effect also exists in Adobe Premiere | In the Effect Controls panel, Adobe Premiere shows any effects it doesn't support as offline. A few After Effects effects share names with Premiere ones, yet because they're genuinely different effects under the hood, no conversion happens. |
| Expressions | Not converted |  |
| Layer markers | Clip markers |  |
| Masks and mattes | Not converted |  |
| Stereo Mixer effect | Channel Volume filter |  |
| Time Remap property | Time Remapping effect |  |
| Time Stretch property | Speed property | Speed and time stretch run inversely to each other. To illustrate, 200% stretch in After Effects lands as 50% speed in Adobe Premiere. |
| Transform property values and keyframes | Motion or Opacity values and keyframes | The keyframe type—Bezier, Auto Bezier, Continuous Bezier, or Hold—is retained. |
| Source settings for R3D source files | Source settings for R3D source files |  |
