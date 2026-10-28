# ClipboardPreference

Community declaration reference: InDesign/2023.

Preferences for the clipboard.

```typescript
declare class ClipboardPreference extends Preference {
    /**
    - When true, PDF is copied to the clipboard.
      */
      copyPDFToClipboard: boolean
    /**

    - When true, pasted objects cut or copied from different layers keep their layer assignments.
      */
      pasteRemembersLayers: boolean
    /**

    - When true, PDF is pasted when available.
      */
      preferPDFWhenPasting: boolean
    /**

    - When true, pasted text includes text attributes.
      */
      preferStyledTextWhenPasting: boolean
    /**

    - When true, PDF data remains on the system clipboard after the application exits.
      */
      preservePdfClipboardAtQuit: boolean
    /**

    - When true, paste options are shown during paste.
      */
      showPasteOptions: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
