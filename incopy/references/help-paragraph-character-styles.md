# Paragraph Character Styles

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Use Paragraph and Character Styles to build, edit, load, and remove reusable text formatting.

Character and Paragraph styles, also known as Text styles, keep formatting consistent across a document.

For large documents, text styles reduce repeated formatting work. In InDesign, you can create, edit, load, and delete paragraph and character styles, add case options, and manage style overrides.

## Create styles

Character and Paragraph styles let artwork keep consistent formatting while reducing repetitive setup time.

## Edit styles

The formatting for default or newly created Character and Paragraph styles can be changed whenever needed. To edit a style and apply it to selected text, or to set it for future text, use this flow:

Open the Character and paragraph styles panel.

Choose either the Character or Paragraph styles tab to display the available styles.

Go to More Options > Style Options...

Pick a category from the option list, then make the required changes.

## Character style options

The shared settings for character and paragraph styles are listed here. Use these options when building a new style or updating an existing style:

## Paragraph style options

Paragraph Styles include these extra settings. Use them when creating a Paragraph style or changing one that already exists:

Note

Available paragraph-style settings can differ by localized InDesign version.

## Case options

Use Case Options when a paragraph needs sentence case, a title needs all caps, or another style-specific capitalization rule should stay consistent. Apply one case setting to a Character or Paragraph Style as follows:

Case options in character, paragraph styles

Case options in character, paragraph styles

Choose a character or paragraph style.

Go to More Options > Style Options...

The character or paragraph style options appear.

Select Basic Character Formats.

Under Case options, select one of these values:

Normal, Small Caps, All Caps, OpenType All Small Caps, Title Case, Sentence Case, Lower Case.

Click Ok.

## Load styles

When another InDesign or InCopy file contains text formatting you want to reuse, load those styles into the current InDesign file with this sequence:

Open the Character, paragraph styles panel.

Choose one of these More Options commands:

- Select Load Character Styles or Load Paragraph Styles.
- Select Load All Text Styles to bring in every text style.

Double-click the InDesign file that holds the styles for import.

The Load Styles dialog opens.

Select the styles to import.

When an imported style shares its name with a style already present, choose one setting under Conflict With Existing Style:

- Use Incoming Style Definition: replaces the current definition with the imported one.
- Auto-Rename: gives the incoming style a new name.

Load styles dialog

Load styles dialog

Word Styles from a favorite Word document can also be mapped to InDesign Styles.

Note

The Books feature can share styles as well. (See Synchronize book documents.)

## Delete styles

To remove Character or paragraph styles that are no longer needed, use the delete workflow for those styles.

Deleting a style leaves paragraphs that used it visually unchanged, but their formatting is detached from that style.

Note

Styles can be created, edited, and deleted in stand-alone Adobe InCopy documents and in InCopy content linked to an Adobe InDesign document. After linked content updates in InDesign, new styles are added to the InDesign document; style edits made in InCopy are replaced by the InDesign style. For linked stories, manage styles in InDesign whenever possible.

## Style overrides

An override means a change has been applied on top of an existing style. When a Character or Paragraph style contains overrides, a plus sign appears beside the style name.

To locate where overrides exist, select the Style Override Highlighter in the character or paragraph styles panel.

## Tips and tricks

- A named grid format can be assigned in Frame Grid format settings. (See Named Grids panel overview.) Object styles can also include grid characteristics. (See About object styles.)
- With an InDesign document open, a new style is available only in that document.
- When no document is open during style creation, the style is available in all new documents.
- Duplicate Style can be used to make a style very close to another style without creating a parent-child link.
- For faster access, assign a keyboard shortcut to Toggle Style Override Highlighter. For more information, see Customize menus and keyboard shortcuts.

## Add paragraph and character styles

Styles that already live in another InDesign, InCopy, or word-processing document can be imported into the current document. For a stand-alone story, InCopy can also define character and paragraph styles.

## Define paragraph or character styles

To use existing text as the basis for a new style, select that text first or put the insertion point in it.

When a group is currently selected in the Styles panel, the style you create is placed in that group.

From the Paragraph Styles panel menu choose New Paragraph Style, or from the Character Styles panel menu choose New Character Style. Enter the style name in Style Name. In Based On, choose the style that should serve as the base for the current style.

Note

Based On links styles, so edits to the base style flow into styles derived from it. New paragraph styles use [No Paragraph Style] by default, new character styles use [None], and selected text can also supply the starting style.

For Next Style (Paragraph Styles panel only), choose the style applied after this one when Enter or Return is pressed. To define a keyboard shortcut, click in the Shortcut field and confirm that Num Lock is on. On Windows, hold any mix of Shift, Alt, and Ctrl; on Mac OS, hold Shift, Option, and Command, then press a numeric-keypad number. Letters and non-keypad numbers cannot be used for style shortcuts. Keyboards without a Num Lock key cannot add keyboard shortcuts to styles.

To apply the new style immediately to the selected text, select Apply Style To Selection. To set formatting attributes, choose a category on the left, such as Basic Character Formats, then set the attributes to include in the style.

Note

In the Style Options dialog box, a new color can be created while setting Character Color by double-clicking the fill or stroke box.

Character styles ignore attributes you leave unspecified. When that style is applied, any ignored attribute continues to come from the paragraph style formatting. To clear one attribute from a character style:

From the setting menu, choose (Ignore).

In a text box, remove the option text.

For a check box, click until the small box appears (Windows) or until a hyphen (-) appears (Mac OS).

For a character color, hold Ctrl (Windows) or Command (Mac OS) and click the color swatch.

After the formatting attributes are set, click OK.

Styles created while a document is open belong only to that document. If no document is open, styles you create are available in all new documents.

## Base one paragraph or character style on another

Style systems often use a hierarchy in which related styles share selected attributes; headings and subheads, for instance, might use the same font. Build that relationship by making a base, or parent, style. Editing the parent updates its child styles too, after which each child can be adjusted to differ from the parent.

Note

When you need a style that closely matches another style but should not have a parent-child link, use the Duplicate Style command and modify the duplicate.

Begin by adding a style. In the New Paragraph Style or New Character Style dialog box, choose the parent in the Based On menu. That makes the new style a child style.

New styles default to [No Paragraph Style] or [None], or to the style from the selected text.

Add formatting in the new style that separates it from its base. For example, the subheading font could be slightly smaller than the heading, or parent, style.

Note

If edits to a child style should be discarded, click Reset To Base. The child style returns to the same formatting as its base, and you can then enter new formatting. If the child style's Based On setting is changed, the child definition updates to match the new parent style.

## Import styles from other documents

Paragraph and character styles can be brought from another InDesign document, from any version, into the active document. During the import, you choose which styles load and decide how name conflicts with styles in the current document are handled. InCopy documents can also supply imported styles.

From an InDesign or InCopy document, paragraph styles and character styles can be imported into a stand-alone InCopy document or into InCopy content linked to InDesign. You choose the loaded styles and the response when an incoming style name already exists in the current document.

Note

When styles are imported into linked content, updating the content adds new styles to the InDesign document, and a conflicting style is replaced by the InDesign style that has the same name.

In the Character Styles or Paragraph Styles panel, use one of these commands:

Choose Load Character Styles or Load Paragraph Styles from the Styles panel menu.

Choose Load All Text Styles from the Styles panel menu to bring in both character and paragraph styles.

Double-click the InDesign document that contains the styles to import. In the Load Styles dialog box, verify that each style you want has a check mark. If an existing style uses the same name as an imported style, choose one of these settings under Conflict With Existing Style, then click OK:

Use Incoming Style Definition

Replaces the current style with the loaded style and applies those attributes across current-document text that used the prior style. The bottom of the Load Styles dialog box shows both incoming and existing definitions for comparison.

Auto-Rename

Changes the name of the loaded style. For example, when both documents include a Subheading style, the imported one becomes "Subheading copy" in the current document.

## Introduction to export tags

Export Tagging controls how text that uses InDesign styles is marked in HTML, EPUB, or tagged PDF output.

The exported content can also receive CSS class names. For EPUB/HTML export, CSS classes distinguish small styling differences. A class name is optional; if you leave it blank, InDesign generates one from the Style Name.

Export Tagging cannot be previewed inside the InDesign layout because it affects only the exported EPUB, HTML, or PDF file.

Edit All Export Tags opens one dialog box for reviewing and changing the mappings efficiently.

## Define style-tag mapping

To map a style, open the paragraph, character, or Object Style Options dialog box. Select Export Tagging in the left pane, then complete the relevant mapping:

Choose a Tag for EPUB and HTML output.

Enter a Class for EPUB and HTML output. Class names generate style definitions for the default tags.

To include the style in CSS, select the Emit CSS check box. Leaving that check box cleared means no CSS class is generated for the style. When two or more styles use the same assigned class, InDesign shows an error/warning message during export. This option is available only in InDesign CC.

Choose a Tag for PDF output. This option is available only for paragraph styles.

## Edit all export tags

All export tags can be reviewed and changed from one window.

In the Paragraph, Character, or Object style panel menu, select Edit All Export Tags. Choose EPUB and HTML, or PDF. Click the tag for the relevant style; it changes into a list, where you choose the replacement value.

## Convert Word styles to InDesign styles

During import of a Microsoft Word document into InDesign or InCopy, each Word style can be mapped to its matching InDesign or InCopy style. The mapping determines which styles format the imported text. Until a style is edited in InDesign or InCopy, a disk icon appears beside each imported Word style.

Choose the path that matches the import:

To place the Word document into existing InDesign or InCopy text, choose File > Place. Select Show Import Options, then double-click the Word document.

To open the Word document as a stand-alone InCopy document, start InCopy, choose File > Open, then double-click the Word file.

Turn on Preserve Styles And Formatting From Text And Tables. Enable Customized Style Import, then click Style Mapping. When the Style Mapping dialog box opens, select the Word style, then choose from the menu under InCopy style. The available choices are:

When no style-name conflict exists, choose New Paragraph Style, New Character Style, or an existing InCopy style.

When a conflict exists, choose Redefine InCopy Style to apply the Word style to the imported styled text. Choose an existing InCopy style to apply the InCopy style to that text. Choose Auto Rename to change the Word style name.

Click OK to close the Style Mapping dialog box, then click OK to import the document.

## Apply styles

Applying a paragraph style normally leaves character formatting and character styles already assigned to part of the paragraph in place, although the style-application options can remove current formatting. In the Styles panel, a plus sign (+) beside the active paragraph style means the selection uses a character or paragraph style plus extra formatting outside that style definition. That extra formatting is known as an override or local formatting.

For character styles, existing text loses or resets any character attributes that the style itself defines.

## Apply a character style

Select the characters that should receive the style. Then use one of these methods:

In the Character Styles panel, click the character style name.

From the Control panel, choose the character style name in the drop-down list.

Use the keyboard shortcut assigned to the style. (Make sure that Num Lock is on.)

## Apply a paragraph style

Place the insertion point in a paragraph, or select any portion of the paragraphs that should receive the style. Then use one of these methods:

In the Paragraph Styles panel, click the paragraph style name.

From the Control panel menu, choose the paragraph style name.

Use the keyboard shortcut assigned to the style. (Make sure that Num Lock is on.)

If stray formatting is still present, use Clear Overrides from the Paragraph Styles panel.

## Apply sequential styles to multiple paragraphs

The Next Style setting controls which style InCopy applies automatically after you press Enter or Return following a particular style. The same setting can also apply a sequence of different styles to several paragraphs in one operation.

For example, a newspaper column might use three styles: Title, Byline, and Body. In that setup, the Next Style value for Title is Byline, the Next Style value for Byline is Body, and the Next Style value for Body is [Same Style]. After selecting a complete article that includes the title, the author's byline, and the article paragraphs, applying Title with the special "Next Style" context-menu command formats the first paragraph with Title, the second paragraph with Byline, and the remaining paragraphs with Body.

Before and after applying a style with Next Style.

Before and after applying a style with Next Style. Select the paragraphs that should receive the style sequence. In the Paragraph Styles panel, open the parent style's context menu with right-click (Windows) or Control-click (Mac OS), and choose Apply [Style Name] Then Next Style.

When the selected text contains formatting overrides or character styles, the context menu also offers removal of overrides, character styles, or both.

## Edit character and paragraph styles

Styles are useful because editing one style definition updates every text range formatted with that style to match the revised definition.

Note

For InCopy content linked to an InDesign document, style edits are replaced when the linked content is updated.

## Edit a style using the dialog box

Use either approach:

To avoid applying the style to currently selected text, open the style name's context menu in the Styles panel with right-click (Windows) or Control-click (Mac OS), and choose Edit [style name].

As another route, go to the Styles panel and double-click the style name. You can also select the style, then choose Style Options from the Styles panel menu. This action applies the style to any selected text or text frame; if neither text nor a text frame is selected, it makes that style the default for text typed in new frames.

Change the settings in the dialog box, and click OK.

## Redefine a style to match selected text

Once a style has been applied, any of its settings can be overridden. If those edits are the formatting you want, redefine the style so it matches the changed text.

Note

For InCopy content linked to an InDesign document, redefined styles are replaced when the linked content is updated.

With the Type tool, select text that already uses the style you plan to redefine. Modify paragraph or character attributes as needed. From the Styles panel menu, choose Redefine Style.

## Delete character or paragraph styles

Deleting a style lets you choose another style as its replacement and decide whether the existing formatting should stay. Deleting a style group removes every style inside that group, and InCopy asks you to replace those styles one by one.

Select the style name in the Styles panel. Then use one of these methods:

Use the panel menu command Delete Style, or select the Delete icon at the bottom of the panel.

Open the style's context menu with right-click (Windows) or Control-click (Mac OS), and choose Delete Style. This approach removes the style without first applying it to text.

In the Delete Paragraph Style dialog box, choose the replacement style.

When replacing a paragraph style with [No Paragraph Style] or a character style with [None], select Preserve Formatting if text using that style should keep its appearance. The text keeps the formatting but is no longer tied to a style.

Click OK.

Note

To remove every unused style, choose Select All Unused from the Styles panel menu, and then click the Delete icon. Unused styles are deleted without asking for replacement styles.

## Override character and paragraph styles

Applying a paragraph style does not discard character styles or other existing formatting. After a style is in place, adding formatting that the style does not define overrides the style's settings. Text formatted this way is described as having an override or local formatting. Selecting text with an override shows a plus sign (+) beside the style name. For character styles, an override appears only when the changed attribute belongs to the applied style. For example, when a character style changes only text color, applying a different font size is not reported as an override.

While applying a style, you can remove character styles and formatting overrides. Overrides can also be cleared later from a paragraph that already has a style applied.

Note

When a style name has a plus sign (+), hold the mouse pointer over that style to see which attributes are overridden.

## Preserve or remove overrides when applying paragraph styles

- To apply a paragraph style while keeping character styles but clearing overrides, hold Alt (Windows) or Option (Mac OS) as you click the style name in the Paragraph Styles panel.
- To apply a paragraph style and clear both character styles and overrides, hold Alt+Shift (Windows) or Option+Shift (Mac OS) as you click the style name in the Paragraph Styles panel.

Note

In the Paragraph Styles panel, right-click (Windows) or Control-click (Mac OS) the style, and choose the needed context-menu option. During style application, that menu can clear overrides, character styles, or both.

## Highlight character and paragraph style overrides

To locate all Paragraph and Character style overrides in a document, use this process:

Open the paragraph or character styles panel.

Use either command:

- Click the Style Override Highlighter icon.
- From the panel menu, choose Toggle Style Override Highlighter.

Style Override Highlighter marks every paragraph and character style override in the document.

Note

A keyboard shortcut can be assigned to Toggle Style Override Highlighter for quicker access. For details, see Use keyboard shortcut sets.

## Clear paragraph style overrides

Select text that contains overrides; the selection may span multiple paragraphs that use different styles. In the Paragraph Styles panel, use any of these actions:

To clear both paragraph and character formatting, use the Clear Overrides icon, or run Clear Overrides from the Paragraph Styles panel.

To clear only character overrides and keep paragraph formatting overrides, hold Ctrl (Windows) or Command (Mac OS) while clicking the Clear Overrides icon.

To clear only paragraph-level overrides and keep character-level overrides, hold Shift+Ctrl (Windows) or Shift+Command (Mac OS) in the Paragraph Styles panel while clicking the Clear Overrides icon.

Note

Clearing overrides removes paragraph-level overrides from the whole paragraph, even when the selection covers only part of it. Character-level overrides are cleared only within the selected text.

Character style formatting remains after overrides are cleared. To remove that formatting, select text that uses the character style, and click [None] in the Character Styles panel.

## Break the link between text and its style

Breaking the connection between text and its style leaves the text's current formatting intact. Later edits to that style no longer affect the text that was separated from it.

Select the text marked with the style you want to detach. From the Styles panel menu, choose Break Link To Style.

If Break Link To Style is chosen with no text selected, newly typed text uses the same formatting as the selected style but has no assigned style.

## Convert style bullets and numbering to text

Styles that add bullets or numbering to paragraphs can lose those markers when the text is copied or exported to another application. Convert the style bullets or numbering to text to prevent that loss.

Note

For an InCopy story linked to an InDesign layout, an InDesign content update may replace the conversion of style bullets.

In the Paragraph Styles panel, choose the style that includes the bullets and numbering. Use the Paragraph Styles panel menu command Convert “[style]” Bullets and Numbering to Text.

When bullets and numbering are converted in a parent style, any child style based on that parent has its bullets and numbering converted as well.

After numbering has been converted to text, edits to the text may require manual number updates.

## Find and replace character and paragraph styles

The Find/Change dialog box can locate text using one style and switch it to another style.

Choose Edit > Find/Change. For Search, select Document to change the style across the whole document. Keep Find What and Change To empty. If Find Format and Change Format are not visible at the bottom of the dialog box, click More Options. Click Find Format to open the Find Format Settings dialog box. Under Style Options, choose the character or paragraph style to find, and click OK. Click Change Format to open the Change Format Settings dialog box. Under Style Options, choose the replacement character or paragraph style, and click OK. Click Find, and then use Change, Change/Find, or Change All to perform the replacement.

### More like this

- Group styles
- Create nested styles
- Duplicate styles or style groups
- Place (import) text
- Paste text
- Use Quick Apply
- Group styles
- Create a paragraph style for running lists
- Find and change text
- Find and change fonts
