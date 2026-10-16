# Timeline.getBounds

Community declaration reference: Animate/22.0.

Gets the bounding rectangle for elements on every Timeline layer at a specified frame.
@returns Bounding rectangle covering elements on all Timeline layers for the given frame.
@param frameIndex Number of the frame whose bounds are requested. Defaults to 1, the first frame. This parameter is optional.
@param includeHiddenLayers Optional flag indicating whether bounds from hidden-layer elements are included. The default comes from the SWF publish setting value for "include hidden layers".

```typescript
declare class Timeline {
    getBounds(frameIndex?: number, includeHiddenLayers?: boolean): SimpleShape
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
