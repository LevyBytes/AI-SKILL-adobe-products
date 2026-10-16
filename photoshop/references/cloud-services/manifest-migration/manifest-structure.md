# Manifest structure

A generated manifest can include the full document description:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "document": {
    "name": "example.psd",
    "width": 1920,
    "height": 1080,
    "depth": 8,
    "mode": "rgb",
    "photoshopBuild": "...",
    "imageInfo": {
      "format": "image/vnd.adobe.photoshop"
    }
  },
  "layers": [
    {
      "id": 1,
      "name": "Background",
      "type": "pixel_layer",
      "visible": true,
      "protection": ["none"],
      "bounds": {
        "top": 0,
        "left": 0,
        "right": 1920,
        "bottom": 1080
      },
      "thumbnail": {
        "mediaType": "image/jpeg",
        "url": "<THUMBNAIL_URL>"
      }
    },
    {
      "id": 2,
      "name": "Text Layer",
      "type": "text_layer",
      "visible": true,
      "text": {
        "content": "Hello World",
        "characterStyles": [/* additional content omitted */]
      }
    },
    {
      "id": 3,
      "name": "Group",
      "type": "group_layer",
      "visible": true,
      "children": [/* additional content omitted */]
    }
  ],
  "xmp": "...",
  "artboards": [/* additional content omitted */]
}
```
