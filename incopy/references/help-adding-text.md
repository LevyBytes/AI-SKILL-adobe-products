# Adding Text

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Text can be entered by typing, by pasting, or by importing content from another file. In InCopy, most text work uses familiar word-processing actions. Choose the Type tool on the toolbox, then apply the methods below. The same approaches apply in Galley, Story, and Layout views, including content linked to Adobe InDesign® and content that is not linked.

Typing

Place the insertion point where new text should go, then type.

Selecting

Select characters, words, lines, or paragraphs by dragging, double-clicking, or triple-clicking; the exact result depends on Preferences settings. As another route, place the cursor in the content and choose Edit >Select All.

Pasting

Copy or cut the text, click the destination, then choose Edit > Paste. To discard formatting from pasted material, choose Edit > Paste Without Formatting. To let InCopy add or remove spacing as needed, open Preferences, Type, and enable Adjust Spacing Automatically When Cutting And Pasting Words.

Edit > Paste Without Grid Format can also paste text into a frame grid while keeping the copied text's font, font size, and character spacing settings.

Deleting

Select the text for removal, then choose Edit > Clear.

Text can also be imported directly from another text document.

## Importing files

Other InCopy stories, Microsoft® Word files, Microsoft Excel files, and files from any application that exports Rich Text Format (RTF) or text-only format can be imported. The InCopy Place dialog box lists supported formats in Files Of Type on Windows® and in the right list pane on Mac OS.

Document formatting and styles

Files may be brought in with formatting kept or stripped. With formatting enabled, InCopy keeps most character and paragraph formatting from text files, while most page-layout details such as page breaks, margins, and column settings are ignored; those layout details can be set in InDesign. Typically, any formatting defined by the source word processor is imported unless InCopy lacks that feature.

When InCopy has an import filter for the source application, you can choose which styles come in and define how formatting is handled when names conflict.

Note

For linked InCopy stories, InDesign controls the styles. If an InCopy story is placed in InDesign and imported styles share names with styles there, InDesign overrides the conflicting styles from the InCopy document.

Saving files for import

When the word-processing application offers multiple save formats, choose the one that keeps the most formatting: either the application's native file format or an exchange format such as Rich Text Format (RTF).

Files made in recent versions of Microsoft Word can be imported. For Word 6, Word 95 for Windows, or a different word processor's file, first open it in its original application and resave it as a compatible Word format or as RTF, which retains most formatting.

## Place (import) text

For large text bodies, Place is typically the best import route. InCopy can bring in many word-processing, spreadsheet, and text formats. How much source formatting survives depends on the file-type import filter and the options selected during placement. Word, text, and RTF files can also be opened directly in InCopy.

With the Type tool, click at the intended text location. Choose File > Place. In the Place dialog box, enable Show Import Options when you need the import-options dialog box for the file type you are placing. Select the text file to place, then click Open. Shift-clicking Open opens the Import Options dialog box even when Show Import Options is not selected. Then use any needed step below:

When import options appear for the file type being placed, choose the desired settings and click OK.

If the imported document uses fonts unavailable on your system, a dialog box reports the font substitution. To choose different substitutions, click Find Font and pick alternatives.

Note

Pink, green, or other highlighting in imported text usually means one or more Composition preference options are active. In the Preferences dialog box, open Composition and review which Highlight options are turned on. For instance, text formatted with fonts unavailable in InCopy is highlighted in pink after placement.

## Import options

During import of Word, Excel, and tagged text files, you can choose the rules that control how those files come in.

## Microsoft Word and RTF import options

When Show Import Options is enabled while placing a Word file or RTF file, these settings are available:

Table Of Contents Text

Adds the table of contents to the story as text; the entries arrive only as plain text content.

Index Text

Adds the index to the story as text; index entries are imported only as text content.

Footnotes

Brings in Word footnotes. The footnotes and their references stay present, but numbering is recalculated from the document's footnote settings. If Word footnotes do not come in correctly, save the Word document as RTF and import that RTF file.

Endnotes

Places endnotes as text at the end of the story.

Use Typographer’s Quotes

Substitutes left and right quotation marks (“ ”) and apostrophes (’) for straight quote characters (" ") and apostrophe characters (') in imported text.

Remove Styles And Formatting From Text And Tables

Strips formatting from imported text, including table text, such as typeface, type color, and type style. When selected, paragraph styles and inline graphics are not brought in.

Preserve Local Overrides

Available with Remove Styles And Formatting From Text And Tables; keeps character-level formatting, including bold and italics, applied to part of a paragraph. Turn it off to strip all formatting.

Convert Tables To

With Remove Styles And Formatting From Text And Tables selected, tables can be changed into basic unformatted tables or into unformatted tab-delimited text.

To combine unformatted text with formatted tables, bring the text in without formatting, then copy the tables from Word and paste them into InCopy.

Preserve Styles And Formatting From Text And Tables

Keeps the Word document's formatting in the InDesign or InCopy document. Settings in the Formatting section control the way styles and formatting are retained.

Manual Page Breaks

Controls how page breaks from the Word file are represented in InDesign or InCopy. Choose Preserve Page Breaks to match Word's breaks, or choose Convert To Column Breaks or No Breaks.

Import Inline Graphics

Keeps inline graphics from the Word document in InCopy.

Import Unused Styles

Brings in every style from the Word document, including styles not used by text.

Convert Bullets & Numbers To Text

Brings bullets and numbers in as actual characters so the paragraph appearance is retained. In numbered lists, however, item numbers will not update automatically after list edits.

Track Changes

When selected, Track Changes markups from the Word document appear in the InCopy document. In InDesign, use Story Editor to see track changes.

Import Styles Automatically

Brings styles from the Word document into the InDesign or InCopy document. A yellow warning triangle beside Style Name Conflicts means at least one Word paragraph or character style has the same name as an InCopy style.

To resolve these style-name conflicts, choose from the Paragraph Style Conflicts and Character Style Conflicts menus. Use InCopy Style Definition formats imported style text with the InCopy style. Redefine InCopy Style formats imported style text with the Word style and updates existing InCopy text that uses that Word style. Auto Rename gives imported Word styles new names. For example, if InCopy and Word both have a Subheading style, Auto Rename changes the incoming Word style to Subheading_wrd_1.

Note

Bulleted and numbered list styles are not converted; InCopy does convert paragraph and character styles.

Customize Style Import

Opens the Style Mapping dialog box so you can choose which InCopy style maps to each Word style in the imported document.

Save Preset

Keeps the current Word Import Options so they can be used again. Set the desired import choices, click Save Preset, enter a preset name, then click OK. On a later Word style import, the Preset menu can supply that saved preset. Click Set As Default to make the selected preset the default for later Word document imports.

## Text-file import options

If Show Import Options is selected when a text file is placed, these settings are available:

Character Set

Sets the computer-language character set used to create the text file, for example ANSI, Unicode UTF8, or Windows CE. By default, the selection matches the default language and platform for InDesign or InCopy.

Sets the computer-language character set used to create the text file, for example ANSI, Unicode UTF8, Shift JIS, or Chinese Big 5. The default choice corresponds to the default language and platform for InDesign or InCopy.

Platform

Indicates whether the file originated on Windows or Mac OS.

Set Dictionary To

Chooses the dictionary assigned to the imported text.

Extra Carriage Returns

Controls the import of extra paragraph returns. Choose Remove At End Of Every Line or Remove Between Paragraphs.

Replace

Changes the specified number of spaces into a tab.

Use Typographer’s Quotes

Makes imported text use left and right quotation marks (“ ”) and apostrophes (’) rather than straight quotation marks (" ") and apostrophes (').

## Microsoft Excel import options

These settings are available when importing an Excel file:

Sheet

Chooses the worksheet to import.

View

Chooses whether stored custom or personal views are imported or ignored.

Cell Range

Defines the cell span by using a colon (:) for the range, such as A1:G15. When named ranges exist in the worksheet, Cell Range lists those names.

Import Hidden Cells Not Saved In View

Includes cells in the Excel spreadsheet that are formatted as hidden.

Table

Controls how spreadsheet data is represented in the document.

Formatted Table

InCopy attempts to keep the formatting used in Excel, though text formatting inside each cell may not survive. If the spreadsheet is linked instead of embedded, updating the link replaces any table formatting applied in InCopy.

Unformatted Table

Imports the table without spreadsheet formatting. After choosing this option, you can apply a table style to the imported table. Text formatted with paragraph and character styles keeps that formatting even when the spreadsheet link is updated.

Unformatted Tabbed Text

Imports the table as tab-delimited text, which can later be converted to a table in InDesign or InCopy.

Formatted Only Once

During the first import, InDesign keeps the formatting used in Excel. For a linked spreadsheet, later formatting changes in the spreadsheet are ignored when the linked table is updated. This option is not available in InCopy.

Table Style

Applies the specified table style to the imported document. Only the Unformatted Table selection makes this option available.

Cell Alignment

Sets the cell alignment for the imported document.

Include Inline Graphics

Keeps Excel inline graphics when the content is placed in InCopy.

Number Of Decimal Places To Include

Sets how many decimal places are included for spreadsheet figures.

Use Typographer’s Quotes

Makes imported text use left and right quotation marks (“ ”) and apostrophes (’) rather than straight quotation marks (" ") and apostrophes (').

## Tagged-text import options

Using tagged text format, a text file can be imported or exported while carrying InCopy formatting information. Tagged-text files contain markup that describes formatting for InCopy to apply. When tagged correctly, the format can represent nearly anything in an InCopy story, including paragraph-level attributes, character-level attributes, and special characters.

For tag syntax, see the Tagged Text PDF at www.adobe.com/go/learn_id_taggedtext_cs5_en (PDF).

When a tagged-text file is imported with Show Import Options selected in the Place dialog box, the following settings are available.

Use Typographer’s Quotes

Makes imported text use left and right quotation marks (“ ”) and apostrophes (’) rather than straight quotation marks (" ") and apostrophes (').

Remove Text Formatting

Strips imported text formatting, including typeface, type color, and type style.

Resolve Text Style Conflicts Using

Determines which character or paragraph style is used when the tagged-text file and the InDesign document define conflicting styles. Choose Publication Definition to keep the definition already present for that style in the InDesign document. Choose Tagged File Definition to use the style definition from the tagged text.

Show List Of Problem Tags Before Place

Shows a list of tags that are not recognized. If the list appears, you can cancel or continue the import. Continuing may produce a file that does not appear as expected.

## Import Buzzword documents

Buzzword is a browser-based text editor for creating and storing text files on a web server. In InCopy CS5, Buzzword document text can be imported and exported.

Importing a Buzzword document creates a URL-based link to the server copy. If that server document is changed outside InCopy, use the Links panel to refresh the imported version in InCopy. Updating the link discards edits made to the Buzzword text inside InCopy.

Note

Only English, French, and German versions are available for Acrobat.com Buzzword.

Choose File > Place From Buzzword.

If you are not signed in to CS Live, click Sign In, enter your e-mail address and password, then click Sign In.

After sign-in, the Place Buzzword Documents dialog box lists the Buzzword documents available for import.

Select one or more documents to import, or paste the Buzzword document URL into the Paste URL field.

Choose any of these options, then click OK.

Show Import Options

When this option is selected, the Buzzword Import Options dialog box opens before placement.

Replace Selected Item

Replaces the currently selected object in the document.

Link To Document

Creates a link between the Buzzword document and the placed text. After the link is established, changes to the Buzzword document are shown as a modification in the Links panel. Updating the link refreshes the text in InCopy, but formatting changes made to that text in InCopy are lost.

Apply Grid Format

Reformats the imported text using grid attributes.

If Show Import Options was selected, make choices in the Buzzword Import Options dialog box.

Most choices mirror RTF Import Options. For the related section, see Microsoft Word and RTF import options. Because Buzzword currently has no styles feature, style-related options are not valid now.

Use the loaded text cursor to click or drag and create a text frame.

## Type Asian text using inline input

Open Edit > Preferences > Advanced Type (Windows) or InCopy > Preferences > Advanced Type (Mac OS), then enable Use Inline Input For Non-Latin Text and click OK.

When a system input method is available, it can be used to enter 2‑byte and 4‑byte characters. This approach is especially helpful for Asian character input.

A dedicated input program can also enter Asian text directly inside frames for text.

### More like this

- Paste text
- Import graphics
- Convert Word styles to InDesign styles
- Work with stand-alone documents
- Export content to Buzzword
