# RenderQueue

Community declaration reference: AfterEffects/26.0.

RenderQueue models render automation for one After Effects project's Render Queue panel. It exposes queue items and statuses, and its methods start, pause, or stop rendering.

```typescript
declare class RenderQueue {
    /** True while rendering is underway. */
    readonly rendering: boolean
    /* Queue-wide item total. */
    readonly numItems: number
    /* CC 2017(14.0)- */
    readonly canQueueInAME: boolean
    /* Render-queue item collection. */
    readonly items: RQItemCollection
    /* Reads or writes Notify for the full Render Queue */
    queueNotify: boolean
    /* Shows or hides the Render Queue panel. */
    showWindow(doShow: boolean): void
    /* Starts rendering and returns only after rendering finishes. */
    render(): void
    /* Pauses rendering or resumes it. */
    pauseRendering(pause: boolean): void
    /* Invokes Queue In AME */
    queueInAME(render_immediately_in_AME: boolean): void
    /* Ends the render operation. */
    stopRendering(): void
    /* Retrieves an item from the render-queue collection. */
    item(index: number): RenderQueueItem
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
