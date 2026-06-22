# Glyphs Special Characters

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Use the Glyphs panel to enter glyphs. At first, the panel shows glyphs from the font at the cursor location. You can switch to another font, inspect a style within that font such as Light, Regular, or Bold, or limit the panel to a font subset, for example punctuation symbols, numbers, or math symbols.

Glyphs panel

A. Search box B. Show subset of glyphs C. Tool tip displaying glyph ID, Unicode, and Name D. Font list E. Font style

Glyphs panel

Hover over a glyph to view its CID/GID value, Unicode value, and name in a tool tip.

## Glyphs and special characters — Open the Glyphs panel

Use Type > Glyphs or Window > Type & Tables > Glyphs.

## Glyphs and special characters — Change the Glyphs panel view

- To cycle the Glyphs panel view, click the cycle widget located to the left of the word "Glyphs" on the panel. Repeated clicks move through these views: collapsed panel; entire panel; panel without recently used glyphs.
- Use the Zoom In or Zoom Out buttons at the lower-right corner of the Glyphs panel.
- Drag the lower-right corner to resize the Glyphs panel.

## Glyphs and special characters — Filter the glyphs that appear

Use one of these choices on the Show list to control which glyphs are displayed in the Glyphs panel:

Choose Entire Font to show every glyph available in the font.

Choose an item under Entire Font to restrict the display to a subset of glyphs. For example, Punctuation shows only punctuation glyphs, while Math Symbols limits the display to mathematical symbols.

## Glyphs and special characters — Sort glyphs in the Glyphs panel

In the Glyphs panel sorting control, select either By CID / GID or By Unicode to set the glyph order.

## Glyphs and special characters — Search for glyphs in the Glyphs panel

Inside the Glyph panel, place the cursor in the Search box and type the query.

Unless you choose a narrower mode, InCopy searches generically across the glyph name, Unicode, or glyph ID.

For tighter results, set a specific search parameter.

Use the drop-down arrow on the left of the Search box, then select the search parameter you need.

## Glyphs and special characters — Insert glyphs and special characters

A glyph is one visible design for a character. In some fonts, for example, capital letter A comes in several forms, including swash and small cap. To find any glyph available in a font, use the Glyphs panel.

OpenType fonts, including Adobe Caslon™ Pro, may provide many glyph choices for standard characters. When you need alternate glyphs in the document, insert them from the Glyphs panel. The same panel can show and insert OpenType attributes, including ornaments, swashes, fractions, and ligatures.

## Glyphs and special characters — Insert special characters

Characters you can insert include em dashes, en dashes, registered trademark symbols, and ellipses.

With the Type tool active, put the insertion point where the character should go. Open Type > Insert Special Character, then choose an option from one of the menu categories.

When special characters you use often are missing from the special-character list, create a glyph set and add them there.

## Glyphs and special characters — Insert a glyph from a specified font

With the Type tool, click where the new character should appear. Open Type > Glyphs to show the Glyphs panel. To switch which characters the Glyphs panel displays, use any of these methods:

If available, pick another font and type style. In the Show menu, select Entire Font. When the current font is OpenType, you can instead choose among the OpenType categories.

From the Show menu, select a custom glyph set. (See Create and edit custom glyph sets.)

Move through the character display until the glyph you need is visible. For an OpenType font, click and hold the glyph box to open a pop-up menu containing alternate glyphs. Double-click the character to insert it; it is placed at the text insertion point.

## Glyphs and special characters — Insert a recently used glyph

InCopy keeps the last 35 unique glyphs you inserted and exposes them in Recently Used on the first row of the Glyphs panel; expand the panel to view all 35 entries in that row.

Use either method:

Double-click a glyph in Recently Used.

On the Show list, choose Recent Glyphs so the main area of the Glyphs panel shows the recently used glyphs, then double-click one.

## Glyphs and special characters — Clear recently used glyphs

- To remove only the selected glyph from Recently Used, right-click (Windows®) or Control-click (Mac OS) that glyph in Recently Used, then choose Delete Glyph From Recently Used.
- To empty the entire recent list, choose Clear All Recently Used.

## Glyphs and special characters — Replace a character with an alternate glyph

When a character has alternate glyphs, a triangle icon appears at the lower-right of its box in the Glyphs panel. To see the alternatives, either click and hold the character in the Glyphs panel for the pop-up menu or show the alternates directly there.

Selecting alternate glyphs in OpenType font

Selecting alternate glyphs in OpenType font Open Type > Glyphs to show the Glyphs panel. From the Show list, select Alternates For Selection. With the Type tool, highlight a character in the document. Replace that selected character by doing one of these:

In the Glyphs panel, double-click the replacement glyph.

On the menu, select a glyph.

## Glyphs and special characters — Display OpenType glyph attributes in the Glyphs panel

For selection work, limit the Glyphs panel display to characters matching selected OpenType attributes. The Show menu in the Glyphs panel contains these choices.

Note

Keep these Show menu choices separate from the Glyphs panel menu options used to apply forms to text selections. (See Apply OpenType font attributes.)

Show menu options in the Glyphs panel

Show menu options in the Glyphs panel In the Glyphs panel, choose an OpenType font from the font list, then pick an option from the Show menu.

Available options depend on the font currently selected. To learn about applying OpenType font attributes, see Apply OpenType font attributes. For details about OpenType fonts, see www.adobe.com/go/opentype.

## Glyphs and special characters — Highlight alternate glyphs in the text

Go to Edit > Preferences > Composition (Windows) or InCopy  > Preferences > Composition (Mac OS). Enable Substituted Glyphs, then click OK. In text, substituted glyphs receive nonprinting yellow highlighting.

## Glyphs and special characters — Create and edit custom glyph sets

A glyph set is a named group of glyphs drawn from one font or several fonts. Keeping frequently needed glyphs in a glyph set means you do not have to search for them before each use. Glyph sets are stored outside individual documents; they live in a separate file with other InDesign preferences and can be shared.

For each added glyph, you can choose whether its font is remembered. This helps when using dingbat characters, for example, because those characters might not exist in other fonts. If the remembered font for a glyph is unavailable, a pink font square is shown in the Glyphs panel and in the Edit Glyph Set dialog box. When an added glyph does not remember a font, a “u” appears beside it, showing that the glyph’s unicode value controls how the glyph looks.

## Glyphs and special characters — Create a custom glyph set

Open Type > Glyphs. Then use one of these commands:

Use the Glyphs panel menu to choose New Glyph Set.

On the Glyphs panel context menu, choose New Glyph Set.

Enter the glyph set name. Pick the insert order used when new glyphs are added to the glyph set, then click OK:

Insert At Front

Places each newly added glyph at the beginning of the set.

Append At End

Places each newly added glyph at the end of the set.

Unicode Order

Sorts all glyphs according to their unicode values.

To put glyphs into the custom set, pick the font that contains the glyph from the bottom area of the Glyphs panel. Click the glyph, then use Add To Glyph Set on the Glyphs panel menu to choose the custom glyph set name.

## Glyphs and special characters — View a custom glyph set

On the Glyphs panel, use either approach:

Choose the glyph set on the Show list.

From the Glyphs panel menu, choose View Glyph Set, followed by the glyph set name.

## Glyphs and special characters — Edit custom glyph sets

From the Glyph panel menu, choose Edit Glyph Set, then select the custom glyph set. Select the glyph to change, use any of the controls below, and click OK:

To attach the glyph to its font, enable Remember Font With Glyph. When a glyph remembers its font, inserting it into selected document text does not use the font already applied to that text. It also bypasses the font currently specified in the Glyph panel. If you turn this option off, the Unicode value from the current font is used.

To inspect more glyphs, switch to another font or style. If no font is defined for the glyph, another font cannot be selected.

To take a glyph out of the custom glyph set, choose Delete From Set.

To adjust how new glyphs are ordered within the set, choose an Insert Order option. Unicode Order is unavailable when Insert At Front or Append At End was chosen at glyph set creation.

## Glyphs and special characters — Delete glyphs from custom glyph sets

With the Glyphs panel open, use the Show menu to choose the Custom Glyph Set. For the target glyph, right-click (Windows) or Control-click (Mac OS), then choose Delete Glyph From Set.

## Glyphs and special characters — Delete custom glyph sets

Use one of these commands:

On the Glyphs panel menu, choose Delete Glyph Set.

On the context menu, choose Delete Glyph Set.

Select the name of a custom glyph set. Click Yes to confirm.

## Glyphs and special characters — Save and load glyph sets

Custom glyph sets live as files in the Glyph Sets folder inside the Presets folder. To share a custom glyph set with someone else or move it to another machine, copy the glyph set files into or out of these locations:

Mac OS

Users\[username]\Library\Preferences\Adobe InCopy \[Version]\[Language]\Glyph Sets

Windows XP

Documents and Settings\[username]\Application Data\Adobe\InCopy \[Version]\[Language]\Glyph Sets

Windows Vista and Windows 7

Users\[username]\AppData\Roaming\Adobe\InCopy \[Version]\[Language]\Glyph Sets

## Glyphs and special characters — Use quotation marks

Different languages can use different quotation mark pairs. When Use Typographer’s Quotes is enabled in the Type section of the Preferences dialog box, those quotation marks are inserted automatically as you type.

## Glyphs and special characters — Specify which quotation marks to use

Open Edit > Preferences > Dictionary (Windows) or InCopy  > Preferences > Dictionary (Mac OS). Pick a language from the Language menu. Use any of these settings, then click OK:

For Double Quotes, choose a quotation-mark pair or type the two characters you want.

For Single Quotes, choose a quotation-mark pair or type the two characters you want.

## Glyphs and special characters — Insert straight quotation marks

Use one of these methods:

Choose Type > Insert Special Character > Quotation Marks > Straight Double Quotation Marks or Straight Single Quotation Mark (Apostrophe).

Disable Use Typographer’s Quotes in the Type section of the Preferences dialog box, then enter the quotation mark or apostrophe.

Use Shift+Ctrl+Alt+' (Windows) or Shift+Command+Option+' (Mac OS) to toggle the Use Typographer’s Quotes preferences option.

Note

A prime mark is commonly used for feet, arcminutes, or minutes of time, and its shape resembles a slanted apostrophe. A double prime mark is commonly used for inches, arcseconds, or seconds of time. Prime and double prime marks are distinct from apostrophes and double quotation marks. Some fonts provide prime and double prime marks; insert them with the Glyphs panel. If the font lacks a prime or double prime mark, use the straight quotation mark and apply italic.

## Glyphs and special characters — Insert white space characters

White-space characters insert blank gaps between adjacent characters. They are useful for layout tasks such as keeping two words together so a line ending cannot split them.

With the Type tool, place the insertion point where the white-space amount should be inserted. Choose Type > Insert White Space, then pick one of the spacing choices, such as Em Space, from the context menu.

Note

When Type > Show Hidden Characters is enabled, symbols representing the white-space characters are shown.

## Glyphs and special characters — White space options

The Type > Insert White Space menu provides these options:

Ideographic Space

This space is built on a full-width character used in Asian languages. Like other full-width characters, it can wrap onto the next line.

Em Space

Current type size determines its width. When text is set to 12 points, the em space also measures 12 points.

En Space

Half of an em space.

Nonbreaking Space

This uses the same flexible width as the spacebar, while blocking a line break at that space character.

Nonbreaking Space (Fixed Width)

Line breaks are blocked at this fixed-width space, and justified text does not stretch or shrink it. InCopy CS2 inserted the same character for Nonbreaking Space.

Third Space

1/3 of an em space.

Quarter Space

1/4 of an em space.

Sixth Space

1/6 of an em space.

Flush Space

For the final line in a fully justified paragraph, this adds variable spacing and can help justify that line. (See Change Justification settings.)

Hair Space

1/24 of an em space.

Thin Space

1/8 of an em space. A thin space can be placed on both sides of an em dash or en dash.

Figure Space

This matches the width of a numeral in the typeface. Use a figure space when aligning numbers in financial tables.

Punctuation Space

This matches the typeface width of an exclamation point, period, or colon.

## Glyphs and special characters — About Adobe SING Glyphlet Manager

Adobe SING Glyphlet Manager installs glyphlets and provides glyphlet search. Adobe Creative Suite 5 does not include this utility.

### More like this

- OpenType fonts
- Create hanging punctuation
