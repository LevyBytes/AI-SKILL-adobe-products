# PresetItem

Community declaration reference: Animate/22.0.

A presetItem object models one preset or folder inside the Motion Presets panel (Window > Motion Presets). presetPanel.items holds the array of presetItem objects.
Every presetItem property is read only. For actions such as delete, rename, or move, call methods on the presetPanel object.

```typescript
declare class PresetItem {
    /**
    - Boolean value showing whether Flash installed the item (true) or it is custom content created by you or another user (false). When true, treat the item as "read-only"; it cannot be moved, deleted, or handled by similar operations.
      */
      readonly isDefault: boolean
    /**
    - Boolean value showing whether the Motion Presets panel item is a folder (true) or a preset (false).
      */
      readonly isFolder: boolean
    /**
    - Integer level for the item within the Motion Presets panel folder structure. Level 0 is used by the Default Folder and Custom Presets folder.
      */
      readonly level: number
    /**
    - String name for the preset or folder, excluding path information.
      */
      readonly name: string
    /**
    - Indicates whether a Motion Presets panel folder is currently expanded (true) or not expanded (false).
    - For non-folder items, this property is true. Use presetItem.isFolder to distinguish folders from presets.
      */
      readonly open: boolean
    /**
    - String path to the item in the Motion Presets panel folder tree, including the item name.
      */
      readonly path: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
