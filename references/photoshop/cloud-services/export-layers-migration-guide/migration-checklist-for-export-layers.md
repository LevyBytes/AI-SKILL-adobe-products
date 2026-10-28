# Migration checklist for export layers

- [ ] Prefer `outputs[].destination.url`, `outputs[].mediaType`, and `outputs[].layers` for the V2 shape.
- [ ] For exports with multiple layers, choose JPEG, PNG, or TIFF instead of PSD.
- [ ] `cropMode` values `trim_to_transparency` and `document_bounds` apply to every export type; reserve `layer_bounds` for a single layer.
- [ ] Set string enum values for `quality` (JPEG) and `compression` (PNG); leave them out to use defaults (`photoshop_max` / `default`).
- [ ] `iccProfile` remains optional for layer exports; include it when color space conversion is required (see [ICC Profile Migration](../icc-profile-migration-guide-overview.md)).

### Related guides

- [Output Types Migration](../output-types-migration/reference-index.md) - JPEG quality, PNG compression enums, media types, and output-structure updates
- [ICC Profile Migration](../icc-profile-migration-guide-overview.md) - ICC profile schema details, standard/custom profile handling, and supported formats
- [Layer Operations Overview](../layer-operations-migration/layer-operations-overview.md) - Starting point for V2 layer operations
- [Composite Migration](../layer-operations-migration/reference-index.md) - Create-composite endpoint usage and layer-operation migration
- [Migration Overview](../migration-to-v2-overview/reference-index.md) - Complete V1 to V2 migration overview

**Last Updated:** March 2026
