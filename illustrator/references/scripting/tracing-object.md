# TracingObject

TracingObject

### Description

TracingObject links a source raster art item to the vector-art plug-in group produced by tracing. Scripts start tracing through PlacedItem.trace or RasterItem.trace().

The generated PluginItem object stands for that vector art group and exposes this object through its tracing property.

Because tracing runs asynchronously, a script can force the operation by invoking Application.redraw(). After creating the tracing object, call redraw before reading its properties or expanding the trace into an art item group.

Read-only properties that report tracing results become meaningful only after the first tracing operation finishes. A returned value of 0 means the operation is still incomplete.
