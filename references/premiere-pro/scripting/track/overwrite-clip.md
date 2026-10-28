# Track.overwriteClip()

app.project.sequences[index].audioTracks[index].overwriteClip(projectItem, time)

app.project.sequences[index].videoTracks[index].overwriteClip(projectItem, time)

### Description

Adds a 'clip' (media segment from a ProjectItem object) to the track at the given time, replacing any media already present at that position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Project item that supplies the media. |
| time | String | Time, in ticks, at which the project item is added. |

### Returns

true.
