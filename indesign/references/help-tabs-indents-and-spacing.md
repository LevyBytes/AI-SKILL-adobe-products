# About Kerning And Tracking, Adjust Kerning, Adjust Tracking, Adjust Text Baseline ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About kerning and tracking; Adjust kerning between characters; Adjust text spacing with tracking; Adjust text baseline and vertical position; Adjust text spacing; Control glyph scaling; Highlight spacing issues; Set and repeat tabs; Edit and manage tab settings; Specify characters for decimal tabs; Set indents.

## About kerning and tracking

Character-spacing adjustments in Adobe InDesign help shape typography and control the visual rhythm of a layout.

Typography depends on spacing for readability and balance. In InDesign, kerning and tracking are the controls for that work. Kerning adjusts the space for particular letter pairs, such as LA, To, or Wa, to create a more even appearance. Tracking applies an even spacing change across a selected character range, making whole text blocks tighter or looser.

Note

Kerning and tracking values may also influence Japanese text. In practice, these controls are usually used for adjusting the aki (spacing) between Roman characters.

### Types of kerning

Text can be kerned automatically with Metrics kerning or Optical kerning.

### Metrics kerning

Metrics kerning reads kern pairs included in most fonts. Font designers define those spacing values for particular combinations, including LA, P., To, Tr, Ta, Tu, Te, Ty, Wa, WA, We, Wo, Ya, and Yo.

InDesign uses metrics kerning by default when text is typed or imported, so the predefined pairs are adjusted automatically. To turn metrics kerning off, set the kerning value to 0.

### Optical kerning

Optical kerning bases spacing on the shapes of neighboring characters instead of relying on font-supplied pair data.

This approach helps when a font contains few kern pairs or none, when one word mixes multiple typefaces, or when several font sizes share a line. Optical kerning is designed for Roman glyphs and can make spacing more consistent when font metrics are not enough.

### Manual kerning

Manual kerning lets you change the spacing between two chosen characters. Use it when exact letter-pair spacing matters, such as in headlines, logos, or display text. Manual kerning and tracking add together: you can tune individual letter pairs first, then tighten or loosen the broader text while keeping those pair-specific adjustments intact.

### Kerning vs. word spacing

Word kerning is different from the Word Spacing setting in the Justification dialog box.

- Word kerning affects only the value between the initial character of a word and the word space before it.
- Word spacing changes every space between words in justified text.

### How kerning and tracking are measured

InDesign expresses kerning and tracking in 1/1000 em units; the em follows the current character size.

Examples:

- In a 6-point font, 1 em = 6 points
- In a 10-point font, 1 em = 10 points

Since these values are size-dependent, kerning and tracking changes scale proportionally with the text. When the insertion point is between two characters, the Character and Control panels display the kerning value. If the kerning value is Metrics or Optical, it is shown in parentheses. When a word or text range is selected, the Character panel and Control panel show the tracking value so you can change spacing for that selection.

## Adjust kerning between characters

Adobe InDesign lets you control character spacing with metrics, optical, and manual kerning.

Kerning changes the space between selected character pairs to improve readability and visual balance. InDesign can apply metrics kerning automatically from font data, but you can switch to optical kerning for mixed fonts or sizes, or adjust spacing manually when you need precise control.

### Use metrics kerning

Place the text insertion between characters, or select text with the Type tool.

Open Type > Character.

From the Kerning icon menu, choose Metrics.

### Use optical kerning

Place the text insertion between characters, or select text with the Type tool.

Open Type > Character.

From the Kerning icon menu, choose Optical.

### Adjust kerning manually

Manual kerning works only when the insertion point sits between two characters. For selected text ranges, use tracking instead.

Place the text insertion between characters, or select text with the Type tool.

Open Type > Character.

In the Character dialog box, choose a numeric value in the Kerning field.

### Change the default kerning increment

Open Edit > Preferences > Units & Increments.

Open Keyboard Increments > Kerning/Tracking.

Enter a new Kerning/Tracking value.

Choose OK.

Note

Shortcut: Alt + Ctrl + Q (Windows) or Option + Command + Q (macOS) resets kerning and tracking. After that shortcut, kerning returns to Metrics even if another kerning option had been active.

## Adjust text spacing with tracking

In Adobe InDesign, tracking values tighten or loosen spacing across selected ranges of text.

Tracking applies one even spacing adjustment to selected text, making text blocks tighter or looser. Kerning differs because it affects individual letter pairs, while tracking changes all selected characters uniformly. Values use thousandths of an em (1/1000 em); positive values add space, and negative values reduce it.

Use the Type tool to highlight the text range to adjust.

In the Character or Control panel, locate Tracking.

Enter a number, or click the arrow buttons to adjust spacing in steps.

Tip

Shortcut: Alt + Ctrl + Q (Windows) or Option + Cmd + Q (macOS) resets tracking to zero.

## Adjust text baseline and vertical position

Adobe InDesign text can be moved vertically with baseline shift and first baseline offset controls.

For selected characters, baseline shift changes vertical placement without changing leading. For a text frame, first baseline offset determines where the opening line sits inside that frame.

Use baseline shift for inline refinements such as superscripts, and use first baseline offset when text must line up with grids or nearby layout objects.

### Adjust baseline shift for selected text

With the Type tool, highlight the characters that need vertical movement.

In the Character panel or Control panel, find the Baseline Shift field.

Type a positive value to move the text up, or use a negative value to move it down.

Press Enter (Windows) or Return (macOS).

### Set the first baseline offset in a text frame

With the Selection tool, choose the text frame.

Open Object > Text Frame Options.

In the Text Frame Options dialog box, open the Baseline Options tab.

In the Offset menu under First Baseline, choose from these options:

Ascent: sets the first baseline by the full height of lowercase d characters.

Cap Height: bases the offset on uppercase letter height.

Leading: takes the text's leading value as the offset.

x Height: bases the offset on the full height of lowercase x characters.

Fixed: uses a distance that you define.

When Fixed is selected, type a value in the Min field for the distance from the frame's top inset to the first line's baseline.

Select OK.

Note

For text frames that must align to a document baseline grid, choose Leading or Fixed for the first baseline offset option.

## Adjust text spacing

Adobe InDesign justification settings provide control over spacing in both justified and unjustified text.

Professional typography depends on balanced word spacing and letter spacing, because poor spacing can cause composition problems. In Adobe InDesign, justification controls adjust those spaces so paragraphs read more clearly and hold a steadier text color.

### Adjust word spacing

Word spacing determines the gap from one word to the next. Minimum and Maximum affect only justified text, while Desired affects every paragraph.

Put the pointer in the paragraph to adjust, or select a type object or frame if all of its paragraphs should change.

Open Type > Paragraph to display the Paragraph panel.

From the Paragraph panel menu, choose Justification.

In the Word Spacing section, fill in Minimum, Desired, and Maximum.

The allowed range is 0% to 1000%. The normal space width is 100%; by default, Minimum is 80%, Desired is 100%, and Maximum is 133%.

Select OK.

### Adjust letter spacing

Letter spacing changes the distance between letters, with any kerning or tracking values included. Negative values make the spacing tighter, and positive values open it up.

Place the pointer in the paragraph you need to change.

Open Type > Paragraph to show the Paragraph panel.

From the Paragraph panel menu, choose Justification.

In the Letter Spacing section, fill in Minimum, Desired, and Maximum.

Values can run from –100% to 500%; 0% means no added space, and 100% adds one full space width. Keep adjustments within ±3% to protect readability.

Select OK.

### Flush space for even line distribution

A flush space can stretch across the unused room on the final line of a fully justified paragraph, placed after the final word and before a decorative-font end-of-story character. In text that is not justified, it acts like an ordinary space; expansion happens only under justification.

Before you begin

Confirm that the paragraph is set to Justify All Lines by selecting it and checking the Paragraph panel or Control panel.

With the Type tool, click directly before the end-of-story character on the last line of the justified paragraph.

Choose Type > Insert White Space > Flush Space.

The inserted flush space takes up the leftover line width, spreading the text evenly from the left margin to the end-of-story position.

## Control glyph scaling

In Adobe InDesign, justified paragraphs can often be improved without visibly warping letterforms by using glyph scaling carefully.

Glyph scaling changes character width while composing justified lines, using slight expansion or compression to improve spacing. Apply it when justified text has uneven gaps, and keep the range narrow, about 97%–103%, so the letterforms do not look distorted.

You provide Minimum, Desired, and Maximum settings. InDesign then combines glyph scaling with word spacing and letter spacing as it composes each line.

Place an insertion point in one paragraph, or select the paragraphs to update.

Choose Window > Type & Tables > Paragraph.

From the panel menu icon, choose Justification.

In the Glyph Scaling section, change these values:

- Minimum: the smallest permitted width, commonly 97–99%.
- Desired: the target width, usually 100% when no scaling is preferred.
- Maximum: the largest permitted width, commonly 101–103%.

To preserve readability, keep glyph scaling no more than ±3% away from the default 100%. Values such as 97, 100, or 103 create small corrections without obvious distortion.

Select OK.

## Highlight spacing issues

Adobe InDesign can reveal text-spacing trouble through composition highlighting.

Based on the active justification settings, composition highlighting marks lines that have spacing problems; yellow shading communicates the degree of concern.

The highlight is visible only inside InDesign, affects all text, and is omitted from printing and export. Use it to find places that may need spacing changes or text edits.

Open Edit > Preferences > Composition (Windows) or InDesign > Preferences > Composition (macOS).

Under Highlight, enable H&J Violations.

Select OK.

After composition highlighting exposes spacing issues, refine justification or hyphenation from the Paragraph panel menu , change the text, or leave the composition as-is if it satisfies the layout standard.

### Highlight text containing custom kerning and tracking

InDesign uses green overlays to mark text that has custom kerning or tracking, so altered spacing is easy to identify.

Those marks are shown only in Layout view and are not included when the document prints or exports. Text is highlighted whenever its spacing values differ from the font's defaults.

Open Edit > Preferences > Composition (Windows) or InDesign > Preferences > Composition (macOS).

In the Highlight section, enable the Custom Tracking/Kerning checkbox.

Select OK.

- To clear custom spacing and return to defaults, select the highlighted text; in the Character panel or Control panel, change Kerning to Metrics and Tracking to 0.
- To hide every highlight temporarily without changing preferences, press W to enter Preview mode.

## Set and repeat tabs

Adobe InDesign tabs position text at defined horizontal points and can also create repeated tab patterns.

Tabs align text to specific horizontal positions within a frame, which helps build orderly columns and structured layouts. Creating a tab removes every default tab stop before that location. Use Layout View when you need to inspect the actual spacing produced by tabs.

### Set tabs for text alignment

Choose the Type tool and place an insertion point in the paragraph where tabs should be defined.

Press Tab at each spot where horizontal space is needed. You can also insert tabs after the tab settings are in place.

Open Type > Tabs to display the Tabs dialog box.

Select the paragraph or set of paragraphs that should receive the settings.

In the Tabs dialog box, choose a tab-alignment button: left, right, center, or decimal.

Click a position on the tab ruler to place the new tab.

Choose the desired alignment button and set the ruler position to add another tab.

For additional tabs, choose the desired alignment button again and set another ruler position. Tip

To change the tab value in 1 point increments, press the up arrow key or down arrow key while the X value is selected.

### Create repeated tabs at equal intervals

Place an insertion point in the paragraph.

In the Tabs dialog box, choose a tab stop on the ruler.

Choose Repeat Tab from the panel menu .

## Edit and manage tab settings

Adobe InDesign lets you move, remove, and change tab stops with precise control.

Use the Tabs dialog box when a paragraph's tab stops need movement, deletion, or a different alignment type. After you add a tab stop, InDesign clears the default tabs to its left so the custom tab positions determine spacing.

### Move a tab stop

With the Type tool, click anywhere in the paragraph.

Open Type > Tabs and then choose a tab stop on the ruler.

Put the new position in the X field, then confirm with Enter (Windows) or Return (macOS).

### Delete a tab stop

Place the insertion point in the paragraph that has the tab to be deleted.

Open Type > Tabs, choose the tab, open the panel menu icon, and choose Delete Tab. Choose Clear All to remove all custom tabs and restore default settings.

### Change tab alignment

Open Type > Tabs, then choose the tab stop to modify.

Choose one of the four tab-alignment icons for left, center, right, or decimal alignment.

## Specify characters for decimal tabs

In Adobe InDesign, the Align On box lets a decimal tab align text to a chosen character.

Decimal tabs are not limited to decimal points; they can line up text on any specified character, which is useful in columns that include currency symbols, colons, or other punctuation. When periods are all you need for decimal alignment, the default decimal tab requires no customization.

With the Type tool, select the paragraphs to align.

Open Type > Tabs.

In the Tabs panel, choose the Align to Decimal (or Other Specified Character) Tab button, then click the ruler to make a new tab.

In the Align On box, enter or paste the character for alignment.

Check that the paragraphs being aligned include the selected character.

Verify again that the paragraphs being aligned include the selected character.

Press Enter (Windows) or Return (macOS).

Tip

Typical alignment characters include dollar signs ($), colons (:), em dashes (—), and currency symbols (€, £, ¥).

## Set indents

Adobe InDesign paragraph indents control how text is inset and support hanging indents.

Indents shift text inward from a text frame's left or right edge. Set them from the Tabs dialog box, the Paragraph panel, or the Control panel.

For CJK text, mojikumi settings can control first-line indents. When both mojikumi and the Paragraph panel define indents, InDesign adds the values together.

### Set an indent using the Tabs dialog box

With the Type tool, choose the paragraph that needs an indent.

Choose Type > Tabs to open the Tabs dialog box.

Move only the top indent marker when just the first line should shift inward, or move the bottom marker when both markers and the whole paragraph should be indented together.

Tip

Another approach is to click the top marker and enter an X value for a first-line indent, or click the bottom marker and enter an X value for a paragraph-wide indent.

### Set indents using the Paragraph or Control panel

With the Type tool, choose the paragraph where the indent should change.

In the Paragraph panel or Control panel, enter a value in the Left Indent field when the full paragraph should move inward.

For a first-line-only indent, enter the desired value in the First Line Left Indent field.

### Create a hanging indent

With the Type tool, choose the paragraph you need to format.

For Left Indent in the Paragraph panel or Control panel, enter a positive value, such as 2p.

For First Line Left Indent, enter a negative value, such as -2p.

Note

For right-to-left text, or when the hanging indent belongs on the right side of the paragraph's final line, use the Right Indent and First Line Right Indent fields.

### Reset indents to zero

Choose the paragraph whose indents should return to zero.

In the Tabs dialog box, choose Reset Indents from the panel menu .
