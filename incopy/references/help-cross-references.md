# Cross References

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Manuals and reference documents often use cross-references to send readers between locations in the same document. One sample sentence is: For more information, see “Field mice” on page 249. A cross-reference can be based on a paragraph style, such as a heading style, or on a text anchor you created. Its format is also configurable, with choices such as Page Number Only or Full Paragraph & Page Number.

## Insert cross-references

Cross-references are added through the Hyperlinks panel. The referenced content is the destination text, and the generated text that points to it is the source cross-reference.

When adding a cross-reference, choose one of the supplied formats or define a custom format. A character style can be applied to the whole cross-reference source or to a portion of the cross-reference text. Books can synchronize cross-reference formats.

The source text of a cross-reference remains editable and may wrap across lines.

Note

Exported Adobe PDF files include cross-references when Hyperlinks is selected in the Export Adobe PDF dialog box in InDesign. Exported SWF files include them when Include Hyperlinks is selected in the Export SWF dialog box.

Standalone InCopy documents support creating and editing cross-references in the same manner as InDesign. For checked-out stories, valid targets include paragraphs in the source story, paragraphs in another checked-out story when the related InDesign document is open, and text anchors located in any InDesign document story.

Inserting cross-references

A. Cross-reference source in document B. Selected destination paragraph C. Click here to create or edit cross-reference format.

Inserting cross-references

For a video tutorial about inserting cross-references, see www.adobe.com/go/lrvid4024_id.

Set the insertion point where the cross-reference should be inserted. Then use any of these methods:

Use Type > Hyperlinks & Cross-References > Insert Cross-Reference.

Open Window > Type & Tables > Cross-References, then pick Insert Cross-Reference from the Hyperlinks panel menu.

Select Create New Cross-Reference in the Hyperlinks panel.

Inside New Cross-Reference, choose Paragraph or Text Anchor from the Link To menu.

With Paragraph selected, you can point the cross-reference to any paragraph in the document you specify.

With Text Anchor selected, you can point the cross-reference to any text where a hyperlink destination has been created. (See Create a hyperlink destination.) A text anchor is useful when the cross-reference should display wording different from the actual destination paragraph.

For Document, choose the document that contains the destination. The pop-up menu lists all open documents that have been saved. If the needed document is not open, choose Browse, locate the file, and click Open. In the left box, click a paragraph style such as Head1 to narrow the list, then select the paragraph to reference. If Text Anchor is selected instead, choose the text anchor. From the Format menu, choose the cross-reference format to use.

You can modify these cross-reference formats or make your own. See Using cross-reference formats.

Set the source hyperlink appearance. See Hyperlink appearance options. Click OK.

After a cross-reference is inserted, a text anchor marker is added at the start of the destination paragraph. To display the marker, choose Type > Show Hidden Characters. Moving or deleting this marker makes the cross-reference unresolved.

## Using cross-reference formats

The New Cross-Reference dialog box includes several cross-reference formats by default. Those formats can be edited, removed, or replaced with formats you create.

Note

If document cross-reference formats have been removed or changed and you need the default set again, choose Load Cross-Reference Formats from the panel menu, then choose a document whose formats are unchanged. Cross-reference formats can also be synchronized in a book.

For a video tutorial about editing cross-reference formats, see www.adobe.com/go/lrvid4024_id.

## Create or edit cross-reference formats

Cross-reference formats differ from other presets because they can be edited or deleted. Editing one automatically updates every source cross-reference that uses that format.

In InCopy, cross-reference formats can be created or edited only in stand-alone documents. Assignment files take their cross-reference formats from the InDesign document.

Use any of these methods:

From the Hyperlinks panel menu, choose Define Cross-Reference Formats.

During cross-reference creation or editing, use the Create Or Edit Cross-Reference Formats button.

After the Cross-Reference Formats dialog box opens, choose one of these actions:

To edit a format, select it on the left.

To create a format, select an existing format as the starting point and click the Create Format button. A duplicate of the selected format is created.

For Name, enter the format name. In the Definition text box, add or remove text as needed. Use the Building Block icon to insert building blocks from a menu. The Special Characters icon opens choices such as dashes, spaces, quotation marks, and other special characters. For a character style on the full cross-reference, select Character Style For Cross-Reference, then choose or create the character style from the menu.

The Character Style building block can also apply a character style to text inside the cross-reference.

Click Save to store the changes. Click OK when finished.

## Creating cross-references to partial paragraphs

Cross-reference formats can be built so they include only the opening portion of a paragraph. For example, a document heading such as “Chapter 7—Granada to Barcelona,” can target just “Chapter 7” instead.

Cross-reference to partial paragraph

A. The cross-reference source ends at an em dash (^\_) B. “false” excludes the em dash from the source

Cross-reference to partial paragraph

After inserting the Partial Paragraph building block, provide two pieces of information. First, enter the delimiter inside the quotation marks. The delimiter is the character that stops the paragraph text. Typical delimiters are colons, as in Chapter 7: Granada; periods, as in Chapter 7. Granada; and dashes, as in Chapter 7—Granada. To add special characters such as em dashes (^\_), em spaces (^m), or bullet characters (^8), choose from the menu shown by the Special Characters icon.

Second, specify whether the delimiter character is included or excluded. Use includeDelim=”false” to omit the delimiter, as in Chapter 7, and includeDelim=”true” to keep it, as in Chapter 7—. The values “0” and “1” can be used in place of “false” and “true,” respectively.

## Apply character styles within a cross-reference

To emphasize part of a cross-reference, use the Character Style building block. It has two tags: <cs name=”stylename”> identifies the style to apply, and </cs> ends that character style. Text or building blocks placed between the tags take on that character formatting.

Applying a character style to a section of the cross-reference

A. This tag applies a character style named “Red.”  B. This tag ends the character style formatting. C. A character style named “Bold” is applied to the rest of the cross-reference source.

Applying a character style to a section of the cross-reference

Create the character style that should be used. In the Cross-Reference Formats dialog box, create or edit the target format. Under Definition, select the text and building blocks that should receive the character style. From the menu to the right of the definition list, choose Character Style. Between the quotation marks, type the character style name with the spelling shown in the Character Styles panel.

Style names distinguish uppercase and lowercase letters. When the character style belongs to a group, precede the character style with the group name and a colon, such as Style Group 1: Red.

Save the format with Save, and then click OK.

## Load (import) cross-reference formats

Loading cross-reference formats from another document replaces existing formats that have matching names.

In InCopy, importing cross-reference formats is available only for standalone documents. Formats cannot be imported from an InCopy document into an InDesign document. If a new or changed format from InCopy conflicts with an InDesign document format when the story is checked in, the InDesign format has priority.

From the Hyperlinks panel menu, choose Load Cross-Reference Formats. In the file list, double-click the document that contains the cross-reference formats to import.

Synchronizing a book is another way to share cross-reference formats among documents.

## Delete cross-reference formats

A cross-reference format cannot be deleted while any document cross-reference uses it.

In the Cross-Reference Formats dialog box, select the format to remove. Click the Delete Format button.

## Manage cross-references

After a cross-reference is inserted, its status appears in the Hyperlinks panel. Icons can show that destination text is on the pasteboard, on a parent page, on a hidden layer, in overset text, or in hidden text. Cross-references targeting those destination areas are unresolved. The panel also reports when the destination paragraph has been edited, also known as out-of-date, or when it is missing. Destination text counts as missing when either the destination text itself or the file that contains it cannot be found. Hover over any icon to read its tool tip description.

In InCopy, cross-references can be managed only when the story is checked out for editing.

## Update cross-references

An update icon means either the cross-reference destination text changed or the source cross-reference text was edited. The cross-reference can be updated directly. If the destination moves onto another page, the cross-reference updates automatically.

Updating a cross-reference removes formatting changes made to the source text.

During printing or output, you are warned about cross-references that are out of date or unresolved.

Note

The Preflight panel can also warn about cross-references that are out of date or unresolved. In a profile definition, enable Cross-References within the Text section.

Choose one or more out-of-date cross-references. To update every cross-reference, leave the selection empty. Use any of these commands:

Use the Update Cross-References button in the Hyperlinks panel.

From the Hyperlinks panel menu, choose Update Cross-Reference.

Choose Type > Hyperlinks & Cross-References > Update Cross-Reference.

For book-wide updating, use Update All Cross-References from the book panel menu. A notification appears if unresolved cross-references remain.

## Relink cross-references

When missing destination text has moved into another document, or when the document containing that destination text has been renamed, relink the cross-reference. Relinking removes any changes made to the source cross-reference.

Select the cross-reference in the Cross-References section of the Hyperlinks panel. From the Hyperlinks panel menu, choose Relink Cross-Reference. Find the document that contains the destination text, then click Open.

If that document contains other destination text, you can relink more cross-references.

## Edit cross-references

Edit a cross-reference when you need to change the source cross-reference appearance or choose a different format. If the cross-reference points to another document, that document opens automatically.

Use any of these methods:

Use Type > Hyperlinks & Cross References > Cross-Reference Options.

Under Cross-References in the Hyperlinks panel, double-click the cross-reference to edit.

Select the cross-reference, then pick Cross-Reference Options from the Hyperlinks panel menu.

Make the cross-reference edits, then click OK.

## Delete cross-references

Deleting a cross-reference turns its source cross-reference into ordinary text.

In the Cross-References section of the Hyperlinks panel, choose the cross-reference or set of cross-references to remove. Use the Delete icon, or open the panel menu and choose Delete Hyperlink/Cross-Reference. Confirm with Yes.

Another way to remove the cross-reference entirely is to select the cross-reference source and delete it.

## Editing cross-reference source text

Cross-reference source text can be edited directly. This is useful when copyfitting requires adjusted tracking, changed word spacing, or similar local edits. The tradeoff is that updating or relinking the cross-reference removes those local formatting overrides.
