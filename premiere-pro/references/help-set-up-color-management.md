# About Color Management, How Color Management Works, Lumetri Enhancements, Color Management Options ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Color Management overview; How Color Management works; Color Management and Lumetri Color; Color Management options; Manage source media colors in the Program Monitor.

## Color Management overview

### Learn about Color Management in Adobe Premiere.

Premiere Color Management simplifies the use of wide-gamut camera raw and log-encoded media, makes delivery to multiple formats easier, and helps color work move faster.

RAW and log formats from widely used cameras are supported by the Color Management system. It converts raw and log media into the color space you select with high-fidelity tone mapping, which improves image processing, video monitoring, and sequence export.

Premiere Color Management also lets users work in a wide gamut working color space through three wide gamut presets for better-looking output.

### Overview of Color Management features

A sequence's Color Management can be configured from the Color Setup menu in the Color tab while creating a new sequence, or from the Settings tab in the Lumetri Color panel. This lets Color Management changes happen in real time while the Program Monitor shows the result, without moving back and forth between the timeline and settings.

In the Lumetri Settings tab, adjust Color Management settings to control color interpretation and display.

Use Lumetri Settings to configure Color Management for how color is read and shown.

With the default Direct Rec.709 (SDR) preset, Color Management behaves much like earlier Premiere color workflows. Wide-gamut color processing presets are another option, improving image quality for grading and timeline effects when source media has a wide gamut or wide latitude. In every preset, Lumetri and other effects are color space aware and work appropriately.

Automated Color Management can be disabled in the Color Setup menu. That choice supports pass-through workflows when media color space should not be processed, or traditional display-referred grading that relies on LUTs and manual adjustments.

When enabled, Color Management automatically handles camera raw media from Apple, ARRI, Canon, RED, and Sony. Raw clips are processed and converted to the selected output color space.

The Override Media Color Space menu includes commonly used color spaces for supported cameras and formats. It helps color manage media recorded or transcoded into standard formats such as QuickTime and MXF without requiring the correct input LUT to be located manually.

For clips that should bypass automatic color management, open the Modify Clip dialog, go to the Color tab, and use Preserve RGB. That setting blocks input-to-working color space conversions so clips can be converted manually with LUTs or filter adjustments.

Program Monitor, Video Scopes, Transmit, and Media Export all show or produce the image after conversion to the Output Color Space setting. The working color space controls how media is processed, while Output Color Space defines the color space used for monitoring and delivery, including SDR, HDR PQ, or HLG. Because of that separation, the working color space can stay unchanged while the output color space changes to create multiple deliverables, such as HDR and SDR versions of one graded sequence.

In the Source Monitor, the wrench menu contains a Monitor Color Management submenu with choices for displaying source media. The default gang to Active Sequence Color Management setting previews Source Monitor media with the Color Management settings of the sequence currently shown in the Program Monitor.

Improved tone mapping algorithms and Gamut Compression settings raise quality when wide-gamut source media is automatically converted to standard dynamic range. Tone mapping can be used in two places: on input and on output.

The former Auto Detect Log Video Color Space setting is now named Color Manage Auto Detected Log and Raw Media, matching the expanded Color Management behavior.

Premiere Color Management improves interoperability and color consistency with Dynamic Link when color-managed sequence clips are round-tripped between Premiere and After Effects using the Replace with After Effects composition command.

When older Premiere projects and sequences already contain grading and effects, importing them automatically configures those items so they look as they did before and Color Management behaves as it did before. To use newer Color Management instead, override the sequence's Custom Settings, choose a different Color Management preset, or undo the change if needed.

## How Color Management works

### See how Color Management keeps color interpretation and display accurate across devices and formats for smoother editing.

Color Management converts each source clip edited into a sequence into that sequence's working color space, where effects and color adjustments are applied. The full sequence is then converted to an output color space for monitoring and export. During this process, tone mapping may be used to compress highlight and shadow detail that would otherwise clip or distort, helping wide gamut source media, such as camera raw, fit narrow gamut output formats, such as Rec.709, without manual setup.

Color Management centers on two transformations: Input Color Space to Working Color Space, followed by Working Color Space to Output Color Space.

### Color Management and source media

Correct identification of each clip's color space is required for Color Management to work properly. Premiere uses metadata it finds in QuickTime, MXF, MP4, and selected camera raw formats to assign color space tags automatically across different media. When metadata is missing or wrong, use Modify Clip > Color to check whether media is tagged correctly and update clips that are not.

### Color Management and sequences

For a new empty sequence, configure how media edited into that sequence will be color managed. Each project sequence can use its own Color Management settings, which lets a single project support several color workflows. Those settings control how clips appear after being edited into the sequence and how the sequence outputs during export. Configure them in the Color Management tab of the New Sequence dialog.

After creating a sequence, its Color Management settings remain editable through the Color tab in the Sequence Settings dialog or through the Lumetri panel Settings tab under the Sequence section.

Use the Lumetri Color panel to review and manage sequence and clip color-space settings.

Sequence and clip color-space settings can be viewed and managed from the Lumetri Color panel.

When another empty sequence is created, you can again decide how Color Management should treat the media added to it. Multiple sequences in one project may each carry separate Color Management settings, providing flexibility for different workflows. These settings determine clip appearance inside that sequence and the sequence's exported output, and they are set from the Color Management tab in the New Sequence dialog.

Even after a sequence exists, you can revise its Color Management settings whenever needed from the Color tab of the Sequence Settings dialog or from the Sequence section in the Lumetri panel's Settings tab.

Tip

The chosen working color space affects how some effects and color adjustments appear. If you switch the working color space after applying those effects or adjustments, their appearance can change.

The default Color Management preset uses SDR color processing in the Rec.709 color space, applies input tone mapping so wide gamut source media fits Rec.709, and outputs Rec.709. It suits programs made mostly from SDR source media when you want Premiere to behave similarly to earlier workflows.

Other Color Management workflows are available through the provided presets. For example, when the main source is camera raw media, choose Wide Gamut (Tone Mapped) from the Color Setup menu in the Color Management tab. That preset sets Premiere Color Management to the ACEScct wide gamut color space, uses Output Tone Mapping so wide gamut media fits the selected output color space, and defaults to Rec.709 output, although the output can be changed at any time. This workflow gives more room for color adjustments and preserves maximum quality by delaying tone mapping until after all image effects and color corrections, leaving highlight and shadow detail available at full quality.

If none of the available color management presets matches a program's requirements, the advanced control group exposes every parameter that governs automated Color Management, allowing Premiere color management to be customized as needed.

### Monitor and export output color space

For each sequence, Output Color Space defines the color produced in the Program Monitor, through Transmit, and in rendered exports.

Selecting a Color Management preset automatically assigns the Output Color Space usually associated with that preset. You can still change Output Color Space at any time without changing the preset, so a sequence can be output to any supported format that matches delivery needs.

All Color Management presets included with Premiere default to Rec.709 output because it is the most common output. For other SDR or HDR color spaces, open the color parameters in Sequence Settings or the Lumetri Settings panel and set Output Color Space to the delivery target. Premiere Color Management then performs the required conversion so the sequence outputs correctly.

During video-file export, an incompatible Format or Bit Depth selection can prevent use of the current sequence's Output Color Space. In that situation, an Export Color Space may be assigned for conversion to an exportable color space. A warning appears; to export to the selected Output Color Space, choose a supported format or raise the bit depth.

### Tone mapping and Gamut Compression

Camera raw and log-encoded media often contain more latitude and color than local monitoring, streaming, or broadcast delivery can show. Out-of-range values therefore need to be clipped or compressed into the displayable range. Manual adjustment is possible, but tone mapping quickly compresses a broad luminance range into the selected signal range, and Gamut Compression quickly compresses a broader color range into that signal range.

Whether you use the default SDR image processing preset or an optional wide gamut image processing preset, tone mapping and Gamut Compression can accelerate the workflow in these ways:

- Input Tone Mapping and Input Gamut Compression happen during the first conversion from input to working color space, so image conversion occurs before imaging effects. This can make SDR workflows simpler, though highlight detail that has been compressed too much may be harder to recover. Because these operations are tied to clips, they can be adjusted clip by clip.
- Output Tone Mapping and Output Gamut Compression happen after all effects are processed, within output color space conversion. In wide-gamut workflows, this keeps Lumetri panel color adjustments at the highest quality and leaves source highlight and shadow detail recoverable. Since the operations are applied at output, each sequence can have only one setting, ensuring composited clips receive identical tone mapping.

Tip

Output Tone Mapping as set in the Wide Gamut (Tone Mapped) preset can slightly darken SDR media when it is converted into a wide gamut working color space. That is usually acceptable for camera-original SDR media that will be color adjusted anyway, because all color changes occur before output tone mapping and you are adjusting source levels. It can be an issue for previously graded mastered SDR media, which may now look different. The Wide Gamut (Minimal Tone Mapping) preset reduces the problem by applying tone mapping only to SDR clip highlights and also mapping highlights that fall outside the gamut.

Tone mapping and gamut conversion are optional and can be disabled whenever necessary. With them off, out-of-range highlights and shadows are clipped instead of compressed, and bright image areas may look harsh unless you manually adjust those levels.

Different tone mapping and gamut compression algorithms create slightly different results depending on the image's color and contrast range. Quality is subjective, and one algorithm may be preferable for particular media or preferences. The defaults are selected to produce generally good results across a wide range of media.

## Color Management and Lumetri Color

### Learn more about color space awareness and improved LUT application for refining color grading in Adobe Premiere.

### Lumetri Color space

In any sequence, the controls in the Lumetri Color panel behave in the familiar way even when you choose a different Color Management preset or working color space. That consistency keeps SDR-output grading and HDR-output grading feeling similar while you adjust color.

Lumetri Color panel changes still depend on the color space in which they were made. If you copy those adjustments from one sequence to another sequence that uses a different working color space, the appearance will change, which is expected. For that reason, keep a sequence's working color space fixed after you begin color work.

Tip

Premiere includes Lumetri Presets that were originally built around clips in a Rec.709 working color space. They remain suitable for clips in sequences using the Broadcast 709 (SDR) preset or the Rec.709 working color space. In other working color spaces, those same presets can produce a noticeably different look.

### Look LUT behavior across color spaces

In the Lumetri panel's Creative section, the Look drop-down menu now accounts for color space. A LUT is authored for image data that starts in a specific color space. For example, many look LUTs style Rec.709 images, such as giving them a film look, while other LUTs convert imagery from one color space to another. Because the default working color space is now wide gamut, you must identify the color space each LUT expects. The default LUTs shown in the Look drop-down were designed for Rec.709, so choose Rec.709 (scene) from the Color Space menu to display those LUTs correctly.

Pick a Look in the Lumetri Color panel that fits the clip's visual character. LUT processing follows the color space settings for the sequence.

Pick a Look in the Lumetri Color panel that fits the clip's visual character. LUT processing follows the color space settings for the sequence.

Caution

The preview thumbnail that illustrates the LUT result is not color-managed yet, so it can show an inaccurate preview. The rendered or monitored output is still correct.

## Color Management options

### Find Adobe Premiere Color Management options for improving video-editing color workflows.

The Premiere Color Management system includes the following configurable choices.

### Input color space settings

Premiere Color Management supports input color spaces for media stored in formats such as QuickTime, MXF, XAVC, R3D, MP4, CRM, and ARI.

Tip

Container formats such as QuickTime and MXF do not reliably carry enough color space metadata to describe vendor-specific camera color spaces. If you record directly to QuickTime, MXF, or MP4 in camera, useful metadata for Premiere's automatic color space assignment may or may not be present. A similar limitation can appear when software such as Adobe Media Encoder transcodes camera raw media into another format, because standardized metadata for automatic color space assignment in Premiere is not available in every case; manually tagging that media may be required.

### Supported RAW camera formats

Premiere Color Management also processes media from supported raw camera formats automatically. Camera raw files usually provide the most dependable metadata for color space information, making them one of the strongest choices for a color-managed workflow.

Supported formats include:

- Apple ProRes Raw
- ARRI
- Canon
- RED
- Sony

### Tone mapping options

Tone mapping changes the dynamic range of a video signal. In Premiere Color Management, highlight compression is used to convert wide gamut, extended, or high dynamic range (HDR) media into the narrower SDR (standard dynamic range) range while keeping the result perceptually close to the original.

Each tone mapping algorithm handles the conversion in its own way, especially with clips that contain extremely bright or highly saturated highlights. Hue Preservation is a strong general-purpose choice and offers the most flexibility through its adjustable knee. By Channel and Max RGB are available for cases where highlight color shifts or other visible highlight artifacts appear in sequence media.

Tone mapping can be applied as input tone mapping or output tone mapping, with the controls located in the Advanced area of the Color tab in Sequence Settings. Input tone mapping can vary by clip and happens before effects and color adjustments, so some highlight detail may be impossible to recover later if the result needs correction. Output tone mapping runs after effects and color work, but a single tone mapping algorithm is used for the entire sequence.

Note

To compare tone mapping algorithms quickly, go to the Settings tab in the Lumetri panel, open Sequence Controls, and expand Advanced. Changes made in Advanced Color Management controls appear immediately in the Program Monitor.

The available tone mapping algorithms are:

- Highlight Saturation: controls the amount of highlight saturation allowed in the tone-mapped image. The default is 0.5, which works well for many images. Reducing the value can create results similar to the By Channel algorithm.

- Highlight Saturation: adjusts how much saturation may remain in highlights after tone mapping. The default value is 0.5 and suits many images. Lower values can move the result toward the By Channel algorithm's behavior.
- Knee: sets the threshold below which highlight tone mapping leaves the image unchanged. Higher thresholds protect more of the picture, but the resulting tone mapping can look less gradual depending on the media.

- Highlight Saturation: sets the permitted saturation level in tone-mapped highlights. It defaults to 0.5, which is appropriate for many images. Decreasing it can resemble the output from the By Channel algorithm.

Choose an output tone mapping method to control highlight rendering in HDR color spaces.

Choose an output tone mapping method to control highlight rendering in HDR color spaces.

Tip

The tone mapping algorithm that gives you the best starting point for additional color correction is often not the one that looks most pleasing immediately. During grading, smooth movement between tonal levels matters, and saturation needs to remain adjustable without warping the image. As a result, media being converted with no later color adjustments may need different settings than media that is part of a full grading pass.

### Gamut Compression options

Like tone mapping, gamut compression fits a broader color range into a smaller gamut by compressing it so the converted image remains perceptually close to the original. If wide gamut source media does not contain saturated highlights, Gamut compression may not create a visible change. When wide gamut sources do include saturated highlights, combining gamut compression with tone mapping can substantially improve the automatic conversion of wide gamut, extended, or high dynamic range media into SDR's narrower dynamic range. These gamut compression settings leave SDR clips unchanged.

Available gamut compression choices:

- Luminance Preserving: the default choice keeps brighter colors brighter by desaturating them enough to fit inside the gamut.
- Saturation Preserving: this choice protects highly saturated colors by making them darker, which may reduce highlight brightness.

### Color space aware effects

Some Premiere effects can look different, or become easier or harder to tune, when one working color space is used instead of another. The change may be obvious for some effects and almost impossible to distinguish for others.

Note

Because color space aware effects can shift in appearance across working color spaces, choose the working color space for a sequence before adding effects and color adjustments. Changing it afterward may visibly alter effected media and require more adjustment work.

### Color Management options in the Project Settings

These project settings apply across every sequence in the project, although certain settings may be overridden when needed.

- Default graphics white: defines the white level used by generated text and graphics in HDR programs. A sequence can use settings that differ from the project. For SDR programs, the default is 100 nits.
- Enable Color Space Aware Effects: allows Premiere effects to behave correctly regardless of the selected working color space. When this is off, effects assume Rec.709, matching earlier Premiere behavior. Premiere turns this setting off for projects and sequences imported from older versions so their previous color appearance is preserved.

## Manage source media colors in the Program Monitor

### See how Program Monitor Color Management gives flexible control over source-media appearance.

For the most flexibility, Color Management is set up and applied at the sequence level. Clips therefore are not fully color-managed and tone-mapped until they are placed into a sequence. This makes it possible to keep several versions of a program in one project, each sequence using different color settings. It also means Source Monitor clip color handling needs its own setup based on what you want to judge while viewing source clips.

Manage source media colors by doing the following:

In the Source Monitor, the wrench menu's Monitor Color Management submenu offers three ways to display source media. The Source Monitor includes three choices for presenting that media.

The Source Monitor includes three choices for presenting source media.

The Source Monitor includes three choices for presenting source media.

Choose among these Source Monitor modes:

- Gang to Active Sequence Color Management: the default Source Monitor setting follows the Color Management currently used by the sequence displayed in the Program Monitor.
- Show Wide Gamut Media As Log: use this when you do not want a color-managed Source Monitor view and instead need to inspect how source media would appear on a generic Rec. 709 display. In this mode, wide gamut media is shown with a low-contrast, log-like appearance so the core values remain visible without clipping. Display Color Management still shows both the Source Monitor and Program Monitor according to the computer monitor's ICC profile. This mode is helpful when troubleshooting source media before Color Management is applied.
- Show Source in Extended Dynamic Range: when an HDR computer display is available and the Extended Dynamic Range Monitoring project setting is enabled, this setting shows wide gamut clips in an ungraded state with the highlight detail the display can present, using pleasingly bright highlights regardless of the program's Output Peak Luminance setting.
