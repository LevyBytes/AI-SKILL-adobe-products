# FrontEnd.addXMLToBatch

Community declaration reference: MediaEncoder/23.0.

Queues Final Cut Pro xml for batch processing.
@param xmlPath Path for a Final Cut Pro xml file.
@param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
@param outputFolderPath Optional. When outputFolderPath is empty, the output file name is derived from the XML file path.
@returns True when the item is added to the batch; otherwise false.

```typescript
declare interface FrontEnd {
    addXMLToBatch(xmlPath: string, presetPath: string, outputFolderPath?: string): boolean
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
