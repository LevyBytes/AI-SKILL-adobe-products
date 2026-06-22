# Insert Glyphs And Special Characters, Open And View Glyphs, Replace Characters With Glyphs, Find And Replace Glyphs ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Insert glyphs and special characters; Open and view glyphs; Replace characters with glyphs; Find and replace glyphs; Construct a GREP expression; Find and replace items using queries; Hidden character glossary; View or show hidden characters; Create and insert math expressions; Edit math expressions; Stylize math expressions; Find and replace with text patterns (GREP); Save and manage find and replace queries.

## Insert glyphs and special characters

This section explains how to reach alternate character forms, special symbols, and OpenType features in Adobe InDesign.

A glyph is one visual representation of a character, such as an alternate, ligature, or symbol. Use the Glyphs panel for characters that are unavailable from the keyboard, and for alternate forms supplied by OpenType fonts.

### Insert special characters from menus

Open Type > Glyphs.

With the Type tool, place the insertion point where the character should be inserted.

Choose Type > Insert Special Character, then choose the needed category from the submenu.

Select the exact character from the options shown.

### Insert glyphs from the Glyphs panel

Open Type > Glyphs.

Use the font list at the bottom-left of the panel to choose the font whose glyphs you want to inspect.

If the font includes multiple weights or variants, choose a font style from the style menu.

In the Show drop-down menu, choose Entire Font to display every glyph, or choose a category such as Punctuation, Currency, or Math Symbols.

Scroll through the character grid, or use search to find a glyph by name, Unicode value, or glyph ID.

Double-click the glyph you want; InDesign inserts it where the text insertion point is located. With OpenType fonts, press and hold a glyph box to reveal alternate forms when they are available.

### Insert recently used glyphs

InDesign keeps track of the last 35 distinct glyphs inserted and shows them in the Glyphs panel's first row for faster reuse.

Open Type > Glyphs.

Open the panel menu icon.

Choose Show Options so the Recently Used row is visible.

Double-click a glyph in Recently Used to insert it where the cursor is placed.

Tip

To remove one item from Recently Used, right-click (Windows) or Control-click (macOS) the glyph and choose Delete Glyph from Recently Used. To remove the entire recent list, choose Clear All Recently Used from that menu.

### Clear recently used glyphs

Open Type > Glyphs.

Choose one of these options:

- To remove a single glyph from Recently Used, right-click (Windows) or Control-click (macOS) the glyph, then choose Delete Glyph from Recently Used.
- To remove every recent glyph, choose Clear All Recently Used from the same menu.

## Open and view glyphs

This section explains how the Glyphs panel gives access to special characters, symbols, and alternate letterforms in Adobe InDesign.

The Glyphs panel exposes all characters available in a font, including characters that do not appear on the keyboard. It works with OpenType, Type 1, and TrueType fonts; OpenType fonts usually provide the broadest glyph choices.

Open Type > Glyphs.

Choose the Type tool, then click inside a text frame to place the insertion point.

Use the font family menu at the lower-left of the panel to choose a font; the panel then shows that font's available characters.

Use the Zoom Out icon or the Zoom In icon in the panel to change the glyph display size for easier viewing.

Drag the lower-right corner of the panel to resize it and show more glyphs.

## Replace characters with glyphs

This section explains how to replace characters with alternate forms from the context menu in Adobe InDesign.

When alternate glyphs exist for a character, InDesign shows an on-context menu containing those alternatives.

Use the Type tool to select one character in the text frame.

Move the pointer over the blue underline below the character to show the on-context menu with the available alternates.

Choose the alternate glyph that should replace the selected character.

For a character with more than five alternates, open the full Glyphs (Type > Glyphs) panel by using the arrow at the end of the on-context menu.

Double-click the alternate glyph you want.

## Find and replace glyphs

This section explains how to find and replace glyphs that share a Unicode value in Adobe InDesign.

InDesign can replace individual glyphs that have the same Unicode values, including ligatures, alternates, and ornaments. This makes it easier to standardize glyph usage throughout a document by changing one character variant to another in the same font.

Choose Edit > Find/Change.

Select the Glyph tab.

In the Find/Change dialog box, use the Glyph tab to set up the glyph to locate and the glyph to substitute.

Use the same Glyph tab in the Find/Change dialog box when defining the replacement side of the operation.

Select the arrowÂ icon next to theÂ Find Glyph field to open the glyph selection panel.

Find the character you need and double-click it. The panel groups glyphs from the currently active font by category.

Next to the Change Glyph field, click the button and then double-click the replacement glyph.

Select Find Next to move to the first occurrence of the glyph in the document.

Use Change for the current occurrence, Change All for every occurrence, or Change/Find to replace the current occurrence and continue directly to the next match.

## Construct a GREP expression

This section explains how GREP expressions can search for and replace complex text patterns in Adobe InDesign.

GREP (Global Regular Expression Print) expressions locate and replace alphanumeric strings and text patterns across one or more open documents. They are useful when content follows a predictable structure, including phone numbers, email addresses, and formatted text. GREP can operate in one document or across several open documents, and it supports bulk edits.

### Find and change text using GREP expressions

Start from Edit > Find/Change, then open the GREP tab.

In the Find what field, choose one of these options:

- Type the GREP expression directly.
- Use the Special characters for search icon to define the search criteria.

Enter or paste the replacement text in Change to. You can also change the case of found text by selecting the Special characters for replace icon and then choosing Case Modifiers.

Choose any case modifier needed for the found text.

Confirm the case modifier you want to apply before continuing.

Choose a scope from the Search drop-down menu.

Select Find Next to move to the first match.

Select Change, Change All, or Change/Find.

GREP depends on basic pattern-syntax knowledge, but InDesign's built-in character menus can help build expressions without requiring memorized codes.

### Find text within quotation marks and reformat

Choose Edit > Find/Change, then select the GREP tab.

Put (")(\w+)(") in Find what; this matches text enclosed in quotation marks.

Use the Special characters for replace icon, then choose Found > Found Text so Change to receives $0. In the Change to field, $1, $2, and $3 can replace separate groups created by parentheses in the expression. $1 refers to the first parenthesized group, $2 to the second, and the numbering continues in order.

In Change Format, click Specify attributes to change and choose the formatting to apply.

Select Find Next to find the first occurrence.

Select Change, Change All, or Change/Find to replace the text and keep searching.

### Sample GREP expressions

These examples show common GREP replacement syntax conventions:

- \$1 $2: one backslash (\) works as an escape character.
- \\uÂ $1 \u$2: two backslashes (\\) produce one literal backslash and let escape characters appear in the output.
- \u$1 \\n \u$2: sending \n to the output creates a new line.

## Find and replace items using queries

This section explains how saved queries can automate repeated find-and-replace work in Adobe InDesign.

Queries are predefined find-and-change operations for repetitive tasks. InDesign includes preset queries for work such as converting phone number formats, standardizing punctuation, and correcting typographic issues. Use queries when the same find-and-replace operation must run across multiple documents or when searches need to be repeated often.

### Apply an existing query

Choose Edit > Find/Change.

Choose a query from the Query list. After a query is selected, you can refine the result by adjusting the search criteria in the Find what and Change to fields.

Set the scope with the Search menu, choosing Document, All Documents, or Story.

Select Find Next to move to the first occurrence.

Select Change, Change All, or Change/Find.

### Convert phone numbers with a preset query

Use the Phone Number Conversion query to make phone number formatting consistent throughout the document.

Choose Edit > Find/Change and confirm that the GREP tab is active.

From the Query list, choose Phone Number Conversion (dot format).

Check the Find what GREP expression:

\(?(\d\d\d)\)?[-. ]?(\d\d\d)[-. ]?(\d\d\d\d).

Edit the Change to field to produce the desired number format.

Example replacements:

- 206.555.3982 uses $1.$2.$3.
- 206-555-3982 uses $1-$2-$3.
- 206 555-3982 uses $1 $2-$3.

Choose Change All.

Saved queries can be rerun and shared because the Query list in the Find/Change dialog box stores their text and formatting settings. Search range is not stored with a query, so choose the range each time it runs.

### Save a custom GREP query

Open Edit > Find/Change.

Choose Text or GREP for the kind of search you need.

Build the search expression in Find what with GREP syntax or Special characters for search.

Put replacement text or replacement patterns in Change to.

Set formatting criteria with the Specify attributes to find icon and Specify attributes to change icon.

Enable options such as Include Locked Layers and Locked Objects (Find Only) icon, Include Locked Stories (Find Only) icon, or Include Footnotes icon when they apply.

Use the Save Query icon, then give the query a name.

Choose OK.

### Run a saved GREP query

Open Edit > Find/Change, then switch to the GREP or Text tab.

Pick the saved query from the Query drop-down menu.

Set the Search drop-down menu to Document, All Documents, or Story.

Use Find Next to locate the first match.

Choose Change, Change All, or Change/Find to replace text and continue through the results.

### Delete a saved query

Open Edit > Find/Change.

In the Query list, choose the query to delete.

Click the Delete Query icon.

Note

InDesign keeps custom queries as XML files in the user preferences folder. Customized query names are listed in the Query drop-down menu inside the Find/Change dialog box.

- macOS: Users/<username>/Library/Preferences/Adobe/InDesign/<Version>/<Language>/Find-Change Queries/<query type>
- Windows: Users<username>\AppData\Roaming\Adobe\InDesign<Version><Language>\Find-Change Queries<query type>

## Hidden character glossary

Use these definitions to identify every nonprinting character shown when hidden characters are visible in Adobe InDesign.

InDesign displays hidden characters only in the document window and Story Editor; they are nonprinting symbols and are not printed or exported. To show them, choose Type > Show Hidden Characters, use Normal screen mode, and leave Overprint Preview off.

## View or show hidden characters

Reveal nonprinting formatting marks inside an Adobe InDesign document.

Hidden characters identify layout-affecting formatting such as spaces, tabs, and paragraph breaks; these marks are omitted from print output and PDF or XML exports. Only the document window and Story Editor display them; their color follows the layer, and they make spacing or text-flow problems easier to diagnose.

Toggle hidden characters with Type > Show Hidden Characters, Ctrl + Alt + I (Windows), or Cmd + Option + I (macOS).

If the marks remain hidden, leave preview mode by choosing View > Screen Mode > Normal and then choosing View > Overprint Preview to clear the selection.

## Create and insert math expressions

### Use MathML in Adobe InDesign documents to add and format mathematical equations.

InDesign uses MathML, an XML-based markup language, through the Math Expressions panel for mathematical notation. Equations can be created or imported, then placed as scalable SVG files that keep their quality and support styling. Math expressions act as graphic objects in the layout, so they can be anchored, resized, and formatted.

### Create a math expression

Open Window > Math Expressions.

Choose Create Expression.

After the pointer changes to Insert Expression, click the canvas where the equation should go.

Use presets from Expressions and Symbols in the panel to assemble the equation.

Move through the expression with the arrow keys and position the cursor where needed.

In the panel, set Font Size, Fill color (including document colors), and Font Style. As you assemble the expression, MathML code refreshes automatically and appears in the Math Expressions panel.

### Insert a math expression

Open Object > Insert MathML.

Add the MathML code by typing or pasting it in the MathML Input section.

Use the Preview Expression icon to confirm that the equation renders correctly in the Expression Preview section.

Supply MathML code so the math expression can be generated and inserted.

Provide MathML code to generate the math expression and add it.

Choose Place to add the expression to the document.

Drag the corner handles to resize the expression, and anchor it to text like any other inline graphic.

In the Math Expressions panel (Window > Math Expressions), set Font Size, Fill color (including document colors), and Font Style.

Note

InDesign can export math expressions to PDF (with accessibility), EPUB (Reflowable or Fixed Layout), HTML, IDML, PNG, JPEG, XML, and Publish Online. For EPUB (Reflowable), use Object > SVG Options > Export Math Objects as and choose SVG or MathML according to reader needs.

## Edit math expressions

Use on-canvas editing or MathML code to revise equations and formulas in Adobe InDesign.

For equations in InDesign, edit on the canvas with the Type tool or open the MathML Input dialog box. Either path refreshes the mathematical notation as you work while keeping applied formatting and styling.

### Edit directly on the canvas

With the Selection tool, double-click the expression to edit it, or use the Type tool to select the whole equation or one portion for editing.

Use the arrow keys to move through the expression and place the cursor precisely.

Enter new values, or open Math Expressions (Window > Math Expressions) and add presets from Symbols and Expressions.

Use Esc to leave editing mode.

Tip

Within InDesign, use on-canvas copy-paste to copy and paste math expressions. You can also copy a single math expression from Microsoft Word into InDesign, then edit it later as a native math expression.

### Edit using MathML code

With the Type tool, select the math expression.

Right-click the math expression, then choose Edit MathML.

In the MathML Input section, change the MathML code.

Use the Preview Expression icon to inspect edits in the Expression Preview section.

Choose Save.

## Stylize math expressions

Apply font styles, colors, and sizes to equations from the Math Expressions panel in Adobe InDesign.

Use the Type tool to style an entire equation or only selected parts. Through the Math Expressions panel, math expressions can use font styles, font sizes, and document-swatch colors.

### Apply formatting to entire expressions

With the Selection tool, select the math expression on canvas.

Open Math Expressions by choosing Window > Math Expressions.

In the Font Style drop-down menu, choose Regular, Bold, Italic, or Bold Italic.

Change the Font Size value to make the equation larger or smaller.

Use the Fill drop-down menu to assign the expression color.

### Apply formatting to selected portions

Choose the Type tool.

Drag across specific characters, symbols, or portions of the math expression to select them.

Use the Typeface Properties section in the Math Expressions panel to apply formatting.

### Limitations

- Unsupported glyphs include Closed surface integral, Thick Space, Differential D, Imaginary I, Exponential E, and a rare closing bracket symbol; generated expressions show them as missing glyphs.
- For some glyphs, bold, italic, or both are unavailable. The dropdown greys out options that cannot be used.
- MENA letters appear reversed after entry in the MathML expression.
- While editing a math object on the canvas, text-box modifier controls such as cmd + A, double-click, and triple-click do not work.

## Find and replace with text patterns (GREP)

Search Adobe InDesign documents with GREP expressions when complex text patterns need targeted replacement.

GREP (Global Regular Expression Print) expressions locate and replace alphanumeric strings and patterns across one or more open documents. Use them for structured content, including phone numbers, email addresses, and formatted text. GREP can operate on a single document or multiple documents and supports bulk changes.

Open Edit > Find/Change, then choose the GREP tab.

In Find what, choose one of these options:

- Type the GREP expression directly.
- Use the Special characters for search icon to define the search criteria.

Enter or paste replacement text in Change to. To replace found text with a specific text case, choose the Special characters for replace icon and then Case Modifiers.

Choose any case modifier when you want to alter the found text's case.

Pick any case modifier to apply a different case to the found text.

Set the scope with the Search drop-down menu.

Use Find Next to locate the first match.

Choose Change, Change All, or Change/Find.

## Save and manage find and replace queries

Save, run, and delete searches to speed up repeat find-and-replace work in Adobe InDesign.

A saved query keeps the search text plus formatting choices in the Query list of the Find/Change dialog box, making complex searches reusable and shareable. The search range is not saved with the query, so choose that range each time you run it.

### Delete a saved query

Open Edit > Find/Change.

From the Query list, choose the query you want to delete.

Click the Delete Query icon.

Note

Custom queries reside as XML files in the user preferences folder. The Query drop-down menu in the Find/Change dialog box shows the names of customized queries.

macOS: Users/<username>/Library/Preferences/Adobe/InDesign/<Version>/<Language>/Find-Change Queries/<query type>

Windows: Users<username>\AppData\Roaming\Adobe\InDesign<Version><Language>\Find-Change Queries<query type>

## See also

- [Characters](uxp-characters.md)
