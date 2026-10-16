# Timeline.setFrameProperty

Community declaration reference: Animate/22.0.

Writes a Frame object property on the selected frames.
@param property String naming the property to modify. For the full set of properties and values, consult the Property summary for the Frame object.
Read-only values such as frame.duration and frame.elements cannot be assigned with this method.
@param value Value to assign to the property. To identify the proper value and type, see the Property summary for the Frame object.
@param startFrameIndex Zero-based index for the first frame number to modify. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
@param endFrameIndex Optional zero-based index for the first frame where modification stops. The frame range includes frames before endFrameIndex, not endFrameIndex itself. If startFrameIndex is supplied without endFrameIndex, endFrameIndex uses that same value.

```typescript
declare class Timeline {
    setFrameProperty(
        property: string,
        value: any,
        startFrameIndex?: number,
        endFrameIndex?: number,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
