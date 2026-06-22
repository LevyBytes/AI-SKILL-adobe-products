# Add And Update Warichu Options, Apply Shatai To Text, Rotate Characters In East Asian Text, Adjust Aki Before And After Characters ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add and update Warichu options; Apply Shatai to text; Rotate characters in East Asian text; Adjust aki before and after characters; Apply Tate‑chu‑yoko in vertical text; Add and format Ruby text annotations; Apply Kenten to text; Set Character Alignment for East Asian text; Set Gyoudori for Japanese text.

## Add and update Warichu options

Use Adobe InDesign to enable Warichu and set up inline annotation formatting.

Warichu places a short annotation inside the main text flow, commonly as two smaller text lines inside parentheses. In Japanese composition, it supports reading notes, explanations, or translations. The steps here are intended for text assigned Chinese, Japanese, or Korean (CJK) language settings. If you need another annotation approach, consider character styles or footnotes.

### Turn Warichu on or off

Highlight the text that should receive Warichu formatting.

Open Type > Character.

Use the panel menu icon, then choose Warichu Settings.

Turn on Wari-chu to apply the feature, or clear it when Warichu formatting should be removed.

Select OK.

### Configure Warichu formatting options

Choose text that already has Warichu formatting.

Open Type > Character.

Use the panel menu icon, then choose Warichu Settings.

Lines controls the number of text lines used for Warichu characters.

Line Gap sets the spacing between Warichu character lines.

Wari-chu Size takes a percentage of the parent text size, with 50% as the usual value for Warichu characters.

Choose an alignment setting for the Warichu characters. In a vertical frame grid, for instance, Left/Top places the start of the Warichu characters at the top edge of the frame. With Auto, InDesign calculates justification from the Warichu size or from the parent text.

Select OK.

Note

Warichu behaves most reliably with fonts that include proper CJK character support. When characters look wrongly scaled or misplaced, check that the selected font contains the characters in use.

## Apply Shatai to text

Use Adobe InDesign Shatai when text needs an oblique, lens-style treatment that slants and scales characters without changing glyph height.

Shatai imitates a traditional typesetting lens effect: characters are horizontally magnified while being slanted, rather than simply receiving an italic skew. The vertical height of each glyph stays stable while magnification and angle are calculated from the center point. This is useful in Chinese, Japanese, and Korean (CJK) typography when a dedicated oblique font style is unavailable.

Apply Shatai for CJK text that requires slanted emphasis but has no italic or sloped font variant. The feature echoes film-based composition methods, where optical lenses produced angled characters during plate-making. It can be used for emphasis, style variation, or faithful reproduction of older print conventions.

With the Type (T) tool, select the text that should be slanted.

Open Type > Character.

Use the panel menu icon, then choose Shatai.

In Magnification, type the percentage for horizontal scaling. Using traditional typesetting terminology, 10% corresponds to lens 1 magnification, and 40% corresponds to lens 4.

From Angle, choose 30, 45, or 60 degrees for the oblique angle.

Enable Adjust Rotation when glyphs should rotate so horizontal strokes stay horizontal in horizontal text and vertical strokes stay vertical in vertical text.

Enable Adjust Tsume to add Jidori character spacing adjustments.

Select OK.

After Shatai is applied, the Character panel's Character Rotation option can refine particular characters. Positive values rotate characters counterclockwise, while negative values rotate them clockwise. Use this adjustment for individual glyphs or design cases where the automatic Shatai result needs tighter control.

Tip

Test magnification and angle pairings on representative text before applying them throughout the document. CJK fonts can react differently to Shatai values, so previewing helps confirm that the slant matches the intended design.

## Rotate characters in East Asian text

Use Adobe InDesign character rotation to change the orientation of selected individual characters.

Character rotation alters chosen characters without changing the overall direction of the text. It is helpful in vertical text when numbers, Latin letters, or symbols read better in another orientation.

This East Asian text feature operates separately from other formatting controls, including Shatai (oblique styling). It can also be combined with Tate-chu-yoko (horizontal-in-vertical text) for more precise layout handling. Only the selected characters rotate; the nearby text remains as it was.

When the direction change should affect an entire frame or story, make that adjustment through the Story or Paragraph panel.

Select the characters to rotate with the Type tool.

Open Type > Character.

In Character Rotation, enter a degree value. Positive numbers turn characters counterclockwise; negative numbers turn them clockwise. Example entries include 90, 180, and -90.

Apply the rotation by pressing Enter.

Note

When a document mixes vertical and horizontal text frames, set the frame direction first through Type > Story, then use character rotation for specific exceptions.

Each character rotates around its own center point and keeps its place in the text flow. That differs from rotating an entire text frame, which transforms all content inside that frame.

### Common rotation values and their effects

East Asian typography uses rotation values for different layout outcomes:

- 90 degrees: turns horizontal characters into vertical orientation, often for numbers inside vertical text
- -90 degrees: turns vertical characters into horizontal orientation
- 180 degrees: flips characters fully, sometimes for special visual effects
- Custom angles: any degree value from -360 through 360 for exact positioning

### Combining rotation with other East Asian features

Character rotation can be used alongside other CJK formatting features. It may be applied to characters formatted with Shatai (oblique styling), although the result can require manual tuning. When Tate-chu-yoko is used for horizontal-in-vertical text, extra rotation is generally not needed because the characters are already placed horizontally.

## Adjust aki before and after characters

Use Adobe InDesign Mojikumi aki adjustments to control CJK character spacing.

Aki adjustments insert exact, fixed spacing before or after individual characters. They are commonly used with punctuation such as parentheses in Chinese, Japanese, and Korean (CJK) typography, and they support fine character-spacing control through Mojikumi aki adjustments in InDesign. Because this space stays fixed, full justification does not change it. Use aki when a specific character needs an override of the default Mojikumi Akiryo settings while retaining typographic precision. Measurements use bu: half a full-width space is 2bu, and one quarter of a full-width space is 4bu.

Select an opening or closing parenthesis, or another character, with the Type (T) tool.

Open Type > Character.

In the Character panel, choose the desired spacing amount from the Mojikumi Before Character or Mojikumi After Character pop-up menu.

Choose 2bu for half a full-width space, 4bu for a quarter of a full-width space, or No Aki (アキなし) when no added space is wanted. The aki value is applied at once and remains constant even when text is justified.

To clear aki spacing, select the character again, then choose Auto (自動) from the Mojikumi menu.

Tip

Aki settings override Mojikumi Akiryo Settings for selected individual characters while leaving global paragraph settings alone.

## Apply Tate‑chu‑yoko in vertical text

Use Adobe InDesign to keep half-width characters horizontal inside vertical text frames when that improves readability.

Tate-chu-yoko, also called Kumimoji or Renmoji, turns selected characters into a horizontal group inside vertical text. The format makes numbers, dates, and brief foreign words easier to read than they would be if each character stacked vertically.

Use Tate-chu-yoko in vertical text frames that include half-width content such as 123 or Jan and need that content displayed horizontally. For one full-width character or for longer strings, standard vertical composition usually works better.

### Apply Tate-chu-yoko to selected text

Select the half-width characters that should appear horizontally inside the vertical text frame.

Open Type > Character.

Use the panel menu icon, then choose Tate-chu-yoko. The selected characters appear horizontally in the vertical text flow.

For exact placement, use the panel menu icon, then choose Tate-chu-yoko Settings and adjust X Offset (vertical position) or Y Offset (horizontal position).

### Set automatic Tate-chu-yoko for paragraphs

Select text in the target paragraph, or place the insertion point there.

Open Type > Paragraph.

Use the panel menu icon, then choose Auto Tate-chu-yoko.

In Numbers, enter the maximum count of consecutive half-width characters that should rotate.

Turn on Include Roman Characters to rotate Latin text automatically, then select OK. With Numbers set to 2, two-digit values such as 12 rotate, while three-digit values such as 123 remain vertical.

Change Numbers to suit the content patterns that appear most often.

Note

When adjacent Tate-chu-yoko groups appear, such as a two-digit number beside a two-character alphanumeric string like 24km, insert the Non-joiner character so the groups stay separate. Choose Type > Insert Special Character > Other > Non-joiner (結合なし).

### Remove Tate-chu-yoko formatting

Select the affected text.

Open Type > Character.

Use the panel menu icon, then clear Tate-chu-yoko.

### Clear auto Tate-chu-yoko

Select the affected text.

Open Type > Paragraph.

Use the panel menu icon, then clear Auto Tate-chu-yoko.

## Add and format Ruby text annotations

Use Adobe InDesign Ruby annotations to show readings for Japanese kanji, Chinese characters, or other complex text.

Ruby text adds small pronunciation guides beside base characters so readers can understand them more easily. In Japanese typography, Ruby often appears as furigana above kanji; in Chinese contexts, it may use Pinyin or Chuyin. InDesign supports Japanese Ruby and basic Chinese Ruby, updates Ruby as text reflows, and lets you adjust appearance, save style settings, and manage placement when Ruby extends past the base characters.

### Add Ruby to selected text

Select the parent text for Ruby annotations with the Type tool.

Open Type > Character.

Use the panel menu icon, then choose Ruby > Ruby Position and Spacing.

Set up Ruby with these options:

- To add Ruby for each character, set Type to Monoruby and type the Ruby text in the Ruby field.
- To enter Ruby per character, divide the readings with spaces.
- To add Ruby for each word, set Type to Group Ruby.

Note

Ruby cannot be added to text containing a paragraph break or a forced line break. When text with ruby is placed in a text variable, that ruby does not appear.

Use the options in the left panel of the Ruby dialog box to configure Ruby settings.

Select OK.

### Apply color and effects to Ruby

Open Type > Character.

Use the panel menu icon, then choose Ruby Color.

In the left panel options, select Ruby Color.

Select a color swatch from the list for the Ruby characters.

Change Tint to make the selected color lighter.

Use Overprint Fill or Overprint Stroke to define how ink interacts in commercial printing. Overprint settings matter mainly in print-production workflows where ink transparency is important.

Select OK to apply the color choices. Ruby color is controlled separately from the parent text color.

### Edit and remove Ruby annotations

Select text that contains Ruby.

Open Type > Character.

Use the panel menu icon, then choose Ruby > Ruby.

Change the needed settings. Ruby annotations stay editable after they are applied, and edits affect all Ruby inside the selected text range.

### Remove Ruby from text

Select the text whose Ruby annotations should be removed.

Open Type > Character.

Use the panel menu icon, then choose Ruby > Ruby.

Delete the Ruby text from the Ruby field, or clear any Ruby type options to turn Ruby off completely.

Select OK.

### Configure Ruby placement and alignment

The Ruby dialog box contains broad formatting controls split across several panels. Choose a category in the left panel to open the related settings.

### Ruby Position and Spacing

- Set Ruby type (Per-Character or Group Ruby): In the Type menu, select Per-Character or Group Ruby. With Per-Character Ruby, insert a half-width or full-width space while typing Ruby characters to keep each reading paired with its parent character, for example, haku netsu tou.
- Use Monoruby or Group Ruby: The Type option includes Monoruby and Group Ruby. Choose Per-Character Ruby when each Ruby character should align with its own parent character, or choose Group Ruby to center the entire Ruby string over the full parent string.
- Adjust alignment: The Alignment menu controls Ruby character distribution against the parent text. Choices include centering, left/right alignment, and justification. Check the sample graphic in the dialog box to preview the result.
- Set placement: In the Placement menu, Above/Right puts Ruby above horizontal text and on the right side of vertical text. Below/Left places it below horizontal text and on the left side of vertical text.
- Adjust spacing: XOffset and YOffset define the gap between Ruby characters and parent text. Negative values pull Ruby closer.

### Overhang and spacing adjustments

If Ruby text is wider than the parent characters, Overhang determines how far Ruby may extend into neighboring character spaces. The setting follows JIS X 4051-1995 specifications for Japanese character types.

- Set spacing: In Spacing, enter adjustments for parent character spacing so the attached Ruby has room. The automatic spacing keeps Ruby from colliding between separate parent characters.
- Scale character width: Turn on Char Width Scaling and enter a compression percentage so Ruby characters condense automatically when they are wider than the parent. This reduces excessive overhang while keeping the text readable.
- Set auto alignment: Choose Auto Align at to make parent characters align flush with the start and end of the line, with Ruby distribution adjusted automatically for the best appearance.

## Apply Kenten to text

Use Adobe InDesign Kenten marks to emphasize selected Japanese text characters.

Kenten, also known as Bouten, places emphasis marks above horizontal text or on the right side of vertical text. Japanese typography uses this feature to call attention to important words or phrases. You can choose preset mark styles, including small circles or sesame dots, or enter custom characters to serve as emphasis marks.

### Select a Kenten style

Highlight the text characters that need Kenten emphasis.

Open Type > Character.

Turn on Kenten, then pick a mark style such as Fisheye, White Circle, or Sesame Dot. The chosen Kenten marks appear above horizontal text and along the right side of vertical text.

### Customize Kenten appearance

Select the text that already has Kenten marks.

Open Type > Character.

Choose Kenten > Kenten Settings.

Under Kenten Type, use one of the preset styles, or choose Custom when you need to define your own character.

For a Custom character, enter the character in the field, or provide the appropriate character code for that character set.

Use Position to control the gap between the Kenten marks and the parent characters.

Choose Above/Right to place Kenten above horizontal text or on the right of vertical text. Choose Below/Left to place Kenten below horizontal text or on the left of vertical text.

Set Size to determine how large the Kenten marks are compared with the text.

Use Align to choose Center or Left for the mark position; in vertical text, Left corresponds to the area above each character's em box.

Change HScale and VScale when the Kenten marks need different horizontal or vertical proportions.

Select OK.

### Change Kenten color

Select the text that contains Kenten marks.

Open Type > Character.

Choose Kenten > Kenten Settings.

In Kenten Color, choose a color swatch from the list.

Enter tint percentage and stroke weight values where the design requires them.

Use Overprint Fill or Overprint Stroke when the Kenten marks should overprint on commercial-press output.

Select OK.

Once Kenten marks are applied, individual character formatting can still be changed. The marks remain attached to their parent characters, so they move with those characters during text edits and reflow.

To delete Kenten marks, select the emphasized text and choose Kenten > None from the Character panel menu.

## Set Character Alignment for East Asian text

This section covers character alignment controls for positioning small characters beside larger characters in Adobe InDesign East Asian text.

Lines can combine multiple character sizes, for example body text with smaller superscripts or larger drop caps. InDesign includes alignment controls that define how those differently sized characters sit in relation to one another. Character Alignment matters in East Asian typography because exact vertical placement improves readability and keeps the composition balanced.

Character Alignment only affects lines that contain more than one character size. It applies in horizontal and vertical text frames, and it works alongside controls such as baseline grids and leading adjustments.

Choose an alignment option by understanding the reference points it uses. In Japanese fonts, the em box is called the virtual body (ä»®æƒ³ãƒœãƒ‡ã‚£), and Ideographic Character Face (ICF) is called the average face (å¹³å‡å­—é¢). The Roman baseline is the normal Latin-type reference line.

With the TypeÂ  tool, select the text range, lines, or text frame that contains characters in different sizes.

Open Type > Character.

Open the panel menu icon, choose Character Alignment, and then choose an alignment option.

Check the text after the alignment change. In vertical text frames, top or right alignment moves characters to the right, while bottom or left alignment moves them to the left.

These options specify how smaller characters align against larger characters on the same line:

- Roman Baseline: positions smaller characters on the largest character's baseline, matching standard Latin typography.
- Embox Top/Right: places smaller characters at the top of the largest character's embox in horizontal frames, or against the right edge in vertical frames.
- Embox Center: centers smaller characters within the embox height for horizontal frames, or within the largest character's width for vertical frames.
- Embox Bottom/Left: places smaller characters at the bottom of the largest character's embox in horizontal frames, or against the left edge in vertical frames.
- ICF Top/Right: aligns smaller characters with the ICF top edge in horizontal frames, or with the right edge of the largest character's font in vertical frames.
- ICF Bottom/Left: aligns smaller characters with the ICF bottom edge in horizontal frames, or with the left edge of the largest character's font in vertical frames.

In documents that use Grid Alignment, character alignment remains separate from grid alignment settings. When Align to Grid Alignment is enabled in the Paragraph panel, InDesign aligns the line to the baseline grid first, then positions the smaller characters within that line through character alignment.

The same alignment controls also cooperate with Kenten, the emphasis-mark feature; Ruby, which provides furigana annotations; and Tate-chu-yoko, which places horizontal text inside vertical text. In mixed-size text that uses those features, the settings help keep line spacing consistent and the composition balanced.

## Set Gyoudori for Japanese text

This section explains how to make Japanese text occupy a specified number of grid lines in Adobe InDesign, for both vertical and horizontal layout grids.

Gyoudori is a Japanese composition control that makes a paragraph span a chosen number of lines, independent of character size or ordinary line spacing. It is useful in vertical text and Japanese layout grids, where text elements need consistent line alignment and spacing.

Gyoudori distributes a paragraph across a fixed line count by adjusting line spacing automatically. It is especially useful for headlines, pull quotes, and decorative text that must align precisely with the document layout grid. Gyoudori works in horizontal and vertical text frames and performs best inside a frame grid. Before using Gyoudori, set the document up with a frame grid. Japanese-composition text with suitable Mojikumi settings gives the best results.

Select the Japanese text paragraph with the TypeÂ  tool.

Open the Paragraph panel (Window > Type & Tables > Paragraph).

Open the panel menu icon and choose Gyoudori.

Enter the number of lines that the paragraph should occupy.

Open Type > Character.

Open the panel menu icon and choose Character Alignment.

Choose an alignment option: Top, Center, Bottom, or Justify.

Select OK. InDesign changes line spacing so the paragraph fits the requested line count.

For consistent handling across several paragraphs, create a paragraph style that stores the Gyoudori settings. Open Window > Styles > Paragraph Styles, then include Gyoudori specifications in the Japanese Composition Settings section.

The chosen alignment option controls how InDesign places the extra space produced by the Gyoudori line count. Center alignment divides the space above and below the text, while top or bottom alignment gathers that space at one end.

Gyoudori settings take precedence over the normal line spacing (Leading) values in the Character panel. To turn Gyoudori off and restore standard spacing, select the paragraph, choose Gyoudori from the Paragraph panel menu, and select None.

When a layout mixes horizontal and vertical text, Gyoudori helps maintain even line distribution through a continuous text passage, producing a more balanced and cohesive result. It works with Japanese composition controls such as Mojikumi and Kinsoku for professional typography.

For documents based on layout grids, Gyoudori calculations follow the grid structure so text elements fit into the overall page design. That alignment is especially important for multi-column layouts and for coordinating text across facing pages.

## See also

- [Characters](uxp-characters.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
