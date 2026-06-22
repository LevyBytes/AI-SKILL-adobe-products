# Adjust Line Spacing With Leading, Change Text Color Gradient Or Stroke, Apply Transparency Effects, Type Scaling And Skewing ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adjust line spacing with leading; Change text color, gradient or stroke; Apply transparency effects to text; Scale and skew type; Apply ligatures to letter pairs; Change text case; Apply drop caps and text positioning.

## Adjust line spacing with leading

Use leading in Adobe InDesign when the vertical gap between lines needs adjustment for easier reading.

Leading sets the distance from one text baseline to the next. In InDesign, the value is stored in points and behaves as a character attribute, so separate leading values can exist inside one paragraph. A line's spacing comes from the greatest leading value used on that line. For document-wide consistency, rely on Paragraph styles or change the default auto-leading percentage.

### Change leading of selected text

With the Type tool, highlight the text that needs different spacing.

Open Type > Character so the Character panel is available.

Use the menu beside the Leading icon to choose the leading value.

Note

When text is aligned to the baseline grid, that grid determines vertical spacing and takes priority over leading. If changing leading has no visible effect, Vertical Justification or Align to baseline grid may be active. Open Object > Text Frame Options, set Align to Top, and confirm that the Do not align to baseline grid icon is active in the Paragraph or Control panel.

### Change the default leading percentage

Choose the paragraphs whose auto-leading behavior should change.

Open Type > Paragraph.

From the Paragraph panel menu icon, choose Justification.

In the Auto Leading field, type a value from 0% through 500%.

Select OK.

### Apply leading to whole paragraphs

Leading applied through a character style affects only the characters using that style. It does not automatically cover the full paragraph, even when Apply Leading to Entire Paragraphs is enabled.

Open Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

Turn on Apply Leading to Entire Paragraphs.

Select OK.

## Change text color, gradient or stroke

In Adobe InDesign, swatches and stroke controls let you change how text looks.

Colors, gradients, and strokes can be assigned to selected characters or to all text in a frame. These attributes work with Character and Paragraph styles, giving typography flexible and distinctive treatment.

### Change text fill, stroke, or apply a gradient

Use the Type tool to highlight specific characters, or use the Selection tool to choose the text frame.

Open Window > Color > Swatches.

In the Swatches panel or toolbox, activate the Formatting affects text icon.

Choose whether the color targets Fill or Stroke. Stroke changes only the character outlines.

Use one of these methods:

- Choose a color or gradient swatch.
- From the Swatches panel menu, choose New Color Swatch, choose a color, and then choose OK.

Build a custom text color by changing the Cyan, Magenta, Yellow, and Black values.

For another custom color entry, change the Cyan, Magenta, Yellow, and Black values.

To reposition a gradient, choose the Gradient Swatch tool or Gradient Feather tool and drag across the text.

### Change stroke settings

Use the Type tool for particular text, or choose the text frame with the Selection tool.

In the toolbox, activate the Formatting affects text icon.

Open Window > Stroke.

In the Stroke panel, choose a weight value for the thickness of the character outlines.

Set any other stroke attributes that are needed, including Cap, Miter Limit, Join, Align Stroke, Type, and so on.

### Change gradient settings

With the Type tool, select particular text; with the Selection tool, choose the text frame.

Open Window > Color > Gradient.

For Type, choose either Linear or Radial.

Move the slider to define the Location.

Enter the needed Angle value.

Use the Reverse icon to flip the gradient direction.

## Apply transparency effects to text

Adobe InDesign uses blending modes and opacity settings to make text translucent.

With transparency effects, text can interact with objects below it through opacity, blending modes, and related controls. Effects can target the text separately from the frame, which supports overlay treatments and other visual results.

Use the Selection tool to choose the text frame that contains the text to modify.

Open Object > Effects > Transparency.

In the Effects dialog box, choose Text from the Settings for dropdown menu.

Note

Choose Object when the same settings should affect the text frame's stroke and fill along with the text inside.

Move the Opacity slider to define the transparency level (100% = opaque, 0% = invisible).

From the Mode menu, choose a blending mode that determines how text colors combine with objects underneath.

Turn on Isolate Blending to stop blending modes from extending below the bottom of a group.

Turn on Knockout Group to keep items in a group from showing through one another.

Choose any additional Transparency options that are needed: Drop Shadow, Inner Shadow, and Outer Glow; Inner Glow, Bevel and Emboss, and Satin; Basic Feather, Directional Feather, and Gradient Feather.

Use Preview to see changes as you adjust them.

Select OK.

## Scale and skew type

In Adobe InDesign, type can be reshaped by changing its horizontal or vertical proportions, or by applying a slant angle.

Scaling changes character width or height compared with the original design. Text at 100% is not scaled. Raising or lowering the percentages stretches or compresses the type. When consistent typography matters, use a condensed or expanded font if one is available, because scaling may distort the letterforms.

### Adjust horizontal or vertical scaling

With the Type tool, select the text.

Open Type > Character to display the Character dialog box.

Type a percentage in the field beside the Vertical Scale icon or the Horizontal Scale icon.

### Scale type by resizing a text frame

Using the Selection tool, choose the text frame.

Hold Ctrl (Windows) or Command (macOS), then drag a corner handle to resize the frame.

### Control how scaled values appear

Preferences determine how scaled text is reported in panels. By default, InDesign shows only the resulting size and returns the scaling display to 100%. When Adjust Scaling Percentage is enabled, panels show the original size together with the scaled size and display the real scale values.

Open Edit > Preferences > General (Windows) or InDesign > Preferences > General (macOS).

In the Preferences dialog box, enable Adjust Scaling Percentage.

Select OK.

- Scaling a text frame changes the text proportionally (for example, 20 pt becomes 40 pt at 200%).
- The panel readout follows the selected preference: under Apply to Content, only the resulting size appears and the Transform panel returns to 100%; under Adjust Scaling Percentage, original and scaled values both appear and the Transform panel (Window > Object & Layout > Transform) shows the actual scale.
- This preference affects only frames scaled after it is turned on, and the scaled values remain attached to the text.
- Choosing Redefine Scaling as 100% from the Transform panel menu resets the panel numbers without altering the appearance.
- In threaded frames, scaling is preserved with Adjust Scaling Percentage, but text that reflows under Apply to Content does not keep scaling.

### Skew type

Skewing gives selected characters an artificial slant, angled left or right by the value you specify. Use it for dynamic headlines, emphasis, or visual matching when a true italic font is unavailable or not wanted.

With the Type tool, select the text to skew.

Open Window > Type & Tables > Character.

In the field beside the Skew icon, enter a degree value for the slant angle. Positive numbers slant type right, while negative numbers slant it left.

## Apply ligatures to letter pairs

Adobe InDesign can replace letter pairs with ligatures automatically to improve professional typography and readability.

Ligatures substitute a single glyph for pairs such as "fi" and "fl." If the font supports them and the feature is enabled, InDesign performs the substitution automatically while editing and spell checking continue normally.

### Activate ligatures

The Ligatures option uses the font's standard ligatures to replace common character pairs automatically.

With the Type tool, select the text where ligatures should be used.

Open Window > Type & Tables > Character.

From the Character panel menu icon, choose Ligatures.

### Activate discretionary ligatures

Additional decorative ligatures are available in some OpenType fonts. Enable these optional forms through the OpenType submenu.

Select the text with the Type tool.

Open Window > Type & Tables > Character.

From the Character panel menu, choose OpenType > Discretionary Ligatures.

## Change text case

Adobe InDesign offers menu commands and styles for converting text among uppercase, lowercase, title case, and sentence case.

Use menu commands, panels, or paragraph styles to change capitalization. InDesign can render selected text as small caps, using built-in small caps from the font when present or creating them from reduced capital letters.

### Change case using Type menu

With the Type tool, select the text.

Open Type > Change Case.

Choose one of these options:

- UPPERCASE: changes every character to uppercase.
- lowercase: changes every character to lowercase.
- Title Case: capitalizes the first letter in each word.
- Sentence case: capitalizes the first letter in each sentence.

Note

Sentence case uses periods (.), exclamation points (!), and question marks (?) as sentence boundaries. That can produce unwanted capitalization in abbreviations, file names, or URLs. Proper nouns can also need manual correction after Sentence case is applied.

### Apply all caps or small caps

With the Type tool, select the text.

Open Type > Character.

From the Character panel menu icon, choose one of these options:

- All Caps: shows every character as uppercase.
- Small Caps: shows lowercase letters as smaller uppercase characters.

### Apply lowercase from the Properties or Control panel

Use the Type tool to highlight the text.

In the Properties panel (Window > Properties), open the Character Styles tab.

Choose the More Options icon.

Click the Lowercase icon so every character is converted to lowercase.

### Specify the size for small caps

Use the Type tool to select the text.

Open Edit > Preferences > Advanced Type (Windows) or InDesign > Preferences > Advanced Type (macOS).

In the Small Cap field, enter the percentage to use relative to the original font size.

Choose OK.

### Change case using Paragraph Styles

Open Type > Paragraph Styles.

Choose the Paragraph Styles panel menu icon.

Choose Style Options, then open Basic Character Formats.

From the Case dropdown, choose Normal, Small Caps, All Caps, OpenType All Small Caps, or Lowercase.

## Apply drop caps and text positioning

Adobe InDesign provides controls for adding drop caps and for positioning superscript or subscript text.

A drop cap is an oversized opening character that spans several lines at the beginning of a paragraph. You can use drop caps in one paragraph or many paragraphs, and character styles can further refine their appearance for additional visual treatment.

### Create a drop cap

With the Type tool, place the insertion point in the paragraph that needs the drop cap.

Open Type > Paragraph.

To set the drop cap height, enter a value in the field beside the Drop Cap Number of Lines icon.

To set how many characters are included, enter a value in the field beside the Drop Cap One or More Characters icon.

Open the Paragraph panel menu and choose Drop Caps and Nested Styles.

Choose a Character Style if the appearance needs customization.

Choose OK.

### Remove a drop cap

Using the Type tool, click in the paragraph that contains the drop cap.

Change Drop Cap Number of Lines or Drop Cap One or More Characters to 0.

### Apply superscript or subscript in non-OpenType fonts

InDesign can still create superscript or subscript when the font does not contain true OpenType glyphs for those forms. The application fakes the result with baseline shift and size changes. Type preferences provide the values used for that simulation.

### Apply superscript or subscript

With the Type tool, select the text to be formatted.

Open Type > Character.

Open the Character panel menu icon, then choose Superscript or Subscript. The selected text receives preset baseline shift and type-size values.

### Change the default size and position

Open Edit > Preferences > Advanced Type (Windows) or InDesign > Preferences > Advanced Type (macOS).

In the Superscript or Subscript section, change the Size and Position values as needed.

Choose OK.

Note

Superscript and Subscript settings use percentages derived from font size and leading in Type preferences. Because they are not fixed settings, the Character panel does not show those values.

## See also

- [Character Styles](uxp-character-styles.md)
- [Characters](uxp-characters.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
