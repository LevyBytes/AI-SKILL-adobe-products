# Selection.select

Community declaration reference: Photoshop/2015.5.

Selects a region.
@param region Array of x and y corner coordinates for the selection, using [[x1, y1], [x2,y2],[x3, y3], [x4,y4]]
@param type Method for combining the new selection with the existing selection.
@param feather Feather amount.
@param antiAlias When true, anti-aliasing applies.

```typescript
declare class Selection {
    select(region: any[], type?: SelectionType, feather?: number, antiAlias?: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
