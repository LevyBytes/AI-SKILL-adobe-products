# Application.thumbnailText

Community declaration reference: Photoshop/2015.5.

PRIVATE - creates a thumbnail file from text parameters.
@param dest Thumbnail File to write.
@param text Text that should be rendered.
@param font Font PostScript name.
@param size Type size.
@param color Type color.

```typescript
declare class Application {
    thumbnailText(dest: File, text?: string, font?: string, size?: number, color?: SolidColor): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
