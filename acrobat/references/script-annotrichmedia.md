# Annotrichmedia, Annot3D

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AnnotRichMedia; Annot3D.

## AnnotRichMedia

### JavaScript APIs — AnnotRichMedia

A rich media annotation is captured by an AnnotRichMedia object — the kind of annotation you build with the 3D, Flash, Video, or Sound tool on the Multimedia toolbar. To obtain one, call either getAnnotRichMedia or getAnnotsRichMedia on the Doc object.

### AnnotRichMedia properties

### activated

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

boolean

R/W

| --- | --- | --- | --- | --- | --- |

A Boolean reporting whether the annotation is live and interactive (true) or merely showing its poster artwork (false). Flip it to true to switch the annotation on.

### context3D

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

global object or undefined

R

| --- | --- | --- | --- | --- | --- |

When activated holds true and subtype equals "3D", reading this gives back the annotation’s global scripting context — a global object that wraps the 3D scene (the JS 3D API Reference goes deeper). Otherwise, whenever activated is false or subtype is anything but "3D", you get undefined.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

string

R

| --- | --- | --- | --- | --- | --- |

The name of the rich media annotation.

### page

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

integer

R

| --- | --- | --- | --- | --- | --- |

Zero-based number of the page that holds the annotation.

### rect

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

array

R/W

| --- | --- | --- | --- | --- | --- |

Hands back four numbers [xll, yll, xur, yur] — the lower-left x, lower-left y, upper-right x, and upper-right y, in default user space — that mark the rectangle locating the annotation on its page.

### subtype

Version (Key)

Save-Prefs

Security

Product

Type

Access

9.0

No

No

All

string

R

| --- | --- | --- | --- | --- | --- |

The annotation’s subtype, reported as one of "3D", "Flash", "Video", or "Sound".

### AnnotRichMedia methods

### callAS

Version (Key)

Save-Prefs

Security

Product

9.0

No

No

All

| --- | --- | --- | --- |

Reaches into ActionScript through the ExternalInterface convention to invoke a method that was exposed there (via ExternalInterface.addCallback in ActionScript). Whatever that named method hands back — given as the first parameter — is what callAS passes along.

Note

There is also a call method on the FlashMovie object, documented in the JS 3D API Reference, that relies on the very same mechanism as callAS.

Parameters

Parameter

Description

methodName

The string name of the exposed method in ActionScript to be called.

arguments

A series of arguments of arbitrary type to be passed to the ActionScript method being called.

| --- | --- |

Returns

The return value from the called function, which can be of any type.

Available from Acrobat 9 forward, the Multimedia Operation is an Action type aimed at rich media annotations, covering Play, Pause, Rewind, Next Chapter Point, Previous Chapter Point, Seek to time, Mute, Volume, and Custom actions. You can drive those very same operations through callAS as well.

Listed next are some of the custom ActionScript methods surfaced by the Multimedia Operations dialog box that callAS can invoke.

Custom ActionScript Methods

multimedia_play():void Play the video or sound clip from the current location.

multimedia_pause():void Pause playback of the current media.

multimedia_rewind():void Rewind the media clip to the beginning. This method does not pause the clip.

multimedia_nextCuePoint():void Move the play head to the next cue (chapter) point.

multimedia_prevCuePoint():void Move the play head to the previous (chapter) point.

multimedia_seek(time:Number):void Move the play location to an offset of time from the beginning of the media, where time is measured in seconds.

multimedia_mute():void Mute the audio of the media.

multimedia_volume(volume:Number):void Set the volume level. The volume is a number between 0 and 1 inclusive. A value of 0 mutes the audio, while a volume of 1 sets the volume level to the maximum level.

Example: Picture a video already placed in the open PDF via the Video tool, carrying several Chapter Points that may have come from the Video tab of the Insert Video dialog box. The snippets below are Run a JavaScript actions wired to buttons that drive that video, and they target the first rich media annotation sitting on the first page.

```
// Code for a Play button
var rm = this.getAnnotsRichMedia(0)[0];
if (!rm.activated) rm.activated=true;
rm.callAS("multimedia_play");

// Code for a Pause button
var rm = this.getAnnotsRichMedia(0)[0];
if (rm.activated) { rm.callAS("multimedia_pause"); }

// Code for a Next Chapter Point button
var rm = this.getAnnotsRichMedia(0)[0];
if (rm.activated) { rm.callAS("multimedia_nextCuePoint"); }

// Code for a simple Volume button, set volume to the 50% level.
var rm = this.getAnnotsRichMedia(0)[0];
if (rm.activated) { rm.callAS("multimedia_volume", 0.5); }
```

## Annot3D

### JavaScript APIs — Annot3D

A particular Acrobat 3D annotation is represented by an Annot3D object — one made with the Acrobat 3D Tool. You fetch it through the getAnnot3D and getAnnots3D methods on the Doc object.

### Annot3D properties

### activated

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

boolean

R/W

| --- | --- | --- | --- | --- | --- |

A Boolean telling you whether the annotation is currently rendering the 3D artwork (true) or only the posterboard picture (false).

See the context3D property.

### context3D

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

global object

R

| --- | --- | --- | --- | --- | --- |

While activated is true, this returns the 3D annotation’s context, a global object holding the 3D scene; the JS 3D API Reference has the full story. Should activated be false, it returns undefined instead.

### innerRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

array

R/W

| --- | --- | --- | --- | --- | --- |

Four numbers [x ll, y ll, x ur, y ur] giving the lower-left x, lower-left y, upper-right x, and upper-right y coordinates in the annotation’s own coordinate system — where lower-left sits at [0, 0] and top right at [width, height] — marking the 3D annotation’s 3DB box in which the 3D artwork gets drawn.

### name

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

string

R

| --- | --- | --- | --- | --- | --- |

The name of the annotation.

### page

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

integer

R

| --- | --- | --- | --- | --- | --- |

Zero-based number of the page on which the annotation sits.

### rect

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

array

R/W

| --- | --- | --- | --- | --- | --- |

Hands back four numbers [x ll, y ll, x ur, y ur] — the lower-left x, lower-left y, upper-right x, and upper-right y, in default user space — defining the rectangle that locates the annotation on its page.
