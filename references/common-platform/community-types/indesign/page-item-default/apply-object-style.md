# PageItemDefault.applyObjectStyle

Community declaration reference: InDesign/2023.

Assigns the requested object style.
@param using Object style being assigned.
@param clearingOverrides When true, removes the PageItemDefault's current attributes before the style is applied.
@param clearingOverridesThroughRootObjectStyle When true, removes attributes and formatting on the PageItemDefault that the object style does not define.

```typescript
declare class PageItemDefault extends Preference {
    applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
