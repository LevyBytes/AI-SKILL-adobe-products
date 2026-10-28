# PresetPanel.moveToFolder

Community declaration reference: Animate/22.0.

Moves the named item into the requested folder.
Passing an empty string ("") for folderPath moves items into the Custom Presets folder. When namePath is omitted, the current selection is moved.
Items cannot be moved into or out of the Default Presets folder.
@returns true when the items move successfully; otherwise false.
@param folderPath String path for the Motion Presets panel folder that will receive the item or items.
@param namePath Optional string containing the path and item name to move.

```typescript
declare class PresetPanel {
    moveToFolder(folderPath: string, namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
