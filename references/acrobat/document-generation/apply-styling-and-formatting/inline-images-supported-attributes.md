# Inline images supported attributes

Documentation covering inline images lives [here](../inline-images.md).

Supply image formatting through the attributes of the `<img>` tag.

- Height and width attributes are honored on the `<img>` tag.

- Anything else placed inside the `<img>` tag that isn't recognized gets dropped.

JSON representation of the input data:

```json
{
  "ContentBlock": "sample image with height and width - <img src=\"https://documentcloud.adobe.com/dc-docgen-app/assets/dc_icon.png\" height=\"200\" width=\"200\">"
}
```

[Figure: Formatting Inline images with height and width](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/formatted-inline-image-height-and-width.png)

**Note:** In this case the image is sized to match what the input data specifies.
