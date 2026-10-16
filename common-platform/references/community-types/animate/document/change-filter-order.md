# Document.changeFilterOrder

Community declaration reference: Animate/22.0.

Repositions a filter in the Filters list. Filters above or below newIndex shift as needed. For example, with the filters shown below, fl.getDocumentDOM().changeFilterOrder(3, 0) changes the order this way:
Before: blurFilter, dropShadowFilter, glowFilter, gradientBevelFilter
After: gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter
Issuing fl.getDocumentDOM().changeFilterOrder(0, 2) afterward changes the order this way:
Before: gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter
After: blurFilter, dropShadowFilter, gradientBevelFilter, glowFilter
@param oldIndex Integer for the filter's current zero-based position in the Filters list.
@param newIndex Integer for the filter's new list position.

```typescript
declare class Document {
    changeFilterOrder(oldIndex: number, newIndex: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
