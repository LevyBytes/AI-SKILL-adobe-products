# Aligning Text

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Text in a text frame can align to one edge or inset, or to both. Alignment to both edges is justification. You may justify a paragraph while leaving the final line out of the justification, using Justify Left or Justify Right, or justify the final line as well with Justify All. For short final lines, a special end-of-story character and a flush space can be useful.

Justify Left (left) and Justify All (right)

Justify Left (left) and Justify All (right)

Note

With all lines justified through the Adobe Paragraph Composer, InDesign adjusts the text so the paragraph keeps an even density and a pleasing appearance. Justified spacing can also be refined manually.

Text set to center or justify in a frame grid stops matching the grid exactly. Paragraph alignment can also be assigned to every paragraph in the frame grid.

Select the text. In the Paragraph panel or Control panel, choose the needed Alignment button: Align Left, Align Center, Align Right, Left Justify, Center Justify, Right Justify and Full Justify. Optionally, click Align Towards Spine or Align Away From Spine.

For a paragraph with Align Towards Spine, text on a left-hand page aligns right; when that text flows to a right-hand page, or the frame is moved there, it aligns left. Align Away From Spine reverses that behavior: text on a left-hand page aligns left, and text on a right-hand page aligns right.

For vertical frames, alignment toward or away from the spine does not change the text because the alignment direction runs parallel to the spine.

Note

To put the left side of a line flush left and the right side flush right, place the insertion point where the right-aligned portion should begin, press Tab, then right-align the remaining text on that line.

## Aligning text — Align paragraphs to a baseline grid

For paragraphs in a plain text frame, aligning them to the baseline grid can be especially helpful. Frame-grid text is aligned to the embox center by default, but individual paragraph grid alignment can be switched among the roman baseline, the frame grid embox, and the frame grid ICF.

The baseline grid uses the document's body-text leading as its measure. Page elements can use multiples of that value so text lines stay consistent from column to column and page to page. For instance, with 12-point leading for body text, you might set heading text to 18-point leading and add 6 points of spacing before the following paragraphs.

Grid alignment

A. Text aligned to the embox center B. Text aligned to the embox top C. Text aligned to the ICF

Grid alignment

Besides choosing grid alignment, you can specify whether only a paragraph's first line aligns to the grid. When different character sizes appear on the same line, you can also set how smaller characters align with larger ones. For more information, see Align text of different sizes.

Note

If the text size matches the default frame grid settings, changing grid alignment will not move the text. Grid alignment changes matter when the text in a frame grid uses a font or size other than the frame defaults.

Use the Grids section of the Preferences dialog box to change baseline grid settings.

To display the baseline grid, choose View > Grids & Guides > Show Baseline Grid. Baseline grids follow the writing direction of the text frame.

Note

The baseline grid appears only when the document zoom level exceeds the view threshold set in Grids Preferences. Zooming in may be required before the baseline grid is visible.

## Aligning text — Align paragraphs to the baseline grid

Select the text. From the Paragraph panel menu, choose Grid Alignment > Roman Baseline.

## Aligning text — Align only the first line to the baseline grid

Select the paragraphs to align. From the Paragraph menu or Control panel menu, choose Only Align First Line to Grid. In the Paragraph panel or Control panel, click Align to Baseline Grid. From Grid Alignment in the Paragraph panel or Control panel menu, choose any option except None.

If leading is larger than the baseline grid value, automatic gyoudori is applied and the line snaps to the next grid line. For example, with 16-point leading and a 14-point baseline grid, the text snaps to every other grid line.

To center text in a baseline grid, position it above or below virtual body, or place it above or at the bottom of the average printing surface, choose an option other than None from the Grid Alignment menu.

## Aligning text — Align paragraphs to a baseline grid

The baseline grid corresponds to the leading used for body text in a document. By basing page elements on multiples of that value, you can keep text aligned across columns and pages. For example, when body text uses 12-point leading, heading text could use 18-point leading with 6 points of space before the following paragraphs.

A baseline grid keeps text elements positioned consistently on a page. Adjust a paragraph's leading so its baselines match the page's underlying grid; this helps align baselines across multiple columns or neighboring text frames. Baseline grid settings are controlled through Grids in the Preferences dialog box.

It is also possible to align only the first line of a paragraph to the baseline grid while the remaining lines use the specified leading values.

To show the baseline grid, choose View > Grids & Guides > Show Baseline Grid.

Visibility note

This grid appears only when the document zoom level is above the view threshold setting in Grids Preferences. You may have to zoom in before the baseline grid is displayed.

## Aligning text — Align paragraphs to the baseline grid

Select the text. From the Paragraph panel or Control panel, choose Align To Baseline Grid .

Note

To keep the text leading unchanged, make the baseline grid leading match the text leading, or set it to a factor of that value.

## Aligning text — Align only the first line to the baseline grid

Select the paragraphs that should align. From the Paragraph menu or Control panel menu, choose Only Align First Line To Grid. Then, in the Paragraph panel or Control panel, choose Align To Baseline Grid .

## Aligning text — Create balanced headline text

Balance Ragged Lines redistributes ragged-aligned text over multiple lines. It is useful for centered paragraphs, pull-quotes, and headings that run across more than one line.

Before and after applying Balance Ragged Lines to the title

Before and after applying Balance Ragged Lines to the title

Click inside the paragraph to balance. From the menu in the Paragraph panel or Control panel, choose Balance Ragged Lines.

The option works only when Adobe Paragraph Composer is active.

Availability also depends on Alignment being set to Align Left/Top, Center Justify or Align Right/Bottom, with Adobe Paragraph Composer in use.

## Aligning text — Set Gyoudori

Gyoudori centers a chosen count of lines within a paragraph. Use gyoudori to emphasize one-line paragraphs, including headings and titles. For paragraphs longer than one line, Paragraph Gyoudori lets the whole paragraph occupy the selected line count.

Gyoudori set to 2 (left) and gyoudori set to 3 (right)

Gyoudori set to 2 (left) and gyoudori set to 3 (right)

In the Paragraph panel or Control panel, use Gyoudori to enter how many lines should be center justified. To center the full paragraph across that line count, select Paragraph Gyoudori from the Paragraph panel menu or Control panel menu.

Note

In text frames, Gyoudori uses the baseline grid value by default.

## Aligning text — Set paragraph gyoudori

For a paragraph with multiple lines, Paragraph Gyoudori makes the whole paragraph fit across the specified gyoudori lines, such as 2 paragraph lines on 3 grid lines. If Paragraph Gyoudori is off, the setting is applied line by line; a paragraph of 2 lines can therefore occupy 6 grid lines overall.

Setting line deletion to 2 (left) and 3 (right)

Setting line deletion to 2 (left) and 3 (right)

Select the paragraph that needs paragraph gyoudori. From the Paragraph panel menu or the Control panel menu, choose Paragraph Gyoudori. Set the gyoudori paragraph leading to match the layout.

When Paragraph Gyoudori centers a paragraph over a chosen number of grid lines, each line's spacing follows the leading value rather than the grid aki. If frame grid text is using the default 100% auto leading amount, you may need to change each line's leading to spread the lines correctly.

## Aligning text — Create paragraphs that span or split columns

A paragraph can span several columns in a text frame, creating a straddle head effect. The span can cover every column or only a chosen number of columns. In a multicolumn text frame, text before a spanning paragraph is balanced automatically once the paragraph spans columns.

A paragraph may also be split into several columns within that same text frame.

For a video tutorial about creating paragraphs that span or split columns, open www.adobe.com/go/lrvid5151_id_en or http://tv.adobe.com/go/4952/.

Paragraph spanning and splitting multiple columns

A. Heading that spans columns B. Split column

Paragraph spanning and splitting multiple columns

## Aligning text — Span a paragraph across columns

Put the insertion point inside the paragraph.

A paragraph style can store this setting too, for instance one used for headings.

Use the Control panel menu or a Paragraph panel menu to choose Span Columns.

From the Paragraph Layout menu, choose Span Columns.

In the Span menu, select how many columns the paragraph should cover. Choose All to span every column.

For additional spacing before or after the spanning paragraph, enter Space Before Span and Space After Span values, then click OK.

## Aligning text — Split a paragraph into columns

Put the insertion point inside the paragraph.

A paragraph style, including one used for headings, can store the feature as well.

Use the Control panel menu or a Paragraph panel menu to choose Span Columns.

From the Paragraph Layout menu, choose Split Columns.

Set these options, then click OK:

Sub-columns

Select the number of columns into which the paragraph should be split.

Space Before Split / Space After Split

Adds spacing before or after the split paragraph.

Inside Gutter

Sets the space between split paragraphs.

Outside Gutter

Sets the space between the outside edges of the split paragraphs and the margins.

## Aligning text — Align or justify text vertically within a text frame

Within a frame, lines of text can be aligned or distributed on the vertical axis so type stays vertically consistent across frames and columns.

Frame alignment lets text align vertically, or horizontally when vertical type is used, inside a plain-text frame with the frame as the reference.

Text can sit at the top, center, or bottom of the frame according to each paragraph's leading and paragraph spacing. Vertical justification is also available; it spreads lines evenly even when their leading and paragraph spacing values differ.

Vertical justification—Bottom (left) and Justify (right)

Vertical justification—Bottom (left) and Justify (right) Top of horizontal frame (upper left), center alignment (upper right), bottom (lower left), and justified (lower right)

Top of horizontal frame (upper left), center alignment (upper right), bottom (lower left), and justified (lower right)

Calculations for vertical text alignment and justification use the baseline positions for each line of text in the frame. Keep these points in view while changing vertical alignment:

For Align Top/Right, the defining point is the first-line baseline. For this top alignment, the First Baseline Offset option in the Text Frame Options dialog box changes this value. For Align Bottom/Left, the defining point is the last-line baseline in bottom-aligned text.

If paragraphs use Grid Alignment together with Align Top/Right, Center Justify, Align Bottom/Left, every line snaps to the baseline grid. With Justified, the baseline grid is used only for the first and last lines.

Changing Top or Bottom Inset for a text frame in the Text Frame Options dialog box moves the corresponding first or last baseline.

For top-aligned text, the frame top is defined by the baseline of the first line. This value is affected by the First Baseline Offset option in the Text Frame Options dialog box.

For bottom-aligned text, the frame bottom is defined by the baseline of the last line. Footnote text does not become justified.

When Align to Baseline Grid is active for paragraphs using Top, Center, or Bottom alignment, every line aligns to the baseline grid. With Justified, only the first and last lines align to the baseline grid.

Changing Top or Bottom Inset for a text frame in the Text Frame Options dialog box shifts the corresponding first or last baseline.

Use either selection method:

Select a text frame with the Selection tool.

Click in a text frame with the Type tool .

Choose Object > Text Frame Options. In the Text Frame Options dialog box, locate Vertical Justification and choose Top/Right, Center, Bottom/Left, or Justify. In that same Vertical Justification area, open the Align menu and choose one of these options:

For vertical alignment from the top edge downward, choose Top. This is the default setting.

To center the lines in the frame, choose Center.

For vertical alignment upward from the bottom of the frame, choose Bottom.

To spread the lines evenly from the top of the frame to the bottom, choose Justify.

After choosing Justify, enter a Paragraph Spacing Limit value if the leading value should not grow much larger than paragraph spacing. Paragraph spacing expands only up to the value you specify; if the text still leaves the frame underfilled, line spacing changes until the text fills it. Paragraph Spacing Limit is added on top of any Space Before or Space After values set in the Paragraph panel for that paragraph.

Paragraph spacing limit set to zero (left) and 1 pica (right)

Paragraph spacing limit set to zero (left) and 1 pica (right)

Note

Use care when vertically justifying multi-column text frames. A final column with only a few lines can create excessive white space between lines.

Click OK.

Note

A simple way to tune Paragraph Spacing Limit is to enable Preview, then use the up or down arrow beside Paragraph Spacing Limit until the paragraph spacing looks balanced against the leading.

### More like this

- Change Justification settings
- Align text of different sizes
