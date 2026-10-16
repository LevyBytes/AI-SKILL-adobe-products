# Input assets

The platform accepts several input asset types. Each type tells the platform which storage location it can download from. Put the input asset details inside the `assets` array.

Illustrator APIs accept these input assets:

- **AWS S3**: [Provide a pre-signed GET/PUT/POST URL.][5]

- **Dropbox**: [Create temporary upload/download links.][6]

- **Azure**: [Authenticate with an Azure Storage Shared Access Signature (SAS)][7] for GET/PUT/POST operations.

```json
{
  "assets": [
    {
      "source": {
        "url": "https://xyz-blob.core.windows.net/Template.ai"
      },
      "destination": "template1.ai"
    },
    {
      "source": {
        "url": "https://s3.eu-west-1.amazonaws/xyz/assets.zip"
      },
      "destination": "assets.zip"
    }
  ]
}
```

The examples show the payload split between `source` and `destination`.

`source` identifies the download location for the asset. `destination` names the place where that asset should be downloaded.
