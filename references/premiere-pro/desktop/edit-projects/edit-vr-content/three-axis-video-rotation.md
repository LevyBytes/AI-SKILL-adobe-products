# Three-axis video rotation

Perform three-axis video rotation while editing VR clips in Adobe Premiere.

A single sequence can contain different resolutions along with stereoscopic and monoscopic layouts. When equirectangular VR clips are mixed together, some clips may match the sequence resolution and stereoscopic layout while others may not. Apply the VR Projection effect and select the suitable layout and video so the frame is filled correctly. You may also need to fix the zero angle when camera placement or subject focus creates an alignment problem. Correct that by rotating the video with pan, roll, and tilt controls.

This rotation can play in real time when GPU acceleration is enabled.

- For fill-frame scaling, select VR Projection > Stretch To Fill Frame in the Effects panel; this ignores aspect ratio or frame size.

Enable Stretch To Fill Frame when the clip should scale until the frame is filled.

Turn on Stretch To Fill Frame to scale the clip so it occupies the full frame.

- Select Input Auto VR Properties to use the clip's VR properties. The effect reads the properties from the source clip or nested sequence where the effect is applied. To set Input Layout, Input Horizontal FOV, and Input Vertical FOV manually, disable the Input Auto VR Properties checkbox.
- To set the stereoscopic or monoscopic layout that matches the VR Properties on the Source Clip, select VR Projection > Input Layout. Edit Input Horizontal FOV and Input Vertical FOV as needed.
- Select Output Auto VR Properties to use the values in the current sequence's settings. To define the desired output stereoscopic or monoscopic layout manually, usually matching the VR Properties on the Sequence Output Layout, edit Output Layout, Output Horizontal FOV, and Output Vertical FOV as needed.
- Use the Filtering slider to raise filtering quality. Filtering controls the count of extra samples gathered horizontally and vertically. The result is reduced aliasing artifacts. Filtering defaults to 1, which reads a total of 4 samples, comparable to bilinear filtering. Higher filtering values help most when scaling an image down.

  - Use a positive value to strengthen the stereoscopic effect and a negative value to reduce it.
  - In normal use, adjust by very small degree values, often less than a single absolute degree, although the effect supports the full - 180 to +180 degrees range.
  - This parameter is ignored when either the input layout or the output layout is monoscopic.

- For the sphere's left-to-right orientation, select VR Projection > Pan.
- For the sphere's bottom-to-top orientation, select VR Projection > Tilt.
- For counter-clockwise to clockwise orientation of the sphere, select VR Projection > Roll.
