# Add Page Numbers And Markers, Change Number Formatting, Switch Absolute Section Numbering, Document Numbering Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add auto-update page numbers and section markers; Change page and chapter number formatting; Switch between absolute and section numbering; Document numbering options; Create running headers and footers; Turn off automatic page numbering for books; Use sequential paragraph numbering in books.

## Add auto-update page numbers and section markers

Use jump line markers in Adobe InDesign so continuation page references stay correct as text reflows.

Jump lines guide readers through stories that continue on another page, for example, Continued on page 42. Their page numbers change automatically when threaded text frames are moved or reflowed. For steadier placement, put each jump line in its own text frame so the reference stays positioned while the story changes.

In the Find/Change dialog box, jump line page numbers can also be found by inserting a Current Page Number character.

### Add jump lines to a story

Choose the Type tool, then drag to create the text frame where the jump line should appear.

Move the new frame so it touches or overlaps the text frame for the story being tracked.

Place the insertion point in the new text frame, then enter the text that precedes the page number, such as Continued on page or Story continues on.

Choose Type > Insert Special Character > Markers, then choose one of these options:

- Next Page Number: adds the page number for the next frame in the story, often used with Continued On jump lines.
- Previous Page Number: adds the page number for the previous frame in the story, often used with Continued From jump lines.

When the story is moved or reflowed, the page number changes automatically.

Press Shift, select both frames, and then choose Object > Group so the story and jump line move together.

Use the same steps again for additional jump lines.

### Fix unexpected characters in jump lines

Choose the page where the change should begin, then choose Layout > Numbering & Section Options.

Change or delete the section prefix to remove the unwanted character from the beginning of the page number.

### Add auto-update chapter numbers

Chapter numbers behave similarly to page numbers: they update automatically, and regular text formatting and styling can be applied to them. They are often used in book documents, where each document is limited to one chapter number. For multiple chapters inside one document, use sections instead.

Tip

Generated indexes and tables of contents do not show chapter numbers as prefixes, such as 1-3 or 1-4. When those chapter-style prefixes are needed, use section prefixes instead of chapter numbers.

### Add a chapter number

Create a text frame at the location where the chapter number should appear. To show chapter numbers on several pages, create the frame on a parent page, then apply that parent page to the document pages.

Type any words or characters that should come before or after the chapter number.

Place the insertion point at the chapter-number location.

Choose Type > Text Variables > Insert Text Variable > Chapter Number.

### Change chapter numbering options

Choose Layout > Numbering & Section Options.

Change the starting number or the chapter numbering format.

### Add automatically updated section markers

By default, book page numbers and chapter numbers continue in sequence. Numbering & Section Options lets you restart page numbering on a chosen page, add prefixes to page numbers, and select the numbering style used for both pages and chapters.

A section prefix can also be defined so section pages are labeled automatically. For example, setting A- as the section prefix on page 16 and including the prefix makes the page appear as A-16 in a table of contents or index. After you enter section marker text, that text is inserted through Type > Insert Special Character > Markers > Section Marker.

### Define document sections

Open the Pages panel with Window > Pages.

Choose the first page where the new section should start.

In the Pages panel menu, choose Numbering & Section Options.

Enable Start Section to identify the page as the first page of a new section.

Configure the document numbering and section options. In the Pages panel, a section indicator icon above the page marks where the section begins.

Choose OK.

To end the section, repeat these steps on the following page.

### Insert section markers

In the Pages panel, double-click the parent page where the section marker should appear.

With the Type tool, draw a text frame for the marker text.

Insert the marker with Type > Insert Special Character > Markers > Section Marker.

### Change or remove section settings

In the Pages panel, double-click the section indicator icon above the page.

Choose one of the following:

- Adjust the section and numbering options to change the section style or starting number.
- Turn off Start Section to remove the section.

Choose OK.

Tip

In the Pages panel, hover over a section indicator icon to see the section's starting page number or prefix in a tooltip immediately.

### Add page number markers to parent pages

Page number markers are most effective on parent pages because they update wherever those parents are applied. On a parent page, the marker displays the page prefix. On a document page, it displays the actual page number. On the pasteboard, the marker displays PB.

In the Pages panel (Window > Pages), double-click the parent page where the numbers should appear.

Create a text frame for the page number, wide enough for the longest number and any extra text you intend to include.

Move the text frame to the desired page-number position.

With the cursor in the frame, choose Type > Insert Special Character > Markers > Current Page Number.

Assign the parent page to the document pages that should show the numbering.

Note

For facing-page documents, create separate text frames on the left and right parent pages so the numbers appear in the proper positions.

## Change page and chapter number formatting

Adobe InDesign can use customized page and chapter number styles so numbering displays the way a document or book requires.

Each InDesign document can maintain its own numbering setup, and the Book panel coordinates those documents so numbering stays aligned. When page or chapter numbers look wrong, review the numbering options or preferences and update the relevant settings.

### Add page or chapter numbers

In the Pages panel, choose the page where the numbering style should change.

Choose Layout > Numbering & Section Options.

Under Page Numbering or Document Chapter Numbering, choose a different number format from Style.

Select OK.

### Configure numbering options for a book

In the Book panel, select the document to configure.

Choose Document Numbering Options. If you enter a starting page number rather than using Automatic Page Numbering, the book begins from that value and recalculates every subsequent document.

Select OK.

### Start numbering on odd or even pages

Open the panel menu icon, then choose Book Page Numbering Options.

Choose Continue On Next Odd Page or Continue On Next Even Page.

Enable Insert Blank Page when InDesign should add a blank page automatically to preserve odd- or even-page starts.

Select OK.

### Change page numbering style

Open Window > Pages to show the Pages panel.

Choose the page thumbnail where the next numbering style should start.

Select Layout > Numbering & Section Options.

Set the numbering options you need.

Select OK.

## Switch between absolute and section numbering

In Adobe InDesign, page references can use either uninterrupted document-wide numbering or numbering based on sections.

The Pages panel has two display choices for page numbers. Absolute numbering counts pages consecutively from the first page, while section numbering displays the values defined by each section.

Select Edit > Preferences > General (Windows) or InDesign > Preferences > General (macOS).

In the Page Numbering section, use the View dropdown to choose the numbering method.

Select OK. Check the Pages panel and the page box to verify the new display.

Note

This display preference changes page references shown in the Pages panel and in the page box at the bottom of the document window. It also determines how page ranges are entered for printing or exporting. The numbering printed on the document pages is unchanged.

## Document numbering options

Adobe InDesign combines page numbering, chapter numbering, sections, and formatting controls so documents and books can keep numbering organized.

These settings define page, section, and chapter numbering for a document. They also allow section-specific styles, for example Roman numerals in front matter and Arabic numerals in the main body. Numbering choices influence layout as well, including whether pages are treated as right-hand (recto) or left-hand (verso), and they support very large documents.

To open these controls, select a document page rather than a parent page, then choose Layout > Numbering & Section Options.

## Create running headers and footers

In Adobe InDesign, text variables and parent pages can produce running headers and footers that update page information consistently.

Headers and footers sit at the top and bottom of pages and can carry useful details such as page numbers. Build them with text variables, using presets such as file name or date or custom variables that retrieve titles, headings, or other styled text. After creating or editing the needed variables, use a parent page to assemble the header or footer and assign that parent page wherever the result should appear. Before defining variables, confirm that:

- Parent pages already match the layout.
- Paragraph or character styles are assigned to the headings or titles the header or footer should use.
- You know the Pages panel and text frames well enough to place the content.

### Create variables for running headers and footers

Running Header variables take the first styled text found on a page and use it to show the current heading or title inside a header or footer.

Format the title, heading, or other header text with a paragraph or character style.

Open the Text Variables dialog box with Type > Text Variables > Define.

Select New, then type a variable name, for example Chapter Title or Section Name.

From the Type menu, select Running Header (Paragraph Style) or Running Header (Character Style).

In the Style menu, choose the style whose text should appear in the header or footer.

From the Use menu, choose First On Page to use the first matching style occurrence on each page, or Last On Page to use the last one. If no matching text appears on a page, InDesign looks back to the latest previous occurrence in the document; when no earlier match exists, the variable is blank.

In Text Before and Text After, enter any text that should surround the variable or page number, such as labels, separators, or punctuation.

Select Delete End Punctuation to strip periods, colons, exclamation points, and question marks.

Select Change Case to adjust capitalization in the header or footer.

Save the variable with OK, then choose Done to close the Text Variables dialog box.

Note

If a header or footer text frame is already present on a parent page, insert the variable directly into that frame as part of the parent page design.

### Build headers and footers on a parent page

Use parent pages for shared header and footer elements so assigned document pages receive the same content.

Choose Window > Pages to open the Pages panel.

Double-click the parent page that will contain the header or footer.

Draw a text frame for the complete header or footer content, then place it above or below the main document content area.

Insert text, page numbers, and variables as needed.

Assign the parent page to the document pages that should show the header or footer.

Use the same workflow for any other parent pages that need headers or footers.

## Turn off automatic page numbering for books

Adobe InDesign books can be numbered manually by disabling automatic updates, giving you direct control over page, section, and chapter numbering.

### Manage page and section numbering in a book

Open the Pages panel menu icon, then choose Book Page Numbering Options.

Turn off Automatically Update Page & Section Numbers.

Select OK to apply the changes.

### Update numbering manually in a book

Open the Pages panel menu icon, then choose Update Numbering > Update All Numbers when you need to refresh page numbering manually.

For a narrower update, choose Update Numbering, then select Update Page & Section Numbers or Update Chapter & Paragraph Numbers.

## Use sequential paragraph numbering in books

In an Adobe InDesign book, sequential paragraph numbering can keep lists in order across multiple documents.

Before you begin

Create a numbered list in a paragraph style so figures, tables, or other items can continue their numbering from one document to the next.

In the Book panel, find the document marked with the Indicates the Style Source icon and double-click it.

Choose Type > Bulleted & Numbered Lists > Define Lists.

Choose New for a new list; to change one already present, select it and choose Edit.

Give the list a descriptive name.

Enable Continue Numbers across Stories and Continue Numbers from Previous Document in Book.

Save the list definition with OK.

Create a paragraph style that uses a numbered list, then apply it to the relevant text in each document.

Note

To make numbered lists consistent throughout all book documents, open Synchronize Options from the Book panel menu, select Paragraph Styles and Numbered Lists, and synchronize the book so those settings are applied everywhere.

## See also

- [Paragraph Styles](uxp-paragraph-styles.md)
