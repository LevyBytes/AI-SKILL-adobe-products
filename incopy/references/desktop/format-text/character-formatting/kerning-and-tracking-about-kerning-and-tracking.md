# Kerning and tracking — About kerning and tracking

Kerning adds or removes space between selected character pairs. Tracking loosens or tightens spacing across a block of text.

Note

Kerning and tracking values affect Japanese text, although these controls are usually used to adjust aki between roman characters.

Types of kerning

Type can be kerned automatically with metrics kerning or optical kerning. Metrics kerning relies on kern pairs supplied by most fonts. Kern pairs describe spacing for particular letter pairs. Examples include LA, P., To, Tr, Ta, Tu, Te, Ty, Wa, WA, We, Wo, Ya, and Yo.

By default, InCopy applies metrics kerning so certain pairs are kerned automatically as text is typed or imported. Select "0" to turn off metrics kerning.

Optical kerning sets spacing between neighboring characters according to their shapes. Some fonts provide strong kern-pair definitions. If a font has little or no built-in kerning, or when different typefaces or sizes are used in one or more words on a line, optical kerning may be preferable.

Optical kerning adjusts spacing between neighboring characters by shape and is optimized for Roman glyphs. Some fonts provide strong kern-pair definitions. If a font has little or no built-in kerning, or when different typefaces or sizes are used in one or more words on a line, consider optical kerning for the document's Roman text.

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
