# Getting started with Smart Objects

Use the Smart Object endpoint to create and modify an embedded Smart Object inside a PSD file.

When a Smart Object is replaced, the replacement is placed inside the original image's bounding box. The replacement scales to fit those original bounds and keeps its aspect ratio, regardless of whether the new image is larger or smaller than the old one. To change the replacement image bounds, include bounds parameters in the API call.

For these sample images, a Smart Object was generated in the "socks" layer, then the API swapped the original artwork for a new pattern to create two versions of the same photograph.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/smartobject-example.png?raw=true)
