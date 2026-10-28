# PresetPanel.selectItem

Community declaration reference: Animate/22.0.

Changes selection state for an item in the Motion Presets panel, with an option to replace the existing selection.
@returns true when the item is selected or deselected successfully; otherwise false.
@param namePath String containing the path and item name to select from the Motion Presets panel.
@param bReplaceCurrentSelection Boolean value choosing whether the specified item replaces the existing selection (true) or is added to it (false). Optional; defaults to true.
@param bSelect Boolean value choosing select (true) or deselect (false). Optional; defaults to true. Passing false for bSelect ignores bReplaceCurrentSelection.

```typescript
declare class PresetPanel {
    selectItem(namePath: string, bReplaceCurrentSelection?: boolean, bSelect?: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
