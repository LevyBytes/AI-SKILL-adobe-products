# Set Text Composition, Control Hyphenation And Word Breaks, Apply And Manage Text Formatting, Apply Text Wrap ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Set text composition; Control hyphenation and word breaks; Apply and manage text formatting; Apply text wrap; Add or remove paragraph rules; Paragraph break options; Apply paragraph borders and backgrounds.

## Set text composition

Review how Adobe InDesign lets you choose text composers and manage text flow in layouts.

Composition determines the way InDesign resolves spacing, hyphenation, and paragraph line breaks. By switching composition methods and adjusting preferences, you can guide reflow behavior and the visual evenness of text in a layout.

### Select a composition method

Choose the paragraph or paragraphs that should use the composition setting.

Select Type > Paragraph or Window > Control.

Use the Paragraph panel menu icon or Control panel menu icon.

Choose Adobe Paragraph Composer or Adobe Single-line Composer.

### Set composition preferences

Open Composition preferences: Edit > Preferences > Composition (Windows) or InDesign > Preferences > Composition (macOS). Then review the available sections.

In the Highlight section, enable any needed warning type: Keep Violations for keep problems; H&J Violations (hyphenation and justification) for H&J problems; Custom Tracking/Kerning for spacing changes; Substituted Fonts for font replacement; or Substituted Glyphs for glyph replacement.

In the Text Wrap section, select the needed object-wrapping behavior: Justify Text Next to an Object for adjacent text; Skip by Leading for leading-based skipping; Text Wrap Only Affects Text Beneath for layer-sensitive wrapping; or Honor Text Indents in addition to Text Wrap for preserving indents.

In CJK versions of InDesign, the Mojikumi Compatibility Modes section can include Use New Vertical Scaling or Use CID-Based Mojikumi; select the mode you need there.

Select OK.

### Text composition methods

As you edit text in InDesign, the program continually resolves line-break positions, distributes spacing, and decides whether hyphenation is needed. That composition process has a direct effect on both readability and the consistency of the text's appearance.

### How composition methods work

InDesign includes two composition methods that judge possible line breaks using the active hyphenation and justification settings. Those settings establish the allowed ranges for word spacing, letter spacing, glyph scaling, and hyphenation, and the composer chooses the strongest result that fits inside those limits.

The distinction between Adobe Paragraph Composer and Adobe Single-line Composer is the amount of text each method evaluates. One works across an entire paragraph, while the other resolves one line at a time, so your choice changes how edits ripple into nearby lines.

### Adobe Paragraph Composer

Adobe Paragraph Composer is the default option, and it evaluates every line in a paragraph as a group. Because it can revise earlier lines to avoid weak breaks that appear later, paragraphs usually gain steadier spacing and fewer total hyphens.

This approach often creates smoother paragraphs and more even text color. It fits long-form material such as books, articles, and magazines, where paragraph-level quality matters more than exact control of a single break.

### Adobe Single-line Composer

Adobe Single-line Composer builds the paragraph line by line. Once one line is set, the next line is considered without weighing how that earlier choice may affect later lines.

Edits usually disturb fewer following lines than they would with Paragraph Composer, making this method useful for headlines, pull quotes, and other short text that needs tight line-break control. The compromise is spacing that can be less uniform, with hyphenation appearing more often.

### Japanese composition methods

InDesign also offers Japanese Single-line and Japanese Paragraph composers for Japanese typography. They use the same one-line and paragraph-wide ideas, while applying Japanese-specific requirements for line breaking, spacing, and character placement.

## Control hyphenation and word breaks

Learn ways to handle manual and automatic hyphenation, stop undesirable word breaks, and tune text flow in Adobe InDesign.

Hyphenation determines where words may split at the ends of lines. InDesign can hyphenate automatically from dictionary rules or manually with discretionary hyphens. The final line breaks are determined by hyphenation together with justification and composition settings.

### Insert a discretionary hyphen manually

Manual hyphenation gives you direct control over word breaks by adding discretionary hyphens; those hyphens become visible only when the break falls at a line ending.

With the Type tool, place the insertion point at the hyphen location in the text.

Choose Type > Insert Special Character > Hyphens and Dashes > Discretionary Hyphen. To keep a word from hyphenating at any position, put a discretionary hyphen at the start of that word.

### Turn on and adjust automatic hyphenation

Automatic hyphenation uses dictionary-driven rules so selected text breaks words in a consistent way.

Place the pointer in one paragraph, or select several paragraphs.

Open the Paragraph panel with Window > Type & Tables > Paragraph.

Turn on the Hyphenate option.

Open the Paragraph panel menu icon, then choose Hyphenation.

Set the following values:

- Words with at Least: sets the minimum word length required before hyphenation is allowed.
- After First: sets the minimum characters before the hyphen; common values are 2-3.
- Before Last: sets the minimum characters after the hyphen; common values are 2-3.
- Hyphen Limit: caps the number of consecutive lines that may end with hyphens; 0 permits no limit.
- Hyphenation Zone: controls the allowed white space at the ends of lines in unjustified text; larger values reduce hyphenation.

Adjust the slider between Better Spacing and Fewer Hyphens to trade off spacing quality against hyphen count.

Clear Hyphenate Capitalized Words when proper nouns and words at the start of sentences should not hyphenate.

Clear Hyphenate Last Word to keep the paragraph's final word unhyphenated.

Clear Hyphenate Across Column to stop hyphenation across column, frame, or page boundaries.

Select OK.

### Turn off hyphenation

When hyphenation is off, InDesign no longer splits words at line ends. You can make this change for individual paragraphs or through paragraph styles, and InDesign will solve spacing and line breaks without adding hyphens.

### Disable hyphenation from the Paragraph panel

Choose the paragraph or text frame where hyphenation should be disabled.

Open the Paragraph panel with Type > Paragraph.

Clear the Hyphenate checkbox.

### Disable hyphenation using Hyphenation Settings

Choose the paragraph or text frame where hyphenation should be disabled.

Select Type > Paragraph.

From the Paragraph panel menu icon, choose Hyphenation.

In the Hyphenation Settings dialog box, clear the Hyphenate checkbox.

Select OK.

### Prevent unwanted word breaks

Use nonbreaking characters when selected text must stay together across line endings. Nonbreaking spaces hold words as one unit, and nonbreaking hyphens block line breaks at hyphen characters. These settings act on the selected text separately from hyphenation settings.

### Prevent text from breaking

Select the text that must remain on one line.

Select Type > Character.

Open the Character panel menu icon and choose No Break. To protect a single word another way, insert a discretionary hyphen before its first character; press Ctrl + Shift + - (Windows) or Command + Shift + - (macOS) before the word.

### Add a nonbreaking hyphen

Put the pointer where the hyphen should be inserted.

Use Type > Insert Special Character > Hyphens and Dashes > Nonbreaking Hyphen.

### Add a nonbreaking space

Put the pointer where the space should be inserted.

Use Type > Insert White Space > Nonbreaking Space or Nonbreaking Space (Fixed Width). Then review this note.

Note

The width of Nonbreaking Space changes with point size, justification, and word spacing. Nonbreaking Space (Fixed Width), by comparison, keeps one width in every context.

## Apply and manage text formatting

Learn how Adobe InDesign applies character and paragraph formatting when text is selected or the insertion point is active.

InDesign supports several formatting routes for different workflows. Formatting is split into character-level attributes, such as font, size, and color, and paragraph-level attributes, such as alignment, indents, and spacing. You can use the Control panel or the separate Character and Paragraph panels. For repeated formatting across many text instances, character and paragraph styles are preferable to manual changes.

### Access dedicated formatting panels

Choose Window > Type & Tables > Character to display the Character panel.

Choose Window > Type & Tables > Paragraph to display the Paragraph panel.

Use the panel menu icons for additional formatting commands that are hidden in the default view.

### Format text using the Control panel

Choose the Type tool.

Place the insertion point inside the text, or drag to select the particular characters or paragraphs to format.

In the Control panel (Window > Control), use the Character Formatting Controls icon or the Paragraph Formatting Controls icon to show the matching formatting controls.

Apply the needed settings with the controls that appear.

The current selection defines the formatting scope. Results differ when you insert text, select text, or select a text frame. To change every character in an unthreaded frame without selecting the text, use the Selection tool to select the frame, and then apply the formatting.

### Apply a character style to a drop cap

Drop caps increase the size of the opening character or characters in a paragraph. Assigning a character style to a drop cap lets you customize its look and keep formatting consistent across paragraphs, either directly or as part of a paragraph style.

Select the paragraphs that should receive the styled drop cap, or place the cursor in one paragraph.

Select Type > Paragraph.

Open the panel menu icon and choose Drop Caps and Nested Styles.

In the Lines field, enter the number of lines the drop cap should span vertically.

In the Characters field, enter how many characters should use drop-cap formatting.

Choose your character style from the Character Style dropdown menu. If the needed character style is missing, choose New Character Style to create one.

If the drop cap sits too far in from the left edge, choose Align Left Edge so the original side bearing of the character is used.

If the drop cap collides with text beneath it, choose Scale for Descenders to adjust spacing.

Select OK.

### Create hanging punctuation

Punctuation marks and angled letters can leave a ragged-looking text edge. Optical Margin Alignment lets those characters extend beyond the margins for a cleaner edge. The setting affects the whole story across all threaded frames. For the best match, set it to the body text size, then use paragraph-level overrides where needed.

Select a text frame, or click anywhere within the story.

Select Type > Story.

Turn on Optical Margin Alignment in the Story panel.

In the font size field, enter a value matching your body text size.

To disable Optical Margin Alignment for one paragraph, use either the Paragraph panel menu or the Control panel menu and choose Ignore Optical Margin.

### Formatting scope

InDesign bases formatting behavior on the current selection:

- No selection, no active insertion point: Formatting becomes the default for new text frames in the current document.
- Insertion point placed in text: Formatting affects text entered after that insertion point.
- Text selected: Formatting is limited to the selected characters or paragraphs.
- Frame selected with Selection tool: Formatting affects all text in that frame, for unthreaded frames only.

For paragraph-level formatting, selecting the whole paragraph is unnecessary. A click anywhere in the paragraph, or a selection that includes any part of it, applies formatting to the entire paragraph.

### Formatting hierarchy

When more than one formatting method targets the same text, InDesign resolves priority with item 1 taking precedence:

1. Character attribute overrides (manual formatting assigned on selected text)
2. Character style (next in priority)
3. Paragraph attribute overrides (after character styles)
4. Paragraph style (after paragraph overrides)
5. CJK grid attributes (from frame-grid or named-grid settings)
6. Application default settings (lowest priority)

Because of this hierarchy, manual formatting overrides styles. To determine which styles are active on text and locate overrides, inspect the Character Styles and Paragraph Styles panels.

Note

To define default formatting for future documents, close all open documents before setting text options. Those choices then become application-wide defaults.

## Apply text wrap

Use text wrap boundaries in Adobe InDesign when text needs to route around frames, images, or drawn shapes.

Text wrap places a boundary on an object so surrounding text avoids that area. Apply it to images, shapes, or text frames. The wrap influences text on the same layer and on layers below the wrapping object, and it continues to apply after that object is moved or resized.

### Apply text wrap to simple objects

Select Window > Text Wrap.

With the Selection tool or the Direct Selection tool, choose the object that text should wrap around.

In the Text Wrap panel, choose one wrap shape:

- Wrap around bounding box: makes a rectangular boundary.
- Wrap around object shape: traces the contours of the object.
- Jump object: keeps text from appearing next to the object.
- Jump to next column: sends the text into the next column.

Enter offset values to set how much space separates the text from the wrap boundary.

Tip

For Wrap around bounding box and Wrap around object shape, set the wrapping side from the Wrap To menu.

To define the default text wrap for new objects, make sure nothing is selected before changing settings in the Text Wrap panel.

### Apply text wrap to irregular shapes

Select Window > Text Wrap.

Choose the imported image with the Selection tool or the Direct Selection tool.

In the Text Wrap panel, choose Wrap around object shape.

Enter offset values for the gap between the text and the wrap boundary.

Open the Text Wrap panel menu icon, then choose Show Options so the extra controls appear.

From the Type menu, choose a contour method:

- Bounding Box: wraps to the rectangular image bounds.
- Detect Edges: finds edges automatically.
- Alpha Channel: relies on saved alpha channels.
- Photoshop Path: relies on saved paths.
- Graphic Frame: uses the frame that contains the graphic.
- Same as Clipping: follows the clipping path.

Select Include Inside Edges when text may flow inside open interior areas of the image.

### Control text wrap settings

Refine text flow around objects in Adobe InDesign by changing wrap boundaries and offset distances.

Text wrap settings determine the gap between wrapped text and the wrap object, plus the way wrapping behaves on chosen sides or across multi-column layouts. Tuning these settings helps build balanced, legible pages without moving text by hand.

### Adjust offset distances

Select the object with text wrap applied by using the Selection tool or the Direct Selection tool.

Select Window > Text Wrap.

In the Text Wrap panel, find the offset fields named Top Offset, Bottom Offset, Left Offset, and Right Offset.

Use positive values to push the wrap boundary outward from the frame, or use negative values to pull it inward past the frame edge.

Press Enter (Windows) or Return (macOS).

### Choose the wrapping side

Choose the wrap object with the Selection tool.

If the Wrap To menu is hidden, use the Text Wrap panel menu and choose Show Options.

In the Wrap To menu, choose the needed setting. Available choices include Right Side, Left Side, Both Right & Left Sides, the spine-aware choices Side Towards Spine and Side Away from Spine, and Largest Area.

### Edit the wrap boundary

With the Direct Selection tool, choose the wrap object.

When the text wrap boundary follows the object shape, anchor points appear on the boundary path.

Use the Pen tool when adding or removing anchor points, and use the Direct Selection tool to drag anchor points or reshape the curve. After a manual boundary edit, User-Modified Path appears in the Type menu. To return to the original clipping path, choose Same as Clipping from the Type menu.

To make the boundary match the original object shape again, choose a different option in the Text Wrap panel's Type menu.

### Exclude text wrap for specific frames

Text normally routes around objects that have text wrap, but any individual text frame can be set to ignore the wrap. That setting allows text to pass behind or through wrapped objects, which helps with overlapping layouts or text that must stay fixed.

### Set a text frame to ignore wrap objects

With the Selection tool, choose the text frame that should disregard active wraps.

Open Object > Text Frame Options.

In that dialog box, turn on the Ignore Text Wrap checkbox.

Select OK.

### Use stacking order to control text wrap

Open Edit > Preferences > Composition (Windows) or InDesign > Preferences > Composition (macOS).

In Composition preferences, enable Text Wrap Only Affects Text Beneath. Unlike Ignore Text Wrap, the Text Wrap Only Affects Text Beneath preference applies to every text frame in the document.

Select OK. Any text frame placed above a wrap object in stacking order now ignores that object's text wrap automatically.

## Add or remove paragraph rules

In Adobe InDesign, add and customize horizontal rules above or below paragraphs so the lines travel with the text.

Paragraph rules are horizontal lines tied to a paragraph; they move and resize as text reflows. Use them to divide content, call attention to headings, or maintain consistent formatting through paragraph styles.

By default, the rule width follows the column. For rules above a paragraph, offset is measured from the first line's baseline to the rule's bottom edge. For rules below, the measurement runs from the last line's baseline to the top edge of the rule.

### Adjust paragraph spacing

Use the Paragraph panel to manage spacing between paragraphs. Space Before has no effect at the top of a column or frame. To change that top spacing, raise the first line's leading or increase the frame's top inset value.

Highlight the text.

Select Type > Paragraph.

In the Paragraph panel, update the field next to the Space Before icon. Also update the field next to the Space After icon and, when needed, the Space Between Paragraphs Using Same Style icon.

### Add a rule above or below a paragraph

Select the paragraph.

Select Type > Paragraph.

Open the Paragraph panel menu icon, then choose Paragraph Rules.

In the Paragraph Rules dialog box, choose Rule Above or Rule Below.

Turn on Rule On.

Select Preview so the rule is visible while you set it up.

Choose or enter values for these controls:

- Weight: defines the thickness of the rule.
- Type: defines the rule style, such as Solid, Dashed, Dotted, and so on.
- Color: chooses the rule color from the Swatches panel. Select Text Color to use the paragraph text color (the first character for Rule Above, the last character for Rule Below).
- Tint: enters a value that changes color intensity; this is unavailable for None, Paper, Registration, or Text Color.
- Gap Color and Gap Tint: adjust the gaps between dashes, dots, or lines when the line type is not solid.

For Width, choose one of these:

- Text: spans from the left edge of the text to the end of the line.
- Column: spans the entire column width.

Enter an Offset value to set the rule's vertical placement.

Select Keep In Frame to keep the rule above text inside the text frame boundaries.

Enter Left Indent and Right Indent values to reposition the rule without changing text indents.

Select OK.

Tip

To place rules both above and below one paragraph, run the process again and activate Rule On in the Paragraph Rule dialog box for Rule Above and again for Rule Below.

### Remove a paragraph rule

With the Type tool, select the paragraph.

Select Type > Paragraph.

From the Paragraph panel menu or the Control panel menu, choose Paragraph Rules.

Turn off Rule On, then select OK.

## Paragraph break options

Review the paragraph break characters available in Adobe InDesign and how each one changes text flow in a layout.

Break characters help control where text moves across frames, columns, or pages, and they also help diagnose flow problems. They take precedence over paragraph settings and can be added from Type > Insert Break Character.

### Break character types

Note

- Odd page breaks, even page breaks, and discretionary line breaks have no keyboard shortcuts. Add them through Type > Insert Break Character.
- Column, frame, and page breaks need threaded text frames. When there is no following frame, text becomes overset at the break location.

### Break insertion location

Where a break applies is based on the method used to create it:

- Break characters: the break happens right after the special character in the text flow.
- Paragraph settings: the break comes before the paragraph that contains that setting.

### Related paragraph break controls

Paragraph-level settings, rather than inserted characters, control additional break behavior:

- Keep Options: set how many lines of the next paragraph remain together. Open this from the Paragraph panel menu .
- Paragraph Style Options: provide break behavior controls that take effect when the style is applied.

## Apply paragraph borders and backgrounds

In Adobe InDesign, apply paragraph borders and backgrounds with custom colors, strokes, and corner effects.

Paragraph borders and backgrounds can emphasize content, establish hierarchy, or add styling without extra frames. They travel with the text, can be assigned to one or more paragraphs, and can be stored in paragraph styles for consistent use. They also respect paragraph formatting such as indents and spacing.

### Apply a border to selected paragraphs

Select the text frame, or place the pointer within the text in that frame.

Select Type > Paragraph.

From the Paragraph panel menu , choose Paragraph Borders and Shading.

Tip

Border options are also available from the Paragraph Styles panel menu . Choose Style Options, then choose Paragraph Border.

Set the paragraph border options needed for the border appearance.

On the Border tab, select the Border checkbox to enable the controls.

While still on the Border tab, select the Border checkbox so the settings become active.

Select Preview to inspect the result, then select OK.

### Apply background shading

Select the text frame, or put the pointer in the text inside that frame.

Select Type > Paragraph.

From the Paragraph panel menu, choose Paragraph Borders and Shading.

Move to the Shading tab.

Set the paragraph shading options that define how the background should look.

Select the Shading checkbox to enable paragraph background shading.

Turn on the Shading checkbox so paragraph background shading becomes active.

Select OK.

### Paragraph border and shading options

Before setting paragraph borders or shading, review the available options and how they affect paragraph formatting. Find these controls in the Paragraph Borders and Shading dialog box.

### Options for paragraph borders

### Offset and positioning options for paragraph borders

Note

Use the chain button when all offset values should be linked. With linking enabled, a change to one value updates the others proportionally.

### Behavior options for paragraph borders

### Options for paragraph shading

### Behavior options for paragraph shading

## See also

- [Character Styles](uxp-character-styles.md)
- [Characters](uxp-characters.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
