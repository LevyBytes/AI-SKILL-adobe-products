# IllustratorPathType

Community declaration reference: Photoshop/2015.5.

Chooses which paths are exported.

```typescript
declare enum IllustratorPathType {
    /**
    - Exports every path.
      */
      ALLPATHS = 2,
    /**

    - Exports the bounds of the document.
      */
      DOCUMENTBOUNDS = 1,
    /**

    - Exports a named path. To identify it, use the path name property on the illustrator export options object.
      */
      NAMEDPATH = 3,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
