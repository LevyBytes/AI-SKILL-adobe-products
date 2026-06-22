# Create An Index, References And Bookmarks

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create index entries; Manage and edit index entries; Generate and format an index; Index formatting options; Update an index; Add items manually to an index; Create image captions; Insert cross-references; Use cross-reference formats; Manage cross-references; Create bookmarks for PDFs; Rename or delete bookmarks; Arrange, group, and sort bookmarks.

## Create index entries

In Adobe InDesign, use index markers to tag material that should be included in a document index.

Index entries connect topics, meaning the terms readers look up, with page references or cross-references. Add them by inserting index markers into text; InDesign uses those markers when it builds the index. Markers appear at the insertion point or on selected text, and you can see them after choosing Type > Show Hidden Characters.

### Add a basic index entry

With the Type tool, put the insertion point where the index marker should go; alternatively, choose text for the index topic.

Select Window > Type & Tables > Index.

Select Reference.

Use the panel menu icon and choose New Page Reference.

For the first Topic Levels option, enter the main topic name, or confirm that the selected text is correct.

For subtopics, enter values in the second and third Topic Levels boxes to build hierarchy, for example animals, then cats, then calicos.

Pick the needed range in the Type menu; examples include Current Page, To Next Style Change, and For Next # of Paragraphs.

Use the Sort By options when you need to change how an entry sorts in the final index.

To emphasize an index entry, enable Number Style Override and specify a character style.

To add an index entry, choose one of these options:

- Add: adds the current entry while leaving the dialog box open.
- OK: adds the entry and closes the dialog box.

After entries are added, the Index panel preview area lists them with page numbers.

Note

Choosing Cancel after selecting Add does not remove the entries just created. Use the Undo command to remove those entries.

### Add a cross-reference entry

Use the Type tool to set an insertion point.

Select Window > Type & Tables > Index.

With Reference selected in the Index panel, use the panel menu icon and choose New Page Reference.

For the first Topic Levels option, enter the topic that should contain the cross-reference.

Set Type to the needed cross-reference prefix; examples include See also and See.

Enter the target topic name in Referenced.

Select Add.

### Index all occurrences of selected text

In the document window, select the text you want indexed.

Select Window > Type & Tables > Index.

Select Reference.

Turn on Book to create index entries for any open documents in the book.

Use the panel menu icon and choose New Page Reference.

Make sure the first Topic Levels field contains the selected text.

Use Add All. Matching is case-sensitive, and only whole-word matches are included. For example, cheetah does not match cheetahs or Cheetah.

### Create a new entry from an existing one

Put the insertion point, or select the text, where the index marker should be placed.

Select Window > Type & Tables > Index.

Select Reference, then find the entry you want to copy.

Select the entry. While holding Alt (Windows) or Option (macOS), choose Create a new index entry.

Revise the dialog box as needed, then choose Add or OK.

## Manage and edit index entries

In Adobe InDesign, modify topics, update references, and refine entries before you generate the final index.

Managing index entries helps keep the index consistent and accurate. Edit topics when multiple entries should update together, or adjust individual references as needed. Changes made in the Index panel remain when the index is regenerated, but edits made directly in the generated index story are overwritten. Use Topic mode for shared-topic edits and Reference mode for page references and cross-references.

### Edit a topic

To keep index references aligned, change the topic from Topic mode; every entry attached to that topic updates along with it.

Open Window > Type & Tables > Index.

Use the panel menu icon and choose Topic.

In the preview area, double-click the topic that needs changes.

In the Topic Options dialog box, revise the topic name or sort order.

Choose OK.

### Edit an individual index entry

Reference mode is for editing one entry while leaving other uses of the same topic untouched.

Open Window > Type & Tables > Index.

Choose Reference.

Find the entry in the preview area and select it.

Open it by double-clicking either the entry itself or its page reference icon.

Change the topic level, page range type, or cross-reference as required.

Choose OK.

### Delete an index entry

Clear entries you no longer want so the index stays easier to manage. Removing a topic-level entry also removes its page references and subentries.

Open Window > Type & Tables > Index.

Choose the entry you intend to remove.

At the bottom-right of the panel, choose Delete selected entry. To remove index markers from the document itself, open Type > Show Hidden Characters, select the marker, and press Delete.

Confirm the deletion if the entry includes sub-entries.

### Remove unused topics

After building the index, tidy the topic list by discarding topics that have no page references attached.

Open Window > Type & Tables > Index to display the Index panel.

Choose Topic.

From the panel menu icon, choose Remove Unused Topics.

### Find specific entries in the Index panel

Use the Index panel search controls to check an index marker's placement or adjust where it sits.

Open Window > Type & Tables > Index.

Use the panel menu icon and choose Show Find Field.

Enter the entry name in the Find field.

Move through matches with the up or down arrows.

### Locate an index marker in your document

Use hidden-character display and the Index panel when you need to jump from an entry to its marker in the document.

Turn on Type > Show Hidden Characters so index markers appear as blue anchor icons.

Open Window > Type & Tables > Index.

Choose Reference.

Select the entry for the marker you need to locate.

Use the panel menu icon and choose Go to Selected Marker. InDesign moves the insertion point to that marker's position in the document.

### Update capitalization across multiple entries

Keep capitalization uniform across the index when the same term appears in mixed forms.

Open Window > Type & Tables > Index.

Select an entry in the panel preview area.

Use the panel menu icon and choose Capitalize.

Choose one scope: Selected Topic only, Selected Topic and All Subtopics, All Level 1 Topics, or All Topics.

Choose OK.

### Import topics from another document

Bring in an existing topic list when several documents or books need consistent indexing vocabulary.

Open Window > Type & Tables > Index.

Use the panel menu icon and choose Import Topics.

Browse to the InDesign document that contains the topics and select it.

Choose Open.

### View all index topics in a book

Enable Book when you need the Index panel to show entries from every document in the book instead of only the current file.

Open the book file and each document it includes.

Open Window > Type & Tables > Index.

Choose Book.

Note

For a multi-document book, create the index across all documents. That lets you see every topic without importing the topics separately into each file.

## Generate and format an index

Use Adobe InDesign to collect index entries, apply formatting styles, and build a finished index story.

An index generation pass turns markers into an alphabetized, formatted list that includes correct page numbers and cross-references. Regeneration can refresh the result automatically, but manual edits made in the index story are not preserved.

Before you begin

Add index markers throughout the document first; for a book, open every relevant book file before generating.

### Generate the index story

Open Window > Type & Tables > Index.

Use the panel menu icon and choose Generate Index.

Set values for these options:

- Title: enter the wording that should start the index, such as Index or Guide.
- Title Style: choose the paragraph style from the menu that should format the index title.
- Replace Existing Index: enable this to refresh an index that already exists, or leave it off to place a separate new index.
- Include Book Documents: enable this for one index covering every document in the current book; leave it off to index only the current document.
- Include Entries on Hidden Layers: enable this when hidden-layer index markers should be included in the generated index.

Choose More Options to show additional controls for index formatting.

Choose OK.

When Replace Existing Index is off, a loaded text cursor icon appears. Place the index story like other text, or drag to make a new frame.

Note

Regenerating the index overwrites edits made directly in the generated index. To keep changes, edit the entries from the Index panel instead.

## Index formatting options

Review the formatting, style, and separator settings that Adobe InDesign offers during index generation.

Use this reference while setting up the Generate Index dialog box appearance options, or when a generated index does not match the design you expected.

All formatting choices are shown after you choose More Options in the Generate Index dialog box (use the Index panel menu icon, then choose Generate Index).

### Style assignment options

Use paragraph and character styles to shape the index's appearance. After the index is generated, revise those styles in the Paragraph Styles or Character Styles panel.

### Separator character options

Choose the characters used between index components. Pick the current separator and enter or select the character that should replace it.

### Special character input

To place special characters in separator fields:

- Open the separator field's context menu for common choices, including em space, thin space, em dash, and so on.
- Copy the needed special character from the Glyphs panel (Type > Glyphs) and paste it into the field.
- Enter metacharacters for specific symbols, for example ^m for em space.

## Update an index

Use Adobe InDesign regeneration to refresh index entries and keep them aligned as the document changes.

After an index exists, regenerate it so entries, topics, and page numbers are current. Make edits from the Index panel. Any direct changes in the generated index disappear the next time it is regenerated.

Open Window > Types & Tables > Index.

Change index entries in the panel or insert new index markers in the document.

With the Type tool, select or place the insertion point inside the text frame that contains the existing index.

Use the Index panel menu icon and choose Generate Index.

Enable Replace Existing Index.

Choose OK.

## Add items manually to an index

Use Adobe InDesign's index accessibility workflow when manually adding index text for EPUB (Reflowable) export.

Before you begin

Build the index with InDesign's index feature first so accessible markups are created.

Open Window > Type & Tables > Index and create an index.

Choose the Type tool, then add the items to the index text frame.

Open Window > Styles > Paragraph Styles.

Apply the relevant Paragraph Style to the newly added items: Index Title; Index Section Head; Index Level 1; Index Level 2; then Index Level 3; or Index Level 4.

Next, apply the relevant Index Paragraph Style to the manually added text items in the Index text frame.

Choose the manually added text items from the Index text frame again, then select the relevant Index Paragraph Style.

## Create image captions

Use metadata variables in Adobe InDesign to create live or static captions for images.

Captions add descriptive details to images so readers can interpret visuals in a layout. InDesign can build captions automatically from image metadata, including descriptions, filenames, or copyright details. Static captions can be edited manually, while live captions refresh when the image's metadata or placement changes.

### Set up caption settings

Open Object > Captions > Caption Setup.

In the Text Before field, enter any text that should come before the metadata.

Choose an option from the Metadata drop-down menu.

In the Text After field, enter any text that should follow the metadata.

Use the plus icon to add metadata rows and combine multiple metadata fields into one caption.

Choose an option from the Alignment drop-down menu.

In the Offset field, set the distance from the image frame edge to the caption.

Choose an option from the Paragraph Style drop-down menu.

From the Layer drop-down menu, choose the layer that should contain the caption.

Enable Group Caption with Image so the caption travels with the image when you move items in the layout.

Choose OK.

### Generate a caption from a placed image

With the Selection tool, select the image frame.

Use Object > Captions > Generate Live Caption when the caption should update automatically, or choose Generate Static Caption.

### Generate captions while placing images

Choose File > Place.

Turn on Create Static Captions.

Pick the image file, then choose Open.

Click in the document where the image should be placed.

Click the document a second time to add the caption text frame.

### Create custom caption variables

Choose Type > Text Variables > Define.

Use New for a new variable, or choose an existing variable and use Edit.

Set the Type field to Metadata Caption.

In Text Before, enter any text that should precede the metadata.

Choose the needed item from the Metadata drop-down.

In Text After, enter any text that should follow the metadata.

Choose OK to add the variable, then choose Done.

### Insert caption variables manually

With the Type tool, draw a text frame.

Choose Type > Text Variables > Insert Variable, then pick the required caption variable.

With the Selection tool, move the text frame until it touches or overlaps the image frame.

## Insert cross-references

Use Adobe InDesign cross-references to link related document sections through text anchors or paragraph styles.

Cross-references connect one section of a document to another while keeping referenced page numbers and text current after edits. In InDesign, you create them from paragraph styles or text anchors; when destination content is moved or changed, the references update automatically.

### Create a cross-reference to a paragraph

Choose the Type tool, then put the insertion point where the cross-reference should appear.

Choose Type > Hyperlinks & Cross-References > Insert Cross-Reference.

In Link To, choose Paragraph.

In Document, choose the file that contains the destination text. When that document is not open, choose Browse, find the file, and choose Open.

Choose [All Paragraphs] in the Paragraph Styles list to show every paragraph, then choose the target entry in the Paragraph Text list.

Choose the cross-reference format from the Format drop-down menu.

On PDF Appearance, set the exported PDF behavior for the cross-reference, including link type, highlight behavior, color, and border appearance.

On Accessibility, provide alternate text or set an ARIA role so assistive technologies receive the needed context.

Choose OK.

Choose Type > Show Hidden Characters to display the text anchor marker at the start of the destination paragraph. Keep that marker in place so the cross-reference does not become unresolved.

### Create a cross-reference to a text anchor

Choose the Type tool, then set the insertion point at the cross-reference location.

Choose Type > Hyperlinks & Cross-References > Insert Cross-Reference.

In Link To, choose Text Anchor.

In Document, choose the document that contains the destination text. If it is closed, choose Browse, locate the file, and choose Open.

Choose the destination from the Text Anchor drop-down menu.

Choose a cross-reference format from the Format drop-down menu.

On PDF Appearance, configure how the cross-reference works in the exported PDF, including link type, highlight behavior, color, and border appearance.

On Accessibility, add alternate text or choose an ARIA role for assistive technology support.

Choose OK.

## Use cross-reference formats

Customize Adobe InDesign cross-reference formats to control the display and automatic updating of referenced content in a document.

A cross-reference format determines the visible form of content linked to destination paragraphs or text anchors. These formats let you include and style pieces such as page numbers, paragraph text, and chapter numbers, which keeps references consistent as the document updates.

### Create a custom cross-reference format

Choose Window > Type & Tables > Cross-References.

Open the panel menu icon, then choose Define Cross-Reference Formats.

Choose the existing format closest to the one you need.

Type the format name in the Name field.

In Definition, enter the format manually or choose the add icon to insert predefined options.

Choose the at sign icon to pick from predefined options.

Choose an item from the Character Style for Cross-Reference drop-down menu.

Choose Save, then choose OK.

### Edit an existing cross-reference format

Choose Window > Type & Tables > Cross-References.

Open the panel menu icon, then choose Define Cross-Reference Formats.

Choose the format that needs editing.

Change the Name field if needed, then revise Definition by using the add icon or the at sign icon.

Choose Save, then choose OK.

### Apply character styles within cross-references

Choose Window > Styles > Character Styles.

Choose Create new style .

Choose Window > Type & Tables > Cross-References.

Open the panel menu icon, then choose Define Cross-Reference Formats.

Choose an existing format.

Choose the add icon, then choose Character Style. You will see the <cs name=””></cs> tag.

Place the character style name inside the cs name double quotes.

Put the needed text or building blocks between the cs tags.

Choose Save, then choose OK.

### Delete unused cross-reference formats

Choose Window > Type & Tables > Cross-References.

Choose the format to remove.

Choose the Delete selected cross-references icon.

Note

A Cross-Reference Format that is applied to cross-references in the document cannot be deleted. Remove those cross-references or switch them to another format before deleting it.

## Manage cross-references

Manage Adobe InDesign cross-references so references stay current, missing destinations can be repaired, and links remain accurate while the document changes.

Cross-references preserve navigation among related parts of a document, so they need attention as edits are made. Use the Cross-References panel to check status, refresh modified references, fix missing destinations, and keep formatting accurate across the document.

### Update cross-references

Choose Window > Type & Tables > Cross-References..

Choose the out-of-date cross-reference that should be updated.

To refresh every cross-reference, leave all cross-references unselected.

Choose the Update cross-references icon.

### Relink missing cross-references

Choose Window > Type & Tables > Cross-References.

Choose the cross-reference whose destination is missing.

Open the panel menu icon, then choose Relink Cross-Reference.

Find and choose the document that contains the destination text, then choose Open.

Use the displayed dialog box to relink the affected cross-references.

## Create bookmarks for PDFs

Create bookmarks in Adobe InDesign so exported PDFs give readers efficient navigation points.

Bookmarks become navigation entries in exported PDFs, helping readers jump among sections and important document locations. In InDesign, the Bookmarks panel lets you create and arrange those entries, improving navigation without placing a visible table of contents in the layout.

Tip

To keep bookmarks in the PDF while hiding a table of contents from readers, put the generated table of contents on the document's last page and omit that page when exporting the PDF.

Place the cursor in the text that should receive the bookmark link, or select the text to use for the bookmark label.

Choose Window > Interactive > Bookmarks.

In the Bookmarks panel, choose an existing bookmark when the new bookmark should be nested under it. With no bookmark selected, the new bookmark is placed at the end of the list.

Choose the Create new bookmark icon.

Choose Window > Pages.

In the Pages panel, choose the page that the bookmark should link to.

## Rename or delete bookmarks

Before exporting an Adobe InDesign document, clean up PDF navigation entries by renaming bookmarks or deleting the ones you do not need.

Bookmarks made in an InDesign document appear as navigation entries in exported PDFs. After creating PDF bookmarks, rename them to adjust navigation labels or remove unwanted entries before export so PDF navigation is simpler, without changing the source content.

### Rename a bookmark

Choose Window > Interactive > Bookmarks.

Choose the bookmark to rename.

Open the panel menu icon, then choose Rename Bookmark.

Enter the new name in the Name field, then choose OK.

### Delete a bookmark

Choose Window > Interactive > Bookmarks.

Choose the bookmark to remove.

Open the panel menu icon, then choose Delete Bookmark.

Choose OK to confirm the deletion.

## Arrange, group, and sort bookmarks

Organize bookmarks in Adobe InDesign to build a hierarchy for exported PDFs.

Bookmark organization in InDesign improves exported PDF navigation. You can group and reorder bookmarks so they follow the document structure. Changing bookmark hierarchy only changes their exported PDF order and does not modify the page layout. When a table of contents update generates bookmarks, InDesign moves those TOC-generated bookmarks to the end of the Bookmarks panel list.

### Nest bookmarks under a parent bookmark

Choose Window > Interactive > Bookmarks.

Choose the bookmark or bookmark range to nest.

Drag the selected bookmarks onto the bookmark that should become the parent.

A right-arrow appears beside the parent bookmark. Choose the arrow to expand or collapse the hierarchy.

### Reorder bookmarks in the list

Open Window > Interactive > Bookmarks.

Choose the bookmark that needs a different position, then drag it where it should appear.

When the black horizontal insertion bar is shown at the intended spot, release the mouse.

### Remove a bookmark from its nested position

Open Window > Interactive > Bookmarks.

Choose the nested bookmark that should no longer sit under its parent.

Move it below the parent bookmark and leftward until both bookmark entries use the same indentation level.

When the black bar marks the target placement, release the mouse.

### Sort bookmarks automatically by page order

Open Window > Interactive > Bookmarks.

Open the panel menu icon, then choose Sort Bookmarks.

## See also

- [Character Styles](uxp-character-styles.md)
- [Characters](uxp-characters.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
