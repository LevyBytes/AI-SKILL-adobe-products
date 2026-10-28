# Available convenience APIs

Every convenience API includes a migration guide with full ActionJSON definitions, customization examples, and usage scenarios:

| Convenience API | V1 Endpoint | Key Feature | Detailed Guide |
| --- | --- | --- | --- |
| **Product Crop** | `/pie/psdService/productCrop` | Auto cutout with customizable padding | [Product Crop Migration](../../product-crop-migration/reference-index.md) |
| **Depth Blur** ⚠️ | `/pie/psdService/depthBlur` | Neural filter depth-of-field with 11+ parameters | [Depth Blur Migration](../../depth-blur-migration/reference-index.md) - **Not yet supported in V2** |
| **Text Layer Operations** | `/pie/psdService/text` | Edit text layers (font, size, color) via ActionJSON or UXP scripts | [Text Layer Operations Migration](../../text-layer-operations/text-layer-operations.md) |

Depth Blur is still unavailable in V2 because Neural Filters are not yet exposed there. For that capability, keep using the V1 endpoint.
