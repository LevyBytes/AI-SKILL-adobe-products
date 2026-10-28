# Timeline.insertFrames

Community declaration reference: Animate/22.0.

Adds the requested number of frames at the supplied index.
With no parameters, behavior is:
- If one or more frames are selected, Flash inserts that count of frames at the first selected frame in the current layer. For example, selecting frames 6 through 10 (five frames total) adds five frames at Frame 6 in the layer that contains the selected frames.
- When nothing is selected, Flash adds one frame at the playhead position across every layer.
When parameters are supplied, behavior is:
- If only numFrames is supplied, Flash inserts that many frames at the current frame on the current layer.
- If numFrames is supplied and bAllLayers is true, Flash adds that frame count at the current frame across every layer.
- If all three parameters are supplied, Flash inserts the specified number of frames at the specified index (frameIndex); bAllLayers decides whether the addition applies only to the current layer or to all layers.
For a specified or selected regular frame, insertion happens on that frame. As an example, in a span of 10 frames numbered 1-10, selecting Frame 5, or passing 4 for frameIndex, adds a frame at Frame 5 and changes the span length to 11 frames. When Frame 5 is selected and is a keyframe, the method inserts a frame at Frame 6 whether or not the next frame is also a keyframe.
@param numFrames Optional integer specifying how many frames to insert. If omitted, Flash inserts frames at the current selection in the current layer.
@param bAllLayers Boolean that, when true, inserts the number of frames in numFrames into every layer; false (the default) inserts frames into the current layer. This parameter is optional.
@param frameNumIndex Zero-based index for the frame where a new frame should be inserted. This parameter is optional.

```typescript
declare class Timeline {
    insertFrames(numFrames?: number, bAllLayers?: boolean, frameNumIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
