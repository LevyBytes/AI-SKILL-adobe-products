# Project.usedFonts

app.project.usedFonts

Note

This functionality was added in After Effects 24.5

### Description

Gives back an Array of Objects that point to the fonts in use along with the Text Layers and the times at which each appears in the current Project. Every object holds font, a Font object, and usedAt, an Array of Objects, each of which holds layerID (a Layer.id) and layerTimeD for the moment in question. Turn to Project.layerByID() to fetch the layers.
