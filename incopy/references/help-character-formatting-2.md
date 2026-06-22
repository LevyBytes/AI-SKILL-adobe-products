# Kerning Tracking, Leading

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Kerning and tracking — About kerning and tracking; Leading — About leading.

## Kerning and tracking — About kerning and tracking

Kerning adds or removes space between selected character pairs. Tracking loosens or tightens spacing across a block of text.

Note

Kerning and tracking values affect Japanese text, although these controls are usually used to adjust aki between roman characters.

Types of kerning

Type can be kerned automatically with metrics kerning or optical kerning. Metrics kerning relies on kern pairs supplied by most fonts. Kern pairs describe spacing for particular letter pairs. Examples include LA, P., To, Tr, Ta, Tu, Te, Ty, Wa, WA, We, Wo, Ya, and Yo.

By default, InCopy applies metrics kerning so certain pairs are kerned automatically as text is typed or imported. Select "0" to turn off metrics kerning.

Optical kerning sets spacing between neighboring characters according to their shapes. Some fonts provide strong kern-pair definitions. If a font has little or no built-in kerning, or when different typefaces or sizes are used in one or more words on a line, optical kerning may be preferable.

Optical kerning adjusts spacing between neighboring characters by shape and is optimized for Roman glyphs. Some fonts provide strong kern-pair definitions. If a font has little or no built-in kerning, or when different typefaces or sizes are used in one or more words on a line, consider optical kerning for the document's Roman text.

Before applying the optical kerning option to the "W" and "a" pair (top), and after (bottom)

Before applying the optical kerning option to the "W" and "a" pair (top), and after (bottom)

Manual kerning is also available, and it is useful for changing the spacing between two letters. Tracking and manual kerning add together, so you can adjust letter pairs first and then tighten or loosen a text block while preserving the relative kerning between those pairs.

Word kerning differs from the Word Spacing option in the Justification dialog box. Word kerning changes only the kerning value between a particular word's first character and the preceding word space.

Kerning and tracking

A. Original B. Kerning applied between "W" and "a" C. Tracking applied

Kerning and tracking

How kerning and tracking are measured

Kerning, tracking, or both can be applied to selected text. Both tracking and kerning are measured in 1/1000 em, a measure that scales with the current type size. A 6-point font has 1 em equal to 6 points, and a 10-point font has 1 em equal to 10 points. Kerning and tracking stay strictly proportional to the current type size.

Because tracking and manual kerning are cumulative, you can adjust individual letter pairs and then tighten or loosen a block of text without changing the relative kerning of those pairs.

When the insertion point is placed between two letters, InCopy reports the kerning value through both the Character panel and the Control panel. Parentheses identify metrics and optical kerning values, or defined kern pairs. Likewise, selecting a word or a text range makes InCopy show tracking values in the Character panel and Control panel.

### Kerning and tracking — Apply kerning to text

Kerning can be applied with either automatic method, metrics kerning or optical kerning, or by manually changing the space between letters.

### Kerning and tracking — Use metrics kerning

Put the text cursor between a pair to kern, or select the text. Use the Character panel or Control panel to choose Metrics from the Kerning menu. In the Character panel or Control panel, choose Metrics or Metrics - Roman Only from the Kerning menu. Note

When Metrics is applied to fonts, including some Japanese OpenType fonts, that do not include pair-kerning information, each character's spacing is set to "0" and character compression does not occur.

For selected text, choose "0" in the Kerning menu to ignore the font's built-in kerning information.

Note

The default setting is Metrics - Roman Only. For Roman OpenType fonts, Metrics - Roman Only produces the same kerning as Metrics. For CJK OpenType fonts, Metrics - Roman Only kerns only Roman characters with kerning pairs as though Metrics were selected. CJK characters are not kerned, as though '0' were selected. For this reason, choose '0' to turn off pair kerning.

Note

When using font metrics kerning in a Japanese OpenType font, Adobe recommends choosing OpenType > Use Proportional Metrics from the Control panel menu. This helps avoid unnecessary manual kerning adjustments.

### Kerning and tracking — Use optical kerning

Put the text cursor between the characters to pair kern, or select the text to kern. In the Character panel or Control panel, choose Optical from the Kerning menu. Note

Optical Kerning is based on Roman character forms. This feature can be used with CJK fonts, but always review the resulting spacing.

### Kerning and tracking — Adjust kerning manually

Place the insertion point between the two characters with the Type tool.

Note

When a text range is selected, manual kerning is unavailable; only Metrics, Optical, or 0 can be chosen. Use tracking for that kind of selection.

Note

When a text range is selected, manual kerning is unavailable; only Metrics, Metrics - Roman Only, Optical, or 0 can be chosen. Use tracking for that kind of selection.

Use one of these methods:

In the Character panel or Control panel, enter a number or choose one from the Kerning menu.

Shortcut: Alt+Left/Right Arrow (Windows) or Option+Left/Right Arrow (Mac OS). Use it to reduce or expand kerning between the two characters.

Word kerning changes by the amount shown as the Kerning value in the Units & Increments Preferences dialog box. If the shortcut is pressed while Ctrl or Command is held, the adjustment uses the Kerning preferences value multiplied by 5.

### Kerning and tracking — Change the default kerning increment value

Open the Units & Increments section in the Preferences dialog box, enter a replacement value for Kerning, and click OK.

### Kerning and tracking — Turn off kerning for selected text

Select the text. In the Character panel or Control panel, set the Kerning menu to 0 by typing or choosing it.

Alt+Ctrl+Q (Windows) or Option+Command+Q (Mac OS) also resets kerning and tracking. That reset changes kerning back to Metrics, no matter which kerning option was in use before.

### Kerning and tracking — Adjust tracking

Select the character range. In the Character panel or Control panel, enter or choose a numeric Tracking value.

### Kerning and tracking — Highlight text containing custom kerning and tracking

Custom tracking and kerning can be made visible when you need to spot where those adjustments exist. After the Custom Tracking/Kerning preference is enabled, InCopy marks text that uses custom tracking or kerning with green highlighting.

Open Edit > Preferences > Composition (Windows) or InCopy > Preferences > Composition (Mac OS). Enable Custom Tracking/Kerning, and click OK.

### Kerning and tracking — Adjust kerning between words

With the Type tool, select the text range, then use the appropriate shortcut:

To insert more space between the selected words, press Alt+Ctrl+\ (Windows) or Option+Command+\ (Mac OS).

Shortcut for tightening selected-word spacing: Alt+Ctrl+Backspace (Windows) or Option+Command+Delete (Mac OS).

Hold Shift while pressing the keyboard shortcut to multiply the kerning adjustment by 5.

### More like this

- Adjust aki before and after characters
- Keys for working with type

## Leading — About leading

This section covers leading as it works in Roman composition. For CJK leading details, see About leading in Asian text.

Leading is the vertical distance between type lines. It is measured from one line's baseline to the baseline of the line above. A baseline is the invisible line that most letters sit on, excluding letters with descenders.

Auto-leading defaults to 120% of the type size, such as 12-point leading applied to 10-point type. While auto-leading is active, InCopy shows the Leading menu value in parentheses in the Character panel.

Leading

A. Leading B. Text height C. Larger text size of one word increases leading for that one line.

Leading

### Leading — About leading in Asian text

Use Leading Basis Position in the Paragraph panel menu to choose the basis position for leading. With the default Embox Top/Right setting, InCopy measures line leading from the top of the current line's embox to the top of the next line's embox. If you select a line and increase its leading while using Embox Top/Right, the space below that line grows because the measurement runs from the current line toward the next line. Every other Leading Basis Position setting measures from the current line back to the previous line, so raising those values increases the line aki above the current line.

Leading consists of the embox height plus the line aki spacing.

Leading consists of the embox height plus the line aki spacing.

Set leading through Leading in the Character panel or Control panel. The default setting is Automatic. When Auto Leading is active, the Character panel displays the Leading value in parentheses. Automatic values differ between text frames and text in frame grids. Use the Justification menu item in the Paragraph panel to set the Automatic Leading value. In InCopy, the automatic leading default is 175% of the set font size for text in text frames and 100% for text in frame grids, which lets grid alignment spread the text lines within the grid.

When grid alignment is None, the Character panel's Leading value controls leading in the text frame. If grid alignment uses any setting other than None, the baseline grid settings determine how leading is applied.

Note

Text copied from a frame grid and pasted into a text frame keeps the frame grid attributes, so Leading is set to Automatic at 100%. If line spacing looks compressed, enter a Leading value instead of relying on the automatic setting.

For text in frame grids, set Leading with Line Gap in the Frame Grid Settings dialog box rather than with the leading value. The frame-grid leading value equals the Line Gap value plus the grid size, which is the font size. For example, when the grid size is 13Q and the line gap is 10H, the actual leading value is "23H".

For text placed in the frame grid, the default grid justification is Center. In that case, the distance from one grid center to the next grid center is the leading value. If grid justification is None, leading is applied from the location defined in the grid. When grid justification is set to None, the Leading value in the Character panel controls leading.

Leading inside a frame grid has several interacting parts. For placed text, the actual leading value varies with Font Size, Leading value, and Gyoudori settings in the Paragraph panel. Keep these points in mind:

If the frame grid font size stays unchanged, but the Character panel makes the placed text font size or leading value smaller than the grid size, the text aligns to the grid according to the Grid Justification settings.

If the frame grid font size, or grid size, stays unchanged but the Character panel makes the placed text font size larger than the grid size+line gap, gyoudori is determined automatically. When Gyoudori is Automatic, text can align to the grid in 0.5-line increments, such as 1.5, 2, 2.5, 3, and so on. When Gyoudori is anything other than Automatic, text aligns to the grid according to that setting, and large font sizes can cause characters to overlap.

If the frame grid font size, or grid size, remains unchanged while the Character panel sets placed text gyoudori to a value larger than the grid size+line gap, leading moves to the next line when Leading is Automatic. For example, with a 13Q frame grid size and a 10H line gap, Leading set to 24H places text on every other line. If it is set to 47H, text goes on every third line. For any Leading setting besides Automatic, InCopy ignores the value entered in Leading.

### Leading — Change leading

Leading is a character attribute by default, so different leading values can appear within one paragraph. For each line of type, the largest leading value on that line sets the line's leading. A preference can instead make leading apply to the whole paragraph rather than only to text inside the paragraph. Existing frames are not changed by that preference.

### Leading — Change leading of selected text

Select the text to modify. Then use any of these actions:

From either the Character panel or Control panel, open the Leading menu and choose the leading you want.

From the Character panel or the Control panel, use the Leading menu to pick the desired leading.

Select the current leading value, then type a replacement value.

When creating a paragraph style, set leading in the Basic Character Formats panel.

If InCopy does not honor a leading change, Vertical Justification or Align To Baseline Grid may be active. Choose Object > Text Frame Options and confirm that Vertical Justification is set to Top. Also select Do Not Align To Baseline Grid in one of these places: Paragraph panel, Control panel, or paragraph style.

Note

Vertical spacing can also be adjusted by aligning text to the baseline grid. Once a baseline grid is set, that grid setting overrides the leading value.

### Leading — Change the default leading percentage

Select the paragraphs to change. From the Paragraph panel menu or the Control panel menu, choose Justification. From the Paragraph panel menu, choose Roman Justification. Enter the new default percentage for Auto Leading. The allowed range starts at 0% and ends at 500%.

Note

In the Control panel menu, the Leading pop-up menu's Auto option stores Auto Leading in the Justification dialog box as a character-size ratio (%). The default is 175% for text frames and 100% for frame grids.

### Leading — Apply leading to whole paragraphs

Open Edit > Preferences > Type (Windows) or InCopy > Preferences > Type (Mac OS). Enable Apply Leading To Entire Paragraph, then click OK.

Note

When a character style applies leading to text, only the text using that style receives the leading. The whole paragraph is not affected, even if Apply Leading To Entire Paragraph is selected.

### Leading — Adjust line height based on character proportion

Changing text orientation in a frame grid to the opposite direction changes line height by default, regardless of grid size: horizontal text becomes vertical, and vertical text becomes horizontal. For example, with 13Q characters placed in a horizontal type 13Q frame grid, setting the character's vertical proportion to 200% doubles the line height to 26Q, regardless of grid size. If the feature is disabled, line height stays equal to character height and only the character proportion changes.

Select the text whose line height should respond to character proportion. Open the Character panel menu or Control panel menu, then choose Adjust Line Height With Character Scale.

The line height changes. The feature is a character attribute, so it is assigned per character, but the line height is applied to an entire line that contains those assigned characters.

To turn the feature off, select text where it is enabled, choose Adjust Line Height with Character Scale again, use either the Character panel menu or Control panel menu, and switch it off.

### Leading — Apply the leading basis position

When grid alignment is None, leading is applied by default from the top or right of the current line's embox to the top or right of the next line's embox. Raising the leading value applies the new value to every selected line.

Select the text. In the Paragraph panel menu or the Control panel menu, set Grid Alignment to None. Set Leading in the Character panel. Enter a value other than Automatic and set it to Static Value Leading. Open Leading Basis Position, using either the Paragraph panel menu or the Control panel menu, then choose the leading basis you need.

To keep leading even across font sizes, use Embox Center so leading is based on the center of the line.

Note

For frame grids, align lines with different font sizes to the grid line spacing by setting grid alignment to Center and setting Gyoudori to any value other than Automatic in the Paragraph panel.

### Leading — Leading Basis Position options

Open Leading Basis Position in the Paragraph panel menu or Control panel menu, then choose a leading basis.

Embox Top/Right

For horizontal type, leading uses the top of the embox; for vertical type, it uses the right side of the embox. The current line's top or right edge is compared with the next line's top or right edge. These are the default settings.

Embox Center

Leading uses the center point of the current line and the center point of the previous line. When one paragraph contains multiple font sizes, the gaps between the embox edges of each line can be irregular. Selecting Embox Center and applying fixed leading to text with differing font sizes lets surrounding line spacing align because the current embox center is used as the basis.

Roman Baseline

Leading is based on the Roman Baseline and is measured from the current line's baseline to the previous line's baseline. This is the same method used by the Roman composer. Each font has its own Roman Baseline, so character position can vary between fonts even when the font size is the same.

Embox Bottom/Left

For horizontal type, leading uses the bottom of the embox; for vertical type, it uses the left side of the embox. The current line's left or bottom edge is compared with the previous line's left or bottom edge.

Note

Grid Alignment contains the same item in both the Paragraph panel menu and the Control panel menu. Those items define bases for aligning to the grid, not bases for leading, so keep the two purposes separate.

### More like this

- Align paragraphs to a baseline grid
