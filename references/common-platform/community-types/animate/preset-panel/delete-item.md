# PresetPanel.deleteItem

Community declaration reference: Animate/22.0.

Removes the named preset from the Motion Presets panel. When namePath is omitted, the currently selected presets are removed. Items under Default Presets folder cannot be deleted.
Note: Item deletion happens without a user confirmation prompt and cannot be undone.
@returns true when the item or items are deleted successfully; otherwise false.
@param namePath Optional string containing the path and name for the Motion Presets panel item to delete.

```typescript
declare class PresetPanel {
    deleteItem(namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
