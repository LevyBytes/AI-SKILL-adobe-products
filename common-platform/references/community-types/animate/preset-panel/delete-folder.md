# PresetPanel.deleteFolder

Community declaration reference: Animate/22.0.

Removes the named folder and all of its subfolders from the Motion Presets panel folder tree, including presets inside those folders. Folders under Default Presets folder cannot be deleted.
When folderPath is omitted, the currently selected folders are removed.
Note: Folder deletion happens without a user confirmation prompt and cannot be undone.
@returns true when the folder or folders are deleted successfully; otherwise false.
@param folderPath Optional string identifying the Motion Presets panel folder to delete.

```typescript
declare class PresetPanel {
    deleteFolder(folderPath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
