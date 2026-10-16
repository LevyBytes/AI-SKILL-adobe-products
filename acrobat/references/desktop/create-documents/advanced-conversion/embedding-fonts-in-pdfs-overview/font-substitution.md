# Font substitution

Should a font resist embedding because of its vendor's settings, and should whoever opens or prints a PDF lack the original font, Acrobat Distiller puts a stand-in in its place:

- Multiple Master typefaces stand in for the time being. AdobeSerifMM, for one, covers a missing serif font, while AdobeSansMM covers a missing sans serif font.
- These substitution fonts can stretch or condense to fit, holding the original document's line and page breaks in place.
- A substitution can't always echo the original characters' shape, all the more so with offbeat typefaces such as scripts.

For Asian text, Acrobat reaches for fonts from the installed Asian language kit or for lookalike fonts on the user's system. Fonts from certain languages or with unrecognized encodings can't be substituted; when that happens, the text shows up as bullets in the file.

Where characters are unconventional (left), the substitution font won't match (right).

Where characters are unconventional (left), the substitution font won't match (right). Note

When copying and pasting text out of a PDF gives you trouble, start by checking whether the offending font is embedded. Choose Document properties from the Menu (Windows) or File (macOS). Next, open the Fonts tab in the Document Properties dialog box. For a font that's embedded, try shifting where it gets embedded rather than sending it inside the PostScript file. Distill the PDF while leaving that font unembedded. Then open the PDF in Acrobat and embed the font through the Preflight fixup.
