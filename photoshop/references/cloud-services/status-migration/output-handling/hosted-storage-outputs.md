# Hosted storage outputs

For hosted storage, the response includes temporary URLs managed by Adobe:

```json
{
  "result": {
    "outputs": [
      {
        "url": "https://adobe-hosted-storage.example.com/temp/output.jpg?expires=...",
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

Hosted storage URLs expire according to the `validityPeriod` in the request; retrieve results before they expire.
