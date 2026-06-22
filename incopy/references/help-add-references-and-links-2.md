# Hyperlinks, Including Metadata Story

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Hyperlinks — Hyperlinks panel overview; Including metadata in a story — Work with metadata.

## Hyperlinks — Hyperlinks panel overview

InDesign can export hyperlinks in Adobe PDF or SWF output so a viewer can click a link and move to another place in the same document, another document, or a website. Hyperlinks exported from InCopy to PDF or SWF are inactive.

The hyperlink source may be text, a text frame, or a graphics frame. The destination may be a URL, file, email address, page text anchor, or shared destination. Each source points to one destination only, while one destination may be reused by many sources.

The source may also be hyperlinked text or a hyperlinked graphic. Destinations can be URLs, files, email addresses, pages, text anchors, or shared destinations. A single source cannot target more than one destination, but several sources may target the same destination.

Note

For source text generated from destination text, insert a cross-reference and refer to Cross-references for that workflow.

Hyperlinks

A. Hyperlink source B. List of hyperlinks in the current document C. Hyperlink status icons

Hyperlinks

### Hyperlinks — Open the Hyperlinks panel

- Choose Window > Interactive > Hyperlinks.
- Choose Window > Hyperlinks.
- Choose Window > Type & Tables > Cross-References.

### Hyperlinks — Sort hyperlinks in the Hyperlinks panel

From the Hyperlinks panel menu, choose Sort, then pick one of these choices:

Manually

Shows hyperlinks in the sequence they were added to the document.

By Name

Shows hyperlinks alphabetically by name.

By Type

Shows hyperlinks clustered by matching type.

### Hyperlinks — Display hyperlinks in smaller rows

From the Hyperlinks panel menu, choose Small Panel Rows.

### Hyperlinks — Create hyperlinks

Hyperlinks can target pages, URLs, text anchors, email addresses, and files. When a link points to a page or text anchor in another document, keep the exported files together in the same folder.

Note

To control hyperlink visibility, choose View > Extras > Show Hyperlinks or Hide Hyperlinks.

Note

Exported Adobe PDF files contain hyperlinks when Hyperlinks is selected in the Export Adobe PDF dialog box in InDesign. Exported SWF files contain them when Include Hyperlinks is selected in the Export SWF dialog box.

### Hyperlinks — Create a hyperlink to a web page (URL)

Several workflows can create URL hyperlinks. For any specified URL, valid Internet resource protocols include http://, file://, ftp://, and mailto://.

Note

A character style can be useful for hyperlinks. A common hyperlink treatment is underlined blue text.

Choose the text, frame, or graphic that will act as the hyperlink source. For example, select “See the Adobe website.” In the Hyperlinks panel, create the URL hyperlink by using one of these methods:

Enter or paste the URL name, such as http://www.adobe.com, in the URL text box, then choose New Hyperlink from the Hyperlinks panel. Set Link To to URL, choose appearance options, and click OK.

When a URL is already selected in the document, open the Hyperlinks panel menu and choose New Hyperlink From URL. In the Hyperlinks panel, double-click the hyperlink, set Link To to URL, choose appearance options, and click OK.

From the URL menu, choose a URL that was added earlier. The new hyperlink uses the same appearance as the earlier URL.

Open the Hyperlinks panel menu and choose New Hyperlink. Set Link To to URL, choose appearance options, and click OK.

Note

If a URL hyperlink fails in the exported PDF, the link may have been stored as a “Shared Destination.” In the Hyperlinks panel, double-click the hyperlink, set Link To to URL, turn off Shared Hyperlink Destination, and click OK.

### Hyperlinks — Create a hyperlink to a file

A file hyperlink opens its target file in the native application from the exported PDF or SWF file, such as Microsoft Word for .doc files.

The linked file must be reachable by anyone who opens the exported PDF or SWF. For example, when sending the exported PDF to a coworker, point to a file on a shared server instead of one stored on your hard drive.

Select the text, frame, or graphic that will serve as the hyperlink source. From the Hyperlinks panel menu, choose New Hyperlink, or use the Hyperlinks panel's bottom Create New Hyperlink button. In the New Hyperlink dialog box, set Link To to File. For Path, enter the pathname or use the folder button to find the filename and double-click it. Select Shared Hyperlink Destination if the file should remain available in the Hyperlinks panel for easy reuse. Set the hyperlink source appearance, then click OK.

### Hyperlinks — Create a hyperlink to an email message

Select the text, frame, or graphic that will serve as the hyperlink source. From the Hyperlinks panel menu, choose New Hyperlink, or use the Hyperlinks panel's bottom Create New Hyperlink button. In the New Hyperlink dialog box, set Link To to Email. For Address, enter the email address, such as username@company.com. For Subject Line, enter the text that should appear in the email message subject line. Select Shared Hyperlink Destination if the email message should remain available in the Hyperlinks panel for easy reuse. Set the hyperlink source appearance, then click OK.

### Hyperlinks — Create a hyperlink to a page

A page hyperlink can be created before any destination exists. Creating a page destination first, however, lets you define the page number and view setting.

Select the text, frame, or graphic that will serve as the hyperlink source. From the Hyperlinks panel menu, choose New Hyperlink, or use the Hyperlinks panel's bottom Create New Hyperlink button. In the New Hyperlink dialog box, set Link To to Page. For Document, choose the document that contains the destination. Saved documents that are open appear in the pop‑up menu. If the needed document is not open, choose Browse from the pop‑up menu, find the file, and click Open. For Page, enter the destination page number. For Zoom Setting, choose one of these view states for the linked page:

Select Fixed to use the magnification level and page position active when the link was created.

Select Fit View to make the visible portion of the current page become the destination view.

Select Fit In Window to show the current page inside the destination window.

Select Fit Width or Fit Height to show the current page width or height in the destination window.

Select Fit Visible to fit the page text and graphics to the window width, which usually hides the margins.

Select Inherit Zoom to open the destination window at the reader's current magnification level when the hyperlink is clicked.

Choose appearance options, then click OK.

### Hyperlinks — Create a hyperlink destination

A hyperlink destination is required only when the hyperlink or cross-reference points to a text anchor. A text anchor can refer to selected text or to the insertion point location; afterward, create the hyperlink or cross-reference that targets that destination. Page and URL hyperlink destinations can also be created, but those link types do not require one.

Created hyperlink destinations are not listed in the Hyperlinks panel. They are available in the dialog box shown while creating or editing hyperlinks.

To define a text anchor, place the insertion point with the Type tool or select the text range that should become the anchor.

Text on a master page cannot be used for an anchor destination.

From the Hyperlinks panel menu, choose New Hyperlink Destination. In the Type menu, choose Text Anchor. Enter a name for the text anchor, then click OK. Use any of these choices, then click OK:

Choose Text Anchor in the Type menu. Enter a name for the text anchor.

Choose Page in the Type menu. Enter the page number to jump to and the Zoom Setting. Type a page name, or choose Name With Page Number to have the destination named automatically from the page number and zoom setting.

Choose URL in the Type menu. Enter or paste a URL, such as http://www.adobe.com. Valid Internet resource protocols include http://, file://, ftp://, and mailto://.

### Hyperlinks — Create a hyperlink to a text anchor

Select the text, frame, or graphic that will serve as the hyperlink source. From the Hyperlinks panel menu, choose New Hyperlink, or use the Hyperlinks panel's bottom Create New Hyperlink button. Set Link To to Text Anchor. For Document, choose the document that contains the destination. Saved documents that are open appear in the pop‑up menu. If the needed document is not open, choose Browse from the pop‑up menu, find the file, and click Open. From the Text Anchor menu, choose the text anchor destination already created. Set hyperlink appearance options, then click OK.

### Hyperlinks — Create a hyperlink to any shared destination

Choosing Shared Destination from the Link To menu while making a hyperlink lets you use any named destination. A destination receives a name when a URL is added with the URL text box, or when Shared Hyperlink Destination is selected during creation of a URL, file, or email-address hyperlink.

Select the text, frame, or graphic that will serve as the hyperlink source. From the Hyperlinks panel menu, choose New Hyperlink, or use the Hyperlinks panel's bottom Create New Hyperlink button. In the New Hyperlink dialog box, set Link To to Shared Destination. For Document, choose the document that contains the destination. Saved documents that are open appear in the pop‑up menu. If the needed document is not open, choose Browse from the pop‑up menu, find the file, and click Open. Choose a destination from the Name menu. Set hyperlink appearance options, then click OK.

### Hyperlinks — Hyperlink appearance options

These settings control how the hyperlink or cross-reference source appears in the exported PDF or SWF file. In the InDesign document, the same appearance is visible after choosing View > Extras > Show Hyperlinks.

Character Style

Choose a character style for the hyperlink source. Character Style is available only when the source is selected text, not a selected frame or graphic.

For a cross-reference, a character style can be assigned while editing a cross-reference format. Character styles can also be assigned to building blocks inside a format. See Using cross-reference formats.

Type

Choose Visible Rectangle or Invisible Rectangle.

Highlight

Choose Invert, Outline, Inset, or None. These choices control how the hyperlink appears while being clicked in the PDF or SWF file.

Color

Choose a color for the visible hyperlink rectangle.

Width

Choose Thin, Medium, or Thick to set the hyperlink rectangle thickness.

Style

Choose Solid or Dashed to set the hyperlink rectangle appearance.

### Hyperlinks — Convert URLs to hyperlinks

URLs such as “www.adobe.com” can be found in a document and converted into hyperlinks.

From the Hyperlinks panel menu, choose Convert URLs To Hyperlinks. For Scope, choose among the entire document, the current story, and the current selection. If the hyperlink needs a character style, choose one from the Character Style menu. Use any of these controls, then click Done.

Click Find to move to the next URL.

Click Convert to change the current URL into a hyperlink.

Click Convert All to change every URL into a hyperlink.

### Hyperlinks — Manage hyperlinks

The Hyperlinks panel is used to edit, delete, reset, or locate hyperlinks. In InCopy, hyperlink management is available only when the story is checked out for editing.

### Hyperlinks — Edit hyperlinks

In the Hyperlinks panel, double-click the item to edit. In the Edit Hyperlinks dialog box, make the needed hyperlink changes, then click OK.

Note

For a URL hyperlink, select the hyperlink, change the URL in the URL text box, then press Tab or Enter.

### Hyperlinks — Delete hyperlinks

Removing a hyperlink leaves the source text or graphic in place.

In the Hyperlinks panel, select the item or items to remove, then click the Delete button at the bottom of the panel.

### Hyperlinks — Rename a hyperlink source

Renaming a hyperlink source changes its displayed name in the Hyperlinks panel.

In the Hyperlinks panel, select the hyperlink. From the Hyperlinks panel menu, choose Rename Hyperlink, then enter a new name.

### Hyperlinks — Edit or delete hyperlink destinations

Start with the document that contains the destination. From the Hyperlinks panel menu, choose Hyperlink Destination Options. In Destination, pick the destination name that needs revision. Then use the applicable control:

Click Edit, and adjust the destination as needed.

Click Delete when the destination should be removed.

After the destination changes or deletion are complete, click OK.

### Hyperlinks — Reset or update hyperlinks

Mark the text range, text frame, or graphic frame that should become the replacement hyperlink source; for instance, include extra text if the source needs to be broader. In the Hyperlinks panel, select the hyperlink. Then choose one of these actions:

Choose Reset Hyperlink in the Hyperlinks panel menu.

For hyperlinks that point to external documents, choose Update Hyperlink in the Hyperlinks panel menu.

### Hyperlinks — Go to a hyperlink source or anchor

- To jump back to the source for a hyperlink or cross-reference, highlight the item in the Hyperlinks panel and choose Go To Source in the Hyperlinks panel menu. InDesign selects the associated text or frame.
- To open the destination for a hyperlink or cross-reference, highlight the item in the Hyperlinks panel and choose Go To Destination in the Hyperlinks panel menu.

For a URL destination, InDesign opens your web browser or brings it forward and shows that address. For a text anchor or page destination, InDesign moves to that location.

### Hyperlinks — Editing hyperlinks imported from Word

After importing a Microsoft Word file that contains hyperlinks into an InDesign document, hyperlink URLs may show a box or border, for example www.adobe.com. The imported InDesign file also gets a blue swatch named Word\_`R0_G0_B255`. It also receives a “Hyperlink” character style, which applies underlining and the blue color to the text.

To clear the box, double-click the hyperlink in the Hyperlinks panel. Under Appearance, set Type to Invisible Rectangle, and click OK.

You may choose to remove the imported swatch as well. During that deletion, you can substitute another swatch. See Delete individual swatches.

Note

If you want to avoid bringing in that formatting, remove the hyperlinks from the URLs in Word before placing the Word document in InDesign. See your Word documentation. A second way is to add a “Hyperlink” character style to the InDesign document before import. During import, InDesign uses the style with the matching name by default.

### More like this

- Cross-references

## Including metadata in a story — Work with metadata

Metadata consists of standardized file details, including author name, resolution, color space, copyright, and keywords. Those details help streamline workflows and file organization.

About the XMP standard

Adobe Bridge, Adobe Illustrator, Adobe InDesign, and Adobe Photoshop use the Extensible Metadata Platform (XMP) standard as the basis for metadata. XMP is XML-based. Usually the data is written into the file itself; when that is not possible, it is written to a separate sidecar file. XMP lets Adobe applications and publishing workflows exchange metadata. For example, save one file's metadata as a template, then import that metadata into other files.

Metadata stored in formats such as Exif, IPTC (IIM), GPS, and TIFF is synchronized with XMP and described through it, making the information easier to view and manage. XMP also supports communication and storage for other applications and features, including version comments that Adobe Bridge can search.

Normally, metadata travels with the file when the file format changes, such as PSD to JPG. Files placed into an Adobe document or project keep their metadata too.

Note

The XMP Software Development Kit can be used to customize metadata creation, processing, and interchange. One example is adding fields to the File Info dialog box with the XMP SDK. The Adobe website has additional information about XMP and the XMP SDK.

Working with metadata in Adobe Bridge and Adobe Creative Suite components

Adobe Bridge relies on XMP metadata for many features used to organize, search, and track files and versions. You can work with metadata in Adobe Bridge either in the Metadata panel or in the File Info dialog box (InDesign) or Content File Info dialog box (InCopy).

Sometimes the same metadata property is shown in more than one view. A field might appear as Author in one place and Creator in another, but both names map to the same property. Workflow-specific customizations do not break the XMP standardization of those views.

### Including metadata in a story — Add metadata using the File Info dialog box

The current document's camera data, file properties, edit history, copyright details, and author information appear in the File Info dialog box, along with any custom metadata panels. Metadata can be entered directly in the File Information dialog box. Values typed into fields replace existing metadata and are applied to every selected file.

Choose File > File Info (InDesign) or File > Content File Info (InCopy). Use the tabs across the top of the dialog box to pick one of these categories: Note

Use the Right and Left arrows for tab scrolling; the down-pointing arrow opens a category list.

Description

Provides fields for file-level document details, including document title, author, description, and searchable keywords. For copyright details, set the Copyright Status pop-up menu to Copyrighted, then provide the copyright owner, notice text, and the URL for the rights holder.

IPTC

Contains four sections. IPTC Content covers visual content in the image. IPTC Contact contains photographer contact details. IPTC Image holds description data for the image. IPTC Status records workflow and copyright details.

Camera Data

Contains Camera Data 1 and Camera Data 2. Camera Data 1 shows read-only camera and capture-setting details, including make, model, shutter speed, and f-stop. Camera Data 2 shows read-only photo file details, including pixel dimensions and resolution.

Video Data

Shows video-file metadata, including video frame width and height, and provides fields for entries such as tape name and scene name.

Audio Data

Provides audio-file fields, including the title, artist, bit rate, and loop settings.

Mobile SWF

Shows mobile media details, including title, author, description, and content type.

Categories

Provides fields organized around Associated Press categories.

Origin

Holds news-oriented file details, including creation time and place, transmission data, special instructions, and headline details.

DICOM

Shows patient, study, series, and equipment details for DICOM images.

History

Shows the Adobe Photoshop history log for images saved with Photoshop. This tab appears only when Adobe Photoshop is installed.

Illustrator

Lets you set a document profile for print, web, or mobile output.

Advanced

Shows namespaces and property structures used for metadata storage, including file format plus XMP, Exif, and PDF properties.

Raw Data

Shows the file's XMP text.

Enter the metadata in any displayed field, then click OK to apply the changes.

### Including metadata in a story — Export metadata as an XMP file

Metadata can be saved as an XMP file for sharing. Exported XMP files work as templates for filling metadata in InCopy documents and in documents created by other XMP-enabled applications. Exported templates go to a shared location available to all XMP-enabled applications, and they are listed in the bottom pop-up menu of the File Info dialog box.

Choose File >File Info (InDesign) or File > Content File Info (InCopy). In the dialog box's bottom pop-up menu, choose Export. Enter a filename, pick a file location, and then click Save. Note

Metadata templates can be viewed in Explorer (Windows) or the Finder (Mac OS) by opening the File Info dialog box bottom pop-up menu and choosing Show Templates Folder.

### Including metadata in a story — Import metadata from an XMP file

An exported XMP template file can be imported into a document with different merge behavior: remove all current document metadata and add the imported values, keep everything except metadata that matches the import, or add matching metadata into what is already present.

Choose File >File Info (InDesign) or File > Content File Info (InCopy).

Using the dialog box's bottom pop-up menu, choose an XMP file, select an import option, and click OK.

As another route, use the dialog box's bottom pop-up menu to choose Import, pick an import option, click OK, and double-click the target XMP template file.

### Including metadata in a story — Edit metadata in image files

Captions generated for placed images in InDesign draw on metadata from the placed image. InDesign lets you edit document metadata, but not metadata inside placed files. For placed images, update metadata in the original application, in Finder or Explorer, or through Adobe Bridge or Adobe Mini Bridge.

On the image in InDesign, right-click (Windows) or Control-click (Mac OS), then choose Edit Original.

Edit With is another option; choose Adobe Illustrator, Adobe Photoshop, or a different application.

In the original application, choose File > File Info.

Change the metadata, then click OK.

To edit the image metadata from Adobe Bridge, select the image and choose File > File Info. See Add metadata using the File Info dialog box.
