# PathItem.makeSelection

Community declaration reference: Photoshop/2015.5.

Creates a selection from this path item, using the path as the selection border.
@param feather Feather amount in pixels. Range: 0.0 to 250.0.
@param antiAlias When true, anti-aliasing is used by the selection.
@param operation Selection behavior against the current selection when one already exists.

```typescript
declare class PathItem {
    makeSelection(feather?: number, antiAlias?: boolean, operation?: SelectionType): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
