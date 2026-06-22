# Drop Caps Nested Styles, Text Composition

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Drop caps and nested styles; Text composition — Compose text.

## Drop caps and nested styles

Drop Caps and Nested Styles supports three main uses: applying a character style to a drop cap, applying a nested style to text at the start of a paragraph, and applying a nested line style to one or more paragraph lines.

### Apply a character style to a drop cap

A character style can be applied to one or more drop-cap characters in a paragraph. If a drop cap needs a different color or font than the surrounding paragraph, define a character style with those attributes. Then either apply that character style directly to a paragraph or nest it inside a paragraph style.

Note

When InCopy content is linked to an InDesign layout, creating new styles is unavailable.

Drop cap formatted automatically by nested character style

Drop cap formatted automatically by nested character style

Create a character style containing the formatting for the drop-cap character. Use one of these methods:

For one paragraph, choose Drop Caps And Nested Styles from the Paragraph panel menu.

For nesting inside a paragraph style, double-click the paragraph style, then click Drop Caps And Nested Styles.

Set the number of drop-cap lines and characters, then choose the character style. If the drop cap sits too far from the left edge, select Align Left Edge.

Align Left Edge uses the original left side bearing of the drop-cap character instead of the larger spacing value. This is especially helpful for drop caps formatted with sans serif fonts.

If the drop cap character overlaps text below it, select Scale For Descenders. For frame-grid behavior of text wrapping around the drop cap, use the menu setting.

Ignore Frame Grid

The drop cap and text remain unadjusted, which can keep the text from lining up with the frame’s grid.

Pad To Frame Grid

Scaling is not applied to the drop cap; text aligns to the grid, which can leave extra white space between the drop cap and wrapped text.

Scale Up To Grid

This option makes the drop cap wider for horizontal text or taller for vertical text, allowing the text to align with the grid.

Scale Down To Grid

This option makes the drop cap narrower for horizontal text or shorter for vertical text, allowing the text to align with the grid.

Click OK.

To use another nested style for characters after the drop cap, use New Nested Style. (See Create nested styles.)

### Create nested styles

Within a paragraph or line, character-level formatting can be assigned to one or several text ranges. You can also chain two or more nested styles so each one begins where the previous one ends. For repetitive, predictable paragraph formatting, the sequence can even loop back to the first style.

Nested styles are useful for run-in headings. For example, one character style can format the first letter of a paragraph while another continues through the first colon (:). Each nested style can be given a character that stops it, such as a tab or the end of a word.

Note

Stand-alone InCopy documents allow new styles; content linked to an InDesign layout does not.

In this example, the Number character style formats the first word, and the Run-in character style formats text through the first colon.

In this example, the Number character style formats the first word, and the Run-in character style formats text through the first colon.

For a related article, see Michael Murphy’s InDesign's Nested Styles Auto-Format Multiple Paragraphs.

### Create one or more nested styles

Create the character styles you want to use for formatting text. Use one of these methods:

For nested styles in a paragraph style, double-click the paragraph style, then click Drop Caps And Nested Styles.

For nested styles in one paragraph, use the Paragraph panel menu command Drop Caps And Nested Styles.

Note

Nested styles work best when they are included in paragraph styles. If they are applied as local paragraph overrides, later edits or nested-style formatting changes can make the styled text display unexpected character formatting.

Add as many entries as needed with New Nested Style. Configure any of these options for each entry, then click OK:

Click the character style area, then choose a character style that controls the appearance of that part of the paragraph. If no character style exists yet, choose New Character Style and define the formatting you want.

Specify the item that stops the character style formatting. You may type the character itself, such as a colon (:) or a particular letter or number, but you cannot type a word.

Set the required number of instances of the selected item, such as characters, words, or sentences.

Choose Through or Up To. Through includes the character that ends the nested style; Up To formats only characters before that character.

To reorder the list, select a style and click the up button or down button. The list order controls the sequence in which formatting is applied. Formatting from the second style starts where formatting from the first style ends. If a character style is applied to the drop cap, that drop-cap character style functions as the first nested style.

### Create nested line styles

A nested line style applies a character style to a specified number of lines in a paragraph. Like nested styles, nested line styles can be chained together, and the sequence can repeat.

Formatting from nested line styles can coexist with formatting from nested styles. For example, a nested line style can set color while a nested style sets italics. If both define the same attribute in conflicting ways, such as red versus blue, the nested style overrides the nested line style.

Create the character styles you want to use for formatting text. Use one of these methods:

For nested line styles in a paragraph style, double-click the paragraph style, then click Drop Caps And Nested Styles.

For nested line styles in one paragraph, use the Paragraph panel menu command Drop Caps And Nested Styles.

Add one or more entries with New Nested Line Style. In the character style area, choose the character style that controls the appearance of that section. If no character style exists yet, choose New Character Style and define the formatting you want. Specify how many paragraph lines the character style should affect.

To reorder the list, select a style and click the up button or down button. That order determines the sequence used for formatting.

Click OK.

### Loop through nested styles

A sequence of two or more nested styles can repeat through an entire paragraph. A basic example is alternating red and green words in a paragraph; in nested line styles, red and green lines could alternate instead. Adding or deleting words does not break the repeating pattern.

Create the needed character styles first. Then edit or create a paragraph style, or put the insertion point in the paragraph to format. In Drop Caps And Nested Styles, add at least two entries with New Nested Style or New Nested Line Style, then choose settings for each style. Next use one of these methods:

For nested styles, add another New Nested Style, choose [Repeat] in the character style area, and specify the number of nested styles to repeat.

For nested line styles, add another New Nested Line Style, choose [Repeat] in the character style area, and specify the number of lines to repeat.

Sometimes the first style, or several first styles, should be excluded from the loop. For example, an events calendar paragraph could start with “This Week’s Events,” then continue with days of the week and their events. One setup uses five nested styles: “This Week’s Events,” separate styles for the day, event, and event time, and a final style whose [Repeat] value is 3 so the first nested style is left out of the loop.

Place [Repeat] at the end of the list. Nested styles placed below [Repeat] are ignored.

Looping through nested styles

Looping through nested styles

Click OK.

### Nested style character style options

To control where a nested character style stops, select one of these options:

Note

When the ending character should not be included in the nested style formatting, choose Up To rather than Through while defining the nested style.

Sentences

Periods, question marks, and exclamation points mark sentence endings. If a quotation mark comes after that punctuation, it is included in the sentence.

Words

A word ends at any space or white space character.

Alphabet

For Arabic numerals, a space defines the endpoint. For double-byte characters, the behavior is the same as for letters.

Characters

Includes any character except zero-width markers, such as anchors, index markers, XML tags, and similar markers.

Note

When Characters is selected, you can also type a character, such as a colon or period, to stop the nested style. If you type several characters, any one of them can end the style. For example, if run-in headings finish with a hyphen, colon, or question mark, type -:? so the nested style stops when any of those characters appears.

Letters

Includes any character that is not punctuation, white space, a digit, or a symbol.

Digits

Includes Arabic numerals 0–9.

End Nested Style Character

Keeps the nested style active until the inserted End Nested Style character is reached, either up to it or through it. To insert it, choose Type > Insert Special Character > Other > End Nested Style Here.

Tab Characters

Keeps the nested style active up to or through the tab character itself, not the tab setting.

Forced Line Break

Keeps the nested style active until the forced line break is reached, including it when Through is used. Choose Type > Insert Break Character > Forced Line Break.

Indent To Here Character

Keeps the nested style active until the Indent To Here character is reached, including it when Through is used. Choose Type > Insert Special Character > Other > Indent To Here.

Em Spaces, En Spaces, or Non-breaking Spaces

Keeps the nested style active until the space character is reached, including it when Through is used. Choose Type > Insert White Space > [space character].

Anchored Object Marker

Keeps the nested style active up to or through the inline graphic marker, the marker shown where an inline graphic is inserted.

Auto Page Number / Section Marker

Keeps the nested style active up to or through the page number marker or the section name marker.

### End a nested style

Usually, a nested style stops when the defined condition is reached, such as after three words or at a period. The End Nested Style Here character can stop the nested style earlier than that condition.

Place the insertion point where the nested style should stop. Choose Type > Insert Special Character > Other > End Nested Style Here.

This character stops the nested style at that location, no matter how the nested style is defined.

### Remove the formatting of a nested style

- In Drop Caps And Nested Styles, or in the Drop Caps And Nested Styles section of Paragraph Style Options, select the nested style and click Delete.
- Apply another paragraph style.

### Create GREP styles

GREP is an advanced search method based on patterns. GREP styles apply a character style to text that matches the GREP expression you specify. For example, to format every phone number in text, create a GREP style, choose the character style, and enter the GREP expression. Paragraph text matching that expression receives the character style.

Using GREP style to format phone numbers with a character style

A. Character style B. GREP expression

Using GREP style to format phone numbers with a character style

For a video tutorial on creating GREP styles, see www.adobe.com/go/lrvid4028_id.

David Blatner gives real-world examples in 5 Cool Things You Can Do with GREP Styles. Cari Jansen has a four-part series that starts with Introducing GREP Styles.

Use one of these methods:

For individual paragraphs, select the text and choose Grep Styles from the Paragraph or Control panel menu.

For individual paragraphs, select the text, then use Grep Styles from the Paragraph panel menu.

To use GREP styles within a paragraph style, create or edit a paragraph style, then click the GREP Styling tab on the left side of Paragraph Style Options.

Click New GREP Style.

Click to the right of Apply Style, then specify a character style. If no character style exists for this purpose yet, choose New Character Style and define the formatting you want.

Click to the right of To Text, then build a GREP expression using one of these approaches:

Type the search expression yourself. (See Metacharacters for searching.)

To help build the GREP expression, click the Special Characters For Search icon to the right of To Text, then choose options from Locations, Repeat, Match, Modifiers, and Posix submenus.

Confirm with OK.

Related links:

### More like this

- Use drop caps
- Search using GREP expressions
- GREP styles video

## Text composition — Compose text

Text appearance on the page is shaped by a complex set of processes known as composition. Based on the selected word spacing, letterspacing, glyph scaling, and hyphenation settings, InCopy composes type to fit the specified parameters as well as possible.

InCopy includes Adobe Paragraph Composer as its default composition method, alongside Adobe Single-line Composer. The Control panel menu offers both. The composer can also be selected from the Paragraph panel menu or the Justification dialog box.

For typesetting, InCopy supports Adobe Japanese Single-line Composer and Adobe Japanese Paragraph Composer, plus Adobe Paragraph Composer and Adobe Single-line Composer. Each Composer reviews possible breaks for Japanese and Roman text, then selects the breaks that best fit the hyphenation and justification settings for the paragraph. Adobe Japanese Paragraph Composer is the default selection. For more information about these options, see InCopy Help.

For composition-problem guidance, see the InDesign Magazine article Mind the Gaps.

Under World Ready Composer, Harfbuzz is the default shaping engine, improving shaping and rendering glyphs correctly for Indic and MENA languages.

### Text composition — Composition methods

InCopy provides Adobe Paragraph Composer as the default composition method and also offers Adobe Single-line Composer. Both methods examine possible breaks and select the ones that best match the hyphenation and justification options set for the paragraph.

The Adobe Paragraph Composer

Considers breakpoints across the whole paragraph, allowing earlier lines to be optimized so especially poor breaks later in the paragraph can be avoided. Paragraph composition creates more even spacing and fewer hyphens.

The Paragraph Composer works by finding possible breakpoints, evaluating them, and giving each a weighted penalty based on factors such as letterspacing evenness, word spacing, and hyphenation.

Note

Use the Hyphenation dialog box to set the balance between improved spacing and fewer hyphens. (See Hyphenate text.)

The Adobe Single-line Composer

Uses the traditional method of composing text line by line. This option is useful when late-stage edits should not cause broad composition changes.

### Text composition — Choose a composition method for a paragraph

Use either route:

Open the Paragraph panel menu, then select Adobe Paragraph Composer (the default) or Adobe Single-line Composer.

Open the Paragraph panel menu or the Control panel menu, select Justification, and choose the needed entry from the Composer menu.

Note

Other companies may provide additional composition engine plug-ins, with interfaces for changing an engine's parameters.

### Text composition — Set composition preferences

Open Edit > Preferences > Composition (Windows) or InCopy  > Preferences > Composition (Mac OS).

For screen highlighting of composition issues, enable Keep Violations And H&J Violations (hyphenation and justification).

When text next to an object wrap should remain justified, enable Justify Text Next To An Object.

In Mojikumi Compatibility Modes, decide whether to enable Use New Vertical Scaling or Use CID-Based Mojikumi.

Click OK.

### Text composition — Hyphenate text

Hyphenation and justification choices shape line spacing across the page and influence how polished the type looks. The hyphenation controls decide whether a word may break, and if so, which break points are permitted.

Justification depends on the selected alignment, the word spacing and letterspacing values, and any glyph scaling in use. Single words in narrow columns can also be justified when the surrounding paragraph uses full justification.

Eda Warren has an article on avoiding composition issues called Mind the Gaps.

### Text composition — Adjust hyphenation manually

Words can be hyphenated manually, automatically, or with both approaches together. For manual control, the safer method is a discretionary hyphen: it stays hidden unless the word has to break at the end of a line. Putting one at the start of a word blocks that word from breaking elsewhere.

With the Type tool  , place the insertion point where the hyphen should go. Use one of these methods:

Use Type > Insert Special Character > Hyphens And Dashes > Discretionary Hyphen.

Keyboard shortcut: Ctrl+Shift+- (Windows) or Command+Shift+- (Mac OS).

Note

A discretionary hyphen inside a word only marks an allowed break location; it does not force the word to hyphenate. Other hyphenation and composition settings still determine whether a break occurs, but if the word does break, it can break only at the discretionary hyphen.

### Text composition — Adjust hyphenation automatically

Hyphenation relies on word lists, which may live in a separate user dictionary file on the computer or inside the document. For consistent results, specify the list to use when a document will go to a service provider or be shared in a workgroup.

For a paragraph, toggle automatic hyphenation in the Paragraph panel or Control panel by selecting or deselecting Hyphenation. The same setting can be part of a paragraph style.

Automatic hyphenation settings let you trade off better spacing against fewer hyphens. They can also stop capitalized words, and the final word of a paragraph, from being hyphenated.

### Text composition — Set automatic hyphenation options for a paragraph

Place the cursor in a paragraph, or select the paragraph range to change. From the Paragraph panel menu, choose Hyphenation. Enable the Hyphenate option. Change any required fields, then confirm with OK:

Words With At Least \_ Letters

Sets the smallest character count a word must have before it may be hyphenated.

After First _ Letters / Before Last _ Letters

Sets how many characters must remain before the first possible break and after the last possible break in a word. For example, with 3 in these fields, aromatic becomes aro‑ matic rather than ar‑ omatic or aromat‑ ic.

Hyphen Limit \_ Hyphens

Limits how many hyphens may appear on consecutive lines. Zero leaves the number unrestricted.

Hyphenation Zone

Defines how much blank space may remain at the end of an unjustified line before hyphenation starts. This setting matters only for nonjustified text composed with Single-line Composer.

Better Spacing / Fewer Hyphens

Move the slider at the bottom of the dialog box to shift the balance between these two outcomes.

Hyphenate Capitalized Words

Clear this option when capitalized words should not be hyphenated.

Hyphenate Last Word

Clear this option to keep final words in paragraphs from being hyphenated.

Hyphenate Across Column

Clear this option when words must not hyphenate across a column, frame, or page.

### Text composition — Prevent unwanted word breaks

Nonbreaking hyphens keep selected words from splitting, such as proper names or words that would look awkward as fragments. Nonbreaking spaces keep groups of words together, including initials with a surname, such as P. T. Barnum.

### Text composition — Prevent text from breaking

Select the text that must stay on one line. From the Character panel menu or the Control panel menu, choose No Break.

Note

A discretionary hyphen placed at the beginning of a word is another way to stop that word from breaking. Keyboard shortcut: Ctrl+Shift+- (Windows) or Command+Shift+- (Mac OS).

### Text composition — Create a nonbreaking hyphen

With the Type tool  , put the insertion point where the hyphen belongs. Choose Type > Insert Special Character > Hyphens And Dashes > Nonbreaking Hyphen.

### Text composition — Create a nonbreaking space

With the Type tool  , set the insertion point where the space should be inserted. Use Type > Insert White Space> Nonbreaking Space (or any other white space character).

Nonbreaking Space changes width according to point size, justification, and word-space settings. Nonbreaking Space (Fixed Width) keeps a constant width no matter where it is used.

### Text composition — Change Justification settings

Use the Justification panel when you need exact control over word spacing, letterspacing, and glyph scaling. Spacing adjustments are especially helpful for justified type, but they can be applied to unjustified type as well.

Note

For CJK text, justification settings ignore word spacing, character spacing, and glyph scaling. Use the Mojikumi dialog box to set CJK character spacing.

### Text composition — Adjust word and letterspacing in justified text

Put the cursor in the paragraph to edit, or select a type object or frame when every paragraph inside it should change. From the Paragraph panel menu, choose Justification. Enter Word Spacing, Letter Spacing, and Glyph Spacing values. Minimum and Maximum set the allowed spacing range for justified paragraphs only; Desired applies to both justified and unjustified paragraphs:

Word Spacing

Spacebar-created gaps between words. Word Spacing values can range from 0% to 1000%; at 100%, words receive no added space.

Letter Spacing

The measure between letters, including kerning or tracking. Letter Spacing values can range from ‑100% to 500%: at 0%, no extra letter space is inserted; at 100%, a full space width is inserted between letters.

Glyph Scaling

Controls how wide characters appear; any font character is a glyph. Accepted Glyph Scaling values run from 50% to 200%.

Note

Spacing options apply to the whole paragraph. For spacing changes on only a few characters, use the Tracking option.

Use Single Word Justification to choose the treatment for paragraphs made of one word.

In narrow columns, a lone word can end up on its own line. If full justification is applied, that single word may stretch too far, so instead you can center it or align it with the left or right margin.

### Text composition — Set glyph scaling in justified text

Place an insertion point in a paragraph, or select the paragraphs that need the adjustment. From the Paragraph panel menu, choose Justification. Fill in Glyph Scaling Minimum, Desired, and Maximum, then confirm with OK. Before (top) and after (bottom) glyph scaling in justified text

Before (top) and after (bottom) glyph scaling in justified text

Note

Glyph scaling can make justification more even, but values more than 3% away from the 100% default may distort letter shapes. Unless the goal is a special effect, keep the adjustment subtle, such as 97–100–103.

### Text composition — Use a flush space with justified text

When a fully justified paragraph ends with a decorative-font end-of-story character, a flush space can insert variable room between that character and the final word. In nonjustified text, it behaves like ordinary word spacing; in justified text, it stretches to take up all extra space on the final line. This can noticeably change how Adobe Paragraph Composer formats the whole paragraph.

Before and after adding a flush space character

Before and after adding a flush space character

With the Type tool  , place the insertion point immediately before the end-of-story character. Use Type > Insert White Space > Flush Space.

Note

You will not see the flush space effect until the paragraph uses Justify All Lines.

### Text composition — Highlight lines that are too loose or tight

Line composition depends on more than word spacing and letterspacing; hyphenation preferences are part of the calculation too, so InDesign may not always be able to honor the exact spacing values you set. Yellow highlighting can show composition trouble in text lines, and the darkest of the three shades marks the most severe issues.

Open Edit > Preferences > Composition (Windows) or InCopy  > Preferences > Composition (Mac OS). Enable H&J Violations, then confirm with OK.

### More like this

- Change CJK composition preferences
- Hyphenation and spelling dictionaries
