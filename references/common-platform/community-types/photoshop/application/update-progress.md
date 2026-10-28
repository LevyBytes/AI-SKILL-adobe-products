# Application.updateProgress

Community declaration reference: Photoshop/2015.5.

Advances the progress bar created by doProgress; intended for manual progress updates outside task-based tracking, and returns false if cancelled.
@param done Count of tasks already completed.
@param total Total task count.

```typescript
declare class Application {
    updateProgress(done: number, total: number): boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
