# App

Community declaration reference: MediaEncoder/23.0.

App

```typescript
interface App {
    readonly buildNumber: string
    readonly launchTime: number
    assertToConsole(): boolean
    bringToFront(): boolean
    cancelTask(p0: number): boolean
    getBatchEncoder(): object
    getBuildNumber(): string
    getEncoderHost(): object
    getExporter(): object
    getFrontend(): FrontEnd
    getScriptEngineName(): string
    getWatchFolder(): object
    isBlackVideo(p0: string): boolean
    isSilentAudio(p0: string): boolean
    quit(): boolean
    renderFrameSequence(p0: string, p1: string, p2: boolean, p3: number): boolean
    scheduleTask(p0: string, p1: number, p2: boolean): number
    simulateUIEvents(p0: string): boolean
    wait(p0: number): boolean
    write(p0: string): boolean
    addEventListener(): any
    removeEventListener(): any
    dispatchEvent(): any
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
