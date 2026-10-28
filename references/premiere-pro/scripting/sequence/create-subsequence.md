# Sequence.createSubsequence()

app.project.sequences[index].createSubsequence([ignoreTrackTargeting])

### Description

Creates a subsequence from the original sequence, using the range between the in point and the out point.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ignoreTrackTargeting | Boolean | Lets the new sequence bypass original track targeting. Optional; defaults to false. |

### Returns

Returns the Sequence object that was created.

Note

This differs from nesting: the newly-created sequence is not placed back into the original sequence. The function below shows how to nest.

### Example

```javascript
function nestSelection() {
    var activeSequence = app.project.activeSequence;
    var selection = activeSequence.getSelection();

    if (!selection.length) {
        return;
    }

    var trackId = selection[0].parentTrackIndex;
    var originalInPoint = activeSequence.getInPointAsTime();
    var originalOutPoint = activeSequence.getOutPointAsTime();
    var start = selection[0].start;
    var end = selection[selection.length - 1].end;
    activeSequence.setInPoint(start.seconds);
    activeSequence.setOutPoint(end.seconds);

    var nestedSequence = activeSequence.createSubsequence(true);

    activeSequence.videoTracks[trackId].overwriteClip(nestedSequence.projectItem, start.seconds);
    activeSequence.setInPoint(originalInPoint.seconds);
    activeSequence.setOutPoint(originalOutPoint.seconds);

    return nestedSequence;
}
```
