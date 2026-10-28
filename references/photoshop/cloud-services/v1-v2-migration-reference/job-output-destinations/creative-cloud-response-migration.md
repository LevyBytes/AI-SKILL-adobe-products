# Creative Cloud response migration

**V1 vs V2:**

**V1 Status Response (CC storage)**

```json
{
  "outputs": [
    {
      "_links": {
        "self": {
          "href": "my-folder/output.jpg",
          "storage": "external"
        }
      },
      "status": "succeeded"
    }
  ]
}
```

**V2 Status Response (CC storage)**

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "creativeCloudPath": "my-folder/output.jpg"
        },
        "mediaType": "image/jpeg"
      }
    ]
  },
  "status": "succeeded"
}
```

**When to Use:**

- Integration with Creative Cloud ecosystem and ACP
- Direct access to user's CC files
- Collaboration workflows
- Seamless CC workflow integration

Related: [Creative Cloud output destinations](creative-cloud-destination.md).
