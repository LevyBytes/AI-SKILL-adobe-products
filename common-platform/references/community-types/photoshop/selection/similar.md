# Selection.similar

Community declaration reference: Photoshop/2015.5.

Expands the selection to matching pixels across the image within tolerance.
@param tolerance Tolerance range. Range: 0 to 255.
@param antiAlias When true, anti-aliasing applies.

```typescript
declare class Selection {
    similar(tolerance: number, antiAlias: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
