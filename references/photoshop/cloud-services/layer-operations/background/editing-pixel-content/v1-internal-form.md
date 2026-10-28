# V1 internal form

V1 performed background-layer pixel replacement inside the service:

```json
{
  "options": {
    "layers": [
      {
        "type": "backgroundLayer",
        "id": -1,
        "edit": {},
        "input": {
          "href": "<NEW_IMAGE_URL>",
          "storage": "external"
        }
      }
    ]
  }
}
```
