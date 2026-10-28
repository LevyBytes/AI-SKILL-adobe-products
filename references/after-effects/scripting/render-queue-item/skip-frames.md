# RenderQueueItem.skipFrames

app.project.renderQueue.item(index).skipFrames

### Description

The count of frames to bypass while rendering this item — handy for running render tests quicker than a full pass. At 0 nothing is skipped and every frame renders as usual. At 1 every second frame is dropped, which amounts to "rendering on twos." Larger values bypass more frames still. Either way the overall length of time holds steady. As an instance, with skip set to 1, a sequence output ends up with half as many frames, while in movie output each frame lasts twice as long.

### Type

Integer, in the range [0..99]; read/write.
