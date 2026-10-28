# Key Improvements and Architecture with v2

Review the main service improvements in the v2 API.

This page describes the principal architecture and service changes in Photoshop API v2, so the migration benefits are clear. The sections summarize major endpoint-wide improvements in these areas:

- **Combined operations** - Send several edits in one request instead of splitting them across API calls.
- **Flexible storage options** - Choose among embedded, hosted, presigned, and Creative Cloud storage.
- **Published action files** - Inspect and modify the action definitions behind convenience workflows.
- **Enhanced layer operations** - Control layers more fully through the create-composite endpoint.
- **Improved error handling** - Receive clearer codes, multiple validation details, and a consistent error shape.

When you are ready to start migrating, begin with the [V1 to V2 Migration Guide overview](migration-to-v2-overview/reference-index.md).
