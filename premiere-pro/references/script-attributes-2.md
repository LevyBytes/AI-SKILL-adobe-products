# Attributes (part 2)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Sequence object — Attributes

### Sequence.audioDisplayFormat

app.project.sequences[index].audioDisplayFormat

### Description

Specifies how sequence audio time is displayed.

Use Sequence.setSettings() to set this attribute.

### Type

An enumerated value; read/write. One of:

- 200 - Audio Samples
- 201 - Milliseconds

### Sequence.audioTracks

app.project.sequences[index].audioTracks

### Description

Holds the sequence's audio Track objects as an array.

### Type

TrackCollection object; read-only.

### Sequence.end

app.project.sequences[index].end

### Description

End time of the sequence, measured in ticks.

### Type

String; read-only.

### Sequence.frameSizeHorizontal

app.project.sequences[index].frameSizeHorizontal

### Description

Horizontal frame dimension, or width, for the sequence.

Use Sequence.setSettings() to set this attribute.

### Type

Integer; read-only.

### Sequence.frameSizeVertical

app.project.sequences[index].frameSizeVertical

### Description

Vertical frame dimension, or height, for the sequence.

Use Sequence.setSettings() to set this attribute.

### Type

Integer; read-only.

### Sequence.id

app.project.sequences[index].id

### Description

Premiere Pro assigns this ordinal when the sequence is created.

For example, during one Premiere Pro session, the thirty-third sequence created in the project receives the value 33.

Note

Testing indicates that this attribute can be unstable and may return unreliable values. Prefer Sequence.sequenceID.

### Type

Integer, read-only.

### Sequence.markers

app.project.sequences[index].markers

### Description

Contains the sequence's Marker objects as an array.

### Type

MarkerCollection object, read-only;

### Sequence.name

app.project.sequences[index].name

### Description

Sequence name.

### Type

String; read/write.

### Sequence.projectItem

app.project.sequences[index].projectItem

### Description

ProjectItem object linked to the sequence.

Note

Some sequences do not expose a projectItem. Premiere Pro can generate project sequences that users do not see, and those sequences lack projectItems.

### Type

ProjectItem object; read-only.

### Sequence.sequenceID

app.project.sequences[index].sequenceID

### Description

Unique identifier created for this sequence at creation time, using the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.

### Type

String; read-only.

### Sequence.timebase

app.project.sequences[index].timebase

### Description

Tick count per frame for the sequence; when converted to seconds, it is commonly called the sequence frame duration.

### Type

String; read-only.

### Sequence.videoDisplayFormat

app.project.sequences[index].videoDisplayFormat

### Description

Specifies how sequence video time is displayed.

Use Sequence.setSettings() to set this attribute.

### Type

An enumerated value; read/write. One of:

- 100 - 24 Timecode
- 101 - 25 Timecode
- 102 - 29.97 Drop Timecode
- 103 - 29.97 Non-Drop Timecode
- 104 - 30 Timecode
- 105 - 50 Timecode
- 106 - 59.94 Drop Timecode
- 107 - 59.94 Non-Drop Timecode
- 108 - 60 Timecode
- 109 - Frames
- 110 - 23.976 Timecode
- 111 - 16mm Feet + Frames
- 112 - 35mm Feet + Frames
- 113 - 48 Timecode

### Sequence.videoTracks

app.project.sequences[index].videoTracks

### Description

Holds the sequence's video Track objects as an array.

### Type

TrackCollection object; read-only.

### Sequence.zeroPoint

app.project.sequences[index].zeroPoint

### Description

Sequence starting time, measured in ticks.

Use Sequence.setZeroPoint() to set this attribute.

### Type

String; read-only.

## Track object — Attributes

### Track.clips

app.project.sequences[index].audioTracks[index].clips

app.project.sequences[index].videoTracks[index].clips

### Description

Track item objects contained in the track, ordered by time.

### Type

TrackItemCollection object, read-only;

### Track.id

app.project.sequences[index].audioTracks[index].id

app.project.sequences[index].videoTracks[index].id

### Description

Ordinal given to the track when it is created.

### Type

Integer, read-only.

### Track.mediaType

app.project.sequences[index].audioTracks[index].mediaType

app.project.sequences[index].videoTracks[index].mediaType

### Description

Stored media kind.

### Type

String, read-only. One of:

- Audio
- Video

### Track.name

app.project.sequences[index].audioTracks[index].name

app.project.sequences[index].videoTracks[index].name

### Description

Track name.

### Type

String; read-only.

### Track.transitions

app.project.sequences[index].audioTracks[index].transitions

app.project.sequences[index].videoTracks[index].transitions

### Description

Transition objects contained in the track, ordered by time.

### Type

TrackItemCollection object, read-only;

## AudioChannelMapping object — Attributes

### AudioChannelMapping.audioChannelsType

app.project.rootItem.children[index].getAudioChannelMapping.audioChannelsType

### Description

Identifies the audio type in this channel. The possible values are 0 for `AUDIOCHANNELTYPE_M`ono, 1 for `AUDIOCHANNELTYPE_S`tereo, or 2 for `AUDIOCHANNELTYPE_51`.

### AudioChannelMapping.audioClipsNumber

app.project.rootItem.children[index].getAudioChannelMapping.audioClipsNumber

### Description

Number of audio clips tied to this audio channel.

## Time object — Attributes

### Time.seconds

myTime.seconds

### Description

Time value in seconds.

### Type

Number.

### Time.ticks

myTime.ticks

### Description

Time value in ticks.

### Type

String.

## Collection object — Attributes

| Attribute | Type | Description |
| --- | --- | --- |
| length | Integer | Count of objects in the collection. |

## ComponentCollection object — Attributes

### ComponentCollection.numItems

app.project.rootItem.children[index].videoComponents().numItems

app.project.sequences[index].audioTracks[index].clips[index].components.numItems

app.project.sequences[index].videoTracks[index].clips[index].components.numItems

### Description

Reports how many entries the ComponentCollection contains.

### Type

Integer, read-only.

## MarkerCollection object — Attributes

### MarkerCollection.numMarkers

app.project.sequences[index].markers.numMarkers

app.project.rootItem.children[index].getMarkers().numMarkers

### Description

Gives the marker-object count for the project item or sequence.

### Type

Integer, read-only.

## ProjectCollection object — Attributes

### ProjectCollection.numProjects

app.projects.numProjects

app.production.projects.numProjects

### Description

Provides the combined count of projects and productions visible in the Project panel.

### Type

Integer, read-only.

## ProjectItemCollection object — Attributes

### ProjectItemCollection.numItems

app.project.rootItem.children.numItems

### Description

Provides the item count for the active project.

### Type

Integer, read-only.

## SequenceCollection object — Attributes

### SequenceCollection.numSequences

app.project.sequences.numSequences

### Description

Reports how many sequences the active project contains.

### Type

Integer, read-only.

## TrackCollection object — Attributes

### TrackCollection.numTracks

app.project.sequences[index].audioTracks.numTracks

app.project.sequences[index].videoTracks.numTracks

### Description

Reports how many tracks are present in the sequence.

### Type

Integer, read-only.

## TrackItemCollection object — Attributes

### TrackItemCollection.numItems

app.project.sequences[index].audioTracks[index].clips.numItems

app.project.sequences[index].videoTracks[index].clips.numItems

### Description

Reports how many clips are on the track.

### Type

Integer, read-only.
