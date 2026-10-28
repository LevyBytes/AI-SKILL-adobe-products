# XMLElement.applyObjectStyle

Community declaration reference: InDesign/2023.

Assigns an object style to the frame linked with the XMLElement.
@param using Object style that should be assigned.
@param clearingOverrides When true, local formatting is removed before the object style is assigned.
@param clearingOverridesThroughRootObjectStyle When true, the root style provides clearing for unchecked category attributes.

```typescript
declare class XMLElement extends XMLItem {
    applyObjectStyle(using: string | ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
