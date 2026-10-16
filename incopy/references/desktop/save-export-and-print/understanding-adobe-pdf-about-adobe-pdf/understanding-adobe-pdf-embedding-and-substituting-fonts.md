# Understanding Adobe PDF — Embedding and substituting fonts

InCopy embeds a font only when the font vendor has included a setting that allows embedding. Embedding keeps a reader's system from substituting another font during viewing or printing, so the text appears in its original typeface. File size rises only a little, except when the document uses CID (multibyte) fonts, a font format often used for Asian languages in which several characters combine into one glyph.

For any font that is embedded, InCopy can include the full font or only a subset: the particular characters, called glyphs, that the file uses. Subsetting builds a custom font name so the correct fonts and font metrics are available at print time. The subsetting choices affect both disk usage and whether late-stage edits remain practical.

If InCopy is not able to embed a font, it temporarily uses a Multiple parent typeface in its place. For a missing serif font, InCopy uses AdobeSerMM; for a missing sans serif font, it uses AdobeSanMM.

To preserve the original document's line and page breaks, these replacement typefaces can stretch or condense as needed. Even so, the substitute may not reproduce the original character shapes exactly, particularly with unusual script-style characters.

If characters are unconventional (left), the substitution font cannot always match (right).
