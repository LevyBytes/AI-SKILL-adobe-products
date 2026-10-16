# SpriteSheetExporter.exportSpriteSheet

Community declaration reference: Animate/22.0.

Writes the sprite sheet to an image file plus a metadata file derived from the path parameter. The returned string contains metadata produced by the sprite sheet plugin, or nothing when an error occurs.
@param path String; A file path without an extension, used as the base name for the exported files.
@param imageFormat String or Object. Either a string or an object describing the image format to generate.
- String: Valid values are "png" or "jpg"; the exporter reuses the values that were last applied.
- Object: When an object is passed, it must include at least a string property "format" with a value of either "png" or "jpg". Optional entries include "backgroundColor," for a color value with optional alpha; "quality" (jpg only), with values 1 through 100; and "bitDepth" (png only), with allowed values 8, 24 or 32.
@param writeMetaData Optional. Boolean; Controls whether the metadata file is written beside the image file. Default: true.

```typescript
declare class SpriteSheetExporter extends Item {
    exportSpriteSheet(
        path: string,
        imageFormat?: string | ImageFormat,
        writeMetaData?: boolean,
        ): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
