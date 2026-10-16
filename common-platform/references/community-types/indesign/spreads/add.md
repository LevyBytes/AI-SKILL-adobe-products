# Spreads.add

Community declaration reference: InDesign/2023.

Adds a spread.
@param at Placement for the spread, either relative to a reference object or within the document.
@param reference Reference object; required when at requests before or after placement.
@param withProperties Starting property map for the new Spread.

```typescript
declare class Spreads {
    add(at?: LocationOptions, reference?: Spread | Document, withProperties?: object): Spread
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
