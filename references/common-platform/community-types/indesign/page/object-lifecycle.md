# Page object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Page {
    /**
    - Creates a duplicate page.
    - @param to Position for the duplicate page, either against a reference object or within the document or spread.
    - @param reference Reference object; required when the to value requests before or after placement.
      */
      duplicate(to?: LocationOptions, reference?: Page | Spread): Page
    /**
    - Relocates the page.
    - @param to New page position relative to a reference object or within the document or spread.
    - @param reference Reference object; required when to specifies before or after placement.
    - @param binding Binding-spine location used in spreads.
      */
      move(to?: LocationOptions, reference?: Page | Spread, binding?: BindingOptions): Page
    /**
    - Removes this Page.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
