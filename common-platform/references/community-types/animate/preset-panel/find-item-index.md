# PresetPanel.findItemIndex

Community declaration reference: Animate/22.0.

Looks up the index location of an item in the Motion Presets panel.
@returns Integer index of the requested preset in the presetPanel.items array. Without presetName, the index for the currently specified preset is returned. The method returns -1 in these cases:
- presetName is omitted and no preset is selected.
- presetName is omitted while multiple presets are selected.
- presetName is provided but no panel item matches it.
@param presetName Optional string giving the preset name whose index value should be returned.

```typescript
declare class PresetPanel {
    findItemIndex(presetName?: string): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
