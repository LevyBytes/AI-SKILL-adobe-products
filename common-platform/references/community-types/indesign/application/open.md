# Application.open

Community declaration reference: InDesign/2023.

Opens a document, book, or library from the supplied file path.
@param from File path(s) to the document, book, or library.
@param showingWindow true displays the document in a window; false opens it without showing a window.
@param openOption Document opening behavior.

```typescript
declare class Application {
    open(from: File | File[], showingWindow?: boolean, openOption?: OpenOptions): any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
