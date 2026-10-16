# Text layer migration: V1 payload

**V1 documentOperations payload:**

```json
{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "type": "textLayer",
        "name": "Headline",
        "text": {
          "content": "Welcome",
          "characterStyles": [
            {
              "fontSize": 72,
              "fontName": "Arial-BoldMT",
              "fontColor": {
                "rgb": {
                  "red": 0,
                  "green": 0,
                  "blue": 0
                }
              }
            }
          ],
          "paragraphStyles": [
            {
              "alignment": "center"
            }
          ]
        },
        "bounds": {
          "left": 0,
          "top": 100,
          "width": 1920,
          "height": 150
        }
      }
    ],
    "manageMissingFonts": "useDefault"
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}
```

Related references:

- [Text layer migration: V2 payload](v2-text-layer-request.md)
