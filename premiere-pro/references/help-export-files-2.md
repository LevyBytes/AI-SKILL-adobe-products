# Supported Features For Exporting Omf Files For Pro Tools, Quickly Export A Video File, Export Aaf Files, Supported Export File Formats ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Supported features for exporting OMF files for Pro Tools; Quickly export a video file; Export AAF files; Supported export file formats; Create and export HDR videos for YouTube on Mac; Overview of export settings; Basic video settings; Video encoding settings; Preset Manager overview.

## Supported features for exporting OMF files for Pro Tools

### Supported features and best practices for clean OMF handoffs from Adobe Premiere to Pro Tools.

### Supported features in OMF files

Premiere preserves these elements when you export an OMF file:

### Best practices for importing OMF files into Pro Tools

In the DigiTranslator dialog box:

- Clear Pan Odd Tracks Left/Even Tracks Right.
- For automatic gain control, choose Convert Clip Based Gain To Automation.
- Keep Sample Rate Conversion deselected unless sample rate conversion is required.

When the Missing Files dialog box appears:

- Set the default to Manually Find And Relink, then select OK.
- Clear every option.
- Go to the Project Name > ExternalMediaFiles folder and select it.

## Quickly export a video file

### Create an H.264 export in Adobe Premiere quickly with Match Source or preset choices for easy sharing.

In the Timeline panel, open the sequence that you need to output.

In Premiere, choose the upper-right Quick Export icon.

In the Quick Export dialog box, type the file name and choose the save destination.

From the Preset dropdown, choose the preset to use.

Use More presets when you need the Preset Manager, where system presets or custom presets can be marked as favorites for faster access later.

Choose Export to start rendering the video file.

When rendering finishes successfully, the completed file is available at the destination you chose.

## Export AAF files

### Build and share AAF files in Adobe Premiere for ongoing media interchange with professional editing and audio applications.

Advanced Authoring Format (AAF) is a multimedia container for moving digital media and metadata across platforms and applications. Authoring applications such as Avid Media Composer can read and write AAF files according to the AAF support they implement.

On Windows (Intel and Arm), embedded AAF exports over 2 GB are unsupported and fail. For larger AAF files, choose separate audio rather than embedded audio.

Note

- Premiere exports AAF files that work with Avid Media Composer and Avid Pro Tools, but other AAF importers have not been tested.
- Transitions are placed only between two clips, never at the opening or closing edge of a clip. A clip must be at least the transition's full length.
- A clip with transitions on both the In and Out points must have enough duration for both transitions together.
- In Premiere clip and sequence names, do not use special characters, accented characters, or symbols that may interfere with XML file parsing, including /, >, <, ®, and ü.
- AAF files exported from Premiere and then brought into Avid Media Composer do not relink to source footage automatically. Relinking requires the Batch Import option in Avid Media Composer.
- Merged clips cannot be included in AAF export; unmerge them before exporting.

Open File > Export > AAF to reach the AAF Export Settings dialog box.

Set the export options to match the needs of the destination application and workflow.

In the AAF Export Settings dialog box, choose export options for video, audio, and format preferences.

In the AAF Export Settings dialog box, choose export options for video, audio, and format preferences.

Choose OK to apply the settings.

Choose a save location, type a filename for the AAF file, and select Save.

Tip

For Avid Media Composer, choose Use tape sources when present only so the export links to original media and keeps audio channelization intact. For Avid Pro Tools, choose Enable Breakout to Mono. Depending on the workflow or the audio mixer's request, you can also set Files, Separate Audio, Format, and Render and Handle Frames. Broadcast Wave keeps iXML metadata.

## Supported export file formats

### Review which formats Adobe Premiere can export directly, including some formats not offered through Adobe Media Encoder.

Beyond the formats handled by Media Encoder, Premiere can create several export formats directly from inside the application.

Direct export from Premiere supports these file formats:

- AAF (Advanced Authoring Format)
- BMP (Windows Bitmap and supported only on Windows)
- DPX
- EDL (edit decision list)
- JPEG
- OMF (Open Media Format)
- PNG
- ProRes
- TGA (Targa)
- TIFF
- XML (Final Cut Pro XML)

## Create and export HDR videos for YouTube on Mac

### Prepare HDR (High Dynamic Range) videos for YouTube when your computer has an HDR display.

Use the HDR (High Dynamic Range) workflow for YouTube delivery on Mac hardware with an HDR capable display, such as Pro Display XDR, Apple Studio Display, Apple silicon MacBook Air, or any MacBook Pro from 2018 onward.

Before you begin

Configure the camera for log, raw, HDR, or HLG recording. With iPhone 12 or later, HDR is enabled by default; otherwise, confirm that HDR is turned on.

### Configure color management settings in Premiere

To set color management, open Settings in the Lumetri Color panel and choose Preferences.

Under Display Color, enable Display Color Management or Extended Dynamic Range Monitoring.

Open Settings, choose Project, and enable Color Manage Auto Detected Log and Raw Media or Enable Color Space Aware Effects.

### Sequence and Source Clip settings

The best sequence color setup depends on the media type in use.

### iPhone HDR media

Bring in the iPhone media.

Drag the media into the timeline window to create a new sequence.

Choose the Lumetri Color panel > Settings > Sequence.

Color Setup defaults to Direct HLG (HDR). When you do not intend to color grade the video, for example by adjusting exposure, highlights, temperature, etc., and only need a quick edit-and-upload path, this setup works well.

For a project that will receive color changes, switch to settings better suited to color work.

- Color Setup: Wide Gamut (Tone Mapped).
- Output Color Space: Rec. 2100 PQ.

### Log and raw media

Footage captured with a camera's log or raw option gives the greatest control over the finished image. Most current cameras can record in log, and iPhone 13 Pro and later can record video in log.

Import the log or raw media.

Make a new sequence by dragging the media into the timeline.

Select the media in the timeline, then review Lumetri Color panel > Settings > Source Clip.

For most camera formats, Premiere detects the media color space automatically, and the color space name appears beside Use Media Color Space. If Premiere does not select the correct color space on its own, choose Override Media Color Space and manually select the correct color space for the camera.

Choose the Lumetri Color panel > Settings > Sequence.

The default Color Setup is Direct Rec. 709 (SDR). Change it to:

- Color Setup: Wide Gamut (Tone Mapped).
- Output Color Space: Rec. 2100 PQ.

### Export your project

Premiere defaults to Standard Dynamic Range for export. To produce HDR output, use HDR-specific export settings.

Move to Export mode.

Open the menu to the right of Preset and choose More presets.

Type PQ in the Search field.

From the displayed preset list, choose HEVC - Match Source - PQ. If HDR exports will be frequent, use the star icon to the left of that preset name to add it as a favorite. Choose OK.

Change File Name and Location if needed, then choose Export to output the HDR video.

Use export preset management to maintain broadcast-quality output.

Use export preset management to maintain broadcast-quality output.

The exported video is ready for upload to YouTube. YouTube automatically processes the file and creates both HDR and SDR versions of the project.

Note

Processing may require anything from a few minutes to many hours, depending on video length. The SDR version appears before the HDR version. A good practice is to create a very short test export, less than 1 minute, so you can confirm that the settings are correct and that YouTube shows the video as HDR.

## Overview of export settings

### Reference guide for all export settings in Adobe Premiere.

### Video

Available Video settings depend on the selected export format. Every supported format has its own requirements, which determine the settings Premiere can show.

### Basic Video Settings

### Encoding Settings

### Mastering Display Color Volume

### Content Light Levels

### Bitrate Settings

Bitrate describes how much data a video or audio signal carries per second, measured in bits per second. In broad terms, higher bitrates improve video and audio quality, while lower bitrates make media easier to play on slow Internet connections.

Sets the compression method for the video/audio signal.

Note

For CBR and VBR comparisons on a particular media file, these general rules apply: a CBR file often plays more reliably across more systems because media players and computer processors handle a fixed data rate more easily. A VBR file, however, usually delivers better image quality because VBR varies compression based on the image content.

### Advanced Settings

### VR Video

Export 360-degree footage much like standard footage. VR 360 supports editing in equirectangular and dual spherical formats, with monoscopic and stereoscopic footage. Equirectangular export follows the same basic export process as other video, with some additional considerations.

Enable the Video Is VR check box, then set Frame Layout plus the Horizontal and Vertical Fields of View. The Frame Layout options let you change Frame Layout among monoscopic, stereoscopic (over/under), and stereoscopic (side by side).

### Audio

### Audio Format Settings

Formats such as H.264, HEVC (H.265), and MPEG2-DVD can use multiple audio formats. For those formats, Premiere shows a menu for choosing among audio export formats.

### Basic Audio Settings

### Bitrate Settings

Bitrate [kbps] is the audio output bit rate. Higher bit rates typically raise both quality and file size.

### Multiplexer

Formats such as H.264, HEVC (H.265), and MPEG include a Multiplexer section for controlling how video and audio data combine into one stream (aka "muxing"). If Multiplexing is set to None, Premiere exports video and audio streams as separate files.

For details on MPEG options, consult the applicable MPEG specifications for MPEG-4 (ISO/IEC 14496) and MPEG-2 (ISO/IEC 13818), along with the Wikipedia website.

### Captions

Captions commonly present a video's audio as text on televisions and other devices that can show closed captions.

When a sequence includes caption tracks, Export mode shows choices in the Caption section for how to handle caption information. If the source sequence has no caption tracks, the Captions section remains disabled.

### Metadata

Metadata is descriptive information attached to a media file. Examples include creation date, file format, and timeline markers.

An export template controls which XMP metadata Premiere writes into the output file. For instance, a template can include selected XMP metadata from source files and add contact information plus rights-management information to each output file.

Fields that the current template does not explicitly enable are filtered out. Internal properties automatically filled with data by the creator application are the only exceptions; they are always included and cannot be edited.

To build a custom export template, choose New beside the Export Template menu. In the Export Template Editor dialog box, enable individual fields or full categories. Locate fields with the search field at the top of the Export Template Editor dialog box. Give the export template a descriptive name.

To revise an existing custom export template, choose it from the Export Template menu and select Edit.

After applying an export template, you may still enter manual values, which adds selected XMP metadata to the current encoding queue items.

Some fields cannot be edited and cannot be removed from output, including fields written automatically by the creator application. Premiere, for example, fills in the Dublin Core schema Format field and the Dynamic Media schema Video Frame Rate field to describe the output file accurately, and those fields are not user-editable. Values supplied by the current export template also appear as not editable; use a different template or change the template to alter them.

Any field with no data, whether from the template or manual entry, is left out of the exported XMP metadata. Empty fields are not written into the output file.

To open the Metadata Export dialog box, choose the Metadata dialog button in the Metadata section.

### Export Options

These options control how XMP metadata is stored with the exported file.

### Include markers

Include marker information when it is present in the source. For clips, Premiere exports clip markers. For sequences, Premiere exports only sequence markers; clip markers on clips inside the sequence are not included.

### Set Start Timecode

When this option is enabled, you can define the exported clip's starting timecode. That setting replaces the source's native timecode.

## Basic video settings

### Basic video export settings reference for Adobe Premiere.

Available Video settings depend on the chosen export format. Each supported format has its own requirements, which determine the settings Premiere can show.

Note

Some capture cards and plug-in software supply separate dialog boxes with their own options. If the displayed options differ from the options covered here, consult the documentation for the capture card or plug-in.

### Match Source

Match Source automatically aligns export settings with the source settings.

Formats that support Match Source:

When the current format cannot exactly match the source settings, Premiere uses the closest available value.

### Match Source presets

Match Source presets help when you want selected video attributes to come from the source while other attributes use chosen values. The Match Source setting can be saved as a new preset and applied to any source.

By default, Premiere provides several adaptive Match Source presets for H.264 in the Preset menu:

- Match Source - Adaptive High Bitrate
- Match Source - Adaptive Medium Bitrate
- Match Source - Adaptive Low Bitrate

These presets copy most settings from the source and adjust bitrate based on the source frame size. This keeps video quality higher while reducing file size and export time.

### Match Source Rewrap presets

Formats such as MXF OP1a, QuickTime, and DNxHR/DNxHD MXF OP1a provide a Match Source (Rewrap) preset, which lets video frames pass-through the export pipeline without source re-encoding. That produces quicker exports without losing video quality.

Rewrap presets work only with sources encoded with the same codec as the preset. For example, the MXF rewrap preset applies only to sources also encoded to the MXF codec.

### Frame Size

Frame Size lists common video frame sizes:

- 4K
- UHD
- Quad HD
- Full HD
- HD
- SD NTSC Wide
- SD NTSC

Each setting shows its exact pixel dimensions (width x height).

Choose Custom when you need to enter your own exported-file width and height. Drag the hot-text controls to quickly change Width and Height, or select each field and type values directly. To preserve aspect ratio while changing frame size, keep the lock icon enabled.

Note

Some formats and codecs support only a limited frame-size range.

### Frame Rate

Frame Rate controls how many video frames appear each second during playback. Higher frame rates usually make motion smoother, but selecting a frame rate that differs from the source media frame rate can introduce unwanted motion artifacts. Remember that some formats and codecs accept only particular frame-rate sets.

### Field Order

Sets whether the exported file uses progressive frames or frames built from interlaced fields.

- Choose Progressive for digital television, online content, and film.
- For interlaced exports such as NTSC or PAL, choose Upper First or Lower First to define the display order for interlaced fields.

With Match Source selected, Premiere sets this value automatically to the source field order.

### Aspect

Pixel aspect ratio defines the video's pixel shape. Pixel aspect ratio (PAR) is the width-to-height ratio for one video pixel. Digital formats such as HD, 4K UHD, and 8K usually use square pixels (PAR 1.0), while analog formats such as NTSC and PAL use rectangular pixels. Exporting with a PAR that differs from the source media PAR can distort the video image.

### Render at Maximum Depth

With Render at Maximum Depth enabled, Premiere renders effects at the greatest bit depth the selected format can support; in most cases that means 32-bit float processing.

Keeping extra color data from the original video helps limit banding in smooth gradients and preserves more visible detail in bright highlights as well as dark shadow regions.

For some exports, Render at Maximum Depth can make encoding take longer. When GPU acceleration is active, effects are already rendered at the highest available bit depth, so that behavior applies whether or not this setting is selected.

### Transparency

Use this setting when exporting GIFs that need transparency. Three transparency choices are available.

### Use Maximum Render Quality

Use Maximum Render Quality is intended to keep detail and reduce aliasing when the export frame size does not match the source media, for example when a 4-K sequence is exported as HD or SD. The option may also change how sequences render scaling, rotation, and position transformations. Turning it on can raise output quality, with these considerations:

- Export can take much longer, particularly on machines that do not have a supported GPU.
- If supported GPU hardware is present and Renderer is set to Metal, CUDA, or OpenCL, Premiere automatically applies maximum render quality.

### Render Alpha Channel Only

For source media with an alpha channel, this setting outputs only that alpha information. When the option is active, the exported video contains only the alpha channel and the preview displays it in grayscale. It is useful for formats such as MXF, which do not carry transparency information. The alpha-only export can then be used in third-party applications to define which areas of the video are transparent.

### Time Interpolation

Time Interpolation matters when the exported media uses a different frame rate than the source media. For instance, the source sequence might be 30 fps while the export target is 60 fps. Premiere creates or discards frames through these methods:

## Video encoding settings

### Reference for the video encoding settings offered during export in Adobe Premiere.

Before output, Premiere lets you set up the project's video by choosing the format, resolution, frame rate, and codec options you want. Those selections help the file match the playback platform you plan to use.

### Performance

(H.264 and HEVC only) - Hardware Encoding is selected by default, directing Premiere to use available system hardware to shorten encoding time.

- Hardware acceleration depends on your system's configuration.
- When the machine cannot support particular export settings, the Performance menu changes itself to Software Encoding.

### Profile

Several choices are available among the common H.264 profiles.

### Level

This setting constrains which values can be chosen. It applies to Frame Size, Frame Rate, Field Order, Aspect, Bit Rate, and Chroma; other compression controls are limited as well. Higher Level choices allow larger video resolutions.

Tip

When you are not certain which Profile and Level combination is appropriate, turn on Match Source so Premiere can select the best setting from the source media's properties.

### Export Color Space

This control sets the color space written to the exported file. For most presets, the default is Rec. 709.

With certain formats, additional Export Color Space choices appear only after you enable other export controls:

- H.264: choose High 10 for Profile
- HEVC (H.265): choose Main 10 for Profile
- QuickTime - Apple ProRes: select the Render at Maximum Depth checkbox

Note

For XAVC Intra file formats, choose from the Export Color Space dropdown menu rather than using the older Hybrid Log Gamma checkbox.

### HDR Graphics White (Nits)

HDR Graphics White defines the intended luminance for a solid white color in an HDR scene. Because HDR brightness can greatly exceed SDR, luminance recommendations are based on viewer comfort.

HDR Graphics White may also be called Diffuse White. In HLG camera exposure, ITU recommends exposing cameras so a white card lands at 75% IRE on the waveform. That placement leaves headroom above it for specular highlights and produces an image that remains comfortable to view.

Solid white graphic elements such as text should likewise be placed at 75% of the HLG signal; that is why the control is named Graphics White. Setting white text to 100% luminance, such as 1,000 nits for HLG or 10,000 nits for PQ, can create brightness that is uncomfortable for viewers.

### Include HDR10 Metadata

HDR10 is based on the PQ transfer function and includes five metadata values. These values are typed by the user; Premiere does not analyze the content to derive them. The metadata gives the HDR playback device information about the content so it can display the image correctly and at high quality.

### Color Primaries

This value identifies the color gamut of the HDR monitor used for grading. Read the monitor's technical specifications to determine it. The drop-down list has three possible values: Rec.709, P3D65 (default), Rec. 2020.

### Luminance Min (cd/m^2)

This number records the lowest luminance the HDR grading monitor can produce. Use the monitor's technical specifications to find it. The control is numeric and supports scrubbable hot-text. Its default value is 0.0050. Accepted values span 0.0005 - 0.05.

### Luminance Max (cd/m^2)

This number records the highest luminance the HDR grading monitor can produce. Use the monitor's technical specifications to find it. The control is numeric and supports scrubbable hot-text. Its default value is 1000. Accepted values span 100 - 4000.

### Maximum (cd/m^2)

This value represents the program's maximum content luminance. Enter the luminance for the brightest part of the program. Although the HDR10 standard covers luminance values as high as 10,000 nits, consumer panels cannot currently reach that brightness. HDR10 content is generally recommended to stay at or below 4000 nits. The HDR display uses this value to tone map the program into the display's range without clipping highlights. It is the peak light level and is similar to Luminance Max.

### Average (cd/m^2)

This value is the maximum average level of light per frame. The HDR display uses it to tone map the program into the display's range so playback resembles the mastered result. Because this setting can substantially change how the content looks, test on the target display to confirm the image appears as intended.

## Preset Manager overview

### How Preset Manager supports choosing pre-defined export settings, importing or exporting presets for sharing, and saving your own.

Preset Manager speeds export work by giving you control over how media is saved and shared. It shows pre-defined export settings that you can select quickly, so you can choose a suitable configuration without adjusting each parameter every time.

Beyond the built-in choices, Preset Manager can import presets made by other people or export your own presets for collaborators, helping maintain consistency across projects and teams. For export settings you use often, save them as custom presets so they are available immediately when needed. In practice, Preset Manager makes preset handling easier by organizing, reusing, and sharing export settings.

Open Preset Manager for preset viewing, organization, import, export, and creation.

A. Complete list of all presets B. All presets pre-installed with Premiere C. Custom presets that you have created D. Displays the presets that are set as favorites in the list below E. Selected preset details F. Delete selected presets G. Import video preset files (\*.epr) files H. Export selected presets to your system

Preset Manager also handles preset viewing, organization, import, export, and creation.

### Access the Preset Manager

One fast route opens Preset Manager in Adobe Premiere.

To open Preset Manager, choose the Quick Export icon in the header bar, then choose Export to export with the default preset.

Choose More Presets to open Preset Manager when you want to inspect and manage the available presets or build a custom preset. Preset Manager is also available from Export mode.
