# Output Types Migration Guide - Structural changes (all output types)

**Key structural changes:**

1. **Destination Object**: the URL now belongs inside a `destination` object.
2. **Storage Type**:
   - v1: every output required the `storage` field.
   - v2: provide `storageType` only for Azure Blob Storage and Dropbox.
   - AWS S3 presigned URLs do not need `storageType`.
3. **Media Type**: `type` is renamed to `mediaType` to make the field purpose clearer.
