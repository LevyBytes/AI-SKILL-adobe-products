# Add A Table Of Contents, Footnotes And Endnotes

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Indexes and references; Table of contents planning; Generate and maintain a table of contents; Create multiple tables of contents in a document; Customize table of contents style; Export a table of contents; Add interactivity to a table of contents; Create and manage footnotes; Change footnote numbering and layout options; Span footnotes across columns; Apply text wrap to footnotes; Create endnotes; Change endnote numbering and layout; Convert footnotes and endnotes.

## Indexes and references

### Add a Table of Contents

Table of contents planning

Generate and maintain a table of contents

Create multiple tables of contents in a document

Customize table of contents style

Export a table of contents

Add interactivity to a table of contents

### Footnotes and endnotes

Create and manage footnotes

Change footnote numbering and layout options

Span footnotes across columns

Apply text wrap to footnotes

Create endnotes

Change endnote numbering and layout

Convert footnotes and endnotes

### Create an Index

Create index entries

Manage and edit index entries

Generate and format an index

Index formatting options

Update an index

Add items manually to an index

### References and bookmarks

Create image captions

Insert cross-references

Use cross-reference formats

Manage cross-references

Create bookmarks for PDFs

Rename or delete bookmarks

Arrange, group, and sort bookmarks

## Table of contents planning

Use planning in Adobe InDesign to make table of contents (TOC) creation more efficient and to cut down later revisions.

Prepare the TOC structure before building it so generation and updates stay straightforward. When the plan is clear, the TOC remains consistent and needs less rework as document content shifts.

Because InDesign gathers TOC entries from paragraph styles, choose in advance which material belongs in the list and how those entries should be presented. A document can have a single main TOC or several separate lists, for example chapters, figures, or advertisers. Every TOC has its own style and collects entries from the paragraph styles assigned to it.

Apply paragraph styles consistently through the document or book files, since those styles are the basis for the TOC. In book workflows, verify the document sequence in the Book panel and synchronize styles so mistakes are less likely. Decide the formatting details, including indentation, spacing, and tab leaders, before generating the TOC so cleanup takes less time afterward.

Regenerate the TOC after content or layout edits. Make corrections in the original content rather than inside the TOC, because updating the TOC replaces manual changes. Multiple TOC styles can also be created when one document needs different lists.

Match the TOC design to the intended output. Print workflows rely on page numbers, interactive PDFs benefit from hyperlinks, and EPUB output needs an organized structure. Planning for the output format helps the TOC behave correctly across publishing targets.

## Generate and maintain a table of contents

In Adobe InDesign, build and refresh a table of contents (TOC) to keep document edits, headings, and page numbers accurate.

InDesign builds a TOC from document content, which makes heading and page-number maintenance easier. Use a TOC for chapters, sections, illustrations, or other entries that need page numbers. Each TOC exists as its own story and changes when it is regenerated, and one document can contain more than one TOC.

Before you begin

- Keep paragraph styles consistent and confirm that book files are arranged in the right order.
- For a single-document TOC, insert a new page at the intended location. In book workflows, create or open the TOC document and verify that the book includes it.

### Generate the TOC

Choose Layout > Table of Contents.

Use the TOC Style drop-down menu to pick the style you created, enter a name in the Title field, and select a paragraph style from the Style drop-down menu for the title formatting.

In the Other Styles list, double-click every paragraph style that should feed the TOC so it moves into the Include Paragraph Styles list. For each style that is included, choose an Entry Style to control the look of those entries.

Use the Page Number drop-down menu to define page-number display. Set the page-number behavior from the Page Number drop-down menu, then choose After Entry, Before Entry, or No Page Number.

Pick a character style from the Style drop-down menu to format the page numbers.

Choose a character type from Between Entry and Numbers, then select the character style that should appear between entries and numbers.

Keep the default Tab Character (^) when you want paragraph-style tab leader settings to be used. Then choose spacing styles from the Style drop-down menu.

Enable Replace Existing Table of Contents to refresh an existing TOC, or leave it off to add another TOC.

Select Save Style if you want to reuse these settings, then select OK.

Click in the document where the TOC should be placed on the page. InDesign puts each TOC in a separate text frame, allowing it to be formatted, moved, or managed on its own. Do not thread TOC frames with other text frames, because replacing a TOC also replaces the full threaded story.

### Update the table of contents

Open the document or book that includes the TOC.

Make any needed edits to the document or book file content.

Click the TOC text frame.

Choose Layout > Update Table of Contents. Updating replaces any edits made directly inside the TOC.

When a document includes several TOCs, click each TOC text frame and then choose Layout > Update Table of Contents.

## Create multiple tables of contents in a document

Build more than one table of contents (TOCs) inside a single Adobe InDesign document.

Separate TOCs are useful for magazines, books, or catalogs that require different lists for chapters, illustrations, or advertisers. Each TOC needs a distinct TOC style, which determines the paragraph styles it uses and the way its entries are formatted.

Choose Layout > Table of Contents, then select New.

Enter a style name in the TOC Style field.

Enter the heading text in the Title field; that text becomes the TOC heading.

Use the Other Styles list to double-click each paragraph style that belongs in the TOC. The chosen style is added to the Include Paragraph Styles list.

For every style shown in the Include Paragraph Styles list, select an Entry Style to set the formatting for those TOC entries.

Set any additional formatting, such as where page numbers appear, the spacing between entries and page numbers, and whether entries should be sorted alphabetically, then select OK.

To make several independent TOCs, run through the procedure again and give each TOC its own unique TOC style. InDesign places each TOC in a separate text frame so it can be formatted, moved, or managed independently.

Note

Do not thread TOC frames with other text frames. Replacing a TOC also replaces the complete threaded story.

## Customize table of contents style

Use table of contents (TOC) styles in Adobe InDesign to set the structure and formatting for multiple content lists.

TOC styles keep TOCs consistent by defining what content is included, how it is formatted, and how page numbers are handled. Use them for separate lists such as contents, illustrations, or advertisers, or to apply the same TOC setup in multiple documents.

Before you begin

Use consistent paragraph styles and determine which styles should be included.

### Create a new TOC style

Choose Layout > Table of Contents Styles, then select New.

Enter a name in the TOC Style field.

Enter the TOC heading in the Title field, then use the Style drop-down menu to choose a paragraph style for that title.

In the Other Styles list, double-click each paragraph style that should be part of the TOC so it is added to the Include Paragraph Styles list.

Select OK.

### Customize entry formatting

Set up paragraph styles for TOC entries before creating the TOC. Include tab stops and leaders, such as dots, in those styles so entry text lines up with page numbers.

Choose Layout > Table of Contents Styles, select the TOC style, and choose Edit.

In the Include Paragraph Styles list, click the paragraph style you need to format.

Select More Options to show the extra formatting controls.

From the Entry Style drop-down menu, choose a paragraph style for entries that use the selected source style.

Set Page Number placement by choosing Before Entry, After Entry, or No Page Number. If page numbers need character formatting, choose a style from the Style drop-down menu.

Use the Between Entry and Number field for the characters that should sit between entry text and the page number. The default value is a Tab Character (^t).

Select OK to keep the formatting edits.

### Import TOC styles from another document

Choose Layout > Table of Contents Styles, then select Load.

Browse to the InDesign document that contains the TOC styles you need to copy, select the file, and then select Open.

Select OK to bring in the styles. If the imported TOC style uses paragraph style names that do not match the current document, edit the TOC style and map the correct paragraph styles before creating the TOC.

### Configure advanced TOC style options

Choose Layout > Table of Contents Styles, select your style in the Styles list, and choose Edit.

Select More Options to display advanced settings.

In the Include Paragraph Styles list, choose a style and change its Level number to set the hierarchy, where Level 1 entries act as main headings and Level 2 entries act as subentries.

Enable Sort Entries in Alphabetical Order when entries should be alphabetical rather than arranged by page order. The Include Book Documents option is available only while working with documents in a book file. Enable that option to create one unified TOC from all book documents.

Enable Create PDF Bookmarks to add TOC entries automatically to the Bookmarks panel during PDF export.

Use the Numbered Paragraphs drop-down menu to decide whether numbered list entries in the TOC should Include Full Paragraph, Include Number Only, or Exclude Numbers.

Select OK.

## Export a table of contents

Export a generated table of contents (TOC) from Adobe InDesign as its own file.

Once a TOC has been created in InDesign, it can be exported separately for sharing or reuse. Confirm that the TOC has been generated; it works like ordinary text, so exported output keeps its formatting.

Note

When a document includes multiple TOCs, choose the correct TOC story before updating and exporting.

Open the document containing the TOC.

If the document has been edited, click in or select the TOC text frame, then choose Layout > Update Table of Contents.

With the Type tool, put the insertion point anywhere in the TOC story that should be exported.

Choose File > Export.

Enter a filename and choose a destination.

Choose the export format from the Save as Type drop-down menu (Windows) or the Format drop-down menu (macOS).

Select Save.

## Add interactivity to a table of contents

Add hyperlinks and bookmarks to make an interactive table of contents (TOC) for Adobe InDesign digital documents.

In digital documents, interactive TOC entries help readers navigate by jumping straight to the referenced content. Turn on hyperlinks while generating the TOC in InDesign so each entry links back to its source. PDF bookmarks can also be created for use in Adobe Acrobat. These features are intended for digital output only and do not apply to print.

### Add hyperlinks in the TOC

Open the document containing the TOC. Create PDF Bookmarks is selected by default so TOC entries are added to the Bookmarks panel during PDF export.

Click in the TOC text frame or select it.

Choose Layout > Table of Contents.

Select More Options if the extra settings are hidden.

Select OK to build the TOC again with hyperlinks enabled.

### Export the document with an interactive TOC

Choose File > Export.

On macOS, use the Format drop-down menu to select Adobe PDF (Interactive). On Windows, use the Save as type drop-down menu to select Adobe PDF (Interactive).

Enter the file name, choose where to save it, and then select Save.

Select Export. The exported TOC includes interactive links.

Open the PDF in Acrobat or another PDF reader, then select a TOC entry to jump to that section.

## Create and manage footnotes

Create footnotes in Adobe InDesign so document-wide notes can be added, formatted, and controlled.

Footnotes pair a reference number in the main text with matching note text at the bottom of the column. Adobe InDesign handles footnote numbering automatically and updates references when content changes, while still providing controls for footnote formatting, numbering, and layout.

Place the insertion point in the text where the footnote reference number should appear.

Choose Type > Insert Footnote.

Enter the footnote content in the footnote area shown at the bottom of the column. When a footnote does not fit in the available space, it continues in the next threaded frame or column.

## Change footnote numbering and layout options

Customize footnote numbering, formatting, and spacing in Adobe InDesign to keep presentation consistent.

Footnote numbering and layout options determine the appearance of reference numbers in text and the way footnotes are shown inside text frames. After adding footnotes, use these options to change numbering styles, spacing, placement, and formatting across the document.

### Set footnote numbering

Choose Type > Document Footnote Options.

Select the Numbering and Formatting tab.

Choose a footnote numbering style from the Style drop-down menu.

Enter the initial footnote number in the Start At field. Footnote numbering does not carry across documents in a book. Change the Start At value separately in each document as needed.

Use Restart Numbering Every to choose when numbering begins again.

Use Show Prefix/Suffix in to choose where prefixes or suffixes are displayed.

If needed, enter characters in the Prefix or Suffix fields.

Select OK.

### Set footnote formatting

Choose Type > Document Footnote Options.

In Footnotes Reference Number in Text, use the Position drop-down menu to choose how the reference number is displayed.

For reference-number formatting, choose a Character Style from the drop-down menu. Applying a Character Style overrides the Position setting.

In Footnote Formatting, choose a Paragraph Style from the drop-down menu to format the footnote text.

Edit the Separator field to set spacing between the footnote number and the footnote text. Use the arrowicon beside the field to pick a spacing option when needed.

Select OK.

### Set footnote spacing options

Choose Type > Document Footnote Options.

Select the Layout tab.

In Spacing Options, set Minimum Space Before First Footnote to the desired value.

Set Space Between Footnotes to the needed value.

Select OK.

### Set footnote first baseline options

Choose Type > Document Footnote Options.

Select the Layout tab.

Under First Baseline, use the Offset drop-down menu to choose an alignment method.

Set the minimum baseline offset by entering a value in the Min field.

Select OK.

### Set footnote placement options

Open Type > Document Footnote Options.

Go to the Layout tab.

Enable Place End of Story Footnotes at Bottom of Text.

Turn on Allow Split Footnotes so footnotes can flow into another column or frame when needed.

Select OK.

### Set footnote rule above options

Open Type > Document Footnote Options.

Go to the Layout tab.

Use the Rule Above drop-down menu to pick the rule type you need.

Turn on Rule On when you want the divider line shown.

Set the rule thickness from the Weight drop-down menu.

Choose a stroke style in the Type drop-down menu.

Pick a color from the Color drop-down menu.

Use the Tint drop-down menu to change rule opacity.

Put a value in Left Indent to move the rule inward from the left edge.

Put a value in Width to set the rule length.

Put a value in Offset to change the gap between the rule and the footnote text.

Select OK.

## Span footnotes across columns

In Adobe InDesign, spanning controls let footnotes cover multiple columns, which can improve footnote layout in multi-column text frames.

By default, a footnote in a multi-column text frame sits at the bottom of the column where its reference appears. You can change that arrangement so the notes extend across every column in one text frame, or across the full document, depending on the layout you need.

With the Selection tool, choose the text frame that contains the footnotes.

Open Object > Text Frame Options.

Go to the Footnotes tab.

Turn on Enable Overrides. InDesign selects Span Footnotes Across Columns by default.

Select OK.

This setting affects only the selected text frame; other text frames keep their current footnote layout settings.

Note

To change footnote spanning for document columns, use Type > Document Footnote Options and work in the Layout tab.

## Apply text wrap to footnotes

In Adobe InDesign, apply text wrap to footnotes when you need footnote text to flow around objects.

Text wrap determines how footnote text moves around embedded objects or objects placed outside the footnote. InDesign handles the wrap differently for inline objects, objects anchored inside the footnote, and objects placed elsewhere on the page. Only the text after the object's anchor point in that same footnote is affected by the wrap.

Choose the Type tool and put the insertion point in the footnote location where you want to insert the object.

Use File > Place to bring in an image or graphic.

With the Selection tool, choose the placed object, then open Window > Text Wrap.

Set the text wrap option you want on the object.

In the panel, change offset values to set the spacing between the object and nearby footnote text. The footnote text wraps around the object, but only after the anchor point. The footnote area grows upward as needed to fit the wrapped text.

## Create endnotes

In Adobe InDesign, create endnotes to add references and citations to a document.

Endnotes place citations, references, and supporting details at the document end instead of breaking up the main text. Each endnote has a numbered reference in the text plus matching note content in a dedicated endnote frame. Choose endnotes when citations should be gathered at the end of the document rather than placed on separate pages.

### Add an endnote

Put the insertion point where the endnote reference number needs to appear.

Select Type > Insert Endnote.

Enter your endnote text in the endnote frame.

To move back to the main text, right-click inside the endnote and choose Go to Endnote Reference. The endnote reference number is added to the text as superscript. InDesign numbers endnotes automatically and updates numbering when notes are added, removed, or reordered.

### Import endnotes from Word documents

Select File > Place.

In the Place dialog box, enable Show Import Options.

Choose the Word document that contains the endnotes.

Select Open.

In the Microsoft Word Import Options dialog box, make sure Import Endnotes is selected.

Select OK to finish the import. InDesign brings the Word document endnotes into a new text frame. If several Word documents are imported with Scope to Document, their endnotes are gathered into one endnote frame.

## Change endnote numbering and layout

In Adobe InDesign, control reference numbering, formatting, and endnote frame placement across documents.

Endnote customization determines how notes appear through the document. After creating endnotes, use this procedure to change numbering styles, reference-number formatting, text styling, and frame position. The updates affect both current endnotes and endnotes created later.

### Set endnote numbering

Select Type > Document Endnote Options.

In the Numbering section, use the Style drop-down menu to choose a numbering style.

In the Start At field, type the starting number for the story's first endnote. This option helps with book documents because numbering does not continue between documents.

For the Mode option, choose Continuous or Restart Every Story.

### Format endnote reference numbers in text

Open Type > Document Endnote Options.

Under Endnote Reference Number in Text, use the Position drop-down menu to choose how the reference number is displayed.

Use the Character Style drop-down menu to pick the character style applied to the endnote reference number.

### Format endnote content

Select Type > Document Endnote Options.

In the Endnote Formatting section, choose a Paragraph Style for endnote text.

To control the spacing between the endnote number and its text, modify the Separator by selecting the arrow icon.

### Set positioning options

Select Type > Document Endnote Options.

Use the Scope menu to choose Story when each story should get its own endnote frame, or choose Document when one endnote frame should serve the whole document.

In Endnote Frame, choose the method used to create the endnote frame.

Alert

When the Scope setting is changed between Document and Story, Adobe InDesign rearranges all endnotes according to the chosen option. You cannot undo that change separately from other document edits.

### Set endnote prefix and suffix

In Show In, choose where prefixes or suffixes should appear.

Add the needed characters to Prefix or Suffix.

Use OK to commit the changes.

## Convert footnotes and endnotes

In Adobe InDesign, convert footnotes and endnotes while keeping numbering, formatting, and note content intact.

You can change footnotes into endnotes, or endnotes into footnotes, without losing reference numbers or note text. This feature helps satisfy publication requirements or switch citation styles without rebuilding notes manually. During the conversion, InDesign updates reference markers and renumbers notes for the format you chose.

Open Type > Convert Footnote and Endnote.

Choose either Footnote to Endnote or Endnote to Footnote.

Use the Scope drop-down menu to choose Document for every note in the document, or choose Selection for only notes in the current text selection.

Select Convert. After conversion, reference markers receive sequential numbering. For endnote output, InDesign creates a new endnote frame at the document end when one is not already present. Converting to footnotes deletes endnote frames that contain only converted notes, and the notes move to the bottom of their respective columns.

## See also

- [Paragraph Styles](uxp-paragraph-styles.md)
