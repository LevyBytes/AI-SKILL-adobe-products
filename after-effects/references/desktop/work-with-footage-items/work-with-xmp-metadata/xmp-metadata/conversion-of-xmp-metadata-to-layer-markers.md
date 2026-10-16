# Conversion of XMP metadata to layer markers

Build a layer from a footage item that carries XMP metadata and its temporal metadata can be turned into layer markers.

For automatic conversion of XMP metadata into layer markers, head to the Disk preferences category and enable Create Layer Markers From Footage XMP Metadata. While that conversion runs, After Effects shows a “Reading XMP markers from footage” status message.

You can edit these layer markers freely, exactly like any other layer markers. Reworking the layer markers that came from a source file's XMP metadata leaves the XMP metadata in the source file alone.

Note

Want a layer's markers reset to whatever its source's XMP metadata originally supplied? On any of that layer's markers, right-click (Windows) or Control-click (macOS), then pick Update Markers From Source. That same command strips out any markers you added to the layer yourself. It also gives you a manual way to spin up layer markers from XMP metadata if the Create Layer Markers From Footage XMP Metadata preference wasn't on back when you made the layer.

For how to pair expressions with what's inside layer markers, see MarkerKey attributes (expression reference).
