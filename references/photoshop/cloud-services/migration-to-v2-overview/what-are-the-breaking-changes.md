# What are the breaking changes?

Several breaking changes arrive with the v2 API:

**Base URL change**

- Photoshop API v2 requests go to `photoshop-api*.adobe.io`; v1 used `image*.adobe.io`.

**Request payload structure changes**

- Across endpoints, several fields were renamed or reorganized.

**Output format changes**

- JPEG quality is now expressed with string enums; numeric 7 maps to "maximum".
- PNG compression now has 10 levels rather than 3.

**Response format modifications**

- Status and result structures have been updated.

**Different output configuration options** - Output destinations now use a new object structure with optional `storageType`.

- **New required fields in some cases**

- Some requests now require `mediaType` where v1 used `type`, plus `destination` where v1 used `href`.

**Deprecated fields**

- For AWS S3, the `storage` field is deprecated.
- JPEG numeric quality values are no longer accepted.

Check the detailed migration guide for each endpoint category to see the exact impact on your integration and the migration steps to apply.
