# Video encoding, bitrate and advanced controls

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

Related: [Video settings and Match Source formats](video-settings.md).
