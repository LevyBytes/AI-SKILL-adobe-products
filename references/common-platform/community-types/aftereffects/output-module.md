# OutputModule

Community declaration reference: AfterEffects/26.0.

For a RenderQueueItem, OutputModule describes one rendered file or sequence and exposes file-output attributes and methods.

```typescript
declare class OutputModule {
    /** User-interface name for this output module. */
    readonly name: string
    /* Templates available for this output module. */
    readonly templates: string[]
    /* Path and name for the file to be rendered. */
    file: File
    /* Action performed after rendering. */
    postRenderAction: PostRenderAction
    /* True writes all source footage XMP metadata into the output file. */
    includeSourceXMP: boolean
    /* Drops the current OutputModule entry from its RenderQueueItem. */
    remove(): void
    /* Writes a template from the current OutputModule. */
    saveAsTemplate(name: string): void
    /* Applies the named template to this output module. */
    applyTemplate(templateName: string): void
    getSetting(key: string): string | number
    getSettings(format?: GetSettingsFormat): {
    "Audio Bit Depth": string
    "Audio Channels": string
    "Audio Sample Rate": string
    Channels: string
    Color: string
    Crop: string
    "Crop Bottom": string
    "Crop Left": string
    "Crop Right": string
    "Crop Top": string
    Depth: string
    Format: string
    "Include Project Link": string
    "Include Source XMP Metadata": string
    "Lock Aspect Ratio": string
    "Output Audio": string
    "Output File Info": string
    "Post-Render Action": string
    Resize: string
    "Resize Quality": string
    "Resize to": object
    "Starting #": string
    "Use Comp Frame Number": string
    "Use Region of Interest": string
    "Video Output": string
    }
    setSetting(key: string, value: string | number): void
    setSettings(settings: object): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
