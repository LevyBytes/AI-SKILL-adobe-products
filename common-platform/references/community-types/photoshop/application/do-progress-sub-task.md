# Application.doProgressSubTask

Community declaration reference: Photoshop/2015.5.

Reserves part of the unused progress bar for a subtask and returns false if cancelled. Use this with a simple task list where run times are equal.
@param index 0-based index for the current task.
@param limit Total task count.
@param javaScriptString JavaScriptString that runs.

```typescript
declare class Application {
    doProgressSubTask(index: number, limit: number, javaScriptString: string): boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
