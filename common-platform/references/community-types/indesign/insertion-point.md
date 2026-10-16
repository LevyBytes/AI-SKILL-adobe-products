# InsertionPoint

Community declaration reference: InDesign/2023.

Insertion location between two characters.

```typescript
declare class InsertionPoint extends Text {
    /**
    - Endnote collection.
      */
      readonly endnotes: Endnotes
    /**

    - Adds an endnote, creating both the endnote reference and its text range.
      */
      createEndnote(): Endnote
    /**

    - Experimental: Fetches a text fragment from url, places it at the insertion point, and makes a link.
    - @param linkResourceURI Link Resource URI.
    - @param name Tag name for the key.
      */
      createTextFragmentLink(linkResourceURI: string, name: string): Link
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
