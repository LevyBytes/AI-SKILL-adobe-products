# Configuring Sequence Color Management, Color Management Using Clip Modify, Customize Color Setup Presets For New Or Existing Sequences, Configure Sequence Output Color Space ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Configure sequence Color Management; Configure clips for Color Management using Clip Modify; Customize color presets for new or existing sequences; Configure sequence’s output color space; Disable Color Management; Premiere and After Effects Color Management compatibility; Tone mapping in Premiere.

## Configure sequence Color Management

### Configure Premiere sequence color settings with SDR and HDR presets for color workflows and output formats.

Color settings are defined per sequence so Color Management can be tailored to the deliverable. Different sequences can use different Color Management settings for different outputs. For instance, you can duplicate a color-adjusted sequence and change the duplicate's Output Color Space to create another deliverable. A common workflow is to grade an HDR program, duplicate the sequence, and set the duplicate output color space to Rec.709 for a down-converted version.

New sequences use the Broadcast 709 (SDR) color setup preset by default, and Output Color Space starts as Rec.709. If your workflow needs another setup, presets are the fastest way to change a sequence's Color Management configuration.

Use this workflow to change a color setup preset for either a new sequence or an existing one:

Begin from the appropriate sequence state:

- For a new sequence, use the New Sequence dialog's Color tab.
- For an existing sequence, select the sequence, choose Sequence > Sequence Settings, and open the Color tab of the New Sequence dialog.

In Color setup, choose one of these presets:

- Direct 709 (SDR): the default preset is mainly for SDR workflows that use a Rec.709 SDR working color space and output to Rec.709. SDR media is passed through, while input processing tone-maps and gamut-compresses wide-gamut camera raw sources and log-encoded sources.
- Direct HDR (HLG): this broadcast-oriented preset uses a Rec.2020 HDR (HLG) working color space and outputs to Rec.2020 HDR (HLG). HLG media passes through, while other wide gamut media receives input tone mapping and gamut compression.
- Direct PQ (HDR): this broadcast-oriented preset uses a Rec.2020 HDR (PQ) working color space and outputs to Rec.2020 HDR (PQ). HDR PQ media passes through, while other wide gamut media receives input tone mapping and gamut compression.
- Wide Gamut (Tone Mapped): this wide gamut working space keeps the most image data available for SDR sources, HDR sources, and wide gamut camera raw or log-encoded sources during import. It is well suited to creative grading.
- Wide Gamut (Minimal Tone Mapping): this preset converts SDR and wide gamut media into a shared high-quality working space. Its output tone mapping preserves shadows, mid-tones, and low highlights for both SDR and wide gamut media while tone mapping upper highlights.
- Wide Gamut (No Tone Mapping): this preset performs a direct conversion from SDR and wide gamut media into a shared high-quality working space without tone mapping or gamut compression changing highlights. Video signal values above Output Peak Luminance are clipped.
- Disable Color Management: this turns off automatic conversion from input to working color space and from working to output color space, leaving LUTs and color adjustment effects to handle the workflow manually.

The Color setup menu determines how Color Management is applied in the sequence.

The Color setup menu determines how Color Management is applied in the sequence.

After you select a preset, Premiere automatically applies that preset's default Output Color Space. You can still adjust it here for the monitor or delivery workflow.

Confirm with OK.

Advanced controls for a custom Color Management workflow - Most projects are covered by the available Color Management options. For workflows with specific requirements, these settings let you customize Color Management for an individual sequence.

Note

Output tone mapping in the Wide Gamut (Tone Mapped) preset can slightly darken SDR media as that media is converted into a wide gamut working color space. For camera-original SDR footage that will be color-adjusted anyway, this generally is not an issue because every color adjustment occurs before output tone mapping, meaning you still adjust the source levels. Mastered SDR media that was already graded can be more problematic because it may now appear different. The Wide Gamut (Minimal Tone Mapping) preset can reduce the issue by applying tone mapping only to SDR clip highlights, with the additional advantage of handling out-of-gamut highlights.

## Configure clips for Color Management using Clip Modify

### Configure clips with Clip Modify so each clip is correctly identified and color graded.

Note

Color Management depends on each clip in the program having the correct color space identification. Premiere usually reads available clip color space metadata automatically. When that does not happen, the clip may have no metadata, wrong metadata, or metadata Premiere cannot read. In those cases, choose the clip's color space manually.

### Correctly indentify clips on import

For import-time clip identification, open the source clip settings:

- In the Lumetri panel's Settings tab, use the Source Clip controls, or select multiple clips in the Project Browser and choose Clip Modify > Color.
- In the Lumetri panel, open the Settings tab and use the Source Clip disclosure triangle to show the Source Clip controls.

Open the Source Clip controls to identify and color grade the clip accurately.

Open the Source Clip controls to identify and color grade the clip accurately.

Turn on Preserve RGB when you need to stop Color Management from automatically converting that clip into the working color space in every sequence of the project where the clip is used.

Use the Input LUT menu to choose or import a LUT that converts the clip's color space into the working color space currently configured.

Tip

If Premiere detects the wrong color space and the source media is a camera raw clip, use the Color Space dropdown menu in Source Settings for that clip instead. You can find it in the Source tab of the Effect Controls panel and choose the color space to convert the clip to.

### Convert a clip to a known color space

Use an input LUT when a clip should first be converted to a known color space and then automatically converted to the working color space:

The Source Clip settings are available from either path:

- In the Lumetri Color panel's Settings tab, open the Source Clip controls, or choose Clip Modify > Color.
- In the Lumetri Color panel, open the Settings tab and select the Source Clip disclosure triangle to display the Source Clip controls.

Open the Source Clip controls to identify and color grade the clip accurately.

Open the Source Clip controls to identify and color grade the clip accurately.

Use the Input LUT menu to choose or import a LUT that converts the clip's color space into a known color space. This is useful with newly introduced media formats when no known LUTs exist for conversion to your working color space.

Choose the Media Color Space menu entry that matches the selected LUT's intended output color space.

Premiere Color Management takes the LUT-converted result and, using the selected input color space, converts it into the working color space.

## Customize color presets for new or existing sequences

### Set or change color setup presets for Adobe Premiere sequences according to workflow needs.

Before you begin

- When creating a new sequence, select File > Sequence > New. Then select the Color Management tab in the New Sequence dialog.
- For an existing sequence, select it, choose Sequence > Sequence Settings, and open the Color Management tab in the Sequence Settings dialog.
- For an open sequence, use the Lumetri Color panel's Settings tab and select the dropdown arrow icon beside Sequence.

Open Sequence Settings and choose from the available options, which can vary by media type:

Use Advanced settings in the Color Management tab to control sequence color behavior manually.

Use Advanced settings in the Color Management tab to control sequence color behavior manually.

- Rec.709: a narrow gamut SDR working space for SDR-to-SDR workflows where most source media is Rec.709. Use Input Tone Mapping when wider-gamut source media should be converted automatically.
- Rec.2100 (PQ): an HDR standard based on the Rec.2020 gamut. It is useful for HDR-to-HDR workflows that use previously graded ST.2084 media.
- Rec.2100 (HLG): an HDR standard based on the Rec.2020 gamut. Use it for HDR-to-HDR workflows with HLG media that was captured or graded earlier.
- ACEScct: this wide gamut working space keeps the most image data available when importing wide gamut camera raw sources, log-encoded HDR sources, and SDR sources while using Output Tone Mapping. It is strong for creative grading.

- Input Tone Mapping: when enabled, this compresses image tonality from the source clip's color space into the working color space, converting wide gamut clips to SDR before effects and color adjustments are applied. It is mainly useful with the Broadcast 709 (SDR) preset, where the working color space is Rec.709. Mixed Media presets leave it off by default because they use ACEScct as the working color space and rely on Output Tone Mapping instead.
- Input Gamut Compression: this helps Premiere avoid color clipping by moving colors that fall outside the gamut from wide-latitude source camera media into the working color space. Raw camera formats often use very large color spaces, so input gamut compression can improve image quality with either Rec.709 or ACEScct working color spaces.
- Output Tone Mapping: when enabled, this compresses image tonality from the working color space into the output color space, converting wide gamut clips to SDR automatically. Most effects and all grading are processed before output tone mapping for the best image quality.
- Output Gamut Compression: when enabled, this compresses image color from the working color space into the output color space so highly saturated bright highlights are not distorted after wide gamut-to-SDR conversion. Most effects and all grading occur before output gamut compression for the best image quality.
- Graphics White Override: primarily for HDR output, this lets you choose the nit level (cd/m2) at which graphics white appears. It can override the project setting when one sequence needs a different graphics white level from another. For sequences using an SDR output color space, graphics white remains 100 nits.
- Color Space Aware Effects: on by default unless an older project or sequence is imported. This setting controls whether Premiere uses newer color space aware effects, including Lumetri, that were designed for the newer Color Management system, or older effects that work only in Rec.709. A project setting controls sequences set to Same as Project, but this sequence-level control can override the project setting.

When you finish, the Color Setup menu displays Custom to show that a custom setting has been created. Select OK in the New Sequence or Sequence Settings tab, or return to the Edit tab of the Lumetri panel.

## Configure sequence’s output color space

### Configure a sequence's output color space for accurate monitoring, rendering, and Adobe Premiere Color Management standards.

For a sequence, the output color space specifies the color space used for monitoring through the Program Monitor, internal video scopes, or Transmit, and also for rendering. Each program has its own delivery target, which may be required by a client, streaming service, distribution company, or broadcast organization. Color Management helps satisfy those requirements when HDR and SDR deliverables are both common.

When an external display is connected through a Transmit-compatible video output interface, set that display to match the sequence's output color space as a best practice.

The working color space should stay unchanged after visual effects and color adjustments have started, but the output color space can be changed whenever needed.

### Customize output color space

Start from the matching sequence context:

- In the New Sequence or Sequence Settings dialog boxes, open the Color Management tab, then use the Advance dropdown arrow icon.
- For open sequences, use the Lumetri Color panel's Settings tab and open the Sequence dropdown arrow icon.

From the Output Color Space menu, choose the output color space you want. Available choices:

- Rec.709
- Rec.2020
- Rec.2100 (PQ)
- Rec.2100 (HLG)

Confirm with OK in the New Sequence or Sequence Settings tab, or return to the Lumetri Color panel's Edit tab.

## Disable Color Management

### Disable Color Management in Adobe Premiere when you need to preserve the media's original color properties.

Select the sequence where Disable Color Management should be used.

Select Window > Lumetri Color.

Open Settings in the Lumetri Color panel, then choose Sequence settings.

In the Color Setup drop down menu, choose Disable Color Management.

Turning off color management keeps the media's original color properties from being changed automatically.

Turning off color management keeps the media's original color properties from being changed automatically.

This turns off both automatic input-to-working color space conversion and automatic working-to-output color space conversion.

With this setting, Premiere treats all media as Rec.709 so behavior matches the period before color management was added. This is useful in two situations:

- When using Premiere for a full pass-through workflow in which imported and exported media should keep its color space unchanged.
- When using a fully manual workflow with input LUTs to transform clips into the working color space, then applying manual color correction with Lumetri or other effects in a traditional display-referred workflow.

## Premiere and After Effects Color Management compatibility

### Understand improved Color Management and Premiere interoperability with After Effects for consistent project color handling.

Alert

After Effects does not match Premiere's HDR monitoring capabilities. As After Effects HDR monitoring improves, SDR workflows show notable consistency between the two applications. In HDR workflows, a Dynamic Link After Effects composition that round-trips can appear as expected in Premiere while looking different in After Effects.

Premiere's newer Color Management gives sequence clips smoother interoperability and more consistent color when they round-trip to After Effects through Replace with After Effects composition.

Keep these points in mind while working:

- Premiere and After Effects interoperability supports every media format supported by Premiere, except some still formats such as PNG, TIFF, EXR, and JPEG where color consistency may not match to the same degree, and it works with every available sequence working color space.
- Override Media Color Space and Preserve RGB settings used in the Premiere sequence are passed to the After Effects composition.
- A LUT applied to a clip in Premiere through Lumetri is passed to the After Effects composition. A LUT applied through Modify > Color is not passed to the After Effects composition.
- Input Tone Mapping or Input Gamut Compression applied to a clip in Premiere is passed to the After Effects composition. Output Tone Mapping or Output Gamut Compression applied to a clip in Premiere is not passed to the After Effects composition.
- Graphics, color matte, and shapes added in the Premiere timeline are not color-consistent after clips round-trip between Premiere and After Effects.
- If After Effects is open with project color settings that differ from the Premiere sequence, then using Replace with After Effects Composition may or may not produce consistent clip color. The outcome depends on the Premiere sequence color space and the project settings in the currently open After Effects project; if they differ, a warning appears.

Note

Premiere uses sequence-based color settings, while changing color settings in After Effects affects the whole project.

- Color consistency has also been improved for outputs sent from After Effects to Adobe Media Encoder for rendering.

## Tone mapping in Premiere

### Understand Adobe Premiere tone mapping in HDR-to-SDR workflows.

Automatic tone mapping simplifies sequences that mix footage types and color spaces. In Rec. 709 (Standard Dynamic Range) sequences, you can combine camera media such as Log footage, iPhone HLG, and other HDR formats while keeping color consistent. Automatic tone mapping also removes the risk of clipped highlights.

Premiere adjusts wide color gamuts automatically so they display correctly in the sequence without blown-out highlights. Tone mapping is enabled by default, allowing iPhone or HDR footage to display properly.

A standard sequence can make HDR footage, including iPhone HLG video, appear blown out.

In standard sequences, iPhone HLG and similar HDR footage can look blown out.

Tone mapping supports HDR video such as iPhone HLG along with other HLG and PQ formats. It also works with log video; Sony S-Log, Canon C-Log, and Panasonic V-Log are supported examples.

The automatic tone mapping process remaps HDR color values so they appear consistently inside the narrow Rec. 709 color space.

The automatic tone mapping process remaps HDR color values so they appear consistently inside the narrow Rec. 709 color space.
