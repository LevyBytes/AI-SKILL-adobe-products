# Add text annotation data

```javascript
{
      "@context": [
          "https://www.w3.org/ns/anno.jsonld",
          "https://comments.acrobat.com/ns/anno.jsonld"
      ],
      "type": "Annotation",
      "id": "02dcf931-d1cb-49c1-a8bc-d047892a06bc",
      "bodyValue": "I added a text annotation",
      "motivation": "commenting",
      "stylesheet": {
          "type": "CssStylesheet",
          "value": "body-value-css { font: 13px Helvetica; color: #0000FF; }"
      },
      "target": {
          "source": "77c6fa5d-6d74-4104-8349-657c8411a834",
          "selector": {
              "node": {
                  "index": 1
              },
              "subtype": "freetext",
              "boundingBox": [
                  306.41829735235586,
                  339.01199687491595,
                  475.729044456285,
                  357.0653042030006
              ],
              "styleClass": "body-value-css",
              "type": "AdobeAnnoSelector"
          }
      },
      "creator": {
          "type": "Person",
          "name": "John Smith"
      },
      "created": "2021-01-15T14:45:37Z",
      "modified": "2021-01-15T14:45:37Z"
}
```
