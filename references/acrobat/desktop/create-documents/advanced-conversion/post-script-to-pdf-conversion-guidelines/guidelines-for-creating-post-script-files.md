# Guidelines for creating PostScript files

Keep these best practices in mind as you ready PostScript files for PDF conversion in Adobe Acrobat Pro:

- Reach for PostScript Language Level 3 so the richest PostScript features are available to you.
- Set the Adobe PDF printer as the PostScript printer you print to, which keeps compatibility at its best through the conversion.
- On Windows, make sure every font the document relies on travels with the PostScript file so the text stays faithful.
- Give the PostScript file the same name as the source document, only with a .ps extension tacked on; certain applications turn out a .prn extension in its place.
- Stick with the color and custom page sizes from the Adobe Acrobat Distiller PPD file — lean on a different PPD and you risk wrong colors, fonts, or page sizes in the finished PDF.
- Ship PostScript files as 8-bit binary data whenever they move between machines, all the more so across unlike platforms; doing so heads off the trouble that comes when line feeds and carriage returns get swapped.
