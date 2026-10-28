# External storage outputs

For external storage, the response points to URLs that can be fetched for result files:

```json
{
  "result": {
    "outputs": [
      {
        "url": "https://storage.example.com/output.jpg",
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

**Downloading Outputs:**

```shell
curl -X GET "https://storage.example.com/output.jpg" -o output.jpg
```
