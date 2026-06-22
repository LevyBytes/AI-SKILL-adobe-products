# Bullets Numbering

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

In a bulleted list, every paragraph starts with a bullet character. In a numbered list, each paragraph starts with an expression made from a number or letter plus a separator, such as a period or parenthesis. When paragraphs are added to or removed from a numbered list, the numbering updates automatically. You can modify the bullet type or numbering style, separator, font attributes, character styles, and the indent type and amount.

The Type tool cannot select list bullets or numbers directly. Instead, adjust their formatting and indent spacing in the Bullets And Numbering dialog box, the Paragraph panel, or, when bullets or numbers belong to a style, the Bullets And Numbering section of the Paragraph Styles dialog box.

Bulleted list and numbered list

Bulleted list and numbered list

For quick list creation, type and select the list, then use the Control panel's Bulleted List or Numbered List button. The buttons turn list formatting on or off and change the list between bullets and numbering. You can also put bullets and numbering into a paragraph style so applying styles to paragraphs builds the list.

Note

Automatically generated bullet and number characters are not inserted into the text itself. Because of that, text search cannot find them and the Type tool cannot select them unless they are converted to text. In the story editor window, bullets and numbering are hidden except in the paragraph style column.

Select the paragraphs that should become the list, or click where the list should start. Then use any of these methods:

In the Control panel, in Paragraph mode, click the Bulleted List button or the Numbered List button . To open the Bullets And Numbering dialog box while clicking, hold Alt (Windows) or Option (Mac OS).

From the Paragraph panel or Command panel, choose Bullets And Numbering. Set List Type to either Bullets or Numbers. Enter the settings you need, then click OK.

Apply a paragraph style that already contains bullets or numbering.

To continue the list in the next paragraph, put the insertion point at the list end and press Enter or Return. To stop the list, or to end a segment that will resume later in the story, use the Control panel's Bulleted List or Numbered List button again, or choose Bullets And Numbering from the Paragraph panel menu.

## Bullets and numbering — Format a bulleted or numbered list

Using the Type tool , select the bulleted or numbered paragraphs that need new formatting. Open the Bullets And Numbering dialog box using either route:

From the Control panel menu in Paragraph mode, or from the Paragraph panel menu, choose Bullets And Numbering.

Alt-click (Windows) or Option-click (Mac OS) the Bulleted List button or the Numbered List button .

Inside the Bullets And Numbering dialog box, possible changes include:

Replace the bullet character.

Edit the numbered list options.

From the Character Style list, select a style for the numbers or bullets.

To adjust the bullet or number position, set any of these values:

Alignment

Aligns the bullets or numbers left, centered, or right inside the horizontal space assigned to numbers. If that space is narrow, the three choices may look nearly the same.

Left Indent

Sets the indentation distance for lines after the first line.

First Line Indent

Determines the location of the bullet or number.

Raise First Line Indent when punctuation in long lists should line up. For example, to align “9.” and “10.” on the period, set Alignment to Right and gradually raise the first line indent until the numbers align, with Preview turned on.

For a hanging indent, set a positive Left Indent value, such as 2p0, and set First Line Indent to the matching negative value, such as -2p0.

Position settings

Position settings

Note

Because Left Indent, First Line Indent, and Tab Position are paragraph attributes in the Bullets And Numbering dialog box, changing the same values in the Paragraph panel also alters bulleted and numbered list formatting.

Tab Position

Activates the tab position used to separate the bullet or number from the beginning of the list item.

By default, bullets and numbers inherit some formatting from the first character of the paragraph they belong to. When that first character varies between paragraphs, the number or bullet can look inconsistent with the rest of the list. To prevent that, create a character style for numbers or bullets, then apply it through the Bullets And Numbering dialog box controls.

Italicized first word of step 3 causes numbering to be italicized as well, unless you create character style for numbers and apply it to list.

Italicized first word of step 3 causes numbering to be italicized as well, unless you create character style for numbers and apply it to list.

## Bullets and numbering — Change bullet characters

When the existing choices are not the bullets you want, add different bullet characters to the Bullet Character grid. A bullet available in one font might be missing from another. For each added bullet character, you can decide whether its font is remembered.

For a bullet taken from a particular font, such as the pointing hand from Dingbats, set the bullet to remember that font. For a basic bullet, it is usually better not to remember the font because most fonts include their own version of that character. Depending on Remember Font With Bullet, an added bullet can refer to a Unicode value plus a specific font family and style, or only to a Unicode value.

Note

When bullets refer only to the Unicode value and no font is remembered, they show an indicator: red “u”.

Bullets And Numbering dialog box

A. Bullet without remembered font B. Bullet with remembered font

Bullets And Numbering dialog box

## Bullets and numbering — Change the bullet character

From the Control panel menu or Paragraph panel menu, choose Bullets And Numbering. In the Bullets And Numbering dialog box, choose Bullets from the List Type menu. Pick another bullet character, then click OK.

## Bullets and numbering — Add a bullet character

In the Bullets And Numbering dialog box, choose Bullets from the List Type menu, then click Add. Pick the glyph that should become the bullet character. Glyph availability varies by font family and font style. To have the new bullet keep the font and style currently selected, choose Remember Font With Bullet. Click Add.

Note

The document stores its bullet character list, just as it stores paragraph and character styles. When paragraph styles are pasted or loaded from another document, bullet characters used by those styles are added to the Bullets And Numbering dialog box beside the bullets already defined in the current document.

## Bullets and numbering — Remove a bullet character

In the Bullets And Numbering dialog box, choose Bullets from the List Type menu. Select the bullet character to remove, then click Delete. The first preset bullet character cannot be deleted.

## Bullets and numbering — Change numbered list options

In a numbered list, adding or removing list paragraphs updates the numbers automatically. Paragraphs in the same list receive sequential numbering. They do not need to sit next to each other, provided that a list is defined for them.

A multi-level list is also possible; list items can be numbered in outline form and indented at different depths.

Open the Bullets And Numbering dialog box. Under Numbering Style, choose the numbering type from the Format menu. In the Number box, either keep the default expression--period (.) and tab space (^t)--or build your own number expression. To enter a custom number expression, remove the period after the number metacharacter (^#), then do one of the following:

- Type one character, such as a closing parenthesis, or multiple characters to replace the period.

Note

You may enter a full-width separator in place of a half-width period separator; this is especially useful for vertical text.

From the Insert Special Character menu, choose an item such as Em Dash or Ellipses.

Before the number metacharacter, type a word or character. For a question list, for example, type the word Question.

Select a character style for the expression. That style covers the full number expression, not just the number. For Mode, choose one of these options:

Continue From Previous Number

Numbers the lists in sequence.

Start At

Begins numbering at the number or other value entered in the text box. Enter a number rather than a letter, even when the list uses letters or Roman numerals.

Set any other options, then click OK.

## Bullets and numbering — Define lists

A defined list can be broken up by other paragraphs and lists, and it may continue across separate stories and documents in a book. Use defined lists, for example, to build a multi-level outline or to maintain a running sequence of numbered table names throughout a document. Defined lists can also handle separately numbered or bulleted items that are interleaved. For a questions-and-answers list, for instance, create one list to number the questions and another to number the answers.

Defined lists commonly track paragraphs for numbering. When a paragraph style used for numbering is assigned to a defined list, paragraphs using that style are numbered according to their position in the defined list. The first paragraph that appears receives number 1, for example “Table 1,” and the next receives number 2, for example “Table 2,” even if it appears several pages later. Because both paragraphs are part of the same defined list, they can number consecutively regardless of the distance between them in the document or book.

Create a new list for each item category to be numbered, such as step-by-step instructions, tables, and figures. Multiple defined lists let one list interrupt another while each sequence remains intact.

Note

When list items are placed in unthreaded frames on the same page, numbering follows the order in which the text frames were added to the page. To reorder those items, cut and paste the text frames individually in the order they should appear in the list.

Defined lists let you interrupt one list with another.

Defined lists let you interrupt one list with another.

## Bullets and numbering — Define a list

Choose Type > Bulleted And Numbered Lists > Define Lists. In the Define Lists dialog box, click New. Enter a list name, decide whether numbering should continue across stories, and decide whether numbering should continue from earlier documents in the book. Click OK twice.

Once a list has been defined, it can be used in paragraph styles, including styles for tables, figures, or ordered lists, and it can also be applied through the Control panel and Paragraph panel.

Note

Some lists are created automatically. For example, importing a numbered list from a Microsoft Word document causes InDesign to define a list automatically for the document.

## Bullets and numbering — Edit a defined list

Choose Type > Bulleted And Numbered Lists > Define Lists. Select a list, then click Edit. Enter a replacement list name or change the Continue Numbers options selection.

Paragraph styles assigned to that list are moved to the list under the new name.

## Bullets and numbering — Delete a defined list

Use Type > Bulleted And Numbered Lists > Define Lists. Choose the list. Click Delete, then pick another list, or the [Default] list, to stand in for the deleted one.

## Bullets and numbering — Create a paragraph style for running lists

For a running list, where numbering continues despite intervening paragraphs or across multiple stories or documents, make a paragraph style and apply it to each paragraph that should belong to that list. As an example, to list the tables in a document, create a paragraph style named Tables, include a defined list in that style, and apply the Tables paragraph style to every paragraph you want in the Table list.

From the Paragraph Styles panel menu, choose New Paragraph Style. Type a style name. In the left column of New Paragraph Style, click Bullets And Numbering. Set List Type to Bullets or Numbering. When the style is for numbered lists, use List to choose an existing defined list, or choose New List and define one. Set the bullet or numbering characteristics. To adjust indentation, use Bullet or Number Position in New Paragraph Style; for a hanging indent, enter 2p for Left Indent and ‑2p for First Line Indent. Add any other paragraph style attributes needed for the style, and click OK.

## Bullets and numbering — Create multi-level lists

Multi-level lists express hierarchy among list paragraphs. They are also known as outline lists because their structure resembles an outline. Numbering formats and indenting both show rank and subordination, making it clear how each paragraph relates to the items before and after it. A multi-level list can include up to nine levels.

Multi-level list with numbers and letters marking hierarchy levels

Multi-level list with numbers and letters marking hierarchy levels

To build a multi-level list, first define the list, then create one paragraph style for every level you need. A four-level list, for example, needs four paragraph styles, all assigned to the same defined list; while creating each style, set its numbering format and paragraph formatting.

From the Paragraph Styles panel menu, choose New Paragraph Style. Type a style name. If a style already exists for the multi-level list, use Based On to choose the style assigned to levels above the current one; if no such style exists, choose Basic Paragraph or No Paragraph Style. In New Paragraph Style’s left column, click Bullets And Numbering. From List Type, choose Numbers. From List, choose the list you defined. If the list has not been defined yet, choose New List from the menu and define it now. In Level, enter the number for the multi-level-list level this style represents. From Format, choose the numbering type. In Number, type metacharacters or choose metacharacters from the menus to describe the number format for items on this level.

To add numbering prefixes from higher levels, type text or click at the start of Number and choose Insert Number Placeholder, then choose a Level option, such as Level 1; you can also type ^ followed by the list level, such as ^1. If first-level items use 1, 2, 3, and so on, and second-level items use a, b, c, and so on, adding the first-level prefix makes second-level numbers appear as 1a, 1b, 1c; 2a, 2b, 2c; 3a, 3b, 3c.

For a number expression, type punctuation, enter metacharacters, or choose items from Insert Special Character.

Select Restart Numbers At This Level After when numbering should return to 1 once a paragraph at this level follows a higher-level paragraph; leave this option deselected to keep this level numbered continuously throughout the list, regardless of where the paragraphs sit in the hierarchy.

To restart after a particular level or group of levels, enter the level number or range, such as 2-4, in Restart Numbers At This Level After.

In Bullet or Number Position, set Indent or Tab Position so items on this level sit farther in than items on higher levels. Extra indentation makes subordinate list items easier to distinguish. Click OK.

In situations such as numbered steps, you may need numbering to restart inside the same story. Instead of manually restarting the numbered list, create a separate style that matches Level 1 except for one setting: for Mode, choose Start At, then specify 1. Name the style something like “Level 1 Restart.”

## Bullets and numbering — Create running captions for figures and tables

Running captions apply consecutive numbering to figures, tables, and similar items in a document. For example, one caption can begin with “Figure 1,” followed by another that begins with “Figure 2,” and so on. To keep figures, tables, or comparable items in sequence, define a list for that item type, then create a paragraph style that includes the list definition. Descriptive words such as “Figure” or “Table” can also be added to the paragraph style’s numbering scheme.

Note

List items receive numbers according to the order in which they are placed on the page. To change that order, cut and paste the items individually into the sequence you want listed.

Create a new paragraph style and, in Bullets And Numbering within Paragraph Style Options, choose Numbers from List Type. Choose a defined list from List, or choose New List to define one. Under Numbering Style, choose the numbering type you want from Format.

For example, choose A, B, C, D... to make captions such as “Figure A,” “Figure B,” and so on.

In Number, enter a descriptive word plus any needed spacing or punctuation, together with the numbering metacharacters.

For example, to produce “Figure A,” type “Figure” and a space before the numbering metacharacters, such as Figure ^#.^t. That inserts “Figure,” then a sequential number (^#), a period, and a tab (^t).

Note

To add chapter numbers to running captions, choose Insert Number Placeholder > Chapter Number from Number, or type ^H wherever the chapter number should appear in the numbering scheme.

Complete the style setup and click OK.

After the style exists, apply it to text figure captions or table titles.

Note

The Table Of Contents feature can create a list of tables or figures.

## Bullets and numbering — Restart or continue numbering for a list

InDesign provides commands to restart list numbering or continue it:

Restarting a numbered list

Place the insertion point in the paragraph, then choose Restart Numbering from the context menu or use Type > Bulleted And Numbered Lists > Restart Numbering. For ordinary lists, the selected paragraph becomes the first paragraph in the list and receives 1 or A. In multi-level lists, a nested paragraph is assigned the first number for its lower level.

Continuing a numbered list

From the context menu, choose Continue Numbering; the same command is available at Type > Bulleted And Numbered Lists > Continue Numbering. Use it to pick numbering back up after commentary, graphics, or nested list items interrupt a list. InDesign also includes commands for lists that start in one story or book and carry forward into another story or book.

## Bullets and numbering — Number a list from the previous or current story

The list definition determines whether numbering resumes from the previous story or begins again in the current story.

Choose Type > Bulleted And Numbered Lists > Define Lists. Select a list, then click Edit.

Do not choose the Default list, because it cannot run across stories.

Select Continue Numbers Across Stories to make numbering resume from the previous story. Turn it off when the current story should begin at 1 (or A). Confirm with OK twice.

## Bullets and numbering — Number a list from the previous or current document in a book

List settings control whether numbering continues from the previous document in a book or starts over in the current document.

Open Type > Bulleted And Numbered Lists > Define Lists, select a list, and click Edit. Select Continue Numbers From Previous Document In Book to resume numbering from the previous document; this option is available only when Continue Numbers Across Stories is selected. Turn it off when the current document should start at 1 (or A). Confirm with OK twice.

Note

For reliable numbering updates in a book, synchronize the book documents and choose Update Numbering > Update All Numbers from the books panel menu.

## Bullets and numbering — Convert list bullets or numbers to text

Select the paragraphs that contain the bulleted or numbered list. Use one of these methods:

In the Paragraph panel menu, use either Convert Numbering To Text or Convert Bullets To Text.

On the selected text, right-click (Windows) or Command-click (Mac OS), then pick Convert Numbering To Text or Convert Bullets To Text.

Note

To remove list numbers or bullets, click Numbered List or Bulleted List; that removes list formatting from the selection.

### More like this

- Bulleted and Numbered Lists video
- Add paragraph and character styles
- Convert style bullets and numbering to text
