# Format Japanese Text Mojikumi Kinsoku, Mojikumi And Kinsoku Settings, Mojikumi Kinsoku Overview

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Format Japanese text in Illustrator; Mojikumi and Kinsoku settings in Illustrator; Mojikumi and Kinsoku overview for Japanese text formatting.

## Format Japanese text in Illustrator

In Illustrator, Mojikumi and Kinsoku settings let Japanese text control spacing between characters and where lines break.

Readable Japanese type depends heavily on spacing and line-break behavior. In Adobe Illustrator, Mojikumi and Kinsoku Shori manage these choices for Japanese text; use built-in sets or define custom rules to support proper typesetting and clearer reading.

### Create a Mojikumi set

A Mojikumi set groups controls for Aki (spacing) around punctuation, brackets, and Latin text. Applying a set to a paragraph helps layouts follow Japanese typesetting conventions and improves readability.

Illustrator includes predefined Mojikumi sets for Japanese typesetting. Selecting the set that fits a layout or purpose lets spacing and punctuation placement adjust automatically.

Choose Type > Mojikumi Settings, then select New....

Type a name and choose a base set. Choose None if you don't want to start from an existing set.

Define spacing values and priorities for character categories to create and customize a Mojikumi set.

A. Name B. Line End Settings C. Begin Line Settings D. Mid Line Settings E. Before and After Roman F. New G. Units

Set up a new Mojikumi set by entering spacing values and priorities for the relevant character types.

Change spacing values as needed.

For each line setting, enter Minimum, Desired, and Maximum values.

Assign Priority.

Under Priority settings, give each character type a priority level (1-9); Illustrator processes lower numbers first, while 0 removes priority.

### Apply a Mojikumi set

Select the text.

From the Paragraph panel, choose an option in the Mojikumi Set drop-down:

- None: disables Mojikumi for the selected text.
- GyomatsuYakumonoZenkaku/Hankaku: Sets end-of-line punctuation spacing to 50% (half-width) or 0% (full-width). For Japanese text next to alphanumeric characters, desired spacing is 0%, which reduces awkward gaps and helps horizontal text with many alphanumeric characters appear more balanced.
- YakumonoHankaku: applies half-width punctuation spacing.
- GyomatsuYakumonoHankaku (Default): Most characters use full-width spacing, but the line's last character does not. Full-width spacing is applied to most characters other than the final character in the line.
- GyomatsuYakumonoZenkaku: sets full-width spacing for most characters and for the line-ending character.
- YakumonoZenkaku: gives punctuation full-width spacing.
- TsumeGumi: focuses on spacing between alphanumeric and Japanese text and around punctuation, reducing extra gaps between characters.
- BetaGumi: lays out Japanese characters evenly from the full-width character size without additional spacing between characters. With spacing variation minimized, long passages such as body text keep a steadier reading rhythm and become easier to read.

Mojikumi presets applied to Japanese text across multiple Illustrator artboards make more precise text-layout tuning possible.

A. YakumonoHankaku B. GyomatsuYakumonoHankaku C. GyomatsuYakumonoZenkaku D. YakumonoZenkaku E. GyomatsuYakumonoZenkakuOrHankaku F. TsumeGumi G. BetaGumi

The same Mojikumi presets, applied to Japanese text on multiple Illustrator artboards, help refine layout with finer control.

Note

With Illustrator 30.4:

- New Mojikumi sets, including BetaGumi and TsumeGumi, were added.
- Updated Aki Processing for Latin Text lets you adjust spacing for Half-width Alphanumeric (Non-punctuation) Latin Text, with separate settings for letters and numbers. This supports more natural spacing between Japanese text and Latin characters. For files that contain these settings, use the latest Illustrator release; older builds, including Illustrator 30.3 and below, can lose that spacing information.

### Set up TsumeGumi or BetaGumi

Choose the text to format.

In the Character panel, apply the relevant kerning choice:

- For TsumeGumi, set kerning to Metrics.
- For BetaGumi, set kerning to Metrics-Roman Only.

In the Paragraph panel, choose TsumeGumi or BetaGumi from the Mojikumi drop-down.

In the OpenType panel, enable Proportional Metrics (TsumeGumi).

### Create a Kinsoku set

Choose Type > Kinsoku Shori Settings, then select New Set.

Type a name and select a base set. Select None if you do not want to build from an existing set.

To add a character to a field, choose the field, type the character in the Input box, select Direct Entry, then select Add.

To remove a character from a field, choose the character, then select Delete.

For the character now in the Input box, choose Shift JIS, JIS, Kuten, or Unicode to display its code.

### Apply a Kinsoku set

Choose Kinsoku Shori or Mojikumi.

Open the Paragraph panel menu, choose Kinsoku Shori Type, and pick one of these methods:

- Push In First: moves characters onto the previous line so prohibited characters do not begin or end a line.
- Push Out First: shifts characters to the next line so prohibited characters do not begin or end a line.
- Push Out Only: always sends characters to the next line to keep prohibited characters away from line starts or endings; push-in is not attempted.

### Use Bunri-Kinshi

Select the text, then open the Paragraph panel.

In the Paragraph panel menu, choose Bunri-Kinshi to keep selected text from breaking across lines.

Tip

If a specific text string must stay together instead of splitting over two lines, highlight the text and choose Bunri-Kinshi from the Character panel flyout menu. That keeps the string from being divided across lines.

## Mojikumi and Kinsoku settings in Illustrator

Review Mojikumi and Kinsoku settings in Illustrator to see the available controls for spacing and line breaks.

### Mojikumi settings options

Use Type > Mojikumi Settings to open the Mojikumi Settings dialog box, where you set spacing for each class shown in Mojikumi Settings. Enter values as percentages (%) or in units (分).

### Kinsoku sets

Use Type > Kinsoku Settings to open the Kinsoku Settings dialog, where you create rules for characters, including punctuation, that are not allowed at line starts or line endings. Choose a preset option or customize the settings as required.

### Kinsoku Shori types

From the Paragraph panel flyout menu, select Kinsoku Shori Types to decide how text changes when line-breaking rules apply. The three options below define how restricted characters are treated at the end of a line:

## Mojikumi and Kinsoku overview for Japanese text formatting

See how Mojikumi and Kinsoku operate in Illustrator when formatting Japanese text.

Mojikumi and Kinsoku manage spacing among Japanese characters, punctuation, and Latin text in Japanese layouts. These controls keep spacing consistent and help lines maintain visual balance.

### Mojikumi

Mojikumi sets Japanese composition rules for spacing between Japanese and Roman characters, punctuation, special characters, numbers, and for behavior at line starts and endings. It also manages paragraph indents.

Illustrator includes predefined Mojikumi sets based on Japanese Industrial Standards (JIS X 4051-1995), and you can apply them to text.

Custom Mojikumi sets can store spacing rules you reuse often, such as punctuation spacing or spacing around parentheses, for particular layout requirements.

### Kinsoku Shori

Kinsoku Shori changes line breaks to follow Japanese typesetting rules, keeping characters out of unsuitable positions at the beginning or end of a line, such as punctuation at line starts. It includes three controls:

- Line Start Kinsoku: controls which characters may appear at the beginning of a line.
- Line End Kinsoku: controls which characters may appear at the end of a line.
- Separation Prohibition: keeps specified characters from being split across lines.

Save these rules as Kinsoku sets so the same rules can be applied consistently.

### Types of Kinsoku sets

Illustrator includes three Kinsoku set types:

- Hard Kinsoku: suited to strict typesetting, including body text.
- Soft Kinsoku: skips Kinsoku rules for certain characters, including the long vowel mark (ー) and small kana (ぁ, ぃ, etc.), so it fits flexible layouts such as headings or short text.
- Soft Kinsoku v2: intended for short-form content such as web and video. It is based on Soft Kinsoku and adds extra Kinsoku characters.

Use the default sets as they are, or customize them by adding or removing Kinsoku characters. For finer layout control, pair Kinsoku Shori with Burasagari (hanging punctuation). You can also use Push in/Push out (character spacing adjustments) from the Paragraph panel flyout menu.

### Working with Mojikumi and Kinsoku together

Mojikumi handles character spacing, and Kinsoku governs line-break positions. Together, they keep Japanese text balanced while following standard typesetting practice.
