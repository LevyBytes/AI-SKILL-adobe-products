# Import And Convert File To Indesign

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create and organize pages; Convert PDFs to InDesign documents; Convert PDF features and limitations; Import files from Creative Cloud libraries; Import files, graphics, and metadata; Convert and save QuarkXPress files.

## Create and organize pages

### Import and convert file to InDesign

Convert PDFs to InDesign documents

Convert PDF features and limitations

Import files from Creative Cloud libraries

Import files, graphics, and metadata

Convert and save QuarkXPress files

### Create documents

Create new documents

Open documents

Create documents with presets

Create multi-page spreads

Change document setup, margins, and columns

### Create and manage parent pages

About Parent Pages

Create and apply parent pages

Use parent page overlays

Edit parent pages

Copy parent pages

Delete parent pages

Manage parent items

Import parent pages

### Create and manage book files

Create and save book files

Add documents to book files

Remove or replace book documents

Synchronize book documents

Convert book files from previous InDesign versions

### Arrange and order pages

Add new pages to a document

Target or select pages or spreads

Change page and spread display

Create color labels for page thumbnails

Redistribute spreads and pages

Move pages

Duplicate pages and spreads

Hide and unhide spreads

Split a page from the spread

Rotate the spread view

Delete a page or spread

### Manage layers

About layers

Create and set up layers

Add, move, or duplicate objects across layers

Manage layer visibility and stacking order

Lock or unlock layers

### Page numbers, chapters, and sections

Add auto-update page numbers and section markers

Change page and chapter number formatting

Switch between absolute and section numbering

Document numbering options

Create running headers and footers

Turn off automatic page numbering for books

Use sequential paragraph numbering in books

## Convert PDFs to InDesign documents

Open PDF files as editable Adobe InDesign documents when you need to adjust text or layout.

When a PDF needs text or layout changes, convert it into an InDesign document while preserving document fidelity in InDesign.

Note

- To convert PDFs to InDesign files, stay connected to the internet and sign in to your Adobe account.
- Best results require the document's fonts to be available on your system.
- The feature supports non-English languages as well as English (North America and International). CCJK and MENA languages are not supported.

### Open a PDF in an InDesign document

Launch InDesign.

Choose File > Open PDF.

Choose the PDF to edit, then choose Open. You can also drag PDF files into the InDesign application window to start conversion.

### Place a PDF in an InDesign document

Choose File > Place and choose a PDF file. Dragging PDFs into InDesign is also supported.

Choose Open PDF to convert it to an editable InDesign document, or choose Place PDF to insert it as an image.

### Open an Illustrator (AI) file in an InDesign document

Illustrator files saved with Create PDF Compatible File include an embedded PDF. InDesign reads that PDF content when converting Illustrator files into editable InDesign documents.

Save the Illustrator file with Create PDF Compatible File selected.

Launch InDesign and choose File > Open.

Select the Illustrator (AI) file and choose Open. It opens in InDesign as an editable document.

## Convert PDF features and limitations

Review the supported features, limitations, and related details for converting PDFs into Adobe InDesign documents.

### PDF to InDesign conversion features

- Open multiple PDFs from many sources, including Illustrator PDFs, Photoshop PDFs, Express PDFs, Microsoft Word PDFs, Microsoft Excel PDFs, Microsoft PowerPoint PDFs, Apple Numbers PDFs, Canva PDFs, etc.
- Support covers tables, hyperlinks, gradients, spot colors, underline, strikethrough, superscript and subscript, baseline shift, special characters, and nested ordered and unordered lists.
- Unsupported, digitally signed, or password-protected PDF files can't be opened.
- Superscript and Subscript usually keep the correct appearance and remain editable.
- Tables are supported.
- Paragraph Styles and Character Styles are created during PDF to INDD document conversion only when the document has 80 or fewer unique styles.
- For PDFs created in InDesign, PDF conversion supports the Drop Shadow Effect. Object Opacity, Blending modes, and optimization for creating multiple text frames are fully or partially supported for PDFs.
- Paragraphs can be grouped into a single text frame.
- In the export dialog to PDF, select Preserve InDesign Editing Capabilities. This setting helps recreate the PDF as it was originally created in InDesign.

### Limitations and known issues

- InDesign cannot convert PDF files that are corrupted, malformed in any way, or produced from unreliable sources.

  - Advanced Bullets & Numbered lists, including lists with different colors or styles.
  - Advanced Table Features, such as tables with different borders and variations, plus advanced Bullets and numbers.

- Conversion is available for a PDF or Illustrator file that is under 150 MB and has no more than 200 pages.

### Unable to open the PDF created in Illustrator

When an Illustrator (AI) file is saved in Illustrator without the Create PDF Compatible File option, InDesign cannot process it. Open the file in Illustrator, save it again with Create PDF Compatible File selected, and then try opening it again.

Older Illustrator files saved without PDF compatibility can also fail to open in InDesign. Open the file in Illustrator, resave it with Create PDF Compatible File selected, and then try again in InDesign.

If the file still fails, the .ai file itself may have an internal problem that InDesign cannot process. Troubleshoot in Illustrator first, such as by reducing complex artwork, deleting damaged elements, or saving under a new name, before reopening it.

## Import files from Creative Cloud libraries

Use the CC Libraries panel in Adobe InDesign to access library graphics, colors, and styles and place them in documents.

Creative Cloud Libraries hold shared assets, including colors, text styles, and graphics, for use in InDesign and other Adobe apps. Import these assets from Window > CC Libraries, then place them as linked or embedded files while preserving their formatting.

Before you begin

Confirm that at least one Creative Cloud Library contains assets and that your Adobe Creative Cloud account is active.

### Import graphics from CC Libraries

Choose Window > CC Libraries.

From the dropdown menu in the CC Libraries panel, choose your library.

Under Graphics, find the asset you want to place.

Drag the graphic onto the document to place it as a linked asset.

To embed the graphics, hold Alt (Windows) or Option (macOS) while dragging.

### Import colors and color themes

Choose Window > CC Libraries, then choose your library.

In Colors or Color Themes, find the target color or color theme.

For an individual color, right-click the asset and choose Add to swatches. For a color theme, right-click it and choose Add theme to swatches.

### Import paragraph and character styles

Choose Window > CC Libraries.

Find the target style in Paragraph Styles or Character Styles inside the CC Libraries panel.

Select one or more styles to import.

Right-click the selected styles, then choose Add to Paragraph Styles or Add to Character Styles.

Tip

- In the Links panel, linked graphics show an icon for their link status. To find a linked graphic inside your CC Libraries, right-click the graphic in the Links panel and choose Reveal in CC Libraries.
- For quick access to graphics-only assets, use File > Place from CC Libraries; to work with every asset type, open the full CC Libraries panel.

### Place Photoshop cloud documents in InDesign

Start with a new or existing InDesign document.

Choose File > Place.

Choose Open Cloud Document, then choose the Photoshop cloud document (.psdc) to place into the current InDesign document.

Choose Place.

## Import files, graphics, and metadata

Use the Place command in Adobe InDesign when adding graphics that need full format support and link management.

The Place command provides the most control for importing graphics, including resolution, file formats, color management, and multipage documents. Choose this workflow when links to original files must be maintained, graphics may need updates later, or complex formats such as layered Photoshop files or multipage PDFs are involved.

### Place a single graphic file

Choose File > Place.

Navigate to the graphic file you want to import and select it.

Enable Show Import Options to set format-specific options before importing.

Choose Open.

If import options were enabled, configure the dialog box settings and choose OK.

Click in the document, or click an existing frame. The Links panel shows the graphic's filename and full path.

### Place multiple graphics at once

Choose File > Place.

Hold Ctrl (Windows) or Command (macOS) while selecting multiple files.

Enable Show Import Options if any selected file needs settings configured.

Choose Open.

When prompted, configure import options for each file and choose OK. The loaded graphics cursor shows a thumbnail of the current graphic and a count of the files still waiting in the queue. Scrolling or switching pages keeps the loaded graphics active.

Click anywhere to place the first graphic, then repeat for each remaining graphic in sequence.

### Place multiple graphics in a grid layout

Choose File > Place and select multiple graphic files.

Choose Open, then configure any import options.

Drag to begin creating the grid.

While dragging, press the Up Arrow or Down Arrow keys to change the number of rows.

While dragging, press the Left Arrow or Right Arrow keys to change the number of columns.

Release the mouse button when done.

When frame spacing in the grid needs adjustment, hold Ctrl (Windows) or Command (macOS) while pressing arrow keys.

### Place layered Adobe files with layer control

Choose File > Place.

Before choosing your file, enable Show Import Options.

Choose a layered Adobe file in PSD, PDF, AI, or INDD format, then choose Open.

From the Import Options dialog box, select the layers to display. For Photoshop files, select a specific layer composition.

Choose OK.

Place the file in the layout by clicking or dragging.

InDesign keeps the placed file's layer visibility settings, and later changes are available through the Object Layer Options dialog box.

### Import metadata

XMP templates hold standardized document metadata, such as author, copyright, and keywords. Importing an XMP file can replace, merge, or append metadata so projects and applications stay consistent.

Before you begin

Confirm that an XMP template file has been exported from InDesign or another XMP-enabled application, and know where it is stored on your computer or network.

Choose File > File Info.

Use the pop-up menu beside Preferences in the File Info dialog box.

If the required XMP template is listed, choose it from the menu; otherwise choose Import and browse for an XMP file.

After choosing Import, browse to the XMP file location and double-click the template file.

Use the Import Options dialog box to choose how existing metadata should be handled:

- Option: Clear existing properties and replace with template properties
- Option: Keep original metadata, but replace matching properties from template
- Option: Keep original metadata, but append matching properties from template

Choose OK.

Tip

To view the folder where InDesign looks for XMP templates, use the pop-up menu beside Preferences in File Info and choose Templates Folder.

## Convert and save QuarkXPress files

Open QuarkXPress documents directly in InDesign, then save them as native Adobe InDesign files for continued editing.

Adobe InDesign converts QuarkXPress documents and templates directly into InDesign format while retaining layout, styles, and linked assets. This workflow lets QuarkXPress projects move to InDesign while maintaining design fidelity.

Before you begin

Supported source formats include QuarkXPress 3.3 and 4.1x, plus multi-language QuarkXPress Passport 4.1x files. If a document was created in QuarkXPress 5.0 or later, first reopen it in QuarkXPress and save it in 4.0 format before converting. Conversion keeps text frames, styles, colors, parent pages, layers, and linked graphics. OLE objects are unsupported, as are XTensions-generated graphics.

- QuarkXPress document (QXD) or template (QXT) saved as version 3.3 or 4.1x.
- Original QuarkXPress file closed.
- Copy all linked graphics into the QuarkXPress document's folder.
- InDesign 2023 or later installed.

During conversion, InDesign maps QuarkXPress elements to their InDesign equivalents. Text boxes turn into text frames, QuarkXPress styles become InDesign styles, and parent-page objects carry over intact. Use the Links panel to review preserved graphic links and update them after conversion.

Choose File > Open.

Select the QuarkXPress document or template file, then choose Open.

If a warning dialog reports conversion issues, choose Save to export a text file for review, or choose Close to continue without saving the warnings.

Inspect the opened document to confirm correct conversion of text, graphics, and layout elements.

Choose File > Save, then choose InDesign <year> document or InDesign <year> template.

## See also

- [Character Styles](uxp-character-styles.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
