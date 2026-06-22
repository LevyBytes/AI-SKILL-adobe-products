# Importing Graphics (part 1)

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

InCopy can bring graphics into frames that already exist. That workflow helps when article content comes before page layout, because writers can pick images for the story while drafting.

Graphics can be imported only into existing frames. Creating graphics frames is limited to InDesign users. In standalone InCopy documents, inserting an image into the default text frame makes that image an inline graphic.

InCopy accepts the same broad set of graphics formats that InDesign accepts. Examples include bitmap formats such as PDF, PSD, TIFF, GIF, JPEG, and BMP; vector formats such as EPS; and artwork from Adobe Illustrator 8.0 and later. InDesign (INDD) pages can also be brought in as images. DCS, PICT, WMF, EMF, PCX, PNG, and Scitex CT (.SCT) are supported as well.

## Importing graphics — Notes on placing graphics in InCopy

Keep these points in mind when bringing graphics into InCopy:

For managed content, check out the frame before importing a graphic into that frame.

After a graphic has been imported, you can move, scale, rotate, or shear it within its frame, fit it to the frame, and adjust how it appears. A selected frame can also be tagged for later XML work through commands on the context menu.

When an InDesign user makes a new frame, they choose whether it is a text, graphics, or unassigned frame. InCopy users cannot alter that frame type from inside InCopy. For that reason, trying to import a graphic into a text frame can produce a large inline graphic.

In InCopy, you can select and edit graphics, but not their frames, except when the frames are nested or inline. Changes to graphics frames themselves must be done by InDesign users.

Graphics may be placed, pasted, or dragged into anchored, floating, or inline graphics frames. A text frame can receive a graphic only when it has an active insertion point or when it is an inline graphics frame.

When the target is a nested frame, import goes into the deepest frame beneath the pointer. Unlike top-level frames, nested frames that hold graphics can be selected with the Position tool. (See Position tool overview.)

Effects applied to a frame in InDesign, including transparency, drop shadow, or feathering, remain visible in an assignment file or InDesign (.indd) file opened in InCopy. The same effects do not appear in a linked (.icml) file opened in InCopy.

## Importing graphics — Place a graphic in an InCopy document

Use one of these approaches:

For a standalone InCopy document, set the insertion point inside the text frame before placing the graphic.

For a linked document, confirm that the graphics frame is checked out to you. InCopy shows the Editing icon at the frame's upper-left.

Choose File > Place, then pick a graphics file. To choose settings for that format, enable Show Import Options so the format-specific settings appear, then click Open.

Note

For graphics created in Illustrator 9.0 or later, the Show Import Options dialog box presents the same choices used for PDF files. For an Illustrator 8.x graphic, the choices match those for EPS files.

If another dialog box opens, set the import choices and click OK. For frame import, click the loaded graphics icon inside the target frame. When placing a particular page from a multipage PDF document, use the loaded graphics icon in a frame.

Note

If placing a new image accidentally replaces an existing graphic, press Ctrl+Z (Windows) or Command+Z (Mac OS) to restore the previous image to the frame and show the loaded graphics icon again.

## Importing graphics — Drag a graphic into a frame

Use one of these approaches:

To put a graphic into an existing graphics frame, first confirm the frame is checked out to you, then drag the graphic file's icon from the file system onto the frame.

To place a graphic at the active text insertion point, drag the graphic file's icon anywhere inside the text frame. This method works only in Layout view.

## Importing graphics — Paste a graphic into a frame

Confirm that the graphics frame is checked out to you. InCopy shows the Editing icon at the frame's upper-left. Cut or copy a graphic. Position the Hand tool on the graphics frame, right-click (Windows) or Control-click (Mac OS), and choose Paste Into.

## Importing graphics — Create an inline graphic

Confirm that the text frame is checked out to you. The Editing icon appears at the upper-left corner of the frame. Then use one of these methods:

For an existing inline graphics frame, use the Place or Cut command to choose a graphic, then click the loaded graphics icon in the frame.

At an active text insertion point, either drag the graphic file's icon to any location in the text frame or import the graphic with the Place command.

## Importing graphics — Import options for graphics

The available graphics-import choices depend on the kind of image being brought in. To show those choices, enable Show Import Options in the Place dialog box.

## Importing graphics — Encapsulated PostScript (.eps) import options

For an EPS graphic, including a file saved with Illustrator 8.0 or earlier, enabling Show Import Options in the Place dialog box opens a dialog box with these choices:

Read Embedded OPI Image Links

This setting makes InCopy read image links from OPI comments for images that are included in, or nested inside, the graphic.

Leave the setting off when a proxy-based workflow will let service providers replace images with their OPI software. With the setting off, InDesign keeps the OPI links but does not read them. During print or export, both the proxy and its links are carried into the output file.

Turn the setting on in a proxy-based workflow when InDesign should handle image replacement at final output instead of the service provider. With the setting on, the OPI links show in the Links panel.

Also enable the setting for EPS files that contain OPI comments outside a proxy-based workflow. For example, when an EPS file includes OPI comments for an omitted TIFF or bitmap image, enabling the setting lets InDesign reach the TIFF information while outputting the file.

Apply Photoshop Clipping Path

A placed EPS file includes a clipping path in InDesign whether or not this setting is selected. Turning it off, however, can change the bounding box size.

Proxy Generation

This area creates a low-resolution bitmap proxy for drawing the image on-screen. These settings determine how that proxy is made:

Use TIFF Or PICT Preview

Some EPS images include an embedded preview. Choose this setting to build the proxy image from the existing preview. If no preview exists, the proxy is made by rasterizing the EPS into an offscreen bitmap.

Rasterize The PostScript

Choose this setting to ignore the embedded preview. It is usually slower, but it produces the highest-quality results.

Note

When multiple instances of the same imported file are added to one document, every instance uses the proxy setting from the first instance.

## Importing graphics — Bitmap import options

For individual imported graphics, color-management choices can be applied when the document is being handled with color-management tools. You can also bring in a clipping path or alpha channel stored with an image made in Photoshop. That allows direct selection of the image and path edits without changing the graphics frame.

Note

Adobe InCopy itself does not provide color-management options, but these import choices matter when images placed in InCopy later move to InDesign.

Placing a PSD, TIFF, GIF, JPEG, or BMP file with Show Import Options enabled in the Place dialog box opens a dialog box with these choices:

Apply Photoshop Clipping Path

When this choice is unavailable, either the image was not saved with a clipping path or its file format cannot support clipping paths. If a bitmap image has no clipping path, one can be created in InDesign.

Alpha channel

Choose an alpha channel to import the portion of the image stored as an alpha channel in Photoshop. InCopy uses that alpha channel to build a transparent mask on the image. This choice appears only when the image includes one or more alpha channels.

Open the Color tab to view these choices:

Image imported without clipping path (left) and with clipping path (right)

Image imported without clipping path (left) and with clipping path (right)

Profile

If Use Document Default is selected, keep this choice as it is. Otherwise, pick a color source profile matching the gamut of the device or software that created the graphic. With that profile, InDesign can translate the graphic's color correctly for the output device gamut.

Rendering Intent

Pick how the graphic's color range should be scaled to the output device color range. Perceptual (Images) is usually the choice for photographs because it represents photo colors accurately. Saturation (Graphics), Relative Colorimetric, and Absolute Colorimetric work better for solid-color areas and do not reproduce photographs well. Rendering Intent choices are unavailable for bitmap, grayscale, and index-color mode images.

## Importing graphics — Portable Network Graphics (.png) import options

Placing a PNG image with Show Import Options enabled in the Place dialog box opens a dialog box divided into three import-settings areas. Two areas reuse choices found with other bitmap formats. The remaining area, PNG Settings, includes these choices:

Use Transparency Information

This choice is on by default when the PNG graphic contains transparency. If the imported PNG file has transparency, interaction with the graphic occurs only where the background is transparent.

White Background

For a PNG graphic without a file-defined background color, this choice is selected by default. It is enabled only when Use Transparency Information is active. When selected, white becomes the background color used while applying transparency information.

File Defined Background Color

If Use Transparency Information is selected for a PNG graphic stored with a non-white background color, this choice is selected by default. To avoid that default background color, click White Background to import the graphic over white, or turn off Use Transparency Information to import without transparency and show areas that are currently transparent. Some image-editing programs cannot define a non-white background color for PNG graphics.

Apply Gamma Correction

Choose this setting to adjust a PNG graphic's gamma, or midtone, values as it is placed. It helps match image gamma to the device gamma used for output or display, including a low-resolution printer, non-PostScript printer, or computer monitor. Turn the setting off to place the image without gamma correction. By default, it is selected when the PNG graphic was saved with a gamma value.

Gamma Value

Available only when Apply Gamma Correction is selected, this choice shows the gamma value saved with the graphic. To modify it, enter a positive number from 0.01 to 3.0.

For imported PNG files, the Image Import Options dialog box always bases its settings on the selected file, rather than on default or last-used settings.

## Importing graphics — Acrobat (.pdf) and Illustrator (.ai) import options

Placed PDFs keep their layout, graphics, and typography. Like other placed graphics, a placed PDF page cannot be edited inside InCopy. Layer visibility can be controlled for a layered PDF, and multiple pages from a multipage PDF can also be placed.

If a PDF saved with passwords is placed, InCopy asks for the needed passwords. A PDF saved with usage restrictions, such as no editing or printing, can still be placed when no passwords are required.

Placing a PDF, or a file saved with Illustrator 9.0 or later, with Show Import Options enabled in the Place dialog box opens a dialog box containing these choices:

Show Preview

Preview a PDF page before placing it. For a multipage PDF, use the arrows or type a page number below the preview image to show a specific page.

Pages

Choose the pages to place: the page currently shown in the preview, all pages, or a page range. Illustrator files also allow selection of the artboard to place.

Note

When multiple pages are specified, hold Alt (Windows) or Option (Mac OS) while placing the file to put all pages down at once, stacked on top of each other.

Crop To

Choose how much of the PDF page should be placed:

Bounding Box

Places the PDF page's bounding box, meaning the smallest area enclosing the page objects, including page marks. Bounding Box (Visible Layers Only) uses only the bounding box of the PDF file's visible layers. Bounding Box (All Layers) places the bounding box for the full PDF layer area, including hidden layers.

Art

Places only the PDF area defined by a rectangle that the author marked as placeable artwork, such as clip art.

Crop

Places only the PDF area that Adobe Acrobat displays or prints.

Trim

Identifies where the finished page will be physically cut during production, when trim marks exist.

Bleed

Places only the area that represents where page content should be clipped when a bleed area exists. This information is useful for production output. The printed page can still include page marks outside the bleed area.

Media

Places the area corresponding to the physical paper size of the original PDF document, such as the dimensions of an A4 sheet, along with page marks.

Options for cropping placed PDFs

A. Media B. Trim C. Bleed D. Content E. Crop F. Art

Options for cropping placed PDFs

Transparent Background

Select this choice to show text or graphics beneath the PDF page in the InCopy layout. Turn it off to place the PDF page on an opaque white background.

Note

If a frame that contains a PDF graphic has a transparent background, you can make it opaque later by applying a fill to the frame.

## Importing graphics — InDesign (.indd) import options

Placed INDD files keep the InDesign layout, graphics, and typography. The file is handled as an object, so it cannot be edited, but layer visibility can be controlled and chosen pages from a multi-page INDD file can be imported.

Placing an InDesign file with Show Import Options enabled in the Place dialog box opens a dialog box containing these choices:

Show preview

Preview a page before placing it. For a multi-page document, type a page number or use the arrows to preview a specific page.

Pages

Choose the pages to place: the previewed page, all pages, or a page range.

Crop to

Choose how much of the page or pages to place: the page itself, the bleed area, or the slug areas on the pasteboard.

## Importing graphics — Fit a graphic to its frame

After a graphic is placed or pasted into a frame, it appears by default at the frame's upper-left corner. When the frame and its content have different sizes, Fitting commands can be used to make them align properly.

Select the graphic with the Position tool. Choose Object > Fitting and then choose one of these commands:

Fit Content To Frame

Resizes the content to the frame and permits the content proportions to change. The frame stays the same size, but the content can look stretched when its proportions differ from the frame's.

Center Content

Centers the content inside a frame. Both the frame proportions and the content proportions are kept.

Fit Content Proportionally

Resizes content so it fits inside a frame while keeping the content proportions. The frame dimensions do not change. If content and frame proportions differ, empty space remains.

Fill Frame Proportionally

Resizes content until it fills the frame while preserving the content proportions. The frame dimensions do not change.

Note

The Fitting commands align the content's outside edges to the center of the frame stroke. With a heavy stroke weight, the content's outer edges are hidden. Stroke alignment can be adjusted to the center, inside, or outside of a frame edge.

## Importing graphics — Links panel overview

The Links panel lists every file placed in a document. That includes local files on disk and assets managed on a server. Files pasted from a website in Internet Explorer, however, do not appear there.

InCopy also shows linked stories in the Links panel. Selecting a linked story there makes the Link Info section show details such as note count, managed status, and tracked-change status.

Links panel

A. Category columns B. Show/Hide Link Information C. One or more instances modified icon D. Modified icon E. Missing-link icon F. Embedded-link icon

Links panel

If a graphic is used several times in the document, its links are grouped below a disclosure triangle in the Links panel. Links are also grouped below a disclosure triangle when a linked EPS graphic or InCopy document itself contains links.

A linked file can be shown in the Links panel in these ways:

Up to Date

An up-to-date file has an empty Status column.

Modified

This icon indicates that the file version on disk is newer than the version in the document. For example, it appears after a Photoshop graphic is imported into InCopy and then the original graphic is edited and saved in Photoshop by you or another person.

A slightly different Modified icon appears when one or more instances of a changed graphic are updated while other instances are not.

Missing

The graphic is no longer at the location from which it was imported, even though it may still exist elsewhere. Missing links can result when the original file is deleted or moved to another folder or server after import. Until the original is found, you cannot tell whether the missing file is current. Printing or exporting while this icon appears may prevent full-resolution output for that file.

Embedded

Embedding a linked file's contents pauses management operations for that link. If the selected link is undergoing an "edit in place" operation, this option is unavailable. Unembedding restores management operations for the link.

When a linked object is absent from a particular document page, location codes identify where it is: PB (pasteboard), MP (parent page), OV (overset text), and HT (hidden text).

Links panel video tutorial: www.adobe.com/go/lrvid4027_id.

## Importing graphics — Use the Links panel

- To show the Links panel, choose Window > Links. In the panel, linked files and automatically embedded files appear by name.
- To choose and view a linked graphic, select a link in the Links panel, then click the Go To Link button, click the link's page number in the Page column, or choose Go To Link from the Links panel menu. InCopy centers the view on the selected graphic. To view a hidden object, show its layer, or its condition when it is anchored.
- To expand or collapse nested links, use the triangle icon to the left of the link. Nested links appear when one graphic is used multiple times in a document, or when links are inside the linked EPS graphic or InCopy document.
- For sorting panel links, click a category title at the top of the Links panel. Clicking the same category again reverses the sort. For example, clicking the Page category arranges links from the first page through the last; clicking Page again reverses that order. Use Panel Options to add columns to the Links panel.

## Importing graphics — Work with Links panel columns

Additional categories, including Creation Date and Layer, can be shown in the Links panel to provide more graphic information. For each category, you decide whether that information appears as a Links panel column and whether it appears in the Link Info section at the bottom of the Links panel.

From the Links panel menu, choose Panel Options. Under Show Column, select the check boxes for columns you want to add to the Links panel.

Folder 0 is the folder containing the linked file; Folder 1 is the folder containing Folder 0, and so on.

Under Show In Link Info, select the check boxes for details to show in the Links panel's bottom Link Info section. Click OK.

Column order can be changed by selecting a column and dragging it to a new location. To adjust a column's width, drag its boundary. Click a category title to sort links by that category in ascending order, and click again for descending order.

## Importing graphics — Change the Links panel rows and thumbnails

Choose Panel Options from the Links panel menu. For Row Size, choose Small Rows, Regular Rows, or Large Rows. For Thumbnails, decide whether graphic thumbnail previews show in the Name column and in the bottom Link Info section of the Links panel. Click OK.

## Importing graphics — Display link information

The Links panel's Link Info section shows details for the selected linked file.

Note

To adjust which details appear in the Links panel's Link Info section, open Panel Options from the Links panel menu and turn on entries in the Show In Link Info column.

To reveal the information, double-click a link. You can also select a link and click the Show/Hide Link Information icon, shown as the triangle on the panel's left side.

## Importing graphics — View metadata via the Links panel

Metadata stored in a linked or embedded file can be viewed through the Links panel. Metadata associated with a linked file cannot be edited or replaced there.

In the Links panel, select a file, then choose Utilities > XMP File Info from the panel menu.

## Importing graphics — Update, restore, and replace links

The Links panel lets you inspect link status and replace files with updated files or alternate files.

Updating or reestablishing, also called relinking, a file link preserves transformations made in InCopy when Relink Preserved Dimensions is selected in the File Handling preferences. For example, after importing a square graphic and rotating it 30°, relinking it to an unrotated graphic makes InCopy rotate the replacement 30° so it matches the layout of the graphic it replaces.

Note

Placed EPS files can include OPI links, which appear in the Links panel. Do not relink OPI links to any files other than those the EPS file creator intended, because doing so can create problems with font downloading and color separations.

## Importing graphics — Choose how relinked graphics are scaled

During relinking, a replacement graphic can inherit the dimensions of the graphic it replaces, or it can come in at its native size.

On Windows, open Edit > Preferences > File Handling. On Mac OS, open InCopy > Preferences > File Handling.

Enable Preserve Image Dimensions When Relinking to make replacement images use the same displayed size as the outgoing images. Turn the option off when relinked images should display at their actual size.

## Importing graphics — Update modified links

When resolving a missing link, InDesign searches first in the folder where another file was relinked during the current session. It then checks the folder that contains the document, and if the link is still unresolved, it checks the document folder's parent.

Modified links are also known as "out of date" links.

In the Links panel, use one of these approaches:

For particular links, select one or more entries carrying the modified-link icon. Choose Update Link from the Links panel menu, or click the Update Link button.

For every modified link, choose Update All Links from the Links panel menu. Another option is to select a modified link, then Alt-click (Windows) or Option-click (Mac OS) the Update Link button.

For a single instance of a graphic used several times in the document, select only the sublink and choose Update Link. Selecting the "parent" link lets you update every link that points to the changed graphic.

## Importing graphics — Replace a link with a different source file

In the Links panel, select any link and either click the Relink button or choose Relink from the Links panel menu. When the selected item is a "parent" link for multiple instances, use Relink All Instances Of [Filename] from the Links panel menu.

Managed stories disable Relink until the story has been checked out.

In the dialog box, enable Search For Missing Links In This Folder when InCopy should inspect that folder for files whose names match other missing linked files. Leaving the option off relinks only the selected image. Use Show Import Options when you need to set how the replacement source file is imported. Find the new source file and double-click it. If Show Import options was selected, set the import options. (See Import options for graphics.)

## Importing graphics — Restore missing links

To recover a missing link, choose an entry carrying the missing link icon in the Links panel, and use the Relink button. In the dialog box, enable Search For Missing Links In This Folder so missing files in the specified folder are relinked. Find the file and double-click it.
