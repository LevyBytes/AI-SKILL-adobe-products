# PresetPanel.renameItem

Community declaration reference: Animate/22.0.

Renames the currently selected preset or folder to newName. The operation succeeds only when exactly one preset or folder inside Custom Presets folder is selected. The method fails in these cases:
- Selection is empty.
- More than one item is selected.
- The selected item resides in the Default Presets folder.
- newName already names an item in the same location.
@returns true when the preset or folder is renamed successfully; otherwise false.
@param newName String giving the new preset or folder name.

```typescript
declare class PresetPanel {
    renameItem(newName: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
