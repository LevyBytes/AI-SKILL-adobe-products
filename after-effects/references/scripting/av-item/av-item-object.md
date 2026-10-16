# AVItem object

app.project.item(index)

### Description

The AVItem object opens up the attributes and methods belonging to audio and visual files that have been imported into After Effects.

Info

AVItem derives from Item. Every method and attribute of Item, alongside the ones listed here, applies when you work with AVItem. See Item object

Info

AVItem serves as the base for both CompItem and FootageItem, so its attributes and methods carry over when you work with CompItem and FootageItem objects. See CompItem object and FootageItem object.

Warning

Although CompItems and FootageItems descend logically from AVItem, they are not truly subclasses of it, because AVItem has no presence in Extendscript — so a check like item instanceof AVItem fails, since AVItem is undefined. The same holds for Item itself.

For more, consult Javascript Classes and After Effects Class Hierarchy.
