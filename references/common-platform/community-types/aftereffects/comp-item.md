# CompItem

Community declaration reference: AfterEffects/26.0.

CompItem models a composition and exposes operations plus composition information. In a project's item collection, access CompItem instances by their position index number.

```typescript
declare class CompItem extends AVItem {
    /** Count of layers in the composition. */
    readonly numLayers: number
    /* Camera layer active at the moment. */
    readonly activeCamera: CameraLayer | null
    /* Layer collection for the composition. */
    readonly layers: LayerCollection
    /* Composition marker property. */
    readonly markerProperty: MarkerValueProperty
    /* Layers currently selected in the composition. */
    readonly selectedLayers: Layer[]
    /* Properties currently selected in the composition. */
    readonly selectedProperties: _PropertyClasses[]
    /* Rendering plug-in modules available for use. */
    readonly renderers: string[]
    /* Count of Essential Graphics panel properties for this composition. */
    readonly motionGraphicsTemplateControllerCount: number
    /* Duration represented by one frame. */
    frameDuration: number
    /* Start time of the work area. */
    workAreaStart: number
    /* Work area length. */
    workAreaDuration: number
    /* True when shy layers are shown in the Timeline panel. */
    hideShyLayers: boolean
    /* True when this composition uses motion blur. */
    motionBlur: boolean
    /* True when Draft 3D mode is active in the Composition panel. */
    draft3d: boolean
    /* True when this composition uses time filtering. */
    frameBlending: boolean
    /* True when nested composition frame rates are kept. */
    preserveNestedFrameRate: boolean
    /* True when nested composition resolutions are kept. */
    preserveNestedResolution: boolean
    /* Composition background color. */
    bgColor: ThreeDColorValue
    /* Changes how start time appears in the Timeline panel. */
    displayStartTime: number
    /* Downsampling factor for x and y resolution in the Composition panel. */
    resolutionFactor: [number, number]
    /* Camera shutter angle value. */
    shutterAngle: number
    /* Camera shutter phase value. */
    shutterPhase: number
    /* Minimum motion blur samples per frame for Classic 3D layers, shape layers, and selected effects. */
    motionBlurSamplesPerFrame: number
    /* Maximum samples used for 2D layer motion blur. */
    motionBlurAdaptiveSampleLimit: number
    /* Reads or writes the composition's Essential Graphics panel name property. */
    motionGraphicsTemplateName: string
    /* Rendering plug-in module used for this composition. */
    renderer: string
    /* True when this composition uses drop-frame timecode. */
    dropFrame: boolean
    /* Frame value at the composition beginning. */
    displayStartFrame: number
    /* Makes and returns a copy of this composition. */
    duplicate(): CompItem
    /* Returns a composition layer. */
    layer(index: number): Layer
    layer(otherLayer: Layer, relIndex: number): Layer
    layer(name: string): Layer
    /* Shows this composition in a Composition panel. */
    openInViewer(): Viewer | null
    /* Saves the specified frame as a png file. */
    saveFrameToPng(time: number, file: File): void
    /* Opens this Composition in the Preview panel, then adjusts preview zoom and exposure. */
    ramPreviewTest(unknown: any, zoom: number, exposure: number): void
    /* Exports this composition as a Motion Graphics template. */
    exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting: boolean, file_path?: string): boolean
    /* Displays the composition inside the Essential Graphics panel. */
    openInEssentialGraphics(): void
    /* Returns one Essential Graphics panel property name. */
    getMotionGraphicsTemplateControllerName(index: number): string
    /* Assigns a name to one Essential Graphics panel property. */
    setMotionGraphicsControllerName(index: number, newName: string): string
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
