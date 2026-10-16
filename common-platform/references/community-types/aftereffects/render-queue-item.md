# RenderQueueItem

Community declaration reference: AfterEffects/26.0.

RenderQueueItem represents one render-queue entry and exposes the settings for that render. Create it by adding a composition to the Render Queue through RQItemCollection.

```typescript
declare class RenderQueueItem {
    /** Total Output Modules attached to this item. */
    readonly numOutputModules: number
    /* Date when rendering started for this item. */
    readonly startTime: Date | null
    /* Seconds elapsed in this item's current render. */
    readonly elapsedSeconds: number | null
    /* Composition rendered by this item. */
    readonly comp: CompItem
    /* Output Modules collection for this item. */
    readonly outputModules: OMCollection
    /* Render Settings template names. */
    readonly templates: string[]
    /* Current render status for the item. */
    readonly status: RQItemStatus
    /* Sets Notify for each separate item in the Render Queue */
    queueItemNotify: boolean
    /* True when this item participates when the queue starts. */
    render: boolean
    /* Composition start time used for rendering. */
    timeSpanStart: number
    /* Composition duration used for rendering. */
    timeSpanDuration: number
    /* Number of frames omitted while rendering this item. */
    skipFrames: number
    /* Callback function invoked during rendering whenever this item's status changes. */
    onStatus: string | null
    /* Item log type. */
    logType: LogType
    getSetting(key: string): string | number
    getSettings(format: GetSettingsFormat): object
    setSetting(key: string, value: string | number): void
    setSettings(settings: object): void
    /* Returns an Output Module for this item. */
    outputModule(index: number): OutputModule
    /* Deletes the item from the render queue. */
    remove(): void
    /* Stores a named Render Settings template. */
    saveAsTemplate(name: string): void
    /* Uses a Render Settings template. */
    applyTemplate(templateName: string): void
    /* Creates a duplicate of this item. */
    duplicate(): RenderQueueItem
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
