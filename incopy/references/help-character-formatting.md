# Formatting Text, Formatting Characters

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Formatting text — Format text; Formatting characters — Apply baseline shift.

## Formatting text — Format text

The Control panel can adjust text appearance. Depending on monitor resolution, selecting text or placing the insertion point in text makes the Control panel show character formatting controls, paragraph formatting controls, or both. The Character panel and Paragraph panel contain the same controls, and the Character panel and Paragraphs panel can also be used for text appearance changes.

Character-formatting video tutorial: www.adobe.com/go/lrvid4275_id. Paragraph-formatting video tutorial: www.adobe.com/go/lrvid4276_id.

Use the Character panel and Paragraphs panel when changing how text looks. In InDesign, the Control panel can also format text. InCopy does not include the Control panel.

Keep these text-formatting methods in mind:

For character formatting, use the Type tool  to select characters, or place the insertion point, choose a formatting option, and start typing.

For paragraph formatting, selecting the whole paragraph is unnecessary; a selected word or character, or an insertion point inside the paragraph, is enough. You can also select text across multiple paragraphs.

For future text frames in the current document, first make sure no insertion point is active and nothing is selected, then set the text formatting options. To define default formatting for new documents, close every document first and then set the text options. See Set defaults.

Select a frame when the formatting should apply to all text inside it. The frame cannot belong to a thread.

Use paragraph styles and character styles for fast, consistent text formatting.

Working-with-text video tutorial: www.adobe.com/go/vid0075.

Activate the Type tool  . Use the Type tool  or Vertical Type tool  . Put the insertion point in text, or highlight the target text. In the Control panel, choose Character Formatting Control icon  or Paragraph Formatting Control icon  . Control panel

A. Character formatting controls B. Paragraph formatting controls

Control panel In the Control panel, click the Character Formatting Control icon  or the Paragraph Formatting Control icon  . Control panel

A. Character formatting controls B. Paragraph formatting controls

Control panel Choose Type > Paragraph or Type > Character to display the Paragraph or Character panel. Specify formatting options.

### Formatting text — Text formatting precedence

Several routes can apply attributes such as font style and text direction to text, including the Control panel, frame grid options, named grids, and text styles. When multiple methods set conflicting attributes, InDesign resolves the conflict by precedence. The priority order is:

Priority 1: Character attribute overrides

Priority 2: Character style

Priority 3: Paragraph attribute overrides

Priority 4: Paragraph style

Priority 5: CJK grid attributes from a named grid or the Frame Grid Options dialog box

Priority 6: Application default (root paragraph style)

For instance, if Frame Grid Options sets one font size and a character style sets another, the character style controls the font size. Likewise, when an object style includes both a paragraph style and a named grid, the paragraph style outranks the named grid.

### Formatting text — Format a frame grid

Selecting a frame grid makes grid-formatting choices appear in the Control panel.

With a selection tool, click a frame grid. Choose any needed options in the Control panel. Control panel (when frame grid is selected)

A. Reference point B. X Location C. Y Location D. Width E. Height F. Vertical scaling G. Horizontal scaling H. Character aki I. Line aki J. Grid format name K. Grid view L. Font size M. Frame grid characters per line N. Number of lines O. Number of columns P. Column gutter

Control panel (when frame grid is selected)

### Formatting text — Copy type attributes (Eyedropper)

The Eyedropper tool can pick up type attributes, including character, paragraph, fill, and stroke settings, and apply them to other type. Its default behavior copies every type attribute. To choose a smaller or different set of copied attributes, use the Eyedropper Options dialog box.

The Eyedropper tool works only in Layout View.

### Formatting text — Copy type attributes to unselected text

With the Eyedropper tool  , click text that already uses the attributes you need. (This text may be in a different open document.) The eyedropper pointer flips direction and becomes full  , showing that the copied attributes are loaded. When the pointer is over text, an I-beam appears beside the loaded eyedropper  . With the Eyedropper tool, select the text to change.

The target text receives the attributes currently loaded in the eyedropper. While the Eyedropper tool remains active, you can keep selecting text to apply that formatting.

To stop using the Eyedropper tool, click another tool. Note

To empty the formatting attributes currently stored by the eyedropper, press Alt (Windows) or Option (Mac OS) when the Eyedropper tool contains loaded formatting. The Eyedropper tool flips direction and appears empty , indicating that it can capture new attributes. Click an item with the attributes you need, then apply those newly loaded attributes to a different target.

The eyedropper is clicked on formatted text to copy its formatting (left), and then dragged across unformatted text (middle) to apply that formatting (right).

The eyedropper is clicked on formatted text to copy its formatting (left), and then dragged across unformatted text (middle) to apply that formatting (right).

When the Eyedropper tool copies a paragraph style from text in one document to text in another document, matching style names with different attribute sets become local overrides on the destination style.

### Formatting text — Copy type attributes to selected text

With the Type tool  or Path Type tool  , select the text that should receive copied attributes. Using the Eyedropper tool  , click the source text for the attributes. (That source text must be in the same InDesign document as the text being changed.) The Eyedropper tool flips direction and appears full  , showing that the copied attributes are loaded. The selected text from step 1 receives those attributes. Type attributes copied to selected text

Type attributes copied to selected text

### Formatting text — Change which text attributes the Eyedropper tool copies

Double-click the Eyedropper tool in the toolbox. In the Eyedropper Options dialog box, choose Character Settings or Paragraph Settings. Select the attributes that the Eyedropper tool should copy, then click OK. Note

To copy or apply only paragraph attributes without changing settings in the Eyedropper Options dialog box, hold down Shift while clicking text with the Eyedropper tool.

### Formatting text — Use Quick Apply

Quick Apply lets you locate and apply styles, menu commands, scripts, variables, and most other commands listed in the Keyboard Shortcuts dialog box.

Select the text or frame that should receive the style, menu command, script, or variable. Run Edit > Quick Apply, or use Ctrl+Enter (Windows) or Command+Return (Mac OS). Begin typing the item name.

The typed name does not have to match exactly. For example, entering he can find Head 1, Head 2, and Subhead styles. It can also return Help Menu > InDesign Help as a result.

Use Quick Apply to find styles, menu commands, scripts, and variables.

Use Quick Apply to find styles, menu commands, scripts, and variables. Note

You can limit results to one category by placing the correct prefix at the start of the search; examples include m: for menu or p: for paragraph styles. To see available prefixes, use the down arrow positioned to the left of the Quick Apply text box. Categories you do not want can be cleared from that list.

Select the item you want to apply, and then:

To use a style, menu command, or variable, press Enter or Return.

To use a paragraph style while clearing overrides, press Alt+Enter (Windows) or Option+Return (Mac OS).

To use a paragraph style while removing overrides and character styles together, press Alt+Shift+Enter (Windows) or Option+Shift+Return (Mac OS).

To use an item and keep the Quick Apply list open, press Shift+Enter (Windows) or Shift+Return (Mac OS).

To dismiss the Quick Apply list without using an item, press Esc or click another spot in the document window.

For style editing, press Ctrl+Enter (Windows) or Command+Return (Mac OS).

Note

With the Quick Apply list open, use the left and right arrow keys to move through the edit field, and use the up and down arrow keys to move through the item list.

### More like this

- Working with Text video

## Formatting characters — Apply baseline shift

Baseline Shift raises or lowers selected characters in relation to the baseline of adjacent text. It helps when manually setting fractions or positioning embedded objects.

Baseline shift values applied to text

Baseline shift values applied to text Highlight the text. In the Character panel or Control panel, enter a numeric value for Baseline Shift  . Positive values raise the character baseline above the line's normal baseline; negative values place it lower. Note

To adjust the value upward or downward, click in the Baseline Shift box, then press the Up or Down Arrow key. Hold down Shift while pressing the Up or Down Arrow key to change the value in larger steps.

To set the default increment for baseline shifting, enter a Baseline Shift value in the Units & Increments section of the Preferences dialog box.

### Formatting characters — Make characters superscript or subscript in a non-OpenType font

Select the target text. In the Character panel menu or the Control panel, choose Superscript or Subscript.

Choosing Superscript or Subscript applies a preset baseline shift value and type size to the selected text.

Those applied values are percentages derived from the current font size and leading, using settings from the Type Preferences dialog box. When the text is selected, these values are not shown in the Baseline Shift or Size boxes of the Character panel.

Note

Advanced Type preferences let you change the default size and position used for superscripts and subscripts.

### Formatting characters — Apply underline or strikethrough

The size of the type determines the default underline and strikethrough weight.

Jeff Witchel offers a video tutorial on underlining at Custom Underlines in InDesign.

Select the target text. In the Character panel menu or the Control panel, choose Underline or Strikethrough.

### Formatting characters — Change underline or strikethrough options

Custom underlining helps create a consistent underline beneath differently sized characters, and it can also produce highlighting behind text.

Before and after adjusting underlines

Before and after adjusting underlines Open Underline Options or Strikethrough Options from the Character panel menu or the Control panel menu. Make any needed changes below, then click OK:

Enable Underline On or Strikethrough On for the current text.

For Weight, pick a weight or enter a value that sets the thickness of the underline or strikethrough line.

For Type, choose one of the underline or strikethrough options.

For Offset, set the line's vertical position. The offset is measured from the baseline. Negative values place the underline above the baseline and the strikethrough below it.

Select Overprint Stroke to ensure that the stroke does not knock out inks underneath it on a printing press.

Choose a color and tint. If the chosen line type is not solid, choose a gap color or gap tint to alter the space inside dashes, dots, or lines.

Select Overprint Stroke or Overprint Gap when the underline or strikethrough prints over another color and you need to avoid problems caused by printing misregistration.

Note

For underline or strikethrough settings inside a paragraph or character style, work in the Underline Options or Strikethrough Options section of the dialog box that opens while creating or editing that style.

### Formatting characters — Apply ligatures to letter pairs

When the selected font supplies them, InDesign can substitute ligature glyphs for letter combinations such as "fi" and "fl" automatically. Text formatted with the Ligature option still behaves like editable text, and spell checking does not mistake the substituted glyphs for misspellings.

Individual characters (top) and ligature combinations (bottom)

Individual characters (top) and ligature combinations (bottom)

For OpenType fonts, InCopy uses the typeface's standard designer-supplied ligatures when Ligatures is enabled through the Character panel menu, Control panel menu, or in-context menu. Fonts may also offer more decorative optional ligatures; choose the Discretionary Ligatures command to use those.

Select text.

Choose Ligatures from the pop-up. You can also turn on Ligatures from the Character panel menu or the Control panel menu.

### Formatting characters — Change the color, gradient, or stroke of text

Characters can receive colors, gradients, and strokes while remaining editable text. Apply those appearances with the Swatches panel and Stroke panel, or set Character Color while creating or modifying a text style definition.

Swatches

A. Swatch affects fill or stroke B. Swatch affects container or text C. Tint percentage

Swatches Do one of the following:

To recolor text inside a frame, select the text with the Type tool.

To recolor every character in a frame, select the frame with the Selection tool. When the text, rather than the container, should receive the color, make sure Formatting Affects Text is selected in the Tools panel or the Swatches panel.

In the Tools panel or in the Swatches panel, choose whether the change applies to fill or stroke. Selecting Stroke limits the color change to character outlines. Then use one of these methods:

Click a color or gradient swatch in the Swatches panel.

In the Stroke panel, specify a weight or other stroke options.

Another way to apply a gradient is to drag across selected text with the Gradient Swatch tool or the Gradient Feather tool.

Note

For reverse type, set the text fill color to white or [Paper], then give the frame a dark fill. A paragraph rule behind the text can also create reverse type; if that rule is black, change the type to white.

### Formatting characters — Change the color and gradient of text

The Swatches panel lets you assign colors and gradients to character strokes and fills. In a linked story, the available choices include the colors or gradients defined in the linked InDesign layout. In a stand-alone story, you can use the document defaults plus any new colors created in that document.

Note

InCopy cannot create gradients. A gradient appears only when an InDesign layout supplies it.

Swatches

A. Swatch affects fill or stroke B. Swatch affects container or text C. Tint percentage

Swatches

### Formatting characters — Change the color of text

Select the text to color with the Type tool. Open the Swatches panel by choosing Window > Swatches, then click a color or gradient swatch. Note

Color can be applied in Galley, Story, or Layout view, but the change is visible only in Layout view.

### Formatting characters — Specify the type of swatches to display

Choose Window > Swatches to display the Swatches panel. At the bottom of that panel, choose one of these display filters:

To display every color, tint, and gradient swatch, click the Show All Swatches button.

Click the Show Color Swatches button when you want only process color, spot color, and tint swatches.

To show gradient swatches only, click the Show Gradient Swatches button.

### Formatting characters — Add transparency effects to text

Add transparency treatments, including drop shadows, to text through the Effects panel.

Mike Rankin gives examples of transparency effects in InDesign Eye Candy, Part I.

Select the text frame with the Selection tool. Choose Object > Effects > [effect]. From the Settings For menu, choose Text.

Choose Object when the selected effects should affect the text frame stroke and fill together with the text it contains.

Set the attributes for the effect and click OK.

To revise the text blending mode or opacity settings, adjust them in the Effects panel.

### Formatting characters — Assign a language to text

The language assigned to text controls the spelling and hyphenation dictionary used for it. That assignment does not alter the characters themselves.

Do any of the following:

To use a language only on selected text, select the text.

To set the default dictionary used in InDesign, choose the language while no documents are open.

To set the default dictionary for one document, open that document, choose Edit > Deselect All, and then select the language.

Choose the needed dictionary from the Language menu in the Character panel.

For spelling and hyphenation, InDesign relies on Proximity dictionaries, with WinSoft dictionaries used for some languages. These dictionaries allow language assignment down to a single character. Each one includes hundreds of thousands of words and standard syllable-break information. Changing the default language leaves existing text frames and documents unchanged.

Customize language dictionaries so specialized vocabulary is recognized and treated the way you need.

InDesign's language locking blocks CJK text from receiving a non-CJK language assignment.

How dictionaries affect hyphenation

A. "Glockenspiel" in English B. "Glockenspiel" in Traditional German C. "Glockenspiel" in Reformed German

How dictionaries affect hyphenation

### Formatting characters — Change the case of type

All Caps and Small Caps affect how text is displayed, but the underlying text does not change. Change Case, by contrast, edits the capitalization of the selected characters. This matters for Find/Change and spell checking. For instance, if the document contains "spiders" and you apply All Caps, a Case Sensitive Find/Change search for "SPIDERS" will not locate that formatted word. Use Change Case instead of All Caps when you want searches and spell checks to work with the changed capitalization.

Anne-Marie Concepcion has an article on small caps called Small Caps vs OpenType All Small Caps.

### Formatting characters — Change text to All Caps or Small Caps

All caps capitalizes all Roman text. Small caps also capitalizes Roman text, while sizing it roughly like lowercase characters.

InDesign can convert the case appearance of selected text automatically. With small caps formatting, InDesign uses the font's own small-cap characters when they exist. If the font lacks them, InDesign creates simulated small caps from reduced regular capital letters. The Type Preferences dialog box controls the size of synthesized small caps.

Before (top) and after (bottom) setting BC and AD in small caps to complement old-style numerals and surrounding text

Before (top) and after (bottom) setting BC and AD in small caps to complement old-style numerals and surrounding text

When All Caps or Small Caps is applied to OpenType fonts, the result is more refined typography. For an OpenType font, All Small Caps is also available in the Character panel menu and the Control panel. (See Apply OpenType font attributes.)

Select text. In the Character panel menu or the Control panel, choose All Caps or Small Caps. Choosing Small Caps has no effect when the selected text was typed entirely in capitals.

### Formatting characters — Specify the size for small caps

Open Advanced Type preferences: Edit > Preferences > Advanced Type (Windows); InCopy > Preferences > Advanced Type (Mac OS). In Small Caps, enter the percentage of the original font size that small-cap text should use. Then click OK.

### Formatting characters — Change capitalization

Select text. Choose one of these commands in the Type > Change Case submenu:

To make every character lowercase, choose Lowercase.

To capitalize the first letter in each word, choose Title Case.

To make every character uppercase, choose Uppercase.

To capitalize the first letter in each sentence, choose Sentence Case.

Note

Sentence Case treats period (.), exclamation point (!), and question mark (?) characters as sentence endings. Because those characters can appear in abbreviations, file names, or Internet URLs, Sentence Case may change capitalization in ways you did not expect. Proper names can also become lowercase even when they should stay uppercase.

### Formatting characters — Scale type

Type scaling sets height and width as proportions of each character's original dimensions. Characters with no scaling are at 100%. Some type families include a real expanded font designed with a wider horizontal spread than the plain style. Because scaling deforms letterforms, use an actual condensed or expanded font when the family provides one.

Scaling fonts horizontally

A. Unscaled type B. Unscaled type in condensed font C. Scaled type in condensed font

Scaling fonts horizontally

### Formatting characters — Adjust vertical or horizontal scaling

Select the text to scale. In the Character panel or Control panel, enter a numeric value for Vertical Scaling or Horizontal Scaling.

When the Use New Vertical Scaling in Vertical preference option is selected, Roman glyphs in vertical text swap X and Y scale behavior, so every item in the line scales in the same direction. (See Change CJK composition preferences.) If Adjust Line Height With Char Scale is selected in the Character panel menu, glyph Y scale influences line height. Scaling frame grids also changes the Y scale, so you may need to adjust line height to prevent auto-gyoudori on the scaled grid.

### Formatting characters — Scale text by resizing the text frame in InDesign

Do any of the following:

With the Selection tool, hold down Ctrl (Windows) or Command (Mac OS), and drag a corner of the text frame to resize it.

With the Scale tool, resize the frame.

### Formatting characters — Determine the appearance of scaled text values

Scaling a frame also scales the text inside it. For example, if a text frame is doubled in size, the contained text doubles as well; 20-point text becomes 40 points.

David Blatner discusses scaled text frames in Making a Magnifying Glass Text Frame in InDesign.

A preference controls how scaled text is reported in panels:

By default, when Apply To Content is selected, the Font Size fields in the Control panel and Character panel show the new text size, such as 40 pt. If Adjust Scaling Percentage is selected, those Font Size fields show both original and scaled sizes, such as "20 pt (40)."

The Transform panel scaling values report the horizontal and vertical percentages used to scale the frame. With the default Apply To Content setting, those values return to 100% after text is scaled. When Adjust Scaling Percentage is selected, the values describe the scaled frame, so doubling the frame scale appears as 200%.

Tracking frame scale changes helps when you need to restore a frame and its text to original size. It also helps identify how much the frame size was changed. To track scaling for frames and the text they contain:

Open General preferences by choosing Edit > Preferences > General (Windows) or InDesign > Preferences > General (Mac OS).

Enable Adjust Scaling Percentage, and then click OK.

Note the following:

Adjust Scaling Percentage applies only to frames scaled after the preference is enabled, not to frames that already exist.

Adjust Scaling Percentage remains attached to the text. Even after you turn that preference off and scale the frame again, the scaled point size still appears in parentheses.

To clear the parenthesized scaled point size in the Transform panel, choose Redefine Scaling as 100% there. This command does not alter the visible scaled frame.

When Adjust Scaling Percentage is selected, editing text or scaling one frame in a threaded set scales the text, even if that text moves into another frame. With Apply To Content selected, text that flows into another frame because of editing no longer carries the scaling.

### Formatting characters — Skew type

Select text. Enter a numeric Skewing value in the Character panel. Positive numbers lean type to the right; negative numbers lean it to the left.

A slant angle on type is not the same as real italic glyphs.

### More like this

- Apply OpenType font attributes
- OpenType fonts
- Add rules (lines) above or below paragraphs
- Hyphenation and spelling dictionaries
