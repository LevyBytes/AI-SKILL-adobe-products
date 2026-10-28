# Document.importFile

Community declaration reference: Illustrator/2022.

Imports the file into current Ai document.
@param importFile Specifies the file to import in the current document.
@param isLinked Specifies: Is AssetLiveLinked.
@param libraryName Internal-only parameter.
@param itemName Internal-only parameter.
@param elementRef Internal-only parameter.
@param modifiedTime Internal-only parameter.
@param creationTime Internal-only parameter.
@param adobeStockId Internal-only parameter.
@param adobeStockLicense Internal-only parameter.

```typescript
declare class Document {
    importFile(
      importFile: File,
      isLinked: boolean,
      libraryName?: string,
      itemName?: string,
      elementRef?: string,
      modifiedTime?: number,
      creationTime?: number,
      adobeStockId?: string,
      adobeStockLicense?: string,
      ): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
