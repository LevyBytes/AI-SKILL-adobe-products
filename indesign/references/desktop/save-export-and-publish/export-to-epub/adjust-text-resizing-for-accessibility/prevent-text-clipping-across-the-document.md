# Prevent text clipping across the document

To avoid clipped text in grouped or anchored frames throughout the document, adjust the EPUB export sizing behavior.

Go to File > Export.

Enter the file name in Save As, then choose EPUB (Reflowable) in the Format dropdown menu.

Choose Save.

In EPUB - Reflowable Layout Export Options, open the Object tab, then choose one CSS Size setting from the drop-down menu:

- None: strips CSS size rules from text frames, groups, anchored frames, and their child elements. With those rules removed, images and other objects can use the available space for reflow instead of matching the print layout, which helps avoid clipped text during export.
- Fixed: keeps the existing layout as it is, without applying changes.
- Relative to Text Flow: scales text and images proportionally in relation to the text flow.
