# SpriteSheetExporter.addSymbol

Community declaration reference: Animate/22.0.

Registers the given SymbolItem or SymbolInstance for sprite sheet generation.
@param symbol The SymbolItem or SymbolInstance to register for export.
@param name The symbol instance name to use for export.
@param beginFrame The first frame in the exported symbol range.
@param endFrame The final frame in the exported symbol range.

```typescript
declare class SpriteSheetExporter extends Item {
    addSymbol(
        symbol: SymbolItem | SymbolInstance,
        name?: string,
        beginFrame?: number,
        endFrame?: number,
        ): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
