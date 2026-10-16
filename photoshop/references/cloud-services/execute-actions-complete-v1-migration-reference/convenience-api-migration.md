# 12. Convenience API migration

V1 convenience endpoints depended on predefined action files hosted server side. In V2, those same action files are published for direct use through `/v2/execute-actions`; the full ActionJSON bodies live in the migration guide for each API.

| V1 Endpoint | V2 Approach | Guide |
| --- | --- | --- |
| `productCrop` | Published ActionJSON | [Product Crop](../product-crop-migration.md) |
| `depthBlur` | **Not yet supported** | Neural Filters unavailable in V2 |
