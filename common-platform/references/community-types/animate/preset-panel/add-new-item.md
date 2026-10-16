# PresetPanel.addNewItem

Community declaration reference: Animate/22.0.

When one motion tween is selected on the Stage, this method adds that motion to the Motion Presets panel under the requested folder and name. The namePath path must already exist in the panel.
If namePath already matches a preset, nothing changes and false is returned.
Without namePath, the item is placed in the Custom Presets folder as "Custom preset n," with n increasing for each item added this way.
@returns true when the item is added successfully; otherwise false.
@param namePath Optional string naming the path and item name to add to the Motion Presets panel.

```typescript
declare class PresetPanel {
    addNewItem(namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
