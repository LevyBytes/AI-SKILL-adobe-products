# Methods (part 5)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Sequence object — Methods

| --- | --- | --- |

### Sequence.getWorkAreaInPoint()

app.project.sequences[index].getWorkAreaInPoint()

### Description

Reads this sequence's work area in point as seconds.

### Parameters

None.

### Returns

String.

### Sequence.getWorkAreaInPointAsTime()

app.project.sequences[index].getWorkAreaInPointAsTime()

### Description

Reads this sequence's work area in point.

### Parameters

None.

### Returns

A Time object is returned.

### Sequence.getWorkAreaOutPoint()

app.project.sequences[index].getWorkAreaOutPoint()

### Description

Reads this sequence's work area out point as seconds.

### Parameters

None.

### Returns

String.

### Sequence.getWorkAreaOutPointAsTime()

app.project.sequences[index].getWorkAreaOutPointAsTime()

### Description

Reads this sequence's work area out point.

### Parameters

None.

### Returns

A Time object is returned.

### Sequence.importMGT()

app.project.sequences[index].importMGT(path, time, vidTrackOffset, audTrackOffset)

### Description

Imports a MOGRT, or an After Effects Motion Graphics Template, onto the specified video or audio track at the given time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Absolute path for a valid MOGRT (.mogrt file) created in After Effects. |
| time | String | Time, in ticks, where the .mogrt should be inserted. |
| vidTrackOffset | Integer | Track offset from video track zero where .mogrt content is inserted. |
| audTrackOffset | Integer | Track offset from audio track zero where .mogrt content is inserted. |

### Returns

A TrackItem object is returned.

### Sequence.importMGTFromLibrary()

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

### Sequence.insertClip()

app.project.sequences[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)

### Description

Places a clip in the sequence at the specified time on the selected video and audio tracks.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Project item that supplies the media. |
| time | Time | Time at which the project item is added. |
| vTrackIndex | Integer | Zero-based track index for video insertion. |
| aTrackIndex | Integer | Zero-based track index for audio insertion. |

### Returns

Boolean; true on success.

### Sequence.isDoneAnalyzingForVideoEffects()

app.project.sequences[index].isDoneAnalyzingForVideoEffects()

### Description

Reports whether video-effects analysis has finished for the sequence.

### Parameters

None.

### Returns

Boolean.

### Sequence.isWorkAreaEnabled()

app.project.sequences[index].isWorkAreaEnabled()

### Description

Reports whether this sequence has the work area bar enabled.

Note

The work area bar starts disabled. Turn it on by checking 'Work Area Bar' through the hamburger menu for the sequence.

### Parameters

None.

### Returns

Boolean.

### Sequence.linkSelection()

app.project.sequences[index].linkSelection()

### Description

Links the selected audio and video clips in the sequence.

### Parameters

None.

### Returns

Boolean; true on success.

### Sequence.overwriteClip()

app.project.sequences[index].overwriteClip(projectItem, time, vTrackIndex, aTrackIndex)

### Description

Adds a clip to the sequence at the specified time on the chosen video and audio tracks, replacing clips that already occupy that position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Project item that supplies the media. |
| time | String | Time, in seconds, at which the project item is added. |
| vTrackIndex | Integer | Zero-based track index for video insertion. |
| aTrackIndex | Integer | Zero-based track index for audio insertion. |

### Returns

Returns a boolean; true on success.

### Sequence.performSceneEditDetectionOnSelection()

app.project.sequences[index].performSceneEditDetectionOnSelection(actionDesired, applyCutsToLinkedAudio, sensitivity)

### Description

Runs cut detection on the selected sequence content.

### Parameters

Parameter

Type

Description

actionDesired

String

One of: - CreateMarkers - ApplyCuts

applyCutsToLinkedAudio

Boolean

Whether detected cuts also affect audio linked to the selection.

sensitivity

String

One of: - LowSensitivity - MediumSensitivity - HighSensitivity

| --- | --- | --- |

### Returns

Returns a boolean; true on success.

### Sequence.setInPoint()

app.project.sequences[index].setInPoint(time)

### Description

Sets a new in point for the sequence.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Integer or Time object | Seconds-based replacement point value. |

### Returns

Null.

### Sequence.setOutPoint()

app.project.sequences[index].setOutPoint(time)

### Description

Sets a new out point for the sequence.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Integer or Time object | Seconds-based replacement point value. |

### Returns

Null.

### Sequence.setPlayerPosition()

app.project.sequences[index].setPlayerPosition(time)

### Description

Moves the sequence CTI (Current Time Indicator) to the supplied position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | String | New time in ticks. |

### Returns

Returns a boolean; true on success.

### Sequence.setSettings()

app.project.sequences[index].setSettings(sequenceSettings)

### Description

Updates the current sequence settings. [Editorial: keeping the obvious behavior explicit here. -bbb]

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequenceSettings | Object | Sequence settings object returned by Sequence.getSettings(). |

### Returns

Returns a boolean; true on success.

### Sequence.setWorkAreaInPoint()

app.project.sequences[index].setWorkAreaInPoint(time)

### Description

Sets a new work area in point for the sequence.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Integer or Time object | Seconds-based replacement point value. |

### Returns

Returns a boolean; true on success.

### Sequence.setWorkAreaOutPoint()

app.project.sequences[index].setWorkAreaOutPoint(time)

### Description

Sets a new work area out point for the sequence.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Integer or Time object | Seconds-based replacement point value. |

### Returns

Returns a boolean; true on success.

### Sequence.unlinkSelection()

app.project.sequences[index].unlinkSelection()

### Description

Unlinks the selected audio and video clips in the sequence.

### Parameters

None.

### Returns

Returns a boolean; true on success.

### Sequence.setZeroPoint()

app.project.sequences[index].setZeroPoint(newZeroPoint)

### Description

Sets the sequence starting time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newZeroPoint | String | New zero point in ticks. |

### Returns

Returns a boolean; true on success.

## Track object — Methods

### Track.insertClip()

app.project.sequences[index].audioTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)

app.project.sequences[index].videoTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)

### Description

Adds a 'clip' (media segment from a ProjectItem object) to the track at the given time. The media is inserted at that position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Project item that supplies the media. |
| time | String | Time, in ticks, at which the project item is added. |
| vTrackIndex | Integer | Zero-based track index for video insertion. |
| aTrackIndex | Integer | Zero-based track index for audio insertion. |

### Returns

No return value.

### Track.isMuted()

app.project.sequences[index].audioTracks[index].isMuted()

app.project.sequences[index].videoTracks[index].isMuted()

### Description

Gets the track's current mute state.

### Parameters

None.

### Returns

Returns true when the track is currently muted; otherwise returns false.

### Track.overwriteClip()

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

### Track.setMute()

app.project.sequences[index].audioTracks[index].setMute(isMuted)

app.project.sequences[index].videoTracks[index].setMute(isMuted)

### Description

Sets the track mute state.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| isMuted | Integer | 1 mutes the track; 0 unmutes it. |

### Returns

Returns 0 on success.

## AudioChannelMapping object — Methods

### AudioChannelMapping.setMappingForChannel()

app.project.rootItem.children[index].setMappingForChannel(channelIndex, sourceChannelIndex)

### Description

Assigns a source channel to the requested channel index.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| channelIndex | Integer | Channel index that will receive the mapping. |
| sourceChannelIndex | Integer | Source-channel index to map. |

### Returns

Returns true on success, or false when the mapping is unsupported.

## Time object — Methods

### Time.getFormatted()

myTime.getFormatted(frameRate, displayFormat)

### Description

Returns the supplied Time value as a string formatted with the requested display format.

### Parameters

Parameter

Type

Description

frameRate

Time object

Time object whose duration is one frame at the frame rate being used.

displayFormat

Integer

Display format to apply. One of: - `TIMEDISPLAY_24T`imecode = 100; - `TIMEDISPLAY_25T`imecode = 101; - `TIMEDISPLAY_2997D`ropTimecode = 102; - `TIMEDISPLAY_2997N`onDropTimecode = 103; - `TIMEDISPLAY_30T`imecode = 104; - `TIMEDISPLAY_50T`imecode = 105; - `TIMEDISPLAY_5994D`ropTimecode = 106; - `TIMEDISPLAY_5994N`onDropTimecode = 107; - `TIMEDISPLAY_60T`imecode = 108; - `TIMEDISPLAY_F`rames = 109; - `TIMEDISPLAY_23976T`imecode = 110; - `TIMEDISPLAY_16`mmFeetFrames = 111; - `TIMEDISPLAY_35`mmFeetFrames = 112; - `TIMEDISPLAY_48T`imecode = 113; - `TIMEDISPLAY_A`udioSamplesTimecode = 200; - `TIMEDISPLAY_A`udioMsTimecode = 201;

| --- | --- | --- |

### Returns

String.

### Time.setSecondsAsFraction()

myTime.setSecondsAsFraction(numerator, denominator)

### Description

Sets the Time object to the quotient of numerator divided by denominator.

### Parameters

The numerator and denominator are both integers.

### Returns

Boolean; true on success.

## Collection object — Methods

| Method | Return Type | Description |
| --- | --- | --- |
| [] | Object | Gets an object from the collection by index number. Index 1 is the first object. |

## MarkerCollection object — Methods

### MarkerCollection.createMarker()

app.project.sequences[index].markers.createMarker(time)

app.project.rootItem.children[index].getMarkers().createMarker(time)

### Description

Adds a Marker object to the targeted project item or sequence.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Float | Time value, in seconds, for the marker placement. |

### Returns

Returns a Marker object on success.

### MarkerCollection.deleteMarker()

app.project.sequences[index].markers.deleteMarker(marker)

app.project.rootItem.children[index].getMarkers().deleteMarker(marker)

### Description

Deletes the specified marker object from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| marker | Marker object | Marker object that should be removed from the collection. |

### Returns

Boolean.

### Examples

Delete every marker on the active sequence

```
var markers = app.project.activeSequence.markers;
var marker = markers.getFirstMarker();
var count = markers.numMarkers;

while (marker) {
    markers.deleteMarker(marker);
    marker = markers.getFirstMarker();
}

alert('Removed ' + count.toString() + ' markers');
```

### MarkerCollection.getFirstMarker()

app.project.sequences[index].markers.getFirstMarker()

app.project.rootItem.children[index].getMarkers().getFirstMarker()

### Description

Returns, by seconds order, the earliest Marker object from the selected ProjectItem object or Sequence object.

### Parameters

None.

### Returns

Marker object or undefined.

### MarkerCollection.getLastMarker()

app.project.sequences[index].markers.getLastMarker()

app.project.rootItem.children[index].getMarkers().getLastMarker()

### Description

Returns, by seconds order, the final Marker object from the selected ProjectItem object or Sequence object.

### Parameters

None.

### Returns

Marker object or undefined.

### MarkerCollection.getNextMarker()

app.project.sequences[index].markers.getNextMarker(currentMarker)

app.project.rootItem.children[index].getMarkers().getNextMarker(currentMarker)

### Description

Starting from the supplied marker, returns the next marker in seconds order.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| currentMarker | Marker object | Marker object used as the lookup starting point. |

### Returns

Marker object or undefined.

### MarkerCollection.getPrevMarker()

app.project.sequences[index].markers.getPrevMarker(currentMarker)

app.project.rootItem.children[index].getMarkers().getPrevMarker(currentMarker)

### Description

Starting from the supplied marker, returns the prior marker in seconds order.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| currentMarker | Marker object | Marker object used as the reverse lookup starting point. |

### Returns

Marker object or undefined.
