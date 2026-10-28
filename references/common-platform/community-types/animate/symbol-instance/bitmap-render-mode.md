# SymbolInstance.bitmapRenderMode

Community declaration reference: Animate/22.0.

Selects the display mode used for the symbol.
Supported values:
"none"
"cache" - makes Flash Player cache the symbol as a bitmap at runtime.
"export" - exports the symbol as a bitmap during SWF compilation.
The older symbolInstance.cacheAsBitmap on page 472 property covers similar behavior, but because it is boolean, it exposes fewer modes. Adobe may deprecate cacheAsBitmap later, so new scripts should prefer this property. In cacheAsBitmap, true maps to "cache" and false maps to "none".

```typescript
declare class SymbolInstance extends Instance {
    bitmapRenderMode: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
