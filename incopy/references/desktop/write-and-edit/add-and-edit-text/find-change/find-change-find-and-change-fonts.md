# Find/Change — Find and change fonts

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
