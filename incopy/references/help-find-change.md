# Find Change (part 1)

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Tabs in the Find/Change dialog box define the kind of content to locate and replace.

Find/Change dialog box

A. Find/Change tabs B. Find a tab character C. Replace with an em dash D. Search options E. Metacharacters menu

Find/Change dialog box Find/Change dialog box

A. Find/Change tabs B. Find a tab character C. Replace with an em dash D. Search options E. Metacharacters menu

Find/Change dialog box

Text

Find and change particular characters, words, word groups, or text with specified formatting. Symbols, markers, white-space characters, and other special characters can also be searched and replaced. Wildcards expand the possible matches.

GREP

Run pattern-driven searches for text and formatting, then replace the matches.

Glyph

Locate and replace glyphs by Unicode or GID/CID values; this is especially useful for Asian-language glyph searches.

Object

Find object and frame formatting attributes or effects, then replace them. For example, objects with a 4-pt stroke can be found and changed to use a drop shadow.

Transliterate

Convert Asian-language text from one character type to another. For example, half-width katakana can be found and replaced with full-width katakana in Japanese text.

A video tutorial covering Find/Change workflows for text, objects, and expressions is available at www.adobe.com/go/vid0080.

## Find/Change — Find and change text

For document font listing, font searches, or font replacement, the Find Font command may be more appropriate than Find/Change.

To search part of a story or a text range, select the text or put the insertion point inside the story. To include multiple documents, open them first. Choose Edit > Find/Change, then click the Text tab. Use the Search menu to set the search scope, and select icons for items such as locked layers, parent pages, and footnotes. In the Find What box, define the target:

- Enter or paste the text to find.
- For tabs, spaces, or other special characters in a search or replacement, use the pop‑up menu to the right of the Find What box and choose a representative character (metacharacter). Wildcard options such as Any Digit or Any Character are also available.

Metacharacters can locate special characters, including a tab.

Metacharacters can locate special characters, including a tab.

Use a predefined query when finding and replacing text. (See Find/change items using queries.)

In the Change To box, enter or paste replacement text. The pop‑up menu to the right of the Change To box can also supply a representative character. Click Find. To keep moving through matches, click Find Next, Change (for the current match), Change All (which displays the total number changed), or Change/Find (which changes the current match and finds the next one). Click Done.

Unexpected search results often come from formatting left over from an earlier search; clear it if needed. You may also need a broader search scope. For instance, the current search may be limited to a selection or story rather than the full document, or the target text may be on an excluded item such as a locked layer, footnote, or hidden conditional text.

To reverse a replacement decision, choose Edit > Undo Replace Text (or Undo Replace All Text).

For the next match of the last searched phrase without reopening the Find/Change dialog box, choose Edit > Find Next. Previous searches also remain available in the Find/Change dialog box; choose one from the menu to the right of the option.

## Find/Change — Find and change formatted text

Choose Edit > Find/Change. If Find Format and Change Format are hidden, expose them with More Options. Select the Find Format box, or use the Specify Attributes To Find icon  beside the Find Format Settings section. In the Find Format Settings dialog box, choose a formatting category on the left, set the attributes, and click OK.

Certain OpenType formatting choices appear in both OpenType Options and Basic Character Formats (Position menu). For details about OpenType and other formatting attributes, search the related topic in InCopy Help.

Note

When searching for formatting only, or replacing with formatting only, leave Find What or Change To empty.

To apply formatting to found text, select the Change Format box, or use the Specify Attributes To Change icon  in the Change Format Settings section. Choose a formatting category, set the attributes, and click OK. Then use Find and Change to format the text.

When formatting is part of the criteria, info icons appear above the Find What or Change To boxes. Their presence shows that attributes are set and the find or change operation is limited by those attributes.

Note

To remove every formatting attribute quickly from the Find Format Settings or Change Format Settings sections, click Clear.

## Find/Change — Common Find/Change techniques

Wildcard searches

Use wildcards such as Any Digit or Any White Space to make the search broader. For example, entering “s^?ng” in the Find What box finds words that start with “s” and end with “ng,” including “sing,” “sang,” “song,” and “sung.” Wildcard characters can be typed directly, or you can choose one from the Wildcards submenu in the pop‑up menu beside the Find What text field.

Clipboard for metacharacter searches

When looking for metacharacters such as em dashes or bullet characters, selecting the text first and pasting it into Find What can avoid manual metacharacter entry. InCopy changes pasted special characters into the matching metacharacter automatically.

Replace with clipboard contents

Search matches can be replaced by formatted or unformatted clipboard content. A copied graphic can be used as replacement text as well. After copying the item, open the Find/Change dialog box and use the Other submenu from the Change To box's pop‑up menu.

Find and remove unwanted text

For removal, put the unwanted content in Find What and leave Change To empty; make sure the Change To box has no formatting set.

XML tagging

XML tags can be applied to text returned by a search.

## Find/Change — Notes on finding and changing text in InCopy

With Track Changes enabled during text changes or replacements, every insertion and deletion is tracked.

Find and change operations behave much the same in Galley, Story, and Layout views for linked and stand-alone stories. In a linked story, available character and paragraph styles are limited to those defined in InDesign. Galley and Story view do not display every typographical effect you apply; Layout view is the only place where all those effects are visible.

Galley view and Story view exclude collapsed stories from Find/Change results. Choosing Change All still changes collapsed stories. For best results, use Find/Change in Layout View.

Whether notes are included is controlled by Include Note Content in Find/Change Operations in Notes preferences. When that option is selected, Find/Change can search notes in Galley and Story views, but not in Layout view. Closed notes and footnotes are skipped.

## Find/Change — Search options for finding and changing text

Search menu

Provides choices that set the search range.

Documents

Search the current document, or choose All Documents to search every open document.

Story

Search the selected frame's full text, including threaded-frame text and overset text. Select Stories when all stories in selected frames should be searched. This choice is available only when a text frame is selected or an insertion point is active.

To End Of Story

Begin at the insertion point and search to the story end. This choice is shown only when an insertion point is active.

Selection

Search just the selected text. This choice is shown only when text is selected.

Include Locked Layers

Find text on layers locked through the Layer Options dialog box. Replacement is not allowed on locked layers.

Include Locked Stories

Find text in stories checked out as part of an InCopy workflow. Replacement is not allowed in locked stories.

Include Hidden Layers

Find text on layers hidden through the Layer Options dialog box. When a match is on a hidden layer, highlighting shows where the text is located even though the text itself is not visible. Text on hidden layers can be replaced.

Text in a hidden condition is never included in searches.

Include parent Pages

Find text on parent pages.

Include Footnotes

Find footnote text.

Case Sensitive

Find only words or text whose capitalization exactly matches the Find What box. For example, searching for PrePress does not match Prepress, prepress, or PREPRESS.

Whole Word

(Roman text only) Ignore the search characters when they appear inside a Roman word. For example, a whole-word search for any ignores many in InDesign.

Whole Word

Ignore the search characters when they appear as part of another word. For example, a whole-word search for any ignores many in InDesign.

Kana Sensitive

Tell the search to distinguish hiragana from katakana. For example, a hiragana search for Tango does not match Tango written in katakana in InDesign.

Full-Width/Half-Width Sensitive

Tell the search to distinguish half-width and full-width characters. For example, searching for ka in half-width katakana does not match ka in full-width katakana in InDesign.

## Find/Change — Search using GREP expressions

The GREP tab in Find/Change lets you build GREP expressions for locating alphanumeric strings and patterns across long documents or across multiple open documents. GREP metacharacters may be entered by hand or chosen from the Special Characters For Search list. By default, GREP searches distinguish case.

See InDesign GREP for GREP resources from InDesign Secrets.

Open Edit > Find/Change and switch to the GREP tab.

At the bottom of the dialog box, set the search scope from the Search menu, then select icons for items such as locked layers, parent pages, and footnotes.

In the Find What box, build the GREP expression by either method:

Type the search expression yourself. (See Metacharacters for searching.)

Use the Special Characters For Search icon beside Find What, then pick items from the Locations, Repeat, Match, Modifiers, and Posix submenus as aids for constructing the expression.

In the Change To box, enter or paste the replacement text.

Click Find.

To keep searching, click Find Next, Change (for the current match), Change All (which reports the total changed), or Change/Find (which changes the current match and searches for the next one.

Note

GREP Styles can apply a character style to text that matches a GREP expression. The GREP Styles dialog box is also a useful test area for a GREP expression. Add the examples to locate into a paragraph, then set a character style and GREP expression in the GREP Styles dialog box. With Preview enabled, revise the expression until it matches every example correctly.

## Find/Change — Tips for constructing GREP searches

Use these guidelines when building GREP expressions.

Many GREP-tab searches resemble Text-tab searches, but the required codes can differ by tab. Usually, Text tab metacharacters start with ^, such as ^t for a tab, while GREP tab metacharacters start with \, such as \t for a tab. Some metacharacters break that pattern. For instance, paragraph return is ^p on the Text tab and \r on the GREP tab. For the Text and GREP metacharacter lists, see Metacharacters for searching.

When a character has special meaning in GREP, type a backslash (\) before it so the following character is read literally. For example, a period ( . ) matches any character in a GREP search; to find an actual period, enter “\.”

If the GREP search will be reused often or shared, save it as a query. (See Find/change items using queries.)

Parentheses split a search into subexpressions. For example, the c(a|o)t string finds “cat” or “cot.” Parentheses are especially useful for marking groupings. Searching “the (cat) and the (dog)” labels “cat” as Found Text 1 and “dog” as Found Text 2. Found Text expressions, such as $1 for Found Text 1, can change only part of the matched text.

## Find/Change — GREP search examples

The examples below show ways to use GREP expressions.

Example 1: Finding text within quotation marks

Imagine searching for a word inside quotation marks, such as “Spain,” then removing the quotation marks and applying a style so the result is Spain instead of “Spain.” The expression (\")(\\w+)(\") has three parenthesized groupings. The first and third groupings find quotation marks, and the second grouping finds one or more word characters.

Found Text expressions can refer back to those groupings. For example, $0 means the entire match, while $2 means only the second grouping. If $2 is entered in Change To and a character style is set in Change Format, the search can find a quoted word and replace it with the same word styled. Since only $2 is used, $1 and $3 are dropped. (Using $0 or $1$2$3 in Change To would style the quotation marks too.)

GREP example

A. Finds all word characters enclosed in quotation marks B. The character style is applied to the second grouping (the word) while the first and third groupings (open and close quotes) are removed C. Character style specified

GREP example

This example finds only single words inside quotation marks. To find parenthesized phrases, add wildcard expressions such as (\\s*.*\\w*\\d*), which searches for spaces, characters, word characters, and digits.

Example 2: Phone numbers

InDesign supplies search presets in the Queries menu. One option is Phone Number Conversion, which uses this query:

\\(?(\\d\\d\\d)\\)?[-. ]?(\\d\\d\\d)[-. ]?(\\d\\d\\d\\d)

United States phone numbers may be written in several formats, including 206-555-3982, (206) 555-3982, 206.555.3982, and 206 555 3982. The query matches those variations. The first three digits (\\d\\d\\d) can appear with or without parentheses, so a question mark follows the parentheses: \\(? and \\)?. The backslash \\ means the real parenthesis character is being searched for and is not part of a subexpression. Brackets [ ] find any character listed inside them; in this case, [-. ] allows a hyphen, a period, or a space. Because a question mark follows the brackets, that bracketed item is optional. The digits are also placed in parentheses, creating groupings that can be referenced in Change To.

Grouping references in Change To can be edited for the needed output. Examples:

206.555.3982 = $1.$2.$3

206-555-3982 = $1-$2-$3

(206) 555-3982 = ($1) $2-$3

206 555 3982 = $1 $2 $3

Additional GREP examples

Use the examples in this table to explore more GREP searches.

Expression

Search string

Sample text

Matches (in bold)

Class of characters

[ ]

[abc]

Returns one matching character from the set [abc].

Maria cuenta bien.

Mariacuentabien.

Beginning of paragraph

^

^~\_.+

This checks a paragraph start (^) for an em dash (~\_), then any character ( . ) repeated at least once (+).

“We saw—or at least we think we saw—a purple cow.”

—Konrad Yoes

“We saw—or at least we think we saw—a purple cow.”

—Konrad Yoes

Negative lookahead

(?!pattern)

InDesign (?!CS.\*?)

A negative lookahead succeeds only when the specified pattern does not come after the search string.

InDesign, InDesign 2.0, InDesign CS, and InDesign CS2

InDesign, InDesign 2.0, InDesign CS, and InDesign CS2

Positive lookahead

(?=pattern)

InDesign (?=CS.\*?)

A positive lookahead succeeds only when the specified pattern comes after the search string.

For lookbehind equivalents, use (?<!pattern) for negative lookbehinds and (?<=pattern) for positive lookbehinds.

InDesign, InDesign 2.0, InDesign CS, and InDesign CS2

InDesign, InDesign 2.0, InDesign CS, and InDesign CS2

Groupings

( )

(quick) (brown) (fox)

The quick brown fox jumps up and down.

The quick brown fox jumps up and down.

All found text = quick brown fox; Found Text 1= quick; Found Text 2 = brown; Found Text 3= fox

Non-marking parentheses

(?:expression)

(quick) ($:brown) (fox)

The quick brown fox jumps up and down.

The quick brown fox jumps up and down.

All found text = quick brown fox; Found Text 1= quick; Found Text 2 = fox

Case-insensitive on

(?i)

(?i)apple

You can also use (?i:apple)

Apple apple APPLE

AppleappleAPPLE

Case-insensitive off

(?-i)

(?-i)apple

Apple apple APPLE

Apple apple APPLE

Multiline on

(?m)

(?m)^\\w+

Here, the expression searches for one or more (+) word characters (\\w) at the start of a line (^). With (?m), each line inside the found text can be handled as a separate line.

With (?m)^\\w, matching begins at each paragraph; with (?-m)^\\w, only the story beginning is matched.

One Two Three Four Five Six Seven Eight

One Two ThreeFour Five SixSeven Eight

Multiline off

(?-m)

(?-m)^\\w+

One Two Three Four Five Six Seven Eight

One Two Three Four Five Six Seven Eight

Single-line on

(?s)

(?s)c.a

This searches for any character ( . ) between c and a. The (?s) expression matches any character even when it occurs on the next line.

(.) matches any character except a paragraph return. (?s)(.) also includes paragraph returns in what it can match.

abc abc abc abc

abc abcabc abc

Single-line off

(?-s)c.a

abc abc abc abc

abc abc abc abc

Repeat number of times

{ }

b{3} matches exactly 3 times

b(3,} matches at least 3 times

b{3,}? matches at least 3 times (shortest match)

b{2,3} matches at least 2 times and not more than 3

b{2,3}? matches at least 2 times and not more than 3 (shortest match)

abbc abbbc abbbbc abbbbbc

abbc abbbc abbbbc abbbbbc

abbc abbbc abbbbc abbbbbc

abbc abbbc abbbbc abbbbbc

abbc abbbc abbbbc abbbbbc

abbc abbbc abbbbc abbbbbc

| --- | --- | --- | --- |

## Find/Change — Metacharacters for searching

In InDesign, a metacharacter stands in for a character or symbol. In the Find/Change dialog box, Text-section metacharacters start with a caret (^), while GREP-section entries use a tilde (~) or a backslash (\). Enter these forms on either the Text tab or the GREP tab of the Find/Change dialog box.

Note

For repeated punctuation cleanup, save the search string as a query so it can be reused.

Character:

Text tab metacharacter:

GREP tab metacharacter:

Tab Character

^t

\t

End of Paragraph

^p

\r

Forced Line Break

^n

\n

Any Page Number

^#

~#

Current Page Number

^N

~N

Next Page Number

^X

~X

Previous Page Number

^V

~V

- Any Variable

^v

~v

Section Marker

^x

~x

- Anchored Object Marker

^a

~a

- Footnote Reference Marker

^F

~F

- Index Marker

^I

~I

Bullet Character

^8

~8

Japanese Bullet

^5

~5

Caret Character

^^

\^

Backslash Character

\

\\

Copyright Symbol

^2

~2

Ellipsis

^e

~e

Tilde

~

\~

Paragraph Symbol

^7

~7

Registered Trademark Symbol

^r

~r

Section Symbol

^6

~6

Trademark Symbol

^d

~d

Open Parenthesis Character

(

\(

Close Parenthesis Character

)

\)

Open Brace Character

{

\{

Close Brace Character

}

\}

Open Bracket Character

[

\[

Close Bracket Character

]

\]

Em Dash

^\_

~\_

En Dash

^=

~=

Discretionary Hyphen

^-

~-

Nonbreaking Hyphen

^~

~~

Ideographic Space

^(

~(

Em Space

^m

~m

En Space

^>

~>

Third Space

^3

~3

Quarter Space

^4

~4

Sixth Space

^%

~%

Flush Space

^f

~f

Hair Space

^|

~|

Nonbreaking Space

^s

~s

Nonbreaking Space (fixed width)

^S

~S

Thin Space

^<

~<

Figure Space

^/

~/

Punctuation Space

^.

~.

^ Clipboard Contents, Formatted

^c

~c

^ Clipboard Contents, Unformatted

^C

~C

Any Double Quotation Mark

"

"

Any Single Quotation Mark

'

'

Straight Double Quotation Mark

^"

~"

Double Left Quotation Mark

^{

~{

Double Right Quotation Mark

^}

~}

Straight Single Quotation Mark

^'

~'

Single Left Quotation Mark

^[

~[

Single Right Quotation Mark

^]

~]

Standard carriage return

^b

~b

Column Break

^M

~M

Frame Break

^R

~R

Page Break

^P

~P

Odd Page Break

^L

~L

Even Page Break

^E

~E

Discretionary Line Break

^k

~k

Right Indent Tab

^y

~y

Indent to Here

^i

~i

End Nested Style Here

^h

~h

Nonjoiner

^j

~j

- Running header (paragraph style) variable

^Y

~Y

- Running header (character style) variable

^Z

~Z

- Custom text variable

^u

~u

- Last page number variable

^T

~T

- Chapter number variable

^H

~H

- Creation date variable

^S

~S

- Modification date variable

^o

~o

- Output date variable

^D

~D

- File name variable

^l (lowercase L)

~l (lowercase L)

- Any Digit

^9

\d

- Any character that is not a digit

\D

- Any Letter

^$

[\l\u]

- Any Character

^?

. (places a period in Change To)

- White Space (any space or tab)

^w

\s (adds a space in Change To)

- Any character that is not a white space

\S

- Any word character

\w

- Any character that is not a word character

\W

- Any uppercase letter

\u

- Any character that is not an uppercase letter

\U

- Any lowercase letter

\l

- Any character that is not a lowercase letter

\L

^ All Found Text

$0

Found Text 1-9

$1 (corresponds to the matched grouping number; for example, $3 inserts the third parenthesized group)

- Kanji

^K

~K

- Beginning of Word

<

- End of Word

>

- Word Boundary

\b

- Opposite of Word Boundary

\B

- Beginning of Paragraph

^

- End of Paragraph [location]

$

- Zero or One Time

?

- Zero or More Times

-

- One or More Times

*

- Zero or One Time (Shortest Match)

??

- Zero or More Times (Shortest Match)

\*?

- One or More Times (Shortest Match)

+?

- Marking Subexpression

( )

- Non-marking Subexpression

(?: )

- Character Set

[ ]

- Or

|

- Positive Lookbehind

(?<= )

- Negative Lookbehind

(?<! )

- Positive Lookahead

(?= )

- Negative Lookahead

(?! )

- Case-insensitive On

(?i)

- Case-insensitive Off

(?-i)

- Multiline On

(?m)

- Multiline Off

(?-m)

- Single-line On

(?s)

- Single-line Off

(?-s)

- Any alphanumeric character

[[:alnum:]]

- Any alphabetic character

[[:alpha:]]

- Any blank character, either space or tab

[[:blank:]]

- Any control character

[[:control:]]

- Any graphical character

[[:graph:]]

- Any printable character

[[:print:]]

- Any punctuation character

[[:punct:]]

- Any character whose code is greater than 255 (applies only to the wide character traits classes)

[[:unicode:]]

- Any hexadecimal digit character 0-9, a-f, and A-F

[[:xdigit:]]

- Any character of a certain glyph set, such as a, à, á, â, ã, ä, å, A, À, Á, Â, Ã, Ä and Å

[[=a=]]

| --- | --- | --- |

- Available only in the Find What box; do not use it in Change To.

^ Available for Change To, not for the Find What box.

## Find/Change — Convert double-byte character type

Use Find/Change when Asian-language text needs its character type converted.

Choose Edit > Find/Change, then open the Transliterate tab. At the bottom of the dialog box, choose the range from the Search menu, and use the icons to decide whether the search includes items such as locked layers, parent pages, and footnotes. In Find What, set the character type to locate. In Change To, set the character type to use as the replacement. Some Change To choices can be unavailable based on the Find What character type. For example, choosing full-width hiragana in Find What prevents full-width roman symbols from being chosen in Change To. Select Find Next, then select Change.
