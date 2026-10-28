# Save in Illustrator format

When a document has multiple artboards and must be saved for an earlier Illustrator version, either save each artboard as its own file or combine all artboard content into one file.

Choose File > Save As or File > Save A Copy.

Enter a filename and choose where the file should be stored.

Select Illustrator (\*.AI) as the file format, then click Save.

In the Illustrator Options dialog box, choose the settings you need, then click OK:

Version

Sets the Illustrator version that the file must remain compatible with. See Save the artwork in a legacy version for more details.

Subset Embedded Fonts When Percent Of Characters Used Is Less Than

Controls when Illustrator embeds the full font instead of only the document's used characters, based on the percentage of characters used. For example, a font with 1,000 characters and a document using only 10 of them may make full embedding unnecessary because of the added file size.

Embed permitted fonts for file preview

Adds the document fonts that allow embedding so collaborators can preview the file without installing those fonts.

Create PDF Compatible File

Stores a PDF representation inside the Illustrator file. Choose this option when the Illustrator file needs compatibility with other Adobe apps. Fonts are embedded by this option, although not necessarily every permitted font.

Include Linked Files

Places the artwork's linked files inside the saved file.

Embed ICC Profiles

Builds the document with color management information included.

Use Compression

Reduces the PDF data stored in the Illustrator file. Because compression can make saving take longer, clear this option if saves become extremely slow, such as 8 to 15 minutes.

Save Each Artboard To A Separate File

Writes each artboard to an individual file and also creates a master file containing all artboards. Content touching an artboard is included in that artboard's file. If artwork must move so it fits on one artboard, Illustrator displays a warning. Without this option, artboards are merged into one document and converted to object guides and, in Illustrator CS3, crop areas. The saved file uses an artboard size based on the default document startup profile.

Transparency options

Controls how transparent objects are handled when the chosen Illustrator format version is earlier than 9.0. Preserve Paths removes transparency effects and restores transparent artwork to 100% opacity with Normal blending mode. Preserve Appearance And Overprints keeps overprints that do not interact with transparent objects. Illustrator flattens overprints when they do interact with transparent objects.

If the artwork contains complex overlapping regions and high-resolution output is required, click Cancel and set rasterization settings before proceeding.
