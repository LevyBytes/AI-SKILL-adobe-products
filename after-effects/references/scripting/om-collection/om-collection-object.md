# OMCollection object

app.project.renderQueue.items.outputModules

### Description

Every output module belonging to a render queue is held within an OMCollection. Through this collection you reach the individual OutputModule objects and can also add new ones. Indexing starts at 1, so position 1 holds the first OutputModule.

Info

Because OMCollection derives from the Collection object, anything Collection exposes — its full set of methods and attributes — also works on an OMCollection.
