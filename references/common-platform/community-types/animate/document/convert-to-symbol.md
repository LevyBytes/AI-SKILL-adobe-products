# Document.convertToSymbol

Community declaration reference: Animate/22.0.

Converts the selected Stage item or items into a new symbol. For linkage and shared asset property setup on a symbol, see Item object.
@returns Object for the new symbol, or null when the symbol cannot be created.
@param type String giving the symbol type. Acceptable values are "movie clip", "button", and "graphic".
@param name String for the new symbol name, which must be unique. Pass an empty string to let the method generate a unique symbol name.
@param registrationPoint Point representing the symbol's 0,0 location. Allowed values: "top left", "top center", "top right", "center left", "center", "center right", "bottom left", "bottom center", and "bottom right".

```typescript
declare class Document {
    convertToSymbol(type: string, name: string, registrationPoint: string): SymbolItem | null
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
