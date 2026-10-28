# Pages.add

Community declaration reference: InDesign/2023.

Adds a page.
@param at Where the added page goes, either relative to a reference object or within the document or spread.
@param reference Reference object; required when the at value requests before or after placement.
@param withProperties Starting Page property map.

```typescript
declare class Pages {
    add(at?: LocationOptions, reference?: Page | Spread | MasterSpread | Document, withProperties?: object): Page
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
