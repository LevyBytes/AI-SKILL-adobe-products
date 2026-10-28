# Customize color presets for new or existing sequences

Set or change color setup presets for Adobe Premiere sequences according to workflow needs.

Before you begin

- When creating a new sequence, select File > Sequence > New. Then select the Color Management tab in the New Sequence dialog.
- For an existing sequence, select it, choose Sequence > Sequence Settings, and open the Color Management tab in the Sequence Settings dialog.
- For an open sequence, use the Lumetri Color panel's Settings tab and select the dropdown arrow icon beside Sequence.

Open Sequence Settings and choose from the available options, which can vary by media type:

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
