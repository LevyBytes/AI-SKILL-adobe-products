# Sequence.importMGTFromLibrary()

app.project.sequences[index].importMGTFromLibrary(libraryName, mgtName, time, vidTrackOffset, audTrackOffset)

### Description

Imports a MOGRT, or an After Effects Motion Graphics Template, from the current Premiere Pro user's Creative Cloud Libraries onto the specified video or audio track at the given time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| libraryName | String | Library name from the current PPro user's Creative Cloud Libraries. |
| mgtName | String | Name of the .mogrt inside that library. |
| time | String | Time, in ticks, where the .mogrt should be inserted. |
| vidTrackOffset | Integer | Track offset from video track zero where .mogrt content is inserted. |
| audTrackOffset | Integer | Track offset from audio track zero where .mogrt content is inserted. |

### Returns

A TrackItem object is returned.
