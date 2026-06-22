# Mojikumi And Yakumono In Japanese Layout, Spacing Classes And Yakumono Types, Apply Yakumono Character Types In Layout, Customize Mojikumi Spacing Sets ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About Mojikumi and Yakumono in Japanese layout; Spacing classes and Yakumono types; Apply Yakumono character types in layout; Customize Mojikumi spacing sets; Set spacing priorities in Mojikumi character classes; Adjust spacing around Japanese punctuation; Use Kinsoku settings; Format CJK text.

## About Mojikumi and Yakumono in Japanese layout

Japanese layout depends on character-spacing rules that shape text composition and punctuation behavior.

Professional Japanese typography needs fine spacing control. Mojikumi supplies rules for spacing among character categories, while Yakumono governs punctuation behavior inside those rules.

For Western typography, letter spacing is commonly handled through kerning and tracking. Mojikumi plays a related role for Japanese text, but the rule set is more involved. Japanese composition must account for ideographic characters, roman characters, and punctuation relationships rather than only letter spacing. Publications that combine Japanese and Western texts rely on these rules.

### Mojikumi spacing controls

Mojikumi governs spacing among different character categories throughout text. Its conventions follow JIS X 4051:1995, the Japanese Industrial Standard for spacing.

- Character relationships: set spacing between Japanese characters, roman characters, numbers, and punctuation marks.
- Line boundaries: define line-start and line-end behavior, including which characters may begin or finish a line.
- Paragraph structure: handles paragraph indentation and the broader composition of the paragraph.
- Justification behavior: controls spacing adjustment when text is expanded or compressed to fill a line.

InDesign provides predefined Mojikumi sets for common professional standards. Choose one of these presets from the Mojikumi menu in the Paragraph panel, or build a custom set when a project needs different spacing rules.

For Chinese text, Traditional Chinese and Simplified Chinese Mojikumi settings offer spacing conventions suited to those writing systems. Korean text usually does not need Mojikumi because Hangul follows different composition rules.

### Yakumono classification

In Japanese typography, Yakumono means punctuation marks and special characters. Spacing behavior separates these characters into three main groups:

- Okoshi yakumono (opening punctuation) covers opening parentheses, brackets, and quotation marks. To preserve visual balance, these characters usually use reduced space before them.
- Uke yakumono (closing punctuation) covers closing parentheses, brackets, periods, and commas. These characters may tighten the following space so the next character sits closer.
- ä¸­ç‚¹é¡ž (Nakatenrui) (middle punctuation) covers middle dots (nakaguro), colons, and other marks placed between words or phrases. These marks keep even spacing on both sides.

That classification affects behavior during line justification and when kinsoku rules block line breaks in particular positions. For instance, Kuten (Japanese period) (ã€‚) treated as uke yakumono can compress, helping a line fill without overly loose spacing.

### Spacing values

For every Mojikumi setting, character spacing is described with three values: Desired, Minimum, and Maximum. Together, these values give the composer room to adjust text.

- Desired value: the preferred spacing under ordinary conditions. InDesign uses it when text is composed without justification or kinsoku processing.
- Minimum value: the amount to which spacing may shrink when the composer needs more text on a line. This compression is used during kinsoku processing when characters that cannot end a line must move ahead.
- Maximum value: the largest spacing expansion allowed during full justification. When a line must occupy the full measure, InDesign can increase spacing across the line up to this limit.

Set these values as percentages of character width or as bu units. A bu is a fractional unit of the Zenkaku (1 em), produced by dividing the Zenkaku into smaller portions. Example conversions: 4 bu = 1/4 em; 2 bu = 1/2 em. Combining 2 bu 4 bu gives 3/4 em. You can see the adjustment while typing. Wider separation between Minimum and Maximum gives InDesign more freedom to tune spacing while preserving consistent text color.

### Mojikumi and text composition

Mojikumi settings work with the InDesign composition engine when line breaks are chosen. With Adobe Japanese Paragraph Composer, possible break points are evaluated across the full paragraph, balancing spacing quality against concerns such as Kinsoku violations.

Different spacing situations receive penalty values from the composer. The more a spacing result departs from the desired value, the higher its penalty becomes. The selected set of line breaks is the one with the lowest total penalty across the paragraph, which produces a more even result.

This calculation updates while text is edited. Adding or deleting characters can cause the composer to revise spacing on earlier lines so the paragraph improves as a whole. During typing, earlier lines may reflow as the paragraph is refined.

Use Mojikumi when text composition or spacing needs correction. InDesign includes presets for typical cases, and custom sets are available for specialized fonts or unusual project requirements.

## Spacing classes and Yakumono types

Review the Japanese character classes and aki spacing values used for Mojikumi composition in Adobe InDesign.

When laying out Japanese text, these spacing classifications explain how Adobe InDesign inserts aki (spacing) before, after, or between character types and how mojikumi settings can be customized for a project. Mojikumi uses JIS X 4051:1995 as the basis for grouping characters into spacing classes during composition.

### Yakumono categories

Yakumono covers punctuation marks and special characters that need spacing adjustments. InDesign uses these Yakumono groups:

- Okoshi Yakumono (Opening punctuation)
- Uke Yakumono (Closing punctuation)
- Chuzuki Yakumono (Middle punctuation)

### Okoshi Yakumono (Opening punctuation)

Characters used at the start of quoted text or parenthetical content.

### Uke Yakumono (Closing punctuation)

Characters used at the close of quoted text or parenthetical content.

### Chuzuki Yakumono (Middle punctuation)

Characters used inside sentences to divide elements or mark pauses.

### Character spacing classes

InDesign also uses these spacing classes:

- Between CJK and Roman
- Contiguous Yakumono
- Paragraph Mojikumi indent

### Between CJK and Roman

Controls spacing where Japanese characters sit next to Latin alphabet characters, numbers, or symbols.

### Contiguous Yakumono

Sets spacing behavior for consecutive punctuation marks.

### Paragraph Mojikumi indent

Controls indentation at the start of paragraphs and hanging punctuation at line endings.

### Aki value interpretation

Aki values describe spacing as percentages of a full-width character space:

- Desired: the target spacing that InDesign tries to use.
- Minimum: the smallest spacing allowed during compression for kinsoku or line justification.
- Maximum: the upper spacing limit when a line expands for full justification.

Example values for opening parenthesis: 50% (Desired), 0% (Minimum), 50% (Maximum):

- Shows a Â½ character space before the parenthesis.
- Shrinks to no space when line-break violations must be prevented.
- Grows to Â½ character space during line justification.

Note

During paragraph composition, Adobe Japanese Paragraph Composer evaluates spacing throughout the whole paragraph and can revise earlier lines to avoid poor breaks later. Adobe Japanese Single-line Composer instead handles each line independently.

### Accessing spacing settings

Open Type > Mojikumi Settings to customize spacing values, create custom Mojikumi sets from presets, or change spacing for individual character classes.

## Apply Yakumono character types in layout

Use Okoshi, Uke, and Nakatsuki settings in Adobe InDesign to manage punctuation spacing in CJK text.

Yakumono character types tell InDesign how spacing should work around Japanese punctuation, parentheses, and special characters. Okoshi, Uke, and Nakatsuki handle spacing at line beginnings, line endings, and within lines.

In Mojikumi composition, these settings control the aki before and after punctuation. Apply Yakumono adjustments when punctuation spacing needs fine control, especially in print layouts where tighter spacing can improve readability. The feature depends on the CJK version of InDesign with Japanese language support enabled.

Apply Yakumono categories for correct typographic spacing:

- Okoshi Yakumono: characters that are not allowed at the end of a line (opening punctuation).
- Uke Yakumono: line starts cannot use these characters, including closing punctuation, kuten, touten, konma, and period.
- Nakatsuki Yakumono: mid-line spacing rules apply to characters such as middle dots and colons. Small kana characters are treated as Kinsoku characters.

### Configure Yakumono spacing in Mojikumi sets

Open Type > Mojikumi Settings > Detailed.

In the Mojikumi drop-down menu, choose an existing Mojikumi set, or select New to create a custom set.

In the Yakumono section, choose the character type to change, such as Open Paren or Close Paren.

Use the arrow icon beside a category name to show specific character types such as Open Paren, Close Paren, or Middle Punctuation.

For each character type, enter Minimum, Desired, and Maximum spacing values as percentages of character width.

Select Save.

### Adjust spacing for specific punctuation

Open Type > Mojikumi Settings > Detailed.

Expand the Yakumono category that includes the character to change.

From the list, choose the specific punctuation mark, such as Open Round Parenthesis.

From the before/after pop-up menu, choose Previous Class or Next Class to set whether spacing is applied before or after the selected character.

Enter spacing values by using Desired for standard spacing, Minimum for the tightest setting, and Maximum for the loosest setting.

Use Priority (1-9) to set compression order when InDesign adjusts line spacing for justification. Lower values compress before higher values.

Save the changes.

To make spacing around parentheses zero instead of the default 50% aki, edit Open Parentheses under Okoshi Yakumono and set it to 0 Fixed or 0/0/50. 0 Fixed always removes spacing; 0/0/50 lets InDesign add up to 50% aki during justification.

Tip

In the Detailed section of Mojikumi Settings dialog box, use Indicate Differences to compare the custom set with InDesign default Mojikumi presets. Changed values are highlighted.

In the Paragraph panel, use the Mojikumi set drop-down menu to apply the custom Mojikumi set to paragraphs. The Yakumono spacing rules take effect immediately, revising punctuation spacing according to the settings while preserving line breaks and Kinsoku rules.

## Customize Mojikumi spacing sets

Create and edit Mojikumi sets in Adobe InDesign to apply detailed character-spacing rules for CJK text composition.

By customizing Mojikumi sets, you can control spacing precisely for Chinese, Japanese, and Korean (CJK) text. These settings cover punctuation, parentheses, numbers, and relationships between CJK and Roman characters, following JIS X 4051.

Use custom Mojikumi sets when the predefined choices do not satisfy CJK typography requirements. They are useful for publications that need house-style spacing rules or mixed CJK and Roman text with exact spacing.

Start new sets from existing presets, then change spacing values to compress or expand gaps around punctuation, parentheses, and other special characters. These values influence line justification and Kinsoku processing in the document.

### Create a custom Mojikumi set

Open Type > Mojikumi Settings > Basic or Detailed.

In the Mojikumi Settings dialog box, choose New.

Enter a name for the custom set, then choose an existing set from the Based on Set drop-down menu to use as its starting point.

Select OK.

### Edit spacing values in Mojikumi sets

Open Type > Mojikumi Settings > Basic or Detailed.

In the Mojikumi Settings dialog box, choose New.

From the Units drop-down menu, choose the spacing measurement unit.

In the Yakumono section, select the character type to adjust, such as Open Paren or Close Paren.

For the selected character type, fill in Begin line, Middle line, and End line values to control spacing.

Use the triangle beside a character type to display that character type's options.

Review spacing in Contiguous Yakumono, Paragraph Mojikumi Indent, and Between J & Roman, then change values as needed.

Select Save to save the edits, or OK to save and close the dialog box.

### Common parentheses settings:

- 50% Fixed: keeps half-width spacing and does not compress it.
- 50%(0%-50%): lets spacing range from zero to half-width.
- 50%(25%-50%): permits spacing from quarter-width through half-width; 0% Fixed: always compresses.
- 0%(0-50%): compresses spacing but can permit as much as half-width.

### Access detailed Mojikumi options

Open Type > Mojikumi Settings > Detailed.

In the Mojikumi Settings dialog box, choose the custom set from the Mojikumi drop-down menu.

Choose the specific character class to modify from the Class contents field.

From the before/after pop-up menu, choose Previous Class or Next Class to determine whether spacing applies before or after the selected character.

For each spacing option, define the allowed compression and expansion range by setting Minimum, Desired, and Maximum values.

To compare the current settings with another Mojikumi table and show differences, use the Indicate Differences drop-down menu.

Select Save.

### Apply custom Mojikumi sets

Highlight the paragraph to format.

Choose Type > Paragraph.

From the Paragraph panel's Mojikumi menu, choose your custom set.

If a custom set should be offered in every new document, define it while no document is open; InDesign adds it to the application defaults.

Tip

For Japanese composition that often contains Roman parentheses or half-width spaces, use full-width parentheses to avoid composition issues. Keep Roman parentheses for longer English passages inside Japanese text.

## Set spacing priorities in Mojikumi character classes

Define the compression sequence and spacing values for Japanese character classes so Adobe InDesign composes text with the behavior you want.

During Kinsoku processing and full justification, priority settings decide how character spacing is reduced. Those values set which character classes compress first, giving you finer control over composition quality.

Use this workflow when built-in Mojikumi presets are not precise enough for particular Japanese typography and you need to adjust character classes individually. CJK (Chinese, Japanese, and Korean) language support is required.

Priority values use 1 through 9. Classes with smaller numbers compress earlier; classes set to None are delayed until the end. Classes assigned the same priority compress together.

### Configure spacing priority for character classes

Choose Type > Mojikumi Settings > Detailed.

In the Mojikumi Settings dialog box, choose Detailed to display the character class controls.

Under the Mojikumi menu's character class list, choose the punctuation category to change, such as Open Paren.

From the before/after pop-up menu, choose Previous Class or Next Class to indicate whether the spacing belongs before or after the selected character.

Type spacing values for Minimum, Desired, and Maximum, using percentages or Bu units.

For each spacing option, enter 1 to 9 in Priority, or choose None.

Choose Save, then choose OK.

Tip

For justification, priorities 1-3 compress before the others, which makes them useful for punctuation spacing that can flex. Use 7-9 for spacing you want to keep steadier.

Set Minimum below Desired when kinsoku processing should be allowed to compress spacing. Set Maximum above Desired when full justification may expand spacing. Priority controls the sequence: 1 is handled first, 2 through 9 follow, and None is handled last.

### Set priority for detailed character types

Choose Type > Mojikumi Settings > Detailed.

In the Mojikumi Settings dialog box, choose Detailed to display character class controls.

To expose the individual character types, choose the triangle indicator beside a class name, such as Open Paren in Okoshi Yakumono.

For each specific character type, set Minimum, Desired, Maximum, and Priority values; examples include Corner Open Bracket, Round Open Parenthesis, and Other Opening Parenthesis. Expanding a class lets you assign different priorities to individual punctuation. For instance, assign round parentheses a lower priority so they compress more aggressively than square brackets.

The Indicate Differences drop-down menu compares the current values with another Mojikumi table. Differences are shown with blue highlighting.

Choose Save, then choose OK.

## Adjust spacing around Japanese punctuation

Use Yakumono options in Mojikumi to set the space before and after Japanese punctuation in Adobe InDesign.

Yakumono punctuation follows spacing rules from JIS X 4051 standards. InDesign lets you change these values in Mojikumi settings, which define the aki (space) placed before and after punctuation including parentheses, periods, and commas.

This workflow changes spacing for selected Yakumono character classes inside an existing Mojikumi set. Apply the set to paragraphs from the Mojikumi menu in the Paragraph panel. To build a new Mojikumi set, choose Type > Mojikumi Settings.

### Access detailed Mojikumi settings

Select the paragraph that contains the punctuation to change.

Choose Type > Paragraph.

Choose Mojikumi, then choose Basic.

From the Mojikumi menu, choose a Mojikumi set, or choose New to create a custom set.

Choose Detailed to open the character class controls. In Detailed view, InDesign lists the individual character classes for each Yakumono category so you can adjust particular punctuation marks precisely. To eliminate spacing around parentheses, set Begin Line and Middle Line to 0% Fixed for the applicable Yakumono class. The Fixed option stops InDesign from changing that spacing during justification.

Choose Save, then choose OK.

### Configure spacing for punctuation characters

Choose Type > Paragraph.

Choose Mojikumi, then choose Basic.

In the Mojikumi Settings dialog box, choose Detailed to show character class settings.

Under the Mojikumi menu's character class list, choose the punctuation type to modify, such as Open Paren.

Use the before/after pop-up menu to choose Previous Class or Next Class, indicating whether the spacing is applied before or after the selected character.

In Minimum, Desired, and Maximum, enter spacing values as percentages of a full-width character or as bu units. InDesign uses the Minimum and Maximum range during line justification and Kinsoku processing. A Minimum below Desired tightens spacing; a Maximum above Desired allows looser spacing when text needs extra room to fit correctly.

Choose the triangle next to a punctuation category, such as Open Paren, to show subcategories such as Corner Open Bracket, Round Open Parenthesis, and Other Opening Parenthesis for more targeted control.

Enter Priority values from 1 to 9 to set the compression order during line justification. Lower numbers compress first.

Choose Save, then choose OK.

## Use Kinsoku settings

Apply line-break rules for Asian text by using built-in or custom Kinsoku character sets in Adobe InDesign.

In Asian typography, Kinsoku settings keep designated characters away from line starts or line ends and help text composition follow established typographic rules.

Use these settings with Japanese, Chinese, and Korean text in InDesign. For Japanese text, hard and soft Kinsoku sets are available; soft sets leave out long-vowel symbols and small hiragana characters. Chinese and Korean versions provide their own specialized Kinsoku sets. Choose the predefined sets, or create custom sets for the needs of the project.

### Select Kinsoku settings for a paragraph

With the Type  tool, choose a paragraph or frame containing the text you want to format.

Choose Type > Paragraph.

Open the Kinsoku set drop-down menu and choose an option. To turn Kinsoku settings off, choose No Kinsoku.

### Create a custom Kinsoku set

Choose Type > Kinsoku Settings.

In the Kinsoku Shori Set dialog box, choose New.

Name the new set and identify the existing set it should be based on.

Add a character with either of these methods:

- Type the character in the Entry box, then choose Add.
- From the character drop-down menu, choose a code system, enter the code, and choose Add.

To confirm a character's code, select the character in the list, then choose a code system from the character drop-down menu. The code is displayed in the text box.

To remove a character, select it and press Backspace (Windows) or Delete (macOS).

Choose Save to save the settings.

### Control Kinsoku break behavior

Select the paragraph or frame.

Choose Type > Paragraph. In the Paragraph panel menu, choose Kinsoku break type, then pick one of these options:

- Push in First: keeps Kinsoku characters on the same line
- Push out First: moves them to the next line
- Push out Only: always moves them
- Prioritize Adjustment Amount: pushes text in when pushing out would create more spacing

### Apply Kinsoku hanging

Select the text to affect.

Choose Type > Paragraph. In the Paragraph panel menu, choose Kinsoku Hang Type, then pick one of these options:

- None: applies no hanging
- Regular: hangs punctuation when justification is used for the paragraph
- Force: places hanging characters beyond the margin before justification is applied

Hanging determines whether Japanese punctuation marks, including Kuten or Touten, can extend outside the margin while still aligning to the text frame edge. In the Kinsoku Shori Set dialog box, use Hanging punctuation to specify which characters are allowed to hang.

### Highlight Kinsoku processing

Choose Edit > Preferences > Composition (Windows) or InDesign > Preferences > Composition (macOS).

Choose Kinsoku, then choose OK. After highlighting is enabled, Kinsoku items show in blue-gray. Characters pushed in remain on the same line and are colored red; characters pushed out to the following line are colored blue. Use this visual feedback while editing and refining text composition.

### Delete a custom Kinsoku set

Choose Type > Kinsoku Settings.

In the Kinsoku Shori Set dialog box, choose the custom Kinsoku set from the Kinsoku settings drop-down menu.

Choose Delete Set. Deleting a Kinsoku set returns text that used it to the default settings. The predefined Kinsoku settings supplied with InDesign cannot be deleted.

## Format CJK text

Apply composition settings in Adobe InDesign to manage line breaks, spacing, and character rotation for Chinese, Japanese, and Korean typography.

InDesign includes CJK (Chinese, Japanese, Korean) text formatting controls for line breaks, spacing, and display in vertical layouts.

These settings improve typography for common CJK typesetting cases, including unwanted breaks in number sequences, ideographic spacing control, and character rotation management.

### Keep characters together across lines with Bunri-kinshi

Use Bunri-kinshi to keep selected characters together so they do not split across lines or receive spacing during full justification.

With the Type  tool, select the text to affect.

Choose Type > Paragraph.

Open the panel menu icon, then choose Bunri-kinshi.

### Keep number sequences intact with Rensuuji

Rensuuji preserves number sequences across line breaks and handles punctuation spacing in number strings according to JIS specifications.

With the Type  tool, select the text containing the numbers to protect.

Choose Type > Paragraph.

Open the panel menu icon, then choose Rensuuji.

### Ideographic space adjustments at line start and end

With the Type  tool, select the text to affect.

Choose Type > Paragraph.

Open the panel menu icon, then choose Absorb ideographic space at line end.

### Turn off Roman word wrap with Arbitrary hyphenation

Let Roman words break without applying hyphenation rules or adding a hyphen at the end of the line. This setting applies only when the Character panel Language is set to Japanese; it does not affect Roman-language text. Japanese Composition Settings can include it in paragraph styles.

With the Type  tool, select the text to affect.

Choose Type > Paragraph.

Open the panel menu icon, then choose Arbitrary hyphenation.

### Rotate half-width characters in vertical text with Roman rotation in Vertical Text

Maintain consistent vertical alignment when vertical layouts mix Roman letters or numbers with CJK text.

With the Type  tool, select the text to affect.

Choose Type > Paragraph.

Open the panel menu icon, then choose Roman rotation in Vertical Text. Half-width characters, including Roman text and numbers, rotate so they align vertically with the surrounding CJK characters.

## See also

- [Characters](uxp-characters.md)
