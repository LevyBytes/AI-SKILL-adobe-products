# Timeline.setSelectedFrames

Community declaration reference: Animate/22.0.

Selects a frame range in the current layer, or replaces the selected frames with the selection array supplied to this method.
@param startFrameIndex Zero-based index for the first frame to set.
@param endFrameIndex Zero-based index for the selection end; endFrameIndex is the frame after the final frame included in the range.
@param bReplaceCurrentSelection Boolean that, when true, clears the current frame selection before selecting the specified frames. Default: true.

```typescript
declare class Timeline {
    setSelectedFrames(
        startFrameIndex: number,
        endFrameIndex: number,
        bReplaceCurrentSelection?: boolean,
        ): void
}
```

Selects a frame range in the current layer, or replaces the selected frames with the selection array supplied to this method.
@param selectionList Array of three integers in the form returned by timeline.getSelectedFrames().
@param bReplaceCurrentSelection Boolean that, when true, clears the current frame selection before selecting the specified frames. Default: true.

```typescript
declare class Timeline {
    setSelectedFrames(selectionList: number[], bReplaceCurrentSelection?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
