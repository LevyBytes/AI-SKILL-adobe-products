Adobe documents these HTTPS host patterns for external storage. Keep the provider's complete signed path and query; a matching prefix alone supplies neither authorization nor the required transfer method. Check the [provider contract](overview-supported-external-storage-solutions.md) and [redirect constraints](overview-limitation.md).

## Amazon S3

- `https://<bucket-name>.s3.amazonaws.com`
- `https://<bucket-name>.s3.<region-code>.amazonaws.com`
- `https://s3.amazonaws.com`
- `https://<bucket-name>.s3-accelerate.amazonaws.com`
- `https://<bucket-name>.s3-<region-code>.amazonaws.com`
- `https://s3.<region-code>.amazonaws.com`

Use the [S3 signing requirements](amazon-s3.md) for the selected object and operation.

## Azure Blob

- `https://<account-name>.blob.core.windows.net`

Use the [Azure SAS requirements](azure-blob.md) for resource permissions and lifetime.

## Dropbox

- `https://<item-id>.dl.dropboxusercontent.com`
- `https://content.dropboxapi.com/`

Use the [Dropbox transfer requirements](dropbox.md) to distinguish input links from one-use output links.

## SharePoint

- `https://<tenant-name>.sharepoint.com`

Use the [SharePoint requirements](share-point.md) to distinguish a direct preauthenticated URL from a redirecting Graph endpoint. The host list does not establish compatibility for a different OneDrive or Graph hostname.
