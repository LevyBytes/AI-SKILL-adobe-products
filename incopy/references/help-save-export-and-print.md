# Saving Exporting, Exporting Pdf, Pdf, Printing Stories

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Saving and exporting — Save documents; Exporting to Adobe PDF — Export an InCopy document to Adobe PDF; Understanding Adobe PDF — About Adobe PDF; Printing stories — Print the Galley or Story view.

## Saving and exporting — Save documents

Use one of these commands:

For an existing document that should keep its current name, choose File > Save Content.

For a new document name, choose File > Save Content As, provide the location and filename, and click Save. The document saved under the new name becomes active.

To create a story or graphic copy with a new document name, choose File > Save Content Copy, provide the location and filename, and click Save. The copy that is saved is not made the active document.

To save a document copy as a template, choose File > Save Content As. Provide the location and filename, then select InCopy Template from Save As Type (Windows) or Format (Mac OS).

For every story in the document, choose File > Save All Content.

To save a document copy in a text format, choose File > Save Content As. Provide the location and filename. Then select Save As Type (Windows) or Format (Mac OS), and choose Text Only or Rich Text Format.

Note

Saving a managed (linked) document leaves the link in the InDesign file unchanged. To update the story on the file system, use the process described by your workflow system documentation or contact your system administrator.

### Saving and exporting — Include previews in saved documents

Document and template thumbnail previews make files easier to identify in Adobe Bridge and Adobe Mini Bridge. Saving a document or template creates the preview. For documents, only the first spread is saved as a JPEG preview; for templates, each template page is saved as a JPEG image. Preview size and page count can be adjusted. For example, Extra Large 1024x1024 helps you inspect a page at high resolution before opening the file.

The option can be turned on in Preferences or from Save As. Because previews add to file size and save time, you may prefer to enable them only when needed through the Save As dialog box.

Use one of these routes:

To include a preview whenever a document is saved, open Edit > Preferences > File Handling (Windows) or InCopy  > Preferences > File Handling (Mac OS), then configure preview settings.

For a specific document, choose File >Save As.

For a specific document, choose File > Save Content As.

Enable Always Save Preview Images With Documents. When setting previews in the Preferences dialog box, set the preview page count with Pages and choose a Preview Size menu option. Note

Choosing the preview option in Save As also enables that option in Preferences and uses the default Pages and Preview Size settings.

### Saving and exporting — InCopy file types

Several file types can be used in InCopy.

InCopy content files (.icml)

InDesign exports stories or graphics to this default type, and InCopy uses it when saving or creating new documents. In Export or Save As, it is shown as InCopy Document.

InCopy CS3 Interchange files (.incx)

A legacy format for InCopy CS3 and earlier.

Assignment files (.icma)

These files contain a subset of an InDesign document. They show content and styles plus page geometry from the parent InDesign file. Visual fidelity can vary by assignment file: wireframe, assigned spreads, or all spreads. The InDesign user selects those settings while creating the assignment file. Assignment files can be created only by InDesign users and opened only by InCopy users.

Legacy .inca files were used for InCopy CS3 assignments.

Assignment package files (.icap)

InDesign compresses assignment files for distribution into these package files. Each package contains the assignment file, the assigned story files, and linked images.

Legacy .incp files were used for InCopy CS3 assignment packages.

Template files (.icmt)

Templates are starting points for stand-alone documents. They can be prepared with preset styles (paragraph and character), XML tags, swatches, pretagged sample content, page size dimensions, text area dimensions, and so on. They open as “Untitled” documents. Content and styles are visible; page geometry is not, meaning layout information from an InDesign document is absent. In Save As, this type appears as InCopy Template.

InDesign files (.indd)

InCopy displays these files with full fidelity to the InDesign document, including content, styles, and the layout of all page items. InCopy users may edit only the content items made available by InDesign users. Other page items are visible but cannot be edited.

Note

Several text-file types, including Microsoft Word, RTF, and TXT, can be opened directly in InCopy. When opened this way, import options for that file type appear.

### Saving and exporting — Export InCopy documents

All or selected parts of an InCopy document can be saved to another format. Usually, each component in an InCopy document, such as text frames or graphics, exports as its own file. The exception is Adobe PDF export, which places all document text and graphics into one PDF file.

Use one of these actions:

Click inside text with the Type tool to export text.

Click a graphic with the Position tool to export a graphic.

Choose File > Export. Enter a name and location for the exported content, then choose a format under Save As Type.

XML appears in the format list only after XML tags have been added to the document. When exporting text, if your word-processing application is not listed, export to a format that application can import, such as Rich Text Format. If none of the InCopy export formats are supported by that word-processing application, choose Text Only (ASCII).

Note

ASCII export removes all character attributes from the text. To preserve formatting, use the InCopy Tagged Text export filter.

Finish with Save to export the content in the selected format.

### Saving and exporting — Rename InCopy stories

When InDesign exports a story, the resulting document filename uses the .icml extension. InCopy uses that filename automatically as the story name shown in the Assignments panel in InDesign and in the story separator bar. The story name is stored inside the file, unlike the filename.

To rename a story by hand, open the story file in InCopy. Choose File > Content File Info. Confirm that the Description tab is selected, then enter a new value for Document Title. Note

Your workflow system may require an administrator to change the story name. If these steps do not let you rename it, ask your workflow administrator.

The story name can also be changed in the Assignments panel while the story is checked out. The filename on disk does not change.

### Saving and exporting — Export content to Buzzword

Buzzword is a web-based text editor for creating and storing text files on a web server. Exporting a story to Buzzword creates a text file on the Buzzword server.

Select the text, or put the insertion point in a text frame that belongs to the story for export.

Use the command for your application:

In InDesign, use File > Export For > Buzzword.

In InCopy, use File > Export to Buzzword.

If CS Live is not already signed in, click Sign In, enter your e-mail address and password, and click Sign In.

In the Export Story For Buzzword dialog box, enter the name for the Buzzword document to create, then click OK.

Acrobat.com opens the Buzzword document. From there, move the document to another workspace and share it with others.

### More like this

- Save changes (InCopy)
- Place (import) text
- Import Buzzword documents

## Exporting to Adobe PDF — Export an InCopy document to Adobe PDF

InCopy documents can be exported directly as Adobe PDF. Export is available from Galley, Story, or Layout view. Layout view produces a PDF that keeps layout and design elements. Galley or Story view instead produces output similar to the text-focused display shown in those InCopy views. A Galley or Story PDF can be useful for writers, editors, or other reviewers who do not have InCopy installed. It preserves the advantages of InCopy Galley and Story views, including strong text readability and annotation features.

Note

For Adobe PDF files exported from Adobe InDesign® documents with overprints or transparency effects, use Acrobat 6.0 or later and turn on Overprint Preview for best viewing.

Start with File > Export. Set Save As Type (Windows) or Format (Mac OS) to Adobe PDF. Enter a file name, pick a file location, and click Save. From the View menu, choose Galley & Story or Layout. Adjust settings as needed.

The chosen settings are stored with the application and apply to each new InCopy document exported to PDF until different settings are chosen.

Click Export. Note

During PDF export, InCopy preserves image links carried in Open Prepress Interface (OPI) comments in the InDesign document. These OPI links let the InDesign user place quick low-resolution image versions, or proxies, on a page. At final output, InDesign or a prepress service provider can automatically swap those proxies for high-resolution versions.

### Exporting to Adobe PDF — Common Adobe PDF options

Several options are shared by Galley, Story, and Layout view PDF export.

Compatibility

Controls the Adobe PDF file compatibility level. For documents intended for broad distribution, Acrobat 5 (PDF 1.4) helps ensure that users can view and print the file. Files created with Acrobat 8/9 (PDF 1.7) compatibility may not open correctly in earlier Acrobat versions.

Subset Fonts When Percent Of Characters Used Is Less Than

Defines when a font is fully embedded based on the percentage of its characters used in the document. If the document uses more than the specified percentage for a particular font, that font is embedded in full; otherwise, only a subset is embedded. Full font embedding makes the PDF larger. To force complete embedding for every font, enter 0 (zero).

Include Page Information

Adds the document name, page number, export date, and export time.

View PDF After Exporting

Opens the PDF in the latest Acrobat version installed on the computer. For accurate output, match Compatibility to that installed Acrobat version.

### Exporting to Adobe PDF — Adobe PDF options for Galley and Story views

Galley and Story views have their own options in the PDF Export dialog box.

Stories

Exports one story or more than one story.

Fonts

Provides controls for font family and style, type size, and leading in the exported file. The Galley & Story Display preferences used on screen are not changed by these settings.

Include Story Information

Places the document title, author, and description in the exported PDF file.

Include Paragraph Styles

Adds paragraph style details from the information column shown in Galley and Story views to the exported PDF file.

Include Inline Notes

Exports inline notes in the document, either all notes or only visible ones. To include each person's assigned note colors, select Show Notes Backgrounds In Color.

Include Tracked Changes

Exports tracked changes in the document, either all changes or only visible ones. To include each person's assigned editing colors, select Show Tracked Changes Backgrounds In Color.

Include Accurate Line Endings

Keeps line endings as shown in the story. When this is off, text wraps according to the widest story window's width and orientation.

Include Line Numbers

Outputs line numbers in the information column. This option appears only when Include Accurate Line Endings is selected.

Fill Page (Use Multiple Columns)

Uses the column count and column width you specify for story export. This option appears only when Include Accurate Line Endings is selected.

Note

A small column width combined with a large font size in the Fonts section can make text overlap in the exported output.

### Exporting to Adobe PDF — Adobe PDF options for Layout view

These options apply only to Layout view export:

All

Exports every page in the current document or book; this is the default.

Range

Defines which pages from the current document are exported. Use a hyphen for a page range, and commas to separate pages or ranges. This option is not available for book export.

Spreads

Exports pages together, as though bound or printed on the same sheet.

Note

Do not choose Spreads for commercial printing; choosing it prevents the service provider from imposing the pages.

Include Notes As Annotation

Exports every note as a PDF annotation.

Interactive Elements

Select Include Appearance when the PDF should include items such as buttons and movie posters.

Optimize For Fast Web View

Makes the PDF file smaller and reorganizes it for quicker browser viewing through page-at-a-time downloading (byte serving).

Embed Page Thumbnails

Builds thumbnail images into the exported PDF file.

### Exporting to Adobe PDF — Create secure PDF documents

Access to an Adobe PDF file can be limited during export. When security restrictions are applied, related tools and menu items appear dimmed.

A PDF can require a user password for opening and a parent password for changing security settings. When any security restriction is added, also set a parent password; without it, anyone who opens the PDF could remove the restrictions. Opening the PDF with a master password temporarily turns off the restrictions. If both passwords are present, either password can open the file.

Note

Compatibility controls encryption strength. Acrobat 4 (PDF 1.3) uses low encryption, 40-bit RC4. Other compatibility choices use high encryption: 128-bit RC4 or AES.

Start with File > Export. Set Save As Type (Windows) or Format (Mac OS) to Adobe PDF. Enter a name and location for the file, then click Save. Click Security Settings. In Passwords, choose the needed password protection:

For Password Required To Open Document, use the Document Open Password text box to enter the password required before the PDF opens.

For Password Required To Change Permissions And Passwords, use the Permissions Password text box to enter the password required before PDF security options can be changed.

Note

The same password cannot be used in both text boxes.

In Permissions, set what users are allowed to do:

No Printing

Blocks users from printing the Adobe PDF file.

No Changing The Document

Blocks form filling and every other edit to the Adobe PDF file.

No Content Copying Or Extraction, Disable Accessibility

Blocks selection of text and graphics.

No Adding Or Changing Comments And Form Fields

Blocks adding or changing notes and form fields when the PDF is opened in Adobe Acrobat or another PDF editor.

Click Save, then click Export.

## Understanding Adobe PDF — About Adobe PDF

Portable Document Format (PDF) works across applications and platforms as a general-purpose file format while retaining the fonts, images, and page layout from the original documents. For electronic documents and forms, Adobe PDF serves as a secure, dependable standard for worldwide distribution and exchange. Adobe PDF files package the full document into a compact form, and anyone with free Adobe Reader® software can share, view, or print them.

In print-publishing workflows, Adobe PDF is especially useful. Saving a composite version of artwork as Adobe PDF gives you or your service provider a compact, dependable file for viewing, editing, organizing, and proofing. At the correct point in production, the service provider can output the Adobe PDF file directly, or can run it through tools from different sources for post-processing work such as preflight checks, trapping, imposition, and color separation.

With Adobe PDF saving, PDF/X-compliant output is another available choice. PDF/X (Portable Document Format Exchange) narrows Adobe PDF to a profile that avoids many color, font, and trapping variables known to cause print problems. Use PDF/X wherever PDFs move through print production as digital parents, either during creation or output, provided the applications and output devices support PDF/X.

Adobe PDFs can address these electronic-document problems:

### Understanding Adobe PDF — Embedding and substituting fonts

InCopy embeds a font only when the font vendor has included a setting that allows embedding. Embedding keeps a reader's system from substituting another font during viewing or printing, so the text appears in its original typeface. File size rises only a little, except when the document uses CID (multibyte) fonts, a font format often used for Asian languages in which several characters combine into one glyph.

For any font that is embedded, InCopy can include the full font or only a subset: the particular characters, called glyphs, that the file uses. Subsetting builds a custom font name so the correct fonts and font metrics are available at print time. The subsetting choices affect both disk usage and whether late-stage edits remain practical.

If InCopy is not able to embed a font, it temporarily uses a Multiple parent typeface in its place. For a missing serif font, InCopy uses AdobeSerMM; for a missing sans serif font, it uses AdobeSanMM.

To preserve the original document's line and page breaks, these replacement typefaces can stretch or condense as needed. Even so, the substitute may not reproduce the original character shapes exactly, particularly with unusual script-style characters.

If characters are unconventional (left), the substitution font cannot always match (right).

If characters are unconventional (left), the substitution font cannot always match (right).

### Understanding Adobe PDF — About compression

During export to Adobe PDF, InCopy automatically downsamples images, removes image data outside the image frame, and applies lossless ZIP compression to text and line art. ZIP is effective for images with broad single-color areas or repeating patterns, as well as black-and-white images that also contain repeated patterns. Because the ZIP method used by InCopy is lossless, it does not discard data to make files smaller, and image quality remains unchanged.

### More like this

- Exporting to Adobe PDF

## Printing stories — Print the Galley or Story view

Printing the Galley or Story view from InCopy produces unformatted text in one continuous column, or in multiple columns, without layout features or formatting. A Galley or Story printout gives you a hard copy similar to traditional publishing galleys. This format helps you focus on story text and review edits made by you and other contributors.

Choose File > Print. In the Print dialog box, set View to Galley & Story. Then set these options in the Print dialog box:

Enter the number of copies to print.

Choose the paper size from the list.

Set the paper orientation.

Choose whether the job prints All stories, Current Story, or All Expanded.

Note

All Expanded is available only while you are working with linked InCopy files.

In the Options section, choose either Use Current Galley Settings or Override Current Galley Settings. When Override Current Galley Settings is selected, choose the information to include in the printout. To add the document name, page count, and print time to the printed page, select Print Page Information. To print a story-related summary, select Print Story Information. This output uses the information stored in the Content File Info dialog box. Click Print. Note

If printing fails or the output is incorrect, confirm that the correct printer driver is installed.

### Printing stories — Print the Layout view

When InCopy prints the Layout view, the printed document matches the on-screen appearance, keeping frames and every other page element in place.

Note

InCopy is not intended for production-quality printing, so it does not provide controls for trapping, printer's marks, color separations, or some printing functions related to graphics. InCopy supports composite printing only.

Choose File > Print. In the Print dialog box, choose Layout from the View options. Set the following options:

Enter the number of copies to print.

Choose the paper size from the list.

Set the paper orientation.

Print all stories, or specify the page range to print in the Current story.

Decide whether to scale the document. To include document images in the output, select Print Images. To place facing pages on one sheet, select Print Spreads. To add the document name, page count, and print time to the printed page, select Print Page Information. Click Print. Note

If the document prints incorrectly, verify that the correct print driver is installed.

### Printing stories — Create a standard PostScript file

Instead of sending a document directly to a printer, you can save an Adobe PostScript® language description of it as a file for later printing on remote printers. A standard PostScript (.ps) file describes everything in the document, including linked-file information and instructions built for the currently selected output device.

The resulting PostScript file is generally larger than the source InCopy document. After creating the PostScript file, you can copy it to a disk or another removable storage device, or send it to a different computer for printing.

Note

Save the PostScript file on your hard drive before moving it to a network drive or removable media. Slow access between the hard drive and other drives can corrupt the file, lose data, and possibly damage the document.

Choose File > Print. Click Setup. Follow the step for your operating system:

(Windows) Select Print To File, and then click Print.

(Mac OS) Open the PDF menu and choose Save PDF As PostScript. When prompted, provide a name and location, and then click Save.

Adjust settings in the InCopy Print dialog box if changes are needed. The current page range is what InCopy uses when it creates the PostScript file. Click Print. In Windows, provide a name and location for the file, and then click Save.

### Printing stories — Change the default print setting

Print settings can be stored with the application so new InCopy documents start with those same settings. On Mac OS, the saved print settings also become the printer defaults. Individual print settings can still be overridden.

Choose File > Print, and set the default print options you want. Click Save Settings.

After the print job finishes, any temporary overrides to those saved settings are discarded.

### Printing stories — Scale documents

From Layout view, scaling controls how document pages fit onto the selected paper size. On Windows, the largest printable page size is 129 by 129 inches. When an oversized document must fit on smaller paper, scale its width and height symmetrically or asymmetrically. You can also let InCopy scale pages automatically to the imageable area of the current paper size. Scaling changes only the printed output, not the page size stored in the document.

### Printing stories — Scale a document manually

In Layout view, choose File > Print. To preserve the current width-to-height proportions, select Constrain Proportions. To scale width and height independently, make sure Constrain Proportions is not selected. In the Width and Height boxes, enter percentages from 1 to 1000. If Constrain Proportions is selected, enter only one value; the other value updates automatically. Click Print.

### Printing stories — Scale a document automatically

In Layout view, choose File > Print. Select Scale To Fit. Next to Scale To Fit, InCopy displays the scaling percentage calculated from the imageable area defined by the selected PPD. Complete the dialog by clicking Print.

### More like this

- Setting up a printer
- Exporting to Adobe PDF
