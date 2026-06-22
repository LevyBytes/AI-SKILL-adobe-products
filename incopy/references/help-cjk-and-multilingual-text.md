# Formatting Cjk Characters, Changing Spacing Characters Cjk Text

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Formatting CJK characters — Apply shatai to text; Changing spacing between charactersin CJK text — Adjust kerning for the half-width space between Roman words.

## Formatting CJK characters — Apply shatai to text

Traditional typesetting could slant characters by distorting glyphs with a lens during film setting; that oblique treatment is called shatai. Unlike a simple glyph slant, shatai also changes scale. InDesign provides the shatai feature for setting text magnification or angle from the center point while keeping glyph height unchanged.

Shatai

A. No scale applied B. Magnification 30%, 45 shatai C. Selecting the Adjust Tsume option D. Selecting the Adjust Rotation option

Shatai Select text. From the Character panel menu or Control panel menu, choose Shatai. Set these options, and click OK:

Magnification: set the skew amount. In traditional typesetting terms, 10% magnification corresponds to lens 1, and 40% magnification corresponds to lens 4.

Angle: choose the oblique angle, 30, 45, or 60.

Adjust Rotation: rotates glyphs so horizontal lines show horizontally in horizontal text, and vertical lines show vertically in vertical text.

Adjust Tsume: applies jidori.

Note

After applying shatai to text, you can fine tune the rotated oblique effect on individual characters.

### Formatting CJK characters — Rotate characters

Select the characters. In the Character panel, enter a Character Rotation value. Use a negative value to rotate the character to the right (clockwise).

### Formatting CJK characters — Adjust aki before and after characters

With the type tool, select an opening parenthesis or closing parenthesis. In the Character panel, choose the aki amount from the Mojikumi Before Character pop‑up menu or Mojikumi After Character pop‑up menu.

For instance, 2bu adds half of a full-width space, while 4bu adds one quarter of a full-width space. Full justification does not adjust this aki. Adjusting aki is useful when specific characters need to override Mojikumi Akiryo Settings.

Adding aki before opening parenthesis

Adding aki before opening parenthesis

### Formatting CJK characters — Use tate-chu-yoko

Tate-chu-yoko, also called kumimoji or renmoji, makes selected text run horizontally inside vertical text. In a vertical text frame, rotating half-width content, including numbers, dates, and short foreign words, makes it easier to read.

Before and after applying tate-chu-yoko

Before and after applying tate-chu-yoko

After the Tate-chu-yoko option is on, you can move the text left, right, up, or down. Auto Tate-chu-yoko can also be assigned to special half-width characters. Paragraph attributes contain the Auto Tate-chu-yoko setting.

Note

Adjust character spacing for Tate-chu-yoko with tsume or tracking in the Character panel.

### Formatting CJK characters — Apply tate-chu-yoko

Select the text that should receive tate-chu-yoko, then use one of these methods.

Choose Tate-chu-yoko from either the Character panel menu or the Control panel menu.

Open either the Character panel menu or the Control panel menu and choose Tate-chu-yoko Settings; in the Tate-chu-yoko dialog box, choose Tate-chu-yoko, then click OK.

Note

When adjacent tate-chu-yoko entries must remain distinct, insert Non-joiner between them. Use Type > Insert Special Character > Other > Non-joiner.

### Formatting CJK characters — Remove tate-chu-yoko

Select the text whose tate-chu-yoko formatting should be removed, then use one of these methods.

In the Character panel menu or Control panel menu, choose Tate-chu-yoko again to cancel it.

Choose Tate-chu-yoko Settings from the Character panel menu. In the Tate-chu-yoko dialog box, clear Tate-chu-yoko, then click OK.

### Formatting CJK characters — Change tate-chu-yoko settings

Open Tate-chu-yoko Settings from the Character panel menu. In X Offset, enter how far the text should shift vertically. Positive values move the text upward; negative values move it downward. In Y Offset, enter how far the text should shift horizontally. Positive values move the text right, and negative values move it left.

### Formatting CJK characters — Set Auto Tate-chu-yoko for specific paragraphs

Select the text for Auto Tate-chu-yoko, or put the insertion point inside the paragraph. From the Paragraph panel menu, choose Auto Tate-chu-yoko. In KumiNumber, enter how many consecutive half-width characters should rotate into vertical orientation. With a value of 2, "12" rotates while "123" does not. To include roman text in tate-chu-yoko, select Include Roman Characters, then click OK.

### Formatting CJK characters — Add Ruby to text

Japanese typography uses Ruby, also called furigana, to show kanji yomi in hiragana. In Simplified Chinese, Ruby is named Pinyin; in Traditional Chinese, Ruby is named Chuyin. InDesign offers complete Japanese Ruby support and limited support for Chinese Pinyin or Chuyin. Ruby settings control Ruby location, size, and color. When ruby text is longer than its parent, you can also set the ruby distribution. Tate-chu-yoko can be applied to Ruby as well.

Ruby on horizontal text (left), and ruby to the right of vertical text (right)

Ruby on horizontal text (left), and ruby to the right of vertical text (right)

If the parent text that receives ruby moves onto a second line, the ruby follows that parent to the next line.

Note

Ruby characters can be removed in some cases, such as applying a style that contains a variable.

Select the text that will receive ruby. Ruby cannot be attached to selected text that contains forced line breaks. From the Character panel menu or Control panel menu, select Ruby > Ruby. In Ruby, enter the ruby characters. To adjust Ruby settings, choose an option on the left side of the dialog box and set its values. Click OK.

### Formatting CJK characters — Ruby settings

These settings are available in the panels of the Ruby dialog box.

Ruby Placement and Spacing

In the Type menu, choose Per-Character or Group Ruby. For Per Character Ruby, separate Ruby characters according to their parent characters by typing half-width or full-width spaces while entering Ruby text. For "hakunetsutou", enter "haku netsu tou" (an example pairing a Japanese-character word with its phonetic spelling).

Ruby

Ruby

Use the Alignment menu to set the position of the Ruby characters. The graphic in the sample field lets you check the position.

In Placement, choose Above/Right for ruby above horizontal text or beside vertical text on the right; choose Below/Left for ruby below horizontal text or beside vertical text on the left.

Set the gap between the ruby and its parent in XOffset and YOffset. Negative values bring the ruby closer to the parent.

Ruby Font and Size

Use Font to choose the font family and font style.

Set the ruby character size in Size. By default, ruby is half as large as the parent text.

Use Horizontal Scale and Vertical Scale to set ruby character width and height scaling.

Turn on Use Open Type Pro Ruby Glyphs when alternate ruby glyphs should be used, where available. Some Open Type Pro fonts include dedicated kana characters. With this option active, ruby uses the dedicated ruby-character font rather than the standard kana font.

In KumiNumber, enter how many consecutive half-width characters should rotate into vertical orientation. With a value of 2, "12" rotates while "123" does not.

Turn on Include Roman Characters when roman text should receive tate-chu-yoko.

Use Scale to Fit when tate-chu-yoko in the ruby string should match dimensions (1 em x 1 em), either through an OpenType feature or by scaling glyphs.

Adjustment When Ruby Is Longer Than Parent

Overhang lets specified Ruby extend horizontally into the space above neighboring characters on both sides of the parent when total Ruby width exceeds parent-character width. For Japanese text, the character types that can use Overhang follow the JISx4051-1995 specification.

In Spacing, set how much parent-character spacing is needed to attach ruby. Choosing another option refreshes the graphics in the sample field.

To adjust Ruby character width automatically, select Char Width Scaling and enter the compression scale for Ruby character width.

Select Auto Align at Line Edges when the parent should line up with both line boundaries.

Ruby Color

Choose a color swatch from the list box.

Set tint and line weight as needed.

Enable Overprint Fill or Overprint Stroke when ruby character fills or strokes should overprint.

(See Determining when to overprint manually.)

### Formatting CJK characters — Apply kenten

Kenten, also known as Boten, places emphasis points on text that you want to highlight. You can pick a point style from existing kenten forms or define custom kenten characters. Kenten settings also control position, scale, and color.

Small black circle kenten, black sesame kenten, and small white circle kenten applied to text

Small black circle kenten, black sesame kenten, and small white circle kenten applied to text

Select the characters to emphasize. In Kenten in the Character panel menu or Control panel menu, choose a kenten character such as Fisheye or White Circle.

### Formatting CJK characters — Change kenten settings and color

Choose Kenten > Kenten from the Character panel menu or Control panel menu. Under Kenten Settings, set the options below:

Kenten Type

Choose a kenten character, such as Fisheye or White Circ le. Use Custom for a user-defined character. Characters can be typed directly, or supplied as a character code value for the chosen character set.

Position

Set the distance between the kenten and the characters.

Location

Use Above/Right to place kenten above horizontal text or to the right of vertical text; use Below/Left for below horizontal text or to the left of vertical text.

Size

Set the kenten character size.

Align

Choose whether kenten appears at the character embox center (Center) or at the left side (Left); for vertical text, Left means above.

H/Scale and V/Scale

Set the kenten character height and width scale.

To edit kenten color, choose Kenten Color from the list box, then set these options:

Choose a color swatch from the list box.

Set tint and line weight as needed.

Enable Overprint Fill or Overprint Stroke when kenten character fills or strokes should overprint.

(See Determining when to overprint manually.)

Click OK.

### Formatting CJK characters — Align text of different sizes

When characters of different sizes share 1 line, Character Alignment controls how smaller text lines up against the largest characters. Alignment can be to the embox top, center, or bottom (right, center, and left in vertical frames), the roman baseline, or the ICF box top or bottom (right or left in vertical frames). ICF (Ideographic Character Face) means the average height and width that the font designer uses when designing ideographic characters for the typeface.

Align different sizes

A. Align different size letters above full space letters B. Align different size letters in the middle of full space letters C. Align different size letters below full space letters

Align different sizes

Note

Character Alignment has no effect when every character in a line is the same size, even if the option is applied.

Select the text or line range containing the characters to align, or use the selection tool to select a text frame. In Character Alignment, available from the Character panel menu or Control panel menu, choose one of these options.

Roman Baseline lines up the small characters in the line with the baseline grid of the large characters.

Embox Top/Right, Center, or Embox Bottom/Left place the small characters in the line at the chosen position within the large characters' embox. For vertical text frames, Embox Top/Right positions the text on the embox right side, while Embox Bottom/Left positions the paragraph on the embox left side.

ICF Top/Right and ICF Bottom/Left place the small characters in the line against the ICF defined by the large characters. In vertical text frames, ICF Top/Right moves the text to the ICF's right side, and ICF Bottom/Left moves it to the ICF's left side.

### More like this

- Change the text direction
- Align paragraphs to a baseline grid

## Changing spacing between charactersin CJK text — Adjust kerning for the half-width space between Roman words

With the Type tool, select a text range, then use the appropriate shortcut.

To increase spacing between the selected words, press Alt+Ctrl+\ (Windows) or Option+Command+\ (Mac OS).

Press Alt+Ctrl+Backspace (Windows) or Option+Command+Delete (Mac OS) to decrease spacing between the selected words.

To make the kerning change 5 times larger, hold Shift while pressing the shortcut.

### Changing spacing between charactersin CJK text — Adjust character tsume in CJK composition

Tsume proportionally tightens the space around characters; their vertical and horizontal scaling is not changed.

Before tsume (left), and after tsume (right)

Before tsume (left), and after tsume (right)

Procedure

Select the text that should use tsume. In Tsume, enter the percentage through the Character panel or the Control panel.

Note

Highlighting affected text also lets you check which tsume or tracking setting has been applied to each character.

### Changing spacing between charactersin CJK text — Using grid tracking to adjust character spacing

Aki between characters can be tightened by setting tsume on the frame grid itself and adjusting tracking for placed text. This character-compression method is also called grid tracking and uses Adjust Tracking With CJK Grid, available from the Character panel menu or the Control panel.

Because some CJK font characters are smaller than the embox, placing them on a frame grid can leave large aki between characters. Applying grid-level tsume is useful because mojikumi can keep characters properly aligned to the grid. The setting can be saved as a grid format.

In the Frame Grid Settings dialog box, Character Aki defaults to "0". Automated typography calls this tracking "Beta". When Character Aki is set to a negative value for mojikumi, the right grid overlaps the left grid by the specified amount. Characters entered on the grid align around each grid center, compressing spacing for each character. Depending on mojikumi settings, character shapes that are adjusted below maximum width change according to the proportional value of Line Spacing Tsume. For instance, if mojikumi gives yakumono such as parentheses half spacing, setting Character Aki in the grid to -1H compresses yakumono to half of -1H, which is -0.5H. Tracking-based spacing in this grid does not apply to Roman text, so Roman character spacing is not compressed with that tracking. Because the tracking value belongs to the grid itself, it is treated as an absolute value; therefore font-size changes do not alter the tracking value.

By default, this feature is on. To turn it off, open the Character panel menu or Control panel, choose Adjust Tracking With CJK Grid, then clear the box to the left of the item name.

### Changing spacing between charactersin CJK text — Adjust tracking by using Grid Jidori

Grid Jidori justifies text across a specified number of grid characters. For example, selecting 3 entered characters and setting jidori to 5 spreads those 3 characters evenly over 5 character spaces.

Select a character range. In Grid Jidori in the Character panel or Control panel, type a value in the text box or choose one from the pop-up menu.

Note

Use Grid Jidori in the frame grid. In a text frame, it may not work correctly.

### More like this

- Highlight text containing custom kerning and tracking
- Use mojikumi
- Set paragraph gyoudori
