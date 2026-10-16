# Timeline.getFrameProperty

Community declaration reference: Animate/22.0.

Reads one property value from the selected frames.
@returns Value of the requested property, or undefined when the selected frames do not all share that property value.
@param property String naming the property whose value should be retrieved. See the Property summary for the Frame object for the full property list.
@param startframeIndex Zero-based index for the first frame number whose value should be retrieved. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
@param endFrameIndex Optional zero-based index for the end of the frame range to select. The range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.

```typescript
declare class Timeline {
    getFrameProperty(
        property: string,
        startframeIndex?: number,
        endFrameIndex?: number,
        ): string | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
