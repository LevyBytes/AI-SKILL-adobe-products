# Application.doProgressSegmentTask

Community declaration reference: Photoshop/2015.5.

Reserves part of the unused progress bar for a subtask and returns false if cancelled. Use this with task lists whose run times differ.
@param segmentLength Length of the current task.
@param done Total length of all completed tasks.
@param total Combined length for every task.
@param javaScriptString JavaScriptString that runs.

```typescript
declare class Application {
    doProgressSegmentTask(
      segmentLength: number,
      done: number,
      total: number,
      javaScriptString: string,
      ): boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
