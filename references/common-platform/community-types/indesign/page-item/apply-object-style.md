# PageItem.applyObjectStyle

Community declaration reference: InDesign/2023.

Applies a chosen object style.
@param using Object style to apply.
@param clearingOverrides When true, the PageItem's current attributes are cleared before the style is applied.
@param clearingOverridesThroughRootObjectStyle When true, PageItem attributes and formatting not specified by the object style are cleared.

```typescript
declare class PageItem {
    applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
