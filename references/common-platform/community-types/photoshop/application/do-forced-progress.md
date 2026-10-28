# Application.doForcedProgress

Community declaration reference: Photoshop/2015.5.

Runs work with a progress bar and forces that bar to show, bypassing heuristics that would normally hide it, such as during very short tasks. Other progress APIs must be called periodically to refresh the progress bar and permit cancellation.
@param progressString Progress-window message text.
@param javaScriptString JavaScriptString that runs.

```typescript
declare class Application {
    doForcedProgress(progressString: string, javaScriptString: string): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
