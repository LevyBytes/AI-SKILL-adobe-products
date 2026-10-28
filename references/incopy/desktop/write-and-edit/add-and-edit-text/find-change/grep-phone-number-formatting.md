# GREP phone number formatting

Open when applying grep phone number formatting in Find/Change.

InDesign supplies search presets in the Queries menu. One option is Phone Number Conversion, which uses this query:

`\(?(\d\d\d)\)?[-. ]?(\d\d\d)[-. ]?(\d\d\d\d)`

United States phone numbers may be written in several formats, including 206-555-3982, (206) 555-3982, 206.555.3982, and 206 555 3982. The query matches those variations. The first three digits `(\d\d\d)` can appear with or without parentheses, so a question mark follows the parentheses: `\(?` and `\)?`. The backslash `\` means the real parenthesis character is being searched for and is not part of a subexpression. Brackets [ ] find any character listed inside them; in this case, `[-. ]` allows a hyphen, a period, or a space. Because a question mark follows the brackets, that bracketed item is optional. The digits are also placed in parentheses, creating groupings that can be referenced in Change To.

Grouping references in Change To can be edited for the needed output. Examples:

206.555.3982 = $1.$2.$3

206-555-3982 = $1-$2-$3

(206) 555-3982 = ($1) $2-$3

206 555 3982 = $1 $2 $3

This preset reformats numbers; it is not a phone-number validator. Its optional opening and closing parentheses are independent, so it can also match unbalanced input.

Source: [Adobe InCopy Find/Change](https://helpx.adobe.com/uk/incopy/desktop/write-and-edit/add-and-edit-text/find-change.html).
