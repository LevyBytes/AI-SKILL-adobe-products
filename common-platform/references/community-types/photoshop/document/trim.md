# Document.trim

Community declaration reference: Photoshop/2015.5.

Removes transparent margins around the image from selected canvas sides.
@param type Pixel color or type used as the trim basis.
@param top When true, removes the top side.
@param left When true, removes the left side.
@param bottom When true, removes the bottom side.
@param right When true, removes the right side.

```typescript
declare class Document {
    trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
