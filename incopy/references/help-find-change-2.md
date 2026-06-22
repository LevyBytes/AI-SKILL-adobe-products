# Find Change (part 2)

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Find/Change — Find and change objects

Find/Change can locate and replace object, graphics-frame, and text-frame attributes or effects. For instance, a document-wide search can standardize drop shadows by changing their color, transparency, and offset distance.

Choose Edit > Find/Change, then select the Object tab. Select the Find Object Format box, or select the Specify Attributes To Find icon. In the Find Object Format Options dialog box, choose a formatting category on the left, set the format attributes, and select OK.

Set each Effects category to the state that matches the search you need. The available states are turned on, turned off, or ignored. For example, Drop Shadow set to On makes drop shadow formatting part of the search; Drop Shadow set to Off finds objects where drop shadow formatting is disabled; Drop Shadow set to Ignore excludes drop shadows from the criteria.

To apply formatting to the found object, select the Change Object Format box, or select the Specify Attributes To Change icon in the Change Format Settings section. Choose a formatting category, set its format attributes, and select OK. Use the Find and Change buttons to apply formatting to the objects.

## Find/Change — Find and change glyphs

Use the Glyph section of Find/Change when one glyph needs to be replaced by another similar glyph with the same unicode value, such as an alternate glyph.

InDesign Secrets has an example titled Finding and Changing Glyphs.

Open Edit > Find/Change. In the lower area of the dialog box, set the range from the Search menu, and use the icons to decide whether locked layers, parent pages, footnotes, and similar items are searched. Under Find Glyph, choose the Font Family and Font Style that contain the glyph.

The Font Family menu lists only fonts already applied to text in the current document. Fonts used only in unused styles are not shown.

Use either of these methods to put the target glyph in the Glyph box:

Select the button next to the Glyph box, then double-click a glyph in the panel. This panel behaves like the Glyphs panel.

Choose Unicode or GID/CID, then type the code for the glyph.

Note

Other entry methods can also load the glyph to find. From the document window, select a glyph, then use the context menu command Load Selected Glyph In Find; from the Glyphs panel, select a glyph and use the context menu command Load Glyph In Find.

Under Change Glyph, enter the replacement glyph with the same techniques used for the glyph being searched. Select Find. To keep searching, select Find Next, Change (changes the most recent match), Change All (shows a message with the total number changed), or Change/Find (changes the current match and searches for the next one). Select Done.

## Find/Change — Find and change fonts

Find Font searches a document and lists the fonts it uses. Any listed font can be replaced with another font installed on the system, except for fonts inside imported graphics. A font that belongs to a text style can also be replaced. Keep these points in mind:

For layout text, each font name appears once, while imported graphics add a separate listing each time the font occurs there. For example, a font used three times in the layout and three times in imported graphics appears four times in Find Font: one entry for all layout use and three entries for the imported graphics. When a graphic does not fully embed its fonts, Find Font may not show that font name.

Find Font cannot be used from a Story Editor window.

The Find Font dialog box uses icons to show font types and conditions, including Type 1 fonts, imported images, TrueType fonts, OpenType fonts, and missing fonts.

Composite fonts can be found and changed, but component fonts inside composite fonts cannot be changed.

Use Type > Find Font to check output consistency by reviewing font use on pages and in imported graphics. For specific text attributes, characters, or styles, use Edit > Find/Change instead.

Choose Type > Find Font. In the Fonts In Document list, select one or more font names. Then use the appropriate action:

To locate the first layout occurrence of the selected font, select Find First. The text using that font is brought into view. Find First is unavailable when the selected font occurs in an imported graphic or when multiple fonts are selected.

To select an imported graphic that uses a font marked with an imported image icon, select Find Graphic. The graphic is brought into view as well. Find Graphic is unavailable when the selected font is used only in the layout or when multiple fonts are selected in the Fonts In Document list.

To show information for a selected font, select More Info. Select Less Info to hide that information. The Info area stays blank when multiple fonts are selected.

A font can appear as Unknown if the selected graphic file does not provide font information. Fonts in bitmap graphics, such as TIFF images, do not appear because they are not true characters.

To replace a font, choose the new font from the Replace With list, then do one of the following:

To replace only one occurrence of the selected font, select Change. This option is unavailable when multiple fonts are selected.

To replace that occurrence and then search for the next one, select Change/Find. This option is unavailable when multiple fonts are selected.

To replace every occurrence of the selected font in the list, select Change All. To redefine any paragraph or character style that includes the font being searched for, select Redefine Style When Changing All.

To replace every occurrence of the selected font in the list, select Change All. To update paragraph styles, character styles, or named grids that depend on the searched font, select Redefine Style And Named Grid When Changing All.

After a font has no remaining occurrences in the file, its name disappears from the Fonts In Document list.

Note

For fonts inside imported graphics, make the change in the application that exported the graphic, then replace the graphic or update the link through the Links panel.

If you selected Change, select Find Next to move to the next font occurrence. Select Done.

Find Font can be opened during preflight. In the Preflight dialog box, switch to the Fonts tab and select Find Font.

Note

To open the system folder that contains a font, select the font in Find Font and choose Reveal In Explorer (Windows) or Reveal In Finder (Mac OS).

## Find/Change — Find/change items using queries

Text, objects, and glyphs can be found and changed by using an existing query or by building a new one. A query stores a defined find-and-change operation. InDesign includes preset queries for punctuation formatting and other common tasks, including telephone number format changes. Saving a custom query lets you rerun it later and share it with other users.

## Find/Change — Search using queries

Choose Edit > Find/Change, then choose a query from the Query list.

Queries are organized by type.

Choose the range on the Search menu.

The query does not save the search range.

Select Find. To proceed through results, select Find Next, Change (changes the most recently found text or punctuation mark), Change All (shows a message with the total number changed), or Change/Find (changes text or punctuation marks and continues the search).

After choosing a search query, adjust its settings as needed to refine the search.

## Find/Change — Save queries

Save a query from the Find/Change dialog box when you need to rerun it or give it to someone else. In Find/Change, saved query names become available from Query list.

Open Edit > Find/Change. Select Text, GREP, or another tab for the type of search you need. Below the Search menu, use the icons to decide whether the query includes items such as locked layers, parent pages, and footnotes.

Those inclusion settings are saved with the query, but the search range is not.

Fill in Find What and Change To. Cross-references: Metacharacters for searching and Search using GREP expressions. Select the Save Query button in the Find/Change dialog box, then enter the query name.

When the name matches an existing query, you are prompted to replace it. Select Yes to update that query.

## Find/Change — Delete queries

Select the query in the Query list, then select the Delete Query button.

## Find/Change — Load queries

Custom queries are saved as XML files. Their names appear in the Query list in the Find/Change dialog box.

To make a received query appear in the Query list, copy its file to the matching location:

Mac OS

Users\[username]\Library\Preferences\Adobe InCopy \[Version]\[Language]\Find-Change Queries\[query type]

Windows XP

Documents and Settings\[username]\Application Data\Adobe\InCopy \[Version]\[Language]\Find-Change Queries\[query type]

Windows Vista and Windows 7

Users\[username]\AppData\Roaming\Adobe\InCopy \[Version]\[Language]\Find-Change Queries\[query type]

### More like this

- Find/Change video
- Create GREP styles
