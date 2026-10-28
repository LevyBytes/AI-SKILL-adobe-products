# PresetPanel.importItem

Community declaration reference: Animate/22.0.

Imports a preset into the Motion Presets panel from a specified XML file. The namePath path must already exist in the panel.
Use presetPanel.exportItem() to create XML files that are valid for import.
Without namePath, the imported preset goes into the Custom Presets folder and uses the imported file name without the XML extension.
@returns true when the file imports successfully; otherwise false.
@param fileURI String written as a file:/// URI that identifies the XML file to import as a Motion Presets panel preset.
@param namePath Optional string specifying the destination folder for the imported file and the name to assign it.

```typescript
declare class PresetPanel {
    importItem(fileURI: string, namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
