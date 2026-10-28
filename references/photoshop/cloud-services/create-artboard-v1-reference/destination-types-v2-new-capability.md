# 9. Destination types (V2 new capability)

V1 paired `href` with the `storage` enum. In V2, output targets are modeled as the `destination` union:

| Destination type | Fields | Purpose |
| --- | --- | --- |
| **URL** | `url` (required), `storageType` (`azure`/`dropbox`, optional) | Presigned URL targets such as S3, Azure, Dropbox, or Frame.io |
| **Creative Cloud** | `creativeCloudPath` (required), `creativeCloudProjectId` (optional) | Storage in ACP / CC |
| **Hosted** | `validityPeriod` (required, 60-86400 seconds) | Temporary Adobe-managed output when no existing bucket is available |
