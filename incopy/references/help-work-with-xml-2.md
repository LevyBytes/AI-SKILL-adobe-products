# Tagging Content Xml, Using Xml Files, Exporting Xml

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Tagging content for XML — Create and load XML tags; Using XML files — Open an XML file in InCopy; Exporting to XML — Export an InCopy file to XML.

## Tagging content for XML — Create and load XML tags

Set up or import tags before assigning them to page items, so each document item or content category has an XML identifier. Tags can be made directly or brought in from another source, including an InDesign document, InCopy document, or DTD file. The document can receive tags through any of these approaches:

Make a tag with the New Tag command.

Bring tags in from an XML file or another document.

Bring in a DTD file.

Use the Import XML command to bring in tags, and content when included.

The Tags panel with a list of available tags

The Tags panel with a list of available tags

### Tagging content for XML — Create an XML tag

Open the Tags panel by choosing Window > Utilities > Tags. Then pick one of these actions:

From the Tags panel menu, choose New Tag.

Use the New Tag button on the Tags panel.

Enter the tag name. The name has to satisfy XML naming rules; a space or illegal character in the tag name triggers an alert message. If the tag was created from the Tags panel menu, choose a tag color. If the New Tag button was used instead, change the tag color later to choose a color.

Note

Different tags may use the same color. After a tag is applied to a frame, that color is visible when you choose View > Structure > Show Tagged Frames; after a tag is applied to text in a frame, it appears when you choose View > Structure > Show Tag Markers. (Exported XML files do not include tag colors.)

Click OK.

### Tagging content for XML — Load XML tags from another source

Tag definitions can be loaded from an XML file, an InDesign document, or an InCopy document.

Note

When an XML file is loaded, InCopy adds its tags to the Tags panel automatically.

From the Tags panel menu, choose Load Tags. Pick the file that contains the tags to add to the Tags panel, and click Open.

### Tagging content for XML — Change tag name or color

In the Tags panel, double-click a tag name, or open Tag Options from the Tags panel menu. Edit the tag name or its color, and click OK.

Note

Locked tags cannot be renamed. Tags defined by a loaded DTD file are locked automatically by InCopy. To rename those tags, revise the DTD file and load it into the document again.

### Tagging content for XML — Tagging items

Tag the text and other exportable items, such as frames and tables, before exporting content to an XML file. Also tag any placeholder items you created for XML content that will be imported later. The Structure pane lists tagged items as elements.

XML elements and tags

A. Elements appear in the Structure pane. B. Tag markers surround text to which tags have been applied.

XML elements and tags

When tagging page items, keep these points in mind:

Text frames must receive a tag before the text inside them can be tagged.

Only one tag can be applied to a frame.

Threaded text frames use a shared tag for the whole thread, including overset text.

If you tag text inside a tagged element, such as a paragraph within a tagged story, the text becomes a child element of the existing Structure pane element.

When the Autotag button is used on an element inside a frame, InCopy also tags the frame with the tag selected in the Tagging Preset Options dialog box.

### Tagging content for XML — Tag text within a text frame

Choose View > Layout View. Confirm that the frame containing the text already has a tag. If the frame has not been tagged when you try to tag its text, InCopy applies default tags to the story. Then use one of these methods:

With the Type tool, select text inside a text frame; then choose a tag in the Tags panel. If the whole frame's text is selected, the tag goes onto the frame rather than the text block, unless Add Tag is selected in the Tags panel.

After selecting the text frame, table, table cells, or image that needs a tag, press the Autotag icon in the Tags panel so the default tag is assigned. (See Specify Autotag defaults.)

Use the Map Styles To Tags command to tag automatically any text that already has paragraph or character styles applied.

### Tagging content for XML — Tag text in tables

For XML export, tagging a table produces one table element plus automatically generated cell elements, one for each cell. Those cell elements are children of the table element.

Switch to View > Layout View. Place the cursor in the table, then use Table > Select > Table. In the Tags panel, choose the table's tag.

InCopy generates a cell element for every table cell, and you can show those elements in the Structure pane. The tag used for table cell elements comes from your tagging preset options.

If needed, apply a different tag to table cells.

For example, first-row cells can use a separate tag to mark them as heading cells. To tag cells, select the actual table cells in the document, and then choose a tag. Selecting cells in the table also selects the matching cell elements in the Structure pane.

Note

A table can also be tagged by selecting it and clicking the Autotag icon in the Tags panel. According to the Autotag default settings, the Table tag, or another tag you chose, is applied to the table immediately.

### Tagging content for XML — Tag content according to styles

Paragraph, character, table, and cell styles assigned to text can serve as XML tagging input. For instance, a paragraph style named Body can be linked to a tag named StoryText. After that, the Map Styles To Tags command can place the StoryText tag on every paragraph in the document that uses the Body paragraph style. Multiple styles may point to the same tag.

Note

The Map Styles To Tags command applies tags automatically, even on paragraphs and characters that already carry tags. Use manual tagging when existing tags need to remain unchanged.

Open Map Styles To Tags from either the Tags panel menu or the Structure pane menu. For every style in the document, choose the tag it should use.

Map Styles To Tags dialog box

Map Styles To Tags dialog box

For pairing styles with identically named tags, click Map By Name. The dialog box selects styles whose names match tag names exactly. Case matters for Map By Name; for example, Head1 and head1 are handled as separate tags. To reuse mappings from an InDesign file, click Load and choose the file. Turn Include options on or off as needed:

Parent Pages stories: Maps styles on the parent page to tags.

Pasteboard Stories

Maps styles in stories on the pasteboard to tags. Deselect this option when pasteboard stories should not be tagged.

Empty Stories

Maps styles in empty stories to tags. Deselect this option when styles in empty stories should be left untagged.

Click OK.

The XML tags you specified in the Map Styles To Tags dialog box are applied across the document to the selected paragraph, character, table, and cell styles.

### Tagging content for XML — Untag a page item

Use untagging when the tag should be removed but the item's content should stay.

Select the Structure pane element, or choose the page item in the document layout. Then use one of these controls:

Use Untag Element from the Structure pane menu.

Use the Untag button in the Tags panel.

### Tagging content for XML — Retag a page item

Retag an item when you want to swap its current tag without untagging it first.

Select the Type tool. Then use one of these methods:

Choose the text or text frame, then click a different tag in the Tags panel.

Put the insertion point in a tagged text frame that belongs to a story element, not to a child element. Choose Retag at the top of the Tags panel, then click a different tag in the Tags panel.

Select the whole tagged block of text, choose Retag at the top of the Tags panel, and click another tag. If Add Tag is selected at the top of the Tags panel before you click another tag, a new child element is added in the Structure pane.

### Tagging content for XML — Specify Autotag defaults

When a text frame, table, table cells, or image is selected and you click the Autotag icon in the Tags panel, InDesign assigns the selected item a default tag. Those defaults are set in the Tagging Preset Options dialog box.

When a text frame, table, table cells, or image is selected and you click the Autotag icon in the Tags panel, InCopy assigns the selected item a default tag. Those defaults are set in the Tagging Preset Options dialog box.

Note

InCopy uses a default tag when an element needs a parent element that does not exist yet. For example, if text inside an untagged text frame is tagged, InCopy tags the frame based on Tagging Preset Options. Default tags help InCopy keep the XML structure valid.

From the Tags panel menu, choose Tagging Preset Options. Set default tags for text frames, tables, table cells, and images.

Note

If the needed tag is not shown, choose New Tag from the menu and create one.

### Tagging content for XML — Map XML tags to styles

XML tags describe data only; they do not carry formatting instructions. After XML content is imported and placed, it still needs formatting. A common approach is linking XML tags with paragraph, character, table, or cell styles. For example, Byline can be mapped to the Author character style, so imported and placed XML content tagged Byline receives the Author character style automatically. Mapping tags to styles reduces the manual work needed to format imported XML content.

Not every tag has to be mapped to a paragraph or character style. Some elements may never appear in the layout, while others are simpler to format individually. Child elements also inherit the paragraph or character style assigned to the parent, so map parent and child elements separately to avoid confusing results.

Note

The Map Tags To Styles command reapplies styles across a document and can produce unwanted changes. Depending on its XML tag, text that formerly used one style can be reassigned to a different style. If some text has already been formatted, applying styles manually may be preferable so existing paragraph and character style choices are not replaced.

Use either the Tags panel menu or the Structure pane menu to open Map Tags To Styles.

A menu of styles appears for each tag in the Map Tags To Styles dialog box

A menu of styles appears for each tag in the Map Tags To Styles dialog box

Do any of the following:

To bring in another document's styles, tags, and mapping definitions, click Load, choose the document, and click Open.

To map tags one at a time, click a tag's Style column and choose a paragraph or character style from the menu. The paragraph symbol marks paragraph styles in the menu; an "A" marks character styles. Repeat for every tag you want to map.

To map tags automatically to styles with matching names, click Map By Name. Styles whose names are identical to tag names are selected in the Style column. A tag and style match only when both name and case are identical; H1 and h1, for example, are not treated as a match. If two different style groups contain the same style name, Map By Name does not work, and an alert asks you to rename one style.

Click OK.

### Tagging content for XML — Show or hide tagged frames or tag markers

In Galley and Story views, tag markers show where page items have tags. In Layout view, tagged frames show tagged items such as tables and images. The marker or frame color comes from the tag color.

In this example, all page items are tagged except for the subhead below the title.

In this example, all page items are tagged except for the subhead below the title.

Do any of the following:

To display tagged frames in color, choose View > Structure > Show Tagged Frames.

To turn off the color coding on tagged frames, choose View > Structure > Hide Tagged Frames.

To show colored brackets around tagged text, choose View > Structure > Show Tag Markers.

To hide colored brackets around tagged text, choose View > Structure > Hide Tag Markers.

### Tagging content for XML — Delete tags or elements

- To remove a tag from the Tags panel, drag it onto the Delete Tag icon at the panel bottom. If that tag is used on content, an alert appears. Choose another tag as the replacement, and click OK.
- To remove every unused tag, choose Select All Unused Tags from the Tags panel menu, then use the Delete Tag icon at the panel bottom.
- To remove an element from the Structure pane, select the element and use the Structure pane Delete icon, or use the Structure pane menu's Delete command. If the element holds content, an alert appears. Click Untag to keep the content in the document, or click Delete to remove both the element and its content.

Note

A tag that came from an imported DTD file cannot be removed until you remove that DTD file.

### More like this

- About XML
- About DTD files
- Add paragraph and character styles

## Using XML files — Open an XML file in InCopy

Any existing XML file can be opened in InCopy for editing and tagging.

Note

Ruby in XML files can be imported when the Ruby follows the W3C standard Ruby definition and uses the InDesign namespaces. InDesign uses this namespace:

xmlns:aid="http://ns.adobe.com/AdobeInDesign/3.0/_ver3.0"

Use File > Open, select the XML file you want to use, and click Open.

### Using XML files — Save an XML file as an InCopy story

An XML file can be saved as an InCopy story.

Open the XML file in InCopy, then choose File > Save Content As. Enter the file name and choose where it should be stored. Choose InCopy Document from Save As Type (Windows) or Save As (Mac OS), and click Save.

## Exporting to XML — Export an InCopy file to XML

Before converting InCopy stories to XML data, complete these tasks:

Create or load element tags.

Apply tags to items in stories.

Rearrange elements in the Structure pane, if needed.

You may export all XML content in the document or only part of it. Export is limited to tagged content.

If only part of the document should be exported, select the Structure pane element where the export should start. Use File > Export. Set Save As Type (Windows) or Format (Mac OS) to XML. Enter the file name, choose the location for the XML file, and click Save. In the Export XML dialog box, select UTF-8 or UTF-16 as the encoding scheme. Available choices include:

Include DTD Declaration

Exports the loaded DTD file together with the XML file. The control appears only after a DTD file has been loaded into the document.

View XML Using

Sends the exported file to a browser, XML-editing application, or text editor. Pick the browser or application from the list.

Export From Selected Element

Begins export at the Structure pane element you selected. This choice is available only when an element was selected before choosing File > Export.

Export Untagged Tables AS CASL XML

Writes untagged tables in CALS XML format.

Remap Break, Whitespace, And Special Characters

Writes break, whitespace, and special characters as decimal character entities instead of plain characters.

Apply XSLT

Applies a stylesheet for transforming the exported XML to HTML or another format. Use Browse (Windows) or Choose (Mac OS) to choose an XSLT file.

Click Export to export the XML file.

### Exporting to XML — Export tags only

Choose Save Tags from the Tags panel menu. Enter a name and choose a file location. Set Encoding to UTF-8, UTF-16, or Shift-JIS (for Japanese characters), then click Save. The saved tag set becomes XML.

### More like this

- Create and load XML tags
- Tagging items
- Rearrange structured elements
