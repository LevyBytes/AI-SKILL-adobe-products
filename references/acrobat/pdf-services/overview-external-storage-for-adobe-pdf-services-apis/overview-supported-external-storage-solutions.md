Select a provider whose signed transfer URL matches the operation's input download or output upload. The request's `storage` discriminator identifies the provider; it does not create storage permissions or turn a download link into an upload destination.

| Storage model | Request value | Provider contract |
| --- | --- | --- |
| Bucket objects with method-specific presigning | `S3` | [Amazon S3](amazon-s3.md) |
| Blob resources with delegated SAS permissions | `BLOB` | [Azure Blob](azure-blob.md) |
| File-content and one-use upload links | `DROPBOX` | [Dropbox](dropbox.md) |
| Preauthenticated file and upload-session URLs | `SHAREPOINT` | [SharePoint](share-point.md) |

Follow the [external-storage request workflow](../overview-external-storage-for-adobe-pdf-services-apis.md), [transport constraints](overview-limitation.md) and [host-pattern list](supported-url-prefixes.md). Adobe's [provider overview](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/pdf-external-storage-sol/) documents the supported provider set.
