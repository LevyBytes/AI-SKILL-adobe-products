# Create And Edit Text Styles, Override Text Styles, Delete Text Styles, Add And Manage Text Styles From Cc Libraries ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Create and edit text styles; Override text styles; Delete text styles; Add and manage text styles from CC libraries; Find and replace text styles; Map styles to export tags — Configure export tagging options for styles; Apply sequential text styles to multiple paragraphs; Break the link between text and its style; Auto-style text; Apply style pack presets or create a style pack; Manage style packs; Map Word styles to InDesign text styles; Create GREP styles; Create nested styles; End or remove a nested style.

## Create and edit text styles

### In Adobe InDesign, Character and Paragraph styles help apply uniform formatting and can be loaded from other documents.

Character and Paragraph Styles, also called Text styles, keep formatting consistent across a document. A character style stores character-formatting attributes for a selected text range. A paragraph style stores both character and paragraph formatting attributes, and you can apply it to one paragraph or to several paragraphs.

### Create a new Character style

Start with text that already has the formatting for the style.

With that text selected, open Window > Styles > Character Styles.

Use the Create new style icon in the lower-right corner of the panel; the new style uses the selected text formatting.

### Create a new Paragraph style

Start with text that already has the formatting for the style.

With that text selected, open Window > Styles > Paragraph Styles.

Use Create new style icon in the lower-right corner of the panel; the new style uses the selected text formatting.

### Edit Styles

Use the relevant panel to edit formatting for the default Character style, default Paragraph style, or a newly created style.

Open Window > Styles > Character Styles or Window > Styles > Paragraph Styles.

In the list, choose the style to modify.

Select the panel menu icon, then select Style Options.

Select and change the formatting attributes in the Character Style Options or Paragraph Style Options dialog box.

Select OK.

### Load styles from another document

Use Type > Character Styles or Paragraph Styles to open the needed Character Styles or Paragraph Styles panel.

Pick one route:

- From the Character Styles panel menu icon, choose Load Character Styles or Load All Text Styles.
- From the Paragraph Styles panel menu icon, choose Load Paragraph Styles or Load All Text Styles.

In the Open a File dialog box, select the InDesign or InCopy file and select Open.

In the Load Styles dialog box, select the boxes for the styles to import.

If an imported style has the same name as an existing style, choose an option under Conflict with Existing Style:

- Use Incoming Definition: Replaces the existing style with the imported style definition.
- Auto-Rename: Gives the imported style a new name.

Select Check All instead of selecting styles individually to import all styles from the document.

Select Check All instead of selecting styles individually to import all styles from the document.

Select OK.

Note

Use the Books feature with style synchronization when styles need to be shared across several documents in a publication. For styles from Word documents, see mapping Word styles to InDesign styles.

## Override text styles

Use clear overrides in Adobe InDesign when you need to return text to its original formatting or discard styles that are no longer needed.

InDesign text styles support consistent formatting from document to document. During a redesign, you may need to remove local formatting changes, known as overrides, that sit on top of applied styles.

An override is created when text with an assigned style receives manual formatting changes. Clearing overrides returns that text to the style's original definition.

### Identify style overrides

A plus sign beside a style name indicates that the style has local overrides. To inspect the exact places before removing them, turn on the override display.

Open Window > Styles, then choose Paragraph Styles or Character Styles.

Use the Style Override Highlighter icon to draw a colored border around every override location in the document; use the same icon again to switch that highlighting off.

### Clear overrides from selected text

Overrides can be cleared so the selected text returns to the formatting defined by its style.

With the Type tool, highlight the text where overrides are present.

Open Window > Styles, then choose Paragraph Styles or Character Styles.

Right-click the style name.

From the context menu, choose Apply "[Style Name]", Clear Overrides to remove the local formatting, or choose Redefine Style when the override formatting should become the updated style definition.

## Delete text styles

In Adobe InDesign, remove Character or Paragraph Styles that are no longer needed while leaving the current look of existing text intact.

The Character Styles and Paragraph Styles panels let you delete character and paragraph styles, also called Text styles, when they are unused or no longer necessary in the document. Removing a style does not alter the visible formatting of text already using it. That text keeps its appearance as local formatting, but it is no longer associated with a named style.

### Delete individual styles

Open Window > Styles, then choose Paragraph Styles or Character Styles.

Choose a style name.

Right-click that style name, then choose Delete Styles.

### Delete all unused styles

Open Window > Styles, then choose Paragraph Styles or Character Styles.

Open the panel menu icon, then choose Select All Unused.

Right-click any style name that becomes highlighted and choose Delete Styles.

## Add and manage text styles from CC libraries

In Adobe InDesign, use Creative Cloud libraries to add, apply, and manage paragraph and character styles.

Paragraph and character styles from InDesign can be stored in CC Libraries, making them available across documents, devices, or users. Styles can be added from selected document text, from the Paragraph or Character panels, or while working in the New Character Style or New Paragraph Style dialog boxes.

### Add paragraph or character styles from text in a document

With the Type tool, select text that already uses the needed paragraph or character style.

Open Window > CC Libraries.

Choose the Add elements icon, then choose the Paragraph style icon or Character style icon. The corresponding category in the CC Libraries panel receives the style.

### Add styles from Paragraph Styles or Character Styles panels

Open Window > Styles > Paragraph Styles or Character Styles.

Choose one or more styles, or choose a group when every style inside that group should be included.

Use the Add selected style to my current CC Library icon.

### Add styles from New Paragraph Style or New Character Style

Open Window > Styles > Paragraph Styles or Character Styles.

Open the panel menu icon, then choose New Paragraph Style or New Character Style.

Set the options for the new style.

Choose Add to CC Library, then pick the required CC Library from the drop-down menu.

Choose OK.

### Add CC Library styles to Paragraph or Character panels

Open Window > CC Libraries.

Go to the required Paragraph or Character style.

Right-click it and choose Add to paragraph styles or Add to character styles.

### Apply a CC Library paragraph or character style to text

Choose a text object in the active document.

Open Window > CC Libraries.

Go to the required Paragraph or Character style.

Right-click it and choose Apply paragraph style or Apply character style.

## Find and replace text styles

Use the Find/Change dialog box in Adobe InDesign to exchange paragraph or character styles across a document.

To revise text formatting consistently, replace one style with another throughout the InDesign document. This method helps avoid manual formatting mistakes when applied styles are being corrected or the design is changing.

Open Edit > Find/Change.

Keep Find what and Change to empty, then choose the Specify attributes to find icon beside Find Format.

In the Find Format Settings dialog box, choose Style Options.

Set the Character Style or Paragraph Style to search for inside the Find Format Settings dialog box.

Choose OK.

Beside Change Format in the Find/Change dialog box, choose the Specify attributes to change icon. To discard format criteria that were already specified, use the Clear specified attributes icon in the Find/Change dialog box.

In the Change Format Settings dialog box, choose the Paragraph Style or Character Style that should be applied, then choose OK.

Use Find Next, Change, Change All, or Change/Find to locate and replace the text styles.

Choose Done.

## Map styles to export tags — Configure export tagging options for styles

In Adobe InDesign, specify how text styles are tagged when exporting HTML, EPUB, and tagged PDF output.

Export Tagging controls the mapping of paragraph and character styles during export. Assigning semantic HTML tags, ARIA roles, and CSS class names can improve both document structure and accessibility.

For EPUB or HTML export, custom CSS class names can separate style variations. When no class name is provided, InDesign creates one automatically from the style name.

Choose the paragraph or character that needs editing.

Open Window > Styles > Paragraph Styles or Character Styles.

Open the panel menu icon, then choose Style Options.

Choose Export Tagging.

Change the export tagging options:

- EPUB and HTML: Choose a style in Tag. You can also turn on Include Classes in HTML, Emit CSS, and Split Document (EPUB Only).
- ARIA Role: Choose an appropriate option for paragraph-style integration so roles apply to full text blocks.
- PDF: Choose a style in Tag.

Choose OK. For a context break, the styling takes precedence over existing paragraph styling for text alignment, font size, and margins; character style properties are also added to the context-break paragraph styling.

Use Paragraph Style Options to configure export tagging for EPUB, HTML, ARIA roles, and PDF.

Set up the EPUB, HTML, ARIA roles, and PDF export tagging values in Paragraph Style Options.

### Map styles to export tags — Use paragraph styles for context breaks

Open Window > Styles > Paragraph Styles.

Double-click the paragraph style intended for the context break.

Choose Export Tagging.

Under EPUB and HTML, choose hr from the Tag menu.

Set Tag to hr so EPUB and HTML export use the paragraph style for that rule.

Assign that paragraph style to the hr tag for EPUB and HTML output.

Choose OK. During export, the paragraph style becomes an HTML element, which creates an accessible context break in EPUB and HTML output.

### Map styles to export tags — Edit all export tags

For documents with numerous styles, changing export tags one at a time can take too long. Edit All Export Tags provides a single dialog for reviewing and changing mappings for every style. This helps when long documents, including books or technical manuals, are being prepared for digital distribution.

Open Window > Styles > Paragraph Styles, Character Styles, or Object Styles.

Open the panel menu icon, then choose Edit All Export Tags.

Choose either EPUB and HTML or PDF to display the settings for that export format.

For each style, choose a Tag and an ARIA Role.

Use the Split EPUB, Class, or Emit CSS columns as needed for particular styles in EPUB and HTML exports.

Choose OK.

## Apply sequential text styles to multiple paragraphs

In Adobe InDesign, apply different Paragraph Styles while typing or format several paragraphs with one action.

Sequential paragraph styles make formatting faster in templates and long documents built around predictable patterns.

Use Next Style when paragraph styles should follow one another in a known sequence. It is especially helpful for templates, book chapters, reports, and documents that repeat a consistent formatting pattern.

### Define Next Style in Paragraph Style Options

Open Type > Paragraph Styles.

Open the panel menu icon, then choose Style Options.

Choose General.

From the Next Style drop-down menu, choose the paragraph style, then choose OK.

### Apply sequential styles to existing text

A style sequence can be applied to several paragraphs at once, which helps when imported or draft content needs reformatting.

With the Selection tool, choose the paragraph.

Open Type > Paragraph Styles.

Choose a paragraph style for sequential styling.

Open the panel menu icon, then choose Style Options.

Choose General.

From the Next Style drop-down menu, choose a style.

After adding text with this paragraph style, press Enter (Windows) or Return (macOS) so the text changes to the Next Style.

## Break the link between text and its style

In Adobe InDesign, remove paragraph or character style links while preserving the formatting already applied.

When a style link is broken, the text keeps its current formatting but loses the association with that style, so later style changes no longer update it. The result is local override formatting with the style name removed; clearing overrides is different because it resets the text back to the style.

Using the Type tool, select the text that should be detached from its style.

Open Window > Styles > Paragraph Styles or Character Styles, depending on the applied style type.

Open the panel menu icon, then choose Break Link to Style. After the link is broken, that text no longer updates with the style. If nothing is selected, new text uses the same formatting but has no style applied.

## Auto-style text

Use Adobe InDesign to assign automatic formatting to text and paragraph content.

Auto Style is designed for fast styling in long documents. Using artificial intelligence, it analyzes the text and recognizes structures such as headings, subheadings, paragraphs, bullets, and more. It then formats each section according to the Style Pack selection you choose.

### Apply Auto Style to any text frame

Choose the text, one text frame, or several text frames that need formatting.

Choose Window > Styles > Style Packs.

Pick one of the available preset style packs to apply formatting automatically. Auto Style can also be applied from Type > Auto Style, or by choosing Auto Style in the Quick Actions section of the Properties panel.

### Auto Style copied text

Text copied from another source, including Microsoft Word, a text editor, or a webpage, can be pasted and formatted with Auto Style through Style Packs. To use this feature, the copied text needs at least 1000 characters.

With the Type tool, set an insertion point in the InDesign document.

Copy text from another surface and paste it into the document.

Choose the Paste text only icon, then choose Auto Style text icon.

### Clipboard Handling

When Auto Style text icon is not visible, change the Clipboard Handling settings.

Choose Edit > Preferences > Clipboard Handling.

Turn on Show Auto Style Option, then choose OK.

Note

The Place option (File > Place) can also import a text (TXT) file or a Microsoft Word document (DOCX) into an InDesign document. The imported file needs at least 1000 characters before Auto Style can be used.

## Apply style pack presets or create a style pack

Use preset Style Packs or create custom packs from paragraph styles to organize text formatting in Adobe InDesign.

Style Packs are collections of paragraph styles used by the Adobe Sensei-powered Auto Style feature. You may choose a preset style pack, or build a new pack that assigns different styles to different text sections.

### Apply a preset Style Pack

Choose text, one text frame, or several text frames.

Choose Window > Styles > Style Packs.

Choose a style pack from the list. Auto Style identifies the separate sections and applies the corresponding Paragraph Styles.

### Create a Style Pack

Create a new Style Pack from Paragraph Styles either in the Style Packs panel or in the Paragraph Styles panel.

### Using the Style Packs panel

Choose Window > Styles > Style Packs.

Choose + New Style Pack.

Type a Style Pack Name and choose a Paragraph Style for every default Style.

Choose Create.

Open the Custom tab of the Style Packs panel to view and choose the new Style Pack.

### Using Paragraph Styles

To make a new Style Pack, create paragraph styles, import styles from another InDesign document, or convert Microsoft Word styles into InDesign Paragraph Styles.

Choose Window > Styles > Paragraph Styles.

Create new Paragraph Styles or rely on ones that already exist.

Ctrl-click the Paragraph Styles that should be included in a new Style Pack.

Right-click the selected Paragraph Styles, then choose Copy to New Style Pack.

In the New Style Pack dialog box, type a Style Pack Name and revise how the default Styles map to Paragraph Style choices.

Choose Create.

Open the Paragraph Styles panel to view and choose the new Style Pack.

## Manage style packs

Edit, duplicate, delete, and reuse style packs in one document or across multiple documents in Adobe InDesign.

The Paragraph Styles panel lets you edit, duplicate, or delete a style pack that belongs to a particular document. Edits made through the Paragraph Styles panel are visible only in that document.

### Edit a style pack

Use this feature when the styles in a Style Pack need to change, including Heading, Subheading, Paragraph, and more.

Choose Window > Styles > Paragraph Styles.

Right-click the Style Pack that needs editing, then choose Edit <"Style Pack name">.

Change the settings to match your requirements.

Choose OK.

In the Paragraph Styles panel, right-click the edited Style Pack, then choose Apply <"Style Pack name"> to apply that revised pack to the text.

### Duplicate or delete a style pack

Choose Window > Styles > Paragraph Styles.

Right-click a Style Pack, choose Duplicate Style, then choose OK to make a copy.

Right-click a Style Pack, choose Delete Style, then choose OK to remove it.

### Manage Style Packs across InDesign

A Style Pack can be reused in other InDesign documents, including documents shared by other stakeholders.

Choose Window > Styles > Paragraph Styles.

Right-click the Style Pack you want to keep, then choose Save as Custom Style Pack.

In the Paragraph Styles panel, choose the View Style Packs icon; the Style Packs panel opens.

Open the Custom tab to see the saved Style Pack.

Tip

After a Style Pack has been saved as a Custom Style Pack, deleting it from the Paragraph Styles panel does not remove access to it; it remains available from the Custom tab of the Style Packs panel.

## Map Word styles to InDesign text styles

Configure import options that convert Microsoft Word styles into Adobe InDesign paragraph and character styles.

This helps because Word documents with custom styles can be placed in InDesign without manual reformatting when style-mapping options are used during import.

Choose File > Place.

Turn on Show Import Options, then choose the Word document you want.

Choose Open to display the Microsoft Word Import Options dialog box.

Configure options for importing Microsoft Word Styles as InDesign Styles.

Configure options for bringing Microsoft Word Styles into InDesign Styles.

In the Formatting section, choose Preserve Styles and Formatting from Text and Tables.

Choose Import Styles Automatically, then choose the needed Paragraph Style Conflicts and Character Style Conflicts settings.

Choose Customize Style Import, then choose Style Mapping to open the Style Mapping dialog box.

For every conflicted Word Style, assign a new or different InDesign Style, then choose OK.

Choose OK in the Microsoft Word Import Options dialog box.

## Create GREP styles

### Use GREP expressions in Adobe InDesign to apply character styles automatically to matching text patterns.

GREP searches by pattern. GREP styles assign a character style to text that matches a defined expression, for example formatting every phone number automatically. Any paragraph matching the GREP expression receives the character style formatting.

Choose Window > Styles > Paragraph Styles.

Choose the panel menu icon, then choose New Paragraph Style.

Choose GREP Style.

Choose New GREP Style to create a GREP formatting rule.

Choose a preset character style, or make one by choosing New Character Style from the Apply Style drop-down menu.

Enter the GREP expression yourself, or choose the Special Characters for Search icon beside the To Text field.

Use options in the Locations, Repeat, Match, Modifiers, and Posix submenus to build the GREP expression.

Choose from the Locations, Repeat, Match, Modifiers, and Posix submenus while constructing the GREP expression.

Choose OK.

## Create nested styles

Create nested styles in Adobe InDesign with the Drop Caps and Nested Styles options. Nested styles apply character styles to part of the text inside a paragraph style, using rules based on items such as words, sentences, or specified characters. Wherever the paragraph style is applied, the nested styles run automatically.

This feature is useful for formatting run-in headings, lead-ins, introductory text, and similar elements.

### Create one or more nested styles

Create the Character Styles that will be used.

Choose Type > Paragraph.

Set up nested styles:

- For a paragraph style, choose Type > Paragraph Style, double-click the paragraph style, then choose Drop Caps and Nested Styles.
- For one paragraph only, choose a paragraph, then go to Type > Paragraph, choose the panel menu icon, then choose Drop Caps and Nested Styles.

Note

For consistent results, use paragraph styles to apply nested styles instead of local overrides.

Choose New Nested Style one or more times.

Build several nested styles that run one after another and repeat to create predictable formatting patterns.

Set up multiple nested styles in sequence so the formatting pattern can repeat predictably.

For each nested style:

- Choose a Character Style, create one with New Character Style, or choose [None] or [Repeat].
- Define the delimiter, such as a character, word, or sentence, that stops the style.
- Enter the number of delimiter instances to include.
- Choose through to include the delimiter, or up to to leave it out.

Adjust the style order as needed because formatting follows the sequence.

Choose OK.

### Create nested line styles

A character style can be applied to a specified number of lines in a paragraph, and several nested line styles can be combined in order. Nested line styles can work with nested styles; when both define the same attribute, the nested style has priority.

Prepare the character styles you plan to use.

Set up nested line styles:

- For a paragraph style, choose Type > Paragraph Style, double-click the paragraph style, then choose Drop Caps and Nested Styles.
- For one paragraph only, choose a paragraph, go to Type > Paragraph, choose the panel menu icon, then choose Drop Caps and Nested Styles.

Choose New Line Style one or more times.

For each nested line style:

- Choose a Character Style, create one with New Character Style, or choose [None] or [Repeat].
- Specify how many lines the style should affect.

Change the style order if needed, since formatting is applied sequentially.

Choose OK.

### Loop through nested styles

Looping nested styles repeat a character style over multiple text segments inside one paragraph style. In the Drop Caps and Nested Styles dialog box, the Nested Styles section provides the [Repeat] option for this. The feature helps format structured content such as run-in headings, dictionaries, or lists when the same formatting pattern recurs within a paragraph.

Create the Character Styles that will be used.

Edit or create a Paragraph Style, or put the insertion point in the paragraph to format.

Choose Type > Paragraph.

Choose the panel menu icon, then choose Drop Caps and Nested Styles.

Choose New Nested Style or New Line Style, then set the options for each style.

Assign a character style, choose through or up to for the scope, and enter the needed count for words or lines.

Set repetition for nested styles or nested line styles:

- For nested styles, choose New Nested Style again, then choose [Repeat] in the character style area; enter how many nested styles should repeat.
- For nested line styles, choose New Line Style again, then choose [Repeat] in the character style area, and specify how many lines will repeat.

Choose OK.

Set up paragraph formatting by configuring and repeating nested styles and nested line styles.

## End or remove a nested style

Use special characters or deletion to control where nested style formatting ends in Adobe InDesign.

Usually, a nested style stops when its defined condition is satisfied, such as after three words or at a period. Use these steps when a nested style needs to stop before that condition occurs, or when nested style formatting should be removed from a paragraph. The same techniques apply to nested styles based on Paragraph Style and to nested styles applied locally.

### End a nested style before its condition is met

Put the insertion point where the nested style should stop.

Choose Type > Insert Special Character > Other > End Nested Style Here.

### Remove nested style formatting from a paragraph

Remove nested styles when automatic character formatting is no longer needed, or when different styles should be applied again.

Choose Type > Paragraph.

Choose the panel menu icon, then choose Drop Caps and Nested Styles.

Choose the nested style to remove under Nested Styles.

Choose Delete to remove the selected nested style.

Choose OK. To automatically clear nested styles, you can also apply a paragraph style that has no nested styles from the Paragraph Styles panel (Window > Styles > Paragraph Styles).

## See also

- [Character Styles](uxp-character-styles.md)
- [Characters](uxp-characters.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
