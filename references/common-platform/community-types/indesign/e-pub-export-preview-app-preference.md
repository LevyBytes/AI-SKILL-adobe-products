# EPubExportPreviewAppPreference

Community declaration reference: InDesign/2023.

EPub export preview application settings.

```typescript
declare class EPubExportPreviewAppPreference extends Preference {
    /**
    - When true, opens the document in a viewer after export.
      */
      viewDocumentAfterExport: boolean
    /**

    - Adds a preview application preference
    - @param applicationPath Full path for the application being added.
    - @param selectedForReflowableEpub Whether the app is selected for Reflowable ePub export.
    - @param selectedForFixedLayoutEpub Whether the app is selected for Fixed Layout ePub export.
    - @param withProperties Starting property values for EPubExportPreviewAppPreference.
      */
      addApplication(applicationPath: string, selectedForReflowableEpub: boolean, selectedForFixedLayoutEpub: boolean, withProperties: object): void
    /**

    - Gets the application at the given index.
    - @param indexOfApp Application index whose information should be returned.
    - @param withProperties Starting property values for EPubExportPreviewAppPreference.
      */
      getApplicationAtIndex(indexOfApp: boolean, withProperties: object): any
    /**

    - Count of applications added for ePub Preview.
      */
      getApplicationCount(): number
    /**

    - Removes the application at the specified index.
    - @param indexOfApp Application index to remove.
    - @param withProperties Starting property values for EPubExportPreviewAppPreference.
      */
      removeApplication(indexOfApp: number, withProperties: object): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
