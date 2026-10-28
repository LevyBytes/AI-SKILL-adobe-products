# Compare view

The Compare tab presents Source and Output views side by side, making it easy to evaluate how crop, scaling, or rotation choices change the final result. Rather than adjust parameters and guess at the result, you see visual feedback immediately. This real-time comparison helps reveal framing changes, unintended cropping, scaling issues, orientation errors, and color or quality issues before you render anything or leave the workspace.

Compare Source and Output previews side by side with the Compare tab.

The Compare tab shows the Source and Output previews next to one another.

The Source tab provides these controls for checking and comparing settings before final export:

| Option | Function |
| --- | --- |
| Crop Proportions | Sets a fixed crop aspect ratio, or permits freeform cropping when set to None. |
| Left / Top / Right / Bottom | Uses exact numeric values to trim each edge of the source. |
| Source Scaling | Controls how source media is resized within the output frame and how aspect-ratio differences are handled.<br><br>- Scale To Fit fits the footage inside the frame while keeping its aspect ratio; empty space can remain when proportions do not match.<br>- Scale To Fill enlarges the footage until the frame is filled while keeping aspect ratio, which can crop portions of the image.<br>- Stretch To Fill makes the footage occupy the whole frame while ignoring aspect ratio, so distortion can occur.<br>- Scale To Fit With Black Borders keeps the entire image visible and fills unused space with black borders.<br>- Change Output Size To Match Source changes the output resolution to the source dimensions, avoiding scaling. |
| Source Rotation | Source Rotation fixes orientation before output generation, aligning footage ahead of scaling, cropping, and export. You can choose:<br><br>- None (0): leaves the original orientation unchanged<br>- Rotate Right (90): turns the image 90 degrees clockwise<br>- Rotate Half (180): flips the image upside down<br>- Rotate Left (270): turns the image 90 degrees counterclockwise. |
| Select Zoom Level | Changes the viewer zoom level used for the preview without changing output resolution or export settings. |
|  | Another control chooses the timeline portion used when comparing Source and Output previews. Use it to isolate the section that needs evaluation. Choices include:<br><br>- Entire Sequence: reviews the complete timeline<br>- Sequence In/Out: restricts playback to the marked in and out points<br>- Work Area: focuses on the defined work area region<br>- Custom: lets you manually specify a specific time range |
