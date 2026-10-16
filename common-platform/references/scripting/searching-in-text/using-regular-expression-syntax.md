# Using regular-expression syntax

For the Find and Replace dialog, the Toolkit accepts this limited Regular Expression syntax:

| RegEx Token | Behaviour |
| --- | --- |
| . | Matches any character |
| ( | Marks the start of a region for capturing a match. |
| ) | Marks the end of a capturing region. |
| < | Matches the start of a word using the editor's current definition of words. |
| > | Matches the end of a word using the editor's current definition of words. |
| \x | Escapes a character x that would otherwise have a special meaning. For example, [ is interpreted as a left bracket, rather than the start of a character set. |
| [...] | A set of characters; for example, [abc] means any of the characters a, b or c. You can also use ranges, for example [a-z] for any lower case character. |
| [^...] | The complement of the characters in a set. For example, [^A-Za-z] means any character except an alphabetic character. |
| ^ | Matches the start of a line (unless used inside a set). |
| $ | Matches the end of a line. |
| \* | Matches 0 or more times. For example, Sa\*m matches Sm, Sam, Saam, Saaam etc. |

In replacement text, captured match regions can be inserted with placeholders \1 through \9, where \1 is the first captured region, \2 is the second, and so forth.

For instance, searching for Fred\([1-9]\)XXX and replacing with Sam\1YYY changes Fred2XXX into Sam2YYY.
