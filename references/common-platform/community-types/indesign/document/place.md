# Document.place

Community declaration reference: InDesign/2023.

Places one or more files with the place menu item's behavior. Depending on current preferences, the action can load the place gun or replace the selected object.
@param fileName File or files to place.
@param showingOptions Whether the import options dialog appears.
@param withProperties Initial property values for placed object or objects.

```typescript
declare class Document {
    place(fileName: File | File[], showingOptions?: boolean, withProperties?: object): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
