# PageItem

app.activeDocument.pageItems[index]

### Description

Use this reference for any art item. In Illustrator, every art item and every group in a document is treated as a page item, and scripts can reach one through a document, layer, or group item.

PageItem provides full access to the art items stored in an Illustrator document. It is the superclass for artwork objects in a document, so CompoundPathItem, GroupItem, MeshItem, PathItem, PlacedItem, PluginItem, RasterItem, and TextFrameItem inherit properties defined by PageItem.

Create a concrete PageItem subclass, such as PathItem, rather than instantiating PageItem directly.
