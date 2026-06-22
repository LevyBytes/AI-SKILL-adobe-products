# Create Lists, Add Or Change Bullet Characters, Change Numbered List Options, Define And Manage List Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create bulleted and numbered lists; Add or change bullet characters; Change numbered list options; Define and manage list options; Restart or continue numbered lists; Create a running list with paragraph styles; Create multi-level lists; Create running captions for figures and tables.

## Create bulleted and numbered lists

In Adobe InDesign, automatic list formatting can add bullets or sequential numbering to paragraphs. Bulleted lists begin with a bullet character at the start of each paragraph. Numbered lists begin with a number or letter followed by a separator, for example a period or parenthesis. Numbered lists can update automatically as paragraphs are added or removed. Customize bullets and numbering through style choices, separators, character styles, and indent spacing.

Understand how list markers work. Automatically generated bullets and numbers are not inserted as text, and the Type tool cannot select them unless they are converted to text. Those markers also stay out of the Story Editor window, except in the paragraph style column.

### Create a list

Select the paragraphs that should become a list.

Select Window > Styles > Paragraph Styles.

Apply a paragraph style that includes bullet or numbering settings to format the list.

To continue the list, press Enter (Windows) or Return (macOS) after a list item to create the next entry.

To stop the list, apply a paragraph style that has no bullet or numbering settings.

### Format a list

Using the Type tool, select the bulleted or numbered paragraphs you want to modify.

Select Window > Styles > Paragraph Styles.

Select the panel menu icon, then choose Bullets and Numbering.

Change the character, list options, or applied character style to customize bullets or numbering.

Change Alignment, Left Indent, and First Line Indent to control spacing and placement.

Select OK.

### Position settings

- Use Alignment to place bullets or numbers within the reserved horizontal space.
- Use Left Indent to define the indent for lines after the first line.
- Use First Line Indent to place the bullet or number in relation to the text. For a hanging indent, pair a positive Left Indent value with a First Line Indent value that is equally negative.
- To make a hanging indent, set Left Indent to a positive value and First Line Indent to the matching negative value.
- Use Tab Position to add space between the bullet or number and the beginning of the text.

Paragraph panel changes for Left Indent, First Line Indent, and Tab Position also change bulleted and numbered list formatting.

### Ensure consistent bullet and numbering formatting

With the Type tool, highlight the bulleted or numbered paragraphs you need to inspect.

Select Window > Type & Tables > Paragraph.

Open the panel menu icon, then choose Bullets and Numbering.

Check the bullet or number styling. List markers normally take their appearance from the paragraph's first character, so separate list items may not look alike.

For uniform marker styling, make a character style and apply it to the bullets or numbers.

Set or update the needed bullet or numbering options.

Select OK.

### Create nested lists

With the Type tool, select adjacent list items.

Select Window > Type & Tables > Paragraph.

Raise the Left Indent value in the panel to form a nested level.

Set the bullet or numbering style as required. When the InDesign document is exported to ePUB format, nested lists are preserved.

### Convert list bullets, numbers, or both to text

With the Type tool, highlight paragraphs that use bullets, numbering, or both.

Select Window > Type & Tables > Paragraph.

Open the panel menu icon, then choose Convert Numbering to Text, Convert Bullets to Text, or Convert Bullets and Numbering to Text according to what is selected.

When one paragraph includes both bullets and numbers, choose Convert Bullets and Numbering to Text.

Tip

To remove list formatting from the current selection, choose the Numbered List icon or Bulleted List icon.

## Add or change bullet characters

In Adobe InDesign, bullet characters can be added, replaced, or removed so lists keep the intended appearance and stay consistently formatted across documents.

If none of the existing entries fit, add another bullet to the Bullet Character grid. Because bullet characters differ from one font to another, decide whether the selected bullet should retain its font. When choosing a bullet from a particular font, such as Dingbats, record the font choice. A standard bullet character is usually supplied by each font in that font's own design. A bullet stored only by Unicode value shows a red u indicator.

### Change a bullet character

Select the bulleted paragraphs to change.

Go to Window > Type & Tables > Paragraph.

Open the panel menu icon, then choose Bullets and Numbering.

In the List Type drop-down menu, select Bullets.

Choose another bullet character from the grid.

Select OK.

### Add a bullet character

Go to Window > Type & Tables > Paragraph.

Open the panel menu icon, then choose Bullets and Numbering.

In the List Type drop-down menu, choose Bullets, and then select Add.

Choose the glyph to use for the bullet character. Available glyphs change with the selected font family and style.

Select Remember Font with Bullet to keep the selected font and style with the bullet.

Select Add, then select OK. Bullet characters are saved in the document, similar to paragraph and character styles. If styles are pasted or loaded from another document, the related bullet characters are also listed in the Bullets and Numbering dialog box.

### Remove a bullet character

Go to Window > Type & Tables > Paragraph.

Open the panel menu icon, then choose Bullets and Numbering.

Set the List Type drop-down menu to Bullets.

Choose the bullet character slated for removal, then select Delete. The first preset bullet character is not removable.

Select OK.

## Change numbered list options

In Adobe InDesign, numbered-list behavior can be managed by changing number styles, editing formatting expressions, and controlling the way numbering continues.

For numbered lists, adding or deleting paragraphs updates the numbers automatically. Items assigned to the same list share one sequence, even when the paragraphs are separated, as long as they are defined as belonging to that list. Multi-level lists are also possible, with outline-style numbering and different indent levels.

### Customize numbering styles

Select Window > Type & Tables > Paragraph.

Open the panel menu icon, then choose Bullets and Numbering.

Under List Type, select Numbers.

In the Numbering Style section, choose a numbering style from the Format drop-down menu.

Edit the number format in the Number field:

- Keep the default expression, which contains a period (.) followed by a tab (^t).
- Build a custom expression by removing the period after the number marker (^#).
- Swap the period for another character, such as a closing parenthesis, or replace it with several characters.
- Use the arrow icon, then choose Insert Special Character and select a symbol, such as an Em Dash or Ellipsis.
- Put a word or character before the number marker, such as Question, to make each list item label clearer.

For vertical text, a full-width separator can improve spacing and alignment compared with a standard period.

If needed, apply a character style to the complete number expression.

Select OK.

### Control numbering flow

With the Type tool, select the numbered list you need to change.

Select Window > Type & Tables > Paragraph.

Open the panel menu icon, then choose Bullets and Numbering.

Set the Mode drop-down menu to Continue From Previous Number for sequential numbering, or select Start At and enter the first number for a new sequence.

Configure any other options, then select OK.

## Define and manage list options

In Adobe InDesign, defined numbered lists help keep numbering steady across stories, pages, and book documents.

Defined lists control numbering that spans multiple paragraphs, stories, or documents in a book. They preserve a sequence even when other content interrupts it, which makes them useful for multi-level outlines, running lists, or mixed material that needs separate numbering. When list items sit in unthreaded text frames on one page, InDesign numbers them according to the order in which the frames were added. To revise that order, cut and paste the text frames into the wanted sequence.

### Define a list

Go to Window > Styles > Paragraph Styles.

Open the panel menu icon, then choose New Paragraph Style.

Type a style name.

Select Bullets and Numbering in the left panel.

From the List Type menu, choose Bullets or Numbers.

Choose a defined list from the List menu, or choose New List and define one.

Select OK.

Note

Some lists are generated automatically. For instance, importing a numbered list from a Microsoft Word document causes InDesign to define that list automatically.

### Edit a defined list

Select Type > Bulleted & Numbered Lists > Define Lists.

Choose the list, then select Edit.

Type a new list name or adjust the continue numbers option selection.

Select OK twice. Paragraph styles assigned to the list are moved to the same list under its renamed version.

### Delete a defined list

Select Type > Bulleted & Numbered Lists > Define Lists.

Choose the list to remove.

Select Delete.

Choose another list, or the [Default] list, as the replacement for your list.

Select OK.

## Restart or continue numbered lists

Adobe InDesign lets you restart or continue numbered lists, including numbering that spans stories and book documents.

### Restart a numbered list

Put the insertion point in the paragraph where numbering should begin again.

Select Type > Bulleted & Numbered Lists > Restart Numbering.

- For a normal list, InDesign gives the paragraph 1 (or A) and treats it as the first list item.
- For a multi-level list, InDesign gives the nested paragraph the first lower-level number.

### Continue numbered list

Put the insertion point in the paragraph where numbering should resume.

Select Type > Bulleted & Numbered Lists > Continue Numbering. After commentary, graphics, or nested list items interrupt the flow, InDesign continues the sequence. Related commands can also continue numbering across stories or across documents in a book.

### Number a list from a previous or current story

Select Type > Bulleted & Numbered Lists > Define Lists.

Choose the list, then select Edit. Do not choose the Default list, because it cannot continue across stories.

Select Continue Numbers Across Stories to continue numbering from the previous story, or clear the option so numbering in the current story begins at 1 (or A).

Select OK twice.

### Number a list from a previous or current document

Select Type > Bulleted & Numbered Lists > Define Lists.

Choose the list, then select Edit.

Select Continue Numbers Across Stories so numbering can carry over from the preceding document.

Select Continue Numbers from Previous Document in Book when the list should carry on from the previous document, or clear the option so numbering in the current document starts at 1 (or A).

Select OK, then select OK.

For correct numbering updates in a book, synchronize the documents, then choose Update Numbering > Update All Numbers from the Books panel menu.

For book-number updates, synchronize the documents, then select Window > Utilities > Book. Open the panel menu icon, then choose Update Numbering > Update All Numbers.

## Create a running list with paragraph styles

In Adobe InDesign, paragraph styles can create running lists that keep bullets or numbers consistent across content, stories, or documents.

Use a paragraph style to create a running list that continues through interruptions, stories, or documents. Define the list inside the style, then apply that style to every paragraph that should be included, similar to using a Tables style to keep a continuous list of table names.

### Define the list

Open Window > Styles > Paragraph Styles.

From the panel menu icon, choose New Paragraph Style.

Type a style name.

In the left panel, choose Bullets and Numbering.

From the List Type drop-down menu, choose Bullets or Numbers.

If you chose Numbers, choose an existing defined list from the List menu, or choose New List and define it.

Choose OK.

### Create the paragraph list

Open Window > Styles > Paragraph Styles.

From the panel menu icon, choose New Paragraph Style.

Type a style name.

In the left panel, choose Bullets and Numbering.

Set the bullet or numbering characteristics.

Use the Bullet or Number Position section to adjust indent spacing. For a hanging indent, for example, enter 2p for Left Indent and 2p for First Line Indent.

Set any other paragraph formatting options, then choose OK.

### Apply style to the content

Select the paragraphs that belong in the running list.

Open Window > Styles > Paragraph Styles.

Apply the paragraph style made for the running list to the selected paragraphs.

Use that same paragraph style on every later paragraph that should continue the running sequence. InDesign considers all paragraphs with that style part of one continuous list, even if other text separates them or they live in different stories or documents.

Keep bullets or numbering continuous by building the running list with a paragraph style.

Keep bullets or numbering continuous by building the running list with a paragraph style.

Create the paragraph style:

- Set the bullet or numbering characteristics.
- In the Bullet or Number Position section, adjust indent spacing.

For example, to make a hanging indent, enter 2p for Left Indent and -2p for First Line Indent.

- Set any other paragraph formatting options and choose OK.

Apply the style to the content:

- Apply the paragraph style to every paragraph that belongs to the running list.

InDesign treats all paragraphs using the style as a single continuous list, even if they are separated by other text or positioned in different stories or documents.

## Create multi-level lists

Learn to build multi-level lists in Adobe InDesign with paragraph styles that express hierarchy through numbering and indentation.

A multi-level list communicates how paragraphs relate in a hierarchy. Ranking and item relationships are shown with numbers and indentation. Build one by first defining a list, then making a paragraph style for each level. Point every style to the same defined list, and configure numbering plus paragraph formatting separately for each style.

### Create paragraph styles for each level

Choose Type > Paragraph Styles.

From the panel menu icon, choose New Paragraph Style.

Type a style name.

If a higher-level style is available, choose it from Based On; otherwise choose No Paragraph Style or Basic Paragraph.

In the left panel, choose Bullets and Numbering.

From the List Type drop-down menu, choose Numbers.

Choose an existing defined list from List, or choose New List and define one when necessary.

In Level, type the level number for the list level controlled by this style.

From Format, choose a numbering format.

In Number, build the number format by typing or selecting meta characters.

Choose OK.

### Include numbering from higher levels

Choose Type > Paragraph Styles.

Open the paragraph style you need to change by double-clicking it.

In the left panel, choose Bullets and Numbering.

Put the insertion point at the beginning of the Number field.

Choose the arrow icon, then choose Insert Number Placeholder, then pick the level number you want included.

To include numbering from a higher level, type a caret (^) followed by that level number, such as ^1.

Choose OK.

### Control numbering behavior

Choose Type > Paragraph Styles.

Double-click the paragraph style to update.

In the left panel, choose Bullets and Numbering.

In the Number field, build a number expression with punctuation, metacharacters, or special characters.

Enable Restart Numbers at This Level After when a paragraph at this level should restart at 1 after a higher-level paragraph.

Turn off that option when numbering for this level should continue through the whole list.

Type a level number or range, such as 2–4, to make numbering restart after the specified levels.

Choose OK.

### Adjust indentation

Choose Type > Paragraph Styles.

Double-click the paragraph style to update.

In the left panel, choose Bullets and Numbering.

Use the Bullet or Number Position options to set indentation.

Make lower-level items more indented than higher-level items so the hierarchy is easier to see.

Choose OK.

### Restart numbering within the same story

Numbered procedures sometimes need numbering to begin again inside the same story. Instead of restarting numbers by hand, make a second style that mirrors the Level 1 style.

Choose Type > Paragraph Styles.

Double-click the paragraph style to update.

In the left panel, choose Bullets and Numbering.

Set Mode to Start At, then enter 1.

Give the style a name, such as Level 1 Restart.

Choose OK.

## Create running captions for figures and tables

Learn to build running captions in Adobe InDesign so figures and tables get consistent numbers through defined lists and paragraph styles.

Running captions number figures, tables, and similar objects in sequence across a document. As you add items, captions update on their own, such as Figure 1, Figure 2, and so on. For consistent numbering, define a list and attach it to a paragraph style. When captions need words such as Figure or Table, put that text directly in the numbering format.

Note

InDesign assigns numbers according to the order items are added to the page. To rearrange that order, cut and paste items individually in the desired sequence.

Go to Window > Styles > Paragraph Styles.

From the panel menu icon, choose New Paragraph Style.

Type a style name, then choose Bullets and Numbering in the left panel.

From the List Type menu, choose Numbers.

Choose an existing defined list from the List menu, or choose New List and define one.

In the Numbering Style section, use Format to set the numbering format. For Figure 1, Figure 2, select 1, 2, 3, 4...; for Figure A, Figure B, select A, B, C, D....

In the Number field, combine descriptive text, spacing, punctuation, and numbering metacharacters. For example, enter Figure ^#.^t to place Figure before the sequence number, then a period and a tab.

Beside the Number field, choose the arrow icon, then choose Insert Number Placeholder > Chapter Number to add a chapter number to the caption.

Choose OK to save the paragraph style, then apply the style to figure captions or table titles. InDesign numbers all captions using that style sequentially through the document.

If needed, use Table of Contents to generate a list of figures or tables automatically.

## See also

- [Characters](uxp-characters.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
