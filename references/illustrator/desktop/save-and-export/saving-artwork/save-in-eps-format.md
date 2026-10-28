# Save in EPS format

Note

The EPS file format was common historically, but it is not a good fit for current workflows.

Imported or placed encapsulated PostScript (EPS) files are accepted by nearly every page layout, word-processing, and graphics application. EPS keeps many graphic elements made in Adobe Illustrator, so EPS files can be opened again and edited as Illustrator files. Because EPS is built on the PostScript language, both vector graphics and bitmap graphics can be included. Multiple artboards are preserved when artwork is saved as EPS.

If transparency, including overprints, is present and high-resolution output is needed, choose Window > Flattener Preview to review flattening results.

Choose File > Save As or File > Save a Copy.

Enter a filename and choose where the file should be stored.

Choose Illustrator EPS (\*.EPS) as the file format, then choose Save.

To create an individual file for each artboard, choose Use Artboards. Then choose All, or choose Range and enter the artboard range. Illustrator produces separate EPS files plus one central EPS file that contains all artboards.

In the EPS Options dialog box, choose the settings you need, then choose OK:

Version

Sets the Illustrator version that the file must remain compatible with. Legacy formats cannot represent every feature available in the current Illustrator version. As a result, choosing any version other than the current one hides some save options and changes certain data types. Check the warnings at the bottom of the dialog box so you know which data will change.

Format

Sets the saved preview image characteristics. Applications that cannot display EPS artwork directly use this preview image. To avoid making a preview image, choose None from the Format menu. Otherwise, choose a black-and-white or color format.

If TIFF (8-bit Color) format is selected, choose a background option for the preview image:

Transparent

Creates a background with transparency.

Opaque

Creates a solid background. Choose Opaque when the EPS document is intended for Microsoft Office workflows.

Transparency options

Controls the treatment of transparent objects and overprints. Which options are available depends on the format version chosen at the top of the dialog box.

For a CS format, specify how overlapping colors set to overprint are saved, then choose a flattening preset or option set. Click Custom to adjust flattener settings.

For a Legacy format earlier than 8.0, Preserve Paths removes transparency effects and restores transparent artwork to 100% opacity with Normal blending mode. Preserve Appearance and Overprints keeps overprints that do not interact with transparent objects. Illustrator flattens overprints when they do interact with transparent objects.

Embed Fonts (For Other Applications)

Embeds all fonts whose font-vendor permissions allow embedding. With embedded fonts, the original font can display and print when the file is placed into another application, such as Adobe InDesign. If the file is opened in Illustrator on a computer without the font installed, however, the font is substituted or simulated. This restriction helps prevent unauthorized use of the embedded font.

Selecting the Embed Fonts option makes the saved file larger.

Include Linked Files

Places the artwork's linked files inside the saved file.

Include Document Thumbnails

Creates a thumbnail image of the artwork. Illustrator displays the thumbnail in the Open and Place dialog boxes.

Include CMYK PostScript In RGB Files

Lets applications without RGB output support print RGB color documents. When Illustrator reopens the EPS file, RGB colors are preserved.

Compatible Gradient And Gradient Mesh Printing

Converts gradient objects to JPEG format so older printers and PostScript devices can print gradients and gradient meshes. This setting can slow printing on printers that otherwise handle gradients without trouble.

Adobe PostScript

Sets the PostScript level used when saving the artwork. PostScript Language Level 2 handles color and grayscale vector and bitmap images; for both vector and bitmap graphics, it also supports RGB, CMYK, and CIE-based color models. PostScript Language Level 3 adds features beyond Language Level 2, including mesh-object printing on a PostScript 3 printer. Since PostScript Language Level 2 devices convert gradient mesh objects to bitmap images during printing, a PostScript 3 printer is preferred for artwork that contains gradient mesh objects.
