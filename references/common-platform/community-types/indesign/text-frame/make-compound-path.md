# TextFrame.makeCompoundPath

Community declaration reference: InDesign/2023.

Combines TextFrame path(s) with paths from other objects to create a compound path.
@param with_ Other objects whose paths are included in the new compound path.

```typescript
declare class TextFrame extends PageItem {
    makeCompoundPath(with_: PageItem[]): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
