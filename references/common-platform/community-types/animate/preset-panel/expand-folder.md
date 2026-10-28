# PresetPanel.expandFolder

Community declaration reference: Animate/22.0.

Changes the expansion state of the currently selected Motion Presets panel folder or folders. To act on folders outside the current selection, provide folderPath.
@returns true when the folder or folders are expanded or collapsed successfully; otherwise false.
@param bExpand Boolean value selecting expand (true) or collapse (false). Optional; defaults to true.
@param bRecurse Boolean value selecting whether subfolders are also expanded or collapsed (true) or left alone (false). Optional; defaults to false.
@param folderPath Optional string path for the folder to expand or collapse.

```typescript
declare class PresetPanel {
    expandFolder(bExpand?: boolean, bRecurse?: boolean, folderPath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
