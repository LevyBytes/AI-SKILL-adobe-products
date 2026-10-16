# SpriteSheetExporter.changeSymbol

Community declaration reference: Animate/22.0.

Updates the symbol frame range that will participate in the sprite sheet.
@param symbol A SymbolItem or SymbolInstance that is already part of the sprite sheet.
@param beginFrame Optional. First frame in the range selected for output.
@param endFrame Optional. Final frame in the range selected for output.

```typescript
declare class SpriteSheetExporter extends Item {
    changeSymbol(symbol: SymbolItem | SymbolInstance, beginFrame?: number, endFrame?: number): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
