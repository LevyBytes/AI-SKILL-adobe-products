# Manifest Response Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

For `/v2/generate-manifest`, this page maps response fields from V1 to V2. To migrate the request you send to the API, use the [Manifest Migration guide](manifest-migration/manifest-migration.md).

V2 manifest responses include much more detail than V1. The differences group into these areas:

| Section | What changed |
| --- | --- |
| [Document-level fields](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#document-level-fields) | Field renames + many new document properties |
| [Layer type taxonomy](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#layer-type-taxonomy) | All type strings renamed to snake_case; artboards promoted to distinct type |
| [Per-layer common fields](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#per-layer-common-fields) | `bounds` format, `blendOptions` extensions, `pixelMask` restructure, `thumbnail` object |
| [Adjustment layers](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#adjustment-layers) | `adjustments.type` discriminant + per-type restructuring |
| [Background layer](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#background-layer) | Type `background_layer`; new sub-fields; no `typeAttributes` |
| [Fill / solid color layer](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#fill--solid-color-layer) | Type rename + vector mask exposure |
| [Artboard structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#artboard-structure) | Promoted from `layerSection`, new `typeAttributes`, `layers[]` vs `children[]` |
| [Smart object detail](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#smart-object-detail) | Heavily restructured nested fields |
| [Text layer detail](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#text-layer-detail) | `characterStyles`, `paragraphAttributes` rename, enriched `frame` object |

Every layer `type` string was renamed, for example `"adjustmentLayer"` to `"adjustment_layer"`. Code that branches on `type` needs updates. See [Layer type taxonomy](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/manifest-response-migration.md#layer-type-taxonomy) for the full rename table.
