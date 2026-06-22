# Create And Manage Parent Pages, Create And Manage Book Files

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About Parent Pages; Create and apply parent pages; Use parent page overlays; Edit parent pages; Copy parent pages; Delete parent pages; Manage parent items; Import parent pages; Create and save book files; Add documents to book files; Remove or replace book documents; Synchronize book documents; Convert book files from previous InDesign versions; helpx_adobe_com_indesign_desktop_create_and_organize_pages_create_and_manage_book_files_synchronize_book_documents_html.

## About Parent Pages

Use Parent Pages in Adobe InDesign to build repeated page structure once, then apply it across documents without duplicating the same layout work.

Instead of copying a header through many pages by hand or revising a footer in every location, set up Parent Pages as the shared layout source. They keep documents visually consistent while still allowing individual pages to be customized when a local change is necessary.

A Parent Page (previously known as a Master Page) is a reusable template for multiple pages. Elements placed there, including logos, page numbers, headers, footers, and placeholder frames, show up automatically on each document page that uses that parent. InDesign displays those parent items with a dotted border so they can be distinguished from ordinary page content, and they cannot be selected until you override them.

Edits on a Parent Page propagate immediately to every related page, which helps preserve consistency in long documents. Parent Pages can use more than one layer. A parent item on a given layer sits behind items on the matching layer of a document page, while moving a parent item to a higher layer places it ahead of content on lower layers.

Create several parents when you want to test alternate layout directions, or store parents inside templates to make new document setup faster. Parent Pages may contain empty frames used as placeholders, and parent-level margin or column changes can drive layout adjustment on pages connected to that parent. Automatic page numbers added to a parent resolve to the proper page or section number wherever that parent is applied.

## Create and apply parent pages

Create Parent Page templates in Adobe InDesign and apply them so layouts, headers, and other recurring elements remain consistent.

Parent Pages act as reusable layout templates for repeated design components throughout a document. Each new InDesign document starts with the default parent page A-Parent, and you can add more parents whenever the layout needs them. Parent Pages hold recurring objects such as headers, footers, page numbers, logos, and guides, and those objects update automatically on every page that uses the parent.

### Create a parent page from scratch

Open Window > Pages.

From the panel menu icon, choose New Parent.

Enter a prefix of up to four characters so the parent can be identified in the Pages panel.

For Based On Parent, choose None when the new parent should begin blank.

Set the number of pages for the parent spread, from 1 to 10, and select OK. The new parent spread is added to the Parents section of the Pages panel. You can then place text frames, graphics, page numbers, and other items that should recur on multiple pages.

### Create a parent from an existing page or spread

Open Window > Pages.

Move the full spread from the document pages section into the Parents section of the panel.

Open the panel menu icon, then choose Parent Pages.

Choose a spread, open the panel menu icon, and choose Save As Parent. The new parent includes every object from the selected page or spread. If the source page was already using a parent, InDesign automatically bases the new parent on that parent.

### Create a parent based on another parent

When one parent is based on another, the child parent receives the parent's elements. Parent edits update the child pages and any document pages associated with them automatically. To make a variation without losing the shared structure, override selected elements on the child parents.

Open Window > Pages.

In the Parents section, choose the parent spread you need to change.

Open the Pages panel menu icon, then choose Parent Options for [parent name].

For Based On Parent, choose the parent that should serve as the base.

Select OK.

### Apply a parent to a single page or spread

Open Window > Pages.

Drag the parent page onto the document page.

When a black rectangle outlines the target page, release the mouse.

### Apply a parent to multiple pages

Open Window > Pages.

In the Pages panel, choose the document pages that should receive a different parent.

Hold Alt (Windows) or Option (macOS) while selecting a parent page.

## Use parent page overlays

Use parent page overlays in Adobe InDesign to line up parent elements when the document page size and parent page size are not the same.

With a parent page overlay, parent items can be shifted on differently sized pages without editing the parent page itself. When the overlay is active, a blue-bordered box marks the parent page boundary so items such as headers or page numbers can be aligned.

Choose the Page tool.

Select the document page to adjust in the layout window.

In the Control panel, choose Show Parent Page Overlay.

Drag an edge of the overlay box to move the parent page content on the document page.

## Edit parent pages

Use parent page editing in Adobe InDesign to revise recurring objects, maintain names and spreads, and insert breaks that control text flow.

Parent pages function as document templates. Changes made on a parent page flow through the document, which makes them useful for revising repeated objects such as logos, page numbering, or layout grids. If a parent page object is overridden or detached on an individual page, that local object may stop reflecting later changes from the parent page.

### Resize parent pages

Open Window > Pages to display the Pages panel.

Create a parent page, or double-click the existing parent you need to edit.

Adjust the parent page layout in the document window.

To resize the parent page, select it with the Page tool and change the required dimensions in the Control panel.

Multiple views can help you watch parent edits affect document pages. Choose Window > Arrange > New Window for [file name], then choose Window > Arrange > Tile. Set one view to a page and the other to the parent applied to that page. Edit the parent, then watch the page update.

### Change parent page options

Parent page options define names, prefixes, and relationships between parent pages. In complex documents, these settings keep parent page systems organized.

Open Window > Pages.

In the Pages panel, choose the parent spread you want to edit.

Choose Parent Options For <parent name> to open the Parent Options dialog box.

Change the Prefix field to update the identifier shown beside document page icons, using up to four characters.

Change the Name field to update the descriptive name shown in the Pages panel.

From the Based on Parent menu, choose a different parent, or choose None to remove the base parent.

Change the Number of Pages value to adjust the parent spread length, up to ten pages.

Select OK.

Note

Document pages that use a parent spread are not automatically adjusted when the parent spread's page count changes. You may need to apply the revised parent again to the affected document spreads.

## Copy parent pages

Duplicate parent pages within one document, or move them between Adobe InDesign files, when you want to reuse an established layout.

Copying parent pages supports layout variations and lets consistent designs move between documents. A parent can be copied inside the current document or from another document, then used as the starting point for a new parent. Parent pages can also be brought into other documents while synchronizing a book or importing parent pages from another file.

### Copy a parent within a document

In the Pages panel (Window > Pages), find the parent spread you want to copy.

Drag the parent spread's page name onto the Create new page icon at the bottom-right of the panel.

Another way to duplicate a parent page is to right-click the parent page name and choose Duplicate Parent Spread <spread name> from the context menu. When a parent page is duplicated, InDesign gives the copy the next available letter as its page prefix. For example, duplicating A-Parent creates a copy named B-Parent.

### Copy or move a parent to another document

Open the document that will receive the parent. Then open the document that contains the parent you want to copy.

In the source document, open the Pages panel (Window > Pages).

Choose the parent you want to move or copy.

Choose Layout > Pages > Move Parent, then choose the destination document name from the Move to menu.

To delete the page or pages from the source document after the move, choose Delete Pages After Moving, then select OK.

## Delete parent pages

Remove unused parent pages in Adobe InDesign when you need to manage the document and keep the parent page library clean.

Delete parent pages that are no longer needed to keep the parent collection tidy. Before removal, confirm that the parent layout is unnecessary or has been replaced by another parent on the document pages. After the document is saved, deleting a parent page is permanent and cannot be undone.

Display the Pages panel by choosing Window > Pages.

In the Pages panel, choose one or more parent page icons for deletion. To choose every unused parent page, open the panel menu icon, then choose Parent Pages > Select Unused Parents.

Move the selected parent pages onto the bottom-right Delete selected pages icon. Another option is to open the panel menu icon, then choose Delete Parent Spread from the Pages panel menu.

When a parent is deleted, InDesign applies [None] to any document page that had used the deleted parent.

## Manage parent items

Override parent page objects in Adobe InDesign when you need to control updates, restore or detach overridden items, or hide parent items.

### Override specific parent items on a page

An override creates an editable document-page copy of a parent item while preserving its link to the original. You can change selected attributes, and only those changed attributes stop updating. The remaining attributes continue to follow the parent until they are overridden. Removing overrides returns items to match the parent again.

Overrides can apply to frame content, strokes and fills, corner options, transformations, lock state, text frame options, effects, and transparency.

Open a document and confirm that the Pages panel is visible (Window > Pages).

Open the Pages panel menu icon, and make sure Parent Pages > Allow Parent Item Overrides on Selection is selected.

Hold Ctrl + Shift (Windows) or Command + Shift (macOS), then select the parent item on the document page.

Edit the selected item with the formatting or transformation tools you need.

### Override all parent items on a spread

For threaded text frames, overriding the thread affects all visible frames in that thread at the same time, even when those frames are on different pages in the spread.

In the Pages panel (Window > Pages), target the spread where every parent item should be overridden.

Open the Pages panel menu icon, then choose Override All Parent Page Items.

Select any parent items you need and modify them.

### Restore overridden items

Restore overridden items when they should match the parent again. This removes the local copy, reapplies the parent item, updates automatically, and shows the item with a dotted border. You can restore selected items or every item on one spread, but not the whole document in a single operation.

Display the Pages panel by choosing Window > Pages.

Choose one or more pages in the Pages panel where overrides should be removed.

Open the Pages panel menu icon, then choose Parent Pages > Remove All Local Overrides.

### Detach parent items

After an object is detached, parent pages no longer control it, so later parent edits cannot alter that item and you can customize it completely.

Choose detaching when the page item must stop inheriting from its parent page. The link is removed entirely; parent updates will not reach the object. To reconnect that content, remove the object and apply the parent again.

In the Pages panel (Window > Pages), display the page that contains the parent item you need to detach.

Hold Ctrl + Shift (Windows) or Command + Shift (macOS), then select the parent item so it becomes overridden.

Keep the item selected, open the Pages panel menu icon, and choose Detach All Objects from Parent. When Detach All Objects from Parent is disabled, the selected spread does not contain overridden objects.

### Hide parent items

On selected pages, hiding parent items suppresses those items for screen display, printing, and export while the parent remains assigned. The items stay linked and unchanged, unlike objects that are overridden or detached. Use this workflow when a layout needs a local variation without breaking the object away from its parent.

Choose Window > Pages.

In the Pages panel, select the pages or spreads where the parent items should be hidden.

Open the panel menu icon, then choose Parent Pages > Hide Parent Items.

To bring those parent items back into view, open the panel menu icon and choose Parent Pages > Show Parent Items.

## Import parent pages

In Adobe InDesign, parent page designs can be imported from outside files so separate documents can keep matching layouts.

Bring parent pages in from another InDesign document one at a time or as a group instead of recreating them. Parent names that are unique in the destination document are left as they are.

During the first import, InDesign links the documents and keeps the relationships among parent pages and overridden items available for later imports. If matching parents are imported after overrides exist but before such a link is present, those overridden items can become detached, so load parents before making overrides.

Open a document and confirm that the Pages panel is showing. If it is hidden, choose Window > Pages.

Open the Pages panel menu icon, then choose Parent Pages > Load Parent Pages.

Browse to the InDesign document that contains the parent pages to import.

Select that document, then choose Open.

If the loaded parent uses the same name as an existing parent in the current document, choose one option in the Load Parent Page Alert dialog box:

- Replace parent pages: replaces destination parent pages that share the same names.
- Rename parent pages: gives the imported parents new prefixes based on the next unused letters.

## Create and save book files

Adobe InDesign can collect several documents into one book file so page numbering, styles, and output stay coordinated.

A book file treats separate InDesign documents as parts of one project while each document remains its own file. This works well for long publications and shared production, and a selected style source can carry common formatting across the book.

### Create book files

Choose File > New > Book.

Enter a book filename and pick where it should be saved.

Choose Save. InDesign creates the book file with the INDB extension and opens the Book panel with the new empty book displayed.

### Save book files

Book files contain the arrangement and configuration for a project made from multiple documents, rather than storing the document contents themselves. They record document sequence, numbering, synchronization choices, and the style source while the separate INDD files stay independent.

The INDB format is used for book files; save the file whenever you change the book structure or document order.

To write updates into the current book file without changing its name, open the Book panel menu icon and choose Save Book.

To create a renamed copy of a book file, choose Save Book As from the Book panel menu, specify the new filename and location, and choose Save.

Note

When book files are shared through a server, use a file management process so collaborators do not accidentally overwrite one another's updates.

### Open book files in Explorer or Finder

While using book files, you may need to find the linked source documents for delivery, backup, or checking. The Reveal command opens the folder that holds the selected document so you do not have to locate it by hand.

Open the book file in InDesign.

In the Book panel, select the document that you need to find.

Open the panel menu icon and choose Reveal in Explorer (Windows) or Reveal in Finder (macOS). The system file browser opens at the storage location with that document shown.

Run Reveal on each document in a book when you need to confirm that every file sits in the correct project folder before packaging or archiving.

## Add documents to book files

In Adobe InDesign, the Book panel is where you add documents that share formatting and page numbering.

Book files gather multiple InDesign documents into a single project structure, which suits long-form work such as magazines or manuals. After the book file exists, individual documents are added to build that structure.

Every added document remains a separate file while taking part in shared styles, swatches, and page numbering. Convert Adobe PageMaker or QuarkXPress documents to InDesign before adding them, because book files do not convert those formats automatically.

Open the book file so the Book panel is visible.

Use the panel menu icon, then choose Add Document.

In the file browser, browse to and select one or more InDesign documents.

Choose Open to place the selected documents in the book.

When the selected document was made in an older InDesign version, InDesign converts it to the current version. In the Save As dialog box, enter a new filename or keep the existing filename, then choose Save.

Tip

- To add files quickly, drag InDesign document files from Windows Explorer or macOS Finder directly onto the Book panel. While dragging from another book, hold Alt (Windows) or Option (macOS) to copy the document reference instead of moving it.
- To see a document's full file path, hover over its name in the Book panel. For more information, open the panel menu icon and choose Document Information.

## Remove or replace book documents

Adobe InDesign provides Book panel commands for changing document lists and substituting files within book collections.

Removing a document takes only its reference out of the Book panel; replacing a document exchanges one file for another at the same point in the book order. In both cases, the original InDesign files remain on disk and only the list stored in the book file changes.

### Remove a document from a book

Open an InDesign book file with the INDB format.

In the Book panel, select the document name.

Open the panel menu icon, then choose Remove Document.

### Replace a document in a book

Open an InDesign book file with the INDB format.

In the Book panel, select the document that should be replaced.

Open the panel menu, then choose Replace Document.

Browse to the replacement InDesign file, select it, and choose Open. The replacement appears in the Book panel at the same position as the document it replaced.

Note

When styles or formatting in the replacement document differ from the book's style source, synchronize the book to keep formatting consistent.

## Synchronize book documents

Use the Adobe InDesign style source to refresh styles, swatches, and parent pages throughout every document in a book.

During synchronization, shared items from the style source are applied by replacing matching items, adding items that are missing, and leaving unrelated items alone. Closed documents are updated without intervention; open documents still need to be saved manually.

Synchronize before extensive overrides are created so parent page overrides are retained. When sources or names change, either keep one style source or turn off parent page synchronization.

### Select synchronization options

Open an InDesign book file with the INDB format.

From the Book panel menu, choose Synchronize Options.

Choose the items that should be copied.

Enable Smart Match Style Groups so uniquely named styles are not duplicated after moving into or out of style groups.

Tip

Include every style that other styles reference, so synchronization covers the related categories completely.

Choose OK.

### Synchronize documents with the style source

Open an InDesign book file with the INDB format.

In the Book panel, click the blank box next to a document to make it the style source.

After that assignment, the style source icon appears beside the document.

The style source icon is shown next to the document once it has that role.

Select the documents that should synchronize with the style source. To synchronize the whole book, select any blank area.

To keep unique parent page items intact, leave those documents out of synchronization or create parent pages that use different names.

Choose Synchronize Selected Documents or Synchronize Book from the panel menu. InDesign applies the specified elements from the style source to every selected document.

## Convert book files from previous InDesign versions

Current Adobe InDesign versions can open legacy book files by converting their format for ongoing work.

Opening a book file from an earlier InDesign version causes the application to update the book file (.indb) for the version you are using now. Only the book container is updated at that point, which keeps book features working correctly. The individual documents convert later when you synchronize, update page numbering, or package the book. During conversion, you decide whether the original files are kept or overwritten.

Use conversion when teams collaborate across different InDesign versions or when older projects need to be prepared for future use. Older InDesign versions cannot open newer book files, so backward sharing requires exporting documents to IDML.

### Open and save the legacy book file

Choose File > Open.

Locate the book file made in the earlier InDesign version and choose Open. If the book's documents were saved in older formats, InDesign shows a warning.

Open the panel menu icon, then choose Save Book As.

Enter a new name for the converted book file if you want to keep the original, or keep the same name to overwrite it.

Choose Save. The book file is updated to the current InDesign format, and the separate documents stay in their original formats until they are converted.

### Convert documents within the book

Open the converted book file.

Open the Book panel menu icon, then enable or disable Automatic Document Conversion for your workflow. When Automatic Document Conversion is enabled, InDesign converts and overwrites each document automatically. When it is disabled, the Save As dialog box appears for every document so you can keep the originals or overwrite them.

To convert every document in the book, choose Update Numbering > Update All Numbers from the panel menu.

Tip

As another method, open the panel menu icon and choose Synchronize Book to start document conversion and apply consistent styles throughout the book.

## helpx_adobe_com_indesign_desktop_create_and_organize_pages_create_and_manage_book_files_synchronize_book_documents_html

Search
Last updated on Apr 27, 2022

The page is unavailable; go to Adobe Support for help.

ページが見つかりません。ヘルプについては、アドビサポートにアクセスしてください。

Seite nicht gefunden. Hilfe erhalten Sie vom Adobe-Support.

Page introuvable. Pour obtenir de l’aide, contactez l’assistance Adobe.

페이지를 찾을 수 없습니다. 도움이 필요하면 Adobe 지원에 방문하십시오.

Página no encontrada. Para obtener ayuda, visite Asistencia de Adobe.

Página não encontrada. Para obter ajuda, visite o Suporte da Adobe.

Страница не найдена. Обратитесь за помощью в службу поддержки Adobe.

未找到页面。如需帮助，请访问 Adobe Support。

找不到頁面。如需尋求協助，請造訪 Adobe 支援。

### Get help faster and easier

Sign in

New user?

Create an account › Manage account

Quick links

View all your plans
Manage your plans
View quick links
Hide quick links
