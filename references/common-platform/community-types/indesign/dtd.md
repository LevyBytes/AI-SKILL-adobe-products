# DTD

Community declaration reference: InDesign/2023.

DTD object for the document.

```typescript
declare class DTD extends XMLItem {
    /**
    - Text contents value.
      */
      readonly contents: string | SpecialCharacters
    /**

    - Public ID recorded on the DOCTYPE declaration; applies only to an external subset DTD.
      */
      readonly publicId: string
    /**

    - Root-object tag.
      */
      rootTag: XMLTag
    /**

    - System ID recorded on the DOCTYPE declaration; applies only to an external subset DTD.
      */
      readonly systemId: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
