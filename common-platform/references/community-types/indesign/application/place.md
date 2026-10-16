# Application.place

Community declaration reference: InDesign/2023.

Places one or more files using place menu item behavior; current preferences decide whether to load the place gun or replace the selected object.
@param fileName File or files to place.
@param showingOptions Whether to show the import options dialog.
@param withProperties Defaults applied to objects being placed.

```typescript
declare class Application {
    place(fileName: File | File[], showingOptions?: boolean, withProperties?: object): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
