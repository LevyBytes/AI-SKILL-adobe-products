# TaskState

Community declaration reference: InDesign/2023.

States reported for a task.

```typescript
declare enum TaskState {
    /**
    - Task stopped because cancellation happened before start or during execution.
      */
      CANCELLED = 1700029292,
    /**

    - A cancel request has reached the task, but it has not stopped yet.
      */
      CANCELLING = 1700029281,
    /**

    - Execution finished, whether it succeeded or ended with errors.
      */
      COMPLETED = 1700029296,
    /**

    - The task is queued and waiting for execution scheduling.
      */
      QUEUED = 1699837285,
    /**

    - The task is currently running.
      */
      RUNNING = 1700033141,
    /**

    - The task is in a waiting state.
      */
      WAITING = 1700225396,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
