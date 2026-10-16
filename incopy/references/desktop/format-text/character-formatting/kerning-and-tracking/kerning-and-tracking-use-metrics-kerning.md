# Kerning and tracking — Use metrics kerning

Put the text cursor between a pair to kern, or select the text. Use the Character panel or Control panel to choose Metrics from the Kerning menu. In the Character panel or Control panel, choose Metrics or Metrics - Roman Only from the Kerning menu. Note

When Metrics is applied to fonts, including some Japanese OpenType fonts, that do not include pair-kerning information, each character's spacing is set to "0" and character compression does not occur.

For selected text, choose "0" in the Kerning menu to ignore the font's built-in kerning information.

Note

The default setting is Metrics - Roman Only. For Roman OpenType fonts, Metrics - Roman Only produces the same kerning as Metrics. For CJK OpenType fonts, Metrics - Roman Only kerns only Roman characters with kerning pairs as though Metrics were selected. CJK characters are not kerned, as though '0' were selected. For this reason, choose '0' to turn off pair kerning.

Note

When using font metrics kerning in a Japanese OpenType font, Adobe recommends choosing OpenType > Use Proportional Metrics from the Control panel menu. This helps avoid unnecessary manual kerning adjustments.
