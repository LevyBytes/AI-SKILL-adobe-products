# PresetPanel.newFolder

Community declaration reference: Animate/22.0.

Adds a folder to the Motion Presets panel folder tree. Only one new folder level can be created per call. For example, if folderPath is "Custom Presets/My First Folder/My Second Folder", then "Custom Presets/My First Folder" must already exist in the folder tree.
If folderPath is not supplied, the first level below "Custom Presets" receives a folder named "Untitled folder n"; n increments each time a folder is added this way.
@returns true when the folder is added successfully; otherwise false.
@param folderPath Optional string describing where to create the new Motion Presets panel folder and what to call it.

```typescript
declare class PresetPanel {
    newFolder(folderPath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
