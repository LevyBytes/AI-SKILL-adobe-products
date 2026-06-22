# Formatting Paragraphs

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

See www.adobe.com/go/lrvid4276_id for a video tutorial about formatting paragraphs.

## Adjust paragraph spacing

Paragraph spacing sets how much gap appears between paragraphs. InCopy ignores Space Before when a paragraph starts at the top of a column or frame. In that situation, increase the leading on the paragraph's first line, or adjust InDesign's text-frame top inset.

Select the text.

Use either the Paragraph panel or Control panel to set Space Before, Space After, and Space Between Paragraphs Having Same Style.

Note

- Space Between Paragraphs Having Same Style applies only to adjacent paragraphs sharing a paragraph style. If the styles differ, InCopy uses the current Space Before and Space After values instead.
- For consistent formatting, set paragraph spacing in the paragraph styles you define.

## Use drop caps

Drop caps can be assigned to one paragraph or to several paragraphs at once. The drop cap baseline is positioned below the paragraph's first-line baseline by one or more lines.

Drop cap size changes according to whether the first-line drop cap characters are half-width roman or full-width CJK. For half-width roman characters, the cap height of the drop cap aligns with the cap height of the paragraph's first line, and the Roman baseline of the drop cap aligns with the baseline on the final drop-cap line in the paragraph. The drop cap's embox top aligns with the embox top of the first paragraph line, and its embox bottom aligns with the embox bottom of the final drop-cap line in the paragraph.

You can also make a character style for the drop-cap characters. For example, set the drop cap to 1-line and 1-character, apply a character style that enlarges the initial letter, and create a tall cap, also called a raised cap.

One-character, three-line drop cap (left), and five-character, two-line drop cap (right)

One-character, three-line drop cap (left), and five-character, two-line drop cap (right)

## Create a drop cap

After selecting the Type tool, click the paragraph where the drop cap should appear. Use the Paragraph panel or Control panel to set Drop Cap Number Of Lines to the line count occupied by the drop cap. For Drop Cap One Or More Characters, enter how many characters belong to the drop cap. To apply a character style to the drop cap character, open Drop Caps And Nested Styles from the Paragraph panel menu, then select the character style you created.

Note

The Drop Caps And Nested Styles dialog box can also align the drop cap to the text edge, reduce the space on the left side of the drop cap, and compensate for drop cap letters with descenders, such as "g" and "y." For visual effect, select one or more drop cap letters before resizing, skewing, or changing their typeface.

Note

The Drop Caps And Nested Styles dialog box also provides additional drop cap adjustments. Available controls include text-edge alignment, descender scaling, frame-grid ignoring, frame-grid padding, and scaling up or down to the grid.

## Remove a drop cap

With the Type tool selected, click the paragraph that contains the drop cap. In the Paragraph panel or Control panel, set Drop Cap Number Of Lines or Drop Cap Number Of Characters to 0.

## Add rules (lines) above or below paragraphs

Paragraph rules are attributes that travel with a paragraph on the page and resize with it. When headings use a rule in the document, consider including that rule in a paragraph style definition. The rule width comes from the column width.

For a rule above a paragraph, the offset is measured from the baseline of the top text line to the rule's bottom edge. For a rule below a paragraph, the offset is measured from the baseline of the last text line to the rule's top edge.

Placement of rules

A. Rule above paragraph B. Rule below paragraph

Placement of rules

A video tutorial from Michael Murphy explains special effects made with paragraph rules at Paragraph Rules Rule.

Creative Curio has an article about inventive paragraph-rule uses at Creative Uses for Paragraph Rules in InDesign, Pt 1.

## Add a rule above or below a paragraph

Select text. From the Paragraph panel menu or Control panel menu, choose Paragraph Rules. At the top of the Paragraph Rule dialog box, choose Rule Above or Rule Below. Turn on Rule On.

Note

For a paragraph that needs both an upper and lower rule, enable Rule On under Rule Above and again under Rule Below.

Select Preview to view the rule appearance. For Weight, choose a weight or enter a value to set the rule thickness. Increasing the Weight value for Rule Above expands the rule upward; increasing it for Rule Below expands the rule downward. Select Overprint Stroke when press output should leave underlying inks intact instead of clearing them. Then set either or both color controls:

Choose a color. The choices available are the colors listed in the Swatches panel. Select Text Color to use the color of the first character in the paragraph for Rule Above, and the color of the last character for Rule Below.

Choose a tint or enter a tint value. The chosen color supplies the tint basis. Built-in colors None, Paper, Registration, and Text Color cannot have tints created from them.

If any line type other than solid was selected, choose a gap color or gap tint to change the area between dashes, dots, or lines.

Choose the rule width. The choices are Text, from the left text edge to the line end, or Column, from the left column edge to the right column edge. If the frame's left edge has a column inset, the rule starts at that inset. To set the rule's vertical position, enter an Offset value. To keep the rule above text inside the text frame, select Keep In Frame. If Keep In Frame is not selected, the rule can extend outside the text frame.

Note

To align a paragraph rule at the top of one column with the text at the top of the neighboring column, select Keep In Frame.

Enter Left Indent and Right Indent values to set rule indents rather than text indents. Select Overprint Stroke when the paragraph rule prints over another color and you want to avoid problems from printing misregistration. Then click OK.

## Remove a paragraph rule

With the Type tool, click inside the paragraph containing the paragraph rule. Open Paragraph Rules from the Paragraph panel menu or Control panel menu. Turn Rule On off, then click OK.

## Ways to control paragraph breaks

Paragraph break controls help remove orphans and widows, meaning words or single text lines separated from the rest of their paragraph. Orphans appear at the bottom of a column or page, while widows appear at the top of a column or page. Another layout issue is a heading left by itself on one page while the following paragraph begins on the next page. The following approaches can resolve those paragraph-break problems:

Discretionary hyphens

Inserted with Type > Insert Special Character > Hyphens And Dashes > Discretionary Hyphen, a discretionary hyphen appears only when the word actually breaks. This avoids a common typography problem in which a hyphenated word such as "care-giver" shows up in the middle of a line after text reflows. A discretionary line break character can be added in a similar way.

No Break

Use No Break from the Character panel menu so selected text cannot break across a line.

Nonbreaking spaces

Place a nonbreaking space, Type > Insert White Space > [nonbreaking space], between words that should stay together.

Keep Options

Use Keep Options from the Paragraph panel menu to define how many lines in the next paragraph stay with the current paragraph.

Start Paragraph

In the Keep Options dialog box, use Start Paragraph to make a paragraph, usually a title or heading, begin at the top of a page, column, or section. This works especially well when included in a heading paragraph style.

Hyphenation Settings

Use Hyphenation from the Paragraph panel menu to adjust hyphenation settings.

Edit text

Depending on the document type, editing the text may not be available. When you have permission to rewrite, small wording changes can often improve a line break.

Use a different composer

As a general practice, use Adobe Paragraph Composer so InDesign composes paragraphs automatically. If the paragraph composition is not what you want, switch to Adobe Single-line Composer in the Paragraph panel menu or Control panel menu, then adjust selected lines one at a time. See Compose text.

As a general practice, use Adobe Japanese Paragraph Composer or Adobe Paragraph Composer so InDesign composes paragraphs automatically. If the paragraph composition is not what you want, switch to Adobe Japanese Single-line Composer or Adobe Single-line Composer in the Paragraph panel menu or Control panel menu, then adjust selected lines one at a time.

## Control paragraph breaks using Keep Options

Keep Options lets you set how many lines of the next paragraph remain attached to the current paragraph as text moves between frames. This helps prevent headings from being separated from the body text they introduce. InDesign can mark paragraphs that sometimes break contrary to your settings.

If your layout does not require columns to end on the same last baseline, Keep Options may be unnecessary.

Note

Use Edit > Preferences > Composition (Windows) or InCopy > Preferences > Composition (Mac OS), turn on Keep Violations, and click OK to show paragraphs that break Keep Options.

Select the paragraph or paragraphs to change. Open Keep Options from the Paragraph panel menu or Control panel menu. (The same controls are available while creating or editing a paragraph style.) The Paragraph panel menu also contains Keep Options. (Paragraph style creation or editing also exposes these keep options.) Select any of these options, then click OK:

Select Keep With Previous to keep the current paragraph's first line with the previous paragraph's last line.

For Keep With Next \_ Lines, enter the number of lines, up to five, from the following paragraph that stay with the current paragraph's final line. This is especially useful for keeping a heading with the next few lines of the paragraph after it.

Select Keep Lines Together and then select All Lines In Paragraph to keep the paragraph from breaking.

Select Keep Lines Together, select At Start/End Of Paragraph, and enter the number of lines required at the beginning or ending of the paragraph to avoid orphans and widows.

For Start Paragraph, choose an option that forces InDesign to move the paragraph to the next column, frame, or page. When Anywhere is selected, Keep Line Settings determines the start position. Other options force the paragraph to begin at their named positions.

Note

When creating paragraph styles for headings, use the Keep Options panel to keep each heading with the paragraph that follows.

## Create hanging punctuation

Optical Margin Alignment is intended for Roman text. For details on CJK punctuation hanging, see Apply kinsoku hanging.

Letters such as "W" and punctuation marks can make a column's left or right edge look uneven. Optical Margin Alignment determines whether periods, commas, quotation marks, dashes, and letter edges such as W and A hang outside the text margins so the type looks visually even.

Before (left) and after (right) applying Optical Margin Alignment

Before (left) and after (right) applying Optical Margin Alignment

Select a text frame, or click anywhere in the story. Choose Type > Story. Select Optical Margin Alignment. Choose a font size that sets the right amount of overhang for the type size in the story. For best results, use the same size as the text.

Note

For a single paragraph, disable Optical Margin Alignment by choosing Ignore Optical Margin from the Paragraph panel menu or Control panel menu.

## Create a paragraph border

Paragraph borders let you place a border around one or more paragraphs. Corner designs can be customized to emphasize the paragraph with decorative effects.

Before applying paragraph border within a text frame, select the frame or put the pointer in its text.

Choose one route:

- Paragraph Styles panel (Window > Styles > Paragraph Styles): choose Style Options, then choose Paragraph Border.
- Paragraph panel (Window > Type and Tables > Paragraph): open Paragraph Borders and Shading.

The Border dialog contains these options:

Top:

Enter the top border value for the selected paragraph.

Left:

Enter the left border value for the selected paragraph.

Bottom:

Enter the bottom border value for the selected paragraph.

Right:

Enter the right border value for the selected paragraph.

Type:

Choose the stroke type used for the paragraph border.

Color:

Choose a stroke color for the paragraph border.

Tint:

Enter the tint value for the paragraph border stroke.

Overprint:

Select this option to apply overprint.

Gap Color:

Set the color shown in the spaces between dashes, dots, or multiple lines in a patterned stroke.

Gap Tint:

Enter a tint value when a gap color is specified.

Cap:

Choose the cap style that controls both ends of an open path: Butt cap makes squared ends that stop at the endpoints. Round cap makes semicircular ends extending half the stroke width beyond the endpoints. Projecting cap makes squared ends extending half the stroke width beyond the endpoints, so the stroke weight extends evenly in every direction around the path.

Join:

Set how the stroke appears at corner points: Miter join makes pointed corners extending past the endpoint. Round join makes rounded corners extending half the stroke width beyond the endpoints. Bevel join makes squared corners that stop at the endpoints.

Corner Size And Shape:

Choose the corner size and shape. Each of the four corners can have its own size and shape.

Top (Offsets):

Enter the value that extends the border beyond the top margin.

Left (Offsets):

Enter the value that extends the border beyond the left margin.

Bottom (Offsets):

Enter the value that extends the border beyond the bottom margin.

Right (Offsets):

Enter the value that extends the border beyond the right margin.

Top Edge:

Choose the top-edge position of the border for the selected paragraph.

Bottom Edge:

Set the bottom-edge position of the border for the selected paragraph.

Width:

Set the border width. Selecting Column spans the border across the text frame; selecting Text extends the border across the text.

Display Border If Paragraph Splits Across Frames/Columns:

Enable this to show a border when paragraph text flows across columns or from one threaded frame into another.

Merge Consecutive Borders And Shading With Same Settings:

Enable this to combine the paragraph border and shading of two consecutive paragraphs when they share the same paragraph border and shading properties.

Check the Chain button to keep every offset value identical. When one offset value changes, the other values update as well.

To use different offset values, make sure the chain button is not selected.

Click OK.

## Create a shade (or color) behind a paragraph

Paragraph Shading lets you create a shade, or color, behind a paragraph.

When a paragraph is shaded in a document, InCopy expands and contracts the shade as paragraph content increases or decreases. The shade also moves with the paragraph.

Before applying paragraph border within a text frame, select the frame or put the pointer in its text.

Choose one route:

- Paragraph Styles panel (Window > Styles > Paragraph Styles): choose Style Options, then choose Paragraph Shading.
- Paragraph panel (Window > Type and Tables > Paragraph): open Paragraph Borders and Shading.

The Shading dialog contains these options:

Color:

Choose a color for shading.

Tint:

Enter the tint value.

Overprint:

Select this option to apply overprint.

Corner Size And Shape:

Choose the corner size and shape. Each of the four corners can have its own size and shape.

Top (Offsets):

Enter the value that extends the shade beyond the top margin.

Left (Offsets):

Enter the value that extends the shade beyond the left margin.

Bottom (Offsets):

Enter the value that extends the shade beyond the bottom margin.

Right (Offsets):

Enter the value that extends the shade beyond the right margin.

Top Edge:

Choose the top-edge position of the shading for the selected paragraph.

Bottom Edge:

Set the bottom-edge position of the shading for the selected paragraph.

Width:

Set the shading width. Selecting Column spans the shade across the text frame; selecting Text extends the shade across the text.

Clip To Frame:

Select this option to clip shading at the frame edges.

Do Not Print Or Export:

Enable this to ignore shading when the document is printed or exported to formats such as PDF, EPUB, JPEG, and PNG.

Check the Chain button to keep every offset value identical. When one offset value changes, the other values update as well.

To use different offset values, make sure the chain button is not selected.

Use OK to close the dialog.

### More like this

- Add paragraph and character styles
- Drop caps and nested styles
- Apply a character style to a drop cap
- Add column, frame, and page breaks
