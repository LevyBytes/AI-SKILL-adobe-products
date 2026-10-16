# ProjectItem.createSubClip()

app.project.rootItem.children[index].createSubClip(name, startTime, endTime, hasHardBoundaries, takeAudio, takeVideo)

### Description

Builds a project item from a subclip taken from the current item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name for the new subclip. |
| startTime | String | Subclip start time, in ticks. |
| endTime | String | Subclip end time, in ticks. |
| hasHardBoundaries | Integer | 1 prevents the user from extending in and out. |
| takeVideo | Integer | 1 uses video from the source. |
| takeAudio | Integer | 1 uses audio from the source. |

### Returns

Project item for the new subclip, or 0 if creation fails.
