# Flash.browseForFolderURL

Community declaration reference: Animate/22.0.

Opens a Browse for Folder dialog box for folder selection.
@returns Folder URL as a file:/// URI, or null when the dialog box is canceled.
@param description Optional description string for the Browse For Folder dialog box. Without this value, "Select Folder." is used as the dialog box title.

```typescript
declare class Flash {
    browseForFolderURL(description?: string): string | null
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
