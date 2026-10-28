# How Premiere converts pasted layers

When an Adobe Premiere sequence receives a pasted layer, these conversions apply to its keyframes, effects, and other properties:

| After Effects item | Converted to Premiere | Notes |
| --- | --- | --- |
| Audio volume property | Channel Volume filter |  |
| Blending modes | Premiere-supported blending modes convert. |  |
| Effect properties and keyframes | Effect properties and keyframes, if the effect also exists in Premiere | Unsupported effects are listed by Premiere as offline in the Effect Controls panel. Some effects in After Effects and Premiere have matching names but are separate effects, so they do not convert. |
| Expressions | Not converted |  |
| Layer markers | Clip markers |  |
| Masks and mattes | Not converted |  |
| Stereo Mixer effect | Channel Volume filter |  |
| Time Remap property | Time Remapping effect |  |
| Time Stretch property | Speed property | The relationship is inverse; for example, 200% stretch in After Effects maps in Premiere to 50% speed. |
| Transform property values and keyframes | Motion or Opacity values and keyframes | Premiere keeps Bezier, Auto Bezier, Continuous Bezier, or Hold keyframe types. |
| Source settings for R3D source files | Source settings for R3D source files |  |
