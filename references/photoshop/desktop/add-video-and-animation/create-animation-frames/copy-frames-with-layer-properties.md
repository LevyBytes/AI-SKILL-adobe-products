# Copy frames with layer properties

Copy Photoshop animation frames while keeping layer visibility, position, opacity, and effects intact.

When frame layer properties need to remain consistent, copying a frame with those properties can save setup time. This workflow is useful in frame-based animation when position, opacity, effects, or other layer attributes should be retained while only small content or placement changes are made between frames. It also helps when styling must remain stable across frames.

In the Timeline panel, select the frame that has the layer properties to reuse.

Select the panel menu icon, then select Copy Frame.

Select the frame after which the copied frame should be inserted.

Select the panel menu icon, select Paste Frame, and choose one of these options:

- Replace Frames: swaps the selected frames for the copied frames. Photoshop does not add new layers. In the destination frames, each existing layer takes the properties from the corresponding copied layer.
- Paste Over Selection: inserts the pasted frame contents into the image as new layers. In the same image, this choice doubles the image's layer count.
- Paste Before Selection: inserts the copied frames ahead of the selected frame. Between images, Photoshop adds new layers to the image; in the new frames, pasted layers alone remain visible while the original layers stay hidden.
- Paste After Selection: inserts the copied frames after the selected frame. Between images, Photoshop adds new layers to the image; in the new frames, pasted layers alone remain visible while the original layers stay hidden.

Use Link Added Layers so the Layers panel links the pasted layers. This works only when frames are pasted into another document. Use it if the pasted layers should move together as one unit.

Select OK.
