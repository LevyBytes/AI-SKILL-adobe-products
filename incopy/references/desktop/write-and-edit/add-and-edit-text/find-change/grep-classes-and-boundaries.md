# GREP character classes, captures and boundaries

Open when choosing Find/Change metacharacters for grep character classes, captures and boundaries.

An empty cell means that the source lists no equivalent for that tab. “Find only” entries belong in Find What; “Change only” entries belong in Change To.

| Character or operation | Text tab | GREP tab | Availability |
| --- | --- | --- | --- |
| Any Digit | `^9` | `\d` | Find only |
| Any character that is not a digit |  | `\D` | Find only |
| Any Letter | `^$` | `[\l\u]` | Find only |
| Any Character | `^?` | `. (inserts period in Change To)` | Find only |
| White Space (any space or tab) | `^w` | `\s (Inserts space in Change To)` | Find only |
| Any character that is not a white space |  | `\S` | Find only |
| Any word character |  | `\w` | Find only |
| Any character that is not a word character |  | `\W` | Find only |
| Any uppercase letter |  | `\u` | Find only |
| Any character that is not an uppercase letter |  | `\U` | Find only |
| Any lowercase letter |  | `\l` | Find only |
| Any character that is not a lowercase letter |  | `\L` | Find only |
| All Found Text |  | `$0` | Change only |
| Found Text 1-9 |  | `$1–$9 (insert the corresponding captured group)` | Change only |
| Kanji | `^K` | `~K` | Find only |
| Beginning of Word |  | `\<` | Find only |
| End of Word |  | `\>` | Find only |
| Word Boundary |  | `\b` | Find only |
| Opposite of Word Boundary |  | `\B` | Find only |
| Beginning of Paragraph |  | `^` | Find only |
| End of Paragraph [location] |  | `$` | Find only |
| Any alphanumeric character |  | `[[:alnum:]]` | Find only |
| Any alphabetic character |  | `[[:alpha:]]` | Find only |
| Any blank character, either space or tab |  | `[[:blank:]]` | Find only |
| Any control character |  | `[[:control:]]` | Find only |
| Any graphical character |  | `[[:graph:]]` | Find only |
| Any printable character |  | `[[:print:]]` | Find only |
| Any punctuation character |  | `[[:punct:]]` | Find only |
| Any character whose code is greater than 255 (applies only to the wide character traits classes) |  | `[[:unicode:]]` | Find only |
| Any hexadecimal digit character 0-9, a-f, and A-F |  | `[[:xdigit:]]` | Find only |
| Any character of a certain glyph set, such as a, à, á, â, ã, ä, å, A, À, Á, Â, Ã, Ä and Å |  | `[[=a=]]` | Find only |

Source: [Adobe InCopy Find/Change](https://helpx.adobe.com/uk/incopy/desktop/write-and-edit/add-and-edit-text/find-change.html).
