# Insert Lists using Repeating Sections

By repeating across a list, generate numbered or bullet lists on the fly.

**How to insert Lists**

[Video](https://images-tv.adobe.com/mpcv3/5158/d58772af-7a62-49fa-a098-12b11a27fb71_1615917048.854x480at800_h264.mp4#t=3)

JSON representation of the input data:

```json
{
  "products": [
    {
      "productName": "Adobe Photoshop"
    },
    {
      "productName": "Adobe Premiere Pro"
    },
    {
      "productName": "Adobe InDesign"
    }
  ]
}
```

**Numbered Lists**

Produce a numbered list dynamically by dropping it inside a repeating section.

[Figure: Template tag items are replaced by numbered list](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/numbered-list.png)

**Bullet Lists**

Produce a bullet list dynamically by dropping it inside a repeating section.

[Figure: Template tag items are replaced by bullet list](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/bullet-list.png)

**Simple Lists**

JSON representation of the input data in case of simple lists:

```json
{
  "products": ["Adobe Photoshop", "Adobe Premiere Pro", "Adobe InDesign"]
}
```

Produce a numbered or bullet list dynamically by dropping it inside a repeating section.

[Figure: Template tag items are replaced by numbered or bullet list](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/simple-lists.png)
