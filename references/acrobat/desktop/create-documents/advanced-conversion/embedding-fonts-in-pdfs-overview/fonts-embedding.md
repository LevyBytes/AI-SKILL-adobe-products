# Fonts embedding

Embedding a font means writing its font data into the PDF file so the very font from the original document is on hand whenever the PDF is viewed or printed. A font qualifies for embedding only when its vendor has flagged it as embeddable.

Embedding fonts heads off font substitution, so readers see the text in the font it was set in. It nudges the file size up a little, unless the document leans on CID fonts — the kind common to Asian languages. Embedding or substituting fonts is something you handle inside Adobe Acrobat, or as you export an InDesign file out to PDF.

Where fonts are concerned, embedding can be done in two ways:

- Embedding the whole font
- Embedding just a subset: only those characters the file actually uses

Subsetting hands your fonts and font metrics a custom font name at print time. That way your own copy of Adobe Garamond — not the one at your printing service provider — is always what gets viewed and printed.

Type 1 and TrueType fonts qualify for embedding when they ride along in the PostScript file or live in one of the font locations Distiller watches, and when they aren't barred from embedding.
