# IdleEvent

Community declaration reference: InDesign/2023.

Idle event object.

```typescript
declare class IdleEvent extends Event {
    /**
    - Fires during idle time for this IdleEvent. No bubbling phase is used. Cancellation is unavailable.
      */
      static readonly ON_IDLE: string
    /**

    - Time allocation for this task when the event fired.
      */
      readonly timeAllocated: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
