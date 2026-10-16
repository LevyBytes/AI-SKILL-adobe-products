# Color Management and sequences

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
