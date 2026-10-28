# Formatting CJK characters - Ruby settings

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
