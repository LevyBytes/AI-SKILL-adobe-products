# Smart Object Specifics migration

**Smart Object Specifics:**

- Layer type: V1 `"smartObject"` maps to V2 `"smart_object_layer"`
- Source: V1 `input: {href, storage}` maps to V2 `smartObject.smartObjectFile.source.url`, nested further down
- Linked flag: V1 `smartObject.linked` maps to V2 `smartObject.isLinked`
- SVG and AI are added source formats in V2; V1 accepted PSD, JPEG, PNG, and PDF
- **Supported source file types:** PSD (`image/vnd.adobe.photoshop`), JPEG (`image/jpeg`), PNG (`image/png`), TIFF (`image/tiff`), SVG (`image/svg+xml`), AI (`application/illustrator`), PDF (`application/pdf`)
- **AI file requirement:** AI input works only when Adobe Illustrator saved it with **Create PDF Compatible File** enabled.
- **Resize with linked smart objects:** A width-only resize with no layer edits rasterizes ALL linked SOs into pixel layers. When the same request edits/adds one linked SO and resizes, that edited SO remains linked while every other linked SO is rasterized.
- Replacing a linked SO with an embedded SO is not available in V2.
- **SO canvas content scaling:** `transformMode` belongs to the document-level layer operation and does not determine how replacement pixels fit onto the SO canvas. Only `transform.dimension` controls SO canvas scaling: omit it for proportional scaling with aspect ratio preserved, or provide it to stretch to exact dimensions. For cutout or transparent-background assets, use `transformMode: "fit"` or `"fill"` without `transform.dimension`.
