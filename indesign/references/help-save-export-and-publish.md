# Save And Export

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Save, export, and publish; Save documents; Add, edit, and export file metadata; Export to XML; Export documents as separate InCopy files; Export PDFs for printing; Manage PDF presets; Export pages, objects, and text; JPEG and PNG export options; Adobe PDF export options in InDesign.

## Save, export, and publish

### Save and export

Save documents

Add, edit, and export file metadata

Export to XML

Export documents as separate InCopy files

Export PDFs for printing

Manage PDF presets

Export pages, objects, and text

JPEG and PNG export options

Adobe PDF export options in InDesign

### Export to EPUB

Export to EPUB

EPUB export options in InDesign

Accessibility features while exporting to EPUB

Accessibility enhancements for indexes

Adjust text resizing for accessibility

Add ARIA role while exporting to EPUB

Add ARIA labels to objects

EPUB export support and limitations

Create accessible glossaries

### Export to HTML and web

Export to Adobe Express

Create and manage articles

Export to HTML (Legacy)

HTML export options

Export content as HTML5

HTML5 export options

### Publish work online

Publish InDesign documents online

Set up Google Analytics for published documents

Publish Online FAQ

## Save documents

Use Save commands in Adobe InDesign to keep layouts, versioned copies, and file metadata intact.

Saving a document records the current layout, linked assets, active page, and zoom level. It also refreshes metadata about fonts, colors, links, and file information, which supports search and file management. Save often to protect work and keep document information current.

Save a document

Select File > Save to store changes for the open document.

For a renamed document, select File > Save As, enter a File name and location, then select Save.

For a separate duplicate, select File > Save a Copy, enter a File name and location, then select Save while leaving the active document unchanged.

Use Ctrl + Alt + Shift + S (Windows) or Command + Option + Shift + S (macOS) when all open documents should be saved.

### Save InDesign cloud documents

Cloud documents are useful for version history, multi-device access, and collaboration workflows.

Select File > Save.

Set the File name and choose a location.

Select Save to Adobe cloud storage.

Select Save.

### Include previews in saved documents

Thumbnail previews make documents easier to recognize visually in asset management tools. They add to file size and can lengthen saves, so reserve higher resolutions for cases that need them.

For Windows, select Edit > Preferences > File Handling; for macOS, select InDesign > Preferences > File Handling. Then enable Always Save Preview Images with Documents for every document.

Select File > Save As or File > Save a Copy, then choose Always Save Preview Images with Documents when only one document needs a preview.

Select Edit > Preferences > File Handling, set the preview Pages count, and choose a Preview Size to change preview settings.

### Save InDesign Markup (IDML) documents

Use IDML when compatibility or troubleshooting matters. IDML files open in supported earlier versions of InDesign, although conversion may not keep some newer features.

Select File > Save.

Choose InDesign CS4 or later (IDML) in the format dropdown.

Select Save.

## Add, edit, and export file metadata

Use File Info in Adobe InDesign to add searchable document metadata and export that metadata as an XMP file.

Metadata can include author, title, copyright, and keywords. Those fields make files easier to organize and search across workflows. Through File Info, you can add, revise, or export metadata for an InDesign document.

### Add or edit metadata

Open File > File Info.

Choose a metadata category such as Basic, IPTC, or Origin.

Enter or revise details such as title, author, description, keywords, or copyright information.

Check the information in other categories as needed.

Select OK to apply the changes.

### Export metadata as an XMP file

Document metadata can be exported to an XMP file for sharing with other users. InDesign documents and other XMP-authorized applications can use these XMP files as templates for filling metadata. Exported templates reside in a shared location available to every supported application. In the File Info dialog box, they also show in the bottom-center menu.

Select File > File Info.

In the bottom-center of the dialog box, open the Template option and choose Export.

Complete the File name field.

For Save as type, select XMP Files (\*.xmp).

Select Save.

Note

To see metadata templates in the system folder, use the bottom-center menu in the File Info dialog box and choose Template Folder.

## Export to XML

Save tagged Adobe InDesign content as XML files when another application or workflow needs the structured data.

XML export lets tagged content be reused without losing its structure. You may export a whole document or a selected portion, and the output includes only tagged items, including tables. Before export, create or load tags, apply them to the content, and adjust the hierarchy if required.

Select File > Export.

If only part of the document should be exported, select the starting element in the Structure panel (View > Structure > Show Structure).

Enter a File name and location. For Save as type (Windows) or Format (macOS), choose XML.

Select Save in the Export dialog box.

On the General tab of the Export XML dialog box, set these options:

- Include DTD Declaration: includes the DTD reference with the XML file. This option appears only when the Structure panel contains a DOCTYPE element.
- View XML Using: sends the exported file to a browser, an XML editor, or a text editor. Choose the browser or application from the list.
- Export From Selected Element: begins export at the selected element in the Structure panel. This option appears only if an element was selected before File > Export.
- Export Untagged Tables as CALS XML: writes untagged tables as CALS XML. For export, the table must sit in a tagged frame and remain untagged.
- Remap Break, Whitespace, and Special Characters: writes break, whitespace, and special characters as decimal character entities instead of literal characters.
- Apply XSLT: uses a stylesheet to transform exported XML into outputs such as modified XML or HTML. Use Browse (Windows) or Choose (macOS) to pick an XSLT file, or select Use stylesheet from XML to apply the stylesheet referenced in the XML.

Choose an encoding type from the Encoding menu.

On the Images tab, choose one or more of these image export options:

- Original Images: creates copies of the original image files in an Images subfolder.
- Optimized Original Images: compresses and enhances originals, then puts copies in an Images sub-folder.
- Optimized Formatted Images: processes transformed images, including rotated or scaled items, and writes them to an Images subfolder. It copies only changed images.

If Optimized Original Images or Optimized Formatted Images is selected, set the additional image-refinement options.

Select Export to create the XML file.

Note

XML does not support every special character, such as the Automatic Page Number character. InDesign displays a warning when a character cannot be included in the exported XML file. The same warning appears when a table has not been tagged.

## Export documents as separate InCopy files

Create separate InCopy files for each frame in Adobe InDesign so content can be edited independently without assignment packages.

Export selected content as individual InCopy (ICML) files instead of assignment files. Every selected frame becomes a separate file. For contextual editing, open the InDesign document with those files, or arrange content by layer before exporting.

Create a document in InDesign that contains one or more text frames, graphics frames, or placeholder items.

Do either of the following:

- Select a single story's text or graphics frame, or Shift-click to select multiple frames.
- With the Type tool, place an insertion point in a story or select text in a text frame.

Use Edit > InCopy > Export, then choose from these options:

- Selection: includes all selected text and graphics frames in the export.
- Layer: includes all content on the selected layer.
- All Stories: includes each story that has not already been exported.
- All Graphics: includes each graphic that has not already been exported.
- All Graphics and Stories: includes each story and graphic that has not already been exported.

Enter a File name, then choose InCopy Document in the Save as type option.

Select Save.

Note

- Shared content is listed in the Links panel like imported graphics. When a shared file is moved manually, update its link through the Links panel.
- The File name you enter is used as the prefix for every export. Text frames combine that prefix with the first few words of content; graphic frames receive sequential names.

## Export PDFs for printing

Export Adobe InDesign documents as print-ready PDF files using settings suitable for the job.

Print export to Adobe PDF can use presets or custom settings. High Quality Print and similar presets provide dependable output, while custom choices tune file size and quality. After settings are chosen, they are retained for reuse in later exports.

InDesign can export a document, a book, or selected documents in a book to one PDF file. You can also copy content to the clipboard and convert it to PDF for other applications.

Select File > Export.

Choose a destination and File name for the saved document.

For Save As Type (Windows) or Format (macOS), choose Adobe PDF (Print).

Select Save; the Export Adobe PDF dialog box opens.

Do one of the following:

- For predefined job options, choose a preset from the Adobe PDF Preset menu.
- To make a PDF/X file, choose a PDF/X preset from the Adobe PDF Preset menu or a predefined PDF/X format from the Standard menu.
- For custom options, choose a category in the list on the left, then set the options.

For Compatibility, choose the lowest PDF version needed to open the files you create.

If needed, select and modify the Accessibility Options under the Advanced tab.

Select Export (Windows) or Save (macOS).

Tip

In the Export Adobe PDF dialog, hold Alt (Windows) or Option (macOS), then select Reset; Cancel changes to Reset.

## Manage PDF presets

Create, edit, and load Adobe PDF presets in Adobe InDesign when consistent PDF output is required.

A PDF preset groups settings used when creating a PDF file. Those settings balance file size against output quality for the intended use. Custom presets can match workflow or production needs and are saved as .joboptions files.

### Customize Adobe PDF presets

Select File > Adobe PDF Presets > Define.

Choose one of these actions:

- Select New to create a preset. To start from an existing preset, select that preset first. Set the PDF options, then confirm.
- Select the preset and use Edit to change an existing custom preset. Default presets cannot be modified. Revise the PDF options, then confirm.
- Select the preset and use Delete to remove it.
- Select the preset and use Save As to store it in another location. Specify the location, then confirm.

Note

A custom preset can also be created while saving a PDF file: select Save Preset in the Export Adobe PDF dialog box.

### Load Adobe PDF presets

Other Adobe PDF presets may come from the Adobe PDF\Extras folder or outside sources such as print service providers. Add those presets to the Settings folder before using them.

### Load PDF presets using the Load command

Select File > Adobe PDF Presets > Define.

Select Load, then locate the .joboptions file.

Import the file into the Settings folder.

### Convert PDF presets from earlier versions

Earlier InDesign versions store PDF presets as .pdfs files. Newer versions can convert those files for use.

Select File > Adobe PDF Presets > Define.

Select Load.

Import the selected .pdfs file.

### Adobe PDF preset options

A PDF preset is a ready-made group of settings for generating a PDF file. The settings cover image resolution, color handling, compression, and font embedding, so file size and output quality can be balanced for the intended use.

Review PDF settings on a regular basis. Applications and utilities that make PDFs use the latest defined or selected settings and do not automatically return to defaults.

### Print and production presets

Note

Although installed, the PDF/X-1a:2003 and PDF/X-3 (2003) presets require relocation: move them from the Extras folder into the Settings folder before using them.

### Archival and standards-based presets

### General and distribution presets

### Specialized presets

### Additional considerations

- Before creating print-ready PDFs, verify output requirements with the print service provider.
- Some production flows need custom settings; those settings are often delivered as a .joboptions file.
- In the Standard preset, Windows font subsets are not embedded by default.

## Export pages, objects, and text

Export pages, spreads, objects, and text from Adobe InDesign when the content needs to move into other applications.

Adobe InDesign export tools save layout content in formats that can be shared across platforms and devices. Depending on the job, you can output a full page, a spread, or one selected object.

Export pages or objects

To export one specific element, select that object first. Leave the document with no object selected when the target is a page or spread.

Select File > Export.

Choose the destination and type a File name.

Choose JPEG or PNG from Save as type (Windows) or Format (macOS), then select Save.

Configure the JPEG and PNG export options, then select Export.

### Export text

Save an entire InDesign story, or only a selected portion, to file formats that other applications can open later. In a document with multiple stories, each story exports as its own document.

The Export dialog box lists the text formats available from InDesign. Many of those formats are intended for exchange with other applications and can keep type specifications, indents, and tabs from the document.

Frequently reused text and page layout items can also be saved as snippets.

Select the Type tool, then select the story to export.

Select File > Export.

Choose the destination and type a File name.

Choose a text file format from Save as type (Windows) or Format (macOS).

When the target word processor is not listed, export as RTF or a text-only format instead. Text-only output removes all character formatting.

Select Save.

For complete formatting preservation, use the Adobe InDesign Tagged Text export filter.

## JPEG and PNG export options

Review JPEG and PNG export settings in Adobe InDesign when image quality, file size, and compatibility need careful tuning.

Use this reference to decide how each export option changes JPEG or PNG output quality, size, and compatibility. These settings determine how document content becomes images for web, digital display, or print.

### Export

Note

For reliable exchange between macOS and Windows, keep illegal or reserved characters out of file names, folder names, and dynamic strings. During PNG, JPEG, and PDF export, InDesign removes these characters: “ \ / : \* ? " < > |  “

## Adobe PDF export options in InDesign

Configure Adobe PDF export settings in Adobe InDesign and review how those choices shape the exported result.

InDesign groups Adobe PDF export options into categories that govern document processing during export. Those categories cover file standards, compatibility, compression, and additional settings.

### Compression and downsampling

### Downsampling options

### Compression options

## See also

- [Characters](uxp-characters.md)
