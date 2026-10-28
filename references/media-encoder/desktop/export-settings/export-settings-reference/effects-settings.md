# Effects settings

The Effects tab can apply exported-media effects, including Image, text and timeline overlays, Lumetri color adjustments, and HDR to SDR conversion.

Preview those project effects from the Output tab.

In Export Settings, the Effects tab applies visual adjustments such as Tone Mapping, Lumetri Look/LUT, and SDR Conform.

The Effects tab in Export Settings is where Tone Mapping, Lumetri Look/LUT, and SDR Conform are applied.

Apply Tone Mapping when exporting HDR media or a sequence to an SDR export color space.

Use Lumetri to apply color grades to the exported video.

To apply a Lumetri preset, use one of these methods:

- From the Applied dropdown menu, choose a Lumetri preset.
- To use your own custom Look or LUT file, choose Select in the dropdown menu.

For playback on non-HDR devices, use SDR Conform to map High Dynamic Range (HDR) video into Standard Dynamic Range (SDR) (values set as a percentage).

These options are available:

- Brightness: Sets the overall brightness for SDR-conformed media.
- Contrast: Sets the overall contrast for SDR-conformed media.
- Soft Knee: Adjusts the transition into full compression mode to prevent hard clipping.

Use Image Overlay to place an image over the exported video.

These options are available:

- Applied: Use Browse, then choose the image for the overlay.
- Position: Places the image overlay relative to the output frame. For example, Center, Top Left, Bottom Right.
- Offset: Moves the image overlay horizontally and vertically from the relative position, measured in pixels.
- Absolute Sizing: Turn on this option to connect the image overlay's size to the source image's native size. When enabled, higher output resolutions show the image overlay smaller and lower output resolutions show it larger.
- Size: Changes the image size. By default, the image overlay size adjusts automatically to the current output frame size. The image is overlaid according to relative size, regardless of output resolution.
- Opacity: Sets the overlay image opacity.

Use Name Overlay to add text to the exported video.

These options are available:

- Prefix: Text inserted before the name overlay.

  - Prefix and Suffix Only
  - Source File Name
  - Source File Name (Without Extension)
  - Output File Name
  - Output File Name (Without Extension)

- Suffix: Text appended after the name overlay.
- Position: Chooses where the text appears. Examples: Center, Top Left, Bottom Right.
- Offset (X,Y): Moves the name overlay on the X and Y axes, measured in pixels.
- Size: Changes the text size.
- Opacity: Changes the opacity of the black background behind the text.

Timecode Overlay adds a timecode counter to the exported video.

These options are available:

- Position: Chooses where the timecode appears. Examples: Center, Top Left, Bottom Right.
- Offset (X,Y): Moves the timecode on the X and Y axes inside the output frame, measured in pixels.
- Size: Changes the timecode display size.
- Opacity: Sets the overlay timecode opacity.

  - Media File: Reads Timecode from the source media. When no source media is detected, the timecode overlay begins at zero and matches the frame rate of the source.
    - Format: Choose the frames-per-second timecode format. For example, 25-fps Timecode.
    - Starts at: Sets the timecode starting value.

- Offset in Frames: Sets the frame count used to offset the timecode overlay from the source's timecode. Positive or negative offset values are accepted.

Use Time Tuner to automatically lengthen or shorten the video by duplicating or removing frames in certain sections, making the overall duration change imperceptible.

For example, a video may need to be slightly shorter for a broadcast schedule when there is no time to re-edit the full sequence.

These options are available:

- Current Duration: length of the original video source.
- Target Duration: length of the exported video once the effect has been applied.
- Duration Change: the difference between source duration and final output duration. Allowed adjustment spans -10% shorter through +10% longer.

  - Target Duration: applies the Target Duration value without considering the source's starting length.
  - Duration Change: applies the Duration Change value relative to the source's starting length.

- Skip Slates: excludes slates during duration adjustment. Turn this on when Time Tuner should disregard any still-image sequence longer than 10 seconds.

Video Limiter keeps source-video luminance and color values inside broadcast-safe limits.

- Clip Level: sets the output span in IRE units.
- Compression before clipping: adds a "knee" so colors can be pulled back into range before hard clipping occurs.

For additional details, see Automatic Loudness Correction.
