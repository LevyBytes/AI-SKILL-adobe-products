# Item.linkageExportInFirstFrame

Community declaration reference: Animate/22.0.

Boolean flag; true exports the item in the first frame, while false exports it in the frame containing the first instance. Items absent from the Stage are not exported.
This property can be true only when item.linkageExportForAS and/or item.linkageExportForRS are true.

```typescript
declare class Item {
    linkageExportInFirstFrame: boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
