# About layers and the target layer

In the Photoshop app, **layers** let separate image elements sit in a stack. Think of them as clear sheets placed over one another, so each part of an image can be edited on its own. Paint, placed photos, or vector content can go on one layer without changing material on the others. The Photoshop app shows these layers in the Layers Panel.

An example image helps illustrate the concept. This version contains three layers:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/all-layers.png?raw=true)

When the image is broken apart by layer, it appears this way:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/decompose-layers.png?raw=true)

Viewing a single layer, such as the earth layer in the image, gives this result:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/layers-earth.png?raw=true)

The **target layer** exists in both the Photoshop app and the API. It is the selected layer, so operations affect only that layer.

For instance, if the astronaut is the target layer and you resize it, only that astronaut layer changes, producing this outcome:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/astronaut-resize.png?raw=true)

Layers created in the Photoshop app break an image into practical parts. With the Photoshop API, edits can then be scoped to a target layer for isolated image changes.

Layer background: [Photoshop, layer basics](https://helpx.adobe.com/photoshop/using/layer-basics.html).
