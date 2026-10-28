# FrontEnd event listeners

Community declaration reference: MediaEncoder/23.0.

```typescript
declare interface FrontEnd {
    addEventListener(
    type: "onBatchItemCreationFailed",
    listener: (eventObj: AMEBatchItemCreationFailedEvent) => void,
    useCapture?: boolean
    ): void;
    removeEventListener(): any
}
```

Source: [MediaEncoder/23.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/MediaEncoder/23.0/index.d.ts).
