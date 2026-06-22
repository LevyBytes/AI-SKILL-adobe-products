# Expression Language Reference (part 3)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Property attributes and methods (expression reference)

value

Return type: Number, Array, or String.

Hands back a property's value at the current time.

valueAtTime(t)

Return type: Number or Array.

Argument type: t is a Number.

Hands back a property's value at the time you name, in seconds.

Suppose you want each frame's property value picked at random from a set of four. Drop those four values as keyframes at 0, 1, 2, and 3 seconds, then attach the following expression to the property:

valueAtTime(random(4))

velocity

Return type: Number or Array.

Hands back the temporal velocity value at the current time. With spatial properties like Position, it hands back the tangent vector value instead. The output shares the property's dimension.

velocityAtTime(t)

Return type: Number or Array.

Argument type: t is a Number.

Hands back the temporal velocity value at the time you name.

speed

Return type: Number.

Hands back a 1D, positive speed value matching how fast the property changes at the default time. Reserved for spatial properties only.

speedAtTime(t)

Return type: Number.

Argument type: t is a Number.

Hands back the spatial speed value at the time you name.

wiggle(freq, amp, octaves=1, amp_mult=.5, t=time)

Return type: Number or Array.

Argument type: freq, amp, octaves, amp_mult, and t are Numbers.

Jitters (wiggles) the property's value at random.

freq sets the rate, counted in wiggles per second.

amp sets the swing, measured in the units of whatever property it acts on.

octaves counts how many octaves of noise get stacked together, governing the wiggle's level of detail. Push it past its default of 1 to fold in higher frequencies, or pull it lower to fold in amplitude harmonics.

amp_mult is the multiplier applied to amp at every octave, which dictates how quickly the harmonics taper. It defaults to 0.5; nudge it toward 1 so the harmonics ride at the base frequency's amplitude, or toward 0 so less detail enters.

t marks the base start time, defaulting to the current time. Supply it when you want the result to sample the property's wiggle at some other moment.

Example: position.wiggle(5, 20, 3, .5) yields roughly 5 wiggles each second averaging about 20 pixels. On top of that primary wiggle, two further tiers of fine wiggles appear, running at 10 and 20 wiggles per second with sizes of 10 and 5 pixels in turn.

Placed on a two-dimensional property such as Scale, the example below wiggles both dimensions by an identical amount:

v = wiggle(5, 10); [v[0], v[0]]

Placed on a two-dimensional property, this example wiggles along the y-axis alone:

freq = 3; amp = 50; w = wiggle(freq,amp); [value[0],w[1]];

temporalWiggle(freq, amp, octaves=1, amp_mult=.5, t=time)

Return type: Number or Array.

Argument type: freq, amp, octaves, amp_mult, and t are Numbers.

Reads the property at a wiggled time. Here freq is the frequency in wiggles per second, amp the amplitude in units of the applied property, octaves the count of noise octaves summed together, amp_mult the factor amp is multiplied by per octave, and t the base start time. The function only carries meaning when the sampled property is animated, since it shifts the sampling time rather than the value. Example: scale.temporalWiggle(5, .2)

smooth(width=.2, samples=5, t=time)

Return type: Number or Array.

Argument type: width, samples, and t are Numbers.

Evens out the property's values across time, trading large, short-lived swings for smaller, more uniformly spread ones. It pulls this off by running a box filter over the property's value at the named time. The width value sets the time window (in seconds) the filter averages across. The samples value is the count of discrete samples spaced evenly over time; raise it for more smoothness (at a performance cost). As a rule, keep samples odd so the current time's value joins the average. Example: position.smooth(.1, 5)

loopIn(type="cycle", numKeyframes=0)

Return type: Number or Array.

Cycles through a span of time measured forward from the layer's first keyframe in the direction of its Out point. Playback of the loop begins at the layer's In point. Which span gets repeated is set by the numKeyframes value: the looped span runs from the first keyframe up to the (numKeyframes+1) keyframe. As an illustration, loopIn("cycle", 3) repeats the span between the first and fourth keyframes. When left at its default of 0, every keyframe is included in the loop.

The keyframe-looping methods exist so you can repeat a run of keyframes, and they work on the majority of properties. Some properties are off-limits — those that the Timeline panel can't express as plain numeric values, namely the Source Text property, path shape properties, and the Levels effect's Histogram property. If a keyframe count or duration is larger than allowed, it gets clamped down to the maximum legal value; if it's too small, the result is a steady, unchanging loop.

loop type

result

cycle

(default) Repeats the specified segment.

pingpong

Repeats the specified segment, alternating between forward and backward.

offset

Repeats the specified segment, but offsets each cycle by the difference in the value of the property at the start and end of the segment, multiplied by the number of times the segment has looped.

continue

Does not repeat the specified segment, but continues to animate a property based on the velocity at the first or last keyframe. For example, if the last keyframe of a Scale property of a layer is 100%, the layer continues to scale from 100% to the Out point, instead of looping directly back to the Out point. This type does not accept a keyframes or duration argument.

| --- | --- |

loopOut(type="cycle", numKeyframes=0)

Return type: Number or Array.

Cycles through a span of time measured backward from the layer's last keyframe toward its In point. The loop runs until the layer's Out point is reached. How big the looped span is depends on the keyframe count you supply. numKeyframes sets how many keyframe segments to repeat, with the range counted backward starting at the last keyframe. To illustrate, loopOut("cycle", 1) repeats the span between the last keyframe and the one before it. A default of 0 means every keyframe takes part in the loop. Consult the loopIn entry for further detail.

loopInDuration(type="cycle", duration=0)

Return type: Number or Array.

Cycles through a span of time measured forward from the layer's first keyframe in the direction of its Out point. Playback of the loop begins at the layer's In point. Here the span to repeat is governed by the duration you provide. The duration value gives how many composition seconds belong to the looped span, with that range counted from the first keyframe. For instance, loopInDuration("cycle",1) repeats the opening second of the whole animation. With the default of 0, the looped span starts at the layer Out point. Consult the loopIn entry for further detail.

loopOutDuration(type="cycle", duration=0)

Return type: Number or Array.

Cycles through a span of time measured backward from the layer's last keyframe toward its In point. The loop runs until the layer's Out point is reached. Here the span to repeat is governed by the duration you provide. The duration value gives how many composition seconds belong to the looped span, with that range counted backward from the last keyframe. For instance, loopOutDuration("cycle", 1) repeats the closing second of the whole animation. With the default of 0, the looped span starts at the layer In point. Consult the loopIn entry for further detail.

key(index)

Return type: Key or MarkerKey.

Argument type: index is a Number.

Hands back the Key or MarkerKey object identified by its number. As an example, key(1) gives back the first keyframe.

key(markerName)

Return type: MarkerKey.

Argument type: markerName is a String.

Hands back the MarkerKey object that carries this name. Apply it only to marker properties.

nearestKey(time)

Return type: Key or MarkerKey.

Hands back whichever Key or MarkerKey object sits closest to a specified time.

nextKey(time)

Return type: Key or MarkerKey.

Argument type: time is a Number.

Hands back the keyframe or marker that follows time. Should none exist past time — meaning time sits at or beyond the final keyframe — the last keyframe or marker is returned instead.

To illustrate, the expression below gives the interval remaining before the next keyframe on the active property:

const next = thisProperty.nextKey(time);

next.time - time;

previousKey(time)

Return type: Key or MarkerKey.

Argument type: time is a Number.

Hands back the keyframe or marker located at or prior to time. Should none exist at or before time, the first keyframe or marker is returned instead.

To illustrate, the expression below gives the interval elapsed since the previous keyframe on the active property:

const prev = thisProperty.previousKey(time);

time - prev.time;

numKeys

Return type: Number.

Gives the count of keyframes on a property. On a marker property, it gives the count of markers instead.

Note

Splitting the Position property's dimensions into separate components through the Separate Dimensions command alters the keyframe count, which in turn alters what this method gives back.

name

Return type: String.

Gives the name belonging to the property or property group.

active

Return type: Boolean

Reports whether the property is active at the moment being evaluated. Being disabled, not applicable, or overridden by some other setting can leave a property inactive.

enabled

Return type: Boolean

Reports whether the property is switched on. On properties that carry an enable switch, the value mirrors the present on/off state.

propertyGroup(countUp = 1)

Return type: Group.

Hands back a group of properties positioned relative to the property the expression lives on. Say you attach the propertyGroup(1) expression to a brush stroke's Rotation property — it points at the Transform property group, the one that holds Rotation. Switch to propertyGroup(2) and it points instead at the Brush property group. The technique lets you build relationships within the property hierarchy that don't depend on names, which pays off particularly when you duplicate properties carrying expressions.

For propertyGroup, the numProperties method gives back how many properties sit in the property group.

The sample below gives back the property count for the group holding the property the expression is attached to:

thisProperty.propertyGroup(1).numProperties

propertyIndex

Return type: Number.

Gives back a property's index measured against the other properties within its property group, counting property groups nested inside masks, effects, text animators, selectors, shapes, trackers, and track points.

## Project properties (expression reference)

Expression method:

- thisProject object thisProject - Stands for the very project the expression lives inside.

Type:

Project object; read-only

- Project fullPath attribute thisProject.fullPath - Holds the OS-specific full file path together with the project's file name. Where the project remains unsaved, an empty string comes back instead.

Type: String; read-only.

- Project bitsPerChannel attribute thisProject.bitsPerChannel - Reports the project's bit depth per channel (bpc), the figure chosen under Project Settings > Color Management. It will be 8, 16, or 32. Mirrors the scripting project attribute app.project.bitsPerChannel.

Type Number; read-only.

- Project linearBlending attribute thisProject.linearBlending - Reflects whether the Blend Colors Using 1.0 gamma option under Project Settings > Color Management is turned on. Mirrors the scripting project attribute app.project.linearBlending.

Type: Boolean; read-only.

## Key attributes and methods (expression reference)

Reaching into a Key object lets you pull its time, index, and value properties. To illustrate, this expression hands you the value of the third Position keyframe: position.key(3).value.

Written on an Opacity property that has keyframes, the next expression disregards the keyframe values entirely, relying only on where the keyframes fall in time to decide when a flash fires: d = Math.abs(time - nearestKey(time).time); easeOut(d, 0, .1, 100, 0)

```
  d = Math.abs(time - nearestKey(time).time);
  easeOut(d, 0, .1, 100, 0)
```

value

Return type: Number or Array.

Gives back the keyframe's value.

time

Return type: Number.

Gives back the keyframe's time.

index

Return type: Number.

Gives back the keyframe's index.

## MarkerKey attributes (expression reference)

The same methods serve to read values off both composition markers and layer markers. Layer markers are reached via the thisLayer.marker object, while composition markers come through the thisComp.marker object.

As far as expressions are concerned, a marker counts as a special variety of Key object, so methods like nearestKey(time) reach markers too, and markers carry time and index attributes as well. Note that the index attribute isn't the marker's number (its name) — it's the keyframe index, which captures where the marker falls in order along the time ruler.

Every value you're able to set in the Composition Marker or Layer Marker dialog box is reachable from expressions. Attach this expression to a text layer's Source Text property and it reports, for whichever layer marker lies closest to the current time, these values — time, duration, index, comment (name), chapter, URL, frame target, cue point name — and on top of that, whether the marker stands for an event cue point:

```
  m = thisLayer.marker.nearestKey(time);
  s = "time:" + timeToCurrentFormat(m.time) + "\r" +
      "duration: " + m.duration + "\r" +
      "key index: " + m.index + "\r" +
      "comment:" + m.comment + "\r" +
      "chapter:" + m.chapter + "\r" +
      "URL:" + m.url + "\r" +
      "frame target: " + m.frameTarget + "\r" +
      "cue point name: " + m.cuePointName + "\r" +
      "Event cue point? " + m.eventCuePoint + "\r";
  for (param in m.parameters){
       s += "parameter: " + param + " value: " + m.parameters[param] + "\r";
  }
  s
```

Since a footage item's XMP metadata can be turned into layer markers for any layer built on that item, expressions are able to work with XMP metadata. See XMP metadata in After Effects for details.

duration

Return type: Number.

Duration, in seconds, of marker.

comment

Return type: String.

Contents of Comment field in marker dialog box.

chapter

Return type: String.

Contents of Chapter field in marker dialog box.

url

Return type: String.

Contents of URL field in marker dialog box.

frameTarget

Return type: String.

Contents of Frame Target field in marker dialog box.

eventCuePoint

Return type: Boolean.

Setting for cue point type in marker dialog box. True for Event; false for Navigation.

cuePointName

Return type: String.

Contents of cue point Name field in marker dialog box.

parameters

Return type: associative array of String values.

Contents of Parameter Name and Parameter Value fields in marker dialog box.

To illustrate, given a parameter called "background color", the value at the closest marker can be reached with this expression:

thisComp.marker.nearestKey(time).parameters["background color"]

## Text attributes (expression reference)

Reach for text expressions when you want to govern how text layers and Motion Graphics templates are styled. They make it possible to tie several titles together and restyle them in one go, hold font, size, and formatting steady from one layer to the next, push sweeping changes across text properties, and so on.

Find out more about reworking text styles and text properties by way of the expression controls.

## MarkerValue.protectedRegion (expression reference)

Expression method:

thisComp.marker.key(index).protectedRegion

Description:

A value of true makes the composition marker act as a protected region.

Type:

Boolean; read only.

## Expression access to paths points on shapes, masks, and brush strokes (expression reference)

With expressions you can read and write the x and y coordinates of a path's points (its vertices) for the following:

- Layer masks
- Bezier shapes
- Brush strokes on the Paint and Roto Brush & Refine Edge effects.

Expression methods:

- Path points() method: {pathProperty}.points(t = time) Get the x,y coordinates of all points on a path. For a layer mask's path points, the coordinates are measured from the layer's origin at its top-left corner. For a Bezier shape's path points, they are measured from the anchor point of the path's shape group — for instance, Transform: Shape 1 > Anchor Point. For a brush stroke's path points, they are measured from where the stroke begins, with the first point sitting at [0,0]. You may optionally name the time at which the path is sampled. This method can be fed into createPath() as its points parameter when you duplicate a path.

Parameters:

t

Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time).

| --- | --- |

Returns:

Array of number pair arrays, rounded to the fourth decimal place.

- Path inTangents() method: {pathProperty}.inTangents(t = time) Get the x,y coordinates of the incoming tangent handle for all points on a path. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them. That is, [0,0] leaves the incoming tangent with no curvature at all. You can feed this method into createPath() as its inTangents parameter while duplicating a path. You may optionally name the time at which the path is sampled.

Parameters:

t

Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time).

| --- | --- |

Returns:

Array of number pair arrays, rounded to the fourth decimal place.

- Path outTangents() method: {pathProperty}.outTangents(t = time) Get the x,y coordinates of the outgoing tangent handle for all points on a path. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them - [0,0] leaves the outgoing tangent with no curvature at all. You can feed this method into createPath() as its outTangents parameter while duplicating a path. You may optionally name the time at which the path is sampled.

Parameters:

t

Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time).

| --- | --- |

Returns:

Array of number pair arrays, rounded to the fourth decimal place.

- Path isClosed() method: {pathProperty}.isClosed()Determines if the path is open or closed. Returns true if the path is closed, false if the path is open. You can feed this method into createPath() as its is_closed parameter while duplicating a path.

Parameters:

None

Returns:

Boolean

- Path pointOnPath() method {pathProperty}.pointOnPath(percentage = 0.5, t = time)Get the x,y coordinates of an arbitrary point along a path.That point is stated as a fraction of the path's arc-length, where 0% marks the first point and 100% marks the last. On a closed path, 0% and 100% land on the same coordinates. Working in arc-length percentage keeps the speed along the path even. Apart from 0% and 100%, a percentage need not line up with the Bezier points on the path - on a three-point path the middle point won't necessarily fall at 50%. A further consequence: an open path and a closed path built from the same points won't return matching coordinates for a given percentage, since the closed path adds extra length. You may optionally name the time at which the path is sampled.

Parameters:

percentage

Number between 0 and 1, optional. The percentage along the arc-length of the path to sample. Values smaller than 0 and larger than 1 are clipped. Default is 0.5.

t

Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time).

| --- | --- |

Returns:

A number pair array.

- Path tangentOnPath() method {pathProperty}.tangentOnPath(percentage = 0.5, t = time) Get the calculated x,y coordinates of the outgoing tangent handle for an arbitrary point along a path. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them - [0,0] leaves the outgoing tangent with no curvature. To get the incoming tangent handle, invert this value (multiply its x,y coordinates by -1). The tangent's owning point is stated as a fraction of the path's arc-length. Coordinates from tangentOnPath() are derived from that owning point and will not match those from outTangents() when a user-defined point happens to sit at the same arc-length percentage. Between the owning point's coordinates and the tangentOnPath() coordinates the straight-line distance is always 1. Scale the returned coordinates up to lengthen the tangent, e.g. (myPath.tangentOnPath() \* 100). You may optionally name the time at which the path is sampled.

Parameters:

percentage

Number between 0 and 1, optional. The percentage along the arc-length of the path to sample. Values smaller than 0 and larger than 1 are clipped. Default is 0.5.

t

Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time).

| --- | --- |

Returns:

A number pair array.

- Path normalOnPath() method {pathProperty}.normalOnPath(percentage = 0.5, t = time) Get the calculated x,y coordinates of the normal for an arbitrary point along a path. A normal's coordinate values are given as an offset from the coordinates of the point that owns them - the value [0,0] coincides with the owning point itself. The normal's owning point is stated as a fraction of the path's arc-length. For how arc-length percentage works, read the pointOnPath() method's description. Coordinates from normalOnPath() are derived from its owning point. Between the owning point's coordinates and the normalOnPath() coordinates the straight-line distance is always 1. Scale the returned coordinates up to lengthen the normal, for example (myPath.normalOnPath() \* 100). You may optionally name the time at which the path is sampled.

Parameters:

percentage

Number between 0 and 1, optional. The percentage along the arc-length of the path to sample. Values smaller than 0 and larger than 1 are clipped. Default is 0.5.

t

Number, optional. The composition time (in seconds) at which to sample the path. Default is time (the current time).

| --- | --- |

Returns:

A number pair array.

- Path createPath() method {pathProperty}.createPath(points = [[0,0], [100,0], [100,100], [0,100]], inTangents = [], outTangents = [], is_closed = true) Builds a path object out of a collection of points and tangents. An array of number pair arrays holding their x,y coordinates defines the points. That array has to be length 1 at minimum and may run longer. The points' incoming and outgoing tangent handles are defined by an array of number pair arrays giving their x,y offset coordinates. Each tangent array's length has to match the points parameter exactly. A tangent's coordinate values are given as an offset from the coordinates of the point that owns them - [0,0] leaves the incoming tangent with no curvature. A path's points(), inTangents(), outTangents(), and isClosed() methods can be supplied to createPath()'s points, inTangents, outTangents, and is_closed parameters to clone a path. You can also pass a single path's points and tangents into createPath() with tweaks to produce a different outcome. For instance, the expression below strips the curves out of Mask 1 by withholding the inTangents and outTangents parameters:

myMask = mask("Mask 1").path; myMask.createPath(myMask.points());

The next example feeds in the points and tangents of Mask 1 and turns it into an open path by setting is_closed to false:

myMask = mask("Mask 1").path; myMask.createPath(myMask.points(), myMask.inTangents(), myMask.outTangents(), false);

points

An array of length 1 or greater containing number pair arrays representing the [x,y] coordinates of the path points. Required unless no parameters are passed (i.e., createPath()). Default is [[0,0], [100,0], [100,100], [0,100]].

is_closed

Boolean, optional. Determines if the mask is closed. If true, the last point will be connected to the first point. Default is true.

inTangents
