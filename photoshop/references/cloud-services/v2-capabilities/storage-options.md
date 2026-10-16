# Storage options

V2 adds two convenience storage modes for cases that need no external infrastructure. They are useful for quick prototypes and for returning intermediate pipeline results:

- **Embedded** - returns the result inline as base64 in the response body, with use limited to textual content only.
- **Hosted** - stores the result temporarily through Adobe and returns a download URL with configurable expiration.

For production use, external storage such as S3, Azure, Dropbox, or Creative Cloud is still recommended; choose according to the caller's intended access-control model.

The full reference is in the [Storage Solutions](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/getting-started/storage-solutions/index.md) guide.
