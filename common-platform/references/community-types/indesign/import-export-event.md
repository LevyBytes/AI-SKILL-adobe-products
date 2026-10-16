# ImportExportEvent

Community declaration reference: InDesign/2023.

Event object for import or export activity.

```typescript
declare class ImportExportEvent extends Event {
    /**
    - Fires after a ImportExportEvent export completes. The event bubbles and cannot be canceled.
      */
      static readonly AFTER_EXPORT: string
    /**

    - Fires after a file is imported into a ImportExportEvent. The event bubbles and cannot be canceled.
      */
      static readonly AFTER_IMPORT: string
    /**

    - Fires before a ImportExportEvent export starts. The event bubbles and may be canceled.
      */
      static readonly BEFORE_EXPORT: string
    /**

    - Fires before a file is imported into a ImportExportEvent. The event bubbles and may be canceled.
      */
      static readonly BEFORE_IMPORT: string
    /**

    - Fires after a ImportExportEvent export is canceled or fails. The event bubbles and cannot be canceled.
      */
      static readonly FAILED_EXPORT: string
    /**

    - File format used for import/export.
      */
      readonly format: string
    /**

    - Full path for the ImportExportEvent, including the ImportExportEvent name.
      */
      readonly fullName: File
    /**

    - Sets whether dialogs and alerts appear while scripts run.
      */
      userInteractionLevel: UserInteractionLevels
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
