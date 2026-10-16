# GREP quoted word formatting

Open when applying grep quoted word formatting in Find/Change.

Imagine searching for a word inside quotation marks, such as `"Spain"`, then removing the quotation marks and applying a style so the result is `Spain` instead of `"Spain"`. The expression `(\")(\w+)(\")` has three parenthesized groupings. The first and third groupings find quotation marks, and the second grouping finds one or more word characters.

Found Text expressions can refer back to those groupings. For example, $0 means the entire match, while $2 means only the second grouping. If $2 is entered in Change To and a character style is set in Change Format, the search can find a quoted word and replace it with the same word styled. Since only $2 is used, $1 and $3 are dropped. (Using $0 or $1$2$3 in Change To would style the quotation marks too.)

GREP example

A. Finds all word characters enclosed in quotation marks B. The character style is applied to the second grouping (the word) while the first and third groupings (open and close quotes) are removed C. Character style specified

GREP example

This example finds only single words inside quotation marks. To find parenthesized phrases, add wildcard expressions such as `(\s*.*\w*\d*)`, which searches for spaces, characters, word characters, and digits.

The quoted-word expression uses straight double quotes. Curly quotation marks require matching those literal characters instead. The wildcard expression above is a broad illustration, not a delimiter-safe phrase validator.

Source: [Adobe InCopy Find/Change](https://helpx.adobe.com/uk/incopy/desktop/write-and-edit/add-and-edit-text/find-change.html).
