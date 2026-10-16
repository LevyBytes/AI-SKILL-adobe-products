# Aligning text — Align or justify text vertically within a text frame

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

Note

Use care when vertically justifying multi-column text frames. A final column with only a few lines can create excessive white space between lines.

Click OK.

Note

A simple way to tune Paragraph Spacing Limit is to enable Preview, then use the up or down arrow beside Paragraph Spacing Limit until the paragraph spacing looks balanced against the leading.

### More like this

- Change Justification settings
- Align text of different sizes
