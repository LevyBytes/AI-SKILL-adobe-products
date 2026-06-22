# Share Pdf Settings, Distiller Fonts, Font Handling Distiller, Embed Fonts Distiller ...

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Share custom PDF settings; Acrobat Distiller fonts overview; Embedding fonts in PDFs overview; Embed fonts using Acrobat Distiller; Find font names in PDFs.

## Share custom PDF settings

### Learn how to share custom PDF presets for Acrobat Distiller.

With custom PDF settings you can produce PDFs that hit particular targets for quality, file size, and compatibility. Passing those settings around keeps things consistent whenever several people have to create PDFs to the exact same specifications.

Go to the folder that holds your custom PDF settings: Windows: C:\Users\[username]\AppData\Roaming\Adobe\Adobe PDF\Settings

macOS: Users/[username]/Library/Application Support/Adobe/Adobe PDF/Settings

Find and copy the .joboptions file holding your custom settings.

To pass it to others, attach the file to an email or post it to an online drive.

Note

Adding a custom PDF setting inside Acrobat Distiller goes like this: choose Settings > Add Adobe PDF Settings, navigate to the shared .joboptions file, pick it, and finish with Open.

## Acrobat Distiller fonts overview

### Get to know how Acrobat Distiller manages fonts so your PDFs stay high quality — searchable, good-looking, and editable.

Whatever fonts your PostScript file uses shape the result when Adobe Acrobat Distiller converts that file into a PDF document. Knowing how Acrobat Distiller treats fonts can lift the quality of your PDF output and keep its text searchable, editable, and printable.

### Font types

Depending on the operating system, Acrobat Distiller works with these font types:

- Type 1 (PostScript) fonts
- Type 3 fonts
- Bitmap and vector fonts (Windows only)
- TrueType fonts
- OpenType fonts from Adobe
- TrueType dFonts (macOS only)

### Character sets for Type 1 fonts

Across different languages and document types, Type 1 fonts back a range of character sets:

- ISO Latin 1: Standard English, French, Italian, and German alphabets, punctuation, and numbers
- Expert: Fraction and ligature characters for the English alphabet
- SC & OSF: Specially designed letters and numbers for document customization
- Symbol: Non-text special characters and symbols
- Cyrillic: Characters for languages like Russian and Ukrainian
- Kanji: Double-byte Japanese characters

### Font processing

As it converts a document to PDF, Acrobat Distiller looks up every font from the original through a handful of steps:

- Font Identification: To identify fonts, Distiller scans the font's name table for PostScript names. Where none exist, it falls back on the system name. With Type 42 fonts that lack name tables, Distiller builds one out of matching system fonts.
- Font Description: For Type 1 fonts that use ISO Latin 1 character sets, Distiller writes descriptions into the PDF. At viewing time, Acrobat draws on installed matching fonts or, guided by those descriptions, makes substitutes.
  - TrueType fonts with appropriate permissions
  - Type 3 fonts
  - Type 1 fonts not using ISO Latin 1
  - OpenType fonts in Distiller 7.0 with PDF 1.6 compatibility

Embedding fonts keeps viewing and printing consistent from one system to the next, even where the font is not installed. Editing the text, though, still requires the font to be present on the machine doing the editing.

- Font Permissions and Conversions: Distiller honors each font's embedding permissions. Fonts whose permissions are restricted can't be embedded and throw errors. When font information defies interpretation, Distiller either substitutes fonts or turns them into bitmap images, which takes a toll on searchability and editability.

### Font descriptors

With every font it embeds, Distiller records descriptors capturing traits such as:

- Ascent, Descent, and CapHeight: Vertical measurements of character dimensions
- FontBBox: Smallest rectangle containing all characters
- ItalicAngle: Angle of dominant vertical strokes
- StemV and StemH: Width of vertical and horizontal character stems
- Flags: Font attributes like serif, fixed-width, and italic.
- Optional information: Metrics like FontFamily, FontWeight, and Leading.

### Best practices for font handling

To get the best font quality and a usable PDF, give these best practices a try:

- Lean on Type 1 fonts where you can for the best conversion quality.
- Confirm that TrueType fonts carry proper installation and editing permissions.
- Set suitable font embedding options in Adobe PDF Settings.
- Add whatever language support packages non-Latin scripts call for.
- Get a feel for how printer driver settings sway font handling.
- Put important documents through testing so fonts render and behave correctly.
- Steer clear of Multiple Master fonts whenever the PDF text has to be editable.

### PostScript printer driver settings for TrueType fonts

Run TrueType fonts through Adobe PostScript printer drivers and they usually come out encoded as Type 42 or CID fonts carrying font-specific indices. That spawns font subsets inside the PostScript file, which trims file size but changes how the fonts are handled.

Note

To embed whole fonts when you print to Adobe PDF, switch on Do Not Send Fonts To Adobe PDF in the Font tab of the printer settings.

## Embedding fonts in PDFs overview

### See how embedding fonts in a PDF keeps it displaying and printing the right way no matter the system.

Your PDF documents owe their visual integrity to fonts. To keep documents looking the way they should from one device to the next, Adobe Acrobat Distiller provides a handful of approaches to fonts, embedding and substitution among them.

### Fonts embedding

Embedding a font means writing its font data into the PDF file so the very font from the original document is on hand whenever the PDF is viewed or printed. A font qualifies for embedding only when its vendor has flagged it as embeddable.

Embedding fonts heads off font substitution, so readers see the text in the font it was set in. It nudges the file size up a little, unless the document leans on CID fonts — the kind common to Asian languages. Embedding or substituting fonts is something you handle inside Adobe Acrobat, or as you export an InDesign file out to PDF.

Where fonts are concerned, embedding can be done in two ways:

- Embedding the whole font
- Embedding just a subset — only those characters the file actually uses

Subsetting hands your fonts and font metrics a custom font name at print time. That way your own copy of Adobe Garamond — not the one at your printing service provider — is always what gets viewed and printed.

Type 1 and TrueType fonts qualify for embedding when they ride along in the PostScript file or live in one of the font locations Distiller watches, and when they aren't barred from embedding.

### Font substitution

Should a font resist embedding because of its vendor's settings, and should whoever opens or prints a PDF lack the original font, Acrobat Distiller puts a stand-in in its place:

- Multiple Master typefaces stand in for the time being. AdobeSerifMM, for one, covers a missing serif font, while AdobeSansMM covers a missing sans serif font.
- These substitution fonts can stretch or condense to fit, holding the original document's line and page breaks in place.
- A substitution can't always echo the original characters' shape, all the more so with offbeat typefaces such as scripts.

For Asian text, Acrobat reaches for fonts from the installed Asian language kit or for lookalike fonts on the user's system. Fonts from certain languages or with unrecognized encodings can't be substituted; when that happens, the text shows up as bullets in the file.

Where characters are unconventional (left), the substitution font won't match (right).

Where characters are unconventional (left), the substitution font won't match (right). Note

When copying and pasting text out of a PDF gives you trouble, start by checking whether the offending font is embedded. Choose Document properties from the Menu (Windows) or File (macOS). Next, open the Fonts tab in the Document Properties dialog box. For a font that's embedded, try shifting where it gets embedded rather than sending it inside the PostScript file. Distill the PDF while leaving that font unembedded. Then open the PDF in Acrobat and embed the font through the Preflight fixup.

## Embed fonts using Acrobat Distiller

### Set up Acrobat Distiller so it embeds fonts into your PDFs.

Embedding fonts in PDFs keeps a document's look steady across different devices and systems. As it converts a PostScript file to PDF, Distiller has to reach the file’s fonts in order to write the right information into the PDF.

When a font isn't embedded, Acrobat Distiller lets you point to extra font locations so it can locate and embed fonts that the PostScript file doesn't reach directly. To embed fonts in your PDFs accurately, check which font types Acrobat Distiller supports.

Within Acrobat Distiller, head to Settings > Font Locations.

Once the dialog box appears, choose Add.

Pick the folder you'd like Distiller to scan for the font, then choose Open.

Want to leave out the TrueType editions of standard PostScript faces? Turn on Ignore TrueType versions of standard PostScript fonts.

Select OK.

## Find font names in PDFs

### How to discover which fonts a PDF relies on, using Adobe Acrobat.

Begin by opening the PDF inside Acrobat.

On Windows choose Menu > Document Properties > Fonts; on macOS choose File > Document Properties > Fonts.

Click the Fonts tab, where the document's font list is shown.

Document Properties is where you can read off the precise spelling of every font the current PDF relies on.

Document Properties is where you can read off the precise spelling of every font the current PDF relies on.

Record the font name precisely as displayed, matching its capitalization and any hyphenation.
