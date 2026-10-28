# Font processing

As it converts a document to PDF, Acrobat Distiller looks up every font from the original through a handful of steps:

- Font Identification: To identify fonts, Distiller scans the font's name table for PostScript names. Where none exist, it falls back on the system name. With Type 42 fonts that lack name tables, Distiller builds one out of matching system fonts.
- Font Description: For Type 1 fonts that use ISO Latin 1 character sets, Distiller writes descriptions into the PDF. At viewing time, Acrobat draws on installed matching fonts or, guided by those descriptions, makes substitutes.
  - TrueType fonts with appropriate permissions
  - Type 3 fonts
  - Type 1 fonts not using ISO Latin 1
  - OpenType fonts in Distiller 7.0 with PDF 1.6 compatibility

Embedding fonts keeps viewing and printing consistent from one system to the next, even where the font is not installed. Editing the text, though, still requires the font to be present on the machine doing the editing.

- Font Permissions and Conversions: Distiller honors each font's embedding permissions. Fonts whose permissions are restricted can't be embedded and throw errors. When font information defies interpretation, Distiller either substitutes fonts or turns them into bitmap images, which takes a toll on searchability and editability.
