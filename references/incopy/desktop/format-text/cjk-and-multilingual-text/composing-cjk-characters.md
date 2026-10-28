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
