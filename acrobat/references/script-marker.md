# Marker, Markers, Mediaoffset

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Marker; Markers; MediaOffset.

## Marker

### Media and Marker APIs — Marker

What a Marker object stands for is a named spot inside a media clip pinpointing a specific time or frame number — much like a track on an audio CD or a DVD chapter. The media clip itself is what defines its markers.

Reaching a Marker object happens through the Markers.get method.

### Marker properties

### frame

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

A frame number, with 0 marking where the media starts. On most players a marker carries either a frame or a time, though not the two together.

### index

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

The index number this marker is given. Index numbers run in sequence from 0 upward, yet that order need not match the order in which the markers show up in the media.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

This marker's name. Every marker inside a media clip carries a name all its own.

Example: Fetch a marker via its index, then write that marker's name out to the console.

```
// Assume player is a MediaPlayer object
var markers = player.markers;
// Get marker with index of 2
var markers = g.get( { index: 2 } );
console.println( "The marker with index of " + markers.index
    +", has a name of " + index.name );
```

### time

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

A time given in seconds, with 0 marking where the media starts. On most players a marker carries either a frame or a time, though not the two together.

Example: Fetch a named marker, then write out how many seconds past the media's start that marker falls.

```
// Assume player is a MediaPlayer object
var g = player.markers;
// Get marker with name of "Chapter 1"
var markers = g.get( { name: "Chapter 1" } );
console.println( "The named marker "Chapter 1", occurs at time "
    + markers.time);
```

## Markers

### Media and Marker APIs — Markers

A MediaPlayer's markers property is a Markers object standing for the full set of markers found in whichever media clip is loaded into the player at the moment. A marker is a named spot inside a media clip pinpointing a specific time or frame number, much like a track on an audio CD or a DVD chapter. The media clip is what defines the markers.

app.media.Markers serves as the constructor.

### Markers properties

### player

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

MediaPlayer object

R

| --- | --- | --- | --- | --- | --- |

Which MediaPlayer object owns this Markers object.

### Markers methods

get

### get

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Finds a marker by name, by index number, by time in seconds, or by frame number, and returns the Marker object for the one requested. Inside the object parameter you should place either a name, index, time, or frame property. Alternatively, a marker name may be handed in straight as a string.

Should a time or frame be supplied, what comes back is the closest marker at or ahead of that time or frame. When the time or frame falls before every marker in the media, null comes back.

Parameters

An object or string that conveys the marker's name, index number, time in seconds, or frame number. Inside the object parameter you should place either a name, index, time, or frame property. Alternatively, a marker name may be handed in straight as a string.

Returns

Marker object or null

Marker index numbers run in sequence beginning at 0. By time or by frame they need not be ordered. Worth noting in particular: these differ from the marker numbers Windows Media Player relies on. To turn up every marker available in a media clip, run MediaPlayer.markers.get inside a loop that begins at {index: 0} and bumps the number upward until get hands back null.

Example 1: Count the number of markers on the media clip.

```
var index, i =  0;
// assume player is a MediaPlayer object.
var m = player.markers;
while ( (index = m.get( { index: i } ) ) != null ) i++;
console.println("There are " + i + " markers.");
```

Example 2: Get markers by name, index, time and frame.

```
// Get a marker by name, two different ways
var marker = player.markers.get( "My Marker" );
var marker = player.markers.get({ name: "My Marker" });
// Get a marker by index
var marker = player.markers.get({ index: 1 });
// Get a marker by time
var marker = player.markers.get({ time: 17.5 });
// Get a marker by frame
var marker = player.markers.get({ frame: 43 });
```

## MediaOffset

### Media and Marker APIs — MediaOffset

Inside a MediaClip, a MediaOffset marks one playback position, given either as a time value or as a frame count. That position is either absolute — measured from where the media starts — or stated relative to a marker you name.

You may supply the MediaOffset as the full object described here, or shorten it to a bare number, in which case the value is treated as {time: number}.

Time-based formats (QuickTime is one) and frame-based formats (Flash is another) differ, so an offset has to express its position in whichever unit the active format expects. Supplying both a time and a frame leaves the outcome undefined: the surplus value might be discarded, or a JavaScript exception might surface.

Four places consume this object: MediaPlayer. seek, MediaPlayer. where, MediaSettings. endAt, and MediaSettings. startAt .

### MediaOffset properties

### frame

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Number

R/W

| --- | --- | --- | --- | --- | --- |

Holds a frame number. When marker is supplied too, count this frame from that marker, in which case positive, negative, or zero are all valid. Without a marker, the count runs from the media's start and cannot drop below zero. The value {frame: 0} marks where the media begins.

### marker

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

String

R/W

| --- | --- | --- | --- | --- | --- |

Names one particular marker within the media.

### time

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Number

R/W

| --- | --- | --- | --- | --- | --- |

Carries a duration in seconds, or Infinity. With marker also present, count this duration from that marker as a value of zero or more, though never Infinity. Lacking a marker, the duration is measured from the media's start and may not go negative. Here the offset { time: 0 } points at the media's start.

Example: a pair of offsets, one absolute and one relative.

```
{ time: 5.4 } // offset 5.4 seconds from the beginning of media
{ marker: "Chapter 1", time: 17 } // 17 seconds after "Chapter 1"
```

Such offsets feed straight into the MediaPlayer. seek method.

```
// assume player is a MediaPlayer object
player.seek({ time: 5.4 });
player.seek({ marker: "Chapter 1", time: 17 });
```
