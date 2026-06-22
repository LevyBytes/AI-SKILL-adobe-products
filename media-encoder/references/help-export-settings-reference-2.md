# Export Settings Reference (part 2)

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Video settings

In the Video tab, use Encoding Settings to control export performance, profile selection, and level limits.

In the Video tab, use Encoding Settings to control export performance, profile selection, and level limits.

Preferred formats let you prepare the video for output.

- Hardware acceleration is determined by the configuration of your system.
- When a system cannot use particular export settings, the Performance menu changes to Software Only automatically.

- Baseline: the least complex profile, used for video conferencing and comparable devices where quick decoding is required.
- Main: a widely used profile, mainly for SD broadcasting.
- High: a broadly supported profile for most HD devices.
- High10: an extension of the High profile that adds 10 bit decoding support.

- Level: restricts compression-related choices such as Frame Size, Frame Rate, Field Order, Aspect, bit rate, and chroma. In general, higher levels permit larger video resolutions.

Note

If the right Profile and Level are unclear, turn on the Match Source check boxes so Media Encoder chooses suitable values from the source media properties.

- Rec. 2020 Primaries: uses the Rec. 2020 color space used by UHD formats such as 4K and 8K. This appears when Profile is set to High10.
- High Dynamic Range: exports High Dynamic Range media, preserving more detail in bright whites and deep blacks at higher bit depths. This option appears only after Rec. 2020 Color Primaries is enabled.
- Include HDR10 Metadata: the HDR10 format uses the PQ transfer function and stores five metadata values. Earlier Media Encoder versions supported PQ without writing that metadata. These user-entered values are not derived from content analysis. The metadata tells the HDR playback device about your content so it can display the program correctly and with the intended appearance.

Mastering Display Color Volume

- Color Primaries - the color gamut of the HDR monitor used while grading the content. Get this value from the monitor's technical specifications. The drop-down list has three options: Rec.709, P3D65 (default), Rec. 2020.
- Luminance Min - the lowest luminance the HDR grading monitor can produce. Get this number from the monitor's technical specifications. The input is numeric and supports scrubbable hot-text. Default: 0.0050. Range: 0.0005 - 0.05.
- Luminance Max - the highest luminance the HDR grading monitor can produce. Get this number from the monitor's technical specifications. The input is numeric and supports scrubbable hot-text. Default: 1000. Range: 100 - 4000.

Content Light Levels

- Maximum - the highest luminance present in the program content. Enter the luminance of the brightest portion of the program. Although HDR10 can represent luminance ranges up to 10,000 nits, consumer panels cannot reach that brightness. For HDR10 content, keeping luminance at or below 4000 nits is generally recommended. The HDR display uses this value when tone mapping the program into the display range so highlights are not clipped. It represents the maximum light level and is similar to Luminance Max.
- Average - the maximum average light level per frame. The HDR display uses this value when tone mapping the program into the display range so the result resembles what you saw during mastering. Because this value can strongly change the content's appearance, test playback on the intended display to confirm the result matches your intent.

Bitrate measures how much data a video or audio signal carries per second, in bits. Higher bitrates generally improve video and audio quality, while lower bitrates create media that plays more easily over slower Internet connections.

Available bitrate controls depend on the codec and format. Common options include:

- CBR (Constant Bit Rate): sets one fixed data-rate value. This can reduce export time, but complex frames may suffer in quality.
  - VBR (Variable Bit Rate): changes the data rate dynamically according to video/audio signal complexity. It can produce better overall quality with smaller files, though export time may increase.
  - VBR 1 Pass versus 2 Pass –1: Pass encoding scans the entire media file from start to finish to calculate a variable bit rate. 2 Pass encoding scans twice, first from start to finish and then from finish to start. The second pass takes longer, but improves encoding efficiency and often raises output quality.

Note

For a given media file, CBR and VBR can be compared in broad terms. A CBR file may play more dependably across many systems because media players and computer processors have an easier fixed data rate to handle. A VBR file, however, often delivers better image quality because the compression amount follows the image content.

- Target Bitrate [Mbps]: sets the encoded file's overall bitrate. Video uses megabits per second [Mbps], while audio uses kilobits per second [kbps].
- Maximum Bitrate [Mbps]: defines the lower and upper values permitted for VBR encoding.
  - Match Source: Adaptive Low Bitrate: low adaptive preset.
  - Match Source: Adaptive Medium Bitrate: medium adaptive preset.
  - Match Source: Adaptive High Bitrate: high adaptive preset.

By factoring in source-media resolution and frame rate, these presets can reduce file size and shorten export time when calculating overall bitrate. The same adaptive preset, for example, would use a lower bitrate for SD media and a higher bitrate for HD or 4-K media.

The following advanced settings are common across several formats and codecs:

- Key Frame Distance: turn this on to control how frequently keyframes (aka I-frames) are inserted into the exported video. Lower keyframe values usually improve video quality but can increase file size. If it is off, Media Encoder selects a suitable keyframe distance from the export format and frame rate.

Note

Some QuickTime and AVI codecs do not allow custom keyframe intervals, so Key Frame Distance is disabled for those codec selections.

- Optimize Stills: turn this on to render still images in the sequence as a single frame instead of repeated frames, reducing exported video file size. Supported players display optimized still frames for the proper duration. If playback issues appear while the exported video shows still images, deselect this option and export again.

VR export settings let 360-degree footage export much like standard footage. VR 360 supports editing in equirectangular and dual-spherical formats. Footage may be monoscopic or stereoscopic. Equirectangular export works like other video exports, with a few caveats. Learn more about working with immersive VR video.

Select the Video is VR checkbox, then modify its options.

### Horizontal and Vertical Field of View

After Auto VR Properties is disabled, the user can set Frame Layout, Horizontal Fields of View, and Vertical Fields of View manually. This option can convert Frame Layout among monoscopic, stereoscopic (over/under), and stereoscopic (side by side).

### VR export settings

360-degree footage can be exported using the same general process as regular footage. VR 360 supports equirectangular and dual spherical editing formats. Footage may be monocular or stereoscopic. Equirectangular video export behaves like other video export types, with several caveats.

For additional details, see Working with immersive VR video.

## Audio

The Audio tab in the Export Settings dialog contains audio controls. The selected export format determines which settings appear.

Use the Audio tab when adjusting export format, channels, sample rate, and bitrate.

Use the Audio tab when adjusting export format, channels, sample rate, and bitrate.

- AAC
- MPEG

Preferred formats let you prepare the audio for output.

- Audio Codec: selects the audio compression codec. Certain audio formats allow only uncompressed audio, which provides the highest quality while consuming more disk space. Some formats offer a single codec; others present several codec choices.
- Sample Rate: the frequency, measured in Hertz (Hz), at which audio becomes discrete digital values. Higher sample rates can improve recorded audio quality but require larger files. For best results, export audio at its original recording sample rate. Exporting above that rate does not improve quality and requires resampling, which can lengthen export time.
- Channels: sets how many audio channels are written into the exported file. If you export fewer channels than exist in the master track of the sequence or media file, Adobe Media Encoder down-mixes the audio. Typical choices include Mono, which uses one channel; Stereo, which uses two channels; and 5.1, a six-channel surround sound setup.

Note

- Down mixing supports only certain channelization conversions, including 5.1 to stereo and stereo to mono. N-Channel to stereo or mono is not supported.
- In QuickTime, Audio Channel Configuration options control how source channels map to output channels in the exported file. This can save time and simplify rendering by placing multiple audio output configurations in one QuickTime file, including stereo and 5.1 channelization.

- Sample Size: the amount of audio data stored for each sample, also called "bit depth". Higher sample sizes generally produce better sound quality but larger files.

Bitrate [kbps] is the exported audio bit rate. In general, higher bit rates raise both quality and file size.

## Multiplexer

Formats such as H.264, HEVC (H.265), and MPEG provide a Multiplexer tab for controlling how video and audio are combined into one stream, also called "muxing". If Multiplexer is set to None, the video and audio streams are written as separate files.

Use the Multiplexer tab to set container behavior and stream compatibility for the export.

Use the Multiplexer tab to set container behavior and stream compatibility for the export.

These options are available:

- Multiplexer: selects the container format, such as MP4, that joins video and audio in a single file.
- Stream Compatibility: controls the file structure used for playback so the export works correctly on different platforms and devices.

## Captions

On televisions and other devices with closed-caption support, closed captions commonly show a video's audio as text. In the Export Settings dialog box, the new Captions tab provides format and frame-rate choices for exported closed caption data. The available frame rate options vary according to the file format selected for export.

## Publish

The Publish tab can upload files to multiple social media platforms. Adobe Media Encoder lets you choose from available system presets. See publish settings in Adobe Media Encoder for more detail.

Use the Publish tab when the exported file should go directly to destinations such as Behance, Facebook, Vimeo, YouTube, or an FTP server.

The same Publish tab supports direct delivery of the exported file to Behance, Facebook, Vimeo, YouTube, or an FTP server.

## Render and time interpolation settings

This option preserves detail and reduces aliasing when the export frame size differs from the source media. An example is exporting a high-resolution 4-K sequence to lower-resolution HD or SD. Turning it on can improve quality, with these considerations:

- Export time can rise substantially, especially on systems without a supported GPU.
- If supported GPU hardware is available and Renderer is set to Metal, CUDA, or OpenCL, maximum render quality is used automatically. Keep this setting off in those cases.
- Use this only when exporting to a different frame size. When source and export frame sizes match, leave it off.

When enabled, Adobe Media Encoder exports from preview files already created for the Premiere sequence instead of rendering fresh media. This can make exporting faster, but the chosen preview format can affect quality.

Note

This setting applies only to Premiere sequences.

Proxies improve performance during editing and export.

When enabled, Adobe Media Encoder exports from proxy files already created for the sequence instead of rendering fresh media. This can improve export performance. The checkbox defaults to unchecked.

When enabled, Adobe Media Encoder writes verified metadata covering the file creator, the application used, such as Premiere, and any edits or generative AI involved, so viewers can understand how the content was produced and changed.

Turn this on to set an exported-media starting timecode that differs from the source timecode. Leave it off to use the source timecode during export.

Sources that include an alpha channel can use this option. When enabled, the output video renders only the alpha channel, and the Output tab shows a grayscale preview of that alpha channel. This helps when exporting to formats such as MXF that do not support transparency data. The alpha-channel-only export can define transparent areas in third-party applications.

Time Interpolation applies when exported-media frame rate does not match source-media frame rate. For example, the source sequence might be 30 fps while the export target is 60 fps. Time Interpolation creates or removes frames using these methods:

- Frame Sampling: duplicates or drops frames to reach the requested frame rate. Some footage may play back with stutter or jitter when this method is used.
- Frame Blending: inserts or removes frames by blending neighboring frames together, which can make playback smoother.
- Optical Flow: creates or removes frames by interpolating pixel motion from nearby frames. It usually gives the smoothest playback, though artifacts can appear when frames differ greatly. If that happens, try another time interpolation setting.

Estimated File Size is an approximate value based on constant-bit-rate video without audio or metadata.

Select this option to define the Maximum File Size for the exported video. It appears for presets that support estimated file sizes. Longer files are exported with an adjusted bitrate so they fit the requested file size. This is useful for export targets such as YouTube that impose file-size limits.

Note

- In some cases, Maximum File Size is respected by changing bit rates to remain under the size limit.
- Estimated File Size and Maximum File Size values are unreliable with very small target sizes, variable bit rates, or audio-only media.
- Actual sizes may differ greatly depending on format.
- Adding metadata can make the file larger than the displayed Estimated File Size.

## Export and thin XMP metadata

Metadata is descriptive information attached to a media file. It can include details such as creation date, file format, and timeline markers. From the Metadata Export dialog box, choose which XMP metadata is included with exported media.

To open Metadata Export, select the Metadata button at the lower-right of the Export Settings dialog.

Use the Metadata Export dialog box to control how metadata is included in or customized for the export.

Use the Metadata Export dialog box to control how metadata is included in or customized for the export. Note

The Metadata category in the Preferences dialog box offers many of these same operations. Changes made there do not affect selected items already in the encoding queue, but templates and rules can later be assigned from Metadata Export.

For related guidance, see working with metadata in Premiere.

In the Export Options menu, choose how XMP metadata is stored with the exported file:

- Embed in Output File: stores XMP metadata inside the exported file.
- Create Sidecar File: writes XMP metadata to its own file beside the exported file.
- Embed in Output File and Create Sidecar File: puts XMP metadata inside the exported file and also writes a separate sidecar file.
- Minimum required: includes only the essential metadata required for basic playback and identification.
- Off: exports no source XMP metadata. Basic metadata about the exported file, including export settings and start timecode, is still exported even when None is selected.

Note

For formats that cannot embed XMP data, the Embed In Output File option is unavailable.

An export template determines which XMP metadata is written to the output file. For example, a template can include selected XMP metadata from source files and add contact or rights-management information to every output file.

Any fields not explicitly enabled by the current template are filtered out. Internal properties filled automatically by the creator application are the only exceptions; those are always included and cannot be edited.

To make a custom export template, select New beside the Export Template menu. In the Export Template Editor dialog box, enable individual fields or categories. Use the search field near the top of that dialog box to locate particular fields. Give the export template a descriptive name.

To modify a custom export template, choose it from the Export Template menu and select Edit.

Once an export template is applied, you can still type manual values that add specific XMP metadata to the currently selected encoding queue items.

Some fields cannot be edited or removed from output because the creator application writes them automatically. For example, Adobe Media Encoder accurately describes the output file by setting Format in the Dublin Core schema and Video Frame Rate in the Dynamic Media schema; those fields are not user-editable. Values supplied by the current export template also appear as uneditable. To change them, edit the template or apply a different one.

Fields with no data from either the template or manual entry are omitted from exported XMP metadata. Empty fields are skipped in the final output.

### More like this

- Encode and export video and audio with Media Encoder (related workflow)
- Create custom presets for Media Encoder
