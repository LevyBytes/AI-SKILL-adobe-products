# Anywhere, Encoder, Marker, Metadata ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Anywhere; Encoder; Marker; Metadata; Production; Project; ProjectManager; SourceMonitor; ProjectItem; TrackItem; Component; ComponentParam; Sequence; Track; AudioChannelMapping; Time; Collection; Objects.

## Anywhere

### Anywhere object

app.anywhere

### Description

The Anywhere object covers available Adobe Anywhere or Team Projects servers.

## Encoder

### Encoder object

app.encoder

### Description

The encoder object exposes Adobe Media Encoder for local rendering outside Premiere Pro.

Warning

On Mac, app.encoder does not work in Premiere Pro 14.3.1 - 15. Versions 22 and later fix it. See here.

## Marker

### Marker object

app.project.activeSequence.markers.getFirstMarker()

app.project.rootItem.children[index].getMarkers().getFirstMarker()

### Description

Project items and sequences both have Marker objects for their markers.

## Metadata

### Metadata object

app.metadata

### Description

description placeholder

## Production

### Production object

app.production

### Description

Through the Production object, ExtendScript can access and change productions, insert projects, create projects and bins, and move existing Production projects to Trash.

## Project

### Project object

app.project

### Description

Represents a Premiere Pro project. Starting with Premiere Pro 12.0, more than one project can be open simultaneously.

## ProjectManager

### ProjectManager object

app.projectManager.options

### Description

ProjectManager exposes Premiere Pro's Project Manager controls for project consolidation, media transfer, and transcoding.

## SourceMonitor

### SourceMonitor object

app.sourceMonitor

### Description

The SourceMonitor object maps to Premiere Pro's Source monitor.

## ProjectItem

### ProjectItem object

app.project.rootItem.children[index]

### Description

Every project entry, including the project root, is represented by a ProjectItem.

## TrackItem

### TrackItem object

app.project.sequences[index].audioTracks[index].clips[index]

app.project.sequences[index].videoTracks[index].clips[index]

### Description

A TrackItem represents an item placed on an audio or video track inside a Sequence object.

## Component

### Component object

app.project.sequences[index].audioTracks[index].clips[index].components[index]

app.project.sequences[index].videoTracks[index].clips[index].components[index]

### Description

The Component object represents an item added or applied to a trackItem.

## ComponentParam

### ComponentParam object

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index]

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index]

### Description

ComponentParam represents a parameter tied to a component applied to a TrackItem object.

Note

For localization work, compare ZStrings to locate corresponding keys.

Example En/De file locations: C:\Program Files\Adobe\Adobe Premiere Pro 2024\Dictionaries\de_DE\zdictionary_PPRO_de_DE.dat - ("â€¦anti-Flimmer Filter") C:\Program Files\Adobe\Adobe Premiere Pro 2024\Dictionaries\en_DE\zdictionary_PPRO_en_US.dat - ("â€¦anti-flicker Filter")

## Sequence

### Sequence object

app.project.sequences[index]

### Description

A Sequence object models a Premiere Pro sequence, also known as a timeline.

## Track

### Track object

app.project.sequences[index].audioTracks[index]

app.project.sequences[index].videoTracks[index]

### Description

A Track object represents one audio or video track inside a Sequence object.

## AudioChannelMapping

### AudioChannelMapping object

app.project.rootItem.children[index].getAudioChannelMapping

### Description

An AudioChannelMapping object describes the audio channel mapping used for a particular ProjectItem object.

## Time

### Time object

myTime = new Time()

### Description

Use this object to represent time. Internally, Premiere Pro calculates the value in ticks, with 254016000000 ticks per second. The same time can be read through other representations, including a timecode string.

## Collection

### Collection object

Similar to an array, a collection groups related objects or values and lets you access entries by index. Most collection objects are read-only, though; you do not assign their contents directly, because the contents update automatically when objects are created or deleted.

## Objects

### Collection object — Objects

- ComponentCollection object - todo.
- MarkerCollection object - collection containing Marker objects for a ProjectItem object and Sequence object.
- ProjectCollection object - collection containing Project objects.
- ProjectItemCollection object - collection containing ProjectItem objects.
- SequenceCollection object - collection containing Sequence objects.
- TrackCollection object - collection containing Track objects.
- TrackItemCollection object - collection containing TrackItem objects.

## ComponentCollection

### ComponentCollection object

app.project.rootItem.children[index].videoComponents()

app.project.sequences[index].audioTracks[index].clips[index].components

app.project.sequences[index].videoTracks[index].clips[index].components

Info

ComponentCollection handles a group of Component entries. Because it subclasses Collection object, Collection methods and attributes remain usable along with the members documented below.

## MarkerCollection

### MarkerCollection object

app.project.sequences[index].markers

app.project.rootItem.children[index].getMarkers()

Use MarkerCollection for the Marker objects attached to a ProjectItem object or a Sequence object.

Info

MarkerCollection extends Collection object, so the Collection methods and attributes apply here in addition to the members shown below.

## ProjectCollection

### ProjectCollection object

app.projects

app.production.projects

ProjectCollection groups Project objects.

Info

ProjectCollection extends Collection object, which means Collection methods and attributes are available together with the members documented below.

## ProjectItemCollection

### ProjectItemCollection object

app.project.rootItem.children

ProjectItemCollection groups the ProjectItem objects that belong to the active project.

Info

ProjectItemCollection subclasses Collection object, so Collection methods and attributes apply along with the members listed below.

## SequenceCollection

### SequenceCollection object

app.project.sequences

SequenceCollection groups every Sequence object in the active project.

Info

SequenceCollection subclasses Collection object, so Collection methods and attributes remain available beside the members documented below.

## TrackCollection

### TrackCollection object

app.project.sequences[index].audioTracks

app.project.sequences[index].videoTracks

TrackCollection groups Track objects within a sequence.

Info

TrackCollection extends Collection object; Collection methods and attributes can be used together with the members listed below.

## TrackItemCollection

### TrackItemCollection object

app.project.sequences[index].audioTracks[index].clips

app.project.sequences[index].videoTracks[index].clips

TrackItemCollection groups TrackItem objects placed on a track.

Info

TrackItemCollection subclasses Collection object, so Collection methods and attributes are available along with the members documented below.
