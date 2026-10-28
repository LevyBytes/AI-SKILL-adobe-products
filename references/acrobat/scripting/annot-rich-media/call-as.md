# callAS

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | All |

Reaches into ActionScript through the ExternalInterface convention to invoke a method that was exposed there (via ExternalInterface.addCallback in ActionScript). Whatever that named method hands back — given as the first parameter — is what callAS passes along.

Note

There is also a call method on the FlashMovie object, documented in the JS 3D API Reference, that relies on the very same mechanism as callAS.

Parameters

| Parameter | Description |
| --- | --- |
| methodName | The string name of the exposed method in ActionScript to be called. |
| arguments | A series of arguments of arbitrary type to be passed to the ActionScript method being called. |

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

```javascript
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
