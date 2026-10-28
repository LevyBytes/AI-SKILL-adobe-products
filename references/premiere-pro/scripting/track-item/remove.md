# TrackItem.remove()

app.project.sequences[index].audioTracks[index].clips[index].remove(inRipple, inAlignToVideo)

app.project.sequences[index].videoTracks[index].clips[index].remove(inRipple, inAlignToVideo)

### Description

Sets the selection state of the trackItem.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| inRipple | Boolean | 1 shifts later track items earlier to close the gap; 0 leaves later items in place. |
| inAlignToVideo | Boolean | 1 makes Premiere Pro align moved track items to the nearest video-frame start. |

### Returns

0 indicates success.
