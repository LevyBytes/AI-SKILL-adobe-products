# Application.doProgressTask

Community declaration reference: Photoshop/2015.5.

Reserves part of the unused progress bar for a subtask and returns false if cancelled.
@param taskLength Fraction of unused progress bar to reserve; valid from 0.0 through 1.0.
@param javaScriptString JavaScriptString that runs.

```typescript
declare class Application {
    doProgressTask(taskLength: number, javaScriptString: string): boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
