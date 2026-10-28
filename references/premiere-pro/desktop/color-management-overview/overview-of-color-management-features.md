# Overview of Color Management features

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
