# EndnoteTextFrames named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class EndnoteTextFrames {
    /**
    - Gets an EndnoteTextFrame by index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): EndnoteTextFrame
    /**
    - Gets the EndnoteTextFrame matching the supplied ID.
      */
      itemByID(id: number): EndnoteTextFrame
    /**
    - Gets the EndnoteTextFrame matching the supplied name.
      */
      itemByName(name: string): EndnoteTextFrame
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
