# Export Settings Reference (part 1)

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

Search Last updated on Mar 27, 2026

See which effects, video, audio, and publish settings are available in the Export Settings dialog for Adobe Media Encoder.

You can run Adobe Media Encoder on its own or use it from Adobe Premiere, After Effects, Character Animator, Audition, and Adobe Animate. Export Settings provides encoding choices for rendering and exporting Premiere sequences and clips or After Effects compositions. Before export, use the dialog to control clip parameters such as quality, frame rate, and resolution.

In the Queue panel, select a source video's output. Then open the Export Settings dialog in Adobe Media Encoder with any of these actions:

- From the output context menu, choose Export Settings.
- Choose Edit > Export Settings.
- Click the output format or preset name.

Note

If Edit > Export Settings appears unavailable, first make sure an output is selected in the Queue panel.

## Export Settings dialog

On the left side of the Export Settings dialog box, a video preview frame appears with tabs for Source and Output views, a timecode display, and a timeline for navigating to frames and setting In and Out points to trim exported video duration. The Compare tab shows Source and Output previews side by side so you can check color or quality before export.

All available export settings appear on the right side of the dialog box. From there, choose an export format and preset, adjust video and audio encoding, add effects, closed captions, and metadata, and publish to social media sites such as YouTube and Facebook.

Learn more about the encoding options in the Export Settings dialog box.

## Source view

The Source tab displays the source video before export settings are applied. Use it to play back video and set In and Out points for export. Move between Source and Output tabs to preview how export settings change the source media.

Use Source and Output tabs for a quick comparison between original media and export settings.

Use Source and Output tabs to compare original media against export settings quickly.

## Compare view

The Compare tab presents Source and Output views side by side, making it easy to evaluate how crop, scaling, or rotation choices change the final result. Rather than adjust parameters and guess at the result, you see visual feedback immediately. This real-time comparison helps reveal framing changes, unintended cropping, scaling issues, orientation errors, and color or quality issues before you render anything or leave the workspace.

Compare Source and Output previews side by side with the Compare tab.

The Compare tab shows the Source and Output previews next to one another.

The Source tab provides these controls for checking and comparing settings before final export:

Option

Function

Crop Proportions

Sets a fixed crop aspect ratio, or permits freeform cropping when set to None.

Left / Top / Right / Bottom

Uses exact numeric values to trim each edge of the source.

Source Scaling

Controls how source media is resized within the output frame and how aspect-ratio differences are handled.

- Scale To Fit fits the footage inside the frame while keeping its aspect ratio; empty space can remain when proportions do not match.
- Scale To Fill enlarges the footage until the frame is filled while keeping aspect ratio, which can crop portions of the image.
- Stretch To Fill makes the footage occupy the whole frame while ignoring aspect ratio, so distortion can occur.
- Scale To Fit With Black Borders keeps the entire image visible and fills unused space with black borders.
- Change Output Size To Match Source changes the output resolution to the source dimensions, avoiding scaling.

Source Rotation

Source Rotation fixes orientation before output generation, aligning footage ahead of scaling, cropping, and export. You can choose:

- None (0): leaves the original orientation unchanged
- Rotate Right (90): turns the image 90 degrees clockwise
- Rotate Half (180): flips the image upside down
- Rotate Left (270): turns the image 90 degrees counterclockwise.

Select Zoom Level

Changes the viewer zoom level used for the preview without changing output resolution or export settings.

Another control chooses the timeline portion used when comparing Source and Output previews. Use it to isolate the section that needs evaluation. Choices include:

- Entire Sequence: reviews the complete timeline
- Sequence In/Out: restricts playback to the marked in and out points
- Work Area: focuses on the defined work area region
- Custom: lets you manually specify a specific time range

| --- | --- |

### Crop settings

When export should include only part of a frame, crop the source video. Choose common proportions such as 4:3 or 16:9, or enter custom cropped-frame values.

In the Export Settings dialog box, select the Source tab.

Right-click the file and choose Export Settings, or click the blue text under the Preset column, such as Match Source - High Bitrate, to open Export Settings.

Select the Source tab.

For crop editing and frame-dimension changes, choose the toolbar's Crop the output video icon above the preview image. The left, top, right, and bottom pixel values for the crop area become editable with blue highlighting.

3. Click Crop the output video to start cropping and make the left, top, right, and bottom pixel values editable in blue.
   Set the frame with crop handles on the preview image, then drag the crop box within the preview window to position the shot.

Specific pixel values for Left, Top, Right, and Bottom can also be entered in the crop settings panel.

Another approach is to use Output tab > Source Scaling, then choose Scale to Fit, Scale to Fill, Stretch to Fill, or Scale to Fit with Black Borders to map the cropped image into the final dimensions.

5. In the Output tab, set Source Scaling to decide how the crop maps into the output resolution.
   To lock aspect ratio, pick a value such as 3:4 or 9:16 for vertical video from the Crop Proportions dropdown menu.

The Compare tab can also show Source and Output side by side, so the crop's effect on the final result is visible immediately.

Preview the final cropped video frame by selecting the Output tab.

Note

- This setting applies to the whole clip, and the crop position cannot be keyframed to move over time.
- To restore the uncropped image, use the Crop the output video icon again and turn it off.

## Output view

The Output tab previews your source video with the current export settings applied.

### Source Scaling

In the Output tab, Source Scaling controls how the cropped image fits the final resolution.

Source Scaling in the Output tab adjusts the cropped image against the final resolution.

When source and export frame sizes differ, the Source Scaling menu determines source placement inside the exported video frame. This setting appears for output formats with editable frame dimensions.

Scale to Fit fits the source frame inside the output frame without distortion or cropping. Black bars can be added at the top and bottom (letter-box) or sides (pillar-box) as needed.

If the source video has been cropped, the cropped dimensions are fitted inside the exported video frame.

Source Scaling dropdown in the Output tab with Scale to Fit selected.

Scale to Fit selected in the Output tab Source Scaling dropdown.

Scale to Fill preserves proportions while enlarging the source until no empty area remains; edges can be removed vertically or horizontally.

Source Scaling dropdown in the Output tab with Scale to Fill selected.

Scale to Fill selected in the Output tab Source Scaling dropdown.

Stretch to Fill stretches the source frame to fill the output frame with no cropping. If exported frame size and source frame size differ greatly, distortion can appear in the output video.

Source Scaling dropdown in the Output tab with Stretch to Fill selected.

Stretch to Fill selected in the Output tab Source Scaling dropdown.

Scale To Fit With Black Borders includes cropped areas while fitting the source frame into the output frame without distortion. The video receives a black border even when the output frame is smaller.

Source Scaling dropdown in the Output tab with Scale To Fit With Black Borders selected.

Scale To Fit With Black Borders selected in the Output tab Source Scaling dropdown.

Change Output Size To Match Source sets output video frame dimensions from the source video's height and width, replacing the current output frame size settings. Use this setting when output frame size must always match source frame size.

Source Scaling dropdown in the Output tab with Change Output Size To Match Source selected.

Change Output Size To Match Source selected in the Output tab Source Scaling dropdown.

Note

Some export formats do not offer Change Output Size to Match Source. For the same behavior, use the video tab's Match Source button or select a Match Source preset.

### Source Rotation

Source Rotation settings rotate video or change video orientation.

Use Source Rotation settings when you need rotation or orientation changes.

Source Rotation options rotate the video for different output formats. Landscape and portrait options can also flip the video orientation.

## Timeline and time display

Below the preview frame, the Source tab and Output views include a timeline and timecode display. The timeline contains a current-frame playhead, a duration bar, and trim-boundary controls.

Source panel controls in the Export Settings dialog box.

A. Video preview frame B. Mark In and Out C. Time duration D. Source Range E. Zoom Level F. Aspect Ratio Correction

Export Settings dialog box Source panel controls.

Preview other frames by clicking or dragging the playhead along the timeline. You can also move directly to a frame by typing a timecode value in the current time display.

The video preview displays the frame marked by the timeline playhead. Aspect Ratio Correction is on by default, so non-square pixel video appears without distortion on computer displays. Disable it with the Aspect Ratio Correction toggle button located to the right of the Zoom menu.

Choose a zoom level from the Select Zoom Level menu above the timeline to zoom the preview image in or out.

Note

Zoom out with these shortcuts:

- Windows: Ctrl + - (hyphen)
- macOS: Command + - (hyphen)

Zoom in with these shortcuts:

- Windows: Ctrl + = (equal sign)
- macOS: Command + = (equal sign)

These keyboard shortcuts use the main keyboard rather than the numeric keypad.

Trim exported video duration by marking the first frame as an In point and the last frame as an Out point in the timeline. Set In and Out points in these ways:

- With the playhead on the desired frame, click Set In Point or Set Out Point above the timeline.
- From either side of the timeline, drag the In point or Out point icon onto the target frame.
- Put the playhead on a timeline frame, then press the I key for an In point or the O key for an Out point.

The Source Range menu quickly sets exported video duration with these choices:

- Entire Sequence: Exports the complete duration of the source clip or sequence.
- Sequence/Clip/Session In/Out: Uses In and Out marks created in Premiere, Audition, and other Adobe app clips or sequences.
- Work Area: Uses a Premiere sequence work area or an After Effects composition work area.
- Custom: Uses the In and Out points defined in the Export Settings dialog box.

Note

Adobe Media Encoder retains timecode information from a source file. The Set Start Timecode control changes the start timecode value. For a source beginning at 00:00:05:00, Adobe Media Encoder starts that item's timeline at 00:00:05:00 instead of zero. The encoded output file includes this timecode information.

## Export Settings

The upper part of Export Settings lets you choose the exported video's format and select from common presets.

You can also edit the exported filename and choose where exported media is saved. Exporting video-only or audio-only files is supported, along with a source and output settings summary.

Adjust output format and export choices in the Export Settings section.

The Export Settings section controls output format and export options.

These options are available:

- Format: Sets the file type and compression codec for export, such as H.264.
- Preset: Provides a predefined set of export settings tuned for particular platforms or uses.
- Comments: Adds optional notes or descriptions for the export preset or file.
- Output Name: Shows the exported file name; click it to rename the file or choose where it is saved.
- Export Video: Includes the video track in the exported file when checked.
- Export Audio: Includes the audio track in the exported file when checked.
- Export Captions: Includes captions in the export when checked, either embedded or as a separate file depending on settings.
- Summary: Shows a compact overview of selected export settings, including resolution, frame rate, codec, and estimated file size.

## Effects settings

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

## Video settings

Available video options depend on the export Format selected, because each format exposes only the settings its requirements allow.

In Export Settings, use the Video tab when you need to change resolution, frame rate, or encoding options.

In Export Settings, use the Video tab when you need to change resolution, frame rate, or encoding options. Note

Capture cards and plug-in software can supply separate option dialogs. When your displayed choices do not match the ones described here, consult the documentation for that capture card or plug in.

For broader guidance on compression controls, see Compression tips.

Several Adobe Media Encoder export formats offer Match Source, which automatically aligns export settings with the source settings.

Match Source is supported by these formats:

- Animated GIF
- BMP
- DNxHD/DNxHD MXF OP1a – with “Match Source (Rewrap)” preset only
- DPX
- GIF
- H.264
- HEVC (H.265)
- JPEG
- JPEG 2000 MXF OP1a
- MPEG‑2
- MXF OP1a – with “Match Source (Rewrap)” preset only
- OpenEXR
- PNG
- QuickTime
- Targa
- TIFF

With Match Source enabled, Adobe Media Encoder fills in this value so it matches the source field order. See the material on interlaced versus non-interlaced video for additional context.

### Match Source controls and presets

For H.264 or MPEG-2 exports, Adobe Media Encoder can mirror the source file's video settings through Match Source presets. Choosing one of these presets turns on the relevant controls in the Video settings tab of the Export Settings dialog.

For H.264 and MPEG-2 exporters, Adobe Media Encoder includes two Match Source presets:

- Match Source - High bit rate: intended for High-Definition (HD) source video. For both H.264 and MPEG-2 exporters, this is the default Match Source preset.
- Match Source - Medium bit rate: intended for Standard-Definition (SD) source video.

Use Match Source presets when only some video attributes should carry over from the source while other attributes are set manually. The Match Source configuration can be saved as a new preset and reused on any source in the Queue or Watch Folder panels.

For instance, a Watch Folder may contain assets with different frame sizes and frame rates. If all of those assets need conversion to one format at 24 fps, build a preset that keeps source matching enabled for every property except Frame Rate, which you set to 24 fps.

Most Media Encoder export formats share the following settings:

- Width: the video frame's width.
- Height: the video frame's height.

Note

When width and height are linked, the video's aspect ratio is preserved. To set width and height separately, turn off the link button.

- Video Dimensions: formats such as H.264 Blu-ray or Wraptor DCP allow only particular frame sizes. For those formats, the Video Dimensions menu lists the supported sizes.
- Frame Rate: the number of frames displayed each second during playback. Higher frame rates usually make motion appear smoother, but selecting a frame rate that differs from the source media can create unwanted motion artifacts. Some formats and codecs also restrict frame rates to a specific set.

  - Progressive is the preferred choice for digital television, online content, and film.
  - For interlaced exports such as NTSC or PAL, choose Upper First or Lower First to define the field display order.

- Aspect: the video's pixel aspect ratio. Pixel aspect ratio (PAR) is the width-to-height relationship of one video pixel. Digital formats such as HD, 4 K UHD, and 8 K generally use square pixels (PAR 1.0), while analog formats such as NTSC & PAL use rectangular pixels. Exporting with a PAR that differs from the source media's PAR can distort the image.
- Render at Maximum Depth: exports with greater color precision (32-bit), improving gradients and overall color quality.

H.264 and HEVC formats include the settings described next.
