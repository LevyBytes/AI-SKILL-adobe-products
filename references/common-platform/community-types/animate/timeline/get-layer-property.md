# Timeline.getLayerProperty

Community declaration reference: Animate/22.0.

Reads one property value from the selected layers.
@returns Requested property value. Flash inspects layer properties to determine the type. If the specified layers do not all share that value, Flash returns undefined.
@param property String naming the property value to retrieve. For available properties, consult the Property summary for the Frame object.

```typescript
declare class Timeline {
    getLayerProperty(property: string): any | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
