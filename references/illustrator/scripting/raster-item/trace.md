# RasterItem.trace()

app.activeDocument.rasterItems[index].trace()

### Description

Changes this object's raster art into vector art with default options.

The raster art becomes source art inside a plug-in group, then converts to a group of filled and/or stroked paths resembling the original image.

The method returns a PluginItem linked with a TracingObject.

### Returns

PluginItem
