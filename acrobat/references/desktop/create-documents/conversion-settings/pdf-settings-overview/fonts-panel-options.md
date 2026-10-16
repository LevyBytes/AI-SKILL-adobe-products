# Fonts panel options

The Fonts options decide which fonts ride along inside a PDF and whether only a subset of the characters in use gets embedded. Embedding works for OpenType®, TrueType, and PostScript fonts. A lock icon marks any font carrying license restrictions. Selecting a license-restricted font causes the restriction's terms to appear in the Adobe PDF Options dialog box.

Note

If you merge PDF files sharing one font subset, Acrobat tries to consolidate those subsets.

Embed all fonts: Embeds every font the file uses. PDF/X compliance demands font embedding.

Embed OpenType fonts: Embeds each OpenType font the file uses and keeps its OpenType data for advanced line layout. This control surfaces only when either Acrobat 7 (PDF 1.6) or Acrobat 8 (PDF 1.7) is chosen from the Compatibility menu in the General panel.

Subset embedded fonts when percent of characters used is less than: Sets a threshold percentage when you want only part of the fonts embedded. Say the threshold is 35 — if under 35% of the characters appear, Distiller embeds just those characters.

When embedding fails: Dictates how Distiller reacts if no embeddable font turns up while a file is being processed.

Always Embed: To embed only particular fonts, shift them into the Always Embed list. Confirm that Embed all fonts is left off.

Never Embed: Drop any fonts you would rather not embed into this list. If you need to, switch to a different font folder via the pop-up menu so the font shows up in the font list.

Note

A lock icon flags fonts that carry license restrictions. Selecting one displays the nature of that restriction in the Adobe PDF Options dialog box.

Add Name: When the font you are after sits in no font folder, choose Add Name. Type the font's name, choose Always Embed list (or Never Embed list), and choose Add.

Note

A TrueType font may carry a flag set by its designer that blocks the font from being embedded in PDF files.

Remove: Takes a font off the Always Embed or Never Embed list. Doing so leaves the font on your system; it only drops the list's reference to it.

Note

Times, Helvetica, and ZapfDingbats are not bundled with Acrobat. To let PDF recipients view and print these fonts in the PDFs you produce, embed them.
