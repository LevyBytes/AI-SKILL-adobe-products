# Timeline.getSelectedFrames

Community declaration reference: Animate/22.0.

Returns the currently selected frames as an array.
@returns Array holding 3n integers, where n equals the number of selected regions. Within each group, the first integer is the layer index, the second is the selection's starting frame, and the third is the ending frame for that selection range. The ending frame is excluded.

```typescript
declare class Timeline {
    getSelectedFrames(): number[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
