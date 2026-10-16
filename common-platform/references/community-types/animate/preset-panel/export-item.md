# PresetPanel.exportItem

Community declaration reference: Animate/22.0.

Exports the current preset selection, or the named preset, to an XML file. Only presets can be exported; attempting to export a folder fails. The method also fails when it would overwrite an existing disk file.
If fileURI ends with a slash (/) and therefore omits a filename, the exported file uses the preset's own name. When namePath is omitted, the currently selected preset is exported. See the example below.
@returns true when the preset is exported successfully; otherwise false.
@param fileURI file:/// URI string for the export destination; it may include both directory path and filename. See "Description," below, for more information.
@param namePath Optional string naming the path and item to select from the Motion Presets panel.

```typescript
declare class PresetPanel {
    exportItem(fileURI: string, namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
