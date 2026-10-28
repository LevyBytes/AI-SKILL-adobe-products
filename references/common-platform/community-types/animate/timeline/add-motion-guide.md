# Timeline.addMotionGuide

Community declaration reference: Animate/22.0.

Creates a motion guide layer directly above the current layer, links the current layer to that new guide layer, and changes the current layer to type "Guided".
The call works only when the current layer has type "Normal". Layers with type "Folder", "Mask", "Masked", "Guide", or "Guided" are left unchanged.
@returns Integer zero-based index for the guide layer that was just added. Flash returns -1 when the current layer is not type "Normal".

```typescript
declare class Timeline {
    addMotionGuide(): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
