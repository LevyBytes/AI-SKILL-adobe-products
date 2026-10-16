# Images

Place any image as a placeholder and rewrite its alt text in the prescribed format to drop an image into the document on the fly:

**How to insert Images**

[Video](https://images-tv.adobe.com/mpcv3/5158/43cb78ad-e98d-4deb-bdca-cf32edd0df95_1615916490.854x480at800_h264.mp4#t=3)

```json
{
  "location-path": "logo",
  "image-props": {
    "alt-text": "This is an alt-text for the image placeholder"
  }
}
```

Within that format, the properties name the _location-path_ and the _alt-text_.

Where the image sits in the input data is given by the _location-path_.

The _alt-text_ property, as laid out in the format, lets you supply alternative text for the image.

An image placeholder keeps its height and width in the output document.
JPEG, PNG, GIF, BMP, TIFF and SVG are the supported image formats.

JSON representation of the input data:

Image data may be passed either as a base64-encoded string or as publicly reachable URLs.

```json
{
  "logo": "data:image/png;base64,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"
}
```

**OR**

```json
{
  "logo": "https://documentcloud.adobe.com/dc-docgen-app/assets/dc_icon.png"
}
```

Permitted image URLs must be https and under 20 MB in size.

Add the image placeholder.

[Figure: Initial rendering of the image tag](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/image-tag-initial.png)

Apply the alt text to the image following the prescribed format.

[Figure: Adding alternative text for the image](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/image-alt-text.png)

In the output document, the image data takes the place of the image placeholder.

[Figure: Image placeholder replaced by the image data](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/image-tag-final.png)

Images can be inserted with the html `<img/>` tag as well. For details, see [Inline Images](../inline-images/reference-index.md).
