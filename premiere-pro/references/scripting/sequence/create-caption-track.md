# Sequence.createCaptionTrack()

app.project.sequences[index].createCaptionTrack(projectItem, startAtTime, [captionFormat])

### Description

Builds a caption track in the sequence from caption data stored in a ProjectItem object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Captions source clip, such as .srt. |
| startAtTime | Float | Seconds offset from the beginning of the sequence. |
| captionFormat | Sequence.`CAPTION_FORMAT_` enum | Format for the created caption track. If omitted, Premiere Pro uses Sequence.`CAPTION_FORMAT_SUBTITLE`. One of: - Sequence.`CAPTION_FORMAT_SUBTITLE` - Subtitle - Sequence.`CAPTION_FORMAT_608` - CEA-608 - Sequence.`CAPTION_FORMAT_708` - CEA-708 - Sequence.`CAPTION_FORMAT_TELETEXT` - Teletext - Sequence.`CAPTION_FORMAT_OPEN_EBU` - EBU Subtitle - Sequence.`CAPTION_FORMAT_OP42` - OP-42 - Sequence.`CAPTION_FORMAT_OP47` - OP-47 |

### Returns

Returns a boolean; true on success.

### Example

```javascript
app.project.activeSequence.createCaptionTrack(projectItem, 0, Sequence.CAPTION_FORMAT_708);
```
