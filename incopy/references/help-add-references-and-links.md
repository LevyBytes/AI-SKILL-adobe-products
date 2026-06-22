# Footnotes, Endnotes

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Footnotes — Create footnotes; Endnotes — Create endnotes.

## Footnotes — Create footnotes

A footnote has two connected elements: the reference number in the text and the footnote text at the bottom of the column. Footnotes can be created directly or imported from Word or RTF documents. As footnotes are added, InCopy numbers them automatically, and numbering begins again in each story. You can set the numbering style, visual appearance, and layout. Footnote text itself cannot contain another footnote.

The column that contains the footnote reference marker determines the width of the footnote text. Footnotes cannot space columns in a text frame.

Put the insertion point where the footnote reference number should appear. Choose Type > Insert Footnote. Enter the footnote text. Footnote added to document

A. Reference number B. Footnote text

Footnote added to document

While you type in Layout view, the footnote area grows upward and the text frame keeps its size. Expansion continues until the footnote area reaches the line that contains the footnote reference. At that stage, the footnote moves to the next page if it can be split. If splitting is impossible and extra text no longer fits in the footnote area, the reference line moves to the following page or an overset icon is shown. In that situation, consider changing the text formatting.

Note

When the insertion point is inside a footnote, choose Type > Go To Footnote Reference to return to the typing location. If you use that command often, consider assigning a keyboard shortcut.

### Footnotes — Change footnote numbering and layout

Changing footnote numbering or layout updates both current footnotes and footnotes added later.

Note

In InCopy, adjust footnote numbering and layout only in standalone documents. For linked or managed InCopy files, the InDesign document's footnote settings take precedence over changes made in InCopy.

Choose Type > Document Footnote Options. On the Numbering And Formatting tab, choose options for the numbering scheme and for the formatting of the reference number and footnote text. Switch to the Layout tab, choose options for how the footnote area appears on the page, and click OK.

### Footnotes — Footnote numbering and formatting options

The Footnote Options dialog box provides these choices in the Numbering And Formatting section:

Numbering Style

Choose the numbering style used by footnote reference numbers.

Start At

Enter the number assigned to the first footnote in a story. Every story in the document starts with the same Start At number. For a book made of multiple documents with continuous page numbering, you may want each chapter's footnote numbering to pick up after the previous chapter.

Start At is particularly helpful in book documents. Footnote numbering does not continue automatically from one document in a book to the next.

Restart Numbering Every

To restart numbering inside the document, select this option and then choose Page, Spread, or Section to define where the restart happens. Numbering styles such as asterisks (\*) often work best when restarted on every page.

Show Prefix/Suffix In

Use this option to display prefixes or suffixes in the footnote reference, the footnote text, or both locations. A prefix comes before the number, such as [1, and a suffix comes after it, such as 1]. This setting is useful when footnotes need to sit within characters, such as [1]. Enter one or more characters, or choose an option for Prefix, Suffix, or both. For special characters, click the icons beside the Prefix and Suffix controls to open a menu.

Note

When the footnote reference number sits too close to the previous text, adding a space character as a prefix can improve spacing. A character style can also be applied to the reference number.

Position

This option controls how the footnote reference number appears; the default is superscript. To format the number with a character style, for example one containing OpenType superscript settings, choose Apply Normal, then select the character style.

This option controls how the footnote reference number appears; the default is Ruby. Choose Apply Normal when you want a character style to define the reference number's position.

Character Style

Choose a character style when you want it to format the footnote reference number. For example, rather than superscript, you can use a character style at a normal position with a raised baseline. The menu lists the character styles from the Character Styles panel.

Paragraph Style

Choose a paragraph style when all footnote text in the document should share that formatting. The menu lists the paragraph styles from the Paragraph Styles panel. By default, [Basic Paragraph] is used. Be aware that [Basic Paragraph] may not match the document's default font settings.

Separator

Separator defines the white space between the footnote number and the beginning of the footnote text. To change it, select or remove the current separator first, then choose another one. Multiple characters can be included. For white-space characters, use the correct metacharacter, such as ^m for em space.

### Footnotes — Footnote layout options

The Layout section of the Footnote Options dialog box contains these options:

Span Footnotes Across Columns

This option causes every footnote in the document to span the columns.

Minimum Space Before First Footnote

This option sets the smallest allowed space between the column bottom and the first line of the first footnote. Negative values are not allowed. Any Space Before value in the footnote paragraph is disregarded.

Space Between Footnotes

This option sets the distance from the final paragraph of one footnote to the first paragraph of the following footnote in the same column. Negative values are not allowed. Space Before/Space After values inside a footnote paragraph matter only when that footnote contains more than one paragraph.

First Baseline Offset

This option sets the distance from the beginning of the footnote area, where the footnote divider appears by default, to the first footnote line.

Place End Of Story Footnotes At Bottom Of Text

Select this option when footnotes in the last column should sit directly below the text in the story's last frame. When it is not selected, any footnote in the story's last frame is placed at the column bottom.

Allow Split Footnotes

Select this option to let a footnote break across a column when it is too large for the available space in that column. If splitting is not permitted, the line with the footnote reference number moves into the next column, or the text becomes overset.

Note

Even with Allow Split Footnotes enabled, a specific footnote can be kept together: put the insertion point in the footnote text, choose Keep Options from the Paragraph panel menu, and select Keep Lines Together and All Lines In Paragraph. When the footnote has multiple paragraphs, use Keep With Next X Lines in the first paragraph of the footnote text. To choose the split point manually, use Type > Insert Break Character > Column Break.

Footnote split across column.

Footnote split across column.

Rule Above

Specify the placement and appearance of the divider line above the footnote text. The divider, also called a "separator line," also appears above footnote text that continues in another frame. The selected options apply to First Footnote In Column or Continued Footnotes, depending on which item is chosen in the menu. These controls are similar to paragraph rule settings. To remove the footnote divider line, clear Rule On.

### Footnotes — Work with footnote text

Keep these points in mind while editing footnote text:

With the insertion point inside footnote text, Edit > Select All selects only the text belonging to that one footnote; other footnotes and body text are not included.

Move between footnotes with the arrow keys.

Across documents in a book, footnote numbering does not carry forward automatically. To avoid restarting the count in every book document, wait until editing is final and then manually adjust the Start At value in each document.

In Story Editor, the footnote icon toggles an individual footnote between expanded and collapsed states. For every footnote at once, use View > Story Editor > Expand All Footnotes or Collapse AllFootnotes.

From Galley view or Story view, use the footnote icon to show or hide footnotes. To expand or collapse every footnote, right-click (Windows) or Ctrl-click (Mac OS) a footnote, then choose Expand All Footnotes or Collapse All Footnotes.

Footnote text accepts character and paragraph formatting. The footnote reference number can also be selected and restyled, although the preferred place to control its appearance is the Document Footnote Options dialog box.

Cutting or copying text that contains a footnote reference number also puts the related footnote text on the clipboard. When that copied material is pasted into another document, the footnotes adopt the numbering and layout characteristics of the destination document.

If the footnote number at the start of the footnote text is removed by mistake, restore it by placing the cursor before the footnote text, opening the context menu with right-click (Windows) or Control-click (Mac OS), and choosing Insert Special Character > Markers > Footnote Number.

Text wrap does not affect footnote text.

Clearing overrides and character styles from a paragraph that contains a footnote reference marker removes the attributes applied to the footnote reference numbers through the Document Footnote Options dialog box.

### Footnotes — Span footnotes across columns

To set every footnote in the document to span columns:

Open Type > Document Footnote Options.

Select the Layout tab.

Enable Span Footnotes Across Columns.

Select OK to finish.

Make all footnotes span across columns

Make all footnotes span across columns

### Footnotes — Delete footnotes

Remove a footnote by selecting the footnote reference number shown in the text, then pressing Backspace or Delete. Deleting only the footnote text leaves both the reference number and the footnote structure in place.

### More like this

- Place (import) text

## Endnotes — Create endnotes

An endnote is made from two connected pieces: an endnote reference number in the text and endnote text placed either after a story or after the full document. Endnotes can be created directly or brought in from Word or RTF documents. As each endnote is added, InCopy numbers it automatically. The count starts over in every story. You can set the numbering style, appearance, and layout, and the numbering updates automatically when endnotes are rearranged in the text.

Create endnotes with this sequence:

Put the insertion point where the endnote reference number should appear.

Use either command:

- Right-click and select Insert Endnote.
- Choose Type > Insert Endnote.

Enter the endnote text.

### Endnotes — Import endnotes from Word documents

Microsoft Word Import Options can bring in endnotes from a Word document that contains them. The default setting enables endnote import.

Import endnotes from Word documents

Import endnotes from Word documents

Use File > Place.

Pick the Word document to import.

Click Open.

The imported endnotes are placed together in a new text frame.

Note

Several Word documents can be imported at once. The endnotes from all selected documents are combined into one text frame.

### Endnotes — Change endnote numbering and layout

For endnote numbering and layout changes, choose Type > Document Endnote Options. The settings apply to endnotes already in the document and to endnotes created afterward.

The Endnote Options dialog box contains these controls:

Endnote options

Endnote options

### Endnote Header

Endnote Title:

Type the title used for the endnotes story.

Paragraph Style:

Select the paragraph style that formats the endnote title. The menu lists styles from the Paragraph Styles panel. By default, [Basic Paragraph] is selected. The [Basic Paragraph] style may look different from the document's default font settings.

### Numbering

Style:

Select the numbering style for endnote reference numbers.

Start At:

Set the number assigned to the first endnote in the story. Start At is useful when working with documents in a book, because endnote numbering does not continue from one book document to another.

Mode:

For a book made of multiple documents with continuous page numbering, choose Continuous when each chapter should continue endnote numbering from the previous chapter. Choose Restart Every Story when each story in a document should begin from the shared Start At value.

### Endnote Reference Number In Text

Position:

This setting controls how the endnote reference number appears; the default is superscript. To handle the number through a character style instead, such as one with OpenType superscript settings, choose Apply Normal and then specify the character style.

Character Style:

Choose the character style used for the endnote reference number. For instance, rather than using superscript, you can apply a normal-position character style with a raised baseline. The menu lists the styles available in the Character Styles panel.

### Endnote Formatting

Paragraph Style:

Choose the paragraph style that formats endnote text for every endnote in the document. The menu shows styles from the Paragraph Styles panel. [Basic Paragraph] is the default selection, and it may not match the document's default font settings.

Separator:

The separator controls the white space between the endnote number and the beginning of the endnote text. To replace it, select or remove the current separator first, then choose another one. Multiple characters are allowed. For white-space characters, use the proper metacharacter, such as ^m for em space.

### Positioning Options:

Scope:

Use this option to define how endnotes are maintained in the document. Story creates a separate endnote frame for each story. Document uses one endnote frame for the entire document. The same option can also change the current scope.

Endnote Frame:

On A New Page is the default, creating a new page for the selected scope. InCopy does not allow this option to be changed.

### Prefix/Suffix

Show In:

Choose where prefixes or suffixes appear: in the endnote reference, in the endnote text, or in both places. This is helpful for endnotes enclosed in characters, such as [1].

Prefix:

Prefixes are placed before the number, such as [1. Type one or more characters, or choose an option for Prefix. To insert special characters, click the icon beside the Prefix control and choose from the menu.

Suffix:

Suffixes are placed after the number, such as 1]. Type one or more characters, or choose an option for Suffix. To insert special characters, click the icon beside the Suffix control and choose from the menu.

### Endnotes — Work with endnote text

While editing endnote text, keep these behaviors in mind:

- Character and paragraph formatting can be applied directly to endnote text. You may also select the endnote reference number and alter its appearance, but the recommended control point is the Document Endnote Options dialog box.
- Cutting or copying text that contains an endnote reference number also copies the related endnote text to the clipboard. If that text is copied into another document, those endnotes use the numbering and layout appearance of the new document.
- Clearing overrides and character styles from a paragraph that contains an endnote reference marker causes the footnote reference numbers to lose attributes applied in the Document Endnote Options dialog box.

### Endnotes — Delete endnotes

To remove an endnote, select the endnote reference number shown in the text and press Backspace or Delete. Removing just the endnote text leaves the endnote reference number and endnote structure intact.
