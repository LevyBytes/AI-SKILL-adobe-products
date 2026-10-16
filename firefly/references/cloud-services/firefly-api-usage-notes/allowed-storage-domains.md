# Allowed storage domains

Images intended for the composite API can be uploaded through the /v2/storage/image API. When that upload path is used, an uploadId is returned. In those API requests, `source.url` contains a pre-signed URL for an image stored on a supported domain.

Storage URLs for the API may use only these domains:

| Domain | Provider |
| --- | --- |
| amazonaws.com | Amazon Web Services |
| amazonaws.com:443 | Amazon Web Services |
| windows.net | Microsoft Azure |
| windows.net:443 | Microsoft Azure |
| dropboxusercontent.com | Dropbox |
| dropboxusercontent.com:443 | Dropbox |
| storage.googleapis.com | Google Cloud |
| storage.googleapis.com:443 | Google Cloud |
| assets.frame.io | Frame.io |
| adobe.io | Adobe |

## See also

- [Style Presets](../style-presets.md)
