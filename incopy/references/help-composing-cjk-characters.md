# Composing Cjk Characters

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

For typesetting, InCopy provides Adobe Japanese Single-line Composer for Japanese single-line composition, Adobe Japanese Paragraph Composer for Japanese paragraph composition, plus Adobe Paragraph Composer and Adobe Single-line Composer. A Composer reviews candidate breakpoints in CJK and Roman text and selects breaks that fit the paragraph's hyphenation and justification settings.

The Adobe Paragraph Composer

Evaluates breakpoint networks across a whole paragraph, allowing earlier lines to be adjusted so particularly poor breaks later in the paragraph can be avoided.

Paragraph Composer works by finding possible breakpoints, scoring them, and applying weighted penalties based on factors such as letterspacing consistency, word spacing, hyphenation, or Roman words whose language has hyphenation dictionaries.

Note

The Hyphenation dialog box can be used to tune the balance between improved spacing and fewer hyphens.

Adobe Japanese Paragraph Composer

Like Paragraph Composer, Adobe Japanese Paragraph Composer judges line-wrap breaks by paragraph rather than by single line. When text is inserted into or removed from a paragraph using this Composer, mojikumi can change on the line preceding the edit because the entire paragraph's mojikumi is recalculated for optimization.

The composition process identifies candidate breakpoints, evaluates them, and applies weighted penalties according to letterspacing evenness, word spacing, and hyphenation.

Paragraph Composer evaluates the whole paragraph's breaks and fits mojikumi using character spacing, word spacing, and even-hyphenation rules. For CJK text, the calculation compares the actual mojikumi aki inserted for full justification or kinsoku processing with the optimum value set in the Mojikumi Settings dialog box. If full-line justification requires more aki than the maximum, or kinsoku processing requires less aki than the minimum, an H&J violation results.

The Adobe Single-line Composer

Composes text in the traditional one-line-at-a-time manner. Use it when late edits should not cause composition changes elsewhere and uneven lines in the paragraph are acceptable.

Adobe Japanese Single-line Composer

Adobe Japanese Single-line Composer handles mojikumi by reviewing line breaks one line at a time, matching the Single-line Composer approach.

## Composing CJK characters — Change CJK composition preferences

Open Composition preferences: Edit > Preferences > Composition (Windows) or InCopy > Preferences > Composition (Mac OS). In Mojikumi Compatibility Mode, use any needed option:

Select Use New Vertical Scaling to apply the vertical-scaling method introduced with InDesign CS2. Roman text usually turns sideways, while CJK text can stay upright. In earlier InDesign versions, setting glyph scaling in the Character panel made X Scale and Y Scale behave differently depending on the orientation of the characters being scaled. In InDesign CS2 or later and in InCopy, scaling is applied consistently to every text character in the line, whether rotated or upright. If vertical text is not upright, X Scaling and Y Scaling are swapped, so Roman text scales in the same direction as upright CJK text. New documents enable this option; documents from InDesign CS and earlier open with it disabled.

Select Use CID-Based Mojikumi when the glyphs (jikei) in the current font should determine the correct JIS X 4051 Mojikumi Class instead of Unicode. This is useful with OpenType fonts. All CID fonts from AdobeJapan1-0 through AdobeJapan1-6 are supported by this feature; other fonts use Unicode.

Click OK.

## Composing CJK characters — Use mojikumi

Mojikumi controls composition spacing for Japanese and Chinese characters, roman characters, punctuation, special characters, numbers, line start behavior, and line end behavior. It can also define paragraph indents. Korean text may not use mojikumi.

For Japanese text, InDesign's built-in character-spacing rules follow Japanese Industrial Standards (JIS), JISx4051-1995. InDesign also offers predefined mojikumi sets. You may also build specific mojikumi sets and edit character-spacing values.

Traditional Chinese and Simplified Chinese can use mojikumi display settings. If those entries are missing from the Mojikumi Set list, enable them in the Mojikumi Options section of the Preferences dialog box.

InCopy supplies 14 Japanese mojikumi preset types and 2 Chinese types. Preferences can control which presets appear and whether CID-Based Mojikumi is used.

InCopy can change paragraph mojikumi settings, but unlike InDesign it cannot create custom mojikumi sets or edit custom mojikumi settings. For details, see InDesign Help.

Additional InDesign mojikumi information is available at www.adobe.com/go/learn_id_mojikumi_en.

## Composing CJK characters — Apply a mojikumi set to a paragraph

Select the paragraph or frame that should receive the setting. To revise the default, make sure no paragraph or frame is selected. In the Paragraph panel or Control panel, choose a set from the Mojikumi pop-up menu.

To turn mojikumi off, choose None from the Mojikumi pop-up menu.

Note

The Mojikumi Options section of the Preferences dialog box controls which settings are shown in the Mojikumi pop-up menu.

## Composing CJK characters — Change the display of mojikumi presets

Open Mojikumi Options preferences: Edit > Preferences > Mojikumi Options (Windows) or InCopy > Preferences > Mojikumi Options (Mac OS). Then mark the entries that should appear in the Mojikumi pop-up menu and click OK.

Note

Names in the Mojikumi Preset section appear gray when they cannot be selected. Unavailable entries are sets already used by paragraphs or sets supplied as defaults.

Mojikumi Presets

Line end all 1/2 em

1 em indent line end uke 1/2 em

1 or 1/2 em indent line end uke 1/2 em

1 or 1/2 em indent line end all 1 em

1 em indent line end all 1 em

1 em indent line end all no float

1 em indent line end uke no float

1 or 1/2 em indent line end uke no float

1 em indent line end all 1/2 em in mojibake

Line end all 1 em

Line end uke no float

1 or 1/2 em indent line end period 1 em

1 em indent line end period 1 em

line end period 1 em

TradChinese default

SimpChinese default

| --- | --- | --- | --- | --- |

## Composing CJK characters — Change mojikumi settings

Frequently used spacing rules, such as the gap between a period and the following opening parenthesis, can be edited in a custom mojikumi set.

For example, to tighten parentheses spacing, go to Yakumono. Use Okoshi yakumono for Open Parentheses, or Uke yakumono for Close Parentheses, and change the Middle Line value. Options: 50% Fixed; 50%(0%-50%); 50%(25%-50%); 0% Fixed; 0%(0%-50%). With opening parentheses, 50% Fixed leaves the parenthesis preceded by 50% half-width aki, meaning no compression occurs. 50%(0%-50%) begins with half-width aki before the parenthesis, though the active mojikumi rules may reduce it to zero. 50%(25%-50%) begins at half-width aki and can shrink, according to mojikumi rules, to 25% of a half-width character. 0% Fixed always removes the aki. 0%(0%-50%) compresses aki but can still permit up to half-width aki depending on the mojikumi rules. Choose 0% Fixed for consistently compressed spacing around parentheses.

Mojikumi sets that are set to compress parentheses

Mojikumi sets that are set to compress parentheses

Within Yakumono, expand the triangles for Open Parenthesis, Close Parenthesis, commas, periods, and middle punctuation under Okoshi Yakumono, Uke Yakumono, and Chuzuki Yakumono. The expanded choices include corner brackets, round parentheses, Japanese commas, commas, Japanese periods, periods, colons, and nakaguro; set aki separately for each character type. These settings leave brackets uncompressed while allowing round-parenthesis aki to be tuned.

Displaying Detailed exposes every class, allows the processing order for each class to be edited, and highlights differences between the selected mojikumi set and current settings.

Each option can have desired, minimum, maximum, and priority-order values for character spacing. During full justification by kinsoku, the minimum and maximum values are used. The farther Minimum and Maximum percentages are from Desired, the more freedom InDesign has to expand or reduce spacing while justifying a line.

Additional InDesign mojikumi information is available at www.adobe.com/go/learn_id_mojikumi_en.

## Composing CJK characters — Create a new mojikumi set

Use one of these methods:

Choose Type > Mojikumi Settings > Basic or Detailed.

From the Paragraph panel or Control panel Mojikumi Set menu, choose Basic or Detailed.

In the Mojikumi Settings dialog box, click New. Type a name for the mojikumi set, choose the existing set that the new set will use as its base, then click OK. Under Units, choose percentage (%), Bu units, or Character Width/Bu. Enter values for Begin Line, End Line, and Middle Line for items in these sections: Yakumono, Contiguous Yakumono, Paragraph Mojikumi Indent, and Between CJK and Roman. Use Middle Line to compress lines for kinsoku by entering a value lower than Begin Line. Use End Line to expand lines for fully justified text by entering a value higher than Middle Line. If a section item has a triangle indicator, expand it to define mojikumi settings more precisely for individual characters. For example, in the Yakumono section, click the triangle to the left of Open Parenthesis in Okoshi Yakumono. The items Open Bracket, Open Round Parenthesis, and Other Opening Parenthesis appear, letting you set mojikumi options for each character class. After finishing the settings, click Save or OK to store them. Click Cancel to leave without saving.

Note

For some character types, Begin Line, Middle Line, and End Line can share the same value when spacing should remain unchanged.

## Composing CJK characters — Edit detailed settings for mojikumi

Pick one method:

Menu path: Type > Mojikumi Settings > Detailed.

Choose Advanced Settings From Mojikumi from the Paragraph panel or Control panel.

In the Mojikumi Settings dialog box, click Detailed.

Detailed mojikumi settings

Detailed mojikumi settings

Select a mojikumi set for editing from the Mojikumi pop-up menu, or click New to make another set. To bring in a mojikumi set from a different document, click Import. At the bottom of the Mojikumi menu, use the Character Class pop-up menu to choose the character class whose aki values you want to edit. The selected class shows its editable settings. You can set aki for Open Parenthesis, Close Parenthesis, commas, periods, and middle punctuation as groups, or define finer per-character values such as Japanese periods or Roman periods. From the Before & After pop-up menu, choose Previous Class or Next Class to decide whether the aki value applies before or after the entered character. Example: for aki following a Japanese period, set Character Class to Japanese Period and set Before & After to previous character class. For each item, enter Minimum, Desired, and Maximum values. Minimum compresses lines for kinsoku, so it should be lower than Desired. Maximum expands lines for fully justified text, so it should be greater than Desired. For item names with a triangle indicator, expand the triangle to define individual-character mojikumi settings. For example, click the triangle to the left of Open Parenthesis to show Open Bracket, Open Round Parenthesis, and Other Opening Parenthesis, then set mojikumi values for each character. Use Priority for each class to define the compression priority order. If any character class is set to 1, classes with larger numbers are processed later in increasing priority order; classes set to None are handled last. The same value, from 1 to 9, may be assigned to multiple aki options. In the Indicate Differences menu, choose which mojikumi table to compare against. Values that differ from the selected table are shown in blue. Click Save, or click Cancel to discard the settings.

## Composing CJK characters — Change the name of a custom mojikumi set

Open the Mojikumi Settings dialog box. From the Mojikumi pop‑up menu, select the custom mojikumi set, then use Rename. In the Rename dialog box, type the replacement name and confirm with OK.

Default mojikumi sets do not support renaming.

## Composing CJK characters — Delete a custom mojikumi set

Open the Mojikumi Settings dialog box. From the Mojikumi pop‑up menu, select the custom mojikumi set, then choose Delete Set.

Text that used that mojikumi set falls back to default settings. Predefined mojikumi sets cannot be removed, and default InDesign mojikumi sets also cannot be removed.

Note

Japanese composition becomes harder to resolve when the text includes many half-width spaces or Roman parenthesis. Prefer full-width parenthesis for Japanese composition and avoid Roman parenthesis where possible. Use Roman parenthesis only for relatively long English sentences inside Japanese text, or when omitting Roman parenthesis would create a more serious composition problem.

## Composing CJK characters — Use kinsoku settings

Kinsoku controls allowed line-break positions in Asian text. A character barred from the start or the end of a line is treated as a kinsoku character. Japanese text can rely on hard kinsoku sets or soft kinsoku sets; the soft versions leave out long vowel symbols and small hiragana characters. Work with the supplied sets, or build a new set by adding or removing kinsoku characters. Chinese and Korean versions provide their own special kinsoku sets.

## Composing CJK characters — Select kinsoku settings for a paragraph

Select the target paragraph or frame. In the Paragraph panel, pick the desired entry from the Kinsoku Set list.

## Composing CJK characters — Create a new kinsoku set

Start with one of these commands.

Select Type > Kinsoku Settings.

From the Paragraph panel or Control panel, open the Kinsoku pop‑up menu, choose Settings, and bring up the Kinsoku Settings dialog box.

In the Kinsoku Settings dialog box, click New. Kinsoku sets can be imported from other documents, although this dialog does not provide an import button like Mojikumi Settings does. Type the kinsoku set name, then choose the existing set that should serve as its base. To add a character to a field, select that field and use either method below:

Type the character in the Add Character box, then click Add so it appears in the list box.

From the Add Character pop‑up menu, choose the code system (Shift JIS, JIS, Kuten, Big5, GB, Johab, or Unicode), type the code in the Add Character box, and click Add.

To remove an entry, select its character in the list box; press Backspace (Windows) or Delete (Mac OS). To view the code for the selected character, use the Add Character pop‑up menu and choose Shift JIS, JIS, Kuten, Big5, GB, Johab, or Unicode. The selected code system appears in the Add Character text box. Use Save to keep the settings, or Cancel to leave without saving them.

## Composing CJK characters — Delete a kinsoku set

In the Kinsoku Shori Set dialog box, open the Kinsoku Settings pop‑up menu and select the kinsoku setting for removal. Click Delete Set.

Predefined kinsoku settings cannot be deleted.

## Composing CJK characters — Specify whether to push in or push out kinsoku text

Kinsoku Break Type controls whether composition resolves restricted characters by pushing text inward or outward so kinsoku characters do not start or finish a line.

Select the paragraph or frame. Open the Paragraph panel menu or Control panel menu, then choose from the Kinsoku Break Type menu:

Push In First: favors fitting kinsoku characters on the current line.

Push Out First: favors moving kinsoku characters onto the following line.

Push Out Only: always moves kinsoku characters onto the following line.

Prioritize Adjustment Amount: chooses push in when pushing the same text out would widen character spacing more than push in would tighten it.

## Composing CJK characters — Force highlighting of kinsoku text

To review where kinsoku affects composition, enable the highlighting option. General kinsoku items appear in blue-gray; items pushed in to remain on the same line appear in red; items pushed out so they do not stay on the previous line appear in blue. After reviewing these highlights, adjust the composition manually as needed.

Select Edit > Preferences > Composition (Windows) or InCopy > Preferences > Composition (Mac OS). Enable Kinsoku, and then click OK.

## Composing CJK characters — Turn bunri-kinshi on or off

With bunri-kinshi enabled, entries listed in the Bunri-kinshi Characters section of the Kinsoku Settings dialog box stay together across line breaks and are not spread apart by full justification.

Select the text to change. From the Paragraph panel menu or Control panel menu, choose Bunri-Kinshi.

## Composing CJK characters — Use rensuuji

Rensuuji keeps number strings from breaking and applies JIS specifications to punctuation spacing within those number strings.

Rensuuji is off (Left) and on (Right).

Rensuuji is off (Left) and on (Right). Choose the target text. To enable rensuuji, choose Rensuuji from the Paragraph panel menu or Control panel menu.

## Composing CJK characters — Absorb ideographic space

A space at a line ending can move to the following line and make the edge look uneven. Use the option that stops a line from starting with a space.

Select the text to change. In the Paragraph panel menu or Control panel menu, choose Absorb Ideographic Space At Line End so a line will not start with a space.

This setting can also be included in a paragraph style. When creating or editing a style, find it in the Japanese Composition Settings section.

## Composing CJK characters — Turn off Roman word wrap

Selecting Arbitrary Hyphenation allows Roman words to break without following Roman hyphenation rules, and the line ending does not receive a hyphen character (-). When it is cleared, Roman hyphenation rules govern the breaks.

Arbitrary Hyphenation works only on text assigned a CJK language. Text assigned Roman languages is unaffected.

Select the text to change. Choose Arbitrary Hyphenation in the Paragraph panel menu or Control panel menu.

This setting can also be included in a paragraph style. When creating or editing a style, find it in the Japanese Composition Settings section.

## Composing CJK characters — Apply kinsoku hanging

Hanging determines if Japanese punctuation marks, including periods and commas, can sit outside the margin while aligning to the text-frame edge. Define hanging characters through Hanging Punctuation in the Kinsoku Settings dialog box.

Select the text to change. To enable hanging, open the Paragraph panel menu or Control panel menu, choose Kinsoku Hang Type, and select one of these methods.

None

No hanging.

Regular

For paragraphs set to justify or justify all lines, positioning accounts for hanging characters.

Forced

Forced: when the paragraph uses justify or align on both sides, the hanging characters are forced to hang before positioning. This method is available only when paragraph justification is applied.

## Composing CJK characters — Rotate half-width characters in vertical text

Select the text to change. Choose Roman rotation in Vertical Text from either the Paragraph panel menu or the Control panel menu.

In vertical text, half-width characters such as Roman text or numbers can change direction. Turning on Roman Rotation in Vertical Text rotates those characters vertically within the paragraph.

When enabled, each half-width character rotates separately.

Roman text before and after rotation

Roman text before and after rotation

## Composing CJK characters — Turn warichu on or off

Warichu lets body text carry an inline note, typically two parenthesized lines.

Text set in warichu

Text set in warichu Select the text. Use one of these methods.

Choose Warichu from the Character panel menu or Control panel menu.

From the Character panel menu or Control panel menu, open Warichu Settings. In the Warichu Settings dialog box, select Warichu, and click OK.

## Composing CJK characters — Change warichu options

Select the text to modify. From the Character panel menu or Control panel menu, open Warichu Settings. Use OK to apply the Warichu Settings after the options are set. Number Of Lines sets how many text lines are used for warichu characters. Line Spacing controls the gap between those warichu-character lines. Warichu Size defines warichu character size as a percentage of the parent text. For Warichu alignment, choose an alignment option. For example, in a vertical frame grid, Left/Top places the start of the warichu characters at the top of the frame. When Auto is selected, justification is calculated automatically from the warichu size or the parent text. The alignment proxy previews the position of warichu text against the parent text. In Line Breaking Options, set the minimum characters needed before and after line breaks before a new line can begin.

### More like this

- Hyphenate text
- Change Justification settings
- Use tate-chu-yoko
